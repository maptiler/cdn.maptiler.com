import * as maptilersdk from "@maptiler/sdk";
import type * as maplibregl from "maplibre-gl";
import type { Map } from "maplibre-gl";
import type GeocodingControlComponent from "./GeocodingControl.svelte";
import { MapLibreBasedGeocodingControl, type MapLibreBaseControlOptions, type Props } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
export declare class GeocodingControl extends MapLibreBasedGeocodingControl<MapLibreBaseControlOptions> implements maptilersdk.IControl {
    getMapLibreGl(): typeof maplibregl;
    onAdd(map: maptilersdk.Map): HTMLElement;
    getExtraProps(map: Map, div: HTMLElement): Partial<Props<GeocodingControlComponent>>;
}
