import type { ControlOptions, DispatcherType, MapController } from "./types";
type Options = ControlOptions & {
    mapController?: MapController;
};
interface GeocodingControlEvent<T> extends CustomEvent<T> {
    readonly target: GeocodingControl;
    readonly currentTarget: GeocodingControl;
}
type CustomEventListenerOrEventListenerObject<K extends keyof CustomEventMap> = ((evt: CustomEventMap[K]) => void) | {
    handleEvent(object: CustomEventMap[K]): void;
};
type CustomEventMap = {
    [T in keyof DispatcherType]: GeocodingControlEvent<DispatcherType[T]>;
};
export declare class GeocodingControl extends EventTarget {
    #private;
    constructor({ target, ...options }: Options & {
        target: HTMLElement;
    });
    setOptions(options: Partial<Options>): void;
    setQuery(value: string, submit?: boolean): void;
    clearMap(): void;
    clearList(): void;
    focus(): void;
    blur(): void;
    addEventListener<K extends keyof CustomEventMap>(type: K, callback: CustomEventListenerOrEventListenerObject<K> | null, options?: AddEventListenerOptions | boolean): void;
    removeEventListener<K extends keyof CustomEventMap>(type: K, callback: CustomEventListenerOrEventListenerObject<K> | null, options?: EventListenerOptions | boolean): void;
    dispatchEvent<K extends keyof CustomEventMap>(event: CustomEventMap[K]): boolean;
}
export {};
