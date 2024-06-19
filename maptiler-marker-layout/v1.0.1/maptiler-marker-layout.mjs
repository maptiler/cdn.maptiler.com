var k = Object.defineProperty;
var z = (r, t, e) => t in r ? k(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var n = (r, t, e) => z(r, typeof t != "symbol" ? t + "" : t, e);
function P(r) {
  const t = r.map((h) => h.id);
  t.sort();
  const e = t.join("_");
  let o = 0;
  for (let h = 0; h < e.length; h++) {
    const f = e.charCodeAt(h);
    o = (o << 5) - o + f, o |= 0;
  }
  return o;
}
function w(r) {
  if (r.geometry.type !== "Point")
    return "";
  const t = new Float32Array(r.geometry.coordinates.slice(0, 2));
  return new Uint8Array(t.buffer).join("_");
}
function A(r, t) {
  return !(t.position[0] > r.position[0] + r.size[0] || t.position[0] + t.size[0] < r.position[0] || t.position[1] > r.position[1] + r.size[1] || t.position[1] + t.size[1] < r.position[1]);
}
function x(r, t) {
  const e = t.values();
  for (const o of e)
    if (A(r, o))
      return !0;
  return !1;
}
class O {
  constructor(t, e = {}) {
    /**
     * Style layer IDs to keep
     */
    n(this, "layers");
    n(this, "markerSize");
    n(this, "markerAnchor");
    n(this, "map");
    n(this, "lastStatus");
    n(this, "max");
    n(this, "offset", [0, 0]);
    /**
     * This is a concat of lastStatus.new and lastStatus.updated
     * only for optimisation purposes
     */
    n(this, "lastPresent");
    n(this, "filter", null);
    n(this, "groupBy", null);
    n(this, "maxRatioUnitSize");
    n(this, "sortingProperty", "");
    n(this, "sortingOrder", 1);
    n(this, "maxNbFeaturesPerMarker", 1 / 0);
    if (this.map = t, this.layers = e.layers ?? void 0, this.markerAnchor = e.markerAnchor ?? "center", this.markerSize = e.markerSize ?? [150, 50], this.max = e.max ?? null, this.lastStatus = {
      new: /* @__PURE__ */ new Map(),
      updated: /* @__PURE__ */ new Map(),
      removed: /* @__PURE__ */ new Map()
    }, this.lastPresent = /* @__PURE__ */ new Map(), this.filter = e.filter ?? null, this.offset = e.offset ?? [0, 0], this.groupBy = e.groupBy ?? null, this.maxRatioUnitSize = e.maxRatioUnitSize ?? 2.5, this.sortingProperty = e.sortingProperty ?? "", this.maxNbFeaturesPerMarker = e.maxNbFeaturesPerMarker ?? 1 / 0, e.sortingOrder && !["ascending", "descending"].includes(e.sortingOrder))
      throw new Error(
        "The property `options.sortingOrder` must be 'ascending' or 'descending' if provided."
      );
    this.sortingOrder = e.sortingOrder === "descending" ? -1 : 1;
  }
  computeAnchorOffset(t = 1) {
    let e = [0, 0];
    return this.markerAnchor === "center" ? e = [
      -this.markerSize[0] / 2,
      t * -this.markerSize[1] / 2
    ] : this.markerAnchor === "top" ? e = [
      -this.markerSize[0] / 2,
      t * -this.markerSize[1]
    ] : this.markerAnchor === "bottom" ? e = [-this.markerSize[0] / 2, 0] : this.markerAnchor === "left" ? e = [
      -this.markerSize[0],
      t * -this.markerSize[1] / 2
    ] : this.markerAnchor === "right" && (e = [0, -this.markerSize[1]]), e[0] += this.offset[0], e[1] += this.offset[1], e;
  }
  /**
   * Updates only the position of an abstract marker. Soft updates are convenients
   * for updating already existing markers without the need to debounce
   */
  softUpdateAbstractMarker(t) {
    const e = t.features[0].geometry.coordinates, o = this.map.project(e), h = Math.min(
      t.features.length,
      this.maxRatioUnitSize
    ), f = this.computeAnchorOffset(h);
    t.position[0] = o.x + f[0], t.position[1] = o.y + f[1];
  }
  /**
   * Update the marker positions.
   */
  update() {
    if (!this.map) return null;
    let t = this.map.queryRenderedFeatures(void 0, {
      layers: this.layers
    });
    if (t = t.filter((s) => s.geometry.type === "Point"), typeof this.filter == "function" && (t = t.filter(this.filter)), this.sortingProperty) {
      if (typeof this.sortingProperty == "string") {
        const s = this.sortingProperty;
        t = t.filter((i) => i.properties[s]).sort(
          (i, a) => (i.properties[s] > a.properties[s] ? 1 : -1) * this.sortingOrder
        );
      } else if (typeof this.sortingProperty == "function") {
        const s = this.sortingProperty;
        t = t.sort(
          (i, a) => (s(i) > s(a) ? 1 : -1) * this.sortingOrder
        );
      }
    }
    const e = /* @__PURE__ */ new Map();
    let o = [];
    if (this.groupBy)
      for (let s = 0; s < t.length; s += 1) {
        const i = t[s], a = this.groupBy === "coordinates" ? w(i) : i.properties[this.groupBy];
        let u;
        e.has(a) ? u = e.get(a) : (u = {
          groupKey: a,
          features: []
        }, e.set(a, u), o.push(u)), u.features.length < this.maxNbFeaturesPerMarker && u.features.push(i);
      }
    else
      o = t.map((s) => {
        var i;
        return {
          groupKey: (i = s.id) == null ? void 0 : i.toString(),
          features: [s]
        };
      });
    const h = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
    let m = 0;
    for (let s = 0; s < o.length && !(this.max && m >= this.max); s += 1) {
      const i = o[s], a = Math.min(
        i.features.length,
        this.maxRatioUnitSize
      ), u = this.computeAnchorOffset(a), g = i.features[0], y = [
        this.markerSize[0],
        this.markerSize[1] * a
      ], l = P(i.features), S = g.geometry.coordinates, d = this.map.project(S), c = {
        id: l,
        position: [
          d.x + u[0],
          d.y + u[1]
        ],
        size: y,
        internalElementSize: [this.markerSize[0], this.markerSize[1]],
        features: i.features
      };
      x(c, p) || (p.set(l, c), this.lastStatus.new.has(l) ? (f.set(l, c), this.lastPresent.delete(l)) : this.lastStatus.updated.has(l) ? (f.set(l, c), this.lastPresent.delete(l)) : h.set(l, c), m++);
    }
    return this.lastStatus.removed = this.lastPresent, this.lastPresent = p, this.lastStatus.new = h, this.lastStatus.updated = f, this.lastStatus;
  }
  /**
   * Reset the internal state, aka empties the `lastStatus` maps.
   */
  reset() {
    this.lastPresent.clear(), this.lastStatus.new.clear(), this.lastStatus.updated.clear(), this.lastStatus.removed.clear();
  }
}
export {
  O as MarkerLayout
};
