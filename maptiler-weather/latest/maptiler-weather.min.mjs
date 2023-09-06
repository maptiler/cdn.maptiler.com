var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { getIntersection as e, scaleFromCenter as t, getArea as o, getIntersectionArea as r } from "ol/extent.js";
import { createXYZ as i } from "ol/tilegrid.js";
import * as a from "three";
import { OrthographicCamera as l, Scene as s, RawShaderMaterial as n, GLSL3 as c, Vector2 as u, WebGLRenderTarget as h, LinearFilter as v, RGBAFormat as m, Mesh as d, PlaneGeometry as p, DataTexture as x, WebGLRenderer as f } from "three";
import g from "ol/structs/LRUCache.js";
import { EventEmitter as S } from "events";
var y = ((e2) => (e2[e2.r = 0] = "r", e2[e2.g = 1] = "g", e2[e2.b = 2] = "b", e2[e2.a = 3] = "a", e2))(y || {});
let T = null, w = null;
function P(e2) {
  return `vec4(${(e2[0] / 255).toFixed(3)},${(e2[1] / 255).toFixed(3)},${(e2[2] / 255).toFixed(3)},${((e2[3] ?? 255) / 255).toFixed(3)})`;
}
function R(e2) {
  return [e2[0] / 255, e2[1] / 255, e2[2] / 255, (e2[3] ?? 255) / 255];
}
function C(e2) {
  return 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + e2 * Math.PI / 360)) / 360;
}
function E(e2, t2) {
  return [e2 / 360, C(t2)];
}
function _(e2) {
  const t2 = Math.PI;
  return 360 * ((0, Math.atan)((0, Math.exp)(2 * e2 * t2)) - t2 / 4) / t2;
}
function M(e2, t2) {
  return _(-0.5 * (e2 / t2 * 2 - 1));
}
const A = 6378137, D = 2 * Math.PI * A;
function I(e2, t2) {
  return E(e2, t2).map((e3) => e3 * D);
}
function z(e2, t2, o2) {
  const r2 = Math.floor(t2 * e2.width), i2 = Math.floor(o2 * e2.height), a2 = (T && w || (T = document.createElement("canvas"), w = T.getContext("webgl2")), w);
  if (null == a2)
    throw new Error("Failed to obtain WebGL2 context");
  a2.activeTexture(a2.TEXTURE0);
  const l2 = a2.createTexture();
  a2.bindTexture(a2.TEXTURE_2D, l2);
  const s2 = a2.createFramebuffer();
  a2.bindFramebuffer(a2.FRAMEBUFFER, s2), a2.framebufferTexture2D(a2.FRAMEBUFFER, a2.COLOR_ATTACHMENT0, a2.TEXTURE_2D, l2, 0), a2.texImage2D(a2.TEXTURE_2D, 0, a2.RGBA, a2.RGBA, a2.UNSIGNED_BYTE, e2), a2.drawBuffers([a2.COLOR_ATTACHMENT0]);
  const n2 = new Uint8Array(4);
  return a2.readPixels(r2, i2, 1, 1, a2.RGBA, a2.UNSIGNED_BYTE, n2), a2.deleteTexture(l2), a2.deleteFramebuffer(s2), { r: n2[0] / 255, g: n2[1] / 255, b: n2[2] / 255, a: n2[3] / 255 };
}
function b(e2, t2, o2 = "") {
  e2.isStyleLoaded() ? e2.addLayer(t2, o2) : e2.once("load", () => {
    e2.addLayer(t2, o2);
  });
}
function F(e2) {
  return ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round((e2 + 360) % 360 / 22.5) % 16];
}
function N(e2, t2 = 50) {
  if (e2.length <= t2)
    return e2;
  const o2 = function(e3) {
    return e3.filter((t3, o3) => 0 === o3 || o3 % 2 || o3 === e3.length - 1);
  }(e2);
  return N(o2, t2);
}
function O(e2, t2, o2 = { inputName: "v", outputName: "c" }) {
  const r2 = N(e2);
  let i2 = "";
  for (let e3 = 0; e3 < r2.length; e3++) {
    const a2 = r2[e3];
    0 === e3 && (i2 += `vec4 ${o2.outputName}=${P(a2.color)};
`);
    const l2 = a2.value, s2 = P(a2.color);
    if (t2 && e3 + 1 < r2.length) {
      const t3 = r2[e3 + 1].value, a3 = P(r2[e3 + 1].color), n2 = 0 === parseFloat((l2 - t3).toFixed(7)) ? "0." : `(${o2.inputName} - ${l2.toFixed(7)}) / (${(t3 - l2).toFixed(7)})`;
      i2 += `${e3 > 0 ? " else " : ""} if(${o2.inputName}>=${l2.toFixed(7)}&&${o2.inputName}<${t3.toFixed(7)}) { ${o2.outputName}=mix(${s2},${a3}, ${n2} ); }
`;
    } else
      i2 += `if(${o2.inputName}>=${l2.toFixed(7)})${o2.outputName}=${s2};
`;
  }
  return i2;
}
class U {
  constructor(e2, t2) {
    this.code = e2, this.decode = t2, this.decode.min = this.decode.min ?? 0, this.decode.max = this.decode.max ?? 1;
  }
  codeValue(e2) {
    return (e2 - this.decode.min) / (this.decode.max - this.decode.min);
  }
  decodeValue(e2) {
    return this.decode.min + e2 * (this.decode.max - this.decode.min);
  }
  decodeChannel(e2) {
    if (this.decode.channel.length > 1) {
      const t2 = this.decodeValue(e2[this.decode.channel[0]]), o2 = this.decodeValue(e2[this.decode.channel[1]]);
      return [t2, o2, Math.sqrt(t2 * t2 + o2 * o2)];
    }
    return this.decodeValue(e2[this.decode.channel]);
  }
  getBlendCode(e2) {
    return `vec4 ${e2}(vec4 d,vec4 data){${this.code + "d.rgb=(d.rgb*d.a*(1.-c.a)+c.rgb*c.a)/(d.a*(1.-c.a)+c.a);d.a=d.a+c.a*(1.-d.a);"}return d;}`;
  }
  getCode(e2) {
    return `vec4 ${e2}(vec4 data){${this.code}return c;}`;
  }
}
function L({ channel: e2 = "r", min: t2 = 0, max: o2 = 1 }) {
  let r2 = `${t2.toFixed(7)}+data.${e2}*${(o2 - t2).toFixed(7)}`;
  return e2.length > 1 && (r2 = `length(${r2})`), `float v=${r2};`;
}
class V extends U {
  constructor(e2) {
    const t2 = e2.decode, o2 = e2.stops || [{ value: t2.min, color: [0, 0, 0, 0] }, { value: t2.max, color: [255, 255, 255, 255] }], r2 = e2.smooth ?? true, i2 = e2.opacity ?? 1;
    let a2 = L(t2);
    a2 += O(o2, r2), a2 += `c.a*=${i2.toFixed(3)};`, super(a2, t2);
  }
}
class B extends U {
  constructor(e2) {
    const t2 = e2.decode, o2 = e2.color || [255, 255, 255], r2 = e2.opacity ?? 1;
    super(L(t2) + `vec4 c=${P(o2)};c.a*=v*${r2.toFixed(3)};`, t2);
  }
}
class W {
  constructor(e2) {
    __publicField(this, "decode", { polynomialCoefDegree2: 0, polynomialCoefDegree1: 1, polynomialConstant: 0 });
    __publicField(this, "stopsPerCategory", [{ category: "all", stops: [{ value: 0, color: [0, 0, 0] }, { value: 255, color: [255, 255, 255] }] }]);
    __publicField(this, "smooth");
    __publicField(this, "opacity");
    __publicField(this, "code");
    this.decode = e2.decode, this.stopsPerCategory = e2.stopsPerCategory, this.smooth = e2.smooth ?? true, this.opacity = e2.opacity ?? 1;
    const t2 = this.stopsPerCategory.filter((e3) => "all" === e3.category);
    let o2 = this.stopsPerCategory;
    t2.length && (o2 = t2);
    const r2 = o2.map((e3) => {
      let t3 = `vec4 _mccf_${e3.category}(float v) {
`;
      return t3 += `${O(e3.stops, this.smooth)}`, t3 += "return c;}\n", t3;
    }).join("\n");
    let i2 = "vec4 getColor(int category, float v) {\n";
    i2 += "vec4 outputColor;\n", t2.length ? i2 += "outputColor  = _mccf_all(v);" : (i2 += this.stopsPerCategory.map((e3, t3) => `${0 === t3 ? "" : "else "}if (category == ${e3.category}) outputColor  = _mccf_${e3.category}(v);`).join("\n"), i2 += "\n else outputColor = vec4(0., 0., 0., 0.);\n"), i2 += `outputColor.a *= ${this.opacity.toFixed(3)};
`, i2 += "return outputColor;}\n", this.code = "precision highp float;precision highp sampler2D;uniform float opacity;uniform float time;uniform sampler2D tex0;uniform sampler2D tex1;uniform float tex0size;uniform float tex1size;uniform float tilePixelSize;uniform bool categorySmoothTransition;uniform bool timeInterpolation;in vec2 tex0coord;in vec2 tex1coord;out vec4 fragColor;<gradient_function_definitions><getColor_code>vec4 blerp(vec4 color_x0_y0,vec4 color_x0_y1,vec4 color_x1_y0,vec4 color_x1_y1,float x0,float y0,float x1,float y1,float x,float y){vec4 q11=(((x1-x)*(y1-y))/((x1-x0)*(y1-y0)))*color_x0_y0;vec4 q21=(((x-x0)*(y1-y))/((x1-x0)*(y1-y0)))*color_x1_y0;vec4 q12=(((x1-x)*(y-y0))/((x1-x0)*(y1-y0)))*color_x0_y1;vec4 q22=(((x-x0)*(y-y0))/((x1-x0)*(y1-y0)))*color_x1_y1;return q11+q21+q12+q22;}void main(){vec2 centerPixelUV=vec2((floor(tex0coord.x*tilePixelSize)+0.5)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5)/tilePixelSize);vec2 centerPixelUV_N=vec2((floor(tex0coord.x*tilePixelSize)+0.5)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5+1.)/tilePixelSize);vec2 centerPixelUV_S=vec2((floor(tex0coord.x*tilePixelSize)+0.5)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5-1.)/tilePixelSize);vec2 centerPixelUV_E=vec2((floor(tex0coord.x*tilePixelSize)+0.5+1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5)/tilePixelSize);vec2 centerPixelUV_W=vec2((floor(tex0coord.x*tilePixelSize)+0.5-1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5)/tilePixelSize);vec4 tex0Color=texture(tex0,tex0coord);vec4 tex1Color=texture(tex1,tex1coord);vec4 inter=timeInterpolation ? mix(tex0Color,tex1Color,time):(time<0.5 ? tex0Color : tex1Color);vec3 inter255=inter.rgb*255.;float x=inter255.r*256.*256.+inter255.g*256.+inter255.b;float polynomialCoefDegree2=<polynomialCoefDegree2>;float polynomialCoefDegree1=<polynomialCoefDegree1>;float polynomialConstant=<polynomialConstant>;float y=polynomialCoefDegree2*x*x+polynomialCoefDegree1*x+polynomialConstant;int category=int((time<0.5 ? texture(tex0,centerPixelUV).a : texture(tex1,centerPixelUV).a)*255.);vec4 color_Center=getColor(category,y);vec4 color=vec4(0.,0.,0.,0.);if(categorySmoothTransition){if(tex0coord.x>=centerPixelUV.x){int category_E=int((time<0.5 ? texture(tex0,centerPixelUV_E).a : texture(tex1,centerPixelUV_E).a)*255.);vec4 color_E=getColor(category_E,y);if(tex0coord.y>=centerPixelUV.y){int category_N=int((time<0.5 ? texture(tex0,centerPixelUV_N).a : texture(tex1,centerPixelUV_N).a)*255.);vec4 color_N=getColor(category_N,y);vec2 centerPixelUV_NE=vec2((floor(tex0coord.x*tilePixelSize)+0.5+1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5+1.)/tilePixelSize);int category_NE=int((time<0.5 ?  texture(tex0,centerPixelUV_NE).a : texture(tex1,centerPixelUV_NE).a)*255.);vec4 color_NE=getColor(category_NE,y);color=blerp(color_Center,color_N,color_E,color_NE,centerPixelUV.x,centerPixelUV.y,centerPixelUV_NE.x,centerPixelUV_NE.y,tex0coord.x,tex0coord.y);}else{int category_S=int((time<0.5 ? texture(tex0,centerPixelUV_S).a : texture(tex1,centerPixelUV_S).a)*255.);vec4 color_S=getColor(category_S,y);vec2 centerPixelUV_SE=vec2((floor(tex0coord.x*tilePixelSize)+0.5+1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5-1.)/tilePixelSize);int category_SE=int((time<0.5 ?  texture(tex0,centerPixelUV_SE).a : texture(tex1,centerPixelUV_SE).a)*255.);vec4 color_SE=getColor(category_SE,y);color=blerp(color_S,color_Center,color_SE,color_E,centerPixelUV_S.x,centerPixelUV_S.y,centerPixelUV_E.x,centerPixelUV_E.y,tex0coord.x,tex0coord.y);}}else{int category_W=int((time<0.5 ? texture(tex0,centerPixelUV_W).a : texture(tex1,centerPixelUV_W).a)*255.);vec4 color_W=getColor(category_W,y);if(tex0coord.y>=centerPixelUV.y){int category_N=int((time<0.5 ? texture(tex0,centerPixelUV_N).a : texture(tex1,centerPixelUV_N).a)*255.);vec4 color_N=getColor(category_N,y);vec2 centerPixelUV_NW=vec2((floor(tex0coord.x*tilePixelSize)+0.5-1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5+1.)/tilePixelSize);int category_NW=int((time<0.5 ?  texture(tex0,centerPixelUV_NW).a : texture(tex1,centerPixelUV_NW).a)*255.);vec4 color_NW=getColor(category_NW,y);color=blerp(color_W,color_NW,color_Center,color_N,centerPixelUV_W.x,centerPixelUV_W.y,centerPixelUV_N.x,centerPixelUV_N.y,tex0coord.x,tex0coord.y);}else{int category_S=int((time<0.5 ? texture(tex0,centerPixelUV_S).a : texture(tex1,centerPixelUV_S).a)*255.);vec4 color_S=getColor(category_S,y);vec2 centerPixelUV_SW=vec2((floor(tex0coord.x*tilePixelSize)+0.5-1.)/tilePixelSize,(floor(tex0coord.y*tilePixelSize)+0.5-1.)/tilePixelSize);int category_SW=int((time<0.5 ?  texture(tex0,centerPixelUV_SW).a : texture(tex1,centerPixelUV_SW).a)*255.);vec4 color_SW=getColor(category_SW,y);color=blerp(color_SW,color_W,color_S,color_Center,centerPixelUV_SW.x,centerPixelUV_SW.y,centerPixelUV.x,centerPixelUV.y,tex0coord.x,tex0coord.y);}}}else{color=color_Center;}color.a*=opacity;fragColor=color;}".replace("<gradient_function_definitions>", r2).replace("<getColor_code>", i2).replace("<polynomialCoefDegree2>", this.decode.polynomialCoefDegree2.toFixed(7)).replace("<polynomialCoefDegree1>", this.decode.polynomialCoefDegree1.toFixed(7)).replace("<polynomialConstant>", this.decode.polynomialConstant.toFixed(7));
  }
  getCode() {
    return this.code;
  }
  decodeChannel(e2) {
    const t2 = { r: 255 * e2.r, g: 255 * e2.g, b: 255 * e2.b, a: 255 * e2.a }, o2 = 256 * t2.r * 256 + 256 * t2.g + t2.b;
    return [this.decode.polynomialCoefDegree2 * o2 * o2 + this.decode.polynomialCoefDegree1 * o2 + this.decode.polynomialConstant, t2.a];
  }
}
class $ {
  constructor() {
    __publicField(this, "allInstances", []);
    __publicField(this, "availableInstances", []);
  }
  add(e2, t2 = false) {
    return this.allInstances.push(e2), t2 && this.availableInstances.push(e2), e2;
  }
  isEmpty() {
    return 0 === this.availableInstances.length;
  }
  pop() {
    if (this.isEmpty())
      throw new Error("No more instances available ini the pool.");
    return this.availableInstances.pop();
  }
  init() {
    this.availableInstances = this.allInstances.slice();
  }
  reset() {
    this.availableInstances = [], this.allInstances = [];
  }
}
var k = "precision highp float;precision highp int;precision highp sampler2D;uniform vec2 direction;uniform int kernelSize;uniform sampler2D imgToBlur;in vec2 vUv;out vec4 fragColor;vec4 blur5(sampler2D image,vec2 uv,vec2 resolution,vec2 direction){vec4 color=vec4(0.0);vec2 off1=vec2(1.3333333333333333)*direction;color+=texture(image,uv)*0.29411764705882354;color+=texture(image,uv+(off1/resolution))*0.35294117647058826;color+=texture(image,uv-(off1/resolution))*0.35294117647058826;return color;}vec4 blur9(sampler2D image,vec2 uv,vec2 resolution,vec2 direction){vec4 color=vec4(0.0);vec2 off1=vec2(1.3846153846)*direction;vec2 off2=vec2(3.2307692308)*direction;color+=texture(image,uv)*0.2270270270;color+=texture(image,uv+(off1/resolution))*0.3162162162;color+=texture(image,uv-(off1/resolution))*0.3162162162;color+=texture(image,uv+(off2/resolution))*0.0702702703;color+=texture(image,uv-(off2/resolution))*0.0702702703;return color;}vec4 blur13(sampler2D image,vec2 uv,vec2 resolution,vec2 direction){vec4 color=vec4(0.0);vec2 off1=vec2(1.411764705882353)*direction;vec2 off2=vec2(3.2941176470588234)*direction;vec2 off3=vec2(5.176470588235294)*direction;color+=texture(image,uv)*0.1964825501511404;color+=texture(image,uv+(off1/resolution))*0.2969069646728344;color+=texture(image,uv-(off1/resolution))*0.2969069646728344;color+=texture(image,uv+(off2/resolution))*0.09447039785044732;color+=texture(image,uv-(off2/resolution))*0.09447039785044732;color+=texture(image,uv+(off3/resolution))*0.010381362401148057;color+=texture(image,uv-(off3/resolution))*0.010381362401148057;return color;}vec4 blur19(sampler2D image,vec2 uv,vec2 resolution,vec2 direction){vec4 color=vec4(0.0);vec2 off1=vec2(1.434782608695652)*direction;vec2 off2=vec2(3.347826086956522)*direction;vec2 off3=vec2(5.260869565217392)*direction;vec2 off4=vec2(7.173913043478261)*direction;color+=texture(image,uv)*0.16818993967466953;color+=texture(image,uv+(off1/resolution))*0.2727695816518679;color+=texture(image,uv-(off1/resolution))*0.2727695816518679;color+=texture(image,uv+(off2/resolution))*0.11690124927937194;color+=texture(image,uv-(off2/resolution))*0.11690124927937194;color+=texture(image,uv+(off3/resolution))*0.024067904263400105;color+=texture(image,uv-(off3/resolution))*0.024067904263400105;color+=texture(image,uv+(off4/resolution))*0.0021112196722280793;color+=texture(image,uv-(off4/resolution))*0.0021112196722280793;return color;}void main(){vec4 color=vec4(1.,0,0,1.);vec2 textureResolution=vec2(textureSize(imgToBlur,0));if(kernelSize==5){color=blur5(imgToBlur,vUv,textureResolution,direction);}else if(kernelSize==9){color=blur9(imgToBlur,vUv,textureResolution,direction);}else if(kernelSize==13){color=blur13(imgToBlur,vUv,textureResolution,direction);}else if(kernelSize==19){color=blur19(imgToBlur,vUv,textureResolution,direction);}fragColor=color;}";
let G = null;
class Z {
  constructor(e2, t2, o2 = function() {
    return G || (G = new f({ alpha: true, premultipliedAlpha: false })), G;
  }()) {
    __publicField(this, "renderer");
    __publicField(this, "camera", new l(-1, 1, 1, -1, 0, 1));
    __publicField(this, "scene", new s());
    __publicField(this, "renderTarget");
    __publicField(this, "material", new n({ glslVersion: c, vertexShader: "precision highp float;precision highp int;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;in vec3 position;in vec2 uv;out vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}", fragmentShader: "precision highp float;precision highp int;precision highp sampler2D;in vec2 vUv;out vec4 fragColor;void main(){fragColor=vec4(1.,0.,0.,1.);}", depthWrite: false, transparent: true }));
    __publicField(this, "size");
    this.size = new u(e2, t2), this.renderTarget = new h(e2, t2, { minFilter: v, magFilter: v, format: m }), this.camera.matrixAutoUpdate = false, this.renderer = o2, this.renderer.setPixelRatio(1), this.renderer.autoClear = false;
    const r2 = new d(new p(2, 2), this.material);
    this.scene.add(r2);
  }
  getOutputTexture(e2 = false) {
    return e2 ? new x(this.getPixelData(), this.size.x, this.size.y, m) : this.renderTarget.texture;
  }
  setSize(e2, t2) {
    e2 === this.size.x && t2 === this.size.y || (this.size.x = e2, this.size.y = t2, this.renderTarget = new h(e2, t2, { minFilter: v, magFilter: v, format: m }), this.renderer.setRenderTarget(this.renderTarget));
  }
  setVertexShader(e2) {
    this.material.vertexShader = e2.trim(), this.material.needsUpdate = true;
  }
  setFragmentShader(e2) {
    this.material.fragmentShader = e2.trim(), this.material.needsUpdate = true;
  }
  setUniform(e2, t2) {
    this.material.uniforms[e2] = { value: t2 };
  }
  setDefine(e2, t2) {
    this.material.fragmentShader = this.material.fragmentShader.replace(new RegExp(e2, "g"), t2.toString()), this.material.vertexShader = this.material.vertexShader.replace(new RegExp(e2, "g"), t2.toString()), this.material.needsUpdate = true;
  }
  getPixelData() {
    const e2 = this.size, t2 = new Uint8Array(e2.x * e2.y * 4);
    return this.renderer.readRenderTargetPixels(this.renderTarget, 0, 0, e2.x, e2.y, t2), t2;
  }
  getSize() {
    return this.size.clone();
  }
  process() {
    return this.material.needsUpdate = true, this.renderer.setRenderTarget(this.renderTarget), this.renderer.clear(), this.renderer.render(this.scene, this.camera), this.renderTarget.texture;
  }
  debugAsPNG() {
    const e2 = this.getSize(), t2 = this.getPixelData(), o2 = document.createElement("canvas");
    o2.width = e2.x, o2.height = e2.y;
    const r2 = o2.getContext("2d");
    if (!r2)
      return;
    const i2 = r2.getImageData(0, 0, o2.width, o2.height);
    i2.data.set(t2), r2.putImageData(i2, 0, 0);
    const a2 = window.open();
    a2 && a2.document.write(`<iframe src="${o2.toDataURL("image/png")}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`);
  }
  dispose() {
    this.renderTarget.texture.dispose(), this.renderTarget.dispose();
  }
}
const Y = "api.maptiler.com", j = { maptilerApiHost: Y, endpoint: `https://${Y}/weather/latest.json`, tileSourceUrlSchema: `https://${Y}/tiles/{tileset_id}/{zxy}.{format}` };
Object.freeze(j);
class H {
  constructor(e2, t2) {
    __publicField(this, "loader", new a.TextureLoader());
    __publicField(this, "lru", new g(32));
    __publicField(this, "apiKey", "");
    __publicField(this, "sessionId", "");
    this.url = e2, this.onTileLoad = t2;
  }
  setMaptilerParams(e2, t2) {
    this.apiKey = e2, this.sessionId = t2;
  }
  urlPatternToUrl(e2) {
    let t2;
    try {
      t2 = new URL(this.url.replace("{zxy}", e2));
    } catch (o2) {
      t2 = new URL(this.url.replace("{zxy}", e2), document.baseURI);
    }
    return t2.host === j.maptilerApiHost && (this.apiKey && !t2.searchParams.has("key") && t2.searchParams.append("key", this.apiKey), this.sessionId && !t2.searchParams.has("mtsid") && t2.searchParams.append("mtsid", this.sessionId)), t2.href;
  }
  getTile(e2, t2) {
    if (e2.split("/").map((e3) => parseInt(e3)).some((e3) => e3 < 0))
      return null;
    if (this.lru.containsKey(e2))
      return this.lru.get(e2);
    if (t2) {
      const t3 = this.createTile(e2);
      return this.lru.set(e2, t3), t3;
    }
    return null;
  }
  createTile(e2) {
    const t2 = this.urlPatternToUrl(e2), o2 = { ready: false, texture: null, zxy: e2 };
    return o2.texture = this.loader.load(t2, () => {
      o2.ready = true, null != this.onTileLoad && this.onTileLoad(o2, t2, null);
    }, void 0, (e3) => {
      null != this.onTileLoad && this.onTileLoad(o2, t2, e3);
    }), o2.texture.minFilter = a.LinearFilter, o2.texture.needsUpdate = true, o2;
  }
  disposeTile(e2) {
    e2.texture && e2.texture.dispose();
  }
  expireCache(e2) {
    for (; this.lru.canExpireCache(); ) {
      if (this.lru.peekLast().zxy in e2)
        break;
      this.disposeTile(this.lru.pop());
    }
  }
  dispose() {
    this.lru.forEach((e2) => {
      this.disposeTile(e2);
    }), this.lru.clear();
  }
}
class K extends S {
  constructor() {
    super();
    __publicField(this, "frames", []);
    __publicField(this, "time", 0);
    __publicField(this, "animationSpeed", 0);
    __publicField(this, "lastTickTime", 0);
  }
  addFrame(e2, t2) {
    const o2 = this.findSmallerFrameIndex(e2);
    if (o2 < 0)
      this.frames.unshift({ time: e2, data: t2 });
    else {
      if (this.frames[o2].time == e2)
        throw new Error("Frame with this time already exists");
      this.frames.splice(o2 + 1, 0, { time: e2, data: t2 });
    }
    this.clampAnimation();
  }
  removeFrame(e2) {
    const t2 = this.frames.filter((t3) => t3.time == e2);
    return this.frames = this.frames.filter((t3) => t3.time != e2), this.clampAnimation(), t2;
  }
  forEachFrame(e2) {
    this.frames.forEach((t2) => e2(t2));
  }
  getAnimationStart() {
    return this.frames.length ? this.frames[0].time : 1 / 0;
  }
  getAnimationStartDate() {
    return new Date(1e3 * this.getAnimationStart());
  }
  getAnimationEnd() {
    return this.frames.length ? this.frames[this.frames.length - 1].time : -1 / 0;
  }
  getAnimationEndDate() {
    return new Date(1e3 * this.getAnimationEnd());
  }
  getAnimationTime() {
    return this.time;
  }
  getAnimationTimeDate() {
    return new Date(1e3 * this.getAnimationTime());
  }
  setAnimationTime(e2) {
    this.time = e2, this.clampAnimation(), this.emit("animationTimeSet", { time: this.time });
  }
  clampAnimation() {
    this.time = Math.max(this.getAnimationStart(), Math.min(this.getAnimationEnd(), this.time));
  }
  animateByFactor(e2) {
    this.animate(e2);
  }
  animate(e2) {
    e2 > 0 && 0 === this.animationSpeed ? this.emit("playAnimation", { time: this.time }) : 0 === e2 && this.animationSpeed > 0 && this.emit("pauseAnimation", { time: this.time }), this.animationSpeed = e2, 0 != this.animationSpeed && (this.lastTickTime = performance.now());
  }
  getAnimationSpeed() {
    return this.animationSpeed;
  }
  isPlaying() {
    return this.animationSpeed > 0;
  }
  animationTick() {
    const e2 = performance.now();
    if (this.animationSpeed > 0 && this.lastTickTime) {
      const t2 = e2 - this.lastTickTime;
      this.time += this.animationSpeed * (t2 / 1e3);
      const o2 = this.getAnimationStart(), r2 = this.getAnimationEnd();
      this.time = o2 + (this.time - o2) % (r2 - o2), isNaN(this.time) && (this.time = o2), this.emit("tick", { time: this.time });
    }
    this.lastTickTime = e2;
  }
  findSmallerFrameIndex(e2) {
    for (let t2 = this.frames.length - 1; t2 >= 0; --t2)
      if (this.frames[t2].time <= e2)
        return t2;
    return -1;
  }
  getCurrentFrames() {
    if (0 == this.frames.length)
      return { frameA: null, frameB: null, mix: 0 };
    let e2 = this.findSmallerFrameIndex(this.time);
    e2 < 0 && (e2 = 0);
    const t2 = this.frames[e2], o2 = this.frames[Math.min(this.frames.length - 1, e2 + 1)], r2 = o2.time - t2.time;
    return { frameA: t2, frameB: o2, mix: 0 == r2 ? 0 : (this.time - t2.time) / r2 };
  }
  getNextFrame(e2, t2) {
    const o2 = this.frames.findIndex((t3) => t3 === e2);
    return o2 < 0 ? null : t2 < 0 ? o2 > 0 ? this.frames[o2 - 1] : null : o2 < this.frames.length - 1 ? this.frames[o2 + 1] : null;
  }
}
const X = { GFS_TEMPERATURE_2M: "temperature-2m:gfs", GFS_PRESSURE_MSL: "pressure-msl:gfs", GFS_PRECIPITATION_1H: "precipitation-1h:gfs", GFS_FROZEN_PRECIPITATION_PERCENT: "frozen_precipitation-1h:gfs", GFS_WIND_10M: "wind-10m:gfs", GFS_RADAR_COMPOSITE: "radar-composite:gfs", GFS_CLOUD_COVER_TOTAL: "cloud_cover-total:gfs" }, q = { latest: null };
class J {
  static async fetchLatest(e2, t2) {
    const o2 = `${j.endpoint}?key=${e2}&mtsid=${t2}`, r2 = await fetch(o2, { cache: "no-store" });
    q.latest = await r2.json();
  }
  static getDataForWeatherVariableID(e2) {
    if (!q.latest)
      return null;
    const t2 = q.latest.variables.filter((t3) => t3.metadata.weather_variable.variable_id === e2);
    return t2.length ? t2[0] : null;
  }
  static hasData() {
    return !!q.latest;
  }
  static getTemperatureData() {
    return J.getDataForWeatherVariableID(X.GFS_TEMPERATURE_2M);
  }
  static getPressureData() {
    return J.getDataForWeatherVariableID(X.GFS_PRESSURE_MSL);
  }
  static getPrecipitationData() {
    return J.getDataForWeatherVariableID(X.GFS_PRECIPITATION_1H);
  }
  static getCloudCoverData() {
    return J.getDataForWeatherVariableID(X.GFS_CLOUD_COVER_TOTAL);
  }
  static getFrozenPrecipitationData() {
    return J.getDataForWeatherVariableID(X.GFS_FROZEN_PRECIPITATION_PERCENT);
  }
  static getRadarData() {
    return J.getDataForWeatherVariableID(X.GFS_RADAR_COMPOSITE);
  }
  static getWindData() {
    return J.getDataForWeatherVariableID(X.GFS_WIND_10M);
  }
  static getSourcesAndTimestamps(e2, t2, o2) {
    return e2.keyframes.map((r2) => ({ source: `${j.tileSourceUrlSchema.replace("{tileset_id}", r2.id).replace("{format}", e2.tile_format)}?key=${t2}&mtsid=${o2}`, timestamp: +new Date(r2.timestamp) / 1e3 }));
  }
}
class Q extends K {
  constructor(e2, t2, o2 = null, r2 = null) {
    super();
    __publicField(this, "id");
    __publicField(this, "type", "custom");
    __publicField(this, "renderingMode", "3d");
    __publicField(this, "camera", new a.Camera());
    __publicField(this, "scene", new a.Scene());
    __publicField(this, "slippyTiles", []);
    __publicField(this, "map", null);
    __publicField(this, "renderer", null);
    __publicField(this, "material");
    __publicField(this, "geometry", new a.PlaneGeometry(1, 1));
    __publicField(this, "flusher");
    __publicField(this, "tilegrid");
    __publicField(this, "extent", null);
    __publicField(this, "repaintOnPausedAnimation", true);
    __publicField(this, "materialPool", new $());
    __publicField(this, "bluringNodePasses", []);
    __publicField(this, "tileThreeContainer", new a.Object3D());
    __publicField(this, "extentScale", 1);
    __publicField(this, "extentChangedThreshold", 0.75);
    __publicField(this, "lastExtent", [0, 0, 0, 0]);
    __publicField(this, "timeInterpolation", true);
    __publicField(this, "isReady", false);
    __publicField(this, "defaultTexture", new a.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1, a.RGBAFormat));
    __publicField(this, "onMoveEndListener");
    __publicField(this, "onResizeListener");
    __publicField(this, "onMoveListener");
    __publicField(this, "coloringFragments", null);
    __publicField(this, "multiChannelColoringFragment");
    __publicField(this, "loadLowerZoomLevels");
    __publicField(this, "getMapOrThrow", () => {
      if (null == this.map)
        throw new Error("Accessing map on detached layer");
      return this.map;
    });
    __publicField(this, "getRendererOrThrow", () => {
      if (null == this.renderer)
        throw new Error("Accessing renderer on detached layer");
      return this.renderer;
    });
    this.defaultTexture.needsUpdate = true, this.id = e2, t2 && this.init(t2, o2, r2);
  }
  init(e2, t2 = null, o2 = null) {
    this.loadLowerZoomLevels = e2.loadLowerZoomLevels ?? true, this.coloringFragments = t2, this.multiChannelColoringFragment = o2, this.repaintOnPausedAnimation = e2.repaintOnPausedAnimation ?? true, this.onMoveEndListener = this.onMoveEnd.bind(this), this.onResizeListener = this.onResize.bind(this), this.onMoveListener = this.onMove.bind(this), this.tilegrid = i({ minZoom: e2.minZoom ?? 0, maxZoom: e2.maxZoom ?? 4 }), e2.bounds && (this.extent = I(e2.bounds[0], e2.bounds[1]).concat(I(e2.bounds[2], e2.bounds[3])));
    let r2 = "";
    if (this.coloringFragments) {
      const e3 = this.coloringFragments.map((e4, t4) => e4.getBlendCode(`_cf_${t4}`));
      let t3 = "fragColor";
      for (let e4 = 0; e4 < this.coloringFragments.length; e4++)
        t3 = `_cf_${e4}(${t3},inter)`;
      t3 = `fragColor=${t3};`, r2 = "precision highp float;precision highp sampler2D;COLORING_FRAGMENT_DEFSout vec4 fragColor;uniform float opacity;uniform float zoom;uniform float time;uniform sampler2D tex0;uniform sampler2D tex1;uniform float tilePixelSize;uniform sampler2D texN0;uniform sampler2D texN1;uniform bool availableN;uniform sampler2D texE0;uniform sampler2D texE1;uniform bool availableE;uniform sampler2D texS0;uniform sampler2D texS1;uniform bool availableS;uniform sampler2D texW0;uniform sampler2D texW1;uniform bool availableW;uniform float maxSmoothingDistance;uniform float smoothingDistanceDecayFactor;uniform bool localSmoothing;uniform float zoomDelta;in vec2 tex0coord;in vec2 tex1coord;float PI=3.141592;const int halfNbSmoothingBins=int(ceil(float(NB_SMOOTHING_BINS))/2.);void textPositionToInternalTexPosition(vec2 uv,out vec2 newUv,out int texturePositionIndex){if(uv.x>=0.&&uv.x<=1.){if(uv.y>=0.&&uv.y<=1.){newUv=uv;texturePositionIndex=0;}else if(uv.y<0.&&availableS){newUv=vec2(uv.x,1.+uv.y);texturePositionIndex=5;}else if(uv.y>1.&&availableN){newUv=vec2(uv.x,1.-uv.y);texturePositionIndex=1;}else{newUv=uv;texturePositionIndex=0;}}else if(uv.x<0.){if(uv.y>=0.&&uv.y<=1.&&availableW){newUv=vec2(1.+uv.x,uv.y);texturePositionIndex=7;}else{newUv=uv;texturePositionIndex=0;}}else if(uv.x>1.){if(uv.y>=0.&&uv.y<=1.&&availableE){newUv=vec2(uv.x-1.,uv.y);texturePositionIndex=3;}else{newUv=uv;texturePositionIndex=0;}}}vec4 getTextureColorByIndex(int textureTimeIndex,int texturePositionIndex,vec2 uv){if(textureTimeIndex==0){if(texturePositionIndex==0){return texture(tex0,uv);}else if(texturePositionIndex==1){return texture(texN0,uv);}else if(texturePositionIndex==3){return texture(texE0,uv);}else if(texturePositionIndex==5){return texture(texS0,uv);}else if(texturePositionIndex==7){return texture(texW0,uv);}}else if(textureTimeIndex==1){if(texturePositionIndex==0){return texture(tex1,uv);}else if(texturePositionIndex==1){return texture(texN1,uv);}else if(texturePositionIndex==3){return texture(texE1,uv);}else if(texturePositionIndex==5){return texture(texS1,uv);}else if(texturePositionIndex==7){return texture(texW1,uv);}}else{return vec4(1.,0.,0.,1.);}}vec4 getColor(int textureTimeIndex,vec2 uv){int texturePositionIndex=0;vec2 localUV=vec2(0.,0.);textPositionToInternalTexPosition(uv,localUV,texturePositionIndex);return getTextureColorByIndex(textureTimeIndex,texturePositionIndex,localUV);}vec4 circularSampleSmoothing(int textureTimeIndex,vec2 uv,float resolution,float distance,out bool isTransparant){vec4 colorRGBA=getColor(textureTimeIndex,uv);int weightCenter=3;vec4 color=colorRGBA*float(weightCenter);isTransparant=colorRGBA.a<1.;float angularStep=2.*PI/float(halfNbSmoothingBins);for(int i=0;i<halfNbSmoothingBins;i++){float angle=angularStep*float(i);vec2 offset=vec2(cos(angle),sin(angle))*distance*0.5;vec2 pos=uv+offset/resolution;vec4 c=getColor(textureTimeIndex,pos);color+=c;isTransparant=isTransparant||c.a<1.;angle=angularStep/2.+angularStep*float(i);offset=vec2(cos(angle),sin(angle))*distance;pos=uv+offset/resolution;c=getColor(textureTimeIndex,pos);color+=c;isTransparant=isTransparant||c.a<1.;}return color/float(2*halfNbSmoothingBins+weightCenter);}void main(){float scaledSamplingDistance=(maxSmoothingDistance*smoothingDistanceDecayFactor/(smoothingDistanceDecayFactor+zoom))*max(1.,2.-zoomDelta);bool isTransparant0=false;bool isTransparant1=false;vec4 tex0Color;vec4 tex1Color;if(localSmoothing&&halfNbSmoothingBins!=0){tex0Color=circularSampleSmoothing(0,tex0coord,tilePixelSize,scaledSamplingDistance,isTransparant0);tex1Color=circularSampleSmoothing(1,tex1coord,tilePixelSize,scaledSamplingDistance,isTransparant1);}else{tex0Color=texture(tex0,tex0coord);tex1Color=texture(tex1,tex1coord);}vec4 inter=mix(tex0Color,tex1Color,time);if(inter.a<1.0&&!RENDER_TRANSPARENT)discard;COLORING_FRAGMENT_CALLSfragColor.a*=opacity;}".replace("COLORING_FRAGMENT_DEFS", e3.join("\n")).replace("COLORING_FRAGMENT_CALLS", t3);
    } else
      o2 && (r2 = o2.getCode());
    const l2 = (e2.nbSmoothingBins ?? 16).toFixed(0);
    this.timeInterpolation = e2.timeInterpolation ?? true, this.material = new a.RawShaderMaterial({ glslVersion: a.GLSL3, uniforms: { opacity: { value: 1 }, time: { value: 0 }, zoom: { value: 0 }, tex0xy: { value: [0, 0] }, tex1xy: { value: [0, 0] }, tex0size: { value: 1 }, tex1size: { value: 1 }, tilePixelSize: { value: 1 }, categorySmoothTransition: { value: e2.categorySmoothTransition ?? false }, timeInterpolation: { value: this.timeInterpolation }, tex0: { value: null }, tex1: { value: null }, zoomDelta: { value: 0 }, localSmoothing: { value: e2.localSmoothing ?? false }, maxSmoothingDistance: { value: e2.maxSmoothingDistance ?? 12 }, smoothingDistanceDecayFactor: { value: e2.smoothingDistanceDecayFactor ?? 10 }, texN0: { value: this.defaultTexture }, texN1: { value: this.defaultTexture }, availableN: { value: false }, texE0: { value: this.defaultTexture }, texE1: { value: this.defaultTexture }, availableE: { value: false }, texS0: { value: this.defaultTexture }, texS1: { value: this.defaultTexture }, availableS: { value: false }, texW0: { value: this.defaultTexture }, texW1: { value: this.defaultTexture }, availableW: { value: false } }, vertexShader: "precision highp float;precision highp sampler2D;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;in vec3 position;in vec2 uv;uniform vec2 tex0xy;uniform vec2 tex1xy;uniform float tex0size;uniform float tex1size;out vec2 tex0coord;out vec2 tex1coord;void main(){tex0coord=tex0xy+uv*tex0size;tex1coord=tex1xy+uv*tex1size;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", fragmentShader: r2, depthTest: false, depthWrite: false, transparent: true, defines: { RENDER_TRANSPARENT: e2.renderTransparentArea ? "true" : "false", NB_SMOOTHING_BINS: l2 } }), this.flusher = new a.Mesh(new a.PlaneGeometry(1, 1), new a.MeshBasicMaterial({ colorWrite: false, depthWrite: false })), this.flusher.frustumCulled = false, this.scene.add(this.flusher), this.scene.add(this.tileThreeContainer), this.updateSlippyTileGrid(8, 8), this.on("playAnimation", () => {
      this.forceRepaint();
    }), this.on("animationTimeSet", () => {
      this.forceRepaint();
    }), this.isReady = true;
  }
  updateSlippyTileGrid(e2, t2) {
    this.tileThreeContainer.clear(), this.slippyTiles.length = 0;
    for (let o2 = 0; o2 < e2; o2++) {
      this.slippyTiles[o2] = [];
      for (let e3 = 0; e3 < t2; e3++) {
        const t3 = new a.Mesh(this.geometry);
        t3.frustumCulled = false, this.slippyTiles[o2][e3] = t3, this.tileThreeContainer.add(t3);
      }
    }
  }
  validateSource(e2) {
    let t2;
    try {
      t2 = new URL(e2);
    } catch (o2) {
      t2 = new URL(e2, document.baseURI);
    }
    if (t2.host !== j.maptilerApiHost)
      throw new Error("\n\nMapTiler Weather library can only source data from MapTiler Cloud.\nPlease use our MapTiler Plus library for self hosting: https://www.maptiler.com/weather/\nor host your data with our generous free plan at MapTiler Cloud: https://cloud.maptiler.com\n");
  }
  addSource(e2, t2, o2 = null) {
    this.validateSource(t2);
    const r2 = new H(t2, (e3, t3, r3) => {
      o2 && o2(e3, t3, r3), this.forceRepaint();
    });
    if (this.map) {
      const e3 = this.map.getSdkConfig().apiKey, t3 = this.map.getMaptilerSessionId();
      r2.setMaptilerParams(e3, t3);
    }
    super.addFrame(e2, r2);
  }
  removeSource(e2) {
    super.removeFrame(e2).forEach((e3) => {
      e3.data.dispose();
    }), this.forceRepaint();
  }
  getVisibleExtent(o2) {
    if (!this.isReady)
      return null;
    const r2 = this.getMapOrThrow().getBounds();
    let i2 = I(r2.getWest(), r2.getSouth()).concat(I(r2.getEast(), r2.getNorth()));
    return this.extent && (i2 = e(this.extent, i2)), o2 && t(i2, o2), i2;
  }
  getWantedTiles(e2) {
    if (!this.isReady)
      return {};
    e2 = Math.ceil(e2);
    const t2 = {}, o2 = this.getVisibleExtent();
    if (!o2)
      throw new Error("The extent is null");
    const r2 = this.tilegrid.getMinZoom(), i2 = this.tilegrid.getMaxZoom(), a2 = Math.min(i2, Math.max(r2, e2 - 1)), l2 = Math.min(i2, Math.max(r2, e2));
    for (let e3 = a2; e3 <= l2; ++e3) {
      const r3 = Math.pow(2, e3), i3 = this.tilegrid.getTileRangeForExtentAndZ(o2, e3);
      for (let o3 = i3.minX; o3 <= i3.maxX; ++o3)
        for (let a3 = i3.minY; a3 <= i3.maxY; ++a3)
          a3 < 0 || a3 >= r3 || (t2[`${e3}/${o3}/${a3}`] = true);
    }
    return t2;
  }
  setOpacity(e2) {
    this.isReady && (this.material.uniforms.opacity.value = e2, this.forceRepaint());
  }
  onAdd(e2, t2) {
    this.map = e2, this.map.on("moveend", this.onMoveEndListener), this.map.on("resize", this.onResizeListener), this.map.on("move", this.onMoveListener);
    const o2 = this.map.getSdkConfig().apiKey, r2 = this.map.getMaptilerSessionId();
    this.forEachFrame((e3) => {
      e3.data.setMaptilerParams(o2, r2);
    }), J.hasData() || J.fetchLatest(o2, r2), this.renderer = new a.WebGLRenderer({ canvas: e2.getCanvas(), context: t2, depth: false, stencil: false, antialias: true }), this.renderer.autoClear = false, this.renderer.sortObjects = false, this.renderer.debug.checkShaderErrors = true, this.renderer.compile(this.scene, this.camera), this.onResize(), this.refresh();
    const i2 = this.getVisibleExtent(this.extentScale);
    if (!i2)
      throw new Error("The last extent is null");
    this.lastExtent = i2, this.forceRepaint();
  }
  onMove() {
    if (!this.isReady)
      return;
    const e2 = this.getVisibleExtent(this.extentScale);
    if (!e2)
      throw new Error("New extent is null");
    const t2 = [Math.min(e2[0], this.lastExtent[0]), Math.min(e2[1], this.lastExtent[1]), Math.max(e2[2], this.lastExtent[2]), Math.max(e2[3], this.lastExtent[3])], i2 = o(t2);
    r(this.lastExtent, e2) / i2 <= this.extentChangedThreshold && (this.lastExtent = e2, this.emit("extentChanged"));
  }
  refresh() {
  }
  onRemove(e2, t2) {
    this.isReady && (null != this.map && (this.map.off("moveend", this.onMoveEndListener), this.map.off("resize", this.onResizeListener), this.map.off("move", this.onMoveListener), this.map = null), null != this.renderer && (this.renderer.dispose(), this.renderer = null), this.forEachFrame((e3) => {
      e3.data.dispose();
    }), this.disposeObjects());
  }
  disposeObjects() {
    this.isReady && (this.geometry.dispose(), this.material.dispose(), this.flusher.geometry.dispose(), this.flusher.material.dispose(), this.bluringNodePasses.forEach((e2) => e2.dispose()));
  }
  onResize() {
    if (!this.isReady)
      return;
    const e2 = this.getMapOrThrow().getCanvas(), t2 = e2.width, o2 = e2.height;
    this.getRendererOrThrow().setViewport(0, 0, t2, o2), this.updateSlippyTileGrid(Math.ceil(t2 / 512) + 2, Math.ceil(o2 / 512) + 2);
  }
  onMoveEnd() {
  }
  getTilePlacement(e2, t2, o2, r2, i2, a2) {
    if (!this.isReady)
      return null;
    const l2 = `${o2}/${r2}/${i2}`, s2 = e2.getTile(l2, t2);
    if (!s2 || !s2.ready)
      return this.loadLowerZoomLevels && o2 > this.tilegrid.getMinZoom() ? this.getTilePlacement(e2, t2, o2 - 1, Math.floor(r2 / 2), Math.floor(i2 / 2), a2 || { z: o2, x: r2, y: i2 }) : null;
    const n2 = { tile: s2, xy: [0, 0], size: 1 };
    if (void 0 !== a2) {
      const e3 = Math.pow(2, a2.z - o2);
      n2.size /= e3, n2.xy[0] = a2.x % e3 / e3, n2.xy[1] = (Math.pow(2, a2.z) - a2.y - 1) % e3 / e3;
    }
    return n2;
  }
  updateSlippyTiles() {
    var _a;
    if (!this.isReady)
      return;
    const { frameA: e2, frameB: t2, mix: o2 } = this.getCurrentFrames();
    if (!e2 || !t2)
      return void (this.scene.visible = false);
    this.scene.visible = true;
    const r2 = e2.data, i2 = t2.data, a2 = this.getMapOrThrow().getZoom(), l2 = this.getWantedTiles(a2), s2 = {}, n2 = this.tilegrid.getMinZoom(), c2 = this.tilegrid.getMaxZoom(), u2 = Math.min(c2, Math.max(n2, Math.floor(a2))), h2 = Math.pow(2, u2), v2 = 1 / h2, m2 = this.getMapOrThrow().getCenter(), d2 = this.tilegrid.getTileCoordForCoordAndZ(I(m2.lng, m2.lat), u2), p2 = a2 - u2, x2 = this.slippyTiles.length;
    this.materialPool.init();
    const f2 = new globalThis.Map();
    for (let t3 = 0; t3 < x2; t3++) {
      const n3 = this.slippyTiles[0].length;
      for (let c3 = 0; c3 < n3; c3++) {
        const m3 = this.slippyTiles[t3][c3], g2 = d2[1] + t3 - Math.floor(x2 / 2), S2 = d2[2] + c3 - Math.floor(n3 / 2);
        if (S2 < 0 || S2 >= h2 || !l2[`${u2}/${g2}/${S2}`]) {
          m3.visible = false;
          continue;
        }
        m3.visible = true;
        const y2 = (g2 % h2 + h2) % h2;
        s2[`${u2}/${y2}/${S2}`] = true;
        const T2 = h2 - S2 - 1;
        m3.scale.x = v2, m3.scale.y = v2, m3.position.x = v2 * (g2 + 0.5), m3.position.y = v2 * (T2 + 0.5) - 1;
        let w2 = this.getTilePlacement(r2, true, u2, y2, S2), P2 = this.getTilePlacement(i2, true, u2, y2, S2);
        if (w2 && !P2 && (P2 = w2), !w2 && P2 && (w2 = P2), !w2 || !P2) {
          let t4 = e2;
          for (; !w2 && (t4 = this.getNextFrame(t4, -1), t4); )
            w2 = P2 = this.getTilePlacement(t4.data, false, u2, y2, S2);
          if (!w2 || !P2) {
            m3.visible = false;
            continue;
          }
        }
        const R2 = this.materialPool.isEmpty() ? this.materialPool.add(this.material.clone()) : this.materialPool.pop();
        R2.uniforms.localSmoothing.value = this.material.uniforms.localSmoothing.value, R2.uniforms.maxSmoothingDistance.value = this.material.uniforms.maxSmoothingDistance.value, R2.uniforms.smoothingDistanceDecayFactor.value = this.material.uniforms.smoothingDistanceDecayFactor.value, R2.uniforms.timeInterpolation.value = this.material.uniforms.timeInterpolation.value, R2.uniforms.categorySmoothTransition.value = this.material.uniforms.categorySmoothTransition.value, R2.uniforms.opacity.value = this.material.uniforms.opacity.value, R2.uniforms.tex0.value = w2.tile.texture, R2.uniforms.tex0xy.value = w2.xy, R2.uniforms.tex0size.value = w2.size, R2.uniforms.tex1.value = P2.tile.texture, R2.uniforms.tex1xy.value = P2.xy, R2.uniforms.tex1size.value = P2.size, R2.uniforms.tilePixelSize.value = (_a = w2.tile.texture) == null ? void 0 : _a.image.width, R2.uniforms.time.value = o2, R2.uniforms.zoomDelta.value = p2, m3.material = R2, R2.uniforms.zoom.value = a2, f2.set(`${t3} ${c3}`, { material: R2, tileA: w2, tileB: P2, x: t3, y: c3, z: u2 });
      }
    }
    this.material.uniforms.localSmoothing.value && f2.forEach((e3) => {
      const t3 = e3.x, o3 = e3.y, r3 = e3.material, i3 = `${t3} ${o3 - 1}`, a3 = `${t3 + 1} ${o3}`, l3 = `${t3} ${o3 + 1}`, s3 = `${t3 - 1} ${o3}`;
      let n3 = f2.get(i3);
      n3 && n3.tileA.tile.ready && n3.tileB.tile.ready ? (r3.uniforms.texN0.value = n3.tileA.tile.texture, r3.uniforms.texN1.value = n3.tileB.tile.texture, r3.uniforms.availableN.value = true) : (r3.uniforms.texN0.value = null, r3.uniforms.texN1.value = null, r3.uniforms.availableN.value = false), n3 = f2.get(a3), n3 && n3.tileA.tile.ready && n3.tileB.tile.ready ? (r3.uniforms.texE0.value = n3.tileA.tile.texture, r3.uniforms.texE1.value = n3.tileB.tile.texture, r3.uniforms.availableE.value = true) : (r3.uniforms.texE0.value = null, r3.uniforms.texE1.value = null, r3.uniforms.availableE.value = false), n3 = f2.get(l3), n3 && n3.tileA.tile.ready && n3.tileB.tile.ready ? (r3.uniforms.texS0.value = n3.tileA.tile.texture, r3.uniforms.texS1.value = n3.tileB.tile.texture, r3.uniforms.availableS.value = true) : (r3.uniforms.texS0.value = null, r3.uniforms.texS1.value = null, r3.uniforms.availableS.value = false), n3 = f2.get(s3), n3 && n3.tileA.tile.ready && n3.tileB.tile.ready ? (r3.uniforms.texW0.value = n3.tileA.tile.texture, r3.uniforms.texW1.value = n3.tileB.tile.texture, r3.uniforms.availableW.value = true) : (r3.uniforms.texW0.value = null, r3.uniforms.texW1.value = null, r3.uniforms.availableW.value = false);
    }), setTimeout(() => {
      r2.expireCache(s2), i2.expireCache(s2);
      const e3 = this.getNextFrame(t2, 1);
      e3 && e3.data && Object.keys(s2).forEach((t3) => {
        e3.data.getTile(t3, true);
      });
    }, 0);
  }
  prerender(e2, t2) {
    if (!this.isReady)
      return;
    this.animationTick();
    const o2 = new a.Matrix4().fromArray(t2), r2 = new a.Matrix4().makeTranslation(0, 0, 0).scale(new a.Vector3(1, -1, 1));
    this.camera.projectionMatrix = o2.multiply(r2), this.updateSlippyTiles(), this.prerenderInternal();
  }
  prerenderInternal() {
  }
  render(e2, t2) {
    if (!this.isReady)
      return;
    const o2 = this.getRendererOrThrow();
    o2.state.reset(), this.renderInternal(), o2.render(this.scene, this.camera), (this.getAnimationSpeed() > 0 || this.repaintOnPausedAnimation) && this.forceRepaint();
  }
  renderInternal() {
  }
  pickFrame(e2, t2, o2) {
    var _a;
    if (!this.isReady)
      return null;
    const r2 = E(e2, t2);
    if (!this.map)
      return null;
    const i2 = Math.min(~~((_a = this.map) == null ? void 0 : _a.getZoom()), this.tilegrid.getMaxZoom()), a2 = Math.pow(2, i2), l2 = (0.5 + r2[0]) % 1 * a2, s2 = (1 - (r2[1] + 0.5)) * a2, n2 = this.getTilePlacement(o2, true, i2, Math.floor(l2), Math.floor(s2));
    if (null == n2 || null == n2.tile.texture)
      return null;
    const c2 = z(n2.tile.texture.image, n2.xy[0] + n2.size * (l2 % 1), 1 - n2.xy[1] - n2.size + n2.size * (s2 % 1));
    return this.coloringFragments ? this.coloringFragments.map((e3) => e3.decodeChannel(c2)).flat() : this.multiChannelColoringFragment ? this.multiChannelColoringFragment.decodeChannel(c2) : null;
  }
  pick(e2, t2) {
    if (!this.isReady)
      return null;
    const { frameA: o2, frameB: r2, mix: i2 } = this.getCurrentFrames();
    if (!o2 || !r2)
      return null;
    const a2 = this.pickFrame(e2, t2, o2.data), l2 = this.pickFrame(e2, t2, r2.data);
    return a2 ? l2 ? this.coloringFragments ? a2.map((e3, t3) => {
      const o3 = l2[t3];
      return Array.isArray(e3) && Array.isArray(o3) ? e3.map((e4, t4) => {
        const r3 = o3[t4];
        return e4 * (1 - i2) + r3 * i2;
      }) : e3 * (1 - i2) + o3 * i2;
    }).flat() : this.multiChannelColoringFragment ? this.timeInterpolation ? [a2[0] * (1 - i2) + l2[0] * i2, i2 < 0.5 ? a2[1] : l2[1]] : [i2 < 0.5 ? a2[0] : l2[0], i2 < 0.5 ? a2[1] : l2[1]] : null : a2 : l2;
  }
  forceRepaint() {
    try {
      this.getMapOrThrow().triggerRepaint();
    } catch (e2) {
    }
  }
  computeCurrentMixedImage({ zxy: e2 = "0/0/0", blurKernel: t2 = 0, outputSize: o2 = -1, channel: r2 = "r" }) {
    var _a, _b, _c, _d;
    if (!this.isReady)
      return null;
    const i2 = this.getCurrentFrames(), l2 = i2.mix, s2 = (_b = (_a = i2.frameA) == null ? void 0 : _a.data.getTile(e2, false)) == null ? void 0 : _b.texture, n2 = (_d = (_c = i2.frameB) == null ? void 0 : _c.data.getTile(e2, false)) == null ? void 0 : _d.texture, c2 = o2 < 0 ? parseInt(s2 == null ? void 0 : s2.image.width) : o2, u2 = o2 < 0 ? parseInt(s2 == null ? void 0 : s2.image.height) : o2;
    this.bluringNodePasses.length || this.bluringNodePasses.push(new Z(c2, u2), new Z(c2, u2), new Z(c2, u2));
    const h2 = this.bluringNodePasses[0], v2 = this.bluringNodePasses[1], m2 = this.bluringNodePasses[2];
    if (h2.setSize(c2, u2), v2.setSize(c2, u2), v2.setSize(c2, u2), h2.setFragmentShader("precision highp float;precision highp int;precision highp sampler2D;uniform sampler2D imageA;uniform sampler2D imageB;uniform float mixValue;in vec2 vUv;out vec4 fragColor;void main(){fragColor=mix(texture(imageA,vUv),texture(imageB,vUv),mixValue);}"), h2.setDefine("CHANNEL", r2), h2.setUniform("imageA", s2), h2.setUniform("imageB", n2), h2.setUniform("mixValue", l2), h2.process(), 0 === t2) {
      const e3 = h2.getPixelData();
      return { data: e3, channels: e3.length / (c2 * u2), width: c2, height: u2 };
    }
    if (![5, 9, 13, 19].includes(t2))
      throw new Error(`The kernel bluring kernel size ${t2} is not available.`);
    v2.setUniform("direction", new a.Vector2(1, 0)), v2.setUniform("kernelSize", t2), v2.setUniform("imgToBlur", h2.getOutputTexture()), v2.setFragmentShader(k), v2.process(), m2.setUniform("direction", new a.Vector2(0, 1)), m2.setUniform("kernelSize", t2), m2.setUniform("imgToBlur", v2.getOutputTexture()), m2.setFragmentShader(k), m2.process();
    const d2 = m2.getPixelData();
    return this.bluringNodePasses.forEach((e3) => {
      e3.dispose();
    }), { data: d2, channels: d2.length / (c2 * u2), width: c2, height: u2 };
  }
  setTimeInterpolation(e2) {
    this.isReady && (this.material.uniforms.timeInterpolation.value = e2);
  }
  setCategorySmoothTransition(e2) {
    this.isReady && (this.material.uniforms.categorySmoothTransition.value = e2, this.forceRepaint());
  }
  setLocalSmoothing(e2) {
    this.material.uniforms.localSmoothing.value = e2, this.forceRepaint();
  }
  setMaxSmoothingDistance(e2) {
    this.material.uniforms.maxSmoothingDistance.value = e2, this.forceRepaint();
  }
  setSmoothingDistanceDecayFactor(e2) {
    this.material.uniforms.smoothingDistanceDecayFactor.value = e2, this.forceRepaint();
  }
  getRepaintOnPausedAnimation() {
    return this.repaintOnPausedAnimation;
  }
  setRepaintOnPausedAnimation(e2) {
    this.repaintOnPausedAnimation = e2, this.forceRepaint();
  }
}
class ee extends Q {
  constructor(e2, t2, o2, r2) {
    super(e2, null, null);
    __publicField(this, "rttScene", new a.Scene());
    __publicField(this, "rttCamera");
    __publicField(this, "rttMaterial");
    __publicField(this, "rttMesh");
    __publicField(this, "particleTexturePrev");
    __publicField(this, "particleTexture0");
    __publicField(this, "particleTexture1");
    __publicField(this, "particleMaterial");
    __publicField(this, "particles");
    __publicField(this, "particleBackground");
    __publicField(this, "accumulator");
    __publicField(this, "accumulatorDrawMesh");
    __publicField(this, "flipFlop", false);
    __publicField(this, "numParticles");
    __publicField(this, "particleDensity");
    __publicField(this, "refreshInterval");
    __publicField(this, "fadeFactor");
    __publicField(this, "particleColor");
    __publicField(this, "particleFastColor");
    __publicField(this, "particleFastSpeed");
    __publicField(this, "particleSize");
    __publicField(this, "drawAsLines");
    __publicField(this, "particleSpeed");
    __publicField(this, "pixelRatio");
    __publicField(this, "prevRenderTime", 0);
    __publicField(this, "lastRenderTime", 0);
    __publicField(this, "forceRender", true);
    __publicField(this, "rttTimestep", 200);
    t2 && o2 && this.initParticle(t2, o2, r2);
  }
  initParticle(e2, t2, o2) {
    if (this.init(e2, o2, null), this.extentScale = 1.2, this.numParticles = 128, null != t2.maxAmount) {
      if (!(t2.maxAmount >= 4 && t2.maxAmount && 0 == (t2.maxAmount & t2.maxAmount - 1)))
        throw new Error("The number of particles needs to be power of two and at least 4");
      this.numParticles = t2.maxAmount;
    }
    const r2 = window.devicePixelRatio;
    this.particleDensity = t2.density ?? 2, this.particleDensity /= r2 * r2, this.refreshInterval = t2.refreshInterval ?? 800, this.fadeFactor = t2.fadeFactor ?? 0.1, this.particleColor = P(t2.color ?? [255, 255, 255, 192]), this.particleFastColor = t2.fastColor ? P(t2.fastColor) : this.particleColor, this.particleFastSpeed = (t2.fastSpeed ?? 2) * r2, this.particleSize = t2.size ?? 1.5, this.drawAsLines = t2.drawAsLines ?? false, this.particleSpeed = (t2.speed ?? 1e-3) / 1e3, this.pixelRatio = t2.pixelRatio ?? (r2 > 1 ? 1 : 2), this.particleTexturePrev = this.generateRandomizeParticleTexture(this.numParticles, this.numParticles), this.particleTexture0 = new a.WebGLRenderTarget(this.numParticles, this.numParticles, { stencilBuffer: false, depthBuffer: false }), this.particleTexture0.texture = this.particleTexturePrev.clone(), this.particleTexture1 = this.particleTexture0.clone(), this.rttMaterial = new a.RawShaderMaterial({ glslVersion: a.GLSL3, uniforms: { rttXY: { value: [0, 0] }, rttScale: { value: 1 }, rttTexture: { value: this.particleTexture0.texture }, tileScale: { value: 0 }, useAlphaAsMask: { value: t2.useAlphaAsMask ?? false }, tilePosition: { value: [0, 0] }, time: { value: 0 }, timestep: { value: 0 }, tex0xy: { value: [0, 0] }, tex1xy: { value: [0, 0] }, tex0size: { value: 1 }, tex1size: { value: 1 }, tex0: { value: null }, tex1: { value: null } }, vertexShader: "precision highp float;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;in vec3 position;in vec2 uv;out vec2 rttCoord;void main(){rttCoord=uv;gl_Position=projectionMatrix*vec4(position,1.);}", fragmentShader: "precision highp float;precision highp sampler2D;\n#define M_PI 3.14159265358\nuniform float tileScale;uniform vec2 tilePosition;uniform vec2 tex0xy;uniform vec2 tex1xy;uniform float tex0size;uniform float tex1size;uniform bool useAlphaAsMask;uniform sampler2D rttTexture;uniform vec2 rttXY;uniform float rttScale;uniform float time;uniform sampler2D tex0;uniform sampler2D tex1;uniform float timestep;in vec2 rttCoord;out vec4 fragColor;void main(){vec4 color=texture(rttTexture,rttCoord);vec2 pos=color.ba+color.rg/255.0;vec2 posInTile=(rttXY+rttScale*pos)/tileScale-tilePosition;if(posInTile.x>=0.&&posInTile.x<=1.&&posInTile.y>=0.&&posInTile.y<=1.){posInTile.y=1.0-posInTile.y;vec2 tex0coord=tex0xy+posInTile*tex0size;vec2 tex1coord=tex1xy+posInTile*tex1size;vec4 tex0Color=texture(tex0,tex0coord);vec4 tex1Color=texture(tex1,tex1coord);if(useAlphaAsMask&&(tex0Color.a<1.||tex1Color.a<1.)){fragColor=color;return;}vec2 uv;if(D_WAVES){vec2 value0=tex0Color.D_CHANNELS;vec2 value1=tex1Color.D_CHANNELS;float dir0=2.0*M_PI*(-value0.x-0.25);float dir1=2.0*M_PI*(-value1.x-0.25);float speed=sqrt(1.0/mix(value0.y,value1.y,time));uv=vec2(mix(cos(dir0),cos(dir1),time),mix(sin(dir0),sin(dir1),time))*(D_MIN+(D_MAX-D_MIN)*speed);}else{vec4 lookup=mix(tex0Color,tex1Color,time);vec2 value=lookup.D_CHANNELS;uv=D_MIN+(D_MAX-D_MIN)*value;}vec2 offset=vec2(uv.x,-uv.y)*timestep;pos=pos+offset;fragColor=vec4(fract(pos*255.0),floor(pos*255.0)/255.0);}else{fragColor=color;}}", defines: { D_MIN: (t2.decodeMin ?? 0).toFixed(2), D_MAX: (t2.decodeMax ?? 1).toFixed(2), D_CHANNELS: t2.decodeChannels ?? "rg", D_WAVES: t2.decodeAsWaves ? "true" : "false" }, depthTest: false, depthWrite: false }), this.rttCamera = new a.OrthographicCamera(-this.numParticles / 2, this.numParticles / 2, this.numParticles / 2, -this.numParticles / 2, -100, 100), this.rttMesh = new a.Mesh(new a.PlaneGeometry(this.numParticles, this.numParticles), this.rttMaterial), this.rttScene.add(this.rttMesh), this.accumulator = new a.WebGLRenderTarget(16, 16, { minFilter: a.LinearFilter, magFilter: a.LinearFilter, stencilBuffer: false, format: a.RGBAFormat, depthBuffer: false }), this.particleBackground = new a.Mesh(new a.PlaneGeometry(2, 2), new a.RawShaderMaterial({ glslVersion: a.GLSL3, transparent: true, blending: a.CustomBlending, blendEquationAlpha: a.ReverseSubtractEquation, vertexShader: "precision highp float;in vec3 position;void main(){gl_Position=vec4(position,1.);}", fragmentShader: `precision highp float;out vec4 fragColor;void main(){fragColor=vec4(.0,.0,.0,${this.fadeFactor.toFixed(2)});}` }));
    const i2 = r2 * this.pixelRatio * this.particleSize, l2 = r2 * this.particleSize;
    if (this.particleMaterial = new a.RawShaderMaterial({ glslVersion: a.GLSL3, uniforms: { rttSize: { value: this.numParticles }, rttTexture: { value: this.particleTexture1.texture }, rttTexturePrev: { value: this.particleTexturePrev }, screenSize: { value: 1 }, extrapolationFactor: { value: 0 }, renderStepSize: { value: 0 } }, vertexShader: this.drawAsLines ? "#version 300 es\nprecision highp float;uniform sampler2D rttTexture;uniform sampler2D rttTexturePrev;uniform float rttSize;uniform float screenSize;uniform float extrapolationFactor;uniform float renderStepSize;out float speed;vec4 advance(float position_){if(position_>(DENSITY/1000.0)*screenSize*screenSize){speed=0.0;return vec4(0.0);}float x=fract(position_/rttSize);float y=floor(position_/rttSize)/rttSize;vec4 color=texture(rttTexture,vec2(x,y));vec2 pos=color.ba+color.rg/255.0;vec4 colorPrev=texture(rttTexturePrev,vec2(x,y));vec2 posPrev=colorPrev.ba+colorPrev.rg/255.0;vec2 diff=pos-posPrev;pos+=diff*extrapolationFactor;speed=renderStepSize*step(0.0001,dot(posPrev,posPrev))*length(diff*screenSize);return vec4(pos,diff);}void main(){float position_=floor(position/2.0);float vertex=2.0*fract(position/2.0);vec4 posdiff=advance(position_);vec2 pos=posdiff.xy;vec2 dir=normalize(posdiff.zw);vec2 uv=(float(SIZE)/screenSize)*vec2(vertex,-vertex)*dir.yx;pos=2.0*(pos-uv)-1.0;gl_Position=vec4(pos.x,-pos.y,0.,1.);}" : "precision highp float;precision highp sampler2D;in float position;uniform sampler2D rttTexture;uniform sampler2D rttTexturePrev;uniform float rttSize;uniform float screenSize;uniform float extrapolationFactor;uniform float renderStepSize;out float speed;float factor=1.;vec4 advance(float position_){if(position_>(DENSITY/1000.0)*screenSize*screenSize){speed=0.0;return vec4(0.0);}float x=fract(position_/rttSize);float y=floor(position_/rttSize)/rttSize;vec4 color=texture(rttTexture,vec2(x,y));vec2 pos=color.ba+color.rg/255.0;vec4 colorPrev=texture(rttTexturePrev,vec2(x,y));vec2 posPrev=colorPrev.ba+colorPrev.rg/255.0;vec2 diff=pos-posPrev;pos+=diff*extrapolationFactor;speed=renderStepSize*step(0.0001,dot(posPrev,posPrev))*length(diff*screenSize);return vec4(pos,diff);}void main(){vec4 posdiff=advance(position);gl_PointSize=SIZE;gl_Position=vec4(2.0*posdiff.x-1.0,-(2.0*posdiff.y-1.0),0.,1.);}", fragmentShader: "precision highp float;precision highp sampler2D;out vec4 fragColor;in float speed;void main(){vec2 uv=vec2(gl_PointCoord.x-0.5,1.0-gl_PointCoord.y-0.5);float dFromCenter=sqrt(uv.x*uv.x+uv.y*uv.y);if(dFromCenter>0.5){discard;return;}if(speed==0.){discard;return;}float colorFactor=min(1.0,speed/COLOR_SPEED);fragColor=mix(COLOR_A,COLOR_B,colorFactor);float opacityFactor=smoothstep(0.05,0.1,speed);fragColor.a*=opacityFactor;}", defines: { COLOR_A: this.particleColor, COLOR_B: this.particleFastColor, COLOR_SPEED: this.particleFastSpeed.toFixed(2), DENSITY: this.particleDensity.toFixed(2), SIZE: (this.drawAsLines ? l2 : i2).toFixed(1) }, transparent: true, depthTest: false, depthWrite: false, linewidth: this.pixelRatio }), this.drawAsLines) {
      const e3 = new Float32Array(Array(2 * this.numParticles * this.numParticles).keys()), t3 = new a.BufferGeometry();
      t3.setAttribute("position", new a.Float32BufferAttribute(e3, 1)), this.particles = new a.LineSegments(t3, this.particleMaterial);
    } else {
      const e3 = new Float32Array(Array(this.numParticles * this.numParticles).keys()), t3 = new a.BufferGeometry();
      t3.setAttribute("position", new a.Float32BufferAttribute(e3, 1)), this.particles = new a.Points(t3, this.particleMaterial);
    }
    this.particles.frustumCulled = false, this.accumulatorDrawMesh = new a.Mesh(new a.PlaneGeometry(1, 1), new a.RawShaderMaterial({ glslVersion: a.GLSL3, premultipliedAlpha: true, transparent: true, depthTest: false, depthWrite: false, uniforms: { opacity: { value: 1 }, tex0: { value: this.accumulator.texture } }, vertexShader: "precision highp float;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;in vec3 position;in vec2 uv;out vec2 coord;void main(){coord=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", fragmentShader: "precision highp float;precision highp sampler2D;uniform float opacity;uniform sampler2D tex0;in vec2 coord;out vec4 fragColor;void main(){vec4 c=texture(tex0,coord);if(c.a<1.0/16.0){discard;}if(opacity<0.0001){discard;}fragColor=c;fragColor.a*=opacity;}" })), this.scene.add(this.accumulatorDrawMesh), setInterval(() => {
      this.renderer && this.randomizeParticles(false);
    }, this.refreshInterval), this.on("extentChanged", () => {
      this.refresh();
    });
  }
  onAdd(e2, t2) {
    super.onAdd(e2, t2);
  }
  generateRandomizeParticleTexture(e2, t2) {
    const o2 = new Uint8Array(4 * e2 * t2);
    for (let e3 = 0; e3 < o2.length; e3++)
      o2[e3] = Math.floor(256 * Math.random());
    return new a.DataTexture(o2, e2, t2);
  }
  randomizeParticles(e2) {
    if (!this.renderer)
      return;
    let t2 = this.numParticles, o2 = this.numParticles;
    const r2 = new a.Vector2(0, 0);
    if (!e2) {
      const e3 = this.numParticles / 4;
      t2 = e3, o2 = e3, r2.x = Math.floor(Math.random() * this.numParticles / e3) * e3, r2.y = Math.floor(Math.random() * this.numParticles / e3) * e3;
    }
    const i2 = this.generateRandomizeParticleTexture(t2, o2);
    this.renderer.copyTextureToTexture(r2, i2, this.particleTexturePrev), this.renderer.copyTextureToTexture(r2, i2, this.particleTexture0.texture), this.renderer.copyTextureToTexture(r2, i2, this.particleTexture1.texture), i2.dispose(), this.forceRender = e2;
  }
  getParticleUtilization() {
    const e2 = this.particleMaterial.uniforms.screenSize.value;
    return this.particleDensity / 1e3 * e2 * e2 / (this.numParticles * this.numParticles);
  }
  setOpacity(e2) {
    super.setOpacity(e2), this.accumulatorDrawMesh.material.uniforms.opacity.value = e2;
  }
  disposeObjects() {
    super.disposeObjects(), this.particleTexturePrev.dispose(), this.particleTexture0.texture.dispose(), this.particleTexture0.dispose(), this.particleTexture1.texture.dispose(), this.particleTexture1.dispose(), this.accumulator.texture.dispose(), this.accumulator.dispose(), this.rttMesh.geometry.dispose(), this.rttMesh.material.dispose(), this.particleBackground.geometry.dispose(), this.particleBackground.material.dispose(), this.particles.geometry.dispose(), this.particles.material.dispose(), this.accumulatorDrawMesh.geometry.dispose(), this.accumulatorDrawMesh.material.dispose();
  }
  onResize() {
    super.onResize();
    const e2 = this.getMapOrThrow().getCanvas(), t2 = e2.width, o2 = e2.height;
    let r2 = Math.round(this.pixelRatio * this.extentScale * Math.max(t2, o2));
    r2 = Math.min(r2, this.getRendererOrThrow().capabilities.maxTextureSize), this.accumulator.setSize(r2, r2), this.particleMaterial.uniforms.screenSize.value = r2 / this.pixelRatio, this.scene.remove(this.accumulatorDrawMesh), this.scene.add(this.accumulatorDrawMesh);
  }
  onMoveEnd() {
  }
  refresh() {
    const e2 = this.getVisibleExtent(this.extentScale);
    if (!e2)
      throw new Error("The extent is null");
    const t2 = Math.max(e2[2] - e2[0], e2[3] - e2[1]) / D, o2 = [0.5 + (e2[2] + e2[0]) / 2 / D - t2 / 2, 0.5 - (e2[3] + e2[1]) / 2 / D - t2 / 2];
    this.rttMaterial.uniforms.rttScale.value = t2, this.rttMaterial.uniforms.rttXY.value = o2;
    const r2 = this.getRendererOrThrow();
    r2.setRenderTarget(this.accumulator), r2.setClearAlpha(0), r2.clearColor(), r2.setRenderTarget(null), this.randomizeParticles(true);
  }
  prerenderInternal() {
    const e2 = performance.now(), t2 = e2 - this.lastRenderTime, o2 = this.forceRender || t2 > this.rttTimestep || !this.prevRenderTime;
    if (o2) {
      this.forceRender = false, this.rttMaterial.uniforms.timestep.value = this.particleSpeed * t2, this.getRendererOrThrow().setRenderTarget(this.flipFlop ? this.particleTexture0 : this.particleTexture1), this.getRendererOrThrow().copyFramebufferToTexture(new a.Vector2(0, 0), this.particleTexturePrev), this.prevRenderTime = this.lastRenderTime, this.lastRenderTime = e2;
      const o3 = this.slippyTiles.length;
      for (let e3 = 0; e3 < o3; e3++) {
        const t3 = this.slippyTiles[0].length;
        for (let o4 = 0; o4 < t3; o4++) {
          const t4 = this.slippyTiles[e3][o4];
          if (!t4.visible)
            continue;
          const r3 = t4.material.uniforms;
          if (!r3)
            continue;
          const i3 = t4.scale.x;
          this.rttMaterial.uniforms.tileScale.value = i3, this.rttMaterial.uniforms.tilePosition.value = [t4.position.x / i3 - 0.5, -t4.position.y / i3 - 0.5], this.rttMaterial.uniforms.time.value = r3.time.value, this.rttMaterial.uniforms.tex0.value = r3.tex0.value, this.rttMaterial.uniforms.tex0xy.value = r3.tex0xy.value, this.rttMaterial.uniforms.tex0size.value = r3.tex0size.value, this.rttMaterial.uniforms.tex1.value = r3.tex1.value, this.rttMaterial.uniforms.tex1xy.value = r3.tex1xy.value, this.rttMaterial.uniforms.tex1size.value = r3.tex1size.value, this.rttMaterial.uniforms.rttTexture.value = (this.flipFlop ? this.particleTexture1 : this.particleTexture0).texture;
          const a2 = this.getRendererOrThrow();
          a2.setRenderTarget(this.flipFlop ? this.particleTexture0 : this.particleTexture1), a2.render(this.rttScene, this.rttCamera), this.flipFlop = !this.flipFlop;
        }
      }
      this.particleMaterial.uniforms.rttTexture.value = (this.flipFlop ? this.particleTexture0 : this.particleTexture1).texture;
    }
    const r2 = this.lastRenderTime - this.prevRenderTime, i2 = o2 ? 0 : t2 / r2;
    this.particleMaterial.uniforms.extrapolationFactor.value = i2, this.particleMaterial.uniforms.renderStepSize.value = r2 / 1e3;
    const l2 = this.getRendererOrThrow();
    l2.setRenderTarget(this.accumulator), l2.render(this.particleBackground, this.camera), l2.render(this.particles, this.camera), l2.setRenderTarget(null);
  }
  renderInternal() {
    const e2 = this.rttMaterial.uniforms.rttScale.value;
    this.accumulatorDrawMesh.position.x = 0.5 * e2 + this.rttMaterial.uniforms.rttXY.value[0], this.accumulatorDrawMesh.position.y = -0.5 * e2 - this.rttMaterial.uniforms.rttXY.value[1], this.accumulatorDrawMesh.scale.x = this.accumulatorDrawMesh.scale.y = e2;
  }
}
const _te = class _te extends Array {
  constructor(e2 = {}) {
    super();
    __publicField(this, "min", 0);
    __publicField(this, "max", 1);
    "min" in e2 && (this.min = e2.min), "max" in e2 && (this.max = e2.max), "stops" in e2 && this.setStops(e2.stops, { clone: false });
  }
  static fromArrayDefinition(e2) {
    return new _te({ stops: e2.map((e3) => ({ value: e3[0], color: e3[1] })) });
  }
  setStops(e2, t2 = { clone: true }) {
    const o2 = t2.clone ? this.clone() : this;
    o2.length = 0;
    let r2 = 1 / 0, i2 = -1 / 0;
    for (let t3 = 0; t3 < e2.length; t3 += 1)
      r2 = Math.min(r2, e2[t3].value), i2 = Math.max(i2, e2[t3].value), o2.push({ value: e2[t3].value, color: e2[t3].color.slice() });
    return o2.sort((e3, t3) => e3.value < t3.value ? -1 : 1), this.min = r2, this.max = i2, o2;
  }
  scale(e2, t2, o2 = { clone: true }) {
    const r2 = o2.clone, i2 = this[0].value, a2 = this.at(-1).value - i2, l2 = t2 - e2, s2 = [];
    for (let t3 = 0; t3 < this.length; t3 += 1) {
      const o3 = (this[t3].value - i2) / a2 * l2 + e2;
      r2 ? s2.push({ value: o3, color: this[t3].color.slice() }) : this[t3].value = o3;
    }
    return r2 ? new _te({ stops: s2 }) : this;
  }
  at(e2) {
    return e2 < 0 ? this[this.length + e2] : this[e2];
  }
  clone() {
    return new _te({ stops: this.getRawColorStops() });
  }
  getRawColorStops() {
    const e2 = [];
    for (let t2 = 0; t2 < this.length; t2 += 1)
      e2.push(this[t2]);
    return e2;
  }
  reverse(e2 = { clone: true }) {
    const t2 = e2.clone ? this.clone() : this;
    for (let e3 = 0; e3 < ~~(t2.length / 2); e3 += 1) {
      const o2 = t2[e3].color;
      t2[e3].color = t2.at(-(e3 + 1)).color, t2.at(-(e3 + 1)).color = o2;
    }
    return t2;
  }
  getBounds() {
    return { min: this.min, max: this.max };
  }
  getColor(e2, t2 = { smooth: true }) {
    if (e2 <= this[0].value)
      return this[0].color;
    if (e2 >= this.at(-1).value)
      return this.at(-1).color;
    for (let o2 = 0; o2 < this.length - 1; o2 += 1) {
      if (e2 > this[o2 + 1].value)
        continue;
      const r2 = this[o2].color;
      if (!t2.smooth)
        return r2.slice();
      const i2 = this[o2].value, a2 = this[o2 + 1].value, l2 = this[o2 + 1].color, s2 = (a2 - e2) / (a2 - i2);
      return r2.map((e3, t3) => Math.round(e3 * s2 + l2[t3] * (1 - s2)));
    }
    return [0, 0, 0];
  }
  getCanvasStrip(e2 = { horizontal: true, size: 512, smooth: true }) {
    const t2 = document.createElement("canvas");
    t2.width = e2.horizontal ? e2.size : 1, t2.height = e2.horizontal ? 1 : e2.size;
    const o2 = t2.getContext("2d");
    if (!o2)
      throw new Error("Canvs context is missing");
    const r2 = o2.getImageData(0, 0, t2.width, t2.height), i2 = r2.data, a2 = e2.size, l2 = this[0].value, s2 = (this.at(-1).value - l2) / a2;
    for (let t3 = 0; t3 < a2; t3 += 1) {
      const o3 = this.getColor(l2 + t3 * s2, { smooth: e2.smooth });
      i2[4 * t3] = o3[0], i2[4 * t3 + 1] = o3[1], i2[4 * t3 + 2] = o3[2], i2[4 * t3 + 3] = o3.length > 3 ? o3[3] : 255;
    }
    return o2.putImageData(r2, 0, 0), t2;
  }
};
__publicField(_te, "builtin", { NULL: new _te({ stops: [{ value: 0, color: [0, 0, 0, 0] }, { value: 1, color: [0, 0, 0, 0] }] }), JET: new _te({ stops: [{ value: 0, color: [0, 0, 131] }, { value: 0.125, color: [0, 60, 170] }, { value: 0.375, color: [5, 255, 255] }, { value: 0.625, color: [255, 255, 0] }, { value: 0.875, color: [250, 0, 0] }, { value: 1, color: [128, 0, 0] }] }), HSV: new _te({ stops: [{ value: 0, color: [255, 0, 0] }, { value: 0.169, color: [253, 255, 2] }, { value: 0.173, color: [247, 255, 2] }, { value: 0.337, color: [0, 252, 4] }, { value: 0.341, color: [0, 252, 10] }, { value: 0.506, color: [1, 249, 255] }, { value: 0.671, color: [2, 0, 253] }, { value: 0.675, color: [8, 0, 253] }, { value: 0.839, color: [255, 0, 251] }, { value: 0.843, color: [255, 0, 245] }, { value: 1, color: [255, 0, 6] }] }), HOT: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.3, color: [230, 0, 0] }, { value: 0.6, color: [255, 210, 0] }, { value: 1, color: [255, 255, 255] }] }), SPRING: new _te({ stops: [{ value: 0, color: [255, 0, 255] }, { value: 1, color: [255, 255, 0] }] }), SUMMER: new _te({ stops: [{ value: 0, color: [0, 128, 102] }, { value: 1, color: [255, 255, 102] }] }), AUTOMN: new _te({ stops: [{ value: 0, color: [255, 0, 0] }, { value: 1, color: [255, 255, 0] }] }), WINTER: new _te({ stops: [{ value: 0, color: [0, 0, 255] }, { value: 1, color: [0, 255, 128] }] }), BONE: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.376, color: [84, 84, 116] }, { value: 0.753, color: [169, 200, 200] }, { value: 1, color: [255, 255, 255] }] }), COPPER: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.804, color: [255, 160, 102] }, { value: 1, color: [255, 199, 127] }] }), GREYS: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 1, color: [255, 255, 255] }] }), YIGNBU: new _te({ stops: [{ value: 0, color: [8, 29, 88] }, { value: 0.125, color: [37, 52, 148] }, { value: 0.25, color: [34, 94, 168] }, { value: 0.375, color: [29, 145, 192] }, { value: 0.5, color: [65, 182, 196] }, { value: 0.625, color: [127, 205, 187] }, { value: 0.75, color: [199, 233, 180] }, { value: 0.875, color: [237, 248, 217] }, { value: 1, color: [255, 255, 217] }] }), GREENS: new _te({ stops: [{ value: 0, color: [0, 68, 27] }, { value: 0.125, color: [0, 109, 44] }, { value: 0.25, color: [35, 139, 69] }, { value: 0.375, color: [65, 171, 93] }, { value: 0.5, color: [116, 196, 118] }, { value: 0.625, color: [161, 217, 155] }, { value: 0.75, color: [199, 233, 192] }, { value: 0.875, color: [229, 245, 224] }, { value: 1, color: [247, 252, 245] }] }), YIORRD: new _te({ stops: [{ value: 0, color: [128, 0, 38] }, { value: 0.125, color: [189, 0, 38] }, { value: 0.25, color: [227, 26, 28] }, { value: 0.375, color: [252, 78, 42] }, { value: 0.5, color: [253, 141, 60] }, { value: 0.625, color: [254, 178, 76] }, { value: 0.75, color: [254, 217, 118] }, { value: 0.875, color: [255, 237, 160] }, { value: 1, color: [255, 255, 204] }] }), BLUERED: new _te({ stops: [{ value: 0, color: [0, 0, 255] }, { value: 1, color: [255, 0, 0] }] }), RDBU: new _te({ stops: [{ value: 0, color: [5, 10, 172] }, { value: 0.35, color: [106, 137, 247] }, { value: 0.5, color: [190, 190, 190] }, { value: 0.6, color: [220, 170, 132] }, { value: 0.7, color: [230, 145, 90] }, { value: 1, color: [178, 10, 28] }] }), PICNIC: new _te({ stops: [{ value: 0, color: [0, 0, 255] }, { value: 0.1, color: [51, 153, 255] }, { value: 0.2, color: [102, 204, 255] }, { value: 0.3, color: [153, 204, 255] }, { value: 0.4, color: [204, 204, 255] }, { value: 0.5, color: [255, 255, 255] }, { value: 0.6, color: [255, 204, 255] }, { value: 0.7, color: [255, 153, 255] }, { value: 0.8, color: [255, 102, 204] }, { value: 0.9, color: [255, 102, 102] }, { value: 1, color: [255, 0, 0] }] }), RAINBOW: new _te({ stops: [{ value: 0, color: [150, 0, 90] }, { value: 0.125, color: [0, 0, 200] }, { value: 0.25, color: [0, 25, 255] }, { value: 0.375, color: [0, 152, 255] }, { value: 0.5, color: [44, 255, 150] }, { value: 0.625, color: [151, 255, 0] }, { value: 0.75, color: [255, 234, 0] }, { value: 0.875, color: [255, 111, 0] }, { value: 1, color: [255, 0, 0] }] }), PORTLAND: new _te({ stops: [{ value: 0, color: [12, 51, 131] }, { value: 0.25, color: [10, 136, 186] }, { value: 0.5, color: [242, 211, 56] }, { value: 0.75, color: [242, 143, 56] }, { value: 1, color: [217, 30, 30] }] }), BLACKBODY: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.2, color: [230, 0, 0] }, { value: 0.4, color: [230, 210, 0] }, { value: 0.7, color: [255, 255, 255] }, { value: 1, color: [160, 200, 255] }] }), EARTH: new _te({ stops: [{ value: 0, color: [0, 0, 130] }, { value: 0.1, color: [0, 180, 180] }, { value: 0.2, color: [40, 210, 40] }, { value: 0.4, color: [230, 230, 50] }, { value: 0.6, color: [120, 70, 20] }, { value: 1, color: [255, 255, 255] }] }), ELECTRIC: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.15, color: [30, 0, 100] }, { value: 0.4, color: [120, 0, 100] }, { value: 0.6, color: [160, 90, 0] }, { value: 0.8, color: [230, 200, 0] }, { value: 1, color: [255, 250, 220] }] }), VIRIDIS: new _te({ stops: [{ value: 0, color: [68, 1, 84] }, { value: 0.13, color: [71, 44, 122] }, { value: 0.25, color: [59, 81, 139] }, { value: 0.38, color: [44, 113, 142] }, { value: 0.5, color: [33, 144, 141] }, { value: 0.63, color: [39, 173, 129] }, { value: 0.75, color: [92, 200, 99] }, { value: 0.88, color: [170, 220, 50] }, { value: 1, color: [253, 231, 37] }] }), INFERNO: new _te({ stops: [{ value: 0, color: [0, 0, 4] }, { value: 0.13, color: [31, 12, 72] }, { value: 0.25, color: [85, 15, 109] }, { value: 0.38, color: [136, 34, 106] }, { value: 0.5, color: [186, 54, 85] }, { value: 0.63, color: [227, 89, 51] }, { value: 0.75, color: [249, 140, 10] }, { value: 0.88, color: [249, 201, 50] }, { value: 1, color: [252, 255, 164] }] }), MAGMA: new _te({ stops: [{ value: 0, color: [0, 0, 4] }, { value: 0.13, color: [28, 16, 68] }, { value: 0.25, color: [79, 18, 123] }, { value: 0.38, color: [129, 37, 129] }, { value: 0.5, color: [181, 54, 122] }, { value: 0.63, color: [229, 80, 100] }, { value: 0.75, color: [251, 135, 97] }, { value: 0.88, color: [254, 194, 135] }, { value: 1, color: [252, 253, 191] }] }), PLASMA: new _te({ stops: [{ value: 0, color: [13, 8, 135] }, { value: 0.13, color: [75, 3, 161] }, { value: 0.25, color: [125, 3, 168] }, { value: 0.38, color: [168, 34, 150] }, { value: 0.5, color: [203, 70, 121] }, { value: 0.63, color: [229, 107, 93] }, { value: 0.75, color: [248, 148, 65] }, { value: 0.88, color: [253, 195, 40] }, { value: 1, color: [240, 249, 33] }] }), WARM: new _te({ stops: [{ value: 0, color: [125, 0, 179] }, { value: 0.13, color: [172, 0, 187] }, { value: 0.25, color: [219, 0, 170] }, { value: 0.38, color: [255, 0, 130] }, { value: 0.5, color: [255, 63, 74] }, { value: 0.63, color: [255, 123, 0] }, { value: 0.75, color: [234, 176, 0] }, { value: 0.88, color: [190, 228, 0] }, { value: 1, color: [147, 255, 0] }] }), COOL: new _te({ stops: [{ value: 0, color: [125, 0, 179] }, { value: 0.13, color: [116, 0, 218] }, { value: 0.25, color: [98, 74, 237] }, { value: 0.38, color: [68, 146, 231] }, { value: 0.5, color: [0, 204, 197] }, { value: 0.63, color: [0, 247, 146] }, { value: 0.75, color: [0, 255, 88] }, { value: 0.88, color: [40, 255, 8] }, { value: 1, color: [147, 255, 0] }] }), RAINBOW_SOFT: new _te({ stops: [{ value: 0, color: [125, 0, 179] }, { value: 0.1, color: [199, 0, 180] }, { value: 0.2, color: [255, 0, 121] }, { value: 0.3, color: [255, 108, 0] }, { value: 0.4, color: [222, 194, 0] }, { value: 0.5, color: [150, 255, 0] }, { value: 0.6, color: [0, 255, 55] }, { value: 0.7, color: [0, 246, 150] }, { value: 0.8, color: [50, 167, 222] }, { value: 0.9, color: [103, 51, 235] }, { value: 1, color: [124, 0, 186] }] }), BATHYMETRY: new _te({ stops: [{ value: 0, color: [40, 26, 44] }, { value: 0.13, color: [59, 49, 90] }, { value: 0.25, color: [64, 76, 139] }, { value: 0.38, color: [63, 110, 151] }, { value: 0.5, color: [72, 142, 158] }, { value: 0.63, color: [85, 174, 163] }, { value: 0.75, color: [120, 206, 163] }, { value: 0.88, color: [187, 230, 172] }, { value: 1, color: [253, 254, 204] }] }), CDOM: new _te({ stops: [{ value: 0, color: [47, 15, 62] }, { value: 0.13, color: [87, 23, 86] }, { value: 0.25, color: [130, 28, 99] }, { value: 0.38, color: [171, 41, 96] }, { value: 0.5, color: [206, 67, 86] }, { value: 0.63, color: [230, 106, 84] }, { value: 0.75, color: [242, 149, 103] }, { value: 0.88, color: [249, 193, 135] }, { value: 1, color: [254, 237, 176] }] }), CHLOROPHYLL: new _te({ stops: [{ value: 0, color: [18, 36, 20] }, { value: 0.13, color: [25, 63, 41] }, { value: 0.25, color: [24, 91, 59] }, { value: 0.38, color: [13, 119, 72] }, { value: 0.5, color: [18, 148, 80] }, { value: 0.63, color: [80, 173, 89] }, { value: 0.75, color: [132, 196, 122] }, { value: 0.88, color: [175, 221, 162] }, { value: 1, color: [215, 249, 208] }] }), DENSITY: new _te({ stops: [{ value: 0, color: [54, 14, 36] }, { value: 0.13, color: [89, 23, 80] }, { value: 0.25, color: [110, 45, 132] }, { value: 0.38, color: [120, 77, 178] }, { value: 0.5, color: [120, 113, 213] }, { value: 0.63, color: [115, 151, 228] }, { value: 0.75, color: [134, 185, 227] }, { value: 0.88, color: [177, 214, 227] }, { value: 1, color: [230, 241, 241] }] }), FREESURFACE_BLUE: new _te({ stops: [{ value: 0, color: [30, 4, 110] }, { value: 0.13, color: [47, 14, 176] }, { value: 0.25, color: [41, 45, 236] }, { value: 0.38, color: [25, 99, 212] }, { value: 0.5, color: [68, 131, 200] }, { value: 0.63, color: [114, 156, 197] }, { value: 0.75, color: [157, 181, 203] }, { value: 0.88, color: [200, 208, 216] }, { value: 1, color: [241, 237, 236] }] }), FREESURFACE_RED: new _te({ stops: [{ value: 0, color: [60, 9, 18] }, { value: 0.13, color: [100, 17, 27] }, { value: 0.25, color: [142, 20, 29] }, { value: 0.38, color: [177, 43, 27] }, { value: 0.5, color: [192, 87, 63] }, { value: 0.63, color: [205, 125, 105] }, { value: 0.75, color: [216, 162, 148] }, { value: 0.88, color: [227, 199, 193] }, { value: 1, color: [241, 237, 236] }] }), OXYGEN: new _te({ stops: [{ value: 0, color: [64, 5, 5] }, { value: 0.13, color: [106, 6, 15] }, { value: 0.25, color: [144, 26, 7] }, { value: 0.38, color: [168, 64, 3] }, { value: 0.5, color: [188, 100, 4] }, { value: 0.63, color: [206, 136, 11] }, { value: 0.75, color: [220, 174, 25] }, { value: 0.88, color: [231, 215, 44] }, { value: 1, color: [248, 254, 105] }] }), PAR: new _te({ stops: [{ value: 0, color: [51, 20, 24] }, { value: 0.13, color: [90, 32, 35] }, { value: 0.25, color: [129, 44, 34] }, { value: 0.38, color: [159, 68, 25] }, { value: 0.5, color: [182, 99, 19] }, { value: 0.63, color: [199, 134, 22] }, { value: 0.75, color: [212, 171, 35] }, { value: 0.88, color: [221, 210, 54] }, { value: 1, color: [225, 253, 75] }] }), PHASE: new _te({ stops: [{ value: 0, color: [145, 105, 18] }, { value: 0.13, color: [184, 71, 38] }, { value: 0.25, color: [186, 58, 115] }, { value: 0.38, color: [160, 71, 185] }, { value: 0.5, color: [110, 97, 218] }, { value: 0.63, color: [50, 123, 164] }, { value: 0.75, color: [31, 131, 110] }, { value: 0.88, color: [77, 129, 34] }, { value: 1, color: [145, 105, 18] }] }), SALINITY: new _te({ stops: [{ value: 0, color: [42, 24, 108] }, { value: 0.13, color: [33, 50, 162] }, { value: 0.25, color: [15, 90, 145] }, { value: 0.38, color: [40, 118, 137] }, { value: 0.5, color: [59, 146, 135] }, { value: 0.63, color: [79, 175, 126] }, { value: 0.75, color: [120, 203, 104] }, { value: 0.88, color: [193, 221, 100] }, { value: 1, color: [253, 239, 154] }] }), TEMPERATURE: new _te({ stops: [{ value: 0, color: [4, 35, 51] }, { value: 0.13, color: [23, 51, 122] }, { value: 0.25, color: [85, 59, 157] }, { value: 0.38, color: [129, 79, 143] }, { value: 0.5, color: [175, 95, 130] }, { value: 0.63, color: [222, 112, 101] }, { value: 0.75, color: [249, 146, 66] }, { value: 0.88, color: [249, 196, 65] }, { value: 1, color: [232, 250, 91] }] }), TURBIDITY: new _te({ stops: [{ value: 0, color: [34, 31, 27] }, { value: 0.13, color: [65, 50, 41] }, { value: 0.25, color: [98, 69, 52] }, { value: 0.38, color: [131, 89, 57] }, { value: 0.5, color: [161, 112, 59] }, { value: 0.63, color: [185, 140, 66] }, { value: 0.75, color: [202, 174, 88] }, { value: 0.88, color: [216, 209, 126] }, { value: 1, color: [233, 246, 171] }] }), VELOCITY_BLUE: new _te({ stops: [{ value: 0, color: [17, 32, 64] }, { value: 0.13, color: [35, 52, 116] }, { value: 0.25, color: [29, 81, 156] }, { value: 0.38, color: [31, 113, 162] }, { value: 0.5, color: [50, 144, 169] }, { value: 0.63, color: [87, 173, 176] }, { value: 0.75, color: [149, 196, 189] }, { value: 0.88, color: [203, 221, 211] }, { value: 1, color: [254, 251, 230] }] }), VELOCITY_GREEN: new _te({ stops: [{ value: 0, color: [23, 35, 19] }, { value: 0.13, color: [24, 64, 38] }, { value: 0.25, color: [11, 95, 45] }, { value: 0.38, color: [39, 123, 35] }, { value: 0.5, color: [95, 146, 12] }, { value: 0.63, color: [152, 165, 18] }, { value: 0.75, color: [201, 186, 69] }, { value: 0.88, color: [233, 216, 137] }, { value: 1, color: [255, 253, 205] }] }), CUBEHELIX: new _te({ stops: [{ value: 0, color: [0, 0, 0] }, { value: 0.07, color: [22, 5, 59] }, { value: 0.13, color: [60, 4, 105] }, { value: 0.2, color: [109, 1, 135] }, { value: 0.27, color: [161, 0, 147] }, { value: 0.33, color: [210, 2, 142] }, { value: 0.4, color: [251, 11, 123] }, { value: 0.47, color: [255, 29, 97] }, { value: 0.53, color: [255, 54, 69] }, { value: 0.6, color: [255, 85, 46] }, { value: 0.67, color: [255, 120, 34] }, { value: 0.73, color: [255, 157, 37] }, { value: 0.8, color: [241, 191, 57] }, { value: 0.87, color: [224, 220, 93] }, { value: 0.93, color: [218, 241, 142] }, { value: 1, color: [227, 253, 198] }] }), CIVIDIS: new _te({ stops: [{ value: 0, color: [0, 32, 77, 255] }, { value: 0.125, color: [5, 54, 110, 255] }, { value: 0.25, color: [65, 77, 108, 255] }, { value: 0.375, color: [97, 100, 111, 255] }, { value: 0.5, color: [125, 124, 121, 255] }, { value: 0.625, color: [156, 149, 120, 255] }, { value: 0.75, color: [190, 175, 111, 255] }, { value: 0.875, color: [225, 204, 94, 255] }, { value: 1, color: [255, 235, 70, 255] }] }), TURBO: new _te({ stops: [{ value: 0, color: [48, 18, 59, 255] }, { value: 0.125, color: [70, 107, 227, 255] }, { value: 0.25, color: [40, 187, 236, 255] }, { value: 0.375, color: [49, 242, 153, 255] }, { value: 0.5, color: [162, 252, 60, 255] }, { value: 0.625, color: [237, 208, 58, 255] }, { value: 0.75, color: [251, 128, 34, 255] }, { value: 0.875, color: [210, 49, 5, 255] }, { value: 1, color: [122, 4, 3, 255] }] }), ROCKET: new _te({ stops: [{ value: 0, color: [250, 235, 221, 0] }, { value: 0.133, color: [250, 235, 221, 255] }, { value: 0.266, color: [246, 170, 130, 255] }, { value: 0.4, color: [240, 96, 67, 255] }, { value: 0.533, color: [203, 27, 79, 255] }, { value: 0.666, color: [132, 30, 90, 255] }, { value: 0.8, color: [63, 27, 68, 255] }, { value: 1, color: [3, 5, 26, 255] }] }), MAKO: new _te({ stops: [{ value: 0, color: [11, 4, 5, 255] }, { value: 0.125, color: [43, 28, 53, 255] }, { value: 0.25, color: [62, 53, 107, 255] }, { value: 0.375, color: [59, 86, 152, 255] }, { value: 0.5, color: [53, 123, 162, 255] }, { value: 0.625, color: [53, 158, 170, 255] }, { value: 0.75, color: [73, 193, 173, 255] }, { value: 0.875, color: [150, 221, 181, 255] }, { value: 1, color: [222, 245, 229, 255] }] }), TERRAIN: new _te({ stops: [{ value: -10001, color: [0, 20, 60] }, { value: -5e3, color: [0, 10, 30] }, { value: -1e3, color: [0, 30, 80] }, { value: -100, color: [0, 38, 115] }, { value: 0, color: [122, 200, 255] }, { value: 10, color: [51, 102, 0] }, { value: 500, color: [129, 195, 31] }, { value: 800, color: [255, 255, 204] }, { value: 1200, color: [244, 189, 69] }, { value: 2e3, color: [132, 75, 0] }, { value: 3e3, color: [102, 51, 12] }, { value: 8e3, color: [255, 255, 255] }] }), PRESSURE: new _te({ stops: [{ value: 900, color: [0, 0, 100, 250] }, { value: 950, color: [0, 0, 255, 250] }, { value: 980, color: [0, 0, 255, 120] }, { value: 1e3, color: [255, 255, 255, 0] }, { value: 1020, color: [255, 0, 0, 120] }, { value: 1080, color: [255, 0, 0, 250] }] }), PRESSURE_2: new _te({ stops: [{ value: 900, color: [8, 16, 48, 255] }, { value: 950, color: [0, 32, 96, 255] }, { value: 976, color: [0, 52, 146, 255] }, { value: 986, color: [0, 90, 148, 255] }, { value: 995, color: [0, 117, 146, 255] }, { value: 1002, color: [26, 140, 147, 255] }, { value: 1007, color: [103, 162, 155, 255] }, { value: 1011, color: [155, 183, 172, 255] }, { value: 1013, color: [182, 182, 182, 255] }, { value: 1015, color: [176, 174, 152, 255] }, { value: 1019, color: [167, 147, 107, 255] }, { value: 1024, color: [163, 116, 67, 255] }, { value: 1030, color: [159, 81, 44, 255] }, { value: 1038, color: [142, 47, 57, 255] }, { value: 1046, color: [111, 24, 64, 255] }, { value: 1080, color: [48, 8, 24, 255] }] }), PRESSURE_3: new _te({ stops: [{ value: 900, color: [40, 46, 117, 255] }, { value: 950, color: [40, 51, 121, 255] }, { value: 976, color: [42, 63, 125, 255] }, { value: 986, color: [55, 97, 141, 255] }, { value: 995, color: [69, 115, 150, 255] }, { value: 1002, color: [87, 144, 168, 255] }, { value: 1007, color: [125, 184, 194, 255] }, { value: 1011, color: [195, 226, 226, 255] }, { value: 1013, color: [245, 220, 196, 255] }, { value: 1015, color: [232, 191, 160, 255] }, { value: 1019, color: [219, 154, 125, 255] }, { value: 1024, color: [210, 115, 98, 255] }, { value: 1030, color: [194, 72, 67, 255] }, { value: 1038, color: [199, 61, 60, 255] }, { value: 1046, color: [177, 50, 54, 255] }, { value: 1080, color: [159, 42, 48, 255] }] }), PRESSURE_4: new _te({ stops: [{ value: 900, color: [40, 46, 117, 255] }, { value: 950, color: [40, 51, 121, 255] }, { value: 976, color: [42, 63, 125, 255] }, { value: 986, color: [55, 97, 141, 255] }, { value: 995, color: [69, 115, 150, 255] }, { value: 1002, color: [87, 144, 168, 255] }, { value: 1007, color: [125, 184, 194, 255] }, { value: 1012.5, color: [226, 226, 226, 255] }, { value: 1013.5, color: [226, 226, 226, 255] }, { value: 1015, color: [232, 191, 160, 255] }, { value: 1019, color: [219, 154, 125, 255] }, { value: 1024, color: [210, 115, 98, 255] }, { value: 1030, color: [194, 72, 67, 255] }, { value: 1038, color: [199, 61, 60, 255] }, { value: 1046, color: [177, 50, 54, 255] }, { value: 1080, color: [159, 42, 48, 255] }] }), TEMPERATURE_2: new _te({ stops: [{ value: -70.15, color: [115, 70, 105, 255] }, { value: -55.15, color: [202, 172, 195, 255] }, { value: -40.15, color: [162, 70, 145, 255] }, { value: -25.15, color: [143, 89, 169, 255] }, { value: -15.15, color: [157, 219, 217, 255] }, { value: -8.15, color: [106, 191, 181, 255] }, { value: -4.15, color: [100, 166, 189, 255] }, { value: 0, color: [93, 133, 198, 255] }, { value: 0.85, color: [68, 125, 99, 255] }, { value: 9.85, color: [128, 147, 24, 255] }, { value: 20.85, color: [243, 183, 4, 255] }, { value: 29.85, color: [232, 83, 25, 255] }, { value: 46.85, color: [71, 14, 0, 255] }] }), TEMPERATURE_3: new _te({ stops: [{ value: -65, color: [3, 78, 77, 255] }, { value: -55, color: [4, 98, 96, 255] }, { value: -40, color: [5, 122, 120, 255] }, { value: -30, color: [6, 152, 149, 255] }, { value: -20, color: [8, 201, 198, 255] }, { value: -15, color: [20, 245, 241, 255] }, { value: -10, color: [108, 237, 249, 255] }, { value: -5, color: [133, 205, 250, 255] }, { value: 0, color: [186, 227, 252, 255] }, { value: 5, color: [238, 221, 145, 255] }, { value: 10, color: [232, 183, 105, 255] }, { value: 15, color: [232, 137, 69, 255] }, { value: 20, color: [231, 107, 24, 255] }, { value: 25, color: [236, 84, 19, 255] }, { value: 30, color: [236, 44, 19, 255] }, { value: 40, color: [123, 23, 10, 255] }, { value: 55, color: [91, 11, 0, 255] }] }), PRECIPITATION: new _te({ stops: [{ value: 0, color: [111, 111, 111, 0] }, { value: 0.6, color: [60, 116, 160, 180] }, { value: 6, color: [59, 161, 161, 255] }, { value: 8, color: [59, 161, 61, 255] }, { value: 10, color: [130, 161, 59, 255] }, { value: 15, color: [161, 161, 59, 255] }, { value: 20, color: [161, 59, 59, 255] }, { value: 31, color: [161, 59, 161, 255] }, { value: 50, color: [168, 168, 168, 255] }] }), PRECIPITATION_2: new _te({ stops: [{ value: 0, color: [255, 255, 255, 0] }, { value: 0.1, color: [171, 218, 252, 255] }, { value: 1, color: [98, 186, 249, 255] }, { value: 2, color: [87, 160, 240, 255] }, { value: 4, color: [112, 128, 250, 255] }, { value: 6, color: [128, 102, 245, 255] }, { value: 8, color: [152, 102, 245, 255] }, { value: 10, color: [154, 87, 172, 255] }, { value: 15, color: [228, 88, 126, 255] }, { value: 20, color: [247, 135, 95, 255] }, { value: 30, color: [249, 206, 64, 255] }, { value: 50, color: [250, 248, 168, 52] }] }), RADAR: new _te({ stops: [{ value: 0, color: [7, 235, 236, 0] }, { value: 4, color: [7, 235, 236, 80] }, { value: 5, color: [7, 235, 236, 255] }, { value: 10, color: [0, 159, 246, 255] }, { value: 15, color: [0, 0, 247, 255] }, { value: 20, color: [3, 255, 0, 255] }, { value: 25, color: [0, 200, 2, 255] }, { value: 30, color: [1, 144, 0, 255] }, { value: 35, color: [255, 255, 0, 255] }, { value: 40, color: [231, 192, 0, 255] }, { value: 45, color: [255, 145, 3, 255] }, { value: 50, color: [255, 0, 0, 255] }, { value: 55, color: [215, 0, 0, 255] }, { value: 60, color: [192, 0, 0, 255] }, { value: 65, color: [255, 0, 255, 255] }, { value: 70, color: [155, 85, 200, 255] }, { value: 75, color: [235, 235, 235, 255] }] }), RADAR_CLOUD: new _te({ stops: [{ value: 4, color: [134, 134, 176, 0] }, { value: 7, color: [134, 134, 176, 30] }, { value: 10, color: [134, 134, 176, 60] }, { value: 20, color: [110, 110, 145, 80] }, { value: 35, color: [77, 77, 105, 140] }, { value: 45, color: [58, 58, 87, 180] }, { value: 60, color: [26, 26, 51, 220] }] }), PRESSURE_CIVIDIS: new _te({ stops: [{ value: 900, color: [0, 32, 77, 255] }, { value: 950, color: [0, 37, 82, 255] }, { value: 976, color: [15, 56, 110, 255] }, { value: 986, color: [49, 68, 107, 255] }, { value: 995, color: [70, 80, 107, 255] }, { value: 1002, color: [87, 92, 109, 255] }, { value: 1007, color: [102, 105, 112, 255] }, { value: 1011, color: [117, 117, 117, 255] }, { value: 1013, color: [132, 130, 121, 255] }, { value: 1015, color: [149, 143, 120, 255] }, { value: 1019, color: [166, 157, 117, 255] }, { value: 1024, color: [184, 171, 112, 255] }, { value: 1030, color: [203, 186, 105, 255] }, { value: 1038, color: [221, 201, 95, 255] }, { value: 1046, color: [250, 229, 65, 255] }, { value: 1080, color: [255, 234, 70, 255] }] }), RADAR_ROCKET: new _te({ stops: [{ value: 0, color: [250, 235, 221, 0] }, { value: 0.1, color: [250, 235, 221, 255] }, { value: 10, color: [246, 180, 142, 255] }, { value: 20, color: [243, 118, 81, 255] }, { value: 30, color: [225, 51, 66, 255] }, { value: 40, color: [174, 23, 89, 255] }, { value: 50, color: [112, 31, 87, 255] }, { value: 60, color: [54, 25, 62, 255] }, { value: 75, color: [3, 5, 26, 255] }] }), WIND_ROCKET: new _te({ stops: [{ value: 0, color: [250, 235, 221, 255] }, { value: 1, color: [246, 187, 151, 255] }, { value: 3, color: [244, 135, 94, 255] }, { value: 5, color: [236, 75, 62, 255] }, { value: 10, color: [203, 27, 79, 255] }, { value: 15, color: [150, 28, 91, 255] }, { value: 20, color: [97, 31, 83, 255] }, { value: 25, color: [48, 23, 58, 255] }, { value: 30, color: [3, 5, 26, 255] }] }), MAKO_PRECIPITATION: new _te({ stops: [{ value: 0, color: [255, 255, 255, 0] }, { value: 0.1, color: [222, 245, 229, 255] }, { value: 1, color: [168, 225, 188, 255] }, { value: 2, color: [96, 206, 172, 255] }, { value: 4, color: [61, 180, 173, 255] }, { value: 6, color: [52, 151, 169, 255] }, { value: 8, color: [53, 123, 162, 255] }, { value: 10, color: [57, 93, 156, 255] }, { value: 15, color: [65, 64, 129, 255] }, { value: 20, color: [56, 42, 84, 255] }, { value: 30, color: [38, 23, 42, 255] }, { value: 50, color: [11, 4, 5, 255] }] }), TEMPERATURE_TURBO: new _te({ stops: [{ value: -65, color: [48, 18, 59, 255] }, { value: -55, color: [64, 64, 162, 255] }, { value: -40, color: [70, 107, 227, 255] }, { value: -30, color: [66, 147, 255, 255] }, { value: -20, color: [40, 187, 236, 255] }, { value: -15, color: [24, 220, 195, 255] }, { value: -10, color: [49, 242, 153, 255] }, { value: -5, color: [107, 254, 100, 255] }, { value: 0, color: [162, 252, 60, 255] }, { value: 5, color: [204, 237, 52, 255] }, { value: 10, color: [237, 208, 58, 255] }, { value: 15, color: [253, 173, 53, 255] }, { value: 20, color: [231, 107, 24, 255] }, { value: 25, color: [236, 82, 15, 255] }, { value: 30, color: [210, 49, 5, 255] }, { value: 40, color: [172, 23, 1, 255] }, { value: 55, color: [122, 4, 3, 255] }] }) });
let te = _te;
const oe = { maxAmount: 128, color: [255, 255, 255, 0], density: 200, size: 1, speed: 2e-3, refreshInterval: 200, fadeFactor: 0.04, opacity: 1, colorramp: te.builtin.VIRIDIS, smooth: true, fastColor: [255, 255, 255, 255], fastSpeed: 3 };
class re extends ee {
  constructor(e2 = {}) {
    super(e2.id || "MapTiler Wind", null, null, null);
    __publicField(this, "constructorOptions");
    __publicField(this, "isSourceReady", false);
    __publicField(this, "colorRamp");
    this.constructorOptions = e2;
  }
  async onAdd(e2, t2) {
    const o2 = e2.getSdkConfig().apiKey, r2 = e2.getMaptilerSessionId();
    J.hasData() || await J.fetchLatest(o2, r2);
    const i2 = J.getWindData();
    if (!i2)
      throw new Error("The latest weather data is not avaialble");
    this.colorRamp = this.constructorOptions.colorramp ?? oe.colorramp.scale(0, 40), this.initParticle({ minZoom: i2.metadata.minzoom, maxZoom: i2.metadata.maxzoom }, { decodeChannels: i2.metadata.weather_variable.decoding.channels.toLowerCase(), decodeMin: i2.metadata.weather_variable.decoding.min, decodeMax: i2.metadata.weather_variable.decoding.max, decodeAsWaves: false, maxAmount: this.constructorOptions.maxAmount ?? oe.maxAmount, color: this.constructorOptions.color ?? oe.color, fastColor: this.constructorOptions.fastColor ?? oe.fastColor, fastSpeed: this.constructorOptions.fastSpeed ?? oe.fastSpeed, density: this.constructorOptions.density ?? oe.density, size: this.constructorOptions.size ?? oe.size, speed: this.constructorOptions.speed ?? oe.speed, refreshInterval: this.constructorOptions.refreshInterval ?? oe.refreshInterval, fadeFactor: this.constructorOptions.fadeFactor ?? oe.fadeFactor }, [new V({ decode: { channel: i2.metadata.weather_variable.decoding.channels.toLowerCase(), min: i2.metadata.weather_variable.decoding.min, max: i2.metadata.weather_variable.decoding.max }, stops: this.colorRamp, smooth: this.constructorOptions.smooth ?? oe.smooth, opacity: this.constructorOptions.opacity ?? oe.opacity })]), super.onAdd(e2, t2), J.getSourcesAndTimestamps(i2, o2, r2).forEach((e3) => {
      this.addSource(e3.timestamp, e3.source);
    });
    const a2 = +/* @__PURE__ */ new Date() / 1e3;
    a2 >= this.getAnimationStart() && a2 <= this.getAnimationEnd() && this.setAnimationTime(a2), this.isSourceReady = true, this.emit("sourceReady", { map: e2, layer: this });
  }
  getIsSourceReady() {
    return this.isSourceReady;
  }
  pickAt(e2, t2) {
    const o2 = super.pick(e2, t2);
    if (!o2)
      return null;
    const r2 = o2[0], i2 = o2[1], a2 = Math.sqrt(r2 ** 2 + i2 ** 2), l2 = 180 * Math.atan2(r2, i2) / Math.PI;
    return { speedMetersPerSecond: a2, speedKilometersPerHour: 3.6 * a2, speedMilesPerHour: 2.23694 * a2, speedFeetPerSecond: 3.28084 * a2, speedKnots: 1.94384 * a2, directionAngle: l2, compassDirection: F(l2 + 180) };
  }
  getColorRamp() {
    return this.colorRamp;
  }
}
class ie extends Q {
  constructor(e2 = {}) {
    super(e2.id || "MapTiler Pressure", null, null, null);
    __publicField(this, "constructorOptions");
    __publicField(this, "isSourceReady", false);
    __publicField(this, "colorRamp");
    this.constructorOptions = e2;
  }
  async onAdd(e2, t2) {
    const o2 = e2.getSdkConfig().apiKey, r2 = e2.getMaptilerSessionId();
    J.hasData() || await J.fetchLatest(o2, r2);
    const i2 = J.getPressureData();
    if (!i2)
      throw new Error("The latest weather data is not avaialble");
    this.colorRamp = this.constructorOptions.colorramp ?? te.builtin.PRESSURE_2, this.init({ minZoom: i2.metadata.minzoom, maxZoom: i2.metadata.maxzoom, repaintOnPausedAnimation: false }, [new V({ decode: { channel: i2.metadata.weather_variable.decoding.channels.toLowerCase(), min: i2.metadata.weather_variable.decoding.min, max: i2.metadata.weather_variable.decoding.max }, stops: this.colorRamp, smooth: this.constructorOptions.smooth ?? true, opacity: this.constructorOptions.opacity ?? 1 })]), super.onAdd(e2, t2), J.getSourcesAndTimestamps(i2, o2, r2).forEach((e3) => {
      this.addSource(e3.timestamp, e3.source);
    });
    const a2 = +/* @__PURE__ */ new Date() / 1e3;
    a2 >= this.getAnimationStart() && a2 <= this.getAnimationEnd() && this.setAnimationTime(a2), this.isSourceReady = true, this.emit("sourceReady", { map: e2, layer: this });
  }
  getIsSourceReady() {
    return this.isSourceReady;
  }
  pickAt(e2, t2) {
    const o2 = super.pick(e2, t2);
    return o2 ? { value: o2[0] } : null;
  }
  getColorRamp() {
    return this.colorRamp;
  }
}
class ae extends Q {
  constructor(e2 = {}) {
    super(e2.id || "MapTiler Temperature", null, null, null);
    __publicField(this, "constructorOptions");
    __publicField(this, "isSourceReady", false);
    __publicField(this, "colorRamp");
    this.constructorOptions = e2;
  }
  async onAdd(e2, t2) {
    const o2 = e2.getSdkConfig().apiKey, r2 = e2.getMaptilerSessionId();
    J.hasData() || await J.fetchLatest(o2, r2);
    const i2 = J.getTemperatureData();
    if (!i2)
      throw new Error("The latest weather data is not avaialble");
    this.colorRamp = this.constructorOptions.colorramp ?? te.builtin.TEMPERATURE_2, this.init({ minZoom: i2.metadata.minzoom, maxZoom: i2.metadata.maxzoom, repaintOnPausedAnimation: false }, [new V({ decode: { channel: i2.metadata.weather_variable.decoding.channels.toLowerCase(), min: i2.metadata.weather_variable.decoding.min, max: i2.metadata.weather_variable.decoding.max }, stops: this.colorRamp, smooth: this.constructorOptions.smooth ?? true, opacity: this.constructorOptions.opacity ?? 1 })]), super.onAdd(e2, t2), J.getSourcesAndTimestamps(i2, o2, r2).forEach((e3) => {
      this.addSource(e3.timestamp, e3.source);
    });
    const a2 = +/* @__PURE__ */ new Date() / 1e3;
    a2 >= this.getAnimationStart() && a2 <= this.getAnimationEnd() && this.setAnimationTime(a2), this.isSourceReady = true, this.emit("sourceReady", { map: e2, layer: this });
  }
  getIsSourceReady() {
    return this.isSourceReady;
  }
  pickAt(e2, t2) {
    const o2 = super.pick(e2, t2);
    if (!o2)
      return null;
    const r2 = o2[0];
    return { value: r2, valueImperial: 32 + 9 * r2 / 5 };
  }
  getColorRamp() {
    return this.colorRamp;
  }
}
class le extends Q {
  constructor(e2 = {}) {
    super(e2.id || "MapTiler Precipitation", null, null, null);
    __publicField(this, "constructorOptions");
    __publicField(this, "isSourceReady", false);
    __publicField(this, "colorRamp");
    this.constructorOptions = e2;
  }
  async onAdd(e2, t2) {
    const o2 = e2.getSdkConfig().apiKey, r2 = e2.getMaptilerSessionId();
    J.hasData() || await J.fetchLatest(o2, r2);
    const i2 = J.getPrecipitationData();
    if (!i2)
      throw new Error("The latest weather data is not avaialble");
    this.colorRamp = this.constructorOptions.colorramp ?? te.builtin.PRECIPITATION, this.init({ minZoom: i2.metadata.minzoom, maxZoom: i2.metadata.maxzoom, repaintOnPausedAnimation: false }, [new V({ decode: { channel: i2.metadata.weather_variable.decoding.channels.toLowerCase(), min: i2.metadata.weather_variable.decoding.min, max: i2.metadata.weather_variable.decoding.max }, stops: this.colorRamp, smooth: this.constructorOptions.smooth ?? true, opacity: this.constructorOptions.opacity ?? 1 })]), super.onAdd(e2, t2), J.getSourcesAndTimestamps(i2, o2, r2).forEach((e3) => {
      this.addSource(e3.timestamp, e3.source);
    });
    const a2 = +/* @__PURE__ */ new Date() / 1e3;
    a2 >= this.getAnimationStart() && a2 <= this.getAnimationEnd() && this.setAnimationTime(a2), this.isSourceReady = true, this.emit("sourceReady", { map: e2, layer: this });
  }
  getIsSourceReady() {
    return this.isSourceReady;
  }
  pickAt(e2, t2) {
    const o2 = super.pick(e2, t2);
    return o2 ? { value: o2[0], valueImperial: o2[0] / 2.54 } : null;
  }
  getColorRamp() {
    return this.colorRamp;
  }
}
class se extends Q {
  constructor(e2 = {}) {
    super(e2.id || "MapTiler Radar", null, null, null);
    __publicField(this, "constructorOptions");
    __publicField(this, "isSourceReady", false);
    __publicField(this, "colorRamp");
    this.constructorOptions = e2;
  }
  async onAdd(e2, t2) {
    const o2 = e2.getSdkConfig().apiKey, r2 = e2.getMaptilerSessionId();
    J.hasData() || await J.fetchLatest(o2, r2);
    const i2 = J.getRadarData();
    if (!i2)
      throw new Error("The latest weather data is not avaialble");
    this.colorRamp = this.constructorOptions.colorramp ?? te.builtin.RADAR, this.init({ minZoom: i2.metadata.minzoom, maxZoom: i2.metadata.maxzoom, repaintOnPausedAnimation: false }, [new V({ decode: { channel: i2.metadata.weather_variable.decoding.channels.toLowerCase(), min: i2.metadata.weather_variable.decoding.min, max: i2.metadata.weather_variable.decoding.max }, stops: this.colorRamp, smooth: this.constructorOptions.smooth ?? true, opacity: this.constructorOptions.opacity ?? 1 })]), super.onAdd(e2, t2), J.getSourcesAndTimestamps(i2, o2, r2).forEach((e3) => {
      this.addSource(e3.timestamp, e3.source);
    });
    const a2 = +/* @__PURE__ */ new Date() / 1e3;
    a2 >= this.getAnimationStart() && a2 <= this.getAnimationEnd() && this.setAnimationTime(a2), this.isSourceReady = true, this.emit("sourceReady", { map: e2, layer: this });
  }
  getIsSourceReady() {
    return this.isSourceReady;
  }
  pickAt(e2, t2) {
    const o2 = super.pick(e2, t2);
    return o2 ? { value: o2[0] } : null;
  }
  getColorRamp() {
    return this.colorRamp;
  }
}
export {
  y as ChannelIndices,
  te as ColorRamp,
  U as ColoringFragmentBase,
  D as EARTH_PERIMETER_M,
  A as EARTH_RADIUS_M,
  V as GradientColoringFragment,
  $ as InstancePool,
  W as MultiChannelGradientColoringFragment,
  B as OpacityColoringFragment,
  ee as ParticleLayer,
  le as PrecipitationLayer,
  ie as PressureLayer,
  se as RadarLayer,
  ae as TemperatureLayer,
  Q as TileLayer,
  J as WeatherDataHandler,
  X as WeatherVariableID,
  re as WindLayer,
  b as addLayerWhenReady,
  P as floatifyColor,
  F as getCardinalDirection,
  C as latToUnit,
  R as makeUnitColor,
  M as pixelToLat,
  z as sampleImage,
  _ as unitToLat,
  I as wgs84ToMerc,
  E as wgs84ToUnit
};
