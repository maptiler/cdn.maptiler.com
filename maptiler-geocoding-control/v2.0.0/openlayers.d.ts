import type { Map } from "ol";
import type { AnimationOptions, FitOptions } from "ol/View";
import { Control } from "ol/control";
import type { Options } from "ol/control/Control";
import BaseEvent from "ol/events/Event";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { ControlOptions, Feature, FeatureCollection } from "./types";
export { createOpenLayersMapController } from "./openlayers-controller";
type OpenLayersControlOptions = ControlOptions & Options & {
    flyTo?: boolean | (AnimationOptions & FitOptions);
    fullGeometryStyle?: StyleLike | FlatStyleLike;
};
export declare class GeocodingControl extends Control {
    #private;
    constructor(options: OpenLayersControlOptions);
    setMap(map: Map | null): void;
    setOptions(options: OpenLayersControlOptions): void;
    setQuery(value: string, submit?: boolean): void;
    clearMap(): void;
    clearList(): void;
    focus(): void;
    blur(): void;
}
export declare class SelectEvent extends BaseEvent {
    feature: Feature | undefined;
    constructor(feature: Feature | undefined);
}
export declare class FeaturesListedEvent extends BaseEvent {
    features: Feature[] | undefined;
    constructor(features: Feature[] | undefined);
}
export declare class FeaturesMarkedEvent extends BaseEvent {
    features: Feature[] | undefined;
    constructor(features: Feature[] | undefined);
}
export declare class OptionsVisibilityChangeEvent extends BaseEvent {
    optionsVisible: boolean;
    constructor(optionsVisible: boolean);
}
export declare class PickEvent extends BaseEvent {
    feature: Feature | undefined;
    constructor(feature: Feature | undefined);
}
export declare class QueryChangeEvent extends BaseEvent {
    query: string;
    constructor(query: string);
}
export declare class ResponseEvent extends BaseEvent {
    url: string;
    featureCollection: FeatureCollection;
    constructor(url: string, featureCollection: FeatureCollection);
}
export declare class ReverseToggleEvent extends BaseEvent {
    reverse: boolean;
    constructor(reverse: boolean);
}
