import { Feature as rt } from "ol";
import { Point as Jn, Polygon as sr, MultiPolygon as ar, GeometryCollection as xa, LineString as ur, MultiLineString as or } from "ol/geom";
import ka from "ol/layer/Vector";
import { fromLonLat as gn, transformExtent as Ea, toLonLat as lr, getUserProjection as Ia } from "ol/proj";
import Na from "ol/source/Vector";
import hr from "ol/style/Fill";
import Sa from "ol/style/Icon";
import cr from "ol/style/Stroke";
import wa from "ol/style/Style";
import La from "ol/style/Text";
var Ce = 63710088e-1, Hr = {
  centimeters: Ce * 100,
  centimetres: Ce * 100,
  degrees: 360 / (2 * Math.PI),
  feet: Ce * 3.28084,
  inches: Ce * 39.37,
  kilometers: Ce / 1e3,
  kilometres: Ce / 1e3,
  meters: Ce,
  metres: Ce,
  miles: Ce / 1609.344,
  millimeters: Ce * 1e3,
  millimetres: Ce * 1e3,
  nauticalmiles: Ce / 1852,
  radians: 1,
  yards: Ce * 1.0936
};
function Tn(h, u, a = {}) {
  const f = { type: "Feature" };
  return (a.id === 0 || a.id) && (f.id = a.id), a.bbox && (f.bbox = a.bbox), f.properties = u || {}, f.geometry = h, f;
}
function Ra(h, u, a = {}) {
  if (!h)
    throw new Error("coordinates is required");
  if (!Array.isArray(h))
    throw new Error("coordinates must be an Array");
  if (h.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!fr(h[0]) || !fr(h[1]))
    throw new Error("coordinates must contain numbers");
  return Tn({
    type: "Point",
    coordinates: h
  }, u, a);
}
function Zr(h, u, a = {}) {
  for (const l of h) {
    if (l.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (l[l.length - 1].length !== l[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let g = 0; g < l[l.length - 1].length; g++)
      if (l[l.length - 1][g] !== l[0][g])
        throw new Error("First and last Position are not equivalent.");
  }
  return Tn({
    type: "Polygon",
    coordinates: h
  }, u, a);
}
function Qt(h, u = {}) {
  const a = { type: "FeatureCollection" };
  return u.id && (a.id = u.id), u.bbox && (a.bbox = u.bbox), a.features = h, a;
}
function Ta(h, u, a = {}) {
  return Tn({
    type: "MultiPolygon",
    coordinates: h
  }, u, a);
}
function Ca(h, u = "kilometers") {
  const a = Hr[u];
  if (!a)
    throw new Error(u + " units is invalid");
  return h * a;
}
function Oa(h, u = "kilometers") {
  const a = Hr[u];
  if (!a)
    throw new Error(u + " units is invalid");
  return h / a;
}
function fr(h) {
  return !isNaN(h) && h !== null && !Array.isArray(h);
}
function Wr(h, u, a) {
  if (h !== null)
    for (var f, l, g, d, p, L, N, k = 0, m = 0, E, I = h.type, S = I === "FeatureCollection", T = I === "Feature", M = S ? h.features.length : 1, b = 0; b < M; b++) {
      N = S ? h.features[b].geometry : T ? h.geometry : h, E = N ? N.type === "GeometryCollection" : !1, p = E ? N.geometries.length : 1;
      for (var P = 0; P < p; P++) {
        var O = 0, Y = 0;
        if (d = E ? N.geometries[P] : N, d !== null) {
          L = d.coordinates;
          var G = d.type;
          switch (k = 0, G) {
            case null:
              break;
            case "Point":
              if (u(
                L,
                m,
                b,
                O,
                Y
              ) === !1)
                return !1;
              m++, O++;
              break;
            case "LineString":
            case "MultiPoint":
              for (f = 0; f < L.length; f++) {
                if (u(
                  L[f],
                  m,
                  b,
                  O,
                  Y
                ) === !1)
                  return !1;
                m++, G === "MultiPoint" && O++;
              }
              G === "LineString" && O++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (f = 0; f < L.length; f++) {
                for (l = 0; l < L[f].length - k; l++) {
                  if (u(
                    L[f][l],
                    m,
                    b,
                    O,
                    Y
                  ) === !1)
                    return !1;
                  m++;
                }
                G === "MultiLineString" && O++, G === "Polygon" && Y++;
              }
              G === "Polygon" && O++;
              break;
            case "MultiPolygon":
              for (f = 0; f < L.length; f++) {
                for (Y = 0, l = 0; l < L[f].length; l++) {
                  for (g = 0; g < L[f][l].length - k; g++) {
                    if (u(
                      L[f][l][g],
                      m,
                      b,
                      O,
                      Y
                    ) === !1)
                      return !1;
                    m++;
                  }
                  Y++;
                }
                O++;
              }
              break;
            case "GeometryCollection":
              for (f = 0; f < d.geometries.length; f++)
                if (Wr(d.geometries[f], u) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function gr(h, u) {
  if (h.type === "Feature")
    u(h, 0);
  else if (h.type === "FeatureCollection")
    for (var a = 0; a < h.features.length && u(h.features[a], a) !== !1; a++)
      ;
}
function fi(h, u) {
  var a, f, l, g, d, p, L, N, k, m, E = 0, I = h.type === "FeatureCollection", S = h.type === "Feature", T = I ? h.features.length : 1;
  for (a = 0; a < T; a++) {
    for (p = I ? h.features[a].geometry : S ? h.geometry : h, N = I ? h.features[a].properties : S ? h.properties : {}, k = I ? h.features[a].bbox : S ? h.bbox : void 0, m = I ? h.features[a].id : S ? h.id : void 0, L = p ? p.type === "GeometryCollection" : !1, d = L ? p.geometries.length : 1, l = 0; l < d; l++) {
      if (g = L ? p.geometries[l] : p, g === null) {
        if (u(
          null,
          E,
          N,
          k,
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
            E,
            N,
            k,
            m
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (f = 0; f < g.geometries.length; f++)
            if (u(
              g.geometries[f],
              E,
              N,
              k,
              m
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
function ba(h, u = {}) {
  if (h.bbox != null && u.recompute !== !0)
    return h.bbox;
  const a = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Wr(h, (f) => {
    a[0] > f[0] && (a[0] = f[0]), a[1] > f[1] && (a[1] = f[1]), a[2] < f[0] && (a[2] = f[0]), a[3] < f[1] && (a[3] = f[1]);
  }), a;
}
function Ma(h, u = {}) {
  const a = ba(h), f = (a[0] + a[2]) / 2, l = (a[1] + a[3]) / 2;
  return Ra([f, l], u.properties, u);
}
var Pa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Aa(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var jr = { exports: {} };
(function(h, u) {
  (function(a, f) {
    h.exports = f();
  })(Pa, function() {
    function a(r, e) {
      if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function f(r, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
      }
    }
    function l(r, e, t) {
      return e && f(r.prototype, e), t && f(r, t), r;
    }
    function g(r, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), e && p(r, e);
    }
    function d(r) {
      return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, d(r);
    }
    function p(r, e) {
      return p = Object.setPrototypeOf || function(t, n) {
        return t.__proto__ = n, t;
      }, p(r, e);
    }
    function L() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function N(r, e, t) {
      return N = L() ? Reflect.construct : function(n, i, s) {
        var o = [null];
        o.push.apply(o, i);
        var c = new (Function.bind.apply(n, o))();
        return s && p(c, s.prototype), c;
      }, N.apply(null, arguments);
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
          return N(t, arguments, d(this).constructor);
        }
        return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), p(i, t);
      }, k(r);
    }
    function m(r) {
      if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return r;
    }
    function E(r, e) {
      if (e && (typeof e == "object" || typeof e == "function")) return e;
      if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return m(r);
    }
    function I(r) {
      var e = L();
      return function() {
        var t, n = d(r);
        if (e) {
          var i = d(this).constructor;
          t = Reflect.construct(n, arguments, i);
        } else t = n.apply(this, arguments);
        return E(this, t);
      };
    }
    function S(r, e, t) {
      return S = typeof Reflect < "u" && Reflect.get ? Reflect.get : function(n, i, s) {
        var o = function(v, y) {
          for (; !Object.prototype.hasOwnProperty.call(v, y) && (v = d(v)) !== null; ) ;
          return v;
        }(n, i);
        if (o) {
          var c = Object.getOwnPropertyDescriptor(o, i);
          return c.get ? c.get.call(s) : c.value;
        }
      }, S(r, e, t || r);
    }
    function T(r) {
      return function(e) {
        if (Array.isArray(e)) return b(e);
      }(r) || function(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
      }(r) || M(r) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function M(r, e) {
      if (r) {
        if (typeof r == "string") return b(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? b(r, e) : void 0;
      }
    }
    function b(r, e) {
      (e == null || e > r.length) && (e = r.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t];
      return n;
    }
    function P(r, e) {
      var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
      if (!t) {
        if (Array.isArray(r) || (t = M(r)) || e) {
          t && (r = t);
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
        t = t.call(r);
      }, n: function() {
        var v = t.next();
        return o = v.done, v;
      }, e: function(v) {
        c = !0, s = v;
      }, f: function() {
        try {
          o || t.return == null || t.return();
        } finally {
          if (c) throw s;
        }
      } };
    }
    var O = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getEndCapStyle", value: function() {
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
            var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(s), this.setJoinStyle(o), this.setMitreLimit(c);
          }
        }
      } }, { key: "bufferDistanceError", value: function(e) {
        var t = Math.PI / 2 / e;
        return 1 - Math.cos(t / 2);
      } }]), r;
    }();
    O.CAP_ROUND = 1, O.CAP_FLAT = 2, O.CAP_SQUARE = 3, O.JOIN_ROUND = 1, O.JOIN_MITRE = 2, O.JOIN_BEVEL = 3, O.DEFAULT_QUADRANT_SEGMENTS = 8, O.DEFAULT_MITRE_LIMIT = 5, O.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var Y = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ Exception: t })[0], i;
      }
      return l(t, [{ key: "toString", value: function() {
        return this.message;
      } }]), t;
    }(k(Error)), G = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IllegalArgumentException: t })[0], i;
      }
      return t;
    }(Y), B = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }();
    function X() {
    }
    function V() {
    }
    function U() {
    }
    var se, te, re, ue, z, ne, oe, fe, xe = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "equalsWithTolerance", value: function(e, t, n) {
        return Math.abs(e - t) <= n;
      } }]), r;
    }(), ke = function() {
      function r(e, t) {
        a(this, r), this.low = t || 0, this.high = e || 0;
      }
      return l(r, null, [{ key: "toBinaryString", value: function(e) {
        var t, n = "";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.high & t) === t ? "1" : "0";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.low & t) === t ? "1" : "0";
        return n;
      } }]), r;
    }();
    function H() {
    }
    function we() {
    }
    H.NaN = NaN, H.isNaN = function(r) {
      return Number.isNaN(r);
    }, H.isInfinite = function(r) {
      return !Number.isFinite(r);
    }, H.MAX_VALUE = Number.MAX_VALUE, H.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, H.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (ne = 2146435072, oe = new Float64Array(1), fe = new Int32Array(oe.buffer), H.doubleToLongBits = function(r) {
      oe[0] = r;
      var e = 0 | fe[0], t = 0 | fe[1];
      return (t & ne) === ne && 1048575 & t && e !== 0 && (e = 0, t = 2146959360), new ke(t, e);
    }, H.longBitsToDouble = function(r) {
      return fe[0] = r.low, fe[1] = r.high, oe[0];
    }) : (se = 1023, te = Math.log2, re = Math.floor, ue = Math.pow, z = function() {
      for (var r = 53; r > 0; r--) {
        var e = ue(2, r) - 1;
        if (re(te(e)) + 1 === r) return e;
      }
      return 0;
    }(), H.doubleToLongBits = function(r) {
      var e, t, n, i, s, o, c, v, y;
      if (r < 0 || 1 / r === Number.NEGATIVE_INFINITY ? (o = 1 << 31, r = -r) : o = 0, r === 0) return new ke(v = o, y = 0);
      if (r === 1 / 0) return new ke(v = 2146435072 | o, y = 0);
      if (r != r) return new ke(v = 2146959360, y = 0);
      if (i = 0, y = 0, (e = re(r)) > 1) if (e <= z) (i = re(te(e))) <= 20 ? (y = 0, v = e << 20 - i & 1048575) : (y = e % (t = ue(2, n = i - 20)) << 32 - n, v = e / t & 1048575);
      else for (n = e, y = 0; (n = re(t = n / 2)) !== 0; ) i++, y >>>= 1, y |= (1 & v) << 31, v >>>= 1, t !== n && (v |= 524288);
      if (c = i + se, s = e === 0, e = r - e, i < 52 && e !== 0) for (n = 0; ; ) {
        if ((t = 2 * e) >= 1 ? (e = t - 1, s ? (c--, s = !1) : (n <<= 1, n |= 1, i++)) : (e = t, s ? --c == 0 && (i++, s = !1) : (n <<= 1, i++)), i === 20) v |= n, n = 0;
        else if (i === 52) {
          y |= n;
          break;
        }
        if (t === 1) {
          i < 20 ? v |= n << 20 - i : i < 52 && (y |= n << 52 - i);
          break;
        }
      }
      return v |= c << 20, new ke(v |= o, y);
    }, H.longBitsToDouble = function(r) {
      var e, t, n, i, s = r.high, o = r.low, c = s & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & s) >> 20) - se, i = 0, t = 1 << 19, e = 1; e <= 20; e++) s & t && (i += ue(2, -e)), t >>>= 1;
      for (t = 1 << 31, e = 21; e <= 52; e++) o & t && (i += ue(2, -e)), t >>>= 1;
      if (n === -1023) {
        if (i === 0) return 0 * c;
        n = -1022;
      } else {
        if (n === 1024) return i === 0 ? c / 0 : NaN;
        i += 1;
      }
      return c * i * ue(2, n);
    });
    var Ee = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ RuntimeException: t })[0], i;
      }
      return t;
    }(Y), Te = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) Ee.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Ee.constructor_.call(this, n);
        }
      } }]), t;
    }(Ee), ie = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "shouldNeverReachHere", value: function() {
        if (arguments.length === 0) r.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
          var e = arguments[0];
          throw new Te("Should never reach here" + (e !== null ? ": " + e : ""));
        }
      } }, { key: "isTrue", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          r.isTrue(e, null);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (!t) throw n === null ? new Te() : new Te(n);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          r.equals(e, t, null);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          if (!i.equals(n)) throw new Te("Expected " + n + " but encountered " + i + (s !== null ? ": " + s : ""));
        }
      } }]), r;
    }(), $e = new ArrayBuffer(8), fs = new Float64Array($e), vi = new Int32Array($e), R = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getM", value: function() {
        return H.NaN;
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
            throw new G("Invalid ordinate index: " + e);
        }
      } }, { key: "equals2D", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.x === e.x && this.y === e.y;
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return !!xe.equalsWithTolerance(this.x, t.x, n) && !!xe.equalsWithTolerance(this.y, t.y, n);
        }
      } }, { key: "setM", value: function(e) {
        throw new G("Invalid ordinate index: " + r.M);
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
        throw new G("Invalid ordinate index: " + e);
      } }, { key: "equals3D", value: function(e) {
        return this.x === e.x && this.y === e.y && (this.getZ() === e.getZ() || H.isNaN(this.getZ()) && H.isNaN(e.getZ()));
      } }, { key: "equals", value: function(e) {
        return e instanceof r && this.equals2D(e);
      } }, { key: "equalInZ", value: function(e, t) {
        return xe.equalsWithTolerance(this.getZ(), e.getZ(), t);
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
          if (e instanceof CloneNotSupportedException) return ie.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
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
        return [X, V, U];
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.z = null, arguments.length === 0) r.constructor_.call(this, 0, 0);
        else if (arguments.length === 1) {
          var e = arguments[0];
          r.constructor_.call(this, e.x, e.y, e.getZ());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          r.constructor_.call(this, t, n, r.NULL_ORDINATE);
        } else if (arguments.length === 3) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          this.x = i, this.y = s, this.z = o;
        }
      } }, { key: "hashCode", value: function(e) {
        return fs[0] = e, vi[0] ^ vi[1];
      } }]), r;
    }(), gs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "compare", value: function(e, t) {
        var n = r.compare(e.x, t.x);
        if (n !== 0) return n;
        var i = r.compare(e.y, t.y);
        return i !== 0 ? i : this._dimensionsToTest <= 2 ? 0 : r.compare(e.getZ(), t.getZ());
      } }, { key: "interfaces_", get: function() {
        return [we];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimensionsToTest = 2, arguments.length === 0) r.constructor_.call(this, 2);
        else if (arguments.length === 1) {
          var e = arguments[0];
          if (e !== 2 && e !== 3) throw new G("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = e;
        }
      } }, { key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : H.isNaN(e) ? H.isNaN(t) ? 0 : -1 : H.isNaN(t) ? 1 : 0;
      } }]), r;
    }();
    R.DimensionalComparator = gs, R.NULL_ORDINATE = H.NaN, R.X = 0, R.Y = 1, R.Z = 2, R.M = 3;
    var ve = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getArea", value: function() {
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
          if (arguments[0] instanceof R) {
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
          if (arguments[0] instanceof R) {
            var t = arguments[0];
            return this.intersects(t.x, t.y);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof R && arguments[1] instanceof R) {
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
            var y = arguments[0], x = arguments[1];
            return !this.isNull() && !(y > this._maxx || y < this._minx || x > this._maxy || x < this._miny);
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
          if (arguments[0] instanceof R) {
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
          if (arguments[0] instanceof R) {
            var t = arguments[0];
            return this.covers(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.covers(n, i);
        }
      } }, { key: "centre", value: function() {
        return this.isNull() ? null : new R((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
      } }, { key: "init", value: function() {
        if (arguments.length === 0) this.setToNull();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof R) {
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
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          s < o ? (this._minx = s, this._maxx = o) : (this._minx = o, this._maxx = s), c < v ? (this._miny = c, this._maxy = v) : (this._miny = v, this._maxy = c);
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
        return e = 37 * (e = 37 * (e = 37 * (e = 37 * e + R.hashCode(this._minx)) + R.hashCode(this._maxx)) + R.hashCode(this._miny)) + R.hashCode(this._maxy);
      } }, { key: "interfaces_", get: function() {
        return [X, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof R) {
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
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          this.init(s, o, c, v);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return n.x >= (e.x < t.x ? e.x : t.x) && n.x <= (e.x > t.x ? e.x : t.x) && n.y >= (e.y < t.y ? e.y : t.y) && n.y <= (e.y > t.y ? e.y : t.y);
        }
        if (arguments.length === 4) {
          var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3], v = Math.min(o.x, c.x), y = Math.max(o.x, c.x), x = Math.min(i.x, s.x), w = Math.max(i.x, s.x);
          return !(x > y) && !(w < v) && (v = Math.min(o.y, c.y), y = Math.max(o.y, c.y), x = Math.min(i.y, s.y), w = Math.max(i.y, s.y), !(x > y) && !(w < v));
        }
      } }]), r;
    }(), W = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "isGeometryCollection", value: function() {
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
        if (e.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION) throw new G("This method does not support GeometryCollection arguments");
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
        return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new ve(this._envelope);
      } }, { key: "setSRID", value: function(e) {
        this._SRID = e;
      } }, { key: "setUserData", value: function(e) {
        this._userData = e;
      } }, { key: "compare", value: function(e, t) {
        for (var n = e.iterator(), i = t.iterator(); n.hasNext() && i.hasNext(); ) {
          var s = n.next(), o = i.next(), c = s.compareTo(o);
          if (c !== 0) return c;
        }
        return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
      } }, { key: "hashCode", value: function() {
        return this.getEnvelopeInternal().hashCode();
      } }, { key: "isEquivalentClass", value: function(e) {
        return this.getClass() === e.getClass();
      } }, { key: "isGeometryCollectionOrDerived", value: function() {
        return this.getTypeCode() === r.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === r.TYPECODE_MULTIPOINT || this.getTypeCode() === r.TYPECODE_MULTILINESTRING || this.getTypeCode() === r.TYPECODE_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [V, X, U];
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
    W.constructor_ = function(r) {
      r && (this._envelope = null, this._userData = null, this._factory = r, this._SRID = r.getSRID());
    }, W.TYPECODE_POINT = 0, W.TYPECODE_MULTIPOINT = 1, W.TYPECODE_LINESTRING = 2, W.TYPECODE_LINEARRING = 3, W.TYPECODE_MULTILINESTRING = 4, W.TYPECODE_POLYGON = 5, W.TYPECODE_MULTIPOLYGON = 6, W.TYPECODE_GEOMETRYCOLLECTION = 7, W.TYPENAME_POINT = "Point", W.TYPENAME_MULTIPOINT = "MultiPoint", W.TYPENAME_LINESTRING = "LineString", W.TYPENAME_LINEARRING = "LinearRing", W.TYPENAME_MULTILINESTRING = "MultiLineString", W.TYPENAME_POLYGON = "Polygon", W.TYPENAME_MULTIPOLYGON = "MultiPolygon", W.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", W.geometryChangedFilter = { get interfaces_() {
      return [B];
    }, filter: function(r) {
      r.geometryChangedAction();
    } };
    var _ = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "toLocationSymbol", value: function(e) {
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
        throw new G("Unknown location value: " + e);
      } }]), r;
    }();
    _.INTERIOR = 0, _.BOUNDARY = 1, _.EXTERIOR = 2, _.NONE = -1;
    var He = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "add", value: function() {
      } }, { key: "addAll", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }, { key: "iterator", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "toArray", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), en = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ NoSuchElementException: t })[0], i;
      }
      return t;
    }(Y), at = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ UnsupportedOperationException: t })[0], i;
      }
      return t;
    }(Y), yi = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return l(t, [{ key: "contains", value: function() {
      } }]), t;
    }(He), Cn = function(r, e) {
      g(n, r);
      var t = I(n);
      function n(i) {
        var s;
        return a(this, n), (s = t.call(this)).map = /* @__PURE__ */ new Map(), i instanceof He && s.addAll(i), s;
      }
      return l(n, [{ key: "contains", value: function(i) {
        var s = i.hashCode ? i.hashCode() : i;
        return !!this.map.has(s);
      } }, { key: "add", value: function(i) {
        var s = i.hashCode ? i.hashCode() : i;
        return !this.map.has(s) && !!this.map.set(s, i);
      } }, { key: "addAll", value: function(i) {
        var s, o = P(i);
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
        throw new at();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new vs(this.map);
      } }, { key: e, value: function() {
        return this.map;
      } }]), n;
    }(yi, Symbol.iterator), vs = function() {
      function r(e) {
        a(this, r), this.iterator = e.values();
        var t = this.iterator.next(), n = t.done, i = t.value;
        this.done = n, this.value = i;
      }
      return l(r, [{ key: "next", value: function() {
        if (this.done) throw new en();
        var e = this.value, t = this.iterator.next(), n = t.done, i = t.value;
        return this.done = n, this.value = i, e;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new at();
      } }]), r;
    }(), F = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "opposite", value: function(e) {
        return e === r.LEFT ? r.RIGHT : e === r.RIGHT ? r.LEFT : e;
      } }]), r;
    }();
    F.ON = 0, F.LEFT = 1, F.RIGHT = 2;
    var mi = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ EmptyStackException: t })[0], i;
      }
      return t;
    }(Y), di = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: t })[0], i;
      }
      return t;
    }(Y), vt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return l(t, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), t;
    }(He), ys = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).array = [], n;
      }
      return l(t, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new di();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new mi();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new mi();
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
    }(vt);
    function ee(r, e) {
      return r.interfaces_ && r.interfaces_.indexOf(e) > -1;
    }
    var Dt = function() {
      function r(e) {
        a(this, r), this.str = e;
      }
      return l(r, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), tn = function() {
      function r(e) {
        a(this, r), this.value = e;
      }
      return l(r, [{ key: "intValue", value: function() {
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
    }(), On = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "isWhitespace", value: function(e) {
        return e <= 32 && e >= 0 || e === 127;
      } }, { key: "toUpperCase", value: function(e) {
        return e.toUpperCase();
      } }]), r;
    }(), J = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "le", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo <= e._lo;
      } }, { key: "extractSignificantDigits", value: function(e, t) {
        var n = this.abs(), i = r.magnitude(n._hi), s = r.TEN.pow(i);
        (n = n.divide(s)).gt(r.TEN) ? (n = n.divide(r.TEN), i += 1) : n.lt(r.ONE) && (n = n.multiply(r.TEN), i -= 1);
        for (var o = i + 1, c = new Dt(), v = r.MAX_PRINT_DIGITS - 1, y = 0; y <= v; y++) {
          e && y === o && c.append(".");
          var x = Math.trunc(n._hi);
          if (x < 0) break;
          var w = !1, C = 0;
          x > 9 ? (w = !0, C = "9") : C = "0" + x, c.append(C), n = n.subtract(r.valueOf(x)).multiply(r.TEN), w && n.selfAdd(r.TEN);
          var D = !0, A = r.magnitude(n._hi);
          if (A < 0 && Math.abs(A) >= v - y && (D = !1), !D) break;
        }
        return t[0] = i, c.toString();
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
          var n = arguments[0], i = arguments[1], s = null, o = null, c = null, v = null, y = null, x = null, w = null, C = null;
          return y = this._hi / n, C = (s = (x = r.SPLIT * y) - (s = x - y)) * (c = (C = r.SPLIT * n) - (c = C - n)) - (w = y * n) + s * (v = n - c) + (o = y - s) * c + o * v, C = y + (x = (this._hi - w - C + this._lo - y * i) / n), this._hi = C, this._lo = y - C + x, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0], t = null, n = null, i = null, s = null, o = null, c = null, v = null, y = null;
          n = (o = this._hi / e._hi) - (t = (c = r.SPLIT * o) - (t = c - o)), y = t * (i = (y = r.SPLIT * e._hi) - (i = y - e._hi)) - (v = o * e._hi) + t * (s = e._hi - i) + n * i + n * s;
          var x = y = o + (c = (this._hi - v - y + this._lo - o * e._lo) / e._hi), w = o - y + c;
          return new r(x, w);
        }
        if (typeof arguments[0] == "number") {
          var C = arguments[0];
          return H.isNaN(C) ? r.createNaN() : r.copy(this).selfDivide(C, 0);
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
            var t = arguments[0], n = null, i = null, s = null, o = null, c = null, v = null;
            return o = (s = this._hi + t) - (c = s - this._hi), i = (v = (o = t - c + (this._hi - o)) + this._lo) + (s - (n = s + v)), this._hi = n + i, this._lo = i + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var y = arguments[0], x = arguments[1], w = null, C = null, D = null, A = null, Z = null, j = null, $ = null;
          A = this._hi + y, C = this._lo + x, Z = A - (j = A - this._hi), D = C - ($ = C - this._lo);
          var ce = (w = A + (j = (Z = y - j + (this._hi - Z)) + C)) + (j = (D = x - $ + (this._lo - D)) + (j + (A - w))), me = j + (w - ce);
          return this._hi = ce, this._lo = me, this;
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
          var n = arguments[0], i = arguments[1], s = null, o = null, c = null, v = null, y = null, x = null;
          s = (y = r.SPLIT * this._hi) - this._hi, x = r.SPLIT * n, s = y - s, o = this._hi - s, c = x - n;
          var w = (y = this._hi * n) + (x = s * (c = x - c) - y + s * (v = n - c) + o * c + o * v + (this._hi * i + this._lo * n)), C = x + (s = y - w);
          return this._hi = w, this._lo = C, this;
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
          return H.isNaN(t) ? r.createNaN() : r.copy(this).selfMultiply(t, 0);
        }
      } }, { key: "isNaN", value: function() {
        return H.isNaN(this._hi);
      } }, { key: "intValue", value: function() {
        return Math.trunc(this._hi);
      } }, { key: "toString", value: function() {
        var e = r.magnitude(this._hi);
        return e >= -3 && e <= 20 ? this.toStandardNotation() : this.toSciNotation();
      } }, { key: "toStandardNotation", value: function() {
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!0, t), i = t[0] + 1, s = n;
        if (n.charAt(0) === ".") s = "0" + n;
        else if (i < 0) s = "0." + r.stringOfChar("0", -i) + n;
        else if (n.indexOf(".") === -1) {
          var o = i - n.length;
          s = n + r.stringOfChar("0", o) + ".0";
        }
        return this.isNegative() ? "-" + s : s;
      } }, { key: "reciprocal", value: function() {
        var e, t, n, i, s = null, o = null, c = null, v = null;
        e = (n = 1 / this._hi) - (s = (c = r.SPLIT * n) - (s = c - n)), o = (v = r.SPLIT * this._hi) - this._hi;
        var y = n + (c = (1 - (i = n * this._hi) - (v = s * (o = v - o) - i + s * (t = this._hi - o) + e * o + e * t) - n * this._lo) / this._hi);
        return new r(y, n - y + c);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return r.SCI_NOT_ZERO;
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!1, t), i = r.SCI_NOT_EXPONENT_CHAR + t[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var s = "";
        n.length > 1 && (s = n.substring(1));
        var o = n.charAt(0) + "." + s;
        return this.isNegative() ? "-" + o + i : o + i;
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
        return [U, X, V];
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
          var i = arguments[0], s = arguments[1];
          this.init(i, s);
        }
      } }, { key: "determinant", value: function() {
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
          return r.determinant(r.valueOf(e), r.valueOf(t), r.valueOf(n), r.valueOf(i));
        }
        if (arguments[3] instanceof r && arguments[2] instanceof r && arguments[0] instanceof r && arguments[1] instanceof r) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = s.multiply(v).selfSubtract(o.multiply(c));
          return y;
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
        for (var t = 0, n = e.length; On.isWhitespace(e.charAt(t)); ) t++;
        var i = !1;
        if (t < n) {
          var s = e.charAt(t);
          s !== "-" && s !== "+" || (t++, s === "-" && (i = !0));
        }
        for (var o = new r(), c = 0, v = 0, y = 0, x = !1; !(t >= n); ) {
          var w = e.charAt(t);
          if (t++, On.isDigit(w)) {
            var C = w - "0";
            o.selfMultiply(r.TEN), o.selfAdd(C), c++;
          } else {
            if (w !== ".") {
              if (w === "e" || w === "E") {
                var D = e.substring(t);
                try {
                  y = tn.parseInt(D);
                } catch (ce) {
                  throw ce instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + D + " in string " + e) : ce;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + w + "' at position " + t + " in string " + e);
            }
            v = c, x = !0;
          }
        }
        var A = o;
        x || (v = c);
        var Z = c - v - y;
        if (Z === 0) A = o;
        else if (Z > 0) {
          var j = r.TEN.pow(Z);
          A = o.divide(j);
        } else if (Z < 0) {
          var $ = r.TEN.pow(-Z);
          A = o.multiply($);
        }
        return i ? A.negate() : A;
      } }, { key: "createNaN", value: function() {
        return new r(H.NaN, H.NaN);
      } }, { key: "copy", value: function(e) {
        return new r(e);
      } }, { key: "magnitude", value: function(e) {
        var t = Math.abs(e), n = Math.log(t) / Math.log(10), i = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, i) <= t && (i += 1), i;
      } }, { key: "stringOfChar", value: function(e, t) {
        for (var n = new Dt(), i = 0; i < t; i++) n.append(e);
        return n.toString();
      } }]), r;
    }();
    J.PI = new J(3.141592653589793, 12246467991473532e-32), J.TWO_PI = new J(6.283185307179586, 24492935982947064e-32), J.PI_2 = new J(1.5707963267948966, 6123233995736766e-32), J.E = new J(2.718281828459045, 14456468917292502e-32), J.NaN = new J(H.NaN, H.NaN), J.EPS = 123259516440783e-46, J.SPLIT = 134217729, J.MAX_PRINT_DIGITS = 32, J.TEN = J.valueOf(10), J.ONE = J.valueOf(1), J.SCI_NOT_EXPONENT_CHAR = "E", J.SCI_NOT_ZERO = "0.0E0";
    var bn = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "orientationIndex", value: function(e, t, n) {
        var i = r.orientationIndexFilter(e, t, n);
        if (i <= 1) return i;
        var s = J.valueOf(t.x).selfAdd(-e.x), o = J.valueOf(t.y).selfAdd(-e.y), c = J.valueOf(n.x).selfAdd(-t.x), v = J.valueOf(n.y).selfAdd(-t.y);
        return s.selfMultiply(v).selfSubtract(o.selfMultiply(c)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof J && arguments[2] instanceof J && arguments[0] instanceof J && arguments[1] instanceof J) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3], s = e.multiply(i).selfSubtract(t.multiply(n));
          return s.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var o = arguments[0], c = arguments[1], v = arguments[2], y = arguments[3], x = J.valueOf(o), w = J.valueOf(c), C = J.valueOf(v), D = J.valueOf(y), A = x.multiply(D).selfSubtract(w.multiply(C));
          return A.signum();
        }
      } }, { key: "intersection", value: function(e, t, n, i) {
        var s = new J(e.y).selfSubtract(t.y), o = new J(t.x).selfSubtract(e.x), c = new J(e.x).selfMultiply(t.y).selfSubtract(new J(t.x).selfMultiply(e.y)), v = new J(n.y).selfSubtract(i.y), y = new J(i.x).selfSubtract(n.x), x = new J(n.x).selfMultiply(i.y).selfSubtract(new J(i.x).selfMultiply(n.y)), w = o.multiply(x).selfSubtract(y.multiply(c)), C = v.multiply(c).selfSubtract(s.multiply(x)), D = s.multiply(y).selfSubtract(v.multiply(o)), A = w.selfDivide(D).doubleValue(), Z = C.selfDivide(D).doubleValue();
        return H.isNaN(A) || H.isInfinite(A) || H.isNaN(Z) || H.isInfinite(Z) ? null : new R(A, Z);
      } }, { key: "orientationIndexFilter", value: function(e, t, n) {
        var i = null, s = (e.x - n.x) * (t.y - n.y), o = (e.y - n.y) * (t.x - n.x), c = s - o;
        if (s > 0) {
          if (o <= 0) return r.signum(c);
          i = s + o;
        } else {
          if (!(s < 0) || o >= 0) return r.signum(c);
          i = -s - o;
        }
        var v = r.DP_SAFE_EPSILON * i;
        return c >= v || -c >= v ? r.signum(c) : 2;
      } }, { key: "signum", value: function(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
      } }]), r;
    }();
    bn.DP_SAFE_EPSILON = 1e-15;
    var ae = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "getM", value: function(e) {
        if (this.hasM()) {
          var t = this.getDimension() - this.getMeasures();
          return this.getOrdinate(e, t);
        }
        return H.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this.getOrdinate(e, 2) : H.NaN;
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
        return [V];
      } }]), r;
    }();
    ae.X = 0, ae.Y = 1, ae.Z = 2, ae.M = 3;
    var K = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "index", value: function(e, t, n) {
        return bn.orientationIndex(e, t, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0], t = e.length - 1;
          if (t < 3) throw new G("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = e[0], i = 0, s = 1; s <= t; s++) {
            var o = e[s];
            o.y > n.y && (n = o, i = s);
          }
          var c = i;
          do
            (c -= 1) < 0 && (c = t);
          while (e[c].equals2D(n) && c !== i);
          var v = i;
          do
            v = (v + 1) % t;
          while (e[v].equals2D(n) && v !== i);
          var y = e[c], x = e[v];
          if (y.equals2D(n) || x.equals2D(n) || y.equals2D(x)) return !1;
          var w = r.index(y, n, x), C = null;
          return C = w === 0 ? y.x > x.x : w > 0, C;
        }
        if (ee(arguments[0], ae)) {
          var D = arguments[0], A = D.size() - 1;
          if (A < 3) throw new G("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var Z = D.getCoordinate(0), j = 0, $ = 1; $ <= A; $++) {
            var ce = D.getCoordinate($);
            ce.y > Z.y && (Z = ce, j = $);
          }
          var me = null, Ne = j;
          do
            (Ne -= 1) < 0 && (Ne = A), me = D.getCoordinate(Ne);
          while (me.equals2D(Z) && Ne !== j);
          var Pe = null, Ue = j;
          do
            Ue = (Ue + 1) % A, Pe = D.getCoordinate(Ue);
          while (Pe.equals2D(Z) && Ue !== j);
          if (me.equals2D(Z) || Pe.equals2D(Z) || me.equals2D(Pe)) return !1;
          var it = r.index(me, Z, Pe);
          return it === 0 ? me.x > Pe.x : it > 0;
        }
      } }]), r;
    }();
    K.CLOCKWISE = -1, K.RIGHT = K.CLOCKWISE, K.COUNTERCLOCKWISE = 1, K.LEFT = K.COUNTERCLOCKWISE, K.COLLINEAR = 0, K.STRAIGHT = K.COLLINEAR;
    var ms = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getCoordinate", value: function() {
        return this._minCoord;
      } }, { key: "getRightmostSide", value: function(e, t) {
        var n = this.getRightmostSideOfSegment(e, t);
        return n < 0 && (n = this.getRightmostSideOfSegment(e, t - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(e)), n;
      } }, { key: "findRightmostEdgeAtVertex", value: function() {
        var e = this._minDe.getEdge().getCoordinates();
        ie.isTrue(this._minIndex > 0 && this._minIndex < e.length, "rightmost point expected to be interior vertex of edge");
        var t = e[this._minIndex - 1], n = e[this._minIndex + 1], i = K.index(this._minCoord, n, t), s = !1;
        (t.y < this._minCoord.y && n.y < this._minCoord.y && i === K.COUNTERCLOCKWISE || t.y > this._minCoord.y && n.y > this._minCoord.y && i === K.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
      } }, { key: "getRightmostSideOfSegment", value: function(e, t) {
        var n = e.getEdge().getCoordinates();
        if (t < 0 || t + 1 >= n.length || n[t].y === n[t + 1].y) return -1;
        var i = F.LEFT;
        return n[t].y < n[t + 1].y && (i = F.RIGHT), i;
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
        ie.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === F.LEFT && (this._orientedDe = this._minDe.getSym());
      } }], [{ key: "constructor_", value: function() {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
      } }]), r;
    }(), et = function(r) {
      g(t, r);
      var e = I(t);
      function t(n, i) {
        var s;
        return a(this, t), (s = e.call(this, i ? n + " [ " + i + " ]" : n)).pt = i ? new R(i) : void 0, s.name = Object.keys({ TopologyException: t })[0], s;
      }
      return l(t, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), t;
    }(Ee), ds = function() {
      function r() {
        a(this, r), this.array = [];
      }
      return l(r, [{ key: "addLast", value: function(e) {
        this.array.push(e);
      } }, { key: "removeFirst", value: function() {
        return this.array.shift();
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }]), r;
    }(), Q = function(r, e) {
      g(n, r);
      var t = I(n);
      function n(i) {
        var s;
        return a(this, n), (s = t.call(this)).array = [], i instanceof He && s.addAll(i), s;
      }
      return l(n, [{ key: "interfaces_", get: function() {
        return [vt, He];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(i) {
        return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(i) {
        var s, o = P(i);
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
        return new ps(this);
      } }, { key: "get", value: function(i) {
        if (i < 0 || i >= this.size()) throw new di();
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
      } }, { key: e, value: function() {
        return this.array.values();
      } }]), n;
    }(vt, Symbol.iterator), ps = function() {
      function r(e) {
        a(this, r), this.arrayList = e, this.position = 0;
      }
      return l(r, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new en();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(e) {
        return this.arrayList.set(this.position - 1, e);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), r;
    }(), _s = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "clearVisitedEdges", value: function() {
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
        if (t === null) throw new et("unable to find edge to compute depths at " + e.getCoordinate());
        e.getEdges().computeDepths(t);
        for (var s = e.getEdges().iterator(); s.hasNext(); ) {
          var o = s.next();
          o.setVisited(!0), this.copySymDepths(o);
        }
      } }, { key: "computeDepth", value: function(e) {
        this.clearVisitedEdges();
        var t = this._finder.getEdge();
        t.getNode(), t.getLabel(), t.setEdgeDepths(F.RIGHT, e), this.copySymDepths(t), this.computeDepths(t);
      } }, { key: "create", value: function(e) {
        this.addReachable(e), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      } }, { key: "findResultEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); ) {
          var t = e.next();
          t.getDepth(F.RIGHT) >= 1 && t.getDepth(F.LEFT) <= 0 && !t.isInteriorAreaEdge() && t.setInResult(!0);
        }
      } }, { key: "computeDepths", value: function(e) {
        var t = new Cn(), n = new ds(), i = e.getNode();
        for (n.addLast(i), t.add(i), e.setVisited(!0); !n.isEmpty(); ) {
          var s = n.removeFirst();
          t.add(s), this.computeNodeDepth(s);
          for (var o = s.getEdges().iterator(); o.hasNext(); ) {
            var c = o.next().getSym();
            if (!c.isVisited()) {
              var v = c.getNode();
              t.contains(v) || (n.addLast(v), t.add(v));
            }
          }
        }
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          for (var e = new ve(), t = this._dirEdgeList.iterator(); t.hasNext(); ) for (var n = t.next().getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) e.expandToInclude(n[i]);
          this._env = e;
        }
        return this._env;
      } }, { key: "addReachable", value: function(e) {
        var t = new ys();
        for (t.add(e); !t.empty(); ) {
          var n = t.pop();
          this.add(n, t);
        }
      } }, { key: "copySymDepths", value: function(e) {
        var t = e.getSym();
        t.setDepth(F.LEFT, e.getDepth(F.RIGHT)), t.setDepth(F.RIGHT, e.getDepth(F.LEFT));
      } }, { key: "add", value: function(e, t) {
        e.setVisited(!0), this._nodes.add(e);
        for (var n = e.getEdges().iterator(); n.hasNext(); ) {
          var i = n.next();
          this._dirEdgeList.add(i);
          var s = i.getSym().getNode();
          s.isVisited() || t.push(s);
        }
      } }, { key: "getNodes", value: function() {
        return this._nodes;
      } }, { key: "getDirectedEdges", value: function() {
        return this._dirEdgeList;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._finder = null, this._dirEdgeList = new Q(), this._nodes = new Q(), this._rightMostCoord = null, this._env = null, this._finder = new ms();
      } }]), r;
    }(), Mn = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "intersection", value: function(e, t, n, i) {
        var s = e.x < t.x ? e.x : t.x, o = e.y < t.y ? e.y : t.y, c = e.x > t.x ? e.x : t.x, v = e.y > t.y ? e.y : t.y, y = n.x < i.x ? n.x : i.x, x = n.y < i.y ? n.y : i.y, w = n.x > i.x ? n.x : i.x, C = n.y > i.y ? n.y : i.y, D = ((s > y ? s : y) + (c < w ? c : w)) / 2, A = ((o > x ? o : x) + (v < C ? v : C)) / 2, Z = e.x - D, j = e.y - A, $ = t.x - D, ce = t.y - A, me = n.x - D, Ne = n.y - A, Pe = i.x - D, Ue = i.y - A, it = j - ce, kt = $ - Z, Vt = Z * ce - $ * j, Ht = Ne - Ue, Ct = Pe - me, ir = me * Ue - Pe * Ne, rr = it * Ct - Ht * kt, jn = (kt * ir - Ct * Vt) / rr, Qn = (Ht * Vt - it * ir) / rr;
        return H.isNaN(jn) || H.isInfinite(jn) || H.isNaN(Qn) || H.isInfinite(Qn) ? null : new R(jn + D, Qn + A);
      } }]), r;
    }(), Ae = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "arraycopy", value: function(e, t, n, i, s) {
        for (var o = 0, c = t; c < t + s; c++) n[i + o] = e[c], o++;
      } }, { key: "getProperty", value: function(e) {
        return { "line.separator": `
` }[e];
      } }]), r;
    }(), Ft = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "log10", value: function(e) {
        var t = Math.log(e);
        return H.isInfinite(t) || H.isNaN(t) ? t : t / r.LOG_10;
      } }, { key: "min", value: function(e, t, n, i) {
        var s = e;
        return t < s && (s = t), n < s && (s = n), i < s && (s = i), s;
      } }, { key: "clamp", value: function() {
        if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return e < t ? t : e > n ? n : e;
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          return i < s ? s : i > o ? o : i;
        }
      } }, { key: "wrap", value: function(e, t) {
        return e < 0 ? t - -e % t : e % t;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = e;
          return t > i && (i = t), n > i && (i = n), i;
        }
        if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = s;
          return o > y && (y = o), c > y && (y = c), v > y && (y = v), y;
        }
      } }, { key: "average", value: function(e, t) {
        return (e + t) / 2;
      } }]), r;
    }();
    Ft.LOG_10 = Math.log(10);
    var Ze = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "segmentToSegment", value: function(e, t, n, i) {
        if (e.equals(t)) return r.pointToSegment(e, n, i);
        if (n.equals(i)) return r.pointToSegment(i, e, t);
        var s = !1;
        if (ve.intersects(e, t, n, i)) {
          var o = (t.x - e.x) * (i.y - n.y) - (t.y - e.y) * (i.x - n.x);
          if (o === 0) s = !0;
          else {
            var c = (e.y - n.y) * (i.x - n.x) - (e.x - n.x) * (i.y - n.y), v = ((e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y)) / o, y = c / o;
            (y < 0 || y > 1 || v < 0 || v > 1) && (s = !0);
          }
        } else s = !0;
        return s ? Ft.min(r.pointToSegment(e, n, i), r.pointToSegment(t, n, i), r.pointToSegment(n, e, t), r.pointToSegment(i, e, t)) : 0;
      } }, { key: "pointToSegment", value: function(e, t, n) {
        if (t.x === n.x && t.y === n.y) return e.distance(t);
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), s = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / i;
        if (s <= 0) return e.distance(t);
        if (s >= 1) return e.distance(n);
        var o = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(o) * Math.sqrt(i);
      } }, { key: "pointToLinePerpendicular", value: function(e, t, n) {
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), s = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(s) * Math.sqrt(i);
      } }, { key: "pointToSegmentString", value: function(e, t) {
        if (t.length === 0) throw new G("Line array must contain at least one vertex");
        for (var n = e.distance(t[0]), i = 0; i < t.length - 1; i++) {
          var s = r.pointToSegment(e, t[i], t[i + 1]);
          s < n && (n = s);
        }
        return n;
      } }]), r;
    }(), pi = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "create", value: function() {
        if (arguments.length === 1) arguments[0] instanceof Array || ee(arguments[0], ae);
        else if (arguments.length !== 2) {
          if (arguments.length === 3) {
            var e = arguments[0], t = arguments[1];
            return this.create(e, t);
          }
        }
      } }]), r;
    }(), nn = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }(), xs = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "ofLine", value: function(e) {
        var t = e.size();
        if (t <= 1) return 0;
        var n = 0, i = new R();
        e.getCoordinate(0, i);
        for (var s = i.x, o = i.y, c = 1; c < t; c++) {
          e.getCoordinate(c, i);
          var v = i.x, y = i.y, x = v - s, w = y - o;
          n += Math.sqrt(x * x + w * w), s = v, o = y;
        }
        return n;
      } }]), r;
    }(), _i = function r() {
      a(this, r);
    }, yt = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "copyCoord", value: function(e, t, n, i) {
        for (var s = Math.min(e.getDimension(), n.getDimension()), o = 0; o < s; o++) n.setOrdinate(i, o, e.getOrdinate(t, o));
      } }, { key: "isRing", value: function(e) {
        var t = e.size();
        return t === 0 || !(t <= 3) && e.getOrdinate(0, ae.X) === e.getOrdinate(t - 1, ae.X) && e.getOrdinate(0, ae.Y) === e.getOrdinate(t - 1, ae.Y);
      } }, { key: "scroll", value: function() {
        if (arguments.length === 2) {
          if (ee(arguments[0], ae) && Number.isInteger(arguments[1])) {
            var e = arguments[0], t = arguments[1];
            r.scroll(e, t, r.isRing(e));
          } else if (ee(arguments[0], ae) && arguments[1] instanceof R) {
            var n = arguments[0], i = arguments[1], s = r.indexOf(i, n);
            if (s <= 0) return null;
            r.scroll(n, s);
          }
        } else if (arguments.length === 3) {
          var o = arguments[0], c = arguments[1], v = arguments[2], y = c;
          if (y <= 0) return null;
          for (var x = o.copy(), w = v ? o.size() - 1 : o.size(), C = 0; C < w; C++) for (var D = 0; D < o.getDimension(); D++) o.setOrdinate(C, D, x.getOrdinate((c + C) % w, D));
          if (v) for (var A = 0; A < o.getDimension(); A++) o.setOrdinate(w, A, o.getOrdinate(0, A));
        }
      } }, { key: "isEqual", value: function(e, t) {
        var n = e.size();
        if (n !== t.size()) return !1;
        for (var i = Math.min(e.getDimension(), t.getDimension()), s = 0; s < n; s++) for (var o = 0; o < i; o++) {
          var c = e.getOrdinate(s, o), v = t.getOrdinate(s, o);
          if (e.getOrdinate(s, o) !== t.getOrdinate(s, o) && (!H.isNaN(c) || !H.isNaN(v))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.minCoordinateIndex(e, 0, e.size() - 1);
        }
        if (arguments.length === 3) {
          for (var t = arguments[0], n = arguments[1], i = arguments[2], s = -1, o = null, c = n; c <= i; c++) {
            var v = t.getCoordinate(c);
            (o === null || o.compareTo(v) > 0) && (o = v, s = c);
          }
          return s;
        }
      } }, { key: "extend", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), s = t.size();
        if (r.copy(t, 0, i, 0, s), s > 0) for (var o = s; o < n; o++) r.copy(t, s - 1, i, o, 1);
        return i;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.size() - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) r.swap(e, i, t - i);
      } }, { key: "swap", value: function(e, t, n) {
        if (t === n) return null;
        for (var i = 0; i < e.getDimension(); i++) {
          var s = e.getOrdinate(t, i);
          e.setOrdinate(t, i, e.getOrdinate(n, i)), e.setOrdinate(n, i, s);
        }
      } }, { key: "copy", value: function(e, t, n, i, s) {
        for (var o = 0; o < s; o++) r.copyCoord(e, t + o, n, i + o);
      } }, { key: "ensureValidRing", value: function(e, t) {
        var n = t.size();
        return n === 0 ? t : n <= 3 ? r.createClosedRing(e, t, 4) : t.getOrdinate(0, ae.X) === t.getOrdinate(n - 1, ae.X) && t.getOrdinate(0, ae.Y) === t.getOrdinate(n - 1, ae.Y) ? t : r.createClosedRing(e, t, n + 1);
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.size(); n++) if (e.x === t.getOrdinate(n, ae.X) && e.y === t.getOrdinate(n, ae.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), s = t.size();
        r.copy(t, 0, i, 0, s);
        for (var o = s; o < n; o++) r.copy(t, 0, i, o, 1);
        return i;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.size(); n++) {
          var i = e.getCoordinate(n);
          (t === null || t.compareTo(i) > 0) && (t = i);
        }
        return t;
      } }]), r;
    }(), q = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "toDimensionSymbol", value: function(e) {
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
        throw new G("Unknown dimension value: " + e);
      } }, { key: "toDimensionValue", value: function(e) {
        switch (On.toUpperCase(e)) {
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
        throw new G("Unknown dimension symbol: " + e);
      } }]), r;
    }();
    q.P = 0, q.L = 1, q.A = 2, q.FALSE = -1, q.TRUE = -2, q.DONTCARE = -3, q.SYM_FALSE = "F", q.SYM_TRUE = "T", q.SYM_DONTCARE = "*", q.SYM_P = "0", q.SYM_L = "1", q.SYM_A = "2";
    var rn = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "filter", value: function(e) {
      } }]), r;
    }(), sn = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "filter", value: function(e, t) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), r;
    }(), Gt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this.isEmpty() ? new ve() : this._points.expandEnvelope(new ve());
      } }, { key: "isRing", value: function() {
        return this.isClosed() && this.isSimple();
      } }, { key: "getCoordinates", value: function() {
        return this._points.toCoordinateArray();
      } }, { key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n;
          if (this._points.size() !== s._points.size()) return !1;
          for (var o = 0; o < this._points.size(); o++) if (!this.equal(this._points.getCoordinate(o), s._points.getCoordinate(o), i)) return !1;
          return !0;
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < Math.trunc(this._points.size() / 2); n++) {
          var i = this._points.size() - 1 - n;
          if (!this._points.getCoordinate(n).equals(this._points.getCoordinate(i))) {
            if (this._points.getCoordinate(n).compareTo(this._points.getCoordinate(i)) > 0) {
              var s = this._points.copy();
              yt.reverse(s), this._points = s;
            }
            return null;
          }
        }
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? q.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return yt.reverse(n), this.getFactory().createLineString(n);
      } }, { key: "getEndPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_LINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getLength", value: function() {
        return xs.ofLine(this._points);
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
          var v = arguments[0], y = arguments[1], x = v;
          return y.compare(this._points, x._points);
        }
      } }, { key: "apply", value: function() {
        if (ee(arguments[0], nn)) for (var n = arguments[0], i = 0; i < this._points.size(); i++) n.filter(this._points.getCoordinate(i));
        else if (ee(arguments[0], sn)) {
          var s = arguments[0];
          if (this._points.size() === 0) return null;
          for (var o = 0; o < this._points.size() && (s.filter(this._points, o), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (ee(arguments[0], rn)) {
          var c = arguments[0];
          c.filter(this);
        } else if (ee(arguments[0], B)) {
          var v = arguments[0];
          v.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new at();
      } }, { key: "isEquivalentClass", value: function(n) {
        return n instanceof t;
      } }, { key: "getCoordinateN", value: function(n) {
        return this._points.getCoordinate(n);
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_LINESTRING;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._points;
      } }, { key: "isEmpty", value: function() {
        return this._points.size() === 0;
      } }, { key: "init", value: function(n) {
        if (n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), n.size() === 1) throw new G("Invalid number of points in LineString (found " + n.size() + " - must be 0 or >= 2)");
        this._points = n;
      } }, { key: "isCoordinate", value: function(n) {
        for (var i = 0; i < this._points.size(); i++) if (this._points.getCoordinate(i).equals(n)) return !0;
        return !1;
      } }, { key: "getStartPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(0);
      } }, { key: "getPointN", value: function(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
      } }, { key: "interfaces_", get: function() {
        return [_i];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            W.constructor_.call(this, i), this.init(n);
          }
        }
      } }]), t;
    }(W), xi = function r() {
      a(this, r);
    }, Pn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        if (this.isEmpty()) return new ve();
        var n = new ve();
        return n.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), n;
      } }, { key: "getCoordinates", value: function() {
        return this.isEmpty() ? [] : [this.getCoordinate()];
      } }, { key: "copyInternal", value: function() {
        return new t(this._coordinates.copy(), this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && (!(!this.isEmpty() || !n.isEmpty()) || this.isEmpty() === n.isEmpty() && this.equal(n.getCoordinate(), this.getCoordinate(), i));
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
      } }, { key: "getCoordinate", value: function() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
      } }, { key: "getBoundaryDimension", value: function() {
        return q.FALSE;
      } }, { key: "reverseInternal", value: function() {
        return this.getFactory().createPoint(this._coordinates.copy());
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_POINT;
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
        if (ee(arguments[0], nn)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (ee(arguments[0], sn)) {
          var i = arguments[0];
          if (this.isEmpty()) return null;
          i.filter(this._coordinates, 0), i.isGeometryChanged() && this.geometryChanged();
        } else if (ee(arguments[0], rn)) {
          var s = arguments[0];
          s.filter(this);
        } else if (ee(arguments[0], B)) {
          var o = arguments[0];
          o.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_POINT;
      } }, { key: "getCoordinateSequence", value: function() {
        return this._coordinates;
      } }, { key: "getY", value: function() {
        if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
        return this.getCoordinate().y;
      } }, { key: "isEmpty", value: function() {
        return this._coordinates.size() === 0;
      } }, { key: "init", value: function(n) {
        n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), ie.isTrue(n.size() <= 1), this._coordinates = n;
      } }, { key: "isSimple", value: function() {
        return !0;
      } }, { key: "interfaces_", get: function() {
        return [xi];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], i = arguments[1];
        W.constructor_.call(this, i), this.init(n);
      } }]), t;
    }(W), ki = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "ofRing", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return Math.abs(r.ofRingSigned(e));
        }
        if (ee(arguments[0], ae)) {
          var t = arguments[0];
          return Math.abs(r.ofRingSigned(t));
        }
      } }, { key: "ofRingSigned", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          if (e.length < 3) return 0;
          for (var t = 0, n = e[0].x, i = 1; i < e.length - 1; i++) {
            var s = e[i].x - n, o = e[i + 1].y, c = e[i - 1].y;
            t += s * (c - o);
          }
          return t / 2;
        }
        if (ee(arguments[0], ae)) {
          var v = arguments[0], y = v.size();
          if (y < 3) return 0;
          var x = new R(), w = new R(), C = new R();
          v.getCoordinate(0, w), v.getCoordinate(1, C);
          var D = w.x;
          C.x -= D;
          for (var A = 0, Z = 1; Z < y - 1; Z++) x.y = w.y, w.x = C.x, w.y = C.y, v.getCoordinate(Z + 1, C), C.x -= D, A += w.x * (x.y - C.y);
          return A / 2;
        }
      } }]), r;
    }(), mt = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "sort", value: function() {
        var e = arguments, t = arguments[0];
        if (arguments.length === 1) t.sort(function(D, A) {
          return D.compareTo(A);
        });
        else if (arguments.length === 2) t.sort(function(D, A) {
          return e[1].compare(D, A);
        });
        else if (arguments.length === 3) {
          var n = t.slice(arguments[1], arguments[2]);
          n.sort();
          var i = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var s, o = P(i);
          try {
            for (o.s(); !(s = o.n()).done; ) {
              var c = s.value;
              t.push(c);
            }
          } catch (D) {
            o.e(D);
          } finally {
            o.f();
          }
        } else if (arguments.length === 4) {
          var v = t.slice(arguments[1], arguments[2]);
          v.sort(function(D, A) {
            return e[3].compare(D, A);
          });
          var y = t.slice(0, arguments[1]).concat(v, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var x, w = P(y);
          try {
            for (w.s(); !(x = w.n()).done; ) {
              var C = x.value;
              t.push(C);
            }
          } catch (D) {
            w.e(D);
          } finally {
            w.f();
          }
        }
      } }, { key: "asList", value: function(e) {
        var t, n = new Q(), i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var s = t.value;
            n.add(s);
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "copyOf", value: function(e, t) {
        return e.slice(0, t);
      } }]), r;
    }(), Ei = function r() {
      a(this, r);
    }, an = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, s = this._shell.getCoordinates(), o = 0; o < s.length; o++) n[++i] = s[o];
        for (var c = 0; c < this._holes.length; c++) for (var v = this._holes[c].getCoordinates(), y = 0; y < v.length; y++) n[++i] = v[y];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += ki.ofRing(this._shell.getCoordinateSequence());
        for (var i = 0; i < this._holes.length; i++) n -= ki.ofRing(this._holes[i].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), i = new Array(this._holes.length).fill(null), s = 0; s < this._holes.length; s++) i[s] = this._holes[s].copy();
        return new t(n, i, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), i = this.getEnvelopeInternal(), s = 0; s < 5; s++) {
          var o = n.getX(s);
          if (o !== i.getMinX() && o !== i.getMaxX()) return !1;
          var c = n.getY(s);
          if (c !== i.getMinY() && c !== i.getMaxY()) return !1;
        }
        for (var v = n.getX(0), y = n.getY(0), x = 1; x <= 4; x++) {
          var w = n.getX(x), C = n.getY(x);
          if (w !== v == (C !== y)) return !1;
          v = w, y = C;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n, o = this._shell, c = s._shell;
          if (!o.equalsExact(c, i) || this._holes.length !== s._holes.length) return !1;
          for (var v = 0; v < this._holes.length; v++) if (!this._holes[v].equalsExact(s._holes[v], i)) return !1;
          return !0;
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        if (arguments.length === 0) {
          this._shell = this.normalized(this._shell, !0);
          for (var n = 0; n < this._holes.length; n++) this._holes[n] = this.normalized(this._holes[n], !1);
          mt.sort(this._holes);
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          if (i.isEmpty()) return null;
          var o = i.getCoordinateSequence(), c = yt.minCoordinateIndex(o, 0, o.size() - 2);
          yt.scroll(o, c, !0), K.isCCW(o) === s && yt.reverse(o);
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
        return W.TYPECODE_POLYGON;
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
          var o = arguments[0], c = arguments[1], v = o, y = this._shell, x = v._shell, w = y.compareToSameClass(x, c);
          if (w !== 0) return w;
          for (var C = this.getNumInteriorRing(), D = v.getNumInteriorRing(), A = 0; A < C && A < D; ) {
            var Z = this.getInteriorRingN(A), j = v.getInteriorRingN(A), $ = Z.compareToSameClass(j, c);
            if ($ !== 0) return $;
            A++;
          }
          return A < C ? 1 : A < D ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ee(arguments[0], nn)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var i = 0; i < this._holes.length; i++) this._holes[i].apply(n);
        } else if (ee(arguments[0], sn)) {
          var s = arguments[0];
          if (this._shell.apply(s), !s.isDone()) for (var o = 0; o < this._holes.length && (this._holes[o].apply(s), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (ee(arguments[0], rn)) {
          var c = arguments[0];
          c.filter(this);
        } else if (ee(arguments[0], B)) {
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
        return W.TYPENAME_POLYGON;
      } }, { key: "getExteriorRing", value: function() {
        return this._shell;
      } }, { key: "isEmpty", value: function() {
        return this._shell.isEmpty();
      } }, { key: "getInteriorRingN", value: function(n) {
        return this._holes[n];
      } }, { key: "interfaces_", get: function() {
        return [Ei];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], i = arguments[1], s = arguments[2];
        if (W.constructor_.call(this, s), n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), W.hasNullElements(i)) throw new G("holes must not contain null elements");
        if (n.isEmpty() && W.hasNonEmptyElements(i)) throw new G("shell is empty but holes are not");
        this._shell = n, this._holes = i;
      } }]), t;
    }(W), ks = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(yi), Ii = function(r) {
      g(t, r);
      var e = I(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this)).array = [], n instanceof He && i.addAll(n), i;
      }
      return l(t, [{ key: "contains", value: function(n) {
        var i, s = P(this.array);
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
        var i, s = P(n);
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
        throw new at();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new Es(this.array);
      } }]), t;
    }(ks), Es = function() {
      function r(e) {
        a(this, r), this.array = e, this.position = 0;
      }
      return l(r, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new en();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new at();
      } }]), r;
    }(), Oe = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "computeEnvelopeInternal", value: function() {
        for (var n = new ve(), i = 0; i < this._geometries.length; i++) n.expandToInclude(this._geometries[i].getEnvelopeInternal());
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
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var s = n;
          if (this._geometries.length !== s._geometries.length) return !1;
          for (var o = 0; o < this._geometries.length; o++) if (!this._geometries[o].equalsExact(s._geometries[o], i)) return !1;
          return !0;
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < this._geometries.length; n++) this._geometries[n].normalize();
        mt.sort(this._geometries);
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      } }, { key: "getBoundaryDimension", value: function() {
        for (var n = q.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getBoundaryDimension());
        return n;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this._geometries.length, i = new Q(n), s = 0; s < n; s++) i.add(this._geometries[s].reverse());
        return this.getFactory().buildGeometry(i);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getDimension", value: function() {
        for (var n = q.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getDimension());
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
          var n = arguments[0], i = new Ii(mt.asList(this._geometries)), s = new Ii(mt.asList(n._geometries));
          return this.compare(i, s);
        }
        if (arguments.length === 2) {
          for (var o = arguments[0], c = arguments[1], v = o, y = this.getNumGeometries(), x = v.getNumGeometries(), w = 0; w < y && w < x; ) {
            var C = this.getGeometryN(w), D = v.getGeometryN(w), A = C.compareToSameClass(D, c);
            if (A !== 0) return A;
            w++;
          }
          return w < y ? 1 : w < x ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (ee(arguments[0], nn)) for (var n = arguments[0], i = 0; i < this._geometries.length; i++) this._geometries[i].apply(n);
        else if (ee(arguments[0], sn)) {
          var s = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var o = 0; o < this._geometries.length && (this._geometries[o].apply(s), !s.isDone()); o++) ;
          s.isGeometryChanged() && this.geometryChanged();
        } else if (ee(arguments[0], rn)) {
          var c = arguments[0];
          c.filter(this);
          for (var v = 0; v < this._geometries.length; v++) this._geometries[v].apply(c);
        } else if (ee(arguments[0], B)) {
          var y = arguments[0];
          y.filter(this);
          for (var x = 0; x < this._geometries.length; x++) this._geometries[x].apply(y);
        }
      } }, { key: "getBoundary", value: function() {
        return W.checkNotGeometryCollection(this), ie.shouldNeverReachHere(), null;
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_GEOMETRYCOLLECTION;
      } }, { key: "isEmpty", value: function() {
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isEmpty()) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this._geometries = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if (W.constructor_.call(this, i), n === null && (n = []), W.hasNullElements(n)) throw new G("geometries must not contain null elements");
            this._geometries = n;
          }
        }
      } }]), t;
    }(W), An = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "isValid", value: function() {
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && S(d(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getCoordinate", value: function() {
        if (arguments.length === 1 && Number.isInteger(arguments[0])) {
          var n = arguments[0];
          return this._geometries[n].getCoordinate();
        }
        return S(d(t.prototype), "getCoordinate", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return q.FALSE;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTIPOINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTIPOINT;
      } }, { key: "interfaces_", get: function() {
        return [xi];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Oe.constructor_.call(this, n, i);
      } }]), t;
    }(Oe), qt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "getBoundaryDimension", value: function() {
        return q.FALSE;
      } }, { key: "isClosed", value: function() {
        return !!this.isEmpty() || S(d(t.prototype), "isClosed", this).call(this);
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return yt.reverse(n), this.getFactory().createLinearRing(n);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_LINEARRING;
      } }, { key: "validateConstruction", value: function() {
        if (!this.isEmpty() && !S(d(t.prototype), "isClosed", this).call(this)) throw new G("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE) throw new G("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_LINEARRING;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Gt.constructor_.call(this, n, i), this.validateConstruction();
      } }]), t;
    }(Gt);
    qt.MINIMUM_VALID_SIZE = 4;
    var dt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case t.X:
            this.x = i;
            break;
          case t.Y:
            this.y = i;
            break;
          default:
            throw new G("Invalid ordinate index: " + n);
        }
      } }, { key: "getZ", value: function() {
        return R.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
        }
        throw new G("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new G("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ();
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) R.constructor_.call(this);
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            R.constructor_.call(this, n.x, n.y);
          } else if (arguments[0] instanceof R) {
            var i = arguments[0];
            R.constructor_.call(this, i.x, i.y);
          }
        } else if (arguments.length === 2) {
          var s = arguments[0], o = arguments[1];
          R.constructor_.call(this, s, o, R.NULL_ORDINATE);
        }
      } }]), t;
    }(R);
    dt.X = 0, dt.Y = 1, dt.Z = -1, dt.M = -1;
    var pt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getM", value: function() {
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
            throw new G("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getZ", value: function() {
        return R.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
          case t.M:
            return this._m;
        }
        throw new G("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new G("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) R.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            R.constructor_.call(this, n.x, n.y), this._m = n._m;
          } else if (arguments[0] instanceof R) {
            var i = arguments[0];
            R.constructor_.call(this, i.x, i.y), this._m = this.getM();
          }
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          R.constructor_.call(this, s, o, R.NULL_ORDINATE), this._m = c;
        }
      } }]), t;
    }(R);
    pt.X = 0, pt.Y = 1, pt.Z = -1, pt.M = 2;
    var Dn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case R.X:
            this.x = i;
            break;
          case R.Y:
            this.y = i;
            break;
          case R.Z:
            this.z = i;
            break;
          case R.M:
            this._m = i;
            break;
          default:
            throw new G("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case R.X:
            return this.x;
          case R.Y:
            return this.y;
          case R.Z:
            return this.getZ();
          case R.M:
            return this.getM();
        }
        throw new G("Invalid ordinate index: " + n);
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) R.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            R.constructor_.call(this, n), this._m = n._m;
          } else if (arguments[0] instanceof R) {
            var i = arguments[0];
            R.constructor_.call(this, i), this._m = this.getM();
          }
        } else if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          R.constructor_.call(this, s, o, c), this._m = v;
        }
      } }]), t;
    }(R), un = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "measures", value: function(e) {
        return e instanceof dt ? 0 : e instanceof pt || e instanceof Dn ? 1 : 0;
      } }, { key: "dimension", value: function(e) {
        return e instanceof dt ? 2 : e instanceof pt ? 3 : e instanceof Dn ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.create(e, 0);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return t === 2 ? new dt() : t === 3 && n === 0 ? new R() : t === 3 && n === 1 ? new pt() : t === 4 && n === 1 ? new Dn() : new R();
        }
      } }]), r;
    }(), Yt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && ee(arguments[0], He)) {
          for (var n = arguments[0], i = arguments[1], s = !1, o = n.iterator(); o.hasNext(); ) this.add(o.next(), i), s = !0;
          return s;
        }
        return S(d(t.prototype), "addAll", this).apply(this, arguments);
      } }, { key: "clone", value: function() {
        for (var n = S(d(t.prototype), "clone", this).call(this), i = 0; i < this.size(); i++) n.add(i, this.get(i).clone());
        return n;
      } }, { key: "toCoordinateArray", value: function() {
        if (arguments.length === 0) return this.toArray(t.coordArrayType);
        if (arguments.length === 1) {
          var n = arguments[0];
          if (n) return this.toArray(t.coordArrayType);
          for (var i = this.size(), s = new Array(i).fill(null), o = 0; o < i; o++) s[o] = this.get(i - o - 1);
          return s;
        }
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return S(d(t.prototype), "add", this).call(this, n);
        }
        if (arguments.length === 2) {
          if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var i = arguments[0], s = arguments[1];
            return this.add(i, s, !0), !0;
          }
          if (arguments[0] instanceof R && typeof arguments[1] == "boolean") {
            var o = arguments[0], c = arguments[1];
            if (!c && this.size() >= 1) {
              var v = this.get(this.size() - 1);
              if (v.equals2D(o)) return null;
            }
            S(d(t.prototype), "add", this).call(this, o);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var y = arguments[0], x = arguments[1];
            return this.add(y, x), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var w = arguments[0], C = arguments[1], D = arguments[2];
            if (D) for (var A = 0; A < w.length; A++) this.add(w[A], C);
            else for (var Z = w.length - 1; Z >= 0; Z--) this.add(w[Z], C);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof R) {
            var j = arguments[0], $ = arguments[1], ce = arguments[2];
            if (!ce) {
              var me = this.size();
              if (me > 0) {
                if (j > 0) {
                  var Ne = this.get(j - 1);
                  if (Ne.equals2D($)) return null;
                }
                if (j < me) {
                  var Pe = this.get(j);
                  if (Pe.equals2D($)) return null;
                }
              }
            }
            S(d(t.prototype), "add", this).call(this, j, $);
          }
        } else if (arguments.length === 4) {
          var Ue = arguments[0], it = arguments[1], kt = arguments[2], Vt = arguments[3], Ht = 1;
          kt > Vt && (Ht = -1);
          for (var Ct = kt; Ct !== Vt; Ct += Ht) this.add(Ue[Ct], it);
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
      } }]), t;
    }(Q);
    Yt.coordArrayType = new Array(0).fill(null);
    var _e = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "isRing", value: function(e) {
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
        Ae.arraycopy(e, n, i, 0, e.length - n), Ae.arraycopy(e, 0, i, e.length - n, n), Ae.arraycopy(i, 0, e, 0, e.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          if (e === t) return !0;
          if (e === null || t === null || e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (!e[n].equals(t[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var i = arguments[0], s = arguments[1], o = arguments[2];
          if (i === s) return !0;
          if (i === null || s === null || i.length !== s.length) return !1;
          for (var c = 0; c < i.length; c++) if (o.compare(i[c], s[c]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(e, t) {
        for (var n = new Yt(), i = 0; i < e.length; i++) t.intersects(e[i]) && n.add(e[i], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(e) {
        if (e === null || e.length === 0) return 0;
        var t, n = 0, i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var s = t.value;
            n = Math.max(n, un.measures(s));
          }
        } catch (o) {
          i.e(o);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(e) {
        for (var t = 1; t < e.length; t++) if (e[t - 1].equals(e[t])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(e) {
        return r.hasRepeatedPoints(e) ? new Yt(e, !1).toCoordinateArray() : e;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.length - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) {
          var s = e[i];
          e[i] = e[t - i], e[t - i] = s;
        }
      } }, { key: "removeNull", value: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) e[n] !== null && t++;
        var i = new Array(t).fill(null);
        if (t === 0) return i;
        for (var s = 0, o = 0; o < e.length; o++) e[o] !== null && (i[s++] = e[o]);
        return i;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Array(e.length).fill(null), n = 0; n < e.length; n++) t[n] = e[n].copy();
          return t;
        }
        if (arguments.length === 5) for (var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3], v = arguments[4], y = 0; y < v; y++) o[c + y] = i[s + y].copy();
      } }, { key: "isEqualReversed", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n], s = t[e.length - n - 1];
          if (i.compareTo(s) !== 0) return !1;
        }
        return !0;
      } }, { key: "envelope", value: function(e) {
        for (var t = new ve(), n = 0; n < e.length; n++) t.expandToInclude(e[n]);
        return t;
      } }, { key: "toCoordinateArray", value: function(e) {
        return e.toArray(r.coordArrayType);
      } }, { key: "dimension", value: function(e) {
        if (e === null || e.length === 0) return 3;
        var t, n = 0, i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var s = t.value;
            n = Math.max(n, un.dimension(s));
          }
        } catch (o) {
          i.e(o);
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
        t = Ft.clamp(t, 0, e.length);
        var i = (n = Ft.clamp(n, -1, e.length)) - t + 1;
        n < 0 && (i = 0), t >= e.length && (i = 0), n < t && (i = 0);
        var s = new Array(i).fill(null);
        if (i === 0) return s;
        for (var o = 0, c = t; c <= n; c++) s[o++] = e[c];
        return s;
      } }]), r;
    }(), Is = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        return _e.compare(n, i);
      } }, { key: "interfaces_", get: function() {
        return [we];
      } }]), r;
    }(), Ns = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        var s = _e.compare(n, i);
        return _e.isEqualReversed(n, i) ? 0 : s;
      } }, { key: "OLDcompare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        for (var s = _e.increasingDirection(n), o = _e.increasingDirection(i), c = s > 0 ? 0 : n.length - 1, v = o > 0 ? 0 : n.length - 1, y = 0; y < n.length; y++) {
          var x = n[c].compareTo(i[v]);
          if (x !== 0) return x;
          c += s, v += o;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [we];
      } }]), r;
    }();
    _e.ForwardComparator = Is, _e.BidirectionalComparator = Ns, _e.coordArrayType = new Array(0).fill(null);
    var on = function() {
      function r(e) {
        a(this, r), this.str = e;
      }
      return l(r, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), r;
    }(), zt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getM", value: function(e) {
        return this.hasM() ? this._coordinates[e].getM() : H.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
        switch (t) {
          case ae.X:
            this._coordinates[e].x = n;
            break;
          case ae.Y:
            this._coordinates[e].y = n;
            break;
          default:
            this._coordinates[e].setOrdinate(t, n);
        }
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this._coordinates[e].getZ() : H.NaN;
      } }, { key: "size", value: function() {
        return this._coordinates.length;
      } }, { key: "getOrdinate", value: function(e, t) {
        switch (t) {
          case ae.X:
            return this._coordinates[e].x;
          case ae.Y:
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
        return un.create(this.getDimension(), this.getMeasures());
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
          var e = new on(17 * this._coordinates.length);
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
        return [ae, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            r.constructor_.call(this, e, _e.dimension(e), _e.measures(e));
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this._coordinates = new Array(t).fill(null);
            for (var n = 0; n < t; n++) this._coordinates[n] = new R();
          } else if (ee(arguments[0], ae)) {
            var i = arguments[0];
            if (i === null) return this._coordinates = new Array(0).fill(null), null;
            this._dimension = i.getDimension(), this._measures = i.getMeasures(), this._coordinates = new Array(i.size()).fill(null);
            for (var s = 0; s < this._coordinates.length; s++) this._coordinates[s] = i.getCoordinateCopy(s);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var o = arguments[0], c = arguments[1];
            r.constructor_.call(this, o, c, _e.measures(o));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var v = arguments[0], y = arguments[1];
            this._coordinates = new Array(v).fill(null), this._dimension = y;
            for (var x = 0; x < v; x++) this._coordinates[x] = un.create(y);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var w = arguments[0], C = arguments[1], D = arguments[2];
            this._dimension = C, this._measures = D, this._coordinates = w === null ? new Array(0).fill(null) : w;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var A = arguments[0], Z = arguments[1], j = arguments[2];
            this._coordinates = new Array(A).fill(null), this._dimension = Z, this._measures = j;
            for (var $ = 0; $ < A; $++) this._coordinates[$] = this.createCoordinate();
          }
        }
      } }]), r;
    }(), Fn = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "readResolve", value: function() {
        return r.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new zt(e);
          }
          if (ee(arguments[0], ae)) {
            var t = arguments[0];
            return new zt(t);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return i > 3 && (i = 3), i < 2 && (i = 2), new zt(n, i);
          }
          if (arguments.length === 3) {
            var s = arguments[0], o = arguments[1], c = arguments[2], v = o - c;
            return c > 1 && (c = 1), v > 3 && (v = 3), v < 2 && (v = 2), new zt(s, v + c, c);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [pi, U];
      } }], [{ key: "instance", value: function() {
        return r.instanceObject;
      } }]), r;
    }();
    Fn.instanceObject = new Fn();
    var Gn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && S(d(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTIPOLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        for (var n = new Q(), i = 0; i < this._geometries.length; i++) for (var s = this._geometries[i].getBoundary(), o = 0; o < s.getNumGeometries(); o++) n.add(s.getGeometryN(o));
        var c = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(c));
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [Ei];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Oe.constructor_.call(this, n, i);
      } }]), t;
    }(Oe), Ni = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), r;
    }(), Ss = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).map = /* @__PURE__ */ new Map(), n;
      }
      return l(t, [{ key: "get", value: function(n) {
        return this.map.get(n) || null;
      } }, { key: "put", value: function(n, i) {
        return this.map.set(n, i), i;
      } }, { key: "values", value: function() {
        for (var n = new Q(), i = this.map.values(), s = i.next(); !s.done; ) n.add(s.value), s = i.next();
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Cn();
        return this.map.entries().forEach(function(i) {
          return n.add(i);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), t;
    }(Ni), Be = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "equals", value: function(e) {
        if (!(e instanceof r)) return !1;
        var t = e;
        return this._modelType === t._modelType && this._scale === t._scale;
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.getMaximumSignificantDigits(), i = t.getMaximumSignificantDigits();
        return tn.compare(n, i);
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
          return H.isNaN(e) || this._modelType === r.FLOATING_SINGLE ? e : this._modelType === r.FIXED ? Math.round(e * this._scale) / this._scale : e;
        }
        if (arguments[0] instanceof R) {
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
        return [U, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = r.FLOATING;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof It) {
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
    }(), It = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "readResolve", value: function() {
        return r.nameToTypeMap.get(this._name);
      } }, { key: "toString", value: function() {
        return this._name;
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        this._name = null;
        var e = arguments[0];
        this._name = e, r.nameToTypeMap.put(e, this);
      } }]), r;
    }();
    It.nameToTypeMap = new Ss(), Be.Type = It, Be.FIXED = new It("FIXED"), Be.FLOATING = new It("FLOATING"), Be.FLOATING_SINGLE = new It("FLOATING SINGLE"), Be.maximumPreciseValue = 9007199254740992;
    var qn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && S(d(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return S(d(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? q.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        if (this.isEmpty()) return !1;
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isClosed()) return !1;
        return !0;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTILINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getBoundary", value: function() {
        throw new at();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [_i];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        Oe.constructor_.call(this, n, i);
      } }]), t;
    }(Oe), Nt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "createEmpty", value: function(e) {
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
            throw new G("Invalid dimension: " + e);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.isNull() ? this.createPoint() : e.getMinX() === e.getMaxX() && e.getMinY() === e.getMaxY() ? this.createPoint(new R(e.getMinX(), e.getMinY())) : e.getMinX() === e.getMaxX() || e.getMinY() === e.getMaxY() ? this.createLineString([new R(e.getMinX(), e.getMinY()), new R(e.getMaxX(), e.getMaxY())]) : this.createPolygon(this.createLinearRing([new R(e.getMinX(), e.getMinY()), new R(e.getMinX(), e.getMaxY()), new R(e.getMaxX(), e.getMaxY()), new R(e.getMaxX(), e.getMinY()), new R(e.getMinX(), e.getMinY())]), null);
      } }, { key: "createLineString", value: function() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLineString(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (ee(arguments[0], ae)) {
            var t = arguments[0];
            return new Gt(t, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new qn(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new qn(e, this);
        }
      } }, { key: "buildGeometry", value: function(e) {
        for (var t = null, n = !1, i = !1, s = e.iterator(); s.hasNext(); ) {
          var o = s.next(), c = o.getTypeCode();
          t === null && (t = c), c !== t && (n = !0), o instanceof Oe && (i = !0);
        }
        if (t === null) return this.createGeometryCollection();
        if (n || i) return this.createGeometryCollection(r.toGeometryArray(e));
        var v = e.iterator().next();
        if (e.size() > 1) {
          if (v instanceof an) return this.createMultiPolygon(r.toPolygonArray(e));
          if (v instanceof Gt) return this.createMultiLineString(r.toLineStringArray(e));
          if (v instanceof Pn) return this.createMultiPoint(r.toPointArray(e));
          ie.shouldNeverReachHere("Unhandled geometry type: " + v.getGeometryType());
        }
        return v;
      } }, { key: "createMultiPointFromCoords", value: function(e) {
        return this.createMultiPoint(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
      } }, { key: "createPoint", value: function() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof R) {
            var e = arguments[0];
            return this.createPoint(e !== null ? this.getCoordinateSequenceFactory().create([e]) : null);
          }
          if (ee(arguments[0], ae)) {
            var t = arguments[0];
            return new Pn(t, this);
          }
        }
      } }, { key: "getCoordinateSequenceFactory", value: function() {
        return this._coordinateSequenceFactory;
      } }, { key: "createPolygon", value: function() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        if (arguments.length === 1) {
          if (ee(arguments[0], ae)) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e));
          }
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t));
          }
          if (arguments[0] instanceof qt) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          return new an(i, s, this);
        }
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "createGeometryCollection", value: function() {
        if (arguments.length === 0) return new Oe(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new Oe(e, this);
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
          if (ee(arguments[0], ae)) {
            var t = arguments[0];
            return new qt(t, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new Gn(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new Gn(e, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new An(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new An(e, this);
          }
          if (ee(arguments[0], ae)) {
            var t = arguments[0];
            if (t === null) return this.createMultiPoint(new Array(0).fill(null));
            for (var n = new Array(t.size()).fill(null), i = 0; i < t.size(); i++) {
              var s = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
              yt.copy(t, i, s, 0, 1), n[i] = this.createPoint(s);
            }
            return this.createMultiPoint(n);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) r.constructor_.call(this, new Be(), 0);
        else if (arguments.length === 1) {
          if (ee(arguments[0], pi)) {
            var e = arguments[0];
            r.constructor_.call(this, new Be(), 0, e);
          } else if (arguments[0] instanceof Be) {
            var t = arguments[0];
            r.constructor_.call(this, t, 0, r.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          r.constructor_.call(this, n, i, r.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._precisionModel = s, this._coordinateSequenceFactory = c, this._SRID = o;
        }
      } }, { key: "toMultiPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toGeometryArray", value: function(e) {
        if (e === null) return null;
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return Fn.instance();
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
    }(), Yn = "XY", ws = "XYZ", Ls = "XYM", Rs = "XYZM", Si = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, wi = "EMPTY", ln = 1, tt = 2, ut = 3, Li = 4, St = 5, Ts = 6;
    for (var Cs in Si) Si[Cs].toUpperCase();
    var Os = function() {
      function r(e) {
        a(this, r), this.wkt = e, this.index_ = -1;
      }
      return l(r, [{ key: "isAlpha_", value: function(e) {
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
        if (t == "(") e = tt;
        else if (t == ",") e = St;
        else if (t == ")") e = ut;
        else if (this.isNumeric_(t) || t == "-") e = Li, i = this.readNumber_();
        else if (this.isAlpha_(t)) e = ln, i = this.readText_();
        else {
          if (this.isWhiteSpace_(t)) return this.nextToken();
          if (t !== "") throw new Error("Unexpected character: " + t);
          e = Ts;
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
    }(), bs = function() {
      function r(e, t) {
        a(this, r), this.lexer_ = e, this.token_, this.layout_ = Yn, this.factory = t;
      }
      return l(r, [{ key: "consume_", value: function() {
        this.token_ = this.lexer_.nextToken();
      } }, { key: "isTokenType", value: function(e) {
        return this.token_.type == e;
      } }, { key: "match", value: function(e) {
        var t = this.isTokenType(e);
        return t && this.consume_(), t;
      } }, { key: "parse", value: function() {
        return this.consume_(), this.parseGeometry_();
      } }, { key: "parseGeometryLayout_", value: function() {
        var e = Yn, t = this.token_;
        if (this.isTokenType(ln)) {
          var n = t.value;
          n === "Z" ? e = ws : n === "M" ? e = Ls : n === "ZM" && (e = Rs), e !== Yn && this.consume_();
        }
        return e;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(tt)) {
          var e = [];
          do
            e.push(this.parseGeometry_());
          while (this.match(St));
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(tt)) {
          var e = this.parsePoint_();
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(tt)) {
          var e = this.parsePointList_();
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(tt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var e;
        if (this.match(tt)) {
          if (e = this.token_.type == tt ? this.parsePointTextList_() : this.parsePointList_(), this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(tt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(tt)) {
          var e = this.parsePolygonTextList_();
          if (this.match(ut)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var e = [], t = this.layout_.length, n = 0; n < t; ++n) {
          var i = this.token_;
          if (!this.match(Li)) break;
          e.push(i.value);
        }
        if (e.length == t) return e;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var e = [this.parsePoint_()]; this.match(St); ) e.push(this.parsePoint_());
        return e;
      } }, { key: "parsePointTextList_", value: function() {
        for (var e = [this.parsePointText_()]; this.match(St); ) e.push(this.parsePointText_());
        return e;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var e = [this.parseLineStringText_()]; this.match(St); ) e.push(this.parseLineStringText_());
        return e;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var e = [this.parsePolygonText_()]; this.match(St); ) e.push(this.parsePolygonText_());
        return e;
      } }, { key: "isEmptyGeometry_", value: function() {
        var e = this.isTokenType(ln) && this.token_.value == wi;
        return e && this.consume_(), e;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var e = this.factory, t = function(j) {
          return N(R, T(j));
        }, n = function(j) {
          var $ = j.map(function(ce) {
            return e.createLinearRing(ce.map(t));
          });
          return $.length > 1 ? e.createPolygon($[0], $.slice(1)) : e.createPolygon($[0]);
        }, i = this.token_;
        if (this.match(ln)) {
          var s = i.value;
          if (this.layout_ = this.parseGeometryLayout_(), s == "GEOMETRYCOLLECTION") {
            var o = this.parseGeometryCollectionText_();
            return e.createGeometryCollection(o);
          }
          switch (s) {
            case "POINT":
              var c = this.parsePointText_();
              return c ? e.createPoint(N(R, T(c))) : e.createPoint();
            case "LINESTRING":
              var v = this.parseLineStringText_().map(t);
              return e.createLineString(v);
            case "LINEARRING":
              var y = this.parseLineStringText_().map(t);
              return e.createLinearRing(y);
            case "POLYGON":
              var x = this.parsePolygonText_();
              return x && x.length !== 0 ? n(x) : e.createPolygon();
            case "MULTIPOINT":
              var w = this.parseMultiPointText_();
              if (!w || w.length === 0) return e.createMultiPoint();
              var C = w.map(t).map(function(j) {
                return e.createPoint(j);
              });
              return e.createMultiPoint(C);
            case "MULTILINESTRING":
              var D = this.parseMultiLineStringText_().map(function(j) {
                return e.createLineString(j.map(t));
              });
              return e.createMultiLineString(D);
            case "MULTIPOLYGON":
              var A = this.parseMultiPolygonText_();
              if (!A || A.length === 0) return e.createMultiPolygon();
              var Z = A.map(n);
              return e.createMultiPolygon(Z);
            default:
              throw new Error("Invalid geometry type: " + s);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), r;
    }();
    function Ri(r) {
      if (r.isEmpty()) return "";
      var e = r.getCoordinate(), t = [e.x, e.y];
      return e.z === void 0 || Number.isNaN(e.z) || t.push(e.z), e.m === void 0 || Number.isNaN(e.m) || t.push(e.m), t.join(" ");
    }
    function Bt(r) {
      for (var e = r.getCoordinates().map(function(s) {
        var o = [s.x, s.y];
        return s.z === void 0 || Number.isNaN(s.z) || o.push(s.z), s.m === void 0 || Number.isNaN(s.m) || o.push(s.m), o;
      }), t = [], n = 0, i = e.length; n < i; ++n) t.push(e[n].join(" "));
      return t.join(", ");
    }
    function Ti(r) {
      var e = [];
      e.push("(" + Bt(r.getExteriorRing()) + ")");
      for (var t = 0, n = r.getNumInteriorRing(); t < n; ++t) e.push("(" + Bt(r.getInteriorRingN(t)) + ")");
      return e.join(", ");
    }
    var Ms = { Point: Ri, LineString: Bt, LinearRing: Bt, Polygon: Ti, MultiPoint: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + Ri(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiLineString: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + Bt(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push("(" + Ti(r.getGeometryN(t)) + ")");
      return e.join(", ");
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0, n = r.getNumGeometries(); t < n; ++t) e.push(Ci(r.getGeometryN(t)));
      return e.join(", ");
    } };
    function Ci(r) {
      var e = r.getGeometryType(), t = Ms[e];
      e = e.toUpperCase();
      var n = function(i) {
        var s = "";
        if (i.isEmpty()) return s;
        var o = i.getCoordinate();
        return o.z === void 0 || Number.isNaN(o.z) || (s += "Z"), o.m === void 0 || Number.isNaN(o.m) || (s += "M"), s;
      }(r);
      return n.length > 0 && (e += " " + n), r.isEmpty() ? e + " " + wi : e + " (" + t(r) + ")";
    }
    var Ps = function() {
      function r(e) {
        a(this, r), this.geometryFactory = e || new Nt(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return l(r, [{ key: "read", value: function(e) {
        var t = new Os(e);
        return new bs(t, this.geometryFactory).parse();
      } }, { key: "write", value: function(e) {
        return Ci(e);
      } }]), r;
    }(), zn = function() {
      function r(e) {
        a(this, r), this.parser = new Ps(e);
      }
      return l(r, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }], [{ key: "toLineString", value: function(e, t) {
        if (arguments.length !== 2) throw new Error("Not implemented");
        return "LINESTRING ( " + e.x + " " + e.y + ", " + t.x + " " + t.y + " )";
      } }]), r;
    }(), ye = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getIndexAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intLineIndex[e][t];
      } }, { key: "getTopologySummary", value: function() {
        var e = new on();
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
        return zn.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + zn.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
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
        }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new R(), this._intPt[1] = new R(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
      } }, { key: "computeEdgeDistance", value: function(e, t, n) {
        var i = Math.abs(n.x - t.x), s = Math.abs(n.y - t.y), o = -1;
        if (e.equals(t)) o = 0;
        else if (e.equals(n)) o = i > s ? i : s;
        else {
          var c = Math.abs(e.x - t.x), v = Math.abs(e.y - t.y);
          (o = i > s ? c : v) !== 0 || e.equals(t) || (o = Math.max(c, v));
        }
        return ie.isTrue(!(o === 0 && !e.equals(t)), "Bad distance calculation"), o;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(e, t, n) {
        var i = e.x - t.x, s = e.y - t.y, o = Math.sqrt(i * i + s * s);
        return ie.isTrue(!(o === 0 && !e.equals(t)), "Invalid distance calculation"), o;
      } }]), r;
    }();
    ye.DONT_INTERSECT = 0, ye.DO_INTERSECT = 1, ye.COLLINEAR = 2, ye.NO_INTERSECTION = 0, ye.POINT_INTERSECTION = 1, ye.COLLINEAR_INTERSECTION = 2;
    var _t = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.call(this);
      }
      return l(t, [{ key: "isInSegmentEnvelopes", value: function(n) {
        var i = new ve(this._inputLines[0][0], this._inputLines[0][1]), s = new ve(this._inputLines[1][0], this._inputLines[1][1]);
        return i.contains(n) && s.contains(n);
      } }, { key: "computeIntersection", value: function() {
        if (arguments.length !== 3) return S(d(t.prototype), "computeIntersection", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = arguments[2];
        if (this._isProper = !1, ve.intersects(i, s, n) && K.index(i, s, n) === 0 && K.index(s, i, n) === 0) return this._isProper = !0, (n.equals(i) || n.equals(s)) && (this._isProper = !1), this._result = ye.POINT_INTERSECTION, null;
        this._result = ye.NO_INTERSECTION;
      } }, { key: "intersection", value: function(n, i, s, o) {
        var c = this.intersectionSafe(n, i, s, o);
        return this.isInSegmentEnvelopes(c) || (c = new R(t.nearestEndpoint(n, i, s, o))), this._precisionModel !== null && this._precisionModel.makePrecise(c), c;
      } }, { key: "checkDD", value: function(n, i, s, o, c) {
        var v = bn.intersection(n, i, s, o), y = this.isInSegmentEnvelopes(v);
        Ae.out.println("DD in env = " + y + "  --------------------- " + v), c.distance(v) > 1e-4 && Ae.out.println("Distance = " + c.distance(v));
      } }, { key: "intersectionSafe", value: function(n, i, s, o) {
        var c = Mn.intersection(n, i, s, o);
        return c === null && (c = t.nearestEndpoint(n, i, s, o)), c;
      } }, { key: "computeCollinearIntersection", value: function(n, i, s, o) {
        var c = ve.intersects(n, i, s), v = ve.intersects(n, i, o), y = ve.intersects(s, o, n), x = ve.intersects(s, o, i);
        return c && v ? (this._intPt[0] = s, this._intPt[1] = o, ye.COLLINEAR_INTERSECTION) : y && x ? (this._intPt[0] = n, this._intPt[1] = i, ye.COLLINEAR_INTERSECTION) : c && y ? (this._intPt[0] = s, this._intPt[1] = n, !s.equals(n) || v || x ? ye.COLLINEAR_INTERSECTION : ye.POINT_INTERSECTION) : c && x ? (this._intPt[0] = s, this._intPt[1] = i, !s.equals(i) || v || y ? ye.COLLINEAR_INTERSECTION : ye.POINT_INTERSECTION) : v && y ? (this._intPt[0] = o, this._intPt[1] = n, !o.equals(n) || c || x ? ye.COLLINEAR_INTERSECTION : ye.POINT_INTERSECTION) : v && x ? (this._intPt[0] = o, this._intPt[1] = i, !o.equals(i) || c || y ? ye.COLLINEAR_INTERSECTION : ye.POINT_INTERSECTION) : ye.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, i, s, o) {
        if (this._isProper = !1, !ve.intersects(n, i, s, o)) return ye.NO_INTERSECTION;
        var c = K.index(n, i, s), v = K.index(n, i, o);
        if (c > 0 && v > 0 || c < 0 && v < 0) return ye.NO_INTERSECTION;
        var y = K.index(s, o, n), x = K.index(s, o, i);
        return y > 0 && x > 0 || y < 0 && x < 0 ? ye.NO_INTERSECTION : c === 0 && v === 0 && y === 0 && x === 0 ? this.computeCollinearIntersection(n, i, s, o) : (c === 0 || v === 0 || y === 0 || x === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : i.equals2D(s) || i.equals2D(o) ? this._intPt[0] = i : c === 0 ? this._intPt[0] = new R(s) : v === 0 ? this._intPt[0] = new R(o) : y === 0 ? this._intPt[0] = new R(n) : x === 0 && (this._intPt[0] = new R(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, s, o)), ye.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, i, s, o) {
        var c = n, v = Ze.pointToSegment(n, s, o), y = Ze.pointToSegment(i, s, o);
        return y < v && (v = y, c = i), (y = Ze.pointToSegment(s, n, i)) < v && (v = y, c = s), (y = Ze.pointToSegment(o, n, i)) < v && (v = y, c = o), c;
      } }]), t;
    }(ye), As = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "countSegment", value: function(e, t) {
        if (e.x < this._p.x && t.x < this._p.x) return null;
        if (this._p.x === t.x && this._p.y === t.y) return this._isPointOnSegment = !0, null;
        if (e.y === this._p.y && t.y === this._p.y) {
          var n = e.x, i = t.x;
          return n > i && (n = t.x, i = e.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
        }
        if (e.y > this._p.y && t.y <= this._p.y || t.y > this._p.y && e.y <= this._p.y) {
          var s = K.index(e, t, this._p);
          if (s === K.COLLINEAR) return this._isPointOnSegment = !0, null;
          t.y < e.y && (s = -s), s === K.LEFT && this._crossingCount++;
        }
      } }, { key: "isPointInPolygon", value: function() {
        return this.getLocation() !== _.EXTERIOR;
      } }, { key: "getLocation", value: function() {
        return this._isPointOnSegment ? _.BOUNDARY : this._crossingCount % 2 == 1 ? _.INTERIOR : _.EXTERIOR;
      } }, { key: "isOnSegment", value: function() {
        return this._isPointOnSegment;
      } }], [{ key: "constructor_", value: function() {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var e = arguments[0];
        this._p = e;
      } }, { key: "locatePointInRing", value: function() {
        if (arguments[0] instanceof R && ee(arguments[1], ae)) {
          for (var e = arguments[0], t = arguments[1], n = new r(e), i = new R(), s = new R(), o = 1; o < t.size(); o++) if (t.getCoordinate(o, i), t.getCoordinate(o - 1, s), n.countSegment(i, s), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof R && arguments[1] instanceof Array) {
          for (var c = arguments[0], v = arguments[1], y = new r(c), x = 1; x < v.length; x++) {
            var w = v[x], C = v[x - 1];
            if (y.countSegment(w, C), y.isOnSegment()) return y.getLocation();
          }
          return y.getLocation();
        }
      } }]), r;
    }(), Bn = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof R && ee(arguments[1], ae)) {
          for (var e = arguments[0], t = arguments[1], n = new _t(), i = new R(), s = new R(), o = t.size(), c = 1; c < o; c++) if (t.getCoordinate(c - 1, i), t.getCoordinate(c, s), n.computeIntersection(e, i, s), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof R && arguments[1] instanceof Array) {
          for (var v = arguments[0], y = arguments[1], x = new _t(), w = 1; w < y.length; w++) {
            var C = y[w - 1], D = y[w];
            if (x.computeIntersection(v, C, D), x.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(e, t) {
        return As.locatePointInRing(e, t);
      } }, { key: "isInRing", value: function(e, t) {
        return r.locateInRing(e, t) !== _.EXTERIOR;
      } }]), r;
    }(), De = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "setAllLocations", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] = e;
      } }, { key: "isNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] !== _.NONE) return !1;
        return !0;
      } }, { key: "setAllLocationsIfNull", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] === _.NONE && (this.location[t] = e);
      } }, { key: "isLine", value: function() {
        return this.location.length === 1;
      } }, { key: "merge", value: function(e) {
        if (e.location.length > this.location.length) {
          var t = new Array(3).fill(null);
          t[F.ON] = this.location[F.ON], t[F.LEFT] = _.NONE, t[F.RIGHT] = _.NONE, this.location = t;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === _.NONE && n < e.location.length && (this.location[n] = e.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var e = this.location[F.LEFT];
        this.location[F.LEFT] = this.location[F.RIGHT], this.location[F.RIGHT] = e;
      } }, { key: "toString", value: function() {
        var e = new Dt();
        return this.location.length > 1 && e.append(_.toLocationSymbol(this.location[F.LEFT])), e.append(_.toLocationSymbol(this.location[F.ON])), this.location.length > 1 && e.append(_.toLocationSymbol(this.location[F.RIGHT])), e.toString();
      } }, { key: "setLocations", value: function(e, t, n) {
        this.location[F.ON] = e, this.location[F.LEFT] = t, this.location[F.RIGHT] = n;
      } }, { key: "get", value: function(e) {
        return e < this.location.length ? this.location[e] : _.NONE;
      } }, { key: "isArea", value: function() {
        return this.location.length > 1;
      } }, { key: "isAnyNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] === _.NONE) return !0;
        return !1;
      } }, { key: "setLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.setLocation(F.ON, e);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.location[t] = n;
        }
      } }, { key: "init", value: function(e) {
        this.location = new Array(e).fill(null), this.setAllLocations(_.NONE);
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
            this.init(1), this.location[F.ON] = t;
          } else if (arguments[0] instanceof r) {
            var n = arguments[0];
            if (this.init(n.location.length), n !== null) for (var i = 0; i < this.location.length; i++) this.location[i] = n.location[i];
          }
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this.init(3), this.location[F.ON] = s, this.location[F.LEFT] = o, this.location[F.RIGHT] = c;
        }
      } }]), r;
    }(), Fe = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getGeometryCount", value: function() {
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
        for (var t = 0; t < 2; t++) this.elt[t] === null && e.elt[t] !== null ? this.elt[t] = new De(e.elt[t]) : this.elt[t].merge(e.elt[t]);
      } }, { key: "flip", value: function() {
        this.elt[0].flip(), this.elt[1].flip();
      } }, { key: "getLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].get(F.ON);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return this.elt[t].get(n);
        }
      } }, { key: "toString", value: function() {
        var e = new Dt();
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
          this.elt[e].setLocation(F.ON, t);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          this.elt[n].setLocation(i, s);
        }
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.elt[0].isEqualOnSide(e.elt[0], t) && this.elt[1].isEqualOnSide(e.elt[1], t);
      } }, { key: "allPositionsEqual", value: function(e, t) {
        return this.elt[e].allPositionsEqual(t);
      } }, { key: "toLine", value: function(e) {
        this.elt[e].isArea() && (this.elt[e] = new De(this.elt[e].location[0]));
      } }], [{ key: "constructor_", value: function() {
        if (this.elt = new Array(2).fill(null), arguments.length === 1) {
          if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.elt[0] = new De(e), this.elt[1] = new De(e);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            this.elt[0] = new De(t.elt[0]), this.elt[1] = new De(t.elt[1]);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.elt[0] = new De(_.NONE), this.elt[1] = new De(_.NONE), this.elt[n].setLocation(i);
        } else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this.elt[0] = new De(s, o, c), this.elt[1] = new De(s, o, c);
        } else if (arguments.length === 4) {
          var v = arguments[0], y = arguments[1], x = arguments[2], w = arguments[3];
          this.elt[0] = new De(_.NONE, _.NONE, _.NONE), this.elt[1] = new De(_.NONE, _.NONE, _.NONE), this.elt[v].setLocations(y, x, w);
        }
      } }, { key: "toLineLabel", value: function(e) {
        for (var t = new r(_.NONE), n = 0; n < 2; n++) t.setLocation(n, e.getLocation(n));
        return t;
      } }]), r;
    }(), hn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "computeRing", value: function() {
        if (this._ring !== null) return null;
        for (var e = new Array(this._pts.size()).fill(null), t = 0; t < this._pts.size(); t++) e[t] = this._pts.get(t);
        this._ring = this._geometryFactory.createLinearRing(e), this._isHole = K.isCCW(this._ring.getCoordinates());
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "computePoints", value: function(e) {
        this._startDe = e;
        var t = e, n = !0;
        do {
          if (t === null) throw new et("Found null DirectedEdge");
          if (t.getEdgeRing() === this) throw new et("Directed Edge visited twice during ring-building at " + t.getCoordinate());
          this._edges.add(t);
          var i = t.getLabel();
          ie.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(t.getEdge(), t.isForward(), n), n = !1, this.setEdgeRing(t, this), t = this.getNext(t);
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
        var e = this._startDe;
        do
          e.getEdge().setInResult(!0), e = e.getNext();
        while (e !== this._startDe);
      } }, { key: "containsPoint", value: function(e) {
        var t = this.getLinearRing();
        if (!t.getEnvelopeInternal().contains(e) || !Bn.isInRing(e, t.getCoordinates())) return !1;
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
          var t = arguments[0], n = arguments[1], i = t.getLocation(n, F.RIGHT);
          if (i === _.NONE) return null;
          if (this._label.getLocation(n) === _.NONE) return this._label.setLocation(n, i), null;
        }
      } }, { key: "setShell", value: function(e) {
        this._shell = e, e !== null && e.addHole(this);
      } }, { key: "toPolygon", value: function(e) {
        for (var t = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) t[n] = this._holes.get(n).getLinearRing();
        return e.createPolygon(this.getLinearRing(), t);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new Q(), this._pts = new Q(), this._label = new Fe(_.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new Q(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            this._geometryFactory = t, this.computePoints(e), this.computeRing();
          }
        }
      } }]), r;
    }(), Ds = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "setEdgeRing", value: function(n, i) {
        n.setMinEdgeRing(i);
      } }, { key: "getNext", value: function(n) {
        return n.getNextMin();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        hn.constructor_.call(this, n, i);
      } }]), t;
    }(hn), Fs = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "buildMinimalRings", value: function() {
        var n = new Q(), i = this._startDe;
        do {
          if (i.getMinEdgeRing() === null) {
            var s = new Ds(i, this._geometryFactory);
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
        hn.constructor_.call(this, n, i);
      } }]), t;
    }(hn), Oi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "setVisited", value: function(e) {
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
        ie.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(e);
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
    }(), cn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "isIncidentEdgeInResult", value: function() {
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
        var s = _.NONE;
        if (s = this._label.getLocation(i), !n.isNull(i)) {
          var o = n.getLocation(i);
          s !== _.BOUNDARY && (s = o);
        }
        return s;
      } }, { key: "setLabel", value: function() {
        if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return S(d(t.prototype), "setLabel", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        this._label === null ? this._label = new Fe(n, i) : this._label.setLocation(n, i);
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "mergeLabel", value: function() {
        if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.mergeLabel(n._label);
        } else if (arguments[0] instanceof Fe) for (var i = arguments[0], s = 0; s < 2; s++) {
          var o = this.computeMergedLocation(i, s), c = this._label.getLocation(s);
          c === _.NONE && this._label.setLocation(s, o);
        }
      } }, { key: "add", value: function(n) {
        this._edges.insert(n), n.setNode(this);
      } }, { key: "setLabelBoundary", value: function(n) {
        if (this._label === null) return null;
        var i = _.NONE;
        this._label !== null && (i = this._label.getLocation(n));
        var s = null;
        switch (i) {
          case _.BOUNDARY:
            s = _.INTERIOR;
            break;
          case _.INTERIOR:
          default:
            s = _.BOUNDARY;
        }
        this._label.setLocation(n, s);
      } }], [{ key: "constructor_", value: function() {
        this._coord = null, this._edges = null;
        var n = arguments[0], i = arguments[1];
        this._coord = n, this._edges = i, this._label = new Fe(0, _.NONE);
      } }]), t;
    }(Oi), Gs = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(Ni);
    function bi(r) {
      return r == null ? 0 : r.color;
    }
    function he(r) {
      return r == null ? null : r.parent;
    }
    function We(r, e) {
      r !== null && (r.color = e);
    }
    function Xn(r) {
      return r == null ? null : r.left;
    }
    function Mi(r) {
      return r == null ? null : r.right;
    }
    var Xt = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).root_ = null, n.size_ = 0, n;
      }
      return l(t, [{ key: "get", value: function(n) {
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
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) he(n) === Xn(he(he(n))) ? bi(i = Mi(he(he(n)))) === 1 ? (We(he(n), 0), We(i, 0), We(he(he(n)), 1), n = he(he(n))) : (n === Mi(he(n)) && (n = he(n), this.rotateLeft(n)), We(he(n), 0), We(he(he(n)), 1), this.rotateRight(he(he(n)))) : bi(i = Xn(he(he(n)))) === 1 ? (We(he(n), 0), We(i, 0), We(he(he(n)), 1), n = he(he(n))) : (n === Xn(he(n)) && (n = he(n), this.rotateRight(n)), We(he(n), 0), We(he(he(n)), 1), this.rotateLeft(he(he(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new Q(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i.value); (i = t.successor(i)) !== null; ) n.add(i.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new Cn(), i = this.getFirstEntry();
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
      } }]), t;
    }(Gs), Pi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "find", value: function(e) {
        return this.nodeMap.get(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof R) {
          var e = arguments[0], t = this.nodeMap.get(e);
          return t === null && (t = this.nodeFact.createNode(e), this.nodeMap.put(e, t)), t;
        }
        if (arguments[0] instanceof cn) {
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
        for (var t = new Q(), n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().getLocation(e) === _.BOUNDARY && t.add(i);
        }
        return t;
      } }, { key: "add", value: function(e) {
        var t = e.getCoordinate();
        this.addNode(t).add(e);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new Xt(), this.nodeFact = null;
        var e = arguments[0];
        this.nodeFact = e;
      } }]), r;
    }(), Le = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "isNorthern", value: function(e) {
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
          if (e === 0 && t === 0) throw new G("Cannot compute the quadrant for point ( " + e + ", " + t + " )");
          return e >= 0 ? t >= 0 ? r.NE : r.SE : t >= 0 ? r.NW : r.SW;
        }
        if (arguments[0] instanceof R && arguments[1] instanceof R) {
          var n = arguments[0], i = arguments[1];
          if (i.x === n.x && i.y === n.y) throw new G("Cannot compute the quadrant for two identical points " + n);
          return i.x >= n.x ? i.y >= n.y ? r.NE : r.SE : i.y >= n.y ? r.NW : r.SW;
        }
      } }]), r;
    }();
    Le.NE = 0, Le.NW = 1, Le.SW = 2, Le.SE = 3;
    var Ai = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "compareDirection", value: function(e) {
        return this._dx === e._dx && this._dy === e._dy ? 0 : this._quadrant > e._quadrant ? 1 : this._quadrant < e._quadrant ? -1 : K.index(e._p0, e._p1, this._p1);
      } }, { key: "getDy", value: function() {
        return this._dy;
      } }, { key: "getCoordinate", value: function() {
        return this._p0;
      } }, { key: "setNode", value: function(e) {
        this._node = e;
      } }, { key: "print", value: function(e) {
        var t = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), s = n.substring(i + 1);
        e.print("  " + s + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label);
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
        this._p0 = e, this._p1 = t, this._dx = t.x - e.x, this._dy = t.y - e.y, this._quadrant = Le.quadrant(this._dx, this._dy), ie.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
          var e = arguments[0];
          this._edge = e;
        } else if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2];
          r.constructor_.call(this, t, n, i, null);
        } else if (arguments.length === 4) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3];
          r.constructor_.call(this, s), this.init(o, c), this._label = v;
        }
      } }]), r;
    }(), Un = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getNextMin", value: function() {
        return this._nextMin;
      } }, { key: "getDepth", value: function(n) {
        return this._depth[n];
      } }, { key: "setVisited", value: function(n) {
        this._isVisited = n;
      } }, { key: "computeDirectedLabel", value: function() {
        this._label = new Fe(this._edge.getLabel()), this._isForward || this._label.flip();
      } }, { key: "getNext", value: function() {
        return this._next;
      } }, { key: "setDepth", value: function(n, i) {
        if (this._depth[n] !== -999 && this._depth[n] !== i) throw new et("assigned depths do not match", this.getCoordinate());
        this._depth[n] = i;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, i = 0; i < 2; i++) this._label.isArea(i) && this._label.getLocation(i, F.LEFT) === _.INTERIOR && this._label.getLocation(i, F.RIGHT) === _.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        S(d(t.prototype), "print", this).call(this, n), n.print(" " + this._depth[F.LEFT] + "/" + this._depth[F.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
      } }, { key: "setMinEdgeRing", value: function(n) {
        this._minEdgeRing = n;
      } }, { key: "isLineEdge", value: function() {
        var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, _.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, _.EXTERIOR);
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
        n === F.LEFT && (o = -1);
        var c = F.opposite(n), v = i + s * o;
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
        if (Ai.constructor_.call(this, n), this._isForward = i, i) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var s = n.getNumPoints() - 1;
          this.init(n.getCoordinate(s), n.getCoordinate(s - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, i) {
        return n === _.EXTERIOR && i === _.INTERIOR ? 1 : n === _.INTERIOR && i === _.EXTERIOR ? -1 : 0;
      } }]), t;
    }(Ai), Di = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "createNode", value: function(e) {
        return new cn(e, null);
      } }]), r;
    }(), Fi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "printEdges", value: function(e) {
        e.println("Edges:");
        for (var t = 0; t < this._edges.size(); t++) {
          e.println("edge " + t + ":");
          var n = this._edges.get(t);
          n.print(e), n.eiList.print(e);
        }
      } }, { key: "find", value: function(e) {
        return this._nodes.find(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof cn) {
          var e = arguments[0];
          return this._nodes.addNode(e);
        }
        if (arguments[0] instanceof R) {
          var t = arguments[0];
          return this._nodes.addNode(t);
        }
      } }, { key: "getNodeIterator", value: function() {
        return this._nodes.iterator();
      } }, { key: "linkResultDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkResultDirectedEdges();
      } }, { key: "debugPrintln", value: function(e) {
        Ae.out.println(e);
      } }, { key: "isBoundaryNode", value: function(e, t) {
        var n = this._nodes.find(t);
        if (n === null) return !1;
        var i = n.getLabel();
        return i !== null && i.getLocation(e) === _.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(e, t, n, i) {
        return !!e.equals(n) && K.index(e, t, i) === K.COLLINEAR && Le.quadrant(e, t) === Le.quadrant(n, i);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(e) {
        Ae.out.print(e);
      } }, { key: "getEdgeIterator", value: function() {
        return this._edges.iterator();
      } }, { key: "findEdgeInSameDirection", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), s = i.getCoordinates();
          if (this.matchInSameDirection(e, t, s[0], s[1]) || this.matchInSameDirection(e, t, s[s.length - 1], s[s.length - 2])) return i;
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
          var i = new Un(n, !0), s = new Un(n, !1);
          i.setSym(s), s.setSym(i), this.add(i), this.add(s);
        }
      } }, { key: "add", value: function(e) {
        this._nodes.add(e), this._edgeEndList.add(e);
      } }, { key: "getNodes", value: function() {
        return this._nodes.values();
      } }, { key: "findEdge", value: function(e, t) {
        for (var n = 0; n < this._edges.size(); n++) {
          var i = this._edges.get(n), s = i.getCoordinates();
          if (e.equals(s[0]) && t.equals(s[1])) return i;
        }
        return null;
      } }], [{ key: "constructor_", value: function() {
        if (this._edges = new Q(), this._nodes = null, this._edgeEndList = new Q(), arguments.length === 0) this._nodes = new Pi(new Di());
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._nodes = new Pi(e);
        }
      } }, { key: "linkResultDirectedEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }]), r;
    }(), qs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "sortShellsAndHoles", value: function(e, t, n) {
        for (var i = e.iterator(); i.hasNext(); ) {
          var s = i.next();
          s.isHole() ? n.add(s) : t.add(s);
        }
      } }, { key: "computePolygons", value: function(e) {
        for (var t = new Q(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next().toPolygon(this._geometryFactory);
          t.add(i);
        }
        return t;
      } }, { key: "placeFreeHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.getShell() === null) {
            var s = r.findEdgeRingContaining(i, e);
            if (s === null) throw new et("unable to assign hole to a shell", i.getCoordinate(0));
            i.setShell(s);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(e, t, n) {
        for (var i = new Q(), s = e.iterator(); s.hasNext(); ) {
          var o = s.next();
          if (o.getMaxNodeDegree() > 2) {
            o.linkDirectedEdgesForMinimalEdgeRings();
            var c = o.buildMinimalRings(), v = this.findShell(c);
            v !== null ? (this.placePolygonHoles(v, c), t.add(v)) : n.addAll(c);
          } else i.add(o);
        }
        return i;
      } }, { key: "buildMaximalEdgeRings", value: function(e) {
        for (var t = new Q(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isInResult() && i.getLabel().isArea() && i.getEdgeRing() === null) {
            var s = new Fs(i, this._geometryFactory);
            t.add(s), s.setInResult();
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
          var s = i.next();
          s.isHole() || (n = s, t++);
        }
        return ie.isTrue(t <= 1, "found two shells in MinimalEdgeRing list"), n;
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.add(e.getEdgeEnds(), e.getNodes());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          Fi.linkResultDirectedEdges(n);
          var i = this.buildMaximalEdgeRings(t), s = new Q(), o = this.buildMinimalEdgeRings(i, this._shellList, s);
          this.sortShellsAndHoles(o, this._shellList, s), this.placeFreeHoles(this._shellList, s);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new Q();
        var e = arguments[0];
        this._geometryFactory = e;
      } }, { key: "findEdgeRingContaining", value: function(e, t) {
        for (var n = e.getLinearRing(), i = n.getEnvelopeInternal(), s = n.getCoordinateN(0), o = null, c = null, v = t.iterator(); v.hasNext(); ) {
          var y = v.next(), x = y.getLinearRing(), w = x.getEnvelopeInternal();
          if (!w.equals(i) && w.contains(i)) {
            s = _e.ptNotInList(n.getCoordinates(), x.getCoordinates());
            var C = !1;
            Bn.isInRing(s, x.getCoordinates()) && (C = !0), C && (o === null || c.contains(w)) && (c = (o = y).getLinearRing().getEnvelopeInternal());
          }
        }
        return o;
      } }]), r;
    }(), Gi = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "getBounds", value: function() {
      } }]), r;
    }(), nt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [Gi, U];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var e = arguments[0], t = arguments[1];
        this._bounds = e, this._item = t;
      } }]), r;
    }(), fn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "poll", value: function() {
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
        this._size = null, this._items = null, this._size = 0, this._items = new Q(), this._items.add(null);
      } }]), r;
    }(), Ys = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "insert", value: function(e, t) {
      } }, { key: "remove", value: function(e, t) {
      } }, { key: "query", value: function() {
      } }]), r;
    }(), Ge = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getLevel", value: function() {
        return this._level;
      } }, { key: "size", value: function() {
        return this._childBoundables.size();
      } }, { key: "getChildBoundables", value: function() {
        return this._childBoundables;
      } }, { key: "addChildBoundable", value: function(e) {
        ie.isTrue(this._bounds === null), this._childBoundables.add(e);
      } }, { key: "isEmpty", value: function() {
        return this._childBoundables.isEmpty();
      } }, { key: "getBounds", value: function() {
        return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [Gi, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new Q(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._level = e;
          }
        }
      } }]), r;
    }(), wt = { reverseOrder: function() {
      return { compare: function(r, e) {
        return e.compareTo(r);
      } };
    }, min: function(r) {
      return wt.sort(r), r.get(0);
    }, sort: function(r, e) {
      var t = r.toArray();
      e ? mt.sort(t, e) : mt.sort(t);
      for (var n = r.iterator(), i = 0, s = t.length; i < s; i++) n.next(), n.set(t[i]);
    }, singletonList: function(r) {
      var e = new Q();
      return e.add(r), e;
    } }, zs = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "maxDistance", value: function(e, t, n, i, s, o, c, v) {
        var y = r.distance(e, t, s, o);
        return y = Math.max(y, r.distance(e, t, c, v)), y = Math.max(y, r.distance(n, i, s, o)), y = Math.max(y, r.distance(n, i, c, v));
      } }, { key: "distance", value: function(e, t, n, i) {
        var s = n - e, o = i - t;
        return Math.sqrt(s * s + o * o);
      } }, { key: "maximumDistance", value: function(e, t) {
        var n = Math.min(e.getMinX(), t.getMinX()), i = Math.min(e.getMinY(), t.getMinY()), s = Math.max(e.getMaxX(), t.getMaxX()), o = Math.max(e.getMaxY(), t.getMaxY());
        return r.distance(n, i, s, o);
      } }, { key: "minMaxDistance", value: function(e, t) {
        var n = e.getMinX(), i = e.getMinY(), s = e.getMaxX(), o = e.getMaxY(), c = t.getMinX(), v = t.getMinY(), y = t.getMaxX(), x = t.getMaxY(), w = r.maxDistance(n, i, n, o, c, v, c, x);
        return w = Math.min(w, r.maxDistance(n, i, n, o, c, v, y, v)), w = Math.min(w, r.maxDistance(n, i, n, o, y, x, c, x)), w = Math.min(w, r.maxDistance(n, i, n, o, y, x, y, v)), w = Math.min(w, r.maxDistance(n, i, s, i, c, v, c, x)), w = Math.min(w, r.maxDistance(n, i, s, i, c, v, y, v)), w = Math.min(w, r.maxDistance(n, i, s, i, y, x, c, x)), w = Math.min(w, r.maxDistance(n, i, s, i, y, x, y, v)), w = Math.min(w, r.maxDistance(s, o, n, o, c, v, c, x)), w = Math.min(w, r.maxDistance(s, o, n, o, c, v, y, v)), w = Math.min(w, r.maxDistance(s, o, n, o, y, x, c, x)), w = Math.min(w, r.maxDistance(s, o, n, o, y, x, y, v)), w = Math.min(w, r.maxDistance(s, o, s, i, c, v, c, x)), w = Math.min(w, r.maxDistance(s, o, s, i, c, v, y, v)), w = Math.min(w, r.maxDistance(s, o, s, i, y, x, c, x)), w = Math.min(w, r.maxDistance(s, o, s, i, y, x, y, v));
      } }]), r;
    }(), Lt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "maximumDistance", value: function() {
        return zs.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
      } }, { key: "expandToQueue", value: function(e, t) {
        var n = r.isComposite(this._boundable1), i = r.isComposite(this._boundable2);
        if (n && i) return r.area(this._boundable1) > r.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, e, t), null) : (this.expand(this._boundable2, this._boundable1, !0, e, t), null);
        if (n) return this.expand(this._boundable1, this._boundable2, !1, e, t), null;
        if (i) return this.expand(this._boundable2, this._boundable1, !0, e, t), null;
        throw new G("neither boundable is composite");
      } }, { key: "isLeaves", value: function() {
        return !(r.isComposite(this._boundable1) || r.isComposite(this._boundable2));
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._distance < t._distance ? -1 : this._distance > t._distance ? 1 : 0;
      } }, { key: "expand", value: function(e, t, n, i, s) {
        for (var o = e.getChildBoundables().iterator(); o.hasNext(); ) {
          var c = o.next(), v = null;
          (v = n ? new r(t, c, this._itemDistance) : new r(c, t, this._itemDistance)).getDistance() < s && i.add(v);
        }
      } }, { key: "getBoundable", value: function(e) {
        return e === 0 ? this._boundable1 : this._boundable2;
      } }, { key: "getDistance", value: function() {
        return this._distance;
      } }, { key: "distance", value: function() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._boundable1 = e, this._boundable2 = t, this._itemDistance = n, this._distance = this.distance();
      } }, { key: "area", value: function(e) {
        return e.getBounds().getArea();
      } }, { key: "isComposite", value: function(e) {
        return e instanceof Ge;
      } }]), r;
    }(), qi = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "visitItem", value: function(e) {
      } }]), r;
    }(), Rt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "queryInternal", value: function() {
        if (ee(arguments[2], qi) && arguments[0] instanceof Object && arguments[1] instanceof Ge) for (var e = arguments[0], t = arguments[1], n = arguments[2], i = t.getChildBoundables(), s = 0; s < i.size(); s++) {
          var o = i.get(s);
          this.getIntersectsOp().intersects(o.getBounds(), e) && (o instanceof Ge ? this.queryInternal(e, o, n) : o instanceof nt ? n.visitItem(o.getItem()) : ie.shouldNeverReachHere());
        }
        else if (ee(arguments[2], vt) && arguments[0] instanceof Object && arguments[1] instanceof Ge) for (var c = arguments[0], v = arguments[1], y = arguments[2], x = v.getChildBoundables(), w = 0; w < x.size(); w++) {
          var C = x.get(w);
          this.getIntersectsOp().intersects(C.getBounds(), c) && (C instanceof Ge ? this.queryInternal(c, C, y) : C instanceof nt ? y.add(C.getItem()) : ie.shouldNeverReachHere());
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
            i instanceof Ge ? t += this.size(i) : i instanceof nt && (t += 1);
          }
          return t;
        }
      } }, { key: "removeItem", value: function(e, t) {
        for (var n = null, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
          var s = i.next();
          s instanceof nt && s.getItem() === t && (n = s);
        }
        return n !== null && (e.getChildBoundables().remove(n), !0);
      } }, { key: "itemsTree", value: function() {
        if (arguments.length === 0) {
          this.build();
          var e = this.itemsTree(this._root);
          return e === null ? new Q() : e;
        }
        if (arguments.length === 1) {
          for (var t = arguments[0], n = new Q(), i = t.getChildBoundables().iterator(); i.hasNext(); ) {
            var s = i.next();
            if (s instanceof Ge) {
              var o = this.itemsTree(s);
              o !== null && n.add(o);
            } else s instanceof nt ? n.add(s.getItem()) : ie.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(e, t) {
        ie.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new nt(e, t));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Q();
          return this.boundablesAtLevel(e, this._root, t), t;
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], s = arguments[2];
          if (ie.isTrue(n > -2), i.getLevel() === n) return s.add(i), null;
          for (var o = i.getChildBoundables().iterator(); o.hasNext(); ) {
            var c = o.next();
            c instanceof Ge ? this.boundablesAtLevel(n, c, s) : (ie.isTrue(c instanceof nt), n === -1 && s.add(c));
          }
          return null;
        }
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.build();
          var t = new Q();
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
          var n = arguments[0], i = arguments[1], s = arguments[2], o = this.removeItem(i, s);
          if (o) return !0;
          for (var c = null, v = i.getChildBoundables().iterator(); v.hasNext(); ) {
            var y = v.next();
            if (this.getIntersectsOp().intersects(y.getBounds(), n) && y instanceof Ge && (o = this.remove(n, y, s))) {
              c = y;
              break;
            }
          }
          return c !== null && c.getChildBoundables().isEmpty() && i.getChildBoundables().remove(c), o;
        }
      } }, { key: "createHigherLevels", value: function(e, t) {
        ie.isTrue(!e.isEmpty());
        var n = this.createParentBoundables(e, t + 1);
        return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, t + 1);
      } }, { key: "depth", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i instanceof Ge) {
              var s = this.depth(i);
              s > t && (t = s);
            }
          }
          return t + 1;
        }
      } }, { key: "createParentBoundables", value: function(e, t) {
        ie.isTrue(!e.isEmpty());
        var n = new Q();
        n.add(this.createNode(t));
        var i = new Q(e);
        wt.sort(i, this.getComparator());
        for (var s = i.iterator(); s.hasNext(); ) {
          var o = s.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(t)), this.lastNode(n).addChildBoundable(o);
        }
        return n;
      } }, { key: "isEmpty", value: function() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._root = null, this._built = !1, this._itemBoundables = new Q(), this._nodeCapacity = null, arguments.length === 0) r.constructor_.call(this, r.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var e = arguments[0];
          ie.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
        }
      } }, { key: "compareDoubles", value: function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
      } }]), r;
    }();
    Rt.IntersectsOp = function() {
    }, Rt.DEFAULT_NODE_CAPACITY = 10;
    var Bs = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "distance", value: function(e, t) {
      } }]), r;
    }(), je = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, i) {
        ie.isTrue(n.length > 0);
        for (var s = new Q(), o = 0; o < n.length; o++) s.addAll(this.createParentBoundablesFromVerticalSlice(n[o], i));
        return s;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.nearestNeighbourK(n, H.POSITIVE_INFINITY, i);
        }
        if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2], v = o, y = new fn();
          y.add(s);
          for (var x = new fn(); !y.isEmpty() && v >= 0; ) {
            var w = y.poll(), C = w.getDistance();
            if (C >= v) break;
            if (w.isLeaves()) if (x.size() < c) x.add(w);
            else {
              var D = x.peek();
              D.getDistance() > C && (x.poll(), x.add(w));
              var A = x.peek();
              v = A.getDistance();
            }
            else w.expandToQueue(y, v);
          }
          return t.getItems(x);
        }
      } }, { key: "createNode", value: function(n) {
        return new Yi(n);
      } }, { key: "size", value: function() {
        return arguments.length === 0 ? S(d(t.prototype), "size", this).call(this) : S(d(t.prototype), "size", this).apply(this, arguments);
      } }, { key: "insert", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof ve)) return S(d(t.prototype), "insert", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        if (n.isNull()) return null;
        S(d(t.prototype), "insert", this).call(this, n, i);
      } }, { key: "getIntersectsOp", value: function() {
        return t.intersectsOp;
      } }, { key: "verticalSlices", value: function(n, i) {
        for (var s = Math.trunc(Math.ceil(n.size() / i)), o = new Array(i).fill(null), c = n.iterator(), v = 0; v < i; v++) {
          o[v] = new Q();
          for (var y = 0; c.hasNext() && y < s; ) {
            var x = c.next();
            o[v].add(x), y++;
          }
        }
        return o;
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0];
          return S(d(t.prototype), "query", this).call(this, n);
        }
        if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          S(d(t.prototype), "query", this).call(this, i, s);
        }
      } }, { key: "getComparator", value: function() {
        return t.yComparator;
      } }, { key: "createParentBoundablesFromVerticalSlice", value: function(n, i) {
        return S(d(t.prototype), "createParentBoundables", this).call(this, n, i);
      } }, { key: "remove", value: function() {
        if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof ve) {
          var n = arguments[0], i = arguments[1];
          return S(d(t.prototype), "remove", this).call(this, n, i);
        }
        return S(d(t.prototype), "remove", this).apply(this, arguments);
      } }, { key: "depth", value: function() {
        return arguments.length === 0 ? S(d(t.prototype), "depth", this).call(this) : S(d(t.prototype), "depth", this).apply(this, arguments);
      } }, { key: "createParentBoundables", value: function(n, i) {
        ie.isTrue(!n.isEmpty());
        var s = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), o = new Q(n);
        wt.sort(o, t.xComparator);
        var c = this.verticalSlices(o, Math.trunc(Math.ceil(Math.sqrt(s))));
        return this.createParentBoundablesFromVerticalSlices(c, i);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (ee(arguments[0], Bs)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var i = new Lt(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(i);
          }
          if (arguments[0] instanceof Lt) {
            var s = arguments[0], o = H.POSITIVE_INFINITY, c = null, v = new fn();
            for (v.add(s); !v.isEmpty() && o > 0; ) {
              var y = v.poll(), x = y.getDistance();
              if (x >= o) break;
              y.isLeaves() ? (o = x, c = y) : y.expandToQueue(v, o);
            }
            return c === null ? null : [c.getBoundable(0).getItem(), c.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var w = arguments[0], C = arguments[1];
            if (this.isEmpty() || w.isEmpty()) return null;
            var D = new Lt(this.getRoot(), w.getRoot(), C);
            return this.nearestNeighbour(D);
          }
          if (arguments.length === 3) {
            var A = arguments[0], Z = arguments[1], j = arguments[2], $ = new nt(A, Z), ce = new Lt(this.getRoot(), $, j);
            return this.nearestNeighbour(ce)[0];
          }
          if (arguments.length === 4) {
            var me = arguments[0], Ne = arguments[1], Pe = arguments[2], Ue = arguments[3], it = new nt(me, Ne), kt = new Lt(this.getRoot(), it, Pe);
            return this.nearestNeighbourK(kt, Ue);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], s = H.POSITIVE_INFINITY, o = new fn();
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
          var y = arguments[0], x = arguments[1], w = arguments[2], C = new Lt(this.getRoot(), y.getRoot(), x);
          return this.isWithinDistance(C, w);
        }
      } }, { key: "interfaces_", get: function() {
        return [Ys, U];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Rt.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return t.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, i) {
        return (n + i) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var i = new Array(n.size()).fill(null), s = 0; !n.isEmpty(); ) {
          var o = n.poll();
          i[s] = o.getBoundable(0).getItem(), s++;
        }
        return i;
      } }, { key: "centreY", value: function(n) {
        return t.avg(n.getMinY(), n.getMaxY());
      } }]), t;
    }(Rt), Yi = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "computeBounds", value: function() {
        for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
          var s = i.next();
          n === null ? n = new ve(s.getBounds()) : n.expandToInclude(s.getBounds());
        }
        return n;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0];
        Ge.constructor_.call(this, n);
      } }]), t;
    }(Ge);
    je.STRtreeNode = Yi, je.xComparator = new (function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "interfaces_", get: function() {
        return [we];
      } }, { key: "compare", value: function(e, t) {
        return Rt.compareDoubles(je.centreX(e.getBounds()), je.centreX(t.getBounds()));
      } }]), r;
    }())(), je.yComparator = new (function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "interfaces_", get: function() {
        return [we];
      } }, { key: "compare", value: function(e, t) {
        return Rt.compareDoubles(je.centreY(e.getBounds()), je.centreY(t.getBounds()));
      } }]), r;
    }())(), je.intersectsOp = new (function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(e, t) {
        return e.intersects(t);
      } }]), r;
    }())(), je.DEFAULT_NODE_CAPACITY = 10;
    var Xs = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "relativeSign", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "compare", value: function(e, t, n) {
        if (t.equals2D(n)) return 0;
        var i = r.relativeSign(t.x, n.x), s = r.relativeSign(t.y, n.y);
        switch (e) {
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
        return ie.shouldNeverReachHere("invalid octant value"), 0;
      } }, { key: "compareValue", value: function(e, t) {
        return e < 0 ? -1 : e > 0 ? 1 : t < 0 ? -1 : t > 0 ? 1 : 0;
      } }]), r;
    }(), Us = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? Xs.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.segmentIndex + ":" + this.coord.toString();
      } }, { key: "isInterior", value: function() {
        return this._isInterior;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
        this._segString = e, this.coord = new R(t), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !t.equals2D(e.getCoordinate(n));
      } }]), r;
    }(), Vs = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), r;
    }(), Hs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getSplitCoordinates", value: function() {
        var e = new Yt();
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next();
          this.addEdgeCoordinates(n, i, e), n = i;
        }
        return e.toCoordinateArray();
      } }, { key: "addCollapsedNodes", value: function() {
        var e = new Q();
        this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next().intValue();
          this.add(this._edge.getCoordinate(n), n);
        }
      } }, { key: "createSplitEdgePts", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2;
        if (n === 2) return [new R(e.coord), new R(t.coord)];
        var i = this._edge.getCoordinate(t.segmentIndex), s = t.isInterior() || !t.coord.equals2D(i);
        s || n--;
        var o = new Array(n).fill(null), c = 0;
        o[c++] = new R(e.coord);
        for (var v = e.segmentIndex + 1; v <= t.segmentIndex; v++) o[c++] = this._edge.getCoordinate(v);
        return s && (o[c] = new R(t.coord)), o;
      } }, { key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "findCollapsesFromExistingVertices", value: function(e) {
        for (var t = 0; t < this._edge.size() - 2; t++) {
          var n = this._edge.getCoordinate(t);
          this._edge.getCoordinate(t + 1);
          var i = this._edge.getCoordinate(t + 2);
          n.equals2D(i) && e.add(tn.valueOf(t + 1));
        }
      } }, { key: "addEdgeCoordinates", value: function(e, t, n) {
        var i = this.createSplitEdgePts(e, t);
        n.add(i, !1);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints(), this.addCollapsedNodes();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next(), s = this.createSplitEdge(n, i);
          e.add(s), n = i;
        }
      } }, { key: "findCollapseIndex", value: function(e, t, n) {
        if (!e.coord.equals2D(t.coord)) return !1;
        var i = t.segmentIndex - e.segmentIndex;
        return t.isInterior() || i--, i === 1 && (n[0] = e.segmentIndex + 1, !0);
      } }, { key: "findCollapsesFromInsertedNodes", value: function(e) {
        for (var t = new Array(1).fill(null), n = this.iterator(), i = n.next(); n.hasNext(); ) {
          var s = n.next();
          this.findCollapseIndex(i, s, t) && e.add(tn.valueOf(t[0])), i = s;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var e = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(e), e);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = this.createSplitEdgePts(e, t);
        return new xt(n, this._edge.getData());
      } }, { key: "add", value: function(e, t) {
        var n = new Us(this._edge, e, t, this._edge.getSegmentOctant(t)), i = this._nodeMap.get(n);
        return i !== null ? (ie.isTrue(i.coord.equals2D(e), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(e) {
        var t = this._edge.getCoordinates(), n = e.get(0).getCoordinate(0);
        if (!n.equals2D(t[0])) throw new Ee("bad split edge start point at " + n);
        var i = e.get(e.size() - 1).getCoordinates(), s = i[i.length - 1];
        if (!s.equals2D(t[t.length - 1])) throw new Ee("bad split edge end point at " + s);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Xt(), this._edge = null;
        var e = arguments[0];
        this._edge = e;
      } }]), r;
    }(), Zs = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "octant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new G("Cannot compute the octant for point ( " + e + ", " + t + " )");
          var n = Math.abs(e), i = Math.abs(t);
          return e >= 0 ? t >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : t >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
        }
        if (arguments[0] instanceof R && arguments[1] instanceof R) {
          var s = arguments[0], o = arguments[1], c = o.x - s.x, v = o.y - s.y;
          if (c === 0 && v === 0) throw new G("Cannot compute the octant for two identical points " + s);
          return r.octant(c, v);
        }
      } }]), r;
    }(), Ws = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "getCoordinates", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "getCoordinate", value: function(e) {
      } }, { key: "isClosed", value: function() {
      } }, { key: "setData", value: function(e) {
      } }, { key: "getData", value: function() {
      } }]), r;
    }(), js = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "addIntersection", value: function(e, t) {
      } }, { key: "interfaces_", get: function() {
        return [Ws];
      } }]), r;
    }(), xt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getCoordinates", value: function() {
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
        return e.equals2D(t) ? 0 : Zs.octant(e, t);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.addIntersectionNode(e, t);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1], s = arguments[3], o = new R(n.getIntersection(s));
          this.addIntersection(o, i);
        }
      } }, { key: "toString", value: function() {
        return zn.toLineString(new zt(this._pts));
      } }, { key: "getNodeList", value: function() {
        return this._nodeList;
      } }, { key: "addIntersectionNode", value: function(e, t) {
        var n = t, i = n + 1;
        if (i < this._pts.length) {
          var s = this._pts[i];
          e.equals2D(s) && (n = i);
        }
        return this._nodeList.add(e, n);
      } }, { key: "addIntersections", value: function(e, t, n) {
        for (var i = 0; i < e.getIntersectionNum(); i++) this.addIntersection(e, t, n, i);
      } }, { key: "interfaces_", get: function() {
        return [js];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new Hs(this), this._pts = null, this._data = null;
        var e = arguments[0], t = arguments[1];
        this._pts = e, this._data = t;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Q();
          return r.getNodedSubstrings(e, t), t;
        }
        if (arguments.length === 2) for (var n = arguments[0], i = arguments[1], s = n.iterator(); s.hasNext(); ) {
          var o = s.next();
          o.getNodeList().addSplitEdges(i);
        }
      } }]), r;
    }(), be = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "minX", value: function() {
        return Math.min(this.p0.x, this.p1.x);
      } }, { key: "orientationIndex", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0], t = K.index(this.p0, this.p1, e.p0), n = K.index(this.p0, this.p1, e.p1);
          return t >= 0 && n >= 0 || t <= 0 && n <= 0 ? Math.max(t, n) : 0;
        }
        if (arguments[0] instanceof R) {
          var i = arguments[0];
          return K.index(this.p0, this.p1, i);
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
        var t = new _t();
        return t.computeIntersection(this.p0, this.p1, e.p0, e.p1), t.hasIntersection() ? t.getIntersection(0) : null;
      } }, { key: "project", value: function() {
        if (arguments[0] instanceof R) {
          var e = arguments[0];
          if (e.equals(this.p0) || e.equals(this.p1)) return new R(e);
          var t = this.projectionFactor(e), n = new R();
          return n.x = this.p0.x + t * (this.p1.x - this.p0.x), n.y = this.p0.y + t * (this.p1.y - this.p0.y), n;
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
      } }, { key: "getCoordinate", value: function(e) {
        return e === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(e) {
        return Ze.pointToLinePerpendicular(e, this.p0, this.p1);
      } }, { key: "minY", value: function() {
        return Math.min(this.p0.y, this.p1.y);
      } }, { key: "midPoint", value: function() {
        return r.midPoint(this.p0, this.p1);
      } }, { key: "projectionFactor", value: function(e) {
        if (e.equals(this.p0)) return 0;
        if (e.equals(this.p1)) return 1;
        var t = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = t * t + n * n;
        return i <= 0 ? H.NaN : ((e.x - this.p0.x) * t + (e.y - this.p0.y) * n) / i;
      } }, { key: "closestPoints", value: function(e) {
        var t = this.intersection(e);
        if (t !== null) return [t, t];
        var n = new Array(2).fill(null), i = H.MAX_VALUE, s = null, o = this.closestPoint(e.p0);
        i = o.distance(e.p0), n[0] = o, n[1] = e.p0;
        var c = this.closestPoint(e.p1);
        (s = c.distance(e.p1)) < i && (i = s, n[0] = c, n[1] = e.p1);
        var v = e.closestPoint(this.p0);
        (s = v.distance(this.p0)) < i && (i = s, n[0] = this.p0, n[1] = v);
        var y = e.closestPoint(this.p1);
        return (s = y.distance(this.p1)) < i && (i = s, n[0] = this.p1, n[1] = y), n;
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
        return Mn.intersection(this.p0, this.p1, e.p0, e.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(e, t) {
        var n = this.p0.x + e * (this.p1.x - this.p0.x), i = this.p0.y + e * (this.p1.y - this.p0.y), s = this.p1.x - this.p0.x, o = this.p1.y - this.p0.y, c = Math.sqrt(s * s + o * o), v = 0, y = 0;
        if (t !== 0) {
          if (c <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          v = t * s / c, y = t * o / c;
        }
        return new R(n - y, i + v);
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
        return t < 0 ? t = 0 : (t > 1 || H.isNaN(t)) && (t = 1), t;
      } }, { key: "toString", value: function() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      } }, { key: "isHorizontal", value: function() {
        return this.p0.y === this.p1.y;
      } }, { key: "reflect", value: function(e) {
        var t = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), s = t * t + n * n, o = t * t - n * n, c = e.getX(), v = e.getY();
        return new R((-o * c - 2 * t * n * v - 2 * t * i) / s, (o * v - 2 * t * n * c - 2 * n * i) / s);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof r) {
          var e = arguments[0];
          return Ze.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
        }
        if (arguments[0] instanceof R) {
          var t = arguments[0];
          return Ze.pointToSegment(t, this.p0, this.p1);
        }
      } }, { key: "pointAlong", value: function(e) {
        var t = new R();
        return t.x = this.p0.x + e * (this.p1.x - this.p0.x), t.y = this.p0.y + e * (this.p1.y - this.p0.y), t;
      } }, { key: "hashCode", value: function() {
        var e = H.doubleToLongBits(this.p0.x);
        e ^= 31 * H.doubleToLongBits(this.p0.y);
        var t = Math.trunc(e) ^ Math.trunc(e >> 32), n = H.doubleToLongBits(this.p1.x);
        return n ^= 31 * H.doubleToLongBits(this.p1.y), t ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      } }, { key: "interfaces_", get: function() {
        return [X, U];
      } }], [{ key: "constructor_", value: function() {
        if (this.p0 = null, this.p1 = null, arguments.length === 0) r.constructor_.call(this, new R(), new R());
        else if (arguments.length === 1) {
          var e = arguments[0];
          r.constructor_.call(this, e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0 = t, this.p1 = n;
        } else if (arguments.length === 4) {
          var i = arguments[0], s = arguments[1], o = arguments[2], c = arguments[3];
          r.constructor_.call(this, new R(i, s), new R(o, c));
        }
      } }, { key: "midPoint", value: function(e, t) {
        return new R((e.x + t.x) / 2, (e.y + t.y) / 2);
      } }]), r;
    }(), Qs = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "overlap", value: function() {
        if (arguments.length !== 2) {
          if (arguments.length === 4) {
            var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
            e.getLineSegment(t, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this._overlapSeg1 = new be(), this._overlapSeg2 = new be();
      } }]), r;
    }(), zi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getLineSegment", value: function(e, t) {
        t.p0 = this._pts[e], t.p1 = this._pts[e + 1];
      } }, { key: "computeSelect", value: function(e, t, n, i) {
        var s = this._pts[t], o = this._pts[n];
        if (n - t == 1) return i.select(this, t), null;
        if (!e.intersects(s, o)) return null;
        var c = Math.trunc((t + n) / 2);
        t < c && this.computeSelect(e, t, c, i), c < n && this.computeSelect(e, c, n, i);
      } }, { key: "getCoordinates", value: function() {
        for (var e = new Array(this._end - this._start + 1).fill(null), t = 0, n = this._start; n <= this._end; n++) e[t++] = this._pts[n];
        return e;
      } }, { key: "computeOverlaps", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.computeOverlaps(this._start, this._end, e, e._start, e._end, t);
        } else if (arguments.length === 6) {
          var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], c = arguments[4], v = arguments[5];
          if (i - n == 1 && c - o == 1) return v.overlap(this, n, s, o), null;
          if (!this.overlaps(n, i, s, o, c)) return null;
          var y = Math.trunc((n + i) / 2), x = Math.trunc((o + c) / 2);
          n < y && (o < x && this.computeOverlaps(n, y, s, o, x, v), x < c && this.computeOverlaps(n, y, s, x, c, v)), y < i && (o < x && this.computeOverlaps(y, i, s, o, x, v), x < c && this.computeOverlaps(y, i, s, x, c, v));
        }
      } }, { key: "setId", value: function(e) {
        this._id = e;
      } }, { key: "select", value: function(e, t) {
        this.computeSelect(e, this._start, this._end, t);
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          var e = this._pts[this._start], t = this._pts[this._end];
          this._env = new ve(e, t);
        }
        return this._env;
      } }, { key: "overlaps", value: function(e, t, n, i, s) {
        return ve.intersects(this._pts[e], this._pts[t], n._pts[i], n._pts[s]);
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
    }(), Js = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "findChainEnd", value: function(e, t) {
        for (var n = t; n < e.length - 1 && e[n].equals2D(e[n + 1]); ) n++;
        if (n >= e.length - 1) return e.length - 1;
        for (var i = Le.quadrant(e[n], e[n + 1]), s = t + 1; s < e.length && !(!e[s - 1].equals2D(e[s]) && Le.quadrant(e[s - 1], e[s]) !== i); )
          s++;
        return s - 1;
      } }, { key: "getChains", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return r.getChains(e, null);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], i = new Q(), s = 0;
          do {
            var o = r.findChainEnd(t, s), c = new zi(t, s, o, n);
            i.add(c), s = o;
          } while (s < t.length - 1);
          return i;
        }
      } }]), r;
    }(), Vn = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "computeNodes", value: function(e) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), r;
    }(), Bi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "setSegmentIntersector", value: function(e) {
        this._segInt = e;
      } }, { key: "interfaces_", get: function() {
        return [Vn];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setSegmentIntersector(e);
          }
        }
      } }]), r;
    }(), Hn = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return xt.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var i = Js.getChains(n.getCoordinates(), n).iterator(); i.hasNext(); ) {
          var s = i.next();
          s.setId(this._idCounter++), this._index.insert(s.getEnvelope(), s), this._monoChains.add(s);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var i = n.iterator(); i.hasNext(); ) this.add(i.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new Xi(this._segInt), i = this._monoChains.iterator(); i.hasNext(); ) for (var s = i.next(), o = this._index.query(s.getEnvelope()).iterator(); o.hasNext(); ) {
          var c = o.next();
          if (c.getId() > s.getId() && (s.computeOverlaps(c, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new Q(), this._index = new je(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            Bi.constructor_.call(this, n);
          }
        }
      } }]), t;
    }(Bi), Xi = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return S(d(t.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], c = n.getContext(), v = s.getContext();
        this._si.processIntersections(c, i, v, o);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), t;
    }(Qs);
    Hn.SegmentOverlapAction = Xi;
    var Xe = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "isDeletable", value: function(e, t, n, i) {
        var s = this._inputLine[e], o = this._inputLine[t], c = this._inputLine[n];
        return !!this.isConcave(s, o, c) && !!this.isShallow(s, o, c, i) && this.isShallowSampled(s, o, e, n, i);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var e = 1, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t), i = !1; n < this._inputLine.length; ) {
          var s = !1;
          this.isDeletable(e, t, n, this._distanceTol) && (this._isDeleted[t] = r.DELETE, s = !0, i = !0), e = s ? n : t, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t);
        }
        return i;
      } }, { key: "isShallowConcavity", value: function(e, t, n, i) {
        return K.index(e, t, n) === this._angleOrientation && Ze.pointToSegment(t, e, n) < i;
      } }, { key: "isShallowSampled", value: function(e, t, n, i, s) {
        var o = Math.trunc((i - n) / r.NUM_PTS_TO_CHECK);
        o <= 0 && (o = 1);
        for (var c = n; c < i; c += o) if (!this.isShallow(e, t, this._inputLine[c], s)) return !1;
        return !0;
      } }, { key: "isConcave", value: function(e, t, n) {
        var i = K.index(e, t, n) === this._angleOrientation;
        return i;
      } }, { key: "simplify", value: function(e) {
        this._distanceTol = Math.abs(e), e < 0 && (this._angleOrientation = K.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var t = !1;
        do
          t = this.deleteShallowConcavities();
        while (t);
        return this.collapseLine();
      } }, { key: "findNextNonDeletedIndex", value: function(e) {
        for (var t = e + 1; t < this._inputLine.length && this._isDeleted[t] === r.DELETE; ) t++;
        return t;
      } }, { key: "isShallow", value: function(e, t, n, i) {
        return Ze.pointToSegment(t, e, n) < i;
      } }, { key: "collapseLine", value: function() {
        for (var e = new Yt(), t = 0; t < this._inputLine.length; t++) this._isDeleted[t] !== r.DELETE && e.add(this._inputLine[t]);
        return e.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = K.COUNTERCLOCKWISE;
        var e = arguments[0];
        this._inputLine = e;
      } }, { key: "simplify", value: function(e, t) {
        return new r(e).simplify(t);
      } }]), r;
    }();
    Xe.INIT = 0, Xe.DELETE = 1, Xe.KEEP = 1, Xe.NUM_PTS_TO_CHECK = 10;
    var Ui = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getCoordinates", value: function() {
        return this._ptList.toArray(r.COORDINATE_ARRAY_TYPE);
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "addPt", value: function(e) {
        var t = new R(e);
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
        return new Nt().createLineString(this.getCoordinates()).toString();
      } }, { key: "closeRing", value: function() {
        if (this._ptList.size() < 1) return null;
        var e = new R(this._ptList.get(0)), t = this._ptList.get(this._ptList.size() - 1);
        if (e.equals(t)) return null;
        this._ptList.add(e);
      } }, { key: "setMinimumVertexDistance", value: function(e) {
        this._minimimVertexDistance = e;
      } }], [{ key: "constructor_", value: function() {
        this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new Q();
      } }]), r;
    }();
    Ui.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var Me = function() {
      function r() {
        a(this, r);
      }
      return l(r, null, [{ key: "toDegrees", value: function(e) {
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
          var t = arguments[0], n = arguments[1], i = n.x - t.x, s = n.y - t.y;
          return Math.atan2(s, i);
        }
      } }, { key: "isAcute", value: function(e, t, n) {
        var i = e.x - t.x, s = e.y - t.y;
        return i * (n.x - t.x) + s * (n.y - t.y) > 0;
      } }, { key: "isObtuse", value: function(e, t, n) {
        var i = e.x - t.x, s = e.y - t.y;
        return i * (n.x - t.x) + s * (n.y - t.y) < 0;
      } }, { key: "interiorAngle", value: function(e, t, n) {
        var i = r.angle(t, e), s = r.angle(t, n);
        return Math.abs(s - i);
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
        var i = r.angle(t, e), s = r.angle(t, n);
        return r.diff(i, s);
      } }, { key: "diff", value: function(e, t) {
        var n = null;
        return (n = e < t ? t - e : e - t) > Math.PI && (n = 2 * Math.PI - n), n;
      } }, { key: "toRadians", value: function(e) {
        return e * Math.PI / 180;
      } }, { key: "getTurn", value: function(e, t) {
        var n = Math.sin(t - e);
        return n > 0 ? r.COUNTERCLOCKWISE : n < 0 ? r.CLOCKWISE : r.NONE;
      } }, { key: "angleBetweenOriented", value: function(e, t, n) {
        var i = r.angle(t, e), s = r.angle(t, n) - i;
        return s <= -Math.PI ? s + r.PI_TIMES_2 : s > Math.PI ? s - r.PI_TIMES_2 : s;
      } }]), r;
    }();
    Me.PI_TIMES_2 = 2 * Math.PI, Me.PI_OVER_2 = Math.PI / 2, Me.PI_OVER_4 = Math.PI / 4, Me.COUNTERCLOCKWISE = K.COUNTERCLOCKWISE, Me.CLOCKWISE = K.CLOCKWISE, Me.NONE = K.COLLINEAR;
    var Ut = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "addNextSegment", value: function(e, t) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = e, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = K.index(this._s0, this._s1, this._s2), i = n === K.CLOCKWISE && this._side === F.LEFT || n === K.COUNTERCLOCKWISE && this._side === F.RIGHT;
        n === 0 ? this.addCollinear(t) : i ? this.addOutsideTurn(n, t) : this.addInsideTurn(n, t);
      } }, { key: "addLineEndCap", value: function(e, t) {
        var n = new be(e, t), i = new be();
        this.computeOffsetSegment(n, F.LEFT, this._distance, i);
        var s = new be();
        this.computeOffsetSegment(n, F.RIGHT, this._distance, s);
        var o = t.x - e.x, c = t.y - e.y, v = Math.atan2(c, o);
        switch (this._bufParams.getEndCapStyle()) {
          case O.CAP_ROUND:
            this._segList.addPt(i.p1), this.addDirectedFillet(t, v + Math.PI / 2, v - Math.PI / 2, K.CLOCKWISE, this._distance), this._segList.addPt(s.p1);
            break;
          case O.CAP_FLAT:
            this._segList.addPt(i.p1), this._segList.addPt(s.p1);
            break;
          case O.CAP_SQUARE:
            var y = new R();
            y.x = Math.abs(this._distance) * Math.cos(v), y.y = Math.abs(this._distance) * Math.sin(v);
            var x = new R(i.p1.x + y.x, i.p1.y + y.y), w = new R(s.p1.x + y.x, s.p1.y + y.y);
            this._segList.addPt(x), this._segList.addPt(w);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(e, t, n, i) {
        var s = Mn.intersection(t.p0, t.p1, n.p0, n.p1);
        if (s !== null && (i <= 0 ? 1 : s.distance(e) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(s), null;
        this.addLimitedMitreJoin(t, n, i, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(e, t) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * r.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === O.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === O.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (t && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(e) {
        this._segList.addPt(new R(e.x + this._distance, e.y + this._distance)), this._segList.addPt(new R(e.x + this._distance, e.y - this._distance)), this._segList.addPt(new R(e.x - this._distance, e.y - this._distance)), this._segList.addPt(new R(e.x - this._distance, e.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(e, t) {
        this._segList.addPts(e, t);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(e, t, n, i, s) {
        var o = t.x - e.x, c = t.y - e.y, v = Math.atan2(c, o), y = n.x - e.x, x = n.y - e.y, w = Math.atan2(x, y);
        i === K.CLOCKWISE ? v <= w && (v += 2 * Math.PI) : v >= w && (v -= 2 * Math.PI), this._segList.addPt(t), this.addDirectedFillet(e, v, w, i, s), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(e, t, n) {
        this._s1 = e, this._s2 = t, this._side = n, this._seg1.setCoordinates(e, t), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(e, t, n, i) {
        var s = this._seg0.p1, o = Me.angle(s, this._seg0.p0), c = Me.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1) / 2, v = Me.normalize(o + c), y = Me.normalize(v + Math.PI), x = i * n, w = n - x * Math.abs(Math.sin(c)), C = s.x + x * Math.cos(y), D = s.y + x * Math.sin(y), A = new R(C, D), Z = new be(s, A), j = Z.pointAlongOffset(1, w), $ = Z.pointAlongOffset(1, -w);
        this._side === F.LEFT ? (this._segList.addPt(j), this._segList.addPt($)) : (this._segList.addPt($), this._segList.addPt(j));
      } }, { key: "addDirectedFillet", value: function(e, t, n, i, s) {
        var o = i === K.CLOCKWISE ? -1 : 1, c = Math.abs(t - n), v = Math.trunc(c / this._filletAngleQuantum + 0.5);
        if (v < 1) return null;
        for (var y = c / v, x = new R(), w = 0; w < v; w++) {
          var C = t + o * w * y;
          x.x = e.x + s * Math.cos(C), x.y = e.y + s * Math.sin(C), this._segList.addPt(x);
        }
      } }, { key: "computeOffsetSegment", value: function(e, t, n, i) {
        var s = t === F.LEFT ? 1 : -1, o = e.p1.x - e.p0.x, c = e.p1.y - e.p0.y, v = Math.sqrt(o * o + c * c), y = s * n * o / v, x = s * n * c / v;
        i.p0.x = e.p0.x - x, i.p0.y = e.p0.y + y, i.p1.x = e.p1.x - x, i.p1.y = e.p1.y + y;
      } }, { key: "addInsideTurn", value: function(e, t) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
        else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * r.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
        else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var n = new R((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(n);
            var i = new R((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(i);
          } else this._segList.addPt(this._s1);
          this._segList.addPt(this._offset1.p0);
        }
      } }, { key: "createCircle", value: function(e) {
        var t = new R(e.x + this._distance, e.y);
        this._segList.addPt(t), this.addDirectedFillet(e, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      } }, { key: "addBevelJoin", value: function(e, t) {
        this._segList.addPt(e.p1), this._segList.addPt(t.p0);
      } }, { key: "init", value: function(e) {
        this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ui(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * r.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(e) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === O.JOIN_BEVEL || this._bufParams.getJoinStyle() === O.JOIN_MITRE ? (e && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, K.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new be(), this._seg1 = new be(), this._offset0 = new be(), this._offset1 = new be(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._precisionModel = e, this._bufParams = t, this._li = new _t(), this._filletAngleQuantum = Math.PI / 2 / t.getQuadrantSegments(), t.getQuadrantSegments() >= 8 && t.getJoinStyle() === O.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), r;
    }();
    Ut.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, Ut.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, Ut.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Ut.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var Ks = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getOffsetCurve", value: function(e, t) {
        if (this._distance = t, t === 0) return null;
        var n = t < 0, i = Math.abs(t), s = this.getSegGen(i);
        e.length <= 1 ? this.computePointCurve(e[0], s) : this.computeOffsetCurve(e, n, s);
        var o = s.getCoordinates();
        return n && _e.reverse(o), o;
      } }, { key: "computeSingleSidedBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          n.addSegments(e, !0);
          var s = Xe.simplify(e, -i), o = s.length - 1;
          n.initSideSegments(s[o], s[o - 1], F.LEFT), n.addFirstSegment();
          for (var c = o - 2; c >= 0; c--) n.addNextSegment(s[c], !0);
        } else {
          n.addSegments(e, !1);
          var v = Xe.simplify(e, i), y = v.length - 1;
          n.initSideSegments(v[0], v[1], F.LEFT), n.addFirstSegment();
          for (var x = 2; x <= y; x++) n.addNextSegment(v[x], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        t === F.RIGHT && (i = -i);
        var s = Xe.simplify(e, i), o = s.length - 1;
        n.initSideSegments(s[o - 1], s[0], t);
        for (var c = 1; c <= o; c++) {
          var v = c !== 1;
          n.addNextSegment(s[c], v);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(e, t) {
        var n = this.simplifyTolerance(this._distance), i = Xe.simplify(e, n), s = i.length - 1;
        t.initSideSegments(i[0], i[1], F.LEFT);
        for (var o = 2; o <= s; o++) t.addNextSegment(i[o], !0);
        t.addLastSegment(), t.addLineEndCap(i[s - 1], i[s]);
        var c = Xe.simplify(e, -n), v = c.length - 1;
        t.initSideSegments(c[v], c[v - 1], F.LEFT);
        for (var y = v - 2; y >= 0; y--) t.addNextSegment(c[y], !0);
        t.addLastSegment(), t.addLineEndCap(c[1], c[0]), t.closeRing();
      } }, { key: "computePointCurve", value: function(e, t) {
        switch (this._bufParams.getEndCapStyle()) {
          case O.CAP_ROUND:
            t.createCircle(e);
            break;
          case O.CAP_SQUARE:
            t.createSquare(e);
        }
      } }, { key: "getLineCurve", value: function(e, t) {
        if (this._distance = t, this.isLineOffsetEmpty(t)) return null;
        var n = Math.abs(t), i = this.getSegGen(n);
        if (e.length <= 1) this.computePointCurve(e[0], i);
        else if (this._bufParams.isSingleSided()) {
          var s = t < 0;
          this.computeSingleSidedBufferCurve(e, s, i);
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
          var s = Xe.simplify(e, -i), o = s.length - 1;
          n.initSideSegments(s[o], s[o - 1], F.LEFT), n.addFirstSegment();
          for (var c = o - 2; c >= 0; c--) n.addNextSegment(s[c], !0);
        } else {
          var v = Xe.simplify(e, i), y = v.length - 1;
          n.initSideSegments(v[0], v[1], F.LEFT), n.addFirstSegment();
          for (var x = 2; x <= y; x++) n.addNextSegment(v[x], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(e) {
        return e === 0 || e < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(e) {
        return new Ut(this._precisionModel, this._bufParams, e);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var e = arguments[0], t = arguments[1];
        this._precisionModel = e, this._bufParams = t;
      } }, { key: "copyCoordinates", value: function(e) {
        for (var t = new Array(e.length).fill(null), n = 0; n < t.length; n++) t[n] = new R(e[n]);
        return t;
      } }]), r;
    }(), Vi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "findStabbedSegments", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Q(), n = this._subgraphs.iterator(); n.hasNext(); ) {
            var i = n.next(), s = i.getEnvelope();
            e.y < s.getMinY() || e.y > s.getMaxY() || this.findStabbedSegments(e, i.getDirectedEdges(), t);
          }
          return t;
        }
        if (arguments.length === 3) {
          if (ee(arguments[2], vt) && arguments[0] instanceof R && arguments[1] instanceof Un) for (var o = arguments[0], c = arguments[1], v = arguments[2], y = c.getEdge().getCoordinates(), x = 0; x < y.length - 1; x++) {
            this._seg.p0 = y[x], this._seg.p1 = y[x + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var w = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(w < o.x) && !(this._seg.isHorizontal() || o.y < this._seg.p0.y || o.y > this._seg.p1.y || K.index(this._seg.p0, this._seg.p1, o) === K.RIGHT)) {
              var C = c.getDepth(F.LEFT);
              this._seg.p0.equals(y[x]) || (C = c.getDepth(F.RIGHT));
              var D = new Hi(this._seg, C);
              v.add(D);
            }
          }
          else if (ee(arguments[2], vt) && arguments[0] instanceof R && ee(arguments[1], vt)) for (var A = arguments[0], Z = arguments[1], j = arguments[2], $ = Z.iterator(); $.hasNext(); ) {
            var ce = $.next();
            ce.isForward() && this.findStabbedSegments(A, ce, j);
          }
        }
      } }, { key: "getDepth", value: function(e) {
        var t = this.findStabbedSegments(e);
        return t.size() === 0 ? 0 : wt.min(t)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new be();
        var e = arguments[0];
        this._subgraphs = e;
      } }]), r;
    }(), Hi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "compareTo", value: function(e) {
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
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._upwardSeg = null, this._leftDepth = null;
        var e = arguments[0], t = arguments[1];
        this._upwardSeg = new be(e), this._leftDepth = t;
      } }]), r;
    }();
    Vi.DepthSegment = Hi;
    var Zi = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, null, [{ key: "constructor_", value: function() {
        Y.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), t;
    }(Y), Zn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getY", value: function() {
        var e = this.y / this.w;
        if (H.isNaN(e) || H.isInfinite(e)) throw new Zi();
        return e;
      } }, { key: "getX", value: function() {
        var e = this.x / this.w;
        if (H.isNaN(e) || H.isInfinite(e)) throw new Zi();
        return e;
      } }, { key: "getCoordinate", value: function() {
        var e = new R();
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
            var i = arguments[0], s = arguments[1];
            this.x = i.y * s.w - s.y * i.w, this.y = s.x * i.w - i.x * s.w, this.w = i.x * s.y - s.x * i.y;
          } else if (arguments[0] instanceof R && arguments[1] instanceof R) {
            var o = arguments[0], c = arguments[1];
            this.x = o.y - c.y, this.y = c.x - o.x, this.w = o.x * c.y - c.x * o.y;
          }
        } else if (arguments.length === 3) {
          var v = arguments[0], y = arguments[1], x = arguments[2];
          this.x = v, this.y = y, this.w = x;
        } else if (arguments.length === 4) {
          var w = arguments[0], C = arguments[1], D = arguments[2], A = arguments[3], Z = w.y - C.y, j = C.x - w.x, $ = w.x * C.y - C.x * w.y, ce = D.y - A.y, me = A.x - D.x, Ne = D.x * A.y - A.x * D.y;
          this.x = j * Ne - me * $, this.y = ce * $ - Z * Ne, this.w = Z * me - ce * j;
        }
      } }]), r;
    }(), $s = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "area", value: function() {
        return r.area(this.p0, this.p1, this.p2);
      } }, { key: "signedArea", value: function() {
        return r.signedArea(this.p0, this.p1, this.p2);
      } }, { key: "interpolateZ", value: function(e) {
        if (e === null) throw new G("Supplied point is null.");
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
        var s = t.x, o = t.y, c = n.x - s, v = i.x - s, y = n.y - o, x = i.y - o, w = c * x - v * y, C = e.x - s, D = e.y - o, A = (x * C - v * D) / w, Z = (-y * C + c * D) / w;
        return t.getZ() + A * (n.getZ() - t.getZ()) + Z * (i.getZ() - t.getZ());
      } }, { key: "longestSideLength", value: function(e, t, n) {
        var i = e.distance(t), s = t.distance(n), o = n.distance(e), c = i;
        return s > c && (c = s), o > c && (c = o), c;
      } }, { key: "circumcentreDD", value: function(e, t, n) {
        var i = J.valueOf(e.x).subtract(n.x), s = J.valueOf(e.y).subtract(n.y), o = J.valueOf(t.x).subtract(n.x), c = J.valueOf(t.y).subtract(n.y), v = J.determinant(i, s, o, c).multiply(2), y = i.sqr().add(s.sqr()), x = o.sqr().add(c.sqr()), w = J.determinant(s, y, c, x), C = J.determinant(i, y, o, x), D = J.valueOf(n.x).subtract(w.divide(v)).doubleValue(), A = J.valueOf(n.y).add(C.divide(v)).doubleValue();
        return new R(D, A);
      } }, { key: "isAcute", value: function(e, t, n) {
        return !!Me.isAcute(e, t, n) && !!Me.isAcute(t, n, e) && !!Me.isAcute(n, e, t);
      } }, { key: "circumcentre", value: function(e, t, n) {
        var i = n.x, s = n.y, o = e.x - i, c = e.y - s, v = t.x - i, y = t.y - s, x = 2 * r.det(o, c, v, y), w = r.det(c, o * o + c * c, y, v * v + y * y), C = r.det(o, o * o + c * c, v, v * v + y * y);
        return new R(i - w / x, s + C / x);
      } }, { key: "perpendicularBisector", value: function(e, t) {
        var n = t.x - e.x, i = t.y - e.y, s = new Zn(e.x + n / 2, e.y + i / 2, 1), o = new Zn(e.x - i + n / 2, e.y + n + i / 2, 1);
        return new Zn(s, o);
      } }, { key: "angleBisector", value: function(e, t, n) {
        var i = t.distance(e), s = i / (i + t.distance(n)), o = n.x - e.x, c = n.y - e.y;
        return new R(e.x + s * o, e.y + s * c);
      } }, { key: "area3D", value: function(e, t, n) {
        var i = t.x - e.x, s = t.y - e.y, o = t.getZ() - e.getZ(), c = n.x - e.x, v = n.y - e.y, y = n.getZ() - e.getZ(), x = s * y - o * v, w = o * c - i * y, C = i * v - s * c, D = x * x + w * w + C * C, A = Math.sqrt(D) / 2;
        return A;
      } }, { key: "centroid", value: function(e, t, n) {
        var i = (e.x + t.x + n.x) / 3, s = (e.y + t.y + n.y) / 3;
        return new R(i, s);
      } }, { key: "inCentre", value: function(e, t, n) {
        var i = t.distance(n), s = e.distance(n), o = e.distance(t), c = i + s + o, v = (i * e.x + s * t.x + o * n.x) / c, y = (i * e.y + s * t.y + o * n.y) / c;
        return new R(v, y);
      } }]), r;
    }(), ea = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "addRingSide", value: function(e, t, n, i, s) {
        if (t === 0 && e.length < qt.MINIMUM_VALID_SIZE) return null;
        var o = i, c = s;
        e.length >= qt.MINIMUM_VALID_SIZE && K.isCCW(e) && (o = s, c = i, n = F.opposite(n));
        var v = this._curveBuilder.getRingCurve(e, n, t);
        this.addCurve(v, o, c);
      } }, { key: "addRingBothSides", value: function(e, t) {
        this.addRingSide(e, t, F.LEFT, _.EXTERIOR, _.INTERIOR), this.addRingSide(e, t, F.RIGHT, _.INTERIOR, _.EXTERIOR);
      } }, { key: "addPoint", value: function(e) {
        if (this._distance <= 0) return null;
        var t = e.getCoordinates(), n = this._curveBuilder.getLineCurve(t, this._distance);
        this.addCurve(n, _.EXTERIOR, _.INTERIOR);
      } }, { key: "addPolygon", value: function(e) {
        var t = this._distance, n = F.LEFT;
        this._distance < 0 && (t = -this._distance, n = F.RIGHT);
        var i = e.getExteriorRing(), s = _e.removeRepeatedPoints(i.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(i, this._distance) || this._distance <= 0 && s.length < 3) return null;
        this.addRingSide(s, t, n, _.EXTERIOR, _.INTERIOR);
        for (var o = 0; o < e.getNumInteriorRing(); o++) {
          var c = e.getInteriorRingN(o), v = _e.removeRepeatedPoints(c.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(c, -this._distance) || this.addRingSide(v, t, F.opposite(n), _.INTERIOR, _.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(e, t) {
        var n = new $s(e[0], e[1], e[2]), i = n.inCentre();
        return Ze.pointToSegment(i, n.p0, n.p1) < Math.abs(t);
      } }, { key: "addLineString", value: function(e) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var t = _e.removeRepeatedPoints(e.getCoordinates());
        if (_e.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(n, _.EXTERIOR, _.INTERIOR);
        }
      } }, { key: "addCurve", value: function(e, t, n) {
        if (e === null || e.length < 2) return null;
        var i = new xt(e, new Fe(0, _.BOUNDARY, t, n));
        this._curveList.add(i);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(e) {
        if (e.isEmpty()) return null;
        if (e instanceof an) this.addPolygon(e);
        else if (e instanceof Gt) this.addLineString(e);
        else if (e instanceof Pn) this.addPoint(e);
        else if (e instanceof An) this.addCollection(e);
        else if (e instanceof qn) this.addCollection(e);
        else if (e instanceof Gn) this.addCollection(e);
        else {
          if (!(e instanceof Oe)) throw new at(e.getGeometryType());
          this.addCollection(e);
        }
      } }, { key: "isErodedCompletely", value: function(e, t) {
        var n = e.getCoordinates();
        if (n.length < 4) return t < 0;
        if (n.length === 4) return this.isTriangleErodedCompletely(n, t);
        var i = e.getEnvelopeInternal(), s = Math.min(i.getHeight(), i.getWidth());
        return t < 0 && 2 * Math.abs(t) > s;
      } }, { key: "addCollection", value: function(e) {
        for (var t = 0; t < e.getNumGeometries(); t++) {
          var n = e.getGeometryN(t);
          this.add(n);
        }
      } }], [{ key: "constructor_", value: function() {
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new Q();
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._inputGeom = e, this._distance = t, this._curveBuilder = n;
      } }]), r;
    }(), ta = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "locate", value: function(e) {
      } }]), r;
    }(), na = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, r.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new en();
        var e = this._parent.getGeometryN(this._index++);
        return e instanceof Oe ? (this._subcollectionIterator = new r(e), this._subcollectionIterator.next()) : e;
      } }, { key: "remove", value: function() {
        throw new at(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [Vs];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var e = arguments[0];
        this._parent = e, this._atStart = !0, this._index = 0, this._max = e.getNumGeometries();
      } }, { key: "isAtomic", value: function(e) {
        return !(e instanceof Oe);
      } }]), r;
    }(), ia = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "locate", value: function(e) {
        return r.locate(e, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [ta];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var e = arguments[0];
        this._geom = e;
      } }, { key: "locatePointInPolygon", value: function(e, t) {
        if (t.isEmpty()) return _.EXTERIOR;
        var n = t.getExteriorRing(), i = r.locatePointInRing(e, n);
        if (i !== _.INTERIOR) return i;
        for (var s = 0; s < t.getNumInteriorRing(); s++) {
          var o = t.getInteriorRingN(s), c = r.locatePointInRing(e, o);
          if (c === _.BOUNDARY) return _.BOUNDARY;
          if (c === _.INTERIOR) return _.EXTERIOR;
        }
        return _.INTERIOR;
      } }, { key: "locatePointInRing", value: function(e, t) {
        return t.getEnvelopeInternal().intersects(e) ? Bn.locateInRing(e, t.getCoordinates()) : _.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(e, t) {
        return _.EXTERIOR !== r.locatePointInPolygon(e, t);
      } }, { key: "locateInGeometry", value: function(e, t) {
        if (t instanceof an) return r.locatePointInPolygon(e, t);
        if (t instanceof Oe) for (var n = new na(t); n.hasNext(); ) {
          var i = n.next();
          if (i !== t) {
            var s = r.locateInGeometry(e, i);
            if (s !== _.EXTERIOR) return s;
          }
        }
        return _.EXTERIOR;
      } }, { key: "isContained", value: function(e, t) {
        return _.EXTERIOR !== r.locate(e, t);
      } }, { key: "locate", value: function(e, t) {
        return t.isEmpty() ? _.EXTERIOR : t.getEnvelopeInternal().intersects(e) ? r.locateInGeometry(e, t) : _.EXTERIOR;
      } }]), r;
    }(), ra = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getNextCW", value: function(e) {
        this.getEdges();
        var t = this._edgeList.indexOf(e), n = t - 1;
        return t === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(e) {
        for (var t = _.NONE, n = this.iterator(); n.hasNext(); ) {
          var i = n.next().getLabel();
          i.isArea(e) && i.getLocation(e, F.LEFT) !== _.NONE && (t = i.getLocation(e, F.LEFT));
        }
        if (t === _.NONE) return null;
        for (var s = t, o = this.iterator(); o.hasNext(); ) {
          var c = o.next(), v = c.getLabel();
          if (v.getLocation(e, F.ON) === _.NONE && v.setLocation(e, F.ON, s), v.isArea(e)) {
            var y = v.getLocation(e, F.LEFT), x = v.getLocation(e, F.RIGHT);
            if (x !== _.NONE) {
              if (x !== s) throw new et("side location conflict", c.getCoordinate());
              y === _.NONE && ie.shouldNeverReachHere("found single null side (at " + c.getCoordinate() + ")"), s = y;
            } else ie.isTrue(v.getLocation(e, F.LEFT) === _.NONE, "found single null side"), v.setLocation(e, F.RIGHT, s), v.setLocation(e, F.LEFT, s);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var e = this.iterator();
        return e.hasNext() ? e.next().getCoordinate() : null;
      } }, { key: "print", value: function(e) {
        Ae.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "isAreaLabelsConsistent", value: function(e) {
        return this.computeEdgeEndLabels(e.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(e) {
        var t = this.getEdges();
        if (t.size() <= 0) return !0;
        var n = t.size() - 1, i = t.get(n).getLabel().getLocation(e, F.LEFT);
        ie.isTrue(i !== _.NONE, "Found unlabelled area edge");
        for (var s = i, o = this.iterator(); o.hasNext(); ) {
          var c = o.next().getLabel();
          ie.isTrue(c.isArea(e), "Found non-area edge");
          var v = c.getLocation(e, F.LEFT), y = c.getLocation(e, F.RIGHT);
          if (v === y || y !== s) return !1;
          s = v;
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
        return this._edgeList === null && (this._edgeList = new Q(this._edgeMap.values())), this._edgeList;
      } }, { key: "getLocation", value: function(e, t, n) {
        return this._ptInAreaLocation[e] === _.NONE && (this._ptInAreaLocation[e] = ia.locate(t, n[e].getGeometry())), this._ptInAreaLocation[e];
      } }, { key: "toString", value: function() {
        var e = new Dt();
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
        for (var t = [!1, !1], n = this.iterator(); n.hasNext(); ) for (var i = n.next().getLabel(), s = 0; s < 2; s++) i.isLine(s) && i.getLocation(s) === _.BOUNDARY && (t[s] = !0);
        for (var o = this.iterator(); o.hasNext(); ) for (var c = o.next(), v = c.getLabel(), y = 0; y < 2; y++) if (v.isAnyNull(y)) {
          var x = _.NONE;
          if (t[y]) x = _.EXTERIOR;
          else {
            var w = c.getCoordinate();
            x = this.getLocation(y, w, e);
          }
          v.setAllLocationsIfNull(y, x);
        }
      } }, { key: "getDegree", value: function() {
        return this._edgeMap.size();
      } }, { key: "insertEdgeEnd", value: function(e, t) {
        this._edgeMap.put(e, t), this._edgeList = null;
      } }], [{ key: "constructor_", value: function() {
        this._edgeMap = new Xt(), this._edgeList = null, this._ptInAreaLocation = [_.NONE, _.NONE];
      } }]), r;
    }(), sa = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "linkResultDirectedEdges", value: function() {
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
          if (n === null) throw new et("no outgoing dirEdge found", this.getCoordinate());
          ie.isTrue(n.isInResult(), "unable to link last incoming dirEdge"), i.setNext(n);
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
        return Le.isNorthern(c) && Le.isNorthern(v) ? s : Le.isNorthern(c) || Le.isNorthern(v) ? s.getDy() !== 0 ? s : o.getDy() !== 0 ? o : (ie.shouldNeverReachHere("found two horizontal edges incident on node"), null) : o;
      } }, { key: "print", value: function(n) {
        Ae.out.println("DirectedEdgeStar: " + this.getCoordinate());
        for (var i = this.iterator(); i.hasNext(); ) {
          var s = i.next();
          n.print("out "), s.print(n), n.println(), n.print("in "), s.getSym().print(n), n.println();
        }
      } }, { key: "getResultAreaEdges", value: function() {
        if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new Q();
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
          var n = arguments[0], i = this.findIndex(n), s = n.getDepth(F.LEFT), o = n.getDepth(F.RIGHT), c = this.computeDepths(i + 1, this._edgeList.size(), s), v = this.computeDepths(0, i, c);
          if (v !== o) throw new et("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var y = arguments[0], x = arguments[1], w = arguments[2], C = w, D = y; D < x; D++) {
            var A = this._edgeList.get(D);
            A.setEdgeDepths(F.RIGHT, C), C = A.getDepth(F.LEFT);
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
        o === this._LINKING_TO_OUTGOING && (ie.isTrue(i !== null, "found null for first outgoing dirEdge"), ie.isTrue(i.getEdgeRing() === n, "unable to link last incoming dirEdge"), s.setNextMin(i));
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
        for (var n = _.NONE, i = this.iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getSym();
          if (!s.isLineEdge()) {
            if (s.isInResult()) {
              n = _.INTERIOR;
              break;
            }
            if (o.isInResult()) {
              n = _.EXTERIOR;
              break;
            }
          }
        }
        if (n === _.NONE) return null;
        for (var c = n, v = this.iterator(); v.hasNext(); ) {
          var y = v.next(), x = y.getSym();
          y.isLineEdge() ? y.getEdge().setCovered(c === _.INTERIOR) : (y.isInResult() && (c = _.EXTERIOR), x.isInResult() && (c = _.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        S(d(t.prototype), "computeLabelling", this).call(this, n), this._label = new Fe(_.NONE);
        for (var i = this.iterator(); i.hasNext(); ) for (var s = i.next().getEdge().getLabel(), o = 0; o < 2; o++) {
          var c = s.getLocation(o);
          c !== _.INTERIOR && c !== _.BOUNDARY || this._label.setLocation(o, _.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), t;
    }(ra), aa = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        return a(this, t), e.call(this);
      }
      return l(t, [{ key: "createNode", value: function(n) {
        return new cn(n, new sa());
      } }]), t;
    }(Di), Wi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "compareTo", value: function(e) {
        var t = e;
        return r.compareOriented(this._pts, this._orientation, t._pts, t._orientation);
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._orientation = null;
        var e = arguments[0];
        this._pts = e, this._orientation = r.orientation(e);
      } }, { key: "orientation", value: function(e) {
        return _e.increasingDirection(e) === 1;
      } }, { key: "compareOriented", value: function(e, t, n, i) {
        for (var s = t ? 1 : -1, o = i ? 1 : -1, c = t ? e.length : -1, v = i ? n.length : -1, y = t ? 0 : e.length - 1, x = i ? 0 : n.length - 1; ; ) {
          var w = e[y].compareTo(n[x]);
          if (w !== 0) return w;
          var C = (y += s) === c, D = (x += o) === v;
          if (C && !D) return -1;
          if (!C && D) return 1;
          if (C && D) return 0;
        }
      } }]), r;
    }(), ua = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "print", value: function(e) {
        e.print("MULTILINESTRING ( ");
        for (var t = 0; t < this._edges.size(); t++) {
          var n = this._edges.get(t);
          t > 0 && e.print(","), e.print("(");
          for (var i = n.getCoordinates(), s = 0; s < i.length; s++) s > 0 && e.print(","), e.print(i[s].x + " " + i[s].y);
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
        var t = new Wi(e.getCoordinates());
        return this._ocaMap.get(t);
      } }, { key: "add", value: function(e) {
        this._edges.add(e);
        var t = new Wi(e.getCoordinates());
        this._ocaMap.put(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new Q(), this._ocaMap = new Xt();
      } }]), r;
    }(), ji = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "processIntersections", value: function(e, t, n, i) {
      } }, { key: "isDone", value: function() {
      } }]), r;
    }(), oa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "isTrivialIntersection", value: function(e, t, n, i) {
        if (e === n && this._li.getIntersectionNum() === 1) {
          if (r.isAdjacentSegments(t, i)) return !0;
          if (e.isClosed()) {
            var s = e.size() - 1;
            if (t === 0 && i === s || i === 0 && t === s) return !0;
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
        var s = e.getCoordinates()[t], o = e.getCoordinates()[t + 1], c = n.getCoordinates()[i], v = n.getCoordinates()[i + 1];
        this._li.computeIntersection(s, o, c, v), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(e, t, n, i) || (this._hasIntersection = !0, e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [ji];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var e = arguments[0];
        this._li = e;
      } }, { key: "isAdjacentSegments", value: function(e, t) {
        return Math.abs(e - t) === 1;
      } }]), r;
    }(), la = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getSegmentIndex", value: function() {
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
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.coord = new R(e), this.segmentIndex = t, this.dist = n;
      } }]), r;
    }(), ha = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "iterator", value: function() {
        return this._nodeMap.values().iterator();
      } }, { key: "addSplitEdges", value: function(e) {
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next(), s = this.createSplitEdge(n, i);
          e.add(s), n = i;
        }
      } }, { key: "addEndpoints", value: function() {
        var e = this.edge.pts.length - 1;
        this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[e], e, 0);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2, i = this.edge.pts[t.segmentIndex], s = t.dist > 0 || !t.coord.equals2D(i);
        s || n--;
        var o = new Array(n).fill(null), c = 0;
        o[c++] = new R(e.coord);
        for (var v = e.segmentIndex + 1; v <= t.segmentIndex; v++) o[c++] = this.edge.pts[v];
        return s && (o[c] = t.coord), new Ji(o, new Fe(this.edge._label));
      } }, { key: "add", value: function(e, t, n) {
        var i = new la(e, t, n), s = this._nodeMap.get(i);
        return s !== null ? s : (this._nodeMap.put(i, i), i);
      } }, { key: "isIntersection", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          if (t.next().coord.equals(e)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Xt(), this.edge = null;
        var e = arguments[0];
        this.edge = e;
      } }]), r;
    }(), ca = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) || r.isTrue(this._matrix[_.INTERIOR][_.BOUNDARY]) || r.isTrue(this._matrix[_.BOUNDARY][_.INTERIOR]) || r.isTrue(this._matrix[_.BOUNDARY][_.BOUNDARY])) && this._matrix[_.EXTERIOR][_.INTERIOR] === q.FALSE && this._matrix[_.EXTERIOR][_.BOUNDARY] === q.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) || r.isTrue(this._matrix[_.INTERIOR][_.BOUNDARY]) || r.isTrue(this._matrix[_.BOUNDARY][_.INTERIOR]) || r.isTrue(this._matrix[_.BOUNDARY][_.BOUNDARY])) && this._matrix[_.INTERIOR][_.EXTERIOR] === q.FALSE && this._matrix[_.BOUNDARY][_.EXTERIOR] === q.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this._matrix[n][i] = q.toDimensionValue(e.charAt(t));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._matrix[s][o] = c;
        }
      } }, { key: "isContains", value: function() {
        return r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && this._matrix[_.EXTERIOR][_.INTERIOR] === q.FALSE && this._matrix[_.EXTERIOR][_.BOUNDARY] === q.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this.setAtLeast(n, i, q.toDimensionValue(e.charAt(t)));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          this._matrix[s][o] < c && (this._matrix[s][o] = c);
        }
      } }, { key: "setAtLeastIfValid", value: function(e, t, n) {
        e >= 0 && t >= 0 && this.setAtLeast(e, t, n);
      } }, { key: "isWithin", value: function() {
        return r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && this._matrix[_.INTERIOR][_.EXTERIOR] === q.FALSE && this._matrix[_.BOUNDARY][_.EXTERIOR] === q.FALSE;
      } }, { key: "isTouches", value: function(e, t) {
        return e > t ? this.isTouches(t, e) : (e === q.A && t === q.A || e === q.L && t === q.L || e === q.L && t === q.A || e === q.P && t === q.A || e === q.P && t === q.L) && this._matrix[_.INTERIOR][_.INTERIOR] === q.FALSE && (r.isTrue(this._matrix[_.INTERIOR][_.BOUNDARY]) || r.isTrue(this._matrix[_.BOUNDARY][_.INTERIOR]) || r.isTrue(this._matrix[_.BOUNDARY][_.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(e, t) {
        return e === q.P && t === q.P || e === q.A && t === q.A ? r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && r.isTrue(this._matrix[_.INTERIOR][_.EXTERIOR]) && r.isTrue(this._matrix[_.EXTERIOR][_.INTERIOR]) : e === q.L && t === q.L && this._matrix[_.INTERIOR][_.INTERIOR] === 1 && r.isTrue(this._matrix[_.INTERIOR][_.EXTERIOR]) && r.isTrue(this._matrix[_.EXTERIOR][_.INTERIOR]);
      } }, { key: "isEquals", value: function(e, t) {
        return e === t && r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && this._matrix[_.INTERIOR][_.EXTERIOR] === q.FALSE && this._matrix[_.BOUNDARY][_.EXTERIOR] === q.FALSE && this._matrix[_.EXTERIOR][_.INTERIOR] === q.FALSE && this._matrix[_.EXTERIOR][_.BOUNDARY] === q.FALSE;
      } }, { key: "toString", value: function() {
        for (var e = new on("123456789"), t = 0; t < 3; t++) for (var n = 0; n < 3; n++) e.setCharAt(3 * t + n, q.toDimensionSymbol(this._matrix[t][n]));
        return e.toString();
      } }, { key: "setAll", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this._matrix[t][n] = e;
      } }, { key: "get", value: function(e, t) {
        return this._matrix[e][t];
      } }, { key: "transpose", value: function() {
        var e = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = e, e = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = e, e = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = e, this;
      } }, { key: "matches", value: function(e) {
        if (e.length !== 9) throw new G("Should be length 9: " + e);
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) if (!r.matches(this._matrix[t][n], e.charAt(3 * t + n))) return !1;
        return !0;
      } }, { key: "add", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this.setAtLeast(t, n, e.get(t, n));
      } }, { key: "isDisjoint", value: function() {
        return this._matrix[_.INTERIOR][_.INTERIOR] === q.FALSE && this._matrix[_.INTERIOR][_.BOUNDARY] === q.FALSE && this._matrix[_.BOUNDARY][_.INTERIOR] === q.FALSE && this._matrix[_.BOUNDARY][_.BOUNDARY] === q.FALSE;
      } }, { key: "isCrosses", value: function(e, t) {
        return e === q.P && t === q.L || e === q.P && t === q.A || e === q.L && t === q.A ? r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && r.isTrue(this._matrix[_.INTERIOR][_.EXTERIOR]) : e === q.L && t === q.P || e === q.A && t === q.P || e === q.A && t === q.L ? r.isTrue(this._matrix[_.INTERIOR][_.INTERIOR]) && r.isTrue(this._matrix[_.EXTERIOR][_.INTERIOR]) : e === q.L && t === q.L && this._matrix[_.INTERIOR][_.INTERIOR] === 0;
      } }, { key: "interfaces_", get: function() {
        return [V];
      } }], [{ key: "constructor_", value: function() {
        if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
          return Array(3);
        }), this.setAll(q.FALSE);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "string") {
            var e = arguments[0];
            r.constructor_.call(this), this.set(e);
          } else if (arguments[0] instanceof r) {
            var t = arguments[0];
            r.constructor_.call(this), this._matrix[_.INTERIOR][_.INTERIOR] = t._matrix[_.INTERIOR][_.INTERIOR], this._matrix[_.INTERIOR][_.BOUNDARY] = t._matrix[_.INTERIOR][_.BOUNDARY], this._matrix[_.INTERIOR][_.EXTERIOR] = t._matrix[_.INTERIOR][_.EXTERIOR], this._matrix[_.BOUNDARY][_.INTERIOR] = t._matrix[_.BOUNDARY][_.INTERIOR], this._matrix[_.BOUNDARY][_.BOUNDARY] = t._matrix[_.BOUNDARY][_.BOUNDARY], this._matrix[_.BOUNDARY][_.EXTERIOR] = t._matrix[_.BOUNDARY][_.EXTERIOR], this._matrix[_.EXTERIOR][_.INTERIOR] = t._matrix[_.EXTERIOR][_.INTERIOR], this._matrix[_.EXTERIOR][_.BOUNDARY] = t._matrix[_.EXTERIOR][_.BOUNDARY], this._matrix[_.EXTERIOR][_.EXTERIOR] = t._matrix[_.EXTERIOR][_.EXTERIOR];
          }
        }
      } }, { key: "matches", value: function() {
        if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
          var e = arguments[0], t = arguments[1];
          return t === q.SYM_DONTCARE || t === q.SYM_TRUE && (e >= 0 || e === q.TRUE) || t === q.SYM_FALSE && e === q.FALSE || t === q.SYM_P && e === q.P || t === q.SYM_L && e === q.L || t === q.SYM_A && e === q.A;
        }
        if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
          var n = arguments[0], i = arguments[1], s = new r(n);
          return s.matches(i);
        }
      } }, { key: "isTrue", value: function(e) {
        return e >= 0 || e === q.TRUE;
      } }]), r;
    }(), fa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(e) {
        return e === null || e.length === 0 ? null : (this.ensureCapacity(this._size + e.length), Ae.arraycopy(e, 0, this._data, this._size, e.length), void (this._size += e.length));
      } }, { key: "ensureCapacity", value: function(e) {
        if (e <= this._data.length) return null;
        var t = Math.max(e, 2 * this._data.length);
        this._data = mt.copyOf(this._data, t);
      } }, { key: "toArray", value: function() {
        var e = new Array(this._size).fill(null);
        return Ae.arraycopy(this._data, 0, e, 0, this._size), e;
      } }, { key: "add", value: function(e) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = e, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) r.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._data = new Array(e).fill(null);
        }
      } }]), r;
    }(), ga = function() {
      function r() {
        a(this, r);
      }
      return l(r, [{ key: "getChainStartIndices", value: function(e) {
        var t = 0, n = new fa(Math.trunc(e.length / 2));
        n.add(t);
        do {
          var i = this.findChainEnd(e, t);
          n.add(i), t = i;
        } while (t < e.length - 1);
        return n.toArray();
      } }, { key: "findChainEnd", value: function(e, t) {
        for (var n = Le.quadrant(e[t], e[t + 1]), i = t + 1; i < e.length && Le.quadrant(e[i - 1], e[i]) === n; )
          i++;
        return i - 1;
      } }, { key: "OLDgetChainStartIndices", value: function(e) {
        var t = 0, n = new Q();
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
    }(), va = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getCoordinates", value: function() {
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
          var s = arguments[0], o = arguments[1], c = arguments[2], v = arguments[3], y = arguments[4], x = arguments[5];
          if (o - s == 1 && y - v == 1) return x.addIntersections(this.e, s, c.e, v), null;
          if (!this.overlaps(s, o, c, v, y)) return null;
          var w = Math.trunc((s + o) / 2), C = Math.trunc((v + y) / 2);
          s < w && (v < C && this.computeIntersectsForChain(s, w, c, v, C, x), C < y && this.computeIntersectsForChain(s, w, c, C, y, x)), w < o && (v < C && this.computeIntersectsForChain(w, o, c, v, C, x), C < y && this.computeIntersectsForChain(w, o, c, C, y, x));
        }
      } }, { key: "overlaps", value: function(e, t, n, i, s) {
        return ve.intersects(this.pts[e], this.pts[t], n.pts[i], n.pts[s]);
      } }, { key: "getStartIndexes", value: function() {
        return this.startIndex;
      } }, { key: "computeIntersects", value: function(e, t) {
        for (var n = 0; n < this.startIndex.length - 1; n++) for (var i = 0; i < e.startIndex.length - 1; i++) this.computeIntersectsForChain(n, e, i, t);
      } }], [{ key: "constructor_", value: function() {
        this.e = null, this.pts = null, this.startIndex = null;
        var e = arguments[0];
        this.e = e, this.pts = e.getCoordinates();
        var t = new ga();
        this.startIndex = t.getChainStartIndices(this.pts);
      } }]), r;
    }(), Qi = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "getDepth", value: function(e, t) {
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
          var i = arguments[0], s = arguments[1];
          return this._depth[i][s] === r.NULL_VALUE;
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
        return this._depth[e][F.RIGHT] - this._depth[e][F.LEFT];
      } }, { key: "getLocation", value: function(e, t) {
        return this._depth[e][t] <= 0 ? _.EXTERIOR : _.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < 2; t++) for (var n = 1; n < 3; n++) {
          var i = e.getLocation(t, n);
          i !== _.EXTERIOR && i !== _.INTERIOR || (this.isNull(t, n) ? this._depth[t][n] = r.depthAtLocation(i) : this._depth[t][n] += r.depthAtLocation(i));
        }
        else if (arguments.length === 3) {
          var s = arguments[0], o = arguments[1], c = arguments[2];
          c === _.INTERIOR && this._depth[s][o]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) this._depth[e][t] = r.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(e) {
        return e === _.EXTERIOR ? 0 : e === _.INTERIOR ? 1 : r.NULL_VALUE;
      } }]), r;
    }();
    Qi.NULL_VALUE = -1;
    var Ji = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "getDepth", value: function() {
        return this._depth;
      } }, { key: "getCollapsedEdge", value: function() {
        var n = new Array(2).fill(null);
        return n[0] = this.pts[0], n[1] = this.pts[1], new t(n, Fe.toLineLabel(this._label));
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
        return this._mce === null && (this._mce = new va(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new ve();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, i, s, o) {
        var c = new R(n.getIntersection(o)), v = i, y = n.getEdgeDistance(s, o), x = v + 1;
        if (x < this.pts.length) {
          var w = this.pts[x];
          c.equals2D(w) && (v = x, y = 0);
        }
        this.eiList.add(c, v, y);
      } }, { key: "toString", value: function() {
        var n = new on();
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
        if (this.pts = null, this._env = null, this.eiList = new ha(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Qi(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          t.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var i = arguments[0], s = arguments[1];
          this.pts = i, this._label = s;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof ca && arguments[0] instanceof Fe)) return S(d(t), "updateIM", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        i.setAtLeastIfValid(n.getLocation(0, F.ON), n.getLocation(1, F.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, F.LEFT), n.getLocation(1, F.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, F.RIGHT), n.getLocation(1, F.RIGHT), 2));
      } }]), t;
    }(Oi), Ki = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "setWorkingPrecisionModel", value: function(e) {
        this._workingPrecisionModel = e;
      } }, { key: "insertUniqueEdge", value: function(e) {
        var t = this._edgeList.findEqualEdge(e);
        if (t !== null) {
          var n = t.getLabel(), i = e.getLabel();
          t.isPointwiseEqual(e) || (i = new Fe(e.getLabel())).flip(), n.merge(i);
          var s = r.depthDelta(i), o = t.getDepthDelta() + s;
          t.setDepthDelta(o);
        } else this._edgeList.add(e), e.setDepthDelta(r.depthDelta(e.getLabel()));
      } }, { key: "buildSubgraphs", value: function(e, t) {
        for (var n = new Q(), i = e.iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getRightmostCoordinate(), c = new Vi(n).getDepth(o);
          s.computeDepth(c), s.findResultEdges(), n.add(s), t.add(s.getDirectedEdges(), s.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(e) {
        for (var t = new Q(), n = e.getNodes().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (!i.isVisited()) {
            var s = new _s();
            s.create(i), t.add(s);
          }
        }
        return wt.sort(t, wt.reverseOrder()), t;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(e) {
        if (this._workingNoder !== null) return this._workingNoder;
        var t = new Hn(), n = new _t();
        return n.setPrecisionModel(e), t.setSegmentIntersector(new oa(n)), t;
      } }, { key: "buffer", value: function(e, t) {
        var n = this._workingPrecisionModel;
        n === null && (n = e.getPrecisionModel()), this._geomFact = e.getFactory();
        var i = new Ks(n, this._bufParams), s = new ea(e, t, i).getCurves();
        if (s.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(s, n), this._graph = new Fi(new aa()), this._graph.addEdges(this._edgeList.getEdges());
        var o = this.createSubgraphs(this._graph), c = new qs(this._geomFact);
        this.buildSubgraphs(o, c);
        var v = c.getPolygons();
        return v.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(v);
      } }, { key: "computeNodedEdges", value: function(e, t) {
        var n = this.getNoder(t);
        n.computeNodes(e);
        for (var i = n.getNodedSubstrings().iterator(); i.hasNext(); ) {
          var s = i.next(), o = s.getCoordinates();
          if (o.length !== 2 || !o[0].equals2D(o[1])) {
            var c = s.getData(), v = new Ji(s.getCoordinates(), new Fe(c));
            this.insertUniqueEdge(v);
          }
        }
      } }, { key: "setNoder", value: function(e) {
        this._workingNoder = e;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new ua();
        var e = arguments[0];
        this._bufParams = e;
      } }, { key: "depthDelta", value: function(e) {
        var t = e.getLocation(0, F.LEFT), n = e.getLocation(0, F.RIGHT);
        return t === _.INTERIOR && n === _.EXTERIOR ? 1 : t === _.EXTERIOR && n === _.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(e) {
        for (var t = new Nt(), n = new Q(); e.hasNext(); ) {
          var i = e.next(), s = t.createLineString(i.getCoordinates());
          n.add(s);
        }
        return t.buildGeometry(n);
      } }]), r;
    }(), ya = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "rescale", value: function() {
        if (ee(arguments[0], He)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var i = arguments[0], s = 0; s < i.length; s++) i[s].x = i[s].x / this._scaleFactor + this._offsetX, i[s].y = i[s].y / this._scaleFactor + this._offsetY;
          i.length === 2 && i[0].equals2D(i[1]) && Ae.out.println(i);
        }
      } }, { key: "scale", value: function() {
        if (ee(arguments[0], He)) {
          for (var e = arguments[0], t = new Q(e.size()), n = e.iterator(); n.hasNext(); ) {
            var i = n.next();
            t.add(new xt(this.scale(i.getCoordinates()), i.getData()));
          }
          return t;
        }
        if (arguments[0] instanceof Array) {
          for (var s = arguments[0], o = new Array(s.length).fill(null), c = 0; c < s.length; c++) o[c] = new R(Math.round((s[c].x - this._offsetX) * this._scaleFactor), Math.round((s[c].y - this._offsetY) * this._scaleFactor), s[c].getZ());
          var v = _e.removeRepeatedPoints(o);
          return v;
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
        return [Vn];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          r.constructor_.call(this, e, t, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1];
          this._noder = n, this._scaleFactor = i, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), r;
    }(), $i = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next(), n = t.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var i = arguments[0], s = arguments[1], o = s.iterator(); o.hasNext(); ) for (var c = o.next(), v = c.getCoordinates(), y = 1; y < v.length - 1; y++) if (v[y].equals(i)) throw new Ee("found endpt/interior pt intersection at index " + y + " :pt " + i);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) for (var t = e.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.checkInteriorIntersections(t, i);
        }
        else if (arguments.length === 2) for (var s = arguments[0], o = arguments[1], c = s.getCoordinates(), v = o.getCoordinates(), y = 0; y < c.length - 1; y++) for (var x = 0; x < v.length - 1; x++) this.checkInteriorIntersections(s, y, o, x);
        else if (arguments.length === 4) {
          var w = arguments[0], C = arguments[1], D = arguments[2], A = arguments[3];
          if (w === D && C === A) return null;
          var Z = w.getCoordinates()[C], j = w.getCoordinates()[C + 1], $ = D.getCoordinates()[A], ce = D.getCoordinates()[A + 1];
          if (this._li.computeIntersection(Z, j, $, ce), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, Z, j) || this.hasInteriorIntersection(this._li, $, ce))) throw new Ee("found non-noded intersection at " + Z + "-" + j + " and " + $ + "-" + ce);
        }
      } }, { key: "checkValid", value: function() {
        this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
      } }, { key: "checkCollapses", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next();
          this.checkCollapses(t);
        }
        else if (arguments.length === 1) for (var n = arguments[0], i = n.getCoordinates(), s = 0; s < i.length - 2; s++) this.checkCollapse(i[s], i[s + 1], i[s + 2]);
      } }, { key: "hasInteriorIntersection", value: function(e, t, n) {
        for (var i = 0; i < e.getIntersectionNum(); i++) {
          var s = e.getIntersection(i);
          if (!s.equals(t) && !s.equals(n)) return !0;
        }
        return !1;
      } }, { key: "checkCollapse", value: function(e, t, n) {
        if (e.equals(n)) throw new Ee("found non-noded collapse at " + r.fact.createLineString([e, t, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new _t(), this._segStrings = null;
        var e = arguments[0];
        this._segStrings = e;
      } }]), r;
    }();
    $i.fact = new Nt();
    var Wn = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "intersectsScaled", value: function(e, t) {
        var n = Math.min(e.x, t.x), i = Math.max(e.x, t.x), s = Math.min(e.y, t.y), o = Math.max(e.y, t.y), c = this._maxx < n || this._minx > i || this._maxy < s || this._miny > o;
        if (c) return !1;
        var v = this.intersectsToleranceSquare(e, t);
        return ie.isTrue(!(c && v), "Found bad envelope test"), v;
      } }, { key: "initCorners", value: function(e) {
        var t = 0.5;
        this._minx = e.x - t, this._maxx = e.x + t, this._miny = e.y - t, this._maxy = e.y + t, this._corner[0] = new R(this._maxx, this._maxy), this._corner[1] = new R(this._minx, this._maxy), this._corner[2] = new R(this._minx, this._miny), this._corner[3] = new R(this._maxx, this._miny);
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
          this._safeEnv = new ve(this._originalPt.x - e, this._originalPt.x + e, this._originalPt.y - e, this._originalPt.y + e);
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
        if (this._originalPt = e, this._pt = e, this._scaleFactor = t, this._li = n, t <= 0) throw new G("Scale factor must be non-zero");
        t !== 1 && (this._pt = new R(this.scale(e.x), this.scale(e.y)), this._p0Scaled = new R(), this._p1Scaled = new R()), this.initCorners(this._pt);
      } }]), r;
    }();
    Wn.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var ma = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "select", value: function() {
        if (arguments.length !== 1) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            e.getLineSegment(t, this.selectedSegment), this.select(this.selectedSegment);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this.selectedSegment = new be();
      } }]), r;
    }(), er = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.snap(e, null, -1);
        }
        if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2], s = t.getSafeEnvelope(), o = new tr(t, n, i);
          return this._index.query(s, new (function() {
            function c() {
              a(this, c);
            }
            return l(c, [{ key: "interfaces_", get: function() {
              return [qi];
            } }, { key: "visitItem", value: function(v) {
              v.select(s, o);
            } }]), c;
          }())()), o.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var e = arguments[0];
        this._index = e;
      } }]), r;
    }(), tr = function(r) {
      g(t, r);
      var e = I(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return l(t, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof zi)) return S(d(t.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], s = n.getContext();
        if (this._parentEdge === s && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(s, i);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], i = arguments[1], s = arguments[2];
        this._hotPixel = n, this._parentEdge = i, this._hotPixelVertexIndex = s;
      } }]), t;
    }(ma);
    er.HotPixelSnapAction = tr;
    var da = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "processIntersections", value: function(e, t, n, i) {
        if (e === n && t === i) return null;
        var s = e.getCoordinates()[t], o = e.getCoordinates()[t + 1], c = n.getCoordinates()[i], v = n.getCoordinates()[i + 1];
        if (this._li.computeIntersection(s, o, c, v), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var y = 0; y < this._li.getIntersectionNum(); y++) this._interiorIntersections.add(this._li.getIntersection(y));
          e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [ji];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var e = arguments[0];
        this._li = e, this._interiorIntersections = new Q();
      } }]), r;
    }(), pa = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "checkCorrectness", value: function(e) {
        var t = xt.getNodedSubstrings(e), n = new $i(t);
        try {
          n.checkValid();
        } catch (i) {
          if (!(i instanceof Y)) throw i;
          i.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return xt.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(e, t) {
        var n = this.findInteriorIntersections(e, t);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(e);
      } }, { key: "findInteriorIntersections", value: function(e, t) {
        var n = new da(t);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(e), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (ee(arguments[0], He)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof xt) for (var i = arguments[0], s = i.getCoordinates(), o = 0; o < s.length; o++) {
          var c = new Wn(s[o], this._scaleFactor, this._li), v = this._pointSnapper.snap(c, i, o);
          v && i.addIntersection(s[o], o);
        }
      } }, { key: "computeNodes", value: function(e) {
        this._nodedSegStrings = e, this._noder = new Hn(), this._pointSnapper = new er(this._noder.getIndex()), this.snapRound(e, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next(), i = new Wn(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(i);
        }
      } }, { key: "interfaces_", get: function() {
        return [Vn];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var e = arguments[0];
        this._pm = e, this._li = new _t(), this._li.setPrecisionModel(e), this._scaleFactor = e.getScale();
      } }]), r;
    }(), Tt = function() {
      function r() {
        a(this, r), r.constructor_.apply(this, arguments);
      }
      return l(r, [{ key: "bufferFixedPrecision", value: function(e) {
        var t = new ya(new pa(new Be(1)), e.getScale()), n = new Ki(this._bufParams);
        n.setWorkingPrecisionModel(e), n.setNoder(t), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var e = r.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              this.bufferReducedPrecision(e);
            } catch (s) {
              if (!(s instanceof et)) throw s;
              this._saveException = s;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var t = arguments[0], n = r.precisionScaleFactor(this._argGeom, this._distance, t), i = new Be(n);
          this.bufferFixedPrecision(i);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var e = this._argGeom.getFactory().getPrecisionModel();
        e.getType() === Be.FIXED ? this.bufferFixedPrecision(e) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._bufParams.setQuadrantSegments(e);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var e = new Ki(this._bufParams);
          this._resultGeometry = e.buffer(this._argGeom, this._distance);
        } catch (t) {
          if (!(t instanceof Ee)) throw t;
          this._saveException = t;
        }
      } }, { key: "getResultGeometry", value: function(e) {
        return this._distance = e, this.computeGeometry(), this._resultGeometry;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._bufParams.setEndCapStyle(e);
      } }], [{ key: "constructor_", value: function() {
        if (this._argGeom = null, this._distance = null, this._bufParams = new O(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
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
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof W && typeof arguments[1] == "number") {
            var s = arguments[0], o = arguments[1], c = arguments[2], v = new r(s);
            v.setQuadrantSegments(c);
            var y = v.getResultGeometry(o);
            return y;
          }
          if (arguments[2] instanceof O && arguments[0] instanceof W && typeof arguments[1] == "number") {
            var x = arguments[0], w = arguments[1], C = arguments[2], D = new r(x, C), A = D.getResultGeometry(w);
            return A;
          }
        } else if (arguments.length === 4) {
          var Z = arguments[0], j = arguments[1], $ = arguments[2], ce = arguments[3], me = new r(Z);
          me.setQuadrantSegments($), me.setEndCapStyle(ce);
          var Ne = me.getResultGeometry(j);
          return Ne;
        }
      } }, { key: "precisionScaleFactor", value: function(e, t, n) {
        var i = e.getEnvelopeInternal(), s = Ft.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (t > 0 ? t : 0), o = n - Math.trunc(Math.log(s) / Math.log(10) + 1);
        return Math.pow(10, o);
      } }]), r;
    }();
    Tt.CAP_ROUND = O.CAP_ROUND, Tt.CAP_BUTT = O.CAP_FLAT, Tt.CAP_FLAT = O.CAP_FLAT, Tt.CAP_SQUARE = O.CAP_SQUARE, Tt.MAX_PRECISION_DIGITS = 12;
    var _a = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], nr = function() {
      function r(e) {
        a(this, r), this.geometryFactory = e || new Nt();
      }
      return l(r, [{ key: "read", value: function(e) {
        var t, n = (t = typeof e == "string" ? JSON.parse(e) : e).type;
        if (!qe[n]) throw new Error("Unknown GeoJSON type: " + t.type);
        return _a.indexOf(n) !== -1 ? qe[n].call(this, t.coordinates) : n === "GeometryCollection" ? qe[n].call(this, t.geometries) : qe[n].call(this, t);
      } }, { key: "write", value: function(e) {
        var t = e.getGeometryType();
        if (!Qe[t]) throw new Error("Geometry is not supported");
        return Qe[t].call(this, e);
      } }]), r;
    }(), qe = { Feature: function(r) {
      var e = {};
      for (var t in r) e[t] = r[t];
      if (r.geometry) {
        var n = r.geometry.type;
        if (!qe[n]) throw new Error("Unknown GeoJSON type: " + r.type);
        e.geometry = this.read(r.geometry);
      }
      return r.bbox && (e.bbox = qe.bbox.call(this, r.bbox)), e;
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
        e.push(N(R, T(n)));
      }
      return e;
    }, bbox: function(r) {
      return this.geometryFactory.createLinearRing([new R(r[0], r[1]), new R(r[2], r[1]), new R(r[2], r[3]), new R(r[0], r[3]), new R(r[0], r[1])]);
    }, Point: function(r) {
      var e = N(R, T(r));
      return this.geometryFactory.createPoint(e);
    }, MultiPoint: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) e.push(qe.Point.call(this, r[t]));
      return this.geometryFactory.createMultiPoint(e);
    }, LineString: function(r) {
      var e = qe.coordinates.call(this, r);
      return this.geometryFactory.createLineString(e);
    }, MultiLineString: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) e.push(qe.LineString.call(this, r[t]));
      return this.geometryFactory.createMultiLineString(e);
    }, Polygon: function(r) {
      for (var e = qe.coordinates.call(this, r[0]), t = this.geometryFactory.createLinearRing(e), n = [], i = 1; i < r.length; ++i) {
        var s = r[i], o = qe.coordinates.call(this, s), c = this.geometryFactory.createLinearRing(o);
        n.push(c);
      }
      return this.geometryFactory.createPolygon(t, n);
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) {
        var n = r[t];
        e.push(qe.Polygon.call(this, n));
      }
      return this.geometryFactory.createMultiPolygon(e);
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0; t < r.length; ++t) {
        var n = r[t];
        e.push(this.read(n));
      }
      return this.geometryFactory.createGeometryCollection(e);
    } }, Qe = { coordinate: function(r) {
      var e = [r.x, r.y];
      return r.z && e.push(r.z), r.m && e.push(r.m), e;
    }, Point: function(r) {
      return { type: "Point", coordinates: Qe.coordinate.call(this, r.getCoordinate()) };
    }, MultiPoint: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Qe.Point.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPoint", coordinates: e };
    }, LineString: function(r) {
      for (var e = [], t = r.getCoordinates(), n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(Qe.coordinate.call(this, i));
      }
      return { type: "LineString", coordinates: e };
    }, MultiLineString: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Qe.LineString.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiLineString", coordinates: e };
    }, Polygon: function(r) {
      var e = [], t = Qe.LineString.call(this, r._shell);
      e.push(t.coordinates);
      for (var n = 0; n < r._holes.length; ++n) {
        var i = r._holes[n], s = Qe.LineString.call(this, i);
        e.push(s.coordinates);
      }
      return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = Qe.Polygon.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function(r) {
      for (var e = [], t = 0; t < r._geometries.length; ++t) {
        var n = r._geometries[t], i = n.getGeometryType();
        e.push(Qe[i].call(this, n));
      }
      return { type: "GeometryCollection", geometries: e };
    } };
    return { BufferOp: Tt, GeoJSONReader: function() {
      function r(e) {
        a(this, r), this.parser = new nr(e || new Nt());
      }
      return l(r, [{ key: "read", value: function(e) {
        return this.parser.read(e);
      } }]), r;
    }(), GeoJSONWriter: function() {
      function r() {
        a(this, r), this.parser = new nr(this.geometryFactory);
      }
      return l(r, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }]), r;
    }() };
  });
})(jr);
var Da = jr.exports;
const Fa = /* @__PURE__ */ Aa(Da);
function gt() {
  return new En();
}
function En() {
  this.reset();
}
En.prototype = {
  constructor: En,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(h) {
    vr(vn, h, this.t), vr(this, vn.s, this.s), this.s ? this.t += vn.t : this.s = vn.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var vn = new En();
function vr(h, u, a) {
  var f = h.s = u + a, l = f - u, g = f - l;
  h.t = u - g + (a - l);
}
var ge = 1e-6, le = Math.PI, Je = le / 2, yr = le / 4, Ke = le * 2, ot = 180 / le, Ye = le / 180, Ie = Math.abs, Ga = Math.atan, bt = Math.atan2, de = Math.cos, pe = Math.sin, At = Math.sqrt;
function Qr(h) {
  return h > 1 ? 0 : h < -1 ? le : Math.acos(h);
}
function Et(h) {
  return h > 1 ? Je : h < -1 ? -Je : Math.asin(h);
}
function Wt() {
}
function In(h, u) {
  h && dr.hasOwnProperty(h.type) && dr[h.type](h, u);
}
var mr = {
  Feature: function(h, u) {
    In(h.geometry, u);
  },
  FeatureCollection: function(h, u) {
    for (var a = h.features, f = -1, l = a.length; ++f < l; ) In(a[f].geometry, u);
  }
}, dr = {
  Sphere: function(h, u) {
    u.sphere();
  },
  Point: function(h, u) {
    h = h.coordinates, u.point(h[0], h[1], h[2]);
  },
  MultiPoint: function(h, u) {
    for (var a = h.coordinates, f = -1, l = a.length; ++f < l; ) h = a[f], u.point(h[0], h[1], h[2]);
  },
  LineString: function(h, u) {
    ni(h.coordinates, u, 0);
  },
  MultiLineString: function(h, u) {
    for (var a = h.coordinates, f = -1, l = a.length; ++f < l; ) ni(a[f], u, 0);
  },
  Polygon: function(h, u) {
    pr(h.coordinates, u);
  },
  MultiPolygon: function(h, u) {
    for (var a = h.coordinates, f = -1, l = a.length; ++f < l; ) pr(a[f], u);
  },
  GeometryCollection: function(h, u) {
    for (var a = h.geometries, f = -1, l = a.length; ++f < l; ) In(a[f], u);
  }
};
function ni(h, u, a) {
  var f = -1, l = h.length - a, g;
  for (u.lineStart(); ++f < l; ) g = h[f], u.point(g[0], g[1], g[2]);
  u.lineEnd();
}
function pr(h, u) {
  var a = -1, f = h.length;
  for (u.polygonStart(); ++a < f; ) ni(h[a], u, 1);
  u.polygonEnd();
}
function qa(h, u) {
  h && mr.hasOwnProperty(h.type) ? mr[h.type](h, u) : In(h, u);
}
gt();
gt();
function ii(h) {
  return [bt(h[1], h[0]), Et(h[2])];
}
function Mt(h) {
  var u = h[0], a = h[1], f = de(a);
  return [f * de(u), f * pe(u), pe(a)];
}
function yn(h, u) {
  return h[0] * u[0] + h[1] * u[1] + h[2] * u[2];
}
function Nn(h, u) {
  return [h[1] * u[2] - h[2] * u[1], h[2] * u[0] - h[0] * u[2], h[0] * u[1] - h[1] * u[0]];
}
function Kn(h, u) {
  h[0] += u[0], h[1] += u[1], h[2] += u[2];
}
function mn(h, u) {
  return [h[0] * u, h[1] * u, h[2] * u];
}
function ri(h) {
  var u = At(h[0] * h[0] + h[1] * h[1] + h[2] * h[2]);
  h[0] /= u, h[1] /= u, h[2] /= u;
}
gt();
function Jr(h, u) {
  function a(f, l) {
    return f = h(f, l), u(f[0], f[1]);
  }
  return h.invert && u.invert && (a.invert = function(f, l) {
    return f = u.invert(f, l), f && h.invert(f[0], f[1]);
  }), a;
}
function si(h, u) {
  return [h > le ? h - Ke : h < -le ? h + Ke : h, u];
}
si.invert = si;
function Ya(h, u, a) {
  return (h %= Ke) ? u || a ? Jr(xr(h), kr(u, a)) : xr(h) : u || a ? kr(u, a) : si;
}
function _r(h) {
  return function(u, a) {
    return u += h, [u > le ? u - Ke : u < -le ? u + Ke : u, a];
  };
}
function xr(h) {
  var u = _r(h);
  return u.invert = _r(-h), u;
}
function kr(h, u) {
  var a = de(h), f = pe(h), l = de(u), g = pe(u);
  function d(p, L) {
    var N = de(L), k = de(p) * N, m = pe(p) * N, E = pe(L), I = E * a + k * f;
    return [
      bt(m * l - I * g, k * a - E * f),
      Et(I * l + m * g)
    ];
  }
  return d.invert = function(p, L) {
    var N = de(L), k = de(p) * N, m = pe(p) * N, E = pe(L), I = E * l - m * g;
    return [
      bt(m * l + E * g, k * a + I * f),
      Et(I * a - k * f)
    ];
  }, d;
}
function za(h, u, a, f, l, g) {
  if (a) {
    var d = de(u), p = pe(u), L = f * a;
    l == null ? (l = u + f * Ke, g = u - L / 2) : (l = Er(d, l), g = Er(d, g), (f > 0 ? l < g : l > g) && (l += f * Ke));
    for (var N, k = l; f > 0 ? k > g : k < g; k -= L)
      N = ii([d, -p * de(k), -p * pe(k)]), h.point(N[0], N[1]);
  }
}
function Er(h, u) {
  u = Mt(u), u[0] -= h, ri(u);
  var a = Qr(-u[1]);
  return ((-u[2] < 0 ? -a : a) + Ke - ge) % Ke;
}
function Kr() {
  var h = [], u;
  return {
    point: function(a, f) {
      u.push([a, f]);
    },
    lineStart: function() {
      h.push(u = []);
    },
    lineEnd: Wt,
    rejoin: function() {
      h.length > 1 && h.push(h.pop().concat(h.shift()));
    },
    result: function() {
      var a = h;
      return h = [], u = null, a;
    }
  };
}
function Ba(h, u, a, f, l, g) {
  var d = h[0], p = h[1], L = u[0], N = u[1], k = 0, m = 1, E = L - d, I = N - p, S;
  if (S = a - d, !(!E && S > 0)) {
    if (S /= E, E < 0) {
      if (S < k) return;
      S < m && (m = S);
    } else if (E > 0) {
      if (S > m) return;
      S > k && (k = S);
    }
    if (S = l - d, !(!E && S < 0)) {
      if (S /= E, E < 0) {
        if (S > m) return;
        S > k && (k = S);
      } else if (E > 0) {
        if (S < k) return;
        S < m && (m = S);
      }
      if (S = f - p, !(!I && S > 0)) {
        if (S /= I, I < 0) {
          if (S < k) return;
          S < m && (m = S);
        } else if (I > 0) {
          if (S > m) return;
          S > k && (k = S);
        }
        if (S = g - p, !(!I && S < 0)) {
          if (S /= I, I < 0) {
            if (S > m) return;
            S > k && (k = S);
          } else if (I > 0) {
            if (S < k) return;
            S < m && (m = S);
          }
          return k > 0 && (h[0] = d + k * E, h[1] = p + k * I), m < 1 && (u[0] = d + m * E, u[1] = p + m * I), !0;
        }
      }
    }
  }
}
function _n(h, u) {
  return Ie(h[0] - u[0]) < ge && Ie(h[1] - u[1]) < ge;
}
function dn(h, u, a, f) {
  this.x = h, this.z = u, this.o = a, this.e = f, this.v = !1, this.n = this.p = null;
}
function $r(h, u, a, f, l) {
  var g = [], d = [], p, L;
  if (h.forEach(function(S) {
    if (!((T = S.length - 1) <= 0)) {
      var T, M = S[0], b = S[T], P;
      if (_n(M, b)) {
        for (l.lineStart(), p = 0; p < T; ++p) l.point((M = S[p])[0], M[1]);
        l.lineEnd();
        return;
      }
      g.push(P = new dn(M, S, null, !0)), d.push(P.o = new dn(M, null, P, !1)), g.push(P = new dn(b, S, null, !1)), d.push(P.o = new dn(b, null, P, !0));
    }
  }), !!g.length) {
    for (d.sort(u), Ir(g), Ir(d), p = 0, L = d.length; p < L; ++p)
      d[p].e = a = !a;
    for (var N = g[0], k, m; ; ) {
      for (var E = N, I = !0; E.v; ) if ((E = E.n) === N) return;
      k = E.z, l.lineStart();
      do {
        if (E.v = E.o.v = !0, E.e) {
          if (I)
            for (p = 0, L = k.length; p < L; ++p) l.point((m = k[p])[0], m[1]);
          else
            f(E.x, E.n.x, 1, l);
          E = E.n;
        } else {
          if (I)
            for (k = E.p.z, p = k.length - 1; p >= 0; --p) l.point((m = k[p])[0], m[1]);
          else
            f(E.x, E.p.x, -1, l);
          E = E.p;
        }
        E = E.o, k = E.z, I = !I;
      } while (!E.v);
      l.lineEnd();
    }
  }
}
function Ir(h) {
  if (u = h.length) {
    for (var u, a = 0, f = h[0], l; ++a < u; )
      f.n = l = h[a], l.p = f, f = l;
    f.n = l = h[0], l.p = f;
  }
}
function es(h, u) {
  return h < u ? -1 : h > u ? 1 : h >= u ? 0 : NaN;
}
function Xa(h) {
  return h.length === 1 && (h = Ua(h)), {
    left: function(u, a, f, l) {
      for (f == null && (f = 0), l == null && (l = u.length); f < l; ) {
        var g = f + l >>> 1;
        h(u[g], a) < 0 ? f = g + 1 : l = g;
      }
      return f;
    },
    right: function(u, a, f, l) {
      for (f == null && (f = 0), l == null && (l = u.length); f < l; ) {
        var g = f + l >>> 1;
        h(u[g], a) > 0 ? l = g : f = g + 1;
      }
      return f;
    }
  };
}
function Ua(h) {
  return function(u, a) {
    return es(h(u), a);
  };
}
Xa(es);
function ts(h) {
  for (var u = h.length, a, f = -1, l = 0, g, d; ++f < u; ) l += h[f].length;
  for (g = new Array(l); --u >= 0; )
    for (d = h[u], a = d.length; --a >= 0; )
      g[--l] = d[a];
  return g;
}
var jt = 1e9, pn = -jt;
function Va(h, u, a, f) {
  function l(N, k) {
    return h <= N && N <= a && u <= k && k <= f;
  }
  function g(N, k, m, E) {
    var I = 0, S = 0;
    if (N == null || (I = d(N, m)) !== (S = d(k, m)) || L(N, k) < 0 ^ m > 0)
      do
        E.point(I === 0 || I === 3 ? h : a, I > 1 ? f : u);
      while ((I = (I + m + 4) % 4) !== S);
    else
      E.point(k[0], k[1]);
  }
  function d(N, k) {
    return Ie(N[0] - h) < ge ? k > 0 ? 0 : 3 : Ie(N[0] - a) < ge ? k > 0 ? 2 : 1 : Ie(N[1] - u) < ge ? k > 0 ? 1 : 0 : k > 0 ? 3 : 2;
  }
  function p(N, k) {
    return L(N.x, k.x);
  }
  function L(N, k) {
    var m = d(N, 1), E = d(k, 1);
    return m !== E ? m - E : m === 0 ? k[1] - N[1] : m === 1 ? N[0] - k[0] : m === 2 ? N[1] - k[1] : k[0] - N[0];
  }
  return function(N) {
    var k = N, m = Kr(), E, I, S, T, M, b, P, O, Y, G, B, X = {
      point: V,
      lineStart: re,
      lineEnd: ue,
      polygonStart: se,
      polygonEnd: te
    };
    function V(ne, oe) {
      l(ne, oe) && k.point(ne, oe);
    }
    function U() {
      for (var ne = 0, oe = 0, fe = I.length; oe < fe; ++oe)
        for (var xe = I[oe], ke = 1, H = xe.length, we = xe[0], Ee, Te, ie = we[0], $e = we[1]; ke < H; ++ke)
          Ee = ie, Te = $e, we = xe[ke], ie = we[0], $e = we[1], Te <= f ? $e > f && (ie - Ee) * (f - Te) > ($e - Te) * (h - Ee) && ++ne : $e <= f && (ie - Ee) * (f - Te) < ($e - Te) * (h - Ee) && --ne;
      return ne;
    }
    function se() {
      k = m, E = [], I = [], B = !0;
    }
    function te() {
      var ne = U(), oe = B && ne, fe = (E = ts(E)).length;
      (oe || fe) && (N.polygonStart(), oe && (N.lineStart(), g(null, null, 1, N), N.lineEnd()), fe && $r(E, p, ne, g, N), N.polygonEnd()), k = N, E = I = S = null;
    }
    function re() {
      X.point = z, I && I.push(S = []), G = !0, Y = !1, P = O = NaN;
    }
    function ue() {
      E && (z(T, M), b && Y && m.rejoin(), E.push(m.result())), X.point = V, Y && k.lineEnd();
    }
    function z(ne, oe) {
      var fe = l(ne, oe);
      if (I && S.push([ne, oe]), G)
        T = ne, M = oe, b = fe, G = !1, fe && (k.lineStart(), k.point(ne, oe));
      else if (fe && Y) k.point(ne, oe);
      else {
        var xe = [P = Math.max(pn, Math.min(jt, P)), O = Math.max(pn, Math.min(jt, O))], ke = [ne = Math.max(pn, Math.min(jt, ne)), oe = Math.max(pn, Math.min(jt, oe))];
        Ba(xe, ke, h, u, a, f) ? (Y || (k.lineStart(), k.point(xe[0], xe[1])), k.point(ke[0], ke[1]), fe || k.lineEnd(), B = !1) : fe && (k.lineStart(), k.point(ne, oe), B = !1);
      }
      P = ne, O = oe, Y = fe;
    }
    return X;
  };
}
var $n = gt();
function Ha(h, u) {
  var a = u[0], f = u[1], l = [pe(a), -de(a), 0], g = 0, d = 0;
  $n.reset();
  for (var p = 0, L = h.length; p < L; ++p)
    if (k = (N = h[p]).length)
      for (var N, k, m = N[k - 1], E = m[0], I = m[1] / 2 + yr, S = pe(I), T = de(I), M = 0; M < k; ++M, E = P, S = Y, T = G, m = b) {
        var b = N[M], P = b[0], O = b[1] / 2 + yr, Y = pe(O), G = de(O), B = P - E, X = B >= 0 ? 1 : -1, V = X * B, U = V > le, se = S * Y;
        if ($n.add(bt(se * X * pe(V), T * G + se * de(V))), g += U ? B + X * Ke : B, U ^ E >= a ^ P >= a) {
          var te = Nn(Mt(m), Mt(b));
          ri(te);
          var re = Nn(l, te);
          ri(re);
          var ue = (U ^ B >= 0 ? -1 : 1) * Et(re[2]);
          (f > ue || f === ue && (te[0] || te[1])) && (d += U ^ B >= 0 ? 1 : -1);
        }
      }
  return (g < -ge || g < ge && $n < -ge) ^ d & 1;
}
gt();
function Nr(h) {
  return h;
}
gt();
gt();
var Pt = 1 / 0, Sn = Pt, Jt = -Pt, wn = Jt, Sr = {
  point: Za,
  lineStart: Wt,
  lineEnd: Wt,
  polygonStart: Wt,
  polygonEnd: Wt,
  result: function() {
    var h = [[Pt, Sn], [Jt, wn]];
    return Jt = wn = -(Sn = Pt = 1 / 0), h;
  }
};
function Za(h, u) {
  h < Pt && (Pt = h), h > Jt && (Jt = h), u < Sn && (Sn = u), u > wn && (wn = u);
}
gt();
function ns(h, u, a, f) {
  return function(l, g) {
    var d = u(g), p = l.invert(f[0], f[1]), L = Kr(), N = u(L), k = !1, m, E, I, S = {
      point: T,
      lineStart: b,
      lineEnd: P,
      polygonStart: function() {
        S.point = O, S.lineStart = Y, S.lineEnd = G, E = [], m = [];
      },
      polygonEnd: function() {
        S.point = T, S.lineStart = b, S.lineEnd = P, E = ts(E);
        var B = Ha(m, p);
        E.length ? (k || (g.polygonStart(), k = !0), $r(E, ja, B, a, g)) : B && (k || (g.polygonStart(), k = !0), g.lineStart(), a(null, null, 1, g), g.lineEnd()), k && (g.polygonEnd(), k = !1), E = m = null;
      },
      sphere: function() {
        g.polygonStart(), g.lineStart(), a(null, null, 1, g), g.lineEnd(), g.polygonEnd();
      }
    };
    function T(B, X) {
      var V = l(B, X);
      h(B = V[0], X = V[1]) && g.point(B, X);
    }
    function M(B, X) {
      var V = l(B, X);
      d.point(V[0], V[1]);
    }
    function b() {
      S.point = M, d.lineStart();
    }
    function P() {
      S.point = T, d.lineEnd();
    }
    function O(B, X) {
      I.push([B, X]);
      var V = l(B, X);
      N.point(V[0], V[1]);
    }
    function Y() {
      N.lineStart(), I = [];
    }
    function G() {
      O(I[0][0], I[0][1]), N.lineEnd();
      var B = N.clean(), X = L.result(), V, U = X.length, se, te, re;
      if (I.pop(), m.push(I), I = null, !!U) {
        if (B & 1) {
          if (te = X[0], (se = te.length - 1) > 0) {
            for (k || (g.polygonStart(), k = !0), g.lineStart(), V = 0; V < se; ++V) g.point((re = te[V])[0], re[1]);
            g.lineEnd();
          }
          return;
        }
        U > 1 && B & 2 && X.push(X.pop().concat(X.shift())), E.push(X.filter(Wa));
      }
    }
    return S;
  };
}
function Wa(h) {
  return h.length > 1;
}
function ja(h, u) {
  return ((h = h.x)[0] < 0 ? h[1] - Je - ge : Je - h[1]) - ((u = u.x)[0] < 0 ? u[1] - Je - ge : Je - u[1]);
}
const wr = ns(
  function() {
    return !0;
  },
  Qa,
  Ka,
  [-le, -Je]
);
function Qa(h) {
  var u = NaN, a = NaN, f = NaN, l;
  return {
    lineStart: function() {
      h.lineStart(), l = 1;
    },
    point: function(g, d) {
      var p = g > 0 ? le : -le, L = Ie(g - u);
      Ie(L - le) < ge ? (h.point(u, a = (a + d) / 2 > 0 ? Je : -Je), h.point(f, a), h.lineEnd(), h.lineStart(), h.point(p, a), h.point(g, a), l = 0) : f !== p && L >= le && (Ie(u - f) < ge && (u -= f * ge), Ie(g - p) < ge && (g -= p * ge), a = Ja(u, a, g, d), h.point(f, a), h.lineEnd(), h.lineStart(), h.point(p, a), l = 0), h.point(u = g, a = d), f = p;
    },
    lineEnd: function() {
      h.lineEnd(), u = a = NaN;
    },
    clean: function() {
      return 2 - l;
    }
  };
}
function Ja(h, u, a, f) {
  var l, g, d = pe(h - a);
  return Ie(d) > ge ? Ga((pe(u) * (g = de(f)) * pe(a) - pe(f) * (l = de(u)) * pe(h)) / (l * g * d)) : (u + f) / 2;
}
function Ka(h, u, a, f) {
  var l;
  if (h == null)
    l = a * Je, f.point(-le, l), f.point(0, l), f.point(le, l), f.point(le, 0), f.point(le, -l), f.point(0, -l), f.point(-le, -l), f.point(-le, 0), f.point(-le, l);
  else if (Ie(h[0] - u[0]) > ge) {
    var g = h[0] < u[0] ? le : -le;
    l = a * g / 2, f.point(-g, l), f.point(0, l), f.point(g, l);
  } else
    f.point(u[0], u[1]);
}
function $a(h, u) {
  var a = de(h), f = a > 0, l = Ie(a) > ge;
  function g(k, m, E, I) {
    za(I, h, u, E, k, m);
  }
  function d(k, m) {
    return de(k) * de(m) > a;
  }
  function p(k) {
    var m, E, I, S, T;
    return {
      lineStart: function() {
        S = I = !1, T = 1;
      },
      point: function(M, b) {
        var P = [M, b], O, Y = d(M, b), G = f ? Y ? 0 : N(M, b) : Y ? N(M + (M < 0 ? le : -le), b) : 0;
        if (!m && (S = I = Y) && k.lineStart(), Y !== I && (O = L(m, P), (!O || _n(m, O) || _n(P, O)) && (P[0] += ge, P[1] += ge, Y = d(P[0], P[1]))), Y !== I)
          T = 0, Y ? (k.lineStart(), O = L(P, m), k.point(O[0], O[1])) : (O = L(m, P), k.point(O[0], O[1]), k.lineEnd()), m = O;
        else if (l && m && f ^ Y) {
          var B;
          !(G & E) && (B = L(P, m, !0)) && (T = 0, f ? (k.lineStart(), k.point(B[0][0], B[0][1]), k.point(B[1][0], B[1][1]), k.lineEnd()) : (k.point(B[1][0], B[1][1]), k.lineEnd(), k.lineStart(), k.point(B[0][0], B[0][1])));
        }
        Y && (!m || !_n(m, P)) && k.point(P[0], P[1]), m = P, I = Y, E = G;
      },
      lineEnd: function() {
        I && k.lineEnd(), m = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return T | (S && I) << 1;
      }
    };
  }
  function L(k, m, E) {
    var I = Mt(k), S = Mt(m), T = [1, 0, 0], M = Nn(I, S), b = yn(M, M), P = M[0], O = b - P * P;
    if (!O) return !E && k;
    var Y = a * b / O, G = -a * P / O, B = Nn(T, M), X = mn(T, Y), V = mn(M, G);
    Kn(X, V);
    var U = B, se = yn(X, U), te = yn(U, U), re = se * se - te * (yn(X, X) - 1);
    if (!(re < 0)) {
      var ue = At(re), z = mn(U, (-se - ue) / te);
      if (Kn(z, X), z = ii(z), !E) return z;
      var ne = k[0], oe = m[0], fe = k[1], xe = m[1], ke;
      oe < ne && (ke = ne, ne = oe, oe = ke);
      var H = oe - ne, we = Ie(H - le) < ge, Ee = we || H < ge;
      if (!we && xe < fe && (ke = fe, fe = xe, xe = ke), Ee ? we ? fe + xe > 0 ^ z[1] < (Ie(z[0] - ne) < ge ? fe : xe) : fe <= z[1] && z[1] <= xe : H > le ^ (ne <= z[0] && z[0] <= oe)) {
        var Te = mn(U, (-se + ue) / te);
        return Kn(Te, X), [z, ii(Te)];
      }
    }
  }
  function N(k, m) {
    var E = f ? h : le - h, I = 0;
    return k < -E ? I |= 1 : k > E && (I |= 2), m < -E ? I |= 4 : m > E && (I |= 8), I;
  }
  return ns(d, p, g, f ? [0, -h] : [-le, h - le]);
}
function is(h) {
  return function(u) {
    var a = new ai();
    for (var f in h) a[f] = h[f];
    return a.stream = u, a;
  };
}
function ai() {
}
ai.prototype = {
  constructor: ai,
  point: function(h, u) {
    this.stream.point(h, u);
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
function rs(h, u, a) {
  var f = u[1][0] - u[0][0], l = u[1][1] - u[0][1], g = h.clipExtent && h.clipExtent();
  h.scale(150).translate([0, 0]), g != null && h.clipExtent(null), qa(a, h.stream(Sr));
  var d = Sr.result(), p = Math.min(f / (d[1][0] - d[0][0]), l / (d[1][1] - d[0][1])), L = +u[0][0] + (f - p * (d[1][0] + d[0][0])) / 2, N = +u[0][1] + (l - p * (d[1][1] + d[0][1])) / 2;
  return g != null && h.clipExtent(g), h.scale(p * 150).translate([L, N]);
}
function eu(h, u, a) {
  return rs(h, [[0, 0], u], a);
}
var Lr = 16, tu = de(30 * Ye);
function Rr(h, u) {
  return +u ? iu(h, u) : nu(h);
}
function nu(h) {
  return is({
    point: function(u, a) {
      u = h(u, a), this.stream.point(u[0], u[1]);
    }
  });
}
function iu(h, u) {
  function a(f, l, g, d, p, L, N, k, m, E, I, S, T, M) {
    var b = N - f, P = k - l, O = b * b + P * P;
    if (O > 4 * u && T--) {
      var Y = d + E, G = p + I, B = L + S, X = At(Y * Y + G * G + B * B), V = Et(B /= X), U = Ie(Ie(B) - 1) < ge || Ie(g - m) < ge ? (g + m) / 2 : bt(G, Y), se = h(U, V), te = se[0], re = se[1], ue = te - f, z = re - l, ne = P * ue - b * z;
      (ne * ne / O > u || Ie((b * ue + P * z) / O - 0.5) > 0.3 || d * E + p * I + L * S < tu) && (a(f, l, g, d, p, L, te, re, U, Y /= X, G /= X, B, T, M), M.point(te, re), a(te, re, U, Y, G, B, N, k, m, E, I, S, T, M));
    }
  }
  return function(f) {
    var l, g, d, p, L, N, k, m, E, I, S, T, M = {
      point: b,
      lineStart: P,
      lineEnd: Y,
      polygonStart: function() {
        f.polygonStart(), M.lineStart = G;
      },
      polygonEnd: function() {
        f.polygonEnd(), M.lineStart = P;
      }
    };
    function b(V, U) {
      V = h(V, U), f.point(V[0], V[1]);
    }
    function P() {
      m = NaN, M.point = O, f.lineStart();
    }
    function O(V, U) {
      var se = Mt([V, U]), te = h(V, U);
      a(m, E, k, I, S, T, m = te[0], E = te[1], k = V, I = se[0], S = se[1], T = se[2], Lr, f), f.point(m, E);
    }
    function Y() {
      M.point = b, f.lineEnd();
    }
    function G() {
      P(), M.point = B, M.lineEnd = X;
    }
    function B(V, U) {
      O(l = V, U), g = m, d = E, p = I, L = S, N = T, M.point = O;
    }
    function X() {
      a(m, E, k, I, S, T, g, d, l, p, L, N, Lr, f), M.lineEnd = Y, Y();
    }
    return M;
  };
}
var ru = is({
  point: function(h, u) {
    this.stream.point(h * Ye, u * Ye);
  }
});
function su(h) {
  return au(function() {
    return h;
  })();
}
function au(h) {
  var u, a = 150, f = 480, l = 250, g, d, p = 0, L = 0, N = 0, k = 0, m = 0, E, I, S = null, T = wr, M = null, b, P, O, Y = Nr, G = 0.5, B = Rr(te, G), X, V;
  function U(z) {
    return z = I(z[0] * Ye, z[1] * Ye), [z[0] * a + g, d - z[1] * a];
  }
  function se(z) {
    return z = I.invert((z[0] - g) / a, (d - z[1]) / a), z && [z[0] * ot, z[1] * ot];
  }
  function te(z, ne) {
    return z = u(z, ne), [z[0] * a + g, d - z[1] * a];
  }
  U.stream = function(z) {
    return X && V === z ? X : X = ru(T(E, B(Y(V = z))));
  }, U.clipAngle = function(z) {
    return arguments.length ? (T = +z ? $a(S = z * Ye, 6 * Ye) : (S = null, wr), ue()) : S * ot;
  }, U.clipExtent = function(z) {
    return arguments.length ? (Y = z == null ? (M = b = P = O = null, Nr) : Va(M = +z[0][0], b = +z[0][1], P = +z[1][0], O = +z[1][1]), ue()) : M == null ? null : [[M, b], [P, O]];
  }, U.scale = function(z) {
    return arguments.length ? (a = +z, re()) : a;
  }, U.translate = function(z) {
    return arguments.length ? (f = +z[0], l = +z[1], re()) : [f, l];
  }, U.center = function(z) {
    return arguments.length ? (p = z[0] % 360 * Ye, L = z[1] % 360 * Ye, re()) : [p * ot, L * ot];
  }, U.rotate = function(z) {
    return arguments.length ? (N = z[0] % 360 * Ye, k = z[1] % 360 * Ye, m = z.length > 2 ? z[2] % 360 * Ye : 0, re()) : [N * ot, k * ot, m * ot];
  }, U.precision = function(z) {
    return arguments.length ? (B = Rr(te, G = z * z), ue()) : At(G);
  }, U.fitExtent = function(z, ne) {
    return rs(U, z, ne);
  }, U.fitSize = function(z, ne) {
    return eu(U, z, ne);
  };
  function re() {
    I = Jr(E = Ya(N, k, m), u);
    var z = u(p, L);
    return g = f - z[0] * a, d = l + z[1] * a, ue();
  }
  function ue() {
    return X = V = null, U;
  }
  return function() {
    return u = h.apply(this, arguments), U.invert = u.invert && se, re();
  };
}
function ss(h) {
  return function(u, a) {
    var f = de(u), l = de(a), g = h(f * l);
    return [
      g * l * pe(u),
      g * pe(a)
    ];
  };
}
function as(h) {
  return function(u, a) {
    var f = At(u * u + a * a), l = h(f), g = pe(l), d = de(l);
    return [
      bt(u * g, f * d),
      Et(f && a * g / f)
    ];
  };
}
var uu = ss(function(h) {
  return At(2 / (1 + h));
});
uu.invert = as(function(h) {
  return 2 * Et(h / 2);
});
var us = ss(function(h) {
  return (h = Qr(h)) && h / pe(h);
});
us.invert = as(function(h) {
  return h;
});
function ou() {
  return su(us).scale(79.4188).clipAngle(180 - 1e-3);
}
function Tr(h, u) {
  return [h, u];
}
Tr.invert = Tr;
var { BufferOp: lu, GeoJSONReader: hu, GeoJSONWriter: cu } = Fa;
function fu(h, u, a) {
  a = a || {};
  var f = a.units || "kilometers", l = a.steps || 8;
  if (!h)
    throw new Error("geojson is required");
  if (typeof a != "object")
    throw new Error("options must be an object");
  if (typeof l != "number")
    throw new Error("steps must be an number");
  if (u === void 0)
    throw new Error("radius is required");
  if (l <= 0)
    throw new Error("steps must be greater than 0");
  var g = [];
  switch (h.type) {
    case "GeometryCollection":
      return fi(h, function(d) {
        var p = xn(d, u, f, l);
        p && g.push(p);
      }), Qt(g);
    case "FeatureCollection":
      return gr(h, function(d) {
        var p = xn(d, u, f, l);
        p && gr(p, function(L) {
          L && g.push(L);
        });
      }), Qt(g);
  }
  return xn(h, u, f, l);
}
function xn(h, u, a, f) {
  var l = h.properties || {}, g = h.type === "Feature" ? h.geometry : h;
  if (g.type === "GeometryCollection") {
    var d = [];
    return fi(h, function(T) {
      var M = xn(T, u, a, f);
      M && d.push(M);
    }), Qt(d);
  }
  var p = gu(g), L = {
    type: g.type,
    coordinates: ls(g.coordinates, p)
  }, N = new hu(), k = N.read(L), m = Ca(Oa(u, a), "meters"), E = lu.bufferOp(k, m, f), I = new cu();
  if (E = I.write(E), !os(E.coordinates)) {
    var S = {
      type: E.type,
      coordinates: hs(E.coordinates, p)
    };
    return Tn(S, l);
  }
}
function os(h) {
  return Array.isArray(h[0]) ? os(h[0]) : isNaN(h[0]);
}
function ls(h, u) {
  return typeof h[0] != "object" ? u(h) : h.map(function(a) {
    return ls(a, u);
  });
}
function hs(h, u) {
  return typeof h[0] != "object" ? u.invert(h) : h.map(function(a) {
    return hs(a, u);
  });
}
function gu(h) {
  var u = Ma(h).geometry.coordinates, a = [-u[0], -u[1]];
  return ou().rotate(a).scale(Ce);
}
var vu = fu;
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
function yu(h, u) {
  var a = { label: 0, sent: function() {
    if (g[0] & 1) throw g[1];
    return g[1];
  }, trys: [], ops: [] }, f, l, g, d;
  return d = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
    return this;
  }), d;
  function p(N) {
    return function(k) {
      return L([N, k]);
    };
  }
  function L(N) {
    if (f) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (f = 1, l && (g = N[0] & 2 ? l.return : N[0] ? l.throw || ((g = l.return) && g.call(l), 0) : l.next) && !(g = g.call(l, N[1])).done) return g;
      switch (l = 0, g && (N = [N[0] & 2, g.value]), N[0]) {
        case 0:
        case 1:
          g = N;
          break;
        case 4:
          return a.label++, { value: N[1], done: !1 };
        case 5:
          a.label++, l = N[1], N = [0];
          continue;
        case 7:
          N = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (g = a.trys, !(g = g.length > 0 && g[g.length - 1]) && (N[0] === 6 || N[0] === 2)) {
            a = 0;
            continue;
          }
          if (N[0] === 3 && (!g || N[1] > g[0] && N[1] < g[3])) {
            a.label = N[1];
            break;
          }
          if (N[0] === 6 && a.label < g[1]) {
            a.label = g[1], g = N;
            break;
          }
          if (g && a.label < g[2]) {
            a.label = g[2], a.ops.push(N);
            break;
          }
          g[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      N = u.call(h, a);
    } catch (k) {
      N = [6, k], l = 0;
    } finally {
      f = g = 0;
    }
    if (N[0] & 5) throw N[1];
    return { value: N[0] ? N[1] : void 0, done: !0 };
  }
}
var ft = (
  /** @class */
  /* @__PURE__ */ function() {
    function h(u, a) {
      this.next = null, this.key = u, this.data = a, this.left = null, this.right = null;
    }
    return h;
  }()
);
function mu(h, u) {
  return h > u ? 1 : h < u ? -1 : 0;
}
function lt(h, u, a) {
  for (var f = new ft(null, null), l = f, g = f; ; ) {
    var d = a(h, u.key);
    if (d < 0) {
      if (u.left === null)
        break;
      if (a(h, u.left.key) < 0) {
        var p = u.left;
        if (u.left = p.right, p.right = u, u = p, u.left === null)
          break;
      }
      g.left = u, g = u, u = u.left;
    } else if (d > 0) {
      if (u.right === null)
        break;
      if (a(h, u.right.key) > 0) {
        var p = u.right;
        if (u.right = p.left, p.left = u, u = p, u.right === null)
          break;
      }
      l.right = u, l = u, u = u.right;
    } else
      break;
  }
  return l.right = u.left, g.left = u.right, u.left = f.right, u.right = f.left, u;
}
function ei(h, u, a, f) {
  var l = new ft(h, u);
  if (a === null)
    return l.left = l.right = null, l;
  a = lt(h, a, f);
  var g = f(h, a.key);
  return g < 0 ? (l.left = a.left, l.right = a, a.left = null) : g >= 0 && (l.right = a.right, l.left = a, a.right = null), l;
}
function Cr(h, u, a) {
  var f = null, l = null;
  if (u) {
    u = lt(h, u, a);
    var g = a(u.key, h);
    g === 0 ? (f = u.left, l = u.right) : g < 0 ? (l = u.right, u.right = null, f = u) : (f = u.left, u.left = null, l = u);
  }
  return { left: f, right: l };
}
function du(h, u, a) {
  return u === null ? h : (h === null || (u = lt(h.key, u, a), u.left = h), u);
}
function ui(h, u, a, f, l) {
  if (h) {
    f("" + u + (a ? "└── " : "├── ") + l(h) + `
`);
    var g = u + (a ? "    " : "│   ");
    h.left && ui(h.left, g, !1, f, l), h.right && ui(h.right, g, !0, f, l);
  }
}
var gi = (
  /** @class */
  function() {
    function h(u) {
      u === void 0 && (u = mu), this._root = null, this._size = 0, this._comparator = u;
    }
    return h.prototype.insert = function(u, a) {
      return this._size++, this._root = ei(u, a, this._root, this._comparator);
    }, h.prototype.add = function(u, a) {
      var f = new ft(u, a);
      this._root === null && (f.left = f.right = null, this._size++, this._root = f);
      var l = this._comparator, g = lt(u, this._root, l), d = l(u, g.key);
      return d === 0 ? this._root = g : (d < 0 ? (f.left = g.left, f.right = g, g.left = null) : d > 0 && (f.right = g.right, f.left = g, g.right = null), this._size++, this._root = f), this._root;
    }, h.prototype.remove = function(u) {
      this._root = this._remove(u, this._root, this._comparator);
    }, h.prototype._remove = function(u, a, f) {
      var l;
      if (a === null)
        return null;
      a = lt(u, a, f);
      var g = f(u, a.key);
      return g === 0 ? (a.left === null ? l = a.right : (l = lt(u, a.left, f), l.right = a.right), this._size--, l) : a;
    }, h.prototype.pop = function() {
      var u = this._root;
      if (u) {
        for (; u.left; )
          u = u.left;
        return this._root = lt(u.key, this._root, this._comparator), this._root = this._remove(u.key, this._root, this._comparator), { key: u.key, data: u.data };
      }
      return null;
    }, h.prototype.findStatic = function(u) {
      for (var a = this._root, f = this._comparator; a; ) {
        var l = f(u, a.key);
        if (l === 0)
          return a;
        l < 0 ? a = a.left : a = a.right;
      }
      return null;
    }, h.prototype.find = function(u) {
      return this._root && (this._root = lt(u, this._root, this._comparator), this._comparator(u, this._root.key) !== 0) ? null : this._root;
    }, h.prototype.contains = function(u) {
      for (var a = this._root, f = this._comparator; a; ) {
        var l = f(u, a.key);
        if (l === 0)
          return !0;
        l < 0 ? a = a.left : a = a.right;
      }
      return !1;
    }, h.prototype.forEach = function(u, a) {
      for (var f = this._root, l = [], g = !1; !g; )
        f !== null ? (l.push(f), f = f.left) : l.length !== 0 ? (f = l.pop(), u.call(a, f), f = f.right) : g = !0;
      return this;
    }, h.prototype.range = function(u, a, f, l) {
      for (var g = [], d = this._comparator, p = this._root, L; g.length !== 0 || p; )
        if (p)
          g.push(p), p = p.left;
        else {
          if (p = g.pop(), L = d(p.key, a), L > 0)
            break;
          if (d(p.key, u) >= 0 && f.call(l, p))
            return this;
          p = p.right;
        }
      return this;
    }, h.prototype.keys = function() {
      var u = [];
      return this.forEach(function(a) {
        var f = a.key;
        return u.push(f);
      }), u;
    }, h.prototype.values = function() {
      var u = [];
      return this.forEach(function(a) {
        var f = a.data;
        return u.push(f);
      }), u;
    }, h.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, h.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, h.prototype.minNode = function(u) {
      if (u === void 0 && (u = this._root), u)
        for (; u.left; )
          u = u.left;
      return u;
    }, h.prototype.maxNode = function(u) {
      if (u === void 0 && (u = this._root), u)
        for (; u.right; )
          u = u.right;
      return u;
    }, h.prototype.at = function(u) {
      for (var a = this._root, f = !1, l = 0, g = []; !f; )
        if (a)
          g.push(a), a = a.left;
        else if (g.length > 0) {
          if (a = g.pop(), l === u)
            return a;
          l++, a = a.right;
        } else
          f = !0;
      return null;
    }, h.prototype.next = function(u) {
      var a = this._root, f = null;
      if (u.right) {
        for (f = u.right; f.left; )
          f = f.left;
        return f;
      }
      for (var l = this._comparator; a; ) {
        var g = l(u.key, a.key);
        if (g === 0)
          break;
        g < 0 ? (f = a, a = a.left) : a = a.right;
      }
      return f;
    }, h.prototype.prev = function(u) {
      var a = this._root, f = null;
      if (u.left !== null) {
        for (f = u.left; f.right; )
          f = f.right;
        return f;
      }
      for (var l = this._comparator; a; ) {
        var g = l(u.key, a.key);
        if (g === 0)
          break;
        g < 0 ? a = a.left : (f = a, a = a.right);
      }
      return f;
    }, h.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, h.prototype.toList = function() {
      return _u(this._root);
    }, h.prototype.load = function(u, a, f) {
      a === void 0 && (a = []), f === void 0 && (f = !1);
      var l = u.length, g = this._comparator;
      if (f && hi(u, a, 0, l - 1, g), this._root === null)
        this._root = oi(u, a, 0, l), this._size = l;
      else {
        var d = xu(this.toList(), pu(u, a), g);
        l = this._size + l, this._root = li({ head: d }, 0, l);
      }
      return this;
    }, h.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(h.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(h.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), h.prototype.toString = function(u) {
      u === void 0 && (u = function(f) {
        return String(f.key);
      });
      var a = [];
      return ui(this._root, "", !0, function(f) {
        return a.push(f);
      }, u), a.join("");
    }, h.prototype.update = function(u, a, f) {
      var l = this._comparator, g = Cr(u, this._root, l), d = g.left, p = g.right;
      l(u, a) < 0 ? p = ei(a, f, p, l) : d = ei(a, f, d, l), this._root = du(d, p, l);
    }, h.prototype.split = function(u) {
      return Cr(u, this._root, this._comparator);
    }, h.prototype[Symbol.iterator] = function() {
      var u, a, f;
      return yu(this, function(l) {
        switch (l.label) {
          case 0:
            u = this._root, a = [], f = !1, l.label = 1;
          case 1:
            return f ? [3, 6] : u === null ? [3, 2] : (a.push(u), u = u.left, [3, 5]);
          case 2:
            return a.length === 0 ? [3, 4] : (u = a.pop(), [4, u]);
          case 3:
            return l.sent(), u = u.right, [3, 5];
          case 4:
            f = !0, l.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, h;
  }()
);
function oi(h, u, a, f) {
  var l = f - a;
  if (l > 0) {
    var g = a + Math.floor(l / 2), d = h[g], p = u[g], L = new ft(d, p);
    return L.left = oi(h, u, a, g), L.right = oi(h, u, g + 1, f), L;
  }
  return null;
}
function pu(h, u) {
  for (var a = new ft(null, null), f = a, l = 0; l < h.length; l++)
    f = f.next = new ft(h[l], u[l]);
  return f.next = null, a.next;
}
function _u(h) {
  for (var u = h, a = [], f = !1, l = new ft(null, null), g = l; !f; )
    u ? (a.push(u), u = u.left) : a.length > 0 ? (u = g = g.next = a.pop(), u = u.right) : f = !0;
  return g.next = null, l.next;
}
function li(h, u, a) {
  var f = a - u;
  if (f > 0) {
    var l = u + Math.floor(f / 2), g = li(h, u, l), d = h.head;
    return d.left = g, h.head = h.head.next, d.right = li(h, l + 1, a), d;
  }
  return null;
}
function xu(h, u, a) {
  for (var f = new ft(null, null), l = f, g = h, d = u; g !== null && d !== null; )
    a(g.key, d.key) < 0 ? (l.next = g, g = g.next) : (l.next = d, d = d.next), l = l.next;
  return g !== null ? l.next = g : d !== null && (l.next = d), f.next;
}
function hi(h, u, a, f, l) {
  if (!(a >= f)) {
    for (var g = h[a + f >> 1], d = a - 1, p = f + 1; ; ) {
      do
        d++;
      while (l(h[d], g) < 0);
      do
        p--;
      while (l(h[p], g) > 0);
      if (d >= p)
        break;
      var L = h[d];
      h[d] = h[p], h[p] = L, L = u[d], u[d] = u[p], u[p] = L;
    }
    hi(h, u, a, p, l), hi(h, u, p + 1, f, l);
  }
}
const st = 11102230246251565e-32, Se = 134217729, ku = (3 + 8 * st) * st;
function ti(h, u, a, f, l) {
  let g, d, p, L, N = u[0], k = f[0], m = 0, E = 0;
  k > N == k > -N ? (g = N, N = u[++m]) : (g = k, k = f[++E]);
  let I = 0;
  if (m < h && E < a)
    for (k > N == k > -N ? (d = N + g, p = g - (d - N), N = u[++m]) : (d = k + g, p = g - (d - k), k = f[++E]), g = d, p !== 0 && (l[I++] = p); m < h && E < a; )
      k > N == k > -N ? (d = g + N, L = d - g, p = g - (d - L) + (N - L), N = u[++m]) : (d = g + k, L = d - g, p = g - (d - L) + (k - L), k = f[++E]), g = d, p !== 0 && (l[I++] = p);
  for (; m < h; )
    d = g + N, L = d - g, p = g - (d - L) + (N - L), N = u[++m], g = d, p !== 0 && (l[I++] = p);
  for (; E < a; )
    d = g + k, L = d - g, p = g - (d - L) + (k - L), k = f[++E], g = d, p !== 0 && (l[I++] = p);
  return (g !== 0 || I === 0) && (l[I++] = g), I;
}
function Eu(h, u) {
  let a = u[0];
  for (let f = 1; f < h; f++) a += u[f];
  return a;
}
function $t(h) {
  return new Float64Array(h);
}
const Iu = (3 + 16 * st) * st, Nu = (2 + 12 * st) * st, Su = (9 + 64 * st) * st * st, Ot = $t(4), Or = $t(8), br = $t(12), Mr = $t(16), Re = $t(4);
function wu(h, u, a, f, l, g, d) {
  let p, L, N, k, m, E, I, S, T, M, b, P, O, Y, G, B, X, V;
  const U = h - l, se = a - l, te = u - g, re = f - g;
  Y = U * re, E = Se * U, I = E - (E - U), S = U - I, E = Se * re, T = E - (E - re), M = re - T, G = S * M - (Y - I * T - S * T - I * M), B = te * se, E = Se * te, I = E - (E - te), S = te - I, E = Se * se, T = E - (E - se), M = se - T, X = S * M - (B - I * T - S * T - I * M), b = G - X, m = G - b, Ot[0] = G - (b + m) + (m - X), P = Y + b, m = P - Y, O = Y - (P - m) + (b - m), b = O - B, m = O - b, Ot[1] = O - (b + m) + (m - B), V = P + b, m = V - P, Ot[2] = P - (V - m) + (b - m), Ot[3] = V;
  let ue = Eu(4, Ot), z = Nu * d;
  if (ue >= z || -ue >= z || (m = h - U, p = h - (U + m) + (m - l), m = a - se, N = a - (se + m) + (m - l), m = u - te, L = u - (te + m) + (m - g), m = f - re, k = f - (re + m) + (m - g), p === 0 && L === 0 && N === 0 && k === 0) || (z = Su * d + ku * Math.abs(ue), ue += U * k + re * p - (te * N + se * L), ue >= z || -ue >= z)) return ue;
  Y = p * re, E = Se * p, I = E - (E - p), S = p - I, E = Se * re, T = E - (E - re), M = re - T, G = S * M - (Y - I * T - S * T - I * M), B = L * se, E = Se * L, I = E - (E - L), S = L - I, E = Se * se, T = E - (E - se), M = se - T, X = S * M - (B - I * T - S * T - I * M), b = G - X, m = G - b, Re[0] = G - (b + m) + (m - X), P = Y + b, m = P - Y, O = Y - (P - m) + (b - m), b = O - B, m = O - b, Re[1] = O - (b + m) + (m - B), V = P + b, m = V - P, Re[2] = P - (V - m) + (b - m), Re[3] = V;
  const ne = ti(4, Ot, 4, Re, Or);
  Y = U * k, E = Se * U, I = E - (E - U), S = U - I, E = Se * k, T = E - (E - k), M = k - T, G = S * M - (Y - I * T - S * T - I * M), B = te * N, E = Se * te, I = E - (E - te), S = te - I, E = Se * N, T = E - (E - N), M = N - T, X = S * M - (B - I * T - S * T - I * M), b = G - X, m = G - b, Re[0] = G - (b + m) + (m - X), P = Y + b, m = P - Y, O = Y - (P - m) + (b - m), b = O - B, m = O - b, Re[1] = O - (b + m) + (m - B), V = P + b, m = V - P, Re[2] = P - (V - m) + (b - m), Re[3] = V;
  const oe = ti(ne, Or, 4, Re, br);
  Y = p * k, E = Se * p, I = E - (E - p), S = p - I, E = Se * k, T = E - (E - k), M = k - T, G = S * M - (Y - I * T - S * T - I * M), B = L * N, E = Se * L, I = E - (E - L), S = L - I, E = Se * N, T = E - (E - N), M = N - T, X = S * M - (B - I * T - S * T - I * M), b = G - X, m = G - b, Re[0] = G - (b + m) + (m - X), P = Y + b, m = P - Y, O = Y - (P - m) + (b - m), b = O - B, m = O - b, Re[1] = O - (b + m) + (m - B), V = P + b, m = V - P, Re[2] = P - (V - m) + (b - m), Re[3] = V;
  const fe = ti(oe, br, 4, Re, Mr);
  return Mr[fe - 1];
}
function Lu(h, u, a, f, l, g) {
  const d = (u - g) * (a - l), p = (h - l) * (f - g), L = d - p, N = Math.abs(d + p);
  return Math.abs(L) >= Iu * N ? L : -wu(h, u, a, f, l, g, N);
}
const Zt = (h, u) => h.ll.x <= u.x && u.x <= h.ur.x && h.ll.y <= u.y && u.y <= h.ur.y, ci = (h, u) => {
  if (u.ur.x < h.ll.x || h.ur.x < u.ll.x || u.ur.y < h.ll.y || h.ur.y < u.ll.y) return null;
  const a = h.ll.x < u.ll.x ? u.ll.x : h.ll.x, f = h.ur.x < u.ur.x ? h.ur.x : u.ur.x, l = h.ll.y < u.ll.y ? u.ll.y : h.ll.y, g = h.ur.y < u.ur.y ? h.ur.y : u.ur.y;
  return {
    ll: {
      x: a,
      y: l
    },
    ur: {
      x: f,
      y: g
    }
  };
};
let ht = Number.EPSILON;
ht === void 0 && (ht = Math.pow(2, -52));
const Ru = ht * ht, Pr = (h, u) => {
  if (-ht < h && h < ht && -ht < u && u < ht)
    return 0;
  const a = h - u;
  return a * a < Ru * h * u ? 0 : h < u ? -1 : 1;
};
class Tu {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Ar(), this.yRounder = new Ar();
  }
  round(u, a) {
    return {
      x: this.xRounder.round(u),
      y: this.yRounder.round(a)
    };
  }
}
class Ar {
  constructor() {
    this.tree = new gi(), this.round(0);
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
    if (f !== null && Pr(a.key, f.key) === 0)
      return this.tree.remove(u), f.key;
    const l = this.tree.next(a);
    return l !== null && Pr(a.key, l.key) === 0 ? (this.tree.remove(u), l.key) : u;
  }
}
const Kt = new Tu(), kn = (h, u) => h.x * u.y - h.y * u.x, cs = (h, u) => h.x * u.x + h.y * u.y, Dr = (h, u, a) => {
  const f = Lu(h.x, h.y, u.x, u.y, a.x, a.y);
  return f > 0 ? -1 : f < 0 ? 1 : 0;
}, Ln = (h) => Math.sqrt(cs(h, h)), Cu = (h, u, a) => {
  const f = {
    x: u.x - h.x,
    y: u.y - h.y
  }, l = {
    x: a.x - h.x,
    y: a.y - h.y
  };
  return kn(l, f) / Ln(l) / Ln(f);
}, Ou = (h, u, a) => {
  const f = {
    x: u.x - h.x,
    y: u.y - h.y
  }, l = {
    x: a.x - h.x,
    y: a.y - h.y
  };
  return cs(l, f) / Ln(l) / Ln(f);
}, Fr = (h, u, a) => u.y === 0 ? null : {
  x: h.x + u.x / u.y * (a - h.y),
  y: a
}, Gr = (h, u, a) => u.x === 0 ? null : {
  x: a,
  y: h.y + u.y / u.x * (a - h.x)
}, bu = (h, u, a, f) => {
  if (u.x === 0) return Gr(a, f, h.x);
  if (f.x === 0) return Gr(h, u, a.x);
  if (u.y === 0) return Fr(a, f, h.y);
  if (f.y === 0) return Fr(h, u, a.y);
  const l = kn(u, f);
  if (l == 0) return null;
  const g = {
    x: a.x - h.x,
    y: a.y - h.y
  }, d = kn(g, u) / l, p = kn(g, f) / l, L = h.x + p * u.x, N = a.x + d * f.x, k = h.y + p * u.y, m = a.y + d * f.y, E = (L + N) / 2, I = (k + m) / 2;
  return {
    x: E,
    y: I
  };
};
class ze {
  // for ordering sweep events in the sweep event queue
  static compare(u, a) {
    const f = ze.comparePoints(u.point, a.point);
    return f !== 0 ? f : (u.point !== a.point && u.link(a), u.isLeft !== a.isLeft ? u.isLeft ? 1 : -1 : ct.compare(u.segment, a.segment));
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
    for (let f = 0, l = a.length; f < l; f++) {
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
        for (let l = a + 1; l < u; l++) {
          const g = this.point.events[l];
          g.consumedBy === void 0 && f.otherSE.point.events === g.otherSE.point.events && f.segment.consume(g.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const u = [];
    for (let a = 0, f = this.point.events.length; a < f; a++) {
      const l = this.point.events[a];
      l !== this && !l.segment.ringOut && l.segment.isInResult() && u.push(l);
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
    const a = /* @__PURE__ */ new Map(), f = (l) => {
      const g = l.otherSE;
      a.set(l, {
        sine: Cu(this.point, u.point, g.point),
        cosine: Ou(this.point, u.point, g.point)
      });
    };
    return (l, g) => {
      a.has(l) || f(l), a.has(g) || f(g);
      const {
        sine: d,
        cosine: p
      } = a.get(l), {
        sine: L,
        cosine: N
      } = a.get(g);
      return d >= 0 && L >= 0 ? p < N ? 1 : p > N ? -1 : 0 : d < 0 && L < 0 ? p < N ? -1 : p > N ? 1 : 0 : L < d ? -1 : L > d ? 1 : 0;
    };
  }
}
let Mu = 0;
class ct {
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
    const f = u.leftSE.point.x, l = a.leftSE.point.x, g = u.rightSE.point.x, d = a.rightSE.point.x;
    if (d < f) return 1;
    if (g < l) return -1;
    const p = u.leftSE.point.y, L = a.leftSE.point.y, N = u.rightSE.point.y, k = a.rightSE.point.y;
    if (f < l) {
      if (L < p && L < N) return 1;
      if (L > p && L > N) return -1;
      const m = u.comparePoint(a.leftSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
      const E = a.comparePoint(u.rightSE.point);
      return E !== 0 ? E : -1;
    }
    if (f > l) {
      if (p < L && p < k) return -1;
      if (p > L && p > k) return 1;
      const m = a.comparePoint(u.leftSE.point);
      if (m !== 0) return m;
      const E = u.comparePoint(a.rightSE.point);
      return E < 0 ? 1 : E > 0 ? -1 : 1;
    }
    if (p < L) return -1;
    if (p > L) return 1;
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
      const m = N - p, E = g - f, I = k - L, S = d - l;
      if (m > E && I < S) return 1;
      if (m < E && I > S) return -1;
    }
    return g > d ? 1 : g < d || N < k ? -1 : N > k ? 1 : u.id < a.id ? -1 : u.id > a.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(u, a, f, l) {
    this.id = ++Mu, this.leftSE = u, u.segment = this, u.otherSE = a, this.rightSE = a, a.segment = this, a.otherSE = u, this.rings = f, this.windings = l;
  }
  static fromRing(u, a, f) {
    let l, g, d;
    const p = ze.comparePoints(u, a);
    if (p < 0)
      l = u, g = a, d = 1;
    else if (p > 0)
      l = a, g = u, d = -1;
    else throw new Error(`Tried to create degenerate segment at [${u.x}, ${u.y}]`);
    const L = new ze(l, !0), N = new ze(g, !1);
    return new ct(L, N, [f], [d]);
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
    const a = this.leftSE.point, f = this.rightSE.point, l = this.vector();
    if (a.x === f.x)
      return u.x === a.x ? 0 : u.x < a.x ? 1 : -1;
    const g = (u.y - a.y) / l.y, d = a.x + g * l.x;
    if (u.x === d) return 0;
    const p = (u.x - a.x) / l.x, L = a.y + p * l.y;
    return u.y === L ? 0 : u.y < L ? -1 : 1;
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
    const a = this.bbox(), f = u.bbox(), l = ci(a, f);
    if (l === null) return null;
    const g = this.leftSE.point, d = this.rightSE.point, p = u.leftSE.point, L = u.rightSE.point, N = Zt(a, p) && this.comparePoint(p) === 0, k = Zt(f, g) && u.comparePoint(g) === 0, m = Zt(a, L) && this.comparePoint(L) === 0, E = Zt(f, d) && u.comparePoint(d) === 0;
    if (k && N)
      return E && !m ? d : !E && m ? L : null;
    if (k)
      return m && g.x === L.x && g.y === L.y ? null : g;
    if (N)
      return E && d.x === p.x && d.y === p.y ? null : p;
    if (E && m) return null;
    if (E) return d;
    if (m) return L;
    const I = bu(g, this.vector(), p, u.vector());
    return I === null || !Zt(l, I) ? null : Kt.round(I.x, I.y);
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
    const a = [], f = u.events !== void 0, l = new ze(u, !0), g = new ze(u, !1), d = this.rightSE;
    this.replaceRightSE(g), a.push(g), a.push(l);
    const p = new ct(l, d, this.rings.slice(), this.windings.slice());
    return ze.comparePoints(p.leftSE.point, p.rightSE.point) > 0 && p.swapEvents(), ze.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), f && (l.checkForConsuming(), g.checkForConsuming()), a;
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
    const l = ct.compare(a, f);
    if (l !== 0) {
      if (l > 0) {
        const g = a;
        a = f, f = g;
      }
      if (a.prev === f) {
        const g = a;
        a = f, f = g;
      }
      for (let g = 0, d = f.rings.length; g < d; g++) {
        const p = f.rings[g], L = f.windings[g], N = a.rings.indexOf(p);
        N === -1 ? (a.rings.push(p), a.windings.push(L)) : a.windings[N] += L;
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
    const a = this._afterState.rings, f = this._afterState.windings, l = this._afterState.multiPolys;
    for (let p = 0, L = this.rings.length; p < L; p++) {
      const N = this.rings[p], k = this.windings[p], m = a.indexOf(N);
      m === -1 ? (a.push(N), f.push(k)) : f[m] += k;
    }
    const g = [], d = [];
    for (let p = 0, L = a.length; p < L; p++) {
      if (f[p] === 0) continue;
      const N = a[p], k = N.poly;
      if (d.indexOf(k) === -1)
        if (N.isExterior) g.push(k);
        else {
          d.indexOf(k) === -1 && d.push(k);
          const m = g.indexOf(N.poly);
          m !== -1 && g.splice(m, 1);
        }
    }
    for (let p = 0, L = g.length; p < L; p++) {
      const N = g[p].multiPoly;
      l.indexOf(N) === -1 && l.push(N);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const u = this.beforeState().multiPolys, a = this.afterState().multiPolys;
    switch (Ve.type) {
      case "union": {
        const f = u.length === 0, l = a.length === 0;
        this._isInResult = f !== l;
        break;
      }
      case "intersection": {
        let f, l;
        u.length < a.length ? (f = u.length, l = a.length) : (f = a.length, l = u.length), this._isInResult = l === Ve.numMultiPolys && f < l;
        break;
      }
      case "xor": {
        const f = Math.abs(u.length - a.length);
        this._isInResult = f % 2 === 1;
        break;
      }
      case "difference": {
        const f = (l) => l.length === 1 && l[0].isSubject;
        this._isInResult = f(u) !== f(a);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${Ve.type}`);
    }
    return this._isInResult;
  }
}
class qr {
  constructor(u, a, f) {
    if (!Array.isArray(u) || u.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = a, this.isExterior = f, this.segments = [], typeof u[0][0] != "number" || typeof u[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const l = Kt.round(u[0][0], u[0][1]);
    this.bbox = {
      ll: {
        x: l.x,
        y: l.y
      },
      ur: {
        x: l.x,
        y: l.y
      }
    };
    let g = l;
    for (let d = 1, p = u.length; d < p; d++) {
      if (typeof u[d][0] != "number" || typeof u[d][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let L = Kt.round(u[d][0], u[d][1]);
      L.x === g.x && L.y === g.y || (this.segments.push(ct.fromRing(g, L, this)), L.x < this.bbox.ll.x && (this.bbox.ll.x = L.x), L.y < this.bbox.ll.y && (this.bbox.ll.y = L.y), L.x > this.bbox.ur.x && (this.bbox.ur.x = L.x), L.y > this.bbox.ur.y && (this.bbox.ur.y = L.y), g = L);
    }
    (l.x !== g.x || l.y !== g.y) && this.segments.push(ct.fromRing(g, l, this));
  }
  getSweepEvents() {
    const u = [];
    for (let a = 0, f = this.segments.length; a < f; a++) {
      const l = this.segments[a];
      u.push(l.leftSE), u.push(l.rightSE);
    }
    return u;
  }
}
class Pu {
  constructor(u, a) {
    if (!Array.isArray(u))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new qr(u[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let f = 1, l = u.length; f < l; f++) {
      const g = new qr(u[f], this, !1);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.interiorRings.push(g);
    }
    this.multiPoly = a;
  }
  getSweepEvents() {
    const u = this.exteriorRing.getSweepEvents();
    for (let a = 0, f = this.interiorRings.length; a < f; a++) {
      const l = this.interiorRings[a].getSweepEvents();
      for (let g = 0, d = l.length; g < d; g++)
        u.push(l[g]);
    }
    return u;
  }
}
class Yr {
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
    for (let f = 0, l = u.length; f < l; f++) {
      const g = new Pu(u[f], this);
      g.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = g.bbox.ll.x), g.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = g.bbox.ll.y), g.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = g.bbox.ur.x), g.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = g.bbox.ur.y), this.polys.push(g);
    }
    this.isSubject = a;
  }
  getSweepEvents() {
    const u = [];
    for (let a = 0, f = this.polys.length; a < f; a++) {
      const l = this.polys[a].getSweepEvents();
      for (let g = 0, d = l.length; g < d; g++)
        u.push(l[g]);
    }
    return u;
  }
}
class Rn {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(u) {
    const a = [];
    for (let f = 0, l = u.length; f < l; f++) {
      const g = u[f];
      if (!g.isInResult() || g.ringOut) continue;
      let d = null, p = g.leftSE, L = g.rightSE;
      const N = [p], k = p.point, m = [];
      for (; d = p, p = L, N.push(p), p.point !== k; )
        for (; ; ) {
          const E = p.getAvailableLinkedEvents();
          if (E.length === 0) {
            const T = N[0].point, M = N[N.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${T.x}, ${T.y}]. Last matching segment found ends at [${M.x}, ${M.y}].`);
          }
          if (E.length === 1) {
            L = E[0].otherSE;
            break;
          }
          let I = null;
          for (let T = 0, M = m.length; T < M; T++)
            if (m[T].point === p.point) {
              I = T;
              break;
            }
          if (I !== null) {
            const T = m.splice(I)[0], M = N.splice(T.index);
            M.unshift(M[0].otherSE), a.push(new Rn(M.reverse()));
            continue;
          }
          m.push({
            index: N.length,
            point: p.point
          });
          const S = p.getLeftmostComparator(d);
          L = E.sort(S)[0].otherSE;
          break;
        }
      a.push(new Rn(N));
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
    for (let N = 1, k = this.events.length - 1; N < k; N++) {
      const m = this.events[N].point, E = this.events[N + 1].point;
      Dr(m, u, E) !== 0 && (a.push(m), u = m);
    }
    if (a.length === 1) return null;
    const f = a[0], l = a[1];
    Dr(f, u, l) === 0 && a.shift(), a.push(a[0]);
    const g = this.isExteriorRing() ? 1 : -1, d = this.isExteriorRing() ? 0 : a.length - 1, p = this.isExteriorRing() ? a.length : -1, L = [];
    for (let N = d; N != p; N += g) L.push([a[N].x, a[N].y]);
    return L;
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
    for (let l = 1, g = this.events.length; l < g; l++) {
      const d = this.events[l];
      ze.compare(u, d) > 0 && (u = d);
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
class zr {
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
      const l = this.interiorRings[a].getGeom();
      l !== null && u.push(l);
    }
    return u;
  }
}
class Au {
  constructor(u) {
    this.rings = u, this.polys = this._composePolys(u);
  }
  getGeom() {
    const u = [];
    for (let a = 0, f = this.polys.length; a < f; a++) {
      const l = this.polys[a].getGeom();
      l !== null && u.push(l);
    }
    return u;
  }
  _composePolys(u) {
    const a = [];
    for (let f = 0, l = u.length; f < l; f++) {
      const g = u[f];
      if (!g.poly)
        if (g.isExteriorRing()) a.push(new zr(g));
        else {
          const d = g.enclosingRing();
          d.poly || a.push(new zr(d)), d.poly.addInterior(g);
        }
    }
    return a;
  }
}
class Du {
  constructor(u) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ct.compare;
    this.queue = u, this.tree = new gi(a), this.segments = [];
  }
  process(u) {
    const a = u.segment, f = [];
    if (u.consumedBy)
      return u.isLeft ? this.queue.remove(u.otherSE) : this.tree.remove(a), f;
    const l = u.isLeft ? this.tree.add(a) : this.tree.find(a);
    if (!l) throw new Error(`Unable to find segment #${a.id} [${a.leftSE.point.x}, ${a.leftSE.point.y}] -> [${a.rightSE.point.x}, ${a.rightSE.point.y}] in SweepLine tree.`);
    let g = l, d = l, p, L;
    for (; p === void 0; )
      g = this.tree.prev(g), g === null ? p = null : g.key.consumedBy === void 0 && (p = g.key);
    for (; L === void 0; )
      d = this.tree.next(d), d === null ? L = null : d.key.consumedBy === void 0 && (L = d.key);
    if (u.isLeft) {
      let N = null;
      if (p) {
        const m = p.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (N = m), !p.isAnEndpoint(m))) {
          const E = this._splitSafely(p, m);
          for (let I = 0, S = E.length; I < S; I++)
            f.push(E[I]);
        }
      }
      let k = null;
      if (L) {
        const m = L.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (k = m), !L.isAnEndpoint(m))) {
          const E = this._splitSafely(L, m);
          for (let I = 0, S = E.length; I < S; I++)
            f.push(E[I]);
        }
      }
      if (N !== null || k !== null) {
        let m = null;
        N === null ? m = k : k === null ? m = N : m = ze.comparePoints(N, k) <= 0 ? N : k, this.queue.remove(a.rightSE), f.push(a.rightSE);
        const E = a.split(m);
        for (let I = 0, S = E.length; I < S; I++)
          f.push(E[I]);
      }
      f.length > 0 ? (this.tree.remove(a), f.push(u)) : (this.segments.push(a), a.prev = p);
    } else {
      if (p && L) {
        const N = p.getIntersection(L);
        if (N !== null) {
          if (!p.isAnEndpoint(N)) {
            const k = this._splitSafely(p, N);
            for (let m = 0, E = k.length; m < E; m++)
              f.push(k[m]);
          }
          if (!L.isAnEndpoint(N)) {
            const k = this._splitSafely(L, N);
            for (let m = 0, E = k.length; m < E; m++)
              f.push(k[m]);
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
    const l = u.split(a);
    return l.push(f), u.consumedBy === void 0 && this.tree.add(u), l;
  }
}
const Br = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Fu = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class Gu {
  run(u, a, f) {
    Ve.type = u, Kt.reset();
    const l = [new Yr(a, !0)];
    for (let m = 0, E = f.length; m < E; m++)
      l.push(new Yr(f[m], !1));
    if (Ve.numMultiPolys = l.length, Ve.type === "difference") {
      const m = l[0];
      let E = 1;
      for (; E < l.length; )
        ci(l[E].bbox, m.bbox) !== null ? E++ : l.splice(E, 1);
    }
    if (Ve.type === "intersection")
      for (let m = 0, E = l.length; m < E; m++) {
        const I = l[m];
        for (let S = m + 1, T = l.length; S < T; S++)
          if (ci(I.bbox, l[S].bbox) === null) return [];
      }
    const g = new gi(ze.compare);
    for (let m = 0, E = l.length; m < E; m++) {
      const I = l[m].getSweepEvents();
      for (let S = 0, T = I.length; S < T; S++)
        if (g.insert(I[S]), g.size > Br)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const d = new Du(g);
    let p = g.size, L = g.pop();
    for (; L; ) {
      const m = L.key;
      if (g.size === p) {
        const I = m.segment;
        throw new Error(`Unable to pop() ${m.isLeft ? "left" : "right"} SweepEvent [${m.point.x}, ${m.point.y}] from segment #${I.id} [${I.leftSE.point.x}, ${I.leftSE.point.y}] -> [${I.rightSE.point.x}, ${I.rightSE.point.y}] from queue.`);
      }
      if (g.size > Br)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (d.segments.length > Fu)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const E = d.process(m);
      for (let I = 0, S = E.length; I < S; I++) {
        const T = E[I];
        T.consumedBy === void 0 && g.insert(T);
      }
      p = g.size, L = g.pop();
    }
    Kt.reset();
    const N = Rn.factory(d.segments);
    return new Au(N).getGeom();
  }
}
const Ve = new Gu(), qu = function(h) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Ve.run("union", h, a);
}, Yu = function(h) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Ve.run("intersection", h, a);
}, zu = function(h) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Ve.run("xor", h, a);
}, Bu = function(h) {
  for (var u = arguments.length, a = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
    a[f - 1] = arguments[f];
  return Ve.run("difference", h, a);
};
var Xu = {
  union: qu,
  intersection: Yu,
  xor: zu,
  difference: Bu
};
function Uu(h) {
  const u = [];
  if (fi(h, (l) => {
    u.push(l.coordinates);
  }), u.length < 2)
    throw new Error("Must have at least two features");
  const a = h.features[0].properties || {}, f = Xu.difference(u[0], ...u.slice(1));
  return f.length === 0 ? null : f.length === 1 ? Zr(f[0], a) : Ta(f, a);
}
var Vu = Uu;
function Xr(h) {
  let u;
  for (const a of h)
    u && a[0] - u[0] >= 180 ? a[0] -= 360 : u && a[0] - u[0] < -180 && (a[0] += 360), u = a;
}
function Ur(h, u) {
  const a = Vu(
    Qt([
      Zr([
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]),
      h
    ])
  );
  if (!a)
    return;
  a.properties = { isMask: "y" };
  const f = vu(h, 0);
  if (f) {
    if (f.geometry.type === "Polygon")
      for (const l of f.geometry.coordinates)
        Xr(l);
    else
      for (const l of f.geometry.coordinates)
        for (const g of l)
          Xr(g);
    u(Qt([f, a]));
  }
}
const Vr = "EPSG:4326";
function Hu(h) {
  var g;
  const u = h.getProperties(), { isMask: a } = u, f = (g = h.getGeometry()) == null ? void 0 : g.getType(), l = a ? 0 : f === "LineString" || f === "MultiLineString" ? 3 : 2;
  return new wa({
    stroke: a ? void 0 : new cr({
      color: "#3170fe",
      lineDash: [l, l],
      width: l,
      lineCap: "butt"
    }),
    fill: a ? new hr({
      color: "#00000020"
    }) : void 0,
    image: new Sa({
      src: `/icons/marker_${u.isReverse ? "reverse" : u.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: u.isSelected ? 2 : u.isReverse ? 0 : 1,
    text: u.isSelected && u.tooltip ? new La({
      backgroundFill: new hr({ color: "white" }),
      text: u.tooltip,
      offsetY: -40,
      backgroundStroke: new cr({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function io(h, u = {}, a = {}, f = Hu) {
  let l = -1, g, d, p, L = !1;
  const N = new ka({
    updateWhileAnimating: !0
  });
  h.addLayer(N);
  const k = new Na({});
  N.setSource(k), N.setStyle(f), h.on("click", (S) => {
    h.forEachFeatureAtPixel(S.pixel, (T) => {
      const M = T.getId();
      if (M)
        return S.stopPropagation(), d == null || d({ type: "markerClick", id: M }), T;
    });
  }), h.on("pointermove", (S) => {
    const T = h.forEachFeatureAtPixel(S.pixel, (M) => M.getId());
    g !== T && (g && (d == null || d({
      type: "markerMouseLeave",
      id: g
    })), T && (d == null || d({
      type: "markerMouseEnter",
      id: T
    })), h.getTargetElement().style.cursor = T ? "pointer" : L ? "crosshair" : "", g = T);
  });
  function m() {
    return Ia() ?? h.getView().getProjection();
  }
  function E(S) {
    return S.transform(Vr, m());
  }
  const I = (S) => {
    d == null || d({
      type: "mapClick",
      coordinates: lr(S.coordinate, m())
    });
  };
  return {
    setEventHandler(S) {
      S ? (d = S, h.on("click", I)) : (d = void 0, h.un("click", I));
    },
    flyTo(S, T) {
      h.getView().animate({
        center: gn(S, m()),
        zoom: T,
        duration: 2e3,
        ...u
      });
    },
    fitBounds(S, T, M) {
      h.getView().fit(Ea(S, Vr, m()), {
        padding: [T, T, T, T],
        maxZoom: M,
        duration: 2e3,
        ...a
      });
    },
    indicateReverse(S) {
      L = S, h.getTargetElement().style.cursor = S ? "crosshair" : "";
    },
    setReverseMarker(S) {
      p ? S ? p.getGeometry().setCoordinates(
        gn(S, m())
      ) : (k.removeFeature(p), p.dispose(), p = void 0) : S && (p = new rt(
        new Jn(gn(S, m()))
      ), p.setProperties({ isReverse: !0 }), k.addFeature(p));
    },
    setMarkers(S, T) {
      function M(b) {
        var P;
        if (b)
          for (const O of b.features) {
            const Y = O.geometry.type === "Polygon" ? new sr(O.geometry.coordinates) : O.geometry.type === "MultiPolygon" ? new ar(O.geometry.coordinates) : null;
            Y && k.addFeature(
              new rt({
                isMask: !!((P = O.properties) != null && P.isMask),
                geometry: E(Y)
              })
            );
          }
      }
      if (k.clear(), p && k.addFeature(p), M(), T) {
        let b = !1;
        if (T.geometry.type === "GeometryCollection") {
          const P = T.geometry.geometries.map(
            (O) => O.type === "Polygon" ? new sr(O.coordinates) : O.type === "MultiPolygon" ? new ar(O.coordinates) : null
          ).filter((O) => !!O);
          if (P.length > 0)
            k.addFeature(
              new rt(E(new xa(P)))
            ), b = !0;
          else
            for (const O of T.geometry.geometries)
              O.type === "LineString" ? (k.addFeature(
                new rt(
                  E(new ur(O.coordinates))
                )
              ), b = !0) : O.type === "MultiLineString" && k.addFeature(
                new rt(
                  E(new or(O.coordinates))
                )
              ), b = !0;
        }
        if (!b) {
          if (T.geometry.type === "Polygon")
            Ur(T, M);
          else if (T.geometry.type === "MultiPolygon")
            Ur(T, M);
          else if (T.geometry.type === "LineString") {
            k.addFeature(
              new rt(
                E(new ur(T.geometry.coordinates))
              )
            );
            return;
          } else if (T.geometry.type === "MultiLineString") {
            k.addFeature(
              new rt(
                E(new or(T.geometry.coordinates))
              )
            );
            return;
          }
        }
        k.addFeature(new rt(E(new Jn(T.center))));
      }
      for (const b of S ?? []) {
        if (b === T)
          continue;
        const P = new rt(
          new Jn(gn(b.center, m()))
        );
        P.setId(b.id), P.setProperties({
          fuzzy: !!b.matching_text,
          tooltip: b.place_type[0] === "reverse" ? b.place_name : b.place_name.replace(/,.*/, "")
        }), k.addFeature(P);
      }
    },
    setSelectedMarker(S) {
      var b, P, O;
      const T = k.getFeatures(), M = (b = T[0]) != null && b.getProperties().isReverse ? 1 : 0;
      l > -1 && ((P = T[l + M]) == null || P.setProperties({
        isSelected: !1
      })), S > -1 && ((O = T[S + M]) == null || O.setProperties({
        isSelected: !0
      })), l = S;
    },
    getCenterAndZoom() {
      const S = h.getView(), T = S.getCenter(), M = S.getZoom();
      if (!(!T || M === void 0))
        return [M, ...lr(T, m())];
    }
  };
}
export {
  io as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
