import type * as maplibregl from "maplibre-gl";
import type { FillLayerSpecification, FitBoundsOptions, FlyToOptions, LineLayerSpecification, Map, MarkerOptions } from "maplibre-gl";
import type { SvelteComponent } from "svelte";
import GeocodingControlComponent from "./GeocodingControl.svelte";
import type { ControlOptions } from "./types";
export { createMapLibreGlMapController } from "./maplibregl-controller";
export type MapLibreBaseControlOptions = Omit<ControlOptions, "apiKey"> & {
    /**
     * If `true`, a [Marker](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) will be added to the map at the location of the user-selected result using a default set of Marker options.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Requires that `options.maplibregl` also be set.
     * Default value is `true`.
     */
    marker?: boolean | MarkerOptions;
    /**
     * If `true`, [Markers](https://maplibre.org/maplibre-gl-js-docs/api/markers/#marker) will be added to the map at the location the top results for the query.
     * If the value is an object, the marker will be constructed using these options.
     * If `false`, no marker will be added to the map.
     * Requires that `options.maplibregl` also be set.
     * Default value is `true`.
     */
    showResultMarkers?: boolean | MarkerOptions;
    /**
     * If `false`, animating the map to a selected result is disabled.
     * If `true`, animating the map will use the default animation parameters.
     * If an object, it will be passed as options to the map `flyTo` or `fitBounds` method providing control over the animation of the transition.
     * Default value is `true`.
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
export type Props<T> = T extends SvelteComponent<infer P> ? P : never;
export declare abstract class MapLibreBasedGeocodingControl<T extends MapLibreBaseControlOptions> extends EventTarget {
    #private;
    constructor(options?: T);
    abstract getExtraProps(map: Map, div: HTMLElement): Partial<Props<GeocodingControlComponent>>;
    onAddInt(map: Map): HTMLElement;
    abstract getMapLibreGl(): typeof maplibregl;
    setOptions(options: T): void;
    setQuery(value: string, submit?: boolean): void;
    clearMap(): void;
    clearList(): void;
    setReverseMode(value: boolean): void;
    focus(): void;
    blur(): void;
    onRemove(): void;
}
