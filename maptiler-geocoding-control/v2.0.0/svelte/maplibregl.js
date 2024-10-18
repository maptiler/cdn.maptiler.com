import * as maplibregl from "maplibre-gl";
import { crateBaseClass, } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
const Base = crateBaseClass(maplibregl.Evented, maplibregl);
export class GeocodingControl extends Base {
    onAdd(map) {
        return super.onAddInt(map);
    }
}
