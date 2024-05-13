const Gf = {
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
class Wh extends Error {
  /**
   * @param {number} code Error code.
   */
  constructor(t) {
    const e = Gf[t];
    super(e), this.code = t, this.name = "AssertionError", this.message = e;
  }
}
class fo {
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
const qh = {
  /**
   * Triggered when a property is changed.
   * @event module:ol/Object.ObjectEvent#propertychange
   * @api
   */
  PROPERTYCHANGE: "propertychange"
};
class Bf {
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
function zf(i, t, e) {
  let n, r;
  e = e || Gs;
  let s = 0, o = i.length, a = !1;
  for (; s < o; )
    n = s + (o - s >> 1), r = +e(i[n], t), r < 0 ? s = n + 1 : (o = n, a = !r);
  return a ? s : ~s;
}
function Gs(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function Hh(i, t, e) {
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
function Vf(i, t, e) {
  for (; t < e; ) {
    const n = i[t];
    i[t] = i[e], i[e] = n, ++t, --e;
  }
}
function pi(i, t) {
  const e = Array.isArray(t) ? t : [t], n = e.length;
  for (let r = 0; r < n; r++)
    i[i.length] = e[r];
}
function ms(i, t) {
  const e = i.length;
  if (e !== t.length)
    return !1;
  for (let n = 0; n < e; n++)
    if (i[n] !== t[n])
      return !1;
  return !0;
}
function Xf() {
  return !0;
}
function Bs() {
}
function Yf(i) {
  let t = !1, e, n, r;
  return function() {
    const s = Array.prototype.slice.call(arguments);
    return (!t || this !== r || !ms(s, n)) && (t = !0, r = this, n = s, e = i.apply(this, arguments)), e;
  };
}
function Pu(i) {
  for (const t in i)
    delete i[t];
}
function zs(i) {
  let t;
  for (t in i)
    return !1;
  return !t;
}
class jh extends Bf {
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
    const s = e ? new fo(t) : (
      /** @type {Event} */
      t
    );
    s.target || (s.target = this.eventTarget_ || this);
    const o = this.dispatching_ || (this.dispatching_ = {}), a = this.pendingRemovals_ || (this.pendingRemovals_ = {});
    n in o || (o[n] = 0, a[n] = 0), ++o[n];
    let u;
    for (let l = 0, h = r.length; l < h; ++l)
      if ("handleEvent" in r[l] ? u = /** @type {import("../events.js").ListenerObject} */
      r[l].handleEvent(s) : u = /** @type {import("../events.js").ListenerFunction} */
      r[l].call(this, s), u === !1 || s.propagationStopped) {
        u = !1;
        break;
      }
    if (--o[n] === 0) {
      let l = a[n];
      for (delete a[n]; l--; )
        this.removeEventListener(n, Bs);
      delete o[n];
    }
    return u;
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.listeners_ && Pu(this.listeners_);
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
      r !== -1 && (this.pendingRemovals_ && t in this.pendingRemovals_ ? (n[r] = Bs, ++this.pendingRemovals_[t]) : (n.splice(r, 1), n.length === 0 && delete this.listeners_[t]));
    }
  }
}
const cn = {
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
function Qn(i, t, e, n, r) {
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
function Wo(i, t, e, n) {
  return Qn(i, t, e, n, !0);
}
function $n(i) {
  i && i.target && (i.target.removeEventListener(i.type, i.listener), Pu(i));
}
class go extends jh {
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
        r[s] = Qn(this, t[s], e);
      return r;
    }
    return Qn(
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
        n[s] = Wo(this, t[s], e);
    } else
      n = Wo(
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
      Uf(n);
    else if (Array.isArray(t))
      for (let r = 0, s = t.length; r < s; ++r)
        this.removeEventListener(t[r], e);
    else
      this.removeEventListener(t, e);
  }
}
go.prototype.on;
go.prototype.once;
go.prototype.un;
function Uf(i) {
  if (Array.isArray(i))
    for (let t = 0, e = i.length; t < e; ++t)
      $n(i[t]);
  else
    $n(
      /** @type {import("./events.js").EventsKey} */
      i
    );
}
function ft() {
  throw new Error("Unimplemented abstract method.");
}
let Wf = 0;
function Kt(i) {
  return i.ol_uid || (i.ol_uid = String(++Wf));
}
class xl extends fo {
  /**
   * @param {string} type The event type.
   * @param {string} key The property name.
   * @param {*} oldValue The old value for `key`.
   */
  constructor(t, e, n) {
    super(t), this.key = e, this.oldValue = n;
  }
}
class Rr extends go {
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
    n = `change:${t}`, this.hasListener(n) && this.dispatchEvent(new xl(n, t, e)), n = qh.PROPERTYCHANGE, this.hasListener(n) && this.dispatchEvent(new xl(n, t, e));
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
      delete this.values_[t], zs(this.values_) && (this.values_ = null), e || this.notify(t, n);
    }
  }
}
const zr = {
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
}, El = {
  LENGTH: "length"
};
class bo extends fo {
  /**
   * @param {import("./CollectionEventType.js").default} type Type.
   * @param {T} element Element.
   * @param {number} index The index of the added or removed element.
   */
  constructor(t, e, n) {
    super(t), this.element = e, this.index = n;
  }
}
let qf = class extends Rr {
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
    return this.get(El.LENGTH);
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
      new bo(zr.ADD, e, t)
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
      new bo(zr.REMOVE, e, t)
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
      new bo(zr.REMOVE, r, t)
    ), this.dispatchEvent(
      /** @type {CollectionEvent<T>} */
      new bo(zr.ADD, e, t)
    );
  }
  /**
   * @private
   */
  updateLength_() {
    this.set(El.LENGTH, this.array_.length);
  }
  /**
   * @private
   * @param {T} elem Element.
   * @param {number} [except] Optional index to ignore.
   */
  assertUnique_(t, e) {
    for (let n = 0, r = this.array_.length; n < r; ++n)
      if (this.array_[n] === t && n !== e)
        throw new Wh(58);
  }
};
function Ut(i, t) {
  if (!i)
    throw new Wh(t);
}
class Nn extends Rr {
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
      new Nn(this.hasProperties() ? this.getProperties() : null)
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
    this.geometryChangeKey_ && ($n(this.geometryChangeKey_), this.geometryChangeKey_ = null);
    const t = this.getGeometry();
    t && (this.geometryChangeKey_ = Qn(
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
    this.style_ = t, this.styleFunction_ = t ? Hf(t) : void 0, this.changed();
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
function Hf(i) {
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
const Xi = typeof navigator < "u" && typeof navigator.userAgent < "u" ? navigator.userAgent.toLowerCase() : "";
Xi.includes("firefox");
const jf = Xi.includes("safari") && !Xi.includes("chrom");
jf && (Xi.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(Xi));
Xi.includes("webkit") && Xi.includes("edge");
Xi.includes("macintosh");
const Tu = typeof WorkerGlobalScope < "u" && typeof OffscreenCanvas < "u" && self instanceof WorkerGlobalScope, Zf = typeof Image < "u" && Image.prototype.decode;
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
function Bi() {
  return [1, 0, 0, 1, 0, 0];
}
function Kf(i, t, e, n, r, s, o) {
  return i[0] = t, i[1] = e, i[2] = n, i[3] = r, i[4] = s, i[5] = o, i;
}
function Jf(i, t) {
  return i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5], i;
}
function Le(i, t) {
  const e = t[0], n = t[1];
  return t[0] = i[0] * e + i[2] * n + i[4], t[1] = i[1] * e + i[3] * n + i[5], t;
}
function Qf(i, t, e) {
  return Kf(i, t, 0, 0, e, 0, 0);
}
function po(i, t, e, n, r, s, o, a) {
  const u = Math.sin(s), l = Math.cos(s);
  return i[0] = n * l, i[1] = r * u, i[2] = -n * u, i[3] = r * l, i[4] = o * n * l - a * n * u + t, i[5] = o * r * u + a * r * l + e, i;
}
function $f(i, t) {
  const e = tg(t);
  Ut(e !== 0, 32);
  const n = t[0], r = t[1], s = t[2], o = t[3], a = t[4], u = t[5];
  return i[0] = o / e, i[1] = -r / e, i[2] = -s / e, i[3] = n / e, i[4] = (s * u - o * a) / e, i[5] = -(n * u - r * a) / e, i;
}
function tg(i) {
  return i[0] * i[3] - i[1] * i[2];
}
let Cl;
function eg(i) {
  const t = "matrix(" + i.join(", ") + ")";
  if (Tu)
    return t;
  const e = Cl || (Cl = document.createElement("div"));
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
function ng(i, t, e) {
  const n = Math.min.apply(null, i), r = Math.min.apply(null, t), s = Math.max.apply(null, i), o = Math.max.apply(null, t);
  return lr(n, r, s, o, e);
}
function bu(i, t, e) {
  return e ? (e[0] = i[0] - t, e[1] = i[1] - t, e[2] = i[2] + t, e[3] = i[3] + t, e) : [
    i[0] - t,
    i[1] - t,
    i[2] + t,
    i[3] + t
  ];
}
function ig(i, t) {
  return i.slice();
}
function wr(i, t, e) {
  let n, r;
  return t < i[0] ? n = i[0] - t : i[2] < t ? n = t - i[2] : n = 0, e < i[1] ? r = i[1] - e : i[3] < e ? r = e - i[3] : r = 0, n * n + r * r;
}
function rg(i, t) {
  return Ou(i, t[0], t[1]);
}
function Vr(i, t) {
  return i[0] <= t[0] && t[2] <= i[2] && i[1] <= t[1] && t[3] <= i[3];
}
function Ou(i, t, e) {
  return i[0] <= t && t <= i[2] && i[1] <= e && e <= i[3];
}
function $a(i, t) {
  const e = i[0], n = i[1], r = i[2], s = i[3], o = t[0], a = t[1];
  let u = Zt.UNKNOWN;
  return o < e ? u = u | Zt.LEFT : o > r && (u = u | Zt.RIGHT), a < n ? u = u | Zt.BELOW : a > s && (u = u | Zt.ABOVE), u === Zt.UNKNOWN && (u = Zt.INTERSECTING), u;
}
function ur() {
  return [1 / 0, 1 / 0, -1 / 0, -1 / 0];
}
function lr(i, t, e, n, r) {
  return r ? (r[0] = i, r[1] = t, r[2] = e, r[3] = n, r) : [i, t, e, n];
}
function pa(i) {
  return lr(1 / 0, 1 / 0, -1 / 0, -1 / 0, i);
}
function sg(i, t) {
  const e = i[0], n = i[1];
  return lr(e, n, e, n, t);
}
function Zh(i, t, e, n, r) {
  const s = pa(r);
  return Jh(s, i, t, e, n);
}
function Kh(i, t) {
  return i[0] == t[0] && i[2] == t[2] && i[1] == t[1] && i[3] == t[3];
}
function og(i, t) {
  return t[0] < i[0] && (i[0] = t[0]), t[2] > i[2] && (i[2] = t[2]), t[1] < i[1] && (i[1] = t[1]), t[3] > i[3] && (i[3] = t[3]), i;
}
function ag(i, t) {
  t[0] < i[0] && (i[0] = t[0]), t[0] > i[2] && (i[2] = t[0]), t[1] < i[1] && (i[1] = t[1]), t[1] > i[3] && (i[3] = t[1]);
}
function Jh(i, t, e, n, r) {
  for (; e < n; e += r)
    ug(i, t[e], t[e + 1]);
  return i;
}
function ug(i, t, e) {
  i[0] = Math.min(i[0], t), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t), i[3] = Math.max(i[3], e);
}
function lg(i, t) {
  let e;
  return e = t(Qh(i)), e || (e = t($h(i)), e) || (e = t(ec(i)), e) || (e = t(tc(i)), e) ? e : !1;
}
function Qh(i) {
  return [i[0], i[1]];
}
function $h(i) {
  return [i[2], i[1]];
}
function qr(i) {
  return [(i[0] + i[2]) / 2, (i[1] + i[3]) / 2];
}
function hg(i, t, e, n, r) {
  const [s, o, a, u, l, h, c, f] = cg(
    i,
    t,
    e,
    n
  );
  return lr(
    Math.min(s, a, l, c),
    Math.min(o, u, h, f),
    Math.max(s, a, l, c),
    Math.max(o, u, h, f),
    r
  );
}
function cg(i, t, e, n) {
  const r = t * n[0] / 2, s = t * n[1] / 2, o = Math.cos(e), a = Math.sin(e), u = r * o, l = r * a, h = s * o, c = s * a, f = i[0], g = i[1];
  return [
    f - u + c,
    g - l - h,
    f - u - c,
    g - l + h,
    f + u - c,
    g + l + h,
    f + u + c,
    g + l - h,
    f - u + c,
    g - l - h
  ];
}
function Vs(i) {
  return i[3] - i[1];
}
function tc(i) {
  return [i[0], i[3]];
}
function ec(i) {
  return [i[2], i[3]];
}
function un(i) {
  return i[2] - i[0];
}
function Pn(i, t) {
  return i[0] <= t[2] && i[2] >= t[0] && i[1] <= t[3] && i[3] >= t[1];
}
function Mu(i) {
  return i[2] < i[0] || i[3] < i[1];
}
function fg(i, t) {
  return t ? (t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t) : i;
}
function gg(i, t, e) {
  let n = !1;
  const r = $a(i, t), s = $a(i, e);
  if (r === Zt.INTERSECTING || s === Zt.INTERSECTING)
    n = !0;
  else {
    const o = i[0], a = i[1], u = i[2], l = i[3], h = t[0], c = t[1], f = e[0], g = e[1], p = (g - c) / (f - h);
    let d, _;
    s & Zt.ABOVE && !(r & Zt.ABOVE) && (d = f - (g - l) / p, n = d >= o && d <= u), !n && s & Zt.RIGHT && !(r & Zt.RIGHT) && (_ = g - (f - u) * p, n = _ >= a && _ <= l), !n && s & Zt.BELOW && !(r & Zt.BELOW) && (d = f - (g - a) / p, n = d >= o && d <= u), !n && s & Zt.LEFT && !(r & Zt.LEFT) && (_ = g - (f - o) * p, n = _ >= a && _ <= l);
  }
  return n;
}
function pg(i, t, e, n) {
  if (Mu(i))
    return pa(e);
  let r = [];
  r = [
    i[0],
    i[1],
    i[2],
    i[1],
    i[2],
    i[3],
    i[0],
    i[3]
  ], t(r, r, 2);
  const s = [], o = [];
  for (let a = 0, u = r.length; a < u; a += 2)
    s.push(r[a]), o.push(r[a + 1]);
  return ng(s, o, e);
}
function nc(i, t) {
  const e = t.getExtent(), n = qr(i);
  if (t.canWrapX() && (n[0] < e[0] || n[0] >= e[2])) {
    const r = un(e), o = Math.floor(
      (n[0] - e[0]) / r
    ) * r;
    i[0] -= o, i[2] -= o;
  }
  return i;
}
function dg(i, t) {
  if (t.canWrapX()) {
    const e = t.getExtent();
    if (!isFinite(i[0]) || !isFinite(i[2]))
      return [[e[0], i[1], e[2], i[3]]];
    nc(i, t);
    const n = un(e);
    if (un(i) > n)
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
const ic = {
  // use the radius of the Normal sphere
  radians: 6370997 / (2 * Math.PI),
  degrees: 2 * Math.PI * 6370997 / 360,
  ft: 0.3048,
  m: 1,
  "us-ft": 1200 / 3937
};
class rc {
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
    return this.metersPerUnit_ || ic[this.units_];
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
const _o = 6378137, Xr = Math.PI * _o, _g = [-Xr, -Xr, Xr, Xr], mg = [-180, -85, 180, 85], Oo = _o * Math.log(Math.tan(Math.PI / 2));
class Dr extends rc {
  /**
   * @param {string} code Code.
   */
  constructor(t) {
    super({
      code: t,
      units: "m",
      extent: _g,
      global: !0,
      worldExtent: mg,
      getPointResolution: function(e, n) {
        return e / Math.cosh(n[1] / _o);
      }
    });
  }
}
const Il = [
  new Dr("EPSG:3857"),
  new Dr("EPSG:102100"),
  new Dr("EPSG:102113"),
  new Dr("EPSG:900913"),
  new Dr("http://www.opengis.net/def/crs/EPSG/0/3857"),
  new Dr("http://www.opengis.net/gml/srs/epsg.xml#3857")
];
function yg(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e) {
    t[r] = Xr * i[r] / 180;
    let s = _o * Math.log(Math.tan(Math.PI * (+i[r + 1] + 90) / 360));
    s > Oo ? s = Oo : s < -Oo && (s = -Oo), t[r + 1] = s;
  }
  return t;
}
function vg(i, t, e) {
  const n = i.length;
  e = e > 1 ? e : 2, t === void 0 && (e > 2 ? t = i.slice() : t = new Array(n));
  for (let r = 0; r < n; r += e)
    t[r] = 180 * i[r] / Xr, t[r + 1] = 360 * Math.atan(Math.exp(i[r + 1] / _o)) / Math.PI - 90;
  return t;
}
const xg = 6378137, Sl = [-180, -90, 180, 90], Eg = Math.PI * xg / 180;
class er extends rc {
  /**
   * @param {string} code Code.
   * @param {string} [axisOrientation] Axis orientation.
   */
  constructor(t, e) {
    super({
      code: t,
      units: "degrees",
      extent: Sl,
      axisOrientation: e,
      global: !0,
      metersPerUnit: Eg,
      worldExtent: Sl
    });
  }
}
const Rl = [
  new er("CRS:84"),
  new er("EPSG:4326", "neu"),
  new er("urn:ogc:def:crs:OGC:1.3:CRS84"),
  new er("urn:ogc:def:crs:OGC:2:84"),
  new er("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
  new er("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
  new er("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
];
let tu = {};
function Cg(i) {
  return tu[i] || tu[i.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
}
function Ig(i, t) {
  tu[i] = t;
}
let Ur = {};
function qo(i, t, e) {
  const n = i.getCode(), r = t.getCode();
  n in Ur || (Ur[n] = {}), Ur[n][r] = e;
}
function Sg(i, t) {
  let e;
  return i in Ur && t in Ur[i] && (e = Ur[i][t]), e;
}
function ce(i, t, e) {
  return Math.min(Math.max(i, t), e);
}
function Rg(i, t, e, n, r, s) {
  const o = r - e, a = s - n;
  if (o !== 0 || a !== 0) {
    const u = ((i - e) * o + (t - n) * a) / (o * o + a * a);
    u > 1 ? (e = r, n = s) : u > 0 && (e += o * u, n += a * u);
  }
  return or(i, t, e, n);
}
function or(i, t, e, n) {
  const r = e - i, s = n - t;
  return r * r + s * s;
}
function wg(i) {
  return i * Math.PI / 180;
}
function eu(i, t) {
  const e = i % t;
  return e * t < 0 ? e + t : e;
}
function Ve(i, t, e) {
  return i + e * (t - i);
}
function Ng(i, t) {
  const e = Math.pow(10, t);
  return Math.round(i * e) / e;
}
function Lg(i, t) {
  return i[0] += +t[0], i[1] += +t[1], i;
}
function Ho(i, t) {
  let e = !0;
  for (let n = i.length - 1; n >= 0; --n)
    if (i[n] != t[n]) {
      e = !1;
      break;
    }
  return e;
}
function Pg(i, t) {
  const e = Math.cos(t), n = Math.sin(t), r = i[0] * e - i[1] * n, s = i[1] * e + i[0] * n;
  return i[0] = r, i[1] = s, i;
}
function Tg(i, t) {
  if (t.canWrapX()) {
    const e = un(t.getExtent()), n = bg(i, t, e);
    n && (i[0] -= n * e);
  }
  return i;
}
function bg(i, t, e) {
  const n = t.getExtent();
  let r = 0;
  return t.canWrapX() && (i[0] < n[0] || i[0] > n[2]) && (e = e || un(n), r = Math.floor(
    (i[0] - n[0]) / e
  )), r;
}
function Og(...i) {
  console.warn(...i);
}
let nu = !0;
function sc(i) {
  nu = !1;
}
function oc(i, t) {
  if (t !== void 0) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    t = t;
  } else
    t = i.slice();
  return t;
}
function Mg(i, t) {
  if (t !== void 0 && i !== t) {
    for (let e = 0, n = i.length; e < n; ++e)
      t[e] = i[e];
    i = t;
  }
  return i;
}
function Dg(i) {
  Ig(i.getCode(), i), qo(i, i, oc);
}
function Ag(i) {
  i.forEach(Dg);
}
function Hr(i) {
  return typeof i == "string" ? Cg(
    /** @type {string} */
    i
  ) : (
    /** @type {Projection} */
    i || null
  );
}
function wl(i) {
  Ag(i), i.forEach(function(t) {
    i.forEach(function(e) {
      t !== e && qo(t, e, oc);
    });
  });
}
function Fg(i, t, e, n) {
  i.forEach(function(r) {
    t.forEach(function(s) {
      qo(r, s, e), qo(s, r, n);
    });
  });
}
function Du(i, t) {
  return i ? typeof i == "string" ? Hr(i) : (
    /** @type {Projection} */
    i
  ) : Hr(t);
}
function Mo(i, t) {
  return sc(), ac(
    i,
    "EPSG:4326",
    t !== void 0 ? t : "EPSG:3857"
  );
}
function Nl(i, t) {
  const e = ac(
    i,
    t !== void 0 ? t : "EPSG:3857",
    "EPSG:4326"
  ), n = e[0];
  return (n < -180 || n > 180) && (e[0] = eu(n + 180, 360) - 180), e;
}
function kg(i, t) {
  const e = i.getCode(), n = t.getCode();
  let r = Sg(e, n);
  return r || (r = Mg), r;
}
function jo(i, t) {
  const e = Hr(i), n = Hr(t);
  return kg(e, n);
}
function ac(i, t, e) {
  return jo(t, e)(i, void 0, i.length);
}
function Gg(i, t, e, n) {
  const r = jo(t, e);
  return pg(i, r, void 0);
}
function Ll(i, t) {
  return i;
}
function Li(i, t) {
  return nu && !Ho(i, [0, 0]) && i[0] >= -180 && i[0] <= 180 && i[1] >= -90 && i[1] <= 90 && (nu = !1, Og(
    "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
  )), i;
}
function uc(i, t) {
  return i;
}
function Os(i, t) {
  return i;
}
function Bg() {
  wl(Il), wl(Rl), Fg(
    Rl,
    Il,
    yg,
    vg
  );
}
Bg();
function ar(i, t, e, n, r, s) {
  s = s || [];
  let o = 0;
  for (let a = t; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    s[o++] = r[0] * u + r[2] * l + r[4], s[o++] = r[1] * u + r[3] * l + r[5];
  }
  return s && s.length != o && (s.length = o), s;
}
function lc(i, t, e, n, r, s, o) {
  o = o || [];
  const a = Math.cos(r), u = Math.sin(r), l = s[0], h = s[1];
  let c = 0;
  for (let f = t; f < e; f += n) {
    const g = i[f] - l, p = i[f + 1] - h;
    o[c++] = l + g * a - p * u, o[c++] = h + g * u + p * a;
    for (let d = f + 2; d < f + n; ++d)
      o[c++] = i[d];
  }
  return o && o.length != c && (o.length = c), o;
}
function zg(i, t, e, n, r, s, o, a) {
  a = a || [];
  const u = o[0], l = o[1];
  let h = 0;
  for (let c = t; c < e; c += n) {
    const f = i[c] - u, g = i[c + 1] - l;
    a[h++] = u + r * f, a[h++] = l + s * g;
    for (let p = c + 2; p < c + n; ++p)
      a[h++] = i[p];
  }
  return a && a.length != h && (a.length = h), a;
}
function Vg(i, t, e, n, r, s, o) {
  o = o || [];
  let a = 0;
  for (let u = t; u < e; u += n) {
    o[a++] = i[u] + r, o[a++] = i[u + 1] + s;
    for (let l = u + 2; l < u + n; ++l)
      o[a++] = i[l];
  }
  return o && o.length != a && (o.length = a), o;
}
const Pl = Bi();
let hc = class extends Rr {
  constructor() {
    super(), this.extent_ = ur(), this.extentRevision_ = -1, this.simplifiedGeometryMaxMinSquaredTolerance = 0, this.simplifiedGeometryRevision = 0, this.simplifyTransformedInternal = Yf(function(t, e, n) {
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
      (isNaN(e[0]) || isNaN(e[1])) && pa(e), this.extentRevision_ = this.getRevision();
    }
    return fg(this.extent_, t);
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
    const n = Hr(t), r = n.getUnits() == "tile-pixels" ? function(s, o, a) {
      const u = n.getExtent(), l = n.getWorldExtent(), h = Vs(l) / Vs(u);
      return po(
        Pl,
        l[0],
        l[3],
        h,
        -h,
        0,
        0,
        0
      ), ar(
        s,
        0,
        s.length,
        a,
        Pl,
        o
      ), jo(n, e)(
        s,
        o,
        a
      );
    } : jo(n, e);
    return this.applyTransform(r), this;
  }
};
class Nr extends hc {
  constructor() {
    super(), this.layout = "XY", this.stride = 2, this.flatCoordinates = null;
  }
  /**
   * @param {import("../extent.js").Extent} extent Extent.
   * @protected
   * @return {import("../extent.js").Extent} extent Extent.
   */
  computeExtent(t) {
    return Zh(
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
    this.stride = Tl(t), this.layout = t, this.flatCoordinates = e;
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
      r = Tl(t);
    else {
      for (let s = 0; s < n; ++s) {
        if (e.length === 0) {
          this.layout = "XY", this.stride = 2;
          return;
        }
        e = /** @type {Array} */
        e[0];
      }
      r = e.length, t = Xg(r);
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
      lc(
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
    e === void 0 && (e = t), n || (n = qr(this.getExtent()));
    const r = this.getFlatCoordinates();
    if (r) {
      const s = this.getStride();
      zg(
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
      Vg(
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
function Xg(i) {
  let t;
  return i == 2 ? t = "XY" : i == 3 ? t = "XYZ" : i == 4 && (t = "XYZM"), /** @type {import("./Geometry.js").GeometryLayout} */
  t;
}
function Tl(i) {
  let t;
  return i == "XY" ? t = 2 : i == "XYZ" || i == "XYM" ? t = 3 : i == "XYZM" && (t = 4), /** @type {number} */
  t;
}
function Yg(i, t, e) {
  const n = i.getFlatCoordinates();
  if (!n)
    return null;
  const r = i.getStride();
  return ar(
    n,
    0,
    n.length,
    r,
    t,
    e
  );
}
function bl(i, t, e, n, r, s, o) {
  const a = i[t], u = i[t + 1], l = i[e] - a, h = i[e + 1] - u;
  let c;
  if (l === 0 && h === 0)
    c = t;
  else {
    const f = ((r - a) * l + (s - u) * h) / (l * l + h * h);
    if (f > 1)
      c = e;
    else if (f > 0) {
      for (let g = 0; g < n; ++g)
        o[g] = Ve(
          i[t + g],
          i[e + g],
          f
        );
      o.length = n;
      return;
    } else
      c = t;
  }
  for (let f = 0; f < n; ++f)
    o[f] = i[c + f];
  o.length = n;
}
function Au(i, t, e, n, r) {
  let s = i[t], o = i[t + 1];
  for (t += n; t < e; t += n) {
    const a = i[t], u = i[t + 1], l = or(s, o, a, u);
    l > r && (r = l), s = a, o = u;
  }
  return r;
}
function Fu(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = Au(i, t, a, n, r), t = a;
  }
  return r;
}
function Ug(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r = Fu(i, t, a, n, r), t = a[a.length - 1];
  }
  return r;
}
function ku(i, t, e, n, r, s, o, a, u, l, h) {
  if (t == e)
    return l;
  let c, f;
  if (r === 0) {
    if (f = or(
      o,
      a,
      i[t],
      i[t + 1]
    ), f < l) {
      for (c = 0; c < n; ++c)
        u[c] = i[t + c];
      return u.length = n, f;
    }
    return l;
  }
  h = h || [NaN, NaN];
  let g = t + n;
  for (; g < e; )
    if (bl(
      i,
      g - n,
      g,
      n,
      o,
      a,
      h
    ), f = or(o, a, h[0], h[1]), f < l) {
      for (l = f, c = 0; c < n; ++c)
        u[c] = h[c];
      u.length = n, g += n;
    } else
      g += n * Math.max(
        (Math.sqrt(f) - Math.sqrt(l)) / r | 0,
        1
      );
  if (s && (bl(
    i,
    e - n,
    t,
    n,
    o,
    a,
    h
  ), f = or(o, a, h[0], h[1]), f < l)) {
    for (l = f, c = 0; c < n; ++c)
      u[c] = h[c];
    u.length = n;
  }
  return l;
}
function Gu(i, t, e, n, r, s, o, a, u, l, h) {
  h = h || [NaN, NaN];
  for (let c = 0, f = e.length; c < f; ++c) {
    const g = e[c];
    l = ku(
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
      h
    ), t = g;
  }
  return l;
}
function Wg(i, t, e, n, r, s, o, a, u, l, h) {
  h = h || [NaN, NaN];
  for (let c = 0, f = e.length; c < f; ++c) {
    const g = e[c];
    l = Gu(
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
      h
    ), t = g[g.length - 1];
  }
  return l;
}
function qg(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r)
    i[t++] = e[r];
  return t;
}
function da(i, t, e, n) {
  for (let r = 0, s = e.length; r < s; ++r) {
    const o = e[r];
    for (let a = 0; a < n; ++a)
      i[t++] = o[a];
  }
  return t;
}
function Bu(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = da(
      i,
      t,
      e[o],
      n
    );
    r[s++] = u, t = u;
  }
  return r.length = s, r;
}
function Hg(i, t, e, n, r) {
  r = r || [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = Bu(
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
function zu(i, t, e, n, r, s, o) {
  const a = (e - t) / n;
  if (a < 3) {
    for (; t < e; t += n)
      s[o++] = i[t], s[o++] = i[t + 1];
    return o;
  }
  const u = new Array(a);
  u[0] = 1, u[a - 1] = 1;
  const l = [t, e - n];
  let h = 0;
  for (; l.length > 0; ) {
    const c = l.pop(), f = l.pop();
    let g = 0;
    const p = i[f], d = i[f + 1], _ = i[c], m = i[c + 1];
    for (let y = f + n; y < c; y += n) {
      const x = i[y], I = i[y + 1], S = Rg(x, I, p, d, _, m);
      S > g && (h = y, g = S);
    }
    g > r && (u[(h - t) / n] = 1, f + n < h && l.push(f, h), h + n < c && l.push(h, c));
  }
  for (let c = 0; c < a; ++c)
    u[c] && (s[o++] = i[t + c * n], s[o++] = i[t + c * n + 1]);
  return o;
}
function jg(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const h = e[u];
    o = zu(
      i,
      t,
      h,
      n,
      r,
      s,
      o
    ), a.push(o), t = h;
  }
  return o;
}
function nr(i, t) {
  return t * Math.round(i / t);
}
function Zg(i, t, e, n, r, s, o) {
  if (t == e)
    return o;
  let a = nr(i[t], r), u = nr(i[t + 1], r);
  t += n, s[o++] = a, s[o++] = u;
  let l, h;
  do
    if (l = nr(i[t], r), h = nr(i[t + 1], r), t += n, t == e)
      return s[o++] = l, s[o++] = h, o;
  while (l == a && h == u);
  for (; t < e; ) {
    const c = nr(i[t], r), f = nr(i[t + 1], r);
    if (t += n, c == l && f == h)
      continue;
    const g = l - a, p = h - u, d = c - a, _ = f - u;
    if (g * _ == p * d && (g < 0 && d < g || g == d || g > 0 && d > g) && (p < 0 && _ < p || p == _ || p > 0 && _ > p)) {
      l = c, h = f;
      continue;
    }
    s[o++] = l, s[o++] = h, a = l, u = h, l = c, h = f;
  }
  return s[o++] = l, s[o++] = h, o;
}
function cc(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const h = e[u];
    o = Zg(
      i,
      t,
      h,
      n,
      r,
      s,
      o
    ), a.push(o), t = h;
  }
  return o;
}
function Kg(i, t, e, n, r, s, o, a) {
  for (let u = 0, l = e.length; u < l; ++u) {
    const h = e[u], c = [];
    o = cc(
      i,
      t,
      h,
      n,
      r,
      s,
      o,
      c
    ), a.push(c), t = h[h.length - 1];
  }
  return o;
}
function Fi(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = t; o < e; o += n)
    r[s++] = i.slice(o, o + n);
  return r.length = s, r;
}
function Xs(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = Fi(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u;
  }
  return r.length = s, r;
}
function iu(i, t, e, n, r) {
  r = r !== void 0 ? r : [];
  let s = 0;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    r[s++] = u.length === 1 && u[0] === t ? [] : Xs(
      i,
      t,
      u,
      n,
      r[s]
    ), t = u[u.length - 1];
  }
  return r.length = s, r;
}
function fc(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += o * a - s * u, s = a, o = u;
  }
  return r / 2;
}
function gc(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += fc(i, t, a, n), t = a;
  }
  return r;
}
function Jg(i, t, e, n) {
  let r = 0;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    r += gc(i, t, a, n), t = a[a.length - 1];
  }
  return r;
}
let Ol = class ru extends Nr {
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
    return new ru(this.flatCoordinates.slice(), this.layout);
  }
  /**
   * @param {number} x X.
   * @param {number} y Y.
   * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
   * @param {number} minSquaredDistance Minimum squared distance.
   * @return {number} Minimum squared distance.
   */
  closestPointXY(t, e, n, r) {
    return r < wr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Au(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), ku(
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
    return fc(
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
    return Fi(
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
    return e.length = zu(
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = da(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
}, Wr = class pc extends Nr {
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
    const t = new pc(this.flatCoordinates.slice(), this.layout);
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
    const s = this.flatCoordinates, o = or(
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
    return sg(this.flatCoordinates, t);
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
    return Ou(t, this.flatCoordinates[0], this.flatCoordinates[1]);
  }
  /**
   * @param {!Array<*>} coordinates Coordinates.
   * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
   * @api
   */
  setCoordinates(t, e) {
    this.setLayout(e, t, 0), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = qg(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
function Qg(i, t, e, n, r) {
  return !lg(
    r,
    /**
     * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains (x, y).
     */
    function(o) {
      return !ir(
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
function ir(i, t, e, n, r, s) {
  let o = 0, a = i[e - n], u = i[e - n + 1];
  for (; t < e; t += n) {
    const l = i[t], h = i[t + 1];
    u <= s ? h > s && (l - a) * (s - u) - (r - a) * (h - u) > 0 && o++ : h <= s && (l - a) * (s - u) - (r - a) * (h - u) < 0 && o--, a = l, u = h;
  }
  return o !== 0;
}
function Vu(i, t, e, n, r, s) {
  if (e.length === 0 || !ir(i, t, e[0], n, r, s))
    return !1;
  for (let o = 1, a = e.length; o < a; ++o)
    if (ir(i, e[o - 1], e[o], n, r, s))
      return !1;
  return !0;
}
function $g(i, t, e, n, r, s) {
  if (e.length === 0)
    return !1;
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    if (Vu(i, t, u, n, r, s))
      return !0;
    t = u[u.length - 1];
  }
  return !1;
}
function dc(i, t, e, n, r, s, o) {
  let a, u, l, h, c, f, g;
  const p = r[s + 1], d = [];
  for (let y = 0, x = e.length; y < x; ++y) {
    const I = e[y];
    for (h = i[I - n], f = i[I - n + 1], a = t; a < I; a += n)
      c = i[a], g = i[a + 1], (p <= f && g <= p || f <= p && p <= g) && (l = (p - f) / (g - f) * (c - h) + h, d.push(l)), h = c, f = g;
  }
  let _ = NaN, m = -1 / 0;
  for (d.sort(Gs), h = d[0], a = 1, u = d.length; a < u; ++a) {
    c = d[a];
    const y = Math.abs(c - h);
    y > m && (l = (h + c) / 2, Vu(i, t, e, n, l, p) && (_ = l, m = y)), h = c;
  }
  return isNaN(_) && (_ = r[s]), o ? (o.push(_, p, m), o) : [_, p, m];
}
function tp(i, t, e, n, r) {
  let s = [];
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = dc(
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
function _c(i, t, e, n, r) {
  let s;
  for (t += n; t < e; t += n)
    if (s = r(
      i.slice(t - n, t),
      i.slice(t, t + n)
    ), s)
      return s;
  return !1;
}
function _a(i, t, e, n, r) {
  const s = Jh(
    ur(),
    i,
    t,
    e,
    n
  );
  return Pn(r, s) ? Vr(r, s) || s[0] >= r[0] && s[2] <= r[2] || s[1] >= r[1] && s[3] <= r[3] ? !0 : _c(
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
      return gg(r, o, a);
    }
  ) : !1;
}
function ep(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    if (_a(i, t, e[s], n, r))
      return !0;
    t = e[s];
  }
  return !1;
}
function np(i, t, e, n, r) {
  return !!(_a(i, t, e, n, r) || ir(
    i,
    t,
    e,
    n,
    r[0],
    r[1]
  ) || ir(
    i,
    t,
    e,
    n,
    r[0],
    r[3]
  ) || ir(
    i,
    t,
    e,
    n,
    r[2],
    r[1]
  ) || ir(
    i,
    t,
    e,
    n,
    r[2],
    r[3]
  ));
}
function mc(i, t, e, n, r) {
  if (!np(i, t, e[0], n, r))
    return !1;
  if (e.length === 1)
    return !0;
  for (let s = 1, o = e.length; s < o; ++s)
    if (Qg(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ) && !_a(
      i,
      e[s - 1],
      e[s],
      n,
      r
    ))
      return !1;
  return !0;
}
function ip(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (mc(i, t, a, n, r))
      return !0;
    t = a[a.length - 1];
  }
  return !1;
}
function rp(i, t, e, n) {
  for (; t < e - n; ) {
    for (let r = 0; r < n; ++r) {
      const s = i[t + r];
      i[t + r] = i[e - n + r], i[e - n + r] = s;
    }
    t += n, e -= n;
  }
}
function yc(i, t, e, n) {
  let r = 0, s = i[e - n], o = i[e - n + 1];
  for (; t < e; t += n) {
    const a = i[t], u = i[t + 1];
    r += (a - s) * (u + o), s = a, o = u;
  }
  return r === 0 ? void 0 : r > 0;
}
function vc(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = yc(
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
function sp(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s];
    if (!vc(i, t, a, n, r))
      return !1;
    a.length && (t = a[a.length - 1]);
  }
  return !0;
}
function su(i, t, e, n, r) {
  r = r !== void 0 ? r : !1;
  for (let s = 0, o = e.length; s < o; ++s) {
    const a = e[s], u = yc(
      i,
      t,
      a,
      n
    );
    (s === 0 ? r && u || !r && !u : r && !u || !r && u) && rp(i, t, a, n), t = a;
  }
  return t;
}
function Ml(i, t, e, n, r) {
  for (let s = 0, o = e.length; s < o; ++s)
    t = su(
      i,
      t,
      e[s],
      n,
      r
    );
  return t;
}
let Ys = class ou extends Nr {
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
    this.flatCoordinates ? pi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!Polygon} Clone.
   * @api
   */
  clone() {
    const t = new ou(
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
    return r < wr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Fu(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Gu(
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
    return Vu(
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
    return gc(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), su(e, 0, this.ends_, this.stride, t)) : e = this.flatCoordinates, Xs(e, 0, this.ends_, this.stride);
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
      const t = qr(this.getExtent());
      this.flatInteriorPoint_ = dc(
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
    return new Wr(this.getFlatInteriorPoint(), "XYM");
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
    return t < 0 || this.ends_.length <= t ? null : new Ol(
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
      const u = n[o], l = new Ol(
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
      vc(t, 0, this.ends_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = su(
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
    return e.length = cc(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new ou(e, "XY", n);
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
    return mc(
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
    const n = Bu(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
};
function Dl(i) {
  if (Mu(i))
    throw new Error("Cannot create polygon from empty extent");
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
  return new Ys(s, "XY", [s.length]);
}
const Us = {
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
class hr {
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
    return new hr({
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
function xc(i, t, e, n, r, s, o) {
  let a, u;
  const l = (e - t) / n;
  if (l === 1)
    a = t;
  else if (l === 2)
    a = t, u = r;
  else if (l !== 0) {
    let h = i[t], c = i[t + 1], f = 0;
    const g = [0];
    for (let _ = t + n; _ < e; _ += n) {
      const m = i[_], y = i[_ + 1];
      f += Math.sqrt((m - h) * (m - h) + (y - c) * (y - c)), g.push(f), h = m, c = y;
    }
    const p = r * f, d = zf(g, p);
    d < 0 ? (u = (p - g[-d - 2]) / (g[-d - 1] - g[-d - 2]), a = t + (-d - 2) * n) : a = t + d * n;
  }
  o = o > 1 ? o : 2, s = s || new Array(o);
  for (let h = 0; h < o; ++h)
    s[h] = a === void 0 ? NaN : u === void 0 ? i[a + h] : Ve(i[a + h], i[a + n + h], u);
  return s;
}
function au(i, t, e, n, r, s) {
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
  const h = i[(a + 1) * n - 1], c = (r - l) / (h - l);
  o = [];
  for (let f = 0; f < n - 1; ++f)
    o.push(
      Ve(
        i[(a - 1) * n + f],
        i[a * n + f],
        c
      )
    );
  return o.push(r), o;
}
function op(i, t, e, n, r, s, o) {
  if (o)
    return au(
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
    const h = e[u];
    if (t != h) {
      if (r < i[t + n - 1])
        return null;
      if (r <= i[h - 1])
        return au(
          i,
          t,
          h,
          n,
          r,
          !1
        );
      t = h;
    }
  }
  return null;
}
function Ec(i, t, e, n) {
  let r = i[t], s = i[t + 1], o = 0;
  for (let a = t + n; a < e; a += n) {
    const u = i[a], l = i[a + 1];
    o += Math.sqrt((u - r) * (u - r) + (l - s) * (l - s)), r = u, s = l;
  }
  return o;
}
let Zo = class uu extends Nr {
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
    this.flatCoordinates ? pi(this.flatCoordinates, t) : this.flatCoordinates = t.slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!LineString} Clone.
   * @api
   */
  clone() {
    const t = new uu(
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
    return r < wr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Au(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), ku(
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
    return _c(
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
    return this.layout != "XYM" && this.layout != "XYZM" ? null : (e = e !== void 0 ? e : !1, au(
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
    return Fi(
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
    return xc(
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
    return Ec(
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
    return e.length = zu(
      this.flatCoordinates,
      0,
      this.flatCoordinates.length,
      this.stride,
      t,
      e,
      0
    ), new uu(e, "XY");
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
    return _a(
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = da(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
class jr {
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
    return new jr({
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
const Ot = {
  IDLE: 0,
  LOADING: 1,
  LOADED: 2,
  ERROR: 3,
  EMPTY: 4
};
function Ko(i, t) {
  return Array.isArray(i) ? i : (t === void 0 ? t = [i, i] : (t[0] = i, t[1] = i), t);
}
class ma {
  /**
   * @param {Options} options Options.
   */
  constructor(t) {
    this.opacity_ = t.opacity, this.rotateWithView_ = t.rotateWithView, this.rotation_ = t.rotation, this.scale_ = t.scale, this.scaleArray_ = Ko(t.scale), this.displacement_ = t.displacement, this.declutterMode_ = t.declutterMode;
  }
  /**
   * Clones the style.
   * @return {ImageStyle} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new ma({
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
    this.scale_ = t, this.scaleArray_ = Ko(t);
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
const ap = /^#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})$/i, up = /^([a-z]*)$|^hsla?\(.*\)$/i;
function Cc(i) {
  return typeof i == "string" ? i : Ic(i);
}
function lp(i) {
  const t = document.createElement("div");
  if (t.style.color = i, t.style.color !== "") {
    document.body.appendChild(t);
    const e = getComputedStyle(t).color;
    return document.body.removeChild(t), e;
  }
  return "";
}
const hp = /* @__PURE__ */ function() {
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
        r = cp(n), t[n] = r, ++e;
      }
      return r;
    }
  );
}();
function Jo(i) {
  return Array.isArray(i) ? i : hp(i);
}
function cp(i) {
  let t, e, n, r, s;
  if (up.exec(i) && (i = lp(i)), ap.exec(i)) {
    const o = i.length - 1;
    let a;
    o <= 4 ? a = 1 : a = 2;
    const u = o === 4 || o === 8;
    t = parseInt(i.substr(1 + 0 * a, a), 16), e = parseInt(i.substr(1 + 1 * a, a), 16), n = parseInt(i.substr(1 + 2 * a, a), 16), u ? r = parseInt(i.substr(1 + 3 * a, a), 16) : r = 255, a == 1 && (t = (t << 4) + t, e = (e << 4) + e, n = (n << 4) + n, u && (r = (r << 4) + r)), s = [t, e, n, r / 255];
  } else
    i.startsWith("rgba(") ? (s = i.slice(5, -1).split(",").map(Number), Al(s)) : i.startsWith("rgb(") ? (s = i.slice(4, -1).split(",").map(Number), s.push(1), Al(s)) : Ut(!1, 14);
  return s;
}
function Al(i) {
  return i[0] = ce(i[0] + 0.5 | 0, 0, 255), i[1] = ce(i[1] + 0.5 | 0, 0, 255), i[2] = ce(i[2] + 0.5 | 0, 0, 255), i[3] = ce(i[3], 0, 1), i;
}
function Ic(i) {
  let t = i[0];
  t != (t | 0) && (t = t + 0.5 | 0);
  let e = i[1];
  e != (e | 0) && (e = e + 0.5 | 0);
  let n = i[2];
  n != (n | 0) && (n = n + 0.5 | 0);
  const r = i[3] === void 0 ? 1 : Math.round(i[3] * 100) / 100;
  return "rgba(" + t + "," + e + "," + n + "," + r + ")";
}
function Kn(i) {
  return Array.isArray(i) ? Ic(i) : i;
}
function Mn(i, t, e, n) {
  let r;
  return e && e.length ? r = e.shift() : Tu ? r = new OffscreenCanvas(i || 300, t || 300) : r = document.createElement("canvas"), i && (r.width = i), t && (r.height = t), /** @type {CanvasRenderingContext2D} */
  r.getContext("2d", n);
}
function fp(i) {
  const t = i.canvas;
  t.width = 1, t.height = 1, i.clearRect(0, 0, 1, 1);
}
const gp = new RegExp(
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
), Fl = [
  "style",
  "variant",
  "weight",
  "size",
  "lineHeight",
  "family"
], Sc = function(i) {
  const t = i.match(gp);
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
  for (let n = 0, r = Fl.length; n < r; ++n) {
    const s = t[n + 1];
    s !== void 0 && (e[Fl[n]] = s);
  }
  return e.families = e.family.split(/,\s?/), e;
}, Rc = "10px sans-serif", Pe = "#000", Qo = "round", di = [], _i = 0, Zr = "round", Ws = 10, qs = "#000", Hs = "center", $o = "middle", rr = [0, 0, 0, 0], js = 1, Pi = new Rr();
let kr = null, lu;
const hu = {}, pp = function() {
  const t = "32px ", e = ["monospace", "serif"], n = e.length, r = "wmytzilWMYTZIL@#/&?$%10";
  let s, o;
  function a(l, h, c) {
    let f = !0;
    for (let g = 0; g < n; ++g) {
      const p = e[g];
      if (o = ta(
        l + " " + h + " " + t + p,
        r
      ), c != p) {
        const d = ta(
          l + " " + h + " " + t + c + "," + p,
          r
        );
        f = f && d != o;
      }
    }
    return !!f;
  }
  function u() {
    let l = !0;
    const h = Pi.getKeys();
    for (let c = 0, f = h.length; c < f; ++c) {
      const g = h[c];
      Pi.get(g) < 100 && (a.apply(this, g.split(`
`)) ? (Pu(hu), kr = null, lu = void 0, Pi.set(g, 100)) : (Pi.set(g, Pi.get(g) + 1, !0), l = !1));
    }
    l && (clearInterval(s), s = void 0);
  }
  return function(l) {
    const h = Sc(l);
    if (!h)
      return;
    const c = h.families;
    for (let f = 0, g = c.length; f < g; ++f) {
      const p = c[f], d = h.style + `
` + h.weight + `
` + p;
      Pi.get(d) === void 0 && (Pi.set(d, 100, !0), a(h.style, h.weight, p) || (Pi.set(d, 0, !0), s === void 0 && (s = setInterval(u, 32))));
    }
  };
}(), dp = /* @__PURE__ */ function() {
  let i;
  return function(t) {
    let e = hu[t];
    if (e == null) {
      if (Tu) {
        const n = Sc(t), r = wc(t, "Žg");
        e = (isNaN(Number(n.lineHeight)) ? 1.2 : Number(n.lineHeight)) * (r.actualBoundingBoxAscent + r.actualBoundingBoxDescent);
      } else
        i || (i = document.createElement("div"), i.innerHTML = "M", i.style.minHeight = "0", i.style.maxHeight = "none", i.style.height = "auto", i.style.padding = "0", i.style.border = "none", i.style.position = "absolute", i.style.display = "block", i.style.left = "-99999px"), i.style.font = t, document.body.appendChild(i), e = i.offsetHeight, document.body.removeChild(i);
      hu[t] = e;
    }
    return e;
  };
}();
function wc(i, t) {
  return kr || (kr = Mn(1, 1)), i != lu && (kr.font = i, lu = kr.font), kr.measureText(t);
}
function ta(i, t) {
  return wc(i, t).width;
}
function kl(i, t, e) {
  if (t in e)
    return e[t];
  const n = t.split(`
`).reduce((r, s) => Math.max(r, ta(i, s)), 0);
  return e[t] = n, n;
}
function _p(i, t) {
  const e = [], n = [], r = [];
  let s = 0, o = 0, a = 0, u = 0;
  for (let l = 0, h = t.length; l <= h; l += 2) {
    const c = t[l];
    if (c === `
` || l === h) {
      s = Math.max(s, o), r.push(o), o = 0, a += u;
      continue;
    }
    const f = t[l + 1] || i.font, g = ta(f, c);
    e.push(g), o += g;
    const p = dp(f);
    n.push(p), u = Math.max(u, p);
  }
  return { width: s, height: a, widths: e, heights: n, lineWidths: r };
}
function mp(i, t, e, n, r, s, o, a, u, l, h) {
  i.save(), e !== 1 && (i.globalAlpha *= e), t && i.setTransform.apply(i, t), /** @type {*} */
  n.contextInstructions ? (i.translate(u, l), i.scale(h[0], h[1]), yp(
    /** @type {Label} */
    n,
    i
  )) : h[0] < 0 || h[1] < 0 ? (i.translate(u, l), i.scale(h[0], h[1]), i.drawImage(
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
    o * h[0],
    a * h[1]
  ), i.restore();
}
function yp(i, t) {
  const e = i.contextInstructions;
  for (let n = 0, r = e.length; n < r; n += 2)
    Array.isArray(e[n + 1]) ? t[e[n]].apply(
      t,
      e[n + 1]
    ) : t[e[n]] = e[n + 1];
}
class ya extends ma {
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
    const t = this.getScale(), e = new ya({
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
      const n = this.renderOptions_, r = Mn(
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
    return Ot.LOADED;
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
    const o = this.radius2_ === void 0 ? this.points_ : this.points_ * 2, a = 2 * Math.PI / o, u = s * Math.sin(a), l = Math.sqrt(s * s - u * u), h = r - l, c = Math.sqrt(u * u + h * h), f = c / u;
    if (t === "miter" && f <= n)
      return f * e;
    const g = e / 2 / f, p = e / 2 * (h / c), _ = Math.sqrt((r + g) * (r + g) + p * p) - r;
    if (this.radius2_ === void 0 || t === "bevel")
      return _ * 2;
    const m = r * Math.sin(a), y = Math.sqrt(r * r - m * m), x = s - y, S = Math.sqrt(m * m + x * x) / m;
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
    let t = Zr, e = 0, n = null, r = 0, s, o = 0;
    this.stroke_ && (s = this.stroke_.getColor(), s === null && (s = qs), s = Kn(s), o = this.stroke_.getWidth(), o === void 0 && (o = js), n = this.stroke_.getLineDash(), r = this.stroke_.getLineDashOffset(), t = this.stroke_.getLineJoin(), t === void 0 && (t = Zr), e = this.stroke_.getMiterLimit(), e === void 0 && (e = Ws));
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
      r === null && (r = Pe), e.fillStyle = Kn(r), e.fill();
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
      if (typeof e == "string" && (e = Jo(e)), e === null ? n = 1 : Array.isArray(e) && (n = e.length === 4 ? e[3] : 1), n === 0) {
        const r = Mn(
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
    e.translate(t.size / 2, t.size / 2), this.createPath_(e), e.fillStyle = Pe, e.fill(), this.stroke_ && (e.strokeStyle = t.strokeStyle, e.lineWidth = t.strokeWidth, t.lineDash && (e.setLineDash(t.lineDash), e.lineDashOffset = t.lineDashOffset), e.lineJoin = t.lineJoin, e.miterLimit = t.miterLimit, e.stroke());
  }
}
class va extends ya {
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
    const t = this.getScale(), e = new va({
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
class cr {
  /**
   * @param {Options} [options] Style options.
   */
  constructor(t) {
    t = t || {}, this.geometry_ = null, this.geometryFunction_ = Gl, t.geometry !== void 0 && this.setGeometry(t.geometry), this.fill_ = t.fill !== void 0 ? t.fill : null, this.image_ = t.image !== void 0 ? t.image : null, this.renderer_ = t.renderer !== void 0 ? t.renderer : null, this.hitDetectionRenderer_ = t.hitDetectionRenderer !== void 0 ? t.hitDetectionRenderer : null, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.text_ = t.text !== void 0 ? t.text : null, this.zIndex_ = t.zIndex;
  }
  /**
   * Clones the style.
   * @return {Style} The cloned style.
   * @api
   */
  clone() {
    let t = this.getGeometry();
    return t && typeof t == "object" && (t = /** @type {import("../geom/Geometry.js").default} */
    t.clone()), new cr({
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
    }) : this.geometryFunction_ = Gl, this.geometry_ = t;
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
function vp(i) {
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
let Va = null;
function xp(i, t) {
  if (!Va) {
    const e = new hr({
      color: "rgba(255,255,255,0.4)"
    }), n = new jr({
      color: "#3399CC",
      width: 1.25
    });
    Va = [
      new cr({
        image: new va({
          fill: e,
          stroke: n,
          radius: 5
        }),
        fill: e,
        stroke: n
      })
    ];
  }
  return Va;
}
function Gl(i) {
  return i.getGeometry();
}
const Ep = "#333";
class xa {
  /**
   * @param {Options} [options] Options.
   */
  constructor(t) {
    t = t || {}, this.font_ = t.font, this.rotation_ = t.rotation, this.rotateWithView_ = t.rotateWithView, this.scale_ = t.scale, this.scaleArray_ = Ko(t.scale !== void 0 ? t.scale : 1), this.text_ = t.text, this.textAlign_ = t.textAlign, this.justify_ = t.justify, this.repeat_ = t.repeat, this.textBaseline_ = t.textBaseline, this.fill_ = t.fill !== void 0 ? t.fill : new hr({ color: Ep }), this.maxAngle_ = t.maxAngle !== void 0 ? t.maxAngle : Math.PI / 4, this.placement_ = t.placement !== void 0 ? t.placement : "point", this.overflow_ = !!t.overflow, this.stroke_ = t.stroke !== void 0 ? t.stroke : null, this.offsetX_ = t.offsetX !== void 0 ? t.offsetX : 0, this.offsetY_ = t.offsetY !== void 0 ? t.offsetY : 0, this.backgroundFill_ = t.backgroundFill ? t.backgroundFill : null, this.backgroundStroke_ = t.backgroundStroke ? t.backgroundStroke : null, this.padding_ = t.padding === void 0 ? null : t.padding;
  }
  /**
   * Clones the style.
   * @return {Text} The cloned style.
   * @api
   */
  clone() {
    const t = this.getScale();
    return new xa({
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
    this.scale_ = t, this.scaleArray_ = Ko(t !== void 0 ? t : 1);
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
const ht = {
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
class Cp extends Rr {
  /**
   * @param {Options} options Layer options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, this.background_ = t.background;
    const e = Object.assign({}, t);
    typeof t.properties == "object" && (delete e.properties, Object.assign(e, t.properties)), e[ht.OPACITY] = t.opacity !== void 0 ? t.opacity : 1, Ut(typeof e[ht.OPACITY] == "number", 64), e[ht.VISIBLE] = t.visible !== void 0 ? t.visible : !0, e[ht.Z_INDEX] = t.zIndex, e[ht.MAX_RESOLUTION] = t.maxResolution !== void 0 ? t.maxResolution : 1 / 0, e[ht.MIN_RESOLUTION] = t.minResolution !== void 0 ? t.minResolution : 0, e[ht.MIN_ZOOM] = t.minZoom !== void 0 ? t.minZoom : -1 / 0, e[ht.MAX_ZOOM] = t.maxZoom !== void 0 ? t.maxZoom : 1 / 0, this.className_ = e.className !== void 0 ? e.className : "ol-layer", delete e.className, this.setProperties(e), this.state_ = null;
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
    return e.opacity = ce(Math.round(this.getOpacity() * 100) / 100, 0, 1), e.visible = this.getVisible(), e.extent = this.getExtent(), e.zIndex = n === void 0 && !e.managed ? 1 / 0 : n, e.maxResolution = this.getMaxResolution(), e.minResolution = Math.max(this.getMinResolution(), 0), e.minZoom = this.getMinZoom(), e.maxZoom = this.getMaxZoom(), this.state_ = e, e;
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
      this.get(ht.EXTENT)
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
      this.get(ht.MAX_RESOLUTION)
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
      this.get(ht.MIN_RESOLUTION)
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
      this.get(ht.MIN_ZOOM)
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
      this.get(ht.MAX_ZOOM)
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
      this.get(ht.OPACITY)
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
      this.get(ht.VISIBLE)
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
      this.get(ht.Z_INDEX)
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
    this.set(ht.EXTENT, t);
  }
  /**
   * Set the maximum resolution at which the layer is visible.
   * @param {number} maxResolution The maximum resolution of the layer.
   * @observable
   * @api
   */
  setMaxResolution(t) {
    this.set(ht.MAX_RESOLUTION, t);
  }
  /**
   * Set the minimum resolution at which the layer is visible.
   * @param {number} minResolution The minimum resolution of the layer.
   * @observable
   * @api
   */
  setMinResolution(t) {
    this.set(ht.MIN_RESOLUTION, t);
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
    this.set(ht.MAX_ZOOM, t);
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
    this.set(ht.MIN_ZOOM, t);
  }
  /**
   * Set the opacity of the layer, allowed values range from 0 to 1.
   * @param {number} opacity The opacity of the layer.
   * @observable
   * @api
   */
  setOpacity(t) {
    Ut(typeof t == "number", 64), this.set(ht.OPACITY, t);
  }
  /**
   * Set the visibility of the layer (`true` or `false`).
   * @param {boolean} visible The visibility of the layer.
   * @observable
   * @api
   */
  setVisible(t) {
    this.set(ht.VISIBLE, t);
  }
  /**
   * Set Z-index of the layer, which is used to order layers before rendering.
   * The default Z-index is 0.
   * @param {number} zindex The z-index of the layer.
   * @observable
   * @api
   */
  setZIndex(t) {
    this.set(ht.Z_INDEX, t);
  }
  /**
   * Clean up.
   */
  disposeInternal() {
    this.state_ && (this.state_.layer = null, this.state_ = null), super.disposeInternal();
  }
}
const sn = {
  ANIMATING: 0,
  INTERACTING: 1
}, Rn = {
  CENTER: "center",
  RESOLUTION: "resolution",
  ROTATION: "rotation"
}, Ip = 256;
function Bl(i, t, e) {
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
      const u = t ? 0 : s[0] * r, l = t ? 0 : s[1] * r, h = a ? a[0] : 0, c = a ? a[1] : 0;
      let f = i[0] + u / 2 + h, g = i[2] - u / 2 + h, p = i[1] + l / 2 + c, d = i[3] - l / 2 + c;
      f > g && (f = (g + f) / 2, g = f), p > d && (p = (d + p) / 2, d = p);
      let _ = ce(n[0], f, g), m = ce(n[1], p, d);
      if (o && e && r) {
        const y = 30 * r;
        _ += -y * Math.log(1 + Math.max(0, f - n[0]) / y) + y * Math.log(1 + Math.max(0, n[0] - g) / y), m += -y * Math.log(1 + Math.max(0, p - n[1]) / y) + y * Math.log(1 + Math.max(0, n[1] - d) / y);
      }
      return [_, m];
    }
  );
}
function Sp(i) {
  return i;
}
function Xu(i, t, e, n) {
  const r = un(t) / e[0], s = Vs(t) / e[1];
  return n ? Math.min(i, Math.max(r, s)) : Math.min(i, Math.min(r, s));
}
function Yu(i, t, e) {
  let n = Math.min(i, t);
  const r = 50;
  return n *= Math.log(1 + r * Math.max(0, i / t - 1)) / r + 1, e && (n = Math.max(n, e), n /= Math.log(1 + r * Math.max(0, e / i - 1)) / r + 1), ce(n, e / 2, t * 2);
}
function Rp(i, t, e, n) {
  return t = t !== void 0 ? t : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(r, s, o, a) {
    if (r !== void 0) {
      const u = i[0], l = i[i.length - 1], h = e ? Xu(
        u,
        e,
        o,
        n
      ) : u;
      if (a)
        return t ? Yu(
          r,
          h,
          l
        ) : ce(r, l, h);
      const c = Math.min(h, r), f = Math.floor(Hh(i, c, s));
      return i[f] > h && f < i.length - 1 ? i[f + 1] : i[f];
    }
  };
}
function wp(i, t, e, n, r, s) {
  return n = n !== void 0 ? n : !0, e = e !== void 0 ? e : 0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(o, a, u, l) {
    if (o !== void 0) {
      const h = r ? Xu(
        t,
        r,
        u,
        s
      ) : t;
      if (l)
        return n ? Yu(
          o,
          h,
          e
        ) : ce(o, e, h);
      const c = 1e-9, f = Math.ceil(
        Math.log(t / h) / Math.log(i) - c
      ), g = -a * (0.5 - c) + 0.5, p = Math.min(h, o), d = Math.floor(
        Math.log(t / p) / Math.log(i) + g
      ), _ = Math.max(f, d), m = t / Math.pow(i, _);
      return ce(m, e, h);
    }
  };
}
function zl(i, t, e, n, r) {
  return e = e !== void 0 ? e : !0, /**
   * @param {number|undefined} resolution Resolution.
   * @param {number} direction Direction.
   * @param {import("./size.js").Size} size Viewport size.
   * @param {boolean} [isMoving] True if an interaction or animation is in progress.
   * @return {number|undefined} Resolution.
   */
  function(s, o, a, u) {
    if (s !== void 0) {
      const l = n ? Xu(
        i,
        n,
        a,
        r
      ) : i;
      return !e || !u ? ce(s, t, l) : Yu(
        s,
        l,
        t
      );
    }
  };
}
function Np(i) {
  if (i !== void 0)
    return 0;
}
function Vl(i) {
  if (i !== void 0)
    return i;
}
function Lp(i) {
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
function Pp(i) {
  return i = i || wg(5), /**
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
function Tp(i) {
  return Math.pow(i, 3);
}
function bp(i) {
  return 1 - Tp(1 - i);
}
function Op(i) {
  return 3 * i * i - 2 * i * i * i;
}
const Xa = 0;
class Xl extends Rr {
  /**
   * @param {ViewOptions} [options] View options.
   */
  constructor(t) {
    super(), this.on, this.once, this.un, t = Object.assign({}, t), this.hints_ = [0, 0], this.animations_ = [], this.updateAnimationKey_, this.projection_ = Du(t.projection, "EPSG:3857"), this.viewportSize_ = [100, 100], this.targetCenter_ = null, this.targetResolution_, this.targetRotation_, this.nextCenter_ = null, this.nextResolution_, this.nextRotation_, this.cancelAnchor_ = void 0, t.projection && sc(), t.center && (t.center = Li(t.center, this.projection_)), t.extent && (t.extent = Os(t.extent, this.projection_)), this.applyOptions_(t);
  }
  /**
   * Set up the view with the given options.
   * @param {ViewOptions} options View options.
   */
  applyOptions_(t) {
    const e = Object.assign({}, t);
    for (const a in Rn)
      delete e[a];
    this.setProperties(e, !0);
    const n = Dp(t);
    this.maxResolution_ = n.maxResolution, this.minResolution_ = n.minResolution, this.zoomFactor_ = n.zoomFactor, this.resolutions_ = t.resolutions, this.padding_ = t.padding, this.minZoom_ = n.minZoom;
    const r = Mp(t), s = n.constraint, o = Ap(t);
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
      r.center && (r = Object.assign({}, r), r.center = Li(
        r.center,
        this.getProjection()
      )), r.anchor && (r = Object.assign({}, r), r.anchor = Li(
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
      const h = arguments[r];
      h.center && this.setCenterInternal(h.center), h.zoom !== void 0 ? this.setZoom(h.zoom) : h.resolution && this.setResolution(h.resolution), h.rotation !== void 0 && this.setRotation(h.rotation);
    }
    if (r === e) {
      n && Do(n, !0);
      return;
    }
    let s = Date.now(), o = this.targetCenter_.slice(), a = this.targetResolution_, u = this.targetRotation_;
    const l = [];
    for (; r < e; ++r) {
      const h = (
        /** @type {AnimationOptions} */
        arguments[r]
      ), c = {
        start: s,
        complete: !1,
        anchor: h.anchor,
        duration: h.duration !== void 0 ? h.duration : 1e3,
        easing: h.easing || Op,
        callback: n
      };
      if (h.center && (c.sourceCenter = o, c.targetCenter = h.center.slice(), o = c.targetCenter), h.zoom !== void 0 ? (c.sourceResolution = a, c.targetResolution = this.getResolutionForZoom(h.zoom), a = c.targetResolution) : h.resolution && (c.sourceResolution = a, c.targetResolution = h.resolution, a = c.targetResolution), h.rotation !== void 0) {
        c.sourceRotation = u;
        const f = eu(h.rotation - u + Math.PI, 2 * Math.PI) - Math.PI;
        c.targetRotation = u + f, u = c.targetRotation;
      }
      Fp(c) ? c.complete = !0 : s += c.duration, l.push(c);
    }
    this.animations_.push(l), this.setHint(sn.ANIMATING, 1), this.updateAnimations_();
  }
  /**
   * Determine if the view is being animated.
   * @return {boolean} The view is being animated.
   * @api
   */
  getAnimating() {
    return this.hints_[sn.ANIMATING] > 0;
  }
  /**
   * Determine if the user is interacting with the view, such as panning or zooming.
   * @return {boolean} The view is being interacted with.
   * @api
   */
  getInteracting() {
    return this.hints_[sn.INTERACTING] > 0;
  }
  /**
   * Cancel any ongoing animations.
   * @api
   */
  cancelAnimations() {
    this.setHint(sn.ANIMATING, -this.hints_[sn.ANIMATING]);
    let t;
    for (let e = 0, n = this.animations_.length; e < n; ++e) {
      const r = this.animations_[e];
      if (r[0].callback && Do(r[0].callback, !1), !t)
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
        let h = u.duration > 0 ? l / u.duration : 1;
        h >= 1 ? (u.complete = !0, h = 1) : s = !1;
        const c = u.easing(h);
        if (u.sourceCenter) {
          const f = u.sourceCenter[0], g = u.sourceCenter[1], p = u.targetCenter[0], d = u.targetCenter[1];
          this.nextCenter_ = u.targetCenter;
          const _ = f + c * (p - f), m = g + c * (d - g);
          this.targetCenter_ = [_, m];
        }
        if (u.sourceResolution && u.targetResolution) {
          const f = c === 1 ? u.targetResolution : u.sourceResolution + c * (u.targetResolution - u.sourceResolution);
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
          const f = c === 1 ? eu(u.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : u.sourceRotation + c * (u.targetRotation - u.sourceRotation);
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
        this.animations_[n] = null, this.setHint(sn.ANIMATING, -1), this.nextCenter_ = null, this.nextResolution_ = NaN, this.nextRotation_ = NaN;
        const o = r[0].callback;
        o && Do(o, !0);
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
    return r !== void 0 && (n = [r[0] - e[0], r[1] - e[1]], Pg(n, t - this.getRotation()), Lg(n, e)), n;
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
    return t && Ll(t, this.getProjection());
  }
  /**
   * Get the view center without transforming to user projection.
   * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
   */
  getCenterInternal() {
    return (
      /** @type {import("./coordinate.js").Coordinate|undefined} */
      this.get(Rn.CENTER)
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
    return uc(e, this.getProjection());
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
    return Ut(r !== void 0, 3), hg(e, n, r, t);
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
      this.get(Rn.RESOLUTION)
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
      Os(t, this.getProjection()),
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
    const n = un(t) / e[0], r = Vs(t) / e[1];
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
      this.get(Rn.ROTATION)
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
      r = Ya(
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
      const s = Hh(this.resolutions_, t, 1);
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
      const e = ce(
        Math.floor(t),
        0,
        this.resolutions_.length - 2
      ), n = this.resolutions_[e] / this.resolutions_[e + 1];
      return this.resolutions_[e] / Math.pow(n, ce(t - e, 0, 1));
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
      Ut(!Mu(t), 25);
      const r = Os(t, this.getProjection());
      n = Dl(r);
    } else if (t.getType() === "Circle") {
      const r = Os(
        t.getExtent(),
        this.getProjection()
      );
      n = Dl(r), n.rotate(this.getRotation(), qr(r));
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
    let a = 1 / 0, u = 1 / 0, l = -1 / 0, h = -1 / 0;
    for (let c = 0, f = s.length; c < f; c += o) {
      const g = s[c] * n - s[c + 1] * r, p = s[c] * r + s[c + 1] * n;
      a = Math.min(a, g), u = Math.min(u, p), l = Math.max(l, g), h = Math.max(h, p);
    }
    return [a, u, l, h];
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
    const l = this.getRotation(), h = Math.sin(l), c = Math.cos(l), f = qr(a);
    f[0] += (r[1] - r[3]) / 2 * u, f[1] += (r[0] - r[2]) / 2 * u;
    const g = f[0] * c - f[1] * h, p = f[1] * c + f[0] * h, d = this.getConstrainedCenter([g, p], u), _ = e.callback ? e.callback : Bs;
    e.duration !== void 0 ? this.animateInternal(
      {
        resolution: u,
        center: d,
        duration: e.duration,
        easing: e.easing
      },
      _
    ) : (this.targetResolution_ = u, this.targetCenter_ = d, this.applyTargetState_(!1, !0), Do(_, !0));
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
      Li(t, this.getProjection()),
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
      Ya(
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
      const a = this.getViewportSizeMinusPadding_(-n), u = Ya(
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
    const e = Ll(this.targetCenter_, this.getProjection());
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
    e = e && Li(e, this.getProjection()), this.adjustResolutionInternal(t, e);
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
    e && (e = Li(e, this.getProjection())), this.adjustRotationInternal(t, e);
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
      t && Li(t, this.getProjection())
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
    this.get(Rn.ROTATION) !== r && this.set(Rn.ROTATION, r), this.get(Rn.RESOLUTION) !== o && (this.set(Rn.RESOLUTION, o), this.set("zoom", this.getZoom(), !0)), (!a || !this.get(Rn.CENTER) || !Ho(this.get(Rn.CENTER), a)) && this.set(Rn.CENTER, a), this.getAnimating() && !t && this.cancelAnimations(), this.cancelAnchor_ = void 0;
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
    n = n || (t === 0 ? this.cancelAnchor_ : void 0), this.cancelAnchor_ = void 0, (this.getResolution() !== a || this.getRotation() !== s || !this.getCenterInternal() || !Ho(this.getCenterInternal(), u)) && (this.getAnimating() && this.cancelAnimations(), this.animateInternal({
      rotation: s,
      center: u,
      resolution: a,
      duration: t,
      easing: bp,
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
    this.resolveConstraints(0), this.setHint(sn.INTERACTING, 1);
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
    n = n && Li(n, this.getProjection()), this.endInteractionInternal(t, e, n);
  }
  /**
   * Notify the View that an interaction has ended. The view state will be resolved
   * to a stable one if needed (depending on its constraints).
   * @param {number} [duration] Animation duration in ms.
   * @param {number} [resolutionDirection] Which direction to zoom.
   * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
   */
  endInteractionInternal(t, e, n) {
    this.getInteracting() && (this.setHint(sn.INTERACTING, -1), this.resolveConstraints(t, e, n));
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
function Do(i, t) {
  setTimeout(function() {
    i(t);
  }, 0);
}
function Mp(i) {
  if (i.extent !== void 0) {
    const e = i.smoothExtentConstraint !== void 0 ? i.smoothExtentConstraint : !0;
    return Bl(i.extent, i.constrainOnlyCenter, e);
  }
  const t = Du(i.projection, "EPSG:3857");
  if (i.multiWorld !== !0 && t.isGlobal()) {
    const e = t.getExtent().slice();
    return e[0] = -1 / 0, e[2] = 1 / 0, Bl(e, !1, !1);
  }
  return Sp;
}
function Dp(i) {
  let t, e, n, o = i.minZoom !== void 0 ? i.minZoom : Xa, a = i.maxZoom !== void 0 ? i.maxZoom : 28;
  const u = i.zoomFactor !== void 0 ? i.zoomFactor : 2, l = i.multiWorld !== void 0 ? i.multiWorld : !1, h = i.smoothResolutionConstraint !== void 0 ? i.smoothResolutionConstraint : !0, c = i.showFullExtent !== void 0 ? i.showFullExtent : !1, f = Du(i.projection, "EPSG:3857"), g = f.getExtent();
  let p = i.constrainOnlyCenter, d = i.extent;
  if (!l && !d && f.isGlobal() && (p = !1, d = g), i.resolutions !== void 0) {
    const _ = i.resolutions;
    e = _[o], n = _[a] !== void 0 ? _[a] : _[_.length - 1], i.constrainResolution ? t = Rp(
      _,
      h,
      !p && d,
      c
    ) : t = zl(
      e,
      n,
      h,
      !p && d,
      c
    );
  } else {
    const m = (g ? Math.max(un(g), Vs(g)) : (
      // use an extent that can fit the whole world if need be
      360 * ic.degrees / f.getMetersPerUnit()
    )) / Ip / Math.pow(2, Xa), y = m / Math.pow(2, 28 - Xa);
    e = i.maxResolution, e !== void 0 ? o = 0 : e = m / Math.pow(u, o), n = i.minResolution, n === void 0 && (i.maxZoom !== void 0 ? i.maxResolution !== void 0 ? n = e / Math.pow(u, a) : n = m / Math.pow(u, a) : n = y), a = o + Math.floor(
      Math.log(e / n) / Math.log(u)
    ), n = e / Math.pow(u, a - o), i.constrainResolution ? t = wp(
      u,
      e,
      n,
      h,
      !p && d,
      c
    ) : t = zl(
      e,
      n,
      h,
      !p && d,
      c
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
function Ap(i) {
  if (i.enableRotation !== void 0 ? i.enableRotation : !0) {
    const e = i.constrainRotation;
    return e === void 0 || e === !0 ? Pp() : e === !1 ? Vl : typeof e == "number" ? Lp(e) : Vl;
  }
  return Np;
}
function Fp(i) {
  return !(i.sourceCenter && i.targetCenter && !Ho(i.sourceCenter, i.targetCenter) || i.sourceResolution !== i.targetResolution || i.sourceRotation !== i.targetRotation);
}
function Ya(i, t, e, n, r) {
  const s = Math.cos(-r);
  let o = Math.sin(-r), a = i[0] * s - i[1] * o, u = i[1] * s + i[0] * o;
  a += (t[0] / 2 - e[0]) * n, u += (e[1] - t[1] / 2) * n, o = -o;
  const l = a * s - u * o, h = u * s + a * o;
  return [l, h];
}
class kp extends Cp {
  /**
   * @param {Options<SourceType>} options Layer options.
   */
  constructor(t) {
    const e = Object.assign({}, t);
    delete e.source, super(e), this.on, this.once, this.un, this.mapPrecomposeKey_ = null, this.mapRenderKey_ = null, this.sourceChangeKey_ = null, this.renderer_ = null, this.sourceReady_ = !1, this.rendered = !1, t.render && (this.render = t.render), t.map && this.setMap(t.map), this.addChangeListener(
      ht.SOURCE,
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
      this.get(ht.SOURCE) || null
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
    this.sourceChangeKey_ && ($n(this.sourceChangeKey_), this.sourceChangeKey_ = null), this.sourceReady_ = !1;
    const t = this.getSource();
    t && (this.sourceChangeKey_ = Qn(
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
    !t && n && (t = n.getView()), t instanceof Xl ? e = {
      viewState: t.getState(),
      extent: t.calculateExtent()
    } : e = t, !e.layerStatesArray && n && (e.layerStatesArray = n.getLayerGroup().getLayerStatesArray());
    let r;
    e.layerStatesArray ? r = e.layerStatesArray.find(
      (o) => o.layer === this
    ) : r = this.getLayerState();
    const s = this.getExtent();
    return Gp(r, e.viewState) && (!s || Pn(s, e.extent));
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
    const r = t instanceof Xl ? t.getViewStateAndExtent() : t;
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
    t || this.unrender(), this.set(ht.MAP, t);
  }
  /**
   * For use inside the library only.
   * @return {import("../Map.js").default|null} Map.
   */
  getMapInternal() {
    return this.get(ht.MAP);
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
    this.mapPrecomposeKey_ && ($n(this.mapPrecomposeKey_), this.mapPrecomposeKey_ = null), t || this.changed(), this.mapRenderKey_ && ($n(this.mapRenderKey_), this.mapRenderKey_ = null), t && (this.mapPrecomposeKey_ = Qn(
      t,
      Us.PRECOMPOSE,
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
    ), this.mapRenderKey_ = Qn(this, cn.CHANGE, t.render, t), this.changed());
  }
  /**
   * Set the layer source.
   * @param {SourceType|null} source The layer source.
   * @observable
   * @api
   */
  setSource(t) {
    this.set(ht.SOURCE, t);
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
function Gp(i, t) {
  if (!i.visible)
    return !1;
  const e = t.resolution;
  if (e < i.minResolution || e >= i.maxResolution)
    return !1;
  const n = t.zoom;
  return n > i.minZoom && n <= i.maxZoom;
}
function Bp(i, t, e, n, r) {
  Nc(i, t, e || 0, n || i.length - 1, r || zp);
}
function Nc(i, t, e, n, r) {
  for (; n > e; ) {
    if (n - e > 600) {
      var s = n - e + 1, o = t - e + 1, a = Math.log(s), u = 0.5 * Math.exp(2 * a / 3), l = 0.5 * Math.sqrt(a * u * (s - u) / s) * (o - s / 2 < 0 ? -1 : 1), h = Math.max(e, Math.floor(t - o * u / s + l)), c = Math.min(n, Math.floor(t + (s - o) * u / s + l));
      Nc(i, t, h, c, r);
    }
    var f = i[t], g = e, p = n;
    for (Ls(i, e, t), r(i[n], f) > 0 && Ls(i, e, n); g < p; ) {
      for (Ls(i, g, p), g++, p--; r(i[g], f) < 0; )
        g++;
      for (; r(i[p], f) > 0; )
        p--;
    }
    r(i[e], f) === 0 ? Ls(i, e, p) : (p++, Ls(i, p, n)), p <= t && (e = p + 1), t <= p && (n = p - 1);
  }
}
function Ls(i, t, e) {
  var n = i[t];
  i[t] = i[e], i[e] = n;
}
function zp(i, t) {
  return i < t ? -1 : i > t ? 1 : 0;
}
let Lc = class {
  constructor(t = 9) {
    this._maxEntries = Math.max(4, t), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(t) {
    let e = this.data;
    const n = [];
    if (!Fo(t, e))
      return n;
    const r = this.toBBox, s = [];
    for (; e; ) {
      for (let o = 0; o < e.children.length; o++) {
        const a = e.children[o], u = e.leaf ? r(a) : a;
        Fo(t, u) && (e.leaf ? n.push(a) : Wa(t, u) ? this._all(a, n) : s.push(a));
      }
      e = s.pop();
    }
    return n;
  }
  collides(t) {
    let e = this.data;
    if (!Fo(t, e))
      return !1;
    const n = [];
    for (; e; ) {
      for (let r = 0; r < e.children.length; r++) {
        const s = e.children[r], o = e.leaf ? this.toBBox(s) : s;
        if (Fo(t, o)) {
          if (e.leaf || Wa(t, o))
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
    return this.data = Gr([]), this;
  }
  remove(t, e) {
    if (!t)
      return this;
    let n = this.data;
    const r = this.toBBox(t), s = [], o = [];
    let a, u, l;
    for (; n || s.length; ) {
      if (n || (n = s.pop(), u = s[s.length - 1], a = o.pop(), l = !0), n.leaf) {
        const h = Vp(t, n.children, e);
        if (h !== -1)
          return n.children.splice(h, 1), s.push(n), this._condense(s), this;
      }
      !l && !n.leaf && Wa(n, r) ? (s.push(n), o.push(a), a = 0, u = n, n = n.children[0]) : u ? (a++, n = u.children[a], l = !1) : n = null;
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
      return a = Gr(t.slice(e, n + 1)), Ar(a, this.toBBox), a;
    r || (r = Math.ceil(Math.log(s) / Math.log(o)), o = Math.ceil(s / Math.pow(o, r - 1))), a = Gr([]), a.leaf = !1, a.height = r;
    const u = Math.ceil(s / o), l = u * Math.ceil(Math.sqrt(o));
    Yl(t, e, n, l, this.compareMinX);
    for (let h = e; h <= n; h += l) {
      const c = Math.min(h + l - 1, n);
      Yl(t, h, c, u, this.compareMinY);
      for (let f = h; f <= c; f += u) {
        const g = Math.min(f + u - 1, c);
        a.children.push(this._build(t, f, g, r - 1));
      }
    }
    return Ar(a, this.toBBox), a;
  }
  _chooseSubtree(t, e, n, r) {
    for (; r.push(e), !(e.leaf || r.length - 1 === n); ) {
      let s = 1 / 0, o = 1 / 0, a;
      for (let u = 0; u < e.children.length; u++) {
        const l = e.children[u], h = Ua(l), c = Up(t, l) - h;
        c < o ? (o = c, s = h < s ? h : s, a = l) : c === o && h < s && (s = h, a = l);
      }
      e = a || e.children[0];
    }
    return e;
  }
  _insert(t, e, n) {
    const r = n ? t : this.toBBox(t), s = [], o = this._chooseSubtree(r, this.data, e, s);
    for (o.children.push(t), Ds(o, r); e >= 0 && s[e].children.length > this._maxEntries; )
      this._split(s, e), e--;
    this._adjustParentBBoxes(r, s, e);
  }
  // split overflowed node into two
  _split(t, e) {
    const n = t[e], r = n.children.length, s = this._minEntries;
    this._chooseSplitAxis(n, s, r);
    const o = this._chooseSplitIndex(n, s, r), a = Gr(n.children.splice(o, n.children.length - o));
    a.height = n.height, a.leaf = n.leaf, Ar(n, this.toBBox), Ar(a, this.toBBox), e ? t[e - 1].children.push(a) : this._splitRoot(n, a);
  }
  _splitRoot(t, e) {
    this.data = Gr([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, Ar(this.data, this.toBBox);
  }
  _chooseSplitIndex(t, e, n) {
    let r, s = 1 / 0, o = 1 / 0;
    for (let a = e; a <= n - e; a++) {
      const u = Ms(t, 0, a, this.toBBox), l = Ms(t, a, n, this.toBBox), h = Wp(u, l), c = Ua(u) + Ua(l);
      h < s ? (s = h, r = a, o = c < o ? c : o) : h === s && c < o && (o = c, r = a);
    }
    return r || n - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(t, e, n) {
    const r = t.leaf ? this.compareMinX : Xp, s = t.leaf ? this.compareMinY : Yp, o = this._allDistMargin(t, e, n, r), a = this._allDistMargin(t, e, n, s);
    o < a && t.children.sort(r);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(t, e, n, r) {
    t.children.sort(r);
    const s = this.toBBox, o = Ms(t, 0, e, s), a = Ms(t, n - e, n, s);
    let u = Ao(o) + Ao(a);
    for (let l = e; l < n - e; l++) {
      const h = t.children[l];
      Ds(o, t.leaf ? s(h) : h), u += Ao(o);
    }
    for (let l = n - e - 1; l >= e; l--) {
      const h = t.children[l];
      Ds(a, t.leaf ? s(h) : h), u += Ao(a);
    }
    return u;
  }
  _adjustParentBBoxes(t, e, n) {
    for (let r = n; r >= 0; r--)
      Ds(e[r], t);
  }
  _condense(t) {
    for (let e = t.length - 1, n; e >= 0; e--)
      t[e].children.length === 0 ? e > 0 ? (n = t[e - 1].children, n.splice(n.indexOf(t[e]), 1)) : this.clear() : Ar(t[e], this.toBBox);
  }
};
function Vp(i, t, e) {
  if (!e)
    return t.indexOf(i);
  for (let n = 0; n < t.length; n++)
    if (e(i, t[n]))
      return n;
  return -1;
}
function Ar(i, t) {
  Ms(i, 0, i.children.length, t, i);
}
function Ms(i, t, e, n, r) {
  r || (r = Gr(null)), r.minX = 1 / 0, r.minY = 1 / 0, r.maxX = -1 / 0, r.maxY = -1 / 0;
  for (let s = t; s < e; s++) {
    const o = i.children[s];
    Ds(r, i.leaf ? n(o) : o);
  }
  return r;
}
function Ds(i, t) {
  return i.minX = Math.min(i.minX, t.minX), i.minY = Math.min(i.minY, t.minY), i.maxX = Math.max(i.maxX, t.maxX), i.maxY = Math.max(i.maxY, t.maxY), i;
}
function Xp(i, t) {
  return i.minX - t.minX;
}
function Yp(i, t) {
  return i.minY - t.minY;
}
function Ua(i) {
  return (i.maxX - i.minX) * (i.maxY - i.minY);
}
function Ao(i) {
  return i.maxX - i.minX + (i.maxY - i.minY);
}
function Up(i, t) {
  return (Math.max(t.maxX, i.maxX) - Math.min(t.minX, i.minX)) * (Math.max(t.maxY, i.maxY) - Math.min(t.minY, i.minY));
}
function Wp(i, t) {
  const e = Math.max(i.minX, t.minX), n = Math.max(i.minY, t.minY), r = Math.min(i.maxX, t.maxX), s = Math.min(i.maxY, t.maxY);
  return Math.max(0, r - e) * Math.max(0, s - n);
}
function Wa(i, t) {
  return i.minX <= t.minX && i.minY <= t.minY && t.maxX <= i.maxX && t.maxY <= i.maxY;
}
function Fo(i, t) {
  return t.minX <= i.maxX && t.minY <= i.maxY && t.maxX >= i.minX && t.maxY >= i.minY;
}
function Gr(i) {
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
function Yl(i, t, e, n, r) {
  const s = [t, e];
  for (; s.length; ) {
    if (e = s.pop(), t = s.pop(), e - t <= n)
      continue;
    const o = t + Math.ceil((e - t) / n / 2) * n;
    Bp(i, o, t, e, r), s.push(t, o, o, e);
  }
}
class qp {
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
    const r = Ul(t, e, n);
    return r in this.cache_ ? this.cache_[r] : null;
  }
  /**
   * @param {string} src Src.
   * @param {?string} crossOrigin Cross origin.
   * @param {import("../color.js").Color} color Color.
   * @param {import("./IconImage.js").default} iconImage Icon image.
   */
  set(t, e, n, r) {
    const s = Ul(t, e, n);
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
function Ul(i, t, e) {
  const n = e ? Cc(e) : "null";
  return t + ":" + i + ":" + n;
}
const Wl = new qp();
function Hp(i, t, e) {
  const n = (
    /** @type {HTMLImageElement} */
    i
  );
  let r = !0, s = !1, o = !1;
  const a = [
    Wo(n, cn.LOAD, function() {
      o = !0, s || t();
    })
  ];
  return n.src && Zf ? (s = !0, n.decode().then(function() {
    r && t();
  }).catch(function(u) {
    r && (o ? t() : e());
  })) : a.push(Wo(n, cn.ERROR, e)), function() {
    r = !1, a.forEach($n);
  };
}
let Ps = null;
class jp extends jh {
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
    if (this.tainted_ === void 0 && this.imageState_ === Ot.LOADED) {
      Ps || (Ps = Mn(1, 1, void 0, {
        willReadFrequently: !0
      })), Ps.drawImage(this.image_, 0, 0);
      try {
        Ps.getImageData(0, 0, 1, 1), this.tainted_ = !1;
      } catch {
        Ps = null, this.tainted_ = !0;
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
    this.imageState_ = Ot.ERROR, this.unlistenImage_(), this.dispatchChangeEvent_();
  }
  /**
   * @private
   */
  handleImageLoad_() {
    this.imageState_ = Ot.LOADED, this.size_ ? (this.image_.width = this.size_[0], this.image_.height = this.size_[1]) : this.size_ = [this.image_.width, this.image_.height], this.unlistenImage_(), this.dispatchChangeEvent_();
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
        const t = this.size_[0], e = this.size_[1], n = Mn(t, e);
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
    if (this.imageState_ === Ot.IDLE) {
      this.image_ || this.initializeImage_(), this.imageState_ = Ot.LOADING;
      try {
        this.image_.src = this.src_;
      } catch {
        this.handleImageError_();
      }
      this.unlisten_ = Hp(
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
    if (!this.color_ || this.canvas_[t] || this.imageState_ !== Ot.LOADED)
      return;
    const e = this.image_, n = document.createElement("canvas");
    n.width = Math.ceil(e.width * t), n.height = Math.ceil(e.height * t);
    const r = n.getContext("2d");
    r.scale(t, t), r.drawImage(e, 0, 0), r.globalCompositeOperation = "multiply", r.fillStyle = Cc(this.color_), r.fillRect(0, 0, n.width / t, n.height / t), r.globalCompositeOperation = "destination-in", r.drawImage(e, 0, 0), this.canvas_[t] = n;
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
function Zp(i, t, e, n, r, s) {
  let o = Wl.get(t, n, s);
  return o || (o = new jp(i, t, e, n, r, s), Wl.set(t, n, s, o)), o;
}
function ql(i, t, e, n) {
  return e !== void 0 && n !== void 0 ? [e / i, n / t] : e !== void 0 ? e / i : n !== void 0 ? n / t : 1;
}
class mo extends ma {
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
    const u = t.src !== void 0 ? Ot.IDLE : Ot.LOADED;
    if (this.color_ = t.color !== void 0 ? Jo(t.color) : null, this.iconImage_ = Zp(
      o,
      /** @type {string} */
      a,
      this.imgSize_ !== void 0 ? this.imgSize_ : null,
      this.crossOrigin_,
      u,
      this.color_
    ), this.offset_ = t.offset !== void 0 ? t.offset : [0, 0], this.offsetOrigin_ = t.offsetOrigin !== void 0 ? t.offsetOrigin : "top-left", this.origin_ = null, this.size_ = t.size !== void 0 ? t.size : null, t.width !== void 0 || t.height !== void 0) {
      let l, h;
      if (t.size)
        [l, h] = t.size;
      else {
        const c = this.getImage(1);
        if (c instanceof HTMLCanvasElement || c.src && c.complete)
          l = c.width, h = c.height;
        else {
          this.initialOptions_ = t;
          const f = () => {
            if (this.unlistenImageChange(f), !this.initialOptions_)
              return;
            const g = this.iconImage_.getSize();
            this.setScale(
              ql(
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
        ql(l, h, t.width, t.height)
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
    return this.initialOptions_ ? (e = this.initialOptions_.width, n = this.initialOptions_.height) : (t = this.getScale(), t = Array.isArray(t) ? t.slice() : t), new mo({
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
    if (this.iconImage_.getImageState() == Ot.LOADED)
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
    if (this.iconImage_.getImageState() == Ot.LOADED)
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
function Hl(i) {
  return new cr({
    fill: Zs(i, ""),
    stroke: Ks(i, ""),
    text: Kp(i),
    image: Jp(i)
  });
}
function Zs(i, t) {
  const e = i[t + "fill-color"];
  if (e)
    return e === "none" ? null : new hr({ color: e });
}
function Ks(i, t) {
  const e = i[t + "stroke-width"], n = i[t + "stroke-color"];
  if (!(!e && !n))
    return new jr({
      width: e,
      color: n,
      lineCap: i[t + "stroke-line-cap"],
      lineJoin: i[t + "stroke-line-join"],
      lineDash: i[t + "stroke-line-dash"],
      lineDashOffset: i[t + "stroke-line-dash-offset"],
      miterLimit: i[t + "stroke-miter-limit"]
    });
}
function Kp(i) {
  const t = i["text-value"];
  return t ? new xa({
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
    fill: Zs(i, "text-"),
    backgroundFill: Zs(i, "text-background-"),
    stroke: Ks(i, "text-"),
    backgroundStroke: Ks(i, "text-background-")
  }) : void 0;
}
function Jp(i) {
  const t = i["icon-src"], e = i["icon-img"];
  if (t || e)
    return new mo({
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
    return new ya({
      points: n,
      fill: Zs(i, s),
      stroke: Ks(i, s),
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
    return new va({
      radius: r,
      fill: Zs(i, s),
      stroke: Ks(i, s),
      displacement: i["circle-displacement"],
      scale: i["circle-scale"],
      rotation: i["circle-rotation"],
      rotateWithView: i["circle-rotate-with-view"],
      declutterMode: i["circle-declutter-mode"]
    });
  }
}
const jl = {
  RENDER_ORDER: "renderOrder"
};
class Qp extends kp {
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
      this.get(jl.RENDER_ORDER)
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
    t.declutterTree || (t.declutterTree = new Lc(9)), this.getRenderer().renderDeclutter(t);
  }
  /**
   * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
   *     Render order.
   */
  setRenderOrder(t) {
    this.set(jl.RENDER_ORDER, t);
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
      e = xp;
    else if (t === null)
      e = null;
    else if (typeof t == "function")
      e = t;
    else if (t instanceof cr)
      e = t;
    else if (Array.isArray(t)) {
      const n = t.length, r = new Array(n);
      for (let s = 0; s < n; ++s) {
        const o = t[s];
        o instanceof cr ? r[s] = o : r[s] = Hl(o);
      }
      e = r;
    } else
      e = Hl(t);
    this.style_ = e, this.styleFunction_ = t === null ? void 0 : vp(this.style_), this.changed();
  }
}
const W = {
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
}, ko = [W.FILL], ki = [W.STROKE], sr = [W.BEGIN_PATH], Zl = [W.CLOSE_PATH];
class Pc {
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
class yo extends Pc {
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
      r[0] = t[a], r[1] = t[a + 1], rg(n, r) && (s[o++] = r[0], s[o++] = r[1]);
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
    let h = t[e], c = t[e + 1];
    const f = this.tmpCoordinate_;
    let g = !0, p, d, _;
    for (p = e + r; p < n; p += r)
      f[0] = t[p], f[1] = t[p + 1], _ = $a(l, f), _ !== d ? (g && (a[u++] = h, a[u++] = c, g = !1), a[u++] = f[0], a[u++] = f[1]) : _ === Zt.INTERSECTING ? (a[u++] = f[0], a[u++] = f[1], g = !1) : g = !0, h = f[0], c = f[1], d = _;
    return (s && g || p === e + r) && (a[u++] = h, a[u++] = c), u;
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
    let u, l, h, c, f;
    switch (s) {
      case "MultiPolygon":
        u = /** @type {import("../../geom/MultiPolygon.js").default} */
        t.getOrientedFlatCoordinates(), c = [];
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
          ), c.push(_);
        }
        this.instructions.push([
          W.CUSTOM,
          a,
          c,
          t,
          n,
          iu
        ]), this.hitDetectionInstructions.push([
          W.CUSTOM,
          a,
          c,
          t,
          r || n,
          iu
        ]);
        break;
      case "Polygon":
      case "MultiLineString":
        h = [], u = s == "Polygon" ? (
          /** @type {import("../../geom/Polygon.js").default} */
          t.getOrientedFlatCoordinates()
        ) : t.getFlatCoordinates(), f = this.drawCustomCoordinates_(
          u,
          0,
          /** @type {import("../../geom/Polygon.js").default|import("../../geom/MultiLineString.js").default} */
          t.getEnds(),
          o,
          h
        ), this.instructions.push([
          W.CUSTOM,
          a,
          h,
          t,
          n,
          Xs
        ]), this.hitDetectionInstructions.push([
          W.CUSTOM,
          a,
          h,
          t,
          r || n,
          Xs
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
          W.CUSTOM,
          a,
          l,
          t,
          n,
          Fi
        ]), this.hitDetectionInstructions.push([
          W.CUSTOM,
          a,
          l,
          t,
          r || n,
          Fi
        ]);
        break;
      case "MultiPoint":
        u = t.getFlatCoordinates(), l = this.appendFlatPointCoordinates(u, o), l > a && (this.instructions.push([
          W.CUSTOM,
          a,
          l,
          t,
          n,
          Fi
        ]), this.hitDetectionInstructions.push([
          W.CUSTOM,
          a,
          l,
          t,
          r || n,
          Fi
        ]));
        break;
      case "Point":
        u = t.getFlatCoordinates(), this.coordinates.push(u[0], u[1]), l = this.coordinates.length, this.instructions.push([
          W.CUSTOM,
          a,
          l,
          t,
          n
        ]), this.hitDetectionInstructions.push([
          W.CUSTOM,
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
      W.BEGIN_GEOMETRY,
      e,
      0,
      t
    ], this.instructions.push(this.beginGeometryInstruction1_), this.beginGeometryInstruction2_ = [
      W.BEGIN_GEOMETRY,
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
      r[0], s == W.END_GEOMETRY ? o = e : s == W.BEGIN_GEOMETRY && (r[2] = e, Vf(this.hitDetectionInstructions, o, e), o = -1);
  }
  /**
   * @param {import("../../style/Fill.js").default} fillStyle Fill style.
   * @param {import("../../style/Stroke.js").default} strokeStyle Stroke style.
   */
  setFillStrokeStyle(t, e) {
    const n = this.state;
    if (t) {
      const r = t.getColor();
      n.fillStyle = Kn(
        r || Pe
      );
    } else
      n.fillStyle = void 0;
    if (e) {
      const r = e.getColor();
      n.strokeStyle = Kn(
        r || qs
      );
      const s = e.getLineCap();
      n.lineCap = s !== void 0 ? s : Qo;
      const o = e.getLineDash();
      n.lineDash = o ? o.slice() : di;
      const a = e.getLineDashOffset();
      n.lineDashOffset = a || _i;
      const u = e.getLineJoin();
      n.lineJoin = u !== void 0 ? u : Zr;
      const l = e.getWidth();
      n.lineWidth = l !== void 0 ? l : js;
      const h = e.getMiterLimit();
      n.miterLimit = h !== void 0 ? h : Ws, n.lineWidth > this.maxLineWidth && (this.maxLineWidth = n.lineWidth, this.bufferedMaxExtent_ = null);
    } else
      n.strokeStyle = void 0, n.lineCap = void 0, n.lineDash = null, n.lineDashOffset = void 0, n.lineJoin = void 0, n.lineWidth = void 0, n.miterLimit = void 0;
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   * @return {Array<*>} Fill instruction.
   */
  createFill(t) {
    const e = t.fillStyle, n = [W.SET_FILL_STYLE, e];
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
      W.SET_STROKE_STYLE,
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
    (t.currentStrokeStyle != n || t.currentLineCap != r || s != t.currentLineDash && !ms(t.currentLineDash, s) || t.currentLineDashOffset != o || t.currentLineJoin != a || t.currentLineWidth != u || t.currentMiterLimit != l) && (n !== void 0 && e.call(this, t), t.currentStrokeStyle = n, t.currentLineCap = r, t.currentLineDash = s, t.currentLineDashOffset = o, t.currentLineJoin = a, t.currentLineWidth = u, t.currentMiterLimit = l);
  }
  /**
   * @param {import("../../Feature.js").FeatureLike} feature Feature.
   */
  endGeometry(t) {
    this.beginGeometryInstruction1_[2] = this.instructions.length, this.beginGeometryInstruction1_ = null, this.beginGeometryInstruction2_[2] = this.hitDetectionInstructions.length, this.beginGeometryInstruction2_ = null;
    const e = [W.END_GEOMETRY, t];
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
    if (!this.bufferedMaxExtent_ && (this.bufferedMaxExtent_ = ig(this.maxExtent), this.maxLineWidth > 0)) {
      const t = this.resolution * (this.maxLineWidth + 1) / 2;
      bu(this.bufferedMaxExtent_, t, this.bufferedMaxExtent_);
    }
    return this.bufferedMaxExtent_;
  }
}
class $p extends yo {
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
      W.DRAW_IMAGE,
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
      W.DRAW_IMAGE,
      s,
      o,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
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
      W.DRAW_IMAGE,
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
      W.DRAW_IMAGE,
      s,
      o,
      this.hitDetectionImage_,
      // Remaining arguments to DRAW_IMAGE are in alphabetical order
      this.anchorX_,
      this.anchorY_,
      this.height_,
      1,
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
class td extends yo {
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
      W.MOVE_TO_LINE_TO,
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
        W.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        di,
        _i
      ],
      sr
    );
    const o = t.getFlatCoordinates(), a = t.getStride();
    this.drawFlatCoordinates_(
      o,
      0,
      o.length,
      a
    ), this.hitDetectionInstructions.push(ki), this.endGeometry(e);
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
        W.SET_STROKE_STYLE,
        n.strokeStyle,
        n.lineWidth,
        n.lineCap,
        n.lineJoin,
        n.miterLimit,
        di,
        _i
      ],
      sr
    );
    const o = t.getEnds(), a = t.getFlatCoordinates(), u = t.getStride();
    let l = 0;
    for (let h = 0, c = o.length; h < c; ++h)
      l = this.drawFlatCoordinates_(
        a,
        l,
        /** @type {number} */
        o[h],
        u
      );
    this.hitDetectionInstructions.push(ki), this.endGeometry(e);
  }
  /**
   * @return {import("../canvas.js").SerializableInstructions} the serializable instructions.
   */
  finish() {
    const t = this.state;
    return t.lastStroke != null && t.lastStroke != this.coordinates.length && this.instructions.push(ki), this.reverseHitDetectionInstructions(), this.state = null, super.finish();
  }
  /**
   * @param {import("../canvas.js").FillStrokeState} state State.
   */
  applyStroke(t) {
    t.lastStroke != null && t.lastStroke != this.coordinates.length && (this.instructions.push(ki), t.lastStroke = this.coordinates.length), t.lastStroke = 0, super.applyStroke(t), this.instructions.push(sr);
  }
}
class Kl extends yo {
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
    this.instructions.push(sr), this.hitDetectionInstructions.push(sr);
    for (let l = 0; l < u; ++l) {
      const h = n[l], c = this.coordinates.length, f = this.appendFlatLineCoordinates(
        t,
        e,
        h,
        r,
        !0,
        !a
      ), g = [
        W.MOVE_TO_LINE_TO,
        c,
        f
      ];
      this.instructions.push(g), this.hitDetectionInstructions.push(g), a && (this.instructions.push(Zl), this.hitDetectionInstructions.push(Zl)), e = h;
    }
    return o && (this.instructions.push(ko), this.hitDetectionInstructions.push(ko)), a && (this.instructions.push(ki), this.hitDetectionInstructions.push(ki)), e;
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
      W.SET_FILL_STYLE,
      Pe
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      W.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      di,
      _i
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
    const l = [W.CIRCLE, u];
    this.instructions.push(sr, l), this.hitDetectionInstructions.push(sr, l), n.fillStyle !== void 0 && (this.instructions.push(ko), this.hitDetectionInstructions.push(ko)), n.strokeStyle !== void 0 && (this.instructions.push(ki), this.hitDetectionInstructions.push(ki)), this.endGeometry(e);
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
      W.SET_FILL_STYLE,
      Pe
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      W.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      di,
      _i
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
      W.SET_FILL_STYLE,
      Pe
    ]), n.strokeStyle !== void 0 && this.hitDetectionInstructions.push([
      W.SET_STROKE_STYLE,
      n.strokeStyle,
      n.lineWidth,
      n.lineCap,
      n.lineJoin,
      n.miterLimit,
      di,
      _i
    ]);
    const o = t.getEndss(), a = t.getOrientedFlatCoordinates(), u = t.getStride();
    let l = 0;
    for (let h = 0, c = o.length; h < c; ++h)
      l = this.drawFlatCoordinatess_(
        a,
        l,
        o[h],
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
        e[n] = nr(e[n], t);
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
function ed(i, t, e, n, r) {
  const s = [];
  let o = e, a = 0, u = t.slice(e, 2);
  for (; a < i && o + r < n; ) {
    const [l, h] = u.slice(-2), c = t[o + r], f = t[o + r + 1], g = Math.sqrt(
      (c - l) * (c - l) + (f - h) * (f - h)
    );
    if (a += g, a >= i) {
      const p = (i - a + g) / g, d = Ve(l, c, p), _ = Ve(h, f, p);
      u.push(d, _), s.push(u), u = [d, _], a == i && (o += r), a = 0;
    } else if (a < i)
      u.push(
        t[o + r],
        t[o + r + 1]
      ), o += r;
    else {
      const p = g - a, d = Ve(l, c, p / g), _ = Ve(h, f, p / g);
      u.push(d, _), s.push(u), u = [d, _], a = 0, o += r;
    }
  }
  return a > 0 && s.push(u), s;
}
function nd(i, t, e, n, r) {
  let s = e, o = e, a = 0, u = 0, l = e, h, c, f, g, p, d, _, m, y, x;
  for (c = e; c < n; c += r) {
    const I = t[c], S = t[c + 1];
    p !== void 0 && (y = I - p, x = S - d, g = Math.sqrt(y * y + x * x), _ !== void 0 && (u += f, h = Math.acos((_ * y + m * x) / (f * g)), h > i && (u > a && (a = u, s = l, o = c), u = 0, l = c - r)), f = g, _ = y, m = x), p = I, d = S;
  }
  return u += g, u > a ? [l, c] : [s, o];
}
const ea = {
  left: 0,
  center: 0.5,
  right: 1,
  top: 0,
  middle: 0.5,
  hanging: 0.2,
  alphabetic: 0.8,
  ideographic: 0.8,
  bottom: 1
};
class id extends yo {
  /**
   * @param {number} tolerance Tolerance.
   * @param {import("../../extent.js").Extent} maxExtent Maximum extent.
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   */
  constructor(t, e, n, r) {
    super(t, e, n, r), this.labels_ = null, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = void 0, this.textRotation_ = 0, this.textFillState_ = null, this.fillStates = {}, this.fillStates[Pe] = { fillStyle: Pe }, this.textStrokeState_ = null, this.strokeStates = {}, this.textState_ = /** @type {import("../canvas.js").TextState} */
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
    let l = null, h = t.getStride();
    if (s.placement === "line" && (u == "LineString" || u == "MultiLineString" || u == "Polygon" || u == "MultiPolygon")) {
      if (!Pn(this.getBufferedMaxExtent(), t.getExtent()))
        return;
      let c;
      if (l = t.getFlatCoordinates(), u == "LineString")
        c = [l.length];
      else if (u == "MultiLineString")
        c = /** @type {import("../../geom/MultiLineString.js").default} */
        t.getEnds();
      else if (u == "Polygon")
        c = /** @type {import("../../geom/Polygon.js").default} */
        t.getEnds().slice(0, 1);
      else if (u == "MultiPolygon") {
        const d = (
          /** @type {import("../../geom/MultiPolygon.js").default} */
          t.getEndss()
        );
        c = [];
        for (let _ = 0, m = d.length; _ < m; ++_)
          c.push(d[_][0]);
      }
      this.beginGeometry(t, e);
      const f = s.repeat, g = f ? void 0 : s.textAlign;
      let p = 0;
      for (let d = 0, _ = c.length; d < _; ++d) {
        let m;
        f ? m = ed(
          f * this.resolution,
          l,
          p,
          c[d],
          h
        ) : m = [l.slice(p, c[d])];
        for (let y = 0, x = m.length; y < x; ++y) {
          const I = m[y];
          let S = 0, w = I.length;
          if (g == null) {
            const L = nd(
              s.maxAngle,
              I,
              0,
              I.length,
              2
            );
            S = L[0], w = L[1];
          }
          for (let L = S; L < w; L += h)
            o.push(I[L], I[L + 1]);
          const O = o.length;
          p = c[d], this.drawChars_(a, O), a = O;
        }
      }
      this.endGeometry(e);
    } else {
      let c = s.overflow ? null : [];
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
          t.getFlatMidpoints(), h = 2;
          break;
        case "Polygon":
          l = /** @type {import("../../geom/Polygon.js").default} */
          t.getFlatInteriorPoint(), s.overflow || c.push(l[2] / this.resolution), h = 3;
          break;
        case "MultiPolygon":
          const m = (
            /** @type {import("../../geom/MultiPolygon.js").default} */
            t.getFlatInteriorPoints()
          );
          l = [];
          for (let y = 0, x = m.length; y < x; y += 3)
            s.overflow || c.push(m[y + 2] / this.resolution), l.push(m[y], m[y + 1]);
          if (l.length === 0)
            return;
          h = 2;
          break;
      }
      const f = this.appendFlatPointCoordinates(l, h);
      if (f === a)
        return;
      if (c && (f - a) / 2 !== l.length / h) {
        let m = a / 2;
        c = c.filter((y, x) => {
          const I = o[(m + x) * 2] === l[x * h] && o[(m + x) * 2 + 1] === l[x * h + 1];
          return I || --m, I;
        });
      }
      this.saveTextStates_(), (s.backgroundFill || s.backgroundStroke) && (this.setFillStrokeStyle(
        s.backgroundFill,
        s.backgroundStroke
      ), s.backgroundFill && this.updateFillStyle(this.state, this.createFill), s.backgroundStroke && (this.updateStrokeStyle(this.state, this.applyStroke), this.hitDetectionInstructions.push(this.createStroke(this.state)))), this.beginGeometry(t, e);
      let g = s.padding;
      if (g != rr && (s.scale[0] < 0 || s.scale[1] < 0)) {
        let m = s.padding[0], y = s.padding[1], x = s.padding[2], I = s.padding[3];
        s.scale[0] < 0 && (y = -y, I = -I), s.scale[1] < 0 && (m = -m, x = -x), g = [m, y, x, I];
      }
      const p = this.pixelRatio;
      this.instructions.push([
        W.DRAW_IMAGE,
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
        g == rr ? rr : g.map(function(m) {
          return m * p;
        }),
        !!s.backgroundFill,
        !!s.backgroundStroke,
        this.text_,
        this.textKey_,
        this.strokeKey_,
        this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        c
      ]);
      const d = 1 / p, _ = this.state.fillStyle;
      s.backgroundFill && (this.state.fillStyle = Pe, this.hitDetectionInstructions.push(this.createFill(this.state))), this.hitDetectionInstructions.push([
        W.DRAW_IMAGE,
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
        this.fillKey_ ? Pe : this.fillKey_,
        this.textOffsetX_,
        this.textOffsetY_,
        c
      ]), s.backgroundFill && (this.state.fillStyle = _, this.hitDetectionInstructions.push(this.createFill(this.state))), this.endGeometry(e);
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
      textAlign: e.textAlign || Hs,
      justify: e.justify,
      textBaseline: e.textBaseline || $o,
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
    const u = this.pixelRatio, l = ea[r.textBaseline], h = this.textOffsetY_ * u, c = this.text_, f = n ? n.lineWidth * Math.abs(r.scale[0]) / 2 : 0;
    this.instructions.push([
      W.DRAW_CHARS,
      t,
      e,
      l,
      r.overflow,
      a,
      r.maxAngle,
      u,
      h,
      s,
      f * u,
      c,
      o,
      1
    ]), this.hitDetectionInstructions.push([
      W.DRAW_CHARS,
      t,
      e,
      l,
      r.overflow,
      a && Pe,
      r.maxAngle,
      1,
      h,
      s,
      f,
      c,
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
      {}, this.textFillState_ = r), r.fillStyle = Kn(
        o.getColor() || Pe
      )) : (r = null, this.textFillState_ = r);
      const a = t.getStroke();
      if (!a)
        s = null, this.textStrokeState_ = s;
      else {
        s = this.textStrokeState_, s || (s = /** @type {import("../canvas.js").StrokeState} */
        {}, this.textStrokeState_ = s);
        const p = a.getLineDash(), d = a.getLineDashOffset(), _ = a.getWidth(), m = a.getMiterLimit();
        s.lineCap = a.getLineCap() || Qo, s.lineDash = p ? p.slice() : di, s.lineDashOffset = d === void 0 ? _i : d, s.lineJoin = a.getLineJoin() || Zr, s.lineWidth = _ === void 0 ? js : _, s.miterLimit = m === void 0 ? Ws : m, s.strokeStyle = Kn(
          a.getColor() || qs
        );
      }
      n = this.textState_;
      const u = t.getFont() || Rc;
      pp(u);
      const l = t.getScaleArray();
      n.overflow = t.getOverflow(), n.font = u, n.maxAngle = t.getMaxAngle(), n.placement = t.getPlacement(), n.textAlign = t.getTextAlign(), n.repeat = t.getRepeat(), n.justify = t.getJustify(), n.textBaseline = t.getTextBaseline() || $o, n.backgroundFill = t.getBackgroundFill(), n.backgroundStroke = t.getBackgroundStroke(), n.padding = t.getPadding() || rr, n.scale = l === void 0 ? [1, 1] : l;
      const h = t.getOffsetX(), c = t.getOffsetY(), f = t.getRotateWithView(), g = t.getRotation();
      this.text_ = t.getText() || "", this.textOffsetX_ = h === void 0 ? 0 : h, this.textOffsetY_ = c === void 0 ? 0 : c, this.textRotateWithView_ = f === void 0 ? !1 : f, this.textRotation_ = g === void 0 ? 0 : g, this.strokeKey_ = s ? (typeof s.strokeStyle == "string" ? s.strokeStyle : Kt(s.strokeStyle)) + s.lineCap + s.lineDashOffset + "|" + s.lineWidth + s.lineJoin + s.miterLimit + "[" + s.lineDash.join() + "]" : "", this.textKey_ = n.font + n.scale + (n.textAlign || "?") + (n.repeat || "?") + (n.justify || "?") + (n.textBaseline || "?"), this.fillKey_ = r ? typeof r.fillStyle == "string" ? r.fillStyle : "|" + Kt(r.fillStyle) : "";
    }
    this.declutterImageWithText_ = e;
  }
}
const rd = {
  Circle: Kl,
  Default: yo,
  Image: $p,
  LineString: td,
  Polygon: Kl,
  Text: id
};
class Jl {
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
      const o = rd[e];
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
class sd extends go {
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
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
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
    const e = (
      /** @type {import("../Image.js").default} */
      t.target
    );
    (e.getState() === Ot.LOADED || e.getState() === Ot.ERROR) && this.renderIfReadyAndVisible();
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
    return e != Ot.LOADED && e != Ot.ERROR && t.addEventListener(cn.CHANGE, this.boundHandleImageChange_), e == Ot.IDLE && (t.load(), e = t.getState()), e == Ot.LOADED;
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
class od extends fo {
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
const Ql = [];
let Br = null;
function ad() {
  Br = Mn(1, 1, void 0, {
    willReadFrequently: !0
  });
}
class ud extends sd {
  /**
   * @param {LayerType} layer Layer.
   */
  constructor(t) {
    super(t), this.container = null, this.renderedResolution, this.tempTransform = Bi(), this.pixelTransform = Bi(), this.inversePixelTransform = Bi(), this.context = null, this.containerReused = !1, this.pixelContext_ = null, this.frameState = null;
  }
  /**
   * @param {HTMLCanvasElement|HTMLImageElement|HTMLVideoElement} image Image.
   * @param {number} col The column index.
   * @param {number} row The row index.
   * @return {Uint8ClampedArray|null} The image data.
   */
  getImageData(t, e, n) {
    Br || ad(), Br.clearRect(0, 0, 1, 1);
    let r;
    try {
      Br.drawImage(t, e, n, 1, 1, 0, 0, 1, 1), r = Br.getImageData(0, 0, 1, 1).data;
    } catch {
      return Br = null, null;
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
    if (t && t.className === r && (!n || t && t.style.backgroundColor && ms(
      Jo(t.style.backgroundColor),
      Jo(n)
    ))) {
      const a = t.firstElementChild;
      a instanceof HTMLCanvasElement && (o = a.getContext("2d"));
    }
    if (o && o.canvas.style.transform === e ? (this.container = t, this.context = o, this.containerReused = !0) : this.containerReused ? (this.container = null, this.context = null, this.containerReused = !1) : this.container && (this.container.style.backgroundColor = null), !this.container) {
      s = document.createElement("div"), s.className = r;
      let a = s.style;
      a.position = "absolute", a.width = "100%", a.height = "100%", o = Mn();
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
    const r = tc(n), s = ec(n), o = $h(n), a = Qh(n);
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
      const s = new od(
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
    this.frameState = e, this.dispatchRenderEvent_(Us.PRERENDER, t, e);
  }
  /**
   * @param {CanvasRenderingContext2D} context Context.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @protected
   */
  postRender(t, e) {
    this.dispatchRenderEvent_(Us.POSTRENDER, t, e);
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
    const u = s / 2, l = o / 2, h = r / e, c = -h, f = -t[0] + a, g = -t[1];
    return po(
      this.tempTransform,
      u,
      l,
      h,
      c,
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
function ld(i, t, e, n, r, s, o, a, u, l, h, c) {
  let f = i[t], g = i[t + 1], p = 0, d = 0, _ = 0, m = 0;
  function y() {
    p = f, d = g, t += n, f = i[t], g = i[t + 1], m += _, _ = Math.sqrt((f - p) * (f - p) + (g - d) * (g - d));
  }
  do
    y();
  while (t < e - n && m + _ < s);
  let x = _ === 0 ? 0 : (s - m) / _;
  const I = Ve(p, f, x), S = Ve(d, g, x), w = t - n, O = m, L = s + a * u(l, r, h);
  for (; t < e - n && m + _ < L; )
    y();
  x = _ === 0 ? 0 : (L - m) / _;
  const P = Ve(p, f, x), G = Ve(d, g, x);
  let B;
  if (c) {
    const k = [I, S, P, G];
    lc(k, 0, 4, 2, c, k, k), B = k[0] > k[2];
  } else
    B = I > P;
  const Y = Math.PI, U = [], T = w + n === t;
  t = w, _ = 0, m = O, f = i[t], g = i[t + 1];
  let b;
  if (T) {
    y(), b = Math.atan2(g - d, f - p), B && (b += b > 0 ? -Y : Y);
    const k = (P + I) / 2, z = (G + S) / 2;
    return U[0] = [k, z, (L - s) / 2, b, r], U;
  }
  r = r.replace(/\n/g, " ");
  for (let k = 0, z = r.length; k < z; ) {
    y();
    let Z = Math.atan2(g - d, f - p);
    if (B && (Z += Z > 0 ? -Y : Y), b !== void 0) {
      let me = Z - b;
      if (me += me > Y ? -2 * Y : me < -Y ? 2 * Y : 0, Math.abs(me) > o)
        return null;
    }
    b = Z;
    const at = k;
    let It = 0;
    for (; k < z; ++k) {
      const me = B ? z - k - 1 : k, Ge = a * u(l, r[me], h);
      if (t + n < e && m + _ < s + It + Ge / 2)
        break;
      It += Ge;
    }
    if (k === at)
      continue;
    const Ft = B ? r.substring(z - at, z - k) : r.substring(at, k);
    x = _ === 0 ? 0 : (s + It / 2 - m) / _;
    const D = Ve(p, f, x), $e = Ve(d, g, x);
    U.push([D, $e, It / 2, Z, Ft]), s += It;
  }
  return U;
}
const Fr = ur(), Ti = [], ci = [], fi = [], bi = [];
function $l(i) {
  return i[3].declutterBox;
}
const th = new RegExp(
  /* eslint-disable prettier/prettier */
  "[֑-ࣿיִ-﷿ﹰ-ﻼࠀ-࿿-]"
  /* eslint-enable prettier/prettier */
);
function qa(i, t) {
  return t === "start" ? t = th.test(i) ? "right" : "left" : t === "end" && (t = th.test(i) ? "left" : "right"), ea[t];
}
function hd(i, t, e) {
  return e > 0 && i.push(`
`, ""), i.push(t, ""), i;
}
class cd {
  /**
   * @param {number} resolution Resolution.
   * @param {number} pixelRatio Pixel ratio.
   * @param {boolean} overlaps The replay can have overlapping geometries.
   * @param {import("../canvas.js").SerializableInstructions} instructions The serializable instructions
   */
  constructor(t, e, n, r) {
    this.overlaps = n, this.pixelRatio = e, this.resolution = t, this.alignFill_, this.instructions = r.instructions, this.coordinates = r.coordinates, this.coordinateCache_ = {}, this.renderedTransform_ = Bi(), this.hitDetectionInstructions = r.hitDetectionInstructions, this.pixelCoordinates_ = null, this.viewRotation_ = 0, this.fillStates = r.fillStates || {}, this.strokeStates = r.strokeStates || {}, this.textStates = r.textStates || {}, this.widths_ = {}, this.labels_ = {};
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
    const o = r ? this.strokeStates[r] : null, a = n ? this.fillStates[n] : null, u = this.textStates[e], l = this.pixelRatio, h = [
      u.scale[0] * l,
      u.scale[1] * l
    ], c = Array.isArray(t), f = u.justify ? ea[u.justify] : qa(
      Array.isArray(t) ? t[0] : t,
      u.textAlign || Hs
    ), g = r && o.lineWidth ? o.lineWidth : 0, p = c ? t : t.split(`
`).reduce(hd, []), { width: d, height: _, widths: m, heights: y, lineWidths: x } = _p(
      u,
      p
    ), I = d + g, S = [], w = (I + 2) * h[0], O = (_ + g) * h[1], L = {
      width: w < 0 ? Math.floor(w) : Math.ceil(w),
      height: O < 0 ? Math.floor(O) : Math.ceil(O),
      contextInstructions: S
    };
    (h[0] != 1 || h[1] != 1) && S.push("scale", h), r && (S.push("strokeStyle", o.strokeStyle), S.push("lineWidth", g), S.push("lineCap", o.lineCap), S.push("lineJoin", o.lineJoin), S.push("miterLimit", o.miterLimit), S.push("setLineDash", [o.lineDash]), S.push("lineDashOffset", o.lineDashOffset)), n && S.push("fillStyle", a.fillStyle), S.push("textBaseline", "middle"), S.push("textAlign", "center");
    const P = 0.5 - f;
    let G = f * I + P * g;
    const B = [], Y = [];
    let U = 0, T = 0, b = 0, k = 0, z;
    for (let Z = 0, at = p.length; Z < at; Z += 2) {
      const It = p[Z];
      if (It === `
`) {
        T += U, U = 0, G = f * I + P * g, ++k;
        continue;
      }
      const Ft = p[Z + 1] || u.font;
      Ft !== z && (r && B.push("font", Ft), n && Y.push("font", Ft), z = Ft), U = Math.max(U, y[b]);
      const D = [
        It,
        G + P * m[b] + f * (m[b] - x[k]),
        0.5 * (g + U) + T
      ];
      G += m[b], r && B.push("strokeText", D), n && Y.push("fillText", D), ++b;
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
  calculateImageOrLabelDimensions_(t, e, n, r, s, o, a, u, l, h, c, f, g, p, d, _) {
    a *= f[0], u *= f[1];
    let m = n - a, y = r - u;
    const x = s + l > t ? t - l : s, I = o + h > e ? e - h : o, S = p[3] + x * f[0] + p[1], w = p[0] + I * f[1] + p[2], O = m - p[3], L = y - p[0];
    (d || c !== 0) && (Ti[0] = O, bi[0] = O, Ti[1] = L, ci[1] = L, ci[0] = O + S, fi[0] = ci[0], fi[1] = L + w, bi[1] = fi[1]);
    let P;
    return c !== 0 ? (P = po(
      Bi(),
      n,
      r,
      1,
      1,
      c,
      -n,
      -r
    ), Le(P, Ti), Le(P, ci), Le(P, fi), Le(P, bi), lr(
      Math.min(Ti[0], ci[0], fi[0], bi[0]),
      Math.min(Ti[1], ci[1], fi[1], bi[1]),
      Math.max(Ti[0], ci[0], fi[0], bi[0]),
      Math.max(Ti[1], ci[1], fi[1], bi[1]),
      Fr
    )) : lr(
      Math.min(O, O + S),
      Math.min(L, L + w),
      Math.max(O, O + S),
      Math.max(L, L + w),
      Fr
    ), g && (m = Math.round(m), y = Math.round(y)), {
      drawImageX: m,
      drawImageY: y,
      drawImageW: x,
      drawImageH: I,
      originX: l,
      originY: h,
      declutterBox: {
        minX: Fr[0],
        minY: Fr[1],
        maxX: Fr[2],
        maxY: Fr[3],
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
    const u = !!(o || a), l = r.declutterBox, h = t.canvas, c = a ? a[2] * r.scale[0] / 2 : 0;
    return l.minX - c <= h.width / e && l.maxX + c >= 0 && l.minY - c <= h.height / e && l.maxY + c >= 0 && (u && this.replayTextBackground_(
      t,
      Ti,
      ci,
      fi,
      bi,
      /** @type {Array<*>} */
      o,
      /** @type {Array<*>} */
      a
    ), mp(
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
    const s = this.textStates[e], o = this.createLabel(t, e, r, n), a = this.strokeStates[n], u = this.pixelRatio, l = qa(
      Array.isArray(t) ? t[0] : t,
      s.textAlign || Hs
    ), h = ea[s.textBaseline || $o], c = a && a.lineWidth ? a.lineWidth : 0, f = o.width / u - 2 * s.scale[0], g = l * f + 2 * (0.5 - l) * c, p = h * o.height / u + 2 * (0.5 - h) * c;
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
    this.pixelCoordinates_ && ms(n, this.renderedTransform_) ? l = this.pixelCoordinates_ : (this.pixelCoordinates_ || (this.pixelCoordinates_ = []), l = ar(
      this.coordinates,
      0,
      this.coordinates.length,
      2,
      n,
      this.pixelCoordinates_
    ), Jf(this.renderedTransform_, n));
    let h = 0;
    const c = r.length;
    let f = 0, g, p, d, _, m, y, x, I, S, w, O, L, P = 0, G = 0, B = null, Y = null;
    const U = this.coordinateCache_, T = this.viewRotation_, b = Math.round(Math.atan2(-n[1], n[0]) * 1e12) / 1e12, k = (
      /** @type {import("../../render.js").State} */
      {
        context: t,
        pixelRatio: this.pixelRatio,
        resolution: this.resolution,
        rotation: T
      }
    ), z = this.instructions != r || this.overlaps ? 0 : 200;
    let Z, at, It, Ft;
    for (; h < c; ) {
      const D = r[h];
      switch (
        /** @type {import("./Instruction.js").default} */
        D[0]
      ) {
        case W.BEGIN_GEOMETRY:
          Z = /** @type {import("../../Feature.js").FeatureLike} */
          D[1], Ft = D[3], Z.getGeometry() ? a !== void 0 && !Pn(a, Ft.getExtent()) ? h = /** @type {number} */
          D[2] + 1 : ++h : h = /** @type {number} */
          D[2];
          break;
        case W.BEGIN_PATH:
          P > z && (this.fill_(t), P = 0), G > z && (t.stroke(), G = 0), !P && !G && (t.beginPath(), _ = NaN, m = NaN), ++h;
          break;
        case W.CIRCLE:
          f = /** @type {number} */
          D[1];
          const me = l[f], Ge = l[f + 1], wf = l[f + 2], Nf = l[f + 3], al = wf - me, ul = Nf - Ge, ll = Math.sqrt(al * al + ul * ul);
          t.moveTo(me + ll, Ge), t.arc(me, Ge, ll, 0, 2 * Math.PI, !0), ++h;
          break;
        case W.CLOSE_PATH:
          t.closePath(), ++h;
          break;
        case W.CUSTOM:
          f = /** @type {number} */
          D[1], g = D[2];
          const Lf = (
            /** @type {import("../../geom/SimpleGeometry.js").default} */
            D[3]
          ), Pf = D[4], hl = D.length == 6 ? D[5] : void 0;
          k.geometry = Lf, k.feature = Z, h in U || (U[h] = []);
          const Is = U[h];
          hl ? hl(l, f, g, 2, Is) : (Is[0] = l[f], Is[1] = l[f + 1], Is.length = 2), Pf(Is, k), ++h;
          break;
        case W.DRAW_IMAGE:
          f = /** @type {number} */
          D[1], g = /** @type {number} */
          D[2], I = /** @type {HTMLCanvasElement|HTMLVideoElement|HTMLImageElement} */
          D[3], p = /** @type {number} */
          D[4], d = /** @type {number} */
          D[5];
          let Da = (
            /** @type {number} */
            D[6]
          );
          const Tf = (
            /** @type {number} */
            D[7]
          ), bf = (
            /** @type {number} */
            D[8]
          ), Of = (
            /** @type {number} */
            D[9]
          ), cl = (
            /** @type {boolean} */
            D[10]
          );
          let Aa = (
            /** @type {number} */
            D[11]
          );
          const Mf = (
            /** @type {import("../../size.js").Size} */
            D[12]
          );
          let wo = (
            /** @type {number} */
            D[13]
          );
          const fl = (
            /** @type {"declutter"|"obstacle"|"none"|undefined} */
            D[14]
          ), Ss = (
            /** @type {import("../canvas.js").DeclutterImageWithText} */
            D[15]
          );
          if (!I && D.length >= 20) {
            S = /** @type {string} */
            D[19], w = /** @type {string} */
            D[20], O = /** @type {string} */
            D[21], L = /** @type {string} */
            D[22];
            const Be = this.drawLabelWithPointPlacement_(
              S,
              w,
              O,
              L
            );
            I = Be.label, D[3] = I;
            const Mr = (
              /** @type {number} */
              D[23]
            );
            p = (Be.anchorX - Mr) * this.pixelRatio, D[4] = p;
            const tn = (
              /** @type {number} */
              D[24]
            );
            d = (Be.anchorY - tn) * this.pixelRatio, D[5] = d, Da = I.height, D[6] = Da, wo = I.width, D[13] = wo;
          }
          let Fa;
          D.length > 25 && (Fa = /** @type {number} */
          D[25]);
          let ka, No, Lo;
          D.length > 17 ? (ka = /** @type {Array<number>} */
          D[16], No = /** @type {boolean} */
          D[17], Lo = /** @type {boolean} */
          D[18]) : (ka = rr, No = !1, Lo = !1), cl && b ? Aa += T : !cl && !b && (Aa -= T);
          let Df = 0;
          for (; f < g; f += 2) {
            if (Fa && Fa[Df++] < wo / this.pixelRatio)
              continue;
            const Be = this.calculateImageOrLabelDimensions_(
              I.width,
              I.height,
              l[f],
              l[f + 1],
              wo,
              Da,
              p,
              d,
              bf,
              Of,
              Aa,
              Mf,
              s,
              ka,
              No || Lo,
              Z
            ), Mr = [
              t,
              e,
              I,
              Be,
              Tf,
              No ? (
                /** @type {Array<*>} */
                B
              ) : null,
              Lo ? (
                /** @type {Array<*>} */
                Y
              ) : null
            ];
            if (u) {
              if (fl === "none")
                continue;
              if (fl === "obstacle") {
                u.insert(Be.declutterBox);
                continue;
              } else {
                let tn, li;
                if (Ss) {
                  const ze = g - f;
                  if (!Ss[ze]) {
                    Ss[ze] = Mr;
                    continue;
                  }
                  if (tn = Ss[ze], delete Ss[ze], li = $l(tn), u.collides(li))
                    continue;
                }
                if (u.collides(Be.declutterBox))
                  continue;
                tn && (u.insert(li), this.replayImageOrLabel_.apply(this, tn)), u.insert(Be.declutterBox);
              }
            }
            this.replayImageOrLabel_.apply(this, Mr);
          }
          ++h;
          break;
        case W.DRAW_CHARS:
          const gl = (
            /** @type {number} */
            D[1]
          ), pl = (
            /** @type {number} */
            D[2]
          ), Ga = (
            /** @type {number} */
            D[3]
          ), Af = (
            /** @type {number} */
            D[4]
          );
          L = /** @type {string} */
          D[5];
          const Ff = (
            /** @type {number} */
            D[6]
          ), dl = (
            /** @type {number} */
            D[7]
          ), _l = (
            /** @type {number} */
            D[8]
          );
          O = /** @type {string} */
          D[9];
          const Ba = (
            /** @type {number} */
            D[10]
          );
          S = /** @type {string} */
          D[11], w = /** @type {string} */
          D[12];
          const ml = [
            /** @type {number} */
            D[13],
            /** @type {number} */
            D[13]
          ], za = this.textStates[w], Rs = za.font, ws = [
            za.scale[0] * dl,
            za.scale[1] * dl
          ];
          let Ns;
          Rs in this.widths_ ? Ns = this.widths_[Rs] : (Ns = {}, this.widths_[Rs] = Ns);
          const yl = Ec(l, gl, pl, 2), vl = Math.abs(ws[0]) * kl(Rs, S, Ns);
          if (Af || vl <= yl) {
            const Be = this.textStates[w].textAlign, Mr = (yl - vl) * qa(S, Be), tn = ld(
              l,
              gl,
              pl,
              2,
              S,
              Mr,
              Ff,
              Math.abs(ws[0]),
              kl,
              Rs,
              Ns,
              b ? 0 : this.viewRotation_
            );
            t:
              if (tn) {
                const li = [];
                let ze, Po, To, Ne, en;
                if (O)
                  for (ze = 0, Po = tn.length; ze < Po; ++ze) {
                    en = tn[ze], To = /** @type {string} */
                    en[4], Ne = this.createLabel(To, w, "", O), p = /** @type {number} */
                    en[2] + (ws[0] < 0 ? -Ba : Ba), d = Ga * Ne.height + (0.5 - Ga) * 2 * Ba * ws[1] / ws[0] - _l;
                    const hi = this.calculateImageOrLabelDimensions_(
                      Ne.width,
                      Ne.height,
                      en[0],
                      en[1],
                      Ne.width,
                      Ne.height,
                      p,
                      d,
                      0,
                      0,
                      en[3],
                      ml,
                      !1,
                      rr,
                      !1,
                      Z
                    );
                    if (u && u.collides(hi.declutterBox))
                      break t;
                    li.push([
                      t,
                      e,
                      Ne,
                      hi,
                      1,
                      null,
                      null
                    ]);
                  }
                if (L)
                  for (ze = 0, Po = tn.length; ze < Po; ++ze) {
                    en = tn[ze], To = /** @type {string} */
                    en[4], Ne = this.createLabel(To, w, L, ""), p = /** @type {number} */
                    en[2], d = Ga * Ne.height - _l;
                    const hi = this.calculateImageOrLabelDimensions_(
                      Ne.width,
                      Ne.height,
                      en[0],
                      en[1],
                      Ne.width,
                      Ne.height,
                      p,
                      d,
                      0,
                      0,
                      en[3],
                      ml,
                      !1,
                      rr,
                      !1,
                      Z
                    );
                    if (u && u.collides(hi.declutterBox))
                      break t;
                    li.push([
                      t,
                      e,
                      Ne,
                      hi,
                      1,
                      null,
                      null
                    ]);
                  }
                u && u.load(li.map($l));
                for (let hi = 0, kf = li.length; hi < kf; ++hi)
                  this.replayImageOrLabel_.apply(this, li[hi]);
              }
          }
          ++h;
          break;
        case W.END_GEOMETRY:
          if (o !== void 0) {
            Z = /** @type {import("../../Feature.js").FeatureLike} */
            D[1];
            const Be = o(Z, Ft);
            if (Be)
              return Be;
          }
          ++h;
          break;
        case W.FILL:
          z ? P++ : this.fill_(t), ++h;
          break;
        case W.MOVE_TO_LINE_TO:
          for (f = /** @type {number} */
          D[1], g = /** @type {number} */
          D[2], at = l[f], It = l[f + 1], y = at + 0.5 | 0, x = It + 0.5 | 0, (y !== _ || x !== m) && (t.moveTo(at, It), _ = y, m = x), f += 2; f < g; f += 2)
            at = l[f], It = l[f + 1], y = at + 0.5 | 0, x = It + 0.5 | 0, (f == g - 2 || y !== _ || x !== m) && (t.lineTo(at, It), _ = y, m = x);
          ++h;
          break;
        case W.SET_FILL_STYLE:
          B = D, this.alignFill_ = D[2], P && (this.fill_(t), P = 0, G && (t.stroke(), G = 0)), t.fillStyle = /** @type {import("../../colorlike.js").ColorLike} */
          D[1], ++h;
          break;
        case W.SET_STROKE_STYLE:
          Y = D, G && (t.stroke(), G = 0), this.setStrokeStyle_(
            t,
            /** @type {Array<*>} */
            D
          ), ++h;
          break;
        case W.STROKE:
          z ? G++ : t.stroke(), ++h;
          break;
        default:
          ++h;
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
const Ha = ["Polygon", "Circle", "LineString", "Image", "Text", "Default"];
class eh {
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
    this.maxExtent_ = t, this.overlaps_ = r, this.pixelRatio_ = n, this.resolution_ = e, this.renderBuffer_ = o, this.executorsByZIndex_ = {}, this.hitDetectionContext_ = null, this.hitDetectionTransform_ = Bi(), this.createExecutors_(s);
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
        n[s] = new cd(
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
    const a = r * 2 + 1, u = po(
      this.hitDetectionTransform_,
      r + 0.5,
      r + 0.5,
      1 / e,
      -1 / e,
      -n,
      -t[0],
      -t[1]
    ), l = !this.hitDetectionContext_;
    l && (this.hitDetectionContext_ = Mn(
      a,
      a,
      void 0,
      { willReadFrequently: !0 }
    ));
    const h = this.hitDetectionContext_;
    h.canvas.width !== a || h.canvas.height !== a ? (h.canvas.width = a, h.canvas.height = a) : l || h.clearRect(0, 0, a, a);
    let c;
    this.renderBuffer_ !== void 0 && (c = ur(), ag(c, t), bu(
      c,
      e * (this.renderBuffer_ + r),
      c
    ));
    const f = fd(r);
    let g;
    function p(S, w) {
      const O = h.getImageData(
        0,
        0,
        a,
        a
      ).data;
      for (let L = 0, P = f.length; L < P; L++)
        if (O[f[L]] > 0) {
          if (!o || g !== "Image" && g !== "Text" || o.includes(S)) {
            const G = (f[L] - 3) / 4, B = r - G % a, Y = r - (G / a | 0), U = s(S, w, B * B + Y * Y);
            if (U)
              return U;
          }
          h.clearRect(0, 0, a, a);
          break;
        }
    }
    const d = Object.keys(this.executorsByZIndex_).map(Number);
    d.sort(Gs);
    let _, m, y, x, I;
    for (_ = d.length - 1; _ >= 0; --_) {
      const S = d[_].toString();
      for (y = this.executorsByZIndex_[S], m = Ha.length - 1; m >= 0; --m)
        if (g = Ha[m], x = y[g], x !== void 0 && (I = x.executeHitDetection(
          h,
          u,
          n,
          p,
          c
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
    return ar(a, 0, 8, 2, t, a), a;
  }
  /**
   * @return {boolean} Is empty.
   */
  isEmpty() {
    return zs(this.executorsByZIndex_);
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
    u.sort(Gs), this.maxExtent_ && (t.save(), this.clip(t, n)), o = o || Ha;
    let l, h, c, f, g, p;
    for (a && u.reverse(), l = 0, h = u.length; l < h; ++l) {
      const d = u[l].toString();
      for (g = this.executorsByZIndex_[d], c = 0, f = o.length; c < f; ++c) {
        const _ = o[c];
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
const ja = {};
function fd(i) {
  if (ja[i] !== void 0)
    return ja[i];
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
  return ja[i] = r, r;
}
class gd extends Pc {
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
    super(), this.context_ = t, this.pixelRatio_ = e, this.extent_ = n, this.transform_ = r, this.transformRotation_ = r ? Ng(Math.atan2(r[1], r[0]), 10) : 0, this.viewRotation_ = s, this.squaredTolerance_ = o, this.userTransform_ = a, this.contextFillState_ = null, this.contextStrokeState_ = null, this.contextTextState_ = null, this.fillState_ = null, this.strokeState_ = null, this.image_ = null, this.imageAnchorX_ = 0, this.imageAnchorY_ = 0, this.imageHeight_ = 0, this.imageOpacity_ = 0, this.imageOriginX_ = 0, this.imageOriginY_ = 0, this.imageRotateWithView_ = !1, this.imageRotation_ = 0, this.imageScale_ = [0, 0], this.imageWidth_ = 0, this.text_ = "", this.textOffsetX_ = 0, this.textOffsetY_ = 0, this.textRotateWithView_ = !1, this.textRotation_ = 0, this.textScale_ = [0, 0], this.textFillState_ = null, this.textStrokeState_ = null, this.textState_ = null, this.pixelCoordinates_ = [], this.tmpLocalTransform_ = Bi();
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
    const s = ar(
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
    for (let h = 0, c = s.length; h < c; h += 2) {
      const f = s[h] - this.imageAnchorX_, g = s[h + 1] - this.imageAnchorY_;
      if (l !== 0 || this.imageScale_[0] != 1 || this.imageScale_[1] != 1) {
        const p = f + this.imageAnchorX_, d = g + this.imageAnchorY_;
        po(
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
    const s = ar(
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
    const o = this.context_, a = ar(
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
    )), !!Pn(this.extent_, t.getExtent())) {
      if (this.fillState_ || this.strokeState_) {
        this.fillState_ && this.setContextFillState_(this.fillState_), this.strokeState_ && this.setContextStrokeState_(this.strokeState_);
        const e = Yg(
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
    )), !!Pn(this.extent_, t.getExtent())) {
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
    if (Pn(this.extent_, e)) {
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
    )), !!Pn(this.extent_, t.getExtent())) {
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
    )), !!Pn(this.extent_, t.getExtent())) {
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
    n ? (n.lineCap != t.lineCap && (n.lineCap = t.lineCap, e.lineCap = t.lineCap), ms(n.lineDash, t.lineDash) || e.setLineDash(
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
    const e = this.context_, n = this.contextTextState_, r = t.textAlign ? t.textAlign : Hs;
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
        fillStyle: Kn(
          n || Pe
        )
      };
    }
    if (!e)
      this.strokeState_ = null;
    else {
      const n = e.getColor(), r = e.getLineCap(), s = e.getLineDash(), o = e.getLineDashOffset(), a = e.getLineJoin(), u = e.getWidth(), l = e.getMiterLimit(), h = s || di;
      this.strokeState_ = {
        lineCap: r !== void 0 ? r : Qo,
        lineDash: this.pixelRatio_ === 1 ? h : h.map((c) => c * this.pixelRatio_),
        lineDashOffset: (o || _i) * this.pixelRatio_,
        lineJoin: a !== void 0 ? a : Zr,
        lineWidth: (u !== void 0 ? u : js) * this.pixelRatio_,
        miterLimit: l !== void 0 ? l : Ws,
        strokeStyle: Kn(
          n || qs
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
          fillStyle: Kn(
            g || Pe
          )
        };
      }
      const n = t.getStroke();
      if (!n)
        this.textStrokeState_ = null;
      else {
        const g = n.getColor(), p = n.getLineCap(), d = n.getLineDash(), _ = n.getLineDashOffset(), m = n.getLineJoin(), y = n.getWidth(), x = n.getMiterLimit();
        this.textStrokeState_ = {
          lineCap: p !== void 0 ? p : Qo,
          lineDash: d || di,
          lineDashOffset: _ || _i,
          lineJoin: m !== void 0 ? m : Zr,
          lineWidth: y !== void 0 ? y : js,
          miterLimit: x !== void 0 ? x : Ws,
          strokeStyle: Kn(
            g || qs
          )
        };
      }
      const r = t.getFont(), s = t.getOffsetX(), o = t.getOffsetY(), a = t.getRotateWithView(), u = t.getRotation(), l = t.getScaleArray(), h = t.getText(), c = t.getTextAlign(), f = t.getTextBaseline();
      this.textState_ = {
        font: r !== void 0 ? r : Rc,
        textAlign: c !== void 0 ? c : Hs,
        textBaseline: f !== void 0 ? f : $o
      }, this.text_ = h !== void 0 ? Array.isArray(h) ? h.reduce((g, p, d) => g += d % 2 ? " " : p, "") : h : "", this.textOffsetX_ = s !== void 0 ? this.pixelRatio_ * s : 0, this.textOffsetY_ = o !== void 0 ? this.pixelRatio_ * o : 0, this.textRotateWithView_ = a !== void 0 ? a : !1, this.textRotation_ = u !== void 0 ? u : 0, this.textScale_ = [
        this.pixelRatio_ * l[0],
        this.pixelRatio_ * l[1]
      ];
    }
  }
}
const Zn = 0.5;
function pd(i, t, e, n, r, s, o) {
  const a = i[0] * Zn, u = i[1] * Zn, l = Mn(a, u);
  l.imageSmoothingEnabled = !1;
  const h = l.canvas, c = new gd(
    l,
    Zn,
    r,
    null,
    o
  ), f = e.length, g = Math.floor((256 * 256 * 256 - 1) / f), p = {};
  for (let _ = 1; _ <= f; ++_) {
    const m = e[_ - 1], y = m.getStyleFunction() || n;
    if (!y)
      continue;
    let x = y(m, s);
    if (!x)
      continue;
    Array.isArray(x) || (x = [x]);
    const S = (_ * g).toString(16).padStart(7, "#00000");
    for (let w = 0, O = x.length; w < O; ++w) {
      const L = x[w], P = L.getGeometryFunction()(m);
      if (!P || !Pn(r, P.getExtent()))
        continue;
      const G = L.clone(), B = G.getFill();
      B && B.setColor(S);
      const Y = G.getStroke();
      Y && (Y.setColor(S), Y.setLineDash(null)), G.setText(void 0);
      const U = L.getImage();
      if (U) {
        const z = U.getImageSize();
        if (!z)
          continue;
        const Z = Mn(
          z[0],
          z[1],
          void 0,
          { alpha: !1 }
        ), at = Z.canvas;
        Z.fillStyle = S, Z.fillRect(0, 0, at.width, at.height), G.setImage(
          new mo({
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
      let b = p[T];
      b || (b = {}, p[T] = b, b.Polygon = [], b.Circle = [], b.LineString = [], b.Point = []);
      const k = P.getType();
      if (k === "GeometryCollection") {
        const z = (
          /** @type {import("../../geom/GeometryCollection.js").default} */
          P.getGeometriesArrayRecursive()
        );
        for (let Z = 0, at = z.length; Z < at; ++Z) {
          const It = z[Z];
          b[It.getType().replace("Multi", "")].push(
            It,
            G
          );
        }
      } else
        b[k.replace("Multi", "")].push(P, G);
    }
  }
  const d = Object.keys(p).map(Number).sort(Gs);
  for (let _ = 0, m = d.length; _ < m; ++_) {
    const y = p[d[_]];
    for (const x in y) {
      const I = y[x];
      for (let S = 0, w = I.length; S < w; S += 2) {
        c.setStyle(I[S + 1]);
        for (let O = 0, L = t.length; O < L; ++O)
          c.setTransform(t[O]), c.drawGeometry(I[S]);
      }
    }
  }
  return l.getImageData(0, 0, h.width, h.height);
}
function dd(i, t, e) {
  const n = [];
  if (e) {
    const r = Math.floor(Math.round(i[0]) * Zn), s = Math.floor(Math.round(i[1]) * Zn), o = (ce(r, 0, e.width - 1) + ce(s, 0, e.height - 1) * e.width) * 4, a = e.data[o], u = e.data[o + 1], h = e.data[o + 2] + 256 * (u + 256 * a), c = Math.floor((256 * 256 * 256 - 1) / t.length);
    h && h % c === 0 && n.push(t[h / c - 1]);
  }
  return n;
}
const _d = 0.5, Tc = {
  Point: Rd,
  LineString: Cd,
  Polygon: Nd,
  MultiPoint: wd,
  MultiLineString: Id,
  MultiPolygon: Sd,
  GeometryCollection: Ed,
  Circle: vd
};
function md(i, t) {
  return parseInt(Kt(i), 10) - parseInt(Kt(t), 10);
}
function yd(i, t) {
  const e = cu(i, t);
  return e * e;
}
function cu(i, t) {
  return _d * i / t;
}
function vd(i, t, e, n, r) {
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
function nh(i, t, e, n, r, s, o) {
  let a = !1;
  const u = e.getImage();
  if (u) {
    const l = u.getImageState();
    l == Ot.LOADED || l == Ot.ERROR ? u.unlistenImageChange(r) : (l == Ot.IDLE && u.load(), u.listenImageChange(r), a = !0);
  }
  return xd(
    i,
    t,
    e,
    n,
    s,
    o
  ), a;
}
function xd(i, t, e, n, r, s) {
  const o = e.getGeometryFunction()(t);
  if (!o)
    return;
  const a = o.simplifyTransformed(
    n,
    r
  );
  if (e.getRenderer())
    bc(i, a, e, t);
  else {
    const l = Tc[a.getType()];
    l(
      i,
      a,
      e,
      t,
      s
    );
  }
}
function bc(i, t, e, n) {
  if (t.getType() == "GeometryCollection") {
    const s = (
      /** @type {import("../geom/GeometryCollection.js").default} */
      t.getGeometries()
    );
    for (let o = 0, a = s.length; o < a; ++o)
      bc(i, s[o], e, n);
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
function Ed(i, t, e, n, r) {
  const s = t.getGeometriesArray();
  let o, a;
  for (o = 0, a = s.length; o < a; ++o) {
    const u = Tc[s[o].getType()];
    u(
      i,
      s[o],
      e,
      n,
      r
    );
  }
}
function Cd(i, t, e, n, r) {
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
function Id(i, t, e, n, r) {
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
function Sd(i, t, e, n, r) {
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
function Rd(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != Ot.LOADED)
      return;
    let u = i;
    if (r) {
      const h = s.getDeclutterMode();
      if (h !== "none")
        if (u = r, h === "obstacle") {
          const c = i.getBuilder(
            e.getZIndex(),
            "Image"
          );
          c.setImageStyle(s, a), c.drawPoint(t, n);
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
function wd(i, t, e, n, r) {
  const s = e.getImage(), o = e.getText();
  let a;
  if (s) {
    if (s.getImageState() != Ot.LOADED)
      return;
    let u = i;
    if (r) {
      const h = s.getDeclutterMode();
      if (h !== "none")
        if (u = r, h === "obstacle") {
          const c = i.getBuilder(
            e.getZIndex(),
            "Image"
          );
          c.setImageStyle(s, a), c.drawMultiPoint(t, n);
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
function Nd(i, t, e, n, r) {
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
class Ld extends ud {
  /**
   * @param {import("../../layer/BaseVector.js").default} vectorLayer Vector layer.
   */
  constructor(t) {
    super(t), this.boundHandleStyleImageChange_ = this.handleStyleImageChange_.bind(this), this.animatingOrInteracting_, this.hitDetectionImageData_ = null, this.renderedFeatures_ = null, this.renderedRevision_ = -1, this.renderedResolution_ = NaN, this.renderedExtent_ = ur(), this.wrappedRenderedExtent_ = ur(), this.renderedRotation_, this.renderedCenter_ = null, this.renderedProjection_ = null, this.renderedRenderOrder_ = null, this.replayGroup_ = null, this.replayGroupChanged = !0, this.declutterExecutorGroup = null, this.clipping = !0, this.compositionContext_ = null, this.opacity_ = 1;
  }
  /**
   * @param {ExecutorGroup} executorGroup Executor group.
   * @param {import("../../Map.js").FrameState} frameState Frame state.
   * @param {import("rbush").default} [declutterTree] Declutter tree.
   */
  renderWorlds(t, e, n) {
    const r = e.extent, s = e.viewState, o = s.center, a = s.resolution, u = s.projection, l = s.rotation, h = u.getExtent(), c = this.getLayer().getSource(), f = e.pixelRatio, g = e.viewHints, p = !(g[sn.ANIMATING] || g[sn.INTERACTING]), d = this.compositionContext_, _ = Math.round(e.size[0] * f), m = Math.round(e.size[1] * f), y = c.getWrapX() && u.canWrapX(), x = y ? un(h) : null, I = y ? Math.ceil((r[2] - h[2]) / x) + 1 : 1;
    let S = y ? Math.floor((r[0] - h[0]) / x) : 0;
    do {
      const w = this.getRenderTransform(
        o,
        a,
        l,
        f,
        _,
        m,
        S * x
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
      const t = Mn(
        this.context.canvas.width,
        this.context.canvas.height,
        Ql
      );
      this.compositionContext_ = t;
    } else
      this.compositionContext_ = this.context;
  }
  releaseCompositionContext_() {
    if (this.opacity_ !== 1) {
      const t = this.context.globalAlpha;
      this.context.globalAlpha = this.opacity_, this.context.drawImage(this.compositionContext_.canvas, 0, 0), this.context.globalAlpha = t, fp(this.compositionContext_), Ql.push(this.compositionContext_.canvas), this.compositionContext_ = null;
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
   * @param {HTMLElement|null} target Target that may be used to render content to.
   * @return {HTMLElement|null} The rendered element.
   */
  renderFrame(t, e) {
    const n = t.pixelRatio, r = t.layerStatesArray[t.layerIndex];
    Qf(this.pixelTransform, 1 / n, 1 / n), $f(this.inversePixelTransform, this.pixelTransform);
    const s = eg(this.pixelTransform);
    this.useContainer(e, s, this.getBackground(t));
    const o = this.context, a = o.canvas, u = this.replayGroup_, l = this.declutterExecutorGroup;
    let h = u && !u.isEmpty() || l && !l.isEmpty();
    if (!h && !(this.getLayer().hasListener(Us.PRERENDER) || this.getLayer().hasListener(Us.POSTRENDER)))
      return null;
    const c = Math.round(t.size[0] * n), f = Math.round(t.size[1] * n);
    a.width != c || a.height != f ? (a.width = c, a.height = f, a.style.transform !== s && (a.style.transform = s)) : this.containerReused || o.clearRect(0, 0, c, f), this.preRender(o, t);
    const g = t.viewState;
    g.projection, this.opacity_ = r.opacity, this.setupCompositionContext_();
    let p = !1;
    if (h && r.extent && this.clipping) {
      const d = Os(r.extent);
      h = Pn(d, t.extent), p = h && !Vr(d, t.extent), p && this.clipUnrotated(this.compositionContext_, t, d);
    }
    return h && this.renderWorlds(u, t), p && this.compositionContext_.restore(), this.releaseCompositionContext_(), this.postRender(o, t), this.renderedRotation_ !== g.rotation && (this.renderedRotation_ = g.rotation, this.hitDetectionImageData_ = null), this.container;
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
        const r = this.renderedCenter_, s = this.renderedResolution_, o = this.renderedRotation_, a = this.renderedProjection_, u = this.wrappedRenderedExtent_, l = this.getLayer(), h = [], c = n[0] * Zn, f = n[1] * Zn;
        h.push(
          this.getRenderTransform(
            r,
            s,
            o,
            Zn,
            c,
            f,
            0
          ).slice()
        );
        const g = l.getSource(), p = a.getExtent();
        if (g.getWrapX() && a.canWrapX() && !Vr(p, u)) {
          let d = u[0];
          const _ = un(p);
          let m = 0, y;
          for (; d < p[0]; )
            --m, y = _ * m, h.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Zn,
                c,
                f,
                y
              ).slice()
            ), d += _;
          for (m = 0, d = u[2]; d > p[2]; )
            ++m, y = _ * m, h.push(
              this.getRenderTransform(
                r,
                s,
                o,
                Zn,
                c,
                f,
                y
              ).slice()
            ), d -= _;
        }
        this.hitDetectionImageData_ = pd(
          n,
          h,
          this.renderedFeatures_,
          l.getStyleFunction(),
          u,
          s,
          o
        );
      }
      e(
        dd(t, this.renderedFeatures_, this.hitDetectionImageData_)
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
    const o = e.viewState.resolution, a = e.viewState.rotation, u = this.getLayer(), l = {}, h = function(g, p, d) {
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
    let c;
    const f = [this.replayGroup_];
    return this.declutterExecutorGroup && f.push(this.declutterExecutorGroup), f.some((g) => c = g.forEachFeatureAtCoordinate(
      t,
      o,
      a,
      n,
      h,
      g === this.declutterExecutorGroup && e.declutterTree ? e.declutterTree.all().map((p) => p.value) : null
    )), c;
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
    const r = t.viewHints[sn.ANIMATING], s = t.viewHints[sn.INTERACTING], o = e.getUpdateWhileAnimating(), a = e.getUpdateWhileInteracting();
    if (this.ready && !o && r || !a && s)
      return this.animatingOrInteracting_ = !0, !0;
    this.animatingOrInteracting_ = !1;
    const u = t.extent, l = t.viewState, h = l.projection, c = l.resolution, f = t.pixelRatio, g = e.getRevision(), p = e.getRenderBuffer();
    let d = e.getRenderOrder();
    d === void 0 && (d = md);
    const _ = l.center.slice(), m = bu(
      u,
      p * c
    ), y = m.slice(), x = [m.slice()], I = h.getExtent();
    if (n.getWrapX() && h.canWrapX() && !Vr(I, t.extent)) {
      const b = un(I), k = Math.max(un(m) / 2, b);
      m[0] = I[0] - k, m[2] = I[2] + k, Tg(_, h);
      const z = nc(x[0], h);
      z[0] < I[0] && z[2] < I[2] ? x.push([
        z[0] + b,
        z[1],
        z[2] + b,
        z[3]
      ]) : z[0] > I[0] && z[2] > I[2] && x.push([
        z[0] - b,
        z[1],
        z[2] - b,
        z[3]
      ]);
    }
    if (this.ready && this.renderedResolution_ == c && this.renderedRevision_ == g && this.renderedRenderOrder_ == d && Vr(this.wrappedRenderedExtent_, m))
      return ms(this.renderedExtent_, y) || (this.hitDetectionImageData_ = null, this.renderedExtent_ = y), this.renderedCenter_ = _, this.replayGroupChanged = !1, !0;
    this.replayGroup_ = null;
    const S = new Jl(
      cu(c, f),
      m,
      c,
      f
    );
    let w;
    this.getLayer().getDeclutter() && (w = new Jl(
      cu(c, f),
      m,
      c,
      f
    ));
    let O;
    for (let b = 0, k = x.length; b < k; ++b)
      n.loadFeatures(x[b], c, h);
    const L = yd(c, f);
    let P = !0;
    const G = (
      /**
       * @param {import("../../Feature.js").default} feature Feature.
       */
      (b) => {
        let k;
        const z = b.getStyleFunction() || e.getStyleFunction();
        if (z && (k = z(b, c)), k) {
          const Z = this.renderFeature(
            b,
            L,
            k,
            S,
            O,
            w
          );
          P = P && !Z;
        }
      }
    ), B = uc(m), Y = n.getFeaturesInExtent(B);
    d && Y.sort(d);
    for (let b = 0, k = Y.length; b < k; ++b)
      G(Y[b]);
    this.renderedFeatures_ = Y, this.ready = P;
    const U = S.finish(), T = new eh(
      m,
      c,
      f,
      n.getOverlaps(),
      U,
      e.getRenderBuffer()
    );
    return w && (this.declutterExecutorGroup = new eh(
      m,
      c,
      f,
      n.getOverlaps(),
      w.finish(),
      e.getRenderBuffer()
    )), this.renderedResolution_ = c, this.renderedRevision_ = g, this.renderedRenderOrder_ = d, this.renderedExtent_ = y, this.wrappedRenderedExtent_ = m, this.renderedCenter_ = _, this.renderedProjection_ = h, this.replayGroup_ = T, this.hitDetectionImageData_ = null, this.replayGroupChanged = !0, !0;
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
        a = nh(
          r,
          t,
          n[u],
          e,
          this.boundHandleStyleImageChange_,
          s,
          o
        ) || a;
    else
      a = nh(
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
class Pd extends Qp {
  /**
   * @param {import("./BaseVector.js").Options<VectorSourceType>} [options] Options.
   */
  constructor(t) {
    super(t);
  }
  createRenderer() {
    return new Ld(this);
  }
}
class ih {
  /**
   * @param {number} [maxEntries] Max entries.
   */
  constructor(t) {
    this.rbush_ = new Lc(t), this.items_ = {};
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
    Kh(r, t) || (this.remove(e), this.insert(t, e));
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
    return zs(this.items_);
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
    return lr(e.minX, e.minY, e.maxX, e.maxY, t);
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
class Td extends Rr {
  /**
   * @param {Options} options Source options.
   */
  constructor(t) {
    super(), this.projection = Hr(t.projection), this.attributions_ = rh(t.attributions), this.attributionsCollapsible_ = t.attributionsCollapsible !== void 0 ? t.attributionsCollapsible : !0, this.loading = !1, this.state_ = t.state !== void 0 ? t.state : "ready", this.wrapX_ = t.wrapX !== void 0 ? t.wrapX : !1, this.interpolate_ = !!t.interpolate, this.viewResolver = null, this.viewRejector = null;
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
    this.attributions_ = rh(t), this.changed();
  }
  /**
   * Set the state of the source.
   * @param {import("./Source.js").State} state State.
   */
  setState(t) {
    this.state_ = t, this.changed();
  }
}
function rh(i) {
  return i ? Array.isArray(i) ? function(t) {
    return i;
  } : typeof i == "function" ? i : function(t) {
    return [i];
  } : null;
}
const wn = {
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
function bd(i, t) {
  return [[-1 / 0, -1 / 0, 1 / 0, 1 / 0]];
}
let Od = !1;
function Md(i, t, e, n, r, s, o) {
  const a = new XMLHttpRequest();
  a.open(
    "GET",
    typeof i == "function" ? i(e, n, r) : i,
    !0
  ), t.getType() == "arraybuffer" && (a.responseType = "arraybuffer"), a.withCredentials = Od, a.onload = function(u) {
    if (!a.status || a.status >= 200 && a.status < 300) {
      const l = t.getType();
      let h;
      l == "json" || l == "text" ? h = a.responseText : l == "xml" ? (h = a.responseXML, h || (h = new DOMParser().parseFromString(
        a.responseText,
        "application/xml"
      ))) : l == "arraybuffer" && (h = /** @type {ArrayBuffer} */
      a.response), h ? s(
        /** @type {Array<import("./Feature.js").default>} */
        t.readFeatures(h, {
          extent: e,
          featureProjection: r
        }),
        t.readProjection(h)
      ) : o();
    } else
      o();
  }, a.onerror = o, a.send();
}
function sh(i, t) {
  return function(e, n, r, s, o) {
    const a = (
      /** @type {import("./source/Vector").default} */
      this
    );
    Md(
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
      o || Bs
    );
  };
}
class Oi extends fo {
  /**
   * @param {string} type Type.
   * @param {import("../Feature.js").default<Geometry>} [feature] Feature.
   * @param {Array<import("../Feature.js").default<Geometry>>} [features] Features.
   */
  constructor(t, e, n) {
    super(t), this.feature = e, this.features = n;
  }
}
class Dd extends Td {
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
    }), this.on, this.once, this.un, this.loader_ = Bs, this.format_ = t.format, this.overlaps_ = t.overlaps === void 0 ? !0 : t.overlaps, this.url_ = t.url, t.loader !== void 0 ? this.loader_ = t.loader : this.url_ !== void 0 && (Ut(this.format_, 7), this.loader_ = sh(
      this.url_,
      /** @type {import("../format/Feature.js").default} */
      this.format_
    )), this.strategy_ = t.strategy !== void 0 ? t.strategy : bd;
    const e = t.useSpatialIndex !== void 0 ? t.useSpatialIndex : !0;
    this.featuresRtree_ = e ? new ih() : null, this.loadedExtentsRtree_ = new ih(), this.loadingExtentsCount_ = 0, this.nullGeometryFeatures_ = {}, this.idIndex_ = {}, this.uidIndex_ = {}, this.featureChangeKeys_ = {}, this.featuresCollection_ = null;
    let n, r;
    Array.isArray(t.features) ? r = t.features : t.features && (n = t.features, r = n.getArray()), !e && n === void 0 && (n = new qf(r)), r !== void 0 && this.addFeaturesInternal(r), n !== void 0 && this.bindFeaturesCollection_(n);
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
      new Oi(wn.ADDFEATURE, t)
    );
  }
  /**
   * @param {string} featureKey Unique identifier for the feature.
   * @param {import("../Feature.js").default<Geometry>} feature The feature.
   * @private
   */
  setupChangeEvents_(t, e) {
    this.featureChangeKeys_[t] = [
      Qn(e, cn.CHANGE, this.handleFeatureChange_, this),
      Qn(
        e,
        qh.PROPERTYCHANGE,
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
        const h = l.getExtent();
        e.push(h), r.push(a);
      } else
        this.nullGeometryFeatures_[u] = a;
    }
    if (this.featuresRtree_ && this.featuresRtree_.load(e, r), this.hasListener(wn.ADDFEATURE))
      for (let s = 0, o = n.length; s < o; s++)
        this.dispatchEvent(
          new Oi(wn.ADDFEATURE, n[s])
        );
  }
  /**
   * @param {!Collection<import("../Feature.js").default<Geometry>>} collection Collection.
   * @private
   */
  bindFeaturesCollection_(t) {
    let e = !1;
    this.addEventListener(
      wn.ADDFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.push(n.feature), e = !1);
      }
    ), this.addEventListener(
      wn.REMOVEFEATURE,
      /**
       * @param {VectorSourceEvent<Geometry>} evt The vector source event
       */
      function(n) {
        e || (e = !0, t.remove(n.feature), e = !1);
      }
    ), t.addEventListener(
      zr.ADD,
      /**
       * @param {import("../Collection.js").CollectionEvent<import("../Feature.js").default<Geometry>>} evt The collection event
       */
      (n) => {
        e || (e = !0, this.addFeature(n.element), e = !1);
      }
    ), t.addEventListener(
      zr.REMOVE,
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
        this.featureChangeKeys_[n].forEach($n);
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
    const e = new Oi(wn.CLEAR);
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
    return this.featuresCollection_ ? t = this.featuresCollection_.getArray().slice(0) : this.featuresRtree_ && (t = this.featuresRtree_.getAll(), zs(this.nullGeometryFeatures_) || pi(t, Object.values(this.nullGeometryFeatures_))), /** @type {Array<import("../Feature.js").default<Geometry>>} */
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
      const r = dg(t, e);
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
    return e = e || Xf, this.featuresRtree_.forEachInExtent(
      u,
      /**
       * @param {import("../Feature.js").default<Geometry>} feature Feature.
       */
      function(l) {
        if (e(l)) {
          const h = l.getGeometry(), c = a;
          if (a = h.closestPointXY(
            n,
            r,
            o,
            a
          ), a < c) {
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
      new Oi(wn.CHANGEFEATURE, e)
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
    return this.featuresRtree_ ? this.featuresRtree_.isEmpty() && zs(this.nullGeometryFeatures_) : this.featuresCollection_ ? this.featuresCollection_.getLength() === 0 : !0;
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
        function(h) {
          return Vr(h.extent, u);
        }
      ) || (++this.loadingExtentsCount_, this.dispatchEvent(
        new Oi(wn.FEATURESLOADSTART)
      ), this.loader_.call(
        this,
        u,
        e,
        n,
        (h) => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Oi(
              wn.FEATURESLOADEND,
              void 0,
              h
            )
          );
        },
        () => {
          --this.loadingExtentsCount_, this.dispatchEvent(
            new Oi(wn.FEATURESLOADERROR)
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
      if (Kh(r.extent, t))
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
    n.forEach($n), delete this.featureChangeKeys_[e];
    const r = t.getId();
    return r !== void 0 && delete this.idIndex_[r.toString()], delete this.uidIndex_[e], this.dispatchEvent(
      new Oi(wn.REMOVEFEATURE, t)
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
    Ut(this.format_, 7), this.url_ = t, this.setLoader(sh(t, this.format_));
  }
}
let Ad = class fu extends hc {
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
    this.changeEventsKeys_.forEach($n), this.changeEventsKeys_.length = 0;
  }
  /**
   * @private
   */
  listenGeometriesChange_() {
    if (this.geometries_)
      for (let t = 0, e = this.geometries_.length; t < e; ++t)
        this.changeEventsKeys_.push(
          Qn(this.geometries_[t], cn.CHANGE, this.changed, this)
        );
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!GeometryCollection} Clone.
   * @api
   */
  clone() {
    const t = new fu(null);
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
    if (r < wr(this.getExtent(), t, e))
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
    pa(t);
    const e = this.geometries_;
    for (let n = 0, r = e.length; n < r; ++n)
      og(t, e[n].getExtent());
    return t;
  }
  /**
   * Return the geometries that make up this geometry collection.
   * @return {Array<Geometry>} Geometries.
   * @api
   */
  getGeometries() {
    return oh(this.geometries_);
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
      const s = new fu(null);
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
    n || (n = qr(this.getExtent()));
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
    this.setGeometriesArray(oh(t));
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
function oh(i) {
  const t = [];
  for (let e = 0, n = i.length; e < n; ++e)
    t.push(i[e].clone());
  return t;
}
let ah = class gu extends Nr {
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
        const h = s[u];
        u === 0 && (r = h.getLayout()), pi(o, h.getFlatCoordinates()), a.push(o.length);
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
    this.flatCoordinates ? pi(this.flatCoordinates, t.getFlatCoordinates().slice()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.ends_.push(this.flatCoordinates.length), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiLineString} Clone.
   * @api
   */
  clone() {
    const t = new gu(
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
    return r < wr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Fu(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Gu(
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
    return this.layout != "XYM" && this.layout != "XYZM" || this.flatCoordinates.length === 0 ? null : (e = e !== void 0 ? e : !1, n = n !== void 0 ? n : !1, op(
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
    return Xs(
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
    return t < 0 || this.ends_.length <= t ? null : new Zo(
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
      const u = e[o], l = new Zo(
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
      const u = r[o], l = xc(
        e,
        n,
        u,
        s,
        0.5
      );
      pi(t, l), n = u;
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
    return e.length = jg(
      this.flatCoordinates,
      0,
      this.ends_,
      this.stride,
      t,
      e,
      0,
      n
    ), new gu(e, "XY", n);
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
    return ep(
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
    const n = Bu(
      this.flatCoordinates,
      0,
      t,
      this.stride,
      this.ends_
    );
    this.flatCoordinates.length = n.length === 0 ? 0 : n[n.length - 1], this.changed();
  }
}, Fd = class Oc extends Nr {
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
    this.flatCoordinates ? pi(this.flatCoordinates, t.getFlatCoordinates()) : this.flatCoordinates = t.getFlatCoordinates().slice(), this.changed();
  }
  /**
   * Make a complete copy of the geometry.
   * @return {!MultiPoint} Clone.
   * @api
   */
  clone() {
    const t = new Oc(
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
    if (r < wr(this.getExtent(), t, e))
      return r;
    const s = this.flatCoordinates, o = this.stride;
    for (let a = 0, u = s.length; a < u; a += o) {
      const l = or(
        t,
        e,
        s[a],
        s[a + 1]
      );
      if (l < r) {
        r = l;
        for (let h = 0; h < o; ++h)
          n[h] = s[a + h];
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
    return Fi(
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
    return t < 0 || e <= t ? null : new Wr(
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
      const a = new Wr(t.slice(s, s + n), e);
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
      if (Ou(t, o, a))
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
    this.setLayout(e, t, 1), this.flatCoordinates || (this.flatCoordinates = []), this.flatCoordinates.length = da(
      this.flatCoordinates,
      0,
      t,
      this.stride
    ), this.changed();
  }
};
function kd(i, t, e, n) {
  const r = [];
  let s = ur();
  for (let o = 0, a = e.length; o < a; ++o) {
    const u = e[o];
    s = Zh(
      i,
      t,
      u[0],
      n
    ), r.push((s[0] + s[2]) / 2, (s[1] + s[3]) / 2), t = u[u.length - 1];
  }
  return r;
}
let uh = class pu extends Nr {
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
        const h = s[u];
        u === 0 && (r = h.getLayout());
        const c = o.length, f = h.getEnds();
        for (let g = 0, p = f.length; g < p; ++g)
          f[g] += c;
        pi(o, h.getFlatCoordinates()), a.push(f);
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
      pi(this.flatCoordinates, t.getFlatCoordinates()), e = t.getEnds().slice();
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
    const n = new pu(
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
    return r < wr(this.getExtent(), t, e) ? r : (this.maxDeltaRevision_ != this.getRevision() && (this.maxDelta_ = Math.sqrt(
      Ug(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride,
        0
      )
    ), this.maxDeltaRevision_ = this.getRevision()), Wg(
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
    return $g(
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
    return Jg(
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
    return t !== void 0 ? (e = this.getOrientedFlatCoordinates().slice(), Ml(
      e,
      0,
      this.endss_,
      this.stride,
      t
    )) : e = this.flatCoordinates, iu(
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
      const t = kd(
        this.flatCoordinates,
        0,
        this.endss_,
        this.stride
      );
      this.flatInteriorPoints_ = tp(
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
    return new Fd(this.getFlatInteriorPoints().slice(), "XYM");
  }
  /**
   * @return {Array<number>} Oriented flat coordinates.
   */
  getOrientedFlatCoordinates() {
    if (this.orientedRevision_ != this.getRevision()) {
      const t = this.flatCoordinates;
      sp(t, 0, this.endss_, this.stride) ? this.orientedFlatCoordinates_ = t : (this.orientedFlatCoordinates_ = t.slice(), this.orientedFlatCoordinates_.length = Ml(
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
    return e.length = Kg(
      this.flatCoordinates,
      0,
      this.endss_,
      this.stride,
      Math.sqrt(t),
      e,
      0,
      n
    ), new pu(e, "XY", n);
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
    return new Ys(
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
        for (let c = 0, f = u.length; c < f; ++c)
          u[c] -= s;
      const h = new Ys(
        e.slice(s, l),
        t,
        u
      );
      r.push(h), s = l;
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
    return ip(
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
    const n = Hg(
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
var ye = 63710088e-1, Mc = {
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
function Ea(i, t, e) {
  e === void 0 && (e = {});
  var n = { type: "Feature" };
  return (e.id === 0 || e.id) && (n.id = e.id), e.bbox && (n.bbox = e.bbox), n.properties = t || {}, n.geometry = i, n;
}
function Gd(i, t, e) {
  if (e === void 0 && (e = {}), !i)
    throw new Error("coordinates is required");
  if (!Array.isArray(i))
    throw new Error("coordinates must be an Array");
  if (i.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!lh(i[0]) || !lh(i[1]))
    throw new Error("coordinates must contain numbers");
  var n = {
    type: "Point",
    coordinates: i
  };
  return Ea(n, t, e);
}
function Bd(i, t, e) {
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
  return Ea(a, t, e);
}
function du(i, t) {
  t === void 0 && (t = {});
  var e = { type: "FeatureCollection" };
  return t.id && (e.id = t.id), t.bbox && (e.bbox = t.bbox), e.features = i, e;
}
function zd(i, t, e) {
  e === void 0 && (e = {});
  var n = {
    type: "MultiPolygon",
    coordinates: i
  };
  return Ea(n, t, e);
}
function Vd(i, t) {
  var e = Mc[t];
  return i * e;
}
function Xd(i, t) {
  t === void 0 && (t = "kilometers");
  var e = Mc[t];
  if (!e)
    throw new Error(t + " units is invalid");
  return i / e;
}
function lh(i) {
  return !isNaN(i) && i !== null && !Array.isArray(i);
}
function Dc(i, t, e) {
  if (i !== null)
    for (var n, r, s, o, a, u, l, h = 0, c = 0, f, g = i.type, p = g === "FeatureCollection", d = g === "Feature", _ = p ? i.features.length : 1, m = 0; m < _; m++) {
      l = p ? i.features[m].geometry : d ? i.geometry : i, f = l ? l.type === "GeometryCollection" : !1, a = f ? l.geometries.length : 1;
      for (var y = 0; y < a; y++) {
        var x = 0, I = 0;
        if (o = f ? l.geometries[y] : l, o !== null) {
          u = o.coordinates;
          var S = o.type;
          switch (h = 0, S) {
            case null:
              break;
            case "Point":
              if (t(
                u,
                c,
                m,
                x,
                I
              ) === !1)
                return !1;
              c++, x++;
              break;
            case "LineString":
            case "MultiPoint":
              for (n = 0; n < u.length; n++) {
                if (t(
                  u[n],
                  c,
                  m,
                  x,
                  I
                ) === !1)
                  return !1;
                c++, S === "MultiPoint" && x++;
              }
              S === "LineString" && x++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (n = 0; n < u.length; n++) {
                for (r = 0; r < u[n].length - h; r++) {
                  if (t(
                    u[n][r],
                    c,
                    m,
                    x,
                    I
                  ) === !1)
                    return !1;
                  c++;
                }
                S === "MultiLineString" && x++, S === "Polygon" && I++;
              }
              S === "Polygon" && x++;
              break;
            case "MultiPolygon":
              for (n = 0; n < u.length; n++) {
                for (I = 0, r = 0; r < u[n].length; r++) {
                  for (s = 0; s < u[n][r].length - h; s++) {
                    if (t(
                      u[n][r][s],
                      c,
                      m,
                      x,
                      I
                    ) === !1)
                      return !1;
                    c++;
                  }
                  I++;
                }
                x++;
              }
              break;
            case "GeometryCollection":
              for (n = 0; n < o.geometries.length; n++)
                if (Dc(o.geometries[n], t) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function hh(i, t) {
  if (i.type === "Feature")
    t(i, 0);
  else if (i.type === "FeatureCollection")
    for (var e = 0; e < i.features.length && t(i.features[e], e) !== !1; e++)
      ;
}
function Ac(i, t) {
  var e, n, r, s, o, a, u, l, h, c, f = 0, g = i.type === "FeatureCollection", p = i.type === "Feature", d = g ? i.features.length : 1;
  for (e = 0; e < d; e++) {
    for (a = g ? i.features[e].geometry : p ? i.geometry : i, l = g ? i.features[e].properties : p ? i.properties : {}, h = g ? i.features[e].bbox : p ? i.bbox : void 0, c = g ? i.features[e].id : p ? i.id : void 0, u = a ? a.type === "GeometryCollection" : !1, o = u ? a.geometries.length : 1, r = 0; r < o; r++) {
      if (s = u ? a.geometries[r] : a, s === null) {
        if (t(
          null,
          f,
          l,
          h,
          c
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
            h,
            c
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
              h,
              c
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
function _u(i) {
  var t = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Dc(i, function(e) {
    t[0] > e[0] && (t[0] = e[0]), t[1] > e[1] && (t[1] = e[1]), t[2] < e[0] && (t[2] = e[0]), t[3] < e[1] && (t[3] = e[1]);
  }), t;
}
_u.default = _u;
function Yd(i, t) {
  t === void 0 && (t = {});
  var e = _u(i), n = (e[0] + e[2]) / 2, r = (e[1] + e[3]) / 2;
  return Gd([n, r], t.properties, t);
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
var fr = function() {
};
fr.prototype.interfaces_ = function() {
  return [];
};
fr.prototype.getClass = function() {
  return fr;
};
fr.prototype.equalsWithTolerance = function(t, e, n) {
  return Math.abs(t - e) <= n;
};
var gt = function(i) {
  function t(e) {
    i.call(this, e), this.name = "IllegalArgumentException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), q = function() {
}, Fc = { MAX_VALUE: { configurable: !0 } };
q.isNaN = function(t) {
  return Number.isNaN(t);
};
q.doubleToLongBits = function(t) {
  return t;
};
q.longBitsToDouble = function(t) {
  return t;
};
q.isInfinite = function(t) {
  return !Number.isFinite(t);
};
Fc.MAX_VALUE.get = function() {
  return Number.MAX_VALUE;
};
Object.defineProperties(q, Fc);
var Fe = function() {
}, Ca = function() {
}, Kr = function() {
};
function ke() {
}
var v = function i() {
  if (this.x = null, this.y = null, this.z = null, arguments.length === 0)
    this.x = 0, this.y = 0, this.z = i.NULL_ORDINATE;
  else if (arguments.length === 1) {
    var t = arguments[0];
    this.x = t.x, this.y = t.y, this.z = t.z;
  } else
    arguments.length === 2 ? (this.x = arguments[0], this.y = arguments[1], this.z = i.NULL_ORDINATE) : arguments.length === 3 && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2]);
}, Lr = { DimensionalComparator: { configurable: !0 }, serialVersionUID: { configurable: !0 }, NULL_ORDINATE: { configurable: !0 }, X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 } };
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
    return !(!fr.equalsWithTolerance(this.x, e.x, n) || !fr.equalsWithTolerance(this.y, e.y, n));
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
  return this.x === t.x && this.y === t.y && (this.z === t.z || q.isNaN(this.z)) && q.isNaN(t.z);
};
v.prototype.equals = function(t) {
  return t instanceof v ? this.equals2D(t) : !1;
};
v.prototype.equalInZ = function(t, e) {
  return fr.equalsWithTolerance(this.z, t.z, e);
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
  return [Fe, Ca, ke];
};
v.prototype.getClass = function() {
  return v;
};
v.hashCode = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = q.doubleToLongBits(t);
    return Math.trunc((e ^ e) >>> 32);
  }
};
Lr.DimensionalComparator.get = function() {
  return gi;
};
Lr.serialVersionUID.get = function() {
  return 6683108902428367e3;
};
Lr.NULL_ORDINATE.get = function() {
  return q.NaN;
};
Lr.X.get = function() {
  return 0;
};
Lr.Y.get = function() {
  return 1;
};
Lr.Z.get = function() {
  return 2;
};
Object.defineProperties(v, Lr);
var gi = function(t) {
  if (this._dimensionsToTest = 2, arguments.length !== 0) {
    if (arguments.length === 1) {
      var e = arguments[0];
      if (e !== 2 && e !== 3)
        throw new gt("only 2 or 3 dimensions may be specified");
      this._dimensionsToTest = e;
    }
  }
};
gi.prototype.compare = function(t, e) {
  var n = t, r = e, s = gi.compare(n.x, r.x);
  if (s !== 0)
    return s;
  var o = gi.compare(n.y, r.y);
  if (o !== 0)
    return o;
  if (this._dimensionsToTest <= 2)
    return 0;
  var a = gi.compare(n.z, r.z);
  return a;
};
gi.prototype.interfaces_ = function() {
  return [Kr];
};
gi.prototype.getClass = function() {
  return gi;
};
gi.compare = function(t, e) {
  return t < e ? -1 : t > e ? 1 : q.isNaN(t) ? q.isNaN(e) ? 0 : -1 : q.isNaN(e) ? 1 : 0;
};
var Jr = function() {
};
Jr.prototype.create = function() {
};
Jr.prototype.interfaces_ = function() {
  return [];
};
Jr.prototype.getClass = function() {
  return Jr;
};
var E = function() {
}, vo = { INTERIOR: { configurable: !0 }, BOUNDARY: { configurable: !0 }, EXTERIOR: { configurable: !0 }, NONE: { configurable: !0 } };
E.prototype.interfaces_ = function() {
  return [];
};
E.prototype.getClass = function() {
  return E;
};
E.toLocationSymbol = function(t) {
  switch (t) {
    case E.EXTERIOR:
      return "e";
    case E.BOUNDARY:
      return "b";
    case E.INTERIOR:
      return "i";
    case E.NONE:
      return "-";
  }
  throw new gt("Unknown location value: " + t);
};
vo.INTERIOR.get = function() {
  return 0;
};
vo.BOUNDARY.get = function() {
  return 1;
};
vo.EXTERIOR.get = function() {
  return 2;
};
vo.NONE.get = function() {
  return -1;
};
Object.defineProperties(E, vo);
var X = function(i, t) {
  return i.interfaces_ && i.interfaces_().indexOf(t) > -1;
}, Ee = function() {
}, kc = { LOG_10: { configurable: !0 } };
Ee.prototype.interfaces_ = function() {
  return [];
};
Ee.prototype.getClass = function() {
  return Ee;
};
Ee.log10 = function(t) {
  var e = Math.log(t);
  return q.isInfinite(e) || q.isNaN(e) ? e : e / Ee.LOG_10;
};
Ee.min = function(t, e, n, r) {
  var s = t;
  return e < s && (s = e), n < s && (s = n), r < s && (s = r), s;
};
Ee.clamp = function() {
  if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return t < e ? e : t > n ? n : t;
  } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    return r < s ? s : r > o ? o : r;
  }
};
Ee.wrap = function(t, e) {
  return t < 0 ? e - -t % e : t % e;
};
Ee.max = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = t;
    return e > r && (r = e), n > r && (r = n), r;
  } else if (arguments.length === 4) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = s;
    return o > l && (l = o), a > l && (l = a), u > l && (l = u), l;
  }
};
Ee.average = function(t, e) {
  return (t + e) / 2;
};
kc.LOG_10.get = function() {
  return Math.log(10);
};
Object.defineProperties(Ee, kc);
var Cn = function(t) {
  this.str = t;
};
Cn.prototype.append = function(t) {
  this.str += t;
};
Cn.prototype.setCharAt = function(t, e) {
  this.str = this.str.substr(0, t) + e + this.str.substr(t + 1);
};
Cn.prototype.toString = function(t) {
  return this.str;
};
var fn = function(t) {
  this.value = t;
};
fn.prototype.intValue = function() {
  return this.value;
};
fn.prototype.compareTo = function(t) {
  return this.value < t ? -1 : this.value > t ? 1 : 0;
};
fn.isNaN = function(t) {
  return Number.isNaN(t);
};
var Js = function() {
};
Js.isWhitespace = function(t) {
  return t <= 32 && t >= 0 || t === 127;
};
Js.toUpperCase = function(t) {
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
}, Je = { PI: { configurable: !0 }, TWO_PI: { configurable: !0 }, PI_2: { configurable: !0 }, E: { configurable: !0 }, NaN: { configurable: !0 }, EPS: { configurable: !0 }, SPLIT: { configurable: !0 }, MAX_PRINT_DIGITS: { configurable: !0 }, TEN: { configurable: !0 }, ONE: { configurable: !0 }, SCI_NOT_EXPONENT_CHAR: { configurable: !0 }, SCI_NOT_ZERO: { configurable: !0 } };
C.prototype.le = function(t) {
  return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo;
};
C.prototype.extractSignificantDigits = function(t, e) {
  var n = this.abs(), r = C.magnitude(n._hi), s = C.TEN.pow(r);
  n = n.divide(s), n.gt(C.TEN) ? (n = n.divide(C.TEN), r += 1) : n.lt(C.ONE) && (n = n.multiply(C.TEN), r -= 1);
  for (var o = r + 1, a = new Cn(), u = C.MAX_PRINT_DIGITS - 1, l = 0; l <= u; l++) {
    t && l === o && a.append(".");
    var h = Math.trunc(n._hi);
    if (h < 0)
      break;
    var c = !1, f = 0;
    h > 9 ? (c = !0, f = "9") : f = "0" + h, a.append(f), n = n.subtract(C.valueOf(h)).multiply(C.TEN), c && n.selfAdd(C.TEN);
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
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, h = null, c = null, f = null;
    return l = this._hi / n, h = C.SPLIT * l, s = h - l, f = C.SPLIT * n, s = h - s, o = l - s, a = f - n, c = l * n, a = f - a, u = n - a, f = s * a - c + s * u + o * a + o * u, h = (this._hi - c - f + this._lo - l * r) / n, f = l + h, this._hi = f, this._lo = l - f + h, this;
  }
};
C.prototype.dump = function() {
  return "DD<" + this._hi + ", " + this._lo + ">";
};
C.prototype.divide = function() {
  if (arguments[0] instanceof C) {
    var t = arguments[0], e = null, n = null, r = null, s = null, o = null, a = null, u = null, l = null;
    o = this._hi / t._hi, a = C.SPLIT * o, e = a - o, l = C.SPLIT * t._hi, e = a - e, n = o - e, r = l - t._hi, u = o * t._hi, r = l - r, s = t._hi - r, l = e * r - u + e * s + n * r + n * s, a = (this._hi - u - l + this._lo - o * t._lo) / t._hi, l = o + a;
    var h = l, c = o - l + a;
    return new C(h, c);
  } else if (typeof arguments[0] == "number") {
    var f = arguments[0];
    return q.isNaN(f) ? C.createNaN() : C.copy(this).selfDivide(f, 0);
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
    var l = arguments[0], h = arguments[1], c = null, f = null, g = null, p = null, d = null, _ = null, m = null, y = null;
    d = this._hi + l, g = this._lo + h, m = d - this._hi, y = g - this._lo, _ = d - m, p = g - y, _ = l - m + (this._hi - _), p = h - y + (this._lo - p), m = _ + g, c = d + m, f = m + (d - c), m = p + f;
    var x = c + m, I = m + (c - x);
    return this._hi = x, this._lo = I, this;
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
    var n = arguments[0], r = arguments[1], s = null, o = null, a = null, u = null, l = null, h = null;
    l = C.SPLIT * this._hi, s = l - this._hi, h = C.SPLIT * n, s = l - s, o = this._hi - s, a = h - n, l = this._hi * n, a = h - a, u = n - a, h = s * a - l + s * u + o * a + o * u + (this._hi * r + this._lo * n);
    var c = l + h;
    s = l - c;
    var f = h + s;
    return this._hi = c, this._lo = f, this;
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
    return q.isNaN(e) ? C.createNaN() : C.copy(this).selfMultiply(e, 0);
  }
};
C.prototype.isNaN = function() {
  return q.isNaN(this._hi);
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
  var l = s + o, h = s - l + o;
  return new C(l, h);
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
  return [ke, Fe, Ca];
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
  for (var e = 0, n = t.length; Js.isWhitespace(t.charAt(e)); )
    e++;
  var r = !1;
  if (e < n) {
    var s = t.charAt(e);
    (s === "-" || s === "+") && (e++, s === "-" && (r = !0));
  }
  for (var o = new C(), a = 0, u = 0, l = 0; !(e >= n); ) {
    var h = t.charAt(e);
    if (e++, Js.isDigit(h)) {
      var c = h - "0";
      o.selfMultiply(C.TEN), o.selfAdd(c), a++;
      continue;
    }
    if (h === ".") {
      u = a;
      continue;
    }
    if (h === "e" || h === "E") {
      var f = t.substring(e);
      try {
        l = fn.parseInt(f);
      } catch (m) {
        throw m instanceof Error ? new Error("Invalid exponent " + f + " in string " + t) : m;
      } finally {
      }
      break;
    }
    throw new Error("Unexpected character '" + h + "' at position " + e + " in string " + t);
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
  return new C(q.NaN, q.NaN);
};
C.copy = function(t) {
  return new C(t);
};
C.magnitude = function(t) {
  var e = Math.abs(t), n = Math.log(e) / Math.log(10), r = Math.trunc(Math.floor(n)), s = Math.pow(10, r);
  return s * 10 <= e && (r += 1), r;
};
C.stringOfChar = function(t, e) {
  for (var n = new Cn(), r = 0; r < e; r++)
    n.append(t);
  return n.toString();
};
Je.PI.get = function() {
  return new C(3.141592653589793, 12246467991473532e-32);
};
Je.TWO_PI.get = function() {
  return new C(6.283185307179586, 24492935982947064e-32);
};
Je.PI_2.get = function() {
  return new C(1.5707963267948966, 6123233995736766e-32);
};
Je.E.get = function() {
  return new C(2.718281828459045, 14456468917292502e-32);
};
Je.NaN.get = function() {
  return new C(q.NaN, q.NaN);
};
Je.EPS.get = function() {
  return 123259516440783e-46;
};
Je.SPLIT.get = function() {
  return 134217729;
};
Je.MAX_PRINT_DIGITS.get = function() {
  return 32;
};
Je.TEN.get = function() {
  return C.valueOf(10);
};
Je.ONE.get = function() {
  return C.valueOf(1);
};
Je.SCI_NOT_EXPONENT_CHAR.get = function() {
  return "E";
};
Je.SCI_NOT_ZERO.get = function() {
  return "0.0E0";
};
Object.defineProperties(C, Je);
var ae = function() {
}, Gc = { DP_SAFE_EPSILON: { configurable: !0 } };
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
  var s = C.valueOf(r.y).selfSubtract(n.y).selfMultiply(C.valueOf(e.x).selfSubtract(t.x)), o = C.valueOf(r.x).selfSubtract(n.x).selfMultiply(C.valueOf(e.y).selfSubtract(t.y)), a = s.subtract(o), u = C.valueOf(r.x).selfSubtract(n.x).selfMultiply(C.valueOf(t.y).selfSubtract(n.y)), l = C.valueOf(r.y).selfSubtract(n.y).selfMultiply(C.valueOf(t.x).selfSubtract(n.x)), h = u.subtract(l), c = h.selfDivide(a).doubleValue(), f = C.valueOf(t.x).selfAdd(C.valueOf(e.x).selfSubtract(t.x).selfMultiply(c)).doubleValue(), g = C.valueOf(e.x).selfSubtract(t.x).selfMultiply(C.valueOf(t.y).selfSubtract(n.y)), p = C.valueOf(e.y).selfSubtract(t.y).selfMultiply(C.valueOf(t.x).selfSubtract(n.x)), d = g.subtract(p), _ = d.selfDivide(a).doubleValue(), m = C.valueOf(n.y).selfAdd(C.valueOf(r.y).selfSubtract(n.y).selfMultiply(_)).doubleValue();
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
Gc.DP_SAFE_EPSILON.get = function() {
  return 1e-15;
};
Object.defineProperties(ae, Gc);
var $ = function() {
}, xo = { X: { configurable: !0 }, Y: { configurable: !0 }, Z: { configurable: !0 }, M: { configurable: !0 } };
xo.X.get = function() {
  return 0;
};
xo.Y.get = function() {
  return 1;
};
xo.Z.get = function() {
  return 2;
};
xo.M.get = function() {
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
  return [Ca];
};
$.prototype.getClass = function() {
  return $;
};
Object.defineProperties($, xo);
var Bc = function() {
}, ys = function(i) {
  function t() {
    i.call(this, "Projective point not representable on the Cartesian plane.");
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Bc), zt = function() {
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
var Xe = function i() {
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
    var u = arguments[0], l = arguments[1], h = arguments[2];
    this.x = u, this.y = l, this.w = h;
  } else if (arguments.length === 4) {
    var c = arguments[0], f = arguments[1], g = arguments[2], p = arguments[3], d = c.y - f.y, _ = f.x - c.x, m = c.x * f.y - f.x * c.y, y = g.y - p.y, x = p.x - g.x, I = g.x * p.y - p.x * g.y;
    this.x = _ * I - x * m, this.y = y * m - d * I, this.w = d * x - y * _;
  }
};
Xe.prototype.getY = function() {
  var t = this.y / this.w;
  if (q.isNaN(t) || q.isInfinite(t))
    throw new ys();
  return t;
};
Xe.prototype.getX = function() {
  var t = this.x / this.w;
  if (q.isNaN(t) || q.isInfinite(t))
    throw new ys();
  return t;
};
Xe.prototype.getCoordinate = function() {
  var t = new v();
  return t.x = this.getX(), t.y = this.getY(), t;
};
Xe.prototype.interfaces_ = function() {
  return [];
};
Xe.prototype.getClass = function() {
  return Xe;
};
Xe.intersection = function(t, e, n, r) {
  var s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, u = n.y - r.y, l = r.x - n.x, h = n.x * r.y - r.x * n.y, c = o * h - l * a, f = u * a - s * h, g = s * l - u * o, p = c / g, d = f / g;
  if (q.isNaN(p) || q.isInfinite(p) || q.isNaN(d) || q.isInfinite(d))
    throw new ys();
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
}, zc = { serialVersionUID: { configurable: !0 } };
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
  return [Fe, ke];
};
A.prototype.getClass = function() {
  return A;
};
A.intersects = function() {
  if (arguments.length === 3) {
    var t = arguments[0], e = arguments[1], n = arguments[2];
    return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y);
  } else if (arguments.length === 4) {
    var r = arguments[0], s = arguments[1], o = arguments[2], a = arguments[3], u = Math.min(o.x, a.x), l = Math.max(o.x, a.x), h = Math.min(r.x, s.x), c = Math.max(r.x, s.x);
    return !(h > l || c < u || (u = Math.min(o.y, a.y), l = Math.max(o.y, a.y), h = Math.min(r.y, s.y), c = Math.max(r.y, s.y), h > l) || c < u);
  }
};
zc.serialVersionUID.get = function() {
  return 5873921885273102e3;
};
Object.defineProperties(A, zc);
var nn = {
  typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
  emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
  spaces: /\s+/,
  parenComma: /\)\s*,\s*\(/,
  doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
  // can't use {2} here
  trimParens: /^\s*\(?(.*?)\)?\s*$/
}, Ia = function(t) {
  this.geometryFactory = t || new K();
};
Ia.prototype.read = function(t) {
  var e, n, r;
  t = t.replace(/[\n\r]/g, " ");
  var s = nn.typeStr.exec(t);
  if (t.search("EMPTY") !== -1 && (s = nn.emptyTypeStr.exec(t), s[2] = void 0), s && (n = s[1].toLowerCase(), r = s[2], Yr[n] && (e = Yr[n].apply(this, [r]))), e === void 0)
    throw new Error("Could not parse WKT " + t);
  return e;
};
Ia.prototype.write = function(t) {
  return this.extractGeometry(t);
};
Ia.prototype.extractGeometry = function(t) {
  var e = t.getGeometryType().toLowerCase();
  if (!Wn[e])
    return null;
  var n = e.toUpperCase(), r;
  return t.isEmpty() ? r = n + " EMPTY" : r = n + "(" + Wn[e].apply(this, [t]) + ")", r;
};
var Wn = {
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
    return Wn.coordinate.call(this, t._coordinates._coordinates[0]);
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
      n.push("(" + Wn.point.apply(e, [t._geometries[r]]) + ")");
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
      n.push(Wn.coordinate.apply(e, [t._points._coordinates[r]]));
    return n.join(",");
  },
  linearring: function(t) {
    for (var e = this, n = [], r = 0, s = t._points._coordinates.length; r < s; ++r)
      n.push(Wn.coordinate.apply(e, [t._points._coordinates[r]]));
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
      n.push("(" + Wn.linestring.apply(e, [t._geometries[r]]) + ")");
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
    n.push("(" + Wn.linestring.apply(this, [t._shell]) + ")");
    for (var r = 0, s = t._holes.length; r < s; ++r)
      n.push("(" + Wn.linestring.apply(e, [t._holes[r]]) + ")");
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
      n.push("(" + Wn.polygon.apply(e, [t._geometries[r]]) + ")");
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
}, Yr = {
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
    var e = t.trim().split(nn.spaces);
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
      n = r[o].replace(nn.trimParens, "$1"), s.push(Yr.point.apply(e, [n]));
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
      r = e[s].trim().split(nn.spaces), n.push(new v(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
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
      r = e[s].trim().split(nn.spaces), n.push(new v(Number.parseFloat(r[0]), Number.parseFloat(r[1])));
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
    for (var n, r = t.trim().split(nn.parenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(nn.trimParens, "$1"), s.push(Yr.linestring.apply(e, [n]));
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
    for (var n, r, s, o = t.trim().split(nn.parenComma), a, u = [], l = 0, h = o.length; l < h; ++l)
      n = o[l].replace(nn.trimParens, "$1"), r = Yr.linestring.apply(e, [n]), s = e.geometryFactory.createLinearRing(r._points), l === 0 ? a = s : u.push(s);
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
    for (var n, r = t.trim().split(nn.doubleParenComma), s = [], o = 0, a = r.length; o < a; ++o)
      n = r[o].replace(nn.trimParens, "$1"), s.push(Yr.polygon.apply(e, [n]));
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
}, Ue = function(t) {
  this.parser = new Ia(t);
};
Ue.prototype.write = function(t) {
  return this.parser.write(t);
};
Ue.toLineString = function(t, e) {
  if (arguments.length !== 2)
    throw new Error("Not implemented");
  return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )";
};
var ei = function(i) {
  function t(e) {
    i.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = new i().stack;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(Error), na = function(i) {
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
}(ei), j = function() {
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
    throw new na("Should never reach here" + (t !== null ? ": " + t : ""));
  }
};
j.isTrue = function() {
  var t, e;
  if (arguments.length === 1)
    t = arguments[0], j.isTrue(t, null);
  else if (arguments.length === 2 && (t = arguments[0], e = arguments[1], !t))
    throw e === null ? new na() : new na(e);
};
j.equals = function() {
  var t, e, n;
  if (arguments.length === 2)
    t = arguments[0], e = arguments[1], j.equals(t, e, null);
  else if (arguments.length === 3 && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t)))
    throw new na("Expected " + t + " but encountered " + e + (n !== null ? ": " + n : ""));
};
var pt = function() {
  this._result = null, this._inputLines = Array(2).fill().map(function() {
    return Array(2);
  }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new v(), this._intPt[1] = new v(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
}, Pr = { DONT_INTERSECT: { configurable: !0 }, DO_INTERSECT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, NO_INTERSECTION: { configurable: !0 }, POINT_INTERSECTION: { configurable: !0 }, COLLINEAR_INTERSECTION: { configurable: !0 } };
pt.prototype.getIndexAlongSegment = function(t, e) {
  return this.computeIntLineIndex(), this._intLineIndex[t][e];
};
pt.prototype.getTopologySummary = function() {
  var t = new Cn();
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
  return Ue.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + Ue.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
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
Pr.DONT_INTERSECT.get = function() {
  return 0;
};
Pr.DO_INTERSECT.get = function() {
  return 1;
};
Pr.COLLINEAR.get = function() {
  return 2;
};
Pr.NO_INTERSECTION.get = function() {
  return 0;
};
Pr.POINT_INTERSECTION.get = function() {
  return 1;
};
Pr.COLLINEAR_INTERSECTION.get = function() {
  return 2;
};
Object.defineProperties(pt, Pr);
var $i = function(i) {
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
      a = Xe.intersection(n, r, s, o);
    } catch (u) {
      if (u instanceof ys)
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
    var a = new v(n), u = new v(r), l = new v(s), h = new v(o), c = new v();
    this.normalizeToEnvCentre(a, u, l, h, c);
    var f = this.safeHCoordinateIntersection(a, u, l, h);
    return f.x += c.x, f.y += c.y, f;
  }, t.prototype.computeCollinearIntersection = function(n, r, s, o) {
    var a = A.intersects(n, r, s), u = A.intersects(n, r, o), l = A.intersects(s, o, n), h = A.intersects(s, o, r);
    return a && u ? (this._intPt[0] = s, this._intPt[1] = o, i.COLLINEAR_INTERSECTION) : l && h ? (this._intPt[0] = n, this._intPt[1] = r, i.COLLINEAR_INTERSECTION) : a && l ? (this._intPt[0] = s, this._intPt[1] = n, s.equals(n) && !u && !h ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : a && h ? (this._intPt[0] = s, this._intPt[1] = r, s.equals(r) && !u && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && l ? (this._intPt[0] = o, this._intPt[1] = n, o.equals(n) && !a && !h ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : u && h ? (this._intPt[0] = o, this._intPt[1] = r, o.equals(r) && !a && !l ? i.POINT_INTERSECTION : i.COLLINEAR_INTERSECTION) : i.NO_INTERSECTION;
  }, t.prototype.normalizeToEnvCentre = function(n, r, s, o, a) {
    var u = n.x < r.x ? n.x : r.x, l = n.y < r.y ? n.y : r.y, h = n.x > r.x ? n.x : r.x, c = n.y > r.y ? n.y : r.y, f = s.x < o.x ? s.x : o.x, g = s.y < o.y ? s.y : o.y, p = s.x > o.x ? s.x : o.x, d = s.y > o.y ? s.y : o.y, _ = u > f ? u : f, m = h < p ? h : p, y = l > g ? l : g, x = c < d ? c : d, I = (_ + m) / 2, S = (y + x) / 2;
    a.x = I, a.y = S, n.x -= a.x, n.y -= a.y, r.x -= a.x, r.y -= a.y, s.x -= a.x, s.y -= a.y, o.x -= a.x, o.y -= a.y;
  }, t.prototype.computeIntersect = function(n, r, s, o) {
    if (this._isProper = !1, !A.intersects(n, r, s, o))
      return i.NO_INTERSECTION;
    var a = M.orientationIndex(n, r, s), u = M.orientationIndex(n, r, o);
    if (a > 0 && u > 0 || a < 0 && u < 0)
      return i.NO_INTERSECTION;
    var l = M.orientationIndex(s, o, n), h = M.orientationIndex(s, o, r);
    if (l > 0 && h > 0 || l < 0 && h < 0)
      return i.NO_INTERSECTION;
    var c = a === 0 && u === 0 && l === 0 && h === 0;
    return c ? this.computeCollinearIntersection(n, r, s, o) : (a === 0 || u === 0 || l === 0 || h === 0 ? (this._isProper = !1, n.equals2D(s) || n.equals2D(o) ? this._intPt[0] = n : r.equals2D(s) || r.equals2D(o) ? this._intPt[0] = r : a === 0 ? this._intPt[0] = new v(s) : u === 0 ? this._intPt[0] = new v(o) : l === 0 ? this._intPt[0] = new v(n) : h === 0 && (this._intPt[0] = new v(r))) : (this._isProper = !0, this._intPt[0] = this.intersection(n, r, s, o)), i.POINT_INTERSECTION);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t.nearestEndpoint = function(n, r, s, o) {
    var a = n, u = M.distancePointLine(n, s, o), l = M.distancePointLine(r, s, o);
    return l < u && (u = l, a = r), l = M.distancePointLine(s, n, r), l < u && (u = l, a = s), l = M.distancePointLine(o, n, r), l < u && (u = l, a = o), a;
  }, t;
}(pt), gr = function() {
};
gr.prototype.interfaces_ = function() {
  return [];
};
gr.prototype.getClass = function() {
  return gr;
};
gr.orientationIndex = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = n.x - e.x, a = n.y - e.y;
  return gr.signOfDet2x2(r, s, o, a);
};
gr.signOfDet2x2 = function(t, e, n, r) {
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
var ln = function() {
  this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
  var t = arguments[0];
  this._p = t;
};
ln.prototype.countSegment = function(t, e) {
  if (t.x < this._p.x && e.x < this._p.x)
    return null;
  if (this._p.x === e.x && this._p.y === e.y)
    return this._isPointOnSegment = !0, null;
  if (t.y === this._p.y && e.y === this._p.y) {
    var n = t.x, r = e.x;
    return n > r && (n = e.x, r = t.x), this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0), null;
  }
  if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
    var s = t.x - this._p.x, o = t.y - this._p.y, a = e.x - this._p.x, u = e.y - this._p.y, l = gr.signOfDet2x2(s, o, a, u);
    if (l === 0)
      return this._isPointOnSegment = !0, null;
    u < o && (l = -l), l > 0 && this._crossingCount++;
  }
};
ln.prototype.isPointInPolygon = function() {
  return this.getLocation() !== E.EXTERIOR;
};
ln.prototype.getLocation = function() {
  return this._isPointOnSegment ? E.BOUNDARY : this._crossingCount % 2 === 1 ? E.INTERIOR : E.EXTERIOR;
};
ln.prototype.isOnSegment = function() {
  return this._isPointOnSegment;
};
ln.prototype.interfaces_ = function() {
  return [];
};
ln.prototype.getClass = function() {
  return ln;
};
ln.locatePointInRing = function() {
  if (arguments[0] instanceof v && X(arguments[1], $)) {
    for (var t = arguments[0], e = arguments[1], n = new ln(t), r = new v(), s = new v(), o = 1; o < e.size(); o++)
      if (e.getCoordinate(o, r), e.getCoordinate(o - 1, s), n.countSegment(r, s), n.isOnSegment())
        return n.getLocation();
    return n.getLocation();
  } else if (arguments[0] instanceof v && arguments[1] instanceof Array) {
    for (var a = arguments[0], u = arguments[1], l = new ln(a), h = 1; h < u.length; h++) {
      var c = u[h], f = u[h - 1];
      if (l.countSegment(c, f), l.isOnSegment())
        return l.getLocation();
    }
    return l.getLocation();
  }
};
var M = function() {
}, Tr = { CLOCKWISE: { configurable: !0 }, RIGHT: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, LEFT: { configurable: !0 }, COLLINEAR: { configurable: !0 }, STRAIGHT: { configurable: !0 } };
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
    var h = new v(), c = new v(), f = new v();
    u.getCoordinate(0, c), u.getCoordinate(1, f);
    var g = c.x;
    f.x -= g;
    for (var p = 0, d = 1; d < l - 1; d++)
      h.y = c.y, c.x = f.x, c.y = f.y, u.getCoordinate(d + 1, f), f.x -= g, p += c.x * (h.y - f.y);
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
      var a = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y), u = (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y), l = u / o, h = a / o;
      (h < 0 || h > 1 || l < 0 || l > 1) && (s = !0);
    }
  }
  return s ? Ee.min(M.distancePointLine(t, n, r), M.distancePointLine(e, n, r), M.distancePointLine(n, t, e), M.distancePointLine(r, t, e)) : 0;
};
M.isPointInRing = function(t, e) {
  return M.locatePointInRing(t, e) !== E.EXTERIOR;
};
M.computeLength = function(t) {
  var e = t.size();
  if (e <= 1)
    return 0;
  var n = 0, r = new v();
  t.getCoordinate(0, r);
  for (var s = r.x, o = r.y, a = 1; a < e; a++) {
    t.getCoordinate(a, r);
    var u = r.x, l = r.y, h = u - s, c = l - o;
    n += Math.sqrt(h * h + c * c), s = u, o = l;
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
  var l = t[a], h = t[u];
  if (l.equals2D(n) || h.equals2D(n) || l.equals2D(h))
    return !1;
  var c = M.computeOrientation(l, n, h), f = !1;
  return c === 0 ? f = l.x > h.x : f = c > 0, f;
};
M.locatePointInRing = function(t, e) {
  return ln.locatePointInRing(t, e);
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
    var l = (u.x - a.x) * (u.x - a.x) + (u.y - a.y) * (u.y - a.y), h = ((o.x - a.x) * (u.x - a.x) + (o.y - a.y) * (u.y - a.y)) / l;
    if (h <= 0)
      return o.distance(a);
    if (h >= 1)
      return o.distance(u);
    var c = ((a.y - o.y) * (u.x - a.x) - (a.x - o.x) * (u.y - a.y)) / l;
    return Math.abs(c) * Math.sqrt(l);
  }
};
M.isOnLine = function(t, e) {
  for (var n = new $i(), r = 1; r < e.length; r++) {
    var s = e[r - 1], o = e[r];
    if (n.computeIntersection(t, s, o), n.hasIntersection())
      return !0;
  }
  return !1;
};
Tr.CLOCKWISE.get = function() {
  return -1;
};
Tr.RIGHT.get = function() {
  return M.CLOCKWISE;
};
Tr.COUNTERCLOCKWISE.get = function() {
  return 1;
};
Tr.LEFT.get = function() {
  return M.COUNTERCLOCKWISE;
};
Tr.COLLINEAR.get = function() {
  return 0;
};
Tr.STRAIGHT.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(M, Tr);
var ni = function() {
};
ni.prototype.filter = function(t) {
};
ni.prototype.interfaces_ = function() {
  return [];
};
ni.prototype.getClass = function() {
  return ni;
};
var V = function() {
  var t = arguments[0];
  this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID();
}, Yn = { serialVersionUID: { configurable: !0 }, SORTINDEX_POINT: { configurable: !0 }, SORTINDEX_MULTIPOINT: { configurable: !0 }, SORTINDEX_LINESTRING: { configurable: !0 }, SORTINDEX_LINEARRING: { configurable: !0 }, SORTINDEX_MULTILINESTRING: { configurable: !0 }, SORTINDEX_POLYGON: { configurable: !0 }, SORTINDEX_MULTIPOLYGON: { configurable: !0 }, SORTINDEX_GEOMETRYCOLLECTION: { configurable: !0 }, geometryChangedFilter: { configurable: !0 } };
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
  return [Ca, Fe, ke];
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
Yn.serialVersionUID.get = function() {
  return 8763622679187377e3;
};
Yn.SORTINDEX_POINT.get = function() {
  return 0;
};
Yn.SORTINDEX_MULTIPOINT.get = function() {
  return 1;
};
Yn.SORTINDEX_LINESTRING.get = function() {
  return 2;
};
Yn.SORTINDEX_LINEARRING.get = function() {
  return 3;
};
Yn.SORTINDEX_MULTILINESTRING.get = function() {
  return 4;
};
Yn.SORTINDEX_POLYGON.get = function() {
  return 5;
};
Yn.SORTINDEX_MULTIPOLYGON.get = function() {
  return 6;
};
Yn.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
  return 7;
};
Yn.geometryChangedFilter.get = function() {
  return Uu;
};
Object.defineProperties(V, Yn);
var Uu = function() {
};
Uu.interfaces_ = function() {
  return [ni];
};
Uu.filter = function(t) {
  t.geometryChangedAction();
};
var Dn = function() {
};
Dn.prototype.filter = function(t) {
};
Dn.prototype.interfaces_ = function() {
  return [];
};
Dn.prototype.getClass = function() {
  return Dn;
};
var Me = function() {
}, ai = { Mod2BoundaryNodeRule: { configurable: !0 }, EndPointBoundaryNodeRule: { configurable: !0 }, MultiValentEndPointBoundaryNodeRule: { configurable: !0 }, MonoValentEndPointBoundaryNodeRule: { configurable: !0 }, MOD2_BOUNDARY_RULE: { configurable: !0 }, ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MULTIVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, MONOVALENT_ENDPOINT_BOUNDARY_RULE: { configurable: !0 }, OGC_SFS_BOUNDARY_RULE: { configurable: !0 } };
Me.prototype.isInBoundary = function(t) {
};
Me.prototype.interfaces_ = function() {
  return [];
};
Me.prototype.getClass = function() {
  return Me;
};
ai.Mod2BoundaryNodeRule.get = function() {
  return Qr;
};
ai.EndPointBoundaryNodeRule.get = function() {
  return $r;
};
ai.MultiValentEndPointBoundaryNodeRule.get = function() {
  return ts;
};
ai.MonoValentEndPointBoundaryNodeRule.get = function() {
  return es;
};
ai.MOD2_BOUNDARY_RULE.get = function() {
  return new Qr();
};
ai.ENDPOINT_BOUNDARY_RULE.get = function() {
  return new $r();
};
ai.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new ts();
};
ai.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
  return new es();
};
ai.OGC_SFS_BOUNDARY_RULE.get = function() {
  return Me.MOD2_BOUNDARY_RULE;
};
Object.defineProperties(Me, ai);
var Qr = function() {
};
Qr.prototype.isInBoundary = function(t) {
  return t % 2 === 1;
};
Qr.prototype.interfaces_ = function() {
  return [Me];
};
Qr.prototype.getClass = function() {
  return Qr;
};
var $r = function() {
};
$r.prototype.isInBoundary = function(t) {
  return t > 0;
};
$r.prototype.interfaces_ = function() {
  return [Me];
};
$r.prototype.getClass = function() {
  return $r;
};
var ts = function() {
};
ts.prototype.isInBoundary = function(t) {
  return t > 1;
};
ts.prototype.interfaces_ = function() {
  return [Me];
};
ts.prototype.getClass = function() {
  return ts;
};
var es = function() {
};
es.prototype.isInBoundary = function(t) {
  return t === 1;
};
es.prototype.interfaces_ = function() {
  return [Me];
};
es.prototype.getClass = function() {
  return es;
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
function Wu(i) {
  this.message = i || "";
}
Wu.prototype = new Error();
Wu.prototype.name = "IndexOutOfBoundsException";
var vs = function() {
};
vs.prototype.hasNext = function() {
};
vs.prototype.next = function() {
};
vs.prototype.remove = function() {
};
var Ye = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.get = function() {
  }, t.prototype.set = function() {
  }, t.prototype.isEmpty = function() {
  }, t;
}(Nt);
function xs(i) {
  this.message = i || "";
}
xs.prototype = new Error();
xs.prototype.name = "NoSuchElementException";
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
    return new Ud(this);
  }, t.prototype.get = function(n) {
    if (n < 0 || n >= this.size())
      throw new Wu();
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
}(Ye), Ud = function(i) {
  function t(e) {
    i.call(this), this.arrayList_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.arrayList_.size())
      throw new xs();
    return this.arrayList_.get(this.position_++);
  }, t.prototype.hasNext = function() {
    return this.position_ < this.arrayList_.size();
  }, t.prototype.set = function(n) {
    return this.arrayList_.set(this.position_ - 1, n);
  }, t.prototype.remove = function() {
    this.arrayList_.remove(this.arrayList_.get(this.position_));
  }, t;
}(vs), Eo = function(i) {
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
          var h = this.get(this.size() - 1);
          if (h.equals2D(u))
            return null;
        }
        i.prototype.add.call(this, u);
      } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
        var c = arguments[0], f = arguments[1];
        return this.add(c, f), !0;
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
        var y = arguments[0], x = arguments[1], I = arguments[2];
        if (!I) {
          var S = this.size();
          if (S > 0) {
            if (y > 0) {
              var w = this.get(y - 1);
              if (w.equals2D(x))
                return null;
            }
            if (y < S) {
              var O = this.get(y);
              if (O.equals2D(x))
                return null;
            }
          }
        }
        i.prototype.add.call(this, y, x);
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
}, Sa = { ForwardComparator: { configurable: !0 }, BidirectionalComparator: { configurable: !0 }, coordArrayType: { configurable: !0 } };
Sa.ForwardComparator.get = function() {
  return Qs;
};
Sa.BidirectionalComparator.get = function() {
  return ns;
};
Sa.coordArrayType.get = function() {
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
  for (var n = new Eo(), r = 0; r < t.length; r++)
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
  var e = new Eo(t, !1);
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
  e = Ee.clamp(e, 0, t.length), n = Ee.clamp(n, -1, t.length);
  var r = n - e + 1;
  n < 0 && (r = 0), e >= t.length && (r = 0), n < e && (r = 0);
  var s = new Array(r).fill(null);
  if (r === 0)
    return s;
  for (var o = 0, a = e; a <= n; a++)
    s[o++] = t[a];
  return s;
};
Object.defineProperties(J, Sa);
var Qs = function() {
};
Qs.prototype.compare = function(t, e) {
  var n = t, r = e;
  return J.compare(n, r);
};
Qs.prototype.interfaces_ = function() {
  return [Kr];
};
Qs.prototype.getClass = function() {
  return Qs;
};
var ns = function() {
};
ns.prototype.compare = function(t, e) {
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
ns.prototype.OLDcompare = function(t, e) {
  var n = t, r = e;
  if (n.length < r.length)
    return -1;
  if (n.length > r.length)
    return 1;
  if (n.length === 0)
    return 0;
  for (var s = J.increasingDirection(n), o = J.increasingDirection(r), a = s > 0 ? 0 : n.length - 1, u = o > 0 ? 0 : n.length - 1, l = 0; l < n.length; l++) {
    var h = n[a].compareTo(r[u]);
    if (h !== 0)
      return h;
    a += s, u += o;
  }
  return 0;
};
ns.prototype.interfaces_ = function() {
  return [Kr];
};
ns.prototype.getClass = function() {
  return ns;
};
var br = function() {
};
br.prototype.get = function() {
};
br.prototype.put = function() {
};
br.prototype.size = function() {
};
br.prototype.values = function() {
};
br.prototype.entrySet = function() {
};
var Wd = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t;
}(br);
function Co(i) {
  this.message = i || "";
}
Co.prototype = new Error();
Co.prototype.name = "OperationNotSupported";
function Ra() {
}
Ra.prototype = new Nt();
Ra.prototype.contains = function() {
};
var qu = function(i) {
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
    return new qd(this);
  }, t;
}(Ra), qd = function(i) {
  function t(e) {
    i.call(this), this.hashSet_ = e, this.position_ = 0;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.next = function() {
    if (this.position_ === this.hashSet_.size())
      throw new xs();
    return this.hashSet_.array_[this.position_++];
  }, t.prototype.hasNext = function() {
    return this.position_ < this.hashSet_.size();
  }, t.prototype.remove = function() {
    throw new Co();
  }, t;
}(vs), Hn = 0, Mi = 1;
function ch(i) {
  return i === null ? Hn : i.color;
}
function ut(i) {
  return i === null ? null : i.parent;
}
function Un(i, t) {
  i !== null && (i.color = t);
}
function Za(i) {
  return i === null ? null : i.left;
}
function fh(i) {
  return i === null ? null : i.right;
}
function qt() {
  this.root_ = null, this.size_ = 0;
}
qt.prototype = new Wd();
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
      color: Hn,
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
    color: Hn,
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
  for (i.color = Mi; i != null && i !== this.root_ && i.parent.color === Mi; )
    if (ut(i) === Za(ut(ut(i)))) {
      var e = fh(ut(ut(i)));
      ch(e) === Mi ? (Un(ut(i), Hn), Un(e, Hn), Un(ut(ut(i)), Mi), i = ut(ut(i))) : (i === fh(ut(i)) && (i = ut(i), t.rotateLeft(i)), Un(ut(i), Hn), Un(ut(ut(i)), Mi), t.rotateRight(ut(ut(i))));
    } else {
      var n = Za(ut(ut(i)));
      ch(n) === Mi ? (Un(ut(i), Hn), Un(n, Hn), Un(ut(ut(i)), Mi), i = ut(ut(i))) : (i === Za(ut(i)) && (i = ut(i), t.rotateRight(i)), Un(ut(i), Hn), Un(ut(ut(i)), Mi), t.rotateLeft(ut(ut(i))));
    }
  this.root_.color = Hn;
};
qt.prototype.values = function() {
  var i = new N(), t = this.getFirstEntry();
  if (t !== null)
    for (i.add(t.value); (t = qt.successor(t)) !== null; )
      i.add(t.value);
  return i;
};
qt.prototype.entrySet = function() {
  var i = new qu(), t = this.getFirstEntry();
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
var $s = function() {
};
$s.prototype.interfaces_ = function() {
  return [];
};
$s.prototype.getClass = function() {
  return $s;
};
function Vc() {
}
Vc.prototype = new Ra();
function gn() {
  this.array_ = [], arguments[0] instanceof Nt && this.addAll(arguments[0]);
}
gn.prototype = new Vc();
gn.prototype.contains = function(i) {
  for (var t = this, e = 0, n = this.array_.length; e < n; e++) {
    var r = t.array_[e];
    if (r.compareTo(i) === 0)
      return !0;
  }
  return !1;
};
gn.prototype.add = function(i) {
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
gn.prototype.addAll = function(i) {
  for (var t = this, e = i.iterator(); e.hasNext(); )
    t.add(e.next());
  return !0;
};
gn.prototype.remove = function(i) {
  throw new Co();
};
gn.prototype.size = function() {
  return this.array_.length;
};
gn.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
gn.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
gn.prototype.iterator = function() {
  return new wa(this);
};
var wa = function(i) {
  this.treeSet_ = i, this.position_ = 0;
};
wa.prototype.next = function() {
  if (this.position_ === this.treeSet_.size())
    throw new xs();
  return this.treeSet_.array_[this.position_++];
};
wa.prototype.hasNext = function() {
  return this.position_ < this.treeSet_.size();
};
wa.prototype.remove = function() {
  throw new Co();
};
var zi = function() {
};
zi.sort = function() {
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
zi.asList = function(t) {
  for (var e = new N(), n = 0, r = t.length; n < r; n++)
    e.add(t[n]);
  return e;
};
var tt = function() {
}, Qe = { P: { configurable: !0 }, L: { configurable: !0 }, A: { configurable: !0 }, FALSE: { configurable: !0 }, TRUE: { configurable: !0 }, DONTCARE: { configurable: !0 }, SYM_FALSE: { configurable: !0 }, SYM_TRUE: { configurable: !0 }, SYM_DONTCARE: { configurable: !0 }, SYM_P: { configurable: !0 }, SYM_L: { configurable: !0 }, SYM_A: { configurable: !0 } };
Qe.P.get = function() {
  return 0;
};
Qe.L.get = function() {
  return 1;
};
Qe.A.get = function() {
  return 2;
};
Qe.FALSE.get = function() {
  return -1;
};
Qe.TRUE.get = function() {
  return -2;
};
Qe.DONTCARE.get = function() {
  return -3;
};
Qe.SYM_FALSE.get = function() {
  return "F";
};
Qe.SYM_TRUE.get = function() {
  return "T";
};
Qe.SYM_DONTCARE.get = function() {
  return "*";
};
Qe.SYM_P.get = function() {
  return "0";
};
Qe.SYM_L.get = function() {
  return "1";
};
Qe.SYM_A.get = function() {
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
  switch (Js.toUpperCase(t)) {
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
Object.defineProperties(tt, Qe);
var pn = function() {
};
pn.prototype.filter = function(t) {
};
pn.prototype.interfaces_ = function() {
  return [];
};
pn.prototype.getClass = function() {
  return pn;
};
var We = function() {
};
We.prototype.filter = function(t, e) {
};
We.prototype.isDone = function() {
};
We.prototype.isGeometryChanged = function() {
};
We.prototype.interfaces_ = function() {
  return [];
};
We.prototype.getClass = function() {
  return We;
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
    zi.sort(this._geometries);
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
      var s = arguments[0], o = new gn(zi.asList(this._geometries)), a = new gn(zi.asList(s._geometries));
      return this.compare(o, a);
    } else if (arguments.length === 2) {
      for (var u = arguments[0], l = arguments[1], h = u, c = this.getNumGeometries(), f = h.getNumGeometries(), g = 0; g < c && g < f; ) {
        var p = r.getGeometryN(g), d = h.getGeometryN(g), _ = p.compareToSameClass(d, l);
        if (_ !== 0)
          return _;
        g++;
      }
      return g < c ? 1 : g < f ? -1 : 0;
    }
  }, t.prototype.apply = function() {
    var r = this;
    if (X(arguments[0], Dn))
      for (var s = arguments[0], o = 0; o < this._geometries.length; o++)
        r._geometries[o].apply(s);
    else if (X(arguments[0], We)) {
      var a = arguments[0];
      if (this._geometries.length === 0)
        return null;
      for (var u = 0; u < this._geometries.length && (r._geometries[u].apply(a), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], pn)) {
      var l = arguments[0];
      l.filter(this);
      for (var h = 0; h < this._geometries.length; h++)
        r._geometries[h].apply(l);
    } else if (X(arguments[0], ni)) {
      var c = arguments[0];
      c.filter(this);
      for (var f = 0; f < this._geometries.length; f++)
        r._geometries[f].apply(c);
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
}(V), Yi = function(i) {
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
    return new Te(this).getBoundary();
  }, t.prototype.getGeometryType = function() {
    return "MultiLineString";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [$s];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 8166665132445434e3;
  }, Object.defineProperties(t, e), t;
}(ne), Te = function() {
  if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, arguments.length === 1) {
    var t = arguments[0], e = Me.MOD2_BOUNDARY_RULE;
    this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e;
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1];
    this._geom = n, this._geomFact = n.getFactory(), this._bnRule = r;
  }
};
Te.prototype.boundaryMultiLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  var e = this.computeBoundaryCoordinates(t);
  return e.length === 1 ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e);
};
Te.prototype.getBoundary = function() {
  return this._geom instanceof mt ? this.boundaryLineString(this._geom) : this._geom instanceof Yi ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary();
};
Te.prototype.boundaryLineString = function(t) {
  if (this._geom.isEmpty())
    return this.getEmptyMultiPoint();
  if (t.isClosed()) {
    var e = this._bnRule.isInBoundary(2);
    return e ? t.getStartPoint() : this._geomFact.createMultiPoint();
  }
  return this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()]);
};
Te.prototype.getEmptyMultiPoint = function() {
  return this._geomFact.createMultiPoint();
};
Te.prototype.computeBoundaryCoordinates = function(t) {
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
Te.prototype.addEndpoint = function(t) {
  var e = this._endpointMap.get(t);
  e === null && (e = new ia(), this._endpointMap.put(t, e)), e.count++;
};
Te.prototype.interfaces_ = function() {
  return [];
};
Te.prototype.getClass = function() {
  return Te;
};
Te.getBoundary = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Te(t);
    return e.getBoundary();
  } else if (arguments.length === 2) {
    var n = arguments[0], r = arguments[1], s = new Te(n, r);
    return s.getBoundary();
  }
};
var ia = function() {
  this.count = null;
};
ia.prototype.interfaces_ = function() {
  return [];
};
ia.prototype.getClass = function() {
  return ia;
};
function Hd() {
}
function jd() {
}
var Zd = function() {
};
function Kd() {
}
function Jd() {
}
function Qd() {
}
var be = function() {
}, Hu = { NEWLINE: { configurable: !0 }, SIMPLE_ORDINATE_FORMAT: { configurable: !0 } };
be.prototype.interfaces_ = function() {
  return [];
};
be.prototype.getClass = function() {
  return be;
};
be.chars = function(t, e) {
  for (var n = new Array(e).fill(null), r = 0; r < e; r++)
    n[r] = t;
  return String(n);
};
be.getStackTrace = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = new Kd(), n = new Hd();
    return t.printStackTrace(n), e.toString();
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1], o = "";
    new jd(be.getStackTrace(r));
    for (var a = new Qd(), u = 0; u < s; u++)
      try {
        o += a.readLine() + be.NEWLINE;
      } catch (l) {
        if (l instanceof Jd)
          j.shouldNeverReachHere();
        else
          throw l;
      } finally {
      }
    return o;
  }
};
be.split = function(t, e) {
  for (var n = e.length, r = new N(), s = "" + t, o = s.indexOf(e); o >= 0; ) {
    var a = s.substring(0, o);
    r.add(a), s = s.substring(o + n), o = s.indexOf(e);
  }
  s.length > 0 && r.add(s);
  for (var u = new Array(r.size()).fill(null), l = 0; l < u.length; l++)
    u[l] = r.get(l);
  return u;
};
be.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return be.SIMPLE_ORDINATE_FORMAT.format(t);
  }
};
be.spaces = function(t) {
  return be.chars(" ", t);
};
Hu.NEWLINE.get = function() {
  return zt.getProperty("line.separator");
};
Hu.SIMPLE_ORDINATE_FORMAT.get = function() {
  return new Zd();
};
Object.defineProperties(be, Hu);
var Et = function() {
};
Et.prototype.interfaces_ = function() {
  return [];
};
Et.prototype.getClass = function() {
  return Et;
};
Et.copyCoord = function(t, e, n, r) {
  for (var s = Math.min(t.getDimension(), n.getDimension()), o = 0; o < s; o++)
    n.setOrdinate(r, o, t.getOrdinate(e, o));
};
Et.isRing = function(t) {
  var e = t.size();
  return e === 0 ? !0 : e <= 3 ? !1 : t.getOrdinate(0, $.X) === t.getOrdinate(e - 1, $.X) && t.getOrdinate(0, $.Y) === t.getOrdinate(e - 1, $.Y);
};
Et.isEqual = function(t, e) {
  var n = t.size(), r = e.size();
  if (n !== r)
    return !1;
  for (var s = Math.min(t.getDimension(), e.getDimension()), o = 0; o < n; o++)
    for (var a = 0; a < s; a++) {
      var u = t.getOrdinate(o, a), l = e.getOrdinate(o, a);
      if (t.getOrdinate(o, a) !== e.getOrdinate(o, a) && !(q.isNaN(u) && q.isNaN(l)))
        return !1;
    }
  return !0;
};
Et.extend = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  if (Et.copy(e, 0, r, 0, s), s > 0)
    for (var o = s; o < n; o++)
      Et.copy(e, s - 1, r, o, 1);
  return r;
};
Et.reverse = function(t) {
  for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++)
    Et.swap(t, r, e - r);
};
Et.swap = function(t, e, n) {
  if (e === n)
    return null;
  for (var r = 0; r < t.getDimension(); r++) {
    var s = t.getOrdinate(e, r);
    t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, s);
  }
};
Et.copy = function(t, e, n, r, s) {
  for (var o = 0; o < s; o++)
    Et.copyCoord(t, e + o, n, r + o);
};
Et.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = t.size();
    if (e === 0)
      return "()";
    var n = t.getDimension(), r = new Cn();
    r.append("(");
    for (var s = 0; s < e; s++) {
      s > 0 && r.append(" ");
      for (var o = 0; o < n; o++)
        o > 0 && r.append(","), r.append(be.toString(t.getOrdinate(s, o)));
    }
    return r.append(")"), r.toString();
  }
};
Et.ensureValidRing = function(t, e) {
  var n = e.size();
  if (n === 0)
    return e;
  if (n <= 3)
    return Et.createClosedRing(t, e, 4);
  var r = e.getOrdinate(0, $.X) === e.getOrdinate(n - 1, $.X) && e.getOrdinate(0, $.Y) === e.getOrdinate(n - 1, $.Y);
  return r ? e : Et.createClosedRing(t, e, n + 1);
};
Et.createClosedRing = function(t, e, n) {
  var r = t.create(n, e.getDimension()), s = e.size();
  Et.copy(e, 0, r, 0, s);
  for (var o = s; o < n; o++)
    Et.copy(e, 0, r, o, 1);
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
        return r._points.getCoordinate(s).compareTo(r._points.getCoordinate(o)) > 0 && Et.reverse(r._points), null;
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
    Et.reverse(r);
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
      var h = arguments[0], c = arguments[1], f = h;
      return c.compare(this._points, f._points);
    }
  }, t.prototype.apply = function() {
    var r = this;
    if (X(arguments[0], Dn))
      for (var s = arguments[0], o = 0; o < this._points.size(); o++)
        s.filter(r._points.getCoordinate(o));
    else if (X(arguments[0], We)) {
      var a = arguments[0];
      if (this._points.size() === 0)
        return null;
      for (var u = 0; u < this._points.size() && (a.filter(r._points, u), !a.isDone()); u++)
        ;
      a.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], pn)) {
      var l = arguments[0];
      l.filter(this);
    } else if (X(arguments[0], ni)) {
      var h = arguments[0];
      h.filter(this);
    }
  }, t.prototype.getBoundary = function() {
    return new Te(this).getBoundary();
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
    return [$s];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 3110669828065365500;
  }, Object.defineProperties(t, e), t;
}(V), to = function() {
};
to.prototype.interfaces_ = function() {
  return [];
};
to.prototype.getClass = function() {
  return to;
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
    if (X(arguments[0], Dn)) {
      var r = arguments[0];
      if (this.isEmpty())
        return null;
      r.filter(this.getCoordinate());
    } else if (X(arguments[0], We)) {
      var s = arguments[0];
      if (this.isEmpty())
        return null;
      s.filter(this._coordinates, 0), s.isGeometryChanged() && this.geometryChanged();
    } else if (X(arguments[0], pn)) {
      var o = arguments[0];
      o.filter(this);
    } else if (X(arguments[0], ni)) {
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
    return [to];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return 4902022702746615e3;
  }, Object.defineProperties(t, e), t;
}(V), vi = function() {
};
vi.prototype.interfaces_ = function() {
  return [];
};
vi.prototype.getClass = function() {
  return vi;
};
var bt = function(i) {
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
      for (var h = r._holes[l].getCoordinates(), c = 0; c < h.length; c++)
        o++, s[o] = h[c];
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
    for (var l = r.getX(0), h = r.getY(0), c = 1; c <= 4; c++) {
      var f = r.getX(c), g = r.getY(c), p = f !== l, d = g !== h;
      if (p === d)
        return !1;
      l = f, h = g;
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
      for (var h = 0; h < this._holes.length; h++)
        if (!r._holes[h].equalsExact(a._holes[h], o))
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
      zi.sort(this._holes);
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
      var u = arguments[0], l = arguments[1], h = u, c = this._shell, f = h._shell, g = c.compareToSameClass(f, l);
      if (g !== 0)
        return g;
      for (var p = this.getNumInteriorRing(), d = h.getNumInteriorRing(), _ = 0; _ < p && _ < d; ) {
        var m = r.getInteriorRingN(_), y = h.getInteriorRingN(_), x = m.compareToSameClass(y, l);
        if (x !== 0)
          return x;
        _++;
      }
      return _ < p ? 1 : _ < d ? -1 : 0;
    }
  }, t.prototype.apply = function(r) {
    var s = this;
    if (X(r, Dn)) {
      this._shell.apply(r);
      for (var o = 0; o < this._holes.length; o++)
        s._holes[o].apply(r);
    } else if (X(r, We)) {
      if (this._shell.apply(r), !r.isDone())
        for (var a = 0; a < this._holes.length && (s._holes[a].apply(r), !r.isDone()); a++)
          ;
      r.isGeometryChanged() && this.geometryChanged();
    } else if (X(r, pn))
      r.filter(this);
    else if (X(r, ni)) {
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
    return [vi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -3494792200821764600;
  }, Object.defineProperties(t, e), t;
}(V), is = function(i) {
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
    return [to];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -8048474874175356e3;
  }, Object.defineProperties(t, e), t;
}(ne), An = function(i) {
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
    Et.reverse(r);
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
}(mt), bn = function(i) {
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
    var h = new Array(s.size()).fill(null);
    return this.getFactory().createMultiLineString(s.toArray(h));
  }, t.prototype.getGeometryType = function() {
    return "MultiPolygon";
  }, t.prototype.copy = function() {
    for (var r = this, s = new Array(this._geometries.length).fill(null), o = 0; o < s.length; o++)
      s[o] = r._geometries[o].copy();
    return new t(s, this._factory);
  }, t.prototype.interfaces_ = function() {
    return [vi];
  }, t.prototype.getClass = function() {
    return t;
  }, e.serialVersionUID.get = function() {
    return -551033529766975900;
  }, Object.defineProperties(t, e), t;
}(ne), De = function(t) {
  this._factory = t || null, this._isUserDataCopied = !1;
}, Na = { NoOpGeometryOperation: { configurable: !0 }, CoordinateOperation: { configurable: !0 }, CoordinateSequenceOperation: { configurable: !0 } };
De.prototype.setCopyUserData = function(t) {
  this._isUserDataCopied = t;
};
De.prototype.edit = function(t, e) {
  if (t === null)
    return null;
  var n = this.editInternal(t, e);
  return this._isUserDataCopied && n.setUserData(t.getUserData()), n;
};
De.prototype.editInternal = function(t, e) {
  return this._factory === null && (this._factory = t.getFactory()), t instanceof ne ? this.editGeometryCollection(t, e) : t instanceof bt ? this.editPolygon(t, e) : t instanceof ge ? e.edit(t, this._factory) : t instanceof mt ? e.edit(t, this._factory) : (j.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null);
};
De.prototype.editGeometryCollection = function(t, e) {
  for (var n = this, r = e.edit(t, this._factory), s = new N(), o = 0; o < r.getNumGeometries(); o++) {
    var a = n.edit(r.getGeometryN(o), e);
    a === null || a.isEmpty() || s.add(a);
  }
  return r.getClass() === is ? this._factory.createMultiPoint(s.toArray([])) : r.getClass() === Yi ? this._factory.createMultiLineString(s.toArray([])) : r.getClass() === bn ? this._factory.createMultiPolygon(s.toArray([])) : this._factory.createGeometryCollection(s.toArray([]));
};
De.prototype.editPolygon = function(t, e) {
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
De.prototype.interfaces_ = function() {
  return [];
};
De.prototype.getClass = function() {
  return De;
};
De.GeometryEditorOperation = function() {
};
Na.NoOpGeometryOperation.get = function() {
  return eo;
};
Na.CoordinateOperation.get = function() {
  return no;
};
Na.CoordinateSequenceOperation.get = function() {
  return io;
};
Object.defineProperties(De, Na);
var eo = function() {
};
eo.prototype.edit = function(t, e) {
  return t;
};
eo.prototype.interfaces_ = function() {
  return [De.GeometryEditorOperation];
};
eo.prototype.getClass = function() {
  return eo;
};
var no = function() {
};
no.prototype.edit = function(t, e) {
  var n = this.editCoordinates(t.getCoordinates(), t);
  return n === null ? t : t instanceof An ? e.createLinearRing(n) : t instanceof mt ? e.createLineString(n) : t instanceof ge ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t;
};
no.prototype.interfaces_ = function() {
  return [De.GeometryEditorOperation];
};
no.prototype.getClass = function() {
  return no;
};
var io = function() {
};
io.prototype.edit = function(t, e) {
  return t instanceof An ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof mt ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof ge ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t;
};
io.prototype.interfaces_ = function() {
  return [De.GeometryEditorOperation];
};
io.prototype.getClass = function() {
  return io;
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
      for (var h = 0; h < u; h++)
        t._coordinates[h] = new v();
    }
  }
}, Xc = { serialVersionUID: { configurable: !0 } };
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
  return q.NaN;
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
    var e = new Cn(17 * this._coordinates.length);
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
  return [$, ke];
};
vt.prototype.getClass = function() {
  return vt;
};
Xc.serialVersionUID.get = function() {
  return -915438501601840600;
};
Object.defineProperties(vt, Xc);
var Fn = function() {
}, ju = { serialVersionUID: { configurable: !0 }, instanceObject: { configurable: !0 } };
Fn.prototype.readResolve = function() {
  return Fn.instance();
};
Fn.prototype.create = function() {
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
Fn.prototype.interfaces_ = function() {
  return [Jr, ke];
};
Fn.prototype.getClass = function() {
  return Fn;
};
Fn.instance = function() {
  return Fn.instanceObject;
};
ju.serialVersionUID.get = function() {
  return -4099577099607551500;
};
ju.instanceObject.get = function() {
  return new Fn();
};
Object.defineProperties(Fn, ju);
var Yc = function(i) {
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
    var n = new qu();
    return this.map_.entries().forEach(function(r) {
      return n.add(r);
    }), n;
  }, t.prototype.size = function() {
    return this.map_.size();
  }, t;
}(br), nt = function i() {
  if (this._modelType = null, this._scale = null, arguments.length === 0)
    this._modelType = i.FLOATING;
  else if (arguments.length === 1) {
    if (arguments[0] instanceof dn) {
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
}, Zu = { serialVersionUID: { configurable: !0 }, maximumPreciseValue: { configurable: !0 } };
nt.prototype.equals = function(t) {
  if (!(t instanceof nt))
    return !1;
  var e = t;
  return this._modelType === e._modelType && this._scale === e._scale;
};
nt.prototype.compareTo = function(t) {
  var e = t, n = this.getMaximumSignificantDigits(), r = e.getMaximumSignificantDigits();
  return new fn(n).compareTo(new fn(r));
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
    if (q.isNaN(t))
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
  return [ke, Fe];
};
nt.prototype.getClass = function() {
  return nt;
};
nt.mostPrecise = function(t, e) {
  return t.compareTo(e) >= 0 ? t : e;
};
Zu.serialVersionUID.get = function() {
  return 7777263578777804e3;
};
Zu.maximumPreciseValue.get = function() {
  return 9007199254740992;
};
Object.defineProperties(nt, Zu);
var dn = function i(t) {
  this._name = t || null, i.nameToTypeMap.put(t, this);
}, Ku = { serialVersionUID: { configurable: !0 }, nameToTypeMap: { configurable: !0 } };
dn.prototype.readResolve = function() {
  return dn.nameToTypeMap.get(this._name);
};
dn.prototype.toString = function() {
  return this._name;
};
dn.prototype.interfaces_ = function() {
  return [ke];
};
dn.prototype.getClass = function() {
  return dn;
};
Ku.serialVersionUID.get = function() {
  return -552860263173159e4;
};
Ku.nameToTypeMap.get = function() {
  return new Yc();
};
Object.defineProperties(dn, Ku);
nt.Type = dn;
nt.FIXED = new dn("FIXED");
nt.FLOATING = new dn("FLOATING");
nt.FLOATING_SINGLE = new dn("FLOATING SINGLE");
var K = function i() {
  this._precisionModel = new nt(), this._SRID = 0, this._coordinateSequenceFactory = i.getDefaultCoordinateSequenceFactory(), arguments.length === 0 || (arguments.length === 1 ? X(arguments[0], Jr) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof nt && (this._precisionModel = arguments[0]) : arguments.length === 2 ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : arguments.length === 3 && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]));
}, Uc = { serialVersionUID: { configurable: !0 } };
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
    return new Yi(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new Yi(t, this);
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
    if (u instanceof bt)
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
    return new bt(null, null, this);
  if (arguments.length === 1) {
    if (X(arguments[0], $)) {
      var t = arguments[0];
      return this.createPolygon(this.createLinearRing(t));
    } else if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return this.createPolygon(this.createLinearRing(e));
    } else if (arguments[0] instanceof An) {
      var n = arguments[0];
      return this.createPolygon(n, null);
    }
  } else if (arguments.length === 2) {
    var r = arguments[0], s = arguments[1];
    return new bt(r, s, this);
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
  var e = new De(this);
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
      return new An(e, this);
    }
  }
};
K.prototype.createMultiPolygon = function() {
  if (arguments.length === 0)
    return new bn(null, this);
  if (arguments.length === 1) {
    var t = arguments[0];
    return new bn(t, this);
  }
};
K.prototype.createMultiPoint = function() {
  var t = this;
  if (arguments.length === 0)
    return new is(null, this);
  if (arguments.length === 1) {
    if (arguments[0] instanceof Array) {
      var e = arguments[0];
      return new is(e, this);
    } else if (arguments[0] instanceof Array) {
      var n = arguments[0];
      return this.createMultiPoint(n !== null ? this.getCoordinateSequenceFactory().create(n) : null);
    } else if (X(arguments[0], $)) {
      var r = arguments[0];
      if (r === null)
        return this.createMultiPoint(new Array(0).fill(null));
      for (var s = new Array(r.size()).fill(null), o = 0; o < r.size(); o++) {
        var a = t.getCoordinateSequenceFactory().create(1, r.getDimension());
        Et.copy(r, o, a, 0, 1), s[o] = t.createPoint(a);
      }
      return this.createMultiPoint(s);
    }
  }
};
K.prototype.interfaces_ = function() {
  return [ke];
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
  return Fn.instance();
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
Uc.serialVersionUID.get = function() {
  return -6820524753094096e3;
};
Object.defineProperties(K, Uc);
var $d = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], La = function(t) {
  this.geometryFactory = t || new K();
};
La.prototype.read = function(t) {
  var e;
  typeof t == "string" ? e = JSON.parse(t) : e = t;
  var n = e.type;
  if (!on[n])
    throw new Error("Unknown GeoJSON type: " + e.type);
  return $d.indexOf(n) !== -1 ? on[n].apply(this, [e.coordinates]) : n === "GeometryCollection" ? on[n].apply(this, [e.geometries]) : on[n].apply(this, [e]);
};
La.prototype.write = function(t) {
  var e = t.getGeometryType();
  if (!qn[e])
    throw new Error("Geometry is not supported");
  return qn[e].apply(this, [t]);
};
var on = {
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
      if (!on[n])
        throw new Error("Unknown GeoJSON type: " + i.type);
      t.geometry = this.read(i.geometry);
    }
    return i.bbox && (t.bbox = on.bbox.apply(this, [i.bbox])), t;
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
      e.push(on.Point.apply(t, [i[n]]));
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
    var t = on.coordinates.apply(this, [i]);
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
      e.push(on.LineString.apply(t, [i[n]]));
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
    for (var t = this, e = on.coordinates.apply(this, [i[0]]), n = this.geometryFactory.createLinearRing(e), r = [], s = 1; s < i.length; ++s) {
      var o = i[s], a = on.coordinates.apply(t, [o]), u = t.geometryFactory.createLinearRing(a);
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
      e.push(on.Polygon.apply(t, [r]));
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
}, qn = {
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
    var t = qn.coordinate.apply(this, [i.getCoordinate()]);
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
      var r = i._geometries[n], s = qn.Point.apply(t, [r]);
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
      e.push(qn.coordinate.apply(t, [s]));
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
      var r = i._geometries[n], s = qn.LineString.apply(t, [r]);
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
    var t = this, e = [], n = qn.LineString.apply(this, [i._shell]);
    e.push(n.coordinates);
    for (var r = 0; r < i._holes.length; ++r) {
      var s = i._holes[r], o = qn.LineString.apply(t, [s]);
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
      var r = i._geometries[n], s = qn.Polygon.apply(t, [r]);
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
      e.push(qn[s].apply(t, [r]));
    }
    return {
      type: "GeometryCollection",
      geometries: e
    };
  }
}, Ju = function(t) {
  this.geometryFactory = t || new K(), this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new La(this.geometryFactory);
};
Ju.prototype.read = function(t) {
  var e = this.parser.read(t);
  return this.precisionModel.getType() === nt.FIXED && this.reducePrecision(e), e;
};
Ju.prototype.reducePrecision = function(t) {
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
var Wc = function() {
  this.parser = new La(this.geometryFactory);
};
Wc.prototype.write = function(t) {
  return this.parser.write(t);
};
var R = function() {
}, Pa = { ON: { configurable: !0 }, LEFT: { configurable: !0 }, RIGHT: { configurable: !0 } };
R.prototype.interfaces_ = function() {
  return [];
};
R.prototype.getClass = function() {
  return R;
};
R.opposite = function(t) {
  return t === R.LEFT ? R.RIGHT : t === R.RIGHT ? R.LEFT : t;
};
Pa.ON.get = function() {
  return 0;
};
Pa.LEFT.get = function() {
  return 1;
};
Pa.RIGHT.get = function() {
  return 2;
};
Object.defineProperties(R, Pa);
function Ta(i) {
  this.message = i || "";
}
Ta.prototype = new Error();
Ta.prototype.name = "EmptyStackException";
function In() {
  this.array_ = [];
}
In.prototype = new Ye();
In.prototype.add = function(i) {
  return this.array_.push(i), !0;
};
In.prototype.get = function(i) {
  if (i < 0 || i >= this.size())
    throw new Error();
  return this.array_[i];
};
In.prototype.push = function(i) {
  return this.array_.push(i), i;
};
In.prototype.pop = function(i) {
  if (this.array_.length === 0)
    throw new Ta();
  return this.array_.pop();
};
In.prototype.peek = function() {
  if (this.array_.length === 0)
    throw new Ta();
  return this.array_[this.array_.length - 1];
};
In.prototype.empty = function() {
  return this.array_.length === 0;
};
In.prototype.isEmpty = function() {
  return this.empty();
};
In.prototype.search = function(i) {
  return this.array_.indexOf(i);
};
In.prototype.size = function() {
  return this.array_.length;
};
In.prototype.toArray = function() {
  for (var i = this, t = [], e = 0, n = this.array_.length; e < n; e++)
    t.push(i.array_[e]);
  return t;
};
var _n = function() {
  this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
};
_n.prototype.getCoordinate = function() {
  return this._minCoord;
};
_n.prototype.getRightmostSide = function(t, e) {
  var n = this.getRightmostSideOfSegment(t, e);
  return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n;
};
_n.prototype.findRightmostEdgeAtVertex = function() {
  var t = this._minDe.getEdge().getCoordinates();
  j.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
  var e = t[this._minIndex - 1], n = t[this._minIndex + 1], r = M.computeOrientation(this._minCoord, n, e), s = !1;
  (e.y < this._minCoord.y && n.y < this._minCoord.y && r === M.COUNTERCLOCKWISE || e.y > this._minCoord.y && n.y > this._minCoord.y && r === M.CLOCKWISE) && (s = !0), s && (this._minIndex = this._minIndex - 1);
};
_n.prototype.getRightmostSideOfSegment = function(t, e) {
  var n = t.getEdge(), r = n.getCoordinates();
  if (e < 0 || e + 1 >= r.length || r[e].y === r[e + 1].y)
    return -1;
  var s = R.LEFT;
  return r[e].y < r[e + 1].y && (s = R.RIGHT), s;
};
_n.prototype.getEdge = function() {
  return this._orientedDe;
};
_n.prototype.checkForRightmostCoordinate = function(t) {
  for (var e = this, n = t.getEdge().getCoordinates(), r = 0; r < n.length - 1; r++)
    (e._minCoord === null || n[r].x > e._minCoord.x) && (e._minDe = t, e._minIndex = r, e._minCoord = n[r]);
};
_n.prototype.findRightmostEdgeAtNode = function() {
  var t = this._minDe.getNode(), e = t.getEdges();
  this._minDe = e.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
};
_n.prototype.findEdge = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.isForward() && e.checkForRightmostCoordinate(r);
  }
  j.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe;
  var s = this.getRightmostSide(this._minDe, this._minIndex);
  s === R.LEFT && (this._orientedDe = this._minDe.getSym());
};
_n.prototype.interfaces_ = function() {
  return [];
};
_n.prototype.getClass = function() {
  return _n;
};
var ii = function(i) {
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
}(ei), ba = function() {
  this.array_ = [];
};
ba.prototype.addLast = function(t) {
  this.array_.push(t);
};
ba.prototype.removeFirst = function() {
  return this.array_.shift();
};
ba.prototype.isEmpty = function() {
  return this.array_.length === 0;
};
var ie = function() {
  this._finder = null, this._dirEdgeList = new N(), this._nodes = new N(), this._rightMostCoord = null, this._env = null, this._finder = new _n();
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
    throw new ii("unable to find edge to compute depths at " + t.getCoordinate());
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
  var e = this, n = new qu(), r = new ba(), s = t.getNode();
  for (r.addLast(s), n.add(s), t.setVisited(!0); !r.isEmpty(); ) {
    var o = r.removeFirst();
    n.add(o), e.computeNodeDepth(o);
    for (var a = o.getEdges().iterator(); a.hasNext(); ) {
      var u = a.next(), l = u.getSym();
      if (!l.isVisited()) {
        var h = l.getNode();
        n.contains(h) || (r.addLast(h), n.add(h));
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
  var e = this, n = new In();
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
  return [Fe];
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
    if (t.location[e] !== E.NONE)
      return !1;
  return !0;
};
lt.prototype.setAllLocationsIfNull = function(t) {
  for (var e = this, n = 0; n < this.location.length; n++)
    e.location[n] === E.NONE && (e.location[n] = t);
};
lt.prototype.isLine = function() {
  return this.location.length === 1;
};
lt.prototype.merge = function(t) {
  var e = this;
  if (t.location.length > this.location.length) {
    var n = new Array(3).fill(null);
    n[R.ON] = this.location[R.ON], n[R.LEFT] = E.NONE, n[R.RIGHT] = E.NONE, this.location = n;
  }
  for (var r = 0; r < this.location.length; r++)
    e.location[r] === E.NONE && r < t.location.length && (e.location[r] = t.location[r]);
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
  var t = new Cn();
  return this.location.length > 1 && t.append(E.toLocationSymbol(this.location[R.LEFT])), t.append(E.toLocationSymbol(this.location[R.ON])), this.location.length > 1 && t.append(E.toLocationSymbol(this.location[R.RIGHT])), t.toString();
};
lt.prototype.setLocations = function(t, e, n) {
  this.location[R.ON] = t, this.location[R.LEFT] = e, this.location[R.RIGHT] = n;
};
lt.prototype.get = function(t) {
  return t < this.location.length ? this.location[t] : E.NONE;
};
lt.prototype.isArea = function() {
  return this.location.length > 1;
};
lt.prototype.isAnyNull = function() {
  for (var t = this, e = 0; e < this.location.length; e++)
    if (t.location[e] === E.NONE)
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
  this.location = new Array(t).fill(null), this.setAllLocations(E.NONE);
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
    this.elt[0] = new lt(E.NONE), this.elt[1] = new lt(E.NONE), this.elt[n].setLocation(r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    this.elt[0] = new lt(s, o, a), this.elt[1] = new lt(s, o, a);
  } else if (arguments.length === 4) {
    var u = arguments[0], l = arguments[1], h = arguments[2], c = arguments[3];
    this.elt[0] = new lt(E.NONE, E.NONE, E.NONE), this.elt[1] = new lt(E.NONE, E.NONE, E.NONE), this.elt[u].setLocations(l, h, c);
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
  var t = new Cn();
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
  for (var e = new rt(E.NONE), n = 0; n < 2; n++)
    e.setLocation(n, t.getLocation(n));
  return e;
};
var wt = function() {
  this._startDe = null, this._maxNodeDegree = -1, this._edges = new N(), this._pts = new N(), this._label = new rt(E.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new N(), this._geometryFactory = null;
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
      throw new ii("Found null DirectedEdge");
    if (n.getEdgeRing() === e)
      throw new ii("Directed Edge visited twice during ring-building at " + n.getCoordinate());
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
    if (r === E.NONE)
      return null;
    if (this._label.getLocation(n) === E.NONE)
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
var t_ = function(i) {
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
}(wt), e_ = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.buildMinimalRings = function() {
    var n = this, r = new N(), s = this._startDe;
    do {
      if (s.getMinEdgeRing() === null) {
        var o = new t_(s, n._geometryFactory);
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
var Oa = function(i) {
  function t() {
    i.call(this), this._coord = null, this._edges = null;
    var e = arguments[0], n = arguments[1];
    this._coord = e, this._edges = n, this._label = new rt(0, E.NONE);
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
    var s = E.NONE;
    if (s = this._label.getLocation(r), !n.isNull(r)) {
      var o = n.getLocation(r);
      s !== E.BOUNDARY && (s = o);
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
        u === E.NONE && n._label.setLocation(o, a);
      }
  }, t.prototype.add = function(n) {
    this._edges.insert(n), n.setNode(this);
  }, t.prototype.setLabelBoundary = function(n) {
    if (this._label === null)
      return null;
    var r = E.NONE;
    this._label !== null && (r = this._label.getLocation(n));
    var s = null;
    switch (r) {
      case E.BOUNDARY:
        s = E.INTERIOR;
        break;
      case E.INTERIOR:
        s = E.BOUNDARY;
        break;
      default:
        s = E.BOUNDARY;
        break;
    }
    this._label.setLocation(n, s);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(Ce), mn = function() {
  this.nodeMap = new qt(), this.nodeFact = null;
  var t = arguments[0];
  this.nodeFact = t;
};
mn.prototype.find = function(t) {
  return this.nodeMap.get(t);
};
mn.prototype.addNode = function() {
  if (arguments[0] instanceof v) {
    var t = arguments[0], e = this.nodeMap.get(t);
    return e === null && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e;
  } else if (arguments[0] instanceof Oa) {
    var n = arguments[0], r = this.nodeMap.get(n.getCoordinate());
    return r === null ? (this.nodeMap.put(n.getCoordinate(), n), n) : (r.mergeLabel(n), r);
  }
};
mn.prototype.print = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
mn.prototype.iterator = function() {
  return this.nodeMap.values().iterator();
};
mn.prototype.values = function() {
  return this.nodeMap.values();
};
mn.prototype.getBoundaryNodes = function(t) {
  for (var e = new N(), n = this.iterator(); n.hasNext(); ) {
    var r = n.next();
    r.getLabel().getLocation(t) === E.BOUNDARY && e.add(r);
  }
  return e;
};
mn.prototype.add = function(t) {
  var e = t.getCoordinate(), n = this.addNode(e);
  n.add(t);
};
mn.prototype.interfaces_ = function() {
  return [];
};
mn.prototype.getClass = function() {
  return mn;
};
var st = function() {
}, Io = { NE: { configurable: !0 }, NW: { configurable: !0 }, SW: { configurable: !0 }, SE: { configurable: !0 } };
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
Io.NE.get = function() {
  return 0;
};
Io.NW.get = function() {
  return 1;
};
Io.SW.get = function() {
  return 2;
};
Io.SE.get = function() {
  return 3;
};
Object.defineProperties(st, Io);
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
  return [Fe];
};
Ht.prototype.getClass = function() {
  return Ht;
};
var mu = function(i) {
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
      throw new ii("assigned depths do not match", this.getCoordinate());
    this._depth[n] = r;
  }, t.prototype.isInteriorAreaEdge = function() {
    for (var n = this, r = !0, s = 0; s < 2; s++)
      n._label.isArea(s) && n._label.getLocation(s, R.LEFT) === E.INTERIOR && n._label.getLocation(s, R.RIGHT) === E.INTERIOR || (r = !1);
    return r;
  }, t.prototype.setNextMin = function(n) {
    this._nextMin = n;
  }, t.prototype.print = function(n) {
    i.prototype.print.call(this, n), n.print(" " + this._depth[R.LEFT] + "/" + this._depth[R.RIGHT]), n.print(" (" + this.getDepthDelta() + ")"), this._isInResult && n.print(" inResult");
  }, t.prototype.setMinEdgeRing = function(n) {
    this._minEdgeRing = n;
  }, t.prototype.isLineEdge = function() {
    var n = this._label.isLine(0) || this._label.isLine(1), r = !this._label.isArea(0) || this._label.allPositionsEqual(0, E.EXTERIOR), s = !this._label.isArea(1) || this._label.allPositionsEqual(1, E.EXTERIOR);
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
    return n === E.EXTERIOR && r === E.INTERIOR ? 1 : n === E.INTERIOR && r === E.EXTERIOR ? -1 : 0;
  }, t;
}(Ht), rs = function() {
};
rs.prototype.createNode = function(t) {
  return new Oa(t, null);
};
rs.prototype.interfaces_ = function() {
  return [];
};
rs.prototype.getClass = function() {
  return rs;
};
var dt = function() {
  if (this._edges = new N(), this._nodes = null, this._edgeEndList = new N(), arguments.length === 0)
    this._nodes = new mn(new rs());
  else if (arguments.length === 1) {
    var t = arguments[0];
    this._nodes = new mn(t);
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
  if (arguments[0] instanceof Oa) {
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
  return r !== null && r.getLocation(t) === E.BOUNDARY;
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
    var s = new mu(r, !0), o = new mu(r, !1);
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
        throw new ii("unable to assign hole to a shell", s.getCoordinate(0));
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
      var o = new e_(s, e._geometryFactory);
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
    var l = u.next(), h = l.getLinearRing(), c = h.getEnvelopeInternal();
    o !== null && (a = o.getLinearRing().getEnvelopeInternal());
    var f = !1;
    c.contains(r) && M.isPointInRing(s, h.getCoordinates()) && (f = !0), f && (o === null || a.contains(c)) && (o = l);
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
var ss = function() {
};
ss.prototype.getBounds = function() {
};
ss.prototype.interfaces_ = function() {
  return [];
};
ss.prototype.getClass = function() {
  return ss;
};
var qe = function() {
  this._bounds = null, this._item = null;
  var t = arguments[0], e = arguments[1];
  this._bounds = t, this._item = e;
};
qe.prototype.getItem = function() {
  return this._item;
};
qe.prototype.getBounds = function() {
  return this._bounds;
};
qe.prototype.interfaces_ = function() {
  return [ss, ke];
};
qe.prototype.getClass = function() {
  return qe;
};
var ri = function() {
  this._size = null, this._items = null, this._size = 0, this._items = new N(), this._items.add(null);
};
ri.prototype.poll = function() {
  if (this.isEmpty())
    return null;
  var t = this._items.get(1);
  return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t;
};
ri.prototype.size = function() {
  return this._size;
};
ri.prototype.reorder = function(t) {
  for (var e = this, n = null, r = this._items.get(t); t * 2 <= this._size && (n = t * 2, n !== e._size && e._items.get(n + 1).compareTo(e._items.get(n)) < 0 && n++, e._items.get(n).compareTo(r) < 0); t = n)
    e._items.set(t, e._items.get(n));
  this._items.set(t, r);
};
ri.prototype.clear = function() {
  this._size = 0, this._items.clear();
};
ri.prototype.isEmpty = function() {
  return this._size === 0;
};
ri.prototype.add = function(t) {
  var e = this;
  this._items.add(null), this._size += 1;
  var n = this._size;
  for (this._items.set(0, t); t.compareTo(this._items.get(Math.trunc(n / 2))) < 0; n /= 2)
    e._items.set(n, e._items.get(Math.trunc(n / 2)));
  this._items.set(n, t);
};
ri.prototype.interfaces_ = function() {
  return [];
};
ri.prototype.getClass = function() {
  return ri;
};
var xi = function() {
};
xi.prototype.visitItem = function(t) {
};
xi.prototype.interfaces_ = function() {
  return [];
};
xi.prototype.getClass = function() {
  return xi;
};
var pr = function() {
};
pr.prototype.insert = function(t, e) {
};
pr.prototype.remove = function(t, e) {
};
pr.prototype.query = function() {
};
pr.prototype.interfaces_ = function() {
  return [];
};
pr.prototype.getClass = function() {
  return pr;
};
var Tt = function() {
  if (this._childBoundables = new N(), this._bounds = null, this._level = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this._level = t;
    }
  }
}, qc = { serialVersionUID: { configurable: !0 } };
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
  return [ss, ke];
};
Tt.prototype.getClass = function() {
  return Tt;
};
qc.serialVersionUID.get = function() {
  return 6493722185909574e3;
};
Object.defineProperties(Tt, qc);
var He = function() {
};
He.reverseOrder = function() {
  return {
    compare: function(e, n) {
      return n.compareTo(e);
    }
  };
};
He.min = function(t) {
  return He.sort(t), t.get(0);
};
He.sort = function(t, e) {
  var n = t.toArray();
  e ? zi.sort(n, e) : zi.sort(n);
  for (var r = t.iterator(), s = 0, o = n.length; s < o; s++)
    r.next(), r.set(n[s]);
};
He.singletonList = function(t) {
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
  return [Fe];
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
}, Ma = { IntersectsOp: { configurable: !0 }, serialVersionUID: { configurable: !0 }, DEFAULT_NODE_CAPACITY: { configurable: !0 } };
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
      s instanceof Tt ? n += t.size(s) : s instanceof qe && (n += 1);
    }
    return n;
  }
};
Mt.prototype.removeItem = function(t, e) {
  for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext(); ) {
    var s = r.next();
    s instanceof qe && s.getItem() === e && (n = s);
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
        o instanceof qe ? r.add(o.getItem()) : j.shouldNeverReachHere();
    }
    return r.size() <= 0 ? null : r;
  }
};
Mt.prototype.insert = function(t, e) {
  j.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new qe(t, e));
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
      u instanceof Tt ? t.boundablesAtLevel(r, u, o) : (j.isTrue(u instanceof qe), r === -1 && o.add(u));
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
    if (X(arguments[2], xi) && arguments[0] instanceof Object && arguments[1] instanceof Tt)
      for (var o = arguments[0], a = arguments[1], u = arguments[2], l = a.getChildBoundables(), h = 0; h < l.size(); h++) {
        var c = l.get(h);
        t.getIntersectsOp().intersects(c.getBounds(), o) && (c instanceof Tt ? t.query(o, c, u) : c instanceof qe ? u.visitItem(c.getItem()) : j.shouldNeverReachHere());
      }
    else if (X(arguments[2], Ye) && arguments[0] instanceof Object && arguments[1] instanceof Tt)
      for (var f = arguments[0], g = arguments[1], p = arguments[2], d = g.getChildBoundables(), _ = 0; _ < d.size(); _++) {
        var m = d.get(_);
        t.getIntersectsOp().intersects(m.getBounds(), f) && (m instanceof Tt ? t.query(f, m, p) : m instanceof qe ? p.add(m.getItem()) : j.shouldNeverReachHere());
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
      var h = l.next();
      if (t.getIntersectsOp().intersects(h.getBounds(), r) && h instanceof Tt && (a = t.remove(r, h, o), a)) {
        u = h;
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
  He.sort(s, this.getComparator());
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
  return [ke];
};
Mt.prototype.getClass = function() {
  return Mt;
};
Mt.compareDoubles = function(t, e) {
  return t > e ? 1 : t < e ? -1 : 0;
};
Ma.IntersectsOp.get = function() {
  return n_;
};
Ma.serialVersionUID.get = function() {
  return -3886435814360241e3;
};
Ma.DEFAULT_NODE_CAPACITY.get = function() {
  return 10;
};
Object.defineProperties(Mt, Ma);
var n_ = function() {
}, os = function() {
};
os.prototype.distance = function(t, e) {
};
os.prototype.interfaces_ = function() {
  return [];
};
os.prototype.getClass = function() {
  return os;
};
var Hc = function(i) {
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
    return new gh(r);
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
      for (var h = 0; u.hasNext() && h < o; ) {
        var c = u.next();
        a[l].add(c), h++;
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
      if (X(arguments[2], xi) && arguments[0] instanceof Object && arguments[1] instanceof Tt) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        i.prototype.query.call(this, a, u, l);
      } else if (X(arguments[2], Ye) && arguments[0] instanceof Object && arguments[1] instanceof Tt) {
        var h = arguments[0], c = arguments[1], f = arguments[2];
        i.prototype.query.call(this, h, c, f);
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
    He.sort(a, t.xComparator);
    var u = this.verticalSlices(a, Math.trunc(Math.ceil(Math.sqrt(o))));
    return this.createParentBoundablesFromVerticalSlices(u, s);
  }, t.prototype.nearestNeighbour = function() {
    if (arguments.length === 1) {
      if (X(arguments[0], os)) {
        var r = arguments[0], s = new St(this.getRoot(), this.getRoot(), r);
        return this.nearestNeighbour(s);
      } else if (arguments[0] instanceof St) {
        var o = arguments[0];
        return this.nearestNeighbour(o, q.POSITIVE_INFINITY);
      }
    } else if (arguments.length === 2) {
      if (arguments[0] instanceof t && X(arguments[1], os)) {
        var a = arguments[0], u = arguments[1], l = new St(this.getRoot(), a.getRoot(), u);
        return this.nearestNeighbour(l);
      } else if (arguments[0] instanceof St && typeof arguments[1] == "number") {
        var h = arguments[0], c = arguments[1], f = c, g = null, p = new ri();
        for (p.add(h); !p.isEmpty() && f > 0; ) {
          var d = p.poll(), _ = d.getDistance();
          if (_ >= f)
            break;
          d.isLeaves() ? (f = _, g = d) : d.expandToQueue(p, f);
        }
        return [g.getBoundable(0).getItem(), g.getBoundable(1).getItem()];
      }
    } else if (arguments.length === 3) {
      var m = arguments[0], y = arguments[1], x = arguments[2], I = new qe(m, y), S = new St(this.getRoot(), I, x);
      return this.nearestNeighbour(S)[0];
    }
  }, t.prototype.interfaces_ = function() {
    return [pr, ke];
  }, t.prototype.getClass = function() {
    return t;
  }, t.centreX = function(r) {
    return t.avg(r.getMinX(), r.getMaxX());
  }, t.avg = function(r, s) {
    return (r + s) / 2;
  }, t.centreY = function(r) {
    return t.avg(r.getMinY(), r.getMaxY());
  }, e.STRtreeNode.get = function() {
    return gh;
  }, e.serialVersionUID.get = function() {
    return 259274702368956900;
  }, e.xComparator.get = function() {
    return {
      interfaces_: function() {
        return [Kr];
      },
      compare: function(n, r) {
        return i.compareDoubles(t.centreX(n.getBounds()), t.centreX(r.getBounds()));
      }
    };
  }, e.yComparator.get = function() {
    return {
      interfaces_: function() {
        return [Kr];
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
}(Mt), gh = function(i) {
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
var Ei = function() {
  this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
  var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
  this._segString = t, this.coord = new v(e), this.segmentIndex = n, this._segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n));
};
Ei.prototype.getCoordinate = function() {
  return this.coord;
};
Ei.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex);
};
Ei.prototype.compareTo = function(t) {
  var e = t;
  return this.segmentIndex < e.segmentIndex ? -1 : this.segmentIndex > e.segmentIndex ? 1 : this.coord.equals2D(e.coord) ? 0 : oe.compare(this._segmentOctant, this.coord, e.coord);
};
Ei.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === t;
};
Ei.prototype.isInterior = function() {
  return this._isInterior;
};
Ei.prototype.interfaces_ = function() {
  return [Fe];
};
Ei.prototype.getClass = function() {
  return Ei;
};
var re = function() {
  this._nodeMap = new qt(), this._edge = null;
  var t = arguments[0];
  this._edge = t;
};
re.prototype.getSplitCoordinates = function() {
  var t = this, e = new Eo();
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
    r.equals2D(s) && t.add(new fn(n + 1));
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
    a && t.add(new fn(n[0])), s = o;
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
  var n = new Ei(this._edge, t, e, this._edge.getSegmentOctant(e)), r = this._nodeMap.get(n);
  return r !== null ? (j.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this._nodeMap.put(n, n), n);
};
re.prototype.checkSplitEdgesCorrectness = function(t) {
  var e = this._edge.getCoordinates(), n = t.get(0), r = n.getCoordinate(0);
  if (!r.equals2D(e[0]))
    throw new ei("bad split edge start point at " + r);
  var s = t.get(t.size() - 1), o = s.getCoordinates(), a = o[o.length - 1];
  if (!a.equals2D(e[e.length - 1]))
    throw new ei("bad split edge end point at " + a);
};
re.prototype.interfaces_ = function() {
  return [];
};
re.prototype.getClass = function() {
  return re;
};
var dr = function() {
};
dr.prototype.interfaces_ = function() {
  return [];
};
dr.prototype.getClass = function() {
  return dr;
};
dr.octant = function() {
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
    return dr.octant(a, u);
  }
};
var kn = function() {
};
kn.prototype.getCoordinates = function() {
};
kn.prototype.size = function() {
};
kn.prototype.getCoordinate = function(t) {
};
kn.prototype.isClosed = function() {
};
kn.prototype.setData = function(t) {
};
kn.prototype.getData = function() {
};
kn.prototype.interfaces_ = function() {
  return [];
};
kn.prototype.getClass = function() {
  return kn;
};
var ro = function() {
};
ro.prototype.addIntersection = function(t, e) {
};
ro.prototype.interfaces_ = function() {
  return [kn];
};
ro.prototype.getClass = function() {
  return ro;
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
  return t.equals2D(e) ? 0 : dr.octant(t, e);
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
  return Ue.toLineString(new vt(this._pts));
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
  return [ro];
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
}, jc = { serialVersionUID: { configurable: !0 } };
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
  var e = new $i();
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
    return q.NaN;
  var s = ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r;
  return s;
};
F.prototype.closestPoints = function(t) {
  var e = this.intersection(t);
  if (e !== null)
    return [e, e];
  var n = new Array(2).fill(null), r = q.MAX_VALUE, s = null, o = this.closestPoint(t.p0);
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
    var e = Xe.intersection(this.p0, this.p1, t.p0, t.p1);
    return e;
  } catch (n) {
    if (!(n instanceof ys))
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
  var h = n - l, c = r + u, f = new v(h, c);
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
  return e < 0 ? e = 0 : (e > 1 || q.isNaN(e)) && (e = 1), e;
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
  var t = q.doubleToLongBits(this.p0.x);
  t ^= q.doubleToLongBits(this.p0.y) * 31;
  var e = Math.trunc(t) ^ Math.trunc(t >> 32), n = q.doubleToLongBits(this.p1.x);
  n ^= q.doubleToLongBits(this.p1.y) * 31;
  var r = Math.trunc(n) ^ Math.trunc(n >> 32);
  return e ^ r;
};
F.prototype.interfaces_ = function() {
  return [Fe, ke];
};
F.prototype.getClass = function() {
  return F;
};
F.midPoint = function(t, e) {
  return new v((t.x + e.x) / 2, (t.y + e.y) / 2);
};
jc.serialVersionUID.get = function() {
  return 3252005833466256400;
};
Object.defineProperties(F, jc);
var so = function() {
  this.tempEnv1 = new A(), this.tempEnv2 = new A(), this._overlapSeg1 = new F(), this._overlapSeg2 = new F();
};
so.prototype.overlap = function() {
  if (arguments.length !== 2) {
    if (arguments.length === 4) {
      var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
      t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(r, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
    }
  }
};
so.prototype.interfaces_ = function() {
  return [];
};
so.prototype.getClass = function() {
  return so;
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
  var a = this._pts[t], u = this._pts[e], l = n._pts[r], h = n._pts[s];
  if (e - t === 1 && s - r === 1)
    return o.overlap(this, t, n, r), null;
  if (o.tempEnv1.init(a, u), o.tempEnv2.init(l, h), !o.tempEnv1.intersects(o.tempEnv2))
    return null;
  var c = Math.trunc((t + e) / 2), f = Math.trunc((r + s) / 2);
  t < c && (r < f && this.computeOverlapsInternal(t, c, n, r, f, o), f < s && this.computeOverlapsInternal(t, c, n, f, s, o)), c < e && (r < f && this.computeOverlapsInternal(c, e, n, r, f, o), f < s && this.computeOverlapsInternal(c, e, n, f, s, o));
};
de.prototype.interfaces_ = function() {
  return [];
};
de.prototype.getClass = function() {
  return de;
};
var hn = function() {
};
hn.prototype.interfaces_ = function() {
  return [];
};
hn.prototype.getClass = function() {
  return hn;
};
hn.getChainStartIndices = function(t) {
  var e = 0, n = new N();
  n.add(new fn(e));
  do {
    var r = hn.findChainEnd(t, e);
    n.add(new fn(r)), e = r;
  } while (e < t.length - 1);
  var s = hn.toIntArray(n);
  return s;
};
hn.findChainEnd = function(t, e) {
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
hn.getChains = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return hn.getChains(t, null);
  } else if (arguments.length === 2) {
    for (var e = arguments[0], n = arguments[1], r = new N(), s = hn.getChainStartIndices(e), o = 0; o < s.length - 1; o++) {
      var a = new de(e, s[o], s[o + 1], n);
      r.add(a);
    }
    return r;
  }
};
hn.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var Ui = function() {
};
Ui.prototype.computeNodes = function(t) {
};
Ui.prototype.getNodedSubstrings = function() {
};
Ui.prototype.interfaces_ = function() {
  return [];
};
Ui.prototype.getClass = function() {
  return Ui;
};
var oo = function() {
  if (this._segInt = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      this.setSegmentIntersector(t);
    }
  }
};
oo.prototype.setSegmentIntersector = function(t) {
  this._segInt = t;
};
oo.prototype.interfaces_ = function() {
  return [Ui];
};
oo.prototype.getClass = function() {
  return oo;
};
var Qu = function(i) {
  function t(n) {
    n ? i.call(this, n) : i.call(this), this._monoChains = new N(), this._index = new Hc(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0;
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
    for (var s = this, o = hn.getChains(r.getCoordinates(), r), a = o.iterator(); a.hasNext(); ) {
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
    for (var r = this, s = new ph(this._segInt), o = this._monoChains.iterator(); o.hasNext(); )
      for (var a = o.next(), u = r._index.query(a.getEnvelope()), l = u.iterator(); l.hasNext(); ) {
        var h = l.next();
        if (h.getId() > a.getId() && (a.computeOverlaps(h, s), r._nOverlaps++), r._segInt.isDone())
          return null;
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, e.SegmentOverlapAction.get = function() {
    return ph;
  }, Object.defineProperties(t, e), t;
}(oo), ph = function(i) {
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
}(so), et = function i() {
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
}, ui = { CAP_ROUND: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, JOIN_ROUND: { configurable: !0 }, JOIN_MITRE: { configurable: !0 }, JOIN_BEVEL: { configurable: !0 }, DEFAULT_QUADRANT_SEGMENTS: { configurable: !0 }, DEFAULT_MITRE_LIMIT: { configurable: !0 }, DEFAULT_SIMPLIFY_FACTOR: { configurable: !0 } };
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
ui.CAP_ROUND.get = function() {
  return 1;
};
ui.CAP_FLAT.get = function() {
  return 2;
};
ui.CAP_SQUARE.get = function() {
  return 3;
};
ui.JOIN_ROUND.get = function() {
  return 1;
};
ui.JOIN_MITRE.get = function() {
  return 2;
};
ui.JOIN_BEVEL.get = function() {
  return 3;
};
ui.DEFAULT_QUADRANT_SEGMENTS.get = function() {
  return 8;
};
ui.DEFAULT_MITRE_LIMIT.get = function() {
  return 5;
};
ui.DEFAULT_SIMPLIFY_FACTOR.get = function() {
  return 0.01;
};
Object.defineProperties(et, ui);
var yt = function(t) {
  this._distanceTol = null, this._isDeleted = null, this._angleOrientation = M.COUNTERCLOCKWISE, this._inputLine = t || null;
}, So = { INIT: { configurable: !0 }, DELETE: { configurable: !0 }, KEEP: { configurable: !0 }, NUM_PTS_TO_CHECK: { configurable: !0 } };
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
  for (var t = this, e = new Eo(), n = 0; n < this._inputLine.length; n++)
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
So.INIT.get = function() {
  return 0;
};
So.DELETE.get = function() {
  return 1;
};
So.KEEP.get = function() {
  return 1;
};
So.NUM_PTS_TO_CHECK.get = function() {
  return 10;
};
Object.defineProperties(yt, So);
var Ie = function() {
  this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new N();
}, Zc = { COORDINATE_ARRAY_TYPE: { configurable: !0 } };
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
Zc.COORDINATE_ARRAY_TYPE.get = function() {
  return new Array(0).fill(null);
};
Object.defineProperties(Ie, Zc);
var Q = function() {
}, Or = { PI_TIMES_2: { configurable: !0 }, PI_OVER_2: { configurable: !0 }, PI_OVER_4: { configurable: !0 }, COUNTERCLOCKWISE: { configurable: !0 }, CLOCKWISE: { configurable: !0 }, NONE: { configurable: !0 } };
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
Or.PI_TIMES_2.get = function() {
  return 2 * Math.PI;
};
Or.PI_OVER_2.get = function() {
  return Math.PI / 2;
};
Or.PI_OVER_4.get = function() {
  return Math.PI / 4;
};
Or.COUNTERCLOCKWISE.get = function() {
  return M.COUNTERCLOCKWISE;
};
Or.CLOCKWISE.get = function() {
  return M.CLOCKWISE;
};
Or.NONE.get = function() {
  return M.COLLINEAR;
};
Object.defineProperties(Q, Or);
var ct = function i() {
  this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new F(), this._seg1 = new F(), this._offset0 = new F(), this._offset1 = new F(), this._side = 0, this._hasNarrowConcaveAngle = !1;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._precisionModel = t, this._bufParams = e, this._li = new $i(), this._filletAngleQuantum = Math.PI / 2 / e.getQuadrantSegments(), e.getQuadrantSegments() >= 8 && e.getJoinStyle() === et.JOIN_ROUND && (this._closingSegLengthFactor = i.MAX_CLOSING_SEG_LEN_FACTOR), this.init(n);
}, Ro = { OFFSET_SEGMENT_SEPARATION_FACTOR: { configurable: !0 }, INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, CURVE_VERTEX_SNAP_DISTANCE_FACTOR: { configurable: !0 }, MAX_CLOSING_SEG_LEN_FACTOR: { configurable: !0 } };
ct.prototype.addNextSegment = function(t, e) {
  if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2))
    return null;
  var n = M.computeOrientation(this._s0, this._s1, this._s2), r = n === M.CLOCKWISE && this._side === R.LEFT || n === M.COUNTERCLOCKWISE && this._side === R.RIGHT;
  n === 0 ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e);
};
ct.prototype.addLineEndCap = function(t, e) {
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
      var h = new v(r.p1.x + l.x, r.p1.y + l.y), c = new v(s.p1.x + l.x, s.p1.y + l.y);
      this._segList.addPt(h), this._segList.addPt(c);
      break;
  }
};
ct.prototype.getCoordinates = function() {
  var t = this._segList.getCoordinates();
  return t;
};
ct.prototype.addMitreJoin = function(t, e, n, r) {
  var s = !0, o = null;
  try {
    o = Xe.intersection(e.p0, e.p1, n.p0, n.p1);
    var a = r <= 0 ? 1 : o.distance(t) / Math.abs(r);
    a > this._bufParams.getMitreLimit() && (s = !1);
  } catch (u) {
    if (u instanceof ys)
      o = new v(0, 0), s = !1;
    else
      throw u;
  } finally {
  }
  s ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit());
};
ct.prototype.addFilletCorner = function(t, e, n, r, s) {
  var o = e.x - t.x, a = e.y - t.y, u = Math.atan2(a, o), l = n.x - t.x, h = n.y - t.y, c = Math.atan2(h, l);
  r === M.CLOCKWISE ? u <= c && (u += 2 * Math.PI) : u >= c && (u -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, u, c, r, s), this._segList.addPt(n);
};
ct.prototype.addOutsideTurn = function(t, e) {
  if (this._offset0.p1.distance(this._offset1.p0) < this._distance * ct.OFFSET_SEGMENT_SEPARATION_FACTOR)
    return this._segList.addPt(this._offset0.p1), null;
  this._bufParams.getJoinStyle() === et.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === et.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
};
ct.prototype.createSquare = function(t) {
  this._segList.addPt(new v(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new v(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new v(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
};
ct.prototype.addSegments = function(t, e) {
  this._segList.addPts(t, e);
};
ct.prototype.addFirstSegment = function() {
  this._segList.addPt(this._offset1.p0);
};
ct.prototype.addLastSegment = function() {
  this._segList.addPt(this._offset1.p1);
};
ct.prototype.initSideSegments = function(t, e, n) {
  this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1);
};
ct.prototype.addLimitedMitreJoin = function(t, e, n, r) {
  var s = this._seg0.p1, o = Q.angle(s, this._seg0.p0), a = Q.angleBetweenOriented(this._seg0.p0, s, this._seg1.p1), u = a / 2, l = Q.normalize(o + u), h = Q.normalize(l + Math.PI), c = r * n, f = c * Math.abs(Math.sin(u)), g = n - f, p = s.x + c * Math.cos(h), d = s.y + c * Math.sin(h), _ = new v(p, d), m = new F(s, _), y = m.pointAlongOffset(1, g), x = m.pointAlongOffset(1, -g);
  this._side === R.LEFT ? (this._segList.addPt(y), this._segList.addPt(x)) : (this._segList.addPt(x), this._segList.addPt(y));
};
ct.prototype.computeOffsetSegment = function(t, e, n, r) {
  var s = e === R.LEFT ? 1 : -1, o = t.p1.x - t.p0.x, a = t.p1.y - t.p0.y, u = Math.sqrt(o * o + a * a), l = s * n * o / u, h = s * n * a / u;
  r.p0.x = t.p0.x - h, r.p0.y = t.p0.y + l, r.p1.x = t.p1.x - h, r.p1.y = t.p1.y + l;
};
ct.prototype.addFilletArc = function(t, e, n, r, s) {
  var o = this, a = r === M.CLOCKWISE ? -1 : 1, u = Math.abs(e - n), l = Math.trunc(u / this._filletAngleQuantum + 0.5);
  if (l < 1)
    return null;
  for (var h = 0, c = u / l, f = h, g = new v(); f < u; ) {
    var p = e + a * f;
    g.x = t.x + s * Math.cos(p), g.y = t.y + s * Math.sin(p), o._segList.addPt(g), f += c;
  }
};
ct.prototype.addInsideTurn = function(t, e) {
  if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection())
    this._segList.addPt(this._li.getIntersection(0));
  else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * ct.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)
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
ct.prototype.createCircle = function(t) {
  var e = new v(t.x + this._distance, t.y);
  this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
};
ct.prototype.addBevelJoin = function(t, e) {
  this._segList.addPt(t.p1), this._segList.addPt(e.p0);
};
ct.prototype.init = function(t) {
  this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Ie(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * ct.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
};
ct.prototype.addCollinear = function(t) {
  this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2);
  var e = this._li.getIntersectionNum();
  e >= 2 && (this._bufParams.getJoinStyle() === et.JOIN_BEVEL || this._bufParams.getJoinStyle() === et.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, M.CLOCKWISE, this._distance));
};
ct.prototype.closeRing = function() {
  this._segList.closeRing();
};
ct.prototype.hasNarrowConcaveAngle = function() {
  return this._hasNarrowConcaveAngle;
};
ct.prototype.interfaces_ = function() {
  return [];
};
ct.prototype.getClass = function() {
  return ct;
};
Ro.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
  return 1e-3;
};
Ro.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-3;
};
Ro.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
  return 1e-6;
};
Ro.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
  return 80;
};
Object.defineProperties(ct, Ro);
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
    for (var h = 2; h <= l; h++)
      n.addNextSegment(u[h], !0);
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
    for (var h = 2; h <= l; h++)
      n.addNextSegment(u[h], !0);
  }
  n.addLastSegment();
};
ue.prototype.getSegGen = function(t) {
  return new ct(this._precisionModel, this._bufParams, t);
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
var _r = function() {
  this._subgraphs = null, this._seg = new F(), this._cga = new M();
  var t = arguments[0];
  this._subgraphs = t;
}, Kc = { DepthSegment: { configurable: !0 } };
_r.prototype.findStabbedSegments = function() {
  var t = this;
  if (arguments.length === 1) {
    for (var e = arguments[0], n = new N(), r = this._subgraphs.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getEnvelope();
      e.y < o.getMinY() || e.y > o.getMaxY() || t.findStabbedSegments(e, s.getDirectedEdges(), n);
    }
    return n;
  } else if (arguments.length === 3) {
    if (X(arguments[2], Ye) && arguments[0] instanceof v && arguments[1] instanceof mu)
      for (var a = arguments[0], u = arguments[1], l = arguments[2], h = u.getEdge().getCoordinates(), c = 0; c < h.length - 1; c++) {
        t._seg.p0 = h[c], t._seg.p1 = h[c + 1], t._seg.p0.y > t._seg.p1.y && t._seg.reverse();
        var f = Math.max(t._seg.p0.x, t._seg.p1.x);
        if (!(f < a.x) && !t._seg.isHorizontal() && !(a.y < t._seg.p0.y || a.y > t._seg.p1.y) && M.computeOrientation(t._seg.p0, t._seg.p1, a) !== M.RIGHT) {
          var g = u.getDepth(R.LEFT);
          t._seg.p0.equals(h[c]) || (g = u.getDepth(R.RIGHT));
          var p = new Wi(t._seg, g);
          l.add(p);
        }
      }
    else if (X(arguments[2], Ye) && arguments[0] instanceof v && X(arguments[1], Ye))
      for (var d = arguments[0], _ = arguments[1], m = arguments[2], y = _.iterator(); y.hasNext(); ) {
        var x = y.next();
        x.isForward() && t.findStabbedSegments(d, x, m);
      }
  }
};
_r.prototype.getDepth = function(t) {
  var e = this.findStabbedSegments(t);
  if (e.size() === 0)
    return 0;
  var n = He.min(e);
  return n._leftDepth;
};
_r.prototype.interfaces_ = function() {
  return [];
};
_r.prototype.getClass = function() {
  return _r;
};
Kc.DepthSegment.get = function() {
  return Wi;
};
Object.defineProperties(_r, Kc);
var Wi = function() {
  this._upwardSeg = null, this._leftDepth = null;
  var t = arguments[0], e = arguments[1];
  this._upwardSeg = new F(t), this._leftDepth = e;
};
Wi.prototype.compareTo = function(t) {
  var e = t;
  if (this._upwardSeg.minX() >= e._upwardSeg.maxX())
    return 1;
  if (this._upwardSeg.maxX() <= e._upwardSeg.minX())
    return -1;
  var n = this._upwardSeg.orientationIndex(e._upwardSeg);
  return n !== 0 || (n = -1 * e._upwardSeg.orientationIndex(this._upwardSeg), n !== 0) ? n : this._upwardSeg.compareTo(e._upwardSeg);
};
Wi.prototype.compareX = function(t, e) {
  var n = t.p0.compareTo(e.p0);
  return n !== 0 ? n : t.p1.compareTo(e.p1);
};
Wi.prototype.toString = function() {
  return this._upwardSeg.toString();
};
Wi.prototype.interfaces_ = function() {
  return [Fe];
};
Wi.prototype.getClass = function() {
  return Wi;
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
  var s = e.x, o = e.y, a = n.x - s, u = r.x - s, l = n.y - o, h = r.y - o, c = a * h - u * l, f = t.x - s, g = t.y - o, p = (h * f - u * g) / c, d = (-l * f + a * g) / c, _ = e.z + p * (n.z - e.z) + d * (r.z - e.z);
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
  var r = n.x, s = n.y, o = t.x - r, a = t.y - s, u = e.x - r, l = e.y - s, h = 2 * it.det(o, a, u, l), c = it.det(a, o * o + a * a, l, u * u + l * l), f = it.det(o, o * o + a * a, u, u * u + l * l), g = r - c / h, p = s + f / h;
  return new v(g, p);
};
it.perpendicularBisector = function(t, e) {
  var n = e.x - t.x, r = e.y - t.y, s = new Xe(t.x + n / 2, t.y + r / 2, 1), o = new Xe(t.x - r + n / 2, t.y + n + r / 2, 1);
  return new Xe(s, o);
};
it.angleBisector = function(t, e, n) {
  var r = e.distance(t), s = e.distance(n), o = r / (r + s), a = n.x - t.x, u = n.y - t.y, l = new v(t.x + o * a, t.y + o * u);
  return l;
};
it.area3D = function(t, e, n) {
  var r = e.x - t.x, s = e.y - t.y, o = e.z - t.z, a = n.x - t.x, u = n.y - t.y, l = n.z - t.z, h = s * l - o * u, c = o * a - r * l, f = r * u - s * a, g = h * h + c * c + f * f, p = Math.sqrt(g) / 2;
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
var Ae = function() {
  this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new N();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._inputGeom = t, this._distance = e, this._curveBuilder = n;
};
Ae.prototype.addPoint = function(t) {
  if (this._distance <= 0)
    return null;
  var e = t.getCoordinates(), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, E.EXTERIOR, E.INTERIOR);
};
Ae.prototype.addPolygon = function(t) {
  var e = this, n = this._distance, r = R.LEFT;
  this._distance < 0 && (n = -this._distance, r = R.RIGHT);
  var s = t.getExteriorRing(), o = J.removeRepeatedPoints(s.getCoordinates());
  if (this._distance < 0 && this.isErodedCompletely(s, this._distance) || this._distance <= 0 && o.length < 3)
    return null;
  this.addPolygonRing(o, n, r, E.EXTERIOR, E.INTERIOR);
  for (var a = 0; a < t.getNumInteriorRing(); a++) {
    var u = t.getInteriorRingN(a), l = J.removeRepeatedPoints(u.getCoordinates());
    e._distance > 0 && e.isErodedCompletely(u, -e._distance) || e.addPolygonRing(l, n, R.opposite(r), E.INTERIOR, E.EXTERIOR);
  }
};
Ae.prototype.isTriangleErodedCompletely = function(t, e) {
  var n = new it(t[0], t[1], t[2]), r = n.inCentre(), s = M.distancePointLine(r, n.p0, n.p1);
  return s < Math.abs(e);
};
Ae.prototype.addLineString = function(t) {
  if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided())
    return null;
  var e = J.removeRepeatedPoints(t.getCoordinates()), n = this._curveBuilder.getLineCurve(e, this._distance);
  this.addCurve(n, E.EXTERIOR, E.INTERIOR);
};
Ae.prototype.addCurve = function(t, e, n) {
  if (t === null || t.length < 2)
    return null;
  var r = new Ct(t, new rt(0, E.BOUNDARY, e, n));
  this._curveList.add(r);
};
Ae.prototype.getCurves = function() {
  return this.add(this._inputGeom), this._curveList;
};
Ae.prototype.addPolygonRing = function(t, e, n, r, s) {
  if (e === 0 && t.length < An.MINIMUM_VALID_SIZE)
    return null;
  var o = r, a = s;
  t.length >= An.MINIMUM_VALID_SIZE && M.isCCW(t) && (o = s, a = r, n = R.opposite(n));
  var u = this._curveBuilder.getRingCurve(t, n, e);
  this.addCurve(u, o, a);
};
Ae.prototype.add = function(t) {
  if (t.isEmpty())
    return null;
  t instanceof bt ? this.addPolygon(t) : t instanceof mt ? this.addLineString(t) : t instanceof ge ? this.addPoint(t) : t instanceof is ? this.addCollection(t) : t instanceof Yi ? this.addCollection(t) : t instanceof bn ? this.addCollection(t) : t instanceof ne && this.addCollection(t);
};
Ae.prototype.isErodedCompletely = function(t, e) {
  var n = t.getCoordinates();
  if (n.length < 4)
    return e < 0;
  if (n.length === 4)
    return this.isTriangleErodedCompletely(n, e);
  var r = t.getEnvelopeInternal(), s = Math.min(r.getHeight(), r.getWidth());
  return e < 0 && 2 * Math.abs(e) > s;
};
Ae.prototype.addCollection = function(t) {
  for (var e = this, n = 0; n < t.getNumGeometries(); n++) {
    var r = t.getGeometryN(n);
    e.add(r);
  }
};
Ae.prototype.interfaces_ = function() {
  return [];
};
Ae.prototype.getClass = function() {
  return Ae;
};
var as = function() {
};
as.prototype.locate = function(t) {
};
as.prototype.interfaces_ = function() {
  return [];
};
as.prototype.getClass = function() {
  return as;
};
var On = function() {
  this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
  var t = arguments[0];
  this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
};
On.prototype.next = function() {
  if (this._atStart)
    return this._atStart = !1, On.isAtomic(this._parent) && this._index++, this._parent;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return this._subcollectionIterator.next();
    this._subcollectionIterator = null;
  }
  if (this._index >= this._max)
    throw new xs();
  var t = this._parent.getGeometryN(this._index++);
  return t instanceof ne ? (this._subcollectionIterator = new On(t), this._subcollectionIterator.next()) : t;
};
On.prototype.remove = function() {
  throw new Error(this.getClass().getName());
};
On.prototype.hasNext = function() {
  if (this._atStart)
    return !0;
  if (this._subcollectionIterator !== null) {
    if (this._subcollectionIterator.hasNext())
      return !0;
    this._subcollectionIterator = null;
  }
  return !(this._index >= this._max);
};
On.prototype.interfaces_ = function() {
  return [vs];
};
On.prototype.getClass = function() {
  return On;
};
On.isAtomic = function(t) {
  return !(t instanceof ne);
};
var xe = function() {
  this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
xe.prototype.locate = function(t) {
  return xe.locate(t, this._geom);
};
xe.prototype.interfaces_ = function() {
  return [as];
};
xe.prototype.getClass = function() {
  return xe;
};
xe.isPointInRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.isPointInRing(t, e.getCoordinates()) : !1;
};
xe.containsPointInPolygon = function(t, e) {
  if (e.isEmpty())
    return !1;
  var n = e.getExteriorRing();
  if (!xe.isPointInRing(t, n))
    return !1;
  for (var r = 0; r < e.getNumInteriorRing(); r++) {
    var s = e.getInteriorRingN(r);
    if (xe.isPointInRing(t, s))
      return !1;
  }
  return !0;
};
xe.containsPoint = function(t, e) {
  if (e instanceof bt)
    return xe.containsPointInPolygon(t, e);
  if (e instanceof ne)
    for (var n = new On(e); n.hasNext(); ) {
      var r = n.next();
      if (r !== e && xe.containsPoint(t, r))
        return !0;
    }
  return !1;
};
xe.locate = function(t, e) {
  return e.isEmpty() ? E.EXTERIOR : xe.containsPoint(t, e) ? E.INTERIOR : E.EXTERIOR;
};
var jt = function() {
  this._edgeMap = new qt(), this._edgeList = null, this._ptInAreaLocation = [E.NONE, E.NONE];
};
jt.prototype.getNextCW = function(t) {
  this.getEdges();
  var e = this._edgeList.indexOf(t), n = e - 1;
  return e === 0 && (n = this._edgeList.size() - 1), this._edgeList.get(n);
};
jt.prototype.propagateSideLabels = function(t) {
  for (var e = E.NONE, n = this.iterator(); n.hasNext(); ) {
    var r = n.next(), s = r.getLabel();
    s.isArea(t) && s.getLocation(t, R.LEFT) !== E.NONE && (e = s.getLocation(t, R.LEFT));
  }
  if (e === E.NONE)
    return null;
  for (var o = e, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    if (l.getLocation(t, R.ON) === E.NONE && l.setLocation(t, R.ON, o), l.isArea(t)) {
      var h = l.getLocation(t, R.LEFT), c = l.getLocation(t, R.RIGHT);
      if (c !== E.NONE) {
        if (c !== o)
          throw new ii("side location conflict", u.getCoordinate());
        h === E.NONE && j.shouldNeverReachHere("found single null side (at " + u.getCoordinate() + ")"), o = h;
      } else
        j.isTrue(l.getLocation(t, R.LEFT) === E.NONE, "found single null side"), l.setLocation(t, R.RIGHT, o), l.setLocation(t, R.LEFT, o);
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
  j.isTrue(s !== E.NONE, "Found unlabelled area edge");
  for (var o = s, a = this.iterator(); a.hasNext(); ) {
    var u = a.next(), l = u.getLabel();
    j.isTrue(l.isArea(t), "Found non-area edge");
    var h = l.getLocation(t, R.LEFT), c = l.getLocation(t, R.RIGHT);
    if (h === c || c !== o)
      return !1;
    o = h;
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
  return this._ptInAreaLocation[t] === E.NONE && (this._ptInAreaLocation[t] = xe.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t];
};
jt.prototype.toString = function() {
  var t = new Cn();
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
      o.isLine(a) && o.getLocation(a) === E.BOUNDARY && (n[a] = !0);
  for (var u = this.iterator(); u.hasNext(); )
    for (var l = u.next(), h = l.getLabel(), c = 0; c < 2; c++)
      if (h.isAnyNull(c)) {
        var f = E.NONE;
        if (n[c])
          f = E.EXTERIOR;
        else {
          var g = l.getCoordinate();
          f = e.getLocation(c, g, t);
        }
        h.setAllLocationsIfNull(c, f);
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
var i_ = function(i) {
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
        throw new ii("no outgoing dirEdge found", this.getCoordinate());
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
        throw new ii("depth mismatch at " + r.getCoordinate());
    } else if (arguments.length === 3) {
      for (var h = arguments[0], c = arguments[1], f = arguments[2], g = f, p = h; p < c; p++) {
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
      var l = r._resultAreaEdgeList.get(u), h = l.getSym();
      switch (s === null && l.getEdgeRing() === n && (s = l), a) {
        case r._SCANNING_FOR_INCOMING:
          if (h.getEdgeRing() !== n)
            continue;
          o = h, a = r._LINKING_TO_OUTGOING;
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
    for (var n = E.NONE, r = this.iterator(); r.hasNext(); ) {
      var s = r.next(), o = s.getSym();
      if (!s.isLineEdge()) {
        if (s.isInResult()) {
          n = E.INTERIOR;
          break;
        }
        if (o.isInResult()) {
          n = E.EXTERIOR;
          break;
        }
      }
    }
    if (n === E.NONE)
      return null;
    for (var a = n, u = this.iterator(); u.hasNext(); ) {
      var l = u.next(), h = l.getSym();
      l.isLineEdge() ? l.getEdge().setCovered(a === E.INTERIOR) : (l.isInResult() && (a = E.EXTERIOR), h.isInResult() && (a = E.INTERIOR));
    }
  }, t.prototype.computeLabelling = function(n) {
    var r = this;
    i.prototype.computeLabelling.call(this, n), this._label = new rt(E.NONE);
    for (var s = this.iterator(); s.hasNext(); )
      for (var o = s.next(), a = o.getEdge(), u = a.getLabel(), l = 0; l < 2; l++) {
        var h = u.getLocation(l);
        (h === E.INTERIOR || h === E.BOUNDARY) && r._label.setLocation(l, E.INTERIOR);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(jt), Jc = function(i) {
  function t() {
    i.apply(this, arguments);
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.createNode = function(n) {
    return new Oa(n, new i_());
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(rs), Ci = function i() {
  this._pts = null, this._orientation = null;
  var t = arguments[0];
  this._pts = t, this._orientation = i.orientation(t);
};
Ci.prototype.compareTo = function(t) {
  var e = t, n = Ci.compareOriented(this._pts, this._orientation, e._pts, e._orientation);
  return n;
};
Ci.prototype.interfaces_ = function() {
  return [Fe];
};
Ci.prototype.getClass = function() {
  return Ci;
};
Ci.orientation = function(t) {
  return J.increasingDirection(t) === 1;
};
Ci.compareOriented = function(t, e, n, r) {
  for (var s = e ? 1 : -1, o = r ? 1 : -1, a = e ? t.length : -1, u = r ? n.length : -1, l = e ? 0 : t.length - 1, h = r ? 0 : n.length - 1; ; ) {
    var c = t[l].compareTo(n[h]);
    if (c !== 0)
      return c;
    l += s, h += o;
    var f = l === a, g = h === u;
    if (f && !g)
      return -1;
    if (!f && g)
      return 1;
    if (f && g)
      return 0;
  }
};
var je = function() {
  this._edges = new N(), this._ocaMap = new qt();
};
je.prototype.print = function(t) {
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
je.prototype.addAll = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); )
    e.add(n.next());
};
je.prototype.findEdgeIndex = function(t) {
  for (var e = this, n = 0; n < this._edges.size(); n++)
    if (e._edges.get(n).equals(t))
      return n;
  return -1;
};
je.prototype.iterator = function() {
  return this._edges.iterator();
};
je.prototype.getEdges = function() {
  return this._edges;
};
je.prototype.get = function(t) {
  return this._edges.get(t);
};
je.prototype.findEqualEdge = function(t) {
  var e = new Ci(t.getCoordinates()), n = this._ocaMap.get(e);
  return n;
};
je.prototype.add = function(t) {
  this._edges.add(t);
  var e = new Ci(t.getCoordinates());
  this._ocaMap.put(e, t);
};
je.prototype.interfaces_ = function() {
  return [];
};
je.prototype.getClass = function() {
  return je;
};
var qi = function() {
};
qi.prototype.processIntersections = function(t, e, n, r) {
};
qi.prototype.isDone = function() {
};
qi.prototype.interfaces_ = function() {
  return [];
};
qi.prototype.getClass = function() {
  return qi;
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
  return [qi];
};
Se.prototype.getClass = function() {
  return Se;
};
Se.isAdjacentSegments = function(t, e) {
  return Math.abs(t - e) === 1;
};
var yn = function() {
  this.coord = null, this.segmentIndex = null, this.dist = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this.coord = new v(t), this.segmentIndex = e, this.dist = n;
};
yn.prototype.getSegmentIndex = function() {
  return this.segmentIndex;
};
yn.prototype.getCoordinate = function() {
  return this.coord;
};
yn.prototype.print = function(t) {
  t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist);
};
yn.prototype.compareTo = function(t) {
  var e = t;
  return this.compare(e.segmentIndex, e.dist);
};
yn.prototype.isEndPoint = function(t) {
  return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === t;
};
yn.prototype.toString = function() {
  return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
};
yn.prototype.getDistance = function() {
  return this.dist;
};
yn.prototype.compare = function(t, e) {
  return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0;
};
yn.prototype.interfaces_ = function() {
  return [Fe];
};
yn.prototype.getClass = function() {
  return yn;
};
var Gn = function() {
  this._nodeMap = new qt(), this.edge = null;
  var t = arguments[0];
  this.edge = t;
};
Gn.prototype.print = function(t) {
  t.println("Intersections:");
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    n.print(t);
  }
};
Gn.prototype.iterator = function() {
  return this._nodeMap.values().iterator();
};
Gn.prototype.addSplitEdges = function(t) {
  var e = this;
  this.addEndpoints();
  for (var n = this.iterator(), r = n.next(); n.hasNext(); ) {
    var s = n.next(), o = e.createSplitEdge(r, s);
    t.add(o), r = s;
  }
};
Gn.prototype.addEndpoints = function() {
  var t = this.edge.pts.length - 1;
  this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0);
};
Gn.prototype.createSplitEdge = function(t, e) {
  var n = this, r = e.segmentIndex - t.segmentIndex + 2, s = this.edge.pts[e.segmentIndex], o = e.dist > 0 || !e.coord.equals2D(s);
  o || r--;
  var a = new Array(r).fill(null), u = 0;
  a[u++] = new v(t.coord);
  for (var l = t.segmentIndex + 1; l <= e.segmentIndex; l++)
    a[u++] = n.edge.pts[l];
  return o && (a[u] = e.coord), new ra(a, new rt(this.edge._label));
};
Gn.prototype.add = function(t, e, n) {
  var r = new yn(t, e, n), s = this._nodeMap.get(r);
  return s !== null ? s : (this._nodeMap.put(r, r), r);
};
Gn.prototype.isIntersection = function(t) {
  for (var e = this.iterator(); e.hasNext(); ) {
    var n = e.next();
    if (n.coord.equals(t))
      return !0;
  }
  return !1;
};
Gn.prototype.interfaces_ = function() {
  return [];
};
Gn.prototype.getClass = function() {
  return Gn;
};
var Hi = function() {
};
Hi.prototype.getChainStartIndices = function(t) {
  var e = this, n = 0, r = new N();
  r.add(new fn(n));
  do {
    var s = e.findChainEnd(t, n);
    r.add(new fn(s)), n = s;
  } while (n < t.length - 1);
  var o = Hi.toIntArray(r);
  return o;
};
Hi.prototype.findChainEnd = function(t, e) {
  for (var n = st.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length; ) {
    var s = st.quadrant(t[r - 1], t[r]);
    if (s !== n)
      break;
    r++;
  }
  return r - 1;
};
Hi.prototype.interfaces_ = function() {
  return [];
};
Hi.prototype.getClass = function() {
  return Hi;
};
Hi.toIntArray = function(t) {
  for (var e = new Array(t.size()).fill(null), n = 0; n < e.length; n++)
    e[n] = t.get(n).intValue();
  return e;
};
var si = function() {
  this.e = null, this.pts = null, this.startIndex = null, this.env1 = new A(), this.env2 = new A();
  var t = arguments[0];
  this.e = t, this.pts = t.getCoordinates();
  var e = new Hi();
  this.startIndex = e.getChainStartIndices(this.pts);
};
si.prototype.getCoordinates = function() {
  return this.pts;
};
si.prototype.getMaxX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e > n ? e : n;
};
si.prototype.getMinX = function(t) {
  var e = this.pts[this.startIndex[t]].x, n = this.pts[this.startIndex[t + 1]].x;
  return e < n ? e : n;
};
si.prototype.computeIntersectsForChain = function() {
  if (arguments.length === 4) {
    var t = arguments[0], e = arguments[1], n = arguments[2], r = arguments[3];
    this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r);
  } else if (arguments.length === 6) {
    var s = arguments[0], o = arguments[1], a = arguments[2], u = arguments[3], l = arguments[4], h = arguments[5], c = this.pts[s], f = this.pts[o], g = a.pts[u], p = a.pts[l];
    if (o - s === 1 && l - u === 1)
      return h.addIntersections(this.e, s, a.e, u), null;
    if (this.env1.init(c, f), this.env2.init(g, p), !this.env1.intersects(this.env2))
      return null;
    var d = Math.trunc((s + o) / 2), _ = Math.trunc((u + l) / 2);
    s < d && (u < _ && this.computeIntersectsForChain(s, d, a, u, _, h), _ < l && this.computeIntersectsForChain(s, d, a, _, l, h)), d < o && (u < _ && this.computeIntersectsForChain(d, o, a, u, _, h), _ < l && this.computeIntersectsForChain(d, o, a, _, l, h));
  }
};
si.prototype.getStartIndexes = function() {
  return this.startIndex;
};
si.prototype.computeIntersects = function(t, e) {
  for (var n = this, r = 0; r < this.startIndex.length - 1; r++)
    for (var s = 0; s < t.startIndex.length - 1; s++)
      n.computeIntersectsForChain(r, t, s, e);
};
si.prototype.interfaces_ = function() {
  return [];
};
si.prototype.getClass = function() {
  return si;
};
var Bt = function i() {
  var t = this;
  this._depth = Array(2).fill().map(function() {
    return Array(3);
  });
  for (var e = 0; e < 2; e++)
    for (var n = 0; n < 3; n++)
      t._depth[e][n] = i.NULL_VALUE;
}, Qc = { NULL_VALUE: { configurable: !0 } };
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
  return this._depth[t][e] <= 0 ? E.EXTERIOR : E.INTERIOR;
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
        (s === E.EXTERIOR || s === E.INTERIOR) && (t.isNull(n, r) ? t._depth[n][r] = Bt.depthAtLocation(s) : t._depth[n][r] += Bt.depthAtLocation(s));
      }
  else if (arguments.length === 3) {
    var o = arguments[0], a = arguments[1], u = arguments[2];
    u === E.INTERIOR && this._depth[o][a]++;
  }
};
Bt.prototype.interfaces_ = function() {
  return [];
};
Bt.prototype.getClass = function() {
  return Bt;
};
Bt.depthAtLocation = function(t) {
  return t === E.EXTERIOR ? 0 : t === E.INTERIOR ? 1 : Bt.NULL_VALUE;
};
Qc.NULL_VALUE.get = function() {
  return -1;
};
Object.defineProperties(Bt, Qc);
var ra = function(i) {
  function t() {
    if (i.call(this), this.pts = null, this._env = null, this.eiList = new Gn(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new Bt(), this._depthDelta = 0, arguments.length === 1) {
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
    return this._mce === null && (this._mce = new si(this)), this._mce;
  }, t.prototype.getEnvelope = function() {
    var n = this;
    if (this._env === null) {
      this._env = new A();
      for (var r = 0; r < this.pts.length; r++)
        n._env.expandToInclude(n.pts[r]);
    }
    return this._env;
  }, t.prototype.addIntersection = function(n, r, s, o) {
    var a = new v(n.getIntersection(o)), u = r, l = n.getEdgeDistance(s, o), h = u + 1;
    if (h < this.pts.length) {
      var c = this.pts[h];
      a.equals2D(c) && (u = h, l = 0);
    }
    this.eiList.add(a, u, l);
  }, t.prototype.toString = function() {
    var n = this, r = new Cn();
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
  this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new je(), this._bufParams = t || null;
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
    var s = r.next(), o = s.getRightmostCoordinate(), a = new _r(n), u = a.getDepth(o);
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
  return He.sort(e, He.reverseOrder()), e;
};
ee.prototype.createEmptyResultGeometry = function() {
  var t = this._geomFact.createPolygon();
  return t;
};
ee.prototype.getNoder = function(t) {
  if (this._workingNoder !== null)
    return this._workingNoder;
  var e = new Qu(), n = new $i();
  return n.setPrecisionModel(t), e.setSegmentIntersector(new Se(n)), e;
};
ee.prototype.buffer = function(t, e) {
  var n = this._workingPrecisionModel;
  n === null && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
  var r = new ue(n, this._bufParams), s = new Ae(t, e, r), o = s.getCurves();
  if (o.size() <= 0)
    return this.createEmptyResultGeometry();
  this.computeNodedEdges(o, n), this._graph = new dt(new Jc()), this._graph.addEdges(this._edgeList.getEdges());
  var a = this.createSubgraphs(this._graph), u = new pe(this._geomFact);
  this.buildSubgraphs(a, u);
  var l = u.getPolygons();
  if (l.size() <= 0)
    return this.createEmptyResultGeometry();
  var h = this._geomFact.buildGeometry(l);
  return h;
};
ee.prototype.computeNodedEdges = function(t, e) {
  var n = this, r = this.getNoder(e);
  r.computeNodes(t);
  for (var s = r.getNodedSubstrings(), o = s.iterator(); o.hasNext(); ) {
    var a = o.next(), u = a.getCoordinates();
    if (!(u.length === 2 && u[0].equals2D(u[1]))) {
      var l = a.getData(), h = new ra(a.getCoordinates(), new rt(l));
      n.insertUniqueEdge(h);
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
  return e === E.INTERIOR && n === E.EXTERIOR ? 1 : e === E.EXTERIOR && n === E.INTERIOR ? -1 : 0;
};
ee.convertSegStrings = function(t) {
  for (var e = new K(), n = new N(); t.hasNext(); ) {
    var r = t.next(), s = e.createLineString(r.getCoordinates());
    n.add(s);
  }
  return e.buildGeometry(n);
};
var Ii = function() {
  if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision();
  } else if (arguments.length === 4) {
    var n = arguments[0], r = arguments[1], s = arguments[2], o = arguments[3];
    this._noder = n, this._scaleFactor = r, this._offsetX = s, this._offsetY = o, this._isScaled = !this.isIntegerPrecision();
  }
};
Ii.prototype.rescale = function() {
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
Ii.prototype.scale = function() {
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
Ii.prototype.isIntegerPrecision = function() {
  return this._scaleFactor === 1;
};
Ii.prototype.getNodedSubstrings = function() {
  var t = this._noder.getNodedSubstrings();
  return this._isScaled && this.rescale(t), t;
};
Ii.prototype.computeNodes = function(t) {
  var e = t;
  this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e);
};
Ii.prototype.interfaces_ = function() {
  return [Ui];
};
Ii.prototype.getClass = function() {
  return Ii;
};
var vn = function() {
  this._li = new $i(), this._segStrings = null;
  var t = arguments[0];
  this._segStrings = t;
}, $c = { fact: { configurable: !0 } };
vn.prototype.checkEndPtVertexIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); ) {
      var n = e.next(), r = n.getCoordinates();
      t.checkEndPtVertexIntersections(r[0], t._segStrings), t.checkEndPtVertexIntersections(r[r.length - 1], t._segStrings);
    }
  else if (arguments.length === 2) {
    for (var s = arguments[0], o = arguments[1], a = o.iterator(); a.hasNext(); )
      for (var u = a.next(), l = u.getCoordinates(), h = 1; h < l.length - 1; h++)
        if (l[h].equals(s))
          throw new ei("found endpt/interior pt intersection at index " + h + " :pt " + s);
  }
};
vn.prototype.checkInteriorIntersections = function() {
  var t = this;
  if (arguments.length === 0)
    for (var e = this._segStrings.iterator(); e.hasNext(); )
      for (var n = e.next(), r = this._segStrings.iterator(); r.hasNext(); ) {
        var s = r.next();
        t.checkInteriorIntersections(n, s);
      }
  else if (arguments.length === 2)
    for (var o = arguments[0], a = arguments[1], u = o.getCoordinates(), l = a.getCoordinates(), h = 0; h < u.length - 1; h++)
      for (var c = 0; c < l.length - 1; c++)
        t.checkInteriorIntersections(o, h, a, c);
  else if (arguments.length === 4) {
    var f = arguments[0], g = arguments[1], p = arguments[2], d = arguments[3];
    if (f === p && g === d)
      return null;
    var _ = f.getCoordinates()[g], m = f.getCoordinates()[g + 1], y = p.getCoordinates()[d], x = p.getCoordinates()[d + 1];
    if (this._li.computeIntersection(_, m, y, x), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, _, m) || this.hasInteriorIntersection(this._li, y, x)))
      throw new ei("found non-noded intersection at " + _ + "-" + m + " and " + y + "-" + x);
  }
};
vn.prototype.checkValid = function() {
  this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
};
vn.prototype.checkCollapses = function() {
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
vn.prototype.hasInteriorIntersection = function(t, e, n) {
  for (var r = 0; r < t.getIntersectionNum(); r++) {
    var s = t.getIntersection(r);
    if (!(s.equals(e) || s.equals(n)))
      return !0;
  }
  return !1;
};
vn.prototype.checkCollapse = function(t, e, n) {
  if (t.equals(n))
    throw new ei("found non-noded collapse at " + vn.fact.createLineString([t, e, n]));
};
vn.prototype.interfaces_ = function() {
  return [];
};
vn.prototype.getClass = function() {
  return vn;
};
$c.fact.get = function() {
  return new K();
};
Object.defineProperties(vn, $c);
var le = function() {
  this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
  var t = arguments[0], e = arguments[1], n = arguments[2];
  if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0)
    throw new gt("Scale factor must be non-zero");
  e !== 1 && (this._pt = new v(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new v(), this._p1Scaled = new v()), this.initCorners(this._pt);
}, tf = { SAFE_ENV_EXPANSION_FACTOR: { configurable: !0 } };
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
tf.SAFE_ENV_EXPANSION_FACTOR.get = function() {
  return 0.75;
};
Object.defineProperties(le, tf);
var ao = function() {
  this.tempEnv1 = new A(), this.selectedSegment = new F();
};
ao.prototype.select = function() {
  if (arguments.length !== 1) {
    if (arguments.length === 2) {
      var t = arguments[0], e = arguments[1];
      t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment);
    }
  }
};
ao.prototype.interfaces_ = function() {
  return [];
};
ao.prototype.getClass = function() {
  return ao;
};
var us = function() {
  this._index = null;
  var t = arguments[0];
  this._index = t;
}, ef = { HotPixelSnapAction: { configurable: !0 } };
us.prototype.snap = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return this.snap(t, null, -1);
  } else if (arguments.length === 3) {
    var e = arguments[0], n = arguments[1], r = arguments[2], s = e.getSafeEnvelope(), o = new nf(e, n, r);
    return this._index.query(s, {
      interfaces_: function() {
        return [xi];
      },
      visitItem: function(a) {
        var u = a;
        u.select(s, o);
      }
    }), o.isNodeAdded();
  }
};
us.prototype.interfaces_ = function() {
  return [];
};
us.prototype.getClass = function() {
  return us;
};
ef.HotPixelSnapAction.get = function() {
  return nf;
};
Object.defineProperties(us, ef);
var nf = function(i) {
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
}(ao), mr = function() {
  this._li = null, this._interiorIntersections = null;
  var t = arguments[0];
  this._li = t, this._interiorIntersections = new N();
};
mr.prototype.processIntersections = function(t, e, n, r) {
  var s = this;
  if (t === n && e === r)
    return null;
  var o = t.getCoordinates()[e], a = t.getCoordinates()[e + 1], u = n.getCoordinates()[r], l = n.getCoordinates()[r + 1];
  if (this._li.computeIntersection(o, a, u, l), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
    for (var h = 0; h < this._li.getIntersectionNum(); h++)
      s._interiorIntersections.add(s._li.getIntersection(h));
    t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1);
  }
};
mr.prototype.isDone = function() {
  return !1;
};
mr.prototype.getInteriorIntersections = function() {
  return this._interiorIntersections;
};
mr.prototype.interfaces_ = function() {
  return [qi];
};
mr.prototype.getClass = function() {
  return mr;
};
var Bn = function() {
  this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
  var t = arguments[0];
  this._pm = t, this._li = new $i(), this._li.setPrecisionModel(t), this._scaleFactor = t.getScale();
};
Bn.prototype.checkCorrectness = function(t) {
  var e = Ct.getNodedSubstrings(t), n = new vn(e);
  try {
    n.checkValid();
  } catch (r) {
    if (r instanceof Bc)
      r.printStackTrace();
    else
      throw r;
  } finally {
  }
};
Bn.prototype.getNodedSubstrings = function() {
  return Ct.getNodedSubstrings(this._nodedSegStrings);
};
Bn.prototype.snapRound = function(t, e) {
  var n = this.findInteriorIntersections(t, e);
  this.computeIntersectionSnaps(n), this.computeVertexSnaps(t);
};
Bn.prototype.findInteriorIntersections = function(t, e) {
  var n = new mr(e);
  return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections();
};
Bn.prototype.computeVertexSnaps = function() {
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
Bn.prototype.computeNodes = function(t) {
  this._nodedSegStrings = t, this._noder = new Qu(), this._pointSnapper = new us(this._noder.getIndex()), this.snapRound(t, this._li);
};
Bn.prototype.computeIntersectionSnaps = function(t) {
  for (var e = this, n = t.iterator(); n.hasNext(); ) {
    var r = n.next(), s = new le(r, e._scaleFactor, e._li);
    e._pointSnapper.snap(s);
  }
};
Bn.prototype.interfaces_ = function() {
  return [Ui];
};
Bn.prototype.getClass = function() {
  return Bn;
};
var Gt = function() {
  if (this._argGeom = null, this._distance = null, this._bufParams = new et(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
    var t = arguments[0];
    this._argGeom = t;
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    this._argGeom = e, this._bufParams = n;
  }
}, Es = { CAP_ROUND: { configurable: !0 }, CAP_BUTT: { configurable: !0 }, CAP_FLAT: { configurable: !0 }, CAP_SQUARE: { configurable: !0 }, MAX_PRECISION_DIGITS: { configurable: !0 } };
Gt.prototype.bufferFixedPrecision = function(t) {
  var e = new Ii(new Bn(new nt(1)), t.getScale()), n = new ee(this._bufParams);
  n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance);
};
Gt.prototype.bufferReducedPrecision = function() {
  var t = this;
  if (arguments.length === 0) {
    for (var e = Gt.MAX_PRECISION_DIGITS; e >= 0; e--) {
      try {
        t.bufferReducedPrecision(e);
      } catch (o) {
        if (o instanceof ii)
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
    if (e instanceof ei)
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
      var h = arguments[0], c = arguments[1], f = arguments[2], g = new Gt(h, f), p = g.getResultGeometry(c);
      return p;
    }
  } else if (arguments.length === 4) {
    var d = arguments[0], _ = arguments[1], m = arguments[2], y = arguments[3], x = new Gt(d);
    x.setQuadrantSegments(m), x.setEndCapStyle(y);
    var I = x.getResultGeometry(_);
    return I;
  }
};
Gt.precisionScaleFactor = function(t, e, n) {
  var r = t.getEnvelopeInternal(), s = Ee.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())), o = e > 0 ? e : 0, a = s + 2 * o, u = Math.trunc(Math.log(a) / Math.log(10) + 1), l = n - u, h = Math.pow(10, l);
  return h;
};
Es.CAP_ROUND.get = function() {
  return et.CAP_ROUND;
};
Es.CAP_BUTT.get = function() {
  return et.CAP_FLAT;
};
Es.CAP_FLAT.get = function() {
  return et.CAP_FLAT;
};
Es.CAP_SQUARE.get = function() {
  return et.CAP_SQUARE;
};
Es.MAX_PRECISION_DIGITS.get = function() {
  return 12;
};
Object.defineProperties(Gt, Es);
var Qt = function() {
  this._pt = [new v(), new v()], this._distance = q.NaN, this._isNull = !0;
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
var Ln = function() {
};
Ln.prototype.interfaces_ = function() {
  return [];
};
Ln.prototype.getClass = function() {
  return Ln;
};
Ln.computeDistance = function() {
  if (arguments[2] instanceof Qt && arguments[0] instanceof mt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), s = new F(), o = 0; o < r.length - 1; o++) {
      s.setCoordinates(r[o], r[o + 1]);
      var a = s.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Qt && arguments[0] instanceof bt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], h = arguments[2];
    Ln.computeDistance(u.getExteriorRing(), l, h);
    for (var c = 0; c < u.getNumInteriorRing(); c++)
      Ln.computeDistance(u.getInteriorRingN(c), l, h);
  } else if (arguments[2] instanceof Qt && arguments[0] instanceof V && arguments[1] instanceof v) {
    var f = arguments[0], g = arguments[1], p = arguments[2];
    if (f instanceof mt)
      Ln.computeDistance(f, g, p);
    else if (f instanceof bt)
      Ln.computeDistance(f, g, p);
    else if (f instanceof ne)
      for (var d = f, _ = 0; _ < d.getNumGeometries(); _++) {
        var m = d.getGeometryN(_);
        Ln.computeDistance(m, g, p);
      }
    else
      p.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof Qt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var y = arguments[0], x = arguments[1], I = arguments[2], S = y.closestPoint(x);
    I.setMinimum(S, x);
  }
};
var ji = function(t) {
  this._maxPtDist = new Qt(), this._inputGeom = t || null;
}, $u = { MaxPointDistanceFilter: { configurable: !0 }, MaxMidpointDistanceFilter: { configurable: !0 } };
ji.prototype.computeMaxMidpointDistance = function(t) {
  var e = new Si(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
ji.prototype.computeMaxVertexDistance = function(t) {
  var e = new yr(this._inputGeom);
  t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance());
};
ji.prototype.findDistance = function(t) {
  return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance();
};
ji.prototype.getDistancePoints = function() {
  return this._maxPtDist;
};
ji.prototype.interfaces_ = function() {
  return [];
};
ji.prototype.getClass = function() {
  return ji;
};
$u.MaxPointDistanceFilter.get = function() {
  return yr;
};
$u.MaxMidpointDistanceFilter.get = function() {
  return Si;
};
Object.defineProperties(ji, $u);
var yr = function(t) {
  this._maxPtDist = new Qt(), this._minPtDist = new Qt(), this._geom = t || null;
};
yr.prototype.filter = function(t) {
  this._minPtDist.initialize(), Ln.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
yr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
yr.prototype.interfaces_ = function() {
  return [Dn];
};
yr.prototype.getClass = function() {
  return yr;
};
var Si = function(t) {
  this._maxPtDist = new Qt(), this._minPtDist = new Qt(), this._geom = t || null;
};
Si.prototype.filter = function(t, e) {
  if (e === 0)
    return null;
  var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), s = new v((n.x + r.x) / 2, (n.y + r.y) / 2);
  this._minPtDist.initialize(), Ln.computeDistance(this._geom, s, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
Si.prototype.isDone = function() {
  return !1;
};
Si.prototype.isGeometryChanged = function() {
  return !1;
};
Si.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Si.prototype.interfaces_ = function() {
  return [We];
};
Si.prototype.getClass = function() {
  return Si;
};
var ti = function(t) {
  this._comps = t || null;
};
ti.prototype.filter = function(t) {
  t instanceof bt && this._comps.add(t);
};
ti.prototype.interfaces_ = function() {
  return [pn];
};
ti.prototype.getClass = function() {
  return ti;
};
ti.getPolygons = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return ti.getPolygons(t, new N());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof bt ? n.add(e) : e instanceof ne && e.apply(new ti(n)), n;
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
  if (this._isForcedToLineString && t instanceof An) {
    var e = t.getFactory().createLineString(t.getCoordinateSequence());
    return this._lines.add(e), null;
  }
  t instanceof mt && this._lines.add(t);
};
kt.prototype.setForceToLineString = function(t) {
  this._isForcedToLineString = t;
};
kt.prototype.interfaces_ = function() {
  return [ni];
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
      var l = arguments[0], h = arguments[1];
      return l instanceof mt ? h.add(l) : l.apply(new kt(h)), h;
    }
  } else if (arguments.length === 3) {
    if (typeof arguments[2] == "boolean" && X(arguments[0], Nt) && X(arguments[1], Nt)) {
      for (var c = arguments[0], f = arguments[1], g = arguments[2], p = c.iterator(); p.hasNext(); ) {
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
var Ze = function() {
  if (this._boundaryRule = Me.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, arguments.length !== 0) {
    if (arguments.length === 1) {
      var t = arguments[0];
      if (t === null)
        throw new gt("Rule must be non-null");
      this._boundaryRule = t;
    }
  }
};
Ze.prototype.locateInternal = function() {
  var t = this;
  if (arguments[0] instanceof v && arguments[1] instanceof bt) {
    var e = arguments[0], n = arguments[1];
    if (n.isEmpty())
      return E.EXTERIOR;
    var r = n.getExteriorRing(), s = this.locateInPolygonRing(e, r);
    if (s === E.EXTERIOR)
      return E.EXTERIOR;
    if (s === E.BOUNDARY)
      return E.BOUNDARY;
    for (var o = 0; o < n.getNumInteriorRing(); o++) {
      var a = n.getInteriorRingN(o), u = t.locateInPolygonRing(e, a);
      if (u === E.INTERIOR)
        return E.EXTERIOR;
      if (u === E.BOUNDARY)
        return E.BOUNDARY;
    }
    return E.INTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof mt) {
    var l = arguments[0], h = arguments[1];
    if (!h.getEnvelopeInternal().intersects(l))
      return E.EXTERIOR;
    var c = h.getCoordinates();
    return !h.isClosed() && (l.equals(c[0]) || l.equals(c[c.length - 1])) ? E.BOUNDARY : M.isOnLine(l, c) ? E.INTERIOR : E.EXTERIOR;
  } else if (arguments[0] instanceof v && arguments[1] instanceof ge) {
    var f = arguments[0], g = arguments[1], p = g.getCoordinate();
    return p.equals2D(f) ? E.INTERIOR : E.EXTERIOR;
  }
};
Ze.prototype.locateInPolygonRing = function(t, e) {
  return e.getEnvelopeInternal().intersects(t) ? M.locatePointInRing(t, e.getCoordinates()) : E.EXTERIOR;
};
Ze.prototype.intersects = function(t, e) {
  return this.locate(t, e) !== E.EXTERIOR;
};
Ze.prototype.updateLocationInfo = function(t) {
  t === E.INTERIOR && (this._isIn = !0), t === E.BOUNDARY && this._numBoundaries++;
};
Ze.prototype.computeLocation = function(t, e) {
  var n = this;
  if (e instanceof ge && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof mt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof bt)
    this.updateLocationInfo(this.locateInternal(t, e));
  else if (e instanceof Yi)
    for (var r = e, s = 0; s < r.getNumGeometries(); s++) {
      var o = r.getGeometryN(s);
      n.updateLocationInfo(n.locateInternal(t, o));
    }
  else if (e instanceof bn)
    for (var a = e, u = 0; u < a.getNumGeometries(); u++) {
      var l = a.getGeometryN(u);
      n.updateLocationInfo(n.locateInternal(t, l));
    }
  else if (e instanceof ne)
    for (var h = new On(e); h.hasNext(); ) {
      var c = h.next();
      c !== e && n.computeLocation(t, c);
    }
};
Ze.prototype.locate = function(t, e) {
  return e.isEmpty() ? E.EXTERIOR : e instanceof mt ? this.locateInternal(t, e) : e instanceof bt ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? E.BOUNDARY : this._numBoundaries > 0 || this._isIn ? E.INTERIOR : E.EXTERIOR);
};
Ze.prototype.interfaces_ = function() {
  return [];
};
Ze.prototype.getClass = function() {
  return Ze;
};
var $t = function i() {
  if (this._component = null, this._segIndex = null, this._pt = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    i.call(this, t, i.INSIDE_AREA, e);
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._component = n, this._segIndex = r, this._pt = s;
  }
}, rf = { INSIDE_AREA: { configurable: !0 } };
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
rf.INSIDE_AREA.get = function() {
  return -1;
};
Object.defineProperties($t, rf);
var mi = function(t) {
  this._pts = t || null;
};
mi.prototype.filter = function(t) {
  t instanceof ge && this._pts.add(t);
};
mi.prototype.interfaces_ = function() {
  return [pn];
};
mi.prototype.getClass = function() {
  return mi;
};
mi.getPoints = function() {
  if (arguments.length === 1) {
    var t = arguments[0];
    return t instanceof ge ? He.singletonList(t) : mi.getPoints(t, new N());
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1];
    return e instanceof ge ? n.add(e) : e instanceof ne && e.apply(new mi(n)), n;
  }
};
var vr = function() {
  this._locations = null;
  var t = arguments[0];
  this._locations = t;
};
vr.prototype.filter = function(t) {
  (t instanceof ge || t instanceof mt || t instanceof bt) && this._locations.add(new $t(t, 0, t.getCoordinate()));
};
vr.prototype.interfaces_ = function() {
  return [pn];
};
vr.prototype.getClass = function() {
  return vr;
};
vr.getLocations = function(t) {
  var e = new N();
  return t.apply(new vr(e)), e;
};
var Vt = function() {
  if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new Ze(), this._minDistanceLocation = null, this._minDistance = q.MAX_VALUE, arguments.length === 2) {
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
    var n = arguments[0], r = arguments[1], s = 1 - n, o = ti.getPolygons(this._geom[n]);
    if (o.size() > 0) {
      var a = vr.getLocations(this._geom[s]);
      if (this.computeContainmentDistance(a, o, r), this._minDistance <= this._terminateDistance)
        return this._minDistanceLocation[s] = r[0], this._minDistanceLocation[n] = r[1], null;
    }
  } else if (arguments.length === 3) {
    if (arguments[2] instanceof Array && X(arguments[0], Ye) && X(arguments[1], Ye)) {
      for (var u = arguments[0], l = arguments[1], h = arguments[2], c = 0; c < u.size(); c++)
        for (var f = u.get(c), g = 0; g < l.size(); g++)
          if (t.computeContainmentDistance(f, l.get(g), h), t._minDistance <= t._terminateDistance)
            return null;
    } else if (arguments[2] instanceof Array && arguments[0] instanceof $t && arguments[1] instanceof bt) {
      var p = arguments[0], d = arguments[1], _ = arguments[2], m = p.getCoordinate();
      if (E.EXTERIOR !== this._ptLocator.locate(m, d))
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
  var t = new Array(2).fill(null), e = kt.getLines(this._geom[0]), n = kt.getLines(this._geom[1]), r = mi.getPoints(this._geom[0]), s = mi.getPoints(this._geom[1]);
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
          var l = new F(s[a], s[a + 1]), h = l.closestPoint(o);
          r[0] = new $t(e, a, h), r[1] = new $t(n, 0, o);
        }
        if (t._minDistance <= t._terminateDistance)
          return null;
      }
    } else if (arguments[2] instanceof Array && arguments[0] instanceof mt && arguments[1] instanceof mt) {
      var c = arguments[0], f = arguments[1], g = arguments[2];
      if (c.getEnvelopeInternal().distance(f.getEnvelopeInternal()) > this._minDistance)
        return null;
      for (var p = c.getCoordinates(), d = f.getCoordinates(), _ = 0; _ < p.length - 1; _++)
        for (var m = 0; m < d.length - 1; m++) {
          var y = M.distanceLineLine(p[_], p[_ + 1], d[m], d[m + 1]);
          if (y < t._minDistance) {
            t._minDistance = y;
            var x = new F(p[_], p[_ + 1]), I = new F(d[m], d[m + 1]), S = x.closestPoints(I);
            g[0] = new $t(c, _, S[0]), g[1] = new $t(f, m, S[1]);
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
  this._pt = [new v(), new v()], this._distance = q.NaN, this._isNull = !0;
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
  return Ue.toLineString(this._pt[0], this._pt[1]);
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
var an = function() {
};
an.prototype.interfaces_ = function() {
  return [];
};
an.prototype.getClass = function() {
  return an;
};
an.computeDistance = function() {
  if (arguments[2] instanceof Wt && arguments[0] instanceof mt && arguments[1] instanceof v)
    for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new F(), s = t.getCoordinates(), o = 0; o < s.length - 1; o++) {
      r.setCoordinates(s[o], s[o + 1]);
      var a = r.closestPoint(e);
      n.setMinimum(a, e);
    }
  else if (arguments[2] instanceof Wt && arguments[0] instanceof bt && arguments[1] instanceof v) {
    var u = arguments[0], l = arguments[1], h = arguments[2];
    an.computeDistance(u.getExteriorRing(), l, h);
    for (var c = 0; c < u.getNumInteriorRing(); c++)
      an.computeDistance(u.getInteriorRingN(c), l, h);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof V && arguments[1] instanceof v) {
    var f = arguments[0], g = arguments[1], p = arguments[2];
    if (f instanceof mt)
      an.computeDistance(f, g, p);
    else if (f instanceof bt)
      an.computeDistance(f, g, p);
    else if (f instanceof ne)
      for (var d = f, _ = 0; _ < d.getNumGeometries(); _++) {
        var m = d.getGeometryN(_);
        an.computeDistance(m, g, p);
      }
    else
      p.setMinimum(f.getCoordinate(), g);
  } else if (arguments[2] instanceof Wt && arguments[0] instanceof F && arguments[1] instanceof v) {
    var y = arguments[0], x = arguments[1], I = arguments[2], S = y.closestPoint(x);
    I.setMinimum(S, x);
  }
};
var Oe = function() {
  this._g0 = null, this._g1 = null, this._ptDist = new Wt(), this._densifyFrac = 0;
  var t = arguments[0], e = arguments[1];
  this._g0 = t, this._g1 = e;
}, tl = { MaxPointDistanceFilter: { configurable: !0 }, MaxDensifiedByFractionDistanceFilter: { configurable: !0 } };
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
  var r = new xr(e);
  if (t.apply(r), n.setMaximum(r.getMaxPointDistance()), this._densifyFrac > 0) {
    var s = new Ri(e, this._densifyFrac);
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
tl.MaxPointDistanceFilter.get = function() {
  return xr;
};
tl.MaxDensifiedByFractionDistanceFilter.get = function() {
  return Ri;
};
Object.defineProperties(Oe, tl);
var xr = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._euclideanDist = new an(), this._geom = null;
  var t = arguments[0];
  this._geom = t;
};
xr.prototype.filter = function(t) {
  this._minPtDist.initialize(), an.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist);
};
xr.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
xr.prototype.interfaces_ = function() {
  return [Dn];
};
xr.prototype.getClass = function() {
  return xr;
};
var Ri = function() {
  this._maxPtDist = new Wt(), this._minPtDist = new Wt(), this._geom = null, this._numSubSegs = 0;
  var t = arguments[0], e = arguments[1];
  this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e));
};
Ri.prototype.filter = function(t, e) {
  var n = this;
  if (e === 0)
    return null;
  for (var r = t.getCoordinate(e - 1), s = t.getCoordinate(e), o = (s.x - r.x) / this._numSubSegs, a = (s.y - r.y) / this._numSubSegs, u = 0; u < this._numSubSegs; u++) {
    var l = r.x + u * o, h = r.y + u * a, c = new v(l, h);
    n._minPtDist.initialize(), an.computeDistance(n._geom, c, n._minPtDist), n._maxPtDist.setMaximum(n._minPtDist);
  }
};
Ri.prototype.isDone = function() {
  return !1;
};
Ri.prototype.isGeometryChanged = function() {
  return !1;
};
Ri.prototype.getMaxPointDistance = function() {
  return this._maxPtDist;
};
Ri.prototype.interfaces_ = function() {
  return [We];
};
Ri.prototype.getClass = function() {
  return Ri;
};
var fe = function(t, e, n) {
  this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null;
}, el = { VERBOSE: { configurable: !0 }, MAX_DISTANCE_DIFF_FRAC: { configurable: !0 } };
fe.prototype.checkMaximumDistance = function(t, e, n) {
  var r = new Oe(e, t);
  if (r.setDensifyFraction(0.25), this._maxDistanceFound = r.orientedDistance(), this._maxDistanceFound > n) {
    this._isValid = !1;
    var s = r.getCoordinates();
    this._errorLocation = s[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + Ue.toLineString(s[0], s[1]) + ")";
  }
};
fe.prototype.isValid = function() {
  var t = Math.abs(this._bufDistance), e = fe.MAX_DISTANCE_DIFF_FRAC * t;
  return this._minValidDistance = t - e, this._maxValidDistance = t + e, this._input.isEmpty() || this._result.isEmpty() ? !0 : (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), fe.VERBOSE && zt.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid);
};
fe.prototype.checkNegativeValid = function() {
  if (!(this._input instanceof bt || this._input instanceof bn || this._input instanceof ne))
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
    this._errorLocation = r.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(s), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + Ue.toLineString(s[0], s[1]) + " )";
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
  for (var e = new N(), n = new kt(e), r = ti.getPolygons(t), s = r.iterator(); s.hasNext(); ) {
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
el.VERBOSE.get = function() {
  return !1;
};
el.MAX_DISTANCE_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(fe, el);
var Xt = function(t, e, n) {
  this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null;
}, nl = { VERBOSE: { configurable: !0 }, MAX_ENV_DIFF_FRAC: { configurable: !0 } };
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
  this._result instanceof bt || this._result instanceof bn || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal");
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
nl.VERBOSE.get = function() {
  return !1;
};
nl.MAX_ENV_DIFF_FRAC.get = function() {
  return 0.012;
};
Object.defineProperties(Xt, nl);
var xn = function() {
  this._pts = null, this._data = null;
  var t = arguments[0], e = arguments[1];
  this._pts = t, this._data = e;
};
xn.prototype.getCoordinates = function() {
  return this._pts;
};
xn.prototype.size = function() {
  return this._pts.length;
};
xn.prototype.getCoordinate = function(t) {
  return this._pts[t];
};
xn.prototype.isClosed = function() {
  return this._pts[0].equals(this._pts[this._pts.length - 1]);
};
xn.prototype.getSegmentOctant = function(t) {
  return t === this._pts.length - 1 ? -1 : dr.octant(this.getCoordinate(t), this.getCoordinate(t + 1));
};
xn.prototype.setData = function(t) {
  this._data = t;
};
xn.prototype.getData = function() {
  return this._data;
};
xn.prototype.toString = function() {
  return Ue.toLineString(new vt(this._pts));
};
xn.prototype.interfaces_ = function() {
  return [kn];
};
xn.prototype.getClass = function() {
  return xn;
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
  return [qi];
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
var Ke = function() {
  this._li = new $i(), this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
  var t = arguments[0];
  this._segStrings = t;
};
Ke.prototype.execute = function() {
  if (this._segInt !== null)
    return null;
  this.checkInteriorIntersections();
};
Ke.prototype.getIntersections = function() {
  return this._segInt.getIntersections();
};
Ke.prototype.isValid = function() {
  return this.execute(), this._isValid;
};
Ke.prototype.setFindAllIntersections = function(t) {
  this._findAllIntersections = t;
};
Ke.prototype.checkInteriorIntersections = function() {
  this._isValid = !0, this._segInt = new Dt(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
  var t = new Qu();
  if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection())
    return this._isValid = !1, null;
};
Ke.prototype.checkValid = function() {
  if (this.execute(), !this._isValid)
    throw new ii(this.getErrorMessage(), this._segInt.getInteriorIntersection());
};
Ke.prototype.getErrorMessage = function() {
  if (this._isValid)
    return "no intersections found";
  var t = this._segInt.getIntersectionSegments();
  return "found non-noded intersection between " + Ue.toLineString(t[0], t[1]) + " and " + Ue.toLineString(t[2], t[3]);
};
Ke.prototype.interfaces_ = function() {
  return [];
};
Ke.prototype.getClass = function() {
  return Ke;
};
Ke.computeIntersections = function(t) {
  var e = new Ke(t);
  return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections();
};
var Zi = function i() {
  this._nv = null;
  var t = arguments[0];
  this._nv = new Ke(i.toSegmentStrings(t));
};
Zi.prototype.checkValid = function() {
  this._nv.checkValid();
};
Zi.prototype.interfaces_ = function() {
  return [];
};
Zi.prototype.getClass = function() {
  return Zi;
};
Zi.toSegmentStrings = function(t) {
  for (var e = new N(), n = t.iterator(); n.hasNext(); ) {
    var r = n.next();
    e.add(new xn(r.getCoordinates(), r));
  }
  return e;
};
Zi.checkValid = function(t) {
  var e = new Zi(t);
  e.checkValid();
};
var Er = function(t) {
  this._mapOp = t;
};
Er.prototype.map = function(t) {
  for (var e = this, n = new N(), r = 0; r < t.getNumGeometries(); r++) {
    var s = e._mapOp.map(t.getGeometryN(r));
    s.isEmpty() || n.add(s);
  }
  return t.getFactory().createGeometryCollection(K.toGeometryArray(n));
};
Er.prototype.interfaces_ = function() {
  return [];
};
Er.prototype.getClass = function() {
  return Er;
};
Er.map = function(t, e) {
  var n = new Er(e);
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
  t.isLineEdge() && !t.isVisited() && H.isResultOfOp(r, e) && !s.isCovered() && (n.add(s), t.setVisitedEdge(!0));
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
  j.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), H.isResultOfOp(r, e) && e === H.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0));
};
En.prototype.interfaces_ = function() {
  return [];
};
En.prototype.getClass = function() {
  return En;
};
var Cr = function() {
  this._op = null, this._geometryFactory = null, this._resultPointList = new N();
  var t = arguments[0], e = arguments[1];
  this._op = t, this._geometryFactory = e;
};
Cr.prototype.filterCoveredNodeToPoint = function(t) {
  var e = t.getCoordinate();
  if (!this._op.isCoveredByLA(e)) {
    var n = this._geometryFactory.createPoint(e);
    this._resultPointList.add(n);
  }
};
Cr.prototype.extractNonCoveredResultNodes = function(t) {
  for (var e = this, n = this._op.getGraph().getNodes().iterator(); n.hasNext(); ) {
    var r = n.next();
    if (!r.isInResult() && !r.isIncidentEdgeInResult() && (r.getEdges().getDegree() === 0 || t === H.INTERSECTION)) {
      var s = r.getLabel();
      H.isResultOfOp(s, t) && e.filterCoveredNodeToPoint(r);
    }
  }
};
Cr.prototype.build = function(t) {
  return this.extractNonCoveredResultNodes(t), this._resultPointList;
};
Cr.prototype.interfaces_ = function() {
  return [];
};
Cr.prototype.getClass = function() {
  return Cr;
};
var he = function() {
  this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1;
};
he.prototype.transformPoint = function(t, e) {
  return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t));
};
he.prototype.transformPolygon = function(t, e) {
  var n = this, r = !0, s = this.transformLinearRing(t.getExteriorRing(), t);
  (s === null || !(s instanceof An) || s.isEmpty()) && (r = !1);
  for (var o = new N(), a = 0; a < t.getNumInteriorRing(); a++) {
    var u = n.transformLinearRing(t.getInteriorRingN(a), t);
    u === null || u.isEmpty() || (u instanceof An || (r = !1), o.add(u));
  }
  if (r)
    return this._factory.createPolygon(s, o.toArray([]));
  var l = new N();
  return s !== null && l.add(s), l.addAll(o), this._factory.buildGeometry(l);
};
he.prototype.createCoordinateSequence = function(t) {
  return this._factory.getCoordinateSequenceFactory().create(t);
};
he.prototype.getInputGeometry = function() {
  return this._inputGeom;
};
he.prototype.transformMultiLineString = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformLineString(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
he.prototype.transformCoordinates = function(t, e) {
  return this.copy(t);
};
he.prototype.transformLineString = function(t, e) {
  return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t));
};
he.prototype.transformMultiPoint = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPoint(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
he.prototype.transformMultiPolygon = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transformPolygon(t.getGeometryN(s), t);
    o !== null && (o.isEmpty() || r.add(o));
  }
  return this._factory.buildGeometry(r);
};
he.prototype.copy = function(t) {
  return t.copy();
};
he.prototype.transformGeometryCollection = function(t, e) {
  for (var n = this, r = new N(), s = 0; s < t.getNumGeometries(); s++) {
    var o = n.transform(t.getGeometryN(s));
    o !== null && (n._pruneEmptyGeometry && o.isEmpty() || r.add(o));
  }
  return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(K.toGeometryArray(r)) : this._factory.buildGeometry(r);
};
he.prototype.transform = function(t) {
  if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof ge)
    return this.transformPoint(t, null);
  if (t instanceof is)
    return this.transformMultiPoint(t, null);
  if (t instanceof An)
    return this.transformLinearRing(t, null);
  if (t instanceof mt)
    return this.transformLineString(t, null);
  if (t instanceof Yi)
    return this.transformMultiLineString(t, null);
  if (t instanceof bt)
    return this.transformPolygon(t, null);
  if (t instanceof bn)
    return this.transformMultiPolygon(t, null);
  if (t instanceof ne)
    return this.transformGeometryCollection(t, null);
  throw new gt("Unknown Geometry subtype: " + t.getClass().getName());
};
he.prototype.transformLinearRing = function(t, e) {
  var n = this.transformCoordinates(t.getCoordinateSequence(), t);
  if (n === null)
    return this._factory.createLinearRing(null);
  var r = n.size();
  return r > 0 && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n);
};
he.prototype.interfaces_ = function() {
  return [];
};
he.prototype.getClass = function() {
  return he;
};
var zn = function i() {
  if (this._snapTolerance = 0, this._srcPts = null, this._seg = new F(), this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof mt && typeof arguments[1] == "number") {
    var t = arguments[0], e = arguments[1];
    i.call(this, t.getCoordinates(), e);
  } else if (arguments[0] instanceof Array && typeof arguments[1] == "number") {
    var n = arguments[0], r = arguments[1];
    this._srcPts = n, this._isClosed = i.isClosed(n), this._snapTolerance = r;
  }
};
zn.prototype.snapVertices = function(t, e) {
  for (var n = this, r = this._isClosed ? t.size() - 1 : t.size(), s = 0; s < r; s++) {
    var o = t.get(s), a = n.findSnapForVertex(o, e);
    a !== null && (t.set(s, new v(a)), s === 0 && n._isClosed && t.set(t.size() - 1, new v(a)));
  }
};
zn.prototype.findSnapForVertex = function(t, e) {
  for (var n = this, r = 0; r < e.length; r++) {
    if (t.equals2D(e[r]))
      return null;
    if (t.distance(e[r]) < n._snapTolerance)
      return e[r];
  }
  return null;
};
zn.prototype.snapTo = function(t) {
  var e = new Eo(this._srcPts);
  this.snapVertices(e, t), this.snapSegments(e, t);
  var n = e.toCoordinateArray();
  return n;
};
zn.prototype.snapSegments = function(t, e) {
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
zn.prototype.findSegmentIndexToSnap = function(t, e) {
  for (var n = this, r = q.MAX_VALUE, s = -1, o = 0; o < e.size() - 1; o++) {
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
zn.prototype.setAllowSnappingToSourceVertices = function(t) {
  this._allowSnappingToSourceVertices = t;
};
zn.prototype.interfaces_ = function() {
  return [];
};
zn.prototype.getClass = function() {
  return zn;
};
zn.isClosed = function(t) {
  return t.length <= 1 ? !1 : t[0].equals2D(t[t.length - 1]);
};
var xt = function(t) {
  this._srcGeom = t || null;
}, sf = { SNAP_PRECISION_FACTOR: { configurable: !0 } };
xt.prototype.snapTo = function(t, e) {
  var n = this.extractTargetCoordinates(t), r = new of(e, n);
  return r.transform(this._srcGeom);
};
xt.prototype.snapToSelf = function(t, e) {
  var n = this.extractTargetCoordinates(this._srcGeom), r = new of(t, n, !0), s = r.transform(this._srcGeom), o = s;
  return e && X(o, vi) && (o = s.buffer(0)), o;
};
xt.prototype.computeSnapTolerance = function(t) {
  var e = this.computeMinimumSegmentLength(t), n = e / 10;
  return n;
};
xt.prototype.extractTargetCoordinates = function(t) {
  for (var e = new gn(), n = t.getCoordinates(), r = 0; r < n.length; r++)
    e.add(n[r]);
  return e.toArray(new Array(0).fill(null));
};
xt.prototype.computeMinimumSegmentLength = function(t) {
  for (var e = q.MAX_VALUE, n = 0; n < t.length - 1; n++) {
    var r = t[n].distance(t[n + 1]);
    r < e && (e = r);
  }
  return e;
};
xt.prototype.interfaces_ = function() {
  return [];
};
xt.prototype.getClass = function() {
  return xt;
};
xt.snap = function(t, e, n) {
  var r = new Array(2).fill(null), s = new xt(t);
  r[0] = s.snapTo(e, n);
  var o = new xt(e);
  return r[1] = o.snapTo(r[0], n), r;
};
xt.computeOverlaySnapTolerance = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = xt.computeSizeBasedSnapTolerance(t), n = t.getPrecisionModel();
    if (n.getType() === nt.FIXED) {
      var r = 1 / n.getScale() * 2 / 1.415;
      r > e && (e = r);
    }
    return e;
  } else if (arguments.length === 2) {
    var s = arguments[0], o = arguments[1];
    return Math.min(xt.computeOverlaySnapTolerance(s), xt.computeOverlaySnapTolerance(o));
  }
};
xt.computeSizeBasedSnapTolerance = function(t) {
  var e = t.getEnvelopeInternal(), n = Math.min(e.getHeight(), e.getWidth()), r = n * xt.SNAP_PRECISION_FACTOR;
  return r;
};
xt.snapToSelf = function(t, e, n) {
  var r = new xt(t);
  return r.snapToSelf(e, n);
};
sf.SNAP_PRECISION_FACTOR.get = function() {
  return 1e-9;
};
Object.defineProperties(xt, sf);
var of = function(i) {
  function t(e, n, r) {
    i.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = r !== void 0 ? r : !1;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.snapLine = function(n, r) {
    var s = new zn(n, this._snapTolerance);
    return s.setAllowSnappingToSourceVertices(this._isSelfSnap), s.snapTo(r);
  }, t.prototype.transformCoordinates = function(n, r) {
    var s = n.toCoordinateArray(), o = this.snapLine(s, this._snapPts);
    return this._factory.getCoordinateSequenceFactory().create(o);
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(he), Jt = function() {
  this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null;
};
Jt.prototype.getCommon = function() {
  return q.longBitsToDouble(this._commonBits);
};
Jt.prototype.add = function(t) {
  var e = q.doubleToLongBits(t);
  if (this._isFirst)
    return this._commonBits = e, this._commonSignExp = Jt.signExpBits(this._commonBits), this._isFirst = !1, null;
  var n = Jt.signExpBits(e);
  if (n !== this._commonSignExp)
    return this._commonBits = 0, null;
  this._commonMantissaBitsCount = Jt.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = Jt.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount));
};
Jt.prototype.toString = function() {
  if (arguments.length === 1) {
    var t = arguments[0], e = q.longBitsToDouble(t), n = q.toBinaryString(t), r = "0000000000000000000000000000000000000000000000000000000000000000" + n, s = r.substring(r.length - 64), o = s.substring(0, 1) + "  " + s.substring(1, 12) + "(exp) " + s.substring(12) + " [ " + e + " ]";
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
var wi = function() {
  this._commonCoord = null, this._ccFilter = new Ir();
}, il = { CommonCoordinateFilter: { configurable: !0 }, Translater: { configurable: !0 } };
wi.prototype.addCommonBits = function(t) {
  var e = new Ni(this._commonCoord);
  t.apply(e), t.geometryChanged();
};
wi.prototype.removeCommonBits = function(t) {
  if (this._commonCoord.x === 0 && this._commonCoord.y === 0)
    return t;
  var e = new v(this._commonCoord);
  e.x = -e.x, e.y = -e.y;
  var n = new Ni(e);
  return t.apply(n), t.geometryChanged(), t;
};
wi.prototype.getCommonCoordinate = function() {
  return this._commonCoord;
};
wi.prototype.add = function(t) {
  t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate();
};
wi.prototype.interfaces_ = function() {
  return [];
};
wi.prototype.getClass = function() {
  return wi;
};
il.CommonCoordinateFilter.get = function() {
  return Ir;
};
il.Translater.get = function() {
  return Ni;
};
Object.defineProperties(wi, il);
var Ir = function() {
  this._commonBitsX = new Jt(), this._commonBitsY = new Jt();
};
Ir.prototype.filter = function(t) {
  this._commonBitsX.add(t.x), this._commonBitsY.add(t.y);
};
Ir.prototype.getCommonCoordinate = function() {
  return new v(this._commonBitsX.getCommon(), this._commonBitsY.getCommon());
};
Ir.prototype.interfaces_ = function() {
  return [Dn];
};
Ir.prototype.getClass = function() {
  return Ir;
};
var Ni = function() {
  this.trans = null;
  var t = arguments[0];
  this.trans = t;
};
Ni.prototype.filter = function(t, e) {
  var n = t.getOrdinate(e, 0) + this.trans.x, r = t.getOrdinate(e, 1) + this.trans.y;
  t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r);
};
Ni.prototype.isDone = function() {
  return !1;
};
Ni.prototype.isGeometryChanged = function() {
  return !0;
};
Ni.prototype.interfaces_ = function() {
  return [We];
};
Ni.prototype.getClass = function() {
  return Ni;
};
var At = function(t, e) {
  this._geom = new Array(2).fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance();
};
At.prototype.selfSnap = function(t) {
  var e = new xt(t), n = e.snapTo(t, this._snapTolerance);
  return n;
};
At.prototype.removeCommonBits = function(t) {
  this._cbr = new wi(), this._cbr.add(t[0]), this._cbr.add(t[1]);
  var e = new Array(2).fill(null);
  return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e;
};
At.prototype.prepareResult = function(t) {
  return this._cbr.addCommonBits(t), t;
};
At.prototype.getResultGeometry = function(t) {
  var e = this.snap(this._geom), n = H.overlayOp(e[0], e[1], t);
  return this.prepareResult(n);
};
At.prototype.checkValid = function(t) {
  t.isValid() || zt.out.println("Snapped geometry is invalid");
};
At.prototype.computeSnapTolerance = function() {
  this._snapTolerance = xt.computeOverlaySnapTolerance(this._geom[0], this._geom[1]);
};
At.prototype.snap = function(t) {
  var e = this.removeCommonBits(t), n = xt.snap(e[0], e[1], this._snapTolerance);
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
  return At.overlayOp(t, e, H.UNION);
};
At.intersection = function(t, e) {
  return At.overlayOp(t, e, H.INTERSECTION);
};
At.symDifference = function(t, e) {
  return At.overlayOp(t, e, H.SYMDIFFERENCE);
};
At.difference = function(t, e) {
  return At.overlayOp(t, e, H.DIFFERENCE);
};
var se = function(t, e) {
  this._geom = new Array(2).fill(null), this._geom[0] = t, this._geom[1] = e;
};
se.prototype.getResultGeometry = function(t) {
  var e = null, n = !1, r = null;
  try {
    e = H.overlayOp(this._geom[0], this._geom[1], t);
    var s = !0;
    s && (n = !0);
  } catch (o) {
    if (o instanceof ei)
      r = o;
    else
      throw o;
  } finally {
  }
  if (!n)
    try {
      e = At.overlayOp(this._geom[0], this._geom[1], t);
    } catch (o) {
      throw o instanceof ei ? r : o;
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
  return se.overlayOp(t, e, H.UNION);
};
se.intersection = function(t, e) {
  return se.overlayOp(t, e, H.INTERSECTION);
};
se.symDifference = function(t, e) {
  return se.overlayOp(t, e, H.SYMDIFFERENCE);
};
se.difference = function(t, e) {
  return se.overlayOp(t, e, H.DIFFERENCE);
};
var uo = function() {
  this.mce = null, this.chainIndex = null;
  var t = arguments[0], e = arguments[1];
  this.mce = t, this.chainIndex = e;
};
uo.prototype.computeIntersections = function(t, e) {
  this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e);
};
uo.prototype.interfaces_ = function() {
  return [];
};
uo.prototype.getClass = function() {
  return uo;
};
var _e = function i() {
  if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, arguments.length === 2) {
    var t = arguments[0], e = arguments[1];
    this._eventType = i.DELETE, this._xValue = t, this._insertEvent = e;
  } else if (arguments.length === 3) {
    var n = arguments[0], r = arguments[1], s = arguments[2];
    this._eventType = i.INSERT, this._label = n, this._xValue = r, this._obj = s;
  }
}, rl = { INSERT: { configurable: !0 }, DELETE: { configurable: !0 } };
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
  return [Fe];
};
_e.prototype.getClass = function() {
  return _e;
};
rl.INSERT.get = function() {
  return 1;
};
rl.DELETE.get = function() {
  return 2;
};
Object.defineProperties(_e, rl);
var sa = function() {
};
sa.prototype.interfaces_ = function() {
  return [];
};
sa.prototype.getClass = function() {
  return sa;
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
var r_ = function(i) {
  function t() {
    i.call(this), this.events = new N(), this.nOverlaps = null;
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.prepareEvents = function() {
    var n = this;
    He.sort(this.events);
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
      if (arguments[2] instanceof Yt && X(arguments[0], Ye) && X(arguments[1], Ye)) {
        var a = arguments[0], u = arguments[1], l = arguments[2];
        this.addEdges(a, a), this.addEdges(u, u), this.computeIntersections(l);
      } else if (typeof arguments[2] == "boolean" && X(arguments[0], Ye) && arguments[1] instanceof Yt) {
        var h = arguments[0], c = arguments[1], f = arguments[2];
        f ? this.addEdges(h, null) : this.addEdges(h), this.computeIntersections(c);
      }
    }
  }, t.prototype.addEdge = function(n, r) {
    for (var s = this, o = n.getMonotoneChainEdge(), a = o.getStartIndexes(), u = 0; u < a.length - 1; u++) {
      var l = new uo(o, u), h = new _e(r, o.getMinX(u), l);
      s.events.add(h), s.events.add(new _e(o.getMaxX(u), h));
    }
  }, t.prototype.processOverlaps = function(n, r, s, o) {
    for (var a = this, u = s.getObject(), l = n; l < r; l++) {
      var h = a.events.get(l);
      if (h.isInsert()) {
        var c = h.getObject();
        s.isSameLabel(h) || (u.computeIntersections(c, o), a.nOverlaps++);
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
        var h = l.next();
        n.addEdge(h, u);
      }
  }, t.prototype.interfaces_ = function() {
    return [];
  }, t.prototype.getClass = function() {
    return t;
  }, t;
}(sa), Vn = function() {
  this._min = q.POSITIVE_INFINITY, this._max = q.NEGATIVE_INFINITY;
}, af = { NodeComparator: { configurable: !0 } };
Vn.prototype.getMin = function() {
  return this._min;
};
Vn.prototype.intersects = function(t, e) {
  return !(this._min > e || this._max < t);
};
Vn.prototype.getMax = function() {
  return this._max;
};
Vn.prototype.toString = function() {
  return Ue.toLineString(new v(this._min, 0), new v(this._max, 0));
};
Vn.prototype.interfaces_ = function() {
  return [];
};
Vn.prototype.getClass = function() {
  return Vn;
};
af.NodeComparator.get = function() {
  return lo;
};
Object.defineProperties(Vn, af);
var lo = function() {
};
lo.prototype.compare = function(t, e) {
  var n = t, r = e, s = (n._min + n._max) / 2, o = (r._min + r._max) / 2;
  return s < o ? -1 : s > o ? 1 : 0;
};
lo.prototype.interfaces_ = function() {
  return [Kr];
};
lo.prototype.getClass = function() {
  return lo;
};
var s_ = function(i) {
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
}(Vn), o_ = function(i) {
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
}(Vn), Xn = function() {
  this._leaves = new N(), this._root = null, this._level = 0;
};
Xn.prototype.buildTree = function() {
  var t = this;
  He.sort(this._leaves, new Vn.NodeComparator());
  for (var e = this._leaves, n = null, r = new N(); ; ) {
    if (t.buildLevel(e, r), r.size() === 1)
      return r.get(0);
    n = e, e = r, r = n;
  }
};
Xn.prototype.insert = function(t, e, n) {
  if (this._root !== null)
    throw new Error("Index cannot be added to once it has been queried");
  this._leaves.add(new s_(t, e, n));
};
Xn.prototype.query = function(t, e, n) {
  this.init(), this._root.query(t, e, n);
};
Xn.prototype.buildRoot = function() {
  if (this._root !== null)
    return null;
  this._root = this.buildTree();
};
Xn.prototype.printNode = function(t) {
  zt.out.println(Ue.toLineString(new v(t._min, this._level), new v(t._max, this._level)));
};
Xn.prototype.init = function() {
  if (this._root !== null)
    return null;
  this.buildRoot();
};
Xn.prototype.buildLevel = function(t, e) {
  this._level++, e.clear();
  for (var n = 0; n < t.size(); n += 2) {
    var r = t.get(n), s = n + 1 < t.size() ? t.get(n) : null;
    if (s === null)
      e.add(r);
    else {
      var o = new o_(t.get(n), t.get(n + 1));
      e.add(o);
    }
  }
};
Xn.prototype.interfaces_ = function() {
  return [];
};
Xn.prototype.getClass = function() {
  return Xn;
};
var ls = function() {
  this._items = new N();
};
ls.prototype.visitItem = function(t) {
  this._items.add(t);
};
ls.prototype.getItems = function() {
  return this._items;
};
ls.prototype.interfaces_ = function() {
  return [xi];
};
ls.prototype.getClass = function() {
  return ls;
};
var hs = function() {
  this._index = null;
  var t = arguments[0];
  if (!X(t, vi))
    throw new gt("Argument must be Polygonal");
  this._index = new Ki(t);
}, sl = { SegmentVisitor: { configurable: !0 }, IntervalIndexedGeometry: { configurable: !0 } };
hs.prototype.locate = function(t) {
  var e = new ln(t), n = new cs(e);
  return this._index.query(t.y, t.y, n), e.getLocation();
};
hs.prototype.interfaces_ = function() {
  return [as];
};
hs.prototype.getClass = function() {
  return hs;
};
sl.SegmentVisitor.get = function() {
  return cs;
};
sl.IntervalIndexedGeometry.get = function() {
  return Ki;
};
Object.defineProperties(hs, sl);
var cs = function() {
  this._counter = null;
  var t = arguments[0];
  this._counter = t;
};
cs.prototype.visitItem = function(t) {
  var e = t;
  this._counter.countSegment(e.getCoordinate(0), e.getCoordinate(1));
};
cs.prototype.interfaces_ = function() {
  return [xi];
};
cs.prototype.getClass = function() {
  return cs;
};
var Ki = function() {
  this._index = new Xn();
  var t = arguments[0];
  this.init(t);
};
Ki.prototype.init = function(t) {
  for (var e = this, n = kt.getLines(t), r = n.iterator(); r.hasNext(); ) {
    var s = r.next(), o = s.getCoordinates();
    e.addLine(o);
  }
};
Ki.prototype.addLine = function(t) {
  for (var e = this, n = 1; n < t.length; n++) {
    var r = new F(t[n - 1], t[n]), s = Math.min(r.p0.y, r.p1.y), o = Math.max(r.p0.y, r.p1.y);
    e._index.insert(s, o, r);
  }
};
Ki.prototype.query = function() {
  if (arguments.length === 2) {
    var t = arguments[0], e = arguments[1], n = new ls();
    return this._index.query(t, e, n), n.getItems();
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    this._index.query(r, s, o);
  }
};
Ki.prototype.interfaces_ = function() {
  return [];
};
Ki.prototype.getClass = function() {
  return Ki;
};
var Ts = function(i) {
  function t() {
    if (i.call(this), this._parentGeom = null, this._lineEdgeMap = new Yc(), this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new Ze(), arguments.length === 2) {
      var e = arguments[0], n = arguments[1], r = Me.OGC_SFS_BOUNDARY_RULE;
      this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = r, n !== null && this.add(n);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2];
      this._argIndex = s, this._parentGeom = o, this._boundaryNodeRule = a, o !== null && this.add(o);
    }
  }
  return i && (t.__proto__ = i), t.prototype = Object.create(i && i.prototype), t.prototype.constructor = t, t.prototype.insertBoundaryPoint = function(n, r) {
    var s = this._nodes.addNode(r), o = s.getLabel(), a = 1, u = E.NONE;
    u = o.getLocation(n, R.ON), u === E.BOUNDARY && a++;
    var l = t.determineBoundary(this._boundaryNodeRule, a);
    o.setLocation(n, l);
  }, t.prototype.computeSelfNodes = function() {
    if (arguments.length === 2) {
      var n = arguments[0], r = arguments[1];
      return this.computeSelfNodes(n, r, !1);
    } else if (arguments.length === 3) {
      var s = arguments[0], o = arguments[1], a = arguments[2], u = new Yt(s, !0, !1);
      u.setIsDoneIfProperInt(a);
      var l = this.createEdgeSetIntersector(), h = this._parentGeom instanceof An || this._parentGeom instanceof bt || this._parentGeom instanceof bn, c = o || !h;
      return l.computeIntersections(this._edges, u, c), this.addSelfIntersectionNodes(this._argIndex), u;
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
      this.insertPoint(this._argIndex, r, E.INTERIOR);
    } else if (arguments[0] instanceof v) {
      var s = arguments[0];
      this.insertPoint(this._argIndex, s, E.INTERIOR);
    }
  }, t.prototype.addPolygon = function(n) {
    var r = this;
    this.addPolygonRing(n.getExteriorRing(), E.EXTERIOR, E.INTERIOR);
    for (var s = 0; s < n.getNumInteriorRing(); s++) {
      var o = n.getInteriorRingN(s);
      r.addPolygonRing(o, E.INTERIOR, E.EXTERIOR);
    }
  }, t.prototype.addEdge = function(n) {
    this.insertEdge(n);
    var r = n.getCoordinates();
    this.insertPoint(this._argIndex, r[0], E.BOUNDARY), this.insertPoint(this._argIndex, r[r.length - 1], E.BOUNDARY);
  }, t.prototype.addLineString = function(n) {
    var r = J.removeRepeatedPoints(n.getCoordinates());
    if (r.length < 2)
      return this._hasTooFewPoints = !0, this._invalidPoint = r[0], null;
    var s = new ra(r, new rt(this._argIndex, E.INTERIOR));
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
    s === E.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(n, r) : this.insertPoint(n, r, s);
  }, t.prototype.addPolygonRing = function(n, r, s) {
    if (n.isEmpty())
      return null;
    var o = J.removeRepeatedPoints(n.getCoordinates());
    if (o.length < 4)
      return this._hasTooFewPoints = !0, this._invalidPoint = o[0], null;
    var a = r, u = s;
    M.isCCW(o) && (a = s, u = r);
    var l = new ra(o, new rt(this._argIndex, E.BOUNDARY, a, u));
    this._lineEdgeMap.put(n, l), this.insertEdge(l), this.insertPoint(this._argIndex, o[0], E.BOUNDARY);
  }, t.prototype.insertPoint = function(n, r, s) {
    var o = this._nodes.addNode(r), a = o.getLabel();
    a === null ? o._label = new rt(n, s) : a.setLocation(n, s);
  }, t.prototype.createEdgeSetIntersector = function() {
    return new r_();
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
      if (n instanceof bn && (this._useBoundaryDeterminationRule = !1), n instanceof bt)
        this.addPolygon(n);
      else if (n instanceof mt)
        this.addLineString(n);
      else if (n instanceof ge)
        this.addPoint(n);
      else if (n instanceof is)
        this.addCollection(n);
      else if (n instanceof Yi)
        this.addCollection(n);
      else if (n instanceof bn)
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
    return X(this._parentGeom, vi) && this._parentGeom.getNumGeometries() > 50 ? (this._areaPtLocator === null && (this._areaPtLocator = new hs(this._parentGeom)), this._areaPtLocator.locate(n)) : this._ptLocator.locate(n, this._parentGeom);
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
    return n.isInBoundary(r) ? E.BOUNDARY : E.INTERIOR;
  }, t;
}(dt), fs = function() {
  if (this._li = new $i(), this._resultPrecisionModel = null, this._arg = null, arguments.length === 1) {
    var t = arguments[0];
    this.setComputationPrecision(t.getPrecisionModel()), this._arg = new Array(1).fill(null), this._arg[0] = new Ts(0, t);
  } else if (arguments.length === 2) {
    var e = arguments[0], n = arguments[1], r = Me.OGC_SFS_BOUNDARY_RULE;
    e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ts(0, e, r), this._arg[1] = new Ts(1, n, r);
  } else if (arguments.length === 3) {
    var s = arguments[0], o = arguments[1], a = arguments[2];
    s.getPrecisionModel().compareTo(o.getPrecisionModel()) >= 0 ? this.setComputationPrecision(s.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()), this._arg = new Array(2).fill(null), this._arg[0] = new Ts(0, s, a), this._arg[1] = new Ts(1, o, a);
  }
};
fs.prototype.getArgGeometry = function(t) {
  return this._arg[t].getGeometry();
};
fs.prototype.setComputationPrecision = function(t) {
  this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel);
};
fs.prototype.interfaces_ = function() {
  return [];
};
fs.prototype.getClass = function() {
  return fs;
};
var Vi = function() {
};
Vi.prototype.interfaces_ = function() {
  return [];
};
Vi.prototype.getClass = function() {
  return Vi;
};
Vi.map = function() {
  if (arguments[0] instanceof V && X(arguments[1], Vi.MapOp)) {
    for (var t = arguments[0], e = arguments[1], n = new N(), r = 0; r < t.getNumGeometries(); r++) {
      var s = e.map(t.getGeometryN(r));
      s !== null && n.add(s);
    }
    return t.getFactory().buildGeometry(n);
  } else if (X(arguments[0], Nt) && X(arguments[1], Vi.MapOp)) {
    for (var o = arguments[0], a = arguments[1], u = new N(), l = o.iterator(); l.hasNext(); ) {
      var h = l.next(), c = a.map(h);
      c !== null && u.add(c);
    }
    return u;
  }
};
Vi.MapOp = function() {
};
var H = function(i) {
  function t() {
    var e = arguments[0], n = arguments[1];
    i.call(this, e, n), this._ptLocator = new Ze(), this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new je(), this._resultPolyList = new N(), this._resultLineList = new N(), this._resultPointList = new N(), this._graph = new dt(new Jc()), this._geomFact = e.getFactory();
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
      if (u !== E.EXTERIOR)
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
    this._arg[0].computeSplitEdges(r), this._arg[1].computeSplitEdges(r), this.insertUniqueEdges(r), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), Zi.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(n), this.cancelDuplicateResultEdges();
    var s = new pe(this._geomFact);
    s.add(this._graph), this._resultPolyList = s.getPolygons();
    var o = new En(this, this._geomFact, this._ptLocator);
    this._resultLineList = o.build(n);
    var a = new Cr(this, this._geomFact, this._ptLocator);
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
}(fs);
H.overlayOp = function(i, t, e) {
  var n = new H(i, t), r = n.getResultGeometry(e);
  return r;
};
H.intersection = function(i, t) {
  if (i.isEmpty() || t.isEmpty())
    return H.createEmptyResult(H.INTERSECTION, i, t, i.getFactory());
  if (i.isGeometryCollection()) {
    var e = t;
    return Er.map(i, {
      interfaces_: function() {
        return [Vi.MapOp];
      },
      map: function(n) {
        return n.intersection(e);
      }
    });
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, H.INTERSECTION);
};
H.symDifference = function(i, t) {
  if (i.isEmpty() || t.isEmpty()) {
    if (i.isEmpty() && t.isEmpty())
      return H.createEmptyResult(H.SYMDIFFERENCE, i, t, i.getFactory());
    if (i.isEmpty())
      return t.copy();
    if (t.isEmpty())
      return i.copy();
  }
  return i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, H.SYMDIFFERENCE);
};
H.resultDimension = function(i, t, e) {
  var n = t.getDimension(), r = e.getDimension(), s = -1;
  switch (i) {
    case H.INTERSECTION:
      s = Math.min(n, r);
      break;
    case H.UNION:
      s = Math.max(n, r);
      break;
    case H.DIFFERENCE:
      s = n;
      break;
    case H.SYMDIFFERENCE:
      s = Math.max(n, r);
      break;
  }
  return s;
};
H.createEmptyResult = function(i, t, e, n) {
  var r = null;
  switch (H.resultDimension(i, t, e)) {
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
H.difference = function(i, t) {
  return i.isEmpty() ? H.createEmptyResult(H.DIFFERENCE, i, t, i.getFactory()) : t.isEmpty() ? i.copy() : (i.checkNotGeometryCollection(i), i.checkNotGeometryCollection(t), se.overlayOp(i, t, H.DIFFERENCE));
};
H.isResultOfOp = function() {
  if (arguments.length === 2) {
    var i = arguments[0], t = arguments[1], e = i.getLocation(0), n = i.getLocation(1);
    return H.isResultOfOp(e, n, t);
  } else if (arguments.length === 3) {
    var r = arguments[0], s = arguments[1], o = arguments[2];
    switch (r === E.BOUNDARY && (r = E.INTERIOR), s === E.BOUNDARY && (s = E.INTERIOR), o) {
      case H.INTERSECTION:
        return r === E.INTERIOR && s === E.INTERIOR;
      case H.UNION:
        return r === E.INTERIOR || s === E.INTERIOR;
      case H.DIFFERENCE:
        return r === E.INTERIOR && s !== E.INTERIOR;
      case H.SYMDIFFERENCE:
        return r === E.INTERIOR && s !== E.INTERIOR || r !== E.INTERIOR && s === E.INTERIOR;
    }
    return !1;
  }
};
H.INTERSECTION = 1;
H.UNION = 2;
H.DIFFERENCE = 3;
H.SYMDIFFERENCE = 4;
var yi = function() {
  this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new Ze(), this._seg = new F();
  var t = arguments[0], e = arguments[1];
  this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t);
};
yi.prototype.isWithinToleranceOfBoundary = function(t) {
  for (var e = this, n = 0; n < this._linework.getNumGeometries(); n++)
    for (var r = e._linework.getGeometryN(n), s = r.getCoordinateSequence(), o = 0; o < s.size() - 1; o++) {
      s.getCoordinate(o, e._seg.p0), s.getCoordinate(o + 1, e._seg.p1);
      var a = e._seg.distance(t);
      if (a <= e._boundaryDistanceTolerance)
        return !0;
    }
  return !1;
};
yi.prototype.getLocation = function(t) {
  return this.isWithinToleranceOfBoundary(t) ? E.BOUNDARY : this._ptLocator.locate(t, this._g);
};
yi.prototype.extractLinework = function(t) {
  var e = new gs();
  t.apply(e);
  var n = e.getLinework(), r = K.toLineStringArray(n);
  return t.getFactory().createMultiLineString(r);
};
yi.prototype.interfaces_ = function() {
  return [];
};
yi.prototype.getClass = function() {
  return yi;
};
var gs = function() {
  this._linework = null, this._linework = new N();
};
gs.prototype.getLinework = function() {
  return this._linework;
};
gs.prototype.filter = function(t) {
  var e = this;
  if (t instanceof bt) {
    var n = t;
    this._linework.add(n.getExteriorRing());
    for (var r = 0; r < n.getNumInteriorRing(); r++)
      e._linework.add(n.getInteriorRingN(r));
  }
};
gs.prototype.interfaces_ = function() {
  return [pn];
};
gs.prototype.getClass = function() {
  return gs;
};
var Ji = function() {
  this._g = null, this._doLeft = !0, this._doRight = !0;
  var t = arguments[0];
  this._g = t;
};
Ji.prototype.extractPoints = function(t, e, n) {
  for (var r = this, s = t.getCoordinates(), o = 0; o < s.length - 1; o++)
    r.computeOffsetPoints(s[o], s[o + 1], e, n);
};
Ji.prototype.setSidesToGenerate = function(t, e) {
  this._doLeft = t, this._doRight = e;
};
Ji.prototype.getPoints = function(t) {
  for (var e = this, n = new N(), r = kt.getLines(this._g), s = r.iterator(); s.hasNext(); ) {
    var o = s.next();
    e.extractPoints(o, t, n);
  }
  return n;
};
Ji.prototype.computeOffsetPoints = function(t, e, n, r) {
  var s = e.x - t.x, o = e.y - t.y, a = Math.sqrt(s * s + o * o), u = n * s / a, l = n * o / a, h = (e.x + t.x) / 2, c = (e.y + t.y) / 2;
  if (this._doLeft) {
    var f = new v(h - l, c + u);
    r.add(f);
  }
  if (this._doRight) {
    var g = new v(h + l, c - u);
    r.add(g);
  }
};
Ji.prototype.interfaces_ = function() {
  return [];
};
Ji.prototype.getClass = function() {
  return Ji;
};
var Re = function i() {
  this._geom = null, this._locFinder = null, this._location = new Array(3).fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = i.TOLERANCE, this._testCoords = new N();
  var t = arguments[0], e = arguments[1], n = arguments[2];
  this._boundaryDistanceTolerance = i.computeBoundaryDistanceTolerance(t, e), this._geom = [t, e, n], this._locFinder = [new yi(this._geom[0], this._boundaryDistanceTolerance), new yi(this._geom[1], this._boundaryDistanceTolerance), new yi(this._geom[2], this._boundaryDistanceTolerance)];
}, uf = { TOLERANCE: { configurable: !0 } };
Re.prototype.reportResult = function(t, e, n) {
  zt.out.println("Overlay result invalid - A:" + E.toLocationSymbol(e[0]) + " B:" + E.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + E.toLocationSymbol(e[2]));
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
    return this._location[0] = this._locFinder[0].getLocation(o), this._location[1] = this._locFinder[1].getLocation(o), this._location[2] = this._locFinder[2].getLocation(o), Re.hasLocation(this._location, E.BOUNDARY) ? !0 : this.isValidResult(s, this._location);
  }
};
Re.prototype.addTestPts = function(t) {
  var e = new Ji(t);
  this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance));
};
Re.prototype.isValidResult = function(t, e) {
  var n = H.isResultOfOp(e[0], e[1], t), r = e[2] === E.INTERIOR, s = !(n ^ r);
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
  return Math.min(xt.computeSizeBasedSnapTolerance(t), xt.computeSizeBasedSnapTolerance(e));
};
Re.isValid = function(t, e, n, r) {
  var s = new Re(t, e, r);
  return s.isValid(n);
};
uf.TOLERANCE.get = function() {
  return 1e-6;
};
Object.defineProperties(Re, uf);
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
}, lf = { STRTREE_NODE_CAPACITY: { configurable: !0 } };
Rt.prototype.reduceToGeometries = function(t) {
  for (var e = this, n = new N(), r = t.iterator(); r.hasNext(); ) {
    var s = r.next(), o = null;
    X(s, Ye) ? o = e.unionTree(s) : s instanceof V && (o = s), n.add(o);
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
  for (var t = new Hc(Rt.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext(); ) {
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
  if (X(t, vi))
    return t;
  var e = ti.getPolygons(t);
  return e.size() === 1 ? e.get(0) : t.getFactory().createMultiPolygon(K.toPolygonArray(e));
};
Rt.getGeometry = function(t, e) {
  return e >= t.size() ? null : t.get(e);
};
Rt.union = function(t) {
  var e = new Rt(t);
  return e.union();
};
lf.STRTREE_NODE_CAPACITY.get = function() {
  return 4;
};
Object.defineProperties(Rt, lf);
var oa = function() {
};
oa.prototype.interfaces_ = function() {
  return [];
};
oa.prototype.getClass = function() {
  return oa;
};
oa.union = function(t, e) {
  if (t.isEmpty() || e.isEmpty()) {
    if (t.isEmpty() && e.isEmpty())
      return H.createEmptyResult(H.UNION, t, e, t.getFactory());
    if (t.isEmpty())
      return e.copy();
    if (e.isEmpty())
      return t.copy();
  }
  return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), se.overlayOp(t, e, H.UNION);
};
function tr() {
  return new aa();
}
function aa() {
  this.reset();
}
aa.prototype = {
  constructor: aa,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(i) {
    dh(Go, i, this.t), dh(this, Go.s, this.s), this.s ? this.t += Go.t : this.s = Go.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Go = new aa();
function dh(i, t, e) {
  var n = i.s = t + e, r = n - t, s = n - r;
  i.t = t - s + (e - r);
}
var _t = 1e-6, ot = Math.PI, Jn = ot / 2, _h = ot / 4, oi = ot * 2, Di = 180 / ot, rn = ot / 180, te = Math.abs, a_ = Math.atan, ps = Math.atan2, Lt = Math.cos, Pt = Math.sin, Cs = Math.sqrt;
function hf(i) {
  return i > 1 ? 0 : i < -1 ? ot : Math.acos(i);
}
function Sr(i) {
  return i > 1 ? Jn : i < -1 ? -Jn : Math.asin(i);
}
function As() {
}
function ua(i, t) {
  i && yh.hasOwnProperty(i.type) && yh[i.type](i, t);
}
var mh = {
  Feature: function(i, t) {
    ua(i.geometry, t);
  },
  FeatureCollection: function(i, t) {
    for (var e = i.features, n = -1, r = e.length; ++n < r; )
      ua(e[n].geometry, t);
  }
}, yh = {
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
    yu(i.coordinates, t, 0);
  },
  MultiLineString: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      yu(e[n], t, 0);
  },
  Polygon: function(i, t) {
    vh(i.coordinates, t);
  },
  MultiPolygon: function(i, t) {
    for (var e = i.coordinates, n = -1, r = e.length; ++n < r; )
      vh(e[n], t);
  },
  GeometryCollection: function(i, t) {
    for (var e = i.geometries, n = -1, r = e.length; ++n < r; )
      ua(e[n], t);
  }
};
function yu(i, t, e) {
  var n = -1, r = i.length - e, s;
  for (t.lineStart(); ++n < r; )
    s = i[n], t.point(s[0], s[1], s[2]);
  t.lineEnd();
}
function vh(i, t) {
  var e = -1, n = i.length;
  for (t.polygonStart(); ++e < n; )
    yu(i[e], t, 1);
  t.polygonEnd();
}
function u_(i, t) {
  i && mh.hasOwnProperty(i.type) ? mh[i.type](i, t) : ua(i, t);
}
tr();
tr();
function vu(i) {
  return [ps(i[1], i[0]), Sr(i[2])];
}
function ds(i) {
  var t = i[0], e = i[1], n = Lt(e);
  return [n * Lt(t), n * Pt(t), Pt(e)];
}
function Bo(i, t) {
  return i[0] * t[0] + i[1] * t[1] + i[2] * t[2];
}
function la(i, t) {
  return [i[1] * t[2] - i[2] * t[1], i[2] * t[0] - i[0] * t[2], i[0] * t[1] - i[1] * t[0]];
}
function Ka(i, t) {
  i[0] += t[0], i[1] += t[1], i[2] += t[2];
}
function zo(i, t) {
  return [i[0] * t, i[1] * t, i[2] * t];
}
function xu(i) {
  var t = Cs(i[0] * i[0] + i[1] * i[1] + i[2] * i[2]);
  i[0] /= t, i[1] /= t, i[2] /= t;
}
tr();
function cf(i, t) {
  function e(n, r) {
    return n = i(n, r), t(n[0], n[1]);
  }
  return i.invert && t.invert && (e.invert = function(n, r) {
    return n = t.invert(n, r), n && i.invert(n[0], n[1]);
  }), e;
}
function Eu(i, t) {
  return [i > ot ? i - oi : i < -ot ? i + oi : i, t];
}
Eu.invert = Eu;
function l_(i, t, e) {
  return (i %= oi) ? t || e ? cf(Eh(i), Ch(t, e)) : Eh(i) : t || e ? Ch(t, e) : Eu;
}
function xh(i) {
  return function(t, e) {
    return t += i, [t > ot ? t - oi : t < -ot ? t + oi : t, e];
  };
}
function Eh(i) {
  var t = xh(i);
  return t.invert = xh(-i), t;
}
function Ch(i, t) {
  var e = Lt(i), n = Pt(i), r = Lt(t), s = Pt(t);
  function o(a, u) {
    var l = Lt(u), h = Lt(a) * l, c = Pt(a) * l, f = Pt(u), g = f * e + h * n;
    return [
      ps(c * r - g * s, h * e - f * n),
      Sr(g * r + c * s)
    ];
  }
  return o.invert = function(a, u) {
    var l = Lt(u), h = Lt(a) * l, c = Pt(a) * l, f = Pt(u), g = f * r - c * s;
    return [
      ps(c * r + f * s, h * e + g * n),
      Sr(g * e - h * n)
    ];
  }, o;
}
function h_(i, t, e, n, r, s) {
  if (e) {
    var o = Lt(t), a = Pt(t), u = n * e;
    r == null ? (r = t + n * oi, s = t - u / 2) : (r = Ih(o, r), s = Ih(o, s), (n > 0 ? r < s : r > s) && (r += n * oi));
    for (var l, h = r; n > 0 ? h > s : h < s; h -= u)
      l = vu([o, -a * Lt(h), -a * Pt(h)]), i.point(l[0], l[1]);
  }
}
function Ih(i, t) {
  t = ds(t), t[0] -= i, xu(t);
  var e = hf(-t[1]);
  return ((-t[2] < 0 ? -e : e) + oi - _t) % oi;
}
function ff() {
  var i = [], t;
  return {
    point: function(e, n) {
      t.push([e, n]);
    },
    lineStart: function() {
      i.push(t = []);
    },
    lineEnd: As,
    rejoin: function() {
      i.length > 1 && i.push(i.pop().concat(i.shift()));
    },
    result: function() {
      var e = i;
      return i = [], t = null, e;
    }
  };
}
function c_(i, t, e, n, r, s) {
  var o = i[0], a = i[1], u = t[0], l = t[1], h = 0, c = 1, f = u - o, g = l - a, p;
  if (p = e - o, !(!f && p > 0)) {
    if (p /= f, f < 0) {
      if (p < h)
        return;
      p < c && (c = p);
    } else if (f > 0) {
      if (p > c)
        return;
      p > h && (h = p);
    }
    if (p = r - o, !(!f && p < 0)) {
      if (p /= f, f < 0) {
        if (p > c)
          return;
        p > h && (h = p);
      } else if (f > 0) {
        if (p < h)
          return;
        p < c && (c = p);
      }
      if (p = n - a, !(!g && p > 0)) {
        if (p /= g, g < 0) {
          if (p < h)
            return;
          p < c && (c = p);
        } else if (g > 0) {
          if (p > c)
            return;
          p > h && (h = p);
        }
        if (p = s - a, !(!g && p < 0)) {
          if (p /= g, g < 0) {
            if (p > c)
              return;
            p > h && (h = p);
          } else if (g > 0) {
            if (p < h)
              return;
            p < c && (c = p);
          }
          return h > 0 && (i[0] = o + h * f, i[1] = a + h * g), c < 1 && (t[0] = o + c * f, t[1] = a + c * g), !0;
        }
      }
    }
  }
}
function Yo(i, t) {
  return te(i[0] - t[0]) < _t && te(i[1] - t[1]) < _t;
}
function Vo(i, t, e, n) {
  this.x = i, this.z = t, this.o = e, this.e = n, this.v = !1, this.n = this.p = null;
}
function gf(i, t, e, n, r) {
  var s = [], o = [], a, u;
  if (i.forEach(function(p) {
    if (!((d = p.length - 1) <= 0)) {
      var d, _ = p[0], m = p[d], y;
      if (Yo(_, m)) {
        for (r.lineStart(), a = 0; a < d; ++a)
          r.point((_ = p[a])[0], _[1]);
        r.lineEnd();
        return;
      }
      s.push(y = new Vo(_, p, null, !0)), o.push(y.o = new Vo(_, null, y, !1)), s.push(y = new Vo(m, p, null, !1)), o.push(y.o = new Vo(m, null, y, !0));
    }
  }), !!s.length) {
    for (o.sort(t), Sh(s), Sh(o), a = 0, u = o.length; a < u; ++a)
      o[a].e = e = !e;
    for (var l = s[0], h, c; ; ) {
      for (var f = l, g = !0; f.v; )
        if ((f = f.n) === l)
          return;
      h = f.z, r.lineStart();
      do {
        if (f.v = f.o.v = !0, f.e) {
          if (g)
            for (a = 0, u = h.length; a < u; ++a)
              r.point((c = h[a])[0], c[1]);
          else
            n(f.x, f.n.x, 1, r);
          f = f.n;
        } else {
          if (g)
            for (h = f.p.z, a = h.length - 1; a >= 0; --a)
              r.point((c = h[a])[0], c[1]);
          else
            n(f.x, f.p.x, -1, r);
          f = f.p;
        }
        f = f.o, h = f.z, g = !g;
      } while (!f.v);
      r.lineEnd();
    }
  }
}
function Sh(i) {
  if (t = i.length) {
    for (var t, e = 0, n = i[0], r; ++e < t; )
      n.n = r = i[e], r.p = n, n = r;
    n.n = r = i[0], r.p = n;
  }
}
function pf(i, t) {
  return i < t ? -1 : i > t ? 1 : i >= t ? 0 : NaN;
}
function f_(i) {
  return i.length === 1 && (i = g_(i)), {
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
function g_(i) {
  return function(t, e) {
    return pf(i(t), e);
  };
}
f_(pf);
function df(i) {
  for (var t = i.length, e, n = -1, r = 0, s, o; ++n < t; )
    r += i[n].length;
  for (s = new Array(r); --t >= 0; )
    for (o = i[t], e = o.length; --e >= 0; )
      s[--r] = o[e];
  return s;
}
var Fs = 1e9, Xo = -Fs;
function p_(i, t, e, n) {
  function r(l, h) {
    return i <= l && l <= e && t <= h && h <= n;
  }
  function s(l, h, c, f) {
    var g = 0, p = 0;
    if (l == null || (g = o(l, c)) !== (p = o(h, c)) || u(l, h) < 0 ^ c > 0)
      do
        f.point(g === 0 || g === 3 ? i : e, g > 1 ? n : t);
      while ((g = (g + c + 4) % 4) !== p);
    else
      f.point(h[0], h[1]);
  }
  function o(l, h) {
    return te(l[0] - i) < _t ? h > 0 ? 0 : 3 : te(l[0] - e) < _t ? h > 0 ? 2 : 1 : te(l[1] - t) < _t ? h > 0 ? 1 : 0 : h > 0 ? 3 : 2;
  }
  function a(l, h) {
    return u(l.x, h.x);
  }
  function u(l, h) {
    var c = o(l, 1), f = o(h, 1);
    return c !== f ? c - f : c === 0 ? h[1] - l[1] : c === 1 ? l[0] - h[0] : c === 2 ? l[1] - h[1] : h[0] - l[0];
  }
  return function(l) {
    var h = l, c = ff(), f, g, p, d, _, m, y, x, I, S, w, O = {
      point: L,
      lineStart: Y,
      lineEnd: U,
      polygonStart: G,
      polygonEnd: B
    };
    function L(b, k) {
      r(b, k) && h.point(b, k);
    }
    function P() {
      for (var b = 0, k = 0, z = g.length; k < z; ++k)
        for (var Z = g[k], at = 1, It = Z.length, Ft = Z[0], D, $e, me = Ft[0], Ge = Ft[1]; at < It; ++at)
          D = me, $e = Ge, Ft = Z[at], me = Ft[0], Ge = Ft[1], $e <= n ? Ge > n && (me - D) * (n - $e) > (Ge - $e) * (i - D) && ++b : Ge <= n && (me - D) * (n - $e) < (Ge - $e) * (i - D) && --b;
      return b;
    }
    function G() {
      h = c, f = [], g = [], w = !0;
    }
    function B() {
      var b = P(), k = w && b, z = (f = df(f)).length;
      (k || z) && (l.polygonStart(), k && (l.lineStart(), s(null, null, 1, l), l.lineEnd()), z && gf(f, a, b, s, l), l.polygonEnd()), h = l, f = g = p = null;
    }
    function Y() {
      O.point = T, g && g.push(p = []), S = !0, I = !1, y = x = NaN;
    }
    function U() {
      f && (T(d, _), m && I && c.rejoin(), f.push(c.result())), O.point = L, I && h.lineEnd();
    }
    function T(b, k) {
      var z = r(b, k);
      if (g && p.push([b, k]), S)
        d = b, _ = k, m = z, S = !1, z && (h.lineStart(), h.point(b, k));
      else if (z && I)
        h.point(b, k);
      else {
        var Z = [y = Math.max(Xo, Math.min(Fs, y)), x = Math.max(Xo, Math.min(Fs, x))], at = [b = Math.max(Xo, Math.min(Fs, b)), k = Math.max(Xo, Math.min(Fs, k))];
        c_(Z, at, i, t, e, n) ? (I || (h.lineStart(), h.point(Z[0], Z[1])), h.point(at[0], at[1]), z || h.lineEnd(), w = !1) : z && (h.lineStart(), h.point(b, k), w = !1);
      }
      y = b, x = k, I = z;
    }
    return O;
  };
}
var Ja = tr();
function d_(i, t) {
  var e = t[0], n = t[1], r = [Pt(e), -Lt(e), 0], s = 0, o = 0;
  Ja.reset();
  for (var a = 0, u = i.length; a < u; ++a)
    if (h = (l = i[a]).length)
      for (var l, h, c = l[h - 1], f = c[0], g = c[1] / 2 + _h, p = Pt(g), d = Lt(g), _ = 0; _ < h; ++_, f = y, p = I, d = S, c = m) {
        var m = l[_], y = m[0], x = m[1] / 2 + _h, I = Pt(x), S = Lt(x), w = y - f, O = w >= 0 ? 1 : -1, L = O * w, P = L > ot, G = p * I;
        if (Ja.add(ps(G * O * Pt(L), d * S + G * Lt(L))), s += P ? w + O * oi : w, P ^ f >= e ^ y >= e) {
          var B = la(ds(c), ds(m));
          xu(B);
          var Y = la(r, B);
          xu(Y);
          var U = (P ^ w >= 0 ? -1 : 1) * Sr(Y[2]);
          (n > U || n === U && (B[0] || B[1])) && (o += P ^ w >= 0 ? 1 : -1);
        }
      }
  return (s < -_t || s < _t && Ja < -_t) ^ o & 1;
}
tr();
function Rh(i) {
  return i;
}
tr();
tr();
var _s = 1 / 0, ha = _s, ho = -_s, ca = ho, wh = {
  point: __,
  lineStart: As,
  lineEnd: As,
  polygonStart: As,
  polygonEnd: As,
  result: function() {
    var i = [[_s, ha], [ho, ca]];
    return ho = ca = -(ha = _s = 1 / 0), i;
  }
};
function __(i, t) {
  i < _s && (_s = i), i > ho && (ho = i), t < ha && (ha = t), t > ca && (ca = t);
}
tr();
function _f(i, t, e, n) {
  return function(r, s) {
    var o = t(s), a = r.invert(n[0], n[1]), u = ff(), l = t(u), h = !1, c, f, g, p = {
      point: d,
      lineStart: m,
      lineEnd: y,
      polygonStart: function() {
        p.point = x, p.lineStart = I, p.lineEnd = S, f = [], c = [];
      },
      polygonEnd: function() {
        p.point = d, p.lineStart = m, p.lineEnd = y, f = df(f);
        var w = d_(c, a);
        f.length ? (h || (s.polygonStart(), h = !0), gf(f, y_, w, e, s)) : w && (h || (s.polygonStart(), h = !0), s.lineStart(), e(null, null, 1, s), s.lineEnd()), h && (s.polygonEnd(), h = !1), f = c = null;
      },
      sphere: function() {
        s.polygonStart(), s.lineStart(), e(null, null, 1, s), s.lineEnd(), s.polygonEnd();
      }
    };
    function d(w, O) {
      var L = r(w, O);
      i(w = L[0], O = L[1]) && s.point(w, O);
    }
    function _(w, O) {
      var L = r(w, O);
      o.point(L[0], L[1]);
    }
    function m() {
      p.point = _, o.lineStart();
    }
    function y() {
      p.point = d, o.lineEnd();
    }
    function x(w, O) {
      g.push([w, O]);
      var L = r(w, O);
      l.point(L[0], L[1]);
    }
    function I() {
      l.lineStart(), g = [];
    }
    function S() {
      x(g[0][0], g[0][1]), l.lineEnd();
      var w = l.clean(), O = u.result(), L, P = O.length, G, B, Y;
      if (g.pop(), c.push(g), g = null, !!P) {
        if (w & 1) {
          if (B = O[0], (G = B.length - 1) > 0) {
            for (h || (s.polygonStart(), h = !0), s.lineStart(), L = 0; L < G; ++L)
              s.point((Y = B[L])[0], Y[1]);
            s.lineEnd();
          }
          return;
        }
        P > 1 && w & 2 && O.push(O.pop().concat(O.shift())), f.push(O.filter(m_));
      }
    }
    return p;
  };
}
function m_(i) {
  return i.length > 1;
}
function y_(i, t) {
  return ((i = i.x)[0] < 0 ? i[1] - Jn - _t : Jn - i[1]) - ((t = t.x)[0] < 0 ? t[1] - Jn - _t : Jn - t[1]);
}
const Nh = _f(
  function() {
    return !0;
  },
  v_,
  E_,
  [-ot, -Jn]
);
function v_(i) {
  var t = NaN, e = NaN, n = NaN, r;
  return {
    lineStart: function() {
      i.lineStart(), r = 1;
    },
    point: function(s, o) {
      var a = s > 0 ? ot : -ot, u = te(s - t);
      te(u - ot) < _t ? (i.point(t, e = (e + o) / 2 > 0 ? Jn : -Jn), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), i.point(s, e), r = 0) : n !== a && u >= ot && (te(t - n) < _t && (t -= n * _t), te(s - a) < _t && (s -= a * _t), e = x_(t, e, s, o), i.point(n, e), i.lineEnd(), i.lineStart(), i.point(a, e), r = 0), i.point(t = s, e = o), n = a;
    },
    lineEnd: function() {
      i.lineEnd(), t = e = NaN;
    },
    clean: function() {
      return 2 - r;
    }
  };
}
function x_(i, t, e, n) {
  var r, s, o = Pt(i - e);
  return te(o) > _t ? a_((Pt(t) * (s = Lt(n)) * Pt(e) - Pt(n) * (r = Lt(t)) * Pt(i)) / (r * s * o)) : (t + n) / 2;
}
function E_(i, t, e, n) {
  var r;
  if (i == null)
    r = e * Jn, n.point(-ot, r), n.point(0, r), n.point(ot, r), n.point(ot, 0), n.point(ot, -r), n.point(0, -r), n.point(-ot, -r), n.point(-ot, 0), n.point(-ot, r);
  else if (te(i[0] - t[0]) > _t) {
    var s = i[0] < t[0] ? ot : -ot;
    r = e * s / 2, n.point(-s, r), n.point(0, r), n.point(s, r);
  } else
    n.point(t[0], t[1]);
}
function C_(i, t) {
  var e = Lt(i), n = e > 0, r = te(e) > _t;
  function s(h, c, f, g) {
    h_(g, i, t, f, h, c);
  }
  function o(h, c) {
    return Lt(h) * Lt(c) > e;
  }
  function a(h) {
    var c, f, g, p, d;
    return {
      lineStart: function() {
        p = g = !1, d = 1;
      },
      point: function(_, m) {
        var y = [_, m], x, I = o(_, m), S = n ? I ? 0 : l(_, m) : I ? l(_ + (_ < 0 ? ot : -ot), m) : 0;
        if (!c && (p = g = I) && h.lineStart(), I !== g && (x = u(c, y), (!x || Yo(c, x) || Yo(y, x)) && (y[0] += _t, y[1] += _t, I = o(y[0], y[1]))), I !== g)
          d = 0, I ? (h.lineStart(), x = u(y, c), h.point(x[0], x[1])) : (x = u(c, y), h.point(x[0], x[1]), h.lineEnd()), c = x;
        else if (r && c && n ^ I) {
          var w;
          !(S & f) && (w = u(y, c, !0)) && (d = 0, n ? (h.lineStart(), h.point(w[0][0], w[0][1]), h.point(w[1][0], w[1][1]), h.lineEnd()) : (h.point(w[1][0], w[1][1]), h.lineEnd(), h.lineStart(), h.point(w[0][0], w[0][1])));
        }
        I && (!c || !Yo(c, y)) && h.point(y[0], y[1]), c = y, g = I, f = S;
      },
      lineEnd: function() {
        g && h.lineEnd(), c = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return d | (p && g) << 1;
      }
    };
  }
  function u(h, c, f) {
    var g = ds(h), p = ds(c), d = [1, 0, 0], _ = la(g, p), m = Bo(_, _), y = _[0], x = m - y * y;
    if (!x)
      return !f && h;
    var I = e * m / x, S = -e * y / x, w = la(d, _), O = zo(d, I), L = zo(_, S);
    Ka(O, L);
    var P = w, G = Bo(O, P), B = Bo(P, P), Y = G * G - B * (Bo(O, O) - 1);
    if (!(Y < 0)) {
      var U = Cs(Y), T = zo(P, (-G - U) / B);
      if (Ka(T, O), T = vu(T), !f)
        return T;
      var b = h[0], k = c[0], z = h[1], Z = c[1], at;
      k < b && (at = b, b = k, k = at);
      var It = k - b, Ft = te(It - ot) < _t, D = Ft || It < _t;
      if (!Ft && Z < z && (at = z, z = Z, Z = at), D ? Ft ? z + Z > 0 ^ T[1] < (te(T[0] - b) < _t ? z : Z) : z <= T[1] && T[1] <= Z : It > ot ^ (b <= T[0] && T[0] <= k)) {
        var $e = zo(P, (-G + U) / B);
        return Ka($e, O), [T, vu($e)];
      }
    }
  }
  function l(h, c) {
    var f = n ? i : ot - i, g = 0;
    return h < -f ? g |= 1 : h > f && (g |= 2), c < -f ? g |= 4 : c > f && (g |= 8), g;
  }
  return _f(o, a, s, n ? [0, -i] : [-ot, i - ot]);
}
function mf(i) {
  return function(t) {
    var e = new Cu();
    for (var n in i)
      e[n] = i[n];
    return e.stream = t, e;
  };
}
function Cu() {
}
Cu.prototype = {
  constructor: Cu,
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
function yf(i, t, e) {
  var n = t[1][0] - t[0][0], r = t[1][1] - t[0][1], s = i.clipExtent && i.clipExtent();
  i.scale(150).translate([0, 0]), s != null && i.clipExtent(null), u_(e, i.stream(wh));
  var o = wh.result(), a = Math.min(n / (o[1][0] - o[0][0]), r / (o[1][1] - o[0][1])), u = +t[0][0] + (n - a * (o[1][0] + o[0][0])) / 2, l = +t[0][1] + (r - a * (o[1][1] + o[0][1])) / 2;
  return s != null && i.clipExtent(s), i.scale(a * 150).translate([u, l]);
}
function I_(i, t, e) {
  return yf(i, [[0, 0], t], e);
}
var Lh = 16, S_ = Lt(30 * rn);
function Ph(i, t) {
  return +t ? w_(i, t) : R_(i);
}
function R_(i) {
  return mf({
    point: function(t, e) {
      t = i(t, e), this.stream.point(t[0], t[1]);
    }
  });
}
function w_(i, t) {
  function e(n, r, s, o, a, u, l, h, c, f, g, p, d, _) {
    var m = l - n, y = h - r, x = m * m + y * y;
    if (x > 4 * t && d--) {
      var I = o + f, S = a + g, w = u + p, O = Cs(I * I + S * S + w * w), L = Sr(w /= O), P = te(te(w) - 1) < _t || te(s - c) < _t ? (s + c) / 2 : ps(S, I), G = i(P, L), B = G[0], Y = G[1], U = B - n, T = Y - r, b = y * U - m * T;
      (b * b / x > t || te((m * U + y * T) / x - 0.5) > 0.3 || o * f + a * g + u * p < S_) && (e(n, r, s, o, a, u, B, Y, P, I /= O, S /= O, w, d, _), _.point(B, Y), e(B, Y, P, I, S, w, l, h, c, f, g, p, d, _));
    }
  }
  return function(n) {
    var r, s, o, a, u, l, h, c, f, g, p, d, _ = {
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
      c = NaN, _.point = x, n.lineStart();
    }
    function x(L, P) {
      var G = ds([L, P]), B = i(L, P);
      e(c, f, h, g, p, d, c = B[0], f = B[1], h = L, g = G[0], p = G[1], d = G[2], Lh, n), n.point(c, f);
    }
    function I() {
      _.point = m, n.lineEnd();
    }
    function S() {
      y(), _.point = w, _.lineEnd = O;
    }
    function w(L, P) {
      x(r = L, P), s = c, o = f, a = g, u = p, l = d, _.point = x;
    }
    function O() {
      e(c, f, h, g, p, d, s, o, r, a, u, l, Lh, n), _.lineEnd = I, I();
    }
    return _;
  };
}
var N_ = mf({
  point: function(i, t) {
    this.stream.point(i * rn, t * rn);
  }
});
function L_(i) {
  return P_(function() {
    return i;
  })();
}
function P_(i) {
  var t, e = 150, n = 480, r = 250, s, o, a = 0, u = 0, l = 0, h = 0, c = 0, f, g, p = null, d = Nh, _ = null, m, y, x, I = Rh, S = 0.5, w = Ph(B, S), O, L;
  function P(T) {
    return T = g(T[0] * rn, T[1] * rn), [T[0] * e + s, o - T[1] * e];
  }
  function G(T) {
    return T = g.invert((T[0] - s) / e, (o - T[1]) / e), T && [T[0] * Di, T[1] * Di];
  }
  function B(T, b) {
    return T = t(T, b), [T[0] * e + s, o - T[1] * e];
  }
  P.stream = function(T) {
    return O && L === T ? O : O = N_(d(f, w(I(L = T))));
  }, P.clipAngle = function(T) {
    return arguments.length ? (d = +T ? C_(p = T * rn, 6 * rn) : (p = null, Nh), U()) : p * Di;
  }, P.clipExtent = function(T) {
    return arguments.length ? (I = T == null ? (_ = m = y = x = null, Rh) : p_(_ = +T[0][0], m = +T[0][1], y = +T[1][0], x = +T[1][1]), U()) : _ == null ? null : [[_, m], [y, x]];
  }, P.scale = function(T) {
    return arguments.length ? (e = +T, Y()) : e;
  }, P.translate = function(T) {
    return arguments.length ? (n = +T[0], r = +T[1], Y()) : [n, r];
  }, P.center = function(T) {
    return arguments.length ? (a = T[0] % 360 * rn, u = T[1] % 360 * rn, Y()) : [a * Di, u * Di];
  }, P.rotate = function(T) {
    return arguments.length ? (l = T[0] % 360 * rn, h = T[1] % 360 * rn, c = T.length > 2 ? T[2] % 360 * rn : 0, Y()) : [l * Di, h * Di, c * Di];
  }, P.precision = function(T) {
    return arguments.length ? (w = Ph(B, S = T * T), U()) : Cs(S);
  }, P.fitExtent = function(T, b) {
    return yf(P, T, b);
  }, P.fitSize = function(T, b) {
    return I_(P, T, b);
  };
  function Y() {
    g = cf(f = l_(l, h, c), t);
    var T = t(a, u);
    return s = n - T[0] * e, o = r + T[1] * e, U();
  }
  function U() {
    return O = L = null, P;
  }
  return function() {
    return t = i.apply(this, arguments), P.invert = t.invert && G, Y();
  };
}
function vf(i) {
  return function(t, e) {
    var n = Lt(t), r = Lt(e), s = i(n * r);
    return [
      s * r * Pt(t),
      s * Pt(e)
    ];
  };
}
function xf(i) {
  return function(t, e) {
    var n = Cs(t * t + e * e), r = i(n), s = Pt(r), o = Lt(r);
    return [
      ps(t * s, n * o),
      Sr(n && e * s / n)
    ];
  };
}
var T_ = vf(function(i) {
  return Cs(2 / (1 + i));
});
T_.invert = xf(function(i) {
  return 2 * Sr(i / 2);
});
var Ef = vf(function(i) {
  return (i = hf(i)) && i / Pt(i);
});
Ef.invert = xf(function(i) {
  return i;
});
function b_() {
  return L_(Ef).scale(79.4188).clipAngle(180 - 1e-3);
}
function Th(i, t) {
  return [i, t];
}
Th.invert = Th;
function O_(i, t, e) {
  e = e || {};
  var n = e.units || "kilometers", r = e.steps || 8;
  if (!i)
    throw new Error("geojson is required");
  if (typeof e != "object")
    throw new Error("options must be an object");
  if (typeof r != "number")
    throw new Error("steps must be an number");
  if (r <= 0)
    throw new Error("steps must be greater than 0");
  var s = [];
  switch (i.type) {
    case "GeometryCollection":
      return Ac(i, function(o) {
        var a = Uo(o, t, n, r);
        a && s.push(a);
      }), du(s);
    case "FeatureCollection":
      return hh(i, function(o) {
        var a = Uo(o, t, n, r);
        a && hh(a, function(u) {
          u && s.push(u);
        });
      }), du(s);
  }
  return Uo(i, t, n, r);
}
function Uo(i, t, e, n) {
  var r = i.properties || {}, s = i.type === "Feature" ? i.geometry : i;
  if (s.type === "GeometryCollection") {
    var o = [];
    return Ac(i, function(d) {
      var _ = Uo(d, t, e, n);
      _ && o.push(_);
    }), du(o);
  }
  var a = M_(s), u = {
    type: s.type,
    coordinates: If(s.coordinates, a)
  }, l = new Ju(), h = l.read(u), c = Vd(Xd(t, e), "meters"), f = Gt.bufferOp(h, c, n), g = new Wc();
  if (f = g.write(f), !Cf(f.coordinates)) {
    var p = {
      type: f.type,
      coordinates: Sf(f.coordinates, a)
    };
    return Ea(p, r);
  }
}
function Cf(i) {
  return Array.isArray(i[0]) ? Cf(i[0]) : isNaN(i[0]);
}
function If(i, t) {
  return typeof i[0] != "object" ? t(i) : i.map(function(e) {
    return If(e, t);
  });
}
function Sf(i, t) {
  return typeof i[0] != "object" ? t.invert(i) : i.map(function(e) {
    return Sf(e, t);
  });
}
function M_(i) {
  var t = Yd(i).geometry.coordinates, e = [-t[0], -t[1]];
  return b_().rotate(e).scale(ye);
}
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
function D_(i, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, r, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return u([l, h]);
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
      } catch (h) {
        l = [6, h], r = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Qi = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(t, e) {
      this.next = null, this.key = t, this.data = e, this.left = null, this.right = null;
    }
    return i;
  }()
);
function A_(i, t) {
  return i > t ? 1 : i < t ? -1 : 0;
}
function Ai(i, t, e) {
  for (var n = new Qi(null, null), r = n, s = n; ; ) {
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
function Qa(i, t, e, n) {
  var r = new Qi(i, t);
  if (e === null)
    return r.left = r.right = null, r;
  e = Ai(i, e, n);
  var s = n(i, e.key);
  return s < 0 ? (r.left = e.left, r.right = e, e.left = null) : s >= 0 && (r.right = e.right, r.left = e, e.right = null), r;
}
function bh(i, t, e) {
  var n = null, r = null;
  if (t) {
    t = Ai(i, t, e);
    var s = e(t.key, i);
    s === 0 ? (n = t.left, r = t.right) : s < 0 ? (r = t.right, t.right = null, n = t) : (n = t.left, t.left = null, r = t);
  }
  return { left: n, right: r };
}
function F_(i, t, e) {
  return t === null ? i : (i === null || (t = Ai(i.key, t, e), t.left = i), t);
}
function Iu(i, t, e, n, r) {
  if (i) {
    n("" + t + (e ? "└── " : "├── ") + r(i) + `
`);
    var s = t + (e ? "    " : "│   ");
    i.left && Iu(i.left, s, !1, n, r), i.right && Iu(i.right, s, !0, n, r);
  }
}
var ol = (
  /** @class */
  function() {
    function i(t) {
      t === void 0 && (t = A_), this._root = null, this._size = 0, this._comparator = t;
    }
    return i.prototype.insert = function(t, e) {
      return this._size++, this._root = Qa(t, e, this._root, this._comparator);
    }, i.prototype.add = function(t, e) {
      var n = new Qi(t, e);
      this._root === null && (n.left = n.right = null, this._size++, this._root = n);
      var r = this._comparator, s = Ai(t, this._root, r), o = r(t, s.key);
      return o === 0 ? this._root = s : (o < 0 ? (n.left = s.left, n.right = s, s.left = null) : o > 0 && (n.right = s.right, n.left = s, s.right = null), this._size++, this._root = n), this._root;
    }, i.prototype.remove = function(t) {
      this._root = this._remove(t, this._root, this._comparator);
    }, i.prototype._remove = function(t, e, n) {
      var r;
      if (e === null)
        return null;
      e = Ai(t, e, n);
      var s = n(t, e.key);
      return s === 0 ? (e.left === null ? r = e.right : (r = Ai(t, e.left, n), r.right = e.right), this._size--, r) : e;
    }, i.prototype.pop = function() {
      var t = this._root;
      if (t) {
        for (; t.left; )
          t = t.left;
        return this._root = Ai(t.key, this._root, this._comparator), this._root = this._remove(t.key, this._root, this._comparator), { key: t.key, data: t.data };
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
      return this._root && (this._root = Ai(t, this._root, this._comparator), this._comparator(t, this._root.key) !== 0) ? null : this._root;
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
      return G_(this._root);
    }, i.prototype.load = function(t, e, n) {
      e === void 0 && (e = []), n === void 0 && (n = !1);
      var r = t.length, s = this._comparator;
      if (n && wu(t, e, 0, r - 1, s), this._root === null)
        this._root = Su(t, e, 0, r), this._size = r;
      else {
        var o = B_(this.toList(), k_(t, e), s);
        r = this._size + r, this._root = Ru({ head: o }, 0, r);
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
      return Iu(this._root, "", !0, function(n) {
        return e.push(n);
      }, t), e.join("");
    }, i.prototype.update = function(t, e, n) {
      var r = this._comparator, s = bh(t, this._root, r), o = s.left, a = s.right;
      r(t, e) < 0 ? a = Qa(e, n, a, r) : o = Qa(e, n, o, r), this._root = F_(o, a, r);
    }, i.prototype.split = function(t) {
      return bh(t, this._root, this._comparator);
    }, i.prototype[Symbol.iterator] = function() {
      var t, e, n;
      return D_(this, function(r) {
        switch (r.label) {
          case 0:
            t = this._root, e = [], n = !1, r.label = 1;
          case 1:
            return n ? [3, 6] : t === null ? [3, 2] : (e.push(t), t = t.left, [3, 5]);
          case 2:
            return e.length === 0 ? [3, 4] : (t = e.pop(), [4, t]);
          case 3:
            return r.sent(), t = t.right, [3, 5];
          case 4:
            n = !0, r.label = 5;
          case 5:
            return [3, 1];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    }, i;
  }()
);
function Su(i, t, e, n) {
  var r = n - e;
  if (r > 0) {
    var s = e + Math.floor(r / 2), o = i[s], a = t[s], u = new Qi(o, a);
    return u.left = Su(i, t, e, s), u.right = Su(i, t, s + 1, n), u;
  }
  return null;
}
function k_(i, t) {
  for (var e = new Qi(null, null), n = e, r = 0; r < i.length; r++)
    n = n.next = new Qi(i[r], t[r]);
  return n.next = null, e.next;
}
function G_(i) {
  for (var t = i, e = [], n = !1, r = new Qi(null, null), s = r; !n; )
    t ? (e.push(t), t = t.left) : e.length > 0 ? (t = s = s.next = e.pop(), t = t.right) : n = !0;
  return s.next = null, r.next;
}
function Ru(i, t, e) {
  var n = e - t;
  if (n > 0) {
    var r = t + Math.floor(n / 2), s = Ru(i, t, r), o = i.head;
    return o.left = s, i.head = i.head.next, o.right = Ru(i, r + 1, e), o;
  }
  return null;
}
function B_(i, t, e) {
  for (var n = new Qi(null, null), r = n, s = i, o = t; s !== null && o !== null; )
    e(s.key, o.key) < 0 ? (r.next = s, s = s.next) : (r.next = o, o = o.next), r = r.next;
  return s !== null ? r.next = s : o !== null && (r.next = o), n.next;
}
function wu(i, t, e, n, r) {
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
    wu(i, t, e, a, r), wu(i, t, a + 1, n, r);
  }
}
function Sn(i, t) {
  if (!(i instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Oh(i, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
  }
}
function we(i, t, e) {
  return t && Oh(i.prototype, t), e && Oh(i, e), i;
}
var bs = function(t, e) {
  return t.ll.x <= e.x && e.x <= t.ur.x && t.ll.y <= e.y && e.y <= t.ur.y;
}, Nu = function(t, e) {
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
}, Gi = Number.EPSILON;
Gi === void 0 && (Gi = Math.pow(2, -52));
var z_ = Gi * Gi, Lu = function(t, e) {
  if (-Gi < t && t < Gi && -Gi < e && e < Gi)
    return 0;
  var n = t - e;
  return n * n < z_ * t * e ? 0 : t < e ? -1 : 1;
}, V_ = /* @__PURE__ */ function() {
  function i() {
    Sn(this, i), this.reset();
  }
  return we(i, [{
    key: "reset",
    value: function() {
      this.xRounder = new Mh(), this.yRounder = new Mh();
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
}(), Mh = /* @__PURE__ */ function() {
  function i() {
    Sn(this, i), this.tree = new ol(), this.round(0);
  }
  return we(i, [{
    key: "round",
    value: function(e) {
      var n = this.tree.add(e), r = this.tree.prev(n);
      if (r !== null && Lu(n.key, r.key) === 0)
        return this.tree.remove(e), r.key;
      var s = this.tree.next(n);
      return s !== null && Lu(n.key, s.key) === 0 ? (this.tree.remove(e), s.key) : e;
    }
  }]), i;
}(), co = new V_(), ks = function(t, e) {
  return t.x * e.y - t.y * e.x;
}, Rf = function(t, e) {
  return t.x * e.x + t.y * e.y;
}, Dh = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  }, o = ks(r, s);
  return Lu(o, 0);
}, fa = function(t) {
  return Math.sqrt(Rf(t, t));
}, X_ = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return ks(s, r) / fa(s) / fa(r);
}, Y_ = function(t, e, n) {
  var r = {
    x: e.x - t.x,
    y: e.y - t.y
  }, s = {
    x: n.x - t.x,
    y: n.y - t.y
  };
  return Rf(s, r) / fa(s) / fa(r);
}, Ah = function(t, e, n) {
  return e.y === 0 ? null : {
    x: t.x + e.x / e.y * (n - t.y),
    y: n
  };
}, Fh = function(t, e, n) {
  return e.x === 0 ? null : {
    x: n,
    y: t.y + e.y / e.x * (n - t.x)
  };
}, U_ = function(t, e, n, r) {
  if (e.x === 0)
    return Fh(n, r, t.x);
  if (r.x === 0)
    return Fh(t, e, n.x);
  if (e.y === 0)
    return Ah(n, r, t.y);
  if (r.y === 0)
    return Ah(t, e, n.y);
  var s = ks(e, r);
  if (s == 0)
    return null;
  var o = {
    x: n.x - t.x,
    y: n.y - t.y
  }, a = ks(o, e) / s, u = ks(o, r) / s, l = t.x + u * e.x, h = n.x + a * r.x, c = t.y + u * e.y, f = n.y + a * r.y, g = (l + h) / 2, p = (c + f) / 2;
  return {
    x: g,
    y: p
  };
}, jn = /* @__PURE__ */ function() {
  we(i, null, [{
    key: "compare",
    // for ordering sweep events in the sweep event queue
    value: function(e, n) {
      var r = i.comparePoints(e.point, n.point);
      return r !== 0 ? r : (e.point !== n.point && e.link(n), e.isLeft !== n.isLeft ? e.isLeft ? 1 : -1 : ga.compare(e.segment, n.segment));
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
    Sn(this, i), t.events === void 0 ? t.events = [this] : t.events.push(this), this.point = t, this.isLeft = e;
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
          sine: X_(n.point, e.point, u.point),
          cosine: Y_(n.point, e.point, u.point)
        });
      };
      return function(o, a) {
        r.has(o) || s(o), r.has(a) || s(a);
        var u = r.get(o), l = u.sine, h = u.cosine, c = r.get(a), f = c.sine, g = c.cosine;
        return l >= 0 && f >= 0 ? h < g ? 1 : h > g ? -1 : 0 : l < 0 && f < 0 ? h < g ? -1 : h > g ? 1 : 0 : f < l ? -1 : f > l ? 1 : 0;
      };
    }
  }]), i;
}(), W_ = 0, ga = /* @__PURE__ */ function() {
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
      var u = e.leftSE.point.y, l = n.leftSE.point.y, h = e.rightSE.point.y, c = n.rightSE.point.y;
      if (r < s) {
        if (l < u && l < h)
          return 1;
        if (l > u && l > h)
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
        if (u < l && u < c)
          return -1;
        if (u > l && u > c)
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
        var y = h - u, x = o - r, I = c - l, S = a - s;
        if (y > x && I < S)
          return 1;
        if (y < x && I > S)
          return -1;
      }
      return o > a ? 1 : o < a || h < c ? -1 : h > c ? 1 : e.id < n.id ? -1 : e.id > n.id ? 1 : 0;
    }
    /* Warning: a reference to ringWindings input will be stored,
     *  and possibly will be later modified */
  }]);
  function i(t, e, n, r) {
    Sn(this, i), this.id = ++W_, this.leftSE = t, t.segment = this, t.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = t, this.rings = n, this.windings = r;
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
      var n = this.bbox(), r = e.bbox(), s = Nu(n, r);
      if (s === null)
        return null;
      var o = this.leftSE.point, a = this.rightSE.point, u = e.leftSE.point, l = e.rightSE.point, h = bs(n, u) && this.comparePoint(u) === 0, c = bs(r, o) && e.comparePoint(o) === 0, f = bs(n, l) && this.comparePoint(l) === 0, g = bs(r, a) && e.comparePoint(a) === 0;
      if (c && h)
        return g && !f ? a : !g && f ? l : null;
      if (c)
        return f && o.x === l.x && o.y === l.y ? null : o;
      if (h)
        return g && a.x === u.x && a.y === u.y ? null : u;
      if (g && f)
        return null;
      if (g)
        return a;
      if (f)
        return l;
      var p = U_(o, this.vector(), u, e.vector());
      return p === null || !bs(s, p) ? null : co.round(p.x, p.y);
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
      var n = [], r = e.events !== void 0, s = new jn(e, !0), o = new jn(e, !1), a = this.rightSE;
      this.replaceRightSE(o), n.push(o), n.push(s);
      var u = new i(s, a, this.rings.slice(), this.windings.slice());
      return jn.comparePoints(u.leftSE.point, u.rightSE.point) > 0 && u.swapEvents(), jn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), r && (s.checkForConsuming(), o.checkForConsuming()), n;
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
          var h = r.rings[u], c = r.windings[u], f = n.rings.indexOf(h);
          f === -1 ? (n.rings.push(h), n.windings.push(c)) : n.windings[f] += c;
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
        var u = this.rings[o], l = this.windings[o], h = n.indexOf(u);
        h === -1 ? (n.push(u), r.push(l)) : r[h] += l;
      }
      for (var c = [], f = [], g = 0, p = n.length; g < p; g++)
        if (r[g] !== 0) {
          var d = n[g], _ = d.poly;
          if (f.indexOf(_) === -1)
            if (d.isExterior)
              c.push(_);
            else {
              f.indexOf(_) === -1 && f.push(_);
              var m = c.indexOf(d.poly);
              m !== -1 && c.splice(m, 1);
            }
        }
      for (var y = 0, x = c.length; y < x; y++) {
        var I = c[y].multiPoly;
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
      switch (Tn.type) {
        case "union": {
          var r = e.length === 0, s = n.length === 0;
          this._isInResult = r !== s;
          break;
        }
        case "intersection": {
          var o, a;
          e.length < n.length ? (o = e.length, a = n.length) : (o = n.length, a = e.length), this._isInResult = a === Tn.numMultiPolys && o < a;
          break;
        }
        case "xor": {
          var u = Math.abs(e.length - n.length);
          this._isInResult = u % 2 === 1;
          break;
        }
        case "difference": {
          var l = function(c) {
            return c.length === 1 && c[0].isSubject;
          };
          this._isInResult = l(e) !== l(n);
          break;
        }
        default:
          throw new Error("Unrecognized operation type found ".concat(Tn.type));
      }
      return this._isInResult;
    }
  }], [{
    key: "fromRing",
    value: function(e, n, r) {
      var s, o, a, u = jn.comparePoints(e, n);
      if (u < 0)
        s = e, o = n, a = 1;
      else if (u > 0)
        s = n, o = e, a = -1;
      else
        throw new Error("Tried to create degenerate segment at [".concat(e.x, ", ").concat(e.y, "]"));
      var l = new jn(s, !0), h = new jn(o, !1);
      return new i(l, h, [r], [a]);
    }
  }]), i;
}(), kh = /* @__PURE__ */ function() {
  function i(t, e, n) {
    if (Sn(this, i), !Array.isArray(t) || t.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = e, this.isExterior = n, this.segments = [], typeof t[0][0] != "number" || typeof t[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    var r = co.round(t[0][0], t[0][1]);
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
      var u = co.round(t[o][0], t[o][1]);
      u.x === s.x && u.y === s.y || (this.segments.push(ga.fromRing(s, u, this)), u.x < this.bbox.ll.x && (this.bbox.ll.x = u.x), u.y < this.bbox.ll.y && (this.bbox.ll.y = u.y), u.x > this.bbox.ur.x && (this.bbox.ur.x = u.x), u.y > this.bbox.ur.y && (this.bbox.ur.y = u.y), s = u);
    }
    (r.x !== s.x || r.y !== s.y) && this.segments.push(ga.fromRing(s, r, this));
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
}(), q_ = /* @__PURE__ */ function() {
  function i(t, e) {
    if (Sn(this, i), !Array.isArray(t))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new kh(t[0], this, !0), this.bbox = {
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
      var s = new kh(t[n], this, !1);
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
}(), Gh = /* @__PURE__ */ function() {
  function i(t, e) {
    if (Sn(this, i), !Array.isArray(t))
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
      var s = new q_(t[n], this);
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
}(), H_ = /* @__PURE__ */ function() {
  we(i, null, [{
    key: "factory",
    /* Given the segments from the sweep line pass, compute & return a series
     * of closed rings from all the segments marked to be part of the result */
    value: function(e) {
      for (var n = [], r = 0, s = e.length; r < s; r++) {
        var o = e[r];
        if (!(!o.isInResult() || o.ringOut)) {
          for (var a = null, u = o.leftSE, l = o.rightSE, h = [u], c = u.point, f = []; a = u, u = l, h.push(u), u.point !== c; )
            for (; ; ) {
              var g = u.getAvailableLinkedEvents();
              if (g.length === 0) {
                var p = h[0].point, d = h[h.length - 1].point;
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
                var x = f.splice(_)[0], I = h.splice(x.index);
                I.unshift(I[0].otherSE), n.push(new i(I.reverse()));
                continue;
              }
              f.push({
                index: h.length,
                point: u.point
              });
              var S = u.getLeftmostComparator(a);
              l = g.sort(S)[0].otherSE;
              break;
            }
          n.push(new i(h));
        }
      }
      return n;
    }
  }]);
  function i(t) {
    Sn(this, i), this.events = t;
    for (var e = 0, n = t.length; e < n; e++)
      t[e].segment.ringOut = this;
    this.poly = null;
  }
  return we(i, [{
    key: "getGeom",
    value: function() {
      for (var e = this.events[0].point, n = [e], r = 1, s = this.events.length - 1; r < s; r++) {
        var o = this.events[r].point, a = this.events[r + 1].point;
        Dh(o, e, a) !== 0 && (n.push(o), e = o);
      }
      if (n.length === 1)
        return null;
      var u = n[0], l = n[1];
      Dh(u, e, l) === 0 && n.shift(), n.push(n[0]);
      for (var h = this.isExteriorRing() ? 1 : -1, c = this.isExteriorRing() ? 0 : n.length - 1, f = this.isExteriorRing() ? n.length : -1, g = [], p = c; p != f; p += h)
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
        jn.compare(e, s) > 0 && (e = s);
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
}(), Bh = /* @__PURE__ */ function() {
  function i(t) {
    Sn(this, i), this.exteriorRing = t, t.poly = this, this.interiorRings = [];
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
}(), j_ = /* @__PURE__ */ function() {
  function i(t) {
    Sn(this, i), this.rings = t, this.polys = this._composePolys(t);
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
            n.push(new Bh(o));
          else {
            var a = o.enclosingRing();
            a.poly || n.push(new Bh(a)), a.poly.addInterior(o);
          }
      }
      return n;
    }
  }]), i;
}(), Z_ = /* @__PURE__ */ function() {
  function i(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ga.compare;
    Sn(this, i), this.queue = t, this.tree = new ol(e), this.segments = [];
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
        var h = null;
        if (u) {
          var c = u.getIntersection(n);
          if (c !== null && (n.isAnEndpoint(c) || (h = c), !u.isAnEndpoint(c)))
            for (var f = this._splitSafely(u, c), g = 0, p = f.length; g < p; g++)
              r.push(f[g]);
        }
        var d = null;
        if (l) {
          var _ = l.getIntersection(n);
          if (_ !== null && (n.isAnEndpoint(_) || (d = _), !l.isAnEndpoint(_)))
            for (var m = this._splitSafely(l, _), y = 0, x = m.length; y < x; y++)
              r.push(m[y]);
        }
        if (h !== null || d !== null) {
          var I = null;
          if (h === null)
            I = d;
          else if (d === null)
            I = h;
          else {
            var S = jn.comparePoints(h, d);
            I = S <= 0 ? h : d;
          }
          this.queue.remove(n.rightSE), r.push(n.rightSE);
          for (var w = n.split(I), O = 0, L = w.length; O < L; O++)
            r.push(w[O]);
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
              for (var U = this._splitSafely(l, P), T = 0, b = U.length; T < b; T++)
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
}(), zh = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE || 1e6, K_ = typeof process < "u" && process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS || 1e6, J_ = /* @__PURE__ */ function() {
  function i() {
    Sn(this, i);
  }
  return we(i, [{
    key: "run",
    value: function(e, n, r) {
      Tn.type = e, co.reset();
      for (var s = [new Gh(n, !0)], o = 0, a = r.length; o < a; o++)
        s.push(new Gh(r[o], !1));
      if (Tn.numMultiPolys = s.length, Tn.type === "difference")
        for (var u = s[0], l = 1; l < s.length; )
          Nu(s[l].bbox, u.bbox) !== null ? l++ : s.splice(l, 1);
      if (Tn.type === "intersection") {
        for (var h = 0, c = s.length; h < c; h++)
          for (var f = s[h], g = h + 1, p = s.length; g < p; g++)
            if (Nu(f.bbox, s[g].bbox) === null)
              return [];
      }
      for (var d = new ol(jn.compare), _ = 0, m = s.length; _ < m; _++)
        for (var y = s[_].getSweepEvents(), x = 0, I = y.length; x < I; x++)
          if (d.insert(y[x]), d.size > zh)
            throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");
      for (var S = new Z_(d), w = d.size, O = d.pop(); O; ) {
        var L = O.key;
        if (d.size === w) {
          var P = L.segment;
          throw new Error("Unable to pop() ".concat(L.isLeft ? "left" : "right", " SweepEvent ") + "[".concat(L.point.x, ", ").concat(L.point.y, "] from segment #").concat(P.id, " ") + "[".concat(P.leftSE.point.x, ", ").concat(P.leftSE.point.y, "] -> ") + "[".concat(P.rightSE.point.x, ", ").concat(P.rightSE.point.y, "] from queue. ") + "Please file a bug report.");
        }
        if (d.size > zh)
          throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");
        if (S.segments.length > K_)
          throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");
        for (var G = S.process(L), B = 0, Y = G.length; B < Y; B++) {
          var U = G[B];
          U.consumedBy === void 0 && d.insert(U);
        }
        w = d.size, O = d.pop();
      }
      co.reset();
      var T = H_.factory(S.segments), b = new j_(T);
      return b.getGeom();
    }
  }]), i;
}(), Tn = new J_(), Q_ = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Tn.run("union", t, n);
}, $_ = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Tn.run("intersection", t, n);
}, tm = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Tn.run("xor", t, n);
}, em = function(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return Tn.run("difference", t, n);
}, nm = {
  union: Q_,
  intersection: $_,
  xor: tm,
  difference: em
};
function Vh(i) {
  return i.type === "Feature" ? i.geometry : i;
}
function im(i, t) {
  var e = Vh(i), n = Vh(t), r = i.properties || {}, s = nm.difference(
    e.coordinates,
    n.coordinates
  );
  return s.length === 0 ? null : s.length === 1 ? Bd(s[0], r) : zd(s, r);
}
function Xh(i) {
  let t;
  for (const e of i)
    t && e[0] - t[0] >= 180 ? e[0] -= 360 : t && e[0] - t[0] < -180 && (e[0] += 360), t = e;
}
function Yh(i, t) {
  const e = im(
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
  const n = O_(i, 0);
  if (n.geometry.type === "Polygon")
    for (const r of n.geometry.coordinates)
      Xh(r);
  else
    for (const r of n.geometry.coordinates)
      for (const s of r)
        Xh(s);
  t({
    type: "FeatureCollection",
    features: [n, e]
  });
}
const Uh = "EPSG:4326";
function rm(i) {
  var s;
  const t = i.getProperties(), { isMask: e } = t, n = (s = i.getGeometry()) == null ? void 0 : s.getType(), r = e ? 0 : n === "LineString" || n === "MultiLineString" ? 3 : 2;
  return new cr({
    stroke: e ? void 0 : new jr({
      color: "#3170fe",
      lineDash: [r, r],
      width: r,
      lineCap: "butt"
    }),
    fill: e ? new hr({
      color: "#00000020"
    }) : void 0,
    image: new mo({
      src: `/icons/marker_${t.isReverse ? "reverse" : t.isSelected ? "selected" : "unselected"}.svg`,
      anchor: [0.5, 1]
    }),
    zIndex: t.isSelected ? 2 : t.isReverse ? 0 : 1,
    text: t.isSelected && t.tooltip ? new xa({
      backgroundFill: new hr({ color: "white" }),
      text: t.tooltip,
      offsetY: -40,
      backgroundStroke: new jr({
        color: "white",
        lineJoin: "round",
        width: 3
      }),
      padding: [2, 0, 0, 2]
    }) : void 0
  });
}
function um(i, t = {}, e = {}, n = rm) {
  let r = -1, s, o, a, u = !1;
  const l = new Pd({
    updateWhileAnimating: !0
  });
  i.addLayer(l);
  const h = new Dd({});
  l.setSource(h), l.setStyle(n), i.on("click", (g) => {
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
  function c(g) {
    return g.transform(Uh, i.getView().getProjection());
  }
  const f = (g) => {
    o == null || o({
      type: "mapClick",
      coordinates: Nl(g.coordinate, i.getView().getProjection())
    });
  };
  return {
    setEventHandler(g) {
      g ? (o = g, i.on("click", f)) : (o = void 0, i.un("click", f));
    },
    flyTo(g, p) {
      i.getView().animate({
        center: Mo(g, i.getView().getProjection()),
        zoom: p,
        duration: 2e3,
        ...t
      });
    },
    fitBounds(g, p, d) {
      i.getView().fit(Gg(g, Uh, i.getView().getProjection()), {
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
        Mo(g, i.getView().getProjection())
      ) : (h.removeFeature(a), a.dispose(), a = void 0) : g && (a = new Nn(
        new Wr(Mo(g, i.getView().getProjection()))
      ), a.setProperties({ isReverse: !0 }), h.addFeature(a));
    },
    setMarkers(g, p) {
      function d(_) {
        var m;
        if (_)
          for (const y of _.features) {
            const x = y.geometry.type === "Polygon" ? new Ys(y.geometry.coordinates) : y.geometry.type === "MultiPolygon" ? new uh(y.geometry.coordinates) : null;
            x && h.addFeature(
              new Nn({
                isMask: !!((m = y.properties) != null && m.isMask),
                geometry: c(x)
              })
            );
          }
      }
      if (h.clear(), a && h.addFeature(a), d(), p) {
        let _ = !1;
        if (p.geometry.type === "GeometryCollection") {
          const m = p.geometry.geometries.map(
            (y) => y.type === "Polygon" ? new Ys(y.coordinates) : y.type === "MultiPolygon" ? new uh(y.coordinates) : null
          ).filter((y) => !!y);
          if (m.length > 0)
            h.addFeature(
              new Nn(c(new Ad(m)))
            ), _ = !0;
          else
            for (const y of p.geometry.geometries)
              y.type === "LineString" ? (h.addFeature(
                new Nn(
                  c(new Zo(y.coordinates))
                )
              ), _ = !0) : y.type === "MultiLineString" && h.addFeature(
                new Nn(
                  c(new ah(y.coordinates))
                )
              ), _ = !0;
        }
        if (!_) {
          if (p.geometry.type === "Polygon")
            Yh(p, d);
          else if (p.geometry.type === "MultiPolygon")
            Yh(p, d);
          else if (p.geometry.type === "LineString") {
            h.addFeature(
              new Nn(
                c(new Zo(p.geometry.coordinates))
              )
            );
            return;
          } else if (p.geometry.type === "MultiLineString") {
            h.addFeature(
              new Nn(
                c(new ah(p.geometry.coordinates))
              )
            );
            return;
          }
        }
        h.addFeature(new Nn(c(new Wr(p.center))));
      }
      for (const _ of g ?? []) {
        if (_ === p)
          continue;
        const m = new Nn(
          new Wr(Mo(_.center, i.getView().getProjection()))
        );
        m.setId(_.id), m.setProperties({
          fuzzy: !!_.matching_text,
          tooltip: _.place_type[0] === "reverse" ? _.place_name : _.place_name.replace(/,.*/, "")
        }), h.addFeature(m);
      }
    },
    setSelectedMarker(g) {
      var _, m, y;
      const p = h.getFeatures(), d = (_ = p[0]) != null && _.getProperties().isReverse ? 1 : 0;
      r > -1 && ((m = p[r + d]) == null || m.setProperties({
        isSelected: !1
      })), g > -1 && ((y = p[g + d]) == null || y.setProperties({
        isSelected: !0
      })), r = g;
    },
    getCenterAndZoom() {
      const g = i.getView(), p = g.getCenter(), d = g.getZoom();
      if (!(!p || d === void 0))
        return [d, ...Nl(p, g.getProjection())];
    }
  };
}
export {
  um as createOpenLayersMapController
};
//# sourceMappingURL=openlayers-controller.js.map
