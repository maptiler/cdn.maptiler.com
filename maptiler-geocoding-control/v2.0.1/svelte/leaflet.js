import * as L from "leaflet";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createLeafletMapController } from "./leaflet-controller";
export { createLeafletMapController } from "./leaflet-controller";
/**
 * Leaflet mixins https://leafletjs.com/reference.html#class
 * for TypeScript https://www.typescriptlang.org/docs/handbook/mixins.html
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
class EventedControl extends L.Control {
}
L.Util.extend(EventedControl.prototype, L.Evented.prototype);
export class GeocodingControl extends EventedControl {
    #gc;
    #options;
    constructor(options) {
        super(options);
        this.#options = options;
    }
    onAdd(map) {
        const div = document.createElement("div");
        div.className = "leaflet-ctrl-geocoder";
        L.DomEvent.disableClickPropagation(div);
        L.DomEvent.disableScrollPropagation(div);
        const { marker, showResultMarkers, flyTo, fullGeometryStyle, position, ...restOptions } = this.#options;
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
        const eventNames = {
            select: undefined,
            pick: undefined,
            featureslisted: undefined,
            featuresmarked: undefined,
            response: undefined,
            optionsvisibilitychange: undefined,
            reversetoggle: undefined,
            querychange: undefined,
        };
        for (const eventName in eventNames) {
            this.#gc.$on(eventName, (event) => this.fire(eventName, event.detail));
        }
        return div;
    }
    setOptions(options) {
        Object.assign(this.#options, options);
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
