import { Feature as mt } from "ol";
import { Point as Ei, Polygon as Da, MultiPolygon as Fa, GeometryCollection as Sh, LineString as Ga, MultiLineString as Ba } from "ol/geom";
import Ih from "ol/layer/Vector";
import { fromLonLat as or, transformExtent as wh, toLonLat as $a, getUserProjection as Nh } from "ol/proj";
import bh from "ol/source/Vector";
import qa from "ol/style/Fill";
import Oh from "ol/style/Icon";
import za from "ol/style/Stroke";
import Th from "ol/style/Style";
import Rh from "ol/style/Text";
var zn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Yu(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Lh(o) {
  if (o.__esModule) return o;
  var r = o.default;
  if (typeof r == "function") {
    var a = function l() {
      return this instanceof l ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    a.prototype = r.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(o).forEach(function(l) {
    var c = Object.getOwnPropertyDescriptor(o, l);
    Object.defineProperty(a, l, c.get ? c : {
      enumerable: !0,
      get: function() {
        return o[l];
      }
    });
  }), a;
}
var Ya = Object.prototype.toString, Uu = function(r) {
  var a = Ya.call(r), l = a === "[object Arguments]";
  return l || (l = a !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && Ya.call(r.callee) === "[object Function]"), l;
}, ki, Ua;
function Ch() {
  if (Ua) return ki;
  Ua = 1;
  var o;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, a = Object.prototype.toString, l = Uu, c = Object.prototype.propertyIsEnumerable, f = !c.call({ toString: null }, "toString"), v = c.call(function() {
    }, "prototype"), p = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ], _ = function(E) {
      var k = E.constructor;
      return k && k.prototype === E;
    }, x = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0
    }, S = function() {
      if (typeof window > "u")
        return !1;
      for (var E in window)
        try {
          if (!x["$" + E] && r.call(window, E) && window[E] !== null && typeof window[E] == "object")
            try {
              _(window[E]);
            } catch {
              return !0;
            }
        } catch {
          return !0;
        }
      return !1;
    }(), m = function(E) {
      if (typeof window > "u" || !S)
        return _(E);
      try {
        return _(E);
      } catch {
        return !1;
      }
    };
    o = function(k) {
      var w = k !== null && typeof k == "object", T = a.call(k) === "[object Function]", C = l(k), P = w && a.call(k) === "[object String]", A = [];
      if (!w && !T && !C)
        throw new TypeError("Object.keys called on a non-object");
      var L = v && T;
      if (P && k.length > 0 && !r.call(k, 0))
        for (var G = 0; G < k.length; ++G)
          A.push(String(G));
      if (C && k.length > 0)
        for (var M = 0; M < k.length; ++M)
          A.push(String(M));
      else
        for (var $ in k)
          !(L && $ === "prototype") && r.call(k, $) && A.push(String($));
      if (f)
        for (var Y = m(k), U = 0; U < p.length; ++U)
          !(Y && p[U] === "constructor") && r.call(k, p[U]) && A.push(p[U]);
      return A;
    };
  }
  return ki = o, ki;
}
var Ph = Array.prototype.slice, Ah = Uu, Xa = Object.keys, pr = Xa ? function(r) {
  return Xa(r);
} : Ch(), ja = Object.keys;
pr.shim = function() {
  if (Object.keys) {
    var r = function() {
      var a = Object.keys(arguments);
      return a && a.length === arguments.length;
    }(1, 2);
    r || (Object.keys = function(l) {
      return Ah(l) ? ja(Ph.call(l)) : ja(l);
    });
  } else
    Object.keys = pr;
  return Object.keys || pr;
};
var ks = pr, Mh = Error, Dh = EvalError, Fh = RangeError, Gh = ReferenceError, Xu = SyntaxError, Lt = TypeError, Bh = URIError, Zr = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var r = {}, a = Symbol("test"), l = Object(a);
  if (typeof a == "string" || Object.prototype.toString.call(a) !== "[object Symbol]" || Object.prototype.toString.call(l) !== "[object Symbol]")
    return !1;
  var c = 42;
  r[a] = c;
  for (a in r)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0)
    return !1;
  var f = Object.getOwnPropertySymbols(r);
  if (f.length !== 1 || f[0] !== a || !Object.prototype.propertyIsEnumerable.call(r, a))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var v = Object.getOwnPropertyDescriptor(r, a);
    if (v.value !== c || v.enumerable !== !0)
      return !1;
  }
  return !0;
}, Va = typeof Symbol < "u" && Symbol, $h = Zr, Ss = function() {
  return typeof Va != "function" || typeof Symbol != "function" || typeof Va("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : $h();
}, Si = {
  __proto__: null,
  foo: {}
}, qh = Object, zh = function() {
  return { __proto__: Si }.foo === Si.foo && !(Si instanceof qh);
}, Yh = "Function.prototype.bind called on incompatible ", Uh = Object.prototype.toString, Xh = Math.max, jh = "[object Function]", Wa = function(r, a) {
  for (var l = [], c = 0; c < r.length; c += 1)
    l[c] = r[c];
  for (var f = 0; f < a.length; f += 1)
    l[f + r.length] = a[f];
  return l;
}, Vh = function(r, a) {
  for (var l = [], c = a, f = 0; c < r.length; c += 1, f += 1)
    l[f] = r[c];
  return l;
}, Wh = function(o, r) {
  for (var a = "", l = 0; l < o.length; l += 1)
    a += o[l], l + 1 < o.length && (a += r);
  return a;
}, Hh = function(r) {
  var a = this;
  if (typeof a != "function" || Uh.apply(a) !== jh)
    throw new TypeError(Yh + a);
  for (var l = Vh(arguments, 1), c, f = function() {
    if (this instanceof c) {
      var S = a.apply(
        this,
        Wa(l, arguments)
      );
      return Object(S) === S ? S : this;
    }
    return a.apply(
      r,
      Wa(l, arguments)
    );
  }, v = Xh(0, a.length - l.length), p = [], _ = 0; _ < v; _++)
    p[_] = "$" + _;
  if (c = Function("binder", "return function (" + Wh(p, ",") + "){ return binder.apply(this,arguments); }")(f), a.prototype) {
    var x = function() {
    };
    x.prototype = a.prototype, c.prototype = new x(), x.prototype = null;
  }
  return c;
}, Zh = Hh, Is = Function.prototype.bind || Zh, Jh = Function.prototype.call, Qh = Object.prototype.hasOwnProperty, Kh = Is, ju = Kh.call(Jh, Qh), oe, ef = Mh, tf = Dh, nf = Fh, rf = Gh, un = Xu, on = Lt, sf = Bh, Vu = Function, Ii = function(o) {
  try {
    return Vu('"use strict"; return (' + o + ").constructor;")();
  } catch {
  }
}, zt = Object.getOwnPropertyDescriptor;
if (zt)
  try {
    zt({}, "");
  } catch {
    zt = null;
  }
var wi = function() {
  throw new on();
}, af = zt ? function() {
  try {
    return arguments.callee, wi;
  } catch {
    try {
      return zt(arguments, "callee").get;
    } catch {
      return wi;
    }
  }
}() : wi, tn = Ss(), of = zh(), we = Object.getPrototypeOf || (of ? function(o) {
  return o.__proto__;
} : null), sn = {}, uf = typeof Uint8Array > "u" || !we ? oe : we(Uint8Array), Yt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? oe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? oe : ArrayBuffer,
  "%ArrayIteratorPrototype%": tn && we ? we([][Symbol.iterator]()) : oe,
  "%AsyncFromSyncIteratorPrototype%": oe,
  "%AsyncFunction%": sn,
  "%AsyncGenerator%": sn,
  "%AsyncGeneratorFunction%": sn,
  "%AsyncIteratorPrototype%": sn,
  "%Atomics%": typeof Atomics > "u" ? oe : Atomics,
  "%BigInt%": typeof BigInt > "u" ? oe : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? oe : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? oe : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? oe : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": ef,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": tf,
  "%Float32Array%": typeof Float32Array > "u" ? oe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? oe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? oe : FinalizationRegistry,
  "%Function%": Vu,
  "%GeneratorFunction%": sn,
  "%Int8Array%": typeof Int8Array > "u" ? oe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? oe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? oe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": tn && we ? we(we([][Symbol.iterator]())) : oe,
  "%JSON%": typeof JSON == "object" ? JSON : oe,
  "%Map%": typeof Map > "u" ? oe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !tn || !we ? oe : we((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? oe : Promise,
  "%Proxy%": typeof Proxy > "u" ? oe : Proxy,
  "%RangeError%": nf,
  "%ReferenceError%": rf,
  "%Reflect%": typeof Reflect > "u" ? oe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? oe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !tn || !we ? oe : we((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? oe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": tn && we ? we(""[Symbol.iterator]()) : oe,
  "%Symbol%": tn ? Symbol : oe,
  "%SyntaxError%": un,
  "%ThrowTypeError%": af,
  "%TypedArray%": uf,
  "%TypeError%": on,
  "%Uint8Array%": typeof Uint8Array > "u" ? oe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? oe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? oe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? oe : Uint32Array,
  "%URIError%": sf,
  "%WeakMap%": typeof WeakMap > "u" ? oe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? oe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? oe : WeakSet
};
if (we)
  try {
    null.error;
  } catch (o) {
    var lf = we(we(o));
    Yt["%Error.prototype%"] = lf;
  }
var cf = function o(r) {
  var a;
  if (r === "%AsyncFunction%")
    a = Ii("async function () {}");
  else if (r === "%GeneratorFunction%")
    a = Ii("function* () {}");
  else if (r === "%AsyncGeneratorFunction%")
    a = Ii("async function* () {}");
  else if (r === "%AsyncGenerator%") {
    var l = o("%AsyncGeneratorFunction%");
    l && (a = l.prototype);
  } else if (r === "%AsyncIteratorPrototype%") {
    var c = o("%AsyncGenerator%");
    c && we && (a = we(c.prototype));
  }
  return Yt[r] = a, a;
}, Ha = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, jn = Is, br = ju, hf = jn.call(Function.call, Array.prototype.concat), ff = jn.call(Function.apply, Array.prototype.splice), Za = jn.call(Function.call, String.prototype.replace), Or = jn.call(Function.call, String.prototype.slice), gf = jn.call(Function.call, RegExp.prototype.exec), yf = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, vf = /\\(\\)?/g, pf = function(r) {
  var a = Or(r, 0, 1), l = Or(r, -1);
  if (a === "%" && l !== "%")
    throw new un("invalid intrinsic syntax, expected closing `%`");
  if (l === "%" && a !== "%")
    throw new un("invalid intrinsic syntax, expected opening `%`");
  var c = [];
  return Za(r, yf, function(f, v, p, _) {
    c[c.length] = p ? Za(_, vf, "$1") : v || f;
  }), c;
}, mf = function(r, a) {
  var l = r, c;
  if (br(Ha, l) && (c = Ha[l], l = "%" + c[0] + "%"), br(Yt, l)) {
    var f = Yt[l];
    if (f === sn && (f = cf(l)), typeof f > "u" && !a)
      throw new on("intrinsic " + r + " exists, but is not available. Please file an issue!");
    return {
      alias: c,
      name: l,
      value: f
    };
  }
  throw new un("intrinsic " + r + " does not exist!");
}, ct = function(r, a) {
  if (typeof r != "string" || r.length === 0)
    throw new on("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof a != "boolean")
    throw new on('"allowMissing" argument must be a boolean');
  if (gf(/^%?[^%]*%?$/, r) === null)
    throw new un("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var l = pf(r), c = l.length > 0 ? l[0] : "", f = mf("%" + c + "%", a), v = f.name, p = f.value, _ = !1, x = f.alias;
  x && (c = x[0], ff(l, hf([0, 1], x)));
  for (var S = 1, m = !0; S < l.length; S += 1) {
    var E = l[S], k = Or(E, 0, 1), w = Or(E, -1);
    if ((k === '"' || k === "'" || k === "`" || w === '"' || w === "'" || w === "`") && k !== w)
      throw new un("property names with quotes must have matching quotes");
    if ((E === "constructor" || !m) && (_ = !0), c += "." + E, v = "%" + c + "%", br(Yt, v))
      p = Yt[v];
    else if (p != null) {
      if (!(E in p)) {
        if (!a)
          throw new on("base intrinsic for " + r + " exists, but the property is not available.");
        return;
      }
      if (zt && S + 1 >= l.length) {
        var T = zt(p, E);
        m = !!T, m && "get" in T && !("originalValue" in T.get) ? p = T.get : p = p[E];
      } else
        m = br(p, E), p = p[E];
      m && !_ && (Yt[v] = p);
    }
  }
  return p;
}, df = ct, mr = df("%Object.defineProperty%", !0) || !1;
if (mr)
  try {
    mr({}, "a", { value: 1 });
  } catch {
    mr = !1;
  }
var ws = mr, _f = ct, dr = _f("%Object.getOwnPropertyDescriptor%", !0);
if (dr)
  try {
    dr([], "length");
  } catch {
    dr = null;
  }
var Ns = dr, Ja = ws, xf = Xu, nn = Lt, Qa = Ns, bs = function(r, a, l) {
  if (!r || typeof r != "object" && typeof r != "function")
    throw new nn("`obj` must be an object or a function`");
  if (typeof a != "string" && typeof a != "symbol")
    throw new nn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new nn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new nn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new nn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new nn("`loose`, if provided, must be a boolean");
  var c = arguments.length > 3 ? arguments[3] : null, f = arguments.length > 4 ? arguments[4] : null, v = arguments.length > 5 ? arguments[5] : null, p = arguments.length > 6 ? arguments[6] : !1, _ = !!Qa && Qa(r, a);
  if (Ja)
    Ja(r, a, {
      configurable: v === null && _ ? _.configurable : !v,
      enumerable: c === null && _ ? _.enumerable : !c,
      value: l,
      writable: f === null && _ ? _.writable : !f
    });
  else if (p || !c && !f && !v)
    r[a] = l;
  else
    throw new xf("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Xi = ws, Wu = function() {
  return !!Xi;
};
Wu.hasArrayLengthDefineBug = function() {
  if (!Xi)
    return null;
  try {
    return Xi([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Os = Wu, Ef = ks, kf = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Sf = Object.prototype.toString, If = Array.prototype.concat, Ka = bs, wf = function(o) {
  return typeof o == "function" && Sf.call(o) === "[object Function]";
}, Hu = Os(), Nf = function(o, r, a, l) {
  if (r in o) {
    if (l === !0) {
      if (o[r] === a)
        return;
    } else if (!wf(l) || !l())
      return;
  }
  Hu ? Ka(o, r, a, !0) : Ka(o, r, a);
}, Zu = function(o, r) {
  var a = arguments.length > 2 ? arguments[2] : {}, l = Ef(r);
  kf && (l = If.call(l, Object.getOwnPropertySymbols(r)));
  for (var c = 0; c < l.length; c += 1)
    Nf(o, l[c], r[l[c]], a[l[c]]);
};
Zu.supportsDescriptors = !!Hu;
var Xt = Zu, Ju = { exports: {} }, bf = ct, eo = bs, Of = Os(), to = Ns, no = Lt, Tf = bf("%Math.floor%"), Rf = function(r, a) {
  if (typeof r != "function")
    throw new no("`fn` is not a function");
  if (typeof a != "number" || a < 0 || a > 4294967295 || Tf(a) !== a)
    throw new no("`length` must be a positive 32-bit integer");
  var l = arguments.length > 2 && !!arguments[2], c = !0, f = !0;
  if ("length" in r && to) {
    var v = to(r, "length");
    v && !v.configurable && (c = !1), v && !v.writable && (f = !1);
  }
  return (c || f || !l) && (Of ? eo(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    a,
    !0,
    !0
  ) : eo(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    a
  )), r;
};
(function(o) {
  var r = Is, a = ct, l = Rf, c = Lt, f = a("%Function.prototype.apply%"), v = a("%Function.prototype.call%"), p = a("%Reflect.apply%", !0) || r.call(v, f), _ = ws, x = a("%Math.max%");
  o.exports = function(E) {
    if (typeof E != "function")
      throw new c("a function is required");
    var k = p(r, v, arguments);
    return l(
      k,
      1 + x(0, E.length - (arguments.length - 1)),
      !0
    );
  };
  var S = function() {
    return p(r, f, arguments);
  };
  _ ? _(o.exports, "apply", { value: S }) : o.exports.apply = S;
})(Ju);
var yn = Ju.exports, Qu = ct, Ku = yn, Lf = Ku(Qu("String.prototype.indexOf")), Ve = function(r, a) {
  var l = Qu(r, !!a);
  return typeof l == "function" && Lf(r, ".prototype.") > -1 ? Ku(l) : l;
}, Cf = ks, el = Zr(), tl = Ve, ro = Object, Pf = tl("Array.prototype.push"), io = tl("Object.prototype.propertyIsEnumerable"), Af = el ? Object.getOwnPropertySymbols : null, nl = function(r, a) {
  if (r == null)
    throw new TypeError("target must be an object");
  var l = ro(r);
  if (arguments.length === 1)
    return l;
  for (var c = 1; c < arguments.length; ++c) {
    var f = ro(arguments[c]), v = Cf(f), p = el && (Object.getOwnPropertySymbols || Af);
    if (p)
      for (var _ = p(f), x = 0; x < _.length; ++x) {
        var S = _[x];
        io(f, S) && Pf(v, S);
      }
    for (var m = 0; m < v.length; ++m) {
      var E = v[m];
      if (io(f, E)) {
        var k = f[E];
        l[E] = k;
      }
    }
  }
  return l;
}, Ni = nl, Mf = function() {
  if (!Object.assign)
    return !1;
  for (var o = "abcdefghijklmnopqrst", r = o.split(""), a = {}, l = 0; l < r.length; ++l)
    a[r[l]] = r[l];
  var c = Object.assign({}, a), f = "";
  for (var v in c)
    f += v;
  return o !== f;
}, Df = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var o = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(o, "xy");
  } catch {
    return o[1] === "y";
  }
  return !1;
}, rl = function() {
  return !Object.assign || Mf() || Df() ? Ni : Object.assign;
}, Ff = Xt, Gf = rl, Bf = function() {
  var r = Gf();
  return Ff(
    Object,
    { assign: r },
    { assign: function() {
      return Object.assign !== r;
    } }
  ), r;
}, $f = Xt, qf = yn, zf = nl, il = rl, Yf = Bf, Uf = qf.apply(il()), sl = function(r, a) {
  return Uf(Object, arguments);
};
$f(sl, {
  getPolyfill: il,
  implementation: zf,
  shim: Yf
});
var Xf = sl, Yn = function() {
  return typeof (function() {
  }).name == "string";
}, Gn = Object.getOwnPropertyDescriptor;
if (Gn)
  try {
    Gn([], "length");
  } catch {
    Gn = null;
  }
Yn.functionsHaveConfigurableNames = function() {
  if (!Yn() || !Gn)
    return !1;
  var r = Gn(function() {
  }, "name");
  return !!r && !!r.configurable;
};
var jf = Function.prototype.bind;
Yn.boundFunctionsHaveNames = function() {
  return Yn() && typeof jf == "function" && (function() {
  }).bind().name !== "";
};
var Vf = Yn, so = bs, Wf = Os(), Hf = Vf.functionsHaveConfigurableNames(), Zf = Lt, Jf = function(r, a) {
  if (typeof r != "function")
    throw new Zf("`fn` is not a function");
  var l = arguments.length > 2 && !!arguments[2];
  return (!l || Hf) && (Wf ? so(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    a,
    !0,
    !0
  ) : so(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    a
  )), r;
}, Qf = Jf, Kf = Lt, eg = Object, al = Qf(function() {
  if (this == null || this !== eg(this))
    throw new Kf("RegExp.prototype.flags getter called on non-object");
  var r = "";
  return this.hasIndices && (r += "d"), this.global && (r += "g"), this.ignoreCase && (r += "i"), this.multiline && (r += "m"), this.dotAll && (r += "s"), this.unicode && (r += "u"), this.unicodeSets && (r += "v"), this.sticky && (r += "y"), r;
}, "get flags", !0), tg = al, ng = Xt.supportsDescriptors, rg = Object.getOwnPropertyDescriptor, ol = function() {
  if (ng && /a/mig.flags === "gim") {
    var r = rg(RegExp.prototype, "flags");
    if (r && typeof r.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
      var a = "", l = {};
      if (Object.defineProperty(l, "hasIndices", {
        get: function() {
          a += "d";
        }
      }), Object.defineProperty(l, "sticky", {
        get: function() {
          a += "y";
        }
      }), a === "dy")
        return r.get;
    }
  }
  return tg;
}, ig = Xt.supportsDescriptors, sg = ol, ag = Object.getOwnPropertyDescriptor, og = Object.defineProperty, ug = TypeError, ao = Object.getPrototypeOf, lg = /a/, cg = function() {
  if (!ig || !ao)
    throw new ug("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var r = sg(), a = ao(lg), l = ag(a, "flags");
  return (!l || l.get !== r) && og(a, "flags", {
    configurable: !0,
    enumerable: !1,
    get: r
  }), r;
}, hg = Xt, fg = yn, gg = al, ul = ol, yg = cg, ll = fg(ul());
hg(ll, {
  getPolyfill: ul,
  implementation: gg,
  shim: yg
});
var vg = ll, _r = { exports: {} }, pg = Zr, jt = function() {
  return pg() && !!Symbol.toStringTag;
}, mg = jt(), dg = Ve, ji = dg("Object.prototype.toString"), Jr = function(r) {
  return mg && r && typeof r == "object" && Symbol.toStringTag in r ? !1 : ji(r) === "[object Arguments]";
}, cl = function(r) {
  return Jr(r) ? !0 : r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && ji(r) !== "[object Array]" && ji(r.callee) === "[object Function]";
}, _g = function() {
  return Jr(arguments);
}();
Jr.isLegacyArguments = cl;
var hl = _g ? Jr : cl;
const xg = {}, Eg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xg
}, Symbol.toStringTag, { value: "Module" })), kg = /* @__PURE__ */ Lh(Eg);
var Ts = typeof Map == "function" && Map.prototype, bi = Object.getOwnPropertyDescriptor && Ts ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Tr = Ts && bi && typeof bi.get == "function" ? bi.get : null, oo = Ts && Map.prototype.forEach, Rs = typeof Set == "function" && Set.prototype, Oi = Object.getOwnPropertyDescriptor && Rs ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Rr = Rs && Oi && typeof Oi.get == "function" ? Oi.get : null, uo = Rs && Set.prototype.forEach, Sg = typeof WeakMap == "function" && WeakMap.prototype, Bn = Sg ? WeakMap.prototype.has : null, Ig = typeof WeakSet == "function" && WeakSet.prototype, $n = Ig ? WeakSet.prototype.has : null, wg = typeof WeakRef == "function" && WeakRef.prototype, lo = wg ? WeakRef.prototype.deref : null, Ng = Boolean.prototype.valueOf, bg = Object.prototype.toString, Og = Function.prototype.toString, Tg = String.prototype.match, Ls = String.prototype.slice, bt = String.prototype.replace, Rg = String.prototype.toUpperCase, co = String.prototype.toLowerCase, fl = RegExp.prototype.test, ho = Array.prototype.concat, at = Array.prototype.join, Lg = Array.prototype.slice, fo = Math.floor, Vi = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ti = Object.getOwnPropertySymbols, Wi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ln = typeof Symbol == "function" && typeof Symbol.iterator == "object", Re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ln || !0) ? Symbol.toStringTag : null, gl = Object.prototype.propertyIsEnumerable, go = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(o) {
  return o.__proto__;
} : null);
function yo(o, r) {
  if (o === 1 / 0 || o === -1 / 0 || o !== o || o && o > -1e3 && o < 1e3 || fl.call(/e/, r))
    return r;
  var a = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof o == "number") {
    var l = o < 0 ? -fo(-o) : fo(o);
    if (l !== o) {
      var c = String(l), f = Ls.call(r, c.length + 1);
      return bt.call(c, a, "$&_") + "." + bt.call(bt.call(f, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return bt.call(r, a, "$&_");
}
var Hi = kg, vo = Hi.custom, po = vl(vo) ? vo : null, Cg = function o(r, a, l, c) {
  var f = a || {};
  if (wt(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (wt(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var v = wt(f, "customInspect") ? f.customInspect : !0;
  if (typeof v != "boolean" && v !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (wt(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (wt(f, "numericSeparator") && typeof f.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var p = f.numericSeparator;
  if (typeof r > "u")
    return "undefined";
  if (r === null)
    return "null";
  if (typeof r == "boolean")
    return r ? "true" : "false";
  if (typeof r == "string")
    return ml(r, f);
  if (typeof r == "number") {
    if (r === 0)
      return 1 / 0 / r > 0 ? "0" : "-0";
    var _ = String(r);
    return p ? yo(r, _) : _;
  }
  if (typeof r == "bigint") {
    var x = String(r) + "n";
    return p ? yo(r, x) : x;
  }
  var S = typeof f.depth > "u" ? 5 : f.depth;
  if (typeof l > "u" && (l = 0), l >= S && S > 0 && typeof r == "object")
    return Zi(r) ? "[Array]" : "[Object]";
  var m = Zg(f, l);
  if (typeof c > "u")
    c = [];
  else if (pl(c, r) >= 0)
    return "[Circular]";
  function E(ae, q, ne) {
    if (q && (c = Lg.call(c), c.push(q)), ne) {
      var ue = {
        depth: f.depth
      };
      return wt(f, "quoteStyle") && (ue.quoteStyle = f.quoteStyle), o(ae, ue, l + 1, c);
    }
    return o(ae, f, l + 1, c);
  }
  if (typeof r == "function" && !mo(r)) {
    var k = qg(r), w = ur(r, E);
    return "[Function" + (k ? ": " + k : " (anonymous)") + "]" + (w.length > 0 ? " { " + at.call(w, ", ") + " }" : "");
  }
  if (vl(r)) {
    var T = ln ? bt.call(String(r), /^(Symbol\(.*\))_[^)]*$/, "$1") : Wi.call(r);
    return typeof r == "object" && !ln ? Ln(T) : T;
  }
  if (Vg(r)) {
    for (var C = "<" + co.call(String(r.nodeName)), P = r.attributes || [], A = 0; A < P.length; A++)
      C += " " + P[A].name + "=" + yl(Pg(P[A].value), "double", f);
    return C += ">", r.childNodes && r.childNodes.length && (C += "..."), C += "</" + co.call(String(r.nodeName)) + ">", C;
  }
  if (Zi(r)) {
    if (r.length === 0)
      return "[]";
    var L = ur(r, E);
    return m && !Hg(L) ? "[" + Ji(L, m) + "]" : "[ " + at.call(L, ", ") + " ]";
  }
  if (Mg(r)) {
    var G = ur(r, E);
    return !("cause" in Error.prototype) && "cause" in r && !gl.call(r, "cause") ? "{ [" + String(r) + "] " + at.call(ho.call("[cause]: " + E(r.cause), G), ", ") + " }" : G.length === 0 ? "[" + String(r) + "]" : "{ [" + String(r) + "] " + at.call(G, ", ") + " }";
  }
  if (typeof r == "object" && v) {
    if (po && typeof r[po] == "function" && Hi)
      return Hi(r, { depth: S - l });
    if (v !== "symbol" && typeof r.inspect == "function")
      return r.inspect();
  }
  if (zg(r)) {
    var M = [];
    return oo && oo.call(r, function(ae, q) {
      M.push(E(q, r, !0) + " => " + E(ae, r));
    }), _o("Map", Tr.call(r), M, m);
  }
  if (Xg(r)) {
    var $ = [];
    return uo && uo.call(r, function(ae) {
      $.push(E(ae, r));
    }), _o("Set", Rr.call(r), $, m);
  }
  if (Yg(r))
    return Ri("WeakMap");
  if (jg(r))
    return Ri("WeakSet");
  if (Ug(r))
    return Ri("WeakRef");
  if (Fg(r))
    return Ln(E(Number(r)));
  if (Bg(r))
    return Ln(E(Vi.call(r)));
  if (Gg(r))
    return Ln(Ng.call(r));
  if (Dg(r))
    return Ln(E(String(r)));
  if (typeof window < "u" && r === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && r === globalThis || typeof zn < "u" && r === zn)
    return "{ [object globalThis] }";
  if (!Ag(r) && !mo(r)) {
    var Y = ur(r, E), U = go ? go(r) === Object.prototype : r instanceof Object || r.constructor === Object, X = r instanceof Object ? "" : "null prototype", ie = !U && Re && Object(r) === r && Re in r ? Ls.call(Ct(r), 8, -1) : X ? "Object" : "", ee = U || typeof r.constructor != "function" ? "" : r.constructor.name ? r.constructor.name + " " : "", te = ee + (ie || X ? "[" + at.call(ho.call([], ie || [], X || []), ": ") + "] " : "");
    return Y.length === 0 ? te + "{}" : m ? te + "{" + Ji(Y, m) + "}" : te + "{ " + at.call(Y, ", ") + " }";
  }
  return String(r);
};
function yl(o, r, a) {
  var l = (a.quoteStyle || r) === "double" ? '"' : "'";
  return l + o + l;
}
function Pg(o) {
  return bt.call(String(o), /"/g, "&quot;");
}
function Zi(o) {
  return Ct(o) === "[object Array]" && (!Re || !(typeof o == "object" && Re in o));
}
function Ag(o) {
  return Ct(o) === "[object Date]" && (!Re || !(typeof o == "object" && Re in o));
}
function mo(o) {
  return Ct(o) === "[object RegExp]" && (!Re || !(typeof o == "object" && Re in o));
}
function Mg(o) {
  return Ct(o) === "[object Error]" && (!Re || !(typeof o == "object" && Re in o));
}
function Dg(o) {
  return Ct(o) === "[object String]" && (!Re || !(typeof o == "object" && Re in o));
}
function Fg(o) {
  return Ct(o) === "[object Number]" && (!Re || !(typeof o == "object" && Re in o));
}
function Gg(o) {
  return Ct(o) === "[object Boolean]" && (!Re || !(typeof o == "object" && Re in o));
}
function vl(o) {
  if (ln)
    return o && typeof o == "object" && o instanceof Symbol;
  if (typeof o == "symbol")
    return !0;
  if (!o || typeof o != "object" || !Wi)
    return !1;
  try {
    return Wi.call(o), !0;
  } catch {
  }
  return !1;
}
function Bg(o) {
  if (!o || typeof o != "object" || !Vi)
    return !1;
  try {
    return Vi.call(o), !0;
  } catch {
  }
  return !1;
}
var $g = Object.prototype.hasOwnProperty || function(o) {
  return o in this;
};
function wt(o, r) {
  return $g.call(o, r);
}
function Ct(o) {
  return bg.call(o);
}
function qg(o) {
  if (o.name)
    return o.name;
  var r = Tg.call(Og.call(o), /^function\s*([\w$]+)/);
  return r ? r[1] : null;
}
function pl(o, r) {
  if (o.indexOf)
    return o.indexOf(r);
  for (var a = 0, l = o.length; a < l; a++)
    if (o[a] === r)
      return a;
  return -1;
}
function zg(o) {
  if (!Tr || !o || typeof o != "object")
    return !1;
  try {
    Tr.call(o);
    try {
      Rr.call(o);
    } catch {
      return !0;
    }
    return o instanceof Map;
  } catch {
  }
  return !1;
}
function Yg(o) {
  if (!Bn || !o || typeof o != "object")
    return !1;
  try {
    Bn.call(o, Bn);
    try {
      $n.call(o, $n);
    } catch {
      return !0;
    }
    return o instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Ug(o) {
  if (!lo || !o || typeof o != "object")
    return !1;
  try {
    return lo.call(o), !0;
  } catch {
  }
  return !1;
}
function Xg(o) {
  if (!Rr || !o || typeof o != "object")
    return !1;
  try {
    Rr.call(o);
    try {
      Tr.call(o);
    } catch {
      return !0;
    }
    return o instanceof Set;
  } catch {
  }
  return !1;
}
function jg(o) {
  if (!$n || !o || typeof o != "object")
    return !1;
  try {
    $n.call(o, $n);
    try {
      Bn.call(o, Bn);
    } catch {
      return !0;
    }
    return o instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Vg(o) {
  return !o || typeof o != "object" ? !1 : typeof HTMLElement < "u" && o instanceof HTMLElement ? !0 : typeof o.nodeName == "string" && typeof o.getAttribute == "function";
}
function ml(o, r) {
  if (o.length > r.maxStringLength) {
    var a = o.length - r.maxStringLength, l = "... " + a + " more character" + (a > 1 ? "s" : "");
    return ml(Ls.call(o, 0, r.maxStringLength), r) + l;
  }
  var c = bt.call(bt.call(o, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Wg);
  return yl(c, "single", r);
}
function Wg(o) {
  var r = o.charCodeAt(0), a = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[r];
  return a ? "\\" + a : "\\x" + (r < 16 ? "0" : "") + Rg.call(r.toString(16));
}
function Ln(o) {
  return "Object(" + o + ")";
}
function Ri(o) {
  return o + " { ? }";
}
function _o(o, r, a, l) {
  var c = l ? Ji(a, l) : at.call(a, ", ");
  return o + " (" + r + ") {" + c + "}";
}
function Hg(o) {
  for (var r = 0; r < o.length; r++)
    if (pl(o[r], `
`) >= 0)
      return !1;
  return !0;
}
function Zg(o, r) {
  var a;
  if (o.indent === "	")
    a = "	";
  else if (typeof o.indent == "number" && o.indent > 0)
    a = at.call(Array(o.indent + 1), " ");
  else
    return null;
  return {
    base: a,
    prev: at.call(Array(r + 1), a)
  };
}
function Ji(o, r) {
  if (o.length === 0)
    return "";
  var a = `
` + r.prev + r.base;
  return a + at.call(o, "," + a) + `
` + r.prev;
}
function ur(o, r) {
  var a = Zi(o), l = [];
  if (a) {
    l.length = o.length;
    for (var c = 0; c < o.length; c++)
      l[c] = wt(o, c) ? r(o[c], o) : "";
  }
  var f = typeof Ti == "function" ? Ti(o) : [], v;
  if (ln) {
    v = {};
    for (var p = 0; p < f.length; p++)
      v["$" + f[p]] = f[p];
  }
  for (var _ in o)
    wt(o, _) && (a && String(Number(_)) === _ && _ < o.length || ln && v["$" + _] instanceof Symbol || (fl.call(/[^\w$]/, _) ? l.push(r(_, o) + ": " + r(o[_], o)) : l.push(_ + ": " + r(o[_], o))));
  if (typeof Ti == "function")
    for (var x = 0; x < f.length; x++)
      gl.call(o, f[x]) && l.push("[" + r(f[x]) + "]: " + r(o[f[x]], o));
  return l;
}
var dl = ct, vn = Ve, Jg = Cg, Qg = Lt, lr = dl("%WeakMap%", !0), cr = dl("%Map%", !0), Kg = vn("WeakMap.prototype.get", !0), ey = vn("WeakMap.prototype.set", !0), ty = vn("WeakMap.prototype.has", !0), ny = vn("Map.prototype.get", !0), ry = vn("Map.prototype.set", !0), iy = vn("Map.prototype.has", !0), Cs = function(o, r) {
  for (var a = o, l; (l = a.next) !== null; a = l)
    if (l.key === r)
      return a.next = l.next, l.next = /** @type {NonNullable<typeof list.next>} */
      o.next, o.next = l, l;
}, sy = function(o, r) {
  var a = Cs(o, r);
  return a && a.value;
}, ay = function(o, r, a) {
  var l = Cs(o, r);
  l ? l.value = a : o.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: r,
    next: o.next,
    value: a
  };
}, oy = function(o, r) {
  return !!Cs(o, r);
}, _l = function() {
  var r, a, l, c = {
    assert: function(f) {
      if (!c.has(f))
        throw new Qg("Side channel does not contain " + Jg(f));
    },
    get: function(f) {
      if (lr && f && (typeof f == "object" || typeof f == "function")) {
        if (r)
          return Kg(r, f);
      } else if (cr) {
        if (a)
          return ny(a, f);
      } else if (l)
        return sy(l, f);
    },
    has: function(f) {
      if (lr && f && (typeof f == "object" || typeof f == "function")) {
        if (r)
          return ty(r, f);
      } else if (cr) {
        if (a)
          return iy(a, f);
      } else if (l)
        return oy(l, f);
      return !1;
    },
    set: function(f, v) {
      lr && f && (typeof f == "object" || typeof f == "function") ? (r || (r = new lr()), ey(r, f, v)) : cr ? (a || (a = new cr()), ry(a, f, v)) : (l || (l = { key: {}, next: null }), ay(l, f, v));
    }
  };
  return c;
}, uy = ju, Cn = _l(), dt = Lt, Ps = {
  assert: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    if (Cn.assert(o), !Ps.has(o, r))
      throw new dt("`" + r + "` is not present on `O`");
  },
  get: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var a = Cn.get(o);
    return a && a["$" + r];
  },
  has: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var a = Cn.get(o);
    return !!a && uy(a, "$" + r);
  },
  set: function(o, r, a) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var l = Cn.get(o);
    l || (l = {}, Cn.set(o, l)), l["$" + r] = a;
  }
};
Object.freeze && Object.freeze(Ps);
var ly = Ps, Pn = ly, cy = SyntaxError, xo = typeof StopIteration == "object" ? StopIteration : null, hy = function(r) {
  if (!xo)
    throw new cy("this environment lacks StopIteration");
  Pn.set(r, "[[Done]]", !1);
  var a = {
    next: function() {
      var c = Pn.get(this, "[[Iterator]]"), f = Pn.get(c, "[[Done]]");
      try {
        return {
          done: f,
          value: f ? void 0 : c.next()
        };
      } catch (v) {
        if (Pn.set(c, "[[Done]]", !0), v !== xo)
          throw v;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return Pn.set(a, "[[Iterator]]", r), a;
}, fy = {}.toString, xl = Array.isArray || function(o) {
  return fy.call(o) == "[object Array]";
}, gy = String.prototype.valueOf, yy = function(r) {
  try {
    return gy.call(r), !0;
  } catch {
    return !1;
  }
}, vy = Object.prototype.toString, py = "[object String]", my = jt(), El = function(r) {
  return typeof r == "string" ? !0 : typeof r != "object" ? !1 : my ? yy(r) : vy.call(r) === py;
}, As = typeof Map == "function" && Map.prototype ? Map : null, dy = typeof Set == "function" && Set.prototype ? Set : null, Lr;
As || (Lr = function(r) {
  return !1;
});
var kl = As ? Map.prototype.has : null, Eo = dy ? Set.prototype.has : null;
!Lr && !kl && (Lr = function(r) {
  return !1;
});
var Sl = Lr || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (kl.call(r), Eo)
      try {
        Eo.call(r);
      } catch {
        return !0;
      }
    return r instanceof As;
  } catch {
  }
  return !1;
}, _y = typeof Map == "function" && Map.prototype ? Map : null, Ms = typeof Set == "function" && Set.prototype ? Set : null, Cr;
Ms || (Cr = function(r) {
  return !1;
});
var ko = _y ? Map.prototype.has : null, Il = Ms ? Set.prototype.has : null;
!Cr && !Il && (Cr = function(r) {
  return !1;
});
var wl = Cr || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (Il.call(r), ko)
      try {
        ko.call(r);
      } catch {
        return !0;
      }
    return r instanceof Ms;
  } catch {
  }
  return !1;
}, So = hl, Io = hy;
if (Ss() || Zr()) {
  var Li = Symbol.iterator;
  _r.exports = function(r) {
    if (r != null && typeof r[Li] < "u")
      return r[Li]();
    if (So(r))
      return Array.prototype[Li].call(r);
  };
} else {
  var xy = xl, Ey = El, wo = ct, ky = wo("%Map%", !0), Sy = wo("%Set%", !0), Je = Ve, No = Je("Array.prototype.push"), bo = Je("String.prototype.charCodeAt"), Iy = Je("String.prototype.slice"), wy = function(r, a) {
    var l = r.length;
    if (a + 1 >= l)
      return a + 1;
    var c = bo(r, a);
    if (c < 55296 || c > 56319)
      return a + 1;
    var f = bo(r, a + 1);
    return f < 56320 || f > 57343 ? a + 1 : a + 2;
  }, Ci = function(r) {
    var a = 0;
    return {
      next: function() {
        var c = a >= r.length, f;
        return c || (f = r[a], a += 1), {
          done: c,
          value: f
        };
      }
    };
  }, Oo = function(r, a) {
    if (xy(r) || So(r))
      return Ci(r);
    if (Ey(r)) {
      var l = 0;
      return {
        next: function() {
          var f = wy(r, l), v = Iy(r, l, f);
          return l = f, {
            done: f > r.length,
            value: v
          };
        }
      };
    }
    if (a && typeof r["_es6-shim iterator_"] < "u")
      return r["_es6-shim iterator_"]();
  };
  if (!ky && !Sy)
    _r.exports = function(r) {
      if (r != null)
        return Oo(r, !0);
    };
  else {
    var Ny = Sl, by = wl, To = Je("Map.prototype.forEach", !0), Ro = Je("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var Lo = Je("Map.prototype.iterator", !0), Co = Je("Set.prototype.iterator", !0);
    var Po = Je("Map.prototype.@@iterator", !0) || Je("Map.prototype._es6-shim iterator_", !0), Ao = Je("Set.prototype.@@iterator", !0) || Je("Set.prototype._es6-shim iterator_", !0), Oy = function(r) {
      if (Ny(r)) {
        if (Lo)
          return Io(Lo(r));
        if (Po)
          return Po(r);
        if (To) {
          var a = [];
          return To(r, function(c, f) {
            No(a, [f, c]);
          }), Ci(a);
        }
      }
      if (by(r)) {
        if (Co)
          return Io(Co(r));
        if (Ao)
          return Ao(r);
        if (Ro) {
          var l = [];
          return Ro(r, function(c) {
            No(l, c);
          }), Ci(l);
        }
      }
    };
    _r.exports = function(r) {
      return Oy(r) || Oo(r);
    };
  }
}
var Ty = _r.exports, Mo = function(o) {
  return o !== o;
}, Nl = function(r, a) {
  return r === 0 && a === 0 ? 1 / r === 1 / a : !!(r === a || Mo(r) && Mo(a));
}, Ry = Nl, bl = function() {
  return typeof Object.is == "function" ? Object.is : Ry;
}, Ly = bl, Cy = Xt, Py = function() {
  var r = Ly();
  return Cy(Object, { is: r }, {
    is: function() {
      return Object.is !== r;
    }
  }), r;
}, Ay = Xt, My = yn, Dy = Nl, Ol = bl, Fy = Py, Tl = My(Ol(), Object);
Ay(Tl, {
  getPolyfill: Ol,
  implementation: Dy,
  shim: Fy
});
var Gy = Tl, By = yn, Rl = Ve, $y = ct, Qi = $y("%ArrayBuffer%", !0), xr = Rl("ArrayBuffer.prototype.byteLength", !0), qy = Rl("Object.prototype.toString"), Do = !!Qi && !xr && new Qi(0).slice, Fo = !!Do && By(Do), Ll = xr || Fo ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return xr ? xr(r) : Fo(r, 0), !0;
  } catch {
    return !1;
  }
} : Qi ? function(r) {
  return qy(r) === "[object ArrayBuffer]";
} : function(r) {
  return !1;
}, zy = Date.prototype.getDay, Yy = function(r) {
  try {
    return zy.call(r), !0;
  } catch {
    return !1;
  }
}, Uy = Object.prototype.toString, Xy = "[object Date]", jy = jt(), Vy = function(r) {
  return typeof r != "object" || r === null ? !1 : jy ? Yy(r) : Uy.call(r) === Xy;
}, Ki = Ve, Cl = jt(), Pl, Al, es, ts;
if (Cl) {
  Pl = Ki("Object.prototype.hasOwnProperty"), Al = Ki("RegExp.prototype.exec"), es = {};
  var Pi = function() {
    throw es;
  };
  ts = {
    toString: Pi,
    valueOf: Pi
  }, typeof Symbol.toPrimitive == "symbol" && (ts[Symbol.toPrimitive] = Pi);
}
var Wy = Ki("Object.prototype.toString"), Hy = Object.getOwnPropertyDescriptor, Zy = "[object RegExp]", Jy = Cl ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  var a = Hy(r, "lastIndex"), l = a && Pl(a, "value");
  if (!l)
    return !1;
  try {
    Al(r, ts);
  } catch (c) {
    return c === es;
  }
} : function(r) {
  return !r || typeof r != "object" && typeof r != "function" ? !1 : Wy(r) === Zy;
}, Qy = Ve, Go = Qy("SharedArrayBuffer.prototype.byteLength", !0), Ky = Go ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return Go(r), !0;
  } catch {
    return !1;
  }
} : function(r) {
  return !1;
}, ev = Number.prototype.toString, tv = function(r) {
  try {
    return ev.call(r), !0;
  } catch {
    return !1;
  }
}, nv = Object.prototype.toString, rv = "[object Number]", iv = jt(), sv = function(r) {
  return typeof r == "number" ? !0 : typeof r != "object" ? !1 : iv ? tv(r) : nv.call(r) === rv;
}, Ml = Ve, av = Ml("Boolean.prototype.toString"), ov = Ml("Object.prototype.toString"), uv = function(r) {
  try {
    return av(r), !0;
  } catch {
    return !1;
  }
}, lv = "[object Boolean]", cv = jt(), hv = function(r) {
  return typeof r == "boolean" ? !0 : r === null || typeof r != "object" ? !1 : cv && Symbol.toStringTag in r ? uv(r) : ov(r) === lv;
}, ns = { exports: {} }, fv = Object.prototype.toString, gv = Ss();
if (gv) {
  var yv = Symbol.prototype.toString, vv = /^Symbol\(.*\)$/, pv = function(r) {
    return typeof r.valueOf() != "symbol" ? !1 : vv.test(yv.call(r));
  };
  ns.exports = function(r) {
    if (typeof r == "symbol")
      return !0;
    if (fv.call(r) !== "[object Symbol]")
      return !1;
    try {
      return pv(r);
    } catch {
      return !1;
    }
  };
} else
  ns.exports = function(r) {
    return !1;
  };
var mv = ns.exports, rs = { exports: {} }, Bo = typeof BigInt < "u" && BigInt, dv = function() {
  return typeof Bo == "function" && typeof BigInt == "function" && typeof Bo(42) == "bigint" && typeof BigInt(42) == "bigint";
}, _v = dv();
if (_v) {
  var xv = BigInt.prototype.valueOf, Ev = function(r) {
    try {
      return xv.call(r), !0;
    } catch {
    }
    return !1;
  };
  rs.exports = function(r) {
    return r === null || typeof r > "u" || typeof r == "boolean" || typeof r == "string" || typeof r == "number" || typeof r == "symbol" || typeof r == "function" ? !1 : typeof r == "bigint" ? !0 : Ev(r);
  };
} else
  rs.exports = function(r) {
    return !1;
  };
var kv = rs.exports, Sv = El, Iv = sv, wv = hv, Nv = mv, bv = kv, Ov = function(r) {
  if (r == null || typeof r != "object" && typeof r != "function")
    return null;
  if (Sv(r))
    return "String";
  if (Iv(r))
    return "Number";
  if (wv(r))
    return "Boolean";
  if (Nv(r))
    return "Symbol";
  if (bv(r))
    return "BigInt";
}, Pr = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, $o = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Ar;
Pr || (Ar = function(r) {
  return !1;
});
var is = Pr ? Pr.prototype.has : null, Ai = $o ? $o.prototype.has : null;
!Ar && !is && (Ar = function(r) {
  return !1;
});
var Tv = Ar || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (is.call(r, is), Ai)
      try {
        Ai.call(r, Ai);
      } catch {
        return !0;
      }
    return r instanceof Pr;
  } catch {
  }
  return !1;
}, ss = { exports: {} }, Rv = ct, Dl = Ve, Lv = Rv("%WeakSet%", !0), Mi = Dl("WeakSet.prototype.has", !0);
if (Mi) {
  var Di = Dl("WeakMap.prototype.has", !0);
  ss.exports = function(r) {
    if (!r || typeof r != "object")
      return !1;
    try {
      if (Mi(r, Mi), Di)
        try {
          Di(r, Di);
        } catch {
          return !0;
        }
      return r instanceof Lv;
    } catch {
    }
    return !1;
  };
} else
  ss.exports = function(r) {
    return !1;
  };
var Cv = ss.exports, Pv = Sl, Av = wl, Mv = Tv, Dv = Cv, Fv = function(r) {
  if (r && typeof r == "object") {
    if (Pv(r))
      return "Map";
    if (Av(r))
      return "Set";
    if (Mv(r))
      return "WeakMap";
    if (Dv(r))
      return "WeakSet";
  }
  return !1;
}, Fl = Function.prototype.toString, an = typeof Reflect == "object" && Reflect !== null && Reflect.apply, as, Er;
if (typeof an == "function" && typeof Object.defineProperty == "function")
  try {
    as = Object.defineProperty({}, "length", {
      get: function() {
        throw Er;
      }
    }), Er = {}, an(function() {
      throw 42;
    }, null, as);
  } catch (o) {
    o !== Er && (an = null);
  }
else
  an = null;
var Gv = /^\s*class\b/, os = function(r) {
  try {
    var a = Fl.call(r);
    return Gv.test(a);
  } catch {
    return !1;
  }
}, Fi = function(r) {
  try {
    return os(r) ? !1 : (Fl.call(r), !0);
  } catch {
    return !1;
  }
}, kr = Object.prototype.toString, Bv = "[object Object]", $v = "[object Function]", qv = "[object GeneratorFunction]", zv = "[object HTMLAllCollection]", Yv = "[object HTML document.all class]", Uv = "[object HTMLCollection]", Xv = typeof Symbol == "function" && !!Symbol.toStringTag, jv = !(0 in [,]), us = function() {
  return !1;
};
if (typeof document == "object") {
  var Vv = document.all;
  kr.call(Vv) === kr.call(document.all) && (us = function(r) {
    if ((jv || !r) && (typeof r > "u" || typeof r == "object"))
      try {
        var a = kr.call(r);
        return (a === zv || a === Yv || a === Uv || a === Bv) && r("") == null;
      } catch {
      }
    return !1;
  });
}
var Wv = an ? function(r) {
  if (us(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  try {
    an(r, null, as);
  } catch (a) {
    if (a !== Er)
      return !1;
  }
  return !os(r) && Fi(r);
} : function(r) {
  if (us(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  if (Xv)
    return Fi(r);
  if (os(r))
    return !1;
  var a = kr.call(r);
  return a !== $v && a !== qv && !/^\[object HTML/.test(a) ? !1 : Fi(r);
}, Hv = Wv, Zv = Object.prototype.toString, Gl = Object.prototype.hasOwnProperty, Jv = function(r, a, l) {
  for (var c = 0, f = r.length; c < f; c++)
    Gl.call(r, c) && (l == null ? a(r[c], c, r) : a.call(l, r[c], c, r));
}, Qv = function(r, a, l) {
  for (var c = 0, f = r.length; c < f; c++)
    l == null ? a(r.charAt(c), c, r) : a.call(l, r.charAt(c), c, r);
}, Kv = function(r, a, l) {
  for (var c in r)
    Gl.call(r, c) && (l == null ? a(r[c], c, r) : a.call(l, r[c], c, r));
}, ep = function(r, a, l) {
  if (!Hv(a))
    throw new TypeError("iterator must be a function");
  var c;
  arguments.length >= 3 && (c = l), Zv.call(r) === "[object Array]" ? Jv(r, a, c) : typeof r == "string" ? Qv(r, a, c) : Kv(r, a, c);
}, tp = ep, np = [
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array"
], Gi = np, rp = typeof globalThis > "u" ? zn : globalThis, ip = function() {
  for (var r = [], a = 0; a < Gi.length; a++)
    typeof rp[Gi[a]] == "function" && (r[r.length] = Gi[a]);
  return r;
}, Mr = tp, sp = ip, qo = yn, Ds = Ve, Sr = Ns, ap = Ds("Object.prototype.toString"), Bl = jt(), zo = typeof globalThis > "u" ? zn : globalThis, ls = sp(), Fs = Ds("String.prototype.slice"), Bi = Object.getPrototypeOf, op = Ds("Array.prototype.indexOf", !0) || function(r, a) {
  for (var l = 0; l < r.length; l += 1)
    if (r[l] === a)
      return l;
  return -1;
}, Dr = { __proto__: null };
Bl && Sr && Bi ? Mr(ls, function(o) {
  var r = new zo[o]();
  if (Symbol.toStringTag in r) {
    var a = Bi(r), l = Sr(a, Symbol.toStringTag);
    if (!l) {
      var c = Bi(a);
      l = Sr(c, Symbol.toStringTag);
    }
    Dr["$" + o] = qo(l.get);
  }
}) : Mr(ls, function(o) {
  var r = new zo[o](), a = r.slice || r.set;
  a && (Dr["$" + o] = qo(a));
});
var up = function(r) {
  var a = !1;
  return Mr(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Dr,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(l, c) {
      if (!a)
        try {
          "$" + l(r) === c && (a = Fs(c, 1));
        } catch {
        }
    }
  ), a;
}, lp = function(r) {
  var a = !1;
  return Mr(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    Dr,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(l, c) {
      if (!a)
        try {
          l(r), a = Fs(c, 1);
        } catch {
        }
    }
  ), a;
}, cp = function(r) {
  if (!r || typeof r != "object")
    return !1;
  if (!Bl) {
    var a = Fs(ap(r), 8, -1);
    return op(ls, a) > -1 ? a : a !== "Object" ? !1 : lp(r);
  }
  return Sr ? up(r) : null;
}, hp = Ve, Yo = hp("ArrayBuffer.prototype.byteLength", !0), fp = Ll, gp = function(r) {
  return fp(r) ? Yo ? Yo(r) : r.byteLength : NaN;
}, $l = Xf, ht = Ve, Uo = vg, yp = ct, cn = Ty, vp = _l, Xo = Gy, jo = hl, Vo = xl, Wo = Ll, Ho = Vy, Zo = Jy, Jo = Ky, Qo = ks, Ko = Ov, eu = Fv, tu = cp, nu = gp, ru = ht("SharedArrayBuffer.prototype.byteLength", !0), iu = ht("Date.prototype.getTime"), $i = Object.getPrototypeOf, su = ht("Object.prototype.toString"), Fr = yp("%Set%", !0), cs = ht("Map.prototype.has", !0), Gr = ht("Map.prototype.get", !0), au = ht("Map.prototype.size", !0), Br = ht("Set.prototype.add", !0), ql = ht("Set.prototype.delete", !0), $r = ht("Set.prototype.has", !0), Ir = ht("Set.prototype.size", !0);
function ou(o, r, a, l) {
  for (var c = cn(o), f; (f = c.next()) && !f.done; )
    if (Ke(r, f.value, a, l))
      return ql(o, f.value), !0;
  return !1;
}
function zl(o) {
  if (typeof o > "u")
    return null;
  if (typeof o != "object")
    return typeof o == "symbol" ? !1 : typeof o == "string" || typeof o == "number" ? +o == +o : !0;
}
function pp(o, r, a, l, c, f) {
  var v = zl(a);
  if (v != null)
    return v;
  var p = Gr(r, v), _ = $l({}, c, { strict: !1 });
  return typeof p > "u" && !cs(r, v) || !Ke(l, p, _, f) ? !1 : !cs(o, v) && Ke(l, p, _, f);
}
function mp(o, r, a) {
  var l = zl(a);
  return l ?? ($r(r, l) && !$r(o, l));
}
function uu(o, r, a, l, c, f) {
  for (var v = cn(o), p, _; (p = v.next()) && !p.done; )
    if (_ = p.value, // eslint-disable-next-line no-use-before-define
    Ke(a, _, c, f) && Ke(l, Gr(r, _), c, f))
      return ql(o, _), !0;
  return !1;
}
function Ke(o, r, a, l) {
  var c = a || {};
  if (c.strict ? Xo(o, r) : o === r)
    return !0;
  var f = Ko(o), v = Ko(r);
  if (f !== v)
    return !1;
  if (!o || !r || typeof o != "object" && typeof r != "object")
    return c.strict ? Xo(o, r) : o == r;
  var p = l.has(o), _ = l.has(r), x;
  if (p && _) {
    if (l.get(o) === l.get(r))
      return !0;
  } else
    x = {};
  return p || l.set(o, x), _ || l.set(r, x), xp(o, r, c, l);
}
function lu(o) {
  return !o || typeof o != "object" || typeof o.length != "number" || typeof o.copy != "function" || typeof o.slice != "function" || o.length > 0 && typeof o[0] != "number" ? !1 : !!(o.constructor && o.constructor.isBuffer && o.constructor.isBuffer(o));
}
function dp(o, r, a, l) {
  if (Ir(o) !== Ir(r))
    return !1;
  for (var c = cn(o), f = cn(r), v, p, _; (v = c.next()) && !v.done; )
    if (v.value && typeof v.value == "object")
      _ || (_ = new Fr()), Br(_, v.value);
    else if (!$r(r, v.value)) {
      if (a.strict || !mp(o, r, v.value))
        return !1;
      _ || (_ = new Fr()), Br(_, v.value);
    }
  if (_) {
    for (; (p = f.next()) && !p.done; )
      if (p.value && typeof p.value == "object") {
        if (!ou(_, p.value, a.strict, l))
          return !1;
      } else if (!a.strict && !$r(o, p.value) && !ou(_, p.value, a.strict, l))
        return !1;
    return Ir(_) === 0;
  }
  return !0;
}
function _p(o, r, a, l) {
  if (au(o) !== au(r))
    return !1;
  for (var c = cn(o), f = cn(r), v, p, _, x, S, m; (v = c.next()) && !v.done; )
    if (x = v.value[0], S = v.value[1], x && typeof x == "object")
      _ || (_ = new Fr()), Br(_, x);
    else if (m = Gr(r, x), typeof m > "u" && !cs(r, x) || !Ke(S, m, a, l)) {
      if (a.strict || !pp(o, r, x, S, a, l))
        return !1;
      _ || (_ = new Fr()), Br(_, x);
    }
  if (_) {
    for (; (p = f.next()) && !p.done; )
      if (x = p.value[0], m = p.value[1], x && typeof x == "object") {
        if (!uu(_, o, x, m, a, l))
          return !1;
      } else if (!a.strict && (!o.has(x) || !Ke(Gr(o, x), m, a, l)) && !uu(_, o, x, m, $l({}, a, { strict: !1 }), l))
        return !1;
    return Ir(_) === 0;
  }
  return !0;
}
function xp(o, r, a, l) {
  var c, f;
  if (typeof o != typeof r || o == null || r == null || su(o) !== su(r) || jo(o) !== jo(r))
    return !1;
  var v = Vo(o), p = Vo(r);
  if (v !== p)
    return !1;
  var _ = o instanceof Error, x = r instanceof Error;
  if (_ !== x || (_ || x) && (o.name !== r.name || o.message !== r.message))
    return !1;
  var S = Zo(o), m = Zo(r);
  if (S !== m || (S || m) && (o.source !== r.source || Uo(o) !== Uo(r)))
    return !1;
  var E = Ho(o), k = Ho(r);
  if (E !== k || (E || k) && iu(o) !== iu(r) || a.strict && $i && $i(o) !== $i(r))
    return !1;
  var w = tu(o), T = tu(r);
  if (w !== T)
    return !1;
  if (w || T) {
    if (o.length !== r.length)
      return !1;
    for (c = 0; c < o.length; c++)
      if (o[c] !== r[c])
        return !1;
    return !0;
  }
  var C = lu(o), P = lu(r);
  if (C !== P)
    return !1;
  if (C || P) {
    if (o.length !== r.length)
      return !1;
    for (c = 0; c < o.length; c++)
      if (o[c] !== r[c])
        return !1;
    return !0;
  }
  var A = Wo(o), L = Wo(r);
  if (A !== L)
    return !1;
  if (A || L)
    return nu(o) !== nu(r) ? !1 : typeof Uint8Array == "function" && Ke(new Uint8Array(o), new Uint8Array(r), a, l);
  var G = Jo(o), M = Jo(r);
  if (G !== M)
    return !1;
  if (G || M)
    return ru(o) !== ru(r) ? !1 : typeof Uint8Array == "function" && Ke(new Uint8Array(o), new Uint8Array(r), a, l);
  if (typeof o != typeof r)
    return !1;
  var $ = Qo(o), Y = Qo(r);
  if ($.length !== Y.length)
    return !1;
  for ($.sort(), Y.sort(), c = $.length - 1; c >= 0; c--)
    if ($[c] != Y[c])
      return !1;
  for (c = $.length - 1; c >= 0; c--)
    if (f = $[c], !Ke(o[f], r[f], a, l))
      return !1;
  var U = eu(o), X = eu(r);
  return U !== X ? !1 : U === "Set" || X === "Set" ? dp(o, r, a, l) : U === "Map" ? _p(o, r, a, l) : !0;
}
var Ep = function(r, a, l) {
  return Ke(r, a, l, vp());
};
const kp = /* @__PURE__ */ Yu(Ep);
var Sp = Object.defineProperty, ge = (o, r) => Sp(o, "name", { value: r, configurable: !0 }), Ip = class {
  constructor(r) {
    this.direction = !1, this.compareProperties = !0;
    var a, l, c;
    this.precision = 10 ** -((a = r == null ? void 0 : r.precision) != null ? a : 17), this.direction = (l = r == null ? void 0 : r.direction) != null ? l : !1, this.compareProperties = (c = r == null ? void 0 : r.compareProperties) != null ? c : !0;
  }
  compare(r, a) {
    if (r.type !== a.type || !Mn(r, a))
      return !1;
    switch (r.type) {
      case "Point":
        return this.compareCoord(r.coordinates, a.coordinates);
      case "LineString":
        return this.compareLine(r.coordinates, a.coordinates);
      case "Polygon":
        return this.comparePolygon(r, a);
      case "GeometryCollection":
        return this.compareGeometryCollection(r, a);
      case "Feature":
        return this.compareFeature(r, a);
      case "FeatureCollection":
        return this.compareFeatureCollection(r, a);
      default:
        if (r.type.startsWith("Multi")) {
          const l = hs(r), c = hs(
            a
          );
          return l.every(
            (f) => c.some((v) => this.compare(f, v))
          );
        }
    }
    return !1;
  }
  compareCoord(r, a) {
    return r.length === a.length && r.every((l, c) => Math.abs(l - a[c]) < this.precision);
  }
  compareLine(r, a, l = 0, c = !1) {
    if (!Mn(r, a))
      return !1;
    const f = r;
    let v = a;
    if (c && !this.compareCoord(f[0], v[0])) {
      const _ = this.fixStartIndex(v, f);
      if (_)
        v = _;
      else
        return !1;
    }
    const p = this.compareCoord(f[l], v[l]);
    return this.direction || p ? this.comparePath(f, v) : this.compareCoord(f[l], v[v.length - (1 + l)]) ? this.comparePath(f.slice().reverse(), v) : !1;
  }
  fixStartIndex(r, a) {
    let l, c = -1;
    for (let f = 0; f < r.length; f++)
      if (this.compareCoord(r[f], a[0])) {
        c = f;
        break;
      }
    return c >= 0 && (l = [].concat(
      r.slice(c, r.length),
      r.slice(1, c + 1)
    )), l;
  }
  comparePath(r, a) {
    return r.every((l, c) => this.compareCoord(l, a[c]));
  }
  comparePolygon(r, a) {
    if (this.compareLine(r.coordinates[0], a.coordinates[0], 1, !0)) {
      const l = r.coordinates.slice(1, r.coordinates.length), c = a.coordinates.slice(1, a.coordinates.length);
      return l.every(
        (f) => c.some((v) => this.compareLine(f, v, 1, !0))
      );
    }
    return !1;
  }
  compareGeometryCollection(r, a) {
    return Mn(r.geometries, a.geometries) && this.compareBBox(r, a) && r.geometries.every((l, c) => this.compare(l, a.geometries[c]));
  }
  compareFeature(r, a) {
    return r.id === a.id && (this.compareProperties ? kp(r.properties, a.properties) : !0) && this.compareBBox(r, a) && this.compare(r.geometry, a.geometry);
  }
  compareFeatureCollection(r, a) {
    return Mn(r.features, a.features) && this.compareBBox(r, a) && r.features.every((l, c) => this.compare(l, a.features[c]));
  }
  compareBBox(r, a) {
    return !r.bbox && !a.bbox || (r.bbox && a.bbox ? this.compareCoord(r.bbox, a.bbox) : !1);
  }
};
ge(Ip, "GeojsonEquality");
function Mn(o, r) {
  return o.coordinates ? o.coordinates.length === r.coordinates.length : o.length === r.length;
}
ge(Mn, "sameLength");
function hs(o) {
  return o.coordinates.map((r) => ({
    type: o.type.replace("Multi", ""),
    coordinates: r
  }));
}
ge(hs, "explode");
var Me = 63710088e-1, Yl = {
  centimeters: Me * 100,
  centimetres: Me * 100,
  degrees: 360 / (2 * Math.PI),
  feet: Me * 3.28084,
  inches: Me * 39.37,
  kilometers: Me / 1e3,
  kilometres: Me / 1e3,
  meters: Me,
  metres: Me,
  miles: Me / 1609.344,
  millimeters: Me * 1e3,
  millimetres: Me * 1e3,
  nauticalmiles: Me / 1852,
  radians: 1,
  yards: Me * 1.0936
}, cu = {
  acres: 247105e-9,
  centimeters: 1e4,
  centimetres: 1e4,
  feet: 10.763910417,
  hectares: 1e-4,
  inches: 1550.003100006,
  kilometers: 1e-6,
  kilometres: 1e-6,
  meters: 1,
  metres: 1,
  miles: 386e-9,
  nauticalmiles: 29155334959812285e-23,
  millimeters: 1e6,
  millimetres: 1e6,
  yards: 1.195990046
};
function et(o, r, a = {}) {
  const l = { type: "Feature" };
  return (a.id === 0 || a.id) && (l.id = a.id), a.bbox && (l.bbox = a.bbox), l.properties = r || {}, l.geometry = o, l;
}
ge(et, "feature");
function wp(o, r, a = {}) {
  switch (o) {
    case "Point":
      return ot(r).geometry;
    case "LineString":
      return _t(r).geometry;
    case "Polygon":
      return Vn(r).geometry;
    case "MultiPoint":
      return Xl(r).geometry;
    case "MultiLineString":
      return Ul(r).geometry;
    case "MultiPolygon":
      return Gs(r).geometry;
    default:
      throw new Error(o + " is invalid");
  }
}
ge(wp, "geometry");
function ot(o, r, a = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!qr(o[0]) || !qr(o[1]))
    throw new Error("coordinates must contain numbers");
  return et({
    type: "Point",
    coordinates: o
  }, r, a);
}
ge(ot, "point");
function Np(o, r, a = {}) {
  return Et(
    o.map((l) => ot(l, r)),
    a
  );
}
ge(Np, "points");
function Vn(o, r, a = {}) {
  for (const c of o) {
    if (c.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (c[c.length - 1].length !== c[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let f = 0; f < c[c.length - 1].length; f++)
      if (c[c.length - 1][f] !== c[0][f])
        throw new Error("First and last Position are not equivalent.");
  }
  return et({
    type: "Polygon",
    coordinates: o
  }, r, a);
}
ge(Vn, "polygon");
function bp(o, r, a = {}) {
  return Et(
    o.map((l) => Vn(l, r)),
    a
  );
}
ge(bp, "polygons");
function _t(o, r, a = {}) {
  if (o.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return et({
    type: "LineString",
    coordinates: o
  }, r, a);
}
ge(_t, "lineString");
function Op(o, r, a = {}) {
  return Et(
    o.map((l) => _t(l, r)),
    a
  );
}
ge(Op, "lineStrings");
function Et(o, r = {}) {
  const a = { type: "FeatureCollection" };
  return r.id && (a.id = r.id), r.bbox && (a.bbox = r.bbox), a.features = o, a;
}
ge(Et, "featureCollection");
function Ul(o, r, a = {}) {
  return et({
    type: "MultiLineString",
    coordinates: o
  }, r, a);
}
ge(Ul, "multiLineString");
function Xl(o, r, a = {}) {
  return et({
    type: "MultiPoint",
    coordinates: o
  }, r, a);
}
ge(Xl, "multiPoint");
function Gs(o, r, a = {}) {
  return et({
    type: "MultiPolygon",
    coordinates: o
  }, r, a);
}
ge(Gs, "multiPolygon");
function Tp(o, r, a = {}) {
  return et({
    type: "GeometryCollection",
    geometries: o
  }, r, a);
}
ge(Tp, "geometryCollection");
function Rp(o, r = 0) {
  if (r && !(r >= 0))
    throw new Error("precision must be a positive number");
  const a = Math.pow(10, r || 0);
  return Math.round(o * a) / a;
}
ge(Rp, "round");
function Bs(o, r = "kilometers") {
  const a = Yl[r];
  if (!a)
    throw new Error(r + " units is invalid");
  return o * a;
}
ge(Bs, "radiansToLength");
function Qr(o, r = "kilometers") {
  const a = Yl[r];
  if (!a)
    throw new Error(r + " units is invalid");
  return o / a;
}
ge(Qr, "lengthToRadians");
function Lp(o, r) {
  return jl(Qr(o, r));
}
ge(Lp, "lengthToDegrees");
function Cp(o) {
  let r = o % 360;
  return r < 0 && (r += 360), r;
}
ge(Cp, "bearingToAzimuth");
function jl(o) {
  return o % (2 * Math.PI) * 180 / Math.PI;
}
ge(jl, "radiansToDegrees");
function Pp(o) {
  return o % 360 * Math.PI / 180;
}
ge(Pp, "degreesToRadians");
function Ap(o, r = "kilometers", a = "kilometers") {
  if (!(o >= 0))
    throw new Error("length must be a positive number");
  return Bs(Qr(o, r), a);
}
ge(Ap, "convertLength");
function Mp(o, r = "meters", a = "kilometers") {
  if (!(o >= 0))
    throw new Error("area must be a positive number");
  const l = cu[r];
  if (!l)
    throw new Error("invalid original units");
  const c = cu[a];
  if (!c)
    throw new Error("invalid final units");
  return o / l * c;
}
ge(Mp, "convertArea");
function qr(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
ge(qr, "isNumber");
function $s(o) {
  return o !== null && typeof o == "object" && !Array.isArray(o);
}
ge($s, "isObject");
function Dp(o) {
  if (!o)
    throw new Error("bbox is required");
  if (!Array.isArray(o))
    throw new Error("bbox must be an Array");
  if (o.length !== 4 && o.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  o.forEach((r) => {
    if (!qr(r))
      throw new Error("bbox must only contain numbers");
  });
}
ge(Dp, "validateBBox");
function Fp(o) {
  if (!o)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof o) === -1)
    throw new Error("id must be a number or a string");
}
ge(Fp, "validateId");
var Gp = Object.defineProperty, be = (o, r) => Gp(o, "name", { value: r, configurable: !0 });
function pn(o, r, a) {
  if (o !== null)
    for (var l, c, f, v, p, _, x, S = 0, m = 0, E, k = o.type, w = k === "FeatureCollection", T = k === "Feature", C = w ? o.features.length : 1, P = 0; P < C; P++) {
      x = w ? o.features[P].geometry : T ? o.geometry : o, E = x ? x.type === "GeometryCollection" : !1, p = E ? x.geometries.length : 1;
      for (var A = 0; A < p; A++) {
        var L = 0, G = 0;
        if (v = E ? x.geometries[A] : x, v !== null) {
          _ = v.coordinates;
          var M = v.type;
          switch (S = a && (M === "Polygon" || M === "MultiPolygon") ? 1 : 0, M) {
            case null:
              break;
            case "Point":
              if (r(
                _,
                m,
                P,
                L,
                G
              ) === !1)
                return !1;
              m++, L++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < _.length; l++) {
                if (r(
                  _[l],
                  m,
                  P,
                  L,
                  G
                ) === !1)
                  return !1;
                m++, M === "MultiPoint" && L++;
              }
              M === "LineString" && L++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < _.length; l++) {
                for (c = 0; c < _[l].length - S; c++) {
                  if (r(
                    _[l][c],
                    m,
                    P,
                    L,
                    G
                  ) === !1)
                    return !1;
                  m++;
                }
                M === "MultiLineString" && L++, M === "Polygon" && G++;
              }
              M === "Polygon" && L++;
              break;
            case "MultiPolygon":
              for (l = 0; l < _.length; l++) {
                for (G = 0, c = 0; c < _[l].length; c++) {
                  for (f = 0; f < _[l][c].length - S; f++) {
                    if (r(
                      _[l][c][f],
                      m,
                      P,
                      L,
                      G
                    ) === !1)
                      return !1;
                    m++;
                  }
                  G++;
                }
                L++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < v.geometries.length; l++)
                if (pn(v.geometries[l], r, a) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
be(pn, "coordEach");
function Bp(o, r, a, l) {
  var c = a;
  return pn(
    o,
    function(f, v, p, _, x) {
      v === 0 && a === void 0 ? c = f : c = r(
        c,
        f,
        v,
        p,
        _,
        x
      );
    },
    l
  ), c;
}
be(Bp, "coordReduce");
function Vl(o, r) {
  var a;
  switch (o.type) {
    case "FeatureCollection":
      for (a = 0; a < o.features.length && r(o.features[a].properties, a) !== !1; a++)
        ;
      break;
    case "Feature":
      r(o.properties, 0);
      break;
  }
}
be(Vl, "propEach");
function $p(o, r, a) {
  var l = a;
  return Vl(o, function(c, f) {
    f === 0 && a === void 0 ? l = c : l = r(l, c, f);
  }), l;
}
be($p, "propReduce");
function zr(o, r) {
  if (o.type === "Feature")
    r(o, 0);
  else if (o.type === "FeatureCollection")
    for (var a = 0; a < o.features.length && r(o.features[a], a) !== !1; a++)
      ;
}
be(zr, "featureEach");
function qp(o, r, a) {
  var l = a;
  return zr(o, function(c, f) {
    f === 0 && a === void 0 ? l = c : l = r(l, c, f);
  }), l;
}
be(qp, "featureReduce");
function zp(o) {
  var r = [];
  return pn(o, function(a) {
    r.push(a);
  }), r;
}
be(zp, "coordAll");
function mn(o, r) {
  var a, l, c, f, v, p, _, x, S, m, E = 0, k = o.type === "FeatureCollection", w = o.type === "Feature", T = k ? o.features.length : 1;
  for (a = 0; a < T; a++) {
    for (p = k ? o.features[a].geometry : w ? o.geometry : o, x = k ? o.features[a].properties : w ? o.properties : {}, S = k ? o.features[a].bbox : w ? o.bbox : void 0, m = k ? o.features[a].id : w ? o.id : void 0, _ = p ? p.type === "GeometryCollection" : !1, v = _ ? p.geometries.length : 1, c = 0; c < v; c++) {
      if (f = _ ? p.geometries[c] : p, f === null) {
        if (r(
          null,
          E,
          x,
          S,
          m
        ) === !1)
          return !1;
        continue;
      }
      switch (f.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (r(
            f,
            E,
            x,
            S,
            m
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (l = 0; l < f.geometries.length; l++)
            if (r(
              f.geometries[l],
              E,
              x,
              S,
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
be(mn, "geomEach");
function Yp(o, r, a) {
  var l = a;
  return mn(
    o,
    function(c, f, v, p, _) {
      f === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        f,
        v,
        p,
        _
      );
    }
  ), l;
}
be(Yp, "geomReduce");
function Kr(o, r) {
  mn(o, function(a, l, c, f, v) {
    var p = a === null ? null : a.type;
    switch (p) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return r(
          et(a, c, { bbox: f, id: v }),
          l,
          0
        ) === !1 ? !1 : void 0;
    }
    var _;
    switch (p) {
      case "MultiPoint":
        _ = "Point";
        break;
      case "MultiLineString":
        _ = "LineString";
        break;
      case "MultiPolygon":
        _ = "Polygon";
        break;
    }
    for (var x = 0; x < a.coordinates.length; x++) {
      var S = a.coordinates[x], m = {
        type: _,
        coordinates: S
      };
      if (r(et(m, c), l, x) === !1)
        return !1;
    }
  });
}
be(Kr, "flattenEach");
function Up(o, r, a) {
  var l = a;
  return Kr(
    o,
    function(c, f, v) {
      f === 0 && v === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        f,
        v
      );
    }
  ), l;
}
be(Up, "flattenReduce");
function Wl(o, r) {
  Kr(o, function(a, l, c) {
    var f = 0;
    if (a.geometry) {
      var v = a.geometry.type;
      if (!(v === "Point" || v === "MultiPoint")) {
        var p, _ = 0, x = 0, S = 0;
        if (pn(
          a,
          function(m, E, k, w, T) {
            if (p === void 0 || l > _ || w > x || T > S) {
              p = m, _ = l, x = w, S = T, f = 0;
              return;
            }
            var C = _t(
              [p, m],
              a.properties
            );
            if (r(
              C,
              l,
              c,
              T,
              f
            ) === !1)
              return !1;
            f++, p = m;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
be(Wl, "segmentEach");
function Xp(o, r, a) {
  var l = a, c = !1;
  return Wl(
    o,
    function(f, v, p, _, x) {
      c === !1 && a === void 0 ? l = f : l = r(
        l,
        f,
        v,
        p,
        _,
        x
      ), c = !0;
    }
  ), l;
}
be(Xp, "segmentReduce");
function Hl(o, r) {
  if (!o)
    throw new Error("geojson is required");
  Kr(o, function(a, l, c) {
    if (a.geometry !== null) {
      var f = a.geometry.type, v = a.geometry.coordinates;
      switch (f) {
        case "LineString":
          if (r(a, l, c, 0, 0) === !1)
            return !1;
          break;
        case "Polygon":
          for (var p = 0; p < v.length; p++)
            if (r(
              _t(v[p], a.properties),
              l,
              c,
              p
            ) === !1)
              return !1;
          break;
      }
    }
  });
}
be(Hl, "lineEach");
function jp(o, r, a) {
  var l = a;
  return Hl(
    o,
    function(c, f, v, p) {
      f === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        f,
        v,
        p
      );
    }
  ), l;
}
be(jp, "lineReduce");
function Vp(o, r) {
  if (r = r || {}, !$s(r))
    throw new Error("options is invalid");
  var a = r.featureIndex || 0, l = r.multiFeatureIndex || 0, c = r.geometryIndex || 0, f = r.segmentIndex || 0, v = r.properties, p;
  switch (o.type) {
    case "FeatureCollection":
      a < 0 && (a = o.features.length + a), v = v || o.features[a].properties, p = o.features[a].geometry;
      break;
    case "Feature":
      v = v || o.properties, p = o.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      p = o;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (p === null)
    return null;
  var _ = p.coordinates;
  switch (p.type) {
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
      return f < 0 && (f = _.length + f - 1), _t(
        [_[f], _[f + 1]],
        v,
        r
      );
    case "Polygon":
      return c < 0 && (c = _.length + c), f < 0 && (f = _[c].length + f - 1), _t(
        [
          _[c][f],
          _[c][f + 1]
        ],
        v,
        r
      );
    case "MultiLineString":
      return l < 0 && (l = _.length + l), f < 0 && (f = _[l].length + f - 1), _t(
        [
          _[l][f],
          _[l][f + 1]
        ],
        v,
        r
      );
    case "MultiPolygon":
      return l < 0 && (l = _.length + l), c < 0 && (c = _[l].length + c), f < 0 && (f = _[l][c].length - f - 1), _t(
        [
          _[l][c][f],
          _[l][c][f + 1]
        ],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
be(Vp, "findSegment");
function Wp(o, r) {
  if (r = r || {}, !$s(r))
    throw new Error("options is invalid");
  var a = r.featureIndex || 0, l = r.multiFeatureIndex || 0, c = r.geometryIndex || 0, f = r.coordIndex || 0, v = r.properties, p;
  switch (o.type) {
    case "FeatureCollection":
      a < 0 && (a = o.features.length + a), v = v || o.features[a].properties, p = o.features[a].geometry;
      break;
    case "Feature":
      v = v || o.properties, p = o.geometry;
      break;
    case "Point":
    case "MultiPoint":
      return null;
    case "LineString":
    case "Polygon":
    case "MultiLineString":
    case "MultiPolygon":
      p = o;
      break;
    default:
      throw new Error("geojson is invalid");
  }
  if (p === null)
    return null;
  var _ = p.coordinates;
  switch (p.type) {
    case "Point":
      return ot(_, v, r);
    case "MultiPoint":
      return l < 0 && (l = _.length + l), ot(_[l], v, r);
    case "LineString":
      return f < 0 && (f = _.length + f), ot(_[f], v, r);
    case "Polygon":
      return c < 0 && (c = _.length + c), f < 0 && (f = _[c].length + f), ot(_[c][f], v, r);
    case "MultiLineString":
      return l < 0 && (l = _.length + l), f < 0 && (f = _[l].length + f), ot(_[l][f], v, r);
    case "MultiPolygon":
      return l < 0 && (l = _.length + l), c < 0 && (c = _[l].length + c), f < 0 && (f = _[l][c].length - f), ot(
        _[l][c][f],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
be(Wp, "findPoint");
var Hp = Object.defineProperty, Zp = (o, r) => Hp(o, "name", { value: r, configurable: !0 });
function Zl(o, r = {}) {
  if (o.bbox != null && r.recompute !== !0)
    return o.bbox;
  const a = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return pn(o, (l) => {
    a[0] > l[0] && (a[0] = l[0]), a[1] > l[1] && (a[1] = l[1]), a[2] < l[0] && (a[2] = l[0]), a[3] < l[1] && (a[3] = l[1]);
  }), a;
}
Zp(Zl, "bbox");
var Jp = Object.defineProperty, Qp = (o, r) => Jp(o, "name", { value: r, configurable: !0 });
function Jl(o, r = {}) {
  const a = Zl(o), l = (a[0] + a[2]) / 2, c = (a[1] + a[3]) / 2;
  return ot([l, c], r.properties, r);
}
Qp(Jl, "center");
var Ql = { exports: {} };
(function(o, r) {
  (function(a, l) {
    o.exports = l();
  })(zn, function() {
    function a(s, e) {
      if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function l(s, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(s, n.key, n);
      }
    }
    function c(s, e, t) {
      return e && l(s.prototype, e), t && l(s, t), s;
    }
    function f(s, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      s.prototype = Object.create(e && e.prototype, { constructor: { value: s, writable: !0, configurable: !0 } }), e && p(s, e);
    }
    function v(s) {
      return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, v(s);
    }
    function p(s, e) {
      return p = Object.setPrototypeOf || function(t, n) {
        return t.__proto__ = n, t;
      }, p(s, e);
    }
    function _() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function x(s, e, t) {
      return x = _() ? Reflect.construct : function(n, i, u) {
        var h = [null];
        h.push.apply(h, i);
        var g = new (Function.bind.apply(n, h))();
        return u && p(g, u.prototype), g;
      }, x.apply(null, arguments);
    }
    function S(s) {
      var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return S = function(t) {
        if (t === null || (n = t, Function.toString.call(n).indexOf("[native code]") === -1)) return t;
        var n;
        if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
        if (e !== void 0) {
          if (e.has(t)) return e.get(t);
          e.set(t, i);
        }
        function i() {
          return x(t, arguments, v(this).constructor);
        }
        return i.prototype = Object.create(t.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), p(i, t);
      }, S(s);
    }
    function m(s) {
      if (s === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return s;
    }
    function E(s, e) {
      if (e && (typeof e == "object" || typeof e == "function")) return e;
      if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
      return m(s);
    }
    function k(s) {
      var e = _();
      return function() {
        var t, n = v(s);
        if (e) {
          var i = v(this).constructor;
          t = Reflect.construct(n, arguments, i);
        } else t = n.apply(this, arguments);
        return E(this, t);
      };
    }
    function w(s, e, t) {
      return w = typeof Reflect < "u" && Reflect.get ? Reflect.get : function(n, i, u) {
        var h = function(y, d) {
          for (; !Object.prototype.hasOwnProperty.call(y, d) && (y = v(y)) !== null; ) ;
          return y;
        }(n, i);
        if (h) {
          var g = Object.getOwnPropertyDescriptor(h, i);
          return g.get ? g.get.call(u) : g.value;
        }
      }, w(s, e, t || s);
    }
    function T(s) {
      return function(e) {
        if (Array.isArray(e)) return P(e);
      }(s) || function(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
      }(s) || C(s) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function C(s, e) {
      if (s) {
        if (typeof s == "string") return P(s, e);
        var t = Object.prototype.toString.call(s).slice(8, -1);
        return t === "Object" && s.constructor && (t = s.constructor.name), t === "Map" || t === "Set" ? Array.from(s) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? P(s, e) : void 0;
      }
    }
    function P(s, e) {
      (e == null || e > s.length) && (e = s.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = s[t];
      return n;
    }
    function A(s, e) {
      var t = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
      if (!t) {
        if (Array.isArray(s) || (t = C(s)) || e) {
          t && (s = t);
          var n = 0, i = function() {
          };
          return { s: i, n: function() {
            return n >= s.length ? { done: !0 } : { done: !1, value: s[n++] };
          }, e: function(y) {
            throw y;
          }, f: i };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var u, h = !0, g = !1;
      return { s: function() {
        t = t.call(s);
      }, n: function() {
        var y = t.next();
        return h = y.done, y;
      }, e: function(y) {
        g = !0, u = y;
      }, f: function() {
        try {
          h || t.return == null || t.return();
        } finally {
          if (g) throw u;
        }
      } };
    }
    var L = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getEndCapStyle", value: function() {
        return this._endCapStyle;
      } }, { key: "isSingleSided", value: function() {
        return this._isSingleSided;
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._quadrantSegments = e, this._quadrantSegments === 0 && (this._joinStyle = s.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = s.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), e <= 0 && (this._quadrantSegments = 1), this._joinStyle !== s.JOIN_ROUND && (this._quadrantSegments = s.DEFAULT_QUADRANT_SEGMENTS);
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
        if (this._quadrantSegments = s.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = s.CAP_ROUND, this._joinStyle = s.JOIN_ROUND, this._mitreLimit = s.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = s.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setQuadrantSegments(e);
          } else if (arguments.length === 2) {
            var t = arguments[0], n = arguments[1];
            this.setQuadrantSegments(t), this.setEndCapStyle(n);
          } else if (arguments.length === 4) {
            var i = arguments[0], u = arguments[1], h = arguments[2], g = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(u), this.setJoinStyle(h), this.setMitreLimit(g);
          }
        }
      } }, { key: "bufferDistanceError", value: function(e) {
        var t = Math.PI / 2 / e;
        return 1 - Math.cos(t / 2);
      } }]), s;
    }();
    L.CAP_ROUND = 1, L.CAP_FLAT = 2, L.CAP_SQUARE = 3, L.JOIN_ROUND = 1, L.JOIN_MITRE = 2, L.JOIN_BEVEL = 3, L.DEFAULT_QUADRANT_SEGMENTS = 8, L.DEFAULT_MITRE_LIMIT = 5, L.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var G = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ Exception: t })[0], i;
      }
      return c(t, [{ key: "toString", value: function() {
        return this.message;
      } }]), t;
    }(S(Error)), M = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IllegalArgumentException: t })[0], i;
      }
      return t;
    }(G), $ = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e) {
      } }]), s;
    }();
    function Y() {
    }
    function U() {
    }
    function X() {
    }
    var ie, ee, te, ae, q, ne, ue, ye, ke = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "equalsWithTolerance", value: function(e, t, n) {
        return Math.abs(e - t) <= n;
      } }]), s;
    }(), Se = function() {
      function s(e, t) {
        a(this, s), this.low = t || 0, this.high = e || 0;
      }
      return c(s, null, [{ key: "toBinaryString", value: function(e) {
        var t, n = "";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.high & t) === t ? "1" : "0";
        for (t = 2147483648; t > 0; t >>>= 1) n += (e.low & t) === t ? "1" : "0";
        return n;
      } }]), s;
    }();
    function j() {
    }
    function Le() {
    }
    j.NaN = NaN, j.isNaN = function(s) {
      return Number.isNaN(s);
    }, j.isInfinite = function(s) {
      return !Number.isFinite(s);
    }, j.MAX_VALUE = Number.MAX_VALUE, j.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, j.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (ne = 2146435072, ue = new Float64Array(1), ye = new Int32Array(ue.buffer), j.doubleToLongBits = function(s) {
      ue[0] = s;
      var e = 0 | ye[0], t = 0 | ye[1];
      return (t & ne) === ne && 1048575 & t && e !== 0 && (e = 0, t = 2146959360), new Se(t, e);
    }, j.longBitsToDouble = function(s) {
      return ye[0] = s.low, ye[1] = s.high, ue[0];
    }) : (ie = 1023, ee = Math.log2, te = Math.floor, ae = Math.pow, q = function() {
      for (var s = 53; s > 0; s--) {
        var e = ae(2, s) - 1;
        if (te(ee(e)) + 1 === s) return e;
      }
      return 0;
    }(), j.doubleToLongBits = function(s) {
      var e, t, n, i, u, h, g, y, d;
      if (s < 0 || 1 / s === Number.NEGATIVE_INFINITY ? (h = 1 << 31, s = -s) : h = 0, s === 0) return new Se(y = h, d = 0);
      if (s === 1 / 0) return new Se(y = 2146435072 | h, d = 0);
      if (s != s) return new Se(y = 2146959360, d = 0);
      if (i = 0, d = 0, (e = te(s)) > 1) if (e <= q) (i = te(ee(e))) <= 20 ? (d = 0, y = e << 20 - i & 1048575) : (d = e % (t = ae(2, n = i - 20)) << 32 - n, y = e / t & 1048575);
      else for (n = e, d = 0; (n = te(t = n / 2)) !== 0; ) i++, d >>>= 1, d |= (1 & y) << 31, y >>>= 1, t !== n && (y |= 524288);
      if (g = i + ie, u = e === 0, e = s - e, i < 52 && e !== 0) for (n = 0; ; ) {
        if ((t = 2 * e) >= 1 ? (e = t - 1, u ? (g--, u = !1) : (n <<= 1, n |= 1, i++)) : (e = t, u ? --g == 0 && (i++, u = !1) : (n <<= 1, i++)), i === 20) y |= n, n = 0;
        else if (i === 52) {
          d |= n;
          break;
        }
        if (t === 1) {
          i < 20 ? y |= n << 20 - i : i < 52 && (d |= n << 52 - i);
          break;
        }
      }
      return y |= g << 20, new Se(y |= h, d);
    }, j.longBitsToDouble = function(s) {
      var e, t, n, i, u = s.high, h = s.low, g = u & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & u) >> 20) - ie, i = 0, t = 1 << 19, e = 1; e <= 20; e++) u & t && (i += ae(2, -e)), t >>>= 1;
      for (t = 1 << 31, e = 21; e <= 52; e++) h & t && (i += ae(2, -e)), t >>>= 1;
      if (n === -1023) {
        if (i === 0) return 0 * g;
        n = -1022;
      } else {
        if (n === 1024) return i === 0 ? g / 0 : NaN;
        i += 1;
      }
      return g * i * ae(2, n);
    });
    var Ie = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ RuntimeException: t })[0], i;
      }
      return t;
    }(G), Ae = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) Ie.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Ie.constructor_.call(this, n);
        }
      } }]), t;
    }(Ie), se = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "shouldNeverReachHere", value: function() {
        if (arguments.length === 0) s.shouldNeverReachHere(null);
        else if (arguments.length === 1) {
          var e = arguments[0];
          throw new Ae("Should never reach here" + (e !== null ? ": " + e : ""));
        }
      } }, { key: "isTrue", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          s.isTrue(e, null);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          if (!t) throw n === null ? new Ae() : new Ae(n);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          s.equals(e, t, null);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          if (!i.equals(n)) throw new Ae("Expected " + n + " but encountered " + i + (u !== null ? ": " + u : ""));
        }
      } }]), s;
    }(), ft = new ArrayBuffer(8), vc = new Float64Array(ft), Xs = new Int32Array(ft), O = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getM", value: function() {
        return j.NaN;
      } }, { key: "setOrdinate", value: function(e, t) {
        switch (e) {
          case s.X:
            this.x = t;
            break;
          case s.Y:
            this.y = t;
            break;
          case s.Z:
            this.setZ(t);
            break;
          default:
            throw new M("Invalid ordinate index: " + e);
        }
      } }, { key: "equals2D", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.x === e.x && this.y === e.y;
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return !!ke.equalsWithTolerance(this.x, t.x, n) && !!ke.equalsWithTolerance(this.y, t.y, n);
        }
      } }, { key: "setM", value: function(e) {
        throw new M("Invalid ordinate index: " + s.M);
      } }, { key: "getZ", value: function() {
        return this.z;
      } }, { key: "getOrdinate", value: function(e) {
        switch (e) {
          case s.X:
            return this.x;
          case s.Y:
            return this.y;
          case s.Z:
            return this.getZ();
        }
        throw new M("Invalid ordinate index: " + e);
      } }, { key: "equals3D", value: function(e) {
        return this.x === e.x && this.y === e.y && (this.getZ() === e.getZ() || j.isNaN(this.getZ()) && j.isNaN(e.getZ()));
      } }, { key: "equals", value: function(e) {
        return e instanceof s && this.equals2D(e);
      } }, { key: "equalInZ", value: function(e, t) {
        return ke.equalsWithTolerance(this.getZ(), e.getZ(), t);
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
          if (e instanceof CloneNotSupportedException) return se.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
          throw e;
        }
      } }, { key: "copy", value: function() {
        return new s(this);
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
        return e = 37 * (e = 37 * e + s.hashCode(this.x)) + s.hashCode(this.y);
      } }, { key: "setCoordinate", value: function(e) {
        this.x = e.x, this.y = e.y, this.z = e.getZ();
      } }, { key: "interfaces_", get: function() {
        return [Y, U, X];
      } }], [{ key: "constructor_", value: function() {
        if (this.x = null, this.y = null, this.z = null, arguments.length === 0) s.constructor_.call(this, 0, 0);
        else if (arguments.length === 1) {
          var e = arguments[0];
          s.constructor_.call(this, e.x, e.y, e.getZ());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          s.constructor_.call(this, t, n, s.NULL_ORDINATE);
        } else if (arguments.length === 3) {
          var i = arguments[0], u = arguments[1], h = arguments[2];
          this.x = i, this.y = u, this.z = h;
        }
      } }, { key: "hashCode", value: function(e) {
        return vc[0] = e, Xs[0] ^ Xs[1];
      } }]), s;
    }(), pc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "compare", value: function(e, t) {
        var n = s.compare(e.x, t.x);
        if (n !== 0) return n;
        var i = s.compare(e.y, t.y);
        return i !== 0 ? i : this._dimensionsToTest <= 2 ? 0 : s.compare(e.getZ(), t.getZ());
      } }, { key: "interfaces_", get: function() {
        return [Le];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimensionsToTest = 2, arguments.length === 0) s.constructor_.call(this, 2);
        else if (arguments.length === 1) {
          var e = arguments[0];
          if (e !== 2 && e !== 3) throw new M("only 2 or 3 dimensions may be specified");
          this._dimensionsToTest = e;
        }
      } }, { key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : j.isNaN(e) ? j.isNaN(t) ? 0 : -1 : j.isNaN(t) ? 1 : 0;
      } }]), s;
    }();
    O.DimensionalComparator = pc, O.NULL_ORDINATE = j.NaN, O.X = 0, O.Y = 1, O.Z = 2, O.M = 3;
    var pe = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getArea", value: function() {
        return this.getWidth() * this.getHeight();
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof s)) return !1;
        var t = e;
        return this.isNull() ? t.isNull() : this._maxx === t.getMaxX() && this._maxy === t.getMaxY() && this._minx === t.getMinX() && this._miny === t.getMinY();
      } }, { key: "intersection", value: function(e) {
        if (this.isNull() || e.isNull() || !this.intersects(e)) return new s();
        var t = this._minx > e._minx ? this._minx : e._minx, n = this._miny > e._miny ? this._miny : e._miny;
        return new s(t, this._maxx < e._maxx ? this._maxx : e._maxx, n, this._maxy < e._maxy ? this._maxy : e._maxy);
      } }, { key: "isNull", value: function() {
        return this._maxx < this._minx;
      } }, { key: "getMaxX", value: function() {
        return this._maxx;
      } }, { key: "covers", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof O) {
            var e = arguments[0];
            return this.covers(e.x, e.y);
          }
          if (arguments[0] instanceof s) {
            var t = arguments[0];
            return !this.isNull() && !t.isNull() && t.getMinX() >= this._minx && t.getMaxX() <= this._maxx && t.getMinY() >= this._miny && t.getMaxY() <= this._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return !this.isNull() && n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof s) {
            var e = arguments[0];
            return !this.isNull() && !e.isNull() && !(e._minx > this._maxx || e._maxx < this._minx || e._miny > this._maxy || e._maxy < this._miny);
          }
          if (arguments[0] instanceof O) {
            var t = arguments[0];
            return this.intersects(t.x, t.y);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof O && arguments[1] instanceof O) {
            var n = arguments[0], i = arguments[1];
            if (this.isNull()) return !1;
            var u = n.x < i.x ? n.x : i.x;
            if (u > this._maxx) return !1;
            var h = n.x > i.x ? n.x : i.x;
            if (h < this._minx) return !1;
            var g = n.y < i.y ? n.y : i.y;
            if (g > this._maxy) return !1;
            var y = n.y > i.y ? n.y : i.y;
            return !(y < this._miny);
          }
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var d = arguments[0], N = arguments[1];
            return !this.isNull() && !(d > this._maxx || d < this._minx || N > this._maxy || N < this._miny);
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
          if (arguments[0] instanceof O) {
            var e = arguments[0];
            this.expandToInclude(e.x, e.y);
          } else if (arguments[0] instanceof s) {
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
        return new s(this);
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
          if (arguments[0] instanceof s) {
            var e = arguments[0];
            return this.covers(e);
          }
          if (arguments[0] instanceof O) {
            var t = arguments[0];
            return this.covers(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.covers(n, i);
        }
      } }, { key: "centre", value: function() {
        return this.isNull() ? null : new O((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
      } }, { key: "init", value: function() {
        if (arguments.length === 0) this.setToNull();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof O) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof s) {
            var t = arguments[0];
            this._minx = t._minx, this._maxx = t._maxx, this._miny = t._miny, this._maxy = t._maxy;
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.init(n.x, i.x, n.y, i.y);
        } else if (arguments.length === 4) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3];
          u < h ? (this._minx = u, this._maxx = h) : (this._minx = h, this._maxx = u), g < y ? (this._miny = g, this._maxy = y) : (this._miny = y, this._maxy = g);
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
        return e = 37 * (e = 37 * (e = 37 * (e = 37 * e + O.hashCode(this._minx)) + O.hashCode(this._maxx)) + O.hashCode(this._miny)) + O.hashCode(this._maxy);
      } }, { key: "interfaces_", get: function() {
        return [Y, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
        else if (arguments.length === 1) {
          if (arguments[0] instanceof O) {
            var e = arguments[0];
            this.init(e.x, e.x, e.y, e.y);
          } else if (arguments[0] instanceof s) {
            var t = arguments[0];
            this.init(t);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.init(n.x, i.x, n.y, i.y);
        } else if (arguments.length === 4) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3];
          this.init(u, h, g, y);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return n.x >= (e.x < t.x ? e.x : t.x) && n.x <= (e.x > t.x ? e.x : t.x) && n.y >= (e.y < t.y ? e.y : t.y) && n.y <= (e.y > t.y ? e.y : t.y);
        }
        if (arguments.length === 4) {
          var i = arguments[0], u = arguments[1], h = arguments[2], g = arguments[3], y = Math.min(h.x, g.x), d = Math.max(h.x, g.x), N = Math.min(i.x, u.x), b = Math.max(i.x, u.x);
          return !(N > d) && !(b < y) && (y = Math.min(h.y, g.y), d = Math.max(h.y, g.y), N = Math.min(i.y, u.y), b = Math.max(i.y, u.y), !(N > d) && !(b < y));
        }
      } }]), s;
    }(), W = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isGeometryCollection", value: function() {
        return this.getTypeCode() === s.TYPECODE_GEOMETRYCOLLECTION;
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
        this.apply(s.geometryChangedFilter);
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
        if (e.getTypeCode() === s.TYPECODE_GEOMETRYCOLLECTION) throw new M("This method does not support GeometryCollection arguments");
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
        return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new pe(this._envelope);
      } }, { key: "setSRID", value: function(e) {
        this._SRID = e;
      } }, { key: "setUserData", value: function(e) {
        this._userData = e;
      } }, { key: "compare", value: function(e, t) {
        for (var n = e.iterator(), i = t.iterator(); n.hasNext() && i.hasNext(); ) {
          var u = n.next(), h = i.next(), g = u.compareTo(h);
          if (g !== 0) return g;
        }
        return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
      } }, { key: "hashCode", value: function() {
        return this.getEnvelopeInternal().hashCode();
      } }, { key: "isEquivalentClass", value: function(e) {
        return this.getClass() === e.getClass();
      } }, { key: "isGeometryCollectionOrDerived", value: function() {
        return this.getTypeCode() === s.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === s.TYPECODE_MULTIPOINT || this.getTypeCode() === s.TYPECODE_MULTILINESTRING || this.getTypeCode() === s.TYPECODE_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [U, Y, X];
      } }, { key: "getClass", value: function() {
        return s;
      } }], [{ key: "hasNonEmptyElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (!e[t].isEmpty()) return !0;
        return !1;
      } }, { key: "hasNullElements", value: function(e) {
        for (var t = 0; t < e.length; t++) if (e[t] === null) return !0;
        return !1;
      } }]), s;
    }();
    W.constructor_ = function(s) {
      s && (this._envelope = null, this._userData = null, this._factory = s, this._SRID = s.getSRID());
    }, W.TYPECODE_POINT = 0, W.TYPECODE_MULTIPOINT = 1, W.TYPECODE_LINESTRING = 2, W.TYPECODE_LINEARRING = 3, W.TYPECODE_MULTILINESTRING = 4, W.TYPECODE_POLYGON = 5, W.TYPECODE_MULTIPOLYGON = 6, W.TYPECODE_GEOMETRYCOLLECTION = 7, W.TYPENAME_POINT = "Point", W.TYPENAME_MULTIPOINT = "MultiPoint", W.TYPENAME_LINESTRING = "LineString", W.TYPENAME_LINEARRING = "LinearRing", W.TYPENAME_MULTILINESTRING = "MultiLineString", W.TYPENAME_POLYGON = "Polygon", W.TYPENAME_MULTIPOLYGON = "MultiPolygon", W.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", W.geometryChangedFilter = { get interfaces_() {
      return [$];
    }, filter: function(s) {
      s.geometryChangedAction();
    } };
    var I = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "toLocationSymbol", value: function(e) {
        switch (e) {
          case s.EXTERIOR:
            return "e";
          case s.BOUNDARY:
            return "b";
          case s.INTERIOR:
            return "i";
          case s.NONE:
            return "-";
        }
        throw new M("Unknown location value: " + e);
      } }]), s;
    }();
    I.INTERIOR = 0, I.BOUNDARY = 1, I.EXTERIOR = 2, I.NONE = -1;
    var tt = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "add", value: function() {
      } }, { key: "addAll", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }, { key: "iterator", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "toArray", value: function() {
      } }, { key: "remove", value: function() {
      } }]), s;
    }(), Hn = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ NoSuchElementException: t })[0], i;
      }
      return t;
    }(G), kt = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ UnsupportedOperationException: t })[0], i;
      }
      return t;
    }(G), js = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return c(t, [{ key: "contains", value: function() {
      } }]), t;
    }(tt), ei = function(s, e) {
      f(n, s);
      var t = k(n);
      function n(i) {
        var u;
        return a(this, n), (u = t.call(this)).map = /* @__PURE__ */ new Map(), i instanceof tt && u.addAll(i), u;
      }
      return c(n, [{ key: "contains", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !!this.map.has(u);
      } }, { key: "add", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !this.map.has(u) && !!this.map.set(u, i);
      } }, { key: "addAll", value: function(i) {
        var u, h = A(i);
        try {
          for (h.s(); !(u = h.n()).done; ) {
            var g = u.value;
            this.add(g);
          }
        } catch (y) {
          h.e(y);
        } finally {
          h.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new kt();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new mc(this.map);
      } }, { key: e, value: function() {
        return this.map;
      } }]), n;
    }(js, Symbol.iterator), mc = function() {
      function s(e) {
        a(this, s), this.iterator = e.values();
        var t = this.iterator.next(), n = t.done, i = t.value;
        this.done = n, this.value = i;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.done) throw new Hn();
        var e = this.value, t = this.iterator.next(), n = t.done, i = t.value;
        return this.done = n, this.value = i, e;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new kt();
      } }]), s;
    }(), B = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "opposite", value: function(e) {
        return e === s.LEFT ? s.RIGHT : e === s.RIGHT ? s.LEFT : e;
      } }]), s;
    }();
    B.ON = 0, B.LEFT = 1, B.RIGHT = 2;
    var Vs = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ EmptyStackException: t })[0], i;
      }
      return t;
    }(G), Ws = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: t })[0], i;
      }
      return t;
    }(G), At = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return c(t, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), t;
    }(tt), dc = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).array = [], n;
      }
      return c(t, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new Ws();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new Vs();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new Vs();
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
    }(At);
    function re(s, e) {
      return s.interfaces_ && s.interfaces_.indexOf(e) > -1;
    }
    var xn = function() {
      function s(e) {
        a(this, s), this.str = e;
      }
      return c(s, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), s;
    }(), Zn = function() {
      function s(e) {
        a(this, s), this.value = e;
      }
      return c(s, [{ key: "intValue", value: function() {
        return this.value;
      } }, { key: "compareTo", value: function(e) {
        return this.value < e ? -1 : this.value > e ? 1 : 0;
      } }], [{ key: "compare", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "isNan", value: function(e) {
        return Number.isNaN(e);
      } }, { key: "valueOf", value: function(e) {
        return new s(e);
      } }]), s;
    }(), ti = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "isWhitespace", value: function(e) {
        return e <= 32 && e >= 0 || e === 127;
      } }, { key: "toUpperCase", value: function(e) {
        return e.toUpperCase();
      } }]), s;
    }(), J = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "le", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo <= e._lo;
      } }, { key: "extractSignificantDigits", value: function(e, t) {
        var n = this.abs(), i = s.magnitude(n._hi), u = s.TEN.pow(i);
        (n = n.divide(u)).gt(s.TEN) ? (n = n.divide(s.TEN), i += 1) : n.lt(s.ONE) && (n = n.multiply(s.TEN), i -= 1);
        for (var h = i + 1, g = new xn(), y = s.MAX_PRINT_DIGITS - 1, d = 0; d <= y; d++) {
          e && d === h && g.append(".");
          var N = Math.trunc(n._hi);
          if (N < 0) break;
          var b = !1, R = 0;
          N > 9 ? (b = !0, R = "9") : R = "0" + N, g.append(R), n = n.subtract(s.valueOf(N)).multiply(s.TEN), b && n.selfAdd(s.TEN);
          var F = !0, D = s.magnitude(n._hi);
          if (D < 0 && Math.abs(D) >= y - d && (F = !1), !F) break;
        }
        return t[0] = i, g.toString();
      } }, { key: "sqr", value: function() {
        return this.multiply(this);
      } }, { key: "doubleValue", value: function() {
        return this._hi + this._lo;
      } }, { key: "subtract", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0];
          return this.add(e.negate());
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return this.add(-t);
        }
      } }, { key: "equals", value: function() {
        if (arguments.length === 1 && arguments[0] instanceof s) {
          var e = arguments[0];
          return this._hi === e._hi && this._lo === e._lo;
        }
      } }, { key: "isZero", value: function() {
        return this._hi === 0 && this._lo === 0;
      } }, { key: "selfSubtract", value: function() {
        if (arguments[0] instanceof s) {
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
          if (arguments[0] instanceof s) {
            var e = arguments[0];
            return this.selfDivide(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfDivide(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = null, h = null, g = null, y = null, d = null, N = null, b = null, R = null;
          return d = this._hi / n, R = (u = (N = s.SPLIT * d) - (u = N - d)) * (g = (R = s.SPLIT * n) - (g = R - n)) - (b = d * n) + u * (y = n - g) + (h = d - u) * g + h * y, R = d + (N = (this._hi - b - R + this._lo - d * i) / n), this._hi = R, this._lo = d - R + N, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0], t = null, n = null, i = null, u = null, h = null, g = null, y = null, d = null;
          n = (h = this._hi / e._hi) - (t = (g = s.SPLIT * h) - (t = g - h)), d = t * (i = (d = s.SPLIT * e._hi) - (i = d - e._hi)) - (y = h * e._hi) + t * (u = e._hi - i) + n * i + n * u;
          var N = d = h + (g = (this._hi - y - d + this._lo - h * e._lo) / e._hi), b = h - d + g;
          return new s(N, b);
        }
        if (typeof arguments[0] == "number") {
          var R = arguments[0];
          return j.isNaN(R) ? s.createNaN() : s.copy(this).selfDivide(R, 0);
        }
      } }, { key: "ge", value: function(e) {
        return this._hi > e._hi || this._hi === e._hi && this._lo >= e._lo;
      } }, { key: "pow", value: function(e) {
        if (e === 0) return s.valueOf(1);
        var t = new s(this), n = s.valueOf(1), i = Math.abs(e);
        if (i > 1) for (; i > 0; ) i % 2 == 1 && n.selfMultiply(t), (i /= 2) > 0 && (t = t.sqr());
        else n = t;
        return e < 0 ? n.reciprocal() : n;
      } }, { key: "ceil", value: function() {
        if (this.isNaN()) return s.NaN;
        var e = Math.ceil(this._hi), t = 0;
        return e === this._hi && (t = Math.ceil(this._lo)), new s(e, t);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._hi < t._hi ? -1 : this._hi > t._hi ? 1 : this._lo < t._lo ? -1 : this._lo > t._lo ? 1 : 0;
      } }, { key: "rint", value: function() {
        return this.isNaN() ? this : this.add(0.5).floor();
      } }, { key: "setValue", value: function() {
        if (arguments[0] instanceof s) {
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
        if (this.isZero()) return s.valueOf(0);
        if (this.isNegative()) return s.NaN;
        var e = 1 / Math.sqrt(this._hi), t = this._hi * e, n = s.valueOf(t), i = this.subtract(n.sqr())._hi * (0.5 * e);
        return n.add(i);
      } }, { key: "selfAdd", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof s) {
            var e = arguments[0];
            return this.selfAdd(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0], n = null, i = null, u = null, h = null, g = null, y = null;
            return h = (u = this._hi + t) - (g = u - this._hi), i = (y = (h = t - g + (this._hi - h)) + this._lo) + (u - (n = u + y)), this._hi = n + i, this._lo = i + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var d = arguments[0], N = arguments[1], b = null, R = null, F = null, D = null, V = null, H = null, K = null;
          D = this._hi + d, R = this._lo + N, V = D - (H = D - this._hi), F = R - (K = R - this._lo);
          var fe = (b = D + (H = (V = d - H + (this._hi - V)) + R)) + (H = (F = N - K + (this._lo - F)) + (H + (D - b))), de = H + (b - fe);
          return this._hi = fe, this._lo = de, this;
        }
      } }, { key: "selfMultiply", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof s) {
            var e = arguments[0];
            return this.selfMultiply(e._hi, e._lo);
          }
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return this.selfMultiply(t, 0);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = null, h = null, g = null, y = null, d = null, N = null;
          u = (d = s.SPLIT * this._hi) - this._hi, N = s.SPLIT * n, u = d - u, h = this._hi - u, g = N - n;
          var b = (d = this._hi * n) + (N = u * (g = N - g) - d + u * (y = n - g) + h * g + h * y + (this._hi * i + this._lo * n)), R = N + (u = d - b);
          return this._hi = b, this._lo = R, this;
        }
      } }, { key: "selfSqr", value: function() {
        return this.selfMultiply(this);
      } }, { key: "floor", value: function() {
        if (this.isNaN()) return s.NaN;
        var e = Math.floor(this._hi), t = 0;
        return e === this._hi && (t = Math.floor(this._lo)), new s(e, t);
      } }, { key: "negate", value: function() {
        return this.isNaN() ? this : new s(-this._hi, -this._lo);
      } }, { key: "clone", value: function() {
        try {
          return null;
        } catch (e) {
          if (e instanceof CloneNotSupportedException) return null;
          throw e;
        }
      } }, { key: "multiply", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0];
          return e.isNaN() ? s.createNaN() : s.copy(this).selfMultiply(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return j.isNaN(t) ? s.createNaN() : s.copy(this).selfMultiply(t, 0);
        }
      } }, { key: "isNaN", value: function() {
        return j.isNaN(this._hi);
      } }, { key: "intValue", value: function() {
        return Math.trunc(this._hi);
      } }, { key: "toString", value: function() {
        var e = s.magnitude(this._hi);
        return e >= -3 && e <= 20 ? this.toStandardNotation() : this.toSciNotation();
      } }, { key: "toStandardNotation", value: function() {
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!0, t), i = t[0] + 1, u = n;
        if (n.charAt(0) === ".") u = "0" + n;
        else if (i < 0) u = "0." + s.stringOfChar("0", -i) + n;
        else if (n.indexOf(".") === -1) {
          var h = i - n.length;
          u = n + s.stringOfChar("0", h) + ".0";
        }
        return this.isNegative() ? "-" + u : u;
      } }, { key: "reciprocal", value: function() {
        var e, t, n, i, u = null, h = null, g = null, y = null;
        e = (n = 1 / this._hi) - (u = (g = s.SPLIT * n) - (u = g - n)), h = (y = s.SPLIT * this._hi) - this._hi;
        var d = n + (g = (1 - (i = n * this._hi) - (y = u * (h = y - h) - i + u * (t = this._hi - h) + e * h + e * t) - n * this._lo) / this._hi);
        return new s(d, n - d + g);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return s.SCI_NOT_ZERO;
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!1, t), i = s.SCI_NOT_EXPONENT_CHAR + t[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var u = "";
        n.length > 1 && (u = n.substring(1));
        var h = n.charAt(0) + "." + u;
        return this.isNegative() ? "-" + h + i : h + i;
      } }, { key: "abs", value: function() {
        return this.isNaN() ? s.NaN : this.isNegative() ? this.negate() : new s(this);
      } }, { key: "isPositive", value: function() {
        return this._hi > 0 || this._hi === 0 && this._lo > 0;
      } }, { key: "lt", value: function(e) {
        return this._hi < e._hi || this._hi === e._hi && this._lo < e._lo;
      } }, { key: "add", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0];
          return s.copy(this).selfAdd(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return s.copy(this).selfAdd(t);
        }
      } }, { key: "init", value: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this._hi = e, this._lo = 0;
          } else if (arguments[0] instanceof s) {
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
        return this.isNaN() ? s.NaN : this.isPositive() ? this.floor() : this.ceil();
      } }, { key: "signum", value: function() {
        return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
      } }, { key: "interfaces_", get: function() {
        return [X, Y, U];
      } }], [{ key: "constructor_", value: function() {
        if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "number") {
            var e = arguments[0];
            this.init(e);
          } else if (arguments[0] instanceof s) {
            var t = arguments[0];
            this.init(t);
          } else if (typeof arguments[0] == "string") {
            var n = arguments[0];
            s.constructor_.call(this, s.parse(n));
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          this.init(i, u);
        }
      } }, { key: "determinant", value: function() {
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
          return s.determinant(s.valueOf(e), s.valueOf(t), s.valueOf(n), s.valueOf(i));
        }
        if (arguments[3] instanceof s && arguments[2] instanceof s && arguments[0] instanceof s && arguments[1] instanceof s) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3], d = u.multiply(y).selfSubtract(h.multiply(g));
          return d;
        }
      } }, { key: "sqr", value: function(e) {
        return s.valueOf(e).selfMultiply(e);
      } }, { key: "valueOf", value: function() {
        if (typeof arguments[0] == "string") {
          var e = arguments[0];
          return s.parse(e);
        }
        if (typeof arguments[0] == "number") {
          var t = arguments[0];
          return new s(t);
        }
      } }, { key: "sqrt", value: function(e) {
        return s.valueOf(e).sqrt();
      } }, { key: "parse", value: function(e) {
        for (var t = 0, n = e.length; ti.isWhitespace(e.charAt(t)); ) t++;
        var i = !1;
        if (t < n) {
          var u = e.charAt(t);
          u !== "-" && u !== "+" || (t++, u === "-" && (i = !0));
        }
        for (var h = new s(), g = 0, y = 0, d = 0, N = !1; !(t >= n); ) {
          var b = e.charAt(t);
          if (t++, ti.isDigit(b)) {
            var R = b - "0";
            h.selfMultiply(s.TEN), h.selfAdd(R), g++;
          } else {
            if (b !== ".") {
              if (b === "e" || b === "E") {
                var F = e.substring(t);
                try {
                  d = Zn.parseInt(F);
                } catch (fe) {
                  throw fe instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + F + " in string " + e) : fe;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + b + "' at position " + t + " in string " + e);
            }
            y = g, N = !0;
          }
        }
        var D = h;
        N || (y = g);
        var V = g - y - d;
        if (V === 0) D = h;
        else if (V > 0) {
          var H = s.TEN.pow(V);
          D = h.divide(H);
        } else if (V < 0) {
          var K = s.TEN.pow(-V);
          D = h.multiply(K);
        }
        return i ? D.negate() : D;
      } }, { key: "createNaN", value: function() {
        return new s(j.NaN, j.NaN);
      } }, { key: "copy", value: function(e) {
        return new s(e);
      } }, { key: "magnitude", value: function(e) {
        var t = Math.abs(e), n = Math.log(t) / Math.log(10), i = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, i) <= t && (i += 1), i;
      } }, { key: "stringOfChar", value: function(e, t) {
        for (var n = new xn(), i = 0; i < t; i++) n.append(e);
        return n.toString();
      } }]), s;
    }();
    J.PI = new J(3.141592653589793, 12246467991473532e-32), J.TWO_PI = new J(6.283185307179586, 24492935982947064e-32), J.PI_2 = new J(1.5707963267948966, 6123233995736766e-32), J.E = new J(2.718281828459045, 14456468917292502e-32), J.NaN = new J(j.NaN, j.NaN), J.EPS = 123259516440783e-46, J.SPLIT = 134217729, J.MAX_PRINT_DIGITS = 32, J.TEN = J.valueOf(10), J.ONE = J.valueOf(1), J.SCI_NOT_EXPONENT_CHAR = "E", J.SCI_NOT_ZERO = "0.0E0";
    var ni = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "orientationIndex", value: function(e, t, n) {
        var i = s.orientationIndexFilter(e, t, n);
        if (i <= 1) return i;
        var u = J.valueOf(t.x).selfAdd(-e.x), h = J.valueOf(t.y).selfAdd(-e.y), g = J.valueOf(n.x).selfAdd(-t.x), y = J.valueOf(n.y).selfAdd(-t.y);
        return u.selfMultiply(y).selfSubtract(h.selfMultiply(g)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof J && arguments[2] instanceof J && arguments[0] instanceof J && arguments[1] instanceof J) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3], u = e.multiply(i).selfSubtract(t.multiply(n));
          return u.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var h = arguments[0], g = arguments[1], y = arguments[2], d = arguments[3], N = J.valueOf(h), b = J.valueOf(g), R = J.valueOf(y), F = J.valueOf(d), D = N.multiply(F).selfSubtract(b.multiply(R));
          return D.signum();
        }
      } }, { key: "intersection", value: function(e, t, n, i) {
        var u = new J(e.y).selfSubtract(t.y), h = new J(t.x).selfSubtract(e.x), g = new J(e.x).selfMultiply(t.y).selfSubtract(new J(t.x).selfMultiply(e.y)), y = new J(n.y).selfSubtract(i.y), d = new J(i.x).selfSubtract(n.x), N = new J(n.x).selfMultiply(i.y).selfSubtract(new J(i.x).selfMultiply(n.y)), b = h.multiply(N).selfSubtract(d.multiply(g)), R = y.multiply(g).selfSubtract(u.multiply(N)), F = u.multiply(d).selfSubtract(y.multiply(h)), D = b.selfDivide(F).doubleValue(), V = R.selfDivide(F).doubleValue();
        return j.isNaN(D) || j.isInfinite(D) || j.isNaN(V) || j.isInfinite(V) ? null : new O(D, V);
      } }, { key: "orientationIndexFilter", value: function(e, t, n) {
        var i = null, u = (e.x - n.x) * (t.y - n.y), h = (e.y - n.y) * (t.x - n.x), g = u - h;
        if (u > 0) {
          if (h <= 0) return s.signum(g);
          i = u + h;
        } else {
          if (!(u < 0) || h >= 0) return s.signum(g);
          i = -u - h;
        }
        var y = s.DP_SAFE_EPSILON * i;
        return g >= y || -g >= y ? s.signum(g) : 2;
      } }, { key: "signum", value: function(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
      } }]), s;
    }();
    ni.DP_SAFE_EPSILON = 1e-15;
    var le = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getM", value: function(e) {
        if (this.hasM()) {
          var t = this.getDimension() - this.getMeasures();
          return this.getOrdinate(e, t);
        }
        return j.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this.getOrdinate(e, 2) : j.NaN;
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
        return [U];
      } }]), s;
    }();
    le.X = 0, le.Y = 1, le.Z = 2, le.M = 3;
    var Q = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "index", value: function(e, t, n) {
        return ni.orientationIndex(e, t, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0], t = e.length - 1;
          if (t < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = e[0], i = 0, u = 1; u <= t; u++) {
            var h = e[u];
            h.y > n.y && (n = h, i = u);
          }
          var g = i;
          do
            (g -= 1) < 0 && (g = t);
          while (e[g].equals2D(n) && g !== i);
          var y = i;
          do
            y = (y + 1) % t;
          while (e[y].equals2D(n) && y !== i);
          var d = e[g], N = e[y];
          if (d.equals2D(n) || N.equals2D(n) || d.equals2D(N)) return !1;
          var b = s.index(d, n, N), R = null;
          return R = b === 0 ? d.x > N.x : b > 0, R;
        }
        if (re(arguments[0], le)) {
          var F = arguments[0], D = F.size() - 1;
          if (D < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var V = F.getCoordinate(0), H = 0, K = 1; K <= D; K++) {
            var fe = F.getCoordinate(K);
            fe.y > V.y && (V = fe, H = K);
          }
          var de = null, Oe = H;
          do
            (Oe -= 1) < 0 && (Oe = D), de = F.getCoordinate(Oe);
          while (de.equals2D(V) && Oe !== H);
          var Be = null, Ze = H;
          do
            Ze = (Ze + 1) % D, Be = F.getCoordinate(Ze);
          while (Be.equals2D(V) && Ze !== H);
          if (de.equals2D(V) || Be.equals2D(V) || de.equals2D(Be)) return !1;
          var pt = s.index(de, V, Be);
          return pt === 0 ? de.x > Be.x : pt > 0;
        }
      } }]), s;
    }();
    Q.CLOCKWISE = -1, Q.RIGHT = Q.CLOCKWISE, Q.COUNTERCLOCKWISE = 1, Q.LEFT = Q.COUNTERCLOCKWISE, Q.COLLINEAR = 0, Q.STRAIGHT = Q.COLLINEAR;
    var _c = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinate", value: function() {
        return this._minCoord;
      } }, { key: "getRightmostSide", value: function(e, t) {
        var n = this.getRightmostSideOfSegment(e, t);
        return n < 0 && (n = this.getRightmostSideOfSegment(e, t - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(e)), n;
      } }, { key: "findRightmostEdgeAtVertex", value: function() {
        var e = this._minDe.getEdge().getCoordinates();
        se.isTrue(this._minIndex > 0 && this._minIndex < e.length, "rightmost point expected to be interior vertex of edge");
        var t = e[this._minIndex - 1], n = e[this._minIndex + 1], i = Q.index(this._minCoord, n, t), u = !1;
        (t.y < this._minCoord.y && n.y < this._minCoord.y && i === Q.COUNTERCLOCKWISE || t.y > this._minCoord.y && n.y > this._minCoord.y && i === Q.CLOCKWISE) && (u = !0), u && (this._minIndex = this._minIndex - 1);
      } }, { key: "getRightmostSideOfSegment", value: function(e, t) {
        var n = e.getEdge().getCoordinates();
        if (t < 0 || t + 1 >= n.length || n[t].y === n[t + 1].y) return -1;
        var i = B.LEFT;
        return n[t].y < n[t + 1].y && (i = B.RIGHT), i;
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
        se.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === B.LEFT && (this._orientedDe = this._minDe.getSym());
      } }], [{ key: "constructor_", value: function() {
        this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
      } }]), s;
    }(), gt = function(s) {
      f(t, s);
      var e = k(t);
      function t(n, i) {
        var u;
        return a(this, t), (u = e.call(this, i ? n + " [ " + i + " ]" : n)).pt = i ? new O(i) : void 0, u.name = Object.keys({ TopologyException: t })[0], u;
      }
      return c(t, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), t;
    }(Ie), xc = function() {
      function s() {
        a(this, s), this.array = [];
      }
      return c(s, [{ key: "addLast", value: function(e) {
        this.array.push(e);
      } }, { key: "removeFirst", value: function() {
        return this.array.shift();
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }]), s;
    }(), Z = function(s, e) {
      f(n, s);
      var t = k(n);
      function n(i) {
        var u;
        return a(this, n), (u = t.call(this)).array = [], i instanceof tt && u.addAll(i), u;
      }
      return c(n, [{ key: "interfaces_", get: function() {
        return [At, tt];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(i) {
        return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(i) {
        var u, h = A(i);
        try {
          for (h.s(); !(u = h.n()).done; ) {
            var g = u.value;
            this.array.push(g);
          }
        } catch (y) {
          h.e(y);
        } finally {
          h.f();
        }
      } }, { key: "set", value: function(i, u) {
        var h = this.array[i];
        return this.array[i] = u, h;
      } }, { key: "iterator", value: function() {
        return new Ec(this);
      } }, { key: "get", value: function(i) {
        if (i < 0 || i >= this.size()) throw new Ws();
        return this.array[i];
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "sort", value: function(i) {
        i ? this.array.sort(function(u, h) {
          return i.compare(u, h);
        }) : this.array.sort();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "remove", value: function(i) {
        for (var u = 0, h = this.array.length; u < h; u++) if (this.array[u] === i) return !!this.array.splice(u, 1);
        return !1;
      } }, { key: e, value: function() {
        return this.array.values();
      } }]), n;
    }(At, Symbol.iterator), Ec = function() {
      function s(e) {
        a(this, s), this.arrayList = e, this.position = 0;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new Hn();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(e) {
        return this.arrayList.set(this.position - 1, e);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), s;
    }(), kc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "clearVisitedEdges", value: function() {
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
        if (t === null) throw new gt("unable to find edge to compute depths at " + e.getCoordinate());
        e.getEdges().computeDepths(t);
        for (var u = e.getEdges().iterator(); u.hasNext(); ) {
          var h = u.next();
          h.setVisited(!0), this.copySymDepths(h);
        }
      } }, { key: "computeDepth", value: function(e) {
        this.clearVisitedEdges();
        var t = this._finder.getEdge();
        t.getNode(), t.getLabel(), t.setEdgeDepths(B.RIGHT, e), this.copySymDepths(t), this.computeDepths(t);
      } }, { key: "create", value: function(e) {
        this.addReachable(e), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
      } }, { key: "findResultEdges", value: function() {
        for (var e = this._dirEdgeList.iterator(); e.hasNext(); ) {
          var t = e.next();
          t.getDepth(B.RIGHT) >= 1 && t.getDepth(B.LEFT) <= 0 && !t.isInteriorAreaEdge() && t.setInResult(!0);
        }
      } }, { key: "computeDepths", value: function(e) {
        var t = new ei(), n = new xc(), i = e.getNode();
        for (n.addLast(i), t.add(i), e.setVisited(!0); !n.isEmpty(); ) {
          var u = n.removeFirst();
          t.add(u), this.computeNodeDepth(u);
          for (var h = u.getEdges().iterator(); h.hasNext(); ) {
            var g = h.next().getSym();
            if (!g.isVisited()) {
              var y = g.getNode();
              t.contains(y) || (n.addLast(y), t.add(y));
            }
          }
        }
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          for (var e = new pe(), t = this._dirEdgeList.iterator(); t.hasNext(); ) for (var n = t.next().getEdge().getCoordinates(), i = 0; i < n.length - 1; i++) e.expandToInclude(n[i]);
          this._env = e;
        }
        return this._env;
      } }, { key: "addReachable", value: function(e) {
        var t = new dc();
        for (t.add(e); !t.empty(); ) {
          var n = t.pop();
          this.add(n, t);
        }
      } }, { key: "copySymDepths", value: function(e) {
        var t = e.getSym();
        t.setDepth(B.LEFT, e.getDepth(B.RIGHT)), t.setDepth(B.RIGHT, e.getDepth(B.LEFT));
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
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this._finder = null, this._dirEdgeList = new Z(), this._nodes = new Z(), this._rightMostCoord = null, this._env = null, this._finder = new _c();
      } }]), s;
    }(), ri = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "intersection", value: function(e, t, n, i) {
        var u = e.x < t.x ? e.x : t.x, h = e.y < t.y ? e.y : t.y, g = e.x > t.x ? e.x : t.x, y = e.y > t.y ? e.y : t.y, d = n.x < i.x ? n.x : i.x, N = n.y < i.y ? n.y : i.y, b = n.x > i.x ? n.x : i.x, R = n.y > i.y ? n.y : i.y, F = ((u > d ? u : d) + (g < b ? g : b)) / 2, D = ((h > N ? h : N) + (y < R ? y : R)) / 2, V = e.x - F, H = e.y - D, K = t.x - F, fe = t.y - D, de = n.x - F, Oe = n.y - D, Be = i.x - F, Ze = i.y - D, pt = H - fe, qt = K - V, Tn = V * fe - K * H, Rn = Oe - Ze, en = Be - de, Aa = de * Ze - Be * Oe, Ma = pt * en - Rn * qt, _i = (qt * Aa - en * Tn) / Ma, xi = (Rn * Tn - pt * Aa) / Ma;
        return j.isNaN(_i) || j.isInfinite(_i) || j.isNaN(xi) || j.isInfinite(xi) ? null : new O(_i + F, xi + D);
      } }]), s;
    }(), $e = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "arraycopy", value: function(e, t, n, i, u) {
        for (var h = 0, g = t; g < t + u; g++) n[i + h] = e[g], h++;
      } }, { key: "getProperty", value: function(e) {
        return { "line.separator": `
` }[e];
      } }]), s;
    }(), En = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "log10", value: function(e) {
        var t = Math.log(e);
        return j.isInfinite(t) || j.isNaN(t) ? t : t / s.LOG_10;
      } }, { key: "min", value: function(e, t, n, i) {
        var u = e;
        return t < u && (u = t), n < u && (u = n), i < u && (u = i), u;
      } }, { key: "clamp", value: function() {
        if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return e < t ? t : e > n ? n : e;
        }
        if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
          var i = arguments[0], u = arguments[1], h = arguments[2];
          return i < u ? u : i > h ? h : i;
        }
      } }, { key: "wrap", value: function(e, t) {
        return e < 0 ? t - -e % t : e % t;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = e;
          return t > i && (i = t), n > i && (i = n), i;
        }
        if (arguments.length === 4) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3], d = u;
          return h > d && (d = h), g > d && (d = g), y > d && (d = y), d;
        }
      } }, { key: "average", value: function(e, t) {
        return (e + t) / 2;
      } }]), s;
    }();
    En.LOG_10 = Math.log(10);
    var nt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "segmentToSegment", value: function(e, t, n, i) {
        if (e.equals(t)) return s.pointToSegment(e, n, i);
        if (n.equals(i)) return s.pointToSegment(i, e, t);
        var u = !1;
        if (pe.intersects(e, t, n, i)) {
          var h = (t.x - e.x) * (i.y - n.y) - (t.y - e.y) * (i.x - n.x);
          if (h === 0) u = !0;
          else {
            var g = (e.y - n.y) * (i.x - n.x) - (e.x - n.x) * (i.y - n.y), y = ((e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y)) / h, d = g / h;
            (d < 0 || d > 1 || y < 0 || y > 1) && (u = !0);
          }
        } else u = !0;
        return u ? En.min(s.pointToSegment(e, n, i), s.pointToSegment(t, n, i), s.pointToSegment(n, e, t), s.pointToSegment(i, e, t)) : 0;
      } }, { key: "pointToSegment", value: function(e, t, n) {
        if (t.x === n.x && t.y === n.y) return e.distance(t);
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), u = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / i;
        if (u <= 0) return e.distance(t);
        if (u >= 1) return e.distance(n);
        var h = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(h) * Math.sqrt(i);
      } }, { key: "pointToLinePerpendicular", value: function(e, t, n) {
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), u = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(u) * Math.sqrt(i);
      } }, { key: "pointToSegmentString", value: function(e, t) {
        if (t.length === 0) throw new M("Line array must contain at least one vertex");
        for (var n = e.distance(t[0]), i = 0; i < t.length - 1; i++) {
          var u = s.pointToSegment(e, t[i], t[i + 1]);
          u < n && (n = u);
        }
        return n;
      } }]), s;
    }(), Hs = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "create", value: function() {
        if (arguments.length === 1) arguments[0] instanceof Array || re(arguments[0], le);
        else if (arguments.length !== 2) {
          if (arguments.length === 3) {
            var e = arguments[0], t = arguments[1];
            return this.create(e, t);
          }
        }
      } }]), s;
    }(), Jn = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e) {
      } }]), s;
    }(), Sc = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "ofLine", value: function(e) {
        var t = e.size();
        if (t <= 1) return 0;
        var n = 0, i = new O();
        e.getCoordinate(0, i);
        for (var u = i.x, h = i.y, g = 1; g < t; g++) {
          e.getCoordinate(g, i);
          var y = i.x, d = i.y, N = y - u, b = d - h;
          n += Math.sqrt(N * N + b * b), u = y, h = d;
        }
        return n;
      } }]), s;
    }(), Zs = function s() {
      a(this, s);
    }, Mt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "copyCoord", value: function(e, t, n, i) {
        for (var u = Math.min(e.getDimension(), n.getDimension()), h = 0; h < u; h++) n.setOrdinate(i, h, e.getOrdinate(t, h));
      } }, { key: "isRing", value: function(e) {
        var t = e.size();
        return t === 0 || !(t <= 3) && e.getOrdinate(0, le.X) === e.getOrdinate(t - 1, le.X) && e.getOrdinate(0, le.Y) === e.getOrdinate(t - 1, le.Y);
      } }, { key: "scroll", value: function() {
        if (arguments.length === 2) {
          if (re(arguments[0], le) && Number.isInteger(arguments[1])) {
            var e = arguments[0], t = arguments[1];
            s.scroll(e, t, s.isRing(e));
          } else if (re(arguments[0], le) && arguments[1] instanceof O) {
            var n = arguments[0], i = arguments[1], u = s.indexOf(i, n);
            if (u <= 0) return null;
            s.scroll(n, u);
          }
        } else if (arguments.length === 3) {
          var h = arguments[0], g = arguments[1], y = arguments[2], d = g;
          if (d <= 0) return null;
          for (var N = h.copy(), b = y ? h.size() - 1 : h.size(), R = 0; R < b; R++) for (var F = 0; F < h.getDimension(); F++) h.setOrdinate(R, F, N.getOrdinate((g + R) % b, F));
          if (y) for (var D = 0; D < h.getDimension(); D++) h.setOrdinate(b, D, h.getOrdinate(0, D));
        }
      } }, { key: "isEqual", value: function(e, t) {
        var n = e.size();
        if (n !== t.size()) return !1;
        for (var i = Math.min(e.getDimension(), t.getDimension()), u = 0; u < n; u++) for (var h = 0; h < i; h++) {
          var g = e.getOrdinate(u, h), y = t.getOrdinate(u, h);
          if (e.getOrdinate(u, h) !== t.getOrdinate(u, h) && (!j.isNaN(g) || !j.isNaN(y))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return s.minCoordinateIndex(e, 0, e.size() - 1);
        }
        if (arguments.length === 3) {
          for (var t = arguments[0], n = arguments[1], i = arguments[2], u = -1, h = null, g = n; g <= i; g++) {
            var y = t.getCoordinate(g);
            (h === null || h.compareTo(y) > 0) && (h = y, u = g);
          }
          return u;
        }
      } }, { key: "extend", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        if (s.copy(t, 0, i, 0, u), u > 0) for (var h = u; h < n; h++) s.copy(t, u - 1, i, h, 1);
        return i;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.size() - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) s.swap(e, i, t - i);
      } }, { key: "swap", value: function(e, t, n) {
        if (t === n) return null;
        for (var i = 0; i < e.getDimension(); i++) {
          var u = e.getOrdinate(t, i);
          e.setOrdinate(t, i, e.getOrdinate(n, i)), e.setOrdinate(n, i, u);
        }
      } }, { key: "copy", value: function(e, t, n, i, u) {
        for (var h = 0; h < u; h++) s.copyCoord(e, t + h, n, i + h);
      } }, { key: "ensureValidRing", value: function(e, t) {
        var n = t.size();
        return n === 0 ? t : n <= 3 ? s.createClosedRing(e, t, 4) : t.getOrdinate(0, le.X) === t.getOrdinate(n - 1, le.X) && t.getOrdinate(0, le.Y) === t.getOrdinate(n - 1, le.Y) ? t : s.createClosedRing(e, t, n + 1);
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.size(); n++) if (e.x === t.getOrdinate(n, le.X) && e.y === t.getOrdinate(n, le.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        s.copy(t, 0, i, 0, u);
        for (var h = u; h < n; h++) s.copy(t, 0, i, h, 1);
        return i;
      } }, { key: "minCoordinate", value: function(e) {
        for (var t = null, n = 0; n < e.size(); n++) {
          var i = e.getCoordinate(n);
          (t === null || t.compareTo(i) > 0) && (t = i);
        }
        return t;
      } }]), s;
    }(), z = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "toDimensionSymbol", value: function(e) {
        switch (e) {
          case s.FALSE:
            return s.SYM_FALSE;
          case s.TRUE:
            return s.SYM_TRUE;
          case s.DONTCARE:
            return s.SYM_DONTCARE;
          case s.P:
            return s.SYM_P;
          case s.L:
            return s.SYM_L;
          case s.A:
            return s.SYM_A;
        }
        throw new M("Unknown dimension value: " + e);
      } }, { key: "toDimensionValue", value: function(e) {
        switch (ti.toUpperCase(e)) {
          case s.SYM_FALSE:
            return s.FALSE;
          case s.SYM_TRUE:
            return s.TRUE;
          case s.SYM_DONTCARE:
            return s.DONTCARE;
          case s.SYM_P:
            return s.P;
          case s.SYM_L:
            return s.L;
          case s.SYM_A:
            return s.A;
        }
        throw new M("Unknown dimension symbol: " + e);
      } }]), s;
    }();
    z.P = 0, z.L = 1, z.A = 2, z.FALSE = -1, z.TRUE = -2, z.DONTCARE = -3, z.SYM_FALSE = "F", z.SYM_TRUE = "T", z.SYM_DONTCARE = "*", z.SYM_P = "0", z.SYM_L = "1", z.SYM_A = "2";
    var Qn = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e) {
      } }]), s;
    }(), Kn = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e, t) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), s;
    }(), kn = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this.isEmpty() ? new pe() : this._points.expandEnvelope(new pe());
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
          var u = n;
          if (this._points.size() !== u._points.size()) return !1;
          for (var h = 0; h < this._points.size(); h++) if (!this.equal(this._points.getCoordinate(h), u._points.getCoordinate(h), i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < Math.trunc(this._points.size() / 2); n++) {
          var i = this._points.size() - 1 - n;
          if (!this._points.getCoordinate(n).equals(this._points.getCoordinate(i))) {
            if (this._points.getCoordinate(n).compareTo(this._points.getCoordinate(i)) > 0) {
              var u = this._points.copy();
              Mt.reverse(u), this._points = u;
            }
            return null;
          }
        }
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._points.getCoordinate(0);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? z.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Mt.reverse(n), this.getFactory().createLineString(n);
      } }, { key: "getEndPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_LINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getLength", value: function() {
        return Sc.ofLine(this._points);
      } }, { key: "getNumPoints", value: function() {
        return this._points.size();
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          for (var n = arguments[0], i = n, u = 0, h = 0; u < this._points.size() && h < i._points.size(); ) {
            var g = this._points.getCoordinate(u).compareTo(i._points.getCoordinate(h));
            if (g !== 0) return g;
            u++, h++;
          }
          return u < this._points.size() ? 1 : h < i._points.size() ? -1 : 0;
        }
        if (arguments.length === 2) {
          var y = arguments[0], d = arguments[1], N = y;
          return d.compare(this._points, N._points);
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], Jn)) for (var n = arguments[0], i = 0; i < this._points.size(); i++) n.filter(this._points.getCoordinate(i));
        else if (re(arguments[0], Kn)) {
          var u = arguments[0];
          if (this._points.size() === 0) return null;
          for (var h = 0; h < this._points.size() && (u.filter(this._points, h), !u.isDone()); h++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], Qn)) {
          var g = arguments[0];
          g.filter(this);
        } else if (re(arguments[0], $)) {
          var y = arguments[0];
          y.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new kt();
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
        if (n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), n.size() === 1) throw new M("Invalid number of points in LineString (found " + n.size() + " - must be 0 or >= 2)");
        this._points = n;
      } }, { key: "isCoordinate", value: function(n) {
        for (var i = 0; i < this._points.size(); i++) if (this._points.getCoordinate(i).equals(n)) return !0;
        return !1;
      } }, { key: "getStartPoint", value: function() {
        return this.isEmpty() ? null : this.getPointN(0);
      } }, { key: "getPointN", value: function(n) {
        return this.getFactory().createPoint(this._points.getCoordinate(n));
      } }, { key: "interfaces_", get: function() {
        return [Zs];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            W.constructor_.call(this, i), this.init(n);
          }
        }
      } }]), t;
    }(W), Js = function s() {
      a(this, s);
    }, ii = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeEnvelopeInternal", value: function() {
        if (this.isEmpty()) return new pe();
        var n = new pe();
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
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
      } }, { key: "getCoordinate", value: function() {
        return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
      } }, { key: "getBoundaryDimension", value: function() {
        return z.FALSE;
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
          var u = arguments[0], h = arguments[1], g = u;
          return h.compare(this._coordinates, g._coordinates);
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], Jn)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (re(arguments[0], Kn)) {
          var i = arguments[0];
          if (this.isEmpty()) return null;
          i.filter(this._coordinates, 0), i.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], Qn)) {
          var u = arguments[0];
          u.filter(this);
        } else if (re(arguments[0], $)) {
          var h = arguments[0];
          h.filter(this);
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
        n === null && (n = this.getFactory().getCoordinateSequenceFactory().create([])), se.isTrue(n.size() <= 1), this._coordinates = n;
      } }, { key: "isSimple", value: function() {
        return !0;
      } }, { key: "interfaces_", get: function() {
        return [Js];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], i = arguments[1];
        W.constructor_.call(this, i), this.init(n);
      } }]), t;
    }(W), Qs = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "ofRing", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          return Math.abs(s.ofRingSigned(e));
        }
        if (re(arguments[0], le)) {
          var t = arguments[0];
          return Math.abs(s.ofRingSigned(t));
        }
      } }, { key: "ofRingSigned", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0];
          if (e.length < 3) return 0;
          for (var t = 0, n = e[0].x, i = 1; i < e.length - 1; i++) {
            var u = e[i].x - n, h = e[i + 1].y, g = e[i - 1].y;
            t += u * (g - h);
          }
          return t / 2;
        }
        if (re(arguments[0], le)) {
          var y = arguments[0], d = y.size();
          if (d < 3) return 0;
          var N = new O(), b = new O(), R = new O();
          y.getCoordinate(0, b), y.getCoordinate(1, R);
          var F = b.x;
          R.x -= F;
          for (var D = 0, V = 1; V < d - 1; V++) N.y = b.y, b.x = R.x, b.y = R.y, y.getCoordinate(V + 1, R), R.x -= F, D += b.x * (N.y - R.y);
          return D / 2;
        }
      } }]), s;
    }(), Dt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "sort", value: function() {
        var e = arguments, t = arguments[0];
        if (arguments.length === 1) t.sort(function(F, D) {
          return F.compareTo(D);
        });
        else if (arguments.length === 2) t.sort(function(F, D) {
          return e[1].compare(F, D);
        });
        else if (arguments.length === 3) {
          var n = t.slice(arguments[1], arguments[2]);
          n.sort();
          var i = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var u, h = A(i);
          try {
            for (h.s(); !(u = h.n()).done; ) {
              var g = u.value;
              t.push(g);
            }
          } catch (F) {
            h.e(F);
          } finally {
            h.f();
          }
        } else if (arguments.length === 4) {
          var y = t.slice(arguments[1], arguments[2]);
          y.sort(function(F, D) {
            return e[3].compare(F, D);
          });
          var d = t.slice(0, arguments[1]).concat(y, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var N, b = A(d);
          try {
            for (b.s(); !(N = b.n()).done; ) {
              var R = N.value;
              t.push(R);
            }
          } catch (F) {
            b.e(F);
          } finally {
            b.f();
          }
        }
      } }, { key: "asList", value: function(e) {
        var t, n = new Z(), i = A(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n.add(u);
          }
        } catch (h) {
          i.e(h);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "copyOf", value: function(e, t) {
        return e.slice(0, t);
      } }]), s;
    }(), Ks = function s() {
      a(this, s);
    }, er = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = this._shell.getCoordinates(), h = 0; h < u.length; h++) n[++i] = u[h];
        for (var g = 0; g < this._holes.length; g++) for (var y = this._holes[g].getCoordinates(), d = 0; d < y.length; d++) n[++i] = y[d];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += Qs.ofRing(this._shell.getCoordinateSequence());
        for (var i = 0; i < this._holes.length; i++) n -= Qs.ofRing(this._holes[i].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), i = new Array(this._holes.length).fill(null), u = 0; u < this._holes.length; u++) i[u] = this._holes[u].copy();
        return new t(n, i, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), i = this.getEnvelopeInternal(), u = 0; u < 5; u++) {
          var h = n.getX(u);
          if (h !== i.getMinX() && h !== i.getMaxX()) return !1;
          var g = n.getY(u);
          if (g !== i.getMinY() && g !== i.getMaxY()) return !1;
        }
        for (var y = n.getX(0), d = n.getY(0), N = 1; N <= 4; N++) {
          var b = n.getX(N), R = n.getY(N);
          if (b !== y == (R !== d)) return !1;
          y = b, d = R;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var u = n, h = this._shell, g = u._shell;
          if (!h.equalsExact(g, i) || this._holes.length !== u._holes.length) return !1;
          for (var y = 0; y < this._holes.length; y++) if (!this._holes[y].equalsExact(u._holes[y], i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        if (arguments.length === 0) {
          this._shell = this.normalized(this._shell, !0);
          for (var n = 0; n < this._holes.length; n++) this._holes[n] = this.normalized(this._holes[n], !1);
          Dt.sort(this._holes);
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          if (i.isEmpty()) return null;
          var h = i.getCoordinateSequence(), g = Mt.minCoordinateIndex(h, 0, h.size() - 2);
          Mt.scroll(h, g, !0), Q.isCCW(h) === u && Mt.reverse(h);
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
        var u = n.copy();
        return this.normalize(u, i), u;
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this._shell, u = n._shell;
          return i.compareToSameClass(u);
        }
        if (arguments.length === 2) {
          var h = arguments[0], g = arguments[1], y = h, d = this._shell, N = y._shell, b = d.compareToSameClass(N, g);
          if (b !== 0) return b;
          for (var R = this.getNumInteriorRing(), F = y.getNumInteriorRing(), D = 0; D < R && D < F; ) {
            var V = this.getInteriorRingN(D), H = y.getInteriorRingN(D), K = V.compareToSameClass(H, g);
            if (K !== 0) return K;
            D++;
          }
          return D < R ? 1 : D < F ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], Jn)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var i = 0; i < this._holes.length; i++) this._holes[i].apply(n);
        } else if (re(arguments[0], Kn)) {
          var u = arguments[0];
          if (this._shell.apply(u), !u.isDone()) for (var h = 0; h < this._holes.length && (this._holes[h].apply(u), !u.isDone()); h++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], Qn)) {
          var g = arguments[0];
          g.filter(this);
        } else if (re(arguments[0], $)) {
          var y = arguments[0];
          y.filter(this), this._shell.apply(y);
          for (var d = 0; d < this._holes.length; d++) this._holes[d].apply(y);
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
        return [Ks];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        if (W.constructor_.call(this, u), n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), W.hasNullElements(i)) throw new M("holes must not contain null elements");
        if (n.isEmpty() && W.hasNonEmptyElements(i)) throw new M("shell is empty but holes are not");
        this._shell = n, this._holes = i;
      } }]), t;
    }(W), Ic = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(js), ea = function(s) {
      f(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this)).array = [], n instanceof tt && i.addAll(n), i;
      }
      return c(t, [{ key: "contains", value: function(n) {
        var i, u = A(this.array);
        try {
          for (u.s(); !(i = u.n()).done; )
            if (i.value.compareTo(n) === 0) return !0;
        } catch (h) {
          u.e(h);
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
        var i, u = A(n);
        try {
          for (u.s(); !(i = u.n()).done; ) {
            var h = i.value;
            this.add(h);
          }
        } catch (g) {
          u.e(g);
        } finally {
          u.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new kt();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new wc(this.array);
      } }]), t;
    }(Ic), wc = function() {
      function s(e) {
        a(this, s), this.array = e, this.position = 0;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new Hn();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new kt();
      } }]), s;
    }(), De = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeEnvelopeInternal", value: function() {
        for (var n = new pe(), i = 0; i < this._geometries.length; i++) n.expandToInclude(this._geometries[i].getEnvelopeInternal());
        return n;
      } }, { key: "getGeometryN", value: function(n) {
        return this._geometries[n];
      } }, { key: "getCoordinates", value: function() {
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = 0; u < this._geometries.length; u++) for (var h = this._geometries[u].getCoordinates(), g = 0; g < h.length; g++) n[++i] = h[g];
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
          var u = n;
          if (this._geometries.length !== u._geometries.length) return !1;
          for (var h = 0; h < this._geometries.length; h++) if (!this._geometries[h].equalsExact(u._geometries[h], i)) return !1;
          return !0;
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "normalize", value: function() {
        for (var n = 0; n < this._geometries.length; n++) this._geometries[n].normalize();
        Dt.sort(this._geometries);
      } }, { key: "getCoordinate", value: function() {
        return this.isEmpty() ? null : this._geometries[0].getCoordinate();
      } }, { key: "getBoundaryDimension", value: function() {
        for (var n = z.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getBoundaryDimension());
        return n;
      } }, { key: "reverseInternal", value: function() {
        for (var n = this._geometries.length, i = new Z(n), u = 0; u < n; u++) i.add(this._geometries[u].reverse());
        return this.getFactory().buildGeometry(i);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_GEOMETRYCOLLECTION;
      } }, { key: "getDimension", value: function() {
        for (var n = z.FALSE, i = 0; i < this._geometries.length; i++) n = Math.max(n, this._geometries[i].getDimension());
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
          var n = arguments[0], i = new ea(Dt.asList(this._geometries)), u = new ea(Dt.asList(n._geometries));
          return this.compare(i, u);
        }
        if (arguments.length === 2) {
          for (var h = arguments[0], g = arguments[1], y = h, d = this.getNumGeometries(), N = y.getNumGeometries(), b = 0; b < d && b < N; ) {
            var R = this.getGeometryN(b), F = y.getGeometryN(b), D = R.compareToSameClass(F, g);
            if (D !== 0) return D;
            b++;
          }
          return b < d ? 1 : b < N ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], Jn)) for (var n = arguments[0], i = 0; i < this._geometries.length; i++) this._geometries[i].apply(n);
        else if (re(arguments[0], Kn)) {
          var u = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var h = 0; h < this._geometries.length && (this._geometries[h].apply(u), !u.isDone()); h++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], Qn)) {
          var g = arguments[0];
          g.filter(this);
          for (var y = 0; y < this._geometries.length; y++) this._geometries[y].apply(g);
        } else if (re(arguments[0], $)) {
          var d = arguments[0];
          d.filter(this);
          for (var N = 0; N < this._geometries.length; N++) this._geometries[N].apply(d);
        }
      } }, { key: "getBoundary", value: function() {
        return W.checkNotGeometryCollection(this), se.shouldNeverReachHere(), null;
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_GEOMETRYCOLLECTION;
      } }, { key: "isEmpty", value: function() {
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isEmpty()) return !1;
        return !0;
      } }], [{ key: "constructor_", value: function() {
        if (this._geometries = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            if (W.constructor_.call(this, i), n === null && (n = []), W.hasNullElements(n)) throw new M("geometries must not contain null elements");
            this._geometries = n;
          }
        }
      } }]), t;
    }(W), si = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "isValid", value: function() {
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
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
        return z.FALSE;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTIPOINT;
      } }, { key: "getDimension", value: function() {
        return 0;
      } }, { key: "getBoundary", value: function() {
        return this.getFactory().createGeometryCollection();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTIPOINT;
      } }, { key: "interfaces_", get: function() {
        return [Js];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), Sn = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "copyInternal", value: function() {
        return new t(this._points.copy(), this._factory);
      } }, { key: "getBoundaryDimension", value: function() {
        return z.FALSE;
      } }, { key: "isClosed", value: function() {
        return !!this.isEmpty() || w(v(t.prototype), "isClosed", this).call(this);
      } }, { key: "reverseInternal", value: function() {
        var n = this._points.copy();
        return Mt.reverse(n), this.getFactory().createLinearRing(n);
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_LINEARRING;
      } }, { key: "validateConstruction", value: function() {
        if (!this.isEmpty() && !w(v(t.prototype), "isClosed", this).call(this)) throw new M("Points of LinearRing do not form a closed linestring");
        if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE) throw new M("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_LINEARRING;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        kn.constructor_.call(this, n, i), this.validateConstruction();
      } }]), t;
    }(kn);
    Sn.MINIMUM_VALID_SIZE = 4;
    var Ft = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case t.X:
            this.x = i;
            break;
          case t.Y:
            this.y = i;
            break;
          default:
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "getZ", value: function() {
        return O.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new M("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ();
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) O.constructor_.call(this);
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            O.constructor_.call(this, n.x, n.y);
          } else if (arguments[0] instanceof O) {
            var i = arguments[0];
            O.constructor_.call(this, i.x, i.y);
          }
        } else if (arguments.length === 2) {
          var u = arguments[0], h = arguments[1];
          O.constructor_.call(this, u, h, O.NULL_ORDINATE);
        }
      } }]), t;
    }(O);
    Ft.X = 0, Ft.Y = 1, Ft.Z = -1, Ft.M = -1;
    var Gt = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getM", value: function() {
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
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getZ", value: function() {
        return O.NULL_ORDINATE;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case t.X:
            return this.x;
          case t.Y:
            return this.y;
          case t.M:
            return this._m;
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "setZ", value: function(n) {
        throw new M("CoordinateXY dimension 2 does not support z-ordinate");
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) O.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            O.constructor_.call(this, n.x, n.y), this._m = n._m;
          } else if (arguments[0] instanceof O) {
            var i = arguments[0];
            O.constructor_.call(this, i.x, i.y), this._m = this.getM();
          }
        } else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          O.constructor_.call(this, u, h, O.NULL_ORDINATE), this._m = g;
        }
      } }]), t;
    }(O);
    Gt.X = 0, Gt.Y = 1, Gt.Z = -1, Gt.M = 2;
    var ai = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getM", value: function() {
        return this._m;
      } }, { key: "setOrdinate", value: function(n, i) {
        switch (n) {
          case O.X:
            this.x = i;
            break;
          case O.Y:
            this.y = i;
            break;
          case O.Z:
            this.z = i;
            break;
          case O.M:
            this._m = i;
            break;
          default:
            throw new M("Invalid ordinate index: " + n);
        }
      } }, { key: "setM", value: function(n) {
        this._m = n;
      } }, { key: "getOrdinate", value: function(n) {
        switch (n) {
          case O.X:
            return this.x;
          case O.Y:
            return this.y;
          case O.Z:
            return this.getZ();
          case O.M:
            return this.getM();
        }
        throw new M("Invalid ordinate index: " + n);
      } }, { key: "copy", value: function() {
        return new t(this);
      } }, { key: "toString", value: function() {
        return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
      } }, { key: "setCoordinate", value: function(n) {
        this.x = n.x, this.y = n.y, this.z = n.getZ(), this._m = n.getM();
      } }], [{ key: "constructor_", value: function() {
        if (this._m = null, arguments.length === 0) O.constructor_.call(this), this._m = 0;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof t) {
            var n = arguments[0];
            O.constructor_.call(this, n), this._m = n._m;
          } else if (arguments[0] instanceof O) {
            var i = arguments[0];
            O.constructor_.call(this, i), this._m = this.getM();
          }
        } else if (arguments.length === 4) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3];
          O.constructor_.call(this, u, h, g), this._m = y;
        }
      } }]), t;
    }(O), tr = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "measures", value: function(e) {
        return e instanceof Ft ? 0 : e instanceof Gt || e instanceof ai ? 1 : 0;
      } }, { key: "dimension", value: function(e) {
        return e instanceof Ft ? 2 : e instanceof Gt ? 3 : e instanceof ai ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return s.create(e, 0);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return t === 2 ? new Ft() : t === 3 && n === 0 ? new O() : t === 3 && n === 1 ? new Gt() : t === 4 && n === 1 ? new ai() : new O();
        }
      } }]), s;
    }(), In = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && re(arguments[0], tt)) {
          for (var n = arguments[0], i = arguments[1], u = !1, h = n.iterator(); h.hasNext(); ) this.add(h.next(), i), u = !0;
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
          for (var i = this.size(), u = new Array(i).fill(null), h = 0; h < i; h++) u[h] = this.get(i - h - 1);
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
          if (arguments[0] instanceof O && typeof arguments[1] == "boolean") {
            var h = arguments[0], g = arguments[1];
            if (!g && this.size() >= 1) {
              var y = this.get(this.size() - 1);
              if (y.equals2D(h)) return null;
            }
            w(v(t.prototype), "add", this).call(this, h);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var d = arguments[0], N = arguments[1];
            return this.add(d, N), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var b = arguments[0], R = arguments[1], F = arguments[2];
            if (F) for (var D = 0; D < b.length; D++) this.add(b[D], R);
            else for (var V = b.length - 1; V >= 0; V--) this.add(b[V], R);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof O) {
            var H = arguments[0], K = arguments[1], fe = arguments[2];
            if (!fe) {
              var de = this.size();
              if (de > 0) {
                if (H > 0) {
                  var Oe = this.get(H - 1);
                  if (Oe.equals2D(K)) return null;
                }
                if (H < de) {
                  var Be = this.get(H);
                  if (Be.equals2D(K)) return null;
                }
              }
            }
            w(v(t.prototype), "add", this).call(this, H, K);
          }
        } else if (arguments.length === 4) {
          var Ze = arguments[0], pt = arguments[1], qt = arguments[2], Tn = arguments[3], Rn = 1;
          qt > Tn && (Rn = -1);
          for (var en = qt; en !== Tn; en += Rn) this.add(Ze[en], pt);
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
    }(Z);
    In.coordArrayType = new Array(0).fill(null);
    var Ee = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "isRing", value: function(e) {
        return !(e.length < 4) && !!e[0].equals2D(e[e.length - 1]);
      } }, { key: "ptNotInList", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (s.indexOf(i, t) < 0) return i;
        }
        return null;
      } }, { key: "scroll", value: function(e, t) {
        var n = s.indexOf(t, e);
        if (n < 0) return null;
        var i = new Array(e.length).fill(null);
        $e.arraycopy(e, n, i, 0, e.length - n), $e.arraycopy(e, 0, i, e.length - n, n), $e.arraycopy(i, 0, e, 0, e.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          if (e === t) return !0;
          if (e === null || t === null || e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (!e[n].equals(t[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var i = arguments[0], u = arguments[1], h = arguments[2];
          if (i === u) return !0;
          if (i === null || u === null || i.length !== u.length) return !1;
          for (var g = 0; g < i.length; g++) if (h.compare(i[g], u[g]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(e, t) {
        for (var n = new In(), i = 0; i < e.length; i++) t.intersects(e[i]) && n.add(e[i], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(e) {
        if (e === null || e.length === 0) return 0;
        var t, n = 0, i = A(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, tr.measures(u));
          }
        } catch (h) {
          i.e(h);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(e) {
        for (var t = 1; t < e.length; t++) if (e[t - 1].equals(e[t])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(e) {
        return s.hasRepeatedPoints(e) ? new In(e, !1).toCoordinateArray() : e;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.length - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) {
          var u = e[i];
          e[i] = e[t - i], e[t - i] = u;
        }
      } }, { key: "removeNull", value: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) e[n] !== null && t++;
        var i = new Array(t).fill(null);
        if (t === 0) return i;
        for (var u = 0, h = 0; h < e.length; h++) e[h] !== null && (i[u++] = e[h]);
        return i;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Array(e.length).fill(null), n = 0; n < e.length; n++) t[n] = e[n].copy();
          return t;
        }
        if (arguments.length === 5) for (var i = arguments[0], u = arguments[1], h = arguments[2], g = arguments[3], y = arguments[4], d = 0; d < y; d++) h[g + d] = i[u + d].copy();
      } }, { key: "isEqualReversed", value: function(e, t) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n], u = t[e.length - n - 1];
          if (i.compareTo(u) !== 0) return !1;
        }
        return !0;
      } }, { key: "envelope", value: function(e) {
        for (var t = new pe(), n = 0; n < e.length; n++) t.expandToInclude(e[n]);
        return t;
      } }, { key: "toCoordinateArray", value: function(e) {
        return e.toArray(s.coordArrayType);
      } }, { key: "dimension", value: function(e) {
        if (e === null || e.length === 0) return 3;
        var t, n = 0, i = A(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, tr.dimension(u));
          }
        } catch (h) {
          i.e(h);
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
        t = En.clamp(t, 0, e.length);
        var i = (n = En.clamp(n, -1, e.length)) - t + 1;
        n < 0 && (i = 0), t >= e.length && (i = 0), n < t && (i = 0);
        var u = new Array(i).fill(null);
        if (i === 0) return u;
        for (var h = 0, g = t; g <= n; g++) u[h++] = e[g];
        return u;
      } }]), s;
    }(), Nc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        return Ee.compare(n, i);
      } }, { key: "interfaces_", get: function() {
        return [Le];
      } }]), s;
    }(), bc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        var u = Ee.compare(n, i);
        return Ee.isEqualReversed(n, i) ? 0 : u;
      } }, { key: "OLDcompare", value: function(e, t) {
        var n = e, i = t;
        if (n.length < i.length) return -1;
        if (n.length > i.length) return 1;
        if (n.length === 0) return 0;
        for (var u = Ee.increasingDirection(n), h = Ee.increasingDirection(i), g = u > 0 ? 0 : n.length - 1, y = h > 0 ? 0 : n.length - 1, d = 0; d < n.length; d++) {
          var N = n[g].compareTo(i[y]);
          if (N !== 0) return N;
          g += u, y += h;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [Le];
      } }]), s;
    }();
    Ee.ForwardComparator = Nc, Ee.BidirectionalComparator = bc, Ee.coordArrayType = new Array(0).fill(null);
    var nr = function() {
      function s(e) {
        a(this, s), this.str = e;
      }
      return c(s, [{ key: "append", value: function(e) {
        this.str += e;
      } }, { key: "setCharAt", value: function(e, t) {
        this.str = this.str.substr(0, e) + t + this.str.substr(e + 1);
      } }, { key: "toString", value: function() {
        return this.str;
      } }]), s;
    }(), wn = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getM", value: function(e) {
        return this.hasM() ? this._coordinates[e].getM() : j.NaN;
      } }, { key: "setOrdinate", value: function(e, t, n) {
        switch (t) {
          case le.X:
            this._coordinates[e].x = n;
            break;
          case le.Y:
            this._coordinates[e].y = n;
            break;
          default:
            this._coordinates[e].setOrdinate(t, n);
        }
      } }, { key: "getZ", value: function(e) {
        return this.hasZ() ? this._coordinates[e].getZ() : j.NaN;
      } }, { key: "size", value: function() {
        return this._coordinates.length;
      } }, { key: "getOrdinate", value: function(e, t) {
        switch (t) {
          case le.X:
            return this._coordinates[e].x;
          case le.Y:
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
        return tr.create(this.getDimension(), this.getMeasures());
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
        return new s(e, this._dimension, this._measures);
      } }, { key: "toString", value: function() {
        if (this._coordinates.length > 0) {
          var e = new nr(17 * this._coordinates.length);
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
        return [le, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            s.constructor_.call(this, e, Ee.dimension(e), Ee.measures(e));
          } else if (Number.isInteger(arguments[0])) {
            var t = arguments[0];
            this._coordinates = new Array(t).fill(null);
            for (var n = 0; n < t; n++) this._coordinates[n] = new O();
          } else if (re(arguments[0], le)) {
            var i = arguments[0];
            if (i === null) return this._coordinates = new Array(0).fill(null), null;
            this._dimension = i.getDimension(), this._measures = i.getMeasures(), this._coordinates = new Array(i.size()).fill(null);
            for (var u = 0; u < this._coordinates.length; u++) this._coordinates[u] = i.getCoordinateCopy(u);
          }
        } else if (arguments.length === 2) {
          if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var h = arguments[0], g = arguments[1];
            s.constructor_.call(this, h, g, Ee.measures(h));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var y = arguments[0], d = arguments[1];
            this._coordinates = new Array(y).fill(null), this._dimension = d;
            for (var N = 0; N < y; N++) this._coordinates[N] = tr.create(d);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var b = arguments[0], R = arguments[1], F = arguments[2];
            this._dimension = R, this._measures = F, this._coordinates = b === null ? new Array(0).fill(null) : b;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var D = arguments[0], V = arguments[1], H = arguments[2];
            this._coordinates = new Array(D).fill(null), this._dimension = V, this._measures = H;
            for (var K = 0; K < D; K++) this._coordinates[K] = this.createCoordinate();
          }
        }
      } }]), s;
    }(), oi = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "readResolve", value: function() {
        return s.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new wn(e);
          }
          if (re(arguments[0], le)) {
            var t = arguments[0];
            return new wn(t);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return i > 3 && (i = 3), i < 2 && (i = 2), new wn(n, i);
          }
          if (arguments.length === 3) {
            var u = arguments[0], h = arguments[1], g = arguments[2], y = h - g;
            return g > 1 && (g = 1), y > 3 && (y = 3), y < 2 && (y = 2), new wn(u, y + g, g);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [Hs, X];
      } }], [{ key: "instance", value: function() {
        return s.instanceObject;
      } }]), s;
    }();
    oi.instanceObject = new oi();
    var ui = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && w(v(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return 1;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTIPOLYGON;
      } }, { key: "getDimension", value: function() {
        return 2;
      } }, { key: "getBoundary", value: function() {
        if (this.isEmpty()) return this.getFactory().createMultiLineString();
        for (var n = new Z(), i = 0; i < this._geometries.length; i++) for (var u = this._geometries[i].getBoundary(), h = 0; h < u.getNumGeometries(); h++) n.add(u.getGeometryN(h));
        var g = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(g));
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [Ks];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), ta = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), s;
    }(), Oc = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).map = /* @__PURE__ */ new Map(), n;
      }
      return c(t, [{ key: "get", value: function(n) {
        return this.map.get(n) || null;
      } }, { key: "put", value: function(n, i) {
        return this.map.set(n, i), i;
      } }, { key: "values", value: function() {
        for (var n = new Z(), i = this.map.values(), u = i.next(); !u.done; ) n.add(u.value), u = i.next();
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new ei();
        return this.map.entries().forEach(function(i) {
          return n.add(i);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), t;
    }(ta), We = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "equals", value: function(e) {
        if (!(e instanceof s)) return !1;
        var t = e;
        return this._modelType === t._modelType && this._scale === t._scale;
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.getMaximumSignificantDigits(), i = t.getMaximumSignificantDigits();
        return Zn.compare(n, i);
      } }, { key: "getScale", value: function() {
        return this._scale;
      } }, { key: "isFloating", value: function() {
        return this._modelType === s.FLOATING || this._modelType === s.FLOATING_SINGLE;
      } }, { key: "getType", value: function() {
        return this._modelType;
      } }, { key: "toString", value: function() {
        var e = "UNKNOWN";
        return this._modelType === s.FLOATING ? e = "Floating" : this._modelType === s.FLOATING_SINGLE ? e = "Floating-Single" : this._modelType === s.FIXED && (e = "Fixed (Scale=" + this.getScale() + ")"), e;
      } }, { key: "makePrecise", value: function() {
        if (typeof arguments[0] == "number") {
          var e = arguments[0];
          return j.isNaN(e) || this._modelType === s.FLOATING_SINGLE ? e : this._modelType === s.FIXED ? Math.round(e * this._scale) / this._scale : e;
        }
        if (arguments[0] instanceof O) {
          var t = arguments[0];
          if (this._modelType === s.FLOATING) return null;
          t.x = this.makePrecise(t.x), t.y = this.makePrecise(t.y);
        }
      } }, { key: "getMaximumSignificantDigits", value: function() {
        var e = 16;
        return this._modelType === s.FLOATING ? e = 16 : this._modelType === s.FLOATING_SINGLE ? e = 6 : this._modelType === s.FIXED && (e = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), e;
      } }, { key: "setScale", value: function(e) {
        this._scale = Math.abs(e);
      } }, { key: "interfaces_", get: function() {
        return [X, Y];
      } }], [{ key: "constructor_", value: function() {
        if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = s.FLOATING;
        else if (arguments.length === 1) {
          if (arguments[0] instanceof Vt) {
            var e = arguments[0];
            this._modelType = e, e === s.FIXED && this.setScale(1);
          } else if (typeof arguments[0] == "number") {
            var t = arguments[0];
            this._modelType = s.FIXED, this.setScale(t);
          } else if (arguments[0] instanceof s) {
            var n = arguments[0];
            this._modelType = n._modelType, this._scale = n._scale;
          }
        }
      } }, { key: "mostPrecise", value: function(e, t) {
        return e.compareTo(t) >= 0 ? e : t;
      } }]), s;
    }(), Vt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "readResolve", value: function() {
        return s.nameToTypeMap.get(this._name);
      } }, { key: "toString", value: function() {
        return this._name;
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        this._name = null;
        var e = arguments[0];
        this._name = e, s.nameToTypeMap.put(e, this);
      } }]), s;
    }();
    Vt.nameToTypeMap = new Oc(), We.Type = Vt, We.FIXED = new Vt("FIXED"), We.FLOATING = new Vt("FLOATING"), We.FLOATING_SINGLE = new Vt("FLOATING SINGLE"), We.maximumPreciseValue = 9007199254740992;
    var li = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "copyInternal", value: function() {
        for (var n = new Array(this._geometries.length).fill(null), i = 0; i < n.length; i++) n[i] = this._geometries[i].copy();
        return new t(n, this._factory);
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          return !!this.isEquivalentClass(n) && w(v(t.prototype), "equalsExact", this).call(this, n, i);
        }
        return w(v(t.prototype), "equalsExact", this).apply(this, arguments);
      } }, { key: "getBoundaryDimension", value: function() {
        return this.isClosed() ? z.FALSE : 0;
      } }, { key: "isClosed", value: function() {
        if (this.isEmpty()) return !1;
        for (var n = 0; n < this._geometries.length; n++) if (!this._geometries[n].isClosed()) return !1;
        return !0;
      } }, { key: "getTypeCode", value: function() {
        return W.TYPECODE_MULTILINESTRING;
      } }, { key: "getDimension", value: function() {
        return 1;
      } }, { key: "getBoundary", value: function() {
        throw new kt();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [Zs];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), Wt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "createEmpty", value: function(e) {
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
            throw new M("Invalid dimension: " + e);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.isNull() ? this.createPoint() : e.getMinX() === e.getMaxX() && e.getMinY() === e.getMaxY() ? this.createPoint(new O(e.getMinX(), e.getMinY())) : e.getMinX() === e.getMaxX() || e.getMinY() === e.getMaxY() ? this.createLineString([new O(e.getMinX(), e.getMinY()), new O(e.getMaxX(), e.getMaxY())]) : this.createPolygon(this.createLinearRing([new O(e.getMinX(), e.getMinY()), new O(e.getMinX(), e.getMaxY()), new O(e.getMaxX(), e.getMaxY()), new O(e.getMaxX(), e.getMinY()), new O(e.getMinX(), e.getMinY())]), null);
      } }, { key: "createLineString", value: function() {
        if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return this.createLineString(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
          }
          if (re(arguments[0], le)) {
            var t = arguments[0];
            return new kn(t, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new li(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new li(e, this);
        }
      } }, { key: "buildGeometry", value: function(e) {
        for (var t = null, n = !1, i = !1, u = e.iterator(); u.hasNext(); ) {
          var h = u.next(), g = h.getTypeCode();
          t === null && (t = g), g !== t && (n = !0), h instanceof De && (i = !0);
        }
        if (t === null) return this.createGeometryCollection();
        if (n || i) return this.createGeometryCollection(s.toGeometryArray(e));
        var y = e.iterator().next();
        if (e.size() > 1) {
          if (y instanceof er) return this.createMultiPolygon(s.toPolygonArray(e));
          if (y instanceof kn) return this.createMultiLineString(s.toLineStringArray(e));
          if (y instanceof ii) return this.createMultiPoint(s.toPointArray(e));
          se.shouldNeverReachHere("Unhandled geometry type: " + y.getGeometryType());
        }
        return y;
      } }, { key: "createMultiPointFromCoords", value: function(e) {
        return this.createMultiPoint(e !== null ? this.getCoordinateSequenceFactory().create(e) : null);
      } }, { key: "createPoint", value: function() {
        if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
        if (arguments.length === 1) {
          if (arguments[0] instanceof O) {
            var e = arguments[0];
            return this.createPoint(e !== null ? this.getCoordinateSequenceFactory().create([e]) : null);
          }
          if (re(arguments[0], le)) {
            var t = arguments[0];
            return new ii(t, this);
          }
        }
      } }, { key: "getCoordinateSequenceFactory", value: function() {
        return this._coordinateSequenceFactory;
      } }, { key: "createPolygon", value: function() {
        if (arguments.length === 0) return this.createPolygon(null, null);
        if (arguments.length === 1) {
          if (re(arguments[0], le)) {
            var e = arguments[0];
            return this.createPolygon(this.createLinearRing(e));
          }
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return this.createPolygon(this.createLinearRing(t));
          }
          if (arguments[0] instanceof Sn) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          return new er(i, u, this);
        }
      } }, { key: "getSRID", value: function() {
        return this._SRID;
      } }, { key: "createGeometryCollection", value: function() {
        if (arguments.length === 0) return new De(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new De(e, this);
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
          if (re(arguments[0], le)) {
            var t = arguments[0];
            return new Sn(t, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new ui(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new ui(e, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new si(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new si(e, this);
          }
          if (re(arguments[0], le)) {
            var t = arguments[0];
            if (t === null) return this.createMultiPoint(new Array(0).fill(null));
            for (var n = new Array(t.size()).fill(null), i = 0; i < t.size(); i++) {
              var u = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
              Mt.copy(t, i, u, 0, 1), n[i] = this.createPoint(u);
            }
            return this.createMultiPoint(n);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) s.constructor_.call(this, new We(), 0);
        else if (arguments.length === 1) {
          if (re(arguments[0], Hs)) {
            var e = arguments[0];
            s.constructor_.call(this, new We(), 0, e);
          } else if (arguments[0] instanceof We) {
            var t = arguments[0];
            s.constructor_.call(this, t, 0, s.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          s.constructor_.call(this, n, i, s.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          this._precisionModel = u, this._coordinateSequenceFactory = g, this._SRID = h;
        }
      } }, { key: "toMultiPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toGeometryArray", value: function(e) {
        if (e === null) return null;
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return oi.instance();
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
      } }]), s;
    }(), ci = "XY", Tc = "XYZ", Rc = "XYM", Lc = "XYZM", na = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, ra = "EMPTY", rr = 1, yt = 2, St = 3, ia = 4, Ht = 5, Cc = 6;
    for (var Pc in na) na[Pc].toUpperCase();
    var Ac = function() {
      function s(e) {
        a(this, s), this.wkt = e, this.index_ = -1;
      }
      return c(s, [{ key: "isAlpha_", value: function(e) {
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
        if (t == "(") e = yt;
        else if (t == ",") e = Ht;
        else if (t == ")") e = St;
        else if (this.isNumeric_(t) || t == "-") e = ia, i = this.readNumber_();
        else if (this.isAlpha_(t)) e = rr, i = this.readText_();
        else {
          if (this.isWhiteSpace_(t)) return this.nextToken();
          if (t !== "") throw new Error("Unexpected character: " + t);
          e = Cc;
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
      } }]), s;
    }(), Mc = function() {
      function s(e, t) {
        a(this, s), this.lexer_ = e, this.token_, this.layout_ = ci, this.factory = t;
      }
      return c(s, [{ key: "consume_", value: function() {
        this.token_ = this.lexer_.nextToken();
      } }, { key: "isTokenType", value: function(e) {
        return this.token_.type == e;
      } }, { key: "match", value: function(e) {
        var t = this.isTokenType(e);
        return t && this.consume_(), t;
      } }, { key: "parse", value: function() {
        return this.consume_(), this.parseGeometry_();
      } }, { key: "parseGeometryLayout_", value: function() {
        var e = ci, t = this.token_;
        if (this.isTokenType(rr)) {
          var n = t.value;
          n === "Z" ? e = Tc : n === "M" ? e = Rc : n === "ZM" && (e = Lc), e !== ci && this.consume_();
        }
        return e;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(yt)) {
          var e = [];
          do
            e.push(this.parseGeometry_());
          while (this.match(Ht));
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(yt)) {
          var e = this.parsePoint_();
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(yt)) {
          var e = this.parsePointList_();
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(yt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var e;
        if (this.match(yt)) {
          if (e = this.token_.type == yt ? this.parsePointTextList_() : this.parsePointList_(), this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(yt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(yt)) {
          var e = this.parsePolygonTextList_();
          if (this.match(St)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var e = [], t = this.layout_.length, n = 0; n < t; ++n) {
          var i = this.token_;
          if (!this.match(ia)) break;
          e.push(i.value);
        }
        if (e.length == t) return e;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var e = [this.parsePoint_()]; this.match(Ht); ) e.push(this.parsePoint_());
        return e;
      } }, { key: "parsePointTextList_", value: function() {
        for (var e = [this.parsePointText_()]; this.match(Ht); ) e.push(this.parsePointText_());
        return e;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var e = [this.parseLineStringText_()]; this.match(Ht); ) e.push(this.parseLineStringText_());
        return e;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var e = [this.parsePolygonText_()]; this.match(Ht); ) e.push(this.parsePolygonText_());
        return e;
      } }, { key: "isEmptyGeometry_", value: function() {
        var e = this.isTokenType(rr) && this.token_.value == ra;
        return e && this.consume_(), e;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var e = this.factory, t = function(H) {
          return x(O, T(H));
        }, n = function(H) {
          var K = H.map(function(fe) {
            return e.createLinearRing(fe.map(t));
          });
          return K.length > 1 ? e.createPolygon(K[0], K.slice(1)) : e.createPolygon(K[0]);
        }, i = this.token_;
        if (this.match(rr)) {
          var u = i.value;
          if (this.layout_ = this.parseGeometryLayout_(), u == "GEOMETRYCOLLECTION") {
            var h = this.parseGeometryCollectionText_();
            return e.createGeometryCollection(h);
          }
          switch (u) {
            case "POINT":
              var g = this.parsePointText_();
              return g ? e.createPoint(x(O, T(g))) : e.createPoint();
            case "LINESTRING":
              var y = this.parseLineStringText_().map(t);
              return e.createLineString(y);
            case "LINEARRING":
              var d = this.parseLineStringText_().map(t);
              return e.createLinearRing(d);
            case "POLYGON":
              var N = this.parsePolygonText_();
              return N && N.length !== 0 ? n(N) : e.createPolygon();
            case "MULTIPOINT":
              var b = this.parseMultiPointText_();
              if (!b || b.length === 0) return e.createMultiPoint();
              var R = b.map(t).map(function(H) {
                return e.createPoint(H);
              });
              return e.createMultiPoint(R);
            case "MULTILINESTRING":
              var F = this.parseMultiLineStringText_().map(function(H) {
                return e.createLineString(H.map(t));
              });
              return e.createMultiLineString(F);
            case "MULTIPOLYGON":
              var D = this.parseMultiPolygonText_();
              if (!D || D.length === 0) return e.createMultiPolygon();
              var V = D.map(n);
              return e.createMultiPolygon(V);
            default:
              throw new Error("Invalid geometry type: " + u);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), s;
    }();
    function sa(s) {
      if (s.isEmpty()) return "";
      var e = s.getCoordinate(), t = [e.x, e.y];
      return e.z === void 0 || Number.isNaN(e.z) || t.push(e.z), e.m === void 0 || Number.isNaN(e.m) || t.push(e.m), t.join(" ");
    }
    function Nn(s) {
      for (var e = s.getCoordinates().map(function(u) {
        var h = [u.x, u.y];
        return u.z === void 0 || Number.isNaN(u.z) || h.push(u.z), u.m === void 0 || Number.isNaN(u.m) || h.push(u.m), h;
      }), t = [], n = 0, i = e.length; n < i; ++n) t.push(e[n].join(" "));
      return t.join(", ");
    }
    function aa(s) {
      var e = [];
      e.push("(" + Nn(s.getExteriorRing()) + ")");
      for (var t = 0, n = s.getNumInteriorRing(); t < n; ++t) e.push("(" + Nn(s.getInteriorRingN(t)) + ")");
      return e.join(", ");
    }
    var Dc = { Point: sa, LineString: Nn, LinearRing: Nn, Polygon: aa, MultiPoint: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + sa(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiLineString: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + Nn(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiPolygon: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + aa(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, GeometryCollection: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push(oa(s.getGeometryN(t)));
      return e.join(", ");
    } };
    function oa(s) {
      var e = s.getGeometryType(), t = Dc[e];
      e = e.toUpperCase();
      var n = function(i) {
        var u = "";
        if (i.isEmpty()) return u;
        var h = i.getCoordinate();
        return h.z === void 0 || Number.isNaN(h.z) || (u += "Z"), h.m === void 0 || Number.isNaN(h.m) || (u += "M"), u;
      }(s);
      return n.length > 0 && (e += " " + n), s.isEmpty() ? e + " " + ra : e + " (" + t(s) + ")";
    }
    var Fc = function() {
      function s(e) {
        a(this, s), this.geometryFactory = e || new Wt(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return c(s, [{ key: "read", value: function(e) {
        var t = new Ac(e);
        return new Mc(t, this.geometryFactory).parse();
      } }, { key: "write", value: function(e) {
        return oa(e);
      } }]), s;
    }(), hi = function() {
      function s(e) {
        a(this, s), this.parser = new Fc(e);
      }
      return c(s, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }], [{ key: "toLineString", value: function(e, t) {
        if (arguments.length !== 2) throw new Error("Not implemented");
        return "LINESTRING ( " + e.x + " " + e.y + ", " + t.x + " " + t.y + " )";
      } }]), s;
    }(), me = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getIndexAlongSegment", value: function(e, t) {
        return this.computeIntLineIndex(), this._intLineIndex[e][t];
      } }, { key: "getTopologySummary", value: function() {
        var e = new nr();
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
        return this._result !== s.NO_INTERSECTION;
      } }, { key: "getEdgeDistance", value: function(e, t) {
        return s.computeEdgeDistance(this._intPt[t], this._inputLines[e][0], this._inputLines[e][1]);
      } }, { key: "isCollinear", value: function() {
        return this._result === s.COLLINEAR_INTERSECTION;
      } }, { key: "toString", value: function() {
        return hi.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + hi.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
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
        }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new O(), this._intPt[1] = new O(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
      } }, { key: "computeEdgeDistance", value: function(e, t, n) {
        var i = Math.abs(n.x - t.x), u = Math.abs(n.y - t.y), h = -1;
        if (e.equals(t)) h = 0;
        else if (e.equals(n)) h = i > u ? i : u;
        else {
          var g = Math.abs(e.x - t.x), y = Math.abs(e.y - t.y);
          (h = i > u ? g : y) !== 0 || e.equals(t) || (h = Math.max(g, y));
        }
        return se.isTrue(!(h === 0 && !e.equals(t)), "Bad distance calculation"), h;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(e, t, n) {
        var i = e.x - t.x, u = e.y - t.y, h = Math.sqrt(i * i + u * u);
        return se.isTrue(!(h === 0 && !e.equals(t)), "Invalid distance calculation"), h;
      } }]), s;
    }();
    me.DONT_INTERSECT = 0, me.DO_INTERSECT = 1, me.COLLINEAR = 2, me.NO_INTERSECTION = 0, me.POINT_INTERSECTION = 1, me.COLLINEAR_INTERSECTION = 2;
    var Bt = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.call(this);
      }
      return c(t, [{ key: "isInSegmentEnvelopes", value: function(n) {
        var i = new pe(this._inputLines[0][0], this._inputLines[0][1]), u = new pe(this._inputLines[1][0], this._inputLines[1][1]);
        return i.contains(n) && u.contains(n);
      } }, { key: "computeIntersection", value: function() {
        if (arguments.length !== 3) return w(v(t.prototype), "computeIntersection", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = arguments[2];
        if (this._isProper = !1, pe.intersects(i, u, n) && Q.index(i, u, n) === 0 && Q.index(u, i, n) === 0) return this._isProper = !0, (n.equals(i) || n.equals(u)) && (this._isProper = !1), this._result = me.POINT_INTERSECTION, null;
        this._result = me.NO_INTERSECTION;
      } }, { key: "intersection", value: function(n, i, u, h) {
        var g = this.intersectionSafe(n, i, u, h);
        return this.isInSegmentEnvelopes(g) || (g = new O(t.nearestEndpoint(n, i, u, h))), this._precisionModel !== null && this._precisionModel.makePrecise(g), g;
      } }, { key: "checkDD", value: function(n, i, u, h, g) {
        var y = ni.intersection(n, i, u, h), d = this.isInSegmentEnvelopes(y);
        $e.out.println("DD in env = " + d + "  --------------------- " + y), g.distance(y) > 1e-4 && $e.out.println("Distance = " + g.distance(y));
      } }, { key: "intersectionSafe", value: function(n, i, u, h) {
        var g = ri.intersection(n, i, u, h);
        return g === null && (g = t.nearestEndpoint(n, i, u, h)), g;
      } }, { key: "computeCollinearIntersection", value: function(n, i, u, h) {
        var g = pe.intersects(n, i, u), y = pe.intersects(n, i, h), d = pe.intersects(u, h, n), N = pe.intersects(u, h, i);
        return g && y ? (this._intPt[0] = u, this._intPt[1] = h, me.COLLINEAR_INTERSECTION) : d && N ? (this._intPt[0] = n, this._intPt[1] = i, me.COLLINEAR_INTERSECTION) : g && d ? (this._intPt[0] = u, this._intPt[1] = n, !u.equals(n) || y || N ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : g && N ? (this._intPt[0] = u, this._intPt[1] = i, !u.equals(i) || y || d ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : y && d ? (this._intPt[0] = h, this._intPt[1] = n, !h.equals(n) || g || N ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : y && N ? (this._intPt[0] = h, this._intPt[1] = i, !h.equals(i) || g || d ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : me.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, i, u, h) {
        if (this._isProper = !1, !pe.intersects(n, i, u, h)) return me.NO_INTERSECTION;
        var g = Q.index(n, i, u), y = Q.index(n, i, h);
        if (g > 0 && y > 0 || g < 0 && y < 0) return me.NO_INTERSECTION;
        var d = Q.index(u, h, n), N = Q.index(u, h, i);
        return d > 0 && N > 0 || d < 0 && N < 0 ? me.NO_INTERSECTION : g === 0 && y === 0 && d === 0 && N === 0 ? this.computeCollinearIntersection(n, i, u, h) : (g === 0 || y === 0 || d === 0 || N === 0 ? (this._isProper = !1, n.equals2D(u) || n.equals2D(h) ? this._intPt[0] = n : i.equals2D(u) || i.equals2D(h) ? this._intPt[0] = i : g === 0 ? this._intPt[0] = new O(u) : y === 0 ? this._intPt[0] = new O(h) : d === 0 ? this._intPt[0] = new O(n) : N === 0 && (this._intPt[0] = new O(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, u, h)), me.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, i, u, h) {
        var g = n, y = nt.pointToSegment(n, u, h), d = nt.pointToSegment(i, u, h);
        return d < y && (y = d, g = i), (d = nt.pointToSegment(u, n, i)) < y && (y = d, g = u), (d = nt.pointToSegment(h, n, i)) < y && (y = d, g = h), g;
      } }]), t;
    }(me), Gc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "countSegment", value: function(e, t) {
        if (e.x < this._p.x && t.x < this._p.x) return null;
        if (this._p.x === t.x && this._p.y === t.y) return this._isPointOnSegment = !0, null;
        if (e.y === this._p.y && t.y === this._p.y) {
          var n = e.x, i = t.x;
          return n > i && (n = t.x, i = e.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
        }
        if (e.y > this._p.y && t.y <= this._p.y || t.y > this._p.y && e.y <= this._p.y) {
          var u = Q.index(e, t, this._p);
          if (u === Q.COLLINEAR) return this._isPointOnSegment = !0, null;
          t.y < e.y && (u = -u), u === Q.LEFT && this._crossingCount++;
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
        if (arguments[0] instanceof O && re(arguments[1], le)) {
          for (var e = arguments[0], t = arguments[1], n = new s(e), i = new O(), u = new O(), h = 1; h < t.size(); h++) if (t.getCoordinate(h, i), t.getCoordinate(h - 1, u), n.countSegment(i, u), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof O && arguments[1] instanceof Array) {
          for (var g = arguments[0], y = arguments[1], d = new s(g), N = 1; N < y.length; N++) {
            var b = y[N], R = y[N - 1];
            if (d.countSegment(b, R), d.isOnSegment()) return d.getLocation();
          }
          return d.getLocation();
        }
      } }]), s;
    }(), fi = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof O && re(arguments[1], le)) {
          for (var e = arguments[0], t = arguments[1], n = new Bt(), i = new O(), u = new O(), h = t.size(), g = 1; g < h; g++) if (t.getCoordinate(g - 1, i), t.getCoordinate(g, u), n.computeIntersection(e, i, u), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof O && arguments[1] instanceof Array) {
          for (var y = arguments[0], d = arguments[1], N = new Bt(), b = 1; b < d.length; b++) {
            var R = d[b - 1], F = d[b];
            if (N.computeIntersection(y, R, F), N.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(e, t) {
        return Gc.locatePointInRing(e, t);
      } }, { key: "isInRing", value: function(e, t) {
        return s.locateInRing(e, t) !== I.EXTERIOR;
      } }]), s;
    }(), qe = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setAllLocations", value: function(e) {
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
          t[B.ON] = this.location[B.ON], t[B.LEFT] = I.NONE, t[B.RIGHT] = I.NONE, this.location = t;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === I.NONE && n < e.location.length && (this.location[n] = e.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var e = this.location[B.LEFT];
        this.location[B.LEFT] = this.location[B.RIGHT], this.location[B.RIGHT] = e;
      } }, { key: "toString", value: function() {
        var e = new xn();
        return this.location.length > 1 && e.append(I.toLocationSymbol(this.location[B.LEFT])), e.append(I.toLocationSymbol(this.location[B.ON])), this.location.length > 1 && e.append(I.toLocationSymbol(this.location[B.RIGHT])), e.toString();
      } }, { key: "setLocations", value: function(e, t, n) {
        this.location[B.ON] = e, this.location[B.LEFT] = t, this.location[B.RIGHT] = n;
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
          this.setLocation(B.ON, e);
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
            this.init(1), this.location[B.ON] = t;
          } else if (arguments[0] instanceof s) {
            var n = arguments[0];
            if (this.init(n.location.length), n !== null) for (var i = 0; i < this.location.length; i++) this.location[i] = n.location[i];
          }
        } else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          this.init(3), this.location[B.ON] = u, this.location[B.LEFT] = h, this.location[B.RIGHT] = g;
        }
      } }]), s;
    }(), ze = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getGeometryCount", value: function() {
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
        for (var t = 0; t < 2; t++) this.elt[t] === null && e.elt[t] !== null ? this.elt[t] = new qe(e.elt[t]) : this.elt[t].merge(e.elt[t]);
      } }, { key: "flip", value: function() {
        this.elt[0].flip(), this.elt[1].flip();
      } }, { key: "getLocation", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.elt[e].get(B.ON);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return this.elt[t].get(n);
        }
      } }, { key: "toString", value: function() {
        var e = new xn();
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
          this.elt[e].setLocation(B.ON, t);
        } else if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          this.elt[n].setLocation(i, u);
        }
      } }, { key: "isEqualOnSide", value: function(e, t) {
        return this.elt[0].isEqualOnSide(e.elt[0], t) && this.elt[1].isEqualOnSide(e.elt[1], t);
      } }, { key: "allPositionsEqual", value: function(e, t) {
        return this.elt[e].allPositionsEqual(t);
      } }, { key: "toLine", value: function(e) {
        this.elt[e].isArea() && (this.elt[e] = new qe(this.elt[e].location[0]));
      } }], [{ key: "constructor_", value: function() {
        if (this.elt = new Array(2).fill(null), arguments.length === 1) {
          if (Number.isInteger(arguments[0])) {
            var e = arguments[0];
            this.elt[0] = new qe(e), this.elt[1] = new qe(e);
          } else if (arguments[0] instanceof s) {
            var t = arguments[0];
            this.elt[0] = new qe(t.elt[0]), this.elt[1] = new qe(t.elt[1]);
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          this.elt[0] = new qe(I.NONE), this.elt[1] = new qe(I.NONE), this.elt[n].setLocation(i);
        } else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          this.elt[0] = new qe(u, h, g), this.elt[1] = new qe(u, h, g);
        } else if (arguments.length === 4) {
          var y = arguments[0], d = arguments[1], N = arguments[2], b = arguments[3];
          this.elt[0] = new qe(I.NONE, I.NONE, I.NONE), this.elt[1] = new qe(I.NONE, I.NONE, I.NONE), this.elt[y].setLocations(d, N, b);
        }
      } }, { key: "toLineLabel", value: function(e) {
        for (var t = new s(I.NONE), n = 0; n < 2; n++) t.setLocation(n, e.getLocation(n));
        return t;
      } }]), s;
    }(), ir = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "computeRing", value: function() {
        if (this._ring !== null) return null;
        for (var e = new Array(this._pts.size()).fill(null), t = 0; t < this._pts.size(); t++) e[t] = this._pts.get(t);
        this._ring = this._geometryFactory.createLinearRing(e), this._isHole = Q.isCCW(this._ring.getCoordinates());
      } }, { key: "isIsolated", value: function() {
        return this._label.getGeometryCount() === 1;
      } }, { key: "computePoints", value: function(e) {
        this._startDe = e;
        var t = e, n = !0;
        do {
          if (t === null) throw new gt("Found null DirectedEdge");
          if (t.getEdgeRing() === this) throw new gt("Directed Edge visited twice during ring-building at " + t.getCoordinate());
          this._edges.add(t);
          var i = t.getLabel();
          se.isTrue(i.isArea()), this.mergeLabel(i), this.addPoints(t.getEdge(), t.isForward(), n), n = !1, this.setEdgeRing(t, this), t = this.getNext(t);
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
          for (var h = u; h < i.length; h++) this._pts.add(i[h]);
        } else {
          var g = i.length - 2;
          n && (g = i.length - 1);
          for (var y = g; y >= 0; y--) this._pts.add(i[y]);
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
        if (!t.getEnvelopeInternal().contains(e) || !fi.isInRing(e, t.getCoordinates())) return !1;
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
          var t = arguments[0], n = arguments[1], i = t.getLocation(n, B.RIGHT);
          if (i === I.NONE) return null;
          if (this._label.getLocation(n) === I.NONE) return this._label.setLocation(n, i), null;
        }
      } }, { key: "setShell", value: function(e) {
        this._shell = e, e !== null && e.addHole(this);
      } }, { key: "toPolygon", value: function(e) {
        for (var t = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) t[n] = this._holes.get(n).getLinearRing();
        return e.createPolygon(this.getLinearRing(), t);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new Z(), this._pts = new Z(), this._label = new ze(I.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new Z(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            this._geometryFactory = t, this.computePoints(e), this.computeRing();
          }
        }
      } }]), s;
    }(), Bc = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "setEdgeRing", value: function(n, i) {
        n.setMinEdgeRing(i);
      } }, { key: "getNext", value: function(n) {
        return n.getNextMin();
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        ir.constructor_.call(this, n, i);
      } }]), t;
    }(ir), $c = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "buildMinimalRings", value: function() {
        var n = new Z(), i = this._startDe;
        do {
          if (i.getMinEdgeRing() === null) {
            var u = new Bc(i, this._geometryFactory);
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
        ir.constructor_.call(this, n, i);
      } }]), t;
    }(ir), ua = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setVisited", value: function(e) {
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
        se.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(e);
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
      } }]), s;
    }(), sr = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "isIncidentEdgeInResult", value: function() {
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
          var h = n.getLocation(i);
          u !== I.BOUNDARY && (u = h);
        }
        return u;
      } }, { key: "setLabel", value: function() {
        if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return w(v(t.prototype), "setLabel", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        this._label === null ? this._label = new ze(n, i) : this._label.setLocation(n, i);
      } }, { key: "getEdges", value: function() {
        return this._edges;
      } }, { key: "mergeLabel", value: function() {
        if (arguments[0] instanceof t) {
          var n = arguments[0];
          this.mergeLabel(n._label);
        } else if (arguments[0] instanceof ze) for (var i = arguments[0], u = 0; u < 2; u++) {
          var h = this.computeMergedLocation(i, u), g = this._label.getLocation(u);
          g === I.NONE && this._label.setLocation(u, h);
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
        this._coord = n, this._edges = i, this._label = new ze(0, I.NONE);
      } }]), t;
    }(ua), qc = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(ta);
    function la(s) {
      return s == null ? 0 : s.color;
    }
    function he(s) {
      return s == null ? null : s.parent;
    }
    function rt(s, e) {
      s !== null && (s.color = e);
    }
    function gi(s) {
      return s == null ? null : s.left;
    }
    function ca(s) {
      return s == null ? null : s.right;
    }
    var bn = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).root_ = null, n.size_ = 0, n;
      }
      return c(t, [{ key: "get", value: function(n) {
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
        var u, h, g = this.root_;
        do
          if (u = g, (h = n.compareTo(g.key)) < 0) g = g.left;
          else {
            if (!(h > 0)) {
              var y = g.value;
              return g.value = i, y;
            }
            g = g.right;
          }
        while (g !== null);
        var d = { key: n, left: null, right: null, value: i, parent: u, color: 0, getValue: function() {
          return this.value;
        }, getKey: function() {
          return this.key;
        } };
        return h < 0 ? u.left = d : u.right = d, this.fixAfterInsertion(d), this.size_++, null;
      } }, { key: "fixAfterInsertion", value: function(n) {
        var i;
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) he(n) === gi(he(he(n))) ? la(i = ca(he(he(n)))) === 1 ? (rt(he(n), 0), rt(i, 0), rt(he(he(n)), 1), n = he(he(n))) : (n === ca(he(n)) && (n = he(n), this.rotateLeft(n)), rt(he(n), 0), rt(he(he(n)), 1), this.rotateRight(he(he(n)))) : la(i = gi(he(he(n)))) === 1 ? (rt(he(n), 0), rt(i, 0), rt(he(he(n)), 1), n = he(he(n))) : (n === gi(he(n)) && (n = he(n), this.rotateRight(n)), rt(he(n), 0), rt(he(he(n)), 1), this.rotateLeft(he(he(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new Z(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i.value); (i = t.successor(i)) !== null; ) n.add(i.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new ei(), i = this.getFirstEntry();
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
    }(qc), ha = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "find", value: function(e) {
        return this.nodeMap.get(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof O) {
          var e = arguments[0], t = this.nodeMap.get(e);
          return t === null && (t = this.nodeFact.createNode(e), this.nodeMap.put(e, t)), t;
        }
        if (arguments[0] instanceof sr) {
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
        for (var t = new Z(), n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().getLocation(e) === I.BOUNDARY && t.add(i);
        }
        return t;
      } }, { key: "add", value: function(e) {
        var t = e.getCoordinate();
        this.addNode(t).add(e);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new bn(), this.nodeFact = null;
        var e = arguments[0];
        this.nodeFact = e;
      } }]), s;
    }(), Ce = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "isNorthern", value: function(e) {
        return e === s.NE || e === s.NW;
      } }, { key: "isOpposite", value: function(e, t) {
        return e !== t && (e - t + 4) % 4 === 2;
      } }, { key: "commonHalfPlane", value: function(e, t) {
        if (e === t) return e;
        if ((e - t + 4) % 4 === 2) return -1;
        var n = e < t ? e : t;
        return n === 0 && (e > t ? e : t) === 3 ? 3 : n;
      } }, { key: "isInHalfPlane", value: function(e, t) {
        return t === s.SE ? e === s.SE || e === s.SW : e === t || e === t + 1;
      } }, { key: "quadrant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new M("Cannot compute the quadrant for point ( " + e + ", " + t + " )");
          return e >= 0 ? t >= 0 ? s.NE : s.SE : t >= 0 ? s.NW : s.SW;
        }
        if (arguments[0] instanceof O && arguments[1] instanceof O) {
          var n = arguments[0], i = arguments[1];
          if (i.x === n.x && i.y === n.y) throw new M("Cannot compute the quadrant for two identical points " + n);
          return i.x >= n.x ? i.y >= n.y ? s.NE : s.SE : i.y >= n.y ? s.NW : s.SW;
        }
      } }]), s;
    }();
    Ce.NE = 0, Ce.NW = 1, Ce.SW = 2, Ce.SE = 3;
    var fa = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "compareDirection", value: function(e) {
        return this._dx === e._dx && this._dy === e._dy ? 0 : this._quadrant > e._quadrant ? 1 : this._quadrant < e._quadrant ? -1 : Q.index(e._p0, e._p1, this._p1);
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
        this._p0 = e, this._p1 = t, this._dx = t.x - e.x, this._dy = t.y - e.y, this._quadrant = Ce.quadrant(this._dx, this._dy), se.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
      } }, { key: "interfaces_", get: function() {
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
          var e = arguments[0];
          this._edge = e;
        } else if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2];
          s.constructor_.call(this, t, n, i, null);
        } else if (arguments.length === 4) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3];
          s.constructor_.call(this, u), this.init(h, g), this._label = y;
        }
      } }]), s;
    }(), yi = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getNextMin", value: function() {
        return this._nextMin;
      } }, { key: "getDepth", value: function(n) {
        return this._depth[n];
      } }, { key: "setVisited", value: function(n) {
        this._isVisited = n;
      } }, { key: "computeDirectedLabel", value: function() {
        this._label = new ze(this._edge.getLabel()), this._isForward || this._label.flip();
      } }, { key: "getNext", value: function() {
        return this._next;
      } }, { key: "setDepth", value: function(n, i) {
        if (this._depth[n] !== -999 && this._depth[n] !== i) throw new gt("assigned depths do not match", this.getCoordinate());
        this._depth[n] = i;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, i = 0; i < 2; i++) this._label.isArea(i) && this._label.getLocation(i, B.LEFT) === I.INTERIOR && this._label.getLocation(i, B.RIGHT) === I.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        w(v(t.prototype), "print", this).call(this, n), n.print(" " + this._depth[B.LEFT] + "/" + this._depth[B.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
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
        var h = 1;
        n === B.LEFT && (h = -1);
        var g = B.opposite(n), y = i + u * h;
        this.setDepth(n, i), this.setDepth(g, y);
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
        if (fa.constructor_.call(this, n), this._isForward = i, i) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var u = n.getNumPoints() - 1;
          this.init(n.getCoordinate(u), n.getCoordinate(u - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, i) {
        return n === I.EXTERIOR && i === I.INTERIOR ? 1 : n === I.INTERIOR && i === I.EXTERIOR ? -1 : 0;
      } }]), t;
    }(fa), ga = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "createNode", value: function(e) {
        return new sr(e, null);
      } }]), s;
    }(), ya = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "printEdges", value: function(e) {
        e.println("Edges:");
        for (var t = 0; t < this._edges.size(); t++) {
          e.println("edge " + t + ":");
          var n = this._edges.get(t);
          n.print(e), n.eiList.print(e);
        }
      } }, { key: "find", value: function(e) {
        return this._nodes.find(e);
      } }, { key: "addNode", value: function() {
        if (arguments[0] instanceof sr) {
          var e = arguments[0];
          return this._nodes.addNode(e);
        }
        if (arguments[0] instanceof O) {
          var t = arguments[0];
          return this._nodes.addNode(t);
        }
      } }, { key: "getNodeIterator", value: function() {
        return this._nodes.iterator();
      } }, { key: "linkResultDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkResultDirectedEdges();
      } }, { key: "debugPrintln", value: function(e) {
        $e.out.println(e);
      } }, { key: "isBoundaryNode", value: function(e, t) {
        var n = this._nodes.find(t);
        if (n === null) return !1;
        var i = n.getLabel();
        return i !== null && i.getLocation(e) === I.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(e, t, n, i) {
        return !!e.equals(n) && Q.index(e, t, i) === Q.COLLINEAR && Ce.quadrant(e, t) === Ce.quadrant(n, i);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(e) {
        $e.out.print(e);
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
          var i = new yi(n, !0), u = new yi(n, !1);
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
        if (this._edges = new Z(), this._nodes = null, this._edgeEndList = new Z(), arguments.length === 0) this._nodes = new ha(new ga());
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._nodes = new ha(e);
        }
      } }, { key: "linkResultDirectedEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }]), s;
    }(), zc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "sortShellsAndHoles", value: function(e, t, n) {
        for (var i = e.iterator(); i.hasNext(); ) {
          var u = i.next();
          u.isHole() ? n.add(u) : t.add(u);
        }
      } }, { key: "computePolygons", value: function(e) {
        for (var t = new Z(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next().toPolygon(this._geometryFactory);
          t.add(i);
        }
        return t;
      } }, { key: "placeFreeHoles", value: function(e, t) {
        for (var n = t.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.getShell() === null) {
            var u = s.findEdgeRingContaining(i, e);
            if (u === null) throw new gt("unable to assign hole to a shell", i.getCoordinate(0));
            i.setShell(u);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(e, t, n) {
        for (var i = new Z(), u = e.iterator(); u.hasNext(); ) {
          var h = u.next();
          if (h.getMaxNodeDegree() > 2) {
            h.linkDirectedEdgesForMinimalEdgeRings();
            var g = h.buildMinimalRings(), y = this.findShell(g);
            y !== null ? (this.placePolygonHoles(y, g), t.add(y)) : n.addAll(g);
          } else i.add(h);
        }
        return i;
      } }, { key: "buildMaximalEdgeRings", value: function(e) {
        for (var t = new Z(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isInResult() && i.getLabel().isArea() && i.getEdgeRing() === null) {
            var u = new $c(i, this._geometryFactory);
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
        return se.isTrue(t <= 1, "found two shells in MinimalEdgeRing list"), n;
      } }, { key: "add", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.add(e.getEdgeEnds(), e.getNodes());
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          ya.linkResultDirectedEdges(n);
          var i = this.buildMaximalEdgeRings(t), u = new Z(), h = this.buildMinimalEdgeRings(i, this._shellList, u);
          this.sortShellsAndHoles(h, this._shellList, u), this.placeFreeHoles(this._shellList, u);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new Z();
        var e = arguments[0];
        this._geometryFactory = e;
      } }, { key: "findEdgeRingContaining", value: function(e, t) {
        for (var n = e.getLinearRing(), i = n.getEnvelopeInternal(), u = n.getCoordinateN(0), h = null, g = null, y = t.iterator(); y.hasNext(); ) {
          var d = y.next(), N = d.getLinearRing(), b = N.getEnvelopeInternal();
          if (!b.equals(i) && b.contains(i)) {
            u = Ee.ptNotInList(n.getCoordinates(), N.getCoordinates());
            var R = !1;
            fi.isInRing(u, N.getCoordinates()) && (R = !0), R && (h === null || g.contains(b)) && (g = (h = d).getLinearRing().getEnvelopeInternal());
          }
        }
        return h;
      } }]), s;
    }(), va = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getBounds", value: function() {
      } }]), s;
    }(), vt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [va, X];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var e = arguments[0], t = arguments[1];
        this._bounds = e, this._item = t;
      } }]), s;
    }(), ar = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "poll", value: function() {
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
        this._size = null, this._items = null, this._size = 0, this._items = new Z(), this._items.add(null);
      } }]), s;
    }(), Yc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "insert", value: function(e, t) {
      } }, { key: "remove", value: function(e, t) {
      } }, { key: "query", value: function() {
      } }]), s;
    }(), Ye = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getLevel", value: function() {
        return this._level;
      } }, { key: "size", value: function() {
        return this._childBoundables.size();
      } }, { key: "getChildBoundables", value: function() {
        return this._childBoundables;
      } }, { key: "addChildBoundable", value: function(e) {
        se.isTrue(this._bounds === null), this._childBoundables.add(e);
      } }, { key: "isEmpty", value: function() {
        return this._childBoundables.isEmpty();
      } }, { key: "getBounds", value: function() {
        return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [va, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new Z(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._level = e;
          }
        }
      } }]), s;
    }(), Zt = { reverseOrder: function() {
      return { compare: function(s, e) {
        return e.compareTo(s);
      } };
    }, min: function(s) {
      return Zt.sort(s), s.get(0);
    }, sort: function(s, e) {
      var t = s.toArray();
      e ? Dt.sort(t, e) : Dt.sort(t);
      for (var n = s.iterator(), i = 0, u = t.length; i < u; i++) n.next(), n.set(t[i]);
    }, singletonList: function(s) {
      var e = new Z();
      return e.add(s), e;
    } }, Uc = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "maxDistance", value: function(e, t, n, i, u, h, g, y) {
        var d = s.distance(e, t, u, h);
        return d = Math.max(d, s.distance(e, t, g, y)), d = Math.max(d, s.distance(n, i, u, h)), d = Math.max(d, s.distance(n, i, g, y));
      } }, { key: "distance", value: function(e, t, n, i) {
        var u = n - e, h = i - t;
        return Math.sqrt(u * u + h * h);
      } }, { key: "maximumDistance", value: function(e, t) {
        var n = Math.min(e.getMinX(), t.getMinX()), i = Math.min(e.getMinY(), t.getMinY()), u = Math.max(e.getMaxX(), t.getMaxX()), h = Math.max(e.getMaxY(), t.getMaxY());
        return s.distance(n, i, u, h);
      } }, { key: "minMaxDistance", value: function(e, t) {
        var n = e.getMinX(), i = e.getMinY(), u = e.getMaxX(), h = e.getMaxY(), g = t.getMinX(), y = t.getMinY(), d = t.getMaxX(), N = t.getMaxY(), b = s.maxDistance(n, i, n, h, g, y, g, N);
        return b = Math.min(b, s.maxDistance(n, i, n, h, g, y, d, y)), b = Math.min(b, s.maxDistance(n, i, n, h, d, N, g, N)), b = Math.min(b, s.maxDistance(n, i, n, h, d, N, d, y)), b = Math.min(b, s.maxDistance(n, i, u, i, g, y, g, N)), b = Math.min(b, s.maxDistance(n, i, u, i, g, y, d, y)), b = Math.min(b, s.maxDistance(n, i, u, i, d, N, g, N)), b = Math.min(b, s.maxDistance(n, i, u, i, d, N, d, y)), b = Math.min(b, s.maxDistance(u, h, n, h, g, y, g, N)), b = Math.min(b, s.maxDistance(u, h, n, h, g, y, d, y)), b = Math.min(b, s.maxDistance(u, h, n, h, d, N, g, N)), b = Math.min(b, s.maxDistance(u, h, n, h, d, N, d, y)), b = Math.min(b, s.maxDistance(u, h, u, i, g, y, g, N)), b = Math.min(b, s.maxDistance(u, h, u, i, g, y, d, y)), b = Math.min(b, s.maxDistance(u, h, u, i, d, N, g, N)), b = Math.min(b, s.maxDistance(u, h, u, i, d, N, d, y));
      } }]), s;
    }(), Jt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "maximumDistance", value: function() {
        return Uc.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
      } }, { key: "expandToQueue", value: function(e, t) {
        var n = s.isComposite(this._boundable1), i = s.isComposite(this._boundable2);
        if (n && i) return s.area(this._boundable1) > s.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, e, t), null) : (this.expand(this._boundable2, this._boundable1, !0, e, t), null);
        if (n) return this.expand(this._boundable1, this._boundable2, !1, e, t), null;
        if (i) return this.expand(this._boundable2, this._boundable1, !0, e, t), null;
        throw new M("neither boundable is composite");
      } }, { key: "isLeaves", value: function() {
        return !(s.isComposite(this._boundable1) || s.isComposite(this._boundable2));
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this._distance < t._distance ? -1 : this._distance > t._distance ? 1 : 0;
      } }, { key: "expand", value: function(e, t, n, i, u) {
        for (var h = e.getChildBoundables().iterator(); h.hasNext(); ) {
          var g = h.next(), y = null;
          (y = n ? new s(t, g, this._itemDistance) : new s(g, t, this._itemDistance)).getDistance() < u && i.add(y);
        }
      } }, { key: "getBoundable", value: function(e) {
        return e === 0 ? this._boundable1 : this._boundable2;
      } }, { key: "getDistance", value: function() {
        return this._distance;
      } }, { key: "distance", value: function() {
        return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
      } }, { key: "interfaces_", get: function() {
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._boundable1 = e, this._boundable2 = t, this._itemDistance = n, this._distance = this.distance();
      } }, { key: "area", value: function(e) {
        return e.getBounds().getArea();
      } }, { key: "isComposite", value: function(e) {
        return e instanceof Ye;
      } }]), s;
    }(), pa = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "visitItem", value: function(e) {
      } }]), s;
    }(), Qt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "queryInternal", value: function() {
        if (re(arguments[2], pa) && arguments[0] instanceof Object && arguments[1] instanceof Ye) for (var e = arguments[0], t = arguments[1], n = arguments[2], i = t.getChildBoundables(), u = 0; u < i.size(); u++) {
          var h = i.get(u);
          this.getIntersectsOp().intersects(h.getBounds(), e) && (h instanceof Ye ? this.queryInternal(e, h, n) : h instanceof vt ? n.visitItem(h.getItem()) : se.shouldNeverReachHere());
        }
        else if (re(arguments[2], At) && arguments[0] instanceof Object && arguments[1] instanceof Ye) for (var g = arguments[0], y = arguments[1], d = arguments[2], N = y.getChildBoundables(), b = 0; b < N.size(); b++) {
          var R = N.get(b);
          this.getIntersectsOp().intersects(R.getBounds(), g) && (R instanceof Ye ? this.queryInternal(g, R, d) : R instanceof vt ? d.add(R.getItem()) : se.shouldNeverReachHere());
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
            i instanceof Ye ? t += this.size(i) : i instanceof vt && (t += 1);
          }
          return t;
        }
      } }, { key: "removeItem", value: function(e, t) {
        for (var n = null, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
          var u = i.next();
          u instanceof vt && u.getItem() === t && (n = u);
        }
        return n !== null && (e.getChildBoundables().remove(n), !0);
      } }, { key: "itemsTree", value: function() {
        if (arguments.length === 0) {
          this.build();
          var e = this.itemsTree(this._root);
          return e === null ? new Z() : e;
        }
        if (arguments.length === 1) {
          for (var t = arguments[0], n = new Z(), i = t.getChildBoundables().iterator(); i.hasNext(); ) {
            var u = i.next();
            if (u instanceof Ye) {
              var h = this.itemsTree(u);
              h !== null && n.add(h);
            } else u instanceof vt ? n.add(u.getItem()) : se.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(e, t) {
        se.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new vt(e, t));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Z();
          return this.boundablesAtLevel(e, this._root, t), t;
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          if (se.isTrue(n > -2), i.getLevel() === n) return u.add(i), null;
          for (var h = i.getChildBoundables().iterator(); h.hasNext(); ) {
            var g = h.next();
            g instanceof Ye ? this.boundablesAtLevel(n, g, u) : (se.isTrue(g instanceof vt), n === -1 && u.add(g));
          }
          return null;
        }
      } }, { key: "query", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          this.build();
          var t = new Z();
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
          var n = arguments[0], i = arguments[1], u = arguments[2], h = this.removeItem(i, u);
          if (h) return !0;
          for (var g = null, y = i.getChildBoundables().iterator(); y.hasNext(); ) {
            var d = y.next();
            if (this.getIntersectsOp().intersects(d.getBounds(), n) && d instanceof Ye && (h = this.remove(n, d, u))) {
              g = d;
              break;
            }
          }
          return g !== null && g.getChildBoundables().isEmpty() && i.getChildBoundables().remove(g), h;
        }
      } }, { key: "createHigherLevels", value: function(e, t) {
        se.isTrue(!e.isEmpty());
        var n = this.createParentBoundables(e, t + 1);
        return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, t + 1);
      } }, { key: "depth", value: function() {
        if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
        if (arguments.length === 1) {
          for (var e = arguments[0], t = 0, n = e.getChildBoundables().iterator(); n.hasNext(); ) {
            var i = n.next();
            if (i instanceof Ye) {
              var u = this.depth(i);
              u > t && (t = u);
            }
          }
          return t + 1;
        }
      } }, { key: "createParentBoundables", value: function(e, t) {
        se.isTrue(!e.isEmpty());
        var n = new Z();
        n.add(this.createNode(t));
        var i = new Z(e);
        Zt.sort(i, this.getComparator());
        for (var u = i.iterator(); u.hasNext(); ) {
          var h = u.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(t)), this.lastNode(n).addChildBoundable(h);
        }
        return n;
      } }, { key: "isEmpty", value: function() {
        return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
      } }, { key: "interfaces_", get: function() {
        return [X];
      } }], [{ key: "constructor_", value: function() {
        if (this._root = null, this._built = !1, this._itemBoundables = new Z(), this._nodeCapacity = null, arguments.length === 0) s.constructor_.call(this, s.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var e = arguments[0];
          se.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
        }
      } }, { key: "compareDoubles", value: function(e, t) {
        return e > t ? 1 : e < t ? -1 : 0;
      } }]), s;
    }();
    Qt.IntersectsOp = function() {
    }, Qt.DEFAULT_NODE_CAPACITY = 10;
    var Xc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "distance", value: function(e, t) {
      } }]), s;
    }(), it = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, i) {
        se.isTrue(n.length > 0);
        for (var u = new Z(), h = 0; h < n.length; h++) u.addAll(this.createParentBoundablesFromVerticalSlice(n[h], i));
        return u;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.nearestNeighbourK(n, j.POSITIVE_INFINITY, i);
        }
        if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2], y = h, d = new ar();
          d.add(u);
          for (var N = new ar(); !d.isEmpty() && y >= 0; ) {
            var b = d.poll(), R = b.getDistance();
            if (R >= y) break;
            if (b.isLeaves()) if (N.size() < g) N.add(b);
            else {
              var F = N.peek();
              F.getDistance() > R && (N.poll(), N.add(b));
              var D = N.peek();
              y = D.getDistance();
            }
            else b.expandToQueue(d, y);
          }
          return t.getItems(N);
        }
      } }, { key: "createNode", value: function(n) {
        return new ma(n);
      } }, { key: "size", value: function() {
        return arguments.length === 0 ? w(v(t.prototype), "size", this).call(this) : w(v(t.prototype), "size", this).apply(this, arguments);
      } }, { key: "insert", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof pe)) return w(v(t.prototype), "insert", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        if (n.isNull()) return null;
        w(v(t.prototype), "insert", this).call(this, n, i);
      } }, { key: "getIntersectsOp", value: function() {
        return t.intersectsOp;
      } }, { key: "verticalSlices", value: function(n, i) {
        for (var u = Math.trunc(Math.ceil(n.size() / i)), h = new Array(i).fill(null), g = n.iterator(), y = 0; y < i; y++) {
          h[y] = new Z();
          for (var d = 0; g.hasNext() && d < u; ) {
            var N = g.next();
            h[y].add(N), d++;
          }
        }
        return h;
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
        if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof pe) {
          var n = arguments[0], i = arguments[1];
          return w(v(t.prototype), "remove", this).call(this, n, i);
        }
        return w(v(t.prototype), "remove", this).apply(this, arguments);
      } }, { key: "depth", value: function() {
        return arguments.length === 0 ? w(v(t.prototype), "depth", this).call(this) : w(v(t.prototype), "depth", this).apply(this, arguments);
      } }, { key: "createParentBoundables", value: function(n, i) {
        se.isTrue(!n.isEmpty());
        var u = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), h = new Z(n);
        Zt.sort(h, t.xComparator);
        var g = this.verticalSlices(h, Math.trunc(Math.ceil(Math.sqrt(u))));
        return this.createParentBoundablesFromVerticalSlices(g, i);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (re(arguments[0], Xc)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var i = new Jt(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(i);
          }
          if (arguments[0] instanceof Jt) {
            var u = arguments[0], h = j.POSITIVE_INFINITY, g = null, y = new ar();
            for (y.add(u); !y.isEmpty() && h > 0; ) {
              var d = y.poll(), N = d.getDistance();
              if (N >= h) break;
              d.isLeaves() ? (h = N, g = d) : d.expandToQueue(y, h);
            }
            return g === null ? null : [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var b = arguments[0], R = arguments[1];
            if (this.isEmpty() || b.isEmpty()) return null;
            var F = new Jt(this.getRoot(), b.getRoot(), R);
            return this.nearestNeighbour(F);
          }
          if (arguments.length === 3) {
            var D = arguments[0], V = arguments[1], H = arguments[2], K = new vt(D, V), fe = new Jt(this.getRoot(), K, H);
            return this.nearestNeighbour(fe)[0];
          }
          if (arguments.length === 4) {
            var de = arguments[0], Oe = arguments[1], Be = arguments[2], Ze = arguments[3], pt = new vt(de, Oe), qt = new Jt(this.getRoot(), pt, Be);
            return this.nearestNeighbourK(qt, Ze);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = j.POSITIVE_INFINITY, h = new ar();
          for (h.add(n); !h.isEmpty(); ) {
            var g = h.poll(), y = g.getDistance();
            if (y > i) return !1;
            if (g.maximumDistance() <= i) return !0;
            if (g.isLeaves()) {
              if ((u = y) <= i) return !0;
            } else g.expandToQueue(h, u);
          }
          return !1;
        }
        if (arguments.length === 3) {
          var d = arguments[0], N = arguments[1], b = arguments[2], R = new Jt(this.getRoot(), d.getRoot(), N);
          return this.isWithinDistance(R, b);
        }
      } }, { key: "interfaces_", get: function() {
        return [Yc, X];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Qt.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return t.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, i) {
        return (n + i) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var i = new Array(n.size()).fill(null), u = 0; !n.isEmpty(); ) {
          var h = n.poll();
          i[u] = h.getBoundable(0).getItem(), u++;
        }
        return i;
      } }, { key: "centreY", value: function(n) {
        return t.avg(n.getMinY(), n.getMaxY());
      } }]), t;
    }(Qt), ma = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeBounds", value: function() {
        for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
          var u = i.next();
          n === null ? n = new pe(u.getBounds()) : n.expandToInclude(u.getBounds());
        }
        return n;
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0];
        Ye.constructor_.call(this, n);
      } }]), t;
    }(Ye);
    it.STRtreeNode = ma, it.xComparator = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [Le];
      } }, { key: "compare", value: function(e, t) {
        return Qt.compareDoubles(it.centreX(e.getBounds()), it.centreX(t.getBounds()));
      } }]), s;
    }())(), it.yComparator = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [Le];
      } }, { key: "compare", value: function(e, t) {
        return Qt.compareDoubles(it.centreY(e.getBounds()), it.centreY(t.getBounds()));
      } }]), s;
    }())(), it.intersectsOp = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(e, t) {
        return e.intersects(t);
      } }]), s;
    }())(), it.DEFAULT_NODE_CAPACITY = 10;
    var jc = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "relativeSign", value: function(e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      } }, { key: "compare", value: function(e, t, n) {
        if (t.equals2D(n)) return 0;
        var i = s.relativeSign(t.x, n.x), u = s.relativeSign(t.y, n.y);
        switch (e) {
          case 0:
            return s.compareValue(i, u);
          case 1:
            return s.compareValue(u, i);
          case 2:
            return s.compareValue(u, -i);
          case 3:
            return s.compareValue(-i, u);
          case 4:
            return s.compareValue(-i, -u);
          case 5:
            return s.compareValue(-u, -i);
          case 6:
            return s.compareValue(-u, i);
          case 7:
            return s.compareValue(i, -u);
        }
        return se.shouldNeverReachHere("invalid octant value"), 0;
      } }, { key: "compareValue", value: function(e, t) {
        return e < 0 ? -1 : e > 0 ? 1 : t < 0 ? -1 : t > 0 ? 1 : 0;
      } }]), s;
    }(), Vc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? jc.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
      } }, { key: "isEndPoint", value: function(e) {
        return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === e;
      } }, { key: "toString", value: function() {
        return this.segmentIndex + ":" + this.coord.toString();
      } }, { key: "isInterior", value: function() {
        return this._isInterior;
      } }, { key: "interfaces_", get: function() {
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
        var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
        this._segString = e, this.coord = new O(t), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !t.equals2D(e.getCoordinate(n));
      } }]), s;
    }(), Wc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), s;
    }(), Hc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getSplitCoordinates", value: function() {
        var e = new In();
        this.addEndpoints();
        for (var t = this.iterator(), n = t.next(); t.hasNext(); ) {
          var i = t.next();
          this.addEdgeCoordinates(n, i, e), n = i;
        }
        return e.toCoordinateArray();
      } }, { key: "addCollapsedNodes", value: function() {
        var e = new Z();
        this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next().intValue();
          this.add(this._edge.getCoordinate(n), n);
        }
      } }, { key: "createSplitEdgePts", value: function(e, t) {
        var n = t.segmentIndex - e.segmentIndex + 2;
        if (n === 2) return [new O(e.coord), new O(t.coord)];
        var i = this._edge.getCoordinate(t.segmentIndex), u = t.isInterior() || !t.coord.equals2D(i);
        u || n--;
        var h = new Array(n).fill(null), g = 0;
        h[g++] = new O(e.coord);
        for (var y = e.segmentIndex + 1; y <= t.segmentIndex; y++) h[g++] = this._edge.getCoordinate(y);
        return u && (h[g] = new O(t.coord)), h;
      } }, { key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "findCollapsesFromExistingVertices", value: function(e) {
        for (var t = 0; t < this._edge.size() - 2; t++) {
          var n = this._edge.getCoordinate(t);
          this._edge.getCoordinate(t + 1);
          var i = this._edge.getCoordinate(t + 2);
          n.equals2D(i) && e.add(Zn.valueOf(t + 1));
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
          this.findCollapseIndex(i, u, t) && e.add(Zn.valueOf(t[0])), i = u;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var e = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(e), e);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = this.createSplitEdgePts(e, t);
        return new $t(n, this._edge.getData());
      } }, { key: "add", value: function(e, t) {
        var n = new Vc(this._edge, e, t, this._edge.getSegmentOctant(t)), i = this._nodeMap.get(n);
        return i !== null ? (se.isTrue(i.coord.equals2D(e), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(e) {
        var t = this._edge.getCoordinates(), n = e.get(0).getCoordinate(0);
        if (!n.equals2D(t[0])) throw new Ie("bad split edge start point at " + n);
        var i = e.get(e.size() - 1).getCoordinates(), u = i[i.length - 1];
        if (!u.equals2D(t[t.length - 1])) throw new Ie("bad split edge end point at " + u);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new bn(), this._edge = null;
        var e = arguments[0];
        this._edge = e;
      } }]), s;
    }(), Zc = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "octant", value: function() {
        if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var e = arguments[0], t = arguments[1];
          if (e === 0 && t === 0) throw new M("Cannot compute the octant for point ( " + e + ", " + t + " )");
          var n = Math.abs(e), i = Math.abs(t);
          return e >= 0 ? t >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : t >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
        }
        if (arguments[0] instanceof O && arguments[1] instanceof O) {
          var u = arguments[0], h = arguments[1], g = h.x - u.x, y = h.y - u.y;
          if (g === 0 && y === 0) throw new M("Cannot compute the octant for two identical points " + u);
          return s.octant(g, y);
        }
      } }]), s;
    }(), Jc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getCoordinates", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "getCoordinate", value: function(e) {
      } }, { key: "isClosed", value: function() {
      } }, { key: "setData", value: function(e) {
      } }, { key: "getData", value: function() {
      } }]), s;
    }(), Qc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "addIntersection", value: function(e, t) {
      } }, { key: "interfaces_", get: function() {
        return [Jc];
      } }]), s;
    }(), $t = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinates", value: function() {
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
        return e.equals2D(t) ? 0 : Zc.octant(e, t);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.addIntersectionNode(e, t);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1], u = arguments[3], h = new O(n.getIntersection(u));
          this.addIntersection(h, i);
        }
      } }, { key: "toString", value: function() {
        return hi.toLineString(new wn(this._pts));
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
        return [Qc];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new Hc(this), this._pts = null, this._data = null;
        var e = arguments[0], t = arguments[1];
        this._pts = e, this._data = t;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Z();
          return s.getNodedSubstrings(e, t), t;
        }
        if (arguments.length === 2) for (var n = arguments[0], i = arguments[1], u = n.iterator(); u.hasNext(); ) {
          var h = u.next();
          h.getNodeList().addSplitEdges(i);
        }
      } }]), s;
    }(), Fe = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "minX", value: function() {
        return Math.min(this.p0.x, this.p1.x);
      } }, { key: "orientationIndex", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0], t = Q.index(this.p0, this.p1, e.p0), n = Q.index(this.p0, this.p1, e.p1);
          return t >= 0 && n >= 0 || t <= 0 && n <= 0 ? Math.max(t, n) : 0;
        }
        if (arguments[0] instanceof O) {
          var i = arguments[0];
          return Q.index(this.p0, this.p1, i);
        }
      } }, { key: "toGeometry", value: function(e) {
        return e.createLineString([this.p0, this.p1]);
      } }, { key: "isVertical", value: function() {
        return this.p0.x === this.p1.x;
      } }, { key: "equals", value: function(e) {
        if (!(e instanceof s)) return !1;
        var t = e;
        return this.p0.equals(t.p0) && this.p1.equals(t.p1);
      } }, { key: "intersection", value: function(e) {
        var t = new Bt();
        return t.computeIntersection(this.p0, this.p1, e.p0, e.p1), t.hasIntersection() ? t.getIntersection(0) : null;
      } }, { key: "project", value: function() {
        if (arguments[0] instanceof O) {
          var e = arguments[0];
          if (e.equals(this.p0) || e.equals(this.p1)) return new O(e);
          var t = this.projectionFactor(e), n = new O();
          return n.x = this.p0.x + t * (this.p1.x - this.p0.x), n.y = this.p0.y + t * (this.p1.y - this.p0.y), n;
        }
        if (arguments[0] instanceof s) {
          var i = arguments[0], u = this.projectionFactor(i.p0), h = this.projectionFactor(i.p1);
          if (u >= 1 && h >= 1 || u <= 0 && h <= 0) return null;
          var g = this.project(i.p0);
          u < 0 && (g = this.p0), u > 1 && (g = this.p1);
          var y = this.project(i.p1);
          return h < 0 && (y = this.p0), h > 1 && (y = this.p1), new s(g, y);
        }
      } }, { key: "normalize", value: function() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      } }, { key: "angle", value: function() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      } }, { key: "getCoordinate", value: function(e) {
        return e === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(e) {
        return nt.pointToLinePerpendicular(e, this.p0, this.p1);
      } }, { key: "minY", value: function() {
        return Math.min(this.p0.y, this.p1.y);
      } }, { key: "midPoint", value: function() {
        return s.midPoint(this.p0, this.p1);
      } }, { key: "projectionFactor", value: function(e) {
        if (e.equals(this.p0)) return 0;
        if (e.equals(this.p1)) return 1;
        var t = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = t * t + n * n;
        return i <= 0 ? j.NaN : ((e.x - this.p0.x) * t + (e.y - this.p0.y) * n) / i;
      } }, { key: "closestPoints", value: function(e) {
        var t = this.intersection(e);
        if (t !== null) return [t, t];
        var n = new Array(2).fill(null), i = j.MAX_VALUE, u = null, h = this.closestPoint(e.p0);
        i = h.distance(e.p0), n[0] = h, n[1] = e.p0;
        var g = this.closestPoint(e.p1);
        (u = g.distance(e.p1)) < i && (i = u, n[0] = g, n[1] = e.p1);
        var y = e.closestPoint(this.p0);
        (u = y.distance(this.p0)) < i && (i = u, n[0] = this.p0, n[1] = y);
        var d = e.closestPoint(this.p1);
        return (u = d.distance(this.p1)) < i && (i = u, n[0] = this.p1, n[1] = d), n;
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
        return ri.intersection(this.p0, this.p1, e.p0, e.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(e, t) {
        var n = this.p0.x + e * (this.p1.x - this.p0.x), i = this.p0.y + e * (this.p1.y - this.p0.y), u = this.p1.x - this.p0.x, h = this.p1.y - this.p0.y, g = Math.sqrt(u * u + h * h), y = 0, d = 0;
        if (t !== 0) {
          if (g <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          y = t * u / g, d = t * h / g;
        }
        return new O(n - d, i + y);
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
        return t < 0 ? t = 0 : (t > 1 || j.isNaN(t)) && (t = 1), t;
      } }, { key: "toString", value: function() {
        return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
      } }, { key: "isHorizontal", value: function() {
        return this.p0.y === this.p1.y;
      } }, { key: "reflect", value: function(e) {
        var t = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), u = t * t + n * n, h = t * t - n * n, g = e.getX(), y = e.getY();
        return new O((-h * g - 2 * t * n * y - 2 * t * i) / u, (h * y - 2 * t * n * g - 2 * n * i) / u);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0];
          return nt.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
        }
        if (arguments[0] instanceof O) {
          var t = arguments[0];
          return nt.pointToSegment(t, this.p0, this.p1);
        }
      } }, { key: "pointAlong", value: function(e) {
        var t = new O();
        return t.x = this.p0.x + e * (this.p1.x - this.p0.x), t.y = this.p0.y + e * (this.p1.y - this.p0.y), t;
      } }, { key: "hashCode", value: function() {
        var e = j.doubleToLongBits(this.p0.x);
        e ^= 31 * j.doubleToLongBits(this.p0.y);
        var t = Math.trunc(e) ^ Math.trunc(e >> 32), n = j.doubleToLongBits(this.p1.x);
        return n ^= 31 * j.doubleToLongBits(this.p1.y), t ^ (Math.trunc(n) ^ Math.trunc(n >> 32));
      } }, { key: "interfaces_", get: function() {
        return [Y, X];
      } }], [{ key: "constructor_", value: function() {
        if (this.p0 = null, this.p1 = null, arguments.length === 0) s.constructor_.call(this, new O(), new O());
        else if (arguments.length === 1) {
          var e = arguments[0];
          s.constructor_.call(this, e.p0, e.p1);
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this.p0 = t, this.p1 = n;
        } else if (arguments.length === 4) {
          var i = arguments[0], u = arguments[1], h = arguments[2], g = arguments[3];
          s.constructor_.call(this, new O(i, u), new O(h, g));
        }
      } }, { key: "midPoint", value: function(e, t) {
        return new O((e.x + t.x) / 2, (e.y + t.y) / 2);
      } }]), s;
    }(), Kc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "overlap", value: function() {
        if (arguments.length !== 2) {
          if (arguments.length === 4) {
            var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3];
            e.getLineSegment(t, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this._overlapSeg1 = new Fe(), this._overlapSeg2 = new Fe();
      } }]), s;
    }(), da = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getLineSegment", value: function(e, t) {
        t.p0 = this._pts[e], t.p1 = this._pts[e + 1];
      } }, { key: "computeSelect", value: function(e, t, n, i) {
        var u = this._pts[t], h = this._pts[n];
        if (n - t == 1) return i.select(this, t), null;
        if (!e.intersects(u, h)) return null;
        var g = Math.trunc((t + n) / 2);
        t < g && this.computeSelect(e, t, g, i), g < n && this.computeSelect(e, g, n, i);
      } }, { key: "getCoordinates", value: function() {
        for (var e = new Array(this._end - this._start + 1).fill(null), t = 0, n = this._start; n <= this._end; n++) e[t++] = this._pts[n];
        return e;
      } }, { key: "computeOverlaps", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.computeOverlaps(this._start, this._end, e, e._start, e._end, t);
        } else if (arguments.length === 6) {
          var n = arguments[0], i = arguments[1], u = arguments[2], h = arguments[3], g = arguments[4], y = arguments[5];
          if (i - n == 1 && g - h == 1) return y.overlap(this, n, u, h), null;
          if (!this.overlaps(n, i, u, h, g)) return null;
          var d = Math.trunc((n + i) / 2), N = Math.trunc((h + g) / 2);
          n < d && (h < N && this.computeOverlaps(n, d, u, h, N, y), N < g && this.computeOverlaps(n, d, u, N, g, y)), d < i && (h < N && this.computeOverlaps(d, i, u, h, N, y), N < g && this.computeOverlaps(d, i, u, N, g, y));
        }
      } }, { key: "setId", value: function(e) {
        this._id = e;
      } }, { key: "select", value: function(e, t) {
        this.computeSelect(e, this._start, this._end, t);
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          var e = this._pts[this._start], t = this._pts[this._end];
          this._env = new pe(e, t);
        }
        return this._env;
      } }, { key: "overlaps", value: function(e, t, n, i, u) {
        return pe.intersects(this._pts[e], this._pts[t], n._pts[i], n._pts[u]);
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
      } }]), s;
    }(), eh = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "findChainEnd", value: function(e, t) {
        for (var n = t; n < e.length - 1 && e[n].equals2D(e[n + 1]); ) n++;
        if (n >= e.length - 1) return e.length - 1;
        for (var i = Ce.quadrant(e[n], e[n + 1]), u = t + 1; u < e.length && !(!e[u - 1].equals2D(e[u]) && Ce.quadrant(e[u - 1], e[u]) !== i); )
          u++;
        return u - 1;
      } }, { key: "getChains", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return s.getChains(e, null);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1], i = new Z(), u = 0;
          do {
            var h = s.findChainEnd(t, u), g = new da(t, u, h, n);
            i.add(g), u = h;
          } while (u < t.length - 1);
          return i;
        }
      } }]), s;
    }(), vi = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "computeNodes", value: function(e) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), s;
    }(), _a = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setSegmentIntersector", value: function(e) {
        this._segInt = e;
      } }, { key: "interfaces_", get: function() {
        return [vi];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setSegmentIntersector(e);
          }
        }
      } }]), s;
    }(), pi = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return $t.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var i = eh.getChains(n.getCoordinates(), n).iterator(); i.hasNext(); ) {
          var u = i.next();
          u.setId(this._idCounter++), this._index.insert(u.getEnvelope(), u), this._monoChains.add(u);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var i = n.iterator(); i.hasNext(); ) this.add(i.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new xa(this._segInt), i = this._monoChains.iterator(); i.hasNext(); ) for (var u = i.next(), h = this._index.query(u.getEnvelope()).iterator(); h.hasNext(); ) {
          var g = h.next();
          if (g.getId() > u.getId() && (u.computeOverlaps(g, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new Z(), this._index = new it(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            _a.constructor_.call(this, n);
          }
        }
      } }]), t;
    }(_a), xa = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return w(v(t.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = arguments[2], h = arguments[3], g = n.getContext(), y = u.getContext();
        this._si.processIntersections(g, i, y, h);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), t;
    }(Kc);
    pi.SegmentOverlapAction = xa;
    var He = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isDeletable", value: function(e, t, n, i) {
        var u = this._inputLine[e], h = this._inputLine[t], g = this._inputLine[n];
        return !!this.isConcave(u, h, g) && !!this.isShallow(u, h, g, i) && this.isShallowSampled(u, h, e, n, i);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var e = 1, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t), i = !1; n < this._inputLine.length; ) {
          var u = !1;
          this.isDeletable(e, t, n, this._distanceTol) && (this._isDeleted[t] = s.DELETE, u = !0, i = !0), e = u ? n : t, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t);
        }
        return i;
      } }, { key: "isShallowConcavity", value: function(e, t, n, i) {
        return Q.index(e, t, n) === this._angleOrientation && nt.pointToSegment(t, e, n) < i;
      } }, { key: "isShallowSampled", value: function(e, t, n, i, u) {
        var h = Math.trunc((i - n) / s.NUM_PTS_TO_CHECK);
        h <= 0 && (h = 1);
        for (var g = n; g < i; g += h) if (!this.isShallow(e, t, this._inputLine[g], u)) return !1;
        return !0;
      } }, { key: "isConcave", value: function(e, t, n) {
        var i = Q.index(e, t, n) === this._angleOrientation;
        return i;
      } }, { key: "simplify", value: function(e) {
        this._distanceTol = Math.abs(e), e < 0 && (this._angleOrientation = Q.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
        var t = !1;
        do
          t = this.deleteShallowConcavities();
        while (t);
        return this.collapseLine();
      } }, { key: "findNextNonDeletedIndex", value: function(e) {
        for (var t = e + 1; t < this._inputLine.length && this._isDeleted[t] === s.DELETE; ) t++;
        return t;
      } }, { key: "isShallow", value: function(e, t, n, i) {
        return nt.pointToSegment(t, e, n) < i;
      } }, { key: "collapseLine", value: function() {
        for (var e = new In(), t = 0; t < this._inputLine.length; t++) this._isDeleted[t] !== s.DELETE && e.add(this._inputLine[t]);
        return e.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = Q.COUNTERCLOCKWISE;
        var e = arguments[0];
        this._inputLine = e;
      } }, { key: "simplify", value: function(e, t) {
        return new s(e).simplify(t);
      } }]), s;
    }();
    He.INIT = 0, He.DELETE = 1, He.KEEP = 1, He.NUM_PTS_TO_CHECK = 10;
    var Ea = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinates", value: function() {
        return this._ptList.toArray(s.COORDINATE_ARRAY_TYPE);
      } }, { key: "setPrecisionModel", value: function(e) {
        this._precisionModel = e;
      } }, { key: "addPt", value: function(e) {
        var t = new O(e);
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
        return new Wt().createLineString(this.getCoordinates()).toString();
      } }, { key: "closeRing", value: function() {
        if (this._ptList.size() < 1) return null;
        var e = new O(this._ptList.get(0)), t = this._ptList.get(this._ptList.size() - 1);
        if (e.equals(t)) return null;
        this._ptList.add(e);
      } }, { key: "setMinimumVertexDistance", value: function(e) {
        this._minimimVertexDistance = e;
      } }], [{ key: "constructor_", value: function() {
        this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new Z();
      } }]), s;
    }();
    Ea.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var Ge = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "toDegrees", value: function(e) {
        return 180 * e / Math.PI;
      } }, { key: "normalize", value: function(e) {
        for (; e > Math.PI; ) e -= s.PI_TIMES_2;
        for (; e <= -Math.PI; ) e += s.PI_TIMES_2;
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
        var i = s.angle(t, e), u = s.angle(t, n);
        return Math.abs(u - i);
      } }, { key: "normalizePositive", value: function(e) {
        if (e < 0) {
          for (; e < 0; ) e += s.PI_TIMES_2;
          e >= s.PI_TIMES_2 && (e = 0);
        } else {
          for (; e >= s.PI_TIMES_2; ) e -= s.PI_TIMES_2;
          e < 0 && (e = 0);
        }
        return e;
      } }, { key: "angleBetween", value: function(e, t, n) {
        var i = s.angle(t, e), u = s.angle(t, n);
        return s.diff(i, u);
      } }, { key: "diff", value: function(e, t) {
        var n = null;
        return (n = e < t ? t - e : e - t) > Math.PI && (n = 2 * Math.PI - n), n;
      } }, { key: "toRadians", value: function(e) {
        return e * Math.PI / 180;
      } }, { key: "getTurn", value: function(e, t) {
        var n = Math.sin(t - e);
        return n > 0 ? s.COUNTERCLOCKWISE : n < 0 ? s.CLOCKWISE : s.NONE;
      } }, { key: "angleBetweenOriented", value: function(e, t, n) {
        var i = s.angle(t, e), u = s.angle(t, n) - i;
        return u <= -Math.PI ? u + s.PI_TIMES_2 : u > Math.PI ? u - s.PI_TIMES_2 : u;
      } }]), s;
    }();
    Ge.PI_TIMES_2 = 2 * Math.PI, Ge.PI_OVER_2 = Math.PI / 2, Ge.PI_OVER_4 = Math.PI / 4, Ge.COUNTERCLOCKWISE = Q.COUNTERCLOCKWISE, Ge.CLOCKWISE = Q.CLOCKWISE, Ge.NONE = Q.COLLINEAR;
    var On = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "addNextSegment", value: function(e, t) {
        if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = e, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
        var n = Q.index(this._s0, this._s1, this._s2), i = n === Q.CLOCKWISE && this._side === B.LEFT || n === Q.COUNTERCLOCKWISE && this._side === B.RIGHT;
        n === 0 ? this.addCollinear(t) : i ? this.addOutsideTurn(n, t) : this.addInsideTurn(n, t);
      } }, { key: "addLineEndCap", value: function(e, t) {
        var n = new Fe(e, t), i = new Fe();
        this.computeOffsetSegment(n, B.LEFT, this._distance, i);
        var u = new Fe();
        this.computeOffsetSegment(n, B.RIGHT, this._distance, u);
        var h = t.x - e.x, g = t.y - e.y, y = Math.atan2(g, h);
        switch (this._bufParams.getEndCapStyle()) {
          case L.CAP_ROUND:
            this._segList.addPt(i.p1), this.addDirectedFillet(t, y + Math.PI / 2, y - Math.PI / 2, Q.CLOCKWISE, this._distance), this._segList.addPt(u.p1);
            break;
          case L.CAP_FLAT:
            this._segList.addPt(i.p1), this._segList.addPt(u.p1);
            break;
          case L.CAP_SQUARE:
            var d = new O();
            d.x = Math.abs(this._distance) * Math.cos(y), d.y = Math.abs(this._distance) * Math.sin(y);
            var N = new O(i.p1.x + d.x, i.p1.y + d.y), b = new O(u.p1.x + d.x, u.p1.y + d.y);
            this._segList.addPt(N), this._segList.addPt(b);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(e, t, n, i) {
        var u = ri.intersection(t.p0, t.p1, n.p0, n.p1);
        if (u !== null && (i <= 0 ? 1 : u.distance(e) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(u), null;
        this.addLimitedMitreJoin(t, n, i, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(e, t) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * s.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === L.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === L.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (t && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(e) {
        this._segList.addPt(new O(e.x + this._distance, e.y + this._distance)), this._segList.addPt(new O(e.x + this._distance, e.y - this._distance)), this._segList.addPt(new O(e.x - this._distance, e.y - this._distance)), this._segList.addPt(new O(e.x - this._distance, e.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(e, t) {
        this._segList.addPts(e, t);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(e, t, n, i, u) {
        var h = t.x - e.x, g = t.y - e.y, y = Math.atan2(g, h), d = n.x - e.x, N = n.y - e.y, b = Math.atan2(N, d);
        i === Q.CLOCKWISE ? y <= b && (y += 2 * Math.PI) : y >= b && (y -= 2 * Math.PI), this._segList.addPt(t), this.addDirectedFillet(e, y, b, i, u), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(e, t, n) {
        this._s1 = e, this._s2 = t, this._side = n, this._seg1.setCoordinates(e, t), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(e, t, n, i) {
        var u = this._seg0.p1, h = Ge.angle(u, this._seg0.p0), g = Ge.angleBetweenOriented(this._seg0.p0, u, this._seg1.p1) / 2, y = Ge.normalize(h + g), d = Ge.normalize(y + Math.PI), N = i * n, b = n - N * Math.abs(Math.sin(g)), R = u.x + N * Math.cos(d), F = u.y + N * Math.sin(d), D = new O(R, F), V = new Fe(u, D), H = V.pointAlongOffset(1, b), K = V.pointAlongOffset(1, -b);
        this._side === B.LEFT ? (this._segList.addPt(H), this._segList.addPt(K)) : (this._segList.addPt(K), this._segList.addPt(H));
      } }, { key: "addDirectedFillet", value: function(e, t, n, i, u) {
        var h = i === Q.CLOCKWISE ? -1 : 1, g = Math.abs(t - n), y = Math.trunc(g / this._filletAngleQuantum + 0.5);
        if (y < 1) return null;
        for (var d = g / y, N = new O(), b = 0; b < y; b++) {
          var R = t + h * b * d;
          N.x = e.x + u * Math.cos(R), N.y = e.y + u * Math.sin(R), this._segList.addPt(N);
        }
      } }, { key: "computeOffsetSegment", value: function(e, t, n, i) {
        var u = t === B.LEFT ? 1 : -1, h = e.p1.x - e.p0.x, g = e.p1.y - e.p0.y, y = Math.sqrt(h * h + g * g), d = u * n * h / y, N = u * n * g / y;
        i.p0.x = e.p0.x - N, i.p0.y = e.p0.y + d, i.p1.x = e.p1.x - N, i.p1.y = e.p1.y + d;
      } }, { key: "addInsideTurn", value: function(e, t) {
        if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
        else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * s.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
        else {
          if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
            var n = new O((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(n);
            var i = new O((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
            this._segList.addPt(i);
          } else this._segList.addPt(this._s1);
          this._segList.addPt(this._offset1.p0);
        }
      } }, { key: "createCircle", value: function(e) {
        var t = new O(e.x + this._distance, e.y);
        this._segList.addPt(t), this.addDirectedFillet(e, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
      } }, { key: "addBevelJoin", value: function(e, t) {
        this._segList.addPt(e.p1), this._segList.addPt(t.p0);
      } }, { key: "init", value: function(e) {
        this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ea(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * s.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(e) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === L.JOIN_BEVEL || this._bufParams.getJoinStyle() === L.JOIN_MITRE ? (e && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, Q.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Fe(), this._seg1 = new Fe(), this._offset0 = new Fe(), this._offset1 = new Fe(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._precisionModel = e, this._bufParams = t, this._li = new Bt(), this._filletAngleQuantum = Math.PI / 2 / t.getQuadrantSegments(), t.getQuadrantSegments() >= 8 && t.getJoinStyle() === L.JOIN_ROUND && (this._closingSegLengthFactor = s.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), s;
    }();
    On.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, On.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, On.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, On.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var th = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getOffsetCurve", value: function(e, t) {
        if (this._distance = t, t === 0) return null;
        var n = t < 0, i = Math.abs(t), u = this.getSegGen(i);
        e.length <= 1 ? this.computePointCurve(e[0], u) : this.computeOffsetCurve(e, n, u);
        var h = u.getCoordinates();
        return n && Ee.reverse(h), h;
      } }, { key: "computeSingleSidedBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          n.addSegments(e, !0);
          var u = He.simplify(e, -i), h = u.length - 1;
          n.initSideSegments(u[h], u[h - 1], B.LEFT), n.addFirstSegment();
          for (var g = h - 2; g >= 0; g--) n.addNextSegment(u[g], !0);
        } else {
          n.addSegments(e, !1);
          var y = He.simplify(e, i), d = y.length - 1;
          n.initSideSegments(y[0], y[1], B.LEFT), n.addFirstSegment();
          for (var N = 2; N <= d; N++) n.addNextSegment(y[N], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        t === B.RIGHT && (i = -i);
        var u = He.simplify(e, i), h = u.length - 1;
        n.initSideSegments(u[h - 1], u[0], t);
        for (var g = 1; g <= h; g++) {
          var y = g !== 1;
          n.addNextSegment(u[g], y);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(e, t) {
        var n = this.simplifyTolerance(this._distance), i = He.simplify(e, n), u = i.length - 1;
        t.initSideSegments(i[0], i[1], B.LEFT);
        for (var h = 2; h <= u; h++) t.addNextSegment(i[h], !0);
        t.addLastSegment(), t.addLineEndCap(i[u - 1], i[u]);
        var g = He.simplify(e, -n), y = g.length - 1;
        t.initSideSegments(g[y], g[y - 1], B.LEFT);
        for (var d = y - 2; d >= 0; d--) t.addNextSegment(g[d], !0);
        t.addLastSegment(), t.addLineEndCap(g[1], g[0]), t.closeRing();
      } }, { key: "computePointCurve", value: function(e, t) {
        switch (this._bufParams.getEndCapStyle()) {
          case L.CAP_ROUND:
            t.createCircle(e);
            break;
          case L.CAP_SQUARE:
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
        if (n === 0) return s.copyCoordinates(e);
        var i = this.getSegGen(n);
        return this.computeRingBufferCurve(e, t, i), i.getCoordinates();
      } }, { key: "computeOffsetCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          var u = He.simplify(e, -i), h = u.length - 1;
          n.initSideSegments(u[h], u[h - 1], B.LEFT), n.addFirstSegment();
          for (var g = h - 2; g >= 0; g--) n.addNextSegment(u[g], !0);
        } else {
          var y = He.simplify(e, i), d = y.length - 1;
          n.initSideSegments(y[0], y[1], B.LEFT), n.addFirstSegment();
          for (var N = 2; N <= d; N++) n.addNextSegment(y[N], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(e) {
        return e === 0 || e < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(e) {
        return new On(this._precisionModel, this._bufParams, e);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var e = arguments[0], t = arguments[1];
        this._precisionModel = e, this._bufParams = t;
      } }, { key: "copyCoordinates", value: function(e) {
        for (var t = new Array(e.length).fill(null), n = 0; n < t.length; n++) t[n] = new O(e[n]);
        return t;
      } }]), s;
    }(), ka = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "findStabbedSegments", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Z(), n = this._subgraphs.iterator(); n.hasNext(); ) {
            var i = n.next(), u = i.getEnvelope();
            e.y < u.getMinY() || e.y > u.getMaxY() || this.findStabbedSegments(e, i.getDirectedEdges(), t);
          }
          return t;
        }
        if (arguments.length === 3) {
          if (re(arguments[2], At) && arguments[0] instanceof O && arguments[1] instanceof yi) for (var h = arguments[0], g = arguments[1], y = arguments[2], d = g.getEdge().getCoordinates(), N = 0; N < d.length - 1; N++) {
            this._seg.p0 = d[N], this._seg.p1 = d[N + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var b = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(b < h.x) && !(this._seg.isHorizontal() || h.y < this._seg.p0.y || h.y > this._seg.p1.y || Q.index(this._seg.p0, this._seg.p1, h) === Q.RIGHT)) {
              var R = g.getDepth(B.LEFT);
              this._seg.p0.equals(d[N]) || (R = g.getDepth(B.RIGHT));
              var F = new Sa(this._seg, R);
              y.add(F);
            }
          }
          else if (re(arguments[2], At) && arguments[0] instanceof O && re(arguments[1], At)) for (var D = arguments[0], V = arguments[1], H = arguments[2], K = V.iterator(); K.hasNext(); ) {
            var fe = K.next();
            fe.isForward() && this.findStabbedSegments(D, fe, H);
          }
        }
      } }, { key: "getDepth", value: function(e) {
        var t = this.findStabbedSegments(e);
        return t.size() === 0 ? 0 : Zt.min(t)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new Fe();
        var e = arguments[0];
        this._subgraphs = e;
      } }]), s;
    }(), Sa = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "compareTo", value: function(e) {
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
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this._upwardSeg = null, this._leftDepth = null;
        var e = arguments[0], t = arguments[1];
        this._upwardSeg = new Fe(e), this._leftDepth = t;
      } }]), s;
    }();
    ka.DepthSegment = Sa;
    var Ia = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, null, [{ key: "constructor_", value: function() {
        G.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), t;
    }(G), mi = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getY", value: function() {
        var e = this.y / this.w;
        if (j.isNaN(e) || j.isInfinite(e)) throw new Ia();
        return e;
      } }, { key: "getX", value: function() {
        var e = this.x / this.w;
        if (j.isNaN(e) || j.isInfinite(e)) throw new Ia();
        return e;
      } }, { key: "getCoordinate", value: function() {
        var e = new O();
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
          } else if (arguments[0] instanceof s && arguments[1] instanceof s) {
            var i = arguments[0], u = arguments[1];
            this.x = i.y * u.w - u.y * i.w, this.y = u.x * i.w - i.x * u.w, this.w = i.x * u.y - u.x * i.y;
          } else if (arguments[0] instanceof O && arguments[1] instanceof O) {
            var h = arguments[0], g = arguments[1];
            this.x = h.y - g.y, this.y = g.x - h.x, this.w = h.x * g.y - g.x * h.y;
          }
        } else if (arguments.length === 3) {
          var y = arguments[0], d = arguments[1], N = arguments[2];
          this.x = y, this.y = d, this.w = N;
        } else if (arguments.length === 4) {
          var b = arguments[0], R = arguments[1], F = arguments[2], D = arguments[3], V = b.y - R.y, H = R.x - b.x, K = b.x * R.y - R.x * b.y, fe = F.y - D.y, de = D.x - F.x, Oe = F.x * D.y - D.x * F.y;
          this.x = H * Oe - de * K, this.y = fe * K - V * Oe, this.w = V * de - fe * H;
        }
      } }]), s;
    }(), nh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "area", value: function() {
        return s.area(this.p0, this.p1, this.p2);
      } }, { key: "signedArea", value: function() {
        return s.signedArea(this.p0, this.p1, this.p2);
      } }, { key: "interpolateZ", value: function(e) {
        if (e === null) throw new M("Supplied point is null.");
        return s.interpolateZ(e, this.p0, this.p1, this.p2);
      } }, { key: "longestSideLength", value: function() {
        return s.longestSideLength(this.p0, this.p1, this.p2);
      } }, { key: "isAcute", value: function() {
        return s.isAcute(this.p0, this.p1, this.p2);
      } }, { key: "circumcentre", value: function() {
        return s.circumcentre(this.p0, this.p1, this.p2);
      } }, { key: "area3D", value: function() {
        return s.area3D(this.p0, this.p1, this.p2);
      } }, { key: "centroid", value: function() {
        return s.centroid(this.p0, this.p1, this.p2);
      } }, { key: "inCentre", value: function() {
        return s.inCentre(this.p0, this.p1, this.p2);
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
        var u = t.x, h = t.y, g = n.x - u, y = i.x - u, d = n.y - h, N = i.y - h, b = g * N - y * d, R = e.x - u, F = e.y - h, D = (N * R - y * F) / b, V = (-d * R + g * F) / b;
        return t.getZ() + D * (n.getZ() - t.getZ()) + V * (i.getZ() - t.getZ());
      } }, { key: "longestSideLength", value: function(e, t, n) {
        var i = e.distance(t), u = t.distance(n), h = n.distance(e), g = i;
        return u > g && (g = u), h > g && (g = h), g;
      } }, { key: "circumcentreDD", value: function(e, t, n) {
        var i = J.valueOf(e.x).subtract(n.x), u = J.valueOf(e.y).subtract(n.y), h = J.valueOf(t.x).subtract(n.x), g = J.valueOf(t.y).subtract(n.y), y = J.determinant(i, u, h, g).multiply(2), d = i.sqr().add(u.sqr()), N = h.sqr().add(g.sqr()), b = J.determinant(u, d, g, N), R = J.determinant(i, d, h, N), F = J.valueOf(n.x).subtract(b.divide(y)).doubleValue(), D = J.valueOf(n.y).add(R.divide(y)).doubleValue();
        return new O(F, D);
      } }, { key: "isAcute", value: function(e, t, n) {
        return !!Ge.isAcute(e, t, n) && !!Ge.isAcute(t, n, e) && !!Ge.isAcute(n, e, t);
      } }, { key: "circumcentre", value: function(e, t, n) {
        var i = n.x, u = n.y, h = e.x - i, g = e.y - u, y = t.x - i, d = t.y - u, N = 2 * s.det(h, g, y, d), b = s.det(g, h * h + g * g, d, y * y + d * d), R = s.det(h, h * h + g * g, y, y * y + d * d);
        return new O(i - b / N, u + R / N);
      } }, { key: "perpendicularBisector", value: function(e, t) {
        var n = t.x - e.x, i = t.y - e.y, u = new mi(e.x + n / 2, e.y + i / 2, 1), h = new mi(e.x - i + n / 2, e.y + n + i / 2, 1);
        return new mi(u, h);
      } }, { key: "angleBisector", value: function(e, t, n) {
        var i = t.distance(e), u = i / (i + t.distance(n)), h = n.x - e.x, g = n.y - e.y;
        return new O(e.x + u * h, e.y + u * g);
      } }, { key: "area3D", value: function(e, t, n) {
        var i = t.x - e.x, u = t.y - e.y, h = t.getZ() - e.getZ(), g = n.x - e.x, y = n.y - e.y, d = n.getZ() - e.getZ(), N = u * d - h * y, b = h * g - i * d, R = i * y - u * g, F = N * N + b * b + R * R, D = Math.sqrt(F) / 2;
        return D;
      } }, { key: "centroid", value: function(e, t, n) {
        var i = (e.x + t.x + n.x) / 3, u = (e.y + t.y + n.y) / 3;
        return new O(i, u);
      } }, { key: "inCentre", value: function(e, t, n) {
        var i = t.distance(n), u = e.distance(n), h = e.distance(t), g = i + u + h, y = (i * e.x + u * t.x + h * n.x) / g, d = (i * e.y + u * t.y + h * n.y) / g;
        return new O(y, d);
      } }]), s;
    }(), rh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "addRingSide", value: function(e, t, n, i, u) {
        if (t === 0 && e.length < Sn.MINIMUM_VALID_SIZE) return null;
        var h = i, g = u;
        e.length >= Sn.MINIMUM_VALID_SIZE && Q.isCCW(e) && (h = u, g = i, n = B.opposite(n));
        var y = this._curveBuilder.getRingCurve(e, n, t);
        this.addCurve(y, h, g);
      } }, { key: "addRingBothSides", value: function(e, t) {
        this.addRingSide(e, t, B.LEFT, I.EXTERIOR, I.INTERIOR), this.addRingSide(e, t, B.RIGHT, I.INTERIOR, I.EXTERIOR);
      } }, { key: "addPoint", value: function(e) {
        if (this._distance <= 0) return null;
        var t = e.getCoordinates(), n = this._curveBuilder.getLineCurve(t, this._distance);
        this.addCurve(n, I.EXTERIOR, I.INTERIOR);
      } }, { key: "addPolygon", value: function(e) {
        var t = this._distance, n = B.LEFT;
        this._distance < 0 && (t = -this._distance, n = B.RIGHT);
        var i = e.getExteriorRing(), u = Ee.removeRepeatedPoints(i.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(i, this._distance) || this._distance <= 0 && u.length < 3) return null;
        this.addRingSide(u, t, n, I.EXTERIOR, I.INTERIOR);
        for (var h = 0; h < e.getNumInteriorRing(); h++) {
          var g = e.getInteriorRingN(h), y = Ee.removeRepeatedPoints(g.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(g, -this._distance) || this.addRingSide(y, t, B.opposite(n), I.INTERIOR, I.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(e, t) {
        var n = new nh(e[0], e[1], e[2]), i = n.inCentre();
        return nt.pointToSegment(i, n.p0, n.p1) < Math.abs(t);
      } }, { key: "addLineString", value: function(e) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var t = Ee.removeRepeatedPoints(e.getCoordinates());
        if (Ee.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(n, I.EXTERIOR, I.INTERIOR);
        }
      } }, { key: "addCurve", value: function(e, t, n) {
        if (e === null || e.length < 2) return null;
        var i = new $t(e, new ze(0, I.BOUNDARY, t, n));
        this._curveList.add(i);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(e) {
        if (e.isEmpty()) return null;
        if (e instanceof er) this.addPolygon(e);
        else if (e instanceof kn) this.addLineString(e);
        else if (e instanceof ii) this.addPoint(e);
        else if (e instanceof si) this.addCollection(e);
        else if (e instanceof li) this.addCollection(e);
        else if (e instanceof ui) this.addCollection(e);
        else {
          if (!(e instanceof De)) throw new kt(e.getGeometryType());
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
        this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new Z();
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._inputGeom = e, this._distance = t, this._curveBuilder = n;
      } }]), s;
    }(), ih = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "locate", value: function(e) {
      } }]), s;
    }(), sh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, s.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new Hn();
        var e = this._parent.getGeometryN(this._index++);
        return e instanceof De ? (this._subcollectionIterator = new s(e), this._subcollectionIterator.next()) : e;
      } }, { key: "remove", value: function() {
        throw new kt(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [Wc];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var e = arguments[0];
        this._parent = e, this._atStart = !0, this._index = 0, this._max = e.getNumGeometries();
      } }, { key: "isAtomic", value: function(e) {
        return !(e instanceof De);
      } }]), s;
    }(), ah = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "locate", value: function(e) {
        return s.locate(e, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [ih];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var e = arguments[0];
        this._geom = e;
      } }, { key: "locatePointInPolygon", value: function(e, t) {
        if (t.isEmpty()) return I.EXTERIOR;
        var n = t.getExteriorRing(), i = s.locatePointInRing(e, n);
        if (i !== I.INTERIOR) return i;
        for (var u = 0; u < t.getNumInteriorRing(); u++) {
          var h = t.getInteriorRingN(u), g = s.locatePointInRing(e, h);
          if (g === I.BOUNDARY) return I.BOUNDARY;
          if (g === I.INTERIOR) return I.EXTERIOR;
        }
        return I.INTERIOR;
      } }, { key: "locatePointInRing", value: function(e, t) {
        return t.getEnvelopeInternal().intersects(e) ? fi.locateInRing(e, t.getCoordinates()) : I.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(e, t) {
        return I.EXTERIOR !== s.locatePointInPolygon(e, t);
      } }, { key: "locateInGeometry", value: function(e, t) {
        if (t instanceof er) return s.locatePointInPolygon(e, t);
        if (t instanceof De) for (var n = new sh(t); n.hasNext(); ) {
          var i = n.next();
          if (i !== t) {
            var u = s.locateInGeometry(e, i);
            if (u !== I.EXTERIOR) return u;
          }
        }
        return I.EXTERIOR;
      } }, { key: "isContained", value: function(e, t) {
        return I.EXTERIOR !== s.locate(e, t);
      } }, { key: "locate", value: function(e, t) {
        return t.isEmpty() ? I.EXTERIOR : t.getEnvelopeInternal().intersects(e) ? s.locateInGeometry(e, t) : I.EXTERIOR;
      } }]), s;
    }(), oh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getNextCW", value: function(e) {
        this.getEdges();
        var t = this._edgeList.indexOf(e), n = t - 1;
        return t === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(e) {
        for (var t = I.NONE, n = this.iterator(); n.hasNext(); ) {
          var i = n.next().getLabel();
          i.isArea(e) && i.getLocation(e, B.LEFT) !== I.NONE && (t = i.getLocation(e, B.LEFT));
        }
        if (t === I.NONE) return null;
        for (var u = t, h = this.iterator(); h.hasNext(); ) {
          var g = h.next(), y = g.getLabel();
          if (y.getLocation(e, B.ON) === I.NONE && y.setLocation(e, B.ON, u), y.isArea(e)) {
            var d = y.getLocation(e, B.LEFT), N = y.getLocation(e, B.RIGHT);
            if (N !== I.NONE) {
              if (N !== u) throw new gt("side location conflict", g.getCoordinate());
              d === I.NONE && se.shouldNeverReachHere("found single null side (at " + g.getCoordinate() + ")"), u = d;
            } else se.isTrue(y.getLocation(e, B.LEFT) === I.NONE, "found single null side"), y.setLocation(e, B.RIGHT, u), y.setLocation(e, B.LEFT, u);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var e = this.iterator();
        return e.hasNext() ? e.next().getCoordinate() : null;
      } }, { key: "print", value: function(e) {
        $e.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "isAreaLabelsConsistent", value: function(e) {
        return this.computeEdgeEndLabels(e.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(e) {
        var t = this.getEdges();
        if (t.size() <= 0) return !0;
        var n = t.size() - 1, i = t.get(n).getLabel().getLocation(e, B.LEFT);
        se.isTrue(i !== I.NONE, "Found unlabelled area edge");
        for (var u = i, h = this.iterator(); h.hasNext(); ) {
          var g = h.next().getLabel();
          se.isTrue(g.isArea(e), "Found non-area edge");
          var y = g.getLocation(e, B.LEFT), d = g.getLocation(e, B.RIGHT);
          if (y === d || d !== u) return !1;
          u = y;
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
        return this._edgeList === null && (this._edgeList = new Z(this._edgeMap.values())), this._edgeList;
      } }, { key: "getLocation", value: function(e, t, n) {
        return this._ptInAreaLocation[e] === I.NONE && (this._ptInAreaLocation[e] = ah.locate(t, n[e].getGeometry())), this._ptInAreaLocation[e];
      } }, { key: "toString", value: function() {
        var e = new xn();
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
        for (var h = this.iterator(); h.hasNext(); ) for (var g = h.next(), y = g.getLabel(), d = 0; d < 2; d++) if (y.isAnyNull(d)) {
          var N = I.NONE;
          if (t[d]) N = I.EXTERIOR;
          else {
            var b = g.getCoordinate();
            N = this.getLocation(d, b, e);
          }
          y.setAllLocationsIfNull(d, N);
        }
      } }, { key: "getDegree", value: function() {
        return this._edgeMap.size();
      } }, { key: "insertEdgeEnd", value: function(e, t) {
        this._edgeMap.put(e, t), this._edgeList = null;
      } }], [{ key: "constructor_", value: function() {
        this._edgeMap = new bn(), this._edgeList = null, this._ptInAreaLocation = [I.NONE, I.NONE];
      } }]), s;
    }(), uh = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "linkResultDirectedEdges", value: function() {
        this.getResultAreaEdges();
        for (var n = null, i = null, u = this._SCANNING_FOR_INCOMING, h = 0; h < this._resultAreaEdgeList.size(); h++) {
          var g = this._resultAreaEdgeList.get(h), y = g.getSym();
          if (g.getLabel().isArea()) switch (n === null && g.isInResult() && (n = g), u) {
            case this._SCANNING_FOR_INCOMING:
              if (!y.isInResult()) continue;
              i = y, u = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (!g.isInResult()) continue;
              i.setNext(g), u = this._SCANNING_FOR_INCOMING;
          }
        }
        if (u === this._LINKING_TO_OUTGOING) {
          if (n === null) throw new gt("no outgoing dirEdge found", this.getCoordinate());
          se.isTrue(n.isInResult(), "unable to link last incoming dirEdge"), i.setNext(n);
        }
      } }, { key: "insert", value: function(n) {
        var i = n;
        this.insertEdgeEnd(i, i);
      } }, { key: "getRightmostEdge", value: function() {
        var n = this.getEdges(), i = n.size();
        if (i < 1) return null;
        var u = n.get(0);
        if (i === 1) return u;
        var h = n.get(i - 1), g = u.getQuadrant(), y = h.getQuadrant();
        return Ce.isNorthern(g) && Ce.isNorthern(y) ? u : Ce.isNorthern(g) || Ce.isNorthern(y) ? u.getDy() !== 0 ? u : h.getDy() !== 0 ? h : (se.shouldNeverReachHere("found two horizontal edges incident on node"), null) : h;
      } }, { key: "print", value: function(n) {
        $e.out.println("DirectedEdgeStar: " + this.getCoordinate());
        for (var i = this.iterator(); i.hasNext(); ) {
          var u = i.next();
          n.print("out "), u.print(n), n.println(), n.print("in "), u.getSym().print(n), n.println();
        }
      } }, { key: "getResultAreaEdges", value: function() {
        if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
        this._resultAreaEdgeList = new Z();
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
          var h = this._edgeList.get(u), g = h.getSym();
          i === null && (i = g), n !== null && g.setNext(n), n = h;
        }
        i.setNext(n);
      } }, { key: "computeDepths", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this.findIndex(n), u = n.getDepth(B.LEFT), h = n.getDepth(B.RIGHT), g = this.computeDepths(i + 1, this._edgeList.size(), u), y = this.computeDepths(0, i, g);
          if (y !== h) throw new gt("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var d = arguments[0], N = arguments[1], b = arguments[2], R = b, F = d; F < N; F++) {
            var D = this._edgeList.get(F);
            D.setEdgeDepths(B.RIGHT, R), R = D.getDepth(B.LEFT);
          }
          return R;
        }
      } }, { key: "mergeSymLabels", value: function() {
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().merge(i.getSym().getLabel());
        }
      } }, { key: "linkMinimalDirectedEdges", value: function(n) {
        for (var i = null, u = null, h = this._SCANNING_FOR_INCOMING, g = this._resultAreaEdgeList.size() - 1; g >= 0; g--) {
          var y = this._resultAreaEdgeList.get(g), d = y.getSym();
          switch (i === null && y.getEdgeRing() === n && (i = y), h) {
            case this._SCANNING_FOR_INCOMING:
              if (d.getEdgeRing() !== n) continue;
              u = d, h = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (y.getEdgeRing() !== n) continue;
              u.setNextMin(y), h = this._SCANNING_FOR_INCOMING;
          }
        }
        h === this._LINKING_TO_OUTGOING && (se.isTrue(i !== null, "found null for first outgoing dirEdge"), se.isTrue(i.getEdgeRing() === n, "unable to link last incoming dirEdge"), u.setNextMin(i));
      } }, { key: "getOutgoingDegree", value: function() {
        if (arguments.length === 0) {
          for (var n = 0, i = this.iterator(); i.hasNext(); ) {
            var u = i.next();
            u.isInResult() && n++;
          }
          return n;
        }
        if (arguments.length === 1) {
          for (var h = arguments[0], g = 0, y = this.iterator(); y.hasNext(); ) {
            var d = y.next();
            d.getEdgeRing() === h && g++;
          }
          return g;
        }
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "findCoveredLineEdges", value: function() {
        for (var n = I.NONE, i = this.iterator(); i.hasNext(); ) {
          var u = i.next(), h = u.getSym();
          if (!u.isLineEdge()) {
            if (u.isInResult()) {
              n = I.INTERIOR;
              break;
            }
            if (h.isInResult()) {
              n = I.EXTERIOR;
              break;
            }
          }
        }
        if (n === I.NONE) return null;
        for (var g = n, y = this.iterator(); y.hasNext(); ) {
          var d = y.next(), N = d.getSym();
          d.isLineEdge() ? d.getEdge().setCovered(g === I.INTERIOR) : (d.isInResult() && (g = I.EXTERIOR), N.isInResult() && (g = I.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        w(v(t.prototype), "computeLabelling", this).call(this, n), this._label = new ze(I.NONE);
        for (var i = this.iterator(); i.hasNext(); ) for (var u = i.next().getEdge().getLabel(), h = 0; h < 2; h++) {
          var g = u.getLocation(h);
          g !== I.INTERIOR && g !== I.BOUNDARY || this._label.setLocation(h, I.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), t;
    }(oh), lh = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.call(this);
      }
      return c(t, [{ key: "createNode", value: function(n) {
        return new sr(n, new uh());
      } }]), t;
    }(ga), wa = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "compareTo", value: function(e) {
        var t = e;
        return s.compareOriented(this._pts, this._orientation, t._pts, t._orientation);
      } }, { key: "interfaces_", get: function() {
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this._pts = null, this._orientation = null;
        var e = arguments[0];
        this._pts = e, this._orientation = s.orientation(e);
      } }, { key: "orientation", value: function(e) {
        return Ee.increasingDirection(e) === 1;
      } }, { key: "compareOriented", value: function(e, t, n, i) {
        for (var u = t ? 1 : -1, h = i ? 1 : -1, g = t ? e.length : -1, y = i ? n.length : -1, d = t ? 0 : e.length - 1, N = i ? 0 : n.length - 1; ; ) {
          var b = e[d].compareTo(n[N]);
          if (b !== 0) return b;
          var R = (d += u) === g, F = (N += h) === y;
          if (R && !F) return -1;
          if (!R && F) return 1;
          if (R && F) return 0;
        }
      } }]), s;
    }(), ch = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "print", value: function(e) {
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
        var t = new wa(e.getCoordinates());
        return this._ocaMap.get(t);
      } }, { key: "add", value: function(e) {
        this._edges.add(e);
        var t = new wa(e.getCoordinates());
        this._ocaMap.put(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new Z(), this._ocaMap = new bn();
      } }]), s;
    }(), Na = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "processIntersections", value: function(e, t, n, i) {
      } }, { key: "isDone", value: function() {
      } }]), s;
    }(), hh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isTrivialIntersection", value: function(e, t, n, i) {
        if (e === n && this._li.getIntersectionNum() === 1) {
          if (s.isAdjacentSegments(t, i)) return !0;
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
        var u = e.getCoordinates()[t], h = e.getCoordinates()[t + 1], g = n.getCoordinates()[i], y = n.getCoordinates()[i + 1];
        this._li.computeIntersection(u, h, g, y), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(e, t, n, i) || (this._hasIntersection = !0, e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [Na];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var e = arguments[0];
        this._li = e;
      } }, { key: "isAdjacentSegments", value: function(e, t) {
        return Math.abs(e - t) === 1;
      } }]), s;
    }(), fh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getSegmentIndex", value: function() {
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
        return [Y];
      } }], [{ key: "constructor_", value: function() {
        this.coord = null, this.segmentIndex = null, this.dist = null;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this.coord = new O(e), this.segmentIndex = t, this.dist = n;
      } }]), s;
    }(), gh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "print", value: function(e) {
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
        var h = new Array(n).fill(null), g = 0;
        h[g++] = new O(e.coord);
        for (var y = e.segmentIndex + 1; y <= t.segmentIndex; y++) h[g++] = this.edge.pts[y];
        return u && (h[g] = t.coord), new Oa(h, new ze(this.edge._label));
      } }, { key: "add", value: function(e, t, n) {
        var i = new fh(e, t, n), u = this._nodeMap.get(i);
        return u !== null ? u : (this._nodeMap.put(i, i), i);
      } }, { key: "isIntersection", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          if (t.next().coord.equals(e)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new bn(), this.edge = null;
        var e = arguments[0];
        this.edge = e;
      } }]), s;
    }(), yh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || s.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || s.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || s.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.EXTERIOR][I.INTERIOR] === z.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === z.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) || s.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || s.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || s.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY])) && this._matrix[I.INTERIOR][I.EXTERIOR] === z.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === z.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this._matrix[n][i] = z.toDimensionValue(e.charAt(t));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          this._matrix[u][h] = g;
        }
      } }, { key: "isContains", value: function() {
        return s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.EXTERIOR][I.INTERIOR] === z.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === z.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this.setAtLeast(n, i, z.toDimensionValue(e.charAt(t)));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          this._matrix[u][h] < g && (this._matrix[u][h] = g);
        }
      } }, { key: "setAtLeastIfValid", value: function(e, t, n) {
        e >= 0 && t >= 0 && this.setAtLeast(e, t, n);
      } }, { key: "isWithin", value: function() {
        return s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === z.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === z.FALSE;
      } }, { key: "isTouches", value: function(e, t) {
        return e > t ? this.isTouches(t, e) : (e === z.A && t === z.A || e === z.L && t === z.L || e === z.L && t === z.A || e === z.P && t === z.A || e === z.P && t === z.L) && this._matrix[I.INTERIOR][I.INTERIOR] === z.FALSE && (s.isTrue(this._matrix[I.INTERIOR][I.BOUNDARY]) || s.isTrue(this._matrix[I.BOUNDARY][I.INTERIOR]) || s.isTrue(this._matrix[I.BOUNDARY][I.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(e, t) {
        return e === z.P && t === z.P || e === z.A && t === z.A ? s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && s.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && s.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === z.L && t === z.L && this._matrix[I.INTERIOR][I.INTERIOR] === 1 && s.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) && s.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]);
      } }, { key: "isEquals", value: function(e, t) {
        return e === t && s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && this._matrix[I.INTERIOR][I.EXTERIOR] === z.FALSE && this._matrix[I.BOUNDARY][I.EXTERIOR] === z.FALSE && this._matrix[I.EXTERIOR][I.INTERIOR] === z.FALSE && this._matrix[I.EXTERIOR][I.BOUNDARY] === z.FALSE;
      } }, { key: "toString", value: function() {
        for (var e = new nr("123456789"), t = 0; t < 3; t++) for (var n = 0; n < 3; n++) e.setCharAt(3 * t + n, z.toDimensionSymbol(this._matrix[t][n]));
        return e.toString();
      } }, { key: "setAll", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this._matrix[t][n] = e;
      } }, { key: "get", value: function(e, t) {
        return this._matrix[e][t];
      } }, { key: "transpose", value: function() {
        var e = this._matrix[1][0];
        return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = e, e = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = e, e = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = e, this;
      } }, { key: "matches", value: function(e) {
        if (e.length !== 9) throw new M("Should be length 9: " + e);
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) if (!s.matches(this._matrix[t][n], e.charAt(3 * t + n))) return !1;
        return !0;
      } }, { key: "add", value: function(e) {
        for (var t = 0; t < 3; t++) for (var n = 0; n < 3; n++) this.setAtLeast(t, n, e.get(t, n));
      } }, { key: "isDisjoint", value: function() {
        return this._matrix[I.INTERIOR][I.INTERIOR] === z.FALSE && this._matrix[I.INTERIOR][I.BOUNDARY] === z.FALSE && this._matrix[I.BOUNDARY][I.INTERIOR] === z.FALSE && this._matrix[I.BOUNDARY][I.BOUNDARY] === z.FALSE;
      } }, { key: "isCrosses", value: function(e, t) {
        return e === z.P && t === z.L || e === z.P && t === z.A || e === z.L && t === z.A ? s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && s.isTrue(this._matrix[I.INTERIOR][I.EXTERIOR]) : e === z.L && t === z.P || e === z.A && t === z.P || e === z.A && t === z.L ? s.isTrue(this._matrix[I.INTERIOR][I.INTERIOR]) && s.isTrue(this._matrix[I.EXTERIOR][I.INTERIOR]) : e === z.L && t === z.L && this._matrix[I.INTERIOR][I.INTERIOR] === 0;
      } }, { key: "interfaces_", get: function() {
        return [U];
      } }], [{ key: "constructor_", value: function() {
        if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
          return Array(3);
        }), this.setAll(z.FALSE);
        else if (arguments.length === 1) {
          if (typeof arguments[0] == "string") {
            var e = arguments[0];
            s.constructor_.call(this), this.set(e);
          } else if (arguments[0] instanceof s) {
            var t = arguments[0];
            s.constructor_.call(this), this._matrix[I.INTERIOR][I.INTERIOR] = t._matrix[I.INTERIOR][I.INTERIOR], this._matrix[I.INTERIOR][I.BOUNDARY] = t._matrix[I.INTERIOR][I.BOUNDARY], this._matrix[I.INTERIOR][I.EXTERIOR] = t._matrix[I.INTERIOR][I.EXTERIOR], this._matrix[I.BOUNDARY][I.INTERIOR] = t._matrix[I.BOUNDARY][I.INTERIOR], this._matrix[I.BOUNDARY][I.BOUNDARY] = t._matrix[I.BOUNDARY][I.BOUNDARY], this._matrix[I.BOUNDARY][I.EXTERIOR] = t._matrix[I.BOUNDARY][I.EXTERIOR], this._matrix[I.EXTERIOR][I.INTERIOR] = t._matrix[I.EXTERIOR][I.INTERIOR], this._matrix[I.EXTERIOR][I.BOUNDARY] = t._matrix[I.EXTERIOR][I.BOUNDARY], this._matrix[I.EXTERIOR][I.EXTERIOR] = t._matrix[I.EXTERIOR][I.EXTERIOR];
          }
        }
      } }, { key: "matches", value: function() {
        if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
          var e = arguments[0], t = arguments[1];
          return t === z.SYM_DONTCARE || t === z.SYM_TRUE && (e >= 0 || e === z.TRUE) || t === z.SYM_FALSE && e === z.FALSE || t === z.SYM_P && e === z.P || t === z.SYM_L && e === z.L || t === z.SYM_A && e === z.A;
        }
        if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
          var n = arguments[0], i = arguments[1], u = new s(n);
          return u.matches(i);
        }
      } }, { key: "isTrue", value: function(e) {
        return e >= 0 || e === z.TRUE;
      } }]), s;
    }(), vh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(e) {
        return e === null || e.length === 0 ? null : (this.ensureCapacity(this._size + e.length), $e.arraycopy(e, 0, this._data, this._size, e.length), void (this._size += e.length));
      } }, { key: "ensureCapacity", value: function(e) {
        if (e <= this._data.length) return null;
        var t = Math.max(e, 2 * this._data.length);
        this._data = Dt.copyOf(this._data, t);
      } }, { key: "toArray", value: function() {
        var e = new Array(this._size).fill(null);
        return $e.arraycopy(this._data, 0, e, 0, this._size), e;
      } }, { key: "add", value: function(e) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = e, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) s.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._data = new Array(e).fill(null);
        }
      } }]), s;
    }(), ph = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getChainStartIndices", value: function(e) {
        var t = 0, n = new vh(Math.trunc(e.length / 2));
        n.add(t);
        do {
          var i = this.findChainEnd(e, t);
          n.add(i), t = i;
        } while (t < e.length - 1);
        return n.toArray();
      } }, { key: "findChainEnd", value: function(e, t) {
        for (var n = Ce.quadrant(e[t], e[t + 1]), i = t + 1; i < e.length && Ce.quadrant(e[i - 1], e[i]) === n; )
          i++;
        return i - 1;
      } }, { key: "OLDgetChainStartIndices", value: function(e) {
        var t = 0, n = new Z();
        n.add(t);
        do {
          var i = this.findChainEnd(e, t);
          n.add(i), t = i;
        } while (t < e.length - 1);
        return s.toIntArray(n);
      } }], [{ key: "toIntArray", value: function(e) {
        for (var t = new Array(e.size()).fill(null), n = 0; n < t.length; n++) t[n] = e.get(n).intValue();
        return t;
      } }]), s;
    }(), mh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinates", value: function() {
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
          var u = arguments[0], h = arguments[1], g = arguments[2], y = arguments[3], d = arguments[4], N = arguments[5];
          if (h - u == 1 && d - y == 1) return N.addIntersections(this.e, u, g.e, y), null;
          if (!this.overlaps(u, h, g, y, d)) return null;
          var b = Math.trunc((u + h) / 2), R = Math.trunc((y + d) / 2);
          u < b && (y < R && this.computeIntersectsForChain(u, b, g, y, R, N), R < d && this.computeIntersectsForChain(u, b, g, R, d, N)), b < h && (y < R && this.computeIntersectsForChain(b, h, g, y, R, N), R < d && this.computeIntersectsForChain(b, h, g, R, d, N));
        }
      } }, { key: "overlaps", value: function(e, t, n, i, u) {
        return pe.intersects(this.pts[e], this.pts[t], n.pts[i], n.pts[u]);
      } }, { key: "getStartIndexes", value: function() {
        return this.startIndex;
      } }, { key: "computeIntersects", value: function(e, t) {
        for (var n = 0; n < this.startIndex.length - 1; n++) for (var i = 0; i < e.startIndex.length - 1; i++) this.computeIntersectsForChain(n, e, i, t);
      } }], [{ key: "constructor_", value: function() {
        this.e = null, this.pts = null, this.startIndex = null;
        var e = arguments[0];
        this.e = e, this.pts = e.getCoordinates();
        var t = new ph();
        this.startIndex = t.getChainStartIndices(this.pts);
      } }]), s;
    }(), ba = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getDepth", value: function(e, t) {
        return this._depth[e][t];
      } }, { key: "setDepth", value: function(e, t, n) {
        this._depth[e][t] = n;
      } }, { key: "isNull", value: function() {
        if (arguments.length === 0) {
          for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) if (this._depth[e][t] !== s.NULL_VALUE) return !1;
          return !0;
        }
        if (arguments.length === 1) {
          var n = arguments[0];
          return this._depth[n][1] === s.NULL_VALUE;
        }
        if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          return this._depth[i][u] === s.NULL_VALUE;
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
        return this._depth[e][B.RIGHT] - this._depth[e][B.LEFT];
      } }, { key: "getLocation", value: function(e, t) {
        return this._depth[e][t] <= 0 ? I.EXTERIOR : I.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < 2; t++) for (var n = 1; n < 3; n++) {
          var i = e.getLocation(t, n);
          i !== I.EXTERIOR && i !== I.INTERIOR || (this.isNull(t, n) ? this._depth[t][n] = s.depthAtLocation(i) : this._depth[t][n] += s.depthAtLocation(i));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], h = arguments[1], g = arguments[2];
          g === I.INTERIOR && this._depth[u][h]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) this._depth[e][t] = s.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(e) {
        return e === I.EXTERIOR ? 0 : e === I.INTERIOR ? 1 : s.NULL_VALUE;
      } }]), s;
    }();
    ba.NULL_VALUE = -1;
    var Oa = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getDepth", value: function() {
        return this._depth;
      } }, { key: "getCollapsedEdge", value: function() {
        var n = new Array(2).fill(null);
        return n[0] = this.pts[0], n[1] = this.pts[1], new t(n, ze.toLineLabel(this._label));
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
        for (var u = !0, h = !0, g = this.pts.length, y = 0; y < this.pts.length; y++) if (this.pts[y].equals2D(i.pts[y]) || (u = !1), this.pts[y].equals2D(i.pts[--g]) || (h = !1), !u && !h) return !1;
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
        return this._mce === null && (this._mce = new mh(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new pe();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, i, u, h) {
        var g = new O(n.getIntersection(h)), y = i, d = n.getEdgeDistance(u, h), N = y + 1;
        if (N < this.pts.length) {
          var b = this.pts[N];
          g.equals2D(b) && (y = N, d = 0);
        }
        this.eiList.add(g, y, d);
      } }, { key: "toString", value: function() {
        var n = new nr();
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
        for (var h = 0; h < n.getIntersectionNum(); h++) this.addIntersection(n, i, u, h);
      } }], [{ key: "constructor_", value: function() {
        if (this.pts = null, this._env = null, this.eiList = new gh(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new ba(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          t.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          this.pts = i, this._label = u;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof yh && arguments[0] instanceof ze)) return w(v(t), "updateIM", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        i.setAtLeastIfValid(n.getLocation(0, B.ON), n.getLocation(1, B.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, B.LEFT), n.getLocation(1, B.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, B.RIGHT), n.getLocation(1, B.RIGHT), 2));
      } }]), t;
    }(ua), Ta = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setWorkingPrecisionModel", value: function(e) {
        this._workingPrecisionModel = e;
      } }, { key: "insertUniqueEdge", value: function(e) {
        var t = this._edgeList.findEqualEdge(e);
        if (t !== null) {
          var n = t.getLabel(), i = e.getLabel();
          t.isPointwiseEqual(e) || (i = new ze(e.getLabel())).flip(), n.merge(i);
          var u = s.depthDelta(i), h = t.getDepthDelta() + u;
          t.setDepthDelta(h);
        } else this._edgeList.add(e), e.setDepthDelta(s.depthDelta(e.getLabel()));
      } }, { key: "buildSubgraphs", value: function(e, t) {
        for (var n = new Z(), i = e.iterator(); i.hasNext(); ) {
          var u = i.next(), h = u.getRightmostCoordinate(), g = new ka(n).getDepth(h);
          u.computeDepth(g), u.findResultEdges(), n.add(u), t.add(u.getDirectedEdges(), u.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(e) {
        for (var t = new Z(), n = e.getNodes().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (!i.isVisited()) {
            var u = new kc();
            u.create(i), t.add(u);
          }
        }
        return Zt.sort(t, Zt.reverseOrder()), t;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(e) {
        if (this._workingNoder !== null) return this._workingNoder;
        var t = new pi(), n = new Bt();
        return n.setPrecisionModel(e), t.setSegmentIntersector(new hh(n)), t;
      } }, { key: "buffer", value: function(e, t) {
        var n = this._workingPrecisionModel;
        n === null && (n = e.getPrecisionModel()), this._geomFact = e.getFactory();
        var i = new th(n, this._bufParams), u = new rh(e, t, i).getCurves();
        if (u.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(u, n), this._graph = new ya(new lh()), this._graph.addEdges(this._edgeList.getEdges());
        var h = this.createSubgraphs(this._graph), g = new zc(this._geomFact);
        this.buildSubgraphs(h, g);
        var y = g.getPolygons();
        return y.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(y);
      } }, { key: "computeNodedEdges", value: function(e, t) {
        var n = this.getNoder(t);
        n.computeNodes(e);
        for (var i = n.getNodedSubstrings().iterator(); i.hasNext(); ) {
          var u = i.next(), h = u.getCoordinates();
          if (h.length !== 2 || !h[0].equals2D(h[1])) {
            var g = u.getData(), y = new Oa(u.getCoordinates(), new ze(g));
            this.insertUniqueEdge(y);
          }
        }
      } }, { key: "setNoder", value: function(e) {
        this._workingNoder = e;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new ch();
        var e = arguments[0];
        this._bufParams = e;
      } }, { key: "depthDelta", value: function(e) {
        var t = e.getLocation(0, B.LEFT), n = e.getLocation(0, B.RIGHT);
        return t === I.INTERIOR && n === I.EXTERIOR ? 1 : t === I.EXTERIOR && n === I.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(e) {
        for (var t = new Wt(), n = new Z(); e.hasNext(); ) {
          var i = e.next(), u = t.createLineString(i.getCoordinates());
          n.add(u);
        }
        return t.buildGeometry(n);
      } }]), s;
    }(), dh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "rescale", value: function() {
        if (re(arguments[0], tt)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var i = arguments[0], u = 0; u < i.length; u++) i[u].x = i[u].x / this._scaleFactor + this._offsetX, i[u].y = i[u].y / this._scaleFactor + this._offsetY;
          i.length === 2 && i[0].equals2D(i[1]) && $e.out.println(i);
        }
      } }, { key: "scale", value: function() {
        if (re(arguments[0], tt)) {
          for (var e = arguments[0], t = new Z(e.size()), n = e.iterator(); n.hasNext(); ) {
            var i = n.next();
            t.add(new $t(this.scale(i.getCoordinates()), i.getData()));
          }
          return t;
        }
        if (arguments[0] instanceof Array) {
          for (var u = arguments[0], h = new Array(u.length).fill(null), g = 0; g < u.length; g++) h[g] = new O(Math.round((u[g].x - this._offsetX) * this._scaleFactor), Math.round((u[g].y - this._offsetY) * this._scaleFactor), u[g].getZ());
          var y = Ee.removeRepeatedPoints(h);
          return y;
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
        return [vi];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          s.constructor_.call(this, e, t, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1];
          this._noder = n, this._scaleFactor = i, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), s;
    }(), Ra = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next(), n = t.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var i = arguments[0], u = arguments[1], h = u.iterator(); h.hasNext(); ) for (var g = h.next(), y = g.getCoordinates(), d = 1; d < y.length - 1; d++) if (y[d].equals(i)) throw new Ie("found endpt/interior pt intersection at index " + d + " :pt " + i);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) for (var t = e.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.checkInteriorIntersections(t, i);
        }
        else if (arguments.length === 2) for (var u = arguments[0], h = arguments[1], g = u.getCoordinates(), y = h.getCoordinates(), d = 0; d < g.length - 1; d++) for (var N = 0; N < y.length - 1; N++) this.checkInteriorIntersections(u, d, h, N);
        else if (arguments.length === 4) {
          var b = arguments[0], R = arguments[1], F = arguments[2], D = arguments[3];
          if (b === F && R === D) return null;
          var V = b.getCoordinates()[R], H = b.getCoordinates()[R + 1], K = F.getCoordinates()[D], fe = F.getCoordinates()[D + 1];
          if (this._li.computeIntersection(V, H, K, fe), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, V, H) || this.hasInteriorIntersection(this._li, K, fe))) throw new Ie("found non-noded intersection at " + V + "-" + H + " and " + K + "-" + fe);
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
        if (e.equals(n)) throw new Ie("found non-noded collapse at " + s.fact.createLineString([e, t, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new Bt(), this._segStrings = null;
        var e = arguments[0];
        this._segStrings = e;
      } }]), s;
    }();
    Ra.fact = new Wt();
    var di = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "intersectsScaled", value: function(e, t) {
        var n = Math.min(e.x, t.x), i = Math.max(e.x, t.x), u = Math.min(e.y, t.y), h = Math.max(e.y, t.y), g = this._maxx < n || this._minx > i || this._maxy < u || this._miny > h;
        if (g) return !1;
        var y = this.intersectsToleranceSquare(e, t);
        return se.isTrue(!(g && y), "Found bad envelope test"), y;
      } }, { key: "initCorners", value: function(e) {
        var t = 0.5;
        this._minx = e.x - t, this._maxx = e.x + t, this._miny = e.y - t, this._maxy = e.y + t, this._corner[0] = new O(this._maxx, this._maxy), this._corner[1] = new O(this._minx, this._maxy), this._corner[2] = new O(this._minx, this._miny), this._corner[3] = new O(this._maxx, this._miny);
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
          var e = s.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
          this._safeEnv = new pe(this._originalPt.x - e, this._originalPt.x + e, this._originalPt.y - e, this._originalPt.y + e);
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
        if (this._originalPt = e, this._pt = e, this._scaleFactor = t, this._li = n, t <= 0) throw new M("Scale factor must be non-zero");
        t !== 1 && (this._pt = new O(this.scale(e.x), this.scale(e.y)), this._p0Scaled = new O(), this._p1Scaled = new O()), this.initCorners(this._pt);
      } }]), s;
    }();
    di.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var _h = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "select", value: function() {
        if (arguments.length !== 1) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            e.getLineSegment(t, this.selectedSegment), this.select(this.selectedSegment);
          }
        }
      } }], [{ key: "constructor_", value: function() {
        this.selectedSegment = new Fe();
      } }]), s;
    }(), La = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.snap(e, null, -1);
        }
        if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2], u = t.getSafeEnvelope(), h = new Ca(t, n, i);
          return this._index.query(u, new (function() {
            function g() {
              a(this, g);
            }
            return c(g, [{ key: "interfaces_", get: function() {
              return [pa];
            } }, { key: "visitItem", value: function(y) {
              y.select(u, h);
            } }]), g;
          }())()), h.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var e = arguments[0];
        this._index = e;
      } }]), s;
    }(), Ca = function(s) {
      f(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof da)) return w(v(t.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = n.getContext();
        if (this._parentEdge === u && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(u, i);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        this._hotPixel = n, this._parentEdge = i, this._hotPixelVertexIndex = u;
      } }]), t;
    }(_h);
    La.HotPixelSnapAction = Ca;
    var xh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "processIntersections", value: function(e, t, n, i) {
        if (e === n && t === i) return null;
        var u = e.getCoordinates()[t], h = e.getCoordinates()[t + 1], g = n.getCoordinates()[i], y = n.getCoordinates()[i + 1];
        if (this._li.computeIntersection(u, h, g, y), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var d = 0; d < this._li.getIntersectionNum(); d++) this._interiorIntersections.add(this._li.getIntersection(d));
          e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [Na];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var e = arguments[0];
        this._li = e, this._interiorIntersections = new Z();
      } }]), s;
    }(), Eh = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "checkCorrectness", value: function(e) {
        var t = $t.getNodedSubstrings(e), n = new Ra(t);
        try {
          n.checkValid();
        } catch (i) {
          if (!(i instanceof G)) throw i;
          i.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return $t.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(e, t) {
        var n = this.findInteriorIntersections(e, t);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(e);
      } }, { key: "findInteriorIntersections", value: function(e, t) {
        var n = new xh(t);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(e), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (re(arguments[0], tt)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof $t) for (var i = arguments[0], u = i.getCoordinates(), h = 0; h < u.length; h++) {
          var g = new di(u[h], this._scaleFactor, this._li), y = this._pointSnapper.snap(g, i, h);
          y && i.addIntersection(u[h], h);
        }
      } }, { key: "computeNodes", value: function(e) {
        this._nodedSegStrings = e, this._noder = new pi(), this._pointSnapper = new La(this._noder.getIndex()), this.snapRound(e, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next(), i = new di(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(i);
        }
      } }, { key: "interfaces_", get: function() {
        return [vi];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var e = arguments[0];
        this._pm = e, this._li = new Bt(), this._li.setPrecisionModel(e), this._scaleFactor = e.getScale();
      } }]), s;
    }(), Kt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "bufferFixedPrecision", value: function(e) {
        var t = new dh(new Eh(new We(1)), e.getScale()), n = new Ta(this._bufParams);
        n.setWorkingPrecisionModel(e), n.setNoder(t), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var e = s.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              this.bufferReducedPrecision(e);
            } catch (u) {
              if (!(u instanceof gt)) throw u;
              this._saveException = u;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var t = arguments[0], n = s.precisionScaleFactor(this._argGeom, this._distance, t), i = new We(n);
          this.bufferFixedPrecision(i);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var e = this._argGeom.getFactory().getPrecisionModel();
        e.getType() === We.FIXED ? this.bufferFixedPrecision(e) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._bufParams.setQuadrantSegments(e);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var e = new Ta(this._bufParams);
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
        if (this._argGeom = null, this._distance = null, this._bufParams = new L(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
          var e = arguments[0];
          this._argGeom = e;
        } else if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          this._argGeom = t, this._bufParams = n;
        }
      } }, { key: "bufferOp", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1], n = new s(e), i = n.getResultGeometry(t);
          return i;
        }
        if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof W && typeof arguments[1] == "number") {
            var u = arguments[0], h = arguments[1], g = arguments[2], y = new s(u);
            y.setQuadrantSegments(g);
            var d = y.getResultGeometry(h);
            return d;
          }
          if (arguments[2] instanceof L && arguments[0] instanceof W && typeof arguments[1] == "number") {
            var N = arguments[0], b = arguments[1], R = arguments[2], F = new s(N, R), D = F.getResultGeometry(b);
            return D;
          }
        } else if (arguments.length === 4) {
          var V = arguments[0], H = arguments[1], K = arguments[2], fe = arguments[3], de = new s(V);
          de.setQuadrantSegments(K), de.setEndCapStyle(fe);
          var Oe = de.getResultGeometry(H);
          return Oe;
        }
      } }, { key: "precisionScaleFactor", value: function(e, t, n) {
        var i = e.getEnvelopeInternal(), u = En.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (t > 0 ? t : 0), h = n - Math.trunc(Math.log(u) / Math.log(10) + 1);
        return Math.pow(10, h);
      } }]), s;
    }();
    Kt.CAP_ROUND = L.CAP_ROUND, Kt.CAP_BUTT = L.CAP_FLAT, Kt.CAP_FLAT = L.CAP_FLAT, Kt.CAP_SQUARE = L.CAP_SQUARE, Kt.MAX_PRECISION_DIGITS = 12;
    var kh = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Pa = function() {
      function s(e) {
        a(this, s), this.geometryFactory = e || new Wt();
      }
      return c(s, [{ key: "read", value: function(e) {
        var t, n = (t = typeof e == "string" ? JSON.parse(e) : e).type;
        if (!Ue[n]) throw new Error("Unknown GeoJSON type: " + t.type);
        return kh.indexOf(n) !== -1 ? Ue[n].call(this, t.coordinates) : n === "GeometryCollection" ? Ue[n].call(this, t.geometries) : Ue[n].call(this, t);
      } }, { key: "write", value: function(e) {
        var t = e.getGeometryType();
        if (!st[t]) throw new Error("Geometry is not supported");
        return st[t].call(this, e);
      } }]), s;
    }(), Ue = { Feature: function(s) {
      var e = {};
      for (var t in s) e[t] = s[t];
      if (s.geometry) {
        var n = s.geometry.type;
        if (!Ue[n]) throw new Error("Unknown GeoJSON type: " + s.type);
        e.geometry = this.read(s.geometry);
      }
      return s.bbox && (e.bbox = Ue.bbox.call(this, s.bbox)), e;
    }, FeatureCollection: function(s) {
      var e = {};
      if (s.features) {
        e.features = [];
        for (var t = 0; t < s.features.length; ++t) e.features.push(this.read(s.features[t]));
      }
      return s.bbox && (e.bbox = this.parse.bbox.call(this, s.bbox)), e;
    }, coordinates: function(s) {
      for (var e = [], t = 0; t < s.length; ++t) {
        var n = s[t];
        e.push(x(O, T(n)));
      }
      return e;
    }, bbox: function(s) {
      return this.geometryFactory.createLinearRing([new O(s[0], s[1]), new O(s[2], s[1]), new O(s[2], s[3]), new O(s[0], s[3]), new O(s[0], s[1])]);
    }, Point: function(s) {
      var e = x(O, T(s));
      return this.geometryFactory.createPoint(e);
    }, MultiPoint: function(s) {
      for (var e = [], t = 0; t < s.length; ++t) e.push(Ue.Point.call(this, s[t]));
      return this.geometryFactory.createMultiPoint(e);
    }, LineString: function(s) {
      var e = Ue.coordinates.call(this, s);
      return this.geometryFactory.createLineString(e);
    }, MultiLineString: function(s) {
      for (var e = [], t = 0; t < s.length; ++t) e.push(Ue.LineString.call(this, s[t]));
      return this.geometryFactory.createMultiLineString(e);
    }, Polygon: function(s) {
      for (var e = Ue.coordinates.call(this, s[0]), t = this.geometryFactory.createLinearRing(e), n = [], i = 1; i < s.length; ++i) {
        var u = s[i], h = Ue.coordinates.call(this, u), g = this.geometryFactory.createLinearRing(h);
        n.push(g);
      }
      return this.geometryFactory.createPolygon(t, n);
    }, MultiPolygon: function(s) {
      for (var e = [], t = 0; t < s.length; ++t) {
        var n = s[t];
        e.push(Ue.Polygon.call(this, n));
      }
      return this.geometryFactory.createMultiPolygon(e);
    }, GeometryCollection: function(s) {
      for (var e = [], t = 0; t < s.length; ++t) {
        var n = s[t];
        e.push(this.read(n));
      }
      return this.geometryFactory.createGeometryCollection(e);
    } }, st = { coordinate: function(s) {
      var e = [s.x, s.y];
      return s.z && e.push(s.z), s.m && e.push(s.m), e;
    }, Point: function(s) {
      return { type: "Point", coordinates: st.coordinate.call(this, s.getCoordinate()) };
    }, MultiPoint: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = st.Point.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPoint", coordinates: e };
    }, LineString: function(s) {
      for (var e = [], t = s.getCoordinates(), n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(st.coordinate.call(this, i));
      }
      return { type: "LineString", coordinates: e };
    }, MultiLineString: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = st.LineString.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiLineString", coordinates: e };
    }, Polygon: function(s) {
      var e = [], t = st.LineString.call(this, s._shell);
      e.push(t.coordinates);
      for (var n = 0; n < s._holes.length; ++n) {
        var i = s._holes[n], u = st.LineString.call(this, i);
        e.push(u.coordinates);
      }
      return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = st.Polygon.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = n.getGeometryType();
        e.push(st[i].call(this, n));
      }
      return { type: "GeometryCollection", geometries: e };
    } };
    return { BufferOp: Kt, GeoJSONReader: function() {
      function s(e) {
        a(this, s), this.parser = new Pa(e || new Wt());
      }
      return c(s, [{ key: "read", value: function(e) {
        return this.parser.read(e);
      } }]), s;
    }(), GeoJSONWriter: function() {
      function s() {
        a(this, s), this.parser = new Pa(this.geometryFactory);
      }
      return c(s, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }]), s;
    }() };
  });
})(Ql);
var Kp = Ql.exports;
const em = /* @__PURE__ */ Yu(Kp);
function Pt() {
  return new Yr();
}
function Yr() {
  this.reset();
}
Yr.prototype = {
  constructor: Yr,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(o) {
    hu(hr, o, this.t), hu(this, hr.s, this.s), this.s ? this.t += hr.t : this.s = hr.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var hr = new Yr();
function hu(o, r, a) {
  var l = o.s = r + a, c = l - r, f = l - c;
  o.t = r - f + (a - c);
}
var ve = 1e-6, ce = Math.PI, ut = ce / 2, fu = ce / 4, lt = ce * 2, It = 180 / ce, Xe = ce / 180, Ne = Math.abs, tm = Math.atan, hn = Math.atan2, _e = Math.cos, xe = Math.sin, dn = Math.sqrt;
function Kl(o) {
  return o > 1 ? 0 : o < -1 ? ce : Math.acos(o);
}
function Ut(o) {
  return o > 1 ? ut : o < -1 ? -ut : Math.asin(o);
}
function Dn() {
}
function Ur(o, r) {
  o && yu.hasOwnProperty(o.type) && yu[o.type](o, r);
}
var gu = {
  Feature: function(o, r) {
    Ur(o.geometry, r);
  },
  FeatureCollection: function(o, r) {
    for (var a = o.features, l = -1, c = a.length; ++l < c; ) Ur(a[l].geometry, r);
  }
}, yu = {
  Sphere: function(o, r) {
    r.sphere();
  },
  Point: function(o, r) {
    o = o.coordinates, r.point(o[0], o[1], o[2]);
  },
  MultiPoint: function(o, r) {
    for (var a = o.coordinates, l = -1, c = a.length; ++l < c; ) o = a[l], r.point(o[0], o[1], o[2]);
  },
  LineString: function(o, r) {
    fs(o.coordinates, r, 0);
  },
  MultiLineString: function(o, r) {
    for (var a = o.coordinates, l = -1, c = a.length; ++l < c; ) fs(a[l], r, 0);
  },
  Polygon: function(o, r) {
    vu(o.coordinates, r);
  },
  MultiPolygon: function(o, r) {
    for (var a = o.coordinates, l = -1, c = a.length; ++l < c; ) vu(a[l], r);
  },
  GeometryCollection: function(o, r) {
    for (var a = o.geometries, l = -1, c = a.length; ++l < c; ) Ur(a[l], r);
  }
};
function fs(o, r, a) {
  var l = -1, c = o.length - a, f;
  for (r.lineStart(); ++l < c; ) f = o[l], r.point(f[0], f[1], f[2]);
  r.lineEnd();
}
function vu(o, r) {
  var a = -1, l = o.length;
  for (r.polygonStart(); ++a < l; ) fs(o[a], r, 1);
  r.polygonEnd();
}
function nm(o, r) {
  o && gu.hasOwnProperty(o.type) ? gu[o.type](o, r) : Ur(o, r);
}
Pt();
Pt();
function gs(o) {
  return [hn(o[1], o[0]), Ut(o[2])];
}
function fn(o) {
  var r = o[0], a = o[1], l = _e(a);
  return [l * _e(r), l * xe(r), xe(a)];
}
function fr(o, r) {
  return o[0] * r[0] + o[1] * r[1] + o[2] * r[2];
}
function Xr(o, r) {
  return [o[1] * r[2] - o[2] * r[1], o[2] * r[0] - o[0] * r[2], o[0] * r[1] - o[1] * r[0]];
}
function qi(o, r) {
  o[0] += r[0], o[1] += r[1], o[2] += r[2];
}
function gr(o, r) {
  return [o[0] * r, o[1] * r, o[2] * r];
}
function ys(o) {
  var r = dn(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
  o[0] /= r, o[1] /= r, o[2] /= r;
}
Pt();
function ec(o, r) {
  function a(l, c) {
    return l = o(l, c), r(l[0], l[1]);
  }
  return o.invert && r.invert && (a.invert = function(l, c) {
    return l = r.invert(l, c), l && o.invert(l[0], l[1]);
  }), a;
}
function vs(o, r) {
  return [o > ce ? o - lt : o < -ce ? o + lt : o, r];
}
vs.invert = vs;
function rm(o, r, a) {
  return (o %= lt) ? r || a ? ec(mu(o), du(r, a)) : mu(o) : r || a ? du(r, a) : vs;
}
function pu(o) {
  return function(r, a) {
    return r += o, [r > ce ? r - lt : r < -ce ? r + lt : r, a];
  };
}
function mu(o) {
  var r = pu(o);
  return r.invert = pu(-o), r;
}
function du(o, r) {
  var a = _e(o), l = xe(o), c = _e(r), f = xe(r);
  function v(p, _) {
    var x = _e(_), S = _e(p) * x, m = xe(p) * x, E = xe(_), k = E * a + S * l;
    return [
      hn(m * c - k * f, S * a - E * l),
      Ut(k * c + m * f)
    ];
  }
  return v.invert = function(p, _) {
    var x = _e(_), S = _e(p) * x, m = xe(p) * x, E = xe(_), k = E * c - m * f;
    return [
      hn(m * c + E * f, S * a + k * l),
      Ut(k * a - S * l)
    ];
  }, v;
}
function im(o, r, a, l, c, f) {
  if (a) {
    var v = _e(r), p = xe(r), _ = l * a;
    c == null ? (c = r + l * lt, f = r - _ / 2) : (c = _u(v, c), f = _u(v, f), (l > 0 ? c < f : c > f) && (c += l * lt));
    for (var x, S = c; l > 0 ? S > f : S < f; S -= _)
      x = gs([v, -p * _e(S), -p * xe(S)]), o.point(x[0], x[1]);
  }
}
function _u(o, r) {
  r = fn(r), r[0] -= o, ys(r);
  var a = Kl(-r[1]);
  return ((-r[2] < 0 ? -a : a) + lt - ve) % lt;
}
function tc() {
  var o = [], r;
  return {
    point: function(a, l) {
      r.push([a, l]);
    },
    lineStart: function() {
      o.push(r = []);
    },
    lineEnd: Dn,
    rejoin: function() {
      o.length > 1 && o.push(o.pop().concat(o.shift()));
    },
    result: function() {
      var a = o;
      return o = [], r = null, a;
    }
  };
}
function sm(o, r, a, l, c, f) {
  var v = o[0], p = o[1], _ = r[0], x = r[1], S = 0, m = 1, E = _ - v, k = x - p, w;
  if (w = a - v, !(!E && w > 0)) {
    if (w /= E, E < 0) {
      if (w < S) return;
      w < m && (m = w);
    } else if (E > 0) {
      if (w > m) return;
      w > S && (S = w);
    }
    if (w = c - v, !(!E && w < 0)) {
      if (w /= E, E < 0) {
        if (w > m) return;
        w > S && (S = w);
      } else if (E > 0) {
        if (w < S) return;
        w < m && (m = w);
      }
      if (w = l - p, !(!k && w > 0)) {
        if (w /= k, k < 0) {
          if (w < S) return;
          w < m && (m = w);
        } else if (k > 0) {
          if (w > m) return;
          w > S && (S = w);
        }
        if (w = f - p, !(!k && w < 0)) {
          if (w /= k, k < 0) {
            if (w > m) return;
            w > S && (S = w);
          } else if (k > 0) {
            if (w < S) return;
            w < m && (m = w);
          }
          return S > 0 && (o[0] = v + S * E, o[1] = p + S * k), m < 1 && (r[0] = v + m * E, r[1] = p + m * k), !0;
        }
      }
    }
  }
}
function wr(o, r) {
  return Ne(o[0] - r[0]) < ve && Ne(o[1] - r[1]) < ve;
}
function yr(o, r, a, l) {
  this.x = o, this.z = r, this.o = a, this.e = l, this.v = !1, this.n = this.p = null;
}
function nc(o, r, a, l, c) {
  var f = [], v = [], p, _;
  if (o.forEach(function(w) {
    if (!((T = w.length - 1) <= 0)) {
      var T, C = w[0], P = w[T], A;
      if (wr(C, P)) {
        for (c.lineStart(), p = 0; p < T; ++p) c.point((C = w[p])[0], C[1]);
        c.lineEnd();
        return;
      }
      f.push(A = new yr(C, w, null, !0)), v.push(A.o = new yr(C, null, A, !1)), f.push(A = new yr(P, w, null, !1)), v.push(A.o = new yr(P, null, A, !0));
    }
  }), !!f.length) {
    for (v.sort(r), xu(f), xu(v), p = 0, _ = v.length; p < _; ++p)
      v[p].e = a = !a;
    for (var x = f[0], S, m; ; ) {
      for (var E = x, k = !0; E.v; ) if ((E = E.n) === x) return;
      S = E.z, c.lineStart();
      do {
        if (E.v = E.o.v = !0, E.e) {
          if (k)
            for (p = 0, _ = S.length; p < _; ++p) c.point((m = S[p])[0], m[1]);
          else
            l(E.x, E.n.x, 1, c);
          E = E.n;
        } else {
          if (k)
            for (S = E.p.z, p = S.length - 1; p >= 0; --p) c.point((m = S[p])[0], m[1]);
          else
            l(E.x, E.p.x, -1, c);
          E = E.p;
        }
        E = E.o, S = E.z, k = !k;
      } while (!E.v);
      c.lineEnd();
    }
  }
}
function xu(o) {
  if (r = o.length) {
    for (var r, a = 0, l = o[0], c; ++a < r; )
      l.n = c = o[a], c.p = l, l = c;
    l.n = c = o[0], c.p = l;
  }
}
function rc(o, r) {
  return o < r ? -1 : o > r ? 1 : o >= r ? 0 : NaN;
}
function am(o) {
  return o.length === 1 && (o = om(o)), {
    left: function(r, a, l, c) {
      for (l == null && (l = 0), c == null && (c = r.length); l < c; ) {
        var f = l + c >>> 1;
        o(r[f], a) < 0 ? l = f + 1 : c = f;
      }
      return l;
    },
    right: function(r, a, l, c) {
      for (l == null && (l = 0), c == null && (c = r.length); l < c; ) {
        var f = l + c >>> 1;
        o(r[f], a) > 0 ? c = f : l = f + 1;
      }
      return l;
    }
  };
}
function om(o) {
  return function(r, a) {
    return rc(o(r), a);
  };
}
am(rc);
function ic(o) {
  for (var r = o.length, a, l = -1, c = 0, f, v; ++l < r; ) c += o[l].length;
  for (f = new Array(c); --r >= 0; )
    for (v = o[r], a = v.length; --a >= 0; )
      f[--c] = v[a];
  return f;
}
var Fn = 1e9, vr = -Fn;
function um(o, r, a, l) {
  function c(x, S) {
    return o <= x && x <= a && r <= S && S <= l;
  }
  function f(x, S, m, E) {
    var k = 0, w = 0;
    if (x == null || (k = v(x, m)) !== (w = v(S, m)) || _(x, S) < 0 ^ m > 0)
      do
        E.point(k === 0 || k === 3 ? o : a, k > 1 ? l : r);
      while ((k = (k + m + 4) % 4) !== w);
    else
      E.point(S[0], S[1]);
  }
  function v(x, S) {
    return Ne(x[0] - o) < ve ? S > 0 ? 0 : 3 : Ne(x[0] - a) < ve ? S > 0 ? 2 : 1 : Ne(x[1] - r) < ve ? S > 0 ? 1 : 0 : S > 0 ? 3 : 2;
  }
  function p(x, S) {
    return _(x.x, S.x);
  }
  function _(x, S) {
    var m = v(x, 1), E = v(S, 1);
    return m !== E ? m - E : m === 0 ? S[1] - x[1] : m === 1 ? x[0] - S[0] : m === 2 ? x[1] - S[1] : S[0] - x[0];
  }
  return function(x) {
    var S = x, m = tc(), E, k, w, T, C, P, A, L, G, M, $, Y = {
      point: U,
      lineStart: te,
      lineEnd: ae,
      polygonStart: ie,
      polygonEnd: ee
    };
    function U(ne, ue) {
      c(ne, ue) && S.point(ne, ue);
    }
    function X() {
      for (var ne = 0, ue = 0, ye = k.length; ue < ye; ++ue)
        for (var ke = k[ue], Se = 1, j = ke.length, Le = ke[0], Ie, Ae, se = Le[0], ft = Le[1]; Se < j; ++Se)
          Ie = se, Ae = ft, Le = ke[Se], se = Le[0], ft = Le[1], Ae <= l ? ft > l && (se - Ie) * (l - Ae) > (ft - Ae) * (o - Ie) && ++ne : ft <= l && (se - Ie) * (l - Ae) < (ft - Ae) * (o - Ie) && --ne;
      return ne;
    }
    function ie() {
      S = m, E = [], k = [], $ = !0;
    }
    function ee() {
      var ne = X(), ue = $ && ne, ye = (E = ic(E)).length;
      (ue || ye) && (x.polygonStart(), ue && (x.lineStart(), f(null, null, 1, x), x.lineEnd()), ye && nc(E, p, ne, f, x), x.polygonEnd()), S = x, E = k = w = null;
    }
    function te() {
      Y.point = q, k && k.push(w = []), M = !0, G = !1, A = L = NaN;
    }
    function ae() {
      E && (q(T, C), P && G && m.rejoin(), E.push(m.result())), Y.point = U, G && S.lineEnd();
    }
    function q(ne, ue) {
      var ye = c(ne, ue);
      if (k && w.push([ne, ue]), M)
        T = ne, C = ue, P = ye, M = !1, ye && (S.lineStart(), S.point(ne, ue));
      else if (ye && G) S.point(ne, ue);
      else {
        var ke = [A = Math.max(vr, Math.min(Fn, A)), L = Math.max(vr, Math.min(Fn, L))], Se = [ne = Math.max(vr, Math.min(Fn, ne)), ue = Math.max(vr, Math.min(Fn, ue))];
        sm(ke, Se, o, r, a, l) ? (G || (S.lineStart(), S.point(ke[0], ke[1])), S.point(Se[0], Se[1]), ye || S.lineEnd(), $ = !1) : ye && (S.lineStart(), S.point(ne, ue), $ = !1);
      }
      A = ne, L = ue, G = ye;
    }
    return Y;
  };
}
var zi = Pt();
function lm(o, r) {
  var a = r[0], l = r[1], c = [xe(a), -_e(a), 0], f = 0, v = 0;
  zi.reset();
  for (var p = 0, _ = o.length; p < _; ++p)
    if (S = (x = o[p]).length)
      for (var x, S, m = x[S - 1], E = m[0], k = m[1] / 2 + fu, w = xe(k), T = _e(k), C = 0; C < S; ++C, E = A, w = G, T = M, m = P) {
        var P = x[C], A = P[0], L = P[1] / 2 + fu, G = xe(L), M = _e(L), $ = A - E, Y = $ >= 0 ? 1 : -1, U = Y * $, X = U > ce, ie = w * G;
        if (zi.add(hn(ie * Y * xe(U), T * M + ie * _e(U))), f += X ? $ + Y * lt : $, X ^ E >= a ^ A >= a) {
          var ee = Xr(fn(m), fn(P));
          ys(ee);
          var te = Xr(c, ee);
          ys(te);
          var ae = (X ^ $ >= 0 ? -1 : 1) * Ut(te[2]);
          (l > ae || l === ae && (ee[0] || ee[1])) && (v += X ^ $ >= 0 ? 1 : -1);
        }
      }
  return (f < -ve || f < ve && zi < -ve) ^ v & 1;
}
Pt();
function Eu(o) {
  return o;
}
Pt();
Pt();
var gn = 1 / 0, jr = gn, Un = -gn, Vr = Un, ku = {
  point: cm,
  lineStart: Dn,
  lineEnd: Dn,
  polygonStart: Dn,
  polygonEnd: Dn,
  result: function() {
    var o = [[gn, jr], [Un, Vr]];
    return Un = Vr = -(jr = gn = 1 / 0), o;
  }
};
function cm(o, r) {
  o < gn && (gn = o), o > Un && (Un = o), r < jr && (jr = r), r > Vr && (Vr = r);
}
Pt();
function sc(o, r, a, l) {
  return function(c, f) {
    var v = r(f), p = c.invert(l[0], l[1]), _ = tc(), x = r(_), S = !1, m, E, k, w = {
      point: T,
      lineStart: P,
      lineEnd: A,
      polygonStart: function() {
        w.point = L, w.lineStart = G, w.lineEnd = M, E = [], m = [];
      },
      polygonEnd: function() {
        w.point = T, w.lineStart = P, w.lineEnd = A, E = ic(E);
        var $ = lm(m, p);
        E.length ? (S || (f.polygonStart(), S = !0), nc(E, fm, $, a, f)) : $ && (S || (f.polygonStart(), S = !0), f.lineStart(), a(null, null, 1, f), f.lineEnd()), S && (f.polygonEnd(), S = !1), E = m = null;
      },
      sphere: function() {
        f.polygonStart(), f.lineStart(), a(null, null, 1, f), f.lineEnd(), f.polygonEnd();
      }
    };
    function T($, Y) {
      var U = c($, Y);
      o($ = U[0], Y = U[1]) && f.point($, Y);
    }
    function C($, Y) {
      var U = c($, Y);
      v.point(U[0], U[1]);
    }
    function P() {
      w.point = C, v.lineStart();
    }
    function A() {
      w.point = T, v.lineEnd();
    }
    function L($, Y) {
      k.push([$, Y]);
      var U = c($, Y);
      x.point(U[0], U[1]);
    }
    function G() {
      x.lineStart(), k = [];
    }
    function M() {
      L(k[0][0], k[0][1]), x.lineEnd();
      var $ = x.clean(), Y = _.result(), U, X = Y.length, ie, ee, te;
      if (k.pop(), m.push(k), k = null, !!X) {
        if ($ & 1) {
          if (ee = Y[0], (ie = ee.length - 1) > 0) {
            for (S || (f.polygonStart(), S = !0), f.lineStart(), U = 0; U < ie; ++U) f.point((te = ee[U])[0], te[1]);
            f.lineEnd();
          }
          return;
        }
        X > 1 && $ & 2 && Y.push(Y.pop().concat(Y.shift())), E.push(Y.filter(hm));
      }
    }
    return w;
  };
}
function hm(o) {
  return o.length > 1;
}
function fm(o, r) {
  return ((o = o.x)[0] < 0 ? o[1] - ut - ve : ut - o[1]) - ((r = r.x)[0] < 0 ? r[1] - ut - ve : ut - r[1]);
}
const Su = sc(
  function() {
    return !0;
  },
  gm,
  vm,
  [-ce, -ut]
);
function gm(o) {
  var r = NaN, a = NaN, l = NaN, c;
  return {
    lineStart: function() {
      o.lineStart(), c = 1;
    },
    point: function(f, v) {
      var p = f > 0 ? ce : -ce, _ = Ne(f - r);
      Ne(_ - ce) < ve ? (o.point(r, a = (a + v) / 2 > 0 ? ut : -ut), o.point(l, a), o.lineEnd(), o.lineStart(), o.point(p, a), o.point(f, a), c = 0) : l !== p && _ >= ce && (Ne(r - l) < ve && (r -= l * ve), Ne(f - p) < ve && (f -= p * ve), a = ym(r, a, f, v), o.point(l, a), o.lineEnd(), o.lineStart(), o.point(p, a), c = 0), o.point(r = f, a = v), l = p;
    },
    lineEnd: function() {
      o.lineEnd(), r = a = NaN;
    },
    clean: function() {
      return 2 - c;
    }
  };
}
function ym(o, r, a, l) {
  var c, f, v = xe(o - a);
  return Ne(v) > ve ? tm((xe(r) * (f = _e(l)) * xe(a) - xe(l) * (c = _e(r)) * xe(o)) / (c * f * v)) : (r + l) / 2;
}
function vm(o, r, a, l) {
  var c;
  if (o == null)
    c = a * ut, l.point(-ce, c), l.point(0, c), l.point(ce, c), l.point(ce, 0), l.point(ce, -c), l.point(0, -c), l.point(-ce, -c), l.point(-ce, 0), l.point(-ce, c);
  else if (Ne(o[0] - r[0]) > ve) {
    var f = o[0] < r[0] ? ce : -ce;
    c = a * f / 2, l.point(-f, c), l.point(0, c), l.point(f, c);
  } else
    l.point(r[0], r[1]);
}
function pm(o, r) {
  var a = _e(o), l = a > 0, c = Ne(a) > ve;
  function f(S, m, E, k) {
    im(k, o, r, E, S, m);
  }
  function v(S, m) {
    return _e(S) * _e(m) > a;
  }
  function p(S) {
    var m, E, k, w, T;
    return {
      lineStart: function() {
        w = k = !1, T = 1;
      },
      point: function(C, P) {
        var A = [C, P], L, G = v(C, P), M = l ? G ? 0 : x(C, P) : G ? x(C + (C < 0 ? ce : -ce), P) : 0;
        if (!m && (w = k = G) && S.lineStart(), G !== k && (L = _(m, A), (!L || wr(m, L) || wr(A, L)) && (A[0] += ve, A[1] += ve, G = v(A[0], A[1]))), G !== k)
          T = 0, G ? (S.lineStart(), L = _(A, m), S.point(L[0], L[1])) : (L = _(m, A), S.point(L[0], L[1]), S.lineEnd()), m = L;
        else if (c && m && l ^ G) {
          var $;
          !(M & E) && ($ = _(A, m, !0)) && (T = 0, l ? (S.lineStart(), S.point($[0][0], $[0][1]), S.point($[1][0], $[1][1]), S.lineEnd()) : (S.point($[1][0], $[1][1]), S.lineEnd(), S.lineStart(), S.point($[0][0], $[0][1])));
        }
        G && (!m || !wr(m, A)) && S.point(A[0], A[1]), m = A, k = G, E = M;
      },
      lineEnd: function() {
        k && S.lineEnd(), m = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return T | (w && k) << 1;
      }
    };
  }
  function _(S, m, E) {
    var k = fn(S), w = fn(m), T = [1, 0, 0], C = Xr(k, w), P = fr(C, C), A = C[0], L = P - A * A;
    if (!L) return !E && S;
    var G = a * P / L, M = -a * A / L, $ = Xr(T, C), Y = gr(T, G), U = gr(C, M);
    qi(Y, U);
    var X = $, ie = fr(Y, X), ee = fr(X, X), te = ie * ie - ee * (fr(Y, Y) - 1);
    if (!(te < 0)) {
      var ae = dn(te), q = gr(X, (-ie - ae) / ee);
      if (qi(q, Y), q = gs(q), !E) return q;
      var ne = S[0], ue = m[0], ye = S[1], ke = m[1], Se;
      ue < ne && (Se = ne, ne = ue, ue = Se);
      var j = ue - ne, Le = Ne(j - ce) < ve, Ie = Le || j < ve;
      if (!Le && ke < ye && (Se = ye, ye = ke, ke = Se), Ie ? Le ? ye + ke > 0 ^ q[1] < (Ne(q[0] - ne) < ve ? ye : ke) : ye <= q[1] && q[1] <= ke : j > ce ^ (ne <= q[0] && q[0] <= ue)) {
        var Ae = gr(X, (-ie + ae) / ee);
        return qi(Ae, Y), [q, gs(Ae)];
      }
    }
  }
  function x(S, m) {
    var E = l ? o : ce - o, k = 0;
    return S < -E ? k |= 1 : S > E && (k |= 2), m < -E ? k |= 4 : m > E && (k |= 8), k;
  }
  return sc(v, p, f, l ? [0, -o] : [-ce, o - ce]);
}
function ac(o) {
  return function(r) {
    var a = new ps();
    for (var l in o) a[l] = o[l];
    return a.stream = r, a;
  };
}
function ps() {
}
ps.prototype = {
  constructor: ps,
  point: function(o, r) {
    this.stream.point(o, r);
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
function oc(o, r, a) {
  var l = r[1][0] - r[0][0], c = r[1][1] - r[0][1], f = o.clipExtent && o.clipExtent();
  o.scale(150).translate([0, 0]), f != null && o.clipExtent(null), nm(a, o.stream(ku));
  var v = ku.result(), p = Math.min(l / (v[1][0] - v[0][0]), c / (v[1][1] - v[0][1])), _ = +r[0][0] + (l - p * (v[1][0] + v[0][0])) / 2, x = +r[0][1] + (c - p * (v[1][1] + v[0][1])) / 2;
  return f != null && o.clipExtent(f), o.scale(p * 150).translate([_, x]);
}
function mm(o, r, a) {
  return oc(o, [[0, 0], r], a);
}
var Iu = 16, dm = _e(30 * Xe);
function wu(o, r) {
  return +r ? xm(o, r) : _m(o);
}
function _m(o) {
  return ac({
    point: function(r, a) {
      r = o(r, a), this.stream.point(r[0], r[1]);
    }
  });
}
function xm(o, r) {
  function a(l, c, f, v, p, _, x, S, m, E, k, w, T, C) {
    var P = x - l, A = S - c, L = P * P + A * A;
    if (L > 4 * r && T--) {
      var G = v + E, M = p + k, $ = _ + w, Y = dn(G * G + M * M + $ * $), U = Ut($ /= Y), X = Ne(Ne($) - 1) < ve || Ne(f - m) < ve ? (f + m) / 2 : hn(M, G), ie = o(X, U), ee = ie[0], te = ie[1], ae = ee - l, q = te - c, ne = A * ae - P * q;
      (ne * ne / L > r || Ne((P * ae + A * q) / L - 0.5) > 0.3 || v * E + p * k + _ * w < dm) && (a(l, c, f, v, p, _, ee, te, X, G /= Y, M /= Y, $, T, C), C.point(ee, te), a(ee, te, X, G, M, $, x, S, m, E, k, w, T, C));
    }
  }
  return function(l) {
    var c, f, v, p, _, x, S, m, E, k, w, T, C = {
      point: P,
      lineStart: A,
      lineEnd: G,
      polygonStart: function() {
        l.polygonStart(), C.lineStart = M;
      },
      polygonEnd: function() {
        l.polygonEnd(), C.lineStart = A;
      }
    };
    function P(U, X) {
      U = o(U, X), l.point(U[0], U[1]);
    }
    function A() {
      m = NaN, C.point = L, l.lineStart();
    }
    function L(U, X) {
      var ie = fn([U, X]), ee = o(U, X);
      a(m, E, S, k, w, T, m = ee[0], E = ee[1], S = U, k = ie[0], w = ie[1], T = ie[2], Iu, l), l.point(m, E);
    }
    function G() {
      C.point = P, l.lineEnd();
    }
    function M() {
      A(), C.point = $, C.lineEnd = Y;
    }
    function $(U, X) {
      L(c = U, X), f = m, v = E, p = k, _ = w, x = T, C.point = L;
    }
    function Y() {
      a(m, E, S, k, w, T, f, v, c, p, _, x, Iu, l), C.lineEnd = G, G();
    }
    return C;
  };
}
var Em = ac({
  point: function(o, r) {
    this.stream.point(o * Xe, r * Xe);
  }
});
function km(o) {
  return Sm(function() {
    return o;
  })();
}
function Sm(o) {
  var r, a = 150, l = 480, c = 250, f, v, p = 0, _ = 0, x = 0, S = 0, m = 0, E, k, w = null, T = Su, C = null, P, A, L, G = Eu, M = 0.5, $ = wu(ee, M), Y, U;
  function X(q) {
    return q = k(q[0] * Xe, q[1] * Xe), [q[0] * a + f, v - q[1] * a];
  }
  function ie(q) {
    return q = k.invert((q[0] - f) / a, (v - q[1]) / a), q && [q[0] * It, q[1] * It];
  }
  function ee(q, ne) {
    return q = r(q, ne), [q[0] * a + f, v - q[1] * a];
  }
  X.stream = function(q) {
    return Y && U === q ? Y : Y = Em(T(E, $(G(U = q))));
  }, X.clipAngle = function(q) {
    return arguments.length ? (T = +q ? pm(w = q * Xe, 6 * Xe) : (w = null, Su), ae()) : w * It;
  }, X.clipExtent = function(q) {
    return arguments.length ? (G = q == null ? (C = P = A = L = null, Eu) : um(C = +q[0][0], P = +q[0][1], A = +q[1][0], L = +q[1][1]), ae()) : C == null ? null : [[C, P], [A, L]];
  }, X.scale = function(q) {
    return arguments.length ? (a = +q, te()) : a;
  }, X.translate = function(q) {
    return arguments.length ? (l = +q[0], c = +q[1], te()) : [l, c];
  }, X.center = function(q) {
    return arguments.length ? (p = q[0] % 360 * Xe, _ = q[1] % 360 * Xe, te()) : [p * It, _ * It];
  }, X.rotate = function(q) {
    return arguments.length ? (x = q[0] % 360 * Xe, S = q[1] % 360 * Xe, m = q.length > 2 ? q[2] % 360 * Xe : 0, te()) : [x * It, S * It, m * It];
  }, X.precision = function(q) {
    return arguments.length ? ($ = wu(ee, M = q * q), ae()) : dn(M);
  }, X.fitExtent = function(q, ne) {
    return oc(X, q, ne);
  }, X.fitSize = function(q, ne) {
    return mm(X, q, ne);
  };
  function te() {
    k = ec(E = rm(x, S, m), r);
    var q = r(p, _);
    return f = l - q[0] * a, v = c + q[1] * a, ae();
  }
  function ae() {
    return Y = U = null, X;
  }
  return function() {
    return r = o.apply(this, arguments), X.invert = r.invert && ie, te();
  };
}
function uc(o) {
  return function(r, a) {
    var l = _e(r), c = _e(a), f = o(l * c);
    return [
      f * c * xe(r),
      f * xe(a)
    ];
  };
}
function lc(o) {
  return function(r, a) {
    var l = dn(r * r + a * a), c = o(l), f = xe(c), v = _e(c);
    return [
      hn(r * f, l * v),
      Ut(l && a * f / l)
    ];
  };
}
var Im = uc(function(o) {
  return dn(2 / (1 + o));
});
Im.invert = lc(function(o) {
  return 2 * Ut(o / 2);
});
var cc = uc(function(o) {
  return (o = Kl(o)) && o / xe(o);
});
cc.invert = lc(function(o) {
  return o;
});
function wm() {
  return km(cc).scale(79.4188).clipAngle(180 - 1e-3);
}
function Nu(o, r) {
  return [o, r];
}
Nu.invert = Nu;
var Nm = Object.defineProperty, _n = (o, r) => Nm(o, "name", { value: r, configurable: !0 }), { BufferOp: bm, GeoJSONReader: Om, GeoJSONWriter: Tm } = em;
function hc(o, r, a) {
  a = a || {};
  var l = a.units || "kilometers", c = a.steps || 8;
  if (!o)
    throw new Error("geojson is required");
  if (typeof a != "object")
    throw new Error("options must be an object");
  if (typeof c != "number")
    throw new Error("steps must be an number");
  if (r === void 0)
    throw new Error("radius is required");
  if (c <= 0)
    throw new Error("steps must be greater than 0");
  var f = [];
  switch (o.type) {
    case "GeometryCollection":
      return mn(o, function(v) {
        var p = qn(v, r, l, c);
        p && f.push(p);
      }), Et(f);
    case "FeatureCollection":
      return zr(o, function(v) {
        var p = qn(v, r, l, c);
        p && zr(p, function(_) {
          _ && f.push(_);
        });
      }), Et(f);
  }
  return qn(o, r, l, c);
}
_n(hc, "buffer");
function qn(o, r, a, l) {
  var c = o.properties || {}, f = o.type === "Feature" ? o.geometry : o;
  if (f.type === "GeometryCollection") {
    var v = [];
    return mn(o, function(T) {
      var C = qn(T, r, a, l);
      C && v.push(C);
    }), Et(v);
  }
  var p = fc(f), _ = {
    type: f.type,
    coordinates: zs(f.coordinates, p)
  }, x = new Om(), S = x.read(_), m = Bs(Qr(r, a), "meters"), E = bm.bufferOp(S, m, l), k = new Tm();
  if (E = k.write(E), !qs(E.coordinates)) {
    var w = {
      type: E.type,
      coordinates: Ys(E.coordinates, p)
    };
    return et(w, c);
  }
}
_n(qn, "bufferFeature");
function qs(o) {
  return Array.isArray(o[0]) ? qs(o[0]) : isNaN(o[0]);
}
_n(qs, "coordsIsNaN");
function zs(o, r) {
  return typeof o[0] != "object" ? r(o) : o.map(function(a) {
    return zs(a, r);
  });
}
_n(zs, "projectCoords");
function Ys(o, r) {
  return typeof o[0] != "object" ? r.invert(o) : o.map(function(a) {
    return Ys(a, r);
  });
}
_n(Ys, "unprojectCoords");
function fc(o) {
  var r = Jl(o).geometry.coordinates, a = [-r[0], -r[1]];
  return wm().rotate(a).scale(Me);
}
_n(fc, "defineProjection");
var Rm = hc;
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
function Lm(o, r) {
  var a = { label: 0, sent: function() {
    if (f[0] & 1) throw f[1];
    return f[1];
  }, trys: [], ops: [] }, l, c, f, v;
  return v = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
    return this;
  }), v;
  function p(x) {
    return function(S) {
      return _([x, S]);
    };
  }
  function _(x) {
    if (l) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (l = 1, c && (f = x[0] & 2 ? c.return : x[0] ? c.throw || ((f = c.return) && f.call(c), 0) : c.next) && !(f = f.call(c, x[1])).done) return f;
      switch (c = 0, f && (x = [x[0] & 2, f.value]), x[0]) {
        case 0:
        case 1:
          f = x;
          break;
        case 4:
          return a.label++, { value: x[1], done: !1 };
        case 5:
          a.label++, c = x[1], x = [0];
          continue;
        case 7:
          x = a.ops.pop(), a.trys.pop();
          continue;
        default:
          if (f = a.trys, !(f = f.length > 0 && f[f.length - 1]) && (x[0] === 6 || x[0] === 2)) {
            a = 0;
            continue;
          }
          if (x[0] === 3 && (!f || x[1] > f[0] && x[1] < f[3])) {
            a.label = x[1];
            break;
          }
          if (x[0] === 6 && a.label < f[1]) {
            a.label = f[1], f = x;
            break;
          }
          if (f && a.label < f[2]) {
            a.label = f[2], a.ops.push(x);
            break;
          }
          f[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      x = r.call(o, a);
    } catch (S) {
      x = [6, S], c = 0;
    } finally {
      l = f = 0;
    }
    if (x[0] & 5) throw x[1];
    return { value: x[0] ? x[1] : void 0, done: !0 };
  }
}
var Rt = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(r, a) {
      this.next = null, this.key = r, this.data = a, this.left = null, this.right = null;
    }
    return o;
  }()
);
function Cm(o, r) {
  return o > r ? 1 : o < r ? -1 : 0;
}
function Nt(o, r, a) {
  for (var l = new Rt(null, null), c = l, f = l; ; ) {
    var v = a(o, r.key);
    if (v < 0) {
      if (r.left === null)
        break;
      if (a(o, r.left.key) < 0) {
        var p = r.left;
        if (r.left = p.right, p.right = r, r = p, r.left === null)
          break;
      }
      f.left = r, f = r, r = r.left;
    } else if (v > 0) {
      if (r.right === null)
        break;
      if (a(o, r.right.key) > 0) {
        var p = r.right;
        if (r.right = p.left, p.left = r, r = p, r.right === null)
          break;
      }
      c.right = r, c = r, r = r.right;
    } else
      break;
  }
  return c.right = r.left, f.left = r.right, r.left = l.right, r.right = l.left, r;
}
function Yi(o, r, a, l) {
  var c = new Rt(o, r);
  if (a === null)
    return c.left = c.right = null, c;
  a = Nt(o, a, l);
  var f = l(o, a.key);
  return f < 0 ? (c.left = a.left, c.right = a, a.left = null) : f >= 0 && (c.right = a.right, c.left = a, a.right = null), c;
}
function bu(o, r, a) {
  var l = null, c = null;
  if (r) {
    r = Nt(o, r, a);
    var f = a(r.key, o);
    f === 0 ? (l = r.left, c = r.right) : f < 0 ? (c = r.right, r.right = null, l = r) : (l = r.left, r.left = null, c = r);
  }
  return { left: l, right: c };
}
function Pm(o, r, a) {
  return r === null ? o : (o === null || (r = Nt(o.key, r, a), r.left = o), r);
}
function ms(o, r, a, l, c) {
  if (o) {
    l("" + r + (a ? "└── " : "├── ") + c(o) + `
`);
    var f = r + (a ? "    " : "│   ");
    o.left && ms(o.left, f, !1, l, c), o.right && ms(o.right, f, !0, l, c);
  }
}
var Us = (
  /** @class */
  function() {
    function o(r) {
      r === void 0 && (r = Cm), this._root = null, this._size = 0, this._comparator = r;
    }
    return o.prototype.insert = function(r, a) {
      return this._size++, this._root = Yi(r, a, this._root, this._comparator);
    }, o.prototype.add = function(r, a) {
      var l = new Rt(r, a);
      this._root === null && (l.left = l.right = null, this._size++, this._root = l);
      var c = this._comparator, f = Nt(r, this._root, c), v = c(r, f.key);
      return v === 0 ? this._root = f : (v < 0 ? (l.left = f.left, l.right = f, f.left = null) : v > 0 && (l.right = f.right, l.left = f, f.right = null), this._size++, this._root = l), this._root;
    }, o.prototype.remove = function(r) {
      this._root = this._remove(r, this._root, this._comparator);
    }, o.prototype._remove = function(r, a, l) {
      var c;
      if (a === null)
        return null;
      a = Nt(r, a, l);
      var f = l(r, a.key);
      return f === 0 ? (a.left === null ? c = a.right : (c = Nt(r, a.left, l), c.right = a.right), this._size--, c) : a;
    }, o.prototype.pop = function() {
      var r = this._root;
      if (r) {
        for (; r.left; )
          r = r.left;
        return this._root = Nt(r.key, this._root, this._comparator), this._root = this._remove(r.key, this._root, this._comparator), { key: r.key, data: r.data };
      }
      return null;
    }, o.prototype.findStatic = function(r) {
      for (var a = this._root, l = this._comparator; a; ) {
        var c = l(r, a.key);
        if (c === 0)
          return a;
        c < 0 ? a = a.left : a = a.right;
      }
      return null;
    }, o.prototype.find = function(r) {
      return this._root && (this._root = Nt(r, this._root, this._comparator), this._comparator(r, this._root.key) !== 0) ? null : this._root;
    }, o.prototype.contains = function(r) {
      for (var a = this._root, l = this._comparator; a; ) {
        var c = l(r, a.key);
        if (c === 0)
          return !0;
        c < 0 ? a = a.left : a = a.right;
      }
      return !1;
    }, o.prototype.forEach = function(r, a) {
      for (var l = this._root, c = [], f = !1; !f; )
        l !== null ? (c.push(l), l = l.left) : c.length !== 0 ? (l = c.pop(), r.call(a, l), l = l.right) : f = !0;
      return this;
    }, o.prototype.range = function(r, a, l, c) {
      for (var f = [], v = this._comparator, p = this._root, _; f.length !== 0 || p; )
        if (p)
          f.push(p), p = p.left;
        else {
          if (p = f.pop(), _ = v(p.key, a), _ > 0)
            break;
          if (v(p.key, r) >= 0 && l.call(c, p))
            return this;
          p = p.right;
        }
      return this;
    }, o.prototype.keys = function() {
      var r = [];
      return this.forEach(function(a) {
        var l = a.key;
        return r.push(l);
      }), r;
    }, o.prototype.values = function() {
      var r = [];
      return this.forEach(function(a) {
        var l = a.data;
        return r.push(l);
      }), r;
    }, o.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, o.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, o.prototype.minNode = function(r) {
      if (r === void 0 && (r = this._root), r)
        for (; r.left; )
          r = r.left;
      return r;
    }, o.prototype.maxNode = function(r) {
      if (r === void 0 && (r = this._root), r)
        for (; r.right; )
          r = r.right;
      return r;
    }, o.prototype.at = function(r) {
      for (var a = this._root, l = !1, c = 0, f = []; !l; )
        if (a)
          f.push(a), a = a.left;
        else if (f.length > 0) {
          if (a = f.pop(), c === r)
            return a;
          c++, a = a.right;
        } else
          l = !0;
      return null;
    }, o.prototype.next = function(r) {
      var a = this._root, l = null;
      if (r.right) {
        for (l = r.right; l.left; )
          l = l.left;
        return l;
      }
      for (var c = this._comparator; a; ) {
        var f = c(r.key, a.key);
        if (f === 0)
          break;
        f < 0 ? (l = a, a = a.left) : a = a.right;
      }
      return l;
    }, o.prototype.prev = function(r) {
      var a = this._root, l = null;
      if (r.left !== null) {
        for (l = r.left; l.right; )
          l = l.right;
        return l;
      }
      for (var c = this._comparator; a; ) {
        var f = c(r.key, a.key);
        if (f === 0)
          break;
        f < 0 ? a = a.left : (l = a, a = a.right);
      }
      return l;
    }, o.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, o.prototype.toList = function() {
      return Mm(this._root);
    }, o.prototype.load = function(r, a, l) {
      a === void 0 && (a = []), l === void 0 && (l = !1);
      var c = r.length, f = this._comparator;
      if (l && xs(r, a, 0, c - 1, f), this._root === null)
        this._root = ds(r, a, 0, c), this._size = c;
      else {
        var v = Dm(this.toList(), Am(r, a), f);
        c = this._size + c, this._root = _s({ head: v }, 0, c);
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
    }), o.prototype.toString = function(r) {
      r === void 0 && (r = function(l) {
        return String(l.key);
      });
      var a = [];
      return ms(this._root, "", !0, function(l) {
        return a.push(l);
      }, r), a.join("");
    }, o.prototype.update = function(r, a, l) {
      var c = this._comparator, f = bu(r, this._root, c), v = f.left, p = f.right;
      c(r, a) < 0 ? p = Yi(a, l, p, c) : v = Yi(a, l, v, c), this._root = Pm(v, p, c);
    }, o.prototype.split = function(r) {
      return bu(r, this._root, this._comparator);
    }, o.prototype[Symbol.iterator] = function() {
      var r, a, l;
      return Lm(this, function(c) {
        switch (c.label) {
          case 0:
            r = this._root, a = [], l = !1, c.label = 1;
          case 1:
            return l ? [3, 6] : r === null ? [3, 2] : (a.push(r), r = r.left, [3, 5]);
          case 2:
            return a.length === 0 ? [3, 4] : (r = a.pop(), [4, r]);
          case 3:
            return c.sent(), r = r.right, [3, 5];
          case 4:
            l = !0, c.label = 5;
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
function ds(o, r, a, l) {
  var c = l - a;
  if (c > 0) {
    var f = a + Math.floor(c / 2), v = o[f], p = r[f], _ = new Rt(v, p);
    return _.left = ds(o, r, a, f), _.right = ds(o, r, f + 1, l), _;
  }
  return null;
}
function Am(o, r) {
  for (var a = new Rt(null, null), l = a, c = 0; c < o.length; c++)
    l = l.next = new Rt(o[c], r[c]);
  return l.next = null, a.next;
}
function Mm(o) {
  for (var r = o, a = [], l = !1, c = new Rt(null, null), f = c; !l; )
    r ? (a.push(r), r = r.left) : a.length > 0 ? (r = f = f.next = a.pop(), r = r.right) : l = !0;
  return f.next = null, c.next;
}
function _s(o, r, a) {
  var l = a - r;
  if (l > 0) {
    var c = r + Math.floor(l / 2), f = _s(o, r, c), v = o.head;
    return v.left = f, o.head = o.head.next, v.right = _s(o, c + 1, a), v;
  }
  return null;
}
function Dm(o, r, a) {
  for (var l = new Rt(null, null), c = l, f = o, v = r; f !== null && v !== null; )
    a(f.key, v.key) < 0 ? (c.next = f, f = f.next) : (c.next = v, v = v.next), c = c.next;
  return f !== null ? c.next = f : v !== null && (c.next = v), l.next;
}
function xs(o, r, a, l, c) {
  if (!(a >= l)) {
    for (var f = o[a + l >> 1], v = a - 1, p = l + 1; ; ) {
      do
        v++;
      while (c(o[v], f) < 0);
      do
        p--;
      while (c(o[p], f) > 0);
      if (v >= p)
        break;
      var _ = o[v];
      o[v] = o[p], o[p] = _, _ = r[v], r[v] = r[p], r[p] = _;
    }
    xs(o, r, a, p, c), xs(o, r, p + 1, l, c);
  }
}
const xt = 11102230246251565e-32, Te = 134217729, Fm = (3 + 8 * xt) * xt;
function Ui(o, r, a, l, c) {
  let f, v, p, _, x = r[0], S = l[0], m = 0, E = 0;
  S > x == S > -x ? (f = x, x = r[++m]) : (f = S, S = l[++E]);
  let k = 0;
  if (m < o && E < a)
    for (S > x == S > -x ? (v = x + f, p = f - (v - x), x = r[++m]) : (v = S + f, p = f - (v - S), S = l[++E]), f = v, p !== 0 && (c[k++] = p); m < o && E < a; )
      S > x == S > -x ? (v = f + x, _ = v - f, p = f - (v - _) + (x - _), x = r[++m]) : (v = f + S, _ = v - f, p = f - (v - _) + (S - _), S = l[++E]), f = v, p !== 0 && (c[k++] = p);
  for (; m < o; )
    v = f + x, _ = v - f, p = f - (v - _) + (x - _), x = r[++m], f = v, p !== 0 && (c[k++] = p);
  for (; E < a; )
    v = f + S, _ = v - f, p = f - (v - _) + (S - _), S = l[++E], f = v, p !== 0 && (c[k++] = p);
  return (f !== 0 || k === 0) && (c[k++] = f), k;
}
function Gm(o, r) {
  let a = r[0];
  for (let l = 1; l < o; l++) a += r[l];
  return a;
}
function Wn(o) {
  return new Float64Array(o);
}
const Bm = (3 + 16 * xt) * xt, $m = (2 + 12 * xt) * xt, qm = (9 + 64 * xt) * xt * xt, rn = Wn(4), Ou = Wn(8), Tu = Wn(12), Ru = Wn(16), Pe = Wn(4);
function zm(o, r, a, l, c, f, v) {
  let p, _, x, S, m, E, k, w, T, C, P, A, L, G, M, $, Y, U;
  const X = o - c, ie = a - c, ee = r - f, te = l - f;
  G = X * te, E = Te * X, k = E - (E - X), w = X - k, E = Te * te, T = E - (E - te), C = te - T, M = w * C - (G - k * T - w * T - k * C), $ = ee * ie, E = Te * ee, k = E - (E - ee), w = ee - k, E = Te * ie, T = E - (E - ie), C = ie - T, Y = w * C - ($ - k * T - w * T - k * C), P = M - Y, m = M - P, rn[0] = M - (P + m) + (m - Y), A = G + P, m = A - G, L = G - (A - m) + (P - m), P = L - $, m = L - P, rn[1] = L - (P + m) + (m - $), U = A + P, m = U - A, rn[2] = A - (U - m) + (P - m), rn[3] = U;
  let ae = Gm(4, rn), q = $m * v;
  if (ae >= q || -ae >= q || (m = o - X, p = o - (X + m) + (m - c), m = a - ie, x = a - (ie + m) + (m - c), m = r - ee, _ = r - (ee + m) + (m - f), m = l - te, S = l - (te + m) + (m - f), p === 0 && _ === 0 && x === 0 && S === 0) || (q = qm * v + Fm * Math.abs(ae), ae += X * S + te * p - (ee * x + ie * _), ae >= q || -ae >= q)) return ae;
  G = p * te, E = Te * p, k = E - (E - p), w = p - k, E = Te * te, T = E - (E - te), C = te - T, M = w * C - (G - k * T - w * T - k * C), $ = _ * ie, E = Te * _, k = E - (E - _), w = _ - k, E = Te * ie, T = E - (E - ie), C = ie - T, Y = w * C - ($ - k * T - w * T - k * C), P = M - Y, m = M - P, Pe[0] = M - (P + m) + (m - Y), A = G + P, m = A - G, L = G - (A - m) + (P - m), P = L - $, m = L - P, Pe[1] = L - (P + m) + (m - $), U = A + P, m = U - A, Pe[2] = A - (U - m) + (P - m), Pe[3] = U;
  const ne = Ui(4, rn, 4, Pe, Ou);
  G = X * S, E = Te * X, k = E - (E - X), w = X - k, E = Te * S, T = E - (E - S), C = S - T, M = w * C - (G - k * T - w * T - k * C), $ = ee * x, E = Te * ee, k = E - (E - ee), w = ee - k, E = Te * x, T = E - (E - x), C = x - T, Y = w * C - ($ - k * T - w * T - k * C), P = M - Y, m = M - P, Pe[0] = M - (P + m) + (m - Y), A = G + P, m = A - G, L = G - (A - m) + (P - m), P = L - $, m = L - P, Pe[1] = L - (P + m) + (m - $), U = A + P, m = U - A, Pe[2] = A - (U - m) + (P - m), Pe[3] = U;
  const ue = Ui(ne, Ou, 4, Pe, Tu);
  G = p * S, E = Te * p, k = E - (E - p), w = p - k, E = Te * S, T = E - (E - S), C = S - T, M = w * C - (G - k * T - w * T - k * C), $ = _ * x, E = Te * _, k = E - (E - _), w = _ - k, E = Te * x, T = E - (E - x), C = x - T, Y = w * C - ($ - k * T - w * T - k * C), P = M - Y, m = M - P, Pe[0] = M - (P + m) + (m - Y), A = G + P, m = A - G, L = G - (A - m) + (P - m), P = L - $, m = L - P, Pe[1] = L - (P + m) + (m - $), U = A + P, m = U - A, Pe[2] = A - (U - m) + (P - m), Pe[3] = U;
  const ye = Ui(ue, Tu, 4, Pe, Ru);
  return Ru[ye - 1];
}
function Ym(o, r, a, l, c, f) {
  const v = (r - f) * (a - c), p = (o - c) * (l - f), _ = v - p, x = Math.abs(v + p);
  return Math.abs(_) >= Bm * x ? _ : -zm(o, r, a, l, c, f, x);
}
const An = (o, r) => o.ll.x <= r.x && r.x <= o.ur.x && o.ll.y <= r.y && r.y <= o.ur.y, Es = (o, r) => {
  if (r.ur.x < o.ll.x || o.ur.x < r.ll.x || r.ur.y < o.ll.y || o.ur.y < r.ll.y) return null;
  const a = o.ll.x < r.ll.x ? r.ll.x : o.ll.x, l = o.ur.x < r.ur.x ? o.ur.x : r.ur.x, c = o.ll.y < r.ll.y ? r.ll.y : o.ll.y, f = o.ur.y < r.ur.y ? o.ur.y : r.ur.y;
  return {
    ll: {
      x: a,
      y: c
    },
    ur: {
      x: l,
      y: f
    }
  };
};
let Ot = Number.EPSILON;
Ot === void 0 && (Ot = Math.pow(2, -52));
const Um = Ot * Ot, Lu = (o, r) => {
  if (-Ot < o && o < Ot && -Ot < r && r < Ot)
    return 0;
  const a = o - r;
  return a * a < Um * o * r ? 0 : o < r ? -1 : 1;
};
class Xm {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new Cu(), this.yRounder = new Cu();
  }
  round(r, a) {
    return {
      x: this.xRounder.round(r),
      y: this.yRounder.round(a)
    };
  }
}
class Cu {
  constructor() {
    this.tree = new Us(), this.round(0);
  }
  // Note: this can rounds input values backwards or forwards.
  //       You might ask, why not restrict this to just rounding
  //       forwards? Wouldn't that allow left endpoints to always
  //       remain left endpoints during splitting (never change to
  //       right). No - it wouldn't, because we snap intersections
  //       to endpoints (to establish independence from the segment
  //       angle for t-intersections).
  round(r) {
    const a = this.tree.add(r), l = this.tree.prev(a);
    if (l !== null && Lu(a.key, l.key) === 0)
      return this.tree.remove(r), l.key;
    const c = this.tree.next(a);
    return c !== null && Lu(a.key, c.key) === 0 ? (this.tree.remove(r), c.key) : r;
  }
}
const Xn = new Xm(), Nr = (o, r) => o.x * r.y - o.y * r.x, gc = (o, r) => o.x * r.x + o.y * r.y, Pu = (o, r, a) => {
  const l = Ym(o.x, o.y, r.x, r.y, a.x, a.y);
  return l > 0 ? -1 : l < 0 ? 1 : 0;
}, Wr = (o) => Math.sqrt(gc(o, o)), jm = (o, r, a) => {
  const l = {
    x: r.x - o.x,
    y: r.y - o.y
  }, c = {
    x: a.x - o.x,
    y: a.y - o.y
  };
  return Nr(c, l) / Wr(c) / Wr(l);
}, Vm = (o, r, a) => {
  const l = {
    x: r.x - o.x,
    y: r.y - o.y
  }, c = {
    x: a.x - o.x,
    y: a.y - o.y
  };
  return gc(c, l) / Wr(c) / Wr(l);
}, Au = (o, r, a) => r.y === 0 ? null : {
  x: o.x + r.x / r.y * (a - o.y),
  y: a
}, Mu = (o, r, a) => r.x === 0 ? null : {
  x: a,
  y: o.y + r.y / r.x * (a - o.x)
}, Wm = (o, r, a, l) => {
  if (r.x === 0) return Mu(a, l, o.x);
  if (l.x === 0) return Mu(o, r, a.x);
  if (r.y === 0) return Au(a, l, o.y);
  if (l.y === 0) return Au(o, r, a.y);
  const c = Nr(r, l);
  if (c == 0) return null;
  const f = {
    x: a.x - o.x,
    y: a.y - o.y
  }, v = Nr(f, r) / c, p = Nr(f, l) / c, _ = o.x + p * r.x, x = a.x + v * l.x, S = o.y + p * r.y, m = a.y + v * l.y, E = (_ + x) / 2, k = (S + m) / 2;
  return {
    x: E,
    y: k
  };
};
class je {
  // for ordering sweep events in the sweep event queue
  static compare(r, a) {
    const l = je.comparePoints(r.point, a.point);
    return l !== 0 ? l : (r.point !== a.point && r.link(a), r.isLeft !== a.isLeft ? r.isLeft ? 1 : -1 : Tt.compare(r.segment, a.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(r, a) {
    return r.x < a.x ? -1 : r.x > a.x ? 1 : r.y < a.y ? -1 : r.y > a.y ? 1 : 0;
  }
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(r, a) {
    r.events === void 0 ? r.events = [this] : r.events.push(this), this.point = r, this.isLeft = a;
  }
  link(r) {
    if (r.point === this.point)
      throw new Error("Tried to link already linked events");
    const a = r.point.events;
    for (let l = 0, c = a.length; l < c; l++) {
      const f = a[l];
      this.point.events.push(f), f.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const r = this.point.events.length;
    for (let a = 0; a < r; a++) {
      const l = this.point.events[a];
      if (l.segment.consumedBy === void 0)
        for (let c = a + 1; c < r; c++) {
          const f = this.point.events[c];
          f.consumedBy === void 0 && l.otherSE.point.events === f.otherSE.point.events && l.segment.consume(f.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const r = [];
    for (let a = 0, l = this.point.events.length; a < l; a++) {
      const c = this.point.events[a];
      c !== this && !c.segment.ringOut && c.segment.isInResult() && r.push(c);
    }
    return r;
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
  getLeftmostComparator(r) {
    const a = /* @__PURE__ */ new Map(), l = (c) => {
      const f = c.otherSE;
      a.set(c, {
        sine: jm(this.point, r.point, f.point),
        cosine: Vm(this.point, r.point, f.point)
      });
    };
    return (c, f) => {
      a.has(c) || l(c), a.has(f) || l(f);
      const {
        sine: v,
        cosine: p
      } = a.get(c), {
        sine: _,
        cosine: x
      } = a.get(f);
      return v >= 0 && _ >= 0 ? p < x ? 1 : p > x ? -1 : 0 : v < 0 && _ < 0 ? p < x ? -1 : p > x ? 1 : 0 : _ < v ? -1 : _ > v ? 1 : 0;
    };
  }
}
let Hm = 0;
class Tt {
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
  static compare(r, a) {
    const l = r.leftSE.point.x, c = a.leftSE.point.x, f = r.rightSE.point.x, v = a.rightSE.point.x;
    if (v < l) return 1;
    if (f < c) return -1;
    const p = r.leftSE.point.y, _ = a.leftSE.point.y, x = r.rightSE.point.y, S = a.rightSE.point.y;
    if (l < c) {
      if (_ < p && _ < x) return 1;
      if (_ > p && _ > x) return -1;
      const m = r.comparePoint(a.leftSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
      const E = a.comparePoint(r.rightSE.point);
      return E !== 0 ? E : -1;
    }
    if (l > c) {
      if (p < _ && p < S) return -1;
      if (p > _ && p > S) return 1;
      const m = a.comparePoint(r.leftSE.point);
      if (m !== 0) return m;
      const E = r.comparePoint(a.rightSE.point);
      return E < 0 ? 1 : E > 0 ? -1 : 1;
    }
    if (p < _) return -1;
    if (p > _) return 1;
    if (f < v) {
      const m = a.comparePoint(r.rightSE.point);
      if (m !== 0) return m;
    }
    if (f > v) {
      const m = r.comparePoint(a.rightSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
    }
    if (f !== v) {
      const m = x - p, E = f - l, k = S - _, w = v - c;
      if (m > E && k < w) return 1;
      if (m < E && k > w) return -1;
    }
    return f > v ? 1 : f < v || x < S ? -1 : x > S ? 1 : r.id < a.id ? -1 : r.id > a.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(r, a, l, c) {
    this.id = ++Hm, this.leftSE = r, r.segment = this, r.otherSE = a, this.rightSE = a, a.segment = this, a.otherSE = r, this.rings = l, this.windings = c;
  }
  static fromRing(r, a, l) {
    let c, f, v;
    const p = je.comparePoints(r, a);
    if (p < 0)
      c = r, f = a, v = 1;
    else if (p > 0)
      c = a, f = r, v = -1;
    else throw new Error(`Tried to create degenerate segment at [${r.x}, ${r.y}]`);
    const _ = new je(c, !0), x = new je(f, !1);
    return new Tt(_, x, [l], [v]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(r) {
    this.rightSE = r, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const r = this.leftSE.point.y, a = this.rightSE.point.y;
    return {
      ll: {
        x: this.leftSE.point.x,
        y: r < a ? r : a
      },
      ur: {
        x: this.rightSE.point.x,
        y: r > a ? r : a
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
  isAnEndpoint(r) {
    return r.x === this.leftSE.point.x && r.y === this.leftSE.point.y || r.x === this.rightSE.point.x && r.y === this.rightSE.point.y;
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
  comparePoint(r) {
    if (this.isAnEndpoint(r)) return 0;
    const a = this.leftSE.point, l = this.rightSE.point, c = this.vector();
    if (a.x === l.x)
      return r.x === a.x ? 0 : r.x < a.x ? 1 : -1;
    const f = (r.y - a.y) / c.y, v = a.x + f * c.x;
    if (r.x === v) return 0;
    const p = (r.x - a.x) / c.x, _ = a.y + p * c.y;
    return r.y === _ ? 0 : r.y < _ ? -1 : 1;
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
  getIntersection(r) {
    const a = this.bbox(), l = r.bbox(), c = Es(a, l);
    if (c === null) return null;
    const f = this.leftSE.point, v = this.rightSE.point, p = r.leftSE.point, _ = r.rightSE.point, x = An(a, p) && this.comparePoint(p) === 0, S = An(l, f) && r.comparePoint(f) === 0, m = An(a, _) && this.comparePoint(_) === 0, E = An(l, v) && r.comparePoint(v) === 0;
    if (S && x)
      return E && !m ? v : !E && m ? _ : null;
    if (S)
      return m && f.x === _.x && f.y === _.y ? null : f;
    if (x)
      return E && v.x === p.x && v.y === p.y ? null : p;
    if (E && m) return null;
    if (E) return v;
    if (m) return _;
    const k = Wm(f, this.vector(), p, r.vector());
    return k === null || !An(c, k) ? null : Xn.round(k.x, k.y);
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
  split(r) {
    const a = [], l = r.events !== void 0, c = new je(r, !0), f = new je(r, !1), v = this.rightSE;
    this.replaceRightSE(f), a.push(f), a.push(c);
    const p = new Tt(c, v, this.rings.slice(), this.windings.slice());
    return je.comparePoints(p.leftSE.point, p.rightSE.point) > 0 && p.swapEvents(), je.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), l && (c.checkForConsuming(), f.checkForConsuming()), a;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const r = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = r, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let a = 0, l = this.windings.length; a < l; a++)
      this.windings[a] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(r) {
    let a = this, l = r;
    for (; a.consumedBy; ) a = a.consumedBy;
    for (; l.consumedBy; ) l = l.consumedBy;
    const c = Tt.compare(a, l);
    if (c !== 0) {
      if (c > 0) {
        const f = a;
        a = l, l = f;
      }
      if (a.prev === l) {
        const f = a;
        a = l, l = f;
      }
      for (let f = 0, v = l.rings.length; f < v; f++) {
        const p = l.rings[f], _ = l.windings[f], x = a.rings.indexOf(p);
        x === -1 ? (a.rings.push(p), a.windings.push(_)) : a.windings[x] += _;
      }
      l.rings = null, l.windings = null, l.consumedBy = a, l.leftSE.consumedBy = a.leftSE, l.rightSE.consumedBy = a.rightSE;
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
      const r = this.prev.consumedBy || this.prev;
      this._beforeState = r.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const r = this.beforeState();
    this._afterState = {
      rings: r.rings.slice(0),
      windings: r.windings.slice(0),
      multiPolys: []
    };
    const a = this._afterState.rings, l = this._afterState.windings, c = this._afterState.multiPolys;
    for (let p = 0, _ = this.rings.length; p < _; p++) {
      const x = this.rings[p], S = this.windings[p], m = a.indexOf(x);
      m === -1 ? (a.push(x), l.push(S)) : l[m] += S;
    }
    const f = [], v = [];
    for (let p = 0, _ = a.length; p < _; p++) {
      if (l[p] === 0) continue;
      const x = a[p], S = x.poly;
      if (v.indexOf(S) === -1)
        if (x.isExterior) f.push(S);
        else {
          v.indexOf(S) === -1 && v.push(S);
          const m = f.indexOf(x.poly);
          m !== -1 && f.splice(m, 1);
        }
    }
    for (let p = 0, _ = f.length; p < _; p++) {
      const x = f[p].multiPoly;
      c.indexOf(x) === -1 && c.push(x);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const r = this.beforeState().multiPolys, a = this.afterState().multiPolys;
    switch (Qe.type) {
      case "union": {
        const l = r.length === 0, c = a.length === 0;
        this._isInResult = l !== c;
        break;
      }
      case "intersection": {
        let l, c;
        r.length < a.length ? (l = r.length, c = a.length) : (l = a.length, c = r.length), this._isInResult = c === Qe.numMultiPolys && l < c;
        break;
      }
      case "xor": {
        const l = Math.abs(r.length - a.length);
        this._isInResult = l % 2 === 1;
        break;
      }
      case "difference": {
        const l = (c) => c.length === 1 && c[0].isSubject;
        this._isInResult = l(r) !== l(a);
        break;
      }
      default:
        throw new Error(`Unrecognized operation type found ${Qe.type}`);
    }
    return this._isInResult;
  }
}
class Du {
  constructor(r, a, l) {
    if (!Array.isArray(r) || r.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = a, this.isExterior = l, this.segments = [], typeof r[0][0] != "number" || typeof r[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const c = Xn.round(r[0][0], r[0][1]);
    this.bbox = {
      ll: {
        x: c.x,
        y: c.y
      },
      ur: {
        x: c.x,
        y: c.y
      }
    };
    let f = c;
    for (let v = 1, p = r.length; v < p; v++) {
      if (typeof r[v][0] != "number" || typeof r[v][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let _ = Xn.round(r[v][0], r[v][1]);
      _.x === f.x && _.y === f.y || (this.segments.push(Tt.fromRing(f, _, this)), _.x < this.bbox.ll.x && (this.bbox.ll.x = _.x), _.y < this.bbox.ll.y && (this.bbox.ll.y = _.y), _.x > this.bbox.ur.x && (this.bbox.ur.x = _.x), _.y > this.bbox.ur.y && (this.bbox.ur.y = _.y), f = _);
    }
    (c.x !== f.x || c.y !== f.y) && this.segments.push(Tt.fromRing(f, c, this));
  }
  getSweepEvents() {
    const r = [];
    for (let a = 0, l = this.segments.length; a < l; a++) {
      const c = this.segments[a];
      r.push(c.leftSE), r.push(c.rightSE);
    }
    return r;
  }
}
class Zm {
  constructor(r, a) {
    if (!Array.isArray(r))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Du(r[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (let l = 1, c = r.length; l < c; l++) {
      const f = new Du(r[l], this, !1);
      f.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = f.bbox.ll.x), f.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = f.bbox.ll.y), f.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = f.bbox.ur.x), f.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = f.bbox.ur.y), this.interiorRings.push(f);
    }
    this.multiPoly = a;
  }
  getSweepEvents() {
    const r = this.exteriorRing.getSweepEvents();
    for (let a = 0, l = this.interiorRings.length; a < l; a++) {
      const c = this.interiorRings[a].getSweepEvents();
      for (let f = 0, v = c.length; f < v; f++)
        r.push(c[f]);
    }
    return r;
  }
}
class Fu {
  constructor(r, a) {
    if (!Array.isArray(r))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof r[0][0][0] == "number" && (r = [r]);
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
    for (let l = 0, c = r.length; l < c; l++) {
      const f = new Zm(r[l], this);
      f.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = f.bbox.ll.x), f.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = f.bbox.ll.y), f.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = f.bbox.ur.x), f.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = f.bbox.ur.y), this.polys.push(f);
    }
    this.isSubject = a;
  }
  getSweepEvents() {
    const r = [];
    for (let a = 0, l = this.polys.length; a < l; a++) {
      const c = this.polys[a].getSweepEvents();
      for (let f = 0, v = c.length; f < v; f++)
        r.push(c[f]);
    }
    return r;
  }
}
class Hr {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(r) {
    const a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const f = r[l];
      if (!f.isInResult() || f.ringOut) continue;
      let v = null, p = f.leftSE, _ = f.rightSE;
      const x = [p], S = p.point, m = [];
      for (; v = p, p = _, x.push(p), p.point !== S; )
        for (; ; ) {
          const E = p.getAvailableLinkedEvents();
          if (E.length === 0) {
            const T = x[0].point, C = x[x.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${T.x}, ${T.y}]. Last matching segment found ends at [${C.x}, ${C.y}].`);
          }
          if (E.length === 1) {
            _ = E[0].otherSE;
            break;
          }
          let k = null;
          for (let T = 0, C = m.length; T < C; T++)
            if (m[T].point === p.point) {
              k = T;
              break;
            }
          if (k !== null) {
            const T = m.splice(k)[0], C = x.splice(T.index);
            C.unshift(C[0].otherSE), a.push(new Hr(C.reverse()));
            continue;
          }
          m.push({
            index: x.length,
            point: p.point
          });
          const w = p.getLeftmostComparator(v);
          _ = E.sort(w)[0].otherSE;
          break;
        }
      a.push(new Hr(x));
    }
    return a;
  }
  constructor(r) {
    this.events = r;
    for (let a = 0, l = r.length; a < l; a++)
      r[a].segment.ringOut = this;
    this.poly = null;
  }
  getGeom() {
    let r = this.events[0].point;
    const a = [r];
    for (let x = 1, S = this.events.length - 1; x < S; x++) {
      const m = this.events[x].point, E = this.events[x + 1].point;
      Pu(m, r, E) !== 0 && (a.push(m), r = m);
    }
    if (a.length === 1) return null;
    const l = a[0], c = a[1];
    Pu(l, r, c) === 0 && a.shift(), a.push(a[0]);
    const f = this.isExteriorRing() ? 1 : -1, v = this.isExteriorRing() ? 0 : a.length - 1, p = this.isExteriorRing() ? a.length : -1, _ = [];
    for (let x = v; x != p; x += f) _.push([a[x].x, a[x].y]);
    return _;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const r = this.enclosingRing();
      this._isExteriorRing = r ? !r.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    let r = this.events[0];
    for (let c = 1, f = this.events.length; c < f; c++) {
      const v = this.events[c];
      je.compare(r, v) > 0 && (r = v);
    }
    let a = r.segment.prevInResult(), l = a ? a.prevInResult() : null;
    for (; ; ) {
      if (!a) return null;
      if (!l) return a.ringOut;
      if (l.ringOut !== a.ringOut)
        return l.ringOut.enclosingRing() !== a.ringOut ? a.ringOut : a.ringOut.enclosingRing();
      a = l.prevInResult(), l = a ? a.prevInResult() : null;
    }
  }
}
class Gu {
  constructor(r) {
    this.exteriorRing = r, r.poly = this, this.interiorRings = [];
  }
  addInterior(r) {
    this.interiorRings.push(r), r.poly = this;
  }
  getGeom() {
    const r = [this.exteriorRing.getGeom()];
    if (r[0] === null) return null;
    for (let a = 0, l = this.interiorRings.length; a < l; a++) {
      const c = this.interiorRings[a].getGeom();
      c !== null && r.push(c);
    }
    return r;
  }
}
class Jm {
  constructor(r) {
    this.rings = r, this.polys = this._composePolys(r);
  }
  getGeom() {
    const r = [];
    for (let a = 0, l = this.polys.length; a < l; a++) {
      const c = this.polys[a].getGeom();
      c !== null && r.push(c);
    }
    return r;
  }
  _composePolys(r) {
    const a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const f = r[l];
      if (!f.poly)
        if (f.isExteriorRing()) a.push(new Gu(f));
        else {
          const v = f.enclosingRing();
          v.poly || a.push(new Gu(v)), v.poly.addInterior(f);
        }
    }
    return a;
  }
}
class Qm {
  constructor(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt.compare;
    this.queue = r, this.tree = new Us(a), this.segments = [];
  }
  process(r) {
    const a = r.segment, l = [];
    if (r.consumedBy)
      return r.isLeft ? this.queue.remove(r.otherSE) : this.tree.remove(a), l;
    const c = r.isLeft ? this.tree.add(a) : this.tree.find(a);
    if (!c) throw new Error(`Unable to find segment #${a.id} [${a.leftSE.point.x}, ${a.leftSE.point.y}] -> [${a.rightSE.point.x}, ${a.rightSE.point.y}] in SweepLine tree.`);
    let f = c, v = c, p, _;
    for (; p === void 0; )
      f = this.tree.prev(f), f === null ? p = null : f.key.consumedBy === void 0 && (p = f.key);
    for (; _ === void 0; )
      v = this.tree.next(v), v === null ? _ = null : v.key.consumedBy === void 0 && (_ = v.key);
    if (r.isLeft) {
      let x = null;
      if (p) {
        const m = p.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (x = m), !p.isAnEndpoint(m))) {
          const E = this._splitSafely(p, m);
          for (let k = 0, w = E.length; k < w; k++)
            l.push(E[k]);
        }
      }
      let S = null;
      if (_) {
        const m = _.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (S = m), !_.isAnEndpoint(m))) {
          const E = this._splitSafely(_, m);
          for (let k = 0, w = E.length; k < w; k++)
            l.push(E[k]);
        }
      }
      if (x !== null || S !== null) {
        let m = null;
        x === null ? m = S : S === null ? m = x : m = je.comparePoints(x, S) <= 0 ? x : S, this.queue.remove(a.rightSE), l.push(a.rightSE);
        const E = a.split(m);
        for (let k = 0, w = E.length; k < w; k++)
          l.push(E[k]);
      }
      l.length > 0 ? (this.tree.remove(a), l.push(r)) : (this.segments.push(a), a.prev = p);
    } else {
      if (p && _) {
        const x = p.getIntersection(_);
        if (x !== null) {
          if (!p.isAnEndpoint(x)) {
            const S = this._splitSafely(p, x);
            for (let m = 0, E = S.length; m < E; m++)
              l.push(S[m]);
          }
          if (!_.isAnEndpoint(x)) {
            const S = this._splitSafely(_, x);
            for (let m = 0, E = S.length; m < E; m++)
              l.push(S[m]);
          }
        }
      }
      this.tree.remove(a);
    }
    return l;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(r, a) {
    this.tree.remove(r);
    const l = r.rightSE;
    this.queue.remove(l);
    const c = r.split(a);
    return c.push(l), r.consumedBy === void 0 && this.tree.add(r), c;
  }
}
const Bu = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Km = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class ed {
  run(r, a, l) {
    Qe.type = r, Xn.reset();
    const c = [new Fu(a, !0)];
    for (let m = 0, E = l.length; m < E; m++)
      c.push(new Fu(l[m], !1));
    if (Qe.numMultiPolys = c.length, Qe.type === "difference") {
      const m = c[0];
      let E = 1;
      for (; E < c.length; )
        Es(c[E].bbox, m.bbox) !== null ? E++ : c.splice(E, 1);
    }
    if (Qe.type === "intersection")
      for (let m = 0, E = c.length; m < E; m++) {
        const k = c[m];
        for (let w = m + 1, T = c.length; w < T; w++)
          if (Es(k.bbox, c[w].bbox) === null) return [];
      }
    const f = new Us(je.compare);
    for (let m = 0, E = c.length; m < E; m++) {
      const k = c[m].getSweepEvents();
      for (let w = 0, T = k.length; w < T; w++)
        if (f.insert(k[w]), f.size > Bu)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const v = new Qm(f);
    let p = f.size, _ = f.pop();
    for (; _; ) {
      const m = _.key;
      if (f.size === p) {
        const k = m.segment;
        throw new Error(`Unable to pop() ${m.isLeft ? "left" : "right"} SweepEvent [${m.point.x}, ${m.point.y}] from segment #${k.id} [${k.leftSE.point.x}, ${k.leftSE.point.y}] -> [${k.rightSE.point.x}, ${k.rightSE.point.y}] from queue.`);
      }
      if (f.size > Bu)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (v.segments.length > Km)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const E = v.process(m);
      for (let k = 0, w = E.length; k < w; k++) {
        const T = E[k];
        T.consumedBy === void 0 && f.insert(T);
      }
      p = f.size, _ = f.pop();
    }
    Xn.reset();
    const x = Hr.factory(v.segments);
    return new Jm(x).getGeom();
  }
}
const Qe = new ed(), td = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Qe.run("union", o, a);
}, nd = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Qe.run("intersection", o, a);
}, rd = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Qe.run("xor", o, a);
}, id = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Qe.run("difference", o, a);
};
var sd = {
  union: td,
  intersection: nd,
  xor: rd,
  difference: id
}, ad = Object.defineProperty, od = (o, r) => ad(o, "name", { value: r, configurable: !0 });
function yc(o) {
  const r = [];
  if (mn(o, (c) => {
    r.push(c.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least two features");
  const a = o.features[0].properties || {}, l = sd.difference(r[0], ...r.slice(1));
  return l.length === 0 ? null : l.length === 1 ? Vn(l[0], a) : Gs(l, a);
}
od(yc, "difference");
var ud = yc;
function $u(o) {
  let r;
  for (const a of o)
    r && a[0] - r[0] >= 180 ? a[0] -= 360 : r && a[0] - r[0] < -180 && (a[0] += 360), r = a;
}
function qu(o, r) {
  const a = ud(
    Et([
      Vn([
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
  if (!a)
    return;
  a.properties = { isMask: "y" };
  const l = Rm(o, 0);
  if (l) {
    if (l.geometry.type === "Polygon")
      for (const c of l.geometry.coordinates)
        $u(c);
    else
      for (const c of l.geometry.coordinates)
        for (const f of c)
          $u(f);
    r(Et([l, a]));
  }
}
const zu = "EPSG:4326";
function ld(o) {
  var f;
  const r = o.getProperties(), { isMask: a } = r, l = (f = o.getGeometry()) == null ? void 0 : f.getType(), c = a ? 0 : l === "LineString" || l === "MultiLineString" ? 3 : 2;
  return new Th({
    stroke: a ? void 0 : new za({
      color: "#3170fe",
      lineDash: [c, c],
      width: c,
      lineCap: "butt"
    }),
    fill: a ? new qa({
      color: "#00000020"
    }) : void 0,
    image: new Oh({
      src: `/icons/marker_${r.isReverse ? "reverse" : r.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: r.isSelected ? 2 : r.isReverse ? 0 : 1,
    text: r.isSelected && r.tooltip ? new Rh({
      backgroundFill: new qa({ color: "white" }),
      text: r.tooltip,
      offsetY: -40,
      backgroundStroke: new za({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function Ed(o, r = {}, a = {}, l = ld) {
  let c = -1, f, v, p, _ = !1;
  const x = new Ih({
    updateWhileAnimating: !0
  });
  o.addLayer(x);
  const S = new bh({});
  x.setSource(S), x.setStyle(l), o.on("click", (w) => {
    o.forEachFeatureAtPixel(w.pixel, (T) => {
      const C = T.getId();
      if (C)
        return w.stopPropagation(), v == null || v({ type: "markerClick", id: C }), T;
    });
  }), o.on("pointermove", (w) => {
    const T = o.forEachFeatureAtPixel(w.pixel, (C) => C.getId());
    f !== T && (f && (v == null || v({
      type: "markerMouseLeave",
      id: f
    })), T && (v == null || v({
      type: "markerMouseEnter",
      id: T
    })), o.getTargetElement().style.cursor = T ? "pointer" : _ ? "crosshair" : "", f = T);
  });
  function m() {
    return Nh() ?? o.getView().getProjection();
  }
  function E(w) {
    return w.transform(zu, m());
  }
  const k = (w) => {
    v == null || v({
      type: "mapClick",
      coordinates: $a(w.coordinate, m())
    });
  };
  return {
    setEventHandler(w) {
      w ? (v = w, o.on("click", k)) : (v = void 0, o.un("click", k));
    },
    flyTo(w, T) {
      o.getView().animate({
        center: or(w, m()),
        zoom: T,
        duration: 2e3,
        ...r
      });
    },
    fitBounds(w, T, C) {
      o.getView().fit(wh(w, zu, m()), {
        padding: [T, T, T, T],
        maxZoom: C,
        duration: 2e3,
        ...a
      });
    },
    indicateReverse(w) {
      _ = w, o.getTargetElement().style.cursor = w ? "crosshair" : "";
    },
    setReverseMarker(w) {
      p ? w ? p.getGeometry().setCoordinates(
        or(w, m())
      ) : (S.removeFeature(p), p.dispose(), p = void 0) : w && (p = new mt(
        new Ei(or(w, m()))
      ), p.setProperties({ isReverse: !0 }), S.addFeature(p));
    },
    setMarkers(w, T) {
      function C(P) {
        var A;
        if (P)
          for (const L of P.features) {
            const G = L.geometry.type === "Polygon" ? new Da(L.geometry.coordinates) : L.geometry.type === "MultiPolygon" ? new Fa(L.geometry.coordinates) : null;
            G && S.addFeature(
              new mt({
                isMask: !!((A = L.properties) != null && A.isMask),
                geometry: E(G)
              })
            );
          }
      }
      if (S.clear(), p && S.addFeature(p), C(), T) {
        let P = !1;
        if (T.geometry.type === "GeometryCollection") {
          const A = T.geometry.geometries.map(
            (L) => L.type === "Polygon" ? new Da(L.coordinates) : L.type === "MultiPolygon" ? new Fa(L.coordinates) : null
          ).filter((L) => !!L);
          if (A.length > 0)
            S.addFeature(
              new mt(E(new Sh(A)))
            ), P = !0;
          else
            for (const L of T.geometry.geometries)
              L.type === "LineString" ? (S.addFeature(
                new mt(
                  E(new Ga(L.coordinates))
                )
              ), P = !0) : L.type === "MultiLineString" && S.addFeature(
                new mt(
                  E(new Ba(L.coordinates))
                )
              ), P = !0;
        }
        if (!P) {
          if (T.geometry.type === "Polygon")
            qu(T, C);
          else if (T.geometry.type === "MultiPolygon")
            qu(T, C);
          else if (T.geometry.type === "LineString") {
            S.addFeature(
              new mt(
                E(new Ga(T.geometry.coordinates))
              )
            );
            return;
          } else if (T.geometry.type === "MultiLineString") {
            S.addFeature(
              new mt(
                E(new Ba(T.geometry.coordinates))
              )
            );
            return;
          }
        }
        S.addFeature(new mt(E(new Ei(T.center))));
      }
      for (const P of w ?? []) {
        if (P === T)
          continue;
        const A = new mt(
          new Ei(or(P.center, m()))
        );
        A.setId(P.id), A.setProperties({
          fuzzy: !!P.matching_text,
          tooltip: P.place_type[0] === "reverse" ? P.place_name : P.place_name.replace(/,.*/, "")
        }), S.addFeature(A);
      }
    },
    setSelectedMarker(w) {
      var P, A, L;
      const T = S.getFeatures(), C = (P = T[0]) != null && P.getProperties().isReverse ? 1 : 0;
      c > -1 && ((A = T[c + C]) == null || A.setProperties({
        isSelected: !1
      })), w > -1 && ((L = T[w + C]) == null || L.setProperties({
        isSelected: !0
      })), c = w;
    },
    getCenterAndZoom() {
      const w = o.getView(), T = w.getCenter(), C = w.getZoom();
      if (!(!T || C === void 0))
        return [C, ...$a(T, m())];
    }
  };
}
export {
  Ed as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
