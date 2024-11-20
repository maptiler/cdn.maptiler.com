import { Feature as N } from "ol";
import { Point as Z, Polygon as ut, MultiPolygon as ft, GeometryCollection as $t, LineString as ct, MultiLineString as ht } from "ol/geom";
import Tt from "ol/layer/Vector";
import { fromLonLat as V, transformExtent as qt, toLonLat as at, getUserProjection as Qt } from "ol/proj";
import Ut from "ol/source/Vector";
import gt from "ol/style/Fill";
import Yt from "ol/style/Icon";
import pt from "ol/style/Stroke";
import Vt from "ol/style/Style";
import jt from "ol/style/Text";
function D(o, t, e = {}) {
  const n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = o, n;
}
function ot(o, t, e = {}) {
  for (const r of o) {
    if (r.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (r[r.length - 1].length !== r[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let i = 0; i < r[r.length - 1].length; i++)
      if (r[r.length - 1][i] !== r[0][i])
        throw new Error("First and last Position are not equivalent.");
  }
  return D({
    type: "Polygon",
    coordinates: o
  }, t, e);
}
function H(o, t = {}) {
  const e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = o, e;
}
function At(o, t, e = {}) {
  return D({
    type: "MultiPolygon",
    coordinates: o
  }, t, e);
}
function Ot(o, t, e) {
  if (o !== null)
    for (var n, r, i, u, l, c, f, a = 0, s = 0, h, g = o.type, y = g === "FeatureCollection", p = g === "Feature", d = y ? o.features.length : 1, x = 0; x < d; x++) {
      f = y ? o.features[x].geometry : p ? o.geometry : o, h = f ? f.type === "GeometryCollection" : !1, l = h ? f.geometries.length : 1;
      for (var v = 0; v < l; v++) {
        var w = 0, m = 0;
        if (u = h ? f.geometries[v] : f, u !== null) {
          c = u.coordinates;
          var E = u.type;
          switch (a = 0, E) {
            case null:
              break;
            case "Point":
              if (t(
                c,
                s,
                x,
                w,
                m
              ) === !1)
                return !1;
              s++, w++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (t(
                  c[n],
                  s,
                  x,
                  w,
                  m
                ) === !1)
                  return !1;
                s++, E === "MultiPoint" && w++;
              }
              E === "LineString" && w++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (r = 0; r < c[n].length - a; r++) {
                  if (t(
                    c[n][r],
                    s,
                    x,
                    w,
                    m
                  ) === !1)
                    return !1;
                  s++;
                }
                E === "MultiLineString" && w++, E === "Polygon" && m++;
              }
              E === "Polygon" && w++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (m = 0, r = 0; r < c[n].length; r++) {
                  for (i = 0; i < c[n][r].length - a; i++) {
                    if (t(
                      c[n][r][i],
                      s,
                      x,
                      w,
                      m
                    ) === !1)
                      return !1;
                    s++;
                  }
                  m++;
                }
                w++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < u.geometries.length; n++)
                if (Ot(u.geometries[n], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function st(o, t) {
  var e, n, r, i, u, l, c, f, a, s, h = 0, g = o.type === "FeatureCollection", y = o.type === "Feature", p = g ? o.features.length : 1;
  for (e = 0; e < p; e++) {
    for (l = g ? o.features[e].geometry : y ? o.geometry : o, f = g ? o.features[e].properties : y ? o.properties : {}, a = g ? o.features[e].bbox : y ? o.bbox : void 0, s = g ? o.features[e].id : y ? o.id : void 0, c = l ? l.type === "GeometryCollection" : !1, u = c ? l.geometries.length : 1, r = 0; r < u; r++) {
      if (i = c ? l.geometries[r] : l, i === null) {
        if (t(
          null,
          h,
          f,
          a,
          s
        ) === !1)
          return !1;
        continue;
      }
      switch (i.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            i,
            h,
            f,
            a,
            s
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < i.geometries.length; n++)
            if (t(
              i.geometries[n],
              h,
              f,
              a,
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
function Dt(o, t) {
  st(o, function(e, n, r, i, u) {
    var l = e === null ? null : e.type;
    switch (l) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          D(e, r, { bbox: i, id: u }),
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
    for (var f = 0; f < e.coordinates.length; f++) {
      var a = e.coordinates[f], s = {
        type: c,
        coordinates: a
      };
      if (t(D(s, r), n, f) === !1)
        return !1;
    }
  });
}
function Xt(o, t = {}) {
  if (o.bbox != null && t.recompute !== !0)
    return o.bbox;
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Ot(o, (n) => {
    e[0] > n[0] && (e[0] = n[0]), e[1] > n[1] && (e[1] = n[1]), e[2] < n[0] && (e[2] = n[0]), e[3] < n[1] && (e[3] = n[1]);
  }), e;
}
var yt = Xt;
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
function Wt(o, t) {
  var e = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, r, i, u;
  return u = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function l(f) {
    return function(a) {
      return c([f, a]);
    };
  }
  function c(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, r && (i = f[0] & 2 ? r.return : f[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, f[1])).done) return i;
      switch (r = 0, i && (f = [f[0] & 2, i.value]), f[0]) {
        case 0:
        case 1:
          i = f;
          break;
        case 4:
          return e.label++, { value: f[1], done: !1 };
        case 5:
          e.label++, r = f[1], f = [0];
          continue;
        case 7:
          f = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (i = e.trys, !(i = i.length > 0 && i[i.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            e = 0;
            continue;
          }
          if (f[0] === 3 && (!i || f[1] > i[0] && f[1] < i[3])) {
            e.label = f[1];
            break;
          }
          if (f[0] === 6 && e.label < i[1]) {
            e.label = i[1], i = f;
            break;
          }
          if (i && e.label < i[2]) {
            e.label = i[2], e.ops.push(f);
            break;
          }
          i[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      f = t.call(o, e);
    } catch (a) {
      f = [6, a], r = 0;
    } finally {
      n = i = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
var $ = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return o;
  }()
);
function Zt(o, t) {
  return o > t ? 1 : o < t ? -1 : 0;
}
function G(o, t, e) {
  for (var n = new $(null, null), r = n, i = n; ; ) {
    var u = e(o, t.key);
    if (u < 0) {
      if (t.left === null)
        break;
      if (e(o, t.left.key) < 0) {
        var l = t.left;
        if (t.left = l.right, l.right = t, t = l, t.left === null)
          break;
      }
      i.left = t, i = t, t = t.left;
    } else if (u > 0) {
      if (t.right === null)
        break;
      if (e(o, t.right.key) > 0) {
        var l = t.right;
        if (t.right = l.left, l.left = t, t = l, t.right === null)
          break;
      }
      r.right = t, r = t, t = t.right;
    } else
      break;
  }
  return r.right = t.left, i.left = t.right, t.left = n.right, t.right = n.left, t;
}
function J(o, t, e, n) {
  var r = new $(o, t);
  if (e === null)
    return r.left = r.right = null, r;
  e = G(o, e, n);
  var i = n(o, e.key);
  return i < 0 ? (r.left = e.left, r.right = e, e.left = null) : i >= 0 && (r.right = e.right, r.left = e, e.right = null), r;
}
function xt(o, t, e) {
  var n = null, r = null;
  if (t) {
    t = G(o, t, e);
    var i = e(t.key, o);
    i === 0 ? (n = t.left, r = t.right) : i < 0 ? (r = t.right, t.right = null, n = t) : (n = t.left, t.left = null, r = t);
  }
  return { left: n, right: r };
}
function Jt(o, t, e) {
  return t === null ? o : (o === null || (t = G(o.key, t, e), t.left = o), t);
}
function tt(o, t, e, n, r) {
  if (o) {
    n("" + t + (e ? "└── " : "├── ") + r(o) + `
`);
    var i = t + (e ? "    " : "│   ");
    o.left && tt(o.left, i, !1, n, r), o.right && tt(o.right, i, !0, n, r);
  }
}
var lt = (
  /** @class */
  function() {
    function o(t) {
      t === void 0 && (t = Zt), this._root = null, this._size = 0, this._comparator = t;
    }
    return o.prototype.insert = function(t, e) {
      return this._size++, this._root = J(t, e, this._root, this._comparator);
    }, o.prototype.add = function(t, e) {
      var n = new $(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, i = G(t, this._root, r), u = r(t, i.key);
      return u === 0 ? this._root = i : (u < 0 ? (n.left = i.left, n.right = i, i.left = null) : u > 0 && (n.right = i.right, n.left = i, i.right = null), this._size++, this._root = n), this._root;
    }, o.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, o.prototype._remove = function(t, e, n) {
      var r;
      if (e === null)
        return null;
      e = G(t, e, n);
      var i = n(t, e.key);
      return i === 0 ? (e.left === null ? r = e.right : (r = G(t, e.left, n), r.right = e.right), this._size--, r) : e;
    }, o.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = G(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, o.prototype.findStatic = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return e;
        r < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, o.prototype.find = function(t) {
      return this._root && (this._root = G(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, o.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return !0;
        r < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, o.prototype.forEach = function(t, e) {
      for (var n = this._root, r = [], i = !1; !i; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), t.call(e, n), n = n.right) : i = !0;
      return this;
    }, o.prototype.range = function(t, e, n, r) {
      for (var i = [], u = this._comparator, l = this._root, c; i.length !== 0 || l; )
        if (l)
          i.push(l), l = l.left;
        else {
          if (l = i.pop(), c = u(l.key, e), c > 0)
            break;
          if (u(l.key, t) >= 0 && n.call(r, l))
            return this;
          l = l.right;
        }
      return this;
    }, o.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.key;
        return t.push(n);
      }), t;
    }, o.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.data;
        return t.push(n);
      }), t;
    }, o.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, o.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, o.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, o.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, o.prototype.at = function(t) {
      for (var e = this._root, n = !1, r = 0, i = []; !n; )
        if (e)
          i.push(e), e = e.left;
        else if (i.length > 0) {
          if (e = i.pop(), r === t)
            return e;
          r++, e = e.right;
        } else
          n = !0;
      return null;
    }, o.prototype.next = function(t) {
      var e = this._root, n = null;
      if (t.right) {
        for (n = t.right; n.left; )
          n = n.left;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var i = r(t.key, e.key);
        if (i === 0)
          break;
        i < 0 ? (n = e, e = e.left) : e = e.right;
      }
      return n;
    }, o.prototype.prev = function(t) {
      var e = this._root, n = null;
      if (t.left !== null) {
        for (n = t.left; n.right; )
          n = n.right;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var i = r(t.key, e.key);
        if (i === 0)
          break;
        i < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, o.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, o.prototype.toList = function() {
      return Ht(this._root);
    }, o.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var r = t.length, i = this._comparator;
      if (n && rt(t, e, 0, r - 1, i), this._root === null)
        this._root = et(t, e, 0, r), this._size = r;
      else {
        var u = te(this.toList(), Kt(t, e), i);
        r = this._size + r, this._root = nt({ head: u }, 0, r);
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
    }), o.prototype.toString = function(t) {
      t === void 0 && (t = function(n) {
        return String(n.key);
      });
      var e = [];
      return tt(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, o.prototype.update = function(t, e, n) {
      var r = this._comparator, i = xt(t, this._root, r), u = i.left, l = i.right;
      r(t, e) < 0 ? l = J(e, n, l, r) : u = J(e, n, u, r), this._root = Jt(u, l, r);
    }, o.prototype.split = function(t) {
      return xt(t, this._root, this._comparator);
    }, o.prototype[Symbol.iterator] = function() {
      var t, e, n;
      return Wt(this, function(r) {
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
    }, o;
  }()
);
function et(o, t, e, n) {
  var r = n - e;
  if (r > 0) {
    var i = e + Math.floor(r / 2), u = o[i], l = t[i], c = new $(u, l);
    return c.left = et(o, t, e, i), c.right = et(o, t, i + 1, n), c;
  }
  return null;
}
function Kt(o, t) {
  for (var e = new $(null, null), n = e, r = 0; r < o.length; r++)
    n = n.next = new $(o[r], t[r]);
  return n.next = null, e.next;
}
function Ht(o) {
  for (var t = o, e = [], n = !1, r = new $(null, null), i = r; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = i = i.next = e.pop(), t = t.right) : n = !0;
  return i.next = null, r.next;
}
function nt(o, t, e) {
  var n = e - t;
  if (n > 0) {
    var r = t + Math.floor(n / 2), i = nt(o, t, r), u = o.head;
    return u.left = i, o.head = o.head.next, u.right = nt(o, r + 1, e), u;
  }
  return null;
}
function te(o, t, e) {
  for (var n = new $(null, null), r = n, i = o, u = t; i !== null && u !== null; )
    e(i.key, u.key) < 0 ? (r.next = i, i = i.next) : (r.next = u, u = u.next), r = r.next;
  return i !== null ? r.next = i : u !== null && (r.next = u), n.next;
}
function rt(o, t, e, n, r) {
  if (!(e >= n)) {
    for (var i = o[e + n >> 1], u = e - 1, l = n + 1; ; ) {
      do
        u++;
      while (r(o[u], i) < 0);
      do
        l--;
      while (r(o[l], i) > 0);
      if (u >= l)
        break;
      var c = o[u];
      o[u] = o[l], o[l] = c, c = t[u], t[u] = t[l], t[l] = c;
    }
    rt(o, t, e, l, r), rt(o, t, l + 1, n, r);
  }
}
const F = 11102230246251565e-32, _ = 134217729, ee = (3 + 8 * F) * F;
function K(o, t, e, n, r) {
  let i, u, l, c, f = t[0], a = n[0], s = 0, h = 0;
  a > f == a > -f ? (i = f, f = t[++s]) : (i = a, a = n[++h]);
  let g = 0;
  if (s < o && h < e)
    for (a > f == a > -f ? (u = f + i, l = i - (u - f), f = t[++s]) : (u = a + i, l = i - (u - a), a = n[++h]), i = u, l !== 0 && (r[g++] = l); s < o && h < e; )
      a > f == a > -f ? (u = i + f, c = u - i, l = i - (u - c) + (f - c), f = t[++s]) : (u = i + a, c = u - i, l = i - (u - c) + (a - c), a = n[++h]), i = u, l !== 0 && (r[g++] = l);
  for (; s < o; )
    u = i + f, c = u - i, l = i - (u - c) + (f - c), f = t[++s], i = u, l !== 0 && (r[g++] = l);
  for (; h < e; )
    u = i + a, c = u - i, l = i - (u - c) + (a - c), a = n[++h], i = u, l !== 0 && (r[g++] = l);
  return (i !== 0 || g === 0) && (r[g++] = i), g;
}
function ne(o, t) {
  let e = t[0];
  for (let n = 1; n < o; n++) e += t[n];
  return e;
}
function Y(o) {
  return new Float64Array(o);
}
const re = (3 + 16 * F) * F, ie = (2 + 12 * F) * F, oe = (9 + 64 * F) * F * F, T = Y(4), dt = Y(8), vt = Y(12), mt = Y(16), P = Y(4);
function se(o, t, e, n, r, i, u) {
  let l, c, f, a, s, h, g, y, p, d, x, v, w, m, E, b, M, S;
  const L = o - r, I = e - r, k = t - i, C = n - i;
  m = L * C, h = _ * L, g = h - (h - L), y = L - g, h = _ * C, p = h - (h - C), d = C - p, E = y * d - (m - g * p - y * p - g * d), b = k * I, h = _ * k, g = h - (h - k), y = k - g, h = _ * I, p = h - (h - I), d = I - p, M = y * d - (b - g * p - y * p - g * d), x = E - M, s = E - x, T[0] = E - (x + s) + (s - M), v = m + x, s = v - m, w = m - (v - s) + (x - s), x = w - b, s = w - x, T[1] = w - (x + s) + (s - b), S = v + x, s = S - v, T[2] = v - (S - s) + (x - s), T[3] = S;
  let O = ne(4, T), q = ie * u;
  if (O >= q || -O >= q || (s = o - L, l = o - (L + s) + (s - r), s = e - I, f = e - (I + s) + (s - r), s = t - k, c = t - (k + s) + (s - i), s = n - C, a = n - (C + s) + (s - i), l === 0 && c === 0 && f === 0 && a === 0) || (q = oe * u + ee * Math.abs(O), O += L * a + C * l - (k * f + I * c), O >= q || -O >= q)) return O;
  m = l * C, h = _ * l, g = h - (h - l), y = l - g, h = _ * C, p = h - (h - C), d = C - p, E = y * d - (m - g * p - y * p - g * d), b = c * I, h = _ * c, g = h - (h - c), y = c - g, h = _ * I, p = h - (h - I), d = I - p, M = y * d - (b - g * p - y * p - g * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = m + x, s = v - m, w = m - (v - s) + (x - s), x = w - b, s = w - x, P[1] = w - (x + s) + (s - b), S = v + x, s = S - v, P[2] = v - (S - s) + (x - s), P[3] = S;
  const Gt = K(4, T, 4, P, dt);
  m = L * a, h = _ * L, g = h - (h - L), y = L - g, h = _ * a, p = h - (h - a), d = a - p, E = y * d - (m - g * p - y * p - g * d), b = k * f, h = _ * k, g = h - (h - k), y = k - g, h = _ * f, p = h - (h - f), d = f - p, M = y * d - (b - g * p - y * p - g * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = m + x, s = v - m, w = m - (v - s) + (x - s), x = w - b, s = w - x, P[1] = w - (x + s) + (s - b), S = v + x, s = S - v, P[2] = v - (S - s) + (x - s), P[3] = S;
  const Bt = K(Gt, dt, 4, P, vt);
  m = l * a, h = _ * l, g = h - (h - l), y = l - g, h = _ * a, p = h - (h - a), d = a - p, E = y * d - (m - g * p - y * p - g * d), b = c * f, h = _ * c, g = h - (h - c), y = c - g, h = _ * f, p = h - (h - f), d = f - p, M = y * d - (b - g * p - y * p - g * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = m + x, s = v - m, w = m - (v - s) + (x - s), x = w - b, s = w - x, P[1] = w - (x + s) + (s - b), S = v + x, s = S - v, P[2] = v - (S - s) + (x - s), P[3] = S;
  const zt = K(Bt, vt, 4, P, mt);
  return mt[zt - 1];
}
function le(o, t, e, n, r, i) {
  const u = (t - i) * (e - r), l = (o - r) * (n - i), c = u - l, f = Math.abs(u + l);
  return Math.abs(c) >= re * f ? c : -se(o, t, e, n, r, i, f);
}
const Q = (o, t) => o.ll.x <= t.x && t.x <= o.ur.x && o.ll.y <= t.y && t.y <= o.ur.y, it = (o, t) => {
  if (t.ur.x < o.ll.x || o.ur.x < t.ll.x || t.ur.y < o.ll.y || o.ur.y < t.ll.y) return null;
  const e = o.ll.x < t.ll.x ? t.ll.x : o.ll.x, n = o.ur.x < t.ur.x ? o.ur.x : t.ur.x, r = o.ll.y < t.ll.y ? t.ll.y : o.ll.y, i = o.ur.y < t.ur.y ? o.ur.y : t.ur.y;
  return {
    ll: {
      x: e,
      y: r
    },
    ur: {
      x: n,
      y: i
    }
  };
};
let B = Number.EPSILON;
B === void 0 && (B = Math.pow(2, -52));
const ue = B * B, wt = (o, t) => {
  if (-B < o && o < B && -B < t && t < B)
    return 0;
  const e = o - t;
  return e * e < ue * o * t ? 0 : o < t ? -1 : 1;
};
class fe {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Et(), this.yRounder = new Et();
  }
  round(t, e) {
    return {
      x: this.xRounder.round(t),
      y: this.yRounder.round(e)
    };
  }
}
class Et {
  constructor() {
    this.tree = new lt(), this.round(0);
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
    if (n !== null && wt(e.key, n.key) === 0)
      return this.tree.remove(t), n.key;
    const r = this.tree.next(e);
    return r !== null && wt(e.key, r.key) === 0 ? (this.tree.remove(t), r.key) : t;
  }
}
const U = new fe(), j = (o, t) => o.x * t.y - o.y * t.x, Nt = (o, t) => o.x * t.x + o.y * t.y, bt = (o, t, e) => {
  const n = le(o.x, o.y, t.x, t.y, e.x, e.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, X = (o) => Math.sqrt(Nt(o, o)), ce = (o, t, e) => {
  const n = {
    x: t.x - o.x,
    y: t.y - o.y
  }, r = {
    x: e.x - o.x,
    y: e.y - o.y
  };
  return j(r, n) / X(r) / X(n);
}, he = (o, t, e) => {
  const n = {
    x: t.x - o.x,
    y: t.y - o.y
  }, r = {
    x: e.x - o.x,
    y: e.y - o.y
  };
  return Nt(r, n) / X(r) / X(n);
}, St = (o, t, e) => t.y === 0 ? null : {
  x: o.x + t.x / t.y * (e - o.y),
  y: e
}, _t = (o, t, e) => t.x === 0 ? null : {
  x: e,
  y: o.y + t.y / t.x * (e - o.x)
}, ae = (o, t, e, n) => {
  if (t.x === 0) return _t(e, n, o.x);
  if (n.x === 0) return _t(o, t, e.x);
  if (t.y === 0) return St(e, n, o.y);
  if (n.y === 0) return St(o, t, e.y);
  const r = j(t, n);
  if (r == 0) return null;
  const i = {
    x: e.x - o.x,
    y: e.y - o.y
  }, u = j(i, t) / r, l = j(i, n) / r, c = o.x + l * t.x, f = e.x + u * n.x, a = o.y + l * t.y, s = e.y + u * n.y, h = (c + f) / 2, g = (a + s) / 2;
  return {
    x: h,
    y: g
  };
};
class R {
  // for ordering sweep events in the sweep event queue
  static compare(t, e) {
    const n = R.comparePoints(t.point, e.point);
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
      const i = e[n];
      this.point.events.push(i), i.point = this.point;
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
          const i = this.point.events[r];
          i.consumedBy === void 0 && n.otherSE.point.events === i.otherSE.point.events && n.segment.consume(i.segment);
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
      const i = r.otherSE;
      e.set(r, {
        sine: ce(this.point, t.point, i.point),
        cosine: he(this.point, t.point, i.point)
      });
    };
    return (r, i) => {
      e.has(r) || n(r), e.has(i) || n(i);
      const {
        sine: u,
        cosine: l
      } = e.get(r), {
        sine: c,
        cosine: f
      } = e.get(i);
      return u >= 0 && c >= 0 ? l < f ? 1 : l > f ? -1 : 0 : u < 0 && c < 0 ? l < f ? -1 : l > f ? 1 : 0 : c < u ? -1 : c > u ? 1 : 0;
    };
  }
}
let ge = 0;
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
    const n = t.leftSE.point.x, r = e.leftSE.point.x, i = t.rightSE.point.x, u = e.rightSE.point.x;
    if (u < n) return 1;
    if (i < r) return -1;
    const l = t.leftSE.point.y, c = e.leftSE.point.y, f = t.rightSE.point.y, a = e.rightSE.point.y;
    if (n < r) {
      if (c < l && c < f) return 1;
      if (c > l && c > f) return -1;
      const s = t.comparePoint(e.leftSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
      const h = e.comparePoint(t.rightSE.point);
      return h !== 0 ? h : -1;
    }
    if (n > r) {
      if (l < c && l < a) return -1;
      if (l > c && l > a) return 1;
      const s = e.comparePoint(t.leftSE.point);
      if (s !== 0) return s;
      const h = t.comparePoint(e.rightSE.point);
      return h < 0 ? 1 : h > 0 ? -1 : 1;
    }
    if (l < c) return -1;
    if (l > c) return 1;
    if (i < u) {
      const s = e.comparePoint(t.rightSE.point);
      if (s !== 0) return s;
    }
    if (i > u) {
      const s = t.comparePoint(e.rightSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
    }
    if (i !== u) {
      const s = f - l, h = i - n, g = a - c, y = u - r;
      if (s > h && g < y) return 1;
      if (s < h && g > y) return -1;
    }
    return i > u ? 1 : i < u || f < a ? -1 : f > a ? 1 : t.id < e.id ? -1 : t.id > e.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(t, e, n, r) {
    this.id = ++ge, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
  }
  static fromRing(t, e, n) {
    let r, i, u;
    const l = R.comparePoints(t, e);
    if (l < 0)
      r = t, i = e, u = 1;
    else if (l > 0)
      r = e, i = t, u = -1;
    else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);
    const c = new R(r, !0), f = new R(i, !1);
    return new z(c, f, [n], [u]);
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
    const i = (t.y - e.y) / r.y, u = e.x + i * r.x;
    if (t.x === u) return 0;
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
    const e = this.bbox(), n = t.bbox(), r = it(e, n);
    if (r === null) return null;
    const i = this.leftSE.point, u = this.rightSE.point, l = t.leftSE.point, c = t.rightSE.point, f = Q(e, l) && this.comparePoint(l) === 0, a = Q(n, i) && t.comparePoint(i) === 0, s = Q(e, c) && this.comparePoint(c) === 0, h = Q(n, u) && t.comparePoint(u) === 0;
    if (a && f)
      return h && !s ? u : !h && s ? c : null;
    if (a)
      return s && i.x === c.x && i.y === c.y ? null : i;
    if (f)
      return h && u.x === l.x && u.y === l.y ? null : l;
    if (h && s) return null;
    if (h) return u;
    if (s) return c;
    const g = ae(i, this.vector(), l, t.vector());
    return g === null || !Q(r, g) ? null : U.round(g.x, g.y);
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
    const e = [], n = t.events !== void 0, r = new R(t, !0), i = new R(t, !1), u = this.rightSE;
    this.replaceRightSE(i), e.push(i), e.push(r);
    const l = new z(r, u, this.rings.slice(), this.windings.slice());
    return R.comparePoints(l.leftSE.point, l.rightSE.point) > 0 && l.swapEvents(), R.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (r.checkForConsuming(), i.checkForConsuming()), e;
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
        const i = e;
        e = n, n = i;
      }
      if (e.prev === n) {
        const i = e;
        e = n, n = i;
      }
      for (let i = 0, u = n.rings.length; i < u; i++) {
        const l = n.rings[i], c = n.windings[i], f = e.rings.indexOf(l);
        f === -1 ? (e.rings.push(l), e.windings.push(c)) : e.windings[f] += c;
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
      const f = this.rings[l], a = this.windings[l], s = e.indexOf(f);
      s === -1 ? (e.push(f), n.push(a)) : n[s] += a;
    }
    const i = [], u = [];
    for (let l = 0, c = e.length; l < c; l++) {
      if (n[l] === 0) continue;
      const f = e[l], a = f.poly;
      if (u.indexOf(a) === -1)
        if (f.isExterior) i.push(a);
        else {
          u.indexOf(a) === -1 && u.push(a);
          const s = i.indexOf(f.poly);
          s !== -1 && i.splice(s, 1);
        }
    }
    for (let l = 0, c = i.length; l < c; l++) {
      const f = i[l].multiPoly;
      r.indexOf(f) === -1 && r.push(f);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const t = this.beforeState().multiPolys, e = this.afterState().multiPolys;
    switch (A.type) {
      case "union": {
        const n = t.length === 0, r = e.length === 0;
        this._isInResult = n !== r;
        break;
      }
      case "intersection": {
        let n, r;
        t.length < e.length ? (n = t.length, r = e.length) : (n = e.length, r = t.length), this._isInResult = r === A.numMultiPolys && n < r;
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
        throw new Error(`Unrecognized operation type found ${A.type}`);
    }
    return this._isInResult;
  }
}
class Pt {
  constructor(t, e, n) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const r = U.round(t[0][0], t[0][1]);
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
    let i = r;
    for (let u = 1, l = t.length; u < l; u++) {
      if (typeof t[u][0] != "number" || typeof t[u][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let c = U.round(t[u][0], t[u][1]);
      c.x === i.x && c.y === i.y || (this.segments.push(z.fromRing(i, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), i = c);
    }
    (r.x !== i.x || r.y !== i.y) && this.segments.push(z.fromRing(i, r, this));
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
class pe {
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Pt(t[0], this, !0), this.bbox = {
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
      const i = new Pt(t[n], this, !1);
      i.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = i.bbox.ll.x), i.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = i.bbox.ll.y), i.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = i.bbox.ur.x), i.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = i.bbox.ur.y), this.interiorRings.push(i);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const r = this.interiorRings[e].getSweepEvents();
      for (let i = 0, u = r.length; i < u; i++)
        t.push(r[i]);
    }
    return t;
  }
}
class Mt {
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
      const i = new pe(t[n], this);
      i.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = i.bbox.ll.x), i.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = i.bbox.ll.y), i.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = i.bbox.ur.x), i.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = i.bbox.ur.y), this.polys.push(i);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const r = this.polys[e].getSweepEvents();
      for (let i = 0, u = r.length; i < u; i++)
        t.push(r[i]);
    }
    return t;
  }
}
class W {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(t) {
    const e = [];
    for (let n = 0, r = t.length; n < r; n++) {
      const i = t[n];
      if (!i.isInResult() || i.ringOut) continue;
      let u = null, l = i.leftSE, c = i.rightSE;
      const f = [l], a = l.point, s = [];
      for (; u = l, l = c, f.push(l), l.point !== a; )
        for (; ; ) {
          const h = l.getAvailableLinkedEvents();
          if (h.length === 0) {
            const p = f[0].point, d = f[f.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${p.x}, ${p.y}]. Last matching segment found ends at [${d.x}, ${d.y}].`);
          }
          if (h.length === 1) {
            c = h[0].otherSE;
            break;
          }
          let g = null;
          for (let p = 0, d = s.length; p < d; p++)
            if (s[p].point === l.point) {
              g = p;
              break;
            }
          if (g !== null) {
            const p = s.splice(g)[0], d = f.splice(p.index);
            d.unshift(d[0].otherSE), e.push(new W(d.reverse()));
            continue;
          }
          s.push({
            index: f.length,
            point: l.point
          });
          const y = l.getLeftmostComparator(u);
          c = h.sort(y)[0].otherSE;
          break;
        }
      e.push(new W(f));
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
    for (let f = 1, a = this.events.length - 1; f < a; f++) {
      const s = this.events[f].point, h = this.events[f + 1].point;
      bt(s, t, h) !== 0 && (e.push(s), t = s);
    }
    if (e.length === 1) return null;
    const n = e[0], r = e[1];
    bt(n, t, r) === 0 && e.shift(), e.push(e[0]);
    const i = this.isExteriorRing() ? 1 : -1, u = this.isExteriorRing() ? 0 : e.length - 1, l = this.isExteriorRing() ? e.length : -1, c = [];
    for (let f = u; f != l; f += i) c.push([e[f].x, e[f].y]);
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
    for (let r = 1, i = this.events.length; r < i; r++) {
      const u = this.events[r];
      R.compare(t, u) > 0 && (t = u);
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
class Rt {
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
class ye {
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
      const i = t[n];
      if (!i.poly)
        if (i.isExteriorRing()) e.push(new Rt(i));
        else {
          const u = i.enclosingRing();
          u.poly || e.push(new Rt(u)), u.poly.addInterior(i);
        }
    }
    return e;
  }
}
class xe {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z.compare;
    this.queue = t, this.tree = new lt(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, n = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.remove(t.otherSE) : this.tree.remove(e), n;
    const r = t.isLeft ? this.tree.add(e) : this.tree.find(e);
    if (!r) throw new Error(`Unable to find segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] in SweepLine tree.`);
    let i = r, u = r, l, c;
    for (; l === void 0; )
      i = this.tree.prev(i), i === null ? l = null : i.key.consumedBy === void 0 && (l = i.key);
    for (; c === void 0; )
      u = this.tree.next(u), u === null ? c = null : u.key.consumedBy === void 0 && (c = u.key);
    if (t.isLeft) {
      let f = null;
      if (l) {
        const s = l.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (f = s), !l.isAnEndpoint(s))) {
          const h = this._splitSafely(l, s);
          for (let g = 0, y = h.length; g < y; g++)
            n.push(h[g]);
        }
      }
      let a = null;
      if (c) {
        const s = c.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (a = s), !c.isAnEndpoint(s))) {
          const h = this._splitSafely(c, s);
          for (let g = 0, y = h.length; g < y; g++)
            n.push(h[g]);
        }
      }
      if (f !== null || a !== null) {
        let s = null;
        f === null ? s = a : a === null ? s = f : s = R.comparePoints(f, a) <= 0 ? f : a, this.queue.remove(e.rightSE), n.push(e.rightSE);
        const h = e.split(s);
        for (let g = 0, y = h.length; g < y; g++)
          n.push(h[g]);
      }
      n.length > 0 ? (this.tree.remove(e), n.push(t)) : (this.segments.push(e), e.prev = l);
    } else {
      if (l && c) {
        const f = l.getIntersection(c);
        if (f !== null) {
          if (!l.isAnEndpoint(f)) {
            const a = this._splitSafely(l, f);
            for (let s = 0, h = a.length; s < h; s++)
              n.push(a[s]);
          }
          if (!c.isAnEndpoint(f)) {
            const a = this._splitSafely(c, f);
            for (let s = 0, h = a.length; s < h; s++)
              n.push(a[s]);
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
const Lt = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, de = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class ve {
  run(t, e, n) {
    A.type = t, U.reset();
    const r = [new Mt(e, !0)];
    for (let s = 0, h = n.length; s < h; s++)
      r.push(new Mt(n[s], !1));
    if (A.numMultiPolys = r.length, A.type === "difference") {
      const s = r[0];
      let h = 1;
      for (; h < r.length; )
        it(r[h].bbox, s.bbox) !== null ? h++ : r.splice(h, 1);
    }
    if (A.type === "intersection")
      for (let s = 0, h = r.length; s < h; s++) {
        const g = r[s];
        for (let y = s + 1, p = r.length; y < p; y++)
          if (it(g.bbox, r[y].bbox) === null) return [];
      }
    const i = new lt(R.compare);
    for (let s = 0, h = r.length; s < h; s++) {
      const g = r[s].getSweepEvents();
      for (let y = 0, p = g.length; y < p; y++)
        if (i.insert(g[y]), i.size > Lt)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const u = new xe(i);
    let l = i.size, c = i.pop();
    for (; c; ) {
      const s = c.key;
      if (i.size === l) {
        const g = s.segment;
        throw new Error(`Unable to pop() ${s.isLeft ? "left" : "right"} SweepEvent [${s.point.x}, ${s.point.y}] from segment #${g.id} [${g.leftSE.point.x}, ${g.leftSE.point.y}] -> [${g.rightSE.point.x}, ${g.rightSE.point.y}] from queue.`);
      }
      if (i.size > Lt)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (u.segments.length > de)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const h = u.process(s);
      for (let g = 0, y = h.length; g < y; g++) {
        const p = h[g];
        p.consumedBy === void 0 && i.insert(p);
      }
      l = i.size, c = i.pop();
    }
    U.reset();
    const f = W.factory(u.segments);
    return new ye(f).getGeom();
  }
}
const A = new ve(), me = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return A.run("union", o, e);
}, we = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return A.run("intersection", o, e);
}, Ee = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return A.run("xor", o, e);
}, be = function(o) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return A.run("difference", o, e);
};
var Ft = {
  union: me,
  intersection: we,
  xor: Ee,
  difference: be
};
function Se(o) {
  const t = [];
  if (st(o, (r) => {
    t.push(r.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least two features");
  const e = o.features[0].properties || {}, n = Ft.difference(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ot(n[0], e) : At(n, e);
}
var _e = Se;
function Pe(o) {
  if (!o)
    throw new Error("geojson is required");
  var t = [];
  return Dt(o, function(e) {
    t.push(e);
  }), H(t);
}
var Me = Pe;
function Re(o, t = {}) {
  const e = [];
  if (st(o, (r) => {
    e.push(r.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Ft.union(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? ot(n[0], t.properties) : At(n, t.properties);
}
var Le = Re;
function It(o) {
  const t = [...o];
  return t[2] < t[0] && (Math.abs((t[0] + t[2] + 360) / 2) > Math.abs((t[0] - 360 + t[2]) / 2) ? t[0] -= 360 : t[2] += 360), t;
}
function kt(o, t) {
  const e = _e(
    H([
      ot([
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
  if (!e)
    return;
  e.properties = { isMask: !0 };
  const n = It(yt(o)), r = (n[2] - n[0]) / 360 / 1e3, i = n[0] < -180, u = n[2] > 180, l = Me(o);
  if (l.features.length > 1 && (i || u))
    for (const c of l.features) {
      const f = It(yt(c));
      if (u && f[0] < -180 + r)
        for (const a of c.geometry.coordinates)
          for (const s of a)
            s[0] += 360 - r;
      if (i && f[2] > 180 - r)
        for (const a of c.geometry.coordinates)
          for (const s of a)
            s[0] -= 360 - r;
    }
  t(
    H([
      l.features.length < 2 ? o : Le(l) ?? o,
      e
    ])
  );
}
const Ct = "EPSG:4326";
function Ie(o) {
  var i;
  const t = o.getProperties(), { isMask: e } = t, n = (i = o.getGeometry()) == null ? void 0 : i.getType(), r = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new Vt({
    stroke: e ? void 0 : new pt({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: e ? new gt({
      color: "#00000020"
    }) : void 0,
    image: new Yt({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new jt({
      backgroundFill: new gt({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new pt({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function Te(o, t = {}, e = {}, n = Ie) {
  let r = -1, i, u, l, c = !1;
  const f = new Tt({
    updateWhileAnimating: !0
  });
  o.addLayer(f);
  const a = new Ut({});
  f.setSource(a), f.setStyle(n), o.on("click", (y) => {
    o.forEachFeatureAtPixel(y.pixel, (p) => {
      const d = p.getId();
      if (d)
        return y.stopPropagation(), u == null || u({ type: "markerClick", id: d }), p;
    });
  }), o.on("pointermove", (y) => {
    const p = o.forEachFeatureAtPixel(y.pixel, (d) => d.getId());
    i !== p && (i && (u == null || u({
      type: "markerMouseLeave",
      id: i
    })), p && (u == null || u({
      type: "markerMouseEnter",
      id: p
    })), o.getTargetElement().style.cursor = p ? "pointer" : c ? "crosshair" : "", i = p);
  });
  function s() {
    return Qt() ?? o.getView().getProjection();
  }
  function h(y) {
    return y.transform(Ct, s());
  }
  const g = (y) => {
    u == null || u({
      type: "mapClick",
      coordinates: at(y.coordinate, s())
    });
  };
  return {
    setEventHandler(y) {
      y ? (u = y, o.on("click", g)) : (u = void 0, o.un("click", g));
    },
    flyTo(y, p) {
      o.getView().animate({
        center: V(y, s()),
        ...p ? { zoom: p } : {},
        duration: 2e3,
        ...t
      });
    },
    fitBounds(y, p, d) {
      o.getView().fit(qt(y, Ct, s()), {
        padding: [p, p, p, p],
        ...d ? { maxZoom: d } : {},
        duration: 2e3,
        ...e
      });
    },
    indicateReverse(y) {
      c = y, o.getTargetElement().style.cursor = y ? "crosshair" : "";
    },
    setReverseMarker(y) {
      l ? y ? l.getGeometry().setCoordinates(
        V(y, s())
      ) : (a.removeFeature(l), l.dispose(), l = void 0) : y && (l = new N(
        new Z(V(y, s()))
      ), l.setProperties({ isReverse: !0 }), a.addFeature(l));
    },
    setFeatures(y, p, d) {
      function x(v) {
        var w;
        if (v)
          for (const m of v.features) {
            const E = m.geometry.type === "Polygon" ? new ut(m.geometry.coordinates) : m.geometry.type === "MultiPolygon" ? new ft(m.geometry.coordinates) : null;
            E && a.addFeature(
              new N({
                isMask: !!((w = m.properties) != null && w.isMask),
                geometry: h(E)
              })
            );
          }
      }
      if (a.clear(), l && a.addFeature(l), p) {
        let v = !1;
        if (p.geometry.type === "GeometryCollection") {
          const w = p.geometry.geometries.map(
            (m) => m.type === "Polygon" ? new ut(m.coordinates) : m.type === "MultiPolygon" ? new ft(m.coordinates) : null
          ).filter((m) => !!m);
          if (w.length > 0)
            a.addFeature(
              new N(h(new $t(w)))
            ), v = !0;
          else
            for (const m of p.geometry.geometries)
              m.type === "LineString" ? (a.addFeature(
                new N(
                  h(new ct(m.coordinates))
                )
              ), v = !0) : m.type === "MultiLineString" && a.addFeature(
                new N(
                  h(new ht(m.coordinates))
                )
              ), v = !0;
        }
        if (!v) {
          if (p.geometry.type === "Polygon")
            kt(p, x);
          else if (p.geometry.type === "MultiPolygon")
            kt(p, x);
          else if (p.geometry.type === "LineString") {
            a.addFeature(
              new N(
                h(new ct(p.geometry.coordinates))
              )
            );
            return;
          } else if (p.geometry.type === "MultiLineString") {
            a.addFeature(
              new N(
                h(new ht(p.geometry.coordinates))
              )
            );
            return;
          }
        }
        if (!d && p.geometry.type !== "Point")
          return;
        a.addFeature(new N(h(new Z(p.center))));
      }
      for (const v of y ?? []) {
        if (v === p)
          continue;
        const w = new N(
          new Z(V(v.center, s()))
        );
        w.setId(v.id), w.setProperties({
          fuzzy: !!v.matching_text,
          tooltip: v.place_type[0] === "reverse" ? v.place_name : v.place_name.replace(/,.*/, "")
        }), a.addFeature(w);
      }
    },
    setSelectedMarker(y) {
      var x, v, w;
      const p = a.getFeatures(), d = (x = p[0]) != null && x.getProperties().isReverse ? 1 : 0;
      r > -1 && ((v = p[r + d]) == null || v.setProperties({
        isSelected: !1
      })), y > -1 && ((w = p[y + d]) == null || w.setProperties({
        isSelected: !0
      })), r = y;
    },
    getCenterAndZoom() {
      const y = o.getView(), p = y.getCenter(), d = y.getZoom();
      if (!(!p || d === void 0))
        return [d, ...at(p, s())];
    }
  };
}
export {
  Te as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
