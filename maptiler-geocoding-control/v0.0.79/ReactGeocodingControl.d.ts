/// <reference types="react" />
import type { ControlOptions, Feature, MapController } from "./types";
type CallbackProperties = {
    onSelect?: (feature: Feature | undefined) => void;
    onPick?: (feature: Feature | undefined) => void;
    onOptionsVisibilityChange?: (visible: boolean) => void;
    onFeaturesListed?: (visible: Feature[] | undefined) => void;
    onFeaturesMarked?: (visible: Feature[] | undefined) => void;
    onResponse?: (onResponse: {
        url: string;
        response: Response;
    }) => void;
    onReversetoggle?: (reverse: boolean) => void;
    onQuerychange?: (query: string) => void;
};
type MapControllerProp = {
    mapController?: MapController;
};
export type Props = ControlOptions & CallbackProperties & MapControllerProp;
export type Methods = {
    blur: () => void;
    focus: () => void;
    setQuery: (value: string, submit?: boolean) => void;
};
declare const ReactGeocodingControl: import("react").ForwardRefExoticComponent<ControlOptions & CallbackProperties & MapControllerProp & import("react").RefAttributes<Methods>>;
export { ReactGeocodingControl as GeocodingControl };
