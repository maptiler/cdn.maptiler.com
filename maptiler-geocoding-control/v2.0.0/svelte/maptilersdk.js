import * as maptilersdk from "@maptiler/sdk";
import { crateBaseClass, } from "./MapLibreBasedGeocodingControl";
export { createMapLibreGlMapController } from "./maplibregl-controller";
const Base = crateBaseClass(maptilersdk.Evented, maptilersdk, (map, div) => {
    const sdkConfig = {};
    if (!("getSdkConfig" in map && typeof map.getSdkConfig === "function")) {
        throw new Error("MapTiler SDK not detected");
    }
    const { primaryLanguage, apiKey } = map.getSdkConfig();
    sdkConfig.apiKey = apiKey;
    const match = /^([a-z]{2})($|_|-)/.exec(primaryLanguage);
    if (match) {
        sdkConfig.language = match[1];
    }
    div.className += " maptiler-ctrl";
    return sdkConfig;
});
export class GeocodingControl extends Base {
    onAdd(map) {
        return super.onAddInt(map);
    }
}
