import type * as maplibregl from "maplibre-gl";
import type { FillLayerSpecification, FitBoundsOptions, FlyToOptions, LineLayerSpecification, Map } from "maplibre-gl";
import type { MapController } from "./types.js";
type MapLibreGL = Pick<typeof maplibregl, "Marker" | "Popup">;
export declare function createMapLibreGlMapController(map: Map, maplibregl?: MapLibreGL | undefined, marker?: boolean | maplibregl.MarkerOptions, showResultMarkers?: boolean | maplibregl.MarkerOptions, flyToOptions?: FlyToOptions, fitBoundsOptions?: FitBoundsOptions, fullGeometryStyle?: undefined | {
    fill?: Pick<FillLayerSpecification, "layout" | "paint" | "filter">;
    line?: Pick<LineLayerSpecification, "layout" | "paint" | "filter">;
}): MapController;
export {};
