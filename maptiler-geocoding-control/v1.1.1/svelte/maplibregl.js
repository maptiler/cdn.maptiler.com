import * as maplibregl from "maplibre-gl";
import { MapLibreBasedGeocodingControl, } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
export class GeocodingControl extends MapLibreBasedGeocodingControl {
    getMapLibreGl() {
        return maplibregl;
    }
    getExtraProps(_map, _div) {
        return {};
    }
}
