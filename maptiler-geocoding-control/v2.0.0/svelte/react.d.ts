import type { ControlOptions, DispatcherTypeCC, MapController } from "./types";
type EventNames = keyof DispatcherTypeCC;
type EventHandlerFnName<T extends EventNames> = `on${Capitalize<T>}`;
type CallbackProperties<T> = {
    [K in keyof T as EventHandlerFnName<Extract<K, EventNames>>]?: (event: T[K]) => void;
};
type MapControllerProp = {
    mapController?: MapController;
};
export type Props = ControlOptions & CallbackProperties<DispatcherTypeCC> & MapControllerProp;
export type Methods = {
    blur(): void;
    focus(): void;
    setQuery(value: string, submit?: boolean): void;
    clearMap(): void;
    clearList(): void;
};
declare const ReactGeocodingControl: import("react").ForwardRefExoticComponent<ControlOptions & CallbackProperties<DispatcherTypeCC> & MapControllerProp & import("react").RefAttributes<Methods>>;
export { ReactGeocodingControl as GeocodingControl };
