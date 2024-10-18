import * as L from "leaflet";
import type { ControlOptions, Feature } from "./types";
export { createLeafletMapController } from "./leaflet-controller";
type LeafletControlOptions = ControlOptions & L.ControlOptions & {
    /**
     * Marker to be added to the map at the location of the user-selected result using a default set of Marker options.
     *
     * - If `true` or `undefined` then a default marker will be used.\
     * - If the value is [MarkerOptions](https://leafletjs.com/reference.html#marker-option) then the marker will be constructed using these options.
     * - If the value is a function then it can create and configure custom [Marker](https://leafletjs.com/reference.html#marker),
     *     add it to the [Map](https://leafletjs.com/reference.html#map) and return it.
     *   Function accepts [Map](https://leafletjs.com/reference.html#map) and `Feature` as parameters.
     *   Feature is `undefined` for the reverse location marker.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Default value is `true`.
     */
    marker?: null | boolean | L.MarkerOptions | ((map: L.Map, feature?: Feature) => L.Marker | undefined | null);
    /**
     * Marker be added to the map at the location the geocoding results.
     *
     * - If `true` or `undefined` then a default marker will be used.
     * - If the value is [MarkerOptions](https://leafletjs.com/reference.html#marker-option) then the marker will be constructed using these options.
     * - If the value is a function then it can create and configure custom [Marker](https://leafletjs.com/reference.html#marker),
     *     add it to the [Map](https://leafletjs.com/reference.html#map) and return it.
     *   In this case the default pop-up won't be added to the marker.
     *   Function accepts [Map](https://leafletjs.com/reference.html#map) and `Feature` as parameters.
     * - If `false` or `null` then no marker will be added to the map.
     *
     * Default value is `true`.
     */
    showResultMarkers?: null | boolean | L.MarkerOptions | ((map: L.Map, feature: Feature) => L.Marker | undefined | null);
    /**
     * Animation to selected feature on the map.
     *
     * - If `false` or `null` then animating the map to a selected result is disabled.
     * - If `true` or `undefined` then animating the map will use the default animation parameters.
     * - If an [ZoomPanOptions](https://leafletjs.com/reference.html#zoom/pan-options)
     *     ` & `[FitBoundsOptions](https://leafletjs.com/reference.html#fitbounds-options) then it will be passed as options
     *     to the map [flyTo](https://leafletjs.com/reference.html#map-flyto)
     *     or [fitBounds](https://leafletjs.com/reference.html#map-fitbounds) method providing control over the animation of the transition.
     *
     * Default value is `true`.
     */
    flyTo?: null | boolean | (L.ZoomPanOptions & L.FitBoundsOptions);
    /**
     * Style for the full feature geometry.
     *
     * - If `false` or `null` then no full geometry is drawn.
     * - If `true` or `undefined` then default-styled full geometry is drawn.
     * - If an [PathOptions](https://leafletjs.com/reference.html#path-option) then it will be used to style the full geometry.
     * - If a function accepting a `Feature` and returning [PathOptions](https://leafletjs.com/reference.html#path-option)
     *     then it must teturn the style and will be used to style the full geometry.
     */
    fullGeometryStyle?: null | boolean | L.PathOptions | L.StyleFunction;
};
/**
 * Leaflet mixins https://leafletjs.com/reference.html#class
 * for TypeScript https://www.typescriptlang.org/docs/handbook/mixins.html
 * @internal
 */
declare class EventedControl {
    constructor(...args: unknown[]);
}
interface EventedControl extends L.Control, L.Evented {
}
export declare class GeocodingControl extends EventedControl {
    #private;
    constructor(options: LeafletControlOptions);
    onAdd(map: L.Map): HTMLDivElement;
    setOptions(options: LeafletControlOptions): void;
    setQuery(value: string, submit?: boolean): void;
    clearMap(): void;
    clearList(): void;
    focus(): void;
    blur(): void;
    onRemove(): void;
}
