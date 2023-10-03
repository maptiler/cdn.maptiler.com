import * as L from "leaflet";
import type { Feature, MapEvent } from "./types";
export declare function createLeafletMapController(map: L.Map, marker?: boolean | L.MarkerOptions, showResultMarkers?: boolean | L.MarkerOptions, flyToOptions?: L.ZoomPanOptions, flyToBounds?: L.FitBoundsOptions, fullGeometryStyle?: L.PathOptions | L.StyleFunction): {
    setEventHandler(handler: ((e: MapEvent) => void) | undefined): void;
    flyTo(center: [number, number], zoom: number): void;
    fitBounds(bbox: [number, number, number, number], padding: number, maxZoom: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: [number, number]): void;
    setMarkers(markedFeatures: Feature[] | undefined, picked: Feature | undefined): void;
    setSelectedMarker(index: number): void;
};
