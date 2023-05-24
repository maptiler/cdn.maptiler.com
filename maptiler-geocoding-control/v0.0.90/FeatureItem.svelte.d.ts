import { SvelteComponentTyped } from "svelte";
import type { Feature } from "./types";
declare const __propDef: {
    props: {
        feature: Feature;
        selected?: boolean | undefined;
        showPlaceType?: boolean | undefined;
    };
    events: {
        mouseenter: MouseEvent;
        focus: FocusEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FeatureItemProps = typeof __propDef.props;
export type FeatureItemEvents = typeof __propDef.events;
export type FeatureItemSlots = typeof __propDef.slots;
export default class FeatureItem extends SvelteComponentTyped<FeatureItemProps, FeatureItemEvents, FeatureItemSlots> {
}
export {};
