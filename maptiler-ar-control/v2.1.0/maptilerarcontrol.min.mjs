var Et = Object.defineProperty;
var bt = (s, e, t) => e in s ? Et(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var b = (s, e, t) => (bt(s, typeof e != "symbol" ? e + "" : e, t), t);
import { math as He, LngLat as ce } from "@maptiler/sdk";
import { ModelViewerElement as St } from "@google/model-viewer";
import { Filesystem as It, Directory as At } from "@capacitor/filesystem";
import { Capacitor as Rt } from "@capacitor/core";
import { FileOpener as _t } from "@capacitor-community/file-opener";
import Dt from "events";
import * as G from "three";
import { PlaneGeometry as Nt, ShaderMaterial as Ut, Uniform as Bt, SRGBColorSpace as ct, Mesh as kt, PerspectiveCamera as Ft, Scene as Ie, WebGLRenderer as Ot, CanvasTexture as Pt, Color as zt, Vector3 as de, CompressedTexture as ve, Source as Gt, NoColorSpace as ut, MathUtils as Ae, RGBAFormat as $t, DoubleSide as ht, BufferAttribute as q, PropertyBinding as ge, InterpolateDiscrete as Zt, Matrix4 as ft, Quaternion as Ht, InterpolateLinear as Vt, NearestFilter as jt, NearestMipmapNearestFilter as Wt, NearestMipmapLinearFilter as Yt, LinearFilter as Xt, LinearMipmapNearestFilter as Kt, LinearMipmapLinearFilter as qt, ClampToEdgeWrapping as Jt, RepeatWrapping as Qt, MirroredRepeatWrapping as en } from "three";
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
const tn = navigator.xr != null && self.XRSession != null && navigator.xr.isSessionSupported != null;
var lt;
const nn = tn && self.XRSession && ((lt = self.XRSession) == null ? void 0 : lt.requestHitTestSource) != null, Is = self.ResizeObserver != null, As = self.IntersectionObserver != null, sn = nn, Rs = (() => {
  const s = navigator.userAgent || navigator.vendor || self.opera;
  let e = !1;
  return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
    s
  ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    s.substr(0, 4)
  )) && (e = !0), e;
})(), _s = /\bCrOS\b/.test(navigator.userAgent), rn = /android/i.test(navigator.userAgent), Be = /iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1, on = /Safari\//.test(navigator.userAgent), an = /firefox/i.test(navigator.userAgent), ln = /OculusBrowser/.test(navigator.userAgent), Ds = Be && /CriOS\//.test(navigator.userAgent), Ns = Be && on, Us = rn && !an && !ln, cn = !!(window.webkit && window.webkit.messageHandlers), un = (() => {
  if (Be) {
    if (cn)
      return !!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);
    {
      const s = document.createElement("a");
      return !!(s.relList && s.relList.supports && s.relList.supports("ar"));
    }
  } else
    return !1;
})();
let re, Te, te, ue;
function pe(s, e = 1 / 0, t = null) {
  Te || (Te = new Nt(2, 2, 1, 1)), te || (te = new Ut({
    uniforms: { blitTexture: new Bt(s) },
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
  })), te.uniforms.blitTexture.value = s, te.defines.IS_SRGB = s.colorSpace == ct, te.needsUpdate = !0, ue || (ue = new kt(Te, te), ue.frustumCulled = !1);
  const n = new Ft(), r = new Ie();
  r.add(ue), t === null && (t = re = new Ot({ antialias: !1 }));
  const i = Math.min(s.image.width, e), o = Math.min(s.image.height, e);
  t.setSize(i, o), t.clear(), t.render(r, n);
  const a = document.createElement("canvas"), l = a.getContext("2d");
  a.width = i, a.height = o, l.drawImage(t.domElement, 0, 0, i, o);
  const c = new Pt(a);
  return c.minFilter = s.minFilter, c.magFilter = s.magFilter, c.wrapS = s.wrapS, c.wrapT = s.wrapT, c.name = s.name, re && (re.forceContextLoss(), re.dispose(), re = null), c;
}
const Ve = {
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
      return new Cn(e);
    }), this.register(function(e) {
      return new Mn(e);
    }), this.register(function(e) {
      return new Tn(e);
    }), this.register(function(e) {
      return new En(e);
    }), this.register(function(e) {
      return new bn(e);
    }), this.register(function(e) {
      return new Sn(e);
    }), this.register(function(e) {
      return new yn(e);
    }), this.register(function(e) {
      return new vn(e);
    }), this.register(function(e) {
      return new In(e);
    }), this.register(function(e) {
      return new An(e);
    }), this.register(function(e) {
      return new Rn(e);
    }), this.register(function(e) {
      return new _n(e);
    }), this.register(function(e) {
      return new Dn(e);
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
    const i = new Ln(), o = [];
    for (let a = 0, l = this.pluginCallbacks.length; a < l; a++)
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
}, Ee = "KHR_mesh_quantization", Z = {};
Z[jt] = y.NEAREST;
Z[Wt] = y.NEAREST_MIPMAP_NEAREST;
Z[Yt] = y.NEAREST_MIPMAP_LINEAR;
Z[Xt] = y.LINEAR;
Z[Kt] = y.LINEAR_MIPMAP_NEAREST;
Z[qt] = y.LINEAR_MIPMAP_LINEAR;
Z[Jt] = y.CLAMP_TO_EDGE;
Z[Qt] = y.REPEAT;
Z[en] = y.MIRRORED_REPEAT;
const je = {
  scale: "scale",
  position: "translation",
  quaternion: "rotation",
  morphTargetInfluences: "weights"
}, hn = new zt(), We = 12, fn = 1179937895, pn = 2, Ye = 8, dn = 1313821514, gn = 5130562;
function ae(s, e) {
  return s.length === e.length && s.every(function(t, n) {
    return t === e[n];
  });
}
function mn(s) {
  return new TextEncoder().encode(s).buffer;
}
function xn(s) {
  return ae(s.elements, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
}
function wn(s, e, t) {
  const n = {
    min: new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),
    max: new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)
  };
  for (let r = e; r < e + t; r++)
    for (let i = 0; i < s.itemSize; i++) {
      let o;
      s.itemSize > 4 ? o = s.array[r * s.itemSize + i] : (i === 0 ? o = s.getX(r) : i === 1 ? o = s.getY(r) : i === 2 ? o = s.getZ(r) : i === 3 && (o = s.getW(r)), s.normalized === !0 && (o = Ae.normalize(o, s.array))), n.min[i] = Math.min(n.min[i], o), n.max[i] = Math.max(n.max[i], o);
    }
  return n;
}
function pt(s) {
  return Math.ceil(s / 4) * 4;
}
function be(s, e = 0) {
  const t = pt(s.byteLength);
  if (t !== s.byteLength) {
    const n = new Uint8Array(t);
    if (n.set(new Uint8Array(s)), e !== 0)
      for (let r = s.byteLength; r < t; r++)
        n[r] = e;
    return n.buffer;
  }
  return s;
}
function Xe() {
  return typeof document > "u" && typeof OffscreenCanvas < "u" ? new OffscreenCanvas(1, 1) : document.createElement("canvas");
}
function Ke(s, e) {
  if (s.toBlob !== void 0)
    return new Promise((n) => s.toBlob(n, e));
  let t;
  return e === "image/jpeg" ? t = 0.92 : e === "image/webp" && (t = 0.8), s.convertToBlob({
    type: e,
    quality: t
  });
}
class Ln {
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
    const a = r.extensionsUsed, l = r.extensionsRequired, c = new Blob(i, { type: "application/octet-stream" }), u = Object.keys(a), h = Object.keys(l);
    if (u.length > 0 && (o.extensionsUsed = u), h.length > 0 && (o.extensionsRequired = h), o.buffers && o.buffers.length > 0 && (o.buffers[0].byteLength = c.size), n.binary === !0) {
      const d = new FileReader();
      d.readAsArrayBuffer(c), d.onloadend = function() {
        const f = be(d.result), p = new DataView(new ArrayBuffer(Ye));
        p.setUint32(0, f.byteLength, !0), p.setUint32(4, gn, !0);
        const g = be(mn(JSON.stringify(o)), 32), x = new DataView(new ArrayBuffer(Ye));
        x.setUint32(0, g.byteLength, !0), x.setUint32(4, dn, !0);
        const v = new ArrayBuffer(We), I = new DataView(v);
        I.setUint32(0, fn, !0), I.setUint32(4, pn, !0);
        const A = We + x.byteLength + g.byteLength + p.byteLength + f.byteLength;
        I.setUint32(8, A, !0);
        const m = new Blob([
          v,
          x,
          g,
          p,
          f
        ], { type: "application/octet-stream" }), L = new FileReader();
        L.readAsArrayBuffer(m), L.onloadend = function() {
          t(L.result);
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
    const n = new de();
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
    const n = e.clone(), r = new de();
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
      return f.colorSpace === ct ? function(g) {
        return g < 0.04045 ? g * 0.0773993808 : Math.pow(g * 0.9478672986 + 0.0521327014, 2.4);
      } : function(g) {
        return g;
      };
    }
    console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."), e instanceof ve && (e = pe(e)), t instanceof ve && (t = pe(t));
    const r = e ? e.image : null, i = t ? t.image : null, o = Math.max(r ? r.width : 0, i ? i.width : 0), a = Math.max(r ? r.height : 0, i ? i.height : 0), l = Xe();
    l.width = o, l.height = a;
    const c = l.getContext("2d");
    c.fillStyle = "#00ffff", c.fillRect(0, 0, o, a);
    const u = c.getImageData(0, 0, o, a);
    if (r) {
      c.drawImage(r, 0, 0, o, a);
      const f = n(e), p = c.getImageData(0, 0, o, a).data;
      for (let g = 2; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    if (i) {
      c.drawImage(i, 0, 0, o, a);
      const f = n(t), p = c.getImageData(0, 0, o, a).data;
      for (let g = 1; g < p.length; g += 4)
        u.data[g] = f(p[g] / 256) * 256;
    }
    c.putImageData(u, 0, 0);
    const d = (e || t).clone();
    return d.source = new Gt(l), d.colorSpace = ut, d.channel = (e || t).channel, e && t && e.channel !== t.channel && console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."), d;
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
    let l = e.itemSize * a;
    i === y.ARRAY_BUFFER && (l = Math.ceil(l / 4) * 4);
    const c = pt(r * l), u = new DataView(new ArrayBuffer(c));
    let h = 0;
    for (let p = n; p < n + r; p++) {
      for (let g = 0; g < e.itemSize; g++) {
        let x;
        e.itemSize > 4 ? x = e.array[p * e.itemSize + g] : (g === 0 ? x = e.getX(p) : g === 1 ? x = e.getY(p) : g === 2 ? x = e.getZ(p) : g === 3 && (x = e.getW(p)), e.normalized === !0 && (x = Ae.normalize(x, e.array))), t === y.FLOAT ? u.setFloat32(h, x, !0) : t === y.INT ? u.setInt32(h, x, !0) : t === y.UNSIGNED_INT ? u.setUint32(h, x, !0) : t === y.SHORT ? u.setInt16(h, x, !0) : t === y.UNSIGNED_SHORT ? u.setUint16(h, x, !0) : t === y.BYTE ? u.setInt8(h, x) : t === y.UNSIGNED_BYTE && u.setUint8(h, x), h += a;
      }
      h % l !== 0 && (h += l - h % l);
    }
    const d = {
      buffer: this.processBuffer(u.buffer),
      byteOffset: this.byteOffset,
      byteLength: c
    };
    return i !== void 0 && (d.target = i), i === y.ARRAY_BUFFER && (d.byteStride = l), this.byteOffset += c, o.bufferViews.push(d), {
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
        const o = be(i.result), a = {
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
    const l = wn(e, n, r);
    let c;
    t !== void 0 && (c = e === t.index ? y.ELEMENT_ARRAY_BUFFER : y.ARRAY_BUFFER);
    const u = this.processBufferView(e, a, n, r, c), h = {
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
  processImage(e, t, n, r = "image/png") {
    if (e !== null) {
      const i = this, o = i.cache, a = i.json, l = i.options, c = i.pending;
      o.images.has(e) || o.images.set(e, {});
      const u = o.images.get(e), h = r + ":flipY/" + n.toString();
      if (u[h] !== void 0)
        return u[h];
      a.images || (a.images = []);
      const d = { mimeType: r }, f = Xe();
      f.width = Math.min(e.width, l.maxTextureSize), f.height = Math.min(e.height, l.maxTextureSize);
      const p = f.getContext("2d");
      if (n === !0 && (p.translate(0, f.height), p.scale(1, -1)), e.data !== void 0) {
        t !== $t && console.error("GLTFExporter: Only RGBAFormat is supported.", t), (e.width > l.maxTextureSize || e.height > l.maxTextureSize) && console.warn("GLTFExporter: Image size is bigger than maxTextureSize", e);
        const x = new Uint8ClampedArray(e.height * e.width * 4);
        for (let v = 0; v < x.length; v += 4)
          x[v + 0] = e.data[v + 0], x[v + 1] = e.data[v + 1], x[v + 2] = e.data[v + 2], x[v + 3] = e.data[v + 3];
        p.putImageData(new ImageData(x, e.width, e.height), 0, 0);
      } else if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
        p.drawImage(e, 0, 0, f.width, f.height);
      else
        throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");
      l.binary === !0 ? c.push(
        Ke(f, r).then((x) => i.processBufferViewImage(x)).then((x) => {
          d.bufferView = x;
        })
      ) : f.toDataURL !== void 0 ? d.uri = f.toDataURL(r) : c.push(
        Ke(f, r).then((x) => new FileReader().readAsDataURL(x)).then((x) => {
          d.uri = x;
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
      magFilter: Z[e.magFilter],
      minFilter: Z[e.minFilter],
      wrapS: Z[e.wrapS],
      wrapT: Z[e.wrapT]
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
    i.textures || (i.textures = []), e instanceof ve && (e = pe(e, n.maxTextureSize));
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
      for (let m = 0, L = e.material.length; m < L; m++)
        r.push(e.material[m].uuid);
    else
      r.push(e.material.uuid);
    const i = r.join(":");
    if (t.meshes.has(i))
      return t.meshes.get(i);
    const o = e.geometry;
    let a;
    e.isLineSegments ? a = y.LINES : e.isLineLoop ? a = y.LINE_LOOP : e.isLine ? a = y.LINE_STRIP : e.isPoints ? a = y.POINTS : a = e.material.wireframe ? y.LINES : y.TRIANGLES;
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
    for (let m in o.attributes) {
      if (m.slice(0, 5) === "morph")
        continue;
      const L = o.attributes[m];
      if (m = d[m] || m.toUpperCase(), /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(m) || (m = "_" + m), t.attributes.has(this.getUID(L))) {
        c[m] = t.attributes.get(this.getUID(L));
        continue;
      }
      p = null;
      const M = L.array;
      m === "JOINTS_0" && !(M instanceof Uint16Array) && !(M instanceof Uint8Array) && (console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'), p = new q(new Uint16Array(M), L.itemSize, L.normalized));
      const w = this.processAccessor(p || L, o);
      w !== null && (m.startsWith("_") || this.detectMeshQuantization(m, L), c[m] = w, t.attributes.set(this.getUID(L), w));
    }
    if (f !== void 0 && o.setAttribute("normal", f), Object.keys(c).length === 0)
      return null;
    if (e.morphTargetInfluences !== void 0 && e.morphTargetInfluences.length > 0) {
      const m = [], L = [], T = {};
      if (e.morphTargetDictionary !== void 0)
        for (const M in e.morphTargetDictionary)
          T[e.morphTargetDictionary[M]] = M;
      for (let M = 0; M < e.morphTargetInfluences.length; ++M) {
        const w = {};
        let C = !1;
        for (const _ in o.morphAttributes) {
          if (_ !== "position" && _ !== "normal") {
            C || (console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."), C = !0);
            continue;
          }
          const U = o.morphAttributes[_][M], E = _.toUpperCase(), O = o.attributes[_];
          if (t.attributes.has(this.getUID(U, !0))) {
            w[E] = t.attributes.get(this.getUID(U, !0));
            continue;
          }
          const N = U.clone();
          if (!o.morphTargetsRelative)
            for (let S = 0, B = U.count; S < B; S++)
              for (let R = 0; R < U.itemSize; R++)
                R === 0 && N.setX(S, U.getX(S) - O.getX(S)), R === 1 && N.setY(S, U.getY(S) - O.getY(S)), R === 2 && N.setZ(S, U.getZ(S) - O.getZ(S)), R === 3 && N.setW(S, U.getW(S) - O.getW(S));
          w[E] = this.processAccessor(N, o), t.attributes.set(this.getUID(O, !0), w[E]);
        }
        h.push(w), m.push(e.morphTargetInfluences[M]), e.morphTargetDictionary !== void 0 && L.push(T[M]);
      }
      l.weights = m, L.length > 0 && (l.extras = {}, l.extras.targetNames = L);
    }
    const g = Array.isArray(e.material);
    if (g && o.groups.length === 0)
      return null;
    let x = !1;
    if (g && o.index === null) {
      const m = [];
      for (let L = 0, T = o.attributes.position.count; L < T; L++)
        m[L] = L;
      o.setIndex(m), x = !0;
    }
    const v = g ? e.material : [e.material], I = g ? o.groups : [{ materialIndex: 0, start: void 0, count: void 0 }];
    for (let m = 0, L = I.length; m < L; m++) {
      const T = {
        mode: a,
        attributes: c
      };
      if (this.serializeUserData(o, T), h.length > 0 && (T.targets = h), o.index !== null) {
        let w = this.getUID(o.index);
        (I[m].start !== void 0 || I[m].count !== void 0) && (w += ":" + I[m].start + ":" + I[m].count), t.attributes.has(w) ? T.indices = t.attributes.get(w) : (T.indices = this.processAccessor(o.index, o, I[m].start, I[m].count), t.attributes.set(w, T.indices)), T.indices === null && delete T.indices;
      }
      const M = this.processMaterial(v[I[m].materialIndex]);
      M !== null && (T.material = M), u.push(T);
    }
    x === !0 && o.setIndex(null), l.primitives = u, n.meshes || (n.meshes = []), this._invokeAll(function(m) {
      m.writeMesh && m.writeMesh(e, l);
    });
    const A = n.meshes.push(l) - 1;
    return t.meshes.set(i, A), A;
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
    if (this.extensionsUsed[Ee])
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
    Ve[r] && Ve[r].includes(n) && (this.extensionsUsed[Ee] = !0, this.extensionsRequired[Ee] = !0);
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
      yfov: Ae.degToRad(e.fov),
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
    n.animations || (n.animations = []), e = ke.Utils.mergeMorphTargetTracks(e.clone(), t);
    const i = e.tracks, o = [], a = [];
    for (let l = 0; l < i.length; ++l) {
      const c = i[l], u = ge.parseTrackName(c.name);
      let h = ge.findNode(t, u.nodeName);
      const d = je[u.propertyName];
      if (u.objectName === "bones" && (h.isSkinnedMesh === !0 ? h = h.skeleton.getBoneByName(u.objectIndex) : h = void 0), !h || !d)
        return console.warn('THREE.GLTFExporter: Could not export animation track "%s".', c.name), null;
      const f = 1;
      let p = c.values.length / c.times.length;
      d === je.morphTargetInfluences && (p /= h.morphTargetInfluences.length);
      let g;
      c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline === !0 ? (g = "CUBICSPLINE", p /= 3) : c.getInterpolation() === Zt ? g = "STEP" : g = "LINEAR", a.push({
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
    const a = [], l = new Float32Array(i.bones.length * 16), c = new ft();
    for (let h = 0; h < i.bones.length; ++h)
      a.push(n.get(i.bones[h])), c.copy(i.boneInverses[h]), c.multiply(e.bindMatrix).toArray(l, h * 16);
    return t.skins === void 0 && (t.skins = []), t.skins.push({
      inverseBindMatrices: this.processAccessor(new q(l, 16)),
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
      const a = e.quaternion.toArray(), l = e.position.toArray(), c = e.scale.toArray();
      ae(a, [0, 0, 0, 1]) || (i.rotation = a), ae(l, [0, 0, 0]) || (i.translation = l), ae(c, [1, 1, 1]) || (i.scale = c);
    } else
      e.matrixAutoUpdate && e.updateMatrix(), xn(e.matrix) === !1 && (i.matrix = e.matrix.elements);
    if (e.name !== "" && (i.name = String(e.name)), this.serializeUserData(e, i), e.isMesh || e.isLine || e.isPoints) {
      const a = this.processMesh(e);
      a !== null && (i.mesh = a);
    } else
      e.isCamera && (i.camera = this.processCamera(e));
    if (e.isSkinnedMesh && this.skins.push(e), e.children.length > 0) {
      const a = [];
      for (let l = 0, c = e.children.length; l < c; l++) {
        const u = e.children[l];
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
      const l = e.children[o];
      if (l.visible || n.onlyVisible === !1) {
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
    const t = new Ie();
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
      e[r] instanceof Ie ? this.processScene(e[r]) : n.push(e[r]);
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
class Cn {
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
class Mn {
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
class yn {
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
class vn {
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
class Tn {
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
class En {
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
class bn {
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
class Sn {
  constructor(e) {
    this.writer = e, this.name = "KHR_materials_specular";
  }
  writeMaterial(e, t) {
    if (!e.isMeshPhysicalMaterial || e.specularIntensity === 1 && e.specularColor.equals(hn) && !e.specularIntensityMap && !e.specularColorMap)
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
class In {
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
class An {
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
class Rn {
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
class _n {
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
class Dn {
  constructor(e) {
    this.writer = e, this.name = "EXT_mesh_gpu_instancing";
  }
  writeNode(e, t) {
    if (!e.isInstancedMesh)
      return;
    const n = this.writer, r = e, i = new Float32Array(r.count * 3), o = new Float32Array(r.count * 4), a = new Float32Array(r.count * 3), l = new ft(), c = new de(), u = new Ht(), h = new de();
    for (let f = 0; f < r.count; f++)
      r.getMatrixAt(f, l), l.decompose(c, u, h), c.toArray(i, f * 3), u.toArray(o, f * 4), h.toArray(a, f * 3);
    const d = {
      TRANSLATION: n.processAccessor(new q(i, 3)),
      ROTATION: n.processAccessor(new q(o, 4)),
      SCALE: n.processAccessor(new q(a, 3))
    };
    r.instanceColor && (d._COLOR_0 = n.processAccessor(r.instanceColor)), t.extensions = t.extensions || {}, t.extensions[this.name] = { attributes: d }, n.extensionsUsed[this.name] = !0, n.extensionsRequired[this.name] = !0;
  }
}
ke.Utils = {
  insertKeyframe: function(s, e) {
    const n = s.getValueSize(), r = new s.TimeBufferType(s.times.length + 1), i = new s.ValueBufferType(s.values.length + n), o = s.createInterpolant(new s.ValueBufferType(n));
    let a;
    if (s.times.length === 0) {
      r[0] = e;
      for (let l = 0; l < n; l++)
        i[l] = 0;
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
      for (let l = 0; l < s.times.length; l++) {
        if (Math.abs(s.times[l] - e) < 1e-3)
          return l;
        if (s.times[l] < e && s.times[l + 1] > e) {
          r.set(s.times.slice(0, l + 1), 0), r[l + 1] = e, r.set(s.times.slice(l + 1), l + 2), i.set(s.values.slice(0, (l + 1) * n), 0), i.set(o.evaluate(e), (l + 1) * n), i.set(s.values.slice((l + 1) * n), (l + 2) * n), a = l + 1;
          break;
        }
      }
    return s.times = r, s.values = i, a;
  },
  mergeMorphTargetTracks: function(s, e) {
    const t = [], n = {}, r = s.tracks;
    for (let i = 0; i < r.length; ++i) {
      let o = r[i];
      const a = ge.parseTrackName(o.name), l = ge.findNode(e, a.nodeName);
      if (a.propertyName !== "morphTargetInfluences" || a.propertyIndex === void 0) {
        t.push(o);
        continue;
      }
      if (o.createInterpolant !== o.InterpolantFactoryMethodDiscrete && o.createInterpolant !== o.InterpolantFactoryMethodLinear) {
        if (o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
          throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");
        console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."), o = o.clone(), o.setInterpolation(Vt);
      }
      const c = l.morphTargetInfluences.length, u = l.morphTargetDictionary[a.propertyIndex];
      if (u === void 0)
        throw new Error("THREE.GLTFExporter: Morph target name not found: " + a.propertyIndex);
      let h;
      if (n[l.uuid] === void 0) {
        h = o.clone();
        const f = new h.ValueBufferType(c * h.times.length);
        for (let p = 0; p < h.times.length; p++)
          f[p * c + u] = h.values[p];
        h.name = (a.nodeName || "") + ".morphTargetInfluences", h.values = f, n[l.uuid] = h, t.push(h);
        continue;
      }
      const d = o.createInterpolant(new o.ValueBufferType(1));
      h = n[l.uuid];
      for (let f = 0; f < h.times.length; f++)
        h.values[f * c + u] = d.evaluate(h.times[f]);
      for (let f = 0; f < o.times.length; f++) {
        const p = this.insertKeyframe(h, o.times[f]);
        h.values[p * c + u] = o.values[f];
      }
    }
    return s.tracks = t, s;
  }
};
/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/
var F = Uint8Array, H = Uint16Array, Fe = Int32Array, Oe = new F([
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
]), Pe = new F([
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
]), qe = new F([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), dt = function(s, e) {
  for (var t = new H(31), n = 0; n < 31; ++n)
    t[n] = e += 1 << s[n - 1];
  for (var r = new Fe(t[30]), n = 1; n < 30; ++n)
    for (var i = t[n]; i < t[n + 1]; ++i)
      r[i] = i - t[n] << 5 | n;
  return { b: t, r };
}, gt = dt(Oe, 2), Nn = gt.b, Re = gt.r;
Nn[28] = 258, Re[258] = 28;
var Un = dt(Pe, 0), Je = Un.r, _e = new H(32768);
for (var D = 0; D < 32768; ++D) {
  var X = (D & 43690) >> 1 | (D & 21845) << 1;
  X = (X & 52428) >> 2 | (X & 13107) << 2, X = (X & 61680) >> 4 | (X & 3855) << 4, _e[D] = ((X & 65280) >> 8 | (X & 255) << 8) >> 1;
}
var le = function(s, e, t) {
  for (var n = s.length, r = 0, i = new H(e); r < n; ++r)
    s[r] && ++i[s[r] - 1];
  var o = new H(e);
  for (r = 1; r < e; ++r)
    o[r] = o[r - 1] + i[r - 1] << 1;
  var a;
  if (t) {
    a = new H(1 << e);
    var l = 15 - e;
    for (r = 0; r < n; ++r)
      if (s[r])
        for (var c = r << 4 | s[r], u = e - s[r], h = o[s[r] - 1]++ << u, d = h | (1 << u) - 1; h <= d; ++h)
          a[_e[h] >> l] = c;
  } else
    for (a = new H(n), r = 0; r < n; ++r)
      s[r] && (a[r] = _e[o[s[r] - 1]++] >> 15 - s[r]);
  return a;
}, J = new F(288);
for (var D = 0; D < 144; ++D)
  J[D] = 8;
for (var D = 144; D < 256; ++D)
  J[D] = 9;
for (var D = 256; D < 280; ++D)
  J[D] = 7;
for (var D = 280; D < 288; ++D)
  J[D] = 8;
var me = new F(32);
for (var D = 0; D < 32; ++D)
  me[D] = 5;
var Bn = /* @__PURE__ */ le(J, 9, 0), kn = /* @__PURE__ */ le(me, 5, 0), mt = function(s) {
  return (s + 7) / 8 | 0;
}, xt = function(s, e, t) {
  return (e == null || e < 0) && (e = 0), (t == null || t > s.length) && (t = s.length), new F(s.subarray(e, t));
}, Fn = [
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
], we = function(s, e, t) {
  var n = new Error(e || Fn[s]);
  if (n.code = s, Error.captureStackTrace && Error.captureStackTrace(n, we), !t)
    throw n;
  return n;
}, W = function(s, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  s[n] |= t, s[n + 1] |= t >> 8;
}, ie = function(s, e, t) {
  t <<= e & 7;
  var n = e / 8 | 0;
  s[n] |= t, s[n + 1] |= t >> 8, s[n + 2] |= t >> 16;
}, Se = function(s, e) {
  for (var t = [], n = 0; n < s.length; ++n)
    s[n] && t.push({ s: n, f: s[n] });
  var r = t.length, i = t.slice();
  if (!r)
    return { t: Lt, l: 0 };
  if (r == 1) {
    var o = new F(t[0].s + 1);
    return o[t[0].s] = 1, { t: o, l: 1 };
  }
  t.sort(function(L, T) {
    return L.f - T.f;
  }), t.push({ s: -1, f: 25001 });
  var a = t[0], l = t[1], c = 0, u = 1, h = 2;
  for (t[0] = { s: -1, f: a.f + l.f, l: a, r: l }; u != r - 1; )
    a = t[t[c].f < t[h].f ? c++ : h++], l = t[c != u && t[c].f < t[h].f ? c++ : h++], t[u++] = { s: -1, f: a.f + l.f, l: a, r: l };
  for (var d = i[0].s, n = 1; n < r; ++n)
    i[n].s > d && (d = i[n].s);
  var f = new H(d + 1), p = De(t[u - 1], f, 0);
  if (p > e) {
    var n = 0, g = 0, x = p - e, v = 1 << x;
    for (i.sort(function(T, M) {
      return f[M.s] - f[T.s] || T.f - M.f;
    }); n < r; ++n) {
      var I = i[n].s;
      if (f[I] > e)
        g += v - (1 << p - f[I]), f[I] = e;
      else
        break;
    }
    for (g >>= x; g > 0; ) {
      var A = i[n].s;
      f[A] < e ? g -= 1 << e - f[A]++ - 1 : ++n;
    }
    for (; n >= 0 && g; --n) {
      var m = i[n].s;
      f[m] == e && (--f[m], ++g);
    }
    p = e;
  }
  return { t: new F(f), l: p };
}, De = function(s, e, t) {
  return s.s == -1 ? Math.max(De(s.l, e, t + 1), De(s.r, e, t + 1)) : e[s.s] = t;
}, Qe = function(s) {
  for (var e = s.length; e && !s[--e]; )
    ;
  for (var t = new H(++e), n = 0, r = s[0], i = 1, o = function(l) {
    t[n++] = l;
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
  return { c: t.subarray(0, n), n: e };
}, oe = function(s, e) {
  for (var t = 0, n = 0; n < e.length; ++n)
    t += s[n] * e[n];
  return t;
}, wt = function(s, e, t) {
  var n = t.length, r = mt(e + 2);
  s[r] = n & 255, s[r + 1] = n >> 8, s[r + 2] = s[r] ^ 255, s[r + 3] = s[r + 1] ^ 255;
  for (var i = 0; i < n; ++i)
    s[r + i + 4] = t[i];
  return (r + 4 + n) * 8;
}, et = function(s, e, t, n, r, i, o, a, l, c, u) {
  W(e, u++, t), ++r[256];
  for (var h = Se(r, 15), d = h.t, f = h.l, p = Se(i, 15), g = p.t, x = p.l, v = Qe(d), I = v.c, A = v.n, m = Qe(g), L = m.c, T = m.n, M = new H(19), w = 0; w < I.length; ++w)
    ++M[I[w] & 31];
  for (var w = 0; w < L.length; ++w)
    ++M[L[w] & 31];
  for (var C = Se(M, 7), _ = C.t, U = C.l, E = 19; E > 4 && !_[qe[E - 1]]; --E)
    ;
  var O = c + 5 << 3, N = oe(r, J) + oe(i, me) + o, S = oe(r, d) + oe(i, g) + o + 14 + 3 * E + oe(M, _) + 2 * M[16] + 3 * M[17] + 7 * M[18];
  if (l >= 0 && O <= N && O <= S)
    return wt(e, u, s.subarray(l, l + c));
  var B, R, $, Y;
  if (W(e, u, 1 + (S < N)), u += 2, S < N) {
    B = le(d, f, 0), R = d, $ = le(g, x, 0), Y = g;
    var Le = le(_, U, 0);
    W(e, u, A - 257), W(e, u + 5, T - 1), W(e, u + 10, E - 4), u += 14;
    for (var w = 0; w < E; ++w)
      W(e, u + 3 * w, _[qe[w]]);
    u += 3 * E;
    for (var V = [I, L], se = 0; se < 2; ++se)
      for (var Q = V[se], w = 0; w < Q.length; ++w) {
        var j = Q[w] & 31;
        W(e, u, Le[j]), u += _[j], j > 15 && (W(e, u, Q[w] >> 5 & 127), u += Q[w] >> 12);
      }
  } else
    B = Bn, R = J, $ = kn, Y = me;
  for (var w = 0; w < a; ++w) {
    var P = n[w];
    if (P > 255) {
      var j = P >> 18 & 31;
      ie(e, u, B[j + 257]), u += R[j + 257], j > 7 && (W(e, u, P >> 23 & 31), u += Oe[j]);
      var ee = P & 31;
      ie(e, u, $[ee]), u += Y[ee], ee > 3 && (ie(e, u, P >> 5 & 8191), u += Pe[ee]);
    } else
      ie(e, u, B[P]), u += R[P];
  }
  return ie(e, u, B[256]), u + R[256];
}, On = /* @__PURE__ */ new Fe([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Lt = /* @__PURE__ */ new F(0), Pn = function(s, e, t, n, r, i) {
  var o = i.z || s.length, a = new F(n + o + 5 * (1 + Math.ceil(o / 7e3)) + r), l = a.subarray(n, a.length - r), c = i.l, u = (i.r || 0) & 7;
  if (e) {
    u && (l[0] = i.r >> 3);
    for (var h = On[e - 1], d = h >> 13, f = h & 8191, p = (1 << t) - 1, g = i.p || new H(32768), x = i.h || new H(p + 1), v = Math.ceil(t / 3), I = 2 * v, A = function(ye) {
      return (s[ye] ^ s[ye + 1] << v ^ s[ye + 2] << I) & p;
    }, m = new Fe(25e3), L = new H(288), T = new H(32), M = 0, w = 0, C = i.i || 0, _ = 0, U = i.w || 0, E = 0; C + 2 < o; ++C) {
      var O = A(C), N = C & 32767, S = x[O];
      if (g[N] = S, x[O] = N, U <= C) {
        var B = o - C;
        if ((M > 7e3 || _ > 24576) && (B > 423 || !c)) {
          u = et(s, l, 0, m, L, T, w, _, E, C - E, u), _ = M = w = 0, E = C;
          for (var R = 0; R < 286; ++R)
            L[R] = 0;
          for (var R = 0; R < 30; ++R)
            T[R] = 0;
        }
        var $ = 2, Y = 0, Le = f, V = N - S & 32767;
        if (B > 2 && O == A(C - V))
          for (var se = Math.min(d, B) - 1, Q = Math.min(32767, C), j = Math.min(258, B); V <= Q && --Le && N != S; ) {
            if (s[C + $] == s[C + $ - V]) {
              for (var P = 0; P < j && s[C + P] == s[C + P - V]; ++P)
                ;
              if (P > $) {
                if ($ = P, Y = V, P > se)
                  break;
                for (var ee = Math.min(V, P - 2), ze = 0, R = 0; R < ee; ++R) {
                  var Ce = C - V + R & 32767, Tt = g[Ce], Ge = Ce - Tt & 32767;
                  Ge > ze && (ze = Ge, S = Ce);
                }
              }
            }
            N = S, S = g[N], V += N - S & 32767;
          }
        if (Y) {
          m[_++] = 268435456 | Re[$] << 18 | Je[Y];
          var $e = Re[$] & 31, Ze = Je[Y] & 31;
          w += Oe[$e] + Pe[Ze], ++L[257 + $e], ++T[Ze], U = C + $, ++M;
        } else
          m[_++] = s[C], ++L[s[C]];
      }
    }
    for (C = Math.max(C, U); C < o; ++C)
      m[_++] = s[C], ++L[s[C]];
    u = et(s, l, c, m, L, T, w, _, E, C - E, u), c || (i.r = u & 7 | l[u / 8 | 0] << 3, u -= 7, i.h = x, i.p = g, i.i = C, i.w = U);
  } else {
    for (var C = i.w || 0; C < o + c; C += 65535) {
      var Me = C + 65535;
      Me >= o && (l[u / 8 | 0] = c, Me = o), u = wt(l, u + 1, s.subarray(C, Me));
    }
    i.i = o;
  }
  return xt(a, 0, n + mt(u) + r);
}, zn = /* @__PURE__ */ function() {
  for (var s = new Int32Array(256), e = 0; e < 256; ++e) {
    for (var t = e, n = 9; --n; )
      t = (t & 1 && -306674912) ^ t >>> 1;
    s[e] = t;
  }
  return s;
}(), Gn = function() {
  var s = -1;
  return {
    p: function(e) {
      for (var t = s, n = 0; n < e.length; ++n)
        t = zn[t & 255 ^ e[n]] ^ t >>> 8;
      s = t;
    },
    d: function() {
      return ~s;
    }
  };
}, $n = function(s, e, t, n, r) {
  if (!r && (r = { l: 1 }, e.dictionary)) {
    var i = e.dictionary.subarray(-32768), o = new F(i.length + s.length);
    o.set(i), o.set(s, i.length), s = o, r.w = i.length;
  }
  return Pn(s, e.level == null ? 6 : e.level, e.mem == null ? r.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(s.length))) * 1.5) : 20 : 12 + e.mem, t, n, r);
}, Ct = function(s, e) {
  var t = {};
  for (var n in s)
    t[n] = s[n];
  for (var n in e)
    t[n] = e[n];
  return t;
}, k = function(s, e, t) {
  for (; t; ++e)
    s[e] = t, t >>>= 8;
};
function Zn(s, e) {
  return $n(s, e || {}, 0, 0);
}
var Mt = function(s, e, t, n) {
  for (var r in s) {
    var i = s[r], o = e + r, a = n;
    Array.isArray(i) && (a = Ct(n, i[1]), i = i[0]), i instanceof F ? t[o] = [i, a] : (t[o += "/"] = [new F(0), a], Mt(i, o, t, n));
  }
}, tt = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), Hn = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Vn = 0;
try {
  Hn.decode(Lt, { stream: !0 }), Vn = 1;
} catch {
}
function xe(s, e) {
  if (e) {
    for (var t = new F(s.length), n = 0; n < s.length; ++n)
      t[n] = s.charCodeAt(n);
    return t;
  }
  if (tt)
    return tt.encode(s);
  for (var r = s.length, i = new F(s.length + (s.length >> 1)), o = 0, a = function(u) {
    i[o++] = u;
  }, n = 0; n < r; ++n) {
    if (o + 5 > i.length) {
      var l = new F(o + 8 + (r - n << 1));
      l.set(i), i = l;
    }
    var c = s.charCodeAt(n);
    c < 128 || e ? a(c) : c < 2048 ? (a(192 | c >> 6), a(128 | c & 63)) : c > 55295 && c < 57344 ? (c = 65536 + (c & 1047552) | s.charCodeAt(++n) & 1023, a(240 | c >> 18), a(128 | c >> 12 & 63), a(128 | c >> 6 & 63), a(128 | c & 63)) : (a(224 | c >> 12), a(128 | c >> 6 & 63), a(128 | c & 63));
  }
  return xt(i, 0, o);
}
var Ne = function(s) {
  var e = 0;
  if (s)
    for (var t in s) {
      var n = s[t].length;
      n > 65535 && we(9), e += n + 4;
    }
  return e;
}, nt = function(s, e, t, n, r, i, o, a) {
  var l = n.length, c = t.extra, u = a && a.length, h = Ne(c);
  k(s, e, o != null ? 33639248 : 67324752), e += 4, o != null && (s[e++] = 20, s[e++] = t.os), s[e] = 20, e += 2, s[e++] = t.flag << 1 | (i < 0 && 8), s[e++] = r && 8, s[e++] = t.compression & 255, s[e++] = t.compression >> 8;
  var d = new Date(t.mtime == null ? Date.now() : t.mtime), f = d.getFullYear() - 1980;
  if ((f < 0 || f > 119) && we(10), k(s, e, f << 25 | d.getMonth() + 1 << 21 | d.getDate() << 16 | d.getHours() << 11 | d.getMinutes() << 5 | d.getSeconds() >> 1), e += 4, i != -1 && (k(s, e, t.crc), k(s, e + 4, i < 0 ? -i - 2 : i), k(s, e + 8, t.size)), k(s, e + 12, l), k(s, e + 14, h), e += 16, o != null && (k(s, e, u), k(s, e + 6, t.attrs), k(s, e + 10, o), e += 14), s.set(n, e), e += l, h)
    for (var p in c) {
      var g = c[p], x = g.length;
      k(s, e, +p), k(s, e + 2, x), s.set(g, e + 4), e += 4 + x;
    }
  return u && (s.set(a, e), e += u), e;
}, jn = function(s, e, t, n, r) {
  k(s, e, 101010256), k(s, e + 8, t), k(s, e + 10, t), k(s, e + 12, n), k(s, e + 16, r);
};
function Wn(s, e) {
  e || (e = {});
  var t = {}, n = [];
  Mt(s, "", t, e);
  var r = 0, i = 0;
  for (var o in t) {
    var a = t[o], l = a[0], c = a[1], u = c.level == 0 ? 0 : 8, h = xe(o), d = h.length, f = c.comment, p = f && xe(f), g = p && p.length, x = Ne(c.extra);
    d > 65535 && we(11);
    var v = u ? Zn(l, c) : l, I = v.length, A = Gn();
    A.p(l), n.push(Ct(c, {
      size: l.length,
      crc: A.d(),
      c: v,
      f: h,
      m: p,
      u: d != o.length || p && f.length != g,
      o: r,
      compression: u
    })), r += 30 + d + x + I, i += 76 + 2 * (d + x) + (g || 0) + I;
  }
  for (var m = new F(i + 22), L = r, T = i - r, M = 0; M < n.length; ++M) {
    var h = n[M];
    nt(m, h.o, h, h.f, h.u, h.c.length);
    var w = 30 + h.f.length + Ne(h.extra);
    m.set(h.c, h.o + w), nt(m, r, h, h.f, h.u, h.c.length, h.o, h.m), r += 16 + w + (h.m ? h.m.length : 0);
  }
  return jn(m, r, n.length, T, L), m;
}
class Yn {
  async parse(e, t = {}) {
    t = Object.assign({
      ar: {
        anchoring: { type: "plane" },
        planeAnchoring: { alignment: "horizontal" }
      },
      quickLookCompatible: !1,
      maxTextureSize: 1024
    }, t);
    const n = {}, r = "model.usda";
    n[r] = null;
    let i = yt();
    i += Kn(t);
    const o = {}, a = {};
    e.traverseVisible((c) => {
      if (c.isMesh) {
        const u = c.geometry, h = c.material;
        if (h.isMeshStandardMaterial) {
          const d = "geometries/Geometry_" + u.id + ".usda";
          if (!(d in n)) {
            const f = es(u);
            n[d] = Jn(f);
          }
          h.uuid in o || (o[h.uuid] = h), i += Qn(c, u, h);
        } else
          console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)", c);
      } else
        c.isCamera && (i += cs(c));
    }), i += qn(), i += os(o, a, t.quickLookCompatible), n[r] = xe(i), i = null;
    for (const c in a) {
      let u = a[c];
      u.isCompressedTexture === !0 && (u = pe(u));
      const h = Xn(u.image, u.flipY, t.maxTextureSize), d = await new Promise((f) => h.toBlob(f, "image/png", 1));
      n[`textures/Texture_${c}.png`] = new Uint8Array(await d.arrayBuffer());
    }
    let l = 0;
    for (const c in n) {
      const u = n[c], h = 34 + c.length;
      l += h;
      const d = l & 63;
      if (d !== 4) {
        const f = 64 - d, p = new Uint8Array(f);
        n[c] = [u, { extra: { 12345: p } }];
      }
      l = u.length;
    }
    return Wn(n, { level: 0 });
  }
}
function Xn(s, e, t) {
  if (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && s instanceof OffscreenCanvas || typeof ImageBitmap < "u" && s instanceof ImageBitmap) {
    const n = t / Math.max(s.width, s.height), r = document.createElement("canvas");
    r.width = s.width * Math.min(1, n), r.height = s.height * Math.min(1, n);
    const i = r.getContext("2d");
    return e === !0 && (i.translate(0, r.height), i.scale(1, -1)), i.drawImage(s, 0, 0, r.width, r.height), r;
  } else
    throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.");
}
const z = 7;
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
function Kn(s) {
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
function qn() {
  return `
		}
	}
}

`;
}
function Jn(s) {
  let e = yt();
  return e += s, xe(e);
}
function Qn(s, e, t) {
  const n = "Object_" + s.id, r = vt(s.matrixWorld);
  return s.matrixWorld.determinant() < 0 && console.warn("THREE.USDZExporter: USDZ does not support negative scales", s), `def Xform "${n}" (
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
function vt(s) {
  const e = s.elements;
  return `( ${he(e, 0)}, ${he(e, 4)}, ${he(e, 8)}, ${he(e, 12)} )`;
}
function he(s, e) {
  return `(${s[e + 0]}, ${s[e + 1]}, ${s[e + 2]}, ${s[e + 3]})`;
}
function es(s) {
  return `
def "Geometry"
{
${ts(s)}
}
`;
}
function ts(s) {
  const e = "Geometry", t = s.attributes, n = t.position.count;
  return `
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${ns(s)}]
		int[] faceVertexIndices = [${ss(s)}]
		normal3f[] normals = [${Ue(t.normal, n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Ue(t.position, n)}]
${is(t)}
		uniform token subdivisionScheme = "none"
	}
`;
}
function ns(s) {
  const e = s.index !== null ? s.index.count : s.attributes.position.count;
  return Array(e / 3).fill(3).join(", ");
}
function ss(s) {
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
function Ue(s, e) {
  if (s === void 0)
    return console.warn("USDZExporter: Normals missing."), Array(e).fill("(0, 0, 0)").join(", ");
  const t = [];
  for (let n = 0; n < s.count; n++) {
    const r = s.getX(n), i = s.getY(n), o = s.getZ(n);
    t.push(`(${r.toPrecision(z)}, ${i.toPrecision(z)}, ${o.toPrecision(z)})`);
  }
  return t.join(", ");
}
function rs(s) {
  const e = [];
  for (let t = 0; t < s.count; t++) {
    const n = s.getX(t), r = s.getY(t);
    e.push(`(${n.toPrecision(z)}, ${1 - r.toPrecision(z)})`);
  }
  return e.join(", ");
}
function is(s) {
  let e = "";
  for (let n = 0; n < 4; n++) {
    const r = n > 0 ? n : "", i = s["uv" + r];
    i !== void 0 && (e += `
		texCoord2f[] primvars:st${r} = [${rs(i)}] (
			interpolation = "vertex"
		)`);
  }
  const t = s.color;
  if (t !== void 0) {
    const n = t.count;
    e += `
	color3f[] primvars:displayColor = [${Ue(t, n)}] (
		interpolation = "vertex"
		)`;
  }
  return e;
}
function os(s, e, t = !1) {
  const n = [];
  for (const r in s) {
    const i = s[r];
    n.push(as(i, e, t));
  }
  return `def "Materials"
{
${n.join("")}
}

`;
}
function as(s, e, t = !1) {
  const n = "			", r = [], i = [];
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
    }, f = a.repeat.clone(), p = a.offset.clone(), g = a.rotation, x = Math.sin(g), v = Math.cos(g);
    return p.y = 1 - p.y - f.y, t ? (p.x = p.x / f.x, p.y = p.y / f.y, p.x += x / f.x, p.y += v - 1) : (p.x += x * f.x, p.y += (1 - v) * f.y), `
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
			token inputs:in.connect = </Materials/Material_${s.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(g * (180 / Math.PI)).toFixed(z)}
			float2 inputs:scale = ${rt(f)}
			float2 inputs:translation = ${rt(p)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${u}.png@
			float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${l}.outputs:result>
			${c !== void 0 ? "float4 inputs:scale = " + ls(c) : ""}
			token inputs:sourceColorSpace = "${a.colorSpace === ut ? "raw" : "sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${s.transparent || s.alphaTest > 0 ? "float outputs:a" : ""}
		}`;
  }
  return s.side === ht && console.warn("THREE.USDZExporter: USDZ does not support double sided materials", s), s.map !== null ? (r.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`), s.transparent ? r.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`) : s.alphaTest > 0 && (r.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`), r.push(`${n}float inputs:opacityThreshold = ${s.alphaTest}`)), i.push(o(s.map, "diffuse", s.color))) : r.push(`${n}color3f inputs:diffuseColor = ${st(s.color)}`), s.emissiveMap !== null ? (r.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`), i.push(o(s.emissiveMap, "emissive"))) : s.emissive.getHex() > 0 && r.push(`${n}color3f inputs:emissiveColor = ${st(s.emissive)}`), s.normalMap !== null && (r.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`), i.push(o(s.normalMap, "normal"))), s.aoMap !== null && (r.push(`${n}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`), i.push(o(s.aoMap, "occlusion"))), s.roughnessMap !== null && s.roughness === 1 ? (r.push(`${n}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`), i.push(o(s.roughnessMap, "roughness"))) : r.push(`${n}float inputs:roughness = ${s.roughness}`), s.metalnessMap !== null && s.metalness === 1 ? (r.push(`${n}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`), i.push(o(s.metalnessMap, "metallic"))) : r.push(`${n}float inputs:metallic = ${s.metalness}`), s.alphaMap !== null ? (r.push(`${n}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`), r.push(`${n}float inputs:opacityThreshold = 0.0001`), i.push(o(s.alphaMap, "opacity"))) : r.push(`${n}float inputs:opacity = ${s.opacity}`), s.isMeshPhysicalMaterial && (r.push(`${n}float inputs:clearcoat = ${s.clearcoat}`), r.push(`${n}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`), r.push(`${n}float inputs:ior = ${s.ior}`)), `
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
function st(s) {
  return `(${s.r}, ${s.g}, ${s.b})`;
}
function ls(s) {
  return `(${s.r}, ${s.g}, ${s.b}, 1.0)`;
}
function rt(s) {
  return `(${s.x}, ${s.y})`;
}
function cs(s) {
  const e = s.name ? s.name : "Camera_" + s.id, t = vt(s.matrixWorld);
  return s.matrixWorld.determinant() < 0 && console.warn("THREE.USDZExporter: USDZ does not support negative scales", s), s.isOrthographicCamera ? `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(z)}, ${s.far.toPrecision(z)})
			float horizontalAperture = ${((Math.abs(s.left) + Math.abs(s.right)) * 10).toPrecision(z)}
			float verticalAperture = ${((Math.abs(s.top) + Math.abs(s.bottom)) * 10).toPrecision(z)}
			token projection = "orthographic"
		}
	
	` : `def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${s.near.toPrecision(z)}, ${s.far.toPrecision(z)})
			float focalLength = ${s.getFocalLength().toPrecision(z)}
			float focusDistance = ${s.focus.toPrecision(z)}
			float horizontalAperture = ${s.getFilmWidth().toPrecision(z)}
			token projection = "perspective"
			float verticalAperture = ${s.getFilmHeight().toPrecision(z)}
		}
	
	`;
}
const us = 64 / 256, hs = `
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
function fs(s, e, t = 256) {
  return new Promise((n) => {
    const r = t * us, i = hs.replace("<WIDTH>", t.toString()).replace("<HEIGHT>", r.toString()), o = new Image(), a = new Blob([i], { type: "image/svg+xml" }), l = URL.createObjectURL(a);
    o.onload = function() {
      s.drawImage(o, e, e), URL.revokeObjectURL(l), n();
    }, o.src = l;
  });
}
function ps(s) {
  return new Promise((e) => {
    const t = new FileReader();
    t.onloadend = () => {
      typeof t.result == "string" ? e(t.result) : e("");
    }, t.readAsDataURL(s);
  });
}
function fe(s) {
  s.parentNode.removeChild(s);
}
const ds = 12, K = 512, it = 16;
function gs(s) {
  const e = document.createElement("canvas");
  e.width = s.width, e.height = s.height;
  const t = e.getContext("2d");
  if (!t)
    throw new Error("Unable to create a canvas with context.");
  const n = t.getImageData(0, 0, s.width, s.height);
  return n.data.set(s.pixelData), t.putImageData(n, 0, 0), e;
}
async function ms(s, e, t, n) {
  const r = e.x - s.x + 1, i = e.y - s.y + 1, o = document.createElement("canvas");
  o.width = r * K, o.height = i * K;
  const a = o.getContext("2d");
  if (!a)
    throw new Error("The context is invalid");
  let l = 0, c = 0;
  const u = [];
  for (let h = s.y; h <= e.y; h += 1) {
    for (let d = s.x; d <= e.x; d += 1) {
      const p = n[~~(Math.random() * n.length)].replace("{x}", d.toString()).replace("{y}", h.toString()).replace("{z}", t.toString());
      u.push(
        xs(p, a, [
          l * K,
          c * K
        ])
      ), l++;
    }
    l = 0, c++;
  }
  return await Promise.all(u), o;
}
function xs(s, e, t) {
  return new Promise((n) => {
    const r = new Image();
    r.crossOrigin = "anonymous", r.src = s, r.onload = function() {
      e.drawImage(r, t[0], t[1]), n();
    }, r.onerror = function() {
      n();
    };
  });
}
function ws(s, e, t) {
  var l;
  const n = s[0], r = s[1], i = e[0], o = e[1], a = document.createElement("canvas");
  return a.width = i, a.height = o, (l = a.getContext("2d")) == null || l.drawImage(
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
function ne(s) {
  return new Promise(function(e) {
    s.once("idle", () => {
      e(!0);
    });
  });
}
const Ls = {
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
class Bs extends Dt {
  constructor(t = {}) {
    super();
    b(this, "controlButton");
    b(this, "controlButtonContainer");
    b(this, "map");
    b(this, "colorData", null);
    b(this, "landMaskData", null);
    b(this, "terrainData", null);
    b(this, "cameraSettings");
    b(this, "hasTerrain");
    b(this, "terrainExaggeration");
    b(this, "terrainSourceID");
    b(this, "meterPerPixelCenter", 0);
    b(this, "originalPixelRatio", 0);
    b(this, "mapCaptureBounds");
    b(this, "threeSceneGLTF");
    b(this, "threeSceneUSDZ");
    b(this, "threeTileContainerGLTF");
    b(this, "threeTileContainerUSDZ");
    b(this, "gltfMaterial");
    b(this, "usdzMaterial");
    b(this, "mapMeshGLTF");
    b(this, "mapMeshUSDZ");
    b(this, "itemsToDispose", []);
    b(this, "gltfExporter", new ke());
    b(this, "lock", !1);
    b(this, "options");
    b(this, "arButton", null);
    b(this, "closeButton", null);
    b(this, "modelViewer", null);
    b(this, "logoImgElement", null);
    b(this, "logo");
    this.options = {
      ...Ls,
      ...t
    }, this.logo = t.logo;
  }
  on(t, n) {
    super.on(t, n);
  }
  once(t, n) {
    super.once(t, n);
  }
  off(t) {
    super.off(t);
  }
  onAdd(t) {
    if (this.setMap(t), this.controlButtonContainer = window.document.createElement("div"), this.options.showButton) {
      this.controlButtonContainer.className = "maplibregl-ctrl maplibregl-ctrl-group", this.controlButton = window.document.createElement("button"), this.controlButton.className = "maptiler-ar-ctrl", this.controlButtonContainer.appendChild(this.controlButton);
      const n = window.document.createElement("span");
      n.className = "maplibregl-ctrl-icon", n.setAttribute("aria-hidden", "true"), this.controlButton.appendChild(n);
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
      n.innerHTML = this.options.activateAR && (un || sn) ? i : r, this.controlButton.type = "button", this.controlButton.addEventListener("click", async () => {
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
    t && n && (await this.buildMapModel(), Rt.getPlatform() === "ios" ? this.runNative() : this.runMobile(), this.lock = !1);
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
      zoom: Math.min(this.cameraSettings.zoom, it),
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
    var L;
    this.emit("startComputeTerrainData", {});
    const t = Math.min(Math.floor(this.map.getZoom()), ds), n = this.map.getBounds(), r = n.getNorth(), i = n.getSouth(), o = n.getEast(), a = n.getWest(), l = He.wgs84ToTileIndex(
      [a, r],
      t,
      !1
    ), c = {
      x: l[0],
      y: l[1]
    }, u = {
      x: Math.floor(c.x),
      y: Math.floor(c.y)
    }, h = He.wgs84ToTileIndex(
      [o, i],
      t,
      !1
    ), d = {
      x: h[0],
      y: h[1]
    }, f = {
      x: Math.floor(d.x),
      y: Math.floor(d.y)
    }, p = this.map.getSdkConfig(), g = this.map.getMaptilerSessionId(), x = await ms(
      u,
      f,
      t,
      [
        `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key=${p.apiKey}&mtsid=${g}&module=xr`
      ]
    ), v = [
      Math.floor(
        K * (c.x - u.x)
      ),
      // width
      Math.floor(
        K * (c.y - u.y)
      )
      // height
    ], I = [
      Math.ceil(
        K * (d.x - c.x)
      ),
      Math.ceil(
        K * (d.y - c.y)
      )
    ], A = ws(v, I, x), m = (L = A.getContext("2d")) == null ? void 0 : L.getImageData(0, 0, A.width, A.height).data;
    if (!m)
      throw new Error("Unable to extract terrain data.");
    this.terrainData = {
      width: A.width,
      height: A.height,
      pixelData: new Uint8Array(m.buffer),
      bounds: n
    }, this.emit("endComputeTerrainData", {});
  }
  async computeTextures() {
    var a;
    const t = this.map.getPixelRatio();
    if (this.options.highRes && this.map.setPixelRatio(4), this.enableTopView(), await this.computeColorData(), await this.computeTerrainData(), !this.colorData)
      throw new Error("The color texture is invalid.");
    this.mapCaptureBounds = this.map.getBounds();
    const n = this.mapCaptureBounds.getCenter(), r = new ce(this.mapCaptureBounds.getWest(), n.lat), o = new ce(this.mapCaptureBounds.getEast(), n.lat).distanceTo(r);
    this.meterPerPixelCenter = o / ((a = this.colorData) == null ? void 0 : a.width), this.options.highRes && this.map.setPixelRatio(t), this.restoreMapSettings(), await ne(this.map);
  }
  init3DScene() {
    this.threeSceneGLTF = new G.Scene(), this.threeTileContainerGLTF = new G.Object3D(), this.threeSceneGLTF.add(this.threeTileContainerGLTF), this.threeTileContainerGLTF.rotation.set(-Math.PI / 2, 0, 0), this.threeSceneUSDZ = new G.Scene(), this.threeTileContainerUSDZ = new G.Object3D(), this.threeSceneUSDZ.add(this.threeTileContainerUSDZ), this.threeTileContainerUSDZ.rotation.set(-Math.PI / 2, 0, 0);
  }
  async buildMapModel() {
    if (!this.colorData)
      throw new Error("Color textures is not ready.");
    if (!this.terrainData)
      throw new Error("Terrain textures is not ready.");
    this.threeTileContainerGLTF.clear(), this.threeTileContainerUSDZ.clear(), this.dispose();
    const t = gs(this.colorData), n = t.getContext("2d");
    if (!n)
      throw new Error("Color texture not available");
    const r = new G.Color(this.options.edgeColor), i = r.clone().multiplyScalar(0.65), o = r.clone().multiplyScalar(0.5);
    n.fillStyle = `#${r.getHexString()}`;
    const a = Math.ceil(this.colorData.width / this.terrainData.width) * 1.5;
    await fs(
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
    const l = new G.CanvasTexture(t);
    l.flipY = !1, l.colorSpace = G.SRGBColorSpace, l.needsUpdate = !0, this.itemsToDispose.push(l), this.gltfMaterial = new G.MeshStandardMaterial({
      map: l,
      color: 16777215
    }), this.usdzMaterial = new G.MeshStandardMaterial({
      map: l
    }), this.itemsToDispose.push(this.gltfMaterial), this.itemsToDispose.push(this.usdzMaterial);
    const c = this.mapCaptureBounds, u = new ce(c.getWest(), c.getCenter().lat), h = c.getCenter(), d = new ce(c.getEast(), c.getCenter().lat), f = u.distanceTo(h) + h.distanceTo(d), p = c.getSouthEast().distanceTo(c.getNorthEast()), g = new G.PlaneGeometry(
      f,
      p,
      this.terrainData.width - 1,
      this.terrainData.height - 1
    );
    this.mapMeshGLTF = new G.Mesh(g, this.gltfMaterial), this.mapMeshUSDZ = new G.Mesh(g, this.usdzMaterial);
    const x = g.attributes.position.array, v = this.terrainData.width, I = this.terrainData.height;
    let A = 1 / 0;
    for (let E = 0; E < x.length / 3; E += 1) {
      const O = this.terrainData.pixelData[E * 4], N = this.terrainData.pixelData[E * 4 + 1], S = this.terrainData.pixelData[E * 4 + 2], B = -1e4 + (O * 256 * 256 + N * 256 + S) * 0.1;
      B < A && (A = B);
    }
    const m = it - 1, L = Math.min(this.map.getZoom(), m);
    A = A - (50 * (L - m) ** 2 + 30);
    for (let E = 0; E < x.length / 3; E += 1) {
      const O = this.terrainData.pixelData[E * 4], N = this.terrainData.pixelData[E * 4 + 1], S = this.terrainData.pixelData[E * 4 + 2];
      let B = -1e4 + (O * 256 * 256 + N * 256 + S) * 0.1 - A;
      const R = E % v, $ = ~~(E / v);
      (R === 0 || $ === 0 || R === v - 1 || $ === I - 1) && (B = 0), x[E * 3 + 2] = B;
    }
    g.computeVertexNormals(), this.itemsToDispose.push(g);
    const T = new G.PlaneGeometry(
      f,
      p,
      1,
      1
    ), M = new G.MeshStandardMaterial({
      color: o
    }), w = new G.Mesh(T, M);
    w.rotateX(-Math.PI), this.itemsToDispose.push(T), this.itemsToDispose.push(M);
    const _ = 1 * 1 / f;
    this.threeTileContainerGLTF.scale.x = _, this.threeTileContainerGLTF.scale.y = _, this.threeTileContainerGLTF.scale.z = _, this.threeTileContainerGLTF.add(this.mapMeshGLTF), this.threeTileContainerGLTF.add(w), this.threeTileContainerUSDZ.scale.x = _, this.threeTileContainerUSDZ.scale.y = _, this.threeTileContainerUSDZ.scale.z = _;
    const U = w.clone();
    this.threeTileContainerUSDZ.add(this.mapMeshUSDZ), this.threeTileContainerUSDZ.add(U);
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
        console.warn("error:", n);
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
    const n = await new Yn().parse(this.threeSceneUSDZ, {
      maxTextureSize: 8192
    });
    return new Blob([n], {
      type: "model/vnd.usdz+zip"
    });
  }
  async runNative() {
    this.threeTileContainerUSDZ.updateMatrix(), this.threeTileContainerUSDZ.updateMatrixWorld();
    const t = await this.getModelBlobUSDZ(), n = await ps(t), r = await It.writeFile({
      path: "some_mesh.usdz",
      directory: At.Cache,
      data: n
    });
    await _t.open({
      filePath: r.uri,
      contentType: "model/vnd.usdz+zip",
      openWithDefault: !0
    }), this.emit("computeEnd");
  }
  async runMobile() {
    const t = this.map.getContainer(), n = await this.getModelBlobGLB(), r = URL.createObjectURL(n);
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
    this.dispose(), fe(this.arButton), fe(this.modelViewer), fe(this.closeButton), this.logoImgElement && fe(this.logoImgElement);
  }
  /**
   * Update the `src` property of the logo image
   */
  updateLogo(t) {
    this.logoImgElement && (this.logo = t, this.logoImgElement.src = t);
  }
}
export {
  As as HAS_INTERSECTION_OBSERVER,
  Is as HAS_RESIZE_OBSERVER,
  tn as HAS_WEBXR_DEVICE_API,
  nn as HAS_WEBXR_HIT_TEST_API,
  rn as IS_ANDROID,
  un as IS_AR_QUICKLOOK_CANDIDATE,
  _s as IS_CHROMEOS,
  an as IS_FIREFOX,
  Be as IS_IOS,
  Ds as IS_IOS_CHROME,
  Ns as IS_IOS_SAFARI,
  Rs as IS_MOBILE,
  ln as IS_OCULUS,
  on as IS_SAFARI,
  Us as IS_SCENEVIEWER_CANDIDATE,
  sn as IS_WEBXR_AR_CANDIDATE,
  cn as IS_WKWEBVIEW,
  Bs as MaptilerARControl,
  gs as mapTextureDataToCanvas
};
