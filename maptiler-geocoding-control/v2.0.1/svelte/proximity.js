let cachedLocation;
export async function getProximity(mapController, proximity, ac) {
    const centerAndZoom = mapController?.getCenterAndZoom();
    for (const rule of proximity ?? []) {
        if (centerAndZoom &&
            ((rule.minZoom != undefined && rule.minZoom > centerAndZoom[0]) ||
                (rule.maxZoom != undefined && rule.maxZoom < centerAndZoom[0]))) {
            continue;
        }
        if (rule.type === "fixed") {
            return rule.coordinates.join(",");
        }
        cg: if (rule.type === "client-geolocation") {
            if (cachedLocation &&
                rule.cachedLocationExpiry &&
                cachedLocation.time + rule.cachedLocationExpiry > Date.now()) {
                if (!cachedLocation.coords) {
                    break cg;
                }
                return cachedLocation.coords;
            }
            let coords;
            try {
                coords = await new Promise((resolve, reject) => {
                    ac.signal.addEventListener("abort", () => {
                        reject(Error("aborted"));
                    });
                    navigator.geolocation.getCurrentPosition((pos) => {
                        resolve([pos.coords.longitude, pos.coords.latitude]
                            .map((c) => c.toFixed(6))
                            .join(","));
                    }, (err) => {
                        reject(err);
                    }, rule);
                });
                return coords;
            }
            catch {
                // ignore
            }
            finally {
                if (rule.cachedLocationExpiry) {
                    cachedLocation = {
                        time: Date.now(),
                        coords,
                    };
                }
            }
            if (ac.signal.aborted) {
                return;
            }
        }
        if (rule.type === "server-geolocation") {
            return "ip";
        }
        if (centerAndZoom && rule.type === "map-center") {
            return centerAndZoom[1].toFixed(6) + "," + centerAndZoom[2].toFixed(6);
        }
    }
}
