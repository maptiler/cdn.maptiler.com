import * as maplibregl from "maplibre-gl";
import { MapLibreBasedGeocodingControl, } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
export class GeocodingControl extends MapLibreBasedGeocodingControl {
    getMapLibreGl() {
        return maplibregl;
    }
    onAdd(map) {
        return super.onAddInt(map);
    }
    getExtraProps() {
        return {};
    }
}
