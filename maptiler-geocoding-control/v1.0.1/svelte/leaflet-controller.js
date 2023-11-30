import union from "@turf/union";
import * as L from "leaflet";
import MarkerIcon from "./MarkerIcon.svelte";
import { setMask } from "./mask";
export function createLeafletMapController(map, marker = true, showResultMarkers = true, flyToOptions = {}, flyToBounds = {}, fullGeometryStyle = (feature) => {
    const type = feature?.geometry?.type;
    const weight = feature?.properties?.isMask
        ? 0
        : type === "LineString" || type === "MultiLineString"
            ? 3
            : 2;
    return {
        color: "#3170fe",
        fillColor: "#000",
        fillOpacity: feature?.properties?.isMask ? 0.1 : 0,
        weight,
        dashArray: [weight, weight],
        lineCap: "butt",
    };
}) {
    let eventHandler;
    let markers = [];
    let selectedMarker;
    let reverseMarker;
    let resultLayer = L.geoJSON(undefined, {
        style: fullGeometryStyle,
        interactive: false,
    }).addTo(map);
    const handleMapClick = (e) => {
        eventHandler?.({
            type: "mapClick",
            coordinates: [e.latlng.lng, e.latlng.lat],
        });
    };
    function createMarker(pos, interactive = false) {
        const element = document.createElement("div");
        new MarkerIcon({ props: { displayIn: "leaflet" }, target: element });
        return new L.Marker(pos, {
            interactive,
            icon: new L.DivIcon({
                html: element,
                className: "",
                iconAnchor: [12, 26],
                iconSize: [25, 30],
                tooltipAnchor: [1, -24],
            }),
        });
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
            map.flyTo([center[1], center[0]], zoom, { duration: 2, ...flyToOptions });
        },
        fitBounds(bbox, padding, maxZoom) {
            map.flyToBounds([
                [bbox[1], bbox[0]],
                [bbox[3], bbox[2]],
            ], { padding: [padding, padding], duration: 2, maxZoom, ...flyToBounds });
        },
        indicateReverse(reverse) {
            map.getContainer().style.cursor = reverse ? "crosshair" : "";
        },
        setReverseMarker(coordinates) {
            if (!marker) {
                return;
            }
            const latLng = coordinates && [coordinates[1], coordinates[0]];
            if (reverseMarker) {
                if (!latLng) {
                    reverseMarker.remove();
                    reverseMarker = undefined;
                }
                else {
                    reverseMarker.setLatLng(latLng);
                }
            }
            else if (latLng) {
                reverseMarker = (typeof marker === "object"
                    ? new L.Marker(latLng, marker)
                    : createMarker(latLng)).addTo(map);
                reverseMarker.getElement()?.classList.add("marker-reverse");
            }
        },
        setMarkers(markedFeatures, picked) {
            if (!marker) {
                return;
            }
            function setData(data) {
                resultLayer.clearLayers();
                if (data) {
                    resultLayer.addData(data);
                }
            }
            for (const marker of markers) {
                marker.remove();
            }
            markers.length = 0;
            setData();
            if (picked) {
                let handled = false;
                if (picked.geometry.type === "GeometryCollection") {
                    const geoms = picked.geometry.geometries.filter((geometry) => geometry.type === "Polygon" || geometry.type === "MultiPolygon");
                    if (geoms.length > 0) {
                        let geometry = geoms.pop();
                        for (const geom of geoms) {
                            geometry = union(geometry, geom); // union actually returns geometry
                        }
                        setMask({ ...picked, geometry }, setData);
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
                const pos = [picked.center[1], picked.center[0]];
                markers.push((typeof marker === "object"
                    ? new L.Marker(pos, marker)
                    : createMarker(pos)).addTo(map));
            }
            if (showResultMarkers) {
                for (const feature of markedFeatures ?? []) {
                    if (feature === picked) {
                        continue;
                    }
                    const pos = [
                        feature.center[1],
                        feature.center[0],
                    ];
                    const marker = typeof showResultMarkers === "object"
                        ? new L.Marker(pos, showResultMarkers)
                        : createMarker(pos, true);
                    marker.addTo(map).bindTooltip(feature.place_name.replace(/,.*/, ""), {
                        direction: "top",
                    });
                    const element = marker.getElement();
                    if (element) {
                        element.addEventListener("click", (e) => {
                            e.stopPropagation();
                            eventHandler?.({ type: "markerClick", id: feature.id });
                        });
                        element.addEventListener("mouseenter", () => {
                            eventHandler?.({ type: "markerMouseEnter", id: feature.id });
                        });
                        element.addEventListener("mouseleave", () => {
                            eventHandler?.({ type: "markerMouseLeave", id: feature.id });
                        });
                        element.classList.toggle("marker-fuzzy", !!feature.matching_text);
                    }
                    markers.push(marker);
                }
            }
        },
        setSelectedMarker(index) {
            if (selectedMarker) {
                selectedMarker.getElement()?.classList.toggle("marker-selected", false);
            }
            selectedMarker = index > -1 ? markers[index] : undefined;
            selectedMarker?.getElement()?.classList.toggle("marker-selected", true);
        },
        getCenterAndZoom() {
            const c = map.getCenter();
            return [map.getZoom(), c.lng, c.lat];
        },
    };
}
