var Ma = Object.defineProperty;
var Pa = (l, u, a) => u in l ? Ma(l, u, { enumerable: !0, configurable: !0, writable: !0, value: a }) : l[u] = a;
var ri = (l, u, a) => Pa(l, typeof u != "symbol" ? u + "" : u, a);
var Rt = 63710088e-1, ts = {
  centimeters: Rt * 100,
  centimetres: Rt * 100,
  degrees: 360 / (2 * Math.PI),
  feet: Rt * 3.28084,
  inches: Rt * 39.37,
  kilometers: Rt / 1e3,
  kilometres: Rt / 1e3,
  meters: Rt,
  metres: Rt,
  miles: Rt / 1609.344,
  millimeters: Rt * 1e3,
  millimetres: Rt * 1e3,
  nauticalmiles: Rt / 1852,
  radians: 1,
  yards: Rt * 1.0936
};
function sn(l, u, a = {}) {
  const f = { type: "Feature" };
  return (a.id === 0 || a.id) && (f.id = a.id), a.bbox && (f.bbox = a.bbox), f.properties = u || {}, f.geometry = l, f;
}
function Aa(l, u, a = {}) {
  if (!l)
    throw new Error("coordinates is required");
  if (!Array.isArray(l))
    throw new Error("coordinates must be an Array");
  if (l.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!mr(l[0]) || !mr(l[1]))
    throw new Error("coordinates must contain numbers");
  return sn({
    type: "Point",
    coordinates: l
  }, u, a);
}
function Ei(l, u, a = {}) {
  for (const h of l) {
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
  return sn({
    type: "Polygon",
    coordinates: l
  }, u, a);
}
function Ee(l, u = {}) {
  const a = { type: "FeatureCollection" };
  return u.id && (a.id = u.id), u.bbox && (a.bbox = u.bbox), a.features = l, a;
}
function es(l, u, a = {}) {
  return sn({
    type: "MultiPolygon",
    coordinates: l
  }, u, a);
}
function Da(l, u = "kilometers") {
  const a = ts[u];
  if (!a)
    throw new Error(u + " units is invalid");
  return l * a;
}
function Fa(l, u = "kilometers") {
  const a = ts[u];
  if (!a)
    throw new Error(u + " units is invalid");
  return l / a;
}
function mr(l) {
  return !isNaN(l) && l !== null && !Array.isArray(l);
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
function Ga(l, u) {
  var a = { label: 0, sent: function() {
    if (g[0] & 1) throw g[1];
    return g[1];
  }, trys: [], ops: [] }, f, h, g, d;
  return d = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function p(_) {
    return function(N) {
      return w([_, N]);
    };
  }
  function w(_) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (f = 1, h && (g = _[0] & 2 ? h.return : _[0] ? h.throw || ((g = h.return) && g.call(h), 0) : h.next) && !(g = g.call(h, _[1])).done) return g;
      switch (h = 0, g && (_ = [_[0] & 2, g.value]), _[0]) {
        case 0:
        case 1:
          g = _;
          break;
        case 4:
          return a.label++, { value: _[1], done: !1 };
        case 5:
          a.label++, h = _[1], _ = [0];
          continue;
        case 7:
          _ = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (g = a.trys, !(g = g.length > 0 && g[g.length - 1]) && (_[0] === 6 || _[0] === 2)) {
            a = 0;
            continue;
          }
          if (_[0] === 3 && (!g || _[1] > g[0] && _[1] < g[3])) {
            a.label = _[1];
            break;
          }
          if (_[0] === 6 && a.label < g[1]) {
            a.label = g[1], g = _;
            break;
          }
          if (g && a.label < g[2]) {
            a.label = g[2], a.ops.push(_);
            break;
          }
          g[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      _ = u.call(l, a);
    } catch (N) {
      _ = [6, N], h = 0;
    } finally {
      f = g = 0;
    }
    if (_[0] & 5) throw _[1];
    return { value: _[0] ? _[1] : void 0, done: !0 };
  }
}
var fe = (
  /** @class */
  /* @__PURE__ */ function() {
    function l(u, a) {
      this.next = null, this.key = u, this.data = a, this.left = null, this.right = null;
    }
    return l;
  }()
);
function qa(l, u) {
  return l > u ? 1 : l < u ? -1 : 0;
}
function le(l, u, a) {
  for (var f = new fe(null, null), h = f, g = f; ; ) {
    var d = a(l, u.key);
    if (d < 0) {
      if (u.left === null)
        break;
      if (a(l, u.left.key) < 0) {
        var p = u.left;
        if (u.left = p.right, p.right = u, u = p, u.left === null)
          break;
      }
      g.left = u, g = u, u = u.left;
    } else if (d > 0) {
      if (u.right === null)
        break;
      if (a(l, u.right.key) > 0) {
        var p = u.right;
        if (u.right = p.left, p.left = u, u = p, u.right === null)
          break;
      }
      h.right = u, h = u, u = u.right;
    } else
      break;
  }
  return h.right = u.left, g.left = u.right, u.left = f.right, u.right = f.left, u;
}
function si(l, u, a, f) {
  var h = new fe(l, u);
  if (a === null)
    return h.left = h.right = null, h;
  a = le(l, a, f);
  var g = f(l, a.key);
  return g < 0 ? (h.left = a.left, h.right = a, a.left = null) : g >= 0 && (h.right = a.right, h.left = a, a.right = null), h;
}
function dr(l, u, a) {
  var f = null, h = null;
  if (u) {
    u = le(l, u, a);
    var g = a(u.key, l);
    g === 0 ? (f = u.left, h = u.right) : g < 0 ? (h = u.right, u.right = null, f = u) : (f = u.left, u.left = null, h = u);
  }
  return { left: f, right: h };
}
function Ya(l, u, a) {
  return u === null ? l : (l === null || (u = le(l.key, u, a), u.left = l), u);
}
function hi(l, u, a, f, h) {
  if (l) {
    f("" + u + (a ? "└── " : "├── ") + h(l) + `
`);
    var g = u + (a ? "    " : "│   ");
    l.left && hi(l.left, g, !1, f, h), l.right && hi(l.right, g, !0, f, h);
  }
}
var Ii = (
  /** @class */
  function() {
    function l(u) {
      u === void 0 && (u = qa), this._root = null, this._size = 0, this._comparator = u;
    }
    return l.prototype.insert = function(u, a) {
      return this._size++, this._root = si(u, a, this._root, this._comparator);
    }, l.prototype.add = function(u, a) {
      var f = new fe(u, a);
      this._root === null && (f.left = f.right = null, this._size++, this._root = f);
      var h = this._comparator, g = le(u, this._root, h), d = h(u, g.key);
      return d === 0 ? this._root = g : (d < 0 ? (f.left = g.left, f.right = g, g.left = null) : d > 0 && (f.right = g.right, f.left = g, g.right = null), this._size++, this._root = f), this._root;
    }, l.prototype.remove = function(u) {
      this._root = this._remove(u, this._root, this._comparator);
    }, l.prototype._remove = function(u, a, f) {
      var h;
      if (a === null)
        return null;
      a = le(u, a, f);
      var g = f(u, a.key);
      return g === 0 ? (a.left === null ? h = a.right : (h = le(u, a.left, f), h.right = a.right), this._size--, h) : a;
    }, l.prototype.pop = function() {
      var u = this._root;
      if (u) {
        for (; u.left; )
          u = u.left;
        return this._root = le(u.key, this._root, this._comparator), this._root = this._remove(u.key, this._root, this._comparator), { key: u.key, data: u.data };
      }
      return null;
    }, l.prototype.findStatic = function(u) {
      for (var a = this._root, f = this._comparator; a; ) {
        var h = f(u, a.key);
        if (h === 0)
          return a;
        h < 0 ? a = a.left : a = a.right;
      }
      return null;
    }, l.prototype.find = function(u) {
      return this._root && (this._root = le(u, this._root, this._comparator), this._comparator(u, this._root.key) !== 0) ? null : this._root;
    }, l.prototype.contains = function(u) {
      for (var a = this._root, f = this._comparator; a; ) {
        var h = f(u, a.key);
        if (h === 0)
          return !0;
        h < 0 ? a = a.left : a = a.right;
      }
      return !1;
    }, l.prototype.forEach = function(u, a) {
      for (var f = this._root, h = [], g = !1; !g; )
        f !== null ? (h.push(f), f = f.left) : h.length !== 0 ? (f = h.pop(), u.call(a, f), f = f.right) : g = !0;
      return this;
    }, l.prototype.range = function(u, a, f, h) {
      for (var g = [], d = this._comparator, p = this._root, w; g.length !== 0 || p; )
        if (p)
          g.push(p), p = p.left;
        else {
          if (p = g.pop(), w = d(p.key, a), w > 0)
            break;
          if (d(p.key, u) >= 0 && f.call(h, p))
            return this;
          p = p.right;
        }
      return this;
    }, l.prototype.keys = function() {
      var u = [];
      return this.forEach(function(a) {
        var f = a.key;
        return u.push(f);
      }), u;
    }, l.prototype.values = function() {
      var u = [];
      return this.forEach(function(a) {
        var f = a.data;
        return u.push(f);
      }), u;
    }, l.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, l.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, l.prototype.minNode = function(u) {
      if (u === void 0 && (u = this._root), u)
        for (; u.left; )
          u = u.left;
      return u;
    }, l.prototype.maxNode = function(u) {
      if (u === void 0 && (u = this._root), u)
        for (; u.right; )
          u = u.right;
      return u;
    }, l.prototype.at = function(u) {
      for (var a = this._root, f = !1, h = 0, g = []; !f; )
        if (a)
          g.push(a), a = a.left;
        else if (g.length > 0) {
          if (a = g.pop(), h === u)
            return a;
          h++, a = a.right;
        } else
          f = !0;
      return null;
    }, l.prototype.next = function(u) {
      var a = this._root, f = null;
      if (u.right) {
        for (f = u.right; f.left; )
          f = f.left;
        return f;
      }
      for (var h = this._comparator; a; ) {
        var g = h(u.key, a.key);
        if (g === 0)
          break;
        g < 0 ? (f = a, a = a.left) : a = a.right;
      }
      return f;
    }, l.prototype.prev = function(u) {
      var a = this._root, f = null;
      if (u.left !== null) {
        for (f = u.left; f.right; )
          f = f.right;
        return f;
      }
      for (var h = this._comparator; a; ) {
        var g = h(u.key, a.key);
        if (g === 0)
          break;
        g < 0 ? a = a.left : (f = a, a = a.right);
      }
      return f;
    }, l.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, l.prototype.toList = function() {
      return Ba(this._root);
    }, l.prototype.load = function(u, a, f) {
      a === void 0 && (a = []), f === void 0 && (f = !1);
      var h = u.length, g = this._comparator;
      if (f && gi(u, a, 0, h - 1, g), this._root === null)
        this._root = ci(u, a, 0, h), this._size = h;
      else {
        var d = Xa(this.toList(), za(u, a), g);
        h = this._size + h, this._root = fi({ head: d }, 0, h);
      }
      return this;
    }, l.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(l.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(l.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), l.prototype.toString = function(u) {
      u === void 0 && (u = function(f) {
        return String(f.key);
      });
      var a = [];
      return hi(this._root, "", !0, function(f) {
        return a.push(f);
      }, u), a.join("");
    }, l.prototype.update = function(u, a, f) {
      var h = this._comparator, g = dr(u, this._root, h), d = g.left, p = g.right;
      h(u, a) < 0 ? p = si(a, f, p, h) : d = si(a, f, d, h), this._root = Ya(d, p, h);
    }, l.prototype.split = function(u) {
      return dr(u, this._root, this._comparator);
    }, l.prototype[Symbol.iterator] = function() {
      var u, a, f;
      return Ga(this, function(h) {
        switch (h.label) {
          case 0:
            u = this._root, a = [], f = !1, h.label = 1;
          case 1:
            return f ? [3, 6] : u === null ? [3, 2] : (a.push(u), u = u.left, [3, 5]);
          case 2:
            return a.length === 0 ? [3, 4] : (u = a.pop(), [4, u]);
          case 3:
            return h.sent(), u = u.right, [3, 5];
          case 4:
            f = !0, h.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, l;
  }()
);
function ci(l, u, a, f) {
  var h = f - a;
  if (h > 0) {
    var g = a + Math.floor(h / 2), d = l[g], p = u[g], w = new fe(d, p);
    return w.left = ci(l, u, a, g), w.right = ci(l, u, g + 1, f), w;
  }
  return null;
}
function za(l, u) {
  for (var a = new fe(null, null), f = a, h = 0; h < l.length; h++)
    f = f.next = new fe(l[h], u[h]);
  return f.next = null, a.next;
}
function Ba(l) {
  for (var u = l, a = [], f = !1, h = new fe(null, null), g = h; !f; )
    u ? (a.push(u), u = u.left) : a.length > 0 ? (u = g = g.next = a.pop(), u = u.right) : f = !0;
  return g.next = null, h.next;
}
function fi(l, u, a) {
  var f = a - u;
  if (f > 0) {
    var h = u + Math.floor(f / 2), g = fi(l, u, h), d = l.head;
    return d.left = g, l.head = l.head.next, d.right = fi(l, h + 1, a), d;
  }
  return null;
}
function Xa(l, u, a) {
  for (var f = new fe(null, null), h = f, g = l, d = u; g !== null && d !== null; )
    a(g.key, d.key) < 0 ? (h.next = g, g = g.next) : (h.next = d, d = d.next), h = h.next;
  return g !== null ? h.next = g : d !== null && (h.next = d), f.next;
}
function gi(l, u, a, f, h) {
  if (!(a >= f)) {
    for (var g = l[a + f >> 1], d = a - 1, p = f + 1; ; ) {
      do
        d++;
      while (h(l[d], g) < 0);
      do
        p--;
      while (h(l[p], g) > 0);
      if (d >= p)
        break;
      var w = l[d];
      l[d] = l[p], l[p] = w, w = u[d], u[d] = u[p], u[p] = w;
    }
    gi(l, u, a, p, h), gi(l, u, p + 1, f, h);
  }
}
const re = 11102230246251565e-32, wt = 134217729, Ua = (3 + 8 * re) * re;
function ai(l, u, a, f, h) {
  let g, d, p, w, _ = u[0], N = f[0], m = 0, I = 0;
  N > _ == N > -_ ? (g = _, _ = u[++m]) : (g = N, N = f[++I]);
  let E = 0;
  if (m < l && I < a)
    for (N > _ == N > -_ ? (d = _ + g, p = g - (d - _), _ = u[++m]) : (d = N + g, p = g - (d - N), N = f[++I]), g = d, p !== 0 && (h[E++] = p); m < l && I < a; )
      N > _ == N > -_ ? (d = g + _, w = d - g, p = g - (d - w) + (_ - w), _ = u[++m]) : (d = g + N, w = d - g, p = g - (d - w) + (N - w), N = f[++I]), g = d, p !== 0 && (h[E++] = p);
  for (; m < l; )
    d = g + _, w = d - g, p = g - (d - w) + (_ - w), _ = u[++m], g = d, p !== 0 && (h[E++] = p);
  for (; I < a; )
    d = g + N, w = d - g, p = g - (d - w) + (N - w), N = f[++I], g = d, p !== 0 && (h[E++] = p);
  return (g !== 0 || E === 0) && (h[E++] = g), E;
}
function Va(l, u) {
  let a = u[0];
  for (let f = 1; f < l; f++) a += u[f];
  return a;
}
function an(l) {
  return new Float64Array(l);
}
const Ha = (3 + 16 * re) * re, Za = (2 + 12 * re) * re, $a = (9 + 64 * re) * re * re, be = an(4), pr = an(8), _r = an(12), xr = an(16), Tt = an(4);
function ja(l, u, a, f, h, g, d) {
  let p, w, _, N, m, I, E, L, M, R, O, b, P, G, D, B, X, V;
  const U = l - h, st = a - h, et = u - g, rt = f - g;
  G = U * rt, I = wt * U, E = I - (I - U), L = U - E, I = wt * rt, M = I - (I - rt), R = rt - M, D = L * R - (G - E * M - L * M - E * R), B = et * st, I = wt * et, E = I - (I - et), L = et - E, I = wt * st, M = I - (I - st), R = st - M, X = L * R - (B - E * M - L * M - E * R), O = D - X, m = D - O, be[0] = D - (O + m) + (m - X), b = G + O, m = b - G, P = G - (b - m) + (O - m), O = P - B, m = P - O, be[1] = P - (O + m) + (m - B), V = b + O, m = V - b, be[2] = b - (V - m) + (O - m), be[3] = V;
  let ut = Va(4, be), z = Za * d;
  if (ut >= z || -ut >= z || (m = l - U, p = l - (U + m) + (m - h), m = a - st, _ = a - (st + m) + (m - h), m = u - et, w = u - (et + m) + (m - g), m = f - rt, N = f - (rt + m) + (m - g), p === 0 && w === 0 && _ === 0 && N === 0) || (z = $a * d + Ua * Math.abs(ut), ut += U * N + rt * p - (et * _ + st * w), ut >= z || -ut >= z)) return ut;
  G = p * rt, I = wt * p, E = I - (I - p), L = p - E, I = wt * rt, M = I - (I - rt), R = rt - M, D = L * R - (G - E * M - L * M - E * R), B = w * st, I = wt * w, E = I - (I - w), L = w - E, I = wt * st, M = I - (I - st), R = st - M, X = L * R - (B - E * M - L * M - E * R), O = D - X, m = D - O, Tt[0] = D - (O + m) + (m - X), b = G + O, m = b - G, P = G - (b - m) + (O - m), O = P - B, m = P - O, Tt[1] = P - (O + m) + (m - B), V = b + O, m = V - b, Tt[2] = b - (V - m) + (O - m), Tt[3] = V;
  const nt = ai(4, be, 4, Tt, pr);
  G = U * N, I = wt * U, E = I - (I - U), L = U - E, I = wt * N, M = I - (I - N), R = N - M, D = L * R - (G - E * M - L * M - E * R), B = et * _, I = wt * et, E = I - (I - et), L = et - E, I = wt * _, M = I - (I - _), R = _ - M, X = L * R - (B - E * M - L * M - E * R), O = D - X, m = D - O, Tt[0] = D - (O + m) + (m - X), b = G + O, m = b - G, P = G - (b - m) + (O - m), O = P - B, m = P - O, Tt[1] = P - (O + m) + (m - B), V = b + O, m = V - b, Tt[2] = b - (V - m) + (O - m), Tt[3] = V;
  const ot = ai(nt, pr, 4, Tt, _r);
  G = p * N, I = wt * p, E = I - (I - p), L = p - E, I = wt * N, M = I - (I - N), R = N - M, D = L * R - (G - E * M - L * M - E * R), B = w * _, I = wt * w, E = I - (I - w), L = w - E, I = wt * _, M = I - (I - _), R = _ - M, X = L * R - (B - E * M - L * M - E * R), O = D - X, m = D - O, Tt[0] = D - (O + m) + (m - X), b = G + O, m = b - G, P = G - (b - m) + (O - m), O = P - B, m = P - O, Tt[1] = P - (O + m) + (m - B), V = b + O, m = V - b, Tt[2] = b - (V - m) + (O - m), Tt[3] = V;
  const ft = ai(ot, _r, 4, Tt, xr);
  return xr[ft - 1];
}
function Wa(l, u, a, f, h, g) {
  const d = (u - g) * (a - h), p = (l - h) * (f - g), w = d - p, _ = Math.abs(d + p);
  return Math.abs(w) >= Ha * _ ? w : -ja(l, u, a, f, h, g, _);
}
const Qe = (l, u) => l.ll.x <= u.x && u.x <= l.ur.x && l.ll.y <= u.y && u.y <= l.ur.y, vi = (l, u) => {
  if (u.ur.x < l.ll.x || l.ur.x < u.ll.x || u.ur.y < l.ll.y || l.ur.y < u.ll.y) return null;
  const a = l.ll.x < u.ll.x ? u.ll.x : l.ll.x, f = l.ur.x < u.ur.x ? l.ur.x : u.ur.x, h = l.ll.y < u.ll.y ? u.ll.y : l.ll.y, g = l.ur.y < u.ur.y ? l.ur.y : u.ur.y;
  return {
    ll: {
      x: a,
      y: h
    },
    ur: {
      x: f,
      y: g
    }
  };
};
let he = Number.EPSILON;
he === void 0 && (he = Math.pow(2, -52));
const Qa = he * he, kr = (l, u) => {
  if (-he < l && l < he && -he < u && u < he)
    return 0;
  const a = l - u;
  return a * a < Qa * l * u ? 0 : l < u ? -1 : 1;
};
class Ka {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Er(), this.yRounder = new Er();
  }
  round(u, a) {
    return {
      x: this.xRounder.round(u),
      y: this.yRounder.round(a)
    };
  }
}
class Er {
  constructor() {
    this.tree = new Ii(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(u) {
    const a = this.tree.add(u), f = this.tree.prev(a);
    if (f !== null && kr(a.key, f.key) === 0)
      return this.tree.remove(u), f.key;
    const h = this.tree.next(a);
    return h !== null && kr(a.key, h.key) === 0 ? (this.tree.remove(u), h.key) : u;
  }
}
const en = new Ka(), wn = (l, u) => l.x * u.y - l.y * u.x, ns = (l, u) => l.x * u.x + l.y * u.y, Ir = (l, u, a) => {
  const f = Wa(l.x, l.y, u.x, u.y, a.x, a.y);
  return f > 0 ? -1 : f < 0 ? 1 : 0;
}, Tn = (l) => Math.sqrt(ns(l, l)), Ja = (l, u, a) => {
  const f = {
    x: u.x - l.x,
    y: u.y - l.y
  }, h = {
    x: a.x - l.x,
    y: a.y - l.y
  };
  return wn(h, f) / Tn(h) / Tn(f);
}, tu = (l, u, a) => {
  const f = {
    x: u.x - l.x,
    y: u.y - l.y
  }, h = {
    x: a.x - l.x,
    y: a.y - l.y
  };
  return ns(h, f) / Tn(h) / Tn(f);
}, Nr = (l, u, a) => u.y === 0 ? null : {
  x: l.x + u.x / u.y * (a - l.y),
  y: a
}, wr = (l, u, a) => u.x === 0 ? null : {
  x: a,
  y: l.y + u.y / u.x * (a - l.x)
}, eu = (l, u, a, f) => {
  if (u.x === 0) return wr(a, f, l.x);
  if (f.x === 0) return wr(l, u, a.x);
  if (u.y === 0) return Nr(a, f, l.y);
  if (f.y === 0) return Nr(l, u, a.y);
  const h = wn(u, f);
  if (h == 0) return null;
  const g = {
    x: a.x - l.x,
    y: a.y - l.y
  }, d = wn(g, u) / h, p = wn(g, f) / h, w = l.x + p * u.x, _ = a.x + d * f.x, N = l.y + p * u.y, m = a.y + d * f.y, I = (w + _) / 2, E = (N + m) / 2;
  return {
    x: I,
    y: E
  };
};
class zt {
  // for ordering sweep events in the sweep event queue
  static compare(u, a) {
    const f = zt.comparePoints(u.point, a.point);
    return f !== 0 ? f : (u.point !== a.point && u.link(a), u.isLeft !== a.isLeft ? u.isLeft ? 1 : -1 : ce.compare(u.segment, a.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(u, a) {
    return u.x < a.x ? -1 : u.x > a.x ? 1 : u.y < a.y ? -1 : u.y > a.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(u, a) {
    u.events === void 0 ? u.events = [this] : u.events.push(this), this.point = u, this.isLeft = a;
  }
  link(u) {
    if (u.point === this.point)
      throw new Error("Tried to link already linked events");
    const a = u.point.events;
    for (let f = 0, h = a.length; f < h; f++) {
      const g = a[f];
      this.point.events.push(g), g.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const u = this.point.events.length;
    for (let a = 0; a < u; a++) {
      const f = this.point.events[a];
      if (f.segment.consumedBy === void 0)
        for (let h = a + 1; h < u; h++) {
          const g = this.point.events[h];
          g.consumedBy === void 0 && f.otherSE.point.events === g.otherSE.point.events && f.segment.consume(g.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const u = [];
    for (let a = 0, f = this.point.events.length; a < f; a++) {
      const h = this.point.events[a];
      h !== this && !h.segment.ringOut && h.segment.isInResult() && u.push(h);
    }
    return u;
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
  getLeftmostComparator(u) {
    const a = /* @__PURE__ */ new Map(), f = (h) => {
      const g = h.otherSE;
      a.set(h, {
        sine: Ja(this.point, u.point, g.point),
        cosine: tu(this.point, u.point, g.point)
      });
    };
    return (h, g) => {
      a.has(h) || f(h), a.has(g) || f(g);
      const {
        sine: d,
        cosine: p
      } = a.get(h), {
        sine: w,
        cosine: _
      } = a.get(g);
      return d >= 0 && w >= 0 ? p < _ ? 1 : p > _ ? -1 : 0 : d < 0 && w < 0 ? p < _ ? -1 : p > _ ? 1 : 0 : w < d ? -1 : w > d ? 1 : 0;
    };
  }
}
let nu = 0;
class ce {
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
  static compare(u, a) {
    const f = u.leftSE.point.x, h = a.leftSE.point.x, g = u.rightSE.point.x, d = a.rightSE.point.x;
    if (d < f) return 1;
    if (g < h) return -1;
    const p = u.leftSE.point.y, w = a.leftSE.point.y, _ = u.rightSE.point.y, N = a.rightSE.point.y;
    if (f < h) {
      if (w < p && w < _) return 1;
      if (w > p && w > _) return -1;
      const m = u.comparePoint(a.leftSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
      const I = a.comparePoint(u.rightSE.point);
      return I !== 0 ? I : -1;
    }
    if (f > h) {
      if (p < w && p < N) return -1;
      if (p > w && p > N) return 1;
      const m = a.comparePoint(u.leftSE.point);
      if (m !== 0) return m;
      const I = u.comparePoint(a.rightSE.point);
      return I < 0 ? 1 : I > 0 ? -1 : 1;
    }
    if (p < w) return -1;
    if (p > w) return 1;
    if (g < d) {
      const m = a.comparePoint(u.rightSE.point);
      if (m !== 0) return m;
    }
    if (g > d) {
      const m = u.comparePoint(a.rightSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
    }
    if (g !== d) {
      const m = _ - p, I = g - f, E = N - w, L = d - h;
      if (m > I && E < L) return 1;
      if (m < I && E > L) return -1;
    }
    return g > d ? 1 : g < d || _ < N ? -1 : _ > N ? 1 : u.id < a.id ? -1 : u.id > a.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(u, a, f, h) {
    this.id = ++nu, this.leftSE = u, u.segment = this, u.otherSE = a, this.rightSE = a, a.segment = this, a.otherSE = u, this.rings = f, this.windings = h;
  }
  static fromRing(u, a, f) {
    let h, g, d;
    const p = zt.comparePoints(u, a);
    if (p < 0)
      h = u, g = a, d = 1;
    else if (p > 0)
      h = a, g = u, d = -1;
    else throw new Error(`Tried to create degenerate segment at [${u.x}, ${u.y}]`);
    const w = new zt(h, !0), _ = new zt(g, !1);
    return new ce(w, _, [f], [d]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(u) {
    this.rightSE = u, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const u = this.leftSE.point.y, a = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: u < a ? u : a
      },
      ur: {
        x: this.rightSE.point.x,
        y: u > a ? u : a
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
  isAnEndpoint(u) {
    return u.x === this.leftSE.point.x && u.y === this.leftSE.point.y || u.x === this.rightSE.point.x && u.y === this.rightSE.point.y;
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
  comparePoint(u) {
    if (this.isAnEndpoint(u)) return 0;
    const a = this.leftSE.point, f = this.rightSE.point, h = this.vector();
    if (a.x === f.x)
      return u.x === a.x ? 0 : u.x < a.x ? 1 : -1;
    const g = (u.y - a.y) / h.y, d = a.x + g * h.x;
    if (u.x === d) return 0;
    const p = (u.x - a.x) / h.x, w = a.y + p * h.y;
    return u.y === w ? 0 : u.y < w ? -1 : 1;
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
  getIntersection(u) {
    const a = this.bbox(), f = u.bbox(), h = vi(a, f);
    if (h === null) return null;
    const g = this.leftSE.point, d = this.rightSE.point, p = u.leftSE.point, w = u.rightSE.point, _ = Qe(a, p) && this.comparePoint(p) === 0, N = Qe(f, g) && u.comparePoint(g) === 0, m = Qe(a, w) && this.comparePoint(w) === 0, I = Qe(f, d) && u.comparePoint(d) === 0;
    if (N && _)
      return I && !m ? d : !I && m ? w : null;
    if (N)
      return m && g.x === w.x && g.y === w.y ? null : g;
    if (_)
      return I && d.x === p.x && d.y === p.y ? null : p;
    if (I && m) return null;
    if (I) return d;
    if (m) return w;
    const E = eu(g, this.vector(), p, u.vector());
    return E === null || !Qe(h, E) ? null : en.round(E.x, E.y);
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
  split(u) {
    const a = [], f = u.events !== void 0, h = new zt(u, !0), g = new zt(u, !1), d = this.rightSE;
    this.replaceRightSE(g), a.push(g), a.push(h);
    const p = new ce(h, d, this.rings.slice(), this.windings.slice());
    return zt.comparePoints(p.leftSE.point, p.rightSE.point) > 0 && p.swapEvents(), zt.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), f && (h.checkForConsuming(), g.checkForConsuming()), a;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const u = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = u, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let a = 0, f = this.windings.length; a < f; a++)
      this.windings[a] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(u) {
    let a = this, f = u;
    for (; a.consumedBy; ) a = a.consumedBy;
    for (; f.consumedBy; ) f = f.consumedBy;
    const h = ce.compare(a, f);
    if (h !== 0) {
      if (h > 0) {
        const g = a;
        a = f, f = g;
      }
      if (a.prev === f) {
        const g = a;
        a = f, f = g;
      }
      for (let g = 0, d = f.rings.length; g < d; g++) {
        const p = f.rings[g], w = f.windings[g], _ = a.rings.indexOf(p);
        _ === -1 ? (a.rings.push(p), a.windings.push(w)) : a.windings[_] += w;
      }
      f.rings = null, f.windings = null, f.consumedBy = a, f.leftSE.consumedBy = a.leftSE, f.rightSE.consumedBy = a.rightSE;
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
      const u = this.prev.consumedBy || this.prev;
      this._beforeState = u.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const u = this.beforeState();
    this._afterState = {
      rings: u.rings.slice(0),
      windings: u.windings.slice(0),
      multiPolys: []
    };
    const a = this._afterState.rings, f = this._afterState.windings, h = this._afterState.multiPolys;
    for (let p = 0, w = this.rings.length; p < w; p++) {
      const _ = this.rings[p], N = this.windings[p], m = a.indexOf(_);
      m === -1 ? (a.push(_), f.push(N)) : f[m] += N;
    }
    const g = [], d = [];
    for (let p = 0, w = a.length; p < w; p++) {
      if (f[p] === 0) continue;
      const _ = a[p], N = _.poly;
      if (d.indexOf(N) === -1)
        if (_.isExterior) g.push(N);
        else {
          d.indexOf(N) === -1 && d.push(N);
          const m = g.indexOf(_.poly);
          m !== -1 && g.splice(m, 1);
        }
    }
    for (let p = 0, w = g.length; p < w; p++) {
      const _ = g[p].multiPoly;
      h.indexOf(_) === -1 && h.push(_);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const u = this.beforeState().multiPolys, a = this.afterState().multiPolys;
    switch (Vt.type) {
      case "union": {
        const f = u.length === 0, h = a.length === 0;
        this._isInResult = f !== h;
        break;
      }
      case "intersection": {
        let f, h;
        u.length < a.length ? (f = u.length, h = a.length) : (f = a.length, h = u.length), this._isInResult = h === Vt.numMultiPolys && f < h;
        break;
      }
      case "xor": {
        const f = Math.abs(u.length - a.length);
        this._isInResult = f % 2 === 1;
        break;
      }
      case "difference": {
        const f = (h) => h.length === 1 && h[0].isSubject;
        this._isInResult = f(u) !== f(a);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${Vt.type}`);
    }
    return this._isInResult;
  }
}
class Sr {
  constructor(u, a, f) {
    if (!Array.isArray(u) || u.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = a, this.isExterior = f, this.segments = [], typeof u[0][0] != "number" || typeof u[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const h = en.round(u[0][0], u[0][1]);
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
    for (let d = 1, p = u.length; d < p; d++) {
      if (typeof u[d][0] != "number" || typeof u[d][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let w = en.round(u[d][0], u[d][1]);
      w.x === g.x && w.y === g.y || (this.segments.push(ce.fromRing(g, w, this)), w.x < this.bbox.ll.x && (this.bbox.ll.x = w.x), w.y < this.bbox.ll.y && (this.bbox.ll.y = w.y), w.x > this.bbox.ur.x && (this.bbox.ur.x = w.x), w.y > this.bbox.ur.y && (this.bbox.ur.y = w.y), g = w);
    }
    (h.x !== g.x || h.y !== g.y) && this.segments.push(ce.fromRing(g, h, this));
  }
  getSweepEvents() {
    const u = [];
    for (let a = 0, f = this.segments.length; a < f; a++) {
      const h = this.segments[a];
      u.push(h.leftSE), u.push(h.rightSE);
    }
    return u;
  }
}
class iu {
  constructor(u, a) {
    if (!Array.isArray(u))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Sr(u[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let f = 1, h = u.length; f < h; f++) {
      const g = new Sr(u[f], this, !1);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.interiorRings.push(g);
    }
    this.multiPoly = a;
  }
  getSweepEvents() {
    const u = this.exteriorRing.getSweepEvents();
    for (let a = 0, f = this.interiorRings.length; a < f; a++) {
      const h = this.interiorRings[a].getSweepEvents();
      for (let g = 0, d = h.length; g < d; g++)
        u.push(h[g]);
    }
    return u;
  }
}
class Lr {
  constructor(u, a) {
    if (!Array.isArray(u))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof u[0][0][0] == "number" && (u = [u]);
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
    for (let f = 0, h = u.length; f < h; f++) {
      const g = new iu(u[f], this);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.polys.push(g);
    }
    this.isSubject = a;
  }
  getSweepEvents() {
    const u = [];
    for (let a = 0, f = this.polys.length; a < f; a++) {
      const h = this.polys[a].getSweepEvents();
      for (let g = 0, d = h.length; g < d; g++)
        u.push(h[g]);
    }
    return u;
  }
}
class Cn {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(u) {
    const a = [];
    for (let f = 0, h = u.length; f < h; f++) {
      const g = u[f];
      if (!g.isInResult() || g.ringOut) continue;
      let d = null, p = g.leftSE, w = g.rightSE;
      const _ = [p], N = p.point, m = [];
      for (; d = p, p = w, _.push(p), p.point !== N; )
        for (; ; ) {
          const I = p.getAvailableLinkedEvents();
          if (I.length === 0) {
            const M = _[0].point, R = _[_.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${M.x}, ${M.y}]. Last matching segment found ends at [${R.x}, ${R.y}].`);
          }
          if (I.length === 1) {
            w = I[0].otherSE;
            break;
          }
          let E = null;
          for (let M = 0, R = m.length; M < R; M++)
            if (m[M].point === p.point) {
              E = M;
              break;
            }
          if (E !== null) {
            const M = m.splice(E)[0], R = _.splice(M.index);
            R.unshift(R[0].otherSE), a.push(new Cn(R.reverse()));
            continue;
          }
          m.push({
            index: _.length,
            point: p.point
          });
          const L = p.getLeftmostComparator(d);
          w = I.sort(L)[0].otherSE;
          break;
        }
      a.push(new Cn(_));
    }
    return a;
  }
  constructor(u) {
    this.events = u;
    for (let a = 0, f = u.length; a < f; a++)
      u[a].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let u = this.events[0].point;
    const a = [u];
    for (let _ = 1, N = this.events.length - 1; _ < N; _++) {
      const m = this.events[_].point, I = this.events[_ + 1].point;
      Ir(m, u, I) !== 0 && (a.push(m), u = m);
    }
    if (a.length === 1) return null;
    const f = a[0], h = a[1];
    Ir(f, u, h) === 0 && a.shift(), a.push(a[0]);
    const g = this.isExteriorRing() ? 1 : -1, d = this.isExteriorRing() ? 0 : a.length - 1, p = this.isExteriorRing() ? a.length : -1, w = [];
    for (let _ = d; _ != p; _ += g) w.push([a[_].x, a[_].y]);
    return w;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const u = this.enclosingRing();
      this._isExteriorRing = u ? !u.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let u = this.events[0];
    for (let h = 1, g = this.events.length; h < g; h++) {
      const d = this.events[h];
      zt.compare(u, d) > 0 && (u = d);
    }
    let a = u.segment.prevInResult(), f = a ? a.prevInResult() : null;
    for (; ; ) {
      if (!a) return null;
      if (!f) return a.ringOut;
      if (f.ringOut !== a.ringOut)
        return f.ringOut.enclosingRing() !== a.ringOut ? a.ringOut : a.ringOut.enclosingRing();
      a = f.prevInResult(), f = a ? a.prevInResult() : null;
    }
  }
}
class Tr {
  constructor(u) {
    this.exteriorRing = u, u.poly = this, this.interiorRings = [];
  }
  addInterior(u) {
    this.interiorRings.push(u), u.poly = this;
  }
  getGeom() {
    const u = [this.exteriorRing.getGeom()];
    if (u[0] === null) return null;
    for (let a = 0, f = this.interiorRings.length; a < f; a++) {
      const h = this.interiorRings[a].getGeom();
      h !== null && u.push(h);
    }
    return u;
  }
}
class ru {
  constructor(u) {
    this.rings = u, this.polys = this._composePolys(u);
  }
  getGeom() {
    const u = [];
    for (let a = 0, f = this.polys.length; a < f; a++) {
      const h = this.polys[a].getGeom();
      h !== null && u.push(h);
    }
    return u;
  }
  _composePolys(u) {
    const a = [];
    for (let f = 0, h = u.length; f < h; f++) {
      const g = u[f];
      if (!g.poly)
        if (g.isExteriorRing()) a.push(new Tr(g));
        else {
          const d = g.enclosingRing();
          d.poly || a.push(new Tr(d)), d.poly.addInterior(g);
        }
    }
    return a;
  }
}
class su {
  constructor(u) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ce.compare;
    this.queue = u, this.tree = new Ii(a), this.segments = [];
  }
  process(u) {
    const a = u.segment, f = [];
    if (u.consumedBy)
      return u.isLeft ? this.queue.remove(u.otherSE) : this.tree.remove(a), f;
    const h = u.isLeft ? this.tree.add(a) : this.tree.find(a);
    if (!h) throw new Error(`Unable to find segment #${a.id} [${a.leftSE.point.x}, ${a.leftSE.point.y}] -> [${a.rightSE.point.x}, ${a.rightSE.point.y}] in SweepLine tree.`);
    let g = h, d = h, p, w;
    for (; p === void 0; )
      g = this.tree.prev(g), g === null ? p = null : g.key.consumedBy === void 0 && (p = g.key);
    for (; w === void 0; )
      d = this.tree.next(d), d === null ? w = null : d.key.consumedBy === void 0 && (w = d.key);
    if (u.isLeft) {
      let _ = null;
      if (p) {
        const m = p.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (_ = m), !p.isAnEndpoint(m))) {
          const I = this._splitSafely(p, m);
          for (let E = 0, L = I.length; E < L; E++)
            f.push(I[E]);
        }
      }
      let N = null;
      if (w) {
        const m = w.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (N = m), !w.isAnEndpoint(m))) {
          const I = this._splitSafely(w, m);
          for (let E = 0, L = I.length; E < L; E++)
            f.push(I[E]);
        }
      }
      if (_ !== null || N !== null) {
        let m = null;
        _ === null ? m = N : N === null ? m = _ : m = zt.comparePoints(_, N) <= 0 ? _ : N, this.queue.remove(a.rightSE), f.push(a.rightSE);
        const I = a.split(m);
        for (let E = 0, L = I.length; E < L; E++)
          f.push(I[E]);
      }
      f.length > 0 ? (this.tree.remove(a), f.push(u)) : (this.segments.push(a), a.prev = p);
    } else {
      if (p && w) {
        const _ = p.getIntersection(w);
        if (_ !== null) {
          if (!p.isAnEndpoint(_)) {
            const N = this._splitSafely(p, _);
            for (let m = 0, I = N.length; m < I; m++)
              f.push(N[m]);
          }
          if (!w.isAnEndpoint(_)) {
            const N = this._splitSafely(w, _);
            for (let m = 0, I = N.length; m < I; m++)
              f.push(N[m]);
          }
        }
      }
      this.tree.remove(a);
    }
    return f;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(u, a) {
    this.tree.remove(u);
    const f = u.rightSE;
    this.queue.remove(f);
    const h = u.split(a);
    return h.push(f), u.consumedBy === void 0 && this.tree.add(u), h;
  }
}
const Cr = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, au = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class uu {
  run(u, a, f) {
    Vt.type = u, en.reset();
    const h = [new Lr(a, !0)];
    for (let m = 0, I = f.length; m < I; m++)
      h.push(new Lr(f[m], !1));
    if (Vt.numMultiPolys = h.length, Vt.type === "difference") {
      const m = h[0];
      let I = 1;
      for (; I < h.length; )
        vi(h[I].bbox, m.bbox) !== null ? I++ : h.splice(I, 1);
    }
    if (Vt.type === "intersection")
      for (let m = 0, I = h.length; m < I; m++) {
        const E = h[m];
        for (let L = m + 1, M = h.length; L < M; L++)
          if (vi(E.bbox, h[L].bbox) === null) return [];
      }
    const g = new Ii(zt.compare);
    for (let m = 0, I = h.length; m < I; m++) {
      const E = h[m].getSweepEvents();
      for (let L = 0, M = E.length; L < M; L++)
        if (g.insert(E[L]), g.size > Cr)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const d = new su(g);
    let p = g.size, w = g.pop();
    for (; w; ) {
      const m = w.key;
      if (g.size === p) {
        const E = m.segment;
        throw new Error(`Unable to pop() ${m.isLeft ? "left" : "right"} SweepEvent [${m.point.x}, ${m.point.y}] from segment #${E.id} [${E.leftSE.point.x}, ${E.leftSE.point.y}] -> [${E.rightSE.point.x}, ${E.rightSE.point.y}] from queue.`);
      }
      if (g.size > Cr)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (d.segments.length > au)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const I = d.process(m);
      for (let E = 0, L = I.length; E < L; E++) {
        const M = I[E];
        M.consumedBy === void 0 && g.insert(M);
      }
      p = g.size, w = g.pop();
    }
    en.reset();
    const _ = Cn.factory(d.segments);
    return new ru(_).getGeom();
  }
}
const Vt = new uu(), ou = function(l) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Vt.run("union", l, a);
}, lu = function(l) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Vt.run("intersection", l, a);
}, hu = function(l) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Vt.run("xor", l, a);
}, cu = function(l) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Vt.run("difference", l, a);
};
var is = {
  union: ou,
  intersection: lu,
  xor: hu,
  difference: cu
};
function rs(l, u, a) {
  if (l !== null)
    for (var f, h, g, d, p, w, _, N = 0, m = 0, I, E = l.type, L = E === "FeatureCollection", M = E === "Feature", R = L ? l.features.length : 1, O = 0; O < R; O++) {
      _ = L ? l.features[O].geometry : M ? l.geometry : l, I = _ ? _.type === "GeometryCollection" : !1, p = I ? _.geometries.length : 1;
      for (var b = 0; b < p; b++) {
        var P = 0, G = 0;
        if (d = I ? _.geometries[b] : _, d !== null) {
          w = d.coordinates;
          var D = d.type;
          switch (N = 0, D) {
            case null:
              break;
            case "Point":
              if (u(
                w,
                m,
                O,
                P,
                G
              ) === !1)
                return !1;
              m++, P++;
              break;
            case "LineString":
            case "MultiPoint":
              for (f = 0; f < w.length; f++) {
                if (u(
                  w[f],
                  m,
                  O,
                  P,
                  G
                ) === !1)
                  return !1;
                m++, D === "MultiPoint" && P++;
              }
              D === "LineString" && P++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (f = 0; f < w.length; f++) {
                for (h = 0; h < w[f].length - N; h++) {
                  if (u(
                    w[f][h],
                    m,
                    O,
                    P,
                    G
                  ) === !1)
                    return !1;
                  m++;
                }
                D === "MultiLineString" && P++, D === "Polygon" && G++;
              }
              D === "Polygon" && P++;
              break;
            case "MultiPolygon":
              for (f = 0; f < w.length; f++) {
                for (G = 0, h = 0; h < w[f].length; h++) {
                  for (g = 0; g < w[f][h].length - N; g++) {
                    if (u(
                      w[f][h][g],
                      m,
                      O,
                      P,
                      G
                    ) === !1)
                      return !1;
                    m++;
                  }
                  G++;
                }
                P++;
              }
              break;
            case "GeometryCollection":
              for (f = 0; f < d.geometries.length; f++)
                if (rs(d.geometries[f], u) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Rr(l, u) {
  if (l.type === "Feature")
    u(l, 0);
  else if (l.type === "FeatureCollection")
    for (var a = 0; a < l.features.length && u(l.features[a], a) !== !1; a++)
      ;
}
function An(l, u) {
  var a, f, h, g, d, p, w, _, N, m, I = 0, E = l.type === "FeatureCollection", L = l.type === "Feature", M = E ? l.features.length : 1;
  for (a = 0; a < M; a++) {
    for (p = E ? l.features[a].geometry : L ? l.geometry : l, _ = E ? l.features[a].properties : L ? l.properties : {}, N = E ? l.features[a].bbox : L ? l.bbox : void 0, m = E ? l.features[a].id : L ? l.id : void 0, w = p ? p.type === "GeometryCollection" : !1, d = w ? p.geometries.length : 1, h = 0; h < d; h++) {
      if (g = w ? p.geometries[h] : p, g === null) {
        if (u(
          null,
          I,
          _,
          N,
          m
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
          if (u(
            g,
            I,
            _,
            N,
            m
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (f = 0; f < g.geometries.length; f++)
            if (u(
              g.geometries[f],
              I,
              _,
              N,
              m
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    I++;
  }
}
function fu(l, u = {}) {
  const a = [];
  if (An(l, (h) => {
    a.push(h.coordinates);
  }), a.length < 2)
    throw new Error("Must have at least 2 geometries");
  const f = is.union(a[0], ...a.slice(1));
  return f.length === 0 ? null : f.length === 1 ? Ei(f[0], u.properties) : es(f, u.properties);
}
var gu = fu;
function nn() {
}
function ss(l) {
  return l();
}
function Or() {
  return /* @__PURE__ */ Object.create(null);
}
function Dn(l) {
  l.forEach(ss);
}
function as(l) {
  return typeof l == "function";
}
function vu(l, u) {
  return l != l ? u == u : l !== u || l && typeof l == "object" || typeof l == "function";
}
function yu(l) {
  return Object.keys(l).length === 0;
}
function mu(l, u) {
  l.appendChild(u);
}
function du(l, u, a) {
  l.insertBefore(u, a || null);
}
function us(l) {
  l.parentNode && l.parentNode.removeChild(l);
}
function br(l) {
  return document.createElementNS("http://www.w3.org/2000/svg", l);
}
function ue(l, u, a) {
  a == null ? l.removeAttribute(u) : l.getAttribute(u) !== a && l.setAttribute(u, a);
}
function pu(l) {
  return Array.from(l.childNodes);
}
function _n(l, u, a) {
  l.classList.toggle(u, !!a);
}
let Ni;
function tn(l) {
  Ni = l;
}
const Pe = [], Mr = [];
let Ae = [];
const Pr = [], _u = /* @__PURE__ */ Promise.resolve();
let yi = !1;
function xu() {
  yi || (yi = !0, _u.then(os));
}
function mi(l) {
  Ae.push(l);
}
const ui = /* @__PURE__ */ new Set();
let Me = 0;
function os() {
  if (Me !== 0)
    return;
  const l = Ni;
  do {
    try {
      for (; Me < Pe.length; ) {
        const u = Pe[Me];
        Me++, tn(u), ku(u.$$);
      }
    } catch (u) {
      throw Pe.length = 0, Me = 0, u;
    }
    for (tn(null), Pe.length = 0, Me = 0; Mr.length; ) Mr.pop()();
    for (let u = 0; u < Ae.length; u += 1) {
      const a = Ae[u];
      ui.has(a) || (ui.add(a), a());
    }
    Ae.length = 0;
  } while (Pe.length);
  for (; Pr.length; )
    Pr.pop()();
  yi = !1, ui.clear(), tn(l);
}
function ku(l) {
  if (l.fragment !== null) {
    l.update(), Dn(l.before_update);
    const u = l.dirty;
    l.dirty = [-1], l.fragment && l.fragment.p(l.ctx, u), l.after_update.forEach(mi);
  }
}
function Eu(l) {
  const u = [], a = [];
  Ae.forEach((f) => l.indexOf(f) === -1 ? u.push(f) : a.push(f)), a.forEach((f) => f()), Ae = u;
}
const Iu = /* @__PURE__ */ new Set();
function Nu(l, u) {
  l && l.i && (Iu.delete(l), l.i(u));
}
function wu(l, u, a) {
  const { fragment: f, after_update: h } = l.$$;
  f && f.m(u, a), mi(() => {
    const g = l.$$.on_mount.map(ss).filter(as);
    l.$$.on_destroy ? l.$$.on_destroy.push(...g) : Dn(g), l.$$.on_mount = [];
  }), h.forEach(mi);
}
function Su(l, u) {
  const a = l.$$;
  a.fragment !== null && (Eu(a.after_update), Dn(a.on_destroy), a.fragment && a.fragment.d(u), a.on_destroy = a.fragment = null, a.ctx = []);
}
function Lu(l, u) {
  l.$$.dirty[0] === -1 && (Pe.push(l), xu(), l.$$.dirty.fill(0)), l.$$.dirty[u / 31 | 0] |= 1 << u % 31;
}
function Tu(l, u, a, f, h, g, d = null, p = [-1]) {
  const w = Ni;
  tn(l);
  const _ = l.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: g,
    update: nn,
    not_equal: h,
    bound: Or(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(u.context || (w ? w.$$.context : [])),
    // everything else
    callbacks: Or(),
    dirty: p,
    skip_bound: !1,
    root: u.target || w.$$.root
  };
  d && d(_.root);
  let N = !1;
  if (_.ctx = a ? a(l, u.props || {}, (m, I, ...E) => {
    const L = E.length ? E[0] : I;
    return _.ctx && h(_.ctx[m], _.ctx[m] = L) && (!_.skip_bound && _.bound[m] && _.bound[m](L), N && Lu(l, m)), I;
  }) : [], _.update(), N = !0, Dn(_.before_update), _.fragment = f ? f(_.ctx) : !1, u.target) {
    if (u.hydrate) {
      const m = pu(u.target);
      _.fragment && _.fragment.l(m), m.forEach(us);
    } else
      _.fragment && _.fragment.c();
    u.intro && Nu(l.$$.fragment), wu(l, u.target, u.anchor), os();
  }
  tn(w);
}
class Cu {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ri(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ri(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Su(this, 1), this.$destroy = nn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(u, a) {
    if (!as(a))
      return nn;
    const f = this.$$.callbacks[u] || (this.$$.callbacks[u] = []);
    return f.push(a), () => {
      const h = f.indexOf(a);
      h !== -1 && f.splice(h, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(u) {
    this.$$set && !yu(u) && (this.$$.skip_bound = !0, this.$$set(u), this.$$.skip_bound = !1);
  }
}
const Ru = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ru);
function Ou(l) {
  let u, a, f;
  return {
    c() {
      u = br("svg"), a = br("path"), ue(a, "stroke-width", "4"), ue(a, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), ue(a, "class", "svelte-gzo3ar"), ue(u, "width", f = /*displayIn*/
      l[0] === "list" ? 20 : void 0), ue(u, "viewBox", "0 0 70 85"), ue(u, "fill", "none"), ue(u, "class", "svelte-gzo3ar"), _n(
        u,
        "in-map",
        /*displayIn*/
        l[0] !== "list"
      ), _n(
        u,
        "list-icon",
        /*displayIn*/
        l[0] === "list"
      );
    },
    m(h, g) {
      du(h, u, g), mu(u, a);
    },
    p(h, [g]) {
      g & /*displayIn*/
      1 && f !== (f = /*displayIn*/
      h[0] === "list" ? 20 : void 0) && ue(u, "width", f), g & /*displayIn*/
      1 && _n(
        u,
        "in-map",
        /*displayIn*/
        h[0] !== "list"
      ), g & /*displayIn*/
      1 && _n(
        u,
        "list-icon",
        /*displayIn*/
        h[0] === "list"
      );
    },
    i: nn,
    o: nn,
    d(h) {
      h && us(u);
    }
  };
}
function bu(l, u, a) {
  let { displayIn: f } = u;
  return l.$$set = (h) => {
    "displayIn" in h && a(0, f = h.displayIn);
  }, [f];
}
class Mu extends Cu {
  constructor(u) {
    super(), Tu(this, u, bu, Ou, vu, { displayIn: 0 });
  }
}
function Pu(l, u = {}) {
  if (l.bbox != null && u.recompute !== !0)
    return l.bbox;
  const a = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return rs(l, (f) => {
    a[0] > f[0] && (a[0] = f[0]), a[1] > f[1] && (a[1] = f[1]), a[2] < f[0] && (a[2] = f[0]), a[3] < f[1] && (a[3] = f[1]);
  }), a;
}
function Au(l, u = {}) {
  const a = Pu(l), f = (a[0] + a[2]) / 2, h = (a[1] + a[3]) / 2;
  return Aa([f, h], u.properties, u);
}
var Du = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fu(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ls = { exports: {} };
(function(l, u) {
  (function(a, f) {
    l.exports = f();
  })(Du, function() {
    function a(r, t) {
      if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function f(r, t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
      }
    }
    function h(r, t, e) {
      return t && f(r.prototype, t), e && f(r, e), r;
    }
    function g(r, t) {
      if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(t && t.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), t && p(r, t);
    }
    function d(r) {
      return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, d(r);
    }
    function p(r, t) {
      return p = Object.setPrototypeOf || function(e, n) {
        return e.__proto__ = n, e;
      }, p(r, t);
    }
    function w() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function _(r, t, e) {
      return _ = w() ? Reflect.construct : function(n, i, s) {
        var o = [null];
        o.push.apply(o, i);
        var c = new (Function.bind.apply(n, o))();
        return s && p(c, s.prototype), c;
      }, _.apply(null, arguments);
    }
    function N(r) {
      var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return N = function(e) {
        if (e === null || (n = e, Function.toString.call(n).indexOf("[native code]") === -1)) return e;
        var n;
        if (typeof e != "function") throw new TypeError("Super expression must either be null or a function");
        if (t !== void 0) {
          if (t.has(e)) return t.get(e);
          t.set(e, i);
        }
        function i() {
          return _(e, arguments, d(this).constructor);
        }
        return i.prototype = Object.create(e.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), p(i, e);
      }, N(r);
    }
    function m(r) {
      if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return r;
    }
    function I(r, t) {
      if (t && (typeof t == "object" || typeof t == "function")) return t;
      if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return m(r);
    }
    function E(r) {
      var t = w();
      return function() {
        var e, n = d(r);
        if (t) {
          var i = d(this).constructor;
          e = Reflect.construct(n, arguments, i);
        } else e = n.apply(this, arguments);
        return I(this, e);
      };
    }
    function L(r, t, e) {
      return L = typeof Reflect < "u" && Reflect.get ? Reflect.get : function(n, i, s) {
        var o = function(v, y) {
          for (; !Object.prototype.hasOwnProperty.call(v, y) && (v = d(v)) !== null; ) ;
          return v;
        }(n, i);
        if (o) {
          var c = Object.getOwnPropertyDescriptor(o, i);
          return c.get ? c.get.call(s) : c.value;
        }
      }, L(r, t, e || r);
    }
    function M(r) {
      return function(t) {
        if (Array.isArray(t)) return O(t);
      }(r) || function(t) {
        if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
      }(r) || R(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function R(r, t) {
      if (r) {
        if (typeof r == "string") return O(r, t);
        var e = Object.prototype.toString.call(r).slice(8, -1);
        return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? O(r, t) : void 0;
      }
    }
    function O(r, t) {
      (t == null || t > r.length) && (t = r.length);
      for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
      return n;
    }
    function b(r, t) {
      var e = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (!e) {
        if (Array.isArray(r) || (e = R(r)) || t) {
          e && (r = e);
          var n = 0, i = function() {
          };
          return { s: i, n: function() {
            return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] };
          }, e: function(v) {
            throw v;
          }, f: i };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var s, o = !0, c = !1;
      return { s: function() {
        e = e.call(r);
      }, n: function() {
        var v = e.next();
        return o = v.done, v;
      }, e: function(v) {
        c = !0, s = v;
      }, f: function() {
        try {
          o || e.return == null || e.return();
        } finally {
          if (c) throw s;
        }
      } };
    }
    var P = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getEndCapStyle", value: function() {
        return this._endCapStyle;
      } }, { key: "isSingleSided", value: function() {
        return this._isSingleSided;
      } }, { key: "setQuadrantSegments", value: function(t) {
        this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = r.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = r.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== r.JOIN_ROUND && (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS);
      } }, { key: "getJoinStyle", value: function() {
        return this._joinStyle;
      } }, { key: "setJoinStyle", value: function(t) {
        this._joinStyle = t;
      } }, { key: "setSimplifyFactor", value: function(t) {
        this._simplifyFactor = t < 0 ? 0 : t;
      } }, { key: "getSimplifyFactor", value: function() {
        return this._simplifyFactor;
      } }, { key: "getQuadrantSegments", value: function() {
        return this._quadrantSegments;
      } }, { key: "setEndCapStyle", value: function(t) {
        this._endCapStyle = t;
      } }, { key: "getMitreLimit", value: function() {
        return this._mitreLimit;
      } }, { key: "setMitreLimit", value: function(t) {
        this._mitreLimit = t;
      } }, { key: "setSingleSided", value: function(t) {
        this._isSingleSided = t;
      } }], [{ key: "constructor_", value: function() {
        if (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = r.CAP_ROUND, this._joinStyle = r.JOIN_ROUND, this._mitreLimit = r.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = r.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.setQuadrantSegments(t);
          } else if (arguments.length === 2) {
            var e = arguments[0], n = arguments[1];
            this.setQuadrantSegments(e), this.setEndCapStyle(n);
          } else if (arguments.length === 4) {
            var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(s), this.setJoinStyle(o), this.setMitreLimit(c);
          }
        }
      } }, { key: "bufferDistanceError", value: function(t) {
        var e = Math.PI / 2 / t;
        return 1 - Math.cos(e / 2);
      } }]), r;
    }();
    P.CAP_ROUND = 1, P.CAP_FLAT = 2, P.CAP_SQUARE = 3, P.JOIN_ROUND = 1, P.JOIN_MITRE = 2, P.JOIN_BEVEL = 3, P.DEFAULT_QUADRANT_SEGMENTS = 8, P.DEFAULT_MITRE_LIMIT = 5, P.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var G = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ Exception: e })[0], i;
      }
      return h(e, [{ key: "toString", value: function() {
        return this.message;
      } }]), e;
    }(N(Error)), D = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ IllegalArgumentException: e })[0], i;
      }
      return e;
    }(G), B = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "filter", value: function(t) {
      } }]), r;
    }();
    function X() {
    }
    function V() {
    }
    function U() {
    }
    var st, et, rt, ut, z, nt, ot, ft, xt = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "equalsWithTolerance", value: function(t, e, n) {
        return Math.abs(t - e) <= n;
      } }]), r;
    }(), kt = function() {
      function r(t, e) {
        a(this, r), this.low = e || 0, this.high = t || 0;
      }
      return h(r, null, [{ key: "toBinaryString", value: function(t) {
        var e, n = "";
        for (e = 2147483648; e > 0; e >>>= 1) n += (t.high & e) === e ? "1" : "0";
        for (e = 2147483648; e > 0; e >>>= 1) n += (t.low & e) === e ? "1" : "0";
        return n;
      } }]), r;
    }();
    function H() {
    }
    function St() {
    }
    H.NaN = NaN, H.isNaN = function(r) {
      return Number.isNaN(r);
    }, H.isInfinite = function(r) {
      return !Number.isFinite(r);
    }, H.MAX_VALUE = Number.MAX_VALUE, H.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, H.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (nt = 2146435072, ot = new Float64Array(1), ft = new Int32Array(ot.buffer), H.doubleToLongBits = function(r) {
      ot[0] = r;
      var t = 0 | ft[0], e = 0 | ft[1];
      return (e & nt) === nt && 1048575 & e && t !== 0 && (t = 0, e = 2146959360), new kt(e, t);
    }, H.longBitsToDouble = function(r) {
      return ft[0] = r.low, ft[1] = r.high, ot[0];
    }) : (st = 1023, et = Math.log2, rt = Math.floor, ut = Math.pow, z = function() {
      for (var r = 53; r > 0; r--) {
        var t = ut(2, r) - 1;
        if (rt(et(t)) + 1 === r) return t;
      }
      return 0;
    }(), H.doubleToLongBits = function(r) {
      var t, e, n, i, s, o, c, v, y;
      if (r < 0 || 1 / r === Number.NEGATIVE_INFINITY ? (o = 1 << 31, r = -r) : o = 0, r === 0) return new kt(v = o, y = 0);
      if (r === 1 / 0) return new kt(v = 2146435072 | o, y = 0);
      if (r != r) return new kt(v = 2146959360, y = 0);
      if (i = 0, y = 0, (t = rt(r)) > 1) if (t <= z) (i = rt(et(t))) <= 20 ? (y = 0, v = t << 20 - i & 1048575) : (y = t % (e = ut(2, n = i - 20)) << 32 - n, v = t / e & 1048575);
      else for (n = t, y = 0; (n = rt(e = n / 2)) !== 0; ) i++, y >>>= 1, y |= (1 & v) << 31, v >>>= 1, e !== n && (v |= 524288);
      if (c = i + st, s = t === 0, t = r - t, i < 52 && t !== 0) for (n = 0; ; ) {
        if ((e = 2 * t) >= 1 ? (t = e - 1, s ? (c--, s = !1) : (n <<= 1, n |= 1, i++)) : (t = e, s ? --c == 0 && (i++, s = !1) : (n <<= 1, i++)), i === 20) v |= n, n = 0;
        else if (i === 52) {
          y |= n;
          break;
        }
        if (e === 1) {
          i < 20 ? v |= n << 20 - i : i < 52 && (y |= n << 52 - i);
          break;
        }
      }
      return v |= c << 20, new kt(v |= o, y);
    }, H.longBitsToDouble = function(r) {
      var t, e, n, i, s = r.high, o = r.low, c = s & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & s) >> 20) - st, i = 0, e = 1 << 19, t = 1; t <= 20; t++) s & e && (i += ut(2, -t)), e >>>= 1;
      for (e = 1 << 31, t = 21; t <= 52; t++) o & e && (i += ut(2, -t)), e >>>= 1;
      if (n === -1023) {
        if (i === 0) return 0 * c;
        n = -1022;
      } else {
        if (n === 1024) return i === 0 ? c / 0 : NaN;
        i += 1;
      }
      return c * i * ut(2, n);
    });
    var Et = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ RuntimeException: e })[0], i;
      }
      return e;
    }(G), Ct = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) Et.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Et.constructor_.call(this, n);
        }
      } }]), e;
    }(Et), it = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "shouldNeverReachHere", value: function() {
        if (arguments.length === 0) r.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
          var t = arguments[0];
          throw new Ct("Should never reach here" + (t !== null ? ": " + t : ""));
        }
      } }, { key: "isTrue", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          r.isTrue(t, null);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          if (!e) throw n === null ? new Ct() : new Ct(n);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          r.equals(t, e, null);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          if (!i.equals(n)) throw new Ct("Expected " + n + " but encountered " + i + (s !== null ? ": " + s : ""));
        }
      } }]), r;
    }(), Jt = new ArrayBuffer(8), ws = new Float64Array(Jt), wi = new Int32Array(Jt), T = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getM", value: function() {
        return H.NaN;
      } }, { key: "setOrdinate", value: function(t, e) {
        switch (t) {
          case r.X:
            this.x = e;
            break;
          case r.Y:
            this.y = e;
            break;
          case r.Z:
            this.setZ(e);
            break;
          default:
            throw new D("Invalid ordinate index: " + t);
        }
      } }, { key: "equals2D", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return this.x === t.x && this.y === t.y;
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          return !!xt.equalsWithTolerance(this.x, e.x, n) && !!xt.equalsWithTolerance(this.y, e.y, n);
        }
      } }, { key: "setM", value: function(t) {
        throw new D("Invalid ordinate index: " + r.M);
      } }, { key: "getZ", value: function() {
        return this.z;
      } }, { key: "getOrdinate", value: function(t) {
        switch (t) {
          case r.X:
            return this.x;
          case r.Y:
            return this.y;
          case r.Z:
            return this.getZ();
        }
        throw new D("Invalid ordinate index: " + t);
      } }, { key: "equals3D", value: function(t) {
        return this.x === t.x && this.y === t.y && (this.getZ() === t.getZ() || H.isNaN(this.getZ()) && H.isNaN(t.getZ()));
      } }, { key: "equals", value: function(t) {
        return t instanceof r && this.equals2D(t);
      } }, { key: "equalInZ", value: function(t, e) {
        return xt.equalsWithTolerance(this.getZ(), t.getZ(), e);
      } }, { key: "setX", value: function(t) {
        this.x = t;
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
      } }, { key: "getX", value: function() {
        return this.x;
      } }, { key: "setZ", value: function(t) {
        this.z = t;
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (t) {
          if (t instanceof CloneNotSupportedException) return it.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
          throw t;
        }
      } }, { key: "copy", value: function() {
        return new r(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
      } }, { key: "distance3D", value: function(t) {
        var e = this.x - t.x, n = this.y - t.y, i = this.getZ() - t.getZ();
        return Math.sqrt(e * e + n * n + i * i);
      } }, { key: "getY", value: function() {
        return this.y;
      } }, { key: "setY", value: function(t) {
        this.y = t;
      } }, { key: "distance", value: function(t) {
        var e = this.x - t.x, n = this.y - t.y;
        return Math.sqrt(e * e + n * n);
      } }, { key: "hashCode", value: function() {
        var t = 17;
        return t = 37 * (t = 37 * t + r.hashCode(this.x)) + r.hashCode(this.y);
      } }, { key: "setCoordinate", value: function(t) {
        this.x = t.x, this.y = t.y, this.z = t.getZ();
      } }, { key: "interfaces_", get: function() {
        return [X, V, U];
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.z = null, arguments.length === 0) r.constructor_.call(this, 0, 0);
        else if (arguments.length === 1) {
          var t = arguments[0];
          r.constructor_.call(this, t.x, t.y, t.getZ());
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          r.constructor_.call(this, e, n, r.NULL_ORDINATE);
        } else if (arguments.length === 3) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          this.x = i, this.y = s, this.z = o;
        }
      } }, { key: "hashCode", value: function(t) {
        return ws[0] = t, wi[0] ^ wi[1];
      } }]), r;
    }(), Ss = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compare", value: function(t, e) {
        var n = r.compare(t.x, e.x);
        if (n !== 0) return n;
        var i = r.compare(t.y, e.y);
        return i !== 0 ? i : this._dimensionsToTest <= 2 ? 0 : r.compare(t.getZ(), e.getZ());
      } }, { key: "interfaces_", get: function() {
        return [St];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimensionsToTest = 2, arguments.length === 0) r.constructor_.call(this, 2);
        else if (arguments.length === 1) {
          var t = arguments[0];
          if (t !== 2 && t !== 3) throw new D("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = t;
        }
      } }, { key: "compare", value: function(t, e) {
        return t < e ? -1 : t > e ? 1 : H.isNaN(t) ? H.isNaN(e) ? 0 : -1 : H.isNaN(e) ? 1 : 0;
      } }]), r;
    }();
    T.DimensionalComparator = Ss, T.NULL_ORDINATE = H.NaN, T.X = 0, T.Y = 1, T.Z = 2, T.M = 3;
    var vt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getArea", value: function() {
        return this.getWidth() * this.getHeight();
      } }, { key: "equals", value: function(t) {
        if (!(t instanceof r)) return !1;
        var e = t;
        return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
      } }, { key: "intersection", value: function(t) {
        if (this.isNull() || t.isNull() || !this.intersects(t)) return new r();
        var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny;
        return new r(e, this._maxx < t._maxx ? this._maxx : t._maxx, n, this._maxy < t._maxy ? this._maxy : t._maxy);
      } }, { key: "isNull", value: function() {
        return this._maxx < this._minx;
      } }, { key: "getMaxX", value: function() {
        return this._maxx;
      } }, { key: "covers", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var t = arguments[0];
            return this.covers(t.x, t.y);
          }
          if (arguments[0] instanceof r) {
            var e = arguments[0];
            return !this.isNull() && !e.isNull() && e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return !this.isNull() && n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return !this.isNull() && !t.isNull() && !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
          }
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            return this.intersects(e.x, e.y);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof T && arguments[1] instanceof T) {
            var n = arguments[0], i = arguments[1];
            if (this.isNull()) return !1;
            var s = n.x < i.x ? n.x : i.x;
            if (s > this._maxx) return !1;
            var o = n.x > i.x ? n.x : i.x;
            if (o < this._minx) return !1;
            var c = n.y < i.y ? n.y : i.y;
            if (c > this._maxy) return !1;
            var v = n.y > i.y ? n.y : i.y;
            return !(v < this._miny);
          }
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var y = arguments[0], k = arguments[1];
            return !this.isNull() && !(y > this._maxx || y < this._minx || k > this._maxy || k < this._miny);
          }
        }
      } }, { key: "getMinY", value: function() {
        return this._miny;
      } }, { key: "getDiameter", value: function() {
        if (this.isNull()) return 0;
        var t = this.getWidth(), e = this.getHeight();
        return Math.sqrt(t * t + e * e);
      } }, { key: "getMinX", value: function() {
        return this._minx;
      } }, { key: "expandToInclude", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var t = arguments[0];
            this.expandToInclude(t.x, t.y);
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            if (e.isNull()) return null;
            this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.isNull() ? (this._minx = n, this._maxx = n, this._miny = i, this._maxy = i) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
        }
      } }, { key: "minExtent", value: function() {
        if (this.isNull()) return 0;
        var t = this.getWidth(), e = this.getHeight();
        return t < e ? t : e;
      } }, { key: "getWidth", value: function() {
        return this.isNull() ? 0 : this._maxx - this._minx;
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
      } }, { key: "translate", value: function(t, e) {
        if (this.isNull()) return null;
        this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
      } }, { key: "copy", value: function() {
        return new r(this);
      } }, { key: "toString", value: function() {
        return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
      } }, { key: "setToNull", value: function() {
        this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
      } }, { key: "disjoint", value: function(t) {
        return !(!this.isNull() && !t.isNull()) || t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny;
      } }, { key: "getHeight", value: function() {
        return this.isNull() ? 0 : this._maxy - this._miny;
      } }, { key: "maxExtent", value: function() {
        if (this.isNull()) return 0;
        var t = this.getWidth(), e = this.getHeight();
        return t > e ? t : e;
      } }, { key: "expandBy", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.expandBy(t, t);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          if (this.isNull()) return null;
          this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
        }
      } }, { key: "contains", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return this.covers(t);
          }
          if (arguments[0] instanceof T) {
            var e = arguments[0];
            return this.covers(e);
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
            var t = arguments[0];
            this.init(t.x, t.x, t.y, t.y);
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.init(n.x, i.x, n.y, i.y);
        } else if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          s < o ? (this._minx = s, this._maxx = o) : (this._minx = o, this._maxx = s), c < v ? (this._miny = c, this._maxy = v) : (this._miny = v, this._maxy = c);
        }
      } }, { key: "getMaxY", value: function() {
        return this._maxy;
      } }, { key: "distance", value: function(t) {
        if (this.intersects(t)) return 0;
        var e = 0;
        this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
        var n = 0;
        return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
      } }, { key: "hashCode", value: function() {
        var t = 17;
        return t = 37 * (t = 37 * (t = 37 * (t = 37 * t + T.hashCode(this._minx)) + T.hashCode(this._maxx)) + T.hashCode(this._miny)) + T.hashCode(this._maxy);
      } }, { key: "interfaces_", get: function() {
        return [X, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
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
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          this.init(s, o, c, v);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var t = arguments[0], e = arguments[1], n = arguments[2];
          return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
        }
        if (arguments.length === 4) {
          var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3], v = Math.min(o.x, c.x), y = Math.max(o.x, c.x), k = Math.min(i.x, s.x), S = Math.max(i.x, s.x);
          return !(k > y) && !(S < v) && (v = Math.min(o.y, c.y), y = Math.max(o.y, c.y), k = Math.min(i.y, s.y), S = Math.max(i.y, s.y), !(k > y) && !(S < v));
        }
      } }]), r;
    }(), $ = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isGeometryCollection", value: function() {
        return this.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getFactory", value: function() {
        return this._factory;
      } }, { key: "getGeometryN", value: function(t) {
        return this;
      } }, { key: "getArea", value: function() {
        return 0;
      } }, { key: "isRectangle", value: function() {
        return !1;
      } }, { key: "equalsExact", value: function(t) {
        return this === t || this.equalsExact(t, 0);
      } }, { key: "geometryChanged", value: function() {
        this.apply(r.geometryChangedFilter);
      } }, { key: "geometryChangedAction", value: function() {
        this._envelope = null;
      } }, { key: "equalsNorm", value: function(t) {
        return t !== null && this.norm().equalsExact(t.norm());
      } }, { key: "getLength", value: function() {
        return 0;
      } }, { key: "getNumGeometries", value: function() {
        return 1;
      } }, { key: "compareTo", value: function() {
        var t;
        if (arguments.length === 1) {
          var e = arguments[0];
          return t = e, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(e);
        }
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return t = n, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(n, i);
        }
      } }, { key: "getUserData", value: function() {
        return this._userData;
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "getEnvelope", value: function() {
        return this.getFactory().toGeometry(this.getEnvelopeInternal());
      } }, { key: "checkNotGeometryCollection", value: function(t) {
        if (t.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION) throw new D("This method does not support GeometryCollection arguments");
      } }, { key: "equal", value: function(t, e, n) {
        return n === 0 ? t.equals(e) : t.distance(e) <= n;
      } }, { key: "norm", value: function() {
        var t = this.copy();
        return t.normalize(), t;
      } }, { key: "reverse", value: function() {
        var t = this.reverseInternal();
        return this.envelope != null && (t.envelope = this.envelope.copy()), t.setSRID(this.getSRID()), t;
      } }, { key: "copy", value: function() {
        var t = this.copyInternal();
        return t.envelope = this._envelope == null ? null : this._envelope.copy(), t._SRID = this._SRID, t._userData = this._userData, t;
      } }, { key: "getPrecisionModel", value: function() {
        return this._factory.getPrecisionModel();
      } }, { key: "getEnvelopeInternal", value: function() {
        return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new vt(this._envelope);
      } }, { key: "setSRID", value: function(t) {
        this._SRID = t;
      } }, { key: "setUserData", value: function(t) {
        this._userData = t;
      } }, { key: "compare", value: function(t, e) {
        for (var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext(); ) {
          var s = n.next(), o = i.next(), c = s.compareTo(o);
          if (c !== 0) return c;
        }
        return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
      } }, { key: "hashCode", value: function() {
        return this.getEnvelopeInternal().hashCode();
      } }, { key: "isEquivalentClass", value: function(t) {
        return this.getClass() === t.getClass();
      } }, { key: "isGeometryCollectionOrDerived", value: function() {
        return this.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === r.TYPECODE_MULTIPOINT || this.getTypeCode() === r.TYPECODE_MULTILINESTRING || this.getTypeCode() === r.TYPECODE_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [V, X, U];
      } }, { key: "getClass", value: function() {
        return r;
      } }], [{ key: "hasNonEmptyElements", value: function(t) {
        for (var e = 0; e < t.length; e++) if (!t[e].isEmpty()) return !0;
        return !1;
      } }, { key: "hasNullElements", value: function(t) {
        for (var e = 0; e < t.length; e++) if (t[e] === null) return !0;
        return !1;
      } }]), r;
    }();
    $.constructor_ = function(r) {
      r && (this._envelope = null, this._userData = null, this._factory = r, this._SRID = r.getSRID());
    }, $.TYPECODE_POINT = 0, $.TYPECODE_MULTIPOINT = 1, $.TYPECODE_LINESTRING = 2, $.TYPECODE_LINEARRING = 3, $.TYPECODE_MULTILINESTRING = 4, $.TYPECODE_POLYGON = 5, $.TYPECODE_MULTIPOLYGON = 6, $.TYPECODE_GEOMETRYCOLLECTION = 7, $.TYPENAME_POINT = "Point", $.TYPENAME_MULTIPOINT = "MultiPoint", $.TYPENAME_LINESTRING = "LineString", $.TYPENAME_LINEARRING = "LinearRing", $.TYPENAME_MULTILINESTRING = "MultiLineString", $.TYPENAME_POLYGON = "Polygon", $.TYPENAME_MULTIPOLYGON = "MultiPolygon", $.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", $.geometryChangedFilter = { get interfaces_() {
      return [B];
    }, filter: function(r) {
      r.geometryChangedAction();
    } };
    var x = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "toLocationSymbol", value: function(t) {
        switch (t) {
          case r.EXTERIOR:
            return "e";
          case r.BOUNDARY:
            return "b";
          case r.INTERIOR:
            return "i";
          case r.NONE:
            return "-";
        }
        throw new D("Unknown location value: " + t);
      } }]), r;
    }();
    x.INTERIOR = 0, x.BOUNDARY = 1, x.EXTERIOR = 2, x.NONE = -1;
    var Ht = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "add", value: function() {
      } }, { key: "addAll", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }, { key: "iterator", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "toArray", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), un = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ NoSuchElementException: e })[0], i;
      }
      return e;
    }(G), se = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ UnsupportedOperationException: e })[0], i;
      }
      return e;
    }(G), Si = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.apply(this, arguments);
      }
      return h(e, [{ key: "contains", value: function() {
      } }]), e;
    }(Ht), Fn = function(r, t) {
      g(n, r);
      var e = E(n);
      function n(i) {
        var s;
        return a(this, n), (s = e.call(this)).map = /* @__PURE__ */ new Map(), i instanceof Ht && s.addAll(i), s;
      }
      return h(n, [{ key: "contains", value: function(i) {
        var s = i.hashCode ? i.hashCode() : i;
        return !!this.map.has(s);
      } }, { key: "add", value: function(i) {
        var s = i.hashCode ? i.hashCode() : i;
        return !this.map.has(s) && !!this.map.set(s, i);
      } }, { key: "addAll", value: function(i) {
        var s, o = b(i);
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var c = s.value;
            this.add(c);
          }
        } catch (v) {
          o.e(v);
        } finally {
          o.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new se();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new Ls(this.map);
      } }, { key: t, value: function() {
        return this.map;
      } }]), n;
    }(Si, Symbol.iterator), Ls = function() {
      function r(t) {
        a(this, r), this.iterator = t.values();
        var e = this.iterator.next(), n = e.done, i = e.value;
        this.done = n, this.value = i;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.done) throw new un();
        var t = this.value, e = this.iterator.next(), n = e.done, i = e.value;
        return this.done = n, this.value = i, t;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new se();
      } }]), r;
    }(), q = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "opposite", value: function(t) {
        return t === r.LEFT ? r.RIGHT : t === r.RIGHT ? r.LEFT : t;
      } }]), r;
    }();
    q.ON = 0, q.LEFT = 1, q.RIGHT = 2;
    var Li = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ EmptyStackException: e })[0], i;
      }
      return e;
    }(G), Ti = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: e })[0], i;
      }
      return e;
    }(G), ve = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.apply(this, arguments);
      }
      return h(e, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), e;
    }(Ht), Ts = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), (n = t.call(this)).array = [], n;
      }
      return h(e, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new Ti();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new Li();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new Li();
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
      } }]), e;
    }(ve);
    function tt(r, t) {
      return r.interfaces_ && r.interfaces_.indexOf(t) > -1;
    }
    var Ye = function() {
      function r(t) {
        a(this, r), this.str = t;
      }
      return h(r, [{ key: "append", value: function(t) {
        this.str += t;
      } }, { key: "setCharAt", value: function(t, e) {
        this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), on = function() {
      function r(t) {
        a(this, r), this.value = t;
      }
      return h(r, [{ key: "intValue", value: function() {
        return this.value;
      } }, { key: "compareTo", value: function(t) {
        return this.value < t ? -1 : this.value > t ? 1 : 0;
      } }], [{ key: "compare", value: function(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      } }, { key: "isNan", value: function(t) {
        return Number.isNaN(t);
      } }, { key: "valueOf", value: function(t) {
        return new r(t);
      } }]), r;
    }(), Gn = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "isWhitespace", value: function(t) {
        return t <= 32 && t >= 0 || t === 127;
      } }, { key: "toUpperCase", value: function(t) {
        return t.toUpperCase();
      } }]), r;
    }(), Q = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "le", value: function(t) {
        return this._hi < t._hi || this._hi === t._hi && this._lo <= t._lo;
      } }, { key: "extractSignificantDigits", value: function(t, e) {
        var n = this.abs(), i = r.magnitude(n._hi), s = r.TEN.pow(i);
        (n = n.divide(s)).gt(r.TEN) ? (n = n.divide(r.TEN), i += 1) : n.lt(r.ONE) && (n = n.multiply(r.TEN), i -= 1);
        for (var o = i + 1, c = new Ye(), v = r.MAX_PRINT_DIGITS - 1, y = 0; y <= v; y++) {
          t && y === o && c.append(".");
          var k = Math.trunc(n._hi);
          if (k < 0) break;
          var S = !1, C = 0;
          k > 9 ? (S = !0, C = "9") : C = "0" + k, c.append(C), n = n.subtract(r.valueOf(k)).multiply(r.TEN), S && n.selfAdd(r.TEN);
          var F = !0, A = r.magnitude(n._hi);
          if (A < 0 && Math.abs(A) >= v - y && (F = !1), !F) break;
        }
        return e[0] = i, c.toString();
      } }, { key: "sqr", value: function() {
        return this.multiply(this);
      } }, { key: "doubleValue", value: function() {
        return this._hi + this._lo;
      } }, { key: "subtract", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return this.add(t.negate());
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return this.add(-e);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 1 && arguments[0] instanceof r) {
          var t = arguments[0];
          return this._hi === t._hi && this._lo === t._lo;
        }
      } }, { key: "isZero", value: function() {
        return this._hi === 0 && this._lo === 0;
      } }, { key: "selfSubtract", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return this.isNaN() ? this : this.selfAdd(-e, 0);
        }
      } }, { key: "getSpecialNumberString", value: function() {
        return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
      } }, { key: "min", value: function(t) {
        return this.le(t) ? this : t;
      } }, { key: "selfDivide", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return this.selfDivide(t._hi, t._lo);
          }
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            return this.selfDivide(e, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], s = null, o = null, c = null, v = null, y = null, k = null, S = null, C = null;
          return y = this._hi / n, C = (s = (k = r.SPLIT * y) - (s = k - y)) * (c = (C = r.SPLIT * n) - (c = C - n)) - (S = y * n) + s * (v = n - c) + (o = y - s) * c + o * v, C = y + (k = (this._hi - S - C + this._lo - y * i) / n), this._hi = C, this._lo = y - C + k, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0], e = null, n = null, i = null, s = null, o = null, c = null, v = null, y = null;
          n = (o = this._hi / t._hi) - (e = (c = r.SPLIT * o) - (e = c - o)), y = e * (i = (y = r.SPLIT * t._hi) - (i = y - t._hi)) - (v = o * t._hi) + e * (s = t._hi - i) + n * i + n * s;
          var k = y = o + (c = (this._hi - v - y + this._lo - o * t._lo) / t._hi), S = o - y + c;
          return new r(k, S);
        }
        if (typeof arguments[0] == "number") {
          var C = arguments[0];
          return H.isNaN(C) ? r.createNaN() : r.copy(this).selfDivide(C, 0);
        }
      } }, { key: "ge", value: function(t) {
        return this._hi > t._hi || this._hi === t._hi && this._lo >= t._lo;
      } }, { key: "pow", value: function(t) {
        if (t === 0) return r.valueOf(1);
        var e = new r(this), n = r.valueOf(1), i = Math.abs(t);
        if (i > 1) for (; i > 0; ) i % 2 == 1 && n.selfMultiply(e), (i /= 2) > 0 && (e = e.sqr());
        else n = e;
        return t < 0 ? n.reciprocal() : n;
      } }, { key: "ceil", value: function() {
        if (this.isNaN()) return r.NaN;
        var t = Math.ceil(this._hi), e = 0;
        return t === this._hi && (e = Math.ceil(this._lo)), new r(t, e);
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
      } }, { key: "rint", value: function() {
        return this.isNaN() ? this : this.add(0.5).floor();
      } }, { key: "setValue", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return this.init(t), this;
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return this.init(e), this;
        }
      } }, { key: "max", value: function(t) {
        return this.ge(t) ? this : t;
      } }, { key: "sqrt", value: function() {
        if (this.isZero()) return r.valueOf(0);
        if (this.isNegative()) return r.NaN;
        var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = r.valueOf(e), i = this.subtract(n.sqr())._hi * (0.5 * t);
        return n.add(i);
      } }, { key: "selfAdd", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return this.selfAdd(t._hi, t._lo);
          }
          if (typeof arguments[0] == "number") {
            var e = arguments[0], n = null, i = null, s = null, o = null, c = null, v = null;
            return o = (s = this._hi + e) - (c = s - this._hi), i = (v = (o = e - c + (this._hi - o)) + this._lo) + (s - (n = s + v)), this._hi = n + i, this._lo = i + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var y = arguments[0], k = arguments[1], S = null, C = null, F = null, A = null, Z = null, j = null, J = null;
          A = this._hi + y, C = this._lo + k, Z = A - (j = A - this._hi), F = C - (J = C - this._lo);
          var ct = (S = A + (j = (Z = y - j + (this._hi - Z)) + C)) + (j = (F = k - J + (this._lo - F)) + (j + (A - S))), mt = j + (S - ct);
          return this._hi = ct, this._lo = mt, this;
        }
      } }, { key: "selfMultiply", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof r) {
            var t = arguments[0];
            return this.selfMultiply(t._hi, t._lo);
          }
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            return this.selfMultiply(e, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], s = null, o = null, c = null, v = null, y = null, k = null;
          s = (y = r.SPLIT * this._hi) - this._hi, k = r.SPLIT * n, s = y - s, o = this._hi - s, c = k - n;
          var S = (y = this._hi * n) + (k = s * (c = k - c) - y + s * (v = n - c) + o * c + o * v + (this._hi * i + this._lo * n)), C = k + (s = y - S);
          return this._hi = S, this._lo = C, this;
        }
      } }, { key: "selfSqr", value: function() {
        return this.selfMultiply(this);
      } }, { key: "floor", value: function() {
        if (this.isNaN()) return r.NaN;
        var t = Math.floor(this._hi), e = 0;
        return t === this._hi && (e = Math.floor(this._lo)), new r(t, e);
      } }, { key: "negate", value: function() {
        return this.isNaN() ? this : new r(-this._hi, -this._lo);
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (t) {
          if (t instanceof CloneNotSupportedException) return null;
          throw t;
        }
      } }, { key: "multiply", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return t.isNaN() ? r.createNaN() : r.copy(this).selfMultiply(t);
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return H.isNaN(e) ? r.createNaN() : r.copy(this).selfMultiply(e, 0);
        }
      } }, { key: "isNaN", value: function() {
        return H.isNaN(this._hi);
      } }, { key: "intValue", value: function() {
        return Math.trunc(this._hi);
      } }, { key: "toString", value: function() {
        var t = r.magnitude(this._hi);
        return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
      } }, { key: "toStandardNotation", value: function() {
        var t = this.getSpecialNumberString();
        if (t !== null) return t;
        var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), i = e[0] + 1, s = n;
        if (n.charAt(0) === ".") s = "0" + n;
        else if (i < 0) s = "0." + r.stringOfChar("0", -i) + n;
        else if (n.indexOf(".") === -1) {
          var o = i - n.length;
          s = n + r.stringOfChar("0", o) + ".0";
        }
        return this.isNegative() ? "-" + s : s;
      } }, { key: "reciprocal", value: function() {
        var t, e, n, i, s = null, o = null, c = null, v = null;
        t = (n = 1 / this._hi) - (s = (c = r.SPLIT * n) - (s = c - n)), o = (v = r.SPLIT * this._hi) - this._hi;
        var y = n + (c = (1 - (i = n * this._hi) - (v = s * (o = v - o) - i + s * (e = this._hi - o) + t * o + t * e) - n * this._lo) / this._hi);
        return new r(y, n - y + c);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return r.SCI_NOT_ZERO;
        var t = this.getSpecialNumberString();
        if (t !== null) return t;
        var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), i = r.SCI_NOT_EXPONENT_CHAR + e[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var s = "";
        n.length > 1 && (s = n.substring(1));
        var o = n.charAt(0) + "." + s;
        return this.isNegative() ? "-" + o + i : o + i;
      } }, { key: "abs", value: function() {
        return this.isNaN() ? r.NaN : this.isNegative() ? this.negate() : new r(this);
      } }, { key: "isPositive", value: function() {
        return this._hi > 0 || this._hi === 0 && this._lo > 0;
      } }, { key: "lt", value: function(t) {
        return this._hi < t._hi || this._hi === t._hi && this._lo < t._lo;
      } }, { key: "add", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return r.copy(this).selfAdd(t);
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return r.copy(this).selfAdd(e);
        }
      } }, { key: "init", value: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            this._hi = t, this._lo = 0;
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            this._hi = e._hi, this._lo = e._lo;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this._hi = n, this._lo = i;
        }
      } }, { key: "gt", value: function(t) {
        return this._hi > t._hi || this._hi === t._hi && this._lo > t._lo;
      } }, { key: "isNegative", value: function() {
        return this._hi < 0 || this._hi === 0 && this._lo < 0;
      } }, { key: "trunc", value: function() {
        return this.isNaN() ? r.NaN : this.isPositive() ? this.floor() : this.ceil();
      } }, { key: "signum", value: function() {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [U, X, V];
      } }], [{ key: "constructor_", value: function() {
        if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            this.init(t);
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            this.init(e);
          } else if (typeof arguments[0] == "string") {
            var n = arguments[0];
            r.constructor_.call(this, r.parse(n));
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          this.init(i, s);
        }
      } }, { key: "determinant", value: function() {
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
          return r.determinant(r.valueOf(t), r.valueOf(e), r.valueOf(n), r.valueOf(i));
        }
        if (arguments[3] instanceof r && arguments[2] instanceof r && arguments[0] instanceof r && arguments[1] instanceof r) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = s.multiply(v).selfSubtract(o.multiply(c));
          return y;
        }
      } }, { key: "sqr", value: function(t) {
        return r.valueOf(t).selfMultiply(t);
      } }, { key: "valueOf", value: function() {
        if (typeof arguments[0] == "string") {
          var t = arguments[0];
          return r.parse(t);
        }
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return new r(e);
        }
      } }, { key: "sqrt", value: function(t) {
        return r.valueOf(t).sqrt();
      } }, { key: "parse", value: function(t) {
        for (var e = 0, n = t.length; Gn.isWhitespace(t.charAt(e)); ) e++;
        var i = !1;
        if (e < n) {
          var s = t.charAt(e);
          s !== "-" && s !== "+" || (e++, s === "-" && (i = !0));
        }
        for (var o = new r(), c = 0, v = 0, y = 0, k = !1; !(e >= n); ) {
          var S = t.charAt(e);
          if (e++, Gn.isDigit(S)) {
            var C = S - "0";
            o.selfMultiply(r.TEN), o.selfAdd(C), c++;
          } else {
            if (S !== ".") {
              if (S === "e" || S === "E") {
                var F = t.substring(e);
                try {
                  y = on.parseInt(F);
                } catch (ct) {
                  throw ct instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + F + " in string " + t) : ct;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + S + "' at position " + e + " in string " + t);
            }
            v = c, k = !0;
          }
        }
        var A = o;
        k || (v = c);
        var Z = c - v - y;
        if (Z === 0) A = o;
        else if (Z > 0) {
          var j = r.TEN.pow(Z);
          A = o.divide(j);
        } else if (Z < 0) {
          var J = r.TEN.pow(-Z);
          A = o.multiply(J);
        }
        return i ? A.negate() : A;
      } }, { key: "createNaN", value: function() {
        return new r(H.NaN, H.NaN);
      } }, { key: "copy", value: function(t) {
        return new r(t);
      } }, { key: "magnitude", value: function(t) {
        var e = Math.abs(t), n = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, i) <= e && (i += 1), i;
      } }, { key: "stringOfChar", value: function(t, e) {
        for (var n = new Ye(), i = 0; i < e; i++) n.append(t);
        return n.toString();
      } }]), r;
    }();
    Q.PI = new Q(3.141592653589793, 12246467991473532e-32), Q.TWO_PI = new Q(6.283185307179586, 24492935982947064e-32), Q.PI_2 = new Q(1.5707963267948966, 6123233995736766e-32), Q.E = new Q(2.718281828459045, 14456468917292502e-32), Q.NaN = new Q(H.NaN, H.NaN), Q.EPS = 123259516440783e-46, Q.SPLIT = 134217729, Q.MAX_PRINT_DIGITS = 32, Q.TEN = Q.valueOf(10), Q.ONE = Q.valueOf(1), Q.SCI_NOT_EXPONENT_CHAR = "E", Q.SCI_NOT_ZERO = "0.0E0";
    var qn = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "orientationIndex", value: function(t, e, n) {
        var i = r.orientationIndexFilter(t, e, n);
        if (i <= 1) return i;
        var s = Q.valueOf(e.x).selfAdd(-t.x), o = Q.valueOf(e.y).selfAdd(-t.y), c = Q.valueOf(n.x).selfAdd(-e.x), v = Q.valueOf(n.y).selfAdd(-e.y);
        return s.selfMultiply(v).selfSubtract(o.selfMultiply(c)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof Q && arguments[2] instanceof Q && arguments[0] instanceof Q && arguments[1] instanceof Q) {
          var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3], s = t.multiply(i).selfSubtract(e.multiply(n));
          return s.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var o = arguments[0], c = arguments[1], v = arguments[2], y = arguments[3], k = Q.valueOf(o), S = Q.valueOf(c), C = Q.valueOf(v), F = Q.valueOf(y), A = k.multiply(F).selfSubtract(S.multiply(C));
          return A.signum();
        }
      } }, { key: "intersection", value: function(t, e, n, i) {
        var s = new Q(t.y).selfSubtract(e.y), o = new Q(e.x).selfSubtract(t.x), c = new Q(t.x).selfMultiply(e.y).selfSubtract(new Q(e.x).selfMultiply(t.y)), v = new Q(n.y).selfSubtract(i.y), y = new Q(i.x).selfSubtract(n.x), k = new Q(n.x).selfMultiply(i.y).selfSubtract(new Q(i.x).selfMultiply(n.y)), S = o.multiply(k).selfSubtract(y.multiply(c)), C = v.multiply(c).selfSubtract(s.multiply(k)), F = s.multiply(y).selfSubtract(v.multiply(o)), A = S.selfDivide(F).doubleValue(), Z = C.selfDivide(F).doubleValue();
        return H.isNaN(A) || H.isInfinite(A) || H.isNaN(Z) || H.isInfinite(Z) ? null : new T(A, Z);
      } }, { key: "orientationIndexFilter", value: function(t, e, n) {
        var i = null, s = (t.x - n.x) * (e.y - n.y), o = (t.y - n.y) * (e.x - n.x), c = s - o;
        if (s > 0) {
          if (o <= 0) return r.signum(c);
          i = s + o;
        } else {
          if (!(s < 0) || o >= 0) return r.signum(c);
          i = -s - o;
        }
        var v = r.DP_SAFE_EPSILON * i;
        return c >= v || -c >= v ? r.signum(c) : 2;
      } }, { key: "signum", value: function(t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      } }]), r;
    }();
    qn.DP_SAFE_EPSILON = 1e-15;
    var at = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "getM", value: function(t) {
        if (this.hasM()) {
          var e = this.getDimension() - this.getMeasures();
          return this.getOrdinate(t, e);
        }
        return H.NaN;
      } }, { key: "setOrdinate", value: function(t, e, n) {
      } }, { key: "getZ", value: function(t) {
        return this.hasZ() ? this.getOrdinate(t, 2) : H.NaN;
      } }, { key: "size", value: function() {
      } }, { key: "getOrdinate", value: function(t, e) {
      } }, { key: "getCoordinate", value: function() {
      } }, { key: "getCoordinateCopy", value: function(t) {
      } }, { key: "createCoordinate", value: function() {
      } }, { key: "getDimension", value: function() {
      } }, { key: "hasM", value: function() {
        return this.getMeasures() > 0;
      } }, { key: "getX", value: function(t) {
      } }, { key: "hasZ", value: function() {
        return this.getDimension() - this.getMeasures() > 2;
      } }, { key: "getMeasures", value: function() {
        return 0;
      } }, { key: "expandEnvelope", value: function(t) {
      } }, { key: "copy", value: function() {
      } }, { key: "getY", value: function(t) {
      } }, { key: "toCoordinateArray", value: function() {
      } }, { key: "interfaces_", get: function() {
        return [V];
      } }]), r;
    }();
    at.X = 0, at.Y = 1, at.Z = 2, at.M = 3;
    var K = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "index", value: function(t, e, n) {
        return qn.orientationIndex(t, e, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var t = arguments[0], e = t.length - 1;
          if (e < 3) throw new D("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = t[0], i = 0, s = 1; s <= e; s++) {
            var o = t[s];
            o.y > n.y && (n = o, i = s);
          }
          var c = i;
          do
            (c -= 1) < 0 && (c = e);
          while (t[c].equals2D(n) && c !== i);
          var v = i;
          do
            v = (v + 1) % e;
          while (t[v].equals2D(n) && v !== i);
          var y = t[c], k = t[v];
          if (y.equals2D(n) || k.equals2D(n) || y.equals2D(k)) return !1;
          var S = r.index(y, n, k), C = null;
          return C = S === 0 ? y.x > k.x : S > 0, C;
        }
        if (tt(arguments[0], at)) {
          var F = arguments[0], A = F.size() - 1;
          if (A < 3) throw new D("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var Z = F.getCoordinate(0), j = 0, J = 1; J <= A; J++) {
            var ct = F.getCoordinate(J);
            ct.y > Z.y && (Z = ct, j = J);
          }
          var mt = null, Nt = j;
          do
            (Nt -= 1) < 0 && (Nt = A), mt = F.getCoordinate(Nt);
          while (mt.equals2D(Z) && Nt !== j);
          var Pt = null, Ut = j;
          do
            Ut = (Ut + 1) % A, Pt = F.getCoordinate(Ut);
          while (Pt.equals2D(Z) && Ut !== j);
          if (mt.equals2D(Z) || Pt.equals2D(Z) || mt.equals2D(Pt)) return !1;
          var ie = r.index(mt, Z, Pt);
          return ie === 0 ? mt.x > Pt.x : ie > 0;
        }
      } }]), r;
    }();
    K.CLOCKWISE = -1, K.RIGHT = K.CLOCKWISE, K.COUNTERCLOCKWISE = 1, K.LEFT = K.COUNTERCLOCKWISE, K.COLLINEAR = 0, K.STRAIGHT = K.COLLINEAR;
    var Cs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinate", value: function() {
        return this._minCoord;
      } }, { key: "getRightmostSide", value: function(t, e) {
        var n = this.getRightmostSideOfSegment(t, e);
        return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
      } }, { key: "findRightmostEdgeAtVertex", value: function() {
        var t = this._minDe.getEdge().getCoordinates();
        it.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
        var e = t[this._minIndex - 1], n = t[this._minIndex + 1], i = K.index(this._minCoord, n, e), s = !1;
        (e.y < this._minCoord.y && n.y < this._minCoord.y && i === K.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && i === K.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
      } }, { key: "getRightmostSideOfSegment", value: function(t, e) {
        var n = t.getEdge().getCoordinates();
        if (e < 0 || e + 1 >= n.length || n[e].y === n[e + 1].y) return -1;
        var i = q.LEFT;
        return n[e].y < n[e + 1].y && (i = q.RIGHT), i;
      } }, { key: "getEdge", value: function() {
        return this._orientedDe;
      } }, { key: "checkForRightmostCoordinate", value: function(t) {
        for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++) (this._minCoord === null || e[n].x > this._minCoord.x) && (this._minDe = t, this._minIndex = n, this._minCoord = e[n]);
      } }, { key: "findRightmostEdgeAtNode", value: function() {
        var t = this._minDe.getNode().getEdges();
        this._minDe = t.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
      } }, { key: "findEdge", value: function(t) {
        for (var e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          n.isForward() && this.checkForRightmostCoordinate(n);
        }
        it.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === q.LEFT && (this._orientedDe = this._minDe.getSym());
      } }], [{ key: "constructor_", value: function() {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
      } }]), r;
    }(), te = function(r) {
      g(e, r);
      var t = E(e);
      function e(n, i) {
        var s;
        return a(this, e), (s = t.call(this, i ? n + " [ " + i + " ]" : n)).pt = i ? new T(i) : void 0, s.name = Object.keys({ TopologyException: e })[0], s;
      }
      return h(e, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), e;
    }(Et), Rs = function() {
      function r() {
        a(this, r), this.array = [];
      }
      return h(r, [{ key: "addLast", value: function(t) {
        this.array.push(t);
      } }, { key: "removeFirst", value: function() {
        return this.array.shift();
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }]), r;
    }(), W = function(r, t) {
      g(n, r);
      var e = E(n);
      function n(i) {
        var s;
        return a(this, n), (s = e.call(this)).array = [], i instanceof Ht && s.addAll(i), s;
      }
      return h(n, [{ key: "interfaces_", get: function() {
        return [ve, Ht];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(i) {
        return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(i) {
        var s, o = b(i);
        try {
          for (o.s(); !(s = o.n()).done; ) {
            var c = s.value;
            this.array.push(c);
          }
        } catch (v) {
          o.e(v);
        } finally {
          o.f();
        }
      } }, { key: "set", value: function(i, s) {
        var o = this.array[i];
        return this.array[i] = s, o;
      } }, { key: "iterator", value: function() {
        return new Os(this);
      } }, { key: "get", value: function(i) {
        if (i < 0 || i >= this.size()) throw new Ti();
        return this.array[i];
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "sort", value: function(i) {
        i ? this.array.sort(function(s, o) {
          return i.compare(s, o);
        }) : this.array.sort();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "remove", value: function(i) {
        for (var s = 0, o = this.array.length; s < o; s++) if (this.array[s] === i) return !!this.array.splice(s, 1);
        return !1;
      } }, { key: t, value: function() {
        return this.array.values();
      } }]), n;
    }(ve, Symbol.iterator), Os = function() {
      function r(t) {
        a(this, r), this.arrayList = t, this.position = 0;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new un();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(t) {
        return this.arrayList.set(this.position - 1, t);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), r;
    }(), bs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "clearVisitedEdges", value: function() {
        for (var t = this._dirEdgeList.iterator(); t.hasNext(); )
          t.next().setVisited(!1);
      } }, { key: "getRightmostCoordinate", value: function() {
        return this._rightMostCoord;
      } }, { key: "computeNodeDepth", value: function(t) {
        for (var e = null, n = t.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isVisited() || i.getSym().isVisited()) {
            e = i;
            break;
          }
        }
        if (e === null) throw new te("unable to find edge to compute depths at " + t.getCoordinate());
        t.getEdges().computeDepths(e);
        for (var s = t.getEdges().iterator(); s.hasNext(); ) {
          var o = s.next();
          o.setVisited(!0), this.copySymDepths(o);
        }
      } }, { key: "computeDepth", value: function(t) {
        this.clearVisitedEdges();
        var e = this._finder.getEdge();
        e.getNode(), e.getLabel(), e.setEdgeDepths(q.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
      } }, { key: "create", value: function(t) {
        this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      } }, { key: "findResultEdges", value: function() {
        for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
          var e = t.next();
          e.getDepth(q.RIGHT) >= 1 && e.getDepth(q.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
        }
      } }, { key: "computeDepths", value: function(t) {
        var e = new Fn(), n = new Rs(), i = t.getNode();
        for (n.addLast(i), e.add(i), t.setVisited(!0); !n.isEmpty(); ) {
          var s = n.removeFirst();
          e.add(s), this.computeNodeDepth(s);
          for (var o = s.getEdges().iterator(); o.hasNext(); ) {
            var c = o.next().getSym();
            if (!c.isVisited()) {
              var v = c.getNode();
              e.contains(v) || (n.addLast(v), e.add(v));
            }
          }
        }
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          for (var t = new vt(), e = this._dirEdgeList.iterator(); e.hasNext(); ) for (var n = e.next().getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) t.expandToInclude(n[i]);
          this._env = t;
        }
        return this._env;
      } }, { key: "addReachable", value: function(t) {
        var e = new Ts();
        for (e.add(t); !e.empty(); ) {
          var n = e.pop();
          this.add(n, e);
        }
      } }, { key: "copySymDepths", value: function(t) {
        var e = t.getSym();
        e.setDepth(q.LEFT, t.getDepth(q.RIGHT)), e.setDepth(q.RIGHT, t.getDepth(q.LEFT));
      } }, { key: "add", value: function(t, e) {
        t.setVisited(!0), this._nodes.add(t);
        for (var n = t.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          this._dirEdgeList.add(i);
          var s = i.getSym().getNode();
          s.isVisited() || e.push(s);
        }
      } }, { key: "getNodes", value: function() {
        return this._nodes;
      } }, { key: "getDirectedEdges", value: function() {
        return this._dirEdgeList;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._finder = null, this._dirEdgeList = new W(), this._nodes = new W(), this._rightMostCoord = null, this._env = null, this._finder = new Cs();
      } }]), r;
    }(), Yn = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "intersection", value: function(t, e, n, i) {
        var s = t.x < e.x ? t.x : e.x, o = t.y < e.y ? t.y : e.y, c = t.x > e.x ? t.x : e.x, v = t.y > e.y ? t.y : e.y, y = n.x < i.x ? n.x : i.x, k = n.y < i.y ? n.y : i.y, S = n.x > i.x ? n.x : i.x, C = n.y > i.y ? n.y : i.y, F = ((s > y ? s : y) + (c < S ? c : S)) / 2, A = ((o > k ? o : k) + (v < C ? v : C)) / 2, Z = t.x - F, j = t.y - A, J = e.x - F, ct = e.y - A, mt = n.x - F, Nt = n.y - A, Pt = i.x - F, Ut = i.y - A, ie = j - ct, ke = J - Z, je = Z * ct - J * j, We = Nt - Ut, Oe = Pt - mt, vr = mt * Ut - Pt * Nt, yr = ie * Oe - We * ke, ni = (ke * vr - Oe * je) / yr, ii = (We * je - ie * vr) / yr;
        return H.isNaN(ni) || H.isInfinite(ni) || H.isNaN(ii) || H.isInfinite(ii) ? null : new T(ni + F, ii + A);
      } }]), r;
    }(), At = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "arraycopy", value: function(t, e, n, i, s) {
        for (var o = 0, c = e; c < e + s; c++) n[i + o] = t[c], o++;
      } }, { key: "getProperty", value: function(t) {
        return { "line.separator": `
` }[t];
      } }]), r;
    }(), ze = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "log10", value: function(t) {
        var e = Math.log(t);
        return H.isInfinite(e) || H.isNaN(e) ? e : e / r.LOG_10;
      } }, { key: "min", value: function(t, e, n, i) {
        var s = t;
        return e < s && (s = e), n < s && (s = n), i < s && (s = i), s;
      } }, { key: "clamp", value: function() {
        if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var t = arguments[0], e = arguments[1], n = arguments[2];
          return t < e ? e : t > n ? n : t;
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          return i < s ? s : i > o ? o : i;
        }
      } }, { key: "wrap", value: function(t, e) {
        return t < 0 ? e - -t % e : t % e;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var t = arguments[0], e = arguments[1], n = arguments[2], i = t;
          return e > i && (i = e), n > i && (i = n), i;
        }
        if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = s;
          return o > y && (y = o), c > y && (y = c), v > y && (y = v), y;
        }
      } }, { key: "average", value: function(t, e) {
        return (t + e) / 2;
      } }]), r;
    }();
    ze.LOG_10 = Math.log(10);
    var Zt = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "segmentToSegment", value: function(t, e, n, i) {
        if (t.equals(e)) return r.pointToSegment(t, n, i);
        if (n.equals(i)) return r.pointToSegment(i, t, e);
        var s = !1;
        if (vt.intersects(t, e, n, i)) {
          var o = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);
          if (o === 0) s = !0;
          else {
            var c = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y), v = ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / o, y = c / o;
            (y < 0 || y > 1 || v < 0 || v > 1) && (s = !0);
          }
        } else s = !0;
        return s ? ze.min(r.pointToSegment(t, n, i), r.pointToSegment(e, n, i), r.pointToSegment(n, t, e), r.pointToSegment(i, t, e)) : 0;
      } }, { key: "pointToSegment", value: function(t, e, n) {
        if (e.x === n.x && e.y === n.y) return t.distance(e);
        var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), s = ((t.x - e.x) * (n.x - e.x) + (t.y - e.y) * (n.y - e.y)) / i;
        if (s <= 0) return t.distance(e);
        if (s >= 1) return t.distance(n);
        var o = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
        return Math.abs(o) * Math.sqrt(i);
      } }, { key: "pointToLinePerpendicular", value: function(t, e, n) {
        var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), s = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
        return Math.abs(s) * Math.sqrt(i);
      } }, { key: "pointToSegmentString", value: function(t, e) {
        if (e.length === 0) throw new D("Line array must contain at least one vertex");
        for (var n = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
          var s = r.pointToSegment(t, e[i], e[i + 1]);
          s < n && (n = s);
        }
        return n;
      } }]), r;
    }(), Ci = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "create", value: function() {
        if (arguments.length === 1) arguments[0] instanceof Array || tt(arguments[0], at);
        else if (arguments.length !== 2) {
          if (arguments.length === 3) {
            var t = arguments[0], e = arguments[1];
            return this.create(t, e);
          }
        }
      } }]), r;
    }(), ln = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "filter", value: function(t) {
      } }]), r;
    }(), Ms = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "ofLine", value: function(t) {
        var e = t.size();
        if (e <= 1) return 0;
        var n = 0, i = new T();
        t.getCoordinate(0, i);
        for (var s = i.x, o = i.y, c = 1; c < e; c++) {
          t.getCoordinate(c, i);
          var v = i.x, y = i.y, k = v - s, S = y - o;
          n += Math.sqrt(k * k + S * S), s = v, o = y;
        }
        return n;
      } }]), r;
    }(), Ri = function r() {
      a(this, r);
    }, ye = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "copyCoord", value: function(t, e, n, i) {
        for (var s = Math.min(t.getDimension(), n.getDimension()), o = 0; o < s; o++) n.setOrdinate(i, o, t.getOrdinate(e, o));
      } }, { key: "isRing", value: function(t) {
        var e = t.size();
        return e === 0 || !(e <= 3) && t.getOrdinate(0, at.X) === t.getOrdinate(e - 1, at.X) && t.getOrdinate(0, at.Y) === t.getOrdinate(e - 1, at.Y);
      } }, { key: "scroll", value: function() {
        if (arguments.length === 2) {
          if (tt(arguments[0], at) && Number.isInteger(arguments[1])) {
            var t = arguments[0], e = arguments[1];
            r.scroll(t, e, r.isRing(t));
          } else if (tt(arguments[0], at) && arguments[1] instanceof T) {
            var n = arguments[0], i = arguments[1], s = r.indexOf(i, n);
            if (s <= 0) return null;
            r.scroll(n, s);
          }
        } else if (arguments.length === 3) {
          var o = arguments[0], c = arguments[1], v = arguments[2], y = c;
          if (y <= 0) return null;
          for (var k = o.copy(), S = v ? o.size() - 1 : o.size(), C = 0; C < S; C++) for (var F = 0; F < o.getDimension(); F++) o.setOrdinate(C, F, k.getOrdinate((c + C) % S, F));
          if (v) for (var A = 0; A < o.getDimension(); A++) o.setOrdinate(S, A, o.getOrdinate(0, A));
        }
      } }, { key: "isEqual", value: function(t, e) {
        var n = t.size();
        if (n !== e.size()) return !1;
        for (var i = Math.min(t.getDimension(), e.getDimension()), s = 0; s < n; s++) for (var o = 0; o < i; o++) {
          var c = t.getOrdinate(s, o), v = e.getOrdinate(s, o);
          if (t.getOrdinate(s, o) !== e.getOrdinate(s, o) && (!H.isNaN(c) || !H.isNaN(v))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return r.minCoordinateIndex(t, 0, t.size() - 1);
        }
        if (arguments.length === 3) {
          for (var e = arguments[0], n = arguments[1], i = arguments[2], s = -1, o = null, c = n; c <= i; c++) {
            var v = e.getCoordinate(c);
            (o === null || o.compareTo(v) > 0) && (o = v, s = c);
          }
          return s;
        }
      } }, { key: "extend", value: function(t, e, n) {
        var i = t.create(n, e.getDimension()), s = e.size();
        if (r.copy(e, 0, i, 0, s), s > 0) for (var o = s; o < n; o++) r.copy(e, s - 1, i, o, 1);
        return i;
      } }, { key: "reverse", value: function(t) {
        for (var e = t.size() - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) r.swap(t, i, e - i);
      } }, { key: "swap", value: function(t, e, n) {
        if (e === n) return null;
        for (var i = 0; i < t.getDimension(); i++) {
          var s = t.getOrdinate(e, i);
          t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, s);
        }
      } }, { key: "copy", value: function(t, e, n, i, s) {
        for (var o = 0; o < s; o++) r.copyCoord(t, e + o, n, i + o);
      } }, { key: "ensureValidRing", value: function(t, e) {
        var n = e.size();
        return n === 0 ? e : n <= 3 ? r.createClosedRing(t, e, 4) : e.getOrdinate(0, at.X) === e.getOrdinate(n - 1, at.X) && e.getOrdinate(0, at.Y) === e.getOrdinate(n - 1, at.Y) ? e : r.createClosedRing(t, e, n + 1);
      } }, { key: "indexOf", value: function(t, e) {
        for (var n = 0; n < e.size(); n++) if (t.x === e.getOrdinate(n, at.X) && t.y === e.getOrdinate(n, at.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(t, e, n) {
        var i = t.create(n, e.getDimension()), s = e.size();
        r.copy(e, 0, i, 0, s);
        for (var o = s; o < n; o++) r.copy(e, 0, i, o, 1);
        return i;
      } }, { key: "minCoordinate", value: function(t) {
        for (var e = null, n = 0; n < t.size(); n++) {
          var i = t.getCoordinate(n);
          (e === null || e.compareTo(i) > 0) && (e = i);
        }
        return e;
      } }]), r;
    }(), Y = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "toDimensionSymbol", value: function(t) {
        switch (t) {
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
        throw new D("Unknown dimension value: " + t);
      } }, { key: "toDimensionValue", value: function(t) {
        switch (Gn.toUpperCase(t)) {
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
        throw new D("Unknown dimension symbol: " + t);
      } }]), r;
    }();
    Y.P = 0, Y.L = 1, Y.A = 2, Y.FALSE = -1, Y.TRUE = -2, Y.DONTCARE = -3, Y.SYM_FALSE = "F", Y.SYM_TRUE = "T", Y.SYM_DONTCARE = "*", Y.SYM_P = "0", Y.SYM_L = "1", Y.SYM_A = "2";
    var hn = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "filter", value: function(t) {
      } }]), r;
    }(), cn = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "filter", value: function(t, e) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), r;
    }(), Be = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "computeEnvelopeInternal", value: function() {
        return this.isEmpty() ? new vt() : this._points.expandEnvelope(new vt());
      } }, { key: "isRing", value: function() {
        return this.isClosed() && this.isSimple();
      } }, { key: "getCoordinates", value: function() {
        return this._points.toCoordinateArray();
      } }, { key: "copyInternal", value: function() {
        return new e(this._points.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n;
          if (this._points.size() !== s._points.size()) return !1;
          for (var o = 0; o < this._points.size(); o++) if (!this.equal(this._points.getCoordinate(o), s._points.getCoordinate(o), i)) return !1;
          return !0;
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < Math.trunc(this._points.size() / 2); n++) {
          var i = this._points.size() - 1 - n;
          if (!this._points.getCoordinate(n).equals(this._points.getCoordinate(i))) {
            if (this._points.getCoordinate(n).compareTo(this._points.getCoordinate(i)) > 0) {
              var s = this._points.copy();
              ye.reverse(s), this._points = s;
            }
            return null;
          }
        }
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? Y.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return ye.reverse(n), this.getFactory().createLineString(n);
      } }, { key: "getEndPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_LINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getLength", value: function() {
        return Ms.ofLine(this._points);
      } }, { key: "getNumPoints", value: function() {
        return this._points.size();
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          for (var n = arguments[0], i = n, s = 0, o = 0; s < this._points.size() && o < i._points.size(); ) {
            var c = this._points.getCoordinate(s).compareTo(i._points.getCoordinate(o));
            if (c !== 0) return c;
            s++, o++;
          }
          return s < this._points.size() ? 1 : o < i._points.size() ? -1 : 0;
        }
        if (arguments.length === 2) {
          var v = arguments[0], y = arguments[1], k = v;
          return y.compare(this._points, k._points);
        }
      } }, { key: "apply", value: function() {
        if (tt(arguments[0], ln)) for (var n = arguments[0], i = 0; i < this._points.size(); i++) n.filter(this._points.getCoordinate(i));
        else if (tt(arguments[0], cn)) {
          var s = arguments[0];
          if (this._points.size() === 0) return null;
          for (var o = 0; o < this._points.size() && (s.filter(this._points, o), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (tt(arguments[0], hn)) {
          var c = arguments[0];
          c.filter(this);
        } else if (tt(arguments[0], B)) {
          var v = arguments[0];
          v.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new se();
      } }, { key: "isEquivalentClass", value: function(n) {
        return n instanceof e;
      } }, { key: "getCoordinateN", value: function(n) {
        return this._points.getCoordinate(n);
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_LINESTRING;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._points;
      } }, { key: "isEmpty", value: function() {
        return this._points.size() === 0;
      } }, { key: "init", value: function(n) {
        if (n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), n.size() === 1) throw new D("Invalid number of points in LineString (found " + n.size() + " - must be 0 or >= 2)");
        this._points = n;
      } }, { key: "isCoordinate", value: function(n) {
        for (var i = 0; i < this._points.size(); i++) if (this._points.getCoordinate(i).equals(n)) return !0;
        return !1;
      } }, { key: "getStartPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(0);
      } }, { key: "getPointN", value: function(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
      } }, { key: "interfaces_", get: function() {
        return [Ri];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            $.constructor_.call(this, i), this.init(n);
          }
        }
      } }]), e;
    }($), Oi = function r() {
      a(this, r);
    }, zn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "computeEnvelopeInternal", value: function() {
        if (this.isEmpty()) return new vt();
        var n = new vt();
        return n.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), n;
      } }, { key: "getCoordinates", value: function() {
        return this.isEmpty() ? [] : [this.getCoordinate()];
      } }, { key: "copyInternal", value: function() {
        return new e(this._coordinates.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && (!(!this.isEmpty() || !n.isEmpty()) || this.isEmpty() === n.isEmpty() && this.equal(n.getCoordinate(), this.getCoordinate(), i));
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
      } }, { key: "getCoordinate", value: function() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
      } }, { key: "getBoundaryDimension", value: function() {
        return Y.FALSE;
      } }, { key: "reverseInternal", value: function() {
        return this.getFactory().createPoint(this._coordinates.copy());
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_POINT;
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
          var s = arguments[0], o = arguments[1], c = s;
          return o.compare(this._coordinates, c._coordinates);
        }
      } }, { key: "apply", value: function() {
        if (tt(arguments[0], ln)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (tt(arguments[0], cn)) {
          var i = arguments[0];
          if (this.isEmpty()) return null;
          i.filter(this._coordinates, 0), i.isGeometryChanged() && this.geometryChanged();
        } else if (tt(arguments[0], hn)) {
          var s = arguments[0];
          s.filter(this);
        } else if (tt(arguments[0], B)) {
          var o = arguments[0];
          o.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_POINT;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._coordinates;
      } }, { key: "getY", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
        return this.getCoordinate().y;
      } }, { key: "isEmpty", value: function() {
        return this._coordinates.size() === 0;
      } }, { key: "init", value: function(n) {
        n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), it.isTrue(n.size() <= 1), this._coordinates = n;
      } }, { key: "isSimple", value: function() {
        return !0;
      } }, { key: "interfaces_", get: function() {
        return [Oi];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], i = arguments[1];
        $.constructor_.call(this, i), this.init(n);
      } }]), e;
    }($), bi = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "ofRing", value: function() {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          return Math.abs(r.ofRingSigned(t));
        }
        if (tt(arguments[0], at)) {
          var e = arguments[0];
          return Math.abs(r.ofRingSigned(e));
        }
      } }, { key: "ofRingSigned", value: function() {
        if (arguments[0] instanceof Array) {
          var t = arguments[0];
          if (t.length < 3) return 0;
          for (var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++) {
            var s = t[i].x - n, o = t[i + 1].y, c = t[i - 1].y;
            e += s * (c - o);
          }
          return e / 2;
        }
        if (tt(arguments[0], at)) {
          var v = arguments[0], y = v.size();
          if (y < 3) return 0;
          var k = new T(), S = new T(), C = new T();
          v.getCoordinate(0, S), v.getCoordinate(1, C);
          var F = S.x;
          C.x -= F;
          for (var A = 0, Z = 1; Z < y - 1; Z++) k.y = S.y, S.x = C.x, S.y = C.y, v.getCoordinate(Z + 1, C), C.x -= F, A += S.x * (k.y - C.y);
          return A / 2;
        }
      } }]), r;
    }(), me = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "sort", value: function() {
        var t = arguments, e = arguments[0];
        if (arguments.length === 1) e.sort(function(F, A) {
          return F.compareTo(A);
        });
        else if (arguments.length === 2) e.sort(function(F, A) {
          return t[1].compare(F, A);
        });
        else if (arguments.length === 3) {
          var n = e.slice(arguments[1], arguments[2]);
          n.sort();
          var i = e.slice(0, arguments[1]).concat(n, e.slice(arguments[2], e.length));
          e.splice(0, e.length);
          var s, o = b(i);
          try {
            for (o.s(); !(s = o.n()).done; ) {
              var c = s.value;
              e.push(c);
            }
          } catch (F) {
            o.e(F);
          } finally {
            o.f();
          }
        } else if (arguments.length === 4) {
          var v = e.slice(arguments[1], arguments[2]);
          v.sort(function(F, A) {
            return t[3].compare(F, A);
          });
          var y = e.slice(0, arguments[1]).concat(v, e.slice(arguments[2], e.length));
          e.splice(0, e.length);
          var k, S = b(y);
          try {
            for (S.s(); !(k = S.n()).done; ) {
              var C = k.value;
              e.push(C);
            }
          } catch (F) {
            S.e(F);
          } finally {
            S.f();
          }
        }
      } }, { key: "asList", value: function(t) {
        var e, n = new W(), i = b(t);
        try {
          for (i.s(); !(e = i.n()).done; ) {
            var s = e.value;
            n.add(s);
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "copyOf", value: function(t, e) {
        return t.slice(0, e);
      } }]), r;
    }(), Mi = function r() {
      a(this, r);
    }, fn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, s = this._shell.getCoordinates(), o = 0; o < s.length; o++) n[++i] = s[o];
        for (var c = 0; c < this._holes.length; c++) for (var v = this._holes[c].getCoordinates(), y = 0; y < v.length; y++) n[++i] = v[y];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += bi.ofRing(this._shell.getCoordinateSequence());
        for (var i = 0; i < this._holes.length; i++) n -= bi.ofRing(this._holes[i].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), i = new Array(this._holes.length).fill(null), s = 0; s < this._holes.length; s++) i[s] = this._holes[s].copy();
        return new e(n, i, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), i = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
          var o = n.getX(s);
          if (o !== i.getMinX() && o !== i.getMaxX()) return !1;
          var c = n.getY(s);
          if (c !== i.getMinY() && c !== i.getMaxY()) return !1;
        }
        for (var v = n.getX(0), y = n.getY(0), k = 1; k <= 4; k++) {
          var S = n.getX(k), C = n.getY(k);
          if (S !== v == (C !== y)) return !1;
          v = S, y = C;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n, o = this._shell, c = s._shell;
          if (!o.equalsExact(c, i) || this._holes.length !== s._holes.length) return !1;
          for (var v = 0; v < this._holes.length; v++) if (!this._holes[v].equalsExact(s._holes[v], i)) return !1;
          return !0;
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        if (arguments.length === 0) {
          this._shell = this.normalized(this._shell, !0);
          for (var n = 0; n < this._holes.length; n++) this._holes[n] = this.normalized(this._holes[n], !1);
          me.sort(this._holes);
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          if (i.isEmpty()) return null;
          var o = i.getCoordinateSequence(), c = ye.minCoordinateIndex(o, 0, o.size() - 2);
          ye.scroll(o, c, !0), K.isCCW(o) === s && ye.reverse(o);
        }
      } }, { key: "getCoordinate", value: function() {
        return this._shell.getCoordinate();
      } }, { key: "getNumInteriorRing", value: function() {
        return this._holes.length;
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this.getExteriorRing().reverse(), i = new Array(this.getNumInteriorRing()).fill(null), s = 0; s < i.length; s++) i[s] = this.getInteriorRingN(s).reverse();
        return this.getFactory().createPolygon(n, i);
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_POLYGON;
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
        var s = n.copy();
        return this.normalize(s, i), s;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this._shell, s = n._shell;
          return i.compareToSameClass(s);
        }
        if (arguments.length === 2) {
          var o = arguments[0], c = arguments[1], v = o, y = this._shell, k = v._shell, S = y.compareToSameClass(k, c);
          if (S !== 0) return S;
          for (var C = this.getNumInteriorRing(), F = v.getNumInteriorRing(), A = 0; A < C && A < F; ) {
            var Z = this.getInteriorRingN(A), j = v.getInteriorRingN(A), J = Z.compareToSameClass(j, c);
            if (J !== 0) return J;
            A++;
          }
          return A < C ? 1 : A < F ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (tt(arguments[0], ln)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var i = 0; i < this._holes.length; i++) this._holes[i].apply(n);
        } else if (tt(arguments[0], cn)) {
          var s = arguments[0];
          if (this._shell.apply(s), !s.isDone()) for (var o = 0; o < this._holes.length && (this._holes[o].apply(s), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (tt(arguments[0], hn)) {
          var c = arguments[0];
          c.filter(this);
        } else if (tt(arguments[0], B)) {
          var v = arguments[0];
          v.filter(this), this._shell.apply(v);
          for (var y = 0; y < this._holes.length; y++) this._holes[y].apply(v);
        }
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        var n = new Array(this._holes.length + 1).fill(null);
        n[0] = this._shell;
        for (var i = 0; i < this._holes.length; i++) n[i + 1] = this._holes[i];
        return n.length <= 1 ? this.getFactory().createLinearRing(n[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(n);
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_POLYGON;
      } }, { key: "getExteriorRing", value: function() {
        return this._shell;
      } }, { key: "isEmpty", value: function() {
        return this._shell.isEmpty();
      } }, { key: "getInteriorRingN", value: function(n) {
        return this._holes[n];
      } }, { key: "interfaces_", get: function() {
        return [Mi];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], i = arguments[1], s = arguments[2];
        if ($.constructor_.call(this, s), n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), $.hasNullElements(i)) throw new D("holes must not contain null elements");
        if (n.isEmpty() && $.hasNonEmptyElements(i)) throw new D("shell is empty but holes are not");
        this._shell = n, this._holes = i;
      } }]), e;
    }($), Ps = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.apply(this, arguments);
      }
      return e;
    }(Si), Pi = function(r) {
      g(e, r);
      var t = E(e);
      function e(n) {
        var i;
        return a(this, e), (i = t.call(this)).array = [], n instanceof Ht && i.addAll(n), i;
      }
      return h(e, [{ key: "contains", value: function(n) {
        var i, s = b(this.array);
        try {
          for (s.s(); !(i = s.n()).done; )
            if (i.value.compareTo(n) === 0) return !0;
        } catch (o) {
          s.e(o);
        } finally {
          s.f();
        }
        return !1;
      } }, { key: "add", value: function(n) {
        if (this.contains(n)) return !1;
        for (var i = 0, s = this.array.length; i < s; i++)
          if (this.array[i].compareTo(n) === 1) return !!this.array.splice(i, 0, n);
        return this.array.push(n), !0;
      } }, { key: "addAll", value: function(n) {
        var i, s = b(n);
        try {
          for (s.s(); !(i = s.n()).done; ) {
            var o = i.value;
            this.add(o);
          }
        } catch (c) {
          s.e(c);
        } finally {
          s.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new se();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new As(this.array);
      } }]), e;
    }(Ps), As = function() {
      function r(t) {
        a(this, r), this.array = t, this.position = 0;
      }
      return h(r, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new un();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new se();
      } }]), r;
    }(), Ot = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "computeEnvelopeInternal", value: function() {
        for (var n = new vt(), i = 0; i < this._geometries.length; i++) n.expandToInclude(this._geometries[i].getEnvelopeInternal());
        return n;
      } }, { key: "getGeometryN", value: function(n) {
        return this._geometries[n];
      } }, { key: "getCoordinates", value: function() {
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, s = 0; s < this._geometries.length; s++) for (var o = this._geometries[s].getCoordinates(), c = 0; c < o.length; c++) n[++i] = o[c];
        return n;
      } }, { key: "getArea", value: function() {
        for (var n = 0, i = 0; i < this._geometries.length; i++) n += this._geometries[i].getArea();
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new e(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n;
          if (this._geometries.length !== s._geometries.length) return !1;
          for (var o = 0; o < this._geometries.length; o++) if (!this._geometries[o].equalsExact(s._geometries[o], i)) return !1;
          return !0;
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < this._geometries.length; n++) this._geometries[n].normalize();
        me.sort(this._geometries);
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      } }, { key: "getBoundaryDimension", value: function() {
        for (var n = Y.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getBoundaryDimension());
        return n;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this._geometries.length, i = new W(n), s = 0; s < n; s++) i.add(this._geometries[s].reverse());
        return this.getFactory().buildGeometry(i);
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getDimension", value: function() {
        for (var n = Y.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getDimension());
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
          var n = arguments[0], i = new Pi(me.asList(this._geometries)), s = new Pi(me.asList(n._geometries));
          return this.compare(i, s);
        }
        if (arguments.length === 2) {
          for (var o = arguments[0], c = arguments[1], v = o, y = this.getNumGeometries(), k = v.getNumGeometries(), S = 0; S < y && S < k; ) {
            var C = this.getGeometryN(S), F = v.getGeometryN(S), A = C.compareToSameClass(F, c);
            if (A !== 0) return A;
            S++;
          }
          return S < y ? 1 : S < k ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (tt(arguments[0], ln)) for (var n = arguments[0], i = 0; i < this._geometries.length; i++) this._geometries[i].apply(n);
        else if (tt(arguments[0], cn)) {
          var s = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var o = 0; o < this._geometries.length && (this._geometries[o].apply(s), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (tt(arguments[0], hn)) {
          var c = arguments[0];
          c.filter(this);
          for (var v = 0; v < this._geometries.length; v++) this._geometries[v].apply(c);
        } else if (tt(arguments[0], B)) {
          var y = arguments[0];
          y.filter(this);
          for (var k = 0; k < this._geometries.length; k++) this._geometries[k].apply(y);
        }
      } }, { key: "getBoundary", value: function() {
        return $.checkNotGeometryCollection(this), it.shouldNeverReachHere(), null;
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_GEOMETRYCOLLECTION;
      } }, { key: "isEmpty", value: function() {
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isEmpty()) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this._geometries = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if ($.constructor_.call(this, i), n === null && (n = []), $.hasNullElements(n)) throw new D("geometries must not contain null elements");
            this._geometries = n;
          }
        }
      } }]), e;
    }($), Bn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new e(n, this._factory);
      } }, { key: "isValid", value: function() {
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && L(d(e.prototype), "equalsExact", this).call(this, n, i);
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1 && Number.isInteger(arguments[0])) {
          var n = arguments[0];
          return this._geometries[n].getCoordinate();
        }
        return L(d(e.prototype), "getCoordinate", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return Y.FALSE;
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_MULTIPOINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_MULTIPOINT;
      } }, { key: "interfaces_", get: function() {
        return [Oi];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Ot.constructor_.call(this, n, i);
      } }]), e;
    }(Ot), Xe = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "copyInternal", value: function() {
        return new e(this._points.copy(), this._factory);
      } }, { key: "getBoundaryDimension", value: function() {
        return Y.FALSE;
      } }, { key: "isClosed", value: function() {
        return !!this.isEmpty() || L(d(e.prototype), "isClosed", this).call(this);
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return ye.reverse(n), this.getFactory().createLinearRing(n);
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_LINEARRING;
      } }, { key: "validateConstruction", value: function() {
        if (!this.isEmpty() && !L(d(e.prototype), "isClosed", this).call(this)) throw new D("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < e.MINIMUM_VALID_SIZE) throw new D("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_LINEARRING;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Be.constructor_.call(this, n, i), this.validateConstruction();
      } }]), e;
    }(Be);
    Xe.MINIMUM_VALID_SIZE = 4;
    var de = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case e.X:
            this.x = i;
            break;
          case e.Y:
            this.y = i;
            break;
          default:
            throw new D("Invalid ordinate index: " + n);
        }
      } }, { key: "getZ", value: function() {
        return T.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case e.X:
            return this.x;
          case e.Y:
            return this.y;
        }
        throw new D("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new D("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new e(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ();
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) T.constructor_.call(this);
        else if (arguments.length === 1) {
          if (arguments[0] instanceof e) {
            var n = arguments[0];
            T.constructor_.call(this, n.x, n.y);
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i.x, i.y);
          }
        } else if (arguments.length === 2) {
          var s = arguments[0], o = arguments[1];
          T.constructor_.call(this, s, o, T.NULL_ORDINATE);
        }
      } }]), e;
    }(T);
    de.X = 0, de.Y = 1, de.Z = -1, de.M = -1;
    var pe = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case e.X:
            this.x = i;
            break;
          case e.Y:
            this.y = i;
            break;
          case e.M:
            this._m = i;
            break;
          default:
            throw new D("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getZ", value: function() {
        return T.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case e.X:
            return this.x;
          case e.Y:
            return this.y;
          case e.M:
            return this._m;
        }
        throw new D("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new D("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new e(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) T.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof e) {
            var n = arguments[0];
            T.constructor_.call(this, n.x, n.y), this._m = n._m;
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i.x, i.y), this._m = this.getM();
          }
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          T.constructor_.call(this, s, o, T.NULL_ORDINATE), this._m = c;
        }
      } }]), e;
    }(T);
    pe.X = 0, pe.Y = 1, pe.Z = -1, pe.M = 2;
    var Xn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getM", value: function() {
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
            throw new D("Invalid ordinate index: " + n);
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
        throw new D("Invalid ordinate index: " + n);
      } }, { key: "copy", value: function() {
        return new e(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) T.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof e) {
            var n = arguments[0];
            T.constructor_.call(this, n), this._m = n._m;
          } else if (arguments[0] instanceof T) {
            var i = arguments[0];
            T.constructor_.call(this, i), this._m = this.getM();
          }
        } else if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          T.constructor_.call(this, s, o, c), this._m = v;
        }
      } }]), e;
    }(T), gn = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "measures", value: function(t) {
        return t instanceof de ? 0 : t instanceof pe || t instanceof Xn ? 1 : 0;
      } }, { key: "dimension", value: function(t) {
        return t instanceof de ? 2 : t instanceof pe ? 3 : t instanceof Xn ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return r.create(t, 0);
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          return e === 2 ? new de() : e === 3 && n === 0 ? new T() : e === 3 && n === 1 ? new pe() : e === 4 && n === 1 ? new Xn() : new T();
        }
      } }]), r;
    }(), Ue = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && tt(arguments[0], Ht)) {
          for (var n = arguments[0], i = arguments[1], s = !1, o = n.iterator(); o.hasNext(); ) this.add(o.next(), i), s = !0;
          return s;
        }
        return L(d(e.prototype), "addAll", this).apply(this, arguments);
      } }, { key: "clone", value: function() {
        for (var n = L(d(e.prototype), "clone", this).call(this), i = 0; i < this.size(); i++) n.add(i, this.get(i).clone());
        return n;
      } }, { key: "toCoordinateArray", value: function() {
        if (arguments.length === 0) return this.toArray(e.coordArrayType);
        if (arguments.length === 1) {
          var n = arguments[0];
          if (n) return this.toArray(e.coordArrayType);
          for (var i = this.size(), s = new Array(i).fill(null), o = 0; o < i; o++) s[o] = this.get(i - o - 1);
          return s;
        }
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return L(d(e.prototype), "add", this).call(this, n);
        }
        if (arguments.length === 2) {
          if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var i = arguments[0], s = arguments[1];
            return this.add(i, s, !0), !0;
          }
          if (arguments[0] instanceof T && typeof arguments[1] == "boolean") {
            var o = arguments[0], c = arguments[1];
            if (!c && this.size() >= 1) {
              var v = this.get(this.size() - 1);
              if (v.equals2D(o)) return null;
            }
            L(d(e.prototype), "add", this).call(this, o);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var y = arguments[0], k = arguments[1];
            return this.add(y, k), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var S = arguments[0], C = arguments[1], F = arguments[2];
            if (F) for (var A = 0; A < S.length; A++) this.add(S[A], C);
            else for (var Z = S.length - 1; Z >= 0; Z--) this.add(S[Z], C);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof T) {
            var j = arguments[0], J = arguments[1], ct = arguments[2];
            if (!ct) {
              var mt = this.size();
              if (mt > 0) {
                if (j > 0) {
                  var Nt = this.get(j - 1);
                  if (Nt.equals2D(J)) return null;
                }
                if (j < mt) {
                  var Pt = this.get(j);
                  if (Pt.equals2D(J)) return null;
                }
              }
            }
            L(d(e.prototype), "add", this).call(this, j, J);
          }
        } else if (arguments.length === 4) {
          var Ut = arguments[0], ie = arguments[1], ke = arguments[2], je = arguments[3], We = 1;
          ke > je && (We = -1);
          for (var Oe = ke; Oe !== je; Oe += We) this.add(Ut[Oe], ie);
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
            var i = arguments[0], s = arguments[1];
            this.ensureCapacity(i.length), this.add(i, s);
          }
        }
      } }]), e;
    }(W);
    Ue.coordArrayType = new Array(0).fill(null);
    var _t = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "isRing", value: function(t) {
        return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
      } }, { key: "ptNotInList", value: function(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (r.indexOf(i, e) < 0) return i;
        }
        return null;
      } }, { key: "scroll", value: function(t, e) {
        var n = r.indexOf(e, t);
        if (n < 0) return null;
        var i = new Array(t.length).fill(null);
        At.arraycopy(t, n, i, 0, t.length - n), At.arraycopy(t, 0, i, t.length - n, n), At.arraycopy(i, 0, t, 0, t.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          if (t === e) return !0;
          if (t === null || e === null || t.length !== e.length) return !1;
          for (var n = 0; n < t.length; n++) if (!t[n].equals(e[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          if (i === s) return !0;
          if (i === null || s === null || i.length !== s.length) return !1;
          for (var c = 0; c < i.length; c++) if (o.compare(i[c], s[c]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(t, e) {
        for (var n = new Ue(), i = 0; i < t.length; i++) e.intersects(t[i]) && n.add(t[i], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(t) {
        if (t === null || t.length === 0) return 0;
        var e, n = 0, i = b(t);
        try {
          for (i.s(); !(e = i.n()).done; ) {
            var s = e.value;
            n = Math.max(n, gn.measures(s));
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(t) {
        for (var e = 1; e < t.length; e++) if (t[e - 1].equals(t[e])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(t) {
        return r.hasRepeatedPoints(t) ? new Ue(t, !1).toCoordinateArray() : t;
      } }, { key: "reverse", value: function(t) {
        for (var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
          var s = t[i];
          t[i] = t[e - i], t[e - i] = s;
        }
      } }, { key: "removeNull", value: function(t) {
        for (var e = 0, n = 0; n < t.length; n++) t[n] !== null && e++;
        var i = new Array(e).fill(null);
        if (e === 0) return i;
        for (var s = 0, o = 0; o < t.length; o++) t[o] !== null && (i[s++] = t[o]);
        return i;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++) e[n] = t[n].copy();
          return e;
        }
        if (arguments.length === 5) for (var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3], v = arguments[4], y = 0; y < v; y++) o[c + y] = i[s + y].copy();
      } }, { key: "isEqualReversed", value: function(t, e) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n], s = e[t.length - n - 1];
          if (i.compareTo(s) !== 0) return !1;
        }
        return !0;
      } }, { key: "envelope", value: function(t) {
        for (var e = new vt(), n = 0; n < t.length; n++) e.expandToInclude(t[n]);
        return e;
      } }, { key: "toCoordinateArray", value: function(t) {
        return t.toArray(r.coordArrayType);
      } }, { key: "dimension", value: function(t) {
        if (t === null || t.length === 0) return 3;
        var e, n = 0, i = b(t);
        try {
          for (i.s(); !(e = i.n()).done; ) {
            var s = e.value;
            n = Math.max(n, gn.dimension(s));
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "atLeastNCoordinatesOrNothing", value: function(t, e) {
        return e.length >= t ? e : [];
      } }, { key: "indexOf", value: function(t, e) {
        for (var n = 0; n < e.length; n++) if (t.equals(e[n])) return n;
        return -1;
      } }, { key: "increasingDirection", value: function(t) {
        for (var e = 0; e < Math.trunc(t.length / 2); e++) {
          var n = t.length - 1 - e, i = t[e].compareTo(t[n]);
          if (i !== 0) return i;
        }
        return 1;
      } }, { key: "compare", value: function(t, e) {
        for (var n = 0; n < t.length && n < e.length; ) {
          var i = t[n].compareTo(e[n]);
          if (i !== 0) return i;
          n++;
        }
        return n < e.length ? -1 : n < t.length ? 1 : 0;
      } }, { key: "minCoordinate", value: function(t) {
        for (var e = null, n = 0; n < t.length; n++) (e === null || e.compareTo(t[n]) > 0) && (e = t[n]);
        return e;
      } }, { key: "extract", value: function(t, e, n) {
        e = ze.clamp(e, 0, t.length);
        var i = (n = ze.clamp(n, -1, t.length)) - e + 1;
        n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);
        var s = new Array(i).fill(null);
        if (i === 0) return s;
        for (var o = 0, c = e; c <= n; c++) s[o++] = t[c];
        return s;
      } }]), r;
    }(), Ds = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "compare", value: function(t, e) {
        var n = t, i = e;
        return _t.compare(n, i);
      } }, { key: "interfaces_", get: function() {
        return [St];
      } }]), r;
    }(), Fs = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "compare", value: function(t, e) {
        var n = t, i = e;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        var s = _t.compare(n, i);
        return _t.isEqualReversed(n, i) ? 0 : s;
      } }, { key: "OLDcompare", value: function(t, e) {
        var n = t, i = e;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        for (var s = _t.increasingDirection(n), o = _t.increasingDirection(i), c = s > 0 ? 0 : n.length - 1, v = o > 0 ? 0 : n.length - 1, y = 0; y < n.length; y++) {
          var k = n[c].compareTo(i[v]);
          if (k !== 0) return k;
          c += s, v += o;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [St];
      } }]), r;
    }();
    _t.ForwardComparator = Ds, _t.BidirectionalComparator = Fs, _t.coordArrayType = new Array(0).fill(null);
    var vn = function() {
      function r(t) {
        a(this, r), this.str = t;
      }
      return h(r, [{ key: "append", value: function(t) {
        this.str += t;
      } }, { key: "setCharAt", value: function(t, e) {
        this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), Ve = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getM", value: function(t) {
        return this.hasM() ? this._coordinates[t].getM() : H.NaN;
      } }, { key: "setOrdinate", value: function(t, e, n) {
        switch (e) {
          case at.X:
            this._coordinates[t].x = n;
            break;
          case at.Y:
            this._coordinates[t].y = n;
            break;
          default:
            this._coordinates[t].setOrdinate(e, n);
        }
      } }, { key: "getZ", value: function(t) {
        return this.hasZ() ? this._coordinates[t].getZ() : H.NaN;
      } }, { key: "size", value: function() {
        return this._coordinates.length;
      } }, { key: "getOrdinate", value: function(t, e) {
        switch (e) {
          case at.X:
            return this._coordinates[t].x;
          case at.Y:
            return this._coordinates[t].y;
          default:
            return this._coordinates[t].getOrdinate(e);
        }
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return this._coordinates[t];
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          n.setCoordinate(this._coordinates[e]);
        }
      } }, { key: "getCoordinateCopy", value: function(t) {
        var e = this.createCoordinate();
        return e.setCoordinate(this._coordinates[t]), e;
      } }, { key: "createCoordinate", value: function() {
        return gn.create(this.getDimension(), this.getMeasures());
      } }, { key: "getDimension", value: function() {
        return this._dimension;
      } }, { key: "getX", value: function(t) {
        return this._coordinates[t].x;
      } }, { key: "getMeasures", value: function() {
        return this._measures;
      } }, { key: "expandEnvelope", value: function(t) {
        for (var e = 0; e < this._coordinates.length; e++) t.expandToInclude(this._coordinates[e]);
        return t;
      } }, { key: "copy", value: function() {
        for (var t = new Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++) {
          var n = this.createCoordinate();
          n.setCoordinate(this._coordinates[e]), t[e] = n;
        }
        return new r(t, this._dimension, this._measures);
      } }, { key: "toString", value: function() {
        if (this._coordinates.length > 0) {
          var t = new vn(17 * this._coordinates.length);
          t.append("("), t.append(this._coordinates[0]);
          for (var e = 1; e < this._coordinates.length; e++) t.append(", "), t.append(this._coordinates[e]);
          return t.append(")"), t.toString();
        }
        return "()";
      } }, { key: "getY", value: function(t) {
        return this._coordinates[t].y;
      } }, { key: "toCoordinateArray", value: function() {
        return this._coordinates;
      } }, { key: "interfaces_", get: function() {
        return [at, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            r.constructor_.call(this, t, _t.dimension(t), _t.measures(t));
          } else if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this._coordinates = new Array(e).fill(null);
            for (var n = 0; n < e; n++) this._coordinates[n] = new T();
          } else if (tt(arguments[0], at)) {
            var i = arguments[0];
            if (i === null) return this._coordinates = new Array(0).fill(null), null;
            this._dimension = i.getDimension(), this._measures = i.getMeasures(), this._coordinates = new Array(i.size()).fill(null);
            for (var s = 0; s < this._coordinates.length; s++) this._coordinates[s] = i.getCoordinateCopy(s);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var o = arguments[0], c = arguments[1];
            r.constructor_.call(this, o, c, _t.measures(o));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var v = arguments[0], y = arguments[1];
            this._coordinates = new Array(v).fill(null), this._dimension = y;
            for (var k = 0; k < v; k++) this._coordinates[k] = gn.create(y);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var S = arguments[0], C = arguments[1], F = arguments[2];
            this._dimension = C, this._measures = F, this._coordinates = S === null ? new Array(0).fill(null) : S;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var A = arguments[0], Z = arguments[1], j = arguments[2];
            this._coordinates = new Array(A).fill(null), this._dimension = Z, this._measures = j;
            for (var J = 0; J < A; J++) this._coordinates[J] = this.createCoordinate();
          }
        }
      } }]), r;
    }(), Un = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "readResolve", value: function() {
        return r.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return new Ve(t);
          }
          if (tt(arguments[0], at)) {
            var e = arguments[0];
            return new Ve(e);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return i > 3 && (i = 3), i < 2 && (i = 2), new Ve(n, i);
          }
          if (arguments.length === 3) {
            var s = arguments[0], o = arguments[1], c = arguments[2], v = o - c;
            return c > 1 && (c = 1), v > 3 && (v = 3), v < 2 && (v = 2), new Ve(s, v + c, c);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [Ci, U];
      } }], [{ key: "instance", value: function() {
        return r.instanceObject;
      } }]), r;
    }();
    Un.instanceObject = new Un();
    var Vn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new e(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && L(d(e.prototype), "equalsExact", this).call(this, n, i);
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_MULTIPOLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        for (var n = new W(), i = 0; i < this._geometries.length; i++) for (var s = this._geometries[i].getBoundary(), o = 0; o < s.getNumGeometries(); o++) n.add(s.getGeometryN(o));
        var c = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(c));
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [Mi];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Ot.constructor_.call(this, n, i);
      } }]), e;
    }(Ot), Ai = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), r;
    }(), Gs = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), (n = t.call(this)).map = /* @__PURE__ */ new Map(), n;
      }
      return h(e, [{ key: "get", value: function(n) {
        return this.map.get(n) || null;
      } }, { key: "put", value: function(n, i) {
        return this.map.set(n, i), i;
      } }, { key: "values", value: function() {
        for (var n = new W(), i = this.map.values(), s = i.next(); !s.done; ) n.add(s.value), s = i.next();
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Fn();
        return this.map.entries().forEach(function(i) {
          return n.add(i);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), e;
    }(Ai), Bt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "equals", value: function(t) {
        if (!(t instanceof r)) return !1;
        var e = t;
        return this._modelType === e._modelType && this._scale === e._scale;
      } }, { key: "compareTo", value: function(t) {
        var e = t, n = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
        return on.compare(n, i);
      } }, { key: "getScale", value: function() {
        return this._scale;
      } }, { key: "isFloating", value: function() {
        return this._modelType === r.FLOATING || this._modelType === r.FLOATING_SINGLE;
      } }, { key: "getType", value: function() {
        return this._modelType;
      } }, { key: "toString", value: function() {
        var t = "UNKNOWN";
        return this._modelType === r.FLOATING ? t = "Floating" : this._modelType === r.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === r.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
      } }, { key: "makePrecise", value: function() {
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return H.isNaN(t) || this._modelType === r.FLOATING_SINGLE ? t : this._modelType === r.FIXED ? Math.round(t * this._scale) / this._scale : t;
        }
        if (arguments[0] instanceof T) {
          var e = arguments[0];
          if (this._modelType === r.FLOATING) return null;
          e.x = this.makePrecise(e.x), e.y = this.makePrecise(e.y);
        }
      } }, { key: "getMaximumSignificantDigits", value: function() {
        var t = 16;
        return this._modelType === r.FLOATING ? t = 16 : this._modelType === r.FLOATING_SINGLE ? t = 6 : this._modelType === r.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
      } }, { key: "setScale", value: function(t) {
        this._scale = Math.abs(t);
      } }, { key: "interfaces_", get: function() {
        return [U, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = r.FLOATING;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof Ne) {
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
      } }, { key: "mostPrecise", value: function(t, e) {
        return t.compareTo(e) >= 0 ? t : e;
      } }]), r;
    }(), Ne = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "readResolve", value: function() {
        return r.nameToTypeMap.get(this._name);
      } }, { key: "toString", value: function() {
        return this._name;
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        this._name = null;
        var t = arguments[0];
        this._name = t, r.nameToTypeMap.put(t, this);
      } }]), r;
    }();
    Ne.nameToTypeMap = new Gs(), Bt.Type = Ne, Bt.FIXED = new Ne("FIXED"), Bt.FLOATING = new Ne("FLOATING"), Bt.FLOATING_SINGLE = new Ne("FLOATING SINGLE"), Bt.maximumPreciseValue = 9007199254740992;
    var Hn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new e(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof $) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && L(d(e.prototype), "equalsExact", this).call(this, n, i);
        }
        return L(d(e.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? Y.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        if (this.isEmpty()) return !1;
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isClosed()) return !1;
        return !0;
      } }, { key: "getTypeCode", value: function() {
        return $.TYPECODE_MULTILINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getBoundary", value: function() {
        throw new se();
      } }, { key: "getGeometryType", value: function() {
        return $.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [Ri];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Ot.constructor_.call(this, n, i);
      } }]), e;
    }(Ot), we = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "createEmpty", value: function(t) {
        switch (t) {
          case -1:
            return this.createGeometryCollection();
          case 0:
            return this.createPoint();
          case 1:
            return this.createLineString();
          case 2:
            return this.createPolygon();
          default:
            throw new D("Invalid dimension: " + t);
        }
      } }, { key: "toGeometry", value: function(t) {
        return t.isNull() ? this.createPoint() : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new T(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new T(t.getMinX(), t.getMinY()), new T(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new T(t.getMinX(), t.getMinY()), new T(t.getMinX(), t.getMaxY()), new T(t.getMaxX(), t.getMaxY()), new T(t.getMaxX(), t.getMinY()), new T(t.getMinX(), t.getMinY())]), null);
      } }, { key: "createLineString", value: function() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createLineString(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
          }
          if (tt(arguments[0], at)) {
            var e = arguments[0];
            return new Be(e, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new Hn(null, this);
        if (arguments.length === 1) {
          var t = arguments[0];
          return new Hn(t, this);
        }
      } }, { key: "buildGeometry", value: function(t) {
        for (var e = null, n = !1, i = !1, s = t.iterator(); s.hasNext(); ) {
          var o = s.next(), c = o.getTypeCode();
          e === null && (e = c), c !== e && (n = !0), o instanceof Ot && (i = !0);
        }
        if (e === null) return this.createGeometryCollection();
        if (n || i) return this.createGeometryCollection(r.toGeometryArray(t));
        var v = t.iterator().next();
        if (t.size() > 1) {
          if (v instanceof fn) return this.createMultiPolygon(r.toPolygonArray(t));
          if (v instanceof Be) return this.createMultiLineString(r.toLineStringArray(t));
          if (v instanceof zn) return this.createMultiPoint(r.toPointArray(t));
          it.shouldNeverReachHere("Unhandled geometry type: " + v.getGeometryType());
        }
        return v;
      } }, { key: "createMultiPointFromCoords", value: function(t) {
        return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
      } }, { key: "createPoint", value: function() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof T) {
            var t = arguments[0];
            return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
          }
          if (tt(arguments[0], at)) {
            var e = arguments[0];
            return new zn(e, this);
          }
        }
      } }, { key: "getCoordinateSequenceFactory", value: function() {
        return this._coordinateSequenceFactory;
      } }, { key: "createPolygon", value: function() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        if (arguments.length === 1) {
          if (tt(arguments[0], at)) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t));
          }
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e));
          }
          if (arguments[0] instanceof Xe) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          return new fn(i, s, this);
        }
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "createGeometryCollection", value: function() {
        if (arguments.length === 0) return new Ot(null, this);
        if (arguments.length === 1) {
          var t = arguments[0];
          return new Ot(t, this);
        }
      } }, { key: "getPrecisionModel", value: function() {
        return this._precisionModel;
      } }, { key: "createLinearRing", value: function() {
        if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
          }
          if (tt(arguments[0], at)) {
            var e = arguments[0];
            return new Xe(e, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new Vn(null, this);
        if (arguments.length === 1) {
          var t = arguments[0];
          return new Vn(t, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new Bn(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return new Bn(t, this);
          }
          if (tt(arguments[0], at)) {
            var e = arguments[0];
            if (e === null) return this.createMultiPoint(new Array(0).fill(null));
            for (var n = new Array(e.size()).fill(null), i = 0; i < e.size(); i++) {
              var s = this.getCoordinateSequenceFactory().create(1, e.getDimension(), e.getMeasures());
              ye.copy(e, i, s, 0, 1), n[i] = this.createPoint(s);
            }
            return this.createMultiPoint(n);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) r.constructor_.call(this, new Bt(), 0);
        else if (arguments.length === 1) {
          if (tt(arguments[0], Ci)) {
            var t = arguments[0];
            r.constructor_.call(this, new Bt(), 0, t);
          } else if (arguments[0] instanceof Bt) {
            var e = arguments[0];
            r.constructor_.call(this, e, 0, r.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          r.constructor_.call(this, n, i, r.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._precisionModel = s, this._coordinateSequenceFactory = c, this._SRID = o;
        }
      } }, { key: "toMultiPolygonArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toGeometryArray", value: function(t) {
        if (t === null) return null;
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return Un.instance();
      } }, { key: "toMultiLineStringArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toLineStringArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toMultiPointArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toLinearRingArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toPointArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "toPolygonArray", value: function(t) {
        var e = new Array(t.size()).fill(null);
        return t.toArray(e);
      } }, { key: "createPointFromInternalCoord", value: function(t, e) {
        return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
      } }]), r;
    }(), Zn = "XY", qs = "XYZ", Ys = "XYM", zs = "XYZM", Di = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, Fi = "EMPTY", yn = 1, ee = 2, ae = 3, Gi = 4, Se = 5, Bs = 6;
    for (var Xs in Di) Di[Xs].toUpperCase();
    var Us = function() {
      function r(t) {
        a(this, r), this.wkt = t, this.index_ = -1;
      }
      return h(r, [{ key: "isAlpha_", value: function(t) {
        return t >= "a" && t <= "z" || t >= "A" && t <= "Z";
      } }, { key: "isNumeric_", value: function(t, e) {
        return t >= "0" && t <= "9" || t == "." && !(e !== void 0 && e);
      } }, { key: "isWhiteSpace_", value: function(t) {
        return t == " " || t == "	" || t == "\r" || t == `
`;
      } }, { key: "nextChar_", value: function() {
        return this.wkt.charAt(++this.index_);
      } }, { key: "nextToken", value: function() {
        var t, e = this.nextChar_(), n = this.index_, i = e;
        if (e == "(") t = ee;
        else if (e == ",") t = Se;
        else if (e == ")") t = ae;
        else if (this.isNumeric_(e) || e == "-") t = Gi, i = this.readNumber_();
        else if (this.isAlpha_(e)) t = yn, i = this.readText_();
        else {
          if (this.isWhiteSpace_(e)) return this.nextToken();
          if (e !== "") throw new Error("Unexpected character: " + e);
          t = Bs;
        }
        return { position: n, value: i, type: t };
      } }, { key: "readNumber_", value: function() {
        var t, e = this.index_, n = !1, i = !1;
        do
          t == "." ? n = !0 : t != "e" && t != "E" || (i = !0), t = this.nextChar_();
        while (this.isNumeric_(t, n) || !i && (t == "e" || t == "E") || i && (t == "-" || t == "+"));
        return parseFloat(this.wkt.substring(e, this.index_--));
      } }, { key: "readText_", value: function() {
        var t, e = this.index_;
        do
          t = this.nextChar_();
        while (this.isAlpha_(t));
        return this.wkt.substring(e, this.index_--).toUpperCase();
      } }]), r;
    }(), Vs = function() {
      function r(t, e) {
        a(this, r), this.lexer_ = t, this.token_, this.layout_ = Zn, this.factory = e;
      }
      return h(r, [{ key: "consume_", value: function() {
        this.token_ = this.lexer_.nextToken();
      } }, { key: "isTokenType", value: function(t) {
        return this.token_.type == t;
      } }, { key: "match", value: function(t) {
        var e = this.isTokenType(t);
        return e && this.consume_(), e;
      } }, { key: "parse", value: function() {
        return this.consume_(), this.parseGeometry_();
      } }, { key: "parseGeometryLayout_", value: function() {
        var t = Zn, e = this.token_;
        if (this.isTokenType(yn)) {
          var n = e.value;
          n === "Z" ? t = qs : n === "M" ? t = Ys : n === "ZM" && (t = zs), t !== Zn && this.consume_();
        }
        return t;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(ee)) {
          var t = [];
          do
            t.push(this.parseGeometry_());
          while (this.match(Se));
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(ee)) {
          var t = this.parsePoint_();
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(ee)) {
          var t = this.parsePointList_();
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(ee)) {
          var t = this.parseLineStringTextList_();
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var t;
        if (this.match(ee)) {
          if (t = this.token_.type == ee ? this.parsePointTextList_() : this.parsePointList_(), this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(ee)) {
          var t = this.parseLineStringTextList_();
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(ee)) {
          var t = this.parsePolygonTextList_();
          if (this.match(ae)) return t;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var t = [], e = this.layout_.length, n = 0; n < e; ++n) {
          var i = this.token_;
          if (!this.match(Gi)) break;
          t.push(i.value);
        }
        if (t.length == e) return t;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var t = [this.parsePoint_()]; this.match(Se); ) t.push(this.parsePoint_());
        return t;
      } }, { key: "parsePointTextList_", value: function() {
        for (var t = [this.parsePointText_()]; this.match(Se); ) t.push(this.parsePointText_());
        return t;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var t = [this.parseLineStringText_()]; this.match(Se); ) t.push(this.parseLineStringText_());
        return t;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var t = [this.parsePolygonText_()]; this.match(Se); ) t.push(this.parsePolygonText_());
        return t;
      } }, { key: "isEmptyGeometry_", value: function() {
        var t = this.isTokenType(yn) && this.token_.value == Fi;
        return t && this.consume_(), t;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var t = this.factory, e = function(j) {
          return _(T, M(j));
        }, n = function(j) {
          var J = j.map(function(ct) {
            return t.createLinearRing(ct.map(e));
          });
          return J.length > 1 ? t.createPolygon(J[0], J.slice(1)) : t.createPolygon(J[0]);
        }, i = this.token_;
        if (this.match(yn)) {
          var s = i.value;
          if (this.layout_ = this.parseGeometryLayout_(), s == "GEOMETRYCOLLECTION") {
            var o = this.parseGeometryCollectionText_();
            return t.createGeometryCollection(o);
          }
          switch (s) {
            case "POINT":
              var c = this.parsePointText_();
              return c ? t.createPoint(_(T, M(c))) : t.createPoint();
            case "LINESTRING":
              var v = this.parseLineStringText_().map(e);
              return t.createLineString(v);
            case "LINEARRING":
              var y = this.parseLineStringText_().map(e);
              return t.createLinearRing(y);
            case "POLYGON":
              var k = this.parsePolygonText_();
              return k && k.length !== 0 ? n(k) : t.createPolygon();
            case "MULTIPOINT":
              var S = this.parseMultiPointText_();
              if (!S || S.length === 0) return t.createMultiPoint();
              var C = S.map(e).map(function(j) {
                return t.createPoint(j);
              });
              return t.createMultiPoint(C);
            case "MULTILINESTRING":
              var F = this.parseMultiLineStringText_().map(function(j) {
                return t.createLineString(j.map(e));
              });
              return t.createMultiLineString(F);
            case "MULTIPOLYGON":
              var A = this.parseMultiPolygonText_();
              if (!A || A.length === 0) return t.createMultiPolygon();
              var Z = A.map(n);
              return t.createMultiPolygon(Z);
            default:
              throw new Error("Invalid geometry type: " + s);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), r;
    }();
    function qi(r) {
      if (r.isEmpty()) return "";
      var t = r.getCoordinate(), e = [t.x, t.y];
      return t.z === void 0 || Number.isNaN(t.z) || e.push(t.z), t.m === void 0 || Number.isNaN(t.m) || e.push(t.m), e.join(" ");
    }
    function He(r) {
      for (var t = r.getCoordinates().map(function(s) {
        var o = [s.x, s.y];
        return s.z === void 0 || Number.isNaN(s.z) || o.push(s.z), s.m === void 0 || Number.isNaN(s.m) || o.push(s.m), o;
      }), e = [], n = 0, i = t.length; n < i; ++n) e.push(t[n].join(" "));
      return e.join(", ");
    }
    function Yi(r) {
      var t = [];
      t.push("(" + He(r.getExteriorRing()) + ")");
      for (var e = 0, n = r.getNumInteriorRing(); e < n; ++e) t.push("(" + He(r.getInteriorRingN(e)) + ")");
      return t.join(", ");
    }
    var Hs = { Point: qi, LineString: He, LinearRing: He, Polygon: Yi, MultiPoint: function(r) {
      for (var t = [], e = 0, n = r.getNumGeometries(); e < n; ++e) t.push("(" + qi(r.getGeometryN(e)) + ")");
      return t.join(", ");
    }, MultiLineString: function(r) {
      for (var t = [], e = 0, n = r.getNumGeometries(); e < n; ++e) t.push("(" + He(r.getGeometryN(e)) + ")");
      return t.join(", ");
    }, MultiPolygon: function(r) {
      for (var t = [], e = 0, n = r.getNumGeometries(); e < n; ++e) t.push("(" + Yi(r.getGeometryN(e)) + ")");
      return t.join(", ");
    }, GeometryCollection: function(r) {
      for (var t = [], e = 0, n = r.getNumGeometries(); e < n; ++e) t.push(zi(r.getGeometryN(e)));
      return t.join(", ");
    } };
    function zi(r) {
      var t = r.getGeometryType(), e = Hs[t];
      t = t.toUpperCase();
      var n = function(i) {
        var s = "";
        if (i.isEmpty()) return s;
        var o = i.getCoordinate();
        return o.z === void 0 || Number.isNaN(o.z) || (s += "Z"), o.m === void 0 || Number.isNaN(o.m) || (s += "M"), s;
      }(r);
      return n.length > 0 && (t += " " + n), r.isEmpty() ? t + " " + Fi : t + " (" + e(r) + ")";
    }
    var Zs = function() {
      function r(t) {
        a(this, r), this.geometryFactory = t || new we(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return h(r, [{ key: "read", value: function(t) {
        var e = new Us(t);
        return new Vs(e, this.geometryFactory).parse();
      } }, { key: "write", value: function(t) {
        return zi(t);
      } }]), r;
    }(), $n = function() {
      function r(t) {
        a(this, r), this.parser = new Zs(t);
      }
      return h(r, [{ key: "write", value: function(t) {
        return this.parser.write(t);
      } }], [{ key: "toLineString", value: function(t, e) {
        if (arguments.length !== 2) throw new Error("Not implemented");
        return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
      } }]), r;
    }(), yt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getIndexAlongSegment", value: function(t, e) {
        return this.computeIntLineIndex(), this._intLineIndex[t][e];
      } }, { key: "getTopologySummary", value: function() {
        var t = new vn();
        return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
      } }, { key: "computeIntersection", value: function(t, e, n, i) {
        this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, n, i);
      } }, { key: "getIntersectionNum", value: function() {
        return this._result;
      } }, { key: "computeIntLineIndex", value: function() {
        if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
          return Array(2);
        }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
        else if (arguments.length === 1) {
          var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
          e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
        }
      } }, { key: "isProper", value: function() {
        return this.hasIntersection() && this._isProper;
      } }, { key: "setPrecisionModel", value: function(t) {
        this._precisionModel = t;
      } }, { key: "isInteriorIntersection", value: function() {
        if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
        if (arguments.length === 1) {
          for (var t = arguments[0], e = 0; e < this._result; e++) if (!this._intPt[e].equals2D(this._inputLines[t][0]) && !this._intPt[e].equals2D(this._inputLines[t][1])) return !0;
          return !1;
        }
      } }, { key: "getIntersection", value: function(t) {
        return this._intPt[t];
      } }, { key: "isEndPoint", value: function() {
        return this.hasIntersection() && !this._isProper;
      } }, { key: "hasIntersection", value: function() {
        return this._result !== r.NO_INTERSECTION;
      } }, { key: "getEdgeDistance", value: function(t, e) {
        return r.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
      } }, { key: "isCollinear", value: function() {
        return this._result === r.COLLINEAR_INTERSECTION;
      } }, { key: "toString", value: function() {
        return $n.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + $n.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
      } }, { key: "getEndpoint", value: function(t, e) {
        return this._inputLines[t][e];
      } }, { key: "isIntersection", value: function(t) {
        for (var e = 0; e < this._result; e++) if (this._intPt[e].equals2D(t)) return !0;
        return !1;
      } }, { key: "getIntersectionAlongSegment", value: function(t, e) {
        return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
      } }], [{ key: "constructor_", value: function() {
        this._result = null, this._inputLines = Array(2).fill().map(function() {
          return Array(2);
        }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new T(), this._intPt[1] = new T(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
      } }, { key: "computeEdgeDistance", value: function(t, e, n) {
        var i = Math.abs(n.x - e.x), s = Math.abs(n.y - e.y), o = -1;
        if (t.equals(e)) o = 0;
        else if (t.equals(n)) o = i > s ? i : s;
        else {
          var c = Math.abs(t.x - e.x), v = Math.abs(t.y - e.y);
          (o = i > s ? c : v) !== 0 || t.equals(e) || (o = Math.max(c, v));
        }
        return it.isTrue(!(o === 0 && !t.equals(e)), "Bad distance calculation"), o;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(t, e, n) {
        var i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s);
        return it.isTrue(!(o === 0 && !t.equals(e)), "Invalid distance calculation"), o;
      } }]), r;
    }();
    yt.DONT_INTERSECT = 0, yt.DO_INTERSECT = 1, yt.COLLINEAR = 2, yt.NO_INTERSECTION = 0, yt.POINT_INTERSECTION = 1, yt.COLLINEAR_INTERSECTION = 2;
    var _e = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.call(this);
      }
      return h(e, [{ key: "isInSegmentEnvelopes", value: function(n) {
        var i = new vt(this._inputLines[0][0], this._inputLines[0][1]), s = new vt(this._inputLines[1][0], this._inputLines[1][1]);
        return i.contains(n) && s.contains(n);
      } }, { key: "computeIntersection", value: function() {
        if (arguments.length !== 3) return L(d(e.prototype), "computeIntersection", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = arguments[2];
        if (this._isProper = !1, vt.intersects(i, s, n) && K.index(i, s, n) === 0 && K.index(s, i, n) === 0) return this._isProper = !0, (n.equals(i) || n.equals(s)) && (this._isProper = !1), this._result = yt.POINT_INTERSECTION, null;
        this._result = yt.NO_INTERSECTION;
      } }, { key: "intersection", value: function(n, i, s, o) {
        var c = this.intersectionSafe(n, i, s, o);
        return this.isInSegmentEnvelopes(c) || (c = new T(e.nearestEndpoint(n, i, s, o))), this._precisionModel !== null && this._precisionModel.makePrecise(c), c;
      } }, { key: "checkDD", value: function(n, i, s, o, c) {
        var v = qn.intersection(n, i, s, o), y = this.isInSegmentEnvelopes(v);
        At.out.println("DD in env = " + y + "  --------------------- " + v), c.distance(v) > 1e-4 && At.out.println("Distance = " + c.distance(v));
      } }, { key: "intersectionSafe", value: function(n, i, s, o) {
        var c = Yn.intersection(n, i, s, o);
        return c === null && (c = e.nearestEndpoint(n, i, s, o)), c;
      } }, { key: "computeCollinearIntersection", value: function(n, i, s, o) {
        var c = vt.intersects(n, i, s), v = vt.intersects(n, i, o), y = vt.intersects(s, o, n), k = vt.intersects(s, o, i);
        return c && v ? (this._intPt[0] = s, this._intPt[1] = o, yt.COLLINEAR_INTERSECTION) : y && k ? (this._intPt[0] = n, this._intPt[1] = i, yt.COLLINEAR_INTERSECTION) : c && y ? (this._intPt[0] = s, this._intPt[1] = n, !s.equals(n) || v || k ? yt.COLLINEAR_INTERSECTION : yt.POINT_INTERSECTION) : c && k ? (this._intPt[0] = s, this._intPt[1] = i, !s.equals(i) || v || y ? yt.COLLINEAR_INTERSECTION : yt.POINT_INTERSECTION) : v && y ? (this._intPt[0] = o, this._intPt[1] = n, !o.equals(n) || c || k ? yt.COLLINEAR_INTERSECTION : yt.POINT_INTERSECTION) : v && k ? (this._intPt[0] = o, this._intPt[1] = i, !o.equals(i) || c || y ? yt.COLLINEAR_INTERSECTION : yt.POINT_INTERSECTION) : yt.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, i, s, o) {
        if (this._isProper = !1, !vt.intersects(n, i, s, o)) return yt.NO_INTERSECTION;
        var c = K.index(n, i, s), v = K.index(n, i, o);
        if (c > 0 && v > 0 || c < 0 && v < 0) return yt.NO_INTERSECTION;
        var y = K.index(s, o, n), k = K.index(s, o, i);
        return y > 0 && k > 0 || y < 0 && k < 0 ? yt.NO_INTERSECTION : c === 0 && v === 0 && y === 0 && k === 0 ? this.computeCollinearIntersection(n, i, s, o) : (c === 0 || v === 0 || y === 0 || k === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : i.equals2D(s) || i.equals2D(o) ? this._intPt[0] = i : c === 0 ? this._intPt[0] = new T(s) : v === 0 ? this._intPt[0] = new T(o) : y === 0 ? this._intPt[0] = new T(n) : k === 0 && (this._intPt[0] = new T(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, s, o)), yt.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, i, s, o) {
        var c = n, v = Zt.pointToSegment(n, s, o), y = Zt.pointToSegment(i, s, o);
        return y < v && (v = y, c = i), (y = Zt.pointToSegment(s, n, i)) < v && (v = y, c = s), (y = Zt.pointToSegment(o, n, i)) < v && (v = y, c = o), c;
      } }]), e;
    }(yt), $s = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "countSegment", value: function(t, e) {
        if (t.x < this._p.x && e.x < this._p.x) return null;
        if (this._p.x === e.x && this._p.y === e.y) return this._isPointOnSegment = !0, null;
        if (t.y === this._p.y && e.y === this._p.y) {
          var n = t.x, i = e.x;
          return n > i && (n = e.x, i = t.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
        }
        if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
          var s = K.index(t, e, this._p);
          if (s === K.COLLINEAR) return this._isPointOnSegment = !0, null;
          e.y < t.y && (s = -s), s === K.LEFT && this._crossingCount++;
        }
      } }, { key: "isPointInPolygon", value: function() {
        return this.getLocation() !== x.EXTERIOR;
      } }, { key: "getLocation", value: function() {
        return this._isPointOnSegment ? x.BOUNDARY : this._crossingCount % 2 == 1 ? x.INTERIOR : x.EXTERIOR;
      } }, { key: "isOnSegment", value: function() {
        return this._isPointOnSegment;
      } }], [{ key: "constructor_", value: function() {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var t = arguments[0];
        this._p = t;
      } }, { key: "locatePointInRing", value: function() {
        if (arguments[0] instanceof T && tt(arguments[1], at)) {
          for (var t = arguments[0], e = arguments[1], n = new r(t), i = new T(), s = new T(), o = 1; o < e.size(); o++) if (e.getCoordinate(o, i), e.getCoordinate(o - 1, s), n.countSegment(i, s), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof T && arguments[1] instanceof Array) {
          for (var c = arguments[0], v = arguments[1], y = new r(c), k = 1; k < v.length; k++) {
            var S = v[k], C = v[k - 1];
            if (y.countSegment(S, C), y.isOnSegment()) return y.getLocation();
          }
          return y.getLocation();
        }
      } }]), r;
    }(), jn = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof T && tt(arguments[1], at)) {
          for (var t = arguments[0], e = arguments[1], n = new _e(), i = new T(), s = new T(), o = e.size(), c = 1; c < o; c++) if (e.getCoordinate(c - 1, i), e.getCoordinate(c, s), n.computeIntersection(t, i, s), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof Array) {
          for (var v = arguments[0], y = arguments[1], k = new _e(), S = 1; S < y.length; S++) {
            var C = y[S - 1], F = y[S];
            if (k.computeIntersection(v, C, F), k.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(t, e) {
        return $s.locatePointInRing(t, e);
      } }, { key: "isInRing", value: function(t, e) {
        return r.locateInRing(t, e) !== x.EXTERIOR;
      } }]), r;
    }(), Dt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setAllLocations", value: function(t) {
        for (var e = 0; e < this.location.length; e++) this.location[e] = t;
      } }, { key: "isNull", value: function() {
        for (var t = 0; t < this.location.length; t++) if (this.location[t] !== x.NONE) return !1;
        return !0;
      } }, { key: "setAllLocationsIfNull", value: function(t) {
        for (var e = 0; e < this.location.length; e++) this.location[e] === x.NONE && (this.location[e] = t);
      } }, { key: "isLine", value: function() {
        return this.location.length === 1;
      } }, { key: "merge", value: function(t) {
        if (t.location.length > this.location.length) {
          var e = new Array(3).fill(null);
          e[q.ON] = this.location[q.ON], e[q.LEFT] = x.NONE, e[q.RIGHT] = x.NONE, this.location = e;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === x.NONE && n < t.location.length && (this.location[n] = t.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var t = this.location[q.LEFT];
        this.location[q.LEFT] = this.location[q.RIGHT], this.location[q.RIGHT] = t;
      } }, { key: "toString", value: function() {
        var t = new Ye();
        return this.location.length > 1 && t.append(x.toLocationSymbol(this.location[q.LEFT])), t.append(x.toLocationSymbol(this.location[q.ON])), this.location.length > 1 && t.append(x.toLocationSymbol(this.location[q.RIGHT])), t.toString();
      } }, { key: "setLocations", value: function(t, e, n) {
        this.location[q.ON] = t, this.location[q.LEFT] = e, this.location[q.RIGHT] = n;
      } }, { key: "get", value: function(t) {
        return t < this.location.length ? this.location[t] : x.NONE;
      } }, { key: "isArea", value: function() {
        return this.location.length > 1;
      } }, { key: "isAnyNull", value: function() {
        for (var t = 0; t < this.location.length; t++) if (this.location[t] === x.NONE) return !0;
        return !1;
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.setLocation(q.ON, t);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          this.location[e] = n;
        }
      } }, { key: "init", value: function(t) {
        this.location = new Array(t).fill(null), this.setAllLocations(x.NONE);
      } }, { key: "isEqualOnSide", value: function(t, e) {
        return this.location[e] === t.location[e];
      } }, { key: "allPositionsEqual", value: function(t) {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] !== t) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this.location = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            this.init(t.length);
          } else if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.init(1), this.location[q.ON] = e;
          } else if (arguments[0] instanceof r) {
            var n = arguments[0];
            if (this.init(n.location.length), n !== null) for (var i = 0; i < this.location.length; i++) this.location[i] = n.location[i];
          }
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this.init(3), this.location[q.ON] = s, this.location[q.LEFT] = o, this.location[q.RIGHT] = c;
        }
      } }]), r;
    }(), Ft = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getGeometryCount", value: function() {
        var t = 0;
        return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
      } }, { key: "setAllLocations", value: function(t, e) {
        this.elt[t].setAllLocations(e);
      } }, { key: "isNull", value: function(t) {
        return this.elt[t].isNull();
      } }, { key: "setAllLocationsIfNull", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          this.elt[e].setAllLocationsIfNull(n);
        }
      } }, { key: "isLine", value: function(t) {
        return this.elt[t].isLine();
      } }, { key: "merge", value: function(t) {
        for (var e = 0; e < 2; e++) this.elt[e] === null && t.elt[e] !== null ? this.elt[e] = new Dt(t.elt[e]) : this.elt[e].merge(t.elt[e]);
      } }, { key: "flip", value: function() {
        this.elt[0].flip(), this.elt[1].flip();
      } }, { key: "getLocation", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return this.elt[t].get(q.ON);
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          return this.elt[e].get(n);
        }
      } }, { key: "toString", value: function() {
        var t = new Ye();
        return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
      } }, { key: "isArea", value: function() {
        if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
        if (arguments.length === 1) {
          var t = arguments[0];
          return this.elt[t].isArea();
        }
      } }, { key: "isAnyNull", value: function(t) {
        return this.elt[t].isAnyNull();
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          this.elt[t].setLocation(q.ON, e);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          this.elt[n].setLocation(i, s);
        }
      } }, { key: "isEqualOnSide", value: function(t, e) {
        return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
      } }, { key: "allPositionsEqual", value: function(t, e) {
        return this.elt[t].allPositionsEqual(e);
      } }, { key: "toLine", value: function(t) {
        this.elt[t].isArea() && (this.elt[t] = new Dt(this.elt[t].location[0]));
      } }], [{ key: "constructor_", value: function() {
        if (this.elt = new Array(2).fill(null), arguments.length === 1) {
          if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this.elt[0] = new Dt(t), this.elt[1] = new Dt(t);
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            this.elt[0] = new Dt(e.elt[0]), this.elt[1] = new Dt(e.elt[1]);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.elt[0] = new Dt(x.NONE), this.elt[1] = new Dt(x.NONE), this.elt[n].setLocation(i);
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this.elt[0] = new Dt(s, o, c), this.elt[1] = new Dt(s, o, c);
        } else if (arguments.length === 4) {
          var v = arguments[0], y = arguments[1], k = arguments[2], S = arguments[3];
          this.elt[0] = new Dt(x.NONE, x.NONE, x.NONE), this.elt[1] = new Dt(x.NONE, x.NONE, x.NONE), this.elt[v].setLocations(y, k, S);
        }
      } }, { key: "toLineLabel", value: function(t) {
        for (var e = new r(x.NONE), n = 0; n < 2; n++) e.setLocation(n, t.getLocation(n));
        return e;
      } }]), r;
    }(), mn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "computeRing", value: function() {
        if (this._ring !== null) return null;
        for (var t = new Array(this._pts.size()).fill(null), e = 0; e < this._pts.size(); e++) t[e] = this._pts.get(e);
        this._ring = this._geometryFactory.createLinearRing(t), this._isHole = K.isCCW(this._ring.getCoordinates());
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "computePoints", value: function(t) {
        this._startDe = t;
        var e = t, n = !0;
        do {
          if (e === null) throw new te("Found null DirectedEdge");
          if (e.getEdgeRing() === this) throw new te("Directed Edge visited twice during ring-building at " + e.getCoordinate());
          this._edges.add(e);
          var i = e.getLabel();
          it.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e);
        } while (e !== this._startDe);
      } }, { key: "getLinearRing", value: function() {
        return this._ring;
      } }, { key: "getCoordinate", value: function(t) {
        return this._pts.get(t);
      } }, { key: "computeMaxNodeDegree", value: function() {
        this._maxNodeDegree = 0;
        var t = this._startDe;
        do {
          var e = t.getNode().getEdges().getOutgoingDegree(this);
          e > this._maxNodeDegree && (this._maxNodeDegree = e), t = this.getNext(t);
        } while (t !== this._startDe);
        this._maxNodeDegree *= 2;
      } }, { key: "addPoints", value: function(t, e, n) {
        var i = t.getCoordinates();
        if (e) {
          var s = 1;
          n && (s = 0);
          for (var o = s; o < i.length; o++) this._pts.add(i[o]);
        } else {
          var c = i.length - 2;
          n && (c = i.length - 1);
          for (var v = c; v >= 0; v--) this._pts.add(i[v]);
        }
      } }, { key: "isHole", value: function() {
        return this._isHole;
      } }, { key: "setInResult", value: function() {
        var t = this._startDe;
        do
          t.getEdge().setInResult(!0), t = t.getNext();
        while (t !== this._startDe);
      } }, { key: "containsPoint", value: function(t) {
        var e = this.getLinearRing();
        if (!e.getEnvelopeInternal().contains(t) || !jn.isInRing(t, e.getCoordinates())) return !1;
        for (var n = this._holes.iterator(); n.hasNext(); )
          if (n.next().containsPoint(t)) return !1;
        return !0;
      } }, { key: "addHole", value: function(t) {
        this._holes.add(t);
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
          var t = arguments[0];
          this.mergeLabel(t, 0), this.mergeLabel(t, 1);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1], i = e.getLocation(n, q.RIGHT);
          if (i === x.NONE) return null;
          if (this._label.getLocation(n) === x.NONE) return this._label.setLocation(n, i), null;
        }
      } }, { key: "setShell", value: function(t) {
        this._shell = t, t !== null && t.addHole(this);
      } }, { key: "toPolygon", value: function(t) {
        for (var e = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) e[n] = this._holes.get(n).getLinearRing();
        return t.createPolygon(this.getLinearRing(), e);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new W(), this._pts = new W(), this._label = new Ft(x.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new W(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var t = arguments[0], e = arguments[1];
            this._geometryFactory = e, this.computePoints(t), this.computeRing();
          }
        }
      } }]), r;
    }(), js = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "setEdgeRing", value: function(n, i) {
        n.setMinEdgeRing(i);
      } }, { key: "getNext", value: function(n) {
        return n.getNextMin();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        mn.constructor_.call(this, n, i);
      } }]), e;
    }(mn), Ws = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "buildMinimalRings", value: function() {
        var n = new W(), i = this._startDe;
        do {
          if (i.getMinEdgeRing() === null) {
            var s = new js(i, this._geometryFactory);
            n.add(s);
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
        mn.constructor_.call(this, n, i);
      } }]), e;
    }(mn), Bi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setVisited", value: function(t) {
        this._isVisited = t;
      } }, { key: "setInResult", value: function(t) {
        this._isInResult = t;
      } }, { key: "isCovered", value: function() {
        return this._isCovered;
      } }, { key: "isCoveredSet", value: function() {
        return this._isCoveredSet;
      } }, { key: "setLabel", value: function(t) {
        this._label = t;
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "setCovered", value: function(t) {
        this._isCovered = t, this._isCoveredSet = !0;
      } }, { key: "updateIM", value: function(t) {
        it.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
      } }, { key: "isInResult", value: function() {
        return this._isInResult;
      } }, { key: "isVisited", value: function() {
        return this._isVisited;
      } }], [{ key: "constructor_", value: function() {
        if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
          if (arguments.length === 1) {
            var t = arguments[0];
            this._label = t;
          }
        }
      } }]), r;
    }(), dn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "isIncidentEdgeInResult", value: function() {
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
        var s = x.NONE;
        if (s = this._label.getLocation(i), !n.isNull(i)) {
          var o = n.getLocation(i);
          s !== x.BOUNDARY && (s = o);
        }
        return s;
      } }, { key: "setLabel", value: function() {
        if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return L(d(e.prototype), "setLabel", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        this._label === null ? this._label = new Ft(n, i) : this._label.setLocation(n, i);
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "mergeLabel", value: function() {
        if (arguments[0] instanceof e) {
          var n = arguments[0];
          this.mergeLabel(n._label);
        } else if (arguments[0] instanceof Ft) for (var i = arguments[0], s = 0; s < 2; s++) {
          var o = this.computeMergedLocation(i, s), c = this._label.getLocation(s);
          c === x.NONE && this._label.setLocation(s, o);
        }
      } }, { key: "add", value: function(n) {
        this._edges.insert(n), n.setNode(this);
      } }, { key: "setLabelBoundary", value: function(n) {
        if (this._label === null) return null;
        var i = x.NONE;
        this._label !== null && (i = this._label.getLocation(n));
        var s = null;
        switch (i) {
          case x.BOUNDARY:
            s = x.INTERIOR;
            break;
          case x.INTERIOR:
          default:
            s = x.BOUNDARY;
        }
        this._label.setLocation(n, s);
      } }], [{ key: "constructor_", value: function() {
        this._coord = null, this._edges = null;
        var n = arguments[0], i = arguments[1];
        this._coord = n, this._edges = i, this._label = new Ft(0, x.NONE);
      } }]), e;
    }(Bi), Qs = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.apply(this, arguments);
      }
      return e;
    }(Ai);
    function Xi(r) {
      return r == null ? 0 : r.color;
    }
    function ht(r) {
      return r == null ? null : r.parent;
    }
    function $t(r, t) {
      r !== null && (r.color = t);
    }
    function Wn(r) {
      return r == null ? null : r.left;
    }
    function Ui(r) {
      return r == null ? null : r.right;
    }
    var Ze = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), (n = t.call(this)).root_ = null, n.size_ = 0, n;
      }
      return h(e, [{ key: "get", value: function(n) {
        for (var i = this.root_; i !== null; ) {
          var s = n.compareTo(i.key);
          if (s < 0) i = i.left;
          else {
            if (!(s > 0)) return i.value;
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
        var s, o, c = this.root_;
        do
          if (s = c, (o = n.compareTo(c.key)) < 0) c = c.left;
          else {
            if (!(o > 0)) {
              var v = c.value;
              return c.value = i, v;
            }
            c = c.right;
          }
        while (c !== null);
        var y = { key: n, left: null, right: null, value: i, parent: s, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } };
        return o < 0 ? s.left = y : s.right = y, this.fixAfterInsertion(y), this.size_++, null;
      } }, { key: "fixAfterInsertion", value: function(n) {
        var i;
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) ht(n) === Wn(ht(ht(n))) ? Xi(i = Ui(ht(ht(n)))) === 1 ? ($t(ht(n), 0), $t(i, 0), $t(ht(ht(n)), 1), n = ht(ht(n))) : (n === Ui(ht(n)) && (n = ht(n), this.rotateLeft(n)), $t(ht(n), 0), $t(ht(ht(n)), 1), this.rotateRight(ht(ht(n)))) : Xi(i = Wn(ht(ht(n)))) === 1 ? ($t(ht(n), 0), $t(i, 0), $t(ht(ht(n)), 1), n = ht(ht(n))) : (n === Wn(ht(n)) && (n = ht(n), this.rotateRight(n)), $t(ht(n), 0), $t(ht(ht(n)), 1), this.rotateLeft(ht(ht(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new W(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i.value); (i = e.successor(i)) !== null; ) n.add(i.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Fn(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i); (i = e.successor(i)) !== null; ) n.add(i);
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
          var s = n.compareTo(i.key);
          if (s < 0) i = i.left;
          else {
            if (!(s > 0)) return !0;
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
        for (var s = n; i !== null && s === i.right; ) s = i, i = i.parent;
        return i;
      } }]), e;
    }(Qs), Vi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "find", value: function(t) {
        return this.nodeMap.get(t);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof T) {
          var t = arguments[0], e = this.nodeMap.get(t);
          return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
        }
        if (arguments[0] instanceof dn) {
          var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
          return i === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
        }
      } }, { key: "print", value: function(t) {
        for (var e = this.iterator(); e.hasNext(); )
          e.next().print(t);
      } }, { key: "iterator", value: function() {
        return this.nodeMap.values().iterator();
      } }, { key: "values", value: function() {
        return this.nodeMap.values();
      } }, { key: "getBoundaryNodes", value: function(t) {
        for (var e = new W(), n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().getLocation(t) === x.BOUNDARY && e.add(i);
        }
        return e;
      } }, { key: "add", value: function(t) {
        var e = t.getCoordinate();
        this.addNode(e).add(t);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new Ze(), this.nodeFact = null;
        var t = arguments[0];
        this.nodeFact = t;
      } }]), r;
    }(), Lt = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "isNorthern", value: function(t) {
        return t === r.NE || t === r.NW;
      } }, { key: "isOpposite", value: function(t, e) {
        return t !== e && (t - e + 4) % 4 === 2;
      } }, { key: "commonHalfPlane", value: function(t, e) {
        if (t === e) return t;
        if ((t - e + 4) % 4 === 2) return -1;
        var n = t < e ? t : e;
        return n === 0 && (t > e ? t : e) === 3 ? 3 : n;
      } }, { key: "isInHalfPlane", value: function(t, e) {
        return e === r.SE ? t === r.SE || t === r.SW : t === e || t === e + 1;
      } }, { key: "quadrant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var t = arguments[0], e = arguments[1];
          if (t === 0 && e === 0) throw new D("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
          return t >= 0 ? e >= 0 ? r.NE : r.SE : e >= 0 ? r.NW : r.SW;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof T) {
          var n = arguments[0], i = arguments[1];
          if (i.x === n.x && i.y === n.y) throw new D("Cannot compute the quadrant for two identical points " + n);
          return i.x >= n.x ? i.y >= n.y ? r.NE : r.SE : i.y >= n.y ? r.NW : r.SW;
        }
      } }]), r;
    }();
    Lt.NE = 0, Lt.NW = 1, Lt.SW = 2, Lt.SE = 3;
    var Hi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareDirection", value: function(t) {
        return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : K.index(t._p0, t._p1, this._p1);
      } }, { key: "getDy", value: function() {
        return this._dy;
      } }, { key: "getCoordinate", value: function() {
        return this._p0;
      } }, { key: "setNode", value: function(t) {
        this._node = t;
      } }, { key: "print", value: function(t) {
        var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), s = n.substring(i + 1);
        t.print("  " + s + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this.compareDirection(e);
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
        var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf(".");
        return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
      } }, { key: "computeLabel", value: function(t) {
      } }, { key: "init", value: function(t, e) {
        this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = Lt.quadrant(this._dx, this._dy), it.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
          var t = arguments[0];
          this._edge = t;
        } else if (arguments.length === 3) {
          var e = arguments[0], n = arguments[1], i = arguments[2];
          r.constructor_.call(this, e, n, i, null);
        } else if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          r.constructor_.call(this, s), this.init(o, c), this._label = v;
        }
      } }]), r;
    }(), Qn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getNextMin", value: function() {
        return this._nextMin;
      } }, { key: "getDepth", value: function(n) {
        return this._depth[n];
      } }, { key: "setVisited", value: function(n) {
        this._isVisited = n;
      } }, { key: "computeDirectedLabel", value: function() {
        this._label = new Ft(this._edge.getLabel()), this._isForward || this._label.flip();
      } }, { key: "getNext", value: function() {
        return this._next;
      } }, { key: "setDepth", value: function(n, i) {
        if (this._depth[n] !== -999 && this._depth[n] !== i) throw new te("assigned depths do not match", this.getCoordinate());
        this._depth[n] = i;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, i = 0; i < 2; i++) this._label.isArea(i) && this._label.getLocation(i, q.LEFT) === x.INTERIOR && this._label.getLocation(i, q.RIGHT) === x.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        L(d(e.prototype), "print", this).call(this, n), n.print(" " + this._depth[q.LEFT] + "/" + this._depth[q.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
      } }, { key: "setMinEdgeRing", value: function(n) {
        this._minEdgeRing = n;
      } }, { key: "isLineEdge", value: function() {
        var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, x.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, x.EXTERIOR);
        return n && i && s;
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
        var s = this.getEdge().getDepthDelta();
        this._isForward || (s = -s);
        var o = 1;
        n === q.LEFT && (o = -1);
        var c = q.opposite(n), v = i + s * o;
        this.setDepth(n, i), this.setDepth(c, v);
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
        if (Hi.constructor_.call(this, n), this._isForward = i, i) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var s = n.getNumPoints() - 1;
          this.init(n.getCoordinate(s), n.getCoordinate(s - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, i) {
        return n === x.EXTERIOR && i === x.INTERIOR ? 1 : n === x.INTERIOR && i === x.EXTERIOR ? -1 : 0;
      } }]), e;
    }(Hi), Zi = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "createNode", value: function(t) {
        return new dn(t, null);
      } }]), r;
    }(), $i = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "printEdges", value: function(t) {
        t.println("Edges:");
        for (var e = 0; e < this._edges.size(); e++) {
          t.println("edge " + e + ":");
          var n = this._edges.get(e);
          n.print(t), n.eiList.print(t);
        }
      } }, { key: "find", value: function(t) {
        return this._nodes.find(t);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof dn) {
          var t = arguments[0];
          return this._nodes.addNode(t);
        }
        if (arguments[0] instanceof T) {
          var e = arguments[0];
          return this._nodes.addNode(e);
        }
      } }, { key: "getNodeIterator", value: function() {
        return this._nodes.iterator();
      } }, { key: "linkResultDirectedEdges", value: function() {
        for (var t = this._nodes.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }, { key: "debugPrintln", value: function(t) {
        At.out.println(t);
      } }, { key: "isBoundaryNode", value: function(t, e) {
        var n = this._nodes.find(e);
        if (n === null) return !1;
        var i = n.getLabel();
        return i !== null && i.getLocation(t) === x.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var t = this._nodes.iterator(); t.hasNext(); )
          t.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(t, e, n, i) {
        return !!t.equals(n) && K.index(t, e, i) === K.COLLINEAR && Lt.quadrant(t, e) === Lt.quadrant(n, i);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(t) {
        At.out.print(t);
      } }, { key: "getEdgeIterator", value: function() {
        return this._edges.iterator();
      } }, { key: "findEdgeInSameDirection", value: function(t, e) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), s = i.getCoordinates();
          if (this.matchInSameDirection(t, e, s[0], s[1]) || this.matchInSameDirection(t, e, s[s.length - 1], s[s.length - 2])) return i;
        }
        return null;
      } }, { key: "insertEdge", value: function(t) {
        this._edges.add(t);
      } }, { key: "findEdgeEnd", value: function(t) {
        for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
          var n = e.next();
          if (n.getEdge() === t) return n;
        }
        return null;
      } }, { key: "addEdges", value: function(t) {
        for (var e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this._edges.add(n);
          var i = new Qn(n, !0), s = new Qn(n, !1);
          i.setSym(s), s.setSym(i), this.add(i), this.add(s);
        }
      } }, { key: "add", value: function(t) {
        this._nodes.add(t), this._edgeEndList.add(t);
      } }, { key: "getNodes", value: function() {
        return this._nodes.values();
      } }, { key: "findEdge", value: function(t, e) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), s = i.getCoordinates();
          if (t.equals(s[0]) && e.equals(s[1])) return i;
        }
        return null;
      } }], [{ key: "constructor_", value: function() {
        if (this._edges = new W(), this._nodes = null, this._edgeEndList = new W(), arguments.length === 0) this._nodes = new Vi(new Zi());
        else if (arguments.length === 1) {
          var t = arguments[0];
          this._nodes = new Vi(t);
        }
      } }, { key: "linkResultDirectedEdges", value: function(t) {
        for (var e = t.iterator(); e.hasNext(); )
          e.next().getEdges().linkResultDirectedEdges();
      } }]), r;
    }(), Ks = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "sortShellsAndHoles", value: function(t, e, n) {
        for (var i = t.iterator(); i.hasNext(); ) {
          var s = i.next();
          s.isHole() ? n.add(s) : e.add(s);
        }
      } }, { key: "computePolygons", value: function(t) {
        for (var e = new W(), n = t.iterator(); n.hasNext(); ) {
          var i = n.next().toPolygon(this._geometryFactory);
          e.add(i);
        }
        return e;
      } }, { key: "placeFreeHoles", value: function(t, e) {
        for (var n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.getShell() === null) {
            var s = r.findEdgeRingContaining(i, t);
            if (s === null) throw new te("unable to assign hole to a shell", i.getCoordinate(0));
            i.setShell(s);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(t, e, n) {
        for (var i = new W(), s = t.iterator(); s.hasNext(); ) {
          var o = s.next();
          if (o.getMaxNodeDegree() > 2) {
            o.linkDirectedEdgesForMinimalEdgeRings();
            var c = o.buildMinimalRings(), v = this.findShell(c);
            v !== null ? (this.placePolygonHoles(v, c), e.add(v)) : n.addAll(c);
          } else i.add(o);
        }
        return i;
      } }, { key: "buildMaximalEdgeRings", value: function(t) {
        for (var e = new W(), n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isInResult() && i.getLabel().isArea() && i.getEdgeRing() === null) {
            var s = new Ws(i, this._geometryFactory);
            e.add(s), s.setInResult();
          }
        }
        return e;
      } }, { key: "placePolygonHoles", value: function(t, e) {
        for (var n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.isHole() && i.setShell(t);
        }
      } }, { key: "getPolygons", value: function() {
        return this.computePolygons(this._shellList);
      } }, { key: "findShell", value: function(t) {
        for (var e = 0, n = null, i = t.iterator(); i.hasNext(); ) {
          var s = i.next();
          s.isHole() || (n = s, e++);
        }
        return it.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.add(t.getEdgeEnds(), t.getNodes());
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          $i.linkResultDirectedEdges(n);
          var i = this.buildMaximalEdgeRings(e), s = new W(), o = this.buildMinimalEdgeRings(i, this._shellList, s);
          this.sortShellsAndHoles(o, this._shellList, s), this.placeFreeHoles(this._shellList, s);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new W();
        var t = arguments[0];
        this._geometryFactory = t;
      } }, { key: "findEdgeRingContaining", value: function(t, e) {
        for (var n = t.getLinearRing(), i = n.getEnvelopeInternal(), s = n.getCoordinateN(0), o = null, c = null, v = e.iterator(); v.hasNext(); ) {
          var y = v.next(), k = y.getLinearRing(), S = k.getEnvelopeInternal();
          if (!S.equals(i) && S.contains(i)) {
            s = _t.ptNotInList(n.getCoordinates(), k.getCoordinates());
            var C = !1;
            jn.isInRing(s, k.getCoordinates()) && (C = !0), C && (o === null || c.contains(S)) && (c = (o = y).getLinearRing().getEnvelopeInternal());
          }
        }
        return o;
      } }]), r;
    }(), ji = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "getBounds", value: function() {
      } }]), r;
    }(), ne = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [ji, U];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var t = arguments[0], e = arguments[1];
        this._bounds = t, this._item = e;
      } }]), r;
    }(), pn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "poll", value: function() {
        if (this.isEmpty()) return null;
        var t = this._items.get(1);
        return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
      } }, { key: "size", value: function() {
        return this._size;
      } }, { key: "reorder", value: function(t) {
        for (var e = null, n = this._items.get(t); 2 * t <= this._size && ((e = 2 * t) !== this._size && this._items.get(e + 1).compareTo(this._items.get(e)) < 0 && e++, this._items.get(e).compareTo(n) < 0); t = e) this._items.set(t, this._items.get(e));
        this._items.set(t, n);
      } }, { key: "clear", value: function() {
        this._size = 0, this._items.clear();
      } }, { key: "peek", value: function() {
        return this.isEmpty() ? null : this._items.get(1);
      } }, { key: "isEmpty", value: function() {
        return this._size === 0;
      } }, { key: "add", value: function(t) {
        this._items.add(null), this._size += 1;
        var e = this._size;
        for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(e / 2))) < 0; e /= 2) this._items.set(e, this._items.get(Math.trunc(e / 2)));
        this._items.set(e, t);
      } }], [{ key: "constructor_", value: function() {
        this._size = null, this._items = null, this._size = 0, this._items = new W(), this._items.add(null);
      } }]), r;
    }(), Js = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "insert", value: function(t, e) {
      } }, { key: "remove", value: function(t, e) {
      } }, { key: "query", value: function() {
      } }]), r;
    }(), Gt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getLevel", value: function() {
        return this._level;
      } }, { key: "size", value: function() {
        return this._childBoundables.size();
      } }, { key: "getChildBoundables", value: function() {
        return this._childBoundables;
      } }, { key: "addChildBoundable", value: function(t) {
        it.isTrue(this._bounds === null), this._childBoundables.add(t);
      } }, { key: "isEmpty", value: function() {
        return this._childBoundables.isEmpty();
      } }, { key: "getBounds", value: function() {
        return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [ji, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new W(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var t = arguments[0];
            this._level = t;
          }
        }
      } }]), r;
    }(), Le = { reverseOrder: function() {
      return { compare: function(r, t) {
        return t.compareTo(r);
      } };
    }, min: function(r) {
      return Le.sort(r), r.get(0);
    }, sort: function(r, t) {
      var e = r.toArray();
      t ? me.sort(e, t) : me.sort(e);
      for (var n = r.iterator(), i = 0, s = e.length; i < s; i++) n.next(), n.set(e[i]);
    }, singletonList: function(r) {
      var t = new W();
      return t.add(r), t;
    } }, ta = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "maxDistance", value: function(t, e, n, i, s, o, c, v) {
        var y = r.distance(t, e, s, o);
        return y = Math.max(y, r.distance(t, e, c, v)), y = Math.max(y, r.distance(n, i, s, o)), y = Math.max(y, r.distance(n, i, c, v));
      } }, { key: "distance", value: function(t, e, n, i) {
        var s = n - t, o = i - e;
        return Math.sqrt(s * s + o * o);
      } }, { key: "maximumDistance", value: function(t, e) {
        var n = Math.min(t.getMinX(), e.getMinX()), i = Math.min(t.getMinY(), e.getMinY()), s = Math.max(t.getMaxX(), e.getMaxX()), o = Math.max(t.getMaxY(), e.getMaxY());
        return r.distance(n, i, s, o);
      } }, { key: "minMaxDistance", value: function(t, e) {
        var n = t.getMinX(), i = t.getMinY(), s = t.getMaxX(), o = t.getMaxY(), c = e.getMinX(), v = e.getMinY(), y = e.getMaxX(), k = e.getMaxY(), S = r.maxDistance(n, i, n, o, c, v, c, k);
        return S = Math.min(S, r.maxDistance(n, i, n, o, c, v, y, v)), S = Math.min(S, r.maxDistance(n, i, n, o, y, k, c, k)), S = Math.min(S, r.maxDistance(n, i, n, o, y, k, y, v)), S = Math.min(S, r.maxDistance(n, i, s, i, c, v, c, k)), S = Math.min(S, r.maxDistance(n, i, s, i, c, v, y, v)), S = Math.min(S, r.maxDistance(n, i, s, i, y, k, c, k)), S = Math.min(S, r.maxDistance(n, i, s, i, y, k, y, v)), S = Math.min(S, r.maxDistance(s, o, n, o, c, v, c, k)), S = Math.min(S, r.maxDistance(s, o, n, o, c, v, y, v)), S = Math.min(S, r.maxDistance(s, o, n, o, y, k, c, k)), S = Math.min(S, r.maxDistance(s, o, n, o, y, k, y, v)), S = Math.min(S, r.maxDistance(s, o, s, i, c, v, c, k)), S = Math.min(S, r.maxDistance(s, o, s, i, c, v, y, v)), S = Math.min(S, r.maxDistance(s, o, s, i, y, k, c, k)), S = Math.min(S, r.maxDistance(s, o, s, i, y, k, y, v));
      } }]), r;
    }(), Te = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "maximumDistance", value: function() {
        return ta.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
      } }, { key: "expandToQueue", value: function(t, e) {
        var n = r.isComposite(this._boundable1), i = r.isComposite(this._boundable2);
        if (n && i) return r.area(this._boundable1) > r.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, t, e), null) : (this.expand(this._boundable2, this._boundable1, !0, t, e), null);
        if (n) return this.expand(this._boundable1, this._boundable2, !1, t, e), null;
        if (i) return this.expand(this._boundable2, this._boundable1, !0, t, e), null;
        throw new D("neither boundable is composite");
      } }, { key: "isLeaves", value: function() {
        return !(r.isComposite(this._boundable1) || r.isComposite(this._boundable2));
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
      } }, { key: "expand", value: function(t, e, n, i, s) {
        for (var o = t.getChildBoundables().iterator(); o.hasNext(); ) {
          var c = o.next(), v = null;
          (v = n ? new r(e, c, this._itemDistance) : new r(c, e, this._itemDistance)).getDistance() < s && i.add(v);
        }
      } }, { key: "getBoundable", value: function(t) {
        return t === 0 ? this._boundable1 : this._boundable2;
      } }, { key: "getDistance", value: function() {
        return this._distance;
      } }, { key: "distance", value: function() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var t = arguments[0], e = arguments[1], n = arguments[2];
        this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
      } }, { key: "area", value: function(t) {
        return t.getBounds().getArea();
      } }, { key: "isComposite", value: function(t) {
        return t instanceof Gt;
      } }]), r;
    }(), Wi = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "visitItem", value: function(t) {
      } }]), r;
    }(), Ce = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "queryInternal", value: function() {
        if (tt(arguments[2], Wi) && arguments[0] instanceof Object && arguments[1] instanceof Gt) for (var t = arguments[0], e = arguments[1], n = arguments[2], i = e.getChildBoundables(), s = 0; s < i.size(); s++) {
          var o = i.get(s);
          this.getIntersectsOp().intersects(o.getBounds(), t) && (o instanceof Gt ? this.queryInternal(t, o, n) : o instanceof ne ? n.visitItem(o.getItem()) : it.shouldNeverReachHere());
        }
        else if (tt(arguments[2], ve) && arguments[0] instanceof Object && arguments[1] instanceof Gt) for (var c = arguments[0], v = arguments[1], y = arguments[2], k = v.getChildBoundables(), S = 0; S < k.size(); S++) {
          var C = k.get(S);
          this.getIntersectsOp().intersects(C.getBounds(), c) && (C instanceof Gt ? this.queryInternal(c, C, y) : C instanceof ne ? y.add(C.getItem()) : it.shouldNeverReachHere());
        }
      } }, { key: "getNodeCapacity", value: function() {
        return this._nodeCapacity;
      } }, { key: "lastNode", value: function(t) {
        return t.get(t.size() - 1);
      } }, { key: "size", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
        if (arguments.length === 1) {
          for (var t = arguments[0], e = 0, n = t.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            i instanceof Gt ? e += this.size(i) : i instanceof ne && (e += 1);
          }
          return e;
        }
      } }, { key: "removeItem", value: function(t, e) {
        for (var n = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
          var s = i.next();
          s instanceof ne && s.getItem() === e && (n = s);
        }
        return n !== null && (t.getChildBoundables().remove(n), !0);
      } }, { key: "itemsTree", value: function() {
        if (arguments.length === 0) {
          this.build();
          var t = this.itemsTree(this._root);
          return t === null ? new W() : t;
        }
        if (arguments.length === 1) {
          for (var e = arguments[0], n = new W(), i = e.getChildBoundables().iterator(); i.hasNext(); ) {
            var s = i.next();
            if (s instanceof Gt) {
              var o = this.itemsTree(s);
              o !== null && n.add(o);
            } else s instanceof ne ? n.add(s.getItem()) : it.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(t, e) {
        it.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new ne(t, e));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0], e = new W();
          return this.boundablesAtLevel(t, this._root, e), e;
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          if (it.isTrue(n > -2), i.getLevel() === n) return s.add(i), null;
          for (var o = i.getChildBoundables().iterator(); o.hasNext(); ) {
            var c = o.next();
            c instanceof Gt ? this.boundablesAtLevel(n, c, s) : (it.isTrue(c instanceof ne), n === -1 && s.add(c));
          }
          return null;
        }
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.build();
          var e = new W();
          return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.queryInternal(t, this._root, e), e;
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
          var t = arguments[0], e = arguments[1];
          return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, e);
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2], o = this.removeItem(i, s);
          if (o) return !0;
          for (var c = null, v = i.getChildBoundables().iterator(); v.hasNext(); ) {
            var y = v.next();
            if (this.getIntersectsOp().intersects(y.getBounds(), n) && y instanceof Gt && (o = this.remove(n, y, s))) {
              c = y;
              break;
            }
          }
          return c !== null && c.getChildBoundables().isEmpty() && i.getChildBoundables().remove(c), o;
        }
      } }, { key: "createHigherLevels", value: function(t, e) {
        it.isTrue(!t.isEmpty());
        var n = this.createParentBoundables(t, e + 1);
        return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
      } }, { key: "depth", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (arguments.length === 1) {
          for (var t = arguments[0], e = 0, n = t.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i instanceof Gt) {
              var s = this.depth(i);
              s > e && (e = s);
            }
          }
          return e + 1;
        }
      } }, { key: "createParentBoundables", value: function(t, e) {
        it.isTrue(!t.isEmpty());
        var n = new W();
        n.add(this.createNode(e));
        var i = new W(t);
        Le.sort(i, this.getComparator());
        for (var s = i.iterator(); s.hasNext(); ) {
          var o = s.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(o);
        }
        return n;
      } }, { key: "isEmpty", value: function() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._root = null, this._built = !1, this._itemBoundables = new W(), this._nodeCapacity = null, arguments.length === 0) r.constructor_.call(this, r.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var t = arguments[0];
          it.isTrue(t > 1, "Node capacity must be greater than 1"), this._nodeCapacity = t;
        }
      } }, { key: "compareDoubles", value: function(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      } }]), r;
    }();
    Ce.IntersectsOp = function() {
    }, Ce.DEFAULT_NODE_CAPACITY = 10;
    var ea = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "distance", value: function(t, e) {
      } }]), r;
    }(), jt = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, i) {
        it.isTrue(n.length > 0);
        for (var s = new W(), o = 0; o < n.length; o++) s.addAll(this.createParentBoundablesFromVerticalSlice(n[o], i));
        return s;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.nearestNeighbourK(n, H.POSITIVE_INFINITY, i);
        }
        if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = o, y = new pn();
          y.add(s);
          for (var k = new pn(); !y.isEmpty() && v >= 0; ) {
            var S = y.poll(), C = S.getDistance();
            if (C >= v) break;
            if (S.isLeaves()) if (k.size() < c) k.add(S);
            else {
              var F = k.peek();
              F.getDistance() > C && (k.poll(), k.add(S));
              var A = k.peek();
              v = A.getDistance();
            }
            else S.expandToQueue(y, v);
          }
          return e.getItems(k);
        }
      } }, { key: "createNode", value: function(n) {
        return new Qi(n);
      } }, { key: "size", value: function() {
        return arguments.length === 0 ? L(d(e.prototype), "size", this).call(this) : L(d(e.prototype), "size", this).apply(this, arguments);
      } }, { key: "insert", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof vt)) return L(d(e.prototype), "insert", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        if (n.isNull()) return null;
        L(d(e.prototype), "insert", this).call(this, n, i);
      } }, { key: "getIntersectsOp", value: function() {
        return e.intersectsOp;
      } }, { key: "verticalSlices", value: function(n, i) {
        for (var s = Math.trunc(Math.ceil(n.size() / i)), o = new Array(i).fill(null), c = n.iterator(), v = 0; v < i; v++) {
          o[v] = new W();
          for (var y = 0; c.hasNext() && y < s; ) {
            var k = c.next();
            o[v].add(k), y++;
          }
        }
        return o;
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return L(d(e.prototype), "query", this).call(this, n);
        }
        if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          L(d(e.prototype), "query", this).call(this, i, s);
        }
      } }, { key: "getComparator", value: function() {
        return e.yComparator;
      } }, { key: "createParentBoundablesFromVerticalSlice", value: function(n, i) {
        return L(d(e.prototype), "createParentBoundables", this).call(this, n, i);
      } }, { key: "remove", value: function() {
        if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof vt) {
          var n = arguments[0], i = arguments[1];
          return L(d(e.prototype), "remove", this).call(this, n, i);
        }
        return L(d(e.prototype), "remove", this).apply(this, arguments);
      } }, { key: "depth", value: function() {
        return arguments.length === 0 ? L(d(e.prototype), "depth", this).call(this) : L(d(e.prototype), "depth", this).apply(this, arguments);
      } }, { key: "createParentBoundables", value: function(n, i) {
        it.isTrue(!n.isEmpty());
        var s = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), o = new W(n);
        Le.sort(o, e.xComparator);
        var c = this.verticalSlices(o, Math.trunc(Math.ceil(Math.sqrt(s))));
        return this.createParentBoundablesFromVerticalSlices(c, i);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (tt(arguments[0], ea)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var i = new Te(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(i);
          }
          if (arguments[0] instanceof Te) {
            var s = arguments[0], o = H.POSITIVE_INFINITY, c = null, v = new pn();
            for (v.add(s); !v.isEmpty() && o > 0; ) {
              var y = v.poll(), k = y.getDistance();
              if (k >= o) break;
              y.isLeaves() ? (o = k, c = y) : y.expandToQueue(v, o);
            }
            return c === null ? null : [c.getBoundable(0).getItem(), c.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var S = arguments[0], C = arguments[1];
            if (this.isEmpty() || S.isEmpty()) return null;
            var F = new Te(this.getRoot(), S.getRoot(), C);
            return this.nearestNeighbour(F);
          }
          if (arguments.length === 3) {
            var A = arguments[0], Z = arguments[1], j = arguments[2], J = new ne(A, Z), ct = new Te(this.getRoot(), J, j);
            return this.nearestNeighbour(ct)[0];
          }
          if (arguments.length === 4) {
            var mt = arguments[0], Nt = arguments[1], Pt = arguments[2], Ut = arguments[3], ie = new ne(mt, Nt), ke = new Te(this.getRoot(), ie, Pt);
            return this.nearestNeighbourK(ke, Ut);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], s = H.POSITIVE_INFINITY, o = new pn();
          for (o.add(n); !o.isEmpty(); ) {
            var c = o.poll(), v = c.getDistance();
            if (v > i) return !1;
            if (c.maximumDistance() <= i) return !0;
            if (c.isLeaves()) {
              if ((s = v) <= i) return !0;
            } else c.expandToQueue(o, s);
          }
          return !1;
        }
        if (arguments.length === 3) {
          var y = arguments[0], k = arguments[1], S = arguments[2], C = new Te(this.getRoot(), y.getRoot(), k);
          return this.isWithinDistance(C, S);
        }
      } }, { key: "interfaces_", get: function() {
        return [Js, U];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) e.constructor_.call(this, e.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Ce.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return e.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, i) {
        return (n + i) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var i = new Array(n.size()).fill(null), s = 0; !n.isEmpty(); ) {
          var o = n.poll();
          i[s] = o.getBoundable(0).getItem(), s++;
        }
        return i;
      } }, { key: "centreY", value: function(n) {
        return e.avg(n.getMinY(), n.getMaxY());
      } }]), e;
    }(Ce), Qi = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "computeBounds", value: function() {
        for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
          var s = i.next();
          n === null ? n = new vt(s.getBounds()) : n.expandToInclude(s.getBounds());
        }
        return n;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0];
        Gt.constructor_.call(this, n);
      } }]), e;
    }(Gt);
    jt.STRtreeNode = Qi, jt.xComparator = new (function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [St];
      } }, { key: "compare", value: function(t, e) {
        return Ce.compareDoubles(jt.centreX(t.getBounds()), jt.centreX(e.getBounds()));
      } }]), r;
    }())(), jt.yComparator = new (function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [St];
      } }, { key: "compare", value: function(t, e) {
        return Ce.compareDoubles(jt.centreY(t.getBounds()), jt.centreY(e.getBounds()));
      } }]), r;
    }())(), jt.intersectsOp = new (function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(t, e) {
        return t.intersects(e);
      } }]), r;
    }())(), jt.DEFAULT_NODE_CAPACITY = 10;
    var na = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "relativeSign", value: function(t, e) {
        return t < e ? -1 : t > e ? 1 : 0;
      } }, { key: "compare", value: function(t, e, n) {
        if (e.equals2D(n)) return 0;
        var i = r.relativeSign(e.x, n.x), s = r.relativeSign(e.y, n.y);
        switch (t) {
          case 0:
            return r.compareValue(i, s);
          case 1:
            return r.compareValue(s, i);
          case 2:
            return r.compareValue(s, -i);
          case 3:
            return r.compareValue(-i, s);
          case 4:
            return r.compareValue(-i, -s);
          case 5:
            return r.compareValue(-s, -i);
          case 6:
            return r.compareValue(-s, i);
          case 7:
            return r.compareValue(i, -s);
        }
        return it.shouldNeverReachHere("invalid octant value"), 0;
      } }, { key: "compareValue", value: function(t, e) {
        return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
      } }]), r;
    }(), ia = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : this._isInterior ? e._isInterior ? na.compare(this._segmentOctant, this.coord, e.coord) : 1 : -1;
      } }, { key: "isEndPoint", value: function(t) {
        return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
      } }, { key: "toString", value: function() {
        return this.segmentIndex + ":" + this.coord.toString();
      } }, { key: "isInterior", value: function() {
        return this._isInterior;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
        this._segString = t, this.coord = new T(e), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
      } }]), r;
    }(), ra = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), sa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getSplitCoordinates", value: function() {
        var t = new Ue();
        this.addEndpoints();
        for (var e = this.iterator(), n = e.next(); e.hasNext(); ) {
          var i = e.next();
          this.addEdgeCoordinates(n, i, t), n = i;
        }
        return t.toCoordinateArray();
      } }, { key: "addCollapsedNodes", value: function() {
        var t = new W();
        this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);
        for (var e = t.iterator(); e.hasNext(); ) {
          var n = e.next().intValue();
          this.add(this._edge.getCoordinate(n), n);
        }
      } }, { key: "createSplitEdgePts", value: function(t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2;
        if (n === 2) return [new T(t.coord), new T(e.coord)];
        var i = this._edge.getCoordinate(e.segmentIndex), s = e.isInterior() || !e.coord.equals2D(i);
        s || n--;
        var o = new Array(n).fill(null), c = 0;
        o[c++] = new T(t.coord);
        for (var v = t.segmentIndex + 1; v <= e.segmentIndex; v++) o[c++] = this._edge.getCoordinate(v);
        return s && (o[c] = new T(e.coord)), o;
      } }, { key: "print", value: function(t) {
        t.println("Intersections:");
        for (var e = this.iterator(); e.hasNext(); )
          e.next().print(t);
      } }, { key: "findCollapsesFromExistingVertices", value: function(t) {
        for (var e = 0; e < this._edge.size() - 2; e++) {
          var n = this._edge.getCoordinate(e);
          this._edge.getCoordinate(e + 1);
          var i = this._edge.getCoordinate(e + 2);
          n.equals2D(i) && t.add(on.valueOf(e + 1));
        }
      } }, { key: "addEdgeCoordinates", value: function(t, e, n) {
        var i = this.createSplitEdgePts(t, e);
        n.add(i, !1);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(t) {
        this.addEndpoints(), this.addCollapsedNodes();
        for (var e = this.iterator(), n = e.next(); e.hasNext(); ) {
          var i = e.next(), s = this.createSplitEdge(n, i);
          t.add(s), n = i;
        }
      } }, { key: "findCollapseIndex", value: function(t, e, n) {
        if (!t.coord.equals2D(e.coord)) return !1;
        var i = e.segmentIndex - t.segmentIndex;
        return e.isInterior() || i--, i === 1 && (n[0] = t.segmentIndex + 1, !0);
      } }, { key: "findCollapsesFromInsertedNodes", value: function(t) {
        for (var e = new Array(1).fill(null), n = this.iterator(), i = n.next(); n.hasNext(); ) {
          var s = n.next();
          this.findCollapseIndex(i, s, e) && t.add(on.valueOf(e[0])), i = s;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var t = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
      } }, { key: "createSplitEdge", value: function(t, e) {
        var n = this.createSplitEdgePts(t, e);
        return new xe(n, this._edge.getData());
      } }, { key: "add", value: function(t, e) {
        var n = new ia(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(n);
        return i !== null ? (it.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(t) {
        var e = this._edge.getCoordinates(), n = t.get(0).getCoordinate(0);
        if (!n.equals2D(e[0])) throw new Et("bad split edge start point at " + n);
        var i = t.get(t.size() - 1).getCoordinates(), s = i[i.length - 1];
        if (!s.equals2D(e[e.length - 1])) throw new Et("bad split edge end point at " + s);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Ze(), this._edge = null;
        var t = arguments[0];
        this._edge = t;
      } }]), r;
    }(), aa = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "octant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var t = arguments[0], e = arguments[1];
          if (t === 0 && e === 0) throw new D("Cannot compute the octant for point ( " + t + ", " + e + " )");
          var n = Math.abs(t), i = Math.abs(e);
          return t >= 0 ? e >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : e >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
        }
        if (arguments[0] instanceof T && arguments[1] instanceof T) {
          var s = arguments[0], o = arguments[1], c = o.x - s.x, v = o.y - s.y;
          if (c === 0 && v === 0) throw new D("Cannot compute the octant for two identical points " + s);
          return r.octant(c, v);
        }
      } }]), r;
    }(), ua = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "getCoordinate", value: function(t) {
      } }, { key: "isClosed", value: function() {
      } }, { key: "setData", value: function(t) {
      } }, { key: "getData", value: function() {
      } }]), r;
    }(), oa = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "addIntersection", value: function(t, e) {
      } }, { key: "interfaces_", get: function() {
        return [ua];
      } }]), r;
    }(), xe = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this._pts;
      } }, { key: "size", value: function() {
        return this._pts.length;
      } }, { key: "getCoordinate", value: function(t) {
        return this._pts[t];
      } }, { key: "isClosed", value: function() {
        return this._pts[0].equals(this._pts[this._pts.length - 1]);
      } }, { key: "getSegmentOctant", value: function(t) {
        return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
      } }, { key: "setData", value: function(t) {
        this._data = t;
      } }, { key: "safeOctant", value: function(t, e) {
        return t.equals2D(e) ? 0 : aa.octant(t, e);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          this.addIntersectionNode(t, e);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1], s = arguments[3], o = new T(n.getIntersection(s));
          this.addIntersection(o, i);
        }
      } }, { key: "toString", value: function() {
        return $n.toLineString(new Ve(this._pts));
      } }, { key: "getNodeList", value: function() {
        return this._nodeList;
      } }, { key: "addIntersectionNode", value: function(t, e) {
        var n = e, i = n + 1;
        if (i < this._pts.length) {
          var s = this._pts[i];
          t.equals2D(s) && (n = i);
        }
        return this._nodeList.add(t, n);
      } }, { key: "addIntersections", value: function(t, e, n) {
        for (var i = 0; i < t.getIntersectionNum(); i++) this.addIntersection(t, e, n, i);
      } }, { key: "interfaces_", get: function() {
        return [oa];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new sa(this), this._pts = null, this._data = null;
        var t = arguments[0], e = arguments[1];
        this._pts = t, this._data = e;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0], e = new W();
          return r.getNodedSubstrings(t, e), e;
        }
        if (arguments.length === 2) for (var n = arguments[0], i = arguments[1], s = n.iterator(); s.hasNext(); ) {
          var o = s.next();
          o.getNodeList().addSplitEdges(i);
        }
      } }]), r;
    }(), bt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "minX", value: function() {
        return Math.min(this.p0.x, this.p1.x);
      } }, { key: "orientationIndex", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0], e = K.index(this.p0, this.p1, t.p0), n = K.index(this.p0, this.p1, t.p1);
          return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
        }
        if (arguments[0] instanceof T) {
          var i = arguments[0];
          return K.index(this.p0, this.p1, i);
        }
      } }, { key: "toGeometry", value: function(t) {
        return t.createLineString([this.p0, this.p1]);
      } }, { key: "isVertical", value: function() {
        return this.p0.x === this.p1.x;
      } }, { key: "equals", value: function(t) {
        if (!(t instanceof r)) return !1;
        var e = t;
        return this.p0.equals(e.p0) && this.p1.equals(e.p1);
      } }, { key: "intersection", value: function(t) {
        var e = new _e();
        return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
      } }, { key: "project", value: function() {
        if (arguments[0] instanceof T) {
          var t = arguments[0];
          if (t.equals(this.p0) || t.equals(this.p1)) return new T(t);
          var e = this.projectionFactor(t), n = new T();
          return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
        }
        if (arguments[0] instanceof r) {
          var i = arguments[0], s = this.projectionFactor(i.p0), o = this.projectionFactor(i.p1);
          if (s >= 1 && o >= 1 || s <= 0 && o <= 0) return null;
          var c = this.project(i.p0);
          s < 0 && (c = this.p0), s > 1 && (c = this.p1);
          var v = this.project(i.p1);
          return o < 0 && (v = this.p0), o > 1 && (v = this.p1), new r(c, v);
        }
      } }, { key: "normalize", value: function() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      } }, { key: "angle", value: function() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      } }, { key: "getCoordinate", value: function(t) {
        return t === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(t) {
        return Zt.pointToLinePerpendicular(t, this.p0, this.p1);
      } }, { key: "minY", value: function() {
        return Math.min(this.p0.y, this.p1.y);
      } }, { key: "midPoint", value: function() {
        return r.midPoint(this.p0, this.p1);
      } }, { key: "projectionFactor", value: function(t) {
        if (t.equals(this.p0)) return 0;
        if (t.equals(this.p1)) return 1;
        var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = e * e + n * n;
        return i <= 0 ? H.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
      } }, { key: "closestPoints", value: function(t) {
        var e = this.intersection(t);
        if (e !== null) return [e, e];
        var n = new Array(2).fill(null), i = H.MAX_VALUE, s = null, o = this.closestPoint(t.p0);
        i = o.distance(t.p0), n[0] = o, n[1] = t.p0;
        var c = this.closestPoint(t.p1);
        (s = c.distance(t.p1)) < i && (i = s, n[0] = c, n[1] = t.p1);
        var v = t.closestPoint(this.p0);
        (s = v.distance(this.p0)) < i && (i = s, n[0] = this.p0, n[1] = v);
        var y = t.closestPoint(this.p1);
        return (s = y.distance(this.p1)) < i && (i = s, n[0] = this.p1, n[1] = y), n;
      } }, { key: "closestPoint", value: function(t) {
        var e = this.projectionFactor(t);
        return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1;
      } }, { key: "maxX", value: function() {
        return Math.max(this.p0.x, this.p1.x);
      } }, { key: "getLength", value: function() {
        return this.p0.distance(this.p1);
      } }, { key: "compareTo", value: function(t) {
        var e = t, n = this.p0.compareTo(e.p0);
        return n !== 0 ? n : this.p1.compareTo(e.p1);
      } }, { key: "reverse", value: function() {
        var t = this.p0;
        this.p0 = this.p1, this.p1 = t;
      } }, { key: "equalsTopo", value: function(t) {
        return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
      } }, { key: "lineIntersection", value: function(t) {
        return Yn.intersection(this.p0, this.p1, t.p0, t.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(t, e) {
        var n = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), s = this.p1.x - this.p0.x, o = this.p1.y - this.p0.y, c = Math.sqrt(s * s + o * o), v = 0, y = 0;
        if (e !== 0) {
          if (c <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          v = e * s / c, y = e * o / c;
        }
        return new T(n - y, i + v);
      } }, { key: "setCoordinates", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          this.setCoordinates(t.p0, t.p1);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
        }
      } }, { key: "segmentFraction", value: function(t) {
        var e = this.projectionFactor(t);
        return e < 0 ? e = 0 : (e > 1 || H.isNaN(e)) && (e = 1), e;
      } }, { key: "toString", value: function() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      } }, { key: "isHorizontal", value: function() {
        return this.p0.y === this.p1.y;
      } }, { key: "reflect", value: function(t) {
        var e = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), s = e * e + n * n, o = e * e - n * n, c = t.getX(), v = t.getY();
        return new T((-o * c - 2 * e * n * v - 2 * e * i) / s, (o * v - 2 * e * n * c - 2 * n * i) / s);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof r) {
          var t = arguments[0];
          return Zt.segmentToSegment(this.p0, this.p1, t.p0, t.p1);
        }
        if (arguments[0] instanceof T) {
          var e = arguments[0];
          return Zt.pointToSegment(e, this.p0, this.p1);
        }
      } }, { key: "pointAlong", value: function(t) {
        var e = new T();
        return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
      } }, { key: "hashCode", value: function() {
        var t = H.doubleToLongBits(this.p0.x);
        t ^= 31 * H.doubleToLongBits(this.p0.y);
        var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = H.doubleToLongBits(this.p1.x);
        return n ^= 31 * H.doubleToLongBits(this.p1.y), e ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      } }, { key: "interfaces_", get: function() {
        return [X, U];
      } }], [{ key: "constructor_", value: function() {
        if (this.p0 = null, this.p1 = null, arguments.length === 0) r.constructor_.call(this, new T(), new T());
        else if (arguments.length === 1) {
          var t = arguments[0];
          r.constructor_.call(this, t.p0, t.p1);
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          this.p0 = e, this.p1 = n;
        } else if (arguments.length === 4) {
          var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3];
          r.constructor_.call(this, new T(i, s), new T(o, c));
        }
      } }, { key: "midPoint", value: function(t, e) {
        return new T((t.x + e.x) / 2, (t.y + e.y) / 2);
      } }]), r;
    }(), la = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "overlap", value: function() {
        if (arguments.length !== 2) {
          if (arguments.length === 4) {
            var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
            t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this._overlapSeg1 = new bt(), this._overlapSeg2 = new bt();
      } }]), r;
    }(), Ki = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getLineSegment", value: function(t, e) {
        e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
      } }, { key: "computeSelect", value: function(t, e, n, i) {
        var s = this._pts[e], o = this._pts[n];
        if (n - e == 1) return i.select(this, e), null;
        if (!t.intersects(s, o)) return null;
        var c = Math.trunc((e + n) / 2);
        e < c && this.computeSelect(t, e, c, i), c < n && this.computeSelect(t, c, n, i);
      } }, { key: "getCoordinates", value: function() {
        for (var t = new Array(this._end - this._start + 1).fill(null), e = 0, n = this._start; n <= this._end; n++) t[e++] = this._pts[n];
        return t;
      } }, { key: "computeOverlaps", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          this.computeOverlaps(this._start, this._end, t, t._start, t._end, e);
        } else if (arguments.length === 6) {
          var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], c = arguments[4], v = arguments[5];
          if (i - n == 1 && c - o == 1) return v.overlap(this, n, s, o), null;
          if (!this.overlaps(n, i, s, o, c)) return null;
          var y = Math.trunc((n + i) / 2), k = Math.trunc((o + c) / 2);
          n < y && (o < k && this.computeOverlaps(n, y, s, o, k, v), k < c && this.computeOverlaps(n, y, s, k, c, v)), y < i && (o < k && this.computeOverlaps(y, i, s, o, k, v), k < c && this.computeOverlaps(y, i, s, k, c, v));
        }
      } }, { key: "setId", value: function(t) {
        this._id = t;
      } }, { key: "select", value: function(t, e) {
        this.computeSelect(t, this._start, this._end, e);
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          var t = this._pts[this._start], e = this._pts[this._end];
          this._env = new vt(t, e);
        }
        return this._env;
      } }, { key: "overlaps", value: function(t, e, n, i, s) {
        return vt.intersects(this._pts[t], this._pts[e], n._pts[i], n._pts[s]);
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
        var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
        this._pts = t, this._start = e, this._end = n, this._context = i;
      } }]), r;
    }(), ha = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "findChainEnd", value: function(t, e) {
        for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); ) n++;
        if (n >= t.length - 1) return t.length - 1;
        for (var i = Lt.quadrant(t[n], t[n + 1]), s = e + 1; s < t.length && !(!t[s - 1].equals2D(t[s]) && Lt.quadrant(t[s - 1], t[s]) !== i); )
          s++;
        return s - 1;
      } }, { key: "getChains", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return r.getChains(t, null);
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1], i = new W(), s = 0;
          do {
            var o = r.findChainEnd(e, s), c = new Ki(e, s, o, n);
            i.add(c), s = o;
          } while (s < e.length - 1);
          return i;
        }
      } }]), r;
    }(), Kn = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "computeNodes", value: function(t) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), r;
    }(), Ji = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setSegmentIntersector", value: function(t) {
        this._segInt = t;
      } }, { key: "interfaces_", get: function() {
        return [Kn];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.setSegmentIntersector(t);
          }
        }
      } }]), r;
    }(), Jn = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return xe.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var i = ha.getChains(n.getCoordinates(), n).iterator(); i.hasNext(); ) {
          var s = i.next();
          s.setId(this._idCounter++), this._index.insert(s.getEnvelope(), s), this._monoChains.add(s);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var i = n.iterator(); i.hasNext(); ) this.add(i.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new tr(this._segInt), i = this._monoChains.iterator(); i.hasNext(); ) for (var s = i.next(), o = this._index.query(s.getEnvelope()).iterator(); o.hasNext(); ) {
          var c = o.next();
          if (c.getId() > s.getId() && (s.computeOverlaps(c, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new W(), this._index = new jt(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            Ji.constructor_.call(this, n);
          }
        }
      } }]), e;
    }(Ji), tr = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return L(d(e.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], c = n.getContext(), v = s.getContext();
        this._si.processIntersections(c, i, v, o);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), e;
    }(la);
    Jn.SegmentOverlapAction = tr;
    var Xt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isDeletable", value: function(t, e, n, i) {
        var s = this._inputLine[t], o = this._inputLine[e], c = this._inputLine[n];
        return !!this.isConcave(s, o, c) && !!this.isShallow(s, o, c, i) && this.isShallowSampled(s, o, t, n, i);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var t = 1, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e), i = !1; n < this._inputLine.length; ) {
          var s = !1;
          this.isDeletable(t, e, n, this._distanceTol) && (this._isDeleted[e] = r.DELETE, s = !0, i = !0), t = s ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e);
        }
        return i;
      } }, { key: "isShallowConcavity", value: function(t, e, n, i) {
        return K.index(t, e, n) === this._angleOrientation && Zt.pointToSegment(e, t, n) < i;
      } }, { key: "isShallowSampled", value: function(t, e, n, i, s) {
        var o = Math.trunc((i - n) / r.NUM_PTS_TO_CHECK);
        o <= 0 && (o = 1);
        for (var c = n; c < i; c += o) if (!this.isShallow(t, e, this._inputLine[c], s)) return !1;
        return !0;
      } }, { key: "isConcave", value: function(t, e, n) {
        var i = K.index(t, e, n) === this._angleOrientation;
        return i;
      } }, { key: "simplify", value: function(t) {
        this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = K.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var e = !1;
        do
          e = this.deleteShallowConcavities();
        while (e);
        return this.collapseLine();
      } }, { key: "findNextNonDeletedIndex", value: function(t) {
        for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === r.DELETE; ) e++;
        return e;
      } }, { key: "isShallow", value: function(t, e, n, i) {
        return Zt.pointToSegment(e, t, n) < i;
      } }, { key: "collapseLine", value: function() {
        for (var t = new Ue(), e = 0; e < this._inputLine.length; e++) this._isDeleted[e] !== r.DELETE && t.add(this._inputLine[e]);
        return t.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = K.COUNTERCLOCKWISE;
        var t = arguments[0];
        this._inputLine = t;
      } }, { key: "simplify", value: function(t, e) {
        return new r(t).simplify(e);
      } }]), r;
    }();
    Xt.INIT = 0, Xt.DELETE = 1, Xt.KEEP = 1, Xt.NUM_PTS_TO_CHECK = 10;
    var er = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this._ptList.toArray(r.COORDINATE_ARRAY_TYPE);
      } }, { key: "setPrecisionModel", value: function(t) {
        this._precisionModel = t;
      } }, { key: "addPt", value: function(t) {
        var e = new T(t);
        if (this._precisionModel.makePrecise(e), this.isRedundant(e)) return null;
        this._ptList.add(e);
      } }, { key: "reverse", value: function() {
      } }, { key: "addPts", value: function(t, e) {
        if (e) for (var n = 0; n < t.length; n++) this.addPt(t[n]);
        else for (var i = t.length - 1; i >= 0; i--) this.addPt(t[i]);
      } }, { key: "isRedundant", value: function(t) {
        if (this._ptList.size() < 1) return !1;
        var e = this._ptList.get(this._ptList.size() - 1);
        return t.distance(e) < this._minimimVertexDistance;
      } }, { key: "toString", value: function() {
        return new we().createLineString(this.getCoordinates()).toString();
      } }, { key: "closeRing", value: function() {
        if (this._ptList.size() < 1) return null;
        var t = new T(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
        if (t.equals(e)) return null;
        this._ptList.add(t);
      } }, { key: "setMinimumVertexDistance", value: function(t) {
        this._minimimVertexDistance = t;
      } }], [{ key: "constructor_", value: function() {
        this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new W();
      } }]), r;
    }();
    er.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var Mt = function() {
      function r() {
        a(this, r);
      }
      return h(r, null, [{ key: "toDegrees", value: function(t) {
        return 180 * t / Math.PI;
      } }, { key: "normalize", value: function(t) {
        for (; t > Math.PI; ) t -= r.PI_TIMES_2;
        for (; t <= -Math.PI; ) t += r.PI_TIMES_2;
        return t;
      } }, { key: "angle", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return Math.atan2(t.y, t.x);
        }
        if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1], i = n.x - e.x, s = n.y - e.y;
          return Math.atan2(s, i);
        }
      } }, { key: "isAcute", value: function(t, e, n) {
        var i = t.x - e.x, s = t.y - e.y;
        return i * (n.x - e.x) + s * (n.y - e.y) > 0;
      } }, { key: "isObtuse", value: function(t, e, n) {
        var i = t.x - e.x, s = t.y - e.y;
        return i * (n.x - e.x) + s * (n.y - e.y) < 0;
      } }, { key: "interiorAngle", value: function(t, e, n) {
        var i = r.angle(e, t), s = r.angle(e, n);
        return Math.abs(s - i);
      } }, { key: "normalizePositive", value: function(t) {
        if (t < 0) {
          for (; t < 0; ) t += r.PI_TIMES_2;
          t >= r.PI_TIMES_2 && (t = 0);
        } else {
          for (; t >= r.PI_TIMES_2; ) t -= r.PI_TIMES_2;
          t < 0 && (t = 0);
        }
        return t;
      } }, { key: "angleBetween", value: function(t, e, n) {
        var i = r.angle(e, t), s = r.angle(e, n);
        return r.diff(i, s);
      } }, { key: "diff", value: function(t, e) {
        var n = null;
        return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n;
      } }, { key: "toRadians", value: function(t) {
        return t * Math.PI / 180;
      } }, { key: "getTurn", value: function(t, e) {
        var n = Math.sin(e - t);
        return n > 0 ? r.COUNTERCLOCKWISE : n < 0 ? r.CLOCKWISE : r.NONE;
      } }, { key: "angleBetweenOriented", value: function(t, e, n) {
        var i = r.angle(e, t), s = r.angle(e, n) - i;
        return s <= -Math.PI ? s + r.PI_TIMES_2 : s > Math.PI ? s - r.PI_TIMES_2 : s;
      } }]), r;
    }();
    Mt.PI_TIMES_2 = 2 * Math.PI, Mt.PI_OVER_2 = Math.PI / 2, Mt.PI_OVER_4 = Math.PI / 4, Mt.COUNTERCLOCKWISE = K.COUNTERCLOCKWISE, Mt.CLOCKWISE = K.CLOCKWISE, Mt.NONE = K.COLLINEAR;
    var $e = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "addNextSegment", value: function(t, e) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = K.index(this._s0, this._s1, this._s2), i = n === K.CLOCKWISE && this._side === q.LEFT || n === K.COUNTERCLOCKWISE && this._side === q.RIGHT;
        n === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
      } }, { key: "addLineEndCap", value: function(t, e) {
        var n = new bt(t, e), i = new bt();
        this.computeOffsetSegment(n, q.LEFT, this._distance, i);
        var s = new bt();
        this.computeOffsetSegment(n, q.RIGHT, this._distance, s);
        var o = e.x - t.x, c = e.y - t.y, v = Math.atan2(c, o);
        switch (this._bufParams.getEndCapStyle()) {
          case P.CAP_ROUND:
            this._segList.addPt(i.p1), this.addDirectedFillet(e, v + Math.PI / 2, v - Math.PI / 2, K.CLOCKWISE, this._distance), this._segList.addPt(s.p1);
            break;
          case P.CAP_FLAT:
            this._segList.addPt(i.p1), this._segList.addPt(s.p1);
            break;
          case P.CAP_SQUARE:
            var y = new T();
            y.x = Math.abs(this._distance) * Math.cos(v), y.y = Math.abs(this._distance) * Math.sin(v);
            var k = new T(i.p1.x + y.x, i.p1.y + y.y), S = new T(s.p1.x + y.x, s.p1.y + y.y);
            this._segList.addPt(k), this._segList.addPt(S);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(t, e, n, i) {
        var s = Yn.intersection(e.p0, e.p1, n.p0, n.p1);
        if (s !== null && (i <= 0 ? 1 : s.distance(t) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(s), null;
        this.addLimitedMitreJoin(e, n, i, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(t, e) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * r.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === P.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === P.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(t) {
        this._segList.addPt(new T(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new T(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new T(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new T(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(t, e) {
        this._segList.addPts(t, e);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(t, e, n, i, s) {
        var o = e.x - t.x, c = e.y - t.y, v = Math.atan2(c, o), y = n.x - t.x, k = n.y - t.y, S = Math.atan2(k, y);
        i === K.CLOCKWISE ? v <= S && (v += 2 * Math.PI) : v >= S && (v -= 2 * Math.PI), this._segList.addPt(e), this.addDirectedFillet(t, v, S, i, s), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(t, e, n) {
        this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(t, e, n, i) {
        var s = this._seg0.p1, o = Mt.angle(s, this._seg0.p0), c = Mt.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1) / 2, v = Mt.normalize(o + c), y = Mt.normalize(v + Math.PI), k = i * n, S = n - k * Math.abs(Math.sin(c)), C = s.x + k * Math.cos(y), F = s.y + k * Math.sin(y), A = new T(C, F), Z = new bt(s, A), j = Z.pointAlongOffset(1, S), J = Z.pointAlongOffset(1, -S);
        this._side === q.LEFT ? (this._segList.addPt(j), this._segList.addPt(J)) : (this._segList.addPt(J), this._segList.addPt(j));
      } }, { key: "addDirectedFillet", value: function(t, e, n, i, s) {
        var o = i === K.CLOCKWISE ? -1 : 1, c = Math.abs(e - n), v = Math.trunc(c / this._filletAngleQuantum + 0.5);
        if (v < 1) return null;
        for (var y = c / v, k = new T(), S = 0; S < v; S++) {
          var C = e + o * S * y;
          k.x = t.x + s * Math.cos(C), k.y = t.y + s * Math.sin(C), this._segList.addPt(k);
        }
      } }, { key: "computeOffsetSegment", value: function(t, e, n, i) {
        var s = e === q.LEFT ? 1 : -1, o = t.p1.x - t.p0.x, c = t.p1.y - t.p0.y, v = Math.sqrt(o * o + c * c), y = s * n * o / v, k = s * n * c / v;
        i.p0.x = t.p0.x - k, i.p0.y = t.p0.y + y, i.p1.x = t.p1.x - k, i.p1.y = t.p1.y + y;
      } }, { key: "addInsideTurn", value: function(t, e) {
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
      } }, { key: "createCircle", value: function(t) {
        var e = new T(t.x + this._distance, t.y);
        this._segList.addPt(e), this.addDirectedFillet(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      } }, { key: "addBevelJoin", value: function(t, e) {
        this._segList.addPt(t.p1), this._segList.addPt(e.p0);
      } }, { key: "init", value: function(t) {
        this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new er(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * r.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(t) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === P.JOIN_BEVEL || this._bufParams.getJoinStyle() === P.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, K.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new bt(), this._seg1 = new bt(), this._offset0 = new bt(), this._offset1 = new bt(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var t = arguments[0], e = arguments[1], n = arguments[2];
        this._precisionModel = t, this._bufParams = e, this._li = new _e(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === P.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), r;
    }();
    $e.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, $e.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, $e.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, $e.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var ca = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getOffsetCurve", value: function(t, e) {
        if (this._distance = e, e === 0) return null;
        var n = e < 0, i = Math.abs(e), s = this.getSegGen(i);
        t.length <= 1 ? this.computePointCurve(t[0], s) : this.computeOffsetCurve(t, n, s);
        var o = s.getCoordinates();
        return n && _t.reverse(o), o;
      } }, { key: "computeSingleSidedBufferCurve", value: function(t, e, n) {
        var i = this.simplifyTolerance(this._distance);
        if (e) {
          n.addSegments(t, !0);
          var s = Xt.simplify(t, -i), o = s.length - 1;
          n.initSideSegments(s[o], s[o - 1], q.LEFT), n.addFirstSegment();
          for (var c = o - 2; c >= 0; c--) n.addNextSegment(s[c], !0);
        } else {
          n.addSegments(t, !1);
          var v = Xt.simplify(t, i), y = v.length - 1;
          n.initSideSegments(v[0], v[1], q.LEFT), n.addFirstSegment();
          for (var k = 2; k <= y; k++) n.addNextSegment(v[k], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(t, e, n) {
        var i = this.simplifyTolerance(this._distance);
        e === q.RIGHT && (i = -i);
        var s = Xt.simplify(t, i), o = s.length - 1;
        n.initSideSegments(s[o - 1], s[0], e);
        for (var c = 1; c <= o; c++) {
          var v = c !== 1;
          n.addNextSegment(s[c], v);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(t, e) {
        var n = this.simplifyTolerance(this._distance), i = Xt.simplify(t, n), s = i.length - 1;
        e.initSideSegments(i[0], i[1], q.LEFT);
        for (var o = 2; o <= s; o++) e.addNextSegment(i[o], !0);
        e.addLastSegment(), e.addLineEndCap(i[s - 1], i[s]);
        var c = Xt.simplify(t, -n), v = c.length - 1;
        e.initSideSegments(c[v], c[v - 1], q.LEFT);
        for (var y = v - 2; y >= 0; y--) e.addNextSegment(c[y], !0);
        e.addLastSegment(), e.addLineEndCap(c[1], c[0]), e.closeRing();
      } }, { key: "computePointCurve", value: function(t, e) {
        switch (this._bufParams.getEndCapStyle()) {
          case P.CAP_ROUND:
            e.createCircle(t);
            break;
          case P.CAP_SQUARE:
            e.createSquare(t);
        }
      } }, { key: "getLineCurve", value: function(t, e) {
        if (this._distance = e, this.isLineOffsetEmpty(e)) return null;
        var n = Math.abs(e), i = this.getSegGen(n);
        if (t.length <= 1) this.computePointCurve(t[0], i);
        else if (this._bufParams.isSingleSided()) {
          var s = e < 0;
          this.computeSingleSidedBufferCurve(t, s, i);
        } else this.computeLineBufferCurve(t, i);
        return i.getCoordinates();
      } }, { key: "getBufferParameters", value: function() {
        return this._bufParams;
      } }, { key: "simplifyTolerance", value: function(t) {
        return t * this._bufParams.getSimplifyFactor();
      } }, { key: "getRingCurve", value: function(t, e, n) {
        if (this._distance = n, t.length <= 2) return this.getLineCurve(t, n);
        if (n === 0) return r.copyCoordinates(t);
        var i = this.getSegGen(n);
        return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
      } }, { key: "computeOffsetCurve", value: function(t, e, n) {
        var i = this.simplifyTolerance(this._distance);
        if (e) {
          var s = Xt.simplify(t, -i), o = s.length - 1;
          n.initSideSegments(s[o], s[o - 1], q.LEFT), n.addFirstSegment();
          for (var c = o - 2; c >= 0; c--) n.addNextSegment(s[c], !0);
        } else {
          var v = Xt.simplify(t, i), y = v.length - 1;
          n.initSideSegments(v[0], v[1], q.LEFT), n.addFirstSegment();
          for (var k = 2; k <= y; k++) n.addNextSegment(v[k], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(t) {
        return t === 0 || t < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(t) {
        return new $e(this._precisionModel, this._bufParams, t);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var t = arguments[0], e = arguments[1];
        this._precisionModel = t, this._bufParams = e;
      } }, { key: "copyCoordinates", value: function(t) {
        for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++) e[n] = new T(t[n]);
        return e;
      } }]), r;
    }(), nr = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "findStabbedSegments", value: function() {
        if (arguments.length === 1) {
          for (var t = arguments[0], e = new W(), n = this._subgraphs.iterator(); n.hasNext(); ) {
            var i = n.next(), s = i.getEnvelope();
            t.y < s.getMinY() || t.y > s.getMaxY() || this.findStabbedSegments(t, i.getDirectedEdges(), e);
          }
          return e;
        }
        if (arguments.length === 3) {
          if (tt(arguments[2], ve) && arguments[0] instanceof T && arguments[1] instanceof Qn) for (var o = arguments[0], c = arguments[1], v = arguments[2], y = c.getEdge().getCoordinates(), k = 0; k < y.length - 1; k++) {
            this._seg.p0 = y[k], this._seg.p1 = y[k + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var S = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(S < o.x) && !(this._seg.isHorizontal() || o.y < this._seg.p0.y || o.y > this._seg.p1.y || K.index(this._seg.p0, this._seg.p1, o) === K.RIGHT)) {
              var C = c.getDepth(q.LEFT);
              this._seg.p0.equals(y[k]) || (C = c.getDepth(q.RIGHT));
              var F = new ir(this._seg, C);
              v.add(F);
            }
          }
          else if (tt(arguments[2], ve) && arguments[0] instanceof T && tt(arguments[1], ve)) for (var A = arguments[0], Z = arguments[1], j = arguments[2], J = Z.iterator(); J.hasNext(); ) {
            var ct = J.next();
            ct.isForward() && this.findStabbedSegments(A, ct, j);
          }
        }
      } }, { key: "getDepth", value: function(t) {
        var e = this.findStabbedSegments(t);
        return e.size() === 0 ? 0 : Le.min(e)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new bt();
        var t = arguments[0];
        this._subgraphs = t;
      } }]), r;
    }(), ir = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareTo", value: function(t) {
        var e = t;
        if (this._upwardSeg.minX() >= e._upwardSeg.maxX()) return 1;
        if (this._upwardSeg.maxX() <= e._upwardSeg.minX()) return -1;
        var n = this._upwardSeg.orientationIndex(e._upwardSeg);
        return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? n : this._upwardSeg.compareTo(e._upwardSeg);
      } }, { key: "compareX", value: function(t, e) {
        var n = t.p0.compareTo(e.p0);
        return n !== 0 ? n : t.p1.compareTo(e.p1);
      } }, { key: "toString", value: function() {
        return this._upwardSeg.toString();
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._upwardSeg = null, this._leftDepth = null;
        var t = arguments[0], e = arguments[1];
        this._upwardSeg = new bt(t), this._leftDepth = e;
      } }]), r;
    }();
    nr.DepthSegment = ir;
    var rr = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, null, [{ key: "constructor_", value: function() {
        G.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), e;
    }(G), ti = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getY", value: function() {
        var t = this.y / this.w;
        if (H.isNaN(t) || H.isInfinite(t)) throw new rr();
        return t;
      } }, { key: "getX", value: function() {
        var t = this.x / this.w;
        if (H.isNaN(t) || H.isInfinite(t)) throw new rr();
        return t;
      } }, { key: "getCoordinate", value: function() {
        var t = new T();
        return t.x = this.getX(), t.y = this.getY(), t;
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
        else if (arguments.length === 1) {
          var t = arguments[0];
          this.x = t.x, this.y = t.y, this.w = 1;
        } else if (arguments.length === 2) {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var e = arguments[0], n = arguments[1];
            this.x = e, this.y = n, this.w = 1;
          } else if (arguments[0] instanceof r && arguments[1] instanceof r) {
            var i = arguments[0], s = arguments[1];
            this.x = i.y * s.w - s.y * i.w, this.y = s.x * i.w - i.x * s.w, this.w = i.x * s.y - s.x * i.y;
          } else if (arguments[0] instanceof T && arguments[1] instanceof T) {
            var o = arguments[0], c = arguments[1];
            this.x = o.y - c.y, this.y = c.x - o.x, this.w = o.x * c.y - c.x * o.y;
          }
        } else if (arguments.length === 3) {
          var v = arguments[0], y = arguments[1], k = arguments[2];
          this.x = v, this.y = y, this.w = k;
        } else if (arguments.length === 4) {
          var S = arguments[0], C = arguments[1], F = arguments[2], A = arguments[3], Z = S.y - C.y, j = C.x - S.x, J = S.x * C.y - C.x * S.y, ct = F.y - A.y, mt = A.x - F.x, Nt = F.x * A.y - A.x * F.y;
          this.x = j * Nt - mt * J, this.y = ct * J - Z * Nt, this.w = Z * mt - ct * j;
        }
      } }]), r;
    }(), fa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "area", value: function() {
        return r.area(this.p0, this.p1, this.p2);
      } }, { key: "signedArea", value: function() {
        return r.signedArea(this.p0, this.p1, this.p2);
      } }, { key: "interpolateZ", value: function(t) {
        if (t === null) throw new D("Supplied point is null.");
        return r.interpolateZ(t, this.p0, this.p1, this.p2);
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
        var t = arguments[0], e = arguments[1], n = arguments[2];
        this.p0 = t, this.p1 = e, this.p2 = n;
      } }, { key: "area", value: function(t, e, n) {
        return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
      } }, { key: "signedArea", value: function(t, e, n) {
        return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
      } }, { key: "det", value: function(t, e, n, i) {
        return t * i - e * n;
      } }, { key: "interpolateZ", value: function(t, e, n, i) {
        var s = e.x, o = e.y, c = n.x - s, v = i.x - s, y = n.y - o, k = i.y - o, S = c * k - v * y, C = t.x - s, F = t.y - o, A = (k * C - v * F) / S, Z = (-y * C + c * F) / S;
        return e.getZ() + A * (n.getZ() - e.getZ()) + Z * (i.getZ() - e.getZ());
      } }, { key: "longestSideLength", value: function(t, e, n) {
        var i = t.distance(e), s = e.distance(n), o = n.distance(t), c = i;
        return s > c && (c = s), o > c && (c = o), c;
      } }, { key: "circumcentreDD", value: function(t, e, n) {
        var i = Q.valueOf(t.x).subtract(n.x), s = Q.valueOf(t.y).subtract(n.y), o = Q.valueOf(e.x).subtract(n.x), c = Q.valueOf(e.y).subtract(n.y), v = Q.determinant(i, s, o, c).multiply(2), y = i.sqr().add(s.sqr()), k = o.sqr().add(c.sqr()), S = Q.determinant(s, y, c, k), C = Q.determinant(i, y, o, k), F = Q.valueOf(n.x).subtract(S.divide(v)).doubleValue(), A = Q.valueOf(n.y).add(C.divide(v)).doubleValue();
        return new T(F, A);
      } }, { key: "isAcute", value: function(t, e, n) {
        return !!Mt.isAcute(t, e, n) && !!Mt.isAcute(e, n, t) && !!Mt.isAcute(n, t, e);
      } }, { key: "circumcentre", value: function(t, e, n) {
        var i = n.x, s = n.y, o = t.x - i, c = t.y - s, v = e.x - i, y = e.y - s, k = 2 * r.det(o, c, v, y), S = r.det(c, o * o + c * c, y, v * v + y * y), C = r.det(o, o * o + c * c, v, v * v + y * y);
        return new T(i - S / k, s + C / k);
      } }, { key: "perpendicularBisector", value: function(t, e) {
        var n = e.x - t.x, i = e.y - t.y, s = new ti(t.x + n / 2, t.y + i / 2, 1), o = new ti(t.x - i + n / 2, t.y + n + i / 2, 1);
        return new ti(s, o);
      } }, { key: "angleBisector", value: function(t, e, n) {
        var i = e.distance(t), s = i / (i + e.distance(n)), o = n.x - t.x, c = n.y - t.y;
        return new T(t.x + s * o, t.y + s * c);
      } }, { key: "area3D", value: function(t, e, n) {
        var i = e.x - t.x, s = e.y - t.y, o = e.getZ() - t.getZ(), c = n.x - t.x, v = n.y - t.y, y = n.getZ() - t.getZ(), k = s * y - o * v, S = o * c - i * y, C = i * v - s * c, F = k * k + S * S + C * C, A = Math.sqrt(F) / 2;
        return A;
      } }, { key: "centroid", value: function(t, e, n) {
        var i = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3;
        return new T(i, s);
      } }, { key: "inCentre", value: function(t, e, n) {
        var i = e.distance(n), s = t.distance(n), o = t.distance(e), c = i + s + o, v = (i * t.x + s * e.x + o * n.x) / c, y = (i * t.y + s * e.y + o * n.y) / c;
        return new T(v, y);
      } }]), r;
    }(), ga = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "addRingSide", value: function(t, e, n, i, s) {
        if (e === 0 && t.length < Xe.MINIMUM_VALID_SIZE) return null;
        var o = i, c = s;
        t.length >= Xe.MINIMUM_VALID_SIZE && K.isCCW(t) && (o = s, c = i, n = q.opposite(n));
        var v = this._curveBuilder.getRingCurve(t, n, e);
        this.addCurve(v, o, c);
      } }, { key: "addRingBothSides", value: function(t, e) {
        this.addRingSide(t, e, q.LEFT, x.EXTERIOR, x.INTERIOR), this.addRingSide(t, e, q.RIGHT, x.INTERIOR, x.EXTERIOR);
      } }, { key: "addPoint", value: function(t) {
        if (this._distance <= 0) return null;
        var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
        this.addCurve(n, x.EXTERIOR, x.INTERIOR);
      } }, { key: "addPolygon", value: function(t) {
        var e = this._distance, n = q.LEFT;
        this._distance < 0 && (e = -this._distance, n = q.RIGHT);
        var i = t.getExteriorRing(), s = _t.removeRepeatedPoints(i.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(i, this._distance) || this._distance <= 0 && s.length < 3) return null;
        this.addRingSide(s, e, n, x.EXTERIOR, x.INTERIOR);
        for (var o = 0; o < t.getNumInteriorRing(); o++) {
          var c = t.getInteriorRingN(o), v = _t.removeRepeatedPoints(c.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(c, -this._distance) || this.addRingSide(v, e, q.opposite(n), x.INTERIOR, x.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(t, e) {
        var n = new fa(t[0], t[1], t[2]), i = n.inCentre();
        return Zt.pointToSegment(i, n.p0, n.p1) < Math.abs(e);
      } }, { key: "addLineString", value: function(t) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var e = _t.removeRepeatedPoints(t.getCoordinates());
        if (_t.isRing(e) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(e, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(e, this._distance);
          this.addCurve(n, x.EXTERIOR, x.INTERIOR);
        }
      } }, { key: "addCurve", value: function(t, e, n) {
        if (t === null || t.length < 2) return null;
        var i = new xe(t, new Ft(0, x.BOUNDARY, e, n));
        this._curveList.add(i);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(t) {
        if (t.isEmpty()) return null;
        if (t instanceof fn) this.addPolygon(t);
        else if (t instanceof Be) this.addLineString(t);
        else if (t instanceof zn) this.addPoint(t);
        else if (t instanceof Bn) this.addCollection(t);
        else if (t instanceof Hn) this.addCollection(t);
        else if (t instanceof Vn) this.addCollection(t);
        else {
          if (!(t instanceof Ot)) throw new se(t.getGeometryType());
          this.addCollection(t);
        }
      } }, { key: "isErodedCompletely", value: function(t, e) {
        var n = t.getCoordinates();
        if (n.length < 4) return e < 0;
        if (n.length === 4) return this.isTriangleErodedCompletely(n, e);
        var i = t.getEnvelopeInternal(), s = Math.min(i.getHeight(), i.getWidth());
        return e < 0 && 2 * Math.abs(e) > s;
      } }, { key: "addCollection", value: function(t) {
        for (var e = 0; e < t.getNumGeometries(); e++) {
          var n = t.getGeometryN(e);
          this.add(n);
        }
      } }], [{ key: "constructor_", value: function() {
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new W();
        var t = arguments[0], e = arguments[1], n = arguments[2];
        this._inputGeom = t, this._distance = e, this._curveBuilder = n;
      } }]), r;
    }(), va = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "locate", value: function(t) {
      } }]), r;
    }(), ya = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, r.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new un();
        var t = this._parent.getGeometryN(this._index++);
        return t instanceof Ot ? (this._subcollectionIterator = new r(t), this._subcollectionIterator.next()) : t;
      } }, { key: "remove", value: function() {
        throw new se(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [ra];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var t = arguments[0];
        this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
      } }, { key: "isAtomic", value: function(t) {
        return !(t instanceof Ot);
      } }]), r;
    }(), ma = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "locate", value: function(t) {
        return r.locate(t, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [va];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var t = arguments[0];
        this._geom = t;
      } }, { key: "locatePointInPolygon", value: function(t, e) {
        if (e.isEmpty()) return x.EXTERIOR;
        var n = e.getExteriorRing(), i = r.locatePointInRing(t, n);
        if (i !== x.INTERIOR) return i;
        for (var s = 0; s < e.getNumInteriorRing(); s++) {
          var o = e.getInteriorRingN(s), c = r.locatePointInRing(t, o);
          if (c === x.BOUNDARY) return x.BOUNDARY;
          if (c === x.INTERIOR) return x.EXTERIOR;
        }
        return x.INTERIOR;
      } }, { key: "locatePointInRing", value: function(t, e) {
        return e.getEnvelopeInternal().intersects(t) ? jn.locateInRing(t, e.getCoordinates()) : x.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(t, e) {
        return x.EXTERIOR !== r.locatePointInPolygon(t, e);
      } }, { key: "locateInGeometry", value: function(t, e) {
        if (e instanceof fn) return r.locatePointInPolygon(t, e);
        if (e instanceof Ot) for (var n = new ya(e); n.hasNext(); ) {
          var i = n.next();
          if (i !== e) {
            var s = r.locateInGeometry(t, i);
            if (s !== x.EXTERIOR) return s;
          }
        }
        return x.EXTERIOR;
      } }, { key: "isContained", value: function(t, e) {
        return x.EXTERIOR !== r.locate(t, e);
      } }, { key: "locate", value: function(t, e) {
        return e.isEmpty() ? x.EXTERIOR : e.getEnvelopeInternal().intersects(t) ? r.locateInGeometry(t, e) : x.EXTERIOR;
      } }]), r;
    }(), da = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getNextCW", value: function(t) {
        this.getEdges();
        var e = this._edgeList.indexOf(t), n = e - 1;
        return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(t) {
        for (var e = x.NONE, n = this.iterator(); n.hasNext(); ) {
          var i = n.next().getLabel();
          i.isArea(t) && i.getLocation(t, q.LEFT) !== x.NONE && (e = i.getLocation(t, q.LEFT));
        }
        if (e === x.NONE) return null;
        for (var s = e, o = this.iterator(); o.hasNext(); ) {
          var c = o.next(), v = c.getLabel();
          if (v.getLocation(t, q.ON) === x.NONE && v.setLocation(t, q.ON, s), v.isArea(t)) {
            var y = v.getLocation(t, q.LEFT), k = v.getLocation(t, q.RIGHT);
            if (k !== x.NONE) {
              if (k !== s) throw new te("side location conflict", c.getCoordinate());
              y === x.NONE && it.shouldNeverReachHere("found single null side (at " + c.getCoordinate() + ")"), s = y;
            } else it.isTrue(v.getLocation(t, q.LEFT) === x.NONE, "found single null side"), v.setLocation(t, q.RIGHT, s), v.setLocation(t, q.LEFT, s);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var t = this.iterator();
        return t.hasNext() ? t.next().getCoordinate() : null;
      } }, { key: "print", value: function(t) {
        At.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var e = this.iterator(); e.hasNext(); )
          e.next().print(t);
      } }, { key: "isAreaLabelsConsistent", value: function(t) {
        return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(t) {
        var e = this.getEdges();
        if (e.size() <= 0) return !0;
        var n = e.size() - 1, i = e.get(n).getLabel().getLocation(t, q.LEFT);
        it.isTrue(i !== x.NONE, "Found unlabelled area edge");
        for (var s = i, o = this.iterator(); o.hasNext(); ) {
          var c = o.next().getLabel();
          it.isTrue(c.isArea(t), "Found non-area edge");
          var v = c.getLocation(t, q.LEFT), y = c.getLocation(t, q.RIGHT);
          if (v === y || y !== s) return !1;
          s = v;
        }
        return !0;
      } }, { key: "findIndex", value: function(t) {
        this.iterator();
        for (var e = 0; e < this._edgeList.size(); e++)
          if (this._edgeList.get(e) === t) return e;
        return -1;
      } }, { key: "iterator", value: function() {
        return this.getEdges().iterator();
      } }, { key: "getEdges", value: function() {
        return this._edgeList === null && (this._edgeList = new W(this._edgeMap.values())), this._edgeList;
      } }, { key: "getLocation", value: function(t, e, n) {
        return this._ptInAreaLocation[t] === x.NONE && (this._ptInAreaLocation[t] = ma.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
      } }, { key: "toString", value: function() {
        var t = new Ye();
        t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
        for (var e = this.iterator(); e.hasNext(); ) {
          var n = e.next();
          t.append(n), t.append(`
`);
        }
        return t.toString();
      } }, { key: "computeEdgeEndLabels", value: function(t) {
        for (var e = this.iterator(); e.hasNext(); )
          e.next().computeLabel(t);
      } }, { key: "computeLabelling", value: function(t) {
        this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
        for (var e = [!1, !1], n = this.iterator(); n.hasNext(); ) for (var i = n.next().getLabel(), s = 0; s < 2; s++) i.isLine(s) && i.getLocation(s) === x.BOUNDARY && (e[s] = !0);
        for (var o = this.iterator(); o.hasNext(); ) for (var c = o.next(), v = c.getLabel(), y = 0; y < 2; y++) if (v.isAnyNull(y)) {
          var k = x.NONE;
          if (e[y]) k = x.EXTERIOR;
          else {
            var S = c.getCoordinate();
            k = this.getLocation(y, S, t);
          }
          v.setAllLocationsIfNull(y, k);
        }
      } }, { key: "getDegree", value: function() {
        return this._edgeMap.size();
      } }, { key: "insertEdgeEnd", value: function(t, e) {
        this._edgeMap.put(t, e), this._edgeList = null;
      } }], [{ key: "constructor_", value: function() {
        this._edgeMap = new Ze(), this._edgeList = null, this._ptInAreaLocation = [x.NONE, x.NONE];
      } }]), r;
    }(), pa = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "linkResultDirectedEdges", value: function() {
        this.getResultAreaEdges();
        for (var n = null, i = null, s = this._SCANNING_FOR_INCOMING, o = 0; o < this._resultAreaEdgeList.size(); o++) {
          var c = this._resultAreaEdgeList.get(o), v = c.getSym();
          if (c.getLabel().isArea()) switch (n === null && c.isInResult() && (n = c), s) {
            case this._SCANNING_FOR_INCOMING:
              if (!v.isInResult()) continue;
              i = v, s = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (!c.isInResult()) continue;
              i.setNext(c), s = this._SCANNING_FOR_INCOMING;
          }
        }
        if (s === this._LINKING_TO_OUTGOING) {
          if (n === null) throw new te("no outgoing dirEdge found", this.getCoordinate());
          it.isTrue(n.isInResult(), "unable to link last incoming dirEdge"), i.setNext(n);
        }
      } }, { key: "insert", value: function(n) {
        var i = n;
        this.insertEdgeEnd(i, i);
      } }, { key: "getRightmostEdge", value: function() {
        var n = this.getEdges(), i = n.size();
        if (i < 1) return null;
        var s = n.get(0);
        if (i === 1) return s;
        var o = n.get(i - 1), c = s.getQuadrant(), v = o.getQuadrant();
        return Lt.isNorthern(c) && Lt.isNorthern(v) ? s : Lt.isNorthern(c) || Lt.isNorthern(v) ? s.getDy() !== 0 ? s : o.getDy() !== 0 ? o : (it.shouldNeverReachHere("found two horizontal edges incident on node"), null) : o;
      } }, { key: "print", value: function(n) {
        At.out.println("DirectedEdgeStar: " + this.getCoordinate());
        for (var i = this.iterator(); i.hasNext(); ) {
          var s = i.next();
          n.print("out "), s.print(n), n.println(), n.print("in "), s.getSym().print(n), n.println();
        }
      } }, { key: "getResultAreaEdges", value: function() {
        if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new W();
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          (i.isInResult() || i.getSym().isInResult()) && this._resultAreaEdgeList.add(i);
        }
        return this._resultAreaEdgeList;
      } }, { key: "updateLabelling", value: function(n) {
        for (var i = this.iterator(); i.hasNext(); ) {
          var s = i.next().getLabel();
          s.setAllLocationsIfNull(0, n.getLocation(0)), s.setAllLocationsIfNull(1, n.getLocation(1));
        }
      } }, { key: "linkAllDirectedEdges", value: function() {
        this.getEdges();
        for (var n = null, i = null, s = this._edgeList.size() - 1; s >= 0; s--) {
          var o = this._edgeList.get(s), c = o.getSym();
          i === null && (i = c), n !== null && c.setNext(n), n = o;
        }
        i.setNext(n);
      } }, { key: "computeDepths", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this.findIndex(n), s = n.getDepth(q.LEFT), o = n.getDepth(q.RIGHT), c = this.computeDepths(i + 1, this._edgeList.size(), s), v = this.computeDepths(0, i, c);
          if (v !== o) throw new te("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var y = arguments[0], k = arguments[1], S = arguments[2], C = S, F = y; F < k; F++) {
            var A = this._edgeList.get(F);
            A.setEdgeDepths(q.RIGHT, C), C = A.getDepth(q.LEFT);
          }
          return C;
        }
      } }, { key: "mergeSymLabels", value: function() {
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().merge(i.getSym().getLabel());
        }
      } }, { key: "linkMinimalDirectedEdges", value: function(n) {
        for (var i = null, s = null, o = this._SCANNING_FOR_INCOMING, c = this._resultAreaEdgeList.size() - 1; c >= 0; c--) {
          var v = this._resultAreaEdgeList.get(c), y = v.getSym();
          switch (i === null && v.getEdgeRing() === n && (i = v), o) {
            case this._SCANNING_FOR_INCOMING:
              if (y.getEdgeRing() !== n) continue;
              s = y, o = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (v.getEdgeRing() !== n) continue;
              s.setNextMin(v), o = this._SCANNING_FOR_INCOMING;
          }
        }
        o === this._LINKING_TO_OUTGOING && (it.isTrue(i !== null, "found null for first outgoing dirEdge"), it.isTrue(i.getEdgeRing() === n, "unable to link last incoming dirEdge"), s.setNextMin(i));
      } }, { key: "getOutgoingDegree", value: function() {
        if (arguments.length === 0) {
          for (var n = 0, i = this.iterator(); i.hasNext(); ) {
            var s = i.next();
            s.isInResult() && n++;
          }
          return n;
        }
        if (arguments.length === 1) {
          for (var o = arguments[0], c = 0, v = this.iterator(); v.hasNext(); ) {
            var y = v.next();
            y.getEdgeRing() === o && c++;
          }
          return c;
        }
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "findCoveredLineEdges", value: function() {
        for (var n = x.NONE, i = this.iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getSym();
          if (!s.isLineEdge()) {
            if (s.isInResult()) {
              n = x.INTERIOR;
              break;
            }
            if (o.isInResult()) {
              n = x.EXTERIOR;
              break;
            }
          }
        }
        if (n === x.NONE) return null;
        for (var c = n, v = this.iterator(); v.hasNext(); ) {
          var y = v.next(), k = y.getSym();
          y.isLineEdge() ? y.getEdge().setCovered(c === x.INTERIOR) : (y.isInResult() && (c = x.EXTERIOR), k.isInResult() && (c = x.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        L(d(e.prototype), "computeLabelling", this).call(this, n), this._label = new Ft(x.NONE);
        for (var i = this.iterator(); i.hasNext(); ) for (var s = i.next().getEdge().getLabel(), o = 0; o < 2; o++) {
          var c = s.getLocation(o);
          c !== x.INTERIOR && c !== x.BOUNDARY || this._label.setLocation(o, x.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), e;
    }(da), _a = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        return a(this, e), t.call(this);
      }
      return h(e, [{ key: "createNode", value: function(n) {
        return new dn(n, new pa());
      } }]), e;
    }(Zi), sr = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "compareTo", value: function(t) {
        var e = t;
        return r.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._orientation = null;
        var t = arguments[0];
        this._pts = t, this._orientation = r.orientation(t);
      } }, { key: "orientation", value: function(t) {
        return _t.increasingDirection(t) === 1;
      } }, { key: "compareOriented", value: function(t, e, n, i) {
        for (var s = e ? 1 : -1, o = i ? 1 : -1, c = e ? t.length : -1, v = i ? n.length : -1, y = e ? 0 : t.length - 1, k = i ? 0 : n.length - 1; ; ) {
          var S = t[y].compareTo(n[k]);
          if (S !== 0) return S;
          var C = (y += s) === c, F = (k += o) === v;
          if (C && !F) return -1;
          if (!C && F) return 1;
          if (C && F) return 0;
        }
      } }]), r;
    }(), xa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "print", value: function(t) {
        t.print("MULTILINESTRING ( ");
        for (var e = 0; e < this._edges.size(); e++) {
          var n = this._edges.get(e);
          e > 0 && t.print(","), t.print("(");
          for (var i = n.getCoordinates(), s = 0; s < i.length; s++) s > 0 && t.print(","), t.print(i[s].x + " " + i[s].y);
          t.println(")");
        }
        t.print(")  ");
      } }, { key: "addAll", value: function(t) {
        for (var e = t.iterator(); e.hasNext(); ) this.add(e.next());
      } }, { key: "findEdgeIndex", value: function(t) {
        for (var e = 0; e < this._edges.size(); e++) if (this._edges.get(e).equals(t)) return e;
        return -1;
      } }, { key: "iterator", value: function() {
        return this._edges.iterator();
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "get", value: function(t) {
        return this._edges.get(t);
      } }, { key: "findEqualEdge", value: function(t) {
        var e = new sr(t.getCoordinates());
        return this._ocaMap.get(e);
      } }, { key: "add", value: function(t) {
        this._edges.add(t);
        var e = new sr(t.getCoordinates());
        this._ocaMap.put(e, t);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new W(), this._ocaMap = new Ze();
      } }]), r;
    }(), ar = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "processIntersections", value: function(t, e, n, i) {
      } }, { key: "isDone", value: function() {
      } }]), r;
    }(), ka = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isTrivialIntersection", value: function(t, e, n, i) {
        if (t === n && this._li.getIntersectionNum() === 1) {
          if (r.isAdjacentSegments(e, i)) return !0;
          if (t.isClosed()) {
            var s = t.size() - 1;
            if (e === 0 && i === s || i === 0 && e === s) return !0;
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
      } }, { key: "processIntersections", value: function(t, e, n, i) {
        if (t === n && e === i) return null;
        this.numTests++;
        var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], c = n.getCoordinates()[i], v = n.getCoordinates()[i + 1];
        this._li.computeIntersection(s, o, c, v), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [ar];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var t = arguments[0];
        this._li = t;
      } }, { key: "isAdjacentSegments", value: function(t, e) {
        return Math.abs(t - e) === 1;
      } }]), r;
    }(), Ea = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getSegmentIndex", value: function() {
        return this.segmentIndex;
      } }, { key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(t) {
        t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
      } }, { key: "compareTo", value: function(t) {
        var e = t;
        return this.compare(e.segmentIndex, e.dist);
      } }, { key: "isEndPoint", value: function(t) {
        return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
      } }, { key: "toString", value: function() {
        return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
      } }, { key: "getDistance", value: function() {
        return this.dist;
      } }, { key: "compare", value: function(t, e) {
        return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var t = arguments[0], e = arguments[1], n = arguments[2];
        this.coord = new T(t), this.segmentIndex = e, this.dist = n;
      } }]), r;
    }(), Ia = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "print", value: function(t) {
        t.println("Intersections:");
        for (var e = this.iterator(); e.hasNext(); )
          e.next().print(t);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(t) {
        this.addEndpoints();
        for (var e = this.iterator(), n = e.next(); e.hasNext(); ) {
          var i = e.next(), s = this.createSplitEdge(n, i);
          t.add(s), n = i;
        }
      } }, { key: "addEndpoints", value: function() {
        var t = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
      } }, { key: "createSplitEdge", value: function(t, e) {
        var n = e.segmentIndex - t.segmentIndex + 2, i = this.edge.pts[e.segmentIndex], s = e.dist > 0 || !e.coord.equals2D(i);
        s || n--;
        var o = new Array(n).fill(null), c = 0;
        o[c++] = new T(t.coord);
        for (var v = t.segmentIndex + 1; v <= e.segmentIndex; v++) o[c++] = this.edge.pts[v];
        return s && (o[c] = e.coord), new or(o, new Ft(this.edge._label));
      } }, { key: "add", value: function(t, e, n) {
        var i = new Ea(t, e, n), s = this._nodeMap.get(i);
        return s !== null ? s : (this._nodeMap.put(i, i), i);
      } }, { key: "isIntersection", value: function(t) {
        for (var e = this.iterator(); e.hasNext(); )
          if (e.next().coord.equals(t)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Ze(), this.edge = null;
        var t = arguments[0];
        this.edge = t;
      } }]), r;
    }(), Na = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) || r.isTrue(this._matrix[x.INTERIOR][x.BOUNDARY]) || r.isTrue(this._matrix[x.BOUNDARY][x.INTERIOR]) || r.isTrue(this._matrix[x.BOUNDARY][x.BOUNDARY])) && this._matrix[x.EXTERIOR][x.INTERIOR] === Y.FALSE && this._matrix[x.EXTERIOR][x.BOUNDARY] === Y.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) || r.isTrue(this._matrix[x.INTERIOR][x.BOUNDARY]) || r.isTrue(this._matrix[x.BOUNDARY][x.INTERIOR]) || r.isTrue(this._matrix[x.BOUNDARY][x.BOUNDARY])) && this._matrix[x.INTERIOR][x.EXTERIOR] === Y.FALSE && this._matrix[x.BOUNDARY][x.EXTERIOR] === Y.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var t = arguments[0], e = 0; e < t.length; e++) {
          var n = Math.trunc(e / 3), i = e % 3;
          this._matrix[n][i] = Y.toDimensionValue(t.charAt(e));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._matrix[s][o] = c;
        }
      } }, { key: "isContains", value: function() {
        return r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && this._matrix[x.EXTERIOR][x.INTERIOR] === Y.FALSE && this._matrix[x.EXTERIOR][x.BOUNDARY] === Y.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var t = arguments[0], e = 0; e < t.length; e++) {
          var n = Math.trunc(e / 3), i = e % 3;
          this.setAtLeast(n, i, Y.toDimensionValue(t.charAt(e)));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._matrix[s][o] < c && (this._matrix[s][o] = c);
        }
      } }, { key: "setAtLeastIfValid", value: function(t, e, n) {
        t >= 0 && e >= 0 && this.setAtLeast(t, e, n);
      } }, { key: "isWithin", value: function() {
        return r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && this._matrix[x.INTERIOR][x.EXTERIOR] === Y.FALSE && this._matrix[x.BOUNDARY][x.EXTERIOR] === Y.FALSE;
      } }, { key: "isTouches", value: function(t, e) {
        return t > e ? this.isTouches(e, t) : (t === Y.A && e === Y.A || t === Y.L && e === Y.L || t === Y.L && e === Y.A || t === Y.P && e === Y.A || t === Y.P && e === Y.L) && this._matrix[x.INTERIOR][x.INTERIOR] === Y.FALSE && (r.isTrue(this._matrix[x.INTERIOR][x.BOUNDARY]) || r.isTrue(this._matrix[x.BOUNDARY][x.INTERIOR]) || r.isTrue(this._matrix[x.BOUNDARY][x.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(t, e) {
        return t === Y.P && e === Y.P || t === Y.A && e === Y.A ? r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && r.isTrue(this._matrix[x.INTERIOR][x.EXTERIOR]) && r.isTrue(this._matrix[x.EXTERIOR][x.INTERIOR]) : t === Y.L && e === Y.L && this._matrix[x.INTERIOR][x.INTERIOR] === 1 && r.isTrue(this._matrix[x.INTERIOR][x.EXTERIOR]) && r.isTrue(this._matrix[x.EXTERIOR][x.INTERIOR]);
      } }, { key: "isEquals", value: function(t, e) {
        return t === e && r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && this._matrix[x.INTERIOR][x.EXTERIOR] === Y.FALSE && this._matrix[x.BOUNDARY][x.EXTERIOR] === Y.FALSE && this._matrix[x.EXTERIOR][x.INTERIOR] === Y.FALSE && this._matrix[x.EXTERIOR][x.BOUNDARY] === Y.FALSE;
      } }, { key: "toString", value: function() {
        for (var t = new vn("123456789"), e = 0; e < 3; e++) for (var n = 0; n < 3; n++) t.setCharAt(3 * e + n, Y.toDimensionSymbol(this._matrix[e][n]));
        return t.toString();
      } }, { key: "setAll", value: function(t) {
        for (var e = 0; e < 3; e++) for (var n = 0; n < 3; n++) this._matrix[e][n] = t;
      } }, { key: "get", value: function(t, e) {
        return this._matrix[t][e];
      } }, { key: "transpose", value: function() {
        var t = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = t, t = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = t, t = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = t, this;
      } }, { key: "matches", value: function(t) {
        if (t.length !== 9) throw new D("Should be length 9: " + t);
        for (var e = 0; e < 3; e++) for (var n = 0; n < 3; n++) if (!r.matches(this._matrix[e][n], t.charAt(3 * e + n))) return !1;
        return !0;
      } }, { key: "add", value: function(t) {
        for (var e = 0; e < 3; e++) for (var n = 0; n < 3; n++) this.setAtLeast(e, n, t.get(e, n));
      } }, { key: "isDisjoint", value: function() {
        return this._matrix[x.INTERIOR][x.INTERIOR] === Y.FALSE && this._matrix[x.INTERIOR][x.BOUNDARY] === Y.FALSE && this._matrix[x.BOUNDARY][x.INTERIOR] === Y.FALSE && this._matrix[x.BOUNDARY][x.BOUNDARY] === Y.FALSE;
      } }, { key: "isCrosses", value: function(t, e) {
        return t === Y.P && e === Y.L || t === Y.P && e === Y.A || t === Y.L && e === Y.A ? r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && r.isTrue(this._matrix[x.INTERIOR][x.EXTERIOR]) : t === Y.L && e === Y.P || t === Y.A && e === Y.P || t === Y.A && e === Y.L ? r.isTrue(this._matrix[x.INTERIOR][x.INTERIOR]) && r.isTrue(this._matrix[x.EXTERIOR][x.INTERIOR]) : t === Y.L && e === Y.L && this._matrix[x.INTERIOR][x.INTERIOR] === 0;
      } }, { key: "interfaces_", get: function() {
        return [V];
      } }], [{ key: "constructor_", value: function() {
        if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
          return Array(3);
        }), this.setAll(Y.FALSE);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "string") {
            var t = arguments[0];
            r.constructor_.call(this), this.set(t);
          } else if (arguments[0] instanceof r) {
            var e = arguments[0];
            r.constructor_.call(this), this._matrix[x.INTERIOR][x.INTERIOR] = e._matrix[x.INTERIOR][x.INTERIOR], this._matrix[x.INTERIOR][x.BOUNDARY] = e._matrix[x.INTERIOR][x.BOUNDARY], this._matrix[x.INTERIOR][x.EXTERIOR] = e._matrix[x.INTERIOR][x.EXTERIOR], this._matrix[x.BOUNDARY][x.INTERIOR] = e._matrix[x.BOUNDARY][x.INTERIOR], this._matrix[x.BOUNDARY][x.BOUNDARY] = e._matrix[x.BOUNDARY][x.BOUNDARY], this._matrix[x.BOUNDARY][x.EXTERIOR] = e._matrix[x.BOUNDARY][x.EXTERIOR], this._matrix[x.EXTERIOR][x.INTERIOR] = e._matrix[x.EXTERIOR][x.INTERIOR], this._matrix[x.EXTERIOR][x.BOUNDARY] = e._matrix[x.EXTERIOR][x.BOUNDARY], this._matrix[x.EXTERIOR][x.EXTERIOR] = e._matrix[x.EXTERIOR][x.EXTERIOR];
          }
        }
      } }, { key: "matches", value: function() {
        if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
          var t = arguments[0], e = arguments[1];
          return e === Y.SYM_DONTCARE || e === Y.SYM_TRUE && (t >= 0 || t === Y.TRUE) || e === Y.SYM_FALSE && t === Y.FALSE || e === Y.SYM_P && t === Y.P || e === Y.SYM_L && t === Y.L || e === Y.SYM_A && t === Y.A;
        }
        if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
          var n = arguments[0], i = arguments[1], s = new r(n);
          return s.matches(i);
        }
      } }, { key: "isTrue", value: function(t) {
        return t >= 0 || t === Y.TRUE;
      } }]), r;
    }(), wa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(t) {
        return t === null || t.length === 0 ? null : (this.ensureCapacity(this._size + t.length), At.arraycopy(t, 0, this._data, this._size, t.length), void (this._size += t.length));
      } }, { key: "ensureCapacity", value: function(t) {
        if (t <= this._data.length) return null;
        var e = Math.max(t, 2 * this._data.length);
        this._data = me.copyOf(this._data, e);
      } }, { key: "toArray", value: function() {
        var t = new Array(this._size).fill(null);
        return At.arraycopy(this._data, 0, t, 0, this._size), t;
      } }, { key: "add", value: function(t) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = t, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) r.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var t = arguments[0];
          this._data = new Array(t).fill(null);
        }
      } }]), r;
    }(), Sa = function() {
      function r() {
        a(this, r);
      }
      return h(r, [{ key: "getChainStartIndices", value: function(t) {
        var e = 0, n = new wa(Math.trunc(t.length / 2));
        n.add(e);
        do {
          var i = this.findChainEnd(t, e);
          n.add(i), e = i;
        } while (e < t.length - 1);
        return n.toArray();
      } }, { key: "findChainEnd", value: function(t, e) {
        for (var n = Lt.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length && Lt.quadrant(t[i - 1], t[i]) === n; )
          i++;
        return i - 1;
      } }, { key: "OLDgetChainStartIndices", value: function(t) {
        var e = 0, n = new W();
        n.add(e);
        do {
          var i = this.findChainEnd(t, e);
          n.add(i), e = i;
        } while (e < t.length - 1);
        return r.toIntArray(n);
      } }], [{ key: "toIntArray", value: function(t) {
        for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
        return e;
      } }]), r;
    }(), La = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "getMaxX", value: function(t) {
        var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
        return e > n ? e : n;
      } }, { key: "getMinX", value: function(t) {
        var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
        return e < n ? e : n;
      } }, { key: "computeIntersectsForChain", value: function() {
        if (arguments.length === 4) {
          var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
          this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
        } else if (arguments.length === 6) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = arguments[4], k = arguments[5];
          if (o - s == 1 && y - v == 1) return k.addIntersections(this.e, s, c.e, v), null;
          if (!this.overlaps(s, o, c, v, y)) return null;
          var S = Math.trunc((s + o) / 2), C = Math.trunc((v + y) / 2);
          s < S && (v < C && this.computeIntersectsForChain(s, S, c, v, C, k), C < y && this.computeIntersectsForChain(s, S, c, C, y, k)), S < o && (v < C && this.computeIntersectsForChain(S, o, c, v, C, k), C < y && this.computeIntersectsForChain(S, o, c, C, y, k));
        }
      } }, { key: "overlaps", value: function(t, e, n, i, s) {
        return vt.intersects(this.pts[t], this.pts[e], n.pts[i], n.pts[s]);
      } }, { key: "getStartIndexes", value: function() {
        return this.startIndex;
      } }, { key: "computeIntersects", value: function(t, e) {
        for (var n = 0; n < this.startIndex.length - 1; n++) for (var i = 0; i < t.startIndex.length - 1; i++) this.computeIntersectsForChain(n, t, i, e);
      } }], [{ key: "constructor_", value: function() {
        this.e = null, this.pts = null, this.startIndex = null;
        var t = arguments[0];
        this.e = t, this.pts = t.getCoordinates();
        var e = new Sa();
        this.startIndex = e.getChainStartIndices(this.pts);
      } }]), r;
    }(), ur = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "getDepth", value: function(t, e) {
        return this._depth[t][e];
      } }, { key: "setDepth", value: function(t, e, n) {
        this._depth[t][e] = n;
      } }, { key: "isNull", value: function() {
        if (arguments.length === 0) {
          for (var t = 0; t < 2; t++) for (var e = 0; e < 3; e++) if (this._depth[t][e] !== r.NULL_VALUE) return !1;
          return !0;
        }
        if (arguments.length === 1) {
          var n = arguments[0];
          return this._depth[n][1] === r.NULL_VALUE;
        }
        if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          return this._depth[i][s] === r.NULL_VALUE;
        }
      } }, { key: "normalize", value: function() {
        for (var t = 0; t < 2; t++) if (!this.isNull(t)) {
          var e = this._depth[t][1];
          this._depth[t][2] < e && (e = this._depth[t][2]), e < 0 && (e = 0);
          for (var n = 1; n < 3; n++) {
            var i = 0;
            this._depth[t][n] > e && (i = 1), this._depth[t][n] = i;
          }
        }
      } }, { key: "getDelta", value: function(t) {
        return this._depth[t][q.RIGHT] - this._depth[t][q.LEFT];
      } }, { key: "getLocation", value: function(t, e) {
        return this._depth[t][e] <= 0 ? x.EXTERIOR : x.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var t = arguments[0], e = 0; e < 2; e++) for (var n = 1; n < 3; n++) {
          var i = t.getLocation(e, n);
          i !== x.EXTERIOR && i !== x.INTERIOR || (this.isNull(e, n) ? this._depth[e][n] = r.depthAtLocation(i) : this._depth[e][n] += r.depthAtLocation(i));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          c === x.INTERIOR && this._depth[s][o]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var t = 0; t < 2; t++) for (var e = 0; e < 3; e++) this._depth[t][e] = r.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(t) {
        return t === x.EXTERIOR ? 0 : t === x.INTERIOR ? 1 : r.NULL_VALUE;
      } }]), r;
    }();
    ur.NULL_VALUE = -1;
    var or = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "getDepth", value: function() {
        return this._depth;
      } }, { key: "getCollapsedEdge", value: function() {
        var n = new Array(2).fill(null);
        return n[0] = this.pts[0], n[1] = this.pts[1], new e(n, Ft.toLineLabel(this._label));
      } }, { key: "isIsolated", value: function() {
        return this._isIsolated;
      } }, { key: "getCoordinates", value: function() {
        return this.pts;
      } }, { key: "setIsolated", value: function(n) {
        this._isIsolated = n;
      } }, { key: "setName", value: function(n) {
        this._name = n;
      } }, { key: "equals", value: function(n) {
        if (!(n instanceof e)) return !1;
        var i = n;
        if (this.pts.length !== i.pts.length) return !1;
        for (var s = !0, o = !0, c = this.pts.length, v = 0; v < this.pts.length; v++) if (this.pts[v].equals2D(i.pts[v]) || (s = !1), this.pts[v].equals2D(i.pts[--c]) || (o = !1), !s && !o) return !1;
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
        e.updateIM(this._label, n);
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
        return this._mce === null && (this._mce = new La(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new vt();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, i, s, o) {
        var c = new T(n.getIntersection(o)), v = i, y = n.getEdgeDistance(s, o), k = v + 1;
        if (k < this.pts.length) {
          var S = this.pts[k];
          c.equals2D(S) && (v = k, y = 0);
        }
        this.eiList.add(c, v, y);
      } }, { key: "toString", value: function() {
        var n = new vn();
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
      } }, { key: "addIntersections", value: function(n, i, s) {
        for (var o = 0; o < n.getIntersectionNum(); o++) this.addIntersection(n, i, s, o);
      } }], [{ key: "constructor_", value: function() {
        if (this.pts = null, this._env = null, this.eiList = new Ia(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new ur(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          e.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          this.pts = i, this._label = s;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Na && arguments[0] instanceof Ft)) return L(d(e), "updateIM", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        i.setAtLeastIfValid(n.getLocation(0, q.ON), n.getLocation(1, q.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, q.LEFT), n.getLocation(1, q.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, q.RIGHT), n.getLocation(1, q.RIGHT), 2));
      } }]), e;
    }(Bi), lr = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "setWorkingPrecisionModel", value: function(t) {
        this._workingPrecisionModel = t;
      } }, { key: "insertUniqueEdge", value: function(t) {
        var e = this._edgeList.findEqualEdge(t);
        if (e !== null) {
          var n = e.getLabel(), i = t.getLabel();
          e.isPointwiseEqual(t) || (i = new Ft(t.getLabel())).flip(), n.merge(i);
          var s = r.depthDelta(i), o = e.getDepthDelta() + s;
          e.setDepthDelta(o);
        } else this._edgeList.add(t), t.setDepthDelta(r.depthDelta(t.getLabel()));
      } }, { key: "buildSubgraphs", value: function(t, e) {
        for (var n = new W(), i = t.iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getRightmostCoordinate(), c = new nr(n).getDepth(o);
          s.computeDepth(c), s.findResultEdges(), n.add(s), e.add(s.getDirectedEdges(), s.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(t) {
        for (var e = new W(), n = t.getNodes().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (!i.isVisited()) {
            var s = new bs();
            s.create(i), e.add(s);
          }
        }
        return Le.sort(e, Le.reverseOrder()), e;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(t) {
        if (this._workingNoder !== null) return this._workingNoder;
        var e = new Jn(), n = new _e();
        return n.setPrecisionModel(t), e.setSegmentIntersector(new ka(n)), e;
      } }, { key: "buffer", value: function(t, e) {
        var n = this._workingPrecisionModel;
        n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
        var i = new ca(n, this._bufParams), s = new ga(t, e, i).getCurves();
        if (s.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(s, n), this._graph = new $i(new _a()), this._graph.addEdges(this._edgeList.getEdges());
        var o = this.createSubgraphs(this._graph), c = new Ks(this._geomFact);
        this.buildSubgraphs(o, c);
        var v = c.getPolygons();
        return v.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(v);
      } }, { key: "computeNodedEdges", value: function(t, e) {
        var n = this.getNoder(e);
        n.computeNodes(t);
        for (var i = n.getNodedSubstrings().iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getCoordinates();
          if (o.length !== 2 || !o[0].equals2D(o[1])) {
            var c = s.getData(), v = new or(s.getCoordinates(), new Ft(c));
            this.insertUniqueEdge(v);
          }
        }
      } }, { key: "setNoder", value: function(t) {
        this._workingNoder = t;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new xa();
        var t = arguments[0];
        this._bufParams = t;
      } }, { key: "depthDelta", value: function(t) {
        var e = t.getLocation(0, q.LEFT), n = t.getLocation(0, q.RIGHT);
        return e === x.INTERIOR && n === x.EXTERIOR ? 1 : e === x.EXTERIOR && n === x.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(t) {
        for (var e = new we(), n = new W(); t.hasNext(); ) {
          var i = t.next(), s = e.createLineString(i.getCoordinates());
          n.add(s);
        }
        return e.buildGeometry(n);
      } }]), r;
    }(), Ta = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "rescale", value: function() {
        if (tt(arguments[0], Ht)) for (var t = arguments[0], e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var i = arguments[0], s = 0; s < i.length; s++) i[s].x = i[s].x / this._scaleFactor + this._offsetX, i[s].y = i[s].y / this._scaleFactor + this._offsetY;
          i.length === 2 && i[0].equals2D(i[1]) && At.out.println(i);
        }
      } }, { key: "scale", value: function() {
        if (tt(arguments[0], Ht)) {
          for (var t = arguments[0], e = new W(t.size()), n = t.iterator(); n.hasNext(); ) {
            var i = n.next();
            e.add(new xe(this.scale(i.getCoordinates()), i.getData()));
          }
          return e;
        }
        if (arguments[0] instanceof Array) {
          for (var s = arguments[0], o = new Array(s.length).fill(null), c = 0; c < s.length; c++) o[c] = new T(Math.round((s[c].x - this._offsetX) * this._scaleFactor), Math.round((s[c].y - this._offsetY) * this._scaleFactor), s[c].getZ());
          var v = _t.removeRepeatedPoints(o);
          return v;
        }
      } }, { key: "isIntegerPrecision", value: function() {
        return this._scaleFactor === 1;
      } }, { key: "getNodedSubstrings", value: function() {
        var t = this._noder.getNodedSubstrings();
        return this._isScaled && this.rescale(t), t;
      } }, { key: "computeNodes", value: function(t) {
        var e = t;
        this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
      } }, { key: "interfaces_", get: function() {
        return [Kn];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var t = arguments[0], e = arguments[1];
          r.constructor_.call(this, t, e, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1];
          this._noder = n, this._scaleFactor = i, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), r;
    }(), hr = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) {
          var e = t.next(), n = e.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var i = arguments[0], s = arguments[1], o = s.iterator(); o.hasNext(); ) for (var c = o.next(), v = c.getCoordinates(), y = 1; y < v.length - 1; y++) if (v[y].equals(i)) throw new Et("found endpt/interior pt intersection at index " + y + " :pt " + i);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) for (var e = t.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.checkInteriorIntersections(e, i);
        }
        else if (arguments.length === 2) for (var s = arguments[0], o = arguments[1], c = s.getCoordinates(), v = o.getCoordinates(), y = 0; y < c.length - 1; y++) for (var k = 0; k < v.length - 1; k++) this.checkInteriorIntersections(s, y, o, k);
        else if (arguments.length === 4) {
          var S = arguments[0], C = arguments[1], F = arguments[2], A = arguments[3];
          if (S === F && C === A) return null;
          var Z = S.getCoordinates()[C], j = S.getCoordinates()[C + 1], J = F.getCoordinates()[A], ct = F.getCoordinates()[A + 1];
          if (this._li.computeIntersection(Z, j, J, ct), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, Z, j) || this.hasInteriorIntersection(this._li, J, ct))) throw new Et("found non-noded intersection at " + Z + "-" + j + " and " + J + "-" + ct);
        }
      } }, { key: "checkValid", value: function() {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
      } }, { key: "checkCollapses", value: function() {
        if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) {
          var e = t.next();
          this.checkCollapses(e);
        }
        else if (arguments.length === 1) for (var n = arguments[0], i = n.getCoordinates(), s = 0; s < i.length - 2; s++) this.checkCollapse(i[s], i[s + 1], i[s + 2]);
      } }, { key: "hasInteriorIntersection", value: function(t, e, n) {
        for (var i = 0; i < t.getIntersectionNum(); i++) {
          var s = t.getIntersection(i);
          if (!s.equals(e) && !s.equals(n)) return !0;
        }
        return !1;
      } }, { key: "checkCollapse", value: function(t, e, n) {
        if (t.equals(n)) throw new Et("found non-noded collapse at " + r.fact.createLineString([t, e, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new _e(), this._segStrings = null;
        var t = arguments[0];
        this._segStrings = t;
      } }]), r;
    }();
    hr.fact = new we();
    var ei = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "intersectsScaled", value: function(t, e) {
        var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), s = Math.min(t.y, e.y), o = Math.max(t.y, e.y), c = this._maxx < n || this._minx > i || this._maxy < s || this._miny > o;
        if (c) return !1;
        var v = this.intersectsToleranceSquare(t, e);
        return it.isTrue(!(c && v), "Found bad envelope test"), v;
      } }, { key: "initCorners", value: function(t) {
        var e = 0.5;
        this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new T(this._maxx, this._maxy), this._corner[1] = new T(this._minx, this._maxy), this._corner[2] = new T(this._minx, this._miny), this._corner[3] = new T(this._maxx, this._miny);
      } }, { key: "intersects", value: function(t, e) {
        return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
      } }, { key: "scale", value: function(t) {
        return Math.round(t * this._scaleFactor);
      } }, { key: "getCoordinate", value: function() {
        return this._originalPt;
      } }, { key: "copyScaled", value: function(t, e) {
        e.x = this.scale(t.x), e.y = this.scale(t.y);
      } }, { key: "getSafeEnvelope", value: function() {
        if (this._safeEnv === null) {
          var t = r.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
          this._safeEnv = new vt(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
        }
        return this._safeEnv;
      } }, { key: "intersectsPixelClosure", value: function(t, e) {
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
      } }, { key: "intersectsToleranceSquare", value: function(t, e) {
        var n = !1, i = !1;
        return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !i) || !!t.equals(this._pt) || !!e.equals(this._pt))));
      } }, { key: "addSnappedNode", value: function(t, e) {
        var n = t.getCoordinate(e), i = t.getCoordinate(e + 1);
        return !!this.intersects(n, i) && (t.addIntersection(this.getCoordinate(), e), !0);
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
        var t = arguments[0], e = arguments[1], n = arguments[2];
        if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0) throw new D("Scale factor must be non-zero");
        e !== 1 && (this._pt = new T(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new T(), this._p1Scaled = new T()), this.initCorners(this._pt);
      } }]), r;
    }();
    ei.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var Ca = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "select", value: function() {
        if (arguments.length !== 1) {
          if (arguments.length === 2) {
            var t = arguments[0], e = arguments[1];
            t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this.selectedSegment = new bt();
      } }]), r;
    }(), cr = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var t = arguments[0];
          return this.snap(t, null, -1);
        }
        if (arguments.length === 3) {
          var e = arguments[0], n = arguments[1], i = arguments[2], s = e.getSafeEnvelope(), o = new fr(e, n, i);
          return this._index.query(s, new (function() {
            function c() {
              a(this, c);
            }
            return h(c, [{ key: "interfaces_", get: function() {
              return [Wi];
            } }, { key: "visitItem", value: function(v) {
              v.select(s, o);
            } }]), c;
          }())()), o.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var t = arguments[0];
        this._index = t;
      } }]), r;
    }(), fr = function(r) {
      g(e, r);
      var t = E(e);
      function e() {
        var n;
        return a(this, e), n = t.call(this), e.constructor_.apply(m(n), arguments), n;
      }
      return h(e, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof Ki)) return L(d(e.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = n.getContext();
        if (this._parentEdge === s && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(s, i);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], i = arguments[1], s = arguments[2];
        this._hotPixel = n, this._parentEdge = i, this._hotPixelVertexIndex = s;
      } }]), e;
    }(Ca);
    cr.HotPixelSnapAction = fr;
    var Ra = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "processIntersections", value: function(t, e, n, i) {
        if (t === n && e === i) return null;
        var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], c = n.getCoordinates()[i], v = n.getCoordinates()[i + 1];
        if (this._li.computeIntersection(s, o, c, v), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var y = 0; y < this._li.getIntersectionNum(); y++) this._interiorIntersections.add(this._li.getIntersection(y));
          t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [ar];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var t = arguments[0];
        this._li = t, this._interiorIntersections = new W();
      } }]), r;
    }(), Oa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "checkCorrectness", value: function(t) {
        var e = xe.getNodedSubstrings(t), n = new hr(e);
        try {
          n.checkValid();
        } catch (i) {
          if (!(i instanceof G)) throw i;
          i.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return xe.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(t, e) {
        var n = this.findInteriorIntersections(t, e);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
      } }, { key: "findInteriorIntersections", value: function(t, e) {
        var n = new Ra(e);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (tt(arguments[0], Ht)) for (var t = arguments[0], e = t.iterator(); e.hasNext(); ) {
          var n = e.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof xe) for (var i = arguments[0], s = i.getCoordinates(), o = 0; o < s.length; o++) {
          var c = new ei(s[o], this._scaleFactor, this._li), v = this._pointSnapper.snap(c, i, o);
          v && i.addIntersection(s[o], o);
        }
      } }, { key: "computeNodes", value: function(t) {
        this._nodedSegStrings = t, this._noder = new Jn(), this._pointSnapper = new cr(this._noder.getIndex()), this.snapRound(t, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(t) {
        for (var e = t.iterator(); e.hasNext(); ) {
          var n = e.next(), i = new ei(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(i);
        }
      } }, { key: "interfaces_", get: function() {
        return [Kn];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var t = arguments[0];
        this._pm = t, this._li = new _e(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
      } }]), r;
    }(), Re = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return h(r, [{ key: "bufferFixedPrecision", value: function(t) {
        var e = new Ta(new Oa(new Bt(1)), t.getScale()), n = new lr(this._bufParams);
        n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var t = r.MAX_PRECISION_DIGITS; t >= 0; t--) {
            try {
              this.bufferReducedPrecision(t);
            } catch (s) {
              if (!(s instanceof te)) throw s;
              this._saveException = s;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var e = arguments[0], n = r.precisionScaleFactor(this._argGeom, this._distance, e), i = new Bt(n);
          this.bufferFixedPrecision(i);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var t = this._argGeom.getFactory().getPrecisionModel();
        t.getType() === Bt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(t) {
        this._bufParams.setQuadrantSegments(t);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var t = new lr(this._bufParams);
          this._resultGeometry = t.buffer(this._argGeom, this._distance);
        } catch (e) {
          if (!(e instanceof Et)) throw e;
          this._saveException = e;
        }
      } }, { key: "getResultGeometry", value: function(t) {
        return this._distance = t, this.computeGeometry(), this._resultGeometry;
      } }, { key: "setEndCapStyle", value: function(t) {
        this._bufParams.setEndCapStyle(t);
      } }], [{ key: "constructor_", value: function() {
        if (this._argGeom = null, this._distance = null, this._bufParams = new P(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
          var t = arguments[0];
          this._argGeom = t;
        } else if (arguments.length === 2) {
          var e = arguments[0], n = arguments[1];
          this._argGeom = e, this._bufParams = n;
        }
      } }, { key: "bufferOp", value: function() {
        if (arguments.length === 2) {
          var t = arguments[0], e = arguments[1], n = new r(t), i = n.getResultGeometry(e);
          return i;
        }
        if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof $ && typeof arguments[1] == "number") {
            var s = arguments[0], o = arguments[1], c = arguments[2], v = new r(s);
            v.setQuadrantSegments(c);
            var y = v.getResultGeometry(o);
            return y;
          }
          if (arguments[2] instanceof P && arguments[0] instanceof $ && typeof arguments[1] == "number") {
            var k = arguments[0], S = arguments[1], C = arguments[2], F = new r(k, C), A = F.getResultGeometry(S);
            return A;
          }
        } else if (arguments.length === 4) {
          var Z = arguments[0], j = arguments[1], J = arguments[2], ct = arguments[3], mt = new r(Z);
          mt.setQuadrantSegments(J), mt.setEndCapStyle(ct);
          var Nt = mt.getResultGeometry(j);
          return Nt;
        }
      } }, { key: "precisionScaleFactor", value: function(t, e, n) {
        var i = t.getEnvelopeInternal(), s = ze.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (e > 0 ? e : 0), o = n - Math.trunc(Math.log(s) / Math.log(10) + 1);
        return Math.pow(10, o);
      } }]), r;
    }();
    Re.CAP_ROUND = P.CAP_ROUND, Re.CAP_BUTT = P.CAP_FLAT, Re.CAP_FLAT = P.CAP_FLAT, Re.CAP_SQUARE = P.CAP_SQUARE, Re.MAX_PRECISION_DIGITS = 12;
    var ba = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], gr = function() {
      function r(t) {
        a(this, r), this.geometryFactory = t || new we();
      }
      return h(r, [{ key: "read", value: function(t) {
        var e, n = (e = typeof t == "string" ? JSON.parse(t) : t).type;
        if (!qt[n]) throw new Error("Unknown GeoJSON type: " + e.type);
        return ba.indexOf(n) !== -1 ? qt[n].call(this, e.coordinates) : n === "GeometryCollection" ? qt[n].call(this, e.geometries) : qt[n].call(this, e);
      } }, { key: "write", value: function(t) {
        var e = t.getGeometryType();
        if (!Wt[e]) throw new Error("Geometry is not supported");
        return Wt[e].call(this, t);
      } }]), r;
    }(), qt = { Feature: function(r) {
      var t = {};
      for (var e in r) t[e] = r[e];
      if (r.geometry) {
        var n = r.geometry.type;
        if (!qt[n]) throw new Error("Unknown GeoJSON type: " + r.type);
        t.geometry = this.read(r.geometry);
      }
      return r.bbox && (t.bbox = qt.bbox.call(this, r.bbox)), t;
    }, FeatureCollection: function(r) {
      var t = {};
      if (r.features) {
        t.features = [];
        for (var e = 0; e < r.features.length; ++e) t.features.push(this.read(r.features[e]));
      }
      return r.bbox && (t.bbox = this.parse.bbox.call(this, r.bbox)), t;
    }, coordinates: function(r) {
      for (var t = [], e = 0; e < r.length; ++e) {
        var n = r[e];
        t.push(_(T, M(n)));
      }
      return t;
    }, bbox: function(r) {
      return this.geometryFactory.createLinearRing([new T(r[0], r[1]), new T(r[2], r[1]), new T(r[2], r[3]), new T(r[0], r[3]), new T(r[0], r[1])]);
    }, Point: function(r) {
      var t = _(T, M(r));
      return this.geometryFactory.createPoint(t);
    }, MultiPoint: function(r) {
      for (var t = [], e = 0; e < r.length; ++e) t.push(qt.Point.call(this, r[e]));
      return this.geometryFactory.createMultiPoint(t);
    }, LineString: function(r) {
      var t = qt.coordinates.call(this, r);
      return this.geometryFactory.createLineString(t);
    }, MultiLineString: function(r) {
      for (var t = [], e = 0; e < r.length; ++e) t.push(qt.LineString.call(this, r[e]));
      return this.geometryFactory.createMultiLineString(t);
    }, Polygon: function(r) {
      for (var t = qt.coordinates.call(this, r[0]), e = this.geometryFactory.createLinearRing(t), n = [], i = 1; i < r.length; ++i) {
        var s = r[i], o = qt.coordinates.call(this, s), c = this.geometryFactory.createLinearRing(o);
        n.push(c);
      }
      return this.geometryFactory.createPolygon(e, n);
    }, MultiPolygon: function(r) {
      for (var t = [], e = 0; e < r.length; ++e) {
        var n = r[e];
        t.push(qt.Polygon.call(this, n));
      }
      return this.geometryFactory.createMultiPolygon(t);
    }, GeometryCollection: function(r) {
      for (var t = [], e = 0; e < r.length; ++e) {
        var n = r[e];
        t.push(this.read(n));
      }
      return this.geometryFactory.createGeometryCollection(t);
    } }, Wt = { coordinate: function(r) {
      var t = [r.x, r.y];
      return r.z && t.push(r.z), r.m && t.push(r.m), t;
    }, Point: function(r) {
      return { type: "Point", coordinates: Wt.coordinate.call(this, r.getCoordinate()) };
    }, MultiPoint: function(r) {
      for (var t = [], e = 0; e < r._geometries.length; ++e) {
        var n = r._geometries[e], i = Wt.Point.call(this, n);
        t.push(i.coordinates);
      }
      return { type: "MultiPoint", coordinates: t };
    }, LineString: function(r) {
      for (var t = [], e = r.getCoordinates(), n = 0; n < e.length; ++n) {
        var i = e[n];
        t.push(Wt.coordinate.call(this, i));
      }
      return { type: "LineString", coordinates: t };
    }, MultiLineString: function(r) {
      for (var t = [], e = 0; e < r._geometries.length; ++e) {
        var n = r._geometries[e], i = Wt.LineString.call(this, n);
        t.push(i.coordinates);
      }
      return { type: "MultiLineString", coordinates: t };
    }, Polygon: function(r) {
      var t = [], e = Wt.LineString.call(this, r._shell);
      t.push(e.coordinates);
      for (var n = 0; n < r._holes.length; ++n) {
        var i = r._holes[n], s = Wt.LineString.call(this, i);
        t.push(s.coordinates);
      }
      return { type: "Polygon", coordinates: t };
    }, MultiPolygon: function(r) {
      for (var t = [], e = 0; e < r._geometries.length; ++e) {
        var n = r._geometries[e], i = Wt.Polygon.call(this, n);
        t.push(i.coordinates);
      }
      return { type: "MultiPolygon", coordinates: t };
    }, GeometryCollection: function(r) {
      for (var t = [], e = 0; e < r._geometries.length; ++e) {
        var n = r._geometries[e], i = n.getGeometryType();
        t.push(Wt[i].call(this, n));
      }
      return { type: "GeometryCollection", geometries: t };
    } };
    return { BufferOp: Re, GeoJSONReader: function() {
      function r(t) {
        a(this, r), this.parser = new gr(t || new we());
      }
      return h(r, [{ key: "read", value: function(t) {
        return this.parser.read(t);
      } }]), r;
    }(), GeoJSONWriter: function() {
      function r() {
        a(this, r), this.parser = new gr(this.geometryFactory);
      }
      return h(r, [{ key: "write", value: function(t) {
        return this.parser.write(t);
      } }]), r;
    }() };
  });
})(ls);
var Gu = ls.exports;
const qu = /* @__PURE__ */ Fu(Gu);
function ge() {
  return new Rn();
}
function Rn() {
  this.reset();
}
Rn.prototype = {
  constructor: Rn,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(l) {
    Ar(xn, l, this.t), Ar(this, xn.s, this.s), this.s ? this.t += xn.t : this.s = xn.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var xn = new Rn();
function Ar(l, u, a) {
  var f = l.s = u + a, h = f - u, g = f - h;
  l.t = u - g + (a - h);
}
var gt = 1e-6, lt = Math.PI, Qt = lt / 2, Dr = lt / 4, Kt = lt * 2, oe = 180 / lt, Yt = lt / 180, It = Math.abs, Yu = Math.atan, De = Math.atan2, dt = Math.cos, pt = Math.sin, qe = Math.sqrt;
function hs(l) {
  return l > 1 ? 0 : l < -1 ? lt : Math.acos(l);
}
function Ie(l) {
  return l > 1 ? Qt : l < -1 ? -Qt : Math.asin(l);
}
function Ke() {
}
function On(l, u) {
  l && Gr.hasOwnProperty(l.type) && Gr[l.type](l, u);
}
var Fr = {
  Feature: function(l, u) {
    On(l.geometry, u);
  },
  FeatureCollection: function(l, u) {
    for (var a = l.features, f = -1, h = a.length; ++f < h; ) On(a[f].geometry, u);
  }
}, Gr = {
  Sphere: function(l, u) {
    u.sphere();
  },
  Point: function(l, u) {
    l = l.coordinates, u.point(l[0], l[1], l[2]);
  },
  MultiPoint: function(l, u) {
    for (var a = l.coordinates, f = -1, h = a.length; ++f < h; ) l = a[f], u.point(l[0], l[1], l[2]);
  },
  LineString: function(l, u) {
    di(l.coordinates, u, 0);
  },
  MultiLineString: function(l, u) {
    for (var a = l.coordinates, f = -1, h = a.length; ++f < h; ) di(a[f], u, 0);
  },
  Polygon: function(l, u) {
    qr(l.coordinates, u);
  },
  MultiPolygon: function(l, u) {
    for (var a = l.coordinates, f = -1, h = a.length; ++f < h; ) qr(a[f], u);
  },
  GeometryCollection: function(l, u) {
    for (var a = l.geometries, f = -1, h = a.length; ++f < h; ) On(a[f], u);
  }
};
function di(l, u, a) {
  var f = -1, h = l.length - a, g;
  for (u.lineStart(); ++f < h; ) g = l[f], u.point(g[0], g[1], g[2]);
  u.lineEnd();
}
function qr(l, u) {
  var a = -1, f = l.length;
  for (u.polygonStart(); ++a < f; ) di(l[a], u, 1);
  u.polygonEnd();
}
function zu(l, u) {
  l && Fr.hasOwnProperty(l.type) ? Fr[l.type](l, u) : On(l, u);
}
ge();
ge();
function pi(l) {
  return [De(l[1], l[0]), Ie(l[2])];
}
function Fe(l) {
  var u = l[0], a = l[1], f = dt(a);
  return [f * dt(u), f * pt(u), pt(a)];
}
function kn(l, u) {
  return l[0] * u[0] + l[1] * u[1] + l[2] * u[2];
}
function bn(l, u) {
  return [l[1] * u[2] - l[2] * u[1], l[2] * u[0] - l[0] * u[2], l[0] * u[1] - l[1] * u[0]];
}
function oi(l, u) {
  l[0] += u[0], l[1] += u[1], l[2] += u[2];
}
function En(l, u) {
  return [l[0] * u, l[1] * u, l[2] * u];
}
function _i(l) {
  var u = qe(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]);
  l[0] /= u, l[1] /= u, l[2] /= u;
}
ge();
function cs(l, u) {
  function a(f, h) {
    return f = l(f, h), u(f[0], f[1]);
  }
  return l.invert && u.invert && (a.invert = function(f, h) {
    return f = u.invert(f, h), f && l.invert(f[0], f[1]);
  }), a;
}
function xi(l, u) {
  return [l > lt ? l - Kt : l < -lt ? l + Kt : l, u];
}
xi.invert = xi;
function Bu(l, u, a) {
  return (l %= Kt) ? u || a ? cs(zr(l), Br(u, a)) : zr(l) : u || a ? Br(u, a) : xi;
}
function Yr(l) {
  return function(u, a) {
    return u += l, [u > lt ? u - Kt : u < -lt ? u + Kt : u, a];
  };
}
function zr(l) {
  var u = Yr(l);
  return u.invert = Yr(-l), u;
}
function Br(l, u) {
  var a = dt(l), f = pt(l), h = dt(u), g = pt(u);
  function d(p, w) {
    var _ = dt(w), N = dt(p) * _, m = pt(p) * _, I = pt(w), E = I * a + N * f;
    return [
      De(m * h - E * g, N * a - I * f),
      Ie(E * h + m * g)
    ];
  }
  return d.invert = function(p, w) {
    var _ = dt(w), N = dt(p) * _, m = pt(p) * _, I = pt(w), E = I * h - m * g;
    return [
      De(m * h + I * g, N * a + E * f),
      Ie(E * a - N * f)
    ];
  }, d;
}
function Xu(l, u, a, f, h, g) {
  if (a) {
    var d = dt(u), p = pt(u), w = f * a;
    h == null ? (h = u + f * Kt, g = u - w / 2) : (h = Xr(d, h), g = Xr(d, g), (f > 0 ? h < g : h > g) && (h += f * Kt));
    for (var _, N = h; f > 0 ? N > g : N < g; N -= w)
      _ = pi([d, -p * dt(N), -p * pt(N)]), l.point(_[0], _[1]);
  }
}
function Xr(l, u) {
  u = Fe(u), u[0] -= l, _i(u);
  var a = hs(-u[1]);
  return ((-u[2] < 0 ? -a : a) + Kt - gt) % Kt;
}
function fs() {
  var l = [], u;
  return {
    point: function(a, f) {
      u.push([a, f]);
    },
    lineStart: function() {
      l.push(u = []);
    },
    lineEnd: Ke,
    rejoin: function() {
      l.length > 1 && l.push(l.pop().concat(l.shift()));
    },
    result: function() {
      var a = l;
      return l = [], u = null, a;
    }
  };
}
function Uu(l, u, a, f, h, g) {
  var d = l[0], p = l[1], w = u[0], _ = u[1], N = 0, m = 1, I = w - d, E = _ - p, L;
  if (L = a - d, !(!I && L > 0)) {
    if (L /= I, I < 0) {
      if (L < N) return;
      L < m && (m = L);
    } else if (I > 0) {
      if (L > m) return;
      L > N && (N = L);
    }
    if (L = h - d, !(!I && L < 0)) {
      if (L /= I, I < 0) {
        if (L > m) return;
        L > N && (N = L);
      } else if (I > 0) {
        if (L < N) return;
        L < m && (m = L);
      }
      if (L = f - p, !(!E && L > 0)) {
        if (L /= E, E < 0) {
          if (L < N) return;
          L < m && (m = L);
        } else if (E > 0) {
          if (L > m) return;
          L > N && (N = L);
        }
        if (L = g - p, !(!E && L < 0)) {
          if (L /= E, E < 0) {
            if (L > m) return;
            L > N && (N = L);
          } else if (E > 0) {
            if (L < N) return;
            L < m && (m = L);
          }
          return N > 0 && (l[0] = d + N * I, l[1] = p + N * E), m < 1 && (u[0] = d + m * I, u[1] = p + m * E), !0;
        }
      }
    }
  }
}
function Sn(l, u) {
  return It(l[0] - u[0]) < gt && It(l[1] - u[1]) < gt;
}
function In(l, u, a, f) {
  this.x = l, this.z = u, this.o = a, this.e = f, this.v = !1, this.n = this.p = null;
}
function gs(l, u, a, f, h) {
  var g = [], d = [], p, w;
  if (l.forEach(function(L) {
    if (!((M = L.length - 1) <= 0)) {
      var M, R = L[0], O = L[M], b;
      if (Sn(R, O)) {
        for (h.lineStart(), p = 0; p < M; ++p) h.point((R = L[p])[0], R[1]);
        h.lineEnd();
        return;
      }
      g.push(b = new In(R, L, null, !0)), d.push(b.o = new In(R, null, b, !1)), g.push(b = new In(O, L, null, !1)), d.push(b.o = new In(O, null, b, !0));
    }
  }), !!g.length) {
    for (d.sort(u), Ur(g), Ur(d), p = 0, w = d.length; p < w; ++p)
      d[p].e = a = !a;
    for (var _ = g[0], N, m; ; ) {
      for (var I = _, E = !0; I.v; ) if ((I = I.n) === _) return;
      N = I.z, h.lineStart();
      do {
        if (I.v = I.o.v = !0, I.e) {
          if (E)
            for (p = 0, w = N.length; p < w; ++p) h.point((m = N[p])[0], m[1]);
          else
            f(I.x, I.n.x, 1, h);
          I = I.n;
        } else {
          if (E)
            for (N = I.p.z, p = N.length - 1; p >= 0; --p) h.point((m = N[p])[0], m[1]);
          else
            f(I.x, I.p.x, -1, h);
          I = I.p;
        }
        I = I.o, N = I.z, E = !E;
      } while (!I.v);
      h.lineEnd();
    }
  }
}
function Ur(l) {
  if (u = l.length) {
    for (var u, a = 0, f = l[0], h; ++a < u; )
      f.n = h = l[a], h.p = f, f = h;
    f.n = h = l[0], h.p = f;
  }
}
function vs(l, u) {
  return l < u ? -1 : l > u ? 1 : l >= u ? 0 : NaN;
}
function Vu(l) {
  return l.length === 1 && (l = Hu(l)), {
    left: function(u, a, f, h) {
      for (f == null && (f = 0), h == null && (h = u.length); f < h; ) {
        var g = f + h >>> 1;
        l(u[g], a) < 0 ? f = g + 1 : h = g;
      }
      return f;
    },
    right: function(u, a, f, h) {
      for (f == null && (f = 0), h == null && (h = u.length); f < h; ) {
        var g = f + h >>> 1;
        l(u[g], a) > 0 ? h = g : f = g + 1;
      }
      return f;
    }
  };
}
function Hu(l) {
  return function(u, a) {
    return vs(l(u), a);
  };
}
Vu(vs);
function ys(l) {
  for (var u = l.length, a, f = -1, h = 0, g, d; ++f < u; ) h += l[f].length;
  for (g = new Array(h); --u >= 0; )
    for (d = l[u], a = d.length; --a >= 0; )
      g[--h] = d[a];
  return g;
}
var Je = 1e9, Nn = -Je;
function Zu(l, u, a, f) {
  function h(_, N) {
    return l <= _ && _ <= a && u <= N && N <= f;
  }
  function g(_, N, m, I) {
    var E = 0, L = 0;
    if (_ == null || (E = d(_, m)) !== (L = d(N, m)) || w(_, N) < 0 ^ m > 0)
      do
        I.point(E === 0 || E === 3 ? l : a, E > 1 ? f : u);
      while ((E = (E + m + 4) % 4) !== L);
    else
      I.point(N[0], N[1]);
  }
  function d(_, N) {
    return It(_[0] - l) < gt ? N > 0 ? 0 : 3 : It(_[0] - a) < gt ? N > 0 ? 2 : 1 : It(_[1] - u) < gt ? N > 0 ? 1 : 0 : N > 0 ? 3 : 2;
  }
  function p(_, N) {
    return w(_.x, N.x);
  }
  function w(_, N) {
    var m = d(_, 1), I = d(N, 1);
    return m !== I ? m - I : m === 0 ? N[1] - _[1] : m === 1 ? _[0] - N[0] : m === 2 ? _[1] - N[1] : N[0] - _[0];
  }
  return function(_) {
    var N = _, m = fs(), I, E, L, M, R, O, b, P, G, D, B, X = {
      point: V,
      lineStart: rt,
      lineEnd: ut,
      polygonStart: st,
      polygonEnd: et
    };
    function V(nt, ot) {
      h(nt, ot) && N.point(nt, ot);
    }
    function U() {
      for (var nt = 0, ot = 0, ft = E.length; ot < ft; ++ot)
        for (var xt = E[ot], kt = 1, H = xt.length, St = xt[0], Et, Ct, it = St[0], Jt = St[1]; kt < H; ++kt)
          Et = it, Ct = Jt, St = xt[kt], it = St[0], Jt = St[1], Ct <= f ? Jt > f && (it - Et) * (f - Ct) > (Jt - Ct) * (l - Et) && ++nt : Jt <= f && (it - Et) * (f - Ct) < (Jt - Ct) * (l - Et) && --nt;
      return nt;
    }
    function st() {
      N = m, I = [], E = [], B = !0;
    }
    function et() {
      var nt = U(), ot = B && nt, ft = (I = ys(I)).length;
      (ot || ft) && (_.polygonStart(), ot && (_.lineStart(), g(null, null, 1, _), _.lineEnd()), ft && gs(I, p, nt, g, _), _.polygonEnd()), N = _, I = E = L = null;
    }
    function rt() {
      X.point = z, E && E.push(L = []), D = !0, G = !1, b = P = NaN;
    }
    function ut() {
      I && (z(M, R), O && G && m.rejoin(), I.push(m.result())), X.point = V, G && N.lineEnd();
    }
    function z(nt, ot) {
      var ft = h(nt, ot);
      if (E && L.push([nt, ot]), D)
        M = nt, R = ot, O = ft, D = !1, ft && (N.lineStart(), N.point(nt, ot));
      else if (ft && G) N.point(nt, ot);
      else {
        var xt = [b = Math.max(Nn, Math.min(Je, b)), P = Math.max(Nn, Math.min(Je, P))], kt = [nt = Math.max(Nn, Math.min(Je, nt)), ot = Math.max(Nn, Math.min(Je, ot))];
        Uu(xt, kt, l, u, a, f) ? (G || (N.lineStart(), N.point(xt[0], xt[1])), N.point(kt[0], kt[1]), ft || N.lineEnd(), B = !1) : ft && (N.lineStart(), N.point(nt, ot), B = !1);
      }
      b = nt, P = ot, G = ft;
    }
    return X;
  };
}
var li = ge();
function $u(l, u) {
  var a = u[0], f = u[1], h = [pt(a), -dt(a), 0], g = 0, d = 0;
  li.reset();
  for (var p = 0, w = l.length; p < w; ++p)
    if (N = (_ = l[p]).length)
      for (var _, N, m = _[N - 1], I = m[0], E = m[1] / 2 + Dr, L = pt(E), M = dt(E), R = 0; R < N; ++R, I = b, L = G, M = D, m = O) {
        var O = _[R], b = O[0], P = O[1] / 2 + Dr, G = pt(P), D = dt(P), B = b - I, X = B >= 0 ? 1 : -1, V = X * B, U = V > lt, st = L * G;
        if (li.add(De(st * X * pt(V), M * D + st * dt(V))), g += U ? B + X * Kt : B, U ^ I >= a ^ b >= a) {
          var et = bn(Fe(m), Fe(O));
          _i(et);
          var rt = bn(h, et);
          _i(rt);
          var ut = (U ^ B >= 0 ? -1 : 1) * Ie(rt[2]);
          (f > ut || f === ut && (et[0] || et[1])) && (d += U ^ B >= 0 ? 1 : -1);
        }
      }
  return (g < -gt || g < gt && li < -gt) ^ d & 1;
}
ge();
function Vr(l) {
  return l;
}
ge();
ge();
var Ge = 1 / 0, Mn = Ge, rn = -Ge, Pn = rn, Hr = {
  point: ju,
  lineStart: Ke,
  lineEnd: Ke,
  polygonStart: Ke,
  polygonEnd: Ke,
  result: function() {
    var l = [[Ge, Mn], [rn, Pn]];
    return rn = Pn = -(Mn = Ge = 1 / 0), l;
  }
};
function ju(l, u) {
  l < Ge && (Ge = l), l > rn && (rn = l), u < Mn && (Mn = u), u > Pn && (Pn = u);
}
ge();
function ms(l, u, a, f) {
  return function(h, g) {
    var d = u(g), p = h.invert(f[0], f[1]), w = fs(), _ = u(w), N = !1, m, I, E, L = {
      point: M,
      lineStart: O,
      lineEnd: b,
      polygonStart: function() {
        L.point = P, L.lineStart = G, L.lineEnd = D, I = [], m = [];
      },
      polygonEnd: function() {
        L.point = M, L.lineStart = O, L.lineEnd = b, I = ys(I);
        var B = $u(m, p);
        I.length ? (N || (g.polygonStart(), N = !0), gs(I, Qu, B, a, g)) : B && (N || (g.polygonStart(), N = !0), g.lineStart(), a(null, null, 1, g), g.lineEnd()), N && (g.polygonEnd(), N = !1), I = m = null;
      },
      sphere: function() {
        g.polygonStart(), g.lineStart(), a(null, null, 1, g), g.lineEnd(), g.polygonEnd();
      }
    };
    function M(B, X) {
      var V = h(B, X);
      l(B = V[0], X = V[1]) && g.point(B, X);
    }
    function R(B, X) {
      var V = h(B, X);
      d.point(V[0], V[1]);
    }
    function O() {
      L.point = R, d.lineStart();
    }
    function b() {
      L.point = M, d.lineEnd();
    }
    function P(B, X) {
      E.push([B, X]);
      var V = h(B, X);
      _.point(V[0], V[1]);
    }
    function G() {
      _.lineStart(), E = [];
    }
    function D() {
      P(E[0][0], E[0][1]), _.lineEnd();
      var B = _.clean(), X = w.result(), V, U = X.length, st, et, rt;
      if (E.pop(), m.push(E), E = null, !!U) {
        if (B & 1) {
          if (et = X[0], (st = et.length - 1) > 0) {
            for (N || (g.polygonStart(), N = !0), g.lineStart(), V = 0; V < st; ++V) g.point((rt = et[V])[0], rt[1]);
            g.lineEnd();
          }
          return;
        }
        U > 1 && B & 2 && X.push(X.pop().concat(X.shift())), I.push(X.filter(Wu));
      }
    }
    return L;
  };
}
function Wu(l) {
  return l.length > 1;
}
function Qu(l, u) {
  return ((l = l.x)[0] < 0 ? l[1] - Qt - gt : Qt - l[1]) - ((u = u.x)[0] < 0 ? u[1] - Qt - gt : Qt - u[1]);
}
const Zr = ms(
  function() {
    return !0;
  },
  Ku,
  to,
  [-lt, -Qt]
);
function Ku(l) {
  var u = NaN, a = NaN, f = NaN, h;
  return {
    lineStart: function() {
      l.lineStart(), h = 1;
    },
    point: function(g, d) {
      var p = g > 0 ? lt : -lt, w = It(g - u);
      It(w - lt) < gt ? (l.point(u, a = (a + d) / 2 > 0 ? Qt : -Qt), l.point(f, a), l.lineEnd(), l.lineStart(), l.point(p, a), l.point(g, a), h = 0) : f !== p && w >= lt && (It(u - f) < gt && (u -= f * gt), It(g - p) < gt && (g -= p * gt), a = Ju(u, a, g, d), l.point(f, a), l.lineEnd(), l.lineStart(), l.point(p, a), h = 0), l.point(u = g, a = d), f = p;
    },
    lineEnd: function() {
      l.lineEnd(), u = a = NaN;
    },
    clean: function() {
      return 2 - h;
    }
  };
}
function Ju(l, u, a, f) {
  var h, g, d = pt(l - a);
  return It(d) > gt ? Yu((pt(u) * (g = dt(f)) * pt(a) - pt(f) * (h = dt(u)) * pt(l)) / (h * g * d)) : (u + f) / 2;
}
function to(l, u, a, f) {
  var h;
  if (l == null)
    h = a * Qt, f.point(-lt, h), f.point(0, h), f.point(lt, h), f.point(lt, 0), f.point(lt, -h), f.point(0, -h), f.point(-lt, -h), f.point(-lt, 0), f.point(-lt, h);
  else if (It(l[0] - u[0]) > gt) {
    var g = l[0] < u[0] ? lt : -lt;
    h = a * g / 2, f.point(-g, h), f.point(0, h), f.point(g, h);
  } else
    f.point(u[0], u[1]);
}
function eo(l, u) {
  var a = dt(l), f = a > 0, h = It(a) > gt;
  function g(N, m, I, E) {
    Xu(E, l, u, I, N, m);
  }
  function d(N, m) {
    return dt(N) * dt(m) > a;
  }
  function p(N) {
    var m, I, E, L, M;
    return {
      lineStart: function() {
        L = E = !1, M = 1;
      },
      point: function(R, O) {
        var b = [R, O], P, G = d(R, O), D = f ? G ? 0 : _(R, O) : G ? _(R + (R < 0 ? lt : -lt), O) : 0;
        if (!m && (L = E = G) && N.lineStart(), G !== E && (P = w(m, b), (!P || Sn(m, P) || Sn(b, P)) && (b[0] += gt, b[1] += gt, G = d(b[0], b[1]))), G !== E)
          M = 0, G ? (N.lineStart(), P = w(b, m), N.point(P[0], P[1])) : (P = w(m, b), N.point(P[0], P[1]), N.lineEnd()), m = P;
        else if (h && m && f ^ G) {
          var B;
          !(D & I) && (B = w(b, m, !0)) && (M = 0, f ? (N.lineStart(), N.point(B[0][0], B[0][1]), N.point(B[1][0], B[1][1]), N.lineEnd()) : (N.point(B[1][0], B[1][1]), N.lineEnd(), N.lineStart(), N.point(B[0][0], B[0][1])));
        }
        G && (!m || !Sn(m, b)) && N.point(b[0], b[1]), m = b, E = G, I = D;
      },
      lineEnd: function() {
        E && N.lineEnd(), m = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return M | (L && E) << 1;
      }
    };
  }
  function w(N, m, I) {
    var E = Fe(N), L = Fe(m), M = [1, 0, 0], R = bn(E, L), O = kn(R, R), b = R[0], P = O - b * b;
    if (!P) return !I && N;
    var G = a * O / P, D = -a * b / P, B = bn(M, R), X = En(M, G), V = En(R, D);
    oi(X, V);
    var U = B, st = kn(X, U), et = kn(U, U), rt = st * st - et * (kn(X, X) - 1);
    if (!(rt < 0)) {
      var ut = qe(rt), z = En(U, (-st - ut) / et);
      if (oi(z, X), z = pi(z), !I) return z;
      var nt = N[0], ot = m[0], ft = N[1], xt = m[1], kt;
      ot < nt && (kt = nt, nt = ot, ot = kt);
      var H = ot - nt, St = It(H - lt) < gt, Et = St || H < gt;
      if (!St && xt < ft && (kt = ft, ft = xt, xt = kt), Et ? St ? ft + xt > 0 ^ z[1] < (It(z[0] - nt) < gt ? ft : xt) : ft <= z[1] && z[1] <= xt : H > lt ^ (nt <= z[0] && z[0] <= ot)) {
        var Ct = En(U, (-st + ut) / et);
        return oi(Ct, X), [z, pi(Ct)];
      }
    }
  }
  function _(N, m) {
    var I = f ? l : lt - l, E = 0;
    return N < -I ? E |= 1 : N > I && (E |= 2), m < -I ? E |= 4 : m > I && (E |= 8), E;
  }
  return ms(d, p, g, f ? [0, -l] : [-lt, l - lt]);
}
function ds(l) {
  return function(u) {
    var a = new ki();
    for (var f in l) a[f] = l[f];
    return a.stream = u, a;
  };
}
function ki() {
}
ki.prototype = {
  constructor: ki,
  point: function(l, u) {
    this.stream.point(l, u);
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
function ps(l, u, a) {
  var f = u[1][0] - u[0][0], h = u[1][1] - u[0][1], g = l.clipExtent && l.clipExtent();
  l.scale(150).translate([0, 0]), g != null && l.clipExtent(null), zu(a, l.stream(Hr));
  var d = Hr.result(), p = Math.min(f / (d[1][0] - d[0][0]), h / (d[1][1] - d[0][1])), w = +u[0][0] + (f - p * (d[1][0] + d[0][0])) / 2, _ = +u[0][1] + (h - p * (d[1][1] + d[0][1])) / 2;
  return g != null && l.clipExtent(g), l.scale(p * 150).translate([w, _]);
}
function no(l, u, a) {
  return ps(l, [[0, 0], u], a);
}
var $r = 16, io = dt(30 * Yt);
function jr(l, u) {
  return +u ? so(l, u) : ro(l);
}
function ro(l) {
  return ds({
    point: function(u, a) {
      u = l(u, a), this.stream.point(u[0], u[1]);
    }
  });
}
function so(l, u) {
  function a(f, h, g, d, p, w, _, N, m, I, E, L, M, R) {
    var O = _ - f, b = N - h, P = O * O + b * b;
    if (P > 4 * u && M--) {
      var G = d + I, D = p + E, B = w + L, X = qe(G * G + D * D + B * B), V = Ie(B /= X), U = It(It(B) - 1) < gt || It(g - m) < gt ? (g + m) / 2 : De(D, G), st = l(U, V), et = st[0], rt = st[1], ut = et - f, z = rt - h, nt = b * ut - O * z;
      (nt * nt / P > u || It((O * ut + b * z) / P - 0.5) > 0.3 || d * I + p * E + w * L < io) && (a(f, h, g, d, p, w, et, rt, U, G /= X, D /= X, B, M, R), R.point(et, rt), a(et, rt, U, G, D, B, _, N, m, I, E, L, M, R));
    }
  }
  return function(f) {
    var h, g, d, p, w, _, N, m, I, E, L, M, R = {
      point: O,
      lineStart: b,
      lineEnd: G,
      polygonStart: function() {
        f.polygonStart(), R.lineStart = D;
      },
      polygonEnd: function() {
        f.polygonEnd(), R.lineStart = b;
      }
    };
    function O(V, U) {
      V = l(V, U), f.point(V[0], V[1]);
    }
    function b() {
      m = NaN, R.point = P, f.lineStart();
    }
    function P(V, U) {
      var st = Fe([V, U]), et = l(V, U);
      a(m, I, N, E, L, M, m = et[0], I = et[1], N = V, E = st[0], L = st[1], M = st[2], $r, f), f.point(m, I);
    }
    function G() {
      R.point = O, f.lineEnd();
    }
    function D() {
      b(), R.point = B, R.lineEnd = X;
    }
    function B(V, U) {
      P(h = V, U), g = m, d = I, p = E, w = L, _ = M, R.point = P;
    }
    function X() {
      a(m, I, N, E, L, M, g, d, h, p, w, _, $r, f), R.lineEnd = G, G();
    }
    return R;
  };
}
var ao = ds({
  point: function(l, u) {
    this.stream.point(l * Yt, u * Yt);
  }
});
function uo(l) {
  return oo(function() {
    return l;
  })();
}
function oo(l) {
  var u, a = 150, f = 480, h = 250, g, d, p = 0, w = 0, _ = 0, N = 0, m = 0, I, E, L = null, M = Zr, R = null, O, b, P, G = Vr, D = 0.5, B = jr(et, D), X, V;
  function U(z) {
    return z = E(z[0] * Yt, z[1] * Yt), [z[0] * a + g, d - z[1] * a];
  }
  function st(z) {
    return z = E.invert((z[0] - g) / a, (d - z[1]) / a), z && [z[0] * oe, z[1] * oe];
  }
  function et(z, nt) {
    return z = u(z, nt), [z[0] * a + g, d - z[1] * a];
  }
  U.stream = function(z) {
    return X && V === z ? X : X = ao(M(I, B(G(V = z))));
  }, U.clipAngle = function(z) {
    return arguments.length ? (M = +z ? eo(L = z * Yt, 6 * Yt) : (L = null, Zr), ut()) : L * oe;
  }, U.clipExtent = function(z) {
    return arguments.length ? (G = z == null ? (R = O = b = P = null, Vr) : Zu(R = +z[0][0], O = +z[0][1], b = +z[1][0], P = +z[1][1]), ut()) : R == null ? null : [[R, O], [b, P]];
  }, U.scale = function(z) {
    return arguments.length ? (a = +z, rt()) : a;
  }, U.translate = function(z) {
    return arguments.length ? (f = +z[0], h = +z[1], rt()) : [f, h];
  }, U.center = function(z) {
    return arguments.length ? (p = z[0] % 360 * Yt, w = z[1] % 360 * Yt, rt()) : [p * oe, w * oe];
  }, U.rotate = function(z) {
    return arguments.length ? (_ = z[0] % 360 * Yt, N = z[1] % 360 * Yt, m = z.length > 2 ? z[2] % 360 * Yt : 0, rt()) : [_ * oe, N * oe, m * oe];
  }, U.precision = function(z) {
    return arguments.length ? (B = jr(et, D = z * z), ut()) : qe(D);
  }, U.fitExtent = function(z, nt) {
    return ps(U, z, nt);
  }, U.fitSize = function(z, nt) {
    return no(U, z, nt);
  };
  function rt() {
    E = cs(I = Bu(_, N, m), u);
    var z = u(p, w);
    return g = f - z[0] * a, d = h + z[1] * a, ut();
  }
  function ut() {
    return X = V = null, U;
  }
  return function() {
    return u = l.apply(this, arguments), U.invert = u.invert && st, rt();
  };
}
function _s(l) {
  return function(u, a) {
    var f = dt(u), h = dt(a), g = l(f * h);
    return [
      g * h * pt(u),
      g * pt(a)
    ];
  };
}
function xs(l) {
  return function(u, a) {
    var f = qe(u * u + a * a), h = l(f), g = pt(h), d = dt(h);
    return [
      De(u * g, f * d),
      Ie(f && a * g / f)
    ];
  };
}
var lo = _s(function(l) {
  return qe(2 / (1 + l));
});
lo.invert = xs(function(l) {
  return 2 * Ie(l / 2);
});
var ks = _s(function(l) {
  return (l = hs(l)) && l / pt(l);
});
ks.invert = xs(function(l) {
  return l;
});
function ho() {
  return uo(ks).scale(79.4188).clipAngle(180 - 1e-3);
}
function Wr(l, u) {
  return [l, u];
}
Wr.invert = Wr;
var { BufferOp: co, GeoJSONReader: fo, GeoJSONWriter: go } = qu;
function vo(l, u, a) {
  a = a || {};
  var f = a.units || "kilometers", h = a.steps || 8;
  if (!l)
    throw new Error("geojson is required");
  if (typeof a != "object")
    throw new Error("options must be an object");
  if (typeof h != "number")
    throw new Error("steps must be an number");
  if (u === void 0)
    throw new Error("radius is required");
  if (h <= 0)
    throw new Error("steps must be greater than 0");
  var g = [];
  switch (l.type) {
    case "GeometryCollection":
      return An(l, function(d) {
        var p = Ln(d, u, f, h);
        p && g.push(p);
      }), Ee(g);
    case "FeatureCollection":
      return Rr(l, function(d) {
        var p = Ln(d, u, f, h);
        p && Rr(p, function(w) {
          w && g.push(w);
        });
      }), Ee(g);
  }
  return Ln(l, u, f, h);
}
function Ln(l, u, a, f) {
  var h = l.properties || {}, g = l.type === "Feature" ? l.geometry : l;
  if (g.type === "GeometryCollection") {
    var d = [];
    return An(l, function(M) {
      var R = Ln(M, u, a, f);
      R && d.push(R);
    }), Ee(d);
  }
  var p = yo(g), w = {
    type: g.type,
    coordinates: Is(g.coordinates, p)
  }, _ = new fo(), N = _.read(w), m = Da(Fa(u, a), "meters"), I = co.bufferOp(N, m, f), E = new go();
  if (I = E.write(I), !Es(I.coordinates)) {
    var L = {
      type: I.type,
      coordinates: Ns(I.coordinates, p)
    };
    return sn(L, h);
  }
}
function Es(l) {
  return Array.isArray(l[0]) ? Es(l[0]) : isNaN(l[0]);
}
function Is(l, u) {
  return typeof l[0] != "object" ? u(l) : l.map(function(a) {
    return Is(a, u);
  });
}
function Ns(l, u) {
  return typeof l[0] != "object" ? u.invert(l) : l.map(function(a) {
    return Ns(a, u);
  });
}
function yo(l) {
  var u = Au(l).geometry.coordinates, a = [-u[0], -u[1]];
  return ho().rotate(a).scale(Rt);
}
var mo = vo;
function po(l) {
  const u = [];
  if (An(l, (h) => {
    u.push(h.coordinates);
  }), u.length < 2)
    throw new Error("Must have at least two features");
  const a = l.features[0].properties || {}, f = is.difference(u[0], ...u.slice(1));
  return f.length === 0 ? null : f.length === 1 ? Ei(f[0], a) : es(f, a);
}
var _o = po;
function Qr(l) {
  let u;
  for (const a of l)
    u && a[0] - u[0] >= 180 ? a[0] -= 360 : u && a[0] - u[0] < -180 && (a[0] += 360), u = a;
}
function Kr(l, u) {
  const a = _o(
    Ee([
      Ei([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      l
    ])
  );
  if (!a)
    return;
  a.properties = { isMask: "y" };
  const f = mo(l, 0);
  if (f) {
    if (f.geometry.type === "Polygon")
      for (const h of f.geometry.coordinates)
        Qr(h);
    else
      for (const h of f.geometry.coordinates)
        for (const g of h)
          Qr(g);
    u(Ee([f, a]));
  }
}
const Jr = Ee([]);
function ko(l, u, a = !0, f = !0, h = {}, g = {}, d = {
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
  let p;
  const w = [];
  let _, N, m;
  function I() {
    !l.getSource("full-geom") && (d != null && d.fill || d != null && d.line) && l.addSource("full-geom", {
      type: "geojson",
      data: Jr
    }), !l.getLayer("full-geom-fill") && (d != null && d.fill) && l.addLayer({
      ...d == null ? void 0 : d.fill,
      id: "full-geom-fill",
      type: "fill",
      source: "full-geom"
    }), !l.getLayer("full-geom-line") && (d != null && d.line) && l.addLayer({
      ...d == null ? void 0 : d.line,
      id: "full-geom-line",
      type: "line",
      source: "full-geom"
    }), m && M(m);
  }
  l.loaded() ? I() : l.once("load", () => {
    I();
  }), l.on("styledata", () => {
    I();
  });
  const E = (R) => {
    p == null || p({
      type: "mapClick",
      coordinates: [R.lngLat.lng, R.lngLat.lat]
    });
  };
  function L(R = !1) {
    if (!u)
      throw new Error();
    const O = document.createElement("div");
    return R && O.classList.add("marker-interactive"), new Mu({
      props: { displayIn: "maplibre" },
      target: O
    }), new u.Marker({ element: O, offset: [1, -13] });
  }
  function M(R) {
    var O;
    m = R, (O = l.getSource("full-geom")) == null || O.setData(R);
  }
  return {
    setEventHandler(R) {
      R ? (p = R, l.on("click", E)) : (p = void 0, l.off("click", E));
    },
    flyTo(R, O) {
      l.flyTo({ center: R, zoom: O, ...h });
    },
    fitBounds(R, O, b) {
      l.fitBounds(
        [
          [R[0], R[1]],
          [R[2], R[3]]
        ],
        { padding: O, maxZoom: b, ...g }
      );
    },
    indicateReverse(R) {
      l.getCanvasContainer().style.cursor = R ? "crosshair" : "";
    },
    setReverseMarker(R) {
      !u || !a || (N ? R ? N.setLngLat(R) : (N.remove(), N = void 0) : R && (N = (typeof a == "object" ? new u.Marker(a) : L()).setLngLat(R).addTo(l), N.getElement().classList.add("marker-reverse")));
    },
    setMarkers(R, O) {
      if (a) {
        for (const b of w)
          b.remove();
        if (w.length = 0, M(Jr), !!u) {
          if (O) {
            let b = !1;
            if (O.geometry.type === "GeometryCollection") {
              const P = O.geometry.geometries.filter(
                (G) => G.type === "Polygon" || G.type === "MultiPolygon"
              );
              t: if (P.length > 0) {
                const G = gu(
                  Ee(P.map((D) => sn(D)))
                );
                if (!G)
                  break t;
                Kr(
                  {
                    ...O,
                    geometry: G.geometry
                  },
                  M
                ), b = !0;
              } else {
                const G = O.geometry.geometries.filter(
                  (D) => D.type === "LineString" || D.type === "MultiLineString"
                );
                G.length > 0 && (M({
                  ...O,
                  geometry: { type: "GeometryCollection", geometries: G }
                }), b = !0);
              }
            }
            if (!b) {
              if (O.geometry.type === "Polygon" || O.geometry.type === "MultiPolygon")
                Kr(O, M);
              else if (O.geometry.type === "LineString" || O.geometry.type === "MultiLineString") {
                M(O);
                return;
              }
            }
            a && w.push(
              (typeof a == "object" ? new u.Marker(a) : L()).setLngLat(O.center).addTo(l)
            );
          }
          if (f)
            for (const b of R ?? []) {
              if (b === O)
                continue;
              const P = (typeof f == "object" ? new u.Marker(f) : L(!0)).setLngLat(b.center).setPopup(
                new u.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  b.place_type[0] === "reverse" ? b.place_name : b.place_name.replace(/,.*/, "")
                )
              ).addTo(l), G = P.getElement();
              G.addEventListener("click", (D) => {
                D.stopPropagation(), p == null || p({ type: "markerClick", id: b.id });
              }), G.addEventListener("mouseenter", () => {
                p == null || p({ type: "markerMouseEnter", id: b.id }), P.togglePopup();
              }), G.addEventListener("mouseleave", () => {
                p == null || p({ type: "markerMouseLeave", id: b.id }), P.togglePopup();
              }), w.push(P);
            }
        }
      }
    },
    setSelectedMarker(R) {
      _ && _.getElement().classList.toggle("marker-selected", !1), _ = R > -1 ? w[R] : void 0, _ == null || _.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const R = l.getCenter();
      return [l.getZoom(), R.lng, R.lat];
    }
  };
}
export {
  ko as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl-controller.js.map
