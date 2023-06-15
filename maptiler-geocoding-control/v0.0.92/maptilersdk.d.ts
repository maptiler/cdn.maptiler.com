import type * as maplibregl from "maplibre-gl";
import type { Map } from "maplibre-gl";
import type GeocodingControlComponent from "./GeocodingControl.svelte";
import { MapLibreBasedGeocodingControl, type MapLibreBaseControlOptions, type Props } from "./MapLibreBasedGeocodingControl";
export declare class GeocodingControl extends MapLibreBasedGeocodingControl<MapLibreBaseControlOptions> {
    getMapLibreGl(): typeof maplibregl;
    getExtraProps(map: Map, div: HTMLElement): Partial<Props<GeocodingControlComponent>>;
}
