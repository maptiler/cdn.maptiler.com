import type Map from "ol/Map";
import type { AnimationOptions, FitOptions } from "ol/View";
import { type StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { BBox, Feature as FeatureType, MapEvent, Position } from "./types";
export declare function createOpenLayersMapController(map: Map, flyToOptions?: AnimationOptions, flyToBounds?: FitOptions, fullGeometryStyle?: StyleLike | FlatStyleLike): {
    setEventHandler(handler: ((e: MapEvent) => void) | undefined): void;
    flyTo(center: Position, zoom: number): void;
    fitBounds(bbox: BBox, padding: number, maxZoom: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: Position): void;
    setMarkers(markedFeatures: FeatureType[] | undefined, picked: FeatureType | undefined): void;
    setSelectedMarker(index: number): void;
    getCenterAndZoom(): [number, x: number, y: number] | undefined;
};
