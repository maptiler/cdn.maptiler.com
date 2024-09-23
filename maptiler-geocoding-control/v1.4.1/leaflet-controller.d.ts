import * as L from "leaflet";
import type { BBox, Feature, MapEvent, Position } from "./types";
export declare function createLeafletMapController(map: L.Map, marker?: boolean | L.MarkerOptions, showResultMarkers?: boolean | L.MarkerOptions, flyToOptions?: L.ZoomPanOptions, flyToBounds?: L.FitBoundsOptions, fullGeometryStyle?: L.PathOptions | L.StyleFunction): {
    setEventHandler(handler: undefined | ((e: MapEvent) => void)): void;
    flyTo(center: Position, zoom?: number): void;
    fitBounds(bbox: BBox, padding: number, maxZoom?: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: Position): void;
    setMarkers(markedFeatures: Feature[] | undefined, picked: Feature | undefined): void;
    setSelectedMarker(index: number): void;
    getCenterAndZoom(): [number, number, number];
};
