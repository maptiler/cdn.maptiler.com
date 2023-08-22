import type Map from "ol/Map";
import type { AnimationOptions, FitOptions } from "ol/View";
import { type StyleLike } from "ol/style/Style";
import type { FlatStyleLike } from "ol/style/flat";
import type { MapController } from "./types";
export declare function createOpenLayersMapController(map: Map, flyToOptions?: AnimationOptions, flyToBounds?: FitOptions, fullGeometryStyle?: StyleLike | FlatStyleLike): MapController;
