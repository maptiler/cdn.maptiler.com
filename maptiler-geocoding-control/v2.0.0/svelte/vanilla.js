import GeocodingControlComponent from "./GeocodingControl.svelte";
const finalizationRegistry = new FinalizationRegistry((gc) => {
    gc.$destroy();
});
export class GeocodingControl extends EventTarget {
    #gc;
    constructor({ target, ...options }) {
        super();
        this.#gc = new GeocodingControlComponent({
            target,
            props: options,
        });
        for (const eventName of [
            "select",
            "pick",
            "featureslisted",
            "featuresmarked",
            "response",
            "optionsvisibilitychange",
            "reversetoggle",
            "querychange",
        ]) {
            this.#gc.$on(eventName, (event) => {
                // Use the new `emit` method for type-safe dispatching
                this.#emit(eventName, event.detail);
            });
        }
        this.#gc.$on("select", (event) => {
            const geocodingEvent = new CustomEvent(event.type, {
                detail: event.detail,
            });
            this.dispatchEvent(geocodingEvent);
        });
        finalizationRegistry.register(this, this.#gc);
    }
    setOptions(options) {
        this.#gc.$set(options);
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
    addEventListener(type, callback, options) {
        super.addEventListener(type, callback, options);
    }
    removeEventListener(type, callback, options) {
        super.removeEventListener(type, callback, options);
    }
    dispatchEvent(event) {
        return super.dispatchEvent(event);
    }
    #emit(type, detail) {
        return super.dispatchEvent(new CustomEvent(type, {
            detail,
        }));
    }
}
