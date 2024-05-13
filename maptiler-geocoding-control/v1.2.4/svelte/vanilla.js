import GC from "./GeocodingControl.svelte";
const finalizationRegistry = new FinalizationRegistry((gc) => {
    gc.$destroy();
});
export class GeocodingControl extends EventTarget {
    #gc;
    constructor({ target, ...options }) {
        super();
        this.#gc = new GC({
            target,
            props: options,
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
            this.#gc.$on(eventName, (event) => this.dispatchEvent(event));
        }
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
}
