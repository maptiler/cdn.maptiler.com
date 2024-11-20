import type { Map } from "ol";
import type { ObjectEvent } from "ol/Object";
import type { CombinedOnSignature, EventTypes } from "ol/Observable";
import type { AnimationOptions, FitOptions } from "ol/View";
import { Control } from "ol/control";
import type { Options } from "ol/control/Control";
import type { EventsKey } from "ol/events";
import BaseEvent from "ol/events/Event";
import type { StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { ControlOptions, Feature, FeatureCollection } from "./types";
export { createOpenLayersMapController } from "./openlayers-controller";
type OpenLayersControlOptions = ControlOptions & Options & {
    flyTo?: boolean | (AnimationOptions & FitOptions);
    fullGeometryStyle?: StyleLike | FlatStyleLike;
};
type CustomEventMap = {
    select: SelectEvent;
    featureslisted: FeaturesListedEvent;
    featuresmarked: FeaturesMarkedEvent;
    optionsvisibilitychange: OptionsVisibilityChangeEvent;
    pick: PickEvent;
    querychange: QueryChangeEvent;
    response: ResponseEvent;
    reversetoggle: ReverseToggleEvent;
};
type CustomObjectOnSignature<ReturnType> = {
    <K extends keyof CustomEventMap>(type: K, listener: (evt: CustomEventMap[K]) => void): ReturnType;
} & {
    (type: "propertychange", listener: (evt: ObjectEvent) => void): ReturnType;
} & CombinedOnSignature<EventTypes | "propertychange" | keyof CustomEventMap, ReturnType>;
export declare class GeocodingControl extends Control {
    #private;
    on: CustomObjectOnSignature<EventsKey>;
    once: CustomObjectOnSignature<EventsKey>;
    un: CustomObjectOnSignature<EventsKey>;
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
