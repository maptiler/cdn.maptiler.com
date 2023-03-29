import * as L from "leaflet";
import type { MapController } from "./types";
export declare function createLeafletMapController(map: L.Map, marker?: boolean | L.MarkerOptions, showResultMarkers?: boolean | L.MarkerOptions, flyToOptions?: L.ZoomPanOptions, flyToBounds?: L.FitBoundsOptions, fullGeometryStyle?: L.PathOptions | L.StyleFunction): MapController;
