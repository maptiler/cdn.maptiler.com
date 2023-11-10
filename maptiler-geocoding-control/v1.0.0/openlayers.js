var od = Object.defineProperty;
var ad = (r, t, e) => t in r ? od(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var In = (r, t, e) => (ad(r, typeof t != "symbol" ? t + "" : t, e), e), Sc = (r, t, e) => {
  if (!t.has(r))
    throw TypeError("Cannot " + e);
};
var jn = (r, t, e) => (Sc(r, t, "read from private field"), e ? e.call(r) : t.get(r)), Wu = (r, t, e) => {
  if (t.has(r))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(r) : t.set(r, e);
}, Ma = (r, t, e, n) => (Sc(r, t, "write to private field"), n ? n.call(r, e) : t.set(r, e), e);
class ud {
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
const En = ud, cf = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class ld {
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
const cd = ld;
function hd(r, t, e) {
  let n, i;
  e = e || Bo;
  let s = 0, o = r.length, a = !1;
  for (; s < o; )
    n = s + (o - s >> 1), i = +e(r[n], t), i < 0 ? s = n + 1 : (o = n, a = !i);
  return a ? s : ~s;
}
function Bo(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function hf(r, t, e) {
  if (r[0] <= t)
    return 0;
  const n = r.length;
  if (t <= r[n - 1])
    return n - 1;
  if (typeof e == "function") {
    for (let i = 1; i < n; ++i) {
      const s = r[i];
      if (s === t)
        return i;
      if (s < t)
        return e(t, r[i - 1], s) > 0 ? i - 1 : i;
    }
    return n - 1;
  }
  if (e > 0) {
    for (let i = 1; i < n; ++i)
      if (r[i] < t)
        return i - 1;
    return n - 1;
  }
  if (e < 0) {
    for (let i = 1; i < n; ++i)
      if (r[i] <= t)
        return i;
    return n - 1;
  }
  for (let i = 1; i < n; ++i) {
    if (r[i] == t)
      return i;
    if (r[i] < t)
      return r[i - 1] - t < t - r[i] ? i - 1 : i;
  }
  return n - 1;
}
function fd(r, t, e) {
  for (; t < e; ) {
    const n = r[t];
    r[t] = r[e], r[e] = n, ++t, --e;
  }
}
function zr(r, t) {
  const e = Array.isArray(t) ? t : [t], n = e.length;
  for (let i = 0; i < n; i++)
    r[r.length] = e[i];
}
function go(r, t) {
  const e = r.length;
  if (e !== t.length)
    return !1;
  for (let n = 0; n < e; n++)
    if (r[n] !== t[n])
      return !1;
  return !0;
}
function gd() {
  return !0;
}
function Xs() {
}
function dd(r) {
  let t = !1, e, n, i;
  return function() {
    const s = Array.prototype.slice.call(arguments);
    return (!t || this !== i || !go(s, n)) && (t = !0, i = this, n = s, e = r.apply(this, arguments)), e;
  };
}
function Gl(r) {
  for (const t in r)
    delete r[t];
}
function zo(r) {
  let t;
  for (t in r)
    return !1;
  return !t;
}
class pd extends cd {
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
    const n = this.listeners_ || (this.listeners_ = {}), i = n[t] || (n[t] = []);
    i.includes(e) || i.push(e);
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
    const e = typeof t == "string", n = e ? t : t.type, i = this.listeners_ && this.listeners_[n];
    if (!i)
      return;
    const s = e ? new En(t) : (
      /** @type {Event} */
      t
    );
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    n in o || (o[n] = 0, a[n] = 0), ++o[n];
    let u;
    for (let l = 0, c = i.length; l < c; ++l)
      if ("handleEvent" in i[l] ? u = /** @type {import("../events.js").ListenerObject} */
      i[l].handleEvent(s) : u = /** @type {import("../events.js").ListenerFunction} */
      i[l].call(this, s), u === !1 || s.propagationStopped) {
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
    this.listeners_ && Gl(this.listeners_);
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
      const i = n.indexOf(e);
      i !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (n[i] = Xs, ++this.pendingRemovals_[t]) : (n.splice(i, 1), n.length === 0 && delete this.listeners_[t]));
    }
  }
}
const ff = pd, An = {
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
function tr(r, t, e, n, i) {
  if (n && n !== r && (e = e.bind(n)), i) {
    const o = e;
    e = function() {
      r.removeEventListener(t, e), o.apply(this, arguments);
    };
  }
  const s = {
    target: r,
    type: t,
    listener: e
  };
  return r.addEventListener(t, e), s;
}
function Ja(r, t, e, n) {
  return tr(r, t, e, n, !0);
}
function er(r) {
  r && r.target && (r.target.removeEventListener(r.type, r.listener), Gl(r));
}
class Cu extends ff {
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
    ++this.revision_, this.dispatchEvent(An.CHANGE);
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
      const n = t.length, i = new Array(n);
      for (let s = 0; s < n; ++s)
        i[s] = tr(this, t[s], e);
      return i;
    }
    return tr(
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
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s < i; ++s)
        n[s] = Ja(this, t[s], e);
    } else
      n = Ja(
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
      _d(n);
    else if (Array.isArray(t))
      for (let i = 0, s = t.length; i < s; ++i)
        this.removeEventListener(t[i], e);
    else
      this.removeEventListener(t, e);
  }
}
Cu.prototype.on;
Cu.prototype.once;
Cu.prototype.un;
function _d(r) {
  if (Array.isArray(r))
    for (let t = 0, e = r.length; t < e; ++t)
      er(r[t]);
  else
    er(
      /** @type {import("./events.js").EventsKey} */
      r
    );
}
const gf = Cu;
function vt() {
  throw new Error("Unimplemented abstract method.");
}
let md = 0;
function ge(r) {
  return r.ol_uid || (r.ol_uid = String(++md));
}
class wc extends En {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(t, e, n) {
    super(t), this.key = e, this.oldValue = n;
  }
}
class yd extends gf {
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
    n = `change:${t}`, this.hasListener(n) && this.dispatchEvent(new wc(n, t, e)), n = cf.PROPERTYCHANGE, this.hasListener(n) && this.dispatchEvent(new wc(n, t, e));
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
    const i = this.values_ || (this.values_ = {});
    if (n)
      i[t] = e;
    else {
      const s = i[t];
      i[t] = e, s !== e && this.notify(t, s);
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
const Oi = yd, vd = {
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
}, vi = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
vi.includes("firefox");
const Ed = vi.includes("safari") && !vi.includes("chrom");
Ed && (vi.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(vi));
vi.includes("webkit") && vi.includes("edge");
vi.includes("macintosh");
const Bl = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, xd = typeof Image < "u" && Image.prototype.decode;
(function() {
  let r = !1;
  try {
    const t = Object.defineProperty({}, "passive", {
      get: function() {
        r = !0;
      }
    });
    window.addEventListener("_", null, t), window.removeEventListener("_", null, t);
  } catch {
  }
  return r;
})();
function ir(r, t, e, n) {
  let i;
  return e && e.length ? i = e.shift() : Bl ? i = new OffscreenCanvas(r || 300, t || 300) : i = document.createElement("canvas"), r && (i.width = r), t && (i.height = t), /** @type {CanvasRenderingContext2D} */
  i.getContext("2d", n);
}
function Cd(r) {
  const t = r.canvas;
  t.width = 1, t.height = 1, r.clearRect(0, 0, 1, 1);
}
function Rc(r) {
  return r && r.parentNode ? r.parentNode.removeChild(r) : null;
}
class Id extends Oi {
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
    Rc(this.element), super.disposeInternal();
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
    this.map_ && Rc(this.element);
    for (let e = 0, n = this.listenerKeys.length; e < n; ++e)
      er(this.listenerKeys[e]);
    this.listenerKeys.length = 0, this.map_ = t, t && ((this.target_ ? this.target_ : t.getOverlayContainerStopEvent()).appendChild(this.element), this.render !== Xs && this.listenerKeys.push(
      tr(t, vd.POSTRENDER, this.render, this)
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
const Sd = Id, wd = new RegExp(
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
), Nc = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], df = function(r) {
  const t = r.match(wd);
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
  for (let n = 0, i = Nc.length; n < i; ++n) {
    const s = t[n + 1];
    s !== void 0 && (e[Nc[n]] = s);
  }
  return e.families = e.family.split(/,\s?/), e;
}, pf = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class Rd {
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
    return this.metersPerUnit_ || pf[this.units_];
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
const _f = Rd, pa = 6378137, Ds = Math.PI * pa, Nd = [-Ds, -Ds, Ds, Ds], Ld = [-180, -85, 180, 85], Oa = pa * Math.log(Math.tan(Math.PI / 2));
class Ns extends _f {
  /**
   * @param {string} code Code.
   */
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: Nd,
      global: !0,
      worldExtent: Ld,
      getPointResolution: function(e, n) {
        return e / Math.cosh(n[1] / pa);
      }
    });
  }
}
const Lc = [
  new Ns("EPSG:3857"),
  new Ns("EPSG:102100"),
  new Ns("EPSG:102113"),
  new Ns("EPSG:900913"),
  new Ns("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Ns("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function bd(r, t, e) {
  const n = r.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = r.slice() : t = new Array(n));
  for (let i = 0; i < n; i += e) {
    t[i] = Ds * r[i] / 180;
    let s = pa * Math.log(Math.tan(Math.PI * (+r[i + 1] + 90) / 360));
    s > Oa ? s = Oa : s < -Oa && (s = -Oa), t[i + 1] = s;
  }
  return t;
}
function Pd(r, t, e) {
  const n = r.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = r.slice() : t = new Array(n));
  for (let i = 0; i < n; i += e)
    t[i] = 180 * r[i] / Ds, t[i + 1] = 360 * Math.atan(Math.exp(r[i + 1] / pa)) / Math.PI - 90;
  return t;
}
const Td = 6378137, bc = [-180, -90, 180, 90], Md = Math.PI * Td / 180;
class Yi extends _f {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: bc,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Md,
      worldExtent: bc
    });
  }
}
const Pc = [
  new Yi("CRS:84"),
  new Yi("EPSG:4326", "neu"),
  new Yi("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new Yi("urn:ogc:def:crs:OGC:2:84"),
  new Yi("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new Yi("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new Yi("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let il = {};
function Od(r) {
  return il[r] || il[r.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Ad(r, t) {
  il[r] = t;
}
let Bs = {};
function Qa(r, t, e) {
  const n = r.getCode(), i = t.getCode();
  n in Bs || (Bs[n] = {}), Bs[n][i] = e;
}
function Dd(r, t) {
  let e;
  return r in Bs && t in Bs[r] && (e = Bs[r][t]), e;
}
const fe = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
}, Fd = {
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
class kd extends Error {
  /**
   * @param {number} code Error code.
   */
  constructor(t) {
    const e = Fd[t];
    super(e), this.code = t, this.name = "AssertionError", this.message = e;
  }
}
const mf = kd;
function oe(r, t) {
  if (!r)
    throw new mf(t);
}
function Gd(r, t, e) {
  const n = Math.min.apply(null, r), i = Math.min.apply(null, t), s = Math.max.apply(null, r), o = Math.max.apply(null, t);
  return $i(n, i, s, o, e);
}
function zl(r, t, e) {
  return e ? (e[0] = r[0] - t, e[1] = r[1] - t, e[2] = r[2] + t, e[3] = r[3] + t, e) : [
    r[0] - t,
    r[1] - t,
    r[2] + t,
    r[3] + t
  ];
}
function Bd(r, t) {
  return t ? (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t) : r.slice();
}
function gs(r, t, e) {
  let n, i;
  return t < r[0] ? n = r[0] - t : r[2] < t ? n = t - r[2] : n = 0, e < r[1] ? i = r[1] - e : r[3] < e ? i = e - r[3] : i = 0, n * n + i * i;
}
function zd(r, t) {
  return Vl(r, t[0], t[1]);
}
function Fs(r, t) {
  return r[0] <= t[0] && t[2] <= r[2] && r[1] <= t[1] && t[3] <= r[3];
}
function Vl(r, t, e) {
  return r[0] <= t && t <= r[2] && r[1] <= e && e <= r[3];
}
function sl(r, t) {
  const e = r[0], n = r[1], i = r[2], s = r[3], o = t[0], a = t[1];
  let u = fe.UNKNOWN;
  return o < e ? u = u | fe.LEFT : o > i && (u = u | fe.RIGHT), a < n ? u = u | fe.BELOW : a > s && (u = u | fe.ABOVE), u === fe.UNKNOWN && (u = fe.INTERSECTING), u;
}
function Qi() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function $i(r, t, e, n, i) {
  return i ? (i[0] = r, i[1] = t, i[2] = e, i[3] = n, i) : [r, t, e, n];
}
function Iu(r) {
  return $i(1 / 0, 1 / 0, -1 / 0, -1 / 0, r);
}
function Vd(r, t) {
  const e = r[0], n = r[1];
  return $i(e, n, e, n, t);
}
function yf(r, t, e, n, i) {
  const s = Iu(i);
  return Ef(s, r, t, e, n);
}
function vf(r, t) {
  return r[0] == t[0] && r[2] == t[2] && r[1] == t[1] && r[3] == t[3];
}
function Xd(r, t) {
  return t[0] < r[0] && (r[0] = t[0]), t[2] > r[2] && (r[2] = t[2]), t[1] < r[1] && (r[1] = t[1]), t[3] > r[3] && (r[3] = t[3]), r;
}
function Yd(r, t) {
  t[0] < r[0] && (r[0] = t[0]), t[0] > r[2] && (r[2] = t[0]), t[1] < r[1] && (r[1] = t[1]), t[1] > r[3] && (r[3] = t[1]);
}
function Ef(r, t, e, n, i) {
  for (; e < n; e += i)
    Ud(r, t[e], t[e + 1]);
  return r;
}
function Ud(r, t, e) {
  r[0] = Math.min(r[0], t), r[1] = Math.min(r[1], e), r[2] = Math.max(r[2], t), r[3] = Math.max(r[3], e);
}
function Wd(r, t) {
  let e;
  return e = t(xf(r)), e || (e = t(Cf(r)), e) || (e = t(Sf(r)), e) || (e = t(If(r)), e) ? e : !1;
}
function xf(r) {
  return [r[0], r[1]];
}
function Cf(r) {
  return [r[2], r[1]];
}
function Ys(r) {
  return [(r[0] + r[2]) / 2, (r[1] + r[3]) / 2];
}
function qd(r, t, e, n, i) {
  const [s, o, a, u, l, c, h, f] = Hd(
    r,
    t,
    e,
    n
  );
  return $i(
    Math.min(s, a, l, h),
    Math.min(o, u, c, f),
    Math.max(s, a, l, h),
    Math.max(o, u, c, f),
    i
  );
}
function Hd(r, t, e, n) {
  const i = t * n[0] / 2, s = t * n[1] / 2, o = Math.cos(e), a = Math.sin(e), u = i * o, l = i * a, c = s * o, h = s * a, f = r[0], g = r[1];
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
function Vo(r) {
  return r[3] - r[1];
}
function If(r) {
  return [r[0], r[3]];
}
function Sf(r) {
  return [r[2], r[3]];
}
function Tn(r) {
  return r[2] - r[0];
}
function Qn(r, t) {
  return r[0] <= t[2] && r[2] >= t[0] && r[1] <= t[3] && r[3] >= t[1];
}
function wf(r) {
  return r[2] < r[0] || r[3] < r[1];
}
function jd(r, t) {
  return t ? (t[0] = r[0], t[1] = r[1], t[2] = r[2], t[3] = r[3], t) : r;
}
function Zd(r, t, e) {
  let n = !1;
  const i = sl(r, t), s = sl(r, e);
  if (i === fe.INTERSECTING || s === fe.INTERSECTING)
    n = !0;
  else {
    const o = r[0], a = r[1], u = r[2], l = r[3], c = t[0], h = t[1], f = e[0], g = e[1], d = (g - h) / (f - c);
    let p, _;
    s & fe.ABOVE && !(i & fe.ABOVE) && (p = f - (g - l) / d, n = p >= o && p <= u), !n && s & fe.RIGHT && !(i & fe.RIGHT) && (_ = g - (f - u) * d, n = _ >= a && _ <= l), !n && s & fe.BELOW && !(i & fe.BELOW) && (p = f - (g - a) / d, n = p >= o && p <= u), !n && s & fe.LEFT && !(i & fe.LEFT) && (_ = g - (f - o) * d, n = _ >= a && _ <= l);
  }
  return n;
}
function Kd(r, t, e, n) {
  if (wf(r))
    return Iu(e);
  let i = [];
  if (n > 1) {
    const a = r[2] - r[0], u = r[3] - r[1];
    for (let l = 0; l < n; ++l)
      i.push(
        r[0] + a * l / n,
        r[1],
        r[2],
        r[1] + u * l / n,
        r[2] - a * l / n,
        r[3],
        r[0],
        r[3] - u * l / n
      );
  } else
    i = [
      r[0],
      r[1],
      r[2],
      r[1],
      r[2],
      r[3],
      r[0],
      r[3]
    ];
  t(i, i, 2);
  const s = [], o = [];
  for (let a = 0, u = i.length; a < u; a += 2)
    s.push(i[a]), o.push(i[a + 1]);
  return Gd(s, o, e);
}
function Rf(r, t) {
  const e = t.getExtent(), n = Ys(r);
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const i = Tn(e), o = Math.floor(
      (n[0] - e[0]) / i
    ) * i;
    r[0] -= o, r[2] -= o;
  }
  return r;
}
function Jd(r, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(r[0]) || !isFinite(r[2]))
      return [[e[0], r[1], e[2], r[3]]];
    Rf(r, t);
    const n = Tn(e);
    if (Tn(r) > n)
      return [[e[0], r[1], e[2], r[3]]];
    if (r[0] < e[0])
      return [
        [r[0] + n, r[1], e[2], r[3]],
        [e[0], r[1], r[2], r[3]]
      ];
    if (r[2] > e[2])
      return [
        [r[0], r[1], e[2], r[3]],
        [e[0], r[1], r[2] - n, r[3]]
      ];
  }
  return [r];
}
function Oe(r, t, e) {
  return Math.min(Math.max(r, t), e);
}
function Qd(r, t, e, n, i, s) {
  const o = i - e, a = s - n;
  if (o !== 0 || a !== 0) {
    const u = ((r - e) * o + (t - n) * a) / (o * o + a * a);
    u > 1 ? (e = i, n = s) : u > 0 && (e += o * u, n += a * u);
  }
  return Ki(r, t, e, n);
}
function Ki(r, t, e, n) {
  const i = e - r, s = n - t;
  return i * i + s * s;
}
function $d(r) {
  return r * Math.PI / 180;
}
function ol(r, t) {
  const e = r % t;
  return e * t < 0 ? e + t : e;
}
function cn(r, t, e) {
  return r + e * (t - r);
}
function tp(r, t) {
  const e = Math.pow(10, t);
  return Math.round(r * e) / e;
}
function ep(r, t) {
  return r[0] += +t[0], r[1] += +t[1], r;
}
function $a(r, t) {
  let e = !0;
  for (let n = r.length - 1; n >= 0; --n)
    if (r[n] != t[n]) {
      e = !1;
      break;
    }
  return e;
}
function np(r, t) {
  const e = Math.cos(t), n = Math.sin(t), i = r[0] * e - r[1] * n, s = r[1] * e + r[0] * n;
  return r[0] = i, r[1] = s, r;
}
function rp(r, t) {
  if (t.canWrapX()) {
    const e = Tn(t.getExtent()), n = ip(r, t, e);
    n && (r[0] -= n * e);
  }
  return r;
}
function ip(r, t, e) {
  const n = t.getExtent();
  let i = 0;
  return t.canWrapX() && (r[0] < n[0] || r[0] > n[2]) && (e = e || Tn(n), i = Math.floor(
    (r[0] - n[0]) / e
  )), i;
}
const Nf = {
  info: 1,
  warn: 2,
  error: 3,
  none: 4
};
let sp = Nf.info;
function op(...r) {
  sp > Nf.warn || console.warn(...r);
}
let al = !0;
function Lf(r) {
  al = !(r === void 0 ? !0 : r);
}
function bf(r, t) {
  if (t !== void 0) {
    for (let e = 0, n = r.length; e < n; ++e)
      t[e] = r[e];
    t = t;
  } else
    t = r.slice();
  return t;
}
function ap(r, t) {
  if (t !== void 0 && r !== t) {
    for (let e = 0, n = r.length; e < n; ++e)
      t[e] = r[e];
    r = t;
  }
  return r;
}
function up(r) {
  Ad(r.getCode(), r), Qa(r, r, bf);
}
function lp(r) {
  r.forEach(up);
}
function Us(r) {
  return typeof r == "string" ? Od(
    /** @type {string} */
    r
  ) : (
    /** @type {Projection} */
    r || null
  );
}
function Tc(r) {
  lp(r), r.forEach(function(t) {
    r.forEach(function(e) {
      t !== e && Qa(t, e, bf);
    });
  });
}
function cp(r, t, e, n) {
  r.forEach(function(i) {
    t.forEach(function(s) {
      Qa(i, s, e), Qa(s, i, n);
    });
  });
}
function Xl(r, t) {
  return r ? typeof r == "string" ? Us(r) : (
    /** @type {Projection} */
    r
  ) : Us(t);
}
function Aa(r, t) {
  return Lf(), Pf(
    r,
    "EPSG:4326",
    t !== void 0 ? t : "EPSG:3857"
  );
}
function Mc(r, t) {
  const e = Pf(
    r,
    t !== void 0 ? t : "EPSG:3857",
    "EPSG:4326"
  ), n = e[0];
  return (n < -180 || n > 180) && (e[0] = ol(n + 180, 360) - 180), e;
}
function hp(r, t) {
  const e = r.getCode(), n = t.getCode();
  let i = Dd(e, n);
  return i || (i = ap), i;
}
function tu(r, t) {
  const e = Us(r), n = Us(t);
  return hp(e, n);
}
function Pf(r, t, e) {
  return tu(t, e)(r, void 0, r.length);
}
function fp(r, t, e, n) {
  const i = tu(t, e);
  return Kd(r, i, void 0, n);
}
function Oc(r, t) {
  return r;
}
function ii(r, t) {
  return al && !$a(r, [0, 0]) && r[0] >= -180 && r[0] <= 180 && r[1] >= -90 && r[1] <= 90 && (al = !1, op(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), r;
}
function Tf(r, t) {
  return r;
}
function To(r, t) {
  return r;
}
function gp() {
  Tc(Lc), Tc(Pc), cp(
    Pc,
    Lc,
    bd,
    Pd
  );
}
gp();
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
}, Ac = {
  LENGTH: "length"
};
class Da extends En {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(t, e, n) {
    super(t), this.element = e, this.index = n;
  }
}
let dp = class extends Oi {
  /**
   * @param {Array<T>} [array] Array.
   * @param {Options} [options] Collection options.
   */
  constructor(t, e) {
    if (super(), this.on, this.once, this.un, e = e || {}, this.unique_ = !!e.unique, this.array_ = t || [], this.unique_)
      for (let n = 0, i = this.array_.length; n < i; ++n)
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    return this.get(Ac.LENGTH);
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
      new Da(ks.ADD, e, t)
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
    for (let n = 0, i = e.length; n < i; ++n)
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
      new Da(ks.REMOVE, e, t)
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
    const i = this.array_[t];
    this.array_[t] = e, this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Da(ks.REMOVE, i, t)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new Da(ks.ADD, e, t)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(Ac.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(t, e) {
    for (let n = 0, i = this.array_.length; n < i; ++n)
      if (this.array_[n] === t && n !== e)
        throw new mf(58);
  }
};
const pp = dp;
new Array(6);
function _i() {
  return [1, 0, 0, 1, 0, 0];
}
function _p(r, t, e, n, i, s, o) {
  return r[0] = t, r[1] = e, r[2] = n, r[3] = i, r[4] = s, r[5] = o, r;
}
function mp(r, t) {
  return r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = t[3], r[4] = t[4], r[5] = t[5], r;
}
function Je(r, t) {
  const e = t[0], n = t[1];
  return t[0] = r[0] * e + r[2] * n + r[4], t[1] = r[1] * e + r[3] * n + r[5], t;
}
function yp(r, t, e) {
  return _p(r, t, 0, 0, e, 0, 0);
}
function _a(r, t, e, n, i, s, o, a) {
  const u = Math.sin(s), l = Math.cos(s);
  return r[0] = n * l, r[1] = i * u, r[2] = -n * u, r[3] = i * l, r[4] = o * n * l - a * n * u + t, r[5] = o * i * u + a * i * l + e, r;
}
function vp(r, t) {
  const e = Ep(t);
  oe(e !== 0, 32);
  const n = t[0], i = t[1], s = t[2], o = t[3], a = t[4], u = t[5];
  return r[0] = o / e, r[1] = -i / e, r[2] = -s / e, r[3] = n / e, r[4] = (s * u - o * a) / e, r[5] = -(n * u - i * a) / e, r;
}
function Ep(r) {
  return r[0] * r[3] - r[1] * r[2];
}
let Dc;
function xp(r) {
  const t = "matrix(" + r.join(", ") + ")";
  if (Bl)
    return t;
  const e = Dc || (Dc = document.createElement("div"));
  return e.style.transform = t, e.style.transform;
}
const Cp = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, Ip = /^([a-z]*)$|^hsla?\(.*\)$/i;
function Mf(r) {
  return typeof r == "string" ? r : Of(r);
}
function Sp(r) {
  const t = document.createElement("div");
  if (t.style.color = r, t.style.color !== "") {
    document.body.appendChild(t);
    const e = getComputedStyle(t).color;
    return document.body.removeChild(t), e;
  }
  return "";
}
const wp = function() {
  const t = {};
  let e = 0;
  return (
    /**
     * @param {string} s String.
     * @return {Color} Color.
     */
    function(n) {
      let i;
      if (t.hasOwnProperty(n))
        i = t[n];
      else {
        if (e >= 1024) {
          let s = 0;
          for (const o in t)
            s++ & 3 || (delete t[o], --e);
        }
        i = Rp(n), t[n] = i, ++e;
      }
      return i;
    }
  );
}();
function eu(r) {
  return Array.isArray(r) ? r : wp(r);
}
function Rp(r) {
  let t, e, n, i, s;
  if (Ip.exec(r) && (r = Sp(r)), Cp.exec(r)) {
    const o = r.length - 1;
    let a;
    o <= 4 ? a = 1 : a = 2;
    const u = o === 4 || o === 8;
    t = parseInt(r.substr(1 + 0 * a, a), 16), e = parseInt(r.substr(1 + 1 * a, a), 16), n = parseInt(r.substr(1 + 2 * a, a), 16), u ? i = parseInt(r.substr(1 + 3 * a, a), 16) : i = 255, a == 1 && (t = (t << 4) + t, e = (e << 4) + e, n = (n << 4) + n, u && (i = (i << 4) + i)), s = [t, e, n, i / 255];
  } else
    r.startsWith("rgba(") ? (s = r.slice(5, -1).split(",").map(Number), Fc(s)) : r.startsWith("rgb(") ? (s = r.slice(4, -1).split(",").map(Number), s.push(1), Fc(s)) : oe(!1, 14);
  return s;
}
function Fc(r) {
  return r[0] = Oe(r[0] + 0.5 | 0, 0, 255), r[1] = Oe(r[1] + 0.5 | 0, 0, 255), r[2] = Oe(r[2] + 0.5 | 0, 0, 255), r[3] = Oe(r[3], 0, 1), r;
}
function Of(r) {
  let t = r[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = r[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let n = r[2];
  n != (n | 0) && (n = n + 0.5 | 0);
  const i = r[3] === void 0 ? 1 : Math.round(r[3] * 100) / 100;
  return "rgba(" + t + "," + e + "," + n + "," + i + ")";
}
class Np {
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
    const i = kc(t, e, n);
    return i in this.cache_ ? this.cache_[i] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */
  set(t, e, n, i) {
    const s = kc(t, e, n);
    this.cache_[s] = i, ++this.cacheSize_;
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
function kc(r, t, e) {
  const n = e ? Mf(e) : "null";
  return t + ":" + r + ":" + n;
}
const Gc = new Np(), _t = {
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
class Lp extends Oi {
  /**
   * @param {Options} options Layer options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[_t.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, oe(typeof e[_t.OPACITY] == "number", 64), e[_t.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[_t.Z_INDEX] = t.zIndex, e[_t.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[_t.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[_t.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[_t.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
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
    return e.opacity = Oe(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return vt();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return vt();
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
      this.get(_t.EXTENT)
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
      this.get(_t.MAX_RESOLUTION)
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
      this.get(_t.MIN_RESOLUTION)
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
      this.get(_t.MIN_ZOOM)
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
      this.get(_t.MAX_ZOOM)
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
      this.get(_t.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return vt();
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
      this.get(_t.VISIBLE)
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
      this.get(_t.Z_INDEX)
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
    this.set(_t.EXTENT, t);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(t) {
    this.set(_t.MAX_RESOLUTION, t);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(t) {
    this.set(_t.MIN_RESOLUTION, t);
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
    this.set(_t.MAX_ZOOM, t);
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
    this.set(_t.MIN_ZOOM, t);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(t) {
    oe(typeof t == "number", 64), this.set(_t.OPACITY, t);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(t) {
    this.set(_t.VISIBLE, t);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(t) {
    this.set(_t.Z_INDEX, t);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const bp = Lp, ul = {
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
}, Nn = {
  ANIMATING: 0,
  INTERACTING: 1
}, Zn = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, Pp = 256;
function Bc(r, t, e) {
  return (
    /**
     * @param {import("./coordinate.js").Coordinate|undefined} center Center.
     * @param {number|undefined} resolution Resolution.
     * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
     * @param {boolean} [isMoving] True if an interaction or animation is in progress.
     * @param {Array<number>} [centerShift] Shift between map center and viewport center.
     * @return {import("./coordinate.js").Coordinate|undefined} Center.
     */
    function(n, i, s, o, a) {
      if (!n)
        return;
      if (!i && !t)
        return n;
      const u = t ? 0 : s[0] * i, l = t ? 0 : s[1] * i, c = a ? a[0] : 0, h = a ? a[1] : 0;
      let f = r[0] + u / 2 + c, g = r[2] - u / 2 + c, d = r[1] + l / 2 + h, p = r[3] - l / 2 + h;
      f > g && (f = (g + f) / 2, g = f), d > p && (d = (p + d) / 2, p = d);
      let _ = Oe(n[0], f, g), m = Oe(n[1], d, p);
      if (o && e && i) {
        const y = 30 * i;
        _ += -y * Math.log(1 + Math.max(0, f - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - g) / y), m += -y * Math.log(1 + Math.max(0, d - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - p) / y);
      }
      return [_, m];
    }
  );
}
function Tp(r) {
  return r;
}
function Yl(r, t, e, n) {
  const i = Tn(t) / e[0], s = Vo(t) / e[1];
  return n ? Math.min(r, Math.max(i, s)) : Math.min(r, Math.min(i, s));
}
function Ul(r, t, e) {
  let n = Math.min(r, t);
  const i = 50;
  return n *= Math.log(1 + i * Math.max(0, r / t - 1)) / i + 1, e && (n = Math.max(n, e), n /= Math.log(1 + i * Math.max(0, e / r - 1)) / i + 1), Oe(n, e / 2, t * 2);
}
function Mp(r, t, e, n) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(i, s, o, a) {
    if (i !== void 0) {
      const u = r[0], l = r[r.length - 1], c = e ? Yl(
        u,
        e,
        o,
        n
      ) : u;
      if (a)
        return t ? Ul(
          i,
          c,
          l
        ) : Oe(i, l, c);
      const h = Math.min(c, i), f = Math.floor(hf(r, h, s));
      return r[f] > c && f < r.length - 1 ? r[f + 1] : r[f];
    }
  };
}
function Op(r, t, e, n, i, s) {
  return n = n !== void 0 ? n : !0, e = e !== void 0 ? e : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, u, l) {
    if (o !== void 0) {
      const c = i ? Yl(
        t,
        i,
        u,
        s
      ) : t;
      if (l)
        return n ? Ul(
          o,
          c,
          e
        ) : Oe(o, e, c);
      const h = 1e-9, f = Math.ceil(
        Math.log(t / c) / Math.log(r) - h
      ), g = -a * (0.5 - h) + 0.5, d = Math.min(c, o), p = Math.floor(
        Math.log(t / d) / Math.log(r) + g
      ), _ = Math.max(f, p), m = t / Math.pow(r, _);
      return Oe(m, e, c);
    }
  };
}
function zc(r, t, e, n, i) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, u) {
    if (s !== void 0) {
      const l = n ? Yl(
        r,
        n,
        a,
        i
      ) : r;
      return !e || !u ? Oe(s, t, l) : Ul(
        s,
        l,
        t
      );
    }
  };
}
function Ap(r) {
  if (r !== void 0)
    return 0;
}
function Vc(r) {
  if (r !== void 0)
    return r;
}
function Dp(r) {
  const t = 2 * Math.PI / r;
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
function Fp(r) {
  return r = r || $d(5), /**
   * @param {number|undefined} rotation Rotation.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Rotation.
   */
  function(t, e) {
    if (e)
      return t;
    if (t !== void 0)
      return Math.abs(t) <= r ? 0 : t;
  };
}
function kp(r) {
  return Math.pow(r, 3);
}
function Gp(r) {
  return 1 - kp(1 - r);
}
function Bp(r) {
  return 3 * r * r - 2 * r * r * r;
}
function Ji(r, t, e, n, i, s) {
  s = s || [];
  let o = 0;
  for (let a = t; a < e; a += n) {
    const u = r[a], l = r[a + 1];
    s[o++] = i[0] * u + i[2] * l + i[4], s[o++] = i[1] * u + i[3] * l + i[5];
  }
  return s && s.length != o && (s.length = o), s;
}
function Af(r, t, e, n, i, s, o) {
  o = o || [];
  const a = Math.cos(i), u = Math.sin(i), l = s[0], c = s[1];
  let h = 0;
  for (let f = t; f < e; f += n) {
    const g = r[f] - l, d = r[f + 1] - c;
    o[h++] = l + g * a - d * u, o[h++] = c + g * u + d * a;
    for (let p = f + 2; p < f + n; ++p)
      o[h++] = r[p];
  }
  return o && o.length != h && (o.length = h), o;
}
function zp(r, t, e, n, i, s, o, a) {
  a = a || [];
  const u = o[0], l = o[1];
  let c = 0;
  for (let h = t; h < e; h += n) {
    const f = r[h] - u, g = r[h + 1] - l;
    a[c++] = u + i * f, a[c++] = l + s * g;
    for (let d = h + 2; d < h + n; ++d)
      a[c++] = r[d];
  }
  return a && a.length != c && (a.length = c), a;
}
function Vp(r, t, e, n, i, s, o) {
  o = o || [];
  let a = 0;
  for (let u = t; u < e; u += n) {
    o[a++] = r[u] + i, o[a++] = r[u + 1] + s;
    for (let l = u + 2; l < u + n; ++l)
      o[a++] = r[l];
  }
  return o && o.length != a && (o.length = a), o;
}
const Xc = _i();
let Xp = class extends Oi {
  constructor() {
    super(), this.extent_ = Qi(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = dd(function(t, e, n) {
      if (!n)
        return this.getSimplifiedGeometry(e);
      const i = this.clone();
      return i.applyTransform(n), i.getSimplifiedGeometry(e);
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
    return vt();
  }
  /**
   * @abstract
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, i) {
    return vt();
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
    return vt();
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
      (isNaN(e[0]) || isNaN(e[1])) && Iu(e), this.extentRevision_ = this.getRevision();
    }
    return jd(this.extent_, t);
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
    vt();
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
    vt();
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
    return vt();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return vt();
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
    vt();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(t) {
    return vt();
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
    vt();
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
    const n = Us(t), i = n.getUnits() == "tile-pixels" ? function(s, o, a) {
      const u = n.getExtent(), l = n.getWorldExtent(), c = Vo(l) / Vo(u);
      return _a(
        Xc,
        l[0],
        l[3],
        c,
        -c,
        0,
        0,
        0
      ), Ji(
        s,
        0,
        s.length,
        a,
        Xc,
        o
      ), tu(n, e)(
        s,
        o,
        a
      );
    } : tu(n, e);
    return this.applyTransform(i), this;
  }
};
const Df = Xp;
class Yp extends Df {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates = null;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return yf(
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
    return vt();
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
    this.stride = Yc(t), this.layout = t, this.flatCoordinates = e;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(t, e) {
    vt();
  }
  /**
   * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
   * @param {Array<*>} coordinates Coordinates.
   * @param {number} nesting Nesting.
   * @protected
   */
  setLayout(t, e, n) {
    let i;
    if (t)
      i = Yc(t);
    else {
      for (let s = 0; s < n; ++s) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = /** @type {Array} */
        e[0];
      }
      i = e.length, t = Up(i);
    }
    this.layout = t, this.stride = i;
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
      const i = this.getStride();
      Af(
        n,
        0,
        n.length,
        i,
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
    const i = this.getFlatCoordinates();
    if (i) {
      const s = this.getStride();
      zp(
        i,
        0,
        i.length,
        s,
        t,
        e,
        n,
        i
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
      const i = this.getStride();
      Vp(
        n,
        0,
        n.length,
        i,
        t,
        e,
        n
      ), this.changed();
    }
  }
}
function Up(r) {
  let t;
  return r == 2 ? t = "XY" : r == 3 ? t = "XYZ" : r == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  t;
}
function Yc(r) {
  let t;
  return r == "XY" ? t = 2 : r == "XYZ" || r == "XYM" ? t = 3 : r == "XYZM" && (t = 4), /** @type {number} */
  t;
}
function Wp(r, t, e) {
  const n = r.getFlatCoordinates();
  if (!n)
    return null;
  const i = r.getStride();
  return Ji(
    n,
    0,
    n.length,
    i,
    t,
    e
  );
}
const ds = Yp;
function Uc(r, t, e, n, i, s, o) {
  const a = r[t], u = r[t + 1], l = r[e] - a, c = r[e + 1] - u;
  let h;
  if (l === 0 && c === 0)
    h = t;
  else {
    const f = ((i - a) * l + (s - u) * c) / (l * l + c * c);
    if (f > 1)
      h = e;
    else if (f > 0) {
      for (let g = 0; g < n; ++g)
        o[g] = cn(
          r[t + g],
          r[e + g],
          f
        );
      o.length = n;
      return;
    } else
      h = t;
  }
  for (let f = 0; f < n; ++f)
    o[f] = r[h + f];
  o.length = n;
}
function Wl(r, t, e, n, i) {
  let s = r[t], o = r[t + 1];
  for (t += n; t < e; t += n) {
    const a = r[t], u = r[t + 1], l = Ki(s, o, a, u);
    l > i && (i = l), s = a, o = u;
  }
  return i;
}
function ql(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    i = Wl(r, t, a, n, i), t = a;
  }
  return i;
}
function qp(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    i = ql(r, t, a, n, i), t = a[a.length - 1];
  }
  return i;
}
function Hl(r, t, e, n, i, s, o, a, u, l, c) {
  if (t == e)
    return l;
  let h, f;
  if (i === 0) {
    if (f = Ki(
      o,
      a,
      r[t],
      r[t + 1]
    ), f < l) {
      for (h = 0; h < n; ++h)
        u[h] = r[t + h];
      return u.length = n, f;
    }
    return l;
  }
  c = c || [NaN, NaN];
  let g = t + n;
  for (; g < e; )
    if (Uc(
      r,
      g - n,
      g,
      n,
      o,
      a,
      c
    ), f = Ki(o, a, c[0], c[1]), f < l) {
      for (l = f, h = 0; h < n; ++h)
        u[h] = c[h];
      u.length = n, g += n;
    } else
      g += n * Math.max(
        (Math.sqrt(f) - Math.sqrt(l)) / i | 0,
        1
      );
  if (s && (Uc(
    r,
    e - n,
    t,
    n,
    o,
    a,
    c
  ), f = Ki(o, a, c[0], c[1]), f < l)) {
    for (l = f, h = 0; h < n; ++h)
      u[h] = c[h];
    u.length = n;
  }
  return l;
}
function jl(r, t, e, n, i, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = Hl(
      r,
      t,
      g,
      n,
      i,
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
function Hp(r, t, e, n, i, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = jl(
      r,
      t,
      g,
      n,
      i,
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
function jp(r, t, e, n) {
  for (let i = 0, s = e.length; i < s; ++i)
    r[t++] = e[i];
  return t;
}
function Su(r, t, e, n) {
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    for (let a = 0; a < n; ++a)
      r[t++] = o[a];
  }
  return t;
}
function Zl(r, t, e, n, i) {
  i = i || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = Su(
      r,
      t,
      e[o],
      n
    );
    i[s++] = u, t = u;
  }
  return i.length = s, i;
}
function Zp(r, t, e, n, i) {
  i = i || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = Zl(
      r,
      t,
      e[o],
      n,
      i[s]
    );
    u.length === 0 && (u[0] = t), i[s++] = u, t = u[u.length - 1];
  }
  return i.length = s, i;
}
function Kl(r, t, e, n, i, s, o) {
  const a = (e - t) / n;
  if (a < 3) {
    for (; t < e; t += n)
      s[o++] = r[t], s[o++] = r[t + 1];
    return o;
  }
  const u = new Array(a);
  u[0] = 1, u[a - 1] = 1;
  const l = [t, e - n];
  let c = 0;
  for (; l.length > 0; ) {
    const h = l.pop(), f = l.pop();
    let g = 0;
    const d = r[f], p = r[f + 1], _ = r[h], m = r[h + 1];
    for (let y = f + n; y < h; y += n) {
      const v = r[y], I = r[y + 1], x = Qd(v, I, d, p, _, m);
      x > g && (c = y, g = x);
    }
    g > i && (u[(c - t) / n] = 1, f + n < c && l.push(f, c), c + n < h && l.push(c, h));
  }
  for (let h = 0; h < a; ++h)
    u[h] && (s[o++] = r[t + h * n], s[o++] = r[t + h * n + 1]);
  return o;
}
function Kp(r, t, e, n, i, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = Kl(
      r,
      t,
      c,
      n,
      i,
      s,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function Ui(r, t) {
  return t * Math.round(r / t);
}
function Jp(r, t, e, n, i, s, o) {
  if (t == e)
    return o;
  let a = Ui(r[t], i), u = Ui(r[t + 1], i);
  t += n, s[o++] = a, s[o++] = u;
  let l, c;
  do
    if (l = Ui(r[t], i), c = Ui(r[t + 1], i), t += n, t == e)
      return s[o++] = l, s[o++] = c, o;
  while (l == a && c == u);
  for (; t < e; ) {
    const h = Ui(r[t], i), f = Ui(r[t + 1], i);
    if (t += n, h == l && f == c)
      continue;
    const g = l - a, d = c - u, p = h - a, _ = f - u;
    if (g * _ == d * p && (g < 0 && p < g || g == p || g > 0 && p > g) && (d < 0 && _ < d || d == _ || d > 0 && _ > d)) {
      l = h, c = f;
      continue;
    }
    s[o++] = l, s[o++] = c, a = l, u = c, l = h, c = f;
  }
  return s[o++] = l, s[o++] = c, o;
}
function Ff(r, t, e, n, i, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = Jp(
      r,
      t,
      c,
      n,
      i,
      s,
      o
    ), a.push(o), t = c;
  }
  return o;
}
function Qp(r, t, e, n, i, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u], h = [];
    o = Ff(
      r,
      t,
      c,
      n,
      i,
      s,
      o,
      h
    ), a.push(h), t = c[c.length - 1];
  }
  return o;
}
function fi(r, t, e, n, i) {
  i = i !== void 0 ? i : [];
  let s = 0;
  for (let o = t; o < e; o += n)
    i[s++] = r.slice(o, o + n);
  return i.length = s, i;
}
function Xo(r, t, e, n, i) {
  i = i !== void 0 ? i : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    i[s++] = fi(
      r,
      t,
      u,
      n,
      i[s]
    ), t = u;
  }
  return i.length = s, i;
}
function ll(r, t, e, n, i) {
  i = i !== void 0 ? i : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    i[s++] = u.length === 1 && u[0] === t ? [] : Xo(
      r,
      t,
      u,
      n,
      i[s]
    ), t = u[u.length - 1];
  }
  return i.length = s, i;
}
function kf(r, t, e, n) {
  let i = 0, s = r[e - n], o = r[e - n + 1];
  for (; t < e; t += n) {
    const a = r[t], u = r[t + 1];
    i += o * a - s * u, s = a, o = u;
  }
  return i / 2;
}
function Gf(r, t, e, n) {
  let i = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    i += kf(r, t, a, n), t = a;
  }
  return i;
}
function $p(r, t, e, n) {
  let i = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    i += Gf(r, t, a, n), t = a[a.length - 1];
  }
  return i;
}
let t_ = class cl extends ds {
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
    return new cl(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, i) {
    return i < gs(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Wl(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Hl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      i
    ));
  }
  /**
   * Return the area of the linear ring on projected plane.
   * @return {number} Area (on projected plane).
   * @api
   */
  getArea() {
    return kf(
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
    return fi(
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
    return e.length = Kl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new cl(e, "XY");
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Su(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const Wc = t_;
let e_ = class Bf extends ds {
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
    const t = new Bf(this.flatCoordinates.slice(), this.layout);
    return t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, i) {
    const s = this.flatCoordinates, o = Ki(
      t,
      e,
      s[0],
      s[1]
    );
    if (o < i) {
      const a = this.stride;
      for (let u = 0; u < a; ++u)
        n[u] = s[u];
      return n.length = a, o;
    }
    return i;
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
    return Vd(this.flatCoordinates, t);
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
    return Vl(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = jp(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const zs = e_;
function n_(r, t, e, n, i) {
  return !Wd(
    i,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !Wi(
        r,
        t,
        e,
        n,
        o[0],
        o[1]
      );
    }
  );
}
function Wi(r, t, e, n, i, s) {
  let o = 0, a = r[e - n], u = r[e - n + 1];
  for (; t < e; t += n) {
    const l = r[t], c = r[t + 1];
    u <= s ? c > s && (l - a) * (s - u) - (i - a) * (c - u) > 0 && o++ : c <= s && (l - a) * (s - u) - (i - a) * (c - u) < 0 && o--, a = l, u = c;
  }
  return o !== 0;
}
function Jl(r, t, e, n, i, s) {
  if (e.length === 0 || !Wi(r, t, e[0], n, i, s))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (Wi(r, e[o - 1], e[o], n, i, s))
      return !1;
  return !0;
}
function r_(r, t, e, n, i, s) {
  if (e.length === 0)
    return !1;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    if (Jl(r, t, u, n, i, s))
      return !0;
    t = u[u.length - 1];
  }
  return !1;
}
function zf(r, t, e, n, i, s, o) {
  let a, u, l, c, h, f, g;
  const d = i[s + 1], p = [];
  for (let y = 0, v = e.length; y < v; ++y) {
    const I = e[y];
    for (c = r[I - n], f = r[I - n + 1], a = t; a < I; a += n)
      h = r[a], g = r[a + 1], (d <= f && g <= d || f <= d && d <= g) && (l = (d - f) / (g - f) * (h - c) + c, p.push(l)), c = h, f = g;
  }
  let _ = NaN, m = -1 / 0;
  for (p.sort(Bo), c = p[0], a = 1, u = p.length; a < u; ++a) {
    h = p[a];
    const y = Math.abs(h - c);
    y > m && (l = (c + h) / 2, Jl(r, t, e, n, l, d) && (_ = l, m = y)), c = h;
  }
  return isNaN(_) && (_ = i[s]), o ? (o.push(_, d, m), o) : [_, d, m];
}
function i_(r, t, e, n, i) {
  let s = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = zf(
      r,
      t,
      u,
      n,
      i,
      2 * o,
      s
    ), t = u[u.length - 1];
  }
  return s;
}
function Vf(r, t, e, n, i) {
  let s;
  for (t += n; t < e; t += n)
    if (s = i(
      r.slice(t - n, t),
      r.slice(t, t + n)
    ), s)
      return s;
  return !1;
}
function wu(r, t, e, n, i) {
  const s = Ef(
    Qi(),
    r,
    t,
    e,
    n
  );
  return Qn(i, s) ? Fs(i, s) || s[0] >= i[0] && s[2] <= i[2] || s[1] >= i[1] && s[3] <= i[3] ? !0 : Vf(
    r,
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
      return Zd(i, o, a);
    }
  ) : !1;
}
function s_(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s) {
    if (wu(r, t, e[s], n, i))
      return !0;
    t = e[s];
  }
  return !1;
}
function o_(r, t, e, n, i) {
  return !!(wu(r, t, e, n, i) || Wi(
    r,
    t,
    e,
    n,
    i[0],
    i[1]
  ) || Wi(
    r,
    t,
    e,
    n,
    i[0],
    i[3]
  ) || Wi(
    r,
    t,
    e,
    n,
    i[2],
    i[1]
  ) || Wi(
    r,
    t,
    e,
    n,
    i[2],
    i[3]
  ));
}
function Xf(r, t, e, n, i) {
  if (!o_(r, t, e[0], n, i))
    return !1;
  if (e.length === 1)
    return !0;
  for (let s = 1, o = e.length; s < o; ++s)
    if (n_(
      r,
      e[s - 1],
      e[s],
      n,
      i
    ) && !wu(
      r,
      e[s - 1],
      e[s],
      n,
      i
    ))
      return !1;
  return !0;
}
function a_(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (Xf(r, t, a, n, i))
      return !0;
    t = a[a.length - 1];
  }
  return !1;
}
function u_(r, t, e, n) {
  for (; t < e - n; ) {
    for (let i = 0; i < n; ++i) {
      const s = r[t + i];
      r[t + i] = r[e - n + i], r[e - n + i] = s;
    }
    t += n, e -= n;
  }
}
function Yf(r, t, e, n) {
  let i = 0, s = r[e - n], o = r[e - n + 1];
  for (; t < e; t += n) {
    const a = r[t], u = r[t + 1];
    i += (a - s) * (u + o), s = a, o = u;
  }
  return i === 0 ? void 0 : i > 0;
}
function Uf(r, t, e, n, i) {
  i = i !== void 0 ? i : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Yf(
      r,
      t,
      a,
      n
    );
    if (s === 0) {
      if (i && u || !i && !u)
        return !1;
    } else if (i && !u || !i && u)
      return !1;
    t = a;
  }
  return !0;
}
function l_(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (!Uf(r, t, a, n, i))
      return !1;
    a.length && (t = a[a.length - 1]);
  }
  return !0;
}
function hl(r, t, e, n, i) {
  i = i !== void 0 ? i : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Yf(
      r,
      t,
      a,
      n
    );
    (s === 0 ? i && u || !i && !u : i && !u || !i && u) && u_(r, t, a, n), t = a;
  }
  return t;
}
function qc(r, t, e, n, i) {
  for (let s = 0, o = e.length; s < o; ++s)
    t = hl(
      r,
      t,
      e[s],
      n,
      i
    );
  return t;
}
let Wf = class fl extends ds {
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
    this.flatCoordinates ? zr(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const t = new fl(
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
  closestPointXY(t, e, n, i) {
    return i < gs(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      ql(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), jl(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      i
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    return Jl(
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
    return Gf(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), hl(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Xo(e, 0, this.ends_, this.stride);
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
      this.flatInteriorPoint_ = zf(
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
    return t < 0 || this.ends_.length <= t ? null : new Wc(
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
    const t = this.layout, e = this.flatCoordinates, n = this.ends_, i = [];
    let s = 0;
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o], l = new Wc(
        e.slice(s, u),
        t
      );
      i.push(l), s = u;
    }
    return i;
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Uf(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = hl(
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
    return e.length = Ff(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new fl(e, "XY", n);
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
    return Xf(
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
    const n = Zl(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const nu = Wf;
function Hc(r) {
  const t = r[0], e = r[1], n = r[2], i = r[3], s = [
    t,
    e,
    t,
    i,
    n,
    i,
    n,
    e,
    t,
    e
  ];
  return new Wf(s, "XY", [s.length]);
}
const qu = 0;
class c_ extends Oi {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Xl(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && Lf(), t.center && (t.center = ii(t.center, this.projection_)), t.extent && (t.extent = To(t.extent, this.projection_)), this.applyOptions_(t);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in Zn)
      delete e[a];
    this.setProperties(e, !0);
    const n = f_(t);
    this.maxResolution_ = n.maxResolution, this.minResolution_ = n.minResolution, this.zoomFactor_ = n.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = n.minZoom;
    const i = h_(t), s = n.constraint, o = g_(t);
    this.constraints_ = {
      center: i,
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
      const i = t || [0, 0, 0, 0];
      e = e || [0, 0, 0, 0];
      const s = this.getResolution(), o = s / 2 * (i[3] - e[3] + e[1] - i[1]), a = s / 2 * (i[0] - e[0] + e[2] - i[2]);
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
      let i = arguments[n];
      i.center && (i = Object.assign({}, i), i.center = ii(
        i.center,
        this.getProjection()
      )), i.anchor && (i = Object.assign({}, i), i.anchor = ii(
        i.anchor,
        this.getProjection()
      )), e[n] = i;
    }
    this.animateInternal.apply(this, e);
  }
  /**
   * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
   */
  animateInternal(t) {
    let e = arguments.length, n;
    e > 1 && typeof arguments[e - 1] == "function" && (n = arguments[e - 1], --e);
    let i = 0;
    for (; i < e && !this.isDef(); ++i) {
      const c = arguments[i];
      c.center && this.setCenterInternal(c.center), c.zoom !== void 0 ? this.setZoom(c.zoom) : c.resolution && this.setResolution(c.resolution), c.rotation !== void 0 && this.setRotation(c.rotation);
    }
    if (i === e) {
      n && Fa(n, !0);
      return;
    }
    let s = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, u = this.targetRotation_;
    const l = [];
    for (; i < e; ++i) {
      const c = (
        /** @type {AnimationOptions} */
        arguments[i]
      ), h = {
        start: s,
        complete: !1,
        anchor: c.anchor,
        duration: c.duration !== void 0 ? c.duration : 1e3,
        easing: c.easing || Bp,
        callback: n
      };
      if (c.center && (h.sourceCenter = o, h.targetCenter = c.center.slice(), o = h.targetCenter), c.zoom !== void 0 ? (h.sourceResolution = a, h.targetResolution = this.getResolutionForZoom(c.zoom), a = h.targetResolution) : c.resolution && (h.sourceResolution = a, h.targetResolution = c.resolution, a = h.targetResolution), c.rotation !== void 0) {
        h.sourceRotation = u;
        const f = ol(c.rotation - u + Math.PI, 2 * Math.PI) - Math.PI;
        h.targetRotation = u + f, u = h.targetRotation;
      }
      d_(h) ? h.complete = !0 : s += h.duration, l.push(h);
    }
    this.animations_.push(l), this.setHint(Nn.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[Nn.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[Nn.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(Nn.ANIMATING, -this.hints_[Nn.ANIMATING]);
    let t;
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const i = this.animations_[e];
      if (i[0].callback && Fa(i[0].callback, !1), !t)
        for (let s = 0, o = i.length; s < o; ++s) {
          const a = i[s];
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
      const i = this.animations_[n];
      let s = !0;
      for (let o = 0, a = i.length; o < a; ++o) {
        const u = i[o];
        if (u.complete)
          continue;
        const l = t - u.start;
        let c = u.duration > 0 ? l / u.duration : 1;
        c >= 1 ? (u.complete = !0, c = 1) : s = !1;
        const h = u.easing(c);
        if (u.sourceCenter) {
          const f = u.sourceCenter[0], g = u.sourceCenter[1], d = u.targetCenter[0], p = u.targetCenter[1];
          this.nextCenter_ = u.targetCenter;
          const _ = f + h * (d - f), m = g + h * (p - g);
          this.targetCenter_ = [_, m];
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
          const f = h === 1 ? ol(u.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : u.sourceRotation + h * (u.targetRotation - u.sourceRotation);
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
        this.animations_[n] = null, this.setHint(Nn.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = i[0].callback;
        o && Fa(o, !0);
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
    const i = this.getCenterInternal();
    return i !== void 0 && (n = [i[0] - e[0], i[1] - e[1]], np(n, t - this.getRotation()), ep(n, e)), n;
  }
  /**
   * @param {number} resolution Target resolution.
   * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
   * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
   */
  calculateCenterZoom(t, e) {
    let n;
    const i = this.getCenterInternal(), s = this.getResolution();
    if (i !== void 0 && s !== void 0) {
      const o = e[0] - t * (e[0] - i[0]) / s, a = e[1] - t * (e[1] - i[1]) / s;
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
      const n = e[0], i = e[1];
      return [
        Math.abs(n * Math.cos(t)) + Math.abs(i * Math.sin(t)),
        Math.abs(n * Math.sin(t)) + Math.abs(i * Math.cos(t))
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
    return t && Oc(t, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Zn.CENTER)
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
    return Tf(e, this.getProjection());
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
    const i = (
      /** @type {!number} */
      this.getRotation()
    );
    return oe(i !== void 0, 3), qd(e, n, i, t);
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
      this.get(Zn.RESOLUTION)
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
    const n = Tn(t) / e[0], i = Vo(t) / e[1];
    return Math.max(n, i);
  }
  /**
   * Return a function that returns a value between 0 and 1 for a
   * resolution. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Resolution for value function.
   */
  getResolutionForValueFunction(t) {
    t = t || 2;
    const e = this.getConstrainedResolution(this.maxResolution_), n = this.minResolution_, i = Math.log(e / n) / Math.log(t);
    return (
      /**
       * @param {number} value Value.
       * @return {number} Resolution.
       */
      function(s) {
        return e / Math.pow(t, s * i);
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
      this.get(Zn.ROTATION)
    );
  }
  /**
   * Return a function that returns a resolution for a value between
   * 0 and 1. Exponential scaling is assumed.
   * @param {number} [power] Power.
   * @return {function(number): number} Value for resolution function.
   */
  getValueForResolutionFunction(t) {
    const e = Math.log(t || 2), n = this.getConstrainedResolution(this.maxResolution_), i = this.minResolution_, s = Math.log(n / i) / e;
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
    let i = (
      /** @type {import("./coordinate.js").Coordinate} */
      this.getCenterInternal()
    );
    const s = this.padding_;
    if (s) {
      const o = this.getViewportSizeMinusPadding_();
      i = Hu(
        i,
        this.getViewportSize_(),
        [o[0] / 2 + s[3], o[1] / 2 + s[0]],
        e,
        n
      );
    }
    return {
      center: i.slice(0),
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
    let e = this.minZoom_ || 0, n, i;
    if (this.resolutions_) {
      const s = hf(this.resolutions_, t, 1);
      e = s, n = this.resolutions_[s], s == this.resolutions_.length - 1 ? i = 2 : i = n / this.resolutions_[s + 1];
    } else
      n = this.maxResolution_, i = this.zoomFactor_;
    return e + Math.log(n / t) / Math.log(i);
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
      const e = Oe(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), n = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(n, Oe(t - e, 0, 1));
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
      oe(!wf(t), 25);
      const i = To(t, this.getProjection());
      n = Hc(i);
    } else if (t.getType() === "Circle") {
      const i = To(
        t.getExtent(),
        this.getProjection()
      );
      n = Hc(i), n.rotate(this.getRotation(), Ys(i));
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
    const e = this.getRotation(), n = Math.cos(e), i = Math.sin(-e), s = t.getFlatCoordinates(), o = t.getStride();
    let a = 1 / 0, u = 1 / 0, l = -1 / 0, c = -1 / 0;
    for (let h = 0, f = s.length; h < f; h += o) {
      const g = s[h] * n - s[h + 1] * i, d = s[h] * i + s[h + 1] * n;
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
    const i = e.padding !== void 0 ? e.padding : [0, 0, 0, 0], s = e.nearest !== void 0 ? e.nearest : !1;
    let o;
    e.minResolution !== void 0 ? o = e.minResolution : e.maxZoom !== void 0 ? o = this.getResolutionForZoom(e.maxZoom) : o = 0;
    const a = this.rotatedExtentForGeometry(t);
    let u = this.getResolutionForExtentInternal(a, [
      n[0] - i[1] - i[3],
      n[1] - i[0] - i[2]
    ]);
    u = isNaN(u) ? o : Math.max(u, o), u = this.getConstrainedResolution(u, s ? 0 : 1);
    const l = this.getRotation(), c = Math.sin(l), h = Math.cos(l), f = Ys(a);
    f[0] += (i[1] - i[3]) / 2 * u, f[1] += (i[0] - i[2]) / 2 * u;
    const g = f[0] * h - f[1] * c, d = f[1] * h + f[0] * c, p = this.getConstrainedCenter([g, d], u), _ = e.callback ? e.callback : Xs;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: u,
        center: p,
        duration: e.duration,
        easing: e.easing
      },
      _
    ) : (this.targetResolution_ = u, this.targetCenter_ = p, this.applyTargetState_(!1, !0), Fa(_, !0));
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
      ii(t, this.getProjection()),
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
      Hu(
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
  calculateCenterShift(t, e, n, i) {
    let s;
    const o = this.padding_;
    if (o && t) {
      const a = this.getViewportSizeMinusPadding_(-n), u = Hu(
        t,
        i,
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
    const e = Oc(this.targetCenter_, this.getProjection());
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
    e = e && ii(e, this.getProjection()), this.adjustResolutionInternal(t, e);
  }
  /**
   * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
   * constraint will apply.
   * @param {number} ratio The ratio to apply on the view resolution.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  adjustResolutionInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(), i = this.getViewportSize_(this.getRotation()), s = this.constraints_.resolution(
      this.targetResolution_ * t,
      0,
      i,
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
    e && (e = ii(e, this.getProjection())), this.adjustRotationInternal(t, e);
  }
  /**
   * @param {number} delta Relative value to add to the zoom rotation, in radians.
   * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
   */
  adjustRotationInternal(t, e) {
    const n = this.getAnimating() || this.getInteracting(), i = this.constraints_.rotation(
      this.targetRotation_ + t,
      n
    );
    e && (this.targetCenter_ = this.calculateCenterRotate(i, e)), this.targetRotation_ += t, this.applyTargetState_();
  }
  /**
   * Set the center of the current view. Any extent constraint will apply.
   * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
   * @observable
   * @api
   */
  setCenter(t) {
    this.setCenterInternal(
      t && ii(t, this.getProjection())
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
    const n = this.getAnimating() || this.getInteracting() || e, i = this.constraints_.rotation(
      this.targetRotation_,
      n
    ), s = this.getViewportSize_(i), o = this.constraints_.resolution(
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
        i,
        s
      )
    );
    this.get(Zn.ROTATION) !== i && this.set(Zn.ROTATION, i), this.get(Zn.RESOLUTION) !== o && (this.set(Zn.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Zn.CENTER) || !$a(this.get(Zn.CENTER), a)) && this.set(Zn.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
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
    const i = e || 0, s = this.constraints_.rotation(this.targetRotation_), o = this.getViewportSize_(s), a = this.constraints_.resolution(
      this.targetResolution_,
      i,
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
    n = n || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !$a(this.getCenterInternal(), u)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: u,
      resolution: a,
      duration: t,
      easing: Gp,
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
    this.resolveConstraints(0), this.setHint(Nn.INTERACTING, 1);
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
    n = n && ii(n, this.getProjection()), this.endInteractionInternal(t, e, n);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(Nn.INTERACTING, -1), this.resolveConstraints(t, e, n));
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
function Fa(r, t) {
  setTimeout(function() {
    r(t);
  }, 0);
}
function h_(r) {
  if (r.extent !== void 0) {
    const e = r.smoothExtentConstraint !== void 0 ? r.smoothExtentConstraint : !0;
    return Bc(r.extent, r.constrainOnlyCenter, e);
  }
  const t = Xl(r.projection, "EPSG:3857");
  if (r.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, Bc(e, !1, !1);
  }
  return Tp;
}
function f_(r) {
  let t, e, n, o = r.minZoom !== void 0 ? r.minZoom : qu, a = r.maxZoom !== void 0 ? r.maxZoom : 28;
  const u = r.zoomFactor !== void 0 ? r.zoomFactor : 2, l = r.multiWorld !== void 0 ? r.multiWorld : !1, c = r.smoothResolutionConstraint !== void 0 ? r.smoothResolutionConstraint : !0, h = r.showFullExtent !== void 0 ? r.showFullExtent : !1, f = Xl(r.projection, "EPSG:3857"), g = f.getExtent();
  let d = r.constrainOnlyCenter, p = r.extent;
  if (!l && !p && f.isGlobal() && (d = !1, p = g), r.resolutions !== void 0) {
    const _ = r.resolutions;
    e = _[o], n = _[a] !== void 0 ? _[a] : _[_.length - 1], r.constrainResolution ? t = Mp(
      _,
      c,
      !d && p,
      h
    ) : t = zc(
      e,
      n,
      c,
      !d && p,
      h
    );
  } else {
    const m = (g ? Math.max(Tn(g), Vo(g)) : (
      // use an extent that can fit the whole world if need be
      360 * pf.degrees / f.getMetersPerUnit()
    )) / Pp / Math.pow(2, qu), y = m / Math.pow(2, 28 - qu);
    e = r.maxResolution, e !== void 0 ? o = 0 : e = m / Math.pow(u, o), n = r.minResolution, n === void 0 && (r.maxZoom !== void 0 ? r.maxResolution !== void 0 ? n = e / Math.pow(u, a) : n = m / Math.pow(u, a) : n = y), a = o + Math.floor(
      Math.log(e / n) / Math.log(u)
    ), n = e / Math.pow(u, a - o), r.constrainResolution ? t = Op(
      u,
      e,
      n,
      c,
      !d && p,
      h
    ) : t = zc(
      e,
      n,
      c,
      !d && p,
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
function g_(r) {
  if (r.enableRotation !== void 0 ? r.enableRotation : !0) {
    const e = r.constrainRotation;
    return e === void 0 || e === !0 ? Fp() : e === !1 ? Vc : typeof e == "number" ? Dp(e) : Vc;
  }
  return Ap;
}
function d_(r) {
  return !(r.sourceCenter && r.targetCenter && !$a(r.sourceCenter, r.targetCenter) || r.sourceResolution !== r.targetResolution || r.sourceRotation !== r.targetRotation);
}
function Hu(r, t, e, n, i) {
  const s = Math.cos(-i);
  let o = Math.sin(-i), a = r[0] * s - r[1] * o, u = r[1] * s + r[0] * o;
  a += (t[0] / 2 - e[0]) * n, u += (e[1] - t[1] / 2) * n, o = -o;
  const l = a * s - u * o, c = u * s + a * o;
  return [l, c];
}
const jc = c_;
class p_ extends bp {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      _t.SOURCE,
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
      this.get(_t.SOURCE) || null
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
    this.sourceChangeKey_ && (er(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = tr(
      t,
      An.CHANGE,
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
    !t && n && (t = n.getView()), t instanceof jc ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray());
    let i;
    e.layerStatesArray ? i = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : i = this.getLayerState();
    const s = this.getExtent();
    return __(i, e.viewState) && (!s || Qn(s, e.extent));
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
    const i = t instanceof jc ? t.getViewStateAndExtent() : t;
    let s = e(i);
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
    t || this.unrender(), this.set(_t.MAP, t);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(_t.MAP);
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
    this.mapPrecomposeKey_ && (er(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (er(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = tr(
      t,
      ul.PRECOMPOSE,
      function(e) {
        const i = /** @type {import("../render/Event.js").default} */ e.frameState.layerStatesArray, s = this.getLayerState(!1);
        oe(
          !i.some(function(o) {
            return o.layer === s.layer;
          }),
          67
        ), i.push(s);
      },
      this
    ), this.mapRenderKey_ = tr(this, An.CHANGE, t.render, t), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(t) {
    this.set(_t.SOURCE, t);
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
function __(r, t) {
  if (!r.visible)
    return !1;
  const e = t.resolution;
  if (e < r.minResolution || e >= r.maxResolution)
    return !1;
  const n = t.zoom;
  return n > r.minZoom && n <= r.maxZoom;
}
const m_ = p_;
class y_ extends En {
  /**
   * @param {import("./EventType.js").default} type Type.
   * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
   *     CSS pixels to rendered pixels.
   * @param {import("../Map.js").FrameState} [frameState] Frame state.
   * @param {?(CanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
   */
  constructor(t, e, n, i) {
    super(t), this.inversePixelTransform = e, this.frameState = n, this.context = i;
  }
}
const v_ = y_, qf = "10px sans-serif", Vr = "#000", ru = "round", Yo = [], Uo = 0, Ws = "round", Wo = 10, qo = "#000", Ho = "center", iu = "middle", qi = [0, 0, 0, 0], jo = 1, si = new Oi();
let Ts = null, gl;
const dl = {}, E_ = function() {
  const t = "32px ", e = ["monospace", "serif"], n = e.length, i = "wmytzilWMYTZIL@#/&?$%10";
  let s, o;
  function a(l, c, h) {
    let f = !0;
    for (let g = 0; g < n; ++g) {
      const d = e[g];
      if (o = su(
        l + " " + c + " " + t + d,
        i
      ), h != d) {
        const p = su(
          l + " " + c + " " + t + h + "," + d,
          i
        );
        f = f && p != o;
      }
    }
    return !!f;
  }
  function u() {
    let l = !0;
    const c = si.getKeys();
    for (let h = 0, f = c.length; h < f; ++h) {
      const g = c[h];
      si.get(g) < 100 && (a.apply(this, g.split(`
`)) ? (Gl(dl), Ts = null, gl = void 0, si.set(g, 100)) : (si.set(g, si.get(g) + 1, !0), l = !1));
    }
    l && (clearInterval(s), s = void 0);
  }
  return function(l) {
    const c = df(l);
    if (!c)
      return;
    const h = c.families;
    for (let f = 0, g = h.length; f < g; ++f) {
      const d = h[f], p = c.style + `
` + c.weight + `
` + d;
      si.get(p) === void 0 && (si.set(p, 100, !0), a(c.style, c.weight, d) || (si.set(p, 0, !0), s === void 0 && (s = setInterval(u, 32))));
    }
  };
}(), x_ = function() {
  let r;
  return function(t) {
    let e = dl[t];
    if (e == null) {
      if (Bl) {
        const n = df(t), i = Hf(t, "Žg");
        e = (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) * (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent);
      } else
        r || (r = document.createElement("div"), r.innerHTML = "M", r.style.minHeight = "0", r.style.maxHeight = "none", r.style.height = "auto", r.style.padding = "0", r.style.border = "none", r.style.position = "absolute", r.style.display = "block", r.style.left = "-99999px"), r.style.font = t, document.body.appendChild(r), e = r.offsetHeight, document.body.removeChild(r);
      dl[t] = e;
    }
    return e;
  };
}();
function Hf(r, t) {
  return Ts || (Ts = ir(1, 1)), r != gl && (Ts.font = r, gl = Ts.font), Ts.measureText(t);
}
function su(r, t) {
  return Hf(r, t).width;
}
function Zc(r, t, e) {
  if (t in e)
    return e[t];
  const n = t.split(`
`).reduce((i, s) => Math.max(i, su(r, s)), 0);
  return e[t] = n, n;
}
function C_(r, t) {
  const e = [], n = [], i = [];
  let s = 0, o = 0, a = 0, u = 0;
  for (let l = 0, c = t.length; l <= c; l += 2) {
    const h = t[l];
    if (h === `
` || l === c) {
      s = Math.max(s, o), i.push(o), o = 0, a += u;
      continue;
    }
    const f = t[l + 1] || r.font, g = su(f, h);
    e.push(g), o += g;
    const d = x_(f);
    n.push(d), u = Math.max(u, d);
  }
  return { width: s, height: a, widths: e, heights: n, lineWidths: i };
}
function I_(r, t, e, n, i, s, o, a, u, l, c) {
  r.save(), e !== 1 && (r.globalAlpha *= e), t && r.setTransform.apply(r, t), /** @type {*} */
  n.contextInstructions ? (r.translate(u, l), r.scale(c[0], c[1]), S_(
    /** @type {Label} */
    n,
    r
  )) : c[0] < 0 || c[1] < 0 ? (r.translate(u, l), r.scale(c[0], c[1]), r.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    n,
    i,
    s,
    o,
    a,
    0,
    0,
    o,
    a
  )) : r.drawImage(
    /** @type {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} */
    n,
    i,
    s,
    o,
    a,
    u,
    l,
    o * c[0],
    a * c[1]
  ), r.restore();
}
function S_(r, t) {
  const e = r.contextInstructions;
  for (let n = 0, i = e.length; n < i; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(
      t,
      e[n + 1]
    ) : t[e[n]] = e[n + 1];
}
function ou(r, t) {
  return Array.isArray(r) ? r : (t === void 0 ? t = [r, r] : (t[0] = r, t[1] = r), t);
}
function Yt() {
}
function w_(r, t) {
  for (const e in t)
    r[e] = t[e];
  return (
    /** @type {T & S} */
    r
  );
}
function jf(r) {
  return r();
}
function Kc() {
  return /* @__PURE__ */ Object.create(null);
}
function ei(r) {
  r.forEach(jf);
}
function Zf(r) {
  return typeof r == "function";
}
function ps(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
let ka;
function en(r, t) {
  return r === t ? !0 : (ka || (ka = document.createElement("a")), ka.href = t, r === ka.href);
}
function R_(r) {
  return Object.keys(r).length === 0;
}
function N_(r, t, e, n) {
  if (r) {
    const i = Kf(r, t, e, n);
    return r[0](i);
  }
}
function Kf(r, t, e, n) {
  return r[1] && n ? w_(e.ctx.slice(), r[1](n(t))) : e.ctx;
}
function L_(r, t, e, n) {
  if (r[2] && n) {
    const i = r[2](n(e));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < o; a += 1)
        s[a] = t.dirty[a] | i[a];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function b_(r, t, e, n, i, s) {
  if (i) {
    const o = Kf(t, e, n, s);
    r.p(o, i);
  }
}
function P_(r) {
  if (r.ctx.length > 32) {
    const t = [], e = r.ctx.length / 32;
    for (let n = 0; n < e; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function Jc(r) {
  return r ?? "";
}
function ct(r, t) {
  r.appendChild(t);
}
function Kt(r, t, e) {
  r.insertBefore(t, e || null);
}
function Wt(r) {
  r.parentNode && r.parentNode.removeChild(r);
}
function Ct(r) {
  return document.createElement(r);
}
function Ei(r) {
  return document.createElementNS("http://www.w3.org/2000/svg", r);
}
function xi(r) {
  return document.createTextNode(r);
}
function bn() {
  return xi(" ");
}
function T_() {
  return xi("");
}
function ze(r, t, e, n) {
  return r.addEventListener(t, e, n), () => r.removeEventListener(t, e, n);
}
function M_(r) {
  return function(t) {
    return t.preventDefault(), r.call(this, t);
  };
}
function F(r, t, e) {
  e == null ? r.removeAttribute(t) : r.getAttribute(t) !== e && r.setAttribute(t, e);
}
function O_(r) {
  return Array.from(r.childNodes);
}
function Zo(r, t) {
  t = "" + t, r.data !== t && (r.data = /** @type {string} */
  t);
}
function Qc(r, t) {
  r.value = t ?? "";
}
function gi(r, t, e) {
  r.classList.toggle(t, !!e);
}
function A_(r, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(r, { detail: t, bubbles: e, cancelable: n });
}
let Ko;
function Fo(r) {
  Ko = r;
}
function Jf() {
  if (!Ko)
    throw new Error("Function called outside component initialization");
  return Ko;
}
function D_(r) {
  Jf().$$.on_destroy.push(r);
}
function F_() {
  const r = Jf();
  return (t, e, { cancelable: n = !1 } = {}) => {
    const i = r.$$.callbacks[t];
    if (i) {
      const s = A_(
        /** @type {string} */
        t,
        e,
        { cancelable: n }
      );
      return i.slice().forEach((o) => {
        o.call(r, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function $c(r, t) {
  const e = r.$$.callbacks[t.type];
  e && e.slice().forEach((n) => n.call(this, t));
}
const Ms = [], pl = [];
let Vs = [];
const th = [], k_ = /* @__PURE__ */ Promise.resolve();
let _l = !1;
function G_() {
  _l || (_l = !0, k_.then(Qf));
}
function ml(r) {
  Vs.push(r);
}
const ju = /* @__PURE__ */ new Set();
let Ls = 0;
function Qf() {
  if (Ls !== 0)
    return;
  const r = Ko;
  do {
    try {
      for (; Ls < Ms.length; ) {
        const t = Ms[Ls];
        Ls++, Fo(t), B_(t.$$);
      }
    } catch (t) {
      throw Ms.length = 0, Ls = 0, t;
    }
    for (Fo(null), Ms.length = 0, Ls = 0; pl.length; )
      pl.pop()();
    for (let t = 0; t < Vs.length; t += 1) {
      const e = Vs[t];
      ju.has(e) || (ju.add(e), e());
    }
    Vs.length = 0;
  } while (Ms.length);
  for (; th.length; )
    th.pop()();
  _l = !1, ju.clear(), Fo(r);
}
function B_(r) {
  if (r.fragment !== null) {
    r.update(), ei(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(ml);
  }
}
function z_(r) {
  const t = [], e = [];
  Vs.forEach((n) => r.indexOf(n) === -1 ? t.push(n) : e.push(n)), e.forEach((n) => n()), Vs = t;
}
const qa = /* @__PURE__ */ new Set();
let Hi;
function Ha() {
  Hi = {
    r: 0,
    c: [],
    p: Hi
    // parent group
  };
}
function ja() {
  Hi.r || ei(Hi.c), Hi = Hi.p;
}
function Jt(r, t) {
  r && r.i && (qa.delete(r), r.i(t));
}
function Ne(r, t, e, n) {
  if (r && r.o) {
    if (qa.has(r))
      return;
    qa.add(r), Hi.c.push(() => {
      qa.delete(r), n && (e && r.d(1), n());
    }), r.o(t);
  } else
    n && n();
}
function eh(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
function V_(r, t) {
  Ne(r, 1, 1, () => {
    t.delete(r.key);
  });
}
function X_(r, t, e, n, i, s, o, a, u, l, c, h) {
  let f = r.length, g = s.length, d = f;
  const p = {};
  for (; d--; )
    p[r[d].key] = d;
  const _ = [], m = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), v = [];
  for (d = g; d--; ) {
    const P = h(i, s, d), L = e(P);
    let R = o.get(L);
    R ? n && v.push(() => R.p(P, t)) : (R = l(L, P), R.c()), m.set(L, _[d] = R), L in p && y.set(L, Math.abs(d - p[L]));
  }
  const I = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set();
  function w(P) {
    Jt(P, 1), P.m(a, c), o.set(P.key, P), c = P.first, g--;
  }
  for (; f && g; ) {
    const P = _[g - 1], L = r[f - 1], R = P.key, O = L.key;
    P === L ? (c = P.first, f--, g--) : m.has(O) ? !o.has(R) || I.has(R) ? w(P) : x.has(O) ? f-- : y.get(R) > y.get(O) ? (x.add(R), w(P)) : (I.add(O), f--) : (u(L, o), f--);
  }
  for (; f--; ) {
    const P = r[f];
    m.has(P.key) || u(P, o);
  }
  for (; g; )
    w(_[g - 1]);
  return ei(v), _;
}
function Ci(r) {
  r && r.c();
}
function Ur(r, t, e) {
  const { fragment: n, after_update: i } = r.$$;
  n && n.m(t, e), ml(() => {
    const s = r.$$.on_mount.map(jf).filter(Zf);
    r.$$.on_destroy ? r.$$.on_destroy.push(...s) : ei(s), r.$$.on_mount = [];
  }), i.forEach(ml);
}
function Wr(r, t) {
  const e = r.$$;
  e.fragment !== null && (z_(e.after_update), ei(e.on_destroy), e.fragment && e.fragment.d(t), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Y_(r, t) {
  r.$$.dirty[0] === -1 && (Ms.push(r), G_(), r.$$.dirty.fill(0)), r.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function _s(r, t, e, n, i, s, o = null, a = [-1]) {
  const u = Ko;
  Fo(r);
  const l = r.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: Yt,
    not_equal: i,
    bound: Kc(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Kc(),
    dirty: a,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  o && o(l.root);
  let c = !1;
  if (l.ctx = e ? e(r, t.props || {}, (h, f, ...g) => {
    const d = g.length ? g[0] : f;
    return l.ctx && i(l.ctx[h], l.ctx[h] = d) && (!l.skip_bound && l.bound[h] && l.bound[h](d), c && Y_(r, h)), f;
  }) : [], l.update(), c = !0, ei(l.before_update), l.fragment = n ? n(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = O_(t.target);
      l.fragment && l.fragment.l(h), h.forEach(Wt);
    } else
      l.fragment && l.fragment.c();
    t.intro && Jt(r.$$.fragment), Ur(r, t.target, t.anchor), Qf();
  }
  Fo(u);
}
class ms {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    In(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    In(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Wr(this, 1), this.$destroy = Yt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, e) {
    if (!Zf(e))
      return Yt;
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
    this.$$set && !R_(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const U_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(U_);
function W_(r) {
  let t, e;
  return {
    c() {
      t = Ei("svg"), e = Ei("path"), F(e, "d", "M13.12.706a.982.982 0 0 0-1.391 0L6.907 5.517 2.087.696a.982.982 0 1 0-1.391 1.39l4.821 4.821L.696 11.73a.982.982 0 1 0 1.39 1.39l4.821-4.821 4.822 4.821a.982.982 0 1 0 1.39-1.39L8.298 6.908l4.821-4.822a.988.988 0 0 0 0-1.38Z"), F(t, "viewBox", "0 0 14 14"), F(t, "width", "13"), F(t, "height", "13"), F(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Kt(n, t, i), ct(t, e);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && Wt(t);
    }
  };
}
class $f extends ms {
  constructor(t) {
    super(), _s(this, t, null, W_, ps, {});
  }
}
function q_(r) {
  let t, e;
  return {
    c() {
      t = Ei("svg"), e = Ei("path"), F(e, "d", "M15 0C6.705 0 0 6.705 0 15C0 23.295 6.705 30 15 30C23.295 30 30 23.295 30 15C30 6.705 23.295 0 15 0ZM22.5 20.385L20.385 22.5L15 17.115L9.615 22.5L7.5 20.385L12.885 15L7.5 9.615L9.615 7.5L15 12.885L20.385 7.5L22.5 9.615L17.115 15L22.5 20.385Z"), F(t, "viewBox", "0 0 30 30"), F(t, "fill", "none"), F(t, "xmlns", "http://www.w3.org/2000/svg"), F(t, "class", "svelte-d2loi5");
    },
    m(n, i) {
      Kt(n, t, i), ct(t, e);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && Wt(t);
    }
  };
}
class tg extends ms {
  constructor(t) {
    super(), _s(this, t, null, q_, ps, {});
  }
}
function H_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "area.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "area.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function j_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "poi.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "poi.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function Z_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "postal_code.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "postal_code.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function K_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "street.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "street.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function J_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "road.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "road.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function Q_(r) {
  let t, e;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*iconsBaseUrl*/
      r[3] + "housenumber.svg") || F(t, "src", e), F(
        t,
        "alt",
        /*placeType*/
        r[6]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i);
    },
    p(n, i) {
      i & /*iconsBaseUrl*/
      8 && !en(t.src, e = /*iconsBaseUrl*/
      n[3] + "housenumber.svg") && F(t, "src", e), i & /*placeType*/
      64 && F(
        t,
        "alt",
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function $_(r) {
  let t, e, n, i;
  return {
    c() {
      t = Ct("img"), en(t.src, e = /*imageUrl*/
      r[5]) || F(t, "src", e), F(
        t,
        "alt",
        /*category*/
        r[4]
      ), F(t, "class", "svelte-ltkwvy");
    },
    m(s, o) {
      Kt(s, t, o), n || (i = ze(
        t,
        "error",
        /*error_handler*/
        r[13]
      ), n = !0);
    },
    p(s, o) {
      o & /*imageUrl*/
      32 && !en(t.src, e = /*imageUrl*/
      s[5]) && F(t, "src", e), o & /*category*/
      16 && F(
        t,
        "alt",
        /*category*/
        s[4]
      );
    },
    d(s) {
      s && Wt(t), n = !1, i();
    }
  };
}
function nh(r) {
  let t, e;
  return {
    c() {
      t = Ct("span"), e = xi(
        /*placeType*/
        r[6]
      ), F(t, "class", "secondary svelte-ltkwvy");
    },
    m(n, i) {
      Kt(n, t, i), ct(t, e);
    },
    p(n, i) {
      i & /*placeType*/
      64 && Zo(
        e,
        /*placeType*/
        n[6]
      );
    },
    d(n) {
      n && Wt(t);
    }
  };
}
function tm(r) {
  var P, L;
  let t, e, n, i, s, o, a, u, l = (
    /*feature*/
    r[0].place_name.replace(/,.*/, "") + ""
  ), c, h, f = (
    /*showPlaceType*/
    r[2] === "always" || /*showPlaceType*/
    r[2] && !/*feature*/
    r[0].address && /*feature*/
    ((P = r[0].properties) == null ? void 0 : P.kind) !== "road" && /*feature*/
    ((L = r[0].properties) == null ? void 0 : L.kind) !== "road_relation" && !/*feature*/
    r[0].id.startsWith("address.") && !/*feature*/
    r[0].id.startsWith("postal_code.") && (!/*feature*/
    r[0].id.startsWith("poi.") || !/*imageUrl*/
    r[5])
  ), g, d, p = (
    /*feature*/
    r[0].place_name.replace(/[^,]*,?\s*/, "") + ""
  ), _, m, y;
  function v(R, O) {
    var V, N;
    return O & /*feature*/
    1 && (e = null), O & /*feature*/
    1 && (n = null), O & /*feature*/
    1 && (i = null), /*imageUrl*/
    R[5] ? $_ : (
      /*feature*/
      R[0].address ? Q_ : (
        /*feature*/
        ((V = R[0].properties) == null ? void 0 : V.kind) === "road" || /*feature*/
        ((N = R[0].properties) == null ? void 0 : N.kind) === "road_relation" ? J_ : (e == null && (e = !!/*feature*/
        R[0].id.startsWith("address.")), e ? K_ : (n == null && (n = !!/*feature*/
        R[0].id.startsWith("postal_code.")), n ? Z_ : (i == null && (i = !!/*feature*/
        R[0].id.startsWith("poi.")), i ? j_ : H_)))
      )
    );
  }
  let I = v(r, -1), x = I(r), w = f && nh(r);
  return {
    c() {
      t = Ct("li"), x.c(), s = bn(), o = Ct("span"), a = Ct("span"), u = Ct("span"), c = xi(l), h = bn(), w && w.c(), g = bn(), d = Ct("span"), _ = xi(p), F(u, "class", "primary svelte-ltkwvy"), F(a, "class", "svelte-ltkwvy"), F(d, "class", "line2 svelte-ltkwvy"), F(o, "class", "texts svelte-ltkwvy"), F(t, "tabindex", "0"), F(
        t,
        "data-selected",
        /*selected*/
        r[1]
      ), F(t, "class", "svelte-ltkwvy"), gi(
        t,
        "selected",
        /*selected*/
        r[1]
      );
    },
    m(R, O) {
      Kt(R, t, O), x.m(t, null), ct(t, s), ct(t, o), ct(o, a), ct(a, u), ct(u, c), ct(a, h), w && w.m(a, null), ct(o, g), ct(o, d), ct(d, _), m || (y = [
        ze(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          r[11]
        ),
        ze(
          t,
          "focus",
          /*focus_handler*/
          r[12]
        )
      ], m = !0);
    },
    p(R, [O]) {
      var V, N;
      I === (I = v(R, O)) && x ? x.p(R, O) : (x.d(1), x = I(R), x && (x.c(), x.m(t, s))), O & /*feature*/
      1 && l !== (l = /*feature*/
      R[0].place_name.replace(/,.*/, "") + "") && Zo(c, l), O & /*showPlaceType, feature, imageUrl*/
      37 && (f = /*showPlaceType*/
      R[2] === "always" || /*showPlaceType*/
      R[2] && !/*feature*/
      R[0].address && /*feature*/
      ((V = R[0].properties) == null ? void 0 : V.kind) !== "road" && /*feature*/
      ((N = R[0].properties) == null ? void 0 : N.kind) !== "road_relation" && !/*feature*/
      R[0].id.startsWith("address.") && !/*feature*/
      R[0].id.startsWith("postal_code.") && (!/*feature*/
      R[0].id.startsWith("poi.") || !/*imageUrl*/
      R[5])), f ? w ? w.p(R, O) : (w = nh(R), w.c(), w.m(a, null)) : w && (w.d(1), w = null), O & /*feature*/
      1 && p !== (p = /*feature*/
      R[0].place_name.replace(/[^,]*,?\s*/, "") + "") && Zo(_, p), O & /*selected*/
      2 && F(
        t,
        "data-selected",
        /*selected*/
        R[1]
      ), O & /*selected*/
      2 && gi(
        t,
        "selected",
        /*selected*/
        R[1]
      );
    },
    i: Yt,
    o: Yt,
    d(R) {
      R && Wt(t), x.d(), w && w.d(), m = !1, ei(y);
    }
  };
}
function em(r, t, e) {
  var y;
  let n, i, { feature: s } = t, { selected: o = !1 } = t, { showPlaceType: a } = t, { missingIconsCache: u } = t, { iconsBaseUrl: l } = t;
  const c = (y = s.properties) == null ? void 0 : y.categories;
  let h, f, g = 0;
  function d(v) {
    f && u.add(f), e(9, g++, g);
  }
  function p(v) {
    $c.call(this, r, v);
  }
  function _(v) {
    $c.call(this, r, v);
  }
  const m = (v) => d(v.currentTarget);
  return r.$$set = (v) => {
    "feature" in v && e(0, s = v.feature), "selected" in v && e(1, o = v.selected), "showPlaceType" in v && e(2, a = v.showPlaceType), "missingIconsCache" in v && e(8, u = v.missingIconsCache), "iconsBaseUrl" in v && e(3, l = v.iconsBaseUrl);
  }, r.$$.update = () => {
    var v, I, x, w;
    if (r.$$.dirty & /*loadIconAttempt, index, category, iconsBaseUrl, imageUrl, missingIconsCache*/
    1848)
      do
        e(10, n--, n), e(4, h = c == null ? void 0 : c[n]), e(5, f = h ? l + h.replace(/ /g, "_") + ".svg" : void 0);
      while (n > -1 && (!f || u.has(f)));
    r.$$.dirty & /*feature*/
    1 && e(6, i = s.id.startsWith("poi.") ? (I = (v = s.properties) == null ? void 0 : v.categories) == null ? void 0 : I.join(", ") : ((w = (x = s.properties) == null ? void 0 : x.place_type_name) == null ? void 0 : w[0]) ?? s.place_type[0]);
  }, e(10, n = (c == null ? void 0 : c.length) ?? 0), [
    s,
    o,
    a,
    l,
    h,
    f,
    i,
    d,
    u,
    g,
    n,
    p,
    _,
    m
  ];
}
class nm extends ms {
  constructor(t) {
    super(), _s(this, t, em, tm, ps, {
      feature: 0,
      selected: 1,
      showPlaceType: 2,
      missingIconsCache: 8,
      iconsBaseUrl: 3
    });
  }
}
function rm(r) {
  let t;
  return {
    c() {
      t = Ct("div"), t.innerHTML = '<svg viewBox="0 0 18 18" width="24" height="24" class="svelte-7cmwmc"><path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"></path><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"></path></svg>', F(t, "class", "svelte-7cmwmc");
    },
    m(e, n) {
      Kt(e, t, n);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(e) {
      e && Wt(t);
    }
  };
}
class im extends ms {
  constructor(t) {
    super(), _s(this, t, null, rm, ps, {});
  }
}
function sm(r) {
  let t, e;
  return {
    c() {
      t = Ei("svg"), e = Ei("path"), F(e, "d", "M30.003-26.765C13.46-26.765 0-14.158 0 1.337c0 23.286 24.535 42.952 28.39 46.04.24.192.402.316.471.376.323.282.732.424 1.142.424.41 0 .82-.142 1.142-.424.068-.06.231-.183.471-.376 3.856-3.09 28.39-22.754 28.39-46.04 0-15.495-13.46-28.102-30.003-28.102Zm1.757 12.469c4.38 0 7.858 1.052 10.431 3.158 2.595 2.105 3.89 4.913 3.89 8.422 0 2.34-.53 4.362-1.593 6.063-1.063 1.702-3.086 3.616-6.063 5.742-2.042 1.51-3.337 2.659-3.89 3.446-.532.787-.8 1.82-.8 3.096v1.914h-8.449V15.18c0-2.041.434-3.815 1.306-5.325.872-1.51 2.467-3.118 4.785-4.82 2.233-1.594 3.7-2.89 4.402-3.889a5.582 5.582 0 0 0 1.087-3.35c0-1.382-.51-2.435-1.531-3.158-1.02-.723-2.45-1.087-4.28-1.087-3.19 0-6.826 1.047-10.91 3.131l-3.472-6.986c4.742-2.659 9.77-3.992 15.087-3.992Zm-1.88 37.324c1.765 0 3.124.472 4.08 1.408.98.936 1.47 2.276 1.47 4.02 0 1.68-.49 3.007-1.47 3.985-.977.957-2.336 1.435-4.08 1.435-1.787 0-3.171-.465-4.15-1.4-.978-.958-1.47-2.298-1.47-4.02 0-1.787.48-3.14 1.436-4.054.957-.915 2.355-1.374 4.184-1.374Z"), F(t, "viewBox", "0 0 60.006 21.412"), F(t, "width", "14"), F(t, "height", "20"), F(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Kt(n, t, i), ct(t, e);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && Wt(t);
    }
  };
}
class om extends ms {
  constructor(t) {
    super(), _s(this, t, null, sm, ps, {});
  }
}
function am(r) {
  let t, e;
  return {
    c() {
      t = Ei("svg"), e = Ei("path"), F(e, "d", "M13.101 14.261 8.74 9.899a4.797 4.797 0 0 1-1.425.748 5.165 5.165 0 0 1-1.603.248c-1.446 0-2.677-.5-3.693-1.503S.495 7.164.495 5.717c0-1.446.508-2.678 1.524-3.693C3.035 1.008 4.266.5 5.712.5c1.448 0 2.672.508 3.675 1.524 1.002 1.015 1.503 2.247 1.503 3.693 0 .558-.08 1.092-.239 1.603-.159.512-.411.98-.757 1.405l4.382 4.4a.74.74 0 0 1 .229.568.81.81 0 0 1-.249.568.787.787 0 0 1-.577.239.787.787 0 0 1-.578-.239ZM5.712 9.223c.97 0 1.796-.342 2.48-1.026a3.378 3.378 0 0 0 1.026-2.48c0-.982-.34-1.818-1.016-2.509-.677-.69-1.507-1.035-2.49-1.035a3.42 3.42 0 0 0-2.509 1.035 3.42 3.42 0 0 0-1.035 2.51c0 .982.345 1.812 1.035 2.488.691.678 1.527 1.017 2.51 1.017Z"), F(t, "width", "14"), F(t, "height", "14"), F(t, "viewBox", "0 0 15 15"), F(t, "class", "svelte-en2qvf");
    },
    m(n, i) {
      Kt(n, t, i), ct(t, e);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && Wt(t);
    }
  };
}
class um extends ms {
  constructor(t) {
    super(), _s(this, t, null, am, ps, {});
  }
}
function lm(r, t, e) {
  const n = t[1], i = t[0], s = n - i;
  return r === n && e ? r : ((r - i) % s + s) % s + i;
}
function rh(r) {
  const t = [...r];
  return t[2] < t[0] && (t[2] += 360), t;
}
let Ro;
async function cm(r, t, e) {
  const n = r == null ? void 0 : r.getCenterAndZoom();
  for (const i of t ?? [])
    if (!(n && (i.minZoom != null && i.minZoom > n[0] || i.maxZoom != null && i.maxZoom < n[0]))) {
      if (i.type === "fixed")
        return i.coordinates.join(",");
      t:
        if (i.type === "client-geolocation") {
          if (Ro && i.cachedLocationExpiry && Ro.time + i.cachedLocationExpiry > Date.now()) {
            if (!Ro.coords)
              break t;
            return Ro.coords;
          }
          let s;
          try {
            return s = await new Promise((o, a) => {
              e.signal.addEventListener("abort", () => {
                a(Error("aborted"));
              }), navigator.geolocation.getCurrentPosition(
                (u) => {
                  o(
                    [u.coords.longitude, u.coords.latitude].map((l) => l.toFixed(6)).join(",")
                  );
                },
                (u) => {
                  a(u);
                },
                i
              );
            }), s;
          } catch {
          } finally {
            i.cachedLocationExpiry && (Ro = {
              time: Date.now(),
              coords: s
            });
          }
          if (e.signal.aborted)
            return;
        }
      if (i.type === "server-geolocation")
        return "ip";
      if (n && i.type === "map-center")
        return n[1].toFixed(6) + "," + n[2].toFixed(6);
    }
}
function ih(r, t, e) {
  const n = r.slice();
  return n[77] = t[e], n[79] = e, n;
}
function sh(r) {
  let t, e;
  return t = new im({}), {
    c() {
      Ci(t.$$.fragment);
    },
    m(n, i) {
      Ur(t, n, i), e = !0;
    },
    i(n) {
      e || (Jt(t.$$.fragment, n), e = !0);
    },
    o(n) {
      Ne(t.$$.fragment, n), e = !1;
    },
    d(n) {
      Wr(t, n);
    }
  };
}
function oh(r) {
  let t, e, n, i, s;
  return e = new om({}), {
    c() {
      t = Ct("button"), Ci(e.$$.fragment), F(t, "type", "button"), F(
        t,
        "title",
        /*reverseButtonTitle*/
        r[9]
      ), F(t, "class", "svelte-1r7dvt7"), gi(
        t,
        "active",
        /*reverseActive*/
        r[0]
      );
    },
    m(o, a) {
      Kt(o, t, a), Ur(e, t, null), n = !0, i || (s = ze(
        t,
        "click",
        /*click_handler_2*/
        r[63]
      ), i = !0);
    },
    p(o, a) {
      (!n || a[0] & /*reverseButtonTitle*/
      512) && F(
        t,
        "title",
        /*reverseButtonTitle*/
        o[9]
      ), (!n || a[0] & /*reverseActive*/
      1) && gi(
        t,
        "active",
        /*reverseActive*/
        o[0]
      );
    },
    i(o) {
      n || (Jt(e.$$.fragment, o), n = !0);
    },
    o(o) {
      Ne(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && Wt(t), Wr(e), i = !1, s();
    }
  };
}
function hm(r) {
  let t, e = [], n = /* @__PURE__ */ new Map(), i, s, o, a = eh(
    /*listFeatures*/
    r[13]
  );
  const u = (l) => (
    /*feature*/
    l[77].id + /*feature*/
    (l[77].address ? "," + /*feature*/
    l[77].address : "")
  );
  for (let l = 0; l < a.length; l += 1) {
    let c = ih(r, a, l), h = u(c);
    n.set(h, e[l] = ah(h, c));
  }
  return {
    c() {
      t = Ct("ul");
      for (let l = 0; l < e.length; l += 1)
        e[l].c();
      F(t, "class", "svelte-1r7dvt7");
    },
    m(l, c) {
      Kt(l, t, c);
      for (let h = 0; h < e.length; h += 1)
        e[h] && e[h].m(t, null);
      i = !0, s || (o = [
        ze(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          r[67]
        ),
        ze(
          t,
          "blur",
          /*blur_handler_1*/
          r[68]
        )
      ], s = !0);
    },
    p(l, c) {
      c[0] & /*listFeatures, showPlaceType, selectedItemIndex, missingIconsCache, iconsBaseUrl, pick*/
      8940544 && (a = eh(
        /*listFeatures*/
        l[13]
      ), Ha(), e = X_(e, c, u, 1, l, a, n, t, V_, ah, null, ih), ja());
    },
    i(l) {
      if (!i) {
        for (let c = 0; c < a.length; c += 1)
          Jt(e[c]);
        i = !0;
      }
    },
    o(l) {
      for (let c = 0; c < e.length; c += 1)
        Ne(e[c]);
      i = !1;
    },
    d(l) {
      l && Wt(t);
      for (let c = 0; c < e.length; c += 1)
        e[c].d();
      s = !1, ei(o);
    }
  };
}
function fm(r) {
  let t, e, n, i, s, o;
  return e = new tg({}), {
    c() {
      t = Ct("div"), Ci(e.$$.fragment), n = bn(), i = Ct("div"), s = xi(
        /*noResultsMessage*/
        r[7]
      ), F(i, "class", "svelte-1r7dvt7"), F(t, "class", "no-results svelte-1r7dvt7");
    },
    m(a, u) {
      Kt(a, t, u), Ur(e, t, null), ct(t, n), ct(t, i), ct(i, s), o = !0;
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
      o || (Jt(e.$$.fragment, a), o = !0);
    },
    o(a) {
      Ne(e.$$.fragment, a), o = !1;
    },
    d(a) {
      a && Wt(t), Wr(e);
    }
  };
}
function gm(r) {
  let t = "", e;
  return {
    c() {
      e = xi(t);
    },
    m(n, i) {
      Kt(n, e, i);
    },
    p: Yt,
    i: Yt,
    o: Yt,
    d(n) {
      n && Wt(e);
    }
  };
}
function dm(r) {
  let t, e, n, i, s, o, a, u, l, c, h;
  return e = new tg({}), u = new $f({}), {
    c() {
      t = Ct("div"), Ci(e.$$.fragment), n = bn(), i = Ct("div"), s = xi(
        /*errorMessage*/
        r[6]
      ), o = bn(), a = Ct("button"), Ci(u.$$.fragment), F(i, "class", "svelte-1r7dvt7"), F(a, "class", "svelte-1r7dvt7"), F(t, "class", "error svelte-1r7dvt7");
    },
    m(f, g) {
      Kt(f, t, g), Ur(e, t, null), ct(t, n), ct(t, i), ct(i, s), ct(t, o), ct(t, a), Ur(u, a, null), l = !0, c || (h = ze(
        a,
        "click",
        /*click_handler_3*/
        r[64]
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
      l || (Jt(e.$$.fragment, f), Jt(u.$$.fragment, f), l = !0);
    },
    o(f) {
      Ne(e.$$.fragment, f), Ne(u.$$.fragment, f), l = !1;
    },
    d(f) {
      f && Wt(t), Wr(e), Wr(u), c = !1, h();
    }
  };
}
function ah(r, t) {
  let e, n, i;
  function s() {
    return (
      /*mouseenter_handler*/
      t[65](
        /*i*/
        t[79]
      )
    );
  }
  function o() {
    return (
      /*focus_handler_1*/
      t[66](
        /*feature*/
        t[77]
      )
    );
  }
  return n = new nm({
    props: {
      feature: (
        /*feature*/
        t[77]
      ),
      showPlaceType: (
        /*showPlaceType*/
        t[10]
      ),
      selected: (
        /*selectedItemIndex*/
        t[14] === /*i*/
        t[79]
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
    key: r,
    first: null,
    c() {
      e = T_(), Ci(n.$$.fragment), this.first = e;
    },
    m(a, u) {
      Kt(a, e, u), Ur(n, a, u), i = !0;
    },
    p(a, u) {
      t = a;
      const l = {};
      u[0] & /*listFeatures*/
      8192 && (l.feature = /*feature*/
      t[77]), u[0] & /*showPlaceType*/
      1024 && (l.showPlaceType = /*showPlaceType*/
      t[10]), u[0] & /*selectedItemIndex, listFeatures*/
      24576 && (l.selected = /*selectedItemIndex*/
      t[14] === /*i*/
      t[79]), u[0] & /*iconsBaseUrl*/
      2048 && (l.iconsBaseUrl = /*iconsBaseUrl*/
      t[11]), n.$set(l);
    },
    i(a) {
      i || (Jt(n.$$.fragment, a), i = !0);
    },
    o(a) {
      Ne(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && Wt(e), Wr(n, a);
    }
  };
}
function pm(r) {
  let t, e, n, i, s, o, a, u, l, c, h, f, g, d, p, _, m, y, v, I;
  i = new um({}), c = new $f({});
  let x = (
    /*abortController*/
    r[18] && sh()
  ), w = (
    /*enableReverse*/
    r[5] === !0 && oh(r)
  );
  const P = (
    /*#slots*/
    r[55].default
  ), L = N_(
    P,
    r,
    /*$$scope*/
    r[54],
    null
  ), R = [dm, gm, fm, hm], O = [];
  function V(N, B) {
    var M, A;
    return (
      /*error*/
      N[17] ? 0 : (
        /*focusedDelayed*/
        N[15] ? (
          /*listFeatures*/
          ((M = N[13]) == null ? void 0 : M.length) === 0 ? 2 : (
            /*focusedDelayed*/
            N[15] && /*listFeatures*/
            ((A = N[13]) != null && A.length) ? 3 : -1
          )
        ) : 1
      )
    );
  }
  return ~(p = V(r)) && (_ = O[p] = R[p](r)), {
    c() {
      t = Ct("form"), e = Ct("div"), n = Ct("button"), Ci(i.$$.fragment), s = bn(), o = Ct("input"), a = bn(), u = Ct("div"), l = Ct("button"), Ci(c.$$.fragment), h = bn(), x && x.c(), f = bn(), w && w.c(), g = bn(), L && L.c(), d = bn(), _ && _.c(), F(n, "class", "search-button svelte-1r7dvt7"), F(n, "type", "button"), F(
        o,
        "placeholder",
        /*placeholder*/
        r[8]
      ), F(
        o,
        "aria-label",
        /*placeholder*/
        r[8]
      ), F(o, "class", "svelte-1r7dvt7"), F(l, "type", "button"), F(
        l,
        "title",
        /*clearButtonTitle*/
        r[3]
      ), F(l, "class", "svelte-1r7dvt7"), F(u, "class", "clear-button-container svelte-1r7dvt7"), gi(
        u,
        "displayable",
        /*searchValue*/
        r[1] !== ""
      ), F(e, "class", "input-group svelte-1r7dvt7"), F(t, "tabindex", "0"), F(t, "class", m = Jc(
        /*className*/
        r[2]
      ) + " svelte-1r7dvt7"), gi(
        t,
        "can-collapse",
        /*collapsed*/
        r[4] && /*searchValue*/
        r[1] === ""
      );
    },
    m(N, B) {
      Kt(N, t, B), ct(t, e), ct(e, n), Ur(i, n, null), ct(e, s), ct(e, o), r[57](o), Qc(
        o,
        /*searchValue*/
        r[1]
      ), ct(e, a), ct(e, u), ct(u, l), Ur(c, l, null), ct(u, h), x && x.m(u, null), ct(e, f), w && w.m(e, null), ct(e, g), L && L.m(e, null), ct(t, d), ~p && O[p].m(t, null), y = !0, v || (I = [
        ze(
          n,
          "click",
          /*click_handler*/
          r[56]
        ),
        ze(
          o,
          "input",
          /*input_1_input_handler*/
          r[58]
        ),
        ze(
          o,
          "focus",
          /*focus_handler*/
          r[59]
        ),
        ze(
          o,
          "blur",
          /*blur_handler*/
          r[60]
        ),
        ze(
          o,
          "keydown",
          /*handleKeyDown*/
          r[21]
        ),
        ze(
          o,
          "input",
          /*input_handler*/
          r[61]
        ),
        ze(
          l,
          "click",
          /*click_handler_1*/
          r[62]
        ),
        ze(t, "submit", M_(
          /*handleOnSubmit*/
          r[20]
        ))
      ], v = !0);
    },
    p(N, B) {
      (!y || B[0] & /*placeholder*/
      256) && F(
        o,
        "placeholder",
        /*placeholder*/
        N[8]
      ), (!y || B[0] & /*placeholder*/
      256) && F(
        o,
        "aria-label",
        /*placeholder*/
        N[8]
      ), B[0] & /*searchValue*/
      2 && o.value !== /*searchValue*/
      N[1] && Qc(
        o,
        /*searchValue*/
        N[1]
      ), (!y || B[0] & /*clearButtonTitle*/
      8) && F(
        l,
        "title",
        /*clearButtonTitle*/
        N[3]
      ), /*abortController*/
      N[18] ? x ? B[0] & /*abortController*/
      262144 && Jt(x, 1) : (x = sh(), x.c(), Jt(x, 1), x.m(u, null)) : x && (Ha(), Ne(x, 1, 1, () => {
        x = null;
      }), ja()), (!y || B[0] & /*searchValue*/
      2) && gi(
        u,
        "displayable",
        /*searchValue*/
        N[1] !== ""
      ), /*enableReverse*/
      N[5] === !0 ? w ? (w.p(N, B), B[0] & /*enableReverse*/
      32 && Jt(w, 1)) : (w = oh(N), w.c(), Jt(w, 1), w.m(e, g)) : w && (Ha(), Ne(w, 1, 1, () => {
        w = null;
      }), ja()), L && L.p && (!y || B[1] & /*$$scope*/
      8388608) && b_(
        L,
        P,
        N,
        /*$$scope*/
        N[54],
        y ? L_(
          P,
          /*$$scope*/
          N[54],
          B,
          null
        ) : P_(
          /*$$scope*/
          N[54]
        ),
        null
      );
      let M = p;
      p = V(N), p === M ? ~p && O[p].p(N, B) : (_ && (Ha(), Ne(O[M], 1, 1, () => {
        O[M] = null;
      }), ja()), ~p ? (_ = O[p], _ ? _.p(N, B) : (_ = O[p] = R[p](N), _.c()), Jt(_, 1), _.m(t, null)) : _ = null), (!y || B[0] & /*className*/
      4 && m !== (m = Jc(
        /*className*/
        N[2]
      ) + " svelte-1r7dvt7")) && F(t, "class", m), (!y || B[0] & /*className, collapsed, searchValue*/
      22) && gi(
        t,
        "can-collapse",
        /*collapsed*/
        N[4] && /*searchValue*/
        N[1] === ""
      );
    },
    i(N) {
      y || (Jt(i.$$.fragment, N), Jt(c.$$.fragment, N), Jt(x), Jt(w), Jt(L, N), Jt(_), y = !0);
    },
    o(N) {
      Ne(i.$$.fragment, N), Ne(c.$$.fragment, N), Ne(x), Ne(w), Ne(L, N), Ne(_), y = !1;
    },
    d(N) {
      N && Wt(t), Wr(i), r[57](null), Wr(c), x && x.d(), w && w.d(), L && L.d(N), ~p && O[p].d(), v = !1, ei(I);
    }
  };
}
function _m(r, t, e) {
  let n, { $$slots: i = {}, $$scope: s } = t, { class: o = void 0 } = t, { apiKey: a } = t, { bbox: u = void 0 } = t, { clearButtonTitle: l = "clear" } = t, { clearOnBlur: c = !1 } = t, { collapsed: h = !1 } = t, { country: f = void 0 } = t, { debounceSearch: g = 200 } = t, { enableReverse: d = !1 } = t, { errorMessage: p = "Something went wrong…" } = t, { filter: _ = () => !0 } = t, { flyTo: m = !0 } = t, { fuzzyMatch: y = !0 } = t, { language: v = void 0 } = t, { limit: I = void 0 } = t, { mapController: x = void 0 } = t, { minLength: w = 2 } = t, { noResultsMessage: P = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!" } = t, { placeholder: L = "Search" } = t, { proximity: R = [{ type: "server-geolocation" }] } = t, { reverseActive: O = d === "always" } = t, { reverseButtonTitle: V = "toggle reverse geocoding" } = t, { searchValue: N = "" } = t, { showFullGeometry: B = !0 } = t, { showPlaceType: M = "ifNeeded" } = t, { showResultsWhileTyping: A = !0 } = t, { types: z = void 0 } = t, { zoom: U = 16 } = t, { maxZoom: j = 18 } = t, { apiUrl: ot = "https://api.maptiler.com/geocoding" } = t, { fetchParameters: yt = {} } = t, { iconsBaseUrl: kt = "https://cdn.maptiler.com/maptiler-geocoding-control/v1.0.0/icons/" } = t, { adjustUrlQuery: k = (b) => {
  } } = t;
  function Ze() {
    un.focus();
  }
  function Ie() {
    un.blur();
  }
  function Me(b, lt = !0) {
    e(1, N = b), lt ? (e(14, xt = -1), Eo()) : (Co(), setTimeout(() => {
      un.focus(), un.select();
    }));
  }
  function zu() {
    e(13, ft = void 0), e(51, at = void 0), e(14, xt = -1);
  }
  function Vu() {
    e(50, se = []), e(51, at = void 0);
  }
  let Mr = !1, ft, se, at, Ra = "", un, xt = -1, Ke, Is = [], Or, ni, Fi, ki;
  const Xu = /* @__PURE__ */ new Set(), ln = F_();
  D_(() => {
    x && (x.setEventHandler(void 0), x.indicateReverse(!1), x.setSelectedMarker(-1), x.setMarkers(void 0, void 0));
  });
  function Eo(b) {
    if (ni && (clearTimeout(ni), ni = void 0), xt > -1 && ft)
      e(51, at = ft[xt]), e(1, N = at.place_name.replace(/,.*/, "")), e(17, Ke = void 0), e(50, se = void 0), e(14, xt = -1);
    else if (N) {
      const lt = b || !ri();
      Gi(N, { exact: !0 }).then(() => {
        e(50, se = ft), e(51, at = void 0), lt && xo();
      }).catch((Se) => e(17, Ke = Se));
    }
  }
  function ri() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(N);
  }
  async function Gi(b, { byId: lt = !1, exact: Se = !1 } = {}) {
    e(17, Ke = void 0), Or == null || Or.abort();
    const Gt = new AbortController();
    e(18, Or = Gt);
    try {
      const Lt = ri(), bt = new URLSearchParams();
      if (v !== void 0 && bt.set("language", Array.isArray(v) ? v.join(",") : v ?? ""), z && bt.set("types", z.join(",")), u && bt.set("bbox", u.map((we) => we.toFixed(6)).join(",")), f && bt.set("country", Array.isArray(f) ? f.join(",") : f), !lt && !Lt) {
        const we = await cm(x, R, Gt);
        we && bt.set("proximity", we), (Se || !A) && bt.set("autocomplete", "false"), bt.set("fuzzyMatch", String(y));
      }
      I !== void 0 && (!Lt || (z == null ? void 0 : z.length) === 1) && bt.set("limit", String(I)), bt.set("key", a), k(bt);
      const Ar = ot + "/" + encodeURIComponent(b) + ".json?" + bt.toString();
      if (Ar === Ra) {
        lt ? (e(13, ft = void 0), e(51, at = Is[0])) : e(13, ft = Is);
        return;
      }
      Ra = Ar;
      const Xi = await fetch(Ar, { signal: Gt.signal, ...yt });
      if (!Xi.ok)
        throw new Error();
      const he = await Xi.json();
      ln("response", { url: Ar, featureCollection: he }), lt ? (e(13, ft = void 0), e(51, at = he.features[0]), Is = [at]) : (e(13, ft = he.features.filter(_)), Is = ft, Lt && un.focus());
    } catch (Lt) {
      if (Lt && typeof Lt == "object" && "name" in Lt && Lt.name === "AbortError")
        return;
      throw Lt;
    } finally {
      Gt === Or && e(18, Or = void 0);
    }
  }
  function xo() {
    var Se;
    if (!(se != null && se.length) || !m)
      return;
    const b = [180, 90, -180, -90], lt = !se.some((Gt) => !Gt.matching_text);
    for (const Gt of se)
      if (lt || !Gt.matching_text)
        for (const Lt of [0, 1, 2, 3])
          b[Lt] = Math[Lt < 2 ? "min" : "max"](b[Lt], ((Se = Gt.bbox) == null ? void 0 : Se[Lt]) ?? Gt.center[Lt % 2]);
    x && se.length > 0 && (at && b[0] === b[2] && b[1] === b[3] ? x.flyTo(at.center, U) : x.fitBounds(rh(b), 50, j));
  }
  function Ss(b) {
    e(0, O = d === "always"), Me(lm(b[0], [-180, 180], !0).toFixed(6) + "," + b[1].toFixed(6));
  }
  function ws(b) {
    if (!ft)
      return;
    let lt = b.key === "ArrowDown" ? 1 : b.key === "ArrowUp" ? -1 : 0;
    lt ? (xt === -1 && lt === -1 && e(14, xt = ft.length), e(14, xt += lt), xt >= ft.length && e(14, xt = -1), b.preventDefault()) : ["ArrowLeft", "ArrowRight", "Home", "End"].includes(b.key) && e(14, xt = -1);
  }
  function Co(b = !0) {
    if (e(17, Ke = void 0), A) {
      if (ni && clearTimeout(ni), N.length < w)
        return;
      const lt = N;
      ni = window.setTimeout(
        () => {
          Gi(lt).catch((Se) => e(17, Ke = Se));
        },
        b ? g : 0
      );
    } else
      e(13, ft = void 0), e(17, Ke = void 0);
  }
  function Rs(b) {
    e(51, at = b), e(1, N = b.place_name), e(14, xt = -1);
  }
  const Na = () => un.focus();
  function Io(b) {
    pl[b ? "unshift" : "push"](() => {
      un = b, e(16, un);
    });
  }
  function Yu() {
    N = this.value, e(1, N), e(12, Mr), e(26, c);
  }
  const Uu = () => e(12, Mr = !0), La = () => e(12, Mr = !1), ba = () => Co(), So = () => {
    e(1, N = ""), un.focus();
  }, Pa = () => e(0, O = !O), wo = () => e(17, Ke = void 0), Bi = (b) => e(14, xt = b), zi = (b) => Rs(b), Vi = () => e(14, xt = -1), Ta = () => {
  };
  return r.$$set = (b) => {
    "class" in b && e(2, o = b.class), "apiKey" in b && e(24, a = b.apiKey), "bbox" in b && e(25, u = b.bbox), "clearButtonTitle" in b && e(3, l = b.clearButtonTitle), "clearOnBlur" in b && e(26, c = b.clearOnBlur), "collapsed" in b && e(4, h = b.collapsed), "country" in b && e(27, f = b.country), "debounceSearch" in b && e(28, g = b.debounceSearch), "enableReverse" in b && e(5, d = b.enableReverse), "errorMessage" in b && e(6, p = b.errorMessage), "filter" in b && e(29, _ = b.filter), "flyTo" in b && e(30, m = b.flyTo), "fuzzyMatch" in b && e(31, y = b.fuzzyMatch), "language" in b && e(32, v = b.language), "limit" in b && e(33, I = b.limit), "mapController" in b && e(34, x = b.mapController), "minLength" in b && e(35, w = b.minLength), "noResultsMessage" in b && e(7, P = b.noResultsMessage), "placeholder" in b && e(8, L = b.placeholder), "proximity" in b && e(36, R = b.proximity), "reverseActive" in b && e(0, O = b.reverseActive), "reverseButtonTitle" in b && e(9, V = b.reverseButtonTitle), "searchValue" in b && e(1, N = b.searchValue), "showFullGeometry" in b && e(37, B = b.showFullGeometry), "showPlaceType" in b && e(10, M = b.showPlaceType), "showResultsWhileTyping" in b && e(38, A = b.showResultsWhileTyping), "types" in b && e(39, z = b.types), "zoom" in b && e(40, U = b.zoom), "maxZoom" in b && e(41, j = b.maxZoom), "apiUrl" in b && e(42, ot = b.apiUrl), "fetchParameters" in b && e(43, yt = b.fetchParameters), "iconsBaseUrl" in b && e(11, kt = b.iconsBaseUrl), "adjustUrlQuery" in b && e(44, k = b.adjustUrlQuery), "$$scope" in b && e(54, s = b.$$scope);
  }, r.$$.update = () => {
    if (r.$$.dirty[0] & /*focused, clearOnBlur*/
    67112960 && setTimeout(() => {
      e(15, Fi = Mr), c && !Mr && e(1, N = "");
    }), r.$$.dirty[0] & /*searchValue, listFeatures*/
    8194 | r.$$.dirty[1] & /*minLength*/
    16 && N.length < w && (e(51, at = void 0), e(13, ft = void 0), e(17, Ke = void 0), e(50, se = ft)), r.$$.dirty[1] & /*showFullGeometry, picked*/
    1048640 && B && at && !at.address && at.geometry.type === "Point" && Gi(at.id, { byId: !0 }).catch((b) => e(17, Ke = b)), r.$$.dirty[0] & /*flyTo*/
    1073741824 | r.$$.dirty[1] & /*mapController, picked, prevIdToFly, maxZoom, zoom*/
    3147272 && (x && at && at.id !== ki && m && (!at.bbox || at.bbox[0] === at.bbox[2] && at.bbox[1] === at.bbox[3] ? x.flyTo(at.center, at.id.startsWith("poi.") || at.id.startsWith("address.") ? j : U) : x.fitBounds(rh(at.bbox), 50, j), e(13, ft = void 0), e(50, se = void 0), e(14, xt = -1)), e(52, ki = at == null ? void 0 : at.id)), r.$$.dirty[0] & /*listFeatures*/
    8192 | r.$$.dirty[1] & /*markedFeatures*/
    524288 && se !== ft && e(50, se = void 0), r.$$.dirty[1] & /*mapController, markedFeatures, picked*/
    1572872 && x && x.setMarkers(se, at), r.$$.dirty[0] & /*searchValue*/
    2 && e(14, xt = -1), r.$$.dirty[0] & /*reverseActive, listFeatures, focusedDelayed*/
    40961 | r.$$.dirty[1] & /*mapController*/
    8 && x && x.setEventHandler((b) => {
      switch (b.type) {
        case "mapClick":
          O && Ss(b.coordinates);
          break;
        case "markerClick":
          {
            const lt = ft == null ? void 0 : ft.find((Se) => Se.id === b.id);
            lt && Rs(lt);
          }
          break;
        case "markerMouseEnter":
          e(14, xt = Fi ? (ft == null ? void 0 : ft.findIndex((lt) => lt.id === b.id)) ?? -1 : -1);
          break;
        case "markerMouseLeave":
          e(14, xt = -1);
          break;
      }
    }), r.$$.dirty[0] & /*selectedItemIndex*/
    16384 | r.$$.dirty[1] & /*mapController*/
    8 && (x == null || x.setSelectedMarker(xt)), r.$$.dirty[0] & /*listFeatures, selectedItemIndex*/
    24576 && e(53, n = ft == null ? void 0 : ft[xt]), r.$$.dirty[0] & /*searchValue*/
    2 | r.$$.dirty[1] & /*mapController*/
    8) {
      const b = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(N);
      x == null || x.setReverseMarker(b ? [Number(b[1]), Number(b[2])] : void 0);
    }
    r.$$.dirty[1] & /*selected*/
    4194304 && ln("select", n), r.$$.dirty[1] & /*picked*/
    1048576 && ln("pick", at), r.$$.dirty[0] & /*focusedDelayed, listFeatures*/
    40960 && ln("optionsVisibilityChange", Fi && !!ft), r.$$.dirty[0] & /*listFeatures*/
    8192 && ln("featuresListed", ft), r.$$.dirty[1] & /*markedFeatures*/
    524288 && ln("featuresMarked", se), r.$$.dirty[0] & /*reverseActive*/
    1 && ln("reverseToggle", O), r.$$.dirty[0] & /*searchValue*/
    2 && ln("queryChange", N), r.$$.dirty[0] & /*reverseActive*/
    1 | r.$$.dirty[1] & /*mapController*/
    8 && x && x.indicateReverse(O);
  }, [
    O,
    N,
    o,
    l,
    h,
    d,
    p,
    P,
    L,
    V,
    M,
    kt,
    Mr,
    ft,
    xt,
    Fi,
    un,
    Ke,
    Or,
    Xu,
    Eo,
    ws,
    Co,
    Rs,
    a,
    u,
    c,
    f,
    g,
    _,
    m,
    y,
    v,
    I,
    x,
    w,
    R,
    B,
    A,
    z,
    U,
    j,
    ot,
    yt,
    k,
    Ze,
    Ie,
    Me,
    zu,
    Vu,
    se,
    at,
    ki,
    n,
    s,
    i,
    Na,
    Io,
    Yu,
    Uu,
    La,
    ba,
    So,
    Pa,
    wo,
    Bi,
    zi,
    Vi,
    Ta
  ];
}
let mm = class extends ms {
  constructor(t) {
    super(), _s(
      this,
      t,
      _m,
      pm,
      ps,
      {
        class: 2,
        apiKey: 24,
        bbox: 25,
        clearButtonTitle: 3,
        clearOnBlur: 26,
        collapsed: 4,
        country: 27,
        debounceSearch: 28,
        enableReverse: 5,
        errorMessage: 6,
        filter: 29,
        flyTo: 30,
        fuzzyMatch: 31,
        language: 32,
        limit: 33,
        mapController: 34,
        minLength: 35,
        noResultsMessage: 7,
        placeholder: 8,
        proximity: 36,
        reverseActive: 0,
        reverseButtonTitle: 9,
        searchValue: 1,
        showFullGeometry: 37,
        showPlaceType: 10,
        showResultsWhileTyping: 38,
        types: 39,
        zoom: 40,
        maxZoom: 41,
        apiUrl: 42,
        fetchParameters: 43,
        iconsBaseUrl: 11,
        adjustUrlQuery: 44,
        focus: 45,
        blur: 46,
        setQuery: 47,
        clearList: 48,
        clearMap: 49
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
  get clearList() {
    return this.$$.ctx[48];
  }
  get clearMap() {
    return this.$$.ctx[49];
  }
};
class Ql extends Oi {
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
      new Ql(this.hasProperties() ? this.getProperties() : null)
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
    this.geometryChangeKey_ && (er(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = tr(
      t,
      An.CHANGE,
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
    this.style_ = t, this.styleFunction_ = t ? ym(t) : void 0, this.changed();
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
function ym(r) {
  if (typeof r == "function")
    return r;
  let t;
  return Array.isArray(r) ? t = r : (oe(typeof /** @type {?} */
  r.getZIndex == "function", 41), t = [
    /** @type {import("./style/Style.js").default} */
    r
  ]), function() {
    return t;
  };
}
const Fr = Ql;
class $l {
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
    return new $l({
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
const Jo = $l;
function eg(r, t, e, n, i, s, o) {
  let a, u;
  const l = (e - t) / n;
  if (l === 1)
    a = t;
  else if (l === 2)
    a = t, u = i;
  else if (l !== 0) {
    let c = r[t], h = r[t + 1], f = 0;
    const g = [0];
    for (let _ = t + n; _ < e; _ += n) {
      const m = r[_], y = r[_ + 1];
      f += Math.sqrt((m - c) * (m - c) + (y - h) * (y - h)), g.push(f), c = m, h = y;
    }
    const d = i * f, p = hd(g, d);
    p < 0 ? (u = (d - g[-p - 2]) / (g[-p - 1] - g[-p - 2]), a = t + (-p - 2) * n) : a = t + p * n;
  }
  o = o > 1 ? o : 2, s = s || new Array(o);
  for (let c = 0; c < o; ++c)
    s[c] = a === void 0 ? NaN : u === void 0 ? r[a + c] : cn(r[a + c], r[a + n + c], u);
  return s;
}
function yl(r, t, e, n, i, s) {
  if (e == t)
    return null;
  let o;
  if (i < r[t + n - 1])
    return s ? (o = r.slice(t, t + n), o[n - 1] = i, o) : null;
  if (r[e - 1] < i)
    return s ? (o = r.slice(e - n, e), o[n - 1] = i, o) : null;
  if (i == r[t + n - 1])
    return r.slice(t, t + n);
  let a = t / n, u = e / n;
  for (; a < u; ) {
    const f = a + u >> 1;
    i < r[(f + 1) * n - 1] ? u = f : a = f + 1;
  }
  const l = r[a * n - 1];
  if (i == l)
    return r.slice((a - 1) * n, (a - 1) * n + n);
  const c = r[(a + 1) * n - 1], h = (i - l) / (c - l);
  o = [];
  for (let f = 0; f < n - 1; ++f)
    o.push(
      cn(
        r[(a - 1) * n + f],
        r[a * n + f],
        h
      )
    );
  return o.push(i), o;
}
function vm(r, t, e, n, i, s, o) {
  if (o)
    return yl(
      r,
      t,
      e[e.length - 1],
      n,
      i,
      s
    );
  let a;
  if (i < r[n - 1])
    return s ? (a = r.slice(0, n), a[n - 1] = i, a) : null;
  if (r[r.length - 1] < i)
    return s ? (a = r.slice(r.length - n), a[n - 1] = i, a) : null;
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    if (t != c) {
      if (i < r[t + n - 1])
        return null;
      if (i <= r[c - 1])
        return yl(
          r,
          t,
          c,
          n,
          i,
          !1
        );
      t = c;
    }
  }
  return null;
}
function ng(r, t, e, n) {
  let i = r[t], s = r[t + 1], o = 0;
  for (let a = t + n; a < e; a += n) {
    const u = r[a], l = r[a + 1];
    o += Math.sqrt((u - i) * (u - i) + (l - s) * (l - s)), i = u, s = l;
  }
  return o;
}
let Em = class vl extends ds {
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
    this.flatCoordinates ? zr(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const t = new vl(
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
  closestPointXY(t, e, n, i) {
    return i < gs(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Wl(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Hl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      n,
      i
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
    return Vf(
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
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, yl(
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
    return fi(
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
    return eg(
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
    return ng(
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
    return e.length = Kl(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new vl(e, "XY");
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
    return wu(
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Su(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const au = Em;
class tc {
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
    return new tc({
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
const uu = tc, qt = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
class ec {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = ou(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new ec({
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
    return vt();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getImage(t) {
    return vt();
  }
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getHitDetectionImage() {
    return vt();
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
    return vt();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return vt();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return vt();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return vt();
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
    this.scale_ = t, this.scaleArray_ = ou(t);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    vt();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    vt();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
    vt();
  }
}
const rg = ec;
function xr(r) {
  return Array.isArray(r) ? Of(r) : r;
}
class nc extends rg {
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
    const t = this.getScale(), e = new nc({
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
      const n = this.renderOptions_, i = ir(
        n.size * t,
        n.size * t
      );
      this.draw_(n, i, t), e = i.canvas, this.canvas_[t] = e;
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
    return qt.LOADED;
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
    let i = this.radius_, s = this.radius2_ === void 0 ? i : this.radius2_;
    if (i < s) {
      const w = i;
      i = s, s = w;
    }
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, u = s * Math.sin(a), l = Math.sqrt(s * s - u * u), c = i - l, h = Math.sqrt(u * u + c * c), f = h / u;
    if (t === "miter" && f <= n)
      return f * e;
    const g = e / 2 / f, d = e / 2 * (c / h), _ = Math.sqrt((i + g) * (i + g) + d * d) - i;
    if (this.radius2_ === void 0 || t === "bevel")
      return _ * 2;
    const m = i * Math.sin(a), y = Math.sqrt(i * i - m * m), v = s - y, x = Math.sqrt(m * m + v * v) / m;
    if (x <= n) {
      const w = x * e / 2 - s - i;
      return 2 * Math.max(_, w);
    }
    return _ * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let t = Ws, e = 0, n = null, i = 0, s, o = 0;
    this.stroke_ && (s = this.stroke_.getColor(), s === null && (s = qo), s = xr(s), o = this.stroke_.getWidth(), o === void 0 && (o = jo), n = this.stroke_.getLineDash(), i = this.stroke_.getLineDashOffset(), t = this.stroke_.getLineJoin(), t === void 0 && (t = Ws), e = this.stroke_.getMiterLimit(), e === void 0 && (e = Wo));
    const a = this.calculateLineJoinSize_(t, o, e), u = Math.max(this.radius_, this.radius2_ || 0), l = Math.ceil(2 * u + a);
    return {
      strokeStyle: s,
      strokeWidth: o,
      size: l,
      lineDash: n,
      lineDashOffset: i,
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
      let i = this.fill_.getColor();
      i === null && (i = Vr), e.fillStyle = xr(i), e.fill();
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
      if (typeof e == "string" && (e = eu(e)), e === null ? n = 1 : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1), n === 0) {
        const i = ir(
          t.size,
          t.size
        );
        this.hitDetectionCanvas_ = i.canvas, this.drawHitDetectionCanvas_(t, i);
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
      const i = this.radius2_ === void 0 ? n : this.radius2_;
      this.radius2_ !== void 0 && (e *= 2);
      const s = this.angle_ - Math.PI / 2, o = 2 * Math.PI / e;
      for (let a = 0; a < e; a++) {
        const u = s + a * o, l = a % 2 === 0 ? n : i;
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
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Vr, e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
}
const ig = nc;
class rc extends ig {
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
    const t = this.getScale(), e = new rc({
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
const sg = rc;
class Ru {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = uh, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
    t.clone()), new Ru({
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
    }) : this.geometryFunction_ = uh, this.geometry_ = t;
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
function xm(r) {
  let t;
  if (typeof r == "function")
    t = r;
  else {
    let e;
    Array.isArray(r) ? e = r : (oe(typeof /** @type {?} */
    r.getZIndex == "function", 41), e = [
      /** @type {Style} */
      r
    ]), t = function() {
      return e;
    };
  }
  return t;
}
let Zu = null;
function Cm(r, t) {
  if (!Zu) {
    const e = new Jo({
      color: "rgba(255,255,255,0.4)"
    }), n = new uu({
      color: "#3399CC",
      width: 1.25
    });
    Zu = [
      new Ru({
        image: new sg({
          fill: e,
          stroke: n,
          radius: 5
        }),
        fill: e,
        stroke: n
      })
    ];
  }
  return Zu;
}
function uh(r) {
  return r.getGeometry();
}
const lu = Ru, Im = "#333";
class ic {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = ou(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new Jo({ color: Im }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding;
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
    this.scale_ = t, this.scaleArray_ = ou(t !== void 0 ? t : 1);
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
const og = ic;
function Sm(r, t, e, n, i) {
  ag(r, t, e || 0, n || r.length - 1, i || wm);
}
function ag(r, t, e, n, i) {
  for (; n > e; ) {
    if (n - e > 600) {
      var s = n - e + 1, o = t - e + 1, a = Math.log(s), u = 0.5 * Math.exp(2 * a / 3), l = 0.5 * Math.sqrt(a * u * (s - u) / s) * (o - s / 2 < 0 ? -1 : 1), c = Math.max(e, Math.floor(t - o * u / s + l)), h = Math.min(n, Math.floor(t + (s - o) * u / s + l));
      ag(r, t, c, h, i);
    }
    var f = r[t], g = e, d = n;
    for (No(r, e, t), i(r[n], f) > 0 && No(r, e, n); g < d; ) {
      for (No(r, g, d), g++, d--; i(r[g], f) < 0; )
        g++;
      for (; i(r[d], f) > 0; )
        d--;
    }
    i(r[e], f) === 0 ? No(r, e, d) : (d++, No(r, d, n)), d <= t && (e = d + 1), t <= d && (n = d - 1);
  }
}
function No(r, t, e) {
  var n = r[t];
  r[t] = r[e], r[e] = n;
}
function wm(r, t) {
  return r < t ? -1 : r > t ? 1 : 0;
}
let ug = class {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const n = [];
    if (!Ba(t, e))
      return n;
    const i = this.toBBox, s = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], u = e.leaf ? i(a) : a;
        Ba(t, u) && (e.leaf ? n.push(a) : Ju(t, u) ? this._all(a, n) : s.push(a));
      }
      e = s.pop();
    }
    return n;
  }
  collides(t) {
    let e = this.data;
    if (!Ba(t, e))
      return !1;
    const n = [];
    for (; e; ) {
      for (let i = 0; i < e.children.length; i++) {
        const s = e.children[i], o = e.leaf ? this.toBBox(s) : s;
        if (Ba(t, o)) {
          if (e.leaf || Ju(t, o))
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
    const i = this.toBBox(t), s = [], o = [];
    let a, u, l;
    for (; n || s.length; ) {
      if (n || (n = s.pop(), u = s[s.length - 1], a = o.pop(), l = !0), n.leaf) {
        const c = Rm(t, n.children, e);
        if (c !== -1)
          return n.children.splice(c, 1), s.push(n), this._condense(s), this;
      }
      !l && !n.leaf && Ju(n, i) ? (s.push(n), o.push(a), a = 0, u = n, n = n.children[0]) : u ? (a++, n = u.children[a], l = !1) : n = null;
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
  _build(t, e, n, i) {
    const s = n - e + 1;
    let o = this._maxEntries, a;
    if (s <= o)
      return a = Os(t.slice(e, n + 1)), bs(a, this.toBBox), a;
    i || (i = Math.ceil(Math.log(s) / Math.log(o)), o = Math.ceil(s / Math.pow(o, i - 1))), a = Os([]), a.leaf = !1, a.height = i;
    const u = Math.ceil(s / o), l = u * Math.ceil(Math.sqrt(o));
    lh(t, e, n, l, this.compareMinX);
    for (let c = e; c <= n; c += l) {
      const h = Math.min(c + l - 1, n);
      lh(t, c, h, u, this.compareMinY);
      for (let f = c; f <= h; f += u) {
        const g = Math.min(f + u - 1, h);
        a.children.push(this._build(t, f, g, i - 1));
      }
    }
    return bs(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, n, i) {
    for (; i.push(e), !(e.leaf || i.length - 1 === n); ) {
      let s = 1 / 0, o = 1 / 0, a;
      for (let u = 0; u < e.children.length; u++) {
        const l = e.children[u], c = Ku(l), h = bm(t, l) - c;
        h < o ? (o = h, s = c < s ? c : s, a = l) : h === o && c < s && (s = c, a = l);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, n) {
    const i = n ? t : this.toBBox(t), s = [], o = this._chooseSubtree(i, this.data, e, s);
    for (o.children.push(t), Oo(o, i); e >= 0 && s[e].children.length > this._maxEntries; )
      this._split(s, e), e--;
    this._adjustParentBBoxes(i, s, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const n = t[e], i = n.children.length, s = this._minEntries;
    this._chooseSplitAxis(n, s, i);
    const o = this._chooseSplitIndex(n, s, i), a = Os(n.children.splice(o, n.children.length - o));
    a.height = n.height, a.leaf = n.leaf, bs(n, this.toBBox), bs(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(n, a);
  }
  _splitRoot(t, e) {
    this.data = Os([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, bs(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, n) {
    let i, s = 1 / 0, o = 1 / 0;
    for (let a = e; a <= n - e; a++) {
      const u = Mo(t, 0, a, this.toBBox), l = Mo(t, a, n, this.toBBox), c = Pm(u, l), h = Ku(u) + Ku(l);
      c < s ? (s = c, i = a, o = h < o ? h : o) : c === s && h < o && (o = h, i = a);
    }
    return i || n - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, n) {
    const i = t.leaf ? this.compareMinX : Nm, s = t.leaf ? this.compareMinY : Lm, o = this._allDistMargin(t, e, n, i), a = this._allDistMargin(t, e, n, s);
    o < a && t.children.sort(i);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, n, i) {
    t.children.sort(i);
    const s = this.toBBox, o = Mo(t, 0, e, s), a = Mo(t, n - e, n, s);
    let u = Ga(o) + Ga(a);
    for (let l = e; l < n - e; l++) {
      const c = t.children[l];
      Oo(o, t.leaf ? s(c) : c), u += Ga(o);
    }
    for (let l = n - e - 1; l >= e; l--) {
      const c = t.children[l];
      Oo(a, t.leaf ? s(c) : c), u += Ga(a);
    }
    return u;
  }
  _adjustParentBBoxes(t, e, n) {
    for (let i = n; i >= 0; i--)
      Oo(e[i], t);
  }
  _condense(t) {
    for (let e = t.length - 1, n; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (n = t[e - 1].children, n.splice(n.indexOf(t[e]), 1)) : this.clear() : bs(t[e], this.toBBox);
  }
};
function Rm(r, t, e) {
  if (!e)
    return t.indexOf(r);
  for (let n = 0; n < t.length; n++)
    if (e(r, t[n]))
      return n;
  return -1;
}
function bs(r, t) {
  Mo(r, 0, r.children.length, t, r);
}
function Mo(r, t, e, n, i) {
  i || (i = Os(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
  for (let s = t; s < e; s++) {
    const o = r.children[s];
    Oo(i, r.leaf ? n(o) : o);
  }
  return i;
}
function Oo(r, t) {
  return r.minX = Math.min(r.minX, t.minX), r.minY = Math.min(r.minY, t.minY), r.maxX = Math.max(r.maxX, t.maxX), r.maxY = Math.max(r.maxY, t.maxY), r;
}
function Nm(r, t) {
  return r.minX - t.minX;
}
function Lm(r, t) {
  return r.minY - t.minY;
}
function Ku(r) {
  return (r.maxX - r.minX) * (r.maxY - r.minY);
}
function Ga(r) {
  return r.maxX - r.minX + (r.maxY - r.minY);
}
function bm(r, t) {
  return (Math.max(t.maxX, r.maxX) - Math.min(t.minX, r.minX)) * (Math.max(t.maxY, r.maxY) - Math.min(t.minY, r.minY));
}
function Pm(r, t) {
  const e = Math.max(r.minX, t.minX), n = Math.max(r.minY, t.minY), i = Math.min(r.maxX, t.maxX), s = Math.min(r.maxY, t.maxY);
  return Math.max(0, i - e) * Math.max(0, s - n);
}
function Ju(r, t) {
  return r.minX <= t.minX && r.minY <= t.minY && t.maxX <= r.maxX && t.maxY <= r.maxY;
}
function Ba(r, t) {
  return t.minX <= r.maxX && t.minY <= r.maxY && t.maxX >= r.minX && t.maxY >= r.minY;
}
function Os(r) {
  return {
    children: r,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function lh(r, t, e, n, i) {
  const s = [t, e];
  for (; s.length; ) {
    if (e = s.pop(), t = s.pop(), e - t <= n)
      continue;
    const o = t + Math.ceil((e - t) / n / 2) * n;
    Sm(r, o, t, e, i), s.push(t, o, o, e);
  }
}
function Tm(r, t, e) {
  const n = (
    /** @type {HTMLImageElement} */
    r
  );
  let i = !0, s = !1, o = !1;
  const a = [
    Ja(n, An.LOAD, function() {
      o = !0, s || t();
    })
  ];
  return n.src && xd ? (s = !0, n.decode().then(function() {
    i && t();
  }).catch(function(u) {
    i && (o ? t() : e());
  })) : a.push(Ja(n, An.ERROR, e)), function() {
    i = !1, a.forEach(er);
  };
}
let Lo = null;
class Mm extends ff {
  /**
   * @param {HTMLImageElement|HTMLCanvasElement} image Image.
   * @param {string|undefined} src Src.
   * @param {import("../size.js").Size} size Size.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../ImageState.js").default} imageState Image state.
   * @param {import("../color.js").Color} color Color.
   */
  constructor(t, e, n, i, s, o) {
    super(), this.hitDetectionImage_ = null, this.image_ = t, this.crossOrigin_ = i, this.canvas_ = {}, this.color_ = o, this.unlisten_ = null, this.imageState_ = s, this.size_ = n, this.src_ = e, this.tainted_;
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
    if (this.tainted_ === void 0 && this.imageState_ === qt.LOADED) {
      Lo || (Lo = ir(1, 1, void 0, {
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
    this.dispatchEvent(An.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = qt.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = qt.LOADED, this.size_ ? (this.image_.width = this.size_[0], this.image_.height = this.size_[1]) : this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.dispatchChangeEvent_();
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
        const t = this.size_[0], e = this.size_[1], n = ir(t, e);
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
    if (this.imageState_ === qt.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = qt.LOADING;
      try {
        this.image_.src = this.src_;
      } catch {
        this.handleImageError_();
      }
      this.unlisten_ = Tm(
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
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== qt.LOADED)
      return;
    const e = this.image_, n = document.createElement("canvas");
    n.width = Math.ceil(e.width * t), n.height = Math.ceil(e.height * t);
    const i = n.getContext("2d");
    i.scale(t, t), i.drawImage(e, 0, 0), i.globalCompositeOperation = "multiply", i.fillStyle = Mf(this.color_), i.fillRect(0, 0, n.width / t, n.height / t), i.globalCompositeOperation = "destination-in", i.drawImage(e, 0, 0), this.canvas_[t] = n;
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
function Om(r, t, e, n, i, s) {
  let o = Gc.get(t, n, s);
  return o || (o = new Mm(r, t, e, n, i, s), Gc.set(t, n, s, o)), o;
}
function ch(r, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / r, n / t] : e !== void 0 ? e / r : n !== void 0 ? n / t : 1;
}
class sc extends rg {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {};
    const e = t.opacity !== void 0 ? t.opacity : 1, n = t.rotation !== void 0 ? t.rotation : 0, i = t.scale !== void 0 ? t.scale : 1, s = t.rotateWithView !== void 0 ? t.rotateWithView : !1;
    super({
      opacity: e,
      rotation: n,
      scale: i,
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
    const u = t.src !== void 0 ? qt.IDLE : qt.LOADED;
    if (this.color_ = t.color !== void 0 ? eu(t.color) : null, this.iconImage_ = Om(
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
              ch(
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
        ch(l, c, t.width, t.height)
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
    return this.initialOptions_ ? (e = this.initialOptions_.width, n = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new sc({
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
      const i = this.getSize();
      if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
        if (!i)
          return null;
        t = this.anchor_.slice(), this.anchorXUnits_ == "fraction" && (t[0] *= i[0]), this.anchorYUnits_ == "fraction" && (t[1] *= i[1]);
      }
      if (this.anchorOrigin_ != "top-left") {
        if (!i)
          return null;
        t === this.anchor_ && (t = this.anchor_.slice()), (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") && (t[0] = -t[0] + i[0]), (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") && (t[1] = -t[1] + i[1]);
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
    if (this.iconImage_.getImageState() == qt.LOADED)
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
    if (this.iconImage_.getImageState() == qt.LOADED)
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
    this.iconImage_.addEventListener(An.CHANGE, t);
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
    this.iconImage_.removeEventListener(An.CHANGE, t);
  }
}
const oc = sc;
function hh(r) {
  return new lu({
    fill: Qo(r, ""),
    stroke: $o(r, ""),
    text: Am(r),
    image: Dm(r)
  });
}
function Qo(r, t) {
  const e = r[t + "fill-color"];
  if (e)
    return new Jo({ color: e });
}
function $o(r, t) {
  const e = r[t + "stroke-width"], n = r[t + "stroke-color"];
  if (!(!e && !n))
    return new uu({
      width: e,
      color: n,
      lineCap: r[t + "stroke-line-cap"],
      lineJoin: r[t + "stroke-line-join"],
      lineDash: r[t + "stroke-line-dash"],
      lineDashOffset: r[t + "stroke-line-dash-offset"],
      miterLimit: r[t + "stroke-miter-limit"]
    });
}
function Am(r) {
  const t = r["text-value"];
  return t ? new og({
    text: t,
    font: r["text-font"],
    maxAngle: r["text-max-angle"],
    offsetX: r["text-offset-x"],
    offsetY: r["text-offset-y"],
    overflow: r["text-overflow"],
    placement: r["text-placement"],
    repeat: r["text-repeat"],
    scale: r["text-scale"],
    rotateWithView: r["text-rotate-with-view"],
    rotation: r["text-rotation"],
    textAlign: r["text-align"],
    justify: r["text-justify"],
    textBaseline: r["text-baseline"],
    padding: r["text-padding"],
    fill: Qo(r, "text-"),
    backgroundFill: Qo(r, "text-background-"),
    stroke: $o(r, "text-"),
    backgroundStroke: $o(r, "text-background-")
  }) : void 0;
}
function Dm(r) {
  const t = r["icon-src"], e = r["icon-img"];
  if (t || e)
    return new oc({
      src: t,
      img: e,
      imgSize: r["icon-img-size"],
      anchor: r["icon-anchor"],
      anchorOrigin: r["icon-anchor-origin"],
      anchorXUnits: r["icon-anchor-x-units"],
      anchorYUnits: r["icon-anchor-y-units"],
      color: r["icon-color"],
      crossOrigin: r["icon-cross-origin"],
      offset: r["icon-offset"],
      displacement: r["icon-displacement"],
      opacity: r["icon-opacity"],
      scale: r["icon-scale"],
      width: r["icon-width"],
      height: r["icon-height"],
      rotation: r["icon-rotation"],
      rotateWithView: r["icon-rotate-with-view"],
      size: r["icon-size"],
      declutterMode: r["icon-declutter-mode"]
    });
  const n = r["shape-points"];
  if (n) {
    const s = "shape-";
    return new ig({
      points: n,
      fill: Qo(r, s),
      stroke: $o(r, s),
      radius: r["shape-radius"],
      radius1: r["shape-radius1"],
      radius2: r["shape-radius2"],
      angle: r["shape-angle"],
      displacement: r["shape-displacement"],
      rotation: r["shape-rotation"],
      rotateWithView: r["shape-rotate-with-view"],
      scale: r["shape-scale"],
      declutterMode: r["shape-declutter-mode"]
    });
  }
  const i = r["circle-radius"];
  if (i) {
    const s = "circle-";
    return new sg({
      radius: i,
      fill: Qo(r, s),
      stroke: $o(r, s),
      displacement: r["circle-displacement"],
      scale: r["circle-scale"],
      rotation: r["circle-rotation"],
      rotateWithView: r["circle-rotate-with-view"],
      declutterMode: r["circle-declutter-mode"]
    });
  }
}
const fh = {
  RENDER_ORDER: "renderOrder"
};
class Fm extends m_ {
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
      this.get(fh.RENDER_ORDER)
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
    t.declutterTree || (t.declutterTree = new ug(9)), this.getRenderer().renderDeclutter(t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(t) {
    this.set(fh.RENDER_ORDER, t);
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
      e = Cm;
    else if (t === null)
      e = null;
    else if (typeof t == "function")
      e = t;
    else if (t instanceof lu)
      e = t;
    else if (Array.isArray(t)) {
      const n = t.length, i = new Array(n);
      for (let s = 0; s < n; ++s) {
        const o = t[s];
        o instanceof lu ? i[s] = o : i[s] = hh(o);
      }
      e = i;
    } else
      e = hh(t);
    this.style_ = e, this.styleFunction_ = t === null ? void 0 : xm(this.style_), this.changed();
  }
}
const km = Fm, ma = {
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
}, za = [ma.FILL], di = [ma.STROKE], ji = [ma.BEGIN_PATH], gh = [ma.CLOSE_PATH], K = ma;
class Gm {
  /**
   * Render a geometry with a custom renderer.
   *
   * @param {import("../geom/SimpleGeometry.js").default} geometry Geometry.
   * @param {import("../Feature.js").FeatureLike} feature Feature.
   * @param {Function} renderer Renderer.
   * @param {Function} hitDetectionRenderer Renderer.
   */
  drawCustom(t, e, n, i) {
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
const lg = Gm;
class Bm extends lg {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, i) {
    super(), this.tolerance = t, this.maxExtent = e, this.pixelRatio = i, this.maxLineWidth = 0, this.resolution = n, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_ = null, this.bufferedMaxExtent_ = null, this.instructions = [], this.coordinates = [], this.tmpCoordinate_ = [], this.hitDetectionInstructions = [], this.state = /** @type {import("../canvas.js").FillStrokeState} */
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
    const n = this.getBufferedMaxExtent(), i = this.tmpCoordinate_, s = this.coordinates;
    let o = s.length;
    for (let a = 0, u = t.length; a < u; a += e)
      i[0] = t[a], i[1] = t[a + 1], zd(n, i) && (s[o++] = i[0], s[o++] = i[1]);
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
  appendFlatLineCoordinates(t, e, n, i, s, o) {
    const a = this.coordinates;
    let u = a.length;
    const l = this.getBufferedMaxExtent();
    o && (e += i);
    let c = t[e], h = t[e + 1];
    const f = this.tmpCoordinate_;
    let g = !0, d, p, _;
    for (d = e + i; d < n; d += i)
      f[0] = t[d], f[1] = t[d + 1], _ = sl(l, f), _ !== p ? (g && (a[u++] = c, a[u++] = h, g = !1), a[u++] = f[0], a[u++] = f[1]) : _ === fe.INTERSECTING ? (a[u++] = f[0], a[u++] = f[1], g = !1) : g = !0, c = f[0], h = f[1], p = _;
    return (s && g || d === e + i) && (a[u++] = c, a[u++] = h), u;
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @param {Array<number>} builderEnds Builder ends.
   * @return {number} Offset.
   */
  drawCustomCoordinates_(t, e, n, i, s) {
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o], l = this.appendFlatLineCoordinates(
        t,
        e,
        u,
        i,
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
  drawCustom(t, e, n, i) {
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
        for (let d = 0, p = g.length; d < p; ++d) {
          const _ = [];
          f = this.drawCustomCoordinates_(
            u,
            f,
            g[d],
            o,
            _
          ), h.push(_);
        }
        this.instructions.push([
          K.CUSTOM,
          a,
          h,
          t,
          n,
          ll
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          h,
          t,
          i || n,
          ll
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
          i || n,
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
          fi
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          i || n,
          fi
        ]);
        break;
      case "MultiPoint":
        u = t.getFlatCoordinates(), l = this.appendFlatPointCoordinates(u, o), l > a && (this.instructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          n,
          fi
        ]), this.hitDetectionInstructions.push([
          K.CUSTOM,
          a,
          l,
          t,
          i || n,
          fi
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
          i || n
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
    let i, s, o = -1;
    for (e = 0; e < n; ++e)
      i = t[e], s = /** @type {import("./Instruction.js").default} */
      i[0], s == K.END_GEOMETRY ? o = e : s == K.BEGIN_GEOMETRY && (i[2] = e, fd(this.hitDetectionInstructions, o, e), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    const n = this.state;
    if (t) {
      const i = t.getColor();
      n.fillStyle = xr(
        i || Vr
      );
    } else
      n.fillStyle = void 0;
    if (e) {
      const i = e.getColor();
      n.strokeStyle = xr(
        i || qo
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
    const n = t.strokeStyle, i = t.lineCap, s = t.lineDash, o = t.lineDashOffset, a = t.lineJoin, u = t.lineWidth, l = t.miterLimit;
    (t.currentStrokeStyle != n || t.currentLineCap != i || s != t.currentLineDash && !go(t.currentLineDash, s) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != u || t.currentMiterLimit != l) && (n !== void 0 && e.call(this, t), t.currentStrokeStyle = n, t.currentLineCap = i, t.currentLineDash = s, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = u, t.currentMiterLimit = l);
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
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = Bd(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      zl(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
const ya = Bm;
class zm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, i) {
    super(t, e, n, i), this.hitDetectionImage_ = null, this.image_ = null, this.imagePixelRatio_ = void 0, this.anchorX_ = void 0, this.anchorY_ = void 0, this.height_ = void 0, this.opacity_ = void 0, this.originX_ = void 0, this.originY_ = void 0, this.rotateWithView_ = void 0, this.rotation_ = void 0, this.scale_ = void 0, this.width_ = void 0, this.declutterMode_ = void 0, this.declutterImageWithText_ = void 0;
  }
  /**
   * @param {import("../../geom/Point.js").default|import("../Feature.js").default} pointGeometry Point geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPoint(t, e) {
    if (!this.image_)
      return;
    this.beginGeometry(t, e);
    const n = t.getFlatCoordinates(), i = t.getStride(), s = this.coordinates.length, o = this.appendFlatPointCoordinates(n, i);
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
    const n = t.getFlatCoordinates(), i = t.getStride(), s = this.coordinates.length, o = this.appendFlatPointCoordinates(n, i);
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
    const n = t.getAnchor(), i = t.getSize(), s = t.getOrigin();
    this.imagePixelRatio_ = t.getPixelRatio(this.pixelRatio), this.anchorX_ = n[0], this.anchorY_ = n[1], this.hitDetectionImage_ = t.getHitDetectionImage(), this.image_ = t.getImage(this.pixelRatio), this.height_ = i[1], this.opacity_ = t.getOpacity(), this.originX_ = s[0], this.originY_ = s[1], this.rotateWithView_ = t.getRotateWithView(), this.rotation_ = t.getRotation(), this.scale_ = t.getScaleArray(), this.width_ = i[0], this.declutterMode_ = t.getDeclutterMode(), this.declutterImageWithText_ = e;
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
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   * @return {number} end.
   */
  drawFlatCoordinates_(t, e, n, i) {
    const s = this.coordinates.length, o = this.appendFlatLineCoordinates(
      t,
      e,
      n,
      i,
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
    const n = this.state, i = n.strokeStyle, s = n.lineWidth;
    if (i === void 0 || s === void 0)
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
      ji
    );
    const o = t.getFlatCoordinates(), a = t.getStride();
    this.drawFlatCoordinates_(
      o,
      0,
      o.length,
      a
    ), this.hitDetectionInstructions.push(di), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/MultiLineString.js").default|import("../Feature.js").default} multiLineStringGeometry MultiLineString geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawMultiLineString(t, e) {
    const n = this.state, i = n.strokeStyle, s = n.lineWidth;
    if (i === void 0 || s === void 0)
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
      ji
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
    this.hitDetectionInstructions.push(di), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(di), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(di), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(ji);
  }
}
const Ym = Xm;
class Um extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {Array<number>} ends Ends.
   * @param {number} stride Stride.
   * @private
   * @return {number} End.
   */
  drawFlatCoordinatess_(t, e, n, i) {
    const s = this.state, o = s.fillStyle !== void 0, a = s.strokeStyle !== void 0, u = n.length;
    this.instructions.push(ji), this.hitDetectionInstructions.push(ji);
    for (let l = 0; l < u; ++l) {
      const c = n[l], h = this.coordinates.length, f = this.appendFlatLineCoordinates(
        t,
        e,
        c,
        i,
        !0,
        !a
      ), g = [
        K.MOVE_TO_LINE_TO,
        h,
        f
      ];
      this.instructions.push(g), this.hitDetectionInstructions.push(g), a && (this.instructions.push(gh), this.hitDetectionInstructions.push(gh)), e = c;
    }
    return o && (this.instructions.push(za), this.hitDetectionInstructions.push(za)), a && (this.instructions.push(di), this.hitDetectionInstructions.push(di)), e;
  }
  /**
   * @param {import("../../geom/Circle.js").default} circleGeometry Circle geometry.
   * @param {import("../../Feature.js").default} feature Feature.
   */
  drawCircle(t, e) {
    const n = this.state, i = n.fillStyle, s = n.strokeStyle;
    if (i === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Vr
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
    this.instructions.push(ji, l), this.hitDetectionInstructions.push(ji, l), n.fillStyle !== void 0 && (this.instructions.push(za), this.hitDetectionInstructions.push(za)), n.strokeStyle !== void 0 && (this.instructions.push(di), this.hitDetectionInstructions.push(di)), this.endGeometry(e);
  }
  /**
   * @param {import("../../geom/Polygon.js").default|import("../Feature.js").default} polygonGeometry Polygon geometry.
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  drawPolygon(t, e) {
    const n = this.state, i = n.fillStyle, s = n.strokeStyle;
    if (i === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Vr
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
    const n = this.state, i = n.fillStyle, s = n.strokeStyle;
    if (i === void 0 && s === void 0)
      return;
    this.setFillStrokeStyles_(), this.beginGeometry(t, e), n.fillStyle !== void 0 && this.hitDetectionInstructions.push([
      K.SET_FILL_STYLE,
      Vr
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
      for (let n = 0, i = e.length; n < i; ++n)
        e[n] = Ui(e[n], t);
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
const dh = Um;
function Wm(r, t, e, n, i) {
  const s = [];
  let o = e, a = 0, u = t.slice(e, 2);
  for (; a < r && o + i < n; ) {
    const [l, c] = u.slice(-2), h = t[o + i], f = t[o + i + 1], g = Math.sqrt(
      (h - l) * (h - l) + (f - c) * (f - c)
    );
    if (a += g, a >= r) {
      const d = (r - a + g) / g, p = cn(l, h, d), _ = cn(c, f, d);
      u.push(p, _), s.push(u), u = [p, _], a == r && (o += i), a = 0;
    } else if (a < r)
      u.push(
        t[o + i],
        t[o + i + 1]
      ), o += i;
    else {
      const d = g - a, p = cn(l, h, d / g), _ = cn(c, f, d / g);
      u.push(p, _), s.push(u), u = [p, _], a = 0, o += i;
    }
  }
  return a > 0 && s.push(u), s;
}
function qm(r, t, e, n, i) {
  let s = e, o = e, a = 0, u = 0, l = e, c, h, f, g, d, p, _, m, y, v;
  for (h = e; h < n; h += i) {
    const I = t[h], x = t[h + 1];
    d !== void 0 && (y = I - d, v = x - p, g = Math.sqrt(y * y + v * v), _ !== void 0 && (u += f, c = Math.acos((_ * y + m * v) / (f * g)), c > r && (u > a && (a = u, s = l, o = h), u = 0, l = h - i)), f = g, _ = y, m = v), d = I, p = x;
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
class Hm extends ya {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, i) {
    super(t, e, n, i), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
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
    const n = this.textFillState_, i = this.textStrokeState_, s = this.textState_;
    if (this.text_ === "" || !s || !n && !i)
      return;
    const o = this.coordinates;
    let a = o.length;
    const u = t.getType();
    let l = null, c = t.getStride();
    if (s.placement === "line" && (u == "LineString" || u == "MultiLineString" || u == "Polygon" || u == "MultiPolygon")) {
      if (!Qn(this.getBufferedMaxExtent(), t.getExtent()))
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
        const p = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        h = [];
        for (let _ = 0, m = p.length; _ < m; ++_)
          h.push(p[_][0]);
      }
      this.beginGeometry(t, e);
      const f = s.repeat, g = f ? void 0 : s.textAlign;
      let d = 0;
      for (let p = 0, _ = h.length; p < _; ++p) {
        let m;
        f ? m = Wm(
          f * this.resolution,
          l,
          d,
          h[p],
          c
        ) : m = [l.slice(d, h[p])];
        for (let y = 0, v = m.length; y < v; ++y) {
          const I = m[y];
          let x = 0, w = I.length;
          if (g == null) {
            const L = qm(
              s.maxAngle,
              I,
              0,
              I.length,
              2
            );
            x = L[0], w = L[1];
          }
          for (let L = x; L < w; L += c)
            o.push(I[L], I[L + 1]);
          const P = o.length;
          d = h[p], this.drawChars_(a, P), a = P;
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
          const _ = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getFlatInteriorPoints()
          );
          l = [];
          for (let m = 0, y = _.length; m < y; m += 3)
            s.overflow || h.push(_[m + 2] / this.resolution), l.push(_[m], _[m + 1]);
          if (l.length === 0)
            return;
          c = 2;
          break;
      }
      const f = this.appendFlatPointCoordinates(l, c);
      if (f === a)
        return;
      if (h && (f - a) / 2 !== l.length / c) {
        let _ = a / 2;
        h = h.filter((m, y) => {
          const v = o[(_ + y) * 2] === l[y * c] && o[(_ + y) * 2 + 1] === l[y * c + 1];
          return v || --_, v;
        });
      }
      this.saveTextStates_(), (s.backgroundFill || s.backgroundStroke) && (this.setFillStrokeStyle(
        s.backgroundFill,
        s.backgroundStroke
      ), s.backgroundFill && (this.updateFillStyle(this.state, this.createFill), this.hitDetectionInstructions.push(this.createFill(this.state))), s.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
      let g = s.padding;
      if (g != qi && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let _ = s.padding[0], m = s.padding[1], y = s.padding[2], v = s.padding[3];
        s.scale[0] < 0 && (m = -m, v = -v), s.scale[1] < 0 && (_ = -_, y = -y), g = [_, m, y, v];
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
        g == qi ? qi : g.map(function(_) {
          return _ * d;
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
      const p = 1 / d;
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
        [p, p],
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
    const t = this.textStrokeState_, e = this.textState_, n = this.textFillState_, i = this.strokeKey_;
    t && (i in this.strokeStates || (this.strokeStates[i] = {
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
      textBaseline: e.textBaseline || iu,
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
    const n = this.textStrokeState_, i = this.textState_, s = this.strokeKey_, o = this.textKey_, a = this.fillKey_;
    this.saveTextStates_();
    const u = this.pixelRatio, l = ko[i.textBaseline], c = this.textOffsetY_ * u, h = this.text_, f = n ? n.lineWidth * Math.abs(i.scale[0]) / 2 : 0;
    this.instructions.push([
      K.DRAW_CHARS,
      t,
      e,
      l,
      i.overflow,
      a,
      i.maxAngle,
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
      i.overflow,
      a,
      i.maxAngle,
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
    let n, i, s;
    if (!t)
      this.text_ = "";
    else {
      const o = t.getFill();
      o ? (i = this.textFillState_, i || (i = /** @type {import("../canvas.js").FillState} */
      {}, this.textFillState_ = i), i.fillStyle = xr(
        o.getColor() || Vr
      )) : (i = null, this.textFillState_ = i);
      const a = t.getStroke();
      if (!a)
        s = null, this.textStrokeState_ = s;
      else {
        s = this.textStrokeState_, s || (s = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = s);
        const d = a.getLineDash(), p = a.getLineDashOffset(), _ = a.getWidth(), m = a.getMiterLimit();
        s.lineCap = a.getLineCap() || ru, s.lineDash = d ? d.slice() : Yo, s.lineDashOffset = p === void 0 ? Uo : p, s.lineJoin = a.getLineJoin() || Ws, s.lineWidth = _ === void 0 ? jo : _, s.miterLimit = m === void 0 ? Wo : m, s.strokeStyle = xr(
          a.getColor() || qo
        );
      }
      n = this.textState_;
      const u = t.getFont() || qf;
      E_(u);
      const l = t.getScaleArray();
      n.overflow = t.getOverflow(), n.font = u, n.maxAngle = t.getMaxAngle(), n.placement = t.getPlacement(), n.textAlign = t.getTextAlign(), n.repeat = t.getRepeat(), n.justify = t.getJustify(), n.textBaseline = t.getTextBaseline() || iu, n.backgroundFill = t.getBackgroundFill(), n.backgroundStroke = t.getBackgroundStroke(), n.padding = t.getPadding() || qi, n.scale = l === void 0 ? [1, 1] : l;
      const c = t.getOffsetX(), h = t.getOffsetY(), f = t.getRotateWithView(), g = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = h === void 0 ? 0 : h, this.textRotateWithView_ = f === void 0 ? !1 : f, this.textRotation_ = g === void 0 ? 0 : g, this.strokeKey_ = s ? (typeof s.strokeStyle == "string" ? s.strokeStyle : ge(s.strokeStyle)) + s.lineCap + s.lineDashOffset + "|" + s.lineWidth + s.lineJoin + s.miterLimit + "[" + s.lineDash.join() + "]" : "", this.textKey_ = n.font + n.scale + (n.textAlign || "?") + (n.repeat || "?") + (n.justify || "?") + (n.textBaseline || "?"), this.fillKey_ = i ? typeof i.fillStyle == "string" ? i.fillStyle : "|" + ge(i.fillStyle) : "";
    }
    this.declutterImageWithText_ = e;
  }
}
const jm = {
  Circle: dh,
  Default: ya,
  Image: Vm,
  LineString: Ym,
  Polygon: dh,
  Text: Hm
};
class Zm {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Max extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, i) {
    this.tolerance_ = t, this.maxExtent_ = e, this.pixelRatio_ = i, this.resolution_ = n, this.buildersByZIndex_ = {};
  }
  /**
   * @return {!Object<string, !Object<import("../canvas.js").BuilderType, import("./Builder.js").SerializableInstructions>>} The serializable instructions
   */
  finish() {
    const t = {};
    for (const e in this.buildersByZIndex_) {
      t[e] = t[e] || {};
      const n = this.buildersByZIndex_[e];
      for (const i in n) {
        const s = n[i].finish();
        t[e][i] = s;
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
    let i = this.buildersByZIndex_[n];
    i === void 0 && (i = {}, this.buildersByZIndex_[n] = i);
    let s = i[e];
    if (s === void 0) {
      const o = jm[e];
      s = new o(
        this.tolerance_,
        this.maxExtent_,
        this.resolution_,
        this.pixelRatio_
      ), i[e] = s;
    }
    return s;
  }
}
const ph = Zm;
class Km extends gf {
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
    return vt();
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
    return vt();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(t, e) {
    return vt();
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
      (i, s) => {
        const o = this.loadedTileCallback.bind(this, n, i);
        return t.forEachLoadedTile(e, i, s, o);
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
  forEachFeatureAtCoordinate(t, e, n, i, s) {
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
    t.target.getState() === qt.LOADED && this.renderIfReadyAndVisible();
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
    return e != qt.LOADED && e != qt.ERROR && t.addEventListener(An.CHANGE, this.boundHandleImageChange_), e == qt.IDLE && (t.load(), e = t.getState()), e == qt.LOADED;
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
const Jm = Km, _h = [];
let As = null;
function Qm() {
  As = ir(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class $m extends Jm {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = _i(), this.pixelTransform = _i(), this.inversePixelTransform = _i(), this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(t, e, n) {
    As || Qm(), As.clearRect(0, 0, 1, 1);
    let i;
    try {
      As.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), i = As.getImageData(0, 0, 1, 1).data;
    } catch {
      return As = null, null;
    }
    return i;
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
    const i = this.getLayer().getClassName();
    let s, o;
    if (t && t.className === i && (!n || t && t.style.backgroundColor && go(
      eu(t.style.backgroundColor),
      eu(n)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused && (this.container = null, this.context = null, this.containerReused = !1), !this.container) {
      s = document.createElement("div"), s.className = i;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = ir();
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
    const i = If(n), s = Sf(n), o = Cf(n), a = xf(n);
    Je(e.coordinateToPixelTransform, i), Je(e.coordinateToPixelTransform, s), Je(e.coordinateToPixelTransform, o), Je(e.coordinateToPixelTransform, a);
    const u = this.inversePixelTransform;
    Je(u, i), Je(u, s), Je(u, o), Je(u, a), t.save(), t.beginPath(), t.moveTo(Math.round(i[0]), Math.round(i[1])), t.lineTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
  }
  /**
   * @param {import("../../render/EventType.js").default} type Event type.
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @private
   */
  dispatchRenderEvent_(t, e, n) {
    const i = this.getLayer();
    if (i.hasListener(t)) {
      const s = new v_(
        t,
        this.inversePixelTransform,
        n,
        e
      );
      i.dispatchEvent(s);
    }
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  preRender(t, e) {
    this.frameState = e, this.dispatchRenderEvent_(ul.PRERENDER, t, e);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(t, e) {
    this.dispatchRenderEvent_(ul.POSTRENDER, t, e);
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
  getRenderTransform(t, e, n, i, s, o, a) {
    const u = s / 2, l = o / 2, c = i / e, h = -c, f = -t[0] + a, g = -t[1];
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
const ty = $m;
function ey(r, t, e, n, i, s, o, a, u, l, c, h) {
  let f = r[t], g = r[t + 1], d = 0, p = 0, _ = 0, m = 0;
  function y() {
    d = f, p = g, t += n, f = r[t], g = r[t + 1], m += _, _ = Math.sqrt((f - d) * (f - d) + (g - p) * (g - p));
  }
  do
    y();
  while (t < e - n && m + _ < s);
  let v = _ === 0 ? 0 : (s - m) / _;
  const I = cn(d, f, v), x = cn(p, g, v), w = t - n, P = m, L = s + a * u(l, i, c);
  for (; t < e - n && m + _ < L; )
    y();
  v = _ === 0 ? 0 : (L - m) / _;
  const R = cn(d, f, v), O = cn(p, g, v);
  let V;
  if (h) {
    const z = [I, x, R, O];
    Af(z, 0, 4, 2, h, z, z), V = z[0] > z[2];
  } else
    V = I > R;
  const N = Math.PI, B = [], M = w + n === t;
  t = w, _ = 0, m = P, f = r[t], g = r[t + 1];
  let A;
  if (M) {
    y(), A = Math.atan2(g - p, f - d), V && (A += A > 0 ? -N : N);
    const z = (R + I) / 2, U = (O + x) / 2;
    return B[0] = [z, U, (L - s) / 2, A, i], B;
  }
  i = i.replace(/\n/g, " ");
  for (let z = 0, U = i.length; z < U; ) {
    y();
    let j = Math.atan2(g - p, f - d);
    if (V && (j += j > 0 ? -N : N), A !== void 0) {
      let Ie = j - A;
      if (Ie += Ie > N ? -2 * N : Ie < -N ? 2 * N : 0, Math.abs(Ie) > o)
        return null;
    }
    A = j;
    const ot = z;
    let yt = 0;
    for (; z < U; ++z) {
      const Ie = V ? U - z - 1 : z, Me = a * u(l, i[Ie], c);
      if (t + n < e && m + _ < s + yt + Me / 2)
        break;
      yt += Me;
    }
    if (z === ot)
      continue;
    const kt = V ? i.substring(U - ot, U - z) : i.substring(ot, z);
    v = _ === 0 ? 0 : (s + yt / 2 - m) / _;
    const k = cn(d, f, v), Ze = cn(p, g, v);
    B.push([k, Ze, yt / 2, j, kt]), s += yt;
  }
  return B;
}
const Ps = Qi(), oi = [], kr = [], Gr = [], ai = [];
function mh(r) {
  return r[3].declutterBox;
}
const ny = new RegExp(
  /* eslint-disable prettier/prettier */
  "[" + String.fromCharCode(1425) + "-" + String.fromCharCode(2303) + String.fromCharCode(64285) + "-" + String.fromCharCode(65023) + String.fromCharCode(65136) + "-" + String.fromCharCode(65276) + String.fromCharCode(67584) + "-" + String.fromCharCode(69631) + String.fromCharCode(124928) + "-" + String.fromCharCode(126975) + "]"
  /* eslint-enable prettier/prettier */
);
function yh(r, t) {
  return (t === "start" || t === "end") && !ny.test(r) && (t = t === "start" ? "left" : "right"), ko[t];
}
function ry(r, t, e) {
  return e > 0 && r.push(`
`, ""), r.push(t, ""), r;
}
class iy {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(t, e, n, i) {
    this.overlaps = n, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = i.instructions, this.coordinates = i.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = _i(), this.hitDetectionInstructions = i.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = i.fillStates || {}, this.strokeStates = i.strokeStates || {}, this.textStates = i.textStates || {}, this.widths_ = {}, this.labels_ = {};
  }
  /**
   * @param {string|Array<string>} text Text.
   * @param {string} textKey Text style key.
   * @param {string} fillKey Fill style key.
   * @param {string} strokeKey Stroke style key.
   * @return {import("../canvas.js").Label} Label.
   */
  createLabel(t, e, n, i) {
    const s = t + e + n + i;
    if (this.labels_[s])
      return this.labels_[s];
    const o = i ? this.strokeStates[i] : null, a = n ? this.fillStates[n] : null, u = this.textStates[e], l = this.pixelRatio, c = [
      u.scale[0] * l,
      u.scale[1] * l
    ], h = Array.isArray(t), f = u.justify ? ko[u.justify] : yh(
      Array.isArray(t) ? t[0] : t,
      u.textAlign || Ho
    ), g = i && o.lineWidth ? o.lineWidth : 0, d = h ? t : t.split(`
`).reduce(ry, []), { width: p, height: _, widths: m, heights: y, lineWidths: v } = C_(
      u,
      d
    ), I = p + g, x = [], w = (I + 2) * c[0], P = (_ + g) * c[1], L = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: P < 0 ? Math.floor(P) : Math.ceil(P),
      contextInstructions: x
    };
    (c[0] != 1 || c[1] != 1) && x.push("scale", c), i && (x.push("strokeStyle", o.strokeStyle), x.push("lineWidth", g), x.push("lineCap", o.lineCap), x.push("lineJoin", o.lineJoin), x.push("miterLimit", o.miterLimit), x.push("setLineDash", [o.lineDash]), x.push("lineDashOffset", o.lineDashOffset)), n && x.push("fillStyle", a.fillStyle), x.push("textBaseline", "middle"), x.push("textAlign", "center");
    const R = 0.5 - f;
    let O = f * I + R * g;
    const V = [], N = [];
    let B = 0, M = 0, A = 0, z = 0, U;
    for (let j = 0, ot = d.length; j < ot; j += 2) {
      const yt = d[j];
      if (yt === `
`) {
        M += B, B = 0, O = f * I + R * g, ++z;
        continue;
      }
      const kt = d[j + 1] || u.font;
      kt !== U && (i && V.push("font", kt), n && N.push("font", kt), U = kt), B = Math.max(B, y[A]);
      const k = [
        yt,
        O + R * m[A] + f * (m[A] - v[z]),
        0.5 * (g + B) + M
      ];
      O += m[A], i && V.push("strokeText", k), n && N.push("fillText", k), ++A;
    }
    return Array.prototype.push.apply(x, V), Array.prototype.push.apply(x, N), this.labels_[s] = L, L;
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
  replayTextBackground_(t, e, n, i, s, o, a) {
    t.beginPath(), t.moveTo.apply(t, e), t.lineTo.apply(t, n), t.lineTo.apply(t, i), t.lineTo.apply(t, s), t.lineTo.apply(t, e), o && (this.alignFill_ = /** @type {boolean} */
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
  calculateImageOrLabelDimensions_(t, e, n, i, s, o, a, u, l, c, h, f, g, d, p, _) {
    a *= f[0], u *= f[1];
    let m = n - a, y = i - u;
    const v = s + l > t ? t - l : s, I = o + c > e ? e - c : o, x = d[3] + v * f[0] + d[1], w = d[0] + I * f[1] + d[2], P = m - d[3], L = y - d[0];
    (p || h !== 0) && (oi[0] = P, ai[0] = P, oi[1] = L, kr[1] = L, kr[0] = P + x, Gr[0] = kr[0], Gr[1] = L + w, ai[1] = Gr[1]);
    let R;
    return h !== 0 ? (R = _a(
      _i(),
      n,
      i,
      1,
      1,
      h,
      -n,
      -i
    ), Je(R, oi), Je(R, kr), Je(R, Gr), Je(R, ai), $i(
      Math.min(oi[0], kr[0], Gr[0], ai[0]),
      Math.min(oi[1], kr[1], Gr[1], ai[1]),
      Math.max(oi[0], kr[0], Gr[0], ai[0]),
      Math.max(oi[1], kr[1], Gr[1], ai[1]),
      Ps
    )) : $i(
      Math.min(P, P + x),
      Math.min(L, L + w),
      Math.max(P, P + x),
      Math.max(L, L + w),
      Ps
    ), g && (m = Math.round(m), y = Math.round(y)), {
      drawImageX: m,
      drawImageY: y,
      drawImageW: v,
      drawImageH: I,
      originX: l,
      originY: c,
      declutterBox: {
        minX: Ps[0],
        minY: Ps[1],
        maxX: Ps[2],
        maxY: Ps[3],
        value: _
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
  replayImageOrLabel_(t, e, n, i, s, o, a) {
    const u = !!(o || a), l = i.declutterBox, c = t.canvas, h = a ? a[2] * i.scale[0] / 2 : 0;
    return l.minX - h <= c.width / e && l.maxX + h >= 0 && l.minY - h <= c.height / e && l.maxY + h >= 0 && (u && this.replayTextBackground_(
      t,
      oi,
      kr,
      Gr,
      ai,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), I_(
      t,
      i.canvasTransform,
      s,
      n,
      i.originX,
      i.originY,
      i.drawImageW,
      i.drawImageH,
      i.drawImageX,
      i.drawImageY,
      i.scale
    )), !0;
  }
  /**
   * @private
   * @param {CanvasRenderingContext2D} context Context.
   */
  fill_(t) {
    if (this.alignFill_) {
      const e = Je(this.renderedTransform_, [0, 0]), n = 512 * this.pixelRatio;
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
  drawLabelWithPointPlacement_(t, e, n, i) {
    const s = this.textStates[e], o = this.createLabel(t, e, i, n), a = this.strokeStates[n], u = this.pixelRatio, l = yh(
      Array.isArray(t) ? t[0] : t,
      s.textAlign || Ho
    ), c = ko[s.textBaseline || iu], h = a && a.lineWidth ? a.lineWidth : 0, f = o.width / u - 2 * s.scale[0], g = l * f + 2 * (0.5 - l) * h, d = c * o.height / u + 2 * (0.5 - c) * h;
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
  execute_(t, e, n, i, s, o, a, u) {
    let l;
    this.pixelCoordinates_ && go(n, this.renderedTransform_) ? l = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l = Ji(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      n,
      this.pixelCoordinates_
    ), mp(this.renderedTransform_, n));
    let c = 0;
    const h = i.length;
    let f = 0, g, d, p, _, m, y, v, I, x, w, P, L, R = 0, O = 0, V = null, N = null;
    const B = this.coordinateCache_, M = this.viewRotation_, A = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12, z = (
      /** @type {import("../../render.js").State} */
      {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: M
      }
    ), U = this.instructions != i || this.overlaps ? 0 : 200;
    let j, ot, yt, kt;
    for (; c < h; ) {
      const k = i[c];
      switch (
        /** @type {import("./Instruction.js").default} */
        k[0]
      ) {
        case K.BEGIN_GEOMETRY:
          j = /** @type {import("../../Feature.js").FeatureLike} */
          k[1], kt = k[3], j.getGeometry() ? a !== void 0 && !Qn(a, kt.getExtent()) ? c = /** @type {number} */
          k[2] + 1 : ++c : c = /** @type {number} */
          k[2];
          break;
        case K.BEGIN_PATH:
          R > U && (this.fill_(t), R = 0), O > U && (t.stroke(), O = 0), !R && !O && (t.beginPath(), _ = NaN, m = NaN), ++c;
          break;
        case K.CIRCLE:
          f = /** @type {number} */
          k[1];
          const Ie = l[f], Me = l[f + 1], zu = l[f + 2], Vu = l[f + 3], Mr = zu - Ie, ft = Vu - Me, se = Math.sqrt(Mr * Mr + ft * ft);
          t.moveTo(Ie + se, Me), t.arc(Ie, Me, se, 0, 2 * Math.PI, !0), ++c;
          break;
        case K.CLOSE_PATH:
          t.closePath(), ++c;
          break;
        case K.CUSTOM:
          f = /** @type {number} */
          k[1], g = k[2];
          const at = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            k[3]
          ), Ra = k[4], un = k.length == 6 ? k[5] : void 0;
          z.geometry = at, z.feature = j, c in B || (B[c] = []);
          const xt = B[c];
          un ? un(l, f, g, 2, xt) : (xt[0] = l[f], xt[1] = l[f + 1], xt.length = 2), Ra(xt, z), ++c;
          break;
        case K.DRAW_IMAGE:
          f = /** @type {number} */
          k[1], g = /** @type {number} */
          k[2], I = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          k[3], d = /** @type {number} */
          k[4], p = /** @type {number} */
          k[5];
          let Ke = (
            /** @type {number} */
            k[6]
          );
          const Is = (
            /** @type {number} */
            k[7]
          ), Or = (
            /** @type {number} */
            k[8]
          ), ni = (
            /** @type {number} */
            k[9]
          ), Fi = (
            /** @type {boolean} */
            k[10]
          );
          let ki = (
            /** @type {number} */
            k[11]
          );
          const Xu = (
            /** @type {import("../../size.js").Size} */
            k[12]
          );
          let ln = (
            /** @type {number} */
            k[13]
          );
          const Eo = (
            /** @type {"declutter"|"obstacle"|"none"|undefined} */
            k[14]
          ), ri = (
            /** @type {import("../canvas.js").DeclutterImageWithText} */
            k[15]
          );
          if (!I && k.length >= 20) {
            x = /** @type {string} */
            k[19], w = /** @type {string} */
            k[20], P = /** @type {string} */
            k[21], L = /** @type {string} */
            k[22];
            const lt = this.drawLabelWithPointPlacement_(
              x,
              w,
              P,
              L
            );
            I = lt.label, k[3] = I;
            const Se = (
              /** @type {number} */
              k[23]
            );
            d = (lt.anchorX - Se) * this.pixelRatio, k[4] = d;
            const Gt = (
              /** @type {number} */
              k[24]
            );
            p = (lt.anchorY - Gt) * this.pixelRatio, k[5] = p, Ke = I.height, k[6] = Ke, ln = I.width, k[13] = ln;
          }
          let Gi;
          k.length > 25 && (Gi = /** @type {number} */
          k[25]);
          let xo, Ss, ws;
          k.length > 17 ? (xo = /** @type {Array<number>} */
          k[16], Ss = /** @type {boolean} */
          k[17], ws = /** @type {boolean} */
          k[18]) : (xo = qi, Ss = !1, ws = !1), Fi && A ? ki += M : !Fi && !A && (ki -= M);
          let Co = 0;
          for (; f < g; f += 2) {
            if (Gi && Gi[Co++] < ln / this.pixelRatio)
              continue;
            const lt = this.calculateImageOrLabelDimensions_(
              I.width,
              I.height,
              l[f],
              l[f + 1],
              ln,
              Ke,
              d,
              p,
              Or,
              ni,
              ki,
              Xu,
              s,
              xo,
              Ss || ws,
              j
            ), Se = [
              t,
              e,
              I,
              lt,
              Is,
              Ss ? (
                /** @type {Array<*>} */
                V
              ) : null,
              ws ? (
                /** @type {Array<*>} */
                N
              ) : null
            ];
            if (u) {
              if (Eo === "none")
                continue;
              if (Eo === "obstacle") {
                u.insert(lt.declutterBox);
                continue;
              } else {
                let Gt, Lt;
                if (ri) {
                  const bt = g - f;
                  if (!ri[bt]) {
                    ri[bt] = Se;
                    continue;
                  }
                  if (Gt = ri[bt], delete ri[bt], Lt = mh(Gt), u.collides(Lt))
                    continue;
                }
                if (u.collides(lt.declutterBox))
                  continue;
                Gt && (u.insert(Lt), this.replayImageOrLabel_.apply(this, Gt)), u.insert(lt.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Se);
          }
          ++c;
          break;
        case K.DRAW_CHARS:
          const Rs = (
            /** @type {number} */
            k[1]
          ), Na = (
            /** @type {number} */
            k[2]
          ), Io = (
            /** @type {number} */
            k[3]
          ), Yu = (
            /** @type {number} */
            k[4]
          );
          L = /** @type {string} */
          k[5];
          const Uu = (
            /** @type {number} */
            k[6]
          ), La = (
            /** @type {number} */
            k[7]
          ), ba = (
            /** @type {number} */
            k[8]
          );
          P = /** @type {string} */
          k[9];
          const So = (
            /** @type {number} */
            k[10]
          );
          x = /** @type {string} */
          k[11], w = /** @type {string} */
          k[12];
          const Pa = [
            /** @type {number} */
            k[13],
            /** @type {number} */
            k[13]
          ], wo = this.textStates[w], Bi = wo.font, zi = [
            wo.scale[0] * La,
            wo.scale[1] * La
          ];
          let Vi;
          Bi in this.widths_ ? Vi = this.widths_[Bi] : (Vi = {}, this.widths_[Bi] = Vi);
          const Ta = ng(l, Rs, Na, 2), b = Math.abs(zi[0]) * Zc(Bi, x, Vi);
          if (Yu || b <= Ta) {
            const lt = this.textStates[w].textAlign, Se = (Ta - b) * ko[lt], Gt = ey(
              l,
              Rs,
              Na,
              2,
              x,
              Se,
              Uu,
              Math.abs(zi[0]),
              Zc,
              Bi,
              Vi,
              A ? 0 : this.viewRotation_
            );
            t:
              if (Gt) {
                const Lt = [];
                let bt, Ar, Xi, he, we;
                if (P)
                  for (bt = 0, Ar = Gt.length; bt < Ar; ++bt) {
                    we = Gt[bt], Xi = /** @type {string} */
                    we[4], he = this.createLabel(Xi, w, "", P), d = /** @type {number} */
                    we[2] + (zi[0] < 0 ? -So : So), p = Io * he.height + (0.5 - Io) * 2 * So * zi[1] / zi[0] - ba;
                    const Dr = this.calculateImageOrLabelDimensions_(
                      he.width,
                      he.height,
                      we[0],
                      we[1],
                      he.width,
                      he.height,
                      d,
                      p,
                      0,
                      0,
                      we[3],
                      Pa,
                      !1,
                      qi,
                      !1,
                      j
                    );
                    if (u && u.collides(Dr.declutterBox))
                      break t;
                    Lt.push([
                      t,
                      e,
                      he,
                      Dr,
                      1,
                      null,
                      null
                    ]);
                  }
                if (L)
                  for (bt = 0, Ar = Gt.length; bt < Ar; ++bt) {
                    we = Gt[bt], Xi = /** @type {string} */
                    we[4], he = this.createLabel(Xi, w, L, ""), d = /** @type {number} */
                    we[2], p = Io * he.height - ba;
                    const Dr = this.calculateImageOrLabelDimensions_(
                      he.width,
                      he.height,
                      we[0],
                      we[1],
                      he.width,
                      he.height,
                      d,
                      p,
                      0,
                      0,
                      we[3],
                      Pa,
                      !1,
                      qi,
                      !1,
                      j
                    );
                    if (u && u.collides(Dr.declutterBox))
                      break t;
                    Lt.push([
                      t,
                      e,
                      he,
                      Dr,
                      1,
                      null,
                      null
                    ]);
                  }
                u && u.load(Lt.map(mh));
                for (let Dr = 0, sd = Lt.length; Dr < sd; ++Dr)
                  this.replayImageOrLabel_.apply(this, Lt[Dr]);
              }
          }
          ++c;
          break;
        case K.END_GEOMETRY:
          if (o !== void 0) {
            j = /** @type {import("../../Feature.js").FeatureLike} */
            k[1];
            const lt = o(j, kt);
            if (lt)
              return lt;
          }
          ++c;
          break;
        case K.FILL:
          U ? R++ : this.fill_(t), ++c;
          break;
        case K.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          k[1], g = /** @type {number} */
          k[2], ot = l[f], yt = l[f + 1], y = ot + 0.5 | 0, v = yt + 0.5 | 0, (y !== _ || v !== m) && (t.moveTo(ot, yt), _ = y, m = v), f += 2; f < g; f += 2)
            ot = l[f], yt = l[f + 1], y = ot + 0.5 | 0, v = yt + 0.5 | 0, (f == g - 2 || y !== _ || v !== m) && (t.lineTo(ot, yt), _ = y, m = v);
          ++c;
          break;
        case K.SET_FILL_STYLE:
          V = k, this.alignFill_ = k[2], R && (this.fill_(t), R = 0, O && (t.stroke(), O = 0)), t.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          k[1], ++c;
          break;
        case K.SET_STROKE_STYLE:
          N = k, O && (t.stroke(), O = 0), this.setStrokeStyle_(
            t,
            /** @type {Array<*>} */
            k
          ), ++c;
          break;
        case K.STROKE:
          U ? O++ : t.stroke(), ++c;
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
  execute(t, e, n, i, s, o) {
    this.viewRotation_ = i, this.execute_(
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
  executeHitDetection(t, e, n, i, s) {
    return this.viewRotation_ = n, this.execute_(
      t,
      1,
      e,
      this.hitDetectionInstructions,
      !0,
      i,
      s
    );
  }
}
const sy = iy, Qu = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class oy {
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
  constructor(t, e, n, i, s, o) {
    this.maxExtent_ = t, this.overlaps_ = i, this.pixelRatio_ = n, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = _i(), this.createExecutors_(s);
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
      const i = t[e];
      for (const s in i) {
        const o = i[s];
        n[s] = new sy(
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
      for (let i = 0, s = t.length; i < s; ++i)
        if (t[i] in n)
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
  forEachFeatureAtCoordinate(t, e, n, i, s, o) {
    i = Math.round(i);
    const a = i * 2 + 1, u = _a(
      this.hitDetectionTransform_,
      i + 0.5,
      i + 0.5,
      1 / e,
      -1 / e,
      -n,
      -t[0],
      -t[1]
    ), l = !this.hitDetectionContext_;
    l && (this.hitDetectionContext_ = ir(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : l || c.clearRect(0, 0, a, a);
    let h;
    this.renderBuffer_ !== void 0 && (h = Qi(), Yd(h, t), zl(
      h,
      e * (this.renderBuffer_ + i),
      h
    ));
    const f = ay(i);
    let g;
    function d(x, w) {
      const P = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let L = 0, R = f.length; L < R; L++)
        if (P[f[L]] > 0) {
          if (!o || g !== "Image" && g !== "Text" || o.includes(x)) {
            const O = (f[L] - 3) / 4, V = i - O % a, N = i - (O / a | 0), B = s(x, w, V * V + N * N);
            if (B)
              return B;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const p = Object.keys(this.executorsByZIndex_).map(Number);
    p.sort(Bo);
    let _, m, y, v, I;
    for (_ = p.length - 1; _ >= 0; --_) {
      const x = p[_].toString();
      for (y = this.executorsByZIndex_[x], m = Qu.length - 1; m >= 0; --m)
        if (g = Qu[m], v = y[g], v !== void 0 && (I = v.executeHitDetection(
          c,
          u,
          n,
          d,
          h
        ), I))
          return I;
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
    const n = e[0], i = e[1], s = e[2], o = e[3], a = [n, i, n, o, s, o, s, i];
    return Ji(a, 0, 8, 2, t, a), a;
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
  execute(t, e, n, i, s, o, a) {
    const u = Object.keys(this.executorsByZIndex_).map(Number);
    u.sort(Bo), this.maxExtent_ && (t.save(), this.clip(t, n)), o = o || Qu;
    let l, c, h, f, g, d;
    for (a && u.reverse(), l = 0, c = u.length; l < c; ++l) {
      const p = u[l].toString();
      for (g = this.executorsByZIndex_[p], h = 0, f = o.length; h < f; ++h) {
        const _ = o[h];
        d = g[_], d !== void 0 && d.execute(
          t,
          e,
          n,
          i,
          s,
          a
        );
      }
    }
    this.maxExtent_ && t.restore();
  }
}
const $u = {};
function ay(r) {
  if ($u[r] !== void 0)
    return $u[r];
  const t = r * 2 + 1, e = r * r, n = new Array(e + 1);
  for (let s = 0; s <= r; ++s)
    for (let o = 0; o <= r; ++o) {
      const a = s * s + o * o;
      if (a > e)
        break;
      let u = n[a];
      u || (u = [], n[a] = u), u.push(((r + s) * t + (r + o)) * 4 + 3), s > 0 && u.push(((r - s) * t + (r + o)) * 4 + 3), o > 0 && (u.push(((r + s) * t + (r - o)) * 4 + 3), s > 0 && u.push(((r - s) * t + (r - o)) * 4 + 3));
    }
  const i = [];
  for (let s = 0, o = n.length; s < o; ++s)
    n[s] && i.push(...n[s]);
  return $u[r] = i, i;
}
const vh = oy;
class uy extends lg {
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {number} pixelRatio Pixel ratio.
   * @param {import("../../extent.js").Extent} extent Extent.
   * @param {import("../../transform.js").Transform} transform Transform.
   * @param {number} viewRotation View rotation.
   * @param {number} [squaredTolerance] Optional squared tolerance for simplification.
   * @param {import("../../proj.js").TransformFunction} [userTransform] Transform from user to view projection.
   */
  constructor(t, e, n, i, s, o, a) {
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = n, this.transform_ = i, this.transformRotation_ = i ? tp(Math.atan2(i[1], i[0]), 10) : 0, this.viewRotation_ = s, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = _i();
  }
  /**
   * @param {Array<number>} flatCoordinates Flat coordinates.
   * @param {number} offset Offset.
   * @param {number} end End.
   * @param {number} stride Stride.
   * @private
   */
  drawImages_(t, e, n, i) {
    if (!this.image_)
      return;
    const s = Ji(
      t,
      e,
      n,
      i,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_, a = this.tmpLocalTransform_, u = o.globalAlpha;
    this.imageOpacity_ != 1 && (o.globalAlpha = u * this.imageOpacity_);
    let l = this.imageRotation_;
    this.transformRotation_ === 0 && (l -= this.viewRotation_), this.imageRotateWithView_ && (l += this.viewRotation_);
    for (let c = 0, h = s.length; c < h; c += 2) {
      const f = s[c] - this.imageAnchorX_, g = s[c + 1] - this.imageAnchorY_;
      if (l !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const d = f + this.imageAnchorX_, p = g + this.imageAnchorY_;
        _a(
          a,
          d,
          p,
          1,
          1,
          l,
          -d,
          -p
        ), o.setTransform.apply(o, a), o.translate(d, p), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
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
  drawText_(t, e, n, i) {
    if (!this.textState_ || this.text_ === "")
      return;
    this.textFillState_ && this.setContextFillState_(this.textFillState_), this.textStrokeState_ && this.setContextStrokeState_(this.textStrokeState_), this.setContextTextState_(this.textState_);
    const s = Ji(
      t,
      e,
      n,
      i,
      this.transform_,
      this.pixelCoordinates_
    ), o = this.context_;
    let a = this.textRotation_;
    for (this.transformRotation_ === 0 && (a -= this.viewRotation_), this.textRotateWithView_ && (a += this.viewRotation_); e < n; e += i) {
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
  moveToLineTo_(t, e, n, i, s) {
    const o = this.context_, a = Ji(
      t,
      e,
      n,
      i,
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
  drawRings_(t, e, n, i) {
    for (let s = 0, o = n.length; s < o; ++s)
      e = this.moveToLineTo_(
        t,
        e,
        n[s],
        i,
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
    )), !!Qn(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = Wp(
          t,
          this.transform_,
          this.pixelCoordinates_
        ), n = e[2] - e[0], i = e[3] - e[1], s = Math.sqrt(n * n + i * i), o = this.context_;
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    )), !!Qn(this.extent_, t.getExtent())) {
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
    if (Qn(this.extent_, e)) {
      if (this.strokeState_) {
        this.setContextStrokeState_(this.strokeState_);
        const n = this.context_, i = t.getFlatCoordinates();
        let s = 0;
        const o = (
          /** @type {Array<number>} */
          t.getEnds()
        ), a = t.getStride();
        n.beginPath();
        for (let u = 0, l = o.length; u < l; ++u)
          s = this.moveToLineTo_(
            i,
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
    )), !!Qn(this.extent_, t.getExtent())) {
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
    )), !!Qn(this.extent_, t.getExtent())) {
      if (this.strokeState_ || this.fillState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = this.context_, n = t.getOrientedFlatCoordinates();
        let i = 0;
        const s = t.getEndss(), o = t.getStride();
        e.beginPath();
        for (let a = 0, u = s.length; a < u; ++a) {
          const l = s[a];
          i = this.drawRings_(n, i, l, o);
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
    const e = this.context_, n = this.contextTextState_, i = t.textAlign ? t.textAlign : Ho;
    n ? (n.font != t.font && (n.font = t.font, e.font = t.font), n.textAlign != i && (n.textAlign = i, e.textAlign = i), n.textBaseline != t.textBaseline && (n.textBaseline = t.textBaseline, e.textBaseline = t.textBaseline)) : (e.font = t.font, e.textAlign = i, e.textBaseline = t.textBaseline, this.contextTextState_ = {
      font: t.font,
      textAlign: i,
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
        fillStyle: xr(
          n || Vr
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const n = e.getColor(), i = e.getLineCap(), s = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), u = e.getWidth(), l = e.getMiterLimit(), c = s || Yo;
      this.strokeState_ = {
        lineCap: i !== void 0 ? i : ru,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || Uo) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Ws,
        lineWidth: (u !== void 0 ? u : jo) * this.pixelRatio_,
        miterLimit: l !== void 0 ? l : Wo,
        strokeStyle: xr(
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
    const n = t.getPixelRatio(this.pixelRatio_), i = t.getAnchor(), s = t.getOrigin();
    this.image_ = t.getImage(this.pixelRatio_), this.imageAnchorX_ = i[0] * n, this.imageAnchorY_ = i[1] * n, this.imageHeight_ = e[1] * n, this.imageOpacity_ = t.getOpacity(), this.imageOriginX_ = s[0], this.imageOriginY_ = s[1], this.imageRotateWithView_ = t.getRotateWithView(), this.imageRotation_ = t.getRotation();
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
          fillStyle: xr(
            g || Vr
          )
        };
      }
      const n = t.getStroke();
      if (!n)
        this.textStrokeState_ = null;
      else {
        const g = n.getColor(), d = n.getLineCap(), p = n.getLineDash(), _ = n.getLineDashOffset(), m = n.getLineJoin(), y = n.getWidth(), v = n.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: d !== void 0 ? d : ru,
          lineDash: p || Yo,
          lineDashOffset: _ || Uo,
          lineJoin: m !== void 0 ? m : Ws,
          lineWidth: y !== void 0 ? y : jo,
          miterLimit: v !== void 0 ? v : Wo,
          strokeStyle: xr(
            g || qo
          )
        };
      }
      const i = t.getFont(), s = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), u = t.getRotation(), l = t.getScaleArray(), c = t.getText(), h = t.getTextAlign(), f = t.getTextBaseline();
      this.textState_ = {
        font: i !== void 0 ? i : qf,
        textAlign: h !== void 0 ? h : Ho,
        textBaseline: f !== void 0 ? f : iu
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((g, d, p) => g += p % 2 ? " " : d, "") : c : "", this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = u !== void 0 ? u : 0, this.textScale_ = [
        this.pixelRatio_ * l[0],
        this.pixelRatio_ * l[1]
      ];
    }
  }
}
const ly = uy, Er = 0.5;
function cy(r, t, e, n, i, s, o) {
  const a = r[0] * Er, u = r[1] * Er, l = ir(a, u);
  l.imageSmoothingEnabled = !1;
  const c = l.canvas, h = new ly(
    l,
    Er,
    i,
    null,
    o
  ), f = e.length, g = Math.floor((256 * 256 * 256 - 1) / f), d = {};
  for (let _ = 1; _ <= f; ++_) {
    const m = e[_ - 1], y = m.getStyleFunction() || n;
    if (!n)
      continue;
    let v = y(m, s);
    if (!v)
      continue;
    Array.isArray(v) || (v = [v]);
    const x = (_ * g).toString(16).padStart(7, "#00000");
    for (let w = 0, P = v.length; w < P; ++w) {
      const L = v[w], R = L.getGeometryFunction()(m);
      if (!R || !Qn(i, R.getExtent()))
        continue;
      const O = L.clone(), V = O.getFill();
      V && V.setColor(x);
      const N = O.getStroke();
      N && (N.setColor(x), N.setLineDash(null)), O.setText(void 0);
      const B = L.getImage();
      if (B && B.getOpacity() !== 0) {
        const U = B.getImageSize();
        if (!U)
          continue;
        const j = ir(
          U[0],
          U[1],
          void 0,
          { alpha: !1 }
        ), ot = j.canvas;
        j.fillStyle = x, j.fillRect(0, 0, ot.width, ot.height), O.setImage(
          new oc({
            img: ot,
            imgSize: U,
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
      const z = R.getType();
      if (z === "GeometryCollection") {
        const U = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          R.getGeometriesArrayRecursive()
        );
        for (let j = 0, ot = U.length; j < ot; ++j) {
          const yt = U[j];
          A[yt.getType().replace("Multi", "")].push(
            yt,
            O
          );
        }
      } else
        A[z.replace("Multi", "")].push(R, O);
    }
  }
  const p = Object.keys(d).map(Number).sort(Bo);
  for (let _ = 0, m = p.length; _ < m; ++_) {
    const y = d[p[_]];
    for (const v in y) {
      const I = y[v];
      for (let x = 0, w = I.length; x < w; x += 2) {
        h.setStyle(I[x + 1]);
        for (let P = 0, L = t.length; P < L; ++P)
          h.setTransform(t[P]), h.drawGeometry(I[x]);
      }
    }
  }
  return l.getImageData(0, 0, c.width, c.height);
}
function hy(r, t, e) {
  const n = [];
  if (e) {
    const i = Math.floor(Math.round(r[0]) * Er), s = Math.floor(Math.round(r[1]) * Er), o = (Oe(i, 0, e.width - 1) + Oe(s, 0, e.height - 1) * e.width) * 4, a = e.data[o], u = e.data[o + 1], c = e.data[o + 2] + 256 * (u + 256 * a), h = Math.floor((256 * 256 * 256 - 1) / t.length);
    c && c % h === 0 && n.push(t[c / h - 1]);
  }
  return n;
}
const fy = 0.5, cg = {
  Point: xy,
  LineString: yy,
  Polygon: Iy,
  MultiPoint: Cy,
  MultiLineString: vy,
  MultiPolygon: Ey,
  GeometryCollection: my,
  Circle: py
};
function gy(r, t) {
  return parseInt(ge(r), 10) - parseInt(ge(t), 10);
}
function dy(r, t) {
  const e = El(r, t);
  return e * e;
}
function El(r, t) {
  return fy * r / t;
}
function py(r, t, e, n, i) {
  const s = e.getFill(), o = e.getStroke();
  if (s || o) {
    const u = r.getBuilder(e.getZIndex(), "Circle");
    u.setFillStrokeStyle(s, o), u.drawCircle(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (i || r).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
function Eh(r, t, e, n, i, s, o) {
  let a = !1;
  const u = e.getImage();
  if (u) {
    const l = u.getImageState();
    l == qt.LOADED || l == qt.ERROR ? u.unlistenImageChange(i) : (l == qt.IDLE && u.load(), u.listenImageChange(i), a = !0);
  }
  return _y(
    r,
    t,
    e,
    n,
    s,
    o
  ), a;
}
function _y(r, t, e, n, i, s) {
  const o = e.getGeometryFunction()(t);
  if (!o)
    return;
  const a = o.simplifyTransformed(
    n,
    i
  );
  if (e.getRenderer())
    hg(r, a, e, t);
  else {
    const l = cg[a.getType()];
    l(
      r,
      a,
      e,
      t,
      s
    );
  }
}
function hg(r, t, e, n) {
  if (t.getType() == "GeometryCollection") {
    const s = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      t.getGeometries()
    );
    for (let o = 0, a = s.length; o < a; ++o)
      hg(r, s[o], e, n);
    return;
  }
  r.getBuilder(e.getZIndex(), "Default").drawCustom(
    /** @type {import("../geom/SimpleGeometry.js").default} */
    t,
    n,
    e.getRenderer(),
    e.getHitDetectionRenderer()
  );
}
function my(r, t, e, n, i) {
  const s = t.getGeometriesArray();
  let o, a;
  for (o = 0, a = s.length; o < a; ++o) {
    const u = cg[s[o].getType()];
    u(
      r,
      s[o],
      e,
      n,
      i
    );
  }
}
function yy(r, t, e, n, i) {
  const s = e.getStroke();
  if (s) {
    const a = r.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawLineString(t, n);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (i || r).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, n);
  }
}
function vy(r, t, e, n, i) {
  const s = e.getStroke();
  if (s) {
    const a = r.getBuilder(
      e.getZIndex(),
      "LineString"
    );
    a.setFillStrokeStyle(null, s), a.drawMultiLineString(t, n);
  }
  const o = e.getText();
  if (o && o.getText()) {
    const a = (i || r).getBuilder(
      e.getZIndex(),
      "Text"
    );
    a.setTextStyle(o), a.drawText(t, n);
  }
}
function Ey(r, t, e, n, i) {
  const s = e.getFill(), o = e.getStroke();
  if (o || s) {
    const u = r.getBuilder(e.getZIndex(), "Polygon");
    u.setFillStrokeStyle(s, o), u.drawMultiPolygon(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (i || r).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
function xy(r, t, e, n, i) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != qt.LOADED)
      return;
    let u = r;
    if (i) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (u = i, c === "obstacle") {
          const h = r.getBuilder(
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
    let u = r;
    i && (u = i);
    const l = u.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(o, a), l.drawText(t, n);
  }
}
function Cy(r, t, e, n, i) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != qt.LOADED)
      return;
    let u = r;
    if (i) {
      const c = s.getDeclutterMode();
      if (c !== "none")
        if (u = i, c === "obstacle") {
          const h = r.getBuilder(
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
    let u = r;
    i && (u = i);
    const l = u.getBuilder(e.getZIndex(), "Text");
    l.setTextStyle(o, a), l.drawText(t, n);
  }
}
function Iy(r, t, e, n, i) {
  const s = e.getFill(), o = e.getStroke();
  if (s || o) {
    const u = r.getBuilder(e.getZIndex(), "Polygon");
    u.setFillStrokeStyle(s, o), u.drawPolygon(t, n);
  }
  const a = e.getText();
  if (a && a.getText()) {
    const u = (i || r).getBuilder(
      e.getZIndex(),
      "Text"
    );
    u.setTextStyle(a), u.drawText(t, n);
  }
}
class Sy extends ty {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = Qi(), this.wrappedRenderedExtent_ = Qi(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(t, e, n) {
    const i = e.extent, s = e.viewState, o = s.center, a = s.resolution, u = s.projection, l = s.rotation, c = u.getExtent(), h = this.getLayer().getSource(), f = e.pixelRatio, g = e.viewHints, d = !(g[Nn.ANIMATING] || g[Nn.INTERACTING]), p = this.compositionContext_, _ = Math.round(e.size[0] * f), m = Math.round(e.size[1] * f), y = h.getWrapX() && u.canWrapX(), v = y ? Tn(c) : null, I = y ? Math.ceil((i[2] - c[2]) / v) + 1 : 1;
    let x = y ? Math.floor((i[0] - c[0]) / v) : 0;
    do {
      const w = this.getRenderTransform(
        o,
        a,
        l,
        f,
        _,
        m,
        x * v
      );
      t.execute(
        p,
        1,
        w,
        l,
        d,
        void 0,
        n
      );
    } while (++x < I);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = ir(
        this.context.canvas.width,
        this.context.canvas.height,
        _h
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, Cd(this.compositionContext_), _h.push(this.compositionContext_.canvas), this.compositionContext_ = null;
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
    const n = t.pixelRatio, i = t.layerStatesArray[t.layerIndex];
    yp(this.pixelTransform, 1 / n, 1 / n), vp(this.inversePixelTransform, this.pixelTransform);
    const s = xp(this.pixelTransform);
    this.useContainer(e, s, this.getBackground(t));
    const o = this.context, a = o.canvas, u = this.replayGroup_, l = this.declutterExecutorGroup;
    if ((!u || u.isEmpty()) && (!l || l.isEmpty()))
      return null;
    const c = Math.round(t.size[0] * n), h = Math.round(t.size[1] * n);
    a.width != c || a.height != h ? (a.width = c, a.height = h, a.style.transform !== s && (a.style.transform = s)) : this.containerReused || o.clearRect(0, 0, c, h), this.preRender(o, t);
    const f = t.viewState;
    f.projection, this.opacity_ = i.opacity, this.setupCompositionContext_();
    let g = !1, d = !0;
    if (i.extent && this.clipping) {
      const p = To(i.extent);
      d = Qn(p, t.extent), g = d && !Fs(p, t.extent), g && this.clipUnrotated(this.compositionContext_, t, p);
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
        Je(this.pixelTransform, n);
        const i = this.renderedCenter_, s = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, u = this.wrappedRenderedExtent_, l = this.getLayer(), c = [], h = n[0] * Er, f = n[1] * Er;
        c.push(
          this.getRenderTransform(
            i,
            s,
            o,
            Er,
            h,
            f,
            0
          ).slice()
        );
        const g = l.getSource(), d = a.getExtent();
        if (g.getWrapX() && a.canWrapX() && !Fs(d, u)) {
          let p = u[0];
          const _ = Tn(d);
          let m = 0, y;
          for (; p < d[0]; )
            --m, y = _ * m, c.push(
              this.getRenderTransform(
                i,
                s,
                o,
                Er,
                h,
                f,
                y
              ).slice()
            ), p += _;
          for (m = 0, p = u[2]; p > d[2]; )
            ++m, y = _ * m, c.push(
              this.getRenderTransform(
                i,
                s,
                o,
                Er,
                h,
                f,
                y
              ).slice()
            ), p -= _;
        }
        this.hitDetectionImageData_ = cy(
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
        hy(t, this.renderedFeatures_, this.hitDetectionImageData_)
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
  forEachFeatureAtCoordinate(t, e, n, i, s) {
    if (!this.replayGroup_)
      return;
    const o = e.viewState.resolution, a = e.viewState.rotation, u = this.getLayer(), l = {}, c = function(g, d, p) {
      const _ = ge(g), m = l[_];
      if (m) {
        if (m !== !0 && p < m.distanceSq) {
          if (p === 0)
            return l[_] = !0, s.splice(s.lastIndexOf(m), 1), i(g, u, d);
          m.geometry = d, m.distanceSq = p;
        }
      } else {
        if (p === 0)
          return l[_] = !0, i(g, u, d);
        s.push(
          l[_] = {
            feature: g,
            layer: u,
            geometry: d,
            distanceSq: p,
            callback: i
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
    const i = t.viewHints[Nn.ANIMATING], s = t.viewHints[Nn.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && i || !a && s)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const u = t.extent, l = t.viewState, c = l.projection, h = l.resolution, f = t.pixelRatio, g = e.getRevision(), d = e.getRenderBuffer();
    let p = e.getRenderOrder();
    p === void 0 && (p = gy);
    const _ = l.center.slice(), m = zl(
      u,
      d * h
    ), y = m.slice(), v = [m.slice()], I = c.getExtent();
    if (n.getWrapX() && c.canWrapX() && !Fs(I, t.extent)) {
      const A = Tn(I), z = Math.max(Tn(m) / 2, A);
      m[0] = I[0] - z, m[2] = I[2] + z, rp(_, c);
      const U = Rf(v[0], c);
      U[0] < I[0] && U[2] < I[2] ? v.push([
        U[0] + A,
        U[1],
        U[2] + A,
        U[3]
      ]) : U[0] > I[0] && U[2] > I[2] && v.push([
        U[0] - A,
        U[1],
        U[2] - A,
        U[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == h && this.renderedRevision_ == g && this.renderedRenderOrder_ == p && Fs(this.wrappedRenderedExtent_, m))
      return go(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = _, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const x = new ph(
      El(h, f),
      m,
      h,
      f
    );
    let w;
    this.getLayer().getDeclutter() && (w = new ph(
      El(h, f),
      m,
      h,
      f
    ));
    let P;
    for (let A = 0, z = v.length; A < z; ++A)
      n.loadFeatures(v[A], h, c);
    const L = dy(h, f);
    let R = !0;
    const O = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       */
      (A) => {
        let z;
        const U = A.getStyleFunction() || e.getStyleFunction();
        if (U && (z = U(A, h)), z) {
          const j = this.renderFeature(
            A,
            L,
            z,
            x,
            P,
            w
          );
          R = R && !j;
        }
      }
    ), V = Tf(m), N = n.getFeaturesInExtent(V);
    p && N.sort(p);
    for (let A = 0, z = N.length; A < z; ++A)
      O(N[A]);
    this.renderedFeatures_ = N, this.ready = R;
    const B = x.finish(), M = new vh(
      m,
      h,
      f,
      n.getOverlaps(),
      B,
      e.getRenderBuffer()
    );
    return w && (this.declutterExecutorGroup = new vh(
      m,
      h,
      f,
      n.getOverlaps(),
      w.finish(),
      e.getRenderBuffer()
    )), this.renderedResolution_ = h, this.renderedRevision_ = g, this.renderedRenderOrder_ = p, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = _, this.renderedProjection_ = c, this.replayGroup_ = M, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
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
  renderFeature(t, e, n, i, s, o) {
    if (!n)
      return !1;
    let a = !1;
    if (Array.isArray(n))
      for (let u = 0, l = n.length; u < l; ++u)
        a = Eh(
          i,
          t,
          n[u],
          e,
          this.boundHandleStyleImageChange_,
          s,
          o
        ) || a;
    else
      a = Eh(
        i,
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
const wy = Sy;
class Ry extends km {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new wy(this);
  }
}
const Ny = Ry;
class Ly {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(t) {
    this.rbush_ = new ug(t), this.items_ = {};
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
    for (let i = 0, s = e.length; i < s; i++) {
      const o = t[i], a = e[i], u = {
        minX: o[0],
        minY: o[1],
        maxX: o[2],
        maxY: o[3],
        value: a
      };
      n[i] = u, this.items_[ge(a)] = u;
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
    const n = this.items_[ge(e)], i = [n.minX, n.minY, n.maxX, n.maxY];
    vf(i, t) || (this.remove(e), this.insert(t, e));
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
    return this.rbush_.search(e).map(function(i) {
      return i.value;
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
    for (let i = 0, s = t.length; i < s; i++)
      if (n = e(t[i]), n)
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
    return $i(e.minX, e.minY, e.maxX, e.maxY, t);
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
const xh = Ly;
class by extends Oi {
  /**
   * @param {Options} options Source options.
   */
  constructor(t) {
    super(), this.projection = Us(t.projection), this.attributions_ = Ch(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
    const e = this;
    this.viewPromise_ = new Promise(function(n, i) {
      e.viewResolver = n, e.viewRejector = i;
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
    this.attributions_ = Ch(t), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function Ch(r) {
  return r ? Array.isArray(r) ? function(t) {
    return r;
  } : typeof r == "function" ? r : function(t) {
    return [r];
  } : null;
}
const Py = by, Kn = {
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
function Ty(r, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let My = !1;
function Oy(r, t, e, n, i, s, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof r == "function" ? r(e, n, i) : r,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = My, a.onload = function(u) {
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
          featureProjection: i
        }),
        t.readProjection(c)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function Ih(r, t) {
  return function(e, n, i, s, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    Oy(
      r,
      t,
      e,
      n,
      i,
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
class ui extends En {
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>} [feature] Feature.
   * @param {Array<import("../Feature.js").default<Geometry>>} [features] Features.
   */
  constructor(t, e, n) {
    super(t), this.feature = e, this.features = n;
  }
}
class Ay extends Py {
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
    }), this.on, this.once, this.un, this.loader_ = Xs, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (oe(this.format_, 7), this.loader_ = Ih(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : Ty;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new xh() : null, this.loadedExtentsRtree_ = new xh(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n, i;
    Array.isArray(t.features) ? i = t.features : t.features && (n = t.features, i = n.getArray()), !e && n === void 0 && (n = new pp(i)), i !== void 0 && this.addFeaturesInternal(i), n !== void 0 && this.bindFeaturesCollection_(n);
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
      const i = n.getExtent();
      this.featuresRtree_ && this.featuresRtree_.insert(i, t);
    } else
      this.nullGeometryFeatures_[e] = t;
    this.dispatchEvent(
      new ui(Kn.ADDFEATURE, t)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      tr(e, An.CHANGE, this.handleFeatureChange_, this),
      tr(
        e,
        cf.PROPERTYCHANGE,
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
    const i = e.getId();
    return i !== void 0 && (i.toString() in this.idIndex_ ? n = !1 : this.idIndex_[i.toString()] = e), n && (oe(!(t in this.uidIndex_), 30), this.uidIndex_[t] = e), n;
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
    const e = [], n = [], i = [];
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
        e.push(c), i.push(a);
      } else
        this.nullGeometryFeatures_[u] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, i), this.hasListener(Kn.ADDFEATURE))
      for (let s = 0, o = n.length; s < o; s++)
        this.dispatchEvent(
          new ui(Kn.ADDFEATURE, n[s])
        );
  }
  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      Kn.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.push(n.feature), e = !1);
      }
    ), this.addEventListener(
      Kn.REMOVEFEATURE,
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
        this.featureChangeKeys_[n].forEach(er);
      this.featuresCollection_ || (this.featureChangeKeys_ = {}, this.idIndex_ = {}, this.uidIndex_ = {});
    } else if (this.featuresRtree_) {
      const n = (i) => {
        this.removeFeatureInternal(i);
      };
      this.featuresRtree_.forEach(n);
      for (const i in this.nullGeometryFeatures_)
        this.removeFeatureInternal(this.nullGeometryFeatures_[i]);
    }
    this.featuresCollection_ && this.featuresCollection_.clear(), this.featuresRtree_ && this.featuresRtree_.clear(), this.nullGeometryFeatures_ = {};
    const e = new ui(Kn.CLEAR);
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
    return this.forEachFeatureInExtent(n, function(i) {
      if (i.getGeometry().intersectsCoordinate(t))
        return e(i);
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
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), zo(this.nullGeometryFeatures_) || zr(t, Object.values(this.nullGeometryFeatures_))), /** @type {Array<import("../Feature.js").default<Geometry>>} */
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
      const i = Jd(t, e);
      return [].concat(
        ...i.map((s) => this.featuresRtree_.getInExtent(s))
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
    const n = t[0], i = t[1];
    let s = null;
    const o = [NaN, NaN];
    let a = 1 / 0;
    const u = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    return e = e || gd, this.featuresRtree_.forEachInExtent(
      u,
      /**
       * @param {import("../Feature.js").default<Geometry>} feature Feature.
       */
      function(l) {
        if (e(l)) {
          const c = l.getGeometry(), h = a;
          if (a = c.closestPointXY(
            n,
            i,
            o,
            a
          ), a < h) {
            s = l;
            const f = Math.sqrt(a);
            u[0] = n - f, u[1] = i - f, u[2] = n + f, u[3] = i + f;
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
    ), n = ge(e), i = e.getGeometry();
    if (!i)
      n in this.nullGeometryFeatures_ || (this.featuresRtree_ && this.featuresRtree_.remove(e), this.nullGeometryFeatures_[n] = e);
    else {
      const o = i.getExtent();
      n in this.nullGeometryFeatures_ ? (delete this.nullGeometryFeatures_[n], this.featuresRtree_ && this.featuresRtree_.insert(o, e)) : this.featuresRtree_ && this.featuresRtree_.update(o, e);
    }
    const s = e.getId();
    if (s !== void 0) {
      const o = s.toString();
      this.idIndex_[o] !== e && (this.removeFromIdIndex_(e), this.idIndex_[o] = e);
    } else
      this.removeFromIdIndex_(e), this.uidIndex_[n] = e;
    this.changed(), this.dispatchEvent(
      new ui(Kn.CHANGEFEATURE, e)
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
    const i = this.loadedExtentsRtree_, s = this.strategy_(t, e, n);
    for (let o = 0, a = s.length; o < a; ++o) {
      const u = s[o];
      i.forEachInExtent(
        u,
        /**
         * @param {{extent: import("../extent.js").Extent}} object Object.
         * @return {boolean} Contains.
         */
        function(c) {
          return Fs(c.extent, u);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new ui(Kn.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        u,
        e,
        n,
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new ui(
              Kn.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new ui(Kn.FEATURESLOADERROR)
          );
        }
      ), i.insert(u, { extent: u.slice() }));
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
    e.forEachInExtent(t, function(i) {
      if (vf(i.extent, t))
        return n = i, !0;
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
    n.forEach(er), delete this.featureChangeKeys_[e];
    const i = t.getId();
    return i !== void 0 && delete this.idIndex_[i.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new ui(Kn.REMOVEFEATURE, t)
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
    oe(this.format_, 7), this.url_ = t, this.setLoader(Ih(t, this.format_));
  }
}
const Dy = Ay;
let Fy = class xl extends Df {
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
    this.changeEventsKeys_.forEach(er), this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(
          tr(this.geometries_[t], An.CHANGE, this.changed, this)
        );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */
  clone() {
    const t = new xl(null);
    return t.setGeometries(this.geometries_), t.applyProperties(this), t;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, i) {
    if (i < gs(this.getExtent(), t, e))
      return i;
    const s = this.geometries_;
    for (let o = 0, a = s.length; o < a; ++o)
      i = s[o].closestPointXY(
        t,
        e,
        n,
        i
      );
    return i;
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    const n = this.geometries_;
    for (let i = 0, s = n.length; i < s; ++i)
      if (n[i].containsXY(t, e))
        return !0;
    return !1;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    Iu(t);
    const e = this.geometries_;
    for (let n = 0, i = e.length; n < i; ++n)
      Xd(t, e[n].getExtent());
    return t;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return Sh(this.geometries_);
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    let i = !1;
    for (let s = 0, o = n.length; s < o; ++s) {
      const a = n[s], u = a.getSimplifiedGeometry(t);
      e.push(u), u !== a && (i = !0);
    }
    if (i) {
      const s = new xl(null);
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    for (let i = 0, s = n.length; i < s; ++i)
      n[i].rotate(t, e);
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
    const i = this.geometries_;
    for (let s = 0, o = i.length; s < o; ++s)
      i[s].scale(t, e, n);
    this.changed();
  }
  /**
   * Set the geometries that make up this geometry collection.
   * @param {Array<Geometry>} geometries Geometries.
   * @api
   */
  setGeometries(t) {
    this.setGeometriesArray(Sh(t));
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
    for (let n = 0, i = e.length; n < i; ++n)
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
    for (let i = 0, s = n.length; i < s; ++i)
      n[i].translate(t, e);
    this.changed();
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.unlistenGeometriesChange_(), super.disposeInternal();
  }
};
function Sh(r) {
  const t = [];
  for (let e = 0, n = r.length; e < n; ++e)
    t.push(r[e].clone());
  return t;
}
const ky = Fy;
let Gy = class Cl extends ds {
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
      let i = this.getLayout();
      const s = (
        /** @type {Array<LineString>} */
        t
      ), o = [], a = [];
      for (let u = 0, l = s.length; u < l; ++u) {
        const c = s[u];
        u === 0 && (i = c.getLayout()), zr(o, c.getFlatCoordinates()), a.push(o.length);
      }
      this.setFlatCoordinates(i, o), this.ends_ = a;
    }
  }
  /**
   * Append the passed linestring to the multilinestring.
   * @param {LineString} lineString LineString.
   * @api
   */
  appendLineString(t) {
    this.flatCoordinates ? zr(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */
  clone() {
    const t = new Cl(
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
  closestPointXY(t, e, n, i) {
    return i < gs(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      ql(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), jl(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      this.maxDelta_,
      !1,
      t,
      e,
      n,
      i
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
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, n = n !== void 0 ? n : !1, vm(
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
    return t < 0 || this.ends_.length <= t ? null : new au(
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
    const t = this.flatCoordinates, e = this.ends_, n = this.layout, i = [];
    let s = 0;
    for (let o = 0, a = e.length; o < a; ++o) {
      const u = e[o], l = new au(
        t.slice(s, u),
        n
      );
      i.push(l), s = u;
    }
    return i;
  }
  /**
   * @return {Array<number>} Flat midpoints.
   */
  getFlatMidpoints() {
    const t = [], e = this.flatCoordinates;
    let n = 0;
    const i = this.ends_, s = this.stride;
    for (let o = 0, a = i.length; o < a; ++o) {
      const u = i[o], l = eg(
        e,
        n,
        u,
        s,
        0.5
      );
      zr(t, l), n = u;
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
    return e.length = Kp(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      0,
      n
    ), new Cl(e, "XY", n);
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
    return s_(
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
    const n = Zl(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const wh = Gy;
let By = class fg extends ds {
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
    this.flatCoordinates ? zr(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */
  clone() {
    const t = new fg(
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
  closestPointXY(t, e, n, i) {
    if (i < gs(this.getExtent(), t, e))
      return i;
    const s = this.flatCoordinates, o = this.stride;
    for (let a = 0, u = s.length; a < u; a += o) {
      const l = Ki(
        t,
        e,
        s[a],
        s[a + 1]
      );
      if (l < i) {
        i = l;
        for (let c = 0; c < o; ++c)
          n[c] = s[a + c];
        n.length = o;
      }
    }
    return i;
  }
  /**
   * Return the coordinates of the multipoint.
   * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
   * @api
   */
  getCoordinates() {
    return fi(
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
    const t = this.flatCoordinates, e = this.layout, n = this.stride, i = [];
    for (let s = 0, o = t.length; s < o; s += n) {
      const a = new zs(t.slice(s, s + n), e);
      i.push(a);
    }
    return i;
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
    for (let i = 0, s = e.length; i < s; i += n) {
      const o = e[i], a = e[i + 1];
      if (Vl(t, o, a))
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = Su(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const zy = By;
function Vy(r, t, e, n) {
  const i = [];
  let s = Qi();
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = yf(
      r,
      t,
      u[0],
      n
    ), i.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), t = u[u.length - 1];
  }
  return i;
}
let Xy = class Il extends ds {
  /**
   * @param {Array<Array<Array<import("../coordinate.js").Coordinate>>|Polygon>|Array<number>} coordinates Coordinates.
   *     For internal use, flat coordinates in combination with `layout` and `endss` are also accepted.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @param {Array<Array<number>>} [endss] Array of ends for internal use with flat coordinates.
   */
  constructor(t, e, n) {
    if (super(), this.endss_ = [], this.flatInteriorPointsRevision_ = -1, this.flatInteriorPoints_ = null, this.maxDelta_ = -1, this.maxDeltaRevision_ = -1, this.orientedRevision_ = -1, this.orientedFlatCoordinates_ = null, !n && !Array.isArray(t[0])) {
      let i = this.getLayout();
      const s = (
        /** @type {Array<Polygon>} */
        t
      ), o = [], a = [];
      for (let u = 0, l = s.length; u < l; ++u) {
        const c = s[u];
        u === 0 && (i = c.getLayout());
        const h = o.length, f = c.getEnds();
        for (let g = 0, d = f.length; g < d; ++g)
          f[g] += h;
        zr(o, c.getFlatCoordinates()), a.push(f);
      }
      e = i, t = o, n = a;
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
      zr(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
      for (let i = 0, s = e.length; i < s; ++i)
        e[i] += n;
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
    for (let i = 0; i < t; ++i)
      e[i] = this.endss_[i].slice();
    const n = new Il(
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
  closestPointXY(t, e, n, i) {
    return i < gs(this.getExtent(), t, e) ? i : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      qp(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Hp(
      this.getOrientedFlatCoordinates(),
      0,
      this.endss_,
      this.stride,
      this.maxDelta_,
      !0,
      t,
      e,
      n,
      i
    ));
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @return {boolean} Contains (x, y).
   */
  containsXY(t, e) {
    return r_(
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
    return $p(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), qc(
      e,
      0,
      this.endss_,
      this.stride,
      t
    )) : e = this.flatCoordinates, ll(
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
      const t = Vy(
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
    return new zy(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      l_(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = qc(
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
    return e.length = Qp(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new Il(e, "XY", n);
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
    const n = this.endss_[t].slice(), i = n[n.length - 1];
    if (e !== 0)
      for (let s = 0, o = n.length; s < o; ++s)
        n[s] -= e;
    return new nu(
      this.flatCoordinates.slice(e, i),
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
    const t = this.layout, e = this.flatCoordinates, n = this.endss_, i = [];
    let s = 0;
    for (let o = 0, a = n.length; o < a; ++o) {
      const u = n[o].slice(), l = u[u.length - 1];
      if (s !== 0)
        for (let h = 0, f = u.length; h < f; ++h)
          u[h] -= s;
      const c = new nu(
        e.slice(s, l),
        t,
        u
      );
      i.push(c), s = l;
    }
    return i;
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
    return a_(
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
    const n = Zp(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.endss_
    );
    if (n.length === 0)
      this.flatCoordinates.length = 0;
    else {
      const i = n[n.length - 1];
      this.flatCoordinates.length = i.length === 0 ? 0 : i[i.length - 1];
    }
    this.changed();
  }
};
const Rh = Xy;
var Be = 63710088e-1, gg = {
  centimeters: Be * 100,
  centimetres: Be * 100,
  degrees: Be / 111325,
  feet: Be * 3.28084,
  inches: Be * 39.37,
  kilometers: Be / 1e3,
  kilometres: Be / 1e3,
  meters: Be,
  metres: Be,
  miles: Be / 1609.344,
  millimeters: Be * 1e3,
  millimetres: Be * 1e3,
  nauticalmiles: Be / 1852,
  radians: 1,
  yards: Be * 1.0936
};
function Nu(r, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = r, n;
}
function Yy(r, t, e) {
  if (e === void 0 && (e = {}), !r)
    throw new Error("coordinates is required");
  if (!Array.isArray(r))
    throw new Error("coordinates must be an Array");
  if (r.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Nh(r[0]) || !Nh(r[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: r
  };
  return Nu(n, t, e);
}
function Uy(r, t, e) {
  e === void 0 && (e = {});
  for (var n = 0, i = r; n < i.length; n++) {
    var s = i[n];
    if (s.length < 4)
      throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
    for (var o = 0; o < s[s.length - 1].length; o++)
      if (s[s.length - 1][o] !== s[0][o])
        throw new Error("First and last Position are not equivalent.");
  }
  var a = {
    type: "Polygon",
    coordinates: r
  };
  return Nu(a, t, e);
}
function Sl(r, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = r, e;
}
function Wy(r, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: r
  };
  return Nu(n, t, e);
}
function qy(r, t) {
  t === void 0 && (t = "kilometers");
  var e = gg[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r * e;
}
function Hy(r, t) {
  t === void 0 && (t = "kilometers");
  var e = gg[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return r / e;
}
function Nh(r) {
  return !isNaN(r) && r !== null && !Array.isArray(r);
}
function dg(r, t, e) {
  if (r !== null)
    for (var n, i, s, o, a, u, l, c = 0, h = 0, f, g = r.type, d = g === "FeatureCollection", p = g === "Feature", _ = d ? r.features.length : 1, m = 0; m < _; m++) {
      l = d ? r.features[m].geometry : p ? r.geometry : r, f = l ? l.type === "GeometryCollection" : !1, a = f ? l.geometries.length : 1;
      for (var y = 0; y < a; y++) {
        var v = 0, I = 0;
        if (o = f ? l.geometries[y] : l, o !== null) {
          u = o.coordinates;
          var x = o.type;
          switch (c = e && (x === "Polygon" || x === "MultiPolygon") ? 1 : 0, x) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                h,
                m,
                v,
                I
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
                  I
                ) === !1)
                  return !1;
                h++, x === "MultiPoint" && v++;
              }
              x === "LineString" && v++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (i = 0; i < u[n].length - c; i++) {
                  if (t(
                    u[n][i],
                    h,
                    m,
                    v,
                    I
                  ) === !1)
                    return !1;
                  h++;
                }
                x === "MultiLineString" && v++, x === "Polygon" && I++;
              }
              x === "Polygon" && v++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (I = 0, i = 0; i < u[n].length; i++) {
                  for (s = 0; s < u[n][i].length - c; s++) {
                    if (t(
                      u[n][i][s],
                      h,
                      m,
                      v,
                      I
                    ) === !1)
                      return !1;
                    h++;
                  }
                  I++;
                }
                v++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < o.geometries.length; n++)
                if (dg(o.geometries[n], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Lh(r, t) {
  if (r.type === "Feature")
    t(r, 0);
  else if (r.type === "FeatureCollection")
    for (var e = 0; e < r.features.length && t(r.features[e], e) !== !1; e++)
      ;
}
function pg(r, t) {
  var e, n, i, s, o, a, u, l, c, h, f = 0, g = r.type === "FeatureCollection", d = r.type === "Feature", p = g ? r.features.length : 1;
  for (e = 0; e < p; e++) {
    for (a = g ? r.features[e].geometry : d ? r.geometry : r, l = g ? r.features[e].properties : d ? r.properties : {}, c = g ? r.features[e].bbox : d ? r.bbox : void 0, h = g ? r.features[e].id : d ? r.id : void 0, u = a ? a.type === "GeometryCollection" : !1, o = u ? a.geometries.length : 1, i = 0; i < o; i++) {
      if (s = u ? a.geometries[i] : a, s === null) {
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
function wl(r) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return dg(r, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
wl.default = wl;
function jy(r, t) {
  t === void 0 && (t = {});
  var e = wl(r), n = (e[0] + e[2]) / 2, i = (e[1] + e[3]) / 2;
  return Yy([n, i], t.properties, t);
}
"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
  configurable: !0,
  value: function(t) {
    if (this === void 0 || this === null)
      throw new TypeError(this + " is not an object");
    var e = Object(this), n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0, i = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
    i = i < 0 ? Math.max(n + i, 0) : Math.min(i, n);
    var s = 2 in arguments && arguments[2] !== void 0 ? parseInt(Number(arguments[2]), 10) || 0 : n;
    for (s = s < 0 ? Math.max(n + arguments[2], 0) : Math.min(s, n); i < s; )
      e[i] = t, ++i;
    return e;
  },
  writable: !0
});
Number.isFinite = Number.isFinite || function(r) {
  return typeof r == "number" && isFinite(r);
};
Number.isInteger = Number.isInteger || function(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
};
Number.parseFloat = Number.parseFloat || parseFloat;
Number.isNaN = Number.isNaN || function(r) {
  return r !== r;
};
Math.trunc = Math.trunc || function(r) {
  return r < 0 ? Math.ceil(r) : Math.floor(r);
};
var ts = function() {
};
ts.prototype.interfaces_ = function() {
  return [];
};
ts.prototype.getClass = function() {
  return ts;
};
ts.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var Et = function(r) {
  function t(e) {
    r.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), H = function() {
}, _g = { MAX_VALUE: { configurable: !0 } };
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
_g.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(H, _g);
var on = function() {
}, Lu = function() {
}, qs = function() {
};
function an() {
}
var E = function r() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = r.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = r.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, ys = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
E.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case E.X:
      this.x = e;
      break;
    case E.Y:
      this.y = e;
      break;
    case E.Z:
      this.z = e;
      break;
    default:
      throw new Et("Invalid ordinate index: " + t);
  }
};
E.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return !(!ts.equalsWithTolerance(this.x, e.x, n) || !ts.equalsWithTolerance(this.y, e.y, n));
  }
};
E.prototype.getOrdinate = function(t) {
  switch (t) {
    case E.X:
      return this.x;
    case E.Y:
      return this.y;
    case E.Z:
      return this.z;
  }
  throw new Et("Invalid ordinate index: " + t);
};
E.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || H.isNaN(this.z)) && H.isNaN(t.z);
};
E.prototype.equals = function(t) {
  return t instanceof E ? this.equals2D(t) : !1;
};
E.prototype.equalInZ = function(t, e) {
  return ts.equalsWithTolerance(this.z, t.z, e);
};
E.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
E.prototype.clone = function() {
};
E.prototype.copy = function() {
  return new E(this);
};
E.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
E.prototype.distance3D = function(t) {
  var e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
  return Math.sqrt(e * e + n * n + i * i);
};
E.prototype.distance = function(t) {
  var e = this.x - t.x, n = this.y - t.y;
  return Math.sqrt(e * e + n * n);
};
E.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + E.hashCode(this.x), t = 37 * t + E.hashCode(this.y), t;
};
E.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
E.prototype.interfaces_ = function() {
  return [on, Lu, an];
};
E.prototype.getClass = function() {
  return E;
};
E.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = H.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
ys.DimensionalComparator.get = function() {
  return Br;
};
ys.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
ys.NULL_ORDINATE.get = function() {
  return H.NaN;
};
ys.X.get = function() {
  return 0;
};
ys.Y.get = function() {
  return 1;
};
ys.Z.get = function() {
  return 2;
};
Object.defineProperties(E, ys);
var Br = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new Et("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
Br.prototype.compare = function(t, e) {
  var n = t, i = e, s = Br.compare(n.x, i.x);
  if (s !== 0)
    return s;
  var o = Br.compare(n.y, i.y);
  if (o !== 0)
    return o;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = Br.compare(n.z, i.z);
  return a;
};
Br.prototype.interfaces_ = function() {
  return [qs];
};
Br.prototype.getClass = function() {
  return Br;
};
Br.compare = function(t, e) {
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
var C = function() {
}, va = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
C.prototype.interfaces_ = function() {
  return [];
};
C.prototype.getClass = function() {
  return C;
};
C.toLocationSymbol = function(t) {
  switch (t) {
    case C.EXTERIOR:
      return "e";
    case C.BOUNDARY:
      return "b";
    case C.INTERIOR:
      return "i";
    case C.NONE:
      return "-";
  }
  throw new Et("Unknown location value: " + t);
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
Object.defineProperties(C, va);
var q = function(r, t) {
  return r.interfaces_ && r.interfaces_().indexOf(t) > -1;
}, Ye = function() {
}, mg = { LOG_10: { configurable: !0 } };
Ye.prototype.interfaces_ = function() {
  return [];
};
Ye.prototype.getClass = function() {
  return Ye;
};
Ye.log10 = function(t) {
  var e = Math.log(t);
  return H.isInfinite(e) || H.isNaN(e) ? e : e / Ye.LOG_10;
};
Ye.min = function(t, e, n, i) {
  var s = t;
  return e < s && (s = e), n < s && (s = n), i < s && (s = i), s;
};
Ye.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var i = arguments[0], s = arguments[1], o = arguments[2];
    return i < s ? s : i > o ? o : i;
  }
};
Ye.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
Ye.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = t;
    return e > i && (i = e), n > i && (i = n), i;
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = s;
    return o > l && (l = o), a > l && (l = a), u > l && (l = u), l;
  }
};
Ye.average = function(t, e) {
  return (t + e) / 2;
};
mg.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(Ye, mg);
var Wn = function(t) {
  this.str = t;
};
Wn.prototype.append = function(t) {
  this.str += t;
};
Wn.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Wn.prototype.toString = function(t) {
  return this.str;
};
var Dn = function(t) {
  this.value = t;
};
Dn.prototype.intValue = function() {
  return this.value;
};
Dn.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
Dn.isNaN = function(t) {
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
var S = function r() {
  if (this._hi = 0, this._lo = 0, arguments.length === 0)
    this.init(0);
  else if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this.init(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    } else if (typeof arguments[0] == "string") {
      var n = arguments[0];
      r.call(this, r.parse(n));
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], s = arguments[1];
    this.init(i, s);
  }
}, xn = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
S.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
S.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), i = S.magnitude(n._hi), s = S.TEN.pow(i);
  n = n.divide(s), n.gt(S.TEN) ? (n = n.divide(S.TEN), i += 1) : n.lt(S.ONE) && (n = n.multiply(S.TEN), i -= 1);
  for (var o = i + 1, a = new Wn(), u = S.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
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
  return e[0] = i, a.toString();
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
    var n = arguments[0], i = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null, h = null, f = null;
    return l = this._hi / n, c = S.SPLIT * l, s = c - l, f = S.SPLIT * n, s = c - s, o = l - s, a = f - n, h = l * n, a = f - a, u = n - a, f = s * a - h + s * u + o * a + o * u, c = (this._hi - h - f + this._lo - l * i) / n, f = l + c, this._hi = f, this._lo = l - f + c, this;
  }
};
S.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
S.prototype.divide = function() {
  if (arguments[0] instanceof S) {
    var t = arguments[0], e = null, n = null, i = null, s = null, o = null, a = null, u = null, l = null;
    o = this._hi / t._hi, a = S.SPLIT * o, e = a - o, l = S.SPLIT * t._hi, e = a - e, n = o - e, i = l - t._hi, u = o * t._hi, i = l - i, s = t._hi - i, l = e * i - u + e * s + n * i + n * s, a = (this._hi - u - l + this._lo - o * t._lo) / t._hi, l = o + a;
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
  var e = new S(this), n = S.valueOf(1), i = Math.abs(t);
  if (i > 1)
    for (; i > 0; )
      i % 2 === 1 && n.selfMultiply(e), i /= 2, i > 0 && (e = e.sqr());
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
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = S.valueOf(e), i = this.subtract(n.sqr()), s = i._hi * (t * 0.5);
  return n.add(s);
};
S.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof S) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], n = null, i = null, s = null, o = null, a = null, u = null;
      return s = this._hi + e, a = s - this._hi, o = s - a, o = e - a + (this._hi - o), u = o + this._lo, n = s + u, i = u + (s - n), this._hi = n + i, this._lo = i + (n - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], h = null, f = null, g = null, d = null, p = null, _ = null, m = null, y = null;
    p = this._hi + l, g = this._lo + c, m = p - this._hi, y = g - this._lo, _ = p - m, d = g - y, _ = l - m + (this._hi - _), d = c - y + (this._lo - d), m = _ + g, h = p + m, f = m + (p - h), m = d + f;
    var v = h + m, I = m + (h - v);
    return this._hi = v, this._lo = I, this;
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
    var n = arguments[0], i = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null;
    l = S.SPLIT * this._hi, s = l - this._hi, c = S.SPLIT * n, s = l - s, o = this._hi - s, a = c - n, l = this._hi * n, a = c - a, u = n - a, c = s * a - l + s * u + o * a + o * u + (this._hi * i + this._lo * n);
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
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), i = e[0] + 1, s = n;
  if (n.charAt(0) === ".")
    s = "0" + n;
  else if (i < 0)
    s = "0." + S.stringOfChar("0", -i) + n;
  else if (n.indexOf(".") === -1) {
    var o = i - n.length, a = S.stringOfChar("0", o);
    s = n + a + ".0";
  }
  return this.isNegative() ? "-" + s : s;
};
S.prototype.reciprocal = function() {
  var t = null, e = null, n = null, i = null, s = null, o = null, a = null, u = null;
  s = 1 / this._hi, o = S.SPLIT * s, t = o - s, u = S.SPLIT * this._hi, t = o - t, e = s - t, n = u - this._hi, a = s * this._hi, n = u - n, i = this._hi - n, u = t * n - a + t * i + e * n + e * i, o = (1 - a - u - s * this._lo) / this._hi;
  var l = s + o, c = s - l + o;
  return new S(l, c);
};
S.prototype.toSciNotation = function() {
  if (this.isZero())
    return S.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), i = S.SCI_NOT_EXPONENT_CHAR + e[0];
  if (n.charAt(0) === "0")
    throw new Error("Found leading zero: " + n);
  var s = "";
  n.length > 1 && (s = n.substring(1));
  var o = n.charAt(0) + "." + s;
  return this.isNegative() ? "-" + o + i : o + i;
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
    var n = arguments[0], i = arguments[1];
    this._hi = n, this._lo = i;
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
  return [an, on, Lu];
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
  var i = !1;
  if (e < n) {
    var s = t.charAt(e);
    (s === "-" || s === "+") && (e++, s === "-" && (i = !0));
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
        l = Dn.parseInt(f);
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
    var p = S.TEN.pow(d);
    g = o.divide(p);
  } else if (d < 0) {
    var _ = S.TEN.pow(-d);
    g = o.multiply(_);
  }
  return i ? g.negate() : g;
};
S.createNaN = function() {
  return new S(H.NaN, H.NaN);
};
S.copy = function(t) {
  return new S(t);
};
S.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), i = Math.trunc(Math.floor(n)), s = Math.pow(10, i);
  return s * 10 <= e && (i += 1), i;
};
S.stringOfChar = function(t, e) {
  for (var n = new Wn(), i = 0; i < e; i++)
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
var Le = function() {
}, yg = { DP_SAFE_EPSILON: { configurable: !0 } };
Le.prototype.interfaces_ = function() {
  return [];
};
Le.prototype.getClass = function() {
  return Le;
};
Le.orientationIndex = function(t, e, n) {
  var i = Le.orientationIndexFilter(t, e, n);
  if (i <= 1)
    return i;
  var s = S.valueOf(e.x).selfAdd(-t.x), o = S.valueOf(e.y).selfAdd(-t.y), a = S.valueOf(n.x).selfAdd(-e.x), u = S.valueOf(n.y).selfAdd(-e.y);
  return s.selfMultiply(u).selfSubtract(o.selfMultiply(a)).signum();
};
Le.signOfDet2x2 = function(t, e, n, i) {
  var s = t.multiply(i).selfSubtract(e.multiply(n));
  return s.signum();
};
Le.intersection = function(t, e, n, i) {
  var s = S.valueOf(i.y).selfSubtract(n.y).selfMultiply(S.valueOf(e.x).selfSubtract(t.x)), o = S.valueOf(i.x).selfSubtract(n.x).selfMultiply(S.valueOf(e.y).selfSubtract(t.y)), a = s.subtract(o), u = S.valueOf(i.x).selfSubtract(n.x).selfMultiply(S.valueOf(t.y).selfSubtract(n.y)), l = S.valueOf(i.y).selfSubtract(n.y).selfMultiply(S.valueOf(t.x).selfSubtract(n.x)), c = u.subtract(l), h = c.selfDivide(a).doubleValue(), f = S.valueOf(t.x).selfAdd(S.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(), g = S.valueOf(e.x).selfSubtract(t.x).selfMultiply(S.valueOf(t.y).selfSubtract(n.y)), d = S.valueOf(e.y).selfSubtract(t.y).selfMultiply(S.valueOf(t.x).selfSubtract(n.x)), p = g.subtract(d), _ = p.selfDivide(a).doubleValue(), m = S.valueOf(n.y).selfAdd(S.valueOf(i.y).selfSubtract(n.y).selfMultiply(_)).doubleValue();
  return new E(f, m);
};
Le.orientationIndexFilter = function(t, e, n) {
  var i = null, s = (t.x - n.x) * (e.y - n.y), o = (t.y - n.y) * (e.x - n.x), a = s - o;
  if (s > 0) {
    if (o <= 0)
      return Le.signum(a);
    i = s + o;
  } else if (s < 0) {
    if (o >= 0)
      return Le.signum(a);
    i = -s - o;
  } else
    return Le.signum(a);
  var u = Le.DP_SAFE_EPSILON * i;
  return a >= u || -a >= u ? Le.signum(a) : 2;
};
Le.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
yg.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(Le, yg);
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
  return [Lu];
};
et.prototype.getClass = function() {
  return et;
};
Object.defineProperties(et, Ea);
var vg = function() {
}, po = function(r) {
  function t() {
    r.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(vg), ee = function() {
};
ee.arraycopy = function(t, e, n, i, s) {
  for (var o = 0, a = e; a < e + s; a++)
    n[i + o] = t[a], o++;
};
ee.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var hn = function r() {
  if (this.x = null, this.y = null, this.w = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.w = 1;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.w = 1;
  } else if (arguments.length === 2) {
    if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
      var e = arguments[0], n = arguments[1];
      this.x = e, this.y = n, this.w = 1;
    } else if (arguments[0] instanceof r && arguments[1] instanceof r) {
      var i = arguments[0], s = arguments[1];
      this.x = i.y * s.w - s.y * i.w, this.y = s.x * i.w - i.x * s.w, this.w = i.x * s.y - s.x * i.y;
    } else if (arguments[0] instanceof E && arguments[1] instanceof E) {
      var o = arguments[0], a = arguments[1];
      this.x = o.y - a.y, this.y = a.x - o.x, this.w = o.x * a.y - a.x * o.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var h = arguments[0], f = arguments[1], g = arguments[2], d = arguments[3], p = h.y - f.y, _ = f.x - h.x, m = h.x * f.y - f.x * h.y, y = g.y - d.y, v = d.x - g.x, I = g.x * d.y - d.x * g.y;
    this.x = _ * I - v * m, this.y = y * m - p * I, this.w = p * v - y * _;
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
  var t = new E();
  return t.x = this.getX(), t.y = this.getY(), t;
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
hn.intersection = function(t, e, n, i) {
  var s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - i.y, l = i.x - n.x, c = n.x * i.y - i.x * n.y, h = o * c - l * a, f = u * a - s * c, g = s * l - u * o, d = h / g, p = f / g;
  if (H.isNaN(d) || H.isInfinite(d) || H.isNaN(p) || H.isInfinite(p))
    throw new po();
  return new E(d, p);
};
var X = function r() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.init(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3];
    this.init(s, o, a, u);
  }
}, Eg = { serialVersionUID: { configurable: !0 } };
X.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
X.prototype.equals = function(t) {
  if (!(t instanceof X))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
X.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new X();
  var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny, i = this._maxx < t._maxx ? this._maxx : t._maxx, s = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new X(e, i, n, s);
};
X.prototype.isNull = function() {
  return this._maxx < this._minx;
};
X.prototype.getMaxX = function() {
  return this._maxx;
};
X.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof X) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : n >= this._minx && n <= this._maxx && i >= this._miny && i <= this._maxy;
  }
};
X.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof X) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof E) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.isNull() ? !1 : !(n > this._maxx || n < this._minx || i > this._maxy || i < this._miny);
  }
};
X.prototype.getMinY = function() {
  return this._miny;
};
X.prototype.getMinX = function() {
  return this._minx;
};
X.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof X) {
      var e = arguments[0];
      if (e.isNull())
        return null;
      this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy));
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.isNull() ? (this._minx = n, this._maxx = n, this._miny = i, this._maxy = i) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), i < this._miny && (this._miny = i), i > this._maxy && (this._maxy = i));
  }
};
X.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
X.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
X.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
X.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
X.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
X.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
X.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
X.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
X.prototype.expandBy = function() {
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
X.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof X) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof E) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return this.covers(n, i);
  }
};
X.prototype.centre = function() {
  return this.isNull() ? null : new E((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
X.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof X) {
      var e = arguments[0];
      this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.init(n.x, i.x, n.y, i.y);
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3];
    s < o ? (this._minx = s, this._maxx = o) : (this._minx = o, this._maxx = s), a < u ? (this._miny = a, this._maxy = u) : (this._miny = u, this._maxy = a);
  }
};
X.prototype.getMaxY = function() {
  return this._maxy;
};
X.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var n = 0;
  return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
};
X.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + E.hashCode(this._minx), t = 37 * t + E.hashCode(this._maxx), t = 37 * t + E.hashCode(this._miny), t = 37 * t + E.hashCode(this._maxy), t;
};
X.prototype.interfaces_ = function() {
  return [on, an];
};
X.prototype.getClass = function() {
  return X;
};
X.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = Math.min(o.x, a.x), l = Math.max(o.x, a.x), c = Math.min(i.x, s.x), h = Math.max(i.x, s.x);
    return !(c > l || h < u || (u = Math.min(o.y, a.y), l = Math.max(o.y, a.y), c = Math.min(i.y, s.y), h = Math.max(i.y, s.y), c > l) || h < u);
  }
};
Eg.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(X, Eg);
var Sn = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, bu = function(t) {
  this.geometryFactory = t || new Q();
};
bu.prototype.read = function(t) {
  var e, n, i;
  t = t.replace(/[\n\r]/g, " ");
  var s = Sn.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (s = Sn.emptyTypeStr.exec(t), s[2] = void 0), s && (n = s[1].toLowerCase(), i = s[2], Gs[n] && (e = Gs[n].apply(this, [i]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
bu.prototype.write = function(t) {
  return this.extractGeometry(t);
};
bu.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!_r[e])
    return null;
  var n = e.toUpperCase(), i;
  return t.isEmpty() ? i = n + " EMPTY" : i = n + "(" + _r[e].apply(this, [t]) + ")", i;
};
var _r = {
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
    return _r.coordinate.call(this, t._coordinates._coordinates[0]);
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
    for (var e = this, n = [], i = 0, s = t._geometries.length; i < s; ++i)
      n.push("(" + _r.point.apply(e, [t._geometries[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return a comma delimited string of point coordinates from a line.
   *
   * @param {LineString} linestring
   * @return {String} A string of point coordinate strings representing the linestring.
   */
  linestring: function(t) {
    for (var e = this, n = [], i = 0, s = t._points._coordinates.length; i < s; ++i)
      n.push(_r.coordinate.apply(e, [t._points._coordinates[i]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], i = 0, s = t._points._coordinates.length; i < s; ++i)
      n.push(_r.coordinate.apply(e, [t._points._coordinates[i]]));
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
    for (var e = this, n = [], i = 0, s = t._geometries.length; i < s; ++i)
      n.push("(" + _r.linestring.apply(e, [t._geometries[i]]) + ")");
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
    n.push("(" + _r.linestring.apply(this, [t._shell]) + ")");
    for (var i = 0, s = t._holes.length; i < s; ++i)
      n.push("(" + _r.linestring.apply(e, [t._holes[i]]) + ")");
    return n.join(",");
  },
  /**
   * Return an array of polygon arrays from a multipolygon.
   *
   * @param {MultiPolygon} multipolygon
   * @return {String} An array of polygon arrays representing the multipolygon.
   */
  multipolygon: function(t) {
    for (var e = this, n = [], i = 0, s = t._geometries.length; i < s; ++i)
      n.push("(" + _r.polygon.apply(e, [t._geometries[i]]) + ")");
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
    for (var e = this, n = [], i = 0, s = t._geometries.length; i < s; ++i)
      n.push(e.extractGeometry(t._geometries[i]));
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
    var e = t.trim().split(Sn.spaces);
    return this.geometryFactory.createPoint(new E(
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
    for (var n, i = t.trim().split(","), s = [], o = 0, a = i.length; o < a; ++o)
      n = i[o].replace(Sn.trimParens, "$1"), s.push(Gs.point.apply(e, [n]));
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
    for (var e = t.trim().split(","), n = [], i, s = 0, o = e.length; s < o; ++s)
      i = e[s].trim().split(Sn.spaces), n.push(new E(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
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
    for (var e = t.trim().split(","), n = [], i, s = 0, o = e.length; s < o; ++s)
      i = e[s].trim().split(Sn.spaces), n.push(new E(Number.parseFloat(i[0]), Number.parseFloat(i[1])));
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
    for (var n, i = t.trim().split(Sn.parenComma), s = [], o = 0, a = i.length; o < a; ++o)
      n = i[o].replace(Sn.trimParens, "$1"), s.push(Gs.linestring.apply(e, [n]));
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
    for (var n, i, s, o = t.trim().split(Sn.parenComma), a, u = [], l = 0, c = o.length; l < c; ++l)
      n = o[l].replace(Sn.trimParens, "$1"), i = Gs.linestring.apply(e, [n]), s = e.geometryFactory.createLinearRing(i._points), l === 0 ? a = s : u.push(s);
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
    for (var n, i = t.trim().split(Sn.doubleParenComma), s = [], o = 0, a = i.length; o < a; ++o)
      n = i[o].replace(Sn.trimParens, "$1"), s.push(Gs.polygon.apply(e, [n]));
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
    for (var n = t.trim().split("|"), i = [], s = 0, o = n.length; s < o; ++s)
      i.push(e.read(n[s]));
    return this.geometryFactory.createGeometryCollection(i);
  }
}, gn = function(t) {
  this.parser = new bu(t);
};
gn.prototype.write = function(t) {
  return this.parser.write(t);
};
gn.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var Sr = function(r) {
  function t(e) {
    r.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new r().stack;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(Error), cu = function(r) {
  function t() {
    if (r.call(this), arguments.length === 0)
      r.call(this);
    else if (arguments.length === 1) {
      var e = arguments[0];
      r.call(this, e);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Sr), J = function() {
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
    throw new cu("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
J.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], J.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new cu() : new cu(e);
};
J.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], J.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new cu("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var It = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new E(), this._intPt[1] = new E(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, vs = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
It.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
It.prototype.getTopologySummary = function() {
  var t = new Wn();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
It.prototype.computeIntersection = function(t, e, n, i) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = i, this._result = this.computeIntersect(t, e, n, i);
};
It.prototype.getIntersectionNum = function() {
  return this._result;
};
It.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
    e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
It.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
It.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
It.prototype.isInteriorIntersection = function() {
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
It.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
It.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
It.prototype.hasIntersection = function() {
  return this._result !== It.NO_INTERSECTION;
};
It.prototype.getEdgeDistance = function(t, e) {
  var n = It.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return n;
};
It.prototype.isCollinear = function() {
  return this._result === It.COLLINEAR_INTERSECTION;
};
It.prototype.toString = function() {
  return gn.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + gn.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
It.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
It.prototype.isIntersection = function(t) {
  for (var e = this, n = 0; n < this._result; n++)
    if (e._intPt[n].equals2D(t))
      return !0;
  return !1;
};
It.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
It.prototype.interfaces_ = function() {
  return [];
};
It.prototype.getClass = function() {
  return It;
};
It.computeEdgeDistance = function(t, e, n) {
  var i = Math.abs(n.x - e.x), s = Math.abs(n.y - e.y), o = -1;
  if (t.equals(e))
    o = 0;
  else if (t.equals(n))
    i > s ? o = i : o = s;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    i > s ? o = a : o = u, o === 0 && !t.equals(e) && (o = Math.max(a, u));
  }
  return J.isTrue(!(o === 0 && !t.equals(e)), "Bad distance calculation"), o;
};
It.nonRobustComputeEdgeDistance = function(t, e, n) {
  var i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s);
  return J.isTrue(!(o === 0 && !t.equals(e)), "Invalid distance calculation"), o;
};
vs.DONT_INTERSECT.get = function() {
  return 0;
};
vs.DO_INTERSECT.get = function() {
  return 1;
};
vs.COLLINEAR.get = function() {
  return 2;
};
vs.NO_INTERSECTION.get = function() {
  return 0;
};
vs.POINT_INTERSECTION.get = function() {
  return 1;
};
vs.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(It, vs);
var Ai = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(n) {
    var i = new X(this._inputLines[0][0], this._inputLines[0][1]), s = new X(this._inputLines[1][0], this._inputLines[1][1]);
    return i.contains(n) && s.contains(n);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var n = arguments[0], i = arguments[1], s = arguments[2];
      if (this._isProper = !1, X.intersects(i, s, n) && G.orientationIndex(i, s, n) === 0 && G.orientationIndex(s, i, n) === 0)
        return this._isProper = !0, (n.equals(i) || n.equals(s)) && (this._isProper = !1), this._result = r.POINT_INTERSECTION, null;
      this._result = r.NO_INTERSECTION;
    } else
      return r.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(n, i, s, o, a) {
    a.x = this.smallestInAbsValue(n.x, i.x, s.x, o.x), a.y = this.smallestInAbsValue(n.y, i.y, s.y, o.y), n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(n, i, s, o) {
    var a = null;
    try {
      a = hn.intersection(n, i, s, o);
    } catch (u) {
      if (u instanceof po)
        a = t.nearestEndpoint(n, i, s, o);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(n, i, s, o) {
    var a = this.intersectionWithNormalization(n, i, s, o);
    return this.isInSegmentEnvelopes(a) || (a = new E(t.nearestEndpoint(n, i, s, o))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(n, i, s, o) {
    var a = n, u = Math.abs(a);
    return Math.abs(i) < u && (a = i, u = Math.abs(i)), Math.abs(s) < u && (a = s, u = Math.abs(s)), Math.abs(o) < u && (a = o), a;
  }, t.prototype.checkDD = function(n, i, s, o, a) {
    var u = Le.intersection(n, i, s, o), l = this.isInSegmentEnvelopes(u);
    ee.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && ee.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(n, i, s, o) {
    var a = new E(n), u = new E(i), l = new E(s), c = new E(o), h = new E();
    this.normalizeToEnvCentre(a, u, l, c, h);
    var f = this.safeHCoordinateIntersection(a, u, l, c);
    return f.x += h.x, f.y += h.y, f;
  }, t.prototype.computeCollinearIntersection = function(n, i, s, o) {
    var a = X.intersects(n, i, s), u = X.intersects(n, i, o), l = X.intersects(s, o, n), c = X.intersects(s, o, i);
    return a && u ? (this._intPt[0] = s, this._intPt[1] = o, r.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = n, this._intPt[1] = i, r.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !u && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = s, this._intPt[1] = i, s.equals(i) && !u && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !a && !c ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = o, this._intPt[1] = i, o.equals(i) && !a && !l ? r.POINT_INTERSECTION : r.COLLINEAR_INTERSECTION) : r.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, i, s, o, a) {
    var u = n.x < i.x ? n.x : i.x, l = n.y < i.y ? n.y : i.y, c = n.x > i.x ? n.x : i.x, h = n.y > i.y ? n.y : i.y, f = s.x < o.x ? s.x : o.x, g = s.y < o.y ? s.y : o.y, d = s.x > o.x ? s.x : o.x, p = s.y > o.y ? s.y : o.y, _ = u > f ? u : f, m = c < d ? c : d, y = l > g ? l : g, v = h < p ? h : p, I = (_ + m) / 2, x = (y + v) / 2;
    a.x = I, a.y = x, n.x -= a.x, n.y -= a.y, i.x -= a.x, i.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.computeIntersect = function(n, i, s, o) {
    if (this._isProper = !1, !X.intersects(n, i, s, o))
      return r.NO_INTERSECTION;
    var a = G.orientationIndex(n, i, s), u = G.orientationIndex(n, i, o);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return r.NO_INTERSECTION;
    var l = G.orientationIndex(s, o, n), c = G.orientationIndex(s, o, i);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return r.NO_INTERSECTION;
    var h = a === 0 && u === 0 && l === 0 && c === 0;
    return h ? this.computeCollinearIntersection(n, i, s, o) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : i.equals2D(s) || i.equals2D(o) ? this._intPt[0] = i : a === 0 ? this._intPt[0] = new E(s) : u === 0 ? this._intPt[0] = new E(o) : l === 0 ? this._intPt[0] = new E(n) : c === 0 && (this._intPt[0] = new E(i))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, i, s, o)), r.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, i, s, o) {
    var a = n, u = G.distancePointLine(n, s, o), l = G.distancePointLine(i, s, o);
    return l < u && (u = l, a = i), l = G.distancePointLine(s, n, i), l < u && (u = l, a = s), l = G.distancePointLine(o, n, i), l < u && (u = l, a = o), a;
  }, t;
}(It), es = function() {
};
es.prototype.interfaces_ = function() {
  return [];
};
es.prototype.getClass = function() {
  return es;
};
es.orientationIndex = function(t, e, n) {
  var i = e.x - t.x, s = e.y - t.y, o = n.x - e.x, a = n.y - e.y;
  return es.signOfDet2x2(i, s, o, a);
};
es.signOfDet2x2 = function(t, e, n, i) {
  var s = null, o = null, a = null;
  if (s = 1, t === 0 || i === 0)
    return e === 0 || n === 0 ? 0 : e > 0 ? n > 0 ? -s : s : n > 0 ? s : -s;
  if (e === 0 || n === 0)
    return i > 0 ? t > 0 ? s : -s : t > 0 ? -s : s;
  if (e > 0 ? i > 0 ? e <= i || (s = -s, o = t, t = n, n = o, o = e, e = i, i = o) : e <= -i ? (s = -s, n = -n, i = -i) : (o = t, t = -n, n = o, o = e, e = -i, i = o) : i > 0 ? -e <= i ? (s = -s, t = -t, e = -e) : (o = -t, t = n, n = o, o = -e, e = i, i = o) : e >= i ? (t = -t, e = -e, n = -n, i = -i) : (s = -s, o = -t, t = -n, n = o, o = -e, e = -i, i = o), t > 0)
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
    if (a = Math.floor(n / t), n = n - a * t, i = i - a * e, i < 0)
      return -s;
    if (i > e)
      return s;
    if (t > n + n) {
      if (e < i + i)
        return s;
    } else {
      if (e > i + i)
        return -s;
      n = t - n, i = e - i, s = -s;
    }
    if (i === 0)
      return n === 0 ? 0 : -s;
    if (n === 0 || (a = Math.floor(t / n), t = t - a * n, e = e - a * i, e < 0))
      return s;
    if (e > i)
      return -s;
    if (n > t + t) {
      if (i < e + e)
        return -s;
    } else {
      if (i > e + e)
        return s;
      t = n - t, e = i - e, s = -s;
    }
    if (e === 0)
      return t === 0 ? 0 : s;
    if (t === 0)
      return -s;
  }
};
var Mn = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
Mn.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, i = e.x;
    return n > i && (n = e.x, i = t.x), this._p.x >= n && this._p.x <= i && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var s = t.x - this._p.x, o = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = es.signOfDet2x2(s, o, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < o && (l = -l), l > 0 && this._crossingCount++;
  }
};
Mn.prototype.isPointInPolygon = function() {
  return this.getLocation() !== C.EXTERIOR;
};
Mn.prototype.getLocation = function() {
  return this._isPointOnSegment ? C.BOUNDARY : this._crossingCount % 2 === 1 ? C.INTERIOR : C.EXTERIOR;
};
Mn.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
Mn.prototype.interfaces_ = function() {
  return [];
};
Mn.prototype.getClass = function() {
  return Mn;
};
Mn.locatePointInRing = function() {
  if (arguments[0] instanceof E && q(arguments[1], et)) {
    for (var t = arguments[0], e = arguments[1], n = new Mn(t), i = new E(), s = new E(), o = 1; o < e.size(); o++)
      if (e.getCoordinate(o, i), e.getCoordinate(o - 1, s), n.countSegment(i, s), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof E && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new Mn(a), c = 1; c < u.length; c++) {
      var h = u[c], f = u[c - 1];
      if (l.countSegment(h, f), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var G = function() {
}, Es = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
G.prototype.interfaces_ = function() {
  return [];
};
G.prototype.getClass = function() {
  return G;
};
G.orientationIndex = function(t, e, n) {
  return Le.orientationIndex(t, e, n);
};
G.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, n = t[0].x, i = 1; i < t.length - 1; i++) {
      var s = t[i].x - n, o = t[i + 1].y, a = t[i - 1].y;
      e += s * (a - o);
    }
    return e / 2;
  } else if (q(arguments[0], et)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new E(), h = new E(), f = new E();
    u.getCoordinate(0, h), u.getCoordinate(1, f);
    var g = h.x;
    f.x -= g;
    for (var d = 0, p = 1; p < l - 1; p++)
      c.y = h.y, h.x = f.x, h.y = f.y, u.getCoordinate(p + 1, f), f.x -= g, d += h.x * (c.y - f.y);
    return d / 2;
  }
};
G.distanceLineLine = function(t, e, n, i) {
  if (t.equals(e))
    return G.distancePointLine(t, n, i);
  if (n.equals(i))
    return G.distancePointLine(i, t, e);
  var s = !1;
  if (!X.intersects(t, e, n, i))
    s = !0;
  else {
    var o = (e.x - t.x) * (i.y - n.y) - (e.y - t.y) * (i.x - n.x);
    if (o === 0)
      s = !0;
    else {
      var a = (t.y - n.y) * (i.x - n.x) - (t.x - n.x) * (i.y - n.y), u = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), l = u / o, c = a / o;
      (c < 0 || c > 1 || l < 0 || l > 1) && (s = !0);
    }
  }
  return s ? Ye.min(G.distancePointLine(t, n, i), G.distancePointLine(e, n, i), G.distancePointLine(n, t, e), G.distancePointLine(i, t, e)) : 0;
};
G.isPointInRing = function(t, e) {
  return G.locatePointInRing(t, e) !== C.EXTERIOR;
};
G.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, i = new E();
  t.getCoordinate(0, i);
  for (var s = i.x, o = i.y, a = 1; a < e; a++) {
    t.getCoordinate(a, i);
    var u = i.x, l = i.y, c = u - s, h = l - o;
    n += Math.sqrt(c * c + h * h), s = u, o = l;
  }
  return n;
};
G.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new Et("Ring has fewer than 4 points, so orientation cannot be determined");
  for (var n = t[0], i = 0, s = 1; s <= e; s++) {
    var o = t[s];
    o.y > n.y && (n = o, i = s);
  }
  var a = i;
  do
    a = a - 1, a < 0 && (a = e);
  while (t[a].equals2D(n) && a !== i);
  var u = i;
  do
    u = (u + 1) % e;
  while (t[u].equals2D(n) && u !== i);
  var l = t[a], c = t[u];
  if (l.equals2D(n) || c.equals2D(n) || l.equals2D(c))
    return !1;
  var h = G.computeOrientation(l, n, c), f = !1;
  return h === 0 ? f = l.x > c.x : f = h > 0, f;
};
G.locatePointInRing = function(t, e) {
  return Mn.locatePointInRing(t, e);
};
G.distancePointLinePerpendicular = function(t, e, n) {
  var i = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), s = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / i;
  return Math.abs(s) * Math.sqrt(i);
};
G.computeOrientation = function(t, e, n) {
  return G.orientationIndex(t, e, n);
};
G.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new Et("Line array must contain at least one vertex");
    for (var n = t.distance(e[0]), i = 0; i < e.length - 1; i++) {
      var s = G.distancePointLine(t, e[i], e[i + 1]);
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
G.isOnLine = function(t, e) {
  for (var n = new Ai(), i = 1; i < e.length; i++) {
    var s = e[i - 1], o = e[i];
    if (n.computeIntersection(t, s, o), n.hasIntersection())
      return !0;
  }
  return !1;
};
Es.CLOCKWISE.get = function() {
  return -1;
};
Es.RIGHT.get = function() {
  return G.CLOCKWISE;
};
Es.COUNTERCLOCKWISE.get = function() {
  return 1;
};
Es.LEFT.get = function() {
  return G.COUNTERCLOCKWISE;
};
Es.COLLINEAR.get = function() {
  return 0;
};
Es.STRAIGHT.get = function() {
  return G.COLLINEAR;
};
Object.defineProperties(G, Es);
var wr = function() {
};
wr.prototype.filter = function(t) {
};
wr.prototype.interfaces_ = function() {
  return [];
};
wr.prototype.getClass = function() {
  return wr;
};
var W = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, dr = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
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
    var n = arguments[0], i = arguments[1];
    return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, i);
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
    throw new Et("This method does not support GeometryCollection arguments");
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
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new X(this._envelope);
};
W.prototype.setSRID = function(t) {
  this._SRID = t;
};
W.prototype.setUserData = function(t) {
  this._userData = t;
};
W.prototype.compare = function(t, e) {
  for (var n = t.iterator(), i = e.iterator(); n.hasNext() && i.hasNext(); ) {
    var s = n.next(), o = i.next(), a = s.compareTo(o);
    if (a !== 0)
      return a;
  }
  return n.hasNext() ? 1 : i.hasNext() ? -1 : 0;
};
W.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
W.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === W.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === W.SORTINDEX_MULTIPOINT || this.getSortIndex() === W.SORTINDEX_MULTILINESTRING || this.getSortIndex() === W.SORTINDEX_MULTIPOLYGON;
};
W.prototype.interfaces_ = function() {
  return [Lu, on, an];
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
dr.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
dr.SORTINDEX_POINT.get = function() {
  return 0;
};
dr.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
dr.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
dr.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
dr.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
dr.SORTINDEX_POLYGON.get = function() {
  return 5;
};
dr.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
dr.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
dr.geometryChangedFilter.get = function() {
  return ac;
};
Object.defineProperties(W, dr);
var ac = function() {
};
ac.interfaces_ = function() {
  return [wr];
};
ac.filter = function(t) {
  t.geometryChangedAction();
};
var sr = function() {
};
sr.prototype.filter = function(t) {
};
sr.prototype.interfaces_ = function() {
  return [];
};
sr.prototype.getClass = function() {
  return sr;
};
var nn = function() {
}, Pr = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
nn.prototype.isInBoundary = function(t) {
};
nn.prototype.interfaces_ = function() {
  return [];
};
nn.prototype.getClass = function() {
  return nn;
};
Pr.Mod2BoundaryNodeRule.get = function() {
  return js;
};
Pr.EndPointBoundaryNodeRule.get = function() {
  return Zs;
};
Pr.MultiValentEndPointBoundaryNodeRule.get = function() {
  return Ks;
};
Pr.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Js;
};
Pr.MOD2_BOUNDARY_RULE.get = function() {
  return new js();
};
Pr.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Zs();
};
Pr.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Ks();
};
Pr.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Js();
};
Pr.OGC_SFS_BOUNDARY_RULE.get = function() {
  return nn.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(nn, Pr);
var js = function() {
};
js.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
js.prototype.interfaces_ = function() {
  return [nn];
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
  return [nn];
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
  return [nn];
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
  return [nn];
};
Js.prototype.getClass = function() {
  return Js;
};
var Bt = function() {
};
Bt.prototype.add = function() {
};
Bt.prototype.addAll = function() {
};
Bt.prototype.isEmpty = function() {
};
Bt.prototype.iterator = function() {
};
Bt.prototype.size = function() {
};
Bt.prototype.toArray = function() {
};
Bt.prototype.remove = function() {
};
function uc(r) {
  this.message = r || "";
}
uc.prototype = new Error();
uc.prototype.name = "IndexOutOfBoundsException";
var _o = function() {
};
_o.prototype.hasNext = function() {
};
_o.prototype.next = function() {
};
_o.prototype.remove = function() {
};
var fn = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Bt);
function mo(r) {
  this.message = r || "";
}
mo.prototype = new Error();
mo.prototype.name = "NoSuchElementException";
var D = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof Bt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [r, Bt];
  }, t.prototype.add = function(n) {
    return arguments.length === 1 ? this.array_.push(n) : this.array_.splice(arguments[0], arguments[1]), !0;
  }, t.prototype.clear = function() {
    this.array_ = [];
  }, t.prototype.addAll = function(n) {
    for (var i = this, s = n.iterator(); s.hasNext(); )
      i.add(s.next());
    return !0;
  }, t.prototype.set = function(n, i) {
    var s = this.array_[n];
    return this.array_[n] = i, s;
  }, t.prototype.iterator = function() {
    return new Zy(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new uc();
    return this.array_[n];
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], s = 0, o = this.array_.length; s < o; s++)
      i.push(n.array_[s]);
    return i;
  }, t.prototype.remove = function(n) {
    for (var i = this, s = !1, o = 0, a = this.array_.length; o < a; o++)
      if (i.array_[o] === n) {
        i.array_.splice(o, 1), s = !0;
        break;
      }
    return s;
  }, t;
}(fn), Zy = function(r) {
  function t(e) {
    r.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
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
}(_o), xa = function(r) {
  function t() {
    if (r.call(this), arguments.length !== 0) {
      if (arguments.length === 1) {
        var n = arguments[0];
        this.ensureCapacity(n.length), this.add(n, !0);
      } else if (arguments.length === 2) {
        var i = arguments[0], s = arguments[1];
        this.ensureCapacity(i.length), this.add(i, s);
      }
    }
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { coordArrayType: { configurable: !0 } };
  return e.coordArrayType.get = function() {
    return new Array(0).fill(null);
  }, t.prototype.getCoordinate = function(i) {
    return this.get(i);
  }, t.prototype.addAll = function() {
    var i = this;
    if (arguments.length === 2) {
      for (var s = arguments[0], o = arguments[1], a = !1, u = s.iterator(); u.hasNext(); )
        i.add(u.next(), o), a = !0;
      return a;
    } else
      return r.prototype.addAll.apply(this, arguments);
  }, t.prototype.clone = function() {
    for (var i = this, s = r.prototype.clone.call(this), o = 0; o < this.size(); o++)
      s.add(o, i.get(o).copy());
    return s;
  }, t.prototype.toCoordinateArray = function() {
    return this.toArray(t.coordArrayType);
  }, t.prototype.add = function() {
    var i = this;
    if (arguments.length === 1) {
      var s = arguments[0];
      r.prototype.add.call(this, s);
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var o = arguments[0], a = arguments[1];
        return this.add(o, a, !0), !0;
      } else if (arguments[0] instanceof E && typeof arguments[1] == "boolean") {
        var u = arguments[0], l = arguments[1];
        if (!l && this.size() >= 1) {
          var c = this.get(this.size() - 1);
          if (c.equals2D(u))
            return null;
        }
        r.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var h = arguments[0], f = arguments[1];
        return this.add(h, f), !0;
      }
    } else if (arguments.length === 3) {
      if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
        var g = arguments[0], d = arguments[1], p = arguments[2];
        if (p)
          for (var _ = 0; _ < g.length; _++)
            i.add(g[_], d);
        else
          for (var m = g.length - 1; m >= 0; m--)
            i.add(g[m], d);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof E) {
        var y = arguments[0], v = arguments[1], I = arguments[2];
        if (!I) {
          var x = this.size();
          if (x > 0) {
            if (y > 0) {
              var w = this.get(y - 1);
              if (w.equals2D(v))
                return null;
            }
            if (y < x) {
              var P = this.get(y);
              if (P.equals2D(v))
                return null;
            }
          }
        }
        r.prototype.add.call(this, y, v);
      }
    } else if (arguments.length === 4) {
      var L = arguments[0], R = arguments[1], O = arguments[2], V = arguments[3], N = 1;
      O > V && (N = -1);
      for (var B = O; B !== V; B += N)
        i.add(L[B], R);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new E(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(D), $ = function() {
}, Pu = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
Pu.ForwardComparator.get = function() {
  return ea;
};
Pu.BidirectionalComparator.get = function() {
  return Qs;
};
Pu.coordArrayType.get = function() {
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
    var i = t[n];
    if ($.indexOf(i, e) < 0)
      return i;
  }
  return null;
};
$.scroll = function(t, e) {
  var n = $.indexOf(e, t);
  if (n < 0)
    return null;
  var i = new Array(t.length).fill(null);
  ee.arraycopy(t, n, i, 0, t.length - n), ee.arraycopy(t, 0, i, t.length - n, n), ee.arraycopy(i, 0, t, 0, t.length);
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
    var i = arguments[0], s = arguments[1], o = arguments[2];
    if (i === s)
      return !0;
    if (i === null || s === null || i.length !== s.length)
      return !1;
    for (var a = 0; a < i.length; a++)
      if (o.compare(i[a], s[a]) !== 0)
        return !1;
    return !0;
  }
};
$.intersection = function(t, e) {
  for (var n = new xa(), i = 0; i < t.length; i++)
    e.intersects(t[i]) && n.add(t[i], !0);
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
  for (var e = t.length - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++) {
    var s = t[i];
    t[i] = t[e - i], t[e - i] = s;
  }
};
$.removeNull = function(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n] !== null && e++;
  var i = new Array(e).fill(null);
  if (e === 0)
    return i;
  for (var s = 0, o = 0; o < t.length; o++)
    t[o] !== null && (i[s++] = t[o]);
  return i;
};
$.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
      e[n] = new E(t[n]);
    return e;
  } else if (arguments.length === 5)
    for (var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      o[a + l] = new E(i[s + l]);
};
$.isEqualReversed = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var i = t[n], s = e[t.length - n - 1];
    if (i.compareTo(s) !== 0)
      return !1;
  }
  return !0;
};
$.envelope = function(t) {
  for (var e = new X(), n = 0; n < t.length; n++)
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
    var n = t.length - 1 - e, i = t[e].compareTo(t[n]);
    if (i !== 0)
      return i;
  }
  return 1;
};
$.compare = function(t, e) {
  for (var n = 0; n < t.length && n < e.length; ) {
    var i = t[n].compareTo(e[n]);
    if (i !== 0)
      return i;
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
  e = Ye.clamp(e, 0, t.length), n = Ye.clamp(n, -1, t.length);
  var i = n - e + 1;
  n < 0 && (i = 0), e >= t.length && (i = 0), n < e && (i = 0);
  var s = new Array(i).fill(null);
  if (i === 0)
    return s;
  for (var o = 0, a = e; a <= n; a++)
    s[o++] = t[a];
  return s;
};
Object.defineProperties($, Pu);
var ea = function() {
};
ea.prototype.compare = function(t, e) {
  var n = t, i = e;
  return $.compare(n, i);
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
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  var s = $.compare(n, i), o = $.isEqualReversed(n, i);
  return o ? 0 : s;
};
Qs.prototype.OLDcompare = function(t, e) {
  var n = t, i = e;
  if (n.length < i.length)
    return -1;
  if (n.length > i.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var s = $.increasingDirection(n), o = $.increasingDirection(i), a = s > 0 ? 0 : n.length - 1, u = o > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var c = n[a].compareTo(i[u]);
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
var xs = function() {
};
xs.prototype.get = function() {
};
xs.prototype.put = function() {
};
xs.prototype.size = function() {
};
xs.prototype.values = function() {
};
xs.prototype.entrySet = function() {
};
var Ky = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t;
}(xs);
function Ca(r) {
  this.message = r || "";
}
Ca.prototype = new Error();
Ca.prototype.name = "OperationNotSupported";
function Tu() {
}
Tu.prototype = new Bt();
Tu.prototype.contains = function() {
};
var lc = function(r) {
  function t() {
    r.call(this), this.array_ = [], arguments[0] instanceof Bt && this.addAll(arguments[0]);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.contains = function(n) {
    for (var i = this, s = 0, o = this.array_.length; s < o; s++) {
      var a = i.array_[s];
      if (a === n)
        return !0;
    }
    return !1;
  }, t.prototype.add = function(n) {
    return this.contains(n) ? !1 : (this.array_.push(n), !0);
  }, t.prototype.addAll = function(n) {
    for (var i = this, s = n.iterator(); s.hasNext(); )
      i.add(s.next());
    return !0;
  }, t.prototype.remove = function(n) {
    throw new Error();
  }, t.prototype.size = function() {
    return this.array_.length;
  }, t.prototype.isEmpty = function() {
    return this.array_.length === 0;
  }, t.prototype.toArray = function() {
    for (var n = this, i = [], s = 0, o = this.array_.length; s < o; s++)
      i.push(n.array_[s]);
    return i;
  }, t.prototype.iterator = function() {
    return new Jy(this);
  }, t;
}(Tu), Jy = function(r) {
  function t(e) {
    r.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new mo();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Ca();
  }, t;
}(_o), yr = 0, li = 1;
function bh(r) {
  return r === null ? yr : r.color;
}
function dt(r) {
  return r === null ? null : r.parent;
}
function pr(r, t) {
  r !== null && (r.color = t);
}
function tl(r) {
  return r === null ? null : r.left;
}
function Ph(r) {
  return r === null ? null : r.right;
}
function ue() {
  this.root_ = null, this.size_ = 0;
}
ue.prototype = new Ky();
ue.prototype.get = function(r) {
  for (var t = this.root_; t !== null; ) {
    var e = r.compareTo(t.key);
    if (e < 0)
      t = t.left;
    else if (e > 0)
      t = t.right;
    else
      return t.value;
  }
  return null;
};
ue.prototype.put = function(r, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: r,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: yr,
      getValue: function() {
        return this.value;
      },
      getKey: function() {
        return this.key;
      }
    }, this.size_ = 1, null;
  var e = this.root_, n, i;
  do
    if (n = e, i = r.compareTo(e.key), i < 0)
      e = e.left;
    else if (i > 0)
      e = e.right;
    else {
      var s = e.value;
      return e.value = t, s;
    }
  while (e !== null);
  var o = {
    key: r,
    left: null,
    right: null,
    value: t,
    parent: n,
    color: yr,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return i < 0 ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
};
ue.prototype.fixAfterInsertion = function(r) {
  var t = this;
  for (r.color = li; r != null && r !== this.root_ && r.parent.color === li; )
    if (dt(r) === tl(dt(dt(r)))) {
      var e = Ph(dt(dt(r)));
      bh(e) === li ? (pr(dt(r), yr), pr(e, yr), pr(dt(dt(r)), li), r = dt(dt(r))) : (r === Ph(dt(r)) && (r = dt(r), t.rotateLeft(r)), pr(dt(r), yr), pr(dt(dt(r)), li), t.rotateRight(dt(dt(r))));
    } else {
      var n = tl(dt(dt(r)));
      bh(n) === li ? (pr(dt(r), yr), pr(n, yr), pr(dt(dt(r)), li), r = dt(dt(r))) : (r === tl(dt(r)) && (r = dt(r), t.rotateRight(r)), pr(dt(r), yr), pr(dt(dt(r)), li), t.rotateLeft(dt(dt(r))));
    }
  this.root_.color = yr;
};
ue.prototype.values = function() {
  var r = new D(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t.value); (t = ue.successor(t)) !== null; )
      r.add(t.value);
  return r;
};
ue.prototype.entrySet = function() {
  var r = new lc(), t = this.getFirstEntry();
  if (t !== null)
    for (r.add(t); (t = ue.successor(t)) !== null; )
      r.add(t);
  return r;
};
ue.prototype.rotateLeft = function(r) {
  if (r != null) {
    var t = r.right;
    r.right = t.left, t.left != null && (t.left.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.left === r ? r.parent.left = t : r.parent.right = t, t.left = r, r.parent = t;
  }
};
ue.prototype.rotateRight = function(r) {
  if (r != null) {
    var t = r.left;
    r.left = t.right, t.right != null && (t.right.parent = r), t.parent = r.parent, r.parent === null ? this.root_ = t : r.parent.right === r ? r.parent.right = t : r.parent.left = t, t.right = r, r.parent = t;
  }
};
ue.prototype.getFirstEntry = function() {
  var r = this.root_;
  if (r != null)
    for (; r.left != null; )
      r = r.left;
  return r;
};
ue.successor = function(r) {
  if (r === null)
    return null;
  if (r.right !== null) {
    for (var t = r.right; t.left !== null; )
      t = t.left;
    return t;
  } else {
    for (var e = r.parent, n = r; e !== null && n === e.right; )
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
function xg() {
}
xg.prototype = new Tu();
function Fn() {
  this.array_ = [], arguments[0] instanceof Bt && this.addAll(arguments[0]);
}
Fn.prototype = new xg();
Fn.prototype.contains = function(r) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 0)
      return !0;
  }
  return !1;
};
Fn.prototype.add = function(r) {
  var t = this;
  if (this.contains(r))
    return !1;
  for (var e = 0, n = this.array_.length; e < n; e++) {
    var i = t.array_[e];
    if (i.compareTo(r) === 1)
      return t.array_.splice(e, 0, r), !0;
  }
  return this.array_.push(r), !0;
};
Fn.prototype.addAll = function(r) {
  for (var t = this, e = r.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
Fn.prototype.remove = function(r) {
  throw new Ca();
};
Fn.prototype.size = function() {
  return this.array_.length;
};
Fn.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
Fn.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
Fn.prototype.iterator = function() {
  return new Mu(this);
};
var Mu = function(r) {
  this.treeSet_ = r, this.position_ = 0;
};
Mu.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new mo();
  return this.treeSet_.array_[this.position_++];
};
Mu.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
Mu.prototype.remove = function() {
  throw new Ca();
};
var mi = function() {
};
mi.sort = function() {
  var t = arguments[0], e, n, i, s;
  if (arguments.length === 1)
    s = function(a, u) {
      return a.compareTo(u);
    }, t.sort(s);
  else if (arguments.length === 2)
    i = arguments[1], s = function(a, u) {
      return i.compare(a, u);
    }, t.sort(s);
  else if (arguments.length === 3) {
    n = t.slice(arguments[1], arguments[2]), n.sort();
    var o = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length));
    for (t.splice(0, t.length), e = 0; e < o.length; e++)
      t.push(o[e]);
  } else if (arguments.length === 4)
    for (n = t.slice(arguments[1], arguments[2]), i = arguments[3], s = function(a, u) {
      return i.compare(a, u);
    }, n.sort(s), o = t.slice(0, arguments[1]).concat(n, t.slice(arguments[2], t.length)), t.splice(0, t.length), e = 0; e < o.length; e++)
      t.push(o[e]);
};
mi.asList = function(t) {
  for (var e = new D(), n = 0, i = t.length; n < i; n++)
    e.add(t[n]);
  return e;
};
var nt = function() {
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
nt.prototype.interfaces_ = function() {
  return [];
};
nt.prototype.getClass = function() {
  return nt;
};
nt.toDimensionSymbol = function(t) {
  switch (t) {
    case nt.FALSE:
      return nt.SYM_FALSE;
    case nt.TRUE:
      return nt.SYM_TRUE;
    case nt.DONTCARE:
      return nt.SYM_DONTCARE;
    case nt.P:
      return nt.SYM_P;
    case nt.L:
      return nt.SYM_L;
    case nt.A:
      return nt.SYM_A;
  }
  throw new Et("Unknown dimension value: " + t);
};
nt.toDimensionValue = function(t) {
  switch (ta.toUpperCase(t)) {
    case nt.SYM_FALSE:
      return nt.FALSE;
    case nt.SYM_TRUE:
      return nt.TRUE;
    case nt.SYM_DONTCARE:
      return nt.DONTCARE;
    case nt.SYM_P:
      return nt.P;
    case nt.SYM_L:
      return nt.L;
    case nt.SYM_A:
      return nt.A;
  }
  throw new Et("Unknown dimension symbol: " + t);
};
Object.defineProperties(nt, Cn);
var kn = function() {
};
kn.prototype.filter = function(t) {
};
kn.prototype.interfaces_ = function() {
  return [];
};
kn.prototype.getClass = function() {
  return kn;
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
var ve = function(r) {
  function t(n, i) {
    if (r.call(this, i), this._geometries = n || [], r.hasNullElements(this._geometries))
      throw new Et("geometries must not contain null elements");
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var i = this, s = new X(), o = 0; o < this._geometries.length; o++)
      s.expandToInclude(i._geometries[o].getEnvelopeInternal());
    return s;
  }, t.prototype.getGeometryN = function(i) {
    return this._geometries[i];
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_GEOMETRYCOLLECTION;
  }, t.prototype.getCoordinates = function() {
    for (var i = this, s = new Array(this.getNumPoints()).fill(null), o = -1, a = 0; a < this._geometries.length; a++)
      for (var u = i._geometries[a].getCoordinates(), l = 0; l < u.length; l++)
        o++, s[o] = u[l];
    return s;
  }, t.prototype.getArea = function() {
    for (var i = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += i._geometries[o].getArea();
    return s;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s;
      if (this._geometries.length !== a._geometries.length)
        return !1;
      for (var u = 0; u < this._geometries.length; u++)
        if (!i._geometries[u].equalsExact(a._geometries[u], o))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, s = 0; s < this._geometries.length; s++)
      i._geometries[s].normalize();
    mi.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var i = this, s = nt.FALSE, o = 0; o < this._geometries.length; o++)
      s = Math.max(s, i._geometries[o].getBoundaryDimension());
    return s;
  }, t.prototype.getDimension = function() {
    for (var i = this, s = nt.FALSE, o = 0; o < this._geometries.length; o++)
      s = Math.max(s, i._geometries[o].getDimension());
    return s;
  }, t.prototype.getLength = function() {
    for (var i = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += i._geometries[o].getLength();
    return s;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, s = 0, o = 0; o < this._geometries.length; o++)
      s += i._geometries[o].getNumPoints();
    return s;
  }, t.prototype.getNumGeometries = function() {
    return this._geometries.length;
  }, t.prototype.reverse = function() {
    for (var i = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[a] = i._geometries[a].reverse();
    return this.getFactory().createGeometryCollection(o);
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var s = arguments[0], o = new Fn(mi.asList(this._geometries)), a = new Fn(mi.asList(s._geometries));
      return this.compare(o, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, h = this.getNumGeometries(), f = c.getNumGeometries(), g = 0; g < h && g < f; ) {
        var d = i.getGeometryN(g), p = c.getGeometryN(g), _ = d.compareToSameClass(p, l);
        if (_ !== 0)
          return _;
        g++;
      }
      return g < h ? 1 : g < f ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var i = this;
    if (q(arguments[0], sr))
      for (var s = arguments[0], o = 0; o < this._geometries.length; o++)
        i._geometries[o].apply(s);
    else if (q(arguments[0], dn)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (i._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], kn)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        i._geometries[c].apply(l);
    } else if (q(arguments[0], wr)) {
      var h = arguments[0];
      h.filter(this);
      for (var f = 0; f < this._geometries.length; f++)
        i._geometries[f].apply(h);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), J.shouldNeverReachHere(), null;
  }, t.prototype.clone = function() {
    var i = this, s = r.prototype.clone.call(this);
    s._geometries = new Array(this._geometries.length).fill(null);
    for (var o = 0; o < this._geometries.length; o++)
      s._geometries[o] = i._geometries[o].clone();
    return s;
  }, t.prototype.getGeometryType = function() {
    return "GeometryCollection";
  }, t.prototype.copy = function() {
    for (var i = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = i._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.isEmpty = function() {
    for (var i = this, s = 0; s < this._geometries.length; s++)
      if (!i._geometries[s].isEmpty())
        return !1;
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -5694727726395021e3;
  }, Object.defineProperties(t, e), t;
}(W), Ii = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, s) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? nt.FALSE : 0;
  }, t.prototype.isClosed = function() {
    var i = this;
    if (this.isEmpty())
      return !1;
    for (var s = 0; s < this._geometries.length; s++)
      if (!i._geometries[s].isClosed())
        return !1;
    return !0;
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.reverse = function() {
    for (var i = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[s - 1 - a] = i._geometries[a].reverse();
    return this.getFactory().createMultiLineString(o);
  }, t.prototype.getBoundary = function() {
    return new Qe(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var i = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = i._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [na];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ve), Qe = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = nn.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = i;
  }
};
Qe.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Qe.prototype.getBoundary = function() {
  return this._geom instanceof Rt ? this.boundaryLineString(this._geom) : this._geom instanceof Ii ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Qe.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Qe.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Qe.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, n = new D();
  this._endpointMap = new ue();
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var s = t.getGeometryN(i);
    s.getNumPoints() !== 0 && (e.addEndpoint(s.getCoordinateN(0)), e.addEndpoint(s.getCoordinateN(s.getNumPoints() - 1)));
  }
  for (var o = this._endpointMap.entrySet().iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && n.add(a.getKey());
  }
  return $.toCoordinateArray(n);
};
Qe.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new hu(), this._endpointMap.put(t, e)), e.count++;
};
Qe.prototype.interfaces_ = function() {
  return [];
};
Qe.prototype.getClass = function() {
  return Qe;
};
Qe.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Qe(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], s = new Qe(n, i);
    return s.getBoundary();
  }
};
var hu = function() {
  this.count = null;
};
hu.prototype.interfaces_ = function() {
  return [];
};
hu.prototype.getClass = function() {
  return hu;
};
function Qy() {
}
function $y() {
}
var tv = function() {
};
function ev() {
}
function nv() {
}
function rv() {
}
var $e = function() {
}, cc = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
$e.prototype.interfaces_ = function() {
  return [];
};
$e.prototype.getClass = function() {
  return $e;
};
$e.chars = function(t, e) {
  for (var n = new Array(e).fill(null), i = 0; i < e; i++)
    n[i] = t;
  return String(n);
};
$e.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ev(), n = new Qy();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var i = arguments[0], s = arguments[1], o = "";
    new $y($e.getStackTrace(i));
    for (var a = new rv(), u = 0; u < s; u++)
      try {
        o += a.readLine() + $e.NEWLINE;
      } catch (l) {
        if (l instanceof nv)
          J.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return o;
  }
};
$e.split = function(t, e) {
  for (var n = e.length, i = new D(), s = "" + t, o = s.indexOf(e); o >= 0; ) {
    var a = s.substring(0, o);
    i.add(a), s = s.substring(o + n), o = s.indexOf(e);
  }
  s.length > 0 && i.add(s);
  for (var u = new Array(i.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = i.get(l);
  return u;
};
$e.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return $e.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
$e.spaces = function(t) {
  return $e.chars(" ", t);
};
cc.NEWLINE.get = function() {
  return ee.getProperty("line.separator");
};
cc.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new tv();
};
Object.defineProperties($e, cc);
var Mt = function() {
};
Mt.prototype.interfaces_ = function() {
  return [];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Mt.copyCoord = function(t, e, n, i) {
  for (var s = Math.min(t.getDimension(), n.getDimension()), o = 0; o < s; o++)
    n.setOrdinate(i, o, t.getOrdinate(e, o));
};
Mt.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, et.X) === t.getOrdinate(e - 1, et.X) && t.getOrdinate(0, et.Y) === t.getOrdinate(e - 1, et.Y);
};
Mt.isEqual = function(t, e) {
  var n = t.size(), i = e.size();
  if (n !== i)
    return !1;
  for (var s = Math.min(t.getDimension(), e.getDimension()), o = 0; o < n; o++)
    for (var a = 0; a < s; a++) {
      var u = t.getOrdinate(o, a), l = e.getOrdinate(o, a);
      if (t.getOrdinate(o, a) !== e.getOrdinate(o, a) && !(H.isNaN(u) && H.isNaN(l)))
        return !1;
    }
  return !0;
};
Mt.extend = function(t, e, n) {
  var i = t.create(n, e.getDimension()), s = e.size();
  if (Mt.copy(e, 0, i, 0, s), s > 0)
    for (var o = s; o < n; o++)
      Mt.copy(e, s - 1, i, o, 1);
  return i;
};
Mt.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), i = 0; i <= n; i++)
    Mt.swap(t, i, e - i);
};
Mt.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var i = 0; i < t.getDimension(); i++) {
    var s = t.getOrdinate(e, i);
    t.setOrdinate(e, i, t.getOrdinate(n, i)), t.setOrdinate(n, i, s);
  }
};
Mt.copy = function(t, e, n, i, s) {
  for (var o = 0; o < s; o++)
    Mt.copyCoord(t, e + o, n, i + o);
};
Mt.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), i = new Wn();
    i.append("(");
    for (var s = 0; s < e; s++) {
      s > 0 && i.append(" ");
      for (var o = 0; o < n; o++)
        o > 0 && i.append(","), i.append($e.toString(t.getOrdinate(s, o)));
    }
    return i.append(")"), i.toString();
  }
};
Mt.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return Mt.createClosedRing(t, e, 4);
  var i = e.getOrdinate(0, et.X) === e.getOrdinate(n - 1, et.X) && e.getOrdinate(0, et.Y) === e.getOrdinate(n - 1, et.Y);
  return i ? e : Mt.createClosedRing(t, e, n + 1);
};
Mt.createClosedRing = function(t, e, n) {
  var i = t.create(n, e.getDimension()), s = e.size();
  Mt.copy(e, 0, i, 0, s);
  for (var o = s; o < n; o++)
    Mt.copy(e, 0, i, o, 1);
  return i;
};
var Rt = function(r) {
  function t(n, i) {
    r.call(this, i), this._points = null, this.init(n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new X() : this._points.expandEnvelope(new X());
  }, t.prototype.isRing = function() {
    return this.isClosed() && this.isSimple();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_LINESTRING;
  }, t.prototype.getCoordinates = function() {
    return this._points.toCoordinateArray();
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s;
      if (this._points.size() !== a._points.size())
        return !1;
      for (var u = 0; u < this._points.size(); u++)
        if (!i.equal(i._points.getCoordinate(u), a._points.getCoordinate(u), o))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    for (var i = this, s = 0; s < Math.trunc(this._points.size() / 2); s++) {
      var o = i._points.size() - 1 - s;
      if (!i._points.getCoordinate(s).equals(i._points.getCoordinate(o)))
        return i._points.getCoordinate(s).compareTo(i._points.getCoordinate(o)) > 0 && Mt.reverse(i._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? nt.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return G.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Mt.reverse(i);
    var s = this.getFactory().createLineString(i);
    return s;
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      for (var s = arguments[0], o = s, a = 0, u = 0; a < this._points.size() && u < o._points.size(); ) {
        var l = i._points.getCoordinate(a).compareTo(o._points.getCoordinate(u));
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
    var i = this;
    if (q(arguments[0], sr))
      for (var s = arguments[0], o = 0; o < this._points.size(); o++)
        s.filter(i._points.getCoordinate(o));
    else if (q(arguments[0], dn)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(i._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], kn)) {
      var l = arguments[0];
      l.filter(this);
    } else if (q(arguments[0], wr)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Qe(this).getBoundary();
  }, t.prototype.isEquivalentClass = function(i) {
    return i instanceof t;
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._points = this._points.clone(), i;
  }, t.prototype.getCoordinateN = function(i) {
    return this._points.getCoordinate(i);
  }, t.prototype.getGeometryType = function() {
    return "LineString";
  }, t.prototype.copy = function() {
    return new t(this._points.copy(), this._factory);
  }, t.prototype.getCoordinateSequence = function() {
    return this._points;
  }, t.prototype.isEmpty = function() {
    return this._points.size() === 0;
  }, t.prototype.init = function(i) {
    if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1)
      throw new Et("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
    this._points = i;
  }, t.prototype.isCoordinate = function(i) {
    for (var s = this, o = 0; o < this._points.size(); o++)
      if (s._points.getCoordinate(o).equals(i))
        return !0;
    return !1;
  }, t.prototype.getStartPoint = function() {
    return this.isEmpty() ? null : this.getPointN(0);
  }, t.prototype.getPointN = function(i) {
    return this.getFactory().createPoint(this._points.getCoordinate(i));
  }, t.prototype.interfaces_ = function() {
    return [na];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(W), ra = function() {
};
ra.prototype.interfaces_ = function() {
  return [];
};
ra.prototype.getClass = function() {
  return ra;
};
var De = function(r) {
  function t(n, i) {
    r.call(this, i), this._coordinates = n || null, this.init(this._coordinates);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new X();
    var i = new X();
    return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POINT;
  }, t.prototype.getCoordinates = function() {
    return this.isEmpty() ? [] : [this.getCoordinate()];
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      return this.isEquivalentClass(i) ? this.isEmpty() && i.isEmpty() ? !0 : this.isEmpty() !== i.isEmpty() ? !1 : this.equal(i.getCoordinate(), this.getCoordinate(), s) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
  }, t.prototype.getCoordinate = function() {
    return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
  }, t.prototype.getBoundaryDimension = function() {
    return nt.FALSE;
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
      var i = arguments[0], s = i;
      return this.getCoordinate().compareTo(s.getCoordinate());
    } else if (arguments.length === 2) {
      var o = arguments[0], a = arguments[1], u = o;
      return a.compare(this._coordinates, u._coordinates);
    }
  }, t.prototype.apply = function() {
    if (q(arguments[0], sr)) {
      var i = arguments[0];
      if (this.isEmpty())
        return null;
      i.filter(this.getCoordinate());
    } else if (q(arguments[0], dn)) {
      var s = arguments[0];
      if (this.isEmpty())
        return null;
      s.filter(this._coordinates, 0), s.isGeometryChanged() && this.geometryChanged();
    } else if (q(arguments[0], kn)) {
      var o = arguments[0];
      o.filter(this);
    } else if (q(arguments[0], wr)) {
      var a = arguments[0];
      a.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.clone = function() {
    var i = r.prototype.clone.call(this);
    return i._coordinates = this._coordinates.clone(), i;
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
  }, t.prototype.init = function(i) {
    i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), J.isTrue(i.size() <= 1), this._coordinates = i;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [ra];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(W), qr = function() {
};
qr.prototype.interfaces_ = function() {
  return [];
};
qr.prototype.getClass = function() {
  return qr;
};
var Ut = function(r) {
  function t(n, i, s) {
    if (r.call(this, s), this._shell = null, this._holes = null, n === null && (n = this.getFactory().createLinearRing()), i === null && (i = []), r.hasNullElements(i))
      throw new Et("holes must not contain null elements");
    if (n.isEmpty() && r.hasNonEmptyElements(i))
      throw new Et("shell is empty but holes are not");
    this._shell = n, this._holes = i;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this._shell.getEnvelopeInternal();
  }, t.prototype.getSortIndex = function() {
    return r.SORTINDEX_POLYGON;
  }, t.prototype.getCoordinates = function() {
    var i = this;
    if (this.isEmpty())
      return [];
    for (var s = new Array(this.getNumPoints()).fill(null), o = -1, a = this._shell.getCoordinates(), u = 0; u < a.length; u++)
      o++, s[o] = a[u];
    for (var l = 0; l < this._holes.length; l++)
      for (var c = i._holes[l].getCoordinates(), h = 0; h < c.length; h++)
        o++, s[o] = c[h];
    return s;
  }, t.prototype.getArea = function() {
    var i = this, s = 0;
    s += Math.abs(G.signedArea(this._shell.getCoordinateSequence()));
    for (var o = 0; o < this._holes.length; o++)
      s -= Math.abs(G.signedArea(i._holes[o].getCoordinateSequence()));
    return s;
  }, t.prototype.isRectangle = function() {
    if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5)
      return !1;
    for (var i = this._shell.getCoordinateSequence(), s = this.getEnvelopeInternal(), o = 0; o < 5; o++) {
      var a = i.getX(o);
      if (!(a === s.getMinX() || a === s.getMaxX()))
        return !1;
      var u = i.getY(o);
      if (!(u === s.getMinY() || u === s.getMaxY()))
        return !1;
    }
    for (var l = i.getX(0), c = i.getY(0), h = 1; h <= 4; h++) {
      var f = i.getX(h), g = i.getY(h), d = f !== l, p = g !== c;
      if (d === p)
        return !1;
      l = f, c = g;
    }
    return !0;
  }, t.prototype.equalsExact = function() {
    var i = this;
    if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      if (!this.isEquivalentClass(s))
        return !1;
      var a = s, u = this._shell, l = a._shell;
      if (!u.equalsExact(l, o) || this._holes.length !== a._holes.length)
        return !1;
      for (var c = 0; c < this._holes.length; c++)
        if (!i._holes[c].equalsExact(a._holes[c], o))
          return !1;
      return !0;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.normalize = function() {
    var i = this;
    if (arguments.length === 0) {
      this.normalize(this._shell, !0);
      for (var s = 0; s < this._holes.length; s++)
        i.normalize(i._holes[s], !1);
      mi.sort(this._holes);
    } else if (arguments.length === 2) {
      var o = arguments[0], a = arguments[1];
      if (o.isEmpty())
        return null;
      var u = new Array(o.getCoordinates().length - 1).fill(null);
      ee.arraycopy(o.getCoordinates(), 0, u, 0, u.length);
      var l = $.minCoordinate(o.getCoordinates());
      $.scroll(u, l), ee.arraycopy(u, 0, o.getCoordinates(), 0, u.length), o.getCoordinates()[u.length] = u[0], G.isCCW(o.getCoordinates()) === a && $.reverse(o.getCoordinates());
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
    var i = this, s = 0;
    s += this._shell.getLength();
    for (var o = 0; o < this._holes.length; o++)
      s += i._holes[o].getLength();
    return s;
  }, t.prototype.getNumPoints = function() {
    for (var i = this, s = this._shell.getNumPoints(), o = 0; o < this._holes.length; o++)
      s += i._holes[o].getNumPoints();
    return s;
  }, t.prototype.reverse = function() {
    var i = this, s = this.copy();
    s._shell = this._shell.copy().reverse(), s._holes = new Array(this._holes.length).fill(null);
    for (var o = 0; o < this._holes.length; o++)
      s._holes[o] = i._holes[o].copy().reverse();
    return s;
  }, t.prototype.convexHull = function() {
    return this.getExteriorRing().convexHull();
  }, t.prototype.compareToSameClass = function() {
    var i = this;
    if (arguments.length === 1) {
      var s = arguments[0], o = this._shell, a = s._shell;
      return o.compareToSameClass(a);
    } else if (arguments.length === 2) {
      var u = arguments[0], l = arguments[1], c = u, h = this._shell, f = c._shell, g = h.compareToSameClass(f, l);
      if (g !== 0)
        return g;
      for (var d = this.getNumInteriorRing(), p = c.getNumInteriorRing(), _ = 0; _ < d && _ < p; ) {
        var m = i.getInteriorRingN(_), y = c.getInteriorRingN(_), v = m.compareToSameClass(y, l);
        if (v !== 0)
          return v;
        _++;
      }
      return _ < d ? 1 : _ < p ? -1 : 0;
    }
  }, t.prototype.apply = function(i) {
    var s = this;
    if (q(i, sr)) {
      this._shell.apply(i);
      for (var o = 0; o < this._holes.length; o++)
        s._holes[o].apply(i);
    } else if (q(i, dn)) {
      if (this._shell.apply(i), !i.isDone())
        for (var a = 0; a < this._holes.length && (s._holes[a].apply(i), !i.isDone()); a++)
          ;
      i.isGeometryChanged() && this.geometryChanged();
    } else if (q(i, kn))
      i.filter(this);
    else if (q(i, wr)) {
      i.filter(this), this._shell.apply(i);
      for (var u = 0; u < this._holes.length; u++)
        s._holes[u].apply(i);
    }
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    var s = new Array(this._holes.length + 1).fill(null);
    s[0] = this._shell;
    for (var o = 0; o < this._holes.length; o++)
      s[o + 1] = i._holes[o];
    return s.length <= 1 ? this.getFactory().createLinearRing(s[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(s);
  }, t.prototype.clone = function() {
    var i = this, s = r.prototype.clone.call(this);
    s._shell = this._shell.clone(), s._holes = new Array(this._holes.length).fill(null);
    for (var o = 0; o < this._holes.length; o++)
      s._holes[o] = i._holes[o].clone();
    return s;
  }, t.prototype.getGeometryType = function() {
    return "Polygon";
  }, t.prototype.copy = function() {
    for (var i = this, s = this._shell.copy(), o = new Array(this._holes.length).fill(null), a = 0; a < o.length; a++)
      o[a] = i._holes[a].copy();
    return new t(s, o, this._factory);
  }, t.prototype.getExteriorRing = function() {
    return this._shell;
  }, t.prototype.isEmpty = function() {
    return this._shell.isEmpty();
  }, t.prototype.getInteriorRingN = function(i) {
    return this._holes[i];
  }, t.prototype.interfaces_ = function() {
    return [qr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(W), $s = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTIPOINT;
  }, t.prototype.isValid = function() {
    return !0;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, s) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getCoordinate = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return this._geometries[i].getCoordinate();
    } else
      return r.prototype.getCoordinate.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return nt.FALSE;
  }, t.prototype.getDimension = function() {
    return 0;
  }, t.prototype.getBoundary = function() {
    return this.getFactory().createGeometryCollection(null);
  }, t.prototype.getGeometryType = function() {
    return "MultiPoint";
  }, t.prototype.copy = function() {
    for (var i = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = i._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [ra];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ve), or = function(r) {
  function t(n, i) {
    n instanceof E && i instanceof Q && (n = i.getCoordinateSequenceFactory().create(n)), r.call(this, n, i), this.validateConstruction();
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return nt.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : r.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var i = this._points.copy();
    Mt.reverse(i);
    var s = this.getFactory().createLinearRing(i);
    return s;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !r.prototype.isClosed.call(this))
      throw new Et("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new Et("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
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
}(Rt), nr = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return W.SORTINDEX_MULTIPOLYGON;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      return this.isEquivalentClass(i) ? r.prototype.equalsExact.call(this, i, s) : !1;
    } else
      return r.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return 1;
  }, t.prototype.getDimension = function() {
    return 2;
  }, t.prototype.reverse = function() {
    for (var i = this, s = this._geometries.length, o = new Array(s).fill(null), a = 0; a < this._geometries.length; a++)
      o[a] = i._geometries[a].reverse();
    return this.getFactory().createMultiPolygon(o);
  }, t.prototype.getBoundary = function() {
    var i = this;
    if (this.isEmpty())
      return this.getFactory().createMultiLineString();
    for (var s = new D(), o = 0; o < this._geometries.length; o++)
      for (var a = i._geometries[o], u = a.getBoundary(), l = 0; l < u.getNumGeometries(); l++)
        s.add(u.getGeometryN(l));
    var c = new Array(s.size()).fill(null);
    return this.getFactory().createMultiLineString(s.toArray(c));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var i = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = i._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [qr];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ve), rn = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, Ou = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
rn.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
rn.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
rn.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ve ? this.editGeometryCollection(t, e) : t instanceof Ut ? this.editPolygon(t, e) : t instanceof De ? e.edit(t, this._factory) : t instanceof Rt ? e.edit(t, this._factory) : (J.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
rn.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, i = e.edit(t, this._factory), s = new D(), o = 0; o < i.getNumGeometries(); o++) {
    var a = n.edit(i.getGeometryN(o), e);
    a === null || a.isEmpty() || s.add(a);
  }
  return i.getClass() === $s ? this._factory.createMultiPoint(s.toArray([])) : i.getClass() === Ii ? this._factory.createMultiLineString(s.toArray([])) : i.getClass() === nr ? this._factory.createMultiPolygon(s.toArray([])) : this._factory.createGeometryCollection(s.toArray([]));
};
rn.prototype.editPolygon = function(t, e) {
  var n = this, i = e.edit(t, this._factory);
  if (i === null && (i = this._factory.createPolygon(null)), i.isEmpty())
    return i;
  var s = this.edit(i.getExteriorRing(), e);
  if (s === null || s.isEmpty())
    return this._factory.createPolygon();
  for (var o = new D(), a = 0; a < i.getNumInteriorRing(); a++) {
    var u = n.edit(i.getInteriorRingN(a), e);
    u === null || u.isEmpty() || o.add(u);
  }
  return this._factory.createPolygon(s, o.toArray([]));
};
rn.prototype.interfaces_ = function() {
  return [];
};
rn.prototype.getClass = function() {
  return rn;
};
rn.GeometryEditorOperation = function() {
};
Ou.NoOpGeometryOperation.get = function() {
  return ia;
};
Ou.CoordinateOperation.get = function() {
  return sa;
};
Ou.CoordinateSequenceOperation.get = function() {
  return oa;
};
Object.defineProperties(rn, Ou);
var ia = function() {
};
ia.prototype.edit = function(t, e) {
  return t;
};
ia.prototype.interfaces_ = function() {
  return [rn.GeometryEditorOperation];
};
ia.prototype.getClass = function() {
  return ia;
};
var sa = function() {
};
sa.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof or ? e.createLinearRing(n) : t instanceof Rt ? e.createLineString(n) : t instanceof De ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
sa.prototype.interfaces_ = function() {
  return [rn.GeometryEditorOperation];
};
sa.prototype.getClass = function() {
  return sa;
};
var oa = function() {
};
oa.prototype.edit = function(t, e) {
  return t instanceof or ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof Rt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof De ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
oa.prototype.interfaces_ = function() {
  return [rn.GeometryEditorOperation];
};
oa.prototype.getClass = function() {
  return oa;
};
var Pt = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var n = 0; n < e; n++)
        t._coordinates[n] = new E();
    } else if (q(arguments[0], et)) {
      var i = arguments[0];
      if (i === null)
        return this._coordinates = new Array(0).fill(null), null;
      this._dimension = i.getDimension(), this._coordinates = new Array(i.size()).fill(null);
      for (var s = 0; s < this._coordinates.length; s++)
        t._coordinates[s] = i.getCoordinateCopy(s);
    }
  } else if (arguments.length === 2) {
    if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
      var o = arguments[0], a = arguments[1];
      this._coordinates = o, this._dimension = a, o === null && (this._coordinates = new Array(0).fill(null));
    } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
      var u = arguments[0], l = arguments[1];
      this._coordinates = new Array(u).fill(null), this._dimension = l;
      for (var c = 0; c < u; c++)
        t._coordinates[c] = new E();
    }
  }
}, Cg = { serialVersionUID: { configurable: !0 } };
Pt.prototype.setOrdinate = function(t, e, n) {
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
      throw new Et("invalid ordinateIndex");
  }
};
Pt.prototype.size = function() {
  return this._coordinates.length;
};
Pt.prototype.getOrdinate = function(t, e) {
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
Pt.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z;
  }
};
Pt.prototype.getCoordinateCopy = function(t) {
  return new E(this._coordinates[t]);
};
Pt.prototype.getDimension = function() {
  return this._dimension;
};
Pt.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
Pt.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].clone();
  return new Pt(e, this._dimension);
};
Pt.prototype.expandEnvelope = function(t) {
  for (var e = this, n = 0; n < this._coordinates.length; n++)
    t.expandToInclude(e._coordinates[n]);
  return t;
};
Pt.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].copy();
  return new Pt(e, this._dimension);
};
Pt.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new Wn(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var n = 1; n < this._coordinates.length; n++)
      e.append(", "), e.append(t._coordinates[n]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
Pt.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
Pt.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
Pt.prototype.interfaces_ = function() {
  return [et, an];
};
Pt.prototype.getClass = function() {
  return Pt;
};
Cg.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(Pt, Cg);
var ar = function() {
}, hc = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
ar.prototype.readResolve = function() {
  return ar.instance();
};
ar.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new Pt(t);
    } else if (q(arguments[0], et)) {
      var e = arguments[0];
      return new Pt(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    return i > 3 && (i = 3), i < 2 ? new Pt(n) : new Pt(n, i);
  }
};
ar.prototype.interfaces_ = function() {
  return [Hs, an];
};
ar.prototype.getClass = function() {
  return ar;
};
ar.instance = function() {
  return ar.instanceObject;
};
hc.serialVersionUID.get = function() {
  return -4099577099607551500;
};
hc.instanceObject.get = function() {
  return new ar();
};
Object.defineProperties(ar, hc);
var Ig = function(r) {
  function t() {
    r.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.get = function(n) {
    return this.map_.get(n) || null;
  }, t.prototype.put = function(n, i) {
    return this.map_.set(n, i), i;
  }, t.prototype.values = function() {
    for (var n = new D(), i = this.map_.values(), s = i.next(); !s.done; )
      n.add(s.value), s = i.next();
    return n;
  }, t.prototype.entrySet = function() {
    var n = new lc();
    return this.map_.entries().forEach(function(i) {
      return n.add(i);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(xs), it = function r() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = r.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof Gn) {
      var t = arguments[0];
      this._modelType = t, t === r.FIXED && this.setScale(1);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      this._modelType = r.FIXED, this.setScale(e);
    } else if (arguments[0] instanceof r) {
      var n = arguments[0];
      this._modelType = n._modelType, this._scale = n._scale;
    }
  }
}, fc = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
it.prototype.equals = function(t) {
  if (!(t instanceof it))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
it.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), i = e.getMaximumSignificantDigits();
  return new Dn(n).compareTo(new Dn(i));
};
it.prototype.getScale = function() {
  return this._scale;
};
it.prototype.isFloating = function() {
  return this._modelType === it.FLOATING || this._modelType === it.FLOATING_SINGLE;
};
it.prototype.getType = function() {
  return this._modelType;
};
it.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === it.FLOATING ? t = "Floating" : this._modelType === it.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === it.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
it.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (H.isNaN(t))
      return t;
    if (this._modelType === it.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === it.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof E) {
    var n = arguments[0];
    if (this._modelType === it.FLOATING)
      return null;
    n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
  }
};
it.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === it.FLOATING ? t = 16 : this._modelType === it.FLOATING_SINGLE ? t = 6 : this._modelType === it.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
it.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
it.prototype.interfaces_ = function() {
  return [an, on];
};
it.prototype.getClass = function() {
  return it;
};
it.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
fc.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
fc.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(it, fc);
var Gn = function r(t) {
  this._name = t || null, r.nameToTypeMap.put(t, this);
}, gc = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
Gn.prototype.readResolve = function() {
  return Gn.nameToTypeMap.get(this._name);
};
Gn.prototype.toString = function() {
  return this._name;
};
Gn.prototype.interfaces_ = function() {
  return [an];
};
Gn.prototype.getClass = function() {
  return Gn;
};
gc.serialVersionUID.get = function() {
  return -552860263173159e4;
};
gc.nameToTypeMap.get = function() {
  return new Ig();
};
Object.defineProperties(Gn, gc);
it.Type = Gn;
it.FIXED = new Gn("FIXED");
it.FLOATING = new Gn("FLOATING");
it.FLOATING_SINGLE = new Gn("FLOATING SINGLE");
var Q = function r() {
  this._precisionModel = new it(), this._SRID = 0, this._coordinateSequenceFactory = r.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? q(arguments[0], Hs) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof it && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, Sg = { serialVersionUID: { configurable: !0 } };
Q.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new E(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new E(t.getMinX(), t.getMinY()), new E(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new E(t.getMinX(), t.getMinY()), new E(t.getMinX(), t.getMaxY()), new E(t.getMaxX(), t.getMaxY()), new E(t.getMaxX(), t.getMinY()), new E(t.getMinX(), t.getMinY())]), null);
};
Q.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new Rt(this.getCoordinateSequenceFactory().create(t), this);
    if (q(t, et))
      return new Rt(t, this);
  } else
    return new Rt(this.getCoordinateSequenceFactory().create([]), this);
};
Q.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Ii(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Ii(t, this);
  }
};
Q.prototype.buildGeometry = function(t) {
  for (var e = null, n = !1, i = !1, s = t.iterator(); s.hasNext(); ) {
    var o = s.next(), a = o.getClass();
    e === null && (e = a), a !== e && (n = !0), o.isGeometryCollectionOrDerived() && (i = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (n || i)
    return this.createGeometryCollection(Q.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Ut)
      return this.createMultiPolygon(Q.toPolygonArray(t));
    if (u instanceof Rt)
      return this.createMultiLineString(Q.toLineStringArray(t));
    if (u instanceof De)
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
    if (arguments[0] instanceof E) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (q(arguments[0], et)) {
      var e = arguments[0];
      return new De(e, this);
    }
  }
};
Q.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
Q.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Ut(null, null, this);
  if (arguments.length === 1) {
    if (q(arguments[0], et)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof or) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var i = arguments[0], s = arguments[1];
    return new Ut(i, s, this);
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
  var e = new rn(this);
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
      return new or(e, this);
    }
  }
};
Q.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new nr(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new nr(t, this);
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
      var i = arguments[0];
      if (i === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var s = new Array(i.size()).fill(null), o = 0; o < i.size(); o++) {
        var a = t.getCoordinateSequenceFactory().create(1, i.getDimension());
        Mt.copy(i, o, a, 0, 1), s[o] = t.createPoint(a);
      }
      return this.createMultiPoint(s);
    }
  }
};
Q.prototype.interfaces_ = function() {
  return [an];
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
  return ar.instance();
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
Sg.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(Q, Sg);
var iv = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Au = function(t) {
  this.geometryFactory = t || new Q();
};
Au.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!Ln[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return iv.indexOf(n) !== -1 ? Ln[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? Ln[n].apply(this, [e.geometries]) : Ln[n].apply(this, [e]);
};
Au.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!mr[e])
    throw new Error("Geometry is not supported");
  return mr[e].apply(this, [t]);
};
var Ln = {
  /**
   * Parse a GeoJSON Feature object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} Feature with geometry/bbox converted to JSTS Geometries.
   */
  Feature: function(r) {
    var t = {};
    for (var e in r)
      t[e] = r[e];
    if (r.geometry) {
      var n = r.geometry.type;
      if (!Ln[n])
        throw new Error("Unknown GeoJSON type: " + r.type);
      t.geometry = this.read(r.geometry);
    }
    return r.bbox && (t.bbox = Ln.bbox.apply(this, [r.bbox])), t;
  },
  /**
   * Parse a GeoJSON FeatureCollection object
   *
   * @param {Object}
   *          obj Object to parse.
   *
   * @return {Object} FeatureCollection with geometry/bbox converted to JSTS Geometries.
   */
  FeatureCollection: function(r) {
    var t = this, e = {};
    if (r.features) {
      e.features = [];
      for (var n = 0; n < r.features.length; ++n)
        e.features.push(t.read(r.features[n]));
    }
    return r.bbox && (e.bbox = this.parse.bbox.apply(this, [r.bbox])), e;
  },
  /**
   * Convert the ordinates in an array to an array of Coordinates
   *
   * @param {Array}
   *          array Array with {Number}s.
   *
   * @return {Array} Array with Coordinates.
   */
  coordinates: function(r) {
    for (var t = [], e = 0; e < r.length; ++e) {
      var n = r[e];
      t.push(new E(n[0], n[1]));
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
  bbox: function(r) {
    return this.geometryFactory.createLinearRing([
      new E(r[0], r[1]),
      new E(r[2], r[1]),
      new E(r[2], r[3]),
      new E(r[0], r[3]),
      new E(r[0], r[1])
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
  Point: function(r) {
    var t = new E(r[0], r[1]);
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
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(Ln.Point.apply(t, [r[n]]));
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
  LineString: function(r) {
    var t = Ln.coordinates.apply(this, [r]);
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
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n)
      e.push(Ln.LineString.apply(t, [r[n]]));
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
  Polygon: function(r) {
    for (var t = this, e = Ln.coordinates.apply(this, [r[0]]), n = this.geometryFactory.createLinearRing(e), i = [], s = 1; s < r.length; ++s) {
      var o = r[s], a = Ln.coordinates.apply(t, [o]), u = t.geometryFactory.createLinearRing(a);
      i.push(u);
    }
    return this.geometryFactory.createPolygon(n, i);
  },
  /**
   * Convert an Array to a MultiPolygon
   *
   * @param {Array}
   *          array Array of arrays with shell and rings.
   *
   * @return {MultiPolygon} MultiPolygon.
   */
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(Ln.Polygon.apply(t, [i]));
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
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r.length; ++n) {
      var i = r[n];
      e.push(t.read(i));
    }
    return this.geometryFactory.createGeometryCollection(e);
  }
}, mr = {
  /**
   * Convert a Coordinate to an Array
   *
   * @param {Coordinate}
   *          coordinate Coordinate to convert.
   *
   * @return {Array} Array of ordinates.
   */
  coordinate: function(r) {
    return [r.x, r.y];
  },
  /**
   * Convert a Point to a GeoJSON object
   *
   * @param {Point}
   *          point Point to convert.
   *
   * @return {Array} Array of 2 ordinates (paired to a coordinate).
   */
  Point: function(r) {
    var t = mr.coordinate.apply(this, [r.getCoordinate()]);
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
  MultiPoint: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], s = mr.Point.apply(t, [i]);
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
  LineString: function(r) {
    for (var t = this, e = [], n = r.getCoordinates(), i = 0; i < n.length; ++i) {
      var s = n[i];
      e.push(mr.coordinate.apply(t, [s]));
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
  MultiLineString: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], s = mr.LineString.apply(t, [i]);
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
  Polygon: function(r) {
    var t = this, e = [], n = mr.LineString.apply(this, [r._shell]);
    e.push(n.coordinates);
    for (var i = 0; i < r._holes.length; ++i) {
      var s = r._holes[i], o = mr.LineString.apply(t, [s]);
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
  MultiPolygon: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], s = mr.Polygon.apply(t, [i]);
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
  GeometryCollection: function(r) {
    for (var t = this, e = [], n = 0; n < r._geometries.length; ++n) {
      var i = r._geometries[n], s = i.getGeometryType();
      e.push(mr[s].apply(t, [i]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, dc = function(t) {
  this.geometryFactory = t || new Q(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new Au(this.geometryFactory);
};
dc.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === it.FIXED && this.reducePrecision(e), e;
};
dc.prototype.reducePrecision = function(t) {
  var e = this, n, i;
  if (t.coordinate)
    this.precisionModel.makePrecise(t.coordinate);
  else if (t.points)
    for (n = 0, i = t.points.length; n < i; n++)
      e.precisionModel.makePrecise(t.points[n]);
  else if (t.geometries)
    for (n = 0, i = t.geometries.length; n < i; n++)
      e.reducePrecision(t.geometries[n]);
};
var wg = function() {
  this.parser = new Au(this.geometryFactory);
};
wg.prototype.write = function(t) {
  return this.parser.write(t);
};
var T = function() {
}, Du = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
T.prototype.interfaces_ = function() {
  return [];
};
T.prototype.getClass = function() {
  return T;
};
T.opposite = function(t) {
  return t === T.LEFT ? T.RIGHT : t === T.RIGHT ? T.LEFT : t;
};
Du.ON.get = function() {
  return 0;
};
Du.LEFT.get = function() {
  return 1;
};
Du.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(T, Du);
function Fu(r) {
  this.message = r || "";
}
Fu.prototype = new Error();
Fu.prototype.name = "EmptyStackException";
function qn() {
  this.array_ = [];
}
qn.prototype = new fn();
qn.prototype.add = function(r) {
  return this.array_.push(r), !0;
};
qn.prototype.get = function(r) {
  if (r < 0 || r >= this.size())
    throw new Error();
  return this.array_[r];
};
qn.prototype.push = function(r) {
  return this.array_.push(r), r;
};
qn.prototype.pop = function(r) {
  if (this.array_.length === 0)
    throw new Fu();
  return this.array_.pop();
};
qn.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new Fu();
  return this.array_[this.array_.length - 1];
};
qn.prototype.empty = function() {
  return this.array_.length === 0;
};
qn.prototype.isEmpty = function() {
  return this.empty();
};
qn.prototype.search = function(r) {
  return this.array_.indexOf(r);
};
qn.prototype.size = function() {
  return this.array_.length;
};
qn.prototype.toArray = function() {
  for (var r = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(r.array_[e]);
  return t;
};
var Bn = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
Bn.prototype.getCoordinate = function() {
  return this._minCoord;
};
Bn.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
Bn.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  J.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], i = G.computeOrientation(this._minCoord, n, e), s = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && i === G.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && i === G.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
};
Bn.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), i = n.getCoordinates();
  if (e < 0 || e + 1 >= i.length || i[e].y === i[e + 1].y)
    return -1;
  var s = T.LEFT;
  return i[e].y < i[e + 1].y && (s = T.RIGHT), s;
};
Bn.prototype.getEdge = function() {
  return this._orientedDe;
};
Bn.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), i = 0; i < n.length - 1; i++)
    (e._minCoord === null || n[i].x > e._minCoord.x) && (e._minDe = t, e._minIndex = i, e._minCoord = n[i]);
};
Bn.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
Bn.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isForward() && e.checkForRightmostCoordinate(i);
  }
  J.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var s = this.getRightmostSide(this._minDe, this._minIndex);
  s === T.LEFT && (this._orientedDe = this._minDe.getSym());
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
var Rr = function(r) {
  function t(e, n) {
    r.call(this, t.msgWithCoord(e, n)), this.pt = n ? new E(n) : null, this.name = "TopologyException";
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getCoordinate = function() {
    return this.pt;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.msgWithCoord = function(n, i) {
    return i ? n : n + " [ " + i + " ]";
  }, t;
}(Sr), ku = function() {
  this.array_ = [];
};
ku.prototype.addLast = function(t) {
  this.array_.push(t);
};
ku.prototype.removeFirst = function() {
  return this.array_.shift();
};
ku.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var Ee = function() {
  this._finder = null, this._dirEdgeList = new D(), this._nodes = new D(), this._rightMostCoord = null, this._env = null, this._finder = new Bn();
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
  for (var e = this, n = null, i = t.getEdges().iterator(); i.hasNext(); ) {
    var s = i.next();
    if (s.isVisited() || s.getSym().isVisited()) {
      n = s;
      break;
    }
  }
  if (n === null)
    throw new Rr("unable to find edge to compute depths at " + t.getCoordinate());
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
  var e = this, n = new lc(), i = new ku(), s = t.getNode();
  for (i.addLast(s), n.add(s), t.setVisited(!0); !i.isEmpty(); ) {
    var o = i.removeFirst();
    n.add(o), e.computeNodeDepth(o);
    for (var a = o.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var c = l.getNode();
        n.contains(c) || (i.addLast(c), n.add(c));
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
    for (var t = new X(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var n = e.next(), i = n.getEdge().getCoordinates(), s = 0; s < i.length - 1; s++)
        t.expandToInclude(i[s]);
    this._env = t;
  }
  return this._env;
};
Ee.prototype.addReachable = function(t) {
  var e = this, n = new qn();
  for (n.add(t); !n.empty(); ) {
    var i = n.pop();
    e.add(i, n);
  }
};
Ee.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(T.LEFT, t.getDepth(T.RIGHT)), e.setDepth(T.RIGHT, t.getDepth(T.LEFT));
};
Ee.prototype.add = function(t, e) {
  var n = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var i = t.getEdges().iterator(); i.hasNext(); ) {
    var s = i.next();
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
  return [on];
};
Ee.prototype.getClass = function() {
  return Ee;
};
var pt = function r() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var n = arguments[0];
      this.init(1), this.location[T.ON] = n;
    } else if (arguments[0] instanceof r) {
      var i = arguments[0];
      if (this.init(i.location.length), i !== null)
        for (var s = 0; s < this.location.length; s++)
          t.location[s] = i.location[s];
    }
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[T.ON] = o, this.location[T.LEFT] = a, this.location[T.RIGHT] = u;
  }
};
pt.prototype.setAllLocations = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] = t;
};
pt.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== C.NONE)
      return !1;
  return !0;
};
pt.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === C.NONE && (e.location[n] = t);
};
pt.prototype.isLine = function() {
  return this.location.length === 1;
};
pt.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[T.ON] = this.location[T.ON], n[T.LEFT] = C.NONE, n[T.RIGHT] = C.NONE, this.location = n;
  }
  for (var i = 0; i < this.location.length; i++)
    e.location[i] === C.NONE && i < t.location.length && (e.location[i] = t.location[i]);
};
pt.prototype.getLocations = function() {
  return this.location;
};
pt.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[T.LEFT];
  this.location[T.LEFT] = this.location[T.RIGHT], this.location[T.RIGHT] = t;
};
pt.prototype.toString = function() {
  var t = new Wn();
  return this.location.length > 1 && t.append(C.toLocationSymbol(this.location[T.LEFT])), t.append(C.toLocationSymbol(this.location[T.ON])), this.location.length > 1 && t.append(C.toLocationSymbol(this.location[T.RIGHT])), t.toString();
};
pt.prototype.setLocations = function(t, e, n) {
  this.location[T.ON] = t, this.location[T.LEFT] = e, this.location[T.RIGHT] = n;
};
pt.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : C.NONE;
};
pt.prototype.isArea = function() {
  return this.location.length > 1;
};
pt.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === C.NONE)
      return !0;
  return !1;
};
pt.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(T.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.location[e] = n;
  }
};
pt.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(C.NONE);
};
pt.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
pt.prototype.allPositionsEqual = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    if (e.location[n] !== t)
      return !1;
  return !0;
};
pt.prototype.interfaces_ = function() {
  return [];
};
pt.prototype.getClass = function() {
  return pt;
};
var ut = function r() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new pt(t), this.elt[1] = new pt(t);
    } else if (arguments[0] instanceof r) {
      var e = arguments[0];
      this.elt[0] = new pt(e.elt[0]), this.elt[1] = new pt(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1];
    this.elt[0] = new pt(C.NONE), this.elt[1] = new pt(C.NONE), this.elt[n].setLocation(i);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    this.elt[0] = new pt(s, o, a), this.elt[1] = new pt(s, o, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], h = arguments[3];
    this.elt[0] = new pt(C.NONE, C.NONE, C.NONE), this.elt[1] = new pt(C.NONE, C.NONE, C.NONE), this.elt[u].setLocations(l, c, h);
  }
};
ut.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
ut.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
ut.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
ut.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.elt[e].setAllLocationsIfNull(n);
  }
};
ut.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
ut.prototype.merge = function(t) {
  for (var e = this, n = 0; n < 2; n++)
    e.elt[n] === null && t.elt[n] !== null ? e.elt[n] = new pt(t.elt[n]) : e.elt[n].merge(t.elt[n]);
};
ut.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
ut.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(T.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.elt[e].get(n);
  }
};
ut.prototype.toString = function() {
  var t = new Wn();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
ut.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
ut.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
ut.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(T.ON, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this.elt[n].setLocation(i, s);
  }
};
ut.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
ut.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
ut.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new pt(this.elt[t].location[0]));
};
ut.prototype.interfaces_ = function() {
  return [];
};
ut.prototype.getClass = function() {
  return ut;
};
ut.toLineLabel = function(t) {
  for (var e = new ut(C.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var Ft = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new D(), this._pts = new D(), this._label = new ut(C.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new D(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
Ft.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++)
    e[n] = t._pts.get(n);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = G.isCCW(this._ring.getCoordinates());
};
Ft.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
Ft.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var n = t, i = !0;
  do {
    if (n === null)
      throw new Rr("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new Rr("Directed Edge visited twice during ring-building at " + n.getCoordinate());
    e._edges.add(n);
    var s = n.getLabel();
    J.isTrue(s.isArea()), e.mergeLabel(s), e.addPoints(n.getEdge(), n.isForward(), i), i = !1, e.setEdgeRing(n, e), n = e.getNext(n);
  } while (n !== this._startDe);
};
Ft.prototype.getLinearRing = function() {
  return this._ring;
};
Ft.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
Ft.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var n = e.getNode(), i = n.getEdges().getOutgoingDegree(t);
    i > t._maxNodeDegree && (t._maxNodeDegree = i), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
Ft.prototype.addPoints = function(t, e, n) {
  var i = this, s = t.getCoordinates();
  if (e) {
    var o = 1;
    n && (o = 0);
    for (var a = o; a < s.length; a++)
      i._pts.add(s[a]);
  } else {
    var u = s.length - 2;
    n && (u = s.length - 1);
    for (var l = u; l >= 0; l--)
      i._pts.add(s[l]);
  }
};
Ft.prototype.isHole = function() {
  return this._isHole;
};
Ft.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
Ft.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), n = e.getEnvelopeInternal();
  if (!n.contains(t) || !G.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var i = this._holes.iterator(); i.hasNext(); ) {
    var s = i.next();
    if (s.containsPoint(t))
      return !1;
  }
  return !0;
};
Ft.prototype.addHole = function(t) {
  this._holes.add(t);
};
Ft.prototype.isShell = function() {
  return this._shell === null;
};
Ft.prototype.getLabel = function() {
  return this._label;
};
Ft.prototype.getEdges = function() {
  return this._edges;
};
Ft.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
Ft.prototype.getShell = function() {
  return this._shell;
};
Ft.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = e.getLocation(n, T.RIGHT);
    if (i === C.NONE)
      return null;
    if (this._label.getLocation(n) === C.NONE)
      return this._label.setLocation(n, i), null;
  }
};
Ft.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
Ft.prototype.toPolygon = function(t) {
  for (var e = this, n = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++)
    n[i] = e._holes.get(i).getLinearRing();
  var s = t.createPolygon(this.getLinearRing(), n);
  return s;
};
Ft.prototype.interfaces_ = function() {
  return [];
};
Ft.prototype.getClass = function() {
  return Ft;
};
var sv = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.setEdgeRing = function(n, i) {
    n.setMinEdgeRing(i);
  }, t.prototype.getNext = function(n) {
    return n.getNextMin();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ft), ov = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, i = new D(), s = this._startDe;
    do {
      if (s.getMinEdgeRing() === null) {
        var o = new sv(s, n._geometryFactory);
        i.add(o);
      }
      s = s.getNext();
    } while (s !== this._startDe);
    return i;
  }, t.prototype.setEdgeRing = function(n, i) {
    n.setEdgeRing(i);
  }, t.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
    var n = this, i = this._startDe;
    do {
      var s = i.getNode();
      s.getEdges().linkMinimalDirectedEdges(n), i = i.getNext();
    } while (i !== this._startDe);
  }, t.prototype.getNext = function(n) {
    return n.getNext();
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ft), Ue = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Ue.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Ue.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Ue.prototype.isCovered = function() {
  return this._isCovered;
};
Ue.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Ue.prototype.setLabel = function(t) {
  this._label = t;
};
Ue.prototype.getLabel = function() {
  return this._label;
};
Ue.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Ue.prototype.updateIM = function(t) {
  J.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Ue.prototype.isInResult = function() {
  return this._isInResult;
};
Ue.prototype.isVisited = function() {
  return this._isVisited;
};
Ue.prototype.interfaces_ = function() {
  return [];
};
Ue.prototype.getClass = function() {
  return Ue;
};
var Gu = function(r) {
  function t() {
    r.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new ut(0, C.NONE);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isIncidentEdgeInResult = function() {
    for (var n = this.getEdges().getEdges().iterator(); n.hasNext(); ) {
      var i = n.next();
      if (i.getEdge().isInResult())
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
  }, t.prototype.computeMergedLocation = function(n, i) {
    var s = C.NONE;
    if (s = this._label.getLocation(i), !n.isNull(i)) {
      var o = n.getLocation(i);
      s !== C.BOUNDARY && (s = o);
    }
    return s;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this._label === null ? this._label = new ut(n, i) : this._label.setLocation(n, i);
    } else
      return r.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var n = this;
    if (arguments[0] instanceof t) {
      var i = arguments[0];
      this.mergeLabel(i._label);
    } else if (arguments[0] instanceof ut)
      for (var s = arguments[0], o = 0; o < 2; o++) {
        var a = n.computeMergedLocation(s, o), u = n._label.getLocation(o);
        u === C.NONE && n._label.setLocation(o, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var i = C.NONE;
    this._label !== null && (i = this._label.getLocation(n));
    var s = null;
    switch (i) {
      case C.BOUNDARY:
        s = C.INTERIOR;
        break;
      case C.INTERIOR:
        s = C.BOUNDARY;
        break;
      default:
        s = C.BOUNDARY;
        break;
    }
    this._label.setLocation(n, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ue), zn = function() {
  this.nodeMap = new ue(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
zn.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
zn.prototype.addNode = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof Gu) {
    var n = arguments[0], i = this.nodeMap.get(n.getCoordinate());
    return i === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (i.mergeLabel(n), i);
  }
};
zn.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
zn.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
zn.prototype.values = function() {
  return this.nodeMap.values();
};
zn.prototype.getBoundaryNodes = function(t) {
  for (var e = new D(), n = this.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.getLabel().getLocation(t) === C.BOUNDARY && e.add(i);
  }
  return e;
};
zn.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
var ht = function() {
}, Ia = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
ht.prototype.interfaces_ = function() {
  return [];
};
ht.prototype.getClass = function() {
  return ht;
};
ht.isNorthern = function(t) {
  return t === ht.NE || t === ht.NW;
};
ht.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var n = (t - e + 4) % 4;
  return n === 2;
};
ht.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var n = (t - e + 4) % 4;
  if (n === 2)
    return -1;
  var i = t < e ? t : e, s = t > e ? t : e;
  return i === 0 && s === 3 ? 3 : i;
};
ht.isInHalfPlane = function(t, e) {
  return e === ht.SE ? t === ht.SE || t === ht.SW : t === e || t === e + 1;
};
ht.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new Et("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? ht.NE : ht.SE : e >= 0 ? ht.NW : ht.SW;
  } else if (arguments[0] instanceof E && arguments[1] instanceof E) {
    var n = arguments[0], i = arguments[1];
    if (i.x === n.x && i.y === n.y)
      throw new Et("Cannot compute the quadrant for two identical points " + n);
    return i.x >= n.x ? i.y >= n.y ? ht.NE : ht.SE : i.y >= n.y ? ht.NW : ht.SW;
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
Object.defineProperties(ht, Ia);
var le = function() {
  if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
    var t = arguments[0];
    this._edge = t;
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], s = null;
    this._edge = e, this.init(n, i), this._label = s;
  } else if (arguments.length === 4) {
    var o = arguments[0], a = arguments[1], u = arguments[2], l = arguments[3];
    this._edge = o, this.init(a, u), this._label = l;
  }
};
le.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : G.computeOrientation(t._p0, t._p1, this._p1);
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
  var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), i = n.lastIndexOf("."), s = n.substring(i + 1);
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
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf("."), i = e.substring(n + 1);
  return "  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
le.prototype.computeLabel = function(t) {
};
le.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = ht.quadrant(this._dx, this._dy), J.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
le.prototype.interfaces_ = function() {
  return [on];
};
le.prototype.getClass = function() {
  return le;
};
var Rl = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    if (r.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n)
      this.init(e.getCoordinate(0), e.getCoordinate(1));
    else {
      var i = e.getNumPoints() - 1;
      this.init(e.getCoordinate(i), e.getCoordinate(i - 1));
    }
    this.computeDirectedLabel();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getNextMin = function() {
    return this._nextMin;
  }, t.prototype.getDepth = function(n) {
    return this._depth[n];
  }, t.prototype.setVisited = function(n) {
    this._isVisited = n;
  }, t.prototype.computeDirectedLabel = function() {
    this._label = new ut(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(n, i) {
    if (this._depth[n] !== -999 && this._depth[n] !== i)
      throw new Rr("assigned depths do not match", this.getCoordinate());
    this._depth[n] = i;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, i = !0, s = 0; s < 2; s++)
      n._label.isArea(s) && n._label.getLocation(s, T.LEFT) === C.INTERIOR && n._label.getLocation(s, T.RIGHT) === C.INTERIOR || (i = !1);
    return i;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    r.prototype.print.call(this, n), n.print(" " + this._depth[T.LEFT] + "/" + this._depth[T.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), i = !this._label.isArea(0) || this._label.allPositionsEqual(0, C.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, C.EXTERIOR);
    return n && i && s;
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
  }, t.prototype.setEdgeDepths = function(n, i) {
    var s = this.getEdge().getDepthDelta();
    this._isForward || (s = -s);
    var o = 1;
    n === T.LEFT && (o = -1);
    var a = T.opposite(n), u = s * o, l = i + u;
    this.setDepth(n, i), this.setDepth(a, l);
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
  }, t.depthFactor = function(n, i) {
    return n === C.EXTERIOR && i === C.INTERIOR ? 1 : n === C.INTERIOR && i === C.EXTERIOR ? -1 : 0;
  }, t;
}(le), to = function() {
};
to.prototype.createNode = function(t) {
  return new Gu(t, null);
};
to.prototype.interfaces_ = function() {
  return [];
};
to.prototype.getClass = function() {
  return to;
};
var St = function() {
  if (this._edges = new D(), this._nodes = null, this._edgeEndList = new D(), arguments.length === 0)
    this._nodes = new zn(new to());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new zn(t);
  }
};
St.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var n = 0; n < this._edges.size(); n++) {
    t.println("edge " + n + ":");
    var i = e._edges.get(n);
    i.print(t), i.eiList.print(t);
  }
};
St.prototype.find = function(t) {
  return this._nodes.find(t);
};
St.prototype.addNode = function() {
  if (arguments[0] instanceof Gu) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof E) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
St.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
St.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
St.prototype.debugPrintln = function(t) {
  ee.out.println(t);
};
St.prototype.isBoundaryNode = function(t, e) {
  var n = this._nodes.find(e);
  if (n === null)
    return !1;
  var i = n.getLabel();
  return i !== null && i.getLocation(t) === C.BOUNDARY;
};
St.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
St.prototype.matchInSameDirection = function(t, e, n, i) {
  return t.equals(n) ? G.computeOrientation(t, e, i) === G.COLLINEAR && ht.quadrant(t, e) === ht.quadrant(n, i) : !1;
};
St.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
St.prototype.debugPrint = function(t) {
  ee.out.print(t);
};
St.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
St.prototype.findEdgeInSameDirection = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var s = n._edges.get(i), o = s.getCoordinates();
    if (n.matchInSameDirection(t, e, o[0], o[1]) || n.matchInSameDirection(t, e, o[o.length - 1], o[o.length - 2]))
      return s;
  }
  return null;
};
St.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
St.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.getEdge() === t)
      return n;
  }
  return null;
};
St.prototype.addEdges = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e._edges.add(i);
    var s = new Rl(i, !0), o = new Rl(i, !1);
    s.setSym(o), o.setSym(s), e.add(s), e.add(o);
  }
};
St.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
St.prototype.getNodes = function() {
  return this._nodes.values();
};
St.prototype.findEdge = function(t, e) {
  for (var n = this, i = 0; i < this._edges.size(); i++) {
    var s = n._edges.get(i), o = s.getCoordinates();
    if (t.equals(o[0]) && e.equals(o[1]))
      return s;
  }
  return null;
};
St.prototype.interfaces_ = function() {
  return [];
};
St.prototype.getClass = function() {
  return St;
};
St.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().linkResultDirectedEdges();
  }
};
var Fe = function() {
  this._geometryFactory = null, this._shellList = new D();
  var t = arguments[0];
  this._geometryFactory = t;
};
Fe.prototype.sortShellsAndHoles = function(t, e, n) {
  for (var i = t.iterator(); i.hasNext(); ) {
    var s = i.next();
    s.isHole() ? n.add(s) : e.add(s);
  }
};
Fe.prototype.computePolygons = function(t) {
  for (var e = this, n = new D(), i = t.iterator(); i.hasNext(); ) {
    var s = i.next(), o = s.toPolygon(e._geometryFactory);
    n.add(o);
  }
  return n;
};
Fe.prototype.placeFreeHoles = function(t, e) {
  for (var n = this, i = e.iterator(); i.hasNext(); ) {
    var s = i.next();
    if (s.getShell() === null) {
      var o = n.findEdgeRingContaining(s, t);
      if (o === null)
        throw new Rr("unable to assign hole to a shell", s.getCoordinate(0));
      s.setShell(o);
    }
  }
};
Fe.prototype.buildMinimalEdgeRings = function(t, e, n) {
  for (var i = this, s = new D(), o = t.iterator(); o.hasNext(); ) {
    var a = o.next();
    if (a.getMaxNodeDegree() > 2) {
      a.linkDirectedEdgesForMinimalEdgeRings();
      var u = a.buildMinimalRings(), l = i.findShell(u);
      l !== null ? (i.placePolygonHoles(l, u), e.add(l)) : n.addAll(u);
    } else
      s.add(a);
  }
  return s;
};
Fe.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.containsPoint(t))
      return !0;
  }
  return !1;
};
Fe.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, n = new D(), i = t.iterator(); i.hasNext(); ) {
    var s = i.next();
    if (s.isInResult() && s.getLabel().isArea() && s.getEdgeRing() === null) {
      var o = new ov(s, e._geometryFactory);
      n.add(o), o.setInResult();
    }
  }
  return n;
};
Fe.prototype.placePolygonHoles = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next();
    i.isHole() && i.setShell(t);
  }
};
Fe.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
Fe.prototype.findEdgeRingContaining = function(t, e) {
  for (var n = t.getLinearRing(), i = n.getEnvelopeInternal(), s = n.getCoordinateN(0), o = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), h = c.getEnvelopeInternal();
    o !== null && (a = o.getLinearRing().getEnvelopeInternal());
    var f = !1;
    h.contains(i) && G.isPointInRing(s, c.getCoordinates()) && (f = !0), f && (o === null || a.contains(h)) && (o = l);
  }
  return o;
};
Fe.prototype.findShell = function(t) {
  for (var e = 0, n = null, i = t.iterator(); i.hasNext(); ) {
    var s = i.next();
    s.isHole() || (n = s, e++);
  }
  return J.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
};
Fe.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    St.linkResultDirectedEdges(n);
    var i = this.buildMaximalEdgeRings(e), s = new D(), o = this.buildMinimalEdgeRings(i, this._shellList, s);
    this.sortShellsAndHoles(o, this._shellList, s), this.placeFreeHoles(this._shellList, s);
  }
};
Fe.prototype.interfaces_ = function() {
  return [];
};
Fe.prototype.getClass = function() {
  return Fe;
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
  return [eo, an];
};
pn.prototype.getClass = function() {
  return pn;
};
var Nr = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new D(), this._items.add(null);
};
Nr.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
Nr.prototype.size = function() {
  return this._size;
};
Nr.prototype.reorder = function(t) {
  for (var e = this, n = null, i = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(i) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, i);
};
Nr.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
Nr.prototype.isEmpty = function() {
  return this._size === 0;
};
Nr.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
Nr.prototype.interfaces_ = function() {
  return [];
};
Nr.prototype.getClass = function() {
  return Nr;
};
var Hr = function() {
};
Hr.prototype.visitItem = function(t) {
};
Hr.prototype.interfaces_ = function() {
  return [];
};
Hr.prototype.getClass = function() {
  return Hr;
};
var ns = function() {
};
ns.prototype.insert = function(t, e) {
};
ns.prototype.remove = function(t, e) {
};
ns.prototype.query = function() {
};
ns.prototype.interfaces_ = function() {
  return [];
};
ns.prototype.getClass = function() {
  return ns;
};
var Xt = function() {
  if (this._childBoundables = new D(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, Rg = { serialVersionUID: { configurable: !0 } };
Xt.prototype.getLevel = function() {
  return this._level;
};
Xt.prototype.size = function() {
  return this._childBoundables.size();
};
Xt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Xt.prototype.addChildBoundable = function(t) {
  J.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Xt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Xt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Xt.prototype.interfaces_ = function() {
  return [eo, an];
};
Xt.prototype.getClass = function() {
  return Xt;
};
Rg.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Xt, Rg);
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
  e ? mi.sort(n, e) : mi.sort(n);
  for (var i = t.iterator(), s = 0, o = n.length; s < o; s++)
    i.next(), i.set(n[s]);
};
_n.singletonList = function(t) {
  var e = new D();
  return e.add(t), e;
};
var At = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
};
At.prototype.expandToQueue = function(t, e) {
  var n = At.isComposite(this._boundable1), i = At.isComposite(this._boundable2);
  if (n && i)
    return At.area(this._boundable1) > At.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (n)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (i)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new Et("neither boundable is composite");
};
At.prototype.isLeaves = function() {
  return !(At.isComposite(this._boundable1) || At.isComposite(this._boundable2));
};
At.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
At.prototype.expand = function(t, e, n, i) {
  for (var s = this, o = t.getChildBoundables(), a = o.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new At(u, e, s._itemDistance);
    l.getDistance() < i && n.add(l);
  }
};
At.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
At.prototype.getDistance = function() {
  return this._distance;
};
At.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
At.prototype.interfaces_ = function() {
  return [on];
};
At.prototype.getClass = function() {
  return At;
};
At.area = function(t) {
  return t.getBounds().getArea();
};
At.isComposite = function(t) {
  return t instanceof Xt;
};
var Ht = function r() {
  if (this._root = null, this._built = !1, this._itemBoundables = new D(), this._nodeCapacity = null, arguments.length === 0) {
    var t = r.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    J.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, Bu = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
Ht.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
Ht.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
Ht.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var s = i.next();
      s instanceof Xt ? n += t.size(s) : s instanceof pn && (n += 1);
    }
    return n;
  }
};
Ht.prototype.removeItem = function(t, e) {
  for (var n = null, i = t.getChildBoundables().iterator(); i.hasNext(); ) {
    var s = i.next();
    s instanceof pn && s.getItem() === e && (n = s);
  }
  return n !== null ? (t.getChildBoundables().remove(n), !0) : !1;
};
Ht.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new D() : e;
  } else if (arguments.length === 1) {
    for (var n = arguments[0], i = new D(), s = n.getChildBoundables().iterator(); s.hasNext(); ) {
      var o = s.next();
      if (o instanceof Xt) {
        var a = t.itemsTree(o);
        a !== null && i.add(a);
      } else
        o instanceof pn ? i.add(o.getItem()) : J.shouldNeverReachHere();
    }
    return i.size() <= 0 ? null : i;
  }
};
Ht.prototype.insert = function(t, e) {
  J.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new pn(t, e));
};
Ht.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], n = new D();
    return this.boundablesAtLevel(e, this._root, n), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2];
    if (J.isTrue(i > -2), s.getLevel() === i)
      return o.add(s), null;
    for (var a = s.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Xt ? t.boundablesAtLevel(i, u, o) : (J.isTrue(u instanceof pn), i === -1 && o.add(u));
    }
    return null;
  }
};
Ht.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var n = new D();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, n), n;
  } else if (arguments.length === 2) {
    var i = arguments[0], s = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), i) && this.query(i, this._root, s);
  } else if (arguments.length === 3) {
    if (q(arguments[2], Hr) && arguments[0] instanceof Object && arguments[1] instanceof Xt)
      for (var o = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var h = l.get(c);
        t.getIntersectsOp().intersects(h.getBounds(), o) && (h instanceof Xt ? t.query(o, h, u) : h instanceof pn ? u.visitItem(h.getItem()) : J.shouldNeverReachHere());
      }
    else if (q(arguments[2], fn) && arguments[0] instanceof Object && arguments[1] instanceof Xt)
      for (var f = arguments[0], g = arguments[1], d = arguments[2], p = g.getChildBoundables(), _ = 0; _ < p.size(); _++) {
        var m = p.get(_);
        t.getIntersectsOp().intersects(m.getBounds(), f) && (m instanceof Xt ? t.query(f, m, d) : m instanceof pn ? d.add(m.getItem()) : J.shouldNeverReachHere());
      }
  }
};
Ht.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
Ht.prototype.getRoot = function() {
  return this.build(), this._root;
};
Ht.prototype.remove = function() {
  var t = this;
  if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.build(), this.getIntersectsOp().intersects(this._root.getBounds(), e) ? this.remove(e, this._root, n) : !1;
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2], a = this.removeItem(s, o);
    if (a)
      return !0;
    for (var u = null, l = s.getChildBoundables().iterator(); l.hasNext(); ) {
      var c = l.next();
      if (t.getIntersectsOp().intersects(c.getBounds(), i) && c instanceof Xt && (a = t.remove(i, c, o), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && s.getChildBoundables().remove(u), a;
  }
};
Ht.prototype.createHigherLevels = function(t, e) {
  J.isTrue(!t.isEmpty());
  var n = this.createParentBoundables(t, e + 1);
  return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
};
Ht.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, i = e.getChildBoundables().iterator(); i.hasNext(); ) {
      var s = i.next();
      if (s instanceof Xt) {
        var o = t.depth(s);
        o > n && (n = o);
      }
    }
    return n + 1;
  }
};
Ht.prototype.createParentBoundables = function(t, e) {
  var n = this;
  J.isTrue(!t.isEmpty());
  var i = new D();
  i.add(this.createNode(e));
  var s = new D(t);
  _n.sort(s, this.getComparator());
  for (var o = s.iterator(); o.hasNext(); ) {
    var a = o.next();
    n.lastNode(i).getChildBoundables().size() === n.getNodeCapacity() && i.add(n.createNode(e)), n.lastNode(i).addChildBoundable(a);
  }
  return i;
};
Ht.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
Ht.prototype.interfaces_ = function() {
  return [an];
};
Ht.prototype.getClass = function() {
  return Ht;
};
Ht.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
Bu.IntersectsOp.get = function() {
  return av;
};
Bu.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
Bu.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Ht, Bu);
var av = function() {
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
var Ng = function(r) {
  function t(n) {
    n = n || t.DEFAULT_NODE_CAPACITY, r.call(this, n);
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(i, s) {
    var o = this;
    J.isTrue(i.length > 0);
    for (var a = new D(), u = 0; u < i.length; u++)
      a.addAll(o.createParentBoundablesFromVerticalSlice(i[u], s));
    return a;
  }, t.prototype.createNode = function(i) {
    return new Th(i);
  }, t.prototype.size = function() {
    return arguments.length === 0 ? r.prototype.size.call(this) : r.prototype.size.apply(this, arguments);
  }, t.prototype.insert = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      if (i.isNull())
        return null;
      r.prototype.insert.call(this, i, s);
    } else
      return r.prototype.insert.apply(this, arguments);
  }, t.prototype.getIntersectsOp = function() {
    return t.intersectsOp;
  }, t.prototype.verticalSlices = function(i, s) {
    for (var o = Math.trunc(Math.ceil(i.size() / s)), a = new Array(s).fill(null), u = i.iterator(), l = 0; l < s; l++) {
      a[l] = new D();
      for (var c = 0; u.hasNext() && c < o; ) {
        var h = u.next();
        a[l].add(h), c++;
      }
    }
    return a;
  }, t.prototype.query = function() {
    if (arguments.length === 1) {
      var i = arguments[0];
      return r.prototype.query.call(this, i);
    } else if (arguments.length === 2) {
      var s = arguments[0], o = arguments[1];
      r.prototype.query.call(this, s, o);
    } else if (arguments.length === 3) {
      if (q(arguments[2], Hr) && arguments[0] instanceof Object && arguments[1] instanceof Xt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        r.prototype.query.call(this, a, u, l);
      } else if (q(arguments[2], fn) && arguments[0] instanceof Object && arguments[1] instanceof Xt) {
        var c = arguments[0], h = arguments[1], f = arguments[2];
        r.prototype.query.call(this, c, h, f);
      }
    }
  }, t.prototype.getComparator = function() {
    return t.yComparator;
  }, t.prototype.createParentBoundablesFromVerticalSlice = function(i, s) {
    return r.prototype.createParentBoundables.call(this, i, s);
  }, t.prototype.remove = function() {
    if (arguments.length === 2) {
      var i = arguments[0], s = arguments[1];
      return r.prototype.remove.call(this, i, s);
    } else
      return r.prototype.remove.apply(this, arguments);
  }, t.prototype.depth = function() {
    return arguments.length === 0 ? r.prototype.depth.call(this) : r.prototype.depth.apply(this, arguments);
  }, t.prototype.createParentBoundables = function(i, s) {
    J.isTrue(!i.isEmpty());
    var o = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), a = new D(i);
    _n.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(o))));
    return this.createParentBoundablesFromVerticalSlices(u, s);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (q(arguments[0], no)) {
        var i = arguments[0], s = new At(this.getRoot(), this.getRoot(), i);
        return this.nearestNeighbour(s);
      } else if (arguments[0] instanceof At) {
        var o = arguments[0];
        return this.nearestNeighbour(o, H.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && q(arguments[1], no)) {
        var a = arguments[0], u = arguments[1], l = new At(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof At && typeof arguments[1] == "number") {
        var c = arguments[0], h = arguments[1], f = h, g = null, d = new Nr();
        for (d.add(c); !d.isEmpty() && f > 0; ) {
          var p = d.poll(), _ = p.getDistance();
          if (_ >= f)
            break;
          p.isLeaves() ? (f = _, g = p) : p.expandToQueue(d, f);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var m = arguments[0], y = arguments[1], v = arguments[2], I = new pn(m, y), x = new At(this.getRoot(), I, v);
      return this.nearestNeighbour(x)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [ns, an];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(i) {
    return t.avg(i.getMinX(), i.getMaxX());
  }, t.avg = function(i, s) {
    return (i + s) / 2;
  }, t.centreY = function(i) {
    return t.avg(i.getMinY(), i.getMaxY());
  }, e.STRtreeNode.get = function() {
    return Th;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [qs];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreX(n.getBounds()), t.centreX(i.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [qs];
      },
      compare: function(n, i) {
        return r.compareDoubles(t.centreY(n.getBounds()), t.centreY(i.getBounds()));
      }
    };
  }, e.intersectsOp.get = function() {
    return {
      interfaces_: function() {
        return [r.IntersectsOp];
      },
      intersects: function(n, i) {
        return n.intersects(i);
      }
    };
  }, e.DEFAULT_NODE_CAPACITY.get = function() {
    return 10;
  }, Object.defineProperties(t, e), t;
}(Ht), Th = function(r) {
  function t() {
    var e = arguments[0];
    r.call(this, e);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var n = null, i = this.getChildBoundables().iterator(); i.hasNext(); ) {
      var s = i.next();
      n === null ? n = new X(s.getBounds()) : n.expandToInclude(s.getBounds());
    }
    return n;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Xt), Re = function() {
};
Re.prototype.interfaces_ = function() {
  return [];
};
Re.prototype.getClass = function() {
  return Re;
};
Re.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
Re.compare = function(t, e, n) {
  if (e.equals2D(n))
    return 0;
  var i = Re.relativeSign(e.x, n.x), s = Re.relativeSign(e.y, n.y);
  switch (t) {
    case 0:
      return Re.compareValue(i, s);
    case 1:
      return Re.compareValue(s, i);
    case 2:
      return Re.compareValue(s, -i);
    case 3:
      return Re.compareValue(-i, s);
    case 4:
      return Re.compareValue(-i, -s);
    case 5:
      return Re.compareValue(-s, -i);
    case 6:
      return Re.compareValue(-s, i);
    case 7:
      return Re.compareValue(i, -s);
  }
  return J.shouldNeverReachHere("invalid octant value"), 0;
};
Re.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var jr = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._segString = t, this.coord = new E(e), this.segmentIndex = n, this._segmentOctant = i, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
jr.prototype.getCoordinate = function() {
  return this.coord;
};
jr.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
jr.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : Re.compare(this._segmentOctant, this.coord, e.coord);
};
jr.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
jr.prototype.isInterior = function() {
  return this._isInterior;
};
jr.prototype.interfaces_ = function() {
  return [on];
};
jr.prototype.getClass = function() {
  return jr;
};
var xe = function() {
  this._nodeMap = new ue(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
xe.prototype.getSplitCoordinates = function() {
  var t = this, e = new xa();
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var s = n.next();
    t.addEdgeCoordinates(i, s, e), i = s;
  }
  return e.toCoordinateArray();
};
xe.prototype.addCollapsedNodes = function() {
  var t = this, e = new D();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next().intValue();
    t.add(t._edge.getCoordinate(i), i);
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
    var i = e._edge.getCoordinate(n), s = e._edge.getCoordinate(n + 2);
    i.equals2D(s) && t.add(new Dn(n + 1));
  }
};
xe.prototype.addEdgeCoordinates = function(t, e, n) {
  var i = this, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  n.add(new E(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    n.add(i._edge.getCoordinate(a));
  o && n.add(new E(e.coord));
};
xe.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
xe.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(i, s);
    t.add(o), i = s;
  }
};
xe.prototype.findCollapseIndex = function(t, e, n) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var i = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || i--, i === 1 ? (n[0] = t.segmentIndex + 1, !0) : !1;
};
xe.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, n = new Array(1).fill(null), i = this.iterator(), s = i.next(); i.hasNext(); ) {
    var o = i.next(), a = e.findCollapseIndex(s, o, n);
    a && t.add(new Dn(n[0])), s = o;
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
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  o || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new E(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n._edge.getCoordinate(l);
  return o && (a[u] = new E(e.coord)), new Ot(a, this._edge.getData());
};
xe.prototype.add = function(t, e) {
  var n = new jr(this._edge, t, e, this._edge.getSegmentOctant(e)), i = this._nodeMap.get(n);
  return i !== null ? (J.isTrue(i.coord.equals2D(t), "Found equal nodes with different coordinates"), i) : (this._nodeMap.put(n, n), n);
};
xe.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), i = n.getCoordinate(0);
  if (!i.equals2D(e[0]))
    throw new Sr("bad split edge start point at " + i);
  var s = t.get(t.size() - 1), o = s.getCoordinates(), a = o[o.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new Sr("bad split edge end point at " + a);
};
xe.prototype.interfaces_ = function() {
  return [];
};
xe.prototype.getClass = function() {
  return xe;
};
var rs = function() {
};
rs.prototype.interfaces_ = function() {
  return [];
};
rs.prototype.getClass = function() {
  return rs;
};
rs.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new Et("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var n = Math.abs(t), i = Math.abs(e);
    return t >= 0 ? e >= 0 ? n >= i ? 0 : 1 : n >= i ? 7 : 6 : e >= 0 ? n >= i ? 3 : 2 : n >= i ? 4 : 5;
  } else if (arguments[0] instanceof E && arguments[1] instanceof E) {
    var s = arguments[0], o = arguments[1], a = o.x - s.x, u = o.y - s.y;
    if (a === 0 && u === 0)
      throw new Et("Cannot compute the octant for two identical points " + s);
    return rs.octant(a, u);
  }
};
var ur = function() {
};
ur.prototype.getCoordinates = function() {
};
ur.prototype.size = function() {
};
ur.prototype.getCoordinate = function(t) {
};
ur.prototype.isClosed = function() {
};
ur.prototype.setData = function(t) {
};
ur.prototype.getData = function() {
};
ur.prototype.interfaces_ = function() {
  return [];
};
ur.prototype.getClass = function() {
  return ur;
};
var aa = function() {
};
aa.prototype.addIntersection = function(t, e) {
};
aa.prototype.interfaces_ = function() {
  return [ur];
};
aa.prototype.getClass = function() {
  return aa;
};
var Ot = function() {
  this._nodeList = new xe(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Ot.prototype.getCoordinates = function() {
  return this._pts;
};
Ot.prototype.size = function() {
  return this._pts.length;
};
Ot.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Ot.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Ot.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Ot.prototype.setData = function(t) {
  this._data = t;
};
Ot.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : rs.octant(t, e);
};
Ot.prototype.getData = function() {
  return this._data;
};
Ot.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], s = arguments[3], o = new E(n.getIntersection(s));
    this.addIntersection(o, i);
  }
};
Ot.prototype.toString = function() {
  return gn.toLineString(new Pt(this._pts));
};
Ot.prototype.getNodeList = function() {
  return this._nodeList;
};
Ot.prototype.addIntersectionNode = function(t, e) {
  var n = e, i = n + 1;
  if (i < this._pts.length) {
    var s = this._pts[i];
    t.equals2D(s) && (n = i);
  }
  var o = this._nodeList.add(t, n);
  return o;
};
Ot.prototype.addIntersections = function(t, e, n) {
  for (var i = this, s = 0; s < t.getIntersectionNum(); s++)
    i.addIntersection(t, e, n, s);
};
Ot.prototype.interfaces_ = function() {
  return [aa];
};
Ot.prototype.getClass = function() {
  return Ot;
};
Ot.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new D();
    return Ot.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var n = arguments[0], i = arguments[1], s = n.iterator(); s.hasNext(); ) {
      var o = s.next();
      o.getNodeList().addSplitEdges(i);
    }
};
var Y = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new E(), this.p1 = new E();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new E(t.p0), this.p1 = new E(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], n = arguments[1], i = arguments[2], s = arguments[3];
    this.p0 = new E(e, n), this.p1 = new E(i, s);
  }
}, Lg = { serialVersionUID: { configurable: !0 } };
Y.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
Y.prototype.orientationIndex = function() {
  if (arguments[0] instanceof Y) {
    var t = arguments[0], e = G.orientationIndex(this.p0, this.p1, t.p0), n = G.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
  } else if (arguments[0] instanceof E) {
    var i = arguments[0];
    return G.orientationIndex(this.p0, this.p1, i);
  }
};
Y.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
Y.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
Y.prototype.equals = function(t) {
  if (!(t instanceof Y))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
Y.prototype.intersection = function(t) {
  var e = new Ai();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
Y.prototype.project = function() {
  if (arguments[0] instanceof E) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new E(t);
    var e = this.projectionFactor(t), n = new E();
    return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
  } else if (arguments[0] instanceof Y) {
    var i = arguments[0], s = this.projectionFactor(i.p0), o = this.projectionFactor(i.p1);
    if (s >= 1 && o >= 1 || s <= 0 && o <= 0)
      return null;
    var a = this.project(i.p0);
    s < 0 && (a = this.p0), s > 1 && (a = this.p1);
    var u = this.project(i.p1);
    return o < 0 && (u = this.p0), o > 1 && (u = this.p1), new Y(a, u);
  }
};
Y.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
Y.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
Y.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
Y.prototype.distancePerpendicular = function(t) {
  return G.distancePointLinePerpendicular(t, this.p0, this.p1);
};
Y.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
Y.prototype.midPoint = function() {
  return Y.midPoint(this.p0, this.p1);
};
Y.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, i = e * e + n * n;
  if (i <= 0)
    return H.NaN;
  var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / i;
  return s;
};
Y.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), i = H.MAX_VALUE, s = null, o = this.closestPoint(t.p0);
  i = o.distance(t.p0), n[0] = o, n[1] = t.p0;
  var a = this.closestPoint(t.p1);
  s = a.distance(t.p1), s < i && (i = s, n[0] = a, n[1] = t.p1);
  var u = t.closestPoint(this.p0);
  s = u.distance(this.p0), s < i && (i = s, n[0] = this.p0, n[1] = u);
  var l = t.closestPoint(this.p1);
  return s = l.distance(this.p1), s < i && (i = s, n[0] = this.p1, n[1] = l), n;
};
Y.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var n = this.p0.distance(t), i = this.p1.distance(t);
  return n < i ? this.p0 : this.p1;
};
Y.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
Y.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
Y.prototype.compareTo = function(t) {
  var e = t, n = this.p0.compareTo(e.p0);
  return n !== 0 ? n : this.p1.compareTo(e.p1);
};
Y.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
Y.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
Y.prototype.lineIntersection = function(t) {
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
Y.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
Y.prototype.pointAlongOffset = function(t, e) {
  var n = this.p0.x + t * (this.p1.x - this.p0.x), i = this.p0.y + t * (this.p1.y - this.p0.y), s = this.p1.x - this.p0.x, o = this.p1.y - this.p0.y, a = Math.sqrt(s * s + o * o), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * s / a, l = e * o / a;
  }
  var c = n - l, h = i + u, f = new E(c, h);
  return f;
};
Y.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
  }
};
Y.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || H.isNaN(e)) && (e = 1), e;
};
Y.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
Y.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
Y.prototype.distance = function() {
  if (arguments[0] instanceof Y) {
    var t = arguments[0];
    return G.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof E) {
    var e = arguments[0];
    return G.distancePointLine(e, this.p0, this.p1);
  }
};
Y.prototype.pointAlong = function(t) {
  var e = new E();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
Y.prototype.hashCode = function() {
  var t = H.doubleToLongBits(this.p0.x);
  t ^= H.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = H.doubleToLongBits(this.p1.x);
  n ^= H.doubleToLongBits(this.p1.y) * 31;
  var i = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ i;
};
Y.prototype.interfaces_ = function() {
  return [on, an];
};
Y.prototype.getClass = function() {
  return Y;
};
Y.midPoint = function(t, e) {
  return new E((t.x + e.x) / 2, (t.y + e.y) / 2);
};
Lg.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(Y, Lg);
var ua = function() {
  this.tempEnv1 = new X(), this.tempEnv2 = new X(), this._overlapSeg1 = new Y(), this._overlapSeg2 = new Y();
};
ua.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
ua.prototype.interfaces_ = function() {
  return [];
};
ua.prototype.getClass = function() {
  return ua;
};
var ke = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
  this._pts = t, this._start = e, this._end = n, this._context = i;
};
ke.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
ke.prototype.computeSelect = function(t, e, n, i) {
  var s = this._pts[e], o = this._pts[n];
  if (i.tempEnv1.init(s, o), n - e === 1)
    return i.select(this, e), null;
  if (!t.intersects(i.tempEnv1))
    return null;
  var a = Math.trunc((e + n) / 2);
  e < a && this.computeSelect(t, e, a, i), a < n && this.computeSelect(t, a, n, i);
};
ke.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), n = 0, i = this._start; i <= this._end; i++)
    e[n++] = t._pts[i];
  return e;
};
ke.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
ke.prototype.setId = function(t) {
  this._id = t;
};
ke.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
ke.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new X(t, e);
  }
  return this._env;
};
ke.prototype.getEndIndex = function() {
  return this._end;
};
ke.prototype.getStartIndex = function() {
  return this._start;
};
ke.prototype.getContext = function() {
  return this._context;
};
ke.prototype.getId = function() {
  return this._id;
};
ke.prototype.computeOverlapsInternal = function(t, e, n, i, s, o) {
  var a = this._pts[t], u = this._pts[e], l = n._pts[i], c = n._pts[s];
  if (e - t === 1 && s - i === 1)
    return o.overlap(this, t, n, i), null;
  if (o.tempEnv1.init(a, u), o.tempEnv2.init(l, c), !o.tempEnv1.intersects(o.tempEnv2))
    return null;
  var h = Math.trunc((t + e) / 2), f = Math.trunc((i + s) / 2);
  t < h && (i < f && this.computeOverlapsInternal(t, h, n, i, f, o), f < s && this.computeOverlapsInternal(t, h, n, f, s, o)), h < e && (i < f && this.computeOverlapsInternal(h, e, n, i, f, o), f < s && this.computeOverlapsInternal(h, e, n, f, s, o));
};
ke.prototype.interfaces_ = function() {
  return [];
};
ke.prototype.getClass = function() {
  return ke;
};
var On = function() {
};
On.prototype.interfaces_ = function() {
  return [];
};
On.prototype.getClass = function() {
  return On;
};
On.getChainStartIndices = function(t) {
  var e = 0, n = new D();
  n.add(new Dn(e));
  do {
    var i = On.findChainEnd(t, e);
    n.add(new Dn(i)), e = i;
  } while (e < t.length - 1);
  var s = On.toIntArray(n);
  return s;
};
On.findChainEnd = function(t, e) {
  for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
    n++;
  if (n >= t.length - 1)
    return t.length - 1;
  for (var i = ht.quadrant(t[n], t[n + 1]), s = e + 1; s < t.length; ) {
    if (!t[s - 1].equals2D(t[s])) {
      var o = ht.quadrant(t[s - 1], t[s]);
      if (o !== i)
        break;
    }
    s++;
  }
  return s - 1;
};
On.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return On.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], i = new D(), s = On.getChainStartIndices(e), o = 0; o < s.length - 1; o++) {
      var a = new ke(e, s[o], s[o + 1], n);
      i.add(a);
    }
    return i;
  }
};
On.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Si = function() {
};
Si.prototype.computeNodes = function(t) {
};
Si.prototype.getNodedSubstrings = function() {
};
Si.prototype.interfaces_ = function() {
  return [];
};
Si.prototype.getClass = function() {
  return Si;
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
  return [Si];
};
la.prototype.getClass = function() {
  return la;
};
var pc = function(r) {
  function t(n) {
    n ? r.call(this, n) : r.call(this), this._monoChains = new D(), this._index = new Ng(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return Ot.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(i) {
    for (var s = this, o = On.getChains(i.getCoordinates(), i), a = o.iterator(); a.hasNext(); ) {
      var u = a.next();
      u.setId(s._idCounter++), s._index.insert(u.getEnvelope(), u), s._monoChains.add(u);
    }
  }, t.prototype.computeNodes = function(i) {
    var s = this;
    this._nodedSegStrings = i;
    for (var o = i.iterator(); o.hasNext(); )
      s.add(o.next());
    this.intersectChains();
  }, t.prototype.intersectChains = function() {
    for (var i = this, s = new Mh(this._segInt), o = this._monoChains.iterator(); o.hasNext(); )
      for (var a = o.next(), u = i._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var c = l.next();
        if (c.getId() > a.getId() && (a.computeOverlaps(c, s), i._nOverlaps++), i._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return Mh;
  }, Object.defineProperties(t, e), t;
}(la), Mh = function(r) {
  function t() {
    r.call(this), this._si = null;
    var e = arguments[0];
    this._si = e;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.overlap = function() {
    if (arguments.length === 4) {
      var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3], a = n.getContext(), u = s.getContext();
      this._si.processIntersections(a, i, u, o);
    } else
      return r.prototype.overlap.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ua), rt = function r() {
  if (this._quadrantSegments = r.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = r.CAP_ROUND, this._joinStyle = r.JOIN_ROUND, this._mitreLimit = r.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = r.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setQuadrantSegments(t);
    } else if (arguments.length === 2) {
      var e = arguments[0], n = arguments[1];
      this.setQuadrantSegments(e), this.setEndCapStyle(n);
    } else if (arguments.length === 4) {
      var i = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3];
      this.setQuadrantSegments(i), this.setEndCapStyle(s), this.setJoinStyle(o), this.setMitreLimit(a);
    }
  }
}, Tr = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
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
Tr.CAP_ROUND.get = function() {
  return 1;
};
Tr.CAP_FLAT.get = function() {
  return 2;
};
Tr.CAP_SQUARE.get = function() {
  return 3;
};
Tr.JOIN_ROUND.get = function() {
  return 1;
};
Tr.JOIN_MITRE.get = function() {
  return 2;
};
Tr.JOIN_BEVEL.get = function() {
  return 3;
};
Tr.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
Tr.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
Tr.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(rt, Tr);
var Nt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = G.COUNTERCLOCKWISE, this._inputLine = t || null;
}, Sa = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
Nt.prototype.isDeletable = function(t, e, n, i) {
  var s = this._inputLine[t], o = this._inputLine[e], a = this._inputLine[n];
  return !this.isConcave(s, o, a) || !this.isShallow(s, o, a, i) ? !1 : this.isShallowSampled(s, o, t, n, i);
};
Nt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, n = this.findNextNonDeletedIndex(e), i = this.findNextNonDeletedIndex(n), s = !1; i < this._inputLine.length; ) {
    var o = !1;
    t.isDeletable(e, n, i, t._distanceTol) && (t._isDeleted[n] = Nt.DELETE, o = !0, s = !0), o ? e = i : e = n, n = t.findNextNonDeletedIndex(e), i = t.findNextNonDeletedIndex(n);
  }
  return s;
};
Nt.prototype.isShallowConcavity = function(t, e, n, i) {
  var s = G.computeOrientation(t, e, n), o = s === this._angleOrientation;
  if (!o)
    return !1;
  var a = G.distancePointLine(e, t, n);
  return a < i;
};
Nt.prototype.isShallowSampled = function(t, e, n, i, s) {
  var o = this, a = Math.trunc((i - n) / Nt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = n; u < i; u += a)
    if (!o.isShallow(t, e, o._inputLine[u], s))
      return !1;
  return !0;
};
Nt.prototype.isConcave = function(t, e, n) {
  var i = G.computeOrientation(t, e, n), s = i === this._angleOrientation;
  return s;
};
Nt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = G.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var n = !1;
  do
    n = e.deleteShallowConcavities();
  while (n);
  return this.collapseLine();
};
Nt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === Nt.DELETE; )
    e++;
  return e;
};
Nt.prototype.isShallow = function(t, e, n, i) {
  var s = G.distancePointLine(e, t, n);
  return s < i;
};
Nt.prototype.collapseLine = function() {
  for (var t = this, e = new xa(), n = 0; n < this._inputLine.length; n++)
    t._isDeleted[n] !== Nt.DELETE && e.add(t._inputLine[n]);
  return e.toCoordinateArray();
};
Nt.prototype.interfaces_ = function() {
  return [];
};
Nt.prototype.getClass = function() {
  return Nt;
};
Nt.simplify = function(t, e) {
  var n = new Nt(t);
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
Object.defineProperties(Nt, Sa);
var We = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new D();
}, bg = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
We.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(We.COORDINATE_ARRAY_TYPE);
  return t;
};
We.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
We.prototype.addPt = function(t) {
  var e = new E(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
We.prototype.revere = function() {
};
We.prototype.addPts = function(t, e) {
  var n = this;
  if (e)
    for (var i = 0; i < t.length; i++)
      n.addPt(t[i]);
  else
    for (var s = t.length - 1; s >= 0; s--)
      n.addPt(t[s]);
};
We.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), n = t.distance(e);
  return n < this._minimimVertexDistance;
};
We.prototype.toString = function() {
  var t = new Q(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
We.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new E(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
We.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
};
bg.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(We, bg);
var tt = function() {
}, Cs = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
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
    var e = arguments[0], n = arguments[1], i = n.x - e.x, s = n.y - e.y;
    return Math.atan2(s, i);
  }
};
tt.isAcute = function(t, e, n) {
  var i = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = i * o + s * a;
  return u > 0;
};
tt.isObtuse = function(t, e, n) {
  var i = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = i * o + s * a;
  return u < 0;
};
tt.interiorAngle = function(t, e, n) {
  var i = tt.angle(e, t), s = tt.angle(e, n);
  return Math.abs(s - i);
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
  var i = tt.angle(e, t), s = tt.angle(e, n);
  return tt.diff(i, s);
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
  var i = tt.angle(e, t), s = tt.angle(e, n), o = s - i;
  return o <= -Math.PI ? o + tt.PI_TIMES_2 : o > Math.PI ? o - tt.PI_TIMES_2 : o;
};
Cs.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
Cs.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
Cs.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
Cs.COUNTERCLOCKWISE.get = function() {
  return G.COUNTERCLOCKWISE;
};
Cs.CLOCKWISE.get = function() {
  return G.CLOCKWISE;
};
Cs.NONE.get = function() {
  return G.COLLINEAR;
};
Object.defineProperties(tt, Cs);
var mt = function r() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new Y(), this._seg1 = new Y(), this._offset0 = new Y(), this._offset1 = new Y(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Ai(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === rt.JOIN_ROUND && (this._closingSegLengthFactor = r.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, wa = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
mt.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = G.computeOrientation(this._s0, this._s1, this._s2), i = n === G.CLOCKWISE && this._side === T.LEFT || n === G.COUNTERCLOCKWISE && this._side === T.RIGHT;
  n === 0 ? this.addCollinear(e) : i ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
mt.prototype.addLineEndCap = function(t, e) {
  var n = new Y(t, e), i = new Y();
  this.computeOffsetSegment(n, T.LEFT, this._distance, i);
  var s = new Y();
  this.computeOffsetSegment(n, T.RIGHT, this._distance, s);
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o);
  switch (this._bufParams.getEndCapStyle()) {
    case rt.CAP_ROUND:
      this._segList.addPt(i.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, G.CLOCKWISE, this._distance), this._segList.addPt(s.p1);
      break;
    case rt.CAP_FLAT:
      this._segList.addPt(i.p1), this._segList.addPt(s.p1);
      break;
    case rt.CAP_SQUARE:
      var l = new E();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new E(i.p1.x + l.x, i.p1.y + l.y), h = new E(s.p1.x + l.x, s.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(h);
      break;
  }
};
mt.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
mt.prototype.addMitreJoin = function(t, e, n, i) {
  var s = !0, o = null;
  try {
    o = hn.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = i <= 0 ? 1 : o.distance(t) / Math.abs(i);
    a > this._bufParams.getMitreLimit() && (s = !1);
  } catch (u) {
    if (u instanceof po)
      o = new E(0, 0), s = !1;
    else
      throw u;
  } finally {
  }
  s ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, i, this._bufParams.getMitreLimit());
};
mt.prototype.addFilletCorner = function(t, e, n, i, s) {
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o), l = n.x - t.x, c = n.y - t.y, h = Math.atan2(c, l);
  i === G.CLOCKWISE ? u <= h && (u += 2 * Math.PI) : u >= h && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, h, i, s), this._segList.addPt(n);
};
mt.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * mt.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === rt.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === rt.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
mt.prototype.createSquare = function(t) {
  this._segList.addPt(new E(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new E(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new E(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new E(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
mt.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
mt.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
mt.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
mt.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
mt.prototype.addLimitedMitreJoin = function(t, e, n, i) {
  var s = this._seg0.p1, o = tt.angle(s, this._seg0.p0), a = tt.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1), u = a / 2, l = tt.normalize(o + u), c = tt.normalize(l + Math.PI), h = i * n, f = h * Math.abs(Math.sin(u)), g = n - f, d = s.x + h * Math.cos(c), p = s.y + h * Math.sin(c), _ = new E(d, p), m = new Y(s, _), y = m.pointAlongOffset(1, g), v = m.pointAlongOffset(1, -g);
  this._side === T.LEFT ? (this._segList.addPt(y), this._segList.addPt(v)) : (this._segList.addPt(v), this._segList.addPt(y));
};
mt.prototype.computeOffsetSegment = function(t, e, n, i) {
  var s = e === T.LEFT ? 1 : -1, o = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(o * o + a * a), l = s * n * o / u, c = s * n * a / u;
  i.p0.x = t.p0.x - c, i.p0.y = t.p0.y + l, i.p1.x = t.p1.x - c, i.p1.y = t.p1.y + l;
};
mt.prototype.addFilletArc = function(t, e, n, i, s) {
  var o = this, a = i === G.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, h = u / l, f = c, g = new E(); f < u; ) {
    var d = e + a * f;
    g.x = t.x + s * Math.cos(d), g.y = t.y + s * Math.sin(d), o._segList.addPt(g), f += h;
  }
};
mt.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * mt.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var n = new E((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(n);
      var i = new E((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(i);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
mt.prototype.createCircle = function(t) {
  var e = new E(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
mt.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
mt.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new We(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * mt.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
mt.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === rt.JOIN_BEVEL || this._bufParams.getJoinStyle() === rt.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, G.CLOCKWISE, this._distance));
};
mt.prototype.closeRing = function() {
  this._segList.closeRing();
};
mt.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
mt.prototype.interfaces_ = function() {
  return [];
};
mt.prototype.getClass = function() {
  return mt;
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
Object.defineProperties(mt, wa);
var be = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
be.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var n = e < 0, i = Math.abs(e), s = this.getSegGen(i);
  t.length <= 1 ? this.computePointCurve(t[0], s) : this.computeOffsetCurve(t, n, s);
  var o = s.getCoordinates();
  return n && $.reverse(o), o;
};
be.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    n.addSegments(t, !0);
    var s = Nt.simplify(t, -i), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], T.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    n.addSegments(t, !1);
    var u = Nt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], T.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment(), n.closeRing();
};
be.prototype.computeRingBufferCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  e === T.RIGHT && (i = -i);
  var s = Nt.simplify(t, i), o = s.length - 1;
  n.initSideSegments(s[o - 1], s[0], e);
  for (var a = 1; a <= o; a++) {
    var u = a !== 1;
    n.addNextSegment(s[a], u);
  }
  n.closeRing();
};
be.prototype.computeLineBufferCurve = function(t, e) {
  var n = this.simplifyTolerance(this._distance), i = Nt.simplify(t, n), s = i.length - 1;
  e.initSideSegments(i[0], i[1], T.LEFT);
  for (var o = 2; o <= s; o++)
    e.addNextSegment(i[o], !0);
  e.addLastSegment(), e.addLineEndCap(i[s - 1], i[s]);
  var a = Nt.simplify(t, -n), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], T.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
be.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case rt.CAP_ROUND:
      e.createCircle(t);
      break;
    case rt.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
be.prototype.getLineCurve = function(t, e) {
  if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || e === 0)
    return null;
  var n = Math.abs(e), i = this.getSegGen(n);
  if (t.length <= 1)
    this.computePointCurve(t[0], i);
  else if (this._bufParams.isSingleSided()) {
    var s = e < 0;
    this.computeSingleSidedBufferCurve(t, s, i);
  } else
    this.computeLineBufferCurve(t, i);
  var o = i.getCoordinates();
  return o;
};
be.prototype.getBufferParameters = function() {
  return this._bufParams;
};
be.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
be.prototype.getRingCurve = function(t, e, n) {
  if (this._distance = n, t.length <= 2)
    return this.getLineCurve(t, n);
  if (n === 0)
    return be.copyCoordinates(t);
  var i = this.getSegGen(n);
  return this.computeRingBufferCurve(t, e, i), i.getCoordinates();
};
be.prototype.computeOffsetCurve = function(t, e, n) {
  var i = this.simplifyTolerance(this._distance);
  if (e) {
    var s = Nt.simplify(t, -i), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], T.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    var u = Nt.simplify(t, i), l = u.length - 1;
    n.initSideSegments(u[0], u[1], T.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment();
};
be.prototype.getSegGen = function(t) {
  return new mt(this._precisionModel, this._bufParams, t);
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
be.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
    e[n] = new E(t[n]);
  return e;
};
var is = function() {
  this._subgraphs = null, this._seg = new Y(), this._cga = new G();
  var t = arguments[0];
  this._subgraphs = t;
}, Pg = { DepthSegment: { configurable: !0 } };
is.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new D(), i = this._subgraphs.iterator(); i.hasNext(); ) {
      var s = i.next(), o = s.getEnvelope();
      e.y < o.getMinY() || e.y > o.getMaxY() || t.findStabbedSegments(e, s.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (q(arguments[2], fn) && arguments[0] instanceof E && arguments[1] instanceof Rl)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), h = 0; h < c.length - 1; h++) {
        t._seg.p0 = c[h], t._seg.p1 = c[h + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var f = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(f < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && G.computeOrientation(t._seg.p0, t._seg.p1, a) !== G.RIGHT) {
          var g = u.getDepth(T.LEFT);
          t._seg.p0.equals(c[h]) || (g = u.getDepth(T.RIGHT));
          var d = new wi(t._seg, g);
          l.add(d);
        }
      }
    else if (q(arguments[2], fn) && arguments[0] instanceof E && q(arguments[1], fn))
      for (var p = arguments[0], _ = arguments[1], m = arguments[2], y = _.iterator(); y.hasNext(); ) {
        var v = y.next();
        v.isForward() && t.findStabbedSegments(p, v, m);
      }
  }
};
is.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = _n.min(e);
  return n._leftDepth;
};
is.prototype.interfaces_ = function() {
  return [];
};
is.prototype.getClass = function() {
  return is;
};
Pg.DepthSegment.get = function() {
  return wi;
};
Object.defineProperties(is, Pg);
var wi = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new Y(t), this._leftDepth = e;
};
wi.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
wi.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
wi.prototype.toString = function() {
  return this._upwardSeg.toString();
};
wi.prototype.interfaces_ = function() {
  return [on];
};
wi.prototype.getClass = function() {
  return wi;
};
var st = function(t, e, n) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = n || null;
};
st.prototype.area = function() {
  return st.area(this.p0, this.p1, this.p2);
};
st.prototype.signedArea = function() {
  return st.signedArea(this.p0, this.p1, this.p2);
};
st.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new Et("Supplied point is null.");
  return st.interpolateZ(t, this.p0, this.p1, this.p2);
};
st.prototype.longestSideLength = function() {
  return st.longestSideLength(this.p0, this.p1, this.p2);
};
st.prototype.isAcute = function() {
  return st.isAcute(this.p0, this.p1, this.p2);
};
st.prototype.circumcentre = function() {
  return st.circumcentre(this.p0, this.p1, this.p2);
};
st.prototype.area3D = function() {
  return st.area3D(this.p0, this.p1, this.p2);
};
st.prototype.centroid = function() {
  return st.centroid(this.p0, this.p1, this.p2);
};
st.prototype.inCentre = function() {
  return st.inCentre(this.p0, this.p1, this.p2);
};
st.prototype.interfaces_ = function() {
  return [];
};
st.prototype.getClass = function() {
  return st;
};
st.area = function(t, e, n) {
  return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
};
st.signedArea = function(t, e, n) {
  return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
};
st.det = function(t, e, n, i) {
  return t * i - e * n;
};
st.interpolateZ = function(t, e, n, i) {
  var s = e.x, o = e.y, a = n.x - s, u = i.x - s, l = n.y - o, c = i.y - o, h = a * c - u * l, f = t.x - s, g = t.y - o, d = (c * f - u * g) / h, p = (-l * f + a * g) / h, _ = e.z + d * (n.z - e.z) + p * (i.z - e.z);
  return _;
};
st.longestSideLength = function(t, e, n) {
  var i = t.distance(e), s = e.distance(n), o = n.distance(t), a = i;
  return s > a && (a = s), o > a && (a = o), a;
};
st.isAcute = function(t, e, n) {
  return !(!tt.isAcute(t, e, n) || !tt.isAcute(e, n, t) || !tt.isAcute(n, t, e));
};
st.circumcentre = function(t, e, n) {
  var i = n.x, s = n.y, o = t.x - i, a = t.y - s, u = e.x - i, l = e.y - s, c = 2 * st.det(o, a, u, l), h = st.det(a, o * o + a * a, l, u * u + l * l), f = st.det(o, o * o + a * a, u, u * u + l * l), g = i - h / c, d = s + f / c;
  return new E(g, d);
};
st.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, i = e.y - t.y, s = new hn(t.x + n / 2, t.y + i / 2, 1), o = new hn(t.x - i + n / 2, t.y + n + i / 2, 1);
  return new hn(s, o);
};
st.angleBisector = function(t, e, n) {
  var i = e.distance(t), s = e.distance(n), o = i / (i + s), a = n.x - t.x, u = n.y - t.y, l = new E(t.x + o * a, t.y + o * u);
  return l;
};
st.area3D = function(t, e, n) {
  var i = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, c = s * l - o * u, h = o * a - i * l, f = i * u - s * a, g = c * c + h * h + f * f, d = Math.sqrt(g) / 2;
  return d;
};
st.centroid = function(t, e, n) {
  var i = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3;
  return new E(i, s);
};
st.inCentre = function(t, e, n) {
  var i = e.distance(n), s = t.distance(n), o = t.distance(e), a = i + s + o, u = (i * t.x + s * e.x + o * n.x) / a, l = (i * t.y + s * e.y + o * n.y) / a;
  return new E(u, l);
};
var sn = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
sn.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, C.EXTERIOR, C.INTERIOR);
};
sn.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, i = T.LEFT;
  this._distance < 0 && (n = -this._distance, i = T.RIGHT);
  var s = t.getExteriorRing(), o = $.removeRepeatedPoints(s.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(s, this._distance) || this._distance <= 0 && o.length < 3)
    return null;
  this.addPolygonRing(o, n, i, C.EXTERIOR, C.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = $.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, T.opposite(i), C.INTERIOR, C.EXTERIOR);
  }
};
sn.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new st(t[0], t[1], t[2]), i = n.inCentre(), s = G.distancePointLine(i, n.p0, n.p1);
  return s < Math.abs(e);
};
sn.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = $.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, C.EXTERIOR, C.INTERIOR);
};
sn.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var i = new Ot(t, new ut(0, C.BOUNDARY, e, n));
  this._curveList.add(i);
};
sn.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
sn.prototype.addPolygonRing = function(t, e, n, i, s) {
  if (e === 0 && t.length < or.MINIMUM_VALID_SIZE)
    return null;
  var o = i, a = s;
  t.length >= or.MINIMUM_VALID_SIZE && G.isCCW(t) && (o = s, a = i, n = T.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, o, a);
};
sn.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Ut ? this.addPolygon(t) : t instanceof Rt ? this.addLineString(t) : t instanceof De ? this.addPoint(t) : t instanceof $s ? this.addCollection(t) : t instanceof Ii ? this.addCollection(t) : t instanceof nr ? this.addCollection(t) : t instanceof ve && this.addCollection(t);
};
sn.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var i = t.getEnvelopeInternal(), s = Math.min(i.getHeight(), i.getWidth());
  return e < 0 && 2 * Math.abs(e) > s;
};
sn.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var i = t.getGeometryN(n);
    e.add(i);
  }
};
sn.prototype.interfaces_ = function() {
  return [];
};
sn.prototype.getClass = function() {
  return sn;
};
var ro = function() {
};
ro.prototype.locate = function(t) {
};
ro.prototype.interfaces_ = function() {
  return [];
};
ro.prototype.getClass = function() {
  return ro;
};
var rr = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
rr.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, rr.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new mo();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ve ? (this._subcollectionIterator = new rr(t), this._subcollectionIterator.next()) : t;
};
rr.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
rr.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
rr.prototype.interfaces_ = function() {
  return [_o];
};
rr.prototype.getClass = function() {
  return rr;
};
rr.isAtomic = function(t) {
  return !(t instanceof ve);
};
var Xe = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Xe.prototype.locate = function(t) {
  return Xe.locate(t, this._geom);
};
Xe.prototype.interfaces_ = function() {
  return [ro];
};
Xe.prototype.getClass = function() {
  return Xe;
};
Xe.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? G.isPointInRing(t, e.getCoordinates()) : !1;
};
Xe.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!Xe.isPointInRing(t, n))
    return !1;
  for (var i = 0; i < e.getNumInteriorRing(); i++) {
    var s = e.getInteriorRingN(i);
    if (Xe.isPointInRing(t, s))
      return !1;
  }
  return !0;
};
Xe.containsPoint = function(t, e) {
  if (e instanceof Ut)
    return Xe.containsPointInPolygon(t, e);
  if (e instanceof ve)
    for (var n = new rr(e); n.hasNext(); ) {
      var i = n.next();
      if (i !== e && Xe.containsPoint(t, i))
        return !0;
    }
  return !1;
};
Xe.locate = function(t, e) {
  return e.isEmpty() ? C.EXTERIOR : Xe.containsPoint(t, e) ? C.INTERIOR : C.EXTERIOR;
};
var ce = function() {
  this._edgeMap = new ue(), this._edgeList = null, this._ptInAreaLocation = [C.NONE, C.NONE];
};
ce.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
ce.prototype.propagateSideLabels = function(t) {
  for (var e = C.NONE, n = this.iterator(); n.hasNext(); ) {
    var i = n.next(), s = i.getLabel();
    s.isArea(t) && s.getLocation(t, T.LEFT) !== C.NONE && (e = s.getLocation(t, T.LEFT));
  }
  if (e === C.NONE)
    return null;
  for (var o = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, T.ON) === C.NONE && l.setLocation(t, T.ON, o), l.isArea(t)) {
      var c = l.getLocation(t, T.LEFT), h = l.getLocation(t, T.RIGHT);
      if (h !== C.NONE) {
        if (h !== o)
          throw new Rr("side location conflict", u.getCoordinate());
        c === C.NONE && J.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), o = c;
      } else
        J.isTrue(l.getLocation(t, T.LEFT) === C.NONE, "found single null side"), l.setLocation(t, T.RIGHT, o), l.setLocation(t, T.LEFT, o);
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
  ee.out.println("EdgeEndStar:   " + this.getCoordinate());
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
  var n = e.size() - 1, i = e.get(n).getLabel(), s = i.getLocation(t, T.LEFT);
  J.isTrue(s !== C.NONE, "Found unlabelled area edge");
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
    var i = e._edgeList.get(n);
    if (i === t)
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
  return this._ptInAreaLocation[t] === C.NONE && (this._ptInAreaLocation[t] = Xe.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
ce.prototype.toString = function() {
  var t = new Wn();
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
  for (var n = [!1, !1], i = this.iterator(); i.hasNext(); )
    for (var s = i.next(), o = s.getLabel(), a = 0; a < 2; a++)
      o.isLine(a) && o.getLocation(a) === C.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), h = 0; h < 2; h++)
      if (c.isAnyNull(h)) {
        var f = C.NONE;
        if (n[h])
          f = C.EXTERIOR;
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
var uv = function(r) {
  function t() {
    r.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.linkResultDirectedEdges = function() {
    var n = this;
    this.getResultAreaEdges();
    for (var i = null, s = null, o = this._SCANNING_FOR_INCOMING, a = 0; a < this._resultAreaEdgeList.size(); a++) {
      var u = n._resultAreaEdgeList.get(a), l = u.getSym();
      if (u.getLabel().isArea())
        switch (i === null && u.isInResult() && (i = u), o) {
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
      if (i === null)
        throw new Rr("no outgoing dirEdge found", this.getCoordinate());
      J.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), s.setNext(i);
    }
  }, t.prototype.insert = function(n) {
    var i = n;
    this.insertEdgeEnd(i, i);
  }, t.prototype.getRightmostEdge = function() {
    var n = this.getEdges(), i = n.size();
    if (i < 1)
      return null;
    var s = n.get(0);
    if (i === 1)
      return s;
    var o = n.get(i - 1), a = s.getQuadrant(), u = o.getQuadrant();
    return ht.isNorthern(a) && ht.isNorthern(u) ? s : !ht.isNorthern(a) && !ht.isNorthern(u) ? o : s.getDy() !== 0 ? s : o.getDy() !== 0 ? o : (J.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(n) {
    ee.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var i = this.iterator(); i.hasNext(); ) {
      var s = i.next();
      n.print("out "), s.print(n), n.println(), n.print("in "), s.getSym().print(n), n.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var n = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new D();
    for (var i = this.iterator(); i.hasNext(); ) {
      var s = i.next();
      (s.isInResult() || s.getSym().isInResult()) && n._resultAreaEdgeList.add(s);
    }
    return this._resultAreaEdgeList;
  }, t.prototype.updateLabelling = function(n) {
    for (var i = this.iterator(); i.hasNext(); ) {
      var s = i.next(), o = s.getLabel();
      o.setAllLocationsIfNull(0, n.getLocation(0)), o.setAllLocationsIfNull(1, n.getLocation(1));
    }
  }, t.prototype.linkAllDirectedEdges = function() {
    var n = this;
    this.getEdges();
    for (var i = null, s = null, o = this._edgeList.size() - 1; o >= 0; o--) {
      var a = n._edgeList.get(o), u = a.getSym();
      s === null && (s = u), i !== null && u.setNext(i), i = a;
    }
    s.setNext(i);
  }, t.prototype.computeDepths = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0], s = this.findIndex(i), o = i.getDepth(T.LEFT), a = i.getDepth(T.RIGHT), u = this.computeDepths(s + 1, this._edgeList.size(), o), l = this.computeDepths(0, s, u);
      if (l !== a)
        throw new Rr("depth mismatch at " + i.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], h = arguments[1], f = arguments[2], g = f, d = c; d < h; d++) {
        var p = n._edgeList.get(d);
        p.setEdgeDepths(T.RIGHT, g), g = p.getDepth(T.LEFT);
      }
      return g;
    }
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this.iterator(); n.hasNext(); ) {
      var i = n.next(), s = i.getLabel();
      s.merge(i.getSym().getLabel());
    }
  }, t.prototype.linkMinimalDirectedEdges = function(n) {
    for (var i = this, s = null, o = null, a = this._SCANNING_FOR_INCOMING, u = this._resultAreaEdgeList.size() - 1; u >= 0; u--) {
      var l = i._resultAreaEdgeList.get(u), c = l.getSym();
      switch (s === null && l.getEdgeRing() === n && (s = l), a) {
        case i._SCANNING_FOR_INCOMING:
          if (c.getEdgeRing() !== n)
            continue;
          o = c, a = i._LINKING_TO_OUTGOING;
          break;
        case i._LINKING_TO_OUTGOING:
          if (l.getEdgeRing() !== n)
            continue;
          o.setNextMin(l), a = i._SCANNING_FOR_INCOMING;
          break;
      }
    }
    a === this._LINKING_TO_OUTGOING && (J.isTrue(s !== null, "found null for first outgoing dirEdge"), J.isTrue(s.getEdgeRing() === n, "unable to link last incoming dirEdge"), o.setNextMin(s));
  }, t.prototype.getOutgoingDegree = function() {
    if (arguments.length === 0) {
      for (var n = 0, i = this.iterator(); i.hasNext(); ) {
        var s = i.next();
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
    for (var n = C.NONE, i = this.iterator(); i.hasNext(); ) {
      var s = i.next(), o = s.getSym();
      if (!s.isLineEdge()) {
        if (s.isInResult()) {
          n = C.INTERIOR;
          break;
        }
        if (o.isInResult()) {
          n = C.EXTERIOR;
          break;
        }
      }
    }
    if (n === C.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === C.INTERIOR) : (l.isInResult() && (a = C.EXTERIOR), c.isInResult() && (a = C.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var i = this;
    r.prototype.computeLabelling.call(this, n), this._label = new ut(C.NONE);
    for (var s = this.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === C.INTERIOR || c === C.BOUNDARY) && i._label.setLocation(l, C.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ce), Tg = function(r) {
  function t() {
    r.apply(this, arguments);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new Gu(n, new uv());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(to), Zr = function r() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = r.orientation(t);
};
Zr.prototype.compareTo = function(t) {
  var e = t, n = Zr.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
Zr.prototype.interfaces_ = function() {
  return [on];
};
Zr.prototype.getClass = function() {
  return Zr;
};
Zr.orientation = function(t) {
  return $.increasingDirection(t) === 1;
};
Zr.compareOriented = function(t, e, n, i) {
  for (var s = e ? 1 : -1, o = i ? 1 : -1, a = e ? t.length : -1, u = i ? n.length : -1, l = e ? 0 : t.length - 1, c = i ? 0 : n.length - 1; ; ) {
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
    var i = e._edges.get(n);
    n > 0 && t.print(","), t.print("(");
    for (var s = i.getCoordinates(), o = 0; o < s.length; o++)
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
  var e = new Zr(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
mn.prototype.add = function(t) {
  this._edges.add(t);
  var e = new Zr(t.getCoordinates());
  this._ocaMap.put(e, t);
};
mn.prototype.interfaces_ = function() {
  return [];
};
mn.prototype.getClass = function() {
  return mn;
};
var Ri = function() {
};
Ri.prototype.processIntersections = function(t, e, n, i) {
};
Ri.prototype.isDone = function() {
};
Ri.prototype.interfaces_ = function() {
  return [];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var qe = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
qe.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (qe.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var s = t.size() - 1;
      if (e === 0 && i === s || i === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
qe.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
qe.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
qe.prototype.getLineIntersector = function() {
  return this._li;
};
qe.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
qe.prototype.processIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
qe.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
qe.prototype.isDone = function() {
  return !1;
};
qe.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
qe.prototype.interfaces_ = function() {
  return [Ri];
};
qe.prototype.getClass = function() {
  return qe;
};
qe.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var Vn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new E(t), this.segmentIndex = e, this.dist = n;
};
Vn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
Vn.prototype.getCoordinate = function() {
  return this.coord;
};
Vn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
Vn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
Vn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
Vn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
Vn.prototype.getDistance = function() {
  return this.dist;
};
Vn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
Vn.prototype.interfaces_ = function() {
  return [on];
};
Vn.prototype.getClass = function() {
  return Vn;
};
var lr = function() {
  this._nodeMap = new ue(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
lr.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
lr.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
lr.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), i = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(i, s);
    t.add(o), i = s;
  }
};
lr.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
lr.prototype.createSplitEdge = function(t, e) {
  var n = this, i = e.segmentIndex - t.segmentIndex + 2, s = this.edge.pts[e.segmentIndex], o = e.dist > 0 || !e.coord.equals2D(s);
  o || i--;
  var a = new Array(i).fill(null), u = 0;
  a[u++] = new E(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return o && (a[u] = e.coord), new fu(a, new ut(this.edge._label));
};
lr.prototype.add = function(t, e, n) {
  var i = new Vn(t, e, n), s = this._nodeMap.get(i);
  return s !== null ? s : (this._nodeMap.put(i, i), i);
};
lr.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
var Ni = function() {
};
Ni.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, i = new D();
  i.add(new Dn(n));
  do {
    var s = e.findChainEnd(t, n);
    i.add(new Dn(s)), n = s;
  } while (n < t.length - 1);
  var o = Ni.toIntArray(i);
  return o;
};
Ni.prototype.findChainEnd = function(t, e) {
  for (var n = ht.quadrant(t[e], t[e + 1]), i = e + 1; i < t.length; ) {
    var s = ht.quadrant(t[i - 1], t[i]);
    if (s !== n)
      break;
    i++;
  }
  return i - 1;
};
Ni.prototype.interfaces_ = function() {
  return [];
};
Ni.prototype.getClass = function() {
  return Ni;
};
Ni.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Lr = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new X(), this.env2 = new X();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Ni();
  this.startIndex = e.getChainStartIndices(this.pts);
};
Lr.prototype.getCoordinates = function() {
  return this.pts;
};
Lr.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
Lr.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
Lr.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], i = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], i);
  } else if (arguments.length === 6) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], h = this.pts[s], f = this.pts[o], g = a.pts[u], d = a.pts[l];
    if (o - s === 1 && l - u === 1)
      return c.addIntersections(this.e, s, a.e, u), null;
    if (this.env1.init(h, f), this.env2.init(g, d), !this.env1.intersects(this.env2))
      return null;
    var p = Math.trunc((s + o) / 2), _ = Math.trunc((u + l) / 2);
    s < p && (u < _ && this.computeIntersectsForChain(s, p, a, u, _, c), _ < l && this.computeIntersectsForChain(s, p, a, _, l, c)), p < o && (u < _ && this.computeIntersectsForChain(p, o, a, u, _, c), _ < l && this.computeIntersectsForChain(p, o, a, _, l, c));
  }
};
Lr.prototype.getStartIndexes = function() {
  return this.startIndex;
};
Lr.prototype.computeIntersects = function(t, e) {
  for (var n = this, i = 0; i < this.startIndex.length - 1; i++)
    for (var s = 0; s < t.startIndex.length - 1; s++)
      n.computeIntersectsForChain(i, t, s, e);
};
Lr.prototype.interfaces_ = function() {
  return [];
};
Lr.prototype.getClass = function() {
  return Lr;
};
var te = function r() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = r.NULL_VALUE;
}, Mg = { NULL_VALUE: { configurable: !0 } };
te.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
te.prototype.setDepth = function(t, e, n) {
  this._depth[t][e] = n;
};
te.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var n = 0; n < 3; n++)
        if (t._depth[e][n] !== te.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var i = arguments[0];
    return this._depth[i][1] === te.NULL_VALUE;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return this._depth[s][o] === te.NULL_VALUE;
  }
};
te.prototype.normalize = function() {
  for (var t = this, e = 0; e < 2; e++)
    if (!t.isNull(e)) {
      var n = t._depth[e][1];
      t._depth[e][2] < n && (n = t._depth[e][2]), n < 0 && (n = 0);
      for (var i = 1; i < 3; i++) {
        var s = 0;
        t._depth[e][i] > n && (s = 1), t._depth[e][i] = s;
      }
    }
};
te.prototype.getDelta = function(t) {
  return this._depth[t][T.RIGHT] - this._depth[t][T.LEFT];
};
te.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? C.EXTERIOR : C.INTERIOR;
};
te.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
te.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], n = 0; n < 2; n++)
      for (var i = 1; i < 3; i++) {
        var s = e.getLocation(n, i);
        (s === C.EXTERIOR || s === C.INTERIOR) && (t.isNull(n, i) ? t._depth[n][i] = te.depthAtLocation(s) : t._depth[n][i] += te.depthAtLocation(s));
      }
  else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    u === C.INTERIOR && this._depth[o][a]++;
  }
};
te.prototype.interfaces_ = function() {
  return [];
};
te.prototype.getClass = function() {
  return te;
};
te.depthAtLocation = function(t) {
  return t === C.EXTERIOR ? 0 : t === C.INTERIOR ? 1 : te.NULL_VALUE;
};
Mg.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(te, Mg);
var fu = function(r) {
  function t() {
    if (r.call(this), this.pts = null, this._env = null, this.eiList = new lr(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new te(), this._depthDelta = 0, arguments.length === 1) {
      var e = arguments[0];
      t.call(this, e, null);
    } else if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      this.pts = n, this._label = i;
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.getDepth = function() {
    return this._depth;
  }, t.prototype.getCollapsedEdge = function() {
    var n = new Array(2).fill(null);
    n[0] = this.pts[0], n[1] = this.pts[1];
    var i = new t(n, ut.toLineLabel(this._label));
    return i;
  }, t.prototype.isIsolated = function() {
    return this._isIsolated;
  }, t.prototype.getCoordinates = function() {
    return this.pts;
  }, t.prototype.setIsolated = function(n) {
    this._isIsolated = n;
  }, t.prototype.setName = function(n) {
    this._name = n;
  }, t.prototype.equals = function(n) {
    var i = this;
    if (!(n instanceof t))
      return !1;
    var s = n;
    if (this.pts.length !== s.pts.length)
      return !1;
    for (var o = !0, a = !0, u = this.pts.length, l = 0; l < this.pts.length; l++)
      if (i.pts[l].equals2D(s.pts[l]) || (o = !1), i.pts[l].equals2D(s.pts[--u]) || (a = !1), !o && !a)
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
    var i = this;
    n.print("edge " + this._name + ": "), n.print("LINESTRING (");
    for (var s = 0; s < this.pts.length; s++)
      s > 0 && n.print(","), n.print(i.pts[s].x + " " + i.pts[s].y);
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
    var i = this;
    n.print("edge " + this._name + ": ");
    for (var s = this.pts.length - 1; s >= 0; s--)
      n.print(i.pts[s] + " ");
    n.println("");
  }, t.prototype.getMonotoneChainEdge = function() {
    return this._mce === null && (this._mce = new Lr(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new X();
      for (var i = 0; i < this.pts.length; i++)
        n._env.expandToInclude(n.pts[i]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, i, s, o) {
    var a = new E(n.getIntersection(o)), u = i, l = n.getEdgeDistance(s, o), c = u + 1;
    if (c < this.pts.length) {
      var h = this.pts[c];
      a.equals2D(h) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, i = new Wn();
    i.append("edge " + this._name + ": "), i.append("LINESTRING (");
    for (var s = 0; s < this.pts.length; s++)
      s > 0 && i.append(","), i.append(n.pts[s].x + " " + n.pts[s].y);
    return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
  }, t.prototype.isPointwiseEqual = function(n) {
    var i = this;
    if (this.pts.length !== n.pts.length)
      return !1;
    for (var s = 0; s < this.pts.length; s++)
      if (!i.pts[s].equals2D(n.pts[s]))
        return !1;
    return !0;
  }, t.prototype.setDepthDelta = function(n) {
    this._depthDelta = n;
  }, t.prototype.getEdgeIntersectionList = function() {
    return this.eiList;
  }, t.prototype.addIntersections = function(n, i, s) {
    for (var o = this, a = 0; a < n.getIntersectionNum(); a++)
      o.addIntersection(n, i, s, a);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.updateIM = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      i.setAtLeastIfValid(n.getLocation(0, T.ON), n.getLocation(1, T.ON), 1), n.isArea() && (i.setAtLeastIfValid(n.getLocation(0, T.LEFT), n.getLocation(1, T.LEFT), 2), i.setAtLeastIfValid(n.getLocation(0, T.RIGHT), n.getLocation(1, T.RIGHT), 2));
    } else
      return r.prototype.updateIM.apply(this, arguments);
  }, t;
}(Ue), ye = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new mn(), this._bufParams = t || null;
};
ye.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ye.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var n = e.getLabel(), i = t.getLabel();
    e.isPointwiseEqual(t) || (i = new ut(t.getLabel()), i.flip()), n.merge(i);
    var s = ye.depthDelta(i), o = e.getDepthDelta(), a = o + s;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ye.depthDelta(t.getLabel()));
};
ye.prototype.buildSubgraphs = function(t, e) {
  for (var n = new D(), i = t.iterator(); i.hasNext(); ) {
    var s = i.next(), o = s.getRightmostCoordinate(), a = new is(n), u = a.getDepth(o);
    s.computeDepth(u), s.findResultEdges(), n.add(s), e.add(s.getDirectedEdges(), s.getNodes());
  }
};
ye.prototype.createSubgraphs = function(t) {
  for (var e = new D(), n = t.getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isVisited()) {
      var s = new Ee();
      s.create(i), e.add(s);
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
  var e = new pc(), n = new Ai();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new qe(n)), e;
};
ye.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var i = new be(n, this._bufParams), s = new sn(t, e, i), o = s.getCurves();
  if (o.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(o, n), this._graph = new St(new Tg()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new Fe(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ye.prototype.computeNodedEdges = function(t, e) {
  var n = this, i = this.getNoder(e);
  i.computeNodes(t);
  for (var s = i.getNodedSubstrings(), o = s.iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new fu(a.getCoordinates(), new ut(l));
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
  return e === C.INTERIOR && n === C.EXTERIOR ? 1 : e === C.EXTERIOR && n === C.INTERIOR ? -1 : 0;
};
ye.convertSegStrings = function(t) {
  for (var e = new Q(), n = new D(); t.hasNext(); ) {
    var i = t.next(), s = e.createLineString(i.getCoordinates());
    n.add(s);
  }
  return e.buildGeometry(n);
};
var Kr = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], i = arguments[1], s = arguments[2], o = arguments[3];
    this._noder = n, this._scaleFactor = i, this._offsetX = s, this._offsetY = o, this._isScaled = !this.isIntegerPrecision();
  }
};
Kr.prototype.rescale = function() {
  var t = this;
  if (q(arguments[0], Bt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.rescale(i.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], o = 0; o < s.length; o++)
      s[o].x = s[o].x / t._scaleFactor + t._offsetX, s[o].y = s[o].y / t._scaleFactor + t._offsetY;
    s.length === 2 && s[0].equals2D(s[1]) && ee.out.println(s);
  }
};
Kr.prototype.scale = function() {
  var t = this;
  if (q(arguments[0], Bt)) {
    for (var e = arguments[0], n = new D(), i = e.iterator(); i.hasNext(); ) {
      var s = i.next();
      n.add(new Ot(t.scale(s.getCoordinates()), s.getData()));
    }
    return n;
  } else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], a = new Array(o.length).fill(null), u = 0; u < o.length; u++)
      a[u] = new E(Math.round((o[u].x - t._offsetX) * t._scaleFactor), Math.round((o[u].y - t._offsetY) * t._scaleFactor), o[u].z);
    var l = $.removeRepeatedPoints(a);
    return l;
  }
};
Kr.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
Kr.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
Kr.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
Kr.prototype.interfaces_ = function() {
  return [Si];
};
Kr.prototype.getClass = function() {
  return Kr;
};
var Xn = function() {
  this._li = new Ai(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, Og = { fact: { configurable: !0 } };
Xn.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next(), i = n.getCoordinates();
      t.checkEndPtVertexIntersections(i[0], t._segStrings), t.checkEndPtVertexIntersections(i[i.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var s = arguments[0], o = arguments[1], a = o.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), c = 1; c < l.length - 1; c++)
        if (l[c].equals(s))
          throw new Sr("found endpt/interior pt intersection at index " + c + " :pt " + s);
  }
};
Xn.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var n = e.next(), i = this._segStrings.iterator(); i.hasNext(); ) {
        var s = i.next();
        t.checkInteriorIntersections(n, s);
      }
  else if (arguments.length === 2)
    for (var o = arguments[0], a = arguments[1], u = o.getCoordinates(), l = a.getCoordinates(), c = 0; c < u.length - 1; c++)
      for (var h = 0; h < l.length - 1; h++)
        t.checkInteriorIntersections(o, c, a, h);
  else if (arguments.length === 4) {
    var f = arguments[0], g = arguments[1], d = arguments[2], p = arguments[3];
    if (f === d && g === p)
      return null;
    var _ = f.getCoordinates()[g], m = f.getCoordinates()[g + 1], y = d.getCoordinates()[p], v = d.getCoordinates()[p + 1];
    if (this._li.computeIntersection(_, m, y, v), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, _, m) || this.hasInteriorIntersection(this._li, y, v)))
      throw new Sr("found non-noded intersection at " + _ + "-" + m + " and " + y + "-" + v);
  }
};
Xn.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
Xn.prototype.checkCollapses = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next();
      t.checkCollapses(n);
    }
  else if (arguments.length === 1)
    for (var i = arguments[0], s = i.getCoordinates(), o = 0; o < s.length - 2; o++)
      t.checkCollapse(s[o], s[o + 1], s[o + 2]);
};
Xn.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var i = 0; i < t.getIntersectionNum(); i++) {
    var s = t.getIntersection(i);
    if (!(s.equals(e) || s.equals(n)))
      return !0;
  }
  return !1;
};
Xn.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new Sr("found non-noded collapse at " + Xn.fact.createLineString([t, e, n]));
};
Xn.prototype.interfaces_ = function() {
  return [];
};
Xn.prototype.getClass = function() {
  return Xn;
};
Og.fact.get = function() {
  return new Q();
};
Object.defineProperties(Xn, Og);
var Pe = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new Et("Scale factor must be non-zero");
  e !== 1 && (this._pt = new E(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new E(), this._p1Scaled = new E()), this.initCorners(this._pt);
}, Ag = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
Pe.prototype.intersectsScaled = function(t, e) {
  var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), s = Math.min(t.y, e.y), o = Math.max(t.y, e.y), a = this._maxx < n || this._minx > i || this._maxy < s || this._miny > o;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return J.isTrue(!(a && u), "Found bad envelope test"), u;
};
Pe.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new E(this._maxx, this._maxy), this._corner[1] = new E(this._minx, this._maxy), this._corner[2] = new E(this._minx, this._miny), this._corner[3] = new E(this._maxx, this._miny);
};
Pe.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
Pe.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
Pe.prototype.getCoordinate = function() {
  return this._originalPt;
};
Pe.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
Pe.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = Pe.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new X(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
Pe.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
Pe.prototype.intersectsToleranceSquare = function(t, e) {
  var n = !1, i = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (i = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || n && i || t.equals(this._pt) || e.equals(this._pt));
};
Pe.prototype.addSnappedNode = function(t, e) {
  var n = t.getCoordinate(e), i = t.getCoordinate(e + 1);
  return this.intersects(n, i) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
Pe.prototype.interfaces_ = function() {
  return [];
};
Pe.prototype.getClass = function() {
  return Pe;
};
Ag.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(Pe, Ag);
var ca = function() {
  this.tempEnv1 = new X(), this.selectedSegment = new Y();
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
var io = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, Dg = { HotPixelSnapAction: { configurable: !0 } };
io.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2], s = e.getSafeEnvelope(), o = new Fg(e, n, i);
    return this._index.query(s, {
      interfaces_: function() {
        return [Hr];
      },
      visitItem: function(a) {
        var u = a;
        u.select(s, o);
      }
    }), o.isNodeAdded();
  }
};
io.prototype.interfaces_ = function() {
  return [];
};
io.prototype.getClass = function() {
  return io;
};
Dg.HotPixelSnapAction.get = function() {
  return Fg;
};
Object.defineProperties(io, Dg);
var Fg = function(r) {
  function t() {
    r.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.isNodeAdded = function() {
    return this._isNodeAdded;
  }, t.prototype.select = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1], s = n.getContext();
      if (this._parentEdge !== null && s === this._parentEdge && i === this._hotPixelVertexIndex)
        return null;
      this._isNodeAdded = this._hotPixel.addSnappedNode(s, i);
    } else
      return r.prototype.select.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ca), ss = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new D();
};
ss.prototype.processIntersections = function(t, e, n, i) {
  var s = this;
  if (t === n && e === i)
    return null;
  var o = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  if (this._li.computeIntersection(o, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var c = 0; c < this._li.getIntersectionNum(); c++)
      s._interiorIntersections.add(s._li.getIntersection(c));
    t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1);
  }
};
ss.prototype.isDone = function() {
  return !1;
};
ss.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
ss.prototype.interfaces_ = function() {
  return [Ri];
};
ss.prototype.getClass = function() {
  return ss;
};
var cr = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Ai(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
cr.prototype.checkCorrectness = function(t) {
  var e = Ot.getNodedSubstrings(t), n = new Xn(e);
  try {
    n.checkValid();
  } catch (i) {
    if (i instanceof vg)
      i.printStackTrace();
    else
      throw i;
  } finally {
  }
};
cr.prototype.getNodedSubstrings = function() {
  return Ot.getNodedSubstrings(this._nodedSegStrings);
};
cr.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
cr.prototype.findInteriorIntersections = function(t, e) {
  var n = new ss(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
cr.prototype.computeVertexSnaps = function() {
  var t = this;
  if (q(arguments[0], Bt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var i = n.next();
      t.computeVertexSnaps(i);
    }
  else if (arguments[0] instanceof Ot)
    for (var s = arguments[0], o = s.getCoordinates(), a = 0; a < o.length; a++) {
      var u = new Pe(o[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, s, a);
      l && s.addIntersection(o[a], a);
    }
};
cr.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new pc(), this._pointSnapper = new io(this._noder.getIndex()), this.snapRound(t, this._li);
};
cr.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), s = new Pe(i, e._scaleFactor, e._li);
    e._pointSnapper.snap(s);
  }
};
cr.prototype.interfaces_ = function() {
  return [Si];
};
cr.prototype.getClass = function() {
  return cr;
};
var $t = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new rt(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, yo = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
$t.prototype.bufferFixedPrecision = function(t) {
  var e = new Kr(new cr(new it(1)), t.getScale()), n = new ye(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
$t.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = $t.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (o) {
        if (o instanceof Rr)
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
    var n = arguments[0], i = $t.precisionScaleFactor(this._argGeom, this._distance, n), s = new it(i);
    this.bufferFixedPrecision(s);
  }
};
$t.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === it.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
$t.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
$t.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ye(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof Sr)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
$t.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
$t.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
$t.prototype.interfaces_ = function() {
  return [];
};
$t.prototype.getClass = function() {
  return $t;
};
$t.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new $t(t), i = n.getResultGeometry(e);
    return i;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof W && typeof arguments[1] == "number") {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new $t(s);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(o);
      return l;
    } else if (arguments[2] instanceof rt && arguments[0] instanceof W && typeof arguments[1] == "number") {
      var c = arguments[0], h = arguments[1], f = arguments[2], g = new $t(c, f), d = g.getResultGeometry(h);
      return d;
    }
  } else if (arguments.length === 4) {
    var p = arguments[0], _ = arguments[1], m = arguments[2], y = arguments[3], v = new $t(p);
    v.setQuadrantSegments(m), v.setEndCapStyle(y);
    var I = v.getResultGeometry(_);
    return I;
  }
};
$t.precisionScaleFactor = function(t, e, n) {
  var i = t.getEnvelopeInternal(), s = Ye.max(Math.abs(i.getMaxX()), Math.abs(i.getMaxY()), Math.abs(i.getMinX()), Math.abs(i.getMinY())), o = e > 0 ? e : 0, a = s + 2 * o, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, c = Math.pow(10, l);
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
Object.defineProperties($t, yo);
var pe = function() {
  this._pt = [new E(), new E()], this._distance = H.NaN, this._isNull = !0;
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
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
pe.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = s, this._isNull = !1;
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
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
pe.prototype.interfaces_ = function() {
  return [];
};
pe.prototype.getClass = function() {
  return pe;
};
var Jn = function() {
};
Jn.prototype.interfaces_ = function() {
  return [];
};
Jn.prototype.getClass = function() {
  return Jn;
};
Jn.computeDistance = function() {
  if (arguments[2] instanceof pe && arguments[0] instanceof Rt && arguments[1] instanceof E)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = t.getCoordinates(), s = new Y(), o = 0; o < i.length - 1; o++) {
      s.setCoordinates(i[o], i[o + 1]);
      var a = s.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof pe && arguments[0] instanceof Ut && arguments[1] instanceof E) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Jn.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      Jn.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof pe && arguments[0] instanceof W && arguments[1] instanceof E) {
    var f = arguments[0], g = arguments[1], d = arguments[2];
    if (f instanceof Rt)
      Jn.computeDistance(f, g, d);
    else if (f instanceof Ut)
      Jn.computeDistance(f, g, d);
    else if (f instanceof ve)
      for (var p = f, _ = 0; _ < p.getNumGeometries(); _++) {
        var m = p.getGeometryN(_);
        Jn.computeDistance(m, g, d);
      }
    else
      d.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof pe && arguments[0] instanceof Y && arguments[1] instanceof E) {
    var y = arguments[0], v = arguments[1], I = arguments[2], x = y.closestPoint(v);
    I.setMinimum(x, v);
  }
};
var Li = function(t) {
  this._maxPtDist = new pe(), this._inputGeom = t || null;
}, _c = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
Li.prototype.computeMaxMidpointDistance = function(t) {
  var e = new Jr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Li.prototype.computeMaxVertexDistance = function(t) {
  var e = new os(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
Li.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
Li.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
Li.prototype.interfaces_ = function() {
  return [];
};
Li.prototype.getClass = function() {
  return Li;
};
_c.MaxPointDistanceFilter.get = function() {
  return os;
};
_c.MaxMidpointDistanceFilter.get = function() {
  return Jr;
};
Object.defineProperties(Li, _c);
var os = function(t) {
  this._maxPtDist = new pe(), this._minPtDist = new pe(), this._geom = t || null;
};
os.prototype.filter = function(t) {
  this._minPtDist.initialize(), Jn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
os.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
os.prototype.interfaces_ = function() {
  return [sr];
};
os.prototype.getClass = function() {
  return os;
};
var Jr = function(t) {
  this._maxPtDist = new pe(), this._minPtDist = new pe(), this._geom = t || null;
};
Jr.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), i = t.getCoordinate(e), s = new E((n.x + i.x) / 2, (n.y + i.y) / 2);
  this._minPtDist.initialize(), Jn.computeDistance(this._geom, s, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
Jr.prototype.isDone = function() {
  return !1;
};
Jr.prototype.isGeometryChanged = function() {
  return !1;
};
Jr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Jr.prototype.interfaces_ = function() {
  return [dn];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var Ir = function(t) {
  this._comps = t || null;
};
Ir.prototype.filter = function(t) {
  t instanceof Ut && this._comps.add(t);
};
Ir.prototype.interfaces_ = function() {
  return [kn];
};
Ir.prototype.getClass = function() {
  return Ir;
};
Ir.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Ir.getPolygons(t, new D());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Ut ? n.add(e) : e instanceof ve && e.apply(new Ir(n)), n;
  }
};
var Qt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._lines = e, this._isForcedToLineString = n;
  }
};
Qt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof or) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof Rt && this._lines.add(t);
};
Qt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
Qt.prototype.interfaces_ = function() {
  return [wr];
};
Qt.prototype.getClass = function() {
  return Qt;
};
Qt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(Qt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e.getFactory().buildGeometry(Qt.getLines(e, n));
  }
};
Qt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Qt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (q(arguments[0], Bt) && q(arguments[1], Bt)) {
      for (var e = arguments[0], n = arguments[1], i = e.iterator(); i.hasNext(); ) {
        var s = i.next();
        Qt.getLines(s, n);
      }
      return n;
    } else if (arguments[0] instanceof W && typeof arguments[1] == "boolean") {
      var o = arguments[0], a = arguments[1], u = new D();
      return o.apply(new Qt(u, a)), u;
    } else if (arguments[0] instanceof W && q(arguments[1], Bt)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof Rt ? c.add(l) : l.apply(new Qt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && q(arguments[0], Bt) && q(arguments[1], Bt)) {
      for (var h = arguments[0], f = arguments[1], g = arguments[2], d = h.iterator(); d.hasNext(); ) {
        var p = d.next();
        Qt.getLines(p, f, g);
      }
      return f;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof W && q(arguments[1], Bt)) {
      var _ = arguments[0], m = arguments[1], y = arguments[2];
      return _.apply(new Qt(m, y)), m;
    }
  }
};
var yn = function() {
  if (this._boundaryRule = nn.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new Et("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
yn.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof E && arguments[1] instanceof Ut) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return C.EXTERIOR;
    var i = n.getExteriorRing(), s = this.locateInPolygonRing(e, i);
    if (s === C.EXTERIOR)
      return C.EXTERIOR;
    if (s === C.BOUNDARY)
      return C.BOUNDARY;
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var a = n.getInteriorRingN(o), u = t.locateInPolygonRing(e, a);
      if (u === C.INTERIOR)
        return C.EXTERIOR;
      if (u === C.BOUNDARY)
        return C.BOUNDARY;
    }
    return C.INTERIOR;
  } else if (arguments[0] instanceof E && arguments[1] instanceof Rt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return C.EXTERIOR;
    var h = c.getCoordinates();
    return !c.isClosed() && (l.equals(h[0]) || l.equals(h[h.length - 1])) ? C.BOUNDARY : G.isOnLine(l, h) ? C.INTERIOR : C.EXTERIOR;
  } else if (arguments[0] instanceof E && arguments[1] instanceof De) {
    var f = arguments[0], g = arguments[1], d = g.getCoordinate();
    return d.equals2D(f) ? C.INTERIOR : C.EXTERIOR;
  }
};
yn.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? G.locatePointInRing(t, e.getCoordinates()) : C.EXTERIOR;
};
yn.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== C.EXTERIOR;
};
yn.prototype.updateLocationInfo = function(t) {
  t === C.INTERIOR && (this._isIn = !0), t === C.BOUNDARY && this._numBoundaries++;
};
yn.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof De && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof Rt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Ut)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Ii)
    for (var i = e, s = 0; s < i.getNumGeometries(); s++) {
      var o = i.getGeometryN(s);
      n.updateLocationInfo(n.locateInternal(t, o));
    }
  else if (e instanceof nr)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof ve)
    for (var c = new rr(e); c.hasNext(); ) {
      var h = c.next();
      h !== e && n.computeLocation(t, h);
    }
};
yn.prototype.locate = function(t, e) {
  return e.isEmpty() ? C.EXTERIOR : e instanceof Rt ? this.locateInternal(t, e) : e instanceof Ut ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? C.BOUNDARY : this._numBoundaries > 0 || this._isIn ? C.INTERIOR : C.EXTERIOR);
};
yn.prototype.interfaces_ = function() {
  return [];
};
yn.prototype.getClass = function() {
  return yn;
};
var _e = function r() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    r.call(this, t, r.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this._component = n, this._segIndex = i, this._pt = s;
  }
}, kg = { INSIDE_AREA: { configurable: !0 } };
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
kg.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties(_e, kg);
var Xr = function(t) {
  this._pts = t || null;
};
Xr.prototype.filter = function(t) {
  t instanceof De && this._pts.add(t);
};
Xr.prototype.interfaces_ = function() {
  return [kn];
};
Xr.prototype.getClass = function() {
  return Xr;
};
Xr.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof De ? _n.singletonList(t) : Xr.getPoints(t, new D());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof De ? n.add(e) : e instanceof ve && e.apply(new Xr(n)), n;
  }
};
var as = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
as.prototype.filter = function(t) {
  (t instanceof De || t instanceof Rt || t instanceof Ut) && this._locations.add(new _e(t, 0, t.getCoordinate()));
};
as.prototype.interfaces_ = function() {
  return [kn];
};
as.prototype.getClass = function() {
  return as;
};
as.getLocations = function(t) {
  var e = new D();
  return t.apply(new as(e)), e;
};
var ne = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new yn(), this._minDistanceLocation = null, this._minDistance = H.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = i, this._terminateDistance = s;
  }
};
ne.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], s = 1 - n, o = Ir.getPolygons(this._geom[n]);
    if (o.size() > 0) {
      var a = as.getLocations(this._geom[s]);
      if (this.computeContainmentDistance(a, o, i), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[s] = i[0], this._minDistanceLocation[n] = i[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && q(arguments[0], fn) && q(arguments[1], fn)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], h = 0; h < u.size(); h++)
        for (var f = u.get(h), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(f, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof _e && arguments[1] instanceof Ut) {
      var d = arguments[0], p = arguments[1], _ = arguments[2], m = d.getCoordinate();
      if (C.EXTERIOR !== this._ptLocator.locate(m, p))
        return this._minDistance = 0, _[0] = d, _[1] = new _e(p, m), null;
    }
  }
};
ne.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
  for (var i = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(o, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
ne.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = Qt.getLines(this._geom[0]), n = Qt.getLines(this._geom[1]), i = Xr.getPoints(this._geom[0]), s = Xr.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, s, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, i, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(i, s, t), this.updateMinDistance(t, !1);
};
ne.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
ne.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
ne.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
ne.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof Rt && arguments[1] instanceof De) {
      var e = arguments[0], n = arguments[1], i = arguments[2];
      if (e.getEnvelopeInternal().distance(n.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var s = e.getCoordinates(), o = n.getCoordinate(), a = 0; a < s.length - 1; a++) {
        var u = G.distancePointLine(o, s[a], s[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new Y(s[a], s[a + 1]), c = l.closestPoint(o);
          i[0] = new _e(e, a, c), i[1] = new _e(n, 0, o);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof Rt && arguments[1] instanceof Rt) {
      var h = arguments[0], f = arguments[1], g = arguments[2];
      if (h.getEnvelopeInternal().distance(f.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var d = h.getCoordinates(), p = f.getCoordinates(), _ = 0; _ < d.length - 1; _++)
        for (var m = 0; m < p.length - 1; m++) {
          var y = G.distanceLineLine(d[_], d[_ + 1], p[m], p[m + 1]);
          if (y < t._minDistance) {
            t._minDistance = y;
            var v = new Y(d[_], d[_ + 1]), I = new Y(p[m], p[m + 1]), x = v.closestPoints(I);
            g[0] = new _e(h, _, x[0]), g[1] = new _e(f, m, x[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
ne.prototype.computeMinDistancePoints = function(t, e, n) {
  for (var i = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = o.getCoordinate().distance(u.getCoordinate());
      if (l < i._minDistance && (i._minDistance = l, n[0] = new _e(o, 0, o.getCoordinate()), n[1] = new _e(u, 0, u.getCoordinate())), i._minDistance <= i._terminateDistance)
        return null;
    }
};
ne.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new Et("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
ne.prototype.computeMinDistanceLines = function(t, e, n) {
  for (var i = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (i.computeMinDistance(o, u, n), i._minDistance <= i._terminateDistance)
        return null;
    }
};
ne.prototype.interfaces_ = function() {
  return [];
};
ne.prototype.getClass = function() {
  return ne;
};
ne.distance = function(t, e) {
  var n = new ne(t, e);
  return n.distance();
};
ne.isWithinDistance = function(t, e, n) {
  var i = new ne(t, e, n);
  return i.distance() <= n;
};
ne.nearestPoints = function(t, e) {
  var n = new ne(t, e);
  return n.nearestPoints();
};
var ae = function() {
  this._pt = [new E(), new E()], this._distance = H.NaN, this._isNull = !0;
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
    var i = e.distance(n);
    i < this._distance && this.initialize(e, n, i);
  }
};
ae.prototype.initialize = function() {
  if (arguments.length === 0)
    this._isNull = !0;
  else if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(i), this._distance = s, this._isNull = !1;
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
    var i = e.distance(n);
    i > this._distance && this.initialize(e, n, i);
  }
};
ae.prototype.interfaces_ = function() {
  return [];
};
ae.prototype.getClass = function() {
  return ae;
};
var Pn = function() {
};
Pn.prototype.interfaces_ = function() {
  return [];
};
Pn.prototype.getClass = function() {
  return Pn;
};
Pn.computeDistance = function() {
  if (arguments[2] instanceof ae && arguments[0] instanceof Rt && arguments[1] instanceof E)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], i = new Y(), s = t.getCoordinates(), o = 0; o < s.length - 1; o++) {
      i.setCoordinates(s[o], s[o + 1]);
      var a = i.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof ae && arguments[0] instanceof Ut && arguments[1] instanceof E) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    Pn.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      Pn.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof ae && arguments[0] instanceof W && arguments[1] instanceof E) {
    var f = arguments[0], g = arguments[1], d = arguments[2];
    if (f instanceof Rt)
      Pn.computeDistance(f, g, d);
    else if (f instanceof Ut)
      Pn.computeDistance(f, g, d);
    else if (f instanceof ve)
      for (var p = f, _ = 0; _ < p.getNumGeometries(); _++) {
        var m = p.getGeometryN(_);
        Pn.computeDistance(m, g, d);
      }
    else
      d.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof ae && arguments[0] instanceof Y && arguments[1] instanceof E) {
    var y = arguments[0], v = arguments[1], I = arguments[2], x = y.closestPoint(v);
    I.setMinimum(x, v);
  }
};
var tn = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new ae(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, mc = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
tn.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
tn.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new Et("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
tn.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
tn.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
tn.prototype.computeOrientedDistance = function(t, e, n) {
  var i = new us(e);
  if (t.apply(i), n.setMaximum(i.getMaxPointDistance()), this._densifyFrac > 0) {
    var s = new Qr(e, this._densifyFrac);
    t.apply(s), n.setMaximum(s.getMaxPointDistance());
  }
};
tn.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
tn.prototype.interfaces_ = function() {
  return [];
};
tn.prototype.getClass = function() {
  return tn;
};
tn.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new tn(t, e);
    return n.distance();
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2], a = new tn(i, s);
    return a.setDensifyFraction(o), a.distance();
  }
};
mc.MaxPointDistanceFilter.get = function() {
  return us;
};
mc.MaxDensifiedByFractionDistanceFilter.get = function() {
  return Qr;
};
Object.defineProperties(tn, mc);
var us = function() {
  this._maxPtDist = new ae(), this._minPtDist = new ae(), this._euclideanDist = new Pn(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
us.prototype.filter = function(t) {
  this._minPtDist.initialize(), Pn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
us.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
us.prototype.interfaces_ = function() {
  return [sr];
};
us.prototype.getClass = function() {
  return us;
};
var Qr = function() {
  this._maxPtDist = new ae(), this._minPtDist = new ae(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
Qr.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var i = t.getCoordinate(e - 1), s = t.getCoordinate(e), o = (s.x - i.x) / this._numSubSegs, a = (s.y - i.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = i.x + u * o, c = i.y + u * a, h = new E(l, c);
    n._minPtDist.initialize(), Pn.computeDistance(n._geom, h, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
Qr.prototype.isDone = function() {
  return !1;
};
Qr.prototype.isGeometryChanged = function() {
  return !1;
};
Qr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Qr.prototype.interfaces_ = function() {
  return [dn];
};
Qr.prototype.getClass = function() {
  return Qr;
};
var Ae = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, yc = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
Ae.prototype.checkMaximumDistance = function(t, e, n) {
  var i = new tn(e, t);
  if (i.setDensifyFraction(0.25), this._maxDistanceFound = i.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var s = i.getCoordinates();
    this._errorLocation = s[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + gn.toLineString(s[0], s[1]) + ")";
  }
};
Ae.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = Ae.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), Ae.VERBOSE && ee.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
Ae.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Ut || this._input instanceof nr || this._input instanceof ve))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
Ae.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Ae.prototype.checkMinimumDistance = function(t, e, n) {
  var i = new ne(t, e, n);
  if (this._minDistanceFound = i.distance(), this._minDistanceFound < n) {
    this._isValid = !1;
    var s = i.nearestPoints();
    this._errorLocation = i.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + gn.toLineString(s[0], s[1]) + " )";
  }
};
Ae.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
Ae.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Ae.prototype.getPolygonLines = function(t) {
  for (var e = new D(), n = new Qt(e), i = Ir.getPolygons(t), s = i.iterator(); s.hasNext(); ) {
    var o = s.next();
    o.apply(n);
  }
  return t.getFactory().buildGeometry(e);
};
Ae.prototype.getErrorMessage = function() {
  return this._errMsg;
};
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
yc.VERBOSE.get = function() {
  return !1;
};
yc.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Ae, yc);
var re = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, vc = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
re.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
re.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * re.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new X(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var n = new X(this._result.getEnvelopeInternal());
  n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope");
};
re.prototype.checkDistance = function() {
  var t = new Ae(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
re.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
re.prototype.checkPolygonal = function() {
  this._result instanceof Ut || this._result instanceof nr || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
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
  ee.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
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
  var i = new re(t, e, n);
  return i.isValid() ? null : i.getErrorMessage();
};
re.isValid = function(t, e, n) {
  var i = new re(t, e, n);
  return !!i.isValid();
};
vc.VERBOSE.get = function() {
  return !1;
};
vc.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(re, vc);
var Yn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Yn.prototype.getCoordinates = function() {
  return this._pts;
};
Yn.prototype.size = function() {
  return this._pts.length;
};
Yn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Yn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Yn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : rs.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Yn.prototype.setData = function(t) {
  this._data = t;
};
Yn.prototype.getData = function() {
  return this._data;
};
Yn.prototype.toString = function() {
  return gn.toLineString(new Pt(this._pts));
};
Yn.prototype.interfaces_ = function() {
  return [ur];
};
Yn.prototype.getClass = function() {
  return Yn;
};
var jt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new D(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
jt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
jt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
jt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
jt.prototype.count = function() {
  return this._intersectionCount;
};
jt.prototype.getIntersections = function() {
  return this._intersections;
};
jt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
jt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
jt.prototype.processIntersections = function(t, e, n, i) {
  if (!this._findAllIntersections && this.hasIntersection() || t === n && e === i)
    return null;
  if (this._isCheckEndSegmentsOnly) {
    var s = this.isEndSegment(t, e) || this.isEndSegment(n, i);
    if (!s)
      return null;
  }
  var o = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[i], l = n.getCoordinates()[i + 1];
  this._li.computeIntersection(o, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = new Array(4).fill(null), this._intSegments[0] = o, this._intSegments[1] = a, this._intSegments[2] = u, this._intSegments[3] = l, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++);
};
jt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
jt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
jt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
jt.prototype.interfaces_ = function() {
  return [Ri];
};
jt.prototype.getClass = function() {
  return jt;
};
jt.createAllIntersectionsFinder = function(t) {
  var e = new jt(t);
  return e.setFindAllIntersections(!0), e;
};
jt.createAnyIntersectionFinder = function(t) {
  return new jt(t);
};
jt.createIntersectionCounter = function(t) {
  var e = new jt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var vn = function() {
  this._li = new Ai(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
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
  this._isValid = !0, this._segInt = new jt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new pc();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
vn.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new Rr(this.getErrorMessage(), this._segInt.getInteriorIntersection());
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
var bi = function r() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new vn(r.toSegmentStrings(t));
};
bi.prototype.checkValid = function() {
  this._nv.checkValid();
};
bi.prototype.interfaces_ = function() {
  return [];
};
bi.prototype.getClass = function() {
  return bi;
};
bi.toSegmentStrings = function(t) {
  for (var e = new D(), n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e.add(new Yn(i.getCoordinates(), i));
  }
  return e;
};
bi.checkValid = function(t) {
  var e = new bi(t);
  e.checkValid();
};
var ls = function(t) {
  this._mapOp = t;
};
ls.prototype.map = function(t) {
  for (var e = this, n = new D(), i = 0; i < t.getNumGeometries(); i++) {
    var s = e._mapOp.map(t.getGeometryN(i));
    s.isEmpty() || n.add(s);
  }
  return t.getFactory().createGeometryCollection(Q.toGeometryArray(n));
};
ls.prototype.interfaces_ = function() {
  return [];
};
ls.prototype.getClass = function() {
  return ls;
};
ls.map = function(t, e) {
  var n = new ls(e);
  return n.map(t);
};
var Un = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new D(), this._resultLineList = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = n;
};
Un.prototype.collectLines = function(t) {
  for (var e = this, n = this._op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
    var i = n.next();
    e.collectLineEdge(i, t, e._lineEdgesList), e.collectBoundaryTouchEdge(i, t, e._lineEdgesList);
  }
};
Un.prototype.labelIsolatedLine = function(t, e) {
  var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, n);
};
Un.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
Un.prototype.collectLineEdge = function(t, e, n) {
  var i = t.getLabel(), s = t.getEdge();
  t.isLineEdge() && !t.isVisited() && Z.isResultOfOp(i, e) && !s.isCovered() && (n.add(s), t.setVisitedEdge(!0));
};
Un.prototype.findCoveredLineEdges = function() {
  for (var t = this, e = this._op.getGraph().getNodes().iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().findCoveredLineEdges();
  }
  for (var i = this._op.getGraph().getEdgeEnds().iterator(); i.hasNext(); ) {
    var s = i.next(), o = s.getEdge();
    if (s.isLineEdge() && !o.isCoveredSet()) {
      var a = t._op.isCoveredByA(s.getCoordinate());
      o.setCovered(a);
    }
  }
};
Un.prototype.labelIsolatedLines = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var i = n.next(), s = i.getLabel();
    i.isIsolated() && (s.isNull(0) ? e.labelIsolatedLine(i, 0) : e.labelIsolatedLine(i, 1));
  }
};
Un.prototype.buildLines = function(t) {
  for (var e = this, n = this._lineEdgesList.iterator(); n.hasNext(); ) {
    var i = n.next(), s = e._geometryFactory.createLineString(i.getCoordinates());
    e._resultLineList.add(s), i.setInResult(!0);
  }
};
Un.prototype.collectBoundaryTouchEdge = function(t, e, n) {
  var i = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  J.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), Z.isResultOfOp(i, e) && e === Z.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
Un.prototype.interfaces_ = function() {
  return [];
};
Un.prototype.getClass = function() {
  return Un;
};
var cs = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new D();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
cs.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
cs.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var i = n.next();
    if (!i.isInResult() && !i.isIncidentEdgeInResult() && (i.getEdges().getDegree() === 0 || t === Z.INTERSECTION)) {
      var s = i.getLabel();
      Z.isResultOfOp(s, t) && e.filterCoveredNodeToPoint(i);
    }
  }
};
cs.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
cs.prototype.interfaces_ = function() {
  return [];
};
cs.prototype.getClass = function() {
  return cs;
};
var Te = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
Te.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Te.prototype.transformPolygon = function(t, e) {
  var n = this, i = !0, s = this.transformLinearRing(t.getExteriorRing(), t);
  (s === null || !(s instanceof or) || s.isEmpty()) && (i = !1);
  for (var o = new D(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof or || (i = !1), o.add(u));
  }
  if (i)
    return this._factory.createPolygon(s, o.toArray([]));
  var l = new D();
  return s !== null && l.add(s), l.addAll(o), this._factory.buildGeometry(l);
};
Te.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
Te.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
Te.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, i = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformLineString(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || i.add(o));
  }
  return this._factory.buildGeometry(i);
};
Te.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
Te.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
Te.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, i = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPoint(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || i.add(o));
  }
  return this._factory.buildGeometry(i);
};
Te.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, i = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPolygon(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || i.add(o));
  }
  return this._factory.buildGeometry(i);
};
Te.prototype.copy = function(t) {
  return t.copy();
};
Te.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, i = new D(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transform(t.getGeometryN(s));
    o !== null && (n._pruneEmptyGeometry && o.isEmpty() || i.add(o));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(Q.toGeometryArray(i)) : this._factory.buildGeometry(i);
};
Te.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof De)
    return this.transformPoint(t, null);
  if (t instanceof $s)
    return this.transformMultiPoint(t, null);
  if (t instanceof or)
    return this.transformLinearRing(t, null);
  if (t instanceof Rt)
    return this.transformLineString(t, null);
  if (t instanceof Ii)
    return this.transformMultiLineString(t, null);
  if (t instanceof Ut)
    return this.transformPolygon(t, null);
  if (t instanceof nr)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ve)
    return this.transformGeometryCollection(t, null);
  throw new Et("Unknown Geometry subtype: " + t.getClass().getName());
};
Te.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var i = n.size();
  return i > 0 && i < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
var hr = function r() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new Y(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof Rt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    r.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], i = arguments[1];
    this._srcPts = n, this._isClosed = r.isClosed(n), this._snapTolerance = i;
  }
};
hr.prototype.snapVertices = function(t, e) {
  for (var n = this, i = this._isClosed ? t.size() - 1 : t.size(), s = 0; s < i; s++) {
    var o = t.get(s), a = n.findSnapForVertex(o, e);
    a !== null && (t.set(s, new E(a)), s === 0 && n._isClosed && t.set(t.size() - 1, new E(a)));
  }
};
hr.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, i = 0; i < e.length; i++) {
    if (t.equals2D(e[i]))
      return null;
    if (t.distance(e[i]) < n._snapTolerance)
      return e[i];
  }
  return null;
};
hr.prototype.snapTo = function(t) {
  var e = new xa(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
hr.prototype.snapSegments = function(t, e) {
  var n = this;
  if (e.length === 0)
    return null;
  var i = e.length;
  e[0].equals2D(e[e.length - 1]) && (i = e.length - 1);
  for (var s = 0; s < i; s++) {
    var o = e[s], a = n.findSegmentIndexToSnap(o, t);
    a >= 0 && t.add(a + 1, new E(o), !1);
  }
};
hr.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, i = H.MAX_VALUE, s = -1, o = 0; o < e.size() - 1; o++) {
    if (n._seg.p0 = e.get(o), n._seg.p1 = e.get(o + 1), n._seg.p0.equals2D(t) || n._seg.p1.equals2D(t)) {
      if (n._allowSnappingToSourceVertices)
        continue;
      return -1;
    }
    var a = n._seg.distance(t);
    a < n._snapTolerance && a < i && (i = a, s = o);
  }
  return s;
};
hr.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
hr.prototype.interfaces_ = function() {
  return [];
};
hr.prototype.getClass = function() {
  return hr;
};
hr.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var Tt = function(t) {
  this._srcGeom = t || null;
}, Gg = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
Tt.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), i = new Bg(e, n);
  return i.transform(this._srcGeom);
};
Tt.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), i = new Bg(t, n, !0), s = i.transform(this._srcGeom), o = s;
  return e && q(o, qr) && (o = s.buffer(0)), o;
};
Tt.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
Tt.prototype.extractTargetCoordinates = function(t) {
  for (var e = new Fn(), n = t.getCoordinates(), i = 0; i < n.length; i++)
    e.add(n[i]);
  return e.toArray(new Array(0).fill(null));
};
Tt.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = H.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var i = t[n].distance(t[n + 1]);
    i < e && (e = i);
  }
  return e;
};
Tt.prototype.interfaces_ = function() {
  return [];
};
Tt.prototype.getClass = function() {
  return Tt;
};
Tt.snap = function(t, e, n) {
  var i = new Array(2).fill(null), s = new Tt(t);
  i[0] = s.snapTo(e, n);
  var o = new Tt(e);
  return i[1] = o.snapTo(i[0], n), i;
};
Tt.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = Tt.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === it.FIXED) {
      var i = 1 / n.getScale() * 2 / 1.415;
      i > e && (e = i);
    }
    return e;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return Math.min(Tt.computeOverlaySnapTolerance(s), Tt.computeOverlaySnapTolerance(o));
  }
};
Tt.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), i = n * Tt.SNAP_PRECISION_FACTOR;
  return i;
};
Tt.snapToSelf = function(t, e, n) {
  var i = new Tt(t);
  return i.snapToSelf(e, n);
};
Gg.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(Tt, Gg);
var Bg = function(r) {
  function t(e, n, i) {
    r.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = i !== void 0 ? i : !1;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, i) {
    var s = new hr(n, this._snapTolerance);
    return s.setAllowSnappingToSourceVertices(this._isSelfSnap), s.snapTo(i);
  }, t.prototype.transformCoordinates = function(n, i) {
    var s = n.toCoordinateArray(), o = this.snapLine(s, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Te), de = function() {
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
    var t = arguments[0], e = H.longBitsToDouble(t), n = H.toBinaryString(t), i = "0000000000000000000000000000000000000000000000000000000000000000" + n, s = i.substring(i.length - 64), o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
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
  var n = (1 << e) - 1, i = ~n, s = t & i;
  return s;
};
de.numCommonMostSigMantissaBits = function(t, e) {
  for (var n = 0, i = 52; i >= 0; i--) {
    if (de.getBit(t, i) !== de.getBit(e, i))
      return n;
    n++;
  }
  return 52;
};
var $r = function() {
  this._commonCoord = null, this._ccFilter = new hs();
}, Ec = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
$r.prototype.addCommonBits = function(t) {
  var e = new ti(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
$r.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new E(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new ti(e);
  return t.apply(n), t.geometryChanged(), t;
};
$r.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
$r.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
Ec.CommonCoordinateFilter.get = function() {
  return hs;
};
Ec.Translater.get = function() {
  return ti;
};
Object.defineProperties($r, Ec);
var hs = function() {
  this._commonBitsX = new de(), this._commonBitsY = new de();
};
hs.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
hs.prototype.getCommonCoordinate = function() {
  return new E(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
hs.prototype.interfaces_ = function() {
  return [sr];
};
hs.prototype.getClass = function() {
  return hs;
};
var ti = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
ti.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, i = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, i);
};
ti.prototype.isDone = function() {
  return !1;
};
ti.prototype.isGeometryChanged = function() {
  return !0;
};
ti.prototype.interfaces_ = function() {
  return [dn];
};
ti.prototype.getClass = function() {
  return ti;
};
var Zt = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
Zt.prototype.selfSnap = function(t) {
  var e = new Tt(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
Zt.prototype.removeCommonBits = function(t) {
  this._cbr = new $r(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
Zt.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
Zt.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = Z.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
Zt.prototype.checkValid = function(t) {
  t.isValid() || ee.out.println("Snapped geometry is invalid");
};
Zt.prototype.computeSnapTolerance = function() {
  this._snapTolerance = Tt.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
Zt.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = Tt.snap(e[0], e[1], this._snapTolerance);
  return n;
};
Zt.prototype.interfaces_ = function() {
  return [];
};
Zt.prototype.getClass = function() {
  return Zt;
};
Zt.overlayOp = function(t, e, n) {
  var i = new Zt(t, e);
  return i.getResultGeometry(n);
};
Zt.union = function(t, e) {
  return Zt.overlayOp(t, e, Z.UNION);
};
Zt.intersection = function(t, e) {
  return Zt.overlayOp(t, e, Z.INTERSECTION);
};
Zt.symDifference = function(t, e) {
  return Zt.overlayOp(t, e, Z.SYMDIFFERENCE);
};
Zt.difference = function(t, e) {
  return Zt.overlayOp(t, e, Z.DIFFERENCE);
};
var Ce = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
Ce.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, i = null;
  try {
    e = Z.overlayOp(this._geom[0], this._geom[1], t);
    var s = !0;
    s && (n = !0);
  } catch (o) {
    if (o instanceof Sr)
      i = o;
    else
      throw o;
  } finally {
  }
  if (!n)
    try {
      e = Zt.overlayOp(this._geom[0], this._geom[1], t);
    } catch (o) {
      throw o instanceof Sr ? i : o;
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
  var i = new Ce(t, e);
  return i.getResultGeometry(n);
};
Ce.union = function(t, e) {
  return Ce.overlayOp(t, e, Z.UNION);
};
Ce.intersection = function(t, e) {
  return Ce.overlayOp(t, e, Z.INTERSECTION);
};
Ce.symDifference = function(t, e) {
  return Ce.overlayOp(t, e, Z.SYMDIFFERENCE);
};
Ce.difference = function(t, e) {
  return Ce.overlayOp(t, e, Z.DIFFERENCE);
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
var Ge = function r() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = r.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], i = arguments[1], s = arguments[2];
    this._eventType = r.INSERT, this._label = n, this._xValue = i, this._obj = s;
  }
}, xc = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
Ge.prototype.isDelete = function() {
  return this._eventType === Ge.DELETE;
};
Ge.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
Ge.prototype.getObject = function() {
  return this._obj;
};
Ge.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
Ge.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
Ge.prototype.isInsert = function() {
  return this._eventType === Ge.INSERT;
};
Ge.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
Ge.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
Ge.prototype.interfaces_ = function() {
  return [on];
};
Ge.prototype.getClass = function() {
  return Ge;
};
xc.INSERT.get = function() {
  return 1;
};
xc.DELETE.get = function() {
  return 2;
};
Object.defineProperties(Ge, xc);
var gu = function() {
};
gu.prototype.interfaces_ = function() {
  return [];
};
gu.prototype.getClass = function() {
  return gu;
};
var ie = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = n;
};
ie.prototype.isTrivialIntersection = function(t, e, n, i) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (ie.isAdjacentSegments(e, i))
      return !0;
    if (t.isClosed()) {
      var s = t.getNumPoints() - 1;
      if (e === 0 && i === s || i === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
ie.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
ie.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
ie.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
ie.prototype.isBoundaryPointInternal = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var i = n.next(), s = i.getCoordinate();
    if (t.isIntersection(s))
      return !0;
  }
  return !1;
};
ie.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
ie.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
ie.prototype.isDone = function() {
  return this._isDone;
};
ie.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
ie.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
ie.prototype.addIntersections = function(t, e, n, i) {
  if (t === n && e === i)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[i], u = n.getCoordinates()[i + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, i) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, i, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
ie.prototype.interfaces_ = function() {
  return [];
};
ie.prototype.getClass = function() {
  return ie;
};
ie.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var lv = function(r) {
  function t() {
    r.call(this), this.events = new D(), this.nOverlaps = null;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    _n.sort(this.events);
    for (var i = 0; i < this.events.size(); i++) {
      var s = n.events.get(i);
      s.isDelete() && s.getInsertEvent().setDeleteEventIndex(i);
    }
  }, t.prototype.computeIntersections = function() {
    var n = this;
    if (arguments.length === 1) {
      var i = arguments[0];
      this.nOverlaps = 0, this.prepareEvents();
      for (var s = 0; s < this.events.size(); s++) {
        var o = n.events.get(s);
        if (o.isInsert() && n.processOverlaps(s, o.getDeleteEventIndex(), o, i), i.isDone())
          break;
      }
    } else if (arguments.length === 3) {
      if (arguments[2] instanceof ie && q(arguments[0], fn) && q(arguments[1], fn)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && q(arguments[0], fn) && arguments[1] instanceof ie) {
        var c = arguments[0], h = arguments[1], f = arguments[2];
        f ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(h);
      }
    }
  }, t.prototype.addEdge = function(n, i) {
    for (var s = this, o = n.getMonotoneChainEdge(), a = o.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new ha(o, u), c = new Ge(i, o.getMinX(u), l);
      s.events.add(c), s.events.add(new Ge(o.getMaxX(u), c));
    }
  }, t.prototype.processOverlaps = function(n, i, s, o) {
    for (var a = this, u = s.getObject(), l = n; l < i; l++) {
      var c = a.events.get(l);
      if (c.isInsert()) {
        var h = c.getObject();
        s.isSameLabel(c) || (u.computeIntersections(h, o), a.nOverlaps++);
      }
    }
  }, t.prototype.addEdges = function() {
    var n = this;
    if (arguments.length === 1)
      for (var i = arguments[0], s = i.iterator(); s.hasNext(); ) {
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
}(gu), fr = function() {
  this._min = H.POSITIVE_INFINITY, this._max = H.NEGATIVE_INFINITY;
}, zg = { NodeComparator: { configurable: !0 } };
fr.prototype.getMin = function() {
  return this._min;
};
fr.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
fr.prototype.getMax = function() {
  return this._max;
};
fr.prototype.toString = function() {
  return gn.toLineString(new E(this._min, 0), new E(this._max, 0));
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
zg.NodeComparator.get = function() {
  return fa;
};
Object.defineProperties(fr, zg);
var fa = function() {
};
fa.prototype.compare = function(t, e) {
  var n = t, i = e, s = (n._min + n._max) / 2, o = (i._min + i._max) / 2;
  return s < o ? -1 : s > o ? 1 : 0;
};
fa.prototype.interfaces_ = function() {
  return [qs];
};
fa.prototype.getClass = function() {
  return fa;
};
var cv = function(r) {
  function t() {
    r.call(this), this._item = null;
    var e = arguments[0], n = arguments[1], i = arguments[2];
    this._min = e, this._max = n, this._item = i;
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.query = function(n, i, s) {
    if (!this.intersects(n, i))
      return null;
    s.visitItem(this._item);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(fr), hv = function(r) {
  function t() {
    r.call(this), this._node1 = null, this._node2 = null;
    var e = arguments[0], n = arguments[1];
    this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2);
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.buildExtent = function(n, i) {
    this._min = Math.min(n._min, i._min), this._max = Math.max(n._max, i._max);
  }, t.prototype.query = function(n, i, s) {
    if (!this.intersects(n, i))
      return null;
    this._node1 !== null && this._node1.query(n, i, s), this._node2 !== null && this._node2.query(n, i, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(fr), gr = function() {
  this._leaves = new D(), this._root = null, this._level = 0;
};
gr.prototype.buildTree = function() {
  var t = this;
  _n.sort(this._leaves, new fr.NodeComparator());
  for (var e = this._leaves, n = null, i = new D(); ; ) {
    if (t.buildLevel(e, i), i.size() === 1)
      return i.get(0);
    n = e, e = i, i = n;
  }
};
gr.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new cv(t, e, n));
};
gr.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
gr.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
gr.prototype.printNode = function(t) {
  ee.out.println(gn.toLineString(new E(t._min, this._level), new E(t._max, this._level)));
};
gr.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
gr.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var i = t.get(n), s = n + 1 < t.size() ? t.get(n) : null;
    if (s === null)
      e.add(i);
    else {
      var o = new hv(t.get(n), t.get(n + 1));
      e.add(o);
    }
  }
};
gr.prototype.interfaces_ = function() {
  return [];
};
gr.prototype.getClass = function() {
  return gr;
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
  return [Hr];
};
so.prototype.getClass = function() {
  return so;
};
var oo = function() {
  this._index = null;
  var t = arguments[0];
  if (!q(t, qr))
    throw new Et("Argument must be Polygonal");
  this._index = new Pi(t);
}, Cc = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
oo.prototype.locate = function(t) {
  var e = new Mn(t), n = new ao(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
oo.prototype.interfaces_ = function() {
  return [ro];
};
oo.prototype.getClass = function() {
  return oo;
};
Cc.SegmentVisitor.get = function() {
  return ao;
};
Cc.IntervalIndexedGeometry.get = function() {
  return Pi;
};
Object.defineProperties(oo, Cc);
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
  return [Hr];
};
ao.prototype.getClass = function() {
  return ao;
};
var Pi = function() {
  this._index = new gr();
  var t = arguments[0];
  this.init(t);
};
Pi.prototype.init = function(t) {
  for (var e = this, n = Qt.getLines(t), i = n.iterator(); i.hasNext(); ) {
    var s = i.next(), o = s.getCoordinates();
    e.addLine(o);
  }
};
Pi.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var i = new Y(t[n - 1], t[n]), s = Math.min(i.p0.y, i.p1.y), o = Math.max(i.p0.y, i.p1.y);
    e._index.insert(s, o, i);
  }
};
Pi.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new so();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2];
    this._index.query(i, s, o);
  }
};
Pi.prototype.interfaces_ = function() {
  return [];
};
Pi.prototype.getClass = function() {
  return Pi;
};
var bo = function(r) {
  function t() {
    if (r.call(this), this._parentGeom = null, this._lineEdgeMap = new Ig(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new yn(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], i = nn.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = i, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2];
      this._argIndex = s, this._parentGeom = o, this._boundaryNodeRule = a, o !== null && this.add(o);
    }
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, i) {
    var s = this._nodes.addNode(i), o = s.getLabel(), a = 1, u = C.NONE;
    u = o.getLocation(n, T.ON), u === C.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    o.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], i = arguments[1];
      return this.computeSelfNodes(n, i, !1);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new ie(s, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof or || this._parentGeom instanceof Ut || this._parentGeom instanceof nr, h = o || !c;
      return l.computeIntersections(this._edges, u, h), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(n) {
    for (var i = this._edges.iterator(); i.hasNext(); ) {
      var s = i.next();
      s.eiList.addSplitEdges(n);
    }
  }, t.prototype.computeEdgeIntersections = function(n, i, s) {
    var o = new ie(i, s, !0);
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
    if (arguments[0] instanceof De) {
      var n = arguments[0], i = n.getCoordinate();
      this.insertPoint(this._argIndex, i, C.INTERIOR);
    } else if (arguments[0] instanceof E) {
      var s = arguments[0];
      this.insertPoint(this._argIndex, s, C.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var i = this;
    this.addPolygonRing(n.getExteriorRing(), C.EXTERIOR, C.INTERIOR);
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var o = n.getInteriorRingN(s);
      i.addPolygonRing(o, C.INTERIOR, C.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var i = n.getCoordinates();
    this.insertPoint(this._argIndex, i[0], C.BOUNDARY), this.insertPoint(this._argIndex, i[i.length - 1], C.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var i = $.removeRepeatedPoints(n.getCoordinates());
    if (i.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = i[0], null;
    var s = new fu(i, new ut(this._argIndex, C.INTERIOR));
    this._lineEdgeMap.put(n, s), this.insertEdge(s), J.isTrue(i.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, i[0]), this.insertBoundaryPoint(this._argIndex, i[i.length - 1]);
  }, t.prototype.getInvalidPoint = function() {
    return this._invalidPoint;
  }, t.prototype.getBoundaryPoints = function() {
    for (var n = this.getBoundaryNodes(), i = new Array(n.size()).fill(null), s = 0, o = n.iterator(); o.hasNext(); ) {
      var a = o.next();
      i[s++] = a.getCoordinate().copy();
    }
    return i;
  }, t.prototype.getBoundaryNodes = function() {
    return this._boundaryNodes === null && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes;
  }, t.prototype.addSelfIntersectionNode = function(n, i, s) {
    if (this.isBoundaryNode(n, i))
      return null;
    s === C.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, i) : this.insertPoint(n, i, s);
  }, t.prototype.addPolygonRing = function(n, i, s) {
    if (n.isEmpty())
      return null;
    var o = $.removeRepeatedPoints(n.getCoordinates());
    if (o.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = o[0], null;
    var a = i, u = s;
    G.isCCW(o) && (a = s, u = i);
    var l = new fu(o, new ut(this._argIndex, C.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, o[0], C.BOUNDARY);
  }, t.prototype.insertPoint = function(n, i, s) {
    var o = this._nodes.addNode(i), a = o.getLabel();
    a === null ? o._label = new ut(n, s) : a.setLocation(n, s);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new lv();
  }, t.prototype.addSelfIntersectionNodes = function(n) {
    for (var i = this, s = this._edges.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getLabel().getLocation(n), u = o.eiList.iterator(); u.hasNext(); ) {
        var l = u.next();
        i.addSelfIntersectionNode(n, l.coord, a);
      }
  }, t.prototype.add = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      if (n.isEmpty())
        return null;
      if (n instanceof nr && (this._useBoundaryDeterminationRule = !1), n instanceof Ut)
        this.addPolygon(n);
      else if (n instanceof Rt)
        this.addLineString(n);
      else if (n instanceof De)
        this.addPoint(n);
      else if (n instanceof $s)
        this.addCollection(n);
      else if (n instanceof Ii)
        this.addCollection(n);
      else if (n instanceof nr)
        this.addCollection(n);
      else if (n instanceof ve)
        this.addCollection(n);
      else
        throw new Error(n.getClass().getName());
    } else
      return r.prototype.add.apply(this, arguments);
  }, t.prototype.addCollection = function(n) {
    for (var i = this, s = 0; s < n.getNumGeometries(); s++) {
      var o = n.getGeometryN(s);
      i.add(o);
    }
  }, t.prototype.locate = function(n) {
    return q(this._parentGeom, qr) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new oo(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
  }, t.prototype.findEdge = function() {
    if (arguments.length === 1) {
      var n = arguments[0];
      return this._lineEdgeMap.get(n);
    } else
      return r.prototype.findEdge.apply(this, arguments);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.determineBoundary = function(n, i) {
    return n.isInBoundary(i) ? C.BOUNDARY : C.INTERIOR;
  }, t;
}(St), uo = function() {
  if (this._li = new Ai(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new bo(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], i = nn.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new bo(0, e, i), this._arg[1] = new bo(1, n, i);
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
var yi = function() {
};
yi.prototype.interfaces_ = function() {
  return [];
};
yi.prototype.getClass = function() {
  return yi;
};
yi.map = function() {
  if (arguments[0] instanceof W && q(arguments[1], yi.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new D(), i = 0; i < t.getNumGeometries(); i++) {
      var s = e.map(t.getGeometryN(i));
      s !== null && n.add(s);
    }
    return t.getFactory().buildGeometry(n);
  } else if (q(arguments[0], Bt) && q(arguments[1], yi.MapOp)) {
    for (var o = arguments[0], a = arguments[1], u = new D(), l = o.iterator(); l.hasNext(); ) {
      var c = l.next(), h = a.map(c);
      h !== null && u.add(h);
    }
    return u;
  }
};
yi.MapOp = function() {
};
var Z = function(r) {
  function t() {
    var e = arguments[0], n = arguments[1];
    r.call(this, e, n), this._ptLocator = new yn(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new mn(), this._resultPolyList = new D(), this._resultLineList = new D(), this._resultPointList = new D(), this._graph = new St(new Tg()), this._geomFact = e.getFactory();
  }
  return r && (t.__proto__ = r), t.prototype = Object.create(r && r.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(n) {
    var i = this._edgeList.findEqualEdge(n);
    if (i !== null) {
      var s = i.getLabel(), o = n.getLabel();
      i.isPointwiseEqual(n) || (o = new ut(n.getLabel()), o.flip());
      var a = i.getDepth();
      a.isNull() && a.add(s), a.add(o), s.merge(o);
    } else
      this._edgeList.add(n);
  }, t.prototype.getGraph = function() {
    return this._graph;
  }, t.prototype.cancelDuplicateResultEdges = function() {
    for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext(); ) {
      var i = n.next(), s = i.getSym();
      i.isInResult() && s.isInResult() && (i.setInResult(!1), s.setInResult(!1));
    }
  }, t.prototype.isCoveredByLA = function(n) {
    return !!(this.isCovered(n, this._resultLineList) || this.isCovered(n, this._resultPolyList));
  }, t.prototype.computeGeometry = function(n, i, s, o) {
    var a = new D();
    return a.addAll(n), a.addAll(i), a.addAll(s), a.isEmpty() ? t.createEmptyResult(o, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next();
      i.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(n, i) {
    for (var s = this, o = i.iterator(); o.hasNext(); ) {
      var a = o.next(), u = s._ptLocator.locate(n, a);
      if (u !== C.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var n = new D(), i = this._edgeList.iterator(); i.hasNext(); ) {
      var s = i.next();
      s.isCollapsed() && (i.remove(), n.add(s.getCollapsedEdge()));
    }
    this._edgeList.addAll(n);
  }, t.prototype.updateNodeLabelling = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var i = n.next(), s = i.getEdges().getLabel();
      i.getLabel().merge(s);
    }
  }, t.prototype.getResultGeometry = function(n) {
    return this.computeOverlay(n), this._resultGeom;
  }, t.prototype.insertUniqueEdges = function(n) {
    for (var i = this, s = n.iterator(); s.hasNext(); ) {
      var o = s.next();
      i.insertUniqueEdge(o);
    }
  }, t.prototype.computeOverlay = function(n) {
    this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
    var i = new D();
    this._arg[0].computeSplitEdges(i), this._arg[1].computeSplitEdges(i), this.insertUniqueEdges(i), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), bi.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var s = new Fe(this._geomFact);
    s.add(this._graph), this._resultPolyList = s.getPolygons();
    var o = new Un(this, this._geomFact, this._ptLocator);
    this._resultLineList = o.build(n);
    var a = new cs(this, this._geomFact, this._ptLocator);
    this._resultPointList = a.build(n), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, n);
  }, t.prototype.labelIncompleteNode = function(n, i) {
    var s = this._ptLocator.locate(n.getCoordinate(), this._arg[i].getGeometry());
    n.getLabel().setLocation(i, s);
  }, t.prototype.copyPoints = function(n) {
    for (var i = this, s = this._arg[n].getNodeIterator(); s.hasNext(); ) {
      var o = s.next(), a = i._graph.addNode(o.getCoordinate());
      a.setLabel(n, o.getLabel().getLocation(n));
    }
  }, t.prototype.findResultAreaEdges = function(n) {
    for (var i = this._graph.getEdgeEnds().iterator(); i.hasNext(); ) {
      var s = i.next(), o = s.getLabel();
      o.isArea() && !s.isInteriorAreaEdge() && t.isResultOfOp(o.getLocation(0, T.RIGHT), o.getLocation(1, T.RIGHT), n) && s.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var n = this._edgeList.iterator(); n.hasNext(); ) {
      var i = n.next(), s = i.getLabel(), o = i.getDepth();
      if (!o.isNull()) {
        o.normalize();
        for (var a = 0; a < 2; a++)
          !s.isNull(a) && s.isArea() && !o.isNull(a) && (o.getDelta(a) === 0 ? s.toLine(a) : (J.isTrue(!o.isNull(a, T.LEFT), "depth of LEFT side has not been initialized"), s.setLocation(a, T.LEFT, o.getLocation(a, T.LEFT)), J.isTrue(!o.isNull(a, T.RIGHT), "depth of RIGHT side has not been initialized"), s.setLocation(a, T.RIGHT, o.getLocation(a, T.RIGHT))));
      }
    }
  }, t.prototype.computeLabelling = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var s = i.next();
      s.getEdges().computeLabelling(n._arg);
    }
    this.mergeSymLabels(), this.updateNodeLabelling();
  }, t.prototype.labelIncompleteNodes = function() {
    for (var n = this, i = this._graph.getNodes().iterator(); i.hasNext(); ) {
      var s = i.next(), o = s.getLabel();
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
Z.overlayOp = function(r, t, e) {
  var n = new Z(r, t), i = n.getResultGeometry(e);
  return i;
};
Z.intersection = function(r, t) {
  if (r.isEmpty() || t.isEmpty())
    return Z.createEmptyResult(Z.INTERSECTION, r, t, r.getFactory());
  if (r.isGeometryCollection()) {
    var e = t;
    return ls.map(r, {
      interfaces_: function() {
        return [yi.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), Ce.overlayOp(r, t, Z.INTERSECTION);
};
Z.symDifference = function(r, t) {
  if (r.isEmpty() || t.isEmpty()) {
    if (r.isEmpty() && t.isEmpty())
      return Z.createEmptyResult(Z.SYMDIFFERENCE, r, t, r.getFactory());
    if (r.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return r.copy();
  }
  return r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), Ce.overlayOp(r, t, Z.SYMDIFFERENCE);
};
Z.resultDimension = function(r, t, e) {
  var n = t.getDimension(), i = e.getDimension(), s = -1;
  switch (r) {
    case Z.INTERSECTION:
      s = Math.min(n, i);
      break;
    case Z.UNION:
      s = Math.max(n, i);
      break;
    case Z.DIFFERENCE:
      s = n;
      break;
    case Z.SYMDIFFERENCE:
      s = Math.max(n, i);
      break;
  }
  return s;
};
Z.createEmptyResult = function(r, t, e, n) {
  var i = null;
  switch (Z.resultDimension(r, t, e)) {
    case -1:
      i = n.createGeometryCollection(new Array(0).fill(null));
      break;
    case 0:
      i = n.createPoint();
      break;
    case 1:
      i = n.createLineString();
      break;
    case 2:
      i = n.createPolygon();
      break;
  }
  return i;
};
Z.difference = function(r, t) {
  return r.isEmpty() ? Z.createEmptyResult(Z.DIFFERENCE, r, t, r.getFactory()) : t.isEmpty() ? r.copy() : (r.checkNotGeometryCollection(r), r.checkNotGeometryCollection(t), Ce.overlayOp(r, t, Z.DIFFERENCE));
};
Z.isResultOfOp = function() {
  if (arguments.length === 2) {
    var r = arguments[0], t = arguments[1], e = r.getLocation(0), n = r.getLocation(1);
    return Z.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2];
    switch (i === C.BOUNDARY && (i = C.INTERIOR), s === C.BOUNDARY && (s = C.INTERIOR), o) {
      case Z.INTERSECTION:
        return i === C.INTERIOR && s === C.INTERIOR;
      case Z.UNION:
        return i === C.INTERIOR || s === C.INTERIOR;
      case Z.DIFFERENCE:
        return i === C.INTERIOR && s !== C.INTERIOR;
      case Z.SYMDIFFERENCE:
        return i === C.INTERIOR && s !== C.INTERIOR || i !== C.INTERIOR && s === C.INTERIOR;
    }
    return !1;
  }
};
Z.INTERSECTION = 1;
Z.UNION = 2;
Z.DIFFERENCE = 3;
Z.SYMDIFFERENCE = 4;
var Yr = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new yn(), this._seg = new Y();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
Yr.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var i = e._linework.getGeometryN(n), s = i.getCoordinateSequence(), o = 0; o < s.size() - 1; o++) {
      s.getCoordinate(o, e._seg.p0), s.getCoordinate(o + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
Yr.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? C.BOUNDARY : this._ptLocator.locate(t, this._g);
};
Yr.prototype.extractLinework = function(t) {
  var e = new lo();
  t.apply(e);
  var n = e.getLinework(), i = Q.toLineStringArray(n);
  return t.getFactory().createMultiLineString(i);
};
Yr.prototype.interfaces_ = function() {
  return [];
};
Yr.prototype.getClass = function() {
  return Yr;
};
var lo = function() {
  this._linework = null, this._linework = new D();
};
lo.prototype.getLinework = function() {
  return this._linework;
};
lo.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Ut) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var i = 0; i < n.getNumInteriorRing(); i++)
      e._linework.add(n.getInteriorRingN(i));
  }
};
lo.prototype.interfaces_ = function() {
  return [kn];
};
lo.prototype.getClass = function() {
  return lo;
};
var Ti = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Ti.prototype.extractPoints = function(t, e, n) {
  for (var i = this, s = t.getCoordinates(), o = 0; o < s.length - 1; o++)
    i.computeOffsetPoints(s[o], s[o + 1], e, n);
};
Ti.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Ti.prototype.getPoints = function(t) {
  for (var e = this, n = new D(), i = Qt.getLines(this._g), s = i.iterator(); s.hasNext(); ) {
    var o = s.next();
    e.extractPoints(o, t, n);
  }
  return n;
};
Ti.prototype.computeOffsetPoints = function(t, e, n, i) {
  var s = e.x - t.x, o = e.y - t.y, a = Math.sqrt(s * s + o * o), u = n * s / a, l = n * o / a, c = (e.x + t.x) / 2, h = (e.y + t.y) / 2;
  if (this._doLeft) {
    var f = new E(c - l, h + u);
    i.add(f);
  }
  if (this._doRight) {
    var g = new E(c + l, h - u);
    i.add(g);
  }
};
Ti.prototype.interfaces_ = function() {
  return [];
};
Ti.prototype.getClass = function() {
  return Ti;
};
var He = function r() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = r.TOLERANCE, this._testCoords = new D();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = r.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new Yr(this._geom[0], this._boundaryDistanceTolerance), new Yr(this._geom[1], this._boundaryDistanceTolerance), new Yr(this._geom[2], this._boundaryDistanceTolerance)];
}, Vg = { TOLERANCE: { configurable: !0 } };
He.prototype.reportResult = function(t, e, n) {
  ee.out.println("Overlay result invalid - A:" + C.toLocationSymbol(e[0]) + " B:" + C.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + C.toLocationSymbol(e[2]));
};
He.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
He.prototype.checkValid = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0; n < this._testCoords.size(); n++) {
      var i = t._testCoords.get(n);
      if (!t.checkValid(e, i))
        return t._invalidLocation = i, !1;
    }
    return !0;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return this._location[0] = this._locFinder[0].getLocation(o), this._location[1] = this._locFinder[1].getLocation(o), this._location[2] = this._locFinder[2].getLocation(o), He.hasLocation(this._location, C.BOUNDARY) ? !0 : this.isValidResult(s, this._location);
  }
};
He.prototype.addTestPts = function(t) {
  var e = new Ti(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
He.prototype.isValidResult = function(t, e) {
  var n = Z.isResultOfOp(e[0], e[1], t), i = e[2] === C.INTERIOR, s = !(n ^ i);
  return s || this.reportResult(t, e, n), s;
};
He.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
He.prototype.interfaces_ = function() {
  return [];
};
He.prototype.getClass = function() {
  return He;
};
He.hasLocation = function(t, e) {
  for (var n = 0; n < 3; n++)
    if (t[n] === e)
      return !0;
  return !1;
};
He.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(Tt.computeSizeBasedSnapTolerance(t), Tt.computeSizeBasedSnapTolerance(e));
};
He.isValid = function(t, e, n, i) {
  var s = new He(t, e, i);
  return s.isValid(n);
};
Vg.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(He, Vg);
var Ve = function r(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = r.extractFactory(t), this._inputGeoms = t;
};
Ve.prototype.extractElements = function(t, e) {
  var n = this;
  if (t === null)
    return null;
  for (var i = 0; i < t.getNumGeometries(); i++) {
    var s = t.getGeometryN(i);
    n._skipEmpty && s.isEmpty() || e.add(s);
  }
};
Ve.prototype.combine = function() {
  for (var t = this, e = new D(), n = this._inputGeoms.iterator(); n.hasNext(); ) {
    var i = n.next();
    t.extractElements(i, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
Ve.prototype.interfaces_ = function() {
  return [];
};
Ve.prototype.getClass = function() {
  return Ve;
};
Ve.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Ve(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var n = arguments[0], i = arguments[1], s = new Ve(Ve.createList(n, i));
    return s.combine();
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2], l = new Ve(Ve.createList(o, a, u));
    return l.combine();
  }
};
Ve.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
Ve.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new D();
    return n.add(t), n.add(e), n;
  } else if (arguments.length === 3) {
    var i = arguments[0], s = arguments[1], o = arguments[2], a = new D();
    return a.add(i), a.add(s), a.add(o), a;
  }
};
var Dt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new D());
}, Xg = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
Dt.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new D(), i = t.iterator(); i.hasNext(); ) {
    var s = i.next(), o = null;
    q(s, fn) ? o = e.unionTree(s) : s instanceof W && (o = s), n.add(o);
  }
  return n;
};
Dt.prototype.extractByEnvelope = function(t, e, n) {
  for (var i = new D(), s = 0; s < e.getNumGeometries(); s++) {
    var o = e.getGeometryN(s);
    o.getEnvelopeInternal().intersects(t) ? i.add(o) : n.add(o);
  }
  return this._geomFactory.buildGeometry(i);
};
Dt.prototype.unionOptimized = function(t, e) {
  var n = t.getEnvelopeInternal(), i = e.getEnvelopeInternal();
  if (!n.intersects(i)) {
    var s = Ve.combine(t, e);
    return s;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var o = n.intersection(i);
  return this.unionUsingEnvelopeIntersection(t, e, o);
};
Dt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new Ng(Dt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.insert(n.getEnvelopeInternal(), n);
  }
  this._inputPolys = null;
  var i = t.itemsTree(), s = this.unionTree(i);
  return s;
};
Dt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], i = arguments[2];
    if (i - n <= 1) {
      var s = Dt.getGeometry(e, n);
      return this.unionSafe(s, null);
    } else {
      if (i - n === 2)
        return this.unionSafe(Dt.getGeometry(e, n), Dt.getGeometry(e, n + 1));
      var o = Math.trunc((i + n) / 2), a = this.binaryUnion(e, n, o), u = this.binaryUnion(e, o, i);
      return this.unionSafe(a, u);
    }
  }
};
Dt.prototype.repeatedUnion = function(t) {
  for (var e = null, n = t.iterator(); n.hasNext(); ) {
    var i = n.next();
    e === null ? e = i.copy() : e = e.union(i);
  }
  return e;
};
Dt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
Dt.prototype.unionActual = function(t, e) {
  return Dt.restrictToPolygons(t.union(e));
};
Dt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), n = this.binaryUnion(e);
  return n;
};
Dt.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
  var i = new D(), s = this.extractByEnvelope(n, t, i), o = this.extractByEnvelope(n, e, i), a = this.unionActual(s, o);
  i.add(a);
  var u = Ve.combine(i);
  return u;
};
Dt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), i = n.buffer(0);
    return i;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1], a = s.getFactory(), u = a.createGeometryCollection([s, o]), l = u.buffer(0);
    return l;
  }
};
Dt.prototype.interfaces_ = function() {
  return [];
};
Dt.prototype.getClass = function() {
  return Dt;
};
Dt.restrictToPolygons = function(t) {
  if (q(t, qr))
    return t;
  var e = Ir.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(Q.toPolygonArray(e));
};
Dt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
Dt.union = function(t) {
  var e = new Dt(t);
  return e.union();
};
Xg.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(Dt, Xg);
var du = function() {
};
du.prototype.interfaces_ = function() {
  return [];
};
du.prototype.getClass = function() {
  return du;
};
du.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return Z.createEmptyResult(Z.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), Ce.overlayOp(t, e, Z.UNION);
};
function Di() {
  return new pu();
}
function pu() {
  this.reset();
}
pu.prototype = {
  constructor: pu,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(r) {
    Oh(Va, r, this.t), Oh(this, Va.s, this.s), this.s ? this.t += Va.t : this.s = Va.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Va = new pu();
function Oh(r, t, e) {
  var n = r.s = t + e, i = n - t, s = n - i;
  r.t = t - s + (e - i);
}
var wt = 1e-6, gt = Math.PI, Cr = gt / 2, Ah = gt / 4, br = gt * 2, ci = 180 / gt, wn = gt / 180, me = Math.abs, fv = Math.atan, co = Math.atan2, zt = Math.cos, Vt = Math.sin, vo = Math.sqrt;
function Yg(r) {
  return r > 1 ? 0 : r < -1 ? gt : Math.acos(r);
}
function fs(r) {
  return r > 1 ? Cr : r < -1 ? -Cr : Math.asin(r);
}
function Ao() {
}
function _u(r, t) {
  r && Fh.hasOwnProperty(r.type) && Fh[r.type](r, t);
}
var Dh = {
  Feature: function(r, t) {
    _u(r.geometry, t);
  },
  FeatureCollection: function(r, t) {
    for (var e = r.features, n = -1, i = e.length; ++n < i; )
      _u(e[n].geometry, t);
  }
}, Fh = {
  Sphere: function(r, t) {
    t.sphere();
  },
  Point: function(r, t) {
    r = r.coordinates, t.point(r[0], r[1], r[2]);
  },
  MultiPoint: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      r = e[n], t.point(r[0], r[1], r[2]);
  },
  LineString: function(r, t) {
    Nl(r.coordinates, t, 0);
  },
  MultiLineString: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      Nl(e[n], t, 0);
  },
  Polygon: function(r, t) {
    kh(r.coordinates, t);
  },
  MultiPolygon: function(r, t) {
    for (var e = r.coordinates, n = -1, i = e.length; ++n < i; )
      kh(e[n], t);
  },
  GeometryCollection: function(r, t) {
    for (var e = r.geometries, n = -1, i = e.length; ++n < i; )
      _u(e[n], t);
  }
};
function Nl(r, t, e) {
  var n = -1, i = r.length - e, s;
  for (t.lineStart(); ++n < i; )
    s = r[n], t.point(s[0], s[1], s[2]);
  t.lineEnd();
}
function kh(r, t) {
  var e = -1, n = r.length;
  for (t.polygonStart(); ++e < n; )
    Nl(r[e], t, 1);
  t.polygonEnd();
}
function gv(r, t) {
  r && Dh.hasOwnProperty(r.type) ? Dh[r.type](r, t) : _u(r, t);
}
Di();
Di();
function Ll(r) {
  return [co(r[1], r[0]), fs(r[2])];
}
function ho(r) {
  var t = r[0], e = r[1], n = zt(e);
  return [n * zt(t), n * Vt(t), Vt(e)];
}
function Xa(r, t) {
  return r[0] * t[0] + r[1] * t[1] + r[2] * t[2];
}
function mu(r, t) {
  return [r[1] * t[2] - r[2] * t[1], r[2] * t[0] - r[0] * t[2], r[0] * t[1] - r[1] * t[0]];
}
function el(r, t) {
  r[0] += t[0], r[1] += t[1], r[2] += t[2];
}
function Ya(r, t) {
  return [r[0] * t, r[1] * t, r[2] * t];
}
function bl(r) {
  var t = vo(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
  r[0] /= t, r[1] /= t, r[2] /= t;
}
Di();
function Ug(r, t) {
  function e(n, i) {
    return n = r(n, i), t(n[0], n[1]);
  }
  return r.invert && t.invert && (e.invert = function(n, i) {
    return n = t.invert(n, i), n && r.invert(n[0], n[1]);
  }), e;
}
function Pl(r, t) {
  return [r > gt ? r - br : r < -gt ? r + br : r, t];
}
Pl.invert = Pl;
function dv(r, t, e) {
  return (r %= br) ? t || e ? Ug(Bh(r), zh(t, e)) : Bh(r) : t || e ? zh(t, e) : Pl;
}
function Gh(r) {
  return function(t, e) {
    return t += r, [t > gt ? t - br : t < -gt ? t + br : t, e];
  };
}
function Bh(r) {
  var t = Gh(r);
  return t.invert = Gh(-r), t;
}
function zh(r, t) {
  var e = zt(r), n = Vt(r), i = zt(t), s = Vt(t);
  function o(a, u) {
    var l = zt(u), c = zt(a) * l, h = Vt(a) * l, f = Vt(u), g = f * e + c * n;
    return [
      co(h * i - g * s, c * e - f * n),
      fs(g * i + h * s)
    ];
  }
  return o.invert = function(a, u) {
    var l = zt(u), c = zt(a) * l, h = Vt(a) * l, f = Vt(u), g = f * i - h * s;
    return [
      co(h * i + f * s, c * e + g * n),
      fs(g * e - c * n)
    ];
  }, o;
}
function pv(r, t, e, n, i, s) {
  if (e) {
    var o = zt(t), a = Vt(t), u = n * e;
    i == null ? (i = t + n * br, s = t - u / 2) : (i = Vh(o, i), s = Vh(o, s), (n > 0 ? i < s : i > s) && (i += n * br));
    for (var l, c = i; n > 0 ? c > s : c < s; c -= u)
      l = Ll([o, -a * zt(c), -a * Vt(c)]), r.point(l[0], l[1]);
  }
}
function Vh(r, t) {
  t = ho(t), t[0] -= r, bl(t);
  var e = Yg(-t[1]);
  return ((-t[2] < 0 ? -e : e) + br - wt) % br;
}
function Wg() {
  var r = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      r.push(t = []);
    },
    lineEnd: Ao,
    rejoin: function() {
      r.length > 1 && r.push(r.pop().concat(r.shift()));
    },
    result: function() {
      var e = r;
      return r = [], t = null, e;
    }
  };
}
function _v(r, t, e, n, i, s) {
  var o = r[0], a = r[1], u = t[0], l = t[1], c = 0, h = 1, f = u - o, g = l - a, d;
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
    if (d = i - o, !(!f && d < 0)) {
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
          return c > 0 && (r[0] = o + c * f, r[1] = a + c * g), h < 1 && (t[0] = o + h * f, t[1] = a + h * g), !0;
        }
      }
    }
  }
}
function Za(r, t) {
  return me(r[0] - t[0]) < wt && me(r[1] - t[1]) < wt;
}
function Ua(r, t, e, n) {
  this.x = r, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function qg(r, t, e, n, i) {
  var s = [], o = [], a, u;
  if (r.forEach(function(d) {
    if (!((p = d.length - 1) <= 0)) {
      var p, _ = d[0], m = d[p], y;
      if (Za(_, m)) {
        for (i.lineStart(), a = 0; a < p; ++a)
          i.point((_ = d[a])[0], _[1]);
        i.lineEnd();
        return;
      }
      s.push(y = new Ua(_, d, null, !0)), o.push(y.o = new Ua(_, null, y, !1)), s.push(y = new Ua(m, d, null, !1)), o.push(y.o = new Ua(m, null, y, !0));
    }
  }), !!s.length) {
    for (o.sort(t), Xh(s), Xh(o), a = 0, u = o.length; a < u; ++a)
      o[a].e = e = !e;
    for (var l = s[0], c, h; ; ) {
      for (var f = l, g = !0; f.v; )
        if ((f = f.n) === l)
          return;
      c = f.z, i.lineStart();
      do {
        if (f.v = f.o.v = !0, f.e) {
          if (g)
            for (a = 0, u = c.length; a < u; ++a)
              i.point((h = c[a])[0], h[1]);
          else
            n(f.x, f.n.x, 1, i);
          f = f.n;
        } else {
          if (g)
            for (c = f.p.z, a = c.length - 1; a >= 0; --a)
              i.point((h = c[a])[0], h[1]);
          else
            n(f.x, f.p.x, -1, i);
          f = f.p;
        }
        f = f.o, c = f.z, g = !g;
      } while (!f.v);
      i.lineEnd();
    }
  }
}
function Xh(r) {
  if (t = r.length) {
    for (var t, e = 0, n = r[0], i; ++e < t; )
      n.n = i = r[e], i.p = n, n = i;
    n.n = i = r[0], i.p = n;
  }
}
function Hg(r, t) {
  return r < t ? -1 : r > t ? 1 : r >= t ? 0 : NaN;
}
function mv(r) {
  return r.length === 1 && (r = yv(r)), {
    left: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var s = n + i >>> 1;
        r(t[s], e) < 0 ? n = s + 1 : i = s;
      }
      return n;
    },
    right: function(t, e, n, i) {
      for (n == null && (n = 0), i == null && (i = t.length); n < i; ) {
        var s = n + i >>> 1;
        r(t[s], e) > 0 ? i = s : n = s + 1;
      }
      return n;
    }
  };
}
function yv(r) {
  return function(t, e) {
    return Hg(r(t), e);
  };
}
mv(Hg);
function jg(r) {
  for (var t = r.length, e, n = -1, i = 0, s, o; ++n < t; )
    i += r[n].length;
  for (s = new Array(i); --t >= 0; )
    for (o = r[t], e = o.length; --e >= 0; )
      s[--i] = o[e];
  return s;
}
var Do = 1e9, Wa = -Do;
function vv(r, t, e, n) {
  function i(l, c) {
    return r <= l && l <= e && t <= c && c <= n;
  }
  function s(l, c, h, f) {
    var g = 0, d = 0;
    if (l == null || (g = o(l, h)) !== (d = o(c, h)) || u(l, c) < 0 ^ h > 0)
      do
        f.point(g === 0 || g === 3 ? r : e, g > 1 ? n : t);
      while ((g = (g + h + 4) % 4) !== d);
    else
      f.point(c[0], c[1]);
  }
  function o(l, c) {
    return me(l[0] - r) < wt ? c > 0 ? 0 : 3 : me(l[0] - e) < wt ? c > 0 ? 2 : 1 : me(l[1] - t) < wt ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var h = o(l, 1), f = o(c, 1);
    return h !== f ? h - f : h === 0 ? c[1] - l[1] : h === 1 ? l[0] - c[0] : h === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, h = Wg(), f, g, d, p, _, m, y, v, I, x, w, P = {
      point: L,
      lineStart: N,
      lineEnd: B,
      polygonStart: O,
      polygonEnd: V
    };
    function L(A, z) {
      i(A, z) && c.point(A, z);
    }
    function R() {
      for (var A = 0, z = 0, U = g.length; z < U; ++z)
        for (var j = g[z], ot = 1, yt = j.length, kt = j[0], k, Ze, Ie = kt[0], Me = kt[1]; ot < yt; ++ot)
          k = Ie, Ze = Me, kt = j[ot], Ie = kt[0], Me = kt[1], Ze <= n ? Me > n && (Ie - k) * (n - Ze) > (Me - Ze) * (r - k) && ++A : Me <= n && (Ie - k) * (n - Ze) < (Me - Ze) * (r - k) && --A;
      return A;
    }
    function O() {
      c = h, f = [], g = [], w = !0;
    }
    function V() {
      var A = R(), z = w && A, U = (f = jg(f)).length;
      (z || U) && (l.polygonStart(), z && (l.lineStart(), s(null, null, 1, l), l.lineEnd()), U && qg(f, a, A, s, l), l.polygonEnd()), c = l, f = g = d = null;
    }
    function N() {
      P.point = M, g && g.push(d = []), x = !0, I = !1, y = v = NaN;
    }
    function B() {
      f && (M(p, _), m && I && h.rejoin(), f.push(h.result())), P.point = L, I && c.lineEnd();
    }
    function M(A, z) {
      var U = i(A, z);
      if (g && d.push([A, z]), x)
        p = A, _ = z, m = U, x = !1, U && (c.lineStart(), c.point(A, z));
      else if (U && I)
        c.point(A, z);
      else {
        var j = [y = Math.max(Wa, Math.min(Do, y)), v = Math.max(Wa, Math.min(Do, v))], ot = [A = Math.max(Wa, Math.min(Do, A)), z = Math.max(Wa, Math.min(Do, z))];
        _v(j, ot, r, t, e, n) ? (I || (c.lineStart(), c.point(j[0], j[1])), c.point(ot[0], ot[1]), U || c.lineEnd(), w = !1) : U && (c.lineStart(), c.point(A, z), w = !1);
      }
      y = A, v = z, I = U;
    }
    return P;
  };
}
var nl = Di();
function Ev(r, t) {
  var e = t[0], n = t[1], i = [Vt(e), -zt(e), 0], s = 0, o = 0;
  nl.reset();
  for (var a = 0, u = r.length; a < u; ++a)
    if (c = (l = r[a]).length)
      for (var l, c, h = l[c - 1], f = h[0], g = h[1] / 2 + Ah, d = Vt(g), p = zt(g), _ = 0; _ < c; ++_, f = y, d = I, p = x, h = m) {
        var m = l[_], y = m[0], v = m[1] / 2 + Ah, I = Vt(v), x = zt(v), w = y - f, P = w >= 0 ? 1 : -1, L = P * w, R = L > gt, O = d * I;
        if (nl.add(co(O * P * Vt(L), p * x + O * zt(L))), s += R ? w + P * br : w, R ^ f >= e ^ y >= e) {
          var V = mu(ho(h), ho(m));
          bl(V);
          var N = mu(i, V);
          bl(N);
          var B = (R ^ w >= 0 ? -1 : 1) * fs(N[2]);
          (n > B || n === B && (V[0] || V[1])) && (o += R ^ w >= 0 ? 1 : -1);
        }
      }
  return (s < -wt || s < wt && nl < -wt) ^ o & 1;
}
Di();
function Yh(r) {
  return r;
}
Di();
Di();
var fo = 1 / 0, yu = fo, ga = -fo, vu = ga, Uh = {
  point: xv,
  lineStart: Ao,
  lineEnd: Ao,
  polygonStart: Ao,
  polygonEnd: Ao,
  result: function() {
    var r = [[fo, yu], [ga, vu]];
    return ga = vu = -(yu = fo = 1 / 0), r;
  }
};
function xv(r, t) {
  r < fo && (fo = r), r > ga && (ga = r), t < yu && (yu = t), t > vu && (vu = t);
}
Di();
function Zg(r, t, e, n) {
  return function(i, s) {
    var o = t(s), a = i.invert(n[0], n[1]), u = Wg(), l = t(u), c = !1, h, f, g, d = {
      point: p,
      lineStart: m,
      lineEnd: y,
      polygonStart: function() {
        d.point = v, d.lineStart = I, d.lineEnd = x, f = [], h = [];
      },
      polygonEnd: function() {
        d.point = p, d.lineStart = m, d.lineEnd = y, f = jg(f);
        var w = Ev(h, a);
        f.length ? (c || (s.polygonStart(), c = !0), qg(f, Iv, w, e, s)) : w && (c || (s.polygonStart(), c = !0), s.lineStart(), e(null, null, 1, s), s.lineEnd()), c && (s.polygonEnd(), c = !1), f = h = null;
      },
      sphere: function() {
        s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd();
      }
    };
    function p(w, P) {
      var L = i(w, P);
      r(w = L[0], P = L[1]) && s.point(w, P);
    }
    function _(w, P) {
      var L = i(w, P);
      o.point(L[0], L[1]);
    }
    function m() {
      d.point = _, o.lineStart();
    }
    function y() {
      d.point = p, o.lineEnd();
    }
    function v(w, P) {
      g.push([w, P]);
      var L = i(w, P);
      l.point(L[0], L[1]);
    }
    function I() {
      l.lineStart(), g = [];
    }
    function x() {
      v(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), P = u.result(), L, R = P.length, O, V, N;
      if (g.pop(), h.push(g), g = null, !!R) {
        if (w & 1) {
          if (V = P[0], (O = V.length - 1) > 0) {
            for (c || (s.polygonStart(), c = !0), s.lineStart(), L = 0; L < O; ++L)
              s.point((N = V[L])[0], N[1]);
            s.lineEnd();
          }
          return;
        }
        R > 1 && w & 2 && P.push(P.pop().concat(P.shift())), f.push(P.filter(Cv));
      }
    }
    return d;
  };
}
function Cv(r) {
  return r.length > 1;
}
function Iv(r, t) {
  return ((r = r.x)[0] < 0 ? r[1] - Cr - wt : Cr - r[1]) - ((t = t.x)[0] < 0 ? t[1] - Cr - wt : Cr - t[1]);
}
const Wh = Zg(
  function() {
    return !0;
  },
  Sv,
  Rv,
  [-gt, -Cr]
);
function Sv(r) {
  var t = NaN, e = NaN, n = NaN, i;
  return {
    lineStart: function() {
      r.lineStart(), i = 1;
    },
    point: function(s, o) {
      var a = s > 0 ? gt : -gt, u = me(s - t);
      me(u - gt) < wt ? (r.point(t, e = (e + o) / 2 > 0 ? Cr : -Cr), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), r.point(s, e), i = 0) : n !== a && u >= gt && (me(t - n) < wt && (t -= n * wt), me(s - a) < wt && (s -= a * wt), e = wv(t, e, s, o), r.point(n, e), r.lineEnd(), r.lineStart(), r.point(a, e), i = 0), r.point(t = s, e = o), n = a;
    },
    lineEnd: function() {
      r.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - i;
    }
  };
}
function wv(r, t, e, n) {
  var i, s, o = Vt(r - e);
  return me(o) > wt ? fv((Vt(t) * (s = zt(n)) * Vt(e) - Vt(n) * (i = zt(t)) * Vt(r)) / (i * s * o)) : (t + n) / 2;
}
function Rv(r, t, e, n) {
  var i;
  if (r == null)
    i = e * Cr, n.point(-gt, i), n.point(0, i), n.point(gt, i), n.point(gt, 0), n.point(gt, -i), n.point(0, -i), n.point(-gt, -i), n.point(-gt, 0), n.point(-gt, i);
  else if (me(r[0] - t[0]) > wt) {
    var s = r[0] < t[0] ? gt : -gt;
    i = e * s / 2, n.point(-s, i), n.point(0, i), n.point(s, i);
  } else
    n.point(t[0], t[1]);
}
function Nv(r, t) {
  var e = zt(r), n = e > 0, i = me(e) > wt;
  function s(c, h, f, g) {
    pv(g, r, t, f, c, h);
  }
  function o(c, h) {
    return zt(c) * zt(h) > e;
  }
  function a(c) {
    var h, f, g, d, p;
    return {
      lineStart: function() {
        d = g = !1, p = 1;
      },
      point: function(_, m) {
        var y = [_, m], v, I = o(_, m), x = n ? I ? 0 : l(_, m) : I ? l(_ + (_ < 0 ? gt : -gt), m) : 0;
        if (!h && (d = g = I) && c.lineStart(), I !== g && (v = u(h, y), (!v || Za(h, v) || Za(y, v)) && (y[0] += wt, y[1] += wt, I = o(y[0], y[1]))), I !== g)
          p = 0, I ? (c.lineStart(), v = u(y, h), c.point(v[0], v[1])) : (v = u(h, y), c.point(v[0], v[1]), c.lineEnd()), h = v;
        else if (i && h && n ^ I) {
          var w;
          !(x & f) && (w = u(y, h, !0)) && (p = 0, n ? (c.lineStart(), c.point(w[0][0], w[0][1]), c.point(w[1][0], w[1][1]), c.lineEnd()) : (c.point(w[1][0], w[1][1]), c.lineEnd(), c.lineStart(), c.point(w[0][0], w[0][1])));
        }
        I && (!h || !Za(h, y)) && c.point(y[0], y[1]), h = y, g = I, f = x;
      },
      lineEnd: function() {
        g && c.lineEnd(), h = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return p | (d && g) << 1;
      }
    };
  }
  function u(c, h, f) {
    var g = ho(c), d = ho(h), p = [1, 0, 0], _ = mu(g, d), m = Xa(_, _), y = _[0], v = m - y * y;
    if (!v)
      return !f && c;
    var I = e * m / v, x = -e * y / v, w = mu(p, _), P = Ya(p, I), L = Ya(_, x);
    el(P, L);
    var R = w, O = Xa(P, R), V = Xa(R, R), N = O * O - V * (Xa(P, P) - 1);
    if (!(N < 0)) {
      var B = vo(N), M = Ya(R, (-O - B) / V);
      if (el(M, P), M = Ll(M), !f)
        return M;
      var A = c[0], z = h[0], U = c[1], j = h[1], ot;
      z < A && (ot = A, A = z, z = ot);
      var yt = z - A, kt = me(yt - gt) < wt, k = kt || yt < wt;
      if (!kt && j < U && (ot = U, U = j, j = ot), k ? kt ? U + j > 0 ^ M[1] < (me(M[0] - A) < wt ? U : j) : U <= M[1] && M[1] <= j : yt > gt ^ (A <= M[0] && M[0] <= z)) {
        var Ze = Ya(R, (-O + B) / V);
        return el(Ze, P), [M, Ll(Ze)];
      }
    }
  }
  function l(c, h) {
    var f = n ? r : gt - r, g = 0;
    return c < -f ? g |= 1 : c > f && (g |= 2), h < -f ? g |= 4 : h > f && (g |= 8), g;
  }
  return Zg(o, a, s, n ? [0, -r] : [-gt, r - gt]);
}
function Kg(r) {
  return function(t) {
    var e = new Tl();
    for (var n in r)
      e[n] = r[n];
    return e.stream = t, e;
  };
}
function Tl() {
}
Tl.prototype = {
  constructor: Tl,
  point: function(r, t) {
    this.stream.point(r, t);
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
function Jg(r, t, e) {
  var n = t[1][0] - t[0][0], i = t[1][1] - t[0][1], s = r.clipExtent && r.clipExtent();
  r.scale(150).translate([0, 0]), s != null && r.clipExtent(null), gv(e, r.stream(Uh));
  var o = Uh.result(), a = Math.min(n / (o[1][0] - o[0][0]), i / (o[1][1] - o[0][1])), u = +t[0][0] + (n - a * (o[1][0] + o[0][0])) / 2, l = +t[0][1] + (i - a * (o[1][1] + o[0][1])) / 2;
  return s != null && r.clipExtent(s), r.scale(a * 150).translate([u, l]);
}
function Lv(r, t, e) {
  return Jg(r, [[0, 0], t], e);
}
var qh = 16, bv = zt(30 * wn);
function Hh(r, t) {
  return +t ? Tv(r, t) : Pv(r);
}
function Pv(r) {
  return Kg({
    point: function(t, e) {
      t = r(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function Tv(r, t) {
  function e(n, i, s, o, a, u, l, c, h, f, g, d, p, _) {
    var m = l - n, y = c - i, v = m * m + y * y;
    if (v > 4 * t && p--) {
      var I = o + f, x = a + g, w = u + d, P = vo(I * I + x * x + w * w), L = fs(w /= P), R = me(me(w) - 1) < wt || me(s - h) < wt ? (s + h) / 2 : co(x, I), O = r(R, L), V = O[0], N = O[1], B = V - n, M = N - i, A = y * B - m * M;
      (A * A / v > t || me((m * B + y * M) / v - 0.5) > 0.3 || o * f + a * g + u * d < bv) && (e(n, i, s, o, a, u, V, N, R, I /= P, x /= P, w, p, _), _.point(V, N), e(V, N, R, I, x, w, l, c, h, f, g, d, p, _));
    }
  }
  return function(n) {
    var i, s, o, a, u, l, c, h, f, g, d, p, _ = {
      point: m,
      lineStart: y,
      lineEnd: I,
      polygonStart: function() {
        n.polygonStart(), _.lineStart = x;
      },
      polygonEnd: function() {
        n.polygonEnd(), _.lineStart = y;
      }
    };
    function m(L, R) {
      L = r(L, R), n.point(L[0], L[1]);
    }
    function y() {
      h = NaN, _.point = v, n.lineStart();
    }
    function v(L, R) {
      var O = ho([L, R]), V = r(L, R);
      e(h, f, c, g, d, p, h = V[0], f = V[1], c = L, g = O[0], d = O[1], p = O[2], qh, n), n.point(h, f);
    }
    function I() {
      _.point = m, n.lineEnd();
    }
    function x() {
      y(), _.point = w, _.lineEnd = P;
    }
    function w(L, R) {
      v(i = L, R), s = h, o = f, a = g, u = d, l = p, _.point = v;
    }
    function P() {
      e(h, f, c, g, d, p, s, o, i, a, u, l, qh, n), _.lineEnd = I, I();
    }
    return _;
  };
}
var Mv = Kg({
  point: function(r, t) {
    this.stream.point(r * wn, t * wn);
  }
});
function Ov(r) {
  return Av(function() {
    return r;
  })();
}
function Av(r) {
  var t, e = 150, n = 480, i = 250, s, o, a = 0, u = 0, l = 0, c = 0, h = 0, f, g, d = null, p = Wh, _ = null, m, y, v, I = Yh, x = 0.5, w = Hh(V, x), P, L;
  function R(M) {
    return M = g(M[0] * wn, M[1] * wn), [M[0] * e + s, o - M[1] * e];
  }
  function O(M) {
    return M = g.invert((M[0] - s) / e, (o - M[1]) / e), M && [M[0] * ci, M[1] * ci];
  }
  function V(M, A) {
    return M = t(M, A), [M[0] * e + s, o - M[1] * e];
  }
  R.stream = function(M) {
    return P && L === M ? P : P = Mv(p(f, w(I(L = M))));
  }, R.clipAngle = function(M) {
    return arguments.length ? (p = +M ? Nv(d = M * wn, 6 * wn) : (d = null, Wh), B()) : d * ci;
  }, R.clipExtent = function(M) {
    return arguments.length ? (I = M == null ? (_ = m = y = v = null, Yh) : vv(_ = +M[0][0], m = +M[0][1], y = +M[1][0], v = +M[1][1]), B()) : _ == null ? null : [[_, m], [y, v]];
  }, R.scale = function(M) {
    return arguments.length ? (e = +M, N()) : e;
  }, R.translate = function(M) {
    return arguments.length ? (n = +M[0], i = +M[1], N()) : [n, i];
  }, R.center = function(M) {
    return arguments.length ? (a = M[0] % 360 * wn, u = M[1] % 360 * wn, N()) : [a * ci, u * ci];
  }, R.rotate = function(M) {
    return arguments.length ? (l = M[0] % 360 * wn, c = M[1] % 360 * wn, h = M.length > 2 ? M[2] % 360 * wn : 0, N()) : [l * ci, c * ci, h * ci];
  }, R.precision = function(M) {
    return arguments.length ? (w = Hh(V, x = M * M), B()) : vo(x);
  }, R.fitExtent = function(M, A) {
    return Jg(R, M, A);
  }, R.fitSize = function(M, A) {
    return Lv(R, M, A);
  };
  function N() {
    g = Ug(f = dv(l, c, h), t);
    var M = t(a, u);
    return s = n - M[0] * e, o = i + M[1] * e, B();
  }
  function B() {
    return P = L = null, R;
  }
  return function() {
    return t = r.apply(this, arguments), R.invert = t.invert && O, N();
  };
}
function Qg(r) {
  return function(t, e) {
    var n = zt(t), i = zt(e), s = r(n * i);
    return [
      s * i * Vt(t),
      s * Vt(e)
    ];
  };
}
function $g(r) {
  return function(t, e) {
    var n = vo(t * t + e * e), i = r(n), s = Vt(i), o = zt(i);
    return [
      co(t * s, n * o),
      fs(n && e * s / n)
    ];
  };
}
var Dv = Qg(function(r) {
  return vo(2 / (1 + r));
});
Dv.invert = $g(function(r) {
  return 2 * fs(r / 2);
});
var td = Qg(function(r) {
  return (r = Yg(r)) && r / Vt(r);
});
td.invert = $g(function(r) {
  return r;
});
function Fv() {
  return Ov(td).scale(79.4188).clipAngle(180 - 1e-3);
}
function jh(r, t) {
  return [r, t];
}
jh.invert = jh;
function kv(r, t, e) {
  e = e || {};
  var n = e.units || "kilometers", i = e.steps || 8;
  if (!r)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof i != "number")
    throw new Error("steps must be an number");
  if (t === void 0)
    throw new Error("radius is required");
  if (i <= 0)
    throw new Error("steps must be greater than 0");
  var s = [];
  switch (r.type) {
    case "GeometryCollection":
      return pg(r, function(o) {
        var a = Ka(o, t, n, i);
        a && s.push(a);
      }), Sl(s);
    case "FeatureCollection":
      return Lh(r, function(o) {
        var a = Ka(o, t, n, i);
        a && Lh(a, function(u) {
          u && s.push(u);
        });
      }), Sl(s);
  }
  return Ka(r, t, n, i);
}
function Ka(r, t, e, n) {
  var i = r.properties || {}, s = r.type === "Feature" ? r.geometry : r;
  if (s.type === "GeometryCollection") {
    var o = [];
    return pg(r, function(p) {
      var _ = Ka(p, t, e, n);
      _ && o.push(_);
    }), Sl(o);
  }
  var a = Gv(s), u = {
    type: s.type,
    coordinates: nd(s.coordinates, a)
  }, l = new dc(), c = l.read(u), h = qy(Hy(t, e), "meters"), f = $t.bufferOp(c, h, n), g = new wg();
  if (f = g.write(f), !ed(f.coordinates)) {
    var d = {
      type: f.type,
      coordinates: rd(f.coordinates, a)
    };
    return Nu(d, i);
  }
}
function ed(r) {
  return Array.isArray(r[0]) ? ed(r[0]) : isNaN(r[0]);
}
function nd(r, t) {
  return typeof r[0] != "object" ? t(r) : r.map(function(e) {
    return nd(e, t);
  });
}
function rd(r, t) {
  return typeof r[0] != "object" ? t.invert(r) : r.map(function(e) {
    return rd(e, t);
  });
}
function Gv(r) {
  var t = jy(r).geometry.coordinates, e = [-t[0], -t[1]];
  return Fv().rotate(e).scale(Be);
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
function Bv(r, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
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
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return e.label++, { value: l[1], done: !1 };
          case 5:
            e.label++, i = l[1], l = [0];
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
        l = t.call(r, e);
      } catch (c) {
        l = [6, c], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Mi = (
  /** @class */
  function() {
    function r(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return r;
  }()
);
function zv(r, t) {
  return r > t ? 1 : r < t ? -1 : 0;
}
function hi(r, t, e) {
  for (var n = new Mi(null, null), i = n, s = n; ; ) {
    var o = e(r, t.key);
    if (o < 0) {
      if (t.left === null)
        break;
      if (e(r, t.left.key) < 0) {
        var a = t.left;
        if (t.left = a.right, a.right = t, t = a, t.left === null)
          break;
      }
      s.left = t, s = t, t = t.left;
    } else if (o > 0) {
      if (t.right === null)
        break;
      if (e(r, t.right.key) > 0) {
        var a = t.right;
        if (t.right = a.left, a.left = t, t = a, t.right === null)
          break;
      }
      i.right = t, i = t, t = t.right;
    } else
      break;
  }
  return i.right = t.left, s.left = t.right, t.left = n.right, t.right = n.left, t;
}
function rl(r, t, e, n) {
  var i = new Mi(r, t);
  if (e === null)
    return i.left = i.right = null, i;
  e = hi(r, e, n);
  var s = n(r, e.key);
  return s < 0 ? (i.left = e.left, i.right = e, e.left = null) : s >= 0 && (i.right = e.right, i.left = e, e.right = null), i;
}
function Zh(r, t, e) {
  var n = null, i = null;
  if (t) {
    t = hi(r, t, e);
    var s = e(t.key, r);
    s === 0 ? (n = t.left, i = t.right) : s < 0 ? (i = t.right, t.right = null, n = t) : (n = t.left, t.left = null, i = t);
  }
  return { left: n, right: i };
}
function Vv(r, t, e) {
  return t === null ? r : (r === null || (t = hi(r.key, t, e), t.left = r), t);
}
function Ml(r, t, e, n, i) {
  if (r) {
    n("" + t + (e ? "└── " : "├── ") + i(r) + `
`);
    var s = t + (e ? "    " : "│   ");
    r.left && Ml(r.left, s, !1, n, i), r.right && Ml(r.right, s, !0, n, i);
  }
}
var Ic = (
  /** @class */
  function() {
    function r(t) {
      t === void 0 && (t = zv), this._root = null, this._size = 0, this._comparator = t;
    }
    return r.prototype.insert = function(t, e) {
      return this._size++, this._root = rl(t, e, this._root, this._comparator);
    }, r.prototype.add = function(t, e) {
      var n = new Mi(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var i = this._comparator, s = hi(t, this._root, i), o = i(t, s.key);
      return o === 0 ? this._root = s : (o < 0 ? (n.left = s.left, n.right = s, s.left = null) : o > 0 && (n.right = s.right, n.left = s, s.right = null), this._size++, this._root = n), this._root;
    }, r.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, r.prototype._remove = function(t, e, n) {
      var i;
      if (e === null)
        return null;
      e = hi(t, e, n);
      var s = n(t, e.key);
      return s === 0 ? (e.left === null ? i = e.right : (i = hi(t, e.left, n), i.right = e.right), this._size--, i) : e;
    }, r.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = hi(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
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
      return this._root && (this._root = hi(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
    }, r.prototype.contains = function(t) {
      for (var e = this._root, n = this._comparator; e; ) {
        var i = n(t, e.key);
        if (i === 0)
          return !0;
        i < 0 ? e = e.left : e = e.right;
      }
      return !1;
    }, r.prototype.forEach = function(t, e) {
      for (var n = this._root, i = [], s = !1; !s; )
        n !== null ? (i.push(n), n = n.left) : i.length !== 0 ? (n = i.pop(), t.call(e, n), n = n.right) : s = !0;
      return this;
    }, r.prototype.range = function(t, e, n, i) {
      for (var s = [], o = this._comparator, a = this._root, u; s.length !== 0 || a; )
        if (a)
          s.push(a), a = a.left;
        else {
          if (a = s.pop(), u = o(a.key, e), u > 0)
            break;
          if (o(a.key, t) >= 0 && n.call(i, a))
            return this;
          a = a.right;
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
      for (var e = this._root, n = !1, i = 0, s = []; !n; )
        if (e)
          s.push(e), e = e.left;
        else if (s.length > 0) {
          if (e = s.pop(), i === t)
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
        var s = i(t.key, e.key);
        if (s === 0)
          break;
        s < 0 ? (n = e, e = e.left) : e = e.right;
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
        var s = i(t.key, e.key);
        if (s === 0)
          break;
        s < 0 ? e = e.left : (n = e, e = e.right);
      }
      return n;
    }, r.prototype.clear = function() {
      return this._root = null, this._size = 0, this;
    }, r.prototype.toList = function() {
      return Yv(this._root);
    }, r.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var i = t.length, s = this._comparator;
      if (n && Dl(t, e, 0, i - 1, s), this._root === null)
        this._root = Ol(t, e, 0, i), this._size = i;
      else {
        var o = Uv(this.toList(), Xv(t, e), s);
        i = this._size + i, this._root = Al({ head: o }, 0, i);
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
      return Ml(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, r.prototype.update = function(t, e, n) {
      var i = this._comparator, s = Zh(t, this._root, i), o = s.left, a = s.right;
      i(t, e) < 0 ? a = rl(e, n, a, i) : o = rl(e, n, o, i), this._root = Vv(o, a, i);
    }, r.prototype.split = function(t) {
      return Zh(t, this._root, this._comparator);
    }, r.prototype[Symbol.iterator] = function() {
      var t;
      return Bv(this, function(e) {
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
    }, r;
  }()
);
function Ol(r, t, e, n) {
  var i = n - e;
  if (i > 0) {
    var s = e + Math.floor(i / 2), o = r[s], a = t[s], u = new Mi(o, a);
    return u.left = Ol(r, t, e, s), u.right = Ol(r, t, s + 1, n), u;
  }
  return null;
}
function Xv(r, t) {
  for (var e = new Mi(null, null), n = e, i = 0; i < r.length; i++)
    n = n.next = new Mi(r[i], t[i]);
  return n.next = null, e.next;
}
function Yv(r) {
  for (var t = r, e = [], n = !1, i = new Mi(null, null), s = i; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = s = s.next = e.pop(), t = t.right) : n = !0;
  return s.next = null, i.next;
}
function Al(r, t, e) {
  var n = e - t;
  if (n > 0) {
    var i = t + Math.floor(n / 2), s = Al(r, t, i), o = r.head;
    return o.left = s, r.head = r.head.next, o.right = Al(r, i + 1, e), o;
  }
  return null;
}
function Uv(r, t, e) {
  for (var n = new Mi(null, null), i = n, s = r, o = t; s !== null && o !== null; )
    e(s.key, o.key) < 0 ? (i.next = s, s = s.next) : (i.next = o, o = o.next), i = i.next;
  return s !== null ? i.next = s : o !== null && (i.next = o), n.next;
}
function Dl(r, t, e, n, i) {
  if (!(e >= n)) {
    for (var s = r[e + n >> 1], o = e - 1, a = n + 1; ; ) {
      do
        o++;
      while (i(r[o], s) < 0);
      do
        a--;
      while (i(r[a], s) > 0);
      if (o >= a)
        break;
      var u = r[o];
      r[o] = r[a], r[a] = u, u = t[o], t[o] = t[a], t[a] = u;
    }
    Dl(r, t, e, a, i), Dl(r, t, a + 1, n, i);
  }
}
function Hn(r, t) {
  if (!(r instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kh(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function je(r, t, e) {
  return t && Kh(r.prototype, t), e && Kh(r, e), r;
}
var Po = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Fl = function(t, e) {
  if (e.ur.x < t.ll.x || t.ur.x < e.ll.x || e.ur.y < t.ll.y || t.ur.y < e.ll.y)
    return null;
  var n = t.ll.x < e.ll.x ? e.ll.x : t.ll.x, i = t.ur.x < e.ur.x ? t.ur.x : e.ur.x, s = t.ll.y < e.ll.y ? e.ll.y : t.ll.y, o = t.ur.y < e.ur.y ? t.ur.y : e.ur.y;
  return {
    ll: {
      x: n,
      y: s
    },
    ur: {
      x: i,
      y: o
    }
  };
}, pi = Number.EPSILON;
pi === void 0 && (pi = Math.pow(2, -52));
var Wv = pi * pi, kl = function(t, e) {
  if (-pi < t && t < pi && -pi < e && e < pi)
    return 0;
  var n = t - e;
  return n * n < Wv * t * e ? 0 : t < e ? -1 : 1;
}, qv = /* @__PURE__ */ function() {
  function r() {
    Hn(this, r), this.reset();
  }
  return je(r, [{
    key: "reset",
    value: function() {
      this.xRounder = new Jh(), this.yRounder = new Jh();
    }
  }, {
    key: "round",
    value: function(e, n) {
      return {
        x: this.xRounder.round(e),
        y: this.yRounder.round(n)
      };
    }
  }]), r;
}(), Jh = /* @__PURE__ */ function() {
  function r() {
    Hn(this, r), this.tree = new Ic(), this.round(0);
  }
  return je(r, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), i = this.tree.prev(n);
      if (i !== null && kl(n.key, i.key) === 0)
        return this.tree.remove(e), i.key;
      var s = this.tree.next(n);
      return s !== null && kl(n.key, s.key) === 0 ? (this.tree.remove(e), s.key) : e;
    }
  }]), r;
}(), da = new qv(), Go = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, id = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, Qh = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, o = Go(i, s);
  return kl(o, 0);
}, Eu = function(t) {
  return Math.sqrt(id(t, t));
}, Hv = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Go(s, i) / Eu(s) / Eu(i);
}, jv = function(t, e, n) {
  var i = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return id(s, i) / Eu(s) / Eu(i);
}, $h = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, tf = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, Zv = function(t, e, n, i) {
  if (e.x === 0)
    return tf(n, i, t.x);
  if (i.x === 0)
    return tf(t, e, n.x);
  if (e.y === 0)
    return $h(n, i, t.y);
  if (i.y === 0)
    return $h(t, e, n.y);
  var s = Go(e, i);
  if (s == 0)
    return null;
  var o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = Go(o, e) / s, u = Go(o, i) / s, l = t.x + u * e.x, c = n.x + a * i.x, h = t.y + u * e.y, f = n.y + a * i.y, g = (l + c) / 2, d = (h + f) / 2;
  return {
    x: g,
    y: d
  };
}, vr = /* @__PURE__ */ function() {
  je(r, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var i = r.comparePoints(e.point, n.point);
      return i !== 0 ? i : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : xu.compare(e.segment, n.segment));
    }
    // for ordering points in sweep line order
  }, {
    key: "comparePoints",
    value: function(e, n) {
      return e.x < n.x ? -1 : e.x > n.x ? 1 : e.y < n.y ? -1 : e.y > n.y ? 1 : 0;
    }
    // Warning: 'point' input will be modified and re-used (for performance)
  }]);
  function r(t, e) {
    Hn(this, r), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return je(r, [{
    key: "link",
    value: function(e) {
      if (e.point === this.point)
        throw new Error("Tried to link already linked events");
      for (var n = e.point.events, i = 0, s = n.length; i < s; i++) {
        var o = n[i];
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
        var i = this.point.events[n];
        if (i.segment.consumedBy === void 0)
          for (var s = n + 1; s < e; s++) {
            var o = this.point.events[s];
            o.consumedBy === void 0 && i.otherSE.point.events === o.otherSE.point.events && i.segment.consume(o.segment);
          }
      }
    }
  }, {
    key: "getAvailableLinkedEvents",
    value: function() {
      for (var e = [], n = 0, i = this.point.events.length; n < i; n++) {
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
      var n = this, i = /* @__PURE__ */ new Map(), s = function(a) {
        var u = a.otherSE;
        i.set(a, {
          sine: Hv(n.point, e.point, u.point),
          cosine: jv(n.point, e.point, u.point)
        });
      };
      return function(o, a) {
        i.has(o) || s(o), i.has(a) || s(a);
        var u = i.get(o), l = u.sine, c = u.cosine, h = i.get(a), f = h.sine, g = h.cosine;
        return l >= 0 && f >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && f < 0 ? c < g ? -1 : c > g ? 1 : 0 : f < l ? -1 : f > l ? 1 : 0;
      };
    }
  }]), r;
}(), Kv = 0, xu = /* @__PURE__ */ function() {
  je(r, null, [{
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
      var i = e.leftSE.point.x, s = n.leftSE.point.x, o = e.rightSE.point.x, a = n.rightSE.point.x;
      if (a < i)
        return 1;
      if (o < s)
        return -1;
      var u = e.leftSE.point.y, l = n.leftSE.point.y, c = e.rightSE.point.y, h = n.rightSE.point.y;
      if (i < s) {
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
      if (i > s) {
        if (u < l && u < h)
          return -1;
        if (u > l && u > h)
          return 1;
        var d = n.comparePoint(e.leftSE.point);
        if (d !== 0)
          return d;
        var p = e.comparePoint(n.rightSE.point);
        return p < 0 ? 1 : p > 0 ? -1 : 1;
      }
      if (u < l)
        return -1;
      if (u > l)
        return 1;
      if (o < a) {
        var _ = n.comparePoint(e.rightSE.point);
        if (_ !== 0)
          return _;
      }
      if (o > a) {
        var m = e.comparePoint(n.rightSE.point);
        if (m < 0)
          return 1;
        if (m > 0)
          return -1;
      }
      if (o !== a) {
        var y = c - u, v = o - i, I = h - l, x = a - s;
        if (y > v && I < x)
          return 1;
        if (y < v && I > x)
          return -1;
      }
      return o > a ? 1 : o < a || c < h ? -1 : c > h ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function r(t, e, n, i) {
    Hn(this, r), this.id = ++Kv, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = i;
  }
  return je(r, [{
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
      var n = this.leftSE.point, i = this.rightSE.point, s = this.vector();
      if (n.x === i.x)
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
      var n = this.bbox(), i = e.bbox(), s = Fl(n, i);
      if (s === null)
        return null;
      var o = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = Po(n, u) && this.comparePoint(u) === 0, h = Po(i, o) && e.comparePoint(o) === 0, f = Po(n, l) && this.comparePoint(l) === 0, g = Po(i, a) && e.comparePoint(a) === 0;
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
      var d = Zv(o, this.vector(), u, e.vector());
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
      var n = [], i = e.events !== void 0, s = new vr(e, !0), o = new vr(e, !1), a = this.rightSE;
      this.replaceRightSE(o), n.push(o), n.push(s);
      var u = new r(s, a, this.rings.slice(), this.windings.slice());
      return vr.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), vr.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), i && (s.checkForConsuming(), o.checkForConsuming()), n;
    }
    /* Swap which event is left and right */
  }, {
    key: "swapEvents",
    value: function() {
      var e = this.rightSE;
      this.rightSE = this.leftSE, this.leftSE = e, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
      for (var n = 0, i = this.windings.length; n < i; n++)
        this.windings[n] *= -1;
    }
    /* Consume another segment. We take their rings under our wing
     * and mark them as consumed. Use for perfectly overlapping segments */
  }, {
    key: "consume",
    value: function(e) {
      for (var n = this, i = e; n.consumedBy; )
        n = n.consumedBy;
      for (; i.consumedBy; )
        i = i.consumedBy;
      var s = r.compare(n, i);
      if (s !== 0) {
        if (s > 0) {
          var o = n;
          n = i, i = o;
        }
        if (n.prev === i) {
          var a = n;
          n = i, i = a;
        }
        for (var u = 0, l = i.rings.length; u < l; u++) {
          var c = i.rings[u], h = i.windings[u], f = n.rings.indexOf(c);
          f === -1 ? (n.rings.push(c), n.windings.push(h)) : n.windings[f] += h;
        }
        i.rings = null, i.windings = null, i.consumedBy = n, i.leftSE.consumedBy = n.leftSE, i.rightSE.consumedBy = n.rightSE;
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
      for (var n = this._afterState.rings, i = this._afterState.windings, s = this._afterState.multiPolys, o = 0, a = this.rings.length; o < a; o++) {
        var u = this.rings[o], l = this.windings[o], c = n.indexOf(u);
        c === -1 ? (n.push(u), i.push(l)) : i[c] += l;
      }
      for (var h = [], f = [], g = 0, d = n.length; g < d; g++)
        if (i[g] !== 0) {
          var p = n[g], _ = p.poly;
          if (f.indexOf(_) === -1)
            if (p.isExterior)
              h.push(_);
            else {
              f.indexOf(_) === -1 && f.push(_);
              var m = h.indexOf(p.poly);
              m !== -1 && h.splice(m, 1);
            }
        }
      for (var y = 0, v = h.length; y < v; y++) {
        var I = h[y].multiPoly;
        s.indexOf(I) === -1 && s.push(I);
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
      switch ($n.type) {
        case "union": {
          var i = e.length === 0, s = n.length === 0;
          this._isInResult = i !== s;
          break;
        }
        case "intersection": {
          var o, a;
          e.length < n.length ? (o = e.length, a = n.length) : (o = n.length, a = e.length), this._isInResult = a === $n.numMultiPolys && o < a;
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
          throw new Error("Unrecognized operation type found ".concat($n.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, i) {
      var s, o, a, u = vr.comparePoints(e, n);
      if (u < 0)
        s = e, o = n, a = 1;
      else if (u > 0)
        s = n, o = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new vr(s, !0), c = new vr(o, !1);
      return new r(l, c, [i], [a]);
    }
  }]), r;
}(), ef = /* @__PURE__ */ function() {
  function r(t, e, n) {
    if (Hn(this, r), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var i = da.round(t[0][0], t[0][1]);
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
    for (var s = i, o = 1, a = t.length; o < a; o++) {
      if (typeof t[o][0] != "number" || typeof t[o][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      var u = da.round(t[o][0], t[o][1]);
      u.x === s.x && u.y === s.y || (this.segments.push(xu.fromRing(s, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), s = u);
    }
    (i.x !== s.x || i.y !== s.y) && this.segments.push(xu.fromRing(s, i, this));
  }
  return je(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.segments.length; n < i; n++) {
        var s = this.segments[n];
        e.push(s.leftSE), e.push(s.rightSE);
      }
      return e;
    }
  }]), r;
}(), Jv = /* @__PURE__ */ function() {
  function r(t, e) {
    if (Hn(this, r), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new ef(t[0], this, !0), this.bbox = {
      ll: {
        x: this.exteriorRing.bbox.ll.x,
        y: this.exteriorRing.bbox.ll.y
      },
      ur: {
        x: this.exteriorRing.bbox.ur.x,
        y: this.exteriorRing.bbox.ur.y
      }
    }, this.interiorRings = [];
    for (var n = 1, i = t.length; n < i; n++) {
      var s = new ef(t[n], this, !1);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.interiorRings.push(s);
    }
    this.multiPoly = e;
  }
  return je(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), n = 0, i = this.interiorRings.length; n < i; n++)
        for (var s = this.interiorRings[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), r;
}(), nf = /* @__PURE__ */ function() {
  function r(t, e) {
    if (Hn(this, r), !Array.isArray(t))
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
    for (var n = 0, i = t.length; n < i; n++) {
      var s = new Jv(t[n], this);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.polys.push(s);
    }
    this.isSubject = e;
  }
  return je(r, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++)
        for (var s = this.polys[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), r;
}(), Qv = /* @__PURE__ */ function() {
  je(r, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var n = [], i = 0, s = e.length; i < s; i++) {
        var o = e[i];
        if (!(!o.isInResult() || o.ringOut)) {
          for (var a = null, u = o.leftSE, l = o.rightSE, c = [u], h = u.point, f = []; a = u, u = l, c.push(u), u.point !== h; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var d = c[0].point, p = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(d.x, ",") + " ".concat(d.y, "]. Last matching segment found ends at") + " [".concat(p.x, ", ").concat(p.y, "]."));
              }
              if (g.length === 1) {
                l = g[0].otherSE;
                break;
              }
              for (var _ = null, m = 0, y = f.length; m < y; m++)
                if (f[m].point === u.point) {
                  _ = m;
                  break;
                }
              if (_ !== null) {
                var v = f.splice(_)[0], I = c.splice(v.index);
                I.unshift(I[0].otherSE), n.push(new r(I.reverse()));
                continue;
              }
              f.push({
                index: c.length,
                point: u.point
              });
              var x = u.getLeftmostComparator(a);
              l = g.sort(x)[0].otherSE;
              break;
            }
          n.push(new r(c));
        }
      }
      return n;
    }
  }]);
  function r(t) {
    Hn(this, r), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return je(r, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], i = 1, s = this.events.length - 1; i < s; i++) {
        var o = this.events[i].point, a = this.events[i + 1].point;
        Qh(o, e, a) !== 0 && (n.push(o), e = o);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      Qh(u, e, l) === 0 && n.shift(), n.push(n[0]);
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
      for (var e = this.events[0], n = 1, i = this.events.length; n < i; n++) {
        var s = this.events[n];
        vr.compare(e, s) > 0 && (e = s);
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
  }]), r;
}(), rf = /* @__PURE__ */ function() {
  function r(t) {
    Hn(this, r), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return je(r, [{
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
      for (var n = 0, i = this.interiorRings.length; n < i; n++) {
        var s = this.interiorRings[n].getGeom();
        s !== null && e.push(s);
      }
      return e;
    }
  }]), r;
}(), $v = /* @__PURE__ */ function() {
  function r(t) {
    Hn(this, r), this.rings = t, this.polys = this._composePolys(t);
  }
  return je(r, [{
    key: "getGeom",
    value: function() {
      for (var e = [], n = 0, i = this.polys.length; n < i; n++) {
        var s = this.polys[n].getGeom();
        s !== null && e.push(s);
      }
      return e;
    }
  }, {
    key: "_composePolys",
    value: function(e) {
      for (var n = [], i = 0, s = e.length; i < s; i++) {
        var o = e[i];
        if (!o.poly)
          if (o.isExteriorRing())
            n.push(new rf(o));
          else {
            var a = o.enclosingRing();
            a.poly || n.push(new rf(a)), a.poly.addInterior(o);
          }
      }
      return n;
    }
  }]), r;
}(), t0 = /* @__PURE__ */ function() {
  function r(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xu.compare;
    Hn(this, r), this.queue = t, this.tree = new Ic(e), this.segments = [];
  }
  return je(r, [{
    key: "process",
    value: function(e) {
      var n = e.segment, i = [];
      if (e.consumedBy)
        return e.isLeft ? this.queue.remove(e.otherSE) : this.tree.remove(n), i;
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
              i.push(f[g]);
        }
        var p = null;
        if (l) {
          var _ = l.getIntersection(n);
          if (_ !== null && (n.isAnEndpoint(_) || (p = _), !l.isAnEndpoint(_)))
            for (var m = this._splitSafely(l, _), y = 0, v = m.length; y < v; y++)
              i.push(m[y]);
        }
        if (c !== null || p !== null) {
          var I = null;
          if (c === null)
            I = p;
          else if (p === null)
            I = c;
          else {
            var x = vr.comparePoints(c, p);
            I = x <= 0 ? c : p;
          }
          this.queue.remove(n.rightSE), i.push(n.rightSE);
          for (var w = n.split(I), P = 0, L = w.length; P < L; P++)
            i.push(w[P]);
        }
        i.length > 0 ? (this.tree.remove(n), i.push(e)) : (this.segments.push(n), n.prev = u);
      } else {
        if (u && l) {
          var R = u.getIntersection(l);
          if (R !== null) {
            if (!u.isAnEndpoint(R))
              for (var O = this._splitSafely(u, R), V = 0, N = O.length; V < N; V++)
                i.push(O[V]);
            if (!l.isAnEndpoint(R))
              for (var B = this._splitSafely(l, R), M = 0, A = B.length; M < A; M++)
                i.push(B[M]);
          }
        }
        this.tree.remove(n);
      }
      return i;
    }
    /* Safely split a segment that is currently in the datastructures
     * IE - a segment other than the one that is currently being processed. */
  }, {
    key: "_splitSafely",
    value: function(e, n) {
      this.tree.remove(e);
      var i = e.rightSE;
      this.queue.remove(i);
      var s = e.split(n);
      return s.push(i), e.consumedBy === void 0 && this.tree.insert(e), s;
    }
  }]), r;
}(), sf = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, e0 = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, n0 = /* @__PURE__ */ function() {
  function r() {
    Hn(this, r);
  }
  return je(r, [{
    key: "run",
    value: function(e, n, i) {
      $n.type = e, da.reset();
      for (var s = [new nf(n, !0)], o = 0, a = i.length; o < a; o++)
        s.push(new nf(i[o], !1));
      if ($n.numMultiPolys = s.length, $n.type === "difference")
        for (var u = s[0], l = 1; l < s.length; )
          Fl(s[l].bbox, u.bbox) !== null ? l++ : s.splice(l, 1);
      if ($n.type === "intersection") {
        for (var c = 0, h = s.length; c < h; c++)
          for (var f = s[c], g = c + 1, d = s.length; g < d; g++)
            if (Fl(f.bbox, s[g].bbox) === null)
              return [];
      }
      for (var p = new Ic(vr.compare), _ = 0, m = s.length; _ < m; _++)
        for (var y = s[_].getSweepEvents(), v = 0, I = y.length; v < I; v++)
          if (p.insert(y[v]), p.size > sf)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var x = new t0(p), w = p.size, P = p.pop(); P; ) {
        var L = P.key;
        if (p.size === w) {
          var R = L.segment;
          throw new Error("Unable to pop() ".concat(L.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(L.point.x, ", ").concat(L.point.y, "] from segment #").concat(R.id, " ") + "[".concat(R.leftSE.point.x, ", ").concat(R.leftSE.point.y, "] -> ") + "[".concat(R.rightSE.point.x, ", ").concat(R.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (p.size > sf)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (x.segments.length > e0)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var O = x.process(L), V = 0, N = O.length; V < N; V++) {
          var B = O[V];
          B.consumedBy === void 0 && p.insert(B);
        }
        w = p.size, P = p.pop();
      }
      da.reset();
      var M = Qv.factory(x.segments), A = new $v(M);
      return A.getGeom();
    }
  }]), r;
}(), $n = new n0(), r0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return $n.run("union", t, n);
}, i0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return $n.run("intersection", t, n);
}, s0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return $n.run("xor", t, n);
}, o0 = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return $n.run("difference", t, n);
}, a0 = {
  union: r0,
  intersection: i0,
  xor: s0,
  difference: o0
};
function of(r) {
  return r.type === "Feature" ? r.geometry : r;
}
function u0(r, t) {
  var e = of(r), n = of(t), i = r.properties || {}, s = a0.difference(
    e.coordinates,
    n.coordinates
  );
  return s.length === 0 ? null : s.length === 1 ? Uy(s[0], i) : Wy(s, i);
}
function af(r) {
  let t;
  for (const e of r)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function uf(r, t) {
  const e = u0(
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
    r
  );
  if (!e)
    return;
  e.properties = { isMask: "y" };
  const n = kv(r, 0);
  if (n.geometry.type === "Polygon")
    for (const i of n.geometry.coordinates)
      af(i);
  else
    for (const i of n.geometry.coordinates)
      for (const s of i)
        af(s);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
const lf = "EPSG:4326";
function l0(r) {
  var s;
  const t = r.getProperties(), { isMask: e } = t, n = (s = r.getGeometry()) == null ? void 0 : s.getType(), i = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new lu({
    stroke: e ? void 0 : new uu({
      color: "#3170fe",
      lineDash: [i, i],
      width: i,
      lineCap: "butt"
    }),
    fill: e ? new Jo({
      color: "#00000020"
    }) : void 0,
    image: new oc({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new og({
      backgroundFill: new Jo({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new uu({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function c0(r, t = {}, e = {}, n = l0) {
  let i = -1, s, o, a, u = !1;
  const l = new Ny({
    updateWhileAnimating: !0
  });
  r.addLayer(l);
  const c = new Dy({});
  l.setSource(c), l.setStyle(n), r.on("click", (g) => {
    r.forEachFeatureAtPixel(g.pixel, (d) => {
      const p = d.getId();
      if (p)
        return g.stopPropagation(), o == null || o({ type: "markerClick", id: p }), d;
    });
  }), r.on("pointermove", (g) => {
    const d = r.forEachFeatureAtPixel(g.pixel, (p) => p.getId());
    s !== d && (s && (o == null || o({
      type: "markerMouseLeave",
      id: s
    })), d && (o == null || o({
      type: "markerMouseEnter",
      id: d
    })), r.getTargetElement().style.cursor = d ? "pointer" : u ? "crosshair" : "", s = d);
  });
  function h(g) {
    return g.transform(lf, r.getView().getProjection());
  }
  const f = (g) => {
    o == null || o({
      type: "mapClick",
      coordinates: Mc(g.coordinate, r.getView().getProjection())
    });
  };
  return {
    setEventHandler(g) {
      g ? (o = g, r.on("click", f)) : (o = void 0, r.un("click", f));
    },
    flyTo(g, d) {
      r.getView().animate({
        center: Aa(g, r.getView().getProjection()),
        zoom: d,
        duration: 2e3,
        ...t
      });
    },
    fitBounds(g, d, p) {
      r.getView().fit(fp(g, lf, r.getView().getProjection()), {
        padding: [d, d, d, d],
        maxZoom: p,
        duration: 2e3,
        ...e
      });
    },
    indicateReverse(g) {
      u = g, r.getTargetElement().style.cursor = g ? "crosshair" : "";
    },
    setReverseMarker(g) {
      a ? g ? a.getGeometry().setCoordinates(
        Aa(g, r.getView().getProjection())
      ) : (c.removeFeature(a), a.dispose(), a = void 0) : g && (a = new Fr(
        new zs(Aa(g, r.getView().getProjection()))
      ), a.setProperties({ isReverse: !0 }), c.addFeature(a));
    },
    setMarkers(g, d) {
      function p(_) {
        var m;
        if (_)
          for (const y of _.features) {
            const v = y.geometry.type === "Polygon" ? new nu(y.geometry.coordinates) : y.geometry.type === "MultiPolygon" ? new Rh(y.geometry.coordinates) : null;
            v && c.addFeature(
              new Fr({
                isMask: !!((m = y.properties) != null && m.isMask),
                geometry: h(v)
              })
            );
          }
      }
      if (c.clear(), a && c.addFeature(a), p(), d) {
        let _ = !1;
        if (d.geometry.type === "GeometryCollection") {
          const m = d.geometry.geometries.map(
            (y) => y.type === "Polygon" ? new nu(y.coordinates) : y.type === "MultiPolygon" ? new Rh(y.coordinates) : null
          ).filter((y) => !!y);
          if (m.length > 0)
            c.addFeature(
              new Fr(h(new ky(m)))
            ), _ = !0;
          else
            for (const y of d.geometry.geometries)
              y.type === "LineString" ? (c.addFeature(
                new Fr(
                  h(new au(y.coordinates))
                )
              ), _ = !0) : y.type === "MultiLineString" && c.addFeature(
                new Fr(
                  h(new wh(y.coordinates))
                )
              ), _ = !0;
        }
        if (!_) {
          if (d.geometry.type === "Polygon")
            uf(d, p);
          else if (d.geometry.type === "MultiPolygon")
            uf(d, p);
          else if (d.geometry.type === "LineString") {
            c.addFeature(
              new Fr(
                h(new au(d.geometry.coordinates))
              )
            );
            return;
          } else if (d.geometry.type === "MultiLineString") {
            c.addFeature(
              new Fr(
                h(new wh(d.geometry.coordinates))
              )
            );
            return;
          }
        }
        c.addFeature(new Fr(h(new zs(d.center))));
      }
      for (const _ of g ?? []) {
        if (_ === d)
          continue;
        const m = new Fr(
          new zs(Aa(_.center, r.getView().getProjection()))
        );
        m.setId(_.id), m.setProperties({
          fuzzy: !!_.matching_text,
          tooltip: _.place_name.replace(/,.*/, "")
        }), c.addFeature(m);
      }
    },
    setSelectedMarker(g) {
      var _, m, y;
      const d = c.getFeatures(), p = (_ = d[0]) != null && _.getProperties().isReverse ? 1 : 0;
      i > -1 && ((m = d[i + p]) == null || m.setProperties({
        isSelected: !1
      })), g > -1 && ((y = d[g + p]) == null || y.setProperties({
        isSelected: !0
      })), i = g;
    },
    getCenterAndZoom() {
      const g = r.getView(), d = g.getCenter(), p = g.getZoom();
      if (!(!d || p === void 0))
        return [p, ...Mc(d, g.getProjection())];
    }
  };
}
var Rn, Zi;
class S0 extends Sd {
  constructor(e) {
    const n = document.createElement("div");
    n.className = "ol-search";
    super({
      element: n,
      target: e.target
    });
    Wu(this, Rn, void 0);
    Wu(this, Zi, void 0);
    const {
      // marker,
      // showResultMarkers,
      flyTo: i,
      fullGeometryStyle: s,
      ...o
    } = e;
    Ma(this, Rn, new mm({
      target: n,
      props: {
        flyTo: i === void 0 ? !0 : !!i,
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
      jn(this, Rn).$on(a, (u) => {
        switch (a) {
          case "select":
            this.dispatchEvent(
              new h0(u.detail)
            );
            break;
          case "featuresListed":
            this.dispatchEvent(
              new f0(u.detail)
            );
            break;
          case "featuresMarked":
            this.dispatchEvent(
              new g0(u.detail)
            );
            break;
          case "optionsVisibilityChange":
            this.dispatchEvent(
              new d0(u.detail)
            );
            break;
          case "pick":
            this.dispatchEvent(
              new p0(u.detail)
            );
            break;
          case "queryChange":
            this.dispatchEvent(new _0(u.detail));
            break;
          case "response":
            this.dispatchEvent(
              new m0(
                u.detail.url,
                u.detail.featureCollection
              )
            );
            break;
          case "reverseToggle":
            this.dispatchEvent(new y0(u.detail));
            break;
        }
      });
    Ma(this, Zi, e);
  }
  setMap(e) {
    var n;
    if (super.setMap(e), e) {
      const {
        // marker,
        // showResultMarkers,
        flyTo: i,
        fullGeometryStyle: s
      } = jn(this, Zi), o = c0(
        e,
        typeof i == "boolean" ? void 0 : i,
        typeof i == "boolean" ? void 0 : i,
        // marker,
        // showResultMarkers,
        s
      );
      (n = jn(this, Rn)) == null || n.$set({ mapController: o });
    }
  }
  setOptions(e) {
    var o;
    Ma(this, Zi, e);
    const {
      // marker,
      // showResultMarkers,
      flyTo: n,
      fullGeometryStyle: i,
      ...s
    } = jn(this, Zi);
    (o = jn(this, Rn)) == null || o.$set({
      ...s,
      flyTo: n === void 0 ? !0 : !!n
    });
  }
  setQuery(e, n = !0) {
    var i;
    (i = jn(this, Rn)) == null || i.setQuery(e, n);
  }
  clearMap() {
    var e;
    (e = jn(this, Rn)) == null || e.clearMap();
  }
  clearList() {
    var e;
    (e = jn(this, Rn)) == null || e.clearList();
  }
  focus() {
    var e;
    (e = jn(this, Rn)) == null || e.focus();
  }
  blur() {
    var e;
    (e = jn(this, Rn)) == null || e.blur();
  }
  // onRemove() {
  //   this.#gc?.$destroy();
  // }
}
Rn = new WeakMap(), Zi = new WeakMap();
class h0 extends En {
  constructor(e) {
    super("select");
    In(this, "feature");
    this.feature = e;
  }
}
class f0 extends En {
  constructor(e) {
    super("featuresListed");
    In(this, "features");
    this.features = e;
  }
}
class g0 extends En {
  constructor(e) {
    super("featuresMarked");
    In(this, "features");
    this.features = e;
  }
}
class d0 extends En {
  constructor(e) {
    super("optionsVisibilityChange");
    In(this, "optionsVisible");
    this.optionsVisible = e;
  }
}
class p0 extends En {
  constructor(e) {
    super("pick");
    In(this, "feature");
    this.feature = e;
  }
}
class _0 extends En {
  constructor(e) {
    super("queryChange");
    In(this, "query");
    this.query = e;
  }
}
class m0 extends En {
  constructor(e, n) {
    super("response");
    In(this, "url");
    In(this, "featureCollection");
    this.url = e, this.featureCollection = n;
  }
}
class y0 extends En {
  constructor(e) {
    super("reverseToggle");
    In(this, "reverse");
    this.reverse = e;
  }
}
export {
  f0 as FeaturesListedEvent,
  g0 as FeaturesMarkedEvent,
  S0 as GeocodingControl,
  d0 as OptionsVisibilityChangeEvent,
  p0 as PickEvent,
  _0 as QueryChangeEvent,
  m0 as ResponseEvent,
  y0 as ReverseToggleEvent,
  h0 as SelectEvent,
  c0 as createOpenLayersMapController
};
//# sourceMappingURL=openlayers.js.map
