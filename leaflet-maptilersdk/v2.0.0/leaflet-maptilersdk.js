import * as s from "@maptiler/sdk";
import e from "leaflet";
let l = null, m = null, h = null, c = null, _ = null, u = null;
function g() {
  e.MaptilerLayer = e.Layer.extend({
    options: {
      updateInterval: 32,
      // How much to extend the overlay view (relative to map size)
      // e.g. 0.1 would be 10% of map view in each direction
      padding: 0.1,
      // whether or not to register the mouse and keyboard
      // events on the maptiler sdk overlay
      interactive: !1,
      // set the tilepane as the default pane to draw gl tiles
      pane: "tilePane"
    },
    map: null,
    initialize: function(t) {
      e.setOptions(this, t), this._throttledUpdate = e.Util.throttle(
        this._update,
        this.options.updateInterval,
        this
      );
    },
    onAdd: function(t) {
      this._container || this._initContainer();
      const i = document.createElement("a");
      i.href = "https://www.maptiler.com", i.style = "position:absolute; left:10px; bottom:2px; z-index:999;";
      const a = document.createElement("img");
      a.src = "https://api.maptiler.com/resources/logo.svg", a.alt = "MapTiler logo", a.width = "100", a.height = "30", i.appendChild(a), t.getContainer().appendChild(i);
      const o = this.getPaneName();
      t.getPane(o).appendChild(this._container), this._initMaptilerSDK(), this._offset = this._map.containerPointToLayerPoint([0, 0]), t.options.zoomAnimation && e.DomEvent.on(
        t._proxy,
        e.DomUtil.TRANSITION_END,
        this._transitionEnd,
        this
      ), t.attributionControl.addAttribution(
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      );
    },
    onRemove: function(t) {
      this._map._proxy && this._map.options.zoomAnimation && e.DomEvent.off(
        this._map._proxy,
        e.DomUtil.TRANSITION_END,
        this._transitionEnd,
        this
      );
      const i = this.getPaneName();
      t.getPane(i).removeChild(this._container), this._maptilerMap.remove(), this._maptilerMap = null;
    },
    getEvents: function() {
      return {
        move: this._throttledUpdate,
        // sensibly throttle updating while panning
        zoomanim: this._animateZoom,
        // applys the zoom animation to the <canvas>
        zoom: this._pinchZoom,
        // animate every zoom event for smoother pinch-zooming
        zoomstart: this._zoomStart,
        // flag starting a zoom to disable panning
        zoomend: this._zoomEnd,
        resize: this._resize
      };
    },
    getMaptilerSDKMap: function() {
      return this._maptilerMap;
    },
    getCanvas: function() {
      return this._maptilerMap.getCanvas();
    },
    getSize: function() {
      return this._map.getSize().multiplyBy(1 + this.options.padding * 2);
    },
    getBounds: function() {
      const t = this.getSize().multiplyBy(0.5), i = this._map.latLngToContainerPoint(this._map.getCenter());
      return e.latLngBounds(
        this._map.containerPointToLatLng(i.subtract(t)),
        this._map.containerPointToLatLng(i.add(t))
      );
    },
    getContainer: function() {
      return this._container;
    },
    // returns the pane name set in options if it is a valid pane, defaults to tilePane
    getPaneName: function() {
      return this._map.getPane(this.options.pane) ? this.options.pane : "tilePane";
    },
    setStyle: function(t) {
      this._maptilerMap.setStyle(t);
    },
    setLanguage: function(t) {
      this._maptilerMap.setLanguage(t);
    },
    _roundPoint: function(t) {
      return { x: Math.round(t.x), y: Math.round(t.y) };
    },
    _initContainer: function() {
      const t = this._container = e.DomUtil.create(
        "div",
        "leaflet-gl-layer"
      ), i = this.getSize(), a = this._map.getSize().multiplyBy(this.options.padding);
      t.style.width = i.x + "px", t.style.height = i.y + "px";
      const o = this._map.containerPointToLayerPoint([0, 0]).subtract(a);
      e.DomUtil.setPosition(t, this._roundPoint(o));
    },
    _initMaptilerSDK: function() {
      const t = this._map.getCenter();
      let i = this.options.style, a = this.options.apiKey;
      if ((typeof this.options.style == "string" || this.options.style instanceof String) && this.options.style.startsWith("https://api.maptiler.com/maps/"))
        try {
          const n = new URL(this.options.style), p = n.searchParams.get("key");
          p && (a = p, n.searchParams.delete("key"), i = n.href);
        } catch (n) {
          console.error(n);
        }
      const o = {
        ...this.options,
        style: i,
        apiKey: a,
        container: this._container,
        center: [t.lng, t.lat],
        zoom: this._map.getZoom() - 1,
        attributionControl: !1
      };
      this.options.geolocate && (delete o.center, delete o.zoom), this._maptilerMap = new s.Map(o), this._maptilerMap.once("load", () => {
        this.fire("ready");
      }), this._maptilerMap.transform.freezeElevation = !0, this.options.geolocate && this._maptilerMap.on("load", () => {
        this._map.setView(
          this._maptilerMap.getCenter(),
          this._maptilerMap.getZoom() + 1
        );
      }), this._maptilerMap.transform.latRange = null, this._maptilerMap.transform.maxValidLatitude = 1 / 0, this._transformGL(), this._maptilerMap._actualCanvas = this._maptilerMap._canvas;
      const r = this._maptilerMap._actualCanvas;
      e.DomUtil.addClass(r, "leaflet-image-layer"), e.DomUtil.addClass(r, "leaflet-zoom-animated"), this.options.interactive && e.DomUtil.addClass(r, "leaflet-interactive"), this.options.className && e.DomUtil.addClass(r, this.options.className), Object.keys(s.helpers).forEach((n) => {
        this[n] = (p) => s.helpers[n].apply(null, [
          this._maptilerMap,
          p
        ]);
      });
    },
    _update: function() {
      if (this._offset = this._map.containerPointToLayerPoint([0, 0]), this._zooming)
        return;
      const t = this.getSize(), i = this._map.getSize().multiplyBy(this.options.padding), a = this._map.containerPointToLayerPoint([0, 0]).subtract(i);
      e.DomUtil.setPosition(this._container, this._roundPoint(a)), this._transformGL(), this._maptilerMap.transform.width !== t.x || this._maptilerMap.transform.height !== t.y ? (this._container.style.width = t.x + "px", this._container.style.height = t.y + "px", this._maptilerMap._resize !== null && this._maptilerMap._resize !== void 0 ? this._maptilerMap._resize() : this._maptilerMap.resize()) : this._maptilerMap._update !== null && this._maptilerMap._update !== void 0 ? this._maptilerMap._update() : this._maptilerMap.update();
    },
    _transformGL: function() {
      const t = this._map.getCenter(), i = this._maptilerMap.transform;
      i.center = s.LngLat.convert([t.lng, t.lat]), i.zoom = this._map.getZoom() - 1;
    },
    // update the map constantly during a pinch zoom
    _pinchZoom: function() {
      this._maptilerMap.jumpTo({
        zoom: this._map.getZoom() - 1,
        center: this._map.getCenter()
      });
    },
    // borrowed from L.ImageOverlay
    // https://github.com/Leaflet/Leaflet/blob/master/src/layer/ImageOverlay.js#L139-L144
    _animateZoom: function(t) {
      const i = this._map.getZoomScale(t.zoom), a = this._map.getSize().multiplyBy(this.options.padding * i), o = this.getSize()._divideBy(2), r = this._map.project(t.center, t.zoom)._subtract(o)._add(this._map._getMapPanePos().add(a))._round(), n = this._map.project(this._map.getBounds().getNorthWest(), t.zoom)._subtract(r);
      e.DomUtil.setTransform(
        this._maptilerMap._actualCanvas,
        n.subtract(this._offset),
        i
      );
    },
    _zoomStart: function() {
      this._zooming = !0;
    },
    _zoomEnd: function() {
      const t = this._map.getZoomScale(this._map.getZoom());
      e.DomUtil.setTransform(
        this._maptilerMap._actualCanvas,
        // https://github.com/mapbox/mapbox-gl-leaflet/pull/130
        null,
        t
      ), this._zooming = !1, this._update();
    },
    _transitionEnd: function() {
      e.Util.requestAnimFrame(function() {
        const t = this._map.getZoom(), i = this._map.getCenter(), a = this._map.latLngToContainerPoint(
          this._map.getBounds().getNorthWest()
        );
        e.DomUtil.setTransform(this._maptilerMap._actualCanvas, a, 1), this._maptilerMap.once(
          "moveend",
          e.Util.bind(function() {
            this._zoomEnd();
          }, this)
        ), this._maptilerMap.jumpTo({
          center: i,
          zoom: t - 1
        });
      }, this);
    },
    _resize: function(t) {
      this._transitionEnd(t);
    }
  }), l = e.MaptilerLayer, e.maptilerLayer = function(t) {
    return new e.MaptilerLayer(t);
  }, m = e.maptilerLayer, e.MaptilerStyle = {}, Object.keys(s.MapStyle).forEach((t) => {
    e.MaptilerStyle[t] = s.MapStyle[t];
  }), h = e.MaptilerStyle, c = e.MaptilerStyle, e.maptilerStyle = e.MaptilerStyle, e.MaptilerLanguage = {}, Object.keys(s.Language).forEach((t) => {
    e.MaptilerLanguage[t] = s.Language[t];
  }), _ = e.MaptilerLanguage, u = e.MaptilerLanguage, e.maptilerLanguage = e.MaptilerLanguage;
}
(() => {
  try {
    g();
  } catch (t) {
    console.error(t);
  }
})();
export {
  _ as MaptilerLanguage,
  l as MaptilerLayer,
  h as MaptilerStyle,
  g as init,
  u as maptilerLanguage,
  m as maptilerLayer,
  c as maptilerStyle
};
