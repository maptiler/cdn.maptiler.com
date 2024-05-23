var Et = Object.defineProperty;
var bt = (n, e, t) => e in n ? Et(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var T = (n, e, t) => (bt(n, typeof e != "symbol" ? e + "" : e, t), t);
import { LngLat as Ze } from "@maptiler/sdk";
import { ModelViewerElement as St } from "@google/model-viewer";
import It from "events";
import * as z from "three";
import { PlaneGeometry as At, ShaderMaterial as _t, Uniform as Rt, SRGBColorSpace as ct, Mesh as Dt, PerspectiveCamera as Nt, Scene as Se, WebGLRenderer as Ut, CanvasTexture as kt, Color as Bt, Vector3 as pe, CompressedTexture as ye, Source as Ft, NoColorSpace as ut, MathUtils as Ie, RGBAFormat as Ot, DoubleSide as ht, BufferAttribute as q, PropertyBinding as de, InterpolateDiscrete as Pt, Matrix4 as ft, Quaternion as zt, InterpolateLinear as Gt, NearestFilter as $t, NearestMipmapNearestFilter as Zt, NearestMipmapLinearFilter as Ht, LinearFilter as Vt, LinearMipmapNearestFilter as jt, LinearMipmapLinearFilter as Wt, ClampToEdgeWrapping as Yt, RepeatWrapping as Xt, MirroredRepeatWrapping as Kt } from "three";
/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt = navigator.xr != null && self.XRSession != null && navigator.xr.isSessionSupported != null;
var lt;
const Jt = qt && self.XRSession && ((lt = self.XRSession) == null ? void 0 : lt.requestHitTestSource) != null, Cs = self.ResizeObserver != null, Ms = self.IntersectionObserver != null, Qt = Jt, ys = (() => {
  const n = navigator.userAgent || navigator.vendor || self.opera;
  let e = !1;
  return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    n
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    n.substr(0, 4)
  )) && (e = !0), e;
})(), vs = /\bCrOS\b/.test(navigator.userAgent), en = /android/i.test(navigator.userAgent), Ue = /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, tn = /Safari\//.test(navigator.userAgent), nn = /firefox/i.test(navigator.userAgent), sn = /OculusBrowser/.test(navigator.userAgent), Ts = Ue && /CriOS\//.test(navigator.userAgent), Es = Ue && tn, bs = en && !nn && !sn, rn = !!(window.webkit && window.webkit.messageHandlers), on = (() => {
  if (Ue) {
    if (rn)
      return !!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);
    {
      const n = document.createElement("a");
      return !!(n.relList && n.relList.supports && n.relList.supports("ar"));
    }
  } else
    return !1;
})();
let re, ve, te, ce;
function fe(n, e = 1 / 0, t = null) {
  ve || (ve = new At(2, 2, 1, 1)), te || (te = new _t({
    uniforms: { blitTexture: new Rt(n) },
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
  })), te.uniforms.blitTexture.value = n, te.defines.IS_SRGB = n.colorSpace == ct, te.needsUpdate = !0, ce || (ce = new Dt(ve, te), ce.frustumCulled = !1);
  const s = new Nt(), r = new Se();
  r.add(ce), t === null && (t = re = new Ut({ antialias: !1 }));
  const i = Math.min(n.image.width, e), o = Math.min(n.image.height, e);
  t.setSize(i, o), t.clear(), t.render(r, s);
  const a = document.createElement("canvas"), l = a.getContext("2d");
  a.width = i, a.height = o, l.drawImage(t.domElement, 0, 0, i, o);
  const c = new kt(a);
  return c.minFilter = n.minFilter, c.magFilter = n.magFilter, c.wrapS = n.wrapS, c.wrapT = n.wrapT, c.name = n.name, re && (re.forceContextLoss(), re.dispose(), re = null), c;
}
const He = {
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
class ke {
  constructor() {
    this.pluginCallbacks = [], this.register(function(e) {
      return new mn(e);
    }), this.register(function(e) {
      return new xn(e);
    }), this.register(function(e) {
      return new Cn(e);
    }), this.register(function(e) {
      return new Mn(e);
    }), this.register(function(e) {
      return new yn(e);
    }), this.register(function(e) {
      return new vn(e);
    }), this.register(function(e) {
      return new wn(e);
    }), this.register(function(e) {
      return new Ln(e);
    }), this.register(function(e) {
      return new Tn(e);
    }), this.register(function(e) {
      return new En(e);
    }), this.register(function(e) {
      return new bn(e);
    }), this.register(function(e) {
      return new Sn(e);
    }), this.register(function(e) {
      return new In(e);
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
  parse(e, t, s, r) {
    const i = new gn(), o = [];
    for (let a = 0, l = this.pluginCallbacks.length; a < l; a++)
      o.push(this.pluginCallbacks[a](i));
    i.setPlugins(o), i.write(e, t, r).catch(s);
  }
  parseAsync(e, t) {
    const s = this;
    return new Promise(function(r, i) {
      s.parse(e, r, i, t);
    });
  }
}
const v = {
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
}, Te = "KHR_mesh_quantization", G = {};
G[$t] = v.NEAREST;
G[Zt] = v.NEAREST_MIPMAP_NEAREST;
G[Ht] = v.NEAREST_MIPMAP_LINEAR;
G[Vt] = v.LINEAR;
G[jt] = v.LINEAR_MIPMAP_NEAREST;
G[Wt] = v.LINEAR_MIPMAP_LINEAR;
G[Yt] = v.CLAMP_TO_EDGE;
G[Xt] = v.REPEAT;
G[Kt] = v.MIRRORED_REPEAT;
const Ve = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
}, an = new Bt(), je = 12, ln = 1179937895, cn = 2, We = 8, un = 1313821514, hn = 5130562;
function ae(n, e) {
  return n.length === e.length && n.every(function(t, s) {
    return t === e[s];
  });
}
function fn(n) {
  return new TextEncoder().encode(n).buffer;
}
function pn(n) {
  return ae(n.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function dn(n, e, t) {
  const s = {
    min: new Array(n.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(n.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let r = e; r < e + t; r++)
    for (let i = 0; i < n.itemSize; i++) {
      let o;
      n.itemSize > 4 ? o = n.array[r * n.itemSize + i] : (i === 0 ? o = n.getX(r) : i === 1 ? o = n.getY(r) : i === 2 ? o = n.getZ(r) : i === 3 && (o = n.getW(r)), n.normalized === !0 && (o = Ie.normalize(o, n.array))), s.min[i] = Math.min(s.min[i], o), s.max[i] = Math.max(s.max[i], o);
    }
  return s;
}
function pt(n) {
  return Math.ceil(n / 4) * 4;
}
function Ee(n, e = 0) {
  const t = pt(n.byteLength);
  if (t !== n.byteLength) {
    const s = new Uint8Array(t);
    if (s.set(new Uint8Array(n)), e !== 0)
      for (let r = n.byteLength; r < t; r++)
        s[r] = e;
    return s.buffer;
  }
  return n;
}
function Ye() {
  return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
function Xe(n, e) {
  if (n.toBlob !== void 0)
    return new Promise((s) => n.toBlob(s, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), n.convertToBlob({
    type: e,
    quality: t
  });
}
class gn {
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
  async write(e, t, s = {}) {
    this.options = Object.assign({
      // default options
      binary: !1,
      trs: !1,
      onlyVisible: !0,
      maxTextureSize: 1 / 0,
      animations: [],
      includeCustomExtensions: !1
    }, s), this.options.animations.length > 0 && (this.options.trs = !0), this.processInput(e), await Promise.all(this.pending);
    const r = this, i = r.buffers, o = r.json;
    s = r.options;
    const a = r.extensionsUsed, l = r.extensionsRequired, c = new Blob(i, { type: "application/octet-stream" }), u = Object.keys(a), h = Object.keys(l);
    if (u.length > 0 && (o.extensionsUsed = u), h.length > 0 && (o.extensionsRequired = h), o.buffers && o.buffers.length > 0 && (o.buffers[0].byteLength = c.size), s.binary === !0) {
      const d = new FileReader();
      d.readAsArrayBuffer(c), d.onloadend = function() {
        const f = Ee(d.result), p = new DataView(new ArrayBuffer(We));
        p.setUint32(0, f.byteLength, !0), p.setUint32(4, hn, !0);
        const g = Ee(fn(JSON.stringify(o)), 32), m = new DataView(new ArrayBuffer(We));
        m.setUint32(0, g.byteLength, !0), m.setUint32(4, un, !0);
        const y = new ArrayBuffer(je), E = new DataView(y);
        E.setUint32(0, ln, !0), E.setUint32(4, cn, !0);
        const R = je + m.byteLength + g.byteLength + p.byteLength + f.byteLength;
        E.setUint32(8, R, !0);
        const x = new Blob([
          y,
          m,
          g,
          p,
          f
        ], { type: "application/octet-stream" }), C = new FileReader();
        C.readAsArrayBuffer(x), C.onloadend = function() {
          t(C.result);
        };
      };
    } else if (o.buffers && o.buffers.length > 0) {
      const d = new FileReader();
      d.readAsDataURL(c), d.onloadend = function() {
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
    const s = this.options, r = this.extensionsUsed;
    try {
      const i = JSON.parse(JSON.stringify(e.userData));
      if (s.includeCustomExtensions && i.gltfExtensions) {
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
    const s = new pe();
    for (let r = 0, i = e.count; r < i; r++)
      if (Math.abs(s.fromBufferAttribute(e, r).length() - 1) > 5e-4)
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
    const s = e.clone(), r = new pe();
    for (let i = 0, o = s.count; i < o; i++)
      r.fromBufferAttribute(s, i), r.x === 0 && r.y === 0 && r.z === 0 ? r.setX(1) : r.normalize(), s.setXYZ(i, r.x, r.y, r.z);
    return t.attributesNormalized.set(e, s), s;
  }
  /**
   * Applies a texture transform, if present, to the map definition. Requires
   * the KHR_texture_transform extension.
   *
   * @param {Object} mapDef
   * @param {THREE.Texture} texture
   */
  applyTextureTransform(e, t) {
    let s = !1;
    const r = {};
    (t.offset.x !== 0 || t.offset.y !== 0) && (r.offset = t.offset.toArray(), s = !0), t.rotation !== 0 && (r.rotation = t.rotation, s = !0), (t.repeat.x !== 1 || t.repeat.y !== 1) && (r.scale = t.repeat.toArray(), s = !0), s && (e.extensions = e.extensions || {}, e.extensions.KHR_texture_transform = r, this.extensionsUsed.KHR_texture_transform = !0);
  }
  buildMetalRoughTexture(e, t) {
    if (e === t)
      return e;
    function s(f) {
      return f.colorSpace === ct ? function(g) {
        return g < 0.04045 ? g * 0.0773993808 : Math.pow(g * 0.9478672986 + 0.0521327014, 2.4);
      } : function(g) {
        return g;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof ye && (e = fe(e)), t instanceof ye && (t = fe(t));
    const r = e ? e.image : null, i = t ? t.image : null, o = Math.max(r ? r.width : 0, i ? i.width : 0), a = Math.max(r ? r.height : 0, i ? i.height : 0), l = Ye();
    l.width = o, l.height = a;
    const c = l.getContext("2d");
    c.fillStyle = "#00ffff", c.fillRect(0, 0, o, a);
    const u = c.getImageData(0, 0, o, a);
    if (r) {
      c.drawImage(r, 0, 0, o, a);
      const f = s(e), p = c.getImageData(0, 0, o, a).data;
      for (let g = 2; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    if (i) {
      c.drawImage(i, 0, 0, o, a);
      const f = s(t), p = c.getImageData(0, 0, o, a).data;
      for (let g = 1; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    c.putImageData(u, 0, 0);
    const d = (e || t).clone();
    return d.source = new Ft(l), d.colorSpace = ut, d.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), d;
  }
  /**
   * Process a buffer to append to the default one.
   * @param  {ArrayBuffer} buffer
   * @return {Integer}
   */
  processBuffer(e) {
    const t = this.json, s = this.buffers;
    return t.buffers || (t.buffers = [{ byteLength: 0 }]), s.push(e), 0;
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
  processBufferView(e, t, s, r, i) {
    const o = this.json;
    o.bufferViews || (o.bufferViews = []);
    let a;
    switch (t) {
      case v.BYTE:
      case v.UNSIGNED_BYTE:
        a = 1;
        break;
      case v.SHORT:
      case v.UNSIGNED_SHORT:
        a = 2;
        break;
      default:
        a = 4;
    }
    let l = e.itemSize * a;
    i === v.ARRAY_BUFFER && (l = Math.ceil(l / 4) * 4);
    const c = pt(r * l), u = new DataView(new ArrayBuffer(c));
    let h = 0;
    for (let p = s; p < s + r; p++) {
      for (let g = 0; g < e.itemSize; g++) {
        let m;
        e.itemSize > 4 ? m = e.array[p * e.itemSize + g] : (g === 0 ? m = e.getX(p) : g === 1 ? m = e.getY(p) : g === 2 ? m = e.getZ(p) : g === 3 && (m = e.getW(p)), e.normalized === !0 && (m = Ie.normalize(m, e.array))), t === v.FLOAT ? u.setFloat32(h, m, !0) : t === v.INT ? u.setInt32(h, m, !0) : t === v.UNSIGNED_INT ? u.setUint32(h, m, !0) : t === v.SHORT ? u.setInt16(h, m, !0) : t === v.UNSIGNED_SHORT ? u.setUint16(h, m, !0) : t === v.BYTE ? u.setInt8(h, m) : t === v.UNSIGNED_BYTE && u.setUint8(h, m), h += a;
      }
      h % l !== 0 && (h += l - h % l);
    }
    const d = {
      buffer: this.processBuffer(u.buffer),
      byteOffset: this.byteOffset,
      byteLength: c
    };
    return i !== void 0 && (d.target = i), i === v.ARRAY_BUFFER && (d.byteStride = l), this.byteOffset += c, o.bufferViews.push(d), {
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
    const t = this, s = t.json;
    return s.bufferViews || (s.bufferViews = []), new Promise(function(r) {
      const i = new FileReader();
      i.readAsArrayBuffer(e), i.onloadend = function() {
        const o = Ee(i.result), a = {
          buffer: t.processBuffer(o),
          byteOffset: t.byteOffset,
          byteLength: o.byteLength
        };
        t.byteOffset += o.byteLength, r(s.bufferViews.push(a) - 1);
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
  processAccessor(e, t, s, r) {
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
      a = v.FLOAT;
    else if (e.array.constructor === Int32Array)
      a = v.INT;
    else if (e.array.constructor === Uint32Array)
      a = v.UNSIGNED_INT;
    else if (e.array.constructor === Int16Array)
      a = v.SHORT;
    else if (e.array.constructor === Uint16Array)
      a = v.UNSIGNED_SHORT;
    else if (e.array.constructor === Int8Array)
      a = v.BYTE;
    else if (e.array.constructor === Uint8Array)
      a = v.UNSIGNED_BYTE;
    else
      throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: " + e.array.constructor.name);
    if (s === void 0 && (s = 0), (r === void 0 || r === 1 / 0) && (r = e.count), r === 0)
      return null;
    const l = dn(e, s, r);
    let c;
    t !== void 0 && (c = e === t.index ? v.ELEMENT_ARRAY_BUFFER : v.ARRAY_BUFFER);
    const u = this.processBufferView(e, a, s, r, c), h = {
      bufferView: u.id,
      byteOffset: u.byteOffset,
      componentType: a,
      count: r,
      max: l.max,
      min: l.min,
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
  processImage(e, t, s, r = "image/png") {
    if (e !== null) {
      const i = this, o = i.cache, a = i.json, l = i.options, c = i.pending;
      o.images.has(e) || o.images.set(e, {});
      const u = o.images.get(e), h = r + ":flipY/" + s.toString();
      if (u[h] !== void 0)
        return u[h];
      a.images || (a.images = []);
      const d = { mimeType: r }, f = Ye();
      f.width = Math.min(e.width, l.maxTextureSize), f.height = Math.min(e.height, l.maxTextureSize);
      const p = f.getContext("2d");
      if (s === !0 && (p.translate(0, f.height), p.scale(1, -1)), e.data !== void 0) {
        t !== Ot && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > l.maxTextureSize || e.height > l.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const m = new Uint8ClampedArray(e.height * e.width * 4);
        for (let y = 0; y < m.length; y += 4)
          m[y + 0] = e.data[y + 0], m[y + 1] = e.data[y + 1], m[y + 2] = e.data[y + 2], m[y + 3] = e.data[y + 3];
        p.putImageData(new ImageData(m, e.width, e.height), 0, 0);
      } else if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
        p.drawImage(e, 0, 0, f.width, f.height);
      else
        throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");
      l.binary === !0 ? c.push(
        Xe(f, r).then((m) => i.processBufferViewImage(m)).then((m) => {
          d.bufferView = m;
        })
      ) : f.toDataURL !== void 0 ? d.uri = f.toDataURL(r) : c.push(
        Xe(f, r).then((m) => new FileReader().readAsDataURL(m)).then((m) => {
          d.uri = m;
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
    const s = {
      magFilter: G[e.magFilter],
      minFilter: G[e.minFilter],
      wrapS: G[e.wrapS],
      wrapT: G[e.wrapT]
    };
    return t.samplers.push(s) - 1;
  }
  /**
   * Process texture
   * @param  {Texture} map Map to process
   * @return {Integer} Index of the processed texture in the "textures" array
   */
  processTexture(e) {
    const s = this.options, r = this.cache, i = this.json;
    if (r.textures.has(e))
      return r.textures.get(e);
    i.textures || (i.textures = []), e instanceof ye && (e = fe(e, s.maxTextureSize));
    let o = e.userData.mimeType;
    o === "image/webp" && (o = "image/png");
    const a = {
      sampler: this.processSampler(e),
      source: this.processImage(e.image, e.format, e.flipY, o)
    };
    e.name && (a.name = e.name), this._invokeAll(function(c) {
      c.writeTexture && c.writeTexture(e, a);
    });
    const l = i.textures.push(a) - 1;
    return r.textures.set(e, l), l;
  }
  /**
   * Process material
   * @param  {THREE.Material} material Material to process
   * @return {Integer|null} Index of the processed material in the "materials" array
   */
  processMaterial(e) {
    const t = this.cache, s = this.json;
    if (t.materials.has(e))
      return t.materials.get(e);
    if (e.isShaderMaterial)
      return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."), null;
    s.materials || (s.materials = []);
    const r = { pbrMetallicRoughness: {} };
    e.isMeshStandardMaterial !== !0 && e.isMeshBasicMaterial !== !0 && console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");
    const i = e.color.toArray().concat([e.opacity]);
    if (ae(i, [1, 1, 1, 1]) || (r.pbrMetallicRoughness.baseColorFactor = i), e.isMeshStandardMaterial ? (r.pbrMetallicRoughness.metallicFactor = e.metalness, r.pbrMetallicRoughness.roughnessFactor = e.roughness) : (r.pbrMetallicRoughness.metallicFactor = 0.5, r.pbrMetallicRoughness.roughnessFactor = 0.5), e.metalnessMap || e.roughnessMap) {
      const a = this.buildMetalRoughTexture(e.metalnessMap, e.roughnessMap), l = {
        index: this.processTexture(a),
        channel: a.channel
      };
      this.applyTextureTransform(l, a), r.pbrMetallicRoughness.metallicRoughnessTexture = l;
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
        const c = {
          index: this.processTexture(e.emissiveMap),
          texCoord: e.emissiveMap.channel
        };
        this.applyTextureTransform(c, e.emissiveMap), r.emissiveTexture = c;
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
    e.transparent ? r.alphaMode = "BLEND" : e.alphaTest > 0 && (r.alphaMode = "MASK", r.alphaCutoff = e.alphaTest), e.side === ht && (r.doubleSided = !0), e.name !== "" && (r.name = e.name), this.serializeUserData(e, r), this._invokeAll(function(a) {
      a.writeMaterial && a.writeMaterial(e, r);
    });
    const o = s.materials.push(r) - 1;
    return t.materials.set(e, o), o;
  }
  /**
   * Process mesh
   * @param  {THREE.Mesh} mesh Mesh to process
   * @return {Integer|null} Index of the processed mesh in the "meshes" array
   */
  processMesh(e) {
    const t = this.cache, s = this.json, r = [e.geometry.uuid];
    if (Array.isArray(e.material))
      for (let x = 0, C = e.material.length; x < C; x++)
        r.push(e.material[x].uuid);
    else
      r.push(e.material.uuid);
    const i = r.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const o = e.geometry;
    let a;
    e.isLineSegments ? a = v.LINES : e.isLineLoop ? a = v.LINE_LOOP : e.isLine ? a = v.LINE_STRIP : e.isPoints ? a = v.POINTS : a = e.material.wireframe ? v.LINES : v.TRIANGLES;
    const l = {}, c = {}, u = [], h = [], d = {
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
    for (let x in o.attributes) {
      if (x.slice(0, 5) === "morph")
        continue;
      const C = o.attributes[x];
      if (x = d[x] || x.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x) || (x = "_" + x), t.attributes.has(this.getUID(C))) {
        c[x] = t.attributes.get(this.getUID(C));
        continue;
      }
      p = null;
      const M = C.array;
      x === "JOINTS_0" && !(M instanceof Uint16Array) && !(M instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), p = new q(new Uint16Array(M), C.itemSize, C.normalized));
      const L = this.processAccessor(p || C, o);
      L !== null && (x.startsWith("_") || this.detectMeshQuantization(x, C), c[x] = L, t.attributes.set(this.getUID(C), L));
    }
    if (f !== void 0 && o.setAttribute("normal", f), Object.keys(c).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const x = [], C = [], b = {};
      if (e.morphTargetDictionary !== void 0)
        for (const M in e.morphTargetDictionary)
          b[e.morphTargetDictionary[M]] = M;
      for (let M = 0; M < e.morphTargetInfluences.length; ++M) {
        const L = {};
        let w = !1;
        for (const _ in o.morphAttributes) {
          if (_ !== "position" && _ !== "normal") {
            w || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), w = !0);
            continue;
          }
          const N = o.morphAttributes[_][M], D = _.toUpperCase(), k = o.attributes[_];
          if (t.attributes.has(this.getUID(N, !0))) {
            L[D] = t.attributes.get(this.getUID(N, !0));
            continue;
          }
          const U = N.clone();
          if (!o.morphTargetsRelative)
            for (let S = 0, Z = N.count; S < Z; S++)
              for (let A = 0; A < N.itemSize; A++)
                A === 0 && U.setX(S, N.getX(S) - k.getX(S)), A === 1 && U.setY(S, N.getY(S) - k.getY(S)), A === 2 && U.setZ(S, N.getZ(S) - k.getZ(S)), A === 3 && U.setW(S, N.getW(S) - k.getW(S));
          L[D] = this.processAccessor(U, o), t.attributes.set(this.getUID(k, !0), L[D]);
        }
        h.push(L), x.push(e.morphTargetInfluences[M]), e.morphTargetDictionary !== void 0 && C.push(b[M]);
      }
      l.weights = x, C.length > 0 && (l.extras = {}, l.extras.targetNames = C);
    }
    const g = Array.isArray(e.material);
    if (g && o.groups.length === 0)
      return null;
    let m = !1;
    if (g && o.index === null) {
      const x = [];
      for (let C = 0, b = o.attributes.position.count; C < b; C++)
        x[C] = C;
      o.setIndex(x), m = !0;
    }
    const y = g ? e.material : [e.material], E = g ? o.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let x = 0, C = E.length; x < C; x++) {
      const b = {
        mode: a,
        attributes: c
      };
      if (this.serializeUserData(o, b), h.length > 0 && (b.targets = h), o.index !== null) {
        let L = this.getUID(o.index);
        (E[x].start !== void 0 || E[x].count !== void 0) && (L += ":" + E[x].start + ":" + E[x].count), t.attributes.has(L) ? b.indices = t.attributes.get(L) : (b.indices = this.processAccessor(o.index, o, E[x].start, E[x].count), t.attributes.set(L, b.indices)), b.indices === null && delete b.indices;
      }
      const M = this.processMaterial(y[E[x].materialIndex]);
      M !== null && (b.material = M), u.push(b);
    }
    m === !0 && o.setIndex(null), l.primitives = u, s.meshes || (s.meshes = []), this._invokeAll(function(x) {
      x.writeMesh && x.writeMesh(e, l);
    });
    const R = s.meshes.push(l) - 1;
    return t.meshes.set(i, R), R;
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
    let s;
    switch (t.array.constructor) {
      case Int8Array:
        s = "byte";
        break;
      case Uint8Array:
        s = "unsigned byte";
        break;
      case Int16Array:
        s = "short";
        break;
      case Uint16Array:
        s = "unsigned short";
        break;
      default:
        return;
    }
    t.normalized && (s += " normalized");
    const r = e.split("_", 1)[0];
    He[r] && He[r].includes(s) && (this.extensionsUsed[Te] = !0, this.extensionsRequired[Te] = !0);
  }
  /**
   * Process camera
   * @param  {THREE.Camera} camera Camera to process
   * @return {Integer}      Index of the processed mesh in the "camera" array
   */
  processCamera(e) {
    const t = this.json;
    t.cameras || (t.cameras = []);
    const s = e.isOrthographicCamera, r = {
      type: s ? "orthographic" : "perspective"
    };
    return s ? r.orthographic = {
      xmag: e.right * 2,
      ymag: e.top * 2,
      zfar: e.far <= 0 ? 1e-3 : e.far,
      znear: e.near < 0 ? 0 : e.near
    } : r.perspective = {
      aspectRatio: e.aspect,
      yfov: Ie.degToRad(e.fov),
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
    const s = this.json, r = this.nodeMap;
    s.animations || (s.animations = []), e = ke.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, o = [], a = [];
    for (let l = 0; l < i.length; ++l) {
      const c = i[l], u = de.parseTrackName(c.name);
      let h = de.findNode(t, u.nodeName);
      const d = Ve[u.propertyName];
      if (u.objectName === "bones" && (h.isSkinnedMesh === !0 ? h = h.skeleton.getBoneByName(u.objectIndex) : h = void 0), !h || !d)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', c.name), null;
      const f = 1;
      let p = c.values.length / c.times.length;
      d === Ve.morphTargetInfluences && (p /= h.morphTargetInfluences.length);
      let g;
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === !0 ? (g = "CUBICSPLINE", p /= 3) : c.getInterpolation() === Pt ? g = "STEP" : g = "LINEAR", a.push({
        input: this.processAccessor(new q(c.times, f)),
        output: this.processAccessor(new q(c.values, p)),
        interpolation: g
      }), o.push({
        sampler: a.length - 1,
        target: {
          node: r.get(h),
          path: d
        }
      });
    }
    return s.animations.push({
      name: e.name || "clip_" + s.animations.length,
      samplers: a,
      channels: o
    }), s.animations.length - 1;
  }
  /**
   * @param {THREE.Object3D} object
   * @return {number|null}
   */
  processSkin(e) {
    const t = this.json, s = this.nodeMap, r = t.nodes[s.get(e)], i = e.skeleton;
    if (i === void 0)
      return null;
    const o = e.skeleton.bones[0];
    if (o === void 0)
      return null;
    const a = [], l = new Float32Array(i.bones.length * 16), c = new ft();
    for (let h = 0; h < i.bones.length; ++h)
      a.push(s.get(i.bones[h])), c.copy(i.boneInverses[h]), c.multiply(e.bindMatrix).toArray(l, h * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new q(l, 16)),
      joints: a,
      skeleton: s.get(o)
    }), r.skin = t.skins.length - 1;
  }
  /**
   * Process Object3D node
   * @param  {THREE.Object3D} node Object3D to processNode
   * @return {Integer} Index of the node in the nodes list
   */
  processNode(e) {
    const t = this.json, s = this.options, r = this.nodeMap;
    t.nodes || (t.nodes = []);
    const i = {};
    if (s.trs) {
      const a = e.quaternion.toArray(), l = e.position.toArray(), c = e.scale.toArray();
      ae(a, [0, 0, 0, 1]) || (i.rotation = a), ae(l, [0, 0, 0]) || (i.translation = l), ae(c, [1, 1, 1]) || (i.scale = c);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), pn(e.matrix) === !1 && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else
      e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let l = 0, c = e.children.length; l < c; l++) {
        const u = e.children[l];
        if (u.visible || s.onlyVisible === !1) {
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
    const t = this.json, s = this.options;
    t.scenes || (t.scenes = [], t.scene = 0);
    const r = {};
    e.name !== "" && (r.name = e.name), t.scenes.push(r);
    const i = [];
    for (let o = 0, a = e.children.length; o < a; o++) {
      const l = e.children[o];
      if (l.visible || s.onlyVisible === !1) {
        const c = this.processNode(l);
        c !== null && i.push(c);
      }
    }
    i.length > 0 && (r.nodes = i), this.serializeUserData(e, r);
  }
  /**
   * Creates a Scene to hold a list of objects and parse it
   * @param  {Array} objects List of objects to process
   */
  processObjects(e) {
    const t = new Se();
    t.name = "AuxScene";
    for (let s = 0; s < e.length; s++)
      t.children.push(e[s]);
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
    const s = [];
    for (let r = 0; r < e.length; r++)
      e[r] instanceof Se ? this.processScene(e[r]) : s.push(e[r]);
    s.length > 0 && this.processObjects(s);
    for (let r = 0; r < this.skins.length; ++r)
      this.processSkin(this.skins[r]);
    for (let r = 0; r < t.animations.length; ++r)
      this.processAnimation(t.animations[r], e[0]);
    this._invokeAll(function(r) {
      r.afterParse && r.afterParse(e);
    });
  }
  _invokeAll(e) {
    for (let t = 0, s = this.plugins.length; t < s; t++)
      e(this.plugins[t]);
  }
}
class mn {
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
    const s = this.writer, r = s.json, i = s.extensionsUsed, o = {};
    e.name && (o.name = e.name), o.color = e.color.toArray(), o.intensity = e.intensity, e.isDirectionalLight ? o.type = "directional" : e.isPointLight ? (o.type = "point", e.distance > 0 && (o.range = e.distance)) : e.isSpotLight && (o.type = "spot", e.distance > 0 && (o.range = e.distance), o.spot = {}, o.spot.innerConeAngle = (1 - e.penumbra) * e.angle, o.spot.outerConeAngle = e.angle), e.decay !== void 0 && e.decay !== 2 && console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."), e.target && (e.target.parent !== e || e.target.position.x !== 0 || e.target.position.y !== 0 || e.target.position.z !== -1) && console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."), i[this.name] || (r.extensions = r.extensions || {}, r.extensions[this.name] = { lights: [] }, i[this.name] = !0);
    const a = r.extensions[this.name].lights;
    a.push(o), t.extensions = t.extensions || {}, t.extensions[this.name] = { light: a.length - 1 };
  }
}
class xn {
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
class wn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_clearcoat";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.clearcoat === 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (i.clearcoatFactor = e.clearcoat, e.clearcoatMap) {
      const o = {
        index: s.processTexture(e.clearcoatMap),
        texCoord: e.clearcoatMap.channel
      };
      s.applyTextureTransform(o, e.clearcoatMap), i.clearcoatTexture = o;
    }
    if (i.clearcoatRoughnessFactor = e.clearcoatRoughness, e.clearcoatRoughnessMap) {
      const o = {
        index: s.processTexture(e.clearcoatRoughnessMap),
        texCoord: e.clearcoatRoughnessMap.channel
      };
      s.applyTextureTransform(o, e.clearcoatRoughnessMap), i.clearcoatRoughnessTexture = o;
    }
    if (e.clearcoatNormalMap) {
      const o = {
        index: s.processTexture(e.clearcoatNormalMap),
        texCoord: e.clearcoatNormalMap.channel
      };
      s.applyTextureTransform(o, e.clearcoatNormalMap), i.clearcoatNormalTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class Ln {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_iridescence";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.iridescence === 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (i.iridescenceFactor = e.iridescence, e.iridescenceMap) {
      const o = {
        index: s.processTexture(e.iridescenceMap),
        texCoord: e.iridescenceMap.channel
      };
      s.applyTextureTransform(o, e.iridescenceMap), i.iridescenceTexture = o;
    }
    if (i.iridescenceIor = e.iridescenceIOR, i.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0], i.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1], e.iridescenceThicknessMap) {
      const o = {
        index: s.processTexture(e.iridescenceThicknessMap),
        texCoord: e.iridescenceThicknessMap.channel
      };
      s.applyTextureTransform(o, e.iridescenceThicknessMap), i.iridescenceThicknessTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class Cn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_transmission";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (i.transmissionFactor = e.transmission, e.transmissionMap) {
      const o = {
        index: s.processTexture(e.transmissionMap),
        texCoord: e.transmissionMap.channel
      };
      s.applyTextureTransform(o, e.transmissionMap), i.transmissionTexture = o;
    }
    t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class Mn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_volume";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.transmission === 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (i.thicknessFactor = e.thickness, e.thicknessMap) {
      const o = {
        index: s.processTexture(e.thicknessMap),
        texCoord: e.thicknessMap.channel
      };
      s.applyTextureTransform(o, e.thicknessMap), i.thicknessTexture = o;
    }
    i.attenuationDistance = e.attenuationDistance, i.attenuationColor = e.attenuationColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class yn {
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
class vn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(an) && !e.specularIntensityMap && !e.specularColorMap)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (e.specularIntensityMap) {
      const o = {
        index: s.processTexture(e.specularIntensityMap),
        texCoord: e.specularIntensityMap.channel
      };
      s.applyTextureTransform(o, e.specularIntensityMap), i.specularTexture = o;
    }
    if (e.specularColorMap) {
      const o = {
        index: s.processTexture(e.specularColorMap),
        texCoord: e.specularColorMap.channel
      };
      s.applyTextureTransform(o, e.specularColorMap), i.specularColorTexture = o;
    }
    i.specularFactor = e.specularIntensity, i.specularColorFactor = e.specularColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class Tn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_sheen";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.sheen == 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (e.sheenRoughnessMap) {
      const o = {
        index: s.processTexture(e.sheenRoughnessMap),
        texCoord: e.sheenRoughnessMap.channel
      };
      s.applyTextureTransform(o, e.sheenRoughnessMap), i.sheenRoughnessTexture = o;
    }
    if (e.sheenColorMap) {
      const o = {
        index: s.processTexture(e.sheenColorMap),
        texCoord: e.sheenColorMap.channel
      };
      s.applyTextureTransform(o, e.sheenColorMap), i.sheenColorTexture = o;
    }
    i.sheenRoughnessFactor = e.sheenRoughness, i.sheenColorFactor = e.sheenColor.toArray(), t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class En {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_anisotropy";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.anisotropy == 0)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (e.anisotropyMap) {
      const o = { index: s.processTexture(e.anisotropyMap) };
      s.applyTextureTransform(o, e.anisotropyMap), i.anisotropyTexture = o;
    }
    i.anisotropyStrength = e.anisotropy, i.anisotropyRotation = e.anisotropyRotation, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class bn {
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
class Sn {
  constructor(e) {
    this.writer = e, this.name = "EXT_materials_bump";
  }
  writeMaterial(e, t) {
    if (!e.isMeshStandardMaterial || e.bumpScale === 1 && !e.bumpMap)
      return;
    const s = this.writer, r = s.extensionsUsed, i = {};
    if (e.bumpMap) {
      const o = {
        index: s.processTexture(e.bumpMap),
        texCoord: e.bumpMap.channel
      };
      s.applyTextureTransform(o, e.bumpMap), i.bumpTexture = o;
    }
    i.bumpFactor = e.bumpScale, t.extensions = t.extensions || {}, t.extensions[this.name] = i, r[this.name] = !0;
  }
}
class In {
  constructor(e) {
    this.writer = e, this.name = "EXT_mesh_gpu_instancing";
  }
  writeNode(e, t) {
    if (!e.isInstancedMesh)
      return;
    const s = this.writer, r = e, i = new Float32Array(r.count * 3), o = new Float32Array(r.count * 4), a = new Float32Array(r.count * 3), l = new ft(), c = new pe(), u = new zt(), h = new pe();
    for (let f = 0; f < r.count; f++)
      r.getMatrixAt(f, l), l.decompose(c, u, h), c.toArray(i, f * 3), u.toArray(o, f * 4), h.toArray(a, f * 3);
    const d = {
      TRANSLATION: s.processAccessor(new q(i, 3)),
      ROTATION: s.processAccessor(new q(o, 4)),
      SCALE: s.processAccessor(new q(a, 3))
    };
    r.instanceColor && (d._COLOR_0 = s.processAccessor(r.instanceColor)), t.extensions = t.extensions || {}, t.extensions[this.name] = { attributes: d }, s.extensionsUsed[this.name] = !0, s.extensionsRequired[this.name] = !0;
  }
}
ke.Utils = {
  insertKeyframe: function(n, e) {
    const s = n.getValueSize(), r = new n.TimeBufferType(n.times.length + 1), i = new n.ValueBufferType(n.values.length + s), o = n.createInterpolant(new n.ValueBufferType(s));
    let a;
    if (n.times.length === 0) {
      r[0] = e;
      for (let l = 0; l < s; l++)
        i[l] = 0;
      a = 0;
    } else if (e < n.times[0]) {
      if (Math.abs(n.times[0] - e) < 1e-3)
        return 0;
      r[0] = e, r.set(n.times, 1), i.set(o.evaluate(e), 0), i.set(n.values, s), a = 0;
    } else if (e > n.times[n.times.length - 1]) {
      if (Math.abs(n.times[n.times.length - 1] - e) < 1e-3)
        return n.times.length - 1;
      r[r.length - 1] = e, r.set(n.times, 0), i.set(n.values, 0), i.set(o.evaluate(e), n.values.length), a = r.length - 1;
    } else
      for (let l = 0; l < n.times.length; l++) {
        if (Math.abs(n.times[l] - e) < 1e-3)
          return l;
        if (n.times[l] < e && n.times[l + 1] > e) {
          r.set(n.times.slice(0, l + 1), 0), r[l + 1] = e, r.set(n.times.slice(l + 1), l + 2), i.set(n.values.slice(0, (l + 1) * s), 0), i.set(o.evaluate(e), (l + 1) * s), i.set(n.values.slice((l + 1) * s), (l + 2) * s), a = l + 1;
          break;
        }
      }
    return n.times = r, n.values = i, a;
  },
  mergeMorphTargetTracks: function(n, e) {
    const t = [], s = {}, r = n.tracks;
    for (let i = 0; i < r.length; ++i) {
      let o = r[i];
      const a = de.parseTrackName(o.name), l = de.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(o);
        continue;
      }
      if (o.createInterpolant !== o.InterpolantFactoryMethodDiscrete && o.createInterpolant !== o.InterpolantFactoryMethodLinear) {
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), o = o.clone(), o.setInterpolation(Gt);
      }
      const c = l.morphTargetInfluences.length, u = l.morphTargetDictionary[a.propertyIndex];
      if (u === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let h;
      if (s[l.uuid] === void 0) {
        h = o.clone();
        const f = new h.ValueBufferType(c * h.times.length);
        for (let p = 0; p < h.times.length; p++)
          f[p * c + u] = h.values[p];
        h.name = (a.nodeName || "") + ".morphTargetInfluences", h.values = f, s[l.uuid] = h, t.push(h);
        continue;
      }
      const d = o.createInterpolant(new o.ValueBufferType(1));
      h = s[l.uuid];
      for (let f = 0; f < h.times.length; f++)
        h.values[f * c + u] = d.evaluate(h.times[f]);
      for (let f = 0; f < o.times.length; f++) {
        const p = this.insertKeyframe(h, o.times[f]);
        h.values[p * c + u] = o.values[f];
      }
    }
    return n.tracks = t, n;
  }
};
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/
var F = Uint8Array, $ = Uint16Array, Be = Int32Array, Fe = new F([
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
]), Oe = new F([
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
]), Ke = new F([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), dt = function(n, e) {
  for (var t = new $(31), s = 0; s < 31; ++s)
    t[s] = e += 1 << n[s - 1];
  for (var r = new Be(t[30]), s = 1; s < 30; ++s)
    for (var i = t[s]; i < t[s + 1]; ++i)
      r[i] = i - t[s] << 5 | s;
  return { b: t, r };
}, gt = dt(Fe, 2), An = gt.b, Ae = gt.r;
An[28] = 258, Ae[258] = 28;
var _n = dt(Oe, 0), qe = _n.r, _e = new $(32768);
for (var I = 0; I < 32768; ++I) {
  var X = (I & 43690) >> 1 | (I & 21845) << 1;
  X = (X & 52428) >> 2 | (X & 13107) << 2, X = (X & 61680) >> 4 | (X & 3855) << 4, _e[I] = ((X & 65280) >> 8 | (X & 255) << 8) >> 1;
}
var le = function(n, e, t) {
  for (var s = n.length, r = 0, i = new $(e); r < s; ++r)
    n[r] && ++i[n[r] - 1];
  var o = new $(e);
  for (r = 1; r < e; ++r)
    o[r] = o[r - 1] + i[r - 1] << 1;
  var a;
  if (t) {
    a = new $(1 << e);
    var l = 15 - e;
    for (r = 0; r < s; ++r)
      if (n[r])
        for (var c = r << 4 | n[r], u = e - n[r], h = o[n[r] - 1]++ << u, d = h | (1 << u) - 1; h <= d; ++h)
          a[_e[h] >> l] = c;
  } else
    for (a = new $(s), r = 0; r < s; ++r)
      n[r] && (a[r] = _e[o[n[r] - 1]++] >> 15 - n[r]);
  return a;
}, J = new F(288);
for (var I = 0; I < 144; ++I)
  J[I] = 8;
for (var I = 144; I < 256; ++I)
  J[I] = 9;
for (var I = 256; I < 280; ++I)
  J[I] = 7;
for (var I = 280; I < 288; ++I)
  J[I] = 8;
var ge = new F(32);
for (var I = 0; I < 32; ++I)
  ge[I] = 5;
var Rn = /* @__PURE__ */ le(J, 9, 0), Dn = /* @__PURE__ */ le(ge, 5, 0), mt = function(n) {
  return (n + 7) / 8 | 0;
}, xt = function(n, e, t) {
  return (e == null || e < 0) && (e = 0), (t == null || t > n.length) && (t = n.length), new F(n.subarray(e, t));
}, Nn = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], xe = function(n, e, t) {
  var s = new Error(e || Nn[n]);
  if (s.code = n, Error.captureStackTrace && Error.captureStackTrace(s, xe), !t)
    throw s;
  return s;
}, W = function(n, e, t) {
  t <<= e & 7;
  var s = e / 8 | 0;
  n[s] |= t, n[s + 1] |= t >> 8;
}, ie = function(n, e, t) {
  t <<= e & 7;
  var s = e / 8 | 0;
  n[s] |= t, n[s + 1] |= t >> 8, n[s + 2] |= t >> 16;
}, be = function(n, e) {
  for (var t = [], s = 0; s < n.length; ++s)
    n[s] && t.push({ s, f: n[s] });
  var r = t.length, i = t.slice();
  if (!r)
    return { t: Lt, l: 0 };
  if (r == 1) {
    var o = new F(t[0].s + 1);
    return o[t[0].s] = 1, { t: o, l: 1 };
  }
  t.sort(function(C, b) {
    return C.f - b.f;
  }), t.push({ s: -1, f: 25001 });
  var a = t[0], l = t[1], c = 0, u = 1, h = 2;
  for (t[0] = { s: -1, f: a.f + l.f, l: a, r: l }; u != r - 1; )
    a = t[t[c].f < t[h].f ? c++ : h++], l = t[c != u && t[c].f < t[h].f ? c++ : h++], t[u++] = { s: -1, f: a.f + l.f, l: a, r: l };
  for (var d = i[0].s, s = 1; s < r; ++s)
    i[s].s > d && (d = i[s].s);
  var f = new $(d + 1), p = Re(t[u - 1], f, 0);
  if (p > e) {
    var s = 0, g = 0, m = p - e, y = 1 << m;
    for (i.sort(function(b, M) {
      return f[M.s] - f[b.s] || b.f - M.f;
    }); s < r; ++s) {
      var E = i[s].s;
      if (f[E] > e)
        g += y - (1 << p - f[E]), f[E] = e;
      else
        break;
    }
    for (g >>= m; g > 0; ) {
      var R = i[s].s;
      f[R] < e ? g -= 1 << e - f[R]++ - 1 : ++s;
    }
    for (; s >= 0 && g; --s) {
      var x = i[s].s;
      f[x] == e && (--f[x], ++g);
    }
    p = e;
  }
  return { t: new F(f), l: p };
}, Re = function(n, e, t) {
  return n.s == -1 ? Math.max(Re(n.l, e, t + 1), Re(n.r, e, t + 1)) : e[n.s] = t;
}, Je = function(n) {
  for (var e = n.length; e && !n[--e]; )
    ;
  for (var t = new $(++e), s = 0, r = n[0], i = 1, o = function(l) {
    t[s++] = l;
  }, a = 1; a <= e; ++a)
    if (n[a] == r && a != e)
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
      i = 1, r = n[a];
    }
  return { c: t.subarray(0, s), n: e };
}, oe = function(n, e) {
  for (var t = 0, s = 0; s < e.length; ++s)
    t += n[s] * e[s];
  return t;
}, wt = function(n, e, t) {
  var s = t.length, r = mt(e + 2);
  n[r] = s & 255, n[r + 1] = s >> 8, n[r + 2] = n[r] ^ 255, n[r + 3] = n[r + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    n[r + i + 4] = t[i];
  return (r + 4 + s) * 8;
}, Qe = function(n, e, t, s, r, i, o, a, l, c, u) {
  W(e, u++, t), ++r[256];
  for (var h = be(r, 15), d = h.t, f = h.l, p = be(i, 15), g = p.t, m = p.l, y = Je(d), E = y.c, R = y.n, x = Je(g), C = x.c, b = x.n, M = new $(19), L = 0; L < E.length; ++L)
    ++M[E[L] & 31];
  for (var L = 0; L < C.length; ++L)
    ++M[C[L] & 31];
  for (var w = be(M, 7), _ = w.t, N = w.l, D = 19; D > 4 && !_[Ke[D - 1]]; --D)
    ;
  var k = c + 5 << 3, U = oe(r, J) + oe(i, ge) + o, S = oe(r, d) + oe(i, g) + o + 14 + 3 * D + oe(M, _) + 2 * M[16] + 3 * M[17] + 7 * M[18];
  if (l >= 0 && k <= U && k <= S)
    return wt(e, u, n.subarray(l, l + c));
  var Z, A, H, Y;
  if (W(e, u, 1 + (S < U)), u += 2, S < U) {
    Z = le(d, f, 0), A = d, H = le(g, m, 0), Y = g;
    var we = le(_, N, 0);
    W(e, u, R - 257), W(e, u + 5, b - 1), W(e, u + 10, D - 4), u += 14;
    for (var L = 0; L < D; ++L)
      W(e, u + 3 * L, _[Ke[L]]);
    u += 3 * D;
    for (var V = [E, C], se = 0; se < 2; ++se)
      for (var Q = V[se], L = 0; L < Q.length; ++L) {
        var j = Q[L] & 31;
        W(e, u, we[j]), u += _[j], j > 15 && (W(e, u, Q[L] >> 5 & 127), u += Q[L] >> 12);
      }
  } else
    Z = Rn, A = J, H = Dn, Y = ge;
  for (var L = 0; L < a; ++L) {
    var O = s[L];
    if (O > 255) {
      var j = O >> 18 & 31;
      ie(e, u, Z[j + 257]), u += A[j + 257], j > 7 && (W(e, u, O >> 23 & 31), u += Fe[j]);
      var ee = O & 31;
      ie(e, u, H[ee]), u += Y[ee], ee > 3 && (ie(e, u, O >> 5 & 8191), u += Oe[ee]);
    } else
      ie(e, u, Z[O]), u += A[O];
  }
  return ie(e, u, Z[256]), u + A[256];
}, Un = /* @__PURE__ */ new Be([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Lt = /* @__PURE__ */ new F(0), kn = function(n, e, t, s, r, i) {
  var o = i.z || n.length, a = new F(s + o + 5 * (1 + Math.ceil(o / 7e3)) + r), l = a.subarray(s, a.length - r), c = i.l, u = (i.r || 0) & 7;
  if (e) {
    u && (l[0] = i.r >> 3);
    for (var h = Un[e - 1], d = h >> 13, f = h & 8191, p = (1 << t) - 1, g = i.p || new $(32768), m = i.h || new $(p + 1), y = Math.ceil(t / 3), E = 2 * y, R = function(Me) {
      return (n[Me] ^ n[Me + 1] << y ^ n[Me + 2] << E) & p;
    }, x = new Be(25e3), C = new $(288), b = new $(32), M = 0, L = 0, w = i.i || 0, _ = 0, N = i.w || 0, D = 0; w + 2 < o; ++w) {
      var k = R(w), U = w & 32767, S = m[k];
      if (g[U] = S, m[k] = U, N <= w) {
        var Z = o - w;
        if ((M > 7e3 || _ > 24576) && (Z > 423 || !c)) {
          u = Qe(n, l, 0, x, C, b, L, _, D, w - D, u), _ = M = L = 0, D = w;
          for (var A = 0; A < 286; ++A)
            C[A] = 0;
          for (var A = 0; A < 30; ++A)
            b[A] = 0;
        }
        var H = 2, Y = 0, we = f, V = U - S & 32767;
        if (Z > 2 && k == R(w - V))
          for (var se = Math.min(d, Z) - 1, Q = Math.min(32767, w), j = Math.min(258, Z); V <= Q && --we && U != S; ) {
            if (n[w + H] == n[w + H - V]) {
              for (var O = 0; O < j && n[w + O] == n[w + O - V]; ++O)
                ;
              if (O > H) {
                if (H = O, Y = V, O > se)
                  break;
                for (var ee = Math.min(V, O - 2), Pe = 0, A = 0; A < ee; ++A) {
                  var Le = w - V + A & 32767, Tt = g[Le], ze = Le - Tt & 32767;
                  ze > Pe && (Pe = ze, S = Le);
                }
              }
            }
            U = S, S = g[U], V += U - S & 32767;
          }
        if (Y) {
          x[_++] = 268435456 | Ae[H] << 18 | qe[Y];
          var Ge = Ae[H] & 31, $e = qe[Y] & 31;
          L += Fe[Ge] + Oe[$e], ++C[257 + Ge], ++b[$e], N = w + H, ++M;
        } else
          x[_++] = n[w], ++C[n[w]];
      }
    }
    for (w = Math.max(w, N); w < o; ++w)
      x[_++] = n[w], ++C[n[w]];
    u = Qe(n, l, c, x, C, b, L, _, D, w - D, u), c || (i.r = u & 7 | l[u / 8 | 0] << 3, u -= 7, i.h = m, i.p = g, i.i = w, i.w = N);
  } else {
    for (var w = i.w || 0; w < o + c; w += 65535) {
      var Ce = w + 65535;
      Ce >= o && (l[u / 8 | 0] = c, Ce = o), u = wt(l, u + 1, n.subarray(w, Ce));
    }
    i.i = o;
  }
  return xt(a, 0, s + mt(u) + r);
}, Bn = /* @__PURE__ */ function() {
  for (var n = new Int32Array(256), e = 0; e < 256; ++e) {
    for (var t = e, s = 9; --s; )
      t = (t & 1 && -306674912) ^ t >>> 1;
    n[e] = t;
  }
  return n;
}(), Fn = function() {
  var n = -1;
  return {
    p: function(e) {
      for (var t = n, s = 0; s < e.length; ++s)
        t = Bn[t & 255 ^ e[s]] ^ t >>> 8;
      n = t;
    },
    d: function() {
      return ~n;
    }
  };
}, On = function(n, e, t, s, r) {
  if (!r && (r = { l: 1 }, e.dictionary)) {
    var i = e.dictionary.subarray(-32768), o = new F(i.length + n.length);
    o.set(i), o.set(n, i.length), n = o, r.w = i.length;
  }
  return kn(n, e.level == null ? 6 : e.level, e.mem == null ? r.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + e.mem, t, s, r);
}, Ct = function(n, e) {
  var t = {};
  for (var s in n)
    t[s] = n[s];
  for (var s in e)
    t[s] = e[s];
  return t;
}, B = function(n, e, t) {
  for (; t; ++e)
    n[e] = t, t >>>= 8;
};
function Pn(n, e) {
  return On(n, e || {}, 0, 0);
}
var Mt = function(n, e, t, s) {
  for (var r in n) {
    var i = n[r], o = e + r, a = s;
    Array.isArray(i) && (a = Ct(s, i[1]), i = i[0]), i instanceof F ? t[o] = [i, a] : (t[o += "/"] = [new F(0), a], Mt(i, o, t, s));
  }
}, et = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), zn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Gn = 0;
try {
  zn.decode(Lt, { stream: !0 }), Gn = 1;
} catch {
}
function me(n, e) {
  if (e) {
    for (var t = new F(n.length), s = 0; s < n.length; ++s)
      t[s] = n.charCodeAt(s);
    return t;
  }
  if (et)
    return et.encode(n);
  for (var r = n.length, i = new F(n.length + (n.length >> 1)), o = 0, a = function(u) {
    i[o++] = u;
  }, s = 0; s < r; ++s) {
    if (o + 5 > i.length) {
      var l = new F(o + 8 + (r - s << 1));
      l.set(i), i = l;
    }
    var c = n.charCodeAt(s);
    c < 128 || e ? a(c) : c < 2048 ? (a(192 | c >> 6), a(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | n.charCodeAt(++s) & 1023, a(240 | c >> 18), a(128 | c >> 12 & 63), a(128 | c >> 6 & 63), a(128 | c & 63)) : (a(224 | c >> 12), a(128 | c >> 6 & 63), a(128 | c & 63));
  }
  return xt(i, 0, o);
}
var De = function(n) {
  var e = 0;
  if (n)
    for (var t in n) {
      var s = n[t].length;
      s > 65535 && xe(9), e += s + 4;
    }
  return e;
}, tt = function(n, e, t, s, r, i, o, a) {
  var l = s.length, c = t.extra, u = a && a.length, h = De(c);
  B(n, e, o != null ? 33639248 : 67324752), e += 4, o != null && (n[e++] = 20, n[e++] = t.os), n[e] = 20, e += 2, n[e++] = t.flag << 1 | (i < 0 && 8), n[e++] = r && 8, n[e++] = t.compression & 255, n[e++] = t.compression >> 8;
  var d = new Date(t.mtime == null ? Date.now() : t.mtime), f = d.getFullYear() - 1980;
  if ((f < 0 || f > 119) && xe(10), B(n, e, f << 25 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >> 1), e += 4, i != -1 && (B(n, e, t.crc), B(n, e + 4, i < 0 ? -i - 2 : i), B(n, e + 8, t.size)), B(n, e + 12, l), B(n, e + 14, h), e += 16, o != null && (B(n, e, u), B(n, e + 6, t.attrs), B(n, e + 10, o), e += 14), n.set(s, e), e += l, h)
    for (var p in c) {
      var g = c[p], m = g.length;
      B(n, e, +p), B(n, e + 2, m), n.set(g, e + 4), e += 4 + m;
    }
  return u && (n.set(a, e), e += u), e;
}, $n = function(n, e, t, s, r) {
  B(n, e, 101010256), B(n, e + 8, t), B(n, e + 10, t), B(n, e + 12, s), B(n, e + 16, r);
};
function Zn(n, e) {
  e || (e = {});
  var t = {}, s = [];
  Mt(n, "", t, e);
  var r = 0, i = 0;
  for (var o in t) {
    var a = t[o], l = a[0], c = a[1], u = c.level == 0 ? 0 : 8, h = me(o), d = h.length, f = c.comment, p = f && me(f), g = p && p.length, m = De(c.extra);
    d > 65535 && xe(11);
    var y = u ? Pn(l, c) : l, E = y.length, R = Fn();
    R.p(l), s.push(Ct(c, {
      size: l.length,
      crc: R.d(),
      c: y,
      f: h,
      m: p,
      u: d != o.length || p && f.length != g,
      o: r,
      compression: u
    })), r += 30 + d + m + E, i += 76 + 2 * (d + m) + (g || 0) + E;
  }
  for (var x = new F(i + 22), C = r, b = i - r, M = 0; M < s.length; ++M) {
    var h = s[M];
    tt(x, h.o, h, h.f, h.u, h.c.length);
    var L = 30 + h.f.length + De(h.extra);
    x.set(h.c, h.o + L), tt(x, r, h, h.f, h.u, h.c.length, h.o, h.m), r += 16 + L + (h.m ? h.m.length : 0);
  }
  return $n(x, r, s.length, b, C), x;
}
class Hn {
  async parse(e, t = {}) {
    t = Object.assign({
      ar: {
        anchoring: { type: "plane" },
        planeAnchoring: { alignment: "horizontal" }
      },
      quickLookCompatible: !1,
      maxTextureSize: 1024
    }, t);
    const s = {}, r = "model.usda";
    s[r] = null;
    let i = yt();
    i += jn(t);
    const o = {}, a = {};
    e.traverseVisible((c) => {
      if (c.isMesh) {
        const u = c.geometry, h = c.material;
        if (h.isMeshStandardMaterial) {
          const d = "geometries/Geometry_" + u.id + ".usda";
          if (!(d in s)) {
            const f = Kn(u);
            s[d] = Yn(f);
          }
          h.uuid in o || (o[h.uuid] = h), i += Xn(c, u, h);
        } else
          console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)", c);
      } else
        c.isCamera && (i += is(c));
    }), i += Wn(), i += ns(o, a, t.quickLookCompatible), s[r] = me(i), i = null;
    for (const c in a) {
      let u = a[c];
      u.isCompressedTexture === !0 && (u = fe(u));
      const h = Vn(u.image, u.flipY, t.maxTextureSize), d = await new Promise((f) => h.toBlob(f, "image/png", 1));
      s[`textures/Texture_${c}.png`] = new Uint8Array(await d.arrayBuffer());
    }
    let l = 0;
    for (const c in s) {
      const u = s[c], h = 34 + c.length;
      l += h;
      const d = l & 63;
      if (d !== 4) {
        const f = 64 - d, p = new Uint8Array(f);
        s[c] = [u, { extra: { 12345: p } }];
      }
      l = u.length;
    }
    return Zn(s, { level: 0 });
  }
}
function Vn(n, e, t) {
  if (typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas || typeof ImageBitmap < "u" && n instanceof ImageBitmap) {
    const s = t / Math.max(n.width, n.height), r = document.createElement("canvas");
    r.width = n.width * Math.min(1, s), r.height = n.height * Math.min(1, s);
    const i = r.getContext("2d");
    return e === !0 && (i.translate(0, r.height), i.scale(1, -1)), i.drawImage(n, 0, 0, r.width, r.height), r;
  } else
    throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.");
}
const P = 7;
function yt() {
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
function jn(n) {
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
		token preliminary:anchoring:type = "${n.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${n.ar.planeAnchoring.alignment}"

`;
}
function Wn() {
  return `
		}
	}
}

`;
}
function Yn(n) {
  let e = yt();
  return e += n, me(e);
}
function Xn(n, e, t) {
  const s = "Object_" + n.id, r = vt(n.matrixWorld);
  return n.matrixWorld.determinant() < 0 && console.warn("THREE.USDZExporter: USDZ does not support negative scales", n), `def Xform "${s}" (
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
function vt(n) {
  const e = n.elements;
  return `( ${ue(e, 0)}, ${ue(e, 4)}, ${ue(e, 8)}, ${ue(e, 12)} )`;
}
function ue(n, e) {
  return `(${n[e + 0]}, ${n[e + 1]}, ${n[e + 2]}, ${n[e + 3]})`;
}
function Kn(n) {
  return `
def "Geometry"
{
${qn(n)}
}
`;
}
function qn(n) {
  const e = "Geometry", t = n.attributes, s = t.position.count;
  return `
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${Jn(n)}]
		int[] faceVertexIndices = [${Qn(n)}]
		normal3f[] normals = [${Ne(t.normal, s)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Ne(t.position, s)}]
${ts(t)}
		uniform token subdivisionScheme = "none"
	}
`;
}
function Jn(n) {
  const e = n.index !== null ? n.index.count : n.attributes.position.count;
  return Array(e / 3).fill(3).join(", ");
}
function Qn(n) {
  const e = n.index, t = [];
  if (e !== null)
    for (let s = 0; s < e.count; s++)
      t.push(e.getX(s));
  else {
    const s = n.attributes.position.count;
    for (let r = 0; r < s; r++)
      t.push(r);
  }
  return t.join(", ");
}
function Ne(n, e) {
  if (n === void 0)
    return console.warn("USDZExporter: Normals missing."), Array(e).fill("(0, 0, 0)").join(", ");
  const t = [];
  for (let s = 0; s < n.count; s++) {
    const r = n.getX(s), i = n.getY(s), o = n.getZ(s);
    t.push(`(${r.toPrecision(P)}, ${i.toPrecision(P)}, ${o.toPrecision(P)})`);
  }
  return t.join(", ");
}
function es(n) {
  const e = [];
  for (let t = 0; t < n.count; t++) {
    const s = n.getX(t), r = n.getY(t);
    e.push(`(${s.toPrecision(P)}, ${1 - r.toPrecision(P)})`);
  }
  return e.join(", ");
}
function ts(n) {
  let e = "";
  for (let s = 0; s < 4; s++) {
    const r = s > 0 ? s : "", i = n["uv" + r];
    i !== void 0 && (e += `
		texCoord2f[] primvars:st${r} = [${es(i)}] (
			interpolation = "vertex"
		)`);
  }
  const t = n.color;
  if (t !== void 0) {
    const s = t.count;
    e += `
	color3f[] primvars:displayColor = [${Ne(t, s)}] (
		interpolation = "vertex"
		)`;
  }
  return e;
}
function ns(n, e, t = !1) {
  const s = [];
  for (const r in n) {
    const i = n[r];
    s.push(ss(i, e, t));
  }
  return `def "Materials"
{
${s.join("")}
}

`;
}
function ss(n, e, t = !1) {
  const s = "			", r = [], i = [];
  function o(a, l, c) {
    const u = a.source.id + "_" + a.flipY;
    e[u] = a;
    const h = a.channel > 0 ? "st" + a.channel : "st", d = {
      1e3: "repeat",
      // RepeatWrapping
      1001: "clamp",
      // ClampToEdgeWrapping
      1002: "mirror"
      // MirroredRepeatWrapping
    }, f = a.repeat.clone(), p = a.offset.clone(), g = a.rotation, m = Math.sin(g), y = Math.cos(g);
    return p.y = 1 - p.y - f.y, t ? (p.x = p.x / f.x, p.y = p.y / f.y, p.x += m / f.x, p.y += y - 1) : (p.x += m * f.x, p.y += (1 - y) * f.y), `
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${h}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${n.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(g * (180 / Math.PI)).toFixed(P)}
			float2 inputs:scale = ${st(f)}
			float2 inputs:translation = ${st(p)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${n.id}/Transform2d_${l}.outputs:result>
			${c !== void 0 ? "float4 inputs:scale = " + rs(c) : ""}
			token inputs:sourceColorSpace = "${a.colorSpace === ut ? "raw" : "sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${n.transparent || n.alphaTest > 0 ? "float outputs:a" : ""}
		}`;
  }
  return n.side === ht && console.warn("THREE.USDZExporter: USDZ does not support double sided materials", n), n.map !== null ? (r.push(`${s}color3f inputs:diffuseColor.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:rgb>`), n.transparent ? r.push(`${s}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`) : n.alphaTest > 0 && (r.push(`${s}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.map.id}_diffuse.outputs:a>`), r.push(`${s}float inputs:opacityThreshold = ${n.alphaTest}`)), i.push(o(n.map, "diffuse", n.color))) : r.push(`${s}color3f inputs:diffuseColor = ${nt(n.color)}`), n.emissiveMap !== null ? (r.push(`${s}color3f inputs:emissiveColor.connect = </Materials/Material_${n.id}/Texture_${n.emissiveMap.id}_emissive.outputs:rgb>`), i.push(o(n.emissiveMap, "emissive"))) : n.emissive.getHex() > 0 && r.push(`${s}color3f inputs:emissiveColor = ${nt(n.emissive)}`), n.normalMap !== null && (r.push(`${s}normal3f inputs:normal.connect = </Materials/Material_${n.id}/Texture_${n.normalMap.id}_normal.outputs:rgb>`), i.push(o(n.normalMap, "normal"))), n.aoMap !== null && (r.push(`${s}float inputs:occlusion.connect = </Materials/Material_${n.id}/Texture_${n.aoMap.id}_occlusion.outputs:r>`), i.push(o(n.aoMap, "occlusion"))), n.roughnessMap !== null && n.roughness === 1 ? (r.push(`${s}float inputs:roughness.connect = </Materials/Material_${n.id}/Texture_${n.roughnessMap.id}_roughness.outputs:g>`), i.push(o(n.roughnessMap, "roughness"))) : r.push(`${s}float inputs:roughness = ${n.roughness}`), n.metalnessMap !== null && n.metalness === 1 ? (r.push(`${s}float inputs:metallic.connect = </Materials/Material_${n.id}/Texture_${n.metalnessMap.id}_metallic.outputs:b>`), i.push(o(n.metalnessMap, "metallic"))) : r.push(`${s}float inputs:metallic = ${n.metalness}`), n.alphaMap !== null ? (r.push(`${s}float inputs:opacity.connect = </Materials/Material_${n.id}/Texture_${n.alphaMap.id}_opacity.outputs:r>`), r.push(`${s}float inputs:opacityThreshold = 0.0001`), i.push(o(n.alphaMap, "opacity"))) : r.push(`${s}float inputs:opacity = ${n.opacity}`), n.isMeshPhysicalMaterial && (r.push(`${s}float inputs:clearcoat = ${n.clearcoat}`), r.push(`${s}float inputs:clearcoatRoughness = ${n.clearcoatRoughness}`), r.push(`${s}float inputs:ior = ${n.ior}`)), `
	def Material "Material_${n.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${n.id}/PreviewSurface.outputs:surface>

${i.join(`
`)}

	}
`;
}
function nt(n) {
  return `(${n.r}, ${n.g}, ${n.b})`;
}
function rs(n) {
  return `(${n.r}, ${n.g}, ${n.b}, 1.0)`;
}
function st(n) {
  return `(${n.x}, ${n.y})`;
}
function is(n) {
  const e = n.name ? n.name : "Camera_" + n.id, t = vt(n.matrixWorld);
  return n.matrixWorld.determinant() < 0 && console.warn("THREE.USDZExporter: USDZ does not support negative scales", n), n.isOrthographicCamera ? `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(P)}, ${n.far.toPrecision(P)})
			float horizontalAperture = ${((Math.abs(n.left) + Math.abs(n.right)) * 10).toPrecision(P)}
			float verticalAperture = ${((Math.abs(n.top) + Math.abs(n.bottom)) * 10).toPrecision(P)}
			token projection = "orthographic"
		}
	
	` : `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${n.near.toPrecision(P)}, ${n.far.toPrecision(P)})
			float focalLength = ${n.getFocalLength().toPrecision(P)}
			float focusDistance = ${n.focus.toPrecision(P)}
			float horizontalAperture = ${n.getFilmWidth().toPrecision(P)}
			token projection = "perspective"
			float verticalAperture = ${n.getFilmHeight().toPrecision(P)}
		}
	
	`;
}
const os = 64 / 256, as = `
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
function ls(n, e, t = 256) {
  return new Promise((s) => {
    const r = t * os, i = as.replace("<WIDTH>", t.toString()).replace("<HEIGHT>", r.toString()), o = new Image(), a = new Blob([i], { type: "image/svg+xml" }), l = URL.createObjectURL(a);
    o.onload = function() {
      n.drawImage(o, e, e), URL.revokeObjectURL(l), s();
    }, o.src = l;
  });
}
function he(n) {
  n.parentNode.removeChild(n);
}
const cs = 12, K = 512, rt = 16;
function it(n, e, t, s = !0) {
  const r = (e + 180) / 360 * Math.pow(2, n), i = (1 - Math.log(
    Math.tan(t * Math.PI / 180) + 1 / Math.cos(t * Math.PI / 180)
  ) / Math.PI) / 2 * Math.pow(2, n);
  return s ? {
    x: Math.floor(r),
    y: Math.floor(i)
  } : {
    x: r,
    y: i
  };
}
function us(n) {
  const e = document.createElement("canvas");
  e.width = n.width, e.height = n.height;
  const t = e.getContext("2d");
  if (!t)
    throw new Error("Unable to create a canvas with context.");
  const s = t.getImageData(0, 0, n.width, n.height);
  return s.data.set(n.pixelData), t.putImageData(s, 0, 0), e;
}
async function hs(n, e, t, s) {
  const r = e.x - n.x + 1, i = e.y - n.y + 1, o = document.createElement("canvas");
  o.width = r * K, o.height = i * K;
  const a = o.getContext("2d");
  if (!a)
    throw new Error("The context is invalid");
  let l = 0, c = 0;
  const u = [];
  for (let h = n.y; h <= e.y; h += 1) {
    for (let d = n.x; d <= e.x; d += 1) {
      const p = s[~~(Math.random() * s.length)].replace("{x}", d.toString()).replace("{y}", h.toString()).replace("{z}", t.toString());
      u.push(
        fs(p, a, [
          l * K,
          c * K
        ])
      ), l++;
    }
    l = 0, c++;
  }
  return await Promise.all(u), o;
}
function fs(n, e, t) {
  return new Promise((s) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.src = n, r.onload = function() {
      e.drawImage(r, t[0], t[1]), s();
    }, r.onerror = function() {
      s();
    };
  });
}
function ps(n, e, t) {
  var l;
  const s = n[0], r = n[1], i = e[0], o = e[1], a = document.createElement("canvas");
  return a.width = i, a.height = o, (l = a.getContext("2d")) == null || l.drawImage(
    t,
    s,
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
function ne(n) {
  return new Promise(function(e) {
    n.once("idle", () => {
      e(!0);
    });
  });
}
const ds = {
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
  activateAR: !1,
  highRes: !1
}, ot = {
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
}, at = {
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
class Ss extends It {
  constructor(t = {}) {
    super();
    T(this, "controlButton");
    T(this, "controlButtonContainer");
    T(this, "map");
    T(this, "colorData", null);
    T(this, "landMaskData", null);
    T(this, "terrainData", null);
    T(this, "cameraSettings");
    T(this, "hasTerrain");
    T(this, "terrainExaggeration");
    T(this, "terrainSourceID");
    T(this, "meterPerPixelCenter", 0);
    T(this, "originalPixelRatio", 0);
    T(this, "mapCaptureBounds");
    T(this, "threeSceneGLTF");
    T(this, "threeSceneUSDZ");
    T(this, "threeTileContainerGLTF");
    T(this, "threeTileContainerUSDZ");
    T(this, "gltfMaterial");
    T(this, "usdzMaterial");
    T(this, "mapMeshGLTF");
    T(this, "mapMeshUSDZ");
    T(this, "itemsToDispose", []);
    T(this, "gltfExporter", new ke());
    T(this, "lock", !1);
    T(this, "options");
    T(this, "arButton", null);
    T(this, "closeButton", null);
    T(this, "modelViewer", null);
    T(this, "logoImgElement", null);
    T(this, "logo");
    this.options = {
      ...ds,
      ...t
    }, this.logo = t.logo;
  }
  on(t, s) {
    super.on(t, s);
  }
  once(t, s) {
    super.once(t, s);
  }
  off(t) {
    super.off(t);
  }
  onAdd(t) {
    if (this.setMap(t), this.controlButtonContainer = window.document.createElement("div"), this.options.showButton) {
      this.controlButtonContainer.className = "maplibregl-ctrl maplibregl-ctrl-group", this.controlButton = window.document.createElement("button"), this.controlButton.className = "maptiler-ar-ctrl", this.controlButtonContainer.appendChild(this.controlButton);
      const s = window.document.createElement("span");
      s.className = "maplibregl-ctrl-icon", s.setAttribute("aria-hidden", "true"), this.controlButton.appendChild(s);
      const r = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
      </svg>
      `, i = `
      <svg width="100%" height="100%" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <path d="M22.701,35.306L14.997,30.784C14.621,30.554 14.33,30.251 14.121,29.873C13.913,29.496 13.81,29.091 13.81,28.659L13.81,19.652C13.81,19.22 13.913,18.815 14.121,18.438C14.33,18.061 14.621,17.757 14.997,17.527L22.737,12.925C23.117,12.706 23.537,12.595 23.996,12.595C24.454,12.595 24.874,12.706 25.255,12.925L32.994,17.527C33.37,17.757 33.662,18.061 33.87,18.438C34.078,18.815 34.183,19.22 34.183,19.652L34.183,28.659C34.183,29.091 34.075,29.496 33.861,29.873C33.647,30.251 33.346,30.554 32.959,30.784L25.147,35.306C24.759,35.532 24.348,35.644 23.918,35.644C23.487,35.644 23.081,35.532 22.701,35.306ZM25.073,32.57L31.735,28.582L31.735,20.945L25.073,24.754L25.073,32.57ZM22.918,32.57L22.918,24.754L16.292,20.945L16.292,28.582L22.918,32.57ZM23.996,15.159L17.361,18.97L23.996,22.809L30.631,18.97L23.996,15.159Z" style="fill:rgb(68,73,82);"/>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M13.45,44L7,44C6.175,44 5.469,43.706 4.881,43.119C4.294,42.531 4,41.825 4,41L4,34.55L7,34.55L7,41L13.45,41L13.45,44Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M34.55,44L34.55,41L41,41L41,34.55L44,34.55L44,41C44,41.825 43.706,42.531 43.119,43.119C42.531,43.706 41.825,44 41,44L34.55,44Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M4,13.45L4,7C4,6.175 4.294,5.469 4.881,4.881C5.469,4.294 6.175,4 7,4L13.45,4L13.45,7L7,7L7,13.45L4,13.45Z" style="fill:rgb(68,73,82);"/>
        </g>
        <g transform="matrix(0.712957,0,0,0.712957,6.88903,6.88903)">
            <path d="M41,13.45L41,7L34.55,7L34.55,4L41,4C41.825,4 42.531,4.294 43.119,4.881C43.706,5.469 44,6.175 44,7L44,13.45L41,13.45Z" style="fill:rgb(68,73,82);"/>
        </g>
      </svg>
      `;
      s.innerHTML = this.options.activateAR && (on || Qt) ? i : r, this.controlButton.type = "button", this.controlButton.addEventListener("click", async () => {
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
    const t = this.getColorData(), s = this.getTerrainData();
    t && s && (await this.buildMapModel(), await this.displayModal(), this.lock = !1);
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
      zoom: Math.min(this.cameraSettings.zoom, rt),
      pitch: 0,
      bearing: 0
    };
    this.map.jumpTo(t);
  }
  grabGlData() {
    const s = this.map.getCanvas().getContext("webgl2");
    if (!s)
      throw new Error("The WebGL context of the map is undefined");
    const r = new Uint8Array(
      s.drawingBufferWidth * s.drawingBufferHeight * 4
    );
    return s.readPixels(
      0,
      0,
      s.drawingBufferWidth,
      s.drawingBufferHeight,
      s.RGBA,
      s.UNSIGNED_BYTE,
      r
    ), {
      width: s.drawingBufferWidth,
      height: s.drawingBufferHeight,
      pixelData: r,
      bounds: this.map.getBounds()
    };
  }
  /**
   * Compute the color data (pixels values + metadata) for the vieport map
   */
  async computeColorData() {
    this.emit("startComputeColorData"), await ne(this.map), this.colorData = this.grabGlData(), this.emit("endComputeColorData", {});
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
    }), await ne(this.map), this.landMaskData = this.grabGlData(), this.map.removeLayer("xr_module_global_blackout_layer"), this.map.removeLayer("xr_module_land_layer"), this.map.removeSource("xr_module_global_blackout_source"), this.map.removeSource("xr_module_land_source"), await ne(this.map), this.emit("endComputeLandMaskData", {});
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
    }), await ne(this.map), this.terrainData = this.grabGlData(), this.map.removeLayer("xr_module_terrain_layer"), this.map.removeSource("xr_module_terrain_source"), await ne(this.map), this.emit("endComputeTerrainData", {});
  }
  async computeTerrainData() {
    var R;
    this.emit("startComputeTerrainData", {});
    const t = Math.min(Math.floor(this.map.getZoom()), cs), s = this.map.getBounds(), r = s.getNorth(), i = s.getSouth(), o = s.getEast(), a = s.getWest(), l = it(t, a, r, !1), c = {
      x: Math.floor(l.x),
      y: Math.floor(l.y)
    }, u = it(t, o, i, !1), h = {
      x: Math.floor(u.x),
      y: Math.floor(u.y)
    }, d = this.map.getSdkConfig(), f = this.map.getMaptilerSessionId(), p = await hs(
      c,
      h,
      t,
      [
        `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${d.apiKey}&mtsid=${f}&module=xr`
      ]
    ), g = [
      Math.floor(
        K * (l.x - c.x)
      ),
      // width
      Math.floor(
        K * (l.y - c.y)
      )
      // height
    ], m = [
      Math.ceil(
        K * (u.x - l.x)
      ),
      Math.ceil(
        K * (u.y - l.y)
      )
    ], y = ps(g, m, p), E = (R = y.getContext("2d")) == null ? void 0 : R.getImageData(0, 0, y.width, y.height).data;
    if (!E)
      throw new Error("Unable to extract terrain data.");
    this.terrainData = {
      width: y.width,
      height: y.height,
      pixelData: new Uint8Array(E.buffer),
      bounds: s
    }, this.emit("endComputeTerrainData", {});
  }
  async computeTextures() {
    var a;
    const t = this.map.getPixelRatio();
    if (this.options.highRes && this.map.setPixelRatio(4), this.enableTopView(), await this.computeColorData(), await this.computeTerrainData(), !this.colorData)
      throw new Error("The color texture is invalid.");
    this.mapCaptureBounds = this.map.getBounds();
    const s = this.mapCaptureBounds.getCenter(), r = new Ze(this.mapCaptureBounds.getWest(), s.lat), o = new Ze(this.mapCaptureBounds.getEast(), s.lat).distanceTo(r);
    this.meterPerPixelCenter = o / ((a = this.colorData) == null ? void 0 : a.width), this.options.highRes && this.map.setPixelRatio(t), this.restoreMapSettings(), await ne(this.map);
  }
  init3DScene() {
    this.threeSceneGLTF = new z.Scene(), this.threeTileContainerGLTF = new z.Object3D(), this.threeSceneGLTF.add(this.threeTileContainerGLTF), this.threeTileContainerGLTF.rotation.set(-Math.PI / 2, 0, 0), this.threeSceneUSDZ = new z.Scene(), this.threeTileContainerUSDZ = new z.Object3D(), this.threeSceneUSDZ.add(this.threeTileContainerUSDZ), this.threeTileContainerUSDZ.rotation.set(-Math.PI / 2, 0, 0);
  }
  async buildMapModel() {
    if (!this.colorData)
      throw new Error("Color textures is not ready.");
    if (!this.terrainData)
      throw new Error("Terrain textures is not ready.");
    this.threeTileContainerGLTF.clear(), this.threeTileContainerUSDZ.clear(), this.dispose();
    const t = us(this.colorData), s = t.getContext("2d");
    if (!s)
      throw new Error("Color texture not available");
    const r = new z.Color(this.options.edgeColor), i = r.clone().multiplyScalar(0.65), o = r.clone().multiplyScalar(0.5);
    s.fillStyle = `#${r.getHexString()}`;
    const a = Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;
    await ls(
      s,
      a * 2,
      Math.max(256, t.width / 10)
    ), s.fillRect(0, 0, t.width - 1, a), s.fillRect(
      0,
      t.height - 1 - a,
      t.width - 1,
      t.height - 1
    ), s.fillStyle = `#${i.getHexString()}`, s.fillRect(0, 0, a, t.height - 1), s.fillRect(
      t.width - 1 - a,
      0,
      t.width - 1,
      t.height - 1
    );
    const l = new z.CanvasTexture(t);
    l.flipY = !1, l.colorSpace = z.SRGBColorSpace, l.needsUpdate = !0, this.itemsToDispose.push(l), this.gltfMaterial = new z.MeshStandardMaterial({
      map: l,
      color: 16777215
    }), this.usdzMaterial = new z.MeshStandardMaterial({
      map: l
    }), this.itemsToDispose.push(this.gltfMaterial), this.itemsToDispose.push(this.usdzMaterial);
    const c = this.mapCaptureBounds, u = c.getSouthEast().distanceTo(c.getSouthWest()), h = c.getSouthEast().distanceTo(c.getNorthEast()), d = new z.PlaneGeometry(
      u,
      h,
      this.terrainData.width - 1,
      this.terrainData.height - 1
    );
    this.mapMeshGLTF = new z.Mesh(d, this.gltfMaterial), this.mapMeshUSDZ = new z.Mesh(d, this.usdzMaterial);
    const f = d.attributes.position.array, p = this.terrainData.width, g = this.terrainData.height;
    let m = 1 / 0;
    for (let w = 0; w < f.length / 3; w += 1) {
      const _ = this.terrainData.pixelData[w * 4], N = this.terrainData.pixelData[w * 4 + 1], D = this.terrainData.pixelData[w * 4 + 2], k = -1e4 + (_ * 256 * 256 + N * 256 + D) * 0.1;
      k < m && (m = k);
    }
    const y = rt - 1, E = Math.min(this.map.getZoom(), y);
    m = m - (50 * (E - y) ** 2 + 30);
    for (let w = 0; w < f.length / 3; w += 1) {
      const _ = this.terrainData.pixelData[w * 4], N = this.terrainData.pixelData[w * 4 + 1], D = this.terrainData.pixelData[w * 4 + 2];
      let k = -1e4 + (_ * 256 * 256 + N * 256 + D) * 0.1 - m;
      const U = w % p, S = ~~(w / p);
      (U === 0 || S === 0 || U === p - 1 || S === g - 1) && (k = 0), f[w * 3 + 2] = k;
    }
    d.computeVertexNormals(), this.itemsToDispose.push(d);
    const R = new z.PlaneGeometry(
      u,
      h,
      1,
      1
    ), x = new z.MeshStandardMaterial({
      color: o
    }), C = new z.Mesh(R, x);
    C.rotateX(-Math.PI), this.itemsToDispose.push(R), this.itemsToDispose.push(x);
    const M = 1 * 1 / u;
    this.threeTileContainerGLTF.scale.x = M, this.threeTileContainerGLTF.scale.y = M, this.threeTileContainerGLTF.scale.z = M, this.threeTileContainerGLTF.add(this.mapMeshGLTF), this.threeTileContainerGLTF.add(C), this.threeTileContainerUSDZ.scale.x = M, this.threeTileContainerUSDZ.scale.y = M, this.threeTileContainerUSDZ.scale.z = M;
    const L = C.clone();
    this.threeTileContainerUSDZ.add(this.mapMeshUSDZ), this.threeTileContainerUSDZ.add(L);
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
      (s) => {
        let r;
        if (t)
          r = new Blob([s], {
            type: "application/octet-stream"
          });
        else {
          const o = JSON.stringify(s, null, 2);
          r = new Blob([o], { type: "text/plain" });
        }
        const i = document.createElement("a");
        i.style.display = "none", document.body.appendChild(i), i.href = URL.createObjectURL(r), i.download = `maptiler_scene.${t ? "glb" : "gltf"}`, i.click();
      },
      // error
      (s) => {
        console.warn("error:", s);
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
    const t = await this.getModelBlobUSDZ(), s = document.createElement("a");
    s.style.display = "none", document.body.appendChild(s), s.href = URL.createObjectURL(t), s.download = "maptiler_scene.usdz", s.click();
  }
  async getModelBlobGLB() {
    return new Promise((t, s) => {
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
          s(r);
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
    const s = await new Hn().parse(this.threeSceneUSDZ, {
      maxTextureSize: 8192
    });
    return new Blob([s], {
      type: "model/vnd.usdz+zip"
    });
  }
  async displayModal() {
    const t = this.map.getContainer(), s = await this.getModelBlobGLB(), r = URL.createObjectURL(s);
    this.modelViewer = new St(), this.modelViewer.src = r, this.modelViewer.setAttribute("ar", "true"), this.modelViewer.setAttribute("tone-mapping", "commerce"), this.modelViewer.setAttribute("ar-modes", "webxr quick-look"), this.modelViewer.setAttribute("camera-controls", "true"), this.modelViewer.setAttribute("shadow-intensity", "1"), this.modelViewer.style.width = "100%", this.modelViewer.style.height = "100%", this.modelViewer.style.zIndex = "3", this.modelViewer.style.position = "absolute", this.modelViewer.style.background = this.options.background, t.appendChild(this.modelViewer), this.arButton = document.createElement("button"), this.arButton.setAttribute("slot", "ar-button"), this.arButton.id = "maptiler-ar-enable-button", this.options.arButtonClassName ? this.arButton.classList.add(this.options.arButtonClassName) : Object.keys(ot).forEach((o) => {
      this.arButton.style[o] = ot[o];
    }), typeof this.options.arButtonContent == "string" ? this.arButton.innerHTML = this.options.arButtonContent : this.arButton.appendChild(this.options.arButtonContent), this.modelViewer.appendChild(this.arButton), this.closeButton = document.createElement("button"), this.closeButton.id = "maptiler-ar-close-button", this.options.closeButtonClassName ? this.closeButton.classList.add(this.options.closeButtonClassName) : Object.keys(at).forEach((o) => {
      this.closeButton.style[o] = at[o];
    }), typeof this.options.closeButtonContent == "string" ? this.closeButton.innerHTML = this.options.closeButtonContent : this.closeButton.appendChild(this.options.closeButtonContent), this.modelViewer.appendChild(this.closeButton), this.closeButton.addEventListener("click", async () => {
      this.close();
    }), this.logo && (this.logoImgElement = document.createElement("img"), this.logoImgElement.src = this.logo, this.options.logoClass ? this.logoImgElement.classList.add(this.options.logoClass) : (this.logoImgElement.style.setProperty("position", "absolute"), this.logoImgElement.style.setProperty(
      "height",
      `${this.options.logoHeight ?? 60}px`
    ), this.logoImgElement.style.setProperty("width", "auto"), this.logoImgElement.style.setProperty("bottom", "0"), this.logoImgElement.style.setProperty("left", "0"), this.logoImgElement.style.setProperty("bottom", "0"), this.logoImgElement.style.setProperty("margin", "10px")), this.modelViewer.appendChild(this.logoImgElement));
    let i = !1;
    this.options.activateAR ? this.modelViewer.addEventListener("load", async () => {
      if (this.modelViewer.canActivateAR)
        try {
          await this.modelViewer.activateAR(), i = !0, setTimeout(() => this.emit("computeEnd"), 1e3);
        } catch {
          console.warn("AR to be automatically activated but failed."), this.emit("computeEnd");
        }
      else
        console.warn("AR cannot be automatically activated."), this.emit("computeEnd");
    }) : this.emit("computeEnd"), this.modelViewer.addEventListener(
      "camera-change",
      (o) => {
        i && o.detail.source === "automatic" && this.close();
      }
    );
  }
  close() {
    this.dispose(), he(this.arButton), he(this.modelViewer), he(this.closeButton), this.logoImgElement && he(this.logoImgElement);
  }
  /**
   * Update the `src` property of the logo image
   */
  updateLogo(t) {
    this.logoImgElement && (this.logo = t, this.logoImgElement.src = t);
  }
}
export {
  Ms as HAS_INTERSECTION_OBSERVER,
  Cs as HAS_RESIZE_OBSERVER,
  qt as HAS_WEBXR_DEVICE_API,
  Jt as HAS_WEBXR_HIT_TEST_API,
  en as IS_ANDROID,
  on as IS_AR_QUICKLOOK_CANDIDATE,
  vs as IS_CHROMEOS,
  nn as IS_FIREFOX,
  Ue as IS_IOS,
  Ts as IS_IOS_CHROME,
  Es as IS_IOS_SAFARI,
  ys as IS_MOBILE,
  sn as IS_OCULUS,
  tn as IS_SAFARI,
  bs as IS_SCENEVIEWER_CANDIDATE,
  Qt as IS_WEBXR_AR_CANDIDATE,
  rn as IS_WKWEBVIEW,
  Ss as MaptilerARControl,
  us as mapTextureDataToCanvas
};
