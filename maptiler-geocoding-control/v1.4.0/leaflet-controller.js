var re = Object.defineProperty;
var ie = (r, t, e) => t in r ? re(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var it = (r, t, e) => ie(r, typeof t != "symbol" ? t + "" : t, e);
import * as F from "leaflet";
function V(r, t, e = {}) {
  const n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = r, n;
}
function xt(r, t, e = {}) {
  for (const i of r) {
    if (i.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (i[i.length - 1].length !== i[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let o = 0; o < i[i.length - 1].length; o++)
      if (i[i.length - 1][o] !== i[0][o])
        throw new Error("First and last Position are not equivalent.");
  }
  return V({
    type: "Polygon",
    coordinates: r
  }, t, e);
}
function Z(r, t = {}) {
  const e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = r, e;
}
function Qt(r, t, e = {}) {
  return V({
    type: "MultiPolygon",
    coordinates: r
  }, t, e);
}
function Ut(r, t, e) {
  if (r !== null)
    for (var n, i, o, l, u, c, f, p = 0, s = 0, a, h = r.type, g = h === "FeatureCollection", y = h === "Feature", d = g ? r.features.length : 1, x = 0; x < d; x++) {
      f = g ? r.features[x].geometry : y ? r.geometry : r, a = f ? f.type === "GeometryCollection" : !1, u = a ? f.geometries.length : 1;
      for (var v = 0; v < u; v++) {
        var m = 0, w = 0;
        if (l = a ? f.geometries[v] : f, l !== null) {
          c = l.coordinates;
          var E = l.type;
          switch (p = 0, E) {
            case null:
              break;
            case "Point":
              if (t(
                c,
                s,
                x,
                m,
                w
              ) === !1)
                return !1;
              s++, m++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < c.length; n++) {
                if (t(
                  c[n],
                  s,
                  x,
                  m,
                  w
                ) === !1)
                  return !1;
                s++, E === "MultiPoint" && m++;
              }
              E === "LineString" && m++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < c.length; n++) {
                for (i = 0; i < c[n].length - p; i++) {
                  if (t(
                    c[n][i],
                    s,
                    x,
                    m,
                    w
                  ) === !1)
                    return !1;
                  s++;
                }
                E === "MultiLineString" && m++, E === "Polygon" && w++;
              }
              E === "Polygon" && m++;
              break;
            case "MultiPolygon":
              for (n = 0; n < c.length; n++) {
                for (w = 0, i = 0; i < c[n].length; i++) {
                  for (o = 0; o < c[n][i].length - p; o++) {
                    if (t(
                      c[n][i][o],
                      s,
                      x,
                      m,
                      w
                    ) === !1)
                      return !1;
                    s++;
                  }
                  w++;
                }
                m++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < l.geometries.length; n++)
                if (Ut(l.geometries[n], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function mt(r, t) {
  var e, n, i, o, l, u, c, f, p, s, a = 0, h = r.type === "FeatureCollection", g = r.type === "Feature", y = h ? r.features.length : 1;
  for (e = 0; e < y; e++) {
    for (u = h ? r.features[e].geometry : g ? r.geometry : r, f = h ? r.features[e].properties : g ? r.properties : {}, p = h ? r.features[e].bbox : g ? r.bbox : void 0, s = h ? r.features[e].id : g ? r.id : void 0, c = u ? u.type === "GeometryCollection" : !1, l = c ? u.geometries.length : 1, i = 0; i < l; i++) {
      if (o = c ? u.geometries[i] : u, o === null) {
        if (t(
          null,
          a,
          f,
          p,
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
            a,
            f,
            p,
            s
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < o.geometries.length; n++)
            if (t(
              o.geometries[n],
              a,
              f,
              p,
              s
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    a++;
  }
}
function oe(r, t) {
  mt(r, function(e, n, i, o, l) {
    var u = e === null ? null : e.type;
    switch (u) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return t(
          V(e, i, { bbox: o, id: l }),
          n,
          0
        ) === !1 ? !1 : void 0;
    }
    var c;
    switch (u) {
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
      var p = e.coordinates[f], s = {
        type: c,
        coordinates: p
      };
      if (t(V(s, i), n, f) === !1)
        return !1;
    }
  });
}
function se(r, t = {}) {
  if (r.bbox != null && t.recompute !== !0)
    return r.bbox;
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Ut(r, (n) => {
    e[0] > n[0] && (e[0] = n[0]), e[1] > n[1] && (e[1] = n[1]), e[2] < n[0] && (e[2] = n[0]), e[3] < n[1] && (e[3] = n[1]);
  }), e;
}
var ut = se;
function le(r) {
  if (!r)
    throw new Error("geojson is required");
  switch (r.type) {
    case "Feature":
      return Yt(r);
    case "FeatureCollection":
      return ue(r);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return vt(r);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function Yt(r) {
  const t = { type: "Feature" };
  return Object.keys(r).forEach((e) => {
    switch (e) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        t[e] = r[e];
    }
  }), t.properties = Dt(r.properties), r.geometry == null ? t.geometry = null : t.geometry = vt(r.geometry), t;
}
function Dt(r) {
  const t = {};
  return r && Object.keys(r).forEach((e) => {
    const n = r[e];
    typeof n == "object" ? n === null ? t[e] = null : Array.isArray(n) ? t[e] = n.map((i) => i) : t[e] = Dt(n) : t[e] = n;
  }), t;
}
function ue(r) {
  const t = { type: "FeatureCollection" };
  return Object.keys(r).forEach((e) => {
    switch (e) {
      case "type":
      case "features":
        return;
      default:
        t[e] = r[e];
    }
  }), t.features = r.features.map((e) => Yt(e)), t;
}
function vt(r) {
  const t = { type: r.type };
  return r.bbox && (t.bbox = r.bbox), r.type === "GeometryCollection" ? (t.geometries = r.geometries.map((e) => vt(e)), t) : (t.coordinates = jt(r.coordinates), t);
}
function jt(r) {
  const t = r;
  return typeof t[0] != "object" ? t.slice() : t.map((e) => jt(e));
}
var fe = le;
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
function ce(r, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, i, o, l;
  return l = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function u(f) {
    return function(p) {
      return c([f, p]);
    };
  }
  function c(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; e; ) try {
      if (n = 1, i && (o = f[0] & 2 ? i.return : f[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, f[1])).done) return o;
      switch (i = 0, o && (f = [f[0] & 2, o.value]), f[0]) {
        case 0:
        case 1:
          o = f;
          break;
        case 4:
          return e.label++, { value: f[1], done: !1 };
        case 5:
          e.label++, i = f[1], f = [0];
          continue;
        case 7:
          f = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            e = 0;
            continue;
          }
          if (f[0] === 3 && (!o || f[1] > o[0] && f[1] < o[3])) {
            e.label = f[1];
            break;
          }
          if (f[0] === 6 && e.label < o[1]) {
            e.label = o[1], o = f;
            break;
          }
          if (o && e.label < o[2]) {
            e.label = o[2], e.ops.push(f);
            break;
          }
          o[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      f = t.call(r, e);
    } catch (p) {
      f = [6, p], i = 0;
    } finally {
      n = o = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
var T = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return r;
  }()
);
function he(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function B(r, t, e) {
  for (var n = new T(null, null), i = n, o = n; ; ) {
    var l = e(r, t.key);
    if (l < 0) {
      if (t.left === null)
        break;
      if (e(r, t.left.key) < 0) {
        var u = t.left;
        if (t.left = u.right, u.right = t, t = u, t.left === null)
          break;
      }
      o.left = t, o = t, t = t.left;
    } else if (l > 0) {
      if (t.right === null)
        break;
      if (e(r, t.right.key) > 0) {
        var u = t.right;
        if (t.right = u.left, u.left = t, t = u, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, o.left = t.right, t.left = n.right, t.right = n.left, t;
}
function ot(r, t, e, n) {
  var i = new T(r, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = B(r, e, n);
  var o = n(r, e.key);
  return o < 0 ? (i.left = e.left, i.right = e, e.left = null) : o >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function bt(r, t, e) {
  var n = null, i = null;
  if (t) {
    t = B(r, t, e);
    var o = e(t.key, r);
    o === 0 ? (n = t.left, i = t.right) : o < 0 ? (i = t.right, t.right = null, n = t) : (n = t.left, t.left = null, i = t);
  }
  return { left: n, right: i };
}
function ae(r, t, e) {
  return t === null ? r : (r === null || (t = B(r.key, t, e), t.left = r), t);
}
function ft(r, t, e, n, i) {
  if (r) {
    n("" + t + (e ? "└── " : "├── ") + i(r) + `
`);
    var o = t + (e ? "    " : "│   ");
    r.left && ft(r.left, o, !1, n, i), r.right && ft(r.right, o, !0, n, i);
  }
}
var wt = (
  /** @class */
  function() {
    function r(t) {
      t === void 0 && (t = he), this._root = null, this._size = 0, this._comparator = t;
    }
    return r.prototype.insert = function(t, e) {
      return this._size++, this._root = ot(t, e, this._root, this._comparator);
    }, r.prototype.add = function(t, e) {
      var n = new T(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var i = this._comparator, o = B(t, this._root, i), l = i(t, o.key);
      return l === 0 ? this._root = o : (l < 0 ? (n.left = o.left, n.right = o, o.left = null) : l > 0 && (n.right = o.right, n.left = o, o.right = null), this._size++, this._root = n), this._root;
    }, r.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, r.prototype._remove = function(t, e, n) {
      var i;
      if (e === null)
        return null;
      e = B(t, e, n);
      var o = n(t, e.key);
      return o === 0 ? (e.left === null ? i = e.right : (i = B(t, e.left, n), i.right = e.right), this._size--, i) : e;
    }, r.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = B(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
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
      return this._root && (this._root = B(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
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
      for (var o = [], l = this._comparator, u = this._root, c; o.length !== 0 || u; )
        if (u)
          o.push(u), u = u.left;
        else {
          if (u = o.pop(), c = l(u.key, e), c > 0)
            break;
          if (l(u.key, t) >= 0 && n.call(i, u))
            return this;
          u = u.right;
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
      return ge(this._root);
    }, r.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var i = t.length, o = this._comparator;
      if (n && at(t, e, 0, i - 1, o), this._root === null)
        this._root = ct(t, e, 0, i), this._size = i;
      else {
        var l = ye(this.toList(), pe(t, e), o);
        i = this._size + i, this._root = ht({ head: l }, 0, i);
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
      return ft(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, r.prototype.update = function(t, e, n) {
      var i = this._comparator, o = bt(t, this._root, i), l = o.left, u = o.right;
      i(t, e) < 0 ? u = ot(e, n, u, i) : l = ot(e, n, l, i), this._root = ae(l, u, i);
    }, r.prototype.split = function(t) {
      return bt(t, this._root, this._comparator);
    }, r.prototype[Symbol.iterator] = function() {
      var t, e, n;
      return ce(this, function(i) {
        switch (i.label) {
          case 0:
            t = this._root, e = [], n = !1, i.label = 1;
          case 1:
            return n ? [3, 6] : t === null ? [3, 2] : (e.push(t), t = t.left, [3, 5]);
          case 2:
            return e.length === 0 ? [3, 4] : (t = e.pop(), [4, t]);
          case 3:
            return i.sent(), t = t.right, [3, 5];
          case 4:
            n = !0, i.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, r;
  }()
);
function ct(r, t, e, n) {
  var i = n - e;
  if (i > 0) {
    var o = e + Math.floor(i / 2), l = r[o], u = t[o], c = new T(l, u);
    return c.left = ct(r, t, e, o), c.right = ct(r, t, o + 1, n), c;
  }
  return null;
}
function pe(r, t) {
  for (var e = new T(null, null), n = e, i = 0; i < r.length; i++)
    n = n.next = new T(r[i], t[i]);
  return n.next = null, e.next;
}
function ge(r) {
  for (var t = r, e = [], n = !1, i = new T(null, null), o = i; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = o = o.next = e.pop(), t = t.right) : n = !0;
  return o.next = null, i.next;
}
function ht(r, t, e) {
  var n = e - t;
  if (n > 0) {
    var i = t + Math.floor(n / 2), o = ht(r, t, i), l = r.head;
    return l.left = o, r.head = r.head.next, l.right = ht(r, i + 1, e), l;
  }
  return null;
}
function ye(r, t, e) {
  for (var n = new T(null, null), i = n, o = r, l = t; o !== null && l !== null; )
    e(o.key, l.key) < 0 ? (i.next = o, o = o.next) : (i.next = l, l = l.next), i = i.next;
  return o !== null ? i.next = o : l !== null && (i.next = l), n.next;
}
function at(r, t, e, n, i) {
  if (!(e >= n)) {
    for (var o = r[e + n >> 1], l = e - 1, u = n + 1; ; ) {
      do
        l++;
      while (i(r[l], o) < 0);
      do
        u--;
      while (i(r[u], o) > 0);
      if (l >= u)
        break;
      var c = r[l];
      r[l] = r[u], r[u] = c, c = t[l], t[l] = t[u], t[u] = c;
    }
    at(r, t, e, u, i), at(r, t, u + 1, n, i);
  }
}
const O = 11102230246251565e-32, S = 134217729, de = (3 + 8 * O) * O;
function st(r, t, e, n, i) {
  let o, l, u, c, f = t[0], p = n[0], s = 0, a = 0;
  p > f == p > -f ? (o = f, f = t[++s]) : (o = p, p = n[++a]);
  let h = 0;
  if (s < r && a < e)
    for (p > f == p > -f ? (l = f + o, u = o - (l - f), f = t[++s]) : (l = p + o, u = o - (l - p), p = n[++a]), o = l, u !== 0 && (i[h++] = u); s < r && a < e; )
      p > f == p > -f ? (l = o + f, c = l - o, u = o - (l - c) + (f - c), f = t[++s]) : (l = o + p, c = l - o, u = o - (l - c) + (p - c), p = n[++a]), o = l, u !== 0 && (i[h++] = u);
  for (; s < r; )
    l = o + f, c = l - o, u = o - (l - c) + (f - c), f = t[++s], o = l, u !== 0 && (i[h++] = u);
  for (; a < e; )
    l = o + p, c = l - o, u = o - (l - c) + (p - c), p = n[++a], o = l, u !== 0 && (i[h++] = u);
  return (o !== 0 || h === 0) && (i[h++] = o), h;
}
function xe(r, t) {
  let e = t[0];
  for (let n = 1; n < r; n++) e += t[n];
  return e;
}
function K(r) {
  return new Float64Array(r);
}
const me = (3 + 16 * O) * O, ve = (2 + 12 * O) * O, we = (9 + 64 * O) * O * O, q = K(4), _t = K(8), St = K(12), Pt = K(16), P = K(4);
function Ee(r, t, e, n, i, o, l) {
  let u, c, f, p, s, a, h, g, y, d, x, v, m, w, E, b, M, _;
  const C = r - i, R = e - i, k = t - o, I = n - o;
  w = C * I, a = S * C, h = a - (a - C), g = C - h, a = S * I, y = a - (a - I), d = I - y, E = g * d - (w - h * y - g * y - h * d), b = k * R, a = S * k, h = a - (a - k), g = k - h, a = S * R, y = a - (a - R), d = R - y, M = g * d - (b - h * y - g * y - h * d), x = E - M, s = E - x, q[0] = E - (x + s) + (s - M), v = w + x, s = v - w, m = w - (v - s) + (x - s), x = m - b, s = m - x, q[1] = m - (x + s) + (s - b), _ = v + x, s = _ - v, q[2] = v - (_ - s) + (x - s), q[3] = _;
  let A = xe(4, q), D = ve * l;
  if (A >= D || -A >= D || (s = r - C, u = r - (C + s) + (s - i), s = e - R, f = e - (R + s) + (s - i), s = t - k, c = t - (k + s) + (s - o), s = n - I, p = n - (I + s) + (s - o), u === 0 && c === 0 && f === 0 && p === 0) || (D = we * l + de * Math.abs(A), A += C * p + I * u - (k * f + R * c), A >= D || -A >= D)) return A;
  w = u * I, a = S * u, h = a - (a - u), g = u - h, a = S * I, y = a - (a - I), d = I - y, E = g * d - (w - h * y - g * y - h * d), b = c * R, a = S * c, h = a - (a - c), g = c - h, a = S * R, y = a - (a - R), d = R - y, M = g * d - (b - h * y - g * y - h * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = w + x, s = v - w, m = w - (v - s) + (x - s), x = m - b, s = m - x, P[1] = m - (x + s) + (s - b), _ = v + x, s = _ - v, P[2] = v - (_ - s) + (x - s), P[3] = _;
  const te = st(4, q, 4, P, _t);
  w = C * p, a = S * C, h = a - (a - C), g = C - h, a = S * p, y = a - (a - p), d = p - y, E = g * d - (w - h * y - g * y - h * d), b = k * f, a = S * k, h = a - (a - k), g = k - h, a = S * f, y = a - (a - f), d = f - y, M = g * d - (b - h * y - g * y - h * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = w + x, s = v - w, m = w - (v - s) + (x - s), x = m - b, s = m - x, P[1] = m - (x + s) + (s - b), _ = v + x, s = _ - v, P[2] = v - (_ - s) + (x - s), P[3] = _;
  const ee = st(te, _t, 4, P, St);
  w = u * p, a = S * u, h = a - (a - u), g = u - h, a = S * p, y = a - (a - p), d = p - y, E = g * d - (w - h * y - g * y - h * d), b = c * f, a = S * c, h = a - (a - c), g = c - h, a = S * f, y = a - (a - f), d = f - y, M = g * d - (b - h * y - g * y - h * d), x = E - M, s = E - x, P[0] = E - (x + s) + (s - M), v = w + x, s = v - w, m = w - (v - s) + (x - s), x = m - b, s = m - x, P[1] = m - (x + s) + (s - b), _ = v + x, s = _ - v, P[2] = v - (_ - s) + (x - s), P[3] = _;
  const ne = st(ee, St, 4, P, Pt);
  return Pt[ne - 1];
}
function be(r, t, e, n, i, o) {
  const l = (t - o) * (e - i), u = (r - i) * (n - o), c = l - u, f = Math.abs(l + u);
  return Math.abs(c) >= me * f ? c : -Ee(r, t, e, n, i, o, f);
}
const j = (r, t) => r.ll.x <= t.x && t.x <= r.ur.x && r.ll.y <= t.y && t.y <= r.ur.y, pt = (r, t) => {
  if (t.ur.x < r.ll.x || r.ur.x < t.ll.x || t.ur.y < r.ll.y || r.ur.y < t.ll.y) return null;
  const e = r.ll.x < t.ll.x ? t.ll.x : r.ll.x, n = r.ur.x < t.ur.x ? r.ur.x : t.ur.x, i = r.ll.y < t.ll.y ? t.ll.y : r.ll.y, o = r.ur.y < t.ur.y ? r.ur.y : t.ur.y;
  return {
    ll: {
      x: e,
      y: i
    },
    ur: {
      x: n,
      y: o
    }
  };
};
let G = Number.EPSILON;
G === void 0 && (G = Math.pow(2, -52));
const _e = G * G, Mt = (r, t) => {
  if (-G < r && r < G && -G < t && t < G)
    return 0;
  const e = r - t;
  return e * e < _e * r * t ? 0 : r < t ? -1 : 1;
};
class Se {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Lt(), this.yRounder = new Lt();
  }
  round(t, e) {
    return {
      x: this.xRounder.round(t),
      y: this.yRounder.round(e)
    };
  }
}
class Lt {
  constructor() {
    this.tree = new wt(), this.round(0);
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
    if (n !== null && Mt(e.key, n.key) === 0)
      return this.tree.remove(t), n.key;
    const i = this.tree.next(e);
    return i !== null && Mt(e.key, i.key) === 0 ? (this.tree.remove(t), i.key) : t;
  }
}
const J = new Se(), tt = (r, t) => r.x * t.y - r.y * t.x, Xt = (r, t) => r.x * t.x + r.y * t.y, Ct = (r, t, e) => {
  const n = be(r.x, r.y, t.x, t.y, e.x, e.y);
  return n > 0 ? -1 : n < 0 ? 1 : 0;
}, et = (r) => Math.sqrt(Xt(r, r)), Pe = (r, t, e) => {
  const n = {
    x: t.x - r.x,
    y: t.y - r.y
  }, i = {
    x: e.x - r.x,
    y: e.y - r.y
  };
  return tt(i, n) / et(i) / et(n);
}, Me = (r, t, e) => {
  const n = {
    x: t.x - r.x,
    y: t.y - r.y
  }, i = {
    x: e.x - r.x,
    y: e.y - r.y
  };
  return Xt(i, n) / et(i) / et(n);
}, Rt = (r, t, e) => t.y === 0 ? null : {
  x: r.x + t.x / t.y * (e - r.y),
  y: e
}, kt = (r, t, e) => t.x === 0 ? null : {
  x: e,
  y: r.y + t.y / t.x * (e - r.x)
}, Le = (r, t, e, n) => {
  if (t.x === 0) return kt(e, n, r.x);
  if (n.x === 0) return kt(r, t, e.x);
  if (t.y === 0) return Rt(e, n, r.y);
  if (n.y === 0) return Rt(r, t, e.y);
  const i = tt(t, n);
  if (i == 0) return null;
  const o = {
    x: e.x - r.x,
    y: e.y - r.y
  }, l = tt(o, t) / i, u = tt(o, n) / i, c = r.x + u * t.x, f = e.x + l * n.x, p = r.y + u * t.y, s = e.y + l * n.y, a = (c + f) / 2, h = (p + s) / 2;
  return {
    x: a,
    y: h
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
    for (let n = 0, i = e.length; n < i; n++) {
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
        for (let i = e + 1; i < t; i++) {
          const o = this.point.events[i];
          o.consumedBy === void 0 && n.otherSE.point.events === o.otherSE.point.events && n.segment.consume(o.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const t = [];
    for (let e = 0, n = this.point.events.length; e < n; e++) {
      const i = this.point.events[e];
      i !== this && !i.segment.ringOut && i.segment.isInResult() && t.push(i);
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
    const e = /* @__PURE__ */ new Map(), n = (i) => {
      const o = i.otherSE;
      e.set(i, {
        sine: Pe(this.point, t.point, o.point),
        cosine: Me(this.point, t.point, o.point)
      });
    };
    return (i, o) => {
      e.has(i) || n(i), e.has(o) || n(o);
      const {
        sine: l,
        cosine: u
      } = e.get(i), {
        sine: c,
        cosine: f
      } = e.get(o);
      return l >= 0 && c >= 0 ? u < f ? 1 : u > f ? -1 : 0 : l < 0 && c < 0 ? u < f ? -1 : u > f ? 1 : 0 : c < l ? -1 : c > l ? 1 : 0;
    };
  }
}
let Ce = 0;
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
    const n = t.leftSE.point.x, i = e.leftSE.point.x, o = t.rightSE.point.x, l = e.rightSE.point.x;
    if (l < n) return 1;
    if (o < i) return -1;
    const u = t.leftSE.point.y, c = e.leftSE.point.y, f = t.rightSE.point.y, p = e.rightSE.point.y;
    if (n < i) {
      if (c < u && c < f) return 1;
      if (c > u && c > f) return -1;
      const s = t.comparePoint(e.leftSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
      const a = e.comparePoint(t.rightSE.point);
      return a !== 0 ? a : -1;
    }
    if (n > i) {
      if (u < c && u < p) return -1;
      if (u > c && u > p) return 1;
      const s = e.comparePoint(t.leftSE.point);
      if (s !== 0) return s;
      const a = t.comparePoint(e.rightSE.point);
      return a < 0 ? 1 : a > 0 ? -1 : 1;
    }
    if (u < c) return -1;
    if (u > c) return 1;
    if (o < l) {
      const s = e.comparePoint(t.rightSE.point);
      if (s !== 0) return s;
    }
    if (o > l) {
      const s = t.comparePoint(e.rightSE.point);
      if (s < 0) return 1;
      if (s > 0) return -1;
    }
    if (o !== l) {
      const s = f - u, a = o - n, h = p - c, g = l - i;
      if (s > a && h < g) return 1;
      if (s < a && h > g) return -1;
    }
    return o > l ? 1 : o < l || f < p ? -1 : f > p ? 1 : t.id < e.id ? -1 : t.id > e.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(t, e, n, i) {
    this.id = ++Ce, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = i;
  }
  static fromRing(t, e, n) {
    let i, o, l;
    const u = L.comparePoints(t, e);
    if (u < 0)
      i = t, o = e, l = 1;
    else if (u > 0)
      i = e, o = t, l = -1;
    else throw new Error(`Tried to create degenerate segment at [${t.x}, ${t.y}]`);
    const c = new L(i, !0), f = new L(o, !1);
    return new z(c, f, [n], [l]);
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
    const e = this.leftSE.point, n = this.rightSE.point, i = this.vector();
    if (e.x === n.x)
      return t.x === e.x ? 0 : t.x < e.x ? 1 : -1;
    const o = (t.y - e.y) / i.y, l = e.x + o * i.x;
    if (t.x === l) return 0;
    const u = (t.x - e.x) / i.x, c = e.y + u * i.y;
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
    const e = this.bbox(), n = t.bbox(), i = pt(e, n);
    if (i === null) return null;
    const o = this.leftSE.point, l = this.rightSE.point, u = t.leftSE.point, c = t.rightSE.point, f = j(e, u) && this.comparePoint(u) === 0, p = j(n, o) && t.comparePoint(o) === 0, s = j(e, c) && this.comparePoint(c) === 0, a = j(n, l) && t.comparePoint(l) === 0;
    if (p && f)
      return a && !s ? l : !a && s ? c : null;
    if (p)
      return s && o.x === c.x && o.y === c.y ? null : o;
    if (f)
      return a && l.x === u.x && l.y === u.y ? null : u;
    if (a && s) return null;
    if (a) return l;
    if (s) return c;
    const h = Le(o, this.vector(), u, t.vector());
    return h === null || !j(i, h) ? null : J.round(h.x, h.y);
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
    const e = [], n = t.events !== void 0, i = new L(t, !0), o = new L(t, !1), l = this.rightSE;
    this.replaceRightSE(o), e.push(o), e.push(i);
    const u = new z(i, l, this.rings.slice(), this.windings.slice());
    return L.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), L.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), n && (i.checkForConsuming(), o.checkForConsuming()), e;
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
    const i = z.compare(e, n);
    if (i !== 0) {
      if (i > 0) {
        const o = e;
        e = n, n = o;
      }
      if (e.prev === n) {
        const o = e;
        e = n, n = o;
      }
      for (let o = 0, l = n.rings.length; o < l; o++) {
        const u = n.rings[o], c = n.windings[o], f = e.rings.indexOf(u);
        f === -1 ? (e.rings.push(u), e.windings.push(c)) : e.windings[f] += c;
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
    const e = this._afterState.rings, n = this._afterState.windings, i = this._afterState.multiPolys;
    for (let u = 0, c = this.rings.length; u < c; u++) {
      const f = this.rings[u], p = this.windings[u], s = e.indexOf(f);
      s === -1 ? (e.push(f), n.push(p)) : n[s] += p;
    }
    const o = [], l = [];
    for (let u = 0, c = e.length; u < c; u++) {
      if (n[u] === 0) continue;
      const f = e[u], p = f.poly;
      if (l.indexOf(p) === -1)
        if (f.isExterior) o.push(p);
        else {
          l.indexOf(p) === -1 && l.push(p);
          const s = o.indexOf(f.poly);
          s !== -1 && o.splice(s, 1);
        }
    }
    for (let u = 0, c = o.length; u < c; u++) {
      const f = o[u].multiPoly;
      i.indexOf(f) === -1 && i.push(f);
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
        const n = t.length === 0, i = e.length === 0;
        this._isInResult = n !== i;
        break;
      }
      case "intersection": {
        let n, i;
        t.length < e.length ? (n = t.length, i = e.length) : (n = e.length, i = t.length), this._isInResult = i === $.numMultiPolys && n < i;
        break;
      }
      case "xor": {
        const n = Math.abs(t.length - e.length);
        this._isInResult = n % 2 === 1;
        break;
      }
      case "difference": {
        const n = (i) => i.length === 1 && i[0].isSubject;
        this._isInResult = n(t) !== n(e);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${$.type}`);
    }
    return this._isInResult;
  }
}
class It {
  constructor(t, e, n) {
    if (!Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const i = J.round(t[0][0], t[0][1]);
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
    let o = i;
    for (let l = 1, u = t.length; l < u; l++) {
      if (typeof t[l][0] != "number" || typeof t[l][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let c = J.round(t[l][0], t[l][1]);
      c.x === o.x && c.y === o.y || (this.segments.push(z.fromRing(o, c, this)), c.x < this.bbox.ll.x && (this.bbox.ll.x = c.x), c.y < this.bbox.ll.y && (this.bbox.ll.y = c.y), c.x > this.bbox.ur.x && (this.bbox.ur.x = c.x), c.y > this.bbox.ur.y && (this.bbox.ur.y = c.y), o = c);
    }
    (i.x !== o.x || i.y !== o.y) && this.segments.push(z.fromRing(o, i, this));
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.segments.length; e < n; e++) {
      const i = this.segments[e];
      t.push(i.leftSE), t.push(i.rightSE);
    }
    return t;
  }
}
class Re {
  constructor(t, e) {
    if (!Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new It(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let n = 1, i = t.length; n < i; n++) {
      const o = new It(t[n], this, !1);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.interiorRings.push(o);
    }
    this.multiPoly = e;
  }
  getSweepEvents() {
    const t = this.exteriorRing.getSweepEvents();
    for (let e = 0, n = this.interiorRings.length; e < n; e++) {
      const i = this.interiorRings[e].getSweepEvents();
      for (let o = 0, l = i.length; o < l; o++)
        t.push(i[o]);
    }
    return t;
  }
}
class $t {
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
    for (let n = 0, i = t.length; n < i; n++) {
      const o = new Re(t[n], this);
      o.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = o.bbox.ll.x), o.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = o.bbox.ll.y), o.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = o.bbox.ur.x), o.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = o.bbox.ur.y), this.polys.push(o);
    }
    this.isSubject = e;
  }
  getSweepEvents() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const i = this.polys[e].getSweepEvents();
      for (let o = 0, l = i.length; o < l; o++)
        t.push(i[o]);
    }
    return t;
  }
}
class nt {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const o = t[n];
      if (!o.isInResult() || o.ringOut) continue;
      let l = null, u = o.leftSE, c = o.rightSE;
      const f = [u], p = u.point, s = [];
      for (; l = u, u = c, f.push(u), u.point !== p; )
        for (; ; ) {
          const a = u.getAvailableLinkedEvents();
          if (a.length === 0) {
            const y = f[0].point, d = f[f.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${y.x}, ${y.y}]. Last matching segment found ends at [${d.x}, ${d.y}].`);
          }
          if (a.length === 1) {
            c = a[0].otherSE;
            break;
          }
          let h = null;
          for (let y = 0, d = s.length; y < d; y++)
            if (s[y].point === u.point) {
              h = y;
              break;
            }
          if (h !== null) {
            const y = s.splice(h)[0], d = f.splice(y.index);
            d.unshift(d[0].otherSE), e.push(new nt(d.reverse()));
            continue;
          }
          s.push({
            index: f.length,
            point: u.point
          });
          const g = u.getLeftmostComparator(l);
          c = a.sort(g)[0].otherSE;
          break;
        }
      e.push(new nt(f));
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
    for (let f = 1, p = this.events.length - 1; f < p; f++) {
      const s = this.events[f].point, a = this.events[f + 1].point;
      Ct(s, t, a) !== 0 && (e.push(s), t = s);
    }
    if (e.length === 1) return null;
    const n = e[0], i = e[1];
    Ct(n, t, i) === 0 && e.shift(), e.push(e[0]);
    const o = this.isExteriorRing() ? 1 : -1, l = this.isExteriorRing() ? 0 : e.length - 1, u = this.isExteriorRing() ? e.length : -1, c = [];
    for (let f = l; f != u; f += o) c.push([e[f].x, e[f].y]);
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
    for (let i = 1, o = this.events.length; i < o; i++) {
      const l = this.events[i];
      L.compare(t, l) > 0 && (t = l);
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
class At {
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
      const i = this.interiorRings[e].getGeom();
      i !== null && t.push(i);
    }
    return t;
  }
}
class ke {
  constructor(t) {
    this.rings = t, this.polys = this._composePolys(t);
  }
  getGeom() {
    const t = [];
    for (let e = 0, n = this.polys.length; e < n; e++) {
      const i = this.polys[e].getGeom();
      i !== null && t.push(i);
    }
    return t;
  }
  _composePolys(t) {
    const e = [];
    for (let n = 0, i = t.length; n < i; n++) {
      const o = t[n];
      if (!o.poly)
        if (o.isExteriorRing()) e.push(new At(o));
        else {
          const l = o.enclosingRing();
          l.poly || e.push(new At(l)), l.poly.addInterior(o);
        }
    }
    return e;
  }
}
class Ie {
  constructor(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : z.compare;
    this.queue = t, this.tree = new wt(e), this.segments = [];
  }
  process(t) {
    const e = t.segment, n = [];
    if (t.consumedBy)
      return t.isLeft ? this.queue.remove(t.otherSE) : this.tree.remove(e), n;
    const i = t.isLeft ? this.tree.add(e) : this.tree.find(e);
    if (!i) throw new Error(`Unable to find segment #${e.id} [${e.leftSE.point.x}, ${e.leftSE.point.y}] -> [${e.rightSE.point.x}, ${e.rightSE.point.y}] in SweepLine tree.`);
    let o = i, l = i, u, c;
    for (; u === void 0; )
      o = this.tree.prev(o), o === null ? u = null : o.key.consumedBy === void 0 && (u = o.key);
    for (; c === void 0; )
      l = this.tree.next(l), l === null ? c = null : l.key.consumedBy === void 0 && (c = l.key);
    if (t.isLeft) {
      let f = null;
      if (u) {
        const s = u.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (f = s), !u.isAnEndpoint(s))) {
          const a = this._splitSafely(u, s);
          for (let h = 0, g = a.length; h < g; h++)
            n.push(a[h]);
        }
      }
      let p = null;
      if (c) {
        const s = c.getIntersection(e);
        if (s !== null && (e.isAnEndpoint(s) || (p = s), !c.isAnEndpoint(s))) {
          const a = this._splitSafely(c, s);
          for (let h = 0, g = a.length; h < g; h++)
            n.push(a[h]);
        }
      }
      if (f !== null || p !== null) {
        let s = null;
        f === null ? s = p : p === null ? s = f : s = L.comparePoints(f, p) <= 0 ? f : p, this.queue.remove(e.rightSE), n.push(e.rightSE);
        const a = e.split(s);
        for (let h = 0, g = a.length; h < g; h++)
          n.push(a[h]);
      }
      n.length > 0 ? (this.tree.remove(e), n.push(t)) : (this.segments.push(e), e.prev = u);
    } else {
      if (u && c) {
        const f = u.getIntersection(c);
        if (f !== null) {
          if (!u.isAnEndpoint(f)) {
            const p = this._splitSafely(u, f);
            for (let s = 0, a = p.length; s < a; s++)
              n.push(p[s]);
          }
          if (!c.isAnEndpoint(f)) {
            const p = this._splitSafely(c, f);
            for (let s = 0, a = p.length; s < a; s++)
              n.push(p[s]);
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
    const i = t.split(e);
    return i.push(n), t.consumedBy === void 0 && this.tree.add(t), i;
  }
}
const Ot = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, $e = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Ae {
  run(t, e, n) {
    $.type = t, J.reset();
    const i = [new $t(e, !0)];
    for (let s = 0, a = n.length; s < a; s++)
      i.push(new $t(n[s], !1));
    if ($.numMultiPolys = i.length, $.type === "difference") {
      const s = i[0];
      let a = 1;
      for (; a < i.length; )
        pt(i[a].bbox, s.bbox) !== null ? a++ : i.splice(a, 1);
    }
    if ($.type === "intersection")
      for (let s = 0, a = i.length; s < a; s++) {
        const h = i[s];
        for (let g = s + 1, y = i.length; g < y; g++)
          if (pt(h.bbox, i[g].bbox) === null) return [];
      }
    const o = new wt(L.compare);
    for (let s = 0, a = i.length; s < a; s++) {
      const h = i[s].getSweepEvents();
      for (let g = 0, y = h.length; g < y; g++)
        if (o.insert(h[g]), o.size > Ot)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const l = new Ie(o);
    let u = o.size, c = o.pop();
    for (; c; ) {
      const s = c.key;
      if (o.size === u) {
        const h = s.segment;
        throw new Error(`Unable to pop() ${s.isLeft ? "left" : "right"} SweepEvent [${s.point.x}, ${s.point.y}] from segment #${h.id} [${h.leftSE.point.x}, ${h.leftSE.point.y}] -> [${h.rightSE.point.x}, ${h.rightSE.point.y}] from queue.`);
      }
      if (o.size > Ot)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (l.segments.length > $e)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const a = l.process(s);
      for (let h = 0, g = a.length; h < g; h++) {
        const y = a[h];
        y.consumedBy === void 0 && o.insert(y);
      }
      u = o.size, c = o.pop();
    }
    J.reset();
    const f = nt.factory(l.segments);
    return new ke(f).getGeom();
  }
}
const $ = new Ae(), Oe = function(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("union", r, e);
}, Ne = function(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("intersection", r, e);
}, Be = function(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("xor", r, e);
}, Ge = function(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  return $.run("difference", r, e);
};
var Vt = {
  union: Oe,
  intersection: Ne,
  xor: Be,
  difference: Ge
};
function ze(r, t = {}) {
  const e = [];
  if (mt(r, (i) => {
    e.push(i.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least 2 geometries");
  const n = Vt.union(e[0], ...e.slice(1));
  return n.length === 0 ? null : n.length === 1 ? xt(n[0], t.properties) : Qt(n, t.properties);
}
var Zt = ze;
function gt(r) {
  const t = [...r];
  return t[2] < t[0] && (Math.abs((t[0] + t[2] + 360) / 2) > Math.abs((t[0] - 360 + t[2]) / 2) ? t[0] -= 360 : t[2] += 360), t;
}
function W() {
}
function Jt(r) {
  return r();
}
function Nt() {
  return /* @__PURE__ */ Object.create(null);
}
function rt(r) {
  r.forEach(Jt);
}
function Wt(r) {
  return typeof r == "function";
}
function Te(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
function Fe(r) {
  return Object.keys(r).length === 0;
}
function qe(r, t) {
  r.appendChild(t);
}
function Qe(r, t, e) {
  r.insertBefore(t, e || null);
}
function Kt(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Bt(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function N(r, t, e) {
  e == null ? r.removeAttribute(t) : r.getAttribute(t) !== e && r.setAttribute(t, e);
}
function Ue(r) {
  return Array.from(r.childNodes);
}
function H(r, t, e) {
  r.classList.toggle(t, !!e);
}
let Et;
function X(r) {
  Et = r;
}
const U = [], Gt = [];
let Y = [];
const zt = [], Ye = /* @__PURE__ */ Promise.resolve();
let yt = !1;
function De() {
  yt || (yt = !0, Ye.then(Ht));
}
function dt(r) {
  Y.push(r);
}
const lt = /* @__PURE__ */ new Set();
let Q = 0;
function Ht() {
  if (Q !== 0)
    return;
  const r = Et;
  do {
    try {
      for (; Q < U.length; ) {
        const t = U[Q];
        Q++, X(t), je(t.$$);
      }
    } catch (t) {
      throw U.length = 0, Q = 0, t;
    }
    for (X(null), U.length = 0, Q = 0; Gt.length; ) Gt.pop()();
    for (let t = 0; t < Y.length; t += 1) {
      const e = Y[t];
      lt.has(e) || (lt.add(e), e());
    }
    Y.length = 0;
  } while (U.length);
  for (; zt.length; )
    zt.pop()();
  yt = !1, lt.clear(), X(r);
}
function je(r) {
  if (r.fragment !== null) {
    r.update(), rt(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(dt);
  }
}
function Xe(r) {
  const t = [], e = [];
  Y.forEach((n) => r.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), Y = t;
}
const Ve = /* @__PURE__ */ new Set();
function Ze(r, t) {
  r && r.i && (Ve.delete(r), r.i(t));
}
function Je(r, t, e) {
  const { fragment: n, after_update: i } = r.$$;
  n && n.m(t, e), dt(() => {
    const o = r.$$.on_mount.map(Jt).filter(Wt);
    r.$$.on_destroy ? r.$$.on_destroy.push(...o) : rt(o), r.$$.on_mount = [];
  }), i.forEach(dt);
}
function We(r, t) {
  const e = r.$$;
  e.fragment !== null && (Xe(e.after_update), rt(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Ke(r, t) {
  r.$$.dirty[0] === -1 && (U.push(r), De(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function He(r, t, e, n, i, o, l = null, u = [-1]) {
  const c = Et;
  X(r);
  const f = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: W,
    not_equal: i,
    bound: Nt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (c ? c.$$.context : [])),
    // everything else
    callbacks: Nt(),
    dirty: u,
    skip_bound: !1,
    root: t.target || c.$$.root
  };
  l && l(f.root);
  let p = !1;
  if (f.ctx = e ? e(r, t.props || {}, (s, a, ...h) => {
    const g = h.length ? h[0] : a;
    return f.ctx && i(f.ctx[s], f.ctx[s] = g) && (!f.skip_bound && f.bound[s] && f.bound[s](g), p && Ke(r, s)), a;
  }) : [], f.update(), p = !0, rt(f.before_update), f.fragment = n ? n(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const s = Ue(t.target);
      f.fragment && f.fragment.l(s), s.forEach(Kt);
    } else
      f.fragment && f.fragment.c();
    t.intro && Ze(r.$$.fragment), Je(r, t.target, t.anchor), Ht();
  }
  X(c);
}
class tn {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    it(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    it(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    We(this, 1), this.$destroy = W;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!Wt(e))
      return W;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const i = n.indexOf(e);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Fe(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const en = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(en);
function nn(r) {
  let t, e, n;
  return {
    c() {
      t = Bt("svg"), e = Bt("path"), N(e, "stroke-width", "4"), N(e, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), N(e, "class", "svelte-gzo3ar"), N(t, "width", n = /*displayIn*/
      r[0] === "list" ? 20 : void 0), N(t, "viewBox", "0 0 70 85"), N(t, "fill", "none"), N(t, "class", "svelte-gzo3ar"), H(
        t,
        "in-map",
        /*displayIn*/
        r[0] !== "list"
      ), H(
        t,
        "list-icon",
        /*displayIn*/
        r[0] === "list"
      );
    },
    m(i, o) {
      Qe(i, t, o), qe(t, e);
    },
    p(i, [o]) {
      o & /*displayIn*/
      1 && n !== (n = /*displayIn*/
      i[0] === "list" ? 20 : void 0) && N(t, "width", n), o & /*displayIn*/
      1 && H(
        t,
        "in-map",
        /*displayIn*/
        i[0] !== "list"
      ), o & /*displayIn*/
      1 && H(
        t,
        "list-icon",
        /*displayIn*/
        i[0] === "list"
      );
    },
    i: W,
    o: W,
    d(i) {
      i && Kt(t);
    }
  };
}
function rn(r, t, e) {
  let { displayIn: n } = t;
  return r.$$set = (i) => {
    "displayIn" in i && e(0, n = i.displayIn);
  }, [n];
}
class on extends tn {
  constructor(t) {
    super(), He(this, t, rn, nn, Te, { displayIn: 0 });
  }
}
function sn(r) {
  const t = [];
  if (mt(r, (i) => {
    t.push(i.coordinates);
  }), t.length < 2)
    throw new Error("Must have at least two features");
  const e = r.features[0].properties || {}, n = Vt.difference(t[0], ...t.slice(1));
  return n.length === 0 ? null : n.length === 1 ? xt(n[0], e) : Qt(n, e);
}
var ln = sn;
function un(r) {
  if (!r)
    throw new Error("geojson is required");
  var t = [];
  return oe(r, function(e) {
    t.push(e);
  }), Z(t);
}
var fn = un;
function Tt(r, t) {
  const e = ln(
    Z([
      xt([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      r
    ])
  );
  if (!e)
    return;
  e.properties = { isMask: !0 };
  const n = gt(ut(r)), i = (n[2] - n[0]) / 360 / 1e3, o = n[0] < -180, l = n[2] > 180, u = fn(r);
  if (u.features.length > 1 && (o || l))
    for (const c of u.features) {
      const f = gt(ut(c));
      if (l && f[0] < -180 + i)
        for (const p of c.geometry.coordinates)
          for (const s of p)
            s[0] += 360 - i;
      if (o && f[2] > 180 - i)
        for (const p of c.geometry.coordinates)
          for (const s of p)
            s[0] -= 360 - i;
    }
  t(
    Z([
      u.features.length < 2 ? r : Zt(u) ?? r,
      e
    ])
  );
}
function hn(r, t = !0, e = !0, n = {}, i = {}, o = (l) => {
  var f, p, s;
  const u = (f = l == null ? void 0 : l.geometry) == null ? void 0 : f.type, c = (p = l == null ? void 0 : l.properties) != null && p.isMask ? 0 : u === "LineString" || u === "MultiLineString" ? 3 : 2;
  return {
    color: "#3170fe",
    fillColor: "#000",
    fillOpacity: (s = l == null ? void 0 : l.properties) != null && s.isMask ? 0.1 : 0,
    weight: c,
    dashArray: [c, c],
    lineCap: "butt"
  };
}) {
  let l;
  const u = [];
  let c, f;
  const p = F.geoJSON(void 0, {
    style: o,
    interactive: !1
  }).addTo(r), s = (h) => {
    l == null || l({
      type: "mapClick",
      coordinates: [h.latlng.lng, h.latlng.lat]
    });
  };
  function a(h, g = !1) {
    const y = document.createElement("div");
    return new on({ props: { displayIn: "leaflet" }, target: y }), new F.Marker(h, {
      interactive: g,
      icon: new F.DivIcon({
        html: y,
        className: "",
        iconAnchor: [12, 26],
        iconSize: [25, 30],
        tooltipAnchor: [1, -24]
      })
    });
  }
  return {
    setEventHandler(h) {
      h ? (l = h, r.on("click", s)) : (l = void 0, r.off("click", s));
    },
    flyTo(h, g) {
      r.flyTo([h[1], h[0]], g, { duration: 2, ...n });
    },
    fitBounds(h, g, y) {
      r.flyToBounds(
        [
          [h[1], h[0]],
          [h[3], h[2]]
        ],
        {
          padding: [g, g],
          duration: 2,
          ...y ? { maxZoom: y } : {},
          ...i
        }
      );
    },
    indicateReverse(h) {
      r.getContainer().style.cursor = h ? "crosshair" : "";
    },
    setReverseMarker(h) {
      var y;
      if (!t)
        return;
      const g = h && [h[1], h[0]];
      f ? g ? f.setLatLng(g) : (f.remove(), f = void 0) : g && (f = (typeof t == "object" ? new F.Marker(g, t) : a(g)).addTo(r), (y = f.getElement()) == null || y.classList.add("marker-reverse"));
    },
    setMarkers(h, g) {
      if (!t)
        return;
      function y(d) {
        p.clearLayers(), d && p.addData(d);
      }
      for (const d of u)
        d.remove();
      if (u.length = 0, y(), g) {
        let d = !1;
        if (g.geometry.type === "GeometryCollection") {
          const v = g.geometry.geometries.filter(
            (m) => m.type === "Polygon" || m.type === "MultiPolygon"
          );
          t: if (v.length > 0) {
            const m = Zt(
              Z(v.map((w) => V(w)))
            );
            if (!m)
              break t;
            Tt(
              {
                ...g,
                geometry: m.geometry
              },
              y
            ), d = !0;
          } else {
            const m = g.geometry.geometries.filter(
              (w) => w.type === "LineString" || w.type === "MultiLineString"
            );
            m.length > 0 && (y({
              ...g,
              geometry: { type: "GeometryCollection", geometries: m }
            }), d = !0);
          }
        }
        if (!d) {
          if (g.geometry.type === "Polygon" || g.geometry.type === "MultiPolygon")
            Tt(g, (v) => {
              if (!v)
                return;
              const m = [...v.features], w = gt(ut(g)), E = w[2] - w[0];
              w[0] - E / 4 < -180 && m.push(...Ft(v, -360).features), w[2] + E / 4 > 180 && m.push(...Ft(v, 360).features), y(Z(m));
            });
          else if (g.geometry.type === "LineString" || g.geometry.type === "MultiLineString") {
            y(g);
            return;
          }
        }
        const x = [g.center[1], g.center[0]];
        u.push(
          (typeof t == "object" ? new F.Marker(x, t) : a(x)).addTo(r)
        );
      }
      if (e)
        for (const d of h ?? []) {
          if (d === g)
            continue;
          const x = [
            d.center[1],
            d.center[0]
          ], v = typeof e == "object" ? new F.Marker(x, e) : a(x, !0);
          v.addTo(r).bindTooltip(
            d.place_type[0] === "reverse" ? d.place_name : d.place_name.replace(/,.*/, ""),
            {
              direction: "top"
            }
          );
          const m = v.getElement();
          m && (m.addEventListener("click", (w) => {
            w.stopPropagation(), l == null || l({ type: "markerClick", id: d.id });
          }), m.addEventListener("mouseenter", () => {
            l == null || l({ type: "markerMouseEnter", id: d.id });
          }), m.addEventListener("mouseleave", () => {
            l == null || l({ type: "markerMouseLeave", id: d.id });
          }), m.classList.toggle("marker-fuzzy", !!d.matching_text)), u.push(v);
        }
    },
    setSelectedMarker(h) {
      var g, y;
      c && ((g = c.getElement()) == null || g.classList.toggle("marker-selected", !1)), c = h > -1 ? u[h] : void 0, (y = c == null ? void 0 : c.getElement()) == null || y.classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const h = r.getCenter();
      return [r.getZoom(), h.lng, h.lat];
    }
  };
}
function Ft(r, t) {
  const e = fe(r);
  for (const n of e.features)
    if (n.geometry.type == "MultiPolygon")
      for (const i of n.geometry.coordinates)
        qt(i, t);
    else
      qt(n.geometry.coordinates, t);
  return e;
}
function qt(r, t) {
  for (const e of r)
    for (const n of e)
      n[0] += t;
}
export {
  hn as createLeafletMapController
};
//# sourceMappingURL=leaflet-controller.js.map
