import type { Map, IControl, MarkerOptions, FlyToOptions, FitBoundsOptions, FillLayerSpecification, LineLayerSpecification } from "maplibre-gl";
import type maplibregl from "maplibre-gl";
import type { ControlOptions } from "./types";
export { createMaplibreglMapController } from "./maplibreglMapController";
type MapLibreGL = typeof maplibregl;
type MapLibreControlOptions = ControlOptions & {
    /**
     * A Maplibre GL instance to use when creating [Markers](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker).
     * Required if `options.marker` is `true`.
     */
    maplibregl?: MapLibreGL;
    /**
     * If `true`, a [Marker](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) will be added to the map at the location of the user-selected result using a default set of Marker options.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Requires that `options.maplibregl` also be set.
     *
     * @default true
     */
    marker?: boolean | MarkerOptions;
    /**
     * If `true`, [Markers](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) will be added to the map at the location the top results for the query.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Requires that `options.maplibregl` also be set.
     *
     * @default true
     */
    showResultMarkers?: boolean | MarkerOptions;
    /**
     * If `false`, animating the map to a selected result is disabled.
     * If `true`, animating the map will use the default animation parameters.
     * If an object, it will be passed as options to the map `flyTo` or `fitBounds` method providing control over the animation of the transition.
     *
     * @default true
     */
    flyTo?: boolean | (FlyToOptions & FitBoundsOptions);
    /**
     * Style for full feature geometry GeoJSON.
     */
    fullGeometryStyle?: {
        fill: Pick<FillLayerSpecification, "layout" | "paint" | "filter">;
        line: Pick<LineLayerSpecification, "layout" | "paint" | "filter">;
    };
};
export declare class GeocodingControl extends EventTarget implements IControl {
    #private;
    constructor(options: MapLibreControlOptions);
    onAdd(map: Map): HTMLDivElement;
    setOptions(options: MapLibreControlOptions): void;
    setQuery(value: string, submit?: boolean | "always"): void;
    setReverseMode(value: boolean): void;
    focus(): void;
    blur(): void;
    onRemove(): void;
}
