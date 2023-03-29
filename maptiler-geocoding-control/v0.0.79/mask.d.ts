import type { Polygon, MultiPolygon, Feature as TurfFeature } from "@turf/helpers";
import type { GeoJSON } from "geojson";
export declare function setMask(picked: TurfFeature<Polygon | MultiPolygon>, setData: (data: GeoJSON) => void): void;
