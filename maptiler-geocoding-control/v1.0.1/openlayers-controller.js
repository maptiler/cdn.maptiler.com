const Kf = {
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
class Jf extends Error {
  /**
   * @param {number} code Error code.
   */
  constructor(t) {
    const e = Kf[t];
    super(e), this.code = t, this.name = "AssertionError", this.message = e;
  }
}
const Zc = Jf;
class Qf {
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
const lo = Qf, Kc = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class $f {
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
const tg = $f;
function eg(i, t, e) {
  let n, r;
  e = e || Ds;
  let s = 0, o = i.length, a = !1;
  for (; s < o; )
    n = s + (o - s >> 1), r = +e(i[n], t), r < 0 ? s = n + 1 : (o = n, a = !r);
  return a ? s : ~s;
}
function Ds(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function Jc(i, t, e) {
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
function ng(i, t, e) {
  for (; t < e; ) {
    const n = i[t];
    i[t] = i[e], i[e] = n, ++t, --e;
  }
}
function gi(i, t) {
  const e = Array.isArray(t) ? t : [t], n = e.length;
  for (let r = 0; r < n; r++)
    i[i.length] = e[r];
}
function fs(i, t) {
  const e = i.length;
  if (e !== t.length)
    return !1;
  for (let n = 0; n < e; n++)
    if (i[n] !== t[n])
      return !1;
  return !0;
}
function ig() {
  return !0;
}
function As() {
}
function rg(i) {
  let t = !1, e, n, r;
  return function() {
    const s = Array.prototype.slice.call(arguments);
    return (!t || this !== r || !fs(s, n)) && (t = !0, r = this, n = s, e = i.apply(this, arguments)), e;
  };
}
function Ru(i) {
  for (const t in i)
    delete i[t];
}
function Fs(i) {
  let t;
  for (t in i)
    return !1;
  return !t;
}
class sg extends tg {
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
    const s = e ? new lo(t) : (
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
        this.removeEventListener(n, As);
      delete o[n];
    }
    return u;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && Ru(this.listeners_);
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
      r !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (n[r] = As, ++this.pendingRemovals_[t]) : (n.splice(r, 1), n.length === 0 && delete this.listeners_[t]));
    }
  }
}
const Qc = sg, cn = {
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
function Kn(i, t, e, n, r) {
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
function Vo(i, t, e, n) {
  return Kn(i, t, e, n, !0);
}
function Jn(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), Ru(i));
}
class fa extends Qc {
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
    ++this.revision_, this.dispatchEvent(cn.CHANGE);
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
        r[s] = Kn(this, t[s], e);
      return r;
    }
    return Kn(
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
        n[s] = Vo(this, t[s], e);
    } else
      n = Vo(
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
      og(n);
    else if (Array.isArray(t))
      for (let r = 0, s = t.length; r < s; ++r)
        this.removeEventListener(t[r], e);
    else
      this.removeEventListener(t, e);
  }
}
fa.prototype.on;
fa.prototype.once;
fa.prototype.un;
function og(i) {
  if (Array.isArray(i))
    for (let t = 0, e = i.length; t < e; ++t)
      Jn(i[t]);
  else
    Jn(
      /** @type {import("./events.js").EventsKey} */
      i
    );
}
const $c = fa;
function ft() {
  throw new Error("Unimplemented abstract method.");
}
let ag = 0;
function Kt(i) {
  return i.ol_uid || (i.ol_uid = String(++ag));
}
class Sl extends lo {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(t, e, n) {
    super(t), this.key = e, this.oldValue = n;
  }
}
class ug extends $c {
  /**
   * @param {Object<string, *>} [values] An object with key-value pairs.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, Kt(this), this.values_ = null, t !== void 0 && this.setProperties(t);
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
    n = `change:${t}`, this.hasListener(n) && this.dispatchEvent(new Sl(n, t, e)), n = Kc.PROPERTYCHANGE, this.hasListener(n) && this.dispatchEvent(new Sl(n, t, e));
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
      delete this.values_[t], Fs(this.values_) && (this.values_ = null), e || this.notify(t, n);
    }
  }
}
const xr = ug, Fr = {
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
}, Rl = {
  LENGTH: "length"
};
class No extends lo {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(t, e, n) {
    super(t), this.element = e, this.index = n;
  }
}
let lg = class extends xr {
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
    return this.get(Rl.LENGTH);
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
      new No(Fr.ADD, e, t)
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
      new No(Fr.REMOVE, e, t)
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
      new No(Fr.REMOVE, r, t)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new No(Fr.ADD, e, t)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(Rl.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(t, e) {
    for (let n = 0, r = this.array_.length; n < r; ++n)
      if (this.array_[n] === t && n !== e)
        throw new Zc(58);
  }
};
const cg = lg;
function Ut(i, t) {
  if (!i)
    throw new Zc(t);
}
class wu extends xr {
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
      new wu(this.hasProperties() ? this.getProperties() : null)
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
    this.geometryChangeKey_ && (Jn(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = Kn(
      t,
      cn.CHANGE,
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
    this.style_ = t, this.styleFunction_ = t ? hg(t) : void 0, this.changed();
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
function hg(i) {
  if (typeof i == "function")
    return i;
  let t;
  return Array.isArray(i) ? t = i : (Ut(typeof /** @type {?} */
  i.getZIndex == "function", 41), t = [
    /** @type {import("./style/Style.js").default} */
    i
  ]), function() {
    return t;
  };
}
const li = wu, zi = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
zi.includes("firefox");
const fg = zi.includes("safari") && !zi.includes("chrom");
fg && (zi.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(zi));
zi.includes("webkit") && zi.includes("edge");
zi.includes("macintosh");
const Nu = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, gg = typeof Image < "u" && Image.prototype.decode;
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
new Array(6);
function ki() {
  return [1, 0, 0, 1, 0, 0];
}
function pg(i, t, e, n, r, s, o) {
  return i[0] = t, i[1] = e, i[2] = n, i[3] = r, i[4] = s, i[5] = o, i;
}
function dg(i, t) {
  return i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i;
}
function Le(i, t) {
  const e = t[0], n = t[1];
  return t[0] = i[0] * e + i[2] * n + i[4], t[1] = i[1] * e + i[3] * n + i[5], t;
}
function _g(i, t, e) {
  return pg(i, t, 0, 0, e, 0, 0);
}
function co(i, t, e, n, r, s, o, a) {
  const u = Math.sin(s), l = Math.cos(s);
  return i[0] = n * l, i[1] = r * u, i[2] = -n * u, i[3] = r * l, i[4] = o * n * l - a * n * u + t, i[5] = o * r * u + a * r * l + e, i;
}
function mg(i, t) {
  const e = yg(t);
  Ut(e !== 0, 32);
  const n = t[0], r = t[1], s = t[2], o = t[3], a = t[4], u = t[5];
  return i[0] = o / e, i[1] = -r / e, i[2] = -s / e, i[3] = n / e, i[4] = (s * u - o * a) / e, i[5] = -(n * u - r * a) / e, i;
}
function yg(i) {
  return i[0] * i[3] - i[1] * i[2];
}
let wl;
function vg(i) {
  const t = "matrix(" + i.join(", ") + ")";
  if (Nu)
    return t;
  const e = wl || (wl = document.createElement("div"));
  return e.style.transform = t, e.style.transform;
}
const Zt = {
  UNKNOWN: 0,
  INTERSECTING: 1,
  ABOVE: 2,
  RIGHT: 4,
  BELOW: 8,
  LEFT: 16
};
function Eg(i, t, e) {
  const n = Math.min.apply(null, i), r = Math.min.apply(null, t), s = Math.max.apply(null, i), o = Math.max.apply(null, t);
  return ar(n, r, s, o, e);
}
function Lu(i, t, e) {
  return e ? (e[0] = i[0] - t, e[1] = i[1] - t, e[2] = i[2] + t, e[3] = i[3] + t, e) : [
    i[0] - t,
    i[1] - t,
    i[2] + t,
    i[3] + t
  ];
}
function xg(i, t) {
  return t ? (t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t) : i.slice();
}
function Cr(i, t, e) {
  let n, r;
  return t < i[0] ? n = i[0] - t : i[2] < t ? n = t - i[2] : n = 0, e < i[1] ? r = i[1] - e : i[3] < e ? r = e - i[3] : r = 0, n * n + r * r;
}
function Cg(i, t) {
  return Pu(i, t[0], t[1]);
}
function kr(i, t) {
  return i[0] <= t[0] && t[2] <= i[2] && i[1] <= t[1] && t[3] <= i[3];
}
function Pu(i, t, e) {
  return i[0] <= t && t <= i[2] && i[1] <= e && e <= i[3];
}
function ja(i, t) {
  const e = i[0], n = i[1], r = i[2], s = i[3], o = t[0], a = t[1];
  let u = Zt.UNKNOWN;
  return o < e ? u = u | Zt.LEFT : o > r && (u = u | Zt.RIGHT), a < n ? u = u | Zt.BELOW : a > s && (u = u | Zt.ABOVE), u === Zt.UNKNOWN && (u = Zt.INTERSECTING), u;
}
function or() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function ar(i, t, e, n, r) {
  return r ? (r[0] = i, r[1] = t, r[2] = e, r[3] = n, r) : [i, t, e, n];
}
function ga(i) {
  return ar(1 / 0, 1 / 0, -1 / 0, -1 / 0, i);
}
function Ig(i, t) {
  const e = i[0], n = i[1];
  return ar(e, n, e, n, t);
}
function th(i, t, e, n, r) {
  const s = ga(r);
  return nh(s, i, t, e, n);
}
function eh(i, t) {
  return i[0] == t[0] && i[2] == t[2] && i[1] == t[1] && i[3] == t[3];
}
function Sg(i, t) {
  return t[0] < i[0] && (i[0] = t[0]), t[2] > i[2] && (i[2] = t[2]), t[1] < i[1] && (i[1] = t[1]), t[3] > i[3] && (i[3] = t[3]), i;
}
function Rg(i, t) {
  t[0] < i[0] && (i[0] = t[0]), t[0] > i[2] && (i[2] = t[0]), t[1] < i[1] && (i[1] = t[1]), t[1] > i[3] && (i[3] = t[1]);
}
function nh(i, t, e, n, r) {
  for (; e < n; e += r)
    wg(i, t[e], t[e + 1]);
  return i;
}
function wg(i, t, e) {
  i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
}
function Ng(i, t) {
  let e;
  return e = t(ih(i)), e || (e = t(rh(i)), e) || (e = t(oh(i)), e) || (e = t(sh(i)), e) ? e : !1;
}
function ih(i) {
  return [i[0], i[1]];
}
function rh(i) {
  return [i[2], i[1]];
}
function Xr(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2];
}
function Lg(i, t, e, n, r) {
  const [s, o, a, u, l, c, h, f] = Pg(
    i,
    t,
    e,
    n
  );
  return ar(
    Math.min(s, a, l, h),
    Math.min(o, u, c, f),
    Math.max(s, a, l, h),
    Math.max(o, u, c, f),
    r
  );
}
function Pg(i, t, e, n) {
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
function ks(i) {
  return i[3] - i[1];
}
function sh(i) {
  return [i[0], i[3]];
}
function oh(i) {
  return [i[2], i[3]];
}
function an(i) {
  return i[2] - i[0];
}
function Nn(i, t) {
  return i[0] <= t[2] && i[2] >= t[0] && i[1] <= t[3] && i[3] >= t[1];
}
function ah(i) {
  return i[2] < i[0] || i[3] < i[1];
}
function Tg(i, t) {
  return t ? (t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t) : i;
}
function Og(i, t, e) {
  let n = !1;
  const r = ja(i, t), s = ja(i, e);
  if (r === Zt.INTERSECTING || s === Zt.INTERSECTING)
    n = !0;
  else {
    const o = i[0], a = i[1], u = i[2], l = i[3], c = t[0], h = t[1], f = e[0], g = e[1], p = (g - h) / (f - c);
    let d, _;
    s & Zt.ABOVE && !(r & Zt.ABOVE) && (d = f - (g - l) / p, n = d >= o && d <= u), !n && s & Zt.RIGHT && !(r & Zt.RIGHT) && (_ = g - (f - u) * p, n = _ >= a && _ <= l), !n && s & Zt.BELOW && !(r & Zt.BELOW) && (d = f - (g - a) / p, n = d >= o && d <= u), !n && s & Zt.LEFT && !(r & Zt.LEFT) && (_ = g - (f - o) * p, n = _ >= a && _ <= l);
  }
  return n;
}
function bg(i, t, e, n) {
  if (ah(i))
    return ga(e);
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
  return Eg(s, o, e);
}
function uh(i, t) {
  const e = t.getExtent(), n = Xr(i);
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const r = an(e), o = Math.floor(
      (n[0] - e[0]) / r
    ) * r;
    i[0] -= o, i[2] -= o;
  }
  return i;
}
function Mg(i, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(i[0]) || !isFinite(i[2]))
      return [[e[0], i[1], e[2], i[3]]];
    uh(i, t);
    const n = an(e);
    if (an(i) > n)
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
const lh = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class Dg {
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
    return this.metersPerUnit_ || lh[this.units_];
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
const ch = Dg, ho = 6378137, Gr = Math.PI * ho, Ag = [-Gr, -Gr, Gr, Gr], Fg = [-180, -85, 180, 85], Lo = ho * Math.log(Math.tan(Math.PI / 2));
class Tr extends ch {
  /**
   * @param {string} code Code.
   */
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: Ag,
      global: !0,
      worldExtent: Fg,
      getPointResolution: function(e, n) {
        return e / Math.cosh(n[1] / ho);
      }
    });
  }
}
const Nl = [
  new Tr("EPSG:3857"),
  new Tr("EPSG:102100"),
  new Tr("EPSG:102113"),
  new Tr("EPSG:900913"),
  new Tr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Tr("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function kg(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e) {
    t[r] = Gr * i[r] / 180;
    let s = ho * Math.log(Math.tan(Math.PI * (+i[r + 1] + 90) / 360));
    s > Lo ? s = Lo : s < -Lo && (s = -Lo), t[r + 1] = s;
  }
  return t;
}
function Gg(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e)
    t[r] = 180 * i[r] / Gr, t[r + 1] = 360 * Math.atan(Math.exp(i[r + 1] / ho)) / Math.PI - 90;
  return t;
}
const Bg = 6378137, Ll = [-180, -90, 180, 90], zg = Math.PI * Bg / 180;
class $i extends ch {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: Ll,
      axisOrientation: e,
      global: !0,
      metersPerUnit: zg,
      worldExtent: Ll
    });
  }
}
const Pl = [
  new $i("CRS:84"),
  new $i("EPSG:4326", "neu"),
  new $i("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new $i("urn:ogc:def:crs:OGC:2:84"),
  new $i("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new $i("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new $i("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let Za = {};
function Vg(i) {
  return Za[i] || Za[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Xg(i, t) {
  Za[i] = t;
}
let zr = {};
function Xo(i, t, e) {
  const n = i.getCode(), r = t.getCode();
  n in zr || (zr[n] = {}), zr[n][r] = e;
}
function Yg(i, t) {
  let e;
  return i in zr && t in zr[i] && (e = zr[i][t]), e;
}
function he(i, t, e) {
  return Math.min(Math.max(i, t), e);
}
function Ug(i, t, e, n, r, s) {
  const o = r - e, a = s - n;
  if (o !== 0 || a !== 0) {
    const u = ((i - e) * o + (t - n) * a) / (o * o + a * a);
    u > 1 ? (e = r, n = s) : u > 0 && (e += o * u, n += a * u);
  }
  return rr(i, t, e, n);
}
function rr(i, t, e, n) {
  const r = e - i, s = n - t;
  return r * r + s * s;
}
function Wg(i) {
  return i * Math.PI / 180;
}
function Ka(i, t) {
  const e = i % t;
  return e * t < 0 ? e + t : e;
}
function ze(i, t, e) {
  return i + e * (t - i);
}
function qg(i, t) {
  const e = Math.pow(10, t);
  return Math.round(i * e) / e;
}
function Hg(i, t) {
  return i[0] += +t[0], i[1] += +t[1], i;
}
function Yo(i, t) {
  let e = !0;
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != t[n]) {
      e = !1;
      break;
    }
  return e;
}
function jg(i, t) {
  const e = Math.cos(t), n = Math.sin(t), r = i[0] * e - i[1] * n, s = i[1] * e + i[0] * n;
  return i[0] = r, i[1] = s, i;
}
function Zg(i, t) {
  if (t.canWrapX()) {
    const e = an(t.getExtent()), n = Kg(i, t, e);
    n && (i[0] -= n * e);
  }
  return i;
}
function Kg(i, t, e) {
  const n = t.getExtent();
  let r = 0;
  return t.canWrapX() && (i[0] < n[0] || i[0] > n[2]) && (e = e || an(n), r = Math.floor(
    (i[0] - n[0]) / e
  )), r;
}
const hh = {
  info: 1,
  warn: 2,
  error: 3,
  none: 4
};
let Jg = hh.info;
function Qg(...i) {
  Jg > hh.warn || console.warn(...i);
}
let Ja = !0;
function fh(i) {
  Ja = !(i === void 0 ? !0 : i);
}
function gh(i, t) {
  if (t !== void 0) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    t = t;
  } else
    t = i.slice();
  return t;
}
function $g(i, t) {
  if (t !== void 0 && i !== t) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    i = t;
  }
  return i;
}
function tp(i) {
  Xg(i.getCode(), i), Xo(i, i, gh);
}
function ep(i) {
  i.forEach(tp);
}
function Yr(i) {
  return typeof i == "string" ? Vg(
    /** @type {string} */
    i
  ) : (
    /** @type {Projection} */
    i || null
  );
}
function Tl(i) {
  ep(i), i.forEach(function(t) {
    i.forEach(function(e) {
      t !== e && Xo(t, e, gh);
    });
  });
}
function np(i, t, e, n) {
  i.forEach(function(r) {
    t.forEach(function(s) {
      Xo(r, s, e), Xo(s, r, n);
    });
  });
}
function Tu(i, t) {
  return i ? typeof i == "string" ? Yr(i) : (
    /** @type {Projection} */
    i
  ) : Yr(t);
}
function Po(i, t) {
  return fh(), ph(
    i,
    "EPSG:4326",
    t !== void 0 ? t : "EPSG:3857"
  );
}
function Ol(i, t) {
  const e = ph(
    i,
    t !== void 0 ? t : "EPSG:3857",
    "EPSG:4326"
  ), n = e[0];
  return (n < -180 || n > 180) && (e[0] = Ka(n + 180, 360) - 180), e;
}
function ip(i, t) {
  const e = i.getCode(), n = t.getCode();
  let r = Yg(e, n);
  return r || (r = $g), r;
}
function Uo(i, t) {
  const e = Yr(i), n = Yr(t);
  return ip(e, n);
}
function ph(i, t, e) {
  return Uo(t, e)(i, void 0, i.length);
}
function rp(i, t, e, n) {
  const r = Uo(t, e);
  return bg(i, r, void 0, n);
}
function bl(i, t) {
  return i;
}
function wi(i, t) {
  return Ja && !Yo(i, [0, 0]) && i[0] >= -180 && i[0] <= 180 && i[1] >= -90 && i[1] <= 90 && (Ja = !1, Qg(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), i;
}
function dh(i, t) {
  return i;
}
function Ns(i, t) {
  return i;
}
function sp() {
  Tl(Nl), Tl(Pl), np(
    Pl,
    Nl,
    kg,
    Gg
  );
}
sp();
function sr(i, t, e, n, r, s) {
  s = s || [];
  let o = 0;
  for (let a = t; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    s[o++] = r[0] * u + r[2] * l + r[4], s[o++] = r[1] * u + r[3] * l + r[5];
  }
  return s && s.length != o && (s.length = o), s;
}
function _h(i, t, e, n, r, s, o) {
  o = o || [];
  const a = Math.cos(r), u = Math.sin(r), l = s[0], c = s[1];
  let h = 0;
  for (let f = t; f < e; f += n) {
    const g = i[f] - l, p = i[f + 1] - c;
    o[h++] = l + g * a - p * u, o[h++] = c + g * u + p * a;
    for (let d = f + 2; d < f + n; ++d)
      o[h++] = i[d];
  }
  return o && o.length != h && (o.length = h), o;
}
function op(i, t, e, n, r, s, o, a) {
  a = a || [];
  const u = o[0], l = o[1];
  let c = 0;
  for (let h = t; h < e; h += n) {
    const f = i[h] - u, g = i[h + 1] - l;
    a[c++] = u + r * f, a[c++] = l + s * g;
    for (let p = h + 2; p < h + n; ++p)
      a[c++] = i[p];
  }
  return a && a.length != c && (a.length = c), a;
}
function ap(i, t, e, n, r, s, o) {
  o = o || [];
  let a = 0;
  for (let u = t; u < e; u += n) {
    o[a++] = i[u] + r, o[a++] = i[u + 1] + s;
    for (let l = u + 2; l < u + n; ++l)
      o[a++] = i[l];
  }
  return o && o.length != a && (o.length = a), o;
}
const Ml = ki();
let up = class extends xr {
  constructor() {
    super(), this.extent_ = or(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = rg(function(t, e, n) {
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
    return ft();
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
    return ft();
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
    return ft();
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
      (isNaN(e[0]) || isNaN(e[1])) && ga(e), this.extentRevision_ = this.getRevision();
    }
    return Tg(this.extent_, t);
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
    ft();
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
    ft();
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
    return ft();
  }
  /**
   * Get the type of this geometry.
   * @abstract
   * @return {Type} Geometry type.
   */
  getType() {
    return ft();
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
    ft();
  }
  /**
   * Test if the geometry and the passed extent intersect.
   * @abstract
   * @param {import("../extent.js").Extent} extent Extent.
   * @return {boolean} `true` if the geometry and the extent intersect.
   */
  intersectsExtent(t) {
    return ft();
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
    ft();
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
    const n = Yr(t), r = n.getUnits() == "tile-pixels" ? function(s, o, a) {
      const u = n.getExtent(), l = n.getWorldExtent(), c = ks(l) / ks(u);
      return co(
        Ml,
        l[0],
        l[3],
        c,
        -c,
        0,
        0,
        0
      ), sr(
        s,
        0,
        s.length,
        a,
        Ml,
        o
      ), Uo(n, e)(
        s,
        o,
        a
      );
    } : Uo(n, e);
    return this.applyTransform(r), this;
  }
};
const mh = up;
class lp extends mh {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates = null;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return th(
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
    return ft();
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
    this.stride = Dl(t), this.layout = t, this.flatCoordinates = e;
  }
  /**
   * @abstract
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   */
  setCoordinates(t, e) {
    ft();
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
      r = Dl(t);
    else {
      for (let s = 0; s < n; ++s) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = /** @type {Array} */
        e[0];
      }
      r = e.length, t = cp(r);
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
      _h(
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
    e === void 0 && (e = t), n || (n = Xr(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      op(
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
      ap(
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
function cp(i) {
  let t;
  return i == 2 ? t = "XY" : i == 3 ? t = "XYZ" : i == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  t;
}
function Dl(i) {
  let t;
  return i == "XY" ? t = 2 : i == "XYZ" || i == "XYM" ? t = 3 : i == "XYZM" && (t = 4), /** @type {number} */
  t;
}
function hp(i, t, e) {
  const n = i.getFlatCoordinates();
  if (!n)
    return null;
  const r = i.getStride();
  return sr(
    n,
    0,
    n.length,
    r,
    t,
    e
  );
}
const Ir = lp;
function Al(i, t, e, n, r, s, o) {
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
        o[g] = ze(
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
function Ou(i, t, e, n, r) {
  let s = i[t], o = i[t + 1];
  for (t += n; t < e; t += n) {
    const a = i[t], u = i[t + 1], l = rr(s, o, a, u);
    l > r && (r = l), s = a, o = u;
  }
  return r;
}
function bu(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = Ou(i, t, a, n, r), t = a;
  }
  return r;
}
function fp(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = bu(i, t, a, n, r), t = a[a.length - 1];
  }
  return r;
}
function Mu(i, t, e, n, r, s, o, a, u, l, c) {
  if (t == e)
    return l;
  let h, f;
  if (r === 0) {
    if (f = rr(
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
    if (Al(
      i,
      g - n,
      g,
      n,
      o,
      a,
      c
    ), f = rr(o, a, c[0], c[1]), f < l) {
      for (l = f, h = 0; h < n; ++h)
        u[h] = c[h];
      u.length = n, g += n;
    } else
      g += n * Math.max(
        (Math.sqrt(f) - Math.sqrt(l)) / r | 0,
        1
      );
  if (s && (Al(
    i,
    e - n,
    t,
    n,
    o,
    a,
    c
  ), f = rr(o, a, c[0], c[1]), f < l)) {
    for (l = f, h = 0; h < n; ++h)
      u[h] = c[h];
    u.length = n;
  }
  return l;
}
function Du(i, t, e, n, r, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = Mu(
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
function gp(i, t, e, n, r, s, o, a, u, l, c) {
  c = c || [NaN, NaN];
  for (let h = 0, f = e.length; h < f; ++h) {
    const g = e[h];
    l = Du(
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
function pp(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r)
    i[t++] = e[r];
  return t;
}
function pa(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r) {
    const o = e[r];
    for (let a = 0; a < n; ++a)
      i[t++] = o[a];
  }
  return t;
}
function Au(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = pa(
      i,
      t,
      e[o],
      n
    );
    r[s++] = u, t = u;
  }
  return r.length = s, r;
}
function dp(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = Au(
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
function Fu(i, t, e, n, r, s, o) {
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
    const p = i[f], d = i[f + 1], _ = i[h], m = i[h + 1];
    for (let y = f + n; y < h; y += n) {
      const E = i[y], I = i[y + 1], S = Ug(E, I, p, d, _, m);
      S > g && (c = y, g = S);
    }
    g > r && (u[(c - t) / n] = 1, f + n < c && l.push(f, c), c + n < h && l.push(c, h));
  }
  for (let h = 0; h < a; ++h)
    u[h] && (s[o++] = i[t + h * n], s[o++] = i[t + h * n + 1]);
  return o;
}
function _p(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = Fu(
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
function tr(i, t) {
  return t * Math.round(i / t);
}
function mp(i, t, e, n, r, s, o) {
  if (t == e)
    return o;
  let a = tr(i[t], r), u = tr(i[t + 1], r);
  t += n, s[o++] = a, s[o++] = u;
  let l, c;
  do
    if (l = tr(i[t], r), c = tr(i[t + 1], r), t += n, t == e)
      return s[o++] = l, s[o++] = c, o;
  while (l == a && c == u);
  for (; t < e; ) {
    const h = tr(i[t], r), f = tr(i[t + 1], r);
    if (t += n, h == l && f == c)
      continue;
    const g = l - a, p = c - u, d = h - a, _ = f - u;
    if (g * _ == p * d && (g < 0 && d < g || g == d || g > 0 && d > g) && (p < 0 && _ < p || p == _ || p > 0 && _ > p)) {
      l = h, c = f;
      continue;
    }
    s[o++] = l, s[o++] = c, a = l, u = c, l = h, c = f;
  }
  return s[o++] = l, s[o++] = c, o;
}
function yh(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u];
    o = mp(
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
function yp(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const c = e[u], h = [];
    o = yh(
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
function Di(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = t; o < e; o += n)
    r[s++] = i.slice(o, o + n);
  return r.length = s, r;
}
function Gs(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = Di(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u;
  }
  return r.length = s, r;
}
function Qa(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = u.length === 1 && u[0] === t ? [] : Gs(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u[u.length - 1];
  }
  return r.length = s, r;
}
function vh(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += o * a - s * u, s = a, o = u;
  }
  return r / 2;
}
function Eh(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += vh(i, t, a, n), t = a;
  }
  return r;
}
function vp(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += Eh(i, t, a, n), t = a[a.length - 1];
  }
  return r;
}
let Ep = class $a extends Ir {
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
    return new $a(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < Cr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ou(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Mu(
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
    return vh(
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
    return Di(
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
    return e.length = Fu(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new $a(e, "XY");
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = pa(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const Fl = Ep;
let xp = class xh extends Ir {
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
    const t = new xh(this.flatCoordinates.slice(), this.layout);
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
    const s = this.flatCoordinates, o = rr(
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
    return Ig(this.flatCoordinates, t);
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
    return Pu(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = pp(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const Vr = xp;
function Cp(i, t, e, n, r) {
  return !Ng(
    r,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !er(
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
function er(i, t, e, n, r, s) {
  let o = 0, a = i[e - n], u = i[e - n + 1];
  for (; t < e; t += n) {
    const l = i[t], c = i[t + 1];
    u <= s ? c > s && (l - a) * (s - u) - (r - a) * (c - u) > 0 && o++ : c <= s && (l - a) * (s - u) - (r - a) * (c - u) < 0 && o--, a = l, u = c;
  }
  return o !== 0;
}
function ku(i, t, e, n, r, s) {
  if (e.length === 0 || !er(i, t, e[0], n, r, s))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (er(i, e[o - 1], e[o], n, r, s))
      return !1;
  return !0;
}
function Ip(i, t, e, n, r, s) {
  if (e.length === 0)
    return !1;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    if (ku(i, t, u, n, r, s))
      return !0;
    t = u[u.length - 1];
  }
  return !1;
}
function Ch(i, t, e, n, r, s, o) {
  let a, u, l, c, h, f, g;
  const p = r[s + 1], d = [];
  for (let y = 0, E = e.length; y < E; ++y) {
    const I = e[y];
    for (c = i[I - n], f = i[I - n + 1], a = t; a < I; a += n)
      h = i[a], g = i[a + 1], (p <= f && g <= p || f <= p && p <= g) && (l = (p - f) / (g - f) * (h - c) + c, d.push(l)), c = h, f = g;
  }
  let _ = NaN, m = -1 / 0;
  for (d.sort(Ds), c = d[0], a = 1, u = d.length; a < u; ++a) {
    h = d[a];
    const y = Math.abs(h - c);
    y > m && (l = (c + h) / 2, ku(i, t, e, n, l, p) && (_ = l, m = y)), c = h;
  }
  return isNaN(_) && (_ = r[s]), o ? (o.push(_, p, m), o) : [_, p, m];
}
function Sp(i, t, e, n, r) {
  let s = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = Ch(
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
function Ih(i, t, e, n, r) {
  let s;
  for (t += n; t < e; t += n)
    if (s = r(
      i.slice(t - n, t),
      i.slice(t, t + n)
    ), s)
      return s;
  return !1;
}
function da(i, t, e, n, r) {
  const s = nh(
    or(),
    i,
    t,
    e,
    n
  );
  return Nn(r, s) ? kr(r, s) || s[0] >= r[0] && s[2] <= r[2] || s[1] >= r[1] && s[3] <= r[3] ? !0 : Ih(
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
      return Og(r, o, a);
    }
  ) : !1;
}
function Rp(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    if (da(i, t, e[s], n, r))
      return !0;
    t = e[s];
  }
  return !1;
}
function wp(i, t, e, n, r) {
  return !!(da(i, t, e, n, r) || er(
    i,
    t,
    e,
    n,
    r[0],
    r[1]
  ) || er(
    i,
    t,
    e,
    n,
    r[0],
    r[3]
  ) || er(
    i,
    t,
    e,
    n,
    r[2],
    r[1]
  ) || er(
    i,
    t,
    e,
    n,
    r[2],
    r[3]
  ));
}
function Sh(i, t, e, n, r) {
  if (!wp(i, t, e[0], n, r))
    return !1;
  if (e.length === 1)
    return !0;
  for (let s = 1, o = e.length; s < o; ++s)
    if (Cp(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ) && !da(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ))
      return !1;
  return !0;
}
function Np(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (Sh(i, t, a, n, r))
      return !0;
    t = a[a.length - 1];
  }
  return !1;
}
function Lp(i, t, e, n) {
  for (; t < e - n; ) {
    for (let r = 0; r < n; ++r) {
      const s = i[t + r];
      i[t + r] = i[e - n + r], i[e - n + r] = s;
    }
    t += n, e -= n;
  }
}
function Rh(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += (a - s) * (u + o), s = a, o = u;
  }
  return r === 0 ? void 0 : r > 0;
}
function wh(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Rh(
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
function Pp(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (!wh(i, t, a, n, r))
      return !1;
    a.length && (t = a[a.length - 1]);
  }
  return !0;
}
function tu(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = Rh(
      i,
      t,
      a,
      n
    );
    (s === 0 ? r && u || !r && !u : r && !u || !r && u) && Lp(i, t, a, n), t = a;
  }
  return t;
}
function kl(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s)
    t = tu(
      i,
      t,
      e[s],
      n,
      r
    );
  return t;
}
let Nh = class eu extends Ir {
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
    this.flatCoordinates ? gi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const t = new eu(
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
    return r < Cr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      bu(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Du(
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
    return ku(
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
    return Eh(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), tu(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Gs(e, 0, this.ends_, this.stride);
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
      const t = Xr(this.getExtent());
      this.flatInteriorPoint_ = Ch(
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
    return new Vr(this.getFlatInteriorPoint(), "XYM");
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
    return t < 0 || this.ends_.length <= t ? null : new Fl(
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
      const u = n[o], l = new Fl(
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
      wh(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = tu(
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
    return e.length = yh(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new eu(e, "XY", n);
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
    return Sh(
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
    const n = Au(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const Wo = Nh;
function Gl(i) {
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
  return new Nh(s, "XY", [s.length]);
}
const nu = {
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
};
class Gu {
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
    return new Gu({
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
const Bs = Gu;
function Lh(i, t, e, n, r, s, o) {
  let a, u;
  const l = (e - t) / n;
  if (l === 1)
    a = t;
  else if (l === 2)
    a = t, u = r;
  else if (l !== 0) {
    let c = i[t], h = i[t + 1], f = 0;
    const g = [0];
    for (let _ = t + n; _ < e; _ += n) {
      const m = i[_], y = i[_ + 1];
      f += Math.sqrt((m - c) * (m - c) + (y - h) * (y - h)), g.push(f), c = m, h = y;
    }
    const p = r * f, d = eg(g, p);
    d < 0 ? (u = (p - g[-d - 2]) / (g[-d - 1] - g[-d - 2]), a = t + (-d - 2) * n) : a = t + d * n;
  }
  o = o > 1 ? o : 2, s = s || new Array(o);
  for (let c = 0; c < o; ++c)
    s[c] = a === void 0 ? NaN : u === void 0 ? i[a + c] : ze(i[a + c], i[a + n + c], u);
  return s;
}
function iu(i, t, e, n, r, s) {
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
      ze(
        i[(a - 1) * n + f],
        i[a * n + f],
        h
      )
    );
  return o.push(r), o;
}
function Tp(i, t, e, n, r, s, o) {
  if (o)
    return iu(
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
        return iu(
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
function Ph(i, t, e, n) {
  let r = i[t], s = i[t + 1], o = 0;
  for (let a = t + n; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    o += Math.sqrt((u - r) * (u - r) + (l - s) * (l - s)), r = u, s = l;
  }
  return o;
}
let Op = class ru extends Ir {
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
    this.flatCoordinates ? gi(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const t = new ru(
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
    return r < Cr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ou(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Mu(
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
    return Ih(
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
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, iu(
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
    return Di(
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
    return Lh(
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
    return Ph(
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
    return e.length = Fu(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new ru(e, "XY");
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
    return da(
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = pa(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const qo = Op;
class Bu {
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
    return new Bu({
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
const Ho = Bu, bt = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
function jo(i, t) {
  return Array.isArray(i) ? i : (t === void 0 ? t = [i, i] : (t[0] = i, t[1] = i), t);
}
class zu {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = jo(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new zu({
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
    return ft();
  }
  /**
   * Get the image element for the symbolizer.
   * @abstract
   * @param {number} pixelRatio Pixel ratio.
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getImage(t) {
    return ft();
  }
  /**
   * @abstract
   * @return {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} Image element.
   */
  getHitDetectionImage() {
    return ft();
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
    return ft();
  }
  /**
   * @abstract
   * @return {import("../size.js").Size} Image size.
   */
  getImageSize() {
    return ft();
  }
  /**
   * Get the origin of the symbolizer.
   * @abstract
   * @return {Array<number>} Origin.
   */
  getOrigin() {
    return ft();
  }
  /**
   * Get the size of the symbolizer (in pixels).
   * @abstract
   * @return {import("../size.js").Size} Size.
   */
  getSize() {
    return ft();
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
    this.scale_ = t, this.scaleArray_ = jo(t);
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  listenImageChange(t) {
    ft();
  }
  /**
   * Load not yet loaded URI.
   * @abstract
   */
  load() {
    ft();
  }
  /**
   * @abstract
   * @param {function(import("../events/Event.js").default): void} listener Listener function.
   */
  unlistenImageChange(t) {
    ft();
  }
}
const Th = zu, bp = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, Mp = /^([a-z]*)$|^hsla?\(.*\)$/i;
function Oh(i) {
  return typeof i == "string" ? i : bh(i);
}
function Dp(i) {
  const t = document.createElement("div");
  if (t.style.color = i, t.style.color !== "") {
    document.body.appendChild(t);
    const e = getComputedStyle(t).color;
    return document.body.removeChild(t), e;
  }
  return "";
}
const Ap = /* @__PURE__ */ function() {
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
        r = Fp(n), t[n] = r, ++e;
      }
      return r;
    }
  );
}();
function Zo(i) {
  return Array.isArray(i) ? i : Ap(i);
}
function Fp(i) {
  let t, e, n, r, s;
  if (Mp.exec(i) && (i = Dp(i)), bp.exec(i)) {
    const o = i.length - 1;
    let a;
    o <= 4 ? a = 1 : a = 2;
    const u = o === 4 || o === 8;
    t = parseInt(i.substr(1 + 0 * a, a), 16), e = parseInt(i.substr(1 + 1 * a, a), 16), n = parseInt(i.substr(1 + 2 * a, a), 16), u ? r = parseInt(i.substr(1 + 3 * a, a), 16) : r = 255, a == 1 && (t = (t << 4) + t, e = (e << 4) + e, n = (n << 4) + n, u && (r = (r << 4) + r)), s = [t, e, n, r / 255];
  } else
    i.startsWith("rgba(") ? (s = i.slice(5, -1).split(",").map(Number), Bl(s)) : i.startsWith("rgb(") ? (s = i.slice(4, -1).split(",").map(Number), s.push(1), Bl(s)) : Ut(!1, 14);
  return s;
}
function Bl(i) {
  return i[0] = he(i[0] + 0.5 | 0, 0, 255), i[1] = he(i[1] + 0.5 | 0, 0, 255), i[2] = he(i[2] + 0.5 | 0, 0, 255), i[3] = he(i[3], 0, 1), i;
}
function bh(i) {
  let t = i[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = i[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let n = i[2];
  n != (n | 0) && (n = n + 0.5 | 0);
  const r = i[3] === void 0 ? 1 : Math.round(i[3] * 100) / 100;
  return "rgba(" + t + "," + e + "," + n + "," + r + ")";
}
function jn(i) {
  return Array.isArray(i) ? bh(i) : i;
}
function On(i, t, e, n) {
  let r;
  return e && e.length ? r = e.shift() : Nu ? r = new OffscreenCanvas(i || 300, t || 300) : r = document.createElement("canvas"), i && (r.width = i), t && (r.height = t), /** @type {CanvasRenderingContext2D} */
  r.getContext("2d", n);
}
function kp(i) {
  const t = i.canvas;
  t.width = 1, t.height = 1, i.clearRect(0, 0, 1, 1);
}
const Gp = new RegExp(
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
), zl = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], Mh = function(i) {
  const t = i.match(Gp);
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
  for (let n = 0, r = zl.length; n < r; ++n) {
    const s = t[n + 1];
    s !== void 0 && (e[zl[n]] = s);
  }
  return e.families = e.family.split(/,\s?/), e;
}, Dh = "10px sans-serif", pi = "#000", Ko = "round", zs = [], Vs = 0, Ur = "round", Xs = 10, Ys = "#000", Us = "center", Jo = "middle", nr = [0, 0, 0, 0], Ws = 1, Ni = new xr();
let Mr = null, su;
const ou = {}, Bp = function() {
  const t = "32px ", e = ["monospace", "serif"], n = e.length, r = "wmytzilWMYTZIL@#/&?$%10";
  let s, o;
  function a(l, c, h) {
    let f = !0;
    for (let g = 0; g < n; ++g) {
      const p = e[g];
      if (o = Qo(
        l + " " + c + " " + t + p,
        r
      ), h != p) {
        const d = Qo(
          l + " " + c + " " + t + h + "," + p,
          r
        );
        f = f && d != o;
      }
    }
    return !!f;
  }
  function u() {
    let l = !0;
    const c = Ni.getKeys();
    for (let h = 0, f = c.length; h < f; ++h) {
      const g = c[h];
      Ni.get(g) < 100 && (a.apply(this, g.split(`
`)) ? (Ru(ou), Mr = null, su = void 0, Ni.set(g, 100)) : (Ni.set(g, Ni.get(g) + 1, !0), l = !1));
    }
    l && (clearInterval(s), s = void 0);
  }
  return function(l) {
    const c = Mh(l);
    if (!c)
      return;
    const h = c.families;
    for (let f = 0, g = h.length; f < g; ++f) {
      const p = h[f], d = c.style + `
` + c.weight + `
` + p;
      Ni.get(d) === void 0 && (Ni.set(d, 100, !0), a(c.style, c.weight, p) || (Ni.set(d, 0, !0), s === void 0 && (s = setInterval(u, 32))));
    }
  };
}(), zp = /* @__PURE__ */ function() {
  let i;
  return function(t) {
    let e = ou[t];
    if (e == null) {
      if (Nu) {
        const n = Mh(t), r = Ah(t, "Žg");
        e = (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) * (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
      } else
        i || (i = document.createElement("div"), i.innerHTML = "M", i.style.minHeight = "0", i.style.maxHeight = "none", i.style.height = "auto", i.style.padding = "0", i.style.border = "none", i.style.position = "absolute", i.style.display = "block", i.style.left = "-99999px"), i.style.font = t, document.body.appendChild(i), e = i.offsetHeight, document.body.removeChild(i);
      ou[t] = e;
    }
    return e;
  };
}();
function Ah(i, t) {
  return Mr || (Mr = On(1, 1)), i != su && (Mr.font = i, su = Mr.font), Mr.measureText(t);
}
function Qo(i, t) {
  return Ah(i, t).width;
}
function Vl(i, t, e) {
  if (t in e)
    return e[t];
  const n = t.split(`
`).reduce((r, s) => Math.max(r, Qo(i, s)), 0);
  return e[t] = n, n;
}
function Vp(i, t) {
  const e = [], n = [], r = [];
  let s = 0, o = 0, a = 0, u = 0;
  for (let l = 0, c = t.length; l <= c; l += 2) {
    const h = t[l];
    if (h === `
` || l === c) {
      s = Math.max(s, o), r.push(o), o = 0, a += u;
      continue;
    }
    const f = t[l + 1] || i.font, g = Qo(f, h);
    e.push(g), o += g;
    const p = zp(f);
    n.push(p), u = Math.max(u, p);
  }
  return { width: s, height: a, widths: e, heights: n, lineWidths: r };
}
function Xp(i, t, e, n, r, s, o, a, u, l, c) {
  i.save(), e !== 1 && (i.globalAlpha *= e), t && i.setTransform.apply(i, t), /** @type {*} */
  n.contextInstructions ? (i.translate(u, l), i.scale(c[0], c[1]), Yp(
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
function Yp(i, t) {
  const e = i.contextInstructions;
  for (let n = 0, r = e.length; n < r; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(
      t,
      e[n + 1]
    ) : t[e[n]] = e[n + 1];
}
class Vu extends Th {
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
    const t = this.getScale(), e = new Vu({
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
      const n = this.renderOptions_, r = On(
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
    return bt.LOADED;
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
    const g = e / 2 / f, p = e / 2 * (c / h), _ = Math.sqrt((r + g) * (r + g) + p * p) - r;
    if (this.radius2_ === void 0 || t === "bevel")
      return _ * 2;
    const m = r * Math.sin(a), y = Math.sqrt(r * r - m * m), E = s - y, S = Math.sqrt(m * m + E * E) / m;
    if (S <= n) {
      const w = S * e / 2 - s - r;
      return 2 * Math.max(_, w);
    }
    return _ * 2;
  }
  /**
   * @return {RenderOptions}  The render options
   * @protected
   */
  createRenderOptions() {
    let t = Ur, e = 0, n = null, r = 0, s, o = 0;
    this.stroke_ && (s = this.stroke_.getColor(), s === null && (s = Ys), s = jn(s), o = this.stroke_.getWidth(), o === void 0 && (o = Ws), n = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset(), t = this.stroke_.getLineJoin(), t === void 0 && (t = Ur), e = this.stroke_.getMiterLimit(), e === void 0 && (e = Xs));
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
      r === null && (r = pi), e.fillStyle = jn(r), e.fill();
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
      if (typeof e == "string" && (e = Zo(e)), e === null ? n = 1 : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1), n === 0) {
        const r = On(
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
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = pi, e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
}
const Fh = Vu;
class Xu extends Fh {
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
    const t = this.getScale(), e = new Xu({
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
const kh = Xu;
class _a {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = Xl, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
    t.clone()), new _a({
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
    }) : this.geometryFunction_ = Xl, this.geometry_ = t;
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
function Up(i) {
  let t;
  if (typeof i == "function")
    t = i;
  else {
    let e;
    Array.isArray(i) ? e = i : (Ut(typeof /** @type {?} */
    i.getZIndex == "function", 41), e = [
      /** @type {Style} */
      i
    ]), t = function() {
      return e;
    };
  }
  return t;
}
let ka = null;
function Wp(i, t) {
  if (!ka) {
    const e = new Bs({
      color: "rgba(255,255,255,0.4)"
    }), n = new Ho({
      color: "#3399CC",
      width: 1.25
    });
    ka = [
      new _a({
        image: new kh({
          fill: e,
          stroke: n,
          radius: 5
        }),
        fill: e,
        stroke: n
      })
    ];
  }
  return ka;
}
function Xl(i) {
  return i.getGeometry();
}
const $o = _a, qp = "#333";
class Yu {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = jo(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new Bs({ color: qp }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new Yu({
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
    this.scale_ = t, this.scaleArray_ = jo(t !== void 0 ? t : 1);
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
const Gh = Yu, ct = {
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
class Hp extends xr {
  /**
   * @param {Options} options Layer options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[ct.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, Ut(typeof e[ct.OPACITY] == "number", 64), e[ct.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[ct.Z_INDEX] = t.zIndex, e[ct.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[ct.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[ct.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[ct.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
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
    return e.opacity = he(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
   *     modified in place).
   * @return {Array<import("./Layer.js").default>} Array of layers.
   */
  getLayersArray(t) {
    return ft();
  }
  /**
   * @abstract
   * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
   *     states (to be modified in place).
   * @return {Array<import("./Layer.js").State>} List of layer states.
   */
  getLayerStatesArray(t) {
    return ft();
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
      this.get(ct.EXTENT)
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
      this.get(ct.MAX_RESOLUTION)
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
      this.get(ct.MIN_RESOLUTION)
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
      this.get(ct.MIN_ZOOM)
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
      this.get(ct.MAX_ZOOM)
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
      this.get(ct.OPACITY)
    );
  }
  /**
   * @abstract
   * @return {import("../source/Source.js").State} Source state.
   */
  getSourceState() {
    return ft();
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
      this.get(ct.VISIBLE)
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
      this.get(ct.Z_INDEX)
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
    this.set(ct.EXTENT, t);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(t) {
    this.set(ct.MAX_RESOLUTION, t);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(t) {
    this.set(ct.MIN_RESOLUTION, t);
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
    this.set(ct.MAX_ZOOM, t);
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
    this.set(ct.MIN_ZOOM, t);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(t) {
    Ut(typeof t == "number", 64), this.set(ct.OPACITY, t);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(t) {
    this.set(ct.VISIBLE, t);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(t) {
    this.set(ct.Z_INDEX, t);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const jp = Hp, rn = {
  ANIMATING: 0,
  INTERACTING: 1
}, Sn = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, Zp = 256;
function Yl(i, t, e) {
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
      let f = i[0] + u / 2 + c, g = i[2] - u / 2 + c, p = i[1] + l / 2 + h, d = i[3] - l / 2 + h;
      f > g && (f = (g + f) / 2, g = f), p > d && (p = (d + p) / 2, d = p);
      let _ = he(n[0], f, g), m = he(n[1], p, d);
      if (o && e && r) {
        const y = 30 * r;
        _ += -y * Math.log(1 + Math.max(0, f - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - g) / y), m += -y * Math.log(1 + Math.max(0, p - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - d) / y);
      }
      return [_, m];
    }
  );
}
function Kp(i) {
  return i;
}
function Uu(i, t, e, n) {
  const r = an(t) / e[0], s = ks(t) / e[1];
  return n ? Math.min(i, Math.max(r, s)) : Math.min(i, Math.min(r, s));
}
function Wu(i, t, e) {
  let n = Math.min(i, t);
  const r = 50;
  return n *= Math.log(1 + r * Math.max(0, i / t - 1)) / r + 1, e && (n = Math.max(n, e), n /= Math.log(1 + r * Math.max(0, e / i - 1)) / r + 1), he(n, e / 2, t * 2);
}
function Jp(i, t, e, n) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, s, o, a) {
    if (r !== void 0) {
      const u = i[0], l = i[i.length - 1], c = e ? Uu(
        u,
        e,
        o,
        n
      ) : u;
      if (a)
        return t ? Wu(
          r,
          c,
          l
        ) : he(r, l, c);
      const h = Math.min(c, r), f = Math.floor(Jc(i, h, s));
      return i[f] > c && f < i.length - 1 ? i[f + 1] : i[f];
    }
  };
}
function Qp(i, t, e, n, r, s) {
  return n = n !== void 0 ? n : !0, e = e !== void 0 ? e : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, u, l) {
    if (o !== void 0) {
      const c = r ? Uu(
        t,
        r,
        u,
        s
      ) : t;
      if (l)
        return n ? Wu(
          o,
          c,
          e
        ) : he(o, e, c);
      const h = 1e-9, f = Math.ceil(
        Math.log(t / c) / Math.log(i) - h
      ), g = -a * (0.5 - h) + 0.5, p = Math.min(c, o), d = Math.floor(
        Math.log(t / p) / Math.log(i) + g
      ), _ = Math.max(f, d), m = t / Math.pow(i, _);
      return he(m, e, c);
    }
  };
}
function Ul(i, t, e, n, r) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, u) {
    if (s !== void 0) {
      const l = n ? Uu(
        i,
        n,
        a,
        r
      ) : i;
      return !e || !u ? he(s, t, l) : Wu(
        s,
        l,
        t
      );
    }
  };
}
function $p(i) {
  if (i !== void 0)
    return 0;
}
function Wl(i) {
  if (i !== void 0)
    return i;
}
function td(i) {
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
function ed(i) {
  return i = i || Wg(5), /**
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
function nd(i) {
  return Math.pow(i, 3);
}
function id(i) {
  return 1 - nd(1 - i);
}
function rd(i) {
  return 3 * i * i - 2 * i * i * i;
}
const Ga = 0;
class sd extends xr {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Tu(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && fh(), t.center && (t.center = wi(t.center, this.projection_)), t.extent && (t.extent = Ns(t.extent, this.projection_)), this.applyOptions_(t);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in Sn)
      delete e[a];
    this.setProperties(e, !0);
    const n = ad(t);
    this.maxResolution_ = n.maxResolution, this.minResolution_ = n.minResolution, this.zoomFactor_ = n.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = n.minZoom;
    const r = od(t), s = n.constraint, o = ud(t);
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
      r.center && (r = Object.assign({}, r), r.center = wi(
        r.center,
        this.getProjection()
      )), r.anchor && (r = Object.assign({}, r), r.anchor = wi(
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
      n && To(n, !0);
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
        easing: c.easing || rd,
        callback: n
      };
      if (c.center && (h.sourceCenter = o, h.targetCenter = c.center.slice(), o = h.targetCenter), c.zoom !== void 0 ? (h.sourceResolution = a, h.targetResolution = this.getResolutionForZoom(c.zoom), a = h.targetResolution) : c.resolution && (h.sourceResolution = a, h.targetResolution = c.resolution, a = h.targetResolution), c.rotation !== void 0) {
        h.sourceRotation = u;
        const f = Ka(c.rotation - u + Math.PI, 2 * Math.PI) - Math.PI;
        h.targetRotation = u + f, u = h.targetRotation;
      }
      ld(h) ? h.complete = !0 : s += h.duration, l.push(h);
    }
    this.animations_.push(l), this.setHint(rn.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[rn.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[rn.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(rn.ANIMATING, -this.hints_[rn.ANIMATING]);
    let t;
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const r = this.animations_[e];
      if (r[0].callback && To(r[0].callback, !1), !t)
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
          const f = u.sourceCenter[0], g = u.sourceCenter[1], p = u.targetCenter[0], d = u.targetCenter[1];
          this.nextCenter_ = u.targetCenter;
          const _ = f + h * (p - f), m = g + h * (d - g);
          this.targetCenter_ = [_, m];
        }
        if (u.sourceResolution && u.targetResolution) {
          const f = h === 1 ? u.targetResolution : u.sourceResolution + h * (u.targetResolution - u.sourceResolution);
          if (u.anchor) {
            const g = this.getViewportSize_(this.getRotation()), p = this.constraints_.resolution(
              f,
              0,
              g,
              !0
            );
            this.targetCenter_ = this.calculateCenterZoom(
              p,
              u.anchor
            );
          }
          this.nextResolution_ = u.targetResolution, this.targetResolution_ = f, this.applyTargetState_(!0);
        }
        if (u.sourceRotation !== void 0 && u.targetRotation !== void 0) {
          const f = h === 1 ? Ka(u.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : u.sourceRotation + h * (u.targetRotation - u.sourceRotation);
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
        this.animations_[n] = null, this.setHint(rn.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = r[0].callback;
        o && To(o, !0);
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
    return r !== void 0 && (n = [r[0] - e[0], r[1] - e[1]], jg(n, t - this.getRotation()), Hg(n, e)), n;
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
    return t && bl(t, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Sn.CENTER)
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
    return dh(e, this.getProjection());
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
    Ut(e, 1);
    const n = (
      /** @type {!number} */
      this.getResolution()
    );
    Ut(n !== void 0, 2);
    const r = (
      /** @type {!number} */
      this.getRotation()
    );
    return Ut(r !== void 0, 3), Lg(e, n, r, t);
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
      this.get(Sn.RESOLUTION)
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
      Ns(t, this.getProjection()),
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
    const n = an(t) / e[0], r = ks(t) / e[1];
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
      this.get(Sn.ROTATION)
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
      r = Ba(
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
      const s = Jc(this.resolutions_, t, 1);
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
      const e = he(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), n = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(n, he(t - e, 0, 1));
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
    if (Ut(
      Array.isArray(t) || typeof /** @type {?} */
      t.getSimplifiedGeometry == "function",
      24
    ), Array.isArray(t)) {
      Ut(!ah(t), 25);
      const r = Ns(t, this.getProjection());
      n = Gl(r);
    } else if (t.getType() === "Circle") {
      const r = Ns(
        t.getExtent(),
        this.getProjection()
      );
      n = Gl(r), n.rotate(this.getRotation(), Xr(r));
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
      const g = s[h] * n - s[h + 1] * r, p = s[h] * r + s[h + 1] * n;
      a = Math.min(a, g), u = Math.min(u, p), l = Math.max(l, g), c = Math.max(c, p);
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
    const l = this.getRotation(), c = Math.sin(l), h = Math.cos(l), f = Xr(a);
    f[0] += (r[1] - r[3]) / 2 * u, f[1] += (r[0] - r[2]) / 2 * u;
    const g = f[0] * h - f[1] * c, p = f[1] * h + f[0] * c, d = this.getConstrainedCenter([g, p], u), _ = e.callback ? e.callback : As;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: u,
        center: d,
        duration: e.duration,
        easing: e.easing
      },
      _
    ) : (this.targetResolution_ = u, this.targetCenter_ = d, this.applyTargetState_(!1, !0), To(_, !0));
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
      wi(t, this.getProjection()),
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
      Ba(
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
      const a = this.getViewportSizeMinusPadding_(-n), u = Ba(
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
    const e = bl(this.targetCenter_, this.getProjection());
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
    e = e && wi(e, this.getProjection()), this.adjustResolutionInternal(t, e);
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
    e && (e = wi(e, this.getProjection())), this.adjustRotationInternal(t, e);
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
      t && wi(t, this.getProjection())
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
    this.get(Sn.ROTATION) !== r && this.set(Sn.ROTATION, r), this.get(Sn.RESOLUTION) !== o && (this.set(Sn.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Sn.CENTER) || !Yo(this.get(Sn.CENTER), a)) && this.set(Sn.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
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
    n = n || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !Yo(this.getCenterInternal(), u)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: u,
      resolution: a,
      duration: t,
      easing: id,
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
    this.resolveConstraints(0), this.setHint(rn.INTERACTING, 1);
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
    n = n && wi(n, this.getProjection()), this.endInteractionInternal(t, e, n);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(rn.INTERACTING, -1), this.resolveConstraints(t, e, n));
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
function To(i, t) {
  setTimeout(function() {
    i(t);
  }, 0);
}
function od(i) {
  if (i.extent !== void 0) {
    const e = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0;
    return Yl(i.extent, i.constrainOnlyCenter, e);
  }
  const t = Tu(i.projection, "EPSG:3857");
  if (i.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, Yl(e, !1, !1);
  }
  return Kp;
}
function ad(i) {
  let t, e, n, o = i.minZoom !== void 0 ? i.minZoom : Ga, a = i.maxZoom !== void 0 ? i.maxZoom : 28;
  const u = i.zoomFactor !== void 0 ? i.zoomFactor : 2, l = i.multiWorld !== void 0 ? i.multiWorld : !1, c = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0, h = i.showFullExtent !== void 0 ? i.showFullExtent : !1, f = Tu(i.projection, "EPSG:3857"), g = f.getExtent();
  let p = i.constrainOnlyCenter, d = i.extent;
  if (!l && !d && f.isGlobal() && (p = !1, d = g), i.resolutions !== void 0) {
    const _ = i.resolutions;
    e = _[o], n = _[a] !== void 0 ? _[a] : _[_.length - 1], i.constrainResolution ? t = Jp(
      _,
      c,
      !p && d,
      h
    ) : t = Ul(
      e,
      n,
      c,
      !p && d,
      h
    );
  } else {
    const m = (g ? Math.max(an(g), ks(g)) : (
      // use an extent that can fit the whole world if need be
      360 * lh.degrees / f.getMetersPerUnit()
    )) / Zp / Math.pow(2, Ga), y = m / Math.pow(2, 28 - Ga);
    e = i.maxResolution, e !== void 0 ? o = 0 : e = m / Math.pow(u, o), n = i.minResolution, n === void 0 && (i.maxZoom !== void 0 ? i.maxResolution !== void 0 ? n = e / Math.pow(u, a) : n = m / Math.pow(u, a) : n = y), a = o + Math.floor(
      Math.log(e / n) / Math.log(u)
    ), n = e / Math.pow(u, a - o), i.constrainResolution ? t = Qp(
      u,
      e,
      n,
      c,
      !p && d,
      h
    ) : t = Ul(
      e,
      n,
      c,
      !p && d,
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
function ud(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const e = i.constrainRotation;
    return e === void 0 || e === !0 ? ed() : e === !1 ? Wl : typeof e == "number" ? td(e) : Wl;
  }
  return $p;
}
function ld(i) {
  return !(i.sourceCenter && i.targetCenter && !Yo(i.sourceCenter, i.targetCenter) || i.sourceResolution !== i.targetResolution || i.sourceRotation !== i.targetRotation);
}
function Ba(i, t, e, n, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r), a = i[0] * s - i[1] * o, u = i[1] * s + i[0] * o;
  a += (t[0] / 2 - e[0]) * n, u += (e[1] - t[1] / 2) * n, o = -o;
  const l = a * s - u * o, c = u * s + a * o;
  return [l, c];
}
const ql = sd;
class cd extends jp {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      ct.SOURCE,
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
      this.get(ct.SOURCE) || null
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
    this.sourceChangeKey_ && (Jn(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = Kn(
      t,
      cn.CHANGE,
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
    !t && n && (t = n.getView()), t instanceof ql ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray());
    let r;
    e.layerStatesArray ? r = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : r = this.getLayerState();
    const s = this.getExtent();
    return hd(r, e.viewState) && (!s || Nn(s, e.extent));
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
    const r = t instanceof ql ? t.getViewStateAndExtent() : t;
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
    t || this.unrender(), this.set(ct.MAP, t);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(ct.MAP);
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
    this.mapPrecomposeKey_ && (Jn(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && (Jn(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = Kn(
      t,
      nu.PRECOMPOSE,
      function(e) {
        const r = /** @type {import("../render/Event.js").default} */ e.frameState.layerStatesArray, s = this.getLayerState(!1);
        Ut(
          !r.some(function(o) {
            return o.layer === s.layer;
          }),
          67
        ), r.push(s);
      },
      this
    ), this.mapRenderKey_ = Kn(this, cn.CHANGE, t.render, t), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(t) {
    this.set(ct.SOURCE, t);
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
function hd(i, t) {
  if (!i.visible)
    return !1;
  const e = t.resolution;
  if (e < i.minResolution || e >= i.maxResolution)
    return !1;
  const n = t.zoom;
  return n > i.minZoom && n <= i.maxZoom;
}
const fd = cd;
function gd(i, t, e, n, r) {
  Bh(i, t, e || 0, n || i.length - 1, r || pd);
}
function Bh(i, t, e, n, r) {
  for (; n > e; ) {
    if (n - e > 600) {
      var s = n - e + 1, o = t - e + 1, a = Math.log(s), u = 0.5 * Math.exp(2 * a / 3), l = 0.5 * Math.sqrt(a * u * (s - u) / s) * (o - s / 2 < 0 ? -1 : 1), c = Math.max(e, Math.floor(t - o * u / s + l)), h = Math.min(n, Math.floor(t + (s - o) * u / s + l));
      Bh(i, t, c, h, r);
    }
    var f = i[t], g = e, p = n;
    for (Is(i, e, t), r(i[n], f) > 0 && Is(i, e, n); g < p; ) {
      for (Is(i, g, p), g++, p--; r(i[g], f) < 0; )
        g++;
      for (; r(i[p], f) > 0; )
        p--;
    }
    r(i[e], f) === 0 ? Is(i, e, p) : (p++, Is(i, p, n)), p <= t && (e = p + 1), t <= p && (n = p - 1);
  }
}
function Is(i, t, e) {
  var n = i[t];
  i[t] = i[e], i[e] = n;
}
function pd(i, t) {
  return i < t ? -1 : i > t ? 1 : 0;
}
let zh = class {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const n = [];
    if (!bo(t, e))
      return n;
    const r = this.toBBox, s = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], u = e.leaf ? r(a) : a;
        bo(t, u) && (e.leaf ? n.push(a) : Va(t, u) ? this._all(a, n) : s.push(a));
      }
      e = s.pop();
    }
    return n;
  }
  collides(t) {
    let e = this.data;
    if (!bo(t, e))
      return !1;
    const n = [];
    for (; e; ) {
      for (let r = 0; r < e.children.length; r++) {
        const s = e.children[r], o = e.leaf ? this.toBBox(s) : s;
        if (bo(t, o)) {
          if (e.leaf || Va(t, o))
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
    return this.data = Dr([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let n = this.data;
    const r = this.toBBox(t), s = [], o = [];
    let a, u, l;
    for (; n || s.length; ) {
      if (n || (n = s.pop(), u = s[s.length - 1], a = o.pop(), l = !0), n.leaf) {
        const c = dd(t, n.children, e);
        if (c !== -1)
          return n.children.splice(c, 1), s.push(n), this._condense(s), this;
      }
      !l && !n.leaf && Va(n, r) ? (s.push(n), o.push(a), a = 0, u = n, n = n.children[0]) : u ? (a++, n = u.children[a], l = !1) : n = null;
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
      return a = Dr(t.slice(e, n + 1)), Or(a, this.toBBox), a;
    r || (r = Math.ceil(Math.log(s) / Math.log(o)), o = Math.ceil(s / Math.pow(o, r - 1))), a = Dr([]), a.leaf = !1, a.height = r;
    const u = Math.ceil(s / o), l = u * Math.ceil(Math.sqrt(o));
    Hl(t, e, n, l, this.compareMinX);
    for (let c = e; c <= n; c += l) {
      const h = Math.min(c + l - 1, n);
      Hl(t, c, h, u, this.compareMinY);
      for (let f = c; f <= h; f += u) {
        const g = Math.min(f + u - 1, h);
        a.children.push(this._build(t, f, g, r - 1));
      }
    }
    return Or(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, n, r) {
    for (; r.push(e), !(e.leaf || r.length - 1 === n); ) {
      let s = 1 / 0, o = 1 / 0, a;
      for (let u = 0; u < e.children.length; u++) {
        const l = e.children[u], c = za(l), h = yd(t, l) - c;
        h < o ? (o = h, s = c < s ? c : s, a = l) : h === o && c < s && (s = c, a = l);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, n) {
    const r = n ? t : this.toBBox(t), s = [], o = this._chooseSubtree(r, this.data, e, s);
    for (o.children.push(t), Ps(o, r); e >= 0 && s[e].children.length > this._maxEntries; )
      this._split(s, e), e--;
    this._adjustParentBBoxes(r, s, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const n = t[e], r = n.children.length, s = this._minEntries;
    this._chooseSplitAxis(n, s, r);
    const o = this._chooseSplitIndex(n, s, r), a = Dr(n.children.splice(o, n.children.length - o));
    a.height = n.height, a.leaf = n.leaf, Or(n, this.toBBox), Or(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(n, a);
  }
  _splitRoot(t, e) {
    this.data = Dr([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, Or(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, n) {
    let r, s = 1 / 0, o = 1 / 0;
    for (let a = e; a <= n - e; a++) {
      const u = Ls(t, 0, a, this.toBBox), l = Ls(t, a, n, this.toBBox), c = vd(u, l), h = za(u) + za(l);
      c < s ? (s = c, r = a, o = h < o ? h : o) : c === s && h < o && (o = h, r = a);
    }
    return r || n - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, n) {
    const r = t.leaf ? this.compareMinX : _d, s = t.leaf ? this.compareMinY : md, o = this._allDistMargin(t, e, n, r), a = this._allDistMargin(t, e, n, s);
    o < a && t.children.sort(r);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, n, r) {
    t.children.sort(r);
    const s = this.toBBox, o = Ls(t, 0, e, s), a = Ls(t, n - e, n, s);
    let u = Oo(o) + Oo(a);
    for (let l = e; l < n - e; l++) {
      const c = t.children[l];
      Ps(o, t.leaf ? s(c) : c), u += Oo(o);
    }
    for (let l = n - e - 1; l >= e; l--) {
      const c = t.children[l];
      Ps(a, t.leaf ? s(c) : c), u += Oo(a);
    }
    return u;
  }
  _adjustParentBBoxes(t, e, n) {
    for (let r = n; r >= 0; r--)
      Ps(e[r], t);
  }
  _condense(t) {
    for (let e = t.length - 1, n; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (n = t[e - 1].children, n.splice(n.indexOf(t[e]), 1)) : this.clear() : Or(t[e], this.toBBox);
  }
};
function dd(i, t, e) {
  if (!e)
    return t.indexOf(i);
  for (let n = 0; n < t.length; n++)
    if (e(i, t[n]))
      return n;
  return -1;
}
function Or(i, t) {
  Ls(i, 0, i.children.length, t, i);
}
function Ls(i, t, e, n, r) {
  r || (r = Dr(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
  for (let s = t; s < e; s++) {
    const o = i.children[s];
    Ps(r, i.leaf ? n(o) : o);
  }
  return r;
}
function Ps(i, t) {
  return i.minX = Math.min(i.minX, t.minX), i.minY = Math.min(i.minY, t.minY), i.maxX = Math.max(i.maxX, t.maxX), i.maxY = Math.max(i.maxY, t.maxY), i;
}
function _d(i, t) {
  return i.minX - t.minX;
}
function md(i, t) {
  return i.minY - t.minY;
}
function za(i) {
  return (i.maxX - i.minX) * (i.maxY - i.minY);
}
function Oo(i) {
  return i.maxX - i.minX + (i.maxY - i.minY);
}
function yd(i, t) {
  return (Math.max(t.maxX, i.maxX) - Math.min(t.minX, i.minX)) * (Math.max(t.maxY, i.maxY) - Math.min(t.minY, i.minY));
}
function vd(i, t) {
  const e = Math.max(i.minX, t.minX), n = Math.max(i.minY, t.minY), r = Math.min(i.maxX, t.maxX), s = Math.min(i.maxY, t.maxY);
  return Math.max(0, r - e) * Math.max(0, s - n);
}
function Va(i, t) {
  return i.minX <= t.minX && i.minY <= t.minY && t.maxX <= i.maxX && t.maxY <= i.maxY;
}
function bo(i, t) {
  return t.minX <= i.maxX && t.minY <= i.maxY && t.maxX >= i.minX && t.maxY >= i.minY;
}
function Dr(i) {
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
function Hl(i, t, e, n, r) {
  const s = [t, e];
  for (; s.length; ) {
    if (e = s.pop(), t = s.pop(), e - t <= n)
      continue;
    const o = t + Math.ceil((e - t) / n / 2) * n;
    gd(i, o, t, e, r), s.push(t, o, o, e);
  }
}
class Ed {
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
    const r = jl(t, e, n);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */
  set(t, e, n, r) {
    const s = jl(t, e, n);
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
function jl(i, t, e) {
  const n = e ? Oh(e) : "null";
  return t + ":" + i + ":" + n;
}
const Zl = new Ed();
function xd(i, t, e) {
  const n = (
    /** @type {HTMLImageElement} */
    i
  );
  let r = !0, s = !1, o = !1;
  const a = [
    Vo(n, cn.LOAD, function() {
      o = !0, s || t();
    })
  ];
  return n.src && gg ? (s = !0, n.decode().then(function() {
    r && t();
  }).catch(function(u) {
    r && (o ? t() : e());
  })) : a.push(Vo(n, cn.ERROR, e)), function() {
    r = !1, a.forEach(Jn);
  };
}
let Ss = null;
class Cd extends Qc {
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
    if (this.tainted_ === void 0 && this.imageState_ === bt.LOADED) {
      Ss || (Ss = On(1, 1, void 0, {
        willReadFrequently: !0
      })), Ss.drawImage(this.image_, 0, 0);
      try {
        Ss.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Ss = null, this.tainted_ = !0;
      }
    }
    return this.tainted_ === !0;
  }
  /**
   * @private
   */
  dispatchChangeEvent_() {
    this.dispatchEvent(cn.CHANGE);
  }
  /**
   * @private
   */
  handleImageError_() {
    this.imageState_ = bt.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = bt.LOADED, this.size_ ? (this.image_.width = this.size_[0], this.image_.height = this.size_[1]) : this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.dispatchChangeEvent_();
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
        const t = this.size_[0], e = this.size_[1], n = On(t, e);
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
    if (this.imageState_ === bt.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = bt.LOADING;
      try {
        this.image_.src = this.src_;
      } catch {
        this.handleImageError_();
      }
      this.unlisten_ = xd(
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
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== bt.LOADED)
      return;
    const e = this.image_, n = document.createElement("canvas");
    n.width = Math.ceil(e.width * t), n.height = Math.ceil(e.height * t);
    const r = n.getContext("2d");
    r.scale(t, t), r.drawImage(e, 0, 0), r.globalCompositeOperation = "multiply", r.fillStyle = Oh(this.color_), r.fillRect(0, 0, n.width / t, n.height / t), r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0), this.canvas_[t] = n;
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
function Id(i, t, e, n, r, s) {
  let o = Zl.get(t, n, s);
  return o || (o = new Cd(i, t, e, n, r, s), Zl.set(t, n, s, o)), o;
}
function Kl(i, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / i, n / t] : e !== void 0 ? e / i : n !== void 0 ? n / t : 1;
}
class qu extends Th {
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
    Ut(!(a !== void 0 && o), 4), Ut(!o || o && this.imgSize_, 5), (a === void 0 || a.length === 0) && o && (a = /** @type {HTMLImageElement} */
    o.src || Kt(o)), Ut(a !== void 0 && a.length > 0, 6), Ut(
      !((t.width !== void 0 || t.height !== void 0) && t.scale !== void 0),
      69
    );
    const u = t.src !== void 0 ? bt.IDLE : bt.LOADED;
    if (this.color_ = t.color !== void 0 ? Zo(t.color) : null, this.iconImage_ = Id(
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
              Kl(
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
        Kl(l, c, t.width, t.height)
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
    return this.initialOptions_ ? (e = this.initialOptions_.width, n = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new qu({
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
    if (this.iconImage_.getImageState() == bt.LOADED)
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
    if (this.iconImage_.getImageState() == bt.LOADED)
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
    this.iconImage_.addEventListener(cn.CHANGE, t);
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
    this.iconImage_.removeEventListener(cn.CHANGE, t);
  }
}
const Hu = qu;
function Jl(i) {
  return new $o({
    fill: qs(i, ""),
    stroke: Hs(i, ""),
    text: Sd(i),
    image: Rd(i)
  });
}
function qs(i, t) {
  const e = i[t + "fill-color"];
  if (e)
    return new Bs({ color: e });
}
function Hs(i, t) {
  const e = i[t + "stroke-width"], n = i[t + "stroke-color"];
  if (!(!e && !n))
    return new Ho({
      width: e,
      color: n,
      lineCap: i[t + "stroke-line-cap"],
      lineJoin: i[t + "stroke-line-join"],
      lineDash: i[t + "stroke-line-dash"],
      lineDashOffset: i[t + "stroke-line-dash-offset"],
      miterLimit: i[t + "stroke-miter-limit"]
    });
}
function Sd(i) {
  const t = i["text-value"];
  return t ? new Gh({
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
    fill: qs(i, "text-"),
    backgroundFill: qs(i, "text-background-"),
    stroke: Hs(i, "text-"),
    backgroundStroke: Hs(i, "text-background-")
  }) : void 0;
}
function Rd(i) {
  const t = i["icon-src"], e = i["icon-img"];
  if (t || e)
    return new Hu({
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
    return new Fh({
      points: n,
      fill: qs(i, s),
      stroke: Hs(i, s),
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
    return new kh({
      radius: r,
      fill: qs(i, s),
      stroke: Hs(i, s),
      displacement: i["circle-displacement"],
      scale: i["circle-scale"],
      rotation: i["circle-rotation"],
      rotateWithView: i["circle-rotate-with-view"],
      declutterMode: i["circle-declutter-mode"]
    });
  }
}
const Ql = {
  RENDER_ORDER: "renderOrder"
};
class wd extends fd {
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
      this.get(Ql.RENDER_ORDER)
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
    t.declutterTree || (t.declutterTree = new zh(9)), this.getRenderer().renderDeclutter(t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(t) {
    this.set(Ql.RENDER_ORDER, t);
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
      e = Wp;
    else if (t === null)
      e = null;
    else if (typeof t == "function")
      e = t;
    else if (t instanceof $o)
      e = t;
    else if (Array.isArray(t)) {
      const n = t.length, r = new Array(n);
      for (let s = 0; s < n; ++s) {
        const o = t[s];
        o instanceof $o ? r[s] = o : r[s] = Jl(o);
      }
      e = r;
    } else
      e = Jl(t);
    this.style_ = e, this.styleFunction_ = t === null ? void 0 : Up(this.style_), this.changed();
  }
}
const Nd = wd, fo = {
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
}, Mo = [fo.FILL], Ai = [fo.STROKE], ir = [fo.BEGIN_PATH], $l = [fo.CLOSE_PATH], H = fo;
class Ld {
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
const Vh = Ld;
class Pd extends Vh {
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
      r[0] = t[a], r[1] = t[a + 1], Cg(n, r) && (s[o++] = r[0], s[o++] = r[1]);
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
    let g = !0, p, d, _;
    for (p = e + r; p < n; p += r)
      f[0] = t[p], f[1] = t[p + 1], _ = ja(l, f), _ !== d ? (g && (a[u++] = c, a[u++] = h, g = !1), a[u++] = f[0], a[u++] = f[1]) : _ === Zt.INTERSECTING ? (a[u++] = f[0], a[u++] = f[1], g = !1) : g = !0, c = f[0], h = f[1], d = _;
    return (s && g || p === e + r) && (a[u++] = c, a[u++] = h), u;
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
        for (let p = 0, d = g.length; p < d; ++p) {
          const _ = [];
          f = this.drawCustomCoordinates_(
            u,
            f,
            g[p],
            o,
            _
          ), h.push(_);
        }
        this.instructions.push([
          H.CUSTOM,
          a,
          h,
          t,
          n,
          Qa
        ]), this.hitDetectionInstructions.push([
          H.CUSTOM,
          a,
          h,
          t,
          r || n,
          Qa
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
          H.CUSTOM,
          a,
          c,
          t,
          n,
          Gs
        ]), this.hitDetectionInstructions.push([
          H.CUSTOM,
          a,
          c,
          t,
          r || n,
          Gs
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
          H.CUSTOM,
          a,
          l,
          t,
          n,
          Di
        ]), this.hitDetectionInstructions.push([
          H.CUSTOM,
          a,
          l,
          t,
          r || n,
          Di
        ]);
        break;
      case "MultiPoint":
        u = t.getFlatCoordinates(), l = this.appendFlatPointCoordinates(u, o), l > a && (this.instructions.push([
          H.CUSTOM,
          a,
          l,
          t,
          n,
          Di
        ]), this.hitDetectionInstructions.push([
          H.CUSTOM,
          a,
          l,
          t,
          r || n,
          Di
        ]));
        break;
      case "Point":
        u = t.getFlatCoordinates(), this.coordinates.push(u[0], u[1]), l = this.coordinates.length, this.instructions.push([
          H.CUSTOM,
          a,
          l,
          t,
          n
        ]), this.hitDetectionInstructions.push([
          H.CUSTOM,
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
      H.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      H.BEGIN_GEOMETRY,
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
      r[0], s == H.END_GEOMETRY ? o = e : s == H.BEGIN_GEOMETRY && (r[2] = e, ng(this.hitDetectionInstructions, o, e), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    const n = this.state;
    if (t) {
      const r = t.getColor();
      n.fillStyle = jn(
        r || pi
      );
    } else
      n.fillStyle = void 0;
    if (e) {
      const r = e.getColor();
      n.strokeStyle = jn(
        r || Ys
      );
      const s = e.getLineCap();
      n.lineCap = s !== void 0 ? s : Ko;
      const o = e.getLineDash();
      n.lineDash = o ? o.slice() : zs;
      const a = e.getLineDashOffset();
      n.lineDashOffset = a || Vs;
      const u = e.getLineJoin();
      n.lineJoin = u !== void 0 ? u : Ur;
      const l = e.getWidth();
      n.lineWidth = l !== void 0 ? l : Ws;
      const c = e.getMiterLimit();
      n.miterLimit = c !== void 0 ? c : Xs, n.lineWidth > this.maxLineWidth && (this.maxLineWidth = n.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      n.strokeStyle = void 0, n.lineCap = void 0, n.lineDash = null, n.lineDashOffset = void 0, n.lineJoin = void 0, n.lineWidth = void 0, n.miterLimit = void 0;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(t) {
    const e = t.fillStyle, n = [H.SET_FILL_STYLE, e];
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
      H.SET_STROKE_STYLE,
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
    (t.currentStrokeStyle != n || t.currentLineCap != r || s != t.currentLineDash && !fs(t.currentLineDash, s) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != u || t.currentMiterLimit != l) && (n !== void 0 && e.call(this, t), t.currentStrokeStyle = n, t.currentLineCap = r, t.currentLineDash = s, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = u, t.currentMiterLimit = l);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(t) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const e = [H.END_GEOMETRY, t];
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
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = xg(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      Lu(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
const go = Pd;
class Td extends go {
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
      H.DRAW_IMAGE,
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
      H.DRAW_IMAGE,
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
      H.DRAW_IMAGE,
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
      H.DRAW_IMAGE,
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
const Od = Td;
class bd extends go {
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
      H.MOVE_TO_LINE_TO,
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
        H.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        zs,
        Vs
      ],
      ir
    );
    const o = t.getFlatCoordinates(), a = t.getStride();
    this.drawFlatCoordinates_(
      o,
      0,
      o.length,
      a
    ), this.hitDetectionInstructions.push(Ai), this.endGeometry(e);
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
        H.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        n.lineDash,
        n.lineDashOffset
      ],
      ir
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
    this.hitDetectionInstructions.push(Ai), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(Ai), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(Ai), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(ir);
  }
}
const Md = bd;
class Dd extends go {
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
    this.instructions.push(ir), this.hitDetectionInstructions.push(ir);
    for (let l = 0; l < u; ++l) {
      const c = n[l], h = this.coordinates.length, f = this.appendFlatLineCoordinates(
        t,
        e,
        c,
        r,
        !0,
        !a
      ), g = [
        H.MOVE_TO_LINE_TO,
        h,
        f
      ];
      this.instructions.push(g), this.hitDetectionInstructions.push(g), a && (this.instructions.push($l), this.hitDetectionInstructions.push($l)), e = c;
    }
    return o && (this.instructions.push(Mo), this.hitDetectionInstructions.push(Mo)), a && (this.instructions.push(Ai), this.hitDetectionInstructions.push(Ai)), e;
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
      H.SET_FILL_STYLE,
      pi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      H.SET_STROKE_STYLE,
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
    const l = [H.CIRCLE, u];
    this.instructions.push(ir, l), this.hitDetectionInstructions.push(ir, l), n.fillStyle !== void 0 && (this.instructions.push(Mo), this.hitDetectionInstructions.push(Mo)), n.strokeStyle !== void 0 && (this.instructions.push(Ai), this.hitDetectionInstructions.push(Ai)), this.endGeometry(e);
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
      H.SET_FILL_STYLE,
      pi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      H.SET_STROKE_STYLE,
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
      H.SET_FILL_STYLE,
      pi
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      H.SET_STROKE_STYLE,
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
        e[n] = tr(e[n], t);
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
const tc = Dd;
function Ad(i, t, e, n, r) {
  const s = [];
  let o = e, a = 0, u = t.slice(e, 2);
  for (; a < i && o + r < n; ) {
    const [l, c] = u.slice(-2), h = t[o + r], f = t[o + r + 1], g = Math.sqrt(
      (h - l) * (h - l) + (f - c) * (f - c)
    );
    if (a += g, a >= i) {
      const p = (i - a + g) / g, d = ze(l, h, p), _ = ze(c, f, p);
      u.push(d, _), s.push(u), u = [d, _], a == i && (o += r), a = 0;
    } else if (a < i)
      u.push(
        t[o + r],
        t[o + r + 1]
      ), o += r;
    else {
      const p = g - a, d = ze(l, h, p / g), _ = ze(c, f, p / g);
      u.push(d, _), s.push(u), u = [d, _], a = 0, o += r;
    }
  }
  return a > 0 && s.push(u), s;
}
function Fd(i, t, e, n, r) {
  let s = e, o = e, a = 0, u = 0, l = e, c, h, f, g, p, d, _, m, y, E;
  for (h = e; h < n; h += r) {
    const I = t[h], S = t[h + 1];
    p !== void 0 && (y = I - p, E = S - d, g = Math.sqrt(y * y + E * E), _ !== void 0 && (u += f, c = Math.acos((_ * y + m * E) / (f * g)), c > i && (u > a && (a = u, s = l, o = h), u = 0, l = h - r)), f = g, _ = y, m = E), p = I, d = S;
  }
  return u += g, u > a ? [l, h] : [s, o];
}
const bs = {
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
class kd extends go {
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
      if (!Nn(this.getBufferedMaxExtent(), t.getExtent()))
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
        const d = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        h = [];
        for (let _ = 0, m = d.length; _ < m; ++_)
          h.push(d[_][0]);
      }
      this.beginGeometry(t, e);
      const f = s.repeat, g = f ? void 0 : s.textAlign;
      let p = 0;
      for (let d = 0, _ = h.length; d < _; ++d) {
        let m;
        f ? m = Ad(
          f * this.resolution,
          l,
          p,
          h[d],
          c
        ) : m = [l.slice(p, h[d])];
        for (let y = 0, E = m.length; y < E; ++y) {
          const I = m[y];
          let S = 0, w = I.length;
          if (g == null) {
            const L = Fd(
              s.maxAngle,
              I,
              0,
              I.length,
              2
            );
            S = L[0], w = L[1];
          }
          for (let L = S; L < w; L += c)
            o.push(I[L], I[L + 1]);
          const b = o.length;
          p = h[d], this.drawChars_(a, b), a = b;
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
          const E = o[(_ + y) * 2] === l[y * c] && o[(_ + y) * 2 + 1] === l[y * c + 1];
          return E || --_, E;
        });
      }
      this.saveTextStates_(), (s.backgroundFill || s.backgroundStroke) && (this.setFillStrokeStyle(
        s.backgroundFill,
        s.backgroundStroke
      ), s.backgroundFill && (this.updateFillStyle(this.state, this.createFill), this.hitDetectionInstructions.push(this.createFill(this.state))), s.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
      let g = s.padding;
      if (g != nr && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let _ = s.padding[0], m = s.padding[1], y = s.padding[2], E = s.padding[3];
        s.scale[0] < 0 && (m = -m, E = -E), s.scale[1] < 0 && (_ = -_, y = -y), g = [_, m, y, E];
      }
      const p = this.pixelRatio;
      this.instructions.push([
        H.DRAW_IMAGE,
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
        g == nr ? nr : g.map(function(_) {
          return _ * p;
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
      const d = 1 / p;
      this.hitDetectionInstructions.push([
        H.DRAW_IMAGE,
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
        [d, d],
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
      textAlign: e.textAlign || Us,
      justify: e.justify,
      textBaseline: e.textBaseline || Jo,
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
    const u = this.pixelRatio, l = bs[r.textBaseline], c = this.textOffsetY_ * u, h = this.text_, f = n ? n.lineWidth * Math.abs(r.scale[0]) / 2 : 0;
    this.instructions.push([
      H.DRAW_CHARS,
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
      H.DRAW_CHARS,
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
      {}, this.textFillState_ = r), r.fillStyle = jn(
        o.getColor() || pi
      )) : (r = null, this.textFillState_ = r);
      const a = t.getStroke();
      if (!a)
        s = null, this.textStrokeState_ = s;
      else {
        s = this.textStrokeState_, s || (s = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = s);
        const p = a.getLineDash(), d = a.getLineDashOffset(), _ = a.getWidth(), m = a.getMiterLimit();
        s.lineCap = a.getLineCap() || Ko, s.lineDash = p ? p.slice() : zs, s.lineDashOffset = d === void 0 ? Vs : d, s.lineJoin = a.getLineJoin() || Ur, s.lineWidth = _ === void 0 ? Ws : _, s.miterLimit = m === void 0 ? Xs : m, s.strokeStyle = jn(
          a.getColor() || Ys
        );
      }
      n = this.textState_;
      const u = t.getFont() || Dh;
      Bp(u);
      const l = t.getScaleArray();
      n.overflow = t.getOverflow(), n.font = u, n.maxAngle = t.getMaxAngle(), n.placement = t.getPlacement(), n.textAlign = t.getTextAlign(), n.repeat = t.getRepeat(), n.justify = t.getJustify(), n.textBaseline = t.getTextBaseline() || Jo, n.backgroundFill = t.getBackgroundFill(), n.backgroundStroke = t.getBackgroundStroke(), n.padding = t.getPadding() || nr, n.scale = l === void 0 ? [1, 1] : l;
      const c = t.getOffsetX(), h = t.getOffsetY(), f = t.getRotateWithView(), g = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = c === void 0 ? 0 : c, this.textOffsetY_ = h === void 0 ? 0 : h, this.textRotateWithView_ = f === void 0 ? !1 : f, this.textRotation_ = g === void 0 ? 0 : g, this.strokeKey_ = s ? (typeof s.strokeStyle == "string" ? s.strokeStyle : Kt(s.strokeStyle)) + s.lineCap + s.lineDashOffset + "|" + s.lineWidth + s.lineJoin + s.miterLimit + "[" + s.lineDash.join() + "]" : "", this.textKey_ = n.font + n.scale + (n.textAlign || "?") + (n.repeat || "?") + (n.justify || "?") + (n.textBaseline || "?"), this.fillKey_ = r ? typeof r.fillStyle == "string" ? r.fillStyle : "|" + Kt(r.fillStyle) : "";
    }
    this.declutterImageWithText_ = e;
  }
}
const Gd = {
  Circle: tc,
  Default: go,
  Image: Od,
  LineString: Md,
  Polygon: tc,
  Text: kd
};
class Bd {
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
      const o = Gd[e];
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
const ec = Bd;
class zd extends $c {
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
    return ft();
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
    return ft();
  }
  /**
   * Render the layer.
   * @abstract
   * @param {import("../Map.js").FrameState} frameState Frame state.
   * @param {HTMLElement} target Target that may be used to render content to.
   * @return {HTMLElement} The rendered element.
   */
  renderFrame(t, e) {
    return ft();
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
    t.target.getState() === bt.LOADED && this.renderIfReadyAndVisible();
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
    return e != bt.LOADED && e != bt.ERROR && t.addEventListener(cn.CHANGE, this.boundHandleImageChange_), e == bt.IDLE && (t.load(), e = t.getState()), e == bt.LOADED;
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
const Vd = zd;
class Xd extends lo {
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
const Yd = Xd, nc = [];
let Ar = null;
function Ud() {
  Ar = On(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class Wd extends Vd {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = ki(), this.pixelTransform = ki(), this.inversePixelTransform = ki(), this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(t, e, n) {
    Ar || Ud(), Ar.clearRect(0, 0, 1, 1);
    let r;
    try {
      Ar.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), r = Ar.getImageData(0, 0, 1, 1).data;
    } catch {
      return Ar = null, null;
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
    if (t && t.className === r && (!n || t && t.style.backgroundColor && fs(
      Zo(t.style.backgroundColor),
      Zo(n)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused && (this.container = null, this.context = null, this.containerReused = !1), !this.container) {
      s = document.createElement("div"), s.className = r;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = On();
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
    const r = sh(n), s = oh(n), o = rh(n), a = ih(n);
    Le(e.coordinateToPixelTransform, r), Le(e.coordinateToPixelTransform, s), Le(e.coordinateToPixelTransform, o), Le(e.coordinateToPixelTransform, a);
    const u = this.inversePixelTransform;
    Le(u, r), Le(u, s), Le(u, o), Le(u, a), t.save(), t.beginPath(), t.moveTo(Math.round(r[0]), Math.round(r[1])), t.lineTo(Math.round(s[0]), Math.round(s[1])), t.lineTo(Math.round(o[0]), Math.round(o[1])), t.lineTo(Math.round(a[0]), Math.round(a[1])), t.clip();
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
      const s = new Yd(
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
    this.frameState = e, this.dispatchRenderEvent_(nu.PRERENDER, t, e);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(t, e) {
    this.dispatchRenderEvent_(nu.POSTRENDER, t, e);
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
    return co(
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
const qd = Wd;
function Hd(i, t, e, n, r, s, o, a, u, l, c, h) {
  let f = i[t], g = i[t + 1], p = 0, d = 0, _ = 0, m = 0;
  function y() {
    p = f, d = g, t += n, f = i[t], g = i[t + 1], m += _, _ = Math.sqrt((f - p) * (f - p) + (g - d) * (g - d));
  }
  do
    y();
  while (t < e - n && m + _ < s);
  let E = _ === 0 ? 0 : (s - m) / _;
  const I = ze(p, f, E), S = ze(d, g, E), w = t - n, b = m, L = s + a * u(l, r, c);
  for (; t < e - n && m + _ < L; )
    y();
  E = _ === 0 ? 0 : (L - m) / _;
  const P = ze(p, f, E), G = ze(d, g, E);
  let B;
  if (h) {
    const k = [I, S, P, G];
    _h(k, 0, 4, 2, h, k, k), B = k[0] > k[2];
  } else
    B = I > P;
  const Y = Math.PI, U = [], T = w + n === t;
  t = w, _ = 0, m = b, f = i[t], g = i[t + 1];
  let O;
  if (T) {
    y(), O = Math.atan2(g - d, f - p), B && (O += O > 0 ? -Y : Y);
    const k = (P + I) / 2, z = (G + S) / 2;
    return U[0] = [k, z, (L - s) / 2, O, r], U;
  }
  r = r.replace(/\n/g, " ");
  for (let k = 0, z = r.length; k < z; ) {
    y();
    let Z = Math.atan2(g - d, f - p);
    if (B && (Z += Z > 0 ? -Y : Y), O !== void 0) {
      let me = Z - O;
      if (me += me > Y ? -2 * Y : me < -Y ? 2 * Y : 0, Math.abs(me) > o)
        return null;
    }
    O = Z;
    const at = k;
    let It = 0;
    for (; k < z; ++k) {
      const me = B ? z - k - 1 : k, ke = a * u(l, r[me], c);
      if (t + n < e && m + _ < s + It + ke / 2)
        break;
      It += ke;
    }
    if (k === at)
      continue;
    const Ft = B ? r.substring(z - at, z - k) : r.substring(at, k);
    E = _ === 0 ? 0 : (s + It / 2 - m) / _;
    const D = ze(p, f, E), Qe = ze(d, g, E);
    U.push([D, Qe, It / 2, Z, Ft]), s += It;
  }
  return U;
}
const br = or(), Li = [], ci = [], hi = [], Pi = [];
function ic(i) {
  return i[3].declutterBox;
}
const jd = new RegExp(
  /* eslint-disable prettier/prettier */
  "[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]"
  /* eslint-enable prettier/prettier */
);
function rc(i, t) {
  return (t === "start" || t === "end") && !jd.test(i) && (t = t === "start" ? "left" : "right"), bs[t];
}
function Zd(i, t, e) {
  return e > 0 && i.push(`
`, ""), i.push(t, ""), i;
}
class Kd {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(t, e, n, r) {
    this.overlaps = n, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = r.instructions, this.coordinates = r.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = ki(), this.hitDetectionInstructions = r.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r.fillStates || {}, this.strokeStates = r.strokeStates || {}, this.textStates = r.textStates || {}, this.widths_ = {}, this.labels_ = {};
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
    ], h = Array.isArray(t), f = u.justify ? bs[u.justify] : rc(
      Array.isArray(t) ? t[0] : t,
      u.textAlign || Us
    ), g = r && o.lineWidth ? o.lineWidth : 0, p = h ? t : t.split(`
`).reduce(Zd, []), { width: d, height: _, widths: m, heights: y, lineWidths: E } = Vp(
      u,
      p
    ), I = d + g, S = [], w = (I + 2) * c[0], b = (_ + g) * c[1], L = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: b < 0 ? Math.floor(b) : Math.ceil(b),
      contextInstructions: S
    };
    (c[0] != 1 || c[1] != 1) && S.push("scale", c), r && (S.push("strokeStyle", o.strokeStyle), S.push("lineWidth", g), S.push("lineCap", o.lineCap), S.push("lineJoin", o.lineJoin), S.push("miterLimit", o.miterLimit), S.push("setLineDash", [o.lineDash]), S.push("lineDashOffset", o.lineDashOffset)), n && S.push("fillStyle", a.fillStyle), S.push("textBaseline", "middle"), S.push("textAlign", "center");
    const P = 0.5 - f;
    let G = f * I + P * g;
    const B = [], Y = [];
    let U = 0, T = 0, O = 0, k = 0, z;
    for (let Z = 0, at = p.length; Z < at; Z += 2) {
      const It = p[Z];
      if (It === `
`) {
        T += U, U = 0, G = f * I + P * g, ++k;
        continue;
      }
      const Ft = p[Z + 1] || u.font;
      Ft !== z && (r && B.push("font", Ft), n && Y.push("font", Ft), z = Ft), U = Math.max(U, y[O]);
      const D = [
        It,
        G + P * m[O] + f * (m[O] - E[k]),
        0.5 * (g + U) + T
      ];
      G += m[O], r && B.push("strokeText", D), n && Y.push("fillText", D), ++O;
    }
    return Array.prototype.push.apply(S, B), Array.prototype.push.apply(S, Y), this.labels_[s] = L, L;
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
  calculateImageOrLabelDimensions_(t, e, n, r, s, o, a, u, l, c, h, f, g, p, d, _) {
    a *= f[0], u *= f[1];
    let m = n - a, y = r - u;
    const E = s + l > t ? t - l : s, I = o + c > e ? e - c : o, S = p[3] + E * f[0] + p[1], w = p[0] + I * f[1] + p[2], b = m - p[3], L = y - p[0];
    (d || h !== 0) && (Li[0] = b, Pi[0] = b, Li[1] = L, ci[1] = L, ci[0] = b + S, hi[0] = ci[0], hi[1] = L + w, Pi[1] = hi[1]);
    let P;
    return h !== 0 ? (P = co(
      ki(),
      n,
      r,
      1,
      1,
      h,
      -n,
      -r
    ), Le(P, Li), Le(P, ci), Le(P, hi), Le(P, Pi), ar(
      Math.min(Li[0], ci[0], hi[0], Pi[0]),
      Math.min(Li[1], ci[1], hi[1], Pi[1]),
      Math.max(Li[0], ci[0], hi[0], Pi[0]),
      Math.max(Li[1], ci[1], hi[1], Pi[1]),
      br
    )) : ar(
      Math.min(b, b + S),
      Math.min(L, L + w),
      Math.max(b, b + S),
      Math.max(L, L + w),
      br
    ), g && (m = Math.round(m), y = Math.round(y)), {
      drawImageX: m,
      drawImageY: y,
      drawImageW: E,
      drawImageH: I,
      originX: l,
      originY: c,
      declutterBox: {
        minX: br[0],
        minY: br[1],
        maxX: br[2],
        maxY: br[3],
        value: _
      },
      canvasTransform: P,
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
      Li,
      ci,
      hi,
      Pi,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), Xp(
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
      const e = Le(this.renderedTransform_, [0, 0]), n = 512 * this.pixelRatio;
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
    const s = this.textStates[e], o = this.createLabel(t, e, r, n), a = this.strokeStates[n], u = this.pixelRatio, l = rc(
      Array.isArray(t) ? t[0] : t,
      s.textAlign || Us
    ), c = bs[s.textBaseline || Jo], h = a && a.lineWidth ? a.lineWidth : 0, f = o.width / u - 2 * s.scale[0], g = l * f + 2 * (0.5 - l) * h, p = c * o.height / u + 2 * (0.5 - c) * h;
    return {
      label: o,
      anchorX: g,
      anchorY: p
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
    this.pixelCoordinates_ && fs(n, this.renderedTransform_) ? l = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l = sr(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      n,
      this.pixelCoordinates_
    ), dg(this.renderedTransform_, n));
    let c = 0;
    const h = r.length;
    let f = 0, g, p, d, _, m, y, E, I, S, w, b, L, P = 0, G = 0, B = null, Y = null;
    const U = this.coordinateCache_, T = this.viewRotation_, O = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12, k = (
      /** @type {import("../../render.js").State} */
      {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: T
      }
    ), z = this.instructions != r || this.overlaps ? 0 : 200;
    let Z, at, It, Ft;
    for (; c < h; ) {
      const D = r[c];
      switch (
        /** @type {import("./Instruction.js").default} */
        D[0]
      ) {
        case H.BEGIN_GEOMETRY:
          Z = /** @type {import("../../Feature.js").FeatureLike} */
          D[1], Ft = D[3], Z.getGeometry() ? a !== void 0 && !Nn(a, Ft.getExtent()) ? c = /** @type {number} */
          D[2] + 1 : ++c : c = /** @type {number} */
          D[2];
          break;
        case H.BEGIN_PATH:
          P > z && (this.fill_(t), P = 0), G > z && (t.stroke(), G = 0), !P && !G && (t.beginPath(), _ = NaN, m = NaN), ++c;
          break;
        case H.CIRCLE:
          f = /** @type {number} */
          D[1];
          const me = l[f], ke = l[f + 1], Gf = l[f + 2], Bf = l[f + 3], hl = Gf - me, fl = Bf - ke, gl = Math.sqrt(hl * hl + fl * fl);
          t.moveTo(me + gl, ke), t.arc(me, ke, gl, 0, 2 * Math.PI, !0), ++c;
          break;
        case H.CLOSE_PATH:
          t.closePath(), ++c;
          break;
        case H.CUSTOM:
          f = /** @type {number} */
          D[1], g = D[2];
          const zf = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            D[3]
          ), Vf = D[4], pl = D.length == 6 ? D[5] : void 0;
          k.geometry = zf, k.feature = Z, c in U || (U[c] = []);
          const ys = U[c];
          pl ? pl(l, f, g, 2, ys) : (ys[0] = l[f], ys[1] = l[f + 1], ys.length = 2), Vf(ys, k), ++c;
          break;
        case H.DRAW_IMAGE:
          f = /** @type {number} */
          D[1], g = /** @type {number} */
          D[2], I = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          D[3], p = /** @type {number} */
          D[4], d = /** @type {number} */
          D[5];
          let Ta = (
            /** @type {number} */
            D[6]
          );
          const Xf = (
            /** @type {number} */
            D[7]
          ), Yf = (
            /** @type {number} */
            D[8]
          ), Uf = (
            /** @type {number} */
            D[9]
          ), dl = (
            /** @type {boolean} */
            D[10]
          );
          let Oa = (
            /** @type {number} */
            D[11]
          );
          const Wf = (
            /** @type {import("../../size.js").Size} */
            D[12]
          );
          let Co = (
            /** @type {number} */
            D[13]
          );
          const _l = (
            /** @type {"declutter"|"obstacle"|"none"|undefined} */
            D[14]
          ), vs = (
            /** @type {import("../canvas.js").DeclutterImageWithText} */
            D[15]
          );
          if (!I && D.length >= 20) {
            S = /** @type {string} */
            D[19], w = /** @type {string} */
            D[20], b = /** @type {string} */
            D[21], L = /** @type {string} */
            D[22];
            const Ge = this.drawLabelWithPointPlacement_(
              S,
              w,
              b,
              L
            );
            I = Ge.label, D[3] = I;
            const Pr = (
              /** @type {number} */
              D[23]
            );
            p = (Ge.anchorX - Pr) * this.pixelRatio, D[4] = p;
            const $e = (
              /** @type {number} */
              D[24]
            );
            d = (Ge.anchorY - $e) * this.pixelRatio, D[5] = d, Ta = I.height, D[6] = Ta, Co = I.width, D[13] = Co;
          }
          let ba;
          D.length > 25 && (ba = /** @type {number} */
          D[25]);
          let Ma, Io, So;
          D.length > 17 ? (Ma = /** @type {Array<number>} */
          D[16], Io = /** @type {boolean} */
          D[17], So = /** @type {boolean} */
          D[18]) : (Ma = nr, Io = !1, So = !1), dl && O ? Oa += T : !dl && !O && (Oa -= T);
          let qf = 0;
          for (; f < g; f += 2) {
            if (ba && ba[qf++] < Co / this.pixelRatio)
              continue;
            const Ge = this.calculateImageOrLabelDimensions_(
              I.width,
              I.height,
              l[f],
              l[f + 1],
              Co,
              Ta,
              p,
              d,
              Yf,
              Uf,
              Oa,
              Wf,
              s,
              Ma,
              Io || So,
              Z
            ), Pr = [
              t,
              e,
              I,
              Ge,
              Xf,
              Io ? (
                /** @type {Array<*>} */
                B
              ) : null,
              So ? (
                /** @type {Array<*>} */
                Y
              ) : null
            ];
            if (u) {
              if (_l === "none")
                continue;
              if (_l === "obstacle") {
                u.insert(Ge.declutterBox);
                continue;
              } else {
                let $e, ai;
                if (vs) {
                  const Be = g - f;
                  if (!vs[Be]) {
                    vs[Be] = Pr;
                    continue;
                  }
                  if ($e = vs[Be], delete vs[Be], ai = ic($e), u.collides(ai))
                    continue;
                }
                if (u.collides(Ge.declutterBox))
                  continue;
                $e && (u.insert(ai), this.replayImageOrLabel_.apply(this, $e)), u.insert(Ge.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Pr);
          }
          ++c;
          break;
        case H.DRAW_CHARS:
          const ml = (
            /** @type {number} */
            D[1]
          ), yl = (
            /** @type {number} */
            D[2]
          ), Da = (
            /** @type {number} */
            D[3]
          ), Hf = (
            /** @type {number} */
            D[4]
          );
          L = /** @type {string} */
          D[5];
          const jf = (
            /** @type {number} */
            D[6]
          ), vl = (
            /** @type {number} */
            D[7]
          ), El = (
            /** @type {number} */
            D[8]
          );
          b = /** @type {string} */
          D[9];
          const Aa = (
            /** @type {number} */
            D[10]
          );
          S = /** @type {string} */
          D[11], w = /** @type {string} */
          D[12];
          const xl = [
            /** @type {number} */
            D[13],
            /** @type {number} */
            D[13]
          ], Fa = this.textStates[w], Es = Fa.font, xs = [
            Fa.scale[0] * vl,
            Fa.scale[1] * vl
          ];
          let Cs;
          Es in this.widths_ ? Cs = this.widths_[Es] : (Cs = {}, this.widths_[Es] = Cs);
          const Cl = Ph(l, ml, yl, 2), Il = Math.abs(xs[0]) * Vl(Es, S, Cs);
          if (Hf || Il <= Cl) {
            const Ge = this.textStates[w].textAlign, Pr = (Cl - Il) * bs[Ge], $e = Hd(
              l,
              ml,
              yl,
              2,
              S,
              Pr,
              jf,
              Math.abs(xs[0]),
              Vl,
              Es,
              Cs,
              O ? 0 : this.viewRotation_
            );
            t:
              if ($e) {
                const ai = [];
                let Be, Ro, wo, Ne, tn;
                if (b)
                  for (Be = 0, Ro = $e.length; Be < Ro; ++Be) {
                    tn = $e[Be], wo = /** @type {string} */
                    tn[4], Ne = this.createLabel(wo, w, "", b), p = /** @type {number} */
                    tn[2] + (xs[0] < 0 ? -Aa : Aa), d = Da * Ne.height + (0.5 - Da) * 2 * Aa * xs[1] / xs[0] - El;
                    const ui = this.calculateImageOrLabelDimensions_(
                      Ne.width,
                      Ne.height,
                      tn[0],
                      tn[1],
                      Ne.width,
                      Ne.height,
                      p,
                      d,
                      0,
                      0,
                      tn[3],
                      xl,
                      !1,
                      nr,
                      !1,
                      Z
                    );
                    if (u && u.collides(ui.declutterBox))
                      break t;
                    ai.push([
                      t,
                      e,
                      Ne,
                      ui,
                      1,
                      null,
                      null
                    ]);
                  }
                if (L)
                  for (Be = 0, Ro = $e.length; Be < Ro; ++Be) {
                    tn = $e[Be], wo = /** @type {string} */
                    tn[4], Ne = this.createLabel(wo, w, L, ""), p = /** @type {number} */
                    tn[2], d = Da * Ne.height - El;
                    const ui = this.calculateImageOrLabelDimensions_(
                      Ne.width,
                      Ne.height,
                      tn[0],
                      tn[1],
                      Ne.width,
                      Ne.height,
                      p,
                      d,
                      0,
                      0,
                      tn[3],
                      xl,
                      !1,
                      nr,
                      !1,
                      Z
                    );
                    if (u && u.collides(ui.declutterBox))
                      break t;
                    ai.push([
                      t,
                      e,
                      Ne,
                      ui,
                      1,
                      null,
                      null
                    ]);
                  }
                u && u.load(ai.map(ic));
                for (let ui = 0, Zf = ai.length; ui < Zf; ++ui)
                  this.replayImageOrLabel_.apply(this, ai[ui]);
              }
          }
          ++c;
          break;
        case H.END_GEOMETRY:
          if (o !== void 0) {
            Z = /** @type {import("../../Feature.js").FeatureLike} */
            D[1];
            const Ge = o(Z, Ft);
            if (Ge)
              return Ge;
          }
          ++c;
          break;
        case H.FILL:
          z ? P++ : this.fill_(t), ++c;
          break;
        case H.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          D[1], g = /** @type {number} */
          D[2], at = l[f], It = l[f + 1], y = at + 0.5 | 0, E = It + 0.5 | 0, (y !== _ || E !== m) && (t.moveTo(at, It), _ = y, m = E), f += 2; f < g; f += 2)
            at = l[f], It = l[f + 1], y = at + 0.5 | 0, E = It + 0.5 | 0, (f == g - 2 || y !== _ || E !== m) && (t.lineTo(at, It), _ = y, m = E);
          ++c;
          break;
        case H.SET_FILL_STYLE:
          B = D, this.alignFill_ = D[2], P && (this.fill_(t), P = 0, G && (t.stroke(), G = 0)), t.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          D[1], ++c;
          break;
        case H.SET_STROKE_STYLE:
          Y = D, G && (t.stroke(), G = 0), this.setStrokeStyle_(
            t,
            /** @type {Array<*>} */
            D
          ), ++c;
          break;
        case H.STROKE:
          z ? G++ : t.stroke(), ++c;
          break;
        default:
          ++c;
          break;
      }
    }
    P && this.fill_(t), G && t.stroke();
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
const Jd = Kd, Xa = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class Qd {
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
    this.maxExtent_ = t, this.overlaps_ = r, this.pixelRatio_ = n, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = ki(), this.createExecutors_(s);
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
        n[s] = new Jd(
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
    const a = r * 2 + 1, u = co(
      this.hitDetectionTransform_,
      r + 0.5,
      r + 0.5,
      1 / e,
      -1 / e,
      -n,
      -t[0],
      -t[1]
    ), l = !this.hitDetectionContext_;
    l && (this.hitDetectionContext_ = On(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const c = this.hitDetectionContext_;
    c.canvas.width !== a || c.canvas.height !== a ? (c.canvas.width = a, c.canvas.height = a) : l || c.clearRect(0, 0, a, a);
    let h;
    this.renderBuffer_ !== void 0 && (h = or(), Rg(h, t), Lu(
      h,
      e * (this.renderBuffer_ + r),
      h
    ));
    const f = $d(r);
    let g;
    function p(S, w) {
      const b = c.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let L = 0, P = f.length; L < P; L++)
        if (b[f[L]] > 0) {
          if (!o || g !== "Image" && g !== "Text" || o.includes(S)) {
            const G = (f[L] - 3) / 4, B = r - G % a, Y = r - (G / a | 0), U = s(S, w, B * B + Y * Y);
            if (U)
              return U;
          }
          c.clearRect(0, 0, a, a);
          break;
        }
    }
    const d = Object.keys(this.executorsByZIndex_).map(Number);
    d.sort(Ds);
    let _, m, y, E, I;
    for (_ = d.length - 1; _ >= 0; --_) {
      const S = d[_].toString();
      for (y = this.executorsByZIndex_[S], m = Xa.length - 1; m >= 0; --m)
        if (g = Xa[m], E = y[g], E !== void 0 && (I = E.executeHitDetection(
          c,
          u,
          n,
          p,
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
    const n = e[0], r = e[1], s = e[2], o = e[3], a = [n, r, n, o, s, o, s, r];
    return sr(a, 0, 8, 2, t, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return Fs(this.executorsByZIndex_);
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
    u.sort(Ds), this.maxExtent_ && (t.save(), this.clip(t, n)), o = o || Xa;
    let l, c, h, f, g, p;
    for (a && u.reverse(), l = 0, c = u.length; l < c; ++l) {
      const d = u[l].toString();
      for (g = this.executorsByZIndex_[d], h = 0, f = o.length; h < f; ++h) {
        const _ = o[h];
        p = g[_], p !== void 0 && p.execute(
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
const Ya = {};
function $d(i) {
  if (Ya[i] !== void 0)
    return Ya[i];
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
  return Ya[i] = r, r;
}
const sc = Qd;
class t_ extends Vh {
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
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = n, this.transform_ = r, this.transformRotation_ = r ? qg(Math.atan2(r[1], r[0]), 10) : 0, this.viewRotation_ = s, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = ki();
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
    const s = sr(
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
        const p = f + this.imageAnchorX_, d = g + this.imageAnchorY_;
        co(
          a,
          p,
          d,
          1,
          1,
          l,
          -p,
          -d
        ), o.setTransform.apply(o, a), o.translate(p, d), o.scale(this.imageScale_[0], this.imageScale_[1]), o.drawImage(
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
    const s = sr(
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
    const o = this.context_, a = sr(
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
    )), !!Nn(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = hp(
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
    )), !!Nn(this.extent_, t.getExtent())) {
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
    if (Nn(this.extent_, e)) {
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
    )), !!Nn(this.extent_, t.getExtent())) {
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
    )), !!Nn(this.extent_, t.getExtent())) {
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
    n ? (n.lineCap != t.lineCap && (n.lineCap = t.lineCap, e.lineCap = t.lineCap), fs(n.lineDash, t.lineDash) || e.setLineDash(
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
    const e = this.context_, n = this.contextTextState_, r = t.textAlign ? t.textAlign : Us;
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
        fillStyle: jn(
          n || pi
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const n = e.getColor(), r = e.getLineCap(), s = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), u = e.getWidth(), l = e.getMiterLimit(), c = s || zs;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : Ko,
        lineDash: this.pixelRatio_ === 1 ? c : c.map((h) => h * this.pixelRatio_),
        lineDashOffset: (o || Vs) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Ur,
        lineWidth: (u !== void 0 ? u : Ws) * this.pixelRatio_,
        miterLimit: l !== void 0 ? l : Xs,
        strokeStyle: jn(
          n || Ys
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
          fillStyle: jn(
            g || pi
          )
        };
      }
      const n = t.getStroke();
      if (!n)
        this.textStrokeState_ = null;
      else {
        const g = n.getColor(), p = n.getLineCap(), d = n.getLineDash(), _ = n.getLineDashOffset(), m = n.getLineJoin(), y = n.getWidth(), E = n.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: p !== void 0 ? p : Ko,
          lineDash: d || zs,
          lineDashOffset: _ || Vs,
          lineJoin: m !== void 0 ? m : Ur,
          lineWidth: y !== void 0 ? y : Ws,
          miterLimit: E !== void 0 ? E : Xs,
          strokeStyle: jn(
            g || Ys
          )
        };
      }
      const r = t.getFont(), s = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), u = t.getRotation(), l = t.getScaleArray(), c = t.getText(), h = t.getTextAlign(), f = t.getTextBaseline();
      this.textState_ = {
        font: r !== void 0 ? r : Dh,
        textAlign: h !== void 0 ? h : Us,
        textBaseline: f !== void 0 ? f : Jo
      }, this.text_ = c !== void 0 ? Array.isArray(c) ? c.reduce((g, p, d) => g += d % 2 ? " " : p, "") : c : "", this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = u !== void 0 ? u : 0, this.textScale_ = [
        this.pixelRatio_ * l[0],
        this.pixelRatio_ * l[1]
      ];
    }
  }
}
const e_ = t_, Hn = 0.5;
function n_(i, t, e, n, r, s, o) {
  const a = i[0] * Hn, u = i[1] * Hn, l = On(a, u);
  l.imageSmoothingEnabled = !1;
  const c = l.canvas, h = new e_(
    l,
    Hn,
    r,
    null,
    o
  ), f = e.length, g = Math.floor((256 * 256 * 256 - 1) / f), p = {};
  for (let _ = 1; _ <= f; ++_) {
    const m = e[_ - 1], y = m.getStyleFunction() || n;
    if (!n)
      continue;
    let E = y(m, s);
    if (!E)
      continue;
    Array.isArray(E) || (E = [E]);
    const S = (_ * g).toString(16).padStart(7, "#00000");
    for (let w = 0, b = E.length; w < b; ++w) {
      const L = E[w], P = L.getGeometryFunction()(m);
      if (!P || !Nn(r, P.getExtent()))
        continue;
      const G = L.clone(), B = G.getFill();
      B && B.setColor(S);
      const Y = G.getStroke();
      Y && (Y.setColor(S), Y.setLineDash(null)), G.setText(void 0);
      const U = L.getImage();
      if (U && U.getOpacity() !== 0) {
        const z = U.getImageSize();
        if (!z)
          continue;
        const Z = On(
          z[0],
          z[1],
          void 0,
          { alpha: !1 }
        ), at = Z.canvas;
        Z.fillStyle = S, Z.fillRect(0, 0, at.width, at.height), G.setImage(
          new Hu({
            img: at,
            imgSize: z,
            anchor: U.getAnchor(),
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            offset: U.getOrigin(),
            opacity: 1,
            size: U.getSize(),
            scale: U.getScale(),
            rotation: U.getRotation(),
            rotateWithView: U.getRotateWithView()
          })
        );
      }
      const T = G.getZIndex() || 0;
      let O = p[T];
      O || (O = {}, p[T] = O, O.Polygon = [], O.Circle = [], O.LineString = [], O.Point = []);
      const k = P.getType();
      if (k === "GeometryCollection") {
        const z = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          P.getGeometriesArrayRecursive()
        );
        for (let Z = 0, at = z.length; Z < at; ++Z) {
          const It = z[Z];
          O[It.getType().replace("Multi", "")].push(
            It,
            G
          );
        }
      } else
        O[k.replace("Multi", "")].push(P, G);
    }
  }
  const d = Object.keys(p).map(Number).sort(Ds);
  for (let _ = 0, m = d.length; _ < m; ++_) {
    const y = p[d[_]];
    for (const E in y) {
      const I = y[E];
      for (let S = 0, w = I.length; S < w; S += 2) {
        h.setStyle(I[S + 1]);
        for (let b = 0, L = t.length; b < L; ++b)
          h.setTransform(t[b]), h.drawGeometry(I[S]);
      }
    }
  }
  return l.getImageData(0, 0, c.width, c.height);
}
function i_(i, t, e) {
  const n = [];
  if (e) {
    const r = Math.floor(Math.round(i[0]) * Hn), s = Math.floor(Math.round(i[1]) * Hn), o = (he(r, 0, e.width - 1) + he(s, 0, e.height - 1) * e.width) * 4, a = e.data[o], u = e.data[o + 1], c = e.data[o + 2] + 256 * (u + 256 * a), h = Math.floor((256 * 256 * 256 - 1) / t.length);
    c && c % h === 0 && n.push(t[c / h - 1]);
  }
  return n;
}
const r_ = 0.5, Xh = {
  Point: g_,
  LineString: c_,
  Polygon: d_,
  MultiPoint: p_,
  MultiLineString: h_,
  MultiPolygon: f_,
  GeometryCollection: l_,
  Circle: a_
};
function s_(i, t) {
  return parseInt(Kt(i), 10) - parseInt(Kt(t), 10);
}
function o_(i, t) {
  const e = au(i, t);
  return e * e;
}
function au(i, t) {
  return r_ * i / t;
}
function a_(i, t, e, n, r) {
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
function oc(i, t, e, n, r, s, o) {
  let a = !1;
  const u = e.getImage();
  if (u) {
    const l = u.getImageState();
    l == bt.LOADED || l == bt.ERROR ? u.unlistenImageChange(r) : (l == bt.IDLE && u.load(), u.listenImageChange(r), a = !0);
  }
  return u_(
    i,
    t,
    e,
    n,
    s,
    o
  ), a;
}
function u_(i, t, e, n, r, s) {
  const o = e.getGeometryFunction()(t);
  if (!o)
    return;
  const a = o.simplifyTransformed(
    n,
    r
  );
  if (e.getRenderer())
    Yh(i, a, e, t);
  else {
    const l = Xh[a.getType()];
    l(
      i,
      a,
      e,
      t,
      s
    );
  }
}
function Yh(i, t, e, n) {
  if (t.getType() == "GeometryCollection") {
    const s = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      t.getGeometries()
    );
    for (let o = 0, a = s.length; o < a; ++o)
      Yh(i, s[o], e, n);
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
function l_(i, t, e, n, r) {
  const s = t.getGeometriesArray();
  let o, a;
  for (o = 0, a = s.length; o < a; ++o) {
    const u = Xh[s[o].getType()];
    u(
      i,
      s[o],
      e,
      n,
      r
    );
  }
}
function c_(i, t, e, n, r) {
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
function h_(i, t, e, n, r) {
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
function f_(i, t, e, n, r) {
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
function g_(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != bt.LOADED)
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
function p_(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != bt.LOADED)
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
function d_(i, t, e, n, r) {
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
class __ extends qd {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = or(), this.wrappedRenderedExtent_ = or(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(t, e, n) {
    const r = e.extent, s = e.viewState, o = s.center, a = s.resolution, u = s.projection, l = s.rotation, c = u.getExtent(), h = this.getLayer().getSource(), f = e.pixelRatio, g = e.viewHints, p = !(g[rn.ANIMATING] || g[rn.INTERACTING]), d = this.compositionContext_, _ = Math.round(e.size[0] * f), m = Math.round(e.size[1] * f), y = h.getWrapX() && u.canWrapX(), E = y ? an(c) : null, I = y ? Math.ceil((r[2] - c[2]) / E) + 1 : 1;
    let S = y ? Math.floor((r[0] - c[0]) / E) : 0;
    do {
      const w = this.getRenderTransform(
        o,
        a,
        l,
        f,
        _,
        m,
        S * E
      );
      t.execute(
        d,
        1,
        w,
        l,
        p,
        void 0,
        n
      );
    } while (++S < I);
  }
  setupCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = On(
        this.context.canvas.width,
        this.context.canvas.height,
        nc
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, kp(this.compositionContext_), nc.push(this.compositionContext_.canvas), this.compositionContext_ = null;
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
    _g(this.pixelTransform, 1 / n, 1 / n), mg(this.inversePixelTransform, this.pixelTransform);
    const s = vg(this.pixelTransform);
    this.useContainer(e, s, this.getBackground(t));
    const o = this.context, a = o.canvas, u = this.replayGroup_, l = this.declutterExecutorGroup;
    if ((!u || u.isEmpty()) && (!l || l.isEmpty()))
      return null;
    const c = Math.round(t.size[0] * n), h = Math.round(t.size[1] * n);
    a.width != c || a.height != h ? (a.width = c, a.height = h, a.style.transform !== s && (a.style.transform = s)) : this.containerReused || o.clearRect(0, 0, c, h), this.preRender(o, t);
    const f = t.viewState;
    f.projection, this.opacity_ = r.opacity, this.setupCompositionContext_();
    let g = !1, p = !0;
    if (r.extent && this.clipping) {
      const d = Ns(r.extent);
      p = Nn(d, t.extent), g = p && !kr(d, t.extent), g && this.clipUnrotated(this.compositionContext_, t, d);
    }
    return p && this.renderWorlds(u, t), g && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, t), this.renderedRotation_ !== f.rotation && (this.renderedRotation_ = f.rotation, this.hitDetectionImageData_ = null), this.container;
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
        Le(this.pixelTransform, n);
        const r = this.renderedCenter_, s = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, u = this.wrappedRenderedExtent_, l = this.getLayer(), c = [], h = n[0] * Hn, f = n[1] * Hn;
        c.push(
          this.getRenderTransform(
            r,
            s,
            o,
            Hn,
            h,
            f,
            0
          ).slice()
        );
        const g = l.getSource(), p = a.getExtent();
        if (g.getWrapX() && a.canWrapX() && !kr(p, u)) {
          let d = u[0];
          const _ = an(p);
          let m = 0, y;
          for (; d < p[0]; )
            --m, y = _ * m, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Hn,
                h,
                f,
                y
              ).slice()
            ), d += _;
          for (m = 0, d = u[2]; d > p[2]; )
            ++m, y = _ * m, c.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Hn,
                h,
                f,
                y
              ).slice()
            ), d -= _;
        }
        this.hitDetectionImageData_ = n_(
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
        i_(t, this.renderedFeatures_, this.hitDetectionImageData_)
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
    const o = e.viewState.resolution, a = e.viewState.rotation, u = this.getLayer(), l = {}, c = function(g, p, d) {
      const _ = Kt(g), m = l[_];
      if (m) {
        if (m !== !0 && d < m.distanceSq) {
          if (d === 0)
            return l[_] = !0, s.splice(s.lastIndexOf(m), 1), r(g, u, p);
          m.geometry = p, m.distanceSq = d;
        }
      } else {
        if (d === 0)
          return l[_] = !0, r(g, u, p);
        s.push(
          l[_] = {
            feature: g,
            layer: u,
            geometry: p,
            distanceSq: d,
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
      g === this.declutterExecutorGroup && e.declutterTree ? e.declutterTree.all().map((p) => p.value) : null
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
    const r = t.viewHints[rn.ANIMATING], s = t.viewHints[rn.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && r || !a && s)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const u = t.extent, l = t.viewState, c = l.projection, h = l.resolution, f = t.pixelRatio, g = e.getRevision(), p = e.getRenderBuffer();
    let d = e.getRenderOrder();
    d === void 0 && (d = s_);
    const _ = l.center.slice(), m = Lu(
      u,
      p * h
    ), y = m.slice(), E = [m.slice()], I = c.getExtent();
    if (n.getWrapX() && c.canWrapX() && !kr(I, t.extent)) {
      const O = an(I), k = Math.max(an(m) / 2, O);
      m[0] = I[0] - k, m[2] = I[2] + k, Zg(_, c);
      const z = uh(E[0], c);
      z[0] < I[0] && z[2] < I[2] ? E.push([
        z[0] + O,
        z[1],
        z[2] + O,
        z[3]
      ]) : z[0] > I[0] && z[2] > I[2] && E.push([
        z[0] - O,
        z[1],
        z[2] - O,
        z[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == h && this.renderedRevision_ == g && this.renderedRenderOrder_ == d && kr(this.wrappedRenderedExtent_, m))
      return fs(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = _, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const S = new ec(
      au(h, f),
      m,
      h,
      f
    );
    let w;
    this.getLayer().getDeclutter() && (w = new ec(
      au(h, f),
      m,
      h,
      f
    ));
    let b;
    for (let O = 0, k = E.length; O < k; ++O)
      n.loadFeatures(E[O], h, c);
    const L = o_(h, f);
    let P = !0;
    const G = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       */
      (O) => {
        let k;
        const z = O.getStyleFunction() || e.getStyleFunction();
        if (z && (k = z(O, h)), k) {
          const Z = this.renderFeature(
            O,
            L,
            k,
            S,
            b,
            w
          );
          P = P && !Z;
        }
      }
    ), B = dh(m), Y = n.getFeaturesInExtent(B);
    d && Y.sort(d);
    for (let O = 0, k = Y.length; O < k; ++O)
      G(Y[O]);
    this.renderedFeatures_ = Y, this.ready = P;
    const U = S.finish(), T = new sc(
      m,
      h,
      f,
      n.getOverlaps(),
      U,
      e.getRenderBuffer()
    );
    return w && (this.declutterExecutorGroup = new sc(
      m,
      h,
      f,
      n.getOverlaps(),
      w.finish(),
      e.getRenderBuffer()
    )), this.renderedResolution_ = h, this.renderedRevision_ = g, this.renderedRenderOrder_ = d, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = _, this.renderedProjection_ = c, this.replayGroup_ = T, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
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
        a = oc(
          r,
          t,
          n[u],
          e,
          this.boundHandleStyleImageChange_,
          s,
          o
        ) || a;
    else
      a = oc(
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
const m_ = __;
class y_ extends Nd {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new m_(this);
  }
}
const v_ = y_;
class E_ {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(t) {
    this.rbush_ = new zh(t), this.items_ = {};
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
    this.rbush_.insert(n), this.items_[Kt(e)] = n;
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
      n[r] = u, this.items_[Kt(a)] = u;
    }
    this.rbush_.load(n);
  }
  /**
   * Remove a value from the RBush.
   * @param {T} value Value.
   * @return {boolean} Removed.
   */
  remove(t) {
    const e = Kt(t), n = this.items_[e];
    return delete this.items_[e], this.rbush_.remove(n) !== null;
  }
  /**
   * Update the extent of a value in the RBush.
   * @param {import("../extent.js").Extent} extent Extent.
   * @param {T} value Value.
   */
  update(t, e) {
    const n = this.items_[Kt(e)], r = [n.minX, n.minY, n.maxX, n.maxY];
    eh(r, t) || (this.remove(e), this.insert(t, e));
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
    return Fs(this.items_);
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
    return ar(e.minX, e.minY, e.maxX, e.maxY, t);
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
const ac = E_;
class x_ extends xr {
  /**
   * @param {Options} options Source options.
   */
  constructor(t) {
    super(), this.projection = Yr(t.projection), this.attributions_ = uc(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
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
    this.attributions_ = uc(t), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function uc(i) {
  return i ? Array.isArray(i) ? function(t) {
    return i;
  } : typeof i == "function" ? i : function(t) {
    return [i];
  } : null;
}
const C_ = x_, Rn = {
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
function I_(i, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let S_ = !1;
function R_(i, t, e, n, r, s, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof i == "function" ? i(e, n, r) : i,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = S_, a.onload = function(u) {
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
function lc(i, t) {
  return function(e, n, r, s, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    R_(
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
      o || As
    );
  };
}
class Ti extends lo {
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>} [feature] Feature.
   * @param {Array<import("../Feature.js").default<Geometry>>} [features] Features.
   */
  constructor(t, e, n) {
    super(t), this.feature = e, this.features = n;
  }
}
class w_ extends C_ {
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
    }), this.on, this.once, this.un, this.loader_ = As, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (Ut(this.format_, 7), this.loader_ = lc(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : I_;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new ac() : null, this.loadedExtentsRtree_ = new ac(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n, r;
    Array.isArray(t.features) ? r = t.features : t.features && (n = t.features, r = n.getArray()), !e && n === void 0 && (n = new cg(r)), r !== void 0 && this.addFeaturesInternal(r), n !== void 0 && this.bindFeaturesCollection_(n);
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
    const e = Kt(t);
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
      new Ti(Rn.ADDFEATURE, t)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      Kn(e, cn.CHANGE, this.handleFeatureChange_, this),
      Kn(
        e,
        Kc.PROPERTYCHANGE,
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
    return r !== void 0 && (r.toString() in this.idIndex_ ? n = !1 : this.idIndex_[r.toString()] = e), n && (Ut(!(t in this.uidIndex_), 30), this.uidIndex_[t] = e), n;
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
      const a = t[s], u = Kt(a);
      this.addToIndex_(u, a) && n.push(a);
    }
    for (let s = 0, o = n.length; s < o; s++) {
      const a = n[s], u = Kt(a);
      this.setupChangeEvents_(u, a);
      const l = a.getGeometry();
      if (l) {
        const c = l.getExtent();
        e.push(c), r.push(a);
      } else
        this.nullGeometryFeatures_[u] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, r), this.hasListener(Rn.ADDFEATURE))
      for (let s = 0, o = n.length; s < o; s++)
        this.dispatchEvent(
          new Ti(Rn.ADDFEATURE, n[s])
        );
  }
  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      Rn.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.push(n.feature), e = !1);
      }
    ), this.addEventListener(
      Rn.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.remove(n.feature), e = !1);
      }
    ), t.addEventListener(
      Fr.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
       */
      (n) => {
        e || (e = !0, this.addFeature(n.element), e = !1);
      }
    ), t.addEventListener(
      Fr.REMOVE,
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
        this.featureChangeKeys_[n].forEach(Jn);
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
    const e = new Ti(Rn.CLEAR);
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
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), Fs(this.nullGeometryFeatures_) || gi(t, Object.values(this.nullGeometryFeatures_))), /** @type {Array<import("../Feature.js").default<Geometry>>} */
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
      const r = Mg(t, e);
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
    return e = e || ig, this.featuresRtree_.forEachInExtent(
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
    ), n = Kt(e), r = e.getGeometry();
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
      new Ti(Rn.CHANGEFEATURE, e)
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
    return e !== void 0 ? e in this.idIndex_ : Kt(t) in this.uidIndex_;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && Fs(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
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
          return kr(c.extent, u);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new Ti(Rn.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        u,
        e,
        n,
        (c) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Ti(
              Rn.FEATURESLOADEND,
              void 0,
              c
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Ti(Rn.FEATURESLOADERROR)
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
      if (eh(r.extent, t))
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
    const e = Kt(t);
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
    const e = Kt(t), n = this.featureChangeKeys_[e];
    if (!n)
      return;
    n.forEach(Jn), delete this.featureChangeKeys_[e];
    const r = t.getId();
    return r !== void 0 && delete this.idIndex_[r.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new Ti(Rn.REMOVEFEATURE, t)
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
    Ut(this.format_, 7), this.url_ = t, this.setLoader(lc(t, this.format_));
  }
}
const N_ = w_;
let L_ = class uu extends mh {
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
    this.changeEventsKeys_.forEach(Jn), this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(
          Kn(this.geometries_[t], cn.CHANGE, this.changed, this)
        );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */
  clone() {
    const t = new uu(null);
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
    if (r < Cr(this.getExtent(), t, e))
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
    ga(t);
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      Sg(t, e[n].getExtent());
    return t;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return cc(this.geometries_);
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
      const s = new uu(null);
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
    n || (n = Xr(this.getExtent()));
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
    this.setGeometriesArray(cc(t));
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
function cc(i) {
  const t = [];
  for (let e = 0, n = i.length; e < n; ++e)
    t.push(i[e].clone());
  return t;
}
const P_ = L_;
let T_ = class lu extends Ir {
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
        u === 0 && (r = c.getLayout()), gi(o, c.getFlatCoordinates()), a.push(o.length);
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
    this.flatCoordinates ? gi(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */
  clone() {
    const t = new lu(
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
    return r < Cr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      bu(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Du(
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
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, n = n !== void 0 ? n : !1, Tp(
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
    return Gs(
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
    return t < 0 || this.ends_.length <= t ? null : new qo(
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
      const u = e[o], l = new qo(
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
      const u = r[o], l = Lh(
        e,
        n,
        u,
        s,
        0.5
      );
      gi(t, l), n = u;
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
    return e.length = _p(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      0,
      n
    ), new lu(e, "XY", n);
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
    return Rp(
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
    const n = Au(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
const hc = T_;
let O_ = class Uh extends Ir {
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
    this.flatCoordinates ? gi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */
  clone() {
    const t = new Uh(
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
    if (r < Cr(this.getExtent(), t, e))
      return r;
    const s = this.flatCoordinates, o = this.stride;
    for (let a = 0, u = s.length; a < u; a += o) {
      const l = rr(
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
    return Di(
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
    return t < 0 || e <= t ? null : new Vr(
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
      const a = new Vr(t.slice(s, s + n), e);
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
      if (Pu(t, o, a))
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = pa(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
const b_ = O_;
function M_(i, t, e, n) {
  const r = [];
  let s = or();
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = th(
      i,
      t,
      u[0],
      n
    ), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), t = u[u.length - 1];
  }
  return r;
}
let D_ = class cu extends Ir {
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
        for (let g = 0, p = f.length; g < p; ++g)
          f[g] += h;
        gi(o, c.getFlatCoordinates()), a.push(f);
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
      gi(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
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
    const n = new cu(
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
    return r < Cr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      fp(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), gp(
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
    return Ip(
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
    return vp(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), kl(
      e,
      0,
      this.endss_,
      this.stride,
      t
    )) : e = this.flatCoordinates, Qa(
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
      const t = M_(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = Sp(
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
    return new b_(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      Pp(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = kl(
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
    return e.length = yp(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new cu(e, "XY", n);
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
    return new Wo(
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
      const c = new Wo(
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
    return Np(
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
    const n = dp(
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
const fc = D_;
var ye = 63710088e-1, Wh = {
  centimeters: ye * 100,
  centimetres: ye * 100,
  degrees: ye / 111325,
  feet: ye * 3.28084,
  inches: ye * 39.37,
  kilometers: ye / 1e3,
  kilometres: ye / 1e3,
  meters: ye,
  metres: ye,
  miles: ye / 1609.344,
  millimeters: ye * 1e3,
  millimetres: ye * 1e3,
  nauticalmiles: ye / 1852,
  radians: 1,
  yards: ye * 1.0936
};
function ma(i, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = i, n;
}
function A_(i, t, e) {
  if (e === void 0 && (e = {}), !i)
    throw new Error("coordinates is required");
  if (!Array.isArray(i))
    throw new Error("coordinates must be an Array");
  if (i.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!gc(i[0]) || !gc(i[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: i
  };
  return ma(n, t, e);
}
function F_(i, t, e) {
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
  return ma(a, t, e);
}
function hu(i, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = i, e;
}
function k_(i, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: i
  };
  return ma(n, t, e);
}
function G_(i, t) {
  t === void 0 && (t = "kilometers");
  var e = Wh[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return i * e;
}
function B_(i, t) {
  t === void 0 && (t = "kilometers");
  var e = Wh[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return i / e;
}
function gc(i) {
  return !isNaN(i) && i !== null && !Array.isArray(i);
}
function qh(i, t, e) {
  if (i !== null)
    for (var n, r, s, o, a, u, l, c = 0, h = 0, f, g = i.type, p = g === "FeatureCollection", d = g === "Feature", _ = p ? i.features.length : 1, m = 0; m < _; m++) {
      l = p ? i.features[m].geometry : d ? i.geometry : i, f = l ? l.type === "GeometryCollection" : !1, a = f ? l.geometries.length : 1;
      for (var y = 0; y < a; y++) {
        var E = 0, I = 0;
        if (o = f ? l.geometries[y] : l, o !== null) {
          u = o.coordinates;
          var S = o.type;
          switch (c = e && (S === "Polygon" || S === "MultiPolygon") ? 1 : 0, S) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                h,
                m,
                E,
                I
              ) === !1)
                return !1;
              h++, E++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < u.length; n++) {
                if (t(
                  u[n],
                  h,
                  m,
                  E,
                  I
                ) === !1)
                  return !1;
                h++, S === "MultiPoint" && E++;
              }
              S === "LineString" && E++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (r = 0; r < u[n].length - c; r++) {
                  if (t(
                    u[n][r],
                    h,
                    m,
                    E,
                    I
                  ) === !1)
                    return !1;
                  h++;
                }
                S === "MultiLineString" && E++, S === "Polygon" && I++;
              }
              S === "Polygon" && E++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (I = 0, r = 0; r < u[n].length; r++) {
                  for (s = 0; s < u[n][r].length - c; s++) {
                    if (t(
                      u[n][r][s],
                      h,
                      m,
                      E,
                      I
                    ) === !1)
                      return !1;
                    h++;
                  }
                  I++;
                }
                E++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < o.geometries.length; n++)
                if (qh(o.geometries[n], t, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function pc(i, t) {
  if (i.type === "Feature")
    t(i, 0);
  else if (i.type === "FeatureCollection")
    for (var e = 0; e < i.features.length && t(i.features[e], e) !== !1; e++)
      ;
}
function Hh(i, t) {
  var e, n, r, s, o, a, u, l, c, h, f = 0, g = i.type === "FeatureCollection", p = i.type === "Feature", d = g ? i.features.length : 1;
  for (e = 0; e < d; e++) {
    for (a = g ? i.features[e].geometry : p ? i.geometry : i, l = g ? i.features[e].properties : p ? i.properties : {}, c = g ? i.features[e].bbox : p ? i.bbox : void 0, h = g ? i.features[e].id : p ? i.id : void 0, u = a ? a.type === "GeometryCollection" : !1, o = u ? a.geometries.length : 1, r = 0; r < o; r++) {
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
function fu(i) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return qh(i, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
fu.default = fu;
function z_(i, t) {
  t === void 0 && (t = {});
  var e = fu(i), n = (e[0] + e[2]) / 2, r = (e[1] + e[3]) / 2;
  return A_([n, r], t.properties, t);
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
var ur = function() {
};
ur.prototype.interfaces_ = function() {
  return [];
};
ur.prototype.getClass = function() {
  return ur;
};
ur.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var gt = function(i) {
  function t(e) {
    i.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), W = function() {
}, jh = { MAX_VALUE: { configurable: !0 } };
W.isNaN = function(t) {
  return Number.isNaN(t);
};
W.doubleToLongBits = function(t) {
  return t;
};
W.longBitsToDouble = function(t) {
  return t;
};
W.isInfinite = function(t) {
  return !Number.isFinite(t);
};
jh.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(W, jh);
var Ae = function() {
}, ya = function() {
}, Wr = function() {
};
function Fe() {
}
var v = function i() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = i.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = i.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, Sr = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
v.prototype.setOrdinate = function(t, e) {
  switch (t) {
    case v.X:
      this.x = e;
      break;
    case v.Y:
      this.y = e;
      break;
    case v.Z:
      this.z = e;
      break;
    default:
      throw new gt("Invalid ordinate index: " + t);
  }
};
v.prototype.equals2D = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return !(this.x !== t.x || this.y !== t.y);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return !(!ur.equalsWithTolerance(this.x, e.x, n) || !ur.equalsWithTolerance(this.y, e.y, n));
  }
};
v.prototype.getOrdinate = function(t) {
  switch (t) {
    case v.X:
      return this.x;
    case v.Y:
      return this.y;
    case v.Z:
      return this.z;
  }
  throw new gt("Invalid ordinate index: " + t);
};
v.prototype.equals3D = function(t) {
  return this.x === t.x && this.y === t.y && (this.z === t.z || W.isNaN(this.z)) && W.isNaN(t.z);
};
v.prototype.equals = function(t) {
  return t instanceof v ? this.equals2D(t) : !1;
};
v.prototype.equalInZ = function(t, e) {
  return ur.equalsWithTolerance(this.z, t.z, e);
};
v.prototype.compareTo = function(t) {
  var e = t;
  return this.x < e.x ? -1 : this.x > e.x ? 1 : this.y < e.y ? -1 : this.y > e.y ? 1 : 0;
};
v.prototype.clone = function() {
};
v.prototype.copy = function() {
  return new v(this);
};
v.prototype.toString = function() {
  return "(" + this.x + ", " + this.y + ", " + this.z + ")";
};
v.prototype.distance3D = function(t) {
  var e = this.x - t.x, n = this.y - t.y, r = this.z - t.z;
  return Math.sqrt(e * e + n * n + r * r);
};
v.prototype.distance = function(t) {
  var e = this.x - t.x, n = this.y - t.y;
  return Math.sqrt(e * e + n * n);
};
v.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this.x), t = 37 * t + v.hashCode(this.y), t;
};
v.prototype.setCoordinate = function(t) {
  this.x = t.x, this.y = t.y, this.z = t.z;
};
v.prototype.interfaces_ = function() {
  return [Ae, ya, Fe];
};
v.prototype.getClass = function() {
  return v;
};
v.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = W.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
Sr.DimensionalComparator.get = function() {
  return fi;
};
Sr.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
Sr.NULL_ORDINATE.get = function() {
  return W.NaN;
};
Sr.X.get = function() {
  return 0;
};
Sr.Y.get = function() {
  return 1;
};
Sr.Z.get = function() {
  return 2;
};
Object.defineProperties(v, Sr);
var fi = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new gt("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
fi.prototype.compare = function(t, e) {
  var n = t, r = e, s = fi.compare(n.x, r.x);
  if (s !== 0)
    return s;
  var o = fi.compare(n.y, r.y);
  if (o !== 0)
    return o;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = fi.compare(n.z, r.z);
  return a;
};
fi.prototype.interfaces_ = function() {
  return [Wr];
};
fi.prototype.getClass = function() {
  return fi;
};
fi.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : W.isNaN(t) ? W.isNaN(e) ? 0 : -1 : W.isNaN(e) ? 1 : 0;
};
var qr = function() {
};
qr.prototype.create = function() {
};
qr.prototype.interfaces_ = function() {
  return [];
};
qr.prototype.getClass = function() {
  return qr;
};
var x = function() {
}, po = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
x.prototype.interfaces_ = function() {
  return [];
};
x.prototype.getClass = function() {
  return x;
};
x.toLocationSymbol = function(t) {
  switch (t) {
    case x.EXTERIOR:
      return "e";
    case x.BOUNDARY:
      return "b";
    case x.INTERIOR:
      return "i";
    case x.NONE:
      return "-";
  }
  throw new gt("Unknown location value: " + t);
};
po.INTERIOR.get = function() {
  return 0;
};
po.BOUNDARY.get = function() {
  return 1;
};
po.EXTERIOR.get = function() {
  return 2;
};
po.NONE.get = function() {
  return -1;
};
Object.defineProperties(x, po);
var X = function(i, t) {
  return i.interfaces_ && i.interfaces_().indexOf(t) > -1;
}, xe = function() {
}, Zh = { LOG_10: { configurable: !0 } };
xe.prototype.interfaces_ = function() {
  return [];
};
xe.prototype.getClass = function() {
  return xe;
};
xe.log10 = function(t) {
  var e = Math.log(t);
  return W.isInfinite(e) || W.isNaN(e) ? e : e / xe.LOG_10;
};
xe.min = function(t, e, n, r) {
  var s = t;
  return e < s && (s = e), n < s && (s = n), r < s && (s = r), s;
};
xe.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    return r < s ? s : r > o ? o : r;
  }
};
xe.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
xe.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = t;
    return e > r && (r = e), n > r && (r = n), r;
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = s;
    return o > l && (l = o), a > l && (l = a), u > l && (l = u), l;
  }
};
xe.average = function(t, e) {
  return (t + e) / 2;
};
Zh.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(xe, Zh);
var xn = function(t) {
  this.str = t;
};
xn.prototype.append = function(t) {
  this.str += t;
};
xn.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
xn.prototype.toString = function(t) {
  return this.str;
};
var hn = function(t) {
  this.value = t;
};
hn.prototype.intValue = function() {
  return this.value;
};
hn.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
hn.isNaN = function(t) {
  return Number.isNaN(t);
};
var js = function() {
};
js.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
js.toUpperCase = function(t) {
  return t.toUpperCase();
};
var C = function i() {
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
}, Ke = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
C.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
C.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), r = C.magnitude(n._hi), s = C.TEN.pow(r);
  n = n.divide(s), n.gt(C.TEN) ? (n = n.divide(C.TEN), r += 1) : n.lt(C.ONE) && (n = n.multiply(C.TEN), r -= 1);
  for (var o = r + 1, a = new xn(), u = C.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === o && a.append(".");
    var c = Math.trunc(n._hi);
    if (c < 0)
      break;
    var h = !1, f = 0;
    c > 9 ? (h = !0, f = "9") : f = "0" + c, a.append(f), n = n.subtract(C.valueOf(c)).multiply(C.TEN), h && n.selfAdd(C.TEN);
    var g = !0, p = C.magnitude(n._hi);
    if (p < 0 && Math.abs(p) >= u - l && (g = !1), !g)
      break;
  }
  return e[0] = r, a.toString();
};
C.prototype.sqr = function() {
  return this.multiply(this);
};
C.prototype.doubleValue = function() {
  return this._hi + this._lo;
};
C.prototype.subtract = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0];
    return this.add(t.negate());
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.add(-e);
  }
};
C.prototype.equals = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._hi === t._hi && this._lo === t._lo;
  }
};
C.prototype.isZero = function() {
  return this._hi === 0 && this._lo === 0;
};
C.prototype.selfSubtract = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.isNaN() ? this : this.selfAdd(-e, 0);
  }
};
C.prototype.getSpecialNumberString = function() {
  return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
};
C.prototype.min = function(t) {
  return this.le(t) ? this : t;
};
C.prototype.selfDivide = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof C) {
      var t = arguments[0];
      return this.selfDivide(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfDivide(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null, h = null, f = null;
    return l = this._hi / n, c = C.SPLIT * l, s = c - l, f = C.SPLIT * n, s = c - s, o = l - s, a = f - n, h = l * n, a = f - a, u = n - a, f = s * a - h + s * u + o * a + o * u, c = (this._hi - h - f + this._lo - l * r) / n, f = l + c, this._hi = f, this._lo = l - f + c, this;
  }
};
C.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
C.prototype.divide = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0], e = null, n = null, r = null, s = null, o = null, a = null, u = null, l = null;
    o = this._hi / t._hi, a = C.SPLIT * o, e = a - o, l = C.SPLIT * t._hi, e = a - e, n = o - e, r = l - t._hi, u = o * t._hi, r = l - r, s = t._hi - r, l = e * r - u + e * s + n * r + n * s, a = (this._hi - u - l + this._lo - o * t._lo) / t._hi, l = o + a;
    var c = l, h = o - l + a;
    return new C(c, h);
  } else if (typeof arguments[0] == "number") {
    var f = arguments[0];
    return W.isNaN(f) ? C.createNaN() : C.copy(this).selfDivide(f, 0);
  }
};
C.prototype.ge = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo;
};
C.prototype.pow = function(t) {
  if (t === 0)
    return C.valueOf(1);
  var e = new C(this), n = C.valueOf(1), r = Math.abs(t);
  if (r > 1)
    for (; r > 0; )
      r % 2 === 1 && n.selfMultiply(e), r /= 2, r > 0 && (e = e.sqr());
  else
    n = e;
  return t < 0 ? n.reciprocal() : n;
};
C.prototype.ceil = function() {
  if (this.isNaN())
    return C.NaN;
  var t = Math.ceil(this._hi), e = 0;
  return t === this._hi && (e = Math.ceil(this._lo)), new C(t, e);
};
C.prototype.compareTo = function(t) {
  var e = t;
  return this._hi < e._hi ? -1 : this._hi > e._hi ? 1 : this._lo < e._lo ? -1 : this._lo > e._lo ? 1 : 0;
};
C.prototype.rint = function() {
  if (this.isNaN())
    return this;
  var t = this.add(0.5);
  return t.floor();
};
C.prototype.setValue = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0];
    return this.init(t), this;
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return this.init(e), this;
  }
};
C.prototype.max = function(t) {
  return this.ge(t) ? this : t;
};
C.prototype.sqrt = function() {
  if (this.isZero())
    return C.valueOf(0);
  if (this.isNegative())
    return C.NaN;
  var t = 1 / Math.sqrt(this._hi), e = this._hi * t, n = C.valueOf(e), r = this.subtract(n.sqr()), s = r._hi * (t * 0.5);
  return n.add(s);
};
C.prototype.selfAdd = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof C) {
      var t = arguments[0];
      return this.selfAdd(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0], n = null, r = null, s = null, o = null, a = null, u = null;
      return s = this._hi + e, a = s - this._hi, o = s - a, o = e - a + (this._hi - o), u = o + this._lo, n = s + u, r = u + (s - n), this._hi = n + r, this._lo = r + (n - this._hi), this;
    }
  } else if (arguments.length === 2) {
    var l = arguments[0], c = arguments[1], h = null, f = null, g = null, p = null, d = null, _ = null, m = null, y = null;
    d = this._hi + l, g = this._lo + c, m = d - this._hi, y = g - this._lo, _ = d - m, p = g - y, _ = l - m + (this._hi - _), p = c - y + (this._lo - p), m = _ + g, h = d + m, f = m + (d - h), m = p + f;
    var E = h + m, I = m + (h - E);
    return this._hi = E, this._lo = I, this;
  }
};
C.prototype.selfMultiply = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof C) {
      var t = arguments[0];
      return this.selfMultiply(t._hi, t._lo);
    } else if (typeof arguments[0] == "number") {
      var e = arguments[0];
      return this.selfMultiply(e, 0);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, c = null;
    l = C.SPLIT * this._hi, s = l - this._hi, c = C.SPLIT * n, s = l - s, o = this._hi - s, a = c - n, l = this._hi * n, a = c - a, u = n - a, c = s * a - l + s * u + o * a + o * u + (this._hi * r + this._lo * n);
    var h = l + c;
    s = l - h;
    var f = c + s;
    return this._hi = h, this._lo = f, this;
  }
};
C.prototype.selfSqr = function() {
  return this.selfMultiply(this);
};
C.prototype.floor = function() {
  if (this.isNaN())
    return C.NaN;
  var t = Math.floor(this._hi), e = 0;
  return t === this._hi && (e = Math.floor(this._lo)), new C(t, e);
};
C.prototype.negate = function() {
  return this.isNaN() ? this : new C(-this._hi, -this._lo);
};
C.prototype.clone = function() {
};
C.prototype.multiply = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0];
    return t.isNaN() ? C.createNaN() : C.copy(this).selfMultiply(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return W.isNaN(e) ? C.createNaN() : C.copy(this).selfMultiply(e, 0);
  }
};
C.prototype.isNaN = function() {
  return W.isNaN(this._hi);
};
C.prototype.intValue = function() {
  return Math.trunc(this._hi);
};
C.prototype.toString = function() {
  var t = C.magnitude(this._hi);
  return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
};
C.prototype.toStandardNotation = function() {
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!0, e), r = e[0] + 1, s = n;
  if (n.charAt(0) === ".")
    s = "0" + n;
  else if (r < 0)
    s = "0." + C.stringOfChar("0", -r) + n;
  else if (n.indexOf(".") === -1) {
    var o = r - n.length, a = C.stringOfChar("0", o);
    s = n + a + ".0";
  }
  return this.isNegative() ? "-" + s : s;
};
C.prototype.reciprocal = function() {
  var t = null, e = null, n = null, r = null, s = null, o = null, a = null, u = null;
  s = 1 / this._hi, o = C.SPLIT * s, t = o - s, u = C.SPLIT * this._hi, t = o - t, e = s - t, n = u - this._hi, a = s * this._hi, n = u - n, r = this._hi - n, u = t * n - a + t * r + e * n + e * r, o = (1 - a - u - s * this._lo) / this._hi;
  var l = s + o, c = s - l + o;
  return new C(l, c);
};
C.prototype.toSciNotation = function() {
  if (this.isZero())
    return C.SCI_NOT_ZERO;
  var t = this.getSpecialNumberString();
  if (t !== null)
    return t;
  var e = new Array(1).fill(null), n = this.extractSignificantDigits(!1, e), r = C.SCI_NOT_EXPONENT_CHAR + e[0];
  if (n.charAt(0) === "0")
    throw new Error("Found leading zero: " + n);
  var s = "";
  n.length > 1 && (s = n.substring(1));
  var o = n.charAt(0) + "." + s;
  return this.isNegative() ? "-" + o + r : o + r;
};
C.prototype.abs = function() {
  return this.isNaN() ? C.NaN : this.isNegative() ? this.negate() : new C(this);
};
C.prototype.isPositive = function() {
  return (this._hi > 0 || this._hi === 0) && this._lo > 0;
};
C.prototype.lt = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo;
};
C.prototype.add = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0];
    return C.copy(this).selfAdd(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return C.copy(this).selfAdd(e);
  }
};
C.prototype.init = function() {
  if (arguments.length === 1) {
    if (typeof arguments[0] == "number") {
      var t = arguments[0];
      this._hi = t, this._lo = 0;
    } else if (arguments[0] instanceof C) {
      var e = arguments[0];
      this._hi = e._hi, this._lo = e._lo;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this._hi = n, this._lo = r;
  }
};
C.prototype.gt = function(t) {
  return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo;
};
C.prototype.isNegative = function() {
  return (this._hi < 0 || this._hi === 0) && this._lo < 0;
};
C.prototype.trunc = function() {
  return this.isNaN() ? C.NaN : this.isPositive() ? this.floor() : this.ceil();
};
C.prototype.signum = function() {
  return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
};
C.prototype.interfaces_ = function() {
  return [Fe, Ae, ya];
};
C.prototype.getClass = function() {
  return C;
};
C.sqr = function(t) {
  return C.valueOf(t).selfMultiply(t);
};
C.valueOf = function() {
  if (typeof arguments[0] == "string") {
    var t = arguments[0];
    return C.parse(t);
  } else if (typeof arguments[0] == "number") {
    var e = arguments[0];
    return new C(e);
  }
};
C.sqrt = function(t) {
  return C.valueOf(t).sqrt();
};
C.parse = function(t) {
  for (var e = 0, n = t.length; js.isWhitespace(t.charAt(e)); )
    e++;
  var r = !1;
  if (e < n) {
    var s = t.charAt(e);
    (s === "-" || s === "+") && (e++, s === "-" && (r = !0));
  }
  for (var o = new C(), a = 0, u = 0, l = 0; !(e >= n); ) {
    var c = t.charAt(e);
    if (e++, js.isDigit(c)) {
      var h = c - "0";
      o.selfMultiply(C.TEN), o.selfAdd(h), a++;
      continue;
    }
    if (c === ".") {
      u = a;
      continue;
    }
    if (c === "e" || c === "E") {
      var f = t.substring(e);
      try {
        l = hn.parseInt(f);
      } catch (m) {
        throw m instanceof Error ? new Error("Invalid exponent " + f + " in string " + t) : m;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + c + "' at position " + e + " in string " + t);
  }
  var g = o, p = a - u - l;
  if (p === 0)
    g = o;
  else if (p > 0) {
    var d = C.TEN.pow(p);
    g = o.divide(d);
  } else if (p < 0) {
    var _ = C.TEN.pow(-p);
    g = o.multiply(_);
  }
  return r ? g.negate() : g;
};
C.createNaN = function() {
  return new C(W.NaN, W.NaN);
};
C.copy = function(t) {
  return new C(t);
};
C.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), r = Math.trunc(Math.floor(n)), s = Math.pow(10, r);
  return s * 10 <= e && (r += 1), r;
};
C.stringOfChar = function(t, e) {
  for (var n = new xn(), r = 0; r < e; r++)
    n.append(t);
  return n.toString();
};
Ke.PI.get = function() {
  return new C(3.141592653589793, 12246467991473532e-32);
};
Ke.TWO_PI.get = function() {
  return new C(6.283185307179586, 24492935982947064e-32);
};
Ke.PI_2.get = function() {
  return new C(1.5707963267948966, 6123233995736766e-32);
};
Ke.E.get = function() {
  return new C(2.718281828459045, 14456468917292502e-32);
};
Ke.NaN.get = function() {
  return new C(W.NaN, W.NaN);
};
Ke.EPS.get = function() {
  return 123259516440783e-46;
};
Ke.SPLIT.get = function() {
  return 134217729;
};
Ke.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Ke.TEN.get = function() {
  return C.valueOf(10);
};
Ke.ONE.get = function() {
  return C.valueOf(1);
};
Ke.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Ke.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(C, Ke);
var ae = function() {
}, Kh = { DP_SAFE_EPSILON: { configurable: !0 } };
ae.prototype.interfaces_ = function() {
  return [];
};
ae.prototype.getClass = function() {
  return ae;
};
ae.orientationIndex = function(t, e, n) {
  var r = ae.orientationIndexFilter(t, e, n);
  if (r <= 1)
    return r;
  var s = C.valueOf(e.x).selfAdd(-t.x), o = C.valueOf(e.y).selfAdd(-t.y), a = C.valueOf(n.x).selfAdd(-e.x), u = C.valueOf(n.y).selfAdd(-e.y);
  return s.selfMultiply(u).selfSubtract(o.selfMultiply(a)).signum();
};
ae.signOfDet2x2 = function(t, e, n, r) {
  var s = t.multiply(r).selfSubtract(e.multiply(n));
  return s.signum();
};
ae.intersection = function(t, e, n, r) {
  var s = C.valueOf(r.y).selfSubtract(n.y).selfMultiply(C.valueOf(e.x).selfSubtract(t.x)), o = C.valueOf(r.x).selfSubtract(n.x).selfMultiply(C.valueOf(e.y).selfSubtract(t.y)), a = s.subtract(o), u = C.valueOf(r.x).selfSubtract(n.x).selfMultiply(C.valueOf(t.y).selfSubtract(n.y)), l = C.valueOf(r.y).selfSubtract(n.y).selfMultiply(C.valueOf(t.x).selfSubtract(n.x)), c = u.subtract(l), h = c.selfDivide(a).doubleValue(), f = C.valueOf(t.x).selfAdd(C.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(), g = C.valueOf(e.x).selfSubtract(t.x).selfMultiply(C.valueOf(t.y).selfSubtract(n.y)), p = C.valueOf(e.y).selfSubtract(t.y).selfMultiply(C.valueOf(t.x).selfSubtract(n.x)), d = g.subtract(p), _ = d.selfDivide(a).doubleValue(), m = C.valueOf(n.y).selfAdd(C.valueOf(r.y).selfSubtract(n.y).selfMultiply(_)).doubleValue();
  return new v(f, m);
};
ae.orientationIndexFilter = function(t, e, n) {
  var r = null, s = (t.x - n.x) * (e.y - n.y), o = (t.y - n.y) * (e.x - n.x), a = s - o;
  if (s > 0) {
    if (o <= 0)
      return ae.signum(a);
    r = s + o;
  } else if (s < 0) {
    if (o >= 0)
      return ae.signum(a);
    r = -s - o;
  } else
    return ae.signum(a);
  var u = ae.DP_SAFE_EPSILON * r;
  return a >= u || -a >= u ? ae.signum(a) : 2;
};
ae.signum = function(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
};
Kh.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(ae, Kh);
var $ = function() {
}, _o = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
_o.X.get = function() {
  return 0;
};
_o.Y.get = function() {
  return 1;
};
_o.Z.get = function() {
  return 2;
};
_o.M.get = function() {
  return 3;
};
$.prototype.setOrdinate = function(t, e, n) {
};
$.prototype.size = function() {
};
$.prototype.getOrdinate = function(t, e) {
};
$.prototype.getCoordinate = function() {
};
$.prototype.getCoordinateCopy = function(t) {
};
$.prototype.getDimension = function() {
};
$.prototype.getX = function(t) {
};
$.prototype.clone = function() {
};
$.prototype.expandEnvelope = function(t) {
};
$.prototype.copy = function() {
};
$.prototype.getY = function(t) {
};
$.prototype.toCoordinateArray = function() {
};
$.prototype.interfaces_ = function() {
  return [ya];
};
$.prototype.getClass = function() {
  return $;
};
Object.defineProperties($, _o);
var Jh = function() {
}, gs = function(i) {
  function t() {
    i.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Jh), zt = function() {
};
zt.arraycopy = function(t, e, n, r, s) {
  for (var o = 0, a = e; a < e + s; a++)
    n[r + o] = t[a], o++;
};
zt.getProperty = function(t) {
  return {
    "line.separator": `
`
  }[t];
};
var Ve = function i() {
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
    } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
      var o = arguments[0], a = arguments[1];
      this.x = o.y - a.y, this.y = a.x - o.x, this.w = o.x * a.y - a.x * o.y;
    }
  } else if (arguments.length === 3) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    this.x = u, this.y = l, this.w = c;
  } else if (arguments.length === 4) {
    var h = arguments[0], f = arguments[1], g = arguments[2], p = arguments[3], d = h.y - f.y, _ = f.x - h.x, m = h.x * f.y - f.x * h.y, y = g.y - p.y, E = p.x - g.x, I = g.x * p.y - p.x * g.y;
    this.x = _ * I - E * m, this.y = y * m - d * I, this.w = d * E - y * _;
  }
};
Ve.prototype.getY = function() {
  var t = this.y / this.w;
  if (W.isNaN(t) || W.isInfinite(t))
    throw new gs();
  return t;
};
Ve.prototype.getX = function() {
  var t = this.x / this.w;
  if (W.isNaN(t) || W.isInfinite(t))
    throw new gs();
  return t;
};
Ve.prototype.getCoordinate = function() {
  var t = new v();
  return t.x = this.getX(), t.y = this.getY(), t;
};
Ve.prototype.interfaces_ = function() {
  return [];
};
Ve.prototype.getClass = function() {
  return Ve;
};
Ve.intersection = function(t, e, n, r) {
  var s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - r.y, l = r.x - n.x, c = n.x * r.y - r.x * n.y, h = o * c - l * a, f = u * a - s * c, g = s * l - u * o, p = h / g, d = f / g;
  if (W.isNaN(p) || W.isInfinite(p) || W.isNaN(d) || W.isInfinite(d))
    throw new gs();
  return new v(p, d);
};
var A = function i() {
  if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0)
    this.init();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
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
}, Qh = { serialVersionUID: { configurable: !0 } };
A.prototype.getArea = function() {
  return this.getWidth() * this.getHeight();
};
A.prototype.equals = function(t) {
  if (!(t instanceof A))
    return !1;
  var e = t;
  return this.isNull() ? e.isNull() : this._maxx === e.getMaxX() && this._maxy === e.getMaxY() && this._minx === e.getMinX() && this._miny === e.getMinY();
};
A.prototype.intersection = function(t) {
  if (this.isNull() || t.isNull() || !this.intersects(t))
    return new A();
  var e = this._minx > t._minx ? this._minx : t._minx, n = this._miny > t._miny ? this._miny : t._miny, r = this._maxx < t._maxx ? this._maxx : t._maxx, s = this._maxy < t._maxy ? this._maxy : t._maxy;
  return new A(e, r, n, s);
};
A.prototype.isNull = function() {
  return this._maxx < this._minx;
};
A.prototype.getMaxX = function() {
  return this._maxx;
};
A.prototype.covers = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.covers(t.x, t.y);
    } else if (arguments[0] instanceof A) {
      var e = arguments[0];
      return this.isNull() || e.isNull() ? !1 : e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy;
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.isNull() ? !1 : n >= this._minx && n <= this._maxx && r >= this._miny && r <= this._maxy;
  }
};
A.prototype.intersects = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof A) {
      var t = arguments[0];
      return this.isNull() || t.isNull() ? !1 : !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.intersects(e.x, e.y);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.isNull() ? !1 : !(n > this._maxx || n < this._minx || r > this._maxy || r < this._miny);
  }
};
A.prototype.getMinY = function() {
  return this._miny;
};
A.prototype.getMinX = function() {
  return this._minx;
};
A.prototype.expandToInclude = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.expandToInclude(t.x, t.y);
    } else if (arguments[0] instanceof A) {
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
A.prototype.minExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t < e ? t : e;
};
A.prototype.getWidth = function() {
  return this.isNull() ? 0 : this._maxx - this._minx;
};
A.prototype.compareTo = function(t) {
  var e = t;
  return this.isNull() ? e.isNull() ? 0 : -1 : e.isNull() ? 1 : this._minx < e._minx ? -1 : this._minx > e._minx ? 1 : this._miny < e._miny ? -1 : this._miny > e._miny ? 1 : this._maxx < e._maxx ? -1 : this._maxx > e._maxx ? 1 : this._maxy < e._maxy ? -1 : this._maxy > e._maxy ? 1 : 0;
};
A.prototype.translate = function(t, e) {
  if (this.isNull())
    return null;
  this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e);
};
A.prototype.toString = function() {
  return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
};
A.prototype.setToNull = function() {
  this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
};
A.prototype.getHeight = function() {
  return this.isNull() ? 0 : this._maxy - this._miny;
};
A.prototype.maxExtent = function() {
  if (this.isNull())
    return 0;
  var t = this.getWidth(), e = this.getHeight();
  return t > e ? t : e;
};
A.prototype.expandBy = function() {
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
A.prototype.contains = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof A) {
      var t = arguments[0];
      return this.covers(t);
    } else if (arguments[0] instanceof v) {
      var e = arguments[0];
      return this.covers(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.covers(n, r);
  }
};
A.prototype.centre = function() {
  return this.isNull() ? null : new v((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
};
A.prototype.init = function() {
  if (arguments.length === 0)
    this.setToNull();
  else if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      this.init(t.x, t.x, t.y, t.y);
    } else if (arguments[0] instanceof A) {
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
A.prototype.getMaxY = function() {
  return this._maxy;
};
A.prototype.distance = function(t) {
  if (this.intersects(t))
    return 0;
  var e = 0;
  this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
  var n = 0;
  return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), e === 0 ? n : n === 0 ? e : Math.sqrt(e * e + n * n);
};
A.prototype.hashCode = function() {
  var t = 17;
  return t = 37 * t + v.hashCode(this._minx), t = 37 * t + v.hashCode(this._maxx), t = 37 * t + v.hashCode(this._miny), t = 37 * t + v.hashCode(this._maxy), t;
};
A.prototype.interfaces_ = function() {
  return [Ae, Fe];
};
A.prototype.getClass = function() {
  return A;
};
A.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = Math.min(o.x, a.x), l = Math.max(o.x, a.x), c = Math.min(r.x, s.x), h = Math.max(r.x, s.x);
    return !(c > l || h < u || (u = Math.min(o.y, a.y), l = Math.max(o.y, a.y), c = Math.min(r.y, s.y), h = Math.max(r.y, s.y), c > l) || h < u);
  }
};
Qh.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(A, Qh);
var en = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, va = function(t) {
  this.geometryFactory = t || new K();
};
va.prototype.read = function(t) {
  var e, n, r;
  t = t.replace(/[\n\r]/g, " ");
  var s = en.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (s = en.emptyTypeStr.exec(t), s[2] = void 0), s && (n = s[1].toLowerCase(), r = s[2], Br[n] && (e = Br[n].apply(this, [r]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
va.prototype.write = function(t) {
  return this.extractGeometry(t);
};
va.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!Yn[e])
    return null;
  var n = e.toUpperCase(), r;
  return t.isEmpty() ? r = n + " EMPTY" : r = n + "(" + Yn[e].apply(this, [t]) + ")", r;
};
var Yn = {
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
    return Yn.coordinate.call(this, t._coordinates._coordinates[0]);
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
      n.push("(" + Yn.point.apply(e, [t._geometries[r]]) + ")");
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
      n.push(Yn.coordinate.apply(e, [t._points._coordinates[r]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], r = 0, s = t._points._coordinates.length; r < s; ++r)
      n.push(Yn.coordinate.apply(e, [t._points._coordinates[r]]));
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
      n.push("(" + Yn.linestring.apply(e, [t._geometries[r]]) + ")");
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
    n.push("(" + Yn.linestring.apply(this, [t._shell]) + ")");
    for (var r = 0, s = t._holes.length; r < s; ++r)
      n.push("(" + Yn.linestring.apply(e, [t._holes[r]]) + ")");
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
      n.push("(" + Yn.polygon.apply(e, [t._geometries[r]]) + ")");
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
}, Br = {
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
    var e = t.trim().split(en.spaces);
    return this.geometryFactory.createPoint(new v(
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
      n = r[o].replace(en.trimParens, "$1"), s.push(Br.point.apply(e, [n]));
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
      r = e[s].trim().split(en.spaces), n.push(new v(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
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
      r = e[s].trim().split(en.spaces), n.push(new v(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
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
    for (var n, r = t.trim().split(en.parenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(en.trimParens, "$1"), s.push(Br.linestring.apply(e, [n]));
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
    for (var n, r, s, o = t.trim().split(en.parenComma), a, u = [], l = 0, c = o.length; l < c; ++l)
      n = o[l].replace(en.trimParens, "$1"), r = Br.linestring.apply(e, [n]), s = e.geometryFactory.createLinearRing(r._points), l === 0 ? a = s : u.push(s);
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
    for (var n, r = t.trim().split(en.doubleParenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(en.trimParens, "$1"), s.push(Br.polygon.apply(e, [n]));
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
}, Ye = function(t) {
  this.parser = new va(t);
};
Ye.prototype.write = function(t) {
  return this.parser.write(t);
};
Ye.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var $n = function(i) {
  function t(e) {
    i.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), ta = function(i) {
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
}($n), j = function() {
};
j.prototype.interfaces_ = function() {
  return [];
};
j.prototype.getClass = function() {
  return j;
};
j.shouldNeverReachHere = function() {
  if (arguments.length === 0)
    j.shouldNeverReachHere(null);
  else if (arguments.length === 1) {
    var t = arguments[0];
    throw new ta("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
j.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], j.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new ta() : new ta(e);
};
j.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], j.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new ta("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var pt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new v(), this._intPt[1] = new v(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, Rr = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
pt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
pt.prototype.getTopologySummary = function() {
  var t = new xn();
  return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
};
pt.prototype.computeIntersection = function(t, e, n, r) {
  this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = r, this._result = this.computeIntersect(t, e, n, r);
};
pt.prototype.getIntersectionNum = function() {
  return this._result;
};
pt.prototype.computeIntLineIndex = function() {
  if (arguments.length === 0)
    this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
      return Array(2);
    }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
  else if (arguments.length === 1) {
    var t = arguments[0], e = this.getEdgeDistance(t, 0), n = this.getEdgeDistance(t, 1);
    e > n ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
  }
};
pt.prototype.isProper = function() {
  return this.hasIntersection() && this._isProper;
};
pt.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
pt.prototype.isInteriorIntersection = function() {
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
pt.prototype.getIntersection = function(t) {
  return this._intPt[t];
};
pt.prototype.isEndPoint = function() {
  return this.hasIntersection() && !this._isProper;
};
pt.prototype.hasIntersection = function() {
  return this._result !== pt.NO_INTERSECTION;
};
pt.prototype.getEdgeDistance = function(t, e) {
  var n = pt.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1]);
  return n;
};
pt.prototype.isCollinear = function() {
  return this._result === pt.COLLINEAR_INTERSECTION;
};
pt.prototype.toString = function() {
  return Ye.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ye.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
};
pt.prototype.getEndpoint = function(t, e) {
  return this._inputLines[t][e];
};
pt.prototype.isIntersection = function(t) {
  for (var e = this, n = 0; n < this._result; n++)
    if (e._intPt[n].equals2D(t))
      return !0;
  return !1;
};
pt.prototype.getIntersectionAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]];
};
pt.prototype.interfaces_ = function() {
  return [];
};
pt.prototype.getClass = function() {
  return pt;
};
pt.computeEdgeDistance = function(t, e, n) {
  var r = Math.abs(n.x - e.x), s = Math.abs(n.y - e.y), o = -1;
  if (t.equals(e))
    o = 0;
  else if (t.equals(n))
    r > s ? o = r : o = s;
  else {
    var a = Math.abs(t.x - e.x), u = Math.abs(t.y - e.y);
    r > s ? o = a : o = u, o === 0 && !t.equals(e) && (o = Math.max(a, u));
  }
  return j.isTrue(!(o === 0 && !t.equals(e)), "Bad distance calculation"), o;
};
pt.nonRobustComputeEdgeDistance = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = Math.sqrt(r * r + s * s);
  return j.isTrue(!(o === 0 && !t.equals(e)), "Invalid distance calculation"), o;
};
Rr.DONT_INTERSECT.get = function() {
  return 0;
};
Rr.DO_INTERSECT.get = function() {
  return 1;
};
Rr.COLLINEAR.get = function() {
  return 2;
};
Rr.NO_INTERSECTION.get = function() {
  return 0;
};
Rr.POINT_INTERSECTION.get = function() {
  return 1;
};
Rr.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(pt, Rr);
var Ji = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.isInSegmentEnvelopes = function(n) {
    var r = new A(this._inputLines[0][0], this._inputLines[0][1]), s = new A(this._inputLines[1][0], this._inputLines[1][1]);
    return r.contains(n) && s.contains(n);
  }, t.prototype.computeIntersection = function() {
    if (arguments.length === 3) {
      var n = arguments[0], r = arguments[1], s = arguments[2];
      if (this._isProper = !1, A.intersects(r, s, n) && M.orientationIndex(r, s, n) === 0 && M.orientationIndex(s, r, n) === 0)
        return this._isProper = !0, (n.equals(r) || n.equals(s)) && (this._isProper = !1), this._result = i.POINT_INTERSECTION, null;
      this._result = i.NO_INTERSECTION;
    } else
      return i.prototype.computeIntersection.apply(this, arguments);
  }, t.prototype.normalizeToMinimum = function(n, r, s, o, a) {
    a.x = this.smallestInAbsValue(n.x, r.x, s.x, o.x), a.y = this.smallestInAbsValue(n.y, r.y, s.y, o.y), n.x -= a.x, n.y -= a.y, r.x -= a.x, r.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.safeHCoordinateIntersection = function(n, r, s, o) {
    var a = null;
    try {
      a = Ve.intersection(n, r, s, o);
    } catch (u) {
      if (u instanceof gs)
        a = t.nearestEndpoint(n, r, s, o);
      else
        throw u;
    } finally {
    }
    return a;
  }, t.prototype.intersection = function(n, r, s, o) {
    var a = this.intersectionWithNormalization(n, r, s, o);
    return this.isInSegmentEnvelopes(a) || (a = new v(t.nearestEndpoint(n, r, s, o))), this._precisionModel !== null && this._precisionModel.makePrecise(a), a;
  }, t.prototype.smallestInAbsValue = function(n, r, s, o) {
    var a = n, u = Math.abs(a);
    return Math.abs(r) < u && (a = r, u = Math.abs(r)), Math.abs(s) < u && (a = s, u = Math.abs(s)), Math.abs(o) < u && (a = o), a;
  }, t.prototype.checkDD = function(n, r, s, o, a) {
    var u = ae.intersection(n, r, s, o), l = this.isInSegmentEnvelopes(u);
    zt.out.println("DD in env = " + l + "  --------------------- " + u), a.distance(u) > 1e-4 && zt.out.println("Distance = " + a.distance(u));
  }, t.prototype.intersectionWithNormalization = function(n, r, s, o) {
    var a = new v(n), u = new v(r), l = new v(s), c = new v(o), h = new v();
    this.normalizeToEnvCentre(a, u, l, c, h);
    var f = this.safeHCoordinateIntersection(a, u, l, c);
    return f.x += h.x, f.y += h.y, f;
  }, t.prototype.computeCollinearIntersection = function(n, r, s, o) {
    var a = A.intersects(n, r, s), u = A.intersects(n, r, o), l = A.intersects(s, o, n), c = A.intersects(s, o, r);
    return a && u ? (this._intPt[0] = s, this._intPt[1] = o, i.COLLINEAR_INTERSECTION) : l && c ? (this._intPt[0] = n, this._intPt[1] = r, i.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !u && !c ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : a && c ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !u && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !a && !c ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && c ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !a && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : i.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, r, s, o, a) {
    var u = n.x < r.x ? n.x : r.x, l = n.y < r.y ? n.y : r.y, c = n.x > r.x ? n.x : r.x, h = n.y > r.y ? n.y : r.y, f = s.x < o.x ? s.x : o.x, g = s.y < o.y ? s.y : o.y, p = s.x > o.x ? s.x : o.x, d = s.y > o.y ? s.y : o.y, _ = u > f ? u : f, m = c < p ? c : p, y = l > g ? l : g, E = h < d ? h : d, I = (_ + m) / 2, S = (y + E) / 2;
    a.x = I, a.y = S, n.x -= a.x, n.y -= a.y, r.x -= a.x, r.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.computeIntersect = function(n, r, s, o) {
    if (this._isProper = !1, !A.intersects(n, r, s, o))
      return i.NO_INTERSECTION;
    var a = M.orientationIndex(n, r, s), u = M.orientationIndex(n, r, o);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return i.NO_INTERSECTION;
    var l = M.orientationIndex(s, o, n), c = M.orientationIndex(s, o, r);
    if (l > 0 && c > 0 || l < 0 && c < 0)
      return i.NO_INTERSECTION;
    var h = a === 0 && u === 0 && l === 0 && c === 0;
    return h ? this.computeCollinearIntersection(n, r, s, o) : (a === 0 || u === 0 || l === 0 || c === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : r.equals2D(s) || r.equals2D(o) ? this._intPt[0] = r : a === 0 ? this._intPt[0] = new v(s) : u === 0 ? this._intPt[0] = new v(o) : l === 0 ? this._intPt[0] = new v(n) : c === 0 && (this._intPt[0] = new v(r))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, r, s, o)), i.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, r, s, o) {
    var a = n, u = M.distancePointLine(n, s, o), l = M.distancePointLine(r, s, o);
    return l < u && (u = l, a = r), l = M.distancePointLine(s, n, r), l < u && (u = l, a = s), l = M.distancePointLine(o, n, r), l < u && (u = l, a = o), a;
  }, t;
}(pt), lr = function() {
};
lr.prototype.interfaces_ = function() {
  return [];
};
lr.prototype.getClass = function() {
  return lr;
};
lr.orientationIndex = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = n.x - e.x, a = n.y - e.y;
  return lr.signOfDet2x2(r, s, o, a);
};
lr.signOfDet2x2 = function(t, e, n, r) {
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
var un = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
un.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, r = e.x;
    return n > r && (n = e.x, r = t.x), this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var s = t.x - this._p.x, o = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = lr.signOfDet2x2(s, o, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < o && (l = -l), l > 0 && this._crossingCount++;
  }
};
un.prototype.isPointInPolygon = function() {
  return this.getLocation() !== x.EXTERIOR;
};
un.prototype.getLocation = function() {
  return this._isPointOnSegment ? x.BOUNDARY : this._crossingCount % 2 === 1 ? x.INTERIOR : x.EXTERIOR;
};
un.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
un.prototype.interfaces_ = function() {
  return [];
};
un.prototype.getClass = function() {
  return un;
};
un.locatePointInRing = function() {
  if (arguments[0] instanceof v && X(arguments[1], $)) {
    for (var t = arguments[0], e = arguments[1], n = new un(t), r = new v(), s = new v(), o = 1; o < e.size(); o++)
      if (e.getCoordinate(o, r), e.getCoordinate(o - 1, s), n.countSegment(r, s), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof v && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new un(a), c = 1; c < u.length; c++) {
      var h = u[c], f = u[c - 1];
      if (l.countSegment(h, f), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var M = function() {
}, wr = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
M.prototype.interfaces_ = function() {
  return [];
};
M.prototype.getClass = function() {
  return M;
};
M.orientationIndex = function(t, e, n) {
  return ae.orientationIndex(t, e, n);
};
M.signedArea = function() {
  if (arguments[0] instanceof Array) {
    var t = arguments[0];
    if (t.length < 3)
      return 0;
    for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
      var s = t[r].x - n, o = t[r + 1].y, a = t[r - 1].y;
      e += s * (a - o);
    }
    return e / 2;
  } else if (X(arguments[0], $)) {
    var u = arguments[0], l = u.size();
    if (l < 3)
      return 0;
    var c = new v(), h = new v(), f = new v();
    u.getCoordinate(0, h), u.getCoordinate(1, f);
    var g = h.x;
    f.x -= g;
    for (var p = 0, d = 1; d < l - 1; d++)
      c.y = h.y, h.x = f.x, h.y = f.y, u.getCoordinate(d + 1, f), f.x -= g, p += h.x * (c.y - f.y);
    return p / 2;
  }
};
M.distanceLineLine = function(t, e, n, r) {
  if (t.equals(e))
    return M.distancePointLine(t, n, r);
  if (n.equals(r))
    return M.distancePointLine(r, t, e);
  var s = !1;
  if (!A.intersects(t, e, n, r))
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
  return s ? xe.min(M.distancePointLine(t, n, r), M.distancePointLine(e, n, r), M.distancePointLine(n, t, e), M.distancePointLine(r, t, e)) : 0;
};
M.isPointInRing = function(t, e) {
  return M.locatePointInRing(t, e) !== x.EXTERIOR;
};
M.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, r = new v();
  t.getCoordinate(0, r);
  for (var s = r.x, o = r.y, a = 1; a < e; a++) {
    t.getCoordinate(a, r);
    var u = r.x, l = r.y, c = u - s, h = l - o;
    n += Math.sqrt(c * c + h * h), s = u, o = l;
  }
  return n;
};
M.isCCW = function(t) {
  var e = t.length - 1;
  if (e < 3)
    throw new gt("Ring has fewer than 4 points, so orientation cannot be determined");
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
  var h = M.computeOrientation(l, n, c), f = !1;
  return h === 0 ? f = l.x > c.x : f = h > 0, f;
};
M.locatePointInRing = function(t, e) {
  return un.locatePointInRing(t, e);
};
M.distancePointLinePerpendicular = function(t, e, n) {
  var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y), s = ((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r;
  return Math.abs(s) * Math.sqrt(r);
};
M.computeOrientation = function(t, e, n) {
  return M.orientationIndex(t, e, n);
};
M.distancePointLine = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    if (e.length === 0)
      throw new gt("Line array must contain at least one vertex");
    for (var n = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
      var s = M.distancePointLine(t, e[r], e[r + 1]);
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
M.isOnLine = function(t, e) {
  for (var n = new Ji(), r = 1; r < e.length; r++) {
    var s = e[r - 1], o = e[r];
    if (n.computeIntersection(t, s, o), n.hasIntersection())
      return !0;
  }
  return !1;
};
wr.CLOCKWISE.get = function() {
  return -1;
};
wr.RIGHT.get = function() {
  return M.CLOCKWISE;
};
wr.COUNTERCLOCKWISE.get = function() {
  return 1;
};
wr.LEFT.get = function() {
  return M.COUNTERCLOCKWISE;
};
wr.COLLINEAR.get = function() {
  return 0;
};
wr.STRAIGHT.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(M, wr);
var ti = function() {
};
ti.prototype.filter = function(t) {
};
ti.prototype.interfaces_ = function() {
  return [];
};
ti.prototype.getClass = function() {
  return ti;
};
var V = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, Vn = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
V.prototype.isGeometryCollection = function() {
  return this.getSortIndex() === V.SORTINDEX_GEOMETRYCOLLECTION;
};
V.prototype.getFactory = function() {
  return this._factory;
};
V.prototype.getGeometryN = function(t) {
  return this;
};
V.prototype.getArea = function() {
  return 0;
};
V.prototype.isRectangle = function() {
  return !1;
};
V.prototype.equals = function() {
  if (arguments[0] instanceof V) {
    var t = arguments[0];
    return t === null ? !1 : this.equalsTopo(t);
  } else if (arguments[0] instanceof Object) {
    var e = arguments[0];
    if (!(e instanceof V))
      return !1;
    var n = e;
    return this.equalsExact(n);
  }
};
V.prototype.equalsExact = function(t) {
  return this === t || this.equalsExact(t, 0);
};
V.prototype.geometryChanged = function() {
  this.apply(V.geometryChangedFilter);
};
V.prototype.geometryChangedAction = function() {
  this._envelope = null;
};
V.prototype.equalsNorm = function(t) {
  return t === null ? !1 : this.norm().equalsExact(t.norm());
};
V.prototype.getLength = function() {
  return 0;
};
V.prototype.getNumGeometries = function() {
  return 1;
};
V.prototype.compareTo = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t;
    return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(t);
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return this.getSortIndex() !== n.getSortIndex() ? this.getSortIndex() - n.getSortIndex() : this.isEmpty() && n.isEmpty() ? 0 : this.isEmpty() ? -1 : n.isEmpty() ? 1 : this.compareToSameClass(n, r);
  }
};
V.prototype.getUserData = function() {
  return this._userData;
};
V.prototype.getSRID = function() {
  return this._SRID;
};
V.prototype.getEnvelope = function() {
  return this.getFactory().toGeometry(this.getEnvelopeInternal());
};
V.prototype.checkNotGeometryCollection = function(t) {
  if (t.getSortIndex() === V.SORTINDEX_GEOMETRYCOLLECTION)
    throw new gt("This method does not support GeometryCollection arguments");
};
V.prototype.equal = function(t, e, n) {
  return n === 0 ? t.equals(e) : t.distance(e) <= n;
};
V.prototype.norm = function() {
  var t = this.copy();
  return t.normalize(), t;
};
V.prototype.getPrecisionModel = function() {
  return this._factory.getPrecisionModel();
};
V.prototype.getEnvelopeInternal = function() {
  return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new A(this._envelope);
};
V.prototype.setSRID = function(t) {
  this._SRID = t;
};
V.prototype.setUserData = function(t) {
  this._userData = t;
};
V.prototype.compare = function(t, e) {
  for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext(); ) {
    var s = n.next(), o = r.next(), a = s.compareTo(o);
    if (a !== 0)
      return a;
  }
  return n.hasNext() ? 1 : r.hasNext() ? -1 : 0;
};
V.prototype.hashCode = function() {
  return this.getEnvelopeInternal().hashCode();
};
V.prototype.isGeometryCollectionOrDerived = function() {
  return this.getSortIndex() === V.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === V.SORTINDEX_MULTIPOINT || this.getSortIndex() === V.SORTINDEX_MULTILINESTRING || this.getSortIndex() === V.SORTINDEX_MULTIPOLYGON;
};
V.prototype.interfaces_ = function() {
  return [ya, Ae, Fe];
};
V.prototype.getClass = function() {
  return V;
};
V.hasNonEmptyElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (!t[e].isEmpty())
      return !0;
  return !1;
};
V.hasNullElements = function(t) {
  for (var e = 0; e < t.length; e++)
    if (t[e] === null)
      return !0;
  return !1;
};
Vn.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
Vn.SORTINDEX_POINT.get = function() {
  return 0;
};
Vn.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
Vn.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
Vn.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
Vn.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
Vn.SORTINDEX_POLYGON.get = function() {
  return 5;
};
Vn.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
Vn.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
Vn.geometryChangedFilter.get = function() {
  return ju;
};
Object.defineProperties(V, Vn);
var ju = function() {
};
ju.interfaces_ = function() {
  return [ti];
};
ju.filter = function(t) {
  t.geometryChangedAction();
};
var bn = function() {
};
bn.prototype.filter = function(t) {
};
bn.prototype.interfaces_ = function() {
  return [];
};
bn.prototype.getClass = function() {
  return bn;
};
var be = function() {
}, si = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
be.prototype.isInBoundary = function(t) {
};
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
si.Mod2BoundaryNodeRule.get = function() {
  return Hr;
};
si.EndPointBoundaryNodeRule.get = function() {
  return jr;
};
si.MultiValentEndPointBoundaryNodeRule.get = function() {
  return Zr;
};
si.MonoValentEndPointBoundaryNodeRule.get = function() {
  return Kr;
};
si.MOD2_BOUNDARY_RULE.get = function() {
  return new Hr();
};
si.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new jr();
};
si.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Zr();
};
si.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new Kr();
};
si.OGC_SFS_BOUNDARY_RULE.get = function() {
  return be.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(be, si);
var Hr = function() {
};
Hr.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Hr.prototype.interfaces_ = function() {
  return [be];
};
Hr.prototype.getClass = function() {
  return Hr;
};
var jr = function() {
};
jr.prototype.isInBoundary = function(t) {
  return t > 0;
};
jr.prototype.interfaces_ = function() {
  return [be];
};
jr.prototype.getClass = function() {
  return jr;
};
var Zr = function() {
};
Zr.prototype.isInBoundary = function(t) {
  return t > 1;
};
Zr.prototype.interfaces_ = function() {
  return [be];
};
Zr.prototype.getClass = function() {
  return Zr;
};
var Kr = function() {
};
Kr.prototype.isInBoundary = function(t) {
  return t === 1;
};
Kr.prototype.interfaces_ = function() {
  return [be];
};
Kr.prototype.getClass = function() {
  return Kr;
};
var Nt = function() {
};
Nt.prototype.add = function() {
};
Nt.prototype.addAll = function() {
};
Nt.prototype.isEmpty = function() {
};
Nt.prototype.iterator = function() {
};
Nt.prototype.size = function() {
};
Nt.prototype.toArray = function() {
};
Nt.prototype.remove = function() {
};
function Zu(i) {
  this.message = i || "";
}
Zu.prototype = new Error();
Zu.prototype.name = "IndexOutOfBoundsException";
var ps = function() {
};
ps.prototype.hasNext = function() {
};
ps.prototype.next = function() {
};
ps.prototype.remove = function() {
};
var Xe = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Nt);
function ds(i) {
  this.message = i || "";
}
ds.prototype = new Error();
ds.prototype.name = "NoSuchElementException";
var N = function(i) {
  function t() {
    i.call(this), this.array_ = [], arguments[0] instanceof Nt && this.addAll(arguments[0]);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.ensureCapacity = function() {
  }, t.prototype.interfaces_ = function() {
    return [i, Nt];
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
    return new V_(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new Zu();
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
}(Xe), V_ = function(i) {
  function t(e) {
    i.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new ds();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(n) {
    return this.arrayList_.set(this.position_ - 1, n);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(ps), mo = function(i) {
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
      } else if (arguments[0] instanceof v && typeof arguments[1] == "boolean") {
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
        var g = arguments[0], p = arguments[1], d = arguments[2];
        if (d)
          for (var _ = 0; _ < g.length; _++)
            r.add(g[_], p);
        else
          for (var m = g.length - 1; m >= 0; m--)
            r.add(g[m], p);
        return !0;
      } else if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof v) {
        var y = arguments[0], E = arguments[1], I = arguments[2];
        if (!I) {
          var S = this.size();
          if (S > 0) {
            if (y > 0) {
              var w = this.get(y - 1);
              if (w.equals2D(E))
                return null;
            }
            if (y < S) {
              var b = this.get(y);
              if (b.equals2D(E))
                return null;
            }
          }
        }
        i.prototype.add.call(this, y, E);
      }
    } else if (arguments.length === 4) {
      var L = arguments[0], P = arguments[1], G = arguments[2], B = arguments[3], Y = 1;
      G > B && (Y = -1);
      for (var U = G; U !== B; U += Y)
        r.add(L[U], P);
      return !0;
    }
  }, t.prototype.closeRing = function() {
    this.size() > 0 && this.add(new v(this.get(0)), !1);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, Object.defineProperties(t, e), t;
}(N), J = function() {
}, Ea = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
Ea.ForwardComparator.get = function() {
  return Zs;
};
Ea.BidirectionalComparator.get = function() {
  return Jr;
};
Ea.coordArrayType.get = function() {
  return new Array(0).fill(null);
};
J.prototype.interfaces_ = function() {
  return [];
};
J.prototype.getClass = function() {
  return J;
};
J.isRing = function(t) {
  return !(t.length < 4 || !t[0].equals2D(t[t.length - 1]));
};
J.ptNotInList = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    if (J.indexOf(r, e) < 0)
      return r;
  }
  return null;
};
J.scroll = function(t, e) {
  var n = J.indexOf(e, t);
  if (n < 0)
    return null;
  var r = new Array(t.length).fill(null);
  zt.arraycopy(t, n, r, 0, t.length - n), zt.arraycopy(t, 0, r, t.length - n, n), zt.arraycopy(r, 0, t, 0, t.length);
};
J.equals = function() {
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
J.intersection = function(t, e) {
  for (var n = new mo(), r = 0; r < t.length; r++)
    e.intersects(t[r]) && n.add(t[r], !0);
  return n.toCoordinateArray();
};
J.hasRepeatedPoints = function(t) {
  for (var e = 1; e < t.length; e++)
    if (t[e - 1].equals(t[e]))
      return !0;
  return !1;
};
J.removeRepeatedPoints = function(t) {
  if (!J.hasRepeatedPoints(t))
    return t;
  var e = new mo(t, !1);
  return e.toCoordinateArray();
};
J.reverse = function(t) {
  for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) {
    var s = t[r];
    t[r] = t[e - r], t[e - r] = s;
  }
};
J.removeNull = function(t) {
  for (var e = 0, n = 0; n < t.length; n++)
    t[n] !== null && e++;
  var r = new Array(e).fill(null);
  if (e === 0)
    return r;
  for (var s = 0, o = 0; o < t.length; o++)
    t[o] !== null && (r[s++] = t[o]);
  return r;
};
J.copyDeep = function() {
  if (arguments.length === 1) {
    for (var t = arguments[0], e = new Array(t.length).fill(null), n = 0; n < t.length; n++)
      e[n] = new v(t[n]);
    return e;
  } else if (arguments.length === 5)
    for (var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = arguments[4], l = 0; l < u; l++)
      o[a + l] = new v(r[s + l]);
};
J.isEqualReversed = function(t, e) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n], s = e[t.length - n - 1];
    if (r.compareTo(s) !== 0)
      return !1;
  }
  return !0;
};
J.envelope = function(t) {
  for (var e = new A(), n = 0; n < t.length; n++)
    e.expandToInclude(t[n]);
  return e;
};
J.toCoordinateArray = function(t) {
  return t.toArray(J.coordArrayType);
};
J.atLeastNCoordinatesOrNothing = function(t, e) {
  return e.length >= t ? e : [];
};
J.indexOf = function(t, e) {
  for (var n = 0; n < e.length; n++)
    if (t.equals(e[n]))
      return n;
  return -1;
};
J.increasingDirection = function(t) {
  for (var e = 0; e < Math.trunc(t.length / 2); e++) {
    var n = t.length - 1 - e, r = t[e].compareTo(t[n]);
    if (r !== 0)
      return r;
  }
  return 1;
};
J.compare = function(t, e) {
  for (var n = 0; n < t.length && n < e.length; ) {
    var r = t[n].compareTo(e[n]);
    if (r !== 0)
      return r;
    n++;
  }
  return n < e.length ? -1 : n < t.length ? 1 : 0;
};
J.minCoordinate = function(t) {
  for (var e = null, n = 0; n < t.length; n++)
    (e === null || e.compareTo(t[n]) > 0) && (e = t[n]);
  return e;
};
J.extract = function(t, e, n) {
  e = xe.clamp(e, 0, t.length), n = xe.clamp(n, -1, t.length);
  var r = n - e + 1;
  n < 0 && (r = 0), e >= t.length && (r = 0), n < e && (r = 0);
  var s = new Array(r).fill(null);
  if (r === 0)
    return s;
  for (var o = 0, a = e; a <= n; a++)
    s[o++] = t[a];
  return s;
};
Object.defineProperties(J, Ea);
var Zs = function() {
};
Zs.prototype.compare = function(t, e) {
  var n = t, r = e;
  return J.compare(n, r);
};
Zs.prototype.interfaces_ = function() {
  return [Wr];
};
Zs.prototype.getClass = function() {
  return Zs;
};
var Jr = function() {
};
Jr.prototype.compare = function(t, e) {
  var n = t, r = e;
  if (n.length < r.length)
    return -1;
  if (n.length > r.length)
    return 1;
  if (n.length === 0)
    return 0;
  var s = J.compare(n, r), o = J.isEqualReversed(n, r);
  return o ? 0 : s;
};
Jr.prototype.OLDcompare = function(t, e) {
  var n = t, r = e;
  if (n.length < r.length)
    return -1;
  if (n.length > r.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var s = J.increasingDirection(n), o = J.increasingDirection(r), a = s > 0 ? 0 : n.length - 1, u = o > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var c = n[a].compareTo(r[u]);
    if (c !== 0)
      return c;
    a += s, u += o;
  }
  return 0;
};
Jr.prototype.interfaces_ = function() {
  return [Wr];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var Nr = function() {
};
Nr.prototype.get = function() {
};
Nr.prototype.put = function() {
};
Nr.prototype.size = function() {
};
Nr.prototype.values = function() {
};
Nr.prototype.entrySet = function() {
};
var X_ = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Nr);
function yo(i) {
  this.message = i || "";
}
yo.prototype = new Error();
yo.prototype.name = "OperationNotSupported";
function xa() {
}
xa.prototype = new Nt();
xa.prototype.contains = function() {
};
var Ku = function(i) {
  function t() {
    i.call(this), this.array_ = [], arguments[0] instanceof Nt && this.addAll(arguments[0]);
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
    return new Y_(this);
  }, t;
}(xa), Y_ = function(i) {
  function t(e) {
    i.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new ds();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new yo();
  }, t;
}(ps), Wn = 0, Oi = 1;
function dc(i) {
  return i === null ? Wn : i.color;
}
function ut(i) {
  return i === null ? null : i.parent;
}
function Xn(i, t) {
  i !== null && (i.color = t);
}
function Ua(i) {
  return i === null ? null : i.left;
}
function _c(i) {
  return i === null ? null : i.right;
}
function qt() {
  this.root_ = null, this.size_ = 0;
}
qt.prototype = new X_();
qt.prototype.get = function(i) {
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
qt.prototype.put = function(i, t) {
  if (this.root_ === null)
    return this.root_ = {
      key: i,
      value: t,
      left: null,
      right: null,
      parent: null,
      color: Wn,
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
    color: Wn,
    getValue: function() {
      return this.value;
    },
    getKey: function() {
      return this.key;
    }
  };
  return r < 0 ? n.left = o : n.right = o, this.fixAfterInsertion(o), this.size_++, null;
};
qt.prototype.fixAfterInsertion = function(i) {
  var t = this;
  for (i.color = Oi; i != null && i !== this.root_ && i.parent.color === Oi; )
    if (ut(i) === Ua(ut(ut(i)))) {
      var e = _c(ut(ut(i)));
      dc(e) === Oi ? (Xn(ut(i), Wn), Xn(e, Wn), Xn(ut(ut(i)), Oi), i = ut(ut(i))) : (i === _c(ut(i)) && (i = ut(i), t.rotateLeft(i)), Xn(ut(i), Wn), Xn(ut(ut(i)), Oi), t.rotateRight(ut(ut(i))));
    } else {
      var n = Ua(ut(ut(i)));
      dc(n) === Oi ? (Xn(ut(i), Wn), Xn(n, Wn), Xn(ut(ut(i)), Oi), i = ut(ut(i))) : (i === Ua(ut(i)) && (i = ut(i), t.rotateRight(i)), Xn(ut(i), Wn), Xn(ut(ut(i)), Oi), t.rotateLeft(ut(ut(i))));
    }
  this.root_.color = Wn;
};
qt.prototype.values = function() {
  var i = new N(), t = this.getFirstEntry();
  if (t !== null)
    for (i.add(t.value); (t = qt.successor(t)) !== null; )
      i.add(t.value);
  return i;
};
qt.prototype.entrySet = function() {
  var i = new Ku(), t = this.getFirstEntry();
  if (t !== null)
    for (i.add(t); (t = qt.successor(t)) !== null; )
      i.add(t);
  return i;
};
qt.prototype.rotateLeft = function(i) {
  if (i != null) {
    var t = i.right;
    i.right = t.left, t.left != null && (t.left.parent = i), t.parent = i.parent, i.parent === null ? this.root_ = t : i.parent.left === i ? i.parent.left = t : i.parent.right = t, t.left = i, i.parent = t;
  }
};
qt.prototype.rotateRight = function(i) {
  if (i != null) {
    var t = i.left;
    i.left = t.right, t.right != null && (t.right.parent = i), t.parent = i.parent, i.parent === null ? this.root_ = t : i.parent.right === i ? i.parent.right = t : i.parent.left = t, t.right = i, i.parent = t;
  }
};
qt.prototype.getFirstEntry = function() {
  var i = this.root_;
  if (i != null)
    for (; i.left != null; )
      i = i.left;
  return i;
};
qt.successor = function(i) {
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
qt.prototype.size = function() {
  return this.size_;
};
var Ks = function() {
};
Ks.prototype.interfaces_ = function() {
  return [];
};
Ks.prototype.getClass = function() {
  return Ks;
};
function $h() {
}
$h.prototype = new xa();
function fn() {
  this.array_ = [], arguments[0] instanceof Nt && this.addAll(arguments[0]);
}
fn.prototype = new $h();
fn.prototype.contains = function(i) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var r = t.array_[e];
    if (r.compareTo(i) === 0)
      return !0;
  }
  return !1;
};
fn.prototype.add = function(i) {
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
fn.prototype.addAll = function(i) {
  for (var t = this, e = i.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
fn.prototype.remove = function(i) {
  throw new yo();
};
fn.prototype.size = function() {
  return this.array_.length;
};
fn.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
fn.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
fn.prototype.iterator = function() {
  return new Ca(this);
};
var Ca = function(i) {
  this.treeSet_ = i, this.position_ = 0;
};
Ca.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new ds();
  return this.treeSet_.array_[this.position_++];
};
Ca.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
Ca.prototype.remove = function() {
  throw new yo();
};
var Gi = function() {
};
Gi.sort = function() {
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
Gi.asList = function(t) {
  for (var e = new N(), n = 0, r = t.length; n < r; n++)
    e.add(t[n]);
  return e;
};
var tt = function() {
}, Je = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
Je.P.get = function() {
  return 0;
};
Je.L.get = function() {
  return 1;
};
Je.A.get = function() {
  return 2;
};
Je.FALSE.get = function() {
  return -1;
};
Je.TRUE.get = function() {
  return -2;
};
Je.DONTCARE.get = function() {
  return -3;
};
Je.SYM_FALSE.get = function() {
  return "F";
};
Je.SYM_TRUE.get = function() {
  return "T";
};
Je.SYM_DONTCARE.get = function() {
  return "*";
};
Je.SYM_P.get = function() {
  return "0";
};
Je.SYM_L.get = function() {
  return "1";
};
Je.SYM_A.get = function() {
  return "2";
};
tt.prototype.interfaces_ = function() {
  return [];
};
tt.prototype.getClass = function() {
  return tt;
};
tt.toDimensionSymbol = function(t) {
  switch (t) {
    case tt.FALSE:
      return tt.SYM_FALSE;
    case tt.TRUE:
      return tt.SYM_TRUE;
    case tt.DONTCARE:
      return tt.SYM_DONTCARE;
    case tt.P:
      return tt.SYM_P;
    case tt.L:
      return tt.SYM_L;
    case tt.A:
      return tt.SYM_A;
  }
  throw new gt("Unknown dimension value: " + t);
};
tt.toDimensionValue = function(t) {
  switch (js.toUpperCase(t)) {
    case tt.SYM_FALSE:
      return tt.FALSE;
    case tt.SYM_TRUE:
      return tt.TRUE;
    case tt.SYM_DONTCARE:
      return tt.DONTCARE;
    case tt.SYM_P:
      return tt.P;
    case tt.SYM_L:
      return tt.L;
    case tt.SYM_A:
      return tt.A;
  }
  throw new gt("Unknown dimension symbol: " + t);
};
Object.defineProperties(tt, Je);
var gn = function() {
};
gn.prototype.filter = function(t) {
};
gn.prototype.interfaces_ = function() {
  return [];
};
gn.prototype.getClass = function() {
  return gn;
};
var Ue = function() {
};
Ue.prototype.filter = function(t, e) {
};
Ue.prototype.isDone = function() {
};
Ue.prototype.isGeometryChanged = function() {
};
Ue.prototype.interfaces_ = function() {
  return [];
};
Ue.prototype.getClass = function() {
  return Ue;
};
var ne = function(i) {
  function t(n, r) {
    if (i.call(this, r), this._geometries = n || [], i.hasNullElements(this._geometries))
      throw new gt("geometries must not contain null elements");
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    for (var r = this, s = new A(), o = 0; o < this._geometries.length; o++)
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
    Gi.sort(this._geometries);
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._geometries[0].getCoordinate();
  }, t.prototype.getBoundaryDimension = function() {
    for (var r = this, s = tt.FALSE, o = 0; o < this._geometries.length; o++)
      s = Math.max(s, r._geometries[o].getBoundaryDimension());
    return s;
  }, t.prototype.getDimension = function() {
    for (var r = this, s = tt.FALSE, o = 0; o < this._geometries.length; o++)
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
      var s = arguments[0], o = new fn(Gi.asList(this._geometries)), a = new fn(Gi.asList(s._geometries));
      return this.compare(o, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], c = u, h = this.getNumGeometries(), f = c.getNumGeometries(), g = 0; g < h && g < f; ) {
        var p = r.getGeometryN(g), d = c.getGeometryN(g), _ = p.compareToSameClass(d, l);
        if (_ !== 0)
          return _;
        g++;
      }
      return g < h ? 1 : g < f ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var r = this;
    if (X(arguments[0], bn))
      for (var s = arguments[0], o = 0; o < this._geometries.length; o++)
        r._geometries[o].apply(s);
    else if (X(arguments[0], Ue)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (r._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], gn)) {
      var l = arguments[0];
      l.filter(this);
      for (var c = 0; c < this._geometries.length; c++)
        r._geometries[c].apply(l);
    } else if (X(arguments[0], ti)) {
      var h = arguments[0];
      h.filter(this);
      for (var f = 0; f < this._geometries.length; f++)
        r._geometries[f].apply(h);
    }
  }, t.prototype.getBoundary = function() {
    return this.checkNotGeometryCollection(this), j.shouldNeverReachHere(), null;
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
}(V), Vi = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return V.SORTINDEX_MULTILINESTRING;
  }, t.prototype.equalsExact = function() {
    if (arguments.length === 2) {
      var r = arguments[0], s = arguments[1];
      return this.isEquivalentClass(r) ? i.prototype.equalsExact.call(this, r, s) : !1;
    } else
      return i.prototype.equalsExact.apply(this, arguments);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? tt.FALSE : 0;
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
    return new Pe(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [Ks];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ne), Pe = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = be.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = r;
  }
};
Pe.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Pe.prototype.getBoundary = function() {
  return this._geom instanceof mt ? this.boundaryLineString(this._geom) : this._geom instanceof Vi ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Pe.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Pe.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Pe.prototype.computeBoundaryCoordinates = function(t) {
  var e = this, n = new N();
  this._endpointMap = new qt();
  for (var r = 0; r < t.getNumGeometries(); r++) {
    var s = t.getGeometryN(r);
    s.getNumPoints() !== 0 && (e.addEndpoint(s.getCoordinateN(0)), e.addEndpoint(s.getCoordinateN(s.getNumPoints() - 1)));
  }
  for (var o = this._endpointMap.entrySet().iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getValue(), l = u.count;
    e._bnRule.isInBoundary(l) && n.add(a.getKey());
  }
  return J.toCoordinateArray(n);
};
Pe.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new ea(), this._endpointMap.put(t, e)), e.count++;
};
Pe.prototype.interfaces_ = function() {
  return [];
};
Pe.prototype.getClass = function() {
  return Pe;
};
Pe.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Pe(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = new Pe(n, r);
    return s.getBoundary();
  }
};
var ea = function() {
  this.count = null;
};
ea.prototype.interfaces_ = function() {
  return [];
};
ea.prototype.getClass = function() {
  return ea;
};
function U_() {
}
function W_() {
}
var q_ = function() {
};
function H_() {
}
function j_() {
}
function Z_() {
}
var Te = function() {
}, Ju = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.chars = function(t, e) {
  for (var n = new Array(e).fill(null), r = 0; r < e; r++)
    n[r] = t;
  return String(n);
};
Te.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new H_(), n = new U_();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1], o = "";
    new W_(Te.getStackTrace(r));
    for (var a = new Z_(), u = 0; u < s; u++)
      try {
        o += a.readLine() + Te.NEWLINE;
      } catch (l) {
        if (l instanceof j_)
          j.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return o;
  }
};
Te.split = function(t, e) {
  for (var n = e.length, r = new N(), s = "" + t, o = s.indexOf(e); o >= 0; ) {
    var a = s.substring(0, o);
    r.add(a), s = s.substring(o + n), o = s.indexOf(e);
  }
  s.length > 0 && r.add(s);
  for (var u = new Array(r.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = r.get(l);
  return u;
};
Te.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Te.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
Te.spaces = function(t) {
  return Te.chars(" ", t);
};
Ju.NEWLINE.get = function() {
  return zt.getProperty("line.separator");
};
Ju.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new q_();
};
Object.defineProperties(Te, Ju);
var xt = function() {
};
xt.prototype.interfaces_ = function() {
  return [];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.copyCoord = function(t, e, n, r) {
  for (var s = Math.min(t.getDimension(), n.getDimension()), o = 0; o < s; o++)
    n.setOrdinate(r, o, t.getOrdinate(e, o));
};
xt.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, $.X) === t.getOrdinate(e - 1, $.X) && t.getOrdinate(0, $.Y) === t.getOrdinate(e - 1, $.Y);
};
xt.isEqual = function(t, e) {
  var n = t.size(), r = e.size();
  if (n !== r)
    return !1;
  for (var s = Math.min(t.getDimension(), e.getDimension()), o = 0; o < n; o++)
    for (var a = 0; a < s; a++) {
      var u = t.getOrdinate(o, a), l = e.getOrdinate(o, a);
      if (t.getOrdinate(o, a) !== e.getOrdinate(o, a) && !(W.isNaN(u) && W.isNaN(l)))
        return !1;
    }
  return !0;
};
xt.extend = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  if (xt.copy(e, 0, r, 0, s), s > 0)
    for (var o = s; o < n; o++)
      xt.copy(e, s - 1, r, o, 1);
  return r;
};
xt.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++)
    xt.swap(t, r, e - r);
};
xt.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var r = 0; r < t.getDimension(); r++) {
    var s = t.getOrdinate(e, r);
    t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, s);
  }
};
xt.copy = function(t, e, n, r, s) {
  for (var o = 0; o < s; o++)
    xt.copyCoord(t, e + o, n, r + o);
};
xt.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), r = new xn();
    r.append("(");
    for (var s = 0; s < e; s++) {
      s > 0 && r.append(" ");
      for (var o = 0; o < n; o++)
        o > 0 && r.append(","), r.append(Te.toString(t.getOrdinate(s, o)));
    }
    return r.append(")"), r.toString();
  }
};
xt.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return xt.createClosedRing(t, e, 4);
  var r = e.getOrdinate(0, $.X) === e.getOrdinate(n - 1, $.X) && e.getOrdinate(0, $.Y) === e.getOrdinate(n - 1, $.Y);
  return r ? e : xt.createClosedRing(t, e, n + 1);
};
xt.createClosedRing = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  xt.copy(e, 0, r, 0, s);
  for (var o = s; o < n; o++)
    xt.copy(e, 0, r, o, 1);
  return r;
};
var mt = function(i) {
  function t(n, r) {
    i.call(this, r), this._points = null, this.init(n);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    return this.isEmpty() ? new A() : this._points.expandEnvelope(new A());
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
        return r._points.getCoordinate(s).compareTo(r._points.getCoordinate(o)) > 0 && xt.reverse(r._points), null;
    }
  }, t.prototype.getCoordinate = function() {
    return this.isEmpty() ? null : this._points.getCoordinate(0);
  }, t.prototype.getBoundaryDimension = function() {
    return this.isClosed() ? tt.FALSE : 0;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
  }, t.prototype.getEndPoint = function() {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
  }, t.prototype.getDimension = function() {
    return 1;
  }, t.prototype.getLength = function() {
    return M.computeLength(this._points);
  }, t.prototype.getNumPoints = function() {
    return this._points.size();
  }, t.prototype.reverse = function() {
    var r = this._points.copy();
    xt.reverse(r);
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
    if (X(arguments[0], bn))
      for (var s = arguments[0], o = 0; o < this._points.size(); o++)
        s.filter(r._points.getCoordinate(o));
    else if (X(arguments[0], Ue)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(r._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], gn)) {
      var l = arguments[0];
      l.filter(this);
    } else if (X(arguments[0], ti)) {
      var c = arguments[0];
      c.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Pe(this).getBoundary();
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
      throw new gt("Invalid number of points in LineString (found " + r.size() + " - must be 0 or >= 2)");
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
    return [Ks];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(V), Js = function() {
};
Js.prototype.interfaces_ = function() {
  return [];
};
Js.prototype.getClass = function() {
  return Js;
};
var ge = function(i) {
  function t(n, r) {
    i.call(this, r), this._coordinates = n || null, this.init(this._coordinates);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.computeEnvelopeInternal = function() {
    if (this.isEmpty())
      return new A();
    var r = new A();
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
    return tt.FALSE;
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
    if (X(arguments[0], bn)) {
      var r = arguments[0];
      if (this.isEmpty())
        return null;
      r.filter(this.getCoordinate());
    } else if (X(arguments[0], Ue)) {
      var s = arguments[0];
      if (this.isEmpty())
        return null;
      s.filter(this._coordinates, 0), s.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], gn)) {
      var o = arguments[0];
      o.filter(this);
    } else if (X(arguments[0], ti)) {
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
    r === null && (r = this.getFactory().getCoordinateSequenceFactory().create([])), j.isTrue(r.size() <= 1), this._coordinates = r;
  }, t.prototype.isSimple = function() {
    return !0;
  }, t.prototype.interfaces_ = function() {
    return [Js];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(V), mi = function() {
};
mi.prototype.interfaces_ = function() {
  return [];
};
mi.prototype.getClass = function() {
  return mi;
};
var Ot = function(i) {
  function t(n, r, s) {
    if (i.call(this, s), this._shell = null, this._holes = null, n === null && (n = this.getFactory().createLinearRing()), r === null && (r = []), i.hasNullElements(r))
      throw new gt("holes must not contain null elements");
    if (n.isEmpty() && i.hasNonEmptyElements(r))
      throw new gt("shell is empty but holes are not");
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
    s += Math.abs(M.signedArea(this._shell.getCoordinateSequence()));
    for (var o = 0; o < this._holes.length; o++)
      s -= Math.abs(M.signedArea(r._holes[o].getCoordinateSequence()));
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
      var f = r.getX(h), g = r.getY(h), p = f !== l, d = g !== c;
      if (p === d)
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
      Gi.sort(this._holes);
    } else if (arguments.length === 2) {
      var o = arguments[0], a = arguments[1];
      if (o.isEmpty())
        return null;
      var u = new Array(o.getCoordinates().length - 1).fill(null);
      zt.arraycopy(o.getCoordinates(), 0, u, 0, u.length);
      var l = J.minCoordinate(o.getCoordinates());
      J.scroll(u, l), zt.arraycopy(u, 0, o.getCoordinates(), 0, u.length), o.getCoordinates()[u.length] = u[0], M.isCCW(o.getCoordinates()) === a && J.reverse(o.getCoordinates());
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
      for (var p = this.getNumInteriorRing(), d = c.getNumInteriorRing(), _ = 0; _ < p && _ < d; ) {
        var m = r.getInteriorRingN(_), y = c.getInteriorRingN(_), E = m.compareToSameClass(y, l);
        if (E !== 0)
          return E;
        _++;
      }
      return _ < p ? 1 : _ < d ? -1 : 0;
    }
  }, t.prototype.apply = function(r) {
    var s = this;
    if (X(r, bn)) {
      this._shell.apply(r);
      for (var o = 0; o < this._holes.length; o++)
        s._holes[o].apply(r);
    } else if (X(r, Ue)) {
      if (this._shell.apply(r), !r.isDone())
        for (var a = 0; a < this._holes.length && (s._holes[a].apply(r), !r.isDone()); a++)
          ;
      r.isGeometryChanged() && this.geometryChanged();
    } else if (X(r, gn))
      r.filter(this);
    else if (X(r, ti)) {
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
    return [mi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(V), Qr = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return V.SORTINDEX_MULTIPOINT;
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
    return tt.FALSE;
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
    return [Js];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ne), Mn = function(i) {
  function t(n, r) {
    n instanceof v && r instanceof K && (n = r.getCoordinateSequenceFactory().create(n)), i.call(this, n, r), this.validateConstruction();
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { MINIMUM_VALID_SIZE: { configurable: !0 }, serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return V.SORTINDEX_LINEARRING;
  }, t.prototype.getBoundaryDimension = function() {
    return tt.FALSE;
  }, t.prototype.isClosed = function() {
    return this.isEmpty() ? !0 : i.prototype.isClosed.call(this);
  }, t.prototype.reverse = function() {
    var r = this._points.copy();
    xt.reverse(r);
    var s = this.getFactory().createLinearRing(r);
    return s;
  }, t.prototype.validateConstruction = function() {
    if (!this.isEmpty() && !i.prototype.isClosed.call(this))
      throw new gt("Points of LinearRing do not form a closed linestring");
    if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE)
      throw new gt("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
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
}(mt), Pn = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { serialVersionUID: { configurable: !0 } };
  return t.prototype.getSortIndex = function() {
    return V.SORTINDEX_MULTIPOLYGON;
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
    for (var s = new N(), o = 0; o < this._geometries.length; o++)
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
    return [mi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ne), Me = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, Ia = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
Me.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
Me.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
Me.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ne ? this.editGeometryCollection(t, e) : t instanceof Ot ? this.editPolygon(t, e) : t instanceof ge ? e.edit(t, this._factory) : t instanceof mt ? e.edit(t, this._factory) : (j.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
Me.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, r = e.edit(t, this._factory), s = new N(), o = 0; o < r.getNumGeometries(); o++) {
    var a = n.edit(r.getGeometryN(o), e);
    a === null || a.isEmpty() || s.add(a);
  }
  return r.getClass() === Qr ? this._factory.createMultiPoint(s.toArray([])) : r.getClass() === Vi ? this._factory.createMultiLineString(s.toArray([])) : r.getClass() === Pn ? this._factory.createMultiPolygon(s.toArray([])) : this._factory.createGeometryCollection(s.toArray([]));
};
Me.prototype.editPolygon = function(t, e) {
  var n = this, r = e.edit(t, this._factory);
  if (r === null && (r = this._factory.createPolygon(null)), r.isEmpty())
    return r;
  var s = this.edit(r.getExteriorRing(), e);
  if (s === null || s.isEmpty())
    return this._factory.createPolygon();
  for (var o = new N(), a = 0; a < r.getNumInteriorRing(); a++) {
    var u = n.edit(r.getInteriorRingN(a), e);
    u === null || u.isEmpty() || o.add(u);
  }
  return this._factory.createPolygon(s, o.toArray([]));
};
Me.prototype.interfaces_ = function() {
  return [];
};
Me.prototype.getClass = function() {
  return Me;
};
Me.GeometryEditorOperation = function() {
};
Ia.NoOpGeometryOperation.get = function() {
  return Qs;
};
Ia.CoordinateOperation.get = function() {
  return $s;
};
Ia.CoordinateSequenceOperation.get = function() {
  return to;
};
Object.defineProperties(Me, Ia);
var Qs = function() {
};
Qs.prototype.edit = function(t, e) {
  return t;
};
Qs.prototype.interfaces_ = function() {
  return [Me.GeometryEditorOperation];
};
Qs.prototype.getClass = function() {
  return Qs;
};
var $s = function() {
};
$s.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof Mn ? e.createLinearRing(n) : t instanceof mt ? e.createLineString(n) : t instanceof ge ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
$s.prototype.interfaces_ = function() {
  return [Me.GeometryEditorOperation];
};
$s.prototype.getClass = function() {
  return $s;
};
var to = function() {
};
to.prototype.edit = function(t, e) {
  return t instanceof Mn ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof mt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof ge ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
to.prototype.interfaces_ = function() {
  return [Me.GeometryEditorOperation];
};
to.prototype.getClass = function() {
  return to;
};
var vt = function() {
  var t = this;
  if (this._dimension = 3, this._coordinates = null, arguments.length === 1) {
    if (arguments[0] instanceof Array)
      this._coordinates = arguments[0], this._dimension = 3;
    else if (Number.isInteger(arguments[0])) {
      var e = arguments[0];
      this._coordinates = new Array(e).fill(null);
      for (var n = 0; n < e; n++)
        t._coordinates[n] = new v();
    } else if (X(arguments[0], $)) {
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
        t._coordinates[c] = new v();
    }
  }
}, tf = { serialVersionUID: { configurable: !0 } };
vt.prototype.setOrdinate = function(t, e, n) {
  switch (e) {
    case $.X:
      this._coordinates[t].x = n;
      break;
    case $.Y:
      this._coordinates[t].y = n;
      break;
    case $.Z:
      this._coordinates[t].z = n;
      break;
    default:
      throw new gt("invalid ordinateIndex");
  }
};
vt.prototype.size = function() {
  return this._coordinates.length;
};
vt.prototype.getOrdinate = function(t, e) {
  switch (e) {
    case $.X:
      return this._coordinates[t].x;
    case $.Y:
      return this._coordinates[t].y;
    case $.Z:
      return this._coordinates[t].z;
  }
  return W.NaN;
};
vt.prototype.getCoordinate = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this._coordinates[t];
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z;
  }
};
vt.prototype.getCoordinateCopy = function(t) {
  return new v(this._coordinates[t]);
};
vt.prototype.getDimension = function() {
  return this._dimension;
};
vt.prototype.getX = function(t) {
  return this._coordinates[t].x;
};
vt.prototype.clone = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].clone();
  return new vt(e, this._dimension);
};
vt.prototype.expandEnvelope = function(t) {
  for (var e = this, n = 0; n < this._coordinates.length; n++)
    t.expandToInclude(e._coordinates[n]);
  return t;
};
vt.prototype.copy = function() {
  for (var t = this, e = new Array(this.size()).fill(null), n = 0; n < this._coordinates.length; n++)
    e[n] = t._coordinates[n].copy();
  return new vt(e, this._dimension);
};
vt.prototype.toString = function() {
  var t = this;
  if (this._coordinates.length > 0) {
    var e = new xn(17 * this._coordinates.length);
    e.append("("), e.append(this._coordinates[0]);
    for (var n = 1; n < this._coordinates.length; n++)
      e.append(", "), e.append(t._coordinates[n]);
    return e.append(")"), e.toString();
  } else
    return "()";
};
vt.prototype.getY = function(t) {
  return this._coordinates[t].y;
};
vt.prototype.toCoordinateArray = function() {
  return this._coordinates;
};
vt.prototype.interfaces_ = function() {
  return [$, Fe];
};
vt.prototype.getClass = function() {
  return vt;
};
tf.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(vt, tf);
var Dn = function() {
}, Qu = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
Dn.prototype.readResolve = function() {
  return Dn.instance();
};
Dn.prototype.create = function() {
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return new vt(t);
    } else if (X(arguments[0], $)) {
      var e = arguments[0];
      return new vt(e);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    return r > 3 && (r = 3), r < 2 ? new vt(n) : new vt(n, r);
  }
};
Dn.prototype.interfaces_ = function() {
  return [qr, Fe];
};
Dn.prototype.getClass = function() {
  return Dn;
};
Dn.instance = function() {
  return Dn.instanceObject;
};
Qu.serialVersionUID.get = function() {
  return -4099577099607551500;
};
Qu.instanceObject.get = function() {
  return new Dn();
};
Object.defineProperties(Dn, Qu);
var ef = function(i) {
  function t() {
    i.call(this), this.map_ = /* @__PURE__ */ new Map();
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.get = function(n) {
    return this.map_.get(n) || null;
  }, t.prototype.put = function(n, r) {
    return this.map_.set(n, r), r;
  }, t.prototype.values = function() {
    for (var n = new N(), r = this.map_.values(), s = r.next(); !s.done; )
      n.add(s.value), s = r.next();
    return n;
  }, t.prototype.entrySet = function() {
    var n = new Ku();
    return this.map_.entries().forEach(function(r) {
      return n.add(r);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(Nr), nt = function i() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = i.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof pn) {
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
}, $u = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
nt.prototype.equals = function(t) {
  if (!(t instanceof nt))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
nt.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), r = e.getMaximumSignificantDigits();
  return new hn(n).compareTo(new hn(r));
};
nt.prototype.getScale = function() {
  return this._scale;
};
nt.prototype.isFloating = function() {
  return this._modelType === nt.FLOATING || this._modelType === nt.FLOATING_SINGLE;
};
nt.prototype.getType = function() {
  return this._modelType;
};
nt.prototype.toString = function() {
  var t = "UNKNOWN";
  return this._modelType === nt.FLOATING ? t = "Floating" : this._modelType === nt.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === nt.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
};
nt.prototype.makePrecise = function() {
  if (typeof arguments[0] == "number") {
    var t = arguments[0];
    if (W.isNaN(t))
      return t;
    if (this._modelType === nt.FLOATING_SINGLE) {
      var e = t;
      return e;
    }
    return this._modelType === nt.FIXED ? Math.round(t * this._scale) / this._scale : t;
  } else if (arguments[0] instanceof v) {
    var n = arguments[0];
    if (this._modelType === nt.FLOATING)
      return null;
    n.x = this.makePrecise(n.x), n.y = this.makePrecise(n.y);
  }
};
nt.prototype.getMaximumSignificantDigits = function() {
  var t = 16;
  return this._modelType === nt.FLOATING ? t = 16 : this._modelType === nt.FLOATING_SINGLE ? t = 6 : this._modelType === nt.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
};
nt.prototype.setScale = function(t) {
  this._scale = Math.abs(t);
};
nt.prototype.interfaces_ = function() {
  return [Fe, Ae];
};
nt.prototype.getClass = function() {
  return nt;
};
nt.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
$u.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
$u.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(nt, $u);
var pn = function i(t) {
  this._name = t || null, i.nameToTypeMap.put(t, this);
}, tl = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
pn.prototype.readResolve = function() {
  return pn.nameToTypeMap.get(this._name);
};
pn.prototype.toString = function() {
  return this._name;
};
pn.prototype.interfaces_ = function() {
  return [Fe];
};
pn.prototype.getClass = function() {
  return pn;
};
tl.serialVersionUID.get = function() {
  return -552860263173159e4;
};
tl.nameToTypeMap.get = function() {
  return new ef();
};
Object.defineProperties(pn, tl);
nt.Type = pn;
nt.FIXED = new pn("FIXED");
nt.FLOATING = new pn("FLOATING");
nt.FLOATING_SINGLE = new pn("FLOATING SINGLE");
var K = function i() {
  this._precisionModel = new nt(), this._SRID = 0, this._coordinateSequenceFactory = i.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? X(arguments[0], qr) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof nt && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, nf = { serialVersionUID: { configurable: !0 } };
K.prototype.toGeometry = function(t) {
  return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new v(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new v(t.getMinX(), t.getMinY()), new v(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new v(t.getMinX(), t.getMinY()), new v(t.getMinX(), t.getMaxY()), new v(t.getMaxX(), t.getMaxY()), new v(t.getMaxX(), t.getMinY()), new v(t.getMinX(), t.getMinY())]), null);
};
K.prototype.createLineString = function(t) {
  if (t) {
    if (t instanceof Array)
      return new mt(this.getCoordinateSequenceFactory().create(t), this);
    if (X(t, $))
      return new mt(t, this);
  } else
    return new mt(this.getCoordinateSequenceFactory().create([]), this);
};
K.prototype.createMultiLineString = function() {
  if (arguments.length === 0)
    return new Vi(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Vi(t, this);
  }
};
K.prototype.buildGeometry = function(t) {
  for (var e = null, n = !1, r = !1, s = t.iterator(); s.hasNext(); ) {
    var o = s.next(), a = o.getClass();
    e === null && (e = a), a !== e && (n = !0), o.isGeometryCollectionOrDerived() && (r = !0);
  }
  if (e === null)
    return this.createGeometryCollection();
  if (n || r)
    return this.createGeometryCollection(K.toGeometryArray(t));
  var u = t.iterator().next(), l = t.size() > 1;
  if (l) {
    if (u instanceof Ot)
      return this.createMultiPolygon(K.toPolygonArray(t));
    if (u instanceof mt)
      return this.createMultiLineString(K.toLineStringArray(t));
    if (u instanceof ge)
      return this.createMultiPoint(K.toPointArray(t));
    j.shouldNeverReachHere("Unhandled class: " + u.getClass().getName());
  }
  return u;
};
K.prototype.createMultiPointFromCoords = function(t) {
  return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
};
K.prototype.createPoint = function() {
  if (arguments.length === 0)
    return this.createPoint(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof v) {
      var t = arguments[0];
      return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
    } else if (X(arguments[0], $)) {
      var e = arguments[0];
      return new ge(e, this);
    }
  }
};
K.prototype.getCoordinateSequenceFactory = function() {
  return this._coordinateSequenceFactory;
};
K.prototype.createPolygon = function() {
  if (arguments.length === 0)
    return new Ot(null, null, this);
  if (arguments.length === 1) {
    if (X(arguments[0], $)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof Mn) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    return new Ot(r, s, this);
  }
};
K.prototype.getSRID = function() {
  return this._SRID;
};
K.prototype.createGeometryCollection = function() {
  if (arguments.length === 0)
    return new ne(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new ne(t, this);
  }
};
K.prototype.createGeometry = function(t) {
  var e = new Me(this);
  return e.edit(t, {
    edit: function() {
      if (arguments.length === 2) {
        var n = arguments[0];
        return this._coordinateSequenceFactory.create(n);
      }
    }
  });
};
K.prototype.getPrecisionModel = function() {
  return this._precisionModel;
};
K.prototype.createLinearRing = function() {
  if (arguments.length === 0)
    return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var t = arguments[0];
      return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
    } else if (X(arguments[0], $)) {
      var e = arguments[0];
      return new Mn(e, this);
    }
  }
};
K.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new Pn(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Pn(t, this);
  }
};
K.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new Qr(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new Qr(e, this);
    } else if (arguments[0] instanceof Array) {
      var n = arguments[0];
      return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
    } else if (X(arguments[0], $)) {
      var r = arguments[0];
      if (r === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var s = new Array(r.size()).fill(null), o = 0; o < r.size(); o++) {
        var a = t.getCoordinateSequenceFactory().create(1, r.getDimension());
        xt.copy(r, o, a, 0, 1), s[o] = t.createPoint(a);
      }
      return this.createMultiPoint(s);
    }
  }
};
K.prototype.interfaces_ = function() {
  return [Fe];
};
K.prototype.getClass = function() {
  return K;
};
K.toMultiPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toGeometryArray = function(t) {
  if (t === null)
    return null;
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.getDefaultCoordinateSequenceFactory = function() {
  return Dn.instance();
};
K.toMultiLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toLineStringArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toMultiPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toLinearRingArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toPointArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.toPolygonArray = function(t) {
  var e = new Array(t.size()).fill(null);
  return t.toArray(e);
};
K.createPointFromInternalCoord = function(t, e) {
  return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t);
};
nf.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(K, nf);
var K_ = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Sa = function(t) {
  this.geometryFactory = t || new K();
};
Sa.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!sn[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return K_.indexOf(n) !== -1 ? sn[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? sn[n].apply(this, [e.geometries]) : sn[n].apply(this, [e]);
};
Sa.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!Un[e])
    throw new Error("Geometry is not supported");
  return Un[e].apply(this, [t]);
};
var sn = {
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
      if (!sn[n])
        throw new Error("Unknown GeoJSON type: " + i.type);
      t.geometry = this.read(i.geometry);
    }
    return i.bbox && (t.bbox = sn.bbox.apply(this, [i.bbox])), t;
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
      t.push(new v(n[0], n[1]));
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
      new v(i[0], i[1]),
      new v(i[2], i[1]),
      new v(i[2], i[3]),
      new v(i[0], i[3]),
      new v(i[0], i[1])
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
    var t = new v(i[0], i[1]);
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
      e.push(sn.Point.apply(t, [i[n]]));
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
    var t = sn.coordinates.apply(this, [i]);
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
      e.push(sn.LineString.apply(t, [i[n]]));
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
    for (var t = this, e = sn.coordinates.apply(this, [i[0]]), n = this.geometryFactory.createLinearRing(e), r = [], s = 1; s < i.length; ++s) {
      var o = i[s], a = sn.coordinates.apply(t, [o]), u = t.geometryFactory.createLinearRing(a);
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
      e.push(sn.Polygon.apply(t, [r]));
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
}, Un = {
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
    var t = Un.coordinate.apply(this, [i.getCoordinate()]);
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
      var r = i._geometries[n], s = Un.Point.apply(t, [r]);
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
      e.push(Un.coordinate.apply(t, [s]));
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
      var r = i._geometries[n], s = Un.LineString.apply(t, [r]);
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
    var t = this, e = [], n = Un.LineString.apply(this, [i._shell]);
    e.push(n.coordinates);
    for (var r = 0; r < i._holes.length; ++r) {
      var s = i._holes[r], o = Un.LineString.apply(t, [s]);
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
      var r = i._geometries[n], s = Un.Polygon.apply(t, [r]);
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
      e.push(Un[s].apply(t, [r]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, el = function(t) {
  this.geometryFactory = t || new K(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new Sa(this.geometryFactory);
};
el.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === nt.FIXED && this.reducePrecision(e), e;
};
el.prototype.reducePrecision = function(t) {
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
var rf = function() {
  this.parser = new Sa(this.geometryFactory);
};
rf.prototype.write = function(t) {
  return this.parser.write(t);
};
var R = function() {
}, Ra = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
R.prototype.interfaces_ = function() {
  return [];
};
R.prototype.getClass = function() {
  return R;
};
R.opposite = function(t) {
  return t === R.LEFT ? R.RIGHT : t === R.RIGHT ? R.LEFT : t;
};
Ra.ON.get = function() {
  return 0;
};
Ra.LEFT.get = function() {
  return 1;
};
Ra.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(R, Ra);
function wa(i) {
  this.message = i || "";
}
wa.prototype = new Error();
wa.prototype.name = "EmptyStackException";
function Cn() {
  this.array_ = [];
}
Cn.prototype = new Xe();
Cn.prototype.add = function(i) {
  return this.array_.push(i), !0;
};
Cn.prototype.get = function(i) {
  if (i < 0 || i >= this.size())
    throw new Error();
  return this.array_[i];
};
Cn.prototype.push = function(i) {
  return this.array_.push(i), i;
};
Cn.prototype.pop = function(i) {
  if (this.array_.length === 0)
    throw new wa();
  return this.array_.pop();
};
Cn.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new wa();
  return this.array_[this.array_.length - 1];
};
Cn.prototype.empty = function() {
  return this.array_.length === 0;
};
Cn.prototype.isEmpty = function() {
  return this.empty();
};
Cn.prototype.search = function(i) {
  return this.array_.indexOf(i);
};
Cn.prototype.size = function() {
  return this.array_.length;
};
Cn.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
var dn = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
dn.prototype.getCoordinate = function() {
  return this._minCoord;
};
dn.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
dn.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  j.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], r = M.computeOrientation(this._minCoord, n, e), s = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && r === M.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && r === M.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
};
dn.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), r = n.getCoordinates();
  if (e < 0 || e + 1 >= r.length || r[e].y === r[e + 1].y)
    return -1;
  var s = R.LEFT;
  return r[e].y < r[e + 1].y && (s = R.RIGHT), s;
};
dn.prototype.getEdge = function() {
  return this._orientedDe;
};
dn.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), r = 0; r < n.length - 1; r++)
    (e._minCoord === null || n[r].x > e._minCoord.x) && (e._minDe = t, e._minIndex = r, e._minCoord = n[r]);
};
dn.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
dn.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.isForward() && e.checkForRightmostCoordinate(r);
  }
  j.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var s = this.getRightmostSide(this._minDe, this._minIndex);
  s === R.LEFT && (this._orientedDe = this._minDe.getSym());
};
dn.prototype.interfaces_ = function() {
  return [];
};
dn.prototype.getClass = function() {
  return dn;
};
var ei = function(i) {
  function t(e, n) {
    i.call(this, t.msgWithCoord(e, n)), this.pt = n ? new v(n) : null, this.name = "TopologyException";
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
}($n), Na = function() {
  this.array_ = [];
};
Na.prototype.addLast = function(t) {
  this.array_.push(t);
};
Na.prototype.removeFirst = function() {
  return this.array_.shift();
};
Na.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var ie = function() {
  this._finder = null, this._dirEdgeList = new N(), this._nodes = new N(), this._rightMostCoord = null, this._env = null, this._finder = new dn();
};
ie.prototype.clearVisitedEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.setVisited(!1);
  }
};
ie.prototype.getRightmostCoordinate = function() {
  return this._rightMostCoord;
};
ie.prototype.computeNodeDepth = function(t) {
  for (var e = this, n = null, r = t.getEdges().iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.isVisited() || s.getSym().isVisited()) {
      n = s;
      break;
    }
  }
  if (n === null)
    throw new ei("unable to find edge to compute depths at " + t.getCoordinate());
  t.getEdges().computeDepths(n);
  for (var o = t.getEdges().iterator(); o.hasNext(); ) {
    var a = o.next();
    a.setVisited(!0), e.copySymDepths(a);
  }
};
ie.prototype.computeDepth = function(t) {
  this.clearVisitedEdges();
  var e = this._finder.getEdge();
  e.setEdgeDepths(R.RIGHT, t), this.copySymDepths(e), this.computeDepths(e);
};
ie.prototype.create = function(t) {
  this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
};
ie.prototype.findResultEdges = function() {
  for (var t = this._dirEdgeList.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getDepth(R.RIGHT) >= 1 && e.getDepth(R.LEFT) <= 0 && !e.isInteriorAreaEdge() && e.setInResult(!0);
  }
};
ie.prototype.computeDepths = function(t) {
  var e = this, n = new Ku(), r = new Na(), s = t.getNode();
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
ie.prototype.compareTo = function(t) {
  var e = t;
  return this._rightMostCoord.x < e._rightMostCoord.x ? -1 : this._rightMostCoord.x > e._rightMostCoord.x ? 1 : 0;
};
ie.prototype.getEnvelope = function() {
  if (this._env === null) {
    for (var t = new A(), e = this._dirEdgeList.iterator(); e.hasNext(); )
      for (var n = e.next(), r = n.getEdge().getCoordinates(), s = 0; s < r.length - 1; s++)
        t.expandToInclude(r[s]);
    this._env = t;
  }
  return this._env;
};
ie.prototype.addReachable = function(t) {
  var e = this, n = new Cn();
  for (n.add(t); !n.empty(); ) {
    var r = n.pop();
    e.add(r, n);
  }
};
ie.prototype.copySymDepths = function(t) {
  var e = t.getSym();
  e.setDepth(R.LEFT, t.getDepth(R.RIGHT)), e.setDepth(R.RIGHT, t.getDepth(R.LEFT));
};
ie.prototype.add = function(t, e) {
  var n = this;
  t.setVisited(!0), this._nodes.add(t);
  for (var r = t.getEdges().iterator(); r.hasNext(); ) {
    var s = r.next();
    n._dirEdgeList.add(s);
    var o = s.getSym(), a = o.getNode();
    a.isVisited() || e.push(a);
  }
};
ie.prototype.getNodes = function() {
  return this._nodes;
};
ie.prototype.getDirectedEdges = function() {
  return this._dirEdgeList;
};
ie.prototype.interfaces_ = function() {
  return [Ae];
};
ie.prototype.getClass = function() {
  return ie;
};
var lt = function i() {
  var t = this;
  if (this.location = null, arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      this.init(e.length);
    } else if (Number.isInteger(arguments[0])) {
      var n = arguments[0];
      this.init(1), this.location[R.ON] = n;
    } else if (arguments[0] instanceof i) {
      var r = arguments[0];
      if (this.init(r.location.length), r !== null)
        for (var s = 0; s < this.location.length; s++)
          t.location[s] = r.location[s];
    }
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    this.init(3), this.location[R.ON] = o, this.location[R.LEFT] = a, this.location[R.RIGHT] = u;
  }
};
lt.prototype.setAllLocations = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] = t;
};
lt.prototype.isNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] !== x.NONE)
      return !1;
  return !0;
};
lt.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === x.NONE && (e.location[n] = t);
};
lt.prototype.isLine = function() {
  return this.location.length === 1;
};
lt.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[R.ON] = this.location[R.ON], n[R.LEFT] = x.NONE, n[R.RIGHT] = x.NONE, this.location = n;
  }
  for (var r = 0; r < this.location.length; r++)
    e.location[r] === x.NONE && r < t.location.length && (e.location[r] = t.location[r]);
};
lt.prototype.getLocations = function() {
  return this.location;
};
lt.prototype.flip = function() {
  if (this.location.length <= 1)
    return null;
  var t = this.location[R.LEFT];
  this.location[R.LEFT] = this.location[R.RIGHT], this.location[R.RIGHT] = t;
};
lt.prototype.toString = function() {
  var t = new xn();
  return this.location.length > 1 && t.append(x.toLocationSymbol(this.location[R.LEFT])), t.append(x.toLocationSymbol(this.location[R.ON])), this.location.length > 1 && t.append(x.toLocationSymbol(this.location[R.RIGHT])), t.toString();
};
lt.prototype.setLocations = function(t, e, n) {
  this.location[R.ON] = t, this.location[R.LEFT] = e, this.location[R.RIGHT] = n;
};
lt.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : x.NONE;
};
lt.prototype.isArea = function() {
  return this.location.length > 1;
};
lt.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === x.NONE)
      return !0;
  return !1;
};
lt.prototype.setLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setLocation(R.ON, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.location[e] = n;
  }
};
lt.prototype.init = function(t) {
  this.location = new Array(t).fill(null), this.setAllLocations(x.NONE);
};
lt.prototype.isEqualOnSide = function(t, e) {
  return this.location[e] === t.location[e];
};
lt.prototype.allPositionsEqual = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    if (e.location[n] !== t)
      return !1;
  return !0;
};
lt.prototype.interfaces_ = function() {
  return [];
};
lt.prototype.getClass = function() {
  return lt;
};
var rt = function i() {
  if (this.elt = new Array(2).fill(null), arguments.length === 1) {
    if (Number.isInteger(arguments[0])) {
      var t = arguments[0];
      this.elt[0] = new lt(t), this.elt[1] = new lt(t);
    } else if (arguments[0] instanceof i) {
      var e = arguments[0];
      this.elt[0] = new lt(e.elt[0]), this.elt[1] = new lt(e.elt[1]);
    }
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this.elt[0] = new lt(x.NONE), this.elt[1] = new lt(x.NONE), this.elt[n].setLocation(r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    this.elt[0] = new lt(s, o, a), this.elt[1] = new lt(s, o, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], c = arguments[2], h = arguments[3];
    this.elt[0] = new lt(x.NONE, x.NONE, x.NONE), this.elt[1] = new lt(x.NONE, x.NONE, x.NONE), this.elt[u].setLocations(l, c, h);
  }
};
rt.prototype.getGeometryCount = function() {
  var t = 0;
  return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
};
rt.prototype.setAllLocations = function(t, e) {
  this.elt[t].setAllLocations(e);
};
rt.prototype.isNull = function(t) {
  return this.elt[t].isNull();
};
rt.prototype.setAllLocationsIfNull = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.elt[e].setAllLocationsIfNull(n);
  }
};
rt.prototype.isLine = function(t) {
  return this.elt[t].isLine();
};
rt.prototype.merge = function(t) {
  for (var e = this, n = 0; n < 2; n++)
    e.elt[n] === null && t.elt[n] !== null ? e.elt[n] = new lt(t.elt[n]) : e.elt[n].merge(t.elt[n]);
};
rt.prototype.flip = function() {
  this.elt[0].flip(), this.elt[1].flip();
};
rt.prototype.getLocation = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].get(R.ON);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return this.elt[e].get(n);
  }
};
rt.prototype.toString = function() {
  var t = new xn();
  return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
};
rt.prototype.isArea = function() {
  if (arguments.length === 0)
    return this.elt[0].isArea() || this.elt[1].isArea();
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.elt[t].isArea();
  }
};
rt.prototype.isAnyNull = function(t) {
  return this.elt[t].isAnyNull();
};
rt.prototype.setLocation = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.elt[t].setLocation(R.ON, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this.elt[n].setLocation(r, s);
  }
};
rt.prototype.isEqualOnSide = function(t, e) {
  return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e);
};
rt.prototype.allPositionsEqual = function(t, e) {
  return this.elt[t].allPositionsEqual(e);
};
rt.prototype.toLine = function(t) {
  this.elt[t].isArea() && (this.elt[t] = new lt(this.elt[t].location[0]));
};
rt.prototype.interfaces_ = function() {
  return [];
};
rt.prototype.getClass = function() {
  return rt;
};
rt.toLineLabel = function(t) {
  for (var e = new rt(x.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var wt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new N(), this._pts = new N(), this._label = new rt(x.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new N(), this._geometryFactory = null;
  var t = arguments[0], e = arguments[1];
  this._geometryFactory = e, this.computePoints(t), this.computeRing();
};
wt.prototype.computeRing = function() {
  var t = this;
  if (this._ring !== null)
    return null;
  for (var e = new Array(this._pts.size()).fill(null), n = 0; n < this._pts.size(); n++)
    e[n] = t._pts.get(n);
  this._ring = this._geometryFactory.createLinearRing(e), this._isHole = M.isCCW(this._ring.getCoordinates());
};
wt.prototype.isIsolated = function() {
  return this._label.getGeometryCount() === 1;
};
wt.prototype.computePoints = function(t) {
  var e = this;
  this._startDe = t;
  var n = t, r = !0;
  do {
    if (n === null)
      throw new ei("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new ei("Directed Edge visited twice during ring-building at " + n.getCoordinate());
    e._edges.add(n);
    var s = n.getLabel();
    j.isTrue(s.isArea()), e.mergeLabel(s), e.addPoints(n.getEdge(), n.isForward(), r), r = !1, e.setEdgeRing(n, e), n = e.getNext(n);
  } while (n !== this._startDe);
};
wt.prototype.getLinearRing = function() {
  return this._ring;
};
wt.prototype.getCoordinate = function(t) {
  return this._pts.get(t);
};
wt.prototype.computeMaxNodeDegree = function() {
  var t = this;
  this._maxNodeDegree = 0;
  var e = this._startDe;
  do {
    var n = e.getNode(), r = n.getEdges().getOutgoingDegree(t);
    r > t._maxNodeDegree && (t._maxNodeDegree = r), e = t.getNext(e);
  } while (e !== this._startDe);
  this._maxNodeDegree *= 2;
};
wt.prototype.addPoints = function(t, e, n) {
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
wt.prototype.isHole = function() {
  return this._isHole;
};
wt.prototype.setInResult = function() {
  var t = this._startDe;
  do
    t.getEdge().setInResult(!0), t = t.getNext();
  while (t !== this._startDe);
};
wt.prototype.containsPoint = function(t) {
  var e = this.getLinearRing(), n = e.getEnvelopeInternal();
  if (!n.contains(t) || !M.isPointInRing(t, e.getCoordinates()))
    return !1;
  for (var r = this._holes.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.containsPoint(t))
      return !1;
  }
  return !0;
};
wt.prototype.addHole = function(t) {
  this._holes.add(t);
};
wt.prototype.isShell = function() {
  return this._shell === null;
};
wt.prototype.getLabel = function() {
  return this._label;
};
wt.prototype.getEdges = function() {
  return this._edges;
};
wt.prototype.getMaxNodeDegree = function() {
  return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
};
wt.prototype.getShell = function() {
  return this._shell;
};
wt.prototype.mergeLabel = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.mergeLabel(t, 0), this.mergeLabel(t, 1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = e.getLocation(n, R.RIGHT);
    if (r === x.NONE)
      return null;
    if (this._label.getLocation(n) === x.NONE)
      return this._label.setLocation(n, r), null;
  }
};
wt.prototype.setShell = function(t) {
  this._shell = t, t !== null && t.addHole(this);
};
wt.prototype.toPolygon = function(t) {
  for (var e = this, n = new Array(this._holes.size()).fill(null), r = 0; r < this._holes.size(); r++)
    n[r] = e._holes.get(r).getLinearRing();
  var s = t.createPolygon(this.getLinearRing(), n);
  return s;
};
wt.prototype.interfaces_ = function() {
  return [];
};
wt.prototype.getClass = function() {
  return wt;
};
var J_ = function(i) {
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
}(wt), Q_ = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, r = new N(), s = this._startDe;
    do {
      if (s.getMinEdgeRing() === null) {
        var o = new J_(s, n._geometryFactory);
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
}(wt), Ce = function() {
  if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._label = t;
    }
  }
};
Ce.prototype.setVisited = function(t) {
  this._isVisited = t;
};
Ce.prototype.setInResult = function(t) {
  this._isInResult = t;
};
Ce.prototype.isCovered = function() {
  return this._isCovered;
};
Ce.prototype.isCoveredSet = function() {
  return this._isCoveredSet;
};
Ce.prototype.setLabel = function(t) {
  this._label = t;
};
Ce.prototype.getLabel = function() {
  return this._label;
};
Ce.prototype.setCovered = function(t) {
  this._isCovered = t, this._isCoveredSet = !0;
};
Ce.prototype.updateIM = function(t) {
  j.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t);
};
Ce.prototype.isInResult = function() {
  return this._isInResult;
};
Ce.prototype.isVisited = function() {
  return this._isVisited;
};
Ce.prototype.interfaces_ = function() {
  return [];
};
Ce.prototype.getClass = function() {
  return Ce;
};
var La = function(i) {
  function t() {
    i.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new rt(0, x.NONE);
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
    var s = x.NONE;
    if (s = this._label.getLocation(r), !n.isNull(r)) {
      var o = n.getLocation(r);
      s !== x.BOUNDARY && (s = o);
    }
    return s;
  }, t.prototype.setLabel = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      this._label === null ? this._label = new rt(n, r) : this._label.setLocation(n, r);
    } else
      return i.prototype.setLabel.apply(this, arguments);
  }, t.prototype.getEdges = function() {
    return this._edges;
  }, t.prototype.mergeLabel = function() {
    var n = this;
    if (arguments[0] instanceof t) {
      var r = arguments[0];
      this.mergeLabel(r._label);
    } else if (arguments[0] instanceof rt)
      for (var s = arguments[0], o = 0; o < 2; o++) {
        var a = n.computeMergedLocation(s, o), u = n._label.getLocation(o);
        u === x.NONE && n._label.setLocation(o, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var r = x.NONE;
    this._label !== null && (r = this._label.getLocation(n));
    var s = null;
    switch (r) {
      case x.BOUNDARY:
        s = x.INTERIOR;
        break;
      case x.INTERIOR:
        s = x.BOUNDARY;
        break;
      default:
        s = x.BOUNDARY;
        break;
    }
    this._label.setLocation(n, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ce), _n = function() {
  this.nodeMap = new qt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
_n.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
_n.prototype.addNode = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof La) {
    var n = arguments[0], r = this.nodeMap.get(n.getCoordinate());
    return r === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (r.mergeLabel(n), r);
  }
};
_n.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
_n.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
_n.prototype.values = function() {
  return this.nodeMap.values();
};
_n.prototype.getBoundaryNodes = function(t) {
  for (var e = new N(), n = this.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.getLabel().getLocation(t) === x.BOUNDARY && e.add(r);
  }
  return e;
};
_n.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
_n.prototype.interfaces_ = function() {
  return [];
};
_n.prototype.getClass = function() {
  return _n;
};
var st = function() {
}, vo = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
st.prototype.interfaces_ = function() {
  return [];
};
st.prototype.getClass = function() {
  return st;
};
st.isNorthern = function(t) {
  return t === st.NE || t === st.NW;
};
st.isOpposite = function(t, e) {
  if (t === e)
    return !1;
  var n = (t - e + 4) % 4;
  return n === 2;
};
st.commonHalfPlane = function(t, e) {
  if (t === e)
    return t;
  var n = (t - e + 4) % 4;
  if (n === 2)
    return -1;
  var r = t < e ? t : e, s = t > e ? t : e;
  return r === 0 && s === 3 ? 3 : r;
};
st.isInHalfPlane = function(t, e) {
  return e === st.SE ? t === st.SE || t === st.SW : t === e || t === e + 1;
};
st.quadrant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new gt("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
    return t >= 0 ? e >= 0 ? st.NE : st.SE : e >= 0 ? st.NW : st.SW;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var n = arguments[0], r = arguments[1];
    if (r.x === n.x && r.y === n.y)
      throw new gt("Cannot compute the quadrant for two identical points " + n);
    return r.x >= n.x ? r.y >= n.y ? st.NE : st.SE : r.y >= n.y ? st.NW : st.SW;
  }
};
vo.NE.get = function() {
  return 0;
};
vo.NW.get = function() {
  return 1;
};
vo.SW.get = function() {
  return 2;
};
vo.SE.get = function() {
  return 3;
};
Object.defineProperties(st, vo);
var Ht = function() {
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
Ht.prototype.compareDirection = function(t) {
  return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : M.computeOrientation(t._p0, t._p1, this._p1);
};
Ht.prototype.getDy = function() {
  return this._dy;
};
Ht.prototype.getCoordinate = function() {
  return this._p0;
};
Ht.prototype.setNode = function(t) {
  this._node = t;
};
Ht.prototype.print = function(t) {
  var e = Math.atan2(this._dy, this._dx), n = this.getClass().getName(), r = n.lastIndexOf("."), s = n.substring(r + 1);
  t.print("  " + s + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label);
};
Ht.prototype.compareTo = function(t) {
  var e = t;
  return this.compareDirection(e);
};
Ht.prototype.getDirectedCoordinate = function() {
  return this._p1;
};
Ht.prototype.getDx = function() {
  return this._dx;
};
Ht.prototype.getLabel = function() {
  return this._label;
};
Ht.prototype.getEdge = function() {
  return this._edge;
};
Ht.prototype.getQuadrant = function() {
  return this._quadrant;
};
Ht.prototype.getNode = function() {
  return this._node;
};
Ht.prototype.toString = function() {
  var t = Math.atan2(this._dy, this._dx), e = this.getClass().getName(), n = e.lastIndexOf("."), r = e.substring(n + 1);
  return "  " + r + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
};
Ht.prototype.computeLabel = function(t) {
};
Ht.prototype.init = function(t, e) {
  this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = st.quadrant(this._dx, this._dy), j.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
};
Ht.prototype.interfaces_ = function() {
  return [Ae];
};
Ht.prototype.getClass = function() {
  return Ht;
};
var gu = function(i) {
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
    this._label = new rt(this._edge.getLabel()), this._isForward || this._label.flip();
  }, t.prototype.getNext = function() {
    return this._next;
  }, t.prototype.setDepth = function(n, r) {
    if (this._depth[n] !== -999 && this._depth[n] !== r)
      throw new ei("assigned depths do not match", this.getCoordinate());
    this._depth[n] = r;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, r = !0, s = 0; s < 2; s++)
      n._label.isArea(s) && n._label.getLocation(s, R.LEFT) === x.INTERIOR && n._label.getLocation(s, R.RIGHT) === x.INTERIOR || (r = !1);
    return r;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    i.prototype.print.call(this, n), n.print(" " + this._depth[R.LEFT] + "/" + this._depth[R.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), r = !this._label.isArea(0) || this._label.allPositionsEqual(0, x.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, x.EXTERIOR);
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
    n === R.LEFT && (o = -1);
    var a = R.opposite(n), u = s * o, l = r + u;
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
    return n === x.EXTERIOR && r === x.INTERIOR ? 1 : n === x.INTERIOR && r === x.EXTERIOR ? -1 : 0;
  }, t;
}(Ht), $r = function() {
};
$r.prototype.createNode = function(t) {
  return new La(t, null);
};
$r.prototype.interfaces_ = function() {
  return [];
};
$r.prototype.getClass = function() {
  return $r;
};
var dt = function() {
  if (this._edges = new N(), this._nodes = null, this._edgeEndList = new N(), arguments.length === 0)
    this._nodes = new _n(new $r());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new _n(t);
  }
};
dt.prototype.printEdges = function(t) {
  var e = this;
  t.println("Edges:");
  for (var n = 0; n < this._edges.size(); n++) {
    t.println("edge " + n + ":");
    var r = e._edges.get(n);
    r.print(t), r.eiList.print(t);
  }
};
dt.prototype.find = function(t) {
  return this._nodes.find(t);
};
dt.prototype.addNode = function() {
  if (arguments[0] instanceof La) {
    var t = arguments[0];
    return this._nodes.addNode(t);
  } else if (arguments[0] instanceof v) {
    var e = arguments[0];
    return this._nodes.addNode(e);
  }
};
dt.prototype.getNodeIterator = function() {
  return this._nodes.iterator();
};
dt.prototype.linkResultDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkResultDirectedEdges();
  }
};
dt.prototype.debugPrintln = function(t) {
  zt.out.println(t);
};
dt.prototype.isBoundaryNode = function(t, e) {
  var n = this._nodes.find(e);
  if (n === null)
    return !1;
  var r = n.getLabel();
  return r !== null && r.getLocation(t) === x.BOUNDARY;
};
dt.prototype.linkAllDirectedEdges = function() {
  for (var t = this._nodes.iterator(); t.hasNext(); ) {
    var e = t.next();
    e.getEdges().linkAllDirectedEdges();
  }
};
dt.prototype.matchInSameDirection = function(t, e, n, r) {
  return t.equals(n) ? M.computeOrientation(t, e, r) === M.COLLINEAR && st.quadrant(t, e) === st.quadrant(n, r) : !1;
};
dt.prototype.getEdgeEnds = function() {
  return this._edgeEndList;
};
dt.prototype.debugPrint = function(t) {
  zt.out.print(t);
};
dt.prototype.getEdgeIterator = function() {
  return this._edges.iterator();
};
dt.prototype.findEdgeInSameDirection = function(t, e) {
  for (var n = this, r = 0; r < this._edges.size(); r++) {
    var s = n._edges.get(r), o = s.getCoordinates();
    if (n.matchInSameDirection(t, e, o[0], o[1]) || n.matchInSameDirection(t, e, o[o.length - 1], o[o.length - 2]))
      return s;
  }
  return null;
};
dt.prototype.insertEdge = function(t) {
  this._edges.add(t);
};
dt.prototype.findEdgeEnd = function(t) {
  for (var e = this.getEdgeEnds().iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.getEdge() === t)
      return n;
  }
  return null;
};
dt.prototype.addEdges = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e._edges.add(r);
    var s = new gu(r, !0), o = new gu(r, !1);
    s.setSym(o), o.setSym(s), e.add(s), e.add(o);
  }
};
dt.prototype.add = function(t) {
  this._nodes.add(t), this._edgeEndList.add(t);
};
dt.prototype.getNodes = function() {
  return this._nodes.values();
};
dt.prototype.findEdge = function(t, e) {
  for (var n = this, r = 0; r < this._edges.size(); r++) {
    var s = n._edges.get(r), o = s.getCoordinates();
    if (t.equals(o[0]) && e.equals(o[1]))
      return s;
  }
  return null;
};
dt.prototype.interfaces_ = function() {
  return [];
};
dt.prototype.getClass = function() {
  return dt;
};
dt.linkResultDirectedEdges = function(t) {
  for (var e = t.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.getEdges().linkResultDirectedEdges();
  }
};
var pe = function() {
  this._geometryFactory = null, this._shellList = new N();
  var t = arguments[0];
  this._geometryFactory = t;
};
pe.prototype.sortShellsAndHoles = function(t, e, n) {
  for (var r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    s.isHole() ? n.add(s) : e.add(s);
  }
};
pe.prototype.computePolygons = function(t) {
  for (var e = this, n = new N(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.toPolygon(e._geometryFactory);
    n.add(o);
  }
  return n;
};
pe.prototype.placeFreeHoles = function(t, e) {
  for (var n = this, r = e.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.getShell() === null) {
      var o = n.findEdgeRingContaining(s, t);
      if (o === null)
        throw new ei("unable to assign hole to a shell", s.getCoordinate(0));
      s.setShell(o);
    }
  }
};
pe.prototype.buildMinimalEdgeRings = function(t, e, n) {
  for (var r = this, s = new N(), o = t.iterator(); o.hasNext(); ) {
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
pe.prototype.containsPoint = function(t) {
  for (var e = this._shellList.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.containsPoint(t))
      return !0;
  }
  return !1;
};
pe.prototype.buildMaximalEdgeRings = function(t) {
  for (var e = this, n = new N(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    if (s.isInResult() && s.getLabel().isArea() && s.getEdgeRing() === null) {
      var o = new Q_(s, e._geometryFactory);
      n.add(o), o.setInResult();
    }
  }
  return n;
};
pe.prototype.placePolygonHoles = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.isHole() && r.setShell(t);
  }
};
pe.prototype.getPolygons = function() {
  var t = this.computePolygons(this._shellList);
  return t;
};
pe.prototype.findEdgeRingContaining = function(t, e) {
  for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), s = n.getCoordinateN(0), o = null, a = null, u = e.iterator(); u.hasNext(); ) {
    var l = u.next(), c = l.getLinearRing(), h = c.getEnvelopeInternal();
    o !== null && (a = o.getLinearRing().getEnvelopeInternal());
    var f = !1;
    h.contains(r) && M.isPointInRing(s, c.getCoordinates()) && (f = !0), f && (o === null || a.contains(h)) && (o = l);
  }
  return o;
};
pe.prototype.findShell = function(t) {
  for (var e = 0, n = null, r = t.iterator(); r.hasNext(); ) {
    var s = r.next();
    s.isHole() || (n = s, e++);
  }
  return j.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n;
};
pe.prototype.add = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.add(t.getEdgeEnds(), t.getNodes());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    dt.linkResultDirectedEdges(n);
    var r = this.buildMaximalEdgeRings(e), s = new N(), o = this.buildMinimalEdgeRings(r, this._shellList, s);
    this.sortShellsAndHoles(o, this._shellList, s), this.placeFreeHoles(this._shellList, s);
  }
};
pe.prototype.interfaces_ = function() {
  return [];
};
pe.prototype.getClass = function() {
  return pe;
};
var ts = function() {
};
ts.prototype.getBounds = function() {
};
ts.prototype.interfaces_ = function() {
  return [];
};
ts.prototype.getClass = function() {
  return ts;
};
var We = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
We.prototype.getItem = function() {
  return this._item;
};
We.prototype.getBounds = function() {
  return this._bounds;
};
We.prototype.interfaces_ = function() {
  return [ts, Fe];
};
We.prototype.getClass = function() {
  return We;
};
var ni = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new N(), this._items.add(null);
};
ni.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
ni.prototype.size = function() {
  return this._size;
};
ni.prototype.reorder = function(t) {
  for (var e = this, n = null, r = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(r) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, r);
};
ni.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
ni.prototype.isEmpty = function() {
  return this._size === 0;
};
ni.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
ni.prototype.interfaces_ = function() {
  return [];
};
ni.prototype.getClass = function() {
  return ni;
};
var yi = function() {
};
yi.prototype.visitItem = function(t) {
};
yi.prototype.interfaces_ = function() {
  return [];
};
yi.prototype.getClass = function() {
  return yi;
};
var cr = function() {
};
cr.prototype.insert = function(t, e) {
};
cr.prototype.remove = function(t, e) {
};
cr.prototype.query = function() {
};
cr.prototype.interfaces_ = function() {
  return [];
};
cr.prototype.getClass = function() {
  return cr;
};
var Tt = function() {
  if (this._childBoundables = new N(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, sf = { serialVersionUID: { configurable: !0 } };
Tt.prototype.getLevel = function() {
  return this._level;
};
Tt.prototype.size = function() {
  return this._childBoundables.size();
};
Tt.prototype.getChildBoundables = function() {
  return this._childBoundables;
};
Tt.prototype.addChildBoundable = function(t) {
  j.isTrue(this._bounds === null), this._childBoundables.add(t);
};
Tt.prototype.isEmpty = function() {
  return this._childBoundables.isEmpty();
};
Tt.prototype.getBounds = function() {
  return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
};
Tt.prototype.interfaces_ = function() {
  return [ts, Fe];
};
Tt.prototype.getClass = function() {
  return Tt;
};
sf.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Tt, sf);
var qe = function() {
};
qe.reverseOrder = function() {
  return {
    compare: function(e, n) {
      return n.compareTo(e);
    }
  };
};
qe.min = function(t) {
  return qe.sort(t), t.get(0);
};
qe.sort = function(t, e) {
  var n = t.toArray();
  e ? Gi.sort(n, e) : Gi.sort(n);
  for (var r = t.iterator(), s = 0, o = n.length; s < o; s++)
    r.next(), r.set(n[s]);
};
qe.singletonList = function(t) {
  var e = new N();
  return e.add(t), e;
};
var St = function() {
  this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance();
};
St.prototype.expandToQueue = function(t, e) {
  var n = St.isComposite(this._boundable1), r = St.isComposite(this._boundable2);
  if (n && r)
    return St.area(this._boundable1) > St.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, t, e), null) : (this.expand(this._boundable2, this._boundable1, t, e), null);
  if (n)
    return this.expand(this._boundable1, this._boundable2, t, e), null;
  if (r)
    return this.expand(this._boundable2, this._boundable1, t, e), null;
  throw new gt("neither boundable is composite");
};
St.prototype.isLeaves = function() {
  return !(St.isComposite(this._boundable1) || St.isComposite(this._boundable2));
};
St.prototype.compareTo = function(t) {
  var e = t;
  return this._distance < e._distance ? -1 : this._distance > e._distance ? 1 : 0;
};
St.prototype.expand = function(t, e, n, r) {
  for (var s = this, o = t.getChildBoundables(), a = o.iterator(); a.hasNext(); ) {
    var u = a.next(), l = new St(u, e, s._itemDistance);
    l.getDistance() < r && n.add(l);
  }
};
St.prototype.getBoundable = function(t) {
  return t === 0 ? this._boundable1 : this._boundable2;
};
St.prototype.getDistance = function() {
  return this._distance;
};
St.prototype.distance = function() {
  return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
};
St.prototype.interfaces_ = function() {
  return [Ae];
};
St.prototype.getClass = function() {
  return St;
};
St.area = function(t) {
  return t.getBounds().getArea();
};
St.isComposite = function(t) {
  return t instanceof Tt;
};
var Mt = function i() {
  if (this._root = null, this._built = !1, this._itemBoundables = new N(), this._nodeCapacity = null, arguments.length === 0) {
    var t = i.DEFAULT_NODE_CAPACITY;
    this._nodeCapacity = t;
  } else if (arguments.length === 1) {
    var e = arguments[0];
    j.isTrue(e > 1, "Node capacity must be greater than 1"), this._nodeCapacity = e;
  }
}, Pa = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
Mt.prototype.getNodeCapacity = function() {
  return this._nodeCapacity;
};
Mt.prototype.lastNode = function(t) {
  return t.get(t.size() - 1);
};
Mt.prototype.size = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, r = e.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      s instanceof Tt ? n += t.size(s) : s instanceof We && (n += 1);
    }
    return n;
  }
};
Mt.prototype.removeItem = function(t, e) {
  for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext(); ) {
    var s = r.next();
    s instanceof We && s.getItem() === e && (n = s);
  }
  return n !== null ? (t.getChildBoundables().remove(n), !0) : !1;
};
Mt.prototype.itemsTree = function() {
  var t = this;
  if (arguments.length === 0) {
    this.build();
    var e = this.itemsTree(this._root);
    return e === null ? new N() : e;
  } else if (arguments.length === 1) {
    for (var n = arguments[0], r = new N(), s = n.getChildBoundables().iterator(); s.hasNext(); ) {
      var o = s.next();
      if (o instanceof Tt) {
        var a = t.itemsTree(o);
        a !== null && r.add(a);
      } else
        o instanceof We ? r.add(o.getItem()) : j.shouldNeverReachHere();
    }
    return r.size() <= 0 ? null : r;
  }
};
Mt.prototype.insert = function(t, e) {
  j.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new We(t, e));
};
Mt.prototype.boundablesAtLevel = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0], n = new N();
    return this.boundablesAtLevel(e, this._root, n), n;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    if (j.isTrue(r > -2), s.getLevel() === r)
      return o.add(s), null;
    for (var a = s.getChildBoundables().iterator(); a.hasNext(); ) {
      var u = a.next();
      u instanceof Tt ? t.boundablesAtLevel(r, u, o) : (j.isTrue(u instanceof We), r === -1 && o.add(u));
    }
    return null;
  }
};
Mt.prototype.query = function() {
  var t = this;
  if (arguments.length === 1) {
    var e = arguments[0];
    this.build();
    var n = new N();
    return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), e) && this.query(e, this._root, n), n;
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    if (this.build(), this.isEmpty())
      return null;
    this.getIntersectsOp().intersects(this._root.getBounds(), r) && this.query(r, this._root, s);
  } else if (arguments.length === 3) {
    if (X(arguments[2], yi) && arguments[0] instanceof Object && arguments[1] instanceof Tt)
      for (var o = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), c = 0; c < l.size(); c++) {
        var h = l.get(c);
        t.getIntersectsOp().intersects(h.getBounds(), o) && (h instanceof Tt ? t.query(o, h, u) : h instanceof We ? u.visitItem(h.getItem()) : j.shouldNeverReachHere());
      }
    else if (X(arguments[2], Xe) && arguments[0] instanceof Object && arguments[1] instanceof Tt)
      for (var f = arguments[0], g = arguments[1], p = arguments[2], d = g.getChildBoundables(), _ = 0; _ < d.size(); _++) {
        var m = d.get(_);
        t.getIntersectsOp().intersects(m.getBounds(), f) && (m instanceof Tt ? t.query(f, m, p) : m instanceof We ? p.add(m.getItem()) : j.shouldNeverReachHere());
      }
  }
};
Mt.prototype.build = function() {
  if (this._built)
    return null;
  this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
};
Mt.prototype.getRoot = function() {
  return this.build(), this._root;
};
Mt.prototype.remove = function() {
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
      if (t.getIntersectsOp().intersects(c.getBounds(), r) && c instanceof Tt && (a = t.remove(r, c, o), a)) {
        u = c;
        break;
      }
    }
    return u !== null && u.getChildBoundables().isEmpty() && s.getChildBoundables().remove(u), a;
  }
};
Mt.prototype.createHigherLevels = function(t, e) {
  j.isTrue(!t.isEmpty());
  var n = this.createParentBoundables(t, e + 1);
  return n.size() === 1 ? n.get(0) : this.createHigherLevels(n, e + 1);
};
Mt.prototype.depth = function() {
  var t = this;
  if (arguments.length === 0)
    return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
  if (arguments.length === 1) {
    for (var e = arguments[0], n = 0, r = e.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      if (s instanceof Tt) {
        var o = t.depth(s);
        o > n && (n = o);
      }
    }
    return n + 1;
  }
};
Mt.prototype.createParentBoundables = function(t, e) {
  var n = this;
  j.isTrue(!t.isEmpty());
  var r = new N();
  r.add(this.createNode(e));
  var s = new N(t);
  qe.sort(s, this.getComparator());
  for (var o = s.iterator(); o.hasNext(); ) {
    var a = o.next();
    n.lastNode(r).getChildBoundables().size() === n.getNodeCapacity() && r.add(n.createNode(e)), n.lastNode(r).addChildBoundable(a);
  }
  return r;
};
Mt.prototype.isEmpty = function() {
  return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
};
Mt.prototype.interfaces_ = function() {
  return [Fe];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Mt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
Pa.IntersectsOp.get = function() {
  return $_;
};
Pa.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
Pa.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Mt, Pa);
var $_ = function() {
}, es = function() {
};
es.prototype.distance = function(t, e) {
};
es.prototype.interfaces_ = function() {
  return [];
};
es.prototype.getClass = function() {
  return es;
};
var of = function(i) {
  function t(n) {
    n = n || t.DEFAULT_NODE_CAPACITY, i.call(this, n);
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { STRtreeNode: { configurable: !0 }, serialVersionUID: { configurable: !0 }, xComparator: { configurable: !0 }, yComparator: { configurable: !0 }, intersectsOp: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
  return t.prototype.createParentBoundablesFromVerticalSlices = function(r, s) {
    var o = this;
    j.isTrue(r.length > 0);
    for (var a = new N(), u = 0; u < r.length; u++)
      a.addAll(o.createParentBoundablesFromVerticalSlice(r[u], s));
    return a;
  }, t.prototype.createNode = function(r) {
    return new mc(r);
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
      a[l] = new N();
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
      if (X(arguments[2], yi) && arguments[0] instanceof Object && arguments[1] instanceof Tt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        i.prototype.query.call(this, a, u, l);
      } else if (X(arguments[2], Xe) && arguments[0] instanceof Object && arguments[1] instanceof Tt) {
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
    j.isTrue(!r.isEmpty());
    var o = Math.trunc(Math.ceil(r.size() / this.getNodeCapacity())), a = new N(r);
    qe.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(o))));
    return this.createParentBoundablesFromVerticalSlices(u, s);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (X(arguments[0], es)) {
        var r = arguments[0], s = new St(this.getRoot(), this.getRoot(), r);
        return this.nearestNeighbour(s);
      } else if (arguments[0] instanceof St) {
        var o = arguments[0];
        return this.nearestNeighbour(o, W.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && X(arguments[1], es)) {
        var a = arguments[0], u = arguments[1], l = new St(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof St && typeof arguments[1] == "number") {
        var c = arguments[0], h = arguments[1], f = h, g = null, p = new ni();
        for (p.add(c); !p.isEmpty() && f > 0; ) {
          var d = p.poll(), _ = d.getDistance();
          if (_ >= f)
            break;
          d.isLeaves() ? (f = _, g = d) : d.expandToQueue(p, f);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var m = arguments[0], y = arguments[1], E = arguments[2], I = new We(m, y), S = new St(this.getRoot(), I, E);
      return this.nearestNeighbour(S)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [cr, Fe];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(r) {
    return t.avg(r.getMinX(), r.getMaxX());
  }, t.avg = function(r, s) {
    return (r + s) / 2;
  }, t.centreY = function(r) {
    return t.avg(r.getMinY(), r.getMaxY());
  }, e.STRtreeNode.get = function() {
    return mc;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [Wr];
      },
      compare: function(n, r) {
        return i.compareDoubles(t.centreX(n.getBounds()), t.centreX(r.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [Wr];
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
}(Mt), mc = function(i) {
  function t() {
    var e = arguments[0];
    i.call(this, e);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.computeBounds = function() {
    for (var n = null, r = this.getChildBoundables().iterator(); r.hasNext(); ) {
      var s = r.next();
      n === null ? n = new A(s.getBounds()) : n.expandToInclude(s.getBounds());
    }
    return n;
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Tt), oe = function() {
};
oe.prototype.interfaces_ = function() {
  return [];
};
oe.prototype.getClass = function() {
  return oe;
};
oe.relativeSign = function(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
};
oe.compare = function(t, e, n) {
  if (e.equals2D(n))
    return 0;
  var r = oe.relativeSign(e.x, n.x), s = oe.relativeSign(e.y, n.y);
  switch (t) {
    case 0:
      return oe.compareValue(r, s);
    case 1:
      return oe.compareValue(s, r);
    case 2:
      return oe.compareValue(s, -r);
    case 3:
      return oe.compareValue(-r, s);
    case 4:
      return oe.compareValue(-r, -s);
    case 5:
      return oe.compareValue(-s, -r);
    case 6:
      return oe.compareValue(-s, r);
    case 7:
      return oe.compareValue(r, -s);
  }
  return j.shouldNeverReachHere("invalid octant value"), 0;
};
oe.compareValue = function(t, e) {
  return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0;
};
var vi = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
  this._segString = t, this.coord = new v(e), this.segmentIndex = n, this._segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
vi.prototype.getCoordinate = function() {
  return this.coord;
};
vi.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
vi.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : oe.compare(this._segmentOctant, this.coord, e.coord);
};
vi.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
vi.prototype.isInterior = function() {
  return this._isInterior;
};
vi.prototype.interfaces_ = function() {
  return [Ae];
};
vi.prototype.getClass = function() {
  return vi;
};
var re = function() {
  this._nodeMap = new qt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
re.prototype.getSplitCoordinates = function() {
  var t = this, e = new mo();
  this.addEndpoints();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next();
    t.addEdgeCoordinates(r, s, e), r = s;
  }
  return e.toCoordinateArray();
};
re.prototype.addCollapsedNodes = function() {
  var t = this, e = new N();
  this.findCollapsesFromInsertedNodes(e), this.findCollapsesFromExistingVertices(e);
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next().intValue();
    t.add(t._edge.getCoordinate(r), r);
  }
};
re.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
re.prototype.findCollapsesFromExistingVertices = function(t) {
  for (var e = this, n = 0; n < this._edge.size() - 2; n++) {
    var r = e._edge.getCoordinate(n), s = e._edge.getCoordinate(n + 2);
    r.equals2D(s) && t.add(new hn(n + 1));
  }
};
re.prototype.addEdgeCoordinates = function(t, e, n) {
  var r = this, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  n.add(new v(t.coord), !1);
  for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++)
    n.add(r._edge.getCoordinate(a));
  o && n.add(new v(e.coord));
};
re.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
re.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints(), this.addCollapsedNodes();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(r, s);
    t.add(o), r = s;
  }
};
re.prototype.findCollapseIndex = function(t, e, n) {
  if (!t.coord.equals2D(e.coord))
    return !1;
  var r = e.segmentIndex - t.segmentIndex;
  return e.isInterior() || r--, r === 1 ? (n[0] = t.segmentIndex + 1, !0) : !1;
};
re.prototype.findCollapsesFromInsertedNodes = function(t) {
  for (var e = this, n = new Array(1).fill(null), r = this.iterator(), s = r.next(); r.hasNext(); ) {
    var o = r.next(), a = e.findCollapseIndex(s, o, n);
    a && t.add(new hn(n[0])), s = o;
  }
};
re.prototype.getEdge = function() {
  return this._edge;
};
re.prototype.addEndpoints = function() {
  var t = this._edge.size() - 1;
  this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t);
};
re.prototype.createSplitEdge = function(t, e) {
  var n = this, r = e.segmentIndex - t.segmentIndex + 2, s = this._edge.getCoordinate(e.segmentIndex), o = e.isInterior() || !e.coord.equals2D(s);
  o || r--;
  var a = new Array(r).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n._edge.getCoordinate(l);
  return o && (a[u] = new v(e.coord)), new Ct(a, this._edge.getData());
};
re.prototype.add = function(t, e) {
  var n = new vi(this._edge, t, e, this._edge.getSegmentOctant(e)), r = this._nodeMap.get(n);
  return r !== null ? (j.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this._nodeMap.put(n, n), n);
};
re.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), r = n.getCoordinate(0);
  if (!r.equals2D(e[0]))
    throw new $n("bad split edge start point at " + r);
  var s = t.get(t.size() - 1), o = s.getCoordinates(), a = o[o.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new $n("bad split edge end point at " + a);
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
var hr = function() {
};
hr.prototype.interfaces_ = function() {
  return [];
};
hr.prototype.getClass = function() {
  return hr;
};
hr.octant = function() {
  if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    if (t === 0 && e === 0)
      throw new gt("Cannot compute the octant for point ( " + t + ", " + e + " )");
    var n = Math.abs(t), r = Math.abs(e);
    return t >= 0 ? e >= 0 ? n >= r ? 0 : 1 : n >= r ? 7 : 6 : e >= 0 ? n >= r ? 3 : 2 : n >= r ? 4 : 5;
  } else if (arguments[0] instanceof v && arguments[1] instanceof v) {
    var s = arguments[0], o = arguments[1], a = o.x - s.x, u = o.y - s.y;
    if (a === 0 && u === 0)
      throw new gt("Cannot compute the octant for two identical points " + s);
    return hr.octant(a, u);
  }
};
var An = function() {
};
An.prototype.getCoordinates = function() {
};
An.prototype.size = function() {
};
An.prototype.getCoordinate = function(t) {
};
An.prototype.isClosed = function() {
};
An.prototype.setData = function(t) {
};
An.prototype.getData = function() {
};
An.prototype.interfaces_ = function() {
  return [];
};
An.prototype.getClass = function() {
  return An;
};
var eo = function() {
};
eo.prototype.addIntersection = function(t, e) {
};
eo.prototype.interfaces_ = function() {
  return [An];
};
eo.prototype.getClass = function() {
  return eo;
};
var Ct = function() {
  this._nodeList = new re(this), this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
Ct.prototype.getCoordinates = function() {
  return this._pts;
};
Ct.prototype.size = function() {
  return this._pts.length;
};
Ct.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
Ct.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
Ct.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
Ct.prototype.setData = function(t) {
  this._data = t;
};
Ct.prototype.safeOctant = function(t, e) {
  return t.equals2D(e) ? 0 : hr.octant(t, e);
};
Ct.prototype.getData = function() {
  return this._data;
};
Ct.prototype.addIntersection = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this.addIntersectionNode(t, e);
  } else if (arguments.length === 4) {
    var n = arguments[0], r = arguments[1], s = arguments[3], o = new v(n.getIntersection(s));
    this.addIntersection(o, r);
  }
};
Ct.prototype.toString = function() {
  return Ye.toLineString(new vt(this._pts));
};
Ct.prototype.getNodeList = function() {
  return this._nodeList;
};
Ct.prototype.addIntersectionNode = function(t, e) {
  var n = e, r = n + 1;
  if (r < this._pts.length) {
    var s = this._pts[r];
    t.equals2D(s) && (n = r);
  }
  var o = this._nodeList.add(t, n);
  return o;
};
Ct.prototype.addIntersections = function(t, e, n) {
  for (var r = this, s = 0; s < t.getIntersectionNum(); s++)
    r.addIntersection(t, e, n, s);
};
Ct.prototype.interfaces_ = function() {
  return [eo];
};
Ct.prototype.getClass = function() {
  return Ct;
};
Ct.getNodedSubstrings = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new N();
    return Ct.getNodedSubstrings(t, e), e;
  } else if (arguments.length === 2)
    for (var n = arguments[0], r = arguments[1], s = n.iterator(); s.hasNext(); ) {
      var o = s.next();
      o.getNodeList().addSplitEdges(r);
    }
};
var F = function() {
  if (this.p0 = null, this.p1 = null, arguments.length === 0)
    this.p0 = new v(), this.p1 = new v();
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.p0 = new v(t.p0), this.p1 = new v(t.p1);
  } else if (arguments.length === 2)
    this.p0 = arguments[0], this.p1 = arguments[1];
  else if (arguments.length === 4) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = arguments[3];
    this.p0 = new v(e, n), this.p1 = new v(r, s);
  }
}, af = { serialVersionUID: { configurable: !0 } };
F.prototype.minX = function() {
  return Math.min(this.p0.x, this.p1.x);
};
F.prototype.orientationIndex = function() {
  if (arguments[0] instanceof F) {
    var t = arguments[0], e = M.orientationIndex(this.p0, this.p1, t.p0), n = M.orientationIndex(this.p0, this.p1, t.p1);
    return e >= 0 && n >= 0 || e <= 0 && n <= 0 ? Math.max(e, n) : 0;
  } else if (arguments[0] instanceof v) {
    var r = arguments[0];
    return M.orientationIndex(this.p0, this.p1, r);
  }
};
F.prototype.toGeometry = function(t) {
  return t.createLineString([this.p0, this.p1]);
};
F.prototype.isVertical = function() {
  return this.p0.x === this.p1.x;
};
F.prototype.equals = function(t) {
  if (!(t instanceof F))
    return !1;
  var e = t;
  return this.p0.equals(e.p0) && this.p1.equals(e.p1);
};
F.prototype.intersection = function(t) {
  var e = new Ji();
  return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null;
};
F.prototype.project = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0];
    if (t.equals(this.p0) || t.equals(this.p1))
      return new v(t);
    var e = this.projectionFactor(t), n = new v();
    return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n;
  } else if (arguments[0] instanceof F) {
    var r = arguments[0], s = this.projectionFactor(r.p0), o = this.projectionFactor(r.p1);
    if (s >= 1 && o >= 1 || s <= 0 && o <= 0)
      return null;
    var a = this.project(r.p0);
    s < 0 && (a = this.p0), s > 1 && (a = this.p1);
    var u = this.project(r.p1);
    return o < 0 && (u = this.p0), o > 1 && (u = this.p1), new F(a, u);
  }
};
F.prototype.normalize = function() {
  this.p1.compareTo(this.p0) < 0 && this.reverse();
};
F.prototype.angle = function() {
  return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
};
F.prototype.getCoordinate = function(t) {
  return t === 0 ? this.p0 : this.p1;
};
F.prototype.distancePerpendicular = function(t) {
  return M.distancePointLinePerpendicular(t, this.p0, this.p1);
};
F.prototype.minY = function() {
  return Math.min(this.p0.y, this.p1.y);
};
F.prototype.midPoint = function() {
  return F.midPoint(this.p0, this.p1);
};
F.prototype.projectionFactor = function(t) {
  if (t.equals(this.p0))
    return 0;
  if (t.equals(this.p1))
    return 1;
  var e = this.p1.x - this.p0.x, n = this.p1.y - this.p0.y, r = e * e + n * n;
  if (r <= 0)
    return W.NaN;
  var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r;
  return s;
};
F.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), r = W.MAX_VALUE, s = null, o = this.closestPoint(t.p0);
  r = o.distance(t.p0), n[0] = o, n[1] = t.p0;
  var a = this.closestPoint(t.p1);
  s = a.distance(t.p1), s < r && (r = s, n[0] = a, n[1] = t.p1);
  var u = t.closestPoint(this.p0);
  s = u.distance(this.p0), s < r && (r = s, n[0] = this.p0, n[1] = u);
  var l = t.closestPoint(this.p1);
  return s = l.distance(this.p1), s < r && (r = s, n[0] = this.p1, n[1] = l), n;
};
F.prototype.closestPoint = function(t) {
  var e = this.projectionFactor(t);
  if (e > 0 && e < 1)
    return this.project(t);
  var n = this.p0.distance(t), r = this.p1.distance(t);
  return n < r ? this.p0 : this.p1;
};
F.prototype.maxX = function() {
  return Math.max(this.p0.x, this.p1.x);
};
F.prototype.getLength = function() {
  return this.p0.distance(this.p1);
};
F.prototype.compareTo = function(t) {
  var e = t, n = this.p0.compareTo(e.p0);
  return n !== 0 ? n : this.p1.compareTo(e.p1);
};
F.prototype.reverse = function() {
  var t = this.p0;
  this.p0 = this.p1, this.p1 = t;
};
F.prototype.equalsTopo = function(t) {
  return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0);
};
F.prototype.lineIntersection = function(t) {
  try {
    var e = Ve.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (n) {
    if (!(n instanceof gs))
      throw n;
  } finally {
  }
  return null;
};
F.prototype.maxY = function() {
  return Math.max(this.p0.y, this.p1.y);
};
F.prototype.pointAlongOffset = function(t, e) {
  var n = this.p0.x + t * (this.p1.x - this.p0.x), r = this.p0.y + t * (this.p1.y - this.p0.y), s = this.p1.x - this.p0.x, o = this.p1.y - this.p0.y, a = Math.sqrt(s * s + o * o), u = 0, l = 0;
  if (e !== 0) {
    if (a <= 0)
      throw new Error("Cannot compute offset from zero-length line segment");
    u = e * s / a, l = e * o / a;
  }
  var c = n - l, h = r + u, f = new v(c, h);
  return f;
};
F.prototype.setCoordinates = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    this.setCoordinates(t.p0, t.p1);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y;
  }
};
F.prototype.segmentFraction = function(t) {
  var e = this.projectionFactor(t);
  return e < 0 ? e = 0 : (e > 1 || W.isNaN(e)) && (e = 1), e;
};
F.prototype.toString = function() {
  return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
};
F.prototype.isHorizontal = function() {
  return this.p0.y === this.p1.y;
};
F.prototype.distance = function() {
  if (arguments[0] instanceof F) {
    var t = arguments[0];
    return M.distanceLineLine(this.p0, this.p1, t.p0, t.p1);
  } else if (arguments[0] instanceof v) {
    var e = arguments[0];
    return M.distancePointLine(e, this.p0, this.p1);
  }
};
F.prototype.pointAlong = function(t) {
  var e = new v();
  return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e;
};
F.prototype.hashCode = function() {
  var t = W.doubleToLongBits(this.p0.x);
  t ^= W.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = W.doubleToLongBits(this.p1.x);
  n ^= W.doubleToLongBits(this.p1.y) * 31;
  var r = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ r;
};
F.prototype.interfaces_ = function() {
  return [Ae, Fe];
};
F.prototype.getClass = function() {
  return F;
};
F.midPoint = function(t, e) {
  return new v((t.x + e.x) / 2, (t.y + e.y) / 2);
};
af.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(F, af);
var no = function() {
  this.tempEnv1 = new A(), this.tempEnv2 = new A(), this._overlapSeg1 = new F(), this._overlapSeg2 = new F();
};
no.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(r, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
no.prototype.interfaces_ = function() {
  return [];
};
no.prototype.getClass = function() {
  return no;
};
var de = function() {
  this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
  this._pts = t, this._start = e, this._end = n, this._context = r;
};
de.prototype.getLineSegment = function(t, e) {
  e.p0 = this._pts[t], e.p1 = this._pts[t + 1];
};
de.prototype.computeSelect = function(t, e, n, r) {
  var s = this._pts[e], o = this._pts[n];
  if (r.tempEnv1.init(s, o), n - e === 1)
    return r.select(this, e), null;
  if (!t.intersects(r.tempEnv1))
    return null;
  var a = Math.trunc((e + n) / 2);
  e < a && this.computeSelect(t, e, a, r), a < n && this.computeSelect(t, a, n, r);
};
de.prototype.getCoordinates = function() {
  for (var t = this, e = new Array(this._end - this._start + 1).fill(null), n = 0, r = this._start; r <= this._end; r++)
    e[n++] = t._pts[r];
  return e;
};
de.prototype.computeOverlaps = function(t, e) {
  this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e);
};
de.prototype.setId = function(t) {
  this._id = t;
};
de.prototype.select = function(t, e) {
  this.computeSelect(t, this._start, this._end, e);
};
de.prototype.getEnvelope = function() {
  if (this._env === null) {
    var t = this._pts[this._start], e = this._pts[this._end];
    this._env = new A(t, e);
  }
  return this._env;
};
de.prototype.getEndIndex = function() {
  return this._end;
};
de.prototype.getStartIndex = function() {
  return this._start;
};
de.prototype.getContext = function() {
  return this._context;
};
de.prototype.getId = function() {
  return this._id;
};
de.prototype.computeOverlapsInternal = function(t, e, n, r, s, o) {
  var a = this._pts[t], u = this._pts[e], l = n._pts[r], c = n._pts[s];
  if (e - t === 1 && s - r === 1)
    return o.overlap(this, t, n, r), null;
  if (o.tempEnv1.init(a, u), o.tempEnv2.init(l, c), !o.tempEnv1.intersects(o.tempEnv2))
    return null;
  var h = Math.trunc((t + e) / 2), f = Math.trunc((r + s) / 2);
  t < h && (r < f && this.computeOverlapsInternal(t, h, n, r, f, o), f < s && this.computeOverlapsInternal(t, h, n, f, s, o)), h < e && (r < f && this.computeOverlapsInternal(h, e, n, r, f, o), f < s && this.computeOverlapsInternal(h, e, n, f, s, o));
};
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
var ln = function() {
};
ln.prototype.interfaces_ = function() {
  return [];
};
ln.prototype.getClass = function() {
  return ln;
};
ln.getChainStartIndices = function(t) {
  var e = 0, n = new N();
  n.add(new hn(e));
  do {
    var r = ln.findChainEnd(t, e);
    n.add(new hn(r)), e = r;
  } while (e < t.length - 1);
  var s = ln.toIntArray(n);
  return s;
};
ln.findChainEnd = function(t, e) {
  for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]); )
    n++;
  if (n >= t.length - 1)
    return t.length - 1;
  for (var r = st.quadrant(t[n], t[n + 1]), s = e + 1; s < t.length; ) {
    if (!t[s - 1].equals2D(t[s])) {
      var o = st.quadrant(t[s - 1], t[s]);
      if (o !== r)
        break;
    }
    s++;
  }
  return s - 1;
};
ln.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return ln.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], r = new N(), s = ln.getChainStartIndices(e), o = 0; o < s.length - 1; o++) {
      var a = new de(e, s[o], s[o + 1], n);
      r.add(a);
    }
    return r;
  }
};
ln.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Xi = function() {
};
Xi.prototype.computeNodes = function(t) {
};
Xi.prototype.getNodedSubstrings = function() {
};
Xi.prototype.interfaces_ = function() {
  return [];
};
Xi.prototype.getClass = function() {
  return Xi;
};
var io = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
io.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
io.prototype.interfaces_ = function() {
  return [Xi];
};
io.prototype.getClass = function() {
  return io;
};
var nl = function(i) {
  function t(n) {
    n ? i.call(this, n) : i.call(this), this._monoChains = new N(), this._index = new of(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
  }
  i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t;
  var e = { SegmentOverlapAction: { configurable: !0 } };
  return t.prototype.getMonotoneChains = function() {
    return this._monoChains;
  }, t.prototype.getNodedSubstrings = function() {
    return Ct.getNodedSubstrings(this._nodedSegStrings);
  }, t.prototype.getIndex = function() {
    return this._index;
  }, t.prototype.add = function(r) {
    for (var s = this, o = ln.getChains(r.getCoordinates(), r), a = o.iterator(); a.hasNext(); ) {
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
    for (var r = this, s = new yc(this._segInt), o = this._monoChains.iterator(); o.hasNext(); )
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
    return yc;
  }, Object.defineProperties(t, e), t;
}(io), yc = function(i) {
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
}(no), et = function i() {
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
}, oi = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
et.prototype.getEndCapStyle = function() {
  return this._endCapStyle;
};
et.prototype.isSingleSided = function() {
  return this._isSingleSided;
};
et.prototype.setQuadrantSegments = function(t) {
  this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = et.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = et.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== et.JOIN_ROUND && (this._quadrantSegments = et.DEFAULT_QUADRANT_SEGMENTS);
};
et.prototype.getJoinStyle = function() {
  return this._joinStyle;
};
et.prototype.setJoinStyle = function(t) {
  this._joinStyle = t;
};
et.prototype.setSimplifyFactor = function(t) {
  this._simplifyFactor = t < 0 ? 0 : t;
};
et.prototype.getSimplifyFactor = function() {
  return this._simplifyFactor;
};
et.prototype.getQuadrantSegments = function() {
  return this._quadrantSegments;
};
et.prototype.setEndCapStyle = function(t) {
  this._endCapStyle = t;
};
et.prototype.getMitreLimit = function() {
  return this._mitreLimit;
};
et.prototype.setMitreLimit = function(t) {
  this._mitreLimit = t;
};
et.prototype.setSingleSided = function(t) {
  this._isSingleSided = t;
};
et.prototype.interfaces_ = function() {
  return [];
};
et.prototype.getClass = function() {
  return et;
};
et.bufferDistanceError = function(t) {
  var e = Math.PI / 2 / t;
  return 1 - Math.cos(e / 2);
};
oi.CAP_ROUND.get = function() {
  return 1;
};
oi.CAP_FLAT.get = function() {
  return 2;
};
oi.CAP_SQUARE.get = function() {
  return 3;
};
oi.JOIN_ROUND.get = function() {
  return 1;
};
oi.JOIN_MITRE.get = function() {
  return 2;
};
oi.JOIN_BEVEL.get = function() {
  return 3;
};
oi.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
oi.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
oi.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(et, oi);
var yt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = M.COUNTERCLOCKWISE, this._inputLine = t || null;
}, Eo = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
yt.prototype.isDeletable = function(t, e, n, r) {
  var s = this._inputLine[t], o = this._inputLine[e], a = this._inputLine[n];
  return !this.isConcave(s, o, a) || !this.isShallow(s, o, a, r) ? !1 : this.isShallowSampled(s, o, t, n, r);
};
yt.prototype.deleteShallowConcavities = function() {
  for (var t = this, e = 1, n = this.findNextNonDeletedIndex(e), r = this.findNextNonDeletedIndex(n), s = !1; r < this._inputLine.length; ) {
    var o = !1;
    t.isDeletable(e, n, r, t._distanceTol) && (t._isDeleted[n] = yt.DELETE, o = !0, s = !0), o ? e = r : e = n, n = t.findNextNonDeletedIndex(e), r = t.findNextNonDeletedIndex(n);
  }
  return s;
};
yt.prototype.isShallowConcavity = function(t, e, n, r) {
  var s = M.computeOrientation(t, e, n), o = s === this._angleOrientation;
  if (!o)
    return !1;
  var a = M.distancePointLine(e, t, n);
  return a < r;
};
yt.prototype.isShallowSampled = function(t, e, n, r, s) {
  var o = this, a = Math.trunc((r - n) / yt.NUM_PTS_TO_CHECK);
  a <= 0 && (a = 1);
  for (var u = n; u < r; u += a)
    if (!o.isShallow(t, e, o._inputLine[u], s))
      return !1;
  return !0;
};
yt.prototype.isConcave = function(t, e, n) {
  var r = M.computeOrientation(t, e, n), s = r === this._angleOrientation;
  return s;
};
yt.prototype.simplify = function(t) {
  var e = this;
  this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = M.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
  var n = !1;
  do
    n = e.deleteShallowConcavities();
  while (n);
  return this.collapseLine();
};
yt.prototype.findNextNonDeletedIndex = function(t) {
  for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === yt.DELETE; )
    e++;
  return e;
};
yt.prototype.isShallow = function(t, e, n, r) {
  var s = M.distancePointLine(e, t, n);
  return s < r;
};
yt.prototype.collapseLine = function() {
  for (var t = this, e = new mo(), n = 0; n < this._inputLine.length; n++)
    t._isDeleted[n] !== yt.DELETE && e.add(t._inputLine[n]);
  return e.toCoordinateArray();
};
yt.prototype.interfaces_ = function() {
  return [];
};
yt.prototype.getClass = function() {
  return yt;
};
yt.simplify = function(t, e) {
  var n = new yt(t);
  return n.simplify(e);
};
Eo.INIT.get = function() {
  return 0;
};
Eo.DELETE.get = function() {
  return 1;
};
Eo.KEEP.get = function() {
  return 1;
};
Eo.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(yt, Eo);
var Ie = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new N();
}, uf = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
Ie.prototype.getCoordinates = function() {
  var t = this._ptList.toArray(Ie.COORDINATE_ARRAY_TYPE);
  return t;
};
Ie.prototype.setPrecisionModel = function(t) {
  this._precisionModel = t;
};
Ie.prototype.addPt = function(t) {
  var e = new v(t);
  if (this._precisionModel.makePrecise(e), this.isRedundant(e))
    return null;
  this._ptList.add(e);
};
Ie.prototype.revere = function() {
};
Ie.prototype.addPts = function(t, e) {
  var n = this;
  if (e)
    for (var r = 0; r < t.length; r++)
      n.addPt(t[r]);
  else
    for (var s = t.length - 1; s >= 0; s--)
      n.addPt(t[s]);
};
Ie.prototype.isRedundant = function(t) {
  if (this._ptList.size() < 1)
    return !1;
  var e = this._ptList.get(this._ptList.size() - 1), n = t.distance(e);
  return n < this._minimimVertexDistance;
};
Ie.prototype.toString = function() {
  var t = new K(), e = t.createLineString(this.getCoordinates());
  return e.toString();
};
Ie.prototype.closeRing = function() {
  if (this._ptList.size() < 1)
    return null;
  var t = new v(this._ptList.get(0)), e = this._ptList.get(this._ptList.size() - 1);
  if (t.equals(e))
    return null;
  this._ptList.add(t);
};
Ie.prototype.setMinimumVertexDistance = function(t) {
  this._minimimVertexDistance = t;
};
Ie.prototype.interfaces_ = function() {
  return [];
};
Ie.prototype.getClass = function() {
  return Ie;
};
uf.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(Ie, uf);
var Q = function() {
}, Lr = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
Q.prototype.interfaces_ = function() {
  return [];
};
Q.prototype.getClass = function() {
  return Q;
};
Q.toDegrees = function(t) {
  return t * 180 / Math.PI;
};
Q.normalize = function(t) {
  for (; t > Math.PI; )
    t -= Q.PI_TIMES_2;
  for (; t <= -Math.PI; )
    t += Q.PI_TIMES_2;
  return t;
};
Q.angle = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Math.atan2(t.y, t.x);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = n.x - e.x, s = n.y - e.y;
    return Math.atan2(s, r);
  }
};
Q.isAcute = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = r * o + s * a;
  return u > 0;
};
Q.isObtuse = function(t, e, n) {
  var r = t.x - e.x, s = t.y - e.y, o = n.x - e.x, a = n.y - e.y, u = r * o + s * a;
  return u < 0;
};
Q.interiorAngle = function(t, e, n) {
  var r = Q.angle(e, t), s = Q.angle(e, n);
  return Math.abs(s - r);
};
Q.normalizePositive = function(t) {
  if (t < 0) {
    for (; t < 0; )
      t += Q.PI_TIMES_2;
    t >= Q.PI_TIMES_2 && (t = 0);
  } else {
    for (; t >= Q.PI_TIMES_2; )
      t -= Q.PI_TIMES_2;
    t < 0 && (t = 0);
  }
  return t;
};
Q.angleBetween = function(t, e, n) {
  var r = Q.angle(e, t), s = Q.angle(e, n);
  return Q.diff(r, s);
};
Q.diff = function(t, e) {
  var n = null;
  return t < e ? n = e - t : n = t - e, n > Math.PI && (n = 2 * Math.PI - n), n;
};
Q.toRadians = function(t) {
  return t * Math.PI / 180;
};
Q.getTurn = function(t, e) {
  var n = Math.sin(e - t);
  return n > 0 ? Q.COUNTERCLOCKWISE : n < 0 ? Q.CLOCKWISE : Q.NONE;
};
Q.angleBetweenOriented = function(t, e, n) {
  var r = Q.angle(e, t), s = Q.angle(e, n), o = s - r;
  return o <= -Math.PI ? o + Q.PI_TIMES_2 : o > Math.PI ? o - Q.PI_TIMES_2 : o;
};
Lr.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
Lr.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
Lr.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
Lr.COUNTERCLOCKWISE.get = function() {
  return M.COUNTERCLOCKWISE;
};
Lr.CLOCKWISE.get = function() {
  return M.CLOCKWISE;
};
Lr.NONE.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(Q, Lr);
var ht = function i() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new F(), this._seg1 = new F(), this._offset0 = new F(), this._offset1 = new F(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new Ji(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === et.JOIN_ROUND && (this._closingSegLengthFactor = i.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, xo = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
ht.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = M.computeOrientation(this._s0, this._s1, this._s2), r = n === M.CLOCKWISE && this._side === R.LEFT || n === M.COUNTERCLOCKWISE && this._side === R.RIGHT;
  n === 0 ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
ht.prototype.addLineEndCap = function(t, e) {
  var n = new F(t, e), r = new F();
  this.computeOffsetSegment(n, R.LEFT, this._distance, r);
  var s = new F();
  this.computeOffsetSegment(n, R.RIGHT, this._distance, s);
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o);
  switch (this._bufParams.getEndCapStyle()) {
    case et.CAP_ROUND:
      this._segList.addPt(r.p1), this.addFilletArc(e, u + Math.PI / 2, u - Math.PI / 2, M.CLOCKWISE, this._distance), this._segList.addPt(s.p1);
      break;
    case et.CAP_FLAT:
      this._segList.addPt(r.p1), this._segList.addPt(s.p1);
      break;
    case et.CAP_SQUARE:
      var l = new v();
      l.x = Math.abs(this._distance) * Math.cos(u), l.y = Math.abs(this._distance) * Math.sin(u);
      var c = new v(r.p1.x + l.x, r.p1.y + l.y), h = new v(s.p1.x + l.x, s.p1.y + l.y);
      this._segList.addPt(c), this._segList.addPt(h);
      break;
  }
};
ht.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
ht.prototype.addMitreJoin = function(t, e, n, r) {
  var s = !0, o = null;
  try {
    o = Ve.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = r <= 0 ? 1 : o.distance(t) / Math.abs(r);
    a > this._bufParams.getMitreLimit() && (s = !1);
  } catch (u) {
    if (u instanceof gs)
      o = new v(0, 0), s = !1;
    else
      throw u;
  } finally {
  }
  s ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit());
};
ht.prototype.addFilletCorner = function(t, e, n, r, s) {
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o), l = n.x - t.x, c = n.y - t.y, h = Math.atan2(c, l);
  r === M.CLOCKWISE ? u <= h && (u += 2 * Math.PI) : u >= h && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, h, r, s), this._segList.addPt(n);
};
ht.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ht.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === et.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === et.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
ht.prototype.createSquare = function(t) {
  this._segList.addPt(new v(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new v(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
ht.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
ht.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
ht.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
ht.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
ht.prototype.addLimitedMitreJoin = function(t, e, n, r) {
  var s = this._seg0.p1, o = Q.angle(s, this._seg0.p0), a = Q.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1), u = a / 2, l = Q.normalize(o + u), c = Q.normalize(l + Math.PI), h = r * n, f = h * Math.abs(Math.sin(u)), g = n - f, p = s.x + h * Math.cos(c), d = s.y + h * Math.sin(c), _ = new v(p, d), m = new F(s, _), y = m.pointAlongOffset(1, g), E = m.pointAlongOffset(1, -g);
  this._side === R.LEFT ? (this._segList.addPt(y), this._segList.addPt(E)) : (this._segList.addPt(E), this._segList.addPt(y));
};
ht.prototype.computeOffsetSegment = function(t, e, n, r) {
  var s = e === R.LEFT ? 1 : -1, o = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(o * o + a * a), l = s * n * o / u, c = s * n * a / u;
  r.p0.x = t.p0.x - c, r.p0.y = t.p0.y + l, r.p1.x = t.p1.x - c, r.p1.y = t.p1.y + l;
};
ht.prototype.addFilletArc = function(t, e, n, r, s) {
  var o = this, a = r === M.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var c = 0, h = u / l, f = c, g = new v(); f < u; ) {
    var p = e + a * f;
    g.x = t.x + s * Math.cos(p), g.y = t.y + s * Math.sin(p), o._segList.addPt(g), f += h;
  }
};
ht.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * ht.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
    this._segList.addPt(this._offset0.p1);
  else {
    if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
      var n = new v((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(n);
      var r = new v((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
      this._segList.addPt(r);
    } else
      this._segList.addPt(this._s1);
    this._segList.addPt(this._offset1.p0);
  }
};
ht.prototype.createCircle = function(t) {
  var e = new v(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
ht.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
ht.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ie(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * ht.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
ht.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === et.JOIN_BEVEL || this._bufParams.getJoinStyle() === et.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, M.CLOCKWISE, this._distance));
};
ht.prototype.closeRing = function() {
  this._segList.closeRing();
};
ht.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
ht.prototype.interfaces_ = function() {
  return [];
};
ht.prototype.getClass = function() {
  return ht;
};
xo.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
xo.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
xo.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
xo.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(ht, xo);
var ue = function() {
  this._distance = 0, this._precisionModel = null, this._bufParams = null;
  var t = arguments[0], e = arguments[1];
  this._precisionModel = t, this._bufParams = e;
};
ue.prototype.getOffsetCurve = function(t, e) {
  if (this._distance = e, e === 0)
    return null;
  var n = e < 0, r = Math.abs(e), s = this.getSegGen(r);
  t.length <= 1 ? this.computePointCurve(t[0], s) : this.computeOffsetCurve(t, n, s);
  var o = s.getCoordinates();
  return n && J.reverse(o), o;
};
ue.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  if (e) {
    n.addSegments(t, !0);
    var s = yt.simplify(t, -r), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], R.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    n.addSegments(t, !1);
    var u = yt.simplify(t, r), l = u.length - 1;
    n.initSideSegments(u[0], u[1], R.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment(), n.closeRing();
};
ue.prototype.computeRingBufferCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  e === R.RIGHT && (r = -r);
  var s = yt.simplify(t, r), o = s.length - 1;
  n.initSideSegments(s[o - 1], s[0], e);
  for (var a = 1; a <= o; a++) {
    var u = a !== 1;
    n.addNextSegment(s[a], u);
  }
  n.closeRing();
};
ue.prototype.computeLineBufferCurve = function(t, e) {
  var n = this.simplifyTolerance(this._distance), r = yt.simplify(t, n), s = r.length - 1;
  e.initSideSegments(r[0], r[1], R.LEFT);
  for (var o = 2; o <= s; o++)
    e.addNextSegment(r[o], !0);
  e.addLastSegment(), e.addLineEndCap(r[s - 1], r[s]);
  var a = yt.simplify(t, -n), u = a.length - 1;
  e.initSideSegments(a[u], a[u - 1], R.LEFT);
  for (var l = u - 2; l >= 0; l--)
    e.addNextSegment(a[l], !0);
  e.addLastSegment(), e.addLineEndCap(a[1], a[0]), e.closeRing();
};
ue.prototype.computePointCurve = function(t, e) {
  switch (this._bufParams.getEndCapStyle()) {
    case et.CAP_ROUND:
      e.createCircle(t);
      break;
    case et.CAP_SQUARE:
      e.createSquare(t);
      break;
  }
};
ue.prototype.getLineCurve = function(t, e) {
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
ue.prototype.getBufferParameters = function() {
  return this._bufParams;
};
ue.prototype.simplifyTolerance = function(t) {
  return t * this._bufParams.getSimplifyFactor();
};
ue.prototype.getRingCurve = function(t, e, n) {
  if (this._distance = n, t.length <= 2)
    return this.getLineCurve(t, n);
  if (n === 0)
    return ue.copyCoordinates(t);
  var r = this.getSegGen(n);
  return this.computeRingBufferCurve(t, e, r), r.getCoordinates();
};
ue.prototype.computeOffsetCurve = function(t, e, n) {
  var r = this.simplifyTolerance(this._distance);
  if (e) {
    var s = yt.simplify(t, -r), o = s.length - 1;
    n.initSideSegments(s[o], s[o - 1], R.LEFT), n.addFirstSegment();
    for (var a = o - 2; a >= 0; a--)
      n.addNextSegment(s[a], !0);
  } else {
    var u = yt.simplify(t, r), l = u.length - 1;
    n.initSideSegments(u[0], u[1], R.LEFT), n.addFirstSegment();
    for (var c = 2; c <= l; c++)
      n.addNextSegment(u[c], !0);
  }
  n.addLastSegment();
};
ue.prototype.getSegGen = function(t) {
  return new ht(this._precisionModel, this._bufParams, t);
};
ue.prototype.interfaces_ = function() {
  return [];
};
ue.prototype.getClass = function() {
  return ue;
};
ue.copyCoordinates = function(t) {
  for (var e = new Array(t.length).fill(null), n = 0; n < e.length; n++)
    e[n] = new v(t[n]);
  return e;
};
var fr = function() {
  this._subgraphs = null, this._seg = new F(), this._cga = new M();
  var t = arguments[0];
  this._subgraphs = t;
}, lf = { DepthSegment: { configurable: !0 } };
fr.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new N(), r = this._subgraphs.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getEnvelope();
      e.y < o.getMinY() || e.y > o.getMaxY() || t.findStabbedSegments(e, s.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (X(arguments[2], Xe) && arguments[0] instanceof v && arguments[1] instanceof gu)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], c = u.getEdge().getCoordinates(), h = 0; h < c.length - 1; h++) {
        t._seg.p0 = c[h], t._seg.p1 = c[h + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var f = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(f < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && M.computeOrientation(t._seg.p0, t._seg.p1, a) !== M.RIGHT) {
          var g = u.getDepth(R.LEFT);
          t._seg.p0.equals(c[h]) || (g = u.getDepth(R.RIGHT));
          var p = new Yi(t._seg, g);
          l.add(p);
        }
      }
    else if (X(arguments[2], Xe) && arguments[0] instanceof v && X(arguments[1], Xe))
      for (var d = arguments[0], _ = arguments[1], m = arguments[2], y = _.iterator(); y.hasNext(); ) {
        var E = y.next();
        E.isForward() && t.findStabbedSegments(d, E, m);
      }
  }
};
fr.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = qe.min(e);
  return n._leftDepth;
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
lf.DepthSegment.get = function() {
  return Yi;
};
Object.defineProperties(fr, lf);
var Yi = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new F(t), this._leftDepth = e;
};
Yi.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
Yi.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
Yi.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Yi.prototype.interfaces_ = function() {
  return [Ae];
};
Yi.prototype.getClass = function() {
  return Yi;
};
var it = function(t, e, n) {
  this.p0 = t || null, this.p1 = e || null, this.p2 = n || null;
};
it.prototype.area = function() {
  return it.area(this.p0, this.p1, this.p2);
};
it.prototype.signedArea = function() {
  return it.signedArea(this.p0, this.p1, this.p2);
};
it.prototype.interpolateZ = function(t) {
  if (t === null)
    throw new gt("Supplied point is null.");
  return it.interpolateZ(t, this.p0, this.p1, this.p2);
};
it.prototype.longestSideLength = function() {
  return it.longestSideLength(this.p0, this.p1, this.p2);
};
it.prototype.isAcute = function() {
  return it.isAcute(this.p0, this.p1, this.p2);
};
it.prototype.circumcentre = function() {
  return it.circumcentre(this.p0, this.p1, this.p2);
};
it.prototype.area3D = function() {
  return it.area3D(this.p0, this.p1, this.p2);
};
it.prototype.centroid = function() {
  return it.centroid(this.p0, this.p1, this.p2);
};
it.prototype.inCentre = function() {
  return it.inCentre(this.p0, this.p1, this.p2);
};
it.prototype.interfaces_ = function() {
  return [];
};
it.prototype.getClass = function() {
  return it;
};
it.area = function(t, e, n) {
  return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2);
};
it.signedArea = function(t, e, n) {
  return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2;
};
it.det = function(t, e, n, r) {
  return t * r - e * n;
};
it.interpolateZ = function(t, e, n, r) {
  var s = e.x, o = e.y, a = n.x - s, u = r.x - s, l = n.y - o, c = r.y - o, h = a * c - u * l, f = t.x - s, g = t.y - o, p = (c * f - u * g) / h, d = (-l * f + a * g) / h, _ = e.z + p * (n.z - e.z) + d * (r.z - e.z);
  return _;
};
it.longestSideLength = function(t, e, n) {
  var r = t.distance(e), s = e.distance(n), o = n.distance(t), a = r;
  return s > a && (a = s), o > a && (a = o), a;
};
it.isAcute = function(t, e, n) {
  return !(!Q.isAcute(t, e, n) || !Q.isAcute(e, n, t) || !Q.isAcute(n, t, e));
};
it.circumcentre = function(t, e, n) {
  var r = n.x, s = n.y, o = t.x - r, a = t.y - s, u = e.x - r, l = e.y - s, c = 2 * it.det(o, a, u, l), h = it.det(a, o * o + a * a, l, u * u + l * l), f = it.det(o, o * o + a * a, u, u * u + l * l), g = r - h / c, p = s + f / c;
  return new v(g, p);
};
it.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, r = e.y - t.y, s = new Ve(t.x + n / 2, t.y + r / 2, 1), o = new Ve(t.x - r + n / 2, t.y + n + r / 2, 1);
  return new Ve(s, o);
};
it.angleBisector = function(t, e, n) {
  var r = e.distance(t), s = e.distance(n), o = r / (r + s), a = n.x - t.x, u = n.y - t.y, l = new v(t.x + o * a, t.y + o * u);
  return l;
};
it.area3D = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, c = s * l - o * u, h = o * a - r * l, f = r * u - s * a, g = c * c + h * h + f * f, p = Math.sqrt(g) / 2;
  return p;
};
it.centroid = function(t, e, n) {
  var r = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3;
  return new v(r, s);
};
it.inCentre = function(t, e, n) {
  var r = e.distance(n), s = t.distance(n), o = t.distance(e), a = r + s + o, u = (r * t.x + s * e.x + o * n.x) / a, l = (r * t.y + s * e.y + o * n.y) / a;
  return new v(u, l);
};
var De = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new N();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
De.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, x.EXTERIOR, x.INTERIOR);
};
De.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, r = R.LEFT;
  this._distance < 0 && (n = -this._distance, r = R.RIGHT);
  var s = t.getExteriorRing(), o = J.removeRepeatedPoints(s.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(s, this._distance) || this._distance <= 0 && o.length < 3)
    return null;
  this.addPolygonRing(o, n, r, x.EXTERIOR, x.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = J.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, R.opposite(r), x.INTERIOR, x.EXTERIOR);
  }
};
De.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new it(t[0], t[1], t[2]), r = n.inCentre(), s = M.distancePointLine(r, n.p0, n.p1);
  return s < Math.abs(e);
};
De.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = J.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, x.EXTERIOR, x.INTERIOR);
};
De.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var r = new Ct(t, new rt(0, x.BOUNDARY, e, n));
  this._curveList.add(r);
};
De.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
De.prototype.addPolygonRing = function(t, e, n, r, s) {
  if (e === 0 && t.length < Mn.MINIMUM_VALID_SIZE)
    return null;
  var o = r, a = s;
  t.length >= Mn.MINIMUM_VALID_SIZE && M.isCCW(t) && (o = s, a = r, n = R.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, o, a);
};
De.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof Ot ? this.addPolygon(t) : t instanceof mt ? this.addLineString(t) : t instanceof ge ? this.addPoint(t) : t instanceof Qr ? this.addCollection(t) : t instanceof Vi ? this.addCollection(t) : t instanceof Pn ? this.addCollection(t) : t instanceof ne && this.addCollection(t);
};
De.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var r = t.getEnvelopeInternal(), s = Math.min(r.getHeight(), r.getWidth());
  return e < 0 && 2 * Math.abs(e) > s;
};
De.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var r = t.getGeometryN(n);
    e.add(r);
  }
};
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
var ns = function() {
};
ns.prototype.locate = function(t) {
};
ns.prototype.interfaces_ = function() {
  return [];
};
ns.prototype.getClass = function() {
  return ns;
};
var Tn = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
Tn.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, Tn.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new ds();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ne ? (this._subcollectionIterator = new Tn(t), this._subcollectionIterator.next()) : t;
};
Tn.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
Tn.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
Tn.prototype.interfaces_ = function() {
  return [ps];
};
Tn.prototype.getClass = function() {
  return Tn;
};
Tn.isAtomic = function(t) {
  return !(t instanceof ne);
};
var Ee = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
Ee.prototype.locate = function(t) {
  return Ee.locate(t, this._geom);
};
Ee.prototype.interfaces_ = function() {
  return [ns];
};
Ee.prototype.getClass = function() {
  return Ee;
};
Ee.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.isPointInRing(t, e.getCoordinates()) : !1;
};
Ee.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!Ee.isPointInRing(t, n))
    return !1;
  for (var r = 0; r < e.getNumInteriorRing(); r++) {
    var s = e.getInteriorRingN(r);
    if (Ee.isPointInRing(t, s))
      return !1;
  }
  return !0;
};
Ee.containsPoint = function(t, e) {
  if (e instanceof Ot)
    return Ee.containsPointInPolygon(t, e);
  if (e instanceof ne)
    for (var n = new Tn(e); n.hasNext(); ) {
      var r = n.next();
      if (r !== e && Ee.containsPoint(t, r))
        return !0;
    }
  return !1;
};
Ee.locate = function(t, e) {
  return e.isEmpty() ? x.EXTERIOR : Ee.containsPoint(t, e) ? x.INTERIOR : x.EXTERIOR;
};
var jt = function() {
  this._edgeMap = new qt(), this._edgeList = null, this._ptInAreaLocation = [x.NONE, x.NONE];
};
jt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
jt.prototype.propagateSideLabels = function(t) {
  for (var e = x.NONE, n = this.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getLabel();
    s.isArea(t) && s.getLocation(t, R.LEFT) !== x.NONE && (e = s.getLocation(t, R.LEFT));
  }
  if (e === x.NONE)
    return null;
  for (var o = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, R.ON) === x.NONE && l.setLocation(t, R.ON, o), l.isArea(t)) {
      var c = l.getLocation(t, R.LEFT), h = l.getLocation(t, R.RIGHT);
      if (h !== x.NONE) {
        if (h !== o)
          throw new ei("side location conflict", u.getCoordinate());
        c === x.NONE && j.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), o = c;
      } else
        j.isTrue(l.getLocation(t, R.LEFT) === x.NONE, "found single null side"), l.setLocation(t, R.RIGHT, o), l.setLocation(t, R.LEFT, o);
    }
  }
};
jt.prototype.getCoordinate = function() {
  var t = this.iterator();
  if (!t.hasNext())
    return null;
  var e = t.next();
  return e.getCoordinate();
};
jt.prototype.print = function(t) {
  zt.out.println("EdgeEndStar:   " + this.getCoordinate());
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
jt.prototype.isAreaLabelsConsistent = function(t) {
  return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
};
jt.prototype.checkAreaLabelsConsistent = function(t) {
  var e = this.getEdges();
  if (e.size() <= 0)
    return !0;
  var n = e.size() - 1, r = e.get(n).getLabel(), s = r.getLocation(t, R.LEFT);
  j.isTrue(s !== x.NONE, "Found unlabelled area edge");
  for (var o = s, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    j.isTrue(l.isArea(t), "Found non-area edge");
    var c = l.getLocation(t, R.LEFT), h = l.getLocation(t, R.RIGHT);
    if (c === h || h !== o)
      return !1;
    o = c;
  }
  return !0;
};
jt.prototype.findIndex = function(t) {
  var e = this;
  this.iterator();
  for (var n = 0; n < this._edgeList.size(); n++) {
    var r = e._edgeList.get(n);
    if (r === t)
      return n;
  }
  return -1;
};
jt.prototype.iterator = function() {
  return this.getEdges().iterator();
};
jt.prototype.getEdges = function() {
  return this._edgeList === null && (this._edgeList = new N(this._edgeMap.values())), this._edgeList;
};
jt.prototype.getLocation = function(t, e, n) {
  return this._ptInAreaLocation[t] === x.NONE && (this._ptInAreaLocation[t] = Ee.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
jt.prototype.toString = function() {
  var t = new xn();
  t.append("EdgeEndStar:   " + this.getCoordinate()), t.append(`
`);
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.append(n), t.append(`
`);
  }
  return t.toString();
};
jt.prototype.computeEdgeEndLabels = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.computeLabel(t);
  }
};
jt.prototype.computeLabelling = function(t) {
  var e = this;
  this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
  for (var n = [!1, !1], r = this.iterator(); r.hasNext(); )
    for (var s = r.next(), o = s.getLabel(), a = 0; a < 2; a++)
      o.isLine(a) && o.getLocation(a) === x.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), c = l.getLabel(), h = 0; h < 2; h++)
      if (c.isAnyNull(h)) {
        var f = x.NONE;
        if (n[h])
          f = x.EXTERIOR;
        else {
          var g = l.getCoordinate();
          f = e.getLocation(h, g, t);
        }
        c.setAllLocationsIfNull(h, f);
      }
};
jt.prototype.getDegree = function() {
  return this._edgeMap.size();
};
jt.prototype.insertEdgeEnd = function(t, e) {
  this._edgeMap.put(t, e), this._edgeList = null;
};
jt.prototype.interfaces_ = function() {
  return [];
};
jt.prototype.getClass = function() {
  return jt;
};
var tm = function(i) {
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
        throw new ei("no outgoing dirEdge found", this.getCoordinate());
      j.isTrue(r.isInResult(), "unable to link last incoming dirEdge"), s.setNext(r);
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
    return st.isNorthern(a) && st.isNorthern(u) ? s : !st.isNorthern(a) && !st.isNorthern(u) ? o : s.getDy() !== 0 ? s : o.getDy() !== 0 ? o : (j.shouldNeverReachHere("found two horizontal edges incident on node"), null);
  }, t.prototype.print = function(n) {
    zt.out.println("DirectedEdgeStar: " + this.getCoordinate());
    for (var r = this.iterator(); r.hasNext(); ) {
      var s = r.next();
      n.print("out "), s.print(n), n.println(), n.print("in "), s.getSym().print(n), n.println();
    }
  }, t.prototype.getResultAreaEdges = function() {
    var n = this;
    if (this._resultAreaEdgeList !== null)
      return this._resultAreaEdgeList;
    this._resultAreaEdgeList = new N();
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
      var r = arguments[0], s = this.findIndex(r), o = r.getDepth(R.LEFT), a = r.getDepth(R.RIGHT), u = this.computeDepths(s + 1, this._edgeList.size(), o), l = this.computeDepths(0, s, u);
      if (l !== a)
        throw new ei("depth mismatch at " + r.getCoordinate());
    } else if (arguments.length === 3) {
      for (var c = arguments[0], h = arguments[1], f = arguments[2], g = f, p = c; p < h; p++) {
        var d = n._edgeList.get(p);
        d.setEdgeDepths(R.RIGHT, g), g = d.getDepth(R.LEFT);
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
    a === this._LINKING_TO_OUTGOING && (j.isTrue(s !== null, "found null for first outgoing dirEdge"), j.isTrue(s.getEdgeRing() === n, "unable to link last incoming dirEdge"), o.setNextMin(s));
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
    for (var n = x.NONE, r = this.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getSym();
      if (!s.isLineEdge()) {
        if (s.isInResult()) {
          n = x.INTERIOR;
          break;
        }
        if (o.isInResult()) {
          n = x.EXTERIOR;
          break;
        }
      }
    }
    if (n === x.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), c = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === x.INTERIOR) : (l.isInResult() && (a = x.EXTERIOR), c.isInResult() && (a = x.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var r = this;
    i.prototype.computeLabelling.call(this, n), this._label = new rt(x.NONE);
    for (var s = this.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var c = u.getLocation(l);
        (c === x.INTERIOR || c === x.BOUNDARY) && r._label.setLocation(l, x.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(jt), cf = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new La(n, new tm());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}($r), Ei = function i() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = i.orientation(t);
};
Ei.prototype.compareTo = function(t) {
  var e = t, n = Ei.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
Ei.prototype.interfaces_ = function() {
  return [Ae];
};
Ei.prototype.getClass = function() {
  return Ei;
};
Ei.orientation = function(t) {
  return J.increasingDirection(t) === 1;
};
Ei.compareOriented = function(t, e, n, r) {
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
var He = function() {
  this._edges = new N(), this._ocaMap = new qt();
};
He.prototype.print = function(t) {
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
He.prototype.addAll = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); )
    e.add(n.next());
};
He.prototype.findEdgeIndex = function(t) {
  for (var e = this, n = 0; n < this._edges.size(); n++)
    if (e._edges.get(n).equals(t))
      return n;
  return -1;
};
He.prototype.iterator = function() {
  return this._edges.iterator();
};
He.prototype.getEdges = function() {
  return this._edges;
};
He.prototype.get = function(t) {
  return this._edges.get(t);
};
He.prototype.findEqualEdge = function(t) {
  var e = new Ei(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
He.prototype.add = function(t) {
  this._edges.add(t);
  var e = new Ei(t.getCoordinates());
  this._ocaMap.put(e, t);
};
He.prototype.interfaces_ = function() {
  return [];
};
He.prototype.getClass = function() {
  return He;
};
var Ui = function() {
};
Ui.prototype.processIntersections = function(t, e, n, r) {
};
Ui.prototype.isDone = function() {
};
Ui.prototype.interfaces_ = function() {
  return [];
};
Ui.prototype.getClass = function() {
  return Ui;
};
var Se = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
  var t = arguments[0];
  this._li = t;
};
Se.prototype.isTrivialIntersection = function(t, e, n, r) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Se.isAdjacentSegments(e, r))
      return !0;
    if (t.isClosed()) {
      var s = t.size() - 1;
      if (e === 0 && r === s || r === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
Se.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Se.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Se.prototype.getLineIntersector = function() {
  return this._li;
};
Se.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Se.prototype.processIntersections = function(t, e, n, r) {
  if (t === n && e === r)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[r], u = n.getCoordinates()[r + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
};
Se.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Se.prototype.isDone = function() {
  return !1;
};
Se.prototype.hasInteriorIntersection = function() {
  return this._hasInterior;
};
Se.prototype.interfaces_ = function() {
  return [Ui];
};
Se.prototype.getClass = function() {
  return Se;
};
Se.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var mn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new v(t), this.segmentIndex = e, this.dist = n;
};
mn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
mn.prototype.getCoordinate = function() {
  return this.coord;
};
mn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
mn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
mn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
mn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
mn.prototype.getDistance = function() {
  return this.dist;
};
mn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
mn.prototype.interfaces_ = function() {
  return [Ae];
};
mn.prototype.getClass = function() {
  return mn;
};
var Fn = function() {
  this._nodeMap = new qt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Fn.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Fn.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Fn.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(r, s);
    t.add(o), r = s;
  }
};
Fn.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Fn.prototype.createSplitEdge = function(t, e) {
  var n = this, r = e.segmentIndex - t.segmentIndex + 2, s = this.edge.pts[e.segmentIndex], o = e.dist > 0 || !e.coord.equals2D(s);
  o || r--;
  var a = new Array(r).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return o && (a[u] = e.coord), new na(a, new rt(this.edge._label));
};
Fn.prototype.add = function(t, e, n) {
  var r = new mn(t, e, n), s = this._nodeMap.get(r);
  return s !== null ? s : (this._nodeMap.put(r, r), r);
};
Fn.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
Fn.prototype.interfaces_ = function() {
  return [];
};
Fn.prototype.getClass = function() {
  return Fn;
};
var Wi = function() {
};
Wi.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, r = new N();
  r.add(new hn(n));
  do {
    var s = e.findChainEnd(t, n);
    r.add(new hn(s)), n = s;
  } while (n < t.length - 1);
  var o = Wi.toIntArray(r);
  return o;
};
Wi.prototype.findChainEnd = function(t, e) {
  for (var n = st.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length; ) {
    var s = st.quadrant(t[r - 1], t[r]);
    if (s !== n)
      break;
    r++;
  }
  return r - 1;
};
Wi.prototype.interfaces_ = function() {
  return [];
};
Wi.prototype.getClass = function() {
  return Wi;
};
Wi.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var ii = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new A(), this.env2 = new A();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Wi();
  this.startIndex = e.getChainStartIndices(this.pts);
};
ii.prototype.getCoordinates = function() {
  return this.pts;
};
ii.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
ii.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
ii.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r);
  } else if (arguments.length === 6) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], c = arguments[5], h = this.pts[s], f = this.pts[o], g = a.pts[u], p = a.pts[l];
    if (o - s === 1 && l - u === 1)
      return c.addIntersections(this.e, s, a.e, u), null;
    if (this.env1.init(h, f), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var d = Math.trunc((s + o) / 2), _ = Math.trunc((u + l) / 2);
    s < d && (u < _ && this.computeIntersectsForChain(s, d, a, u, _, c), _ < l && this.computeIntersectsForChain(s, d, a, _, l, c)), d < o && (u < _ && this.computeIntersectsForChain(d, o, a, u, _, c), _ < l && this.computeIntersectsForChain(d, o, a, _, l, c));
  }
};
ii.prototype.getStartIndexes = function() {
  return this.startIndex;
};
ii.prototype.computeIntersects = function(t, e) {
  for (var n = this, r = 0; r < this.startIndex.length - 1; r++)
    for (var s = 0; s < t.startIndex.length - 1; s++)
      n.computeIntersectsForChain(r, t, s, e);
};
ii.prototype.interfaces_ = function() {
  return [];
};
ii.prototype.getClass = function() {
  return ii;
};
var Bt = function i() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = i.NULL_VALUE;
}, hf = { NULL_VALUE: { configurable: !0 } };
Bt.prototype.getDepth = function(t, e) {
  return this._depth[t][e];
};
Bt.prototype.setDepth = function(t, e, n) {
  this._depth[t][e] = n;
};
Bt.prototype.isNull = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = 0; e < 2; e++)
      for (var n = 0; n < 3; n++)
        if (t._depth[e][n] !== Bt.NULL_VALUE)
          return !1;
    return !0;
  } else if (arguments.length === 1) {
    var r = arguments[0];
    return this._depth[r][1] === Bt.NULL_VALUE;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return this._depth[s][o] === Bt.NULL_VALUE;
  }
};
Bt.prototype.normalize = function() {
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
Bt.prototype.getDelta = function(t) {
  return this._depth[t][R.RIGHT] - this._depth[t][R.LEFT];
};
Bt.prototype.getLocation = function(t, e) {
  return this._depth[t][e] <= 0 ? x.EXTERIOR : x.INTERIOR;
};
Bt.prototype.toString = function() {
  return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
};
Bt.prototype.add = function() {
  var t = this;
  if (arguments.length === 1)
    for (var e = arguments[0], n = 0; n < 2; n++)
      for (var r = 1; r < 3; r++) {
        var s = e.getLocation(n, r);
        (s === x.EXTERIOR || s === x.INTERIOR) && (t.isNull(n, r) ? t._depth[n][r] = Bt.depthAtLocation(s) : t._depth[n][r] += Bt.depthAtLocation(s));
      }
  else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    u === x.INTERIOR && this._depth[o][a]++;
  }
};
Bt.prototype.interfaces_ = function() {
  return [];
};
Bt.prototype.getClass = function() {
  return Bt;
};
Bt.depthAtLocation = function(t) {
  return t === x.EXTERIOR ? 0 : t === x.INTERIOR ? 1 : Bt.NULL_VALUE;
};
hf.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(Bt, hf);
var na = function(i) {
  function t() {
    if (i.call(this), this.pts = null, this._env = null, this.eiList = new Fn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Bt(), this._depthDelta = 0, arguments.length === 1) {
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
    var r = new t(n, rt.toLineLabel(this._label));
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
    return this._mce === null && (this._mce = new ii(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new A();
      for (var r = 0; r < this.pts.length; r++)
        n._env.expandToInclude(n.pts[r]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, r, s, o) {
    var a = new v(n.getIntersection(o)), u = r, l = n.getEdgeDistance(s, o), c = u + 1;
    if (c < this.pts.length) {
      var h = this.pts[c];
      a.equals2D(h) && (u = c, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, r = new xn();
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
      r.setAtLeastIfValid(n.getLocation(0, R.ON), n.getLocation(1, R.ON), 1), n.isArea() && (r.setAtLeastIfValid(n.getLocation(0, R.LEFT), n.getLocation(1, R.LEFT), 2), r.setAtLeastIfValid(n.getLocation(0, R.RIGHT), n.getLocation(1, R.RIGHT), 2));
    } else
      return i.prototype.updateIM.apply(this, arguments);
  }, t;
}(Ce), ee = function(t) {
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new He(), this._bufParams = t || null;
};
ee.prototype.setWorkingPrecisionModel = function(t) {
  this._workingPrecisionModel = t;
};
ee.prototype.insertUniqueEdge = function(t) {
  var e = this._edgeList.findEqualEdge(t);
  if (e !== null) {
    var n = e.getLabel(), r = t.getLabel();
    e.isPointwiseEqual(t) || (r = new rt(t.getLabel()), r.flip()), n.merge(r);
    var s = ee.depthDelta(r), o = e.getDepthDelta(), a = o + s;
    e.setDepthDelta(a);
  } else
    this._edgeList.add(t), t.setDepthDelta(ee.depthDelta(t.getLabel()));
};
ee.prototype.buildSubgraphs = function(t, e) {
  for (var n = new N(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getRightmostCoordinate(), a = new fr(n), u = a.getDepth(o);
    s.computeDepth(u), s.findResultEdges(), n.add(s), e.add(s.getDirectedEdges(), s.getNodes());
  }
};
ee.prototype.createSubgraphs = function(t) {
  for (var e = new N(), n = t.getNodes().iterator(); n.hasNext(); ) {
    var r = n.next();
    if (!r.isVisited()) {
      var s = new ie();
      s.create(r), e.add(s);
    }
  }
  return qe.sort(e, qe.reverseOrder()), e;
};
ee.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ee.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new nl(), n = new Ji();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new Se(n)), e;
};
ee.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var r = new ue(n, this._bufParams), s = new De(t, e, r), o = s.getCurves();
  if (o.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(o, n), this._graph = new dt(new cf()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new pe(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var c = this._geomFact.buildGeometry(l);
  return c;
};
ee.prototype.computeNodedEdges = function(t, e) {
  var n = this, r = this.getNoder(e);
  r.computeNodes(t);
  for (var s = r.getNodedSubstrings(), o = s.iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), c = new na(a.getCoordinates(), new rt(l));
      n.insertUniqueEdge(c);
    }
  }
};
ee.prototype.setNoder = function(t) {
  this._workingNoder = t;
};
ee.prototype.interfaces_ = function() {
  return [];
};
ee.prototype.getClass = function() {
  return ee;
};
ee.depthDelta = function(t) {
  var e = t.getLocation(0, R.LEFT), n = t.getLocation(0, R.RIGHT);
  return e === x.INTERIOR && n === x.EXTERIOR ? 1 : e === x.EXTERIOR && n === x.INTERIOR ? -1 : 0;
};
ee.convertSegStrings = function(t) {
  for (var e = new K(), n = new N(); t.hasNext(); ) {
    var r = t.next(), s = e.createLineString(r.getCoordinates());
    n.add(s);
  }
  return e.buildGeometry(n);
};
var xi = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], r = arguments[1], s = arguments[2], o = arguments[3];
    this._noder = n, this._scaleFactor = r, this._offsetX = s, this._offsetY = o, this._isScaled = !this.isIntegerPrecision();
  }
};
xi.prototype.rescale = function() {
  var t = this;
  if (X(arguments[0], Nt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var r = n.next();
      t.rescale(r.getCoordinates());
    }
  else if (arguments[0] instanceof Array) {
    for (var s = arguments[0], o = 0; o < s.length; o++)
      s[o].x = s[o].x / t._scaleFactor + t._offsetX, s[o].y = s[o].y / t._scaleFactor + t._offsetY;
    s.length === 2 && s[0].equals2D(s[1]) && zt.out.println(s);
  }
};
xi.prototype.scale = function() {
  var t = this;
  if (X(arguments[0], Nt)) {
    for (var e = arguments[0], n = new N(), r = e.iterator(); r.hasNext(); ) {
      var s = r.next();
      n.add(new Ct(t.scale(s.getCoordinates()), s.getData()));
    }
    return n;
  } else if (arguments[0] instanceof Array) {
    for (var o = arguments[0], a = new Array(o.length).fill(null), u = 0; u < o.length; u++)
      a[u] = new v(Math.round((o[u].x - t._offsetX) * t._scaleFactor), Math.round((o[u].y - t._offsetY) * t._scaleFactor), o[u].z);
    var l = J.removeRepeatedPoints(a);
    return l;
  }
};
xi.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
xi.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
xi.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
xi.prototype.interfaces_ = function() {
  return [Xi];
};
xi.prototype.getClass = function() {
  return xi;
};
var yn = function() {
  this._li = new Ji(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, ff = { fact: { configurable: !0 } };
yn.prototype.checkEndPtVertexIntersections = function() {
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
          throw new $n("found endpt/interior pt intersection at index " + c + " :pt " + s);
  }
};
yn.prototype.checkInteriorIntersections = function() {
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
    var f = arguments[0], g = arguments[1], p = arguments[2], d = arguments[3];
    if (f === p && g === d)
      return null;
    var _ = f.getCoordinates()[g], m = f.getCoordinates()[g + 1], y = p.getCoordinates()[d], E = p.getCoordinates()[d + 1];
    if (this._li.computeIntersection(_, m, y, E), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, _, m) || this.hasInteriorIntersection(this._li, y, E)))
      throw new $n("found non-noded intersection at " + _ + "-" + m + " and " + y + "-" + E);
  }
};
yn.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
yn.prototype.checkCollapses = function() {
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
yn.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var r = 0; r < t.getIntersectionNum(); r++) {
    var s = t.getIntersection(r);
    if (!(s.equals(e) || s.equals(n)))
      return !0;
  }
  return !1;
};
yn.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new $n("found non-noded collapse at " + yn.fact.createLineString([t, e, n]));
};
yn.prototype.interfaces_ = function() {
  return [];
};
yn.prototype.getClass = function() {
  return yn;
};
ff.fact.get = function() {
  return new K();
};
Object.defineProperties(yn, ff);
var le = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new gt("Scale factor must be non-zero");
  e !== 1 && (this._pt = new v(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new v(), this._p1Scaled = new v()), this.initCorners(this._pt);
}, gf = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
le.prototype.intersectsScaled = function(t, e) {
  var n = Math.min(t.x, e.x), r = Math.max(t.x, e.x), s = Math.min(t.y, e.y), o = Math.max(t.y, e.y), a = this._maxx < n || this._minx > r || this._maxy < s || this._miny > o;
  if (a)
    return !1;
  var u = this.intersectsToleranceSquare(t, e);
  return j.isTrue(!(a && u), "Found bad envelope test"), u;
};
le.prototype.initCorners = function(t) {
  var e = 0.5;
  this._minx = t.x - e, this._maxx = t.x + e, this._miny = t.y - e, this._maxy = t.y + e, this._corner[0] = new v(this._maxx, this._maxy), this._corner[1] = new v(this._minx, this._maxy), this._corner[2] = new v(this._minx, this._miny), this._corner[3] = new v(this._maxx, this._miny);
};
le.prototype.intersects = function(t, e) {
  return this._scaleFactor === 1 ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
};
le.prototype.scale = function(t) {
  return Math.round(t * this._scaleFactor);
};
le.prototype.getCoordinate = function() {
  return this._originalPt;
};
le.prototype.copyScaled = function(t, e) {
  e.x = this.scale(t.x), e.y = this.scale(t.y);
};
le.prototype.getSafeEnvelope = function() {
  if (this._safeEnv === null) {
    var t = le.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
    this._safeEnv = new A(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
  }
  return this._safeEnv;
};
le.prototype.intersectsPixelClosure = function(t, e) {
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.hasIntersection()) || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.hasIntersection()));
};
le.prototype.intersectsToleranceSquare = function(t, e) {
  var n = !1, r = !1;
  return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!(this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), this._li.isProper()) || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), this._li.isProper()) || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), this._li.isProper()) || n && r || t.equals(this._pt) || e.equals(this._pt));
};
le.prototype.addSnappedNode = function(t, e) {
  var n = t.getCoordinate(e), r = t.getCoordinate(e + 1);
  return this.intersects(n, r) ? (t.addIntersection(this.getCoordinate(), e), !0) : !1;
};
le.prototype.interfaces_ = function() {
  return [];
};
le.prototype.getClass = function() {
  return le;
};
gf.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(le, gf);
var ro = function() {
  this.tempEnv1 = new A(), this.selectedSegment = new F();
};
ro.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
ro.prototype.interfaces_ = function() {
  return [];
};
ro.prototype.getClass = function() {
  return ro;
};
var is = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, pf = { HotPixelSnapAction: { configurable: !0 } };
is.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = e.getSafeEnvelope(), o = new df(e, n, r);
    return this._index.query(s, {
      interfaces_: function() {
        return [yi];
      },
      visitItem: function(a) {
        var u = a;
        u.select(s, o);
      }
    }), o.isNodeAdded();
  }
};
is.prototype.interfaces_ = function() {
  return [];
};
is.prototype.getClass = function() {
  return is;
};
pf.HotPixelSnapAction.get = function() {
  return df;
};
Object.defineProperties(is, pf);
var df = function(i) {
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
}(ro), gr = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new N();
};
gr.prototype.processIntersections = function(t, e, n, r) {
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
gr.prototype.isDone = function() {
  return !1;
};
gr.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
gr.prototype.interfaces_ = function() {
  return [Ui];
};
gr.prototype.getClass = function() {
  return gr;
};
var kn = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new Ji(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
kn.prototype.checkCorrectness = function(t) {
  var e = Ct.getNodedSubstrings(t), n = new yn(e);
  try {
    n.checkValid();
  } catch (r) {
    if (r instanceof Jh)
      r.printStackTrace();
    else
      throw r;
  } finally {
  }
};
kn.prototype.getNodedSubstrings = function() {
  return Ct.getNodedSubstrings(this._nodedSegStrings);
};
kn.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
kn.prototype.findInteriorIntersections = function(t, e) {
  var n = new gr(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
kn.prototype.computeVertexSnaps = function() {
  var t = this;
  if (X(arguments[0], Nt))
    for (var e = arguments[0], n = e.iterator(); n.hasNext(); ) {
      var r = n.next();
      t.computeVertexSnaps(r);
    }
  else if (arguments[0] instanceof Ct)
    for (var s = arguments[0], o = s.getCoordinates(), a = 0; a < o.length; a++) {
      var u = new le(o[a], t._scaleFactor, t._li), l = t._pointSnapper.snap(u, s, a);
      l && s.addIntersection(o[a], a);
    }
};
kn.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new nl(), this._pointSnapper = new is(this._noder.getIndex()), this.snapRound(t, this._li);
};
kn.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next(), s = new le(r, e._scaleFactor, e._li);
    e._pointSnapper.snap(s);
  }
};
kn.prototype.interfaces_ = function() {
  return [Xi];
};
kn.prototype.getClass = function() {
  return kn;
};
var Gt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new et(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, _s = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Gt.prototype.bufferFixedPrecision = function(t) {
  var e = new xi(new kn(new nt(1)), t.getScale()), n = new ee(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
Gt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Gt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (o) {
        if (o instanceof ei)
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
    var n = arguments[0], r = Gt.precisionScaleFactor(this._argGeom, this._distance, n), s = new nt(r);
    this.bufferFixedPrecision(s);
  }
};
Gt.prototype.computeGeometry = function() {
  if (this.bufferOriginalPrecision(), this._resultGeometry !== null)
    return null;
  var t = this._argGeom.getFactory().getPrecisionModel();
  t.getType() === nt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
};
Gt.prototype.setQuadrantSegments = function(t) {
  this._bufParams.setQuadrantSegments(t);
};
Gt.prototype.bufferOriginalPrecision = function() {
  try {
    var t = new ee(this._bufParams);
    this._resultGeometry = t.buffer(this._argGeom, this._distance);
  } catch (e) {
    if (e instanceof $n)
      this._saveException = e;
    else
      throw e;
  } finally {
  }
};
Gt.prototype.getResultGeometry = function(t) {
  return this._distance = t, this.computeGeometry(), this._resultGeometry;
};
Gt.prototype.setEndCapStyle = function(t) {
  this._bufParams.setEndCapStyle(t);
};
Gt.prototype.interfaces_ = function() {
  return [];
};
Gt.prototype.getClass = function() {
  return Gt;
};
Gt.bufferOp = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Gt(t), r = n.getResultGeometry(e);
    return r;
  } else if (arguments.length === 3) {
    if (Number.isInteger(arguments[2]) && arguments[0] instanceof V && typeof arguments[1] == "number") {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new Gt(s);
      u.setQuadrantSegments(a);
      var l = u.getResultGeometry(o);
      return l;
    } else if (arguments[2] instanceof et && arguments[0] instanceof V && typeof arguments[1] == "number") {
      var c = arguments[0], h = arguments[1], f = arguments[2], g = new Gt(c, f), p = g.getResultGeometry(h);
      return p;
    }
  } else if (arguments.length === 4) {
    var d = arguments[0], _ = arguments[1], m = arguments[2], y = arguments[3], E = new Gt(d);
    E.setQuadrantSegments(m), E.setEndCapStyle(y);
    var I = E.getResultGeometry(_);
    return I;
  }
};
Gt.precisionScaleFactor = function(t, e, n) {
  var r = t.getEnvelopeInternal(), s = xe.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())), o = e > 0 ? e : 0, a = s + 2 * o, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, c = Math.pow(10, l);
  return c;
};
_s.CAP_ROUND.get = function() {
  return et.CAP_ROUND;
};
_s.CAP_BUTT.get = function() {
  return et.CAP_FLAT;
};
_s.CAP_FLAT.get = function() {
  return et.CAP_FLAT;
};
_s.CAP_SQUARE.get = function() {
  return et.CAP_SQUARE;
};
_s.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Gt, _s);
var Qt = function() {
  this._pt = [new v(), new v()], this._distance = W.NaN, this._isNull = !0;
};
Qt.prototype.getCoordinates = function() {
  return this._pt;
};
Qt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Qt.prototype.setMinimum = function() {
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
Qt.prototype.initialize = function() {
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
Qt.prototype.getDistance = function() {
  return this._distance;
};
Qt.prototype.setMaximum = function() {
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
Qt.prototype.interfaces_ = function() {
  return [];
};
Qt.prototype.getClass = function() {
  return Qt;
};
var wn = function() {
};
wn.prototype.interfaces_ = function() {
  return [];
};
wn.prototype.getClass = function() {
  return wn;
};
wn.computeDistance = function() {
  if (arguments[2] instanceof Qt && arguments[0] instanceof mt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), s = new F(), o = 0; o < r.length - 1; o++) {
      s.setCoordinates(r[o], r[o + 1]);
      var a = s.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Qt && arguments[0] instanceof Ot && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    wn.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      wn.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof Qt && arguments[0] instanceof V && arguments[1] instanceof v) {
    var f = arguments[0], g = arguments[1], p = arguments[2];
    if (f instanceof mt)
      wn.computeDistance(f, g, p);
    else if (f instanceof Ot)
      wn.computeDistance(f, g, p);
    else if (f instanceof ne)
      for (var d = f, _ = 0; _ < d.getNumGeometries(); _++) {
        var m = d.getGeometryN(_);
        wn.computeDistance(m, g, p);
      }
    else
      p.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof Qt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var y = arguments[0], E = arguments[1], I = arguments[2], S = y.closestPoint(E);
    I.setMinimum(S, E);
  }
};
var qi = function(t) {
  this._maxPtDist = new Qt(), this._inputGeom = t || null;
}, il = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
qi.prototype.computeMaxMidpointDistance = function(t) {
  var e = new Ci(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
qi.prototype.computeMaxVertexDistance = function(t) {
  var e = new pr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
qi.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
qi.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
qi.prototype.interfaces_ = function() {
  return [];
};
qi.prototype.getClass = function() {
  return qi;
};
il.MaxPointDistanceFilter.get = function() {
  return pr;
};
il.MaxMidpointDistanceFilter.get = function() {
  return Ci;
};
Object.defineProperties(qi, il);
var pr = function(t) {
  this._maxPtDist = new Qt(), this._minPtDist = new Qt(), this._geom = t || null;
};
pr.prototype.filter = function(t) {
  this._minPtDist.initialize(), wn.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
pr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
pr.prototype.interfaces_ = function() {
  return [bn];
};
pr.prototype.getClass = function() {
  return pr;
};
var Ci = function(t) {
  this._maxPtDist = new Qt(), this._minPtDist = new Qt(), this._geom = t || null;
};
Ci.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), s = new v((n.x + r.x) / 2, (n.y + r.y) / 2);
  this._minPtDist.initialize(), wn.computeDistance(this._geom, s, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
Ci.prototype.isDone = function() {
  return !1;
};
Ci.prototype.isGeometryChanged = function() {
  return !1;
};
Ci.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Ci.prototype.interfaces_ = function() {
  return [Ue];
};
Ci.prototype.getClass = function() {
  return Ci;
};
var Qn = function(t) {
  this._comps = t || null;
};
Qn.prototype.filter = function(t) {
  t instanceof Ot && this._comps.add(t);
};
Qn.prototype.interfaces_ = function() {
  return [gn];
};
Qn.prototype.getClass = function() {
  return Qn;
};
Qn.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return Qn.getPolygons(t, new N());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof Ot ? n.add(e) : e instanceof ne && e.apply(new Qn(n)), n;
  }
};
var kt = function() {
  if (this._lines = null, this._isForcedToLineString = !1, arguments.length === 1) {
    var t = arguments[0];
    this._lines = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._lines = e, this._isForcedToLineString = n;
  }
};
kt.prototype.filter = function(t) {
  if (this._isForcedToLineString && t instanceof Mn) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof mt && this._lines.add(t);
};
kt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
kt.prototype.interfaces_ = function() {
  return [ti];
};
kt.prototype.getClass = function() {
  return kt;
};
kt.getGeometry = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t.getFactory().buildGeometry(kt.getLines(t));
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e.getFactory().buildGeometry(kt.getLines(e, n));
  }
};
kt.getLines = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return kt.getLines(t, !1);
  } else if (arguments.length === 2) {
    if (X(arguments[0], Nt) && X(arguments[1], Nt)) {
      for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext(); ) {
        var s = r.next();
        kt.getLines(s, n);
      }
      return n;
    } else if (arguments[0] instanceof V && typeof arguments[1] == "boolean") {
      var o = arguments[0], a = arguments[1], u = new N();
      return o.apply(new kt(u, a)), u;
    } else if (arguments[0] instanceof V && X(arguments[1], Nt)) {
      var l = arguments[0], c = arguments[1];
      return l instanceof mt ? c.add(l) : l.apply(new kt(c)), c;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && X(arguments[0], Nt) && X(arguments[1], Nt)) {
      for (var h = arguments[0], f = arguments[1], g = arguments[2], p = h.iterator(); p.hasNext(); ) {
        var d = p.next();
        kt.getLines(d, f, g);
      }
      return f;
    } else if (typeof arguments[2] == "boolean" && arguments[0] instanceof V && X(arguments[1], Nt)) {
      var _ = arguments[0], m = arguments[1], y = arguments[2];
      return _.apply(new kt(m, y)), m;
    }
  }
};
var je = function() {
  if (this._boundaryRule = be.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new gt("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
je.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof v && arguments[1] instanceof Ot) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return x.EXTERIOR;
    var r = n.getExteriorRing(), s = this.locateInPolygonRing(e, r);
    if (s === x.EXTERIOR)
      return x.EXTERIOR;
    if (s === x.BOUNDARY)
      return x.BOUNDARY;
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var a = n.getInteriorRingN(o), u = t.locateInPolygonRing(e, a);
      if (u === x.INTERIOR)
        return x.EXTERIOR;
      if (u === x.BOUNDARY)
        return x.BOUNDARY;
    }
    return x.INTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof mt) {
    var l = arguments[0], c = arguments[1];
    if (!c.getEnvelopeInternal().intersects(l))
      return x.EXTERIOR;
    var h = c.getCoordinates();
    return !c.isClosed() && (l.equals(h[0]) || l.equals(h[h.length - 1])) ? x.BOUNDARY : M.isOnLine(l, h) ? x.INTERIOR : x.EXTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof ge) {
    var f = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(f) ? x.INTERIOR : x.EXTERIOR;
  }
};
je.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.locatePointInRing(t, e.getCoordinates()) : x.EXTERIOR;
};
je.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== x.EXTERIOR;
};
je.prototype.updateLocationInfo = function(t) {
  t === x.INTERIOR && (this._isIn = !0), t === x.BOUNDARY && this._numBoundaries++;
};
je.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof ge && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof mt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Ot)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Vi)
    for (var r = e, s = 0; s < r.getNumGeometries(); s++) {
      var o = r.getGeometryN(s);
      n.updateLocationInfo(n.locateInternal(t, o));
    }
  else if (e instanceof Pn)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof ne)
    for (var c = new Tn(e); c.hasNext(); ) {
      var h = c.next();
      h !== e && n.computeLocation(t, h);
    }
};
je.prototype.locate = function(t, e) {
  return e.isEmpty() ? x.EXTERIOR : e instanceof mt ? this.locateInternal(t, e) : e instanceof Ot ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? x.BOUNDARY : this._numBoundaries > 0 || this._isIn ? x.INTERIOR : x.EXTERIOR);
};
je.prototype.interfaces_ = function() {
  return [];
};
je.prototype.getClass = function() {
  return je;
};
var $t = function i() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    i.call(this, t, i.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._component = n, this._segIndex = r, this._pt = s;
  }
}, _f = { INSIDE_AREA: { configurable: !0 } };
$t.prototype.isInsideArea = function() {
  return this._segIndex === $t.INSIDE_AREA;
};
$t.prototype.getCoordinate = function() {
  return this._pt;
};
$t.prototype.getGeometryComponent = function() {
  return this._component;
};
$t.prototype.getSegmentIndex = function() {
  return this._segIndex;
};
$t.prototype.interfaces_ = function() {
  return [];
};
$t.prototype.getClass = function() {
  return $t;
};
_f.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties($t, _f);
var di = function(t) {
  this._pts = t || null;
};
di.prototype.filter = function(t) {
  t instanceof ge && this._pts.add(t);
};
di.prototype.interfaces_ = function() {
  return [gn];
};
di.prototype.getClass = function() {
  return di;
};
di.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof ge ? qe.singletonList(t) : di.getPoints(t, new N());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof ge ? n.add(e) : e instanceof ne && e.apply(new di(n)), n;
  }
};
var dr = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
dr.prototype.filter = function(t) {
  (t instanceof ge || t instanceof mt || t instanceof Ot) && this._locations.add(new $t(t, 0, t.getCoordinate()));
};
dr.prototype.interfaces_ = function() {
  return [gn];
};
dr.prototype.getClass = function() {
  return dr;
};
dr.getLocations = function(t) {
  var e = new N();
  return t.apply(new dr(e)), e;
};
var Vt = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new je(), this._minDistanceLocation = null, this._minDistance = W.MAX_VALUE, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._geom = [t, e], this._terminateDistance = 0;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._geom = new Array(2).fill(null), this._geom[0] = n, this._geom[1] = r, this._terminateDistance = s;
  }
};
Vt.prototype.computeContainmentDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    var e = new Array(2).fill(null);
    if (this.computeContainmentDistance(0, e), this._minDistance <= this._terminateDistance)
      return null;
    this.computeContainmentDistance(1, e);
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = 1 - n, o = Qn.getPolygons(this._geom[n]);
    if (o.size() > 0) {
      var a = dr.getLocations(this._geom[s]);
      if (this.computeContainmentDistance(a, o, r), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[s] = r[0], this._minDistanceLocation[n] = r[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && X(arguments[0], Xe) && X(arguments[1], Xe)) {
      for (var u = arguments[0], l = arguments[1], c = arguments[2], h = 0; h < u.size(); h++)
        for (var f = u.get(h), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(f, l.get(g), c), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof $t && arguments[1] instanceof Ot) {
      var p = arguments[0], d = arguments[1], _ = arguments[2], m = p.getCoordinate();
      if (x.EXTERIOR !== this._ptLocator.locate(m, d))
        return this._minDistance = 0, _[0] = p, _[1] = new $t(d, m), null;
    }
  }
};
Vt.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (r.computeMinDistance(o, u, n), r._minDistance <= r._terminateDistance)
        return null;
    }
};
Vt.prototype.computeFacetDistance = function() {
  var t = new Array(2).fill(null), e = kt.getLines(this._geom[0]), n = kt.getLines(this._geom[1]), r = di.getPoints(this._geom[0]), s = di.getPoints(this._geom[1]);
  if (this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, s, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance) || (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, r, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance))
    return null;
  t[0] = null, t[1] = null, this.computeMinDistancePoints(r, s, t), this.updateMinDistance(t, !1);
};
Vt.prototype.nearestLocations = function() {
  return this.computeMinDistance(), this._minDistanceLocation;
};
Vt.prototype.updateMinDistance = function(t, e) {
  if (t[0] === null)
    return null;
  e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1]);
};
Vt.prototype.nearestPoints = function() {
  this.computeMinDistance();
  var t = [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()];
  return t;
};
Vt.prototype.computeMinDistance = function() {
  var t = this;
  if (arguments.length === 0) {
    if (this._minDistanceLocation !== null || (this._minDistanceLocation = new Array(2).fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance))
      return null;
    this.computeFacetDistance();
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && arguments[0] instanceof mt && arguments[1] instanceof ge) {
      var e = arguments[0], n = arguments[1], r = arguments[2];
      if (e.getEnvelopeInternal().distance(n.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var s = e.getCoordinates(), o = n.getCoordinate(), a = 0; a < s.length - 1; a++) {
        var u = M.distancePointLine(o, s[a], s[a + 1]);
        if (u < t._minDistance) {
          t._minDistance = u;
          var l = new F(s[a], s[a + 1]), c = l.closestPoint(o);
          r[0] = new $t(e, a, c), r[1] = new $t(n, 0, o);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof mt && arguments[1] instanceof mt) {
      var h = arguments[0], f = arguments[1], g = arguments[2];
      if (h.getEnvelopeInternal().distance(f.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = h.getCoordinates(), d = f.getCoordinates(), _ = 0; _ < p.length - 1; _++)
        for (var m = 0; m < d.length - 1; m++) {
          var y = M.distanceLineLine(p[_], p[_ + 1], d[m], d[m + 1]);
          if (y < t._minDistance) {
            t._minDistance = y;
            var E = new F(p[_], p[_ + 1]), I = new F(d[m], d[m + 1]), S = E.closestPoints(I);
            g[0] = new $t(h, _, S[0]), g[1] = new $t(f, m, S[1]);
          }
          if (t._minDistance <= t._terminateDistance)
            return null;
        }
    }
  }
};
Vt.prototype.computeMinDistancePoints = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a), l = o.getCoordinate().distance(u.getCoordinate());
      if (l < r._minDistance && (r._minDistance = l, n[0] = new $t(o, 0, o.getCoordinate()), n[1] = new $t(u, 0, u.getCoordinate())), r._minDistance <= r._terminateDistance)
        return null;
    }
};
Vt.prototype.distance = function() {
  if (this._geom[0] === null || this._geom[1] === null)
    throw new gt("null geometries are not supported");
  return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance);
};
Vt.prototype.computeMinDistanceLines = function(t, e, n) {
  for (var r = this, s = 0; s < t.size(); s++)
    for (var o = t.get(s), a = 0; a < e.size(); a++) {
      var u = e.get(a);
      if (r.computeMinDistance(o, u, n), r._minDistance <= r._terminateDistance)
        return null;
    }
};
Vt.prototype.interfaces_ = function() {
  return [];
};
Vt.prototype.getClass = function() {
  return Vt;
};
Vt.distance = function(t, e) {
  var n = new Vt(t, e);
  return n.distance();
};
Vt.isWithinDistance = function(t, e, n) {
  var r = new Vt(t, e, n);
  return r.distance() <= n;
};
Vt.nearestPoints = function(t, e) {
  var n = new Vt(t, e);
  return n.nearestPoints();
};
var Wt = function() {
  this._pt = [new v(), new v()], this._distance = W.NaN, this._isNull = !0;
};
Wt.prototype.getCoordinates = function() {
  return this._pt;
};
Wt.prototype.getCoordinate = function(t) {
  return this._pt[t];
};
Wt.prototype.setMinimum = function() {
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
Wt.prototype.initialize = function() {
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
Wt.prototype.toString = function() {
  return Ye.toLineString(this._pt[0], this._pt[1]);
};
Wt.prototype.getDistance = function() {
  return this._distance;
};
Wt.prototype.setMaximum = function() {
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
Wt.prototype.interfaces_ = function() {
  return [];
};
Wt.prototype.getClass = function() {
  return Wt;
};
var on = function() {
};
on.prototype.interfaces_ = function() {
  return [];
};
on.prototype.getClass = function() {
  return on;
};
on.computeDistance = function() {
  if (arguments[2] instanceof Wt && arguments[0] instanceof mt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new F(), s = t.getCoordinates(), o = 0; o < s.length - 1; o++) {
      r.setCoordinates(s[o], s[o + 1]);
      var a = r.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Wt && arguments[0] instanceof Ot && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], c = arguments[2];
    on.computeDistance(u.getExteriorRing(), l, c);
    for (var h = 0; h < u.getNumInteriorRing(); h++)
      on.computeDistance(u.getInteriorRingN(h), l, c);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof V && arguments[1] instanceof v) {
    var f = arguments[0], g = arguments[1], p = arguments[2];
    if (f instanceof mt)
      on.computeDistance(f, g, p);
    else if (f instanceof Ot)
      on.computeDistance(f, g, p);
    else if (f instanceof ne)
      for (var d = f, _ = 0; _ < d.getNumGeometries(); _++) {
        var m = d.getGeometryN(_);
        on.computeDistance(m, g, p);
      }
    else
      p.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var y = arguments[0], E = arguments[1], I = arguments[2], S = y.closestPoint(E);
    I.setMinimum(S, E);
  }
};
var Oe = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new Wt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, rl = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
Oe.prototype.getCoordinates = function() {
  return this._ptDist.getCoordinates();
};
Oe.prototype.setDensifyFraction = function(t) {
  if (t > 1 || t <= 0)
    throw new gt("Fraction is not in range (0.0 - 1.0]");
  this._densifyFrac = t;
};
Oe.prototype.compute = function(t, e) {
  this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist);
};
Oe.prototype.distance = function() {
  return this.compute(this._g0, this._g1), this._ptDist.getDistance();
};
Oe.prototype.computeOrientedDistance = function(t, e, n) {
  var r = new _r(e);
  if (t.apply(r), n.setMaximum(r.getMaxPointDistance()), this._densifyFrac > 0) {
    var s = new Ii(e, this._densifyFrac);
    t.apply(s), n.setMaximum(s.getMaxPointDistance());
  }
};
Oe.prototype.orientedDistance = function() {
  return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance();
};
Oe.prototype.interfaces_ = function() {
  return [];
};
Oe.prototype.getClass = function() {
  return Oe;
};
Oe.distance = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new Oe(t, e);
    return n.distance();
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = new Oe(r, s);
    return a.setDensifyFraction(o), a.distance();
  }
};
rl.MaxPointDistanceFilter.get = function() {
  return _r;
};
rl.MaxDensifiedByFractionDistanceFilter.get = function() {
  return Ii;
};
Object.defineProperties(Oe, rl);
var _r = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._euclideanDist = new on(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
_r.prototype.filter = function(t) {
  this._minPtDist.initialize(), on.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
_r.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
_r.prototype.interfaces_ = function() {
  return [bn];
};
_r.prototype.getClass = function() {
  return _r;
};
var Ii = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
Ii.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var r = t.getCoordinate(e - 1), s = t.getCoordinate(e), o = (s.x - r.x) / this._numSubSegs, a = (s.y - r.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = r.x + u * o, c = r.y + u * a, h = new v(l, c);
    n._minPtDist.initialize(), on.computeDistance(n._geom, h, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
Ii.prototype.isDone = function() {
  return !1;
};
Ii.prototype.isGeometryChanged = function() {
  return !1;
};
Ii.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Ii.prototype.interfaces_ = function() {
  return [Ue];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var fe = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, sl = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
fe.prototype.checkMaximumDistance = function(t, e, n) {
  var r = new Oe(e, t);
  if (r.setDensifyFraction(0.25), this._maxDistanceFound = r.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var s = r.getCoordinates();
    this._errorLocation = s[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + Ye.toLineString(s[0], s[1]) + ")";
  }
};
fe.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = fe.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), fe.VERBOSE && zt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
fe.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof Ot || this._input instanceof Pn || this._input instanceof ne))
    return null;
  var t = this.getPolygonLines(this._input);
  if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(t, this._result, this._maxValidDistance);
};
fe.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
fe.prototype.checkMinimumDistance = function(t, e, n) {
  var r = new Vt(t, e, n);
  if (this._minDistanceFound = r.distance(), this._minDistanceFound < n) {
    this._isValid = !1;
    var s = r.nearestPoints();
    this._errorLocation = r.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + Ye.toLineString(s[0], s[1]) + " )";
  }
};
fe.prototype.checkPositiveValid = function() {
  var t = this._result.getBoundary();
  if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid)
    return null;
  this.checkMaximumDistance(this._input, t, this._maxValidDistance);
};
fe.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
fe.prototype.getPolygonLines = function(t) {
  for (var e = new N(), n = new kt(e), r = Qn.getPolygons(t), s = r.iterator(); s.hasNext(); ) {
    var o = s.next();
    o.apply(n);
  }
  return t.getFactory().buildGeometry(e);
};
fe.prototype.getErrorMessage = function() {
  return this._errMsg;
};
fe.prototype.interfaces_ = function() {
  return [];
};
fe.prototype.getClass = function() {
  return fe;
};
sl.VERBOSE.get = function() {
  return !1;
};
sl.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(fe, sl);
var Xt = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, ol = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
Xt.prototype.isValid = function() {
  return this.checkPolygonal(), this._isValid ? (this.checkExpectedEmpty(), this._isValid ? (this.checkEnvelope(), this._isValid ? (this.checkArea(), this._isValid ? (this.checkDistance(), this._isValid) : this._isValid) : this._isValid) : this._isValid) : this._isValid;
};
Xt.prototype.checkEnvelope = function() {
  if (this._distance < 0)
    return null;
  var t = this._distance * Xt.MAX_ENV_DIFF_FRAC;
  t === 0 && (t = 1e-3);
  var e = new A(this._input.getEnvelopeInternal());
  e.expandBy(this._distance);
  var n = new A(this._result.getEnvelopeInternal());
  n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope");
};
Xt.prototype.checkDistance = function() {
  var t = new fe(this._input, this._distance, this._result);
  t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance");
};
Xt.prototype.checkArea = function() {
  var t = this._input.getArea(), e = this._result.getArea();
  this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area");
};
Xt.prototype.checkPolygonal = function() {
  this._result instanceof Ot || this._result instanceof Pn || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
};
Xt.prototype.getErrorIndicator = function() {
  return this._errorIndicator;
};
Xt.prototype.getErrorLocation = function() {
  return this._errorLocation;
};
Xt.prototype.checkExpectedEmpty = function() {
  if (this._input.getDimension() >= 2 || this._distance > 0)
    return null;
  this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), this.report("ExpectedEmpty");
};
Xt.prototype.report = function(t) {
  if (!Xt.VERBOSE)
    return null;
  zt.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"));
};
Xt.prototype.getErrorMessage = function() {
  return this._errorMsg;
};
Xt.prototype.interfaces_ = function() {
  return [];
};
Xt.prototype.getClass = function() {
  return Xt;
};
Xt.isValidMsg = function(t, e, n) {
  var r = new Xt(t, e, n);
  return r.isValid() ? null : r.getErrorMessage();
};
Xt.isValid = function(t, e, n) {
  var r = new Xt(t, e, n);
  return !!r.isValid();
};
ol.VERBOSE.get = function() {
  return !1;
};
ol.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Xt, ol);
var vn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
vn.prototype.getCoordinates = function() {
  return this._pts;
};
vn.prototype.size = function() {
  return this._pts.length;
};
vn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
vn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
vn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : hr.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
vn.prototype.setData = function(t) {
  this._data = t;
};
vn.prototype.getData = function() {
  return this._data;
};
vn.prototype.toString = function() {
  return Ye.toLineString(new vt(this._pts));
};
vn.prototype.interfaces_ = function() {
  return [An];
};
vn.prototype.getClass = function() {
  return vn;
};
var Dt = function() {
  this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new N(), this._intersectionCount = 0, this._keepIntersections = !0;
  var t = arguments[0];
  this._li = t, this._interiorIntersection = null;
};
Dt.prototype.getInteriorIntersection = function() {
  return this._interiorIntersection;
};
Dt.prototype.setCheckEndSegmentsOnly = function(t) {
  this._isCheckEndSegmentsOnly = t;
};
Dt.prototype.getIntersectionSegments = function() {
  return this._intSegments;
};
Dt.prototype.count = function() {
  return this._intersectionCount;
};
Dt.prototype.getIntersections = function() {
  return this._intersections;
};
Dt.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Dt.prototype.setKeepIntersections = function(t) {
  this._keepIntersections = t;
};
Dt.prototype.processIntersections = function(t, e, n, r) {
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
Dt.prototype.isEndSegment = function(t, e) {
  return e === 0 || e >= t.size() - 2;
};
Dt.prototype.hasIntersection = function() {
  return this._interiorIntersection !== null;
};
Dt.prototype.isDone = function() {
  return this._findAllIntersections ? !1 : this._interiorIntersection !== null;
};
Dt.prototype.interfaces_ = function() {
  return [Ui];
};
Dt.prototype.getClass = function() {
  return Dt;
};
Dt.createAllIntersectionsFinder = function(t) {
  var e = new Dt(t);
  return e.setFindAllIntersections(!0), e;
};
Dt.createAnyIntersectionFinder = function(t) {
  return new Dt(t);
};
Dt.createIntersectionCounter = function(t) {
  var e = new Dt(t);
  return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e;
};
var Ze = function() {
  this._li = new Ji(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Ze.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Ze.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Ze.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Ze.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ze.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Dt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new nl();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Ze.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new ei(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Ze.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + Ye.toLineString(t[0], t[1]) + " and " + Ye.toLineString(t[2], t[3]);
};
Ze.prototype.interfaces_ = function() {
  return [];
};
Ze.prototype.getClass = function() {
  return Ze;
};
Ze.computeIntersections = function(t) {
  var e = new Ze(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Hi = function i() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Ze(i.toSegmentStrings(t));
};
Hi.prototype.checkValid = function() {
  this._nv.checkValid();
};
Hi.prototype.interfaces_ = function() {
  return [];
};
Hi.prototype.getClass = function() {
  return Hi;
};
Hi.toSegmentStrings = function(t) {
  for (var e = new N(), n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e.add(new vn(r.getCoordinates(), r));
  }
  return e;
};
Hi.checkValid = function(t) {
  var e = new Hi(t);
  e.checkValid();
};
var mr = function(t) {
  this._mapOp = t;
};
mr.prototype.map = function(t) {
  for (var e = this, n = new N(), r = 0; r < t.getNumGeometries(); r++) {
    var s = e._mapOp.map(t.getGeometryN(r));
    s.isEmpty() || n.add(s);
  }
  return t.getFactory().createGeometryCollection(K.toGeometryArray(n));
};
mr.prototype.interfaces_ = function() {
  return [];
};
mr.prototype.getClass = function() {
  return mr;
};
mr.map = function(t, e) {
  var n = new mr(e);
  return n.map(t);
};
var En = function() {
  this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new N(), this._resultLineList = new N();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._op = t, this._geometryFactory = e, this._ptLocator = n;
};
En.prototype.collectLines = function(t) {
  for (var e = this, n = this._op.getGraph().getEdgeEnds().iterator(); n.hasNext(); ) {
    var r = n.next();
    e.collectLineEdge(r, t, e._lineEdgesList), e.collectBoundaryTouchEdge(r, t, e._lineEdgesList);
  }
};
En.prototype.labelIsolatedLine = function(t, e) {
  var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
  t.getLabel().setLocation(e, n);
};
En.prototype.build = function(t) {
  return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList;
};
En.prototype.collectLineEdge = function(t, e, n) {
  var r = t.getLabel(), s = t.getEdge();
  t.isLineEdge() && !t.isVisited() && q.isResultOfOp(r, e) && !s.isCovered() && (n.add(s), t.setVisitedEdge(!0));
};
En.prototype.findCoveredLineEdges = function() {
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
En.prototype.labelIsolatedLines = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getLabel();
    r.isIsolated() && (s.isNull(0) ? e.labelIsolatedLine(r, 0) : e.labelIsolatedLine(r, 1));
  }
};
En.prototype.buildLines = function(t) {
  for (var e = this, n = this._lineEdgesList.iterator(); n.hasNext(); ) {
    var r = n.next(), s = e._geometryFactory.createLineString(r.getCoordinates());
    e._resultLineList.add(s), r.setInResult(!0);
  }
};
En.prototype.collectBoundaryTouchEdge = function(t, e, n) {
  var r = t.getLabel();
  if (t.isLineEdge() || t.isVisited() || t.isInteriorAreaEdge() || t.getEdge().isInResult())
    return null;
  j.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), q.isResultOfOp(r, e) && e === q.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
En.prototype.interfaces_ = function() {
  return [];
};
En.prototype.getClass = function() {
  return En;
};
var yr = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new N();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
yr.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
yr.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var r = n.next();
    if (!r.isInResult() && !r.isIncidentEdgeInResult() && (r.getEdges().getDegree() === 0 || t === q.INTERSECTION)) {
      var s = r.getLabel();
      q.isResultOfOp(s, t) && e.filterCoveredNodeToPoint(r);
    }
  }
};
yr.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
yr.prototype.interfaces_ = function() {
  return [];
};
yr.prototype.getClass = function() {
  return yr;
};
var ce = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
ce.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
ce.prototype.transformPolygon = function(t, e) {
  var n = this, r = !0, s = this.transformLinearRing(t.getExteriorRing(), t);
  (s === null || !(s instanceof Mn) || s.isEmpty()) && (r = !1);
  for (var o = new N(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof Mn || (r = !1), o.add(u));
  }
  if (r)
    return this._factory.createPolygon(s, o.toArray([]));
  var l = new N();
  return s !== null && l.add(s), l.addAll(o), this._factory.buildGeometry(l);
};
ce.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
ce.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
ce.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformLineString(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
ce.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
ce.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
ce.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPoint(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
ce.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPolygon(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
ce.prototype.copy = function(t) {
  return t.copy();
};
ce.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transform(t.getGeometryN(s));
    o !== null && (n._pruneEmptyGeometry && o.isEmpty() || r.add(o));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(K.toGeometryArray(r)) : this._factory.buildGeometry(r);
};
ce.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof ge)
    return this.transformPoint(t, null);
  if (t instanceof Qr)
    return this.transformMultiPoint(t, null);
  if (t instanceof Mn)
    return this.transformLinearRing(t, null);
  if (t instanceof mt)
    return this.transformLineString(t, null);
  if (t instanceof Vi)
    return this.transformMultiLineString(t, null);
  if (t instanceof Ot)
    return this.transformPolygon(t, null);
  if (t instanceof Pn)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ne)
    return this.transformGeometryCollection(t, null);
  throw new gt("Unknown Geometry subtype: " + t.getClass().getName());
};
ce.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var r = n.size();
  return r > 0 && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
ce.prototype.interfaces_ = function() {
  return [];
};
ce.prototype.getClass = function() {
  return ce;
};
var Gn = function i() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new F(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof mt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    i.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], r = arguments[1];
    this._srcPts = n, this._isClosed = i.isClosed(n), this._snapTolerance = r;
  }
};
Gn.prototype.snapVertices = function(t, e) {
  for (var n = this, r = this._isClosed ? t.size() - 1 : t.size(), s = 0; s < r; s++) {
    var o = t.get(s), a = n.findSnapForVertex(o, e);
    a !== null && (t.set(s, new v(a)), s === 0 && n._isClosed && t.set(t.size() - 1, new v(a)));
  }
};
Gn.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, r = 0; r < e.length; r++) {
    if (t.equals2D(e[r]))
      return null;
    if (t.distance(e[r]) < n._snapTolerance)
      return e[r];
  }
  return null;
};
Gn.prototype.snapTo = function(t) {
  var e = new mo(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
Gn.prototype.snapSegments = function(t, e) {
  var n = this;
  if (e.length === 0)
    return null;
  var r = e.length;
  e[0].equals2D(e[e.length - 1]) && (r = e.length - 1);
  for (var s = 0; s < r; s++) {
    var o = e[s], a = n.findSegmentIndexToSnap(o, t);
    a >= 0 && t.add(a + 1, new v(o), !1);
  }
};
Gn.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, r = W.MAX_VALUE, s = -1, o = 0; o < e.size() - 1; o++) {
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
Gn.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
Gn.prototype.interfaces_ = function() {
  return [];
};
Gn.prototype.getClass = function() {
  return Gn;
};
Gn.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var Et = function(t) {
  this._srcGeom = t || null;
}, mf = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
Et.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), r = new yf(e, n);
  return r.transform(this._srcGeom);
};
Et.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), r = new yf(t, n, !0), s = r.transform(this._srcGeom), o = s;
  return e && X(o, mi) && (o = s.buffer(0)), o;
};
Et.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
Et.prototype.extractTargetCoordinates = function(t) {
  for (var e = new fn(), n = t.getCoordinates(), r = 0; r < n.length; r++)
    e.add(n[r]);
  return e.toArray(new Array(0).fill(null));
};
Et.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = W.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var r = t[n].distance(t[n + 1]);
    r < e && (e = r);
  }
  return e;
};
Et.prototype.interfaces_ = function() {
  return [];
};
Et.prototype.getClass = function() {
  return Et;
};
Et.snap = function(t, e, n) {
  var r = new Array(2).fill(null), s = new Et(t);
  r[0] = s.snapTo(e, n);
  var o = new Et(e);
  return r[1] = o.snapTo(r[0], n), r;
};
Et.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = Et.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === nt.FIXED) {
      var r = 1 / n.getScale() * 2 / 1.415;
      r > e && (e = r);
    }
    return e;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return Math.min(Et.computeOverlaySnapTolerance(s), Et.computeOverlaySnapTolerance(o));
  }
};
Et.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), r = n * Et.SNAP_PRECISION_FACTOR;
  return r;
};
Et.snapToSelf = function(t, e, n) {
  var r = new Et(t);
  return r.snapToSelf(e, n);
};
mf.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(Et, mf);
var yf = function(i) {
  function t(e, n, r) {
    i.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = r !== void 0 ? r : !1;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, r) {
    var s = new Gn(n, this._snapTolerance);
    return s.setAllowSnappingToSourceVertices(this._isSelfSnap), s.snapTo(r);
  }, t.prototype.transformCoordinates = function(n, r) {
    var s = n.toCoordinateArray(), o = this.snapLine(s, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(ce), Jt = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
Jt.prototype.getCommon = function() {
  return W.longBitsToDouble(this._commonBits);
};
Jt.prototype.add = function(t) {
  var e = W.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = Jt.signExpBits(this._commonBits), this._isFirst = !1, null;
  var n = Jt.signExpBits(e);
  if (n !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = Jt.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = Jt.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
Jt.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = W.longBitsToDouble(t), n = W.toBinaryString(t), r = "0000000000000000000000000000000000000000000000000000000000000000" + n, s = r.substring(r.length - 64), o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
    return o;
  }
};
Jt.prototype.interfaces_ = function() {
  return [];
};
Jt.prototype.getClass = function() {
  return Jt;
};
Jt.getBit = function(t, e) {
  var n = 1 << e;
  return t & n ? 1 : 0;
};
Jt.signExpBits = function(t) {
  return t >> 52;
};
Jt.zeroLowerBits = function(t, e) {
  var n = (1 << e) - 1, r = ~n, s = t & r;
  return s;
};
Jt.numCommonMostSigMantissaBits = function(t, e) {
  for (var n = 0, r = 52; r >= 0; r--) {
    if (Jt.getBit(t, r) !== Jt.getBit(e, r))
      return n;
    n++;
  }
  return 52;
};
var Si = function() {
  this._commonCoord = null, this._ccFilter = new vr();
}, al = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
Si.prototype.addCommonBits = function(t) {
  var e = new Ri(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
Si.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new v(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new Ri(e);
  return t.apply(n), t.geometryChanged(), t;
};
Si.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
Si.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
Si.prototype.interfaces_ = function() {
  return [];
};
Si.prototype.getClass = function() {
  return Si;
};
al.CommonCoordinateFilter.get = function() {
  return vr;
};
al.Translater.get = function() {
  return Ri;
};
Object.defineProperties(Si, al);
var vr = function() {
  this._commonBitsX = new Jt(), this._commonBitsY = new Jt();
};
vr.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
vr.prototype.getCommonCoordinate = function() {
  return new v(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
vr.prototype.interfaces_ = function() {
  return [bn];
};
vr.prototype.getClass = function() {
  return vr;
};
var Ri = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
Ri.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, r = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r);
};
Ri.prototype.isDone = function() {
  return !1;
};
Ri.prototype.isGeometryChanged = function() {
  return !0;
};
Ri.prototype.interfaces_ = function() {
  return [Ue];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var At = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
At.prototype.selfSnap = function(t) {
  var e = new Et(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
At.prototype.removeCommonBits = function(t) {
  this._cbr = new Si(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
At.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
At.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = q.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
At.prototype.checkValid = function(t) {
  t.isValid() || zt.out.println("Snapped geometry is invalid");
};
At.prototype.computeSnapTolerance = function() {
  this._snapTolerance = Et.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
At.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = Et.snap(e[0], e[1], this._snapTolerance);
  return n;
};
At.prototype.interfaces_ = function() {
  return [];
};
At.prototype.getClass = function() {
  return At;
};
At.overlayOp = function(t, e, n) {
  var r = new At(t, e);
  return r.getResultGeometry(n);
};
At.union = function(t, e) {
  return At.overlayOp(t, e, q.UNION);
};
At.intersection = function(t, e) {
  return At.overlayOp(t, e, q.INTERSECTION);
};
At.symDifference = function(t, e) {
  return At.overlayOp(t, e, q.SYMDIFFERENCE);
};
At.difference = function(t, e) {
  return At.overlayOp(t, e, q.DIFFERENCE);
};
var se = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
se.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, r = null;
  try {
    e = q.overlayOp(this._geom[0], this._geom[1], t);
    var s = !0;
    s && (n = !0);
  } catch (o) {
    if (o instanceof $n)
      r = o;
    else
      throw o;
  } finally {
  }
  if (!n)
    try {
      e = At.overlayOp(this._geom[0], this._geom[1], t);
    } catch (o) {
      throw o instanceof $n ? r : o;
    } finally {
    }
  return e;
};
se.prototype.interfaces_ = function() {
  return [];
};
se.prototype.getClass = function() {
  return se;
};
se.overlayOp = function(t, e, n) {
  var r = new se(t, e);
  return r.getResultGeometry(n);
};
se.union = function(t, e) {
  return se.overlayOp(t, e, q.UNION);
};
se.intersection = function(t, e) {
  return se.overlayOp(t, e, q.INTERSECTION);
};
se.symDifference = function(t, e) {
  return se.overlayOp(t, e, q.SYMDIFFERENCE);
};
se.difference = function(t, e) {
  return se.overlayOp(t, e, q.DIFFERENCE);
};
var so = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
so.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
so.prototype.interfaces_ = function() {
  return [];
};
so.prototype.getClass = function() {
  return so;
};
var _e = function i() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = i.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._eventType = i.INSERT, this._label = n, this._xValue = r, this._obj = s;
  }
}, ul = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
_e.prototype.isDelete = function() {
  return this._eventType === _e.DELETE;
};
_e.prototype.setDeleteEventIndex = function(t) {
  this._deleteEventIndex = t;
};
_e.prototype.getObject = function() {
  return this._obj;
};
_e.prototype.compareTo = function(t) {
  var e = t;
  return this._xValue < e._xValue ? -1 : this._xValue > e._xValue ? 1 : this._eventType < e._eventType ? -1 : this._eventType > e._eventType ? 1 : 0;
};
_e.prototype.getInsertEvent = function() {
  return this._insertEvent;
};
_e.prototype.isInsert = function() {
  return this._eventType === _e.INSERT;
};
_e.prototype.isSameLabel = function(t) {
  return this._label === null ? !1 : this._label === t._label;
};
_e.prototype.getDeleteEventIndex = function() {
  return this._deleteEventIndex;
};
_e.prototype.interfaces_ = function() {
  return [Ae];
};
_e.prototype.getClass = function() {
  return _e;
};
ul.INSERT.get = function() {
  return 1;
};
ul.DELETE.get = function() {
  return 2;
};
Object.defineProperties(_e, ul);
var ia = function() {
};
ia.prototype.interfaces_ = function() {
  return [];
};
ia.prototype.getClass = function() {
  return ia;
};
var Yt = function() {
  this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._li = t, this._includeProper = e, this._recordIsolated = n;
};
Yt.prototype.isTrivialIntersection = function(t, e, n, r) {
  if (t === n && this._li.getIntersectionNum() === 1) {
    if (Yt.isAdjacentSegments(e, r))
      return !0;
    if (t.isClosed()) {
      var s = t.getNumPoints() - 1;
      if (e === 0 && r === s || r === 0 && e === s)
        return !0;
    }
  }
  return !1;
};
Yt.prototype.getProperIntersectionPoint = function() {
  return this._properIntersectionPoint;
};
Yt.prototype.setIsDoneIfProperInt = function(t) {
  this._isDoneWhenProperInt = t;
};
Yt.prototype.hasProperInteriorIntersection = function() {
  return this._hasProperInterior;
};
Yt.prototype.isBoundaryPointInternal = function(t, e) {
  for (var n = e.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getCoordinate();
    if (t.isIntersection(s))
      return !0;
  }
  return !1;
};
Yt.prototype.hasProperIntersection = function() {
  return this._hasProper;
};
Yt.prototype.hasIntersection = function() {
  return this._hasIntersection;
};
Yt.prototype.isDone = function() {
  return this._isDone;
};
Yt.prototype.isBoundaryPoint = function(t, e) {
  return e === null ? !1 : !!(this.isBoundaryPointInternal(t, e[0]) || this.isBoundaryPointInternal(t, e[1]));
};
Yt.prototype.setBoundaryNodes = function(t, e) {
  this._bdyNodes = new Array(2).fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e;
};
Yt.prototype.addIntersections = function(t, e, n, r) {
  if (t === n && e === r)
    return null;
  this.numTests++;
  var s = t.getCoordinates()[e], o = t.getCoordinates()[e + 1], a = n.getCoordinates()[r], u = n.getCoordinates()[r + 1];
  this._li.computeIntersection(s, o, a, u), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, (this._includeProper || !this._li.isProper()) && (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))));
};
Yt.prototype.interfaces_ = function() {
  return [];
};
Yt.prototype.getClass = function() {
  return Yt;
};
Yt.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var em = function(i) {
  function t() {
    i.call(this), this.events = new N(), this.nOverlaps = null;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    qe.sort(this.events);
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
      if (arguments[2] instanceof Yt && X(arguments[0], Xe) && X(arguments[1], Xe)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && X(arguments[0], Xe) && arguments[1] instanceof Yt) {
        var c = arguments[0], h = arguments[1], f = arguments[2];
        f ? this.addEdges(c, null) : this.addEdges(c), this.computeIntersections(h);
      }
    }
  }, t.prototype.addEdge = function(n, r) {
    for (var s = this, o = n.getMonotoneChainEdge(), a = o.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new so(o, u), c = new _e(r, o.getMinX(u), l);
      s.events.add(c), s.events.add(new _e(o.getMaxX(u), c));
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
}(ia), Bn = function() {
  this._min = W.POSITIVE_INFINITY, this._max = W.NEGATIVE_INFINITY;
}, vf = { NodeComparator: { configurable: !0 } };
Bn.prototype.getMin = function() {
  return this._min;
};
Bn.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Bn.prototype.getMax = function() {
  return this._max;
};
Bn.prototype.toString = function() {
  return Ye.toLineString(new v(this._min, 0), new v(this._max, 0));
};
Bn.prototype.interfaces_ = function() {
  return [];
};
Bn.prototype.getClass = function() {
  return Bn;
};
vf.NodeComparator.get = function() {
  return oo;
};
Object.defineProperties(Bn, vf);
var oo = function() {
};
oo.prototype.compare = function(t, e) {
  var n = t, r = e, s = (n._min + n._max) / 2, o = (r._min + r._max) / 2;
  return s < o ? -1 : s > o ? 1 : 0;
};
oo.prototype.interfaces_ = function() {
  return [Wr];
};
oo.prototype.getClass = function() {
  return oo;
};
var nm = function(i) {
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
}(Bn), im = function(i) {
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
}(Bn), zn = function() {
  this._leaves = new N(), this._root = null, this._level = 0;
};
zn.prototype.buildTree = function() {
  var t = this;
  qe.sort(this._leaves, new Bn.NodeComparator());
  for (var e = this._leaves, n = null, r = new N(); ; ) {
    if (t.buildLevel(e, r), r.size() === 1)
      return r.get(0);
    n = e, e = r, r = n;
  }
};
zn.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new nm(t, e, n));
};
zn.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
zn.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
zn.prototype.printNode = function(t) {
  zt.out.println(Ye.toLineString(new v(t._min, this._level), new v(t._max, this._level)));
};
zn.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
zn.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var r = t.get(n), s = n + 1 < t.size() ? t.get(n) : null;
    if (s === null)
      e.add(r);
    else {
      var o = new im(t.get(n), t.get(n + 1));
      e.add(o);
    }
  }
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
var rs = function() {
  this._items = new N();
};
rs.prototype.visitItem = function(t) {
  this._items.add(t);
};
rs.prototype.getItems = function() {
  return this._items;
};
rs.prototype.interfaces_ = function() {
  return [yi];
};
rs.prototype.getClass = function() {
  return rs;
};
var ss = function() {
  this._index = null;
  var t = arguments[0];
  if (!X(t, mi))
    throw new gt("Argument must be Polygonal");
  this._index = new ji(t);
}, ll = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
ss.prototype.locate = function(t) {
  var e = new un(t), n = new os(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
ss.prototype.interfaces_ = function() {
  return [ns];
};
ss.prototype.getClass = function() {
  return ss;
};
ll.SegmentVisitor.get = function() {
  return os;
};
ll.IntervalIndexedGeometry.get = function() {
  return ji;
};
Object.defineProperties(ss, ll);
var os = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
os.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
os.prototype.interfaces_ = function() {
  return [yi];
};
os.prototype.getClass = function() {
  return os;
};
var ji = function() {
  this._index = new zn();
  var t = arguments[0];
  this.init(t);
};
ji.prototype.init = function(t) {
  for (var e = this, n = kt.getLines(t), r = n.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getCoordinates();
    e.addLine(o);
  }
};
ji.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var r = new F(t[n - 1], t[n]), s = Math.min(r.p0.y, r.p1.y), o = Math.max(r.p0.y, r.p1.y);
    e._index.insert(s, o, r);
  }
};
ji.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new rs();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    this._index.query(r, s, o);
  }
};
ji.prototype.interfaces_ = function() {
  return [];
};
ji.prototype.getClass = function() {
  return ji;
};
var Rs = function(i) {
  function t() {
    if (i.call(this), this._parentGeom = null, this._lineEdgeMap = new ef(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new je(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], r = be.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = r, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2];
      this._argIndex = s, this._parentGeom = o, this._boundaryNodeRule = a, o !== null && this.add(o);
    }
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, r) {
    var s = this._nodes.addNode(r), o = s.getLabel(), a = 1, u = x.NONE;
    u = o.getLocation(n, R.ON), u === x.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    o.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      return this.computeSelfNodes(n, r, !1);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new Yt(s, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), c = this._parentGeom instanceof Mn || this._parentGeom instanceof Ot || this._parentGeom instanceof Pn, h = o || !c;
      return l.computeIntersections(this._edges, u, h), this.addSelfIntersectionNodes(this._argIndex), u;
    }
  }, t.prototype.computeSplitEdges = function(n) {
    for (var r = this._edges.iterator(); r.hasNext(); ) {
      var s = r.next();
      s.eiList.addSplitEdges(n);
    }
  }, t.prototype.computeEdgeIntersections = function(n, r, s) {
    var o = new Yt(r, s, !0);
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
    if (arguments[0] instanceof ge) {
      var n = arguments[0], r = n.getCoordinate();
      this.insertPoint(this._argIndex, r, x.INTERIOR);
    } else if (arguments[0] instanceof v) {
      var s = arguments[0];
      this.insertPoint(this._argIndex, s, x.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var r = this;
    this.addPolygonRing(n.getExteriorRing(), x.EXTERIOR, x.INTERIOR);
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var o = n.getInteriorRingN(s);
      r.addPolygonRing(o, x.INTERIOR, x.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var r = n.getCoordinates();
    this.insertPoint(this._argIndex, r[0], x.BOUNDARY), this.insertPoint(this._argIndex, r[r.length - 1], x.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var r = J.removeRepeatedPoints(n.getCoordinates());
    if (r.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = r[0], null;
    var s = new na(r, new rt(this._argIndex, x.INTERIOR));
    this._lineEdgeMap.put(n, s), this.insertEdge(s), j.isTrue(r.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, r[0]), this.insertBoundaryPoint(this._argIndex, r[r.length - 1]);
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
    s === x.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, r) : this.insertPoint(n, r, s);
  }, t.prototype.addPolygonRing = function(n, r, s) {
    if (n.isEmpty())
      return null;
    var o = J.removeRepeatedPoints(n.getCoordinates());
    if (o.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = o[0], null;
    var a = r, u = s;
    M.isCCW(o) && (a = s, u = r);
    var l = new na(o, new rt(this._argIndex, x.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, o[0], x.BOUNDARY);
  }, t.prototype.insertPoint = function(n, r, s) {
    var o = this._nodes.addNode(r), a = o.getLabel();
    a === null ? o._label = new rt(n, s) : a.setLocation(n, s);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new em();
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
      if (n instanceof Pn && (this._useBoundaryDeterminationRule = !1), n instanceof Ot)
        this.addPolygon(n);
      else if (n instanceof mt)
        this.addLineString(n);
      else if (n instanceof ge)
        this.addPoint(n);
      else if (n instanceof Qr)
        this.addCollection(n);
      else if (n instanceof Vi)
        this.addCollection(n);
      else if (n instanceof Pn)
        this.addCollection(n);
      else if (n instanceof ne)
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
    return X(this._parentGeom, mi) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new ss(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
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
    return n.isInBoundary(r) ? x.BOUNDARY : x.INTERIOR;
  }, t;
}(dt), as = function() {
  if (this._li = new Ji(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Rs(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = be.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Rs(0, e, r), this._arg[1] = new Rs(1, n, r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    s.getPrecisionModel().compareTo(o.getPrecisionModel()) >= 0 ? this.setComputationPrecision(s.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Rs(0, s, a), this._arg[1] = new Rs(1, o, a);
  }
};
as.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
as.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
as.prototype.interfaces_ = function() {
  return [];
};
as.prototype.getClass = function() {
  return as;
};
var Bi = function() {
};
Bi.prototype.interfaces_ = function() {
  return [];
};
Bi.prototype.getClass = function() {
  return Bi;
};
Bi.map = function() {
  if (arguments[0] instanceof V && X(arguments[1], Bi.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new N(), r = 0; r < t.getNumGeometries(); r++) {
      var s = e.map(t.getGeometryN(r));
      s !== null && n.add(s);
    }
    return t.getFactory().buildGeometry(n);
  } else if (X(arguments[0], Nt) && X(arguments[1], Bi.MapOp)) {
    for (var o = arguments[0], a = arguments[1], u = new N(), l = o.iterator(); l.hasNext(); ) {
      var c = l.next(), h = a.map(c);
      h !== null && u.add(h);
    }
    return u;
  }
};
Bi.MapOp = function() {
};
var q = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n), this._ptLocator = new je(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new He(), this._resultPolyList = new N(), this._resultLineList = new N(), this._resultPointList = new N(), this._graph = new dt(new cf()), this._geomFact = e.getFactory();
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.insertUniqueEdge = function(n) {
    var r = this._edgeList.findEqualEdge(n);
    if (r !== null) {
      var s = r.getLabel(), o = n.getLabel();
      r.isPointwiseEqual(n) || (o = new rt(n.getLabel()), o.flip());
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
    var a = new N();
    return a.addAll(n), a.addAll(r), a.addAll(s), a.isEmpty() ? t.createEmptyResult(o, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(a);
  }, t.prototype.mergeSymLabels = function() {
    for (var n = this._graph.getNodes().iterator(); n.hasNext(); ) {
      var r = n.next();
      r.getEdges().mergeSymLabels();
    }
  }, t.prototype.isCovered = function(n, r) {
    for (var s = this, o = r.iterator(); o.hasNext(); ) {
      var a = o.next(), u = s._ptLocator.locate(n, a);
      if (u !== x.EXTERIOR)
        return !0;
    }
    return !1;
  }, t.prototype.replaceCollapsedEdges = function() {
    for (var n = new N(), r = this._edgeList.iterator(); r.hasNext(); ) {
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
    var r = new N();
    this._arg[0].computeSplitEdges(r), this._arg[1].computeSplitEdges(r), this.insertUniqueEdges(r), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Hi.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var s = new pe(this._geomFact);
    s.add(this._graph), this._resultPolyList = s.getPolygons();
    var o = new En(this, this._geomFact, this._ptLocator);
    this._resultLineList = o.build(n);
    var a = new yr(this, this._geomFact, this._ptLocator);
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
      o.isArea() && !s.isInteriorAreaEdge() && t.isResultOfOp(o.getLocation(0, R.RIGHT), o.getLocation(1, R.RIGHT), n) && s.setInResult(!0);
    }
  }, t.prototype.computeLabelsFromDepths = function() {
    for (var n = this._edgeList.iterator(); n.hasNext(); ) {
      var r = n.next(), s = r.getLabel(), o = r.getDepth();
      if (!o.isNull()) {
        o.normalize();
        for (var a = 0; a < 2; a++)
          !s.isNull(a) && s.isArea() && !o.isNull(a) && (o.getDelta(a) === 0 ? s.toLine(a) : (j.isTrue(!o.isNull(a, R.LEFT), "depth of LEFT side has not been initialized"), s.setLocation(a, R.LEFT, o.getLocation(a, R.LEFT)), j.isTrue(!o.isNull(a, R.RIGHT), "depth of RIGHT side has not been initialized"), s.setLocation(a, R.RIGHT, o.getLocation(a, R.RIGHT))));
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
}(as);
q.overlayOp = function(i, t, e) {
  var n = new q(i, t), r = n.getResultGeometry(e);
  return r;
};
q.intersection = function(i, t) {
  if (i.isEmpty() || t.isEmpty())
    return q.createEmptyResult(q.INTERSECTION, i, t, i.getFactory());
  if (i.isGeometryCollection()) {
    var e = t;
    return mr.map(i, {
      interfaces_: function() {
        return [Bi.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, q.INTERSECTION);
};
q.symDifference = function(i, t) {
  if (i.isEmpty() || t.isEmpty()) {
    if (i.isEmpty() && t.isEmpty())
      return q.createEmptyResult(q.SYMDIFFERENCE, i, t, i.getFactory());
    if (i.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return i.copy();
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, q.SYMDIFFERENCE);
};
q.resultDimension = function(i, t, e) {
  var n = t.getDimension(), r = e.getDimension(), s = -1;
  switch (i) {
    case q.INTERSECTION:
      s = Math.min(n, r);
      break;
    case q.UNION:
      s = Math.max(n, r);
      break;
    case q.DIFFERENCE:
      s = n;
      break;
    case q.SYMDIFFERENCE:
      s = Math.max(n, r);
      break;
  }
  return s;
};
q.createEmptyResult = function(i, t, e, n) {
  var r = null;
  switch (q.resultDimension(i, t, e)) {
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
q.difference = function(i, t) {
  return i.isEmpty() ? q.createEmptyResult(q.DIFFERENCE, i, t, i.getFactory()) : t.isEmpty() ? i.copy() : (i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, q.DIFFERENCE));
};
q.isResultOfOp = function() {
  if (arguments.length === 2) {
    var i = arguments[0], t = arguments[1], e = i.getLocation(0), n = i.getLocation(1);
    return q.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    switch (r === x.BOUNDARY && (r = x.INTERIOR), s === x.BOUNDARY && (s = x.INTERIOR), o) {
      case q.INTERSECTION:
        return r === x.INTERIOR && s === x.INTERIOR;
      case q.UNION:
        return r === x.INTERIOR || s === x.INTERIOR;
      case q.DIFFERENCE:
        return r === x.INTERIOR && s !== x.INTERIOR;
      case q.SYMDIFFERENCE:
        return r === x.INTERIOR && s !== x.INTERIOR || r !== x.INTERIOR && s === x.INTERIOR;
    }
    return !1;
  }
};
q.INTERSECTION = 1;
q.UNION = 2;
q.DIFFERENCE = 3;
q.SYMDIFFERENCE = 4;
var _i = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new je(), this._seg = new F();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
_i.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var r = e._linework.getGeometryN(n), s = r.getCoordinateSequence(), o = 0; o < s.size() - 1; o++) {
      s.getCoordinate(o, e._seg.p0), s.getCoordinate(o + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
_i.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? x.BOUNDARY : this._ptLocator.locate(t, this._g);
};
_i.prototype.extractLinework = function(t) {
  var e = new us();
  t.apply(e);
  var n = e.getLinework(), r = K.toLineStringArray(n);
  return t.getFactory().createMultiLineString(r);
};
_i.prototype.interfaces_ = function() {
  return [];
};
_i.prototype.getClass = function() {
  return _i;
};
var us = function() {
  this._linework = null, this._linework = new N();
};
us.prototype.getLinework = function() {
  return this._linework;
};
us.prototype.filter = function(t) {
  var e = this;
  if (t instanceof Ot) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var r = 0; r < n.getNumInteriorRing(); r++)
      e._linework.add(n.getInteriorRingN(r));
  }
};
us.prototype.interfaces_ = function() {
  return [gn];
};
us.prototype.getClass = function() {
  return us;
};
var Zi = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Zi.prototype.extractPoints = function(t, e, n) {
  for (var r = this, s = t.getCoordinates(), o = 0; o < s.length - 1; o++)
    r.computeOffsetPoints(s[o], s[o + 1], e, n);
};
Zi.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Zi.prototype.getPoints = function(t) {
  for (var e = this, n = new N(), r = kt.getLines(this._g), s = r.iterator(); s.hasNext(); ) {
    var o = s.next();
    e.extractPoints(o, t, n);
  }
  return n;
};
Zi.prototype.computeOffsetPoints = function(t, e, n, r) {
  var s = e.x - t.x, o = e.y - t.y, a = Math.sqrt(s * s + o * o), u = n * s / a, l = n * o / a, c = (e.x + t.x) / 2, h = (e.y + t.y) / 2;
  if (this._doLeft) {
    var f = new v(c - l, h + u);
    r.add(f);
  }
  if (this._doRight) {
    var g = new v(c + l, h - u);
    r.add(g);
  }
};
Zi.prototype.interfaces_ = function() {
  return [];
};
Zi.prototype.getClass = function() {
  return Zi;
};
var Re = function i() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = i.TOLERANCE, this._testCoords = new N();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = i.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new _i(this._geom[0], this._boundaryDistanceTolerance), new _i(this._geom[1], this._boundaryDistanceTolerance), new _i(this._geom[2], this._boundaryDistanceTolerance)];
}, Ef = { TOLERANCE: { configurable: !0 } };
Re.prototype.reportResult = function(t, e, n) {
  zt.out.println("Overlay result invalid - A:" + x.toLocationSymbol(e[0]) + " B:" + x.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + x.toLocationSymbol(e[2]));
};
Re.prototype.isValid = function(t) {
  this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]);
  var e = this.checkValid(t);
  return e;
};
Re.prototype.checkValid = function() {
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
    return this._location[0] = this._locFinder[0].getLocation(o), this._location[1] = this._locFinder[1].getLocation(o), this._location[2] = this._locFinder[2].getLocation(o), Re.hasLocation(this._location, x.BOUNDARY) ? !0 : this.isValidResult(s, this._location);
  }
};
Re.prototype.addTestPts = function(t) {
  var e = new Zi(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
Re.prototype.isValidResult = function(t, e) {
  var n = q.isResultOfOp(e[0], e[1], t), r = e[2] === x.INTERIOR, s = !(n ^ r);
  return s || this.reportResult(t, e, n), s;
};
Re.prototype.getInvalidLocation = function() {
  return this._invalidLocation;
};
Re.prototype.interfaces_ = function() {
  return [];
};
Re.prototype.getClass = function() {
  return Re;
};
Re.hasLocation = function(t, e) {
  for (var n = 0; n < 3; n++)
    if (t[n] === e)
      return !0;
  return !1;
};
Re.computeBoundaryDistanceTolerance = function(t, e) {
  return Math.min(Et.computeSizeBasedSnapTolerance(t), Et.computeSizeBasedSnapTolerance(e));
};
Re.isValid = function(t, e, n, r) {
  var s = new Re(t, e, r);
  return s.isValid(n);
};
Ef.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(Re, Ef);
var ve = function i(t) {
  this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = i.extractFactory(t), this._inputGeoms = t;
};
ve.prototype.extractElements = function(t, e) {
  var n = this;
  if (t === null)
    return null;
  for (var r = 0; r < t.getNumGeometries(); r++) {
    var s = t.getGeometryN(r);
    n._skipEmpty && s.isEmpty() || e.add(s);
  }
};
ve.prototype.combine = function() {
  for (var t = this, e = new N(), n = this._inputGeoms.iterator(); n.hasNext(); ) {
    var r = n.next();
    t.extractElements(r, e);
  }
  return e.size() === 0 ? this._geomFactory !== null ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(e);
};
ve.prototype.interfaces_ = function() {
  return [];
};
ve.prototype.getClass = function() {
  return ve;
};
ve.combine = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new ve(t);
    return e.combine();
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = new ve(ve.createList(n, r));
    return s.combine();
  } else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2], l = new ve(ve.createList(o, a, u));
    return l.combine();
  }
};
ve.extractFactory = function(t) {
  return t.isEmpty() ? null : t.iterator().next().getFactory();
};
ve.createList = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new N();
    return n.add(t), n.add(e), n;
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = new N();
    return a.add(r), a.add(s), a.add(o), a;
  }
};
var Rt = function() {
  this._inputPolys = null, this._geomFactory = null;
  var t = arguments[0];
  this._inputPolys = t, this._inputPolys === null && (this._inputPolys = new N());
}, xf = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
Rt.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new N(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = null;
    X(s, Xe) ? o = e.unionTree(s) : s instanceof V && (o = s), n.add(o);
  }
  return n;
};
Rt.prototype.extractByEnvelope = function(t, e, n) {
  for (var r = new N(), s = 0; s < e.getNumGeometries(); s++) {
    var o = e.getGeometryN(s);
    o.getEnvelopeInternal().intersects(t) ? r.add(o) : n.add(o);
  }
  return this._geomFactory.buildGeometry(r);
};
Rt.prototype.unionOptimized = function(t, e) {
  var n = t.getEnvelopeInternal(), r = e.getEnvelopeInternal();
  if (!n.intersects(r)) {
    var s = ve.combine(t, e);
    return s;
  }
  if (t.getNumGeometries() <= 1 && e.getNumGeometries() <= 1)
    return this.unionActual(t, e);
  var o = n.intersection(r);
  return this.unionUsingEnvelopeIntersection(t, e, o);
};
Rt.prototype.union = function() {
  if (this._inputPolys === null)
    throw new Error("union() method cannot be called twice");
  if (this._inputPolys.isEmpty())
    return null;
  this._geomFactory = this._inputPolys.iterator().next().getFactory();
  for (var t = new of(Rt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
    var n = e.next();
    t.insert(n.getEnvelopeInternal(), n);
  }
  this._inputPolys = null;
  var r = t.itemsTree(), s = this.unionTree(r);
  return s;
};
Rt.prototype.binaryUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.binaryUnion(t, 0, t.size());
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2];
    if (r - n <= 1) {
      var s = Rt.getGeometry(e, n);
      return this.unionSafe(s, null);
    } else {
      if (r - n === 2)
        return this.unionSafe(Rt.getGeometry(e, n), Rt.getGeometry(e, n + 1));
      var o = Math.trunc((r + n) / 2), a = this.binaryUnion(e, n, o), u = this.binaryUnion(e, o, r);
      return this.unionSafe(a, u);
    }
  }
};
Rt.prototype.repeatedUnion = function(t) {
  for (var e = null, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e === null ? e = r.copy() : e = e.union(r);
  }
  return e;
};
Rt.prototype.unionSafe = function(t, e) {
  return t === null && e === null ? null : t === null ? e.copy() : e === null ? t.copy() : this.unionOptimized(t, e);
};
Rt.prototype.unionActual = function(t, e) {
  return Rt.restrictToPolygons(t.union(e));
};
Rt.prototype.unionTree = function(t) {
  var e = this.reduceToGeometries(t), n = this.binaryUnion(e);
  return n;
};
Rt.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
  var r = new N(), s = this.extractByEnvelope(n, t, r), o = this.extractByEnvelope(n, e, r), a = this.unionActual(s, o);
  r.add(a);
  var u = ve.combine(r);
  return u;
};
Rt.prototype.bufferUnion = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.get(0).getFactory(), n = e.buildGeometry(t), r = n.buffer(0);
    return r;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1], a = s.getFactory(), u = a.createGeometryCollection([s, o]), l = u.buffer(0);
    return l;
  }
};
Rt.prototype.interfaces_ = function() {
  return [];
};
Rt.prototype.getClass = function() {
  return Rt;
};
Rt.restrictToPolygons = function(t) {
  if (X(t, mi))
    return t;
  var e = Qn.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(K.toPolygonArray(e));
};
Rt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
Rt.union = function(t) {
  var e = new Rt(t);
  return e.union();
};
xf.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(Rt, xf);
var ra = function() {
};
ra.prototype.interfaces_ = function() {
  return [];
};
ra.prototype.getClass = function() {
  return ra;
};
ra.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return q.createEmptyResult(q.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), se.overlayOp(t, e, q.UNION);
};
function Qi() {
  return new sa();
}
function sa() {
  this.reset();
}
sa.prototype = {
  constructor: sa,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(i) {
    vc(Do, i, this.t), vc(this, Do.s, this.s), this.s ? this.t += Do.t : this.s = Do.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Do = new sa();
function vc(i, t, e) {
  var n = i.s = t + e, r = n - t, s = n - r;
  i.t = t - s + (e - r);
}
var _t = 1e-6, ot = Math.PI, Zn = ot / 2, Ec = ot / 4, ri = ot * 2, bi = 180 / ot, nn = ot / 180, te = Math.abs, rm = Math.atan, ls = Math.atan2, Lt = Math.cos, Pt = Math.sin, ms = Math.sqrt;
function Cf(i) {
  return i > 1 ? 0 : i < -1 ? ot : Math.acos(i);
}
function Er(i) {
  return i > 1 ? Zn : i < -1 ? -Zn : Math.asin(i);
}
function Ts() {
}
function oa(i, t) {
  i && Cc.hasOwnProperty(i.type) && Cc[i.type](i, t);
}
var xc = {
  Feature: function(i, t) {
    oa(i.geometry, t);
  },
  FeatureCollection: function(i, t) {
    for (var e = i.features, n = -1, r = e.length; ++n < r; )
      oa(e[n].geometry, t);
  }
}, Cc = {
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
    pu(i.coordinates, t, 0);
  },
  MultiLineString: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      pu(e[n], t, 0);
  },
  Polygon: function(i, t) {
    Ic(i.coordinates, t);
  },
  MultiPolygon: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      Ic(e[n], t);
  },
  GeometryCollection: function(i, t) {
    for (var e = i.geometries, n = -1, r = e.length; ++n < r; )
      oa(e[n], t);
  }
};
function pu(i, t, e) {
  var n = -1, r = i.length - e, s;
  for (t.lineStart(); ++n < r; )
    s = i[n], t.point(s[0], s[1], s[2]);
  t.lineEnd();
}
function Ic(i, t) {
  var e = -1, n = i.length;
  for (t.polygonStart(); ++e < n; )
    pu(i[e], t, 1);
  t.polygonEnd();
}
function sm(i, t) {
  i && xc.hasOwnProperty(i.type) ? xc[i.type](i, t) : oa(i, t);
}
Qi();
Qi();
function du(i) {
  return [ls(i[1], i[0]), Er(i[2])];
}
function cs(i) {
  var t = i[0], e = i[1], n = Lt(e);
  return [n * Lt(t), n * Pt(t), Pt(e)];
}
function Ao(i, t) {
  return i[0] * t[0] + i[1] * t[1] + i[2] * t[2];
}
function aa(i, t) {
  return [i[1] * t[2] - i[2] * t[1], i[2] * t[0] - i[0] * t[2], i[0] * t[1] - i[1] * t[0]];
}
function Wa(i, t) {
  i[0] += t[0], i[1] += t[1], i[2] += t[2];
}
function Fo(i, t) {
  return [i[0] * t, i[1] * t, i[2] * t];
}
function _u(i) {
  var t = ms(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  i[0] /= t, i[1] /= t, i[2] /= t;
}
Qi();
function If(i, t) {
  function e(n, r) {
    return n = i(n, r), t(n[0], n[1]);
  }
  return i.invert && t.invert && (e.invert = function(n, r) {
    return n = t.invert(n, r), n && i.invert(n[0], n[1]);
  }), e;
}
function mu(i, t) {
  return [i > ot ? i - ri : i < -ot ? i + ri : i, t];
}
mu.invert = mu;
function om(i, t, e) {
  return (i %= ri) ? t || e ? If(Rc(i), wc(t, e)) : Rc(i) : t || e ? wc(t, e) : mu;
}
function Sc(i) {
  return function(t, e) {
    return t += i, [t > ot ? t - ri : t < -ot ? t + ri : t, e];
  };
}
function Rc(i) {
  var t = Sc(i);
  return t.invert = Sc(-i), t;
}
function wc(i, t) {
  var e = Lt(i), n = Pt(i), r = Lt(t), s = Pt(t);
  function o(a, u) {
    var l = Lt(u), c = Lt(a) * l, h = Pt(a) * l, f = Pt(u), g = f * e + c * n;
    return [
      ls(h * r - g * s, c * e - f * n),
      Er(g * r + h * s)
    ];
  }
  return o.invert = function(a, u) {
    var l = Lt(u), c = Lt(a) * l, h = Pt(a) * l, f = Pt(u), g = f * r - h * s;
    return [
      ls(h * r + f * s, c * e + g * n),
      Er(g * e - c * n)
    ];
  }, o;
}
function am(i, t, e, n, r, s) {
  if (e) {
    var o = Lt(t), a = Pt(t), u = n * e;
    r == null ? (r = t + n * ri, s = t - u / 2) : (r = Nc(o, r), s = Nc(o, s), (n > 0 ? r < s : r > s) && (r += n * ri));
    for (var l, c = r; n > 0 ? c > s : c < s; c -= u)
      l = du([o, -a * Lt(c), -a * Pt(c)]), i.point(l[0], l[1]);
  }
}
function Nc(i, t) {
  t = cs(t), t[0] -= i, _u(t);
  var e = Cf(-t[1]);
  return ((-t[2] < 0 ? -e : e) + ri - _t) % ri;
}
function Sf() {
  var i = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      i.push(t = []);
    },
    lineEnd: Ts,
    rejoin: function() {
      i.length > 1 && i.push(i.pop().concat(i.shift()));
    },
    result: function() {
      var e = i;
      return i = [], t = null, e;
    }
  };
}
function um(i, t, e, n, r, s) {
  var o = i[0], a = i[1], u = t[0], l = t[1], c = 0, h = 1, f = u - o, g = l - a, p;
  if (p = e - o, !(!f && p > 0)) {
    if (p /= f, f < 0) {
      if (p < c)
        return;
      p < h && (h = p);
    } else if (f > 0) {
      if (p > h)
        return;
      p > c && (c = p);
    }
    if (p = r - o, !(!f && p < 0)) {
      if (p /= f, f < 0) {
        if (p > h)
          return;
        p > c && (c = p);
      } else if (f > 0) {
        if (p < c)
          return;
        p < h && (h = p);
      }
      if (p = n - a, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < c)
            return;
          p < h && (h = p);
        } else if (g > 0) {
          if (p > h)
            return;
          p > c && (c = p);
        }
        if (p = s - a, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > h)
              return;
            p > c && (c = p);
          } else if (g > 0) {
            if (p < c)
              return;
            p < h && (h = p);
          }
          return c > 0 && (i[0] = o + c * f, i[1] = a + c * g), h < 1 && (t[0] = o + h * f, t[1] = a + h * g), !0;
        }
      }
    }
  }
}
function Bo(i, t) {
  return te(i[0] - t[0]) < _t && te(i[1] - t[1]) < _t;
}
function ko(i, t, e, n) {
  this.x = i, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function Rf(i, t, e, n, r) {
  var s = [], o = [], a, u;
  if (i.forEach(function(p) {
    if (!((d = p.length - 1) <= 0)) {
      var d, _ = p[0], m = p[d], y;
      if (Bo(_, m)) {
        for (r.lineStart(), a = 0; a < d; ++a)
          r.point((_ = p[a])[0], _[1]);
        r.lineEnd();
        return;
      }
      s.push(y = new ko(_, p, null, !0)), o.push(y.o = new ko(_, null, y, !1)), s.push(y = new ko(m, p, null, !1)), o.push(y.o = new ko(m, null, y, !0));
    }
  }), !!s.length) {
    for (o.sort(t), Lc(s), Lc(o), a = 0, u = o.length; a < u; ++a)
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
function Lc(i) {
  if (t = i.length) {
    for (var t, e = 0, n = i[0], r; ++e < t; )
      n.n = r = i[e], r.p = n, n = r;
    n.n = r = i[0], r.p = n;
  }
}
function wf(i, t) {
  return i < t ? -1 : i > t ? 1 : i >= t ? 0 : NaN;
}
function lm(i) {
  return i.length === 1 && (i = cm(i)), {
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
function cm(i) {
  return function(t, e) {
    return wf(i(t), e);
  };
}
lm(wf);
function Nf(i) {
  for (var t = i.length, e, n = -1, r = 0, s, o; ++n < t; )
    r += i[n].length;
  for (s = new Array(r); --t >= 0; )
    for (o = i[t], e = o.length; --e >= 0; )
      s[--r] = o[e];
  return s;
}
var Os = 1e9, Go = -Os;
function hm(i, t, e, n) {
  function r(l, c) {
    return i <= l && l <= e && t <= c && c <= n;
  }
  function s(l, c, h, f) {
    var g = 0, p = 0;
    if (l == null || (g = o(l, h)) !== (p = o(c, h)) || u(l, c) < 0 ^ h > 0)
      do
        f.point(g === 0 || g === 3 ? i : e, g > 1 ? n : t);
      while ((g = (g + h + 4) % 4) !== p);
    else
      f.point(c[0], c[1]);
  }
  function o(l, c) {
    return te(l[0] - i) < _t ? c > 0 ? 0 : 3 : te(l[0] - e) < _t ? c > 0 ? 2 : 1 : te(l[1] - t) < _t ? c > 0 ? 1 : 0 : c > 0 ? 3 : 2;
  }
  function a(l, c) {
    return u(l.x, c.x);
  }
  function u(l, c) {
    var h = o(l, 1), f = o(c, 1);
    return h !== f ? h - f : h === 0 ? c[1] - l[1] : h === 1 ? l[0] - c[0] : h === 2 ? l[1] - c[1] : c[0] - l[0];
  }
  return function(l) {
    var c = l, h = Sf(), f, g, p, d, _, m, y, E, I, S, w, b = {
      point: L,
      lineStart: Y,
      lineEnd: U,
      polygonStart: G,
      polygonEnd: B
    };
    function L(O, k) {
      r(O, k) && c.point(O, k);
    }
    function P() {
      for (var O = 0, k = 0, z = g.length; k < z; ++k)
        for (var Z = g[k], at = 1, It = Z.length, Ft = Z[0], D, Qe, me = Ft[0], ke = Ft[1]; at < It; ++at)
          D = me, Qe = ke, Ft = Z[at], me = Ft[0], ke = Ft[1], Qe <= n ? ke > n && (me - D) * (n - Qe) > (ke - Qe) * (i - D) && ++O : ke <= n && (me - D) * (n - Qe) < (ke - Qe) * (i - D) && --O;
      return O;
    }
    function G() {
      c = h, f = [], g = [], w = !0;
    }
    function B() {
      var O = P(), k = w && O, z = (f = Nf(f)).length;
      (k || z) && (l.polygonStart(), k && (l.lineStart(), s(null, null, 1, l), l.lineEnd()), z && Rf(f, a, O, s, l), l.polygonEnd()), c = l, f = g = p = null;
    }
    function Y() {
      b.point = T, g && g.push(p = []), S = !0, I = !1, y = E = NaN;
    }
    function U() {
      f && (T(d, _), m && I && h.rejoin(), f.push(h.result())), b.point = L, I && c.lineEnd();
    }
    function T(O, k) {
      var z = r(O, k);
      if (g && p.push([O, k]), S)
        d = O, _ = k, m = z, S = !1, z && (c.lineStart(), c.point(O, k));
      else if (z && I)
        c.point(O, k);
      else {
        var Z = [y = Math.max(Go, Math.min(Os, y)), E = Math.max(Go, Math.min(Os, E))], at = [O = Math.max(Go, Math.min(Os, O)), k = Math.max(Go, Math.min(Os, k))];
        um(Z, at, i, t, e, n) ? (I || (c.lineStart(), c.point(Z[0], Z[1])), c.point(at[0], at[1]), z || c.lineEnd(), w = !1) : z && (c.lineStart(), c.point(O, k), w = !1);
      }
      y = O, E = k, I = z;
    }
    return b;
  };
}
var qa = Qi();
function fm(i, t) {
  var e = t[0], n = t[1], r = [Pt(e), -Lt(e), 0], s = 0, o = 0;
  qa.reset();
  for (var a = 0, u = i.length; a < u; ++a)
    if (c = (l = i[a]).length)
      for (var l, c, h = l[c - 1], f = h[0], g = h[1] / 2 + Ec, p = Pt(g), d = Lt(g), _ = 0; _ < c; ++_, f = y, p = I, d = S, h = m) {
        var m = l[_], y = m[0], E = m[1] / 2 + Ec, I = Pt(E), S = Lt(E), w = y - f, b = w >= 0 ? 1 : -1, L = b * w, P = L > ot, G = p * I;
        if (qa.add(ls(G * b * Pt(L), d * S + G * Lt(L))), s += P ? w + b * ri : w, P ^ f >= e ^ y >= e) {
          var B = aa(cs(h), cs(m));
          _u(B);
          var Y = aa(r, B);
          _u(Y);
          var U = (P ^ w >= 0 ? -1 : 1) * Er(Y[2]);
          (n > U || n === U && (B[0] || B[1])) && (o += P ^ w >= 0 ? 1 : -1);
        }
      }
  return (s < -_t || s < _t && qa < -_t) ^ o & 1;
}
Qi();
function Pc(i) {
  return i;
}
Qi();
Qi();
var hs = 1 / 0, ua = hs, ao = -hs, la = ao, Tc = {
  point: gm,
  lineStart: Ts,
  lineEnd: Ts,
  polygonStart: Ts,
  polygonEnd: Ts,
  result: function() {
    var i = [[hs, ua], [ao, la]];
    return ao = la = -(ua = hs = 1 / 0), i;
  }
};
function gm(i, t) {
  i < hs && (hs = i), i > ao && (ao = i), t < ua && (ua = t), t > la && (la = t);
}
Qi();
function Lf(i, t, e, n) {
  return function(r, s) {
    var o = t(s), a = r.invert(n[0], n[1]), u = Sf(), l = t(u), c = !1, h, f, g, p = {
      point: d,
      lineStart: m,
      lineEnd: y,
      polygonStart: function() {
        p.point = E, p.lineStart = I, p.lineEnd = S, f = [], h = [];
      },
      polygonEnd: function() {
        p.point = d, p.lineStart = m, p.lineEnd = y, f = Nf(f);
        var w = fm(h, a);
        f.length ? (c || (s.polygonStart(), c = !0), Rf(f, dm, w, e, s)) : w && (c || (s.polygonStart(), c = !0), s.lineStart(), e(null, null, 1, s), s.lineEnd()), c && (s.polygonEnd(), c = !1), f = h = null;
      },
      sphere: function() {
        s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd();
      }
    };
    function d(w, b) {
      var L = r(w, b);
      i(w = L[0], b = L[1]) && s.point(w, b);
    }
    function _(w, b) {
      var L = r(w, b);
      o.point(L[0], L[1]);
    }
    function m() {
      p.point = _, o.lineStart();
    }
    function y() {
      p.point = d, o.lineEnd();
    }
    function E(w, b) {
      g.push([w, b]);
      var L = r(w, b);
      l.point(L[0], L[1]);
    }
    function I() {
      l.lineStart(), g = [];
    }
    function S() {
      E(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), b = u.result(), L, P = b.length, G, B, Y;
      if (g.pop(), h.push(g), g = null, !!P) {
        if (w & 1) {
          if (B = b[0], (G = B.length - 1) > 0) {
            for (c || (s.polygonStart(), c = !0), s.lineStart(), L = 0; L < G; ++L)
              s.point((Y = B[L])[0], Y[1]);
            s.lineEnd();
          }
          return;
        }
        P > 1 && w & 2 && b.push(b.pop().concat(b.shift())), f.push(b.filter(pm));
      }
    }
    return p;
  };
}
function pm(i) {
  return i.length > 1;
}
function dm(i, t) {
  return ((i = i.x)[0] < 0 ? i[1] - Zn - _t : Zn - i[1]) - ((t = t.x)[0] < 0 ? t[1] - Zn - _t : Zn - t[1]);
}
const Oc = Lf(
  function() {
    return !0;
  },
  _m,
  ym,
  [-ot, -Zn]
);
function _m(i) {
  var t = NaN, e = NaN, n = NaN, r;
  return {
    lineStart: function() {
      i.lineStart(), r = 1;
    },
    point: function(s, o) {
      var a = s > 0 ? ot : -ot, u = te(s - t);
      te(u - ot) < _t ? (i.point(t, e = (e + o) / 2 > 0 ? Zn : -Zn), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), i.point(s, e), r = 0) : n !== a && u >= ot && (te(t - n) < _t && (t -= n * _t), te(s - a) < _t && (s -= a * _t), e = mm(t, e, s, o), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), r = 0), i.point(t = s, e = o), n = a;
    },
    lineEnd: function() {
      i.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - r;
    }
  };
}
function mm(i, t, e, n) {
  var r, s, o = Pt(i - e);
  return te(o) > _t ? rm((Pt(t) * (s = Lt(n)) * Pt(e) - Pt(n) * (r = Lt(t)) * Pt(i)) / (r * s * o)) : (t + n) / 2;
}
function ym(i, t, e, n) {
  var r;
  if (i == null)
    r = e * Zn, n.point(-ot, r), n.point(0, r), n.point(ot, r), n.point(ot, 0), n.point(ot, -r), n.point(0, -r), n.point(-ot, -r), n.point(-ot, 0), n.point(-ot, r);
  else if (te(i[0] - t[0]) > _t) {
    var s = i[0] < t[0] ? ot : -ot;
    r = e * s / 2, n.point(-s, r), n.point(0, r), n.point(s, r);
  } else
    n.point(t[0], t[1]);
}
function vm(i, t) {
  var e = Lt(i), n = e > 0, r = te(e) > _t;
  function s(c, h, f, g) {
    am(g, i, t, f, c, h);
  }
  function o(c, h) {
    return Lt(c) * Lt(h) > e;
  }
  function a(c) {
    var h, f, g, p, d;
    return {
      lineStart: function() {
        p = g = !1, d = 1;
      },
      point: function(_, m) {
        var y = [_, m], E, I = o(_, m), S = n ? I ? 0 : l(_, m) : I ? l(_ + (_ < 0 ? ot : -ot), m) : 0;
        if (!h && (p = g = I) && c.lineStart(), I !== g && (E = u(h, y), (!E || Bo(h, E) || Bo(y, E)) && (y[0] += _t, y[1] += _t, I = o(y[0], y[1]))), I !== g)
          d = 0, I ? (c.lineStart(), E = u(y, h), c.point(E[0], E[1])) : (E = u(h, y), c.point(E[0], E[1]), c.lineEnd()), h = E;
        else if (r && h && n ^ I) {
          var w;
          !(S & f) && (w = u(y, h, !0)) && (d = 0, n ? (c.lineStart(), c.point(w[0][0], w[0][1]), c.point(w[1][0], w[1][1]), c.lineEnd()) : (c.point(w[1][0], w[1][1]), c.lineEnd(), c.lineStart(), c.point(w[0][0], w[0][1])));
        }
        I && (!h || !Bo(h, y)) && c.point(y[0], y[1]), h = y, g = I, f = S;
      },
      lineEnd: function() {
        g && c.lineEnd(), h = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return d | (p && g) << 1;
      }
    };
  }
  function u(c, h, f) {
    var g = cs(c), p = cs(h), d = [1, 0, 0], _ = aa(g, p), m = Ao(_, _), y = _[0], E = m - y * y;
    if (!E)
      return !f && c;
    var I = e * m / E, S = -e * y / E, w = aa(d, _), b = Fo(d, I), L = Fo(_, S);
    Wa(b, L);
    var P = w, G = Ao(b, P), B = Ao(P, P), Y = G * G - B * (Ao(b, b) - 1);
    if (!(Y < 0)) {
      var U = ms(Y), T = Fo(P, (-G - U) / B);
      if (Wa(T, b), T = du(T), !f)
        return T;
      var O = c[0], k = h[0], z = c[1], Z = h[1], at;
      k < O && (at = O, O = k, k = at);
      var It = k - O, Ft = te(It - ot) < _t, D = Ft || It < _t;
      if (!Ft && Z < z && (at = z, z = Z, Z = at), D ? Ft ? z + Z > 0 ^ T[1] < (te(T[0] - O) < _t ? z : Z) : z <= T[1] && T[1] <= Z : It > ot ^ (O <= T[0] && T[0] <= k)) {
        var Qe = Fo(P, (-G + U) / B);
        return Wa(Qe, b), [T, du(Qe)];
      }
    }
  }
  function l(c, h) {
    var f = n ? i : ot - i, g = 0;
    return c < -f ? g |= 1 : c > f && (g |= 2), h < -f ? g |= 4 : h > f && (g |= 8), g;
  }
  return Lf(o, a, s, n ? [0, -i] : [-ot, i - ot]);
}
function Pf(i) {
  return function(t) {
    var e = new yu();
    for (var n in i)
      e[n] = i[n];
    return e.stream = t, e;
  };
}
function yu() {
}
yu.prototype = {
  constructor: yu,
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
function Tf(i, t, e) {
  var n = t[1][0] - t[0][0], r = t[1][1] - t[0][1], s = i.clipExtent && i.clipExtent();
  i.scale(150).translate([0, 0]), s != null && i.clipExtent(null), sm(e, i.stream(Tc));
  var o = Tc.result(), a = Math.min(n / (o[1][0] - o[0][0]), r / (o[1][1] - o[0][1])), u = +t[0][0] + (n - a * (o[1][0] + o[0][0])) / 2, l = +t[0][1] + (r - a * (o[1][1] + o[0][1])) / 2;
  return s != null && i.clipExtent(s), i.scale(a * 150).translate([u, l]);
}
function Em(i, t, e) {
  return Tf(i, [[0, 0], t], e);
}
var bc = 16, xm = Lt(30 * nn);
function Mc(i, t) {
  return +t ? Im(i, t) : Cm(i);
}
function Cm(i) {
  return Pf({
    point: function(t, e) {
      t = i(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function Im(i, t) {
  function e(n, r, s, o, a, u, l, c, h, f, g, p, d, _) {
    var m = l - n, y = c - r, E = m * m + y * y;
    if (E > 4 * t && d--) {
      var I = o + f, S = a + g, w = u + p, b = ms(I * I + S * S + w * w), L = Er(w /= b), P = te(te(w) - 1) < _t || te(s - h) < _t ? (s + h) / 2 : ls(S, I), G = i(P, L), B = G[0], Y = G[1], U = B - n, T = Y - r, O = y * U - m * T;
      (O * O / E > t || te((m * U + y * T) / E - 0.5) > 0.3 || o * f + a * g + u * p < xm) && (e(n, r, s, o, a, u, B, Y, P, I /= b, S /= b, w, d, _), _.point(B, Y), e(B, Y, P, I, S, w, l, c, h, f, g, p, d, _));
    }
  }
  return function(n) {
    var r, s, o, a, u, l, c, h, f, g, p, d, _ = {
      point: m,
      lineStart: y,
      lineEnd: I,
      polygonStart: function() {
        n.polygonStart(), _.lineStart = S;
      },
      polygonEnd: function() {
        n.polygonEnd(), _.lineStart = y;
      }
    };
    function m(L, P) {
      L = i(L, P), n.point(L[0], L[1]);
    }
    function y() {
      h = NaN, _.point = E, n.lineStart();
    }
    function E(L, P) {
      var G = cs([L, P]), B = i(L, P);
      e(h, f, c, g, p, d, h = B[0], f = B[1], c = L, g = G[0], p = G[1], d = G[2], bc, n), n.point(h, f);
    }
    function I() {
      _.point = m, n.lineEnd();
    }
    function S() {
      y(), _.point = w, _.lineEnd = b;
    }
    function w(L, P) {
      E(r = L, P), s = h, o = f, a = g, u = p, l = d, _.point = E;
    }
    function b() {
      e(h, f, c, g, p, d, s, o, r, a, u, l, bc, n), _.lineEnd = I, I();
    }
    return _;
  };
}
var Sm = Pf({
  point: function(i, t) {
    this.stream.point(i * nn, t * nn);
  }
});
function Rm(i) {
  return wm(function() {
    return i;
  })();
}
function wm(i) {
  var t, e = 150, n = 480, r = 250, s, o, a = 0, u = 0, l = 0, c = 0, h = 0, f, g, p = null, d = Oc, _ = null, m, y, E, I = Pc, S = 0.5, w = Mc(B, S), b, L;
  function P(T) {
    return T = g(T[0] * nn, T[1] * nn), [T[0] * e + s, o - T[1] * e];
  }
  function G(T) {
    return T = g.invert((T[0] - s) / e, (o - T[1]) / e), T && [T[0] * bi, T[1] * bi];
  }
  function B(T, O) {
    return T = t(T, O), [T[0] * e + s, o - T[1] * e];
  }
  P.stream = function(T) {
    return b && L === T ? b : b = Sm(d(f, w(I(L = T))));
  }, P.clipAngle = function(T) {
    return arguments.length ? (d = +T ? vm(p = T * nn, 6 * nn) : (p = null, Oc), U()) : p * bi;
  }, P.clipExtent = function(T) {
    return arguments.length ? (I = T == null ? (_ = m = y = E = null, Pc) : hm(_ = +T[0][0], m = +T[0][1], y = +T[1][0], E = +T[1][1]), U()) : _ == null ? null : [[_, m], [y, E]];
  }, P.scale = function(T) {
    return arguments.length ? (e = +T, Y()) : e;
  }, P.translate = function(T) {
    return arguments.length ? (n = +T[0], r = +T[1], Y()) : [n, r];
  }, P.center = function(T) {
    return arguments.length ? (a = T[0] % 360 * nn, u = T[1] % 360 * nn, Y()) : [a * bi, u * bi];
  }, P.rotate = function(T) {
    return arguments.length ? (l = T[0] % 360 * nn, c = T[1] % 360 * nn, h = T.length > 2 ? T[2] % 360 * nn : 0, Y()) : [l * bi, c * bi, h * bi];
  }, P.precision = function(T) {
    return arguments.length ? (w = Mc(B, S = T * T), U()) : ms(S);
  }, P.fitExtent = function(T, O) {
    return Tf(P, T, O);
  }, P.fitSize = function(T, O) {
    return Em(P, T, O);
  };
  function Y() {
    g = If(f = om(l, c, h), t);
    var T = t(a, u);
    return s = n - T[0] * e, o = r + T[1] * e, U();
  }
  function U() {
    return b = L = null, P;
  }
  return function() {
    return t = i.apply(this, arguments), P.invert = t.invert && G, Y();
  };
}
function Of(i) {
  return function(t, e) {
    var n = Lt(t), r = Lt(e), s = i(n * r);
    return [
      s * r * Pt(t),
      s * Pt(e)
    ];
  };
}
function bf(i) {
  return function(t, e) {
    var n = ms(t * t + e * e), r = i(n), s = Pt(r), o = Lt(r);
    return [
      ls(t * s, n * o),
      Er(n && e * s / n)
    ];
  };
}
var Nm = Of(function(i) {
  return ms(2 / (1 + i));
});
Nm.invert = bf(function(i) {
  return 2 * Er(i / 2);
});
var Mf = Of(function(i) {
  return (i = Cf(i)) && i / Pt(i);
});
Mf.invert = bf(function(i) {
  return i;
});
function Lm() {
  return Rm(Mf).scale(79.4188).clipAngle(180 - 1e-3);
}
function Dc(i, t) {
  return [i, t];
}
Dc.invert = Dc;
function Pm(i, t, e) {
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
      return Hh(i, function(o) {
        var a = zo(o, t, n, r);
        a && s.push(a);
      }), hu(s);
    case "FeatureCollection":
      return pc(i, function(o) {
        var a = zo(o, t, n, r);
        a && pc(a, function(u) {
          u && s.push(u);
        });
      }), hu(s);
  }
  return zo(i, t, n, r);
}
function zo(i, t, e, n) {
  var r = i.properties || {}, s = i.type === "Feature" ? i.geometry : i;
  if (s.type === "GeometryCollection") {
    var o = [];
    return Hh(i, function(d) {
      var _ = zo(d, t, e, n);
      _ && o.push(_);
    }), hu(o);
  }
  var a = Tm(s), u = {
    type: s.type,
    coordinates: Af(s.coordinates, a)
  }, l = new el(), c = l.read(u), h = G_(B_(t, e), "meters"), f = Gt.bufferOp(c, h, n), g = new rf();
  if (f = g.write(f), !Df(f.coordinates)) {
    var p = {
      type: f.type,
      coordinates: Ff(f.coordinates, a)
    };
    return ma(p, r);
  }
}
function Df(i) {
  return Array.isArray(i[0]) ? Df(i[0]) : isNaN(i[0]);
}
function Af(i, t) {
  return typeof i[0] != "object" ? t(i) : i.map(function(e) {
    return Af(e, t);
  });
}
function Ff(i, t) {
  return typeof i[0] != "object" ? t.invert(i) : i.map(function(e) {
    return Ff(e, t);
  });
}
function Tm(i) {
  var t = z_(i).geometry.coordinates, e = [-t[0], -t[1]];
  return Lm().rotate(e).scale(ye);
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
function Om(i, t) {
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
var Ki = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return i;
  }()
);
function bm(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function Mi(i, t, e) {
  for (var n = new Ki(null, null), r = n, s = n; ; ) {
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
function Ha(i, t, e, n) {
  var r = new Ki(i, t);
  if (e === null)
    return r.left = r.right = null, r;
  e = Mi(i, e, n);
  var s = n(i, e.key);
  return s < 0 ? (r.left = e.left, r.right = e, e.left = null) : s >= 0 && (r.right = e.right, r.left = e, e.right = null), r;
}
function Ac(i, t, e) {
  var n = null, r = null;
  if (t) {
    t = Mi(i, t, e);
    var s = e(t.key, i);
    s === 0 ? (n = t.left, r = t.right) : s < 0 ? (r = t.right, t.right = null, n = t) : (n = t.left, t.left = null, r = t);
  }
  return { left: n, right: r };
}
function Mm(i, t, e) {
  return t === null ? i : (i === null || (t = Mi(i.key, t, e), t.left = i), t);
}
function vu(i, t, e, n, r) {
  if (i) {
    n("" + t + (e ? "└── " : "├── ") + r(i) + `
`);
    var s = t + (e ? "    " : "│   ");
    i.left && vu(i.left, s, !1, n, r), i.right && vu(i.right, s, !0, n, r);
  }
}
var cl = (
  /** @class */
  function() {
    function i(t) {
      t === void 0 && (t = bm), this._root = null, this._size = 0, this._comparator = t;
    }
    return i.prototype.insert = function(t, e) {
      return this._size++, this._root = Ha(t, e, this._root, this._comparator);
    }, i.prototype.add = function(t, e) {
      var n = new Ki(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, s = Mi(t, this._root, r), o = r(t, s.key);
      return o === 0 ? this._root = s : (o < 0 ? (n.left = s.left, n.right = s, s.left = null) : o > 0 && (n.right = s.right, n.left = s, s.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, i.prototype._remove = function(t, e, n) {
      var r;
      if (e === null)
        return null;
      e = Mi(t, e, n);
      var s = n(t, e.key);
      return s === 0 ? (e.left === null ? r = e.right : (r = Mi(t, e.left, n), r.right = e.right), this._size--, r) : e;
    }, i.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Mi(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
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
      return this._root && (this._root = Mi(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
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
      return Am(this._root);
    }, i.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var r = t.length, s = this._comparator;
      if (n && Cu(t, e, 0, r - 1, s), this._root === null)
        this._root = Eu(t, e, 0, r), this._size = r;
      else {
        var o = Fm(this.toList(), Dm(t, e), s);
        r = this._size + r, this._root = xu({ head: o }, 0, r);
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
      return vu(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, i.prototype.update = function(t, e, n) {
      var r = this._comparator, s = Ac(t, this._root, r), o = s.left, a = s.right;
      r(t, e) < 0 ? a = Ha(e, n, a, r) : o = Ha(e, n, o, r), this._root = Mm(o, a, r);
    }, i.prototype.split = function(t) {
      return Ac(t, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var t;
      return Om(this, function(e) {
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
function Eu(i, t, e, n) {
  var r = n - e;
  if (r > 0) {
    var s = e + Math.floor(r / 2), o = i[s], a = t[s], u = new Ki(o, a);
    return u.left = Eu(i, t, e, s), u.right = Eu(i, t, s + 1, n), u;
  }
  return null;
}
function Dm(i, t) {
  for (var e = new Ki(null, null), n = e, r = 0; r < i.length; r++)
    n = n.next = new Ki(i[r], t[r]);
  return n.next = null, e.next;
}
function Am(i) {
  for (var t = i, e = [], n = !1, r = new Ki(null, null), s = r; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = s = s.next = e.pop(), t = t.right) : n = !0;
  return s.next = null, r.next;
}
function xu(i, t, e) {
  var n = e - t;
  if (n > 0) {
    var r = t + Math.floor(n / 2), s = xu(i, t, r), o = i.head;
    return o.left = s, i.head = i.head.next, o.right = xu(i, r + 1, e), o;
  }
  return null;
}
function Fm(i, t, e) {
  for (var n = new Ki(null, null), r = n, s = i, o = t; s !== null && o !== null; )
    e(s.key, o.key) < 0 ? (r.next = s, s = s.next) : (r.next = o, o = o.next), r = r.next;
  return s !== null ? r.next = s : o !== null && (r.next = o), n.next;
}
function Cu(i, t, e, n, r) {
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
    Cu(i, t, e, a, r), Cu(i, t, a + 1, n, r);
  }
}
function In(i, t) {
  if (!(i instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Fc(i, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
  }
}
function we(i, t, e) {
  return t && Fc(i.prototype, t), e && Fc(i, e), i;
}
var ws = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Iu = function(t, e) {
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
}, Fi = Number.EPSILON;
Fi === void 0 && (Fi = Math.pow(2, -52));
var km = Fi * Fi, Su = function(t, e) {
  if (-Fi < t && t < Fi && -Fi < e && e < Fi)
    return 0;
  var n = t - e;
  return n * n < km * t * e ? 0 : t < e ? -1 : 1;
}, Gm = /* @__PURE__ */ function() {
  function i() {
    In(this, i), this.reset();
  }
  return we(i, [{
    key: "reset",
    value: function() {
      this.xRounder = new kc(), this.yRounder = new kc();
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
}(), kc = /* @__PURE__ */ function() {
  function i() {
    In(this, i), this.tree = new cl(), this.round(0);
  }
  return we(i, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), r = this.tree.prev(n);
      if (r !== null && Su(n.key, r.key) === 0)
        return this.tree.remove(e), r.key;
      var s = this.tree.next(n);
      return s !== null && Su(n.key, s.key) === 0 ? (this.tree.remove(e), s.key) : e;
    }
  }]), i;
}(), uo = new Gm(), Ms = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, kf = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, Gc = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, o = Ms(r, s);
  return Su(o, 0);
}, ca = function(t) {
  return Math.sqrt(kf(t, t));
}, Bm = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Ms(s, r) / ca(s) / ca(r);
}, zm = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return kf(s, r) / ca(s) / ca(r);
}, Bc = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, zc = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, Vm = function(t, e, n, r) {
  if (e.x === 0)
    return zc(n, r, t.x);
  if (r.x === 0)
    return zc(t, e, n.x);
  if (e.y === 0)
    return Bc(n, r, t.y);
  if (r.y === 0)
    return Bc(t, e, n.y);
  var s = Ms(e, r);
  if (s == 0)
    return null;
  var o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = Ms(o, e) / s, u = Ms(o, r) / s, l = t.x + u * e.x, c = n.x + a * r.x, h = t.y + u * e.y, f = n.y + a * r.y, g = (l + c) / 2, p = (h + f) / 2;
  return {
    x: g,
    y: p
  };
}, qn = /* @__PURE__ */ function() {
  we(i, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var r = i.comparePoints(e.point, n.point);
      return r !== 0 ? r : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : ha.compare(e.segment, n.segment));
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
    In(this, i), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
  }
  return we(i, [{
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
          sine: Bm(n.point, e.point, u.point),
          cosine: zm(n.point, e.point, u.point)
        });
      };
      return function(o, a) {
        r.has(o) || s(o), r.has(a) || s(a);
        var u = r.get(o), l = u.sine, c = u.cosine, h = r.get(a), f = h.sine, g = h.cosine;
        return l >= 0 && f >= 0 ? c < g ? 1 : c > g ? -1 : 0 : l < 0 && f < 0 ? c < g ? -1 : c > g ? 1 : 0 : f < l ? -1 : f > l ? 1 : 0;
      };
    }
  }]), i;
}(), Xm = 0, ha = /* @__PURE__ */ function() {
  we(i, null, [{
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
        var p = n.comparePoint(e.leftSE.point);
        if (p !== 0)
          return p;
        var d = e.comparePoint(n.rightSE.point);
        return d < 0 ? 1 : d > 0 ? -1 : 1;
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
        var y = c - u, E = o - r, I = h - l, S = a - s;
        if (y > E && I < S)
          return 1;
        if (y < E && I > S)
          return -1;
      }
      return o > a ? 1 : o < a || c < h ? -1 : c > h ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function i(t, e, n, r) {
    In(this, i), this.id = ++Xm, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
  }
  return we(i, [{
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
      var n = this.bbox(), r = e.bbox(), s = Iu(n, r);
      if (s === null)
        return null;
      var o = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, c = ws(n, u) && this.comparePoint(u) === 0, h = ws(r, o) && e.comparePoint(o) === 0, f = ws(n, l) && this.comparePoint(l) === 0, g = ws(r, a) && e.comparePoint(a) === 0;
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
      var p = Vm(o, this.vector(), u, e.vector());
      return p === null || !ws(s, p) ? null : uo.round(p.x, p.y);
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
      var n = [], r = e.events !== void 0, s = new qn(e, !0), o = new qn(e, !1), a = this.rightSE;
      this.replaceRightSE(o), n.push(o), n.push(s);
      var u = new i(s, a, this.rings.slice(), this.windings.slice());
      return qn.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), qn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), r && (s.checkForConsuming(), o.checkForConsuming()), n;
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
      for (var h = [], f = [], g = 0, p = n.length; g < p; g++)
        if (r[g] !== 0) {
          var d = n[g], _ = d.poly;
          if (f.indexOf(_) === -1)
            if (d.isExterior)
              h.push(_);
            else {
              f.indexOf(_) === -1 && f.push(_);
              var m = h.indexOf(d.poly);
              m !== -1 && h.splice(m, 1);
            }
        }
      for (var y = 0, E = h.length; y < E; y++) {
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
      switch (Ln.type) {
        case "union": {
          var r = e.length === 0, s = n.length === 0;
          this._isInResult = r !== s;
          break;
        }
        case "intersection": {
          var o, a;
          e.length < n.length ? (o = e.length, a = n.length) : (o = n.length, a = e.length), this._isInResult = a === Ln.numMultiPolys && o < a;
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
          throw new Error("Unrecognized operation type found ".concat(Ln.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, r) {
      var s, o, a, u = qn.comparePoints(e, n);
      if (u < 0)
        s = e, o = n, a = 1;
      else if (u > 0)
        s = n, o = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new qn(s, !0), c = new qn(o, !1);
      return new i(l, c, [r], [a]);
    }
  }]), i;
}(), Vc = /* @__PURE__ */ function() {
  function i(t, e, n) {
    if (In(this, i), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var r = uo.round(t[0][0], t[0][1]);
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
      var u = uo.round(t[o][0], t[o][1]);
      u.x === s.x && u.y === s.y || (this.segments.push(ha.fromRing(s, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), s = u);
    }
    (r.x !== s.x || r.y !== s.y) && this.segments.push(ha.fromRing(s, r, this));
  }
  return we(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, r = this.segments.length; n < r; n++) {
        var s = this.segments[n];
        e.push(s.leftSE), e.push(s.rightSE);
      }
      return e;
    }
  }]), i;
}(), Ym = /* @__PURE__ */ function() {
  function i(t, e) {
    if (In(this, i), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new Vc(t[0], this, !0), this.bbox = {
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
      var s = new Vc(t[n], this, !1);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.interiorRings.push(s);
    }
    this.multiPoly = e;
  }
  return we(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = this.exteriorRing.getSweepEvents(), n = 0, r = this.interiorRings.length; n < r; n++)
        for (var s = this.interiorRings[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), i;
}(), Xc = /* @__PURE__ */ function() {
  function i(t, e) {
    if (In(this, i), !Array.isArray(t))
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
      var s = new Ym(t[n], this);
      s.bbox.ll.x < this.bbox.ll.x && (this.bbox.ll.x = s.bbox.ll.x), s.bbox.ll.y < this.bbox.ll.y && (this.bbox.ll.y = s.bbox.ll.y), s.bbox.ur.x > this.bbox.ur.x && (this.bbox.ur.x = s.bbox.ur.x), s.bbox.ur.y > this.bbox.ur.y && (this.bbox.ur.y = s.bbox.ur.y), this.polys.push(s);
    }
    this.isSubject = e;
  }
  return we(i, [{
    key: "getSweepEvents",
    value: function() {
      for (var e = [], n = 0, r = this.polys.length; n < r; n++)
        for (var s = this.polys[n].getSweepEvents(), o = 0, a = s.length; o < a; o++)
          e.push(s[o]);
      return e;
    }
  }]), i;
}(), Um = /* @__PURE__ */ function() {
  we(i, null, [{
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
                var p = c[0].point, d = c[c.length - 1].point;
                throw new Error("Unable to complete output ring starting at [".concat(p.x, ",") + " ".concat(p.y, "]. Last matching segment found ends at") + " [".concat(d.x, ", ").concat(d.y, "]."));
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
                var E = f.splice(_)[0], I = c.splice(E.index);
                I.unshift(I[0].otherSE), n.push(new i(I.reverse()));
                continue;
              }
              f.push({
                index: c.length,
                point: u.point
              });
              var S = u.getLeftmostComparator(a);
              l = g.sort(S)[0].otherSE;
              break;
            }
          n.push(new i(c));
        }
      }
      return n;
    }
  }]);
  function i(t) {
    In(this, i), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return we(i, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], r = 1, s = this.events.length - 1; r < s; r++) {
        var o = this.events[r].point, a = this.events[r + 1].point;
        Gc(o, e, a) !== 0 && (n.push(o), e = o);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      Gc(u, e, l) === 0 && n.shift(), n.push(n[0]);
      for (var c = this.isExteriorRing() ? 1 : -1, h = this.isExteriorRing() ? 0 : n.length - 1, f = this.isExteriorRing() ? n.length : -1, g = [], p = h; p != f; p += c)
        g.push([n[p].x, n[p].y]);
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
        qn.compare(e, s) > 0 && (e = s);
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
}(), Yc = /* @__PURE__ */ function() {
  function i(t) {
    In(this, i), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
  }
  return we(i, [{
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
}(), Wm = /* @__PURE__ */ function() {
  function i(t) {
    In(this, i), this.rings = t, this.polys = this._composePolys(t);
  }
  return we(i, [{
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
            n.push(new Yc(o));
          else {
            var a = o.enclosingRing();
            a.poly || n.push(new Yc(a)), a.poly.addInterior(o);
          }
      }
      return n;
    }
  }]), i;
}(), qm = /* @__PURE__ */ function() {
  function i(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ha.compare;
    In(this, i), this.queue = t, this.tree = new cl(e), this.segments = [];
  }
  return we(i, [{
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
            for (var f = this._splitSafely(u, h), g = 0, p = f.length; g < p; g++)
              r.push(f[g]);
        }
        var d = null;
        if (l) {
          var _ = l.getIntersection(n);
          if (_ !== null && (n.isAnEndpoint(_) || (d = _), !l.isAnEndpoint(_)))
            for (var m = this._splitSafely(l, _), y = 0, E = m.length; y < E; y++)
              r.push(m[y]);
        }
        if (c !== null || d !== null) {
          var I = null;
          if (c === null)
            I = d;
          else if (d === null)
            I = c;
          else {
            var S = qn.comparePoints(c, d);
            I = S <= 0 ? c : d;
          }
          this.queue.remove(n.rightSE), r.push(n.rightSE);
          for (var w = n.split(I), b = 0, L = w.length; b < L; b++)
            r.push(w[b]);
        }
        r.length > 0 ? (this.tree.remove(n), r.push(e)) : (this.segments.push(n), n.prev = u);
      } else {
        if (u && l) {
          var P = u.getIntersection(l);
          if (P !== null) {
            if (!u.isAnEndpoint(P))
              for (var G = this._splitSafely(u, P), B = 0, Y = G.length; B < Y; B++)
                r.push(G[B]);
            if (!l.isAnEndpoint(P))
              for (var U = this._splitSafely(l, P), T = 0, O = U.length; T < O; T++)
                r.push(U[T]);
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
}(), Uc = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, Hm = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, jm = /* @__PURE__ */ function() {
  function i() {
    In(this, i);
  }
  return we(i, [{
    key: "run",
    value: function(e, n, r) {
      Ln.type = e, uo.reset();
      for (var s = [new Xc(n, !0)], o = 0, a = r.length; o < a; o++)
        s.push(new Xc(r[o], !1));
      if (Ln.numMultiPolys = s.length, Ln.type === "difference")
        for (var u = s[0], l = 1; l < s.length; )
          Iu(s[l].bbox, u.bbox) !== null ? l++ : s.splice(l, 1);
      if (Ln.type === "intersection") {
        for (var c = 0, h = s.length; c < h; c++)
          for (var f = s[c], g = c + 1, p = s.length; g < p; g++)
            if (Iu(f.bbox, s[g].bbox) === null)
              return [];
      }
      for (var d = new cl(qn.compare), _ = 0, m = s.length; _ < m; _++)
        for (var y = s[_].getSweepEvents(), E = 0, I = y.length; E < I; E++)
          if (d.insert(y[E]), d.size > Uc)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var S = new qm(d), w = d.size, b = d.pop(); b; ) {
        var L = b.key;
        if (d.size === w) {
          var P = L.segment;
          throw new Error("Unable to pop() ".concat(L.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(L.point.x, ", ").concat(L.point.y, "] from segment #").concat(P.id, " ") + "[".concat(P.leftSE.point.x, ", ").concat(P.leftSE.point.y, "] -> ") + "[".concat(P.rightSE.point.x, ", ").concat(P.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (d.size > Uc)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (S.segments.length > Hm)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var G = S.process(L), B = 0, Y = G.length; B < Y; B++) {
          var U = G[B];
          U.consumedBy === void 0 && d.insert(U);
        }
        w = d.size, b = d.pop();
      }
      uo.reset();
      var T = Um.factory(S.segments), O = new Wm(T);
      return O.getGeom();
    }
  }]), i;
}(), Ln = new jm(), Zm = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Ln.run("union", t, n);
}, Km = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Ln.run("intersection", t, n);
}, Jm = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Ln.run("xor", t, n);
}, Qm = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Ln.run("difference", t, n);
}, $m = {
  union: Zm,
  intersection: Km,
  xor: Jm,
  difference: Qm
};
function Wc(i) {
  return i.type === "Feature" ? i.geometry : i;
}
function ty(i, t) {
  var e = Wc(i), n = Wc(t), r = i.properties || {}, s = $m.difference(
    e.coordinates,
    n.coordinates
  );
  return s.length === 0 ? null : s.length === 1 ? F_(s[0], r) : k_(s, r);
}
function qc(i) {
  let t;
  for (const e of i)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function Hc(i, t) {
  const e = ty(
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
  const n = Pm(i, 0);
  if (n.geometry.type === "Polygon")
    for (const r of n.geometry.coordinates)
      qc(r);
  else
    for (const r of n.geometry.coordinates)
      for (const s of r)
        qc(s);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
const jc = "EPSG:4326";
function ey(i) {
  var s;
  const t = i.getProperties(), { isMask: e } = t, n = (s = i.getGeometry()) == null ? void 0 : s.getType(), r = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new $o({
    stroke: e ? void 0 : new Ho({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: e ? new Bs({
      color: "#00000020"
    }) : void 0,
    image: new Hu({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new Gh({
      backgroundFill: new Bs({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new Ho({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function sy(i, t = {}, e = {}, n = ey) {
  let r = -1, s, o, a, u = !1;
  const l = new v_({
    updateWhileAnimating: !0
  });
  i.addLayer(l);
  const c = new N_({});
  l.setSource(c), l.setStyle(n), i.on("click", (g) => {
    i.forEachFeatureAtPixel(g.pixel, (p) => {
      const d = p.getId();
      if (d)
        return g.stopPropagation(), o == null || o({ type: "markerClick", id: d }), p;
    });
  }), i.on("pointermove", (g) => {
    const p = i.forEachFeatureAtPixel(g.pixel, (d) => d.getId());
    s !== p && (s && (o == null || o({
      type: "markerMouseLeave",
      id: s
    })), p && (o == null || o({
      type: "markerMouseEnter",
      id: p
    })), i.getTargetElement().style.cursor = p ? "pointer" : u ? "crosshair" : "", s = p);
  });
  function h(g) {
    return g.transform(jc, i.getView().getProjection());
  }
  const f = (g) => {
    o == null || o({
      type: "mapClick",
      coordinates: Ol(g.coordinate, i.getView().getProjection())
    });
  };
  return {
    setEventHandler(g) {
      g ? (o = g, i.on("click", f)) : (o = void 0, i.un("click", f));
    },
    flyTo(g, p) {
      i.getView().animate({
        center: Po(g, i.getView().getProjection()),
        zoom: p,
        duration: 2e3,
        ...t
      });
    },
    fitBounds(g, p, d) {
      i.getView().fit(rp(g, jc, i.getView().getProjection()), {
        padding: [p, p, p, p],
        maxZoom: d,
        duration: 2e3,
        ...e
      });
    },
    indicateReverse(g) {
      u = g, i.getTargetElement().style.cursor = g ? "crosshair" : "";
    },
    setReverseMarker(g) {
      a ? g ? a.getGeometry().setCoordinates(
        Po(g, i.getView().getProjection())
      ) : (c.removeFeature(a), a.dispose(), a = void 0) : g && (a = new li(
        new Vr(Po(g, i.getView().getProjection()))
      ), a.setProperties({ isReverse: !0 }), c.addFeature(a));
    },
    setMarkers(g, p) {
      function d(_) {
        var m;
        if (_)
          for (const y of _.features) {
            const E = y.geometry.type === "Polygon" ? new Wo(y.geometry.coordinates) : y.geometry.type === "MultiPolygon" ? new fc(y.geometry.coordinates) : null;
            E && c.addFeature(
              new li({
                isMask: !!((m = y.properties) != null && m.isMask),
                geometry: h(E)
              })
            );
          }
      }
      if (c.clear(), a && c.addFeature(a), d(), p) {
        let _ = !1;
        if (p.geometry.type === "GeometryCollection") {
          const m = p.geometry.geometries.map(
            (y) => y.type === "Polygon" ? new Wo(y.coordinates) : y.type === "MultiPolygon" ? new fc(y.coordinates) : null
          ).filter((y) => !!y);
          if (m.length > 0)
            c.addFeature(
              new li(h(new P_(m)))
            ), _ = !0;
          else
            for (const y of p.geometry.geometries)
              y.type === "LineString" ? (c.addFeature(
                new li(
                  h(new qo(y.coordinates))
                )
              ), _ = !0) : y.type === "MultiLineString" && c.addFeature(
                new li(
                  h(new hc(y.coordinates))
                )
              ), _ = !0;
        }
        if (!_) {
          if (p.geometry.type === "Polygon")
            Hc(p, d);
          else if (p.geometry.type === "MultiPolygon")
            Hc(p, d);
          else if (p.geometry.type === "LineString") {
            c.addFeature(
              new li(
                h(new qo(p.geometry.coordinates))
              )
            );
            return;
          } else if (p.geometry.type === "MultiLineString") {
            c.addFeature(
              new li(
                h(new hc(p.geometry.coordinates))
              )
            );
            return;
          }
        }
        c.addFeature(new li(h(new Vr(p.center))));
      }
      for (const _ of g ?? []) {
        if (_ === p)
          continue;
        const m = new li(
          new Vr(Po(_.center, i.getView().getProjection()))
        );
        m.setId(_.id), m.setProperties({
          fuzzy: !!_.matching_text,
          tooltip: _.place_name.replace(/,.*/, "")
        }), c.addFeature(m);
      }
    },
    setSelectedMarker(g) {
      var _, m, y;
      const p = c.getFeatures(), d = (_ = p[0]) != null && _.getProperties().isReverse ? 1 : 0;
      r > -1 && ((m = p[r + d]) == null || m.setProperties({
        isSelected: !1
      })), g > -1 && ((y = p[g + d]) == null || y.setProperties({
        isSelected: !0
      })), r = g;
    },
    getCenterAndZoom() {
      const g = i.getView(), p = g.getCenter(), d = g.getZoom();
      if (!(!p || d === void 0))
        return [d, ...Ol(p, g.getProjection())];
    }
  };
}
export {
  sy as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
