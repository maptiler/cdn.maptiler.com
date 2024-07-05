import { Control } from "ol/control";
import BaseEvent from "ol/events/Event";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import { createOpenLayersMapController } from "./openlayers-controller";
export { createOpenLayersMapController } from "./openlayers-controller";
export class GeocodingControl extends Control {
    #gc;
    #options;
    constructor(options) {
        const div = document.createElement("div");
        div.className = "ol-search";
        super({
            element: div,
            target: options.target,
        });
        const { flyTo, fullGeometryStyle, ...restOptions } = options;
        this.#gc = new GeocodingControlComponent({
            target: div,
            props: {
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
            this.#gc.$on(eventName, (event) => {
                switch (eventName) {
                    case "select":
                        this.dispatchEvent(new SelectEvent(event.detail));
                        break;
                    case "featuresListed":
                        this.dispatchEvent(new FeaturesListedEvent(event.detail));
                        break;
                    case "featuresMarked":
                        this.dispatchEvent(new FeaturesMarkedEvent(event.detail));
                        break;
                    case "optionsVisibilityChange":
                        this.dispatchEvent(new OptionsVisibilityChangeEvent(event.detail));
                        break;
                    case "pick":
                        this.dispatchEvent(new PickEvent(event.detail));
                        break;
                    case "queryChange":
                        this.dispatchEvent(new QueryChangeEvent(event.detail));
                        break;
                    case "response":
                        this.dispatchEvent(new ResponseEvent(event.detail.url, event.detail.featureCollection));
                        break;
                    case "reverseToggle":
                        this.dispatchEvent(new ReverseToggleEvent(event.detail));
                        break;
                }
            });
        }
        this.#options = options;
    }
    setMap(map) {
        super.setMap(map);
        if (map) {
            const { 
            // marker,
            // showResultMarkers,
            flyTo, fullGeometryStyle, } = this.#options;
            const mapController = createOpenLayersMapController(map, typeof flyTo === "boolean" ? undefined : flyTo, typeof flyTo === "boolean" ? undefined : flyTo, 
            // marker,
            // showResultMarkers,
            fullGeometryStyle);
            this.#gc?.$set({ mapController });
        }
    }
    setOptions(options) {
        this.#options = options;
        const { flyTo, fullGeometryStyle, ...restOptions } = this.#options;
        this.#gc?.$set({
            ...restOptions,
            flyTo: flyTo === undefined ? true : !!flyTo,
        });
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
}
export class SelectEvent extends BaseEvent {
    feature;
    constructor(feature) {
        super("select");
        this.feature = feature;
    }
}
export class FeaturesListedEvent extends BaseEvent {
    features;
    constructor(features) {
        super("featuresListed");
        this.features = features;
    }
}
export class FeaturesMarkedEvent extends BaseEvent {
    features;
    constructor(features) {
        super("featuresMarked");
        this.features = features;
    }
}
export class OptionsVisibilityChangeEvent extends BaseEvent {
    optionsVisible;
    constructor(optionsVisible) {
        super("optionsVisibilityChange");
        this.optionsVisible = optionsVisible;
    }
}
export class PickEvent extends BaseEvent {
    feature;
    constructor(feature) {
        super("pick");
        this.feature = feature;
    }
}
export class QueryChangeEvent extends BaseEvent {
    query;
    constructor(query) {
        super("queryChange");
        this.query = query;
    }
}
export class ResponseEvent extends BaseEvent {
    url;
    featureCollection;
    constructor(url, featureCollection) {
        super("response");
        this.url = url;
        this.featureCollection = featureCollection;
    }
}
export class ReverseToggleEvent extends BaseEvent {
    reverse;
    constructor(reverse) {
        super("reverseToggle");
        this.reverse = reverse;
    }
}
