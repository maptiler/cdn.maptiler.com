import type { Map } from "maplibre-gl";
import * as maplibregl from "maplibre-gl";
import { type MapLibreBaseControlOptions } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
type Options = MapLibreBaseControlOptions & {
    /**
     * Maptiler API key. Optional if used with MapTiler SDK.
     */
    apiKey: string;
};
declare const Base: {
    new <T extends MapLibreBaseControlOptions>(options?: T): {
        "__#1@#gc"?: import("./GeocodingControl.svelte").default;
        "__#1@#options": T;
        onAddInt(map: Map): HTMLElement;
        setOptions(options: T): void;
        setQuery(value: string, submit?: boolean): void;
        clearMap(): void;
        clearList(): void;
        setReverseMode(value: boolean): void;
        focus(): void;
        blur(): void;
        onRemove(): void;
        _listeners: maplibregl.Listeners;
        _oneTimeListeners: maplibregl.Listeners;
        _eventedParent: maplibregl.Evented;
        _eventedParentData: any | (() => any);
        on(type: string, listener: maplibregl.Listener): any;
        off(type: string, listener: maplibregl.Listener): any;
        once(type: string, listener?: maplibregl.Listener): Promise<any> | any;
        fire(event: {
            readonly type: string;
        } | string, properties?: any): any;
        listens(type: string): boolean;
        setEventedParent(parent?: maplibregl.Evented | null, data?: any | (() => any)): any;
    };
};
export declare class GeocodingControl extends Base<Options> implements maplibregl.IControl {
    onAdd(map: Map): HTMLElement;
}
