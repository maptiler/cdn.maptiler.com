import type MapLibreGL from "maplibre-gl";
import type { FitBoundsOptions, Map, FlyToOptions, FillLayerSpecification, LineLayerSpecification } from "maplibre-gl";
import type { MapController } from "./types.js";
export declare function createMaplibreglMapController(map: Map, maplibregl?: typeof MapLibreGL | undefined, marker?: boolean | maplibregl.MarkerOptions, showResultMarkers?: boolean | maplibregl.MarkerOptions, flyToOptions?: FlyToOptions, fitBoundsOptions?: FitBoundsOptions, fullGeometryStyle?: undefined | {
    fill?: Pick<FillLayerSpecification, "layout" | "paint" | "filter">;
    line?: Pick<LineLayerSpecification, "layout" | "paint" | "filter">;
}): MapController;
