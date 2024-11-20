import { SvelteComponent } from "svelte";
import type { Feature, ShowPlaceType } from "./types";
declare const __propDef: {
    props: {
        feature: Feature;
        selected?: boolean;
        showPlaceType: ShowPlaceType;
        missingIconsCache: Set<string>;
        iconsBaseUrl: string;
    };
    events: {
        mouseenter: MouseEvent;
        focus: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type FeatureItemProps = typeof __propDef.props;
export type FeatureItemEvents = typeof __propDef.events;
export type FeatureItemSlots = typeof __propDef.slots;
export default class FeatureItem extends SvelteComponent<FeatureItemProps, FeatureItemEvents, FeatureItemSlots> {
}
export {};
