// taken from Leaflet
export function wrapNum(x, range, includeMax) {
    const max = range[1], min = range[0], d = max - min;
    return x === max && includeMax ? x : ((((x - min) % d) + d) % d) + min;
}
export function unwrapBbox(bbox0) {
    const bbox = [...bbox0];
    if (bbox[2] < bbox[0]) {
        bbox[2] += 360;
    }
    return bbox;
}
