var sd = Object.defineProperty;
var od = (i, t, e) => t in i ? sd(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var Rn = (i, t, e) => (od(i, typeof t != "symbol" ? t + "" : t, e), e), Ic = (i, t, e) => {
  if (!t.has(i))
    throw TypeError("Cannot " + e);
};
var ki = (i, t, e) => (Ic(i, t, "read from private field"), e ? e.call(i) : t.get(i)), Uu = (i, t, e) => {
  if (t.has(i))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(i) : t.set(i, e);
}, Oa = (i, t, e, n) => (Ic(i, t, "write to private field"), n ? n.call(i, e) : t.set(i, e), e);
class ad {
  /**
   * @param {string} type Type.
   */
  constructor(t) {
    this.propagationStopped, this.defaultPrevented, this.type = t, this.target = null;
  }
  /**
   * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
   * will be fired.
   * @api
   */
  preventDefault() {
    this.defaultPrevented = !0;
  }
  /**
   * Stop event propagation.
   * @api
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
const En = ad, lf = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class ud {
  constructor() {
    this.disposed = !1;
  }
  /**
   * Clean up.
   */
  dispose() {
    this.disposed || (this.disposed = !0, this.disposeInternal());
  }
  /**
   * Extension point for disposable objects.
   * @protected
   */
  disposeInternal() {
  }
}
const ld = ud;
function cd(i, t, e) {
  let n, r;
  e = e || Bo;
  let s = 0, o = i.length, a = !1;
  for (; s < o; )
    n = s + (o - s >> 1), r = +e(i[n], t), r < 0 ? s = n + 1 : (o = n, a = !r);
  return a ? s : ~s;
}
function Bo(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function cf(i, t, e) {
  if (i[0] <= t)
    return 0;
  const n = i.length;
  if (t <= i[n - 1])
    return n - 1;
  if (typeof e == "function") {
    for (let r = 1; r < n; ++r) {
      const s = i[r];
      if (s === t)
        return r;
      if (s < t)
        return e(t, i[r - 1], s) > 0 ? r - 1 : r;
    }
    return n - 1;
  }
  if (e > 0) {
    for (let r = 1; r < n; ++r)
      if (i[r] < t)
        return r - 1;
    return n - 1;
  }
  if (e < 0) {
    for (let r = 1; r < n; ++r)
      if (i[r] <= t)
        return r;
    return n - 1;
  }
  for (let r = 1; r < n; ++r) {
    if (i[r] == t)
      return r;
    if (i[r] < t)
      return i[r - 1] - t < t - i[r] ? r - 1 : r;
  }
  return n - 1;
}
function hd(i, t, e) {
  for (; t < e; ) {
    const n = i[t];
    i[t] = i[e], i[e] = n, ++t, --e;
  }
}
function Xi(i, t) {
  const e = Array.isArray(t) ? t : [t], n = e.length;
  for (let r = 0; r < n; r++)
    i[i.length] = e[r];
}
function go(i, t) {
  const e = i.length;
  if (e !== t.length)
    return !1;
  for (let n = 0; n < e; n++)
    if (i[n] !== t[n])
      return !1;
  return !0;
}
function fd() {
  return !0;
}
function Xs() {
}
function gd(i) {
  let t = !1, e, n, r;
  return function() {
    const s = Array.prototype.slice.call(arguments);
    return (!t || this !== r || !go(s, n)) && (t = !0, r = this, n = s, e = i.apply(this, arguments)), e;
  };
}
function kl(i) {
  for (const t in i)
    delete i[t];
}
function zo(i) {
  let t;
  for (t in i)
    return !1;
  return !t;
}
class dd extends ld {
  /**
   * @param {*} [target] Default event target for dispatched events.
   */
  constructor(t) {
    super(), this.eventTarget_ = t, this.pendingRemovals_ = null, this.dispatching_ = null, this.listeners_ = null;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  addEventListener(t, e) {
    if (!t || !e)
      return;
    const n = this.listeners_ || (this.listeners_ = {}), r = n[t] || (n[t] = []);
    r.includes(e) || r.push(e);
  }
  /**
   * Dispatches an event and calls all listeners listening for events
   * of this type. The event parameter can either be a string or an
   * Object with a `type` property.
   *
   * @param {import("./Event.js").default|string} event Event object.
   * @return {boolean|undefined} `false` if anyone called preventDefault on the
   *     event object or if any of the listeners returned false.
   * @api
   */
  dispatchEvent(t) {
    const e = typeof t == "string", n = e ? t : t.type, r = this.listeners_ && this.listeners_[n];
    if (!r)
      return;
    const s = e ? new En(t) : (
      /** @type {Event} */
      t
    );
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    n in o || (o[n] = 0, a[n] = 0), ++o[n];
    let u;
    for (let l = 0, c = r.length; l < c; ++l)
      if ("handleEvent" in r[l] ? u = /** @type {import("../events.js").ListenerObject} */
      r[l].handleEvent(s) : u = /** @type {import("../events.js").ListenerFunction} */
      r[l].call(this, s), u === !1 || s.propagationStopped) {
        u = !1;
        break;
      }
    if (--o[n] === 0) {
      let l = a[n];
      for (delete a[n]; l--; )
        this.removeEventListener(n, Xs);
      delete o[n];
    }
    return u;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && kl(this.listeners_);
  }
  /**
   * Get the listeners for a specified event type. Listeners are returned in the
   * order that they will be called in.
   *
   * @param {string} type Type.
   * @return {Array<import("../events.js").Listener>|undefined} Listeners.
   */
  getListeners(t) {
    return this.listeners_ && this.listeners_[t] || void 0;
  }
  /**
   * @param {string} [type] Type. If not provided,
   *     `true` will be returned if this event target has any listeners.
   * @return {boolean} Has listeners.
   */
  hasListener(t) {
    return this.listeners_ ? t ? t in this.listeners_ : Object.keys(this.listeners_).length > 0 : !1;
  }
  /**
   * @param {string} type Type.
   * @param {import("../events.js").Listener} listener Listener.
   */
  removeEventListener(t, e) {
    const n = this.listeners_ && this.listeners_[t];
    if (n) {
      const r = n.indexOf(e);
      r !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (n[r] = Xs, ++this.pendingRemovals_[t]) : (n.splice(r, 1), n.length === 0 && delete this.listeners_[t]));
    }
  }
}
const hf = dd, Fn = {
  /**
   * Generic change event. Triggered when the revision counter is increased.
   * @event module:ol/events/Event~BaseEvent#change
   * @api
   */
  CHANGE: "change",
  /**
   * Generic error event. Triggered when an error occurs.
   * @event module:ol/events/Event~BaseEvent#error
   * @api
   */
  ERROR: "error",
  BLUR: "blur",
  CLEAR: "clear",
  CONTEXTMENU: "contextmenu",
  CLICK: "click",
  DBLCLICK: "dblclick",
  DRAGENTER: "dragenter",
  DRAGOVER: "dragover",
  DROP: "drop",
  FOCUS: "focus",
  KEYDOWN: "keydown",
  KEYPRESS: "keypress",
  LOAD: "load",
  RESIZE: "resize",
  TOUCHMOVE: "touchmove",
  WHEEL: "wheel"
};
function ni(i, t, e, n, r) {
  if (n && n !== i && (e = e.bind(n)), r) {
    const o = e;
    e = function() {
      i.removeEventListener(t, e), o.apply(this, arguments);
    };
  }
  const s = {
    target: i,
    type: t,
    listener: e
  };
  return i.addEventListener(t, e), s;
}
function Qa(i, t, e, n) {
  return ni(i, t, e, n, !0);
}
function ii(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), kl(i));
}
class Iu extends hf {
  constructor() {
    super(), this.on = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onInternal, this.once = /** @type {ObservableOnSignature<import("./events").EventsKey>} */
    this.onceInternal, this.un = /** @type {ObservableOnSignature<void>} */
    this.unInternal, this.revision_ = 0;
  }
  /**
   * Increases the revision counter and dispatches a 'change' event.
   * @api
   */
  changed() {
    ++this.revision_, this.dispatchEvent(Fn.CHANGE);
  }
  /**
   * Get the version number for this object.  Each time the object is modified,
   * its version number will be incremented.
   * @return {number} Revision.
   * @api
   */
  getRevision() {
    return this.revision_;
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onInternal(t, e) {
    if (Array.isArray(t)) {
      const n = t.length, r = new Array(n);
      for (let s = 0; s < n; ++s)
        r[s] = ni(this, t[s], e);
      return r;
    }
    return ni(
      this,
      /** @type {string} */
      t,
      e
    );
  }
  /**
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
   * @protected
   */
  onceInternal(t, e) {
    let n;
    if (Array.isArray(t)) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s < r; ++s)
        n[s] = Qa(this, t[s], e);
    } else
      n = Qa(
        this,
        /** @type {string} */
        t,
        e
      );
    return e.ol_key = n, n;
  }
  /**
   * Unlisten for a certain type of event.
   * @param {string|Array<string>} type Type.
   * @param {function((Event|import("./events/Event").default)): ?} listener Listener.
   * @protected
   */
  unInternal(t, e) {
    const n = (
      /** @type {Object} */
      e.ol_key
    );
    if (n)
      pd(n);
    else if (Array.isArray(t))
      for (let r = 0, s = t.length; r < s; ++r)
        this.removeEventListener(t[r], e);
    else
      this.removeEventListener(t, e);
  }
}
Iu.prototype.on;
Iu.prototype.once;
Iu.prototype.un;
function pd(i) {
  if (Array.isArray(i))
    for (let t = 0, e = i.length; t < e; ++t)
      ii(i[t]);
  else
    ii(
      /** @type {import("./events.js").EventsKey} */
      i
    );
}
const ff = Iu;
function yt() {
  throw new Error("Unimplemented abstract method.");
}
let _d = 0;
function ge(i) {
  return i.ol_uid || (i.ol_uid = String(++_d));
}
class Sc extends En {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(t, e, n) {
    super(t), this.key = e, this.oldValue = n;
  }
}
class md extends ff {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, ge(this), this.values_ = null, t !== void 0 && this.setProperties(t);
  }
  /**
   * Gets a value.
   * @param {string} key Key name.
   * @return {*} Value.
   * @api
   */
  get(t) {
    let e;
    return this.values_ && this.values_.hasOwnProperty(t) && (e = this.values_[t]), e;
  }
  /**
   * Get a list of object property names.
   * @return {Array<string>} List of property names.
   * @api
   */
  getKeys() {
    return this.values_ && Object.keys(this.values_) || [];
  }
  /**
   * Get an object of all property names and values.
   * @return {Object<string, *>} Object.
   * @api
   */
  getProperties() {
    return this.values_ && Object.assign({}, this.values_) || {};
  }
  /**
   * @return {boolean} The object has properties.
   */
  hasProperties() {
    return !!this.values_;
  }
  /**
   * @param {string} key Key name.
   * @param {*} oldValue Old value.
   */
  notify(t, e) {
    let n;
    n = `change:${t}`, this.hasListener(n) && this.dispatchEvent(new Sc(n, t, e)), n = lf.PROPERTYCHANGE, this.hasListener(n) && this.dispatchEvent(new Sc(n, t, e));
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  addChangeListener(t, e) {
    this.addEventListener(`change:${t}`, e);
  }
  /**
   * @param {string} key Key name.
   * @param {import("./events.js").Listener} listener Listener.
   */
  removeChangeListener(t, e) {
    this.removeEventListener(`change:${t}`, e);
  }
  /**
   * Sets a value.
   * @param {string} key Key name.
   * @param {*} value Value.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  set(t, e, n) {
    const r = this.values_ || (this.values_ = {});
    if (n)
      r[t] = e;
    else {
      const s = r[t];
      r[t] = e, s !== e && this.notify(t, s);
    }
  }
  /**
   * Sets a collection of key-value pairs.  Note that this changes any existing
   * properties and adds new ones (it does not remove any existing properties).
   * @param {Object<string, *>} values Values.
   * @param {boolean} [silent] Update without triggering an event.
   * @api
   */
  setProperties(t, e) {
    for (const n in t)
      this.set(n, t[n], e);
  }
  /**
   * Apply any properties from another object without triggering events.
   * @param {BaseObject} source The source object.
   * @protected
   */
  applyProperties(t) {
    t.values_ && Object.assign(this.values_ || (this.values_ = {}), t.values_);
  }
  /**
   * Unsets a property.
   * @param {string} key Key name.
   * @param {boolean} [silent] Unset without triggering an event.
   * @api
   */
  unset(t, e) {
    if (this.values_ && t in this.values_) {
      const n = this.values_[t];
      delete this.values_[t], zo(this.values_) && (this.values_ = null), e || this.notify(t, n);
    }
  }
}
const Gr = md, yd = {
  /**
   * Triggered after a map frame is rendered.
   * @event module:ol/MapEvent~MapEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered when the map starts moving.
   * @event module:ol/MapEvent~MapEvent#movestart
   * @api
   */
  MOVESTART: "movestart",
  /**
   * Triggered after the map is moved.
   * @event module:ol/MapEvent~MapEvent#moveend
   * @api
   */
  MOVEEND: "moveend",
  /**
   * Triggered when loading of additional map data (tiles, images, features) starts.
   * @event module:ol/MapEvent~MapEvent#loadstart
   * @api
   */
  LOADSTART: "loadstart",
  /**
   * Triggered when loading of additional map data has completed.
   * @event module:ol/MapEvent~MapEvent#loadend
   * @api
   */
  LOADEND: "loadend"
}, Sr = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
Sr.includes("firefox");
const vd = Sr.includes("safari") && !Sr.includes("chrom");
vd && (Sr.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(Sr));
Sr.includes("webkit") && Sr.includes("edge");
Sr.includes("macintosh");
const Gl = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, Ed = typeof Image < "u" && Image.prototype.decode;
(function() {
  let i = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function() {
        i = !0;
      }
    });
    window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
  } catch {
  }
  return i;
})();
function oi(i, t, e, n) {
  let r;
  return e && e.length ? r = e.shift() : Gl ? r = new OffscreenCanvas(i || 300, t || 300) : r = document.createElement("canvas"), i && (r.width = i), t && (r.height = t), /** @type {CanvasRenderingContext2D} */
  r.getContext("2d", n);
}
function xd(i) {
  const t = i.canvas;
  t.width = 1, t.height = 1, i.clearRect(0, 0, 1, 1);
}
function wc(i) {
  return i && i.parentNode ? i.parentNode.removeChild(i) : null;
}
class Cd extends Gr {
  /**
   * @param {Options} options Control options.
   */
  constructor(t) {
    super();
    const e = t.element;
    e && !t.target && !e.style.pointerEvents && (e.style.pointerEvents = "auto"), this.element = e || null, this.target_ = null, this.map_ = null, this.listenerKeys = [], t.render && (this.render = t.render), t.target && this.setTarget(t.target);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    wc(this.element), super.disposeInternal();
  }
  /**
   * Get the map associated with this control.
   * @return {import("../Map.js").default|null} Map.
   * @api
   */
  getMap() {
    return this.map_;
  }
  /**
   * Remove the control from its current map and attach it to the new map.
   * Pass `null` to just remove the control from the current map.
   * Subclasses may set up event handlers to get notified about changes to
   * the map here.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(t) {
    this.map_ && wc(this.element);
    for (let e = 0, n = this.listenerKeys.length; e < n; ++e)
      ii(this.listenerKeys[e]);
    this.listenerKeys.length = 0, this.map_ = t, t && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== Xs && this.listenerKeys.push(
      ni(t, yd.POSTRENDER, this.render, this)
    ), t.render());
  }
  /**
   * Renders the control.
   * @param {import("../MapEvent.js").default} mapEvent Map event.
   * @api
   */
  render(t) {
  }
  /**
   * This function is used to set a target element for the control. It has no
   * effect if it is called after the control has been added to the map (i.e.
   * after `setMap` is called on the control). If no `target` is set in the
   * options passed to the control constructor and if `setTarget` is not called
   * then the control is added to the map's overlay container.
   * @param {HTMLElement|string} target Target.
   * @api
   */
  setTarget(t) {
    this.target_ = typeof t == "string" ? document.getElementById(t) : t;
  }
}
const Id = Cd, Sd = new RegExp(
  [
    "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
    "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
    "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
    "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
    "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
    `?\\s*([-,\\"\\'\\sa-z]+?)\\s*$`
  ].join(""),
  "i"
), Rc = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], gf = function(i) {
  const t = i.match(Sd);
  if (!t)
    return null;
  const e = (
    /** @type {FontParameters} */
    {
      lineHeight: "normal",
      size: "1.2em",
      style: "normal",
      weight: "normal",
      variant: "normal"
    }
  );
  for (let n = 0, r = Rc.length; n < r; ++n) {
    const s = t[n + 1];
    s !== void 0 && (e[Rc[n]] = s);
  }
  return e.families = e.family.split(/,\s?/), e;
}, df = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class wd {
  /**
   * @param {Options} options Projection options.
   */
  constructor(t) {
    this.code_ = t.code, this.units_ = /** @type {import("./Units.js").Units} */
    t.units, this.extent_ = t.extent !== void 0 ? t.extent : null, this.worldExtent_ = t.worldExtent !== void 0 ? t.worldExtent : null, this.axisOrientation_ = t.axisOrientation !== void 0 ? t.axisOrientation : "enu", this.global_ = t.global !== void 0 ? t.global : !1, this.canWrapX_ = !!(this.global_ && this.extent_), this.getPointResolutionFunc_ = t.getPointResolution, this.defaultTileGrid_ = null, this.metersPerUnit_ = t.metersPerUnit;
  }
  /**
   * @return {boolean} The projection is suitable for wrapping the x-axis
   */
  canWrapX() {
    return this.canWrapX_;
  }
  /**
   * Get the code for this projection, e.g. 'EPSG:4326'.
   * @return {string} Code.
   * @api
   */
  getCode() {
    return this.code_;
  }
  /**
   * Get the validity extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent() {
    return this.extent_;
  }
  /**
   * Get the units of this projection.
   * @return {import("./Units.js").Units} Units.
   * @api
   */
  getUnits() {
    return this.units_;
  }
  /**
   * Get the amount of meters per unit of this projection.  If the projection is
   * not configured with `metersPerUnit` or a units identifier, the return is
   * `undefined`.
   * @return {number|undefined} Meters.
   * @api
   */
  getMetersPerUnit() {
    return this.metersPerUnit_ || df[this.units_];
  }
  /**
   * Get the world extent for this projection.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getWorldExtent() {
    return this.worldExtent_;
  }
  /**
   * Get the axis orientation of this projection.
   * Example values are:
   * enu - the default easting, northing, elevation.
   * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
   *     or south orientated transverse mercator.
   * wnu - westing, northing, up - some planetary coordinate systems have
   *     "west positive" coordinate systems
   * @return {string} Axis orientation.
   * @api
   */
  getAxisOrientation() {
    return this.axisOrientation_;
  }
  /**
   * Is this projection a global projection which spans the whole world?
   * @return {boolean} Whether the projection is global.
   * @api
   */
  isGlobal() {
    return this.global_;
  }
  /**
   * Set if the projection is a global projection which spans the whole world
   * @param {boolean} global Whether the projection is global.
   * @api
   */
  setGlobal(t) {
    this.global_ = t, this.canWrapX_ = !!(t && this.extent_);
  }
  /**
   * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
   */
  getDefaultTileGrid() {
    return this.defaultTileGrid_;
  }
  /**
   * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
   */
  setDefaultTileGrid(t) {
    this.defaultTileGrid_ = t;
  }
  /**
   * Set the validity extent for this projection.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  setExtent(t) {
    this.extent_ = t, this.canWrapX_ = !!(this.global_ && t);
  }
  /**
   * Set the world extent for this projection.
   * @param {import("../extent.js").Extent} worldExtent World extent
   *     [minlon, minlat, maxlon, maxlat].
   * @api
   */
  setWorldExtent(t) {
    this.worldExtent_ = t;
  }
  /**
   * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
   * for this projection.
   * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
   * @api
   */
  setGetPointResolution(t) {
    this.getPointResolutionFunc_ = t;
  }
  /**
   * Get the custom point resolution function for this projection (if set).
   * @return {function(number, import("../coordinate.js").Coordinate):number|undefined} The custom point
   * resolution function (if set).
   */
  getPointResolutionFunc() {
    return this.getPointResolutionFunc_;
  }
}
const pf = wd, pa = 6378137, Ds = Math.PI * pa, Rd = [-Ds, -Ds, Ds, Ds], Nd = [-180, -85, 180, 85], Aa = pa * Math.log(Math.tan(Math.PI / 2));
class Ns extends pf {
  /**
   * @param {string} code Code.
   */
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: Rd,
      global: !0,
      worldExtent: Nd,
      getPointResolution: function(e, n) {
        return e / Math.cosh(n[1] / pa);
      }
    });
  }
}
const Nc = [
  new Ns("EPSG:3857"),
  new Ns("EPSG:102100"),
  new Ns("EPSG:102113"),
  new Ns("EPSG:900913"),
  new Ns("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Ns("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function Ld(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e) {
    t[r] = Ds * i[r] / 180;
    let s = pa * Math.log(Math.tan(Math.PI * (+i[r + 1] + 90) / 360));
    s > Aa ? s = Aa : s < -Aa && (s = -Aa), t[r + 1] = s;
  }
  return t;
}
function bd(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e)
    t[r] = 180 * i[r] / Ds, t[r + 1] = 360 * Math.atan(Math.exp(i[r + 1] / pa)) / Math.PI - 90;
  return t;
}
const Pd = 6378137, Lc = [-180, -90, 180, 90], Td = Math.PI * Pd / 180;
class Wr extends pf {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: Lc,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Td,
      worldExtent: Lc
    });
  }
}
const bc = [
  new Wr("CRS:84"),
  new Wr("EPSG:4326", "neu"),
  new Wr("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Wr("urn:ogc:def:crs:OGC:2:84"),
  new Wr("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Wr("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Wr("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let il = {};
function Md(i) {
  return il[i] || il[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Od(i, t) {
  il[i] = t;
}
let Bs = {};
function $a(i, t, e) {
  const n = i.getCode(), r = t.getCode();
  n in Bs || (Bs[n] = {}), Bs[n][r] = e;
}
function Ad(i, t) {
  let e;
  return i in Bs && t in Bs[i] && (e = Bs[i][t]), e;
}
const fe = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
}, Dd = {
  1: "The view center is not defined",
  2: "The view resolution is not defined",
  3: "The view rotation is not defined",
  4: "`image` and `src` cannot be provided at the same time",
  5: "`imgSize` must be set when `image` is provided",
  7: "`format` must be set when `url` is set",
  8: "Unknown `serverType` configured",
  9: "`url` must be configured or set using `#setUrl()`",
  10: "The default `geometryFunction` can only handle `Point` geometries",
  11: "`options.featureTypes` must be an Array",
  12: "`options.geometryName` must also be provided when `options.bbox` is set",
  13: "Invalid corner",
  14: "Invalid color",
  15: "Tried to get a value for a key that does not exist in the cache",
  16: "Tried to set a value for a key that is used already",
  17: "`resolutions` must be sorted in descending order",
  18: "Either `origin` or `origins` must be configured, never both",
  19: "Number of `tileSizes` and `resolutions` must be equal",
  20: "Number of `origins` and `resolutions` must be equal",
  22: "Either `tileSize` or `tileSizes` must be configured, never both",
  24: "Invalid extent or geometry provided as `geometry`",
  25: "Cannot fit empty extent provided as `geometry`",
  26: "Features must have an id set",
  27: "Features must have an id set",
  28: '`renderMode` must be `"hybrid"` or `"vector"`',
  30: "The passed `feature` was already added to the source",
  31: "Tried to enqueue an `element` that was already added to the queue",
  32: "Transformation matrix cannot be inverted",
  33: "Invalid units",
  34: "Invalid geometry layout",
  36: "Unknown SRS type",
  37: "Unknown geometry type found",
  38: "`styleMapValue` has an unknown type",
  39: "Unknown geometry type",
  40: "Expected `feature` to have a geometry",
  41: "Expected an `ol/style/Style` or an array of `ol/style/Style.js`",
  42: "Question unknown, the answer is 42",
  43: "Expected `layers` to be an array or a `Collection`",
  47: "Expected `controls` to be an array or an `ol/Collection`",
  48: "Expected `interactions` to be an array or an `ol/Collection`",
  49: "Expected `overlays` to be an array or an `ol/Collection`",
  50: "`options.featureTypes` should be an Array",
  51: "Either `url` or `tileJSON` options must be provided",
  52: "Unknown `serverType` configured",
  53: "Unknown `tierSizeCalculation` configured",
  55: "The {-y} placeholder requires a tile grid with extent",
  56: "mapBrowserEvent must originate from a pointer event",
  57: "At least 2 conditions are required",
  59: "Invalid command found in the PBF",
  60: "Missing or invalid `size`",
  61: "Cannot determine IIIF Image API version from provided image information JSON",
  62: "A `WebGLArrayBuffer` must either be of type `ELEMENT_ARRAY_BUFFER` or `ARRAY_BUFFER`",
  64: "Layer opacity must be a number",
  66: "`forEachFeatureAtCoordinate` cannot be used on a WebGL layer if the hit detection logic has not been enabled. This is done by providing adequate shaders using the `hitVertexShader` and `hitFragmentShader` properties of `WebGLPointsLayerRenderer`",
  67: "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both",
  68: "A VectorTile source can only be rendered if it has a projection compatible with the view projection",
  69: "`width` or `height` cannot be provided together with `scale`"
};
class Fd extends Error {
  /**
   * @param {number} code Error code.
   */
  constructor(t) {
    const e = Dd[t];
    super(e), this.code = t, this.name = "AssertionError", this.message = e;
  }
}
const _f = Fd;
function oe(i, t) {
  if (!i)
    throw new _f(t);
}
function kd(i, t, e) {
  const n = Math.min.apply(null, i), r = Math.min.apply(null, t), s = Math.max.apply(null, i), o = Math.max.apply(null, t);
  return es(n, r, s, o, e);
}
function Bl(i, t, e) {
  return e ? (e[0] = i[0] - t, e[1] = i[1] - t, e[2] = i[2] + t, e[3] = i[3] + t, e) : [
    i[0] - t,
    i[1] - t,
    i[2] + t,
    i[3] + t
  ];
}
function Gd(i, t) {
  return t ? (t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t) : i.slice();
}
function ps(i, t, e) {
  let n, r;
  return t < i[0] ? n = i[0] - t : i[2] < t ? n = t - i[2] : n = 0, e < i[1] ? r = i[1] - e : i[3] < e ? r = e - i[3] : r = 0, n * n + r * r;
}
function Bd(i, t) {
  return zl(i, t[0], t[1]);
}
function Fs(i, t) {
  return i[0] <= t[0] && t[2] <= i[2] && i[1] <= t[1] && t[3] <= i[3];
}
function zl(i, t, e) {
  return i[0] <= t && t <= i[2] && i[1] <= e && e <= i[3];
}
function rl(i, t) {
  const e = i[0], n = i[1], r = i[2], s = i[3], o = t[0], a = t[1];
  let u = fe.UNKNOWN;
  return o < e ? u = u | fe.LEFT : o > r && (u = u | fe.RIGHT), a < n ? u = u | fe.BELOW : a > s && (u = u | fe.ABOVE), u === fe.UNKNOWN && (u = fe.INTERSECTING), u;
}
function ts() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function es(i, t, e, n, r) {
  return r ? (r[0] = i, r[1] = t, r[2] = e, r[3] = n, r) : [i, t, e, n];
}
function Su(i) {
  return es(1 / 0, 1 / 0, -1 / 0, -1 / 0, i);
}
function zd(i, t) {
  const e = i[0], n = i[1];
  return es(e, n, e, n, t);
}
function mf(i, t, e, n, r) {
  const s = Su(r);
  return vf(s, i, t, e, n);
}
function yf(i, t) {
  return i[0] == t[0] && i[2] == t[2] && i[1] == t[1] && i[3] == t[3];
}
function Vd(i, t) {
  return t[0] < i[0] && (i[0] = t[0]), t[2] > i[2] && (i[2] = t[2]), t[1] < i[1] && (i[1] = t[1]), t[3] > i[3] && (i[3] = t[3]), i;
}
function Xd(i, t) {
  t[0] < i[0] && (i[0] = t[0]), t[0] > i[2] && (i[2] = t[0]), t[1] < i[1] && (i[1] = t[1]), t[1] > i[3] && (i[3] = t[1]);
}
function vf(i, t, e, n, r) {
  for (; e < n; e += r)
    Yd(i, t[e], t[e + 1]);
  return i;
}
function Yd(i, t, e) {
  i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
}
function Ud(i, t) {
  let e;
  return e = t(Ef(i)), e || (e = t(xf(i)), e) || (e = t(If(i)), e) || (e = t(Cf(i)), e) ? e : !1;
}
function Ef(i) {
  return [i[0], i[1]];
}
function xf(i) {
  return [i[2], i[1]];
}
function Ys(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2];
}
function Wd(i, t, e, n, r) {
  const [s, o, a, u, l, c, h, f] = qd(
    i,
    t,
    e,
    n
  );
  return es(
    Math.min(s, a, l, h),
    Math.min(o, u, c, f),
    Math.max(s, a, l, h),
    Math.max(o, u, c, f),
    r
  );
}
function qd(i, t, e, n) {
  const r = t * n[0] / 2, s = t * n[1] / 2, o = Math.cos(e), a = Math.sin(e), u = r * o, l = r * a, c = s * o, h = s * a, f = i[0], g = i[1];
  return [
    f - u + h,
    g - l - c,
    f - u - h,
    g - l + c,
    f + u - h,
    g + l + c,
    f + u + h,
    g + l - c,
    f - u + h,
    g - l - c
  ];
}
function Vo(i) {
  return i[3] - i[1];
}
function Cf(i) {
  return [i[0], i[3]];
}
function If(i) {
  return [i[2], i[3]];
}
function On(i) {
  return i[2] - i[0];
}
function ti(i, t) {
  return i[0] <= t[2] && i[2] >= t[0] && i[1] <= t[3] && i[3] >= t[1];
}
function Sf(i) {
  return i[2] < i[0] || i[3] < i[1];
}
function Hd(i, t) {
  return t ? (t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t) : i;
}
function jd(i, t, e) {
  let n = !1;
  const r = rl(i, t), s = rl(i, e);
  if (r === fe.INTERSECTING || s === fe.INTERSECTING)
    n = !0;
  else {
    const o = i[0], a = i[1], u = i[2], l = i[3], c = t[0], h = t[1], f = e[0], g = e[1], d = (g - h) / (f - c);
    let _, p;
    s & fe.ABOVE && !(r & fe.ABOVE) && (_ = f - (g - l) / d, n = _ >= o && _ <= u), !n && s & fe.RIGHT && !(r & fe.RIGHT) && (p = g - (f - u) * d, n = p >= a && p <= l), !n && s & fe.BELOW && !(r & fe.BELOW) && (_ = f - (g - a) / d, n = _ >= o && _ <= u), !n && s & fe.LEFT && !(r & fe.LEFT) && (p = g - (f - o) * d, n = p >= a && p <= l);
  }
  return n;
}
function Zd(i, t, e, n) {
  if (Sf(i))
    return Su(e);
  let r = [];
  if (n > 1) {
    const a = i[2] - i[0], u = i[3] - i[1];
    for (let l = 0; l < n; ++l)
      r.push(
        i[0] + a * l / n,
        i[1],
        i[2],
        i[1] + u * l / n,
        i[2] - a * l / n,
        i[3],
        i[0],
        i[3] - u * l / n
      );
  } else
    r = [
      i[0],
      i[1],
      i[2],
      i[1],
      i[2],
      i[3],
      i[0],
      i[3]
    ];
  t(r, r, 2);
  const s = [], o = [];
  for (let a = 0, u = r.length; a < u; a += 2)
    s.push(r[a]), o.push(r[a + 1]);
  return kd(s, o, e);
}
function wf(i, t) {
  const e = t.getExtent(), n = Ys(i);
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const r = On(e), o = Math.floor(
      (n[0] - e[0]) / r
    ) * r;
    i[0] -= o, i[2] -= o;
  }
  return i;
}
function Kd(i, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(i[0]) || !isFinite(i[2]))
      return [[e[0], i[1], e[2], i[3]]];
    wf(i, t);
    const n = On(e);
    if (On(i) > n)
      return [[e[0], i[1], e[2], i[3]]];
    if (i[0] < e[0])
      return [
        [i[0] + n, i[1], e[2], i[3]],
        [e[0], i[1], i[2], i[3]]
      ];
    if (i[2] > e[2])
      return [
        [i[0], i[1], e[2], i[3]],
        [e[0], i[1], i[2] - n, i[3]]
      ];
  }
  return [i];
}
function Me(i, t, e) {
  return Math.min(Math.max(i, t), e);
}
function Jd(i, t, e, n, r, s) {
  const o = r - e, a = s - n;
  if (o !== 0 || a !== 0) {
    const u = ((i - e) * o + (t - n) * a) / (o * o + a * a);
    u > 1 ? (e = r, n = s) : u > 0 && (e += o * u, n += a * u);
  }
  return Qr(i, t, e, n);
}
function Qr(i, t, e, n) {
  const r = e - i, s = n - t;
  return r * r + s * s;
}
function Qd(i) {
  return i * Math.PI / 180;
}
function sl(i, t) {
  const e = i % t;
  return e * t < 0 ? e + t : e;
}
function cn(i, t, e) {
  return i + e * (t - i);
}
function $d(i, t) {
  const e = Math.pow(10, t);
  return Math.round(i * e) / e;
}
function tp(i, t) {
  return i[0] += +t[0], i[1] += +t[1], i;
}
function tu(i, t) {
  let e = !0;
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != t[n]) {
      e = !1;
      break;
    }
  return e;
}
function ep(i, t) {
  const e = Math.cos(t), n = Math.sin(t), r = i[0] * e - i[1] * n, s = i[1] * e + i[0] * n;
  return i[0] = r, i[1] = s, i;
}
function np(i, t) {
  if (t.canWrapX()) {
    const e = On(t.getExtent()), n = ip(i, t, e);
    n && (i[0] -= n * e);
  }
  return i;
}
function ip(i, t, e) {
  const n = t.getExtent();
  let r = 0;
  return t.canWrapX() && (i[0] < n[0] || i[0] > n[2]) && (e = e || On(n), r = Math.floor(
    (i[0] - n[0]) / e
  )), r;
}
const Rf = {
  info: 1,
  warn: 2,
  error: 3,
  none: 4
};
let rp = Rf.info;
function sp(...i) {
  rp > Rf.warn || console.warn(...i);
}
let ol = !0;
function Nf(i) {
  ol = !(i === void 0 ? !0 : i);
}
function Lf(i, t) {
  if (t !== void 0) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    t = t;
  } else
    t = i.slice();
  return t;
}
function op(i, t) {
  if (t !== void 0 && i !== t) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    i = t;
  }
  return i;
}
function ap(i) {
  Od(i.getCode(), i), $a(i, i, Lf);
}
function up(i) {
  i.forEach(ap);
}
function Us(i) {
  return typeof i == "string" ? Md(
    /** @type {string} */
    i
  ) : (
    /** @type {Projection} */
    i || null
  );
}
function Pc(i) {
  up(i), i.forEach(function(t) {
    i.forEach(function(e) {
      t !== e && $a(t, e, Lf);
    });
  });
}
function lp(i, t, e, n) {
  i.forEach(function(r) {
    t.forEach(function(s) {
      $a(r, s, e), $a(s, r, n);
    });
  });
}
function Vl(i, t) {
  return i ? typeof i == "string" ? Us(i) : (
    /** @type {Projection} */
    i
  ) : Us(t);
}
function Da(i, t) {
  return Nf(), bf(
    i,
    "EPSG:4326",
    t !== void 0 ? t : "EPSG:3857"
  );
}
function Tc(i, t) {
  const e = bf(
    i,
    t !== void 0 ? t : "EPSG:3857",
    "EPSG:4326"
  ), n = e[0];
  return (n < -180 || n > 180) && (e[0] = sl(n + 180, 360) - 180), e;
}
function cp(i, t) {
  const e = i.getCode(), n = t.getCode();
  let r = Ad(e, n);
  return r || (r = op), r;
}
function eu(i, t) {
  const e = Us(i), n = Us(t);
  return cp(e, n);
}
function bf(i, t, e) {
  return eu(t, e)(i, void 0, i.length);
}
function hp(i, t, e, n) {
  const r = eu(t, e);
  return Zd(i, r, void 0, n);
}
function Mc(i, t) {
  return i;
}
function lr(i, t) {
  return ol && !tu(i, [0, 0]) && i[0] >= -180 && i[0] <= 180 && i[1] >= -90 && i[1] <= 90 && (ol = !1, sp(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), i;
}
function Pf(i, t) {
  return i;
}
function To(i, t) {
  return i;
}
function fp() {
  Pc(Nc), Pc(bc), lp(
    bc,
    Nc,
    Ld,
    bd
  );
}
fp();
const ks = {
  /**
   * Triggered when an item is added to the collection.
   * @event module:ol/Collection.CollectionEvent#add
   * @api
   */
  ADD: "add",
  /**
   * Triggered when an item is removed from the collection.
   * @event module:ol/Collection.CollectionEvent#remove
   * @api
   */
  REMOVE: "remove"
}, Oc = {
  LENGTH: "length"
};
class Fa extends En {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(t, e, n) {
    super(t), this.element = e, this.index = n;
  }
}
let gp = class extends Gr {
  /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */
  constructor(t, e) {
    if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
      for (let n = 0, r = this.array_.length; n < r; ++n)
        this.assertUnique_(this.array_[n], n);
    this.updateLength_();
  }
  /**
   * Remove all elements from the collection.
   * @api
   */
  clear() {
    for (; this.getLength() > 0; )
      this.pop();
  }
  /**
   * Add elements to the collection.  This pushes each item in the provided array
   * to the end of the collection.
   * @param {!Array<T>} arr Array.
   * @return {Collection<T>} This collection.
   * @api
   */
  extend(t) {
    for (let e = 0, n = t.length; e < n; ++e)
      this.push(t[e]);
    return this;
  }
  /**
   * Iterate over each element, calling the provided callback.
   * @param {function(T, number, Array<T>): *} f The function to call
   *     for every element. This function takes 3 arguments (the element, the
   *     index and the array). The return value is ignored.
   * @api
   */
  forEach(t) {
    const e = this.array_;
    for (let n = 0, r = e.length; n < r; ++n)
      t(e[n], n, e);
  }
  /**
   * Get a reference to the underlying Array object. Warning: if the array
   * is mutated, no events will be dispatched by the collection, and the
   * collection's "length" property won't be in sync with the actual length
   * of the array.
   * @return {!Array<T>} Array.
   * @api
   */
  getArray() {
    return this.array_;
  }
  /**
   * Get the element at the provided index.
   * @param {number} index Index.
   * @return {T} Element.
   * @api
   */
  item(t) {
    return this.array_[t];
  }
  /**
   * Get the length of this collection.
   * @return {number} The length of the array.
   * @observable
   * @api
   */
  getLength() {
    return this.get(Oc.LENGTH);
  }
  /**
   * Insert an element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  insertAt(t, e) {
    if (t < 0 || t > this.getLength())
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e), this.array_.splice(t, 0, e), this.updateLength_(), this.dispatchEvent(
      new Fa(ks.ADD, e, t)
    );
  }
  /**
   * Remove the last element of the collection and return it.
   * Return `undefined` if the collection is empty.
   * @return {T|undefined} Element.
   * @api
   */
  pop() {
    return this.removeAt(this.getLength() - 1);
  }
  /**
   * Insert the provided element at the end of the collection.
   * @param {T} elem Element.
   * @return {number} New length of the collection.
   * @api
   */
  push(t) {
    this.unique_ && this.assertUnique_(t);
    const e = this.getLength();
    return this.insertAt(e, t), this.getLength();
  }
  /**
   * Remove the first occurrence of an element from the collection.
   * @param {T} elem Element.
   * @return {T|undefined} The removed element or undefined if none found.
   * @api
   */
  remove(t) {
    const e = this.array_;
    for (let n = 0, r = e.length; n < r; ++n)
      if (e[n] === t)
        return this.removeAt(n);
  }
  /**
   * Remove the element at the provided index and return it.
   * Return `undefined` if the collection does not contain this index.
   * @param {number} index Index.
   * @return {T|undefined} Value.
   * @api
   */
  removeAt(t) {
    if (t < 0 || t >= this.getLength())
      return;
    const e = this.array_[t];
    return this.array_.splice(t, 1), this.updateLength_(), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Fa(ks.REMOVE, e, t)
    ), e;
  }
  /**
   * Set the element at the provided index.
   * @param {number} index Index.
   * @param {T} elem Element.
   * @api
   */
  setAt(t, e) {
    const n = this.getLength();
    if (t >= n) {
      this.insertAt(t, e);
      return;
    }
    if (t < 0)
      throw new Error("Index out of bounds: " + t);
    this.unique_ && this.assertUnique_(e, t);
    const r = this.array_[t];
    this.array_[t] = e, this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Fa(ks.REMOVE, r, t)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Fa(ks.ADD, e, t)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(Oc.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(t, e) {
    for (let n = 0, r = this.array_.length; n < r; ++n)
      if (this.array_[n] === t && n !== e)
        throw new _f(58);
  }
};
const dp = gp;
new Array(6);
function xr() {
  return [1, 0, 0, 1, 0, 0];
}
function pp(i, t, e, n, r, s, o) {
  return i[0] = t, i[1] = e, i[2] = n, i[3] = r, i[4] = s, i[5] = o, i;
}
function _p(i, t) {
  return i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i;
}
function Ke(i, t) {
  const e = t[0], n = t[1];
  return t[0] = i[0] * e + i[2] * n + i[4], t[1] = i[1] * e + i[3] * n + i[5], t;
}
function mp(i, t, e) {
  return pp(i, t, 0, 0, e, 0, 0);
}
function _a(i, t, e, n, r, s, o, a) {
  const u = Math.sin(s), l = Math.cos(s);
  return i[0] = n * l, i[1] = r * u, i[2] = -n * u, i[3] = r * l, i[4] = o * n * l - a * n * u + t, i[5] = o * r * u + a * r * l + e, i;
}
function yp(i, t) {
  const e = vp(t);
  oe(e !== 0, 32);
  const n = t[0], r = t[1], s = t[2], o = t[3], a = t[4], u = t[5];
  return i[0] = o / e, i[1] = -r / e, i[2] = -s / e, i[3] = n / e, i[4] = (s * u - o * a) / e, i[5] = -(n * u - r * a) / e, i;
}
function vp(i) {
  return i[0] * i[3] - i[1] * i[2];
}
let Ac;
function Ep(i) {
  const t = "matrix(" + i.join(", ") + ")";
  if (Gl)
    return t;
  const e = Ac || (Ac = document.createElement("div"));
  return e.style.transform = t, e.style.transform;
}
const xp = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, Cp = /^([a-z]*)$|^hsla?\(.*\)$/i;
function Tf(i) {
  return typeof i == "string" ? i : Mf(i);
}
function Ip(i) {
  const t = document.createElement("div");
  if (t.style.color = i, t.style.color !== "") {
    document.body.appendChild(t);
    const e = getComputedStyle(t).color;
    return document.body.removeChild(t), e;
  }
  return "";
}
const Sp = function() {
  const t = {};
  let e = 0;
  return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function(n) {
      let r;
      if (t.hasOwnProperty(n))
        r = t[n];
      else {
        if (e >= 1024) {
          let s = 0;
          for (const o in t)
            s++ & 3 || (delete t[o], --e);
        }
        r = wp(n), t[n] = r, ++e;
      }
      return r;
    }
  );
}();
function nu(i) {
  return Array.isArray(i) ? i : Sp(i);
}
function wp(i) {
  let t, e, n, r, s;
  if (Cp.exec(i) && (i = Ip(i)), xp.exec(i)) {
    const o = i.length - 1;
    let a;
    o <= 4 ? a = 1 : a = 2;
    const u = o === 4 || o === 8;
    t = parseInt(i.substr(1 + 0 * a, a), 16), e = parseInt(i.substr(1 + 1 * a, a), 16), n = parseInt(i.substr(1 + 2 * a, a), 16), u ? r = parseInt(i.substr(1 + 3 * a, a), 16) : r = 255, a == 1 && (t = (t << 4) + t, e = (e << 4) + e, n = (n << 4) + n, u && (r = (r << 4) + r)), s = [t, e, n, r / 255];
  } else
    i.startsWith("rgba(") ? (s = i.slice(5, -1).split(",").map(Number), Dc(s)) : i.startsWith("rgb(") ? (s = i.slice(4, -1).split(",").map(Number), s.push(1), Dc(s)) : oe(!1, 14);
  return s;
}
function Dc(i) {
  return i[0] = Me(i[0] + 0.5 | 0, 0, 255), i[1] = Me(i[1] + 0.5 | 0, 0, 255), i[2] = Me(i[2] + 0.5 | 0, 0, 255), i[3] = Me(i[3], 0, 1), i;
}
function Mf(i) {
  let t = i[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = i[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let n = i[2];
  n != (n | 0) && (n = n + 0.5 | 0);
  const r = i[3] === void 0 ? 1 : Math.round(i[3] * 100) / 100;
  return "rgba(" + t + "," + e + "," + n + "," + r + ")";
}
class Rp {
  constructor() {
    this.cache_ = {}, this.cacheSize_ = 0, this.maxCacheSize_ = 32;
  }
  /**
   * FIXME empty description for jsdoc
   */
  clear() {
    this.cache_ = {}, this.cacheSize_ = 0;
  }
  /**
   * @return {boolean} Can expire cache.
   */
  canExpireCache() {
    return this.cacheSize_ > this.maxCacheSize_;
  }
  /**
   * FIXME empty description for jsdoc
   */
  expire() {
    if (this.canExpireCache()) {
      let t = 0;
      for (const e in this.cache_) {
        const n = this.cache_[e];
        !(t++ & 3) && !n.hasListener() && (delete this.cache_[e], --this.cacheSize_);
      }
    }
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @return {import("./IconImage.js").default} Icon image.
   */
  get(t, e, n) {
    const r = Fc(t, e, n);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */
  set(t, e, n, r) {
    const s = Fc(t, e, n);
    this.cache_[s] = r, ++this.cacheSize_;
  }
  /**
   * Set the cache size of the icon cache. Default is `32`. Change this value when
   * your map uses more than 32 different icon images and you are not caching icon
   * styles on the application level.
   * @param {number} maxCacheSize Cache max size.
   * @api
   */
  setSize(t) {
    this.maxCacheSize_ = t, this.expire();
  }
}
function Fc(i, t, e) {
  const n = e ? Tf(e) : "null";
  return t + ":" + i + ":" + n;
}
const kc = new Rp(), pt = {
  OPACITY: "opacity",
  VISIBLE: "visible",
  EXTENT: "extent",
  Z_INDEX: "zIndex",
  MAX_RESOLUTION: "maxResolution",
  MIN_RESOLUTION: "minResolution",
  MAX_ZOOM: "maxZoom",
  MIN_ZOOM: "minZoom",
  SOURCE: "source",
  MAP: "map"
};
class Np extends Gr {
  /**
   * @param {Options} options Layer options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[pt.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, oe(typeof e[pt.OPACITY] == "number", 64), e[pt.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[pt.Z_INDEX] = t.zIndex, e[pt.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[pt.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[pt.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[pt.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
  }
  /**
   * Get the background for this layer.
   * @return {BackgroundColor|false} Layer background.
   */
  getBackground() {
    return this.background_;
  }
  /**
   * @return {string} CSS class name.
   */
  getClassName() {
    return this.className_;
  }
  /**
   * This method is not meant to be called by layers or layer renderers because the state
   * is incorrect if the layer is included in a layer group.
   *
   * @param {boolean} [managed] Layer is managed.
   * @return {import("./Layer.js").State} Layer state.
   */
  getLayerState(t) {
    const e = this.state_ || /** @type {?} */
    {
      layer: this,
      managed: t === void 0 ? !0 : t
    }, n = this.getZIndex();
    return e.opacity = Me(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return yt();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return yt();
  }
  /**
   * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
   * will be visible regardless of extent.
   * @return {import("../extent.js").Extent|undefined} The layer extent.
   * @observable
   * @api
   */
  getExtent() {
    return (
      /** @type {import("../extent.js").Extent|undefined} */
      this.get(pt.EXTENT)
    );
  }
  /**
   * Return the maximum resolution of the layer.
   * @return {number} The maximum resolution of the layer.
   * @observable
   * @api
   */
  getMaxResolution() {
    return (
      /** @type {number} */
      this.get(pt.MAX_RESOLUTION)
    );
  }
  /**
   * Return the minimum resolution of the layer.
   * @return {number} The minimum resolution of the layer.
   * @observable
   * @api
   */
  getMinResolution() {
    return (
      /** @type {number} */
      this.get(pt.MIN_RESOLUTION)
    );
  }
  /**
   * Return the minimum zoom level of the layer.
   * @return {number} The minimum zoom level of the layer.
   * @observable
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.get(pt.MIN_ZOOM)
    );
  }
  /**
   * Return the maximum zoom level of the layer.
   * @return {number} The maximum zoom level of the layer.
   * @observable
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.get(pt.MAX_ZOOM)
    );
  }
  /**
   * Return the opacity of the layer (between 0 and 1).
   * @return {number} The opacity of the layer.
   * @observable
   * @api
   */
  getOpacity() {
    return (
      /** @type {number} */
      this.get(pt.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return yt();
  }
  /**
   * Return the value of this layer's `visible` property. To find out whether the layer
   * is visible on a map, use `isVisible()` instead.
   * @return {boolean} The value of the `visible` property of the layer.
   * @observable
   * @api
   */
  getVisible() {
    return (
      /** @type {boolean} */
      this.get(pt.VISIBLE)
    );
  }
  /**
   * Return the Z-index of the layer, which is used to order layers before
   * rendering. The default Z-index is 0.
   * @return {number} The Z-index of the layer.
   * @observable
   * @api
   */
  getZIndex() {
    return (
      /** @type {number} */
      this.get(pt.Z_INDEX)
    );
  }
  /**
   * Sets the background color.
   * @param {BackgroundColor} [background] Background color.
   */
  setBackground(t) {
    this.background_ = t, this.changed();
  }
  /**
   * Set the extent at which the layer is visible.  If `undefined`, the layer
   * will be visible at all extents.
   * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
   * @observable
   * @api
   */
  setExtent(t) {
    this.set(pt.EXTENT, t);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(t) {
    this.set(pt.MAX_RESOLUTION, t);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(t) {
    this.set(pt.MIN_RESOLUTION, t);
  }
  /**
   * Set the maximum zoom (exclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} maxZoom The maximum zoom of the layer.
   * @observable
   * @api
   */
  setMaxZoom(t) {
    this.set(pt.MAX_ZOOM, t);
  }
  /**
   * Set the minimum zoom (inclusive) at which the layer is visible.
   * Note that the zoom levels for layer visibility are based on the
   * view zoom level, which may be different from a tile source zoom level.
   * @param {number} minZoom The minimum zoom of the layer.
   * @observable
   * @api
   */
  setMinZoom(t) {
    this.set(pt.MIN_ZOOM, t);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(t) {
    oe(typeof t == "number", 64), this.set(pt.OPACITY, t);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(t) {
    this.set(pt.VISIBLE, t);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(t) {
    this.set(pt.Z_INDEX, t);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const Lp = Np, al = {
  /**
   * Triggered before a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#prerender
   * @api
   */
  PRERENDER: "prerender",
  /**
   * Triggered after a layer is rendered.
   * @event module:ol/render/Event~RenderEvent#postrender
   * @api
   */
  POSTRENDER: "postrender",
  /**
   * Triggered before layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#precompose
   * @api
   */
  PRECOMPOSE: "precompose",
  /**
   * Triggered after layers are composed.  When dispatched by the map, the event object will not have
   * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
   * WebGL layers currently dispatch this event.
   * @event module:ol/render/Event~RenderEvent#postcompose
   * @api
   */
  POSTCOMPOSE: "postcompose",
  /**
   * Triggered when rendering is complete, i.e. all sources and tiles have
   * finished loading for the current viewport, and all tiles are faded in.
   * The event object will not have a `context` set.
   * @event module:ol/render/Event~RenderEvent#rendercomplete
   * @api
   */
  RENDERCOMPLETE: "rendercomplete"
}, bn = {
  ANIMATING: 0,
  INTERACTING: 1
}, Jn = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, bp = 256;
function Gc(i, t, e) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(n, r, s, o, a) {
      if (!n)
        return;
      if (!r && !t)
        return n;
      const u = t ? 0 : s[0] * r, l = t ? 0 : s[1] * r, c = a ? a[0] : 0, h = a ? a[1] : 0;
      let f = i[0] + u / 2 + c, g = i[2] - u / 2 + c, d = i[1] + l / 2 + h, _ = i[3] - l / 2 + h;
      f > g && (f = (g + f) / 2, g = f), d > _ && (d = (_ + d) / 2, _ = d);
      let p = Me(n[0], f, g), m = Me(n[1], d, _);
      if (o && e && r) {
        const y = 30 * r;
        p += -y * Math.log(1 + Math.max(0, f - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - g) / y), m += -y * Math.log(1 + Math.max(0, d - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - _) / y);
      }
      return [p, m];
    }
  );
}
function Pp(i) {
  return i;
}
function Xl(i, t, e, n) {
  const r = On(t) / e[0], s = Vo(t) / e[1];
  return n ? Math.min(i, Math.max(r, s)) : Math.min(i, Math.min(r, s));
}
function Yl(i, t, e) {
  let n = Math.min(i, t);
  const r = 50;
  return n *= Math.log(1 + r * Math.max(0, i / t - 1)) / r + 1, e && (n = Math.max(n, e), n /= Math.log(1 + r * Math.max(0, e / i - 1)) / r + 1), Me(n, e / 2, t * 2);
}
function Tp(i, t, e, n) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, s, o, a) {
    if (r !== void 0) {
      const u = i[0], l = i[i.length - 1], c = e ? Xl(
        u,
        e,
        o,
        n
      ) : u;
      if (a)
        return t ? Yl(
          r,
          c,
          l
        ) : Me(r, l, c);
      const h = Math.min(c, r), f = Math.floor(cf(i, h, s));
      return i[f] > c && f < i.length - 1 ? i[f + 1] : i[f];
    }
  };
}
function Mp(i, t, e, n, r, s) {
  return n = n !== void 0 ? n : !0, e = e !== void 0 ? e : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, u, l) {
    if (o !== void 0) {
      const c = r ? Xl(
        t,
        r,
        u,
        s
      ) : t;
      if (l)
        return n ? Yl(
          o,
          c,
          e
        ) : Me(o, e, c);
      const h = 1e-9, f = Math.ceil(
        Math.log(t / c) / Math.log(i) - h
      ), g = -a * (0.5 - h) + 0.5, d = Math.min(c, o), _ = Math.floor(
        Math.log(t / d) / Math.log(i) + g
      ), p = Math.max(f, _), m = t / Math.pow(i, p);
      return Me(m, e, c);
    }
  };
}
function Bc(i, t, e, n, r) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, u) {
    if (s !== void 0) {
      const l = n ? Xl(
        i,
        n,
        a,
        r
      ) : i;
      return !e || !u ? Me(s, t, l) : Yl(
        s,
        l,
        t
      );
    }
  };
}
function Op(i) {
  if (i !== void 0)
    return 0;
}
function zc(i) {
  if (i !== void 0)
    return i;
}
function Ap(i) {
  const t = 2 * Math.PI / i;
  return (
    /**
     * @param {number|undefined} rotation Rotation.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @return {number|undefined} Rotation.
     */
    function(e, n) {
      if (n)
        return e;
      if (e !== void 0)
        return e = Math.floor(e / t + 0.5) * t, e;
    }
  );
}
function Dp(i) {
  return i = i || Qd(5), /**
   * @param {number|undefined} rotation Rotation.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Rotation.
   */
  function(t, e) {
    if (e)
      return t;
    if (t !== void 0)
      return Math.abs(t) <= i ? 0 : t;
  };
}
function Fp(i) {
  return Math.pow(i, 3);
}
function kp(i) {
  return 1 - Fp(1 - i);
}
function Gp(i) {
  return 3 * i * i - 2 * i * i * i;
}
function $r(i, t, e, n, r, s) {
  s = s || [];
  let o = 0;
  for (let a = t; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    s[o++] = r[0] * u + r[2] * l + r[4], s[o++] = r[1] * u + r[3] * l + r[5];
  }
  return s && s.length != o && (s.length = o), s;
}
function Of(i, t, e, n, r, s, o) {
  o = o || [];
  const a = Math.cos(r), u = Math.sin(r), l = s[0], c = s[1];
  let h = 0;
  for (let f = t; f < e; f += n) {
    const g = i[f] - l, d = i[f + 1] - c;
    o[h++] = l + g * a - d * u, o[h++] = c + g * u + d * a;
    for (let _ = f + 2; _ < f + n; ++_)
      o[h++] = i[_];
  }
  return o && o.length != h && (o.length = h), o;
}
function Bp(i, t, e, n, r, s, o, a) {
  a = a || [];
  const u = o[0], l = o[1];
  let c = 0;
  for (let h = t; h < e; h += n) {
    const f = i[h] - u, g = i[h + 1] - l;
    a[c++] = u + r * f, a[c++] = l + s * g;
    for (let d = h + 2; d < h + n; ++d)
      a[c++] = i[d];
  }
  return a && a.length != c && (a.length = c), a;
}
function zp(i, t, e, n, r, s, o) {
  o = o || [];
  let a = 0;
  for (let u = t; u < e; u += n) {
    o[a++] = i[u] + r, o[a++] = i[u + 1] + s;
    for (let l = u + 2; l < u + n; ++l)
      o[a++] = i[l];
  }
  return o && o.length != a && (o.length = a), o;
}
const Vc = xr();
let Vp = class extends Gr {
  constructor() {
    super(), this.extent_ = ts(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = gd(function(t, e, n) {
      if (!n)
        return this.getSimplifiedGeometry(e);
      const r = this.clone();
      return r.applyTransform(n), r.getSimplifiedGeometry(e);
    });
  }
  /**
   * Get a transformed and simplified version of the geometry.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
   * @return {Geometry} Simplified geometry.
   */
  simplifyTransformed(t, e) {
    return this.simplifyTransformedInternal(
      this.getRevision(),
      t,
      e
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @abstract
   * @return {!Geometry} Clone.
   */
  clone() {
    return yt();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return yt();
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    const n = this.getClosestPoint([t, e]);
    return n[0] === t && n[1] === e;
  }
  /**
   * Return the closest point of the geometry to the passed point as
   * {@link module:ol/coordinate~Coordinate coordinate}.
   * @param {import("../coordinate.js").Coordinate} point Point.
   * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
   * @return {import("../coordinate.js").Coordinate} Closest point.
   * @api
   */
  getClosestPoint(t, e) {
    return e = e || [NaN, NaN], this.closestPointXY(t[0], t[1], e, 1 / 0), e;
  }
  /**
   * Returns true if this geometry includes the specified coordinate. If the
   * coordinate is on the boundary of the geometry, returns false.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {boolean} Contains coordinate.
   * @api
   */
  intersectsCoordinate(t) {
    return this.containsXY(t[0], t[1]);
  }
  /**
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return yt();
  }
  /**
   * Get the extent of the geometry.
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} extent Extent.
   * @api
   */
  getExtent(t) {
    if (this.extentRevision_ != this.getRevision()) {
      const e = this.computeExtent(this.extent_);
      (isNaN(e[0]) || isNaN(e[1])) && Su(e), this.extentRevision_ = this.getRevision();
    }
    return Hd(this.extent_, t);
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(t, e) {
    yt();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(t, e, n) {
    yt();
  }
  /**
   * Create a simplified version of this geometry.  For linestrings, this uses
   * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
   * algorithm.  For polygons, a quantization-based
   * simplification is used to preserve topology.
   * @param {number} tolerance The tolerance distance for simplification.
   * @return {Geometry} A new, simplified version of the original geometry.
   * @api
   */
  simplify(t) {
    return this.getSimplifiedGeometry(t * t);
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker
   * algorithm.
   * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
   * @abstract
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Geometry} Simplified geometry.
   */
  getSimplifiedGeometry(t) {
    return yt();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return yt();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @abstract
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   */
  applyTransform(t) {
    yt();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(t) {
    return yt();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @abstract
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(t, e) {
    yt();
  }
  /**
   * Transform each coordinate of the geometry from one coordinate reference
   * system to another. The geometry is modified in place.
   * For example, a line will be transformed to a line and a circle to a circle.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   *
   * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
   *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
   * @return {Geometry} This geometry.  Note that original geometry is
   *     modified in place.
   * @api
   */
  transform(t, e) {
    const n = Us(t), r = n.getUnits() == "tile-pixels" ? function(s, o, a) {
      const u = n.getExtent(), l = n.getWorldExtent(), c = Vo(l) / Vo(u);
      return _a(
        Vc,
        l[0],
        l[3],
        c,
        -c,
        0,
        0,
        0
      ), $r(
        s,
        0,
        s.length,
        a,
        Vc,
        o
      ), eu(n, e)(
        s,
        o,
        a
      );
    } : eu(n, e);
    return this.applyTransform(r), this;
  }
};
const Af = Vp;
class Xp extends Af {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates = null;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return mf(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  /**
   * @abstract
   * @return {Array<*> | null} Coordinates.
   */
  getCoordinates() {
    return yt();
  }
  /**
   * Return the first coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} First coordinate.
   * @api
   */
  getFirstCoordinate() {
    return this.flatCoordinates.slice(0, this.stride);
  }
  /**
   * @return {Array<number>} Flat coordinates.
   */
  getFlatCoordinates() {
    return this.flatCoordinates;
  }
  /**
   * Return the last coordinate of the geometry.
   * @return {import("../coordinate.js").Coordinate} Last point.
   * @api
   */
  getLastCoordinate() {
    return this.flatCoordinates.slice(
      this.flatCoordinates.length - this.stride
    );
  }
  /**
   * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
   * @return {import("./Geometry.js").GeometryLayout} Layout.
   * @api
   */
  getLayout() {
    return this.layout;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   */
  getSimplifiedGeometry(t) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t <= this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const e = this.getSimplifiedGeometryInternal(t);
    return e.getFlatCoordinates().length < this.flatCoordinates.length ? e : (this.simplifiedGeometryMaxMinSquaredTolerance = t, this);
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {SimpleGeometry} Simplified geometry.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    return this;
  }
  /**
   * @return {number} Stride.
   */
  getStride() {
    return this.stride;
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout} layout Layout.
   * @param {Array<number>} flatCoordinates Flat coordinates.
   */
  setFlatCoordinates(t, e) {
    this.stride = Xc(t), this.layout = t, this.flatCoordinates = e;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(t, e) {
    yt();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(t, e, n) {
    let r;
    if (t)
      r = Xc(t);
    else {
      for (let s = 0; s < n; ++s) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = /** @type {Array} */
        e[0];
      }
      r = e.length, t = Yp(r);
    }
    this.layout = t, this.stride = r;
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */
  applyTransform(t) {
    this.flatCoordinates && (t(this.flatCoordinates, this.flatCoordinates, this.stride), this.changed());
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in counter-clockwise radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(t, e) {
    const n = this.getFlatCoordinates();
    if (n) {
      const r = this.getStride();
      Of(
        n,
        0,
        n.length,
        r,
        t,
        e,
        n
      ), this.changed();
    }
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(t, e, n) {
    e === void 0 && (e = t), n || (n = Ys(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      Bp(
        r,
        0,
        r.length,
        s,
        t,
        e,
        n,
        r
      ), this.changed();
    }
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(t, e) {
    const n = this.getFlatCoordinates();
    if (n) {
      const r = this.getStride();
      zp(
        n,
        0,
        n.length,
        r,
        t,
        e,
        n
      ), this.changed();
    }
  }
}
function Yp(i) {
  let t;
  return i == 2 ? t = "XY" : i == 3 ? t = "XYZ" : i == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  t;
}
function Xc(i) {
  let t;
  return i == "XY" ? t = 2 : i == "XYZ" || i == "XYM" ? t = 3 : i == "XYZM" && (t = 4), /** @type {number} */
  t;
}
function Up(i, t, e) {
  const n = i.getFlatCoordinates();
  if (!n)
    return null;
  const r = i.getStride();
  return $r(
    n,
    0,
    n.length,
    r,
    t,
    e
  );
}
const _s = Xp;
function Yc(i, t, e, n, r, s, o) {
  const a = i[t], u = i[t + 1], l = i[e] - a, c = i[e + 1] - u;
  let h;
  if (l === 0 && c === 0)
    h = t;
  else {
    const f = ((r - a) * l + (s - u) * c) / (l * l + c * c);
    if (f > 1)
      h = e;
    else if (f > 0) {
      for (let g = 0; g < n; ++g)
        o[g] = cn(
          i[t + g],
          i[e + g],
          f
        );
      o.length = n;
      return;
    } else
      h = t;
  }
  for (let f = 0; f < n; ++f)
    o[f] = i[h + f];
  o.length = n;
}
function Ul(i, t, e, n, r) {
  let s = i[t], o = i[t + 1];
  for (t += n; t < e; t += n) {
    const a = i[t], u = i[t + 1], l = Qr(s, o, a, u);
    l > r && (r = l), s = a, o = u;
  }
  return r;
}
function Wl(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = Ul(i, t, a, n, r), t = a;
  }
  return r;
}
function Wp(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = Wl(i, t, a, n, r), t = a[a.length - 1];
  }
  return r;
}
function ql(i, t, e, n, r, s, o, a, u, l, c) {
  if (t == e)
    return l;
  let h, f;
  if (r === 0) {
    if (f = Qr(
      o,
      a,
      i[t],
      i[t + 1]
    ), f < l) {
      for (h = 0; h < n; ++h)
        u[h] = i[t + h];
      return u.length = n, f;
    }
    return l;
  }
  c = c || [NaN, NaN];
  let g = t + n;
  for (; g < e; )
    if (Yc(
      i,
      g - n,
      g,
      n,
      o,
      a,
      c
    ), f = Qr(o, a, c[0], c[1]), f < l) {
      for (l = f, h = 0; h < n; ++h)
        u[h] = c[h];
      u.length = n, g += n;
    } else
      g += n * Math.max(
        (Math.sqrt(f) - Math.sqrt(l)) / r | 0,
        1
      );
  if (s && (Yc(
    i,
    e - n,
    t,
    n,
    o,
    a,
    c
  ), f = Qr(o, a, c[0], c[1]), f < l)) {
    for (l = f, h = 0; h < n; ++h)
      u[h] = c[h];
    u.length = n;
  }
  return l;
}
function Hl(i, t, e, n, r, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = ql(
      i,
      t,
      g,
      n,
      r,
      s,
      o,
      a,
      u,
      l,
      c
    ), t = g;
  }
  return l;
}
function qp(i, t, e, n, r, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = Hl(
      i,
      t,
      g,
      n,
      r,
      s,
      o,
      a,
      u,
      l,
      c
    ), t = g[g.length - 1];
  }
  return l;
}
function Hp(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r)
    i[t++] = e[r];
  return t;
}
function wu(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r) {
    const o = e[r];
    for (let a = 0; a < n; ++a)
      i[t++] = o[a];
  }
  return t;
}
function jl(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = wu(
      i,
      t,
      e[o],
      n
    );
    r[s++] = u, t = u;
  }
  return r.length = s, r;
}
function jp(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = jl(
      i,
      t,
      e[o],
      n,
      r[s]
    );
    u.length === 0 && (u[0] = t), r[s++] = u, t = u[u.length - 1];
  }
  return r.length = s, r;
}
function Zl(i, t, e, n, r, s, o) {
  const a = (e - t) / n;
  if (a < 3) {
    for (; t < e; t += n)
      s[o++] = i[t], s[o++] = i[t + 1];
    return o;
  }
  const u = new Array(a);
  u[0] = 1, u[a - 1] = 1;
  const l = [t, e - n];
  let c = 0;
  for (; l.length > 0; ) {
    const h = l.pop(), f = l.pop();
    let g = 0;
    const d = i[f], _ = i[f + 1], p = i[h], m = i[h + 1];
    for (let y = f + n; y < h; y += n) {
      const v = i[y], C = i[y + 1], E = Jd(v, C, d, _, p, m);
      E > g && (c = y, g = E);
    }
    g > r && (u[(c - t) / n] = 1, f + n < c && l.push(f, c), c + n < h && l.push(c, h));
  }
  for (let h = 0; h < a; ++h)
    u[h] && (s[o++] = i[t + h * n], s[o++] = i[t + h * n + 1]);
  return o;
}
function Zp(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = Zl(
      i,
      t,
      c,
      n,
      r,
      s,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function qr(i, t) {
  return t * Math.round(i / t);
}
function Kp(i, t, e, n, r, s, o) {
  if (t == e)
    return o;
  let a = qr(i[t], r), u = qr(i[t + 1], r);
  t += n, s[o++] = a, s[o++] = u;
  let l, c;
  do
    if (l = qr(i[t], r), c = qr(i[t + 1], r), t += n, t == e)
      return s[o++] = l, s[o++] = c, o;
  while (l == a && c == u);
  for (; t < e; ) {
    const h = qr(i[t], r), f = qr(i[t + 1], r);
    if (t += n, h == l && f == c)
      continue;
    const g = l - a, d = c - u, _ = h - a, p = f - u;
    if (g * p == d * _ && (g < 0 && _ < g || g == _ || g > 0 && _ > g) && (d < 0 && p < d || d == p || d > 0 && p > d)) {
      l = h, c = f;
      continue;
    }
    s[o++] = l, s[o++] = c, a = l, u = c, l = h, c = f;
  }
  return s[o++] = l, s[o++] = c, o;
}
function Df(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = Kp(
      i,
      t,
      c,
      n,
      r,
      s,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function Jp(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u], h = [];
    o = Df(
      i,
      t,
      c,
      n,
      r,
      s,
      o,
      h
    ), a.push(h), t = c[c.length - 1];
  }
  return o;
}
function mr(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = t; o < e; o += n)
    r[s++] = i.slice(o, o + n);
  return r.length = s, r;
}
function Xo(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = mr(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u;
  }
  return r.length = s, r;
}
function ul(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = u.length === 1 && u[0] === t ? [] : Xo(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u[u.length - 1];
  }
  return r.length = s, r;
}
function Ff(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += o * a - s * u, s = a, o = u;
  }
  return r / 2;
}
function kf(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += Ff(i, t, a, n), t = a;
  }
  return r;
}
function Qp(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += kf(i, t, a, n), t = a[a.length - 1];
  }
  return r;
}
let $p = class ll extends _s {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      t,
      e
    );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LinearRing} Clone.
   * @api
   */
  clone() {
    return new ll(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < ps(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ul(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), ql(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      r
    ));
  }
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return Ff(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinates of the linear ring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return mr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LinearRing} Simplified LinearRing.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = Zl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new ll(e, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "LinearRing";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return !1;
  }
  /**
   * Set the coordinates of the linear ring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = wu(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const Uc = $p;
let t_ = class Gf extends _s {
  /**
   * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.setCoordinates(t, e);
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Point} Clone.
   * @api
   */
  clone() {
    const t = new Gf(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    const s = this.flatCoordinates, o = Qr(
      t,
      e,
      s[0],
      s[1]
    );
    if (o < r) {
      const a = this.stride;
      for (let u = 0; u < a; ++u)
        n[u] = s[u];
      return n.length = a, o;
    }
    return r;
  }
  /**
   * Return the coordinate of the point.
   * @return {import("../coordinate.js").Coordinate} Coordinates.
   * @api
   */
  getCoordinates() {
    return this.flatCoordinates ? this.flatCoordinates.slice() : [];
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return zd(this.flatCoordinates, t);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "Point";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return zl(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Hp(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const zs = t_;
function e_(i, t, e, n, r) {
  return !Ud(
    r,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !Hr(
        i,
        t,
        e,
        n,
        o[0],
        o[1]
      );
    }
  );
}
function Hr(i, t, e, n, r, s) {
  let o = 0, a = i[e - n], u = i[e - n + 1];
  for (; t < e; t += n) {
    const l = i[t], c = i[t + 1];
    u <= s ? c > s && (l - a) * (s - u) - (r - a) * (c - u) > 0 && o++ : c <= s && (l - a) * (s - u) - (r - a) * (c - u) < 0 && o--, a = l, u = c;
  }
  return o !== 0;
}
function Kl(i, t, e, n, r, s) {
  if (e.length === 0 || !Hr(i, t, e[0], n, r, s))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (Hr(i, e[o - 1], e[o], n, r, s))
      return !1;
  return !0;
}
function n_(i, t, e, n, r, s) {
  if (e.length === 0)
    return !1;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    if (Kl(i, t, u, n, r, s))
      return !0;
    t = u[u.length - 1];
  }
  return !1;
}
function Bf(i, t, e, n, r, s, o) {
  let a, u, l, c, h, f, g;
  const d = r[s + 1], _ = [];
  for (let y = 0, v = e.length; y < v; ++y) {
    const C = e[y];
    for (c = i[C - n], f = i[C - n + 1], a = t; a < C; a += n)
      h = i[a], g = i[a + 1], (d <= f && g <= d || f <= d && d <= g) && (l = (d - f) / (g - f) * (h - c) + c, _.push(l)), c = h, f = g;
  }
  let p = NaN, m = -1 / 0;
  for (_.sort(Bo), c = _[0], a = 1, u = _.length; a < u; ++a) {
    h = _[a];
    const y = Math.abs(h - c);
    y > m && (l = (c + h) / 2, Kl(i, t, e, n, l, d) && (p = l, m = y)), c = h;
  }
  return isNaN(p) && (p = r[s]), o ? (o.push(p, d, m), o) : [p, d, m];
}
function i_(i, t, e, n, r) {
  let s = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = Bf(
      i,
      t,
      u,
      n,
      r,
      2 * o,
      s
    ), t = u[u.length - 1];
  }
  return s;
}
function zf(i, t, e, n, r) {
  let s;
  for (t += n; t < e; t += n)
    if (s = r(
      i.slice(t - n, t),
      i.slice(t, t + n)
    ), s)
      return s;
  return !1;
}
function Ru(i, t, e, n, r) {
  const s = vf(
    ts(),
    i,
    t,
    e,
    n
  );
  return ti(r, s) ? Fs(r, s) || s[0] >= r[0] && s[2] <= r[2] || s[1] >= r[1] && s[3] <= r[3] ? !0 : zf(
    i,
    t,
    e,
    n,
    /**
     * @param {import("../../coordinate.js").Coordinate} point1 Start point.
     * @param {import("../../coordinate.js").Coordinate} point2 End point.
     * @return {boolean} `true` if the segment and the extent intersect,
     *     `false` otherwise.
     */
    function(o, a) {
      return jd(r, o, a);
    }
  ) : !1;
}
function r_(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    if (Ru(i, t, e[s], n, r))
      return !0;
    t = e[s];
  }
  return !1;
}
function s_(i, t, e, n, r) {
  return !!(Ru(i, t, e, n, r) || Hr(
    i,
    t,
    e,
    n,
    r[0],
    r[1]
  ) || Hr(
    i,
    t,
    e,
    n,
    r[0],
    r[3]
  ) || Hr(
    i,
    t,
    e,
    n,
    r[2],
    r[1]
  ) || Hr(
    i,
    t,
    e,
    n,
    r[2],
    r[3]
  ));
}
function Vf(i, t, e, n, r) {
  if (!s_(i, t, e[0], n, r))
    return !1;
  if (e.length === 1)
    return !0;
  for (let s = 1, o = e.length; s < o; ++s)
    if (e_(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ) && !Ru(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ))
      return !1;
  return !0;
}
function o_(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (Vf(i, t, a, n, r))
      return !0;
    t = a[a.length - 1];
  }
  return !1;
}
function a_(i, t, e, n) {
  for (; t < e - n; ) {
    for (let r = 0; r < n; ++r) {
      const s = i[t + r];
      i[t + r] = i[e - n + r], i[e - n + r] = s;
    }
    t += n, e -= n;
  }
}
function Xf(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += (a - s) * (u + o), s = a, o = u;
  }
  return r === 0 ? void 0 : r > 0;
}
function Yf(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Xf(
      i,
      t,
      a,
      n
    );
    if (s === 0) {
      if (r && u || !r && !u)
        return !1;
    } else if (r && !u || !r && u)
      return !1;
    t = a;
  }
  return !0;
}
function u_(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (!Yf(i, t, a, n, r))
      return !1;
    a.length && (t = a[a.length - 1]);
  }
  return !0;
}
function cl(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Xf(
      i,
      t,
      a,
      n
    );
    (s === 0 ? r && u || !r && !u : r && !u || !r && u) && a_(i, t, a, n), t = a;
  }
  return t;
}
function Wc(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s)
    t = cl(
      i,
      t,
      e[s],
      n,
      r
    );
  return t;
}
let Uf = class hl extends _s {
  /**
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
   *     Array of linear rings that define the polygon. The first linear ring of the
   *     array defines the outer-boundary or surface of the polygon. Each subsequent
   *     linear ring defines a hole in the surface of the polygon. A linear ring is
   *     an array of vertices' coordinates where the first coordinate and the last are
   *     equivalent. (For internal use, flat coordinates in combination with
   *     `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
   */
  constructor(t, e, n) {
    super(), this.ends_ = [], this.flatInteriorPointRevision_ = -1, this.flatInteriorPoint_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, e !== void 0 && n ? (this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ), this.ends_ = n) : this.setCoordinates(
      /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
      t,
      e
    );
  }
  /**
   * Append the passed linear ring to this polygon.
   * @param {LinearRing} linearRing Linear ring.
   * @api
   */
  appendLinearRing(t) {
    this.flatCoordinates ? Xi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const t = new hl(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < ps(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Wl(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Hl(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      r
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    return Kl(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t,
      e
    );
  }
  /**
   * Return the area of the polygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return kf(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */
  getCoordinates(t) {
    let e;
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), cl(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Xo(e, 0, this.ends_, this.stride);
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * @return {Array<number>} Interior point.
   */
  getFlatInteriorPoint() {
    if (this.flatInteriorPointRevision_ != this.getRevision()) {
      const t = Ys(this.getExtent());
      this.flatInteriorPoint_ = Bf(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        t,
        0
      ), this.flatInteriorPointRevision_ = this.getRevision();
    }
    return this.flatInteriorPoint_;
  }
  /**
   * Return an interior point of the polygon.
   * @return {Point} Interior point as XYM coordinate, where M is the
   * length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoint() {
    return new zs(this.getFlatInteriorPoint(), "XYM");
  }
  /**
   * Return the number of rings of the polygon,  this includes the exterior
   * ring and any interior rings.
   *
   * @return {number} Number of rings.
   * @api
   */
  getLinearRingCount() {
    return this.ends_.length;
  }
  /**
   * Return the Nth linear ring of the polygon geometry. Return `null` if the
   * given index is out of range.
   * The exterior linear ring is available at index `0` and the interior rings
   * at index `1` and beyond.
   *
   * @param {number} index Index.
   * @return {LinearRing|null} Linear ring.
   * @api
   */
  getLinearRing(t) {
    return t < 0 || this.ends_.length <= t ? null : new Uc(
      this.flatCoordinates.slice(
        t === 0 ? 0 : this.ends_[t - 1],
        this.ends_[t]
      ),
      this.layout
    );
  }
  /**
   * Return the linear rings of the polygon.
   * @return {Array<LinearRing>} Linear rings.
   * @api
   */
  getLinearRings() {
    const t = this.layout, e = this.flatCoordinates, n = this.ends_, r = [];
    let s = 0;
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o], l = new Uc(
        e.slice(s, u),
        t
      );
      r.push(l), s = u;
    }
    return r;
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Yf(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = cl(
        this.orientedFlatCoordinates_,
        0,
        this.ends_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {Polygon} Simplified Polygon.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    const e = [], n = [];
    return e.length = Df(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new hl(e, "XY", n);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "Polygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return Vf(
      this.getOrientedFlatCoordinates(),
      0,
      this.ends_,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the polygon.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const n = jl(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const iu = Uf;
function qc(i) {
  const t = i[0], e = i[1], n = i[2], r = i[3], s = [
    t,
    e,
    t,
    r,
    n,
    r,
    n,
    e,
    t,
    e
  ];
  return new Uf(s, "XY", [s.length]);
}
const Wu = 0;
class l_ extends Gr {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Vl(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && Nf(), t.center && (t.center = lr(t.center, this.projection_)), t.extent && (t.extent = To(t.extent, this.projection_)), this.applyOptions_(t);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in Jn)
      delete e[a];
    this.setProperties(e, !0);
    const n = h_(t);
    this.maxResolution_ = n.maxResolution, this.minResolution_ = n.minResolution, this.zoomFactor_ = n.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = n.minZoom;
    const r = c_(t), s = n.constraint, o = f_(t);
    this.constraints_ = {
      center: r,
      resolution: s,
      rotation: o
    }, this.setRotation(t.rotation !== void 0 ? t.rotation : 0), this.setCenterInternal(
      t.center !== void 0 ? t.center : null
    ), t.resolution !== void 0 ? this.setResolution(t.resolution) : t.zoom !== void 0 && this.setZoom(t.zoom);
  }
  /**
   * Padding (in css pixels).
   * If the map viewport is partially covered with other content (overlays) along
   * its edges, this setting allows to shift the center of the viewport away from that
   * content. The order of the values in the array is top, right, bottom, left.
   * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
   * @type {Array<number>|undefined}
   * @api
   */
  get padding() {
    return this.padding_;
  }
  set padding(t) {
    let e = this.padding_;
    this.padding_ = t;
    const n = this.getCenterInternal();
    if (n) {
      const r = t || [0, 0, 0, 0];
      e = e || [0, 0, 0, 0];
      const s = this.getResolution(), o = s / 2 * (r[3] - e[3] + e[1] - r[1]), a = s / 2 * (r[0] - e[0] + e[2] - r[2]);
      this.setCenterInternal([n[0] + o, n[1] - a]);
    }
  }
  /**
   * Get an updated version of the view options used to construct the view.  The
   * current resolution (or zoom), center, and rotation are applied to any stored
   * options.  The provided options can be used to apply new min/max zoom or
   * resolution limits.
   * @param {ViewOptions} newOptions New options to be applied.
   * @return {ViewOptions} New options updated with the current view state.
   */
  getUpdatedOptions_(t) {
    const e = this.getProperties();
    return e.resolution !== void 0 ? e.resolution = this.getResolution() : e.zoom = this.getZoom(), e.center = this.getCenterInternal(), e.rotation = this.getRotation(), Object.assign({}, e, t);
  }
  /**
   * Animate the view.  The view's center, zoom (or resolution), and rotation
   * can be animated for smooth transitions between view states.  For example,
   * to animate the view to a new zoom level:
   *
   *     view.animate({zoom: view.getZoom() + 1});
   *
   * By default, the animation lasts one second and uses in-and-out easing.  You
   * can customize this behavior by including `duration` (in milliseconds) and
   * `easing` options (see {@link module:ol/easing}).
   *
   * To chain together multiple animations, call the method with multiple
   * animation objects.  For example, to first zoom and then pan:
   *
   *     view.animate({zoom: 10}, {center: [0, 0]});
   *
   * If you provide a function as the last argument to the animate method, it
   * will get called at the end of an animation series.  The callback will be
   * called with `true` if the animation series completed on its own or `false`
   * if it was cancelled.
   *
   * Animations are cancelled by user interactions (e.g. dragging the map) or by
   * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
   * (or another method that calls one of these).
   *
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
   *     options.  Multiple animations can be run in series by passing multiple
   *     options objects.  To run multiple animations in parallel, call the method
   *     multiple times.  An optional callback can be provided as a final
   *     argument.  The callback will be called with a boolean indicating whether
   *     the animation completed without being cancelled.
   * @api
   */
  animate(t) {
    this.isDef() && !this.getAnimating() && this.resolveConstraints(0);
    const e = new Array(arguments.length);
    for (let n = 0; n < e.length; ++n) {
      let r = arguments[n];
      r.center && (r = Object.assign({}, r), r.center = lr(
        r.center,
        this.getProjection()
      )), r.anchor && (r = Object.assign({}, r), r.anchor = lr(
        r.anchor,
        this.getProjection()
      )), e[n] = r;
    }
    this.animateInternal.apply(this, e);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(t) {
    let e = arguments.length, n;
    e > 1 && typeof arguments[e - 1] == "function" && (n = arguments[e - 1], --e);
    let r = 0;
    for (; r < e && !this.isDef(); ++r) {
      const c = arguments[r];
      c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (r === e) {
      n && ka(n, !0);
      return;
    }
    let s = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, u = this.targetRotation_;
    const l = [];
    for (; r < e; ++r) {
      const c = (
        /** @type {AnimationOptions} */
        arguments[r]
      ), h = {
        start: s,
        complete: !1,
        anchor: c.anchor,
        duration: c.duration !== void 0 ? c.duration : 1e3,
        easing: c.easing || Gp,
        callback: n
      };
      if (c.center && (h.sourceCenter = o, h.targetCenter = c.center.slice(), o = h.targetCenter), c.zoom !== void 0 ? (h.sourceResolution = a, h.targetResolution = this.getResolutionForZoom(c.zoom), a = h.targetResolution) : c.resolution && (h.sourceResolution = a, h.targetResolution = c.resolution, a = h.targetResolution), c.rotation !== void 0) {
        h.sourceRotation = u;
        const f = sl(c.rotation - u + Math.PI, 2 * Math.PI) - Math.PI;
        h.targetRotation = u + f, u = h.targetRotation;
      }
      g_(h) ? h.complete = !0 : s += h.duration, l.push(h);
    }
    this.animations_.push(l), this.setHint(bn.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[bn.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[bn.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(bn.ANIMATING, -this.hints_[bn.ANIMATING]);
    let t;
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const r = this.animations_[e];
      if (r[0].callback && ka(r[0].callback, !1), !t)
        for (let s = 0, o = r.length; s < o; ++s) {
          const a = r[s];
          if (!a.complete) {
            t = a.anchor;
            break;
          }
        }
    }
    this.animations_.length = 0, this.cancelAnchor_ = t, this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
  }
  /**
   * Update all animations.
   */
  updateAnimations_() {
    if (this.updateAnimationKey_ !== void 0 && (cancelAnimationFrame(this.updateAnimationKey_), this.updateAnimationKey_ = void 0), !this.getAnimating())
      return;
    const t = Date.now();
    let e = !1;
    for (let n = this.animations_.length - 1; n >= 0; --n) {
      const r = this.animations_[n];
      let s = !0;
      for (let o = 0, a = r.length; o < a; ++o) {
        const u = r[o];
        if (u.complete)
          continue;
        const l = t - u.start;
        let c = u.duration > 0 ? l / u.duration : 1;
        c >= 1 ? (u.complete = !0, c = 1) : s = !1;
        const h = u.easing(c);
        if (u.sourceCenter) {
          const f = u.sourceCenter[0], g = u.sourceCenter[1], d = u.targetCenter[0], _ = u.targetCenter[1];
          this.nextCenter_ = u.targetCenter;
          const p = f + h * (d - f), m = g + h * (_ - g);
          this.targetCenter_ = [p, m];
        }
        if (u.sourceResolution && u.targetResolution) {
          const f = h === 1 ? u.targetResolution : u.sourceResolution + h * (u.targetResolution - u.sourceResolution);
          if (u.anchor) {
            const g = this.getViewportSize_(this.getRotation()), d = this.constraints_.resolution(
              f,
              0,
              g,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              d,
              u.anchor
            );
          }
          this.nextResolution_ = u.targetResolution, this.targetResolution_ = f, this.applyTargetState_(!0);
        }
        if (u.sourceRotation !== void 0 && u.targetRotation !== void 0) {
          const f = h === 1 ? sl(u.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : u.sourceRotation + h * (u.targetRotation - u.sourceRotation);
          if (u.anchor) {
            const g = this.constraints_.rotation(
              f,
              !0
            );
            this.targetCenter_ = this.calculateCenterRotate(
              g,
              u.anchor
            );
          }
          this.nextRotation_ = u.targetRotation, this.targetRotation_ = f;
        }
        if (this.applyTargetState_(!0), e = !0, !u.complete)
          break;
      }
      if (s) {
        this.animations_[n] = null, this.setHint(bn.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = r[0].callback;
        o && ka(o, !0);
      }
    }
    this.animations_ = this.animations_.filter(Boolean), e && this.updateAnimationKey_ === void 0 && (this.updateAnimationKey_ = requestAnimationFrame(
      this.updateAnimations_.bind(this)
    ));
  }
  /**
   * @param {number} rotation Target rotation.
   * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
   */
  calculateCenterRotate(t, e) {
    let n;
    const r = this.getCenterInternal();
    return r !== void 0 && (n = [r[0] - e[0], r[1] - e[1]], ep(n, t - this.getRotation()), tp(n, e)), n;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(t, e) {
    let n;
    const r = this.getCenterInternal(), s = this.getResolution();
    if (r !== void 0 && s !== void 0) {
      const o = e[0] - t * (e[0] - r[0]) / s, a = e[1] - t * (e[1] - r[1]) / s;
      n = [o, a];
    }
    return n;
  }
  /**
   * Returns the current viewport size.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
   */
  getViewportSize_(t) {
    const e = this.viewportSize_;
    if (t) {
      const n = e[0], r = e[1];
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(r * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(r * Math.cos(t))
      ];
    }
    return e;
  }
  /**
   * Stores the viewport size on the view. The viewport size is not read every time from the DOM
   * to avoid performance hit and layout reflow.
   * This should be done on map size change.
   * Note: the constraints are not resolved during an animation to avoid stopping it
   * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
   */
  setViewportSize(t) {
    this.viewportSize_ = Array.isArray(t) ? t.slice() : [100, 100], this.getAnimating() || this.resolveConstraints(0);
  }
  /**
   * Get the view center.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   * @observable
   * @api
   */
  getCenter() {
    const t = this.getCenterInternal();
    return t && Mc(t, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Jn.CENTER)
    );
  }
  /**
   * @return {Constraints} Constraints.
   */
  getConstraints() {
    return this.constraints_;
  }
  /**
   * @return {boolean} Resolution constraint is set
   */
  getConstrainResolution() {
    return this.get("constrainResolution");
  }
  /**
   * @param {Array<number>} [hints] Destination array.
   * @return {Array<number>} Hint.
   */
  getHints(t) {
    return t !== void 0 ? (t[0] = this.hints_[0], t[1] = this.hints_[1], t) : this.hints_.slice();
  }
  /**
   * Calculate the extent for the current view state and the passed size.
   * The size is the pixel dimensions of the box into which the calculated extent
   * should fit. In most cases you want to get the extent of the entire map,
   * that is `map.getSize()`.
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided, the size
   * of the map that uses this view will be used.
   * @return {import("./extent.js").Extent} Extent.
   * @api
   */
  calculateExtent(t) {
    const e = this.calculateExtentInternal(t);
    return Pf(e, this.getProjection());
  }
  /**
   * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
   * the map's last known viewport size will be used.
   * @return {import("./extent.js").Extent} Extent.
   */
  calculateExtentInternal(t) {
    t = t || this.getViewportSizeMinusPadding_();
    const e = (
      /** @type {!import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    oe(e, 1);
    const n = (
      /** @type {!number} */
      this.getResolution()
    );
    oe(n !== void 0, 2);
    const r = (
      /** @type {!number} */
      this.getRotation()
    );
    return oe(r !== void 0, 3), Wd(e, n, r, t);
  }
  /**
   * Get the maximum resolution of the view.
   * @return {number} The maximum resolution of the view.
   * @api
   */
  getMaxResolution() {
    return this.maxResolution_;
  }
  /**
   * Get the minimum resolution of the view.
   * @return {number} The minimum resolution of the view.
   * @api
   */
  getMinResolution() {
    return this.minResolution_;
  }
  /**
   * Get the maximum zoom level for the view.
   * @return {number} The maximum zoom level.
   * @api
   */
  getMaxZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.minResolution_)
    );
  }
  /**
   * Set a new maximum zoom level for the view.
   * @param {number} zoom The maximum zoom level.
   * @api
   */
  setMaxZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ maxZoom: t }));
  }
  /**
   * Get the minimum zoom level for the view.
   * @return {number} The minimum zoom level.
   * @api
   */
  getMinZoom() {
    return (
      /** @type {number} */
      this.getZoomForResolution(this.maxResolution_)
    );
  }
  /**
   * Set a new minimum zoom level for the view.
   * @param {number} zoom The minimum zoom level.
   * @api
   */
  setMinZoom(t) {
    this.applyOptions_(this.getUpdatedOptions_({ minZoom: t }));
  }
  /**
   * Set whether the view should allow intermediary zoom levels.
   * @param {boolean} enabled Whether the resolution is constrained.
   * @api
   */
  setConstrainResolution(t) {
    this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: t }));
  }
  /**
   * Get the view projection.
   * @return {import("./proj/Projection.js").default} The projection of the view.
   * @api
   */
  getProjection() {
    return this.projection_;
  }
  /**
   * Get the view resolution.
   * @return {number|undefined} The resolution of the view.
   * @observable
   * @api
   */
  getResolution() {
    return (
      /** @type {number|undefined} */
      this.get(Jn.RESOLUTION)
    );
  }
  /**
   * Get the resolutions for the view. This returns the array of resolutions
   * passed to the constructor of the View, or undefined if none were given.
   * @return {Array<number>|undefined} The resolutions of the view.
   * @api
   */
  getResolutions() {
    return this.resolutions_;
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   * @api
   */
  getResolutionForExtent(t, e) {
    return this.getResolutionForExtentInternal(
      To(t, this.getProjection()),
      e
    );
  }
  /**
   * Get the resolution for a provided extent (in map units) and size (in pixels).
   * @param {import("./extent.js").Extent} extent Extent.
   * @param {import("./size.js").Size} [size] Box pixel size.
   * @return {number} The resolution at which the provided extent will render at
   *     the given size.
   */
  getResolutionForExtentInternal(t, e) {
    e = e || this.getViewportSizeMinusPadding_();
    const n = On(t) / e[0], r = Vo(t) / e[1];
    return Math.max(n, r);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(t) {
    t = t || 2;
    const e = this.getConstrainedResolution(this.maxResolution_), n = this.minResolution_, r = Math.log(e / n) / Math.log(t);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(s) {
        return e / Math.pow(t, s * r);
      }
    );
  }
  /**
   * Get the view rotation.
   * @return {number} The rotation of the view in radians.
   * @observable
   * @api
   */
  getRotation() {
    return (
      /** @type {number} */
      this.get(Jn.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2), n = this.getConstrainedResolution(this.maxResolution_), r = this.minResolution_, s = Math.log(n / r) / e;
    return (
      /**
       * @param {number} resolution Resolution.
       * @return {number} Value.
       */
      function(o) {
        return Math.log(n / o) / e / s;
      }
    );
  }
  /**
   * Returns the size of the viewport minus padding.
   * @private
   * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
   * @return {import("./size.js").Size} Viewport size reduced by the padding.
   */
  getViewportSizeMinusPadding_(t) {
    let e = this.getViewportSize_(t);
    const n = this.padding_;
    return n && (e = [
      e[0] - n[1] - n[3],
      e[1] - n[0] - n[2]
    ]), e;
  }
  /**
   * @return {State} View state.
   */
  getState() {
    const t = this.getProjection(), e = this.getResolution(), n = this.getRotation();
    let r = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      r = qu(
        r,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        e,
        n
      );
    }
    return {
      center: r.slice(0),
      projection: t !== void 0 ? t : null,
      resolution: e,
      nextCenter: this.nextCenter_,
      nextResolution: this.nextResolution_,
      nextRotation: this.nextRotation_,
      rotation: n,
      zoom: this.getZoom()
    };
  }
  /**
   * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
   */
  getViewStateAndExtent() {
    return {
      viewState: this.getState(),
      extent: this.calculateExtent()
    };
  }
  /**
   * Get the current zoom level. This method may return non-integer zoom levels
   * if the view does not constrain the resolution, or if an interaction or
   * animation is underway.
   * @return {number|undefined} Zoom.
   * @api
   */
  getZoom() {
    let t;
    const e = this.getResolution();
    return e !== void 0 && (t = this.getZoomForResolution(e)), t;
  }
  /**
   * Get the zoom level for a resolution.
   * @param {number} resolution The resolution.
   * @return {number|undefined} The zoom level for the provided resolution.
   * @api
   */
  getZoomForResolution(t) {
    let e = this.minZoom_ || 0, n, r;
    if (this.resolutions_) {
      const s = cf(this.resolutions_, t, 1);
      e = s, n = this.resolutions_[s], s == this.resolutions_.length - 1 ? r = 2 : r = n / this.resolutions_[s + 1];
    } else
      n = this.maxResolution_, r = this.zoomFactor_;
    return e + Math.log(n / t) / Math.log(r);
  }
  /**
   * Get the resolution for a zoom level.
   * @param {number} zoom Zoom level.
   * @return {number} The view resolution for the provided zoom level.
   * @api
   */
  getResolutionForZoom(t) {
    if (this.resolutions_) {
      if (this.resolutions_.length <= 1)
        return 0;
      const e = Me(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), n = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(n, Me(t - e, 0, 1));
    }
    return this.maxResolution_ / Math.pow(this.zoomFactor_, t - this.minZoom_);
  }
  /**
   * Fit the given geometry or extent based on the given map size and border.
   * The size is pixel dimensions of the box to fit the extent into.
   * In most cases you will want to use the map size, that is `map.getSize()`.
   * Takes care of the map angle.
   * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
   *     extent to fit the view to.
   * @param {FitOptions} [options] Options.
   * @api
   */
  fit(t, e) {
    let n;
    if (oe(
      Array.isArray(t) || typeof /** @type {?} */
      t.getSimplifiedGeometry == "function",
      24
    ), Array.isArray(t)) {
      oe(!Sf(t), 25);
      const r = To(t, this.getProjection());
      n = qc(r);
    } else if (t.getType() === "Circle") {
      const r = To(
        t.getExtent(),
        this.getProjection()
      );
      n = qc(r), n.rotate(this.getRotation(), Ys(r));
    } else
      n = t;
    this.fitInternal(n, e);
  }
  /**
   * Calculate rotated extent
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @return {import("./extent").Extent} The rotated extent for the geometry.
   */
  rotatedExtentForGeometry(t) {
    const e = this.getRotation(), n = Math.cos(e), r = Math.sin(-e), s = t.getFlatCoordinates(), o = t.getStride();
    let a = 1 / 0, u = 1 / 0, l = -1 / 0, c = -1 / 0;
    for (let h = 0, f = s.length; h < f; h += o) {
      const g = s[h] * n - s[h + 1] * r, d = s[h] * r + s[h + 1] * n;
      a = Math.min(a, g), u = Math.min(u, d), l = Math.max(l, g), c = Math.max(c, d);
    }
    return [a, u, l, c];
  }
  /**
   * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
   * @param {FitOptions} [options] Options.
   */
  fitInternal(t, e) {
    e = e || {};
    let n = e.size;
    n || (n = this.getViewportSizeMinusPadding_());
    const r = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], s = e.nearest !== void 0 ? e.nearest : !1;
    let o;
    e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(t);
    let u = this.getResolutionForExtentInternal(a, [
      n[0] - r[1] - r[3],
      n[1] - r[0] - r[2]
    ]);
    u = isNaN(u) ? o : Math.max(u, o), u = this.getConstrainedResolution(u, s ? 0 : 1);
    const l = this.getRotation(), c = Math.sin(l), h = Math.cos(l), f = Ys(a);
    f[0] += (r[1] - r[3]) / 2 * u, f[1] += (r[0] - r[2]) / 2 * u;
    const g = f[0] * h - f[1] * c, d = f[1] * h + f[0] * c, _ = this.getConstrainedCenter([g, d], u), p = e.callback ? e.callback : Xs;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: u,
        center: _,
        duration: e.duration,
        easing: e.easing
      },
      p
    ) : (this.targetResolution_ = u, this.targetCenter_ = _, this.applyTargetState_(!1, !0), ka(p, !0));
  }
  /**
   * Center on coordinate and view position.
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   * @api
   */
  centerOn(t, e, n) {
    this.centerOnInternal(
      lr(t, this.getProjection()),
      e,
      n
    );
  }
  /**
   * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("./size.js").Size} size Box pixel size.
   * @param {import("./pixel.js").Pixel} position Position on the view to center on.
   */
  centerOnInternal(t, e, n) {
    this.setCenterInternal(
      qu(
        t,
        e,
        n,
        this.getResolution(),
        this.getRotation()
      )
    );
  }
  /**
   * Calculates the shift between map and viewport center.
   * @param {import("./coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {import("./size.js").Size} size Size.
   * @return {Array<number>|undefined} Center shift.
   */
  calculateCenterShift(t, e, n, r) {
    let s;
    const o = this.padding_;
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n), u = qu(
        t,
        r,
        [a[0] / 2 + o[3], a[1] / 2 + o[0]],
        e,
        n
      );
      s = [
        t[0] - u[0],
        t[1] - u[1]
      ];
    }
    return s;
  }
  /**
   * @return {boolean} Is defined.
   */
  isDef() {
    return !!this.getCenterInternal() && this.getResolution() !== void 0;
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   * @api
   */
  adjustCenter(t) {
    const e = Mc(this.targetCenter_, this.getProjection());
    this.setCenter([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  /**
   * Adds relative coordinates to the center of the view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
   */
  adjustCenterInternal(t) {
    const e = this.targetCenter_;
    this.setCenterInternal([
      e[0] + t[0],
      e[1] + t[1]
    ]);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustResolution(t, e) {
    e = e && lr(e, this.getProjection()), this.adjustResolutionInternal(t, e);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(), r = this.getViewportSize_(this.getRotation()), s = this.constraints_.resolution(
      this.targetResolution_ * t,
      0,
      r,
      n
    );
    e && (this.targetCenter_ = this.calculateCenterZoom(s, e)), this.targetResolution_ *= t, this.applyTargetState_();
  }
  /**
   * Adds a value to the view zoom level, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom level.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  adjustZoom(t, e) {
    this.adjustResolution(Math.pow(this.zoomFactor_, -t), e);
  }
  /**
   * Adds a value to the view rotation, optionally using an anchor. Any rotation
   * constraint will apply.
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   * @api
   */
  adjustRotation(t, e) {
    e && (e = lr(e, this.getProjection())), this.adjustRotationInternal(t, e);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(), r = this.constraints_.rotation(
      this.targetRotation_ + t,
      n
    );
    e && (this.targetCenter_ = this.calculateCenterRotate(r, e)), this.targetRotation_ += t, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(t) {
    this.setCenterInternal(
      t && lr(t, this.getProjection())
    );
  }
  /**
   * Set the center using the view projection (not the user projection).
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   */
  setCenterInternal(t) {
    this.targetCenter_ = t, this.applyTargetState_();
  }
  /**
   * @param {import("./ViewHint.js").default} hint Hint.
   * @param {number} delta Delta.
   * @return {number} New value.
   */
  setHint(t, e) {
    return this.hints_[t] += e, this.changed(), this.hints_[t];
  }
  /**
   * Set the resolution for this view. Any resolution constraint will apply.
   * @param {number|undefined} resolution The resolution of the view.
   * @observable
   * @api
   */
  setResolution(t) {
    this.targetResolution_ = t, this.applyTargetState_();
  }
  /**
   * Set the rotation for this view. Any rotation constraint will apply.
   * @param {number} rotation The rotation of the view in radians.
   * @observable
   * @api
   */
  setRotation(t) {
    this.targetRotation_ = t, this.applyTargetState_();
  }
  /**
   * Zoom to a specific zoom level. Any resolution constrain will apply.
   * @param {number} zoom Zoom level.
   * @api
   */
  setZoom(t) {
    this.setResolution(this.getResolutionForZoom(t));
  }
  /**
   * Recompute rotation/resolution/center based on target values.
   * Note: we have to compute rotation first, then resolution and center considering that
   * parameters can influence one another in case a view extent constraint is present.
   * @param {boolean} [doNotCancelAnims] Do not cancel animations.
   * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
   * @private
   */
  applyTargetState_(t, e) {
    const n = this.getAnimating() || this.getInteracting() || e, r = this.constraints_.rotation(
      this.targetRotation_,
      n
    ), s = this.getViewportSize_(r), o = this.constraints_.resolution(
      this.targetResolution_,
      0,
      s,
      n
    ), a = this.constraints_.center(
      this.targetCenter_,
      o,
      s,
      n,
      this.calculateCenterShift(
        this.targetCenter_,
        o,
        r,
        s
      )
    );
    this.get(Jn.ROTATION) !== r && this.set(Jn.ROTATION, r), this.get(Jn.RESOLUTION) !== o && (this.set(Jn.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Jn.CENTER) || !tu(this.get(Jn.CENTER), a)) && this.set(Jn.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
  }
  /**
   * If any constraints need to be applied, an animation will be triggered.
   * This is typically done on interaction end.
   * Note: calling this with a duration of 0 will apply the constrained values straight away,
   * without animation.
   * @param {number} [duration] The animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  resolveConstraints(t, e, n) {
    t = t !== void 0 ? t : 200;
    const r = e || 0, s = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(s), a = this.constraints_.resolution(
      this.targetResolution_,
      r,
      o
    ), u = this.constraints_.center(
      this.targetCenter_,
      a,
      o,
      !1,
      this.calculateCenterShift(
        this.targetCenter_,
        a,
        s,
        o
      )
    );
    if (t === 0 && !this.cancelAnchor_) {
      this.targetResolution_ = a, this.targetRotation_ = s, this.targetCenter_ = u, this.applyTargetState_();
      return;
    }
    n = n || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !tu(this.getCenterInternal(), u)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: u,
      resolution: a,
      duration: t,
      easing: kp,
      anchor: n
    }));
  }
  /**
   * Notify the View that an interaction has started.
   * The view state will be resolved to a stable one if needed
   * (depending on its constraints).
   * @api
   */
  beginInteraction() {
    this.resolveConstraints(0), this.setHint(bn.INTERACTING, 1);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   * @api
   */
  endInteraction(t, e, n) {
    n = n && lr(n, this.getProjection()), this.endInteractionInternal(t, e, n);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(bn.INTERACTING, -1), this.resolveConstraints(t, e, n));
  }
  /**
   * Get a valid position for the view center according to the current constraints.
   * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
   * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
   * This is useful to guess a valid center position at a different zoom level.
   * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
   */
  getConstrainedCenter(t, e) {
    const n = this.getViewportSize_(this.getRotation());
    return this.constraints_.center(
      t,
      e || this.getResolution(),
      n
    );
  }
  /**
   * Get a valid zoom level according to the current view constraints.
   * @param {number|undefined} targetZoom Target zoom.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid zoom level.
   */
  getConstrainedZoom(t, e) {
    const n = this.getResolutionForZoom(t);
    return this.getZoomForResolution(
      this.getConstrainedResolution(n, e)
    );
  }
  /**
   * Get a valid resolution according to the current view constraints.
   * @param {number|undefined} targetResolution Target resolution.
   * @param {number} [direction=0] Indicate which resolution should be used
   * by a renderer if the view resolution does not match any resolution of the tile source.
   * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
   * will be used. If -1, the nearest higher resolution will be used.
   * @return {number|undefined} Valid resolution.
   */
  getConstrainedResolution(t, e) {
    e = e || 0;
    const n = this.getViewportSize_(this.getRotation());
    return this.constraints_.resolution(t, e, n);
  }
}
function ka(i, t) {
  setTimeout(function() {
    i(t);
  }, 0);
}
function c_(i) {
  if (i.extent !== void 0) {
    const e = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0;
    return Gc(i.extent, i.constrainOnlyCenter, e);
  }
  const t = Vl(i.projection, "EPSG:3857");
  if (i.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, Gc(e, !1, !1);
  }
  return Pp;
}
function h_(i) {
  let t, e, n, o = i.minZoom !== void 0 ? i.minZoom : Wu, a = i.maxZoom !== void 0 ? i.maxZoom : 28;
  const u = i.zoomFactor !== void 0 ? i.zoomFactor : 2, l = i.multiWorld !== void 0 ? i.multiWorld : !1, c = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0, h = i.showFullExtent !== void 0 ? i.showFullExtent : !1, f = Vl(i.projection, "EPSG:3857"), g = f.getExtent();
  let d = i.constrainOnlyCenter, _ = i.extent;
  if (!l && !_ && f.isGlobal() && (d = !1, _ = g), i.resolutions !== void 0) {
    const p = i.resolutions;
    e = p[o], n = p[a] !== void 0 ? p[a] : p[p.length - 1], i.constrainResolution ? t = Tp(
      p,
      c,
      !d && _,
      h
    ) : t = Bc(
      e,
      n,
      c,
      !d && _,
      h
    );
  } else {
    const m = (g ? Math.max(On(g), Vo(g)) : (
      // use an extent that can fit the whole world if need be
      360 * df.degrees / f.getMetersPerUnit()
    )) / bp / Math.pow(2, Wu), y = m / Math.pow(2, 28 - Wu);
    e = i.maxResolution, e !== void 0 ? o = 0 : e = m / Math.pow(u, o), n = i.minResolution, n === void 0 && (i.maxZoom !== void 0 ? i.maxResolution !== void 0 ? n = e / Math.pow(u, a) : n = m / Math.pow(u, a) : n = y), a = o + Math.floor(
      Math.log(e / n) / Math.log(u)
    ), n = e / Math.pow(u, a - o), i.constrainResolution ? t = Mp(
      u,
      e,
      n,
      c,
      !d && _,
      h
    ) : t = Bc(
      e,
      n,
      c,
      !d && _,
      h
    );
  }
  return {
    constraint: t,
    maxResolution: e,
    minResolution: n,
    minZoom: o,
    zoomFactor: u
  };
}
function f_(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const e = i.constrainRotation;
    return e === void 0 || e === !0 ? Dp() : e === !1 ? zc : typeof e == "number" ? Ap(e) : zc;
  }
  return Op;
}
function g_(i) {
  return !(i.sourceCenter && i.targetCenter && !tu(i.sourceCenter, i.targetCenter) || i.sourceResolution !== i.targetResolution || i.sourceRotation !== i.targetRotation);
}
function qu(i, t, e, n, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r), a = i[0] * s - i[1] * o, u = i[1] * s + i[0] * o;
  a += (t[0] / 2 - e[0]) * n, u += (e[1] - t[1] / 2) * n, o = -o;
  const l = a * s - u * o, c = u * s + a * o;
  return [l, c];
}
const Hc = l_;
class d_ extends Lp {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      pt.SOURCE,
      this.handleSourcePropertyChange_
    );
    const n = t.source ? (
      /** @type {SourceType} */
      t.source
    ) : null;
    this.setSource(n);
  }
  /**
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return t = t || [], t.push(this), t;
  }
  /**
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return t = t || [], t.push(this.getLayerState()), t;
  }
  /**
   * Get the layer source.
   * @return {SourceType|null} The layer source (or `null` if not yet set).
   * @observable
   * @api
   */
  getSource() {
    return (
      /** @type {SourceType} */
      this.get(pt.SOURCE) || null
    );
  }
  /**
   * @return {SourceType|null} The source being rendered.
   */
  getRenderSource() {
    return this.getSource();
  }
  /**
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    const t = this.getSource();
    return t ? t.getState() : "undefined";
  }
  /**
   * @private
   */
  handleSourceChange_() {
    this.changed(), !(this.sourceReady_ || this.getSource().getState() !== "ready") && (this.sourceReady_ = !0, this.dispatchEvent("sourceready"));
  }
  /**
   * @private
   */
  handleSourcePropertyChange_() {
    this.sourceChangeKey_ && (ii(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = ni(
      t,
      Fn.CHANGE,
      this.handleSourceChange_,
      this
    ), t.getState() === "ready" && (this.sourceReady_ = !0, setTimeout(() => {
      this.dispatchEvent("sourceready");
    }, 0))), this.changed();
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(t) {
    return this.renderer_ ? this.renderer_.getFeatures(t) : Promise.resolve([]);
  }
  /**
   * @param {import("../pixel").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(t) {
    return !this.renderer_ || !this.rendered ? null : this.renderer_.getData(t);
  }
  /**
   * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
   * extent, not set to `visible: false`, and not inside a layer group that is set
   * to `visible: false`.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {boolean} The layer is visible in the map view.
   * @api
   */
  isVisible(t) {
    let e;
    const n = this.getMapInternal();
    !t && n && (t = n.getView()), t instanceof Hc ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray());
    let r;
    e.layerStatesArray ? r = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : r = this.getLayerState();
    const s = this.getExtent();
    return p_(r, e.viewState) && (!s || ti(s, e.extent));
  }
  /**
   * Get the attributions of the source of this layer for the given view.
   * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
   * Only required when the layer is not added to a map.
   * @return {Array<string>} Attributions for this layer at the given view.
   * @api
   */
  getAttributions(t) {
    if (!this.isVisible(t))
      return [];
    let e;
    const n = this.getSource();
    if (n && (e = n.getAttributions()), !e)
      return [];
    const r = t instanceof Hc ? t.getViewStateAndExtent() : t;
    let s = e(r);
    return Array.isArray(s) || (s = [s]), s;
  }
  /**
   * In charge to manage the rendering of the layer. One layer type is
   * bounded with one layer renderer.
   * @param {?import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target which the renderer may (but need not) use
   * for rendering its content.
   * @return {HTMLElement|null} The rendered element.
   */
  render(t, e) {
    const n = this.getRenderer();
    return n.prepareFrame(t) ? (this.rendered = !0, n.renderFrame(t, e)) : null;
  }
  /**
   * Called when a layer is not visible during a map render.
   */
  unrender() {
    this.rendered = !1;
  }
  /**
   * For use inside the library only.
   * @param {import("../Map.js").default|null} map Map.
   */
  setMapInternal(t) {
    t || this.unrender(), this.set(pt.MAP, t);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(pt.MAP);
  }
  /**
   * Sets the layer to be rendered on top of other layers on a map. The map will
   * not manage this layer in its layers collection. This
   * is useful for temporary layers. To remove an unmanaged layer from the map,
   * use `#setMap(null)`.
   *
   * To add the layer to a map and have it managed by the map, use
   * {@link module:ol/Map~Map#addLayer} instead.
   * @param {import("../Map.js").default|null} map Map.
   * @api
   */
  setMap(t) {
    this.mapPrecomposeKey_ && (ii(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (ii(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = ni(
      t,
      al.PRECOMPOSE,
      function(e) {
        const r = /** @type {import("../render/Event.js").default} */ e.frameState.layerStatesArray, s = this.getLayerState(!1);
        oe(
          !r.some(function(o) {
            return o.layer === s.layer;
          }),
          67
        ), r.push(s);
      },
      this
    ), this.mapRenderKey_ = ni(this, Fn.CHANGE, t.render, t), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(t) {
    this.set(pt.SOURCE, t);
  }
  /**
   * Get the renderer for this layer.
   * @return {RendererType|null} The layer renderer.
   */
  getRenderer() {
    return this.renderer_ || (this.renderer_ = this.createRenderer()), this.renderer_;
  }
  /**
   * @return {boolean} The layer has a renderer.
   */
  hasRenderer() {
    return !!this.renderer_;
  }
  /**
   * Create a renderer for this layer.
   * @return {RendererType} A layer renderer.
   * @protected
   */
  createRenderer() {
    return null;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.renderer_ && (this.renderer_.dispose(), delete this.renderer_), this.setSource(null), super.disposeInternal();
  }
}
function p_(i, t) {
  if (!i.visible)
    return !1;
  const e = t.resolution;
  if (e < i.minResolution || e >= i.maxResolution)
    return !1;
  const n = t.zoom;
  return n > i.minZoom && n <= i.maxZoom;
}
const __ = d_;
class m_ extends En {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(t, e, n, r) {
    super(t), this.inversePixelTransform = e, this.frameState = n, this.context = r;
  }
}
const y_ = m_, Wf = "10px sans-serif", Yi = "#000", ru = "round", Yo = [], Uo = 0, Ws = "round", Wo = 10, qo = "#000", Ho = "center", su = "middle", jr = [0, 0, 0, 0], jo = 1, cr = new Gr();
let Ts = null, fl;
const gl = {}, v_ = function() {
  const t = "32px ", e = ["monospace", "serif"], n = e.length, r = "wmytzilWMYTZIL@#/&?$%10";
  let s, o;
  function a(l, c, h) {
    let f = !0;
    for (let g = 0; g < n; ++g) {
      const d = e[g];
      if (o = ou(
        l + " " + c + " " + t + d,
        r
      ), h != d) {
        const _ = ou(
          l + " " + c + " " + t + h + "," + d,
          r
        );
        f = f && _ != o;
      }
    }
    return !!f;
  }
  function u() {
    let l = !0;
    const c = cr.getKeys();
    for (let h = 0, f = c.length; h < f; ++h) {
      const g = c[h];
      cr.get(g) < 100 && (a.apply(this, g.split(`
`)) ? (kl(gl), Ts = null, fl = void 0, cr.set(g, 100)) : (cr.set(g, cr.get(g) + 1, !0), l = !1));
    }
    l && (clearInterval(s), s = void 0);
  }
  return function(l) {
    const c = gf(l);
    if (!c)
      return;
    const h = c.families;
    for (let f = 0, g = h.length; f < g; ++f) {
      const d = h[f], _ = c.style + `
` + c.weight + `
` + d;
      cr.get(_) === void 0 && (cr.set(_, 100, !0), a(c.style, c.weight, d) || (cr.set(_, 0, !0), s === void 0 && (s = setInterval(u, 32))));
    }
  };
}(), E_ = function() {
  let i;
  return function(t) {
    let e = gl[t];
    if (e == null) {
      if (Gl) {
        const n = gf(t), r = qf(t, "Žg");
        e = (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) * (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
      } else
        i || (i = document.createElement("div"), i.innerHTML = "M", i.style.minHeight = "0", i.style.maxHeight = "none", i.style.height = "auto", i.style.padding = "0", i.style.border = "none", i.style.position = "absolute", i.style.display = "block", i.style.left = "-99999px"), i.style.font = t, document.body.appendChild(i), e = i.offsetHeight, document.body.removeChild(i);
      gl[t] = e;
    }
    return e;
  };
}();
function qf(i, t) {
  return Ts || (Ts = oi(1, 1)), i != fl && (Ts.font = i, fl = Ts.font), Ts.measureText(t);
}
function ou(i, t) {
  return qf(i, t).width;
}
function jc(i, t, e) {
  if (t in e)
    return e[t];
  const n = t.split(`
`).reduce((r, s) => Math.max(r, ou(i, s)), 0);
  return e[t] = n, n;
}
function x_(i, t) {
  const e = [], n = [], r = [];
  let s = 0, o = 0, a = 0, u = 0;
  for (let l = 0, c = t.length; l <= c; l += 2) {
    const h = t[l];
    if (h === `
` || l === c) {
      s = Math.max(s, o), r.push(o), o = 0, a += u;
      continue;
    }
    const f = t[l + 1] || i.font, g = ou(f, h);
    e.push(g), o += g;
    const d = E_(f);
    n.push(d), u = Math.max(u, d);
  }
  return { width: s, height: a, widths: e, heights: n, lineWidths: r };
}
function C_(i, t, e, n, r, s, o, a, u, l, c) {
  i.save(), e !== 1 && (i.globalAlpha *= e), t && i.setTransform.apply(i, t), /** @type {*} */
  n.contextInstructions ? (i.translate(u, l), i.scale(c[0], c[1]), I_(
    /** @type {Label} */
    n,
    i
  )) : c[0] < 0 || c[1] < 0 ? (i.translate(u, l), i.scale(c[0], c[1]), i.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    n,
    r,
    s,
    o,
    a,
    0,
    0,
    o,
    a
  )) : i.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    n,
    r,
    s,
    o,
    a,
    u,
    l,
    o * c[0],
    a * c[1]
  ), i.restore();
}
function I_(i, t) {
  const e = i.contextInstructions;
  for (let n = 0, r = e.length; n < r; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(
      t,
      e[n + 1]
    ) : t[e[n]] = e[n + 1];
}
function au(i, t) {
  return Array.isArray(i) ? i : (t === void 0 ? t = [i, i] : (t[0] = i, t[1] = i), t);
}
function zt() {
}
function S_(i, t) {
  for (const e in t)
    i[e] = t[e];
  return (
    /** @type {T & S} */
    i
  );
}
function Hf(i) {
  return i();
}
function Zc() {
  return /* @__PURE__ */ Object.create(null);
}
function ir(i) {
  i.forEach(Hf);
}
function jf(i) {
  return typeof i == "function";
}
function ms(i, t) {
  return i != i ? t == t : i !== t || i && typeof i == "object" || typeof i == "function";
}
let Ga;
function tn(i, t) {
  return i === t ? !0 : (Ga || (Ga = document.createElement("a")), Ga.href = t, i === Ga.href);
}
function w_(i) {
  return Object.keys(i).length === 0;
}
function R_(i, t, e, n) {
  if (i) {
    const r = Zf(i, t, e, n);
    return i[0](r);
  }
}
function Zf(i, t, e, n) {
  return i[1] && n ? S_(e.ctx.slice(), i[1](n(t))) : e.ctx;
}
function N_(i, t, e, n) {
  if (i[2] && n) {
    const r = i[2](n(e));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], o = Math.max(t.dirty.length, r.length);
      for (let a = 0; a < o; a += 1)
        s[a] = t.dirty[a] | r[a];
      return s;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function L_(i, t, e, n, r, s) {
  if (r) {
    const o = Zf(t, e, n, s);
    i.p(o, r);
  }
}
function b_(i) {
  if (i.ctx.length > 32) {
    const t = [], e = i.ctx.length / 32;
    for (let n = 0; n < e; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function Kc(i) {
  return i ?? "";
}
function lt(i, t) {
  i.appendChild(t);
}
function jt(i, t, e) {
  i.insertBefore(t, e || null);
}
function Yt(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function Et(i) {
  return document.createElement(i);
}
function wr(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Rr(i) {
  return document.createTextNode(i);
}
function Tn() {
  return Rr(" ");
}
function P_() {
  return Rr("");
}
function Be(i, t, e, n) {
  return i.addEventListener(t, e, n), () => i.removeEventListener(t, e, n);
}
function T_(i) {
  return function(t) {
    return t.preventDefault(), i.call(this, t);
  };
}
function F(i, t, e) {
  e == null ? i.removeAttribute(t) : i.getAttribute(t) !== e && i.setAttribute(t, e);
}
function M_(i) {
  return Array.from(i.childNodes);
}
function Zo(i, t) {
  t = "" + t, i.data !== t && (i.data = /** @type {string} */
  t);
}
function Jc(i, t) {
  i.value = t ?? "";
}
function yr(i, t, e) {
  i.classList.toggle(t, !!e);
}
function O_(i, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: t, bubbles: e, cancelable: n });
}
let Ko;
function Fo(i) {
  Ko = i;
}
function Kf() {
  if (!Ko)
    throw new Error("Function called outside component initialization");
  return Ko;
}
function A_(i) {
  Kf().$$.on_destroy.push(i);
}
function D_() {
  const i = Kf();
  return (t, e, { cancelable: n = !1 } = {}) => {
    const r = i.$$.callbacks[t];
    if (r) {
      const s = O_(
        /** @type {string} */
        t,
        e,
        { cancelable: n }
      );
      return r.slice().forEach((o) => {
        o.call(i, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function Qc(i, t) {
  const e = i.$$.callbacks[t.type];
  e && e.slice().forEach((n) => n.call(this, t));
}
const Ms = [], dl = [];
let Vs = [];
const $c = [], F_ = /* @__PURE__ */ Promise.resolve();
let pl = !1;
function k_() {
  pl || (pl = !0, F_.then(Jf));
}
function _l(i) {
  Vs.push(i);
}
const Hu = /* @__PURE__ */ new Set();
let Ls = 0;
function Jf() {
  if (Ls !== 0)
    return;
  const i = Ko;
  do {
    try {
      for (; Ls < Ms.length; ) {
        const t = Ms[Ls];
        Ls++, Fo(t), G_(t.$$);
      }
    } catch (t) {
      throw Ms.length = 0, Ls = 0, t;
    }
    for (Fo(null), Ms.length = 0, Ls = 0; dl.length; )
      dl.pop()();
    for (let t = 0; t < Vs.length; t += 1) {
      const e = Vs[t];
      Hu.has(e) || (Hu.add(e), e());
    }
    Vs.length = 0;
  } while (Ms.length);
  for (; $c.length; )
    $c.pop()();
  pl = !1, Hu.clear(), Fo(i);
}
function G_(i) {
  if (i.fragment !== null) {
    i.update(), ir(i.before_update);
    const t = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, t), i.after_update.forEach(_l);
  }
}
function B_(i) {
  const t = [], e = [];
  Vs.forEach((n) => i.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), Vs = t;
}
const Ha = /* @__PURE__ */ new Set();
let Zr;
function ja() {
  Zr = {
    r: 0,
    c: [],
    p: Zr
    // parent group
  };
}
function Za() {
  Zr.r || ir(Zr.c), Zr = Zr.p;
}
function Qt(i, t) {
  i && i.i && (Ha.delete(i), i.i(t));
}
function Re(i, t, e, n) {
  if (i && i.o) {
    if (Ha.has(i))
      return;
    Ha.add(i), Zr.c.push(() => {
      Ha.delete(i), n && (e && i.d(1), n());
    }), i.o(t);
  } else
    n && n();
}
function th(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function z_(i, t) {
  Re(i, 1, 1, () => {
    t.delete(i.key);
  });
}
function V_(i, t, e, n, r, s, o, a, u, l, c, h) {
  let f = i.length, g = s.length, d = f;
  const _ = {};
  for (; d--; )
    _[i[d].key] = d;
  const p = [], m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = [];
  for (d = g; d--; ) {
    const P = h(r, s, d), b = e(P);
    let R = o.get(b);
    R ? n && v.push(() => R.p(P, t)) : (R = l(b, P), R.c()), m.set(b, p[d] = R), b in _ && y.set(b, Math.abs(d - _[b]));
  }
  const C = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Set();
  function w(P) {
    Qt(P, 1), P.m(a, c), o.set(P.key, P), c = P.first, g--;
  }
  for (; f && g; ) {
    const P = p[g - 1], b = i[f - 1], R = P.key, O = b.key;
    P === b ? (c = P.first, f--, g--) : m.has(O) ? !o.has(R) || C.has(R) ? w(P) : E.has(O) ? f-- : y.get(R) > y.get(O) ? (E.add(R), w(P)) : (C.add(O), f--) : (u(b, o), f--);
  }
  for (; f--; ) {
    const P = i[f];
    m.has(P.key) || u(P, o);
  }
  for (; g; )
    w(p[g - 1]);
  return ir(v), p;
}
function Nr(i) {
  i && i.c();
}
function qi(i, t, e) {
  const { fragment: n, after_update: r } = i.$$;
  n && n.m(t, e), _l(() => {
    const s = i.$$.on_mount.map(Hf).filter(jf);
    i.$$.on_destroy ? i.$$.on_destroy.push(...s) : ir(s), i.$$.on_mount = [];
  }), r.forEach(_l);
}
function Hi(i, t) {
  const e = i.$$;
  e.fragment !== null && (B_(e.after_update), ir(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function X_(i, t) {
  i.$$.dirty[0] === -1 && (Ms.push(i), k_(), i.$$.dirty.fill(0)), i.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ys(i, t, e, n, r, s, o, a = [-1]) {
  const u = Ko;
  Fo(i);
  const l = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: zt,
    not_equal: r,
    bound: Zc(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Zc(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  o && o(l.root);
  let c = !1;
  if (l.ctx = e ? e(i, t.props || {}, (h, f, ...g) => {
    const d = g.length ? g[0] : f;
    return l.ctx && r(l.ctx[h], l.ctx[h] = d) && (!l.skip_bound && l.bound[h] && l.bound[h](d), c && X_(i, h)), f;
  }) : [], l.update(), c = !0, ir(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = M_(t.target);
      l.fragment && l.fragment.l(h), h.forEach(Yt);
    } else
      l.fragment && l.fragment.c();
    t.intro && Qt(i.$$.fragment), qi(i, t.target, t.anchor), Jf();
  }
  Fo(u);
}
class vs {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Rn(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Rn(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Hi(this, 1), this.$destroy = zt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!jf(e))
      return zt;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !w_(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Y_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Y_);
function U_(i) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), F(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), F(t, "viewBox", "0 0 60.006 21.412"), F(t, "width", "14"), F(t, "height", "20"), F(t, "class", "svelte-en2qvf");
    },
    m(n, r) {
      jt(n, t, r), lt(t, e);
    },
    p: zt,
    i: zt,
    o: zt,
    d(n) {
      n && Yt(t);
    }
  };
}
class W_ extends vs {
  constructor(t) {
    super(), ys(this, t, null, U_, ms, {});
  }
}
function q_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "area.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "area.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function H_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "poi.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "poi.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function j_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "postal_code.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function Z_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "street.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "street.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function K_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "road.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "road.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function J_(i) {
  let t, e;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*iconsBaseUrl*/
      i[3] + "housenumber.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        i[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r);
    },
    p(n, r) {
      r & /*iconsBaseUrl*/
      8 && !tn(t.src, e = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && F(t, "src", e), r & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function Q_(i) {
  let t, e, n, r;
  return {
    c() {
      t = Et("img"), tn(t.src, e = /*imageUrl*/
      i[5]) || F(t, "src", e), F(
        t,
        "alt",
        /*category*/
        i[4]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(s, o) {
      jt(s, t, o), n || (r = Be(
        t,
        "error",
        /*error_handler*/
        i[12]
      ), n = !0);
    },
    p(s, o) {
      o & /*imageUrl*/
      32 && !tn(t.src, e = /*imageUrl*/
      s[5]) && F(t, "src", e), o & /*category*/
      16 && F(
        t,
        "alt",
        /*category*/
        s[4]
      );
    },
    d(s) {
      s && Yt(t), n = !1, r();
    }
  };
}
function eh(i) {
  let t, e;
  return {
    c() {
      t = Et("span"), e = Rr(
        /*placeType*/
        i[6]
      ), F(t, "class", "secondary svelte-ltkwvy");
    },
    m(n, r) {
      jt(n, t, r), lt(t, e);
    },
    p(n, r) {
      r & /*placeType*/
      64 && Zo(
        e,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Yt(t);
    }
  };
}
function $_(i) {
  var P, b;
  let t, e, n, r, s, o, a, u, l = (
    /*feature*/
    i[0].place_name.replace(/,.*/, "") + ""
  ), c, h, f = (
    /*showPlaceType*/
    i[2] === "always" || /*showPlaceType*/
    i[2] && !/*feature*/
    i[0].address && /*feature*/
    ((P = i[0].properties) == null ? void 0 : P.kind) !== "road" && /*feature*/
    ((b = i[0].properties) == null ? void 0 : b.kind) !== "road_relation" && !/*feature*/
    i[0].id.startsWith("address.") && !/*feature*/
    i[0].id.startsWith("postal_code.") && (!/*feature*/
    i[0].id.startsWith("poi.") || !/*imageUrl*/
    i[5])
  ), g, d, _ = (
    /*feature*/
    i[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), p, m, y;
  function v(R, O) {
    var z, L;
    return O & /*feature*/
    1 && (e = null), O & /*feature*/
    1 && (n = null), O & /*feature*/
    1 && (r = null), /*imageUrl*/
    R[5] ? Q_ : (
      /*feature*/
      R[0].address ? J_ : (
        /*feature*/
        ((z = R[0].properties) == null ? void 0 : z.kind) === "road" || /*feature*/
        ((L = R[0].properties) == null ? void 0 : L.kind) === "road_relation" ? K_ : (e == null && (e = !!/*feature*/
        R[0].id.startsWith("address.")), e ? Z_ : (n == null && (n = !!/*feature*/
        R[0].id.startsWith("postal_code.")), n ? j_ : (r == null && (r = !!/*feature*/
        R[0].id.startsWith("poi.")), r ? H_ : q_)))
      )
    );
  }
  let C = v(i, -1), E = C(i), w = f && eh(i);
  return {
    c() {
      t = Et("li"), E.c(), s = Tn(), o = Et("span"), a = Et("span"), u = Et("span"), c = Rr(l), h = Tn(), w && w.c(), g = Tn(), d = Et("span"), p = Rr(_), F(u, "class", "primary svelte-ltkwvy"), F(a, "class", "svelte-ltkwvy"), F(d, "class", "line2 svelte-ltkwvy"), F(o, "class", "texts svelte-ltkwvy"), F(t, "tabindex", "0"), F(
        t,
        "data-selected",
        /*selected*/
        i[1]
      ), F(t, "class", "svelte-ltkwvy"), yr(
        t,
        "selected",
        /*selected*/
        i[1]
      );
    },
    m(R, O) {
      jt(R, t, O), E.m(t, null), lt(t, s), lt(t, o), lt(o, a), lt(a, u), lt(u, c), lt(a, h), w && w.m(a, null), lt(o, g), lt(o, d), lt(d, p), m || (y = [
        Be(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          i[10]
        ),
        Be(
          t,
          "focus",
          /*focus_handler*/
          i[11]
        )
      ], m = !0);
    },
    p(R, [O]) {
      var z, L;
      C === (C = v(R, O)) && E ? E.p(R, O) : (E.d(1), E = C(R), E && (E.c(), E.m(t, s))), O & /*feature*/
      1 && l !== (l = /*feature*/
      R[0].place_name.replace(/,.*/, "") + "") && Zo(c, l), O & /*showPlaceType, feature, imageUrl*/
      37 && (f = /*showPlaceType*/
      R[2] === "always" || /*showPlaceType*/
      R[2] && !/*feature*/
      R[0].address && /*feature*/
      ((z = R[0].properties) == null ? void 0 : z.kind) !== "road" && /*feature*/
      ((L = R[0].properties) == null ? void 0 : L.kind) !== "road_relation" && !/*feature*/
      R[0].id.startsWith("address.") && !/*feature*/
      R[0].id.startsWith("postal_code.") && (!/*feature*/
      R[0].id.startsWith("poi.") || !/*imageUrl*/
      R[5])), f ? w ? w.p(R, O) : (w = eh(R), w.c(), w.m(a, null)) : w && (w.d(1), w = null), O & /*feature*/
      1 && _ !== (_ = /*feature*/
      R[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Zo(p, _), O & /*selected*/
      2 && F(
        t,
        "data-selected",
        /*selected*/
        R[1]
      ), O & /*selected*/
      2 && yr(
        t,
        "selected",
        /*selected*/
        R[1]
      );
    },
    i: zt,
    o: zt,
    d(R) {
      R && Yt(t), E.d(), w && w.d(), m = !1, ir(y);
    }
  };
}
function tm(i, t, e) {
  var m;
  let n, r, { feature: s } = t, { selected: o = !1 } = t, { showPlaceType: a } = t, { missingIconsCache: u } = t, { iconsBaseUrl: l } = t;
  const c = (m = s.properties) == null ? void 0 : m.categories;
  let h, f;
  function g(y) {
    f && u.add(f), e(9, n--, n);
  }
  function d(y) {
    Qc.call(this, i, y);
  }
  function _(y) {
    Qc.call(this, i, y);
  }
  const p = (y) => g(y.currentTarget);
  return i.$$set = (y) => {
    "feature" in y && e(0, s = y.feature), "selected" in y && e(1, o = y.selected), "showPlaceType" in y && e(2, a = y.showPlaceType), "missingIconsCache" in y && e(8, u = y.missingIconsCache), "iconsBaseUrl" in y && e(3, l = y.iconsBaseUrl);
  }, i.$$.update = () => {
    var y, v, C, E;
    if (i.$$.dirty & /*index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    824)
      do
        e(9, n--, n), e(4, h = c == null ? void 0 : c[n]), e(5, f = h ? l + h.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!f || u.has(f)));
    i.$$.dirty & /*feature*/
    1 && e(6, r = s.id.startsWith("poi.") ? (v = (y = s.properties) == null ? void 0 : y.categories) == null ? void 0 : v.join(", ") : ((E = (C = s.properties) == null ? void 0 : C.place_type_name) == null ? void 0 : E[0]) ?? s.place_type[0]);
  }, e(9, n = (c == null ? void 0 : c.length) ?? 0), [
    s,
    o,
    a,
    l,
    h,
    f,
    r,
    g,
    u,
    n,
    d,
    _,
    p
  ];
}
class em extends vs {
  constructor(t) {
    super(), ys(this, t, tm, $_, ms, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function nm(i) {
  let t;
  return {
    c() {
      t = Et("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', F(t, "class", "svelte-7cmwmc");
    },
    m(e, n) {
      jt(e, t, n);
    },
    p: zt,
    i: zt,
    o: zt,
    d(e) {
      e && Yt(t);
    }
  };
}
class im extends vs {
  constructor(t) {
    super(), ys(this, t, null, nm, ms, {});
  }
}
function rm(i) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), F(e, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), F(t, "width", "14"), F(t, "height", "14"), F(t, "viewBox", "0 0 15 15"), F(t, "class", "svelte-en2qvf");
    },
    m(n, r) {
      jt(n, t, r), lt(t, e);
    },
    p: zt,
    i: zt,
    o: zt,
    d(n) {
      n && Yt(t);
    }
  };
}
class sm extends vs {
  constructor(t) {
    super(), ys(this, t, null, rm, ms, {});
  }
}
function om(i) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), F(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), F(t, "viewBox", "0 0 14 14"), F(t, "width", "13"), F(t, "height", "13"), F(t, "class", "svelte-en2qvf");
    },
    m(n, r) {
      jt(n, t, r), lt(t, e);
    },
    p: zt,
    i: zt,
    o: zt,
    d(n) {
      n && Yt(t);
    }
  };
}
class Qf extends vs {
  constructor(t) {
    super(), ys(this, t, null, om, ms, {});
  }
}
function am(i) {
  let t, e;
  return {
    c() {
      t = wr("svg"), e = wr("path"), F(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), F(t, "viewBox", "0 0 30 30"), F(t, "fill", "none"), F(t, "xmlns", "http://www.w3.org/2000/svg"), F(t, "class", "svelte-d2loi5");
    },
    m(n, r) {
      jt(n, t, r), lt(t, e);
    },
    p: zt,
    i: zt,
    o: zt,
    d(n) {
      n && Yt(t);
    }
  };
}
class $f extends vs {
  constructor(t) {
    super(), ys(this, t, null, am, ms, {});
  }
}
function nh(i, t, e) {
  const n = i.slice();
  return n[75] = t[e], n[77] = e, n;
}
function ih(i) {
  let t, e;
  return t = new im({}), {
    c() {
      Nr(t.$$.fragment);
    },
    m(n, r) {
      qi(t, n, r), e = !0;
    },
    i(n) {
      e || (Qt(t.$$.fragment, n), e = !0);
    },
    o(n) {
      Re(t.$$.fragment, n), e = !1;
    },
    d(n) {
      Hi(t, n);
    }
  };
}
function rh(i) {
  let t, e, n, r, s;
  return e = new W_({}), {
    c() {
      t = Et("button"), Nr(e.$$.fragment), F(t, "type", "button"), F(
        t,
        "title",
        /*reverseButtonTitle*/
        i[9]
      ), F(t, "class", "svelte-1r7dvt7"), yr(
        t,
        "active",
        /*reverseActive*/
        i[0]
      );
    },
    m(o, a) {
      jt(o, t, a), qi(e, t, null), n = !0, r || (s = Be(
        t,
        "click",
        /*click_handler_2*/
        i[61]
      ), r = !0);
    },
    p(o, a) {
      (!n || a[0] & /*reverseButtonTitle*/
      512) && F(
        t,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!n || a[0] & /*reverseActive*/
      1) && yr(
        t,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      n || (Qt(e.$$.fragment, o), n = !0);
    },
    o(o) {
      Re(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Yt(t), Hi(e), r = !1, s();
    }
  };
}
function um(i) {
  let t, e = [], n = /* @__PURE__ */ new Map(), r, s, o, a = th(
    /*listFeatures*/
    i[13]
  );
  const u = (l) => (
    /*feature*/
    l[75].id + /*feature*/
    (l[75].address ? "," + /*feature*/
    l[75].address : "")
  );
  for (let l = 0; l < a.length; l += 1) {
    let c = nh(i, a, l), h = u(c);
    n.set(h, e[l] = sh(h, c));
  }
  return {
    c() {
      t = Et("ul");
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      F(t, "class", "svelte-1r7dvt7");
    },
    m(l, c) {
      jt(l, t, c);
      for (let h = 0; h < e.length; h += 1)
        e[h] && e[h].m(t, null);
      r = !0, s || (o = [
        Be(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          i[65]
        ),
        Be(
          t,
          "blur",
          /*blur_handler_1*/
          i[66]
        )
      ], s = !0);
    },
    p(l, c) {
      c[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (a = th(
        /*listFeatures*/
        l[13]
      ), ja(), e = V_(e, c, u, 1, l, a, n, t, z_, sh, null, nh), Za());
    },
    i(l) {
      if (!r) {
        for (let c = 0; c < a.length; c += 1)
          Qt(e[c]);
        r = !0;
      }
    },
    o(l) {
      for (let c = 0; c < e.length; c += 1)
        Re(e[c]);
      r = !1;
    },
    d(l) {
      l && Yt(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      s = !1, ir(o);
    }
  };
}
function lm(i) {
  let t, e, n, r, s, o;
  return e = new $f({}), {
    c() {
      t = Et("div"), Nr(e.$$.fragment), n = Tn(), r = Et("div"), s = Rr(
        /*noResultsMessage*/
        i[7]
      ), F(r, "class", "svelte-1r7dvt7"), F(t, "class", "no-results svelte-1r7dvt7");
    },
    m(a, u) {
      jt(a, t, u), qi(e, t, null), lt(t, n), lt(t, r), lt(r, s), o = !0;
    },
    p(a, u) {
      (!o || u[0] & /*noResultsMessage*/
      128) && Zo(
        s,
        /*noResultsMessage*/
        a[7]
      );
    },
    i(a) {
      o || (Qt(e.$$.fragment, a), o = !0);
    },
    o(a) {
      Re(e.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Yt(t), Hi(e);
    }
  };
}
function cm(i) {
  let t = "", e;
  return {
    c() {
      e = Rr(t);
    },
    m(n, r) {
      jt(n, e, r);
    },
    p: zt,
    i: zt,
    o: zt,
    d(n) {
      n && Yt(e);
    }
  };
}
function hm(i) {
  let t, e, n, r, s, o, a, u, l, c, h;
  return e = new $f({}), u = new Qf({}), {
    c() {
      t = Et("div"), Nr(e.$$.fragment), n = Tn(), r = Et("div"), s = Rr(
        /*errorMessage*/
        i[6]
      ), o = Tn(), a = Et("button"), Nr(u.$$.fragment), F(r, "class", "svelte-1r7dvt7"), F(a, "class", "svelte-1r7dvt7"), F(t, "class", "error svelte-1r7dvt7");
    },
    m(f, g) {
      jt(f, t, g), qi(e, t, null), lt(t, n), lt(t, r), lt(r, s), lt(t, o), lt(t, a), qi(u, a, null), l = !0, c || (h = Be(
        a,
        "click",
        /*click_handler_3*/
        i[62]
      ), c = !0);
    },
    p(f, g) {
      (!l || g[0] & /*errorMessage*/
      64) && Zo(
        s,
        /*errorMessage*/
        f[6]
      );
    },
    i(f) {
      l || (Qt(e.$$.fragment, f), Qt(u.$$.fragment, f), l = !0);
    },
    o(f) {
      Re(e.$$.fragment, f), Re(u.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Yt(t), Hi(e), Hi(u), c = !1, h();
    }
  };
}
function sh(i, t) {
  let e, n, r;
  function s() {
    return (
      /*mouseenter_handler*/
      t[63](
        /*i*/
        t[77]
      )
    );
  }
  function o() {
    return (
      /*focus_handler_1*/
      t[64](
        /*feature*/
        t[75]
      )
    );
  }
  return n = new em({
    props: {
      feature: (
        /*feature*/
        t[75]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[14] === /*i*/
        t[77]
      ),
      missingIconsCache: (
        /*missingIconsCache*/
        t[19]
      ),
      iconsBaseUrl: (
        /*iconsBaseUrl*/
        t[11]
      )
    }
  }), n.$on("mouseenter", s), n.$on("focus", o), {
    key: i,
    first: null,
    c() {
      e = P_(), Nr(n.$$.fragment), this.first = e;
    },
    m(a, u) {
      jt(a, e, u), qi(n, a, u), r = !0;
    },
    p(a, u) {
      t = a;
      const l = {};
      u[0] & /*listFeatures*/
      8192 && (l.feature = /*feature*/
      t[75]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      t[10]), u[0] & /*selectedItemIndex, listFeatures*/
      24576 && (l.selected = /*selectedItemIndex*/
      t[14] === /*i*/
      t[77]), u[0] & /*iconsBaseUrl*/
      2048 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      t[11]), n.$set(l);
    },
    i(a) {
      r || (Qt(n.$$.fragment, a), r = !0);
    },
    o(a) {
      Re(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && Yt(e), Hi(n, a);
    }
  };
}
function fm(i) {
  let t, e, n, r, s, o, a, u, l, c, h, f, g, d, _, p, m, y, v, C;
  r = new sm({}), c = new Qf({});
  let E = (
    /*abortController*/
    i[18] && ih()
  ), w = (
    /*enableReverse*/
    i[5] === !0 && rh(i)
  );
  const P = (
    /*#slots*/
    i[53].default
  ), b = R_(
    P,
    i,
    /*$$scope*/
    i[52],
    null
  ), R = [hm, cm, lm, um], O = [];
  function z(L, B) {
    var M, A;
    return (
      /*error*/
      L[17] ? 0 : (
        /*focusedDelayed*/
        L[15] ? (
          /*listFeatures*/
          ((M = L[13]) == null ? void 0 : M.length) === 0 ? 2 : (
            /*focusedDelayed*/
            L[15] && /*listFeatures*/
            ((A = L[13]) != null && A.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(_ = z(i)) && (p = O[_] = R[_](i)), {
    c() {
      t = Et("form"), e = Et("div"), n = Et("button"), Nr(r.$$.fragment), s = Tn(), o = Et("input"), a = Tn(), u = Et("div"), l = Et("button"), Nr(c.$$.fragment), h = Tn(), E && E.c(), f = Tn(), w && w.c(), g = Tn(), b && b.c(), d = Tn(), p && p.c(), F(n, "class", "search-button svelte-1r7dvt7"), F(n, "type", "button"), F(
        o,
        "placeholder",
        /*placeholder*/
        i[8]
      ), F(
        o,
        "aria-label",
        /*placeholder*/
        i[8]
      ), F(o, "class", "svelte-1r7dvt7"), F(l, "type", "button"), F(
        l,
        "title",
        /*clearButtonTitle*/
        i[3]
      ), F(l, "class", "svelte-1r7dvt7"), F(u, "class", "clear-button-container svelte-1r7dvt7"), yr(
        u,
        "displayable",
        /*searchValue*/
        i[1] !== ""
      ), F(e, "class", "input-group svelte-1r7dvt7"), F(t, "tabindex", "0"), F(t, "class", m = Kc(
        /*className*/
        i[2]
      ) + " svelte-1r7dvt7"), yr(
        t,
        "can-collapse",
        /*collapsed*/
        i[4] && /*searchValue*/
        i[1] === ""
      );
    },
    m(L, B) {
      jt(L, t, B), lt(t, e), lt(e, n), qi(r, n, null), lt(e, s), lt(e, o), i[55](o), Jc(
        o,
        /*searchValue*/
        i[1]
      ), lt(e, a), lt(e, u), lt(u, l), qi(c, l, null), lt(u, h), E && E.m(u, null), lt(e, f), w && w.m(e, null), lt(e, g), b && b.m(e, null), lt(t, d), ~_ && O[_].m(t, null), y = !0, v || (C = [
        Be(
          n,
          "click",
          /*click_handler*/
          i[54]
        ),
        Be(
          o,
          "input",
          /*input_1_input_handler*/
          i[56]
        ),
        Be(
          o,
          "focus",
          /*focus_handler*/
          i[57]
        ),
        Be(
          o,
          "blur",
          /*blur_handler*/
          i[58]
        ),
        Be(
          o,
          "keydown",
          /*handleKeyDown*/
          i[21]
        ),
        Be(
          o,
          "input",
          /*input_handler*/
          i[59]
        ),
        Be(
          l,
          "click",
          /*click_handler_1*/
          i[60]
        ),
        Be(t, "submit", T_(
          /*handleOnSubmit*/
          i[20]
        ))
      ], v = !0);
    },
    p(L, B) {
      (!y || B[0] & /*placeholder*/
      256) && F(
        o,
        "placeholder",
        /*placeholder*/
        L[8]
      ), (!y || B[0] & /*placeholder*/
      256) && F(
        o,
        "aria-label",
        /*placeholder*/
        L[8]
      ), B[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      L[1] && Jc(
        o,
        /*searchValue*/
        L[1]
      ), (!y || B[0] & /*clearButtonTitle*/
      8) && F(
        l,
        "title",
        /*clearButtonTitle*/
        L[3]
      ), /*abortController*/
      L[18] ? E ? B[0] & /*abortController*/
      262144 && Qt(E, 1) : (E = ih(), E.c(), Qt(E, 1), E.m(u, null)) : E && (ja(), Re(E, 1, 1, () => {
        E = null;
      }), Za()), (!y || B[0] & /*searchValue*/
      2) && yr(
        u,
        "displayable",
        /*searchValue*/
        L[1] !== ""
      ), /*enableReverse*/
      L[5] === !0 ? w ? (w.p(L, B), B[0] & /*enableReverse*/
      32 && Qt(w, 1)) : (w = rh(L), w.c(), Qt(w, 1), w.m(e, g)) : w && (ja(), Re(w, 1, 1, () => {
        w = null;
      }), Za()), b && b.p && (!y || B[1] & /*$$scope*/
      2097152) && L_(
        b,
        P,
        L,
        /*$$scope*/
        L[52],
        y ? N_(
          P,
          /*$$scope*/
          L[52],
          B,
          null
        ) : b_(
          /*$$scope*/
          L[52]
        ),
        null
      );
      let M = _;
      _ = z(L), _ === M ? ~_ && O[_].p(L, B) : (p && (ja(), Re(O[M], 1, 1, () => {
        O[M] = null;
      }), Za()), ~_ ? (p = O[_], p ? p.p(L, B) : (p = O[_] = R[_](L), p.c()), Qt(p, 1), p.m(t, null)) : p = null), (!y || B[0] & /*className*/
      4 && m !== (m = Kc(
        /*className*/
        L[2]
      ) + " svelte-1r7dvt7")) && F(t, "class", m), (!y || B[0] & /*className, collapsed, searchValue*/
      22) && yr(
        t,
        "can-collapse",
        /*collapsed*/
        L[4] && /*searchValue*/
        L[1] === ""
      );
    },
    i(L) {
      y || (Qt(r.$$.fragment, L), Qt(c.$$.fragment, L), Qt(E), Qt(w), Qt(b, L), Qt(p), y = !0);
    },
    o(L) {
      Re(r.$$.fragment, L), Re(c.$$.fragment, L), Re(E), Re(w), Re(b, L), Re(p), y = !1;
    },
    d(L) {
      L && Yt(t), Hi(r), i[55](null), Hi(c), E && E.d(), w && w.d(), b && b.d(L), ~_ && O[_].d(), v = !1, ir(C);
    }
  };
}
function gm(i, t, e) {
  const n = t[1], r = t[0], s = n - r;
  return i === n && e ? i : ((i - r) % s + s) % s + r;
}
function oh(i) {
  let t = [...i];
  return t[2] < t[0] && (t[2] += 360), t;
}
function dm(i, t, e) {
  let n, { $$slots: r = {}, $$scope: s } = t, { class: o = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: h = !1 } = t, { country: f = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: d = !1 } = t, { errorMessage: _ = "Something went wrong…" } = t, { filter: p = () => !0 } = t, { flyTo: m = !0 } = t, { fuzzyMatch: y = !0 } = t, { language: v = void 0 } = t, { limit: C = void 0 } = t, { mapController: E = void 0 } = t, { minLength: w = 2 } = t, { noResultsMessage: P = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: b = "Search" } = t, { proximity: R = void 0 } = t, { reverseActive: O = d === "always" } = t, { reverseButtonTitle: z = "toggle reverse geocoding" } = t, { searchValue: L = "" } = t, { showFullGeometry: B = !0 } = t, { showPlaceType: M = "ifNeeded" } = t, { showResultsWhileTyping: A = !0 } = t, { trackProximity: V = !0 } = t, { types: X = void 0 } = t, { zoom: Z = 16 } = t, { maxZoom: nt = 18 } = t, { apiUrl: mt = "https://api.maptiler.com/geocoding" } = t, { fetchParameters: Tt = {} } = t, { iconsBaseUrl: G = "https://cdn.maptiler.com/maptiler-geocoding-control/v0.0.99/icons/" } = t;
  function je() {
    In.focus();
  }
  function Ie() {
    In.blur();
  }
  function Te(N, Dt = !0) {
    e(1, L = N), Dt ? (e(14, Xt = -1), Na()) : (or(), setTimeout(() => {
      In.focus(), In.select();
    }));
  }
  let rr = !1, dt, he, ut, Eo = "", In, Xt = -1, an, mi = [], Kn, sr, ws, xo;
  const Ra = /* @__PURE__ */ new Set(), Sn = D_();
  A_(() => {
    E && (E.setEventHandler(void 0), E.indicateReverse(!1), E.setSelectedMarker(-1), E.setMarkers(void 0, void 0));
  });
  function Na(N) {
    if (sr && (clearTimeout(sr), sr = void 0), Xt > -1 && dt)
      e(49, ut = dt[Xt]), e(1, L = ut.place_name.replace(/,.*/, "")), e(17, an = void 0), e(48, he = void 0), e(14, Xt = -1);
    else if (L) {
      const Dt = N || !Vr();
      Rs(L, { exact: !0 }).then(() => {
        e(48, he = dt), e(49, ut = void 0), Dt && Xr();
      }).catch((un) => e(17, an = un));
    }
  }
  function Vr() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(L);
  }
  async function Rs(N, { byId: Dt = !1, exact: un = !1 } = {}) {
    e(17, an = void 0);
    const Zt = Vr(), Kt = new URLSearchParams();
    v != null && Kt.set("language", Array.isArray(v) ? v.join(",") : v), X && Kt.set("types", X.join(",")), Zt || (u && Kt.set("bbox", u.map((ln) => ln.toFixed(6)).join(",")), f && Kt.set("country", Array.isArray(f) ? f.join(",") : f)), Dt || (R && Kt.set("proximity", R.map((ln) => ln.toFixed(6)).join(",")), (un || !A) && Kt.set("autocomplete", "false"), Kt.set("fuzzyMatch", String(y))), C !== void 0 && (!Zt || (X == null ? void 0 : X.length) === 1) && Kt.set("limit", String(C)), Kt.set("key", a);
    const Jt = mt + "/" + encodeURIComponent(N) + ".json?" + Kt.toString();
    if (Jt === Eo) {
      Dt ? (e(13, dt = void 0), e(49, ut = mi[0])) : e(13, dt = mi);
      return;
    }
    Eo = Jt, Kn == null || Kn.abort();
    const Rt = new AbortController();
    e(18, Kn = Rt);
    let Se;
    try {
      Se = await fetch(Jt, { signal: Rt.signal, ...Tt }).finally(() => {
        Rt === Kn && e(18, Kn = void 0);
      });
    } catch (ln) {
      if (ln && typeof ln == "object" && "name" in ln && ln.name === "AbortError")
        return;
      throw new Error();
    }
    if (!Se.ok)
      throw new Error();
    const ur = await Se.json();
    Sn("response", { url: Jt, featureCollection: ur }), Dt ? (e(13, dt = void 0), e(49, ut = ur.features[0]), mi = [ut]) : (e(13, dt = ur.features.filter(p)), mi = dt, Zt && In.focus());
  }
  function Xr() {
    var un, Zt, Kt, Jt;
    if (!(he != null && he.length) || !m)
      return;
    const N = [180, 90, -180, -90], Dt = !he.some((Rt) => !Rt.matching_text);
    for (const Rt of he)
      (Dt || !Rt.matching_text) && (N[0] = Math.min(N[0], ((un = Rt.bbox) == null ? void 0 : un[0]) ?? Rt.center[0]), N[1] = Math.min(N[1], ((Zt = Rt.bbox) == null ? void 0 : Zt[1]) ?? Rt.center[1]), N[2] = Math.max(N[2], ((Kt = Rt.bbox) == null ? void 0 : Kt[2]) ?? Rt.center[0]), N[3] = Math.max(N[3], ((Jt = Rt.bbox) == null ? void 0 : Jt[3]) ?? Rt.center[1]));
    E && he.length > 0 && (ut && N[0] === N[2] && N[1] === N[3] ? E.flyTo(ut.center, Z) : E.fitBounds(oh(N), 50, nt));
  }
  function Co(N) {
    e(0, O = d === "always"), Te(gm(N[0], [-180, 180], !0).toFixed(6) + "," + N[1].toFixed(6));
  }
  function Io(N) {
    if (!dt)
      return;
    let Dt = N.key === "ArrowDown" ? 1 : N.key === "ArrowUp" ? -1 : 0;
    Dt ? (Xt === -1 && Dt === -1 && e(14, Xt = dt.length), e(14, Xt += Dt), Xt >= dt.length && e(14, Xt = -1), N.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(N.key) && e(14, Xt = -1);
  }
  function or(N = !0) {
    if (e(17, an = void 0), A) {
      if (sr && clearTimeout(sr), L.length < w)
        return;
      const Dt = L;
      sr = window.setTimeout(
        () => {
          Rs(Dt).catch((un) => e(17, an = un));
        },
        N ? g : 0
      );
    } else
      e(13, dt = void 0), e(17, an = void 0);
  }
  function ar(N) {
    e(49, ut = N), e(1, L = N.place_name), e(14, Xt = -1);
  }
  const Vu = () => In.focus();
  function La(N) {
    dl[N ? "unshift" : "push"](() => {
      In = N, e(16, In);
    });
  }
  function ba() {
    L = this.value, e(1, L), e(12, rr), e(27, c);
  }
  const So = () => e(12, rr = !0), Xu = () => e(12, rr = !1), Yu = () => or(), Pa = () => {
    e(1, L = ""), In.focus();
  }, Ta = () => e(0, O = !O), wo = () => e(17, an = void 0), Ma = (N) => e(14, Xt = N), Ro = (N) => ar(N), Yr = () => e(14, Xt = -1), Ur = () => {
  };
  return i.$$set = (N) => {
    "class" in N && e(2, o = N.class), "apiKey" in N && e(25, a = N.apiKey), "bbox" in N && e(26, u = N.bbox), "clearButtonTitle" in N && e(3, l = N.clearButtonTitle), "clearOnBlur" in N && e(27, c = N.clearOnBlur), "collapsed" in N && e(4, h = N.collapsed), "country" in N && e(28, f = N.country), "debounceSearch" in N && e(29, g = N.debounceSearch), "enableReverse" in N && e(5, d = N.enableReverse), "errorMessage" in N && e(6, _ = N.errorMessage), "filter" in N && e(30, p = N.filter), "flyTo" in N && e(31, m = N.flyTo), "fuzzyMatch" in N && e(32, y = N.fuzzyMatch), "language" in N && e(33, v = N.language), "limit" in N && e(34, C = N.limit), "mapController" in N && e(35, E = N.mapController), "minLength" in N && e(36, w = N.minLength), "noResultsMessage" in N && e(7, P = N.noResultsMessage), "placeholder" in N && e(8, b = N.placeholder), "proximity" in N && e(24, R = N.proximity), "reverseActive" in N && e(0, O = N.reverseActive), "reverseButtonTitle" in N && e(9, z = N.reverseButtonTitle), "searchValue" in N && e(1, L = N.searchValue), "showFullGeometry" in N && e(37, B = N.showFullGeometry), "showPlaceType" in N && e(10, M = N.showPlaceType), "showResultsWhileTyping" in N && e(38, A = N.showResultsWhileTyping), "trackProximity" in N && e(39, V = N.trackProximity), "types" in N && e(40, X = N.types), "zoom" in N && e(41, Z = N.zoom), "maxZoom" in N && e(42, nt = N.maxZoom), "apiUrl" in N && e(43, mt = N.apiUrl), "fetchParameters" in N && e(44, Tt = N.fetchParameters), "iconsBaseUrl" in N && e(11, G = N.iconsBaseUrl), "$$scope" in N && e(52, s = N.$$scope);
  }, i.$$.update = () => {
    if (i.$$.dirty[1] & /*trackProximity*/
    256 && (V || e(24, R = void 0)), i.$$.dirty[0] & /*focused, clearOnBlur*/
    134221824 && setTimeout(() => {
      e(15, ws = rr), c && !rr && e(1, L = "");
    }), i.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | i.$$.dirty[1] & /*minLength*/
    32 && L.length < w && (e(49, ut = void 0), e(13, dt = void 0), e(17, an = void 0), e(48, he = dt)), i.$$.dirty[1] & /*showFullGeometry, picked*/
    262208 && B && ut && !ut.address && ut.geometry.type === "Point" && Rs(ut.id, { byId: !0 }).catch((N) => e(17, an = N)), i.$$.dirty[1] & /*mapController, picked, prevIdToFly, flyTo, maxZoom, zoom*/
    789521 && (E && ut && ut.id !== xo && m && (!ut.bbox || ut.bbox[0] === ut.bbox[2] && ut.bbox[1] === ut.bbox[3] ? E.flyTo(ut.center, ut.id.startsWith("poi.") || ut.id.startsWith("address.") ? nt : Z) : E.fitBounds(oh(ut.bbox), 50, nt), e(13, dt = void 0), e(48, he = void 0), e(14, Xt = -1)), e(50, xo = ut == null ? void 0 : ut.id)), i.$$.dirty[0] & /*listFeatures*/
    8192 | i.$$.dirty[1] & /*markedFeatures*/
    131072 && he !== dt && e(48, he = void 0), i.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    393232 && E && E.setMarkers(he, ut), i.$$.dirty[0] & /*searchValue*/
    2 && e(14, Xt = -1), i.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | i.$$.dirty[1] & /*mapController, trackProximity*/
    272 && E && E.setEventHandler((N) => {
      switch (N.type) {
        case "mapClick":
          O && Co(N.coordinates);
          break;
        case "proximityChange":
          e(24, R = V ? N.proximity : void 0);
          break;
        case "markerClick":
          {
            const Dt = dt == null ? void 0 : dt.find((un) => un.id === N.id);
            Dt && ar(Dt);
          }
          break;
        case "markerMouseEnter":
          e(14, Xt = ws ? (dt == null ? void 0 : dt.findIndex((Dt) => Dt.id === N.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          e(14, Xt = -1);
          break;
      }
    }), i.$$.dirty[0] & /*selectedItemIndex*/
    16384 | i.$$.dirty[1] & /*mapController*/
    16 && (E == null || E.setSelectedMarker(Xt)), i.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && e(51, n = dt == null ? void 0 : dt[Xt]), i.$$.dirty[0] & /*searchValue*/
    2 | i.$$.dirty[1] & /*mapController*/
    16) {
      const N = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(L);
      E == null || E.setReverseMarker(N ? [Number(N[1]), Number(N[2])] : void 0);
    }
    i.$$.dirty[1] & /*selected*/
    1048576 && Sn("select", n), i.$$.dirty[1] & /*picked*/
    262144 && Sn("pick", ut), i.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && Sn("optionsVisibilityChange", ws && !!dt), i.$$.dirty[0] & /*listFeatures*/
    8192 && Sn("featuresListed", dt), i.$$.dirty[1] & /*markedFeatures*/
    131072 && Sn("featuresMarked", he), i.$$.dirty[0] & /*reverseActive*/
    1 && Sn("reverseToggle", O), i.$$.dirty[0] & /*searchValue*/
    2 && Sn("queryChange", L), i.$$.dirty[0] & /*reverseActive*/
    1 | i.$$.dirty[1] & /*mapController*/
    16 && E && E.indicateReverse(O);
  }, [
    O,
    L,
    o,
    l,
    h,
    d,
    _,
    P,
    b,
    z,
    M,
    G,
    rr,
    dt,
    Xt,
    ws,
    In,
    an,
    Kn,
    Ra,
    Na,
    Io,
    or,
    ar,
    R,
    a,
    u,
    c,
    f,
    g,
    p,
    m,
    y,
    v,
    C,
    E,
    w,
    B,
    A,
    V,
    X,
    Z,
    nt,
    mt,
    Tt,
    je,
    Ie,
    Te,
    he,
    ut,
    xo,
    n,
    s,
    r,
    Vu,
    La,
    ba,
    So,
    Xu,
    Yu,
    Pa,
    Ta,
    wo,
    Ma,
    Ro,
    Yr,
    Ur
  ];
}
let pm = class extends vs {
  constructor(t) {
    super(), ys(
      this,
      t,
      dm,
      fm,
      ms,
      {
        class: 2,
        apiKey: 25,
        bbox: 26,
        clearButtonTitle: 3,
        clearOnBlur: 27,
        collapsed: 4,
        country: 28,
        debounceSearch: 29,
        enableReverse: 5,
        errorMessage: 6,
        filter: 30,
        flyTo: 31,
        fuzzyMatch: 32,
        language: 33,
        limit: 34,
        mapController: 35,
        minLength: 36,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 24,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 37,
        showPlaceType: 10,
        showResultsWhileTyping: 38,
        trackProximity: 39,
        types: 40,
        zoom: 41,
        maxZoom: 42,
        apiUrl: 43,
        fetchParameters: 44,
        iconsBaseUrl: 11,
        focus: 45,
        blur: 46,
        setQuery: 47
      },
      null,
      [-1, -1, -1]
    );
  }
  get focus() {
    return this.$$.ctx[45];
  }
  get blur() {
    return this.$$.ctx[46];
  }
  get setQuery() {
    return this.$$.ctx[47];
  }
};
class Jl extends Gr {
  /**
   * @param {Geometry|ObjectWithGeometry<Geometry>} [geometryOrProperties]
   *     You may pass a Geometry object directly, or an object literal containing
   *     properties. If you pass an object literal, you may include a Geometry
   *     associated with a `geometry` key.
   */
  constructor(t) {
    if (super(), this.on, this.once, this.un, this.id_ = void 0, this.geometryName_ = "geometry", this.style_ = null, this.styleFunction_ = void 0, this.geometryChangeKey_ = null, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), t)
      if (typeof /** @type {?} */
      t.getSimplifiedGeometry == "function") {
        const e = (
          /** @type {Geometry} */
          t
        );
        this.setGeometry(e);
      } else {
        const e = t;
        this.setProperties(e);
      }
  }
  /**
   * Clone this feature. If the original feature has a geometry it
   * is also cloned. The feature id is not set in the clone.
   * @return {Feature<Geometry>} The clone.
   * @api
   */
  clone() {
    const t = (
      /** @type {Feature<Geometry>} */
      new Jl(this.hasProperties() ? this.getProperties() : null)
    );
    t.setGeometryName(this.getGeometryName());
    const e = this.getGeometry();
    e && t.setGeometry(
      /** @type {Geometry} */
      e.clone()
    );
    const n = this.getStyle();
    return n && t.setStyle(n), t;
  }
  /**
   * Get the feature's default geometry.  A feature may have any number of named
   * geometries.  The "default" geometry (the one that is rendered by default) is
   * set when calling {@link module:ol/Feature~Feature#setGeometry}.
   * @return {Geometry|undefined} The default geometry for the feature.
   * @api
   * @observable
   */
  getGeometry() {
    return (
      /** @type {Geometry|undefined} */
      this.get(this.geometryName_)
    );
  }
  /**
   * Get the feature identifier.  This is a stable identifier for the feature and
   * is either set when reading data from a remote source or set explicitly by
   * calling {@link module:ol/Feature~Feature#setId}.
   * @return {number|string|undefined} Id.
   * @api
   */
  getId() {
    return this.id_;
  }
  /**
   * Get the name of the feature's default geometry.  By default, the default
   * geometry is named `geometry`.
   * @return {string} Get the property name associated with the default geometry
   *     for this feature.
   * @api
   */
  getGeometryName() {
    return this.geometryName_;
  }
  /**
   * Get the feature's style. Will return what was provided to the
   * {@link module:ol/Feature~Feature#setStyle} method.
   * @return {import("./style/Style.js").StyleLike|undefined} The feature style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the feature's style function.
   * @return {import("./style/Style.js").StyleFunction|undefined} Return a function
   * representing the current style of this feature.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @private
   */
  handleGeometryChange_() {
    this.changed();
  }
  /**
   * @private
   */
  handleGeometryChanged_() {
    this.geometryChangeKey_ && (ii(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = ni(
      t,
      Fn.CHANGE,
      this.handleGeometryChange_,
      this
    )), this.changed();
  }
  /**
   * Set the default geometry for the feature.  This will update the property
   * with the name returned by {@link module:ol/Feature~Feature#getGeometryName}.
   * @param {Geometry|undefined} geometry The new geometry.
   * @api
   * @observable
   */
  setGeometry(t) {
    this.set(this.geometryName_, t);
  }
  /**
   * Set the style for the feature to override the layer style.  This can be a
   * single style object, an array of styles, or a function that takes a
   * resolution and returns an array of styles. To unset the feature style, call
   * `setStyle()` without arguments or a falsey value.
   * @param {import("./style/Style.js").StyleLike} [style] Style for this feature.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setStyle(t) {
    this.style_ = t, this.styleFunction_ = t ? _m(t) : void 0, this.changed();
  }
  /**
   * Set the feature id.  The feature id is considered stable and may be used when
   * requesting features or comparing identifiers returned from a remote source.
   * The feature id can be used with the
   * {@link module:ol/source/Vector~VectorSource#getFeatureById} method.
   * @param {number|string|undefined} id The feature id.
   * @api
   * @fires module:ol/events/Event~BaseEvent#event:change
   */
  setId(t) {
    this.id_ = t, this.changed();
  }
  /**
   * Set the property name to be used when getting the feature's default geometry.
   * When calling {@link module:ol/Feature~Feature#getGeometry}, the value of the property with
   * this name will be returned.
   * @param {string} name The property name of the default geometry.
   * @api
   */
  setGeometryName(t) {
    this.removeChangeListener(this.geometryName_, this.handleGeometryChanged_), this.geometryName_ = t, this.addChangeListener(this.geometryName_, this.handleGeometryChanged_), this.handleGeometryChanged_();
  }
}
function _m(i) {
  if (typeof i == "function")
    return i;
  let t;
  return Array.isArray(i) ? t = i : (oe(typeof /** @type {?} */
  i.getZIndex == "function", 41), t = [
    /** @type {import("./style/Style.js").default} */
    i
  ]), function() {
    return t;
  };
}
const Gi = Jl;
class Ql {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.color_ = t.color !== void 0 ? t.color : null;
  }
  /**
   * Clones the style. The color is not cloned if it is an {@link module:ol/colorlike~ColorLike}.
   * @return {Fill} The cloned style.
   * @api
   */
  clone() {
    const t = this.getColor();
    return new Ql({
      color: Array.isArray(t) ? t.slice() : t || void 0
    });
  }
  /**
   * Get the fill color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|null} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|null} color Color.
   * @api
   */
  setColor(t) {
    this.color_ = t;
  }
}
const Jo = Ql;
function tg(i, t, e, n, r, s, o) {
  let a, u;
  const l = (e - t) / n;
  if (l === 1)
    a = t;
  else if (l === 2)
    a = t, u = r;
  else if (l !== 0) {
    let c = i[t], h = i[t + 1], f = 0;
    const g = [0];
    for (let p = t + n; p < e; p += n) {
      const m = i[p], y = i[p + 1];
      f += Math.sqrt((m - c) * (m - c) + (y - h) * (y - h)), g.push(f), c = m, h = y;
    }
    const d = r * f, _ = cd(g, d);
    _ < 0 ? (u = (d - g[-_ - 2]) / (g[-_ - 1] - g[-_ - 2]), a = t + (-_ - 2) * n) : a = t + _ * n;
  }
  o = o > 1 ? o : 2, s = s || new Array(o);
  for (let c = 0; c < o; ++c)
    s[c] = a === void 0 ? NaN : u === void 0 ? i[a + c] : cn(i[a + c], i[a + n + c], u);
  return s;
}
function ml(i, t, e, n, r, s) {
  if (e == t)
    return null;
  let o;
  if (r < i[t + n - 1])
    return s ? (o = i.slice(t, t + n), o[n - 1] = r, o) : null;
  if (i[e - 1] < r)
    return s ? (o = i.slice(e - n, e), o[n - 1] = r, o) : null;
  if (r == i[t + n - 1])
    return i.slice(t, t + n);
  let a = t / n, u = e / n;
  for (; a < u; ) {
    const f = a + u >> 1;
    r < i[(f + 1) * n - 1] ? u = f : a = f + 1;
  }
  const l = i[a * n - 1];
  if (r == l)
    return i.slice((a - 1) * n, (a - 1) * n + n);
  const c = i[(a + 1) * n - 1], h = (r - l) / (c - l);
  o = [];
  for (let f = 0; f < n - 1; ++f)
    o.push(
      cn(
        i[(a - 1) * n + f],
        i[a * n + f],
        h
      )
    );
  return o.push(r), o;
}
function mm(i, t, e, n, r, s, o) {
  if (o)
    return ml(
      i,
      t,
      e[e.length - 1],
      n,
      r,
      s
    );
  let a;
  if (r < i[n - 1])
    return s ? (a = i.slice(0, n), a[n - 1] = r, a) : null;
  if (i[i.length - 1] < r)
    return s ? (a = i.slice(i.length - n), a[n - 1] = r, a) : null;
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    if (t != c) {
      if (r < i[t + n - 1])
        return null;
      if (r <= i[c - 1])
        return ml(
          i,
          t,
          c,
          n,
          r,
          !1
        );
      t = c;
    }
  }
  return null;
}
function eg(i, t, e, n) {
  let r = i[t], s = i[t + 1], o = 0;
  for (let a = t + n; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    o += Math.sqrt((u - r) * (u - r) + (l - s) * (l - s)), r = u, s = l;
  }
  return o;
}
let ym = class yl extends _s {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), this.flatMidpoint_ = null, this.flatMidpointRevision_ = -1, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, e !== void 0 && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      t,
      e
    );
  }
  /**
   * Append the passed coordinate to the coordinates of the linestring.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @api
   */
  appendCoordinate(t) {
    this.flatCoordinates ? Xi(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const t = new yl(
      this.flatCoordinates.slice(),
      this.layout
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < ps(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ul(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), ql(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      n,
      r
    ));
  }
  /**
   * Iterate over each segment, calling the provided callback.
   * If the callback returns a truthy value the function returns that
   * value immediately. Otherwise the function returns `false`.
   *
   * @param {function(this: S, import("../coordinate.js").Coordinate, import("../coordinate.js").Coordinate): T} callback Function
   *     called for each segment. The function will receive two arguments, the start and end coordinates of the segment.
   * @return {T|boolean} Value.
   * @template T,S
   * @api
   */
  forEachSegment(t) {
    return zf(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(t, e) {
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, ml(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e
    ));
  }
  /**
   * Return the coordinates of the linestring.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return mr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the coordinate at the provided fraction along the linestring.
   * The `fraction` is a number between 0 and 1, where 0 is the start of the
   * linestring and 1 is the end.
   * @param {number} fraction Fraction.
   * @param {import("../coordinate.js").Coordinate} [dest] Optional coordinate whose values will
   *     be modified. If not provided, a new coordinate will be returned.
   * @return {import("../coordinate.js").Coordinate} Coordinate of the interpolated point.
   * @api
   */
  getCoordinateAt(t, e) {
    return tg(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      this.stride
    );
  }
  /**
   * Return the length of the linestring on projected plane.
   * @return {number} Length (on projected plane).
   * @api
   */
  getLength() {
    return eg(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * @return {Array<number>} Flat midpoint.
   */
  getFlatMidpoint() {
    return this.flatMidpointRevision_ != this.getRevision() && (this.flatMidpoint_ = this.getCoordinateAt(0.5, this.flatMidpoint_), this.flatMidpointRevision_ = this.getRevision()), this.flatMidpoint_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {LineString} Simplified LineString.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    const e = [];
    return e.length = Zl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new yl(e, "XY");
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "LineString";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return Ru(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the linestring.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = wu(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const uu = ym;
class $l {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.color_ = t.color !== void 0 ? t.color : null, this.lineCap_ = t.lineCap, this.lineDash_ = t.lineDash !== void 0 ? t.lineDash : null, this.lineDashOffset_ = t.lineDashOffset, this.lineJoin_ = t.lineJoin, this.miterLimit_ = t.miterLimit, this.width_ = t.width;
  }
  /**
   * Clones the style.
   * @return {Stroke} The cloned style.
   * @api
   */
  clone() {
    const t = this.getColor();
    return new $l({
      color: Array.isArray(t) ? t.slice() : t || void 0,
      lineCap: this.getLineCap(),
      lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
      lineDashOffset: this.getLineDashOffset(),
      lineJoin: this.getLineJoin(),
      miterLimit: this.getMiterLimit(),
      width: this.getWidth()
    });
  }
  /**
   * Get the stroke color.
   * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the line cap type for the stroke.
   * @return {CanvasLineCap|undefined} Line cap.
   * @api
   */
  getLineCap() {
    return this.lineCap_;
  }
  /**
   * Get the line dash style for the stroke.
   * @return {Array<number>|null} Line dash.
   * @api
   */
  getLineDash() {
    return this.lineDash_;
  }
  /**
   * Get the line dash offset for the stroke.
   * @return {number|undefined} Line dash offset.
   * @api
   */
  getLineDashOffset() {
    return this.lineDashOffset_;
  }
  /**
   * Get the line join type for the stroke.
   * @return {CanvasLineJoin|undefined} Line join.
   * @api
   */
  getLineJoin() {
    return this.lineJoin_;
  }
  /**
   * Get the miter limit for the stroke.
   * @return {number|undefined} Miter limit.
   * @api
   */
  getMiterLimit() {
    return this.miterLimit_;
  }
  /**
   * Get the stroke width.
   * @return {number|undefined} Width.
   * @api
   */
  getWidth() {
    return this.width_;
  }
  /**
   * Set the color.
   *
   * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
   * @api
   */
  setColor(t) {
    this.color_ = t;
  }
  /**
   * Set the line cap.
   *
   * @param {CanvasLineCap|undefined} lineCap Line cap.
   * @api
   */
  setLineCap(t) {
    this.lineCap_ = t;
  }
  /**
   * Set the line dash.
   *
   * @param {Array<number>|null} lineDash Line dash.
   * @api
   */
  setLineDash(t) {
    this.lineDash_ = t;
  }
  /**
   * Set the line dash offset.
   *
   * @param {number|undefined} lineDashOffset Line dash offset.
   * @api
   */
  setLineDashOffset(t) {
    this.lineDashOffset_ = t;
  }
  /**
   * Set the line join.
   *
   * @param {CanvasLineJoin|undefined} lineJoin Line join.
   * @api
   */
  setLineJoin(t) {
    this.lineJoin_ = t;
  }
  /**
   * Set the miter limit.
   *
   * @param {number|undefined} miterLimit Miter limit.
   * @api
   */
  setMiterLimit(t) {
    this.miterLimit_ = t;
  }
  /**
   * Set the width.
   *
   * @param {number|undefined} width Width.
   * @api
   */
  setWidth(t) {
    this.width_ = t;
  }
}
const lu = $l, Ut = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class tc {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = au(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new tc({
      opacity: this.getOpacity(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the symbolizer opacity.
   * @return {number} Opacity.
   * @api
   */
  getOpacity() {
    return this.opacity_;
  }
  /**
   * Determine whether the symbolizer rotates with the map.
   * @return {boolean} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the symoblizer rotation.
   * @return {number} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the symbolizer scale.
   * @return {number|import("../size.js").Size} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the displacement of the shape
   * @return {Array<number>} Shape's center displacement
   * @api
   */
  getDisplacement() {
    return this.displacement_;
  }
  /**
   * Get the declutter mode of the shape
   * @return {"declutter"|"obstacle"|"none"|undefined} Shape's declutter mode
   * @api
   */
  getDeclutterMode() {
    return this.declutterMode_;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @abstract
   * @return {Array<number>} Anchor.
   */
  getAnchor() {
    return yt();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getImage(t) {
    return yt();
  }
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getHitDetectionImage() {
    return yt();
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(t) {
    return 1;
  }
  /**
   * @abstract
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return yt();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return yt();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return yt();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return yt();
  }
  /**
   * Set the displacement.
   *
   * @param {Array<number>} displacement Displacement.
   * @api
   */
  setDisplacement(t) {
    this.displacement_ = t;
  }
  /**
   * Set the opacity.
   *
   * @param {number} opacity Opacity.
   * @api
   */
  setOpacity(t) {
    this.opacity_ = t;
  }
  /**
   * Set whether to rotate the style with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  /**
   * Set the rotation.
   *
   * @param {number} rotation Rotation.
   * @api
   */
  setRotation(t) {
    this.rotation_ = t;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = au(t);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    yt();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    yt();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
    yt();
  }
}
const ng = tc;
function wi(i) {
  return Array.isArray(i) ? Mf(i) : i;
}
class ec extends ng {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    const e = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: 1,
      rotateWithView: e,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      scale: t.scale !== void 0 ? t.scale : 1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    }), this.canvas_ = void 0, this.hitDetectionCanvas_ = null, this.fill_ = t.fill !== void 0 ? t.fill : null, this.origin_ = [0, 0], this.points_ = t.points, this.radius_ = t.radius !== void 0 ? t.radius : t.radius1, this.radius2_ = t.radius2, this.angle_ = t.angle !== void 0 ? t.angle : 0, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.size_ = null, this.renderOptions_ = null, this.render();
  }
  /**
   * Clones the style.
   * @return {RegularShape} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale(), e = new ec({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      points: this.getPoints(),
      radius: this.getRadius(),
      radius2: this.getRadius2(),
      angle: this.getAngle(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    const t = this.size_;
    if (!t)
      return null;
    const e = this.getDisplacement(), n = this.getScaleArray();
    return [
      t[0] / 2 - e[0] / n[0],
      t[1] / 2 + e[1] / n[1]
    ];
  }
  /**
   * Get the angle used in generating the shape.
   * @return {number} Shape's rotation in radians.
   * @api
   */
  getAngle() {
    return this.angle_;
  }
  /**
   * Get the fill style for the shape.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(t) {
    this.fill_ = t, this.render();
  }
  /**
   * @return {HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    return this.hitDetectionCanvas_ || this.createHitDetectionCanvas_(this.renderOptions_), this.hitDetectionCanvas_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(t) {
    let e = this.canvas_[t];
    if (!e) {
      const n = this.renderOptions_, r = oi(
        n.size * t,
        n.size * t
      );
      this.draw_(n, r, t), e = r.canvas, this.canvas_[t] = e;
    }
    return e;
  }
  /**
   * Get the image pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Pixel ratio.
   */
  getPixelRatio(t) {
    return t;
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.size_;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return Ut.LOADED;
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    return this.origin_;
  }
  /**
   * Get the number of points for generating the shape.
   * @return {number} Number of points for stars and regular polygons.
   * @api
   */
  getPoints() {
    return this.points_;
  }
  /**
   * Get the (primary) radius for the shape.
   * @return {number} Radius.
   * @api
   */
  getRadius() {
    return this.radius_;
  }
  /**
   * Get the secondary radius for the shape.
   * @return {number|undefined} Radius2.
   * @api
   */
  getRadius2() {
    return this.radius2_;
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @return {import("../size.js").Size} Size.
   * @api
   */
  getSize() {
    return this.size_;
  }
  /**
   * Get the stroke style for the shape.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(t) {
    this.stroke_ = t, this.render();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
  }
  /**
   * Calculate additional canvas size needed for the miter.
   * @param {string} lineJoin Line join
   * @param {number} strokeWidth Stroke width
   * @param {number} miterLimit Miter limit
   * @return {number} Additional canvas size needed
   * @private
   */
  calculateLineJoinSize_(t, e, n) {
    if (e === 0 || this.points_ === 1 / 0 || t !== "bevel" && t !== "miter")
      return e;
    let r = this.radius_, s = this.radius2_ === void 0 ? r : this.radius2_;
    if (r < s) {
      const w = r;
      r = s, s = w;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, u = s * Math.sin(a), l = Math.sqrt(s * s - u * u), c = r - l, h = Math.sqrt(u * u + c * c), f = h / u;
    if (t === "miter" && f <= n)
      return f * e;
    const g = e / 2 / f, d = e / 2 * (c / h), p = Math.sqrt((r + g) * (r + g) + d * d) - r;
    if (this.radius2_ === void 0 || t === "bevel")
      return p * 2;
    const m = r * Math.sin(a), y = Math.sqrt(r * r - m * m), v = s - y, E = Math.sqrt(m * m + v * v) / m;
    if (E <= n) {
      const w = E * e / 2 - s - r;
      return 2 * Math.max(p, w);
    }
    return p * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let t = Ws, e = 0, n = null, r = 0, s, o = 0;
    this.stroke_ && (s = this.stroke_.getColor(), s === null && (s = qo), s = wi(s), o = this.stroke_.getWidth(), o === void 0 && (o = jo), n = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset(), t = this.stroke_.getLineJoin(), t === void 0 && (t = Ws), e = this.stroke_.getMiterLimit(), e === void 0 && (e = Wo));
    const a = this.calculateLineJoinSize_(t, o, e), u = Math.max(this.radius_, this.radius2_ || 0), l = Math.ceil(2 * u + a);
    return {
      strokeStyle: s,
      strokeWidth: o,
      size: l,
      lineDash: n,
      lineDashOffset: r,
      lineJoin: t,
      miterLimit: e
    };
  }
  /**
   * @protected
   */
  render() {
    this.renderOptions_ = this.createRenderOptions();
    const t = this.renderOptions_.size;
    this.canvas_ = {}, this.size_ = [t, t];
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The rendering context.
   * @param {number} pixelRatio The pixel ratio.
   */
  draw_(t, e, n) {
    if (e.scale(n, n), e.translate(t.size / 2, t.size / 2), this.createPath_(e), this.fill_) {
      let r = this.fill_.getColor();
      r === null && (r = Yi), e.fillStyle = wi(r), e.fill();
    }
    this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   */
  createHitDetectionCanvas_(t) {
    if (this.fill_) {
      let e = this.fill_.getColor(), n = 0;
      if (typeof e == "string" && (e = nu(e)), e === null ? n = 1 : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1), n === 0) {
        const r = oi(
          t.size,
          t.size
        );
        this.hitDetectionCanvas_ = r.canvas, this.drawHitDetectionCanvas_(t, r);
      }
    }
    this.hitDetectionCanvas_ || (this.hitDetectionCanvas_ = this.getImage(1));
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context The context to draw in.
   */
  createPath_(t) {
    let e = this.points_;
    const n = this.radius_;
    if (e === 1 / 0)
      t.arc(0, 0, n, 0, 2 * Math.PI);
    else {
      const r = this.radius2_ === void 0 ? n : this.radius2_;
      this.radius2_ !== void 0 && (e *= 2);
      const s = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
      for (let a = 0; a < e; a++) {
        const u = s + a * o, l = a % 2 === 0 ? n : r;
        t.lineTo(l * Math.cos(u), l * Math.sin(u));
      }
      t.closePath();
    }
  }
  /**
   * @private
   * @param {RenderOptions} renderOptions Render options.
   * @param {CanvasRenderingContext2D} context The context.
   */
  drawHitDetectionCanvas_(t, e) {
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Yi, e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
}
const ig = ec;
class nc extends ig {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || { radius: 5 }, super({
      points: 1 / 0,
      fill: t.fill,
      radius: t.radius,
      stroke: t.stroke,
      scale: t.scale !== void 0 ? t.scale : 1,
      rotation: t.rotation !== void 0 ? t.rotation : 0,
      rotateWithView: t.rotateWithView !== void 0 ? t.rotateWithView : !1,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      declutterMode: t.declutterMode
    });
  }
  /**
   * Clones the style.
   * @return {CircleStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale(), e = new nc({
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      radius: this.getRadius(),
      scale: Array.isArray(t) ? t.slice() : t,
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
    return e.setOpacity(this.getOpacity()), e;
  }
  /**
   * Set the circle radius.
   *
   * @param {number} radius Circle radius.
   * @api
   */
  setRadius(t) {
    this.radius_ = t, this.render();
  }
}
const rg = nc;
class Nu {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = ah, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
    t.clone()), new Nu({
      geometry: t,
      fill: this.getFill() ? this.getFill().clone() : void 0,
      image: this.getImage() ? this.getImage().clone() : void 0,
      renderer: this.getRenderer(),
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      text: this.getText() ? this.getText().clone() : void 0,
      zIndex: this.getZIndex()
    });
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setRenderer} or the `renderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getRenderer() {
    return this.renderer_;
  }
  /**
   * Sets a custom renderer function for this style. When set, `fill`, `stroke`
   * and `image` options of the style will be ignored.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setRenderer(t) {
    this.renderer_ = t;
  }
  /**
   * Sets a custom renderer function for this style used
   * in hit detection.
   * @param {RenderFunction|null} renderer Custom renderer function.
   * @api
   */
  setHitDetectionRenderer(t) {
    this.hitDetectionRenderer_ = t;
  }
  /**
   * Get the custom renderer function that was configured with
   * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
   * @return {RenderFunction|null} Custom renderer function.
   * @api
   */
  getHitDetectionRenderer() {
    return this.hitDetectionRenderer_;
  }
  /**
   * Get the geometry to be rendered.
   * @return {string|import("../geom/Geometry.js").default|GeometryFunction}
   * Feature property or geometry or function that returns the geometry that will
   * be rendered with this style.
   * @api
   */
  getGeometry() {
    return this.geometry_;
  }
  /**
   * Get the function used to generate a geometry for rendering.
   * @return {!GeometryFunction} Function that is called with a feature
   * and returns the geometry to render instead of the feature's geometry.
   * @api
   */
  getGeometryFunction() {
    return this.geometryFunction_;
  }
  /**
   * Get the fill style.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Set the fill style.
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(t) {
    this.fill_ = t;
  }
  /**
   * Get the image style.
   * @return {import("./Image.js").default} Image style.
   * @api
   */
  getImage() {
    return this.image_;
  }
  /**
   * Set the image style.
   * @param {import("./Image.js").default} image Image style.
   * @api
   */
  setImage(t) {
    this.image_ = t;
  }
  /**
   * Get the stroke style.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Set the stroke style.
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(t) {
    this.stroke_ = t;
  }
  /**
   * Get the text style.
   * @return {import("./Text.js").default} Text style.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Set the text style.
   * @param {import("./Text.js").default} text Text style.
   * @api
   */
  setText(t) {
    this.text_ = t;
  }
  /**
   * Get the z-index for the style.
   * @return {number|undefined} ZIndex.
   * @api
   */
  getZIndex() {
    return this.zIndex_;
  }
  /**
   * Set a geometry that is rendered instead of the feature's geometry.
   *
   * @param {string|import("../geom/Geometry.js").default|GeometryFunction} geometry
   *     Feature property or geometry or function returning a geometry to render
   *     for this style.
   * @api
   */
  setGeometry(t) {
    typeof t == "function" ? this.geometryFunction_ = t : typeof t == "string" ? this.geometryFunction_ = function(e) {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        e.get(t)
      );
    } : t ? t !== void 0 && (this.geometryFunction_ = function() {
      return (
        /** @type {import("../geom/Geometry.js").default} */
        t
      );
    }) : this.geometryFunction_ = ah, this.geometry_ = t;
  }
  /**
   * Set the z-index.
   *
   * @param {number|undefined} zIndex ZIndex.
   * @api
   */
  setZIndex(t) {
    this.zIndex_ = t;
  }
}
function vm(i) {
  let t;
  if (typeof i == "function")
    t = i;
  else {
    let e;
    Array.isArray(i) ? e = i : (oe(typeof /** @type {?} */
    i.getZIndex == "function", 41), e = [
      /** @type {Style} */
      i
    ]), t = function() {
      return e;
    };
  }
  return t;
}
let ju = null;
function Em(i, t) {
  if (!ju) {
    const e = new Jo({
      color: "rgba(255,255,255,0.4)"
    }), n = new lu({
      color: "#3399CC",
      width: 1.25
    });
    ju = [
      new Nu({
        image: new rg({
          fill: e,
          stroke: n,
          radius: 5
        }),
        fill: e,
        stroke: n
      })
    ];
  }
  return ju;
}
function ah(i) {
  return i.getGeometry();
}
const cu = Nu, xm = "#333";
class ic {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = au(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new Jo({ color: xm }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new ic({
      font: this.getFont(),
      placement: this.getPlacement(),
      repeat: this.getRepeat(),
      maxAngle: this.getMaxAngle(),
      overflow: this.getOverflow(),
      rotation: this.getRotation(),
      rotateWithView: this.getRotateWithView(),
      scale: Array.isArray(t) ? t.slice() : t,
      text: this.getText(),
      textAlign: this.getTextAlign(),
      justify: this.getJustify(),
      textBaseline: this.getTextBaseline(),
      fill: this.getFill() ? this.getFill().clone() : void 0,
      stroke: this.getStroke() ? this.getStroke().clone() : void 0,
      offsetX: this.getOffsetX(),
      offsetY: this.getOffsetY(),
      backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
      backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
      padding: this.getPadding() || void 0
    });
  }
  /**
   * Get the `overflow` configuration.
   * @return {boolean} Let text overflow the length of the path they follow.
   * @api
   */
  getOverflow() {
    return this.overflow_;
  }
  /**
   * Get the font name.
   * @return {string|undefined} Font.
   * @api
   */
  getFont() {
    return this.font_;
  }
  /**
   * Get the maximum angle between adjacent characters.
   * @return {number} Angle in radians.
   * @api
   */
  getMaxAngle() {
    return this.maxAngle_;
  }
  /**
   * Get the label placement.
   * @return {TextPlacement} Text placement.
   * @api
   */
  getPlacement() {
    return this.placement_;
  }
  /**
   * Get the repeat interval of the text.
   * @return {number|undefined} Repeat interval in pixels.
   * @api
   */
  getRepeat() {
    return this.repeat_;
  }
  /**
   * Get the x-offset for the text.
   * @return {number} Horizontal text offset.
   * @api
   */
  getOffsetX() {
    return this.offsetX_;
  }
  /**
   * Get the y-offset for the text.
   * @return {number} Vertical text offset.
   * @api
   */
  getOffsetY() {
    return this.offsetY_;
  }
  /**
   * Get the fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getFill() {
    return this.fill_;
  }
  /**
   * Determine whether the text rotates with the map.
   * @return {boolean|undefined} Rotate with map.
   * @api
   */
  getRotateWithView() {
    return this.rotateWithView_;
  }
  /**
   * Get the text rotation.
   * @return {number|undefined} Rotation.
   * @api
   */
  getRotation() {
    return this.rotation_;
  }
  /**
   * Get the text scale.
   * @return {number|import("../size.js").Size|undefined} Scale.
   * @api
   */
  getScale() {
    return this.scale_;
  }
  /**
   * Get the symbolizer scale array.
   * @return {import("../size.js").Size} Scale array.
   */
  getScaleArray() {
    return this.scaleArray_;
  }
  /**
   * Get the stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getStroke() {
    return this.stroke_;
  }
  /**
   * Get the text to be rendered.
   * @return {string|Array<string>|undefined} Text.
   * @api
   */
  getText() {
    return this.text_;
  }
  /**
   * Get the text alignment.
   * @return {CanvasTextAlign|undefined} Text align.
   * @api
   */
  getTextAlign() {
    return this.textAlign_;
  }
  /**
   * Get the justification.
   * @return {TextJustify|undefined} Justification.
   * @api
   */
  getJustify() {
    return this.justify_;
  }
  /**
   * Get the text baseline.
   * @return {CanvasTextBaseline|undefined} Text baseline.
   * @api
   */
  getTextBaseline() {
    return this.textBaseline_;
  }
  /**
   * Get the background fill style for the text.
   * @return {import("./Fill.js").default} Fill style.
   * @api
   */
  getBackgroundFill() {
    return this.backgroundFill_;
  }
  /**
   * Get the background stroke style for the text.
   * @return {import("./Stroke.js").default} Stroke style.
   * @api
   */
  getBackgroundStroke() {
    return this.backgroundStroke_;
  }
  /**
   * Get the padding for the text.
   * @return {Array<number>|null} Padding.
   * @api
   */
  getPadding() {
    return this.padding_;
  }
  /**
   * Set the `overflow` property.
   *
   * @param {boolean} overflow Let text overflow the path that it follows.
   * @api
   */
  setOverflow(t) {
    this.overflow_ = t;
  }
  /**
   * Set the font.
   *
   * @param {string|undefined} font Font.
   * @api
   */
  setFont(t) {
    this.font_ = t;
  }
  /**
   * Set the maximum angle between adjacent characters.
   *
   * @param {number} maxAngle Angle in radians.
   * @api
   */
  setMaxAngle(t) {
    this.maxAngle_ = t;
  }
  /**
   * Set the x offset.
   *
   * @param {number} offsetX Horizontal text offset.
   * @api
   */
  setOffsetX(t) {
    this.offsetX_ = t;
  }
  /**
   * Set the y offset.
   *
   * @param {number} offsetY Vertical text offset.
   * @api
   */
  setOffsetY(t) {
    this.offsetY_ = t;
  }
  /**
   * Set the text placement.
   *
   * @param {TextPlacement} placement Placement.
   * @api
   */
  setPlacement(t) {
    this.placement_ = t;
  }
  /**
   * Set the repeat interval of the text.
   * @param {number|undefined} [repeat] Repeat interval in pixels.
   * @api
   */
  setRepeat(t) {
    this.repeat_ = t;
  }
  /**
   * Set whether to rotate the text with the view.
   *
   * @param {boolean} rotateWithView Rotate with map.
   * @api
   */
  setRotateWithView(t) {
    this.rotateWithView_ = t;
  }
  /**
   * Set the fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setFill(t) {
    this.fill_ = t;
  }
  /**
   * Set the rotation.
   *
   * @param {number|undefined} rotation Rotation.
   * @api
   */
  setRotation(t) {
    this.rotation_ = t;
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size|undefined} scale Scale.
   * @api
   */
  setScale(t) {
    this.scale_ = t, this.scaleArray_ = au(t !== void 0 ? t : 1);
  }
  /**
   * Set the stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setStroke(t) {
    this.stroke_ = t;
  }
  /**
   * Set the text.
   *
   * @param {string|Array<string>|undefined} text Text.
   * @api
   */
  setText(t) {
    this.text_ = t;
  }
  /**
   * Set the text alignment.
   *
   * @param {CanvasTextAlign|undefined} textAlign Text align.
   * @api
   */
  setTextAlign(t) {
    this.textAlign_ = t;
  }
  /**
   * Set the justification.
   *
   * @param {TextJustify|undefined} justify Justification.
   * @api
   */
  setJustify(t) {
    this.justify_ = t;
  }
  /**
   * Set the text baseline.
   *
   * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
   * @api
   */
  setTextBaseline(t) {
    this.textBaseline_ = t;
  }
  /**
   * Set the background fill.
   *
   * @param {import("./Fill.js").default} fill Fill style.
   * @api
   */
  setBackgroundFill(t) {
    this.backgroundFill_ = t;
  }
  /**
   * Set the background stroke.
   *
   * @param {import("./Stroke.js").default} stroke Stroke style.
   * @api
   */
  setBackgroundStroke(t) {
    this.backgroundStroke_ = t;
  }
  /**
   * Set the padding (`[top, right, bottom, left]`).
   *
   * @param {Array<number>|null} padding Padding.
   * @api
   */
  setPadding(t) {
    this.padding_ = t;
  }
}
const sg = ic;
function Cm(i, t, e, n, r) {
  og(i, t, e || 0, n || i.length - 1, r || Im);
}
function og(i, t, e, n, r) {
  for (; n > e; ) {
    if (n - e > 600) {
      var s = n - e + 1, o = t - e + 1, a = Math.log(s), u = 0.5 * Math.exp(2 * a / 3), l = 0.5 * Math.sqrt(a * u * (s - u) / s) * (o - s / 2 < 0 ? -1 : 1), c = Math.max(e, Math.floor(t - o * u / s + l)), h = Math.min(n, Math.floor(t + (s - o) * u / s + l));
      og(i, t, c, h, r);
    }
    var f = i[t], g = e, d = n;
    for (No(i, e, t), r(i[n], f) > 0 && No(i, e, n); g < d; ) {
      for (No(i, g, d), g++, d--; r(i[g], f) < 0; )
        g++;
      for (; r(i[d], f) > 0; )
        d--;
    }
    r(i[e], f) === 0 ? No(i, e, d) : (d++, No(i, d, n)), d <= t && (e = d + 1), t <= d && (n = d - 1);
  }
}
function No(i, t, e) {
  var n = i[t];
  i[t] = i[e], i[e] = n;
}
function Im(i, t) {
  return i < t ? -1 : i > t ? 1 : 0;
}
let ag = class {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const n = [];
    if (!za(t, e))
      return n;
    const r = this.toBBox, s = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], u = e.leaf ? r(a) : a;
        za(t, u) && (e.leaf ? n.push(a) : Ku(t, u) ? this._all(a, n) : s.push(a));
      }
      e = s.pop();
    }
    return n;
  }
  collides(t) {
    let e = this.data;
    if (!za(t, e))
      return !1;
    const n = [];
    for (; e; ) {
      for (let r = 0; r < e.children.length; r++) {
        const s = e.children[r], o = e.leaf ? this.toBBox(s) : s;
        if (za(t, o)) {
          if (e.leaf || Ku(t, o))
            return !0;
          n.push(s);
        }
      }
      e = n.pop();
    }
    return !1;
  }
  load(t) {
    if (!(t && t.length))
      return this;
    if (t.length < this._minEntries) {
      for (let n = 0; n < t.length; n++)
        this.insert(t[n]);
      return this;
    }
    let e = this._build(t.slice(), 0, t.length - 1, 0);
    if (!this.data.children.length)
      this.data = e;
    else if (this.data.height === e.height)
      this._splitRoot(this.data, e);
    else {
      if (this.data.height < e.height) {
        const n = this.data;
        this.data = e, e = n;
      }
      this._insert(e, this.data.height - e.height - 1, !0);
    }
    return this;
  }
  insert(t) {
    return t && this._insert(t, this.data.height - 1), this;
  }
  clear() {
    return this.data = Os([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let n = this.data;
    const r = this.toBBox(t), s = [], o = [];
    let a, u, l;
    for (; n || s.length; ) {
      if (n || (n = s.pop(), u = s[s.length - 1], a = o.pop(), l = !0), n.leaf) {
        const c = Sm(t, n.children, e);
        if (c !== -1)
          return n.children.splice(c, 1), s.push(n), this._condense(s), this;
      }
      !l && !n.leaf && Ku(n, r) ? (s.push(n), o.push(a), a = 0, u = n, n = n.children[0]) : u ? (a++, n = u.children[a], l = !1) : n = null;
    }
    return this;
  }
  toBBox(t) {
    return t;
  }
  compareMinX(t, e) {
    return t.minX - e.minX;
  }
  compareMinY(t, e) {
    return t.minY - e.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(t) {
    return this.data = t, this;
  }
  _all(t, e) {
    const n = [];
    for (; t; )
      t.leaf ? e.push(...t.children) : n.push(...t.children), t = n.pop();
    return e;
  }
  _build(t, e, n, r) {
    const s = n - e + 1;
    let o = this._maxEntries, a;
    if (s <= o)
      return a = Os(t.slice(e, n + 1)), bs(a, this.toBBox), a;
    r || (r = Math.ceil(Math.log(s) / Math.log(o)), o = Math.ceil(s / Math.pow(o, r - 1))), a = Os([]), a.leaf = !1, a.height = r;
    const u = Math.ceil(s / o), l = u * Math.ceil(Math.sqrt(o));
    uh(t, e, n, l, this.compareMinX);
    for (let c = e; c <= n; c += l) {
      const h = Math.min(c + l - 1, n);
      uh(t, c, h, u, this.compareMinY);
      for (let f = c; f <= h; f += u) {
        const g = Math.min(f + u - 1, h);
        a.children.push(this._build(t, f, g, r - 1));
      }
    }
    return bs(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, n, r) {
    for (; r.push(e), !(e.leaf || r.length - 1 === n); ) {
      let s = 1 / 0, o = 1 / 0, a;
      for (let u = 0; u < e.children.length; u++) {
        const l = e.children[u], c = Zu(l), h = Nm(t, l) - c;
        h < o ? (o = h, s = c < s ? c : s, a = l) : h === o && c < s && (s = c, a = l);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, n) {
    const r = n ? t : this.toBBox(t), s = [], o = this._chooseSubtree(r, this.data, e, s);
    for (o.children.push(t), Oo(o, r); e >= 0 && s[e].children.length > this._maxEntries; )
      this._split(s, e), e--;
    this._adjustParentBBoxes(r, s, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const n = t[e], r = n.children.length, s = this._minEntries;
    this._chooseSplitAxis(n, s, r);
    const o = this._chooseSplitIndex(n, s, r), a = Os(n.children.splice(o, n.children.length - o));
    a.height = n.height, a.leaf = n.leaf, bs(n, this.toBBox), bs(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(n, a);
  }
  _splitRoot(t, e) {
    this.data = Os([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, bs(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, n) {
    let r, s = 1 / 0, o = 1 / 0;
    for (let a = e; a <= n - e; a++) {
      const u = Mo(t, 0, a, this.toBBox), l = Mo(t, a, n, this.toBBox), c = Lm(u, l), h = Zu(u) + Zu(l);
      c < s ? (s = c, r = a, o = h < o ? h : o) : c === s && h < o && (o = h, r = a);
    }
    return r || n - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, n) {
    const r = t.leaf ? this.compareMinX : wm, s = t.leaf ? this.compareMinY : Rm, o = this._allDistMargin(t, e, n, r), a = this._allDistMargin(t, e, n, s);
    o < a && t.children.sort(r);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, n, r) {
    t.children.sort(r);
    const s = this.toBBox, o = Mo(t, 0, e, s), a = Mo(t, n - e, n, s);
    let u = Ba(o) + Ba(a);
    for (let l = e; l < n - e; l++) {
      const c = t.children[l];
      Oo(o, t.leaf ? s(c) : c), u += Ba(o);
    }
    for (let l = n - e - 1; l >= e; l--) {
      const c = t.children[l];
      Oo(a, t.leaf ? s(c) : c), u += Ba(a);
    }
    return u;
  }
  _adjustParentBBoxes(t, e, n) {
    for (let r = n; r >= 0; r--)
      Oo(e[r], t);
  }
  _condense(t) {
    for (let e = t.length - 1, n; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (n = t[e - 1].children, n.splice(n.indexOf(t[e]), 1)) : this.clear() : bs(t[e], this.toBBox);
  }
};
function Sm(i, t, e) {
  if (!e)
    return t.indexOf(i);
  for (let n = 0; n < t.length; n++)
    if (e(i, t[n]))
      return n;
  return -1;
}
function bs(i, t) {
  Mo(i, 0, i.children.length, t, i);
}
function Mo(i, t, e, n, r) {
  r || (r = Os(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
  for (let s = t; s < e; s++) {
    const o = i.children[s];
    Oo(r, i.leaf ? n(o) : o);
  }
  return r;
}
function Oo(i, t) {
  return i.minX = Math.min(i.minX, t.minX), i.minY = Math.min(i.minY, t.minY), i.maxX = Math.max(i.maxX, t.maxX), i.maxY = Math.max(i.maxY, t.maxY), i;
}
function wm(i, t) {
  return i.minX - t.minX;
}
function Rm(i, t) {
  return i.minY - t.minY;
}
function Zu(i) {
  return (i.maxX - i.minX) * (i.maxY - i.minY);
}
function Ba(i) {
  return i.maxX - i.minX + (i.maxY - i.minY);
}
function Nm(i, t) {
  return (Math.max(t.maxX, i.maxX) - Math.min(t.minX, i.minX)) * (Math.max(t.maxY, i.maxY) - Math.min(t.minY, i.minY));
}
function Lm(i, t) {
  const e = Math.max(i.minX, t.minX), n = Math.max(i.minY, t.minY), r = Math.min(i.maxX, t.maxX), s = Math.min(i.maxY, t.maxY);
  return Math.max(0, r - e) * Math.max(0, s - n);
}
function Ku(i, t) {
  return i.minX <= t.minX && i.minY <= t.minY && t.maxX <= i.maxX && t.maxY <= i.maxY;
}
function za(i, t) {
  return t.minX <= i.maxX && t.minY <= i.maxY && t.maxX >= i.minX && t.maxY >= i.minY;
}
function Os(i) {
  return {
    children: i,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function uh(i, t, e, n, r) {
  const s = [t, e];
  for (; s.length; ) {
    if (e = s.pop(), t = s.pop(), e - t <= n)
      continue;
    const o = t + Math.ceil((e - t) / n / 2) * n;
    Cm(i, o, t, e, r), s.push(t, o, o, e);
  }
}
function bm(i, t, e) {
  const n = (
    /** @type {HTMLImageElement} */
    i
  );
  let r = !0, s = !1, o = !1;
  const a = [
    Qa(n, Fn.LOAD, function() {
      o = !0, s || t();
    })
  ];
  return n.src && Ed ? (s = !0, n.decode().then(function() {
    r && t();
  }).catch(function(u) {
    r && (o ? t() : e());
  })) : a.push(Qa(n, Fn.ERROR, e)), function() {
    r = !1, a.forEach(ii);
  };
}
let Lo = null;
class Pm extends hf {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement} image Image.
   * @param {string|undefined} src Src.
   * @param {import("../size.js").Size} size Size.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default} imageState Image state.
   * @param {import("../color.js").Color} color Color.
   */
  constructor(t, e, n, r, s, o) {
    super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = r, this.canvas_ = {}, this.color_ = o, this.unlisten_ = null, this.imageState_ = s, this.size_ = n, this.src_ = e, this.tainted_;
  }
  /**
   * @private
   */
  initializeImage_() {
    this.image_ = new Image(), this.crossOrigin_ !== null && (this.image_.crossOrigin = this.crossOrigin_);
  }
  /**
   * @private
   * @return {boolean} The image canvas is tainted.
   */
  isTainted_() {
    if (this.tainted_ === void 0 && this.imageState_ === Ut.LOADED) {
      Lo || (Lo = oi(1, 1, void 0, {
        willReadFrequently: !0
      })), Lo.drawImage(this.image_, 0, 0);
      try {
        Lo.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Lo = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(Fn.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = Ut.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = Ut.LOADED, this.size_ ? (this.image_.width = this.size_[0], this.image_.height = this.size_[1]) : this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.dispatchChangeEvent_();
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   */
  getImage(t) {
    return this.image_ || this.initializeImage_(), this.replaceColor_(t), this.canvas_[t] ? this.canvas_[t] : this.image_;
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} Image or Canvas element.
   */
  getPixelRatio(t) {
    return this.replaceColor_(t), this.canvas_[t] ? t : 1;
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.imageState_;
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    if (this.image_ || this.initializeImage_(), !this.hitDetectionImage_)
      if (this.isTainted_()) {
        const t = this.size_[0], e = this.size_[1], n = oi(t, e);
        n.fillRect(0, 0, t, e), this.hitDetectionImage_ = n.canvas;
      } else
        this.hitDetectionImage_ = this.image_;
    return this.hitDetectionImage_;
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   */
  getSize() {
    return this.size_;
  }
  /**
   * @return {string|undefined} Image src.
   */
  getSrc() {
    return this.src_;
  }
  /**
   * Load not yet loaded URI.
   */
  load() {
    if (this.imageState_ === Ut.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = Ut.LOADING;
      try {
        this.image_.src = this.src_;
      } catch {
        this.handleImageError_();
      }
      this.unlisten_ = bm(
        this.image_,
        this.handleImageLoad_.bind(this),
        this.handleImageError_.bind(this)
      );
    }
  }
  /**
   * @param {number} pixelRatio Pixel ratio.
   * @private
   */
  replaceColor_(t) {
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Ut.LOADED)
      return;
    const e = this.image_, n = document.createElement("canvas");
    n.width = Math.ceil(e.width * t), n.height = Math.ceil(e.height * t);
    const r = n.getContext("2d");
    r.scale(t, t), r.drawImage(e, 0, 0), r.globalCompositeOperation = "multiply", r.fillStyle = Tf(this.color_), r.fillRect(0, 0, n.width / t, n.height / t), r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0), this.canvas_[t] = n;
  }
  /**
   * Discards event handlers which listen for load completion or errors.
   *
   * @private
   */
  unlistenImage_() {
    this.unlisten_ && (this.unlisten_(), this.unlisten_ = null);
  }
}
function Tm(i, t, e, n, r, s) {
  let o = kc.get(t, n, s);
  return o || (o = new Pm(i, t, e, n, r, s), kc.set(t, n, s, o)), o;
}
function lh(i, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / i, n / t] : e !== void 0 ? e / i : n !== void 0 ? n / t : 1;
}
class rc extends ng {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = t.opacity !== void 0 ? t.opacity : 1, n = t.rotation !== void 0 ? t.rotation : 0, r = t.scale !== void 0 ? t.scale : 1, s = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: e,
      rotation: n,
      scale: r,
      displacement: t.displacement !== void 0 ? t.displacement : [0, 0],
      rotateWithView: s,
      declutterMode: t.declutterMode
    }), this.anchor_ = t.anchor !== void 0 ? t.anchor : [0.5, 0.5], this.normalizedAnchor_ = null, this.anchorOrigin_ = t.anchorOrigin !== void 0 ? t.anchorOrigin : "top-left", this.anchorXUnits_ = t.anchorXUnits !== void 0 ? t.anchorXUnits : "fraction", this.anchorYUnits_ = t.anchorYUnits !== void 0 ? t.anchorYUnits : "fraction", this.crossOrigin_ = t.crossOrigin !== void 0 ? t.crossOrigin : null;
    const o = t.img !== void 0 ? t.img : null;
    this.imgSize_ = t.imgSize;
    let a = t.src;
    oe(!(a !== void 0 && o), 4), oe(!o || o && this.imgSize_, 5), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
    o.src || ge(o)), oe(a !== void 0 && a.length > 0, 6), oe(
      !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
      69
    );
    const u = t.src !== void 0 ? Ut.IDLE : Ut.LOADED;
    if (this.color_ = t.color !== void 0 ? nu(t.color) : null, this.iconImage_ = Tm(
      o,
      /** @type {string} */
      a,
      this.imgSize_ !== void 0 ? this.imgSize_ : null,
      this.crossOrigin_,
      u,
      this.color_
    ), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, t.width !== void 0 || t.height !== void 0) {
      let l, c;
      if (t.size)
        [l, c] = t.size;
      else {
        const h = this.getImage(1);
        if (h instanceof HTMLCanvasElement || h.src && h.complete)
          l = h.width, c = h.height;
        else {
          this.initialOptions_ = t;
          const f = () => {
            if (this.unlistenImageChange(f), !this.initialOptions_)
              return;
            const g = this.iconImage_.getSize();
            this.setScale(
              lh(
                g[0],
                g[1],
                t.width,
                t.height
              )
            );
          };
          this.listenImageChange(f);
          return;
        }
      }
      l !== void 0 && this.setScale(
        lh(l, c, t.width, t.height)
      );
    }
  }
  /**
   * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
   * @return {Icon} The cloned style.
   * @api
   */
  clone() {
    let t, e, n;
    return this.initialOptions_ ? (e = this.initialOptions_.width, n = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new rc({
      anchor: this.anchor_.slice(),
      anchorOrigin: this.anchorOrigin_,
      anchorXUnits: this.anchorXUnits_,
      anchorYUnits: this.anchorYUnits_,
      color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
      crossOrigin: this.crossOrigin_,
      imgSize: this.imgSize_,
      offset: this.offset_.slice(),
      offsetOrigin: this.offsetOrigin_,
      opacity: this.getOpacity(),
      rotateWithView: this.getRotateWithView(),
      rotation: this.getRotation(),
      scale: t,
      width: e,
      height: n,
      size: this.size_ !== null ? this.size_.slice() : void 0,
      src: this.getSrc(),
      displacement: this.getDisplacement().slice(),
      declutterMode: this.getDeclutterMode()
    });
  }
  /**
   * Get the anchor point in pixels. The anchor determines the center point for the
   * symbolizer.
   * @return {Array<number>} Anchor.
   * @api
   */
  getAnchor() {
    let t = this.normalizedAnchor_;
    if (!t) {
      t = this.anchor_;
      const r = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!r)
          return null;
        t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= r[0]), this.anchorYUnits_ == "fraction" && (t[1] *= r[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!r)
          return null;
        t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + r[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + r[1]);
      }
      this.normalizedAnchor_ = t;
    }
    const e = this.getDisplacement(), n = this.getScaleArray();
    return [
      t[0] - e[0] / n[0],
      t[1] + e[1] / n[1]
    ];
  }
  /**
   * Set the anchor point. The anchor determines the center point for the
   * symbolizer.
   *
   * @param {Array<number>} anchor Anchor.
   * @api
   */
  setAnchor(t) {
    this.anchor_ = t, this.normalizedAnchor_ = null;
  }
  /**
   * Get the icon color.
   * @return {import("../color.js").Color} Color.
   * @api
   */
  getColor() {
    return this.color_;
  }
  /**
   * Get the image icon.
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLImageElement|HTMLCanvasElement} Image or Canvas element.
   * @api
   */
  getImage(t) {
    return this.iconImage_.getImage(t);
  }
  /**
   * Get the pixel ratio.
   * @param {number} pixelRatio Pixel ratio.
   * @return {number} The pixel ratio of the image.
   * @api
   */
  getPixelRatio(t) {
    return this.iconImage_.getPixelRatio(t);
  }
  /**
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return this.iconImage_.getSize();
  }
  /**
   * @return {import("../ImageState.js").default} Image state.
   */
  getImageState() {
    return this.iconImage_.getImageState();
  }
  /**
   * @return {HTMLImageElement|HTMLCanvasElement} Image element.
   */
  getHitDetectionImage() {
    return this.iconImage_.getHitDetectionImage();
  }
  /**
   * Get the origin of the symbolizer.
   * @return {Array<number>} Origin.
   * @api
   */
  getOrigin() {
    if (this.origin_)
      return this.origin_;
    let t = this.offset_;
    if (this.offsetOrigin_ != "top-left") {
      const e = this.getSize(), n = this.iconImage_.getSize();
      if (!e || !n)
        return null;
      t = t.slice(), (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") && (t[0] = n[0] - e[0] - t[0]), (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") && (t[1] = n[1] - e[1] - t[1]);
    }
    return this.origin_ = t, this.origin_;
  }
  /**
   * Get the image URL.
   * @return {string|undefined} Image src.
   * @api
   */
  getSrc() {
    return this.iconImage_.getSrc();
  }
  /**
   * Get the size of the icon (in pixels).
   * @return {import("../size.js").Size} Image size.
   * @api
   */
  getSize() {
    return this.size_ ? this.size_ : this.iconImage_.getSize();
  }
  /**
   * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon width (in pixels).
   * @api
   */
  getWidth() {
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[0] * t[0];
    if (this.iconImage_.getImageState() == Ut.LOADED)
      return this.iconImage_.getSize()[0] * t[0];
  }
  /**
   * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
   * @return {number} Icon height (in pixels).
   * @api
   */
  getHeight() {
    const t = this.getScaleArray();
    if (this.size_)
      return this.size_[1] * t[1];
    if (this.iconImage_.getImageState() == Ut.LOADED)
      return this.iconImage_.getSize()[1] * t[1];
  }
  /**
   * Set the scale.
   *
   * @param {number|import("../size.js").Size} scale Scale.
   * @api
   */
  setScale(t) {
    delete this.initialOptions_, super.setScale(t);
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    this.iconImage_.addEventListener(Fn.CHANGE, t);
  }
  /**
   * Load not yet loaded URI.
   * When rendering a feature with an icon style, the vector renderer will
   * automatically call this method. However, you might want to call this
   * method yourself for preloading or other purposes.
   * @api
   */
  load() {
    this.iconImage_.load();
  }
  /**
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
    this.iconImage_.removeEventListener(Fn.CHANGE, t);
  }
}
const sc = rc;
function ch(i) {
  return new cu({
    fill: Qo(i, ""),
    stroke: $o(i, ""),
    text: Mm(i),
    image: Om(i)
  });
}
function Qo(i, t) {
  const e = i[t + "fill-color"];
  if (e)
    return new Jo({ color: e });
}
function $o(i, t) {
  const e = i[t + "stroke-width"], n = i[t + "stroke-color"];
  if (!(!e && !n))
    return new lu({
      width: e,
      color: n,
      lineCap: i[t + "stroke-line-cap"],
      lineJoin: i[t + "stroke-line-join"],
      lineDash: i[t + "stroke-line-dash"],
      lineDashOffset: i[t + "stroke-line-dash-offset"],
      miterLimit: i[t + "stroke-miter-limit"]
    });
}
function Mm(i) {
  const t = i["text-value"];
  return t ? new sg({
    text: t,
    font: i["text-font"],
    maxAngle: i["text-max-angle"],
    offsetX: i["text-offset-x"],
    offsetY: i["text-offset-y"],
    overflow: i["text-overflow"],
    placement: i["text-placement"],
    repeat: i["text-repeat"],
    scale: i["text-scale"],
    rotateWithView: i["text-rotate-with-view"],
    rotation: i["text-rotation"],
    textAlign: i["text-align"],
    justify: i["text-justify"],
    textBaseline: i["text-baseline"],
    padding: i["text-padding"],
    fill: Qo(i, "text-"),
    backgroundFill: Qo(i, "text-background-"),
    stroke: $o(i, "text-"),
    backgroundStroke: $o(i, "text-background-")
  }) : void 0;
}
function Om(i) {
  const t = i["icon-src"], e = i["icon-img"];
  if (t || e)
    return new sc({
      src: t,
      img: e,
      imgSize: i["icon-img-size"],
      anchor: i["icon-anchor"],
      anchorOrigin: i["icon-anchor-origin"],
      anchorXUnits: i["icon-anchor-x-units"],
      anchorYUnits: i["icon-anchor-y-units"],
      color: i["icon-color"],
      crossOrigin: i["icon-cross-origin"],
      offset: i["icon-offset"],
      displacement: i["icon-displacement"],
      opacity: i["icon-opacity"],
      scale: i["icon-scale"],
      width: i["icon-width"],
      height: i["icon-height"],
      rotation: i["icon-rotation"],
      rotateWithView: i["icon-rotate-with-view"],
      size: i["icon-size"],
      declutterMode: i["icon-declutter-mode"]
    });
  const n = i["shape-points"];
  if (n) {
    const s = "shape-";
    return new ig({
      points: n,
      fill: Qo(i, s),
      stroke: $o(i, s),
      radius: i["shape-radius"],
      radius1: i["shape-radius1"],
      radius2: i["shape-radius2"],
      angle: i["shape-angle"],
      displacement: i["shape-displacement"],
      rotation: i["shape-rotation"],
      rotateWithView: i["shape-rotate-with-view"],
      scale: i["shape-scale"],
      declutterMode: i["shape-declutter-mode"]
    });
  }
  const r = i["circle-radius"];
  if (r) {
    const s = "circle-";
    return new rg({
      radius: r,
      fill: Qo(i, s),
      stroke: $o(i, s),
      displacement: i["circle-displacement"],
      scale: i["circle-scale"],
      rotation: i["circle-rotation"],
      rotateWithView: i["circle-rotate-with-view"],
      declutterMode: i["circle-declutter-mode"]
    });
  }
}
const hh = {
  RENDER_ORDER: "renderOrder"
};
class Am extends __ {
  /**
   * @param {Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = Object.assign({}, t);
    delete e.style, delete e.renderBuffer, delete e.updateWhileAnimating, delete e.updateWhileInteracting, super(e), this.declutter_ = t.declutter !== void 0 ? t.declutter : !1, this.renderBuffer_ = t.renderBuffer !== void 0 ? t.renderBuffer : 100, this.style_ = null, this.styleFunction_ = void 0, this.setStyle(t.style), this.updateWhileAnimating_ = t.updateWhileAnimating !== void 0 ? t.updateWhileAnimating : !1, this.updateWhileInteracting_ = t.updateWhileInteracting !== void 0 ? t.updateWhileInteracting : !1;
  }
  /**
   * @return {boolean} Declutter.
   */
  getDeclutter() {
    return this.declutter_;
  }
  /**
   * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
   * that resolves with an array of features. The array will either contain the topmost feature
   * when a hit was detected, or it will be empty.
   *
   * The hit detection algorithm used for this method is optimized for performance, but is less
   * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
   * Text is not considered, and icons are only represented by their bounding box instead of the exact
   * image.
   *
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with an array of features.
   * @api
   */
  getFeatures(t) {
    return super.getFeatures(t);
  }
  /**
   * @return {number|undefined} Render buffer.
   */
  getRenderBuffer() {
    return this.renderBuffer_;
  }
  /**
   * @return {function(import("../Feature.js").default, import("../Feature.js").default): number|null|undefined} Render
   *     order.
   */
  getRenderOrder() {
    return (
      /** @type {import("../render.js").OrderFunction|null|undefined} */
      this.get(hh.RENDER_ORDER)
    );
  }
  /**
   * Get the style for features.  This returns whatever was passed to the `style`
   * option at construction or to the `setStyle` method.
   * @return {import("../style/Style.js").StyleLike|null|undefined} Layer style.
   * @api
   */
  getStyle() {
    return this.style_;
  }
  /**
   * Get the style function.
   * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
   * @api
   */
  getStyleFunction() {
    return this.styleFunction_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     animating.
   */
  getUpdateWhileAnimating() {
    return this.updateWhileAnimating_;
  }
  /**
   * @return {boolean} Whether the rendered layer should be updated while
   *     interacting.
   */
  getUpdateWhileInteracting() {
    return this.updateWhileInteracting_;
  }
  /**
   * Render declutter items for this layer
   * @param {import("../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(t) {
    t.declutterTree || (t.declutterTree = new ag(9)), this.getRenderer().renderDeclutter(t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(t) {
    this.set(hh.RENDER_ORDER, t);
  }
  /**
   * Set the style for features.  This can be a single style object, an array
   * of styles, or a function that takes a feature and resolution and returns
   * an array of styles. If set to `null`, the layer has no style (a `null` style),
   * so only features that have their own styles will be rendered in the layer. Call
   * `setStyle()` without arguments to reset to the default style. See
   * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
   *
   * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
   * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
   * ```js
   * vectorLayer.setStyle({
   *   "fill-color": "yellow",
   *   "stroke-color": "black",
   *   "stroke-width": 4
   * })
   * ```
   *
   * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
   * @api
   */
  setStyle(t) {
    let e;
    if (t === void 0)
      e = Em;
    else if (t === null)
      e = null;
    else if (typeof t == "function")
      e = t;
    else if (t instanceof cu)
      e = t;
    else if (Array.isArray(t)) {
      const n = t.length, r = new Array(n);
      for (let s = 0; s < n; ++s) {
        const o = t[s];
        o instanceof cu ? r[s] = o : r[s] = ch(o);
      }
      e = r;
    } else
      e = ch(t);
    this.style_ = e, this.styleFunction_ = t === null ? void 0 : vm(this.style_), this.changed();
  }
}
const Dm = Am, ma = {
  BEGIN_GEOMETRY: 0,
  BEGIN_PATH: 1,
  CIRCLE: 2,
  CLOSE_PATH: 3,
  CUSTOM: 4,
  DRAW_CHARS: 5,
  DRAW_IMAGE: 6,
  END_GEOMETRY: 7,
  FILL: 8,
  MOVE_TO_LINE_TO: 9,
  SET_FILL_STYLE: 10,
  SET_STROKE_STYLE: 11,
  STROKE: 12
}, Va = [ma.FILL], vr = [ma.STROKE], Kr = [ma.BEGIN_PATH], fh = [ma.CLOSE_PATH], K = ma;
class Fm {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(t, e, n, r) {
  }
  /**
   * Render a geometry.
   *
   * @param {import("../geom/Geometry.js").default} geometry The geometry to render.
   */
  drawGeometry(t) {
  }
  /**
   * Set the rendering style.
   *
   * @param {import("../style/Style.js").default} style The rendering style.
   */
  setStyle(t) {
  }
  /**
   * @param {import("../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawCircle(t, e) {
  }
  /**
   * @param {import("../Feature.js").default} feature Feature.
   * @param {import("../style/Style.js").default} style Style.
   */
  drawFeature(t, e) {
  }
  /**
   * @param {import("../geom/GeometryCollection.js").default} geometryCollectionGeometry Geometry collection.
   * @param {import("../Feature.js").default} feature Feature.
   */
  drawGeometryCollection(t, e) {
  }
  /**
   * @param {import("../geom/LineString.js").default|import("./Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawLineString(t, e) {
  }
  /**
   * @param {import("../geom/MultiLineString.js").default|import("./Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(t, e) {
  }
  /**
   * @param {import("../geom/MultiPoint.js").default|import("./Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPoint(t, e) {
  }
  /**
   * @param {import("../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPolygon(t, e) {
  }
  /**
   * @param {import("../geom/Point.js").default|import("./Feature.js").default} pointGeometry Point geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(t, e) {
  }
  /**
   * @param {import("../geom/Polygon.js").default|import("./Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(t, e) {
  }
  /**
   * @param {import("../geom/SimpleGeometry.js").default|import("./Feature.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   */
  drawText(t, e) {
  }
  /**
   * @param {import("../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
  }
  /**
   * @param {import("../style/Image.js").default} imageStyle Image style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with a text style.
   */
  setImageStyle(t, e) {
  }
  /**
   * @param {import("../style/Text.js").default} textStyle Text style.
   * @param {import("../render/canvas.js").DeclutterImageWithText} [declutterImageWithText] Shared data for combined decluttering with an image style.
   */
  setTextStyle(t, e) {
  }
}
const ug = Fm;
class km extends ug {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = r, this.maxLineWidth = 0, this.resolution = n, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
    {};
  }
  /**
   * @protected
   * @param {Array<number>} dashArray Dash array.
   * @return {Array<number>} Dash array with pixel ratio applied
   */
  applyPixelRatio(t) {
    const e = this.pixelRatio;
    return e == 1 ? t : t.map(function(n) {
      return n * e;
    });
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} stride Stride.
   * @protected
   * @return {number} My end
   */
  appendFlatPointCoordinates(t, e) {
    const n = this.getBufferedMaxExtent(), r = this.tmpCoordinate_, s = this.coordinates;
    let o = s.length;
    for (let a = 0, u = t.length; a < u; a += e)
      r[0] = t[a], r[1] = t[a + 1], Bd(n, r) && (s[o++] = r[0], s[o++] = r[1]);
    return o;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} closed Last input coordinate equals first.
   * @param {boolean} skipFirst Skip first coordinate.
   * @protected
   * @return {number} My end.
   */
  appendFlatLineCoordinates(t, e, n, r, s, o) {
    const a = this.coordinates;
    let u = a.length;
    const l = this.getBufferedMaxExtent();
    o && (e += r);
    let c = t[e], h = t[e + 1];
    const f = this.tmpCoordinate_;
    let g = !0, d, _, p;
    for (d = e + r; d < n; d += r)
      f[0] = t[d], f[1] = t[d + 1], p = rl(l, f), p !== _ ? (g && (a[u++] = c, a[u++] = h, g = !1), a[u++] = f[0], a[u++] = f[1]) : p === fe.INTERSECTING ? (a[u++] = f[0], a[u++] = f[1], g = !1) : g = !0, c = f[0], h = f[1], _ = p;
    return (s && g || d === e + r) && (a[u++] = c, a[u++] = h), u;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(t, e, n, r, s) {
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o], l = this.appendFlatLineCoordinates(
        t,
        e,
        u,
        r,
        !1,
        !1
      );
      s.push(l), e = u;
    }
    return e;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(t, e, n, r) {
    this.beginGeometry(t, e);
    const s = t.getType(), o = t.getStride(), a = this.coordinates.length;
    let u, l, c, h, f;
    switch (s) {
      case "MultiPolygon":
        u = /** @type {import("../../geom/MultiPolygon.js").default} */
        t.getOrientedFlatCoordinates(), h = [];
        const g = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        f = 0;
        for (let d = 0, _ = g.length; d < _; ++d) {
          const p = [];
          f = this.drawCustomCoordinates_(
            u,
            f,
            g[d],
            o,
            p
          ), h.push(p);
        }
        this.instructions.push([
          K.CUSTOM,
          a,
          h,
          t,
          n,
          ul
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          h,
          t,
          r || n,
          ul
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        c = [], u = s == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          t.getOrientedFlatCoordinates()
        ) : t.getFlatCoordinates(), f = this.drawCustomCoordinates_(
          u,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          t.getEnds(),
          o,
          c
        ), this.instructions.push([
          K.CUSTOM,
          a,
          c,
          t,
          n,
          Xo
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          c,
          t,
          r || n,
          Xo
        ]);
        break;
      case "LineString":
      case "Circle":
        u = t.getFlatCoordinates(), l = this.appendFlatLineCoordinates(
          u,
          0,
          u.length,
          o,
          !1,
          !1
        ), this.instructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          n,
          mr
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          r || n,
          mr
        ]);
        break;
      case "MultiPoint":
        u = t.getFlatCoordinates(), l = this.appendFlatPointCoordinates(u, o), l > a && (this.instructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          n,
          mr
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          r || n,
          mr
        ]));
        break;
      case "Point":
        u = t.getFlatCoordinates(), this.coordinates.push(u[0], u[1]), l = this.coordinates.length, this.instructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          n
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          r || n
        ]);
        break;
    }
    this.endGeometry(e);
  }
  /**
   * @protected
   * @param {import("../../geom/Geometry").default|import("../Feature.js").default} geometry The geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  beginGeometry(t, e) {
    this.beginGeometryInstruction1_ = [
      K.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      K.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.hitDetectionInstructions.push(this.beginGeometryInstruction2_);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return {
      instructions: this.instructions,
      hitDetectionInstructions: this.hitDetectionInstructions,
      coordinates: this.coordinates
    };
  }
  /**
   * Reverse the hit detection instructions.
   */
  reverseHitDetectionInstructions() {
    const t = this.hitDetectionInstructions;
    t.reverse();
    let e;
    const n = t.length;
    let r, s, o = -1;
    for (e = 0; e < n; ++e)
      r = t[e], s = /** @type {import("./Instruction.js").default} */
      r[0], s == K.END_GEOMETRY ? o = e : s == K.BEGIN_GEOMETRY && (r[2] = e, hd(this.hitDetectionInstructions, o, e), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    const n = this.state;
    if (t) {
      const r = t.getColor();
      n.fillStyle = wi(
        r || Yi
      );
    } else
      n.fillStyle = void 0;
    if (e) {
      const r = e.getColor();
      n.strokeStyle = wi(
        r || qo
      );
      const s = e.getLineCap();
      n.lineCap = s !== void 0 ? s : ru;
      const o = e.getLineDash();
      n.lineDash = o ? o.slice() : Yo;
      const a = e.getLineDashOffset();
      n.lineDashOffset = a || Uo;
      const u = e.getLineJoin();
      n.lineJoin = u !== void 0 ? u : Ws;
      const l = e.getWidth();
      n.lineWidth = l !== void 0 ? l : jo;
      const c = e.getMiterLimit();
      n.miterLimit = c !== void 0 ? c : Wo, n.lineWidth > this.maxLineWidth && (this.maxLineWidth = n.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      n.strokeStyle = void 0, n.lineCap = void 0, n.lineDash = null, n.lineDashOffset = void 0, n.lineJoin = void 0, n.lineWidth = void 0, n.miterLimit = void 0;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(t) {
    const e = t.fillStyle, n = [K.SET_FILL_STYLE, e];
    return typeof e != "string" && n.push(!0), n;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    this.instructions.push(this.createStroke(t));
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Stroke instruction.
   */
  createStroke(t) {
    return [
      K.SET_STROKE_STYLE,
      t.strokeStyle,
      t.lineWidth * this.pixelRatio,
      t.lineCap,
      t.lineJoin,
      t.miterLimit,
      this.applyPixelRatio(t.lineDash),
      t.lineDashOffset * this.pixelRatio
    ];
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState):Array<*>} createFill Create fill.
   */
  updateFillStyle(t, e) {
    const n = t.fillStyle;
    (typeof n != "string" || t.currentFillStyle != n) && (n !== void 0 && this.instructions.push(e.call(this, t)), t.currentFillStyle = n);
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @param {function(this:CanvasBuilder, import("../canvas.js").FillStrokeState): void} applyStroke Apply stroke.
   */
  updateStrokeStyle(t, e) {
    const n = t.strokeStyle, r = t.lineCap, s = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, u = t.lineWidth, l = t.miterLimit;
    (t.currentStrokeStyle != n || t.currentLineCap != r || s != t.currentLineDash && !go(t.currentLineDash, s) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != u || t.currentMiterLimit != l) && (n !== void 0 && e.call(this, t), t.currentStrokeStyle = n, t.currentLineCap = r, t.currentLineDash = s, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = u, t.currentMiterLimit = l);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(t) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const e = [K.END_GEOMETRY, t];
    this.instructions.push(e), this.hitDetectionInstructions.push(e);
  }
  /**
   * Get the buffered rendering extent.  Rendering will be clipped to the extent
   * provided to the constructor.  To account for symbolizers that may intersect
   * this extent, we calculate a buffered extent (e.g. based on stroke width).
   * @return {import("../../extent.js").Extent} The buffered rendering extent.
   * @protected
   */
  getBufferedMaxExtent() {
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Gd(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      Bl(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
const ya = km;
class Gm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(t, e, n, r), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(t, e) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e);
    const n = t.getFlatCoordinates(), r = t.getStride(), s = this.coordinates.length, o = this.appendFlatPointCoordinates(n, r);
    this.instructions.push([
      K.DRAW_IMAGE,
      s,
      o,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      K.DRAW_IMAGE,
      s,
      o,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      this.opacity_,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} multiPointGeometry MultiPoint geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPoint(t, e) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e);
    const n = t.getFlatCoordinates(), r = t.getStride(), s = this.coordinates.length, o = this.appendFlatPointCoordinates(n, r);
    this.instructions.push([
      K.DRAW_IMAGE,
      s,
      o,
      this.image_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_ * this.imagePixelRatio_,
      this.anchorY_ * this.imagePixelRatio_,
      Math.ceil(this.height_ * this.imagePixelRatio_),
      this.opacity_,
      this.originX_ * this.imagePixelRatio_,
      this.originY_ * this.imagePixelRatio_,
      this.rotateWithView_,
      this.rotation_,
      [
        this.scale_[0] * this.pixelRatio / this.imagePixelRatio_,
        this.scale_[1] * this.pixelRatio / this.imagePixelRatio_
      ],
      Math.ceil(this.width_ * this.imagePixelRatio_),
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.hitDetectionInstructions.push([
      K.DRAW_IMAGE,
      s,
      o,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      this.opacity_,
      this.originX_,
      this.originY_,
      this.rotateWithView_,
      this.rotation_,
      this.scale_,
      this.width_,
      this.declutterMode_,
      this.declutterImageWithText_
    ]), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    return this.reverseHitDetectionInstructions(), this.anchorX_ = void 0, this.anchorY_ = void 0, this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.height_ = void 0, this.scale_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.width_ = void 0, super.finish();
  }
  /**
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   * @param {Object} [sharedData] Shared data.
   */
  setImageStyle(t, e) {
    const n = t.getAnchor(), r = t.getSize(), s = t.getOrigin();
    this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = n[0], this.anchorY_ = n[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = r[1], this.opacity_ = t.getOpacity(), this.originX_ = s[0], this.originY_ = s[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = r[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
  }
}
const Bm = Gm;
class zm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(t, e, n, r);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(t, e, n, r) {
    const s = this.coordinates.length, o = this.appendFlatLineCoordinates(
      t,
      e,
      n,
      r,
      !1,
      !1
    ), a = [
      K.MOVE_TO_LINE_TO,
      s,
      o
    ];
    return this.instructions.push(a), this.hitDetectionInstructions.push(a), n;
  }
  /**
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} lineStringGeometry Line string geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawLineString(t, e) {
    const n = this.state, r = n.strokeStyle, s = n.lineWidth;
    if (r === void 0 || s === void 0)
      return;
    this.updateStrokeStyle(n, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push(
      [
        K.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        Yo,
        Uo
      ],
      Kr
    );
    const o = t.getFlatCoordinates(), a = t.getStride();
    this.drawFlatCoordinates_(
      o,
      0,
      o.length,
      a
    ), this.hitDetectionInstructions.push(vr), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(t, e) {
    const n = this.state, r = n.strokeStyle, s = n.lineWidth;
    if (r === void 0 || s === void 0)
      return;
    this.updateStrokeStyle(n, this.applyStroke), this.beginGeometry(t, e), this.hitDetectionInstructions.push(
      [
        K.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        n.lineDash,
        n.lineDashOffset
      ],
      Kr
    );
    const o = t.getEnds(), a = t.getFlatCoordinates(), u = t.getStride();
    let l = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      l = this.drawFlatCoordinates_(
        a,
        l,
        /** @type {number} */
        o[c],
        u
      );
    this.hitDetectionInstructions.push(vr), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(vr), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(vr), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(Kr);
  }
}
const Vm = zm;
class Xm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(t, e, n, r);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(t, e, n, r) {
    const s = this.state, o = s.fillStyle !== void 0, a = s.strokeStyle !== void 0, u = n.length;
    this.instructions.push(Kr), this.hitDetectionInstructions.push(Kr);
    for (let l = 0; l < u; ++l) {
      const c = n[l], h = this.coordinates.length, f = this.appendFlatLineCoordinates(
        t,
        e,
        c,
        r,
        !0,
        !a
      ), g = [
        K.MOVE_TO_LINE_TO,
        h,
        f
      ];
      this.instructions.push(g), this.hitDetectionInstructions.push(g), a && (this.instructions.push(fh), this.hitDetectionInstructions.push(fh)), e = c;
    }
    return o && (this.instructions.push(Va), this.hitDetectionInstructions.push(Va)), a && (this.instructions.push(vr), this.hitDetectionInstructions.push(vr)), e;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   */
  drawCircle(t, e) {
    const n = this.state, r = n.fillStyle, s = n.strokeStyle;
    if (r === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Yi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      n.lineDash,
      n.lineDashOffset
    ]);
    const o = t.getFlatCoordinates(), a = t.getStride(), u = this.coordinates.length;
    this.appendFlatLineCoordinates(
      o,
      0,
      o.length,
      a,
      !1,
      !1
    );
    const l = [K.CIRCLE, u];
    this.instructions.push(Kr, l), this.hitDetectionInstructions.push(Kr, l), n.fillStyle !== void 0 && (this.instructions.push(Va), this.hitDetectionInstructions.push(Va)), n.strokeStyle !== void 0 && (this.instructions.push(vr), this.hitDetectionInstructions.push(vr)), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(t, e) {
    const n = this.state, r = n.fillStyle, s = n.strokeStyle;
    if (r === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Yi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      n.lineDash,
      n.lineDashOffset
    ]);
    const o = t.getEnds(), a = t.getOrientedFlatCoordinates(), u = t.getStride();
    this.drawFlatCoordinatess_(
      a,
      0,
      /** @type {Array<number>} */
      o,
      u
    ), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiPolygon.js").default} multiPolygonGeometry MultiPolygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiPolygon(t, e) {
    const n = this.state, r = n.fillStyle, s = n.strokeStyle;
    if (r === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Yi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      n.lineDash,
      n.lineDashOffset
    ]);
    const o = t.getEndss(), a = t.getOrientedFlatCoordinates(), u = t.getStride();
    let l = 0;
    for (let c = 0, h = o.length; c < h; ++c)
      l = this.drawFlatCoordinatess_(
        a,
        l,
        o[c],
        u
      );
    this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    this.reverseHitDetectionInstructions(), this.state = null;
    const t = this.tolerance;
    if (t !== 0) {
      const e = this.coordinates;
      for (let n = 0, r = e.length; n < r; ++n)
        e[n] = qr(e[n], t);
    }
    return super.finish();
  }
  /**
   * @private
   */
  setFillStrokeStyles_() {
    const t = this.state;
    t.fillStyle !== void 0 && this.updateFillStyle(t, this.createFill), t.strokeStyle !== void 0 && this.updateStrokeStyle(t, this.applyStroke);
  }
}
const gh = Xm;
function Ym(i, t, e, n, r) {
  const s = [];
  let o = e, a = 0, u = t.slice(e, 2);
  for (; a < i && o + r < n; ) {
    const [l, c] = u.slice(-2), h = t[o + r], f = t[o + r + 1], g = Math.sqrt(
      (h - l) * (h - l) + (f - c) * (f - c)
    );
    if (a += g, a >= i) {
      const d = (i - a + g) / g, _ = cn(l, h, d), p = cn(c, f, d);
      u.push(_, p), s.push(u), u = [_, p], a == i && (o += r), a = 0;
    } else if (a < i)
      u.push(
        t[o + r],
        t[o + r + 1]
      ), o += r;
    else {
      const d = g - a, _ = cn(l, h, d / g), p = cn(c, f, d / g);
      u.push(_, p), s.push(u), u = [_, p], a = 0, o += r;
    }
  }
  return a > 0 && s.push(u), s;
}
function Um(i, t, e, n, r) {
  let s = e, o = e, a = 0, u = 0, l = e, c, h, f, g, d, _, p, m, y, v;
  for (h = e; h < n; h += r) {
    const C = t[h], E = t[h + 1];
    d !== void 0 && (y = C - d, v = E - _, g = Math.sqrt(y * y + v * v), p !== void 0 && (u += f, c = Math.acos((p * y + m * v) / (f * g)), c > i && (u > a && (a = u, s = l, o = h), u = 0, l = h - r)), f = g, p = y, m = v), d = C, _ = E;
  }
  return u += g, u > a ? [l, h] : [s, o];
}
const ko = {
  left: 0,
  end: 0,
  center: 0.5,
  right: 1,
  start: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1
};
class Wm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(t, e, n, r), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
    {}, this.textStates = {}, this.textKey_ = "", this.fillKey_ = "", this.strokeKey_ = "", this.declutterImageWithText_ = void 0;
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = super.finish();
    return t.textStates = this.textStates, t.fillStates = this.fillStates, t.strokeStates = this.strokeStates, t;
  }
  /**
   * @param {import("../../geom/SimpleGeometry.js").default|import("../Feature.js").default} geometry Geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawText(t, e) {
    const n = this.textFillState_, r = this.textStrokeState_, s = this.textState_;
    if (this.text_ === "" || !s || !n && !r)
      return;
    const o = this.coordinates;
    let a = o.length;
    const u = t.getType();
    let l = null, c = t.getStride();
    if (s.placement === "line" && (u == "LineString" || u == "MultiLineString" || u == "Polygon" || u == "MultiPolygon")) {
      if (!ti(this.getBufferedMaxExtent(), t.getExtent()))
        return;
      let h;
      if (l = t.getFlatCoordinates(), u == "LineString")
        h = [l.length];
      else if (u == "MultiLineString")
        h = /** @type {import("../../geom/MultiLineString.js").default} */
        t.getEnds();
      else if (u == "Polygon")
        h = /** @type {import("../../geom/Polygon.js").default} */
        t.getEnds().slice(0, 1);
      else if (u == "MultiPolygon") {
        const _ = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        h = [];
        for (let p = 0, m = _.length; p < m; ++p)
          h.push(_[p][0]);
      }
      this.beginGeometry(t, e);
      const f = s.repeat, g = f ? void 0 : s.textAlign;
      let d = 0;
      for (let _ = 0, p = h.length; _ < p; ++_) {
        let m;
        f ? m = Ym(
          f * this.resolution,
          l,
          d,
          h[_],
          c
        ) : m = [l.slice(d, h[_])];
        for (let y = 0, v = m.length; y < v; ++y) {
          const C = m[y];
          let E = 0, w = C.length;
          if (g == null) {
            const b = Um(
              s.maxAngle,
              C,
              0,
              C.length,
              2
            );
            E = b[0], w = b[1];
          }
          for (let b = E; b < w; b += c)
            o.push(C[b], C[b + 1]);
          const P = o.length;
          d = h[_], this.drawChars_(a, P), a = P;
        }
      }
      this.endGeometry(e);
    } else {
      let h = s.overflow ? null : [];
      switch (u) {
        case "Point":
        case "MultiPoint":
          l = /** @type {import("../../geom/MultiPoint.js").default} */
          t.getFlatCoordinates();
          break;
        case "LineString":
          l = /** @type {import("../../geom/LineString.js").default} */
          t.getFlatMidpoint();
          break;
        case "Circle":
          l = /** @type {import("../../geom/Circle.js").default} */
          t.getCenter();
          break;
        case "MultiLineString":
          l = /** @type {import("../../geom/MultiLineString.js").default} */
          t.getFlatMidpoints(), c = 2;
          break;
        case "Polygon":
          l = /** @type {import("../../geom/Polygon.js").default} */
          t.getFlatInteriorPoint(), s.overflow || h.push(l[2] / this.resolution), c = 3;
          break;
        case "MultiPolygon":
          const p = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getFlatInteriorPoints()
          );
          l = [];
          for (let m = 0, y = p.length; m < y; m += 3)
            s.overflow || h.push(p[m + 2] / this.resolution), l.push(p[m], p[m + 1]);
          if (l.length === 0)
            return;
          c = 2;
          break;
      }
      const f = this.appendFlatPointCoordinates(l, c);
      if (f === a)
        return;
      if (h && (f - a) / 2 !== l.length / c) {
        let p = a / 2;
        h = h.filter((m, y) => {
          const v = o[(p + y) * 2] === l[y * c] && o[(p + y) * 2 + 1] === l[y * c + 1];
          return v || --p, v;
        });
      }
      this.saveTextStates_(), (s.backgroundFill || s.backgroundStroke) && (this.setFillStrokeStyle(
        s.backgroundFill,
        s.backgroundStroke
      ), s.backgroundFill && (this.updateFillStyle(this.state, this.createFill), this.hitDetectionInstructions.push(this.createFill(this.state))), s.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
      let g = s.padding;
      if (g != jr && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let p = s.padding[0], m = s.padding[1], y = s.padding[2], v = s.padding[3];
        s.scale[0] < 0 && (m = -m, v = -v), s.scale[1] < 0 && (p = -p, y = -y), g = [p, m, y, v];
      }
      const d = this.pixelRatio;
      this.instructions.push([
        K.DRAW_IMAGE,
        a,
        f,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [1, 1],
        NaN,
        void 0,
        this.declutterImageWithText_,
        g == jr ? jr : g.map(function(p) {
          return p * d;
        }),
        !!s.backgroundFill,
        !!s.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        h
      ]);
      const _ = 1 / d;
      this.hitDetectionInstructions.push([
        K.DRAW_IMAGE,
        a,
        f,
        null,
        NaN,
        NaN,
        NaN,
        1,
        0,
        0,
        this.textRotateWithView_,
        this.textRotation_,
        [_, _],
        NaN,
        void 0,
        this.declutterImageWithText_,
        g,
        !!s.backgroundFill,
        !!s.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        h
      ]), this.endGeometry(e);
    }
  }
  /**
   * @private
   */
  saveTextStates_() {
    const t = this.textStrokeState_, e = this.textState_, n = this.textFillState_, r = this.strokeKey_;
    t && (r in this.strokeStates || (this.strokeStates[r] = {
      strokeStyle: t.strokeStyle,
      lineCap: t.lineCap,
      lineDashOffset: t.lineDashOffset,
      lineWidth: t.lineWidth,
      lineJoin: t.lineJoin,
      miterLimit: t.miterLimit,
      lineDash: t.lineDash
    }));
    const s = this.textKey_;
    s in this.textStates || (this.textStates[s] = {
      font: e.font,
      textAlign: e.textAlign || Ho,
      justify: e.justify,
      textBaseline: e.textBaseline || su,
      scale: e.scale
    });
    const o = this.fillKey_;
    n && (o in this.fillStates || (this.fillStates[o] = {
      fillStyle: n.fillStyle
    }));
  }
  /**
   * @private
   * @param {number} begin Begin.
   * @param {number} end End.
   */
  drawChars_(t, e) {
    const n = this.textStrokeState_, r = this.textState_, s = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const u = this.pixelRatio, l = ko[r.textBaseline], c = this.textOffsetY_ * u, h = this.text_, f = n ? n.lineWidth * Math.abs(r.scale[0]) / 2 : 0;
    this.instructions.push([
      K.DRAW_CHARS,
      t,
      e,
      l,
      r.overflow,
      a,
      r.maxAngle,
      u,
      c,
      s,
      f * u,
      h,
      o,
      1
    ]), this.hitDetectionInstructions.push([
      K.DRAW_CHARS,
      t,
      e,
      l,
      r.overflow,
      a,
      r.maxAngle,
      1,
      c,
      s,
      f,
      h,
      o,
      1 / u
    ]);
  }
  /**
   * @param {import("../../style/Text.js").default} textStyle Text style.
   * @param {Object} [sharedData] Shared data.
   */
  setTextStyle(t, e) {
    let n, r, s;
    if (!t)
      this.text_ = "";
    else {
      const o = t.getFill();
      o ? (r = this.textFillState_, r || (r = /** @type {import("../canvas.js").FillState} */
      {}, this.textFillState_ = r), r.fillStyle = wi(
        o.getColor() || Yi
      )) : (r = null, this.textFillState_ = r);
      const a = t.getStroke();
      if (!a)
        s = null, this.textStrokeState_ = s;
      else {
        s = this.textStrokeState_, s || (s = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = s);
        const d = a.getLineDash(), _ = a.getLineDashOffset(), p = a.getWidth(), m = a.getMiterLimit();
        s.lineCap = a.getLineCap() || ru, s.lineDash = d ? d.slice() : Yo, s.lineDashOffset = _ === void 0 ? Uo : _, s.lineJoin = a.getLineJoin() || Ws, s.lineWidth = p === void 0 ? jo : p, s.miterLimit = m === void 0 ? Wo : m, s.strokeStyle = wi(
          a.getColor() || qo
        );
      }
      n = this.textState_;
      const u = t.getFont() || Wf;
      v_(u);
      const l = t.getScaleArray();
      n.overflow = t.getOverflow(), n.font = u, n.maxAngle = t.getMaxAngle(), n.placement = t.getPlacement(), n.textAlign = t.getTextAlign(), n.repeat = t.getRepeat(), n.justify = t.getJustify(), n.textBaseline = t.getTextBaseline() || su, n.backgroundFill = t.getBackgroundFill(), n.backgroundStroke = t.getBackgroundStroke(), n.padding = t.getPadding() || jr, n.scale = l === void 0 ? [1, 1] : l;
      const c = t.getOffsetX(), h = t.getOffsetY(), f = t.getRotateWithView(), g = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = h === void 0 ? 0 : h, this.textRotateWithView_ = f === void 0 ? !1 : f, this.textRotation_ = g === void 0 ? 0 : g, this.strokeKey_ = s ? (typeof s.strokeStyle == "string" ? s.strokeStyle : ge(s.strokeStyle)) + s.lineCap + s.lineDashOffset + "|" + s.lineWidth + s.lineJoin + s.miterLimit + "[" + s.lineDash.join() + "]" : "", this.textKey_ = n.font + n.scale + (n.textAlign || "?") + (n.repeat || "?") + (n.justify || "?") + (n.textBaseline || "?"), this.fillKey_ = r ? typeof r.fillStyle == "string" ? r.fillStyle : "|" + ge(r.fillStyle) : "";
    }
    this.declutterImageWithText_ = e;
  }
}
const qm = {
  Circle: gh,
  Default: ya,
  Image: Bm,
  LineString: Vm,
  Polygon: gh,
  Text: Wm
};
class Hm {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = r, this.resolution_ = n, this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const t = {};
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {};
      const n = this.buildersByZIndex_[e];
      for (const r in n) {
        const s = n[r].finish();
        t[e][r] = s;
      }
    }
    return t;
  }
  /**
   * @param {number|undefined} zIndex Z index.
   * @param {import("../canvas.js").BuilderType} builderType Replay type.
   * @return {import("../VectorContext.js").default} Replay.
   */
  getBuilder(t, e) {
    const n = t !== void 0 ? t.toString() : "0";
    let r = this.buildersByZIndex_[n];
    r === void 0 && (r = {}, this.buildersByZIndex_[n] = r);
    let s = r[e];
    if (s === void 0) {
      const o = qm[e];
      s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), r[e] = s;
    }
    return s;
  }
}
const dh = Hm;
class jm extends ff {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(), this.ready = !0, this.boundHandleImageChange_ = this.handleImageChange_.bind(this), this.layer_ = t, this.declutterExecutorGroup = null;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../Feature").FeatureLike>>} Promise that resolves with
   * an array of features.
   */
  getFeatures(t) {
    return yt();
  }
  /**
   * @param {import("../pixel.js").Pixel} pixel Pixel.
   * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
   */
  getData(t) {
    return null;
  }
  /**
   * Determine whether render should be called.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(t) {
    return yt();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(t, e) {
    return yt();
  }
  /**
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @param {number} zoom Zoom level.
   * @param {import("../Tile.js").default} tile Tile.
   * @return {boolean|void} If `false`, the tile will not be considered loaded.
   */
  loadedTileCallback(t, e, n) {
    t[e] || (t[e] = {}), t[e][n.tileCoord.toString()] = n;
  }
  /**
   * Create a function that adds loaded tiles to the tile lookup.
   * @param {import("../source/Tile.js").default} source Tile source.
   * @param {import("../proj/Projection.js").default} projection Projection of the tiles.
   * @param {Object<number, Object<string, import("../Tile.js").default>>} tiles Lookup of loaded tiles by zoom level.
   * @return {function(number, import("../TileRange.js").default):boolean} A function that can be
   *     called with a zoom level and a tile range to add loaded tiles to the lookup.
   * @protected
   */
  createLoadedTileFinder(t, e, n) {
    return (
      /**
       * @param {number} zoom Zoom level.
       * @param {import("../TileRange.js").default} tileRange Tile range.
       * @return {boolean} The tile range is fully loaded.
       */
      (r, s) => {
        const o = this.loadedTileCallback.bind(this, n, r);
        return t.forEachLoadedTile(e, r, s, o);
      }
    );
  }
  /**
   * @abstract
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(t, e, n, r, s) {
  }
  /**
   * @return {LayerType} Layer.
   */
  getLayer() {
    return this.layer_;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   * @abstract
   */
  handleFontsChanged() {
  }
  /**
   * Handle changes in image state.
   * @param {import("../events/Event.js").default} event Image change event.
   * @private
   */
  handleImageChange_(t) {
    /** @type {import("../Image.js").default} */
    t.target.getState() === Ut.LOADED && this.renderIfReadyAndVisible();
  }
  /**
   * Load the image if not already loaded, and register the image change
   * listener if needed.
   * @param {import("../ImageBase.js").default} image Image.
   * @return {boolean} `true` if the image is already loaded, `false` otherwise.
   * @protected
   */
  loadImage(t) {
    let e = t.getState();
    return e != Ut.LOADED && e != Ut.ERROR && t.addEventListener(Fn.CHANGE, this.boundHandleImageChange_), e == Ut.IDLE && (t.load(), e = t.getState()), e == Ut.LOADED;
  }
  /**
   * @protected
   */
  renderIfReadyAndVisible() {
    const t = this.getLayer();
    t && t.getVisible() && t.getSourceState() === "ready" && t.changed();
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    delete this.layer_, super.disposeInternal();
  }
}
const Zm = jm, ph = [];
let As = null;
function Km() {
  As = oi(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class Jm extends Zm {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = xr(), this.pixelTransform = xr(), this.inversePixelTransform = xr(), this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(t, e, n) {
    As || Km(), As.clearRect(0, 0, 1, 1);
    let r;
    try {
      As.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), r = As.getImageData(0, 0, 1, 1).data;
    } catch {
      return As = null, null;
    }
    return r;
  }
  /**
   * @param {import('../../Map.js').FrameState} frameState Frame state.
   * @return {string} Background color.
   */
  getBackground(t) {
    let n = this.getLayer().getBackground();
    return typeof n == "function" && (n = n(t.viewState.resolution)), n || void 0;
  }
  /**
   * Get a rendering container from an existing target, if compatible.
   * @param {HTMLElement} target Potential render target.
   * @param {string} transform CSS Transform.
   * @param {string} [backgroundColor] Background color.
   */
  useContainer(t, e, n) {
    const r = this.getLayer().getClassName();
    let s, o;
    if (t && t.className === r && (!n || t && t.style.backgroundColor && go(
      nu(t.style.backgroundColor),
      nu(n)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused && (this.container = null, this.context = null, this.containerReused = !1), !this.container) {
      s = document.createElement("div"), s.className = r;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = oi();
      const u = o.canvas;
      s.appendChild(u), a = u.style, a.position = "absolute", a.left = "0", a.transformOrigin = "top left", this.container = s, this.context = o;
    }
    !this.containerReused && n && !this.container.style.backgroundColor && (this.container.style.backgroundColor = n);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("../../extent.js").Extent} extent Clip extent.
   * @protected
   */
  clipUnrotated(t, e, n) {
    const r = Cf(n), s = If(n), o = xf(n), a = Ef(n);
    Ke(e.coordinateToPixelTransform, r), Ke(e.coordinateToPixelTransform, s), Ke(e.coordinateToPixelTransform, o), Ke(e.coordinateToPixelTransform, a);
    const u = this.inversePixelTransform;
    Ke(u, r), Ke(u, s), Ke(u, o), Ke(u, a), t.save(), t.beginPath(), t.moveTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(t, e, n) {
    const r = this.getLayer();
    if (r.hasListener(t)) {
      const s = new y_(
        t,
        this.inversePixelTransform,
        n,
        e
      );
      r.dispatchEvent(s);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(t, e) {
    this.frameState = e, this.dispatchRenderEvent_(al.PRERENDER, t, e);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(t, e) {
    this.dispatchRenderEvent_(al.POSTRENDER, t, e);
  }
  /**
   * Creates a transform for rendering to an element that will be rotated after rendering.
   * @param {import("../../coordinate.js").Coordinate} center Center.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} pixelRatio Pixel ratio.
   * @param {number} width Width of the rendered element (in pixels).
   * @param {number} height Height of the rendered element (in pixels).
   * @param {number} offsetX Offset on the x-axis in view coordinates.
   * @protected
   * @return {!import("../../transform.js").Transform} Transform.
   */
  getRenderTransform(t, e, n, r, s, o, a) {
    const u = s / 2, l = o / 2, c = r / e, h = -c, f = -t[0] + a, g = -t[1];
    return _a(
      this.tempTransform,
      u,
      l,
      c,
      h,
      -n,
      f,
      g
    );
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    delete this.frameState, super.disposeInternal();
  }
}
const Qm = Jm;
function $m(i, t, e, n, r, s, o, a, u, l, c, h) {
  let f = i[t], g = i[t + 1], d = 0, _ = 0, p = 0, m = 0;
  function y() {
    d = f, _ = g, t += n, f = i[t], g = i[t + 1], m += p, p = Math.sqrt((f - d) * (f - d) + (g - _) * (g - _));
  }
  do
    y();
  while (t < e - n && m + p < s);
  let v = p === 0 ? 0 : (s - m) / p;
  const C = cn(d, f, v), E = cn(_, g, v), w = t - n, P = m, b = s + a * u(l, r, c);
  for (; t < e - n && m + p < b; )
    y();
  v = p === 0 ? 0 : (b - m) / p;
  const R = cn(d, f, v), O = cn(_, g, v);
  let z;
  if (h) {
    const V = [C, E, R, O];
    Of(V, 0, 4, 2, h, V, V), z = V[0] > V[2];
  } else
    z = C > R;
  const L = Math.PI, B = [], M = w + n === t;
  t = w, p = 0, m = P, f = i[t], g = i[t + 1];
  let A;
  if (M) {
    y(), A = Math.atan2(g - _, f - d), z && (A += A > 0 ? -L : L);
    const V = (R + C) / 2, X = (O + E) / 2;
    return B[0] = [V, X, (b - s) / 2, A, r], B;
  }
  r = r.replace(/\n/g, " ");
  for (let V = 0, X = r.length; V < X; ) {
    y();
    let Z = Math.atan2(g - _, f - d);
    if (z && (Z += Z > 0 ? -L : L), A !== void 0) {
      let Ie = Z - A;
      if (Ie += Ie > L ? -2 * L : Ie < -L ? 2 * L : 0, Math.abs(Ie) > o)
        return null;
    }
    A = Z;
    const nt = V;
    let mt = 0;
    for (; V < X; ++V) {
      const Ie = z ? X - V - 1 : V, Te = a * u(l, r[Ie], c);
      if (t + n < e && m + p < s + mt + Te / 2)
        break;
      mt += Te;
    }
    if (V === nt)
      continue;
    const Tt = z ? r.substring(X - nt, X - V) : r.substring(nt, V);
    v = p === 0 ? 0 : (s + mt / 2 - m) / p;
    const G = cn(d, f, v), je = cn(_, g, v);
    B.push([G, je, mt / 2, Z, Tt]), s += mt;
  }
  return B;
}
const Ps = ts(), hr = [], Bi = [], zi = [], fr = [];
function _h(i) {
  return i[3].declutterBox;
}
const ty = new RegExp(
  /* eslint-disable prettier/prettier */
  "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
  /* eslint-enable prettier/prettier */
);
function mh(i, t) {
  return (t === "start" || t === "end") && !ty.test(i) && (t = t === "start" ? "left" : "right"), ko[t];
}
function ey(i, t, e) {
  return e > 0 && i.push(`
`, ""), i.push(t, ""), i;
}
class ny {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(t, e, n, r) {
    this.overlaps = n, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = r.instructions, this.coordinates = r.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = xr(), this.hitDetectionInstructions = r.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r.fillStates || {}, this.strokeStates = r.strokeStates || {}, this.textStates = r.textStates || {}, this.widths_ = {}, this.labels_ = {};
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(t, e, n, r) {
    const s = t + e + n + r;
    if (this.labels_[s])
      return this.labels_[s];
    const o = r ? this.strokeStates[r] : null, a = n ? this.fillStates[n] : null, u = this.textStates[e], l = this.pixelRatio, c = [
      u.scale[0] * l,
      u.scale[1] * l
    ], h = Array.isArray(t), f = u.justify ? ko[u.justify] : mh(
      Array.isArray(t) ? t[0] : t,
      u.textAlign || Ho
    ), g = r && o.lineWidth ? o.lineWidth : 0, d = h ? t : t.split(`
`).reduce(ey, []), { width: _, height: p, widths: m, heights: y, lineWidths: v } = x_(
      u,
      d
    ), C = _ + g, E = [], w = (C + 2) * c[0], P = (p + g) * c[1], b = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: P < 0 ? Math.floor(P) : Math.ceil(P),
      contextInstructions: E
    };
    (c[0] != 1 || c[1] != 1) && E.push("scale", c), r && (E.push("strokeStyle", o.strokeStyle), E.push("lineWidth", g), E.push("lineCap", o.lineCap), E.push("lineJoin", o.lineJoin), E.push("miterLimit", o.miterLimit), E.push("setLineDash", [o.lineDash]), E.push("lineDashOffset", o.lineDashOffset)), n && E.push("fillStyle", a.fillStyle), E.push("textBaseline", "middle"), E.push("textAlign", "center");
    const R = 0.5 - f;
    let O = f * C + R * g;
    const z = [], L = [];
    let B = 0, M = 0, A = 0, V = 0, X;
    for (let Z = 0, nt = d.length; Z < nt; Z += 2) {
      const mt = d[Z];
      if (mt === `
`) {
        M += B, B = 0, O = f * C + R * g, ++V;
        continue;
      }
      const Tt = d[Z + 1] || u.font;
      Tt !== X && (r && z.push("font", Tt), n && L.push("font", Tt), X = Tt), B = Math.max(B, y[A]);
      const G = [
        mt,
        O + R * m[A] + f * (m[A] - v[V]),
        0.5 * (g + B) + M
      ];
      O += m[A], r && z.push("strokeText", G), n && L.push("fillText", G), ++A;
    }
    return Array.prototype.push.apply(E, z), Array.prototype.push.apply(E, L), this.labels_[s] = b, b;
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../coordinate.js").Coordinate} p1 1st point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p2 2nd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p3 3rd point of the background box.
   * @param {import("../../coordinate.js").Coordinate} p4 4th point of the background box.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   */
  replayTextBackground_(t, e, n, r, s, o, a) {
    t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, n), t.lineTo.apply(t, r), t.lineTo.apply(t, s), t.lineTo.apply(t, e), o && (this.alignFill_ = /** @type {boolean} */
    o[2], this.fill_(t)), a && (this.setStrokeStyle_(
      t,
      /** @type {Array<*>} */
      a
    ), t.stroke());
  }
  /**
   * @private
   * @param {number} sheetWidth Width of the sprite sheet.
   * @param {number} sheetHeight Height of the sprite sheet.
   * @param {number} centerX X.
   * @param {number} centerY Y.
   * @param {number} width Width.
   * @param {number} height Height.
   * @param {number} anchorX Anchor X.
   * @param {number} anchorY Anchor Y.
   * @param {number} originX Origin X.
   * @param {number} originY Origin Y.
   * @param {number} rotation Rotation.
   * @param {import("../../size.js").Size} scale Scale.
   * @param {boolean} snapToPixel Snap to pixel.
   * @param {Array<number>} padding Padding.
   * @param {boolean} fillStroke Background fill or stroke.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   * @return {ImageOrLabelDimensions} Dimensions for positioning and decluttering the image or label.
   */
  calculateImageOrLabelDimensions_(t, e, n, r, s, o, a, u, l, c, h, f, g, d, _, p) {
    a *= f[0], u *= f[1];
    let m = n - a, y = r - u;
    const v = s + l > t ? t - l : s, C = o + c > e ? e - c : o, E = d[3] + v * f[0] + d[1], w = d[0] + C * f[1] + d[2], P = m - d[3], b = y - d[0];
    (_ || h !== 0) && (hr[0] = P, fr[0] = P, hr[1] = b, Bi[1] = b, Bi[0] = P + E, zi[0] = Bi[0], zi[1] = b + w, fr[1] = zi[1]);
    let R;
    return h !== 0 ? (R = _a(
      xr(),
      n,
      r,
      1,
      1,
      h,
      -n,
      -r
    ), Ke(R, hr), Ke(R, Bi), Ke(R, zi), Ke(R, fr), es(
      Math.min(hr[0], Bi[0], zi[0], fr[0]),
      Math.min(hr[1], Bi[1], zi[1], fr[1]),
      Math.max(hr[0], Bi[0], zi[0], fr[0]),
      Math.max(hr[1], Bi[1], zi[1], fr[1]),
      Ps
    )) : es(
      Math.min(P, P + E),
      Math.min(b, b + w),
      Math.max(P, P + E),
      Math.max(b, b + w),
      Ps
    ), g && (m = Math.round(m), y = Math.round(y)), {
      drawImageX: m,
      drawImageY: y,
      drawImageW: v,
      drawImageH: C,
      originX: l,
      originY: c,
      declutterBox: {
        minX: Ps[0],
        minY: Ps[1],
        maxX: Ps[2],
        maxY: Ps[3],
        value: p
      },
      canvasTransform: R,
      scale: f
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../canvas.js").Label|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} imageOrLabel Image.
   * @param {ImageOrLabelDimensions} dimensions Dimensions.
   * @param {number} opacity Opacity.
   * @param {Array<*>} fillInstruction Fill instruction.
   * @param {Array<*>} strokeInstruction Stroke instruction.
   * @return {boolean} The image or label was rendered.
   */
  replayImageOrLabel_(t, e, n, r, s, o, a) {
    const u = !!(o || a), l = r.declutterBox, c = t.canvas, h = a ? a[2] * r.scale[0] / 2 : 0;
    return l.minX - h <= c.width / e && l.maxX + h >= 0 && l.minY - h <= c.height / e && l.maxY + h >= 0 && (u && this.replayTextBackground_(
      t,
      hr,
      Bi,
      zi,
      fr,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), C_(
      t,
      r.canvasTransform,
      s,
      n,
      r.originX,
      r.originY,
      r.drawImageW,
      r.drawImageH,
      r.drawImageX,
      r.drawImageY,
      r.scale
    )), !0;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(t) {
    if (this.alignFill_) {
      const e = Ke(this.renderedTransform_, [0, 0]), n = 512 * this.pixelRatio;
      t.save(), t.translate(e[0] % n, e[1] % n), t.rotate(this.viewRotation_);
    }
    t.fill(), this.alignFill_ && t.restore();
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {Array<*>} instruction Instruction.
   */
  setStrokeStyle_(t, e) {
    t.strokeStyle = /** @type {import("../../colorlike.js").ColorLike} */
    e[1], t.lineWidth = /** @type {number} */
    e[2], t.lineCap = /** @type {CanvasLineCap} */
    e[3], t.lineJoin = /** @type {CanvasLineJoin} */
    e[4], t.miterLimit = /** @type {number} */
    e[5], t.lineDashOffset = /** @type {number} */
    e[7], t.setLineDash(
      /** @type {Array<number>} */
      e[6]
    );
  }
  /**
   * @private
   * @param {string|Array<string>} text The text to draw.
   * @param {string} textKey The key of the text state.
   * @param {string} strokeKey The key for the stroke state.
   * @param {string} fillKey The key for the fill state.
   * @return {{label: import("../canvas.js").Label, anchorX: number, anchorY: number}} The text image and its anchor.
   */
  drawLabelWithPointPlacement_(t, e, n, r) {
    const s = this.textStates[e], o = this.createLabel(t, e, r, n), a = this.strokeStates[n], u = this.pixelRatio, l = mh(
      Array.isArray(t) ? t[0] : t,
      s.textAlign || Ho
    ), c = ko[s.textBaseline || su], h = a && a.lineWidth ? a.lineWidth : 0, f = o.width / u - 2 * s.scale[0], g = l * f + 2 * (0.5 - l) * h, d = c * o.height / u + 2 * (0.5 - c) * h;
    return {
      label: o,
      anchorX: g,
      anchorY: d
    };
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {Array<*>} instructions Instructions array.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   * @return {T|undefined} Callback result.
   * @template T
   */
  execute_(t, e, n, r, s, o, a, u) {
    let l;
    this.pixelCoordinates_ && go(n, this.renderedTransform_) ? l = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l = $r(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      n,
      this.pixelCoordinates_
    ), _p(this.renderedTransform_, n));
    let c = 0;
    const h = r.length;
    let f = 0, g, d, _, p, m, y, v, C, E, w, P, b, R = 0, O = 0, z = null, L = null;
    const B = this.coordinateCache_, M = this.viewRotation_, A = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12, V = (
      /** @type {import("../../render.js").State} */
      {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: M
      }
    ), X = this.instructions != r || this.overlaps ? 0 : 200;
    let Z, nt, mt, Tt;
    for (; c < h; ) {
      const G = r[c];
      switch (
        /** @type {import("./Instruction.js").default} */
        G[0]
      ) {
        case K.BEGIN_GEOMETRY:
          Z = /** @type {import("../../Feature.js").FeatureLike} */
          G[1], Tt = G[3], Z.getGeometry() ? a !== void 0 && !ti(a, Tt.getExtent()) ? c = /** @type {number} */
          G[2] + 1 : ++c : c = /** @type {number} */
          G[2];
          break;
        case K.BEGIN_PATH:
          R > X && (this.fill_(t), R = 0), O > X && (t.stroke(), O = 0), !R && !O && (t.beginPath(), p = NaN, m = NaN), ++c;
          break;
        case K.CIRCLE:
          f = /** @type {number} */
          G[1];
          const Ie = l[f], Te = l[f + 1], rr = l[f + 2], dt = l[f + 3], he = rr - Ie, ut = dt - Te, Eo = Math.sqrt(he * he + ut * ut);
          t.moveTo(Ie + Eo, Te), t.arc(Ie, Te, Eo, 0, 2 * Math.PI, !0), ++c;
          break;
        case K.CLOSE_PATH:
          t.closePath(), ++c;
          break;
        case K.CUSTOM:
          f = /** @type {number} */
          G[1], g = G[2];
          const In = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            G[3]
          ), Xt = G[4], an = G.length == 6 ? G[5] : void 0;
          V.geometry = In, V.feature = Z, c in B || (B[c] = []);
          const mi = B[c];
          an ? an(l, f, g, 2, mi) : (mi[0] = l[f], mi[1] = l[f + 1], mi.length = 2), Xt(mi, V), ++c;
          break;
        case K.DRAW_IMAGE:
          f = /** @type {number} */
          G[1], g = /** @type {number} */
          G[2], C = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          G[3], d = /** @type {number} */
          G[4], _ = /** @type {number} */
          G[5];
          let Kn = (
            /** @type {number} */
            G[6]
          );
          const sr = (
            /** @type {number} */
            G[7]
          ), ws = (
            /** @type {number} */
            G[8]
          ), xo = (
            /** @type {number} */
            G[9]
          ), Ra = (
            /** @type {boolean} */
            G[10]
          );
          let Sn = (
            /** @type {number} */
            G[11]
          );
          const Na = (
            /** @type {import("../../size.js").Size} */
            G[12]
          );
          let Vr = (
            /** @type {number} */
            G[13]
          );
          const Rs = (
            /** @type {"declutter"|"obstacle"|"none"|undefined} */
            G[14]
          ), Xr = (
            /** @type {import("../canvas.js").DeclutterImageWithText} */
            G[15]
          );
          if (!C && G.length >= 20) {
            E = /** @type {string} */
            G[19], w = /** @type {string} */
            G[20], P = /** @type {string} */
            G[21], b = /** @type {string} */
            G[22];
            const Zt = this.drawLabelWithPointPlacement_(
              E,
              w,
              P,
              b
            );
            C = Zt.label, G[3] = C;
            const Kt = (
              /** @type {number} */
              G[23]
            );
            d = (Zt.anchorX - Kt) * this.pixelRatio, G[4] = d;
            const Jt = (
              /** @type {number} */
              G[24]
            );
            _ = (Zt.anchorY - Jt) * this.pixelRatio, G[5] = _, Kn = C.height, G[6] = Kn, Vr = C.width, G[13] = Vr;
          }
          let Co;
          G.length > 25 && (Co = /** @type {number} */
          G[25]);
          let Io, or, ar;
          G.length > 17 ? (Io = /** @type {Array<number>} */
          G[16], or = /** @type {boolean} */
          G[17], ar = /** @type {boolean} */
          G[18]) : (Io = jr, or = !1, ar = !1), Ra && A ? Sn += M : !Ra && !A && (Sn -= M);
          let Vu = 0;
          for (; f < g; f += 2) {
            if (Co && Co[Vu++] < Vr / this.pixelRatio)
              continue;
            const Zt = this.calculateImageOrLabelDimensions_(
              C.width,
              C.height,
              l[f],
              l[f + 1],
              Vr,
              Kn,
              d,
              _,
              ws,
              xo,
              Sn,
              Na,
              s,
              Io,
              or || ar,
              Z
            ), Kt = [
              t,
              e,
              C,
              Zt,
              sr,
              or ? (
                /** @type {Array<*>} */
                z
              ) : null,
              ar ? (
                /** @type {Array<*>} */
                L
              ) : null
            ];
            if (u) {
              if (Rs === "none")
                continue;
              if (Rs === "obstacle") {
                u.insert(Zt.declutterBox);
                continue;
              } else {
                let Jt, Rt;
                if (Xr) {
                  const Se = g - f;
                  if (!Xr[Se]) {
                    Xr[Se] = Kt;
                    continue;
                  }
                  if (Jt = Xr[Se], delete Xr[Se], Rt = _h(Jt), u.collides(Rt))
                    continue;
                }
                if (u.collides(Zt.declutterBox))
                  continue;
                Jt && (u.insert(Rt), this.replayImageOrLabel_.apply(this, Jt)), u.insert(Zt.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Kt);
          }
          ++c;
          break;
        case K.DRAW_CHARS:
          const La = (
            /** @type {number} */
            G[1]
          ), ba = (
            /** @type {number} */
            G[2]
          ), So = (
            /** @type {number} */
            G[3]
          ), Xu = (
            /** @type {number} */
            G[4]
          );
          b = /** @type {string} */
          G[5];
          const Yu = (
            /** @type {number} */
            G[6]
          ), Pa = (
            /** @type {number} */
            G[7]
          ), Ta = (
            /** @type {number} */
            G[8]
          );
          P = /** @type {string} */
          G[9];
          const wo = (
            /** @type {number} */
            G[10]
          );
          E = /** @type {string} */
          G[11], w = /** @type {string} */
          G[12];
          const Ma = [
            /** @type {number} */
            G[13],
            /** @type {number} */
            G[13]
          ], Ro = this.textStates[w], Yr = Ro.font, Ur = [
            Ro.scale[0] * Pa,
            Ro.scale[1] * Pa
          ];
          let N;
          Yr in this.widths_ ? N = this.widths_[Yr] : (N = {}, this.widths_[Yr] = N);
          const Dt = eg(l, La, ba, 2), un = Math.abs(Ur[0]) * jc(Yr, E, N);
          if (Xu || un <= Dt) {
            const Zt = this.textStates[w].textAlign, Kt = (Dt - un) * ko[Zt], Jt = $m(
              l,
              La,
              ba,
              2,
              E,
              Kt,
              Yu,
              Math.abs(Ur[0]),
              jc,
              Yr,
              N,
              A ? 0 : this.viewRotation_
            );
            t:
              if (Jt) {
                const Rt = [];
                let Se, ur, ln, Ze, wn;
                if (P)
                  for (Se = 0, ur = Jt.length; Se < ur; ++Se) {
                    wn = Jt[Se], ln = /** @type {string} */
                    wn[4], Ze = this.createLabel(ln, w, "", P), d = /** @type {number} */
                    wn[2] + (Ur[0] < 0 ? -wo : wo), _ = So * Ze.height + (0.5 - So) * 2 * wo * Ur[1] / Ur[0] - Ta;
                    const Fi = this.calculateImageOrLabelDimensions_(
                      Ze.width,
                      Ze.height,
                      wn[0],
                      wn[1],
                      Ze.width,
                      Ze.height,
                      d,
                      _,
                      0,
                      0,
                      wn[3],
                      Ma,
                      !1,
                      jr,
                      !1,
                      Z
                    );
                    if (u && u.collides(Fi.declutterBox))
                      break t;
                    Rt.push([
                      t,
                      e,
                      Ze,
                      Fi,
                      1,
                      null,
                      null
                    ]);
                  }
                if (b)
                  for (Se = 0, ur = Jt.length; Se < ur; ++Se) {
                    wn = Jt[Se], ln = /** @type {string} */
                    wn[4], Ze = this.createLabel(ln, w, b, ""), d = /** @type {number} */
                    wn[2], _ = So * Ze.height - Ta;
                    const Fi = this.calculateImageOrLabelDimensions_(
                      Ze.width,
                      Ze.height,
                      wn[0],
                      wn[1],
                      Ze.width,
                      Ze.height,
                      d,
                      _,
                      0,
                      0,
                      wn[3],
                      Ma,
                      !1,
                      jr,
                      !1,
                      Z
                    );
                    if (u && u.collides(Fi.declutterBox))
                      break t;
                    Rt.push([
                      t,
                      e,
                      Ze,
                      Fi,
                      1,
                      null,
                      null
                    ]);
                  }
                u && u.load(Rt.map(_h));
                for (let Fi = 0, rd = Rt.length; Fi < rd; ++Fi)
                  this.replayImageOrLabel_.apply(this, Rt[Fi]);
              }
          }
          ++c;
          break;
        case K.END_GEOMETRY:
          if (o !== void 0) {
            Z = /** @type {import("../../Feature.js").FeatureLike} */
            G[1];
            const Zt = o(Z, Tt);
            if (Zt)
              return Zt;
          }
          ++c;
          break;
        case K.FILL:
          X ? R++ : this.fill_(t), ++c;
          break;
        case K.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          G[1], g = /** @type {number} */
          G[2], nt = l[f], mt = l[f + 1], y = nt + 0.5 | 0, v = mt + 0.5 | 0, (y !== p || v !== m) && (t.moveTo(nt, mt), p = y, m = v), f += 2; f < g; f += 2)
            nt = l[f], mt = l[f + 1], y = nt + 0.5 | 0, v = mt + 0.5 | 0, (f == g - 2 || y !== p || v !== m) && (t.lineTo(nt, mt), p = y, m = v);
          ++c;
          break;
        case K.SET_FILL_STYLE:
          z = G, this.alignFill_ = G[2], R && (this.fill_(t), R = 0, O && (t.stroke(), O = 0)), t.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          G[1], ++c;
          break;
        case K.SET_STROKE_STYLE:
          L = G, O && (t.stroke(), O = 0), this.setStrokeStyle_(
            t,
            /** @type {Array<*>} */
            G
          ), ++c;
          break;
        case K.STROKE:
          X ? O++ : t.stroke(), ++c;
          break;
        default:
          ++c;
          break;
      }
    }
    R && this.fill_(t), O && t.stroke();
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and text to integer pixels.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(t, e, n, r, s, o) {
    this.viewRotation_ = r, this.execute_(
      t,
      e,
      n,
      this.instructions,
      s,
      void 0,
      void 0,
      o
    );
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {FeatureCallback<T>} [featureCallback] Feature callback.
   * @param {import("../../extent.js").Extent} [hitExtent] Only check
   *     features that intersect this extent.
   * @return {T|undefined} Callback result.
   * @template T
   */
  executeHitDetection(t, e, n, r, s) {
    return this.viewRotation_ = n, this.execute_(
      t,
      1,
      e,
      this.hitDetectionInstructions,
      !0,
      r,
      s
    );
  }
}
const iy = ny, Ju = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class ry {
  /**
   * @param {import("../../extent.js").Extent} maxExtent Max extent for clipping. When a
   * `maxExtent` was set on the Builder for this executor group, the same `maxExtent`
   * should be set here, unless the target context does not exceed that extent (which
   * can be the case when rendering to tiles).
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The executor group can have overlapping geometries.
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions
   * The serializable instructions.
   * @param {number} [renderBuffer] Optional rendering buffer.
   */
  constructor(t, e, n, r, s, o) {
    this.maxExtent_ = t, this.overlaps_ = r, this.pixelRatio_ = n, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = xr(), this.createExecutors_(s);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  clip(t, e) {
    const n = this.getClipCoords(e);
    t.beginPath(), t.moveTo(n[0], n[1]), t.lineTo(n[2], n[3]), t.lineTo(n[4], n[5]), t.lineTo(n[6], n[7]), t.clip();
  }
  /**
   * Create executors and populate them using the provided instructions.
   * @private
   * @param {!Object<string, !Object<import("../canvas.js").BuilderType, import("../canvas.js").SerializableInstructions>>} allInstructions The serializable instructions
   */
  createExecutors_(t) {
    for (const e in t) {
      let n = this.executorsByZIndex_[e];
      n === void 0 && (n = {}, this.executorsByZIndex_[e] = n);
      const r = t[e];
      for (const s in r) {
        const o = r[s];
        n[s] = new iy(
          this.resolution_,
          this.pixelRatio_,
          this.overlaps_,
          o
        );
      }
    }
  }
  /**
   * @param {Array<import("../canvas.js").BuilderType>} executors Executors.
   * @return {boolean} Has executors of the provided types.
   */
  hasExecutors(t) {
    for (const e in this.executorsByZIndex_) {
      const n = this.executorsByZIndex_[e];
      for (let r = 0, s = t.length; r < s; ++r)
        if (t[r] in n)
          return !0;
    }
    return !1;
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {number} resolution Resolution.
   * @param {number} rotation Rotation.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {function(import("../../Feature.js").FeatureLike, import("../../geom/SimpleGeometry.js").default, number): T} callback Feature callback.
   * @param {Array<import("../../Feature.js").FeatureLike>} declutteredFeatures Decluttered features.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(t, e, n, r, s, o) {
    r = Math.round(r);
    const a = r * 2 + 1, u = _a(
      this.hitDetectionTransform_,
      r + 0.5,
      r + 0.5,
      1 / e,
      -1 / e,
      -n,
      -t[0],
      -t[1]
    ), l = !this.hitDetectionContext_;
    l && (this.hitDetectionContext_ = oi(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : l || c.clearRect(0, 0, a, a);
    let h;
    this.renderBuffer_ !== void 0 && (h = ts(), Xd(h, t), Bl(
      h,
      e * (this.renderBuffer_ + r),
      h
    ));
    const f = sy(r);
    let g;
    function d(E, w) {
      const P = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let b = 0, R = f.length; b < R; b++)
        if (P[f[b]] > 0) {
          if (!o || g !== "Image" && g !== "Text" || o.includes(E)) {
            const O = (f[b] - 3) / 4, z = r - O % a, L = r - (O / a | 0), B = s(E, w, z * z + L * L);
            if (B)
              return B;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const _ = Object.keys(this.executorsByZIndex_).map(Number);
    _.sort(Bo);
    let p, m, y, v, C;
    for (p = _.length - 1; p >= 0; --p) {
      const E = _[p].toString();
      for (y = this.executorsByZIndex_[E], m = Ju.length - 1; m >= 0; --m)
        if (g = Ju[m], v = y[g], v !== void 0 && (C = v.executeHitDetection(
          c,
          u,
          n,
          d,
          h
        ), C))
          return C;
    }
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   * @return {Array<number>|null} Clip coordinates.
   */
  getClipCoords(t) {
    const e = this.maxExtent_;
    if (!e)
      return null;
    const n = e[0], r = e[1], s = e[2], o = e[3], a = [n, r, n, o, s, o, s, r];
    return $r(a, 0, 8, 2, t, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return zo(this.executorsByZIndex_);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} contextScale Scale of the context.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {boolean} snapToPixel Snap point symbols and test to integer pixel.
   * @param {Array<import("../canvas.js").BuilderType>} [builderTypes] Ordered replay types to replay.
   *     Default is {@link module:ol/render/replay~ORDER}
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  execute(t, e, n, r, s, o, a) {
    const u = Object.keys(this.executorsByZIndex_).map(Number);
    u.sort(Bo), this.maxExtent_ && (t.save(), this.clip(t, n)), o = o || Ju;
    let l, c, h, f, g, d;
    for (a && u.reverse(), l = 0, c = u.length; l < c; ++l) {
      const _ = u[l].toString();
      for (g = this.executorsByZIndex_[_], h = 0, f = o.length; h < f; ++h) {
        const p = o[h];
        d = g[p], d !== void 0 && d.execute(
          t,
          e,
          n,
          r,
          s,
          a
        );
      }
    }
    this.maxExtent_ && t.restore();
  }
}
const Qu = {};
function sy(i) {
  if (Qu[i] !== void 0)
    return Qu[i];
  const t = i * 2 + 1, e = i * i, n = new Array(e + 1);
  for (let s = 0; s <= i; ++s)
    for (let o = 0; o <= i; ++o) {
      const a = s * s + o * o;
      if (a > e)
        break;
      let u = n[a];
      u || (u = [], n[a] = u), u.push(((i + s) * t + (i + o)) * 4 + 3), s > 0 && u.push(((i - s) * t + (i + o)) * 4 + 3), o > 0 && (u.push(((i + s) * t + (i - o)) * 4 + 3), s > 0 && u.push(((i - s) * t + (i - o)) * 4 + 3));
    }
  const r = [];
  for (let s = 0, o = n.length; s < o; ++s)
    n[s] && r.push(...n[s]);
  return Qu[i] = r, r;
}
const yh = ry;
class oy extends ug {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(t, e, n, r, s, o, a) {
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = n, this.transform_ = r, this.transformRotation_ = r ? $d(Math.atan2(r[1], r[0]), 10) : 0, this.viewRotation_ = s, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = xr();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(t, e, n, r) {
    if (!this.image_)
      return;
    const s = $r(
      t,
      e,
      n,
      r,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_, a = this.tmpLocalTransform_, u = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = u * this.imageOpacity_);
    let l = this.imageRotation_;
    this.transformRotation_ === 0 && (l -= this.viewRotation_), this.imageRotateWithView_ && (l += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const f = s[c] - this.imageAnchorX_, g = s[c + 1] - this.imageAnchorY_;
      if (l !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const d = f + this.imageAnchorX_, _ = g + this.imageAnchorY_;
        _a(
          a,
          d,
          _,
          1,
          1,
          l,
          -d,
          -_
        ), o.setTransform.apply(o, a), o.translate(d, _), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          -this.imageAnchorX_,
          -this.imageAnchorY_,
          this.imageWidth_,
          this.imageHeight_
        ), o.setTransform(1, 0, 0, 1, 0, 0);
      } else
        o.drawImage(
          this.image_,
          this.imageOriginX_,
          this.imageOriginY_,
          this.imageWidth_,
          this.imageHeight_,
          f,
          g,
          this.imageWidth_,
          this.imageHeight_
        );
    }
    this.imageOpacity_ != 1 && (o.globalAlpha = u);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawText_(t, e, n, r) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const s = $r(
      t,
      e,
      n,
      r,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < n; e += r) {
      const u = s[e] + this.textOffsetX_, l = s[e + 1] + this.textOffsetY_;
      a !== 0 || this.textScale_[0] != 1 || this.textScale_[1] != 1 ? (o.translate(u - this.textOffsetX_, l - this.textOffsetY_), o.rotate(a), o.translate(this.textOffsetX_, this.textOffsetY_), o.scale(this.textScale_[0], this.textScale_[1]), this.textStrokeState_ && o.strokeText(this.text_, 0, 0), this.textFillState_ && o.fillText(this.text_, 0, 0), o.setTransform(1, 0, 0, 1, 0, 0)) : (this.textStrokeState_ && o.strokeText(this.text_, u, l), this.textFillState_ && o.fillText(this.text_, u, l));
    }
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @param {boolean} close Close.
   * @private
   * @return {number} end End.
   */
  moveToLineTo_(t, e, n, r, s) {
    const o = this.context_, a = $r(
      t,
      e,
      n,
      r,
      this.transform_,
      this.pixelCoordinates_
    );
    o.moveTo(a[0], a[1]);
    let u = a.length;
    s && (u -= 2);
    for (let l = 2; l < u; l += 2)
      o.lineTo(a[l], a[l + 1]);
    return s && o.closePath(), n;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawRings_(t, e, n, r) {
    for (let s = 0, o = n.length; s < o; ++s)
      e = this.moveToLineTo_(
        t,
        e,
        n[s],
        r,
        !0
      );
    return e;
  }
  /**
   * Render a circle geometry into the canvas.  Rendering is immediate and uses
   * the current fill and stroke styles.
   *
   * @param {import("../../geom/Circle.js").default} geometry Circle geometry.
   * @api
   */
  drawCircle(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Circle.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!ti(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = Up(
          t,
          this.transform_,
          this.pixelCoordinates_
        ), n = e[2] - e[0], r = e[3] - e[1], s = Math.sqrt(n * n + r * r), o = this.context_;
        o.beginPath(), o.arc(
          e[0],
          e[1],
          s,
          0,
          2 * Math.PI
        ), this.fillState_ && o.fill(), this.strokeState_ && o.stroke();
      }
      this.text_ !== "" && this.drawText_(t.getCenter(), 0, 2, 2);
    }
  }
  /**
   * Set the rendering style.  Note that since this is an immediate rendering API,
   * any `zIndex` on the provided style will be ignored.
   *
   * @param {import("../../style/Style.js").default} style The rendering style.
   * @api
   */
  setStyle(t) {
    this.setFillStrokeStyle(t.getFill(), t.getStroke()), this.setImageStyle(t.getImage()), this.setTextStyle(t.getText());
  }
  /**
   * @param {import("../../transform.js").Transform} transform Transform.
   */
  setTransform(t) {
    this.transform_ = t;
  }
  /**
   * Render a geometry into the canvas.  Call
   * {@link module:ol/render/canvas/Immediate~CanvasImmediateRenderer#setStyle renderer.setStyle()} first to set the rendering style.
   *
   * @param {import("../../geom/Geometry.js").default|import("../Feature.js").default} geometry The geometry to render.
   * @api
   */
  drawGeometry(t) {
    switch (t.getType()) {
      case "Point":
        this.drawPoint(
          /** @type {import("../../geom/Point.js").default} */
          t
        );
        break;
      case "LineString":
        this.drawLineString(
          /** @type {import("../../geom/LineString.js").default} */
          t
        );
        break;
      case "Polygon":
        this.drawPolygon(
          /** @type {import("../../geom/Polygon.js").default} */
          t
        );
        break;
      case "MultiPoint":
        this.drawMultiPoint(
          /** @type {import("../../geom/MultiPoint.js").default} */
          t
        );
        break;
      case "MultiLineString":
        this.drawMultiLineString(
          /** @type {import("../../geom/MultiLineString.js").default} */
          t
        );
        break;
      case "MultiPolygon":
        this.drawMultiPolygon(
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t
        );
        break;
      case "GeometryCollection":
        this.drawGeometryCollection(
          /** @type {import("../../geom/GeometryCollection.js").default} */
          t
        );
        break;
      case "Circle":
        this.drawCircle(
          /** @type {import("../../geom/Circle.js").default} */
          t
        );
        break;
    }
  }
  /**
   * Render a feature into the canvas.  Note that any `zIndex` on the provided
   * style will be ignored - features are rendered immediately in the order that
   * this method is called.  If you need `zIndex` support, you should be using an
   * {@link module:ol/layer/Vector~VectorLayer} instead.
   *
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {import("../../style/Style.js").default} style Style.
   * @api
   */
  drawFeature(t, e) {
    const n = e.getGeometryFunction()(t);
    n && (this.setStyle(e), this.drawGeometry(n));
  }
  /**
   * Render a GeometryCollection to the canvas.  Rendering is immediate and
   * uses the current styles appropriate for each geometry in the collection.
   *
   * @param {import("../../geom/GeometryCollection.js").default} geometry Geometry collection.
   */
  drawGeometryCollection(t) {
    const e = t.getGeometriesArray();
    for (let n = 0, r = e.length; n < r; ++n)
      this.drawGeometry(e[n]);
  }
  /**
   * Render a Point geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} geometry Point geometry.
   */
  drawPoint(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/Point.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), n = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, n), this.text_ !== "" && this.drawText_(e, 0, e.length, n);
  }
  /**
   * Render a MultiPoint geometry  into the canvas.  Rendering is immediate and
   * uses the current style.
   *
   * @param {import("../../geom/MultiPoint.js").default|import("../Feature.js").default} geometry MultiPoint geometry.
   */
  drawMultiPoint(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPoint.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getFlatCoordinates(), n = t.getStride();
    this.image_ && this.drawImages_(e, 0, e.length, n), this.text_ !== "" && this.drawText_(e, 0, e.length, n);
  }
  /**
   * Render a LineString into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/LineString.js").default|import("../Feature.js").default} geometry LineString geometry.
   */
  drawLineString(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/LineString.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!ti(this.extent_, t.getExtent())) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, n = t.getFlatCoordinates();
        e.beginPath(), this.moveToLineTo_(
          n,
          0,
          n.length,
          t.getStride(),
          !1
        ), e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatMidpoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  /**
   * Render a MultiLineString geometry into the canvas.  Rendering is immediate
   * and uses the current style.
   *
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} geometry MultiLineString geometry.
   */
  drawMultiLineString(t) {
    this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiLineString.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    ));
    const e = t.getExtent();
    if (ti(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const n = this.context_, r = t.getFlatCoordinates();
        let s = 0;
        const o = (
          /** @type {Array<number>} */
          t.getEnds()
        ), a = t.getStride();
        n.beginPath();
        for (let u = 0, l = o.length; u < l; ++u)
          s = this.moveToLineTo_(
            r,
            s,
            o[u],
            a,
            !1
          );
        n.stroke();
      }
      if (this.text_ !== "") {
        const n = t.getFlatMidpoints();
        this.drawText_(n, 0, n.length, 2);
      }
    }
  }
  /**
   * Render a Polygon geometry into the canvas.  Rendering is immediate and uses
   * the current style.
   *
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} geometry Polygon geometry.
   */
  drawPolygon(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/Polygon.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!ti(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_;
        e.beginPath(), this.drawRings_(
          t.getOrientedFlatCoordinates(),
          0,
          /** @type {Array<number>} */
          t.getEnds(),
          t.getStride()
        ), this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoint();
        this.drawText_(e, 0, 2, 2);
      }
    }
  }
  /**
   * Render MultiPolygon geometry into the canvas.  Rendering is immediate and
   * uses the current style.
   * @param {import("../../geom/MultiPolygon.js").default} geometry MultiPolygon geometry.
   */
  drawMultiPolygon(t) {
    if (this.squaredTolerance_ && (t = /** @type {import("../../geom/MultiPolygon.js").default} */
    t.simplifyTransformed(
      this.squaredTolerance_,
      this.userTransform_
    )), !!ti(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, n = t.getOrientedFlatCoordinates();
        let r = 0;
        const s = t.getEndss(), o = t.getStride();
        e.beginPath();
        for (let a = 0, u = s.length; a < u; ++a) {
          const l = s[a];
          r = this.drawRings_(n, r, l, o);
        }
        this.fillState_ && e.fill(), this.strokeState_ && e.stroke();
      }
      if (this.text_ !== "") {
        const e = t.getFlatInteriorPoints();
        this.drawText_(e, 0, e.length, 2);
      }
    }
  }
  /**
   * @param {import("../canvas.js").FillState} fillState Fill state.
   * @private
   */
  setContextFillState_(t) {
    const e = this.context_, n = this.contextFillState_;
    n ? n.fillStyle != t.fillStyle && (n.fillStyle = t.fillStyle, e.fillStyle = t.fillStyle) : (e.fillStyle = t.fillStyle, this.contextFillState_ = {
      fillStyle: t.fillStyle
    });
  }
  /**
   * @param {import("../canvas.js").StrokeState} strokeState Stroke state.
   * @private
   */
  setContextStrokeState_(t) {
    const e = this.context_, n = this.contextStrokeState_;
    n ? (n.lineCap != t.lineCap && (n.lineCap = t.lineCap, e.lineCap = t.lineCap), go(n.lineDash, t.lineDash) || e.setLineDash(
      n.lineDash = t.lineDash
    ), n.lineDashOffset != t.lineDashOffset && (n.lineDashOffset = t.lineDashOffset, e.lineDashOffset = t.lineDashOffset), n.lineJoin != t.lineJoin && (n.lineJoin = t.lineJoin, e.lineJoin = t.lineJoin), n.lineWidth != t.lineWidth && (n.lineWidth = t.lineWidth, e.lineWidth = t.lineWidth), n.miterLimit != t.miterLimit && (n.miterLimit = t.miterLimit, e.miterLimit = t.miterLimit), n.strokeStyle != t.strokeStyle && (n.strokeStyle = t.strokeStyle, e.strokeStyle = t.strokeStyle)) : (e.lineCap = t.lineCap, e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.strokeStyle = t.strokeStyle, this.contextStrokeState_ = {
      lineCap: t.lineCap,
      lineDash: t.lineDash,
      lineDashOffset: t.lineDashOffset,
      lineJoin: t.lineJoin,
      lineWidth: t.lineWidth,
      miterLimit: t.miterLimit,
      strokeStyle: t.strokeStyle
    });
  }
  /**
   * @param {import("../canvas.js").TextState} textState Text state.
   * @private
   */
  setContextTextState_(t) {
    const e = this.context_, n = this.contextTextState_, r = t.textAlign ? t.textAlign : Ho;
    n ? (n.font != t.font && (n.font = t.font, e.font = t.font), n.textAlign != r && (n.textAlign = r, e.textAlign = r), n.textBaseline != t.textBaseline && (n.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = r, e.textBaseline = t.textBaseline, this.contextTextState_ = {
      font: t.font,
      textAlign: r,
      textBaseline: t.textBaseline
    });
  }
  /**
   * Set the fill and stroke style for subsequent draw operations.  To clear
   * either fill or stroke styles, pass null for the appropriate parameter.
   *
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    if (!t)
      this.fillState_ = null;
    else {
      const n = t.getColor();
      this.fillState_ = {
        fillStyle: wi(
          n || Yi
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const n = e.getColor(), r = e.getLineCap(), s = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), u = e.getWidth(), l = e.getMiterLimit(), c = s || Yo;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : ru,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || Uo) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Ws,
        lineWidth: (u !== void 0 ? u : jo) * this.pixelRatio_,
        miterLimit: l !== void 0 ? l : Wo,
        strokeStyle: wi(
          n || qo
        )
      };
    }
  }
  /**
   * Set the image style for subsequent draw operations.  Pass null to remove
   * the image style.
   *
   * @param {import("../../style/Image.js").default} imageStyle Image style.
   */
  setImageStyle(t) {
    let e;
    if (!t || !(e = t.getSize())) {
      this.image_ = null;
      return;
    }
    const n = t.getPixelRatio(this.pixelRatio_), r = t.getAnchor(), s = t.getOrigin();
    this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = r[0] * n, this.imageAnchorY_ = r[1] * n, this.imageHeight_ = e[1] * n, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = s[0], this.imageOriginY_ = s[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
    const o = t.getScaleArray();
    this.imageScale_ = [
      o[0] * this.pixelRatio_ / n,
      o[1] * this.pixelRatio_ / n
    ], this.imageWidth_ = e[0] * n;
  }
  /**
   * Set the text style for subsequent draw operations.  Pass null to
   * remove the text style.
   *
   * @param {import("../../style/Text.js").default} textStyle Text style.
   */
  setTextStyle(t) {
    if (!t)
      this.text_ = "";
    else {
      const e = t.getFill();
      if (!e)
        this.textFillState_ = null;
      else {
        const g = e.getColor();
        this.textFillState_ = {
          fillStyle: wi(
            g || Yi
          )
        };
      }
      const n = t.getStroke();
      if (!n)
        this.textStrokeState_ = null;
      else {
        const g = n.getColor(), d = n.getLineCap(), _ = n.getLineDash(), p = n.getLineDashOffset(), m = n.getLineJoin(), y = n.getWidth(), v = n.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: d !== void 0 ? d : ru,
          lineDash: _ || Yo,
          lineDashOffset: p || Uo,
          lineJoin: m !== void 0 ? m : Ws,
          lineWidth: y !== void 0 ? y : jo,
          miterLimit: v !== void 0 ? v : Wo,
          strokeStyle: wi(
            g || qo
          )
        };
      }
      const r = t.getFont(), s = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), u = t.getRotation(), l = t.getScaleArray(), c = t.getText(), h = t.getTextAlign(), f = t.getTextBaseline();
      this.textState_ = {
        font: r !== void 0 ? r : Wf,
        textAlign: h !== void 0 ? h : Ho,
        textBaseline: f !== void 0 ? f : su
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((g, d, _) => g += _ % 2 ? " " : d, "") : c : "", this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = u !== void 0 ? u : 0, this.textScale_ = [
        this.pixelRatio_ * l[0],
        this.pixelRatio_ * l[1]
      ];
    }
  }
}
const ay = oy, Si = 0.5;
function uy(i, t, e, n, r, s, o) {
  const a = i[0] * Si, u = i[1] * Si, l = oi(a, u);
  l.imageSmoothingEnabled = !1;
  const c = l.canvas, h = new ay(
    l,
    Si,
    r,
    null,
    o
  ), f = e.length, g = Math.floor((256 * 256 * 256 - 1) / f), d = {};
  for (let p = 1; p <= f; ++p) {
    const m = e[p - 1], y = m.getStyleFunction() || n;
    if (!n)
      continue;
    let v = y(m, s);
    if (!v)
      continue;
    Array.isArray(v) || (v = [v]);
    const E = (p * g).toString(16).padStart(7, "#00000");
    for (let w = 0, P = v.length; w < P; ++w) {
      const b = v[w], R = b.getGeometryFunction()(m);
      if (!R || !ti(r, R.getExtent()))
        continue;
      const O = b.clone(), z = O.getFill();
      z && z.setColor(E);
      const L = O.getStroke();
      L && (L.setColor(E), L.setLineDash(null)), O.setText(void 0);
      const B = b.getImage();
      if (B && B.getOpacity() !== 0) {
        const X = B.getImageSize();
        if (!X)
          continue;
        const Z = oi(
          X[0],
          X[1],
          void 0,
          { alpha: !1 }
        ), nt = Z.canvas;
        Z.fillStyle = E, Z.fillRect(0, 0, nt.width, nt.height), O.setImage(
          new sc({
            img: nt,
            imgSize: X,
            anchor: B.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: B.getOrigin(),
            opacity: 1,
            size: B.getSize(),
            scale: B.getScale(),
            rotation: B.getRotation(),
            rotateWithView: B.getRotateWithView()
          })
        );
      }
      const M = O.getZIndex() || 0;
      let A = d[M];
      A || (A = {}, d[M] = A, A.Polygon = [], A.Circle = [], A.LineString = [], A.Point = []);
      const V = R.getType();
      if (V === "GeometryCollection") {
        const X = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          R.getGeometriesArrayRecursive()
        );
        for (let Z = 0, nt = X.length; Z < nt; ++Z) {
          const mt = X[Z];
          A[mt.getType().replace("Multi", "")].push(
            mt,
            O
          );
        }
      } else
        A[V.replace("Multi", "")].push(R, O);
    }
  }
  const _ = Object.keys(d).map(Number).sort(Bo);
  for (let p = 0, m = _.length; p < m; ++p) {
    const y = d[_[p]];
    for (const v in y) {
      const C = y[v];
      for (let E = 0, w = C.length; E < w; E += 2) {
        h.setStyle(C[E + 1]);
        for (let P = 0, b = t.length; P < b; ++P)
          h.setTransform(t[P]), h.drawGeometry(C[E]);
      }
    }
  }
  return l.getImageData(0, 0, c.width, c.height);
}
function ly(i, t, e) {
  const n = [];
  if (e) {
    const r = Math.floor(Math.round(i[0]) * Si), s = Math.floor(Math.round(i[1]) * Si), o = (Me(r, 0, e.width - 1) + Me(s, 0, e.height - 1) * e.width) * 4, a = e.data[o], u = e.data[o + 1], c = e.data[o + 2] + 256 * (u + 256 * a), h = Math.floor((256 * 256 * 256 - 1) / t.length);
    c && c % h === 0 && n.push(t[c / h - 1]);
  }
  return n;
}
const cy = 0.5, lg = {
  Point: vy,
  LineString: _y,
  Polygon: xy,
  MultiPoint: Ey,
  MultiLineString: my,
  MultiPolygon: yy,
  GeometryCollection: py,
  Circle: gy
};
function hy(i, t) {
  return parseInt(ge(i), 10) - parseInt(ge(t), 10);
}
function fy(i, t) {
  const e = vl(i, t);
  return e * e;
}
function vl(i, t) {
  return cy * i / t;
}
function gy(i, t, e, n, r) {
  const s = e.getFill(), o = e.getStroke();
  if (s || o) {
    const u = i.getBuilder(e.getZIndex(), "Circle");
    u.setFillStrokeStyle(s, o), u.drawCircle(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (r || i).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
function vh(i, t, e, n, r, s, o) {
  let a = !1;
  const u = e.getImage();
  if (u) {
    const l = u.getImageState();
    l == Ut.LOADED || l == Ut.ERROR ? u.unlistenImageChange(r) : (l == Ut.IDLE && u.load(), u.listenImageChange(r), a = !0);
  }
  return dy(
    i,
    t,
    e,
    n,
    s,
    o
  ), a;
}
function dy(i, t, e, n, r, s) {
  const o = e.getGeometryFunction()(t);
  if (!o)
    return;
  const a = o.simplifyTransformed(
    n,
    r
  );
  if (e.getRenderer())
    cg(i, a, e, t);
  else {
    const l = lg[a.getType()];
    l(
      i,
      a,
      e,
      t,
      s
    );
  }
}
function cg(i, t, e, n) {
  if (t.getType() == "GeometryCollection") {
    const s = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      t.getGeometries()
    );
    for (let o = 0, a = s.length; o < a; ++o)
      cg(i, s[o], e, n);
    return;
  }
  i.getBuilder(e.getZIndex(), "Default").drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    t,
    n,
    e.getRenderer(),
    e.getHitDetectionRenderer()
  );
}
function py(i, t, e, n, r) {
  const s = t.getGeometriesArray();
  let o, a;
  for (o = 0, a = s.length; o < a; ++o) {
    const u = lg[s[o].getType()];
    u(
      i,
      s[o],
      e,
      n,
      r
    );
  }
}
function _y(i, t, e, n, r) {
  const s = e.getStroke();
  if (s) {
    const a = i.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawLineString(t, n);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (r || i).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, n);
  }
}
function my(i, t, e, n, r) {
  const s = e.getStroke();
  if (s) {
    const a = i.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawMultiLineString(t, n);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (r || i).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, n);
  }
}
function yy(i, t, e, n, r) {
  const s = e.getFill(), o = e.getStroke();
  if (o || s) {
    const u = i.getBuilder(e.getZIndex(), "Polygon");
    u.setFillStrokeStyle(s, o), u.drawMultiPolygon(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (r || i).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
function vy(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != Ut.LOADED)
      return;
    let u = i;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (u = r, c === "obstacle") {
          const h = i.getBuilder(
            e.getZIndex(),
            "Image"
          );
          h.setImageStyle(s, a), h.drawPoint(t, n);
        } else
          o && o.getText() && (a = {});
    }
    const l = u.getBuilder(
      e.getZIndex(),
      "Image"
    );
    l.setImageStyle(s, a), l.drawPoint(t, n);
  }
  if (o && o.getText()) {
    let u = i;
    r && (u = r);
    const l = u.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(o, a), l.drawText(t, n);
  }
}
function Ey(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != Ut.LOADED)
      return;
    let u = i;
    if (r) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (u = r, c === "obstacle") {
          const h = i.getBuilder(
            e.getZIndex(),
            "Image"
          );
          h.setImageStyle(s, a), h.drawMultiPoint(t, n);
        } else
          o && o.getText() && (a = {});
    }
    const l = u.getBuilder(
      e.getZIndex(),
      "Image"
    );
    l.setImageStyle(s, a), l.drawMultiPoint(t, n);
  }
  if (o && o.getText()) {
    let u = i;
    r && (u = r);
    const l = u.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(o, a), l.drawText(t, n);
  }
}
function xy(i, t, e, n, r) {
  const s = e.getFill(), o = e.getStroke();
  if (s || o) {
    const u = i.getBuilder(e.getZIndex(), "Polygon");
    u.setFillStrokeStyle(s, o), u.drawPolygon(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (r || i).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
class Cy extends Qm {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = ts(), this.wrappedRenderedExtent_ = ts(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(t, e, n) {
    const r = e.extent, s = e.viewState, o = s.center, a = s.resolution, u = s.projection, l = s.rotation, c = u.getExtent(), h = this.getLayer().getSource(), f = e.pixelRatio, g = e.viewHints, d = !(g[bn.ANIMATING] || g[bn.INTERACTING]), _ = this.compositionContext_, p = Math.round(e.size[0] * f), m = Math.round(e.size[1] * f), y = h.getWrapX() && u.canWrapX(), v = y ? On(c) : null, C = y ? Math.ceil((r[2] - c[2]) / v) + 1 : 1;
    let E = y ? Math.floor((r[0] - c[0]) / v) : 0;
    do {
      const w = this.getRenderTransform(
        o,
        a,
        l,
        f,
        p,
        m,
        E * v
      );
      t.execute(
        _,
        1,
        w,
        l,
        d,
        void 0,
        n
      );
    } while (++E < C);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = oi(
        this.context.canvas.width,
        this.context.canvas.height,
        ph
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, xd(this.compositionContext_), ph.push(this.compositionContext_.canvas), this.compositionContext_ = null;
    }
  }
  /**
   * Render declutter items for this layer
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   */
  renderDeclutter(t) {
    this.declutterExecutorGroup && (this.setupCompositionContext_(), this.renderWorlds(
      this.declutterExecutorGroup,
      t,
      t.declutterTree
    ), this.releaseCompositionContext_());
  }
  /**
   * Render the layer.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(t, e) {
    const n = t.pixelRatio, r = t.layerStatesArray[t.layerIndex];
    mp(this.pixelTransform, 1 / n, 1 / n), yp(this.inversePixelTransform, this.pixelTransform);
    const s = Ep(this.pixelTransform);
    this.useContainer(e, s, this.getBackground(t));
    const o = this.context, a = o.canvas, u = this.replayGroup_, l = this.declutterExecutorGroup;
    if ((!u || u.isEmpty()) && (!l || l.isEmpty()))
      return null;
    const c = Math.round(t.size[0] * n), h = Math.round(t.size[1] * n);
    a.width != c || a.height != h ? (a.width = c, a.height = h, a.style.transform !== s && (a.style.transform = s)) : this.containerReused || o.clearRect(0, 0, c, h), this.preRender(o, t);
    const f = t.viewState;
    f.projection, this.opacity_ = r.opacity, this.setupCompositionContext_();
    let g = !1, d = !0;
    if (r.extent && this.clipping) {
      const _ = To(r.extent);
      d = ti(_, t.extent), g = d && !Fs(_, t.extent), g && this.clipUnrotated(this.compositionContext_, t, _);
    }
    return d && this.renderWorlds(u, t), g && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, t), this.renderedRotation_ !== f.rotation && (this.renderedRotation_ = f.rotation, this.hitDetectionImageData_ = null), this.container;
  }
  /**
   * Asynchronous layer level hit detection.
   * @param {import("../../pixel.js").Pixel} pixel Pixel.
   * @return {Promise<Array<import("../../Feature").default>>} Promise
   * that resolves with an array of features.
   */
  getFeatures(t) {
    return new Promise((e) => {
      if (!this.hitDetectionImageData_ && !this.animatingOrInteracting_) {
        const n = [this.context.canvas.width, this.context.canvas.height];
        Ke(this.pixelTransform, n);
        const r = this.renderedCenter_, s = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, u = this.wrappedRenderedExtent_, l = this.getLayer(), c = [], h = n[0] * Si, f = n[1] * Si;
        c.push(
          this.getRenderTransform(
            r,
            s,
            o,
            Si,
            h,
            f,
            0
          ).slice()
        );
        const g = l.getSource(), d = a.getExtent();
        if (g.getWrapX() && a.canWrapX() && !Fs(d, u)) {
          let _ = u[0];
          const p = On(d);
          let m = 0, y;
          for (; _ < d[0]; )
            --m, y = p * m, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Si,
                h,
                f,
                y
              ).slice()
            ), _ += p;
          for (m = 0, _ = u[2]; _ > d[2]; )
            ++m, y = p * m, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Si,
                h,
                f,
                y
              ).slice()
            ), _ -= p;
        }
        this.hitDetectionImageData_ = uy(
          n,
          c,
          this.renderedFeatures_,
          l.getStyleFunction(),
          u,
          s,
          o
        );
      }
      e(
        ly(t, this.renderedFeatures_, this.hitDetectionImageData_)
      );
    });
  }
  /**
   * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {number} hitTolerance Hit tolerance in pixels.
   * @param {import("../vector.js").FeatureCallback<T>} callback Feature callback.
   * @param {Array<import("../Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
   * @return {T|undefined} Callback result.
   * @template T
   */
  forEachFeatureAtCoordinate(t, e, n, r, s) {
    if (!this.replayGroup_)
      return;
    const o = e.viewState.resolution, a = e.viewState.rotation, u = this.getLayer(), l = {}, c = function(g, d, _) {
      const p = ge(g), m = l[p];
      if (m) {
        if (m !== !0 && _ < m.distanceSq) {
          if (_ === 0)
            return l[p] = !0, s.splice(s.lastIndexOf(m), 1), r(g, u, d);
          m.geometry = d, m.distanceSq = _;
        }
      } else {
        if (_ === 0)
          return l[p] = !0, r(g, u, d);
        s.push(
          l[p] = {
            feature: g,
            layer: u,
            geometry: d,
            distanceSq: _,
            callback: r
          }
        );
      }
    };
    let h;
    const f = [this.replayGroup_];
    return this.declutterExecutorGroup && f.push(this.declutterExecutorGroup), f.some((g) => h = g.forEachFeatureAtCoordinate(
      t,
      o,
      a,
      n,
      c,
      g === this.declutterExecutorGroup && e.declutterTree ? e.declutterTree.all().map((d) => d.value) : null
    )), h;
  }
  /**
   * Perform action necessary to get the layer rendered after new fonts have loaded
   */
  handleFontsChanged() {
    const t = this.getLayer();
    t.getVisible() && this.replayGroup_ && t.changed();
  }
  /**
   * Handle changes in image style state.
   * @param {import("../../events/Event.js").default} event Image style change event.
   * @private
   */
  handleStyleImageChange_(t) {
    this.renderIfReadyAndVisible();
  }
  /**
   * Determine whether render should be called.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @return {boolean} Layer is ready to be rendered.
   */
  prepareFrame(t) {
    const e = this.getLayer(), n = e.getSource();
    if (!n)
      return !1;
    const r = t.viewHints[bn.ANIMATING], s = t.viewHints[bn.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && r || !a && s)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const u = t.extent, l = t.viewState, c = l.projection, h = l.resolution, f = t.pixelRatio, g = e.getRevision(), d = e.getRenderBuffer();
    let _ = e.getRenderOrder();
    _ === void 0 && (_ = hy);
    const p = l.center.slice(), m = Bl(
      u,
      d * h
    ), y = m.slice(), v = [m.slice()], C = c.getExtent();
    if (n.getWrapX() && c.canWrapX() && !Fs(C, t.extent)) {
      const A = On(C), V = Math.max(On(m) / 2, A);
      m[0] = C[0] - V, m[2] = C[2] + V, np(p, c);
      const X = wf(v[0], c);
      X[0] < C[0] && X[2] < C[2] ? v.push([
        X[0] + A,
        X[1],
        X[2] + A,
        X[3]
      ]) : X[0] > C[0] && X[2] > C[2] && v.push([
        X[0] - A,
        X[1],
        X[2] - A,
        X[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == h && this.renderedRevision_ == g && this.renderedRenderOrder_ == _ && Fs(this.wrappedRenderedExtent_, m))
      return go(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = p, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const E = new dh(
      vl(h, f),
      m,
      h,
      f
    );
    let w;
    this.getLayer().getDeclutter() && (w = new dh(
      vl(h, f),
      m,
      h,
      f
    ));
    let P;
    for (let A = 0, V = v.length; A < V; ++A)
      n.loadFeatures(v[A], h, c);
    const b = fy(h, f);
    let R = !0;
    const O = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       */
      (A) => {
        let V;
        const X = A.getStyleFunction() || e.getStyleFunction();
        if (X && (V = X(A, h)), V) {
          const Z = this.renderFeature(
            A,
            b,
            V,
            E,
            P,
            w
          );
          R = R && !Z;
        }
      }
    ), z = Pf(m), L = n.getFeaturesInExtent(z);
    _ && L.sort(_);
    for (let A = 0, V = L.length; A < V; ++A)
      O(L[A]);
    this.renderedFeatures_ = L, this.ready = R;
    const B = E.finish(), M = new yh(
      m,
      h,
      f,
      n.getOverlaps(),
      B,
      e.getRenderBuffer()
    );
    return w && (this.declutterExecutorGroup = new yh(
      m,
      h,
      f,
      n.getOverlaps(),
      w.finish(),
      e.getRenderBuffer()
    )), this.renderedResolution_ = h, this.renderedRevision_ = g, this.renderedRenderOrder_ = _, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = p, this.renderedProjection_ = c, this.replayGroup_ = M, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
  }
  /**
   * @param {import("../../Feature.js").default} feature Feature.
   * @param {number} squaredTolerance Squared render tolerance.
   * @param {import("../../style/Style.js").default|Array<import("../../style/Style.js").default>} styles The style or array of styles.
   * @param {import("../../render/canvas/BuilderGroup.js").default} builderGroup Builder group.
   * @param {import("../../proj.js").TransformFunction} [transform] Transform from user to view projection.
   * @param {import("../../render/canvas/BuilderGroup.js").default} [declutterBuilderGroup] Builder for decluttering.
   * @return {boolean} `true` if an image is loading.
   */
  renderFeature(t, e, n, r, s, o) {
    if (!n)
      return !1;
    let a = !1;
    if (Array.isArray(n))
      for (let u = 0, l = n.length; u < l; ++u)
        a = vh(
          r,
          t,
          n[u],
          e,
          this.boundHandleStyleImageChange_,
          s,
          o
        ) || a;
    else
      a = vh(
        r,
        t,
        n,
        e,
        this.boundHandleStyleImageChange_,
        s,
        o
      );
    return a;
  }
}
const Iy = Cy;
class Sy extends Dm {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new Iy(this);
  }
}
const wy = Sy;
class Ry {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(t) {
    this.rbush_ = new ag(t), this.items_ = {};
  }
  /**
   * Insert a value into the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  insert(t, e) {
    const n = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3],
      value: e
    };
    this.rbush_.insert(n), this.items_[ge(e)] = n;
  }
  /**
   * Bulk-insert values into the RBush.
   * @param {Array<import("../extent.js").Extent>} extents Extents.
   * @param {Array<T>} values Values.
   */
  load(t, e) {
    const n = new Array(e.length);
    for (let r = 0, s = e.length; r < s; r++) {
      const o = t[r], a = e[r], u = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      n[r] = u, this.items_[ge(a)] = u;
    }
    this.rbush_.load(n);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(t) {
    const e = ge(t), n = this.items_[e];
    return delete this.items_[e], this.rbush_.remove(n) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(t, e) {
    const n = this.items_[ge(e)], r = [n.minX, n.minY, n.maxX, n.maxY];
    yf(r, t) || (this.remove(e), this.insert(t, e));
  }
  /**
   * Return all values in the RBush.
   * @return {Array<T>} All.
   */
  getAll() {
    return this.rbush_.all().map(function(e) {
      return e.value;
    });
  }
  /**
   * Return all values in the given extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {Array<T>} All in extent.
   */
  getInExtent(t) {
    const e = {
      minX: t[0],
      minY: t[1],
      maxX: t[2],
      maxY: t[3]
    };
    return this.rbush_.search(e).map(function(r) {
      return r.value;
    });
  }
  /**
   * Calls a callback function with each value in the tree.
   * If the callback returns a truthy value, this value is returned without
   * checking the rest of the tree.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEach(t) {
    return this.forEach_(this.getAll(), t);
  }
  /**
   * Calls a callback function with each value in the provided extent.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(T): *} callback Callback.
   * @return {*} Callback return value.
   */
  forEachInExtent(t, e) {
    return this.forEach_(this.getInExtent(t), e);
  }
  /**
   * @param {Array<T>} values Values.
   * @param {function(T): *} callback Callback.
   * @private
   * @return {*} Callback return value.
   */
  forEach_(t, e) {
    let n;
    for (let r = 0, s = t.length; r < s; r++)
      if (n = e(t[r]), n)
        return n;
    return n;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return zo(this.items_);
  }
  /**
   * Remove all values from the RBush.
   */
  clear() {
    this.rbush_.clear(), this.items_ = {};
  }
  /**
   * @param {import("../extent.js").Extent} [extent] Extent.
   * @return {import("../extent.js").Extent} Extent.
   */
  getExtent(t) {
    const e = this.rbush_.toJSON();
    return es(e.minX, e.minY, e.maxX, e.maxY, t);
  }
  /**
   * @param {RBush} rbush R-Tree.
   */
  concat(t) {
    this.rbush_.load(t.rbush_.all());
    for (const e in t.items_)
      this.items_[e] = t.items_[e];
  }
}
const Eh = Ry;
class Ny extends Gr {
  /**
   * @param {Options} options Source options.
   */
  constructor(t) {
    super(), this.projection = Us(t.projection), this.attributions_ = xh(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
    const e = this;
    this.viewPromise_ = new Promise(function(n, r) {
      e.viewResolver = n, e.viewRejector = r;
    });
  }
  /**
   * Get the attribution function for the source.
   * @return {?Attribution} Attribution function.
   * @api
   */
  getAttributions() {
    return this.attributions_;
  }
  /**
   * @return {boolean} Attributions are collapsible.
   * @api
   */
  getAttributionsCollapsible() {
    return this.attributionsCollapsible_;
  }
  /**
   * Get the projection of the source.
   * @return {import("../proj/Projection.js").default|null} Projection.
   * @api
   */
  getProjection() {
    return this.projection;
  }
  /**
   * @param {import("../proj/Projection").default} [projection] Projection.
   * @return {Array<number>|null} Resolutions.
   */
  getResolutions(t) {
    return null;
  }
  /**
   * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
   */
  getView() {
    return this.viewPromise_;
  }
  /**
   * Get the state of the source, see {@link import("./Source.js").State} for possible states.
   * @return {import("./Source.js").State} State.
   * @api
   */
  getState() {
    return this.state_;
  }
  /**
   * @return {boolean|undefined} Wrap X.
   */
  getWrapX() {
    return this.wrapX_;
  }
  /**
   * @return {boolean} Use linear interpolation when resampling.
   */
  getInterpolate() {
    return this.interpolate_;
  }
  /**
   * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
   * @api
   */
  refresh() {
    this.changed();
  }
  /**
   * Set the attributions of the source.
   * @param {AttributionLike|undefined} attributions Attributions.
   *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
   *     or `undefined`.
   * @api
   */
  setAttributions(t) {
    this.attributions_ = xh(t), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function xh(i) {
  return i ? Array.isArray(i) ? function(t) {
    return i;
  } : typeof i == "function" ? i : function(t) {
    return [i];
  } : null;
}
const Ly = Ny, Qn = {
  /**
   * Triggered when a feature is added to the source.
   * @event module:ol/source/Vector.VectorSourceEvent#addfeature
   * @api
   */
  ADDFEATURE: "addfeature",
  /**
   * Triggered when a feature is updated.
   * @event module:ol/source/Vector.VectorSourceEvent#changefeature
   * @api
   */
  CHANGEFEATURE: "changefeature",
  /**
   * Triggered when the clear method is called on the source.
   * @event module:ol/source/Vector.VectorSourceEvent#clear
   * @api
   */
  CLEAR: "clear",
  /**
   * Triggered when a feature is removed from the source.
   * See {@link module:ol/source/Vector~VectorSource#clear source.clear()} for exceptions.
   * @event module:ol/source/Vector.VectorSourceEvent#removefeature
   * @api
   */
  REMOVEFEATURE: "removefeature",
  /**
   * Triggered when features starts loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadstart
   * @api
   */
  FEATURESLOADSTART: "featuresloadstart",
  /**
   * Triggered when features finishes loading.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloadend
   * @api
   */
  FEATURESLOADEND: "featuresloadend",
  /**
   * Triggered if feature loading results in an error.
   * @event module:ol/source/Vector.VectorSourceEvent#featuresloaderror
   * @api
   */
  FEATURESLOADERROR: "featuresloaderror"
};
function by(i, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let Py = !1;
function Ty(i, t, e, n, r, s, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof i == "function" ? i(e, n, r) : i,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = Py, a.onload = function(u) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const l = t.getType();
      let c;
      l == "json" || l == "text" ? c = a.responseText : l == "xml" ? (c = a.responseXML, c || (c = new DOMParser().parseFromString(
        a.responseText,
        "application/xml"
      ))) : l == "arraybuffer" && (c = /** @type {ArrayBuffer} */
      a.response), c ? s(
        /** @type {Array<import("./Feature.js").default>} */
        t.readFeatures(c, {
          extent: e,
          featureProjection: r
        }),
        t.readProjection(c)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function Ch(i, t) {
  return function(e, n, r, s, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    Ty(
      i,
      t,
      e,
      n,
      r,
      /**
       * @param {Array<import("./Feature.js").default>} features The loaded features.
       * @param {import("./proj/Projection.js").default} dataProjection Data
       * projection.
       */
      function(u, l) {
        a.addFeatures(u), s !== void 0 && s(u);
      },
      /* FIXME handle error */
      o || Xs
    );
  };
}
class gr extends En {
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>} [feature] Feature.
   * @param {Array<import("../Feature.js").default<Geometry>>} [features] Features.
   */
  constructor(t, e, n) {
    super(t), this.feature = e, this.features = n;
  }
}
class My extends Ly {
  /**
   * @param {Options<Geometry>} [options] Vector source options.
   */
  constructor(t) {
    t = t || {}, super({
      attributions: t.attributions,
      interpolate: !0,
      projection: void 0,
      state: "ready",
      wrapX: t.wrapX !== void 0 ? t.wrapX : !0
    }), this.on, this.once, this.un, this.loader_ = Xs, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (oe(this.format_, 7), this.loader_ = Ch(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : by;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new Eh() : null, this.loadedExtentsRtree_ = new Eh(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n, r;
    Array.isArray(t.features) ? r = t.features : t.features && (n = t.features, r = n.getArray()), !e && n === void 0 && (n = new dp(r)), r !== void 0 && this.addFeaturesInternal(r), n !== void 0 && this.bindFeaturesCollection_(n);
  }
  /**
   * Add a single feature to the source.  If you want to add a batch of features
   * at once, call {@link module:ol/source/Vector~VectorSource#addFeatures #addFeatures()}
   * instead. A feature will not be added to the source if feature with
   * the same id is already there. The reason for this behavior is to avoid
   * feature duplication when using bbox or tile loading strategies.
   * Note: this also applies if an {@link module:ol/Collection~Collection} is used for features,
   * meaning that if a feature with a duplicate id is added in the collection, it will
   * be removed from it right away.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to add.
   * @api
   */
  addFeature(t) {
    this.addFeatureInternal(t), this.changed();
  }
  /**
   * Add a feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @protected
   */
  addFeatureInternal(t) {
    const e = ge(t);
    if (!this.addToIndex_(e, t)) {
      this.featuresCollection_ && this.featuresCollection_.remove(t);
      return;
    }
    this.setupChangeEvents_(e, t);
    const n = t.getGeometry();
    if (n) {
      const r = n.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(r, t);
    } else
      this.nullGeometryFeatures_[e] = t;
    this.dispatchEvent(
      new gr(Qn.ADDFEATURE, t)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      ni(e, Fn.CHANGE, this.handleFeatureChange_, this),
      ni(
        e,
        lf.PROPERTYCHANGE,
        this.handleFeatureChange_,
        this
      )
    ];
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} The feature is "valid", in the sense that it is also a
   *     candidate for insertion into the Rtree.
   * @private
   */
  addToIndex_(t, e) {
    let n = !0;
    const r = e.getId();
    return r !== void 0 && (r.toString() in this.idIndex_ ? n = !1 : this.idIndex_[r.toString()] = e), n && (oe(!(t in this.uidIndex_), 30), this.uidIndex_[t] = e), n;
  }
  /**
   * Add a batch of features to the source.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features to add.
   * @api
   */
  addFeatures(t) {
    this.addFeaturesInternal(t), this.changed();
  }
  /**
   * Add features without firing a `change` event.
   * @param {Array<import("../Feature.js").default<Geometry>>} features Features.
   * @protected
   */
  addFeaturesInternal(t) {
    const e = [], n = [], r = [];
    for (let s = 0, o = t.length; s < o; s++) {
      const a = t[s], u = ge(a);
      this.addToIndex_(u, a) && n.push(a);
    }
    for (let s = 0, o = n.length; s < o; s++) {
      const a = n[s], u = ge(a);
      this.setupChangeEvents_(u, a);
      const l = a.getGeometry();
      if (l) {
        const c = l.getExtent();
        e.push(c), r.push(a);
      } else
        this.nullGeometryFeatures_[u] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, r), this.hasListener(Qn.ADDFEATURE))
      for (let s = 0, o = n.length; s < o; s++)
        this.dispatchEvent(
          new gr(Qn.ADDFEATURE, n[s])
        );
  }
  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      Qn.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.push(n.feature), e = !1);
      }
    ), this.addEventListener(
      Qn.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.remove(n.feature), e = !1);
      }
    ), t.addEventListener(
      ks.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
       */
      (n) => {
        e || (e = !0, this.addFeature(n.element), e = !1);
      }
    ), t.addEventListener(
      ks.REMOVE,
      /**
       * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
       */
      (n) => {
        e || (e = !0, this.removeFeature(n.element), e = !1);
      }
    ), this.featuresCollection_ = t;
  }
  /**
   * Remove all features from the source.
   * @param {boolean} [fast] Skip dispatching of {@link module:ol/source/Vector.VectorSourceEvent#event:removefeature} events.
   * @api
   */
  clear(t) {
    if (t) {
      for (const n in this.featureChangeKeys_)
        this.featureChangeKeys_[n].forEach(ii);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      const n = (r) => {
        this.removeFeatureInternal(r);
      };
      this.featuresRtree_.forEach(n);
      for (const r in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[r]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    const e = new gr(Qn.CLEAR);
    this.dispatchEvent(e), this.changed();
  }
  /**
   * Iterate through all features on the source, calling the provided callback
   * with each one.  If the callback returns any "truthy" value, iteration will
   * stop and the function will return the same value.
   * Note: this function only iterate through the feature that have a defined geometry.
   *
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     on the source.  Return a truthy value to stop iteration.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeature(t) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEach(t);
    this.featuresCollection_ && this.featuresCollection_.forEach(t);
  }
  /**
   * Iterate through all features whose geometries contain the provided
   * coordinate, calling the callback with each feature.  If the callback returns
   * a "truthy" value, iteration will stop and the function will return the same
   * value.
   *
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose goemetry contains the provided coordinate.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   */
  forEachFeatureAtCoordinateDirect(t, e) {
    const n = [t[0], t[1], t[0], t[1]];
    return this.forEachFeatureInExtent(n, function(r) {
      if (r.getGeometry().intersectsCoordinate(t))
        return e(r);
    });
  }
  /**
   * Iterate through all features whose bounding box intersects the provided
   * extent (note that the feature's geometry may not intersect the extent),
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you are interested in features whose geometry intersects an extent, call
   * the {@link module:ol/source/Vector~VectorSource#forEachFeatureIntersectingExtent #forEachFeatureIntersectingExtent()} method instead.
   *
   * When `useSpatialIndex` is set to false, this method will loop through all
   * features, equivalent to {@link module:ol/source/Vector~VectorSource#forEachFeature #forEachFeature()}.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose bounding box intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureInExtent(t, e) {
    if (this.featuresRtree_)
      return this.featuresRtree_.forEachInExtent(t, e);
    this.featuresCollection_ && this.featuresCollection_.forEach(e);
  }
  /**
   * Iterate through all features whose geometry intersects the provided extent,
   * calling the callback with each feature.  If the callback returns a "truthy"
   * value, iteration will stop and the function will return the same value.
   *
   * If you only want to test for bounding box intersection, call the
   * {@link module:ol/source/Vector~VectorSource#forEachFeatureInExtent #forEachFeatureInExtent()} method instead.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {function(import("../Feature.js").default<Geometry>): T} callback Called with each feature
   *     whose geometry intersects the provided extent.
   * @return {T|undefined} The return value from the last call to the callback.
   * @template T
   * @api
   */
  forEachFeatureIntersectingExtent(t, e) {
    return this.forEachFeatureInExtent(
      t,
      /**
       * @param {import("../Feature.js").default<Geometry>} feature Feature.
       * @return {T|undefined} The return value from the last call to the callback.
       */
      function(n) {
        if (n.getGeometry().intersectsExtent(t)) {
          const s = e(n);
          if (s)
            return s;
        }
      }
    );
  }
  /**
   * Get the features collection associated with this source. Will be `null`
   * unless the source was configured with `useSpatialIndex` set to `false`, or
   * with an {@link module:ol/Collection~Collection} as `features`.
   * @return {Collection<import("../Feature.js").default<Geometry>>|null} The collection of features.
   * @api
   */
  getFeaturesCollection() {
    return this.featuresCollection_;
  }
  /**
   * Get a snapshot of the features currently on the source in random order. The returned array
   * is a copy, the features are references to the features in the source.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeatures() {
    let t;
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), zo(this.nullGeometryFeatures_) || Xi(t, Object.values(this.nullGeometryFeatures_))), /** @type {Array<import("../Feature.js").default<Geometry>>} */
    t;
  }
  /**
   * Get all features whose geometry intersects the provided coordinate.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeaturesAtCoordinate(t) {
    const e = [];
    return this.forEachFeatureAtCoordinateDirect(t, function(n) {
      e.push(n);
    }), e;
  }
  /**
   * Get all features whose bounding box intersects the provided extent.  Note that this returns an array of
   * all features intersecting the given extent in random order (so it may include
   * features whose geometries do not intersect the extent).
   *
   * When `useSpatialIndex` is set to false, this method will return all
   * features.
   *
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {import("../proj/Projection.js").default} [projection] Include features
   * where `extent` exceeds the x-axis bounds of `projection` and wraps around the world.
   * @return {Array<import("../Feature.js").default<Geometry>>} Features.
   * @api
   */
  getFeaturesInExtent(t, e) {
    if (this.featuresRtree_) {
      if (!(e && e.canWrapX() && this.getWrapX()))
        return this.featuresRtree_.getInExtent(t);
      const r = Kd(t, e);
      return [].concat(
        ...r.map((s) => this.featuresRtree_.getInExtent(s))
      );
    }
    return this.featuresCollection_ ? this.featuresCollection_.getArray().slice(0) : [];
  }
  /**
   * Get the closest feature to the provided coordinate.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
   * @param {function(import("../Feature.js").default<Geometry>):boolean} [filter] Feature filter function.
   *     The filter function will receive one argument, the {@link module:ol/Feature~Feature feature}
   *     and it should return a boolean value. By default, no filtering is made.
   * @return {import("../Feature.js").default<Geometry>} Closest feature.
   * @api
   */
  getClosestFeatureToCoordinate(t, e) {
    const n = t[0], r = t[1];
    let s = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const u = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return e = e || fd, this.featuresRtree_.forEachInExtent(
      u,
      /**
       * @param {import("../Feature.js").default<Geometry>} feature Feature.
       */
      function(l) {
        if (e(l)) {
          const c = l.getGeometry(), h = a;
          if (a = c.closestPointXY(
            n,
            r,
            o,
            a
          ), a < h) {
            s = l;
            const f = Math.sqrt(a);
            u[0] = n - f, u[1] = r - f, u[2] = n + f, u[3] = r + f;
          }
        }
      }
    ), s;
  }
  /**
   * Get the extent of the features currently in the source.
   *
   * This method is not available when the source is configured with
   * `useSpatialIndex` set to `false`.
   * @param {import("../extent.js").Extent} [extent] Destination extent. If provided, no new extent
   *     will be created. Instead, that extent's coordinates will be overwritten.
   * @return {import("../extent.js").Extent} Extent.
   * @api
   */
  getExtent(t) {
    return this.featuresRtree_.getExtent(t);
  }
  /**
   * Get a feature by its identifier (the value returned by feature.getId()).
   * Note that the index treats string and numeric identifiers as the same.  So
   * `source.getFeatureById(2)` will return a feature with id `'2'` or `2`.
   *
   * @param {string|number} id Feature identifier.
   * @return {import("../Feature.js").default<Geometry>|null} The feature (or `null` if not found).
   * @api
   */
  getFeatureById(t) {
    const e = this.idIndex_[t.toString()];
    return e !== void 0 ? e : null;
  }
  /**
   * Get a feature by its internal unique identifier (using `getUid`).
   *
   * @param {string} uid Feature identifier.
   * @return {import("../Feature.js").default<Geometry>|null} The feature (or `null` if not found).
   */
  getFeatureByUid(t) {
    const e = this.uidIndex_[t];
    return e !== void 0 ? e : null;
  }
  /**
   * Get the format associated with this source.
   *
   * @return {import("../format/Feature.js").default|undefined} The feature format.
   * @api
   */
  getFormat() {
    return this.format_;
  }
  /**
   * @return {boolean} The source can have overlapping geometries.
   */
  getOverlaps() {
    return this.overlaps_;
  }
  /**
   * Get the url associated with this source.
   *
   * @return {string|import("../featureloader.js").FeatureUrlFunction|undefined} The url.
   * @api
   */
  getUrl() {
    return this.url_;
  }
  /**
   * @param {Event} event Event.
   * @private
   */
  handleFeatureChange_(t) {
    const e = (
      /** @type {import("../Feature.js").default<Geometry>} */
      t.target
    ), n = ge(e), r = e.getGeometry();
    if (!r)
      n in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[n] = e);
    else {
      const o = r.getExtent();
      n in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[n], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
    }
    const s = e.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
    } else
      this.removeFromIdIndex_(e), this.uidIndex_[n] = e;
    this.changed(), this.dispatchEvent(
      new gr(Qn.CHANGEFEATURE, e)
    );
  }
  /**
   * Returns true if the feature is contained within the source.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @return {boolean} Has feature.
   * @api
   */
  hasFeature(t) {
    const e = t.getId();
    return e !== void 0 ? e in this.idIndex_ : ge(t) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && zo(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {number} resolution Resolution.
   * @param {import("../proj/Projection.js").default} projection Projection.
   */
  loadFeatures(t, e, n) {
    const r = this.loadedExtentsRtree_, s = this.strategy_(t, e, n);
    for (let o = 0, a = s.length; o < a; ++o) {
      const u = s[o];
      r.forEachInExtent(
        u,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(c) {
          return Fs(c.extent, u);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new gr(Qn.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        u,
        e,
        n,
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new gr(
              Qn.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new gr(Qn.FEATURESLOADERROR)
          );
        }
      ), r.insert(u, { extent: u.slice() }));
    }
    this.loading = this.loader_.length < 4 ? !1 : this.loadingExtentsCount_ > 0;
  }
  refresh() {
    this.clear(!0), this.loadedExtentsRtree_.clear(), super.refresh();
  }
  /**
   * Remove an extent from the list of loaded extents.
   * @param {import("../extent.js").Extent} extent Extent.
   * @api
   */
  removeLoadedExtent(t) {
    const e = this.loadedExtentsRtree_;
    let n;
    e.forEachInExtent(t, function(r) {
      if (yf(r.extent, t))
        return n = r, !0;
    }), n && e.remove(n);
  }
  /**
   * Remove a single feature from the source.  If you want to remove all features
   * at once, use the {@link module:ol/source/Vector~VectorSource#clear #clear()} method
   * instead.
   * @param {import("../Feature.js").default<Geometry>} feature Feature to remove.
   * @api
   */
  removeFeature(t) {
    if (!t)
      return;
    const e = ge(t);
    e in this.nullGeometryFeatures_ ? delete this.nullGeometryFeatures_[e] : this.featuresRtree_ && this.featuresRtree_.remove(t), this.removeFeatureInternal(t) && this.changed();
  }
  /**
   * Remove feature without firing a `change` event.
   * @param {import("../Feature.js").default<Geometry>} feature Feature.
   * @return {import("../Feature.js").default<Geometry>|undefined} The removed feature
   *     (or undefined if the feature was not found).
   * @protected
   */
  removeFeatureInternal(t) {
    const e = ge(t), n = this.featureChangeKeys_[e];
    if (!n)
      return;
    n.forEach(ii), delete this.featureChangeKeys_[e];
    const r = t.getId();
    return r !== void 0 && delete this.idIndex_[r.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new gr(Qn.REMOVEFEATURE, t)
    ), t;
  }
  /**
   * Remove a feature from the id index.  Called internally when the feature id
   * may have changed.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @return {boolean} Removed the feature from the index.
   * @private
   */
  removeFromIdIndex_(t) {
    let e = !1;
    for (const n in this.idIndex_)
      if (this.idIndex_[n] === t) {
        delete this.idIndex_[n], e = !0;
        break;
      }
    return e;
  }
  /**
   * Set the new loader of the source. The next render cycle will use the
   * new loader.
   * @param {import("../featureloader.js").FeatureLoader} loader The loader to set.
   * @api
   */
  setLoader(t) {
    this.loader_ = t;
  }
  /**
   * Points the source to a new url. The next render cycle will use the new url.
   * @param {string|import("../featureloader.js").FeatureUrlFunction} url Url.
   * @api
   */
  setUrl(t) {
    oe(this.format_, 7), this.url_ = t, this.setLoader(Ch(t, this.format_));
  }
}
const Oy = My;
let Ay = class El extends Af {
  /**
   * @param {Array<Geometry>} [geometries] Geometries.
   */
  constructor(t) {
    super(), this.geometries_ = t || null, this.changeEventsKeys_ = [], this.listenGeometriesChange_();
  }
  /**
   * @private
   */
  unlistenGeometriesChange_() {
    this.changeEventsKeys_.forEach(ii), this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(
          ni(this.geometries_[t], Fn.CHANGE, this.changed, this)
        );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */
  clone() {
    const t = new El(null);
    return t.setGeometries(this.geometries_), t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    if (r < ps(this.getExtent(), t, e))
      return r;
    const s = this.geometries_;
    for (let o = 0, a = s.length; o < a; ++o)
      r = s[o].closestPointXY(
        t,
        e,
        n,
        r
      );
    return r;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    const n = this.geometries_;
    for (let r = 0, s = n.length; r < s; ++r)
      if (n[r].containsXY(t, e))
        return !0;
    return !1;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    Su(t);
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      Vd(t, e[n].getExtent());
    return t;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return Ih(this.geometries_);
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArray() {
    return this.geometries_;
  }
  /**
   * @return {Array<Geometry>} Geometries.
   */
  getGeometriesArrayRecursive() {
    let t = [];
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      e[n].getType() === this.getType() ? t = t.concat(
        /** @type {GeometryCollection} */
        e[n].getGeometriesArrayRecursive()
      ) : t.push(e[n]);
    return t;
  }
  /**
   * Create a simplified version of this geometry using the Douglas Peucker algorithm.
   * @param {number} squaredTolerance Squared tolerance.
   * @return {GeometryCollection} Simplified GeometryCollection.
   */
  getSimplifiedGeometry(t) {
    if (this.simplifiedGeometryRevision !== this.getRevision() && (this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = this.getRevision()), t < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && t < this.simplifiedGeometryMaxMinSquaredTolerance)
      return this;
    const e = [], n = this.geometries_;
    let r = !1;
    for (let s = 0, o = n.length; s < o; ++s) {
      const a = n[s], u = a.getSimplifiedGeometry(t);
      e.push(u), u !== a && (r = !0);
    }
    if (r) {
      const s = new El(null);
      return s.setGeometriesArray(e), s;
    }
    return this.simplifiedGeometryMaxMinSquaredTolerance = t, this;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "GeometryCollection";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      if (e[n].intersectsExtent(t))
        return !0;
    return !1;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.geometries_.length === 0;
  }
  /**
   * Rotate the geometry around a given coordinate. This modifies the geometry
   * coordinates in place.
   * @param {number} angle Rotation angle in radians.
   * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
   * @api
   */
  rotate(t, e) {
    const n = this.geometries_;
    for (let r = 0, s = n.length; r < s; ++r)
      n[r].rotate(t, e);
    this.changed();
  }
  /**
   * Scale the geometry (with an optional origin).  This modifies the geometry
   * coordinates in place.
   * @abstract
   * @param {number} sx The scaling factor in the x-direction.
   * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
   * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
   *     of the geometry extent).
   * @api
   */
  scale(t, e, n) {
    n || (n = Ys(this.getExtent()));
    const r = this.geometries_;
    for (let s = 0, o = r.length; s < o; ++s)
      r[s].scale(t, e, n);
    this.changed();
  }
  /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */
  setGeometries(t) {
    this.setGeometriesArray(Ih(t));
  }
  /**
   * @param {Array<Geometry>} geometries Geometries.
   */
  setGeometriesArray(t) {
    this.unlistenGeometriesChange_(), this.geometries_ = t, this.listenGeometriesChange_(), this.changed();
  }
  /**
   * Apply a transform function to the coordinates of the geometry.
   * The geometry is modified in place.
   * If you do not want the geometry modified in place, first `clone()` it and
   * then use this function on the clone.
   * @param {import("../proj.js").TransformFunction} transformFn Transform function.
   * Called with a flat array of geometry coordinates.
   * @api
   */
  applyTransform(t) {
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      e[n].applyTransform(t);
    this.changed();
  }
  /**
   * Translate the geometry.  This modifies the geometry coordinates in place.  If
   * instead you want a new geometry, first `clone()` this geometry.
   * @param {number} deltaX Delta X.
   * @param {number} deltaY Delta Y.
   * @api
   */
  translate(t, e) {
    const n = this.geometries_;
    for (let r = 0, s = n.length; r < s; ++r)
      n[r].translate(t, e);
    this.changed();
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
};
function Ih(i) {
  const t = [];
  for (let e = 0, n = i.length; e < n; ++e)
    t.push(i[e].clone());
  return t;
}
const Dy = Ay;
let Fy = class xl extends _s {
  /**
   * @param {Array<Array<import("../coordinate.js").Coordinate>|LineString>|Array<number>} coordinates
   *     Coordinates or LineString geometries. (For internal use, flat coordinates in
   *     combination with `layout` and `ends` are also accepted.)
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<number>} [ends] Flat coordinate ends for internal use.
   */
  constructor(t, e, n) {
    if (super(), this.ends_ = [], this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, Array.isArray(t[0]))
      this.setCoordinates(
        /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
        t,
        e
      );
    else if (e !== void 0 && n)
      this.setFlatCoordinates(
        e,
        /** @type {Array<number>} */
        t
      ), this.ends_ = n;
    else {
      let r = this.getLayout();
      const s = (
        /** @type {Array<LineString>} */
        t
      ), o = [], a = [];
      for (let u = 0, l = s.length; u < l; ++u) {
        const c = s[u];
        u === 0 && (r = c.getLayout()), Xi(o, c.getFlatCoordinates()), a.push(o.length);
      }
      this.setFlatCoordinates(r, o), this.ends_ = a;
    }
  }
  /**
   * Append the passed linestring to the multilinestring.
   * @param {LineString} lineString LineString.
   * @api
   */
  appendLineString(t) {
    this.flatCoordinates ? Xi(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */
  clone() {
    const t = new xl(
      this.flatCoordinates.slice(),
      this.layout,
      this.ends_.slice()
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < ps(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Wl(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Hl(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      n,
      r
    ));
  }
  /**
   * Returns the coordinate at `m` using linear interpolation, or `null` if no
   * such coordinate exists.
   *
   * `extrapolate` controls extrapolation beyond the range of Ms in the
   * MultiLineString. If `extrapolate` is `true` then Ms less than the first
   * M will return the first coordinate and Ms greater than the last M will
   * return the last coordinate.
   *
   * `interpolate` controls interpolation between consecutive LineStrings
   * within the MultiLineString. If `interpolate` is `true` the coordinates
   * will be linearly interpolated between the last coordinate of one LineString
   * and the first coordinate of the next LineString.  If `interpolate` is
   * `false` then the function will return `null` for Ms falling between
   * LineStrings.
   *
   * @param {number} m M.
   * @param {boolean} [extrapolate] Extrapolate. Default is `false`.
   * @param {boolean} [interpolate] Interpolate. Default is `false`.
   * @return {import("../coordinate.js").Coordinate|null} Coordinate.
   * @api
   */
  getCoordinateAtM(t, e, n) {
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, n = n !== void 0 ? n : !1, mm(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      n
    ));
  }
  /**
   * Return the coordinates of the multilinestring.
   * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
   * @api
   */
  getCoordinates() {
    return Xo(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride
    );
  }
  /**
   * @return {Array<number>} Ends.
   */
  getEnds() {
    return this.ends_;
  }
  /**
   * Return the linestring at the specified index.
   * @param {number} index Index.
   * @return {LineString} LineString.
   * @api
   */
  getLineString(t) {
    return t < 0 || this.ends_.length <= t ? null : new uu(
      this.flatCoordinates.slice(
        t === 0 ? 0 : this.ends_[t - 1],
        this.ends_[t]
      ),
      this.layout
    );
  }
  /**
   * Return the linestrings of this multilinestring.
   * @return {Array<LineString>} LineStrings.
   * @api
   */
  getLineStrings() {
    const t = this.flatCoordinates, e = this.ends_, n = this.layout, r = [];
    let s = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const u = e[o], l = new uu(
        t.slice(s, u),
        n
      );
      r.push(l), s = u;
    }
    return r;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    const t = [], e = this.flatCoordinates;
    let n = 0;
    const r = this.ends_, s = this.stride;
    for (let o = 0, a = r.length; o < a; ++o) {
      const u = r[o], l = tg(
        e,
        n,
        u,
        s,
        0.5
      );
      Xi(t, l), n = u;
    }
    return t;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiLineString} Simplified MultiLineString.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    const e = [], n = [];
    return e.length = Zp(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      0,
      n
    ), new xl(e, "XY", n);
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "MultiLineString";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return r_(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the multilinestring.
   * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 2), this.flatCoordinates || (this.flatCoordinates = []);
    const n = jl(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const Sh = Fy;
let ky = class hg extends _s {
  /**
   * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  constructor(t, e) {
    super(), e && !Array.isArray(t[0]) ? this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ) : this.setCoordinates(
      /** @type {Array<import("../coordinate.js").Coordinate>} */
      t,
      e
    );
  }
  /**
   * Append the passed point to this multipoint.
   * @param {Point} point Point.
   * @api
   */
  appendPoint(t) {
    this.flatCoordinates ? Xi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */
  clone() {
    const t = new hg(
      this.flatCoordinates.slice(),
      this.layout
    );
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    if (r < ps(this.getExtent(), t, e))
      return r;
    const s = this.flatCoordinates, o = this.stride;
    for (let a = 0, u = s.length; a < u; a += o) {
      const l = Qr(
        t,
        e,
        s[a],
        s[a + 1]
      );
      if (l < r) {
        r = l;
        for (let c = 0; c < o; ++c)
          n[c] = s[a + c];
        n.length = o;
      }
    }
    return r;
  }
  /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return mr(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride
    );
  }
  /**
   * Return the point at the specified index.
   * @param {number} index Index.
   * @return {Point} Point.
   * @api
   */
  getPoint(t) {
    const e = this.flatCoordinates ? this.flatCoordinates.length / this.stride : 0;
    return t < 0 || e <= t ? null : new zs(
      this.flatCoordinates.slice(
        t * this.stride,
        (t + 1) * this.stride
      ),
      this.layout
    );
  }
  /**
   * Return the points of this multipoint.
   * @return {Array<Point>} Points.
   * @api
   */
  getPoints() {
    const t = this.flatCoordinates, e = this.layout, n = this.stride, r = [];
    for (let s = 0, o = t.length; s < o; s += n) {
      const a = new zs(t.slice(s, s + n), e);
      r.push(a);
    }
    return r;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "MultiPoint";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    const e = this.flatCoordinates, n = this.stride;
    for (let r = 0, s = e.length; r < s; r += n) {
      const o = e[r], a = e[r + 1];
      if (zl(t, o, a))
        return !0;
    }
    return !1;
  }
  /**
   * Set the coordinates of the multipoint.
   * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = wu(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const Gy = ky;
function By(i, t, e, n) {
  const r = [];
  let s = ts();
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = mf(
      i,
      t,
      u[0],
      n
    ), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), t = u[u.length - 1];
  }
  return r;
}
let zy = class Cl extends _s {
  /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` and `endss` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<Array<number>>} [endss] Array of ends for internal use with flat coordinates.
   */
  constructor(t, e, n) {
    if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !n && !Array.isArray(t[0])) {
      let r = this.getLayout();
      const s = (
        /** @type {Array<Polygon>} */
        t
      ), o = [], a = [];
      for (let u = 0, l = s.length; u < l; ++u) {
        const c = s[u];
        u === 0 && (r = c.getLayout());
        const h = o.length, f = c.getEnds();
        for (let g = 0, d = f.length; g < d; ++g)
          f[g] += h;
        Xi(o, c.getFlatCoordinates()), a.push(f);
      }
      e = r, t = o, n = a;
    }
    e !== void 0 && n ? (this.setFlatCoordinates(
      e,
      /** @type {Array<number>} */
      t
    ), this.endss_ = n) : this.setCoordinates(
      /** @type {Array<Array<Array<import("../coordinate.js").Coordinate>>>} */
      t,
      e
    );
  }
  /**
   * Append the passed polygon to this multipolygon.
   * @param {Polygon} polygon Polygon.
   * @api
   */
  appendPolygon(t) {
    let e;
    if (!this.flatCoordinates)
      this.flatCoordinates = t.getFlatCoordinates().slice(), e = t.getEnds().slice(), this.endss_.push();
    else {
      const n = this.flatCoordinates.length;
      Xi(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
      for (let r = 0, s = e.length; r < s; ++r)
        e[r] += n;
    }
    this.endss_.push(e), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPolygon} Clone.
   * @api
   */
  clone() {
    const t = this.endss_.length, e = new Array(t);
    for (let r = 0; r < t; ++r)
      e[r] = this.endss_[r].slice();
    const n = new Cl(
      this.flatCoordinates.slice(),
      this.layout,
      e
    );
    return n.applyProperties(this), n;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < ps(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Wp(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), qp(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      r
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    return n_(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t,
      e
    );
  }
  /**
   * Return the area of the multipolygon on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return Qp(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * Get the coordinate array for this geometry.  This array has the structure
   * of a GeoJSON coordinate array for multi-polygons.
   *
   * @param {boolean} [right] Orient coordinates according to the right-hand
   *     rule (counter-clockwise for exterior and clockwise for interior rings).
   *     If `false`, coordinates will be oriented according to the left-hand rule
   *     (clockwise for exterior and counter-clockwise for interior rings).
   *     By default, coordinate orientation will depend on how the geometry was
   *     constructed.
   * @return {Array<Array<Array<import("../coordinate.js").Coordinate>>>} Coordinates.
   * @api
   */
  getCoordinates(t) {
    let e;
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), Wc(
      e,
      0,
      this.endss_,
      this.stride,
      t
    )) : e = this.flatCoordinates, ul(
      e,
      0,
      this.endss_,
      this.stride
    );
  }
  /**
   * @return {Array<Array<number>>} Endss.
   */
  getEndss() {
    return this.endss_;
  }
  /**
   * @return {Array<number>} Flat interior points.
   */
  getFlatInteriorPoints() {
    if (this.flatInteriorPointsRevision_ != this.getRevision()) {
      const t = By(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = i_(
        this.getOrientedFlatCoordinates(),
        0,
        this.endss_,
        this.stride,
        t
      ), this.flatInteriorPointsRevision_ = this.getRevision();
    }
    return this.flatInteriorPoints_;
  }
  /**
   * Return the interior points as {@link module:ol/geom/MultiPoint~MultiPoint multipoint}.
   * @return {MultiPoint} Interior points as XYM coordinates, where M is
   * the length of the horizontal intersection that the point belongs to.
   * @api
   */
  getInteriorPoints() {
    return new Gy(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      u_(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Wc(
        this.orientedFlatCoordinates_,
        0,
        this.endss_,
        this.stride
      )), this.orientedRevision_ = this.getRevision();
    }
    return this.orientedFlatCoordinates_;
  }
  /**
   * @param {number} squaredTolerance Squared tolerance.
   * @return {MultiPolygon} Simplified MultiPolygon.
   * @protected
   */
  getSimplifiedGeometryInternal(t) {
    const e = [], n = [];
    return e.length = Jp(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new Cl(e, "XY", n);
  }
  /**
   * Return the polygon at the specified index.
   * @param {number} index Index.
   * @return {Polygon} Polygon.
   * @api
   */
  getPolygon(t) {
    if (t < 0 || this.endss_.length <= t)
      return null;
    let e;
    if (t === 0)
      e = 0;
    else {
      const s = this.endss_[t - 1];
      e = s[s.length - 1];
    }
    const n = this.endss_[t].slice(), r = n[n.length - 1];
    if (e !== 0)
      for (let s = 0, o = n.length; s < o; ++s)
        n[s] -= e;
    return new iu(
      this.flatCoordinates.slice(e, r),
      this.layout,
      n
    );
  }
  /**
   * Return the polygons of this multipolygon.
   * @return {Array<Polygon>} Polygons.
   * @api
   */
  getPolygons() {
    const t = this.layout, e = this.flatCoordinates, n = this.endss_, r = [];
    let s = 0;
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o].slice(), l = u[u.length - 1];
      if (s !== 0)
        for (let h = 0, f = u.length; h < f; ++h)
          u[h] -= s;
      const c = new iu(
        e.slice(s, l),
        t,
        u
      );
      r.push(c), s = l;
    }
    return r;
  }
  /**
   * Get the type of this geometry.
   * @return {import("./Geometry.js").Type} Geometry type.
   * @api
   */
  getType() {
    return "MultiPolygon";
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   * @api
   */
  intersectsExtent(t) {
    return o_(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      t
    );
  }
  /**
   * Set the coordinates of the multipolygon.
   * @param {!Array<Array<Array<import("../coordinate.js").Coordinate>>>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 3), this.flatCoordinates || (this.flatCoordinates = []);
    const n = jp(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.endss_
    );
    if (n.length === 0)
      this.flatCoordinates.length = 0;
    else {
      const r = n[n.length - 1];
      this.flatCoordinates.length = r.length === 0 ? 0 : r[r.length - 1];
    }
    this.changed();
  }
};
const wh = zy;
var Ge = 63710088e-1, fg = {
  centimeters: Ge * 100,
  centimetres: Ge * 100,
  degrees: Ge / 111325,
  feet: Ge * 3.28084,
  inches: Ge * 39.37,
  kilometers: Ge / 1e3,
  kilometres: Ge / 1e3,
  meters: Ge,
  metres: Ge,
  miles: Ge / 1609.344,
  millimeters: Ge * 1e3,
  millimetres: Ge * 1e3,
  nauticalmiles: Ge / 1852,
  radians: 1,
  yards: Ge * 1.0936
};
function Lu(i, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = i, n;
}
function Vy(i, t, e) {
  if (e === void 0 && (e = {}), !i)
    throw new Error("coordinates is required");
  if (!Array.isArray(i))
    throw new Error("coordinates must be an Array");
  if (i.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Rh(i[0]) || !Rh(i[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: i
  };
  return Lu(n, t, e);
}
function Xy(i, t, e) {
  e === void 0 && (e = {});
  for (var n = 0, r = i; n < r.length; n++) {
    var s = r[n];
    if (s.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var o = 0; o < s[s.length - 1].length; o++)
      if (s[s.length - 1][o] !== s[0][o])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: i
  };
  return Lu(a, t, e);
}
function Il(i, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = i, e;
}
function Yy(i, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: i
  };
  return Lu(n, t, e);
}
function Uy(i, t) {
  t === void 0 && (t = "kilometers");
  var e = fg[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return i * e;
}
function Wy(i, t) {
  t === void 0 && (t = "kilometers");
  var e = fg[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return i / e;
}
function Rh(i) {
  return !isNaN(i) && i !== null && !Array.isArray(i);
}
function gg(i, t, e) {
  if (i !== null)
    for (var n, r, s, o, a, u, l, c = 0, h = 0, f, g = i.type, d = g === "FeatureCollection", _ = g === "Feature", p = d ? i.features.length : 1, m = 0; m < p; m++) {
      l = d ? i.features[m].geometry : _ ? i.geometry : i, f = l ? l.type === "GeometryCollection" : !1, a = f ? l.geometries.length : 1;
      for (var y = 0; y < a; y++) {
        var v = 0, C = 0;
        if (o = f ? l.geometries[y] : l, o !== null) {
          u = o.coordinates;
          var E = o.type;
          switch (c = e && (E === "Polygon" || E === "MultiPolygon") ? 1 : 0, E) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                h,
                m,
                v,
                C
              ) === !1)
                return !1;
              h++, v++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < u.length; n++) {
                if (t(
                  u[n],
                  h,
                  m,
                  v,
                  C
                ) === !1)
                  return !1;
                h++, E === "MultiPoint" && v++;
              }
              E === "LineString" && v++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (r = 0; r < u[n].length - c; r++) {
                  if (t(
                    u[n][r],
                    h,
                    m,
                    v,
                    C
                  ) === !1)
                    return !1;
                  h++;
                }
                E === "MultiLineString" && v++, E === "Polygon" && C++;
              }
              E === "Polygon" && v++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (C = 0, r = 0; r < u[n].length; r++) {
                  for (s = 0; s < u[n][r].length - c; s++) {
                    if (t(
                      u[n][r][s],
                      h,
                      m,
                      v,
                      C
                    ) === !1)
                      return !1;
                    h++;
                  }
                  C++;
                }
                v++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < o.geometries.length; n++)
                if (gg(o.geometries[n], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Nh(i, t) {
  if (i.type === "Feature")
    t(i, 0);
  else if (i.type === "FeatureCollection")
    for (var e = 0; e < i.features.length && t(i.features[e], e) !== !1; e++)
      ;
}
function dg(i, t) {
  var e, n, r, s, o, a, u, l, c, h, f = 0, g = i.type === "FeatureCollection", d = i.type === "Feature", _ = g ? i.features.length : 1;
  for (e = 0; e < _; e++) {
    for (a = g ? i.features[e].geometry : d ? i.geometry : i, l = g ? i.features[e].properties : d ? i.properties : {}, c = g ? i.features[e].bbox : d ? i.bbox : void 0, h = g ? i.features[e].id : d ? i.id : void 0, u = a ? a.type === "GeometryCollection" : !1, o = u ? a.geometries.length : 1, r = 0; r < o; r++) {
      if (s = u ? a.geometries[r] : a, s === null) {
        if (t(
          null,
          f,
          l,
          c,
          h
        ) === !1)
          return !1;
        continue;
      }
      switch (s.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (t(
            s,
            f,
            l,
            c,
            h
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (n = 0; n < s.geometries.length; n++)
            if (t(
              s.geometries[n],
              f,
              l,
              c,
              h
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    f++;
  }
}
function Sl(i) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return gg(i, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
Sl.default = Sl;
function qy(i, t) {
  t === void 0 && (t = {});
  var e = Sl(i), n = (e[0] + e[2]) / 2, r = (e[1] + e[3]) / 2;
  return Vy([n, r], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, r = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
    var s = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : n;
    for (s = s < 0 ? Math.max(n + arguments[2], 0) : Math.min(s, n); r < s; )
      e[r] = t, ++r;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(i) {
  return typeof i == "number" && isFinite(i);
};
Number.isInteger = Number.isInteger || function(i) {
  return typeof i == "number" && isFinite(i) && Math.floor(i) === i;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(i) {
  return i !== i;
};
Math.trunc = Math.trunc || function(i) {
  return i < 0 ? Math.ceil(i) : Math.floor(i);
};
var ns = function() {
};
ns.prototype.interfaces_ = function() {
  return [];
};
ns.prototype.getClass = function() {
  return ns;
};
ns.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var vt = function(i) {
  function t(e) {
    i.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), H = function() {
}, pg = { MAX_VALUE: { configurable: !0 } };
H.isNaN = function(t) {
  return Number.isNaN(t);
};
H.doubleToLongBits = function(t) {
  return t;
};
H.longBitsToDouble = function(t) {
  return t;
};
H.isInfinite = function(t) {
  return !Number.isFinite(t);
};
pg.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(H, pg);
var sn = function() {
}, bu = function() {
}, qs = function() {
};
function on() {
}
var x = function i() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = i.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = i.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, Es = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
x.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case x.X:
      this.x = e;
      break;
    case x.Y:
      this.y = e;
      break;
    case x.Z:
      this.z = e;
      break;
    default:
      throw new vt("Invalid ordinate index: " + t);
  }
};
x.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return !(!ns.equalsWithTolerance(this.x, e.x, n) || !ns.equalsWithTolerance(this.y, e.y, n));
  }
};
x.prototype.getOrdinate = function(t) {
  switch (t) {
    case x.X:
      return this.x;
    case x.Y:
      return this.y;
    case x.Z:
      return this.z;
  }
  throw new vt("Invalid ordinate index: " + t);
};
x.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || H.isNaN(this.z)) && H.isNaN(t.z);
};
x.prototype.equals = function(t) {
  return t instanceof x ? this.equals2D(t) : !1;
};
x.prototype.equalInZ = function(t, e) {
  return ns.equalsWithTolerance(this.z, t.z, e);
};
x.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
x.prototype.clone = function() {
};
x.prototype.copy = function() {
  return new x(this);
};
x.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
x.prototype.distance3D = function(t) {
  var e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
  return Math.sqrt(e * e + n * n + r * r);
};
x.prototype.distance = function(t) {
  var e = this.x - t.x, n = this.y - t.y;
  return Math.sqrt(e * e + n * n);
};
x.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + x.hashCode(this.x), t = 37 * t + x.hashCode(this.y), t;
};
x.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
x.prototype.interfaces_ = function() {
  return [sn, bu, on];
};
x.prototype.getClass = function() {
  return x;
};
x.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = H.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
Es.DimensionalComparator.get = function() {
  return Vi;
};
Es.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
Es.NULL_ORDINATE.get = function() {
  return H.NaN;
};
Es.X.get = function() {
  return 0;
};
Es.Y.get = function() {
  return 1;
};
Es.Z.get = function() {
  return 2;
};
Object.defineProperties(x, Es);
var Vi = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new vt("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
Vi.prototype.compare = function(t, e) {
  var n = t, r = e, s = Vi.compare(n.x, r.x);
  if (s !== 0)
    return s;
  var o = Vi.compare(n.y, r.y);
  if (o !== 0)
    return o;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = Vi.compare(n.z, r.z);
  return a;
};
Vi.prototype.interfaces_ = function() {
  return [qs];
};
Vi.prototype.getClass = function() {
  return Vi;
};
Vi.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : H.isNaN(t) ? H.isNaN(e) ? 0 : -1 : H.isNaN(e) ? 1 : 0;
};
var Hs = function() {
};
Hs.prototype.create = function() {
};
Hs.prototype.interfaces_ = function() {
  return [];
};
Hs.prototype.getClass = function() {
  return Hs;
};
var I = function() {
}, va = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
I.prototype.interfaces_ = function() {
  return [];
};
I.prototype.getClass = function() {
  return I;
};
I.toLocationSymbol = function(t) {
  switch (t) {
    case I.EXTERIOR:
      return "e";
    case I.BOUNDARY:
      return "b";
    case I.INTERIOR:
      return "i";
    case I.NONE:
      return "-";
  }
  throw new vt("Unknown location value: " + t);
};
va.INTERIOR.get = function() {
  return 0;
};
va.BOUNDARY.get = function() {
  return 1;
};
va.EXTERIOR.get = function() {
  return 2;
};
va.NONE.get = function() {
  return -1;
};
Object.defineProperties(I, va);
var q = function(i, t) {
  return i.interfaces_ && i.interfaces_().indexOf(t) > -1;
}, Xe = function() {
}, _g = { LOG_10: { configurable: !0 } };
Xe.prototype.interfaces_ = function() {
  return [];
};
Xe.prototype.getClass = function() {
  return Xe;
};
Xe.log10 = function(t) {
  var e = Math.log(t);
  return H.isInfinite(e) || H.isNaN(e) ? e : e / Xe.LOG_10;
};
Xe.min = function(t, e, n, r) {
  var s = t;
  return e < s && (s = e), n < s && (s = n), r < s && (s = r), s;
};
Xe.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    return r < s ? s : r > o ? o : r;
  }
};
Xe.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
Xe.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = t;
    return e > r && (r = e), n > r && (r = n), r;
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = s;
    return o > l && (l = o), a > l && (l = a), u > l && (l = u), l;
  }
};
Xe.average = function(t, e) {
  return (t + e) / 2;
};
_g.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(Xe, _g);
var Hn = function(t) {
  this.str = t;
};
Hn.prototype.append = function(t) {
  this.str += t;
};
Hn.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Hn.prototype.toString = function(t) {
  return this.str;
};
var kn = function(t) {
  this.value = t;
};
kn.prototype.intValue = function() {
  return this.value;
};
kn.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
kn.isNaN = function(t) {
  return Number.isNaN(t);
};
var ta = function() {
};
ta.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
ta.toUpperCase = function(t) {
  return t.toUpperCase();
};
var S = function i() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof i) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var n = arguments[0];
      i.call(this, i.parse(n));
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    this.init(r, s);
  }
}, xn = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
S.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
S.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), r = S.magnitude(n._hi), s = S.TEN.pow(r);
  n = n.divide(s), n.gt(S.TEN) ? (n = n.divide(S.TEN), r += 1) : n.lt(S.ONE) && (n = n.multiply(S.TEN), r -= 1);
  for (var o = r + 1, a = new Hn(), u = S.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === o && a.append(".");
    var c = Math.trunc(n._hi);
    if (c < 0)
      break;
    var h = !1, f = 0;
    c > 9 ? (h = !0, f = "9") : f = "0" + c, a.append(f), n = n.subtract(S.valueOf(c)).multiply(S.TEN), h && n.selfAdd(S.TEN);
    var g = !0, d = S.magnitude(n._hi);
    if (d < 0 && Math.abs(d) >= u - l && (g = !1), !g)
      break;
  }
  return e[0] = r, a.toString();
};
S.prototype.sqr = function() {
  return this.multiply(this);
};
S.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
S.prototype.subtract = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
S.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
S.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
S.prototype.selfSubtract = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
S.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
S.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
S.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof S) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null, h = null, f = null;
    return l = this._hi / n, c = S.SPLIT * l, s = c - l, f = S.SPLIT * n, s = c - s, o = l - s, a = f - n, h = l * n, a = f - a, u = n - a, f = s * a - h + s * u + o * a + o * u, c = (this._hi - h - f + this._lo - l * r) / n, f = l + c, this._hi = f, this._lo = l - f + c, this;
  }
};
S.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
S.prototype.divide = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0], e = null, n = null, r = null, s = null, o = null, a = null, u = null, l = null;
    o = this._hi / t._hi, a = S.SPLIT * o, e = a - o, l = S.SPLIT * t._hi, e = a - e, n = o - e, r = l - t._hi, u = o * t._hi, r = l - r, s = t._hi - r, l = e * r - u + e * s + n * r + n * s, a = (this._hi - u - l + this._lo - o * t._lo) / t._hi, l = o + a;
    var c = l, h = o - l + a;
    return new S(c, h);
  } else if (typeof arguments[0] == "number") {
    var f = arguments[0];
    return H.isNaN(f) ? S.createNaN() : S.copy(this).selfDivide(f, 0);
  }
};
S.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
S.prototype.pow = function(t) {
  if (t === 0)
    return S.valueOf(1);
  var e = new S(this), n = S.valueOf(1), r = Math.abs(t);
  if (r > 1)
    for (; r > 0; )
      r % 2 === 1 && n.selfMultiply(e), r /= 2, r > 0 && (e = e.sqr());
  else
    n = e;
  return t < 0 ? n.reciprocal() : n;
};
S.prototype.ceil = function() {
  if (this.isNaN())
    return S.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new S(t, e);
};
S.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
S.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
S.prototype.setValue = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
S.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
S.prototype.sqrt = function() {
  if (this.isZero())
    return S.valueOf(0);
  if (this.isNegative())
    return S.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = S.valueOf(e), r = this.subtract(n.sqr()), s = r._hi * (t * 0.5);
  return n.add(s);
};
S.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof S) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], n = null, r = null, s = null, o = null, a = null, u = null;
      return s = this._hi + e, a = s - this._hi, o = s - a, o = e - a + (this._hi - o), u = o + this._lo, n = s + u, r = u + (s - n), this._hi = n + r, this._lo = r + (n - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], h = null, f = null, g = null, d = null, _ = null, p = null, m = null, y = null;
    _ = this._hi + l, g = this._lo + c, m = _ - this._hi, y = g - this._lo, p = _ - m, d = g - y, p = l - m + (this._hi - p), d = c - y + (this._lo - d), m = p + g, h = _ + m, f = m + (_ - h), m = d + f;
    var v = h + m, C = m + (h - v);
    return this._hi = v, this._lo = C, this;
  }
};
S.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof S) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null;
    l = S.SPLIT * this._hi, s = l - this._hi, c = S.SPLIT * n, s = l - s, o = this._hi - s, a = c - n, l = this._hi * n, a = c - a, u = n - a, c = s * a - l + s * u + o * a + o * u + (this._hi * r + this._lo * n);
    var h = l + c;
    s = l - h;
    var f = c + s;
    return this._hi = h, this._lo = f, this;
  }
};
S.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
S.prototype.floor = function() {
  if (this.isNaN())
    return S.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new S(t, e);
};
S.prototype.negate = function() {
  return this.isNaN() ? this : new S(-this._hi, -this._lo);
};
S.prototype.clone = function() {
};
S.prototype.multiply = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0];
    return t.isNaN() ? S.createNaN() : S.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return H.isNaN(e) ? S.createNaN() : S.copy(this).selfMultiply(e, 0);
  }
};
S.prototype.isNaN = function() {
  return H.isNaN(this._hi);
};
S.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
S.prototype.toString = function() {
  var t = S.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
S.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), r = e[0] + 1, s = n;
  if (n.charAt(0) === ".")
    s = "0" + n;
  else if (r < 0)
    s = "0." + S.stringOfChar("0", -r) + n;
  else if (n.indexOf(".") === -1) {
    var o = r - n.length, a = S.stringOfChar("0", o);
    s = n + a + ".0";
  }
  return this.isNegative() ? "-" + s : s;
};
S.prototype.reciprocal = function() {
  var t = null, e = null, n = null, r = null, s = null, o = null, a = null, u = null;
  s = 1 / this._hi, o = S.SPLIT * s, t = o - s, u = S.SPLIT * this._hi, t = o - t, e = s - t, n = u - this._hi, a = s * this._hi, n = u - n, r = this._hi - n, u = t * n - a + t * r + e * n + e * r, o = (1 - a - u - s * this._lo) / this._hi;
  var l = s + o, c = s - l + o;
  return new S(l, c);
};
S.prototype.toSciNotation = function() {
  if (this.isZero())
    return S.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), r = S.SCI_NOT_EXPONENT_CHAR + e[0];
  if (n.charAt(0) === "0")
    throw new Error("Found leading zero: " + n);
  var s = "";
  n.length > 1 && (s = n.substring(1));
  var o = n.charAt(0) + "." + s;
  return this.isNegative() ? "-" + o + r : o + r;
};
S.prototype.abs = function() {
  return this.isNaN() ? S.NaN : this.isNegative() ? this.negate() : new S(this);
};
S.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
S.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
S.prototype.add = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0];
    return S.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return S.copy(this).selfAdd(e);
  }
};
S.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof S) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this._hi = n, this._lo = r;
  }
};
S.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
S.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
S.prototype.trunc = function() {
  return this.isNaN() ? S.NaN : this.isPositive() ? this.floor() : this.ceil();
};
S.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
S.prototype.interfaces_ = function() {
  return [on, sn, bu];
};
S.prototype.getClass = function() {
  return S;
};
S.sqr = function(t) {
  return S.valueOf(t).selfMultiply(t);
};
S.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return S.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new S(e);
  }
};
S.sqrt = function(t) {
  return S.valueOf(t).sqrt();
};
S.parse = function(t) {
  for (var e = 0, n = t.length; ta.isWhitespace(t.charAt(e)); )
    e++;
  var r = !1;
  if (e < n) {
    var s = t.charAt(e);
    (s === "-" || s === "+") && (e++, s === "-" && (r = !0));
  }
  for (var o = new S(), a = 0, u = 0, l = 0; !(e >= n); ) {
    var c = t.charAt(e);
    if (e++, ta.isDigit(c)) {
      var h = c - "0";
      o.selfMultiply(S.TEN), o.selfAdd(h), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var f = t.substring(e);
      try {
        l = kn.parseInt(f);
      } catch (m) {
        throw m instanceof Error ? new Error("Invalid exponent " + f + " in string " + t) : m;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var g = o, d = a - u - l;
  if (d === 0)
    g = o;
  else if (d > 0) {
    var _ = S.TEN.pow(d);
    g = o.divide(_);
  } else if (d < 0) {
    var p = S.TEN.pow(-d);
    g = o.multiply(p);
  }
  return r ? g.negate() : g;
};
S.createNaN = function() {
  return new S(H.NaN, H.NaN);
};
S.copy = function(t) {
  return new S(t);
};
S.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), r = Math.trunc(Math.floor(n)), s = Math.pow(10, r);
  return s * 10 <= e && (r += 1), r;
};
S.stringOfChar = function(t, e) {
  for (var n = new Hn(), r = 0; r < e; r++)
    n.append(t);
  return n.toString();
};
xn.PI.get = function() {
  return new S(3.141592653589793, 12246467991473532e-32);
};
xn.TWO_PI.get = function() {
  return new S(6.283185307179586, 24492935982947064e-32);
};
xn.PI_2.get = function() {
  return new S(1.5707963267948966, 6123233995736766e-32);
};
xn.E.get = function() {
  return new S(2.718281828459045, 14456468917292502e-32);
};
xn.NaN.get = function() {
  return new S(H.NaN, H.NaN);
};
xn.EPS.get = function() {
  return 123259516440783e-46;
};
xn.SPLIT.get = function() {
  return 134217729;
};
xn.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
xn.TEN.get = function() {
  return S.valueOf(10);
};
xn.ONE.get = function() {
  return S.valueOf(1);
};
xn.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
xn.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(S, xn);
var Ne = function() {
}, mg = { DP_SAFE_EPSILON: { configurable: !0 } };
Ne.prototype.interfaces_ = function() {
  return [];
};
Ne.prototype.getClass = function() {
  return Ne;
};
Ne.orientationIndex = function(t, e, n) {
  var r = Ne.orientationIndexFilter(t, e, n);
  if (r <= 1)
    return r;
  var s = S.valueOf(e.x).selfAdd(-t.x), o = S.valueOf(e.y).selfAdd(-t.y), a = S.valueOf(n.x).selfAdd(-e.x), u = S.valueOf(n.y).selfAdd(-e.y);
  return s.selfMultiply(u).selfSubtract(o.selfMultiply(a)).signum();
};
Ne.signOfDet2x2 = function(t, e, n, r) {
  var s = t.multiply(r).selfSubtract(e.multiply(n));
  return s.signum();
};
Ne.intersection = function(t, e, n, r) {
  var s = S.valueOf(r.y).selfSubtract(n.y).selfMultiply(S.valueOf(e.x).selfSubtract(t.x)), o = S.valueOf(r.x).selfSubtract(n.x).selfMultiply(S.valueOf(e.y).selfSubtract(t.y)), a = s.subtract(o), u = S.valueOf(r.x).selfSubtract(n.x).selfMultiply(S.valueOf(t.y).selfSubtract(n.y)), l = S.valueOf(r.y).selfSubtract(n.y).selfMultiply(S.valueOf(t.x).selfSubtract(n.x)), c = u.subtract(l), h = c.selfDivide(a).doubleValue(), f = S.valueOf(t.x).selfAdd(S.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(), g = S.valueOf(e.x).selfSubtract(t.x).selfMultiply(S.valueOf(t.y).selfSubtract(n.y)), d = S.valueOf(e.y).selfSubtract(t.y).selfMultiply(S.valueOf(t.x).selfSubtract(n.x)), _ = g.subtract(d), p = _.selfDivide(a).doubleValue(), m = S.valueOf(n.y).selfAdd(S.valueOf(r.y).selfSubtract(n.y).selfMultiply(p)).doubleValue();
  return new x(f, m);
};
Ne.orientationIndexFilter = function(t, e, n) {
  var r = null, s = (t.x - n.x) * (e.y - n.y), o = (t.y - n.y) * (e.x - n.x), a = s - o;
  if (s > 0) {
    if (o <= 0)
      return Ne.signum(a);
    r = s + o;
  } else if (s < 0) {
    if (o >= 0)
      return Ne.signum(a);
    r = -s - o;
  } else
    return Ne.signum(a);
  var u = Ne.DP_SAFE_EPSILON * r;
  return a >= u || -a >= u ? Ne.signum(a) : 2;
};
Ne.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
mg.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(Ne, mg);
var et = function() {
}, Ea = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
Ea.X.get = function() {
  return 0;
};
Ea.Y.get = function() {
  return 1;
};
Ea.Z.get = function() {
  return 2;
};
Ea.M.get = function() {
  return 3;
};
et.prototype.setOrdinate = function(t, e, n) {
};
et.prototype.size = function() {
};
et.prototype.getOrdinate = function(t, e) {
};
et.prototype.getCoordinate = function() {
};
et.prototype.getCoordinateCopy = function(t) {
};
et.prototype.getDimension = function() {
};
et.prototype.getX = function(t) {
};
et.prototype.clone = function() {
};
et.prototype.expandEnvelope = function(t) {
};
et.prototype.copy = function() {
};
et.prototype.getY = function(t) {
};
et.prototype.toCoordinateArray = function() {
};
et.prototype.interfaces_ = function() {
  return [bu];
};
et.prototype.getClass = function() {
  return et;
};
Object.defineProperties(et, Ea);
var yg = function() {
}, po = function(i) {
  function t() {
    i.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(yg), ne = function() {
};
ne.arraycopy = function(t, e, n, r, s) {
  for (var o = 0, a = e; a < e + s; a++)
    n[r + o] = t[a], o++;
};
ne.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var hn = function i() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], n = arguments[1];
      this.x = e, this.y = n, this.w = 1;
    } else if (arguments[0] instanceof i && arguments[1] instanceof i) {
      var r = arguments[0], s = arguments[1];
      this.x = r.y * s.w - s.y * r.w, this.y = s.x * r.w - r.x * s.w, this.w = r.x * s.y - s.x * r.y;
    } else if (arguments[0] instanceof x && arguments[1] instanceof x) {
      var o = arguments[0], a = arguments[1];
      this.x = o.y - a.y, this.y = a.x - o.x, this.w = o.x * a.y - a.x * o.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var h = arguments[0], f = arguments[1], g = arguments[2], d = arguments[3], _ = h.y - f.y, p = f.x - h.x, m = h.x * f.y - f.x * h.y, y = g.y - d.y, v = d.x - g.x, C = g.x * d.y - d.x * g.y;
    this.x = p * C - v * m, this.y = y * m - _ * C, this.w = _ * v - y * p;
  }
};
hn.prototype.getY = function() {
  var t = this.y / this.w;
  if (H.isNaN(t) || H.isInfinite(t))
    throw new po();
  return t;
};
hn.prototype.getX = function() {
  var t = this.x / this.w;
  if (H.isNaN(t) || H.isInfinite(t))
    throw new po();
  return t;
};
hn.prototype.getCoordinate = function() {
  var t = new x();
  return t.x = this.getX(), t.y = this.getY(), t;
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
hn.intersection = function(t, e, n, r) {
  var s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - r.y, l = r.x - n.x, c = n.x * r.y - r.x * n.y, h = o * c - l * a, f = u * a - s * c, g = s * l - u * o, d = h / g, _ = f / g;
  if (H.isNaN(d) || H.isInfinite(d) || H.isNaN(_) || H.isInfinite(_))
    throw new po();
  return new x(d, _);
};
var Y = function i() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof x) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof i) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this.init(n.x, r.x, n.y, r.y);
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3];
    this.init(s, o, a, u);
  }
}, vg = { serialVersionUID: { configurable: !0 } };
Y.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
Y.prototype.equals = function(t) {
  if (!(t instanceof Y))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
Y.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new Y();
  var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny, r = this._maxx < t._maxx ? this._maxx : t._maxx, s = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new Y(e, r, n, s);
};
Y.prototype.isNull = function() {
  return this._maxx < this._minx;
};
Y.prototype.getMaxX = function() {
  return this._maxx;
};
Y.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof x) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof Y) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.isNull() ? !1 : n >= this._minx && n <= this._maxx && r >= this._miny && r <= this._maxy;
  }
};
Y.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Y) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof x) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.isNull() ? !1 : !(n > this._maxx || n < this._minx || r > this._maxy || r < this._miny);
  }
};
Y.prototype.getMinY = function() {
  return this._miny;
};
Y.prototype.getMinX = function() {
  return this._minx;
};
Y.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof x) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof Y) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this.isNull() ? (this._minx = n, this._maxx = n, this._miny = r, this._maxy = r) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), r < this._miny && (this._miny = r), r > this._maxy && (this._maxy = r));
  }
};
Y.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
Y.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
Y.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
Y.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
Y.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
Y.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
Y.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
Y.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
Y.prototype.expandBy = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.expandBy(t, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this.isNull())
      return null;
    this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
  }
};
Y.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Y) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof x) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.covers(n, r);
  }
};
Y.prototype.centre = function() {
  return this.isNull() ? null : new x((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
Y.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof x) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof Y) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this.init(n.x, r.x, n.y, r.y);
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3];
    s < o ? (this._minx = s, this._maxx = o) : (this._minx = o, this._maxx = s), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
Y.prototype.getMaxY = function() {
  return this._maxy;
};
Y.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var n = 0;
  return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
};
Y.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + x.hashCode(this._minx), t = 37 * t + x.hashCode(this._maxx), t = 37 * t + x.hashCode(this._miny), t = 37 * t + x.hashCode(this._maxy), t;
};
Y.prototype.interfaces_ = function() {
  return [sn, on];
};
Y.prototype.getClass = function() {
  return Y;
};
Y.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = Math.min(o.x, a.x), l = Math.max(o.x, a.x), c = Math.min(r.x, s.x), h = Math.max(r.x, s.x);
    return !(c > l || h < u || (u = Math.min(o.y, a.y), l = Math.max(o.y, a.y), c = Math.min(r.y, s.y), h = Math.max(r.y, s.y), c > l) || h < u);
  }
};
vg.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(Y, vg);
var Nn = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, Pu = function(t) {
  this.geometryFactory = t || new Q();
};
Pu.prototype.read = function(t) {
  var e, n, r;
  t = t.replace(/[\n\r]/g, " ");
  var s = Nn.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (s = Nn.emptyTypeStr.exec(t), s[2] = void 0), s && (n = s[1].toLowerCase(), r = s[2], Gs[n] && (e = Gs[n].apply(this, [r]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
Pu.prototype.write = function(t) {
  return this.extractGeometry(t);
};
Pu.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!vi[e])
    return null;
  var n = e.toUpperCase(), r;
  return t.isEmpty() ? r = n + " EMPTY" : r = n + "(" + vi[e].apply(this, [t]) + ")", r;
};
var vi = {
  coordinate: function(t) {
    return t.x + " " + t.y;
  },
  /**
   * Return a space delimited string of point coordinates.
   *
   * @param {Point}
   *          point
   * @return {String} A string of coordinates representing the point.
   */
  point: function(t) {
    return vi.coordinate.call(this, t._coordinates._coordinates[0]);
  },
  /**
   * Return a comma delimited string of point coordinates from a multipoint.
   *
   * @param {MultiPoint}
   *          multipoint
   * @return {String} A string of point coordinate strings representing the
   *         multipoint.
   */
  multipoint: function(t) {
    for (var e = this, n = [], r = 0, s = t._geometries.length; r < s; ++r)
      n.push("(" + vi.point.apply(e, [t._geometries[r]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, n = [], r = 0, s = t._points._coordinates.length; r < s; ++r)
      n.push(vi.coordinate.apply(e, [t._points._coordinates[r]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], r = 0, s = t._points._coordinates.length; r < s; ++r)
      n.push(vi.coordinate.apply(e, [t._points._coordinates[r]]));
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linestring strings from a
   * multilinestring.
   *
   * @param {MultiLineString} multilinestring
   * @return {String} A string of of linestring strings representing the multilinestring.
   */
  multilinestring: function(t) {
    for (var e = this, n = [], r = 0, s = t._geometries.length; r < s; ++r)
      n.push("(" + vi.linestring.apply(e, [t._geometries[r]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of linear ring arrays from a polygon.
   *
   * @param {Polygon} polygon
   * @return {String} An array of linear ring arrays representing the polygon.
   */
  polygon: function(t) {
    var e = this, n = [];
    n.push("(" + vi.linestring.apply(this, [t._shell]) + ")");
    for (var r = 0, s = t._holes.length; r < s; ++r)
      n.push("(" + vi.linestring.apply(e, [t._holes[r]]) + ")");
    return n.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, n = [], r = 0, s = t._geometries.length; r < s; ++r)
      n.push("(" + vi.polygon.apply(e, [t._geometries[r]]) + ")");
    return n.join(",");
  },
  /**
   * Return the WKT portion between 'GEOMETRYCOLLECTION(' and ')' for an
   * geometrycollection.
   *
   * @param {GeometryCollection} collection
   * @return {String} internal WKT representation of the collection.
   */
  geometrycollection: function(t) {
    for (var e = this, n = [], r = 0, s = t._geometries.length; r < s; ++r)
      n.push(e.extractGeometry(t._geometries[r]));
    return n.join(",");
  }
}, Gs = {
  /**
   * Return point geometry given a point WKT fragment.
   *
   * @param {String} str A WKT fragment representing the point.
   * @return {Point} A point geometry.
   * @private
   */
  point: function(t) {
    if (t === void 0)
      return this.geometryFactory.createPoint();
    var e = t.trim().split(Nn.spaces);
    return this.geometryFactory.createPoint(new x(
      Number.parseFloat(e[0]),
      Number.parseFloat(e[1])
    ));
  },
  /**
   * Return a multipoint geometry given a multipoint WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipoint.
   * @return {Point} A multipoint feature.
   * @private
   */
  multipoint: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPoint();
    for (var n, r = t.trim().split(","), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(Nn.trimParens, "$1"), s.push(Gs.point.apply(e, [n]));
    return this.geometryFactory.createMultiPoint(s);
  },
  /**
   * Return a linestring geometry given a linestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linestring.
   * @return {LineString} A linestring geometry.
   * @private
   */
  linestring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLineString();
    for (var e = t.trim().split(","), n = [], r, s = 0, o = e.length; s < o; ++s)
      r = e[s].trim().split(Nn.spaces), n.push(new x(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
    return this.geometryFactory.createLineString(n);
  },
  /**
   * Return a linearring geometry given a linearring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the linearring.
   * @return {LinearRing} A linearring geometry.
   * @private
   */
  linearring: function(t) {
    if (t === void 0)
      return this.geometryFactory.createLinearRing();
    for (var e = t.trim().split(","), n = [], r, s = 0, o = e.length; s < o; ++s)
      r = e[s].trim().split(Nn.spaces), n.push(new x(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
    return this.geometryFactory.createLinearRing(n);
  },
  /**
   * Return a multilinestring geometry given a multilinestring WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multilinestring.
   * @return {MultiLineString} A multilinestring geometry.
   * @private
   */
  multilinestring: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiLineString();
    for (var n, r = t.trim().split(Nn.parenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(Nn.trimParens, "$1"), s.push(Gs.linestring.apply(e, [n]));
    return this.geometryFactory.createMultiLineString(s);
  },
  /**
   * Return a polygon geometry given a polygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the polygon.
   * @return {Polygon} A polygon geometry.
   * @private
   */
  polygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createPolygon();
    for (var n, r, s, o = t.trim().split(Nn.parenComma), a, u = [], l = 0, c = o.length; l < c; ++l)
      n = o[l].replace(Nn.trimParens, "$1"), r = Gs.linestring.apply(e, [n]), s = e.geometryFactory.createLinearRing(r._points), l === 0 ? a = s : u.push(s);
    return this.geometryFactory.createPolygon(a, u);
  },
  /**
   * Return a multipolygon geometry given a multipolygon WKT fragment.
   *
   * @param {String} str A WKT fragment representing the multipolygon.
   * @return {MultiPolygon} A multipolygon geometry.
   * @private
   */
  multipolygon: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createMultiPolygon();
    for (var n, r = t.trim().split(Nn.doubleParenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(Nn.trimParens, "$1"), s.push(Gs.polygon.apply(e, [n]));
    return this.geometryFactory.createMultiPolygon(s);
  },
  /**
   * Return a geometrycollection given a geometrycollection WKT fragment.
   *
   * @param {String} str A WKT fragment representing the geometrycollection.
   * @return {GeometryCollection}
   * @private
   */
  geometrycollection: function(t) {
    var e = this;
    if (t === void 0)
      return this.geometryFactory.createGeometryCollection();
    t = t.replace(/,\s*([A-Za-z])/g, "|$1");
    for (var n = t.trim().split("|"), r = [], s = 0, o = n.length; s < o; ++s)
      r.push(e.read(n[s]));
    return this.geometryFactory.createGeometryCollection(r);
  }
}, gn = function(t) {
  this.parser = new Pu(t);
};
gn.prototype.write = function(t) {
  return this.parser.write(t);
};
gn.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Li = function(i) {
  function t(e) {
    i.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), hu = function(i) {
  function t() {
    if (i.call(this), arguments.length === 0)
      i.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      i.call(this, e);
    }
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Li), J = function() {
};
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    J.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new hu("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
J.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], J.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new hu() : new hu(e);
};
J.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], J.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new hu("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var xt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new x(), this._intPt[1] = new x(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, xs = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
xt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
xt.prototype.getTopologySummary = function() {
  var t = new Hn();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
xt.prototype.computeIntersection = function(t, e, n, r) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = r, this._result = this.computeIntersect(t, e, n, r);
};
xt.prototype.getIntersectionNum = function() {
  return this._result;
};
xt.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
    e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
xt.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
xt.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
xt.prototype.isInteriorIntersection = function() {
  var t = this;
  if (arguments.length === 0)
    return !!(this.isInteriorIntersection(0) || this.isInteriorIntersection(1));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._result; n++)
      if (!(t._intPt[n].equals2D(t._inputLines[e][0]) || t._intPt[n].equals2D(t._inputLines[e][1])))
        return !0;
    return !1;
  }
};
xt.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
xt.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
xt.prototype.hasIntersection = function() {
  return this._result !== xt.NO_INTERSECTION;
};
xt.prototype.getEdgeDistance = function(t, e) {
  var n = xt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return n;
};
xt.prototype.isCollinear = function() {
  return this._result === xt.COLLINEAR_INTERSECTION;
};
xt.prototype.toString = function() {
  return gn.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + gn.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
xt.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
xt.prototype.isIntersection = function(t) {
  for (var e = this, n = 0; n < this._result; n++)
    if (e._intPt[n].equals2D(t))
      return !0;
  return !1;
};
xt.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
xt.prototype.interfaces_ = function() {
  return [];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.computeEdgeDistance = function(t, e, n) {
  var r = Math.abs(n.x - e.x), s = Math.abs(n.y - e.y), o = -1;
  if (t.equals(e))
    o = 0;
  else if (t.equals(n))
    r > s ? o = r : o = s;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    r > s ? o = a : o = u, o === 0 && !t.equals(e) && (o = Math.max(a, u));
  }
  return J.isTrue(!(o === 0 && !t.equals(e)), "Bad distance calculation"), o;
};
xt.nonRobustComputeEdgeDistance = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = Math.sqrt(r * r + s * s);
  return J.isTrue(!(o === 0 && !t.equals(e)), "Invalid distance calculation"), o;
};
xs.DONT_INTERSECT.get = function() {
  return 0;
};
xs.DO_INTERSECT.get = function() {
  return 1;
};
xs.COLLINEAR.get = function() {
  return 2;
};
xs.NO_INTERSECTION.get = function() {
  return 0;
};
xs.POINT_INTERSECTION.get = function() {
  return 1;
};
xs.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(xt, xs);
var Br = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(n) {
    var r = new Y(this._inputLines[0][0], this._inputLines[0][1]), s = new Y(this._inputLines[1][0], this._inputLines[1][1]);
    return r.contains(n) && s.contains(n);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var n = arguments[0], r = arguments[1], s = arguments[2];
      if (this._isProper = !1, Y.intersects(r, s, n) && k.orientationIndex(r, s, n) === 0 && k.orientationIndex(s, r, n) === 0)
        return this._isProper = !0, (n.equals(r) || n.equals(s)) && (this._isProper = !1), this._result = i.POINT_INTERSECTION, null;
      this._result = i.NO_INTERSECTION;
    } else
      return i.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(n, r, s, o, a) {
    a.x = this.smallestInAbsValue(n.x, r.x, s.x, o.x), a.y = this.smallestInAbsValue(n.y, r.y, s.y, o.y), n.x -= a.x, n.y -= a.y, r.x -= a.x, r.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(n, r, s, o) {
    var a = null;
    try {
      a = hn.intersection(n, r, s, o);
    } catch (u) {
      if (u instanceof po)
        a = t.nearestEndpoint(n, r, s, o);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(n, r, s, o) {
    var a = this.intersectionWithNormalization(n, r, s, o);
    return this.isInSegmentEnvelopes(a) || (a = new x(t.nearestEndpoint(n, r, s, o))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(n, r, s, o) {
    var a = n, u = Math.abs(a);
    return Math.abs(r) < u && (a = r, u = Math.abs(r)), Math.abs(s) < u && (a = s, u = Math.abs(s)), Math.abs(o) < u && (a = o), a;
  }, t.prototype.checkDD = function(n, r, s, o, a) {
    var u = Ne.intersection(n, r, s, o), l = this.isInSegmentEnvelopes(u);
    ne.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && ne.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(n, r, s, o) {
    var a = new x(n), u = new x(r), l = new x(s), c = new x(o), h = new x();
    this.normalizeToEnvCentre(a, u, l, c, h);
    var f = this.safeHCoordinateIntersection(a, u, l, c);
    return f.x += h.x, f.y += h.y, f;
  }, t.prototype.computeCollinearIntersection = function(n, r, s, o) {
    var a = Y.intersects(n, r, s), u = Y.intersects(n, r, o), l = Y.intersects(s, o, n), c = Y.intersects(s, o, r);
    return a && u ? (this._intPt[0] = s, this._intPt[1] = o, i.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = n, this._intPt[1] = r, i.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !u && !c ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !u && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !a && !c ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !a && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : i.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, r, s, o, a) {
    var u = n.x < r.x ? n.x : r.x, l = n.y < r.y ? n.y : r.y, c = n.x > r.x ? n.x : r.x, h = n.y > r.y ? n.y : r.y, f = s.x < o.x ? s.x : o.x, g = s.y < o.y ? s.y : o.y, d = s.x > o.x ? s.x : o.x, _ = s.y > o.y ? s.y : o.y, p = u > f ? u : f, m = c < d ? c : d, y = l > g ? l : g, v = h < _ ? h : _, C = (p + m) / 2, E = (y + v) / 2;
    a.x = C, a.y = E, n.x -= a.x, n.y -= a.y, r.x -= a.x, r.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.computeIntersect = function(n, r, s, o) {
    if (this._isProper = !1, !Y.intersects(n, r, s, o))
      return i.NO_INTERSECTION;
    var a = k.orientationIndex(n, r, s), u = k.orientationIndex(n, r, o);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return i.NO_INTERSECTION;
    var l = k.orientationIndex(s, o, n), c = k.orientationIndex(s, o, r);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return i.NO_INTERSECTION;
    var h = a === 0 && u === 0 && l === 0 && c === 0;
    return h ? this.computeCollinearIntersection(n, r, s, o) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : r.equals2D(s) || r.equals2D(o) ? this._intPt[0] = r : a === 0 ? this._intPt[0] = new x(s) : u === 0 ? this._intPt[0] = new x(o) : l === 0 ? this._intPt[0] = new x(n) : c === 0 && (this._intPt[0] = new x(r))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, r, s, o)), i.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, r, s, o) {
    var a = n, u = k.distancePointLine(n, s, o), l = k.distancePointLine(r, s, o);
    return l < u && (u = l, a = r), l = k.distancePointLine(s, n, r), l < u && (u = l, a = s), l = k.distancePointLine(o, n, r), l < u && (u = l, a = o), a;
  }, t;
}(xt), is = function() {
};
is.prototype.interfaces_ = function() {
  return [];
};
is.prototype.getClass = function() {
  return is;
};
is.orientationIndex = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = n.x - e.x, a = n.y - e.y;
  return is.signOfDet2x2(r, s, o, a);
};
is.signOfDet2x2 = function(t, e, n, r) {
  var s = null, o = null, a = null;
  if (s = 1, t === 0 || r === 0)
    return e === 0 || n === 0 ? 0 : e > 0 ? n > 0 ? -s : s : n > 0 ? s : -s;
  if (e === 0 || n === 0)
    return r > 0 ? t > 0 ? s : -s : t > 0 ? -s : s;
  if (e > 0 ? r > 0 ? e <= r || (s = -s, o = t, t = n, n = o, o = e, e = r, r = o) : e <= -r ? (s = -s, n = -n, r = -r) : (o = t, t = -n, n = o, o = e, e = -r, r = o) : r > 0 ? -e <= r ? (s = -s, t = -t, e = -e) : (o = -t, t = n, n = o, o = -e, e = r, r = o) : e >= r ? (t = -t, e = -e, n = -n, r = -r) : (s = -s, o = -t, t = -n, n = o, o = -e, e = -r, r = o), t > 0)
    if (n > 0) {
      if (!(t <= n))
        return s;
    } else
      return s;
  else {
    if (n > 0)
      return -s;
    if (t >= n)
      s = -s, t = -t, n = -n;
    else
      return -s;
  }
  for (; ; ) {
    if (a = Math.floor(n / t), n = n - a * t, r = r - a * e, r < 0)
      return -s;
    if (r > e)
      return s;
    if (t > n + n) {
      if (e < r + r)
        return s;
    } else {
      if (e > r + r)
        return -s;
      n = t - n, r = e - r, s = -s;
    }
    if (r === 0)
      return n === 0 ? 0 : -s;
    if (n === 0 || (a = Math.floor(t / n), t = t - a * n, e = e - a * r, e < 0))
      return s;
    if (e > r)
      return -s;
    if (n > t + t) {
      if (r < e + e)
        return -s;
    } else {
      if (r > e + e)
        return s;
      t = n - t, e = r - e, s = -s;
    }
    if (e === 0)
      return t === 0 ? 0 : s;
    if (t === 0)
      return -s;
  }
};
var An = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
An.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, r = e.x;
    return n > r && (n = e.x, r = t.x), this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var s = t.x - this._p.x, o = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = is.signOfDet2x2(s, o, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < o && (l = -l), l > 0 && this._crossingCount++;
  }
};
An.prototype.isPointInPolygon = function() {
  return this.getLocation() !== I.EXTERIOR;
};
An.prototype.getLocation = function() {
  return this._isPointOnSegment ? I.BOUNDARY : this._crossingCount % 2 === 1 ? I.INTERIOR : I.EXTERIOR;
};
An.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
An.prototype.interfaces_ = function() {
  return [];
};
An.prototype.getClass = function() {
  return An;
};
An.locatePointInRing = function() {
  if (arguments[0] instanceof x && q(arguments[1], et)) {
    for (var t = arguments[0], e = arguments[1], n = new An(t), r = new x(), s = new x(), o = 1; o < e.size(); o++)
      if (e.getCoordinate(o, r), e.getCoordinate(o - 1, s), n.countSegment(r, s), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof x && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new An(a), c = 1; c < u.length; c++) {
      var h = u[c], f = u[c - 1];
      if (l.countSegment(h, f), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var k = function() {
}, Cs = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
k.prototype.interfaces_ = function() {
  return [];
};
k.prototype.getClass = function() {
  return k;
};
k.orientationIndex = function(t, e, n) {
  return Ne.orientationIndex(t, e, n);
};
k.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
      var s = t[r].x - n, o = t[r + 1].y, a = t[r - 1].y;
      e += s * (a - o);
    }
    return e / 2;
  } else if (q(arguments[0], et)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new x(), h = new x(), f = new x();
    u.getCoordinate(0, h), u.getCoordinate(1, f);
    var g = h.x;
    f.x -= g;
    for (var d = 0, _ = 1; _ < l - 1; _++)
      c.y = h.y, h.x = f.x, h.y = f.y, u.getCoordinate(_ + 1, f), f.x -= g, d += h.x * (c.y - f.y);
    return d / 2;
  }
};
k.distanceLineLine = function(t, e, n, r) {
  if (t.equals(e))
    return k.distancePointLine(t, n, r);
  if (n.equals(r))
    return k.distancePointLine(r, t, e);
  var s = !1;
  if (!Y.intersects(t, e, n, r))
    s = !0;
  else {
    var o = (e.x - t.x) * (r.y - n.y) - (e.y - t.y) * (r.x - n.x);
    if (o === 0)
      s = !0;
    else {
      var a = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y), u = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), l = u / o, c = a / o;
      (c < 0 || c > 1 || l < 0 || l > 1) && (s = !0);
    }
  }
  return s ? Xe.min(k.distancePointLine(t, n, r), k.distancePointLine(e, n, r), k.distancePointLine(n, t, e), k.distancePointLine(r, t, e)) : 0;
};
k.isPointInRing = function(t, e) {
  return k.locatePointInRing(t, e) !== I.EXTERIOR;
};
k.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, r = new x();
  t.getCoordinate(0, r);
  for (var s = r.x, o = r.y, a = 1; a < e; a++) {
    t.getCoordinate(a, r);
    var u = r.x, l = r.y, c = u - s, h = l - o;
    n += Math.sqrt(c * c + h * h), s = u, o = l;
  }
  return n;
};
k.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new vt("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var n = t[0], r = 0, s = 1; s <= e; s++) {
    var o = t[s];
    o.y > n.y && (n = o, r = s);
  }
  var a = r;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(n) && a !== r);
  var u = r;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(n) && u !== r);
  var l = t[a], c = t[u];
  if (l.equals2D(n) || c.equals2D(n) || l.equals2D(c))
    return !1;
  var h = k.computeOrientation(l, n, c), f = !1;
  return h === 0 ? f = l.x > c.x : f = h > 0, f;
};
k.locatePointInRing = function(t, e) {
  return An.locatePointInRing(t, e);
};
k.distancePointLinePerpendicular = function(t, e, n) {
  var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), s = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r;
  return Math.abs(s) * Math.sqrt(r);
};
k.computeOrientation = function(t, e, n) {
  return k.orientationIndex(t, e, n);
};
k.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new vt("Line array must contain at least one vertex");
    for (var n = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
      var s = k.distancePointLine(t, e[r], e[r + 1]);
      s < n && (n = s);
    }
    return n;
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    if (a.x === u.x && a.y === u.y)
      return o.distance(a);
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), c = ((o.x - a.x) * (u.x - a.x) + (o.y - a.y) * (u.y - a.y)) / l;
    if (c <= 0)
      return o.distance(a);
    if (c >= 1)
      return o.distance(u);
    var h = ((a.y - o.y) * (u.x - a.x) - (a.x - o.x) * (u.y - a.y)) / l;
    return Math.abs(h) * Math.sqrt(l);
  }
};
k.isOnLine = function(t, e) {
  for (var n = new Br(), r = 1; r < e.length; r++) {
    var s = e[r - 1], o = e[r];
    if (n.computeIntersection(t, s, o), n.hasIntersection())
      return !0;
  }
  return !1;
};
Cs.CLOCKWISE.get = function() {
  return -1;
};
Cs.RIGHT.get = function() {
  return k.CLOCKWISE;
};
Cs.COUNTERCLOCKWISE.get = function() {
  return 1;
};
Cs.LEFT.get = function() {
  return k.COUNTERCLOCKWISE;
};
Cs.COLLINEAR.get = function() {
  return 0;
};
Cs.STRAIGHT.get = function() {
  return k.COLLINEAR;
};
Object.defineProperties(k, Cs);
var bi = function() {
};
bi.prototype.filter = function(t) {
};
bi.prototype.interfaces_ = function() {
  return [];
};
bi.prototype.getClass = function() {
  return bi;
};
var W = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, _i = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
W.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === W.SORTINDEX_GEOMETRYCOLLECTION;
};
W.prototype.getFactory = function() {
  return this._factory;
};
W.prototype.getGeometryN = function(t) {
  return this;
};
W.prototype.getArea = function() {
  return 0;
};
W.prototype.isRectangle = function() {
  return !1;
};
W.prototype.equals = function() {
  if (arguments[0] instanceof W) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof W))
      return !1;
    var n = e;
    return this.equalsExact(n);
  }
};
W.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
W.prototype.geometryChanged = function() {
  this.apply(W.geometryChangedFilter);
};
W.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
W.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
W.prototype.getLength = function() {
  return 0;
};
W.prototype.getNumGeometries = function() {
  return 1;
};
W.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, r);
  }
};
W.prototype.getUserData = function() {
  return this._userData;
};
W.prototype.getSRID = function() {
  return this._SRID;
};
W.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
W.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === W.SORTINDEX_GEOMETRYCOLLECTION)
    throw new vt("This method does not support GeometryCollection arguments");
};
W.prototype.equal = function(t, e, n) {
  return n === 0 ? t.equals(e) : t.distance(e) <= n;
};
W.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
W.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
W.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new Y(this._envelope);
};
W.prototype.setSRID = function(t) {
  this._SRID = t;
};
W.prototype.setUserData = function(t) {
  this._userData = t;
};
W.prototype.compare = function(t, e) {
  for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext(); ) {
    var s = n.next(), o = r.next(), a = s.compareTo(o);
    if (a !== 0)
      return a;
  }
  return n.hasNext() ? 1 : r.hasNext() ? -1 : 0;
};
W.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
W.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === W.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === W.SORTINDEX_MULTIPOINT || this.getSortIndex() === W.SORTINDEX_MULTILINESTRING || this.getSortIndex() === W.SORTINDEX_MULTIPOLYGON;
};
W.prototype.interfaces_ = function() {
  return [bu, sn, on];
};
W.prototype.getClass = function() {
  return W;
};
W.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
W.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
_i.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
_i.SORTINDEX_POINT.get = function() {
  return 0;
};
_i.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
_i.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
_i.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
_i.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
_i.SORTINDEX_POLYGON.get = function() {
  return 5;
};
_i.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
_i.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
_i.geometryChangedFilter.get = function() {
  return oc;
};
Object.defineProperties(W, _i);
var oc = function() {
};
oc.interfaces_ = function() {
  return [bi];
};
oc.filter = function(t) {
  t.geometryChangedAction();
};
var ai = function() {
};
ai.prototype.filter = function(t) {
};
ai.prototype.interfaces_ = function() {
  return [];
};
ai.prototype.getClass = function() {
  return ai;
};
var en = function() {
}, Ai = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
en.prototype.isInBoundary = function(t) {
};
en.prototype.interfaces_ = function() {
  return [];
};
en.prototype.getClass = function() {
  return en;
};
Ai.Mod2BoundaryNodeRule.get = function() {
  return js;
};
Ai.EndPointBoundaryNodeRule.get = function() {
  return Zs;
};
Ai.MultiValentEndPointBoundaryNodeRule.get = function() {
  return Ks;
};
Ai.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Js;
};
Ai.MOD2_BOUNDARY_RULE.get = function() {
  return new js();
};
Ai.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Zs();
};
Ai.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ks();
};
Ai.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Js();
};
Ai.OGC_SFS_BOUNDARY_RULE.get = function() {
  return en.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(en, Ai);
var js = function() {
};
js.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
js.prototype.interfaces_ = function() {
  return [en];
};
js.prototype.getClass = function() {
  return js;
};
var Zs = function() {
};
Zs.prototype.isInBoundary = function(t) {
  return t > 0;
};
Zs.prototype.interfaces_ = function() {
  return [en];
};
Zs.prototype.getClass = function() {
  return Zs;
};
var Ks = function() {
};
Ks.prototype.isInBoundary = function(t) {
  return t > 1;
};
Ks.prototype.interfaces_ = function() {
  return [en];
};
Ks.prototype.getClass = function() {
  return Ks;
};
var Js = function() {
};
Js.prototype.isInBoundary = function(t) {
  return t === 1;
};
Js.prototype.interfaces_ = function() {
  return [en];
};
Js.prototype.getClass = function() {
  return Js;
};
var Ft = function() {
};
Ft.prototype.add = function() {
};
Ft.prototype.addAll = function() {
};
Ft.prototype.isEmpty = function() {
};
Ft.prototype.iterator = function() {
};
Ft.prototype.size = function() {
};
Ft.prototype.toArray = function() {
};
Ft.prototype.remove = function() {
};
function ac(i) {
  this.message = i || "";
}
ac.prototype = new Error();
ac.prototype.name = "IndexOutOfBoundsException";
var _o = function() {
};
_o.prototype.hasNext = function() {
};
_o.prototype.next = function() {
};
_o.prototype.remove = function() {
};
var fn = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Ft);
function mo(i) {
  this.message = i || "";
}
mo.prototype = new Error();
mo.prototype.name = "NoSuchElementException";
var D = function(i) {
  function t() {
    i.call(this), this.array_ = [], arguments[0] instanceof Ft && this.addAll(arguments[0]);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [i, Ft];
  }, t.prototype.add = function(n) {
    return arguments.length === 1 ? this.array_.push(n) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(n) {
    for (var r = this, s = n.iterator(); s.hasNext(); )
      r.add(s.next());
    return !0;
  }, t.prototype.set = function(n, r) {
    var s = this.array_[n];
    return this.array_[n] = r, s;
  }, t.prototype.iterator = function() {
    return new Hy(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new ac();
    return this.array_[n];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var n = this, r = [], s = 0, o = this.array_.length; s < o; s++)
      r.push(n.array_[s]);
    return r;
  }, t.prototype.remove = function(n) {
    for (var r = this, s = !1, o = 0, a = this.array_.length; o < a; o++)
      if (r.array_[o] === n) {
        r.array_.splice(o, 1), s = !0;
        break;
      }
    return s;
  }, t;
}(fn), Hy = function(i) {
  function t(e) {
    i.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new mo();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(n) {
    return this.arrayList_.set(this.position_ - 1, n);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(_o), xa = function(i) {
  function t() {
    if (i.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var n = arguments[0];
        this.ensureCapacity(n.length), this.add(n, !0);
      } else if (arguments.length === 2) {
        var r = arguments[0], s = arguments[1];
        this.ensureCapacity(r.length), this.add(r, s);
      }
    }
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(r) {
    return this.get(r);
  }, t.prototype.addAll = function() {
    var r = this;
    if (arguments.length === 2) {
      for (var s = arguments[0], o = arguments[1], a = !1, u = s.iterator(); u.hasNext(); )
        r.add(u.next(), o), a = !0;
      return a;
    } else
      return i.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var r = this, s = i.prototype.clone.call(this), o = 0; o < this.size(); o++)
      s.add(o, r.get(o).copy());
    return s;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var r = this;
    if (arguments.length === 1) {
      var s = arguments[0];
      i.prototype.add.call(this, s);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var o = arguments[0], a = arguments[1];
        return this.add(o, a, !0), !0;
      } else if (arguments[0] instanceof x && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        i.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var h = arguments[0], f = arguments[1];
        return this.add(h, f), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], d = arguments[1], _ = arguments[2];
        if (_)
          for (var p = 0; p < g.length; p++)
            r.add(g[p], d);
        else
          for (var m = g.length - 1; m >= 0; m--)
            r.add(g[m], d);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof x) {
        var y = arguments[0], v = arguments[1], C = arguments[2];
        if (!C) {
          var E = this.size();
          if (E > 0) {
            if (y > 0) {
              var w = this.get(y - 1);
              if (w.equals2D(v))
                return null;
            }
            if (y < E) {
              var P = this.get(y);
              if (P.equals2D(v))
                return null;
            }
          }
        }
        i.prototype.add.call(this, y, v);
      }
    } else if (arguments.length === 4) {
      var b = arguments[0], R = arguments[1], O = arguments[2], z = arguments[3], L = 1;
      O > z && (L = -1);
      for (var B = O; B !== z; B += L)
        r.add(b[B], R);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new x(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(D), $ = function() {
}, Tu = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
Tu.ForwardComparator.get = function() {
  return ea;
};
Tu.BidirectionalComparator.get = function() {
  return Qs;
};
Tu.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
$.prototype.interfaces_ = function() {
  return [];
};
$.prototype.getClass = function() {
  return $;
};
$.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
$.ptNotInList = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    if ($.indexOf(r, e) < 0)
      return r;
  }
  return null;
};
$.scroll = function(t, e) {
  var n = $.indexOf(e, t);
  if (n < 0)
    return null;
  var r = new Array(t.length).fill(null);
  ne.arraycopy(t, n, r, 0, t.length - n), ne.arraycopy(t, 0, r, t.length - n, n), ne.arraycopy(r, 0, t, 0, t.length);
};
$.equals = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (t === e)
      return !0;
    if (t === null || e === null || t.length !== e.length)
      return !1;
    for (var n = 0; n < t.length; n++)
      if (!t[n].equals(e[n]))
        return !1;
    return !0;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    if (r === s)
      return !0;
    if (r === null || s === null || r.length !== s.length)
      return !1;
    for (var a = 0; a < r.length; a++)
      if (o.compare(r[a], s[a]) !== 0)
        return !1;
    return !0;
  }
};
$.intersection = function(t, e) {
  for (var n = new xa(), r = 0; r < t.length; r++)
    e.intersects(t[r]) && n.add(t[r], !0);
  return n.toCoordinateArray();
};
$.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
$.removeRepeatedPoints = function(t) {
  if (!$.hasRepeatedPoints(t))
    return t;
  var e = new xa(t, !1);
  return e.toCoordinateArray();
};
$.reverse = function(t) {
  for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) {
    var s = t[r];
    t[r] = t[e - r], t[e - r] = s;
  }
};
$.removeNull = function(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n] !== null && e++;
  var r = new Array(e).fill(null);
  if (e === 0)
    return r;
  for (var s = 0, o = 0; o < t.length; o++)
    t[o] !== null && (r[s++] = t[o]);
  return r;
};
$.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
      e[n] = new x(t[n]);
    return e;
  } else if (arguments.length === 5)
    for (var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      o[a + l] = new x(r[s + l]);
};
$.isEqualReversed = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n], s = e[t.length - n - 1];
    if (r.compareTo(s) !== 0)
      return !1;
  }
  return !0;
};
$.envelope = function(t) {
  for (var e = new Y(), n = 0; n < t.length; n++)
    e.expandToInclude(t[n]);
  return e;
};
$.toCoordinateArray = function(t) {
  return t.toArray($.coordArrayType);
};
$.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
$.indexOf = function(t, e) {
  for (var n = 0; n < e.length; n++)
    if (t.equals(e[n]))
      return n;
  return -1;
};
$.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var n = t.length - 1 - e, r = t[e].compareTo(t[n]);
    if (r !== 0)
      return r;
  }
  return 1;
};
$.compare = function(t, e) {
  for (var n = 0; n < t.length && n < e.length; ) {
    var r = t[n].compareTo(e[n]);
    if (r !== 0)
      return r;
    n++;
  }
  return n < e.length ? -1 : n < t.length ? 1 : 0;
};
$.minCoordinate = function(t) {
  for (var e = null, n = 0; n < t.length; n++)
    (e === null || e.compareTo(t[n]) > 0) && (e = t[n]);
  return e;
};
$.extract = function(t, e, n) {
  e = Xe.clamp(e, 0, t.length), n = Xe.clamp(n, -1, t.length);
  var r = n - e + 1;
  n < 0 && (r = 0), e >= t.length && (r = 0), n < e && (r = 0);
  var s = new Array(r).fill(null);
  if (r === 0)
    return s;
  for (var o = 0, a = e; a <= n; a++)
    s[o++] = t[a];
  return s;
};
Object.defineProperties($, Tu);
var ea = function() {
};
ea.prototype.compare = function(t, e) {
  var n = t, r = e;
  return $.compare(n, r);
};
ea.prototype.interfaces_ = function() {
  return [qs];
};
ea.prototype.getClass = function() {
  return ea;
};
var Qs = function() {
};
Qs.prototype.compare = function(t, e) {
  var n = t, r = e;
  if (n.length < r.length)
    return -1;
  if (n.length > r.length)
    return 1;
  if (n.length === 0)
    return 0;
  var s = $.compare(n, r), o = $.isEqualReversed(n, r);
  return o ? 0 : s;
};
Qs.prototype.OLDcompare = function(t, e) {
  var n = t, r = e;
  if (n.length < r.length)
    return -1;
  if (n.length > r.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var s = $.increasingDirection(n), o = $.increasingDirection(r), a = s > 0 ? 0 : n.length - 1, u = o > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var c = n[a].compareTo(r[u]);
    if (c !== 0)
      return c;
    a += s, u += o;
  }
  return 0;
};
Qs.prototype.interfaces_ = function() {
  return [qs];
};
Qs.prototype.getClass = function() {
  return Qs;
};
var Is = function() {
};
Is.prototype.get = function() {
};
Is.prototype.put = function() {
};
Is.prototype.size = function() {
};
Is.prototype.values = function() {
};
Is.prototype.entrySet = function() {
};
var jy = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Is);
function Ca(i) {
  this.message = i || "";
}
Ca.prototype = new Error();
Ca.prototype.name = "OperationNotSupported";
function Mu() {
}
Mu.prototype = new Ft();
Mu.prototype.contains = function() {
};
var uc = function(i) {
  function t() {
    i.call(this), this.array_ = [], arguments[0] instanceof Ft && this.addAll(arguments[0]);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.contains = function(n) {
    for (var r = this, s = 0, o = this.array_.length; s < o; s++) {
      var a = r.array_[s];
      if (a === n)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(n) {
    return this.contains(n) ? !1 : (this.array_.push(n), !0);
  }, t.prototype.addAll = function(n) {
    for (var r = this, s = n.iterator(); s.hasNext(); )
      r.add(s.next());
    return !0;
  }, t.prototype.remove = function(n) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var n = this, r = [], s = 0, o = this.array_.length; s < o; s++)
      r.push(n.array_[s]);
    return r;
  }, t.prototype.iterator = function() {
    return new Zy(this);
  }, t;
}(Mu), Zy = function(i) {
  function t(e) {
    i.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new mo();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Ca();
  }, t;
}(_o), xi = 0, dr = 1;
function Lh(i) {
  return i === null ? xi : i.color;
}
function ft(i) {
  return i === null ? null : i.parent;
}
function yi(i, t) {
  i !== null && (i.color = t);
}
function $u(i) {
  return i === null ? null : i.left;
}
function bh(i) {
  return i === null ? null : i.right;
}
function ue() {
  this.root_ = null, this.size_ = 0;
}
ue.prototype = new jy();
ue.prototype.get = function(i) {
  for (var t = this.root_; t !== null; ) {
    var e = i.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
ue.prototype.put = function(i, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: i,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: xi,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, n, r;
  do
    if (n = e, r = i.compareTo(e.key), r < 0)
      e = e.left;
    else if (r > 0)
      e = e.right;
    else {
      var s = e.value;
      return e.value = t, s;
    }
  while (e !== null);
  var o = {
    key: i,
    left: null,
    right: null,
    value: t,
    parent: n,
    color: xi,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return r < 0 ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
};
ue.prototype.fixAfterInsertion = function(i) {
  var t = this;
  for (i.color = dr; i != null && i !== this.root_ && i.parent.color === dr; )
    if (ft(i) === $u(ft(ft(i)))) {
      var e = bh(ft(ft(i)));
      Lh(e) === dr ? (yi(ft(i), xi), yi(e, xi), yi(ft(ft(i)), dr), i = ft(ft(i))) : (i === bh(ft(i)) && (i = ft(i), t.rotateLeft(i)), yi(ft(i), xi), yi(ft(ft(i)), dr), t.rotateRight(ft(ft(i))));
    } else {
      var n = $u(ft(ft(i)));
      Lh(n) === dr ? (yi(ft(i), xi), yi(n, xi), yi(ft(ft(i)), dr), i = ft(ft(i))) : (i === $u(ft(i)) && (i = ft(i), t.rotateRight(i)), yi(ft(i), xi), yi(ft(ft(i)), dr), t.rotateLeft(ft(ft(i))));
    }
  this.root_.color = xi;
};
ue.prototype.values = function() {
  var i = new D(), t = this.getFirstEntry();
  if (t !== null)
    for (i.add(t.value); (t = ue.successor(t)) !== null; )
      i.add(t.value);
  return i;
};
ue.prototype.entrySet = function() {
  var i = new uc(), t = this.getFirstEntry();
  if (t !== null)
    for (i.add(t); (t = ue.successor(t)) !== null; )
      i.add(t);
  return i;
};
ue.prototype.rotateLeft = function(i) {
  if (i != null) {
    var t = i.right;
    i.right = t.left, t.left != null && (t.left.parent = i), t.parent = i.parent, i.parent === null ? this.root_ = t : i.parent.left === i ? i.parent.left = t : i.parent.right = t, t.left = i, i.parent = t;
  }
};
ue.prototype.rotateRight = function(i) {
  if (i != null) {
    var t = i.left;
    i.left = t.right, t.right != null && (t.right.parent = i), t.parent = i.parent, i.parent === null ? this.root_ = t : i.parent.right === i ? i.parent.right = t : i.parent.left = t, t.right = i, i.parent = t;
  }
};
ue.prototype.getFirstEntry = function() {
  var i = this.root_;
  if (i != null)
    for (; i.left != null; )
      i = i.left;
  return i;
};
ue.successor = function(i) {
  if (i === null)
    return null;
  if (i.right !== null) {
    for (var t = i.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = i.parent, n = i; e !== null && n === e.right; )
      n = e, e = e.parent;
    return e;
  }
};
ue.prototype.size = function() {
  return this.size_;
};
var na = function() {
};
na.prototype.interfaces_ = function() {
  return [];
};
na.prototype.getClass = function() {
  return na;
};
function Eg() {
}
Eg.prototype = new Mu();
function Gn() {
  this.array_ = [], arguments[0] instanceof Ft && this.addAll(arguments[0]);
}
Gn.prototype = new Eg();
Gn.prototype.contains = function(i) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var r = t.array_[e];
    if (r.compareTo(i) === 0)
      return !0;
  }
  return !1;
};
Gn.prototype.add = function(i) {
  var t = this;
  if (this.contains(i))
    return !1;
  for (var e = 0, n = this.array_.length; e < n; e++) {
    var r = t.array_[e];
    if (r.compareTo(i) === 1)
      return t.array_.splice(e, 0, i), !0;
  }
  return this.array_.push(i), !0;
};
Gn.prototype.addAll = function(i) {
  for (var t = this, e = i.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
Gn.prototype.remove = function(i) {
  throw new Ca();
};
Gn.prototype.size = function() {
  return this.array_.length;
};
Gn.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
Gn.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
Gn.prototype.iterator = function() {
  return new Ou(this);
};
var Ou = function(i) {
  this.treeSet_ = i, this.position_ = 0;
};
Ou.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new mo();
  return this.treeSet_.array_[this.position_++];
};
Ou.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
Ou.prototype.remove = function() {
  throw new Ca();
};
var Cr = function() {
};
Cr.sort = function() {
  var t = arguments[0], e, n, r, s;
  if (arguments.length === 1)
    s = function(a, u) {
      return a.compareTo(u);
    }, t.sort(s);
  else if (arguments.length === 2)
    r = arguments[1], s = function(a, u) {
      return r.compare(a, u);
    }, t.sort(s);
  else if (arguments.length === 3) {
    n = t.slice(arguments[1], arguments[2]), n.sort();
    var o = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < o.length; e++)
      t.push(o[e]);
  } else if (arguments.length === 4)
    for (n = t.slice(arguments[1], arguments[2]), r = arguments[3], s = function(a, u) {
      return r.compare(a, u);
    }, n.sort(s), o = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < o.length; e++)
      t.push(o[e]);
};
Cr.asList = function(t) {
  for (var e = new D(), n = 0, r = t.length; n < r; n++)
    e.add(t[n]);
  return e;
};
var it = function() {
}, Cn = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
Cn.P.get = function() {
  return 0;
};
Cn.L.get = function() {
  return 1;
};
Cn.A.get = function() {
  return 2;
};
Cn.FALSE.get = function() {
  return -1;
};
Cn.TRUE.get = function() {
  return -2;
};
Cn.DONTCARE.get = function() {
  return -3;
};
Cn.SYM_FALSE.get = function() {
  return "F";
};
Cn.SYM_TRUE.get = function() {
  return "T";
};
Cn.SYM_DONTCARE.get = function() {
  return "*";
};
Cn.SYM_P.get = function() {
  return "0";
};
Cn.SYM_L.get = function() {
  return "1";
};
Cn.SYM_A.get = function() {
  return "2";
};
it.prototype.interfaces_ = function() {
  return [];
};
it.prototype.getClass = function() {
  return it;
};
it.toDimensionSymbol = function(t) {
  switch (t) {
    case it.FALSE:
      return it.SYM_FALSE;
    case it.TRUE:
      return it.SYM_TRUE;
    case it.DONTCARE:
      return it.SYM_DONTCARE;
    case it.P:
      return it.SYM_P;
    case it.L:
      return it.SYM_L;
    case it.A:
      return it.SYM_A;
  }
  throw new vt("Unknown dimension value: " + t);
};
it.toDimensionValue = function(t) {
  switch (ta.toUpperCase(t)) {
    case it.SYM_FALSE:
      return it.FALSE;
    case it.SYM_TRUE:
      return it.TRUE;
    case it.SYM_DONTCARE:
      return it.DONTCARE;
    case it.SYM_P:
      return it.P;
    case it.SYM_L:
      return it.L;
    case it.SYM_A:
      return it.A;
  }
  throw new vt("Unknown dimension symbol: " + t);
};
Object.defineProperties(it, Cn);
var Bn = function() {
};
Bn.prototype.filter = function(t) {
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
var dn = function() {
};
dn.prototype.filter = function(t, e) {
};
dn.prototype.isDone = function() {
};
dn.prototype.isGeometryChanged = function() {
};
dn.prototype.interfaces_ = function() {
  return [];
};
dn.prototype.getClass = function() {
  return dn;
};
var ve = function(i) {
  function t(n, r) {
    if (i.call(this, r), this._geometries = n || [], i.hasNullElements(this._geometries))
      throw new vt("geometries must not contain null elements");
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var r = this, s = new Y(), o = 0; o < this._geometries.length; o++)
      s.expandToInclude(r._geometries[o].getEnvelopeInternal());
    return s;
  }, t.prototype.getGeometryN = function(r) {
    return this._geometries[r];
  }, t.prototype.getSortIndex = function() {
    return i.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var r = this, s = new Array(this.getNumPoints()).fill(null), o = -1, a = 0; a < this._geometries.length; a++)
      for (var u = r._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        o++, s[o] = u[l];
    return s;
  }, t.prototype.getArea = function() {
    for (var r = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += r._geometries[o].getArea();
    return s;
  }, t.prototype.equalsExact = function() {
    var r = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!r._geometries[u].equalsExact(a._geometries[u], o))
          return !1;
      return !0;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var r = this, s = 0; s < this._geometries.length; s++)
      r._geometries[s].normalize();
    Cr.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var r = this, s = it.FALSE, o = 0; o < this._geometries.length; o++)
      s = Math.max(s, r._geometries[o].getBoundaryDimension());
    return s;
  }, t.prototype.getDimension = function() {
    for (var r = this, s = it.FALSE, o = 0; o < this._geometries.length; o++)
      s = Math.max(s, r._geometries[o].getDimension());
    return s;
  }, t.prototype.getLength = function() {
    for (var r = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += r._geometries[o].getLength();
    return s;
  }, t.prototype.getNumPoints = function() {
    for (var r = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += r._geometries[o].getNumPoints();
    return s;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var r = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[a] = r._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(o);
  }, t.prototype.compareToSameClass = function() {
    var r = this;
    if (arguments.length === 1) {
      var s = arguments[0], o = new Gn(Cr.asList(this._geometries)), a = new Gn(Cr.asList(s._geometries));
      return this.compare(o, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, h = this.getNumGeometries(), f = c.getNumGeometries(), g = 0; g < h && g < f; ) {
        var d = r.getGeometryN(g), _ = c.getGeometryN(g), p = d.compareToSameClass(_, l);
        if (p !== 0)
          return p;
        g++;
      }
      return g < h ? 1 : g < f ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var r = this;
    if (q(arguments[0], ai))
      for (var s = arguments[0], o = 0; o < this._geometries.length; o++)
        r._geometries[o].apply(s);
    else if (q(arguments[0], dn)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (r._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], Bn)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        r._geometries[c].apply(l);
    } else if (q(arguments[0], bi)) {
      var h = arguments[0];
      h.filter(this);
      for (var f = 0; f < this._geometries.length; f++)
        r._geometries[f].apply(h);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), J.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var r = this, s = i.prototype.clone.call(this);
    s._geometries = new Array(this._geometries.length).fill(null);
    for (var o = 0; o < this._geometries.length; o++)
      s._geometries[o] = r._geometries[o].clone();
    return s;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var r = this, s = 0; s < this._geometries.length; s++)
      if (!r._geometries[s].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(W), Lr = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return this.isEquivalentClass(r) ? i.prototype.equalsExact.call(this, r, s) : !1;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? it.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var r = this;
    if (this.isEmpty())
      return !1;
    for (var s = 0; s < this._geometries.length; s++)
      if (!r._geometries[s].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var r = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[s - 1 - a] = r._geometries[a].reverse();
    return this.getFactory().createMultiLineString(o);
  }, t.prototype.getBoundary = function() {
    return new Je(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [na];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ve), Je = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = en.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = r;
  }
};
Je.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Je.prototype.getBoundary = function() {
  return this._geom instanceof St ? this.boundaryLineString(this._geom) : this._geom instanceof Lr ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Je.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Je.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Je.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, n = new D();
  this._endpointMap = new ue();
  for (var r = 0; r < t.getNumGeometries(); r++) {
    var s = t.getGeometryN(r);
    s.getNumPoints() !== 0 && (e.addEndpoint(s.getCoordinateN(0)), e.addEndpoint(s.getCoordinateN(s.getNumPoints() - 1)));
  }
  for (var o = this._endpointMap.entrySet().iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && n.add(a.getKey());
  }
  return $.toCoordinateArray(n);
};
Je.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new fu(), this._endpointMap.put(t, e)), e.count++;
};
Je.prototype.interfaces_ = function() {
  return [];
};
Je.prototype.getClass = function() {
  return Je;
};
Je.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Je(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = new Je(n, r);
    return s.getBoundary();
  }
};
var fu = function() {
  this.count = null;
};
fu.prototype.interfaces_ = function() {
  return [];
};
fu.prototype.getClass = function() {
  return fu;
};
function Ky() {
}
function Jy() {
}
var Qy = function() {
};
function $y() {
}
function tv() {
}
function ev() {
}
var Qe = function() {
}, lc = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
Qe.prototype.interfaces_ = function() {
  return [];
};
Qe.prototype.getClass = function() {
  return Qe;
};
Qe.chars = function(t, e) {
  for (var n = new Array(e).fill(null), r = 0; r < e; r++)
    n[r] = t;
  return String(n);
};
Qe.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new $y(), n = new Ky();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1], o = "";
    new Jy(Qe.getStackTrace(r));
    for (var a = new ev(), u = 0; u < s; u++)
      try {
        o += a.readLine() + Qe.NEWLINE;
      } catch (l) {
        if (l instanceof tv)
          J.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return o;
  }
};
Qe.split = function(t, e) {
  for (var n = e.length, r = new D(), s = "" + t, o = s.indexOf(e); o >= 0; ) {
    var a = s.substring(0, o);
    r.add(a), s = s.substring(o + n), o = s.indexOf(e);
  }
  s.length > 0 && r.add(s);
  for (var u = new Array(r.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = r.get(l);
  return u;
};
Qe.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Qe.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
Qe.spaces = function(t) {
  return Qe.chars(" ", t);
};
lc.NEWLINE.get = function() {
  return ne.getProperty("line.separator");
};
lc.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new Qy();
};
Object.defineProperties(Qe, lc);
var bt = function() {
};
bt.prototype.interfaces_ = function() {
  return [];
};
bt.prototype.getClass = function() {
  return bt;
};
bt.copyCoord = function(t, e, n, r) {
  for (var s = Math.min(t.getDimension(), n.getDimension()), o = 0; o < s; o++)
    n.setOrdinate(r, o, t.getOrdinate(e, o));
};
bt.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, et.X) === t.getOrdinate(e - 1, et.X) && t.getOrdinate(0, et.Y) === t.getOrdinate(e - 1, et.Y);
};
bt.isEqual = function(t, e) {
  var n = t.size(), r = e.size();
  if (n !== r)
    return !1;
  for (var s = Math.min(t.getDimension(), e.getDimension()), o = 0; o < n; o++)
    for (var a = 0; a < s; a++) {
      var u = t.getOrdinate(o, a), l = e.getOrdinate(o, a);
      if (t.getOrdinate(o, a) !== e.getOrdinate(o, a) && !(H.isNaN(u) && H.isNaN(l)))
        return !1;
    }
  return !0;
};
bt.extend = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  if (bt.copy(e, 0, r, 0, s), s > 0)
    for (var o = s; o < n; o++)
      bt.copy(e, s - 1, r, o, 1);
  return r;
};
bt.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++)
    bt.swap(t, r, e - r);
};
bt.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var r = 0; r < t.getDimension(); r++) {
    var s = t.getOrdinate(e, r);
    t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, s);
  }
};
bt.copy = function(t, e, n, r, s) {
  for (var o = 0; o < s; o++)
    bt.copyCoord(t, e + o, n, r + o);
};
bt.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), r = new Hn();
    r.append("(");
    for (var s = 0; s < e; s++) {
      s > 0 && r.append(" ");
      for (var o = 0; o < n; o++)
        o > 0 && r.append(","), r.append(Qe.toString(t.getOrdinate(s, o)));
    }
    return r.append(")"), r.toString();
  }
};
bt.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return bt.createClosedRing(t, e, 4);
  var r = e.getOrdinate(0, et.X) === e.getOrdinate(n - 1, et.X) && e.getOrdinate(0, et.Y) === e.getOrdinate(n - 1, et.Y);
  return r ? e : bt.createClosedRing(t, e, n + 1);
};
bt.createClosedRing = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  bt.copy(e, 0, r, 0, s);
  for (var o = s; o < n; o++)
    bt.copy(e, 0, r, o, 1);
  return r;
};
var St = function(i) {
  function t(n, r) {
    i.call(this, r), this._points = null, this.init(n);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new Y() : this._points.expandEnvelope(new Y());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return i.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var r = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!r.equal(r._points.getCoordinate(u), a._points.getCoordinate(u), o))
          return !1;
      return !0;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var r = this, s = 0; s < Math.trunc(this._points.size() / 2); s++) {
      var o = r._points.size() - 1 - s;
      if (!r._points.getCoordinate(s).equals(r._points.getCoordinate(o)))
        return r._points.getCoordinate(s).compareTo(r._points.getCoordinate(o)) > 0 && bt.reverse(r._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? it.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return k.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var r = this._points.copy();
    bt.reverse(r);
    var s = this.getFactory().createLineString(r);
    return s;
  }, t.prototype.compareToSameClass = function() {
    var r = this;
    if (arguments.length === 1) {
      for (var s = arguments[0], o = s, a = 0, u = 0; a < this._points.size() && u < o._points.size(); ) {
        var l = r._points.getCoordinate(a).compareTo(o._points.getCoordinate(u));
        if (l !== 0)
          return l;
        a++, u++;
      }
      return a < this._points.size() ? 1 : u < o._points.size() ? -1 : 0;
    } else if (arguments.length === 2) {
      var c = arguments[0], h = arguments[1], f = c;
      return h.compare(this._points, f._points);
    }
  }, t.prototype.apply = function() {
    var r = this;
    if (q(arguments[0], ai))
      for (var s = arguments[0], o = 0; o < this._points.size(); o++)
        s.filter(r._points.getCoordinate(o));
    else if (q(arguments[0], dn)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(r._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], Bn)) {
      var l = arguments[0];
      l.filter(this);
    } else if (q(arguments[0], bi)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Je(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(r) {
    return r instanceof t;
  }, t.prototype.clone = function() {
    var r = i.prototype.clone.call(this);
    return r._points = this._points.clone(), r;
  }, t.prototype.getCoordinateN = function(r) {
    return this._points.getCoordinate(r);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(r) {
    if (r === null && (r = this.getFactory().getCoordinateSequenceFactory().create([])), r.size() === 1)
      throw new vt("Invalid number of points in LineString (found " + r.size() + " - must be 0 or >= 2)");
    this._points = r;
  }, t.prototype.isCoordinate = function(r) {
    for (var s = this, o = 0; o < this._points.size(); o++)
      if (s._points.getCoordinate(o).equals(r))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(r) {
    return this.getFactory().createPoint(this._points.getCoordinate(r));
  }, t.prototype.interfaces_ = function() {
    return [na];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(W), ia = function() {
};
ia.prototype.interfaces_ = function() {
  return [];
};
ia.prototype.getClass = function() {
  return ia;
};
var Ae = function(i) {
  function t(n, r) {
    i.call(this, r), this._coordinates = n || null, this.init(this._coordinates);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new Y();
    var r = new Y();
    return r.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), r;
  }, t.prototype.getSortIndex = function() {
    return i.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return this.isEquivalentClass(r) ? this.isEmpty() && r.isEmpty() ? !0 : this.isEmpty() !== r.isEmpty() ? !1 : this.equal(r.getCoordinate(), this.getCoordinate(), s) : !1;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return it.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getNumPoints = function() {
    return this.isEmpty() ? 0 : 1;
  }, t.prototype.reverse = function() {
    return this.copy();
  }, t.prototype.getX = function() {
    if (this.getCoordinate() === null)
      throw new Error("getX called on empty Point");
    return this.getCoordinate().x;
  }, t.prototype.compareToSameClass = function() {
    if (arguments.length === 1) {
      var r = arguments[0], s = r;
      return this.getCoordinate().compareTo(s.getCoordinate());
    } else if (arguments.length === 2) {
      var o = arguments[0], a = arguments[1], u = o;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (q(arguments[0], ai)) {
      var r = arguments[0];
      if (this.isEmpty())
        return null;
      r.filter(this.getCoordinate());
    } else if (q(arguments[0], dn)) {
      var s = arguments[0];
      if (this.isEmpty())
        return null;
      s.filter(this._coordinates, 0), s.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], Bn)) {
      var o = arguments[0];
      o.filter(this);
    } else if (q(arguments[0], bi)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var r = i.prototype.clone.call(this);
    return r._coordinates = this._coordinates.clone(), r;
  }, t.prototype.getGeometryType = function() {
    return "Point";
  }, t.prototype.copy = function() {
    return new t(this._coordinates.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._coordinates;
  }, t.prototype.getY = function() {
    if (this.getCoordinate() === null)
      throw new Error("getY called on empty Point");
    return this.getCoordinate().y;
  }, t.prototype.isEmpty = function() {
    return this._coordinates.size() === 0;
  }, t.prototype.init = function(r) {
    r === null && (r = this.getFactory().getCoordinateSequenceFactory().create([])), J.isTrue(r.size() <= 1), this._coordinates = r;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [ia];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(W), ji = function() {
};
ji.prototype.interfaces_ = function() {
  return [];
};
ji.prototype.getClass = function() {
  return ji;
};
var Vt = function(i) {
  function t(n, r, s) {
    if (i.call(this, s), this._shell = null, this._holes = null, n === null && (n = this.getFactory().createLinearRing()), r === null && (r = []), i.hasNullElements(r))
      throw new vt("holes must not contain null elements");
    if (n.isEmpty() && i.hasNonEmptyElements(r))
      throw new vt("shell is empty but holes are not");
    this._shell = n, this._holes = r;
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return i.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var r = this;
    if (this.isEmpty())
      return [];
    for (var s = new Array(this.getNumPoints()).fill(null), o = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      o++, s[o] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = r._holes[l].getCoordinates(), h = 0; h < c.length; h++)
        o++, s[o] = c[h];
    return s;
  }, t.prototype.getArea = function() {
    var r = this, s = 0;
    s += Math.abs(k.signedArea(this._shell.getCoordinateSequence()));
    for (var o = 0; o < this._holes.length; o++)
      s -= Math.abs(k.signedArea(r._holes[o].getCoordinateSequence()));
    return s;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var r = this._shell.getCoordinateSequence(), s = this.getEnvelopeInternal(), o = 0; o < 5; o++) {
      var a = r.getX(o);
      if (!(a === s.getMinX() || a === s.getMaxX()))
        return !1;
      var u = r.getY(o);
      if (!(u === s.getMinY() || u === s.getMaxY()))
        return !1;
    }
    for (var l = r.getX(0), c = r.getY(0), h = 1; h <= 4; h++) {
      var f = r.getX(h), g = r.getY(h), d = f !== l, _ = g !== c;
      if (d === _)
        return !1;
      l = f, c = g;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var r = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, o) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!r._holes[c].equalsExact(a._holes[c], o))
          return !1;
      return !0;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var r = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var s = 0; s < this._holes.length; s++)
        r.normalize(r._holes[s], !1);
      Cr.sort(this._holes);
    } else if (arguments.length === 2) {
      var o = arguments[0], a = arguments[1];
      if (o.isEmpty())
        return null;
      var u = new Array(o.getCoordinates().length - 1).fill(null);
      ne.arraycopy(o.getCoordinates(), 0, u, 0, u.length);
      var l = $.minCoordinate(o.getCoordinates());
      $.scroll(u, l), ne.arraycopy(u, 0, o.getCoordinates(), 0, u.length), o.getCoordinates()[u.length] = u[0], k.isCCW(o.getCoordinates()) === a && $.reverse(o.getCoordinates());
    }
  }, t.prototype.getCoordinate = function() {
    return this._shell.getCoordinate();
  }, t.prototype.getNumInteriorRing = function() {
    return this._holes.length;
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.getLength = function() {
    var r = this, s = 0;
    s += this._shell.getLength();
    for (var o = 0; o < this._holes.length; o++)
      s += r._holes[o].getLength();
    return s;
  }, t.prototype.getNumPoints = function() {
    for (var r = this, s = this._shell.getNumPoints(), o = 0; o < this._holes.length; o++)
      s += r._holes[o].getNumPoints();
    return s;
  }, t.prototype.reverse = function() {
    var r = this, s = this.copy();
    s._shell = this._shell.copy().reverse(), s._holes = new Array(this._holes.length).fill(null);
    for (var o = 0; o < this._holes.length; o++)
      s._holes[o] = r._holes[o].copy().reverse();
    return s;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var r = this;
    if (arguments.length === 1) {
      var s = arguments[0], o = this._shell, a = s._shell;
      return o.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, h = this._shell, f = c._shell, g = h.compareToSameClass(f, l);
      if (g !== 0)
        return g;
      for (var d = this.getNumInteriorRing(), _ = c.getNumInteriorRing(), p = 0; p < d && p < _; ) {
        var m = r.getInteriorRingN(p), y = c.getInteriorRingN(p), v = m.compareToSameClass(y, l);
        if (v !== 0)
          return v;
        p++;
      }
      return p < d ? 1 : p < _ ? -1 : 0;
    }
  }, t.prototype.apply = function(r) {
    var s = this;
    if (q(r, ai)) {
      this._shell.apply(r);
      for (var o = 0; o < this._holes.length; o++)
        s._holes[o].apply(r);
    } else if (q(r, dn)) {
      if (this._shell.apply(r), !r.isDone())
        for (var a = 0; a < this._holes.length && (s._holes[a].apply(r), !r.isDone()); a++)
          ;
      r.isGeometryChanged() && this.geometryChanged();
    } else if (q(r, Bn))
      r.filter(this);
    else if (q(r, bi)) {
      r.filter(this), this._shell.apply(r);
      for (var u = 0; u < this._holes.length; u++)
        s._holes[u].apply(r);
    }
  }, t.prototype.getBoundary = function() {
    var r = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var s = new Array(this._holes.length + 1).fill(null);
    s[0] = this._shell;
    for (var o = 0; o < this._holes.length; o++)
      s[o + 1] = r._holes[o];
    return s.length <= 1 ? this.getFactory().createLinearRing(s[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(s);
  }, t.prototype.clone = function() {
    var r = this, s = i.prototype.clone.call(this);
    s._shell = this._shell.clone(), s._holes = new Array(this._holes.length).fill(null);
    for (var o = 0; o < this._holes.length; o++)
      s._holes[o] = r._holes[o].clone();
    return s;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var r = this, s = this._shell.copy(), o = new Array(this._holes.length).fill(null), a = 0; a < o.length; a++)
      o[a] = r._holes[a].copy();
    return new t(s, o, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(r) {
    return this._holes[r];
  }, t.prototype.interfaces_ = function() {
    return [ji];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(W), $s = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return this.isEquivalentClass(r) ? i.prototype.equalsExact.call(this, r, s) : !1;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      return this._geometries[r].getCoordinate();
    } else
      return i.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return it.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [ia];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ve), ui = function(i) {
  function t(n, r) {
    n instanceof x && r instanceof Q && (n = r.getCoordinateSequenceFactory().create(n)), i.call(this, n, r), this.validateConstruction();
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return it.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : i.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var r = this._points.copy();
    bt.reverse(r);
    var s = this.getFactory().createLinearRing(r);
    return s;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !i.prototype.isClosed.call(this))
      throw new vt("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new vt("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
  }, t.prototype.getGeometryType = function() {
    return "LinearRing";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.MINIMUM_VALID_SIZE.get = function() {
    return 4;
  }, e.serialVersionUID.get = function() {
    return -4261142084085851600;
  }, Object.defineProperties(t, e), t;
}(St), ri = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return this.isEquivalentClass(r) ? i.prototype.equalsExact.call(this, r, s) : !1;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var r = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[a] = r._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(o);
  }, t.prototype.getBoundary = function() {
    var r = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var s = new D(), o = 0; o < this._geometries.length; o++)
      for (var a = r._geometries[o], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        s.add(u.getGeometryN(l));
    var c = new Array(s.size()).fill(null);
    return this.getFactory().createMultiLineString(s.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [ji];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ve), nn = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, Au = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
nn.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
nn.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
nn.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ve ? this.editGeometryCollection(t, e) : t instanceof Vt ? this.editPolygon(t, e) : t instanceof Ae ? e.edit(t, this._factory) : t instanceof St ? e.edit(t, this._factory) : (J.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
nn.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, r = e.edit(t, this._factory), s = new D(), o = 0; o < r.getNumGeometries(); o++) {
    var a = n.edit(r.getGeometryN(o), e);
    a === null || a.isEmpty() || s.add(a);
  }
  return r.getClass() === $s ? this._factory.createMultiPoint(s.toArray([])) : r.getClass() === Lr ? this._factory.createMultiLineString(s.toArray([])) : r.getClass() === ri ? this._factory.createMultiPolygon(s.toArray([])) : this._factory.createGeometryCollection(s.toArray([]));
};
nn.prototype.editPolygon = function(t, e) {
  var n = this, r = e.edit(t, this._factory);
  if (r === null && (r = this._factory.createPolygon(null)), r.isEmpty())
    return r;
  var s = this.edit(r.getExteriorRing(), e);
  if (s === null || s.isEmpty())
    return this._factory.createPolygon();
  for (var o = new D(), a = 0; a < r.getNumInteriorRing(); a++) {
    var u = n.edit(r.getInteriorRingN(a), e);
    u === null || u.isEmpty() || o.add(u);
  }
  return this._factory.createPolygon(s, o.toArray([]));
};
nn.prototype.interfaces_ = function() {
  return [];
};
nn.prototype.getClass = function() {
  return nn;
};
nn.GeometryEditorOperation = function() {
};
Au.NoOpGeometryOperation.get = function() {
  return ra;
};
Au.CoordinateOperation.get = function() {
  return sa;
};
Au.CoordinateSequenceOperation.get = function() {
  return oa;
};
Object.defineProperties(nn, Au);
var ra = function() {
};
ra.prototype.edit = function(t, e) {
  return t;
};
ra.prototype.interfaces_ = function() {
  return [nn.GeometryEditorOperation];
};
ra.prototype.getClass = function() {
  return ra;
};
var sa = function() {
};
sa.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof ui ? e.createLinearRing(n) : t instanceof St ? e.createLineString(n) : t instanceof Ae ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
sa.prototype.interfaces_ = function() {
  return [nn.GeometryEditorOperation];
};
sa.prototype.getClass = function() {
  return sa;
};
var oa = function() {
};
oa.prototype.edit = function(t, e) {
  return t instanceof ui ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof St ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof Ae ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
oa.prototype.interfaces_ = function() {
  return [nn.GeometryEditorOperation];
};
oa.prototype.getClass = function() {
  return oa;
};
var Nt = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var n = 0; n < e; n++)
        t._coordinates[n] = new x();
    } else if (q(arguments[0], et)) {
      var r = arguments[0];
      if (r === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = r.getDimension(), this._coordinates = new Array(r.size()).fill(null);
      for (var s = 0; s < this._coordinates.length; s++)
        t._coordinates[s] = r.getCoordinateCopy(s);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var o = arguments[0], a = arguments[1];
      this._coordinates = o, this._dimension = a, o === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new x();
    }
  }
}, xg = { serialVersionUID: { configurable: !0 } };
Nt.prototype.setOrdinate = function(t, e, n) {
  switch (e) {
    case et.X:
      this._coordinates[t].x = n;
      break;
    case et.Y:
      this._coordinates[t].y = n;
      break;
    case et.Z:
      this._coordinates[t].z = n;
      break;
    default:
      throw new vt("invalid ordinateIndex");
  }
};
Nt.prototype.size = function() {
  return this._coordinates.length;
};
Nt.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case et.X:
      return this._coordinates[t].x;
    case et.Y:
      return this._coordinates[t].y;
    case et.Z:
      return this._coordinates[t].z;
  }
  return H.NaN;
};
Nt.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z;
  }
};
Nt.prototype.getCoordinateCopy = function(t) {
  return new x(this._coordinates[t]);
};
Nt.prototype.getDimension = function() {
  return this._dimension;
};
Nt.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
Nt.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].clone();
  return new Nt(e, this._dimension);
};
Nt.prototype.expandEnvelope = function(t) {
  for (var e = this, n = 0; n < this._coordinates.length; n++)
    t.expandToInclude(e._coordinates[n]);
  return t;
};
Nt.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].copy();
  return new Nt(e, this._dimension);
};
Nt.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new Hn(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var n = 1; n < this._coordinates.length; n++)
      e.append(", "), e.append(t._coordinates[n]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
Nt.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
Nt.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
Nt.prototype.interfaces_ = function() {
  return [et, on];
};
Nt.prototype.getClass = function() {
  return Nt;
};
xg.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(Nt, xg);
var li = function() {
}, cc = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
li.prototype.readResolve = function() {
  return li.instance();
};
li.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new Nt(t);
    } else if (q(arguments[0], et)) {
      var e = arguments[0];
      return new Nt(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return r > 3 && (r = 3), r < 2 ? new Nt(n) : new Nt(n, r);
  }
};
li.prototype.interfaces_ = function() {
  return [Hs, on];
};
li.prototype.getClass = function() {
  return li;
};
li.instance = function() {
  return li.instanceObject;
};
cc.serialVersionUID.get = function() {
  return -4099577099607551500;
};
cc.instanceObject.get = function() {
  return new li();
};
Object.defineProperties(li, cc);
var Cg = function(i) {
  function t() {
    i.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.get = function(n) {
    return this.map_.get(n) || null;
  }, t.prototype.put = function(n, r) {
    return this.map_.set(n, r), r;
  }, t.prototype.values = function() {
    for (var n = new D(), r = this.map_.values(), s = r.next(); !s.done; )
      n.add(s.value), s = r.next();
    return n;
  }, t.prototype.entrySet = function() {
    var n = new uc();
    return this.map_.entries().forEach(function(r) {
      return n.add(r);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(Is), st = function i() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = i.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof zn) {
      var t = arguments[0];
      this._modelType = t, t === i.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = i.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof i) {
      var n = arguments[0];
      this._modelType = n._modelType, this._scale = n._scale;
    }
  }
}, hc = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
st.prototype.equals = function(t) {
  if (!(t instanceof st))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
st.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), r = e.getMaximumSignificantDigits();
  return new kn(n).compareTo(new kn(r));
};
st.prototype.getScale = function() {
  return this._scale;
};
st.prototype.isFloating = function() {
  return this._modelType === st.FLOATING || this._modelType === st.FLOATING_SINGLE;
};
st.prototype.getType = function() {
  return this._modelType;
};
st.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === st.FLOATING ? t = "Floating" : this._modelType === st.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === st.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
st.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (H.isNaN(t))
      return t;
    if (this._modelType === st.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === st.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof x) {
    var n = arguments[0];
    if (this._modelType === st.FLOATING)
      return null;
    n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
  }
};
st.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === st.FLOATING ? t = 16 : this._modelType === st.FLOATING_SINGLE ? t = 6 : this._modelType === st.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
st.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
st.prototype.interfaces_ = function() {
  return [on, sn];
};
st.prototype.getClass = function() {
  return st;
};
st.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
hc.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
hc.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(st, hc);
var zn = function i(t) {
  this._name = t || null, i.nameToTypeMap.put(t, this);
}, fc = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
zn.prototype.readResolve = function() {
  return zn.nameToTypeMap.get(this._name);
};
zn.prototype.toString = function() {
  return this._name;
};
zn.prototype.interfaces_ = function() {
  return [on];
};
zn.prototype.getClass = function() {
  return zn;
};
fc.serialVersionUID.get = function() {
  return -552860263173159e4;
};
fc.nameToTypeMap.get = function() {
  return new Cg();
};
Object.defineProperties(zn, fc);
st.Type = zn;
st.FIXED = new zn("FIXED");
st.FLOATING = new zn("FLOATING");
st.FLOATING_SINGLE = new zn("FLOATING SINGLE");
var Q = function i() {
  this._precisionModel = new st(), this._SRID = 0, this._coordinateSequenceFactory = i.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? q(arguments[0], Hs) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof st && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, Ig = { serialVersionUID: { configurable: !0 } };
Q.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new x(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new x(t.getMinX(), t.getMinY()), new x(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new x(t.getMinX(), t.getMinY()), new x(t.getMinX(), t.getMaxY()), new x(t.getMaxX(), t.getMaxY()), new x(t.getMaxX(), t.getMinY()), new x(t.getMinX(), t.getMinY())]), null);
};
Q.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new St(this.getCoordinateSequenceFactory().create(t), this);
    if (q(t, et))
      return new St(t, this);
  } else
    return new St(this.getCoordinateSequenceFactory().create([]), this);
};
Q.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Lr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Lr(t, this);
  }
};
Q.prototype.buildGeometry = function(t) {
  for (var e = null, n = !1, r = !1, s = t.iterator(); s.hasNext(); ) {
    var o = s.next(), a = o.getClass();
    e === null && (e = a), a !== e && (n = !0), o.isGeometryCollectionOrDerived() && (r = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (n || r)
    return this.createGeometryCollection(Q.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Vt)
      return this.createMultiPolygon(Q.toPolygonArray(t));
    if (u instanceof St)
      return this.createMultiLineString(Q.toLineStringArray(t));
    if (u instanceof Ae)
      return this.createMultiPoint(Q.toPointArray(t));
    J.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
Q.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
Q.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof x) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (q(arguments[0], et)) {
      var e = arguments[0];
      return new Ae(e, this);
    }
  }
};
Q.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
Q.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Vt(null, null, this);
  if (arguments.length === 1) {
    if (q(arguments[0], et)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof ui) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    return new Vt(r, s, this);
  }
};
Q.prototype.getSRID = function() {
  return this._SRID;
};
Q.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new ve(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new ve(t, this);
  }
};
Q.prototype.createGeometry = function(t) {
  var e = new nn(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var n = arguments[0];
        return this._coordinateSequenceFactory.create(n);
      }
    }
  });
};
Q.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
Q.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (q(arguments[0], et)) {
      var e = arguments[0];
      return new ui(e, this);
    }
  }
};
Q.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new ri(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new ri(t, this);
  }
};
Q.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new $s(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new $s(e, this);
    } else if (arguments[0] instanceof Array) {
      var n = arguments[0];
      return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
    } else if (q(arguments[0], et)) {
      var r = arguments[0];
      if (r === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var s = new Array(r.size()).fill(null), o = 0; o < r.size(); o++) {
        var a = t.getCoordinateSequenceFactory().create(1, r.getDimension());
        bt.copy(r, o, a, 0, 1), s[o] = t.createPoint(a);
      }
      return this.createMultiPoint(s);
    }
  }
};
Q.prototype.interfaces_ = function() {
  return [on];
};
Q.prototype.getClass = function() {
  return Q;
};
Q.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.getDefaultCoordinateSequenceFactory = function() {
  return li.instance();
};
Q.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
Q.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
Ig.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(Q, Ig);
var nv = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Du = function(t) {
  this.geometryFactory = t || new Q();
};
Du.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!Pn[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return nv.indexOf(n) !== -1 ? Pn[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? Pn[n].apply(this, [e.geometries]) : Pn[n].apply(this, [e]);
};
Du.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!Ei[e])
    throw new Error("Geometry is not supported");
  return Ei[e].apply(this, [t]);
};
var Pn = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(i) {
    var t = {};
    for (var e in i)
      t[e] = i[e];
    if (i.geometry) {
      var n = i.geometry.type;
      if (!Pn[n])
        throw new Error("Unknown GeoJSON type: " + i.type);
      t.geometry = this.read(i.geometry);
    }
    return i.bbox && (t.bbox = Pn.bbox.apply(this, [i.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(i) {
    var t = this, e = {};
    if (i.features) {
      e.features = [];
      for (var n = 0; n < i.features.length; ++n)
        e.features.push(t.read(i.features[n]));
    }
    return i.bbox && (e.bbox = this.parse.bbox.apply(this, [i.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(i) {
    for (var t = [], e = 0; e < i.length; ++e) {
      var n = i[e];
      t.push(new x(n[0], n[1]));
    }
    return t;
  },
  /**
   * Convert the bbox to a LinearRing
   *
   * @param {Array}
   *          array Array with [xMin, yMin, xMax, yMax].
   *
   * @return {Array} Array with Coordinates.
   */
  bbox: function(i) {
    return this.geometryFactory.createLinearRing([
      new x(i[0], i[1]),
      new x(i[2], i[1]),
      new x(i[2], i[3]),
      new x(i[0], i[3]),
      new x(i[0], i[1])
    ]);
  },
  /**
   * Convert an Array with ordinates to a Point
   *
   * @param {Array}
   *          array Array with ordinates.
   *
   * @return {Point} Point.
   */
  Point: function(i) {
    var t = new x(i[0], i[1]);
    return this.geometryFactory.createPoint(t);
  },
  /**
   * Convert an Array with coordinates to a MultiPoint
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiPoint} MultiPoint.
   */
  MultiPoint: function(i) {
    for (var t = this, e = [], n = 0; n < i.length; ++n)
      e.push(Pn.Point.apply(t, [i[n]]));
    return this.geometryFactory.createMultiPoint(e);
  },
  /**
   * Convert an Array with coordinates to a LineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {LineString} LineString.
   */
  LineString: function(i) {
    var t = Pn.coordinates.apply(this, [i]);
    return this.geometryFactory.createLineString(t);
  },
  /**
   * Convert an Array with coordinates to a MultiLineString
   *
   * @param {Array}
   *          array Array with coordinates.
   *
   * @return {MultiLineString} MultiLineString.
   */
  MultiLineString: function(i) {
    for (var t = this, e = [], n = 0; n < i.length; ++n)
      e.push(Pn.LineString.apply(t, [i[n]]));
    return this.geometryFactory.createMultiLineString(e);
  },
  /**
   * Convert an Array to a Polygon
   *
   * @param {Array}
   *          array Array with shell and holes.
   *
   * @return {Polygon} Polygon.
   */
  Polygon: function(i) {
    for (var t = this, e = Pn.coordinates.apply(this, [i[0]]), n = this.geometryFactory.createLinearRing(e), r = [], s = 1; s < i.length; ++s) {
      var o = i[s], a = Pn.coordinates.apply(t, [o]), u = t.geometryFactory.createLinearRing(a);
      r.push(u);
    }
    return this.geometryFactory.createPolygon(n, r);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(i) {
    for (var t = this, e = [], n = 0; n < i.length; ++n) {
      var r = i[n];
      e.push(Pn.Polygon.apply(t, [r]));
    }
    return this.geometryFactory.createMultiPolygon(e);
  },
  /**
   * Convert an Array to a GeometryCollection
   *
   * @param {Array}
   *          array Array of GeoJSON geometries.
   *
   * @return {GeometryCollection} GeometryCollection.
   */
  GeometryCollection: function(i) {
    for (var t = this, e = [], n = 0; n < i.length; ++n) {
      var r = i[n];
      e.push(t.read(r));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, Ei = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(i) {
    return [i.x, i.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(i) {
    var t = Ei.coordinate.apply(this, [i.getCoordinate()]);
    return {
      type: "Point",
      coordinates: t
    };
  },
  /**
   * Convert a MultiPoint to a GeoJSON object
   *
   * @param {MultiPoint}
   *          multipoint MultiPoint to convert.
   *
   * @return {Array} Array of coordinates.
   */
  MultiPoint: function(i) {
    for (var t = this, e = [], n = 0; n < i._geometries.length; ++n) {
      var r = i._geometries[n], s = Ei.Point.apply(t, [r]);
      e.push(s.coordinates);
    }
    return {
      type: "MultiPoint",
      coordinates: e
    };
  },
  /**
   * Convert a LineString to a GeoJSON object
   *
   * @param {LineString}
   *          linestring LineString to convert.
   *
   * @return {Array} Array of coordinates.
   */
  LineString: function(i) {
    for (var t = this, e = [], n = i.getCoordinates(), r = 0; r < n.length; ++r) {
      var s = n[r];
      e.push(Ei.coordinate.apply(t, [s]));
    }
    return {
      type: "LineString",
      coordinates: e
    };
  },
  /**
   * Convert a MultiLineString to a GeoJSON object
   *
   * @param {MultiLineString}
   *          multilinestring MultiLineString to convert.
   *
   * @return {Array} Array of Array of coordinates.
   */
  MultiLineString: function(i) {
    for (var t = this, e = [], n = 0; n < i._geometries.length; ++n) {
      var r = i._geometries[n], s = Ei.LineString.apply(t, [r]);
      e.push(s.coordinates);
    }
    return {
      type: "MultiLineString",
      coordinates: e
    };
  },
  /**
   * Convert a Polygon to a GeoJSON object
   *
   * @param {Polygon}
   *          polygon Polygon to convert.
   *
   * @return {Array} Array with shell, holes.
   */
  Polygon: function(i) {
    var t = this, e = [], n = Ei.LineString.apply(this, [i._shell]);
    e.push(n.coordinates);
    for (var r = 0; r < i._holes.length; ++r) {
      var s = i._holes[r], o = Ei.LineString.apply(t, [s]);
      e.push(o.coordinates);
    }
    return {
      type: "Polygon",
      coordinates: e
    };
  },
  /**
   * Convert a MultiPolygon to a GeoJSON object
   *
   * @param {MultiPolygon}
   *          multipolygon MultiPolygon to convert.
   *
   * @return {Array} Array of polygons.
   */
  MultiPolygon: function(i) {
    for (var t = this, e = [], n = 0; n < i._geometries.length; ++n) {
      var r = i._geometries[n], s = Ei.Polygon.apply(t, [r]);
      e.push(s.coordinates);
    }
    return {
      type: "MultiPolygon",
      coordinates: e
    };
  },
  /**
   * Convert a GeometryCollection to a GeoJSON object
   *
   * @param {GeometryCollection}
   *          collection GeometryCollection to convert.
   *
   * @return {Array} Array of geometries.
   */
  GeometryCollection: function(i) {
    for (var t = this, e = [], n = 0; n < i._geometries.length; ++n) {
      var r = i._geometries[n], s = r.getGeometryType();
      e.push(Ei[s].apply(t, [r]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, gc = function(t) {
  this.geometryFactory = t || new Q(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new Du(this.geometryFactory);
};
gc.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === st.FIXED && this.reducePrecision(e), e;
};
gc.prototype.reducePrecision = function(t) {
  var e = this, n, r;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (n = 0, r = t.points.length; n < r; n++)
      e.precisionModel.makePrecise(t.points[n]);
  else if (t.geometries)
    for (n = 0, r = t.geometries.length; n < r; n++)
      e.reducePrecision(t.geometries[n]);
};
var Sg = function() {
  this.parser = new Du(this.geometryFactory);
};
Sg.prototype.write = function(t) {
  return this.parser.write(t);
};
var T = function() {
}, Fu = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
T.prototype.interfaces_ = function() {
  return [];
};
T.prototype.getClass = function() {
  return T;
};
T.opposite = function(t) {
  return t === T.LEFT ? T.RIGHT : t === T.RIGHT ? T.LEFT : t;
};
Fu.ON.get = function() {
  return 0;
};
Fu.LEFT.get = function() {
  return 1;
};
Fu.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(T, Fu);
function ku(i) {
  this.message = i || "";
}
ku.prototype = new Error();
ku.prototype.name = "EmptyStackException";
function jn() {
  this.array_ = [];
}
jn.prototype = new fn();
jn.prototype.add = function(i) {
  return this.array_.push(i), !0;
};
jn.prototype.get = function(i) {
  if (i < 0 || i >= this.size())
    throw new Error();
  return this.array_[i];
};
jn.prototype.push = function(i) {
  return this.array_.push(i), i;
};
jn.prototype.pop = function(i) {
  if (this.array_.length === 0)
    throw new ku();
  return this.array_.pop();
};
jn.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new ku();
  return this.array_[this.array_.length - 1];
};
jn.prototype.empty = function() {
  return this.array_.length === 0;
};
jn.prototype.isEmpty = function() {
  return this.empty();
};
jn.prototype.search = function(i) {
  return this.array_.indexOf(i);
};
jn.prototype.size = function() {
  return this.array_.length;
};
jn.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
var Vn = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
Vn.prototype.getCoordinate = function() {
  return this._minCoord;
};
Vn.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
Vn.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  J.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], r = k.computeOrientation(this._minCoord, n, e), s = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && r === k.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && r === k.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
};
Vn.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), r = n.getCoordinates();
  if (e < 0 || e + 1 >= r.length || r[e].y === r[e + 1].y)
    return -1;
  var s = T.LEFT;
  return r[e].y < r[e + 1].y && (s = T.RIGHT), s;
};
Vn.prototype.getEdge = function() {
  return this._orientedDe;
};
Vn.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), r = 0; r < n.length - 1; r++)
    (e._minCoord === null || n[r].x > e._minCoord.x) && (e._minDe = t, e._minIndex = r, e._minCoord = n[r]);
};
Vn.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
Vn.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.isForward() && e.checkForRightmostCoordinate(r);
  }
  J.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var s = this.getRightmostSide(this._minDe, this._minIndex);
  s === T.LEFT && (this._orientedDe = this._minDe.getSym());
};
Vn.prototype.interfaces_ = function() {
  return [];
};
Vn.prototype.getClass = function() {
  return Vn;
};
var Pi = function(i) {
  function t(e, n) {
    i.call(this, t.msgWithCoord(e, n)), this.pt = n ? new x(n) : null, this.name = "TopologyException";
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(n, r) {
    return r ? n : n + " [ " + r + " ]";
  }, t;
}(Li), Gu = function() {
  this.array_ = [];
};
Gu.prototype.addLast = function(t) {
  this.array_.push(t);
};
Gu.prototype.removeFirst = function() {
  return this.array_.shift();
};
Gu.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var Ee = function() {
  this._finder = null, this._dirEdgeList = new D(), this._nodes = new D(), this._rightMostCoord = null, this._env = null, this._finder = new Vn();
};
Ee.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
Ee.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
Ee.prototype.computeNodeDepth = function(t) {
  for (var e = this, n = null, r = t.getEdges().iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.isVisited() || s.getSym().isVisited()) {
      n = s;
      break;
    }
  }
  if (n === null)
    throw new Pi("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(n);
  for (var o = t.getEdges().iterator(); o.hasNext(); ) {
    var a = o.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
Ee.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(T.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
Ee.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
Ee.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(T.RIGHT) >= 1 && e.getDepth(T.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
Ee.prototype.computeDepths = function(t) {
  var e = this, n = new uc(), r = new Gu(), s = t.getNode();
  for (r.addLast(s), n.add(s), t.setVisited(!0); !r.isEmpty(); ) {
    var o = r.removeFirst();
    n.add(o), e.computeNodeDepth(o);
    for (var a = o.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        n.contains(c) || (r.addLast(c), n.add(c));
      }
    }
  }
};
Ee.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
Ee.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new Y(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var n = e.next(), r = n.getEdge().getCoordinates(), s = 0; s < r.length - 1; s++)
        t.expandToInclude(r[s]);
    this._env = t;
  }
  return this._env;
};
Ee.prototype.addReachable = function(t) {
  var e = this, n = new jn();
  for (n.add(t); !n.empty(); ) {
    var r = n.pop();
    e.add(r, n);
  }
};
Ee.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(T.LEFT, t.getDepth(T.RIGHT)), e.setDepth(T.RIGHT, t.getDepth(T.LEFT));
};
Ee.prototype.add = function(t, e) {
  var n = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var r = t.getEdges().iterator(); r.hasNext(); ) {
    var s = r.next();
    n._dirEdgeList.add(s);
    var o = s.getSym(), a = o.getNode();
    a.isVisited() || e.push(a);
  }
};
Ee.prototype.getNodes = function() {
  return this._nodes;
};
Ee.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
Ee.prototype.interfaces_ = function() {
  return [sn];
};
Ee.prototype.getClass = function() {
  return Ee;
};
var gt = function i() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var n = arguments[0];
      this.init(1), this.location[T.ON] = n;
    } else if (arguments[0] instanceof i) {
      var r = arguments[0];
      if (this.init(r.location.length), r !== null)
        for (var s = 0; s < this.location.length; s++)
          t.location[s] = r.location[s];
    }
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[T.ON] = o, this.location[T.LEFT] = a, this.location[T.RIGHT] = u;
  }
};
gt.prototype.setAllLocations = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] = t;
};
gt.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== I.NONE)
      return !1;
  return !0;
};
gt.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === I.NONE && (e.location[n] = t);
};
gt.prototype.isLine = function() {
  return this.location.length === 1;
};
gt.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[T.ON] = this.location[T.ON], n[T.LEFT] = I.NONE, n[T.RIGHT] = I.NONE, this.location = n;
  }
  for (var r = 0; r < this.location.length; r++)
    e.location[r] === I.NONE && r < t.location.length && (e.location[r] = t.location[r]);
};
gt.prototype.getLocations = function() {
  return this.location;
};
gt.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[T.LEFT];
  this.location[T.LEFT] = this.location[T.RIGHT], this.location[T.RIGHT] = t;
};
gt.prototype.toString = function() {
  var t = new Hn();
  return this.location.length > 1 && t.append(I.toLocationSymbol(this.location[T.LEFT])), t.append(I.toLocationSymbol(this.location[T.ON])), this.location.length > 1 && t.append(I.toLocationSymbol(this.location[T.RIGHT])), t.toString();
};
gt.prototype.setLocations = function(t, e, n) {
  this.location[T.ON] = t, this.location[T.LEFT] = e, this.location[T.RIGHT] = n;
};
gt.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : I.NONE;
};
gt.prototype.isArea = function() {
  return this.location.length > 1;
};
gt.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === I.NONE)
      return !0;
  return !1;
};
gt.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(T.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.location[e] = n;
  }
};
gt.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(I.NONE);
};
gt.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
gt.prototype.allPositionsEqual = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    if (e.location[n] !== t)
      return !1;
  return !0;
};
gt.prototype.interfaces_ = function() {
  return [];
};
gt.prototype.getClass = function() {
  return gt;
};
var at = function i() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new gt(t), this.elt[1] = new gt(t);
    } else if (arguments[0] instanceof i) {
      var e = arguments[0];
      this.elt[0] = new gt(e.elt[0]), this.elt[1] = new gt(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this.elt[0] = new gt(I.NONE), this.elt[1] = new gt(I.NONE), this.elt[n].setLocation(r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    this.elt[0] = new gt(s, o, a), this.elt[1] = new gt(s, o, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], h = arguments[3];
    this.elt[0] = new gt(I.NONE, I.NONE, I.NONE), this.elt[1] = new gt(I.NONE, I.NONE, I.NONE), this.elt[u].setLocations(l, c, h);
  }
};
at.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
at.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
at.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
at.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.elt[e].setAllLocationsIfNull(n);
  }
};
at.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
at.prototype.merge = function(t) {
  for (var e = this, n = 0; n < 2; n++)
    e.elt[n] === null && t.elt[n] !== null ? e.elt[n] = new gt(t.elt[n]) : e.elt[n].merge(t.elt[n]);
};
at.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
at.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(T.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.elt[e].get(n);
  }
};
at.prototype.toString = function() {
  var t = new Hn();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
at.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
at.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
at.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(T.ON, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this.elt[n].setLocation(r, s);
  }
};
at.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
at.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
at.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new gt(this.elt[t].location[0]));
};
at.prototype.interfaces_ = function() {
  return [];
};
at.prototype.getClass = function() {
  return at;
};
at.toLineLabel = function(t) {
  for (var e = new at(I.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var At = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new D(), this._pts = new D(), this._label = new at(I.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new D(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
At.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++)
    e[n] = t._pts.get(n);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = k.isCCW(this._ring.getCoordinates());
};
At.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
At.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var n = t, r = !0;
  do {
    if (n === null)
      throw new Pi("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new Pi("Directed Edge visited twice during ring-building at " + n.getCoordinate());
    e._edges.add(n);
    var s = n.getLabel();
    J.isTrue(s.isArea()), e.mergeLabel(s), e.addPoints(n.getEdge(), n.isForward(), r), r = !1, e.setEdgeRing(n, e), n = e.getNext(n);
  } while (n !== this._startDe);
};
At.prototype.getLinearRing = function() {
  return this._ring;
};
At.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
At.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var n = e.getNode(), r = n.getEdges().getOutgoingDegree(t);
    r > t._maxNodeDegree && (t._maxNodeDegree = r), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
At.prototype.addPoints = function(t, e, n) {
  var r = this, s = t.getCoordinates();
  if (e) {
    var o = 1;
    n && (o = 0);
    for (var a = o; a < s.length; a++)
      r._pts.add(s[a]);
  } else {
    var u = s.length - 2;
    n && (u = s.length - 1);
    for (var l = u; l >= 0; l--)
      r._pts.add(s[l]);
  }
};
At.prototype.isHole = function() {
  return this._isHole;
};
At.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
At.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), n = e.getEnvelopeInternal();
  if (!n.contains(t) || !k.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var r = this._holes.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.containsPoint(t))
      return !1;
  }
  return !0;
};
At.prototype.addHole = function(t) {
  this._holes.add(t);
};
At.prototype.isShell = function() {
  return this._shell === null;
};
At.prototype.getLabel = function() {
  return this._label;
};
At.prototype.getEdges = function() {
  return this._edges;
};
At.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
At.prototype.getShell = function() {
  return this._shell;
};
At.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = e.getLocation(n, T.RIGHT);
    if (r === I.NONE)
      return null;
    if (this._label.getLocation(n) === I.NONE)
      return this._label.setLocation(n, r), null;
  }
};
At.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
At.prototype.toPolygon = function(t) {
  for (var e = this, n = new Array(this._holes.size()).fill(null), r = 0; r < this._holes.size(); r++)
    n[r] = e._holes.get(r).getLinearRing();
  var s = t.createPolygon(this.getLinearRing(), n);
  return s;
};
At.prototype.interfaces_ = function() {
  return [];
};
At.prototype.getClass = function() {
  return At;
};
var iv = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(n, r) {
    n.setMinEdgeRing(r);
  }, t.prototype.getNext = function(n) {
    return n.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(At), rv = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, r = new D(), s = this._startDe;
    do {
      if (s.getMinEdgeRing() === null) {
        var o = new iv(s, n._geometryFactory);
        r.add(o);
      }
      s = s.getNext();
    } while (s !== this._startDe);
    return r;
  }, t.prototype.setEdgeRing = function(n, r) {
    n.setEdgeRing(r);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var n = this, r = this._startDe;
    do {
      var s = r.getNode();
      s.getEdges().linkMinimalDirectedEdges(n), r = r.getNext();
    } while (r !== this._startDe);
  }, t.prototype.getNext = function(n) {
    return n.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(At), Ye = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Ye.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Ye.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Ye.prototype.isCovered = function() {
  return this._isCovered;
};
Ye.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Ye.prototype.setLabel = function(t) {
  this._label = t;
};
Ye.prototype.getLabel = function() {
  return this._label;
};
Ye.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Ye.prototype.updateIM = function(t) {
  J.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Ye.prototype.isInResult = function() {
  return this._isInResult;
};
Ye.prototype.isVisited = function() {
  return this._isVisited;
};
Ye.prototype.interfaces_ = function() {
  return [];
};
Ye.prototype.getClass = function() {
  return Ye;
};
var Bu = function(i) {
  function t() {
    i.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new at(0, I.NONE);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); ) {
      var r = n.next();
      if (r.getEdge().isInResult())
        return !0;
    }
    return !1;
  }, t.prototype.isIsolated = function() {
    return this._label.getGeometryCount() === 1;
  }, t.prototype.getCoordinate = function() {
    return this._coord;
  }, t.prototype.print = function(n) {
    n.println("node " + this._coord + " lbl: " + this._label);
  }, t.prototype.computeIM = function(n) {
  }, t.prototype.computeMergedLocation = function(n, r) {
    var s = I.NONE;
    if (s = this._label.getLocation(r), !n.isNull(r)) {
      var o = n.getLocation(r);
      s !== I.BOUNDARY && (s = o);
    }
    return s;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      this._label === null ? this._label = new at(n, r) : this._label.setLocation(n, r);
    } else
      return i.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var n = this;
    if (arguments[0] instanceof t) {
      var r = arguments[0];
      this.mergeLabel(r._label);
    } else if (arguments[0] instanceof at)
      for (var s = arguments[0], o = 0; o < 2; o++) {
        var a = n.computeMergedLocation(s, o), u = n._label.getLocation(o);
        u === I.NONE && n._label.setLocation(o, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var r = I.NONE;
    this._label !== null && (r = this._label.getLocation(n));
    var s = null;
    switch (r) {
      case I.BOUNDARY:
        s = I.INTERIOR;
        break;
      case I.INTERIOR:
        s = I.BOUNDARY;
        break;
      default:
        s = I.BOUNDARY;
        break;
    }
    this._label.setLocation(n, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ye), Xn = function() {
  this.nodeMap = new ue(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
Xn.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
Xn.prototype.addNode = function() {
  if (arguments[0] instanceof x) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof Bu) {
    var n = arguments[0], r = this.nodeMap.get(n.getCoordinate());
    return r === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (r.mergeLabel(n), r);
  }
};
Xn.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Xn.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
Xn.prototype.values = function() {
  return this.nodeMap.values();
};
Xn.prototype.getBoundaryNodes = function(t) {
  for (var e = new D(), n = this.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.getLabel().getLocation(t) === I.BOUNDARY && e.add(r);
  }
  return e;
};
Xn.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
Xn.prototype.interfaces_ = function() {
  return [];
};
Xn.prototype.getClass = function() {
  return Xn;
};
var ct = function() {
}, Ia = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
ct.prototype.interfaces_ = function() {
  return [];
};
ct.prototype.getClass = function() {
  return ct;
};
ct.isNorthern = function(t) {
  return t === ct.NE || t === ct.NW;
};
ct.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var n = (t - e + 4) % 4;
  return n === 2;
};
ct.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var n = (t - e + 4) % 4;
  if (n === 2)
    return -1;
  var r = t < e ? t : e, s = t > e ? t : e;
  return r === 0 && s === 3 ? 3 : r;
};
ct.isInHalfPlane = function(t, e) {
  return e === ct.SE ? t === ct.SE || t === ct.SW : t === e || t === e + 1;
};
ct.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new vt("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? ct.NE : ct.SE : e >= 0 ? ct.NW : ct.SW;
  } else if (arguments[0] instanceof x && arguments[1] instanceof x) {
    var n = arguments[0], r = arguments[1];
    if (r.x === n.x && r.y === n.y)
      throw new vt("Cannot compute the quadrant for two identical points " + n);
    return r.x >= n.x ? r.y >= n.y ? ct.NE : ct.SE : r.y >= n.y ? ct.NW : ct.SW;
  }
};
Ia.NE.get = function() {
  return 0;
};
Ia.NW.get = function() {
  return 1;
};
Ia.SW.get = function() {
  return 2;
};
Ia.SE.get = function() {
  return 3;
};
Object.defineProperties(ct, Ia);
var le = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = null;
    this._edge = e, this.init(n, r), this._label = s;
  } else if (arguments.length === 4) {
    var o = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = o, this.init(a, u), this._label = l;
  }
};
le.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : k.computeOrientation(t._p0, t._p1, this._p1);
};
le.prototype.getDy = function() {
  return this._dy;
};
le.prototype.getCoordinate = function() {
  return this._p0;
};
le.prototype.setNode = function(t) {
  this._node = t;
};
le.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), r = n.lastIndexOf("."), s = n.substring(r + 1);
  t.print("  " + s + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
le.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
le.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
le.prototype.getDx = function() {
  return this._dx;
};
le.prototype.getLabel = function() {
  return this._label;
};
le.prototype.getEdge = function() {
  return this._edge;
};
le.prototype.getQuadrant = function() {
  return this._quadrant;
};
le.prototype.getNode = function() {
  return this._node;
};
le.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf("."), r = e.substring(n + 1);
  return "  " + r + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
le.prototype.computeLabel = function(t) {
};
le.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = ct.quadrant(this._dx, this._dy), J.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
le.prototype.interfaces_ = function() {
  return [sn];
};
le.prototype.getClass = function() {
  return le;
};
var wl = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    if (i.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var r = e.getNumPoints() - 1;
      this.init(e.getCoordinate(r), e.getCoordinate(r - 1));
    }
    this.computeDirectedLabel();
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(n) {
    return this._depth[n];
  }, t.prototype.setVisited = function(n) {
    this._isVisited = n;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new at(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(n, r) {
    if (this._depth[n] !== -999 && this._depth[n] !== r)
      throw new Pi("assigned depths do not match", this.getCoordinate());
    this._depth[n] = r;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, r = !0, s = 0; s < 2; s++)
      n._label.isArea(s) && n._label.getLocation(s, T.LEFT) === I.INTERIOR && n._label.getLocation(s, T.RIGHT) === I.INTERIOR || (r = !1);
    return r;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    i.prototype.print.call(this, n), n.print(" " + this._depth[T.LEFT] + "/" + this._depth[T.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), r = !this._label.isArea(0) || this._label.allPositionsEqual(0, I.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, I.EXTERIOR);
    return n && r && s;
  }, t.prototype.setEdgeRing = function(n) {
    this._edgeRing = n;
  }, t.prototype.getMinEdgeRing = function() {
    return this._minEdgeRing;
  }, t.prototype.getDepthDelta = function() {
    var n = this._edge.getDepthDelta();
    return this._isForward || (n = -n), n;
  }, t.prototype.setInResult = function(n) {
    this._isInResult = n;
  }, t.prototype.getSym = function() {
    return this._sym;
  }, t.prototype.isForward = function() {
    return this._isForward;
  }, t.prototype.getEdge = function() {
    return this._edge;
  }, t.prototype.printEdge = function(n) {
    this.print(n), n.print(" "), this._isForward ? this._edge.print(n) : this._edge.printReverse(n);
  }, t.prototype.setSym = function(n) {
    this._sym = n;
  }, t.prototype.setVisitedEdge = function(n) {
    this.setVisited(n), this._sym.setVisited(n);
  }, t.prototype.setEdgeDepths = function(n, r) {
    var s = this.getEdge().getDepthDelta();
    this._isForward || (s = -s);
    var o = 1;
    n === T.LEFT && (o = -1);
    var a = T.opposite(n), u = s * o, l = r + u;
    this.setDepth(n, r), this.setDepth(a, l);
  }, t.prototype.getEdgeRing = function() {
    return this._edgeRing;
  }, t.prototype.isInResult = function() {
    return this._isInResult;
  }, t.prototype.setNext = function(n) {
    this._next = n;
  }, t.prototype.isVisited = function() {
    return this._isVisited;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.depthFactor = function(n, r) {
    return n === I.EXTERIOR && r === I.INTERIOR ? 1 : n === I.INTERIOR && r === I.EXTERIOR ? -1 : 0;
  }, t;
}(le), to = function() {
};
to.prototype.createNode = function(t) {
  return new Bu(t, null);
};
to.prototype.interfaces_ = function() {
  return [];
};
to.prototype.getClass = function() {
  return to;
};
var Ct = function() {
  if (this._edges = new D(), this._nodes = null, this._edgeEndList = new D(), arguments.length === 0)
    this._nodes = new Xn(new to());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new Xn(t);
  }
};
Ct.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var n = 0; n < this._edges.size(); n++) {
    t.println("edge " + n + ":");
    var r = e._edges.get(n);
    r.print(t), r.eiList.print(t);
  }
};
Ct.prototype.find = function(t) {
  return this._nodes.find(t);
};
Ct.prototype.addNode = function() {
  if (arguments[0] instanceof Bu) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof x) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
Ct.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
Ct.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
Ct.prototype.debugPrintln = function(t) {
  ne.out.println(t);
};
Ct.prototype.isBoundaryNode = function(t, e) {
  var n = this._nodes.find(e);
  if (n === null)
    return !1;
  var r = n.getLabel();
  return r !== null && r.getLocation(t) === I.BOUNDARY;
};
Ct.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
Ct.prototype.matchInSameDirection = function(t, e, n, r) {
  return t.equals(n) ? k.computeOrientation(t, e, r) === k.COLLINEAR && ct.quadrant(t, e) === ct.quadrant(n, r) : !1;
};
Ct.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
Ct.prototype.debugPrint = function(t) {
  ne.out.print(t);
};
Ct.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
Ct.prototype.findEdgeInSameDirection = function(t, e) {
  for (var n = this, r = 0; r < this._edges.size(); r++) {
    var s = n._edges.get(r), o = s.getCoordinates();
    if (n.matchInSameDirection(t, e, o[0], o[1]) || n.matchInSameDirection(t, e, o[o.length - 1], o[o.length - 2]))
      return s;
  }
  return null;
};
Ct.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
Ct.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.getEdge() === t)
      return n;
  }
  return null;
};
Ct.prototype.addEdges = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e._edges.add(r);
    var s = new wl(r, !0), o = new wl(r, !1);
    s.setSym(o), o.setSym(s), e.add(s), e.add(o);
  }
};
Ct.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
Ct.prototype.getNodes = function() {
  return this._nodes.values();
};
Ct.prototype.findEdge = function(t, e) {
  for (var n = this, r = 0; r < this._edges.size(); r++) {
    var s = n._edges.get(r), o = s.getCoordinates();
    if (t.equals(o[0]) && e.equals(o[1]))
      return s;
  }
  return null;
};
Ct.prototype.interfaces_ = function() {
  return [];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().linkResultDirectedEdges();
  }
};
var De = function() {
  this._geometryFactory = null, this._shellList = new D();
  var t = arguments[0];
  this._geometryFactory = t;
};
De.prototype.sortShellsAndHoles = function(t, e, n) {
  for (var r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    s.isHole() ? n.add(s) : e.add(s);
  }
};
De.prototype.computePolygons = function(t) {
  for (var e = this, n = new D(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.toPolygon(e._geometryFactory);
    n.add(o);
  }
  return n;
};
De.prototype.placeFreeHoles = function(t, e) {
  for (var n = this, r = e.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.getShell() === null) {
      var o = n.findEdgeRingContaining(s, t);
      if (o === null)
        throw new Pi("unable to assign hole to a shell", s.getCoordinate(0));
      s.setShell(o);
    }
  }
};
De.prototype.buildMinimalEdgeRings = function(t, e, n) {
  for (var r = this, s = new D(), o = t.iterator(); o.hasNext(); ) {
    var a = o.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = r.findShell(u);
      l !== null ? (r.placePolygonHoles(l, u), e.add(l)) : n.addAll(u);
    } else
      s.add(a);
  }
  return s;
};
De.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.containsPoint(t))
      return !0;
  }
  return !1;
};
De.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, n = new D(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.isInResult() && s.getLabel().isArea() && s.getEdgeRing() === null) {
      var o = new rv(s, e._geometryFactory);
      n.add(o), o.setInResult();
    }
  }
  return n;
};
De.prototype.placePolygonHoles = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.isHole() && r.setShell(t);
  }
};
De.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
De.prototype.findEdgeRingContaining = function(t, e) {
  for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), s = n.getCoordinateN(0), o = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), h = c.getEnvelopeInternal();
    o !== null && (a = o.getLinearRing().getEnvelopeInternal());
    var f = !1;
    h.contains(r) && k.isPointInRing(s, c.getCoordinates()) && (f = !0), f && (o === null || a.contains(h)) && (o = l);
  }
  return o;
};
De.prototype.findShell = function(t) {
  for (var e = 0, n = null, r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    s.isHole() || (n = s, e++);
  }
  return J.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
};
De.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    Ct.linkResultDirectedEdges(n);
    var r = this.buildMaximalEdgeRings(e), s = new D(), o = this.buildMinimalEdgeRings(r, this._shellList, s);
    this.sortShellsAndHoles(o, this._shellList, s), this.placeFreeHoles(this._shellList, s);
  }
};
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
var eo = function() {
};
eo.prototype.getBounds = function() {
};
eo.prototype.interfaces_ = function() {
  return [];
};
eo.prototype.getClass = function() {
  return eo;
};
var pn = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
pn.prototype.getItem = function() {
  return this._item;
};
pn.prototype.getBounds = function() {
  return this._bounds;
};
pn.prototype.interfaces_ = function() {
  return [eo, on];
};
pn.prototype.getClass = function() {
  return pn;
};
var Ti = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new D(), this._items.add(null);
};
Ti.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
Ti.prototype.size = function() {
  return this._size;
};
Ti.prototype.reorder = function(t) {
  for (var e = this, n = null, r = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(r) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, r);
};
Ti.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
Ti.prototype.isEmpty = function() {
  return this._size === 0;
};
Ti.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
Ti.prototype.interfaces_ = function() {
  return [];
};
Ti.prototype.getClass = function() {
  return Ti;
};
var Zi = function() {
};
Zi.prototype.visitItem = function(t) {
};
Zi.prototype.interfaces_ = function() {
  return [];
};
Zi.prototype.getClass = function() {
  return Zi;
};
var rs = function() {
};
rs.prototype.insert = function(t, e) {
};
rs.prototype.remove = function(t, e) {
};
rs.prototype.query = function() {
};
rs.prototype.interfaces_ = function() {
  return [];
};
rs.prototype.getClass = function() {
  return rs;
};
var Bt = function() {
  if (this._childBoundables = new D(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, wg = { serialVersionUID: { configurable: !0 } };
Bt.prototype.getLevel = function() {
  return this._level;
};
Bt.prototype.size = function() {
  return this._childBoundables.size();
};
Bt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Bt.prototype.addChildBoundable = function(t) {
  J.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Bt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Bt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Bt.prototype.interfaces_ = function() {
  return [eo, on];
};
Bt.prototype.getClass = function() {
  return Bt;
};
wg.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Bt, wg);
var _n = function() {
};
_n.reverseOrder = function() {
  return {
    compare: function(e, n) {
      return n.compareTo(e);
    }
  };
};
_n.min = function(t) {
  return _n.sort(t), t.get(0);
};
_n.sort = function(t, e) {
  var n = t.toArray();
  e ? Cr.sort(n, e) : Cr.sort(n);
  for (var r = t.iterator(), s = 0, o = n.length; s < o; s++)
    r.next(), r.set(n[s]);
};
_n.singletonList = function(t) {
  var e = new D();
  return e.add(t), e;
};
var Mt = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
};
Mt.prototype.expandToQueue = function(t, e) {
  var n = Mt.isComposite(this._boundable1), r = Mt.isComposite(this._boundable2);
  if (n && r)
    return Mt.area(this._boundable1) > Mt.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (n)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (r)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new vt("neither boundable is composite");
};
Mt.prototype.isLeaves = function() {
  return !(Mt.isComposite(this._boundable1) || Mt.isComposite(this._boundable2));
};
Mt.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
Mt.prototype.expand = function(t, e, n, r) {
  for (var s = this, o = t.getChildBoundables(), a = o.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new Mt(u, e, s._itemDistance);
    l.getDistance() < r && n.add(l);
  }
};
Mt.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
Mt.prototype.getDistance = function() {
  return this._distance;
};
Mt.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
Mt.prototype.interfaces_ = function() {
  return [sn];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Mt.area = function(t) {
  return t.getBounds().getArea();
};
Mt.isComposite = function(t) {
  return t instanceof Bt;
};
var Wt = function i() {
  if (this._root = null, this._built = !1, this._itemBoundables = new D(), this._nodeCapacity = null, arguments.length === 0) {
    var t = i.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    J.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, zu = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
Wt.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
Wt.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
Wt.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, r = e.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      s instanceof Bt ? n += t.size(s) : s instanceof pn && (n += 1);
    }
    return n;
  }
};
Wt.prototype.removeItem = function(t, e) {
  for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext(); ) {
    var s = r.next();
    s instanceof pn && s.getItem() === e && (n = s);
  }
  return n !== null ? (t.getChildBoundables().remove(n), !0) : !1;
};
Wt.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new D() : e;
  } else if (arguments.length === 1) {
    for (var n = arguments[0], r = new D(), s = n.getChildBoundables().iterator(); s.hasNext(); ) {
      var o = s.next();
      if (o instanceof Bt) {
        var a = t.itemsTree(o);
        a !== null && r.add(a);
      } else
        o instanceof pn ? r.add(o.getItem()) : J.shouldNeverReachHere();
    }
    return r.size() <= 0 ? null : r;
  }
};
Wt.prototype.insert = function(t, e) {
  J.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new pn(t, e));
};
Wt.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], n = new D();
    return this.boundablesAtLevel(e, this._root, n), n;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    if (J.isTrue(r > -2), s.getLevel() === r)
      return o.add(s), null;
    for (var a = s.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Bt ? t.boundablesAtLevel(r, u, o) : (J.isTrue(u instanceof pn), r === -1 && o.add(u));
    }
    return null;
  }
};
Wt.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var n = new D();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, n), n;
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), r) && this.query(r, this._root, s);
  } else if (arguments.length === 3) {
    if (q(arguments[2], Zi) && arguments[0] instanceof Object && arguments[1] instanceof Bt)
      for (var o = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var h = l.get(c);
        t.getIntersectsOp().intersects(h.getBounds(), o) && (h instanceof Bt ? t.query(o, h, u) : h instanceof pn ? u.visitItem(h.getItem()) : J.shouldNeverReachHere());
      }
    else if (q(arguments[2], fn) && arguments[0] instanceof Object && arguments[1] instanceof Bt)
      for (var f = arguments[0], g = arguments[1], d = arguments[2], _ = g.getChildBoundables(), p = 0; p < _.size(); p++) {
        var m = _.get(p);
        t.getIntersectsOp().intersects(m.getBounds(), f) && (m instanceof Bt ? t.query(f, m, d) : m instanceof pn ? d.add(m.getItem()) : J.shouldNeverReachHere());
      }
  }
};
Wt.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
Wt.prototype.getRoot = function() {
  return this.build(), this._root;
};
Wt.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, n) : !1;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = this.removeItem(s, o);
    if (a)
      return !0;
    for (var u = null, l = s.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), r) && c instanceof Bt && (a = t.remove(r, c, o), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && s.getChildBoundables().remove(u), a;
  }
};
Wt.prototype.createHigherLevels = function(t, e) {
  J.isTrue(!t.isEmpty());
  var n = this.createParentBoundables(t, e + 1);
  return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
};
Wt.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, r = e.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      if (s instanceof Bt) {
        var o = t.depth(s);
        o > n && (n = o);
      }
    }
    return n + 1;
  }
};
Wt.prototype.createParentBoundables = function(t, e) {
  var n = this;
  J.isTrue(!t.isEmpty());
  var r = new D();
  r.add(this.createNode(e));
  var s = new D(t);
  _n.sort(s, this.getComparator());
  for (var o = s.iterator(); o.hasNext(); ) {
    var a = o.next();
    n.lastNode(r).getChildBoundables().size() === n.getNodeCapacity() && r.add(n.createNode(e)), n.lastNode(r).addChildBoundable(a);
  }
  return r;
};
Wt.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
Wt.prototype.interfaces_ = function() {
  return [on];
};
Wt.prototype.getClass = function() {
  return Wt;
};
Wt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
zu.IntersectsOp.get = function() {
  return sv;
};
zu.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
zu.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Wt, zu);
var sv = function() {
}, no = function() {
};
no.prototype.distance = function(t, e) {
};
no.prototype.interfaces_ = function() {
  return [];
};
no.prototype.getClass = function() {
  return no;
};
var Rg = function(i) {
  function t(n) {
    n = n || t.DEFAULT_NODE_CAPACITY, i.call(this, n);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(r, s) {
    var o = this;
    J.isTrue(r.length > 0);
    for (var a = new D(), u = 0; u < r.length; u++)
      a.addAll(o.createParentBoundablesFromVerticalSlice(r[u], s));
    return a;
  }, t.prototype.createNode = function(r) {
    return new Ph(r);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? i.prototype.size.call(this) : i.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      if (r.isNull())
        return null;
      i.prototype.insert.call(this, r, s);
    } else
      return i.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(r, s) {
    for (var o = Math.trunc(Math.ceil(r.size() / s)), a = new Array(s).fill(null), u = r.iterator(), l = 0; l < s; l++) {
      a[l] = new D();
      for (var c = 0; u.hasNext() && c < o; ) {
        var h = u.next();
        a[l].add(h), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var r = arguments[0];
      return i.prototype.query.call(this, r);
    } else if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      i.prototype.query.call(this, s, o);
    } else if (arguments.length === 3) {
      if (q(arguments[2], Zi) && arguments[0] instanceof Object && arguments[1] instanceof Bt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        i.prototype.query.call(this, a, u, l);
      } else if (q(arguments[2], fn) && arguments[0] instanceof Object && arguments[1] instanceof Bt) {
        var c = arguments[0], h = arguments[1], f = arguments[2];
        i.prototype.query.call(this, c, h, f);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(r, s) {
    return i.prototype.createParentBoundables.call(this, r, s);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return i.prototype.remove.call(this, r, s);
    } else
      return i.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? i.prototype.depth.call(this) : i.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(r, s) {
    J.isTrue(!r.isEmpty());
    var o = Math.trunc(Math.ceil(r.size() / this.getNodeCapacity())), a = new D(r);
    _n.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(o))));
    return this.createParentBoundablesFromVerticalSlices(u, s);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (q(arguments[0], no)) {
        var r = arguments[0], s = new Mt(this.getRoot(), this.getRoot(), r);
        return this.nearestNeighbour(s);
      } else if (arguments[0] instanceof Mt) {
        var o = arguments[0];
        return this.nearestNeighbour(o, H.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && q(arguments[1], no)) {
        var a = arguments[0], u = arguments[1], l = new Mt(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof Mt && typeof arguments[1] == "number") {
        var c = arguments[0], h = arguments[1], f = h, g = null, d = new Ti();
        for (d.add(c); !d.isEmpty() && f > 0; ) {
          var _ = d.poll(), p = _.getDistance();
          if (p >= f)
            break;
          _.isLeaves() ? (f = p, g = _) : _.expandToQueue(d, f);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var m = arguments[0], y = arguments[1], v = arguments[2], C = new pn(m, y), E = new Mt(this.getRoot(), C, v);
      return this.nearestNeighbour(E)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [rs, on];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(r) {
    return t.avg(r.getMinX(), r.getMaxX());
  }, t.avg = function(r, s) {
    return (r + s) / 2;
  }, t.centreY = function(r) {
    return t.avg(r.getMinY(), r.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Ph;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [qs];
      },
      compare: function(n, r) {
        return i.compareDoubles(t.centreX(n.getBounds()), t.centreX(r.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [qs];
      },
      compare: function(n, r) {
        return i.compareDoubles(t.centreY(n.getBounds()), t.centreY(r.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [i.IntersectsOp];
      },
      intersects: function(n, r) {
        return n.intersects(r);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(Wt), Ph = function(i) {
  function t() {
    var e = arguments[0];
    i.call(this, e);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var n = null, r = this.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      n === null ? n = new Y(s.getBounds()) : n.expandToInclude(s.getBounds());
    }
    return n;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Bt), we = function() {
};
we.prototype.interfaces_ = function() {
  return [];
};
we.prototype.getClass = function() {
  return we;
};
we.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
we.compare = function(t, e, n) {
  if (e.equals2D(n))
    return 0;
  var r = we.relativeSign(e.x, n.x), s = we.relativeSign(e.y, n.y);
  switch (t) {
    case 0:
      return we.compareValue(r, s);
    case 1:
      return we.compareValue(s, r);
    case 2:
      return we.compareValue(s, -r);
    case 3:
      return we.compareValue(-r, s);
    case 4:
      return we.compareValue(-r, -s);
    case 5:
      return we.compareValue(-s, -r);
    case 6:
      return we.compareValue(-s, r);
    case 7:
      return we.compareValue(r, -s);
  }
  return J.shouldNeverReachHere("invalid octant value"), 0;
};
we.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var Ki = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
  this._segString = t, this.coord = new x(e), this.segmentIndex = n, this._segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
Ki.prototype.getCoordinate = function() {
  return this.coord;
};
Ki.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
Ki.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : we.compare(this._segmentOctant, this.coord, e.coord);
};
Ki.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
Ki.prototype.isInterior = function() {
  return this._isInterior;
};
Ki.prototype.interfaces_ = function() {
  return [sn];
};
Ki.prototype.getClass = function() {
  return Ki;
};
var xe = function() {
  this._nodeMap = new ue(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
xe.prototype.getSplitCoordinates = function() {
  var t = this, e = new xa();
  this.addEndpoints();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next();
    t.addEdgeCoordinates(r, s, e), r = s;
  }
  return e.toCoordinateArray();
};
xe.prototype.addCollapsedNodes = function() {
  var t = this, e = new D();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next().intValue();
    t.add(t._edge.getCoordinate(r), r);
  }
};
xe.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
xe.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, n = 0; n < this._edge.size() - 2; n++) {
    var r = e._edge.getCoordinate(n), s = e._edge.getCoordinate(n + 2);
    r.equals2D(s) && t.add(new kn(n + 1));
  }
};
xe.prototype.addEdgeCoordinates = function(t, e, n) {
  var r = this, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  n.add(new x(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    n.add(r._edge.getCoordinate(a));
  o && n.add(new x(e.coord));
};
xe.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
xe.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(r, s);
    t.add(o), r = s;
  }
};
xe.prototype.findCollapseIndex = function(t, e, n) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var r = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || r--, r === 1 ? (n[0] = t.segmentIndex + 1, !0) : !1;
};
xe.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, n = new Array(1).fill(null), r = this.iterator(), s = r.next(); r.hasNext(); ) {
    var o = r.next(), a = e.findCollapseIndex(s, o, n);
    a && t.add(new kn(n[0])), s = o;
  }
};
xe.prototype.getEdge = function() {
  return this._edge;
};
xe.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
xe.prototype.createSplitEdge = function(t, e) {
  var n = this, r = e.segmentIndex - t.segmentIndex + 2, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  o || r--;
  var a = new Array(r).fill(null), u = 0;
  a[u++] = new x(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n._edge.getCoordinate(l);
  return o && (a[u] = new x(e.coord)), new Pt(a, this._edge.getData());
};
xe.prototype.add = function(t, e) {
  var n = new Ki(this._edge, t, e, this._edge.getSegmentOctant(e)), r = this._nodeMap.get(n);
  return r !== null ? (J.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this._nodeMap.put(n, n), n);
};
xe.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), r = n.getCoordinate(0);
  if (!r.equals2D(e[0]))
    throw new Li("bad split edge start point at " + r);
  var s = t.get(t.size() - 1), o = s.getCoordinates(), a = o[o.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Li("bad split edge end point at " + a);
};
xe.prototype.interfaces_ = function() {
  return [];
};
xe.prototype.getClass = function() {
  return xe;
};
var ss = function() {
};
ss.prototype.interfaces_ = function() {
  return [];
};
ss.prototype.getClass = function() {
  return ss;
};
ss.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new vt("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var n = Math.abs(t), r = Math.abs(e);
    return t >= 0 ? e >= 0 ? n >= r ? 0 : 1 : n >= r ? 7 : 6 : e >= 0 ? n >= r ? 3 : 2 : n >= r ? 4 : 5;
  } else if (arguments[0] instanceof x && arguments[1] instanceof x) {
    var s = arguments[0], o = arguments[1], a = o.x - s.x, u = o.y - s.y;
    if (a === 0 && u === 0)
      throw new vt("Cannot compute the octant for two identical points " + s);
    return ss.octant(a, u);
  }
};
var ci = function() {
};
ci.prototype.getCoordinates = function() {
};
ci.prototype.size = function() {
};
ci.prototype.getCoordinate = function(t) {
};
ci.prototype.isClosed = function() {
};
ci.prototype.setData = function(t) {
};
ci.prototype.getData = function() {
};
ci.prototype.interfaces_ = function() {
  return [];
};
ci.prototype.getClass = function() {
  return ci;
};
var aa = function() {
};
aa.prototype.addIntersection = function(t, e) {
};
aa.prototype.interfaces_ = function() {
  return [ci];
};
aa.prototype.getClass = function() {
  return aa;
};
var Pt = function() {
  this._nodeList = new xe(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Pt.prototype.getCoordinates = function() {
  return this._pts;
};
Pt.prototype.size = function() {
  return this._pts.length;
};
Pt.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Pt.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Pt.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Pt.prototype.setData = function(t) {
  this._data = t;
};
Pt.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : ss.octant(t, e);
};
Pt.prototype.getData = function() {
  return this._data;
};
Pt.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var n = arguments[0], r = arguments[1], s = arguments[3], o = new x(n.getIntersection(s));
    this.addIntersection(o, r);
  }
};
Pt.prototype.toString = function() {
  return gn.toLineString(new Nt(this._pts));
};
Pt.prototype.getNodeList = function() {
  return this._nodeList;
};
Pt.prototype.addIntersectionNode = function(t, e) {
  var n = e, r = n + 1;
  if (r < this._pts.length) {
    var s = this._pts[r];
    t.equals2D(s) && (n = r);
  }
  var o = this._nodeList.add(t, n);
  return o;
};
Pt.prototype.addIntersections = function(t, e, n) {
  for (var r = this, s = 0; s < t.getIntersectionNum(); s++)
    r.addIntersection(t, e, n, s);
};
Pt.prototype.interfaces_ = function() {
  return [aa];
};
Pt.prototype.getClass = function() {
  return Pt;
};
Pt.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new D();
    return Pt.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var n = arguments[0], r = arguments[1], s = n.iterator(); s.hasNext(); ) {
      var o = s.next();
      o.getNodeList().addSplitEdges(r);
    }
};
var U = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new x(), this.p1 = new x();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new x(t.p0), this.p1 = new x(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = arguments[3];
    this.p0 = new x(e, n), this.p1 = new x(r, s);
  }
}, Ng = { serialVersionUID: { configurable: !0 } };
U.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
U.prototype.orientationIndex = function() {
  if (arguments[0] instanceof U) {
    var t = arguments[0], e = k.orientationIndex(this.p0, this.p1, t.p0), n = k.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
  } else if (arguments[0] instanceof x) {
    var r = arguments[0];
    return k.orientationIndex(this.p0, this.p1, r);
  }
};
U.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
U.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
U.prototype.equals = function(t) {
  if (!(t instanceof U))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
U.prototype.intersection = function(t) {
  var e = new Br();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
U.prototype.project = function() {
  if (arguments[0] instanceof x) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new x(t);
    var e = this.projectionFactor(t), n = new x();
    return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
  } else if (arguments[0] instanceof U) {
    var r = arguments[0], s = this.projectionFactor(r.p0), o = this.projectionFactor(r.p1);
    if (s >= 1 && o >= 1 || s <= 0 && o <= 0)
      return null;
    var a = this.project(r.p0);
    s < 0 && (a = this.p0), s > 1 && (a = this.p1);
    var u = this.project(r.p1);
    return o < 0 && (u = this.p0), o > 1 && (u = this.p1), new U(a, u);
  }
};
U.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
U.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
U.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
U.prototype.distancePerpendicular = function(t) {
  return k.distancePointLinePerpendicular(t, this.p0, this.p1);
};
U.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
U.prototype.midPoint = function() {
  return U.midPoint(this.p0, this.p1);
};
U.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, r = e * e + n * n;
  if (r <= 0)
    return H.NaN;
  var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r;
  return s;
};
U.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), r = H.MAX_VALUE, s = null, o = this.closestPoint(t.p0);
  r = o.distance(t.p0), n[0] = o, n[1] = t.p0;
  var a = this.closestPoint(t.p1);
  s = a.distance(t.p1), s < r && (r = s, n[0] = a, n[1] = t.p1);
  var u = t.closestPoint(this.p0);
  s = u.distance(this.p0), s < r && (r = s, n[0] = this.p0, n[1] = u);
  var l = t.closestPoint(this.p1);
  return s = l.distance(this.p1), s < r && (r = s, n[0] = this.p1, n[1] = l), n;
};
U.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var n = this.p0.distance(t), r = this.p1.distance(t);
  return n < r ? this.p0 : this.p1;
};
U.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
U.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
U.prototype.compareTo = function(t) {
  var e = t, n = this.p0.compareTo(e.p0);
  return n !== 0 ? n : this.p1.compareTo(e.p1);
};
U.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
U.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
U.prototype.lineIntersection = function(t) {
  try {
    var e = hn.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (n) {
    if (!(n instanceof po))
      throw n;
  } finally {
  }
  return null;
};
U.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
U.prototype.pointAlongOffset = function(t, e) {
  var n = this.p0.x + t * (this.p1.x - this.p0.x), r = this.p0.y + t * (this.p1.y - this.p0.y), s = this.p1.x - this.p0.x, o = this.p1.y - this.p0.y, a = Math.sqrt(s * s + o * o), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * s / a, l = e * o / a;
  }
  var c = n - l, h = r + u, f = new x(c, h);
  return f;
};
U.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
  }
};
U.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || H.isNaN(e)) && (e = 1), e;
};
U.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
U.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
U.prototype.distance = function() {
  if (arguments[0] instanceof U) {
    var t = arguments[0];
    return k.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof x) {
    var e = arguments[0];
    return k.distancePointLine(e, this.p0, this.p1);
  }
};
U.prototype.pointAlong = function(t) {
  var e = new x();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
U.prototype.hashCode = function() {
  var t = H.doubleToLongBits(this.p0.x);
  t ^= H.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = H.doubleToLongBits(this.p1.x);
  n ^= H.doubleToLongBits(this.p1.y) * 31;
  var r = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ r;
};
U.prototype.interfaces_ = function() {
  return [sn, on];
};
U.prototype.getClass = function() {
  return U;
};
U.midPoint = function(t, e) {
  return new x((t.x + e.x) / 2, (t.y + e.y) / 2);
};
Ng.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(U, Ng);
var ua = function() {
  this.tempEnv1 = new Y(), this.tempEnv2 = new Y(), this._overlapSeg1 = new U(), this._overlapSeg2 = new U();
};
ua.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(r, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
ua.prototype.interfaces_ = function() {
  return [];
};
ua.prototype.getClass = function() {
  return ua;
};
var Fe = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
  this._pts = t, this._start = e, this._end = n, this._context = r;
};
Fe.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
Fe.prototype.computeSelect = function(t, e, n, r) {
  var s = this._pts[e], o = this._pts[n];
  if (r.tempEnv1.init(s, o), n - e === 1)
    return r.select(this, e), null;
  if (!t.intersects(r.tempEnv1))
    return null;
  var a = Math.trunc((e + n) / 2);
  e < a && this.computeSelect(t, e, a, r), a < n && this.computeSelect(t, a, n, r);
};
Fe.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), n = 0, r = this._start; r <= this._end; r++)
    e[n++] = t._pts[r];
  return e;
};
Fe.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
Fe.prototype.setId = function(t) {
  this._id = t;
};
Fe.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
Fe.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new Y(t, e);
  }
  return this._env;
};
Fe.prototype.getEndIndex = function() {
  return this._end;
};
Fe.prototype.getStartIndex = function() {
  return this._start;
};
Fe.prototype.getContext = function() {
  return this._context;
};
Fe.prototype.getId = function() {
  return this._id;
};
Fe.prototype.computeOverlapsInternal = function(t, e, n, r, s, o) {
  var a = this._pts[t], u = this._pts[e], l = n._pts[r], c = n._pts[s];
  if (e - t === 1 && s - r === 1)
    return o.overlap(this, t, n, r), null;
  if (o.tempEnv1.init(a, u), o.tempEnv2.init(l, c), !o.tempEnv1.intersects(o.tempEnv2))
    return null;
  var h = Math.trunc((t + e) / 2), f = Math.trunc((r + s) / 2);
  t < h && (r < f && this.computeOverlapsInternal(t, h, n, r, f, o), f < s && this.computeOverlapsInternal(t, h, n, f, s, o)), h < e && (r < f && this.computeOverlapsInternal(h, e, n, r, f, o), f < s && this.computeOverlapsInternal(h, e, n, f, s, o));
};
Fe.prototype.interfaces_ = function() {
  return [];
};
Fe.prototype.getClass = function() {
  return Fe;
};
var Dn = function() {
};
Dn.prototype.interfaces_ = function() {
  return [];
};
Dn.prototype.getClass = function() {
  return Dn;
};
Dn.getChainStartIndices = function(t) {
  var e = 0, n = new D();
  n.add(new kn(e));
  do {
    var r = Dn.findChainEnd(t, e);
    n.add(new kn(r)), e = r;
  } while (e < t.length - 1);
  var s = Dn.toIntArray(n);
  return s;
};
Dn.findChainEnd = function(t, e) {
  for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
    n++;
  if (n >= t.length - 1)
    return t.length - 1;
  for (var r = ct.quadrant(t[n], t[n + 1]), s = e + 1; s < t.length; ) {
    if (!t[s - 1].equals2D(t[s])) {
      var o = ct.quadrant(t[s - 1], t[s]);
      if (o !== r)
        break;
    }
    s++;
  }
  return s - 1;
};
Dn.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Dn.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], r = new D(), s = Dn.getChainStartIndices(e), o = 0; o < s.length - 1; o++) {
      var a = new Fe(e, s[o], s[o + 1], n);
      r.add(a);
    }
    return r;
  }
};
Dn.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var br = function() {
};
br.prototype.computeNodes = function(t) {
};
br.prototype.getNodedSubstrings = function() {
};
br.prototype.interfaces_ = function() {
  return [];
};
br.prototype.getClass = function() {
  return br;
};
var la = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
la.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
la.prototype.interfaces_ = function() {
  return [br];
};
la.prototype.getClass = function() {
  return la;
};
var dc = function(i) {
  function t(n) {
    n ? i.call(this, n) : i.call(this), this._monoChains = new D(), this._index = new Rg(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return Pt.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(r) {
    for (var s = this, o = Dn.getChains(r.getCoordinates(), r), a = o.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(s._idCounter++), s._index.insert(u.getEnvelope(), u), s._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(r) {
    var s = this;
    this._nodedSegStrings = r;
    for (var o = r.iterator(); o.hasNext(); )
      s.add(o.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var r = this, s = new Th(this._segInt), o = this._monoChains.iterator(); o.hasNext(); )
      for (var a = o.next(), u = r._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, s), r._nOverlaps++), r._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return Th;
  }, Object.defineProperties(t, e), t;
}(la), Th = function(i) {
  function t() {
    i.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var n = arguments[0], r = arguments[1], s = arguments[2], o = arguments[3], a = n.getContext(), u = s.getContext();
      this._si.processIntersections(a, r, u, o);
    } else
      return i.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ua), rt = function i() {
  if (this._quadrantSegments = i.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = i.CAP_ROUND, this._joinStyle = i.JOIN_ROUND, this._mitreLimit = i.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = i.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], n = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (arguments.length === 4) {
      var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3];
      this.setQuadrantSegments(r), this.setEndCapStyle(s), this.setJoinStyle(o), this.setMitreLimit(a);
    }
  }
}, Di = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
rt.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
rt.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
rt.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = rt.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = rt.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== rt.JOIN_ROUND && (this._quadrantSegments = rt.DEFAULT_QUADRANT_SEGMENTS);
};
rt.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
rt.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
rt.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
rt.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
rt.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
rt.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
rt.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
rt.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
rt.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
rt.prototype.interfaces_ = function() {
  return [];
};
rt.prototype.getClass = function() {
  return rt;
};
rt.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
Di.CAP_ROUND.get = function() {
  return 1;
};
Di.CAP_FLAT.get = function() {
  return 2;
};
Di.CAP_SQUARE.get = function() {
  return 3;
};
Di.JOIN_ROUND.get = function() {
  return 1;
};
Di.JOIN_MITRE.get = function() {
  return 2;
};
Di.JOIN_BEVEL.get = function() {
  return 3;
};
Di.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
Di.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
Di.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(rt, Di);
var wt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = k.COUNTERCLOCKWISE, this._inputLine = t || null;
}, Sa = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
wt.prototype.isDeletable = function(t, e, n, r) {
  var s = this._inputLine[t], o = this._inputLine[e], a = this._inputLine[n];
  return !this.isConcave(s, o, a) || !this.isShallow(s, o, a, r) ? !1 : this.isShallowSampled(s, o, t, n, r);
};
wt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, n = this.findNextNonDeletedIndex(e), r = this.findNextNonDeletedIndex(n), s = !1; r < this._inputLine.length; ) {
    var o = !1;
    t.isDeletable(e, n, r, t._distanceTol) && (t._isDeleted[n] = wt.DELETE, o = !0, s = !0), o ? e = r : e = n, n = t.findNextNonDeletedIndex(e), r = t.findNextNonDeletedIndex(n);
  }
  return s;
};
wt.prototype.isShallowConcavity = function(t, e, n, r) {
  var s = k.computeOrientation(t, e, n), o = s === this._angleOrientation;
  if (!o)
    return !1;
  var a = k.distancePointLine(e, t, n);
  return a < r;
};
wt.prototype.isShallowSampled = function(t, e, n, r, s) {
  var o = this, a = Math.trunc((r - n) / wt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = n; u < r; u += a)
    if (!o.isShallow(t, e, o._inputLine[u], s))
      return !1;
  return !0;
};
wt.prototype.isConcave = function(t, e, n) {
  var r = k.computeOrientation(t, e, n), s = r === this._angleOrientation;
  return s;
};
wt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = k.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var n = !1;
  do
    n = e.deleteShallowConcavities();
  while (n);
  return this.collapseLine();
};
wt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === wt.DELETE; )
    e++;
  return e;
};
wt.prototype.isShallow = function(t, e, n, r) {
  var s = k.distancePointLine(e, t, n);
  return s < r;
};
wt.prototype.collapseLine = function() {
  for (var t = this, e = new xa(), n = 0; n < this._inputLine.length; n++)
    t._isDeleted[n] !== wt.DELETE && e.add(t._inputLine[n]);
  return e.toCoordinateArray();
};
wt.prototype.interfaces_ = function() {
  return [];
};
wt.prototype.getClass = function() {
  return wt;
};
wt.simplify = function(t, e) {
  var n = new wt(t);
  return n.simplify(e);
};
Sa.INIT.get = function() {
  return 0;
};
Sa.DELETE.get = function() {
  return 1;
};
Sa.KEEP.get = function() {
  return 1;
};
Sa.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(wt, Sa);
var Ue = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new D();
}, Lg = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
Ue.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(Ue.COORDINATE_ARRAY_TYPE);
  return t;
};
Ue.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
Ue.prototype.addPt = function(t) {
  var e = new x(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
Ue.prototype.revere = function() {
};
Ue.prototype.addPts = function(t, e) {
  var n = this;
  if (e)
    for (var r = 0; r < t.length; r++)
      n.addPt(t[r]);
  else
    for (var s = t.length - 1; s >= 0; s--)
      n.addPt(t[s]);
};
Ue.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), n = t.distance(e);
  return n < this._minimimVertexDistance;
};
Ue.prototype.toString = function() {
  var t = new Q(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
Ue.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new x(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
Ue.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
Ue.prototype.interfaces_ = function() {
  return [];
};
Ue.prototype.getClass = function() {
  return Ue;
};
Lg.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(Ue, Lg);
var tt = function() {
}, Ss = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
tt.prototype.interfaces_ = function() {
  return [];
};
tt.prototype.getClass = function() {
  return tt;
};
tt.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
tt.normalize = function(t) {
  for (; t > Math.PI; )
    t -= tt.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += tt.PI_TIMES_2;
  return t;
};
tt.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = n.x - e.x, s = n.y - e.y;
    return Math.atan2(s, r);
  }
};
tt.isAcute = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = r * o + s * a;
  return u > 0;
};
tt.isObtuse = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = r * o + s * a;
  return u < 0;
};
tt.interiorAngle = function(t, e, n) {
  var r = tt.angle(e, t), s = tt.angle(e, n);
  return Math.abs(s - r);
};
tt.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += tt.PI_TIMES_2;
    t >= tt.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= tt.PI_TIMES_2; )
      t -= tt.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
tt.angleBetween = function(t, e, n) {
  var r = tt.angle(e, t), s = tt.angle(e, n);
  return tt.diff(r, s);
};
tt.diff = function(t, e) {
  var n = null;
  return t < e ? n = e - t : n = t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
};
tt.toRadians = function(t) {
  return t * Math.PI / 180;
};
tt.getTurn = function(t, e) {
  var n = Math.sin(e - t);
  return n > 0 ? tt.COUNTERCLOCKWISE : n < 0 ? tt.CLOCKWISE : tt.NONE;
};
tt.angleBetweenOriented = function(t, e, n) {
  var r = tt.angle(e, t), s = tt.angle(e, n), o = s - r;
  return o <= -Math.PI ? o + tt.PI_TIMES_2 : o > Math.PI ? o - tt.PI_TIMES_2 : o;
};
Ss.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
Ss.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
Ss.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
Ss.COUNTERCLOCKWISE.get = function() {
  return k.COUNTERCLOCKWISE;
};
Ss.CLOCKWISE.get = function() {
  return k.CLOCKWISE;
};
Ss.NONE.get = function() {
  return k.COLLINEAR;
};
Object.defineProperties(tt, Ss);
var _t = function i() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new U(), this._seg1 = new U(), this._offset0 = new U(), this._offset1 = new U(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Br(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === rt.JOIN_ROUND && (this._closingSegLengthFactor = i.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, wa = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
_t.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = k.computeOrientation(this._s0, this._s1, this._s2), r = n === k.CLOCKWISE && this._side === T.LEFT || n === k.COUNTERCLOCKWISE && this._side === T.RIGHT;
  n === 0 ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
_t.prototype.addLineEndCap = function(t, e) {
  var n = new U(t, e), r = new U();
  this.computeOffsetSegment(n, T.LEFT, this._distance, r);
  var s = new U();
  this.computeOffsetSegment(n, T.RIGHT, this._distance, s);
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o);
  switch (this._bufParams.getEndCapStyle()) {
    case rt.CAP_ROUND:
      this._segList.addPt(r.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, k.CLOCKWISE, this._distance), this._segList.addPt(s.p1);
      break;
    case rt.CAP_FLAT:
      this._segList.addPt(r.p1), this._segList.addPt(s.p1);
      break;
    case rt.CAP_SQUARE:
      var l = new x();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new x(r.p1.x + l.x, r.p1.y + l.y), h = new x(s.p1.x + l.x, s.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(h);
      break;
  }
};
_t.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
_t.prototype.addMitreJoin = function(t, e, n, r) {
  var s = !0, o = null;
  try {
    o = hn.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = r <= 0 ? 1 : o.distance(t) / Math.abs(r);
    a > this._bufParams.getMitreLimit() && (s = !1);
  } catch (u) {
    if (u instanceof po)
      o = new x(0, 0), s = !1;
    else
      throw u;
  } finally {
  }
  s ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit());
};
_t.prototype.addFilletCorner = function(t, e, n, r, s) {
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o), l = n.x - t.x, c = n.y - t.y, h = Math.atan2(c, l);
  r === k.CLOCKWISE ? u <= h && (u += 2 * Math.PI) : u >= h && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, h, r, s), this._segList.addPt(n);
};
_t.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * _t.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === rt.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === rt.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
_t.prototype.createSquare = function(t) {
  this._segList.addPt(new x(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new x(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new x(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new x(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
_t.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
_t.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
_t.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
_t.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
_t.prototype.addLimitedMitreJoin = function(t, e, n, r) {
  var s = this._seg0.p1, o = tt.angle(s, this._seg0.p0), a = tt.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1), u = a / 2, l = tt.normalize(o + u), c = tt.normalize(l + Math.PI), h = r * n, f = h * Math.abs(Math.sin(u)), g = n - f, d = s.x + h * Math.cos(c), _ = s.y + h * Math.sin(c), p = new x(d, _), m = new U(s, p), y = m.pointAlongOffset(1, g), v = m.pointAlongOffset(1, -g);
  this._side === T.LEFT ? (this._segList.addPt(y), this._segList.addPt(v)) : (this._segList.addPt(v), this._segList.addPt(y));
};
_t.prototype.computeOffsetSegment = function(t, e, n, r) {
  var s = e === T.LEFT ? 1 : -1, o = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(o * o + a * a), l = s * n * o / u, c = s * n * a / u;
  r.p0.x = t.p0.x - c, r.p0.y = t.p0.y + l, r.p1.x = t.p1.x - c, r.p1.y = t.p1.y + l;
};
_t.prototype.addFilletArc = function(t, e, n, r, s) {
  var o = this, a = r === k.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, h = u / l, f = c, g = new x(); f < u; ) {
    var d = e + a * f;
    g.x = t.x + s * Math.cos(d), g.y = t.y + s * Math.sin(d), o._segList.addPt(g), f += h;
  }
};
_t.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * _t.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var n = new x((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(n);
      var r = new x((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(r);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
_t.prototype.createCircle = function(t) {
  var e = new x(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
_t.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
_t.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ue(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * _t.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
_t.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === rt.JOIN_BEVEL || this._bufParams.getJoinStyle() === rt.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, k.CLOCKWISE, this._distance));
};
_t.prototype.closeRing = function() {
  this._segList.closeRing();
};
_t.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
_t.prototype.interfaces_ = function() {
  return [];
};
_t.prototype.getClass = function() {
  return _t;
};
wa.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
wa.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
wa.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
wa.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(_t, wa);
var Le = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
Le.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var n = e < 0, r = Math.abs(e), s = this.getSegGen(r);
  t.length <= 1 ? this.computePointCurve(t[0], s) : this.computeOffsetCurve(t, n, s);
  var o = s.getCoordinates();
  return n && $.reverse(o), o;
};
Le.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  if (e) {
    n.addSegments(t, !0);
    var s = wt.simplify(t, -r), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], T.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    n.addSegments(t, !1);
    var u = wt.simplify(t, r), l = u.length - 1;
    n.initSideSegments(u[0], u[1], T.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment(), n.closeRing();
};
Le.prototype.computeRingBufferCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  e === T.RIGHT && (r = -r);
  var s = wt.simplify(t, r), o = s.length - 1;
  n.initSideSegments(s[o - 1], s[0], e);
  for (var a = 1; a <= o; a++) {
    var u = a !== 1;
    n.addNextSegment(s[a], u);
  }
  n.closeRing();
};
Le.prototype.computeLineBufferCurve = function(t, e) {
  var n = this.simplifyTolerance(this._distance), r = wt.simplify(t, n), s = r.length - 1;
  e.initSideSegments(r[0], r[1], T.LEFT);
  for (var o = 2; o <= s; o++)
    e.addNextSegment(r[o], !0);
  e.addLastSegment(), e.addLineEndCap(r[s - 1], r[s]);
  var a = wt.simplify(t, -n), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], T.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
Le.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case rt.CAP_ROUND:
      e.createCircle(t);
      break;
    case rt.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
Le.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var n = Math.abs(e), r = this.getSegGen(n);
  if (t.length <= 1)
    this.computePointCurve(t[0], r);
  else if (this._bufParams.isSingleSided()) {
    var s = e < 0;
    this.computeSingleSidedBufferCurve(t, s, r);
  } else
    this.computeLineBufferCurve(t, r);
  var o = r.getCoordinates();
  return o;
};
Le.prototype.getBufferParameters = function() {
  return this._bufParams;
};
Le.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
Le.prototype.getRingCurve = function(t, e, n) {
  if (this._distance = n, t.length <= 2)
    return this.getLineCurve(t, n);
  if (n === 0)
    return Le.copyCoordinates(t);
  var r = this.getSegGen(n);
  return this.computeRingBufferCurve(t, e, r), r.getCoordinates();
};
Le.prototype.computeOffsetCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  if (e) {
    var s = wt.simplify(t, -r), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], T.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    var u = wt.simplify(t, r), l = u.length - 1;
    n.initSideSegments(u[0], u[1], T.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment();
};
Le.prototype.getSegGen = function(t) {
  return new _t(this._precisionModel, this._bufParams, t);
};
Le.prototype.interfaces_ = function() {
  return [];
};
Le.prototype.getClass = function() {
  return Le;
};
Le.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
    e[n] = new x(t[n]);
  return e;
};
var os = function() {
  this._subgraphs = null, this._seg = new U(), this._cga = new k();
  var t = arguments[0];
  this._subgraphs = t;
}, bg = { DepthSegment: { configurable: !0 } };
os.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new D(), r = this._subgraphs.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getEnvelope();
      e.y < o.getMinY() || e.y > o.getMaxY() || t.findStabbedSegments(e, s.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (q(arguments[2], fn) && arguments[0] instanceof x && arguments[1] instanceof wl)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), h = 0; h < c.length - 1; h++) {
        t._seg.p0 = c[h], t._seg.p1 = c[h + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var f = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(f < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && k.computeOrientation(t._seg.p0, t._seg.p1, a) !== k.RIGHT) {
          var g = u.getDepth(T.LEFT);
          t._seg.p0.equals(c[h]) || (g = u.getDepth(T.RIGHT));
          var d = new Pr(t._seg, g);
          l.add(d);
        }
      }
    else if (q(arguments[2], fn) && arguments[0] instanceof x && q(arguments[1], fn))
      for (var _ = arguments[0], p = arguments[1], m = arguments[2], y = p.iterator(); y.hasNext(); ) {
        var v = y.next();
        v.isForward() && t.findStabbedSegments(_, v, m);
      }
  }
};
os.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = _n.min(e);
  return n._leftDepth;
};
os.prototype.interfaces_ = function() {
  return [];
};
os.prototype.getClass = function() {
  return os;
};
bg.DepthSegment.get = function() {
  return Pr;
};
Object.defineProperties(os, bg);
var Pr = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new U(t), this._leftDepth = e;
};
Pr.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
Pr.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
Pr.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Pr.prototype.interfaces_ = function() {
  return [sn];
};
Pr.prototype.getClass = function() {
  return Pr;
};
var ot = function(t, e, n) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = n || null;
};
ot.prototype.area = function() {
  return ot.area(this.p0, this.p1, this.p2);
};
ot.prototype.signedArea = function() {
  return ot.signedArea(this.p0, this.p1, this.p2);
};
ot.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new vt("Supplied point is null.");
  return ot.interpolateZ(t, this.p0, this.p1, this.p2);
};
ot.prototype.longestSideLength = function() {
  return ot.longestSideLength(this.p0, this.p1, this.p2);
};
ot.prototype.isAcute = function() {
  return ot.isAcute(this.p0, this.p1, this.p2);
};
ot.prototype.circumcentre = function() {
  return ot.circumcentre(this.p0, this.p1, this.p2);
};
ot.prototype.area3D = function() {
  return ot.area3D(this.p0, this.p1, this.p2);
};
ot.prototype.centroid = function() {
  return ot.centroid(this.p0, this.p1, this.p2);
};
ot.prototype.inCentre = function() {
  return ot.inCentre(this.p0, this.p1, this.p2);
};
ot.prototype.interfaces_ = function() {
  return [];
};
ot.prototype.getClass = function() {
  return ot;
};
ot.area = function(t, e, n) {
  return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
};
ot.signedArea = function(t, e, n) {
  return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
};
ot.det = function(t, e, n, r) {
  return t * r - e * n;
};
ot.interpolateZ = function(t, e, n, r) {
  var s = e.x, o = e.y, a = n.x - s, u = r.x - s, l = n.y - o, c = r.y - o, h = a * c - u * l, f = t.x - s, g = t.y - o, d = (c * f - u * g) / h, _ = (-l * f + a * g) / h, p = e.z + d * (n.z - e.z) + _ * (r.z - e.z);
  return p;
};
ot.longestSideLength = function(t, e, n) {
  var r = t.distance(e), s = e.distance(n), o = n.distance(t), a = r;
  return s > a && (a = s), o > a && (a = o), a;
};
ot.isAcute = function(t, e, n) {
  return !(!tt.isAcute(t, e, n) || !tt.isAcute(e, n, t) || !tt.isAcute(n, t, e));
};
ot.circumcentre = function(t, e, n) {
  var r = n.x, s = n.y, o = t.x - r, a = t.y - s, u = e.x - r, l = e.y - s, c = 2 * ot.det(o, a, u, l), h = ot.det(a, o * o + a * a, l, u * u + l * l), f = ot.det(o, o * o + a * a, u, u * u + l * l), g = r - h / c, d = s + f / c;
  return new x(g, d);
};
ot.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, r = e.y - t.y, s = new hn(t.x + n / 2, t.y + r / 2, 1), o = new hn(t.x - r + n / 2, t.y + n + r / 2, 1);
  return new hn(s, o);
};
ot.angleBisector = function(t, e, n) {
  var r = e.distance(t), s = e.distance(n), o = r / (r + s), a = n.x - t.x, u = n.y - t.y, l = new x(t.x + o * a, t.y + o * u);
  return l;
};
ot.area3D = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, c = s * l - o * u, h = o * a - r * l, f = r * u - s * a, g = c * c + h * h + f * f, d = Math.sqrt(g) / 2;
  return d;
};
ot.centroid = function(t, e, n) {
  var r = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3;
  return new x(r, s);
};
ot.inCentre = function(t, e, n) {
  var r = e.distance(n), s = t.distance(n), o = t.distance(e), a = r + s + o, u = (r * t.x + s * e.x + o * n.x) / a, l = (r * t.y + s * e.y + o * n.y) / a;
  return new x(u, l);
};
var rn = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
rn.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, I.EXTERIOR, I.INTERIOR);
};
rn.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, r = T.LEFT;
  this._distance < 0 && (n = -this._distance, r = T.RIGHT);
  var s = t.getExteriorRing(), o = $.removeRepeatedPoints(s.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(s, this._distance) || this._distance <= 0 && o.length < 3)
    return null;
  this.addPolygonRing(o, n, r, I.EXTERIOR, I.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = $.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, T.opposite(r), I.INTERIOR, I.EXTERIOR);
  }
};
rn.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new ot(t[0], t[1], t[2]), r = n.inCentre(), s = k.distancePointLine(r, n.p0, n.p1);
  return s < Math.abs(e);
};
rn.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = $.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, I.EXTERIOR, I.INTERIOR);
};
rn.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var r = new Pt(t, new at(0, I.BOUNDARY, e, n));
  this._curveList.add(r);
};
rn.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
rn.prototype.addPolygonRing = function(t, e, n, r, s) {
  if (e === 0 && t.length < ui.MINIMUM_VALID_SIZE)
    return null;
  var o = r, a = s;
  t.length >= ui.MINIMUM_VALID_SIZE && k.isCCW(t) && (o = s, a = r, n = T.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, o, a);
};
rn.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Vt ? this.addPolygon(t) : t instanceof St ? this.addLineString(t) : t instanceof Ae ? this.addPoint(t) : t instanceof $s ? this.addCollection(t) : t instanceof Lr ? this.addCollection(t) : t instanceof ri ? this.addCollection(t) : t instanceof ve && this.addCollection(t);
};
rn.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var r = t.getEnvelopeInternal(), s = Math.min(r.getHeight(), r.getWidth());
  return e < 0 && 2 * Math.abs(e) > s;
};
rn.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var r = t.getGeometryN(n);
    e.add(r);
  }
};
rn.prototype.interfaces_ = function() {
  return [];
};
rn.prototype.getClass = function() {
  return rn;
};
var io = function() {
};
io.prototype.locate = function(t) {
};
io.prototype.interfaces_ = function() {
  return [];
};
io.prototype.getClass = function() {
  return io;
};
var si = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
si.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, si.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new mo();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ve ? (this._subcollectionIterator = new si(t), this._subcollectionIterator.next()) : t;
};
si.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
si.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
si.prototype.interfaces_ = function() {
  return [_o];
};
si.prototype.getClass = function() {
  return si;
};
si.isAtomic = function(t) {
  return !(t instanceof ve);
};
var Ve = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Ve.prototype.locate = function(t) {
  return Ve.locate(t, this._geom);
};
Ve.prototype.interfaces_ = function() {
  return [io];
};
Ve.prototype.getClass = function() {
  return Ve;
};
Ve.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? k.isPointInRing(t, e.getCoordinates()) : !1;
};
Ve.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!Ve.isPointInRing(t, n))
    return !1;
  for (var r = 0; r < e.getNumInteriorRing(); r++) {
    var s = e.getInteriorRingN(r);
    if (Ve.isPointInRing(t, s))
      return !1;
  }
  return !0;
};
Ve.containsPoint = function(t, e) {
  if (e instanceof Vt)
    return Ve.containsPointInPolygon(t, e);
  if (e instanceof ve)
    for (var n = new si(e); n.hasNext(); ) {
      var r = n.next();
      if (r !== e && Ve.containsPoint(t, r))
        return !0;
    }
  return !1;
};
Ve.locate = function(t, e) {
  return e.isEmpty() ? I.EXTERIOR : Ve.containsPoint(t, e) ? I.INTERIOR : I.EXTERIOR;
};
var ce = function() {
  this._edgeMap = new ue(), this._edgeList = null, this._ptInAreaLocation = [I.NONE, I.NONE];
};
ce.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
ce.prototype.propagateSideLabels = function(t) {
  for (var e = I.NONE, n = this.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getLabel();
    s.isArea(t) && s.getLocation(t, T.LEFT) !== I.NONE && (e = s.getLocation(t, T.LEFT));
  }
  if (e === I.NONE)
    return null;
  for (var o = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, T.ON) === I.NONE && l.setLocation(t, T.ON, o), l.isArea(t)) {
      var c = l.getLocation(t, T.LEFT), h = l.getLocation(t, T.RIGHT);
      if (h !== I.NONE) {
        if (h !== o)
          throw new Pi("side location conflict", u.getCoordinate());
        c === I.NONE && J.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), o = c;
      } else
        J.isTrue(l.getLocation(t, T.LEFT) === I.NONE, "found single null side"), l.setLocation(t, T.RIGHT, o), l.setLocation(t, T.LEFT, o);
    }
  }
};
ce.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
ce.prototype.print = function(t) {
  ne.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
ce.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
ce.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var n = e.size() - 1, r = e.get(n).getLabel(), s = r.getLocation(t, T.LEFT);
  J.isTrue(s !== I.NONE, "Found unlabelled area edge");
  for (var o = s, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    J.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, T.LEFT), h = l.getLocation(t, T.RIGHT);
    if (c === h || h !== o)
      return !1;
    o = c;
  }
  return !0;
};
ce.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var n = 0; n < this._edgeList.size(); n++) {
    var r = e._edgeList.get(n);
    if (r === t)
      return n;
  }
  return -1;
};
ce.prototype.iterator = function() {
  return this.getEdges().iterator();
};
ce.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new D(this._edgeMap.values())), this._edgeList;
};
ce.prototype.getLocation = function(t, e, n) {
  return this._ptInAreaLocation[t] === I.NONE && (this._ptInAreaLocation[t] = Ve.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
ce.prototype.toString = function() {
  var t = new Hn();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.append(n), t.append(`
`);
  }
  return t.toString();
};
ce.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.computeLabel(t);
  }
};
ce.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var n = [!1, !1], r = this.iterator(); r.hasNext(); )
    for (var s = r.next(), o = s.getLabel(), a = 0; a < 2; a++)
      o.isLine(a) && o.getLocation(a) === I.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), h = 0; h < 2; h++)
      if (c.isAnyNull(h)) {
        var f = I.NONE;
        if (n[h])
          f = I.EXTERIOR;
        else {
          var g = l.getCoordinate();
          f = e.getLocation(h, g, t);
        }
        c.setAllLocationsIfNull(h, f);
      }
};
ce.prototype.getDegree = function() {
  return this._edgeMap.size();
};
ce.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
var ov = function(i) {
  function t() {
    i.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var n = this;
    this.getResultAreaEdges();
    for (var r = null, s = null, o = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = n._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (r === null && u.isInResult() && (r = u), o) {
          case n._SCANNING_FOR_INCOMING:
            if (!l.isInResult())
              continue;
            s = l, o = n._LINKING_TO_OUTGOING;
            break;
          case n._LINKING_TO_OUTGOING:
            if (!u.isInResult())
              continue;
            s.setNext(u), o = n._SCANNING_FOR_INCOMING;
            break;
        }
    }
    if (o === this._LINKING_TO_OUTGOING) {
      if (r === null)
        throw new Pi("no outgoing dirEdge found", this.getCoordinate());
      J.isTrue(r.isInResult(), "unable to link last incoming dirEdge"), s.setNext(r);
    }
  }, t.prototype.insert = function(n) {
    var r = n;
    this.insertEdgeEnd(r, r);
  }, t.prototype.getRightmostEdge = function() {
    var n = this.getEdges(), r = n.size();
    if (r < 1)
      return null;
    var s = n.get(0);
    if (r === 1)
      return s;
    var o = n.get(r - 1), a = s.getQuadrant(), u = o.getQuadrant();
    return ct.isNorthern(a) && ct.isNorthern(u) ? s : !ct.isNorthern(a) && !ct.isNorthern(u) ? o : s.getDy() !== 0 ? s : o.getDy() !== 0 ? o : (J.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(n) {
    ne.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var r = this.iterator(); r.hasNext(); ) {
      var s = r.next();
      n.print("out "), s.print(n), n.println(), n.print("in "), s.getSym().print(n), n.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var n = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new D();
    for (var r = this.iterator(); r.hasNext(); ) {
      var s = r.next();
      (s.isInResult() || s.getSym().isInResult()) && n._resultAreaEdgeList.add(s);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(n) {
    for (var r = this.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getLabel();
      o.setAllLocationsIfNull(0, n.getLocation(0)), o.setAllLocationsIfNull(1, n.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var n = this;
    this.getEdges();
    for (var r = null, s = null, o = this._edgeList.size() - 1; o >= 0; o--) {
      var a = n._edgeList.get(o), u = a.getSym();
      s === null && (s = u), r !== null && u.setNext(r), r = a;
    }
    s.setNext(r);
  }, t.prototype.computeDepths = function() {
    var n = this;
    if (arguments.length === 1) {
      var r = arguments[0], s = this.findIndex(r), o = r.getDepth(T.LEFT), a = r.getDepth(T.RIGHT), u = this.computeDepths(s + 1, this._edgeList.size(), o), l = this.computeDepths(0, s, u);
      if (l !== a)
        throw new Pi("depth mismatch at " + r.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], h = arguments[1], f = arguments[2], g = f, d = c; d < h; d++) {
        var _ = n._edgeList.get(d);
        _.setEdgeDepths(T.RIGHT, g), g = _.getDepth(T.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this.iterator(); n.hasNext(); ) {
      var r = n.next(), s = r.getLabel();
      s.merge(r.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(n) {
    for (var r = this, s = null, o = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = r._resultAreaEdgeList.get(u), c = l.getSym();
      switch (s === null && l.getEdgeRing() === n && (s = l), a) {
        case r._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== n)
            continue;
          o = c, a = r._LINKING_TO_OUTGOING;
          break;
        case r._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== n)
            continue;
          o.setNextMin(l), a = r._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (J.isTrue(s !== null, "found null for first outgoing dirEdge"), J.isTrue(s.getEdgeRing() === n, "unable to link last incoming dirEdge"), o.setNextMin(s));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var n = 0, r = this.iterator(); r.hasNext(); ) {
        var s = r.next();
        s.isInResult() && n++;
      }
      return n;
    } else if (arguments.length === 1) {
      for (var o = arguments[0], a = 0, u = this.iterator(); u.hasNext(); ) {
        var l = u.next();
        l.getEdgeRing() === o && a++;
      }
      return a;
    }
  }, t.prototype.getLabel = function() {
    return this._label;
  }, t.prototype.findCoveredLineEdges = function() {
    for (var n = I.NONE, r = this.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getSym();
      if (!s.isLineEdge()) {
        if (s.isInResult()) {
          n = I.INTERIOR;
          break;
        }
        if (o.isInResult()) {
          n = I.EXTERIOR;
          break;
        }
      }
    }
    if (n === I.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === I.INTERIOR) : (l.isInResult() && (a = I.EXTERIOR), c.isInResult() && (a = I.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var r = this;
    i.prototype.computeLabelling.call(this, n), this._label = new at(I.NONE);
    for (var s = this.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === I.INTERIOR || c === I.BOUNDARY) && r._label.setLocation(l, I.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ce), Pg = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new Bu(n, new ov());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(to), Ji = function i() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = i.orientation(t);
};
Ji.prototype.compareTo = function(t) {
  var e = t, n = Ji.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
Ji.prototype.interfaces_ = function() {
  return [sn];
};
Ji.prototype.getClass = function() {
  return Ji;
};
Ji.orientation = function(t) {
  return $.increasingDirection(t) === 1;
};
Ji.compareOriented = function(t, e, n, r) {
  for (var s = e ? 1 : -1, o = r ? 1 : -1, a = e ? t.length : -1, u = r ? n.length : -1, l = e ? 0 : t.length - 1, c = r ? 0 : n.length - 1; ; ) {
    var h = t[l].compareTo(n[c]);
    if (h !== 0)
      return h;
    l += s, c += o;
    var f = l === a, g = c === u;
    if (f && !g)
      return -1;
    if (!f && g)
      return 1;
    if (f && g)
      return 0;
  }
};
var mn = function() {
  this._edges = new D(), this._ocaMap = new ue();
};
mn.prototype.print = function(t) {
  var e = this;
  t.print("MULTILINESTRING ( ");
  for (var n = 0; n < this._edges.size(); n++) {
    var r = e._edges.get(n);
    n > 0 && t.print(","), t.print("(");
    for (var s = r.getCoordinates(), o = 0; o < s.length; o++)
      o > 0 && t.print(","), t.print(s[o].x + " " + s[o].y);
    t.println(")");
  }
  t.print(")  ");
};
mn.prototype.addAll = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); )
    e.add(n.next());
};
mn.prototype.findEdgeIndex = function(t) {
  for (var e = this, n = 0; n < this._edges.size(); n++)
    if (e._edges.get(n).equals(t))
      return n;
  return -1;
};
mn.prototype.iterator = function() {
  return this._edges.iterator();
};
mn.prototype.getEdges = function() {
  return this._edges;
};
mn.prototype.get = function(t) {
  return this._edges.get(t);
};
mn.prototype.findEqualEdge = function(t) {
  var e = new Ji(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
mn.prototype.add = function(t) {
  this._edges.add(t);
  var e = new Ji(t.getCoordinates());
  this._ocaMap.put(e, t);
};
mn.prototype.interfaces_ = function() {
  return [];
};
mn.prototype.getClass = function() {
  return mn;
};
var Tr = function() {
};
Tr.prototype.processIntersections = function(t, e, n, r) {
};
Tr.prototype.isDone = function() {
};
Tr.prototype.interfaces_ = function() {
  return [];
};
Tr.prototype.getClass = function() {
  return Tr;
};
var We = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
We.prototype.isTrivialIntersection = function(t, e, n, r) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (We.isAdjacentSegments(e, r))
      return !0;
    if (t.isClosed()) {
      var s = t.size() - 1;
      if (e === 0 && r === s || r === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
We.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
We.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
We.prototype.getLineIntersector = function() {
  return this._li;
};
We.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
We.prototype.processIntersections = function(t, e, n, r) {
  if (t === n && e === r)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[r], u = n.getCoordinates()[r + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
We.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
We.prototype.isDone = function() {
  return !1;
};
We.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
We.prototype.interfaces_ = function() {
  return [Tr];
};
We.prototype.getClass = function() {
  return We;
};
We.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var Yn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new x(t), this.segmentIndex = e, this.dist = n;
};
Yn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
Yn.prototype.getCoordinate = function() {
  return this.coord;
};
Yn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
Yn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
Yn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
Yn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
Yn.prototype.getDistance = function() {
  return this.dist;
};
Yn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
Yn.prototype.interfaces_ = function() {
  return [sn];
};
Yn.prototype.getClass = function() {
  return Yn;
};
var hi = function() {
  this._nodeMap = new ue(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
hi.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
hi.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
hi.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(r, s);
    t.add(o), r = s;
  }
};
hi.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
hi.prototype.createSplitEdge = function(t, e) {
  var n = this, r = e.segmentIndex - t.segmentIndex + 2, s = this.edge.pts[e.segmentIndex], o = e.dist > 0 || !e.coord.equals2D(s);
  o || r--;
  var a = new Array(r).fill(null), u = 0;
  a[u++] = new x(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return o && (a[u] = e.coord), new gu(a, new at(this.edge._label));
};
hi.prototype.add = function(t, e, n) {
  var r = new Yn(t, e, n), s = this._nodeMap.get(r);
  return s !== null ? s : (this._nodeMap.put(r, r), r);
};
hi.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
hi.prototype.interfaces_ = function() {
  return [];
};
hi.prototype.getClass = function() {
  return hi;
};
var Mr = function() {
};
Mr.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, r = new D();
  r.add(new kn(n));
  do {
    var s = e.findChainEnd(t, n);
    r.add(new kn(s)), n = s;
  } while (n < t.length - 1);
  var o = Mr.toIntArray(r);
  return o;
};
Mr.prototype.findChainEnd = function(t, e) {
  for (var n = ct.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length; ) {
    var s = ct.quadrant(t[r - 1], t[r]);
    if (s !== n)
      break;
    r++;
  }
  return r - 1;
};
Mr.prototype.interfaces_ = function() {
  return [];
};
Mr.prototype.getClass = function() {
  return Mr;
};
Mr.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Mi = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new Y(), this.env2 = new Y();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Mr();
  this.startIndex = e.getChainStartIndices(this.pts);
};
Mi.prototype.getCoordinates = function() {
  return this.pts;
};
Mi.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
Mi.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
Mi.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r);
  } else if (arguments.length === 6) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], h = this.pts[s], f = this.pts[o], g = a.pts[u], d = a.pts[l];
    if (o - s === 1 && l - u === 1)
      return c.addIntersections(this.e, s, a.e, u), null;
    if (this.env1.init(h, f), this.env2.init(g, d), !this.env1.intersects(this.env2))
      return null;
    var _ = Math.trunc((s + o) / 2), p = Math.trunc((u + l) / 2);
    s < _ && (u < p && this.computeIntersectsForChain(s, _, a, u, p, c), p < l && this.computeIntersectsForChain(s, _, a, p, l, c)), _ < o && (u < p && this.computeIntersectsForChain(_, o, a, u, p, c), p < l && this.computeIntersectsForChain(_, o, a, p, l, c));
  }
};
Mi.prototype.getStartIndexes = function() {
  return this.startIndex;
};
Mi.prototype.computeIntersects = function(t, e) {
  for (var n = this, r = 0; r < this.startIndex.length - 1; r++)
    for (var s = 0; s < t.startIndex.length - 1; s++)
      n.computeIntersectsForChain(r, t, s, e);
};
Mi.prototype.interfaces_ = function() {
  return [];
};
Mi.prototype.getClass = function() {
  return Mi;
};
var ee = function i() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = i.NULL_VALUE;
}, Tg = { NULL_VALUE: { configurable: !0 } };
ee.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
ee.prototype.setDepth = function(t, e, n) {
  this._depth[t][e] = n;
};
ee.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var n = 0; n < 3; n++)
        if (t._depth[e][n] !== ee.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var r = arguments[0];
    return this._depth[r][1] === ee.NULL_VALUE;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return this._depth[s][o] === ee.NULL_VALUE;
  }
};
ee.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var n = t._depth[e][1];
      t._depth[e][2] < n && (n = t._depth[e][2]), n < 0 && (n = 0);
      for (var r = 1; r < 3; r++) {
        var s = 0;
        t._depth[e][r] > n && (s = 1), t._depth[e][r] = s;
      }
    }
};
ee.prototype.getDelta = function(t) {
  return this._depth[t][T.RIGHT] - this._depth[t][T.LEFT];
};
ee.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? I.EXTERIOR : I.INTERIOR;
};
ee.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
ee.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], n = 0; n < 2; n++)
      for (var r = 1; r < 3; r++) {
        var s = e.getLocation(n, r);
        (s === I.EXTERIOR || s === I.INTERIOR) && (t.isNull(n, r) ? t._depth[n][r] = ee.depthAtLocation(s) : t._depth[n][r] += ee.depthAtLocation(s));
      }
  else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    u === I.INTERIOR && this._depth[o][a]++;
  }
};
ee.prototype.interfaces_ = function() {
  return [];
};
ee.prototype.getClass = function() {
  return ee;
};
ee.depthAtLocation = function(t) {
  return t === I.EXTERIOR ? 0 : t === I.INTERIOR ? 1 : ee.NULL_VALUE;
};
Tg.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(ee, Tg);
var gu = function(i) {
  function t() {
    if (i.call(this), this.pts = null, this._env = null, this.eiList = new hi(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new ee(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      this.pts = n, this._label = r;
    }
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var n = new Array(2).fill(null);
    n[0] = this.pts[0], n[1] = this.pts[1];
    var r = new t(n, at.toLineLabel(this._label));
    return r;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(n) {
    this._isIsolated = n;
  }, t.prototype.setName = function(n) {
    this._name = n;
  }, t.prototype.equals = function(n) {
    var r = this;
    if (!(n instanceof t))
      return !1;
    var s = n;
    if (this.pts.length !== s.pts.length)
      return !1;
    for (var o = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (r.pts[l].equals2D(s.pts[l]) || (o = !1), r.pts[l].equals2D(s.pts[--u]) || (a = !1), !o && !a)
        return !1;
    return !0;
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 0)
      return this.pts.length > 0 ? this.pts[0] : null;
    if (arguments.length === 1) {
      var n = arguments[0];
      return this.pts[n];
    }
  }, t.prototype.print = function(n) {
    var r = this;
    n.print("edge " + this._name + ": "), n.print("LINESTRING (");
    for (var s = 0; s < this.pts.length; s++)
      s > 0 && n.print(","), n.print(r.pts[s].x + " " + r.pts[s].y);
    n.print(")  " + this._label + " " + this._depthDelta);
  }, t.prototype.computeIM = function(n) {
    t.updateIM(this._label, n);
  }, t.prototype.isCollapsed = function() {
    return !this._label.isArea() || this.pts.length !== 3 ? !1 : !!this.pts[0].equals(this.pts[2]);
  }, t.prototype.isClosed = function() {
    return this.pts[0].equals(this.pts[this.pts.length - 1]);
  }, t.prototype.getMaximumSegmentIndex = function() {
    return this.pts.length - 1;
  }, t.prototype.getDepthDelta = function() {
    return this._depthDelta;
  }, t.prototype.getNumPoints = function() {
    return this.pts.length;
  }, t.prototype.printReverse = function(n) {
    var r = this;
    n.print("edge " + this._name + ": ");
    for (var s = this.pts.length - 1; s >= 0; s--)
      n.print(r.pts[s] + " ");
    n.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new Mi(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new Y();
      for (var r = 0; r < this.pts.length; r++)
        n._env.expandToInclude(n.pts[r]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, r, s, o) {
    var a = new x(n.getIntersection(o)), u = r, l = n.getEdgeDistance(s, o), c = u + 1;
    if (c < this.pts.length) {
      var h = this.pts[c];
      a.equals2D(h) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, r = new Hn();
    r.append("edge " + this._name + ": "), r.append("LINESTRING (");
    for (var s = 0; s < this.pts.length; s++)
      s > 0 && r.append(","), r.append(n.pts[s].x + " " + n.pts[s].y);
    return r.append(")  " + this._label + " " + this._depthDelta), r.toString();
  }, t.prototype.isPointwiseEqual = function(n) {
    var r = this;
    if (this.pts.length !== n.pts.length)
      return !1;
    for (var s = 0; s < this.pts.length; s++)
      if (!r.pts[s].equals2D(n.pts[s]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(n) {
    this._depthDelta = n;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(n, r, s) {
    for (var o = this, a = 0; a < n.getIntersectionNum(); a++)
      o.addIntersection(n, r, s, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      r.setAtLeastIfValid(n.getLocation(0, T.ON), n.getLocation(1, T.ON), 1), n.isArea() && (r.setAtLeastIfValid(n.getLocation(0, T.LEFT), n.getLocation(1, T.LEFT), 2), r.setAtLeastIfValid(n.getLocation(0, T.RIGHT), n.getLocation(1, T.RIGHT), 2));
    } else
      return i.prototype.updateIM.apply(this, arguments);
  }, t;
}(Ye), ye = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new mn(), this._bufParams = t || null;
};
ye.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ye.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var n = e.getLabel(), r = t.getLabel();
    e.isPointwiseEqual(t) || (r = new at(t.getLabel()), r.flip()), n.merge(r);
    var s = ye.depthDelta(r), o = e.getDepthDelta(), a = o + s;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ye.depthDelta(t.getLabel()));
};
ye.prototype.buildSubgraphs = function(t, e) {
  for (var n = new D(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getRightmostCoordinate(), a = new os(n), u = a.getDepth(o);
    s.computeDepth(u), s.findResultEdges(), n.add(s), e.add(s.getDirectedEdges(), s.getNodes());
  }
};
ye.prototype.createSubgraphs = function(t) {
  for (var e = new D(), n = t.getNodes().iterator(); n.hasNext(); ) {
    var r = n.next();
    if (!r.isVisited()) {
      var s = new Ee();
      s.create(r), e.add(s);
    }
  }
  return _n.sort(e, _n.reverseOrder()), e;
};
ye.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ye.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new dc(), n = new Br();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new We(n)), e;
};
ye.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var r = new Le(n, this._bufParams), s = new rn(t, e, r), o = s.getCurves();
  if (o.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(o, n), this._graph = new Ct(new Pg()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new De(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ye.prototype.computeNodedEdges = function(t, e) {
  var n = this, r = this.getNoder(e);
  r.computeNodes(t);
  for (var s = r.getNodedSubstrings(), o = s.iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new gu(a.getCoordinates(), new at(l));
      n.insertUniqueEdge(c);
    }
  }
};
ye.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
ye.prototype.interfaces_ = function() {
  return [];
};
ye.prototype.getClass = function() {
  return ye;
};
ye.depthDelta = function(t) {
  var e = t.getLocation(0, T.LEFT), n = t.getLocation(0, T.RIGHT);
  return e === I.INTERIOR && n === I.EXTERIOR ? 1 : e === I.EXTERIOR && n === I.INTERIOR ? -1 : 0;
};
ye.convertSegStrings = function(t) {
  for (var e = new Q(), n = new D(); t.hasNext(); ) {
    var r = t.next(), s = e.createLineString(r.getCoordinates());
    n.add(s);
  }
  return e.buildGeometry(n);
};
var Qi = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], r = arguments[1], s = arguments[2], o = arguments[3];
    this._noder = n, this._scaleFactor = r, this._offsetX = s, this._offsetY = o, this._isScaled = !this.isIntegerPrecision();
  }
};
Qi.prototype.rescale = function() {
  var t = this;
  if (q(arguments[0], Ft))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var r = n.next();
      t.rescale(r.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], o = 0; o < s.length; o++)
      s[o].x = s[o].x / t._scaleFactor + t._offsetX, s[o].y = s[o].y / t._scaleFactor + t._offsetY;
    s.length === 2 && s[0].equals2D(s[1]) && ne.out.println(s);
  }
};
Qi.prototype.scale = function() {
  var t = this;
  if (q(arguments[0], Ft)) {
    for (var e = arguments[0], n = new D(), r = e.iterator(); r.hasNext(); ) {
      var s = r.next();
      n.add(new Pt(t.scale(s.getCoordinates()), s.getData()));
    }
    return n;
  } else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], a = new Array(o.length).fill(null), u = 0; u < o.length; u++)
      a[u] = new x(Math.round((o[u].x - t._offsetX) * t._scaleFactor), Math.round((o[u].y - t._offsetY) * t._scaleFactor), o[u].z);
    var l = $.removeRepeatedPoints(a);
    return l;
  }
};
Qi.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
Qi.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
Qi.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
Qi.prototype.interfaces_ = function() {
  return [br];
};
Qi.prototype.getClass = function() {
  return Qi;
};
var Un = function() {
  this._li = new Br(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, Mg = { fact: { configurable: !0 } };
Un.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next(), r = n.getCoordinates();
      t.checkEndPtVertexIntersections(r[0], t._segStrings), t.checkEndPtVertexIntersections(r[r.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var s = arguments[0], o = arguments[1], a = o.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(s))
          throw new Li("found endpt/interior pt intersection at index " + c + " :pt " + s);
  }
};
Un.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var n = e.next(), r = this._segStrings.iterator(); r.hasNext(); ) {
        var s = r.next();
        t.checkInteriorIntersections(n, s);
      }
  else if (arguments.length === 2)
    for (var o = arguments[0], a = arguments[1], u = o.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var h = 0; h < l.length - 1; h++)
        t.checkInteriorIntersections(o, c, a, h);
  else if (arguments.length === 4) {
    var f = arguments[0], g = arguments[1], d = arguments[2], _ = arguments[3];
    if (f === d && g === _)
      return null;
    var p = f.getCoordinates()[g], m = f.getCoordinates()[g + 1], y = d.getCoordinates()[_], v = d.getCoordinates()[_ + 1];
    if (this._li.computeIntersection(p, m, y, v), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, p, m) || this.hasInteriorIntersection(this._li, y, v)))
      throw new Li("found non-noded intersection at " + p + "-" + m + " and " + y + "-" + v);
  }
};
Un.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
Un.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next();
      t.checkCollapses(n);
    }
  else if (arguments.length === 1)
    for (var r = arguments[0], s = r.getCoordinates(), o = 0; o < s.length - 2; o++)
      t.checkCollapse(s[o], s[o + 1], s[o + 2]);
};
Un.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var r = 0; r < t.getIntersectionNum(); r++) {
    var s = t.getIntersection(r);
    if (!(s.equals(e) || s.equals(n)))
      return !0;
  }
  return !1;
};
Un.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new Li("found non-noded collapse at " + Un.fact.createLineString([t, e, n]));
};
Un.prototype.interfaces_ = function() {
  return [];
};
Un.prototype.getClass = function() {
  return Un;
};
Mg.fact.get = function() {
  return new Q();
};
Object.defineProperties(Un, Mg);
var be = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new vt("Scale factor must be non-zero");
  e !== 1 && (this._pt = new x(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new x(), this._p1Scaled = new x()), this.initCorners(this._pt);
}, Og = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
be.prototype.intersectsScaled = function(t, e) {
  var n = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), o = Math.max(t.y, e.y), a = this._maxx < n || this._minx > r || this._maxy < s || this._miny > o;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return J.isTrue(!(a && u), "Found bad envelope test"), u;
};
be.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new x(this._maxx, this._maxy), this._corner[1] = new x(this._minx, this._maxy), this._corner[2] = new x(this._minx, this._miny), this._corner[3] = new x(this._maxx, this._miny);
};
be.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
be.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
be.prototype.getCoordinate = function() {
  return this._originalPt;
};
be.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
be.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = be.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new Y(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
be.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
be.prototype.intersectsToleranceSquare = function(t, e) {
  var n = !1, r = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || n && r || t.equals(this._pt) || e.equals(this._pt));
};
be.prototype.addSnappedNode = function(t, e) {
  var n = t.getCoordinate(e), r = t.getCoordinate(e + 1);
  return this.intersects(n, r) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
Og.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(be, Og);
var ca = function() {
  this.tempEnv1 = new Y(), this.selectedSegment = new U();
};
ca.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
ca.prototype.interfaces_ = function() {
  return [];
};
ca.prototype.getClass = function() {
  return ca;
};
var ro = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, Ag = { HotPixelSnapAction: { configurable: !0 } };
ro.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = e.getSafeEnvelope(), o = new Dg(e, n, r);
    return this._index.query(s, {
      interfaces_: function() {
        return [Zi];
      },
      visitItem: function(a) {
        var u = a;
        u.select(s, o);
      }
    }), o.isNodeAdded();
  }
};
ro.prototype.interfaces_ = function() {
  return [];
};
ro.prototype.getClass = function() {
  return ro;
};
Ag.HotPixelSnapAction.get = function() {
  return Dg;
};
Object.defineProperties(ro, Ag);
var Dg = function(i) {
  function t() {
    i.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], n = arguments[1], r = arguments[2];
    this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = r;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1], s = n.getContext();
      if (this._parentEdge !== null && s === this._parentEdge && r === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(s, r);
    } else
      return i.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ca), as = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new D();
};
as.prototype.processIntersections = function(t, e, n, r) {
  var s = this;
  if (t === n && e === r)
    return null;
  var o = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[r], l = n.getCoordinates()[r + 1];
  if (this._li.computeIntersection(o, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      s._interiorIntersections.add(s._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1);
  }
};
as.prototype.isDone = function() {
  return !1;
};
as.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
as.prototype.interfaces_ = function() {
  return [Tr];
};
as.prototype.getClass = function() {
  return as;
};
var fi = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Br(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
fi.prototype.checkCorrectness = function(t) {
  var e = Pt.getNodedSubstrings(t), n = new Un(e);
  try {
    n.checkValid();
  } catch (r) {
    if (r instanceof yg)
      r.printStackTrace();
    else
      throw r;
  } finally {
  }
};
fi.prototype.getNodedSubstrings = function() {
  return Pt.getNodedSubstrings(this._nodedSegStrings);
};
fi.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
fi.prototype.findInteriorIntersections = function(t, e) {
  var n = new as(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
fi.prototype.computeVertexSnaps = function() {
  var t = this;
  if (q(arguments[0], Ft))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var r = n.next();
      t.computeVertexSnaps(r);
    }
  else if (arguments[0] instanceof Pt)
    for (var s = arguments[0], o = s.getCoordinates(), a = 0; a < o.length; a++) {
      var u = new be(o[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, s, a);
      l && s.addIntersection(o[a], a);
    }
};
fi.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new dc(), this._pointSnapper = new ro(this._noder.getIndex()), this.snapRound(t, this._li);
};
fi.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next(), s = new be(r, e._scaleFactor, e._li);
    e._pointSnapper.snap(s);
  }
};
fi.prototype.interfaces_ = function() {
  return [br];
};
fi.prototype.getClass = function() {
  return fi;
};
var te = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new rt(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, yo = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
te.prototype.bufferFixedPrecision = function(t) {
  var e = new Qi(new fi(new st(1)), t.getScale()), n = new ye(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
te.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = te.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (o) {
        if (o instanceof Pi)
          t._saveException = o;
        else
          throw o;
      } finally {
      }
      if (t._resultGeometry !== null)
        return null;
    }
    throw this._saveException;
  } else if (arguments.length === 1) {
    var n = arguments[0], r = te.precisionScaleFactor(this._argGeom, this._distance, n), s = new st(r);
    this.bufferFixedPrecision(s);
  }
};
te.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === st.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
te.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
te.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ye(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Li)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
te.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
te.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
te.prototype.interfaces_ = function() {
  return [];
};
te.prototype.getClass = function() {
  return te;
};
te.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new te(t), r = n.getResultGeometry(e);
    return r;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof W && typeof arguments[1] == "number") {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new te(s);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(o);
      return l;
    } else if (arguments[2] instanceof rt && arguments[0] instanceof W && typeof arguments[1] == "number") {
      var c = arguments[0], h = arguments[1], f = arguments[2], g = new te(c, f), d = g.getResultGeometry(h);
      return d;
    }
  } else if (arguments.length === 4) {
    var _ = arguments[0], p = arguments[1], m = arguments[2], y = arguments[3], v = new te(_);
    v.setQuadrantSegments(m), v.setEndCapStyle(y);
    var C = v.getResultGeometry(p);
    return C;
  }
};
te.precisionScaleFactor = function(t, e, n) {
  var r = t.getEnvelopeInternal(), s = Xe.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())), o = e > 0 ? e : 0, a = s + 2 * o, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, c = Math.pow(10, l);
  return c;
};
yo.CAP_ROUND.get = function() {
  return rt.CAP_ROUND;
};
yo.CAP_BUTT.get = function() {
  return rt.CAP_FLAT;
};
yo.CAP_FLAT.get = function() {
  return rt.CAP_FLAT;
};
yo.CAP_SQUARE.get = function() {
  return rt.CAP_SQUARE;
};
yo.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(te, yo);
var pe = function() {
  this._pt = [new x(), new x()], this._distance = H.NaN, this._isNull = !0;
};
pe.prototype.getCoordinates = function() {
  return this._pt;
};
pe.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
pe.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var r = e.distance(n);
    r < this._distance && this.initialize(e, n, r);
  }
};
pe.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = s, this._isNull = !1;
  }
};
pe.prototype.getDistance = function() {
  return this._distance;
};
pe.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var r = e.distance(n);
    r > this._distance && this.initialize(e, n, r);
  }
};
pe.prototype.interfaces_ = function() {
  return [];
};
pe.prototype.getClass = function() {
  return pe;
};
var $n = function() {
};
$n.prototype.interfaces_ = function() {
  return [];
};
$n.prototype.getClass = function() {
  return $n;
};
$n.computeDistance = function() {
  if (arguments[2] instanceof pe && arguments[0] instanceof St && arguments[1] instanceof x)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), s = new U(), o = 0; o < r.length - 1; o++) {
      s.setCoordinates(r[o], r[o + 1]);
      var a = s.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof pe && arguments[0] instanceof Vt && arguments[1] instanceof x) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    $n.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      $n.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof pe && arguments[0] instanceof W && arguments[1] instanceof x) {
    var f = arguments[0], g = arguments[1], d = arguments[2];
    if (f instanceof St)
      $n.computeDistance(f, g, d);
    else if (f instanceof Vt)
      $n.computeDistance(f, g, d);
    else if (f instanceof ve)
      for (var _ = f, p = 0; p < _.getNumGeometries(); p++) {
        var m = _.getGeometryN(p);
        $n.computeDistance(m, g, d);
      }
    else
      d.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof pe && arguments[0] instanceof U && arguments[1] instanceof x) {
    var y = arguments[0], v = arguments[1], C = arguments[2], E = y.closestPoint(v);
    C.setMinimum(E, v);
  }
};
var Or = function(t) {
  this._maxPtDist = new pe(), this._inputGeom = t || null;
}, pc = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
Or.prototype.computeMaxMidpointDistance = function(t) {
  var e = new $i(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Or.prototype.computeMaxVertexDistance = function(t) {
  var e = new us(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Or.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
Or.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
Or.prototype.interfaces_ = function() {
  return [];
};
Or.prototype.getClass = function() {
  return Or;
};
pc.MaxPointDistanceFilter.get = function() {
  return us;
};
pc.MaxMidpointDistanceFilter.get = function() {
  return $i;
};
Object.defineProperties(Or, pc);
var us = function(t) {
  this._maxPtDist = new pe(), this._minPtDist = new pe(), this._geom = t || null;
};
us.prototype.filter = function(t) {
  this._minPtDist.initialize(), $n.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
us.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
us.prototype.interfaces_ = function() {
  return [ai];
};
us.prototype.getClass = function() {
  return us;
};
var $i = function(t) {
  this._maxPtDist = new pe(), this._minPtDist = new pe(), this._geom = t || null;
};
$i.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), s = new x((n.x + r.x) / 2, (n.y + r.y) / 2);
  this._minPtDist.initialize(), $n.computeDistance(this._geom, s, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
$i.prototype.isDone = function() {
  return !1;
};
$i.prototype.isGeometryChanged = function() {
  return !1;
};
$i.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
$i.prototype.interfaces_ = function() {
  return [dn];
};
$i.prototype.getClass = function() {
  return $i;
};
var Ni = function(t) {
  this._comps = t || null;
};
Ni.prototype.filter = function(t) {
  t instanceof Vt && this._comps.add(t);
};
Ni.prototype.interfaces_ = function() {
  return [Bn];
};
Ni.prototype.getClass = function() {
  return Ni;
};
Ni.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Ni.getPolygons(t, new D());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Vt ? n.add(e) : e instanceof ve && e.apply(new Ni(n)), n;
  }
};
var $t = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._lines = e, this._isForcedToLineString = n;
  }
};
$t.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof ui) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof St && this._lines.add(t);
};
$t.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
$t.prototype.interfaces_ = function() {
  return [bi];
};
$t.prototype.getClass = function() {
  return $t;
};
$t.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry($t.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e.getFactory().buildGeometry($t.getLines(e, n));
  }
};
$t.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return $t.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (q(arguments[0], Ft) && q(arguments[1], Ft)) {
      for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext(); ) {
        var s = r.next();
        $t.getLines(s, n);
      }
      return n;
    } else if (arguments[0] instanceof W && typeof arguments[1] == "boolean") {
      var o = arguments[0], a = arguments[1], u = new D();
      return o.apply(new $t(u, a)), u;
    } else if (arguments[0] instanceof W && q(arguments[1], Ft)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof St ? c.add(l) : l.apply(new $t(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && q(arguments[0], Ft) && q(arguments[1], Ft)) {
      for (var h = arguments[0], f = arguments[1], g = arguments[2], d = h.iterator(); d.hasNext(); ) {
        var _ = d.next();
        $t.getLines(_, f, g);
      }
      return f;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof W && q(arguments[1], Ft)) {
      var p = arguments[0], m = arguments[1], y = arguments[2];
      return p.apply(new $t(m, y)), m;
    }
  }
};
var yn = function() {
  if (this._boundaryRule = en.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new vt("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
yn.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof x && arguments[1] instanceof Vt) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return I.EXTERIOR;
    var r = n.getExteriorRing(), s = this.locateInPolygonRing(e, r);
    if (s === I.EXTERIOR)
      return I.EXTERIOR;
    if (s === I.BOUNDARY)
      return I.BOUNDARY;
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var a = n.getInteriorRingN(o), u = t.locateInPolygonRing(e, a);
      if (u === I.INTERIOR)
        return I.EXTERIOR;
      if (u === I.BOUNDARY)
        return I.BOUNDARY;
    }
    return I.INTERIOR;
  } else if (arguments[0] instanceof x && arguments[1] instanceof St) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return I.EXTERIOR;
    var h = c.getCoordinates();
    return !c.isClosed() && (l.equals(h[0]) || l.equals(h[h.length - 1])) ? I.BOUNDARY : k.isOnLine(l, h) ? I.INTERIOR : I.EXTERIOR;
  } else if (arguments[0] instanceof x && arguments[1] instanceof Ae) {
    var f = arguments[0], g = arguments[1], d = g.getCoordinate();
    return d.equals2D(f) ? I.INTERIOR : I.EXTERIOR;
  }
};
yn.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? k.locatePointInRing(t, e.getCoordinates()) : I.EXTERIOR;
};
yn.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== I.EXTERIOR;
};
yn.prototype.updateLocationInfo = function(t) {
  t === I.INTERIOR && (this._isIn = !0), t === I.BOUNDARY && this._numBoundaries++;
};
yn.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof Ae && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof St)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Vt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Lr)
    for (var r = e, s = 0; s < r.getNumGeometries(); s++) {
      var o = r.getGeometryN(s);
      n.updateLocationInfo(n.locateInternal(t, o));
    }
  else if (e instanceof ri)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof ve)
    for (var c = new si(e); c.hasNext(); ) {
      var h = c.next();
      h !== e && n.computeLocation(t, h);
    }
};
yn.prototype.locate = function(t, e) {
  return e.isEmpty() ? I.EXTERIOR : e instanceof St ? this.locateInternal(t, e) : e instanceof Vt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? I.BOUNDARY : this._numBoundaries > 0 || this._isIn ? I.INTERIOR : I.EXTERIOR);
};
yn.prototype.interfaces_ = function() {
  return [];
};
yn.prototype.getClass = function() {
  return yn;
};
var _e = function i() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    i.call(this, t, i.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._component = n, this._segIndex = r, this._pt = s;
  }
}, Fg = { INSIDE_AREA: { configurable: !0 } };
_e.prototype.isInsideArea = function() {
  return this._segIndex === _e.INSIDE_AREA;
};
_e.prototype.getCoordinate = function() {
  return this._pt;
};
_e.prototype.getGeometryComponent = function() {
  return this._component;
};
_e.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
_e.prototype.interfaces_ = function() {
  return [];
};
_e.prototype.getClass = function() {
  return _e;
};
Fg.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(_e, Fg);
var Ui = function(t) {
  this._pts = t || null;
};
Ui.prototype.filter = function(t) {
  t instanceof Ae && this._pts.add(t);
};
Ui.prototype.interfaces_ = function() {
  return [Bn];
};
Ui.prototype.getClass = function() {
  return Ui;
};
Ui.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof Ae ? _n.singletonList(t) : Ui.getPoints(t, new D());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Ae ? n.add(e) : e instanceof ve && e.apply(new Ui(n)), n;
  }
};
var ls = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
ls.prototype.filter = function(t) {
  (t instanceof Ae || t instanceof St || t instanceof Vt) && this._locations.add(new _e(t, 0, t.getCoordinate()));
};
ls.prototype.interfaces_ = function() {
  return [Bn];
};
ls.prototype.getClass = function() {
  return ls;
};
ls.getLocations = function(t) {
  var e = new D();
  return t.apply(new ls(e)), e;
};
var ie = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new yn(), this._minDistanceLocation = null, this._minDistance = H.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = r, this._terminateDistance = s;
  }
};
ie.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = 1 - n, o = Ni.getPolygons(this._geom[n]);
    if (o.size() > 0) {
      var a = ls.getLocations(this._geom[s]);
      if (this.computeContainmentDistance(a, o, r), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[s] = r[0], this._minDistanceLocation[n] = r[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && q(arguments[0], fn) && q(arguments[1], fn)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], h = 0; h < u.size(); h++)
        for (var f = u.get(h), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(f, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof _e && arguments[1] instanceof Vt) {
      var d = arguments[0], _ = arguments[1], p = arguments[2], m = d.getCoordinate();
      if (I.EXTERIOR !== this._ptLocator.locate(m, _))
        return this._minDistance = 0, p[0] = d, p[1] = new _e(_, m), null;
    }
  }
};
ie.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (r.computeMinDistance(o, u, n), r._minDistance <= r._terminateDistance)
        return null;
    }
};
ie.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = $t.getLines(this._geom[0]), n = $t.getLines(this._geom[1]), r = Ui.getPoints(this._geom[0]), s = Ui.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, s, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, r, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(r, s, t), this.updateMinDistance(t, !1);
};
ie.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
ie.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
ie.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
ie.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof St && arguments[1] instanceof Ae) {
      var e = arguments[0], n = arguments[1], r = arguments[2];
      if (e.getEnvelopeInternal().distance(n.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var s = e.getCoordinates(), o = n.getCoordinate(), a = 0; a < s.length - 1; a++) {
        var u = k.distancePointLine(o, s[a], s[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new U(s[a], s[a + 1]), c = l.closestPoint(o);
          r[0] = new _e(e, a, c), r[1] = new _e(n, 0, o);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof St && arguments[1] instanceof St) {
      var h = arguments[0], f = arguments[1], g = arguments[2];
      if (h.getEnvelopeInternal().distance(f.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var d = h.getCoordinates(), _ = f.getCoordinates(), p = 0; p < d.length - 1; p++)
        for (var m = 0; m < _.length - 1; m++) {
          var y = k.distanceLineLine(d[p], d[p + 1], _[m], _[m + 1]);
          if (y < t._minDistance) {
            t._minDistance = y;
            var v = new U(d[p], d[p + 1]), C = new U(_[m], _[m + 1]), E = v.closestPoints(C);
            g[0] = new _e(h, p, E[0]), g[1] = new _e(f, m, E[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
ie.prototype.computeMinDistancePoints = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = o.getCoordinate().distance(u.getCoordinate());
      if (l < r._minDistance && (r._minDistance = l, n[0] = new _e(o, 0, o.getCoordinate()), n[1] = new _e(u, 0, u.getCoordinate())), r._minDistance <= r._terminateDistance)
        return null;
    }
};
ie.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new vt("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
ie.prototype.computeMinDistanceLines = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (r.computeMinDistance(o, u, n), r._minDistance <= r._terminateDistance)
        return null;
    }
};
ie.prototype.interfaces_ = function() {
  return [];
};
ie.prototype.getClass = function() {
  return ie;
};
ie.distance = function(t, e) {
  var n = new ie(t, e);
  return n.distance();
};
ie.isWithinDistance = function(t, e, n) {
  var r = new ie(t, e, n);
  return r.distance() <= n;
};
ie.nearestPoints = function(t, e) {
  var n = new ie(t, e);
  return n.nearestPoints();
};
var ae = function() {
  this._pt = [new x(), new x()], this._distance = H.NaN, this._isNull = !0;
};
ae.prototype.getCoordinates = function() {
  return this._pt;
};
ae.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
ae.prototype.setMinimum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMinimum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var r = e.distance(n);
    r < this._distance && this.initialize(e, n, r);
  }
};
ae.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = s, this._isNull = !1;
  }
};
ae.prototype.toString = function() {
  return gn.toLineString(this._pt[0], this._pt[1]);
};
ae.prototype.getDistance = function() {
  return this._distance;
};
ae.prototype.setMaximum = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setMaximum(t._pt[0], t._pt[1]);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    if (this._isNull)
      return this.initialize(e, n), null;
    var r = e.distance(n);
    r > this._distance && this.initialize(e, n, r);
  }
};
ae.prototype.interfaces_ = function() {
  return [];
};
ae.prototype.getClass = function() {
  return ae;
};
var Mn = function() {
};
Mn.prototype.interfaces_ = function() {
  return [];
};
Mn.prototype.getClass = function() {
  return Mn;
};
Mn.computeDistance = function() {
  if (arguments[2] instanceof ae && arguments[0] instanceof St && arguments[1] instanceof x)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new U(), s = t.getCoordinates(), o = 0; o < s.length - 1; o++) {
      r.setCoordinates(s[o], s[o + 1]);
      var a = r.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof ae && arguments[0] instanceof Vt && arguments[1] instanceof x) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Mn.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      Mn.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof ae && arguments[0] instanceof W && arguments[1] instanceof x) {
    var f = arguments[0], g = arguments[1], d = arguments[2];
    if (f instanceof St)
      Mn.computeDistance(f, g, d);
    else if (f instanceof Vt)
      Mn.computeDistance(f, g, d);
    else if (f instanceof ve)
      for (var _ = f, p = 0; p < _.getNumGeometries(); p++) {
        var m = _.getGeometryN(p);
        Mn.computeDistance(m, g, d);
      }
    else
      d.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof ae && arguments[0] instanceof U && arguments[1] instanceof x) {
    var y = arguments[0], v = arguments[1], C = arguments[2], E = y.closestPoint(v);
    C.setMinimum(E, v);
  }
};
var $e = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new ae(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, _c = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
$e.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
$e.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new vt("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
$e.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
$e.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
$e.prototype.computeOrientedDistance = function(t, e, n) {
  var r = new cs(e);
  if (t.apply(r), n.setMaximum(r.getMaxPointDistance()), this._densifyFrac > 0) {
    var s = new tr(e, this._densifyFrac);
    t.apply(s), n.setMaximum(s.getMaxPointDistance());
  }
};
$e.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
$e.prototype.interfaces_ = function() {
  return [];
};
$e.prototype.getClass = function() {
  return $e;
};
$e.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new $e(t, e);
    return n.distance();
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = new $e(r, s);
    return a.setDensifyFraction(o), a.distance();
  }
};
_c.MaxPointDistanceFilter.get = function() {
  return cs;
};
_c.MaxDensifiedByFractionDistanceFilter.get = function() {
  return tr;
};
Object.defineProperties($e, _c);
var cs = function() {
  this._maxPtDist = new ae(), this._minPtDist = new ae(), this._euclideanDist = new Mn(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
cs.prototype.filter = function(t) {
  this._minPtDist.initialize(), Mn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
cs.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
cs.prototype.interfaces_ = function() {
  return [ai];
};
cs.prototype.getClass = function() {
  return cs;
};
var tr = function() {
  this._maxPtDist = new ae(), this._minPtDist = new ae(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
tr.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var r = t.getCoordinate(e - 1), s = t.getCoordinate(e), o = (s.x - r.x) / this._numSubSegs, a = (s.y - r.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = r.x + u * o, c = r.y + u * a, h = new x(l, c);
    n._minPtDist.initialize(), Mn.computeDistance(n._geom, h, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
tr.prototype.isDone = function() {
  return !1;
};
tr.prototype.isGeometryChanged = function() {
  return !1;
};
tr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
tr.prototype.interfaces_ = function() {
  return [dn];
};
tr.prototype.getClass = function() {
  return tr;
};
var Oe = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, mc = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
Oe.prototype.checkMaximumDistance = function(t, e, n) {
  var r = new $e(e, t);
  if (r.setDensifyFraction(0.25), this._maxDistanceFound = r.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var s = r.getCoordinates();
    this._errorLocation = s[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + gn.toLineString(s[0], s[1]) + ")";
  }
};
Oe.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = Oe.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), Oe.VERBOSE && ne.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
Oe.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Vt || this._input instanceof ri || this._input instanceof ve))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
Oe.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Oe.prototype.checkMinimumDistance = function(t, e, n) {
  var r = new ie(t, e, n);
  if (this._minDistanceFound = r.distance(), this._minDistanceFound < n) {
    this._isValid = !1;
    var s = r.nearestPoints();
    this._errorLocation = r.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + gn.toLineString(s[0], s[1]) + " )";
  }
};
Oe.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
Oe.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Oe.prototype.getPolygonLines = function(t) {
  for (var e = new D(), n = new $t(e), r = Ni.getPolygons(t), s = r.iterator(); s.hasNext(); ) {
    var o = s.next();
    o.apply(n);
  }
  return t.getFactory().buildGeometry(e);
};
Oe.prototype.getErrorMessage = function() {
  return this._errMsg;
};
Oe.prototype.interfaces_ = function() {
  return [];
};
Oe.prototype.getClass = function() {
  return Oe;
};
mc.VERBOSE.get = function() {
  return !1;
};
mc.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Oe, mc);
var re = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, yc = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
re.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
re.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * re.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new Y(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var n = new Y(this._result.getEnvelopeInternal());
  n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope");
};
re.prototype.checkDistance = function() {
  var t = new Oe(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
re.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
re.prototype.checkPolygonal = function() {
  this._result instanceof Vt || this._result instanceof ri || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
re.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
re.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
re.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
re.prototype.report = function(t) {
  if (!re.VERBOSE)
    return null;
  ne.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
re.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
re.isValidMsg = function(t, e, n) {
  var r = new re(t, e, n);
  return r.isValid() ? null : r.getErrorMessage();
};
re.isValid = function(t, e, n) {
  var r = new re(t, e, n);
  return !!r.isValid();
};
yc.VERBOSE.get = function() {
  return !1;
};
yc.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(re, yc);
var Wn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Wn.prototype.getCoordinates = function() {
  return this._pts;
};
Wn.prototype.size = function() {
  return this._pts.length;
};
Wn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Wn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Wn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : ss.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Wn.prototype.setData = function(t) {
  this._data = t;
};
Wn.prototype.getData = function() {
  return this._data;
};
Wn.prototype.toString = function() {
  return gn.toLineString(new Nt(this._pts));
};
Wn.prototype.interfaces_ = function() {
  return [ci];
};
Wn.prototype.getClass = function() {
  return Wn;
};
var qt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new D(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
qt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
qt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
qt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
qt.prototype.count = function() {
  return this._intersectionCount;
};
qt.prototype.getIntersections = function() {
  return this._intersections;
};
qt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
qt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
qt.prototype.processIntersections = function(t, e, n, r) {
  if (!this._findAllIntersections && this.hasIntersection() || t === n && e === r)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var s = this.isEndSegment(t, e) || this.isEndSegment(n, r);
    if (!s)
      return null;
  }
  var o = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[r], l = n.getCoordinates()[r + 1];
  this._li.computeIntersection(o, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = o, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
qt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
qt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
qt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
qt.prototype.interfaces_ = function() {
  return [Tr];
};
qt.prototype.getClass = function() {
  return qt;
};
qt.createAllIntersectionsFinder = function(t) {
  var e = new qt(t);
  return e.setFindAllIntersections(!0), e;
};
qt.createAnyIntersectionFinder = function(t) {
  return new qt(t);
};
qt.createIntersectionCounter = function(t) {
  var e = new qt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var vn = function() {
  this._li = new Br(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
vn.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
vn.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
vn.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
vn.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
vn.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new qt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new dc();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
vn.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new Pi(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
vn.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + gn.toLineString(t[0], t[1]) + " and " + gn.toLineString(t[2], t[3]);
};
vn.prototype.interfaces_ = function() {
  return [];
};
vn.prototype.getClass = function() {
  return vn;
};
vn.computeIntersections = function(t) {
  var e = new vn(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Ar = function i() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new vn(i.toSegmentStrings(t));
};
Ar.prototype.checkValid = function() {
  this._nv.checkValid();
};
Ar.prototype.interfaces_ = function() {
  return [];
};
Ar.prototype.getClass = function() {
  return Ar;
};
Ar.toSegmentStrings = function(t) {
  for (var e = new D(), n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e.add(new Wn(r.getCoordinates(), r));
  }
  return e;
};
Ar.checkValid = function(t) {
  var e = new Ar(t);
  e.checkValid();
};
var hs = function(t) {
  this._mapOp = t;
};
hs.prototype.map = function(t) {
  for (var e = this, n = new D(), r = 0; r < t.getNumGeometries(); r++) {
    var s = e._mapOp.map(t.getGeometryN(r));
    s.isEmpty() || n.add(s);
  }
  return t.getFactory().createGeometryCollection(Q.toGeometryArray(n));
};
hs.prototype.interfaces_ = function() {
  return [];
};
hs.prototype.getClass = function() {
  return hs;
};
hs.map = function(t, e) {
  var n = new hs(e);
  return n.map(t);
};
var qn = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new D(), this._resultLineList = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = n;
};
qn.prototype.collectLines = function(t) {
  for (var e = this, n = this._op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
    var r = n.next();
    e.collectLineEdge(r, t, e._lineEdgesList), e.collectBoundaryTouchEdge(r, t, e._lineEdgesList);
  }
};
qn.prototype.labelIsolatedLine = function(t, e) {
  var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, n);
};
qn.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
qn.prototype.collectLineEdge = function(t, e, n) {
  var r = t.getLabel(), s = t.getEdge();
  t.isLineEdge() && !t.isVisited() && j.isResultOfOp(r, e) && !s.isCovered() && (n.add(s), t.setVisitedEdge(!0));
};
qn.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().findCoveredLineEdges();
  }
  for (var r = this._op.getGraph().getEdgeEnds().iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getEdge();
    if (s.isLineEdge() && !o.isCoveredSet()) {
      var a = t._op.isCoveredByA(s.getCoordinate());
      o.setCovered(a);
    }
  }
};
qn.prototype.labelIsolatedLines = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getLabel();
    r.isIsolated() && (s.isNull(0) ? e.labelIsolatedLine(r, 0) : e.labelIsolatedLine(r, 1));
  }
};
qn.prototype.buildLines = function(t) {
  for (var e = this, n = this._lineEdgesList.iterator(); n.hasNext(); ) {
    var r = n.next(), s = e._geometryFactory.createLineString(r.getCoordinates());
    e._resultLineList.add(s), r.setInResult(!0);
  }
};
qn.prototype.collectBoundaryTouchEdge = function(t, e, n) {
  var r = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  J.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), j.isResultOfOp(r, e) && e === j.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
qn.prototype.interfaces_ = function() {
  return [];
};
qn.prototype.getClass = function() {
  return qn;
};
var fs = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new D();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
fs.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
fs.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var r = n.next();
    if (!r.isInResult() && !r.isIncidentEdgeInResult() && (r.getEdges().getDegree() === 0 || t === j.INTERSECTION)) {
      var s = r.getLabel();
      j.isResultOfOp(s, t) && e.filterCoveredNodeToPoint(r);
    }
  }
};
fs.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
fs.prototype.interfaces_ = function() {
  return [];
};
fs.prototype.getClass = function() {
  return fs;
};
var Pe = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
Pe.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Pe.prototype.transformPolygon = function(t, e) {
  var n = this, r = !0, s = this.transformLinearRing(t.getExteriorRing(), t);
  (s === null || !(s instanceof ui) || s.isEmpty()) && (r = !1);
  for (var o = new D(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof ui || (r = !1), o.add(u));
  }
  if (r)
    return this._factory.createPolygon(s, o.toArray([]));
  var l = new D();
  return s !== null && l.add(s), l.addAll(o), this._factory.buildGeometry(l);
};
Pe.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
Pe.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
Pe.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, r = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformLineString(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
Pe.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
Pe.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Pe.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, r = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPoint(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
Pe.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, r = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPolygon(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
Pe.prototype.copy = function(t) {
  return t.copy();
};
Pe.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, r = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transform(t.getGeometryN(s));
    o !== null && (n._pruneEmptyGeometry && o.isEmpty() || r.add(o));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(Q.toGeometryArray(r)) : this._factory.buildGeometry(r);
};
Pe.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof Ae)
    return this.transformPoint(t, null);
  if (t instanceof $s)
    return this.transformMultiPoint(t, null);
  if (t instanceof ui)
    return this.transformLinearRing(t, null);
  if (t instanceof St)
    return this.transformLineString(t, null);
  if (t instanceof Lr)
    return this.transformMultiLineString(t, null);
  if (t instanceof Vt)
    return this.transformPolygon(t, null);
  if (t instanceof ri)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ve)
    return this.transformGeometryCollection(t, null);
  throw new vt("Unknown Geometry subtype: " + t.getClass().getName());
};
Pe.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var r = n.size();
  return r > 0 && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
Pe.prototype.interfaces_ = function() {
  return [];
};
Pe.prototype.getClass = function() {
  return Pe;
};
var gi = function i() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new U(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof St && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    i.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], r = arguments[1];
    this._srcPts = n, this._isClosed = i.isClosed(n), this._snapTolerance = r;
  }
};
gi.prototype.snapVertices = function(t, e) {
  for (var n = this, r = this._isClosed ? t.size() - 1 : t.size(), s = 0; s < r; s++) {
    var o = t.get(s), a = n.findSnapForVertex(o, e);
    a !== null && (t.set(s, new x(a)), s === 0 && n._isClosed && t.set(t.size() - 1, new x(a)));
  }
};
gi.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, r = 0; r < e.length; r++) {
    if (t.equals2D(e[r]))
      return null;
    if (t.distance(e[r]) < n._snapTolerance)
      return e[r];
  }
  return null;
};
gi.prototype.snapTo = function(t) {
  var e = new xa(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
gi.prototype.snapSegments = function(t, e) {
  var n = this;
  if (e.length === 0)
    return null;
  var r = e.length;
  e[0].equals2D(e[e.length - 1]) && (r = e.length - 1);
  for (var s = 0; s < r; s++) {
    var o = e[s], a = n.findSegmentIndexToSnap(o, t);
    a >= 0 && t.add(a + 1, new x(o), !1);
  }
};
gi.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, r = H.MAX_VALUE, s = -1, o = 0; o < e.size() - 1; o++) {
    if (n._seg.p0 = e.get(o), n._seg.p1 = e.get(o + 1), n._seg.p0.equals2D(t) || n._seg.p1.equals2D(t)) {
      if (n._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = n._seg.distance(t);
    a < n._snapTolerance && a < r && (r = a, s = o);
  }
  return s;
};
gi.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
gi.prototype.interfaces_ = function() {
  return [];
};
gi.prototype.getClass = function() {
  return gi;
};
gi.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var Lt = function(t) {
  this._srcGeom = t || null;
}, kg = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
Lt.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), r = new Gg(e, n);
  return r.transform(this._srcGeom);
};
Lt.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), r = new Gg(t, n, !0), s = r.transform(this._srcGeom), o = s;
  return e && q(o, ji) && (o = s.buffer(0)), o;
};
Lt.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
Lt.prototype.extractTargetCoordinates = function(t) {
  for (var e = new Gn(), n = t.getCoordinates(), r = 0; r < n.length; r++)
    e.add(n[r]);
  return e.toArray(new Array(0).fill(null));
};
Lt.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = H.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var r = t[n].distance(t[n + 1]);
    r < e && (e = r);
  }
  return e;
};
Lt.prototype.interfaces_ = function() {
  return [];
};
Lt.prototype.getClass = function() {
  return Lt;
};
Lt.snap = function(t, e, n) {
  var r = new Array(2).fill(null), s = new Lt(t);
  r[0] = s.snapTo(e, n);
  var o = new Lt(e);
  return r[1] = o.snapTo(r[0], n), r;
};
Lt.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = Lt.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === st.FIXED) {
      var r = 1 / n.getScale() * 2 / 1.415;
      r > e && (e = r);
    }
    return e;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return Math.min(Lt.computeOverlaySnapTolerance(s), Lt.computeOverlaySnapTolerance(o));
  }
};
Lt.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), r = n * Lt.SNAP_PRECISION_FACTOR;
  return r;
};
Lt.snapToSelf = function(t, e, n) {
  var r = new Lt(t);
  return r.snapToSelf(e, n);
};
kg.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(Lt, kg);
var Gg = function(i) {
  function t(e, n, r) {
    i.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = r !== void 0 ? r : !1;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, r) {
    var s = new gi(n, this._snapTolerance);
    return s.setAllowSnappingToSourceVertices(this._isSelfSnap), s.snapTo(r);
  }, t.prototype.transformCoordinates = function(n, r) {
    var s = n.toCoordinateArray(), o = this.snapLine(s, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Pe), de = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
de.prototype.getCommon = function() {
  return H.longBitsToDouble(this._commonBits);
};
de.prototype.add = function(t) {
  var e = H.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = de.signExpBits(this._commonBits), this._isFirst = !1, null;
  var n = de.signExpBits(e);
  if (n !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = de.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = de.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
de.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = H.longBitsToDouble(t), n = H.toBinaryString(t), r = "0000000000000000000000000000000000000000000000000000000000000000" + n, s = r.substring(r.length - 64), o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
    return o;
  }
};
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
de.getBit = function(t, e) {
  var n = 1 << e;
  return t & n ? 1 : 0;
};
de.signExpBits = function(t) {
  return t >> 52;
};
de.zeroLowerBits = function(t, e) {
  var n = (1 << e) - 1, r = ~n, s = t & r;
  return s;
};
de.numCommonMostSigMantissaBits = function(t, e) {
  for (var n = 0, r = 52; r >= 0; r--) {
    if (de.getBit(t, r) !== de.getBit(e, r))
      return n;
    n++;
  }
  return 52;
};
var er = function() {
  this._commonCoord = null, this._ccFilter = new gs();
}, vc = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
er.prototype.addCommonBits = function(t) {
  var e = new nr(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
er.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new x(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new nr(e);
  return t.apply(n), t.geometryChanged(), t;
};
er.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
er.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
er.prototype.interfaces_ = function() {
  return [];
};
er.prototype.getClass = function() {
  return er;
};
vc.CommonCoordinateFilter.get = function() {
  return gs;
};
vc.Translater.get = function() {
  return nr;
};
Object.defineProperties(er, vc);
var gs = function() {
  this._commonBitsX = new de(), this._commonBitsY = new de();
};
gs.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
gs.prototype.getCommonCoordinate = function() {
  return new x(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
gs.prototype.interfaces_ = function() {
  return [ai];
};
gs.prototype.getClass = function() {
  return gs;
};
var nr = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
nr.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, r = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r);
};
nr.prototype.isDone = function() {
  return !1;
};
nr.prototype.isGeometryChanged = function() {
  return !0;
};
nr.prototype.interfaces_ = function() {
  return [dn];
};
nr.prototype.getClass = function() {
  return nr;
};
var Ht = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
Ht.prototype.selfSnap = function(t) {
  var e = new Lt(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
Ht.prototype.removeCommonBits = function(t) {
  this._cbr = new er(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
Ht.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
Ht.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = j.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
Ht.prototype.checkValid = function(t) {
  t.isValid() || ne.out.println("Snapped geometry is invalid");
};
Ht.prototype.computeSnapTolerance = function() {
  this._snapTolerance = Lt.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
Ht.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = Lt.snap(e[0], e[1], this._snapTolerance);
  return n;
};
Ht.prototype.interfaces_ = function() {
  return [];
};
Ht.prototype.getClass = function() {
  return Ht;
};
Ht.overlayOp = function(t, e, n) {
  var r = new Ht(t, e);
  return r.getResultGeometry(n);
};
Ht.union = function(t, e) {
  return Ht.overlayOp(t, e, j.UNION);
};
Ht.intersection = function(t, e) {
  return Ht.overlayOp(t, e, j.INTERSECTION);
};
Ht.symDifference = function(t, e) {
  return Ht.overlayOp(t, e, j.SYMDIFFERENCE);
};
Ht.difference = function(t, e) {
  return Ht.overlayOp(t, e, j.DIFFERENCE);
};
var Ce = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
Ce.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, r = null;
  try {
    e = j.overlayOp(this._geom[0], this._geom[1], t);
    var s = !0;
    s && (n = !0);
  } catch (o) {
    if (o instanceof Li)
      r = o;
    else
      throw o;
  } finally {
  }
  if (!n)
    try {
      e = Ht.overlayOp(this._geom[0], this._geom[1], t);
    } catch (o) {
      throw o instanceof Li ? r : o;
    } finally {
    }
  return e;
};
Ce.prototype.interfaces_ = function() {
  return [];
};
Ce.prototype.getClass = function() {
  return Ce;
};
Ce.overlayOp = function(t, e, n) {
  var r = new Ce(t, e);
  return r.getResultGeometry(n);
};
Ce.union = function(t, e) {
  return Ce.overlayOp(t, e, j.UNION);
};
Ce.intersection = function(t, e) {
  return Ce.overlayOp(t, e, j.INTERSECTION);
};
Ce.symDifference = function(t, e) {
  return Ce.overlayOp(t, e, j.SYMDIFFERENCE);
};
Ce.difference = function(t, e) {
  return Ce.overlayOp(t, e, j.DIFFERENCE);
};
var ha = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
ha.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
ha.prototype.interfaces_ = function() {
  return [];
};
ha.prototype.getClass = function() {
  return ha;
};
var ke = function i() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = i.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._eventType = i.INSERT, this._label = n, this._xValue = r, this._obj = s;
  }
}, Ec = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
ke.prototype.isDelete = function() {
  return this._eventType === ke.DELETE;
};
ke.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
ke.prototype.getObject = function() {
  return this._obj;
};
ke.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
ke.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
ke.prototype.isInsert = function() {
  return this._eventType === ke.INSERT;
};
ke.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
ke.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
ke.prototype.interfaces_ = function() {
  return [sn];
};
ke.prototype.getClass = function() {
  return ke;
};
Ec.INSERT.get = function() {
  return 1;
};
Ec.DELETE.get = function() {
  return 2;
};
Object.defineProperties(ke, Ec);
var du = function() {
};
du.prototype.interfaces_ = function() {
  return [];
};
du.prototype.getClass = function() {
  return du;
};
var se = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = n;
};
se.prototype.isTrivialIntersection = function(t, e, n, r) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (se.isAdjacentSegments(e, r))
      return !0;
    if (t.isClosed()) {
      var s = t.getNumPoints() - 1;
      if (e === 0 && r === s || r === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
se.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
se.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
se.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
se.prototype.isBoundaryPointInternal = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getCoordinate();
    if (t.isIntersection(s))
      return !0;
  }
  return !1;
};
se.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
se.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
se.prototype.isDone = function() {
  return this._isDone;
};
se.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
se.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
se.prototype.addIntersections = function(t, e, n, r) {
  if (t === n && e === r)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[r], u = n.getCoordinates()[r + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
se.prototype.interfaces_ = function() {
  return [];
};
se.prototype.getClass = function() {
  return se;
};
se.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var av = function(i) {
  function t() {
    i.call(this), this.events = new D(), this.nOverlaps = null;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    _n.sort(this.events);
    for (var r = 0; r < this.events.size(); r++) {
      var s = n.events.get(r);
      s.isDelete() && s.getInsertEvent().setDeleteEventIndex(r);
    }
  }, t.prototype.computeIntersections = function() {
    var n = this;
    if (arguments.length === 1) {
      var r = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var s = 0; s < this.events.size(); s++) {
        var o = n.events.get(s);
        if (o.isInsert() && n.processOverlaps(s, o.getDeleteEventIndex(), o, r), r.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof se && q(arguments[0], fn) && q(arguments[1], fn)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && q(arguments[0], fn) && arguments[1] instanceof se) {
        var c = arguments[0], h = arguments[1], f = arguments[2];
        f ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(h);
      }
    }
  }, t.prototype.addEdge = function(n, r) {
    for (var s = this, o = n.getMonotoneChainEdge(), a = o.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new ha(o, u), c = new ke(r, o.getMinX(u), l);
      s.events.add(c), s.events.add(new ke(o.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(n, r, s, o) {
    for (var a = this, u = s.getObject(), l = n; l < r; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var h = c.getObject();
        s.isSameLabel(c) || (u.computeIntersections(h, o), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var n = this;
    if (arguments.length === 1)
      for (var r = arguments[0], s = r.iterator(); s.hasNext(); ) {
        var o = s.next();
        n.addEdge(o, o);
      }
    else if (arguments.length === 2)
      for (var a = arguments[0], u = arguments[1], l = a.iterator(); l.hasNext(); ) {
        var c = l.next();
        n.addEdge(c, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(du), di = function() {
  this._min = H.POSITIVE_INFINITY, this._max = H.NEGATIVE_INFINITY;
}, Bg = { NodeComparator: { configurable: !0 } };
di.prototype.getMin = function() {
  return this._min;
};
di.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
di.prototype.getMax = function() {
  return this._max;
};
di.prototype.toString = function() {
  return gn.toLineString(new x(this._min, 0), new x(this._max, 0));
};
di.prototype.interfaces_ = function() {
  return [];
};
di.prototype.getClass = function() {
  return di;
};
Bg.NodeComparator.get = function() {
  return fa;
};
Object.defineProperties(di, Bg);
var fa = function() {
};
fa.prototype.compare = function(t, e) {
  var n = t, r = e, s = (n._min + n._max) / 2, o = (r._min + r._max) / 2;
  return s < o ? -1 : s > o ? 1 : 0;
};
fa.prototype.interfaces_ = function() {
  return [qs];
};
fa.prototype.getClass = function() {
  return fa;
};
var uv = function(i) {
  function t() {
    i.call(this), this._item = null;
    var e = arguments[0], n = arguments[1], r = arguments[2];
    this._min = e, this._max = n, this._item = r;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.query = function(n, r, s) {
    if (!this.intersects(n, r))
      return null;
    s.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(di), lv = function(i) {
  function t() {
    i.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], n = arguments[1];
    this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(n, r) {
    this._min = Math.min(n._min, r._min), this._max = Math.max(n._max, r._max);
  }, t.prototype.query = function(n, r, s) {
    if (!this.intersects(n, r))
      return null;
    this._node1 !== null && this._node1.query(n, r, s), this._node2 !== null && this._node2.query(n, r, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(di), pi = function() {
  this._leaves = new D(), this._root = null, this._level = 0;
};
pi.prototype.buildTree = function() {
  var t = this;
  _n.sort(this._leaves, new di.NodeComparator());
  for (var e = this._leaves, n = null, r = new D(); ; ) {
    if (t.buildLevel(e, r), r.size() === 1)
      return r.get(0);
    n = e, e = r, r = n;
  }
};
pi.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new uv(t, e, n));
};
pi.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
pi.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
pi.prototype.printNode = function(t) {
  ne.out.println(gn.toLineString(new x(t._min, this._level), new x(t._max, this._level)));
};
pi.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
pi.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var r = t.get(n), s = n + 1 < t.size() ? t.get(n) : null;
    if (s === null)
      e.add(r);
    else {
      var o = new lv(t.get(n), t.get(n + 1));
      e.add(o);
    }
  }
};
pi.prototype.interfaces_ = function() {
  return [];
};
pi.prototype.getClass = function() {
  return pi;
};
var so = function() {
  this._items = new D();
};
so.prototype.visitItem = function(t) {
  this._items.add(t);
};
so.prototype.getItems = function() {
  return this._items;
};
so.prototype.interfaces_ = function() {
  return [Zi];
};
so.prototype.getClass = function() {
  return so;
};
var oo = function() {
  this._index = null;
  var t = arguments[0];
  if (!q(t, ji))
    throw new vt("Argument must be Polygonal");
  this._index = new Dr(t);
}, xc = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
oo.prototype.locate = function(t) {
  var e = new An(t), n = new ao(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
oo.prototype.interfaces_ = function() {
  return [io];
};
oo.prototype.getClass = function() {
  return oo;
};
xc.SegmentVisitor.get = function() {
  return ao;
};
xc.IntervalIndexedGeometry.get = function() {
  return Dr;
};
Object.defineProperties(oo, xc);
var ao = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
ao.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
ao.prototype.interfaces_ = function() {
  return [Zi];
};
ao.prototype.getClass = function() {
  return ao;
};
var Dr = function() {
  this._index = new pi();
  var t = arguments[0];
  this.init(t);
};
Dr.prototype.init = function(t) {
  for (var e = this, n = $t.getLines(t), r = n.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getCoordinates();
    e.addLine(o);
  }
};
Dr.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var r = new U(t[n - 1], t[n]), s = Math.min(r.p0.y, r.p1.y), o = Math.max(r.p0.y, r.p1.y);
    e._index.insert(s, o, r);
  }
};
Dr.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new so();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    this._index.query(r, s, o);
  }
};
Dr.prototype.interfaces_ = function() {
  return [];
};
Dr.prototype.getClass = function() {
  return Dr;
};
var bo = function(i) {
  function t() {
    if (i.call(this), this._parentGeom = null, this._lineEdgeMap = new Cg(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new yn(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], r = en.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = r, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2];
      this._argIndex = s, this._parentGeom = o, this._boundaryNodeRule = a, o !== null && this.add(o);
    }
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, r) {
    var s = this._nodes.addNode(r), o = s.getLabel(), a = 1, u = I.NONE;
    u = o.getLocation(n, T.ON), u === I.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    o.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      return this.computeSelfNodes(n, r, !1);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new se(s, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof ui || this._parentGeom instanceof Vt || this._parentGeom instanceof ri, h = o || !c;
      return l.computeIntersections(this._edges, u, h), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(n) {
    for (var r = this._edges.iterator(); r.hasNext(); ) {
      var s = r.next();
      s.eiList.addSplitEdges(n);
    }
  }, t.prototype.computeEdgeIntersections = function(n, r, s) {
    var o = new se(r, s, !0);
    o.setBoundaryNodes(this.getBoundaryNodes(), n.getBoundaryNodes());
    var a = this.createEdgeSetIntersector();
    return a.computeIntersections(this._edges, n._edges, o), o;
  }, t.prototype.getGeometry = function() {
    return this._parentGeom;
  }, t.prototype.getBoundaryNodeRule = function() {
    return this._boundaryNodeRule;
  }, t.prototype.hasTooFewPoints = function() {
    return this._hasTooFewPoints;
  }, t.prototype.addPoint = function() {
    if (arguments[0] instanceof Ae) {
      var n = arguments[0], r = n.getCoordinate();
      this.insertPoint(this._argIndex, r, I.INTERIOR);
    } else if (arguments[0] instanceof x) {
      var s = arguments[0];
      this.insertPoint(this._argIndex, s, I.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var r = this;
    this.addPolygonRing(n.getExteriorRing(), I.EXTERIOR, I.INTERIOR);
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var o = n.getInteriorRingN(s);
      r.addPolygonRing(o, I.INTERIOR, I.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var r = n.getCoordinates();
    this.insertPoint(this._argIndex, r[0], I.BOUNDARY), this.insertPoint(this._argIndex, r[r.length - 1], I.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var r = $.removeRepeatedPoints(n.getCoordinates());
    if (r.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = r[0], null;
    var s = new gu(r, new at(this._argIndex, I.INTERIOR));
    this._lineEdgeMap.put(n, s), this.insertEdge(s), J.isTrue(r.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, r[0]), this.insertBoundaryPoint(this._argIndex, r[r.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var n = this.getBoundaryNodes(), r = new Array(n.size()).fill(null), s = 0, o = n.iterator(); o.hasNext(); ) {
      var a = o.next();
      r[s++] = a.getCoordinate().copy();
    }
    return r;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(n, r, s) {
    if (this.isBoundaryNode(n, r))
      return null;
    s === I.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, r) : this.insertPoint(n, r, s);
  }, t.prototype.addPolygonRing = function(n, r, s) {
    if (n.isEmpty())
      return null;
    var o = $.removeRepeatedPoints(n.getCoordinates());
    if (o.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = o[0], null;
    var a = r, u = s;
    k.isCCW(o) && (a = s, u = r);
    var l = new gu(o, new at(this._argIndex, I.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, o[0], I.BOUNDARY);
  }, t.prototype.insertPoint = function(n, r, s) {
    var o = this._nodes.addNode(r), a = o.getLabel();
    a === null ? o._label = new at(n, s) : a.setLocation(n, s);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new av();
  }, t.prototype.addSelfIntersectionNodes = function(n) {
    for (var r = this, s = this._edges.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getLabel().getLocation(n), u = o.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        r.addSelfIntersectionNode(n, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      if (n.isEmpty())
        return null;
      if (n instanceof ri && (this._useBoundaryDeterminationRule = !1), n instanceof Vt)
        this.addPolygon(n);
      else if (n instanceof St)
        this.addLineString(n);
      else if (n instanceof Ae)
        this.addPoint(n);
      else if (n instanceof $s)
        this.addCollection(n);
      else if (n instanceof Lr)
        this.addCollection(n);
      else if (n instanceof ri)
        this.addCollection(n);
      else if (n instanceof ve)
        this.addCollection(n);
      else
        throw new Error(n.getClass().getName());
    } else
      return i.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(n) {
    for (var r = this, s = 0; s < n.getNumGeometries(); s++) {
      var o = n.getGeometryN(s);
      r.add(o);
    }
  }, t.prototype.locate = function(n) {
    return q(this._parentGeom, ji) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new oo(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      return this._lineEdgeMap.get(n);
    } else
      return i.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(n, r) {
    return n.isInBoundary(r) ? I.BOUNDARY : I.INTERIOR;
  }, t;
}(Ct), uo = function() {
  if (this._li = new Br(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new bo(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = en.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new bo(0, e, r), this._arg[1] = new bo(1, n, r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    s.getPrecisionModel().compareTo(o.getPrecisionModel()) >= 0 ? this.setComputationPrecision(s.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new bo(0, s, a), this._arg[1] = new bo(1, o, a);
  }
};
uo.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
uo.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
uo.prototype.interfaces_ = function() {
  return [];
};
uo.prototype.getClass = function() {
  return uo;
};
var Ir = function() {
};
Ir.prototype.interfaces_ = function() {
  return [];
};
Ir.prototype.getClass = function() {
  return Ir;
};
Ir.map = function() {
  if (arguments[0] instanceof W && q(arguments[1], Ir.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new D(), r = 0; r < t.getNumGeometries(); r++) {
      var s = e.map(t.getGeometryN(r));
      s !== null && n.add(s);
    }
    return t.getFactory().buildGeometry(n);
  } else if (q(arguments[0], Ft) && q(arguments[1], Ir.MapOp)) {
    for (var o = arguments[0], a = arguments[1], u = new D(), l = o.iterator(); l.hasNext(); ) {
      var c = l.next(), h = a.map(c);
      h !== null && u.add(h);
    }
    return u;
  }
};
Ir.MapOp = function() {
};
var j = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n), this._ptLocator = new yn(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new mn(), this._resultPolyList = new D(), this._resultLineList = new D(), this._resultPointList = new D(), this._graph = new Ct(new Pg()), this._geomFact = e.getFactory();
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(n) {
    var r = this._edgeList.findEqualEdge(n);
    if (r !== null) {
      var s = r.getLabel(), o = n.getLabel();
      r.isPointwiseEqual(n) || (o = new at(n.getLabel()), o.flip());
      var a = r.getDepth();
      a.isNull() && a.add(s), a.add(o), s.merge(o);
    } else
      this._edgeList.add(n);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext(); ) {
      var r = n.next(), s = r.getSym();
      r.isInResult() && s.isInResult() && (r.setInResult(!1), s.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(n) {
    return !!(this.isCovered(n, this._resultLineList) || this.isCovered(n, this._resultPolyList));
  }, t.prototype.computeGeometry = function(n, r, s, o) {
    var a = new D();
    return a.addAll(n), a.addAll(r), a.addAll(s), a.isEmpty() ? t.createEmptyResult(o, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var r = n.next();
      r.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(n, r) {
    for (var s = this, o = r.iterator(); o.hasNext(); ) {
      var a = o.next(), u = s._ptLocator.locate(n, a);
      if (u !== I.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var n = new D(), r = this._edgeList.iterator(); r.hasNext(); ) {
      var s = r.next();
      s.isCollapsed() && (r.remove(), n.add(s.getCollapsedEdge()));
    }
    this._edgeList.addAll(n);
  }, t.prototype.updateNodeLabelling = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var r = n.next(), s = r.getEdges().getLabel();
      r.getLabel().merge(s);
    }
  }, t.prototype.getResultGeometry = function(n) {
    return this.computeOverlay(n), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(n) {
    for (var r = this, s = n.iterator(); s.hasNext(); ) {
      var o = s.next();
      r.insertUniqueEdge(o);
    }
  }, t.prototype.computeOverlay = function(n) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var r = new D();
    this._arg[0].computeSplitEdges(r), this._arg[1].computeSplitEdges(r), this.insertUniqueEdges(r), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Ar.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var s = new De(this._geomFact);
    s.add(this._graph), this._resultPolyList = s.getPolygons();
    var o = new qn(this, this._geomFact, this._ptLocator);
    this._resultLineList = o.build(n);
    var a = new fs(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(n), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, n);
  }, t.prototype.labelIncompleteNode = function(n, r) {
    var s = this._ptLocator.locate(n.getCoordinate(), this._arg[r].getGeometry());
    n.getLabel().setLocation(r, s);
  }, t.prototype.copyPoints = function(n) {
    for (var r = this, s = this._arg[n].getNodeIterator(); s.hasNext(); ) {
      var o = s.next(), a = r._graph.addNode(o.getCoordinate());
      a.setLabel(n, o.getLabel().getLocation(n));
    }
  }, t.prototype.findResultAreaEdges = function(n) {
    for (var r = this._graph.getEdgeEnds().iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getLabel();
      o.isArea() && !s.isInteriorAreaEdge() && t.isResultOfOp(o.getLocation(0, T.RIGHT), o.getLocation(1, T.RIGHT), n) && s.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var n = this._edgeList.iterator(); n.hasNext(); ) {
      var r = n.next(), s = r.getLabel(), o = r.getDepth();
      if (!o.isNull()) {
        o.normalize();
        for (var a = 0; a < 2; a++)
          !s.isNull(a) && s.isArea() && !o.isNull(a) && (o.getDelta(a) === 0 ? s.toLine(a) : (J.isTrue(!o.isNull(a, T.LEFT), "depth of LEFT side has not been initialized"), s.setLocation(a, T.LEFT, o.getLocation(a, T.LEFT)), J.isTrue(!o.isNull(a, T.RIGHT), "depth of RIGHT side has not been initialized"), s.setLocation(a, T.RIGHT, o.getLocation(a, T.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var n = this, r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var s = r.next();
      s.getEdges().computeLabelling(n._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var n = this, r = this._graph.getNodes().iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getLabel();
      s.isIsolated() && (o.isNull(0) ? n.labelIncompleteNode(s, 0) : n.labelIncompleteNode(s, 1)), s.getEdges().updateLabelling(o);
    }
  }, t.prototype.isCoveredByA = function(n) {
    return !!this.isCovered(n, this._resultPolyList);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(uo);
j.overlayOp = function(i, t, e) {
  var n = new j(i, t), r = n.getResultGeometry(e);
  return r;
};
j.intersection = function(i, t) {
  if (i.isEmpty() || t.isEmpty())
    return j.createEmptyResult(j.INTERSECTION, i, t, i.getFactory());
  if (i.isGeometryCollection()) {
    var e = t;
    return hs.map(i, {
      interfaces_: function() {
        return [Ir.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), Ce.overlayOp(i, t, j.INTERSECTION);
};
j.symDifference = function(i, t) {
  if (i.isEmpty() || t.isEmpty()) {
    if (i.isEmpty() && t.isEmpty())
      return j.createEmptyResult(j.SYMDIFFERENCE, i, t, i.getFactory());
    if (i.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return i.copy();
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), Ce.overlayOp(i, t, j.SYMDIFFERENCE);
};
j.resultDimension = function(i, t, e) {
  var n = t.getDimension(), r = e.getDimension(), s = -1;
  switch (i) {
    case j.INTERSECTION:
      s = Math.min(n, r);
      break;
    case j.UNION:
      s = Math.max(n, r);
      break;
    case j.DIFFERENCE:
      s = n;
      break;
    case j.SYMDIFFERENCE:
      s = Math.max(n, r);
      break;
  }
  return s;
};
j.createEmptyResult = function(i, t, e, n) {
  var r = null;
  switch (j.resultDimension(i, t, e)) {
    case -1:
      r = n.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      r = n.createPoint();
      break;
    case 1:
      r = n.createLineString();
      break;
    case 2:
      r = n.createPolygon();
      break;
  }
  return r;
};
j.difference = function(i, t) {
  return i.isEmpty() ? j.createEmptyResult(j.DIFFERENCE, i, t, i.getFactory()) : t.isEmpty() ? i.copy() : (i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), Ce.overlayOp(i, t, j.DIFFERENCE));
};
j.isResultOfOp = function() {
  if (arguments.length === 2) {
    var i = arguments[0], t = arguments[1], e = i.getLocation(0), n = i.getLocation(1);
    return j.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    switch (r === I.BOUNDARY && (r = I.INTERIOR), s === I.BOUNDARY && (s = I.INTERIOR), o) {
      case j.INTERSECTION:
        return r === I.INTERIOR && s === I.INTERIOR;
      case j.UNION:
        return r === I.INTERIOR || s === I.INTERIOR;
      case j.DIFFERENCE:
        return r === I.INTERIOR && s !== I.INTERIOR;
      case j.SYMDIFFERENCE:
        return r === I.INTERIOR && s !== I.INTERIOR || r !== I.INTERIOR && s === I.INTERIOR;
    }
    return !1;
  }
};
j.INTERSECTION = 1;
j.UNION = 2;
j.DIFFERENCE = 3;
j.SYMDIFFERENCE = 4;
var Wi = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new yn(), this._seg = new U();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
Wi.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var r = e._linework.getGeometryN(n), s = r.getCoordinateSequence(), o = 0; o < s.size() - 1; o++) {
      s.getCoordinate(o, e._seg.p0), s.getCoordinate(o + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
Wi.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? I.BOUNDARY : this._ptLocator.locate(t, this._g);
};
Wi.prototype.extractLinework = function(t) {
  var e = new lo();
  t.apply(e);
  var n = e.getLinework(), r = Q.toLineStringArray(n);
  return t.getFactory().createMultiLineString(r);
};
Wi.prototype.interfaces_ = function() {
  return [];
};
Wi.prototype.getClass = function() {
  return Wi;
};
var lo = function() {
  this._linework = null, this._linework = new D();
};
lo.prototype.getLinework = function() {
  return this._linework;
};
lo.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Vt) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var r = 0; r < n.getNumInteriorRing(); r++)
      e._linework.add(n.getInteriorRingN(r));
  }
};
lo.prototype.interfaces_ = function() {
  return [Bn];
};
lo.prototype.getClass = function() {
  return lo;
};
var Fr = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Fr.prototype.extractPoints = function(t, e, n) {
  for (var r = this, s = t.getCoordinates(), o = 0; o < s.length - 1; o++)
    r.computeOffsetPoints(s[o], s[o + 1], e, n);
};
Fr.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Fr.prototype.getPoints = function(t) {
  for (var e = this, n = new D(), r = $t.getLines(this._g), s = r.iterator(); s.hasNext(); ) {
    var o = s.next();
    e.extractPoints(o, t, n);
  }
  return n;
};
Fr.prototype.computeOffsetPoints = function(t, e, n, r) {
  var s = e.x - t.x, o = e.y - t.y, a = Math.sqrt(s * s + o * o), u = n * s / a, l = n * o / a, c = (e.x + t.x) / 2, h = (e.y + t.y) / 2;
  if (this._doLeft) {
    var f = new x(c - l, h + u);
    r.add(f);
  }
  if (this._doRight) {
    var g = new x(c + l, h - u);
    r.add(g);
  }
};
Fr.prototype.interfaces_ = function() {
  return [];
};
Fr.prototype.getClass = function() {
  return Fr;
};
var qe = function i() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = i.TOLERANCE, this._testCoords = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = i.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new Wi(this._geom[0], this._boundaryDistanceTolerance), new Wi(this._geom[1], this._boundaryDistanceTolerance), new Wi(this._geom[2], this._boundaryDistanceTolerance)];
}, zg = { TOLERANCE: { configurable: !0 } };
qe.prototype.reportResult = function(t, e, n) {
  ne.out.println("Overlay result invalid - A:" + I.toLocationSymbol(e[0]) + " B:" + I.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + I.toLocationSymbol(e[2]));
};
qe.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
qe.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._testCoords.size(); n++) {
      var r = t._testCoords.get(n);
      if (!t.checkValid(e, r))
        return t._invalidLocation = r, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(o), this._location[1] = this._locFinder[1].getLocation(o), this._location[2] = this._locFinder[2].getLocation(o), qe.hasLocation(this._location, I.BOUNDARY) ? !0 : this.isValidResult(s, this._location);
  }
};
qe.prototype.addTestPts = function(t) {
  var e = new Fr(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
qe.prototype.isValidResult = function(t, e) {
  var n = j.isResultOfOp(e[0], e[1], t), r = e[2] === I.INTERIOR, s = !(n ^ r);
  return s || this.reportResult(t, e, n), s;
};
qe.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
qe.prototype.interfaces_ = function() {
  return [];
};
qe.prototype.getClass = function() {
  return qe;
};
qe.hasLocation = function(t, e) {
  for (var n = 0; n < 3; n++)
    if (t[n] === e)
      return !0;
  return !1;
};
qe.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(Lt.computeSizeBasedSnapTolerance(t), Lt.computeSizeBasedSnapTolerance(e));
};
qe.isValid = function(t, e, n, r) {
  var s = new qe(t, e, r);
  return s.isValid(n);
};
zg.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(qe, zg);
var ze = function i(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = i.extractFactory(t), this._inputGeoms = t;
};
ze.prototype.extractElements = function(t, e) {
  var n = this;
  if (t === null)
    return null;
  for (var r = 0; r < t.getNumGeometries(); r++) {
    var s = t.getGeometryN(r);
    n._skipEmpty && s.isEmpty() || e.add(s);
  }
};
ze.prototype.combine = function() {
  for (var t = this, e = new D(), n = this._inputGeoms.iterator(); n.hasNext(); ) {
    var r = n.next();
    t.extractElements(r, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
ze.prototype.interfaces_ = function() {
  return [];
};
ze.prototype.getClass = function() {
  return ze;
};
ze.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ze(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = new ze(ze.createList(n, r));
    return s.combine();
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2], l = new ze(ze.createList(o, a, u));
    return l.combine();
  }
};
ze.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
ze.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new D();
    return n.add(t), n.add(e), n;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = new D();
    return a.add(r), a.add(s), a.add(o), a;
  }
};
var Ot = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new D());
}, Vg = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
Ot.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new D(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = null;
    q(s, fn) ? o = e.unionTree(s) : s instanceof W && (o = s), n.add(o);
  }
  return n;
};
Ot.prototype.extractByEnvelope = function(t, e, n) {
  for (var r = new D(), s = 0; s < e.getNumGeometries(); s++) {
    var o = e.getGeometryN(s);
    o.getEnvelopeInternal().intersects(t) ? r.add(o) : n.add(o);
  }
  return this._geomFactory.buildGeometry(r);
};
Ot.prototype.unionOptimized = function(t, e) {
  var n = t.getEnvelopeInternal(), r = e.getEnvelopeInternal();
  if (!n.intersects(r)) {
    var s = ze.combine(t, e);
    return s;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var o = n.intersection(r);
  return this.unionUsingEnvelopeIntersection(t, e, o);
};
Ot.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new Rg(Ot.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.insert(n.getEnvelopeInternal(), n);
  }
  this._inputPolys = null;
  var r = t.itemsTree(), s = this.unionTree(r);
  return s;
};
Ot.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2];
    if (r - n <= 1) {
      var s = Ot.getGeometry(e, n);
      return this.unionSafe(s, null);
    } else {
      if (r - n === 2)
        return this.unionSafe(Ot.getGeometry(e, n), Ot.getGeometry(e, n + 1));
      var o = Math.trunc((r + n) / 2), a = this.binaryUnion(e, n, o), u = this.binaryUnion(e, o, r);
      return this.unionSafe(a, u);
    }
  }
};
Ot.prototype.repeatedUnion = function(t) {
  for (var e = null, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e === null ? e = r.copy() : e = e.union(r);
  }
  return e;
};
Ot.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
Ot.prototype.unionActual = function(t, e) {
  return Ot.restrictToPolygons(t.union(e));
};
Ot.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), n = this.binaryUnion(e);
  return n;
};
Ot.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
  var r = new D(), s = this.extractByEnvelope(n, t, r), o = this.extractByEnvelope(n, e, r), a = this.unionActual(s, o);
  r.add(a);
  var u = ze.combine(r);
  return u;
};
Ot.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), r = n.buffer(0);
    return r;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1], a = s.getFactory(), u = a.createGeometryCollection([s, o]), l = u.buffer(0);
    return l;
  }
};
Ot.prototype.interfaces_ = function() {
  return [];
};
Ot.prototype.getClass = function() {
  return Ot;
};
Ot.restrictToPolygons = function(t) {
  if (q(t, ji))
    return t;
  var e = Ni.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(Q.toPolygonArray(e));
};
Ot.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
Ot.union = function(t) {
  var e = new Ot(t);
  return e.union();
};
Vg.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(Ot, Vg);
var pu = function() {
};
pu.prototype.interfaces_ = function() {
  return [];
};
pu.prototype.getClass = function() {
  return pu;
};
pu.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return j.createEmptyResult(j.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), Ce.overlayOp(t, e, j.UNION);
};
function zr() {
  return new _u();
}
function _u() {
  this.reset();
}
_u.prototype = {
  constructor: _u,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(i) {
    Mh(Xa, i, this.t), Mh(this, Xa.s, this.s), this.s ? this.t += Xa.t : this.s = Xa.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Xa = new _u();
function Mh(i, t, e) {
  var n = i.s = t + e, r = n - t, s = n - r;
  i.t = t - s + (e - r);
}
var It = 1e-6, ht = Math.PI, Ri = ht / 2, Oh = ht / 4, Oi = ht * 2, pr = 180 / ht, Ln = ht / 180, me = Math.abs, cv = Math.atan, co = Math.atan2, kt = Math.cos, Gt = Math.sin, vo = Math.sqrt;
function Xg(i) {
  return i > 1 ? 0 : i < -1 ? ht : Math.acos(i);
}
function ds(i) {
  return i > 1 ? Ri : i < -1 ? -Ri : Math.asin(i);
}
function Ao() {
}
function mu(i, t) {
  i && Dh.hasOwnProperty(i.type) && Dh[i.type](i, t);
}
var Ah = {
  Feature: function(i, t) {
    mu(i.geometry, t);
  },
  FeatureCollection: function(i, t) {
    for (var e = i.features, n = -1, r = e.length; ++n < r; )
      mu(e[n].geometry, t);
  }
}, Dh = {
  Sphere: function(i, t) {
    t.sphere();
  },
  Point: function(i, t) {
    i = i.coordinates, t.point(i[0], i[1], i[2]);
  },
  MultiPoint: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      i = e[n], t.point(i[0], i[1], i[2]);
  },
  LineString: function(i, t) {
    Rl(i.coordinates, t, 0);
  },
  MultiLineString: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      Rl(e[n], t, 0);
  },
  Polygon: function(i, t) {
    Fh(i.coordinates, t);
  },
  MultiPolygon: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      Fh(e[n], t);
  },
  GeometryCollection: function(i, t) {
    for (var e = i.geometries, n = -1, r = e.length; ++n < r; )
      mu(e[n], t);
  }
};
function Rl(i, t, e) {
  var n = -1, r = i.length - e, s;
  for (t.lineStart(); ++n < r; )
    s = i[n], t.point(s[0], s[1], s[2]);
  t.lineEnd();
}
function Fh(i, t) {
  var e = -1, n = i.length;
  for (t.polygonStart(); ++e < n; )
    Rl(i[e], t, 1);
  t.polygonEnd();
}
function hv(i, t) {
  i && Ah.hasOwnProperty(i.type) ? Ah[i.type](i, t) : mu(i, t);
}
zr();
zr();
function Nl(i) {
  return [co(i[1], i[0]), ds(i[2])];
}
function ho(i) {
  var t = i[0], e = i[1], n = kt(e);
  return [n * kt(t), n * Gt(t), Gt(e)];
}
function Ya(i, t) {
  return i[0] * t[0] + i[1] * t[1] + i[2] * t[2];
}
function yu(i, t) {
  return [i[1] * t[2] - i[2] * t[1], i[2] * t[0] - i[0] * t[2], i[0] * t[1] - i[1] * t[0]];
}
function tl(i, t) {
  i[0] += t[0], i[1] += t[1], i[2] += t[2];
}
function Ua(i, t) {
  return [i[0] * t, i[1] * t, i[2] * t];
}
function Ll(i) {
  var t = vo(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  i[0] /= t, i[1] /= t, i[2] /= t;
}
zr();
function Yg(i, t) {
  function e(n, r) {
    return n = i(n, r), t(n[0], n[1]);
  }
  return i.invert && t.invert && (e.invert = function(n, r) {
    return n = t.invert(n, r), n && i.invert(n[0], n[1]);
  }), e;
}
function bl(i, t) {
  return [i > ht ? i - Oi : i < -ht ? i + Oi : i, t];
}
bl.invert = bl;
function fv(i, t, e) {
  return (i %= Oi) ? t || e ? Yg(Gh(i), Bh(t, e)) : Gh(i) : t || e ? Bh(t, e) : bl;
}
function kh(i) {
  return function(t, e) {
    return t += i, [t > ht ? t - Oi : t < -ht ? t + Oi : t, e];
  };
}
function Gh(i) {
  var t = kh(i);
  return t.invert = kh(-i), t;
}
function Bh(i, t) {
  var e = kt(i), n = Gt(i), r = kt(t), s = Gt(t);
  function o(a, u) {
    var l = kt(u), c = kt(a) * l, h = Gt(a) * l, f = Gt(u), g = f * e + c * n;
    return [
      co(h * r - g * s, c * e - f * n),
      ds(g * r + h * s)
    ];
  }
  return o.invert = function(a, u) {
    var l = kt(u), c = kt(a) * l, h = Gt(a) * l, f = Gt(u), g = f * r - h * s;
    return [
      co(h * r + f * s, c * e + g * n),
      ds(g * e - c * n)
    ];
  }, o;
}
function gv(i, t, e, n, r, s) {
  if (e) {
    var o = kt(t), a = Gt(t), u = n * e;
    r == null ? (r = t + n * Oi, s = t - u / 2) : (r = zh(o, r), s = zh(o, s), (n > 0 ? r < s : r > s) && (r += n * Oi));
    for (var l, c = r; n > 0 ? c > s : c < s; c -= u)
      l = Nl([o, -a * kt(c), -a * Gt(c)]), i.point(l[0], l[1]);
  }
}
function zh(i, t) {
  t = ho(t), t[0] -= i, Ll(t);
  var e = Xg(-t[1]);
  return ((-t[2] < 0 ? -e : e) + Oi - It) % Oi;
}
function Ug() {
  var i = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      i.push(t = []);
    },
    lineEnd: Ao,
    rejoin: function() {
      i.length > 1 && i.push(i.pop().concat(i.shift()));
    },
    result: function() {
      var e = i;
      return i = [], t = null, e;
    }
  };
}
function dv(i, t, e, n, r, s) {
  var o = i[0], a = i[1], u = t[0], l = t[1], c = 0, h = 1, f = u - o, g = l - a, d;
  if (d = e - o, !(!f && d > 0)) {
    if (d /= f, f < 0) {
      if (d < c)
        return;
      d < h && (h = d);
    } else if (f > 0) {
      if (d > h)
        return;
      d > c && (c = d);
    }
    if (d = r - o, !(!f && d < 0)) {
      if (d /= f, f < 0) {
        if (d > h)
          return;
        d > c && (c = d);
      } else if (f > 0) {
        if (d < c)
          return;
        d < h && (h = d);
      }
      if (d = n - a, !(!g && d > 0)) {
        if (d /= g, g < 0) {
          if (d < c)
            return;
          d < h && (h = d);
        } else if (g > 0) {
          if (d > h)
            return;
          d > c && (c = d);
        }
        if (d = s - a, !(!g && d < 0)) {
          if (d /= g, g < 0) {
            if (d > h)
              return;
            d > c && (c = d);
          } else if (g > 0) {
            if (d < c)
              return;
            d < h && (h = d);
          }
          return c > 0 && (i[0] = o + c * f, i[1] = a + c * g), h < 1 && (t[0] = o + h * f, t[1] = a + h * g), !0;
        }
      }
    }
  }
}
function Ka(i, t) {
  return me(i[0] - t[0]) < It && me(i[1] - t[1]) < It;
}
function Wa(i, t, e, n) {
  this.x = i, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function Wg(i, t, e, n, r) {
  var s = [], o = [], a, u;
  if (i.forEach(function(d) {
    if (!((_ = d.length - 1) <= 0)) {
      var _, p = d[0], m = d[_], y;
      if (Ka(p, m)) {
        for (r.lineStart(), a = 0; a < _; ++a)
          r.point((p = d[a])[0], p[1]);
        r.lineEnd();
        return;
      }
      s.push(y = new Wa(p, d, null, !0)), o.push(y.o = new Wa(p, null, y, !1)), s.push(y = new Wa(m, d, null, !1)), o.push(y.o = new Wa(m, null, y, !0));
    }
  }), !!s.length) {
    for (o.sort(t), Vh(s), Vh(o), a = 0, u = o.length; a < u; ++a)
      o[a].e = e = !e;
    for (var l = s[0], c, h; ; ) {
      for (var f = l, g = !0; f.v; )
        if ((f = f.n) === l)
          return;
      c = f.z, r.lineStart();
      do {
        if (f.v = f.o.v = !0, f.e) {
          if (g)
            for (a = 0, u = c.length; a < u; ++a)
              r.point((h = c[a])[0], h[1]);
          else
            n(f.x, f.n.x, 1, r);
          f = f.n;
        } else {
          if (g)
            for (c = f.p.z, a = c.length - 1; a >= 0; --a)
              r.point((h = c[a])[0], h[1]);
          else
            n(f.x, f.p.x, -1, r);
          f = f.p;
        }
        f = f.o, c = f.z, g = !g;
      } while (!f.v);
      r.lineEnd();
    }
  }
}
function Vh(i) {
  if (t = i.length) {
    for (var t, e = 0, n = i[0], r; ++e < t; )
      n.n = r = i[e], r.p = n, n = r;
    n.n = r = i[0], r.p = n;
  }
}
function qg(i, t) {
  return i < t ? -1 : i > t ? 1 : i >= t ? 0 : NaN;
}
function pv(i) {
  return i.length === 1 && (i = _v(i)), {
    left: function(t, e, n, r) {
      for (n == null && (n = 0), r == null && (r = t.length); n < r; ) {
        var s = n + r >>> 1;
        i(t[s], e) < 0 ? n = s + 1 : r = s;
      }
      return n;
    },
    right: function(t, e, n, r) {
      for (n == null && (n = 0), r == null && (r = t.length); n < r; ) {
        var s = n + r >>> 1;
        i(t[s], e) > 0 ? r = s : n = s + 1;
      }
      return n;
    }
  };
}
function _v(i) {
  return function(t, e) {
    return qg(i(t), e);
  };
}
pv(qg);
function Hg(i) {
  for (var t = i.length, e, n = -1, r = 0, s, o; ++n < t; )
    r += i[n].length;
  for (s = new Array(r); --t >= 0; )
    for (o = i[t], e = o.length; --e >= 0; )
      s[--r] = o[e];
  return s;
}
var Do = 1e9, qa = -Do;
function mv(i, t, e, n) {
  function r(l, c) {
    return i <= l && l <= e && t <= c && c <= n;
  }
  function s(l, c, h, f) {
    var g = 0, d = 0;
    if (l == null || (g = o(l, h)) !== (d = o(c, h)) || u(l, c) < 0 ^ h > 0)
      do
        f.point(g === 0 || g === 3 ? i : e, g > 1 ? n : t);
      while ((g = (g + h + 4) % 4) !== d);
    else
      f.point(c[0], c[1]);
  }
  function o(l, c) {
    return me(l[0] - i) < It ? c > 0 ? 0 : 3 : me(l[0] - e) < It ? c > 0 ? 2 : 1 : me(l[1] - t) < It ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var h = o(l, 1), f = o(c, 1);
    return h !== f ? h - f : h === 0 ? c[1] - l[1] : h === 1 ? l[0] - c[0] : h === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, h = Ug(), f, g, d, _, p, m, y, v, C, E, w, P = {
      point: b,
      lineStart: L,
      lineEnd: B,
      polygonStart: O,
      polygonEnd: z
    };
    function b(A, V) {
      r(A, V) && c.point(A, V);
    }
    function R() {
      for (var A = 0, V = 0, X = g.length; V < X; ++V)
        for (var Z = g[V], nt = 1, mt = Z.length, Tt = Z[0], G, je, Ie = Tt[0], Te = Tt[1]; nt < mt; ++nt)
          G = Ie, je = Te, Tt = Z[nt], Ie = Tt[0], Te = Tt[1], je <= n ? Te > n && (Ie - G) * (n - je) > (Te - je) * (i - G) && ++A : Te <= n && (Ie - G) * (n - je) < (Te - je) * (i - G) && --A;
      return A;
    }
    function O() {
      c = h, f = [], g = [], w = !0;
    }
    function z() {
      var A = R(), V = w && A, X = (f = Hg(f)).length;
      (V || X) && (l.polygonStart(), V && (l.lineStart(), s(null, null, 1, l), l.lineEnd()), X && Wg(f, a, A, s, l), l.polygonEnd()), c = l, f = g = d = null;
    }
    function L() {
      P.point = M, g && g.push(d = []), E = !0, C = !1, y = v = NaN;
    }
    function B() {
      f && (M(_, p), m && C && h.rejoin(), f.push(h.result())), P.point = b, C && c.lineEnd();
    }
    function M(A, V) {
      var X = r(A, V);
      if (g && d.push([A, V]), E)
        _ = A, p = V, m = X, E = !1, X && (c.lineStart(), c.point(A, V));
      else if (X && C)
        c.point(A, V);
      else {
        var Z = [y = Math.max(qa, Math.min(Do, y)), v = Math.max(qa, Math.min(Do, v))], nt = [A = Math.max(qa, Math.min(Do, A)), V = Math.max(qa, Math.min(Do, V))];
        dv(Z, nt, i, t, e, n) ? (C || (c.lineStart(), c.point(Z[0], Z[1])), c.point(nt[0], nt[1]), X || c.lineEnd(), w = !1) : X && (c.lineStart(), c.point(A, V), w = !1);
      }
      y = A, v = V, C = X;
    }
    return P;
  };
}
var el = zr();
function yv(i, t) {
  var e = t[0], n = t[1], r = [Gt(e), -kt(e), 0], s = 0, o = 0;
  el.reset();
  for (var a = 0, u = i.length; a < u; ++a)
    if (c = (l = i[a]).length)
      for (var l, c, h = l[c - 1], f = h[0], g = h[1] / 2 + Oh, d = Gt(g), _ = kt(g), p = 0; p < c; ++p, f = y, d = C, _ = E, h = m) {
        var m = l[p], y = m[0], v = m[1] / 2 + Oh, C = Gt(v), E = kt(v), w = y - f, P = w >= 0 ? 1 : -1, b = P * w, R = b > ht, O = d * C;
        if (el.add(co(O * P * Gt(b), _ * E + O * kt(b))), s += R ? w + P * Oi : w, R ^ f >= e ^ y >= e) {
          var z = yu(ho(h), ho(m));
          Ll(z);
          var L = yu(r, z);
          Ll(L);
          var B = (R ^ w >= 0 ? -1 : 1) * ds(L[2]);
          (n > B || n === B && (z[0] || z[1])) && (o += R ^ w >= 0 ? 1 : -1);
        }
      }
  return (s < -It || s < It && el < -It) ^ o & 1;
}
zr();
function Xh(i) {
  return i;
}
zr();
zr();
var fo = 1 / 0, vu = fo, ga = -fo, Eu = ga, Yh = {
  point: vv,
  lineStart: Ao,
  lineEnd: Ao,
  polygonStart: Ao,
  polygonEnd: Ao,
  result: function() {
    var i = [[fo, vu], [ga, Eu]];
    return ga = Eu = -(vu = fo = 1 / 0), i;
  }
};
function vv(i, t) {
  i < fo && (fo = i), i > ga && (ga = i), t < vu && (vu = t), t > Eu && (Eu = t);
}
zr();
function jg(i, t, e, n) {
  return function(r, s) {
    var o = t(s), a = r.invert(n[0], n[1]), u = Ug(), l = t(u), c = !1, h, f, g, d = {
      point: _,
      lineStart: m,
      lineEnd: y,
      polygonStart: function() {
        d.point = v, d.lineStart = C, d.lineEnd = E, f = [], h = [];
      },
      polygonEnd: function() {
        d.point = _, d.lineStart = m, d.lineEnd = y, f = Hg(f);
        var w = yv(h, a);
        f.length ? (c || (s.polygonStart(), c = !0), Wg(f, xv, w, e, s)) : w && (c || (s.polygonStart(), c = !0), s.lineStart(), e(null, null, 1, s), s.lineEnd()), c && (s.polygonEnd(), c = !1), f = h = null;
      },
      sphere: function() {
        s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd();
      }
    };
    function _(w, P) {
      var b = r(w, P);
      i(w = b[0], P = b[1]) && s.point(w, P);
    }
    function p(w, P) {
      var b = r(w, P);
      o.point(b[0], b[1]);
    }
    function m() {
      d.point = p, o.lineStart();
    }
    function y() {
      d.point = _, o.lineEnd();
    }
    function v(w, P) {
      g.push([w, P]);
      var b = r(w, P);
      l.point(b[0], b[1]);
    }
    function C() {
      l.lineStart(), g = [];
    }
    function E() {
      v(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), P = u.result(), b, R = P.length, O, z, L;
      if (g.pop(), h.push(g), g = null, !!R) {
        if (w & 1) {
          if (z = P[0], (O = z.length - 1) > 0) {
            for (c || (s.polygonStart(), c = !0), s.lineStart(), b = 0; b < O; ++b)
              s.point((L = z[b])[0], L[1]);
            s.lineEnd();
          }
          return;
        }
        R > 1 && w & 2 && P.push(P.pop().concat(P.shift())), f.push(P.filter(Ev));
      }
    }
    return d;
  };
}
function Ev(i) {
  return i.length > 1;
}
function xv(i, t) {
  return ((i = i.x)[0] < 0 ? i[1] - Ri - It : Ri - i[1]) - ((t = t.x)[0] < 0 ? t[1] - Ri - It : Ri - t[1]);
}
const Uh = jg(
  function() {
    return !0;
  },
  Cv,
  Sv,
  [-ht, -Ri]
);
function Cv(i) {
  var t = NaN, e = NaN, n = NaN, r;
  return {
    lineStart: function() {
      i.lineStart(), r = 1;
    },
    point: function(s, o) {
      var a = s > 0 ? ht : -ht, u = me(s - t);
      me(u - ht) < It ? (i.point(t, e = (e + o) / 2 > 0 ? Ri : -Ri), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), i.point(s, e), r = 0) : n !== a && u >= ht && (me(t - n) < It && (t -= n * It), me(s - a) < It && (s -= a * It), e = Iv(t, e, s, o), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), r = 0), i.point(t = s, e = o), n = a;
    },
    lineEnd: function() {
      i.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - r;
    }
  };
}
function Iv(i, t, e, n) {
  var r, s, o = Gt(i - e);
  return me(o) > It ? cv((Gt(t) * (s = kt(n)) * Gt(e) - Gt(n) * (r = kt(t)) * Gt(i)) / (r * s * o)) : (t + n) / 2;
}
function Sv(i, t, e, n) {
  var r;
  if (i == null)
    r = e * Ri, n.point(-ht, r), n.point(0, r), n.point(ht, r), n.point(ht, 0), n.point(ht, -r), n.point(0, -r), n.point(-ht, -r), n.point(-ht, 0), n.point(-ht, r);
  else if (me(i[0] - t[0]) > It) {
    var s = i[0] < t[0] ? ht : -ht;
    r = e * s / 2, n.point(-s, r), n.point(0, r), n.point(s, r);
  } else
    n.point(t[0], t[1]);
}
function wv(i, t) {
  var e = kt(i), n = e > 0, r = me(e) > It;
  function s(c, h, f, g) {
    gv(g, i, t, f, c, h);
  }
  function o(c, h) {
    return kt(c) * kt(h) > e;
  }
  function a(c) {
    var h, f, g, d, _;
    return {
      lineStart: function() {
        d = g = !1, _ = 1;
      },
      point: function(p, m) {
        var y = [p, m], v, C = o(p, m), E = n ? C ? 0 : l(p, m) : C ? l(p + (p < 0 ? ht : -ht), m) : 0;
        if (!h && (d = g = C) && c.lineStart(), C !== g && (v = u(h, y), (!v || Ka(h, v) || Ka(y, v)) && (y[0] += It, y[1] += It, C = o(y[0], y[1]))), C !== g)
          _ = 0, C ? (c.lineStart(), v = u(y, h), c.point(v[0], v[1])) : (v = u(h, y), c.point(v[0], v[1]), c.lineEnd()), h = v;
        else if (r && h && n ^ C) {
          var w;
          !(E & f) && (w = u(y, h, !0)) && (_ = 0, n ? (c.lineStart(), c.point(w[0][0], w[0][1]), c.point(w[1][0], w[1][1]), c.lineEnd()) : (c.point(w[1][0], w[1][1]), c.lineEnd(), c.lineStart(), c.point(w[0][0], w[0][1])));
        }
        C && (!h || !Ka(h, y)) && c.point(y[0], y[1]), h = y, g = C, f = E;
      },
      lineEnd: function() {
        g && c.lineEnd(), h = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return _ | (d && g) << 1;
      }
    };
  }
  function u(c, h, f) {
    var g = ho(c), d = ho(h), _ = [1, 0, 0], p = yu(g, d), m = Ya(p, p), y = p[0], v = m - y * y;
    if (!v)
      return !f && c;
    var C = e * m / v, E = -e * y / v, w = yu(_, p), P = Ua(_, C), b = Ua(p, E);
    tl(P, b);
    var R = w, O = Ya(P, R), z = Ya(R, R), L = O * O - z * (Ya(P, P) - 1);
    if (!(L < 0)) {
      var B = vo(L), M = Ua(R, (-O - B) / z);
      if (tl(M, P), M = Nl(M), !f)
        return M;
      var A = c[0], V = h[0], X = c[1], Z = h[1], nt;
      V < A && (nt = A, A = V, V = nt);
      var mt = V - A, Tt = me(mt - ht) < It, G = Tt || mt < It;
      if (!Tt && Z < X && (nt = X, X = Z, Z = nt), G ? Tt ? X + Z > 0 ^ M[1] < (me(M[0] - A) < It ? X : Z) : X <= M[1] && M[1] <= Z : mt > ht ^ (A <= M[0] && M[0] <= V)) {
        var je = Ua(R, (-O + B) / z);
        return tl(je, P), [M, Nl(je)];
      }
    }
  }
  function l(c, h) {
    var f = n ? i : ht - i, g = 0;
    return c < -f ? g |= 1 : c > f && (g |= 2), h < -f ? g |= 4 : h > f && (g |= 8), g;
  }
  return jg(o, a, s, n ? [0, -i] : [-ht, i - ht]);
}
function Zg(i) {
  return function(t) {
    var e = new Pl();
    for (var n in i)
      e[n] = i[n];
    return e.stream = t, e;
  };
}
function Pl() {
}
Pl.prototype = {
  constructor: Pl,
  point: function(i, t) {
    this.stream.point(i, t);
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
function Kg(i, t, e) {
  var n = t[1][0] - t[0][0], r = t[1][1] - t[0][1], s = i.clipExtent && i.clipExtent();
  i.scale(150).translate([0, 0]), s != null && i.clipExtent(null), hv(e, i.stream(Yh));
  var o = Yh.result(), a = Math.min(n / (o[1][0] - o[0][0]), r / (o[1][1] - o[0][1])), u = +t[0][0] + (n - a * (o[1][0] + o[0][0])) / 2, l = +t[0][1] + (r - a * (o[1][1] + o[0][1])) / 2;
  return s != null && i.clipExtent(s), i.scale(a * 150).translate([u, l]);
}
function Rv(i, t, e) {
  return Kg(i, [[0, 0], t], e);
}
var Wh = 16, Nv = kt(30 * Ln);
function qh(i, t) {
  return +t ? bv(i, t) : Lv(i);
}
function Lv(i) {
  return Zg({
    point: function(t, e) {
      t = i(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function bv(i, t) {
  function e(n, r, s, o, a, u, l, c, h, f, g, d, _, p) {
    var m = l - n, y = c - r, v = m * m + y * y;
    if (v > 4 * t && _--) {
      var C = o + f, E = a + g, w = u + d, P = vo(C * C + E * E + w * w), b = ds(w /= P), R = me(me(w) - 1) < It || me(s - h) < It ? (s + h) / 2 : co(E, C), O = i(R, b), z = O[0], L = O[1], B = z - n, M = L - r, A = y * B - m * M;
      (A * A / v > t || me((m * B + y * M) / v - 0.5) > 0.3 || o * f + a * g + u * d < Nv) && (e(n, r, s, o, a, u, z, L, R, C /= P, E /= P, w, _, p), p.point(z, L), e(z, L, R, C, E, w, l, c, h, f, g, d, _, p));
    }
  }
  return function(n) {
    var r, s, o, a, u, l, c, h, f, g, d, _, p = {
      point: m,
      lineStart: y,
      lineEnd: C,
      polygonStart: function() {
        n.polygonStart(), p.lineStart = E;
      },
      polygonEnd: function() {
        n.polygonEnd(), p.lineStart = y;
      }
    };
    function m(b, R) {
      b = i(b, R), n.point(b[0], b[1]);
    }
    function y() {
      h = NaN, p.point = v, n.lineStart();
    }
    function v(b, R) {
      var O = ho([b, R]), z = i(b, R);
      e(h, f, c, g, d, _, h = z[0], f = z[1], c = b, g = O[0], d = O[1], _ = O[2], Wh, n), n.point(h, f);
    }
    function C() {
      p.point = m, n.lineEnd();
    }
    function E() {
      y(), p.point = w, p.lineEnd = P;
    }
    function w(b, R) {
      v(r = b, R), s = h, o = f, a = g, u = d, l = _, p.point = v;
    }
    function P() {
      e(h, f, c, g, d, _, s, o, r, a, u, l, Wh, n), p.lineEnd = C, C();
    }
    return p;
  };
}
var Pv = Zg({
  point: function(i, t) {
    this.stream.point(i * Ln, t * Ln);
  }
});
function Tv(i) {
  return Mv(function() {
    return i;
  })();
}
function Mv(i) {
  var t, e = 150, n = 480, r = 250, s, o, a = 0, u = 0, l = 0, c = 0, h = 0, f, g, d = null, _ = Uh, p = null, m, y, v, C = Xh, E = 0.5, w = qh(z, E), P, b;
  function R(M) {
    return M = g(M[0] * Ln, M[1] * Ln), [M[0] * e + s, o - M[1] * e];
  }
  function O(M) {
    return M = g.invert((M[0] - s) / e, (o - M[1]) / e), M && [M[0] * pr, M[1] * pr];
  }
  function z(M, A) {
    return M = t(M, A), [M[0] * e + s, o - M[1] * e];
  }
  R.stream = function(M) {
    return P && b === M ? P : P = Pv(_(f, w(C(b = M))));
  }, R.clipAngle = function(M) {
    return arguments.length ? (_ = +M ? wv(d = M * Ln, 6 * Ln) : (d = null, Uh), B()) : d * pr;
  }, R.clipExtent = function(M) {
    return arguments.length ? (C = M == null ? (p = m = y = v = null, Xh) : mv(p = +M[0][0], m = +M[0][1], y = +M[1][0], v = +M[1][1]), B()) : p == null ? null : [[p, m], [y, v]];
  }, R.scale = function(M) {
    return arguments.length ? (e = +M, L()) : e;
  }, R.translate = function(M) {
    return arguments.length ? (n = +M[0], r = +M[1], L()) : [n, r];
  }, R.center = function(M) {
    return arguments.length ? (a = M[0] % 360 * Ln, u = M[1] % 360 * Ln, L()) : [a * pr, u * pr];
  }, R.rotate = function(M) {
    return arguments.length ? (l = M[0] % 360 * Ln, c = M[1] % 360 * Ln, h = M.length > 2 ? M[2] % 360 * Ln : 0, L()) : [l * pr, c * pr, h * pr];
  }, R.precision = function(M) {
    return arguments.length ? (w = qh(z, E = M * M), B()) : vo(E);
  }, R.fitExtent = function(M, A) {
    return Kg(R, M, A);
  }, R.fitSize = function(M, A) {
    return Rv(R, M, A);
  };
  function L() {
    g = Yg(f = fv(l, c, h), t);
    var M = t(a, u);
    return s = n - M[0] * e, o = r + M[1] * e, B();
  }
  function B() {
    return P = b = null, R;
  }
  return function() {
    return t = i.apply(this, arguments), R.invert = t.invert && O, L();
  };
}
function Jg(i) {
  return function(t, e) {
    var n = kt(t), r = kt(e), s = i(n * r);
    return [
      s * r * Gt(t),
      s * Gt(e)
    ];
  };
}
function Qg(i) {
  return function(t, e) {
    var n = vo(t * t + e * e), r = i(n), s = Gt(r), o = kt(r);
    return [
      co(t * s, n * o),
      ds(n && e * s / n)
    ];
  };
}
var Ov = Jg(function(i) {
  return vo(2 / (1 + i));
});
Ov.invert = Qg(function(i) {
  return 2 * ds(i / 2);
});
var $g = Jg(function(i) {
  return (i = Xg(i)) && i / Gt(i);
});
$g.invert = Qg(function(i) {
  return i;
});
function Av() {
  return Tv($g).scale(79.4188).clipAngle(180 - 1e-3);
}
function Hh(i, t) {
  return [i, t];
}
Hh.invert = Hh;
function Dv(i, t, e) {
  e = e || {};
  var n = e.units || "kilometers", r = e.steps || 8;
  if (!i)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof r != "number")
    throw new Error("steps must be an number");
  if (t === void 0)
    throw new Error("radius is required");
  if (r <= 0)
    throw new Error("steps must be greater than 0");
  var s = [];
  switch (i.type) {
    case "GeometryCollection":
      return dg(i, function(o) {
        var a = Ja(o, t, n, r);
        a && s.push(a);
      }), Il(s);
    case "FeatureCollection":
      return Nh(i, function(o) {
        var a = Ja(o, t, n, r);
        a && Nh(a, function(u) {
          u && s.push(u);
        });
      }), Il(s);
  }
  return Ja(i, t, n, r);
}
function Ja(i, t, e, n) {
  var r = i.properties || {}, s = i.type === "Feature" ? i.geometry : i;
  if (s.type === "GeometryCollection") {
    var o = [];
    return dg(i, function(_) {
      var p = Ja(_, t, e, n);
      p && o.push(p);
    }), Il(o);
  }
  var a = Fv(s), u = {
    type: s.type,
    coordinates: ed(s.coordinates, a)
  }, l = new gc(), c = l.read(u), h = Uy(Wy(t, e), "meters"), f = te.bufferOp(c, h, n), g = new Sg();
  if (f = g.write(f), !td(f.coordinates)) {
    var d = {
      type: f.type,
      coordinates: nd(f.coordinates, a)
    };
    return Lu(d, r);
  }
}
function td(i) {
  return Array.isArray(i[0]) ? td(i[0]) : isNaN(i[0]);
}
function ed(i, t) {
  return typeof i[0] != "object" ? t(i) : i.map(function(e) {
    return ed(e, t);
  });
}
function nd(i, t) {
  return typeof i[0] != "object" ? t.invert(i) : i.map(function(e) {
    return nd(e, t);
  });
}
function Fv(i) {
  var t = qy(i).geometry.coordinates, e = [-t[0], -t[1]];
  return Av().rotate(e).scale(Ge);
}
/**
 * splaytree v3.1.1
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
function kv(i, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, r, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, r && (s = l[0] & 2 ? r.return : l[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, l[1])).done)
          return s;
        switch (r = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, r = l[1], l = [0];
            continue;
          case 7:
            l = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              e = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              e.label = l[1];
              break;
            }
            if (l[0] === 6 && e.label < s[1]) {
              e.label = s[1], s = l;
              break;
            }
            if (s && e.label < s[2]) {
              e.label = s[2], e.ops.push(l);
              break;
            }
            s[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        l = t.call(i, e);
      } catch (c) {
        l = [6, c], r = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var kr = (
  /** @class */
  function() {
    function i(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return i;
  }()
);
function Gv(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function _r(i, t, e) {
  for (var n = new kr(null, null), r = n, s = n; ; ) {
    var o = e(i, t.key);
    if (o < 0) {
      if (t.left === null)
        break;
      if (e(i, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      s.left = t, s = t, t = t.left;
    } else if (o > 0) {
      if (t.right === null)
        break;
      if (e(i, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      r.right = t, r = t, t = t.right;
    } else
      break;
  }
  return r.right = t.left, s.left = t.right, t.left = n.right, t.right = n.left, t;
}
function nl(i, t, e, n) {
  var r = new kr(i, t);
  if (e === null)
    return r.left = r.right = null, r;
  e = _r(i, e, n);
  var s = n(i, e.key);
  return s < 0 ? (r.left = e.left, r.right = e, e.left = null) : s >= 0 && (r.right = e.right, r.left = e, e.right = null), r;
}
function jh(i, t, e) {
  var n = null, r = null;
  if (t) {
    t = _r(i, t, e);
    var s = e(t.key, i);
    s === 0 ? (n = t.left, r = t.right) : s < 0 ? (r = t.right, t.right = null, n = t) : (n = t.left, t.left = null, r = t);
  }
  return { left: n, right: r };
}
function Bv(i, t, e) {
  return t === null ? i : (i === null || (t = _r(i.key, t, e), t.left = i), t);
}
function Tl(i, t, e, n, r) {
  if (i) {
    n("" + t + (e ? "└── " : "├── ") + r(i) + `
`);
    var s = t + (e ? "    " : "│   ");
    i.left && Tl(i.left, s, !1, n, r), i.right && Tl(i.right, s, !0, n, r);
  }
}
var Cc = (
  /** @class */
  function() {
    function i(t) {
      t === void 0 && (t = Gv), this._root = null, this._size = 0, this._comparator = t;
    }
    return i.prototype.insert = function(t, e) {
      return this._size++, this._root = nl(t, e, this._root, this._comparator);
    }, i.prototype.add = function(t, e) {
      var n = new kr(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, s = _r(t, this._root, r), o = r(t, s.key);
      return o === 0 ? this._root = s : (o < 0 ? (n.left = s.left, n.right = s, s.left = null) : o > 0 && (n.right = s.right, n.left = s, s.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, i.prototype._remove = function(t, e, n) {
      var r;
      if (e === null)
        return null;
      e = _r(t, e, n);
      var s = n(t, e.key);
      return s === 0 ? (e.left === null ? r = e.right : (r = _r(t, e.left, n), r.right = e.right), this._size--, r) : e;
    }, i.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = _r(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
      }
      return null;
    }, i.prototype.findStatic = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return e;
        r < 0 ? e = e.left : e = e.right;
      }
      return null;
    }, i.prototype.find = function(t) {
      return this._root && (this._root = _r(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, i.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var r = n(t, e.key);
        if (r === 0)
          return !0;
        r < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, i.prototype.forEach = function(t, e) {
      for (var n = this._root, r = [], s = !1; !s; )
        n !== null ? (r.push(n), n = n.left) : r.length !== 0 ? (n = r.pop(), t.call(e, n), n = n.right) : s = !0;
      return this;
    }, i.prototype.range = function(t, e, n, r) {
      for (var s = [], o = this._comparator, a = this._root, u; s.length !== 0 || a; )
        if (a)
          s.push(a), a = a.left;
        else {
          if (a = s.pop(), u = o(a.key, e), u > 0)
            break;
          if (o(a.key, t) >= 0 && n.call(r, a))
            return this;
          a = a.right;
        }
      return this;
    }, i.prototype.keys = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.key;
        return t.push(n);
      }), t;
    }, i.prototype.values = function() {
      var t = [];
      return this.forEach(function(e) {
        var n = e.data;
        return t.push(n);
      }), t;
    }, i.prototype.min = function() {
      return this._root ? this.minNode(this._root).key : null;
    }, i.prototype.max = function() {
      return this._root ? this.maxNode(this._root).key : null;
    }, i.prototype.minNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.left; )
          t = t.left;
      return t;
    }, i.prototype.maxNode = function(t) {
      if (t === void 0 && (t = this._root), t)
        for (; t.right; )
          t = t.right;
      return t;
    }, i.prototype.at = function(t) {
      for (var e = this._root, n = !1, r = 0, s = []; !n; )
        if (e)
          s.push(e), e = e.left;
        else if (s.length > 0) {
          if (e = s.pop(), r === t)
            return e;
          r++, e = e.right;
        } else
          n = !0;
      return null;
    }, i.prototype.next = function(t) {
      var e = this._root, n = null;
      if (t.right) {
        for (n = t.right; n.left; )
          n = n.left;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var s = r(t.key, e.key);
        if (s === 0)
          break;
        s < 0 ? (n = e, e = e.left) : e = e.right;
      }
      return n;
    }, i.prototype.prev = function(t) {
      var e = this._root, n = null;
      if (t.left !== null) {
        for (n = t.left; n.right; )
          n = n.right;
        return n;
      }
      for (var r = this._comparator; e; ) {
        var s = r(t.key, e.key);
        if (s === 0)
          break;
        s < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, i.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, i.prototype.toList = function() {
      return Vv(this._root);
    }, i.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var r = t.length, s = this._comparator;
      if (n && Al(t, e, 0, r - 1, s), this._root === null)
        this._root = Ml(t, e, 0, r), this._size = r;
      else {
        var o = Xv(this.toList(), zv(t, e), s);
        r = this._size + r, this._root = Ol({ head: o }, 0, r);
      }
      return this;
    }, i.prototype.isEmpty = function() {
      return this._root === null;
    }, Object.defineProperty(i.prototype, "size", {
      get: function() {
        return this._size;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(i.prototype, "root", {
      get: function() {
        return this._root;
      },
      enumerable: !0,
      configurable: !0
    }), i.prototype.toString = function(t) {
      t === void 0 && (t = function(n) {
        return String(n.key);
      });
      var e = [];
      return Tl(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, i.prototype.update = function(t, e, n) {
      var r = this._comparator, s = jh(t, this._root, r), o = s.left, a = s.right;
      r(t, e) < 0 ? a = nl(e, n, a, r) : o = nl(e, n, o, r), this._root = Bv(o, a, r);
    }, i.prototype.split = function(t) {
      return jh(t, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var t;
      return kv(this, function(e) {
        switch (e.label) {
          case 0:
            t = this.minNode(), e.label = 1;
          case 1:
            return t ? [4, t] : [3, 3];
          case 2:
            return e.sent(), t = this.next(t), [3, 1];
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    }, i;
  }()
);
function Ml(i, t, e, n) {
  var r = n - e;
  if (r > 0) {
    var s = e + Math.floor(r / 2), o = i[s], a = t[s], u = new kr(o, a);
    return u.left = Ml(i, t, e, s), u.right = Ml(i, t, s + 1, n), u;
  }
  return null;
}
function zv(i, t) {
  for (var e = new kr(null, null), n = e, r = 0; r < i.length; r++)
    n = n.next = new kr(i[r], t[r]);
  return n.next = null, e.next;
}
function Vv(i) {
  for (var t = i, e = [], n = !1, r = new kr(null, null), s = r; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = s = s.next = e.pop(), t = t.right) : n = !0;
  return s.next = null, r.next;
}
function Ol(i, t, e) {
  var n = e - t;
  if (n > 0) {
    var r = t + Math.floor(n / 2), s = Ol(i, t, r), o = i.head;
    return o.left = s, i.head = i.head.next, o.right = Ol(i, r + 1, e), o;
  }
  return null;
}
function Xv(i, t, e) {
  for (var n = new kr(null, null), r = n, s = i, o = t; s !== null && o !== null; )
    e(s.key, o.key) < 0 ? (r.next = s, s = s.next) : (r.next = o, o = o.next), r = r.next;
  return s !== null ? r.next = s : o !== null && (r.next = o), n.next;
}
function Al(i, t, e, n, r) {
  if (!(e >= n)) {
    for (var s = i[e + n >> 1], o = e - 1, a = n + 1; ; ) {
      do
        o++;
      while (r(i[o], s) < 0);
      do
        a--;
      while (r(i[a], s) > 0);
      if (o >= a)
        break;
      var u = i[o];
      i[o] = i[a], i[a] = u, u = t[o], t[o] = t[a], t[a] = u;
    }
    Al(i, t, e, a, r), Al(i, t, a + 1, n, r);
  }
}
function Zn(i, t) {
  if (!(i instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zh(i, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
  }
}
function He(i, t, e) {
  return t && Zh(i.prototype, t), e && Zh(i, e), i;
}
var Po = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Dl = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var n = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, r = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, s = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, o = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: n,
      y: s
    },
    ur: {
      x: r,
      y: o
    }
  };
}, Er = Number.EPSILON;
Er === void 0 && (Er = Math.pow(2, -52));
var Yv = Er * Er, Fl = function(t, e) {
  if (-Er < t && t < Er && -Er < e && e < Er)
    return 0;
  var n = t - e;
  return n * n < Yv * t * e ? 0 : t < e ? -1 : 1;
}, Uv = /* @__PURE__ */ function() {
  function i() {
    Zn(this, i), this.reset();
  }
  return He(i, [{
    key: "reset",
    value: function() {
      this.xRounder = new Kh(), this.yRounder = new Kh();
    }
  }, {
    key: "round",
    value: function(e, n) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(n)
      };
    }
  }]), i;
}(), Kh = /* @__PURE__ */ function() {
  function i() {
    Zn(this, i), this.tree = new Cc(), this.round(0);
  }
  return He(i, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), r = this.tree.prev(n);
      if (r !== null && Fl(n.key, r.key) === 0)
        return this.tree.remove(e), r.key;
      var s = this.tree.next(n);
      return s !== null && Fl(n.key, s.key) === 0 ? (this.tree.remove(e), s.key) : e;
    }
  }]), i;
}(), da = new Uv(), Go = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, id = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, Jh = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, o = Go(r, s);
  return Fl(o, 0);
}, xu = function(t) {
  return Math.sqrt(id(t, t));
}, Wv = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Go(s, r) / xu(s) / xu(r);
}, qv = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return id(s, r) / xu(s) / xu(r);
}, Qh = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, $h = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, Hv = function(t, e, n, r) {
  if (e.x === 0)
    return $h(n, r, t.x);
  if (r.x === 0)
    return $h(t, e, n.x);
  if (e.y === 0)
    return Qh(n, r, t.y);
  if (r.y === 0)
    return Qh(t, e, n.y);
  var s = Go(e, r);
  if (s == 0)
    return null;
  var o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = Go(o, e) / s, u = Go(o, r) / s, l = t.x + u * e.x, c = n.x + a * r.x, h = t.y + u * e.y, f = n.y + a * r.y, g = (l + c) / 2, d = (h + f) / 2;
  return {
    x: g,
    y: d
  };
}, Ci = /* @__PURE__ */ function() {
  He(i, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var r = i.comparePoints(e.point, n.point);
      return r !== 0 ? r : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : Cu.compare(e.segment, n.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, n) {
      return e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function i(t, e) {
    Zn(this, i), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return He(i, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var n = e.point.events, r = 0, s = n.length; r < s; r++) {
        var o = n[r];
        this.point.events.push(o), o.point = this.point;
      }
      this.checkForConsuming();
    }
    /* Do a pass over our linked events and check to see if any pair
     * of segments match, and should be consumed. */
  }, {
    key: "checkForConsuming",
    value: function() {
      for (var e = this.point.events.length, n = 0; n < e; n++) {
        var r = this.point.events[n];
        if (r.segment.consumedBy === void 0)
          for (var s = n + 1; s < e; s++) {
            var o = this.point.events[s];
            o.consumedBy === void 0 && r.otherSE.point.events === o.otherSE.point.events && r.segment.consume(o.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], n = 0, r = this.point.events.length; n < r; n++) {
        var s = this.point.events[n];
        s !== this && !s.segment.ringOut && s.segment.isInResult() && e.push(s);
      }
      return e;
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
  }, {
    key: "getLeftmostComparator",
    value: function(e) {
      var n = this, r = /* @__PURE__ */ new Map(), s = function(a) {
        var u = a.otherSE;
        r.set(a, {
          sine: Wv(n.point, e.point, u.point),
          cosine: qv(n.point, e.point, u.point)
        });
      };
      return function(o, a) {
        r.has(o) || s(o), r.has(a) || s(a);
        var u = r.get(o), l = u.sine, c = u.cosine, h = r.get(a), f = h.sine, g = h.cosine;
        return l >= 0 && f >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && f < 0 ? c < g ? -1 : c > g ? 1 : 0 : f < l ? -1 : f > l ? 1 : 0;
      };
    }
  }]), i;
}(), jv = 0, Cu = /* @__PURE__ */ function() {
  He(i, null, [{
    key: "compare",
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
    value: function(e, n) {
      var r = e.leftSE.point.x, s = n.leftSE.point.x, o = e.rightSE.point.x, a = n.rightSE.point.x;
      if (a < r)
        return 1;
      if (o < s)
        return -1;
      var u = e.leftSE.point.y, l = n.leftSE.point.y, c = e.rightSE.point.y, h = n.rightSE.point.y;
      if (r < s) {
        if (l < u && l < c)
          return 1;
        if (l > u && l > c)
          return -1;
        var f = e.comparePoint(n.leftSE.point);
        if (f < 0)
          return 1;
        if (f > 0)
          return -1;
        var g = n.comparePoint(e.rightSE.point);
        return g !== 0 ? g : -1;
      }
      if (r > s) {
        if (u < l && u < h)
          return -1;
        if (u > l && u > h)
          return 1;
        var d = n.comparePoint(e.leftSE.point);
        if (d !== 0)
          return d;
        var _ = e.comparePoint(n.rightSE.point);
        return _ < 0 ? 1 : _ > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (o < a) {
        var p = n.comparePoint(e.rightSE.point);
        if (p !== 0)
          return p;
      }
      if (o > a) {
        var m = e.comparePoint(n.rightSE.point);
        if (m < 0)
          return 1;
        if (m > 0)
          return -1;
      }
      if (o !== a) {
        var y = c - u, v = o - r, C = h - l, E = a - s;
        if (y > v && C < E)
          return 1;
        if (y < v && C > E)
          return -1;
      }
      return o > a ? 1 : o < a || c < h ? -1 : c > h ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function i(t, e, n, r) {
    Zn(this, i), this.id = ++jv, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
  }
  return He(i, [{
    key: "replaceRightSE",
    /* When a segment is split, the rightSE is replaced with a new sweep event */
    value: function(e) {
      this.rightSE = e, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
    }
  }, {
    key: "bbox",
    value: function() {
      var e = this.leftSE.point.y, n = this.rightSE.point.y;
      return {
        ll: {
          x: this.leftSE.point.x,
          y: e < n ? e : n
        },
        ur: {
          x: this.rightSE.point.x,
          y: e > n ? e : n
        }
      };
    }
    /* A vector from the left point to the right */
  }, {
    key: "vector",
    value: function() {
      return {
        x: this.rightSE.point.x - this.leftSE.point.x,
        y: this.rightSE.point.y - this.leftSE.point.y
      };
    }
  }, {
    key: "isAnEndpoint",
    value: function(e) {
      return e.x === this.leftSE.point.x && e.y === this.leftSE.point.y || e.x === this.rightSE.point.x && e.y === this.rightSE.point.y;
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
  }, {
    key: "comparePoint",
    value: function(e) {
      if (this.isAnEndpoint(e))
        return 0;
      var n = this.leftSE.point, r = this.rightSE.point, s = this.vector();
      if (n.x === r.x)
        return e.x === n.x ? 0 : e.x < n.x ? 1 : -1;
      var o = (e.y - n.y) / s.y, a = n.x + o * s.x;
      if (e.x === a)
        return 0;
      var u = (e.x - n.x) / s.x, l = n.y + u * s.y;
      return e.y === l ? 0 : e.y < l ? -1 : 1;
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
  }, {
    key: "getIntersection",
    value: function(e) {
      var n = this.bbox(), r = e.bbox(), s = Dl(n, r);
      if (s === null)
        return null;
      var o = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = Po(n, u) && this.comparePoint(u) === 0, h = Po(r, o) && e.comparePoint(o) === 0, f = Po(n, l) && this.comparePoint(l) === 0, g = Po(r, a) && e.comparePoint(a) === 0;
      if (h && c)
        return g && !f ? a : !g && f ? l : null;
      if (h)
        return f && o.x === l.x && o.y === l.y ? null : o;
      if (c)
        return g && a.x === u.x && a.y === u.y ? null : u;
      if (g && f)
        return null;
      if (g)
        return a;
      if (f)
        return l;
      var d = Hv(o, this.vector(), u, e.vector());
      return d === null || !Po(s, d) ? null : da.round(d.x, d.y);
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
  }, {
    key: "split",
    value: function(e) {
      var n = [], r = e.events !== void 0, s = new Ci(e, !0), o = new Ci(e, !1), a = this.rightSE;
      this.replaceRightSE(o), n.push(o), n.push(s);
      var u = new i(s, a, this.rings.slice(), this.windings.slice());
      return Ci.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), Ci.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), r && (s.checkForConsuming(), o.checkForConsuming()), n;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var n = 0, r = this.windings.length; n < r; n++)
        this.windings[n] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var n = this, r = e; n.consumedBy; )
        n = n.consumedBy;
      for (; r.consumedBy; )
        r = r.consumedBy;
      var s = i.compare(n, r);
      if (s !== 0) {
        if (s > 0) {
          var o = n;
          n = r, r = o;
        }
        if (n.prev === r) {
          var a = n;
          n = r, r = a;
        }
        for (var u = 0, l = r.rings.length; u < l; u++) {
          var c = r.rings[u], h = r.windings[u], f = n.rings.indexOf(c);
          f === -1 ? (n.rings.push(c), n.windings.push(h)) : n.windings[f] += h;
        }
        r.rings = null, r.windings = null, r.consumedBy = n, r.leftSE.consumedBy = n.leftSE, r.rightSE.consumedBy = n.rightSE;
      }
    }
    /* The first segment previous segment chain that is in the result */
  }, {
    key: "prevInResult",
    value: function() {
      return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
    }
  }, {
    key: "beforeState",
    value: function() {
      if (this._beforeState !== void 0)
        return this._beforeState;
      if (!this.prev)
        this._beforeState = {
          rings: [],
          windings: [],
          multiPolys: []
        };
      else {
        var e = this.prev.consumedBy || this.prev;
        this._beforeState = e.afterState();
      }
      return this._beforeState;
    }
  }, {
    key: "afterState",
    value: function() {
      if (this._afterState !== void 0)
        return this._afterState;
      var e = this.beforeState();
      this._afterState = {
        rings: e.rings.slice(0),
        windings: e.windings.slice(0),
        multiPolys: []
      };
      for (var n = this._afterState.rings, r = this._afterState.windings, s = this._afterState.multiPolys, o = 0, a = this.rings.length; o < a; o++) {
        var u = this.rings[o], l = this.windings[o], c = n.indexOf(u);
        c === -1 ? (n.push(u), r.push(l)) : r[c] += l;
      }
      for (var h = [], f = [], g = 0, d = n.length; g < d; g++)
        if (r[g] !== 0) {
          var _ = n[g], p = _.poly;
          if (f.indexOf(p) === -1)
            if (_.isExterior)
              h.push(p);
            else {
              f.indexOf(p) === -1 && f.push(p);
              var m = h.indexOf(_.poly);
              m !== -1 && h.splice(m, 1);
            }
        }
      for (var y = 0, v = h.length; y < v; y++) {
        var C = h[y].multiPoly;
        s.indexOf(C) === -1 && s.push(C);
      }
      return this._afterState;
    }
    /* Is this segment part of the final result? */
  }, {
    key: "isInResult",
    value: function() {
      if (this.consumedBy)
        return !1;
      if (this._isInResult !== void 0)
        return this._isInResult;
      var e = this.beforeState().multiPolys, n = this.afterState().multiPolys;
      switch (ei.type) {
        case "union": {
          var r = e.length === 0, s = n.length === 0;
          this._isInResult = r !== s;
          break;
        }
        case "intersection": {
          var o, a;
          e.length < n.length ? (o = e.length, a = n.length) : (o = n.length, a = e.length), this._isInResult = a === ei.numMultiPolys && o < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - n.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(h) {
            return h.length === 1 && h[0].isSubject;
          };
          this._isInResult = l(e) !== l(n);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(ei.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, r) {
      var s, o, a, u = Ci.comparePoints(e, n);
      if (u < 0)
        s = e, o = n, a = 1;
      else if (u > 0)
        s = n, o = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new Ci(s, !0), c = new Ci(o, !1);
      return new i(l, c, [r], [a]);
    }
  }]), i;
}(), tf = /* @__PURE__ */ function() {
  function i(t, e, n) {
    if (Zn(this, i), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var r = da.round(t[0][0], t[0][1]);
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
    for (var s = r, o = 1, a = t.length; o < a; o++) {
      if (typeof t[o][0] != "number" || typeof t[o][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = da.round(t[o][0], t[o][1]);
      u.x === s.x && u.y === s.y || (this.segments.push(Cu.fromRing(s, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), s = u);
    }
    (r.x !== s.x || r.y !== s.y) && this.segments.push(Cu.fromRing(s, r, this));
  }
  return He(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, r = this.segments.length; n < r; n++) {
        var s = this.segments[n];
        e.push(s.leftSE), e.push(s.rightSE);
      }
      return e;
    }
  }]), i;
}(), Zv = /* @__PURE__ */ function() {
  function i(t, e) {
    if (Zn(this, i), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new tf(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var n = 1, r = t.length; n < r; n++) {
      var s = new tf(t[n], this, !1);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.interiorRings.push(s);
    }
    this.multiPoly = e;
  }
  return He(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), n = 0, r = this.interiorRings.length; n < r; n++)
        for (var s = this.interiorRings[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), i;
}(), ef = /* @__PURE__ */ function() {
  function i(t, e) {
    if (Zn(this, i), !Array.isArray(t))
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
    for (var n = 0, r = t.length; n < r; n++) {
      var s = new Zv(t[n], this);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.polys.push(s);
    }
    this.isSubject = e;
  }
  return He(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, r = this.polys.length; n < r; n++)
        for (var s = this.polys[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), i;
}(), Kv = /* @__PURE__ */ function() {
  He(i, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var n = [], r = 0, s = e.length; r < s; r++) {
        var o = e[r];
        if (!(!o.isInResult() || o.ringOut)) {
          for (var a = null, u = o.leftSE, l = o.rightSE, c = [u], h = u.point, f = []; a = u, u = l, c.push(u), u.point !== h; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var d = c[0].point, _ = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(d.x, ",") + " ".concat(d.y, "]. Last matching segment found ends at") + " [".concat(_.x, ", ").concat(_.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var p = null, m = 0, y = f.length; m < y; m++)
                if (f[m].point === u.point) {
                  p = m;
                  break;
                }
              if (p !== null) {
                var v = f.splice(p)[0], C = c.splice(v.index);
                C.unshift(C[0].otherSE), n.push(new i(C.reverse()));
                continue;
              }
              f.push({
                index: c.length,
                point: u.point
              });
              var E = u.getLeftmostComparator(a);
              l = g.sort(E)[0].otherSE;
              break;
            }
          n.push(new i(c));
        }
      }
      return n;
    }
  }]);
  function i(t) {
    Zn(this, i), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return He(i, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], r = 1, s = this.events.length - 1; r < s; r++) {
        var o = this.events[r].point, a = this.events[r + 1].point;
        Jh(o, e, a) !== 0 && (n.push(o), e = o);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      Jh(u, e, l) === 0 && n.shift(), n.push(n[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : n.length - 1, f = this.isExteriorRing() ? n.length : -1, g = [], d = h; d != f; d += c)
        g.push([n[d].x, n[d].y]);
      return g;
    }
  }, {
    key: "isExteriorRing",
    value: function() {
      if (this._isExteriorRing === void 0) {
        var e = this.enclosingRing();
        this._isExteriorRing = e ? !e.isExteriorRing() : !0;
      }
      return this._isExteriorRing;
    }
  }, {
    key: "enclosingRing",
    value: function() {
      return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
    }
    /* Returns the ring that encloses this one, if any */
  }, {
    key: "_calcEnclosingRing",
    value: function() {
      for (var e = this.events[0], n = 1, r = this.events.length; n < r; n++) {
        var s = this.events[n];
        Ci.compare(e, s) > 0 && (e = s);
      }
      for (var o = e.segment.prevInResult(), a = o ? o.prevInResult() : null; ; ) {
        if (!o)
          return null;
        if (!a)
          return o.ringOut;
        if (a.ringOut !== o.ringOut)
          return a.ringOut.enclosingRing() !== o.ringOut ? o.ringOut : o.ringOut.enclosingRing();
        o = a.prevInResult(), a = o ? o.prevInResult() : null;
      }
    }
  }]), i;
}(), nf = /* @__PURE__ */ function() {
  function i(t) {
    Zn(this, i), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return He(i, [{
    key: "addInterior",
    value: function(e) {
      this.interiorRings.push(e), e.poly = this;
    }
  }, {
    key: "getGeom",
    value: function() {
      var e = [this.exteriorRing.getGeom()];
      if (e[0] === null)
        return null;
      for (var n = 0, r = this.interiorRings.length; n < r; n++) {
        var s = this.interiorRings[n].getGeom();
        s !== null && e.push(s);
      }
      return e;
    }
  }]), i;
}(), Jv = /* @__PURE__ */ function() {
  function i(t) {
    Zn(this, i), this.rings = t, this.polys = this._composePolys(t);
  }
  return He(i, [{
    key: "getGeom",
    value: function() {
      for (var e = [], n = 0, r = this.polys.length; n < r; n++) {
        var s = this.polys[n].getGeom();
        s !== null && e.push(s);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var n = [], r = 0, s = e.length; r < s; r++) {
        var o = e[r];
        if (!o.poly)
          if (o.isExteriorRing())
            n.push(new nf(o));
          else {
            var a = o.enclosingRing();
            a.poly || n.push(new nf(a)), a.poly.addInterior(o);
          }
      }
      return n;
    }
  }]), i;
}(), Qv = /* @__PURE__ */ function() {
  function i(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cu.compare;
    Zn(this, i), this.queue = t, this.tree = new Cc(e), this.segments = [];
  }
  return He(i, [{
    key: "process",
    value: function(e) {
      var n = e.segment, r = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(n), r;
      var s = e.isLeft ? this.tree.insert(n) : this.tree.find(n);
      if (!s)
        throw new Error("Unable to find segment #".concat(n.id, " ") + "[".concat(n.leftSE.point.x, ", ").concat(n.leftSE.point.y, "] -> ") + "[".concat(n.rightSE.point.x, ", ").concat(n.rightSE.point.y, "] ") + "in SweepLine tree. Please submit a bug report.");
      for (var o = s, a = s, u = void 0, l = void 0; u === void 0; )
        o = this.tree.prev(o), o === null ? u = null : o.key.consumedBy === void 0 && (u = o.key);
      for (; l === void 0; )
        a = this.tree.next(a), a === null ? l = null : a.key.consumedBy === void 0 && (l = a.key);
      if (e.isLeft) {
        var c = null;
        if (u) {
          var h = u.getIntersection(n);
          if (h !== null && (n.isAnEndpoint(h) || (c = h), !u.isAnEndpoint(h)))
            for (var f = this._splitSafely(u, h), g = 0, d = f.length; g < d; g++)
              r.push(f[g]);
        }
        var _ = null;
        if (l) {
          var p = l.getIntersection(n);
          if (p !== null && (n.isAnEndpoint(p) || (_ = p), !l.isAnEndpoint(p)))
            for (var m = this._splitSafely(l, p), y = 0, v = m.length; y < v; y++)
              r.push(m[y]);
        }
        if (c !== null || _ !== null) {
          var C = null;
          if (c === null)
            C = _;
          else if (_ === null)
            C = c;
          else {
            var E = Ci.comparePoints(c, _);
            C = E <= 0 ? c : _;
          }
          this.queue.remove(n.rightSE), r.push(n.rightSE);
          for (var w = n.split(C), P = 0, b = w.length; P < b; P++)
            r.push(w[P]);
        }
        r.length > 0 ? (this.tree.remove(n), r.push(e)) : (this.segments.push(n), n.prev = u);
      } else {
        if (u && l) {
          var R = u.getIntersection(l);
          if (R !== null) {
            if (!u.isAnEndpoint(R))
              for (var O = this._splitSafely(u, R), z = 0, L = O.length; z < L; z++)
                r.push(O[z]);
            if (!l.isAnEndpoint(R))
              for (var B = this._splitSafely(l, R), M = 0, A = B.length; M < A; M++)
                r.push(B[M]);
          }
        }
        this.tree.remove(n);
      }
      return r;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, n) {
      this.tree.remove(e);
      var r = e.rightSE;
      this.queue.remove(r);
      var s = e.split(n);
      return s.push(r), e.consumedBy === void 0 && this.tree.insert(e), s;
    }
  }]), i;
}(), rf = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, $v = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, t0 = /* @__PURE__ */ function() {
  function i() {
    Zn(this, i);
  }
  return He(i, [{
    key: "run",
    value: function(e, n, r) {
      ei.type = e, da.reset();
      for (var s = [new ef(n, !0)], o = 0, a = r.length; o < a; o++)
        s.push(new ef(r[o], !1));
      if (ei.numMultiPolys = s.length, ei.type === "difference")
        for (var u = s[0], l = 1; l < s.length; )
          Dl(s[l].bbox, u.bbox) !== null ? l++ : s.splice(l, 1);
      if (ei.type === "intersection") {
        for (var c = 0, h = s.length; c < h; c++)
          for (var f = s[c], g = c + 1, d = s.length; g < d; g++)
            if (Dl(f.bbox, s[g].bbox) === null)
              return [];
      }
      for (var _ = new Cc(Ci.compare), p = 0, m = s.length; p < m; p++)
        for (var y = s[p].getSweepEvents(), v = 0, C = y.length; v < C; v++)
          if (_.insert(y[v]), _.size > rf)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var E = new Qv(_), w = _.size, P = _.pop(); P; ) {
        var b = P.key;
        if (_.size === w) {
          var R = b.segment;
          throw new Error("Unable to pop() ".concat(b.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(b.point.x, ", ").concat(b.point.y, "] from segment #").concat(R.id, " ") + "[".concat(R.leftSE.point.x, ", ").concat(R.leftSE.point.y, "] -> ") + "[".concat(R.rightSE.point.x, ", ").concat(R.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (_.size > rf)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (E.segments.length > $v)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var O = E.process(b), z = 0, L = O.length; z < L; z++) {
          var B = O[z];
          B.consumedBy === void 0 && _.insert(B);
        }
        w = _.size, P = _.pop();
      }
      da.reset();
      var M = Kv.factory(E.segments), A = new Jv(M);
      return A.getGeom();
    }
  }]), i;
}(), ei = new t0(), e0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return ei.run("union", t, n);
}, n0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return ei.run("intersection", t, n);
}, i0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return ei.run("xor", t, n);
}, r0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return ei.run("difference", t, n);
}, s0 = {
  union: e0,
  intersection: n0,
  xor: i0,
  difference: r0
};
function sf(i) {
  return i.type === "Feature" ? i.geometry : i;
}
function o0(i, t) {
  var e = sf(i), n = sf(t), r = i.properties || {}, s = s0.difference(
    e.coordinates,
    n.coordinates
  );
  return s.length === 0 ? null : s.length === 1 ? Xy(s[0], r) : Yy(s, r);
}
function of(i) {
  let t;
  for (const e of i)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function af(i, t) {
  const e = o0(
    {
      type: "Polygon",
      coordinates: [
        [
          [180, 90],
          [-180, 90],
          [-180, -90],
          [180, -90],
          [180, 90]
        ]
      ]
    },
    i
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const n = Dv(i, 0);
  if (n.geometry.type === "Polygon")
    for (const r of n.geometry.coordinates)
      of(r);
  else
    for (const r of n.geometry.coordinates)
      for (const s of r)
        of(s);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
const uf = "EPSG:4326";
function a0(i) {
  var s;
  const t = i.getProperties(), { isMask: e } = t, n = (s = i.getGeometry()) == null ? void 0 : s.getType(), r = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new cu({
    stroke: e ? void 0 : new lu({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: e ? new Jo({
      color: "#00000020"
    }) : void 0,
    image: new sc({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new sg({
      backgroundFill: new Jo({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new lu({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function u0(i, t = {}, e = {}, n = a0) {
  let r = -1, s, o, a, u = !1;
  const l = new wy({
    updateWhileAnimating: !0
  });
  i.addLayer(l);
  const c = new Oy({});
  l.setSource(c), l.setStyle(n), i.on("click", (_) => {
    i.forEachFeatureAtPixel(_.pixel, (p) => {
      const m = p.getId();
      if (m)
        return _.stopPropagation(), o == null || o({ type: "markerClick", id: m }), p;
    });
  }), i.on("pointermove", (_) => {
    const p = i.forEachFeatureAtPixel(_.pixel, (m) => m.getId());
    s !== p && (s && (o == null || o({
      type: "markerMouseLeave",
      id: s
    })), p && (o == null || o({
      type: "markerMouseEnter",
      id: p
    })), i.getTargetElement().style.cursor = p ? "pointer" : u ? "crosshair" : "", s = p);
  });
  function h(_) {
    return _.transform(uf, i.getView().getProjection());
  }
  const f = () => {
    const _ = i.getView().getCenter(), p = _ && i.getView().getZoom() > 10 ? Tc(_, i.getView().getProjection()) : void 0;
    o == null || o({ type: "proximityChange", proximity: p });
  }, g = (_) => {
    o == null || o({
      type: "mapClick",
      coordinates: Tc(_.coordinate, i.getView().getProjection())
    });
  };
  return {
    setEventHandler(_) {
      _ ? (o = _, i.on("moveend", f), f(), i.on("click", g)) : (i.un("moveend", f), o == null || o({ type: "proximityChange", proximity: void 0 }), o = void 0, i.un("click", g));
    },
    flyTo(_, p) {
      i.getView().animate({
        center: Da(_, i.getView().getProjection()),
        zoom: p,
        duration: 2e3,
        ...t
      });
    },
    fitBounds(_, p, m) {
      i.getView().fit(hp(_, uf, i.getView().getProjection()), {
        padding: [p, p, p, p],
        maxZoom: m,
        duration: 2e3,
        ...e
      });
    },
    indicateReverse(_) {
      u = _, i.getTargetElement().style.cursor = _ ? "crosshair" : "";
    },
    setReverseMarker(_) {
      a ? _ ? a.getGeometry().setCoordinates(
        Da(_, i.getView().getProjection())
      ) : (c.removeFeature(a), a.dispose(), a = void 0) : _ && (a = new Gi(
        new zs(Da(_, i.getView().getProjection()))
      ), a.setProperties({ isReverse: !0 }), c.addFeature(a));
    },
    setMarkers(_, p) {
      function m(y) {
        var v;
        if (y)
          for (const C of y.features) {
            const E = C.geometry.type === "Polygon" ? new iu(C.geometry.coordinates) : C.geometry.type === "MultiPolygon" ? new wh(C.geometry.coordinates) : null;
            E && c.addFeature(
              new Gi({
                isMask: !!((v = C.properties) != null && v.isMask),
                geometry: h(E)
              })
            );
          }
      }
      if (c.clear(), a && c.addFeature(a), m(), p) {
        let y = !1;
        if (p.geometry.type === "GeometryCollection") {
          const v = p.geometry.geometries.map(
            (C) => C.type === "Polygon" ? new iu(C.coordinates) : C.type === "MultiPolygon" ? new wh(C.coordinates) : null
          ).filter((C) => !!C);
          if (v.length > 0)
            c.addFeature(
              new Gi(h(new Dy(v)))
            ), y = !0;
          else
            for (const C of p.geometry.geometries)
              C.type === "LineString" ? (c.addFeature(
                new Gi(h(new uu(C.coordinates)))
              ), y = !0) : C.type === "MultiLineString" && c.addFeature(
                new Gi(
                  h(new Sh(C.coordinates))
                )
              ), y = !0;
        }
        if (!y) {
          if (p.geometry.type === "Polygon")
            af(p, m);
          else if (p.geometry.type === "MultiPolygon")
            af(p, m);
          else if (p.geometry.type === "LineString") {
            c.addFeature(
              new Gi(
                h(new uu(p.geometry.coordinates))
              )
            );
            return;
          } else if (p.geometry.type === "MultiLineString") {
            c.addFeature(
              new Gi(
                h(new Sh(p.geometry.coordinates))
              )
            );
            return;
          }
        }
        c.addFeature(new Gi(h(new zs(p.center))));
      }
      for (const y of _ ?? []) {
        if (y === p)
          continue;
        const v = new Gi(
          new zs(Da(y.center, i.getView().getProjection()))
        );
        v.setId(y.id), v.setProperties({
          fuzzy: !!y.matching_text,
          tooltip: y.place_name.replace(/,.*/, "")
        }), c.addFeature(v);
      }
    },
    setSelectedMarker(_) {
      var y, v, C;
      const p = c.getFeatures(), m = (y = p[0]) != null && y.getProperties().isReverse ? 1 : 0;
      r > -1 && ((v = p[r + m]) == null || v.setProperties({
        isSelected: !1
      })), _ > -1 && ((C = p[_ + m]) == null || C.setProperties({
        isSelected: !0
      })), r = _;
    }
  };
}
var Ii, Jr;
class C0 extends Id {
  constructor(e) {
    const n = document.createElement("div");
    n.className = "ol-search";
    super({
      element: n,
      target: e.target
    });
    Uu(this, Ii, void 0);
    Uu(this, Jr, void 0);
    const {
      // marker,
      // showResultMarkers,
      flyTo: r,
      fullGeometryStyle: s,
      ...o
    } = e;
    Oa(this, Ii, new pm({
      target: n,
      props: {
        flyTo: r === void 0 ? !0 : !!r,
        ...o
      }
    }));
    for (const a of [
      "select",
      "pick",
      "featuresListed",
      "featuresMarked",
      "response",
      "optionsVisibilityChange",
      "reverseToggle",
      "queryChange"
    ])
      ki(this, Ii).$on(a, (u) => {
        switch (a) {
          case "select":
            this.dispatchEvent(
              new l0(u.detail)
            );
            break;
          case "featuresListed":
            this.dispatchEvent(
              new c0(u.detail)
            );
            break;
          case "featuresMarked":
            this.dispatchEvent(
              new h0(u.detail)
            );
            break;
          case "optionsVisibilityChange":
            this.dispatchEvent(
              new f0(u.detail)
            );
            break;
          case "pick":
            this.dispatchEvent(
              new g0(u.detail)
            );
            break;
          case "queryChange":
            this.dispatchEvent(new d0(u.detail));
            break;
          case "response":
            this.dispatchEvent(
              new p0(
                u.detail.url,
                u.detail.featureCollection
              )
            );
            break;
          case "reverseToggle":
            this.dispatchEvent(new _0(u.detail));
            break;
        }
      });
    Oa(this, Jr, e);
  }
  setMap(e) {
    var n;
    if (super.setMap(e), e) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: r,
        fullGeometryStyle: s
      } = ki(this, Jr), o = u0(
        e,
        typeof r == "boolean" ? void 0 : r,
        typeof r == "boolean" ? void 0 : r,
        // marker,
        // showResultMarkers,
        s
      );
      (n = ki(this, Ii)) == null || n.$set({ mapController: o });
    }
  }
  setOptions(e) {
    var o;
    Oa(this, Jr, e);
    const {
      // marker,
      // showResultMarkers,
      flyTo: n,
      fullGeometryStyle: r,
      ...s
    } = ki(this, Jr);
    (o = ki(this, Ii)) == null || o.$set({
      ...s,
      flyTo: n === void 0 ? !0 : !!n
    });
  }
  setQuery(e, n = !0) {
    var r;
    (r = ki(this, Ii)) == null || r.setQuery(e, n);
  }
  focus() {
    var e;
    (e = ki(this, Ii)) == null || e.focus();
  }
  blur() {
    var e;
    (e = ki(this, Ii)) == null || e.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
Ii = new WeakMap(), Jr = new WeakMap();
class l0 extends En {
  constructor(e) {
    super("select");
    Rn(this, "feature");
    this.feature = e;
  }
}
class c0 extends En {
  constructor(e) {
    super("featuresListed");
    Rn(this, "features");
    this.features = e;
  }
}
class h0 extends En {
  constructor(e) {
    super("featuresMarked");
    Rn(this, "features");
    this.features = e;
  }
}
class f0 extends En {
  constructor(e) {
    super("optionsVisibilityChange");
    Rn(this, "optionsVisible");
    this.optionsVisible = e;
  }
}
class g0 extends En {
  constructor(e) {
    super("pick");
    Rn(this, "feature");
    this.feature = e;
  }
}
class d0 extends En {
  constructor(e) {
    super("queryChange");
    Rn(this, "query");
    this.query = e;
  }
}
class p0 extends En {
  constructor(e, n) {
    super("response");
    Rn(this, "url");
    Rn(this, "featureCollection");
    this.url = e, this.featureCollection = n;
  }
}
class _0 extends En {
  constructor(e) {
    super("reverseToggle");
    Rn(this, "reverse");
    this.reverse = e;
  }
}
export {
  c0 as FeaturesListedEvent,
  h0 as FeaturesMarkedEvent,
  C0 as GeocodingControl,
  f0 as OptionsVisibilityChangeEvent,
  g0 as PickEvent,
  d0 as QueryChangeEvent,
  p0 as ResponseEvent,
  _0 as ReverseToggleEvent,
  l0 as SelectEvent,
  u0 as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
