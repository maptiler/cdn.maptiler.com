var Ff = Object.defineProperty;
var $f = (o, r, a) => r in o ? Ff(o, r, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[r] = a;
var Oi = (o, r, a) => $f(o, typeof r != "symbol" ? r + "" : r, a);
var Vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zu(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Bf(o) {
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
var ja = Object.prototype.toString, Ju = function(r) {
  var a = ja.call(r), l = a === "[object Arguments]";
  return l || (l = a !== "[object Array]" && r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && ja.call(r.callee) === "[object Function]"), l;
}, Ti, Va;
function Gf() {
  if (Va) return Ti;
  Va = 1;
  var o;
  if (!Object.keys) {
    var r = Object.prototype.hasOwnProperty, a = Object.prototype.toString, l = Ju, c = Object.prototype.propertyIsEnumerable, h = !c.call({ toString: null }, "toString"), v = c.call(function() {
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
    }, I = function() {
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
      if (typeof window > "u" || !I)
        return _(E);
      try {
        return _(E);
      } catch {
        return !1;
      }
    };
    o = function(k) {
      var w = k !== null && typeof k == "object", C = a.call(k) === "[object Function]", T = l(k), R = w && a.call(k) === "[object String]", P = [];
      if (!w && !C && !T)
        throw new TypeError("Object.keys called on a non-object");
      var A = v && C;
      if (R && k.length > 0 && !r.call(k, 0))
        for (var D = 0; D < k.length; ++D)
          P.push(String(D));
      if (T && k.length > 0)
        for (var M = 0; M < k.length; ++M)
          P.push(String(M));
      else
        for (var G in k)
          !(A && G === "prototype") && r.call(k, G) && P.push(String(G));
      if (h)
        for (var Y = m(k), U = 0; U < p.length; ++U)
          !(Y && p[U] === "constructor") && r.call(k, p[U]) && P.push(p[U]);
      return P;
    };
  }
  return Ti = o, Ti;
}
var qf = Array.prototype.slice, zf = Ju, Wa = Object.keys, Er = Wa ? function(r) {
  return Wa(r);
} : Gf(), Ha = Object.keys;
Er.shim = function() {
  if (Object.keys) {
    var r = function() {
      var a = Object.keys(arguments);
      return a && a.length === arguments.length;
    }(1, 2);
    r || (Object.keys = function(l) {
      return zf(l) ? Ha(qf.call(l)) : Ha(l);
    });
  } else
    Object.keys = Er;
  return Object.keys || Er;
};
var Cs = Er, Yf = Error, Uf = EvalError, Xf = RangeError, jf = ReferenceError, Qu = SyntaxError, Rt = TypeError, Vf = URIError, ti = function() {
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
  var h = Object.getOwnPropertySymbols(r);
  if (h.length !== 1 || h[0] !== a || !Object.prototype.propertyIsEnumerable.call(r, a))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var v = Object.getOwnPropertyDescriptor(r, a);
    if (v.value !== c || v.enumerable !== !0)
      return !1;
  }
  return !0;
}, Za = typeof Symbol < "u" && Symbol, Wf = ti, Ps = function() {
  return typeof Za != "function" || typeof Symbol != "function" || typeof Za("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Wf();
}, Li = {
  __proto__: null,
  foo: {}
}, Hf = Object, Zf = function() {
  return { __proto__: Li }.foo === Li.foo && !(Li instanceof Hf);
}, Jf = "Function.prototype.bind called on incompatible ", Qf = Object.prototype.toString, Kf = Math.max, eh = "[object Function]", Ja = function(r, a) {
  for (var l = [], c = 0; c < r.length; c += 1)
    l[c] = r[c];
  for (var h = 0; h < a.length; h += 1)
    l[h + r.length] = a[h];
  return l;
}, th = function(r, a) {
  for (var l = [], c = a, h = 0; c < r.length; c += 1, h += 1)
    l[h] = r[c];
  return l;
}, nh = function(o, r) {
  for (var a = "", l = 0; l < o.length; l += 1)
    a += o[l], l + 1 < o.length && (a += r);
  return a;
}, rh = function(r) {
  var a = this;
  if (typeof a != "function" || Qf.apply(a) !== eh)
    throw new TypeError(Jf + a);
  for (var l = th(arguments, 1), c, h = function() {
    if (this instanceof c) {
      var I = a.apply(
        this,
        Ja(l, arguments)
      );
      return Object(I) === I ? I : this;
    }
    return a.apply(
      r,
      Ja(l, arguments)
    );
  }, v = Kf(0, a.length - l.length), p = [], _ = 0; _ < v; _++)
    p[_] = "$" + _;
  if (c = Function("binder", "return function (" + nh(p, ",") + "){ return binder.apply(this,arguments); }")(h), a.prototype) {
    var x = function() {
    };
    x.prototype = a.prototype, c.prototype = new x(), x.prototype = null;
  }
  return c;
}, ih = rh, As = Function.prototype.bind || ih, sh = Function.prototype.call, ah = Object.prototype.hasOwnProperty, oh = As, Ku = oh.call(sh, ah), oe, uh = Yf, lh = Uf, ch = Xf, fh = jf, hn = Qu, cn = Rt, hh = Vf, el = Function, Ri = function(o) {
  try {
    return el('"use strict"; return (' + o + ").constructor;")();
  } catch {
  }
}, zt = Object.getOwnPropertyDescriptor;
if (zt)
  try {
    zt({}, "");
  } catch {
    zt = null;
  }
var Ci = function() {
  throw new cn();
}, gh = zt ? function() {
  try {
    return arguments.callee, Ci;
  } catch {
    try {
      return zt(arguments, "callee").get;
    } catch {
      return Ci;
    }
  }
}() : Ci, nn = Ps(), yh = Zf(), Ne = Object.getPrototypeOf || (yh ? function(o) {
  return o.__proto__;
} : null), on = {}, vh = typeof Uint8Array > "u" || !Ne ? oe : Ne(Uint8Array), Yt = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? oe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? oe : ArrayBuffer,
  "%ArrayIteratorPrototype%": nn && Ne ? Ne([][Symbol.iterator]()) : oe,
  "%AsyncFromSyncIteratorPrototype%": oe,
  "%AsyncFunction%": on,
  "%AsyncGenerator%": on,
  "%AsyncGeneratorFunction%": on,
  "%AsyncIteratorPrototype%": on,
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
  "%Error%": uh,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": lh,
  "%Float32Array%": typeof Float32Array > "u" ? oe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? oe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? oe : FinalizationRegistry,
  "%Function%": el,
  "%GeneratorFunction%": on,
  "%Int8Array%": typeof Int8Array > "u" ? oe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? oe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? oe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": nn && Ne ? Ne(Ne([][Symbol.iterator]())) : oe,
  "%JSON%": typeof JSON == "object" ? JSON : oe,
  "%Map%": typeof Map > "u" ? oe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !nn || !Ne ? oe : Ne((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? oe : Promise,
  "%Proxy%": typeof Proxy > "u" ? oe : Proxy,
  "%RangeError%": ch,
  "%ReferenceError%": fh,
  "%Reflect%": typeof Reflect > "u" ? oe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? oe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !nn || !Ne ? oe : Ne((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? oe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": nn && Ne ? Ne(""[Symbol.iterator]()) : oe,
  "%Symbol%": nn ? Symbol : oe,
  "%SyntaxError%": hn,
  "%ThrowTypeError%": gh,
  "%TypedArray%": vh,
  "%TypeError%": cn,
  "%Uint8Array%": typeof Uint8Array > "u" ? oe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? oe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? oe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? oe : Uint32Array,
  "%URIError%": hh,
  "%WeakMap%": typeof WeakMap > "u" ? oe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? oe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? oe : WeakSet
};
if (Ne)
  try {
    null.error;
  } catch (o) {
    var ph = Ne(Ne(o));
    Yt["%Error.prototype%"] = ph;
  }
var mh = function o(r) {
  var a;
  if (r === "%AsyncFunction%")
    a = Ri("async function () {}");
  else if (r === "%GeneratorFunction%")
    a = Ri("function* () {}");
  else if (r === "%AsyncGeneratorFunction%")
    a = Ri("async function* () {}");
  else if (r === "%AsyncGenerator%") {
    var l = o("%AsyncGeneratorFunction%");
    l && (a = l.prototype);
  } else if (r === "%AsyncIteratorPrototype%") {
    var c = o("%AsyncGenerator%");
    c && Ne && (a = Ne(c.prototype));
  }
  return Yt[r] = a, a;
}, Qa = {
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
}, Qn = As, Cr = Ku, dh = Qn.call(Function.call, Array.prototype.concat), _h = Qn.call(Function.apply, Array.prototype.splice), Ka = Qn.call(Function.call, String.prototype.replace), Pr = Qn.call(Function.call, String.prototype.slice), xh = Qn.call(Function.call, RegExp.prototype.exec), Eh = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, kh = /\\(\\)?/g, Ih = function(r) {
  var a = Pr(r, 0, 1), l = Pr(r, -1);
  if (a === "%" && l !== "%")
    throw new hn("invalid intrinsic syntax, expected closing `%`");
  if (l === "%" && a !== "%")
    throw new hn("invalid intrinsic syntax, expected opening `%`");
  var c = [];
  return Ka(r, Eh, function(h, v, p, _) {
    c[c.length] = p ? Ka(_, kh, "$1") : v || h;
  }), c;
}, Sh = function(r, a) {
  var l = r, c;
  if (Cr(Qa, l) && (c = Qa[l], l = "%" + c[0] + "%"), Cr(Yt, l)) {
    var h = Yt[l];
    if (h === on && (h = mh(l)), typeof h > "u" && !a)
      throw new cn("intrinsic " + r + " exists, but is not available. Please file an issue!");
    return {
      alias: c,
      name: l,
      value: h
    };
  }
  throw new hn("intrinsic " + r + " does not exist!");
}, ft = function(r, a) {
  if (typeof r != "string" || r.length === 0)
    throw new cn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof a != "boolean")
    throw new cn('"allowMissing" argument must be a boolean');
  if (xh(/^%?[^%]*%?$/, r) === null)
    throw new hn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var l = Ih(r), c = l.length > 0 ? l[0] : "", h = Sh("%" + c + "%", a), v = h.name, p = h.value, _ = !1, x = h.alias;
  x && (c = x[0], _h(l, dh([0, 1], x)));
  for (var I = 1, m = !0; I < l.length; I += 1) {
    var E = l[I], k = Pr(E, 0, 1), w = Pr(E, -1);
    if ((k === '"' || k === "'" || k === "`" || w === '"' || w === "'" || w === "`") && k !== w)
      throw new hn("property names with quotes must have matching quotes");
    if ((E === "constructor" || !m) && (_ = !0), c += "." + E, v = "%" + c + "%", Cr(Yt, v))
      p = Yt[v];
    else if (p != null) {
      if (!(E in p)) {
        if (!a)
          throw new cn("base intrinsic for " + r + " exists, but the property is not available.");
        return;
      }
      if (zt && I + 1 >= l.length) {
        var C = zt(p, E);
        m = !!C, m && "get" in C && !("originalValue" in C.get) ? p = C.get : p = p[E];
      } else
        m = Cr(p, E), p = p[E];
      m && !_ && (Yt[v] = p);
    }
  }
  return p;
}, Nh = ft, kr = Nh("%Object.defineProperty%", !0) || !1;
if (kr)
  try {
    kr({}, "a", { value: 1 });
  } catch {
    kr = !1;
  }
var Ms = kr, wh = ft, Ir = wh("%Object.getOwnPropertyDescriptor%", !0);
if (Ir)
  try {
    Ir([], "length");
  } catch {
    Ir = null;
  }
var Ds = Ir, eo = Ms, bh = Qu, rn = Rt, to = Ds, Fs = function(r, a, l) {
  if (!r || typeof r != "object" && typeof r != "function")
    throw new rn("`obj` must be an object or a function`");
  if (typeof a != "string" && typeof a != "symbol")
    throw new rn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new rn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new rn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new rn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new rn("`loose`, if provided, must be a boolean");
  var c = arguments.length > 3 ? arguments[3] : null, h = arguments.length > 4 ? arguments[4] : null, v = arguments.length > 5 ? arguments[5] : null, p = arguments.length > 6 ? arguments[6] : !1, _ = !!to && to(r, a);
  if (eo)
    eo(r, a, {
      configurable: v === null && _ ? _.configurable : !v,
      enumerable: c === null && _ ? _.enumerable : !c,
      value: l,
      writable: h === null && _ ? _.writable : !h
    });
  else if (p || !c && !h && !v)
    r[a] = l;
  else
    throw new bh("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Ki = Ms, tl = function() {
  return !!Ki;
};
tl.hasArrayLengthDefineBug = function() {
  if (!Ki)
    return null;
  try {
    return Ki([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var $s = tl, Oh = Cs, Th = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Lh = Object.prototype.toString, Rh = Array.prototype.concat, no = Fs, Ch = function(o) {
  return typeof o == "function" && Lh.call(o) === "[object Function]";
}, nl = $s(), Ph = function(o, r, a, l) {
  if (r in o) {
    if (l === !0) {
      if (o[r] === a)
        return;
    } else if (!Ch(l) || !l())
      return;
  }
  nl ? no(o, r, a, !0) : no(o, r, a);
}, rl = function(o, r) {
  var a = arguments.length > 2 ? arguments[2] : {}, l = Oh(r);
  Th && (l = Rh.call(l, Object.getOwnPropertySymbols(r)));
  for (var c = 0; c < l.length; c += 1)
    Ph(o, l[c], r[l[c]], a[l[c]]);
};
rl.supportsDescriptors = !!nl;
var Xt = rl, il = { exports: {} }, Ah = ft, ro = Fs, Mh = $s(), io = Ds, so = Rt, Dh = Ah("%Math.floor%"), Fh = function(r, a) {
  if (typeof r != "function")
    throw new so("`fn` is not a function");
  if (typeof a != "number" || a < 0 || a > 4294967295 || Dh(a) !== a)
    throw new so("`length` must be a positive 32-bit integer");
  var l = arguments.length > 2 && !!arguments[2], c = !0, h = !0;
  if ("length" in r && io) {
    var v = io(r, "length");
    v && !v.configurable && (c = !1), v && !v.writable && (h = !1);
  }
  return (c || h || !l) && (Mh ? ro(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    a,
    !0,
    !0
  ) : ro(
    /** @type {Parameters<define>[0]} */
    r,
    "length",
    a
  )), r;
};
(function(o) {
  var r = As, a = ft, l = Fh, c = Rt, h = a("%Function.prototype.apply%"), v = a("%Function.prototype.call%"), p = a("%Reflect.apply%", !0) || r.call(v, h), _ = Ms, x = a("%Math.max%");
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
  var I = function() {
    return p(r, h, arguments);
  };
  _ ? _(o.exports, "apply", { value: I }) : o.exports.apply = I;
})(il);
var dn = il.exports, sl = ft, al = dn, $h = al(sl("String.prototype.indexOf")), We = function(r, a) {
  var l = sl(r, !!a);
  return typeof l == "function" && $h(r, ".prototype.") > -1 ? al(l) : l;
}, Bh = Cs, ol = ti(), ul = We, ao = Object, Gh = ul("Array.prototype.push"), oo = ul("Object.prototype.propertyIsEnumerable"), qh = ol ? Object.getOwnPropertySymbols : null, ll = function(r, a) {
  if (r == null)
    throw new TypeError("target must be an object");
  var l = ao(r);
  if (arguments.length === 1)
    return l;
  for (var c = 1; c < arguments.length; ++c) {
    var h = ao(arguments[c]), v = Bh(h), p = ol && (Object.getOwnPropertySymbols || qh);
    if (p)
      for (var _ = p(h), x = 0; x < _.length; ++x) {
        var I = _[x];
        oo(h, I) && Gh(v, I);
      }
    for (var m = 0; m < v.length; ++m) {
      var E = v[m];
      if (oo(h, E)) {
        var k = h[E];
        l[E] = k;
      }
    }
  }
  return l;
}, Pi = ll, zh = function() {
  if (!Object.assign)
    return !1;
  for (var o = "abcdefghijklmnopqrst", r = o.split(""), a = {}, l = 0; l < r.length; ++l)
    a[r[l]] = r[l];
  var c = Object.assign({}, a), h = "";
  for (var v in c)
    h += v;
  return o !== h;
}, Yh = function() {
  if (!Object.assign || !Object.preventExtensions)
    return !1;
  var o = Object.preventExtensions({ 1: 2 });
  try {
    Object.assign(o, "xy");
  } catch {
    return o[1] === "y";
  }
  return !1;
}, cl = function() {
  return !Object.assign || zh() || Yh() ? Pi : Object.assign;
}, Uh = Xt, Xh = cl, jh = function() {
  var r = Xh();
  return Uh(
    Object,
    { assign: r },
    { assign: function() {
      return Object.assign !== r;
    } }
  ), r;
}, Vh = Xt, Wh = dn, Hh = ll, fl = cl, Zh = jh, Jh = Wh.apply(fl()), hl = function(r, a) {
  return Jh(Object, arguments);
};
Vh(hl, {
  getPolyfill: fl,
  implementation: Hh,
  shim: Zh
});
var Qh = hl, Wn = function() {
  return typeof (function() {
  }).name == "string";
}, zn = Object.getOwnPropertyDescriptor;
if (zn)
  try {
    zn([], "length");
  } catch {
    zn = null;
  }
Wn.functionsHaveConfigurableNames = function() {
  if (!Wn() || !zn)
    return !1;
  var r = zn(function() {
  }, "name");
  return !!r && !!r.configurable;
};
var Kh = Function.prototype.bind;
Wn.boundFunctionsHaveNames = function() {
  return Wn() && typeof Kh == "function" && (function() {
  }).bind().name !== "";
};
var eg = Wn, uo = Fs, tg = $s(), ng = eg.functionsHaveConfigurableNames(), rg = Rt, ig = function(r, a) {
  if (typeof r != "function")
    throw new rg("`fn` is not a function");
  var l = arguments.length > 2 && !!arguments[2];
  return (!l || ng) && (tg ? uo(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    a,
    !0,
    !0
  ) : uo(
    /** @type {Parameters<define>[0]} */
    r,
    "name",
    a
  )), r;
}, sg = ig, ag = Rt, og = Object, gl = sg(function() {
  if (this == null || this !== og(this))
    throw new ag("RegExp.prototype.flags getter called on non-object");
  var r = "";
  return this.hasIndices && (r += "d"), this.global && (r += "g"), this.ignoreCase && (r += "i"), this.multiline && (r += "m"), this.dotAll && (r += "s"), this.unicode && (r += "u"), this.unicodeSets && (r += "v"), this.sticky && (r += "y"), r;
}, "get flags", !0), ug = gl, lg = Xt.supportsDescriptors, cg = Object.getOwnPropertyDescriptor, yl = function() {
  if (lg && /a/mig.flags === "gim") {
    var r = cg(RegExp.prototype, "flags");
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
  return ug;
}, fg = Xt.supportsDescriptors, hg = yl, gg = Object.getOwnPropertyDescriptor, yg = Object.defineProperty, vg = TypeError, lo = Object.getPrototypeOf, pg = /a/, mg = function() {
  if (!fg || !lo)
    throw new vg("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
  var r = hg(), a = lo(pg), l = gg(a, "flags");
  return (!l || l.get !== r) && yg(a, "flags", {
    configurable: !0,
    enumerable: !1,
    get: r
  }), r;
}, dg = Xt, _g = dn, xg = gl, vl = yl, Eg = mg, pl = _g(vl());
dg(pl, {
  getPolyfill: vl,
  implementation: xg,
  shim: Eg
});
var kg = pl, Sr = { exports: {} }, Ig = ti, jt = function() {
  return Ig() && !!Symbol.toStringTag;
}, Sg = jt(), Ng = We, es = Ng("Object.prototype.toString"), ni = function(r) {
  return Sg && r && typeof r == "object" && Symbol.toStringTag in r ? !1 : es(r) === "[object Arguments]";
}, ml = function(r) {
  return ni(r) ? !0 : r !== null && typeof r == "object" && typeof r.length == "number" && r.length >= 0 && es(r) !== "[object Array]" && es(r.callee) === "[object Function]";
}, wg = function() {
  return ni(arguments);
}();
ni.isLegacyArguments = ml;
var dl = wg ? ni : ml;
const bg = {}, Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bg
}, Symbol.toStringTag, { value: "Module" })), Tg = /* @__PURE__ */ Bf(Og);
var Bs = typeof Map == "function" && Map.prototype, Ai = Object.getOwnPropertyDescriptor && Bs ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ar = Bs && Ai && typeof Ai.get == "function" ? Ai.get : null, co = Bs && Map.prototype.forEach, Gs = typeof Set == "function" && Set.prototype, Mi = Object.getOwnPropertyDescriptor && Gs ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Mr = Gs && Mi && typeof Mi.get == "function" ? Mi.get : null, fo = Gs && Set.prototype.forEach, Lg = typeof WeakMap == "function" && WeakMap.prototype, Yn = Lg ? WeakMap.prototype.has : null, Rg = typeof WeakSet == "function" && WeakSet.prototype, Un = Rg ? WeakSet.prototype.has : null, Cg = typeof WeakRef == "function" && WeakRef.prototype, ho = Cg ? WeakRef.prototype.deref : null, Pg = Boolean.prototype.valueOf, Ag = Object.prototype.toString, Mg = Function.prototype.toString, Dg = String.prototype.match, qs = String.prototype.slice, bt = String.prototype.replace, Fg = String.prototype.toUpperCase, go = String.prototype.toLowerCase, _l = RegExp.prototype.test, yo = Array.prototype.concat, ot = Array.prototype.join, $g = Array.prototype.slice, vo = Math.floor, ts = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Di = Object.getOwnPropertySymbols, ns = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, gn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Le = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gn || !0) ? Symbol.toStringTag : null, xl = Object.prototype.propertyIsEnumerable, po = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(o) {
  return o.__proto__;
} : null);
function mo(o, r) {
  if (o === 1 / 0 || o === -1 / 0 || o !== o || o && o > -1e3 && o < 1e3 || _l.call(/e/, r))
    return r;
  var a = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof o == "number") {
    var l = o < 0 ? -vo(-o) : vo(o);
    if (l !== o) {
      var c = String(l), h = qs.call(r, c.length + 1);
      return bt.call(c, a, "$&_") + "." + bt.call(bt.call(h, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return bt.call(r, a, "$&_");
}
var rs = Tg, _o = rs.custom, xo = kl(_o) ? _o : null, Bg = function o(r, a, l, c) {
  var h = a || {};
  if (Nt(h, "quoteStyle") && h.quoteStyle !== "single" && h.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Nt(h, "maxStringLength") && (typeof h.maxStringLength == "number" ? h.maxStringLength < 0 && h.maxStringLength !== 1 / 0 : h.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var v = Nt(h, "customInspect") ? h.customInspect : !0;
  if (typeof v != "boolean" && v !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Nt(h, "indent") && h.indent !== null && h.indent !== "	" && !(parseInt(h.indent, 10) === h.indent && h.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Nt(h, "numericSeparator") && typeof h.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var p = h.numericSeparator;
  if (typeof r > "u")
    return "undefined";
  if (r === null)
    return "null";
  if (typeof r == "boolean")
    return r ? "true" : "false";
  if (typeof r == "string")
    return Sl(r, h);
  if (typeof r == "number") {
    if (r === 0)
      return 1 / 0 / r > 0 ? "0" : "-0";
    var _ = String(r);
    return p ? mo(r, _) : _;
  }
  if (typeof r == "bigint") {
    var x = String(r) + "n";
    return p ? mo(r, x) : x;
  }
  var I = typeof h.depth > "u" ? 5 : h.depth;
  if (typeof l > "u" && (l = 0), l >= I && I > 0 && typeof r == "object")
    return is(r) ? "[Array]" : "[Object]";
  var m = ry(h, l);
  if (typeof c > "u")
    c = [];
  else if (Il(c, r) >= 0)
    return "[Circular]";
  function E(ae, q, ne) {
    if (q && (c = $g.call(c), c.push(q)), ne) {
      var ue = {
        depth: h.depth
      };
      return Nt(h, "quoteStyle") && (ue.quoteStyle = h.quoteStyle), o(ae, ue, l + 1, c);
    }
    return o(ae, h, l + 1, c);
  }
  if (typeof r == "function" && !Eo(r)) {
    var k = Wg(r), w = hr(r, E);
    return "[Function" + (k ? ": " + k : " (anonymous)") + "]" + (w.length > 0 ? " { " + ot.call(w, ", ") + " }" : "");
  }
  if (kl(r)) {
    var C = gn ? bt.call(String(r), /^(Symbol\(.*\))_[^)]*$/, "$1") : ns.call(r);
    return typeof r == "object" && !gn ? Mn(C) : C;
  }
  if (ey(r)) {
    for (var T = "<" + go.call(String(r.nodeName)), R = r.attributes || [], P = 0; P < R.length; P++)
      T += " " + R[P].name + "=" + El(Gg(R[P].value), "double", h);
    return T += ">", r.childNodes && r.childNodes.length && (T += "..."), T += "</" + go.call(String(r.nodeName)) + ">", T;
  }
  if (is(r)) {
    if (r.length === 0)
      return "[]";
    var A = hr(r, E);
    return m && !ny(A) ? "[" + ss(A, m) + "]" : "[ " + ot.call(A, ", ") + " ]";
  }
  if (zg(r)) {
    var D = hr(r, E);
    return !("cause" in Error.prototype) && "cause" in r && !xl.call(r, "cause") ? "{ [" + String(r) + "] " + ot.call(yo.call("[cause]: " + E(r.cause), D), ", ") + " }" : D.length === 0 ? "[" + String(r) + "]" : "{ [" + String(r) + "] " + ot.call(D, ", ") + " }";
  }
  if (typeof r == "object" && v) {
    if (xo && typeof r[xo] == "function" && rs)
      return rs(r, { depth: I - l });
    if (v !== "symbol" && typeof r.inspect == "function")
      return r.inspect();
  }
  if (Hg(r)) {
    var M = [];
    return co && co.call(r, function(ae, q) {
      M.push(E(q, r, !0) + " => " + E(ae, r));
    }), ko("Map", Ar.call(r), M, m);
  }
  if (Qg(r)) {
    var G = [];
    return fo && fo.call(r, function(ae) {
      G.push(E(ae, r));
    }), ko("Set", Mr.call(r), G, m);
  }
  if (Zg(r))
    return Fi("WeakMap");
  if (Kg(r))
    return Fi("WeakSet");
  if (Jg(r))
    return Fi("WeakRef");
  if (Ug(r))
    return Mn(E(Number(r)));
  if (jg(r))
    return Mn(E(ts.call(r)));
  if (Xg(r))
    return Mn(Pg.call(r));
  if (Yg(r))
    return Mn(E(String(r)));
  if (typeof window < "u" && r === window)
    return "{ [object Window] }";
  if (typeof globalThis < "u" && r === globalThis || typeof Vn < "u" && r === Vn)
    return "{ [object globalThis] }";
  if (!qg(r) && !Eo(r)) {
    var Y = hr(r, E), U = po ? po(r) === Object.prototype : r instanceof Object || r.constructor === Object, X = r instanceof Object ? "" : "null prototype", ie = !U && Le && Object(r) === r && Le in r ? qs.call(Ct(r), 8, -1) : X ? "Object" : "", ee = U || typeof r.constructor != "function" ? "" : r.constructor.name ? r.constructor.name + " " : "", te = ee + (ie || X ? "[" + ot.call(yo.call([], ie || [], X || []), ": ") + "] " : "");
    return Y.length === 0 ? te + "{}" : m ? te + "{" + ss(Y, m) + "}" : te + "{ " + ot.call(Y, ", ") + " }";
  }
  return String(r);
};
function El(o, r, a) {
  var l = (a.quoteStyle || r) === "double" ? '"' : "'";
  return l + o + l;
}
function Gg(o) {
  return bt.call(String(o), /"/g, "&quot;");
}
function is(o) {
  return Ct(o) === "[object Array]" && (!Le || !(typeof o == "object" && Le in o));
}
function qg(o) {
  return Ct(o) === "[object Date]" && (!Le || !(typeof o == "object" && Le in o));
}
function Eo(o) {
  return Ct(o) === "[object RegExp]" && (!Le || !(typeof o == "object" && Le in o));
}
function zg(o) {
  return Ct(o) === "[object Error]" && (!Le || !(typeof o == "object" && Le in o));
}
function Yg(o) {
  return Ct(o) === "[object String]" && (!Le || !(typeof o == "object" && Le in o));
}
function Ug(o) {
  return Ct(o) === "[object Number]" && (!Le || !(typeof o == "object" && Le in o));
}
function Xg(o) {
  return Ct(o) === "[object Boolean]" && (!Le || !(typeof o == "object" && Le in o));
}
function kl(o) {
  if (gn)
    return o && typeof o == "object" && o instanceof Symbol;
  if (typeof o == "symbol")
    return !0;
  if (!o || typeof o != "object" || !ns)
    return !1;
  try {
    return ns.call(o), !0;
  } catch {
  }
  return !1;
}
function jg(o) {
  if (!o || typeof o != "object" || !ts)
    return !1;
  try {
    return ts.call(o), !0;
  } catch {
  }
  return !1;
}
var Vg = Object.prototype.hasOwnProperty || function(o) {
  return o in this;
};
function Nt(o, r) {
  return Vg.call(o, r);
}
function Ct(o) {
  return Ag.call(o);
}
function Wg(o) {
  if (o.name)
    return o.name;
  var r = Dg.call(Mg.call(o), /^function\s*([\w$]+)/);
  return r ? r[1] : null;
}
function Il(o, r) {
  if (o.indexOf)
    return o.indexOf(r);
  for (var a = 0, l = o.length; a < l; a++)
    if (o[a] === r)
      return a;
  return -1;
}
function Hg(o) {
  if (!Ar || !o || typeof o != "object")
    return !1;
  try {
    Ar.call(o);
    try {
      Mr.call(o);
    } catch {
      return !0;
    }
    return o instanceof Map;
  } catch {
  }
  return !1;
}
function Zg(o) {
  if (!Yn || !o || typeof o != "object")
    return !1;
  try {
    Yn.call(o, Yn);
    try {
      Un.call(o, Un);
    } catch {
      return !0;
    }
    return o instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Jg(o) {
  if (!ho || !o || typeof o != "object")
    return !1;
  try {
    return ho.call(o), !0;
  } catch {
  }
  return !1;
}
function Qg(o) {
  if (!Mr || !o || typeof o != "object")
    return !1;
  try {
    Mr.call(o);
    try {
      Ar.call(o);
    } catch {
      return !0;
    }
    return o instanceof Set;
  } catch {
  }
  return !1;
}
function Kg(o) {
  if (!Un || !o || typeof o != "object")
    return !1;
  try {
    Un.call(o, Un);
    try {
      Yn.call(o, Yn);
    } catch {
      return !0;
    }
    return o instanceof WeakSet;
  } catch {
  }
  return !1;
}
function ey(o) {
  return !o || typeof o != "object" ? !1 : typeof HTMLElement < "u" && o instanceof HTMLElement ? !0 : typeof o.nodeName == "string" && typeof o.getAttribute == "function";
}
function Sl(o, r) {
  if (o.length > r.maxStringLength) {
    var a = o.length - r.maxStringLength, l = "... " + a + " more character" + (a > 1 ? "s" : "");
    return Sl(qs.call(o, 0, r.maxStringLength), r) + l;
  }
  var c = bt.call(bt.call(o, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ty);
  return El(c, "single", r);
}
function ty(o) {
  var r = o.charCodeAt(0), a = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[r];
  return a ? "\\" + a : "\\x" + (r < 16 ? "0" : "") + Fg.call(r.toString(16));
}
function Mn(o) {
  return "Object(" + o + ")";
}
function Fi(o) {
  return o + " { ? }";
}
function ko(o, r, a, l) {
  var c = l ? ss(a, l) : ot.call(a, ", ");
  return o + " (" + r + ") {" + c + "}";
}
function ny(o) {
  for (var r = 0; r < o.length; r++)
    if (Il(o[r], `
`) >= 0)
      return !1;
  return !0;
}
function ry(o, r) {
  var a;
  if (o.indent === "	")
    a = "	";
  else if (typeof o.indent == "number" && o.indent > 0)
    a = ot.call(Array(o.indent + 1), " ");
  else
    return null;
  return {
    base: a,
    prev: ot.call(Array(r + 1), a)
  };
}
function ss(o, r) {
  if (o.length === 0)
    return "";
  var a = `
` + r.prev + r.base;
  return a + ot.call(o, "," + a) + `
` + r.prev;
}
function hr(o, r) {
  var a = is(o), l = [];
  if (a) {
    l.length = o.length;
    for (var c = 0; c < o.length; c++)
      l[c] = Nt(o, c) ? r(o[c], o) : "";
  }
  var h = typeof Di == "function" ? Di(o) : [], v;
  if (gn) {
    v = {};
    for (var p = 0; p < h.length; p++)
      v["$" + h[p]] = h[p];
  }
  for (var _ in o)
    Nt(o, _) && (a && String(Number(_)) === _ && _ < o.length || gn && v["$" + _] instanceof Symbol || (_l.call(/[^\w$]/, _) ? l.push(r(_, o) + ": " + r(o[_], o)) : l.push(_ + ": " + r(o[_], o))));
  if (typeof Di == "function")
    for (var x = 0; x < h.length; x++)
      xl.call(o, h[x]) && l.push("[" + r(h[x]) + "]: " + r(o[h[x]], o));
  return l;
}
var Nl = ft, _n = We, iy = Bg, sy = Rt, gr = Nl("%WeakMap%", !0), yr = Nl("%Map%", !0), ay = _n("WeakMap.prototype.get", !0), oy = _n("WeakMap.prototype.set", !0), uy = _n("WeakMap.prototype.has", !0), ly = _n("Map.prototype.get", !0), cy = _n("Map.prototype.set", !0), fy = _n("Map.prototype.has", !0), zs = function(o, r) {
  for (var a = o, l; (l = a.next) !== null; a = l)
    if (l.key === r)
      return a.next = l.next, l.next = /** @type {NonNullable<typeof list.next>} */
      o.next, o.next = l, l;
}, hy = function(o, r) {
  var a = zs(o, r);
  return a && a.value;
}, gy = function(o, r, a) {
  var l = zs(o, r);
  l ? l.value = a : o.next = /** @type {import('.').ListNode<typeof value>} */
  {
    // eslint-disable-line no-param-reassign, no-extra-parens
    key: r,
    next: o.next,
    value: a
  };
}, yy = function(o, r) {
  return !!zs(o, r);
}, wl = function() {
  var r, a, l, c = {
    assert: function(h) {
      if (!c.has(h))
        throw new sy("Side channel does not contain " + iy(h));
    },
    get: function(h) {
      if (gr && h && (typeof h == "object" || typeof h == "function")) {
        if (r)
          return ay(r, h);
      } else if (yr) {
        if (a)
          return ly(a, h);
      } else if (l)
        return hy(l, h);
    },
    has: function(h) {
      if (gr && h && (typeof h == "object" || typeof h == "function")) {
        if (r)
          return uy(r, h);
      } else if (yr) {
        if (a)
          return fy(a, h);
      } else if (l)
        return yy(l, h);
      return !1;
    },
    set: function(h, v) {
      gr && h && (typeof h == "object" || typeof h == "function") ? (r || (r = new gr()), oy(r, h, v)) : yr ? (a || (a = new yr()), cy(a, h, v)) : (l || (l = { key: {}, next: null }), gy(l, h, v));
    }
  };
  return c;
}, vy = Ku, Dn = wl(), dt = Rt, Ys = {
  assert: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    if (Dn.assert(o), !Ys.has(o, r))
      throw new dt("`" + r + "` is not present on `O`");
  },
  get: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var a = Dn.get(o);
    return a && a["$" + r];
  },
  has: function(o, r) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var a = Dn.get(o);
    return !!a && vy(a, "$" + r);
  },
  set: function(o, r, a) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new dt("`O` is not an object");
    if (typeof r != "string")
      throw new dt("`slot` must be a string");
    var l = Dn.get(o);
    l || (l = {}, Dn.set(o, l)), l["$" + r] = a;
  }
};
Object.freeze && Object.freeze(Ys);
var py = Ys, Fn = py, my = SyntaxError, Io = typeof StopIteration == "object" ? StopIteration : null, dy = function(r) {
  if (!Io)
    throw new my("this environment lacks StopIteration");
  Fn.set(r, "[[Done]]", !1);
  var a = {
    next: function() {
      var c = Fn.get(this, "[[Iterator]]"), h = Fn.get(c, "[[Done]]");
      try {
        return {
          done: h,
          value: h ? void 0 : c.next()
        };
      } catch (v) {
        if (Fn.set(c, "[[Done]]", !0), v !== Io)
          throw v;
        return {
          done: !0,
          value: void 0
        };
      }
    }
  };
  return Fn.set(a, "[[Iterator]]", r), a;
}, _y = {}.toString, bl = Array.isArray || function(o) {
  return _y.call(o) == "[object Array]";
}, xy = String.prototype.valueOf, Ey = function(r) {
  try {
    return xy.call(r), !0;
  } catch {
    return !1;
  }
}, ky = Object.prototype.toString, Iy = "[object String]", Sy = jt(), Ol = function(r) {
  return typeof r == "string" ? !0 : typeof r != "object" ? !1 : Sy ? Ey(r) : ky.call(r) === Iy;
}, Us = typeof Map == "function" && Map.prototype ? Map : null, Ny = typeof Set == "function" && Set.prototype ? Set : null, Dr;
Us || (Dr = function(r) {
  return !1;
});
var Tl = Us ? Map.prototype.has : null, So = Ny ? Set.prototype.has : null;
!Dr && !Tl && (Dr = function(r) {
  return !1;
});
var Ll = Dr || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (Tl.call(r), So)
      try {
        So.call(r);
      } catch {
        return !0;
      }
    return r instanceof Us;
  } catch {
  }
  return !1;
}, wy = typeof Map == "function" && Map.prototype ? Map : null, Xs = typeof Set == "function" && Set.prototype ? Set : null, Fr;
Xs || (Fr = function(r) {
  return !1;
});
var No = wy ? Map.prototype.has : null, Rl = Xs ? Set.prototype.has : null;
!Fr && !Rl && (Fr = function(r) {
  return !1;
});
var Cl = Fr || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (Rl.call(r), No)
      try {
        No.call(r);
      } catch {
        return !0;
      }
    return r instanceof Xs;
  } catch {
  }
  return !1;
}, wo = dl, bo = dy;
if (Ps() || ti()) {
  var $i = Symbol.iterator;
  Sr.exports = function(r) {
    if (r != null && typeof r[$i] < "u")
      return r[$i]();
    if (wo(r))
      return Array.prototype[$i].call(r);
  };
} else {
  var by = bl, Oy = Ol, Oo = ft, Ty = Oo("%Map%", !0), Ly = Oo("%Set%", !0), Qe = We, To = Qe("Array.prototype.push"), Lo = Qe("String.prototype.charCodeAt"), Ry = Qe("String.prototype.slice"), Cy = function(r, a) {
    var l = r.length;
    if (a + 1 >= l)
      return a + 1;
    var c = Lo(r, a);
    if (c < 55296 || c > 56319)
      return a + 1;
    var h = Lo(r, a + 1);
    return h < 56320 || h > 57343 ? a + 1 : a + 2;
  }, Bi = function(r) {
    var a = 0;
    return {
      next: function() {
        var c = a >= r.length, h;
        return c || (h = r[a], a += 1), {
          done: c,
          value: h
        };
      }
    };
  }, Ro = function(r, a) {
    if (by(r) || wo(r))
      return Bi(r);
    if (Oy(r)) {
      var l = 0;
      return {
        next: function() {
          var h = Cy(r, l), v = Ry(r, l, h);
          return l = h, {
            done: h > r.length,
            value: v
          };
        }
      };
    }
    if (a && typeof r["_es6-shim iterator_"] < "u")
      return r["_es6-shim iterator_"]();
  };
  if (!Ty && !Ly)
    Sr.exports = function(r) {
      if (r != null)
        return Ro(r, !0);
    };
  else {
    var Py = Ll, Ay = Cl, Co = Qe("Map.prototype.forEach", !0), Po = Qe("Set.prototype.forEach", !0);
    if (typeof process > "u" || !process.versions || !process.versions.node)
      var Ao = Qe("Map.prototype.iterator", !0), Mo = Qe("Set.prototype.iterator", !0);
    var Do = Qe("Map.prototype.@@iterator", !0) || Qe("Map.prototype._es6-shim iterator_", !0), Fo = Qe("Set.prototype.@@iterator", !0) || Qe("Set.prototype._es6-shim iterator_", !0), My = function(r) {
      if (Py(r)) {
        if (Ao)
          return bo(Ao(r));
        if (Do)
          return Do(r);
        if (Co) {
          var a = [];
          return Co(r, function(c, h) {
            To(a, [h, c]);
          }), Bi(a);
        }
      }
      if (Ay(r)) {
        if (Mo)
          return bo(Mo(r));
        if (Fo)
          return Fo(r);
        if (Po) {
          var l = [];
          return Po(r, function(c) {
            To(l, c);
          }), Bi(l);
        }
      }
    };
    Sr.exports = function(r) {
      return My(r) || Ro(r);
    };
  }
}
var Dy = Sr.exports, $o = function(o) {
  return o !== o;
}, Pl = function(r, a) {
  return r === 0 && a === 0 ? 1 / r === 1 / a : !!(r === a || $o(r) && $o(a));
}, Fy = Pl, Al = function() {
  return typeof Object.is == "function" ? Object.is : Fy;
}, $y = Al, By = Xt, Gy = function() {
  var r = $y();
  return By(Object, { is: r }, {
    is: function() {
      return Object.is !== r;
    }
  }), r;
}, qy = Xt, zy = dn, Yy = Pl, Ml = Al, Uy = Gy, Dl = zy(Ml(), Object);
qy(Dl, {
  getPolyfill: Ml,
  implementation: Yy,
  shim: Uy
});
var Xy = Dl, jy = dn, Fl = We, Vy = ft, as = Vy("%ArrayBuffer%", !0), Nr = Fl("ArrayBuffer.prototype.byteLength", !0), Wy = Fl("Object.prototype.toString"), Bo = !!as && !Nr && new as(0).slice, Go = !!Bo && jy(Bo), $l = Nr || Go ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return Nr ? Nr(r) : Go(r, 0), !0;
  } catch {
    return !1;
  }
} : as ? function(r) {
  return Wy(r) === "[object ArrayBuffer]";
} : function(r) {
  return !1;
}, Hy = Date.prototype.getDay, Zy = function(r) {
  try {
    return Hy.call(r), !0;
  } catch {
    return !1;
  }
}, Jy = Object.prototype.toString, Qy = "[object Date]", Ky = jt(), ev = function(r) {
  return typeof r != "object" || r === null ? !1 : Ky ? Zy(r) : Jy.call(r) === Qy;
}, os = We, Bl = jt(), Gl, ql, us, ls;
if (Bl) {
  Gl = os("Object.prototype.hasOwnProperty"), ql = os("RegExp.prototype.exec"), us = {};
  var Gi = function() {
    throw us;
  };
  ls = {
    toString: Gi,
    valueOf: Gi
  }, typeof Symbol.toPrimitive == "symbol" && (ls[Symbol.toPrimitive] = Gi);
}
var tv = os("Object.prototype.toString"), nv = Object.getOwnPropertyDescriptor, rv = "[object RegExp]", iv = Bl ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  var a = nv(r, "lastIndex"), l = a && Gl(a, "value");
  if (!l)
    return !1;
  try {
    ql(r, ls);
  } catch (c) {
    return c === us;
  }
} : function(r) {
  return !r || typeof r != "object" && typeof r != "function" ? !1 : tv(r) === rv;
}, sv = We, qo = sv("SharedArrayBuffer.prototype.byteLength", !0), av = qo ? function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    return qo(r), !0;
  } catch {
    return !1;
  }
} : function(r) {
  return !1;
}, ov = Number.prototype.toString, uv = function(r) {
  try {
    return ov.call(r), !0;
  } catch {
    return !1;
  }
}, lv = Object.prototype.toString, cv = "[object Number]", fv = jt(), hv = function(r) {
  return typeof r == "number" ? !0 : typeof r != "object" ? !1 : fv ? uv(r) : lv.call(r) === cv;
}, zl = We, gv = zl("Boolean.prototype.toString"), yv = zl("Object.prototype.toString"), vv = function(r) {
  try {
    return gv(r), !0;
  } catch {
    return !1;
  }
}, pv = "[object Boolean]", mv = jt(), dv = function(r) {
  return typeof r == "boolean" ? !0 : r === null || typeof r != "object" ? !1 : mv && Symbol.toStringTag in r ? vv(r) : yv(r) === pv;
}, cs = { exports: {} }, _v = Object.prototype.toString, xv = Ps();
if (xv) {
  var Ev = Symbol.prototype.toString, kv = /^Symbol\(.*\)$/, Iv = function(r) {
    return typeof r.valueOf() != "symbol" ? !1 : kv.test(Ev.call(r));
  };
  cs.exports = function(r) {
    if (typeof r == "symbol")
      return !0;
    if (_v.call(r) !== "[object Symbol]")
      return !1;
    try {
      return Iv(r);
    } catch {
      return !1;
    }
  };
} else
  cs.exports = function(r) {
    return !1;
  };
var Sv = cs.exports, fs = { exports: {} }, zo = typeof BigInt < "u" && BigInt, Nv = function() {
  return typeof zo == "function" && typeof BigInt == "function" && typeof zo(42) == "bigint" && typeof BigInt(42) == "bigint";
}, wv = Nv();
if (wv) {
  var bv = BigInt.prototype.valueOf, Ov = function(r) {
    try {
      return bv.call(r), !0;
    } catch {
    }
    return !1;
  };
  fs.exports = function(r) {
    return r === null || typeof r > "u" || typeof r == "boolean" || typeof r == "string" || typeof r == "number" || typeof r == "symbol" || typeof r == "function" ? !1 : typeof r == "bigint" ? !0 : Ov(r);
  };
} else
  fs.exports = function(r) {
    return !1;
  };
var Tv = fs.exports, Lv = Ol, Rv = hv, Cv = dv, Pv = Sv, Av = Tv, Mv = function(r) {
  if (r == null || typeof r != "object" && typeof r != "function")
    return null;
  if (Lv(r))
    return "String";
  if (Rv(r))
    return "Number";
  if (Cv(r))
    return "Boolean";
  if (Pv(r))
    return "Symbol";
  if (Av(r))
    return "BigInt";
}, $r = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, Yo = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, Br;
$r || (Br = function(r) {
  return !1;
});
var hs = $r ? $r.prototype.has : null, qi = Yo ? Yo.prototype.has : null;
!Br && !hs && (Br = function(r) {
  return !1;
});
var Dv = Br || function(r) {
  if (!r || typeof r != "object")
    return !1;
  try {
    if (hs.call(r, hs), qi)
      try {
        qi.call(r, qi);
      } catch {
        return !0;
      }
    return r instanceof $r;
  } catch {
  }
  return !1;
}, gs = { exports: {} }, Fv = ft, Yl = We, $v = Fv("%WeakSet%", !0), zi = Yl("WeakSet.prototype.has", !0);
if (zi) {
  var Yi = Yl("WeakMap.prototype.has", !0);
  gs.exports = function(r) {
    if (!r || typeof r != "object")
      return !1;
    try {
      if (zi(r, zi), Yi)
        try {
          Yi(r, Yi);
        } catch {
          return !0;
        }
      return r instanceof $v;
    } catch {
    }
    return !1;
  };
} else
  gs.exports = function(r) {
    return !1;
  };
var Bv = gs.exports, Gv = Ll, qv = Cl, zv = Dv, Yv = Bv, Uv = function(r) {
  if (r && typeof r == "object") {
    if (Gv(r))
      return "Map";
    if (qv(r))
      return "Set";
    if (zv(r))
      return "WeakMap";
    if (Yv(r))
      return "WeakSet";
  }
  return !1;
}, Ul = Function.prototype.toString, ln = typeof Reflect == "object" && Reflect !== null && Reflect.apply, ys, wr;
if (typeof ln == "function" && typeof Object.defineProperty == "function")
  try {
    ys = Object.defineProperty({}, "length", {
      get: function() {
        throw wr;
      }
    }), wr = {}, ln(function() {
      throw 42;
    }, null, ys);
  } catch (o) {
    o !== wr && (ln = null);
  }
else
  ln = null;
var Xv = /^\s*class\b/, vs = function(r) {
  try {
    var a = Ul.call(r);
    return Xv.test(a);
  } catch {
    return !1;
  }
}, Ui = function(r) {
  try {
    return vs(r) ? !1 : (Ul.call(r), !0);
  } catch {
    return !1;
  }
}, br = Object.prototype.toString, jv = "[object Object]", Vv = "[object Function]", Wv = "[object GeneratorFunction]", Hv = "[object HTMLAllCollection]", Zv = "[object HTML document.all class]", Jv = "[object HTMLCollection]", Qv = typeof Symbol == "function" && !!Symbol.toStringTag, Kv = !(0 in [,]), ps = function() {
  return !1;
};
if (typeof document == "object") {
  var ep = document.all;
  br.call(ep) === br.call(document.all) && (ps = function(r) {
    if ((Kv || !r) && (typeof r > "u" || typeof r == "object"))
      try {
        var a = br.call(r);
        return (a === Hv || a === Zv || a === Jv || a === jv) && r("") == null;
      } catch {
      }
    return !1;
  });
}
var tp = ln ? function(r) {
  if (ps(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  try {
    ln(r, null, ys);
  } catch (a) {
    if (a !== wr)
      return !1;
  }
  return !vs(r) && Ui(r);
} : function(r) {
  if (ps(r))
    return !0;
  if (!r || typeof r != "function" && typeof r != "object")
    return !1;
  if (Qv)
    return Ui(r);
  if (vs(r))
    return !1;
  var a = br.call(r);
  return a !== Vv && a !== Wv && !/^\[object HTML/.test(a) ? !1 : Ui(r);
}, np = tp, rp = Object.prototype.toString, Xl = Object.prototype.hasOwnProperty, ip = function(r, a, l) {
  for (var c = 0, h = r.length; c < h; c++)
    Xl.call(r, c) && (l == null ? a(r[c], c, r) : a.call(l, r[c], c, r));
}, sp = function(r, a, l) {
  for (var c = 0, h = r.length; c < h; c++)
    l == null ? a(r.charAt(c), c, r) : a.call(l, r.charAt(c), c, r);
}, ap = function(r, a, l) {
  for (var c in r)
    Xl.call(r, c) && (l == null ? a(r[c], c, r) : a.call(l, r[c], c, r));
}, op = function(r, a, l) {
  if (!np(a))
    throw new TypeError("iterator must be a function");
  var c;
  arguments.length >= 3 && (c = l), rp.call(r) === "[object Array]" ? ip(r, a, c) : typeof r == "string" ? sp(r, a, c) : ap(r, a, c);
}, up = op, lp = [
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
], Xi = lp, cp = typeof globalThis > "u" ? Vn : globalThis, fp = function() {
  for (var r = [], a = 0; a < Xi.length; a++)
    typeof cp[Xi[a]] == "function" && (r[r.length] = Xi[a]);
  return r;
}, Gr = up, hp = fp, Uo = dn, js = We, Or = Ds, gp = js("Object.prototype.toString"), jl = jt(), Xo = typeof globalThis > "u" ? Vn : globalThis, ms = hp(), Vs = js("String.prototype.slice"), ji = Object.getPrototypeOf, yp = js("Array.prototype.indexOf", !0) || function(r, a) {
  for (var l = 0; l < r.length; l += 1)
    if (r[l] === a)
      return l;
  return -1;
}, qr = { __proto__: null };
jl && Or && ji ? Gr(ms, function(o) {
  var r = new Xo[o]();
  if (Symbol.toStringTag in r) {
    var a = ji(r), l = Or(a, Symbol.toStringTag);
    if (!l) {
      var c = ji(a);
      l = Or(c, Symbol.toStringTag);
    }
    qr["$" + o] = Uo(l.get);
  }
}) : Gr(ms, function(o) {
  var r = new Xo[o](), a = r.slice || r.set;
  a && (qr["$" + o] = Uo(a));
});
var vp = function(r) {
  var a = !1;
  return Gr(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    qr,
    /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
    function(l, c) {
      if (!a)
        try {
          "$" + l(r) === c && (a = Vs(c, 1));
        } catch {
        }
    }
  ), a;
}, pp = function(r) {
  var a = !1;
  return Gr(
    // eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */
    /** @type {any} */
    qr,
    /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */
    function(l, c) {
      if (!a)
        try {
          l(r), a = Vs(c, 1);
        } catch {
        }
    }
  ), a;
}, mp = function(r) {
  if (!r || typeof r != "object")
    return !1;
  if (!jl) {
    var a = Vs(gp(r), 8, -1);
    return yp(ms, a) > -1 ? a : a !== "Object" ? !1 : pp(r);
  }
  return Or ? vp(r) : null;
}, dp = We, jo = dp("ArrayBuffer.prototype.byteLength", !0), _p = $l, xp = function(r) {
  return _p(r) ? jo ? jo(r) : r.byteLength : NaN;
}, Vl = Qh, ht = We, Vo = kg, Ep = ft, yn = Dy, kp = wl, Wo = Xy, Ho = dl, Zo = bl, Jo = $l, Qo = ev, Ko = iv, eu = av, tu = Cs, nu = Mv, ru = Uv, iu = mp, su = xp, au = ht("SharedArrayBuffer.prototype.byteLength", !0), ou = ht("Date.prototype.getTime"), Vi = Object.getPrototypeOf, uu = ht("Object.prototype.toString"), zr = Ep("%Set%", !0), ds = ht("Map.prototype.has", !0), Yr = ht("Map.prototype.get", !0), lu = ht("Map.prototype.size", !0), Ur = ht("Set.prototype.add", !0), Wl = ht("Set.prototype.delete", !0), Xr = ht("Set.prototype.has", !0), Tr = ht("Set.prototype.size", !0);
function cu(o, r, a, l) {
  for (var c = yn(o), h; (h = c.next()) && !h.done; )
    if (et(r, h.value, a, l))
      return Wl(o, h.value), !0;
  return !1;
}
function Hl(o) {
  if (typeof o > "u")
    return null;
  if (typeof o != "object")
    return typeof o == "symbol" ? !1 : typeof o == "string" || typeof o == "number" ? +o == +o : !0;
}
function Ip(o, r, a, l, c, h) {
  var v = Hl(a);
  if (v != null)
    return v;
  var p = Yr(r, v), _ = Vl({}, c, { strict: !1 });
  return typeof p > "u" && !ds(r, v) || !et(l, p, _, h) ? !1 : !ds(o, v) && et(l, p, _, h);
}
function Sp(o, r, a) {
  var l = Hl(a);
  return l ?? (Xr(r, l) && !Xr(o, l));
}
function fu(o, r, a, l, c, h) {
  for (var v = yn(o), p, _; (p = v.next()) && !p.done; )
    if (_ = p.value, // eslint-disable-next-line no-use-before-define
    et(a, _, c, h) && et(l, Yr(r, _), c, h))
      return Wl(o, _), !0;
  return !1;
}
function et(o, r, a, l) {
  var c = a || {};
  if (c.strict ? Wo(o, r) : o === r)
    return !0;
  var h = nu(o), v = nu(r);
  if (h !== v)
    return !1;
  if (!o || !r || typeof o != "object" && typeof r != "object")
    return c.strict ? Wo(o, r) : o == r;
  var p = l.has(o), _ = l.has(r), x;
  if (p && _) {
    if (l.get(o) === l.get(r))
      return !0;
  } else
    x = {};
  return p || l.set(o, x), _ || l.set(r, x), bp(o, r, c, l);
}
function hu(o) {
  return !o || typeof o != "object" || typeof o.length != "number" || typeof o.copy != "function" || typeof o.slice != "function" || o.length > 0 && typeof o[0] != "number" ? !1 : !!(o.constructor && o.constructor.isBuffer && o.constructor.isBuffer(o));
}
function Np(o, r, a, l) {
  if (Tr(o) !== Tr(r))
    return !1;
  for (var c = yn(o), h = yn(r), v, p, _; (v = c.next()) && !v.done; )
    if (v.value && typeof v.value == "object")
      _ || (_ = new zr()), Ur(_, v.value);
    else if (!Xr(r, v.value)) {
      if (a.strict || !Sp(o, r, v.value))
        return !1;
      _ || (_ = new zr()), Ur(_, v.value);
    }
  if (_) {
    for (; (p = h.next()) && !p.done; )
      if (p.value && typeof p.value == "object") {
        if (!cu(_, p.value, a.strict, l))
          return !1;
      } else if (!a.strict && !Xr(o, p.value) && !cu(_, p.value, a.strict, l))
        return !1;
    return Tr(_) === 0;
  }
  return !0;
}
function wp(o, r, a, l) {
  if (lu(o) !== lu(r))
    return !1;
  for (var c = yn(o), h = yn(r), v, p, _, x, I, m; (v = c.next()) && !v.done; )
    if (x = v.value[0], I = v.value[1], x && typeof x == "object")
      _ || (_ = new zr()), Ur(_, x);
    else if (m = Yr(r, x), typeof m > "u" && !ds(r, x) || !et(I, m, a, l)) {
      if (a.strict || !Ip(o, r, x, I, a, l))
        return !1;
      _ || (_ = new zr()), Ur(_, x);
    }
  if (_) {
    for (; (p = h.next()) && !p.done; )
      if (x = p.value[0], m = p.value[1], x && typeof x == "object") {
        if (!fu(_, o, x, m, a, l))
          return !1;
      } else if (!a.strict && (!o.has(x) || !et(Yr(o, x), m, a, l)) && !fu(_, o, x, m, Vl({}, a, { strict: !1 }), l))
        return !1;
    return Tr(_) === 0;
  }
  return !0;
}
function bp(o, r, a, l) {
  var c, h;
  if (typeof o != typeof r || o == null || r == null || uu(o) !== uu(r) || Ho(o) !== Ho(r))
    return !1;
  var v = Zo(o), p = Zo(r);
  if (v !== p)
    return !1;
  var _ = o instanceof Error, x = r instanceof Error;
  if (_ !== x || (_ || x) && (o.name !== r.name || o.message !== r.message))
    return !1;
  var I = Ko(o), m = Ko(r);
  if (I !== m || (I || m) && (o.source !== r.source || Vo(o) !== Vo(r)))
    return !1;
  var E = Qo(o), k = Qo(r);
  if (E !== k || (E || k) && ou(o) !== ou(r) || a.strict && Vi && Vi(o) !== Vi(r))
    return !1;
  var w = iu(o), C = iu(r);
  if (w !== C)
    return !1;
  if (w || C) {
    if (o.length !== r.length)
      return !1;
    for (c = 0; c < o.length; c++)
      if (o[c] !== r[c])
        return !1;
    return !0;
  }
  var T = hu(o), R = hu(r);
  if (T !== R)
    return !1;
  if (T || R) {
    if (o.length !== r.length)
      return !1;
    for (c = 0; c < o.length; c++)
      if (o[c] !== r[c])
        return !1;
    return !0;
  }
  var P = Jo(o), A = Jo(r);
  if (P !== A)
    return !1;
  if (P || A)
    return su(o) !== su(r) ? !1 : typeof Uint8Array == "function" && et(new Uint8Array(o), new Uint8Array(r), a, l);
  var D = eu(o), M = eu(r);
  if (D !== M)
    return !1;
  if (D || M)
    return au(o) !== au(r) ? !1 : typeof Uint8Array == "function" && et(new Uint8Array(o), new Uint8Array(r), a, l);
  if (typeof o != typeof r)
    return !1;
  var G = tu(o), Y = tu(r);
  if (G.length !== Y.length)
    return !1;
  for (G.sort(), Y.sort(), c = G.length - 1; c >= 0; c--)
    if (G[c] != Y[c])
      return !1;
  for (c = G.length - 1; c >= 0; c--)
    if (h = G[c], !et(o[h], r[h], a, l))
      return !1;
  var U = ru(o), X = ru(r);
  return U !== X ? !1 : U === "Set" || X === "Set" ? Np(o, r, a, l) : U === "Map" ? wp(o, r, a, l) : !0;
}
var Op = function(r, a, l) {
  return et(r, a, l, kp());
};
const Tp = /* @__PURE__ */ Zu(Op);
var Lp = Object.defineProperty, ge = (o, r) => Lp(o, "name", { value: r, configurable: !0 }), Rp = class {
  constructor(r) {
    this.direction = !1, this.compareProperties = !0;
    var a, l, c;
    this.precision = 10 ** -((a = r == null ? void 0 : r.precision) != null ? a : 17), this.direction = (l = r == null ? void 0 : r.direction) != null ? l : !1, this.compareProperties = (c = r == null ? void 0 : r.compareProperties) != null ? c : !0;
  }
  compare(r, a) {
    if (r.type !== a.type || !Bn(r, a))
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
          const l = _s(r), c = _s(
            a
          );
          return l.every(
            (h) => c.some((v) => this.compare(h, v))
          );
        }
    }
    return !1;
  }
  compareCoord(r, a) {
    return r.length === a.length && r.every((l, c) => Math.abs(l - a[c]) < this.precision);
  }
  compareLine(r, a, l = 0, c = !1) {
    if (!Bn(r, a))
      return !1;
    const h = r;
    let v = a;
    if (c && !this.compareCoord(h[0], v[0])) {
      const _ = this.fixStartIndex(v, h);
      if (_)
        v = _;
      else
        return !1;
    }
    const p = this.compareCoord(h[l], v[l]);
    return this.direction || p ? this.comparePath(h, v) : this.compareCoord(h[l], v[v.length - (1 + l)]) ? this.comparePath(h.slice().reverse(), v) : !1;
  }
  fixStartIndex(r, a) {
    let l, c = -1;
    for (let h = 0; h < r.length; h++)
      if (this.compareCoord(r[h], a[0])) {
        c = h;
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
        (h) => c.some((v) => this.compareLine(h, v, 1, !0))
      );
    }
    return !1;
  }
  compareGeometryCollection(r, a) {
    return Bn(r.geometries, a.geometries) && this.compareBBox(r, a) && r.geometries.every((l, c) => this.compare(l, a.geometries[c]));
  }
  compareFeature(r, a) {
    return r.id === a.id && (this.compareProperties ? Tp(r.properties, a.properties) : !0) && this.compareBBox(r, a) && this.compare(r.geometry, a.geometry);
  }
  compareFeatureCollection(r, a) {
    return Bn(r.features, a.features) && this.compareBBox(r, a) && r.features.every((l, c) => this.compare(l, a.features[c]));
  }
  compareBBox(r, a) {
    return !r.bbox && !a.bbox || (r.bbox && a.bbox ? this.compareCoord(r.bbox, a.bbox) : !1);
  }
};
ge(Rp, "GeojsonEquality");
function Bn(o, r) {
  return o.coordinates ? o.coordinates.length === r.coordinates.length : o.length === r.length;
}
ge(Bn, "sameLength");
function _s(o) {
  return o.coordinates.map((r) => ({
    type: o.type.replace("Multi", ""),
    coordinates: r
  }));
}
ge(_s, "explode");
var Me = 63710088e-1, Zl = {
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
}, gu = {
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
function Ve(o, r, a = {}) {
  const l = { type: "Feature" };
  return (a.id === 0 || a.id) && (l.id = a.id), a.bbox && (l.bbox = a.bbox), l.properties = r || {}, l.geometry = o, l;
}
ge(Ve, "feature");
function Cp(o, r, a = {}) {
  switch (o) {
    case "Point":
      return ut(r).geometry;
    case "LineString":
      return _t(r).geometry;
    case "Polygon":
      return xn(r).geometry;
    case "MultiPoint":
      return Ql(r).geometry;
    case "MultiLineString":
      return Jl(r).geometry;
    case "MultiPolygon":
      return ri(r).geometry;
    default:
      throw new Error(o + " is invalid");
  }
}
ge(Cp, "geometry");
function ut(o, r, a = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!jr(o[0]) || !jr(o[1]))
    throw new Error("coordinates must contain numbers");
  return Ve({
    type: "Point",
    coordinates: o
  }, r, a);
}
ge(ut, "point");
function Pp(o, r, a = {}) {
  return tt(
    o.map((l) => ut(l, r)),
    a
  );
}
ge(Pp, "points");
function xn(o, r, a = {}) {
  for (const c of o) {
    if (c.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (c[c.length - 1].length !== c[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let h = 0; h < c[c.length - 1].length; h++)
      if (c[c.length - 1][h] !== c[0][h])
        throw new Error("First and last Position are not equivalent.");
  }
  return Ve({
    type: "Polygon",
    coordinates: o
  }, r, a);
}
ge(xn, "polygon");
function Ap(o, r, a = {}) {
  return tt(
    o.map((l) => xn(l, r)),
    a
  );
}
ge(Ap, "polygons");
function _t(o, r, a = {}) {
  if (o.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return Ve({
    type: "LineString",
    coordinates: o
  }, r, a);
}
ge(_t, "lineString");
function Mp(o, r, a = {}) {
  return tt(
    o.map((l) => _t(l, r)),
    a
  );
}
ge(Mp, "lineStrings");
function tt(o, r = {}) {
  const a = { type: "FeatureCollection" };
  return r.id && (a.id = r.id), r.bbox && (a.bbox = r.bbox), a.features = o, a;
}
ge(tt, "featureCollection");
function Jl(o, r, a = {}) {
  return Ve({
    type: "MultiLineString",
    coordinates: o
  }, r, a);
}
ge(Jl, "multiLineString");
function Ql(o, r, a = {}) {
  return Ve({
    type: "MultiPoint",
    coordinates: o
  }, r, a);
}
ge(Ql, "multiPoint");
function ri(o, r, a = {}) {
  return Ve({
    type: "MultiPolygon",
    coordinates: o
  }, r, a);
}
ge(ri, "multiPolygon");
function Dp(o, r, a = {}) {
  return Ve({
    type: "GeometryCollection",
    geometries: o
  }, r, a);
}
ge(Dp, "geometryCollection");
function Fp(o, r = 0) {
  if (r && !(r >= 0))
    throw new Error("precision must be a positive number");
  const a = Math.pow(10, r || 0);
  return Math.round(o * a) / a;
}
ge(Fp, "round");
function Ws(o, r = "kilometers") {
  const a = Zl[r];
  if (!a)
    throw new Error(r + " units is invalid");
  return o * a;
}
ge(Ws, "radiansToLength");
function ii(o, r = "kilometers") {
  const a = Zl[r];
  if (!a)
    throw new Error(r + " units is invalid");
  return o / a;
}
ge(ii, "lengthToRadians");
function $p(o, r) {
  return Kl(ii(o, r));
}
ge($p, "lengthToDegrees");
function Bp(o) {
  let r = o % 360;
  return r < 0 && (r += 360), r;
}
ge(Bp, "bearingToAzimuth");
function Kl(o) {
  return o % (2 * Math.PI) * 180 / Math.PI;
}
ge(Kl, "radiansToDegrees");
function Gp(o) {
  return o % 360 * Math.PI / 180;
}
ge(Gp, "degreesToRadians");
function qp(o, r = "kilometers", a = "kilometers") {
  if (!(o >= 0))
    throw new Error("length must be a positive number");
  return Ws(ii(o, r), a);
}
ge(qp, "convertLength");
function zp(o, r = "meters", a = "kilometers") {
  if (!(o >= 0))
    throw new Error("area must be a positive number");
  const l = gu[r];
  if (!l)
    throw new Error("invalid original units");
  const c = gu[a];
  if (!c)
    throw new Error("invalid final units");
  return o / l * c;
}
ge(zp, "convertArea");
function jr(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
ge(jr, "isNumber");
function Hs(o) {
  return o !== null && typeof o == "object" && !Array.isArray(o);
}
ge(Hs, "isObject");
function Yp(o) {
  if (!o)
    throw new Error("bbox is required");
  if (!Array.isArray(o))
    throw new Error("bbox must be an Array");
  if (o.length !== 4 && o.length !== 6)
    throw new Error("bbox must be an Array of 4 or 6 numbers");
  o.forEach((r) => {
    if (!jr(r))
      throw new Error("bbox must only contain numbers");
  });
}
ge(Yp, "validateBBox");
function Up(o) {
  if (!o)
    throw new Error("id is required");
  if (["string", "number"].indexOf(typeof o) === -1)
    throw new Error("id must be a number or a string");
}
ge(Up, "validateId");
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
function Xp(o, r) {
  var a = { label: 0, sent: function() {
    if (h[0] & 1) throw h[1];
    return h[1];
  }, trys: [], ops: [] }, l, c, h, v;
  return v = { next: p(0), throw: p(1), return: p(2) }, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
    return this;
  }), v;
  function p(x) {
    return function(I) {
      return _([x, I]);
    };
  }
  function _(x) {
    if (l) throw new TypeError("Generator is already executing.");
    for (; a; ) try {
      if (l = 1, c && (h = x[0] & 2 ? c.return : x[0] ? c.throw || ((h = c.return) && h.call(c), 0) : c.next) && !(h = h.call(c, x[1])).done) return h;
      switch (c = 0, h && (x = [x[0] & 2, h.value]), x[0]) {
        case 0:
        case 1:
          h = x;
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
          if (h = a.trys, !(h = h.length > 0 && h[h.length - 1]) && (x[0] === 6 || x[0] === 2)) {
            a = 0;
            continue;
          }
          if (x[0] === 3 && (!h || x[1] > h[0] && x[1] < h[3])) {
            a.label = x[1];
            break;
          }
          if (x[0] === 6 && a.label < h[1]) {
            a.label = h[1], h = x;
            break;
          }
          if (h && a.label < h[2]) {
            a.label = h[2], a.ops.push(x);
            break;
          }
          h[2] && a.ops.pop(), a.trys.pop();
          continue;
      }
      x = r.call(o, a);
    } catch (I) {
      x = [6, I], c = 0;
    } finally {
      l = h = 0;
    }
    if (x[0] & 5) throw x[1];
    return { value: x[0] ? x[1] : void 0, done: !0 };
  }
}
var Lt = (
  /** @class */
  /* @__PURE__ */ function() {
    function o(r, a) {
      this.next = null, this.key = r, this.data = a, this.left = null, this.right = null;
    }
    return o;
  }()
);
function jp(o, r) {
  return o > r ? 1 : o < r ? -1 : 0;
}
function wt(o, r, a) {
  for (var l = new Lt(null, null), c = l, h = l; ; ) {
    var v = a(o, r.key);
    if (v < 0) {
      if (r.left === null)
        break;
      if (a(o, r.left.key) < 0) {
        var p = r.left;
        if (r.left = p.right, p.right = r, r = p, r.left === null)
          break;
      }
      h.left = r, h = r, r = r.left;
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
  return c.right = r.left, h.left = r.right, r.left = l.right, r.right = l.left, r;
}
function Wi(o, r, a, l) {
  var c = new Lt(o, r);
  if (a === null)
    return c.left = c.right = null, c;
  a = wt(o, a, l);
  var h = l(o, a.key);
  return h < 0 ? (c.left = a.left, c.right = a, a.left = null) : h >= 0 && (c.right = a.right, c.left = a, a.right = null), c;
}
function yu(o, r, a) {
  var l = null, c = null;
  if (r) {
    r = wt(o, r, a);
    var h = a(r.key, o);
    h === 0 ? (l = r.left, c = r.right) : h < 0 ? (c = r.right, r.right = null, l = r) : (l = r.left, r.left = null, c = r);
  }
  return { left: l, right: c };
}
function Vp(o, r, a) {
  return r === null ? o : (o === null || (r = wt(o.key, r, a), r.left = o), r);
}
function xs(o, r, a, l, c) {
  if (o) {
    l("" + r + (a ? "└── " : "├── ") + c(o) + `
`);
    var h = r + (a ? "    " : "│   ");
    o.left && xs(o.left, h, !1, l, c), o.right && xs(o.right, h, !0, l, c);
  }
}
var Zs = (
  /** @class */
  function() {
    function o(r) {
      r === void 0 && (r = jp), this._root = null, this._size = 0, this._comparator = r;
    }
    return o.prototype.insert = function(r, a) {
      return this._size++, this._root = Wi(r, a, this._root, this._comparator);
    }, o.prototype.add = function(r, a) {
      var l = new Lt(r, a);
      this._root === null && (l.left = l.right = null, this._size++, this._root = l);
      var c = this._comparator, h = wt(r, this._root, c), v = c(r, h.key);
      return v === 0 ? this._root = h : (v < 0 ? (l.left = h.left, l.right = h, h.left = null) : v > 0 && (l.right = h.right, l.left = h, h.right = null), this._size++, this._root = l), this._root;
    }, o.prototype.remove = function(r) {
      this._root = this._remove(r, this._root, this._comparator);
    }, o.prototype._remove = function(r, a, l) {
      var c;
      if (a === null)
        return null;
      a = wt(r, a, l);
      var h = l(r, a.key);
      return h === 0 ? (a.left === null ? c = a.right : (c = wt(r, a.left, l), c.right = a.right), this._size--, c) : a;
    }, o.prototype.pop = function() {
      var r = this._root;
      if (r) {
        for (; r.left; )
          r = r.left;
        return this._root = wt(r.key, this._root, this._comparator), this._root = this._remove(r.key, this._root, this._comparator), { key: r.key, data: r.data };
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
      return this._root && (this._root = wt(r, this._root, this._comparator), this._comparator(r, this._root.key) !== 0) ? null : this._root;
    }, o.prototype.contains = function(r) {
      for (var a = this._root, l = this._comparator; a; ) {
        var c = l(r, a.key);
        if (c === 0)
          return !0;
        c < 0 ? a = a.left : a = a.right;
      }
      return !1;
    }, o.prototype.forEach = function(r, a) {
      for (var l = this._root, c = [], h = !1; !h; )
        l !== null ? (c.push(l), l = l.left) : c.length !== 0 ? (l = c.pop(), r.call(a, l), l = l.right) : h = !0;
      return this;
    }, o.prototype.range = function(r, a, l, c) {
      for (var h = [], v = this._comparator, p = this._root, _; h.length !== 0 || p; )
        if (p)
          h.push(p), p = p.left;
        else {
          if (p = h.pop(), _ = v(p.key, a), _ > 0)
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
      for (var a = this._root, l = !1, c = 0, h = []; !l; )
        if (a)
          h.push(a), a = a.left;
        else if (h.length > 0) {
          if (a = h.pop(), c === r)
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
        var h = c(r.key, a.key);
        if (h === 0)
          break;
        h < 0 ? (l = a, a = a.left) : a = a.right;
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
        var h = c(r.key, a.key);
        if (h === 0)
          break;
        h < 0 ? a = a.left : (l = a, a = a.right);
      }
      return l;
    }, o.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, o.prototype.toList = function() {
      return Hp(this._root);
    }, o.prototype.load = function(r, a, l) {
      a === void 0 && (a = []), l === void 0 && (l = !1);
      var c = r.length, h = this._comparator;
      if (l && Is(r, a, 0, c - 1, h), this._root === null)
        this._root = Es(r, a, 0, c), this._size = c;
      else {
        var v = Zp(this.toList(), Wp(r, a), h);
        c = this._size + c, this._root = ks({ head: v }, 0, c);
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
      return xs(this._root, "", !0, function(l) {
        return a.push(l);
      }, r), a.join("");
    }, o.prototype.update = function(r, a, l) {
      var c = this._comparator, h = yu(r, this._root, c), v = h.left, p = h.right;
      c(r, a) < 0 ? p = Wi(a, l, p, c) : v = Wi(a, l, v, c), this._root = Vp(v, p, c);
    }, o.prototype.split = function(r) {
      return yu(r, this._root, this._comparator);
    }, o.prototype[Symbol.iterator] = function() {
      var r, a, l;
      return Xp(this, function(c) {
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
function Es(o, r, a, l) {
  var c = l - a;
  if (c > 0) {
    var h = a + Math.floor(c / 2), v = o[h], p = r[h], _ = new Lt(v, p);
    return _.left = Es(o, r, a, h), _.right = Es(o, r, h + 1, l), _;
  }
  return null;
}
function Wp(o, r) {
  for (var a = new Lt(null, null), l = a, c = 0; c < o.length; c++)
    l = l.next = new Lt(o[c], r[c]);
  return l.next = null, a.next;
}
function Hp(o) {
  for (var r = o, a = [], l = !1, c = new Lt(null, null), h = c; !l; )
    r ? (a.push(r), r = r.left) : a.length > 0 ? (r = h = h.next = a.pop(), r = r.right) : l = !0;
  return h.next = null, c.next;
}
function ks(o, r, a) {
  var l = a - r;
  if (l > 0) {
    var c = r + Math.floor(l / 2), h = ks(o, r, c), v = o.head;
    return v.left = h, o.head = o.head.next, v.right = ks(o, c + 1, a), v;
  }
  return null;
}
function Zp(o, r, a) {
  for (var l = new Lt(null, null), c = l, h = o, v = r; h !== null && v !== null; )
    a(h.key, v.key) < 0 ? (c.next = h, h = h.next) : (c.next = v, v = v.next), c = c.next;
  return h !== null ? c.next = h : v !== null && (c.next = v), l.next;
}
function Is(o, r, a, l, c) {
  if (!(a >= l)) {
    for (var h = o[a + l >> 1], v = a - 1, p = l + 1; ; ) {
      do
        v++;
      while (c(o[v], h) < 0);
      do
        p--;
      while (c(o[p], h) > 0);
      if (v >= p)
        break;
      var _ = o[v];
      o[v] = o[p], o[p] = _, _ = r[v], r[v] = r[p], r[p] = _;
    }
    Is(o, r, a, p, c), Is(o, r, p + 1, l, c);
  }
}
const xt = 11102230246251565e-32, Te = 134217729, Jp = (3 + 8 * xt) * xt;
function Hi(o, r, a, l, c) {
  let h, v, p, _, x = r[0], I = l[0], m = 0, E = 0;
  I > x == I > -x ? (h = x, x = r[++m]) : (h = I, I = l[++E]);
  let k = 0;
  if (m < o && E < a)
    for (I > x == I > -x ? (v = x + h, p = h - (v - x), x = r[++m]) : (v = I + h, p = h - (v - I), I = l[++E]), h = v, p !== 0 && (c[k++] = p); m < o && E < a; )
      I > x == I > -x ? (v = h + x, _ = v - h, p = h - (v - _) + (x - _), x = r[++m]) : (v = h + I, _ = v - h, p = h - (v - _) + (I - _), I = l[++E]), h = v, p !== 0 && (c[k++] = p);
  for (; m < o; )
    v = h + x, _ = v - h, p = h - (v - _) + (x - _), x = r[++m], h = v, p !== 0 && (c[k++] = p);
  for (; E < a; )
    v = h + I, _ = v - h, p = h - (v - _) + (I - _), I = l[++E], h = v, p !== 0 && (c[k++] = p);
  return (h !== 0 || k === 0) && (c[k++] = h), k;
}
function Qp(o, r) {
  let a = r[0];
  for (let l = 1; l < o; l++) a += r[l];
  return a;
}
function Kn(o) {
  return new Float64Array(o);
}
const Kp = (3 + 16 * xt) * xt, em = (2 + 12 * xt) * xt, tm = (9 + 64 * xt) * xt * xt, sn = Kn(4), vu = Kn(8), pu = Kn(12), mu = Kn(16), Pe = Kn(4);
function nm(o, r, a, l, c, h, v) {
  let p, _, x, I, m, E, k, w, C, T, R, P, A, D, M, G, Y, U;
  const X = o - c, ie = a - c, ee = r - h, te = l - h;
  D = X * te, E = Te * X, k = E - (E - X), w = X - k, E = Te * te, C = E - (E - te), T = te - C, M = w * T - (D - k * C - w * C - k * T), G = ee * ie, E = Te * ee, k = E - (E - ee), w = ee - k, E = Te * ie, C = E - (E - ie), T = ie - C, Y = w * T - (G - k * C - w * C - k * T), R = M - Y, m = M - R, sn[0] = M - (R + m) + (m - Y), P = D + R, m = P - D, A = D - (P - m) + (R - m), R = A - G, m = A - R, sn[1] = A - (R + m) + (m - G), U = P + R, m = U - P, sn[2] = P - (U - m) + (R - m), sn[3] = U;
  let ae = Qp(4, sn), q = em * v;
  if (ae >= q || -ae >= q || (m = o - X, p = o - (X + m) + (m - c), m = a - ie, x = a - (ie + m) + (m - c), m = r - ee, _ = r - (ee + m) + (m - h), m = l - te, I = l - (te + m) + (m - h), p === 0 && _ === 0 && x === 0 && I === 0) || (q = tm * v + Jp * Math.abs(ae), ae += X * I + te * p - (ee * x + ie * _), ae >= q || -ae >= q)) return ae;
  D = p * te, E = Te * p, k = E - (E - p), w = p - k, E = Te * te, C = E - (E - te), T = te - C, M = w * T - (D - k * C - w * C - k * T), G = _ * ie, E = Te * _, k = E - (E - _), w = _ - k, E = Te * ie, C = E - (E - ie), T = ie - C, Y = w * T - (G - k * C - w * C - k * T), R = M - Y, m = M - R, Pe[0] = M - (R + m) + (m - Y), P = D + R, m = P - D, A = D - (P - m) + (R - m), R = A - G, m = A - R, Pe[1] = A - (R + m) + (m - G), U = P + R, m = U - P, Pe[2] = P - (U - m) + (R - m), Pe[3] = U;
  const ne = Hi(4, sn, 4, Pe, vu);
  D = X * I, E = Te * X, k = E - (E - X), w = X - k, E = Te * I, C = E - (E - I), T = I - C, M = w * T - (D - k * C - w * C - k * T), G = ee * x, E = Te * ee, k = E - (E - ee), w = ee - k, E = Te * x, C = E - (E - x), T = x - C, Y = w * T - (G - k * C - w * C - k * T), R = M - Y, m = M - R, Pe[0] = M - (R + m) + (m - Y), P = D + R, m = P - D, A = D - (P - m) + (R - m), R = A - G, m = A - R, Pe[1] = A - (R + m) + (m - G), U = P + R, m = U - P, Pe[2] = P - (U - m) + (R - m), Pe[3] = U;
  const ue = Hi(ne, vu, 4, Pe, pu);
  D = p * I, E = Te * p, k = E - (E - p), w = p - k, E = Te * I, C = E - (E - I), T = I - C, M = w * T - (D - k * C - w * C - k * T), G = _ * x, E = Te * _, k = E - (E - _), w = _ - k, E = Te * x, C = E - (E - x), T = x - C, Y = w * T - (G - k * C - w * C - k * T), R = M - Y, m = M - R, Pe[0] = M - (R + m) + (m - Y), P = D + R, m = P - D, A = D - (P - m) + (R - m), R = A - G, m = A - R, Pe[1] = A - (R + m) + (m - G), U = P + R, m = U - P, Pe[2] = P - (U - m) + (R - m), Pe[3] = U;
  const ye = Hi(ue, pu, 4, Pe, mu);
  return mu[ye - 1];
}
function rm(o, r, a, l, c, h) {
  const v = (r - h) * (a - c), p = (o - c) * (l - h), _ = v - p, x = Math.abs(v + p);
  return Math.abs(_) >= Kp * x ? _ : -nm(o, r, a, l, c, h, x);
}
const $n = (o, r) => o.ll.x <= r.x && r.x <= o.ur.x && o.ll.y <= r.y && r.y <= o.ur.y, Ss = (o, r) => {
  if (r.ur.x < o.ll.x || o.ur.x < r.ll.x || r.ur.y < o.ll.y || o.ur.y < r.ll.y) return null;
  const a = o.ll.x < r.ll.x ? r.ll.x : o.ll.x, l = o.ur.x < r.ur.x ? o.ur.x : r.ur.x, c = o.ll.y < r.ll.y ? r.ll.y : o.ll.y, h = o.ur.y < r.ur.y ? o.ur.y : r.ur.y;
  return {
    ll: {
      x: a,
      y: c
    },
    ur: {
      x: l,
      y: h
    }
  };
};
let Ot = Number.EPSILON;
Ot === void 0 && (Ot = Math.pow(2, -52));
const im = Ot * Ot, du = (o, r) => {
  if (-Ot < o && o < Ot && -Ot < r && r < Ot)
    return 0;
  const a = o - r;
  return a * a < im * o * r ? 0 : o < r ? -1 : 1;
};
class sm {
  constructor() {
    this.reset();
  }
  reset() {
    this.xRounder = new _u(), this.yRounder = new _u();
  }
  round(r, a) {
    return {
      x: this.xRounder.round(r),
      y: this.yRounder.round(a)
    };
  }
}
class _u {
  constructor() {
    this.tree = new Zs(), this.round(0);
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
    if (l !== null && du(a.key, l.key) === 0)
      return this.tree.remove(r), l.key;
    const c = this.tree.next(a);
    return c !== null && du(a.key, c.key) === 0 ? (this.tree.remove(r), c.key) : r;
  }
}
const Hn = new sm(), Lr = (o, r) => o.x * r.y - o.y * r.x, ec = (o, r) => o.x * r.x + o.y * r.y, xu = (o, r, a) => {
  const l = rm(o.x, o.y, r.x, r.y, a.x, a.y);
  return l > 0 ? -1 : l < 0 ? 1 : 0;
}, Vr = (o) => Math.sqrt(ec(o, o)), am = (o, r, a) => {
  const l = {
    x: r.x - o.x,
    y: r.y - o.y
  }, c = {
    x: a.x - o.x,
    y: a.y - o.y
  };
  return Lr(c, l) / Vr(c) / Vr(l);
}, om = (o, r, a) => {
  const l = {
    x: r.x - o.x,
    y: r.y - o.y
  }, c = {
    x: a.x - o.x,
    y: a.y - o.y
  };
  return ec(c, l) / Vr(c) / Vr(l);
}, Eu = (o, r, a) => r.y === 0 ? null : {
  x: o.x + r.x / r.y * (a - o.y),
  y: a
}, ku = (o, r, a) => r.x === 0 ? null : {
  x: a,
  y: o.y + r.y / r.x * (a - o.x)
}, um = (o, r, a, l) => {
  if (r.x === 0) return ku(a, l, o.x);
  if (l.x === 0) return ku(o, r, a.x);
  if (r.y === 0) return Eu(a, l, o.y);
  if (l.y === 0) return Eu(o, r, a.y);
  const c = Lr(r, l);
  if (c == 0) return null;
  const h = {
    x: a.x - o.x,
    y: a.y - o.y
  }, v = Lr(h, r) / c, p = Lr(h, l) / c, _ = o.x + p * r.x, x = a.x + v * l.x, I = o.y + p * r.y, m = a.y + v * l.y, E = (_ + x) / 2, k = (I + m) / 2;
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
      const h = a[l];
      this.point.events.push(h), h.point = this.point;
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
          const h = this.point.events[c];
          h.consumedBy === void 0 && l.otherSE.point.events === h.otherSE.point.events && l.segment.consume(h.segment);
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
      const h = c.otherSE;
      a.set(c, {
        sine: am(this.point, r.point, h.point),
        cosine: om(this.point, r.point, h.point)
      });
    };
    return (c, h) => {
      a.has(c) || l(c), a.has(h) || l(h);
      const {
        sine: v,
        cosine: p
      } = a.get(c), {
        sine: _,
        cosine: x
      } = a.get(h);
      return v >= 0 && _ >= 0 ? p < x ? 1 : p > x ? -1 : 0 : v < 0 && _ < 0 ? p < x ? -1 : p > x ? 1 : 0 : _ < v ? -1 : _ > v ? 1 : 0;
    };
  }
}
let lm = 0;
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
    const l = r.leftSE.point.x, c = a.leftSE.point.x, h = r.rightSE.point.x, v = a.rightSE.point.x;
    if (v < l) return 1;
    if (h < c) return -1;
    const p = r.leftSE.point.y, _ = a.leftSE.point.y, x = r.rightSE.point.y, I = a.rightSE.point.y;
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
      if (p < _ && p < I) return -1;
      if (p > _ && p > I) return 1;
      const m = a.comparePoint(r.leftSE.point);
      if (m !== 0) return m;
      const E = r.comparePoint(a.rightSE.point);
      return E < 0 ? 1 : E > 0 ? -1 : 1;
    }
    if (p < _) return -1;
    if (p > _) return 1;
    if (h < v) {
      const m = a.comparePoint(r.rightSE.point);
      if (m !== 0) return m;
    }
    if (h > v) {
      const m = r.comparePoint(a.rightSE.point);
      if (m < 0) return 1;
      if (m > 0) return -1;
    }
    if (h !== v) {
      const m = x - p, E = h - l, k = I - _, w = v - c;
      if (m > E && k < w) return 1;
      if (m < E && k > w) return -1;
    }
    return h > v ? 1 : h < v || x < I ? -1 : x > I ? 1 : r.id < a.id ? -1 : r.id > a.id ? 1 : 0;
  }
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(r, a, l, c) {
    this.id = ++lm, this.leftSE = r, r.segment = this, r.otherSE = a, this.rightSE = a, a.segment = this, a.otherSE = r, this.rings = l, this.windings = c;
  }
  static fromRing(r, a, l) {
    let c, h, v;
    const p = je.comparePoints(r, a);
    if (p < 0)
      c = r, h = a, v = 1;
    else if (p > 0)
      c = a, h = r, v = -1;
    else throw new Error(`Tried to create degenerate segment at [${r.x}, ${r.y}]`);
    const _ = new je(c, !0), x = new je(h, !1);
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
    const h = (r.y - a.y) / c.y, v = a.x + h * c.x;
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
    const a = this.bbox(), l = r.bbox(), c = Ss(a, l);
    if (c === null) return null;
    const h = this.leftSE.point, v = this.rightSE.point, p = r.leftSE.point, _ = r.rightSE.point, x = $n(a, p) && this.comparePoint(p) === 0, I = $n(l, h) && r.comparePoint(h) === 0, m = $n(a, _) && this.comparePoint(_) === 0, E = $n(l, v) && r.comparePoint(v) === 0;
    if (I && x)
      return E && !m ? v : !E && m ? _ : null;
    if (I)
      return m && h.x === _.x && h.y === _.y ? null : h;
    if (x)
      return E && v.x === p.x && v.y === p.y ? null : p;
    if (E && m) return null;
    if (E) return v;
    if (m) return _;
    const k = um(h, this.vector(), p, r.vector());
    return k === null || !$n(c, k) ? null : Hn.round(k.x, k.y);
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
    const a = [], l = r.events !== void 0, c = new je(r, !0), h = new je(r, !1), v = this.rightSE;
    this.replaceRightSE(h), a.push(h), a.push(c);
    const p = new Tt(c, v, this.rings.slice(), this.windings.slice());
    return je.comparePoints(p.leftSE.point, p.rightSE.point) > 0 && p.swapEvents(), je.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), l && (c.checkForConsuming(), h.checkForConsuming()), a;
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
        const h = a;
        a = l, l = h;
      }
      if (a.prev === l) {
        const h = a;
        a = l, l = h;
      }
      for (let h = 0, v = l.rings.length; h < v; h++) {
        const p = l.rings[h], _ = l.windings[h], x = a.rings.indexOf(p);
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
      const x = this.rings[p], I = this.windings[p], m = a.indexOf(x);
      m === -1 ? (a.push(x), l.push(I)) : l[m] += I;
    }
    const h = [], v = [];
    for (let p = 0, _ = a.length; p < _; p++) {
      if (l[p] === 0) continue;
      const x = a[p], I = x.poly;
      if (v.indexOf(I) === -1)
        if (x.isExterior) h.push(I);
        else {
          v.indexOf(I) === -1 && v.push(I);
          const m = h.indexOf(x.poly);
          m !== -1 && h.splice(m, 1);
        }
    }
    for (let p = 0, _ = h.length; p < _; p++) {
      const x = h[p].multiPoly;
      c.indexOf(x) === -1 && c.push(x);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const r = this.beforeState().multiPolys, a = this.afterState().multiPolys;
    switch (Ke.type) {
      case "union": {
        const l = r.length === 0, c = a.length === 0;
        this._isInResult = l !== c;
        break;
      }
      case "intersection": {
        let l, c;
        r.length < a.length ? (l = r.length, c = a.length) : (l = a.length, c = r.length), this._isInResult = c === Ke.numMultiPolys && l < c;
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
        throw new Error(`Unrecognized operation type found ${Ke.type}`);
    }
    return this._isInResult;
  }
}
class Iu {
  constructor(r, a, l) {
    if (!Array.isArray(r) || r.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = a, this.isExterior = l, this.segments = [], typeof r[0][0] != "number" || typeof r[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const c = Hn.round(r[0][0], r[0][1]);
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
    let h = c;
    for (let v = 1, p = r.length; v < p; v++) {
      if (typeof r[v][0] != "number" || typeof r[v][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      let _ = Hn.round(r[v][0], r[v][1]);
      _.x === h.x && _.y === h.y || (this.segments.push(Tt.fromRing(h, _, this)), _.x < this.bbox.ll.x && (this.bbox.ll.x = _.x), _.y < this.bbox.ll.y && (this.bbox.ll.y = _.y), _.x > this.bbox.ur.x && (this.bbox.ur.x = _.x), _.y > this.bbox.ur.y && (this.bbox.ur.y = _.y), h = _);
    }
    (c.x !== h.x || c.y !== h.y) && this.segments.push(Tt.fromRing(h, c, this));
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
class cm {
  constructor(r, a) {
    if (!Array.isArray(r))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Iu(r[0], this, !0), this.bbox = {
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
      const h = new Iu(r[l], this, !1);
      h.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = h.bbox.ll.x), h.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = h.bbox.ll.y), h.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = h.bbox.ur.x), h.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = h.bbox.ur.y), this.interiorRings.push(h);
    }
    this.multiPoly = a;
  }
  getSweepEvents() {
    const r = this.exteriorRing.getSweepEvents();
    for (let a = 0, l = this.interiorRings.length; a < l; a++) {
      const c = this.interiorRings[a].getSweepEvents();
      for (let h = 0, v = c.length; h < v; h++)
        r.push(c[h]);
    }
    return r;
  }
}
class Su {
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
      const h = new cm(r[l], this);
      h.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = h.bbox.ll.x), h.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = h.bbox.ll.y), h.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = h.bbox.ur.x), h.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = h.bbox.ur.y), this.polys.push(h);
    }
    this.isSubject = a;
  }
  getSweepEvents() {
    const r = [];
    for (let a = 0, l = this.polys.length; a < l; a++) {
      const c = this.polys[a].getSweepEvents();
      for (let h = 0, v = c.length; h < v; h++)
        r.push(c[h]);
    }
    return r;
  }
}
class Wr {
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(r) {
    const a = [];
    for (let l = 0, c = r.length; l < c; l++) {
      const h = r[l];
      if (!h.isInResult() || h.ringOut) continue;
      let v = null, p = h.leftSE, _ = h.rightSE;
      const x = [p], I = p.point, m = [];
      for (; v = p, p = _, x.push(p), p.point !== I; )
        for (; ; ) {
          const E = p.getAvailableLinkedEvents();
          if (E.length === 0) {
            const C = x[0].point, T = x[x.length - 1].point;
            throw new Error(`Unable to complete output ring starting at [${C.x}, ${C.y}]. Last matching segment found ends at [${T.x}, ${T.y}].`);
          }
          if (E.length === 1) {
            _ = E[0].otherSE;
            break;
          }
          let k = null;
          for (let C = 0, T = m.length; C < T; C++)
            if (m[C].point === p.point) {
              k = C;
              break;
            }
          if (k !== null) {
            const C = m.splice(k)[0], T = x.splice(C.index);
            T.unshift(T[0].otherSE), a.push(new Wr(T.reverse()));
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
      a.push(new Wr(x));
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
    for (let x = 1, I = this.events.length - 1; x < I; x++) {
      const m = this.events[x].point, E = this.events[x + 1].point;
      xu(m, r, E) !== 0 && (a.push(m), r = m);
    }
    if (a.length === 1) return null;
    const l = a[0], c = a[1];
    xu(l, r, c) === 0 && a.shift(), a.push(a[0]);
    const h = this.isExteriorRing() ? 1 : -1, v = this.isExteriorRing() ? 0 : a.length - 1, p = this.isExteriorRing() ? a.length : -1, _ = [];
    for (let x = v; x != p; x += h) _.push([a[x].x, a[x].y]);
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
    for (let c = 1, h = this.events.length; c < h; c++) {
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
class Nu {
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
class fm {
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
      const h = r[l];
      if (!h.poly)
        if (h.isExteriorRing()) a.push(new Nu(h));
        else {
          const v = h.enclosingRing();
          v.poly || a.push(new Nu(v)), v.poly.addInterior(h);
        }
    }
    return a;
  }
}
class hm {
  constructor(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tt.compare;
    this.queue = r, this.tree = new Zs(a), this.segments = [];
  }
  process(r) {
    const a = r.segment, l = [];
    if (r.consumedBy)
      return r.isLeft ? this.queue.remove(r.otherSE) : this.tree.remove(a), l;
    const c = r.isLeft ? this.tree.add(a) : this.tree.find(a);
    if (!c) throw new Error(`Unable to find segment #${a.id} [${a.leftSE.point.x}, ${a.leftSE.point.y}] -> [${a.rightSE.point.x}, ${a.rightSE.point.y}] in SweepLine tree.`);
    let h = c, v = c, p, _;
    for (; p === void 0; )
      h = this.tree.prev(h), h === null ? p = null : h.key.consumedBy === void 0 && (p = h.key);
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
      let I = null;
      if (_) {
        const m = _.getIntersection(a);
        if (m !== null && (a.isAnEndpoint(m) || (I = m), !_.isAnEndpoint(m))) {
          const E = this._splitSafely(_, m);
          for (let k = 0, w = E.length; k < w; k++)
            l.push(E[k]);
        }
      }
      if (x !== null || I !== null) {
        let m = null;
        x === null ? m = I : I === null ? m = x : m = je.comparePoints(x, I) <= 0 ? x : I, this.queue.remove(a.rightSE), l.push(a.rightSE);
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
            const I = this._splitSafely(p, x);
            for (let m = 0, E = I.length; m < E; m++)
              l.push(I[m]);
          }
          if (!_.isAnEndpoint(x)) {
            const I = this._splitSafely(_, x);
            for (let m = 0, E = I.length; m < E; m++)
              l.push(I[m]);
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
const wu = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, gm = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6;
class ym {
  run(r, a, l) {
    Ke.type = r, Hn.reset();
    const c = [new Su(a, !0)];
    for (let m = 0, E = l.length; m < E; m++)
      c.push(new Su(l[m], !1));
    if (Ke.numMultiPolys = c.length, Ke.type === "difference") {
      const m = c[0];
      let E = 1;
      for (; E < c.length; )
        Ss(c[E].bbox, m.bbox) !== null ? E++ : c.splice(E, 1);
    }
    if (Ke.type === "intersection")
      for (let m = 0, E = c.length; m < E; m++) {
        const k = c[m];
        for (let w = m + 1, C = c.length; w < C; w++)
          if (Ss(k.bbox, c[w].bbox) === null) return [];
      }
    const h = new Zs(je.compare);
    for (let m = 0, E = c.length; m < E; m++) {
      const k = c[m].getSweepEvents();
      for (let w = 0, C = k.length; w < C; w++)
        if (h.insert(k[w]), h.size > wu)
          throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).");
    }
    const v = new hm(h);
    let p = h.size, _ = h.pop();
    for (; _; ) {
      const m = _.key;
      if (h.size === p) {
        const k = m.segment;
        throw new Error(`Unable to pop() ${m.isLeft ? "left" : "right"} SweepEvent [${m.point.x}, ${m.point.y}] from segment #${k.id} [${k.leftSE.point.x}, ${k.leftSE.point.y}] -> [${k.rightSE.point.x}, ${k.rightSE.point.y}] from queue.`);
      }
      if (h.size > wu)
        throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");
      if (v.segments.length > gm)
        throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");
      const E = v.process(m);
      for (let k = 0, w = E.length; k < w; k++) {
        const C = E[k];
        C.consumedBy === void 0 && h.insert(C);
      }
      p = h.size, _ = h.pop();
    }
    Hn.reset();
    const x = Wr.factory(v.segments);
    return new fm(x).getGeom();
  }
}
const Ke = new ym(), vm = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Ke.run("union", o, a);
}, pm = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Ke.run("intersection", o, a);
}, mm = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Ke.run("xor", o, a);
}, dm = function(o) {
  for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
    a[l - 1] = arguments[l];
  return Ke.run("difference", o, a);
};
var tc = {
  union: vm,
  intersection: pm,
  xor: mm,
  difference: dm
}, _m = Object.defineProperty, be = (o, r) => _m(o, "name", { value: r, configurable: !0 });
function En(o, r, a) {
  if (o !== null)
    for (var l, c, h, v, p, _, x, I = 0, m = 0, E, k = o.type, w = k === "FeatureCollection", C = k === "Feature", T = w ? o.features.length : 1, R = 0; R < T; R++) {
      x = w ? o.features[R].geometry : C ? o.geometry : o, E = x ? x.type === "GeometryCollection" : !1, p = E ? x.geometries.length : 1;
      for (var P = 0; P < p; P++) {
        var A = 0, D = 0;
        if (v = E ? x.geometries[P] : x, v !== null) {
          _ = v.coordinates;
          var M = v.type;
          switch (I = a && (M === "Polygon" || M === "MultiPolygon") ? 1 : 0, M) {
            case null:
              break;
            case "Point":
              if (r(
                _,
                m,
                R,
                A,
                D
              ) === !1)
                return !1;
              m++, A++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < _.length; l++) {
                if (r(
                  _[l],
                  m,
                  R,
                  A,
                  D
                ) === !1)
                  return !1;
                m++, M === "MultiPoint" && A++;
              }
              M === "LineString" && A++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < _.length; l++) {
                for (c = 0; c < _[l].length - I; c++) {
                  if (r(
                    _[l][c],
                    m,
                    R,
                    A,
                    D
                  ) === !1)
                    return !1;
                  m++;
                }
                M === "MultiLineString" && A++, M === "Polygon" && D++;
              }
              M === "Polygon" && A++;
              break;
            case "MultiPolygon":
              for (l = 0; l < _.length; l++) {
                for (D = 0, c = 0; c < _[l].length; c++) {
                  for (h = 0; h < _[l][c].length - I; h++) {
                    if (r(
                      _[l][c][h],
                      m,
                      R,
                      A,
                      D
                    ) === !1)
                      return !1;
                    m++;
                  }
                  D++;
                }
                A++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < v.geometries.length; l++)
                if (En(v.geometries[l], r, a) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
be(En, "coordEach");
function xm(o, r, a, l) {
  var c = a;
  return En(
    o,
    function(h, v, p, _, x) {
      v === 0 && a === void 0 ? c = h : c = r(
        c,
        h,
        v,
        p,
        _,
        x
      );
    },
    l
  ), c;
}
be(xm, "coordReduce");
function nc(o, r) {
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
be(nc, "propEach");
function Em(o, r, a) {
  var l = a;
  return nc(o, function(c, h) {
    h === 0 && a === void 0 ? l = c : l = r(l, c, h);
  }), l;
}
be(Em, "propReduce");
function Hr(o, r) {
  if (o.type === "Feature")
    r(o, 0);
  else if (o.type === "FeatureCollection")
    for (var a = 0; a < o.features.length && r(o.features[a], a) !== !1; a++)
      ;
}
be(Hr, "featureEach");
function km(o, r, a) {
  var l = a;
  return Hr(o, function(c, h) {
    h === 0 && a === void 0 ? l = c : l = r(l, c, h);
  }), l;
}
be(km, "featureReduce");
function Im(o) {
  var r = [];
  return En(o, function(a) {
    r.push(a);
  }), r;
}
be(Im, "coordAll");
function Vt(o, r) {
  var a, l, c, h, v, p, _, x, I, m, E = 0, k = o.type === "FeatureCollection", w = o.type === "Feature", C = k ? o.features.length : 1;
  for (a = 0; a < C; a++) {
    for (p = k ? o.features[a].geometry : w ? o.geometry : o, x = k ? o.features[a].properties : w ? o.properties : {}, I = k ? o.features[a].bbox : w ? o.bbox : void 0, m = k ? o.features[a].id : w ? o.id : void 0, _ = p ? p.type === "GeometryCollection" : !1, v = _ ? p.geometries.length : 1, c = 0; c < v; c++) {
      if (h = _ ? p.geometries[c] : p, h === null) {
        if (r(
          null,
          E,
          x,
          I,
          m
        ) === !1)
          return !1;
        continue;
      }
      switch (h.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (r(
            h,
            E,
            x,
            I,
            m
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (l = 0; l < h.geometries.length; l++)
            if (r(
              h.geometries[l],
              E,
              x,
              I,
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
be(Vt, "geomEach");
function Sm(o, r, a) {
  var l = a;
  return Vt(
    o,
    function(c, h, v, p, _) {
      h === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        h,
        v,
        p,
        _
      );
    }
  ), l;
}
be(Sm, "geomReduce");
function si(o, r) {
  Vt(o, function(a, l, c, h, v) {
    var p = a === null ? null : a.type;
    switch (p) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return r(
          Ve(a, c, { bbox: h, id: v }),
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
      var I = a.coordinates[x], m = {
        type: _,
        coordinates: I
      };
      if (r(Ve(m, c), l, x) === !1)
        return !1;
    }
  });
}
be(si, "flattenEach");
function Nm(o, r, a) {
  var l = a;
  return si(
    o,
    function(c, h, v) {
      h === 0 && v === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        h,
        v
      );
    }
  ), l;
}
be(Nm, "flattenReduce");
function rc(o, r) {
  si(o, function(a, l, c) {
    var h = 0;
    if (a.geometry) {
      var v = a.geometry.type;
      if (!(v === "Point" || v === "MultiPoint")) {
        var p, _ = 0, x = 0, I = 0;
        if (En(
          a,
          function(m, E, k, w, C) {
            if (p === void 0 || l > _ || w > x || C > I) {
              p = m, _ = l, x = w, I = C, h = 0;
              return;
            }
            var T = _t(
              [p, m],
              a.properties
            );
            if (r(
              T,
              l,
              c,
              C,
              h
            ) === !1)
              return !1;
            h++, p = m;
          }
        ) === !1)
          return !1;
      }
    }
  });
}
be(rc, "segmentEach");
function wm(o, r, a) {
  var l = a, c = !1;
  return rc(
    o,
    function(h, v, p, _, x) {
      c === !1 && a === void 0 ? l = h : l = r(
        l,
        h,
        v,
        p,
        _,
        x
      ), c = !0;
    }
  ), l;
}
be(wm, "segmentReduce");
function ic(o, r) {
  if (!o)
    throw new Error("geojson is required");
  si(o, function(a, l, c) {
    if (a.geometry !== null) {
      var h = a.geometry.type, v = a.geometry.coordinates;
      switch (h) {
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
be(ic, "lineEach");
function bm(o, r, a) {
  var l = a;
  return ic(
    o,
    function(c, h, v, p) {
      h === 0 && a === void 0 ? l = c : l = r(
        l,
        c,
        h,
        v,
        p
      );
    }
  ), l;
}
be(bm, "lineReduce");
function Om(o, r) {
  if (r = r || {}, !Hs(r))
    throw new Error("options is invalid");
  var a = r.featureIndex || 0, l = r.multiFeatureIndex || 0, c = r.geometryIndex || 0, h = r.segmentIndex || 0, v = r.properties, p;
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
      return h < 0 && (h = _.length + h - 1), _t(
        [_[h], _[h + 1]],
        v,
        r
      );
    case "Polygon":
      return c < 0 && (c = _.length + c), h < 0 && (h = _[c].length + h - 1), _t(
        [
          _[c][h],
          _[c][h + 1]
        ],
        v,
        r
      );
    case "MultiLineString":
      return l < 0 && (l = _.length + l), h < 0 && (h = _[l].length + h - 1), _t(
        [
          _[l][h],
          _[l][h + 1]
        ],
        v,
        r
      );
    case "MultiPolygon":
      return l < 0 && (l = _.length + l), c < 0 && (c = _[l].length + c), h < 0 && (h = _[l][c].length - h - 1), _t(
        [
          _[l][c][h],
          _[l][c][h + 1]
        ],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
be(Om, "findSegment");
function Tm(o, r) {
  if (r = r || {}, !Hs(r))
    throw new Error("options is invalid");
  var a = r.featureIndex || 0, l = r.multiFeatureIndex || 0, c = r.geometryIndex || 0, h = r.coordIndex || 0, v = r.properties, p;
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
      return ut(_, v, r);
    case "MultiPoint":
      return l < 0 && (l = _.length + l), ut(_[l], v, r);
    case "LineString":
      return h < 0 && (h = _.length + h), ut(_[h], v, r);
    case "Polygon":
      return c < 0 && (c = _.length + c), h < 0 && (h = _[c].length + h), ut(_[c][h], v, r);
    case "MultiLineString":
      return l < 0 && (l = _.length + l), h < 0 && (h = _[l].length + h), ut(_[l][h], v, r);
    case "MultiPolygon":
      return l < 0 && (l = _.length + l), c < 0 && (c = _[l].length + c), h < 0 && (h = _[l][c].length - h), ut(
        _[l][c][h],
        v,
        r
      );
  }
  throw new Error("geojson is invalid");
}
be(Tm, "findPoint");
var Lm = Object.defineProperty, Rm = (o, r) => Lm(o, "name", { value: r, configurable: !0 });
function sc(o, r = {}) {
  const a = [];
  if (Vt(o, (c) => {
    a.push(c.coordinates);
  }), a.length < 2)
    throw new Error("Must have at least 2 geometries");
  const l = tc.union(a[0], ...a.slice(1));
  return l.length === 0 ? null : l.length === 1 ? xn(l[0], r.properties) : ri(l, r.properties);
}
Rm(sc, "union");
var Cm = sc;
function Zn() {
}
function ac(o) {
  return o();
}
function bu() {
  return /* @__PURE__ */ Object.create(null);
}
function ai(o) {
  o.forEach(ac);
}
function oc(o) {
  return typeof o == "function";
}
function Pm(o, r) {
  return o != o ? r == r : o !== r || o && typeof o == "object" || typeof o == "function";
}
function Am(o) {
  return Object.keys(o).length === 0;
}
function Mm(o, r) {
  o.appendChild(r);
}
function Dm(o, r, a) {
  o.insertBefore(r, a || null);
}
function uc(o) {
  o.parentNode && o.parentNode.removeChild(o);
}
function Ou(o) {
  return document.createElementNS("http://www.w3.org/2000/svg", o);
}
function It(o, r, a) {
  a == null ? o.removeAttribute(r) : o.getAttribute(r) !== a && o.setAttribute(r, a);
}
function Fm(o) {
  return Array.from(o.childNodes);
}
function vr(o, r, a) {
  o.classList.toggle(r, !!a);
}
let Js;
function Xn(o) {
  Js = o;
}
const un = [], Tu = [];
let fn = [];
const Lu = [], $m = /* @__PURE__ */ Promise.resolve();
let Ns = !1;
function Bm() {
  Ns || (Ns = !0, $m.then(lc));
}
function ws(o) {
  fn.push(o);
}
const Zi = /* @__PURE__ */ new Set();
let an = 0;
function lc() {
  if (an !== 0)
    return;
  const o = Js;
  do {
    try {
      for (; an < un.length; ) {
        const r = un[an];
        an++, Xn(r), Gm(r.$$);
      }
    } catch (r) {
      throw un.length = 0, an = 0, r;
    }
    for (Xn(null), un.length = 0, an = 0; Tu.length; ) Tu.pop()();
    for (let r = 0; r < fn.length; r += 1) {
      const a = fn[r];
      Zi.has(a) || (Zi.add(a), a());
    }
    fn.length = 0;
  } while (un.length);
  for (; Lu.length; )
    Lu.pop()();
  Ns = !1, Zi.clear(), Xn(o);
}
function Gm(o) {
  if (o.fragment !== null) {
    o.update(), ai(o.before_update);
    const r = o.dirty;
    o.dirty = [-1], o.fragment && o.fragment.p(o.ctx, r), o.after_update.forEach(ws);
  }
}
function qm(o) {
  const r = [], a = [];
  fn.forEach((l) => o.indexOf(l) === -1 ? r.push(l) : a.push(l)), a.forEach((l) => l()), fn = r;
}
const zm = /* @__PURE__ */ new Set();
function Ym(o, r) {
  o && o.i && (zm.delete(o), o.i(r));
}
function Um(o, r, a) {
  const { fragment: l, after_update: c } = o.$$;
  l && l.m(r, a), ws(() => {
    const h = o.$$.on_mount.map(ac).filter(oc);
    o.$$.on_destroy ? o.$$.on_destroy.push(...h) : ai(h), o.$$.on_mount = [];
  }), c.forEach(ws);
}
function Xm(o, r) {
  const a = o.$$;
  a.fragment !== null && (qm(a.after_update), ai(a.on_destroy), a.fragment && a.fragment.d(r), a.on_destroy = a.fragment = null, a.ctx = []);
}
function jm(o, r) {
  o.$$.dirty[0] === -1 && (un.push(o), Bm(), o.$$.dirty.fill(0)), o.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Vm(o, r, a, l, c, h, v = null, p = [-1]) {
  const _ = Js;
  Xn(o);
  const x = o.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: h,
    update: Zn,
    not_equal: c,
    bound: bu(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (_ ? _.$$.context : [])),
    // everything else
    callbacks: bu(),
    dirty: p,
    skip_bound: !1,
    root: r.target || _.$$.root
  };
  v && v(x.root);
  let I = !1;
  if (x.ctx = a ? a(o, r.props || {}, (m, E, ...k) => {
    const w = k.length ? k[0] : E;
    return x.ctx && c(x.ctx[m], x.ctx[m] = w) && (!x.skip_bound && x.bound[m] && x.bound[m](w), I && jm(o, m)), E;
  }) : [], x.update(), I = !0, ai(x.before_update), x.fragment = l ? l(x.ctx) : !1, r.target) {
    if (r.hydrate) {
      const m = Fm(r.target);
      x.fragment && x.fragment.l(m), m.forEach(uc);
    } else
      x.fragment && x.fragment.c();
    r.intro && Ym(o.$$.fragment), Um(o, r.target, r.anchor), lc();
  }
  Xn(_);
}
class Wm {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Oi(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Oi(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Xm(this, 1), this.$destroy = Zn;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, a) {
    if (!oc(a))
      return Zn;
    const l = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return l.push(a), () => {
      const c = l.indexOf(a);
      c !== -1 && l.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !Am(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Hm = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hm);
function Zm(o) {
  let r, a, l;
  return {
    c() {
      r = Ou("svg"), a = Ou("path"), It(a, "stroke-width", "4"), It(a, "d", "M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"), It(a, "class", "svelte-gzo3ar"), It(r, "width", l = /*displayIn*/
      o[0] === "list" ? 20 : void 0), It(r, "viewBox", "0 0 70 85"), It(r, "fill", "none"), It(r, "class", "svelte-gzo3ar"), vr(
        r,
        "in-map",
        /*displayIn*/
        o[0] !== "list"
      ), vr(
        r,
        "list-icon",
        /*displayIn*/
        o[0] === "list"
      );
    },
    m(c, h) {
      Dm(c, r, h), Mm(r, a);
    },
    p(c, [h]) {
      h & /*displayIn*/
      1 && l !== (l = /*displayIn*/
      c[0] === "list" ? 20 : void 0) && It(r, "width", l), h & /*displayIn*/
      1 && vr(
        r,
        "in-map",
        /*displayIn*/
        c[0] !== "list"
      ), h & /*displayIn*/
      1 && vr(
        r,
        "list-icon",
        /*displayIn*/
        c[0] === "list"
      );
    },
    i: Zn,
    o: Zn,
    d(c) {
      c && uc(r);
    }
  };
}
function Jm(o, r, a) {
  let { displayIn: l } = r;
  return o.$$set = (c) => {
    "displayIn" in c && a(0, l = c.displayIn);
  }, [l];
}
class Qm extends Wm {
  constructor(r) {
    super(), Vm(this, r, Jm, Zm, Pm, { displayIn: 0 });
  }
}
var Km = Object.defineProperty, ed = (o, r) => Km(o, "name", { value: r, configurable: !0 });
function cc(o, r = {}) {
  if (o.bbox != null && r.recompute !== !0)
    return o.bbox;
  const a = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return En(o, (l) => {
    a[0] > l[0] && (a[0] = l[0]), a[1] > l[1] && (a[1] = l[1]), a[2] < l[0] && (a[2] = l[0]), a[3] < l[1] && (a[3] = l[1]);
  }), a;
}
ed(cc, "bbox");
var td = Object.defineProperty, nd = (o, r) => td(o, "name", { value: r, configurable: !0 });
function fc(o, r = {}) {
  const a = cc(o), l = (a[0] + a[2]) / 2, c = (a[1] + a[3]) / 2;
  return ut([l, c], r.properties, r);
}
nd(fc, "center");
var hc = { exports: {} };
(function(o, r) {
  (function(a, l) {
    o.exports = l();
  })(Vn, function() {
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
    function h(s, e) {
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
        var f = [null];
        f.push.apply(f, i);
        var g = new (Function.bind.apply(n, f))();
        return u && p(g, u.prototype), g;
      }, x.apply(null, arguments);
    }
    function I(s) {
      var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return I = function(t) {
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
      }, I(s);
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
        var f = function(y, d) {
          for (; !Object.prototype.hasOwnProperty.call(y, d) && (y = v(y)) !== null; ) ;
          return y;
        }(n, i);
        if (f) {
          var g = Object.getOwnPropertyDescriptor(f, i);
          return g.get ? g.get.call(u) : g.value;
        }
      }, w(s, e, t || s);
    }
    function C(s) {
      return function(e) {
        if (Array.isArray(e)) return R(e);
      }(s) || function(e) {
        if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
      }(s) || T(s) || function() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }();
    }
    function T(s, e) {
      if (s) {
        if (typeof s == "string") return R(s, e);
        var t = Object.prototype.toString.call(s).slice(8, -1);
        return t === "Object" && s.constructor && (t = s.constructor.name), t === "Map" || t === "Set" ? Array.from(s) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? R(s, e) : void 0;
      }
    }
    function R(s, e) {
      (e == null || e > s.length) && (e = s.length);
      for (var t = 0, n = new Array(e); t < e; t++) n[t] = s[t];
      return n;
    }
    function P(s, e) {
      var t = typeof Symbol < "u" && s[Symbol.iterator] || s["@@iterator"];
      if (!t) {
        if (Array.isArray(s) || (t = T(s)) || e) {
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
      var u, f = !0, g = !1;
      return { s: function() {
        t = t.call(s);
      }, n: function() {
        var y = t.next();
        return f = y.done, y;
      }, e: function(y) {
        g = !0, u = y;
      }, f: function() {
        try {
          f || t.return == null || t.return();
        } finally {
          if (g) throw u;
        }
      } };
    }
    var A = function() {
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
            var i = arguments[0], u = arguments[1], f = arguments[2], g = arguments[3];
            this.setQuadrantSegments(i), this.setEndCapStyle(u), this.setJoinStyle(f), this.setMitreLimit(g);
          }
        }
      } }, { key: "bufferDistanceError", value: function(e) {
        var t = Math.PI / 2 / e;
        return 1 - Math.cos(t / 2);
      } }]), s;
    }();
    A.CAP_ROUND = 1, A.CAP_FLAT = 2, A.CAP_SQUARE = 3, A.JOIN_ROUND = 1, A.JOIN_MITRE = 2, A.JOIN_BEVEL = 3, A.DEFAULT_QUADRANT_SEGMENTS = 8, A.DEFAULT_MITRE_LIMIT = 5, A.DEFAULT_SIMPLIFY_FACTOR = 0.01;
    var D = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ Exception: t })[0], i;
      }
      return c(t, [{ key: "toString", value: function() {
        return this.message;
      } }]), t;
    }(I(Error)), M = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IllegalArgumentException: t })[0], i;
      }
      return t;
    }(D), G = function() {
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
    }(), Ie = function() {
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
    function Re() {
    }
    j.NaN = NaN, j.isNaN = function(s) {
      return Number.isNaN(s);
    }, j.isInfinite = function(s) {
      return !Number.isFinite(s);
    }, j.MAX_VALUE = Number.MAX_VALUE, j.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, j.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (ne = 2146435072, ue = new Float64Array(1), ye = new Int32Array(ue.buffer), j.doubleToLongBits = function(s) {
      ue[0] = s;
      var e = 0 | ye[0], t = 0 | ye[1];
      return (t & ne) === ne && 1048575 & t && e !== 0 && (e = 0, t = 2146959360), new Ie(t, e);
    }, j.longBitsToDouble = function(s) {
      return ye[0] = s.low, ye[1] = s.high, ue[0];
    }) : (ie = 1023, ee = Math.log2, te = Math.floor, ae = Math.pow, q = function() {
      for (var s = 53; s > 0; s--) {
        var e = ae(2, s) - 1;
        if (te(ee(e)) + 1 === s) return e;
      }
      return 0;
    }(), j.doubleToLongBits = function(s) {
      var e, t, n, i, u, f, g, y, d;
      if (s < 0 || 1 / s === Number.NEGATIVE_INFINITY ? (f = 1 << 31, s = -s) : f = 0, s === 0) return new Ie(y = f, d = 0);
      if (s === 1 / 0) return new Ie(y = 2146435072 | f, d = 0);
      if (s != s) return new Ie(y = 2146959360, d = 0);
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
      return y |= g << 20, new Ie(y |= f, d);
    }, j.longBitsToDouble = function(s) {
      var e, t, n, i, u = s.high, f = s.low, g = u & 1 << 31 ? -1 : 1;
      for (n = ((2146435072 & u) >> 20) - ie, i = 0, t = 1 << 19, e = 1; e <= 20; e++) u & t && (i += ae(2, -e)), t >>>= 1;
      for (t = 1 << 31, e = 21; e <= 52; e++) f & t && (i += ae(2, -e)), t >>>= 1;
      if (n === -1023) {
        if (i === 0) return 0 * g;
        n = -1022;
      } else {
        if (n === 1024) return i === 0 ? g / 0 : NaN;
        i += 1;
      }
      return g * i * ae(2, n);
    });
    var Se = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ RuntimeException: t })[0], i;
      }
      return t;
    }(D), Ae = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, null, [{ key: "constructor_", value: function() {
        if (arguments.length === 0) Se.constructor_.call(this);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Se.constructor_.call(this, n);
        }
      } }]), t;
    }(Se), se = function() {
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
    }(), gt = new ArrayBuffer(8), Oc = new Float64Array(gt), ta = new Int32Array(gt), O = function() {
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
          var i = arguments[0], u = arguments[1], f = arguments[2];
          this.x = i, this.y = u, this.z = f;
        }
      } }, { key: "hashCode", value: function(e) {
        return Oc[0] = e, ta[0] ^ ta[1];
      } }]), s;
    }(), Tc = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "compare", value: function(e, t) {
        var n = s.compare(e.x, t.x);
        if (n !== 0) return n;
        var i = s.compare(e.y, t.y);
        return i !== 0 ? i : this._dimensionsToTest <= 2 ? 0 : s.compare(e.getZ(), t.getZ());
      } }, { key: "interfaces_", get: function() {
        return [Re];
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
    O.DimensionalComparator = Tc, O.NULL_ORDINATE = j.NaN, O.X = 0, O.Y = 1, O.Z = 2, O.M = 3;
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
            var f = n.x > i.x ? n.x : i.x;
            if (f < this._minx) return !1;
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3];
          u < f ? (this._minx = u, this._maxx = f) : (this._minx = f, this._maxx = u), g < y ? (this._miny = g, this._maxy = y) : (this._miny = y, this._maxy = g);
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3];
          this.init(u, f, g, y);
        }
      } }, { key: "intersects", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2];
          return n.x >= (e.x < t.x ? e.x : t.x) && n.x <= (e.x > t.x ? e.x : t.x) && n.y >= (e.y < t.y ? e.y : t.y) && n.y <= (e.y > t.y ? e.y : t.y);
        }
        if (arguments.length === 4) {
          var i = arguments[0], u = arguments[1], f = arguments[2], g = arguments[3], y = Math.min(f.x, g.x), d = Math.max(f.x, g.x), N = Math.min(i.x, u.x), b = Math.max(i.x, u.x);
          return !(N > d) && !(b < y) && (y = Math.min(f.y, g.y), d = Math.max(f.y, g.y), N = Math.min(i.y, u.y), b = Math.max(i.y, u.y), !(N > d) && !(b < y));
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
          var u = n.next(), f = i.next(), g = u.compareTo(f);
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
      return [G];
    }, filter: function(s) {
      s.geometryChangedAction();
    } };
    var S = function() {
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
    S.INTERIOR = 0, S.BOUNDARY = 1, S.EXTERIOR = 2, S.NONE = -1;
    var nt = function() {
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
    }(), er = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ NoSuchElementException: t })[0], i;
      }
      return t;
    }(D), Et = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ UnsupportedOperationException: t })[0], i;
      }
      return t;
    }(D), na = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return c(t, [{ key: "contains", value: function() {
      } }]), t;
    }(nt), oi = function(s, e) {
      h(n, s);
      var t = k(n);
      function n(i) {
        var u;
        return a(this, n), (u = t.call(this)).map = /* @__PURE__ */ new Map(), i instanceof nt && u.addAll(i), u;
      }
      return c(n, [{ key: "contains", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !!this.map.has(u);
      } }, { key: "add", value: function(i) {
        var u = i.hashCode ? i.hashCode() : i;
        return !this.map.has(u) && !!this.map.set(u, i);
      } }, { key: "addAll", value: function(i) {
        var u, f = P(i);
        try {
          for (f.s(); !(u = f.n()).done; ) {
            var g = u.value;
            this.add(g);
          }
        } catch (y) {
          f.e(y);
        } finally {
          f.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new Et();
      } }, { key: "size", value: function() {
        return this.map.size;
      } }, { key: "isEmpty", value: function() {
        return this.map.size === 0;
      } }, { key: "toArray", value: function() {
        return Array.from(this.map.values());
      } }, { key: "iterator", value: function() {
        return new Lc(this.map);
      } }, { key: e, value: function() {
        return this.map;
      } }]), n;
    }(na, Symbol.iterator), Lc = function() {
      function s(e) {
        a(this, s), this.iterator = e.values();
        var t = this.iterator.next(), n = t.done, i = t.value;
        this.done = n, this.value = i;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.done) throw new er();
        var e = this.value, t = this.iterator.next(), n = t.done, i = t.value;
        return this.done = n, this.value = i, e;
      } }, { key: "hasNext", value: function() {
        return !this.done;
      } }, { key: "remove", value: function() {
        throw new Et();
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
    var ra = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ EmptyStackException: t })[0], i;
      }
      return t;
    }(D), ia = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this, n)).name = Object.keys({ IndexOutOfBoundsException: t })[0], i;
      }
      return t;
    }(D), At = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return c(t, [{ key: "get", value: function() {
      } }, { key: "set", value: function() {
      } }, { key: "isEmpty", value: function() {
      } }]), t;
    }(nt), Rc = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), (n = e.call(this)).array = [], n;
      }
      return c(t, [{ key: "add", value: function(n) {
        return this.array.push(n), !0;
      } }, { key: "get", value: function(n) {
        if (n < 0 || n >= this.size()) throw new ia();
        return this.array[n];
      } }, { key: "push", value: function(n) {
        return this.array.push(n), n;
      } }, { key: "pop", value: function() {
        if (this.array.length === 0) throw new ra();
        return this.array.pop();
      } }, { key: "peek", value: function() {
        if (this.array.length === 0) throw new ra();
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
    var Sn = function() {
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
    }(), tr = function() {
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
    }(), ui = function() {
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
        for (var f = i + 1, g = new Sn(), y = s.MAX_PRINT_DIGITS - 1, d = 0; d <= y; d++) {
          e && d === f && g.append(".");
          var N = Math.trunc(n._hi);
          if (N < 0) break;
          var b = !1, L = 0;
          N > 9 ? (b = !0, L = "9") : L = "0" + N, g.append(L), n = n.subtract(s.valueOf(N)).multiply(s.TEN), b && n.selfAdd(s.TEN);
          var $ = !0, F = s.magnitude(n._hi);
          if (F < 0 && Math.abs(F) >= y - d && ($ = !1), !$) break;
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
          var n = arguments[0], i = arguments[1], u = null, f = null, g = null, y = null, d = null, N = null, b = null, L = null;
          return d = this._hi / n, L = (u = (N = s.SPLIT * d) - (u = N - d)) * (g = (L = s.SPLIT * n) - (g = L - n)) - (b = d * n) + u * (y = n - g) + (f = d - u) * g + f * y, L = d + (N = (this._hi - b - L + this._lo - d * i) / n), this._hi = L, this._lo = d - L + N, this;
        }
      } }, { key: "dump", value: function() {
        return "DD<" + this._hi + ", " + this._lo + ">";
      } }, { key: "divide", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0], t = null, n = null, i = null, u = null, f = null, g = null, y = null, d = null;
          n = (f = this._hi / e._hi) - (t = (g = s.SPLIT * f) - (t = g - f)), d = t * (i = (d = s.SPLIT * e._hi) - (i = d - e._hi)) - (y = f * e._hi) + t * (u = e._hi - i) + n * i + n * u;
          var N = d = f + (g = (this._hi - y - d + this._lo - f * e._lo) / e._hi), b = f - d + g;
          return new s(N, b);
        }
        if (typeof arguments[0] == "number") {
          var L = arguments[0];
          return j.isNaN(L) ? s.createNaN() : s.copy(this).selfDivide(L, 0);
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
            var t = arguments[0], n = null, i = null, u = null, f = null, g = null, y = null;
            return f = (u = this._hi + t) - (g = u - this._hi), i = (y = (f = t - g + (this._hi - f)) + this._lo) + (u - (n = u + y)), this._hi = n + i, this._lo = i + (n - this._hi), this;
          }
        } else if (arguments.length === 2) {
          var d = arguments[0], N = arguments[1], b = null, L = null, $ = null, F = null, V = null, H = null, K = null;
          F = this._hi + d, L = this._lo + N, V = F - (H = F - this._hi), $ = L - (K = L - this._lo);
          var he = (b = F + (H = (V = d - H + (this._hi - V)) + L)) + (H = ($ = N - K + (this._lo - $)) + (H + (F - b))), de = H + (b - he);
          return this._hi = he, this._lo = de, this;
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
          var n = arguments[0], i = arguments[1], u = null, f = null, g = null, y = null, d = null, N = null;
          u = (d = s.SPLIT * this._hi) - this._hi, N = s.SPLIT * n, u = d - u, f = this._hi - u, g = N - n;
          var b = (d = this._hi * n) + (N = u * (g = N - g) - d + u * (y = n - g) + f * g + f * y + (this._hi * i + this._lo * n)), L = N + (u = d - b);
          return this._hi = b, this._lo = L, this;
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
          var f = i - n.length;
          u = n + s.stringOfChar("0", f) + ".0";
        }
        return this.isNegative() ? "-" + u : u;
      } }, { key: "reciprocal", value: function() {
        var e, t, n, i, u = null, f = null, g = null, y = null;
        e = (n = 1 / this._hi) - (u = (g = s.SPLIT * n) - (u = g - n)), f = (y = s.SPLIT * this._hi) - this._hi;
        var d = n + (g = (1 - (i = n * this._hi) - (y = u * (f = y - f) - i + u * (t = this._hi - f) + e * f + e * t) - n * this._lo) / this._hi);
        return new s(d, n - d + g);
      } }, { key: "toSciNotation", value: function() {
        if (this.isZero()) return s.SCI_NOT_ZERO;
        var e = this.getSpecialNumberString();
        if (e !== null) return e;
        var t = new Array(1).fill(null), n = this.extractSignificantDigits(!1, t), i = s.SCI_NOT_EXPONENT_CHAR + t[0];
        if (n.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + n);
        var u = "";
        n.length > 1 && (u = n.substring(1));
        var f = n.charAt(0) + "." + u;
        return this.isNegative() ? "-" + f + i : f + i;
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3], d = u.multiply(y).selfSubtract(f.multiply(g));
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
        for (var t = 0, n = e.length; ui.isWhitespace(e.charAt(t)); ) t++;
        var i = !1;
        if (t < n) {
          var u = e.charAt(t);
          u !== "-" && u !== "+" || (t++, u === "-" && (i = !0));
        }
        for (var f = new s(), g = 0, y = 0, d = 0, N = !1; !(t >= n); ) {
          var b = e.charAt(t);
          if (t++, ui.isDigit(b)) {
            var L = b - "0";
            f.selfMultiply(s.TEN), f.selfAdd(L), g++;
          } else {
            if (b !== ".") {
              if (b === "e" || b === "E") {
                var $ = e.substring(t);
                try {
                  d = tr.parseInt($);
                } catch (he) {
                  throw he instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + $ + " in string " + e) : he;
                }
                break;
              }
              throw new NumberFormatException("Unexpected character '" + b + "' at position " + t + " in string " + e);
            }
            y = g, N = !0;
          }
        }
        var F = f;
        N || (y = g);
        var V = g - y - d;
        if (V === 0) F = f;
        else if (V > 0) {
          var H = s.TEN.pow(V);
          F = f.divide(H);
        } else if (V < 0) {
          var K = s.TEN.pow(-V);
          F = f.multiply(K);
        }
        return i ? F.negate() : F;
      } }, { key: "createNaN", value: function() {
        return new s(j.NaN, j.NaN);
      } }, { key: "copy", value: function(e) {
        return new s(e);
      } }, { key: "magnitude", value: function(e) {
        var t = Math.abs(e), n = Math.log(t) / Math.log(10), i = Math.trunc(Math.floor(n));
        return 10 * Math.pow(10, i) <= t && (i += 1), i;
      } }, { key: "stringOfChar", value: function(e, t) {
        for (var n = new Sn(), i = 0; i < t; i++) n.append(e);
        return n.toString();
      } }]), s;
    }();
    J.PI = new J(3.141592653589793, 12246467991473532e-32), J.TWO_PI = new J(6.283185307179586, 24492935982947064e-32), J.PI_2 = new J(1.5707963267948966, 6123233995736766e-32), J.E = new J(2.718281828459045, 14456468917292502e-32), J.NaN = new J(j.NaN, j.NaN), J.EPS = 123259516440783e-46, J.SPLIT = 134217729, J.MAX_PRINT_DIGITS = 32, J.TEN = J.valueOf(10), J.ONE = J.valueOf(1), J.SCI_NOT_EXPONENT_CHAR = "E", J.SCI_NOT_ZERO = "0.0E0";
    var li = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "orientationIndex", value: function(e, t, n) {
        var i = s.orientationIndexFilter(e, t, n);
        if (i <= 1) return i;
        var u = J.valueOf(t.x).selfAdd(-e.x), f = J.valueOf(t.y).selfAdd(-e.y), g = J.valueOf(n.x).selfAdd(-t.x), y = J.valueOf(n.y).selfAdd(-t.y);
        return u.selfMultiply(y).selfSubtract(f.selfMultiply(g)).signum();
      } }, { key: "signOfDet2x2", value: function() {
        if (arguments[3] instanceof J && arguments[2] instanceof J && arguments[0] instanceof J && arguments[1] instanceof J) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = arguments[3], u = e.multiply(i).selfSubtract(t.multiply(n));
          return u.signum();
        }
        if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
          var f = arguments[0], g = arguments[1], y = arguments[2], d = arguments[3], N = J.valueOf(f), b = J.valueOf(g), L = J.valueOf(y), $ = J.valueOf(d), F = N.multiply($).selfSubtract(b.multiply(L));
          return F.signum();
        }
      } }, { key: "intersection", value: function(e, t, n, i) {
        var u = new J(e.y).selfSubtract(t.y), f = new J(t.x).selfSubtract(e.x), g = new J(e.x).selfMultiply(t.y).selfSubtract(new J(t.x).selfMultiply(e.y)), y = new J(n.y).selfSubtract(i.y), d = new J(i.x).selfSubtract(n.x), N = new J(n.x).selfMultiply(i.y).selfSubtract(new J(i.x).selfMultiply(n.y)), b = f.multiply(N).selfSubtract(d.multiply(g)), L = y.multiply(g).selfSubtract(u.multiply(N)), $ = u.multiply(d).selfSubtract(y.multiply(f)), F = b.selfDivide($).doubleValue(), V = L.selfDivide($).doubleValue();
        return j.isNaN(F) || j.isInfinite(F) || j.isNaN(V) || j.isInfinite(V) ? null : new O(F, V);
      } }, { key: "orientationIndexFilter", value: function(e, t, n) {
        var i = null, u = (e.x - n.x) * (t.y - n.y), f = (e.y - n.y) * (t.x - n.x), g = u - f;
        if (u > 0) {
          if (f <= 0) return s.signum(g);
          i = u + f;
        } else {
          if (!(u < 0) || f >= 0) return s.signum(g);
          i = -u - f;
        }
        var y = s.DP_SAFE_EPSILON * i;
        return g >= y || -g >= y ? s.signum(g) : 2;
      } }, { key: "signum", value: function(e) {
        return e > 0 ? 1 : e < 0 ? -1 : 0;
      } }]), s;
    }();
    li.DP_SAFE_EPSILON = 1e-15;
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
        return li.orientationIndex(e, t, n);
      } }, { key: "isCCW", value: function() {
        if (arguments[0] instanceof Array) {
          var e = arguments[0], t = e.length - 1;
          if (t < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var n = e[0], i = 0, u = 1; u <= t; u++) {
            var f = e[u];
            f.y > n.y && (n = f, i = u);
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
          var b = s.index(d, n, N), L = null;
          return L = b === 0 ? d.x > N.x : b > 0, L;
        }
        if (re(arguments[0], le)) {
          var $ = arguments[0], F = $.size() - 1;
          if (F < 3) throw new M("Ring has fewer than 4 points, so orientation cannot be determined");
          for (var V = $.getCoordinate(0), H = 0, K = 1; K <= F; K++) {
            var he = $.getCoordinate(K);
            he.y > V.y && (V = he, H = K);
          }
          var de = null, Oe = H;
          do
            (Oe -= 1) < 0 && (Oe = F), de = $.getCoordinate(Oe);
          while (de.equals2D(V) && Oe !== H);
          var Be = null, Je = H;
          do
            Je = (Je + 1) % F, Be = $.getCoordinate(Je);
          while (Be.equals2D(V) && Je !== H);
          if (de.equals2D(V) || Be.equals2D(V) || de.equals2D(Be)) return !1;
          var mt = s.index(de, V, Be);
          return mt === 0 ? de.x > Be.x : mt > 0;
        }
      } }]), s;
    }();
    Q.CLOCKWISE = -1, Q.RIGHT = Q.CLOCKWISE, Q.COUNTERCLOCKWISE = 1, Q.LEFT = Q.COUNTERCLOCKWISE, Q.COLLINEAR = 0, Q.STRAIGHT = Q.COLLINEAR;
    var Cc = function() {
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
    }(), yt = function(s) {
      h(t, s);
      var e = k(t);
      function t(n, i) {
        var u;
        return a(this, t), (u = e.call(this, i ? n + " [ " + i + " ]" : n)).pt = i ? new O(i) : void 0, u.name = Object.keys({ TopologyException: t })[0], u;
      }
      return c(t, [{ key: "getCoordinate", value: function() {
        return this.pt;
      } }]), t;
    }(Se), Pc = function() {
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
      h(n, s);
      var t = k(n);
      function n(i) {
        var u;
        return a(this, n), (u = t.call(this)).array = [], i instanceof nt && u.addAll(i), u;
      }
      return c(n, [{ key: "interfaces_", get: function() {
        return [At, nt];
      } }, { key: "ensureCapacity", value: function() {
      } }, { key: "add", value: function(i) {
        return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
      } }, { key: "clear", value: function() {
        this.array = [];
      } }, { key: "addAll", value: function(i) {
        var u, f = P(i);
        try {
          for (f.s(); !(u = f.n()).done; ) {
            var g = u.value;
            this.array.push(g);
          }
        } catch (y) {
          f.e(y);
        } finally {
          f.f();
        }
      } }, { key: "set", value: function(i, u) {
        var f = this.array[i];
        return this.array[i] = u, f;
      } }, { key: "iterator", value: function() {
        return new Ac(this);
      } }, { key: "get", value: function(i) {
        if (i < 0 || i >= this.size()) throw new ia();
        return this.array[i];
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "sort", value: function(i) {
        i ? this.array.sort(function(u, f) {
          return i.compare(u, f);
        }) : this.array.sort();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "remove", value: function(i) {
        for (var u = 0, f = this.array.length; u < f; u++) if (this.array[u] === i) return !!this.array.splice(u, 1);
        return !1;
      } }, { key: e, value: function() {
        return this.array.values();
      } }]), n;
    }(At, Symbol.iterator), Ac = function() {
      function s(e) {
        a(this, s), this.arrayList = e, this.position = 0;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.position === this.arrayList.size()) throw new er();
        return this.arrayList.get(this.position++);
      } }, { key: "hasNext", value: function() {
        return this.position < this.arrayList.size();
      } }, { key: "set", value: function(e) {
        return this.arrayList.set(this.position - 1, e);
      } }, { key: "remove", value: function() {
        this.arrayList.remove(this.arrayList.get(this.position));
      } }]), s;
    }(), Mc = function() {
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
        if (t === null) throw new yt("unable to find edge to compute depths at " + e.getCoordinate());
        e.getEdges().computeDepths(t);
        for (var u = e.getEdges().iterator(); u.hasNext(); ) {
          var f = u.next();
          f.setVisited(!0), this.copySymDepths(f);
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
        var t = new oi(), n = new Pc(), i = e.getNode();
        for (n.addLast(i), t.add(i), e.setVisited(!0); !n.isEmpty(); ) {
          var u = n.removeFirst();
          t.add(u), this.computeNodeDepth(u);
          for (var f = u.getEdges().iterator(); f.hasNext(); ) {
            var g = f.next().getSym();
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
        var t = new Rc();
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
        this._finder = null, this._dirEdgeList = new Z(), this._nodes = new Z(), this._rightMostCoord = null, this._env = null, this._finder = new Cc();
      } }]), s;
    }(), ci = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "intersection", value: function(e, t, n, i) {
        var u = e.x < t.x ? e.x : t.x, f = e.y < t.y ? e.y : t.y, g = e.x > t.x ? e.x : t.x, y = e.y > t.y ? e.y : t.y, d = n.x < i.x ? n.x : i.x, N = n.y < i.y ? n.y : i.y, b = n.x > i.x ? n.x : i.x, L = n.y > i.y ? n.y : i.y, $ = ((u > d ? u : d) + (g < b ? g : b)) / 2, F = ((f > N ? f : N) + (y < L ? y : L)) / 2, V = e.x - $, H = e.y - F, K = t.x - $, he = t.y - F, de = n.x - $, Oe = n.y - F, Be = i.x - $, Je = i.y - F, mt = H - he, qt = K - V, Pn = V * he - K * H, An = Oe - Je, tn = Be - de, Ua = de * Je - Be * Oe, Xa = mt * tn - An * qt, wi = (qt * Ua - tn * Pn) / Xa, bi = (An * Pn - mt * Ua) / Xa;
        return j.isNaN(wi) || j.isInfinite(wi) || j.isNaN(bi) || j.isInfinite(bi) ? null : new O(wi + $, bi + F);
      } }]), s;
    }(), Ge = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "arraycopy", value: function(e, t, n, i, u) {
        for (var f = 0, g = t; g < t + u; g++) n[i + f] = e[g], f++;
      } }, { key: "getProperty", value: function(e) {
        return { "line.separator": `
` }[e];
      } }]), s;
    }(), Nn = function() {
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
          var i = arguments[0], u = arguments[1], f = arguments[2];
          return i < u ? u : i > f ? f : i;
        }
      } }, { key: "wrap", value: function(e, t) {
        return e < 0 ? t - -e % t : e % t;
      } }, { key: "max", value: function() {
        if (arguments.length === 3) {
          var e = arguments[0], t = arguments[1], n = arguments[2], i = e;
          return t > i && (i = t), n > i && (i = n), i;
        }
        if (arguments.length === 4) {
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3], d = u;
          return f > d && (d = f), g > d && (d = g), y > d && (d = y), d;
        }
      } }, { key: "average", value: function(e, t) {
        return (e + t) / 2;
      } }]), s;
    }();
    Nn.LOG_10 = Math.log(10);
    var rt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "segmentToSegment", value: function(e, t, n, i) {
        if (e.equals(t)) return s.pointToSegment(e, n, i);
        if (n.equals(i)) return s.pointToSegment(i, e, t);
        var u = !1;
        if (pe.intersects(e, t, n, i)) {
          var f = (t.x - e.x) * (i.y - n.y) - (t.y - e.y) * (i.x - n.x);
          if (f === 0) u = !0;
          else {
            var g = (e.y - n.y) * (i.x - n.x) - (e.x - n.x) * (i.y - n.y), y = ((e.y - n.y) * (t.x - e.x) - (e.x - n.x) * (t.y - e.y)) / f, d = g / f;
            (d < 0 || d > 1 || y < 0 || y > 1) && (u = !0);
          }
        } else u = !0;
        return u ? Nn.min(s.pointToSegment(e, n, i), s.pointToSegment(t, n, i), s.pointToSegment(n, e, t), s.pointToSegment(i, e, t)) : 0;
      } }, { key: "pointToSegment", value: function(e, t, n) {
        if (t.x === n.x && t.y === n.y) return e.distance(t);
        var i = (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y), u = ((e.x - t.x) * (n.x - t.x) + (e.y - t.y) * (n.y - t.y)) / i;
        if (u <= 0) return e.distance(t);
        if (u >= 1) return e.distance(n);
        var f = ((t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)) / i;
        return Math.abs(f) * Math.sqrt(i);
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
    }(), sa = function() {
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
    }(), nr = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e) {
      } }]), s;
    }(), Dc = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "ofLine", value: function(e) {
        var t = e.size();
        if (t <= 1) return 0;
        var n = 0, i = new O();
        e.getCoordinate(0, i);
        for (var u = i.x, f = i.y, g = 1; g < t; g++) {
          e.getCoordinate(g, i);
          var y = i.x, d = i.y, N = y - u, b = d - f;
          n += Math.sqrt(N * N + b * b), u = y, f = d;
        }
        return n;
      } }]), s;
    }(), aa = function s() {
      a(this, s);
    }, Mt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "copyCoord", value: function(e, t, n, i) {
        for (var u = Math.min(e.getDimension(), n.getDimension()), f = 0; f < u; f++) n.setOrdinate(i, f, e.getOrdinate(t, f));
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
          var f = arguments[0], g = arguments[1], y = arguments[2], d = g;
          if (d <= 0) return null;
          for (var N = f.copy(), b = y ? f.size() - 1 : f.size(), L = 0; L < b; L++) for (var $ = 0; $ < f.getDimension(); $++) f.setOrdinate(L, $, N.getOrdinate((g + L) % b, $));
          if (y) for (var F = 0; F < f.getDimension(); F++) f.setOrdinate(b, F, f.getOrdinate(0, F));
        }
      } }, { key: "isEqual", value: function(e, t) {
        var n = e.size();
        if (n !== t.size()) return !1;
        for (var i = Math.min(e.getDimension(), t.getDimension()), u = 0; u < n; u++) for (var f = 0; f < i; f++) {
          var g = e.getOrdinate(u, f), y = t.getOrdinate(u, f);
          if (e.getOrdinate(u, f) !== t.getOrdinate(u, f) && (!j.isNaN(g) || !j.isNaN(y))) return !1;
        }
        return !0;
      } }, { key: "minCoordinateIndex", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return s.minCoordinateIndex(e, 0, e.size() - 1);
        }
        if (arguments.length === 3) {
          for (var t = arguments[0], n = arguments[1], i = arguments[2], u = -1, f = null, g = n; g <= i; g++) {
            var y = t.getCoordinate(g);
            (f === null || f.compareTo(y) > 0) && (f = y, u = g);
          }
          return u;
        }
      } }, { key: "extend", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        if (s.copy(t, 0, i, 0, u), u > 0) for (var f = u; f < n; f++) s.copy(t, u - 1, i, f, 1);
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
        for (var f = 0; f < u; f++) s.copyCoord(e, t + f, n, i + f);
      } }, { key: "ensureValidRing", value: function(e, t) {
        var n = t.size();
        return n === 0 ? t : n <= 3 ? s.createClosedRing(e, t, 4) : t.getOrdinate(0, le.X) === t.getOrdinate(n - 1, le.X) && t.getOrdinate(0, le.Y) === t.getOrdinate(n - 1, le.Y) ? t : s.createClosedRing(e, t, n + 1);
      } }, { key: "indexOf", value: function(e, t) {
        for (var n = 0; n < t.size(); n++) if (e.x === t.getOrdinate(n, le.X) && e.y === t.getOrdinate(n, le.Y)) return n;
        return -1;
      } }, { key: "createClosedRing", value: function(e, t, n) {
        var i = e.create(n, t.getDimension()), u = t.size();
        s.copy(t, 0, i, 0, u);
        for (var f = u; f < n; f++) s.copy(t, 0, i, f, 1);
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
        switch (ui.toUpperCase(e)) {
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
    var rr = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e) {
      } }]), s;
    }(), ir = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "filter", value: function(e, t) {
      } }, { key: "isDone", value: function() {
      } }, { key: "isGeometryChanged", value: function() {
      } }]), s;
    }(), wn = function(s) {
      h(t, s);
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
          for (var f = 0; f < this._points.size(); f++) if (!this.equal(this._points.getCoordinate(f), u._points.getCoordinate(f), i)) return !1;
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
        return Dc.ofLine(this._points);
      } }, { key: "getNumPoints", value: function() {
        return this._points.size();
      } }, { key: "compareToSameClass", value: function() {
        if (arguments.length === 1) {
          for (var n = arguments[0], i = n, u = 0, f = 0; u < this._points.size() && f < i._points.size(); ) {
            var g = this._points.getCoordinate(u).compareTo(i._points.getCoordinate(f));
            if (g !== 0) return g;
            u++, f++;
          }
          return u < this._points.size() ? 1 : f < i._points.size() ? -1 : 0;
        }
        if (arguments.length === 2) {
          var y = arguments[0], d = arguments[1], N = y;
          return d.compare(this._points, N._points);
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], nr)) for (var n = arguments[0], i = 0; i < this._points.size(); i++) n.filter(this._points.getCoordinate(i));
        else if (re(arguments[0], ir)) {
          var u = arguments[0];
          if (this._points.size() === 0) return null;
          for (var f = 0; f < this._points.size() && (u.filter(this._points, f), !u.isDone()); f++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], rr)) {
          var g = arguments[0];
          g.filter(this);
        } else if (re(arguments[0], G)) {
          var y = arguments[0];
          y.filter(this);
        }
      } }, { key: "getBoundary", value: function() {
        throw new Et();
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
        return [aa];
      } }], [{ key: "constructor_", value: function() {
        if (this._points = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            W.constructor_.call(this, i), this.init(n);
          }
        }
      } }]), t;
    }(W), oa = function s() {
      a(this, s);
    }, fi = function(s) {
      h(t, s);
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
          var u = arguments[0], f = arguments[1], g = u;
          return f.compare(this._coordinates, g._coordinates);
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], nr)) {
          var n = arguments[0];
          if (this.isEmpty()) return null;
          n.filter(this.getCoordinate());
        } else if (re(arguments[0], ir)) {
          var i = arguments[0];
          if (this.isEmpty()) return null;
          i.filter(this._coordinates, 0), i.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], rr)) {
          var u = arguments[0];
          u.filter(this);
        } else if (re(arguments[0], G)) {
          var f = arguments[0];
          f.filter(this);
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
        return [oa];
      } }], [{ key: "constructor_", value: function() {
        this._coordinates = null;
        var n = arguments[0], i = arguments[1];
        W.constructor_.call(this, i), this.init(n);
      } }]), t;
    }(W), ua = function() {
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
            var u = e[i].x - n, f = e[i + 1].y, g = e[i - 1].y;
            t += u * (g - f);
          }
          return t / 2;
        }
        if (re(arguments[0], le)) {
          var y = arguments[0], d = y.size();
          if (d < 3) return 0;
          var N = new O(), b = new O(), L = new O();
          y.getCoordinate(0, b), y.getCoordinate(1, L);
          var $ = b.x;
          L.x -= $;
          for (var F = 0, V = 1; V < d - 1; V++) N.y = b.y, b.x = L.x, b.y = L.y, y.getCoordinate(V + 1, L), L.x -= $, F += b.x * (N.y - L.y);
          return F / 2;
        }
      } }]), s;
    }(), Dt = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "sort", value: function() {
        var e = arguments, t = arguments[0];
        if (arguments.length === 1) t.sort(function($, F) {
          return $.compareTo(F);
        });
        else if (arguments.length === 2) t.sort(function($, F) {
          return e[1].compare($, F);
        });
        else if (arguments.length === 3) {
          var n = t.slice(arguments[1], arguments[2]);
          n.sort();
          var i = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var u, f = P(i);
          try {
            for (f.s(); !(u = f.n()).done; ) {
              var g = u.value;
              t.push(g);
            }
          } catch ($) {
            f.e($);
          } finally {
            f.f();
          }
        } else if (arguments.length === 4) {
          var y = t.slice(arguments[1], arguments[2]);
          y.sort(function($, F) {
            return e[3].compare($, F);
          });
          var d = t.slice(0, arguments[1]).concat(y, t.slice(arguments[2], t.length));
          t.splice(0, t.length);
          var N, b = P(d);
          try {
            for (b.s(); !(N = b.n()).done; ) {
              var L = N.value;
              t.push(L);
            }
          } catch ($) {
            b.e($);
          } finally {
            b.f();
          }
        }
      } }, { key: "asList", value: function(e) {
        var t, n = new Z(), i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n.add(u);
          }
        } catch (f) {
          i.e(f);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "copyOf", value: function(e, t) {
        return e.slice(0, t);
      } }]), s;
    }(), la = function s() {
      a(this, s);
    }, sr = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "computeEnvelopeInternal", value: function() {
        return this._shell.getEnvelopeInternal();
      } }, { key: "getCoordinates", value: function() {
        if (this.isEmpty()) return [];
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = this._shell.getCoordinates(), f = 0; f < u.length; f++) n[++i] = u[f];
        for (var g = 0; g < this._holes.length; g++) for (var y = this._holes[g].getCoordinates(), d = 0; d < y.length; d++) n[++i] = y[d];
        return n;
      } }, { key: "getArea", value: function() {
        var n = 0;
        n += ua.ofRing(this._shell.getCoordinateSequence());
        for (var i = 0; i < this._holes.length; i++) n -= ua.ofRing(this._holes[i].getCoordinateSequence());
        return n;
      } }, { key: "copyInternal", value: function() {
        for (var n = this._shell.copy(), i = new Array(this._holes.length).fill(null), u = 0; u < this._holes.length; u++) i[u] = this._holes[u].copy();
        return new t(n, i, this._factory);
      } }, { key: "isRectangle", value: function() {
        if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
        for (var n = this._shell.getCoordinateSequence(), i = this.getEnvelopeInternal(), u = 0; u < 5; u++) {
          var f = n.getX(u);
          if (f !== i.getMinX() && f !== i.getMaxX()) return !1;
          var g = n.getY(u);
          if (g !== i.getMinY() && g !== i.getMaxY()) return !1;
        }
        for (var y = n.getX(0), d = n.getY(0), N = 1; N <= 4; N++) {
          var b = n.getX(N), L = n.getY(N);
          if (b !== y == (L !== d)) return !1;
          y = b, d = L;
        }
        return !0;
      } }, { key: "equalsExact", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof W) {
          var n = arguments[0], i = arguments[1];
          if (!this.isEquivalentClass(n)) return !1;
          var u = n, f = this._shell, g = u._shell;
          if (!f.equalsExact(g, i) || this._holes.length !== u._holes.length) return !1;
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
          var f = i.getCoordinateSequence(), g = Mt.minCoordinateIndex(f, 0, f.size() - 2);
          Mt.scroll(f, g, !0), Q.isCCW(f) === u && Mt.reverse(f);
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
          var f = arguments[0], g = arguments[1], y = f, d = this._shell, N = y._shell, b = d.compareToSameClass(N, g);
          if (b !== 0) return b;
          for (var L = this.getNumInteriorRing(), $ = y.getNumInteriorRing(), F = 0; F < L && F < $; ) {
            var V = this.getInteriorRingN(F), H = y.getInteriorRingN(F), K = V.compareToSameClass(H, g);
            if (K !== 0) return K;
            F++;
          }
          return F < L ? 1 : F < $ ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], nr)) {
          var n = arguments[0];
          this._shell.apply(n);
          for (var i = 0; i < this._holes.length; i++) this._holes[i].apply(n);
        } else if (re(arguments[0], ir)) {
          var u = arguments[0];
          if (this._shell.apply(u), !u.isDone()) for (var f = 0; f < this._holes.length && (this._holes[f].apply(u), !u.isDone()); f++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], rr)) {
          var g = arguments[0];
          g.filter(this);
        } else if (re(arguments[0], G)) {
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
        return [la];
      } }], [{ key: "constructor_", value: function() {
        this._shell = null, this._holes = null;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        if (W.constructor_.call(this, u), n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), W.hasNullElements(i)) throw new M("holes must not contain null elements");
        if (n.isEmpty() && W.hasNonEmptyElements(i)) throw new M("shell is empty but holes are not");
        this._shell = n, this._holes = i;
      } }]), t;
    }(W), Fc = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(na), ca = function(s) {
      h(t, s);
      var e = k(t);
      function t(n) {
        var i;
        return a(this, t), (i = e.call(this)).array = [], n instanceof nt && i.addAll(n), i;
      }
      return c(t, [{ key: "contains", value: function(n) {
        var i, u = P(this.array);
        try {
          for (u.s(); !(i = u.n()).done; )
            if (i.value.compareTo(n) === 0) return !0;
        } catch (f) {
          u.e(f);
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
        var i, u = P(n);
        try {
          for (u.s(); !(i = u.n()).done; ) {
            var f = i.value;
            this.add(f);
          }
        } catch (g) {
          u.e(g);
        } finally {
          u.f();
        }
        return !0;
      } }, { key: "remove", value: function() {
        throw new Et();
      } }, { key: "size", value: function() {
        return this.array.length;
      } }, { key: "isEmpty", value: function() {
        return this.array.length === 0;
      } }, { key: "toArray", value: function() {
        return this.array.slice();
      } }, { key: "iterator", value: function() {
        return new $c(this.array);
      } }]), t;
    }(Fc), $c = function() {
      function s(e) {
        a(this, s), this.array = e, this.position = 0;
      }
      return c(s, [{ key: "next", value: function() {
        if (this.position === this.array.length) throw new er();
        return this.array[this.position++];
      } }, { key: "hasNext", value: function() {
        return this.position < this.array.length;
      } }, { key: "remove", value: function() {
        throw new Et();
      } }]), s;
    }(), De = function(s) {
      h(t, s);
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
        for (var n = new Array(this.getNumPoints()).fill(null), i = -1, u = 0; u < this._geometries.length; u++) for (var f = this._geometries[u].getCoordinates(), g = 0; g < f.length; g++) n[++i] = f[g];
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
          for (var f = 0; f < this._geometries.length; f++) if (!this._geometries[f].equalsExact(u._geometries[f], i)) return !1;
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
          var n = arguments[0], i = new ca(Dt.asList(this._geometries)), u = new ca(Dt.asList(n._geometries));
          return this.compare(i, u);
        }
        if (arguments.length === 2) {
          for (var f = arguments[0], g = arguments[1], y = f, d = this.getNumGeometries(), N = y.getNumGeometries(), b = 0; b < d && b < N; ) {
            var L = this.getGeometryN(b), $ = y.getGeometryN(b), F = L.compareToSameClass($, g);
            if (F !== 0) return F;
            b++;
          }
          return b < d ? 1 : b < N ? -1 : 0;
        }
      } }, { key: "apply", value: function() {
        if (re(arguments[0], nr)) for (var n = arguments[0], i = 0; i < this._geometries.length; i++) this._geometries[i].apply(n);
        else if (re(arguments[0], ir)) {
          var u = arguments[0];
          if (this._geometries.length === 0) return null;
          for (var f = 0; f < this._geometries.length && (this._geometries[f].apply(u), !u.isDone()); f++) ;
          u.isGeometryChanged() && this.geometryChanged();
        } else if (re(arguments[0], rr)) {
          var g = arguments[0];
          g.filter(this);
          for (var y = 0; y < this._geometries.length; y++) this._geometries[y].apply(g);
        } else if (re(arguments[0], G)) {
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
    }(W), hi = function(s) {
      h(t, s);
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
        return [oa];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), bn = function(s) {
      h(t, s);
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
        wn.constructor_.call(this, n, i), this.validateConstruction();
      } }]), t;
    }(wn);
    bn.MINIMUM_VALID_SIZE = 4;
    var Ft = function(s) {
      h(t, s);
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
          var u = arguments[0], f = arguments[1];
          O.constructor_.call(this, u, f, O.NULL_ORDINATE);
        }
      } }]), t;
    }(O);
    Ft.X = 0, Ft.Y = 1, Ft.Z = -1, Ft.M = -1;
    var $t = function(s) {
      h(t, s);
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
          var u = arguments[0], f = arguments[1], g = arguments[2];
          O.constructor_.call(this, u, f, O.NULL_ORDINATE), this._m = g;
        }
      } }]), t;
    }(O);
    $t.X = 0, $t.Y = 1, $t.Z = -1, $t.M = 2;
    var gi = function(s) {
      h(t, s);
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3];
          O.constructor_.call(this, u, f, g), this._m = y;
        }
      } }]), t;
    }(O), ar = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "measures", value: function(e) {
        return e instanceof Ft ? 0 : e instanceof $t || e instanceof gi ? 1 : 0;
      } }, { key: "dimension", value: function(e) {
        return e instanceof Ft ? 2 : e instanceof $t ? 3 : e instanceof gi ? 4 : 3;
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return s.create(e, 0);
        }
        if (arguments.length === 2) {
          var t = arguments[0], n = arguments[1];
          return t === 2 ? new Ft() : t === 3 && n === 0 ? new O() : t === 3 && n === 1 ? new $t() : t === 4 && n === 1 ? new gi() : new O();
        }
      } }]), s;
    }(), On = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getCoordinate", value: function(n) {
        return this.get(n);
      } }, { key: "addAll", value: function() {
        if (arguments.length === 2 && typeof arguments[1] == "boolean" && re(arguments[0], nt)) {
          for (var n = arguments[0], i = arguments[1], u = !1, f = n.iterator(); f.hasNext(); ) this.add(f.next(), i), u = !0;
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
          for (var i = this.size(), u = new Array(i).fill(null), f = 0; f < i; f++) u[f] = this.get(i - f - 1);
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
            var f = arguments[0], g = arguments[1];
            if (!g && this.size() >= 1) {
              var y = this.get(this.size() - 1);
              if (y.equals2D(f)) return null;
            }
            w(v(t.prototype), "add", this).call(this, f);
          } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
            var d = arguments[0], N = arguments[1];
            return this.add(d, N), !0;
          }
        } else if (arguments.length === 3) {
          if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
            var b = arguments[0], L = arguments[1], $ = arguments[2];
            if ($) for (var F = 0; F < b.length; F++) this.add(b[F], L);
            else for (var V = b.length - 1; V >= 0; V--) this.add(b[V], L);
            return !0;
          }
          if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof O) {
            var H = arguments[0], K = arguments[1], he = arguments[2];
            if (!he) {
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
          var Je = arguments[0], mt = arguments[1], qt = arguments[2], Pn = arguments[3], An = 1;
          qt > Pn && (An = -1);
          for (var tn = qt; tn !== Pn; tn += An) this.add(Je[tn], mt);
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
    On.coordArrayType = new Array(0).fill(null);
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
        Ge.arraycopy(e, n, i, 0, e.length - n), Ge.arraycopy(e, 0, i, e.length - n, n), Ge.arraycopy(i, 0, e, 0, e.length);
      } }, { key: "equals", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          if (e === t) return !0;
          if (e === null || t === null || e.length !== t.length) return !1;
          for (var n = 0; n < e.length; n++) if (!e[n].equals(t[n])) return !1;
          return !0;
        }
        if (arguments.length === 3) {
          var i = arguments[0], u = arguments[1], f = arguments[2];
          if (i === u) return !0;
          if (i === null || u === null || i.length !== u.length) return !1;
          for (var g = 0; g < i.length; g++) if (f.compare(i[g], u[g]) !== 0) return !1;
          return !0;
        }
      } }, { key: "intersection", value: function(e, t) {
        for (var n = new On(), i = 0; i < e.length; i++) t.intersects(e[i]) && n.add(e[i], !0);
        return n.toCoordinateArray();
      } }, { key: "measures", value: function(e) {
        if (e === null || e.length === 0) return 0;
        var t, n = 0, i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, ar.measures(u));
          }
        } catch (f) {
          i.e(f);
        } finally {
          i.f();
        }
        return n;
      } }, { key: "hasRepeatedPoints", value: function(e) {
        for (var t = 1; t < e.length; t++) if (e[t - 1].equals(e[t])) return !0;
        return !1;
      } }, { key: "removeRepeatedPoints", value: function(e) {
        return s.hasRepeatedPoints(e) ? new On(e, !1).toCoordinateArray() : e;
      } }, { key: "reverse", value: function(e) {
        for (var t = e.length - 1, n = Math.trunc(t / 2), i = 0; i <= n; i++) {
          var u = e[i];
          e[i] = e[t - i], e[t - i] = u;
        }
      } }, { key: "removeNull", value: function(e) {
        for (var t = 0, n = 0; n < e.length; n++) e[n] !== null && t++;
        var i = new Array(t).fill(null);
        if (t === 0) return i;
        for (var u = 0, f = 0; f < e.length; f++) e[f] !== null && (i[u++] = e[f]);
        return i;
      } }, { key: "copyDeep", value: function() {
        if (arguments.length === 1) {
          for (var e = arguments[0], t = new Array(e.length).fill(null), n = 0; n < e.length; n++) t[n] = e[n].copy();
          return t;
        }
        if (arguments.length === 5) for (var i = arguments[0], u = arguments[1], f = arguments[2], g = arguments[3], y = arguments[4], d = 0; d < y; d++) f[g + d] = i[u + d].copy();
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
        var t, n = 0, i = P(e);
        try {
          for (i.s(); !(t = i.n()).done; ) {
            var u = t.value;
            n = Math.max(n, ar.dimension(u));
          }
        } catch (f) {
          i.e(f);
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
        t = Nn.clamp(t, 0, e.length);
        var i = (n = Nn.clamp(n, -1, e.length)) - t + 1;
        n < 0 && (i = 0), t >= e.length && (i = 0), n < t && (i = 0);
        var u = new Array(i).fill(null);
        if (i === 0) return u;
        for (var f = 0, g = t; g <= n; g++) u[f++] = e[g];
        return u;
      } }]), s;
    }(), Bc = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "compare", value: function(e, t) {
        var n = e, i = t;
        return Ee.compare(n, i);
      } }, { key: "interfaces_", get: function() {
        return [Re];
      } }]), s;
    }(), Gc = function() {
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
        for (var u = Ee.increasingDirection(n), f = Ee.increasingDirection(i), g = u > 0 ? 0 : n.length - 1, y = f > 0 ? 0 : n.length - 1, d = 0; d < n.length; d++) {
          var N = n[g].compareTo(i[y]);
          if (N !== 0) return N;
          g += u, y += f;
        }
        return 0;
      } }, { key: "interfaces_", get: function() {
        return [Re];
      } }]), s;
    }();
    Ee.ForwardComparator = Bc, Ee.BidirectionalComparator = Gc, Ee.coordArrayType = new Array(0).fill(null);
    var or = function() {
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
    }(), Tn = function() {
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
        return ar.create(this.getDimension(), this.getMeasures());
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
          var e = new or(17 * this._coordinates.length);
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
            var f = arguments[0], g = arguments[1];
            s.constructor_.call(this, f, g, Ee.measures(f));
          } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var y = arguments[0], d = arguments[1];
            this._coordinates = new Array(y).fill(null), this._dimension = d;
            for (var N = 0; N < y; N++) this._coordinates[N] = ar.create(d);
          }
        } else if (arguments.length === 3) {
          if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
            var b = arguments[0], L = arguments[1], $ = arguments[2];
            this._dimension = L, this._measures = $, this._coordinates = b === null ? new Array(0).fill(null) : b;
          } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var F = arguments[0], V = arguments[1], H = arguments[2];
            this._coordinates = new Array(F).fill(null), this._dimension = V, this._measures = H;
            for (var K = 0; K < F; K++) this._coordinates[K] = this.createCoordinate();
          }
        }
      } }]), s;
    }(), yi = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "readResolve", value: function() {
        return s.instance();
      } }, { key: "create", value: function() {
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new Tn(e);
          }
          if (re(arguments[0], le)) {
            var t = arguments[0];
            return new Tn(t);
          }
        } else {
          if (arguments.length === 2) {
            var n = arguments[0], i = arguments[1];
            return i > 3 && (i = 3), i < 2 && (i = 2), new Tn(n, i);
          }
          if (arguments.length === 3) {
            var u = arguments[0], f = arguments[1], g = arguments[2], y = f - g;
            return g > 1 && (g = 1), y > 3 && (y = 3), y < 2 && (y = 2), new Tn(u, y + g, g);
          }
        }
      } }, { key: "interfaces_", get: function() {
        return [sa, X];
      } }], [{ key: "instance", value: function() {
        return s.instanceObject;
      } }]), s;
    }();
    yi.instanceObject = new yi();
    var vi = function(s) {
      h(t, s);
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
        for (var n = new Z(), i = 0; i < this._geometries.length; i++) for (var u = this._geometries[i].getBoundary(), f = 0; f < u.getNumGeometries(); f++) n.add(u.getGeometryN(f));
        var g = new Array(n.size()).fill(null);
        return this.getFactory().createMultiLineString(n.toArray(g));
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTIPOLYGON;
      } }, { key: "interfaces_", get: function() {
        return [la];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), fa = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "get", value: function() {
      } }, { key: "put", value: function() {
      } }, { key: "size", value: function() {
      } }, { key: "values", value: function() {
      } }, { key: "entrySet", value: function() {
      } }]), s;
    }(), qc = function(s) {
      h(t, s);
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
        var n = new oi();
        return this.map.entries().forEach(function(i) {
          return n.add(i);
        }), n;
      } }, { key: "size", value: function() {
        return this.map.size();
      } }]), t;
    }(fa), He = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "equals", value: function(e) {
        if (!(e instanceof s)) return !1;
        var t = e;
        return this._modelType === t._modelType && this._scale === t._scale;
      } }, { key: "compareTo", value: function(e) {
        var t = e, n = this.getMaximumSignificantDigits(), i = t.getMaximumSignificantDigits();
        return tr.compare(n, i);
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
          if (arguments[0] instanceof Wt) {
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
    }(), Wt = function() {
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
    Wt.nameToTypeMap = new qc(), He.Type = Wt, He.FIXED = new Wt("FIXED"), He.FLOATING = new Wt("FLOATING"), He.FLOATING_SINGLE = new Wt("FLOATING SINGLE"), He.maximumPreciseValue = 9007199254740992;
    var pi = function(s) {
      h(t, s);
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
        throw new Et();
      } }, { key: "getGeometryType", value: function() {
        return W.TYPENAME_MULTILINESTRING;
      } }, { key: "interfaces_", get: function() {
        return [aa];
      } }], [{ key: "constructor_", value: function() {
        var n = arguments[0], i = arguments[1];
        De.constructor_.call(this, n, i);
      } }]), t;
    }(De), Ht = function() {
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
            return new wn(t, this);
          }
        }
      } }, { key: "createMultiLineString", value: function() {
        if (arguments.length === 0) return new pi(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new pi(e, this);
        }
      } }, { key: "buildGeometry", value: function(e) {
        for (var t = null, n = !1, i = !1, u = e.iterator(); u.hasNext(); ) {
          var f = u.next(), g = f.getTypeCode();
          t === null && (t = g), g !== t && (n = !0), f instanceof De && (i = !0);
        }
        if (t === null) return this.createGeometryCollection();
        if (n || i) return this.createGeometryCollection(s.toGeometryArray(e));
        var y = e.iterator().next();
        if (e.size() > 1) {
          if (y instanceof sr) return this.createMultiPolygon(s.toPolygonArray(e));
          if (y instanceof wn) return this.createMultiLineString(s.toLineStringArray(e));
          if (y instanceof fi) return this.createMultiPoint(s.toPointArray(e));
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
            return new fi(t, this);
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
          if (arguments[0] instanceof bn) {
            var n = arguments[0];
            return this.createPolygon(n, null);
          }
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          return new sr(i, u, this);
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
            return new bn(t, this);
          }
        }
      } }, { key: "createMultiPolygon", value: function() {
        if (arguments.length === 0) return new vi(null, this);
        if (arguments.length === 1) {
          var e = arguments[0];
          return new vi(e, this);
        }
      } }, { key: "createMultiPoint", value: function() {
        if (arguments.length === 0) return new hi(null, this);
        if (arguments.length === 1) {
          if (arguments[0] instanceof Array) {
            var e = arguments[0];
            return new hi(e, this);
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
        if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) s.constructor_.call(this, new He(), 0);
        else if (arguments.length === 1) {
          if (re(arguments[0], sa)) {
            var e = arguments[0];
            s.constructor_.call(this, new He(), 0, e);
          } else if (arguments[0] instanceof He) {
            var t = arguments[0];
            s.constructor_.call(this, t, 0, s.getDefaultCoordinateSequenceFactory());
          }
        } else if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          s.constructor_.call(this, n, i, s.getDefaultCoordinateSequenceFactory());
        } else if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2];
          this._precisionModel = u, this._coordinateSequenceFactory = g, this._SRID = f;
        }
      } }, { key: "toMultiPolygonArray", value: function(e) {
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "toGeometryArray", value: function(e) {
        if (e === null) return null;
        var t = new Array(e.size()).fill(null);
        return e.toArray(t);
      } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
        return yi.instance();
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
    }(), mi = "XY", zc = "XYZ", Yc = "XYM", Uc = "XYZM", ha = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, ga = "EMPTY", ur = 1, vt = 2, kt = 3, ya = 4, Zt = 5, Xc = 6;
    for (var jc in ha) ha[jc].toUpperCase();
    var Vc = function() {
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
        if (t == "(") e = vt;
        else if (t == ",") e = Zt;
        else if (t == ")") e = kt;
        else if (this.isNumeric_(t) || t == "-") e = ya, i = this.readNumber_();
        else if (this.isAlpha_(t)) e = ur, i = this.readText_();
        else {
          if (this.isWhiteSpace_(t)) return this.nextToken();
          if (t !== "") throw new Error("Unexpected character: " + t);
          e = Xc;
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
    }(), Wc = function() {
      function s(e, t) {
        a(this, s), this.lexer_ = e, this.token_, this.layout_ = mi, this.factory = t;
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
        var e = mi, t = this.token_;
        if (this.isTokenType(ur)) {
          var n = t.value;
          n === "Z" ? e = zc : n === "M" ? e = Yc : n === "ZM" && (e = Uc), e !== mi && this.consume_();
        }
        return e;
      } }, { key: "parseGeometryCollectionText_", value: function() {
        if (this.match(vt)) {
          var e = [];
          do
            e.push(this.parseGeometry_());
          while (this.match(Zt));
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointText_", value: function() {
        if (this.match(vt)) {
          var e = this.parsePoint_();
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return null;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseLineStringText_", value: function() {
        if (this.match(vt)) {
          var e = this.parsePointList_();
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePolygonText_", value: function() {
        if (this.match(vt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPointText_", value: function() {
        var e;
        if (this.match(vt)) {
          if (e = this.token_.type == vt ? this.parsePointTextList_() : this.parsePointList_(), this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiLineStringText_", value: function() {
        if (this.match(vt)) {
          var e = this.parseLineStringTextList_();
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parseMultiPolygonText_", value: function() {
        if (this.match(vt)) {
          var e = this.parsePolygonTextList_();
          if (this.match(kt)) return e;
        } else if (this.isEmptyGeometry_()) return [];
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePoint_", value: function() {
        for (var e = [], t = this.layout_.length, n = 0; n < t; ++n) {
          var i = this.token_;
          if (!this.match(ya)) break;
          e.push(i.value);
        }
        if (e.length == t) return e;
        throw new Error(this.formatErrorMessage_());
      } }, { key: "parsePointList_", value: function() {
        for (var e = [this.parsePoint_()]; this.match(Zt); ) e.push(this.parsePoint_());
        return e;
      } }, { key: "parsePointTextList_", value: function() {
        for (var e = [this.parsePointText_()]; this.match(Zt); ) e.push(this.parsePointText_());
        return e;
      } }, { key: "parseLineStringTextList_", value: function() {
        for (var e = [this.parseLineStringText_()]; this.match(Zt); ) e.push(this.parseLineStringText_());
        return e;
      } }, { key: "parsePolygonTextList_", value: function() {
        for (var e = [this.parsePolygonText_()]; this.match(Zt); ) e.push(this.parsePolygonText_());
        return e;
      } }, { key: "isEmptyGeometry_", value: function() {
        var e = this.isTokenType(ur) && this.token_.value == ga;
        return e && this.consume_(), e;
      } }, { key: "formatErrorMessage_", value: function() {
        return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
      } }, { key: "parseGeometry_", value: function() {
        var e = this.factory, t = function(H) {
          return x(O, C(H));
        }, n = function(H) {
          var K = H.map(function(he) {
            return e.createLinearRing(he.map(t));
          });
          return K.length > 1 ? e.createPolygon(K[0], K.slice(1)) : e.createPolygon(K[0]);
        }, i = this.token_;
        if (this.match(ur)) {
          var u = i.value;
          if (this.layout_ = this.parseGeometryLayout_(), u == "GEOMETRYCOLLECTION") {
            var f = this.parseGeometryCollectionText_();
            return e.createGeometryCollection(f);
          }
          switch (u) {
            case "POINT":
              var g = this.parsePointText_();
              return g ? e.createPoint(x(O, C(g))) : e.createPoint();
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
              var L = b.map(t).map(function(H) {
                return e.createPoint(H);
              });
              return e.createMultiPoint(L);
            case "MULTILINESTRING":
              var $ = this.parseMultiLineStringText_().map(function(H) {
                return e.createLineString(H.map(t));
              });
              return e.createMultiLineString($);
            case "MULTIPOLYGON":
              var F = this.parseMultiPolygonText_();
              if (!F || F.length === 0) return e.createMultiPolygon();
              var V = F.map(n);
              return e.createMultiPolygon(V);
            default:
              throw new Error("Invalid geometry type: " + u);
          }
        }
        throw new Error(this.formatErrorMessage_());
      } }]), s;
    }();
    function va(s) {
      if (s.isEmpty()) return "";
      var e = s.getCoordinate(), t = [e.x, e.y];
      return e.z === void 0 || Number.isNaN(e.z) || t.push(e.z), e.m === void 0 || Number.isNaN(e.m) || t.push(e.m), t.join(" ");
    }
    function Ln(s) {
      for (var e = s.getCoordinates().map(function(u) {
        var f = [u.x, u.y];
        return u.z === void 0 || Number.isNaN(u.z) || f.push(u.z), u.m === void 0 || Number.isNaN(u.m) || f.push(u.m), f;
      }), t = [], n = 0, i = e.length; n < i; ++n) t.push(e[n].join(" "));
      return t.join(", ");
    }
    function pa(s) {
      var e = [];
      e.push("(" + Ln(s.getExteriorRing()) + ")");
      for (var t = 0, n = s.getNumInteriorRing(); t < n; ++t) e.push("(" + Ln(s.getInteriorRingN(t)) + ")");
      return e.join(", ");
    }
    var Hc = { Point: va, LineString: Ln, LinearRing: Ln, Polygon: pa, MultiPoint: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + va(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiLineString: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + Ln(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, MultiPolygon: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push("(" + pa(s.getGeometryN(t)) + ")");
      return e.join(", ");
    }, GeometryCollection: function(s) {
      for (var e = [], t = 0, n = s.getNumGeometries(); t < n; ++t) e.push(ma(s.getGeometryN(t)));
      return e.join(", ");
    } };
    function ma(s) {
      var e = s.getGeometryType(), t = Hc[e];
      e = e.toUpperCase();
      var n = function(i) {
        var u = "";
        if (i.isEmpty()) return u;
        var f = i.getCoordinate();
        return f.z === void 0 || Number.isNaN(f.z) || (u += "Z"), f.m === void 0 || Number.isNaN(f.m) || (u += "M"), u;
      }(s);
      return n.length > 0 && (e += " " + n), s.isEmpty() ? e + " " + ga : e + " (" + t(s) + ")";
    }
    var Zc = function() {
      function s(e) {
        a(this, s), this.geometryFactory = e || new Ht(), this.precisionModel = this.geometryFactory.getPrecisionModel();
      }
      return c(s, [{ key: "read", value: function(e) {
        var t = new Vc(e);
        return new Wc(t, this.geometryFactory).parse();
      } }, { key: "write", value: function(e) {
        return ma(e);
      } }]), s;
    }(), di = function() {
      function s(e) {
        a(this, s), this.parser = new Zc(e);
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
        var e = new or();
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
        return di.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + di.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
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
        var i = Math.abs(n.x - t.x), u = Math.abs(n.y - t.y), f = -1;
        if (e.equals(t)) f = 0;
        else if (e.equals(n)) f = i > u ? i : u;
        else {
          var g = Math.abs(e.x - t.x), y = Math.abs(e.y - t.y);
          (f = i > u ? g : y) !== 0 || e.equals(t) || (f = Math.max(g, y));
        }
        return se.isTrue(!(f === 0 && !e.equals(t)), "Bad distance calculation"), f;
      } }, { key: "nonRobustComputeEdgeDistance", value: function(e, t, n) {
        var i = e.x - t.x, u = e.y - t.y, f = Math.sqrt(i * i + u * u);
        return se.isTrue(!(f === 0 && !e.equals(t)), "Invalid distance calculation"), f;
      } }]), s;
    }();
    me.DONT_INTERSECT = 0, me.DO_INTERSECT = 1, me.COLLINEAR = 2, me.NO_INTERSECTION = 0, me.POINT_INTERSECTION = 1, me.COLLINEAR_INTERSECTION = 2;
    var Bt = function(s) {
      h(t, s);
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
      } }, { key: "intersection", value: function(n, i, u, f) {
        var g = this.intersectionSafe(n, i, u, f);
        return this.isInSegmentEnvelopes(g) || (g = new O(t.nearestEndpoint(n, i, u, f))), this._precisionModel !== null && this._precisionModel.makePrecise(g), g;
      } }, { key: "checkDD", value: function(n, i, u, f, g) {
        var y = li.intersection(n, i, u, f), d = this.isInSegmentEnvelopes(y);
        Ge.out.println("DD in env = " + d + "  --------------------- " + y), g.distance(y) > 1e-4 && Ge.out.println("Distance = " + g.distance(y));
      } }, { key: "intersectionSafe", value: function(n, i, u, f) {
        var g = ci.intersection(n, i, u, f);
        return g === null && (g = t.nearestEndpoint(n, i, u, f)), g;
      } }, { key: "computeCollinearIntersection", value: function(n, i, u, f) {
        var g = pe.intersects(n, i, u), y = pe.intersects(n, i, f), d = pe.intersects(u, f, n), N = pe.intersects(u, f, i);
        return g && y ? (this._intPt[0] = u, this._intPt[1] = f, me.COLLINEAR_INTERSECTION) : d && N ? (this._intPt[0] = n, this._intPt[1] = i, me.COLLINEAR_INTERSECTION) : g && d ? (this._intPt[0] = u, this._intPt[1] = n, !u.equals(n) || y || N ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : g && N ? (this._intPt[0] = u, this._intPt[1] = i, !u.equals(i) || y || d ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : y && d ? (this._intPt[0] = f, this._intPt[1] = n, !f.equals(n) || g || N ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : y && N ? (this._intPt[0] = f, this._intPt[1] = i, !f.equals(i) || g || d ? me.COLLINEAR_INTERSECTION : me.POINT_INTERSECTION) : me.NO_INTERSECTION;
      } }, { key: "computeIntersect", value: function(n, i, u, f) {
        if (this._isProper = !1, !pe.intersects(n, i, u, f)) return me.NO_INTERSECTION;
        var g = Q.index(n, i, u), y = Q.index(n, i, f);
        if (g > 0 && y > 0 || g < 0 && y < 0) return me.NO_INTERSECTION;
        var d = Q.index(u, f, n), N = Q.index(u, f, i);
        return d > 0 && N > 0 || d < 0 && N < 0 ? me.NO_INTERSECTION : g === 0 && y === 0 && d === 0 && N === 0 ? this.computeCollinearIntersection(n, i, u, f) : (g === 0 || y === 0 || d === 0 || N === 0 ? (this._isProper = !1, n.equals2D(u) || n.equals2D(f) ? this._intPt[0] = n : i.equals2D(u) || i.equals2D(f) ? this._intPt[0] = i : g === 0 ? this._intPt[0] = new O(u) : y === 0 ? this._intPt[0] = new O(f) : d === 0 ? this._intPt[0] = new O(n) : N === 0 && (this._intPt[0] = new O(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, u, f)), me.POINT_INTERSECTION);
      } }], [{ key: "nearestEndpoint", value: function(n, i, u, f) {
        var g = n, y = rt.pointToSegment(n, u, f), d = rt.pointToSegment(i, u, f);
        return d < y && (y = d, g = i), (d = rt.pointToSegment(u, n, i)) < y && (y = d, g = u), (d = rt.pointToSegment(f, n, i)) < y && (y = d, g = f), g;
      } }]), t;
    }(me), Jc = function() {
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
        return this.getLocation() !== S.EXTERIOR;
      } }, { key: "getLocation", value: function() {
        return this._isPointOnSegment ? S.BOUNDARY : this._crossingCount % 2 == 1 ? S.INTERIOR : S.EXTERIOR;
      } }, { key: "isOnSegment", value: function() {
        return this._isPointOnSegment;
      } }], [{ key: "constructor_", value: function() {
        this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
        var e = arguments[0];
        this._p = e;
      } }, { key: "locatePointInRing", value: function() {
        if (arguments[0] instanceof O && re(arguments[1], le)) {
          for (var e = arguments[0], t = arguments[1], n = new s(e), i = new O(), u = new O(), f = 1; f < t.size(); f++) if (t.getCoordinate(f, i), t.getCoordinate(f - 1, u), n.countSegment(i, u), n.isOnSegment()) return n.getLocation();
          return n.getLocation();
        }
        if (arguments[0] instanceof O && arguments[1] instanceof Array) {
          for (var g = arguments[0], y = arguments[1], d = new s(g), N = 1; N < y.length; N++) {
            var b = y[N], L = y[N - 1];
            if (d.countSegment(b, L), d.isOnSegment()) return d.getLocation();
          }
          return d.getLocation();
        }
      } }]), s;
    }(), _i = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "isOnLine", value: function() {
        if (arguments[0] instanceof O && re(arguments[1], le)) {
          for (var e = arguments[0], t = arguments[1], n = new Bt(), i = new O(), u = new O(), f = t.size(), g = 1; g < f; g++) if (t.getCoordinate(g - 1, i), t.getCoordinate(g, u), n.computeIntersection(e, i, u), n.hasIntersection()) return !0;
          return !1;
        }
        if (arguments[0] instanceof O && arguments[1] instanceof Array) {
          for (var y = arguments[0], d = arguments[1], N = new Bt(), b = 1; b < d.length; b++) {
            var L = d[b - 1], $ = d[b];
            if (N.computeIntersection(y, L, $), N.hasIntersection()) return !0;
          }
          return !1;
        }
      } }, { key: "locateInRing", value: function(e, t) {
        return Jc.locatePointInRing(e, t);
      } }, { key: "isInRing", value: function(e, t) {
        return s.locateInRing(e, t) !== S.EXTERIOR;
      } }]), s;
    }(), qe = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setAllLocations", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] = e;
      } }, { key: "isNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] !== S.NONE) return !1;
        return !0;
      } }, { key: "setAllLocationsIfNull", value: function(e) {
        for (var t = 0; t < this.location.length; t++) this.location[t] === S.NONE && (this.location[t] = e);
      } }, { key: "isLine", value: function() {
        return this.location.length === 1;
      } }, { key: "merge", value: function(e) {
        if (e.location.length > this.location.length) {
          var t = new Array(3).fill(null);
          t[B.ON] = this.location[B.ON], t[B.LEFT] = S.NONE, t[B.RIGHT] = S.NONE, this.location = t;
        }
        for (var n = 0; n < this.location.length; n++) this.location[n] === S.NONE && n < e.location.length && (this.location[n] = e.location[n]);
      } }, { key: "getLocations", value: function() {
        return this.location;
      } }, { key: "flip", value: function() {
        if (this.location.length <= 1) return null;
        var e = this.location[B.LEFT];
        this.location[B.LEFT] = this.location[B.RIGHT], this.location[B.RIGHT] = e;
      } }, { key: "toString", value: function() {
        var e = new Sn();
        return this.location.length > 1 && e.append(S.toLocationSymbol(this.location[B.LEFT])), e.append(S.toLocationSymbol(this.location[B.ON])), this.location.length > 1 && e.append(S.toLocationSymbol(this.location[B.RIGHT])), e.toString();
      } }, { key: "setLocations", value: function(e, t, n) {
        this.location[B.ON] = e, this.location[B.LEFT] = t, this.location[B.RIGHT] = n;
      } }, { key: "get", value: function(e) {
        return e < this.location.length ? this.location[e] : S.NONE;
      } }, { key: "isArea", value: function() {
        return this.location.length > 1;
      } }, { key: "isAnyNull", value: function() {
        for (var e = 0; e < this.location.length; e++) if (this.location[e] === S.NONE) return !0;
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
        this.location = new Array(e).fill(null), this.setAllLocations(S.NONE);
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
          var u = arguments[0], f = arguments[1], g = arguments[2];
          this.init(3), this.location[B.ON] = u, this.location[B.LEFT] = f, this.location[B.RIGHT] = g;
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
        var e = new Sn();
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
          this.elt[0] = new qe(S.NONE), this.elt[1] = new qe(S.NONE), this.elt[n].setLocation(i);
        } else if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2];
          this.elt[0] = new qe(u, f, g), this.elt[1] = new qe(u, f, g);
        } else if (arguments.length === 4) {
          var y = arguments[0], d = arguments[1], N = arguments[2], b = arguments[3];
          this.elt[0] = new qe(S.NONE, S.NONE, S.NONE), this.elt[1] = new qe(S.NONE, S.NONE, S.NONE), this.elt[y].setLocations(d, N, b);
        }
      } }, { key: "toLineLabel", value: function(e) {
        for (var t = new s(S.NONE), n = 0; n < 2; n++) t.setLocation(n, e.getLocation(n));
        return t;
      } }]), s;
    }(), lr = function() {
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
          if (t === null) throw new yt("Found null DirectedEdge");
          if (t.getEdgeRing() === this) throw new yt("Directed Edge visited twice during ring-building at " + t.getCoordinate());
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
          for (var f = u; f < i.length; f++) this._pts.add(i[f]);
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
        if (!t.getEnvelopeInternal().contains(e) || !_i.isInRing(e, t.getCoordinates())) return !1;
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
          if (i === S.NONE) return null;
          if (this._label.getLocation(n) === S.NONE) return this._label.setLocation(n, i), null;
        }
      } }, { key: "setShell", value: function(e) {
        this._shell = e, e !== null && e.addHole(this);
      } }, { key: "toPolygon", value: function(e) {
        for (var t = new Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) t[n] = this._holes.get(n).getLinearRing();
        return e.createPolygon(this.getLinearRing(), t);
      } }], [{ key: "constructor_", value: function() {
        if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new Z(), this._pts = new Z(), this._label = new ze(S.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new Z(), this._geometryFactory = null, arguments.length !== 0) {
          if (arguments.length === 2) {
            var e = arguments[0], t = arguments[1];
            this._geometryFactory = t, this.computePoints(e), this.computeRing();
          }
        }
      } }]), s;
    }(), Qc = function(s) {
      h(t, s);
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
        lr.constructor_.call(this, n, i);
      } }]), t;
    }(lr), Kc = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "buildMinimalRings", value: function() {
        var n = new Z(), i = this._startDe;
        do {
          if (i.getMinEdgeRing() === null) {
            var u = new Qc(i, this._geometryFactory);
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
        lr.constructor_.call(this, n, i);
      } }]), t;
    }(lr), da = function() {
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
    }(), cr = function(s) {
      h(t, s);
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
        var u = S.NONE;
        if (u = this._label.getLocation(i), !n.isNull(i)) {
          var f = n.getLocation(i);
          u !== S.BOUNDARY && (u = f);
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
          var f = this.computeMergedLocation(i, u), g = this._label.getLocation(u);
          g === S.NONE && this._label.setLocation(u, f);
        }
      } }, { key: "add", value: function(n) {
        this._edges.insert(n), n.setNode(this);
      } }, { key: "setLabelBoundary", value: function(n) {
        if (this._label === null) return null;
        var i = S.NONE;
        this._label !== null && (i = this._label.getLocation(n));
        var u = null;
        switch (i) {
          case S.BOUNDARY:
            u = S.INTERIOR;
            break;
          case S.INTERIOR:
          default:
            u = S.BOUNDARY;
        }
        this._label.setLocation(n, u);
      } }], [{ key: "constructor_", value: function() {
        this._coord = null, this._edges = null;
        var n = arguments[0], i = arguments[1];
        this._coord = n, this._edges = i, this._label = new ze(0, S.NONE);
      } }]), t;
    }(da), ef = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.apply(this, arguments);
      }
      return t;
    }(fa);
    function _a(s) {
      return s == null ? 0 : s.color;
    }
    function fe(s) {
      return s == null ? null : s.parent;
    }
    function it(s, e) {
      s !== null && (s.color = e);
    }
    function xi(s) {
      return s == null ? null : s.left;
    }
    function xa(s) {
      return s == null ? null : s.right;
    }
    var Rn = function(s) {
      h(t, s);
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
        var u, f, g = this.root_;
        do
          if (u = g, (f = n.compareTo(g.key)) < 0) g = g.left;
          else {
            if (!(f > 0)) {
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
        return f < 0 ? u.left = d : u.right = d, this.fixAfterInsertion(d), this.size_++, null;
      } }, { key: "fixAfterInsertion", value: function(n) {
        var i;
        for (n.color = 1; n != null && n !== this.root_ && n.parent.color === 1; ) fe(n) === xi(fe(fe(n))) ? _a(i = xa(fe(fe(n)))) === 1 ? (it(fe(n), 0), it(i, 0), it(fe(fe(n)), 1), n = fe(fe(n))) : (n === xa(fe(n)) && (n = fe(n), this.rotateLeft(n)), it(fe(n), 0), it(fe(fe(n)), 1), this.rotateRight(fe(fe(n)))) : _a(i = xi(fe(fe(n)))) === 1 ? (it(fe(n), 0), it(i, 0), it(fe(fe(n)), 1), n = fe(fe(n))) : (n === xi(fe(n)) && (n = fe(n), this.rotateRight(n)), it(fe(n), 0), it(fe(fe(n)), 1), this.rotateLeft(fe(fe(n))));
        this.root_.color = 0;
      } }, { key: "values", value: function() {
        var n = new Z(), i = this.getFirstEntry();
        if (i !== null) for (n.add(i.value); (i = t.successor(i)) !== null; ) n.add(i.value);
        return n;
      } }, { key: "entrySet", value: function() {
        var n = new oi(), i = this.getFirstEntry();
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
    }(ef), Ea = function() {
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
        if (arguments[0] instanceof cr) {
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
          i.getLabel().getLocation(e) === S.BOUNDARY && t.add(i);
        }
        return t;
      } }, { key: "add", value: function(e) {
        var t = e.getCoordinate();
        this.addNode(t).add(e);
      } }], [{ key: "constructor_", value: function() {
        this.nodeMap = new Rn(), this.nodeFact = null;
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
    var ka = function() {
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3];
          s.constructor_.call(this, u), this.init(f, g), this._label = y;
        }
      } }]), s;
    }(), Ei = function(s) {
      h(t, s);
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
        if (this._depth[n] !== -999 && this._depth[n] !== i) throw new yt("assigned depths do not match", this.getCoordinate());
        this._depth[n] = i;
      } }, { key: "isInteriorAreaEdge", value: function() {
        for (var n = !0, i = 0; i < 2; i++) this._label.isArea(i) && this._label.getLocation(i, B.LEFT) === S.INTERIOR && this._label.getLocation(i, B.RIGHT) === S.INTERIOR || (n = !1);
        return n;
      } }, { key: "setNextMin", value: function(n) {
        this._nextMin = n;
      } }, { key: "print", value: function(n) {
        w(v(t.prototype), "print", this).call(this, n), n.print(" " + this._depth[B.LEFT] + "/" + this._depth[B.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
      } }, { key: "setMinEdgeRing", value: function(n) {
        this._minEdgeRing = n;
      } }, { key: "isLineEdge", value: function() {
        var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, S.EXTERIOR), u = !this._label.isArea(1) || this._label.allPositionsEqual(1, S.EXTERIOR);
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
        var f = 1;
        n === B.LEFT && (f = -1);
        var g = B.opposite(n), y = i + u * f;
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
        if (ka.constructor_.call(this, n), this._isForward = i, i) this.init(n.getCoordinate(0), n.getCoordinate(1));
        else {
          var u = n.getNumPoints() - 1;
          this.init(n.getCoordinate(u), n.getCoordinate(u - 1));
        }
        this.computeDirectedLabel();
      } }, { key: "depthFactor", value: function(n, i) {
        return n === S.EXTERIOR && i === S.INTERIOR ? 1 : n === S.INTERIOR && i === S.EXTERIOR ? -1 : 0;
      } }]), t;
    }(ka), Ia = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "createNode", value: function(e) {
        return new cr(e, null);
      } }]), s;
    }(), Sa = function() {
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
        if (arguments[0] instanceof cr) {
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
        Ge.out.println(e);
      } }, { key: "isBoundaryNode", value: function(e, t) {
        var n = this._nodes.find(t);
        if (n === null) return !1;
        var i = n.getLabel();
        return i !== null && i.getLocation(e) === S.BOUNDARY;
      } }, { key: "linkAllDirectedEdges", value: function() {
        for (var e = this._nodes.iterator(); e.hasNext(); )
          e.next().getEdges().linkAllDirectedEdges();
      } }, { key: "matchInSameDirection", value: function(e, t, n, i) {
        return !!e.equals(n) && Q.index(e, t, i) === Q.COLLINEAR && Ce.quadrant(e, t) === Ce.quadrant(n, i);
      } }, { key: "getEdgeEnds", value: function() {
        return this._edgeEndList;
      } }, { key: "debugPrint", value: function(e) {
        Ge.out.print(e);
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
          var i = new Ei(n, !0), u = new Ei(n, !1);
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
        if (this._edges = new Z(), this._nodes = null, this._edgeEndList = new Z(), arguments.length === 0) this._nodes = new Ea(new Ia());
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._nodes = new Ea(e);
        }
      } }, { key: "linkResultDirectedEdges", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); )
          t.next().getEdges().linkResultDirectedEdges();
      } }]), s;
    }(), tf = function() {
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
            if (u === null) throw new yt("unable to assign hole to a shell", i.getCoordinate(0));
            i.setShell(u);
          }
        }
      } }, { key: "buildMinimalEdgeRings", value: function(e, t, n) {
        for (var i = new Z(), u = e.iterator(); u.hasNext(); ) {
          var f = u.next();
          if (f.getMaxNodeDegree() > 2) {
            f.linkDirectedEdgesForMinimalEdgeRings();
            var g = f.buildMinimalRings(), y = this.findShell(g);
            y !== null ? (this.placePolygonHoles(y, g), t.add(y)) : n.addAll(g);
          } else i.add(f);
        }
        return i;
      } }, { key: "buildMaximalEdgeRings", value: function(e) {
        for (var t = new Z(), n = e.iterator(); n.hasNext(); ) {
          var i = n.next();
          if (i.isInResult() && i.getLabel().isArea() && i.getEdgeRing() === null) {
            var u = new Kc(i, this._geometryFactory);
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
          Sa.linkResultDirectedEdges(n);
          var i = this.buildMaximalEdgeRings(t), u = new Z(), f = this.buildMinimalEdgeRings(i, this._shellList, u);
          this.sortShellsAndHoles(f, this._shellList, u), this.placeFreeHoles(this._shellList, u);
        }
      } }], [{ key: "constructor_", value: function() {
        this._geometryFactory = null, this._shellList = new Z();
        var e = arguments[0];
        this._geometryFactory = e;
      } }, { key: "findEdgeRingContaining", value: function(e, t) {
        for (var n = e.getLinearRing(), i = n.getEnvelopeInternal(), u = n.getCoordinateN(0), f = null, g = null, y = t.iterator(); y.hasNext(); ) {
          var d = y.next(), N = d.getLinearRing(), b = N.getEnvelopeInternal();
          if (!b.equals(i) && b.contains(i)) {
            u = Ee.ptNotInList(n.getCoordinates(), N.getCoordinates());
            var L = !1;
            _i.isInRing(u, N.getCoordinates()) && (L = !0), L && (f === null || g.contains(b)) && (g = (f = d).getLinearRing().getEnvelopeInternal());
          }
        }
        return f;
      } }]), s;
    }(), Na = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getBounds", value: function() {
      } }]), s;
    }(), pt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getItem", value: function() {
        return this._item;
      } }, { key: "getBounds", value: function() {
        return this._bounds;
      } }, { key: "interfaces_", get: function() {
        return [Na, X];
      } }], [{ key: "constructor_", value: function() {
        this._bounds = null, this._item = null;
        var e = arguments[0], t = arguments[1];
        this._bounds = e, this._item = t;
      } }]), s;
    }(), fr = function() {
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
    }(), nf = function() {
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
        return [Na, X];
      } }], [{ key: "constructor_", value: function() {
        if (this._childBoundables = new Z(), this._bounds = null, this._level = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this._level = e;
          }
        }
      } }]), s;
    }(), Jt = { reverseOrder: function() {
      return { compare: function(s, e) {
        return e.compareTo(s);
      } };
    }, min: function(s) {
      return Jt.sort(s), s.get(0);
    }, sort: function(s, e) {
      var t = s.toArray();
      e ? Dt.sort(t, e) : Dt.sort(t);
      for (var n = s.iterator(), i = 0, u = t.length; i < u; i++) n.next(), n.set(t[i]);
    }, singletonList: function(s) {
      var e = new Z();
      return e.add(s), e;
    } }, rf = function() {
      function s() {
        a(this, s);
      }
      return c(s, null, [{ key: "maxDistance", value: function(e, t, n, i, u, f, g, y) {
        var d = s.distance(e, t, u, f);
        return d = Math.max(d, s.distance(e, t, g, y)), d = Math.max(d, s.distance(n, i, u, f)), d = Math.max(d, s.distance(n, i, g, y));
      } }, { key: "distance", value: function(e, t, n, i) {
        var u = n - e, f = i - t;
        return Math.sqrt(u * u + f * f);
      } }, { key: "maximumDistance", value: function(e, t) {
        var n = Math.min(e.getMinX(), t.getMinX()), i = Math.min(e.getMinY(), t.getMinY()), u = Math.max(e.getMaxX(), t.getMaxX()), f = Math.max(e.getMaxY(), t.getMaxY());
        return s.distance(n, i, u, f);
      } }, { key: "minMaxDistance", value: function(e, t) {
        var n = e.getMinX(), i = e.getMinY(), u = e.getMaxX(), f = e.getMaxY(), g = t.getMinX(), y = t.getMinY(), d = t.getMaxX(), N = t.getMaxY(), b = s.maxDistance(n, i, n, f, g, y, g, N);
        return b = Math.min(b, s.maxDistance(n, i, n, f, g, y, d, y)), b = Math.min(b, s.maxDistance(n, i, n, f, d, N, g, N)), b = Math.min(b, s.maxDistance(n, i, n, f, d, N, d, y)), b = Math.min(b, s.maxDistance(n, i, u, i, g, y, g, N)), b = Math.min(b, s.maxDistance(n, i, u, i, g, y, d, y)), b = Math.min(b, s.maxDistance(n, i, u, i, d, N, g, N)), b = Math.min(b, s.maxDistance(n, i, u, i, d, N, d, y)), b = Math.min(b, s.maxDistance(u, f, n, f, g, y, g, N)), b = Math.min(b, s.maxDistance(u, f, n, f, g, y, d, y)), b = Math.min(b, s.maxDistance(u, f, n, f, d, N, g, N)), b = Math.min(b, s.maxDistance(u, f, n, f, d, N, d, y)), b = Math.min(b, s.maxDistance(u, f, u, i, g, y, g, N)), b = Math.min(b, s.maxDistance(u, f, u, i, g, y, d, y)), b = Math.min(b, s.maxDistance(u, f, u, i, d, N, g, N)), b = Math.min(b, s.maxDistance(u, f, u, i, d, N, d, y));
      } }]), s;
    }(), Qt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "maximumDistance", value: function() {
        return rf.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
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
        for (var f = e.getChildBoundables().iterator(); f.hasNext(); ) {
          var g = f.next(), y = null;
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
    }(), wa = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "visitItem", value: function(e) {
      } }]), s;
    }(), Kt = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "queryInternal", value: function() {
        if (re(arguments[2], wa) && arguments[0] instanceof Object && arguments[1] instanceof Ye) for (var e = arguments[0], t = arguments[1], n = arguments[2], i = t.getChildBoundables(), u = 0; u < i.size(); u++) {
          var f = i.get(u);
          this.getIntersectsOp().intersects(f.getBounds(), e) && (f instanceof Ye ? this.queryInternal(e, f, n) : f instanceof pt ? n.visitItem(f.getItem()) : se.shouldNeverReachHere());
        }
        else if (re(arguments[2], At) && arguments[0] instanceof Object && arguments[1] instanceof Ye) for (var g = arguments[0], y = arguments[1], d = arguments[2], N = y.getChildBoundables(), b = 0; b < N.size(); b++) {
          var L = N.get(b);
          this.getIntersectsOp().intersects(L.getBounds(), g) && (L instanceof Ye ? this.queryInternal(g, L, d) : L instanceof pt ? d.add(L.getItem()) : se.shouldNeverReachHere());
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
            i instanceof Ye ? t += this.size(i) : i instanceof pt && (t += 1);
          }
          return t;
        }
      } }, { key: "removeItem", value: function(e, t) {
        for (var n = null, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
          var u = i.next();
          u instanceof pt && u.getItem() === t && (n = u);
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
              var f = this.itemsTree(u);
              f !== null && n.add(f);
            } else u instanceof pt ? n.add(u.getItem()) : se.shouldNeverReachHere();
          }
          return n.size() <= 0 ? null : n;
        }
      } }, { key: "insert", value: function(e, t) {
        se.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new pt(e, t));
      } }, { key: "boundablesAtLevel", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Z();
          return this.boundablesAtLevel(e, this._root, t), t;
        }
        if (arguments.length === 3) {
          var n = arguments[0], i = arguments[1], u = arguments[2];
          if (se.isTrue(n > -2), i.getLevel() === n) return u.add(i), null;
          for (var f = i.getChildBoundables().iterator(); f.hasNext(); ) {
            var g = f.next();
            g instanceof Ye ? this.boundablesAtLevel(n, g, u) : (se.isTrue(g instanceof pt), n === -1 && u.add(g));
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
          var n = arguments[0], i = arguments[1], u = arguments[2], f = this.removeItem(i, u);
          if (f) return !0;
          for (var g = null, y = i.getChildBoundables().iterator(); y.hasNext(); ) {
            var d = y.next();
            if (this.getIntersectsOp().intersects(d.getBounds(), n) && d instanceof Ye && (f = this.remove(n, d, u))) {
              g = d;
              break;
            }
          }
          return g !== null && g.getChildBoundables().isEmpty() && i.getChildBoundables().remove(g), f;
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
        Jt.sort(i, this.getComparator());
        for (var u = i.iterator(); u.hasNext(); ) {
          var f = u.next();
          this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(t)), this.lastNode(n).addChildBoundable(f);
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
    Kt.IntersectsOp = function() {
    }, Kt.DEFAULT_NODE_CAPACITY = 10;
    var sf = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "distance", value: function(e, t) {
      } }]), s;
    }(), st = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(n, i) {
        se.isTrue(n.length > 0);
        for (var u = new Z(), f = 0; f < n.length; f++) u.addAll(this.createParentBoundablesFromVerticalSlice(n[f], i));
        return u;
      } }, { key: "nearestNeighbourK", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1];
          return this.nearestNeighbourK(n, j.POSITIVE_INFINITY, i);
        }
        if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2], y = f, d = new fr();
          d.add(u);
          for (var N = new fr(); !d.isEmpty() && y >= 0; ) {
            var b = d.poll(), L = b.getDistance();
            if (L >= y) break;
            if (b.isLeaves()) if (N.size() < g) N.add(b);
            else {
              var $ = N.peek();
              $.getDistance() > L && (N.poll(), N.add(b));
              var F = N.peek();
              y = F.getDistance();
            }
            else b.expandToQueue(d, y);
          }
          return t.getItems(N);
        }
      } }, { key: "createNode", value: function(n) {
        return new ba(n);
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
        for (var u = Math.trunc(Math.ceil(n.size() / i)), f = new Array(i).fill(null), g = n.iterator(), y = 0; y < i; y++) {
          f[y] = new Z();
          for (var d = 0; g.hasNext() && d < u; ) {
            var N = g.next();
            f[y].add(N), d++;
          }
        }
        return f;
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
        var u = Math.trunc(Math.ceil(n.size() / this.getNodeCapacity())), f = new Z(n);
        Jt.sort(f, t.xComparator);
        var g = this.verticalSlices(f, Math.trunc(Math.ceil(Math.sqrt(u))));
        return this.createParentBoundablesFromVerticalSlices(g, i);
      } }, { key: "nearestNeighbour", value: function() {
        if (arguments.length === 1) {
          if (re(arguments[0], sf)) {
            var n = arguments[0];
            if (this.isEmpty()) return null;
            var i = new Qt(this.getRoot(), this.getRoot(), n);
            return this.nearestNeighbour(i);
          }
          if (arguments[0] instanceof Qt) {
            var u = arguments[0], f = j.POSITIVE_INFINITY, g = null, y = new fr();
            for (y.add(u); !y.isEmpty() && f > 0; ) {
              var d = y.poll(), N = d.getDistance();
              if (N >= f) break;
              d.isLeaves() ? (f = N, g = d) : d.expandToQueue(y, f);
            }
            return g === null ? null : [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
          }
        } else {
          if (arguments.length === 2) {
            var b = arguments[0], L = arguments[1];
            if (this.isEmpty() || b.isEmpty()) return null;
            var $ = new Qt(this.getRoot(), b.getRoot(), L);
            return this.nearestNeighbour($);
          }
          if (arguments.length === 3) {
            var F = arguments[0], V = arguments[1], H = arguments[2], K = new pt(F, V), he = new Qt(this.getRoot(), K, H);
            return this.nearestNeighbour(he)[0];
          }
          if (arguments.length === 4) {
            var de = arguments[0], Oe = arguments[1], Be = arguments[2], Je = arguments[3], mt = new pt(de, Oe), qt = new Qt(this.getRoot(), mt, Be);
            return this.nearestNeighbourK(qt, Je);
          }
        }
      } }, { key: "isWithinDistance", value: function() {
        if (arguments.length === 2) {
          var n = arguments[0], i = arguments[1], u = j.POSITIVE_INFINITY, f = new fr();
          for (f.add(n); !f.isEmpty(); ) {
            var g = f.poll(), y = g.getDistance();
            if (y > i) return !1;
            if (g.maximumDistance() <= i) return !0;
            if (g.isLeaves()) {
              if ((u = y) <= i) return !0;
            } else g.expandToQueue(f, u);
          }
          return !1;
        }
        if (arguments.length === 3) {
          var d = arguments[0], N = arguments[1], b = arguments[2], L = new Qt(this.getRoot(), d.getRoot(), N);
          return this.isWithinDistance(L, b);
        }
      } }, { key: "interfaces_", get: function() {
        return [nf, X];
      } }], [{ key: "constructor_", value: function() {
        if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
        else if (arguments.length === 1) {
          var n = arguments[0];
          Kt.constructor_.call(this, n);
        }
      } }, { key: "centreX", value: function(n) {
        return t.avg(n.getMinX(), n.getMaxX());
      } }, { key: "avg", value: function(n, i) {
        return (n + i) / 2;
      } }, { key: "getItems", value: function(n) {
        for (var i = new Array(n.size()).fill(null), u = 0; !n.isEmpty(); ) {
          var f = n.poll();
          i[u] = f.getBoundable(0).getItem(), u++;
        }
        return i;
      } }, { key: "centreY", value: function(n) {
        return t.avg(n.getMinY(), n.getMaxY());
      } }]), t;
    }(Kt), ba = function(s) {
      h(t, s);
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
    st.STRtreeNode = ba, st.xComparator = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [Re];
      } }, { key: "compare", value: function(e, t) {
        return Kt.compareDoubles(st.centreX(e.getBounds()), st.centreX(t.getBounds()));
      } }]), s;
    }())(), st.yComparator = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [Re];
      } }, { key: "compare", value: function(e, t) {
        return Kt.compareDoubles(st.centreY(e.getBounds()), st.centreY(t.getBounds()));
      } }]), s;
    }())(), st.intersectsOp = new (function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "interfaces_", get: function() {
        return [IntersectsOp];
      } }, { key: "intersects", value: function(e, t) {
        return e.intersects(t);
      } }]), s;
    }())(), st.DEFAULT_NODE_CAPACITY = 10;
    var af = function() {
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
    }(), of = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getCoordinate", value: function() {
        return this.coord;
      } }, { key: "print", value: function(e) {
        e.print(this.coord), e.print(" seg # = " + this.segmentIndex);
      } }, { key: "compareTo", value: function(e) {
        var t = e;
        return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? af.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
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
    }(), uf = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "hasNext", value: function() {
      } }, { key: "next", value: function() {
      } }, { key: "remove", value: function() {
      } }]), s;
    }(), lf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getSplitCoordinates", value: function() {
        var e = new On();
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
        var f = new Array(n).fill(null), g = 0;
        f[g++] = new O(e.coord);
        for (var y = e.segmentIndex + 1; y <= t.segmentIndex; y++) f[g++] = this._edge.getCoordinate(y);
        return u && (f[g] = new O(t.coord)), f;
      } }, { key: "print", value: function(e) {
        e.println("Intersections:");
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "findCollapsesFromExistingVertices", value: function(e) {
        for (var t = 0; t < this._edge.size() - 2; t++) {
          var n = this._edge.getCoordinate(t);
          this._edge.getCoordinate(t + 1);
          var i = this._edge.getCoordinate(t + 2);
          n.equals2D(i) && e.add(tr.valueOf(t + 1));
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
          this.findCollapseIndex(i, u, t) && e.add(tr.valueOf(t[0])), i = u;
        }
      } }, { key: "getEdge", value: function() {
        return this._edge;
      } }, { key: "addEndpoints", value: function() {
        var e = this._edge.size() - 1;
        this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(e), e);
      } }, { key: "createSplitEdge", value: function(e, t) {
        var n = this.createSplitEdgePts(e, t);
        return new Gt(n, this._edge.getData());
      } }, { key: "add", value: function(e, t) {
        var n = new of(this._edge, e, t, this._edge.getSegmentOctant(t)), i = this._nodeMap.get(n);
        return i !== null ? (se.isTrue(i.coord.equals2D(e), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
      } }, { key: "checkSplitEdgesCorrectness", value: function(e) {
        var t = this._edge.getCoordinates(), n = e.get(0).getCoordinate(0);
        if (!n.equals2D(t[0])) throw new Se("bad split edge start point at " + n);
        var i = e.get(e.size() - 1).getCoordinates(), u = i[i.length - 1];
        if (!u.equals2D(t[t.length - 1])) throw new Se("bad split edge end point at " + u);
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Rn(), this._edge = null;
        var e = arguments[0];
        this._edge = e;
      } }]), s;
    }(), cf = function() {
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
          var u = arguments[0], f = arguments[1], g = f.x - u.x, y = f.y - u.y;
          if (g === 0 && y === 0) throw new M("Cannot compute the octant for two identical points " + u);
          return s.octant(g, y);
        }
      } }]), s;
    }(), ff = function() {
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
    }(), hf = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "addIntersection", value: function(e, t) {
      } }, { key: "interfaces_", get: function() {
        return [ff];
      } }]), s;
    }(), Gt = function() {
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
        return e.equals2D(t) ? 0 : cf.octant(e, t);
      } }, { key: "getData", value: function() {
        return this._data;
      } }, { key: "addIntersection", value: function() {
        if (arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          this.addIntersectionNode(e, t);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1], u = arguments[3], f = new O(n.getIntersection(u));
          this.addIntersection(f, i);
        }
      } }, { key: "toString", value: function() {
        return di.toLineString(new Tn(this._pts));
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
        return [hf];
      } }], [{ key: "constructor_", value: function() {
        this._nodeList = new lf(this), this._pts = null, this._data = null;
        var e = arguments[0], t = arguments[1];
        this._pts = e, this._data = t;
      } }, { key: "getNodedSubstrings", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0], t = new Z();
          return s.getNodedSubstrings(e, t), t;
        }
        if (arguments.length === 2) for (var n = arguments[0], i = arguments[1], u = n.iterator(); u.hasNext(); ) {
          var f = u.next();
          f.getNodeList().addSplitEdges(i);
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
          var i = arguments[0], u = this.projectionFactor(i.p0), f = this.projectionFactor(i.p1);
          if (u >= 1 && f >= 1 || u <= 0 && f <= 0) return null;
          var g = this.project(i.p0);
          u < 0 && (g = this.p0), u > 1 && (g = this.p1);
          var y = this.project(i.p1);
          return f < 0 && (y = this.p0), f > 1 && (y = this.p1), new s(g, y);
        }
      } }, { key: "normalize", value: function() {
        this.p1.compareTo(this.p0) < 0 && this.reverse();
      } }, { key: "angle", value: function() {
        return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
      } }, { key: "getCoordinate", value: function(e) {
        return e === 0 ? this.p0 : this.p1;
      } }, { key: "distancePerpendicular", value: function(e) {
        return rt.pointToLinePerpendicular(e, this.p0, this.p1);
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
        var n = new Array(2).fill(null), i = j.MAX_VALUE, u = null, f = this.closestPoint(e.p0);
        i = f.distance(e.p0), n[0] = f, n[1] = e.p0;
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
        return ci.intersection(this.p0, this.p1, e.p0, e.p1);
      } }, { key: "maxY", value: function() {
        return Math.max(this.p0.y, this.p1.y);
      } }, { key: "pointAlongOffset", value: function(e, t) {
        var n = this.p0.x + e * (this.p1.x - this.p0.x), i = this.p0.y + e * (this.p1.y - this.p0.y), u = this.p1.x - this.p0.x, f = this.p1.y - this.p0.y, g = Math.sqrt(u * u + f * f), y = 0, d = 0;
        if (t !== 0) {
          if (g <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
          y = t * u / g, d = t * f / g;
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
        var t = this.p1.getY() - this.p0.getY(), n = this.p0.getX() - this.p1.getX(), i = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), u = t * t + n * n, f = t * t - n * n, g = e.getX(), y = e.getY();
        return new O((-f * g - 2 * t * n * y - 2 * t * i) / u, (f * y - 2 * t * n * g - 2 * n * i) / u);
      } }, { key: "distance", value: function() {
        if (arguments[0] instanceof s) {
          var e = arguments[0];
          return rt.segmentToSegment(this.p0, this.p1, e.p0, e.p1);
        }
        if (arguments[0] instanceof O) {
          var t = arguments[0];
          return rt.pointToSegment(t, this.p0, this.p1);
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
          var i = arguments[0], u = arguments[1], f = arguments[2], g = arguments[3];
          s.constructor_.call(this, new O(i, u), new O(f, g));
        }
      } }, { key: "midPoint", value: function(e, t) {
        return new O((e.x + t.x) / 2, (e.y + t.y) / 2);
      } }]), s;
    }(), gf = function() {
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
    }(), Oa = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getLineSegment", value: function(e, t) {
        t.p0 = this._pts[e], t.p1 = this._pts[e + 1];
      } }, { key: "computeSelect", value: function(e, t, n, i) {
        var u = this._pts[t], f = this._pts[n];
        if (n - t == 1) return i.select(this, t), null;
        if (!e.intersects(u, f)) return null;
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
          var n = arguments[0], i = arguments[1], u = arguments[2], f = arguments[3], g = arguments[4], y = arguments[5];
          if (i - n == 1 && g - f == 1) return y.overlap(this, n, u, f), null;
          if (!this.overlaps(n, i, u, f, g)) return null;
          var d = Math.trunc((n + i) / 2), N = Math.trunc((f + g) / 2);
          n < d && (f < N && this.computeOverlaps(n, d, u, f, N, y), N < g && this.computeOverlaps(n, d, u, N, g, y)), d < i && (f < N && this.computeOverlaps(d, i, u, f, N, y), N < g && this.computeOverlaps(d, i, u, N, g, y));
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
    }(), yf = function() {
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
            var f = s.findChainEnd(t, u), g = new Oa(t, u, f, n);
            i.add(g), u = f;
          } while (u < t.length - 1);
          return i;
        }
      } }]), s;
    }(), ki = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "computeNodes", value: function(e) {
      } }, { key: "getNodedSubstrings", value: function() {
      } }]), s;
    }(), Ta = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "setSegmentIntersector", value: function(e) {
        this._segInt = e;
      } }, { key: "interfaces_", get: function() {
        return [ki];
      } }], [{ key: "constructor_", value: function() {
        if (this._segInt = null, arguments.length !== 0) {
          if (arguments.length === 1) {
            var e = arguments[0];
            this.setSegmentIntersector(e);
          }
        }
      } }]), s;
    }(), Ii = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "getMonotoneChains", value: function() {
        return this._monoChains;
      } }, { key: "getNodedSubstrings", value: function() {
        return Gt.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "getIndex", value: function() {
        return this._index;
      } }, { key: "add", value: function(n) {
        for (var i = yf.getChains(n.getCoordinates(), n).iterator(); i.hasNext(); ) {
          var u = i.next();
          u.setId(this._idCounter++), this._index.insert(u.getEnvelope(), u), this._monoChains.add(u);
        }
      } }, { key: "computeNodes", value: function(n) {
        this._nodedSegStrings = n;
        for (var i = n.iterator(); i.hasNext(); ) this.add(i.next());
        this.intersectChains();
      } }, { key: "intersectChains", value: function() {
        for (var n = new La(this._segInt), i = this._monoChains.iterator(); i.hasNext(); ) for (var u = i.next(), f = this._index.query(u.getEnvelope()).iterator(); f.hasNext(); ) {
          var g = f.next();
          if (g.getId() > u.getId() && (u.computeOverlaps(g, n), this._nOverlaps++), this._segInt.isDone()) return null;
        }
      } }], [{ key: "constructor_", value: function() {
        if (this._monoChains = new Z(), this._index = new st(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
          if (arguments.length === 1) {
            var n = arguments[0];
            Ta.constructor_.call(this, n);
          }
        }
      } }]), t;
    }(Ta), La = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "overlap", value: function() {
        if (arguments.length !== 4) return w(v(t.prototype), "overlap", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = arguments[2], f = arguments[3], g = n.getContext(), y = u.getContext();
        this._si.processIntersections(g, i, y, f);
      } }], [{ key: "constructor_", value: function() {
        this._si = null;
        var n = arguments[0];
        this._si = n;
      } }]), t;
    }(gf);
    Ii.SegmentOverlapAction = La;
    var Ze = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isDeletable", value: function(e, t, n, i) {
        var u = this._inputLine[e], f = this._inputLine[t], g = this._inputLine[n];
        return !!this.isConcave(u, f, g) && !!this.isShallow(u, f, g, i) && this.isShallowSampled(u, f, e, n, i);
      } }, { key: "deleteShallowConcavities", value: function() {
        for (var e = 1, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t), i = !1; n < this._inputLine.length; ) {
          var u = !1;
          this.isDeletable(e, t, n, this._distanceTol) && (this._isDeleted[t] = s.DELETE, u = !0, i = !0), e = u ? n : t, t = this.findNextNonDeletedIndex(e), n = this.findNextNonDeletedIndex(t);
        }
        return i;
      } }, { key: "isShallowConcavity", value: function(e, t, n, i) {
        return Q.index(e, t, n) === this._angleOrientation && rt.pointToSegment(t, e, n) < i;
      } }, { key: "isShallowSampled", value: function(e, t, n, i, u) {
        var f = Math.trunc((i - n) / s.NUM_PTS_TO_CHECK);
        f <= 0 && (f = 1);
        for (var g = n; g < i; g += f) if (!this.isShallow(e, t, this._inputLine[g], u)) return !1;
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
        return rt.pointToSegment(t, e, n) < i;
      } }, { key: "collapseLine", value: function() {
        for (var e = new On(), t = 0; t < this._inputLine.length; t++) this._isDeleted[t] !== s.DELETE && e.add(this._inputLine[t]);
        return e.toCoordinateArray();
      } }], [{ key: "constructor_", value: function() {
        this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = Q.COUNTERCLOCKWISE;
        var e = arguments[0];
        this._inputLine = e;
      } }, { key: "simplify", value: function(e, t) {
        return new s(e).simplify(t);
      } }]), s;
    }();
    Ze.INIT = 0, Ze.DELETE = 1, Ze.KEEP = 1, Ze.NUM_PTS_TO_CHECK = 10;
    var Ra = function() {
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
        return new Ht().createLineString(this.getCoordinates()).toString();
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
    Ra.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
    var $e = function() {
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
    $e.PI_TIMES_2 = 2 * Math.PI, $e.PI_OVER_2 = Math.PI / 2, $e.PI_OVER_4 = Math.PI / 4, $e.COUNTERCLOCKWISE = Q.COUNTERCLOCKWISE, $e.CLOCKWISE = Q.CLOCKWISE, $e.NONE = Q.COLLINEAR;
    var Cn = function() {
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
        var f = t.x - e.x, g = t.y - e.y, y = Math.atan2(g, f);
        switch (this._bufParams.getEndCapStyle()) {
          case A.CAP_ROUND:
            this._segList.addPt(i.p1), this.addDirectedFillet(t, y + Math.PI / 2, y - Math.PI / 2, Q.CLOCKWISE, this._distance), this._segList.addPt(u.p1);
            break;
          case A.CAP_FLAT:
            this._segList.addPt(i.p1), this._segList.addPt(u.p1);
            break;
          case A.CAP_SQUARE:
            var d = new O();
            d.x = Math.abs(this._distance) * Math.cos(y), d.y = Math.abs(this._distance) * Math.sin(y);
            var N = new O(i.p1.x + d.x, i.p1.y + d.y), b = new O(u.p1.x + d.x, u.p1.y + d.y);
            this._segList.addPt(N), this._segList.addPt(b);
        }
      } }, { key: "getCoordinates", value: function() {
        return this._segList.getCoordinates();
      } }, { key: "addMitreJoin", value: function(e, t, n, i) {
        var u = ci.intersection(t.p0, t.p1, n.p0, n.p1);
        if (u !== null && (i <= 0 ? 1 : u.distance(e) / Math.abs(i)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(u), null;
        this.addLimitedMitreJoin(t, n, i, this._bufParams.getMitreLimit());
      } }, { key: "addOutsideTurn", value: function(e, t) {
        if (this._offset0.p1.distance(this._offset1.p0) < this._distance * s.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
        this._bufParams.getJoinStyle() === A.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === A.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (t && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, e, this._distance), this._segList.addPt(this._offset1.p0));
      } }, { key: "createSquare", value: function(e) {
        this._segList.addPt(new O(e.x + this._distance, e.y + this._distance)), this._segList.addPt(new O(e.x + this._distance, e.y - this._distance)), this._segList.addPt(new O(e.x - this._distance, e.y - this._distance)), this._segList.addPt(new O(e.x - this._distance, e.y + this._distance)), this._segList.closeRing();
      } }, { key: "addSegments", value: function(e, t) {
        this._segList.addPts(e, t);
      } }, { key: "addFirstSegment", value: function() {
        this._segList.addPt(this._offset1.p0);
      } }, { key: "addCornerFillet", value: function(e, t, n, i, u) {
        var f = t.x - e.x, g = t.y - e.y, y = Math.atan2(g, f), d = n.x - e.x, N = n.y - e.y, b = Math.atan2(N, d);
        i === Q.CLOCKWISE ? y <= b && (y += 2 * Math.PI) : y >= b && (y -= 2 * Math.PI), this._segList.addPt(t), this.addDirectedFillet(e, y, b, i, u), this._segList.addPt(n);
      } }, { key: "addLastSegment", value: function() {
        this._segList.addPt(this._offset1.p1);
      } }, { key: "initSideSegments", value: function(e, t, n) {
        this._s1 = e, this._s2 = t, this._side = n, this._seg1.setCoordinates(e, t), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
      } }, { key: "addLimitedMitreJoin", value: function(e, t, n, i) {
        var u = this._seg0.p1, f = $e.angle(u, this._seg0.p0), g = $e.angleBetweenOriented(this._seg0.p0, u, this._seg1.p1) / 2, y = $e.normalize(f + g), d = $e.normalize(y + Math.PI), N = i * n, b = n - N * Math.abs(Math.sin(g)), L = u.x + N * Math.cos(d), $ = u.y + N * Math.sin(d), F = new O(L, $), V = new Fe(u, F), H = V.pointAlongOffset(1, b), K = V.pointAlongOffset(1, -b);
        this._side === B.LEFT ? (this._segList.addPt(H), this._segList.addPt(K)) : (this._segList.addPt(K), this._segList.addPt(H));
      } }, { key: "addDirectedFillet", value: function(e, t, n, i, u) {
        var f = i === Q.CLOCKWISE ? -1 : 1, g = Math.abs(t - n), y = Math.trunc(g / this._filletAngleQuantum + 0.5);
        if (y < 1) return null;
        for (var d = g / y, N = new O(), b = 0; b < y; b++) {
          var L = t + f * b * d;
          N.x = e.x + u * Math.cos(L), N.y = e.y + u * Math.sin(L), this._segList.addPt(N);
        }
      } }, { key: "computeOffsetSegment", value: function(e, t, n, i) {
        var u = t === B.LEFT ? 1 : -1, f = e.p1.x - e.p0.x, g = e.p1.y - e.p0.y, y = Math.sqrt(f * f + g * g), d = u * n * f / y, N = u * n * g / y;
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
        this._distance = e, this._maxCurveSegmentError = e * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ra(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(e * s.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
      } }, { key: "addCollinear", value: function(e) {
        this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === A.JOIN_BEVEL || this._bufParams.getJoinStyle() === A.JOIN_MITRE ? (e && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, Q.CLOCKWISE, this._distance));
      } }, { key: "closeRing", value: function() {
        this._segList.closeRing();
      } }, { key: "hasNarrowConcaveAngle", value: function() {
        return this._hasNarrowConcaveAngle;
      } }], [{ key: "constructor_", value: function() {
        this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Fe(), this._seg1 = new Fe(), this._offset0 = new Fe(), this._offset1 = new Fe(), this._side = 0, this._hasNarrowConcaveAngle = !1;
        var e = arguments[0], t = arguments[1], n = arguments[2];
        this._precisionModel = e, this._bufParams = t, this._li = new Bt(), this._filletAngleQuantum = Math.PI / 2 / t.getQuadrantSegments(), t.getQuadrantSegments() >= 8 && t.getJoinStyle() === A.JOIN_ROUND && (this._closingSegLengthFactor = s.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
      } }]), s;
    }();
    Cn.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, Cn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, Cn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Cn.MAX_CLOSING_SEG_LEN_FACTOR = 80;
    var vf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getOffsetCurve", value: function(e, t) {
        if (this._distance = t, t === 0) return null;
        var n = t < 0, i = Math.abs(t), u = this.getSegGen(i);
        e.length <= 1 ? this.computePointCurve(e[0], u) : this.computeOffsetCurve(e, n, u);
        var f = u.getCoordinates();
        return n && Ee.reverse(f), f;
      } }, { key: "computeSingleSidedBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        if (t) {
          n.addSegments(e, !0);
          var u = Ze.simplify(e, -i), f = u.length - 1;
          n.initSideSegments(u[f], u[f - 1], B.LEFT), n.addFirstSegment();
          for (var g = f - 2; g >= 0; g--) n.addNextSegment(u[g], !0);
        } else {
          n.addSegments(e, !1);
          var y = Ze.simplify(e, i), d = y.length - 1;
          n.initSideSegments(y[0], y[1], B.LEFT), n.addFirstSegment();
          for (var N = 2; N <= d; N++) n.addNextSegment(y[N], !0);
        }
        n.addLastSegment(), n.closeRing();
      } }, { key: "computeRingBufferCurve", value: function(e, t, n) {
        var i = this.simplifyTolerance(this._distance);
        t === B.RIGHT && (i = -i);
        var u = Ze.simplify(e, i), f = u.length - 1;
        n.initSideSegments(u[f - 1], u[0], t);
        for (var g = 1; g <= f; g++) {
          var y = g !== 1;
          n.addNextSegment(u[g], y);
        }
        n.closeRing();
      } }, { key: "computeLineBufferCurve", value: function(e, t) {
        var n = this.simplifyTolerance(this._distance), i = Ze.simplify(e, n), u = i.length - 1;
        t.initSideSegments(i[0], i[1], B.LEFT);
        for (var f = 2; f <= u; f++) t.addNextSegment(i[f], !0);
        t.addLastSegment(), t.addLineEndCap(i[u - 1], i[u]);
        var g = Ze.simplify(e, -n), y = g.length - 1;
        t.initSideSegments(g[y], g[y - 1], B.LEFT);
        for (var d = y - 2; d >= 0; d--) t.addNextSegment(g[d], !0);
        t.addLastSegment(), t.addLineEndCap(g[1], g[0]), t.closeRing();
      } }, { key: "computePointCurve", value: function(e, t) {
        switch (this._bufParams.getEndCapStyle()) {
          case A.CAP_ROUND:
            t.createCircle(e);
            break;
          case A.CAP_SQUARE:
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
          var u = Ze.simplify(e, -i), f = u.length - 1;
          n.initSideSegments(u[f], u[f - 1], B.LEFT), n.addFirstSegment();
          for (var g = f - 2; g >= 0; g--) n.addNextSegment(u[g], !0);
        } else {
          var y = Ze.simplify(e, i), d = y.length - 1;
          n.initSideSegments(y[0], y[1], B.LEFT), n.addFirstSegment();
          for (var N = 2; N <= d; N++) n.addNextSegment(y[N], !0);
        }
        n.addLastSegment();
      } }, { key: "isLineOffsetEmpty", value: function(e) {
        return e === 0 || e < 0 && !this._bufParams.isSingleSided();
      } }, { key: "getSegGen", value: function(e) {
        return new Cn(this._precisionModel, this._bufParams, e);
      } }], [{ key: "constructor_", value: function() {
        this._distance = 0, this._precisionModel = null, this._bufParams = null;
        var e = arguments[0], t = arguments[1];
        this._precisionModel = e, this._bufParams = t;
      } }, { key: "copyCoordinates", value: function(e) {
        for (var t = new Array(e.length).fill(null), n = 0; n < t.length; n++) t[n] = new O(e[n]);
        return t;
      } }]), s;
    }(), Ca = function() {
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
          if (re(arguments[2], At) && arguments[0] instanceof O && arguments[1] instanceof Ei) for (var f = arguments[0], g = arguments[1], y = arguments[2], d = g.getEdge().getCoordinates(), N = 0; N < d.length - 1; N++) {
            this._seg.p0 = d[N], this._seg.p1 = d[N + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse();
            var b = Math.max(this._seg.p0.x, this._seg.p1.x);
            if (!(b < f.x) && !(this._seg.isHorizontal() || f.y < this._seg.p0.y || f.y > this._seg.p1.y || Q.index(this._seg.p0, this._seg.p1, f) === Q.RIGHT)) {
              var L = g.getDepth(B.LEFT);
              this._seg.p0.equals(d[N]) || (L = g.getDepth(B.RIGHT));
              var $ = new Pa(this._seg, L);
              y.add($);
            }
          }
          else if (re(arguments[2], At) && arguments[0] instanceof O && re(arguments[1], At)) for (var F = arguments[0], V = arguments[1], H = arguments[2], K = V.iterator(); K.hasNext(); ) {
            var he = K.next();
            he.isForward() && this.findStabbedSegments(F, he, H);
          }
        }
      } }, { key: "getDepth", value: function(e) {
        var t = this.findStabbedSegments(e);
        return t.size() === 0 ? 0 : Jt.min(t)._leftDepth;
      } }], [{ key: "constructor_", value: function() {
        this._subgraphs = null, this._seg = new Fe();
        var e = arguments[0];
        this._subgraphs = e;
      } }]), s;
    }(), Pa = function() {
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
    Ca.DepthSegment = Pa;
    var Aa = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, null, [{ key: "constructor_", value: function() {
        D.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
      } }]), t;
    }(D), Si = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getY", value: function() {
        var e = this.y / this.w;
        if (j.isNaN(e) || j.isInfinite(e)) throw new Aa();
        return e;
      } }, { key: "getX", value: function() {
        var e = this.x / this.w;
        if (j.isNaN(e) || j.isInfinite(e)) throw new Aa();
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
            var f = arguments[0], g = arguments[1];
            this.x = f.y - g.y, this.y = g.x - f.x, this.w = f.x * g.y - g.x * f.y;
          }
        } else if (arguments.length === 3) {
          var y = arguments[0], d = arguments[1], N = arguments[2];
          this.x = y, this.y = d, this.w = N;
        } else if (arguments.length === 4) {
          var b = arguments[0], L = arguments[1], $ = arguments[2], F = arguments[3], V = b.y - L.y, H = L.x - b.x, K = b.x * L.y - L.x * b.y, he = $.y - F.y, de = F.x - $.x, Oe = $.x * F.y - F.x * $.y;
          this.x = H * Oe - de * K, this.y = he * K - V * Oe, this.w = V * de - he * H;
        }
      } }]), s;
    }(), pf = function() {
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
        var u = t.x, f = t.y, g = n.x - u, y = i.x - u, d = n.y - f, N = i.y - f, b = g * N - y * d, L = e.x - u, $ = e.y - f, F = (N * L - y * $) / b, V = (-d * L + g * $) / b;
        return t.getZ() + F * (n.getZ() - t.getZ()) + V * (i.getZ() - t.getZ());
      } }, { key: "longestSideLength", value: function(e, t, n) {
        var i = e.distance(t), u = t.distance(n), f = n.distance(e), g = i;
        return u > g && (g = u), f > g && (g = f), g;
      } }, { key: "circumcentreDD", value: function(e, t, n) {
        var i = J.valueOf(e.x).subtract(n.x), u = J.valueOf(e.y).subtract(n.y), f = J.valueOf(t.x).subtract(n.x), g = J.valueOf(t.y).subtract(n.y), y = J.determinant(i, u, f, g).multiply(2), d = i.sqr().add(u.sqr()), N = f.sqr().add(g.sqr()), b = J.determinant(u, d, g, N), L = J.determinant(i, d, f, N), $ = J.valueOf(n.x).subtract(b.divide(y)).doubleValue(), F = J.valueOf(n.y).add(L.divide(y)).doubleValue();
        return new O($, F);
      } }, { key: "isAcute", value: function(e, t, n) {
        return !!$e.isAcute(e, t, n) && !!$e.isAcute(t, n, e) && !!$e.isAcute(n, e, t);
      } }, { key: "circumcentre", value: function(e, t, n) {
        var i = n.x, u = n.y, f = e.x - i, g = e.y - u, y = t.x - i, d = t.y - u, N = 2 * s.det(f, g, y, d), b = s.det(g, f * f + g * g, d, y * y + d * d), L = s.det(f, f * f + g * g, y, y * y + d * d);
        return new O(i - b / N, u + L / N);
      } }, { key: "perpendicularBisector", value: function(e, t) {
        var n = t.x - e.x, i = t.y - e.y, u = new Si(e.x + n / 2, e.y + i / 2, 1), f = new Si(e.x - i + n / 2, e.y + n + i / 2, 1);
        return new Si(u, f);
      } }, { key: "angleBisector", value: function(e, t, n) {
        var i = t.distance(e), u = i / (i + t.distance(n)), f = n.x - e.x, g = n.y - e.y;
        return new O(e.x + u * f, e.y + u * g);
      } }, { key: "area3D", value: function(e, t, n) {
        var i = t.x - e.x, u = t.y - e.y, f = t.getZ() - e.getZ(), g = n.x - e.x, y = n.y - e.y, d = n.getZ() - e.getZ(), N = u * d - f * y, b = f * g - i * d, L = i * y - u * g, $ = N * N + b * b + L * L, F = Math.sqrt($) / 2;
        return F;
      } }, { key: "centroid", value: function(e, t, n) {
        var i = (e.x + t.x + n.x) / 3, u = (e.y + t.y + n.y) / 3;
        return new O(i, u);
      } }, { key: "inCentre", value: function(e, t, n) {
        var i = t.distance(n), u = e.distance(n), f = e.distance(t), g = i + u + f, y = (i * e.x + u * t.x + f * n.x) / g, d = (i * e.y + u * t.y + f * n.y) / g;
        return new O(y, d);
      } }]), s;
    }(), mf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "addRingSide", value: function(e, t, n, i, u) {
        if (t === 0 && e.length < bn.MINIMUM_VALID_SIZE) return null;
        var f = i, g = u;
        e.length >= bn.MINIMUM_VALID_SIZE && Q.isCCW(e) && (f = u, g = i, n = B.opposite(n));
        var y = this._curveBuilder.getRingCurve(e, n, t);
        this.addCurve(y, f, g);
      } }, { key: "addRingBothSides", value: function(e, t) {
        this.addRingSide(e, t, B.LEFT, S.EXTERIOR, S.INTERIOR), this.addRingSide(e, t, B.RIGHT, S.INTERIOR, S.EXTERIOR);
      } }, { key: "addPoint", value: function(e) {
        if (this._distance <= 0) return null;
        var t = e.getCoordinates(), n = this._curveBuilder.getLineCurve(t, this._distance);
        this.addCurve(n, S.EXTERIOR, S.INTERIOR);
      } }, { key: "addPolygon", value: function(e) {
        var t = this._distance, n = B.LEFT;
        this._distance < 0 && (t = -this._distance, n = B.RIGHT);
        var i = e.getExteriorRing(), u = Ee.removeRepeatedPoints(i.getCoordinates());
        if (this._distance < 0 && this.isErodedCompletely(i, this._distance) || this._distance <= 0 && u.length < 3) return null;
        this.addRingSide(u, t, n, S.EXTERIOR, S.INTERIOR);
        for (var f = 0; f < e.getNumInteriorRing(); f++) {
          var g = e.getInteriorRingN(f), y = Ee.removeRepeatedPoints(g.getCoordinates());
          this._distance > 0 && this.isErodedCompletely(g, -this._distance) || this.addRingSide(y, t, B.opposite(n), S.INTERIOR, S.EXTERIOR);
        }
      } }, { key: "isTriangleErodedCompletely", value: function(e, t) {
        var n = new pf(e[0], e[1], e[2]), i = n.inCentre();
        return rt.pointToSegment(i, n.p0, n.p1) < Math.abs(t);
      } }, { key: "addLineString", value: function(e) {
        if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
        var t = Ee.removeRepeatedPoints(e.getCoordinates());
        if (Ee.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
        else {
          var n = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(n, S.EXTERIOR, S.INTERIOR);
        }
      } }, { key: "addCurve", value: function(e, t, n) {
        if (e === null || e.length < 2) return null;
        var i = new Gt(e, new ze(0, S.BOUNDARY, t, n));
        this._curveList.add(i);
      } }, { key: "getCurves", value: function() {
        return this.add(this._inputGeom), this._curveList;
      } }, { key: "add", value: function(e) {
        if (e.isEmpty()) return null;
        if (e instanceof sr) this.addPolygon(e);
        else if (e instanceof wn) this.addLineString(e);
        else if (e instanceof fi) this.addPoint(e);
        else if (e instanceof hi) this.addCollection(e);
        else if (e instanceof pi) this.addCollection(e);
        else if (e instanceof vi) this.addCollection(e);
        else {
          if (!(e instanceof De)) throw new Et(e.getGeometryType());
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
    }(), df = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "locate", value: function(e) {
      } }]), s;
    }(), _f = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "next", value: function() {
        if (this._atStart) return this._atStart = !1, s.isAtomic(this._parent) && this._index++, this._parent;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
          this._subcollectionIterator = null;
        }
        if (this._index >= this._max) throw new er();
        var e = this._parent.getGeometryN(this._index++);
        return e instanceof De ? (this._subcollectionIterator = new s(e), this._subcollectionIterator.next()) : e;
      } }, { key: "remove", value: function() {
        throw new Et(this.getClass().getName());
      } }, { key: "hasNext", value: function() {
        if (this._atStart) return !0;
        if (this._subcollectionIterator !== null) {
          if (this._subcollectionIterator.hasNext()) return !0;
          this._subcollectionIterator = null;
        }
        return !(this._index >= this._max);
      } }, { key: "interfaces_", get: function() {
        return [uf];
      } }], [{ key: "constructor_", value: function() {
        this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
        var e = arguments[0];
        this._parent = e, this._atStart = !0, this._index = 0, this._max = e.getNumGeometries();
      } }, { key: "isAtomic", value: function(e) {
        return !(e instanceof De);
      } }]), s;
    }(), xf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "locate", value: function(e) {
        return s.locate(e, this._geom);
      } }, { key: "interfaces_", get: function() {
        return [df];
      } }], [{ key: "constructor_", value: function() {
        this._geom = null;
        var e = arguments[0];
        this._geom = e;
      } }, { key: "locatePointInPolygon", value: function(e, t) {
        if (t.isEmpty()) return S.EXTERIOR;
        var n = t.getExteriorRing(), i = s.locatePointInRing(e, n);
        if (i !== S.INTERIOR) return i;
        for (var u = 0; u < t.getNumInteriorRing(); u++) {
          var f = t.getInteriorRingN(u), g = s.locatePointInRing(e, f);
          if (g === S.BOUNDARY) return S.BOUNDARY;
          if (g === S.INTERIOR) return S.EXTERIOR;
        }
        return S.INTERIOR;
      } }, { key: "locatePointInRing", value: function(e, t) {
        return t.getEnvelopeInternal().intersects(e) ? _i.locateInRing(e, t.getCoordinates()) : S.EXTERIOR;
      } }, { key: "containsPointInPolygon", value: function(e, t) {
        return S.EXTERIOR !== s.locatePointInPolygon(e, t);
      } }, { key: "locateInGeometry", value: function(e, t) {
        if (t instanceof sr) return s.locatePointInPolygon(e, t);
        if (t instanceof De) for (var n = new _f(t); n.hasNext(); ) {
          var i = n.next();
          if (i !== t) {
            var u = s.locateInGeometry(e, i);
            if (u !== S.EXTERIOR) return u;
          }
        }
        return S.EXTERIOR;
      } }, { key: "isContained", value: function(e, t) {
        return S.EXTERIOR !== s.locate(e, t);
      } }, { key: "locate", value: function(e, t) {
        return t.isEmpty() ? S.EXTERIOR : t.getEnvelopeInternal().intersects(e) ? s.locateInGeometry(e, t) : S.EXTERIOR;
      } }]), s;
    }(), Ef = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "getNextCW", value: function(e) {
        this.getEdges();
        var t = this._edgeList.indexOf(e), n = t - 1;
        return t === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
      } }, { key: "propagateSideLabels", value: function(e) {
        for (var t = S.NONE, n = this.iterator(); n.hasNext(); ) {
          var i = n.next().getLabel();
          i.isArea(e) && i.getLocation(e, B.LEFT) !== S.NONE && (t = i.getLocation(e, B.LEFT));
        }
        if (t === S.NONE) return null;
        for (var u = t, f = this.iterator(); f.hasNext(); ) {
          var g = f.next(), y = g.getLabel();
          if (y.getLocation(e, B.ON) === S.NONE && y.setLocation(e, B.ON, u), y.isArea(e)) {
            var d = y.getLocation(e, B.LEFT), N = y.getLocation(e, B.RIGHT);
            if (N !== S.NONE) {
              if (N !== u) throw new yt("side location conflict", g.getCoordinate());
              d === S.NONE && se.shouldNeverReachHere("found single null side (at " + g.getCoordinate() + ")"), u = d;
            } else se.isTrue(y.getLocation(e, B.LEFT) === S.NONE, "found single null side"), y.setLocation(e, B.RIGHT, u), y.setLocation(e, B.LEFT, u);
          }
        }
      } }, { key: "getCoordinate", value: function() {
        var e = this.iterator();
        return e.hasNext() ? e.next().getCoordinate() : null;
      } }, { key: "print", value: function(e) {
        Ge.out.println("EdgeEndStar:   " + this.getCoordinate());
        for (var t = this.iterator(); t.hasNext(); )
          t.next().print(e);
      } }, { key: "isAreaLabelsConsistent", value: function(e) {
        return this.computeEdgeEndLabels(e.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
      } }, { key: "checkAreaLabelsConsistent", value: function(e) {
        var t = this.getEdges();
        if (t.size() <= 0) return !0;
        var n = t.size() - 1, i = t.get(n).getLabel().getLocation(e, B.LEFT);
        se.isTrue(i !== S.NONE, "Found unlabelled area edge");
        for (var u = i, f = this.iterator(); f.hasNext(); ) {
          var g = f.next().getLabel();
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
        return this._ptInAreaLocation[e] === S.NONE && (this._ptInAreaLocation[e] = xf.locate(t, n[e].getGeometry())), this._ptInAreaLocation[e];
      } }, { key: "toString", value: function() {
        var e = new Sn();
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
        for (var t = [!1, !1], n = this.iterator(); n.hasNext(); ) for (var i = n.next().getLabel(), u = 0; u < 2; u++) i.isLine(u) && i.getLocation(u) === S.BOUNDARY && (t[u] = !0);
        for (var f = this.iterator(); f.hasNext(); ) for (var g = f.next(), y = g.getLabel(), d = 0; d < 2; d++) if (y.isAnyNull(d)) {
          var N = S.NONE;
          if (t[d]) N = S.EXTERIOR;
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
        this._edgeMap = new Rn(), this._edgeList = null, this._ptInAreaLocation = [S.NONE, S.NONE];
      } }]), s;
    }(), kf = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "linkResultDirectedEdges", value: function() {
        this.getResultAreaEdges();
        for (var n = null, i = null, u = this._SCANNING_FOR_INCOMING, f = 0; f < this._resultAreaEdgeList.size(); f++) {
          var g = this._resultAreaEdgeList.get(f), y = g.getSym();
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
          if (n === null) throw new yt("no outgoing dirEdge found", this.getCoordinate());
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
        var f = n.get(i - 1), g = u.getQuadrant(), y = f.getQuadrant();
        return Ce.isNorthern(g) && Ce.isNorthern(y) ? u : Ce.isNorthern(g) || Ce.isNorthern(y) ? u.getDy() !== 0 ? u : f.getDy() !== 0 ? f : (se.shouldNeverReachHere("found two horizontal edges incident on node"), null) : f;
      } }, { key: "print", value: function(n) {
        Ge.out.println("DirectedEdgeStar: " + this.getCoordinate());
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
          var f = this._edgeList.get(u), g = f.getSym();
          i === null && (i = g), n !== null && g.setNext(n), n = f;
        }
        i.setNext(n);
      } }, { key: "computeDepths", value: function() {
        if (arguments.length === 1) {
          var n = arguments[0], i = this.findIndex(n), u = n.getDepth(B.LEFT), f = n.getDepth(B.RIGHT), g = this.computeDepths(i + 1, this._edgeList.size(), u), y = this.computeDepths(0, i, g);
          if (y !== f) throw new yt("depth mismatch at " + n.getCoordinate());
        } else if (arguments.length === 3) {
          for (var d = arguments[0], N = arguments[1], b = arguments[2], L = b, $ = d; $ < N; $++) {
            var F = this._edgeList.get($);
            F.setEdgeDepths(B.RIGHT, L), L = F.getDepth(B.LEFT);
          }
          return L;
        }
      } }, { key: "mergeSymLabels", value: function() {
        for (var n = this.iterator(); n.hasNext(); ) {
          var i = n.next();
          i.getLabel().merge(i.getSym().getLabel());
        }
      } }, { key: "linkMinimalDirectedEdges", value: function(n) {
        for (var i = null, u = null, f = this._SCANNING_FOR_INCOMING, g = this._resultAreaEdgeList.size() - 1; g >= 0; g--) {
          var y = this._resultAreaEdgeList.get(g), d = y.getSym();
          switch (i === null && y.getEdgeRing() === n && (i = y), f) {
            case this._SCANNING_FOR_INCOMING:
              if (d.getEdgeRing() !== n) continue;
              u = d, f = this._LINKING_TO_OUTGOING;
              break;
            case this._LINKING_TO_OUTGOING:
              if (y.getEdgeRing() !== n) continue;
              u.setNextMin(y), f = this._SCANNING_FOR_INCOMING;
          }
        }
        f === this._LINKING_TO_OUTGOING && (se.isTrue(i !== null, "found null for first outgoing dirEdge"), se.isTrue(i.getEdgeRing() === n, "unable to link last incoming dirEdge"), u.setNextMin(i));
      } }, { key: "getOutgoingDegree", value: function() {
        if (arguments.length === 0) {
          for (var n = 0, i = this.iterator(); i.hasNext(); ) {
            var u = i.next();
            u.isInResult() && n++;
          }
          return n;
        }
        if (arguments.length === 1) {
          for (var f = arguments[0], g = 0, y = this.iterator(); y.hasNext(); ) {
            var d = y.next();
            d.getEdgeRing() === f && g++;
          }
          return g;
        }
      } }, { key: "getLabel", value: function() {
        return this._label;
      } }, { key: "findCoveredLineEdges", value: function() {
        for (var n = S.NONE, i = this.iterator(); i.hasNext(); ) {
          var u = i.next(), f = u.getSym();
          if (!u.isLineEdge()) {
            if (u.isInResult()) {
              n = S.INTERIOR;
              break;
            }
            if (f.isInResult()) {
              n = S.EXTERIOR;
              break;
            }
          }
        }
        if (n === S.NONE) return null;
        for (var g = n, y = this.iterator(); y.hasNext(); ) {
          var d = y.next(), N = d.getSym();
          d.isLineEdge() ? d.getEdge().setCovered(g === S.INTERIOR) : (d.isInResult() && (g = S.EXTERIOR), N.isInResult() && (g = S.INTERIOR));
        }
      } }, { key: "computeLabelling", value: function(n) {
        w(v(t.prototype), "computeLabelling", this).call(this, n), this._label = new ze(S.NONE);
        for (var i = this.iterator(); i.hasNext(); ) for (var u = i.next().getEdge().getLabel(), f = 0; f < 2; f++) {
          var g = u.getLocation(f);
          g !== S.INTERIOR && g !== S.BOUNDARY || this._label.setLocation(f, S.INTERIOR);
        }
      } }], [{ key: "constructor_", value: function() {
        this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
      } }]), t;
    }(Ef), If = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        return a(this, t), e.call(this);
      }
      return c(t, [{ key: "createNode", value: function(n) {
        return new cr(n, new kf());
      } }]), t;
    }(Ia), Ma = function() {
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
        for (var u = t ? 1 : -1, f = i ? 1 : -1, g = t ? e.length : -1, y = i ? n.length : -1, d = t ? 0 : e.length - 1, N = i ? 0 : n.length - 1; ; ) {
          var b = e[d].compareTo(n[N]);
          if (b !== 0) return b;
          var L = (d += u) === g, $ = (N += f) === y;
          if (L && !$) return -1;
          if (!L && $) return 1;
          if (L && $) return 0;
        }
      } }]), s;
    }(), Sf = function() {
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
        var t = new Ma(e.getCoordinates());
        return this._ocaMap.get(t);
      } }, { key: "add", value: function(e) {
        this._edges.add(e);
        var t = new Ma(e.getCoordinates());
        this._ocaMap.put(t, e);
      } }], [{ key: "constructor_", value: function() {
        this._edges = new Z(), this._ocaMap = new Rn();
      } }]), s;
    }(), Da = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "processIntersections", value: function(e, t, n, i) {
      } }, { key: "isDone", value: function() {
      } }]), s;
    }(), Nf = function() {
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
        var u = e.getCoordinates()[t], f = e.getCoordinates()[t + 1], g = n.getCoordinates()[i], y = n.getCoordinates()[i + 1];
        this._li.computeIntersection(u, f, g, y), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(e, t, n, i) || (this._hasIntersection = !0, e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
      } }, { key: "hasIntersection", value: function() {
        return this._hasIntersection;
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "hasInteriorIntersection", value: function() {
        return this._hasInterior;
      } }, { key: "interfaces_", get: function() {
        return [Da];
      } }], [{ key: "constructor_", value: function() {
        this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
        var e = arguments[0];
        this._li = e;
      } }, { key: "isAdjacentSegments", value: function(e, t) {
        return Math.abs(e - t) === 1;
      } }]), s;
    }(), wf = function() {
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
    }(), bf = function() {
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
        var f = new Array(n).fill(null), g = 0;
        f[g++] = new O(e.coord);
        for (var y = e.segmentIndex + 1; y <= t.segmentIndex; y++) f[g++] = this.edge.pts[y];
        return u && (f[g] = t.coord), new $a(f, new ze(this.edge._label));
      } }, { key: "add", value: function(e, t, n) {
        var i = new wf(e, t, n), u = this._nodeMap.get(i);
        return u !== null ? u : (this._nodeMap.put(i, i), i);
      } }, { key: "isIntersection", value: function(e) {
        for (var t = this.iterator(); t.hasNext(); )
          if (t.next().coord.equals(e)) return !0;
        return !1;
      } }], [{ key: "constructor_", value: function() {
        this._nodeMap = new Rn(), this.edge = null;
        var e = arguments[0];
        this.edge = e;
      } }]), s;
    }(), Of = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "isIntersects", value: function() {
        return !this.isDisjoint();
      } }, { key: "isCovers", value: function() {
        return (s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) || s.isTrue(this._matrix[S.INTERIOR][S.BOUNDARY]) || s.isTrue(this._matrix[S.BOUNDARY][S.INTERIOR]) || s.isTrue(this._matrix[S.BOUNDARY][S.BOUNDARY])) && this._matrix[S.EXTERIOR][S.INTERIOR] === z.FALSE && this._matrix[S.EXTERIOR][S.BOUNDARY] === z.FALSE;
      } }, { key: "isCoveredBy", value: function() {
        return (s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) || s.isTrue(this._matrix[S.INTERIOR][S.BOUNDARY]) || s.isTrue(this._matrix[S.BOUNDARY][S.INTERIOR]) || s.isTrue(this._matrix[S.BOUNDARY][S.BOUNDARY])) && this._matrix[S.INTERIOR][S.EXTERIOR] === z.FALSE && this._matrix[S.BOUNDARY][S.EXTERIOR] === z.FALSE;
      } }, { key: "set", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this._matrix[n][i] = z.toDimensionValue(e.charAt(t));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2];
          this._matrix[u][f] = g;
        }
      } }, { key: "isContains", value: function() {
        return s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && this._matrix[S.EXTERIOR][S.INTERIOR] === z.FALSE && this._matrix[S.EXTERIOR][S.BOUNDARY] === z.FALSE;
      } }, { key: "setAtLeast", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < e.length; t++) {
          var n = Math.trunc(t / 3), i = t % 3;
          this.setAtLeast(n, i, z.toDimensionValue(e.charAt(t)));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2];
          this._matrix[u][f] < g && (this._matrix[u][f] = g);
        }
      } }, { key: "setAtLeastIfValid", value: function(e, t, n) {
        e >= 0 && t >= 0 && this.setAtLeast(e, t, n);
      } }, { key: "isWithin", value: function() {
        return s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && this._matrix[S.INTERIOR][S.EXTERIOR] === z.FALSE && this._matrix[S.BOUNDARY][S.EXTERIOR] === z.FALSE;
      } }, { key: "isTouches", value: function(e, t) {
        return e > t ? this.isTouches(t, e) : (e === z.A && t === z.A || e === z.L && t === z.L || e === z.L && t === z.A || e === z.P && t === z.A || e === z.P && t === z.L) && this._matrix[S.INTERIOR][S.INTERIOR] === z.FALSE && (s.isTrue(this._matrix[S.INTERIOR][S.BOUNDARY]) || s.isTrue(this._matrix[S.BOUNDARY][S.INTERIOR]) || s.isTrue(this._matrix[S.BOUNDARY][S.BOUNDARY]));
      } }, { key: "isOverlaps", value: function(e, t) {
        return e === z.P && t === z.P || e === z.A && t === z.A ? s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && s.isTrue(this._matrix[S.INTERIOR][S.EXTERIOR]) && s.isTrue(this._matrix[S.EXTERIOR][S.INTERIOR]) : e === z.L && t === z.L && this._matrix[S.INTERIOR][S.INTERIOR] === 1 && s.isTrue(this._matrix[S.INTERIOR][S.EXTERIOR]) && s.isTrue(this._matrix[S.EXTERIOR][S.INTERIOR]);
      } }, { key: "isEquals", value: function(e, t) {
        return e === t && s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && this._matrix[S.INTERIOR][S.EXTERIOR] === z.FALSE && this._matrix[S.BOUNDARY][S.EXTERIOR] === z.FALSE && this._matrix[S.EXTERIOR][S.INTERIOR] === z.FALSE && this._matrix[S.EXTERIOR][S.BOUNDARY] === z.FALSE;
      } }, { key: "toString", value: function() {
        for (var e = new or("123456789"), t = 0; t < 3; t++) for (var n = 0; n < 3; n++) e.setCharAt(3 * t + n, z.toDimensionSymbol(this._matrix[t][n]));
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
        return this._matrix[S.INTERIOR][S.INTERIOR] === z.FALSE && this._matrix[S.INTERIOR][S.BOUNDARY] === z.FALSE && this._matrix[S.BOUNDARY][S.INTERIOR] === z.FALSE && this._matrix[S.BOUNDARY][S.BOUNDARY] === z.FALSE;
      } }, { key: "isCrosses", value: function(e, t) {
        return e === z.P && t === z.L || e === z.P && t === z.A || e === z.L && t === z.A ? s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && s.isTrue(this._matrix[S.INTERIOR][S.EXTERIOR]) : e === z.L && t === z.P || e === z.A && t === z.P || e === z.A && t === z.L ? s.isTrue(this._matrix[S.INTERIOR][S.INTERIOR]) && s.isTrue(this._matrix[S.EXTERIOR][S.INTERIOR]) : e === z.L && t === z.L && this._matrix[S.INTERIOR][S.INTERIOR] === 0;
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
            s.constructor_.call(this), this._matrix[S.INTERIOR][S.INTERIOR] = t._matrix[S.INTERIOR][S.INTERIOR], this._matrix[S.INTERIOR][S.BOUNDARY] = t._matrix[S.INTERIOR][S.BOUNDARY], this._matrix[S.INTERIOR][S.EXTERIOR] = t._matrix[S.INTERIOR][S.EXTERIOR], this._matrix[S.BOUNDARY][S.INTERIOR] = t._matrix[S.BOUNDARY][S.INTERIOR], this._matrix[S.BOUNDARY][S.BOUNDARY] = t._matrix[S.BOUNDARY][S.BOUNDARY], this._matrix[S.BOUNDARY][S.EXTERIOR] = t._matrix[S.BOUNDARY][S.EXTERIOR], this._matrix[S.EXTERIOR][S.INTERIOR] = t._matrix[S.EXTERIOR][S.INTERIOR], this._matrix[S.EXTERIOR][S.BOUNDARY] = t._matrix[S.EXTERIOR][S.BOUNDARY], this._matrix[S.EXTERIOR][S.EXTERIOR] = t._matrix[S.EXTERIOR][S.EXTERIOR];
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
    }(), Tf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "size", value: function() {
        return this._size;
      } }, { key: "addAll", value: function(e) {
        return e === null || e.length === 0 ? null : (this.ensureCapacity(this._size + e.length), Ge.arraycopy(e, 0, this._data, this._size, e.length), void (this._size += e.length));
      } }, { key: "ensureCapacity", value: function(e) {
        if (e <= this._data.length) return null;
        var t = Math.max(e, 2 * this._data.length);
        this._data = Dt.copyOf(this._data, t);
      } }, { key: "toArray", value: function() {
        var e = new Array(this._size).fill(null);
        return Ge.arraycopy(this._data, 0, e, 0, this._size), e;
      } }, { key: "add", value: function(e) {
        this.ensureCapacity(this._size + 1), this._data[this._size] = e, ++this._size;
      } }], [{ key: "constructor_", value: function() {
        if (this._data = null, this._size = 0, arguments.length === 0) s.constructor_.call(this, 10);
        else if (arguments.length === 1) {
          var e = arguments[0];
          this._data = new Array(e).fill(null);
        }
      } }]), s;
    }(), Lf = function() {
      function s() {
        a(this, s);
      }
      return c(s, [{ key: "getChainStartIndices", value: function(e) {
        var t = 0, n = new Tf(Math.trunc(e.length / 2));
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
    }(), Rf = function() {
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
          var u = arguments[0], f = arguments[1], g = arguments[2], y = arguments[3], d = arguments[4], N = arguments[5];
          if (f - u == 1 && d - y == 1) return N.addIntersections(this.e, u, g.e, y), null;
          if (!this.overlaps(u, f, g, y, d)) return null;
          var b = Math.trunc((u + f) / 2), L = Math.trunc((y + d) / 2);
          u < b && (y < L && this.computeIntersectsForChain(u, b, g, y, L, N), L < d && this.computeIntersectsForChain(u, b, g, L, d, N)), b < f && (y < L && this.computeIntersectsForChain(b, f, g, y, L, N), L < d && this.computeIntersectsForChain(b, f, g, L, d, N));
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
        var t = new Lf();
        this.startIndex = t.getChainStartIndices(this.pts);
      } }]), s;
    }(), Fa = function() {
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
        return this._depth[e][t] <= 0 ? S.EXTERIOR : S.INTERIOR;
      } }, { key: "toString", value: function() {
        return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
      } }, { key: "add", value: function() {
        if (arguments.length === 1) for (var e = arguments[0], t = 0; t < 2; t++) for (var n = 1; n < 3; n++) {
          var i = e.getLocation(t, n);
          i !== S.EXTERIOR && i !== S.INTERIOR || (this.isNull(t, n) ? this._depth[t][n] = s.depthAtLocation(i) : this._depth[t][n] += s.depthAtLocation(i));
        }
        else if (arguments.length === 3) {
          var u = arguments[0], f = arguments[1], g = arguments[2];
          g === S.INTERIOR && this._depth[u][f]++;
        }
      } }], [{ key: "constructor_", value: function() {
        this._depth = Array(2).fill().map(function() {
          return Array(3);
        });
        for (var e = 0; e < 2; e++) for (var t = 0; t < 3; t++) this._depth[e][t] = s.NULL_VALUE;
      } }, { key: "depthAtLocation", value: function(e) {
        return e === S.EXTERIOR ? 0 : e === S.INTERIOR ? 1 : s.NULL_VALUE;
      } }]), s;
    }();
    Fa.NULL_VALUE = -1;
    var $a = function(s) {
      h(t, s);
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
        for (var u = !0, f = !0, g = this.pts.length, y = 0; y < this.pts.length; y++) if (this.pts[y].equals2D(i.pts[y]) || (u = !1), this.pts[y].equals2D(i.pts[--g]) || (f = !1), !u && !f) return !1;
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
        return this._mce === null && (this._mce = new Rf(this)), this._mce;
      } }, { key: "getEnvelope", value: function() {
        if (this._env === null) {
          this._env = new pe();
          for (var n = 0; n < this.pts.length; n++) this._env.expandToInclude(this.pts[n]);
        }
        return this._env;
      } }, { key: "addIntersection", value: function(n, i, u, f) {
        var g = new O(n.getIntersection(f)), y = i, d = n.getEdgeDistance(u, f), N = y + 1;
        if (N < this.pts.length) {
          var b = this.pts[N];
          g.equals2D(b) && (y = N, d = 0);
        }
        this.eiList.add(g, y, d);
      } }, { key: "toString", value: function() {
        var n = new or();
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
        for (var f = 0; f < n.getIntersectionNum(); f++) this.addIntersection(n, i, u, f);
      } }], [{ key: "constructor_", value: function() {
        if (this.pts = null, this._env = null, this.eiList = new bf(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Fa(), this._depthDelta = 0, arguments.length === 1) {
          var n = arguments[0];
          t.constructor_.call(this, n, null);
        } else if (arguments.length === 2) {
          var i = arguments[0], u = arguments[1];
          this.pts = i, this._label = u;
        }
      } }, { key: "updateIM", value: function() {
        if (!(arguments.length === 2 && arguments[1] instanceof Of && arguments[0] instanceof ze)) return w(v(t), "updateIM", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1];
        i.setAtLeastIfValid(n.getLocation(0, B.ON), n.getLocation(1, B.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, B.LEFT), n.getLocation(1, B.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, B.RIGHT), n.getLocation(1, B.RIGHT), 2));
      } }]), t;
    }(da), Ba = function() {
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
          var u = s.depthDelta(i), f = t.getDepthDelta() + u;
          t.setDepthDelta(f);
        } else this._edgeList.add(e), e.setDepthDelta(s.depthDelta(e.getLabel()));
      } }, { key: "buildSubgraphs", value: function(e, t) {
        for (var n = new Z(), i = e.iterator(); i.hasNext(); ) {
          var u = i.next(), f = u.getRightmostCoordinate(), g = new Ca(n).getDepth(f);
          u.computeDepth(g), u.findResultEdges(), n.add(u), t.add(u.getDirectedEdges(), u.getNodes());
        }
      } }, { key: "createSubgraphs", value: function(e) {
        for (var t = new Z(), n = e.getNodes().iterator(); n.hasNext(); ) {
          var i = n.next();
          if (!i.isVisited()) {
            var u = new Mc();
            u.create(i), t.add(u);
          }
        }
        return Jt.sort(t, Jt.reverseOrder()), t;
      } }, { key: "createEmptyResultGeometry", value: function() {
        return this._geomFact.createPolygon();
      } }, { key: "getNoder", value: function(e) {
        if (this._workingNoder !== null) return this._workingNoder;
        var t = new Ii(), n = new Bt();
        return n.setPrecisionModel(e), t.setSegmentIntersector(new Nf(n)), t;
      } }, { key: "buffer", value: function(e, t) {
        var n = this._workingPrecisionModel;
        n === null && (n = e.getPrecisionModel()), this._geomFact = e.getFactory();
        var i = new vf(n, this._bufParams), u = new mf(e, t, i).getCurves();
        if (u.size() <= 0) return this.createEmptyResultGeometry();
        this.computeNodedEdges(u, n), this._graph = new Sa(new If()), this._graph.addEdges(this._edgeList.getEdges());
        var f = this.createSubgraphs(this._graph), g = new tf(this._geomFact);
        this.buildSubgraphs(f, g);
        var y = g.getPolygons();
        return y.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(y);
      } }, { key: "computeNodedEdges", value: function(e, t) {
        var n = this.getNoder(t);
        n.computeNodes(e);
        for (var i = n.getNodedSubstrings().iterator(); i.hasNext(); ) {
          var u = i.next(), f = u.getCoordinates();
          if (f.length !== 2 || !f[0].equals2D(f[1])) {
            var g = u.getData(), y = new $a(u.getCoordinates(), new ze(g));
            this.insertUniqueEdge(y);
          }
        }
      } }, { key: "setNoder", value: function(e) {
        this._workingNoder = e;
      } }], [{ key: "constructor_", value: function() {
        this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new Sf();
        var e = arguments[0];
        this._bufParams = e;
      } }, { key: "depthDelta", value: function(e) {
        var t = e.getLocation(0, B.LEFT), n = e.getLocation(0, B.RIGHT);
        return t === S.INTERIOR && n === S.EXTERIOR ? 1 : t === S.EXTERIOR && n === S.INTERIOR ? -1 : 0;
      } }, { key: "convertSegStrings", value: function(e) {
        for (var t = new Ht(), n = new Z(); e.hasNext(); ) {
          var i = e.next(), u = t.createLineString(i.getCoordinates());
          n.add(u);
        }
        return t.buildGeometry(n);
      } }]), s;
    }(), Cf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "rescale", value: function() {
        if (re(arguments[0], nt)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.rescale(n.getCoordinates());
        }
        else if (arguments[0] instanceof Array) {
          for (var i = arguments[0], u = 0; u < i.length; u++) i[u].x = i[u].x / this._scaleFactor + this._offsetX, i[u].y = i[u].y / this._scaleFactor + this._offsetY;
          i.length === 2 && i[0].equals2D(i[1]) && Ge.out.println(i);
        }
      } }, { key: "scale", value: function() {
        if (re(arguments[0], nt)) {
          for (var e = arguments[0], t = new Z(e.size()), n = e.iterator(); n.hasNext(); ) {
            var i = n.next();
            t.add(new Gt(this.scale(i.getCoordinates()), i.getData()));
          }
          return t;
        }
        if (arguments[0] instanceof Array) {
          for (var u = arguments[0], f = new Array(u.length).fill(null), g = 0; g < u.length; g++) f[g] = new O(Math.round((u[g].x - this._offsetX) * this._scaleFactor), Math.round((u[g].y - this._offsetY) * this._scaleFactor), u[g].getZ());
          var y = Ee.removeRepeatedPoints(f);
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
        return [ki];
      } }], [{ key: "constructor_", value: function() {
        if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
          var e = arguments[0], t = arguments[1];
          s.constructor_.call(this, e, t, 0, 0);
        } else if (arguments.length === 4) {
          var n = arguments[0], i = arguments[1];
          this._noder = n, this._scaleFactor = i, this._isScaled = !this.isIntegerPrecision();
        }
      } }]), s;
    }(), Ga = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "checkEndPtVertexIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) {
          var t = e.next(), n = t.getCoordinates();
          this.checkEndPtVertexIntersections(n[0], this._segStrings), this.checkEndPtVertexIntersections(n[n.length - 1], this._segStrings);
        }
        else if (arguments.length === 2) {
          for (var i = arguments[0], u = arguments[1], f = u.iterator(); f.hasNext(); ) for (var g = f.next(), y = g.getCoordinates(), d = 1; d < y.length - 1; d++) if (y[d].equals(i)) throw new Se("found endpt/interior pt intersection at index " + d + " :pt " + i);
        }
      } }, { key: "checkInteriorIntersections", value: function() {
        if (arguments.length === 0) for (var e = this._segStrings.iterator(); e.hasNext(); ) for (var t = e.next(), n = this._segStrings.iterator(); n.hasNext(); ) {
          var i = n.next();
          this.checkInteriorIntersections(t, i);
        }
        else if (arguments.length === 2) for (var u = arguments[0], f = arguments[1], g = u.getCoordinates(), y = f.getCoordinates(), d = 0; d < g.length - 1; d++) for (var N = 0; N < y.length - 1; N++) this.checkInteriorIntersections(u, d, f, N);
        else if (arguments.length === 4) {
          var b = arguments[0], L = arguments[1], $ = arguments[2], F = arguments[3];
          if (b === $ && L === F) return null;
          var V = b.getCoordinates()[L], H = b.getCoordinates()[L + 1], K = $.getCoordinates()[F], he = $.getCoordinates()[F + 1];
          if (this._li.computeIntersection(V, H, K, he), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, V, H) || this.hasInteriorIntersection(this._li, K, he))) throw new Se("found non-noded intersection at " + V + "-" + H + " and " + K + "-" + he);
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
        if (e.equals(n)) throw new Se("found non-noded collapse at " + s.fact.createLineString([e, t, n]));
      } }], [{ key: "constructor_", value: function() {
        this._li = new Bt(), this._segStrings = null;
        var e = arguments[0];
        this._segStrings = e;
      } }]), s;
    }();
    Ga.fact = new Ht();
    var Ni = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "intersectsScaled", value: function(e, t) {
        var n = Math.min(e.x, t.x), i = Math.max(e.x, t.x), u = Math.min(e.y, t.y), f = Math.max(e.y, t.y), g = this._maxx < n || this._minx > i || this._maxy < u || this._miny > f;
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
    Ni.SAFE_ENV_EXPANSION_FACTOR = 0.75;
    var Pf = function() {
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
    }(), qa = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "snap", value: function() {
        if (arguments.length === 1) {
          var e = arguments[0];
          return this.snap(e, null, -1);
        }
        if (arguments.length === 3) {
          var t = arguments[0], n = arguments[1], i = arguments[2], u = t.getSafeEnvelope(), f = new za(t, n, i);
          return this._index.query(u, new (function() {
            function g() {
              a(this, g);
            }
            return c(g, [{ key: "interfaces_", get: function() {
              return [wa];
            } }, { key: "visitItem", value: function(y) {
              y.select(u, f);
            } }]), g;
          }())()), f.isNodeAdded();
        }
      } }], [{ key: "constructor_", value: function() {
        this._index = null;
        var e = arguments[0];
        this._index = e;
      } }]), s;
    }(), za = function(s) {
      h(t, s);
      var e = k(t);
      function t() {
        var n;
        return a(this, t), n = e.call(this), t.constructor_.apply(m(n), arguments), n;
      }
      return c(t, [{ key: "isNodeAdded", value: function() {
        return this._isNodeAdded;
      } }, { key: "select", value: function() {
        if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof Oa)) return w(v(t.prototype), "select", this).apply(this, arguments);
        var n = arguments[0], i = arguments[1], u = n.getContext();
        if (this._parentEdge === u && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
        this._isNodeAdded |= this._hotPixel.addSnappedNode(u, i);
      } }], [{ key: "constructor_", value: function() {
        this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
        var n = arguments[0], i = arguments[1], u = arguments[2];
        this._hotPixel = n, this._parentEdge = i, this._hotPixelVertexIndex = u;
      } }]), t;
    }(Pf);
    qa.HotPixelSnapAction = za;
    var Af = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "processIntersections", value: function(e, t, n, i) {
        if (e === n && t === i) return null;
        var u = e.getCoordinates()[t], f = e.getCoordinates()[t + 1], g = n.getCoordinates()[i], y = n.getCoordinates()[i + 1];
        if (this._li.computeIntersection(u, f, g, y), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
          for (var d = 0; d < this._li.getIntersectionNum(); d++) this._interiorIntersections.add(this._li.getIntersection(d));
          e.addIntersections(this._li, t, 0), n.addIntersections(this._li, i, 1);
        }
      } }, { key: "isDone", value: function() {
        return !1;
      } }, { key: "getInteriorIntersections", value: function() {
        return this._interiorIntersections;
      } }, { key: "interfaces_", get: function() {
        return [Da];
      } }], [{ key: "constructor_", value: function() {
        this._li = null, this._interiorIntersections = null;
        var e = arguments[0];
        this._li = e, this._interiorIntersections = new Z();
      } }]), s;
    }(), Mf = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "checkCorrectness", value: function(e) {
        var t = Gt.getNodedSubstrings(e), n = new Ga(t);
        try {
          n.checkValid();
        } catch (i) {
          if (!(i instanceof D)) throw i;
          i.printStackTrace();
        }
      } }, { key: "getNodedSubstrings", value: function() {
        return Gt.getNodedSubstrings(this._nodedSegStrings);
      } }, { key: "snapRound", value: function(e, t) {
        var n = this.findInteriorIntersections(e, t);
        this.computeIntersectionSnaps(n), this.computeVertexSnaps(e);
      } }, { key: "findInteriorIntersections", value: function(e, t) {
        var n = new Af(t);
        return this._noder.setSegmentIntersector(n), this._noder.computeNodes(e), n.getInteriorIntersections();
      } }, { key: "computeVertexSnaps", value: function() {
        if (re(arguments[0], nt)) for (var e = arguments[0], t = e.iterator(); t.hasNext(); ) {
          var n = t.next();
          this.computeVertexSnaps(n);
        }
        else if (arguments[0] instanceof Gt) for (var i = arguments[0], u = i.getCoordinates(), f = 0; f < u.length; f++) {
          var g = new Ni(u[f], this._scaleFactor, this._li), y = this._pointSnapper.snap(g, i, f);
          y && i.addIntersection(u[f], f);
        }
      } }, { key: "computeNodes", value: function(e) {
        this._nodedSegStrings = e, this._noder = new Ii(), this._pointSnapper = new qa(this._noder.getIndex()), this.snapRound(e, this._li);
      } }, { key: "computeIntersectionSnaps", value: function(e) {
        for (var t = e.iterator(); t.hasNext(); ) {
          var n = t.next(), i = new Ni(n, this._scaleFactor, this._li);
          this._pointSnapper.snap(i);
        }
      } }, { key: "interfaces_", get: function() {
        return [ki];
      } }], [{ key: "constructor_", value: function() {
        this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
        var e = arguments[0];
        this._pm = e, this._li = new Bt(), this._li.setPrecisionModel(e), this._scaleFactor = e.getScale();
      } }]), s;
    }(), en = function() {
      function s() {
        a(this, s), s.constructor_.apply(this, arguments);
      }
      return c(s, [{ key: "bufferFixedPrecision", value: function(e) {
        var t = new Cf(new Mf(new He(1)), e.getScale()), n = new Ba(this._bufParams);
        n.setWorkingPrecisionModel(e), n.setNoder(t), this._resultGeometry = n.buffer(this._argGeom, this._distance);
      } }, { key: "bufferReducedPrecision", value: function() {
        if (arguments.length === 0) {
          for (var e = s.MAX_PRECISION_DIGITS; e >= 0; e--) {
            try {
              this.bufferReducedPrecision(e);
            } catch (u) {
              if (!(u instanceof yt)) throw u;
              this._saveException = u;
            }
            if (this._resultGeometry !== null) return null;
          }
          throw this._saveException;
        }
        if (arguments.length === 1) {
          var t = arguments[0], n = s.precisionScaleFactor(this._argGeom, this._distance, t), i = new He(n);
          this.bufferFixedPrecision(i);
        }
      } }, { key: "computeGeometry", value: function() {
        if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
        var e = this._argGeom.getFactory().getPrecisionModel();
        e.getType() === He.FIXED ? this.bufferFixedPrecision(e) : this.bufferReducedPrecision();
      } }, { key: "setQuadrantSegments", value: function(e) {
        this._bufParams.setQuadrantSegments(e);
      } }, { key: "bufferOriginalPrecision", value: function() {
        try {
          var e = new Ba(this._bufParams);
          this._resultGeometry = e.buffer(this._argGeom, this._distance);
        } catch (t) {
          if (!(t instanceof Se)) throw t;
          this._saveException = t;
        }
      } }, { key: "getResultGeometry", value: function(e) {
        return this._distance = e, this.computeGeometry(), this._resultGeometry;
      } }, { key: "setEndCapStyle", value: function(e) {
        this._bufParams.setEndCapStyle(e);
      } }], [{ key: "constructor_", value: function() {
        if (this._argGeom = null, this._distance = null, this._bufParams = new A(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
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
            var u = arguments[0], f = arguments[1], g = arguments[2], y = new s(u);
            y.setQuadrantSegments(g);
            var d = y.getResultGeometry(f);
            return d;
          }
          if (arguments[2] instanceof A && arguments[0] instanceof W && typeof arguments[1] == "number") {
            var N = arguments[0], b = arguments[1], L = arguments[2], $ = new s(N, L), F = $.getResultGeometry(b);
            return F;
          }
        } else if (arguments.length === 4) {
          var V = arguments[0], H = arguments[1], K = arguments[2], he = arguments[3], de = new s(V);
          de.setQuadrantSegments(K), de.setEndCapStyle(he);
          var Oe = de.getResultGeometry(H);
          return Oe;
        }
      } }, { key: "precisionScaleFactor", value: function(e, t, n) {
        var i = e.getEnvelopeInternal(), u = Nn.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())) + 2 * (t > 0 ? t : 0), f = n - Math.trunc(Math.log(u) / Math.log(10) + 1);
        return Math.pow(10, f);
      } }]), s;
    }();
    en.CAP_ROUND = A.CAP_ROUND, en.CAP_BUTT = A.CAP_FLAT, en.CAP_FLAT = A.CAP_FLAT, en.CAP_SQUARE = A.CAP_SQUARE, en.MAX_PRECISION_DIGITS = 12;
    var Df = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Ya = function() {
      function s(e) {
        a(this, s), this.geometryFactory = e || new Ht();
      }
      return c(s, [{ key: "read", value: function(e) {
        var t, n = (t = typeof e == "string" ? JSON.parse(e) : e).type;
        if (!Ue[n]) throw new Error("Unknown GeoJSON type: " + t.type);
        return Df.indexOf(n) !== -1 ? Ue[n].call(this, t.coordinates) : n === "GeometryCollection" ? Ue[n].call(this, t.geometries) : Ue[n].call(this, t);
      } }, { key: "write", value: function(e) {
        var t = e.getGeometryType();
        if (!at[t]) throw new Error("Geometry is not supported");
        return at[t].call(this, e);
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
        e.push(x(O, C(n)));
      }
      return e;
    }, bbox: function(s) {
      return this.geometryFactory.createLinearRing([new O(s[0], s[1]), new O(s[2], s[1]), new O(s[2], s[3]), new O(s[0], s[3]), new O(s[0], s[1])]);
    }, Point: function(s) {
      var e = x(O, C(s));
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
        var u = s[i], f = Ue.coordinates.call(this, u), g = this.geometryFactory.createLinearRing(f);
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
    } }, at = { coordinate: function(s) {
      var e = [s.x, s.y];
      return s.z && e.push(s.z), s.m && e.push(s.m), e;
    }, Point: function(s) {
      return { type: "Point", coordinates: at.coordinate.call(this, s.getCoordinate()) };
    }, MultiPoint: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = at.Point.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPoint", coordinates: e };
    }, LineString: function(s) {
      for (var e = [], t = s.getCoordinates(), n = 0; n < t.length; ++n) {
        var i = t[n];
        e.push(at.coordinate.call(this, i));
      }
      return { type: "LineString", coordinates: e };
    }, MultiLineString: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = at.LineString.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiLineString", coordinates: e };
    }, Polygon: function(s) {
      var e = [], t = at.LineString.call(this, s._shell);
      e.push(t.coordinates);
      for (var n = 0; n < s._holes.length; ++n) {
        var i = s._holes[n], u = at.LineString.call(this, i);
        e.push(u.coordinates);
      }
      return { type: "Polygon", coordinates: e };
    }, MultiPolygon: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = at.Polygon.call(this, n);
        e.push(i.coordinates);
      }
      return { type: "MultiPolygon", coordinates: e };
    }, GeometryCollection: function(s) {
      for (var e = [], t = 0; t < s._geometries.length; ++t) {
        var n = s._geometries[t], i = n.getGeometryType();
        e.push(at[i].call(this, n));
      }
      return { type: "GeometryCollection", geometries: e };
    } };
    return { BufferOp: en, GeoJSONReader: function() {
      function s(e) {
        a(this, s), this.parser = new Ya(e || new Ht());
      }
      return c(s, [{ key: "read", value: function(e) {
        return this.parser.read(e);
      } }]), s;
    }(), GeoJSONWriter: function() {
      function s() {
        a(this, s), this.parser = new Ya(this.geometryFactory);
      }
      return c(s, [{ key: "write", value: function(e) {
        return this.parser.write(e);
      } }]), s;
    }() };
  });
})(hc);
var rd = hc.exports;
const id = /* @__PURE__ */ Zu(rd);
function Pt() {
  return new Zr();
}
function Zr() {
  this.reset();
}
Zr.prototype = {
  constructor: Zr,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(o) {
    Ru(pr, o, this.t), Ru(this, pr.s, this.s), this.s ? this.t += pr.t : this.s = pr.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var pr = new Zr();
function Ru(o, r, a) {
  var l = o.s = r + a, c = l - r, h = l - c;
  o.t = r - h + (a - c);
}
var ve = 1e-6, ce = Math.PI, lt = ce / 2, Cu = ce / 4, ct = ce * 2, St = 180 / ce, Xe = ce / 180, we = Math.abs, sd = Math.atan, vn = Math.atan2, _e = Math.cos, xe = Math.sin, kn = Math.sqrt;
function gc(o) {
  return o > 1 ? 0 : o < -1 ? ce : Math.acos(o);
}
function Ut(o) {
  return o > 1 ? lt : o < -1 ? -lt : Math.asin(o);
}
function Gn() {
}
function Jr(o, r) {
  o && Au.hasOwnProperty(o.type) && Au[o.type](o, r);
}
var Pu = {
  Feature: function(o, r) {
    Jr(o.geometry, r);
  },
  FeatureCollection: function(o, r) {
    for (var a = o.features, l = -1, c = a.length; ++l < c; ) Jr(a[l].geometry, r);
  }
}, Au = {
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
    bs(o.coordinates, r, 0);
  },
  MultiLineString: function(o, r) {
    for (var a = o.coordinates, l = -1, c = a.length; ++l < c; ) bs(a[l], r, 0);
  },
  Polygon: function(o, r) {
    Mu(o.coordinates, r);
  },
  MultiPolygon: function(o, r) {
    for (var a = o.coordinates, l = -1, c = a.length; ++l < c; ) Mu(a[l], r);
  },
  GeometryCollection: function(o, r) {
    for (var a = o.geometries, l = -1, c = a.length; ++l < c; ) Jr(a[l], r);
  }
};
function bs(o, r, a) {
  var l = -1, c = o.length - a, h;
  for (r.lineStart(); ++l < c; ) h = o[l], r.point(h[0], h[1], h[2]);
  r.lineEnd();
}
function Mu(o, r) {
  var a = -1, l = o.length;
  for (r.polygonStart(); ++a < l; ) bs(o[a], r, 1);
  r.polygonEnd();
}
function ad(o, r) {
  o && Pu.hasOwnProperty(o.type) ? Pu[o.type](o, r) : Jr(o, r);
}
Pt();
Pt();
function Os(o) {
  return [vn(o[1], o[0]), Ut(o[2])];
}
function pn(o) {
  var r = o[0], a = o[1], l = _e(a);
  return [l * _e(r), l * xe(r), xe(a)];
}
function mr(o, r) {
  return o[0] * r[0] + o[1] * r[1] + o[2] * r[2];
}
function Qr(o, r) {
  return [o[1] * r[2] - o[2] * r[1], o[2] * r[0] - o[0] * r[2], o[0] * r[1] - o[1] * r[0]];
}
function Ji(o, r) {
  o[0] += r[0], o[1] += r[1], o[2] += r[2];
}
function dr(o, r) {
  return [o[0] * r, o[1] * r, o[2] * r];
}
function Ts(o) {
  var r = kn(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
  o[0] /= r, o[1] /= r, o[2] /= r;
}
Pt();
function yc(o, r) {
  function a(l, c) {
    return l = o(l, c), r(l[0], l[1]);
  }
  return o.invert && r.invert && (a.invert = function(l, c) {
    return l = r.invert(l, c), l && o.invert(l[0], l[1]);
  }), a;
}
function Ls(o, r) {
  return [o > ce ? o - ct : o < -ce ? o + ct : o, r];
}
Ls.invert = Ls;
function od(o, r, a) {
  return (o %= ct) ? r || a ? yc(Fu(o), $u(r, a)) : Fu(o) : r || a ? $u(r, a) : Ls;
}
function Du(o) {
  return function(r, a) {
    return r += o, [r > ce ? r - ct : r < -ce ? r + ct : r, a];
  };
}
function Fu(o) {
  var r = Du(o);
  return r.invert = Du(-o), r;
}
function $u(o, r) {
  var a = _e(o), l = xe(o), c = _e(r), h = xe(r);
  function v(p, _) {
    var x = _e(_), I = _e(p) * x, m = xe(p) * x, E = xe(_), k = E * a + I * l;
    return [
      vn(m * c - k * h, I * a - E * l),
      Ut(k * c + m * h)
    ];
  }
  return v.invert = function(p, _) {
    var x = _e(_), I = _e(p) * x, m = xe(p) * x, E = xe(_), k = E * c - m * h;
    return [
      vn(m * c + E * h, I * a + k * l),
      Ut(k * a - I * l)
    ];
  }, v;
}
function ud(o, r, a, l, c, h) {
  if (a) {
    var v = _e(r), p = xe(r), _ = l * a;
    c == null ? (c = r + l * ct, h = r - _ / 2) : (c = Bu(v, c), h = Bu(v, h), (l > 0 ? c < h : c > h) && (c += l * ct));
    for (var x, I = c; l > 0 ? I > h : I < h; I -= _)
      x = Os([v, -p * _e(I), -p * xe(I)]), o.point(x[0], x[1]);
  }
}
function Bu(o, r) {
  r = pn(r), r[0] -= o, Ts(r);
  var a = gc(-r[1]);
  return ((-r[2] < 0 ? -a : a) + ct - ve) % ct;
}
function vc() {
  var o = [], r;
  return {
    point: function(a, l) {
      r.push([a, l]);
    },
    lineStart: function() {
      o.push(r = []);
    },
    lineEnd: Gn,
    rejoin: function() {
      o.length > 1 && o.push(o.pop().concat(o.shift()));
    },
    result: function() {
      var a = o;
      return o = [], r = null, a;
    }
  };
}
function ld(o, r, a, l, c, h) {
  var v = o[0], p = o[1], _ = r[0], x = r[1], I = 0, m = 1, E = _ - v, k = x - p, w;
  if (w = a - v, !(!E && w > 0)) {
    if (w /= E, E < 0) {
      if (w < I) return;
      w < m && (m = w);
    } else if (E > 0) {
      if (w > m) return;
      w > I && (I = w);
    }
    if (w = c - v, !(!E && w < 0)) {
      if (w /= E, E < 0) {
        if (w > m) return;
        w > I && (I = w);
      } else if (E > 0) {
        if (w < I) return;
        w < m && (m = w);
      }
      if (w = l - p, !(!k && w > 0)) {
        if (w /= k, k < 0) {
          if (w < I) return;
          w < m && (m = w);
        } else if (k > 0) {
          if (w > m) return;
          w > I && (I = w);
        }
        if (w = h - p, !(!k && w < 0)) {
          if (w /= k, k < 0) {
            if (w > m) return;
            w > I && (I = w);
          } else if (k > 0) {
            if (w < I) return;
            w < m && (m = w);
          }
          return I > 0 && (o[0] = v + I * E, o[1] = p + I * k), m < 1 && (r[0] = v + m * E, r[1] = p + m * k), !0;
        }
      }
    }
  }
}
function Rr(o, r) {
  return we(o[0] - r[0]) < ve && we(o[1] - r[1]) < ve;
}
function _r(o, r, a, l) {
  this.x = o, this.z = r, this.o = a, this.e = l, this.v = !1, this.n = this.p = null;
}
function pc(o, r, a, l, c) {
  var h = [], v = [], p, _;
  if (o.forEach(function(w) {
    if (!((C = w.length - 1) <= 0)) {
      var C, T = w[0], R = w[C], P;
      if (Rr(T, R)) {
        for (c.lineStart(), p = 0; p < C; ++p) c.point((T = w[p])[0], T[1]);
        c.lineEnd();
        return;
      }
      h.push(P = new _r(T, w, null, !0)), v.push(P.o = new _r(T, null, P, !1)), h.push(P = new _r(R, w, null, !1)), v.push(P.o = new _r(R, null, P, !0));
    }
  }), !!h.length) {
    for (v.sort(r), Gu(h), Gu(v), p = 0, _ = v.length; p < _; ++p)
      v[p].e = a = !a;
    for (var x = h[0], I, m; ; ) {
      for (var E = x, k = !0; E.v; ) if ((E = E.n) === x) return;
      I = E.z, c.lineStart();
      do {
        if (E.v = E.o.v = !0, E.e) {
          if (k)
            for (p = 0, _ = I.length; p < _; ++p) c.point((m = I[p])[0], m[1]);
          else
            l(E.x, E.n.x, 1, c);
          E = E.n;
        } else {
          if (k)
            for (I = E.p.z, p = I.length - 1; p >= 0; --p) c.point((m = I[p])[0], m[1]);
          else
            l(E.x, E.p.x, -1, c);
          E = E.p;
        }
        E = E.o, I = E.z, k = !k;
      } while (!E.v);
      c.lineEnd();
    }
  }
}
function Gu(o) {
  if (r = o.length) {
    for (var r, a = 0, l = o[0], c; ++a < r; )
      l.n = c = o[a], c.p = l, l = c;
    l.n = c = o[0], c.p = l;
  }
}
function mc(o, r) {
  return o < r ? -1 : o > r ? 1 : o >= r ? 0 : NaN;
}
function cd(o) {
  return o.length === 1 && (o = fd(o)), {
    left: function(r, a, l, c) {
      for (l == null && (l = 0), c == null && (c = r.length); l < c; ) {
        var h = l + c >>> 1;
        o(r[h], a) < 0 ? l = h + 1 : c = h;
      }
      return l;
    },
    right: function(r, a, l, c) {
      for (l == null && (l = 0), c == null && (c = r.length); l < c; ) {
        var h = l + c >>> 1;
        o(r[h], a) > 0 ? c = h : l = h + 1;
      }
      return l;
    }
  };
}
function fd(o) {
  return function(r, a) {
    return mc(o(r), a);
  };
}
cd(mc);
function dc(o) {
  for (var r = o.length, a, l = -1, c = 0, h, v; ++l < r; ) c += o[l].length;
  for (h = new Array(c); --r >= 0; )
    for (v = o[r], a = v.length; --a >= 0; )
      h[--c] = v[a];
  return h;
}
var qn = 1e9, xr = -qn;
function hd(o, r, a, l) {
  function c(x, I) {
    return o <= x && x <= a && r <= I && I <= l;
  }
  function h(x, I, m, E) {
    var k = 0, w = 0;
    if (x == null || (k = v(x, m)) !== (w = v(I, m)) || _(x, I) < 0 ^ m > 0)
      do
        E.point(k === 0 || k === 3 ? o : a, k > 1 ? l : r);
      while ((k = (k + m + 4) % 4) !== w);
    else
      E.point(I[0], I[1]);
  }
  function v(x, I) {
    return we(x[0] - o) < ve ? I > 0 ? 0 : 3 : we(x[0] - a) < ve ? I > 0 ? 2 : 1 : we(x[1] - r) < ve ? I > 0 ? 1 : 0 : I > 0 ? 3 : 2;
  }
  function p(x, I) {
    return _(x.x, I.x);
  }
  function _(x, I) {
    var m = v(x, 1), E = v(I, 1);
    return m !== E ? m - E : m === 0 ? I[1] - x[1] : m === 1 ? x[0] - I[0] : m === 2 ? x[1] - I[1] : I[0] - x[0];
  }
  return function(x) {
    var I = x, m = vc(), E, k, w, C, T, R, P, A, D, M, G, Y = {
      point: U,
      lineStart: te,
      lineEnd: ae,
      polygonStart: ie,
      polygonEnd: ee
    };
    function U(ne, ue) {
      c(ne, ue) && I.point(ne, ue);
    }
    function X() {
      for (var ne = 0, ue = 0, ye = k.length; ue < ye; ++ue)
        for (var ke = k[ue], Ie = 1, j = ke.length, Re = ke[0], Se, Ae, se = Re[0], gt = Re[1]; Ie < j; ++Ie)
          Se = se, Ae = gt, Re = ke[Ie], se = Re[0], gt = Re[1], Ae <= l ? gt > l && (se - Se) * (l - Ae) > (gt - Ae) * (o - Se) && ++ne : gt <= l && (se - Se) * (l - Ae) < (gt - Ae) * (o - Se) && --ne;
      return ne;
    }
    function ie() {
      I = m, E = [], k = [], G = !0;
    }
    function ee() {
      var ne = X(), ue = G && ne, ye = (E = dc(E)).length;
      (ue || ye) && (x.polygonStart(), ue && (x.lineStart(), h(null, null, 1, x), x.lineEnd()), ye && pc(E, p, ne, h, x), x.polygonEnd()), I = x, E = k = w = null;
    }
    function te() {
      Y.point = q, k && k.push(w = []), M = !0, D = !1, P = A = NaN;
    }
    function ae() {
      E && (q(C, T), R && D && m.rejoin(), E.push(m.result())), Y.point = U, D && I.lineEnd();
    }
    function q(ne, ue) {
      var ye = c(ne, ue);
      if (k && w.push([ne, ue]), M)
        C = ne, T = ue, R = ye, M = !1, ye && (I.lineStart(), I.point(ne, ue));
      else if (ye && D) I.point(ne, ue);
      else {
        var ke = [P = Math.max(xr, Math.min(qn, P)), A = Math.max(xr, Math.min(qn, A))], Ie = [ne = Math.max(xr, Math.min(qn, ne)), ue = Math.max(xr, Math.min(qn, ue))];
        ld(ke, Ie, o, r, a, l) ? (D || (I.lineStart(), I.point(ke[0], ke[1])), I.point(Ie[0], Ie[1]), ye || I.lineEnd(), G = !1) : ye && (I.lineStart(), I.point(ne, ue), G = !1);
      }
      P = ne, A = ue, D = ye;
    }
    return Y;
  };
}
var Qi = Pt();
function gd(o, r) {
  var a = r[0], l = r[1], c = [xe(a), -_e(a), 0], h = 0, v = 0;
  Qi.reset();
  for (var p = 0, _ = o.length; p < _; ++p)
    if (I = (x = o[p]).length)
      for (var x, I, m = x[I - 1], E = m[0], k = m[1] / 2 + Cu, w = xe(k), C = _e(k), T = 0; T < I; ++T, E = P, w = D, C = M, m = R) {
        var R = x[T], P = R[0], A = R[1] / 2 + Cu, D = xe(A), M = _e(A), G = P - E, Y = G >= 0 ? 1 : -1, U = Y * G, X = U > ce, ie = w * D;
        if (Qi.add(vn(ie * Y * xe(U), C * M + ie * _e(U))), h += X ? G + Y * ct : G, X ^ E >= a ^ P >= a) {
          var ee = Qr(pn(m), pn(R));
          Ts(ee);
          var te = Qr(c, ee);
          Ts(te);
          var ae = (X ^ G >= 0 ? -1 : 1) * Ut(te[2]);
          (l > ae || l === ae && (ee[0] || ee[1])) && (v += X ^ G >= 0 ? 1 : -1);
        }
      }
  return (h < -ve || h < ve && Qi < -ve) ^ v & 1;
}
Pt();
function qu(o) {
  return o;
}
Pt();
Pt();
var mn = 1 / 0, Kr = mn, Jn = -mn, ei = Jn, zu = {
  point: yd,
  lineStart: Gn,
  lineEnd: Gn,
  polygonStart: Gn,
  polygonEnd: Gn,
  result: function() {
    var o = [[mn, Kr], [Jn, ei]];
    return Jn = ei = -(Kr = mn = 1 / 0), o;
  }
};
function yd(o, r) {
  o < mn && (mn = o), o > Jn && (Jn = o), r < Kr && (Kr = r), r > ei && (ei = r);
}
Pt();
function _c(o, r, a, l) {
  return function(c, h) {
    var v = r(h), p = c.invert(l[0], l[1]), _ = vc(), x = r(_), I = !1, m, E, k, w = {
      point: C,
      lineStart: R,
      lineEnd: P,
      polygonStart: function() {
        w.point = A, w.lineStart = D, w.lineEnd = M, E = [], m = [];
      },
      polygonEnd: function() {
        w.point = C, w.lineStart = R, w.lineEnd = P, E = dc(E);
        var G = gd(m, p);
        E.length ? (I || (h.polygonStart(), I = !0), pc(E, pd, G, a, h)) : G && (I || (h.polygonStart(), I = !0), h.lineStart(), a(null, null, 1, h), h.lineEnd()), I && (h.polygonEnd(), I = !1), E = m = null;
      },
      sphere: function() {
        h.polygonStart(), h.lineStart(), a(null, null, 1, h), h.lineEnd(), h.polygonEnd();
      }
    };
    function C(G, Y) {
      var U = c(G, Y);
      o(G = U[0], Y = U[1]) && h.point(G, Y);
    }
    function T(G, Y) {
      var U = c(G, Y);
      v.point(U[0], U[1]);
    }
    function R() {
      w.point = T, v.lineStart();
    }
    function P() {
      w.point = C, v.lineEnd();
    }
    function A(G, Y) {
      k.push([G, Y]);
      var U = c(G, Y);
      x.point(U[0], U[1]);
    }
    function D() {
      x.lineStart(), k = [];
    }
    function M() {
      A(k[0][0], k[0][1]), x.lineEnd();
      var G = x.clean(), Y = _.result(), U, X = Y.length, ie, ee, te;
      if (k.pop(), m.push(k), k = null, !!X) {
        if (G & 1) {
          if (ee = Y[0], (ie = ee.length - 1) > 0) {
            for (I || (h.polygonStart(), I = !0), h.lineStart(), U = 0; U < ie; ++U) h.point((te = ee[U])[0], te[1]);
            h.lineEnd();
          }
          return;
        }
        X > 1 && G & 2 && Y.push(Y.pop().concat(Y.shift())), E.push(Y.filter(vd));
      }
    }
    return w;
  };
}
function vd(o) {
  return o.length > 1;
}
function pd(o, r) {
  return ((o = o.x)[0] < 0 ? o[1] - lt - ve : lt - o[1]) - ((r = r.x)[0] < 0 ? r[1] - lt - ve : lt - r[1]);
}
const Yu = _c(
  function() {
    return !0;
  },
  md,
  _d,
  [-ce, -lt]
);
function md(o) {
  var r = NaN, a = NaN, l = NaN, c;
  return {
    lineStart: function() {
      o.lineStart(), c = 1;
    },
    point: function(h, v) {
      var p = h > 0 ? ce : -ce, _ = we(h - r);
      we(_ - ce) < ve ? (o.point(r, a = (a + v) / 2 > 0 ? lt : -lt), o.point(l, a), o.lineEnd(), o.lineStart(), o.point(p, a), o.point(h, a), c = 0) : l !== p && _ >= ce && (we(r - l) < ve && (r -= l * ve), we(h - p) < ve && (h -= p * ve), a = dd(r, a, h, v), o.point(l, a), o.lineEnd(), o.lineStart(), o.point(p, a), c = 0), o.point(r = h, a = v), l = p;
    },
    lineEnd: function() {
      o.lineEnd(), r = a = NaN;
    },
    clean: function() {
      return 2 - c;
    }
  };
}
function dd(o, r, a, l) {
  var c, h, v = xe(o - a);
  return we(v) > ve ? sd((xe(r) * (h = _e(l)) * xe(a) - xe(l) * (c = _e(r)) * xe(o)) / (c * h * v)) : (r + l) / 2;
}
function _d(o, r, a, l) {
  var c;
  if (o == null)
    c = a * lt, l.point(-ce, c), l.point(0, c), l.point(ce, c), l.point(ce, 0), l.point(ce, -c), l.point(0, -c), l.point(-ce, -c), l.point(-ce, 0), l.point(-ce, c);
  else if (we(o[0] - r[0]) > ve) {
    var h = o[0] < r[0] ? ce : -ce;
    c = a * h / 2, l.point(-h, c), l.point(0, c), l.point(h, c);
  } else
    l.point(r[0], r[1]);
}
function xd(o, r) {
  var a = _e(o), l = a > 0, c = we(a) > ve;
  function h(I, m, E, k) {
    ud(k, o, r, E, I, m);
  }
  function v(I, m) {
    return _e(I) * _e(m) > a;
  }
  function p(I) {
    var m, E, k, w, C;
    return {
      lineStart: function() {
        w = k = !1, C = 1;
      },
      point: function(T, R) {
        var P = [T, R], A, D = v(T, R), M = l ? D ? 0 : x(T, R) : D ? x(T + (T < 0 ? ce : -ce), R) : 0;
        if (!m && (w = k = D) && I.lineStart(), D !== k && (A = _(m, P), (!A || Rr(m, A) || Rr(P, A)) && (P[0] += ve, P[1] += ve, D = v(P[0], P[1]))), D !== k)
          C = 0, D ? (I.lineStart(), A = _(P, m), I.point(A[0], A[1])) : (A = _(m, P), I.point(A[0], A[1]), I.lineEnd()), m = A;
        else if (c && m && l ^ D) {
          var G;
          !(M & E) && (G = _(P, m, !0)) && (C = 0, l ? (I.lineStart(), I.point(G[0][0], G[0][1]), I.point(G[1][0], G[1][1]), I.lineEnd()) : (I.point(G[1][0], G[1][1]), I.lineEnd(), I.lineStart(), I.point(G[0][0], G[0][1])));
        }
        D && (!m || !Rr(m, P)) && I.point(P[0], P[1]), m = P, k = D, E = M;
      },
      lineEnd: function() {
        k && I.lineEnd(), m = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return C | (w && k) << 1;
      }
    };
  }
  function _(I, m, E) {
    var k = pn(I), w = pn(m), C = [1, 0, 0], T = Qr(k, w), R = mr(T, T), P = T[0], A = R - P * P;
    if (!A) return !E && I;
    var D = a * R / A, M = -a * P / A, G = Qr(C, T), Y = dr(C, D), U = dr(T, M);
    Ji(Y, U);
    var X = G, ie = mr(Y, X), ee = mr(X, X), te = ie * ie - ee * (mr(Y, Y) - 1);
    if (!(te < 0)) {
      var ae = kn(te), q = dr(X, (-ie - ae) / ee);
      if (Ji(q, Y), q = Os(q), !E) return q;
      var ne = I[0], ue = m[0], ye = I[1], ke = m[1], Ie;
      ue < ne && (Ie = ne, ne = ue, ue = Ie);
      var j = ue - ne, Re = we(j - ce) < ve, Se = Re || j < ve;
      if (!Re && ke < ye && (Ie = ye, ye = ke, ke = Ie), Se ? Re ? ye + ke > 0 ^ q[1] < (we(q[0] - ne) < ve ? ye : ke) : ye <= q[1] && q[1] <= ke : j > ce ^ (ne <= q[0] && q[0] <= ue)) {
        var Ae = dr(X, (-ie + ae) / ee);
        return Ji(Ae, Y), [q, Os(Ae)];
      }
    }
  }
  function x(I, m) {
    var E = l ? o : ce - o, k = 0;
    return I < -E ? k |= 1 : I > E && (k |= 2), m < -E ? k |= 4 : m > E && (k |= 8), k;
  }
  return _c(v, p, h, l ? [0, -o] : [-ce, o - ce]);
}
function xc(o) {
  return function(r) {
    var a = new Rs();
    for (var l in o) a[l] = o[l];
    return a.stream = r, a;
  };
}
function Rs() {
}
Rs.prototype = {
  constructor: Rs,
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
function Ec(o, r, a) {
  var l = r[1][0] - r[0][0], c = r[1][1] - r[0][1], h = o.clipExtent && o.clipExtent();
  o.scale(150).translate([0, 0]), h != null && o.clipExtent(null), ad(a, o.stream(zu));
  var v = zu.result(), p = Math.min(l / (v[1][0] - v[0][0]), c / (v[1][1] - v[0][1])), _ = +r[0][0] + (l - p * (v[1][0] + v[0][0])) / 2, x = +r[0][1] + (c - p * (v[1][1] + v[0][1])) / 2;
  return h != null && o.clipExtent(h), o.scale(p * 150).translate([_, x]);
}
function Ed(o, r, a) {
  return Ec(o, [[0, 0], r], a);
}
var Uu = 16, kd = _e(30 * Xe);
function Xu(o, r) {
  return +r ? Sd(o, r) : Id(o);
}
function Id(o) {
  return xc({
    point: function(r, a) {
      r = o(r, a), this.stream.point(r[0], r[1]);
    }
  });
}
function Sd(o, r) {
  function a(l, c, h, v, p, _, x, I, m, E, k, w, C, T) {
    var R = x - l, P = I - c, A = R * R + P * P;
    if (A > 4 * r && C--) {
      var D = v + E, M = p + k, G = _ + w, Y = kn(D * D + M * M + G * G), U = Ut(G /= Y), X = we(we(G) - 1) < ve || we(h - m) < ve ? (h + m) / 2 : vn(M, D), ie = o(X, U), ee = ie[0], te = ie[1], ae = ee - l, q = te - c, ne = P * ae - R * q;
      (ne * ne / A > r || we((R * ae + P * q) / A - 0.5) > 0.3 || v * E + p * k + _ * w < kd) && (a(l, c, h, v, p, _, ee, te, X, D /= Y, M /= Y, G, C, T), T.point(ee, te), a(ee, te, X, D, M, G, x, I, m, E, k, w, C, T));
    }
  }
  return function(l) {
    var c, h, v, p, _, x, I, m, E, k, w, C, T = {
      point: R,
      lineStart: P,
      lineEnd: D,
      polygonStart: function() {
        l.polygonStart(), T.lineStart = M;
      },
      polygonEnd: function() {
        l.polygonEnd(), T.lineStart = P;
      }
    };
    function R(U, X) {
      U = o(U, X), l.point(U[0], U[1]);
    }
    function P() {
      m = NaN, T.point = A, l.lineStart();
    }
    function A(U, X) {
      var ie = pn([U, X]), ee = o(U, X);
      a(m, E, I, k, w, C, m = ee[0], E = ee[1], I = U, k = ie[0], w = ie[1], C = ie[2], Uu, l), l.point(m, E);
    }
    function D() {
      T.point = R, l.lineEnd();
    }
    function M() {
      P(), T.point = G, T.lineEnd = Y;
    }
    function G(U, X) {
      A(c = U, X), h = m, v = E, p = k, _ = w, x = C, T.point = A;
    }
    function Y() {
      a(m, E, I, k, w, C, h, v, c, p, _, x, Uu, l), T.lineEnd = D, D();
    }
    return T;
  };
}
var Nd = xc({
  point: function(o, r) {
    this.stream.point(o * Xe, r * Xe);
  }
});
function wd(o) {
  return bd(function() {
    return o;
  })();
}
function bd(o) {
  var r, a = 150, l = 480, c = 250, h, v, p = 0, _ = 0, x = 0, I = 0, m = 0, E, k, w = null, C = Yu, T = null, R, P, A, D = qu, M = 0.5, G = Xu(ee, M), Y, U;
  function X(q) {
    return q = k(q[0] * Xe, q[1] * Xe), [q[0] * a + h, v - q[1] * a];
  }
  function ie(q) {
    return q = k.invert((q[0] - h) / a, (v - q[1]) / a), q && [q[0] * St, q[1] * St];
  }
  function ee(q, ne) {
    return q = r(q, ne), [q[0] * a + h, v - q[1] * a];
  }
  X.stream = function(q) {
    return Y && U === q ? Y : Y = Nd(C(E, G(D(U = q))));
  }, X.clipAngle = function(q) {
    return arguments.length ? (C = +q ? xd(w = q * Xe, 6 * Xe) : (w = null, Yu), ae()) : w * St;
  }, X.clipExtent = function(q) {
    return arguments.length ? (D = q == null ? (T = R = P = A = null, qu) : hd(T = +q[0][0], R = +q[0][1], P = +q[1][0], A = +q[1][1]), ae()) : T == null ? null : [[T, R], [P, A]];
  }, X.scale = function(q) {
    return arguments.length ? (a = +q, te()) : a;
  }, X.translate = function(q) {
    return arguments.length ? (l = +q[0], c = +q[1], te()) : [l, c];
  }, X.center = function(q) {
    return arguments.length ? (p = q[0] % 360 * Xe, _ = q[1] % 360 * Xe, te()) : [p * St, _ * St];
  }, X.rotate = function(q) {
    return arguments.length ? (x = q[0] % 360 * Xe, I = q[1] % 360 * Xe, m = q.length > 2 ? q[2] % 360 * Xe : 0, te()) : [x * St, I * St, m * St];
  }, X.precision = function(q) {
    return arguments.length ? (G = Xu(ee, M = q * q), ae()) : kn(M);
  }, X.fitExtent = function(q, ne) {
    return Ec(X, q, ne);
  }, X.fitSize = function(q, ne) {
    return Ed(X, q, ne);
  };
  function te() {
    k = yc(E = od(x, I, m), r);
    var q = r(p, _);
    return h = l - q[0] * a, v = c + q[1] * a, ae();
  }
  function ae() {
    return Y = U = null, X;
  }
  return function() {
    return r = o.apply(this, arguments), X.invert = r.invert && ie, te();
  };
}
function kc(o) {
  return function(r, a) {
    var l = _e(r), c = _e(a), h = o(l * c);
    return [
      h * c * xe(r),
      h * xe(a)
    ];
  };
}
function Ic(o) {
  return function(r, a) {
    var l = kn(r * r + a * a), c = o(l), h = xe(c), v = _e(c);
    return [
      vn(r * h, l * v),
      Ut(l && a * h / l)
    ];
  };
}
var Od = kc(function(o) {
  return kn(2 / (1 + o));
});
Od.invert = Ic(function(o) {
  return 2 * Ut(o / 2);
});
var Sc = kc(function(o) {
  return (o = gc(o)) && o / xe(o);
});
Sc.invert = Ic(function(o) {
  return o;
});
function Td() {
  return wd(Sc).scale(79.4188).clipAngle(180 - 1e-3);
}
function ju(o, r) {
  return [o, r];
}
ju.invert = ju;
var Ld = Object.defineProperty, In = (o, r) => Ld(o, "name", { value: r, configurable: !0 }), { BufferOp: Rd, GeoJSONReader: Cd, GeoJSONWriter: Pd } = id;
function Nc(o, r, a) {
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
  var h = [];
  switch (o.type) {
    case "GeometryCollection":
      return Vt(o, function(v) {
        var p = jn(v, r, l, c);
        p && h.push(p);
      }), tt(h);
    case "FeatureCollection":
      return Hr(o, function(v) {
        var p = jn(v, r, l, c);
        p && Hr(p, function(_) {
          _ && h.push(_);
        });
      }), tt(h);
  }
  return jn(o, r, l, c);
}
In(Nc, "buffer");
function jn(o, r, a, l) {
  var c = o.properties || {}, h = o.type === "Feature" ? o.geometry : o;
  if (h.type === "GeometryCollection") {
    var v = [];
    return Vt(o, function(C) {
      var T = jn(C, r, a, l);
      T && v.push(T);
    }), tt(v);
  }
  var p = wc(h), _ = {
    type: h.type,
    coordinates: Ks(h.coordinates, p)
  }, x = new Cd(), I = x.read(_), m = Ws(ii(r, a), "meters"), E = Rd.bufferOp(I, m, l), k = new Pd();
  if (E = k.write(E), !Qs(E.coordinates)) {
    var w = {
      type: E.type,
      coordinates: ea(E.coordinates, p)
    };
    return Ve(w, c);
  }
}
In(jn, "bufferFeature");
function Qs(o) {
  return Array.isArray(o[0]) ? Qs(o[0]) : isNaN(o[0]);
}
In(Qs, "coordsIsNaN");
function Ks(o, r) {
  return typeof o[0] != "object" ? r(o) : o.map(function(a) {
    return Ks(a, r);
  });
}
In(Ks, "projectCoords");
function ea(o, r) {
  return typeof o[0] != "object" ? r.invert(o) : o.map(function(a) {
    return ea(a, r);
  });
}
In(ea, "unprojectCoords");
function wc(o) {
  var r = fc(o).geometry.coordinates, a = [-r[0], -r[1]];
  return Td().rotate(a).scale(Me);
}
In(wc, "defineProjection");
var Ad = Nc, Md = Object.defineProperty, Dd = (o, r) => Md(o, "name", { value: r, configurable: !0 });
function bc(o) {
  const r = [];
  if (Vt(o, (c) => {
    r.push(c.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least two features");
  const a = o.features[0].properties || {}, l = tc.difference(r[0], ...r.slice(1));
  return l.length === 0 ? null : l.length === 1 ? xn(l[0], a) : ri(l, a);
}
Dd(bc, "difference");
var Fd = bc;
function Vu(o) {
  let r;
  for (const a of o)
    r && a[0] - r[0] >= 180 ? a[0] -= 360 : r && a[0] - r[0] < -180 && (a[0] += 360), r = a;
}
function Wu(o, r) {
  const a = Fd(
    tt([
      xn([
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
  const l = Ad(o, 0);
  if (l) {
    if (l.geometry.type === "Polygon")
      for (const c of l.geometry.coordinates)
        Vu(c);
    else
      for (const c of l.geometry.coordinates)
        for (const h of c)
          Vu(h);
    r(tt([l, a]));
  }
}
const Hu = tt([]);
function Gd(o, r, a = !0, l = !0, c = {}, h = {}, v = {
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
  const _ = [];
  let x, I, m;
  function E() {
    !o.getSource("full-geom") && (v != null && v.fill || v != null && v.line) && o.addSource("full-geom", {
      type: "geojson",
      data: Hu
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
    }), m && C(m);
  }
  o.loaded() ? E() : o.once("load", () => {
    E();
  }), o.on("styledata", () => {
    E();
  });
  const k = (T) => {
    p == null || p({
      type: "mapClick",
      coordinates: [T.lngLat.lng, T.lngLat.lat]
    });
  };
  function w(T = !1) {
    if (!r)
      throw new Error();
    const R = document.createElement("div");
    return T && R.classList.add("marker-interactive"), new Qm({
      props: { displayIn: "maplibre" },
      target: R
    }), new r.Marker({ element: R, offset: [1, -13] });
  }
  function C(T) {
    var R;
    m = T, (R = o.getSource("full-geom")) == null || R.setData(T);
  }
  return {
    setEventHandler(T) {
      T ? (p = T, o.on("click", k)) : (p = void 0, o.off("click", k));
    },
    flyTo(T, R) {
      o.flyTo({ center: T, zoom: R, ...c });
    },
    fitBounds(T, R, P) {
      o.fitBounds(
        [
          [T[0], T[1]],
          [T[2], T[3]]
        ],
        { padding: R, maxZoom: P, ...h }
      );
    },
    indicateReverse(T) {
      o.getCanvasContainer().style.cursor = T ? "crosshair" : "";
    },
    setReverseMarker(T) {
      !r || !a || (I ? T ? I.setLngLat(T) : (I.remove(), I = void 0) : T && (I = (typeof a == "object" ? new r.Marker(a) : w()).setLngLat(T).addTo(o), I.getElement().classList.add("marker-reverse")));
    },
    setMarkers(T, R) {
      if (a) {
        for (const P of _)
          P.remove();
        if (_.length = 0, C(Hu), !!r) {
          if (R) {
            let P = !1;
            if (R.geometry.type === "GeometryCollection") {
              const A = R.geometry.geometries.filter(
                (D) => D.type === "Polygon" || D.type === "MultiPolygon"
              );
              e: if (A.length > 0) {
                const D = Cm(
                  tt(A.map((M) => Ve(M)))
                );
                if (!D)
                  break e;
                Wu(
                  {
                    ...R,
                    geometry: D.geometry
                  },
                  C
                ), P = !0;
              } else {
                const D = R.geometry.geometries.filter(
                  (M) => M.type === "LineString" || M.type === "MultiLineString"
                );
                D.length > 0 && (C({
                  ...R,
                  geometry: { type: "GeometryCollection", geometries: D }
                }), P = !0);
              }
            }
            if (!P) {
              if (R.geometry.type === "Polygon" || R.geometry.type === "MultiPolygon")
                Wu(R, C);
              else if (R.geometry.type === "LineString" || R.geometry.type === "MultiLineString") {
                C(R);
                return;
              }
            }
            a && _.push(
              (typeof a == "object" ? new r.Marker(a) : w()).setLngLat(R.center).addTo(o)
            );
          }
          if (l)
            for (const P of T ?? []) {
              if (P === R)
                continue;
              const A = (typeof l == "object" ? new r.Marker(l) : w(!0)).setLngLat(P.center).setPopup(
                new r.Popup({
                  offset: [1, -27],
                  closeButton: !1,
                  closeOnMove: !0,
                  className: "maptiler-gc-popup"
                }).setText(
                  P.place_type[0] === "reverse" ? P.place_name : P.place_name.replace(/,.*/, "")
                )
              ).addTo(o), D = A.getElement();
              D.addEventListener("click", (M) => {
                M.stopPropagation(), p == null || p({ type: "markerClick", id: P.id });
              }), D.addEventListener("mouseenter", () => {
                p == null || p({ type: "markerMouseEnter", id: P.id }), A.togglePopup();
              }), D.addEventListener("mouseleave", () => {
                p == null || p({ type: "markerMouseLeave", id: P.id }), A.togglePopup();
              }), _.push(A);
            }
        }
      }
    },
    setSelectedMarker(T) {
      x && x.getElement().classList.toggle("marker-selected", !1), x = T > -1 ? _[T] : void 0, x == null || x.getElement().classList.toggle("marker-selected", !0);
    },
    getCenterAndZoom() {
      const T = o.getCenter();
      return [o.getZoom(), T.lng, T.lat];
    }
  };
}
export {
  Gd as createMapLibreGlMapController
};
//# sourceMappingURL=maplibregl-controller.js.map
