import type { ControlOptions, MapController } from "./types";
type Options = ControlOptions & {
    mapController?: MapController;
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
}
export {};
