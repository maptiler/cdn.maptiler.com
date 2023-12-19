import * as L from "leaflet";
import type { ControlOptions } from "./types";
export { createLeafletMapController } from "./leaflet-controller";
type LeafletControlOptions = ControlOptions & L.ControlOptions & {
    /**
     * If `true`, a [Marker](https://leafletjs.com/reference.html#marker) will be added to the map at the location of the user-selected result using a default set of Marker options.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Default value is `true`.
     */
    marker?: boolean | L.MarkerOptions;
    /**
     * If `true`, [Markers](https://leafletjs.com/reference.html#marker) will be added to the map at the location the top results for the query.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Default value is `true`.
     */
    showResultMarkers?: boolean | L.MarkerOptions;
    /**
     * If `false`, animating the map to a selected result is disabled.
     * If `true`, animating the map will use the default animation parameters.
     * If an object, it will be passed as options to the map `flyTo` or `fitBounds` method providing control over the animation of the transition.
     * Default value is `true`.
     */
    flyTo?: boolean | (L.ZoomPanOptions & L.FitBoundsOptions);
    /**
     * Style for full feature geometry GeoJSON.
     */
    fullGeometryStyle?: L.PathOptions | L.StyleFunction;
};
export declare class GeocodingControl extends L.Control {
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
