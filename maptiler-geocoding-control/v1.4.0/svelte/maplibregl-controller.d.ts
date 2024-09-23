import type * as maplibregl from "maplibre-gl";
import type { FillLayerSpecification, FitBoundsOptions, FlyToOptions, LineLayerSpecification, Map } from "maplibre-gl";
import type { BBox, Position } from "./types";
import type { Feature, MapEvent } from "./types.js";
type MapLibreGL = Pick<typeof maplibregl, "Marker" | "Popup">;
export declare function createMapLibreGlMapController(map: Map, maplibregl?: MapLibreGL | undefined, marker?: boolean | maplibregl.MarkerOptions, showResultMarkers?: boolean | maplibregl.MarkerOptions, flyToOptions?: FlyToOptions, fitBoundsOptions?: FitBoundsOptions, fullGeometryStyle?: undefined | {
    fill?: Pick<FillLayerSpecification, "layout" | "paint" | "filter">;
    line?: Pick<LineLayerSpecification, "layout" | "paint" | "filter">;
}): {
    setEventHandler(handler: undefined | ((e: MapEvent) => void)): void;
    flyTo(center: Position, zoom?: number): void;
    fitBounds(bbox: BBox, padding: number, maxZoom?: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: Position): void;
    setMarkers(markedFeatures: Feature[] | undefined, picked: Feature | undefined): void;
    setSelectedMarker(index: number): void;
    getCenterAndZoom(): [number, number, number];
};
export {};
