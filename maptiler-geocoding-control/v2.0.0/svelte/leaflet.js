import * as L from "leaflet";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createLeafletMapController } from "./leaflet-controller";
export { createLeafletMapController } from "./leaflet-controller";
/**
 * Leaflet mixins https://leafletjs.com/reference.html#class
 * for TypeScript https://www.typescriptlang.org/docs/handbook/mixins.html
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging, @typescript-eslint/no-extraneous-class
class EventedControl {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-unused-vars
    constructor(...args) { }
}
L.Util.extend(EventedControl.prototype, L.Control.prototype);
L.Util.extend(EventedControl.prototype, L.Evented.prototype);
export class GeocodingControl extends EventedControl {
    #gc;
    #options;
    constructor(options) {
        super();
        this.#options = options;
    }
    onAdd(map) {
        const div = document.createElement("div");
        div.className = "leaflet-ctrl-geocoder";
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        const { marker, showResultMarkers, flyTo, fullGeometryStyle, ...restOptions } = this.#options;
        const flyToOptions = typeof flyTo === "boolean" ? {} : flyTo;
        const mapController = createLeafletMapController(map, marker, showResultMarkers, flyToOptions, flyToOptions, fullGeometryStyle);
        this.#gc = new GeocodingControlComponent({
            target: div,
            props: {
                mapController,
                flyTo: flyTo === undefined ? true : !!flyTo,
                ...restOptions,
            },
        });
        for (const eventName of [
            "select",
            "pick",
            "featuresListed",
            "featuresMarked",
            "response",
            "optionsVisibilityChange",
            "reverseToggle",
            "queryChange",
        ]) {
            this.#gc.$on(eventName, (event) => this.fire(eventName.toLowerCase(), event.detail));
        }
        return div;
    }
    setOptions(options) {
        this.#options = options;
        const { marker, showResultMarkers, flyTo, fullGeometryStyle, ...restOptions } = this.#options;
        this.#gc?.$set(restOptions);
    }
    setQuery(value, submit = true) {
        this.#gc?.setQuery(value, submit);
    }
    clearMap() {
        this.#gc?.clearMap();
    }
    clearList() {
        this.#gc?.clearList();
    }
    focus() {
        this.#gc?.focus();
    }
    blur() {
        this.#gc?.blur();
    }
    onRemove() {
        this.#gc?.$destroy();
    }
}
function createControl(...params) {
    return new GeocodingControl(...params);
}
if (window.L &&
    typeof window.L === "object" &&
    typeof window.L.control === "function") {
    window.L.control.maptilerGeocoding = createControl;
}
