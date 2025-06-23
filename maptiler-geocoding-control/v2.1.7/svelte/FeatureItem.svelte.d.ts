import type { Feature, ShowPlaceType } from "./types";
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
declare const FeatureItem: $$__sveltets_2_IsomorphicComponent<{
    feature: Feature;
    style?: "selected" | "picked" | "default";
    showPlaceType: ShowPlaceType;
    missingIconsCache: Set<string>;
    iconsBaseUrl: string;
}, {
    mouseenter: MouseEvent;
    select: CustomEvent<undefined>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type FeatureItem = InstanceType<typeof FeatureItem>;
export default FeatureItem;
