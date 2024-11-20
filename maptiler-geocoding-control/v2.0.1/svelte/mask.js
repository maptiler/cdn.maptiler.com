import bbox from "@turf/bbox";
import difference from "@turf/difference";
import flatten from "@turf/flatten";
import { featureCollection, polygon } from "@turf/helpers";
import union from "@turf/union";
import { unwrapBbox } from "./geoUtils";
export function setMask(picked, setData) {
    const diff = difference(featureCollection([
        polygon([
            [
                [180, 90],
                [-180, 90],
                [-180, -90],
                [180, -90],
                [180, 90],
            ],
        ]),
        picked,
    ]));
    if (!diff) {
        return;
    }
    diff.properties = { isMask: true };
    const bb = unwrapBbox(bbox(picked));
    // bigger features (continents, oceans) have bigger tolerance
    // because of the used source data simplification
    const tolerance = (bb[2] - bb[0]) / 360 / 1_000;
    const leaksLeft = bb[0] < -180;
    const leaksRight = bb[2] > 180;
    const flattened = flatten(picked);
    if (flattened.features.length > 1 && (leaksLeft || leaksRight)) {
        for (const poly of flattened.features) {
            const bb = unwrapBbox(bbox(poly));
            if (leaksRight && bb[0] < -180 + tolerance) {
                for (const ring of poly.geometry.coordinates) {
                    for (const position of ring) {
                        position[0] += 360 - tolerance;
                    }
                }
            }
            if (leaksLeft && bb[2] > 180 - tolerance) {
                for (const ring of poly.geometry.coordinates) {
                    for (const position of ring) {
                        position[0] -= 360 - tolerance;
                    }
                }
            }
        }
    }
    setData(featureCollection([
        flattened.features.length < 2 ? picked : (union(flattened) ?? picked),
        diff,
    ]));
}
