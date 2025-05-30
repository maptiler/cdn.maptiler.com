import { feature, featureCollection } from "@turf/helpers";
import union from "@turf/union";
import MarkerIcon from "./MarkerIcon.svelte";
import { setMask } from "./mask";
const emptyGeojson = featureCollection([]);
export function createMapLibreGlMapController(map, maplibregl, marker = true, showResultMarkers = true, flyToOptions = {}, fitBoundsOptions = {}, fullGeometryStyle = {
    fill: {
        paint: {
            "fill-color": "#000",
            "fill-opacity": 0.1,
        },
        filter: ["all", ["==", ["geometry-type"], "Polygon"], ["has", "isMask"]],
    },
    line: {
        layout: {
            "line-cap": "square",
        },
        paint: {
            "line-width": ["case", ["==", ["geometry-type"], "Polygon"], 2, 3],
            "line-dasharray": [1, 1],
            "line-color": "#3170fe",
        },
        filter: ["!", ["has", "isMask"]],
    },
}) {
    let eventHandler;
    const markers = [];
    let selectedMarker;
    let reverseMarker;
    let savedData; // used to restore features on style switch
    function addFullGeometryLayer() {
        if (!map.getSource("full-geom") &&
            (fullGeometryStyle?.fill || fullGeometryStyle?.line)) {
            map.addSource("full-geom", {
                type: "geojson",
                data: emptyGeojson,
            });
        }
        if (!map.getLayer("full-geom-fill") && fullGeometryStyle?.fill) {
            map.addLayer({
                ...fullGeometryStyle?.fill,
                id: "full-geom-fill",
                type: "fill",
                source: "full-geom",
            });
        }
        if (!map.getLayer("full-geom-line") && fullGeometryStyle?.line) {
            map.addLayer({
                ...fullGeometryStyle?.line,
                id: "full-geom-line",
                type: "line",
                source: "full-geom",
            });
        }
        if (savedData) {
            setData(savedData);
        }
    }
    if (map.loaded()) {
        addFullGeometryLayer();
    }
    else {
        map.once("load", () => {
            addFullGeometryLayer();
        });
    }
    map.on("styledata", () => {
        addFullGeometryLayer();
    });
    const handleMapClick = (e) => {
        eventHandler?.({
            type: "mapClick",
            coordinates: [e.lngLat.lng, e.lngLat.lat],
        });
    };
    function createMarker(interactive = false) {
        if (!maplibregl) {
            throw new Error();
        }
        const element = document.createElement("div");
        if (interactive) {
            element.classList.add("marker-interactive");
        }
        new MarkerIcon({
            props: { displayIn: "maplibre" },
            target: element,
        });
        return new maplibregl.Marker({ element, offset: [1, -13] });
    }
    function setData(data) {
        savedData = data;
        if (!data) {
            return;
        }
        map.getSource("full-geom")?.setData(data);
    }
    return {
        setEventHandler(handler) {
            if (handler) {
                eventHandler = handler;
                map.on("click", handleMapClick);
            }
            else {
                eventHandler = undefined;
                map.off("click", handleMapClick);
            }
        },
        flyTo(center, zoom) {
            map.flyTo({ center, ...(zoom ? { zoom } : {}), ...flyToOptions });
        },
        fitBounds(bbox, padding, maxZoom) {
            map.fitBounds([
                [bbox[0], bbox[1]],
                [bbox[2], bbox[3]],
            ], { padding, ...(maxZoom ? { maxZoom } : {}), ...fitBoundsOptions });
        },
        indicateReverse(reverse) {
            map.getCanvasContainer().style.cursor = reverse ? "crosshair" : "";
        },
        setReverseMarker(coordinates) {
            if (!maplibregl || !marker) {
                return;
            }
            if (reverseMarker) {
                if (!coordinates) {
                    reverseMarker.remove();
                    reverseMarker = undefined;
                }
                else {
                    reverseMarker.setLngLat(coordinates);
                }
            }
            else if (coordinates) {
                reverseMarker = (typeof marker === "object"
                    ? new maplibregl.Marker(marker)
                    : createMarker())
                    .setLngLat(coordinates)
                    .addTo(map);
                reverseMarker.getElement().classList.add("marker-reverse");
            }
        },
        setMarkers(markedFeatures, picked) {
            if (!marker) {
                return;
            }
            for (const marker of markers) {
                marker.remove();
            }
            markers.length = 0;
            setData(emptyGeojson);
            if (!maplibregl) {
                return;
            }
            if (picked) {
                let handled = false;
                if (picked.geometry.type === "GeometryCollection") {
                    const geoms = picked.geometry.geometries.filter((geometry) => geometry.type === "Polygon" || geometry.type === "MultiPolygon");
                    ok: if (geoms.length > 0) {
                        const unioned = union(featureCollection(geoms.map((geom) => feature(geom))));
                        if (!unioned) {
                            break ok;
                        }
                        setMask({
                            ...picked,
                            geometry: unioned.geometry,
                        }, setData);
                        handled = true;
                    }
                    else {
                        const geometries = picked.geometry.geometries.filter((geometry) => geometry.type === "LineString" ||
                            geometry.type === "MultiLineString");
                        if (geometries.length > 0) {
                            setData({
                                ...picked,
                                geometry: { type: "GeometryCollection", geometries },
                            });
                            handled = true;
                        }
                    }
                }
                if (handled) {
                    // nothing
                }
                else if (picked.geometry.type === "Polygon" ||
                    picked.geometry.type === "MultiPolygon") {
                    setMask(picked, setData);
                }
                else if (picked.geometry.type === "LineString" ||
                    picked.geometry.type === "MultiLineString") {
                    setData(picked);
                    return; // no pin for (multi)linestrings
                }
                if (marker) {
                    markers.push((typeof marker === "object"
                        ? new maplibregl.Marker(marker)
                        : createMarker())
                        .setLngLat(picked.center)
                        .addTo(map));
                }
            }
            if (showResultMarkers) {
                for (const feature of markedFeatures ?? []) {
                    if (feature === picked) {
                        continue;
                    }
                    const marker = (typeof showResultMarkers === "object"
                        ? new maplibregl.Marker(showResultMarkers)
                        : createMarker(true))
                        .setLngLat(feature.center)
                        .setPopup(new maplibregl.Popup({
                        offset: [1, -27],
                        closeButton: false,
                        closeOnMove: true,
                        className: "maptiler-gc-popup",
                    }).setText(feature.place_type[0] === "reverse"
                        ? feature.place_name
                        : feature.place_name.replace(/,.*/, "")))
                        .addTo(map);
                    const element = marker.getElement();
                    element.addEventListener("click", (e) => {
                        e.stopPropagation();
                        eventHandler?.({ type: "markerClick", id: feature.id });
                    });
                    element.addEventListener("mouseenter", () => {
                        eventHandler?.({ type: "markerMouseEnter", id: feature.id });
                        marker.togglePopup();
                    });
                    element.addEventListener("mouseleave", () => {
                        eventHandler?.({ type: "markerMouseLeave", id: feature.id });
                        marker.togglePopup();
                    });
                    // element.classList.toggle("marker-fuzzy", !!feature.matching_text);
                    markers.push(marker);
                }
            }
        },
        setSelectedMarker(index) {
            if (selectedMarker) {
                selectedMarker.getElement().classList.toggle("marker-selected", false);
            }
            selectedMarker = index > -1 ? markers[index] : undefined;
            selectedMarker?.getElement().classList.toggle("marker-selected", true);
        },
        getCenterAndZoom() {
            const c = map.getCenter();
            return [map.getZoom(), c.lng, c.lat];
        },
    };
}
