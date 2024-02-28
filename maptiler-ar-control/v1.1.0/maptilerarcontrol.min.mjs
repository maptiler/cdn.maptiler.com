var Lt = Object.defineProperty;
var Mt = (s, e, t) => e in s ? Lt(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var E = (s, e, t) => (Mt(s, typeof e != "symbol" ? e + "" : e, t), t);
import { LngLat as Ge } from "@maptiler/sdk";
import { ModelViewerElement as Ct } from "@google/model-viewer";
import yt from "events";
import * as U from "three";
import { PlaneGeometry as Tt, ShaderMaterial as vt, Uniform as Et, SRGBColorSpace as ot, Mesh as bt, PerspectiveCamera as St, Scene as be, WebGLRenderer as It, CanvasTexture as Rt, Color as _t, Vector3 as pe, CompressedTexture as Me, Source as At, NoColorSpace as Dt, MathUtils as Se, RGBAFormat as Ut, DoubleSide as Nt, BufferAttribute as q, PropertyBinding as de, InterpolateDiscrete as Bt, Matrix4 as at, Quaternion as Ft, InterpolateLinear as kt, NearestFilter as Pt, NearestMipmapNearestFilter as Ot, NearestMipmapLinearFilter as Gt, LinearFilter as $t, LinearMipmapNearestFilter as zt, LinearMipmapLinearFilter as Zt, ClampToEdgeWrapping as Vt, RepeatWrapping as Ht, MirroredRepeatWrapping as jt } from "three";
let re, Ce, ee, ce;
function ye(s, e = 1 / 0, t = null) {
  Ce || (Ce = new Tt(2, 2, 1, 1)), ee || (ee = new vt({
    uniforms: { blitTexture: new Et(s) },
    vertexShader: `
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,
    fragmentShader: `
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`
  })), ee.uniforms.blitTexture.value = s, ee.defines.IS_SRGB = s.colorSpace == ot, ee.needsUpdate = !0, ce || (ce = new bt(Ce, ee), ce.frustrumCulled = !1);
  const n = new St(), r = new be();
  r.add(ce), t === null && (t = re = new It({ antialias: !1 }));
  const i = Math.min(s.image.width, e), o = Math.min(s.image.height, e);
  t.setSize(i, o), t.clear(), t.render(r, n);
  const a = document.createElement("canvas"), c = a.getContext("2d");
  a.width = i, a.height = o, c.drawImage(t.domElement, 0, 0, i, o);
  const l = new Rt(a);
  return l.minFilter = s.minFilter, l.magFilter = s.magFilter, l.wrapS = s.wrapS, l.wrapT = s.wrapT, l.name = s.name, re && (re.forceContextLoss(), re.dispose(), re = null), l;
}
const $e = {
  POSITION: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "unsigned byte normalized",
    "short",
    "short normalized",
    "unsigned short",
    "unsigned short normalized"
  ],
  NORMAL: [
    "byte normalized",
    "short normalized"
  ],
  TANGENT: [
    "byte normalized",
    "short normalized"
  ],
  TEXCOORD: [
    "byte",
    "byte normalized",
    "unsigned byte",
    "short",
    "short normalized",
    "unsigned short"
  ]
};
class De {
  constructor() {
    this.pluginCallbacks = [], this.register(function(e) {
      return new nn(e);
    }), this.register(function(e) {
      return new sn(e);
    }), this.register(function(e) {
      return new an(e);
    }), this.register(function(e) {
      return new ln(e);
    }), this.register(function(e) {
      return new cn(e);
    }), this.register(function(e) {
      return new un(e);
    }), this.register(function(e) {
      return new rn(e);
    }), this.register(function(e) {
      return new on(e);
    }), this.register(function(e) {
      return new hn(e);
    }), this.register(function(e) {
      return new fn(e);
    }), this.register(function(e) {
      return new pn(e);
    }), this.register(function(e) {
      return new dn(e);
    }), this.register(function(e) {
      return new gn(e);
    });
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Function} onError  Callback on errors
   * @param  {Object} options options
   */
  parse(e, t, n, r) {
    const i = new tn(), o = [];
    for (let a = 0, c = this.pluginCallbacks.length; a < c; a++)
      o.push(this.pluginCallbacks[a](i));
    i.setPlugins(o), i.write(e, t, r).catch(n);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(r, i) {
      n.parse(e, r, i, t);
    });
  }
}
const y = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6,
  BYTE: 5120,
  UNSIGNED_BYTE: 5121,
  SHORT: 5122,
  UNSIGNED_SHORT: 5123,
  INT: 5124,
  UNSIGNED_INT: 5125,
  FLOAT: 5126,
  ARRAY_BUFFER: 34962,
  ELEMENT_ARRAY_BUFFER: 34963,
  NEAREST: 9728,
  LINEAR: 9729,
  NEAREST_MIPMAP_NEAREST: 9984,
  LINEAR_MIPMAP_NEAREST: 9985,
  NEAREST_MIPMAP_LINEAR: 9986,
  LINEAR_MIPMAP_LINEAR: 9987,
  CLAMP_TO_EDGE: 33071,
  MIRRORED_REPEAT: 33648,
  REPEAT: 10497
}, Te = "KHR_mesh_quantization", z = {};
z[Pt] = y.NEAREST;
z[Ot] = y.NEAREST_MIPMAP_NEAREST;
z[Gt] = y.NEAREST_MIPMAP_LINEAR;
z[$t] = y.LINEAR;
z[zt] = y.LINEAR_MIPMAP_NEAREST;
z[Zt] = y.LINEAR_MIPMAP_LINEAR;
z[Vt] = y.CLAMP_TO_EDGE;
z[Ht] = y.REPEAT;
z[jt] = y.MIRRORED_REPEAT;
const ze = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
}, Wt = new _t(), Ze = 12, Yt = 1179937895, Kt = 2, Ve = 8, Xt = 1313821514, qt = 5130562;
function ae(s, e) {
  return s.length === e.length && s.every(function(t, n) {
    return t === e[n];
  });
}
function Jt(s) {
  return new TextEncoder().encode(s).buffer;
}
function Qt(s) {
  return ae(s.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function en(s, e, t) {
  const n = {
    min: new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let r = e; r < e + t; r++)
    for (let i = 0; i < s.itemSize; i++) {
      let o;
      s.itemSize > 4 ? o = s.array[r * s.itemSize + i] : (i === 0 ? o = s.getX(r) : i === 1 ? o = s.getY(r) : i === 2 ? o = s.getZ(r) : i === 3 && (o = s.getW(r)), s.normalized === !0 && (o = Se.normalize(o, s.array))), n.min[i] = Math.min(n.min[i], o), n.max[i] = Math.max(n.max[i], o);
    }
  return n;
}
function lt(s) {
  return Math.ceil(s / 4) * 4;
}
function ve(s, e = 0) {
  const t = lt(s.byteLength);
  if (t !== s.byteLength) {
    const n = new Uint8Array(t);
    if (n.set(new Uint8Array(s)), e !== 0)
      for (let r = s.byteLength; r < t; r++)
        n[r] = e;
    return n.buffer;
  }
  return s;
}
function He() {
  return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
function je(s, e) {
  if (s.toBlob !== void 0)
    return new Promise((n) => s.toBlob(n, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), s.convertToBlob({
    type: e,
    quality: t
  });
}
class tn {
  constructor() {
    this.plugins = [], this.options = {}, this.pending = [], this.buffers = [], this.byteOffset = 0, this.buffers = [], this.nodeMap = /* @__PURE__ */ new Map(), this.skins = [], this.extensionsUsed = {}, this.extensionsRequired = {}, this.uids = /* @__PURE__ */ new Map(), this.uid = 0, this.json = {
      asset: {
        version: "2.0",
        generator: "THREE.GLTFExporter"
      }
    }, this.cache = {
      meshes: /* @__PURE__ */ new Map(),
      attributes: /* @__PURE__ */ new Map(),
      attributesNormalized: /* @__PURE__ */ new Map(),
      materials: /* @__PURE__ */ new Map(),
      textures: /* @__PURE__ */ new Map(),
      images: /* @__PURE__ */ new Map()
    };
  }
  setPlugins(e) {
    this.plugins = e;
  }
  /**
   * Parse scenes and generate GLTF output
   * @param  {Scene or [THREE.Scenes]} input   Scene or Array of THREE.Scenes
   * @param  {Function} onDone  Callback on completed
   * @param  {Object} options options
   */
  async write(e, t, n = {}) {
    this.options = Object.assign({
      // default options
      binary: !1,
      trs: !1,
      onlyVisible: !0,
      maxTextureSize: 1 / 0,
      animations: [],
      includeCustomExtensions: !1
    }, n), this.options.animations.length > 0 && (this.options.trs = !0), this.processInput(e), await Promise.all(this.pending);
    const r = this, i = r.buffers, o = r.json;
    n = r.options;
    const a = r.extensionsUsed, c = r.extensionsRequired, l = new Blob(i, { type: "application/octet-stream" }), u = Object.keys(a), h = Object.keys(c);
    if (u.length > 0 && (o.extensionsUsed = u), h.length > 0 && (o.extensionsRequired = h), o.buffers && o.buffers.length > 0 && (o.buffers[0].byteLength = l.size), n.binary === !0) {
      const d = new FileReader();
      d.readAsArrayBuffer(l), d.onloadend = function() {
        const f = ve(d.result), p = new DataView(new ArrayBuffer(Ve));
        p.setUint32(0, f.byteLength, !0), p.setUint32(4, qt, !0);
        const g = ve(Jt(JSON.stringify(o)), 32), L = new DataView(new ArrayBuffer(Ve));
        L.setUint32(0, g.byteLength, !0), L.setUint32(4, Xt, !0);
        const C = new ArrayBuffer(Ze), T = new DataView(C);
        T.setUint32(0, Yt, !0), T.setUint32(4, Kt, !0);
        const _ = Ze + L.byteLength + g.byteLength + p.byteLength + f.byteLength;
        T.setUint32(8, _, !0);
        const m = new Blob([
          C,
          L,
          g,
          p,
          f
        ], { type: "application/octet-stream" }), M = new FileReader();
        M.readAsArrayBuffer(m), M.onloadend = function() {
          t(M.result);
        };
      };
    } else if (o.buffers && o.buffers.length > 0) {
      const d = new FileReader();
      d.readAsDataURL(l), d.onloadend = function() {
        const f = d.result;
        o.buffers[0].uri = f, t(o);
      };
    } else
      t(o);
  }
  /**
   * Serializes a userData.
   *
   * @param {THREE.Object3D|THREE.Material} object
   * @param {Object} objectDef
   */
  serializeUserData(e, t) {
    if (Object.keys(e.userData).length === 0)
      return;
    const n = this.options, r = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(e.userData));
      if (n.includeCustomExtensions && i.gltfExtensions) {
        t.extensions === void 0 && (t.extensions = {});
        for (const o in i.gltfExtensions)
          t.extensions[o] = i.gltfExtensions[o], r[o] = !0;
        delete i.gltfExtensions;
      }
      Object.keys(i).length > 0 && (t.extras = i);
    } catch (i) {
      console.warn("THREE.GLTFExporter: userData of '" + e.name + "' won't be serialized because of JSON.stringify error - " + i.message);
    }
  }
  /**
   * Returns ids for buffer attributes.
   * @param  {Object} object
   * @return {Integer}
   */
  getUID(e, t = !1) {
    if (this.uids.has(e) === !1) {
      const r = /* @__PURE__ */ new Map();
      r.set(!0, this.uid++), r.set(!1, this.uid++), this.uids.set(e, r);
    }
    return this.uids.get(e).get(t);
  }
  /**
   * Checks if normal attribute values are normalized.
   *
   * @param {BufferAttribute} normal
   * @returns {Boolean}
   */
  isNormalizedNormalAttribute(e) {
    if (this.cache.attributesNormalized.has(e))
      return !1;
    const n = new pe();
    for (let r = 0, i = e.count; r < i; r++)
      if (Math.abs(n.fromBufferAttribute(e, r).length() - 1) > 5e-4)
        return !1;
    return !0;
  }
  /**
   * Creates normalized normal buffer attribute.
   *
   * @param {BufferAttribute} normal
   * @returns {BufferAttribute}
   *
   */
  createNormalizedNormalAttribute(e) {
    const t = this.cache;
    if (t.attributesNormalized.has(e))
      return t.attributesNormalized.get(e);
    const n = e.clone(), r = new pe();
    for (let i = 0, o = n.count; i < o; i++)
      r.fromBufferAttribute(n, i), r.x === 0 && r.y === 0 && r.z === 0 ? r.setX(1) : r.normalize(), n.setXYZ(i, r.x, r.y, r.z);
    return t.attributesNormalized.set(e, n), n;
  }
  /**
   * Applies a texture transform, if present, to the map definition. Requires
   * the KHR_texture_transform extension.
   *
   * @param {Object} mapDef
   * @param {THREE.Texture} texture
   */
  applyTextureTransform(e, t) {
    let n = !1;
    const r = {};
    (t.offset.x !== 0 || t.offset.y !== 0) && (r.offset = t.offset.toArray(), n = !0), t.rotation !== 0 && (r.rotation = t.rotation, n = !0), (t.repeat.x !== 1 || t.repeat.y !== 1) && (r.scale = t.repeat.toArray(), n = !0), n && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = r, this.extensionsUsed.KHR_texture_transform = !0);
  }
  buildMetalRoughTexture(e, t) {
    if (e === t)
      return e;
    function n(f) {
      return f.colorSpace === ot ? function(g) {
        return g < 0.04045 ? g * 0.0773993808 : Math.pow(g * 0.9478672986 + 0.0521327014, 2.4);
      } : function(g) {
        return g;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof Me && (e = ye(e)), t instanceof Me && (t = ye(t));
    const r = e ? e.image : null, i = t ? t.image : null, o = Math.max(r ? r.width : 0, i ? i.width : 0), a = Math.max(r ? r.height : 0, i ? i.height : 0), c = He();
    c.width = o, c.height = a;
    const l = c.getContext("2d");
    l.fillStyle = "#00ffff", l.fillRect(0, 0, o, a);
    const u = l.getImageData(0, 0, o, a);
    if (r) {
      l.drawImage(r, 0, 0, o, a);
      const f = n(e), p = l.getImageData(0, 0, o, a).data;
      for (let g = 2; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    if (i) {
      l.drawImage(i, 0, 0, o, a);
      const f = n(t), p = l.getImageData(0, 0, o, a).data;
      for (let g = 1; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    l.putImageData(u, 0, 0);
    const d = (e || t).clone();
    return d.source = new At(c), d.colorSpace = Dt, d.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), d;
  }
  /**
   * Process a buffer to append to the default one.
   * @param  {ArrayBuffer} buffer
   * @return {Integer}
   */
  processBuffer(e) {
    const t = this.json, n = this.buffers;
    return t.buffers || (t.buffers = [{ byteLength: 0 }]), n.push(e), 0;
  }
  /**
   * Process and generate a BufferView
   * @param  {BufferAttribute} attribute
   * @param  {number} componentType
   * @param  {number} start
   * @param  {number} count
   * @param  {number} target (Optional) Target usage of the BufferView
   * @return {Object}
   */
  processBufferView(e, t, n, r, i) {
    const o = this.json;
    o.bufferViews || (o.bufferViews = []);
    let a;
    switch (t) {
      case y.BYTE:
      case y.UNSIGNED_BYTE:
        a = 1;
        break;
      case y.SHORT:
      case y.UNSIGNED_SHORT:
        a = 2;
        break;
      default:
        a = 4;
    }
    const c = lt(r * e.itemSize * a), l = new DataView(new ArrayBuffer(c));
    let u = 0;
    for (let f = n; f < n + r; f++)
      for (let p = 0; p < e.itemSize; p++) {
        let g;
        e.itemSize > 4 ? g = e.array[f * e.itemSize + p] : (p === 0 ? g = e.getX(f) : p === 1 ? g = e.getY(f) : p === 2 ? g = e.getZ(f) : p === 3 && (g = e.getW(f)), e.normalized === !0 && (g = Se.normalize(g, e.array))), t === y.FLOAT ? l.setFloat32(u, g, !0) : t === y.INT ? l.setInt32(u, g, !0) : t === y.UNSIGNED_INT ? l.setUint32(u, g, !0) : t === y.SHORT ? l.setInt16(u, g, !0) : t === y.UNSIGNED_SHORT ? l.setUint16(u, g, !0) : t === y.BYTE ? l.setInt8(u, g) : t === y.UNSIGNED_BYTE && l.setUint8(u, g), u += a;
      }
    const h = {
      buffer: this.processBuffer(l.buffer),
      byteOffset: this.byteOffset,
      byteLength: c
    };
    return i !== void 0 && (h.target = i), i === y.ARRAY_BUFFER && (h.byteStride = e.itemSize * a), this.byteOffset += c, o.bufferViews.push(h), {
      id: o.bufferViews.length - 1,
      byteLength: 0
    };
  }
  /**
   * Process and generate a BufferView from an image Blob.
   * @param {Blob} blob
   * @return {Promise<Integer>}
   */
  processBufferViewImage(e) {
    const t = this, n = t.json;
    return n.bufferViews || (n.bufferViews = []), new Promise(function(r) {
      const i = new FileReader();
      i.readAsArrayBuffer(e), i.onloadend = function() {
        const o = ve(i.result), a = {
          buffer: t.processBuffer(o),
          byteOffset: t.byteOffset,
          byteLength: o.byteLength
        };
        t.byteOffset += o.byteLength, r(n.bufferViews.push(a) - 1);
      };
    });
  }
  /**
   * Process attribute to generate an accessor
   * @param  {BufferAttribute} attribute Attribute to process
   * @param  {THREE.BufferGeometry} geometry (Optional) Geometry used for truncated draw range
   * @param  {Integer} start (Optional)
   * @param  {Integer} count (Optional)
   * @return {Integer|null} Index of the processed accessor on the "accessors" array
   */
  processAccessor(e, t, n, r) {
    const i = this.json, o = {
      1: "SCALAR",
      2: "VEC2",
      3: "VEC3",
      4: "VEC4",
      9: "MAT3",
      16: "MAT4"
    };
    let a;
    if (e.array.constructor === Float32Array)
      a = y.FLOAT;
    else if (e.array.constructor === Int32Array)
      a = y.INT;
    else if (e.array.constructor === Uint32Array)
      a = y.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array)
      a = y.SHORT;
    else if (e.array.constructor === Uint16Array)
      a = y.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array)
      a = y.BYTE;
    else if (e.array.constructor === Uint8Array)
      a = y.UNSIGNED_BYTE;
    else
      throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name);
    if (n === void 0 && (n = 0), (r === void 0 || r === 1 / 0) && (r = e.count), r === 0)
      return null;
    const c = en(e, n, r);
    let l;
    t !== void 0 && (l = e === t.index ? y.ELEMENT_ARRAY_BUFFER : y.ARRAY_BUFFER);
    const u = this.processBufferView(e, a, n, r, l), h = {
      bufferView: u.id,
      byteOffset: u.byteOffset,
      componentType: a,
      count: r,
      max: c.max,
      min: c.min,
      type: o[e.itemSize]
    };
    return e.normalized === !0 && (h.normalized = !0), i.accessors || (i.accessors = []), i.accessors.push(h) - 1;
  }
  /**
   * Process image
   * @param  {Image} image to process
   * @param  {Integer} format of the image (RGBAFormat)
   * @param  {Boolean} flipY before writing out the image
   * @param  {String} mimeType export format
   * @return {Integer}     Index of the processed texture in the "images" array
   */
  processImage(e, t, n, r = "image/png") {
    if (e !== null) {
      const i = this, o = i.cache, a = i.json, c = i.options, l = i.pending;
      o.images.has(e) || o.images.set(e, {});
      const u = o.images.get(e), h = r + ":flipY/" + n.toString();
      if (u[h] !== void 0)
        return u[h];
      a.images || (a.images = []);
      const d = { mimeType: r }, f = He();
      f.width = Math.min(e.width, c.maxTextureSize), f.height = Math.min(e.height, c.maxTextureSize);
      const p = f.getContext("2d");
      if (n === !0 && (p.translate(0, f.height), p.scale(1, -1)), e.data !== void 0) {
        t !== Ut && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > c.maxTextureSize || e.height > c.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const L = new Uint8ClampedArray(e.height * e.width * 4);
        for (let C = 0; C < L.length; C += 4)
          L[C + 0] = e.data[C + 0], L[C + 1] = e.data[C + 1], L[C + 2] = e.data[C + 2], L[C + 3] = e.data[C + 3];
        p.putImageData(new ImageData(L, e.width, e.height), 0, 0);
      } else
        p.drawImage(e, 0, 0, f.width, f.height);
      c.binary === !0 ? l.push(
        je(f, r).then((L) => i.processBufferViewImage(L)).then((L) => {
          d.bufferView = L;
        })
      ) : f.toDataURL !== void 0 ? d.uri = f.toDataURL(r) : l.push(
        je(f, r).then((L) => new FileReader().readAsDataURL(L)).then((L) => {
          d.uri = L;
        })
      );
      const g = a.images.push(d) - 1;
      return u[h] = g, g;
    } else
      throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.");
  }
  /**
   * Process sampler
   * @param  {Texture} map Texture to process
   * @return {Integer}     Index of the processed texture in the "samplers" array
   */
  processSampler(e) {
    const t = this.json;
    t.samplers || (t.samplers = []);
    const n = {
      magFilter: z[e.magFilter],
      minFilter: z[e.minFilter],
      wrapS: z[e.wrapS],
      wrapT: z[e.wrapT]
    };
    return t.samplers.push(n) - 1;
  }
  /**
   * Process texture
   * @param  {Texture} map Map to process
   * @return {Integer} Index of the processed texture in the "textures" array
   */
  processTexture(e) {
    const n = this.options, r = this.cache, i = this.json;
    if (r.textures.has(e))
      return r.textures.get(e);
    i.textures || (i.textures = []), e instanceof Me && (e = ye(e, n.maxTextureSize));
    let o = e.userData.mimeType;
    o === "image/webp" && (o = "image/png");
    const a = {
      sampler: this.processSampler(e),
      source: this.processImage(e.image, e.format, e.flipY, o)
    };
    e.name && (a.name = e.name), this._invokeAll(function(l) {
      l.writeTexture && l.writeTexture(e, a);
    });
    const c = i.textures.push(a) - 1;
    return r.textures.set(e, c), c;
  }
  /**
   * Process material
   * @param  {THREE.Material} material Material to process
   * @return {Integer|null} Index of the processed material in the "materials" array
   */
  processMaterial(e) {
    const t = this.cache, n = this.json;
    if (t.materials.has(e))
      return t.materials.get(e);
    if (e.isShaderMaterial)
      return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    n.materials || (n.materials = []);
    const r = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== !0 && e.isMeshBasicMaterial !== !0 && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    const i = e.color.toArray().concat([e.opacity]);
    if (ae(i, [1, 1, 1, 1]) || (r.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (r.pbrMetallicRoughness.metallicFactor = e.metalness, r.pbrMetallicRoughness.roughnessFactor = e.roughness) : (r.pbrMetallicRoughness.metallicFactor = 0.5, r.pbrMetallicRoughness.roughnessFactor = 0.5), e.metalnessMap || e.roughnessMap) {
      const a = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), c = {
        index: this.processTexture(a),
        channel: a.channel
      };
      this.applyTextureTransform(c, a), r.pbrMetallicRoughness.metallicRoughnessTexture = c;
    }
    if (e.map) {
      const a = {
        index: this.processTexture(e.map),
        texCoord: e.map.channel
      };
      this.applyTextureTransform(a, e.map), r.pbrMetallicRoughness.baseColorTexture = a;
    }
    if (e.emissive) {
      const a = e.emissive;
      if (Math.max(a.r, a.g, a.b) > 0 && (r.emissiveFactor = e.emissive.toArray()), e.emissiveMap) {
        const l = {
          index: this.processTexture(e.emissiveMap),
          texCoord: e.emissiveMap.channel
        };
        this.applyTextureTransform(l, e.emissiveMap), r.emissiveTexture = l;
      }
    }
    if (e.normalMap) {
      const a = {
        index: this.processTexture(e.normalMap),
        texCoord: e.normalMap.channel
      };
      e.normalScale && e.normalScale.x !== 1 && (a.scale = e.normalScale.x), this.applyTextureTransform(a, e.normalMap), r.normalTexture = a;
    }
    if (e.aoMap) {
      const a = {
        index: this.processTexture(e.aoMap),
        texCoord: e.aoMap.channel
      };
      e.aoMapIntensity !== 1 && (a.strength = e.aoMapIntensity), this.applyTextureTransform(a, e.aoMap), r.occlusionTexture = a;
    }
    e.transparent ? r.alphaMode = "BLEND" : e.alphaTest > 0 && (r.alphaMode = "MASK", r.alphaCutoff = e.alphaTest), e.side === Nt && (r.doubleSided = !0), e.name !== "" && (r.name = e.name), this.serializeUserData(e, r), this._invokeAll(function(a) {
      a.writeMaterial && a.writeMaterial(e, r);
    });
    const o = n.materials.push(r) - 1;
    return t.materials.set(e, o), o;
  }
  /**
   * Process mesh
   * @param  {THREE.Mesh} mesh Mesh to process
   * @return {Integer|null} Index of the processed mesh in the "meshes" array
   */
  processMesh(e) {
    const t = this.cache, n = this.json, r = [e.geometry.uuid];
    if (Array.isArray(e.material))
      for (let m = 0, M = e.material.length; m < M; m++)
        r.push(e.material[m].uuid);
    else
      r.push(e.material.uuid);
    const i = r.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const o = e.geometry;
    let a;
    e.isLineSegments ? a = y.LINES : e.isLineLoop ? a = y.LINE_LOOP : e.isLine ? a = y.LINE_STRIP : e.isPoints ? a = y.POINTS : a = e.material.wireframe ? y.LINES : y.TRIANGLES;
    const c = {}, l = {}, u = [], h = [], d = {
      uv: "TEXCOORD_0",
      uv1: "TEXCOORD_1",
      uv2: "TEXCOORD_2",
      uv3: "TEXCOORD_3",
      color: "COLOR_0",
      skinWeight: "WEIGHTS_0",
      skinIndex: "JOINTS_0"
    }, f = o.getAttribute("normal");
    f !== void 0 && !this.isNormalizedNormalAttribute(f) && (console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."), o.setAttribute("normal", this.createNormalizedNormalAttribute(f)));
    let p = null;
    for (let m in o.attributes) {
      if (m.slice(0, 5) === "morph")
        continue;
      const M = o.attributes[m];
      if (m = d[m] || m.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(m) || (m = "_" + m), t.attributes.has(this.getUID(M))) {
        l[m] = t.attributes.get(this.getUID(M));
        continue;
      }
      p = null;
      const w = M.array;
      m === "JOINTS_0" && !(w instanceof Uint16Array) && !(w instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), p = new q(new Uint16Array(w), M.itemSize, M.normalized));
      const x = this.processAccessor(p || M, o);
      x !== null && (m.startsWith("_") || this.detectMeshQuantization(m, M), l[m] = x, t.attributes.set(this.getUID(M), x));
    }
    if (f !== void 0 && o.setAttribute("normal", f), Object.keys(l).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const m = [], M = [], v = {};
      if (e.morphTargetDictionary !== void 0)
        for (const w in e.morphTargetDictionary)
          v[e.morphTargetDictionary[w]] = w;
      for (let w = 0; w < e.morphTargetInfluences.length; ++w) {
        const x = {};
        let G = !1;
        for (const R in o.morphAttributes) {
          if (R !== "position" && R !== "normal") {
            G || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), G = !0);
            continue;
          }
          const A = o.morphAttributes[R][w], D = R.toUpperCase(), k = o.attributes[R];
          if (t.attributes.has(this.getUID(A, !0))) {
            x[D] = t.attributes.get(this.getUID(A, !0));
            continue;
          }
          const N = A.clone();
          if (!o.morphTargetsRelative)
            for (let b = 0, Z = A.count; b < Z; b++)
              for (let I = 0; I < A.itemSize; I++)
                I === 0 && N.setX(b, A.getX(b) - k.getX(b)), I === 1 && N.setY(b, A.getY(b) - k.getY(b)), I === 2 && N.setZ(b, A.getZ(b) - k.getZ(b)), I === 3 && N.setW(b, A.getW(b) - k.getW(b));
          x[D] = this.processAccessor(N, o), t.attributes.set(this.getUID(k, !0), x[D]);
        }
        h.push(x), m.push(e.morphTargetInfluences[w]), e.morphTargetDictionary !== void 0 && M.push(v[w]);
      }
      c.weights = m, M.length > 0 && (c.extras = {}, c.extras.targetNames = M);
    }
    const g = Array.isArray(e.material);
    if (g && o.groups.length === 0)
      return null;
    let L = !1;
    if (g && o.index === null) {
      const m = [];
      for (let M = 0, v = o.attributes.position.count; M < v; M++)
        m[M] = M;
      o.setIndex(m), L = !0;
    }
    const C = g ? e.material : [e.material], T = g ? o.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let m = 0, M = T.length; m < M; m++) {
      const v = {
        mode: a,
        attributes: l
      };
      if (this.serializeUserData(o, v), h.length > 0 && (v.targets = h), o.index !== null) {
        let x = this.getUID(o.index);
        (T[m].start !== void 0 || T[m].count !== void 0) && (x += ":" + T[m].start + ":" + T[m].count), t.attributes.has(x) ? v.indices = t.attributes.get(x) : (v.indices = this.processAccessor(o.index, o, T[m].start, T[m].count), t.attributes.set(x, v.indices)), v.indices === null && delete v.indices;
      }
      const w = this.processMaterial(C[T[m].materialIndex]);
      w !== null && (v.material = w), u.push(v);
    }
    L === !0 && o.setIndex(null), c.primitives = u, n.meshes || (n.meshes = []), this._invokeAll(function(m) {
      m.writeMesh && m.writeMesh(e, c);
    });
    const _ = n.meshes.push(c) - 1;
    return t.meshes.set(i, _), _;
  }
  /**
   * If a vertex attribute with a
   * [non-standard data type](https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#meshes-overview)
   * is used, it is checked whether it is a valid data type according to the
   * [KHR_mesh_quantization](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
   * extension.
   * In this case the extension is automatically added to the list of used extensions.
   *
   * @param {string} attributeName
   * @param {THREE.BufferAttribute} attribute
   */
  detectMeshQuantization(e, t) {
    if (this.extensionsUsed[Te])
      return;
    let n;
    switch (t.array.constructor) {
      case Int8Array:
        n = "byte";
        break;
      case Uint8Array:
        n = "unsigned byte";
        break;
      case Int16Array:
        n = "short";
        break;
      case Uint16Array:
        n = "unsigned short";
        break;
      default:
        return;
    }
    t.normalized && (n += " normalized");
    const r = e.split("_", 1)[0];
    $e[r] && $e[r].includes(n) && (this.extensionsUsed[Te] = !0, this.extensionsRequired[Te] = !0);
  }
  /**
   * Process camera
   * @param  {THREE.Camera} camera Camera to process
   * @return {Integer}      Index of the processed mesh in the "camera" array
   */
  processCamera(e) {
    const t = this.json;
    t.cameras || (t.cameras = []);
    const n = e.isOrthographicCamera, r = {
      type: n ? "orthographic" : "perspective"
    };
    return n ? r.orthographic = {
      xmag: e.right * 2,
      ymag: e.top * 2,
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    } : r.perspective = {
      aspectRatio: e.aspect,
      yfov: Se.degToRad(e.fov),
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    }, e.name !== "" && (r.name = e.type), t.cameras.push(r) - 1;
  }
  /**
   * Creates glTF animation entry from AnimationClip object.
   *
   * Status:
   * - Only properties listed in PATH_PROPERTIES may be animated.
   *
   * @param {THREE.AnimationClip} clip
   * @param {THREE.Object3D} root
   * @return {number|null}
   */
  processAnimation(e, t) {
    const n = this.json, r = this.nodeMap;
    n.animations || (n.animations = []), e = De.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, o = [], a = [];
    for (let c = 0; c < i.length; ++c) {
      const l = i[c], u = de.parseTrackName(l.name);
      let h = de.findNode(t, u.nodeName);
      const d = ze[u.propertyName];
      if (u.objectName === "bones" && (h.isSkinnedMesh === !0 ? h = h.skeleton.getBoneByName(u.objectIndex) : h = void 0), !h || !d)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', l.name), null;
      const f = 1;
      let p = l.values.length / l.times.length;
      d === ze.morphTargetInfluences && (p /= h.morphTargetInfluences.length);
      let g;
      l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === !0 ? (g = "CUBICSPLINE", p /= 3) : l.getInterpolation() === Bt ? g = "STEP" : g = "LINEAR", a.push({
        input: this.processAccessor(new q(l.times, f)),
        output: this.processAccessor(new q(l.values, p)),
        interpolation: g
      }), o.push({
        sampler: a.length - 1,
        target: {
          node: r.get(h),
          path: d
        }
      });
    }
    return n.animations.push({
      name: e.name || "clip_" + n.animations.length,
      samplers: a,
      channels: o
    }), n.animations.length - 1;
  }
  /**
   * @param {THREE.Object3D} object
   * @return {number|null}
   */
  processSkin(e) {
    const t = this.json, n = this.nodeMap, r = t.nodes[n.get(e)], i = e.skeleton;
    if (i === void 0)
      return null;
    const o = e.skeleton.bones[0];
    if (o === void 0)
      return null;
    const a = [], c = new Float32Array(i.bones.length * 16), l = new at();
    for (let h = 0; h < i.bones.length; ++h)
      a.push(n.get(i.bones[h])), l.copy(i.boneInverses[h]), l.multiply(e.bindMatrix).toArray(c, h * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new q(c, 16)),
      joints: a,
      skeleton: n.get(o)
    }), r.skin = t.skins.length - 1;
  }
  /**
   * Process Object3D node
   * @param  {THREE.Object3D} node Object3D to processNode
   * @return {Integer} Index of the node in the nodes list
   */
  processNode(e) {
    const t = this.json, n = this.options, r = this.nodeMap;
    t.nodes || (t.nodes = []);
    const i = {};
    if (n.trs) {
      const a = e.quaternion.toArray(), c = e.position.toArray(), l = e.scale.toArray();
      ae(a, [0, 0, 0, 1]) || (i.rotation = a), ae(c, [0, 0, 0]) || (i.translation = c), ae(l, [1, 1, 1]) || (i.scale = l);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), Qt(e.matrix) === !1 && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else
      e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let c = 0, l = e.children.length; c < l; c++) {
        const u = e.children[c];
        if (u.visible || n.onlyVisible === !1) {
          const h = this.processNode(u);
          h !== null && a.push(h);
        }
      }
      a.length > 0 && (i.children = a);
    }
    this._invokeAll(function(a) {
      a.writeNode && a.writeNode(e, i);
    });
    const o = t.nodes.push(i) - 1;
    return r.set(e, o), o;
  }
  /**
   * Process Scene
   * @param  {Scene} node Scene to process
   */
  processScene(e) {
    const t = this.json, n = this.options;
    t.scenes || (t.scenes = [], t.scene = 0);
    const r = {};
    e.name !== "" && (r.name = e.name), t.scenes.push(r);
    const i = [];
    for (let o = 0, a = e.children.length; o < a; o++) {
      const c = e.children[o];
      if (c.visible || n.onlyVisible === !1) {
        const l = this.processNode(c);
        l !== null && i.push(l);
      }
    }
    i.length > 0 && (r.nodes = i), this.serializeUserData(e, r);
  }
  /**
   * Creates a Scene to hold a list of objects and parse it
   * @param  {Array} objects List of objects to process
   */
  processObjects(e) {
    const t = new be();
    t.name = "AuxScene";
    for (let n = 0; n < e.length; n++)
      t.children.push(e[n]);
    this.processScene(t);
  }
  /**
   * @param {THREE.Object3D|Array<THREE.Object3D>} input
   */
  processInput(e) {
    const t = this.options;
    e = e instanceof Array ? e : [e], this._invokeAll(function(r) {
      r.beforeParse && r.beforeParse(e);
    });
    const n = [];
    for (let r = 0; r < e.length; r++)
      e[r] instanceof be ? this.processScene(e[r]) : n.push(e[r]);
    n.length > 0 && this.processObjects(n);
    for (let r = 0; r < this.skins.length; ++r)
      this.processSkin(this.skins[r]);
    for (let r = 0; r < t.animations.length; ++r)
      this.processAnimation(t.animations[r], e[0]);
    this._invokeAll(function(r) {
      r.afterParse && r.afterParse(e);
    });
  }
  _invokeAll(e) {
    for (let t = 0, n = this.plugins.length; t < n; t++)
      e(this.plugins[t]);
  }
}
class nn {
  constructor(e) {
    this.writer = e, this.name = "KHR_lights_punctual";
  }
  writeNode(e, t) {
    if (!e.isLight)
      return;
    if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
      console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.", e);
      return;
    }
    const n = this.writer, r = n.json, i = n.extensionsUsed, o = {};
    e.name && (o.name = e.name), o.color = e.color.toArray(), o.intensity = e.intensity, e.isDirectionalLight ? o.type = "directional" : e.isPointLight ? (o.type = "point", e.distance > 0 && (o.range = e.distance)) : e.isSpotLight && (o.type = "spot", e.distance > 0 && (o.range = e.distance), o.spot = {}, o.spot.innerConeAngle = (1 - e.penumbra) * e.angle, o.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."), i[this.name] || (r.extensions = r.extensions || {}, r.extensions[this.name] = { lights: [] }, i[this.name] = !0);
    const a = r.extensions[this.name].lights;
    a.push(o), t.extensions = t.extensions || {}, t.extensions[this.name] = { light: a.length - 1 };
  }
}
class sn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_unlit";
  }
  writeMaterial(e, t) {
    if (!e.isMeshBasicMaterial)
      return;
    const r = this.writer.extensionsUsed;
    t.extensions = t.extensions || {}, t.extensions[this.name] = {}, r[this.name] = !0, t.pbrMetallicRoughness.metallicFactor = 0, t.pbrMetallicRoughness.roughnessFactor = 0.9;
  }
}
class rn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      const o = {
        index: n.processTexture(e.clearcoatMap),
        texCoord: e.clearcoatMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatMap), i.clearcoatTexture = o;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      const o = {
        index: n.processTexture(e.clearcoatRoughnessMap),
        texCoord: e.clearcoatRoughnessMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = o;
    }
    if (e.clearcoatNormalMap) {
      const o = {
        index: n.processTexture(e.clearcoatNormalMap),
        texCoord: e.clearcoatNormalMap.channel
      };
      n.applyTextureTransform(o, e.clearcoatNormalMap), i.clearcoatNormalTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class on {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      const o = {
        index: n.processTexture(e.iridescenceMap),
        texCoord: e.iridescenceMap.channel
      };
      n.applyTextureTransform(o, e.iridescenceMap), i.iridescenceTexture = o;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      const o = {
        index: n.processTexture(e.iridescenceThicknessMap),
        texCoord: e.iridescenceThicknessMap.channel
      };
      n.applyTextureTransform(o, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class an {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      const o = {
        index: n.processTexture(e.transmissionMap),
        texCoord: e.transmissionMap.channel
      };
      n.applyTextureTransform(o, e.transmissionMap), i.transmissionTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class ln {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      const o = {
        index: n.processTexture(e.thicknessMap),
        texCoord: e.thicknessMap.channel
      };
      n.applyTextureTransform(o, e.thicknessMap), i.thicknessTexture = o;
    }
    i.attenuationDistance = e.attenuationDistance, i.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class cn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_ior";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.ior === 1.5)
      return;
    const r = this.writer.extensionsUsed, i = {};
    i.ior = e.ior, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class un {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(Wt) && !e.specularIntensityMap && !e.specularColorMap)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      const o = {
        index: n.processTexture(e.specularIntensityMap),
        texCoord: e.specularIntensityMap.channel
      };
      n.applyTextureTransform(o, e.specularIntensityMap), i.specularTexture = o;
    }
    if (e.specularColorMap) {
      const o = {
        index: n.processTexture(e.specularColorMap),
        texCoord: e.specularColorMap.channel
      };
      n.applyTextureTransform(o, e.specularColorMap), i.specularColorTexture = o;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class hn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      const o = {
        index: n.processTexture(e.sheenRoughnessMap),
        texCoord: e.sheenRoughnessMap.channel
      };
      n.applyTextureTransform(o, e.sheenRoughnessMap), i.sheenRoughnessTexture = o;
    }
    if (e.sheenColorMap) {
      const o = {
        index: n.processTexture(e.sheenColorMap),
        texCoord: e.sheenColorMap.channel
      };
      n.applyTextureTransform(o, e.sheenColorMap), i.sheenColorTexture = o;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class fn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      const o = { index: n.processTexture(e.anisotropyMap) };
      n.applyTextureTransform(o, e.anisotropyMap), i.anisotropyTexture = o;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class pn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_emissive_strength";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.emissiveIntensity === 1)
      return;
    const r = this.writer.extensionsUsed, i = {};
    i.emissiveStrength = e.emissiveIntensity, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class dn {
  constructor(e) {
    this.writer = e, this.name = "EXT_materials_bump";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.bumpScale === 1 && !e.bumpMap)
      return;
    const n = this.writer, r = n.extensionsUsed, i = {};
    if (e.bumpMap) {
      const o = {
        index: n.processTexture(e.bumpMap),
        texCoord: e.bumpMap.channel
      };
      n.applyTextureTransform(o, e.bumpMap), i.bumpTexture = o;
    }
    i.bumpFactor = e.bumpScale, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class gn {
  constructor(e) {
    this.writer = e, this.name = "EXT_mesh_gpu_instancing";
  }
  writeNode(e, t) {
    if (!e.isInstancedMesh)
      return;
    const n = this.writer, r = e, i = new Float32Array(r.count * 3), o = new Float32Array(r.count * 4), a = new Float32Array(r.count * 3), c = new at(), l = new pe(), u = new Ft(), h = new pe();
    for (let f = 0; f < r.count; f++)
      r.getMatrixAt(f, c), c.decompose(l, u, h), l.toArray(i, f * 3), u.toArray(o, f * 4), h.toArray(a, f * 3);
    const d = {
      TRANSLATION: n.processAccessor(new q(i, 3)),
      ROTATION: n.processAccessor(new q(o, 4)),
      SCALE: n.processAccessor(new q(a, 3))
    };
    r.instanceColor && (d._COLOR_0 = n.processAccessor(r.instanceColor)), t.extensions = t.extensions || {}, t.extensions[this.name] = { attributes: d }, n.extensionsUsed[this.name] = !0, n.extensionsRequired[this.name] = !0;
  }
}
De.Utils = {
  insertKeyframe: function(s, e) {
    const n = s.getValueSize(), r = new s.TimeBufferType(s.times.length + 1), i = new s.ValueBufferType(s.values.length + n), o = s.createInterpolant(new s.ValueBufferType(n));
    let a;
    if (s.times.length === 0) {
      r[0] = e;
      for (let c = 0; c < n; c++)
        i[c] = 0;
      a = 0;
    } else if (e < s.times[0]) {
      if (Math.abs(s.times[0] - e) < 1e-3)
        return 0;
      r[0] = e, r.set(s.times, 1), i.set(o.evaluate(e), 0), i.set(s.values, n), a = 0;
    } else if (e > s.times[s.times.length - 1]) {
      if (Math.abs(s.times[s.times.length - 1] - e) < 1e-3)
        return s.times.length - 1;
      r[r.length - 1] = e, r.set(s.times, 0), i.set(s.values, 0), i.set(o.evaluate(e), s.values.length), a = r.length - 1;
    } else
      for (let c = 0; c < s.times.length; c++) {
        if (Math.abs(s.times[c] - e) < 1e-3)
          return c;
        if (s.times[c] < e && s.times[c + 1] > e) {
          r.set(s.times.slice(0, c + 1), 0), r[c + 1] = e, r.set(s.times.slice(c + 1), c + 2), i.set(s.values.slice(0, (c + 1) * n), 0), i.set(o.evaluate(e), (c + 1) * n), i.set(s.values.slice((c + 1) * n), (c + 2) * n), a = c + 1;
          break;
        }
      }
    return s.times = r, s.values = i, a;
  },
  mergeMorphTargetTracks: function(s, e) {
    const t = [], n = {}, r = s.tracks;
    for (let i = 0; i < r.length; ++i) {
      let o = r[i];
      const a = de.parseTrackName(o.name), c = de.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(o);
        continue;
      }
      if (o.createInterpolant !== o.InterpolantFactoryMethodDiscrete && o.createInterpolant !== o.InterpolantFactoryMethodLinear) {
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), o = o.clone(), o.setInterpolation(kt);
      }
      const l = c.morphTargetInfluences.length, u = c.morphTargetDictionary[a.propertyIndex];
      if (u === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let h;
      if (n[c.uuid] === void 0) {
        h = o.clone();
        const f = new h.ValueBufferType(l * h.times.length);
        for (let p = 0; p < h.times.length; p++)
          f[p * l + u] = h.values[p];
        h.name = (a.nodeName || "") + ".morphTargetInfluences", h.values = f, n[c.uuid] = h, t.push(h);
        continue;
      }
      const d = o.createInterpolant(new o.ValueBufferType(1));
      h = n[c.uuid];
      for (let f = 0; f < h.times.length; f++)
        h.values[f * l + u] = d.evaluate(h.times[f]);
      for (let f = 0; f < o.times.length; f++) {
        const p = this.insertKeyframe(h, o.times[f]);
        h.values[p * l + u] = o.values[f];
      }
    }
    return s.tracks = t, s;
  }
};
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/
var We = function(s) {
  return URL.createObjectURL(new Blob([s], { type: "text/javascript" }));
};
try {
  URL.revokeObjectURL(We(""));
} catch {
  We = function(e) {
    return "data:application/javascript;charset=UTF-8," + encodeURI(e);
  };
}
var O = Uint8Array, P = Uint16Array, ne = Uint32Array, Ue = new O([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ne = new O([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Ye = new O([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ct = function(s, e) {
  for (var t = new P(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << s[n - 1];
  for (var r = new ne(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      r[i] = i - t[n] << 5 | n;
  return [t, r];
}, ut = ct(Ue, 2), mn = ut[0], Ie = ut[1];
mn[28] = 258, Ie[258] = 28;
var xn = ct(Ne, 0), Ke = xn[1], Re = new P(32768);
for (var S = 0; S < 32768; ++S) {
  var K = (S & 43690) >>> 1 | (S & 21845) << 1;
  K = (K & 52428) >>> 2 | (K & 13107) << 2, K = (K & 61680) >>> 4 | (K & 3855) << 4, Re[S] = ((K & 65280) >>> 8 | (K & 255) << 8) >>> 1;
}
var le = function(s, e, t) {
  for (var n = s.length, r = 0, i = new P(e); r < n; ++r)
    ++i[s[r] - 1];
  var o = new P(e);
  for (r = 0; r < e; ++r)
    o[r] = o[r - 1] + i[r - 1] << 1;
  var a;
  if (t) {
    a = new P(1 << e);
    var c = 15 - e;
    for (r = 0; r < n; ++r)
      if (s[r])
        for (var l = r << 4 | s[r], u = e - s[r], h = o[s[r] - 1]++ << u, d = h | (1 << u) - 1; h <= d; ++h)
          a[Re[h] >>> c] = l;
  } else
    for (a = new P(n), r = 0; r < n; ++r)
      s[r] && (a[r] = Re[o[s[r] - 1]++] >>> 15 - s[r]);
  return a;
}, J = new O(288);
for (var S = 0; S < 144; ++S)
  J[S] = 8;
for (var S = 144; S < 256; ++S)
  J[S] = 9;
for (var S = 256; S < 280; ++S)
  J[S] = 7;
for (var S = 280; S < 288; ++S)
  J[S] = 8;
var ge = new O(32);
for (var S = 0; S < 32; ++S)
  ge[S] = 5;
var wn = /* @__PURE__ */ le(J, 9, 0), Ln = /* @__PURE__ */ le(ge, 5, 0), ht = function(s) {
  return (s / 8 | 0) + (s & 7 && 1);
}, ft = function(s, e, t) {
  (e == null || e < 0) && (e = 0), (t == null || t > s.length) && (t = s.length);
  var n = new (s instanceof P ? P : s instanceof ne ? ne : O)(t - e);
  return n.set(s.subarray(e, t)), n;
}, W = function(s, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  s[n] |= t, s[n + 1] |= t >>> 8;
}, ie = function(s, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  s[n] |= t, s[n + 1] |= t >>> 8, s[n + 2] |= t >>> 16;
}, Ee = function(s, e) {
  for (var t = [], n = 0; n < s.length; ++n)
    s[n] && t.push({ s: n, f: s[n] });
  var r = t.length, i = t.slice();
  if (!r)
    return [Be, 0];
  if (r == 1) {
    var o = new O(t[0].s + 1);
    return o[t[0].s] = 1, [o, 1];
  }
  t.sort(function(M, v) {
    return M.f - v.f;
  }), t.push({ s: -1, f: 25001 });
  var a = t[0], c = t[1], l = 0, u = 1, h = 2;
  for (t[0] = { s: -1, f: a.f + c.f, l: a, r: c }; u != r - 1; )
    a = t[t[l].f < t[h].f ? l++ : h++], c = t[l != u && t[l].f < t[h].f ? l++ : h++], t[u++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var d = i[0].s, n = 1; n < r; ++n)
    i[n].s > d && (d = i[n].s);
  var f = new P(d + 1), p = _e(t[u - 1], f, 0);
  if (p > e) {
    var n = 0, g = 0, L = p - e, C = 1 << L;
    for (i.sort(function(v, w) {
      return f[w.s] - f[v.s] || v.f - w.f;
    }); n < r; ++n) {
      var T = i[n].s;
      if (f[T] > e)
        g += C - (1 << p - f[T]), f[T] = e;
      else
        break;
    }
    for (g >>>= L; g > 0; ) {
      var _ = i[n].s;
      f[_] < e ? g -= 1 << e - f[_]++ - 1 : ++n;
    }
    for (; n >= 0 && g; --n) {
      var m = i[n].s;
      f[m] == e && (--f[m], ++g);
    }
    p = e;
  }
  return [new O(f), p];
}, _e = function(s, e, t) {
  return s.s == -1 ? Math.max(_e(s.l, e, t + 1), _e(s.r, e, t + 1)) : e[s.s] = t;
}, Xe = function(s) {
  for (var e = s.length; e && !s[--e]; )
    ;
  for (var t = new P(++e), n = 0, r = s[0], i = 1, o = function(c) {
    t[n++] = c;
  }, a = 1; a <= e; ++a)
    if (s[a] == r && a != e)
      ++i;
    else {
      if (!r && i > 2) {
        for (; i > 138; i -= 138)
          o(32754);
        i > 2 && (o(i > 10 ? i - 11 << 5 | 28690 : i - 3 << 5 | 12305), i = 0);
      } else if (i > 3) {
        for (o(r), --i; i > 6; i -= 6)
          o(8304);
        i > 2 && (o(i - 3 << 5 | 8208), i = 0);
      }
      for (; i--; )
        o(r);
      i = 1, r = s[a];
    }
  return [t.subarray(0, n), e];
}, oe = function(s, e) {
  for (var t = 0, n = 0; n < e.length; ++n)
    t += s[n] * e[n];
  return t;
}, fe = function(s, e, t) {
  var n = t.length, r = ht(e + 2);
  s[r] = n & 255, s[r + 1] = n >>> 8, s[r + 2] = s[r] ^ 255, s[r + 3] = s[r + 1] ^ 255;
  for (var i = 0; i < n; ++i)
    s[r + i + 4] = t[i];
  return (r + 4 + n) * 8;
}, qe = function(s, e, t, n, r, i, o, a, c, l, u) {
  W(e, u++, t), ++r[256];
  for (var h = Ee(r, 15), d = h[0], f = h[1], p = Ee(i, 15), g = p[0], L = p[1], C = Xe(d), T = C[0], _ = C[1], m = Xe(g), M = m[0], v = m[1], w = new P(19), x = 0; x < T.length; ++x)
    w[T[x] & 31]++;
  for (var x = 0; x < M.length; ++x)
    w[M[x] & 31]++;
  for (var G = Ee(w, 7), R = G[0], A = G[1], D = 19; D > 4 && !R[Ye[D - 1]]; --D)
    ;
  var k = l + 5 << 3, N = oe(r, J) + oe(i, ge) + o, b = oe(r, d) + oe(i, g) + o + 14 + 3 * D + oe(w, R) + (2 * w[16] + 3 * w[17] + 7 * w[18]);
  if (k <= N && k <= b)
    return fe(e, u, s.subarray(c, c + l));
  var Z, I, V, Y;
  if (W(e, u, 1 + (b < N)), u += 2, b < N) {
    Z = le(d, f, 0), I = d, V = le(g, L, 0), Y = g;
    var xe = le(R, A, 0);
    W(e, u, _ - 257), W(e, u + 5, v - 1), W(e, u + 10, D - 4), u += 14;
    for (var x = 0; x < D; ++x)
      W(e, u + 3 * x, R[Ye[x]]);
    u += 3 * D;
    for (var H = [T, M], se = 0; se < 2; ++se)
      for (var Q = H[se], x = 0; x < Q.length; ++x) {
        var j = Q[x] & 31;
        W(e, u, xe[j]), u += R[j], j > 15 && (W(e, u, Q[x] >>> 5 & 127), u += Q[x] >>> 12);
      }
  } else
    Z = wn, I = J, V = Ln, Y = ge;
  for (var x = 0; x < a; ++x)
    if (n[x] > 255) {
      var j = n[x] >>> 18 & 31;
      ie(e, u, Z[j + 257]), u += I[j + 257], j > 7 && (W(e, u, n[x] >>> 23 & 31), u += Ue[j]);
      var $ = n[x] & 31;
      ie(e, u, V[$]), u += Y[$], $ > 3 && (ie(e, u, n[x] >>> 5 & 8191), u += Ne[$]);
    } else
      ie(e, u, Z[n[x]]), u += I[n[x]];
  return ie(e, u, Z[256]), u + I[256];
}, Mn = /* @__PURE__ */ new ne([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Be = /* @__PURE__ */ new O(0), Cn = function(s, e, t, n, r, i) {
  var o = s.length, a = new O(n + o + 5 * (1 + Math.ceil(o / 7e3)) + r), c = a.subarray(n, a.length - r), l = 0;
  if (!e || o < 8)
    for (var u = 0; u <= o; u += 65535) {
      var h = u + 65535;
      h < o ? l = fe(c, l, s.subarray(u, h)) : (c[u] = i, l = fe(c, l, s.subarray(u, o)));
    }
  else {
    for (var d = Mn[e - 1], f = d >>> 13, p = d & 8191, g = (1 << t) - 1, L = new P(32768), C = new P(g + 1), T = Math.ceil(t / 3), _ = 2 * T, m = function(Le) {
      return (s[Le] ^ s[Le + 1] << T ^ s[Le + 2] << _) & g;
    }, M = new ne(25e3), v = new P(288), w = new P(32), x = 0, G = 0, u = 0, R = 0, A = 0, D = 0; u < o; ++u) {
      var k = m(u), N = u & 32767, b = C[k];
      if (L[N] = b, C[k] = N, A <= u) {
        var Z = o - u;
        if ((x > 7e3 || R > 24576) && Z > 423) {
          l = qe(s, c, 0, M, v, w, G, R, D, u - D, l), R = x = G = 0, D = u;
          for (var I = 0; I < 286; ++I)
            v[I] = 0;
          for (var I = 0; I < 30; ++I)
            w[I] = 0;
        }
        var V = 2, Y = 0, xe = p, H = N - b & 32767;
        if (Z > 2 && k == m(u - H))
          for (var se = Math.min(f, Z) - 1, Q = Math.min(32767, u), j = Math.min(258, Z); H <= Q && --xe && N != b; ) {
            if (s[u + V] == s[u + V - H]) {
              for (var $ = 0; $ < j && s[u + $] == s[u + $ - H]; ++$)
                ;
              if ($ > V) {
                if (V = $, Y = H, $ > se)
                  break;
                for (var xt = Math.min(H, $ - 2), Fe = 0, I = 0; I < xt; ++I) {
                  var we = u - H + I + 32768 & 32767, wt = L[we], ke = we - wt + 32768 & 32767;
                  ke > Fe && (Fe = ke, b = we);
                }
              }
            }
            N = b, b = L[N], H += N - b + 32768 & 32767;
          }
        if (Y) {
          M[R++] = 268435456 | Ie[V] << 18 | Ke[Y];
          var Pe = Ie[V] & 31, Oe = Ke[Y] & 31;
          G += Ue[Pe] + Ne[Oe], ++v[257 + Pe], ++w[Oe], A = u + V, ++x;
        } else
          M[R++] = s[u], ++v[s[u]];
      }
    }
    l = qe(s, c, i, M, v, w, G, R, D, u - D, l), !i && l & 7 && (l = fe(c, l + 1, Be));
  }
  return ft(a, 0, n + ht(l) + r);
}, yn = /* @__PURE__ */ function() {
  for (var s = new ne(256), e = 0; e < 256; ++e) {
    for (var t = e, n = 9; --n; )
      t = (t & 1 && 3988292384) ^ t >>> 1;
    s[e] = t;
  }
  return s;
}(), Tn = function() {
  var s = -1;
  return {
    p: function(e) {
      for (var t = s, n = 0; n < e.length; ++n)
        t = yn[t & 255 ^ e[n]] ^ t >>> 8;
      s = t;
    },
    d: function() {
      return ~s;
    }
  };
}, vn = function(s, e, t, n, r) {
  return Cn(s, e.level == null ? 6 : e.level, e.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(s.length))) * 1.5) : 12 + e.mem, t, n, !r);
}, pt = function(s, e) {
  var t = {};
  for (var n in s)
    t[n] = s[n];
  for (var n in e)
    t[n] = e[n];
  return t;
}, B = function(s, e, t) {
  for (; t; ++e)
    s[e] = t, t >>>= 8;
};
function En(s, e) {
  return vn(s, e || {}, 0, 0);
}
var dt = function(s, e, t, n) {
  for (var r in s) {
    var i = s[r], o = e + r;
    i instanceof O ? t[o] = [i, n] : Array.isArray(i) ? t[o] = [i[0], pt(n, i[1])] : dt(i, o + "/", t, n);
  }
}, Je = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), bn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Sn = 0;
try {
  bn.decode(Be, { stream: !0 }), Sn = 1;
} catch {
}
function me(s, e) {
  if (e) {
    for (var t = new O(s.length), n = 0; n < s.length; ++n)
      t[n] = s.charCodeAt(n);
    return t;
  }
  if (Je)
    return Je.encode(s);
  for (var r = s.length, i = new O(s.length + (s.length >> 1)), o = 0, a = function(u) {
    i[o++] = u;
  }, n = 0; n < r; ++n) {
    if (o + 5 > i.length) {
      var c = new O(o + 8 + (r - n << 1));
      c.set(i), i = c;
    }
    var l = s.charCodeAt(n);
    l < 128 || e ? a(l) : l < 2048 ? (a(192 | l >> 6), a(128 | l & 63)) : l > 55295 && l < 57344 ? (l = 65536 + (l & 1047552) | s.charCodeAt(++n) & 1023, a(240 | l >> 18), a(128 | l >> 12 & 63), a(128 | l >> 6 & 63), a(128 | l & 63)) : (a(224 | l >> 12), a(128 | l >> 6 & 63), a(128 | l & 63));
  }
  return ft(i, 0, o);
}
var Ae = function(s) {
  var e = 0;
  if (s)
    for (var t in s) {
      var n = s[t].length;
      if (n > 65535)
        throw "extra field too long";
      e += n + 4;
    }
  return e;
}, Qe = function(s, e, t, n, r, i, o, a) {
  var c = n.length, l = t.extra, u = a && a.length, h = Ae(l);
  B(s, e, o != null ? 33639248 : 67324752), e += 4, o != null && (s[e++] = 20, s[e++] = t.os), s[e] = 20, e += 2, s[e++] = t.flag << 1 | (i == null && 8), s[e++] = r && 8, s[e++] = t.compression & 255, s[e++] = t.compression >> 8;
  var d = new Date(t.mtime == null ? Date.now() : t.mtime), f = d.getFullYear() - 1980;
  if (f < 0 || f > 119)
    throw "date not in range 1980-2099";
  if (B(s, e, f << 25 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >>> 1), e += 4, i != null && (B(s, e, t.crc), B(s, e + 4, i), B(s, e + 8, t.size)), B(s, e + 12, c), B(s, e + 14, h), e += 16, o != null && (B(s, e, u), B(s, e + 6, t.attrs), B(s, e + 10, o), e += 14), s.set(n, e), e += c, h)
    for (var p in l) {
      var g = l[p], L = g.length;
      B(s, e, +p), B(s, e + 2, L), s.set(g, e + 4), e += 4 + L;
    }
  return u && (s.set(a, e), e += u), e;
}, In = function(s, e, t, n, r) {
  B(s, e, 101010256), B(s, e + 8, t), B(s, e + 10, t), B(s, e + 12, n), B(s, e + 16, r);
};
function Rn(s, e) {
  e || (e = {});
  var t = {}, n = [];
  dt(s, "", t, e);
  var r = 0, i = 0;
  for (var o in t) {
    var a = t[o], c = a[0], l = a[1], u = l.level == 0 ? 0 : 8, h = me(o), d = h.length, f = l.comment, p = f && me(f), g = p && p.length, L = Ae(l.extra);
    if (d > 65535)
      throw "filename too long";
    var C = u ? En(c, l) : c, T = C.length, _ = Tn();
    _.p(c), n.push(pt(l, {
      size: c.length,
      crc: _.d(),
      c: C,
      f: h,
      m: p,
      u: d != o.length || p && f.length != g,
      o: r,
      compression: u
    })), r += 30 + d + L + T, i += 76 + 2 * (d + L) + (g || 0) + T;
  }
  for (var m = new O(i + 22), M = r, v = i - r, w = 0; w < n.length; ++w) {
    var h = n[w];
    Qe(m, h.o, h, h.f, h.u, h.c.length);
    var x = 30 + h.f.length + Ae(h.extra);
    m.set(h.c, h.o + x), Qe(m, r, h, h.f, h.u, h.c.length, h.o, h.m), r += 16 + x + (h.m ? h.m.length : 0);
  }
  return In(m, r, n.length, v, M), m;
}
class _n {
  async parse(e, t = {}) {
    t = Object.assign(
      {
        ar: {
          anchoring: { type: "plane" },
          planeAnchoring: { alignment: "horizontal" }
        },
        quickLookCompatible: !1
      },
      t
    );
    const n = {}, r = "model.usda";
    n[r] = null;
    let i = gt();
    i += Dn(t);
    const o = {}, a = {};
    e.traverseVisible((l) => {
      if (l.isMesh) {
        const u = l.geometry, h = l.material;
        if (h.isMeshStandardMaterial) {
          const d = "geometries/Geometry_" + u.id + ".usda";
          if (!(d in n)) {
            const f = Fn(u);
            n[d] = Nn(f);
          }
          h.uuid in o || (o[h.uuid] = h), i += Bn(l, u, h);
        } else
          console.warn(
            "THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",
            l
          );
      } else
        l.isCamera && (i += Hn(l));
    }), i += Un(), i += zn(o, a, t.quickLookCompatible), n[r] = me(i), i = null;
    for (const l in a) {
      const u = a[l], h = An(u.image, u.flipY), d = await new Promise(
        (f) => h.toBlob(f, "image/png", 1)
      );
      n[`textures/Texture_${l}.png`] = new Uint8Array(
        await d.arrayBuffer()
      );
    }
    let c = 0;
    for (const l in n) {
      const u = n[l], h = 34 + l.length;
      c += h;
      const d = c & 63;
      if (d !== 4) {
        const f = 64 - d, p = new Uint8Array(f);
        n[l] = [u, { extra: { 12345: p } }];
      }
      c = u.length;
    }
    return Rn(n, { level: 0 });
  }
}
function An(s, e) {
  if (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas || typeof ImageBitmap < "u" && s instanceof ImageBitmap) {
    const t = document.createElement("canvas");
    t.width = s.width, t.height = s.height;
    const n = t.getContext("2d");
    return e === !0 && (n.translate(0, t.height), n.scale(1, -1)), n.drawImage(s, 0, 0, t.width, t.height), t;
  } else
    throw new Error(
      "THREE.USDZExporter: No valid image data found. Unable to process texture."
    );
}
const F = 7;
function gt() {
  return `#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`;
}
function Dn(s) {
  return `def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${s.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${s.ar.planeAnchoring.alignment}"

`;
}
function Un() {
  return `
		}
	}
}

`;
}
function Nn(s) {
  let e = gt();
  return e += s, me(e);
}
function Bn(s, e, t) {
  const n = "Object_" + s.id, r = mt(s.matrixWorld);
  return s.matrixWorld.determinant() < 0 && console.warn(
    "THREE.USDZExporter: USDZ does not support negative scales",
    s
  ), `def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${r}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`;
}
function mt(s) {
  const e = s.elements;
  return `( ${ue(e, 0)}, ${ue(
    e,
    4
  )}, ${ue(e, 8)}, ${ue(e, 12)} )`;
}
function ue(s, e) {
  return `(${s[e + 0]}, ${s[e + 1]}, ${s[e + 2]}, ${s[e + 3]})`;
}
function Fn(s) {
  return `
def "Geometry"
{
${kn(s)}
}
`;
}
function kn(s) {
  const e = "Geometry", t = s.attributes, n = t.position.count;
  return `
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${Pn(s)}]
		int[] faceVertexIndices = [${On(s)}]
		normal3f[] normals = [${et(t.normal, n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${et(t.position, n)}]
${$n(t, n)}
		uniform token subdivisionScheme = "none"
	}
`;
}
function Pn(s) {
  const e = s.index !== null ? s.index.count : s.attributes.position.count;
  return Array(e / 3).fill(3).join(", ");
}
function On(s) {
  const e = s.index, t = [];
  if (e !== null)
    for (let n = 0; n < e.count; n++)
      t.push(e.getX(n));
  else {
    const n = s.attributes.position.count;
    for (let r = 0; r < n; r++)
      t.push(r);
  }
  return t.join(", ");
}
function et(s, e) {
  if (s === void 0)
    return console.warn("USDZExporter: Normals missing."), Array(e).fill("(0, 0, 0)").join(", ");
  const t = [];
  for (let n = 0; n < s.count; n++) {
    const r = s.getX(n), i = s.getY(n), o = s.getZ(n);
    t.push(
      `(${r.toPrecision(F)}, ${i.toPrecision(
        F
      )}, ${o.toPrecision(F)})`
    );
  }
  return t.join(", ");
}
function Gn(s, e) {
  if (s === void 0)
    return console.warn("USDZExporter: UVs missing."), Array(e).fill("(0, 0)").join(", ");
  const t = [];
  for (let n = 0; n < s.count; n++) {
    const r = s.getX(n), i = s.getY(n);
    t.push(
      `(${r.toPrecision(F)}, ${1 - i.toPrecision(F)})`
    );
  }
  return t.join(", ");
}
function $n(s, e) {
  let t = "";
  for (let n = 0; n < 4; n++) {
    const r = n > 0 ? n : "", i = s["uv" + r];
    i !== void 0 && (t += `
		texCoord2f[] primvars:st${r} = [${Gn(i, e)}] (
			interpolation = "vertex"
		)`);
  }
  return t;
}
function zn(s, e, t = !1) {
  const n = [];
  for (const r in s) {
    const i = s[r];
    n.push(Zn(i, e, t));
  }
  return `def "Materials"
{
${n.join("")}
}

`;
}
function Zn(s, e, t = !1) {
  const n = "			", r = [], i = [];
  function o(a, c, l) {
    const u = a.source.id + "_" + a.flipY;
    e[u] = a;
    const h = a.channel > 0 ? "st" + a.channel : "st", d = {
      1e3: "repeat",
      // RepeatWrapping
      1001: "clamp",
      // ClampToEdgeWrapping
      1002: "mirror"
      // MirroredRepeatWrapping
    }, f = a.repeat.clone(), p = a.offset.clone(), g = a.rotation, L = Math.sin(g), C = Math.cos(g);
    return p.y = 1 - p.y - f.y, t ? (p.x = p.x / f.x, p.y = p.y / f.y, p.x += L / f.x, p.y += C - 1) : (p.x += L * f.x, p.y += (1 - C) * f.y), `
		def Shader "PrimvarReader_${c}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${h}"
			float2 outputs:result
		}

		def Shader "Transform2d_${c}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${c}.outputs:result>
			float inputs:rotation = ${(g * (180 / Math.PI)).toFixed(F)}
			float2 inputs:scale = ${nt(f)}
			float2 inputs:translation = ${nt(p)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${c}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${c}.outputs:result>
			${l !== void 0 ? "float4 inputs:scale = " + Vn(l) : ""}
			token inputs:sourceColorSpace = "${a.colorSpace === U.NoColorSpace ? "raw" : "sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${s.transparent || s.alphaTest > 0 ? "float outputs:a" : ""}
		}`;
  }
  return s.side === U.DoubleSide && console.warn(
    "THREE.USDZExporter: USDZ does not support double sided materials",
    s
  ), s.map !== null ? (r.push(
    `${n}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`
  ), s.transparent ? r.push(
    `${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`
  ) : s.alphaTest > 0 && (r.push(
    `${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`
  ), r.push(
    `${n}float inputs:opacityThreshold = ${s.alphaTest}`
  )), i.push(o(s.map, "diffuse", s.color))) : r.push(
    `${n}color3f inputs:diffuseColor = ${tt(s.color)}`
  ), s.emissiveMap !== null ? (r.push(
    `${n}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`
  ), i.push(o(s.emissiveMap, "emissive"))) : s.emissive.getHex() > 0 && r.push(
    `${n}color3f inputs:emissiveColor = ${tt(s.emissive)}`
  ), s.normalMap !== null && (r.push(
    `${n}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`
  ), i.push(o(s.normalMap, "normal"))), s.aoMap !== null && (r.push(
    `${n}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`
  ), i.push(o(s.aoMap, "occlusion"))), s.roughnessMap !== null && s.roughness === 1 ? (r.push(
    `${n}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`
  ), i.push(o(s.roughnessMap, "roughness"))) : r.push(`${n}float inputs:roughness = ${s.roughness}`), s.metalnessMap !== null && s.metalness === 1 ? (r.push(
    `${n}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`
  ), i.push(o(s.metalnessMap, "metallic"))) : r.push(`${n}float inputs:metallic = ${s.metalness}`), s.alphaMap !== null ? (r.push(
    `${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`
  ), r.push(`${n}float inputs:opacityThreshold = 0.0001`), i.push(o(s.alphaMap, "opacity"))) : r.push(`${n}float inputs:opacity = ${s.opacity}`), s.isMeshPhysicalMaterial && (r.push(`${n}float inputs:clearcoat = ${s.clearcoat}`), r.push(
    `${n}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`
  ), r.push(`${n}float inputs:ior = ${s.ior}`)), `
	def Material "Material_${s.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>

${i.join(`
`)}

	}
`;
}
function tt(s) {
  return `(${s.r}, ${s.g}, ${s.b})`;
}
function Vn(s) {
  return `(${s.r}, ${s.g}, ${s.b}, 1.0)`;
}
function nt(s) {
  return `(${s.x}, ${s.y})`;
}
function Hn(s) {
  const e = s.name ? s.name : "Camera_" + s.id, t = mt(s.matrixWorld);
  return s.matrixWorld.determinant() < 0 && console.warn(
    "THREE.USDZExporter: USDZ does not support negative scales",
    s
  ), s.isOrthographicCamera ? `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(
    F
  )}, ${s.far.toPrecision(F)})
			float horizontalAperture = ${((Math.abs(s.left) + Math.abs(s.right)) * 10).toPrecision(F)}
			float verticalAperture = ${((Math.abs(s.top) + Math.abs(s.bottom)) * 10).toPrecision(F)}
			token projection = "orthographic"
		}
	
	` : `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(
    F
  )}, ${s.far.toPrecision(F)})
			float focalLength = ${s.getFocalLength().toPrecision(F)}
			float focusDistance = ${s.focus.toPrecision(F)}
			float horizontalAperture = ${s.getFilmWidth().toPrecision(F)}
			token projection = "perspective"
			float verticalAperture = ${s.getFilmHeight().toPrecision(F)}
		}
	
	`;
}
const jn = 64 / 256, Wn = `
<svg width="<WIDTH>px" height="<HEIGHT>px" viewBox="0 0 1024 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1.42378,0,0,-1.42378,37.8056,272.552)">
        <path d="M535.902,111.141L535.902,135.996L516.129,135.996L516.129,40.18L535.902,40.18L535.902,90.087C540.364,74.698 554.364,63.505 570.884,63.505C589.267,63.505 604.519,77.36 607.001,95.441L607.245,97.219L607.245,64.239L626.512,64.239L626.555,66.149C630.504,64.457 634.803,63.668 638.946,63.657C644.567,63.523 650.034,65.021 655.057,68.061L660.825,71.553L651.44,88.59L645.161,84.719C643.29,83.566 641.189,83.086 639.101,83.077C632.262,83.174 627.017,88.662 627.017,95.331L627.017,135.997L607.245,135.997L607.245,101.756L597.204,104.413L607.131,108.728L604.463,115.117C598.904,128.43 585.948,137.724 570.884,137.724C554.364,137.724 540.364,126.53 535.902,111.141ZM515.693,52.455C515.693,60.117 509.874,63.947 504.055,63.947C498.236,63.947 492.417,60.117 492.417,52.455C492.417,37.14 515.693,37.14 515.693,52.455ZM380.282,71.383L380.282,153.041C379.771,153.655 373.607,159.525 373.258,160.065L373.258,135.997L348.352,135.997L348.243,134.69C344.015,136.642 339.458,137.674 335.553,137.747L335.511,137.748C324.933,137.821 315.829,134.433 309.296,128.08C305.974,124.851 303.277,120.825 301.442,115.998L301.442,135.996L273.142,135.996L273.142,97.898C273.142,94.483 272.775,90.902 269.308,90.902C265.617,90.902 263.827,94.498 263.827,98.131L263.827,135.996L235.53,135.996L235.53,98.131C235.53,94.53 234.463,90.671 230.75,90.671C227.046,90.671 225.511,94.483 225.511,98.131L225.511,135.996L197.213,135.996L197.213,64.239L223.485,64.239L223.627,65.183C226.918,63.895 230.419,63.307 233.669,63.307C240.087,63.307 246.447,65.139 251.31,69.669C256.803,65.062 263.137,63.54 270.002,63.54C280.598,63.54 288.388,67.088 293.646,73.141C296.904,76.89 299.223,81.729 300.443,87.587C302.282,81.374 305.504,76.323 309.651,72.435C316.294,66.207 325.463,62.891 335.799,62.957C340.05,62.961 344.191,63.842 347.897,65.413L347.96,64.36L399.852,64.36L400.044,66C404.335,64.016 408.962,63.073 413.227,63.073C426.457,63.073 437.04,68.986 443.35,78.274L443.35,64.239L455.619,64.239L455.619,48.113L475.273,46.066L475.273,64.239L494.056,64.239L494.056,64.005L513.822,64.005L513.822,135.996L494.056,135.996L494.056,132.579L492.809,133.184C488.173,135.434 483.508,136.813 478.88,136.813C471.929,136.813 466.942,134.899 463.359,131.901C458.177,127.565 455.619,120.504 455.619,111.217L455.619,83.076L446.093,83.076C448.504,88.174 449.807,93.997 449.807,100.235C449.807,121.049 436.525,137.4 413.692,137.4C410.081,137.4 405.736,136.78 401.557,135.338L401.557,160.065L373.258,160.065C374.058,159.226 379.595,153.754 380.282,153.041L394.533,153.041L394.533,122.196C398.624,128.502 407.623,130.376 413.692,130.376C432.149,130.376 442.783,117.06 442.783,100.235C442.783,83.299 430.977,70.096 413.227,70.096C406.687,70.096 398.975,72.899 394.533,79.326L393.603,71.383L380.282,71.383ZM528.878,128.972L528.878,47.203L523.153,47.203L523.153,128.972L528.878,128.972ZM508.669,52.455C508.669,55.493 506.362,57.011 504.055,57.011C501.748,57.011 499.441,55.493 499.441,52.455C499.441,46.383 508.669,46.383 508.669,52.455ZM468.249,71.263L468.249,53.859L462.643,54.443L462.643,71.263L450.374,71.263L450.374,76.053L462.643,76.053L462.643,111.217C462.643,122.546 466.615,129.789 478.88,129.789C482.497,129.789 486.12,128.623 489.744,126.865L487.757,122.196C484.837,123.597 481.684,124.532 478.88,124.532C469.888,124.532 468.249,119.041 468.249,111.217L468.249,76.053L487.874,76.053L487.874,71.263L468.249,71.263ZM368.25,71.383L354.58,71.383L354.11,79.326C350.841,73.601 343.484,69.981 335.776,69.981C318.955,69.864 305.75,80.26 305.75,100.118C305.75,120.329 318.371,130.842 335.421,130.725C341.848,130.604 350.841,127.336 354.11,120.565L354.813,128.973L368.25,128.973L368.25,71.383ZM242.554,98.131L242.554,128.972L256.803,128.972L256.803,98.131C256.803,90.537 261.593,83.878 269.308,83.878C277.013,83.878 280.166,90.308 280.166,97.898L280.166,128.972L294.418,128.972L294.418,97.898C294.418,80.608 286.36,70.563 270.002,70.563C262.53,70.563 255.869,72.899 250.729,81.077C247.456,73.136 240.567,70.33 233.669,70.33C228.184,70.33 221.525,72.43 218.487,78.273L217.436,71.263L204.237,71.263L204.237,128.972L218.487,128.972L218.487,98.131C218.487,90.538 223.038,83.648 230.75,83.648C238.581,83.648 242.554,90.537 242.554,98.131ZM548.355,110.081C552.002,119.128 560.713,125.5 570.884,125.5C580.946,125.5 589.582,119.266 593.296,110.373L597.982,112.41C593.492,123.162 583.05,130.7 570.884,130.7C554.619,130.7 541.435,117.229 541.435,100.614C541.435,83.998 554.619,70.528 570.884,70.528C585.747,70.528 598.036,81.778 600.043,96.397L595.072,97.712L595.066,97.66L548.346,110.06C548.347,110.063 548.348,110.065 548.349,110.067C548.35,110.07 548.351,110.072 548.352,110.075L548.323,110.083L548.355,110.081ZM619.645,71.263L619.877,81.547C623.495,73.714 631.678,70.68 639.037,70.68C643.363,70.564 647.56,71.733 651.42,74.07L648.847,78.74C645.815,76.871 642.42,76.053 639.037,76.053C628.285,76.174 619.993,84.816 619.993,95.331L619.993,128.973L614.269,128.973L614.269,71.263L619.645,71.263ZM501.08,71.029L501.08,128.972L506.798,128.972L506.798,71.029L501.08,71.029ZM570.884,75.728C557.432,75.728 546.525,86.87 546.525,100.615C546.525,101.951 546.631,103.261 546.829,104.54L593.773,92.08C590.364,82.54 581.403,75.728 570.884,75.728ZM337.058,117.641C327.596,117.641 320.003,111.095 320.003,100.118C320.003,89.139 327.596,82.712 337.058,82.712C359.486,82.712 359.486,117.641 337.058,117.641ZM554.337,95.28L582.868,87.708C579.76,84.644 575.542,82.752 570.884,82.752C563.085,82.752 556.533,88.04 554.337,95.28ZM494.056,119.062L491.343,112.685L484.719,115.864C482.789,116.789 480.733,117.508 478.88,117.508C477.629,117.508 476.693,117.588 476.133,117.047C475.69,116.618 475.657,115.939 475.534,115.219C475.328,114.012 475.273,112.666 475.273,111.217L475.273,83.076L494.056,83.076L494.056,119.062ZM428.531,100.235C428.531,91.24 422.455,83.878 412.176,83.878C401.893,83.878 395.818,91.24 395.818,100.235C395.818,109.227 402.479,116.593 412.176,116.593C421.876,116.593 428.531,109.227 428.531,100.235ZM337.058,110.617C343.68,110.617 346.855,105.333 346.855,100.176C346.855,95.02 343.68,89.735 337.058,89.735C331.452,89.735 327.027,93.613 327.027,100.118C327.027,106.637 331.439,110.617 337.058,110.617ZM421.507,100.235C421.507,95.103 418.041,90.902 412.176,90.902C406.308,90.902 402.842,95.103 402.842,100.235C402.842,105.366 406.643,109.569 412.176,109.569C417.711,109.569 421.507,105.366 421.507,100.235ZM587.073,107.048L586.815,107.666C584.171,113.998 578.048,118.476 570.884,118.476C566.637,118.476 562.757,116.902 559.752,114.299L587.073,107.048Z" style="fill-opacity:0.3;"/>
    </g>
    <g transform="matrix(1.42378,0,0,-1.42378,28.8272,275.975)">
        <path d="M33.568,124.028C16.878,107.338 16.878,80.238 33.568,63.548L63.65,33.466C80.34,16.776 107.44,16.776 124.13,33.466L154.227,63.563C170.917,80.253 170.917,107.353 154.227,124.043L93.905,184.365L33.568,124.028ZM93.789,63.649L63.526,93.912L93.789,124.175L124.052,93.912L93.789,63.649Z" style="fill-opacity:0.3;"/>
        <path d="M28.601,128.994C9.171,109.563 9.171,78.013 28.601,58.582L58.684,28.5C78.114,9.069 109.665,9.069 129.096,28.5L159.193,58.597C178.624,78.028 178.624,109.578 159.193,129.009L93.905,194.298L28.601,128.994ZM33.568,124.028C16.878,107.338 16.878,80.238 33.568,63.548L63.65,33.466C80.34,16.776 107.44,16.776 124.13,33.466L154.227,63.563C170.917,80.253 170.917,107.353 154.227,124.043L93.905,184.365L33.568,124.028ZM93.789,63.649L63.526,93.912L93.789,124.175L124.052,93.912L93.789,63.649ZM93.789,73.582L73.459,93.912L93.789,114.242L114.119,93.912L93.789,73.582Z" style="fill-opacity:0.3;"/>
    </g>
    <g transform="matrix(1.42378,0,0,-1.42378,37.8056,272.552)">
        <path d="M528.878,128.972L528.878,47.203L523.153,47.203L523.153,128.972L528.878,128.972ZM508.669,52.455C508.669,58.53 499.441,58.53 499.441,52.455C499.441,46.383 508.669,46.383 508.669,52.455ZM501.08,71.029L501.08,128.972L506.798,128.972L506.798,71.029L501.08,71.029ZM468.249,71.263L468.249,53.859L462.643,54.443L462.643,71.263L450.374,71.263L450.374,76.053L462.643,76.053L462.643,111.217C462.643,122.546 466.615,129.789 478.88,129.789C482.497,129.789 486.12,128.623 489.744,126.865L487.757,122.196C484.837,123.597 481.684,124.532 478.88,124.532C469.888,124.532 468.249,119.041 468.249,111.217L468.249,76.053L487.874,76.053L487.874,71.263L468.249,71.263ZM368.25,71.383L354.58,71.383L354.11,79.326C350.841,73.601 343.484,69.981 335.776,69.981C318.955,69.864 305.75,80.26 305.75,100.118C305.75,120.329 318.371,130.842 335.421,130.725C341.848,130.604 350.841,127.336 354.11,120.565L354.813,128.973L368.25,128.973L368.25,71.383ZM337.058,117.641C327.596,117.641 320.003,111.095 320.003,100.118C320.003,89.139 327.596,82.712 337.058,82.712C359.486,82.712 359.486,117.641 337.058,117.641ZM242.554,98.131L242.554,128.972L256.803,128.972L256.803,98.131C256.803,90.537 261.593,83.878 269.308,83.878C277.013,83.878 280.166,90.308 280.166,97.898L280.166,128.972L294.418,128.972L294.418,97.898C294.418,80.608 286.36,70.563 270.002,70.563C262.53,70.563 255.869,72.899 250.729,81.077C247.456,73.136 240.567,70.33 233.669,70.33C228.184,70.33 221.525,72.43 218.487,78.273L217.436,71.263L204.237,71.263L204.237,128.972L218.487,128.972L218.487,98.131C218.487,90.538 223.038,83.648 230.75,83.648C238.581,83.648 242.554,90.537 242.554,98.131ZM380.282,153.041L380.282,71.383L393.603,71.383L394.533,79.326C398.975,72.899 406.687,70.096 413.227,70.096C430.977,70.096 442.783,83.299 442.783,100.235C442.783,117.06 432.149,130.376 413.692,130.376C407.623,130.376 398.624,128.502 394.533,122.196L394.533,153.041L380.282,153.041ZM428.531,100.235C428.531,91.24 422.455,83.878 412.176,83.878C401.893,83.878 395.818,91.24 395.818,100.235C395.818,109.227 402.479,116.593 412.176,116.593C421.876,116.593 428.531,109.227 428.531,100.235ZM619.645,71.263L619.877,81.547C623.495,73.714 631.678,70.68 639.037,70.68C643.363,70.564 647.56,71.733 651.42,74.07L648.847,78.74C645.815,76.871 642.42,76.053 639.037,76.053C628.285,76.174 619.993,84.816 619.993,95.331L619.993,128.973L614.269,128.973L614.269,71.263L619.645,71.263ZM548.355,110.081C552.002,119.128 560.713,125.5 570.884,125.5C580.946,125.5 589.582,119.266 593.296,110.373L597.982,112.41C593.492,123.162 583.05,130.7 570.884,130.7C554.619,130.7 541.435,117.229 541.435,100.614C541.435,83.998 554.619,70.528 570.884,70.528C585.747,70.528 598.036,81.778 600.043,96.397L595.072,97.712C595.07,97.7 595.069,97.689 595.068,97.677L595.066,97.66L548.346,110.06C548.347,110.063 548.348,110.065 548.349,110.067C548.35,110.07 548.351,110.072 548.352,110.075L548.323,110.083L548.355,110.081ZM570.884,75.728C557.432,75.728 546.525,86.87 546.525,100.615C546.525,101.951 546.631,103.261 546.829,104.54L593.773,92.08C590.364,82.54 581.403,75.728 570.884,75.728Z" style="fill:white;"/>
    </g>
    <g transform="matrix(1.42378,-1.58071e-16,-1.58071e-16,-1.42378,37.8056,272.552)">
        <path d="M57.423,151.586C65.597,159.758 87.354,181.938 87.344,181.96C87.265,182.105 108.959,160.323 117.599,151.688L87.459,121.55L57.423,151.586Z" style="fill:rgb(58,24,136);fill-rule:nonzero;"/>
        <path d="M87.459,121.55L117.598,151.688C117.643,151.638 117.698,151.581 117.747,151.536L147.857,121.424L117.72,91.287L87.459,121.55Z" style="fill:rgb(3,161,196);fill-rule:nonzero;"/>
        <path d="M147.857,121.424L147.935,121.346C164.591,104.692 164.604,77.7 147.985,61.025L117.721,91.287L147.857,121.424Z" style="fill:rgb(5,208,223);fill-rule:nonzero;"/>
        <path d="M57.195,91.287L27.164,121.317C27.173,121.328 27.178,121.338 27.189,121.347L57.373,151.536C57.39,151.552 57.408,151.568 57.423,151.586L87.459,121.55L57.195,91.287Z" style="fill:rgb(118,31,232);fill-rule:nonzero;"/>
        <path d="M87.459,61.023L117.72,91.287L147.984,61.025C147.96,61.008 147.951,60.991 147.934,60.974L117.747,30.787C117.74,30.779 117.729,30.77 117.72,30.762L87.459,61.023Z" style="fill:rgb(255,170,1);fill-rule:nonzero;"/>
        <path d="M27.037,61.129C10.529,77.804 10.571,104.696 27.164,121.318L57.195,91.288L27.037,61.129Z" style="fill:rgb(241,23,93);fill-rule:nonzero;"/>
        <path d="M87.458,61.023L57.298,30.863L27.188,60.973C27.136,61.025 27.089,61.08 27.036,61.128L57.195,91.287L87.458,61.023Z" style="fill:rgb(251,58,27);fill-rule:nonzero;"/>
        <path d="M117.722,30.761C101.046,14.116 74.039,14.125 57.374,30.787L57.3,30.863L87.46,61.023L117.722,30.761Z" style="fill:rgb(251,201,53);fill-rule:nonzero;"/>
    </g>
</svg>
`;
function Yn(s, e, t = 256) {
  return new Promise((n) => {
    const r = t * jn, i = Wn.replace("<WIDTH>", t.toString()).replace("<HEIGHT>", r.toString()), o = new Image(), a = new Blob([i], { type: "image/svg+xml" }), c = URL.createObjectURL(a);
    o.onload = function() {
      s.drawImage(o, e, e), URL.revokeObjectURL(c), n();
    }, o.src = c;
  });
}
function he(s) {
  s.parentNode.removeChild(s);
}
const Kn = 12, X = 512;
function st(s, e, t, n = !0) {
  const r = (e + 180) / 360 * Math.pow(2, s), i = (1 - Math.log(
    Math.tan(t * Math.PI / 180) + 1 / Math.cos(t * Math.PI / 180)
  ) / Math.PI) / 2 * Math.pow(2, s);
  return n ? {
    x: Math.floor(r),
    y: Math.floor(i)
  } : {
    x: r,
    y: i
  };
}
function Xn(s) {
  const e = document.createElement("canvas");
  e.width = s.width, e.height = s.height;
  const t = e.getContext("2d");
  if (!t)
    throw new Error("Unable to create a canvas with context.");
  const n = t.getImageData(0, 0, s.width, s.height);
  return n.data.set(s.pixelData), t.putImageData(n, 0, 0), e;
}
async function qn(s, e, t, n) {
  const r = e.x - s.x + 1, i = e.y - s.y + 1, o = document.createElement("canvas");
  o.width = r * X, o.height = i * X;
  const a = o.getContext("2d");
  if (!a)
    throw new Error("The context is invalid");
  let c = 0, l = 0;
  const u = [];
  for (let h = s.y; h <= e.y; h += 1) {
    for (let d = s.x; d <= e.x; d += 1) {
      const p = n[~~(Math.random() * n.length)].replace("{x}", d.toString()).replace("{y}", h.toString()).replace("{z}", t.toString());
      u.push(
        Jn(p, a, [
          c * X,
          l * X
        ])
      ), c++;
    }
    c = 0, l++;
  }
  return await Promise.all(u), o;
}
function Jn(s, e, t) {
  return new Promise((n) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.src = s, r.onload = function() {
      e.drawImage(r, t[0], t[1]), n();
    }, r.onerror = function() {
      n();
    };
  });
}
function Qn(s, e, t) {
  var c;
  const n = s[0], r = s[1], i = e[0], o = e[1], a = document.createElement("canvas");
  return a.width = i, a.height = o, (c = a.getContext("2d")) == null || c.drawImage(
    t,
    n,
    r,
    i,
    o,
    // source rect with content to crop
    0,
    0,
    i,
    o
  ), a;
}
function te(s) {
  return new Promise(function(e) {
    s.once("idle", () => {
      e(!0);
    });
  });
}
const es = {
  showButton: !0,
  background: "#FFFFFF",
  closeButtonClassName: "",
  arButtonClassName: "",
  // closeButtonContent: `<svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path d="M480-418.26 282.203-220.463q-12.87 12.869-30.87 12.869t-30.87-12.869q-12.869-12.87-12.869-30.87t12.869-30.87L418.26-480 220.463-677.797q-12.869-12.87-12.869-30.87t12.869-30.87q12.87-12.869 30.87-12.869t30.87 12.869L480-541.74l197.797-197.797q12.87-12.869 30.87-12.869t30.87 12.869q12.869 12.87 12.869 30.87t-12.869 30.87L541.74-480l197.797 197.797q12.869 12.87 12.869 30.87t-12.869 30.87q-12.87 12.869-30.87 12.869t-30.87-12.869L480-418.26Z" style="fill:rgb(68,73,82);"/></svg>`,
  closeButtonContent: `<svg width="100%" height="100%" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
      <g transform="matrix(0.707107,0.707107,-0.707107,0.707107,16.6768,6.42373)">
          <path d="M7,13.75C6.737,13.75 6.509,13.653 6.315,13.46C6.122,13.266 6.025,13.038 6.025,12.775L6.025,8.225L1.475,8.225C1.212,8.225 0.984,8.128 0.79,7.935C0.597,7.741 0.5,7.513 0.5,7.25C0.5,6.987 0.597,6.759 0.79,6.565C0.984,6.372 1.212,6.275 1.475,6.275L6.025,6.275L6.025,1.725C6.025,1.462 6.122,1.234 6.315,1.04C6.509,0.847 6.737,0.75 7,0.75C7.263,0.75 7.491,0.847 7.685,1.04C7.878,1.234 7.975,1.462 7.975,1.725L7.975,6.275L12.525,6.275C12.788,6.275 13.016,6.372 13.21,6.565C13.403,6.759 13.5,6.987 13.5,7.25C13.5,7.513 13.403,7.741 13.21,7.935C13.016,8.128 12.788,8.225 12.525,8.225L7.975,8.225L7.975,12.775C7.975,13.038 7.878,13.266 7.685,13.46C7.491,13.653 7.263,13.75 7,13.75Z" style="fill:rgb(68,73,82);fill-rule:nonzero;"/>
      </g>
    </svg>`,
  arButtonContent: `
  <span>
    <svg width="33px" height="33px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2; vertical-align: middle;">
      <g transform="matrix(0.718295,0,0,0.718295,6.75661,6.76523)">
          <path d="M22.197,39.734L11.472,33.439C10.949,33.118 10.543,32.696 10.253,32.171C9.963,31.646 9.819,31.082 9.819,30.48L9.819,17.941C9.819,17.34 9.963,16.776 10.253,16.251C10.543,15.726 10.949,15.303 11.472,14.983L22.247,8.576C22.777,8.27 23.362,8.116 24,8.116C24.638,8.116 25.223,8.27 25.753,8.576L36.528,14.983C37.051,15.303 37.457,15.726 37.747,16.251C38.037,16.776 38.182,17.34 38.182,17.941L38.182,30.48C38.182,31.082 38.032,31.646 37.734,32.171C37.436,32.696 37.017,33.118 36.478,33.439L25.603,39.734C25.062,40.048 24.491,40.205 23.892,40.205C23.292,40.205 22.727,40.048 22.197,39.734ZM22.5,35.925L22.5,25.044L13.275,19.741L13.275,30.373L22.5,35.925ZM25.5,35.925L34.775,30.373L34.775,19.741L25.5,25.044L25.5,35.925ZM3.701,13.426L3.701,7.108C3.701,6.159 4.033,5.353 4.696,4.687C5.359,4.022 6.163,3.689 7.108,3.689L13.426,3.689L13.426,6.976L6.976,6.976L6.976,13.426L3.701,13.426ZM13.426,44.299L7.108,44.299C6.163,44.299 5.359,43.967 4.696,43.304C4.033,42.641 3.701,41.837 3.701,40.892L3.701,34.574L6.976,34.574L6.976,41.024L13.426,41.024L13.426,44.299ZM34.574,44.299L34.574,41.024L41.024,41.024L41.024,34.574L44.311,34.574L44.311,40.892C44.311,41.837 43.978,42.641 43.313,43.304C42.647,43.967 41.841,44.299 40.892,44.299L34.574,44.299ZM41.024,13.426L41.024,6.976L34.574,6.976L34.574,3.689L40.892,3.689C41.841,3.689 42.647,4.022 43.313,4.687C43.978,5.353 44.311,6.159 44.311,7.108L44.311,13.426L41.024,13.426ZM24,22.336L33.237,16.991L24,11.685L14.763,16.991L24,22.336Z" style="fill:rgb(36, 189, 240);fill-rule:nonzero;"/>
      </g>
    </svg>
    <span style="vertical-align: middle;">
    View in your space
    </span>
  </span>`,
  edgeColor: "#7b8487",
  logo: "",
  activateAR: !1
}, rt = {
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "30px auto",
  fontSize: "1.4em",
  width: "fit-content",
  background: "#FFF",
  border: "1px solid #0000001a",
  borderRadius: "3px",
  padding: "2px 9px 2px 6px",
  color: "#727781",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)"
}, it = {
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  padding: "0px",
  background: "#FFF",
  border: "none",
  borderRadius: "3px",
  width: "33px",
  height: "33px",
  "box-shadow": "0 0 6px 2px rgb(0 0 0 / 8%)"
};
class os extends yt {
  constructor(t = {}) {
    super();
    E(this, "controlButton");
    E(this, "controlButtonContainer");
    E(this, "map");
    E(this, "colorData", null);
    E(this, "landMaskData", null);
    E(this, "terrainData", null);
    E(this, "cameraSettings");
    E(this, "hasTerrain");
    E(this, "terrainExaggeration");
    E(this, "terrainSourceID");
    E(this, "meterPerPixelCenter", 0);
    E(this, "originalPixelRatio", 0);
    E(this, "mapCaptureBounds");
    E(this, "threeSceneGLTF");
    E(this, "threeSceneUSDZ");
    E(this, "threeTileContainerGLTF");
    E(this, "threeTileContainerUSDZ");
    E(this, "gltfMaterial");
    E(this, "usdzMaterial");
    E(this, "mapMeshGLTF");
    E(this, "mapMeshUSDZ");
    E(this, "itemsToDispose", []);
    E(this, "gltfExporter", new De());
    E(this, "lock", !1);
    E(this, "options");
    E(this, "arButton", null);
    E(this, "closeButton", null);
    E(this, "modelViewer", null);
    E(this, "logoImgElement", null);
    E(this, "logo");
    this.options = {
      ...es,
      ...t
    }, this.logo = t.logo;
  }
  onAdd(t) {
    if (this.setMap(t), this.controlButtonContainer = window.document.createElement("div"), this.options.showButton) {
      this.controlButtonContainer.className = "maplibregl-ctrl maplibregl-ctrl-group", this.controlButton = window.document.createElement("button"), this.controlButton.className = "maptiler-ar-ctrl", this.controlButtonContainer.appendChild(this.controlButton);
      const n = window.document.createElement("span");
      n.className = "maplibregl-ctrl-icon", n.setAttribute("aria-hidden", "true"), this.controlButton.appendChild(n), n.innerHTML = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
      </svg>
      `, this.controlButton.type = "button", this.controlButton.addEventListener("click", async () => {
        this.run();
      });
    }
    return this.init3DScene(), this.controlButtonContainer;
  }
  async run() {
    try {
      this.close();
    } catch {
    }
    if (this.lock)
      return;
    this.lock = !0, this.emit("computeStart"), await this.computeTextures();
    const t = this.getColorData(), n = this.getTerrainData();
    t && n && (await this.buildMapModel(), this.displayModal(), this.lock = !1);
  }
  onRemove() {
    var t;
    this.dispose(), (t = this.controlButtonContainer.parentNode) == null || t.removeChild(
      this.controlButtonContainer
    );
  }
  setMap(t) {
    this.map = t;
  }
  getMeterPerPixelCenter() {
    return this.meterPerPixelCenter;
  }
  getColorData() {
    return this.colorData;
  }
  getLandMaskData() {
    return this.landMaskData;
  }
  getTerrainData() {
    return this.terrainData;
  }
  saveMapSettings() {
    this.cameraSettings = {
      center: this.map.getCenter(),
      zoom: this.map.getZoom(),
      pitch: this.map.getPitch(),
      bearing: this.map.getBearing()
    }, this.terrainExaggeration = this.map.getTerrainExaggeration(), this.hasTerrain = this.map.hasTerrain(), this.originalPixelRatio = this.map.getPixelRatio(), this.hasTerrain && (this.terrainSourceID = this.map.getTerrain().source);
  }
  restoreMapSettings() {
    this.map.triggerRepaint(), this.hasTerrain && this.map.setTerrain({
      source: this.terrainSourceID,
      exaggeration: this.terrainExaggeration
    }), this.map.jumpTo(this.cameraSettings);
  }
  enableTopView() {
    this.saveMapSettings(), this.hasTerrain && this.map.setTerrain(null), this.map.triggerRepaint();
    const t = {
      center: this.cameraSettings.center,
      zoom: this.cameraSettings.zoom,
      pitch: 0,
      bearing: 0
    };
    this.map.jumpTo(t);
  }
  grabGlData() {
    const n = this.map.getCanvas().getContext("webgl2");
    if (!n)
      throw new Error("The WebGL context of the map is undefined");
    const r = new Uint8Array(
      n.drawingBufferWidth * n.drawingBufferHeight * 4
    );
    return n.readPixels(
      0,
      0,
      n.drawingBufferWidth,
      n.drawingBufferHeight,
      n.RGBA,
      n.UNSIGNED_BYTE,
      r
    ), {
      width: n.drawingBufferWidth,
      height: n.drawingBufferHeight,
      pixelData: r,
      bounds: this.map.getBounds()
    };
  }
  /**
   * Compute the color data (pixels values + metadata) for the vieport map
   */
  async computeColorData() {
    this.emit("startComputeColorData"), await te(this.map), this.colorData = this.grabGlData(), this.emit("endComputeColorData", {});
  }
  /**
   * Compute the color data (pixels values + metadata) for the vieport map
   */
  async computeLandMaskData() {
    this.emit("startComputeLandMaskData", {}), this.map.addSource("xr_module_global_blackout_source", {
      type: "geojson",
      data: {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-180, -90],
              [-180, 90],
              [180, 90],
              [180, -90],
              [-180, -90]
            ]
          ]
        }
      }
    }), this.map.addLayer({
      id: "xr_module_global_blackout_layer",
      type: "fill",
      source: "xr_module_global_blackout_source",
      layout: {},
      paint: {
        "fill-color": "#000",
        "fill-opacity": 1
      }
    }), this.map.addSource("xr_module_land_source", {
      type: "vector",
      url: "https://api.maptiler.com/tiles/land/tiles.json?key=bod4IIn9bwK8mnZIk49v"
    }), this.map.addLayer({
      id: "xr_module_land_layer",
      type: "fill",
      source: "xr_module_land_source",
      "source-layer": "land",
      layout: {},
      paint: {
        "fill-color": "#fff",
        "fill-opacity": 1
      }
    }), await te(this.map), this.landMaskData = this.grabGlData(), this.map.removeLayer("xr_module_global_blackout_layer"), this.map.removeLayer("xr_module_land_layer"), this.map.removeSource("xr_module_global_blackout_source"), this.map.removeSource("xr_module_land_source"), await te(this.map), this.emit("endComputeLandMaskData", {});
  }
  async computeTerrainData_VIEWPORT() {
    this.emit("startComputeTerrainData", {}), this.map.addSource("xr_module_terrain_source", {
      type: "raster",
      url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json"
    }), this.map.addLayer({
      id: "xr_module_terrain_layer",
      source: "xr_module_terrain_source",
      type: "raster",
      minzoom: 0,
      layout: {
        visibility: "visible"
      },
      paint: {
        "raster-opacity": 1
      },
      filter: ["all"]
    }), await te(this.map), this.terrainData = this.grabGlData(), this.map.removeLayer("xr_module_terrain_layer"), this.map.removeSource("xr_module_terrain_source"), await te(this.map), this.emit("endComputeTerrainData", {});
  }
  async computeTerrainData() {
    var _;
    this.emit("startComputeTerrainData", {});
    const t = Math.min(Math.floor(this.map.getZoom()), Kn), n = this.map.getBounds(), r = n.getNorth(), i = n.getSouth(), o = n.getEast(), a = n.getWest(), c = st(t, a, r, !1), l = {
      x: Math.floor(c.x),
      y: Math.floor(c.y)
    }, u = st(t, o, i, !1), h = {
      x: Math.floor(u.x),
      y: Math.floor(u.y)
    }, d = this.map.getSdkConfig(), f = this.map.getMaptilerSessionId(), p = await qn(
      l,
      h,
      t,
      [
        `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${d.apiKey}&mtsid=${f}&module=xr`
      ]
    ), g = [
      Math.floor(
        X * (c.x - l.x)
      ),
      // width
      Math.floor(
        X * (c.y - l.y)
      )
      // height
    ], L = [
      Math.ceil(
        X * (u.x - c.x)
      ),
      Math.ceil(
        X * (u.y - c.y)
      )
    ], C = Qn(g, L, p), T = (_ = C.getContext("2d")) == null ? void 0 : _.getImageData(0, 0, C.width, C.height).data;
    if (!T)
      throw new Error("Unable to extract terrain data.");
    this.terrainData = {
      width: C.width,
      height: C.height,
      pixelData: new Uint8Array(T.buffer),
      bounds: n
    }, this.emit("endComputeTerrainData", {});
  }
  async computeTextures() {
    var o;
    if (this.enableTopView(), await this.computeColorData(), await this.computeTerrainData(), !this.colorData)
      throw new Error("The color texture is invalid.");
    this.mapCaptureBounds = this.map.getBounds();
    const t = this.mapCaptureBounds.getCenter(), n = new Ge(this.mapCaptureBounds.getWest(), t.lat), i = new Ge(this.mapCaptureBounds.getEast(), t.lat).distanceTo(n);
    this.meterPerPixelCenter = i / ((o = this.colorData) == null ? void 0 : o.width), this.restoreMapSettings(), await te(this.map);
  }
  init3DScene() {
    this.threeSceneGLTF = new U.Scene(), this.threeTileContainerGLTF = new U.Object3D(), this.threeSceneGLTF.add(this.threeTileContainerGLTF), this.threeTileContainerGLTF.rotation.set(-Math.PI / 2, 0, 0), this.threeSceneUSDZ = new U.Scene(), this.threeTileContainerUSDZ = new U.Object3D(), this.threeSceneUSDZ.add(this.threeTileContainerUSDZ), this.threeTileContainerUSDZ.rotation.set(-Math.PI / 2, 0, 0);
  }
  async buildMapModel() {
    if (!this.colorData)
      throw new Error("Color textures is not ready.");
    if (!this.terrainData)
      throw new Error("Terrain textures is not ready.");
    this.threeTileContainerGLTF.clear(), this.threeTileContainerUSDZ.clear(), this.dispose();
    const t = Xn(this.colorData), n = t.getContext("2d");
    if (!n)
      throw new Error("Color texture not available");
    const r = new U.Color(this.options.edgeColor), i = r.clone().multiplyScalar(0.65), o = r.clone().multiplyScalar(0.5);
    n.fillStyle = `#${r.getHexString()}`;
    const a = Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;
    await Yn(
      n,
      a * 2,
      Math.max(256, t.width / 10)
    ), n.fillRect(0, 0, t.width - 1, a), n.fillRect(
      0,
      t.height - 1 - a,
      t.width - 1,
      t.height - 1
    ), n.fillStyle = `#${i.getHexString()}`, n.fillRect(0, 0, a, t.height - 1), n.fillRect(
      t.width - 1 - a,
      0,
      t.width - 1,
      t.height - 1
    );
    const c = new U.CanvasTexture(t);
    c.flipY = !1, c.colorSpace = U.SRGBColorSpace, c.colorSpace = U.sRGBEncoding, c.needsUpdate = !0, this.itemsToDispose.push(c), this.gltfMaterial = new U.MeshStandardMaterial({
      map: c,
      color: 16777215
    }), this.usdzMaterial = new U.MeshStandardMaterial({
      map: c
    }), this.itemsToDispose.push(this.gltfMaterial), this.itemsToDispose.push(this.usdzMaterial);
    const l = this.mapCaptureBounds, u = l.getSouthEast().distanceTo(l.getSouthWest()), h = l.getSouthEast().distanceTo(l.getNorthEast()), d = new U.PlaneGeometry(
      u,
      h,
      this.terrainData.width - 1,
      this.terrainData.height - 1
    );
    this.mapMeshGLTF = new U.Mesh(d, this.gltfMaterial), this.mapMeshUSDZ = new U.Mesh(d, this.usdzMaterial);
    const f = d.attributes.position.array, p = this.terrainData.width, g = this.terrainData.height;
    let L = 1 / 0;
    for (let w = 0; w < f.length / 3; w += 1) {
      const x = this.terrainData.pixelData[w * 4], G = this.terrainData.pixelData[w * 4 + 1], R = this.terrainData.pixelData[w * 4 + 2], A = -1e4 + (x * 256 * 256 + G * 256 + R) * 0.1;
      A < L && (L = A);
    }
    L = Math.max(0, ~~(L / 100) * 100 - 100);
    for (let w = 0; w < f.length / 3; w += 1) {
      const x = this.terrainData.pixelData[w * 4], G = this.terrainData.pixelData[w * 4 + 1], R = this.terrainData.pixelData[w * 4 + 2];
      let A = -1e4 + (x * 256 * 256 + G * 256 + R) * 0.1 - L;
      const D = w % p, k = ~~(w / p);
      (D === 0 || k === 0 || D === p - 1 || k === g - 1) && (A = 0), f[w * 3 + 2] = A;
    }
    d.computeVertexNormals(), this.itemsToDispose.push(d);
    const C = new U.PlaneGeometry(
      u,
      h,
      1,
      1
    ), T = new U.MeshStandardMaterial({
      color: o
    }), _ = new U.Mesh(C, T);
    _.rotateX(-Math.PI), this.itemsToDispose.push(C), this.itemsToDispose.push(T);
    const M = 1 * 1 / u;
    this.threeTileContainerGLTF.scale.x = M, this.threeTileContainerGLTF.scale.y = M, this.threeTileContainerGLTF.scale.z = M, this.threeTileContainerGLTF.add(this.mapMeshGLTF), this.threeTileContainerGLTF.add(_), this.threeTileContainerUSDZ.scale.x = M, this.threeTileContainerUSDZ.scale.y = M, this.threeTileContainerUSDZ.scale.z = M;
    const v = _.clone();
    this.threeTileContainerUSDZ.add(this.mapMeshUSDZ), this.threeTileContainerUSDZ.add(v);
  }
  dispose() {
    for (; this.itemsToDispose.length; ) {
      const t = this.itemsToDispose.pop();
      t == null || t.dispose();
    }
  }
  downloadGLTF(t = !1) {
    this.threeTileContainerGLTF.updateMatrix(), this.threeTileContainerGLTF.updateMatrixWorld(), this.gltfExporter.parse(
      this.threeSceneGLTF,
      // success
      (n) => {
        let r;
        if (t)
          r = new Blob([n], {
            type: "application/octet-stream"
          });
        else {
          const o = JSON.stringify(n, null, 2);
          r = new Blob([o], { type: "text/plain" });
        }
        const i = document.createElement("a");
        i.style.display = "none", document.body.appendChild(i), i.href = URL.createObjectURL(r), i.download = `maptiler_scene.${t ? "glb" : "gltf"}`, i.click();
      },
      // error
      (n) => {
        console.log("error:", n);
      },
      // options
      {
        binary: t,
        maxTextureSize: 8192
      }
    );
  }
  async downloadUSDZ() {
    this.threeTileContainerUSDZ.updateMatrix(), this.threeTileContainerUSDZ.updateMatrixWorld();
    const t = await this.getModelBlobUSDZ(), n = document.createElement("a");
    n.style.display = "none", document.body.appendChild(n), n.href = URL.createObjectURL(t), n.download = "maptiler_scene.usdz", n.click();
  }
  async getModelBlobGLB() {
    return new Promise((t, n) => {
      this.gltfExporter.parse(
        this.threeSceneGLTF,
        // success
        (r) => {
          const i = new Blob([r], {
            type: "application/octet-stream"
          });
          t(i);
        },
        // error
        (r) => {
          n(r);
        },
        // options
        {
          binary: !0,
          maxTextureSize: 8192
        }
      );
    });
  }
  async getModelBlobUSDZ() {
    const n = await new _n().parse(this.threeSceneUSDZ);
    return new Blob([n], {
      type: "model/vnd.usdz+zip"
    });
  }
  async displayModal() {
    const t = this.map.getContainer(), n = await this.getModelBlobGLB(), r = URL.createObjectURL(n);
    this.emit("computeEnd"), this.modelViewer = new Ct(), this.modelViewer.src = r, this.modelViewer.setAttribute("ar", "true"), this.modelViewer.setAttribute("tone-mapping", "commerce"), this.modelViewer.setAttribute("ar-modes", "webxr quick-look"), this.modelViewer.setAttribute("camera-controls", "true"), this.modelViewer.setAttribute("shadow-intensity", "1"), this.modelViewer.style.width = "100%", this.modelViewer.style.height = "100%", this.modelViewer.style.zIndex = "3", this.modelViewer.style.position = "absolute", this.modelViewer.style.background = this.options.background, t.appendChild(this.modelViewer), this.arButton = document.createElement("button"), this.arButton.setAttribute("slot", "ar-button"), this.arButton.id = "maptiler-ar-enable-button", this.options.arButtonClassName ? this.arButton.classList.add(this.options.arButtonClassName) : Object.keys(rt).forEach((i) => {
      this.arButton.style[i] = rt[i];
    }), typeof this.options.arButtonContent == "string" ? this.arButton.innerHTML = this.options.arButtonContent : this.arButton.appendChild(this.options.arButtonContent), this.modelViewer.appendChild(this.arButton), this.closeButton = document.createElement("button"), this.closeButton.id = "maptiler-ar-close-button", this.options.closeButtonClassName ? this.closeButton.classList.add(this.options.closeButtonClassName) : Object.keys(it).forEach((i) => {
      this.closeButton.style[i] = it[i];
    }), typeof this.options.closeButtonContent == "string" ? this.closeButton.innerHTML = this.options.closeButtonContent : this.closeButton.appendChild(this.options.closeButtonContent), this.modelViewer.appendChild(this.closeButton), this.closeButton.addEventListener("click", async () => {
      this.close();
    }), this.logo && (this.logoImgElement = document.createElement("img"), this.logoImgElement.src = this.logo, this.options.logoClass ? this.logoImgElement.classList.add(this.options.logoClass) : (this.logoImgElement.style.setProperty("position", "absolute"), this.logoImgElement.style.setProperty(
      "height",
      `${this.options.logoHeight ?? 60}px`
    ), this.logoImgElement.style.setProperty("width", "auto"), this.logoImgElement.style.setProperty("bottom", "0"), this.logoImgElement.style.setProperty("left", "0"), this.logoImgElement.style.setProperty("bottom", "0"), this.logoImgElement.style.setProperty("margin", "10px")), this.modelViewer.appendChild(this.logoImgElement)), this.options.activateAR && this.modelViewer.addEventListener("load", () => {
      this.modelViewer.canActivateAR && this.modelViewer.activateAR();
    });
  }
  close() {
    this.dispose(), he(this.arButton), he(this.modelViewer), he(this.closeButton), he(this.logoImgElement);
  }
  /**
   * Update the `src` property of the logo image
   */
  updateLogo(t) {
    this.logoImgElement && (this.logo = t, this.logoImgElement.src = t);
  }
}
export {
  os as MaptilerARControl,
  Xn as mapTextureDataToCanvas
};
