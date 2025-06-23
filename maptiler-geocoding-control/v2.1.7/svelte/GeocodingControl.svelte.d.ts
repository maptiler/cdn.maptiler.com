import type { BBox, EnableReverse, Feature, FeatureCollection, MapController, PickedResultStyle, ProximityRule, ShowPlaceType, TypeRule } from "./types";
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const GeocodingControl: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    ZOOM_DEFAULTS?: Record<string, number>;
    class?: string | undefined;
    apiKey: string | undefined;
    bbox?: BBox | undefined;
    clearButtonTitle?: string;
    clearOnBlur?: boolean;
    clearListOnPick?: boolean;
    keepListOpen?: boolean;
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
    reverseGeocodingLimit?: number | undefined;
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
    types?: TypeRule[] | undefined;
    reverseGeocodingTypes?: TypeRule[] | undefined;
    exhaustiveReverseGeocoding?: boolean;
    excludeTypes?: boolean;
    reverseGeocodingExcludeTypes?: boolean | undefined;
    zoom?: Record<string, number>;
    apiUrl?: string;
    fetchParameters?: RequestInit;
    iconsBaseUrl?: string;
    /**
       * @deprecated use `adjustUrl`
       */ adjustUrlQuery?: (sp: URLSearchParams) => void;
    /**
       * Adjust geocoding URL before the fetch.
       */ adjustUrl?: (url: URL) => void;
    focus?: (options?: FocusOptions) => void;
    blur?: () => void;
    setQuery?: (value: string, submit?: boolean, reverse?: boolean) => void;
    clearList?: () => void;
    clearMap?: () => void;
}, {
    default: {};
}>, {
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
}, {
    default: {};
}, {
    ZOOM_DEFAULTS: Record<string, number>;
    focus: (options?: FocusOptions) => void;
    blur: () => void;
    setQuery: (value: string, submit?: boolean, reverse?: boolean) => void;
    clearList: () => void;
    clearMap: () => void;
}, string>;
type GeocodingControl = InstanceType<typeof GeocodingControl>;
export default GeocodingControl;
