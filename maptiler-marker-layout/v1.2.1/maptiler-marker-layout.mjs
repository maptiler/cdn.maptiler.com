var k = Object.defineProperty;
var P = (r, e, t) => e in r ? k(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var n = (r, e, t) => P(r, typeof e != "symbol" ? e + "" : e, t);
function z(r) {
  const e = r.map((h) => h.id);
  e.sort();
  const t = e.join("_");
  let o = 0;
  for (let h = 0; h < t.length; h++) {
    const f = t.charCodeAt(h);
    o = (o << 5) - o + f, o |= 0;
  }
  return o;
}
function w(r) {
  if (r.geometry.type !== "Point")
    return "";
  const e = new Float32Array(r.geometry.coordinates.slice(0, 2));
  return new Uint8Array(e.buffer).join("_");
}
function A(r, e) {
  return !(e.position[0] > r.position[0] + r.size[0] || e.position[0] + e.size[0] < r.position[0] || e.position[1] > r.position[1] + r.size[1] || e.position[1] + e.size[1] < r.position[1]);
}
function x(r, e) {
  const t = e.values();
  for (const o of t)
    if (A(r, o))
      return !0;
  return !1;
}
class O {
  constructor(e, t = {}) {
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
    n(this, "maxNbFeaturesPerMarker", Number.POSITIVE_INFINITY);
    if (this.map = e, this.layers = t.layers ?? void 0, this.markerAnchor = t.markerAnchor ?? "center", this.markerSize = t.markerSize ?? [150, 50], this.max = t.max ?? null, this.lastStatus = {
      new: /* @__PURE__ */ new Map(),
      updated: /* @__PURE__ */ new Map(),
      removed: /* @__PURE__ */ new Map()
    }, this.lastPresent = /* @__PURE__ */ new Map(), this.filter = t.filter ?? null, this.offset = t.offset ?? [0, 0], this.groupBy = t.groupBy ?? null, this.maxRatioUnitSize = t.maxRatioUnitSize ?? 2.5, this.sortingProperty = t.sortingProperty ?? "", this.maxNbFeaturesPerMarker = t.maxNbFeaturesPerMarker ?? Number.POSITIVE_INFINITY, t.sortingOrder && !["ascending", "descending"].includes(t.sortingOrder))
      throw new Error(
        "The property `options.sortingOrder` must be 'ascending' or 'descending' if provided."
      );
    this.sortingOrder = t.sortingOrder === "descending" ? -1 : 1;
  }
  computeAnchorOffset(e = 1) {
    let t = [0, 0];
    return this.markerAnchor === "center" ? t = [
      -this.markerSize[0] / 2,
      e * -this.markerSize[1] / 2
    ] : this.markerAnchor === "top" ? t = [
      -this.markerSize[0] / 2,
      e * -this.markerSize[1]
    ] : this.markerAnchor === "bottom" ? t = [-this.markerSize[0] / 2, 0] : this.markerAnchor === "left" ? t = [
      -this.markerSize[0],
      e * -this.markerSize[1] / 2
    ] : this.markerAnchor === "right" && (t = [0, -this.markerSize[1]]), t[0] += this.offset[0], t[1] += this.offset[1], t;
  }
  /**
   * Updates only the position of an abstract marker. Soft updates are convenients
   * for updating already existing markers without the need to debounce
   */
  softUpdateAbstractMarker(e) {
    const t = e.features[0].geometry.coordinates, o = this.map.project(t), h = Math.min(
      e.features.length,
      this.maxRatioUnitSize
    ), f = this.computeAnchorOffset(h);
    e.position[0] = o.x + f[0], e.position[1] = o.y + f[1];
  }
  /**
   * Update the marker positions.
   */
  update() {
    if (!this.map) return null;
    let e = this.map.queryRenderedFeatures(void 0, {
      layers: this.layers
    });
    if (e = e.filter((s) => s.geometry.type === "Point"), typeof this.filter == "function" && (e = e.filter(this.filter)), this.sortingProperty) {
      if (typeof this.sortingProperty == "string") {
        const s = this.sortingProperty;
        e = e.filter((i) => i.properties[s]).sort(
          (i, a) => (i.properties[s] > a.properties[s] ? 1 : -1) * this.sortingOrder
        );
      } else if (typeof this.sortingProperty == "function") {
        const s = this.sortingProperty;
        e = e.sort(
          (i, a) => (s(i) > s(a) ? 1 : -1) * this.sortingOrder
        );
      }
    }
    const t = /* @__PURE__ */ new Map();
    let o = [];
    if (this.groupBy)
      for (let s = 0; s < e.length; s += 1) {
        const i = e[s], a = this.groupBy === "coordinates" ? w(i) : i.properties[this.groupBy];
        let u;
        t.has(a) ? u = t.get(a) : (u = {
          groupKey: a,
          features: []
        }, t.set(a, u), o.push(u)), u.features.length < this.maxNbFeaturesPerMarker && u.features.push(i);
      }
    else
      o = e.map((s) => {
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
      ), u = this.computeAnchorOffset(a), g = i.features[0], S = [
        this.markerSize[0],
        this.markerSize[1] * a
      ], l = z(i.features), y = g.geometry.coordinates, d = this.map.project(y), c = {
        id: l,
        position: [
          d.x + u[0],
          d.y + u[1]
        ],
        size: S,
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
