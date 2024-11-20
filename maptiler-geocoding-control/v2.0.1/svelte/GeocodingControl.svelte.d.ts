import { SvelteComponent } from "svelte";
import type { BBox, EnableReverse, Feature, FeatureCollection, MapController, PickedResultStyle, ProximityRule, ShowPlaceType } from "./types";
declare const __propDef: {
    props: {
        ZOOM_DEFAULTS?: Record<string, number>;
        class?: string | undefined;
        apiKey: string;
        bbox?: BBox | undefined;
        clearButtonTitle?: string;
        clearOnBlur?: boolean;
        collapsed?: boolean;
        country?: string | string[] | undefined;
        debounceSearch?: number;
        enableReverse?: EnableReverse;
        errorMessage?: string;
        filter?: (feature: Feature) => boolean;
        flyTo?: boolean;
        fuzzyMatch?: boolean;
        language?: string | string[] | null | undefined;
        limit?: number | undefined;
        mapController?: MapController | undefined;
        minLength?: number;
        noResultsMessage?: string;
        placeholder?: string;
        proximity?: ProximityRule[] | null | undefined;
        reverseActive?: boolean;
        reverseButtonTitle?: string;
        searchValue?: string;
        pickedResultStyle?: PickedResultStyle;
        showPlaceType?: ShowPlaceType;
        showResultsWhileTyping?: boolean;
        selectFirst?: boolean;
        flyToSelected?: boolean;
        markerOnSelected?: boolean;
        types?: string[] | undefined;
        exhaustiveReverseGeocoding?: boolean;
        excludeTypes?: boolean;
        zoom?: Record<string, number>;
        apiUrl?: string;
        fetchParameters?: RequestInit;
        iconsBaseUrl?: string;
        adjustUrlQuery?: (sp: URLSearchParams) => void;
        focus?: () => void;
        blur?: () => void;
        setQuery?: (value: string, submit?: boolean, reverse?: boolean) => void;
        clearList?: () => void;
        clearMap?: () => void;
    };
    events: {
        featureslisted: CustomEvent<{
            features: Feature[] | undefined;
        }>;
        featuresmarked: CustomEvent<{
            features: Feature[] | undefined;
        }>;
        optionsvisibilitychange: CustomEvent<{
            optionsVisible: boolean;
        }>;
        pick: CustomEvent<{
            feature: Feature | undefined;
        }>;
        querychange: CustomEvent<{
            query: string;
        }>;
        response: CustomEvent<{
            url: string;
            featureCollection: FeatureCollection;
        }>;
        reversetoggle: CustomEvent<{
            reverse: boolean;
        }>;
        select: CustomEvent<{
            feature: Feature | undefined;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type GeocodingControlProps = typeof __propDef.props;
export type GeocodingControlEvents = typeof __propDef.events;
export type GeocodingControlSlots = typeof __propDef.slots;
export default class GeocodingControl extends SvelteComponent<GeocodingControlProps, GeocodingControlEvents, GeocodingControlSlots> {
    get ZOOM_DEFAULTS(): Record<string, number>;
    get focus(): () => void;
    get blur(): () => void;
    get setQuery(): (value: string, submit?: boolean, reverse?: boolean) => void;
    get clearList(): () => void;
    get clearMap(): () => void;
}
export {};
