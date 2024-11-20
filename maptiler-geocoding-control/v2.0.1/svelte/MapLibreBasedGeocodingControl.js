import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createMapLibreGlMapController, } from "./maplibregl-controller";
export { createMapLibreGlMapController, } from "./maplibregl-controller";
export function crateClasses(Evented, maplibreGl, getExtraProps) {
    // NOTE We can't use Maplibre `Event` - see https://github.com/maplibre/maplibre-gl-js/issues/5015
    class Event {
        type;
        target;
        constructor(target, type) {
            this.type = type;
            this.target = target;
        }
    }
    class SelectEvent extends Event {
        feature;
        constructor(target, details) {
            super(target, "select");
            Object.assign(this, details);
        }
    }
    class FeaturesListedEvent extends Event {
        features;
        constructor(target, features) {
            super(target, "featureslisted");
            this.features = features;
        }
    }
    class FeaturesMarkedEvent extends Event {
        features;
        constructor(target, features) {
            super(target, "featuresmarked");
            this.features = features;
        }
    }
    class OptionsVisibilityChangeEvent extends Event {
        optionsVisible;
        constructor(target, optionsVisible) {
            super(target, "optionsvisibilitychange");
            this.optionsVisible = optionsVisible;
        }
    }
    class PickEvent extends Event {
        feature;
        constructor(target, feature) {
            super(target, "pick");
            this.feature = feature;
        }
    }
    class QueryChangeEvent extends Event {
        query;
        constructor(target, query) {
            super(target, "querychange");
            this.query = query;
        }
    }
    class ResponseEvent extends Event {
        url;
        featureCollection;
        constructor(target, url, featureCollection) {
            super(target, "response");
            this.url = url;
            this.featureCollection = featureCollection;
        }
    }
    class ReverseToggleEvent extends Event {
        reverse;
        constructor(target, reverse) {
            super(target, "reversetoggle");
            this.reverse = reverse;
        }
    }
    class MapLibreBasedGeocodingControl extends Evented {
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
            this.#gc.$on("select", (event) => {
                this.fire(new SelectEvent(this, event.detail));
            });
            this.#gc.$on("pick", (event) => {
                this.fire(new PickEvent(this, event.detail.feature));
            });
            this.#gc.$on("featureslisted", (event) => {
                this.fire(new FeaturesListedEvent(this, event.detail.features));
            });
            this.#gc.$on("featuresmarked", (event) => {
                this.fire(new FeaturesMarkedEvent(this, event.detail.features));
            });
            this.#gc.$on("response", (event) => {
                this.fire(new ResponseEvent(this, event.detail.url, event.detail.featureCollection));
            });
            this.#gc.$on("optionsvisibilitychange", (event) => {
                this.fire(new OptionsVisibilityChangeEvent(this, event.detail.optionsVisible));
            });
            this.#gc.$on("reversetoggle", (event) => {
                this.fire(new ReverseToggleEvent(this, event.detail.reverse));
            });
            this.#gc.$on("querychange", (event) => {
                this.fire(new QueryChangeEvent(this, event.detail.query));
            });
            return div;
        }
        on(type, listener) {
            return super.on(type, listener);
        }
        once(type, listener) {
            return super.once(type, listener);
        }
        off(type, listener) {
            return super.off(type, listener);
        }
        listens(type) {
            return super.listens(type);
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
    }
    const events = {
        SelectEvent,
        FeaturesListedEvent,
        FeaturesMarkedEvent,
        OptionsVisibilityChangeEvent,
        PickEvent,
        QueryChangeEvent,
        ResponseEvent,
        ReverseToggleEvent,
    };
    return {
        MapLibreBasedGeocodingControl,
        events,
    };
}
