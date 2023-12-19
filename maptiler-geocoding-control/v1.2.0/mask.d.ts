import type { MultiPolygon, Polygon, Feature as TurfFeature } from "@turf/helpers";
import type { FeatureCollection } from "geojson";
export declare function setMask(picked: TurfFeature<Polygon | MultiPolygon>, setData: (data: FeatureCollection<Polygon | MultiPolygon>) => void): void;
