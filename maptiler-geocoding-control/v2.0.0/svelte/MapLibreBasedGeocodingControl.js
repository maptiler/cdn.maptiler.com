import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createMapLibreGlMapController, } from "./maplibregl-controller";
export { createMapLibreGlMapController, } from "./maplibregl-controller";
export function crateBaseClass(Evented, maplibreGl, getExtraProps) {
    return class MapLibreBasedGeocodingControl extends Evented {
        #gc;
        #options;
        constructor(options = {}) {
            super();
            this.#options = options;
        }
        onAddInt(map) {
            const div = document.createElement("div");
            div.className =
                "mapboxgl-ctrl-geocoder mapboxgl-ctrl maplibregl-ctrl-geocoder maplibregl-ctrl mapboxgl-ctrl-group";
            const { marker, showResultMarkers, flyTo, fullGeometryStyle, ...restOptions } = this.#options;
            const flyToOptions = typeof flyTo === "boolean" ? {} : flyTo;
            const mapController = createMapLibreGlMapController(map, maplibreGl, marker, showResultMarkers, flyToOptions, flyToOptions, fullGeometryStyle);
            const props = {
                mapController,
                flyTo: flyTo === undefined ? true : !!flyTo,
                apiKey: "", // just to satisfy apiKey; TODO find a better solution
                ...getExtraProps?.(map, div),
                ...restOptions,
            };
            if (!props.apiKey) {
                throw new Error("no apiKey provided");
            }
            this.#gc = new GeocodingControlComponent({ target: div, props });
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
                this.#gc.$on(eventName, (event) => {
                    this.fire(eventName, event.detail);
                });
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
        setReverseMode(value) {
            this.#gc?.$set({ reverseActive: value });
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
    };
}
