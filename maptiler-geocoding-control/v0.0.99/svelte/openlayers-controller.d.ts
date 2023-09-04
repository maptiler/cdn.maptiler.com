import type Map from "ol/Map";
import type { AnimationOptions, FitOptions } from "ol/View";
import { type StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { Feature as FeatureType, MapEvent } from "./types";
export declare function createOpenLayersMapController(map: Map, flyToOptions?: AnimationOptions, flyToBounds?: FitOptions, fullGeometryStyle?: StyleLike | FlatStyleLike): {
    setEventHandler(handler: ((e: MapEvent) => void) | undefined): void;
    flyTo(center: [number, number], zoom: number): void;
    fitBounds(bbox: [number, number, number, number], padding: number, maxZoom: number): void;
    indicateReverse(reverse: boolean): void;
    setReverseMarker(coordinates?: [number, number]): void;
    setMarkers(markedFeatures: FeatureType[] | undefined, picked: FeatureType | undefined): void;
    setSelectedMarker(index: number): void;
};
