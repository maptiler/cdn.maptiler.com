import { SvelteComponentTyped } from "svelte";
import type { Feature, MapController, Proximity } from "./types";
declare const __propDef: {
    props: {
        class?: string | undefined;
        apiKey: string;
        bbox?: [number, number, number, number] | undefined;
        clearButtonTitle?: string | undefined;
        clearOnBlur?: boolean | undefined;
        collapsed?: boolean | undefined;
        country?: string | string[] | undefined;
        debounceSearch?: number | undefined;
        enableReverse?: boolean | "always" | undefined;
        errorMessage?: string | undefined;
        filter?: ((feature: Feature) => boolean) | undefined;
        flyTo?: boolean | undefined;
        fuzzyMatch?: boolean | undefined;
        language?: string | string[] | undefined;
        limit?: number | undefined;
        mapController?: MapController | undefined;
        minLength?: number | undefined;
        noResultsMessage?: string | undefined;
        placeholder?: string | undefined;
        proximity?: Proximity;
        reverseActive?: boolean | undefined;
        reverseButtonTitle?: string | undefined;
        searchValue?: string | undefined;
        showFullGeometry?: boolean | undefined;
        showPlaceType?: false | "always" | "ifNeeded" | undefined;
        showResultsWhileTyping?: boolean | undefined;
        trackProximity?: boolean | undefined;
        types?: string[] | undefined;
        zoom?: number | undefined;
        maxZoom?: number | undefined;
        apiUrl?: string | undefined;
        fetchParameters?: RequestInit | undefined;
        iconsBaseUrl?: string | undefined;
        focus?: (() => void) | undefined;
        blur?: (() => void) | undefined;
        setQuery?: ((value: string, submit?: boolean) => void) | undefined;
    };
    events: {
        select: CustomEvent<any>;
        pick: CustomEvent<any>;
        optionsVisibilityChange: CustomEvent<any>;
        featuresListed: CustomEvent<any>;
        featuresMarked: CustomEvent<any>;
        reverseToggle: CustomEvent<any>;
        queryChange: CustomEvent<any>;
        response: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GeocodingControlProps = typeof __propDef.props;
export type GeocodingControlEvents = typeof __propDef.events;
export type GeocodingControlSlots = typeof __propDef.slots;
export default class GeocodingControl extends SvelteComponentTyped<GeocodingControlProps, GeocodingControlEvents, GeocodingControlSlots> {
    get focus(): () => void;
    get blur(): () => void;
    get setQuery(): (value: string, submit?: boolean) => void;
}
export {};
