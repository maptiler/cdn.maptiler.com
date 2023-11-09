import { Feature, MapBrowserEvent } from "ol";
import { Geometry as OlGeometry, GeometryCollection as OlGeometryCollection, LineString as OlLineString, MultiLineString as OlMultiLineString, MultiPolygon as OlMultiPolygon, Polygon as OlPolygon, Point, } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import { fromLonLat, toLonLat, transformExtent } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon";
import Stroke from "ol/style/Stroke";
import Style, {} from "ol/style/Style";
import Text from "ol/style/Text";
import { setMask } from "./mask";
const EPSG_4326 = "EPSG:4326";
function defaultStyle(feature) {
    const properties = feature.getProperties();
    const { isMask } = properties;
    const type = feature.getGeometry()?.getType();
    const weight = isMask
        ? 0
        : type === "LineString" || type === "MultiLineString"
            ? 3
            : 2;
    return new Style({
        stroke: isMask
            ? undefined
            : new Stroke({
                color: "#3170fe",
                lineDash: [weight, weight],
                width: weight,
                lineCap: "butt",
            }),
        fill: isMask
            ? new Fill({
                color: "#00000020",
            })
            : undefined,
        image: new Icon({
            src: `/icons/marker_${properties.isReverse
                ? "reverse"
                : properties.isSelected
                    ? "selected"
                    : "unselected"}.svg`,
            anchor: [0.5, 1],
        }),
        zIndex: properties.isSelected ? 2 : properties.isReverse ? 0 : 1,
        text: properties.isSelected && properties.tooltip
            ? new Text({
                backgroundFill: new Fill({ color: "white" }),
                text: properties.tooltip,
                offsetY: -40,
                backgroundStroke: new Stroke({
                    color: "white",
                    lineJoin: "round",
                    width: 3,
                }),
                padding: [2, 0, 0, 2],
            })
            : undefined,
    });
}
export function createOpenLayersMapController(map, flyToOptions = {}, flyToBounds = {}, fullGeometryStyle = defaultStyle) {
    let prevSelected = -1;
    let prevHovered;
    let eventHandler;
    let reverseMarker;
    let indicatingReverse = false;
    const vectorLayer = new VectorLayer({
        updateWhileAnimating: true,
    });
    map.addLayer(vectorLayer);
    const source = new VectorSource({});
    vectorLayer.setSource(source);
    vectorLayer.setStyle(fullGeometryStyle);
    map.on("click", (e) => {
        map.forEachFeatureAtPixel(e.pixel, (feature) => {
            const id = feature.getId();
            if (!id) {
                return;
            }
            e.stopPropagation();
            eventHandler?.({ type: "markerClick", id });
            return feature;
        });
    });
    map.on("pointermove", (e) => {
        const featureId = map.forEachFeatureAtPixel(e.pixel, (feature) => {
            return feature.getId();
        });
        if (prevHovered === featureId) {
            return;
        }
        if (prevHovered) {
            eventHandler?.({
                type: "markerMouseLeave",
                id: prevHovered,
            });
        }
        if (featureId) {
            eventHandler?.({
                type: "markerMouseEnter",
                id: featureId,
            });
        }
        map.getTargetElement().style.cursor = featureId
            ? "pointer"
            : indicatingReverse
                ? "crosshair"
                : "";
        prevHovered = featureId;
    });
    function fromWgs84(geometry) {
        return geometry.transform(EPSG_4326, map.getView().getProjection());
    }
    const handleMapClick = (e) => {
        eventHandler?.({
            type: "mapClick",
            coordinates: toLonLat(e.coordinate, map.getView().getProjection()),
        });
    };
    return {
        setEventHandler(handler) {
            if (handler) {
                eventHandler = handler;
                map.on("click", handleMapClick);
            }
            else {
                eventHandler = undefined;
                map.un("click", handleMapClick);
            }
        },
        flyTo(center, zoom) {
            map.getView().animate({
                center: fromLonLat(center, map.getView().getProjection()),
                zoom,
                duration: 2000,
                ...flyToOptions,
            });
        },
        fitBounds(bbox, padding, maxZoom) {
            map
                .getView()
                .fit(transformExtent(bbox, EPSG_4326, map.getView().getProjection()), {
                padding: [padding, padding, padding, padding],
                maxZoom,
                duration: 2000,
                ...flyToBounds,
            });
        },
        indicateReverse(reverse) {
            indicatingReverse = reverse;
            map.getTargetElement().style.cursor = reverse ? "crosshair" : "";
        },
        setReverseMarker(coordinates) {
            if (reverseMarker) {
                if (!coordinates) {
                    source.removeFeature(reverseMarker);
                    reverseMarker.dispose();
                    reverseMarker = undefined;
                }
                else {
                    reverseMarker.getGeometry().setCoordinates(fromLonLat(coordinates, map.getView().getProjection()));
                }
            }
            else if (coordinates) {
                reverseMarker = new Feature(new Point(fromLonLat(coordinates, map.getView().getProjection())));
                reverseMarker.setProperties({ isReverse: true });
                source.addFeature(reverseMarker);
            }
        },
        setMarkers(markedFeatures, picked) {
            function setData(data) {
                if (!data) {
                    return;
                }
                for (const f of data.features) {
                    const geom = f.geometry.type === "Polygon"
                        ? new OlPolygon(f.geometry.coordinates)
                        : f.geometry.type === "MultiPolygon"
                            ? new OlMultiPolygon(f.geometry.coordinates)
                            : null;
                    if (!geom) {
                        continue;
                    }
                    source.addFeature(new Feature({
                        isMask: !!f.properties?.isMask,
                        geometry: fromWgs84(geom),
                    }));
                }
            }
            source.clear();
            if (reverseMarker) {
                source.addFeature(reverseMarker);
            }
            setData();
            if (picked) {
                let handled = false;
                if (picked.geometry.type === "GeometryCollection") {
                    const geoms = picked.geometry.geometries
                        .map((geometry) => geometry.type === "Polygon"
                        ? new OlPolygon(geometry.coordinates)
                        : geometry.type === "MultiPolygon"
                            ? new OlMultiPolygon(geometry.coordinates)
                            : null)
                        .filter((a) => !!a);
                    if (geoms.length > 0) {
                        source.addFeature(new Feature(fromWgs84(new OlGeometryCollection(geoms))));
                        handled = true;
                    }
                    else {
                        for (const geometry of picked.geometry.geometries) {
                            if (geometry.type === "LineString") {
                                source.addFeature(new Feature(fromWgs84(new OlLineString(geometry.coordinates))));
                                handled = true;
                            }
                            else if (geometry.type === "MultiLineString") {
                                source.addFeature(new Feature(fromWgs84(new OlMultiLineString(geometry.coordinates))));
                            }
                            handled = true;
                        }
                    }
                }
                if (handled) {
                    // nothing
                }
                else if (picked.geometry.type === "Polygon") {
                    setMask(picked, setData);
                }
                else if (picked.geometry.type === "MultiPolygon") {
                    setMask(picked, setData);
                }
                else if (picked.geometry.type === "LineString") {
                    source.addFeature(new Feature(fromWgs84(new OlLineString(picked.geometry.coordinates))));
                    return; // no pin for (multi)linestrings
                }
                else if (picked.geometry.type === "MultiLineString") {
                    source.addFeature(new Feature(fromWgs84(new OlMultiLineString(picked.geometry.coordinates))));
                    return; // no pin for (multi)linestrings
                }
                source.addFeature(new Feature(fromWgs84(new Point(picked.center))));
            }
            for (const feature of markedFeatures ?? []) {
                if (feature === picked) {
                    continue;
                }
                const marker = new Feature(new Point(fromLonLat(feature.center, map.getView().getProjection())));
                marker.setId(feature.id);
                marker.setProperties({
                    fuzzy: !!feature.matching_text,
                    tooltip: feature.place_name.replace(/,.*/, ""),
                });
                source.addFeature(marker);
            }
        },
        setSelectedMarker(index) {
            const features = source.getFeatures();
            const offset = features[0]?.getProperties().isReverse ? 1 : 0;
            if (prevSelected > -1) {
                features[prevSelected + offset]?.setProperties({
                    isSelected: false,
                });
            }
            if (index > -1) {
                features[index + offset]?.setProperties({
                    isSelected: true,
                });
            }
            prevSelected = index;
        },
        getCenterAndZoom() {
            const view = map.getView();
            const center = view.getCenter();
            const zoom = view.getZoom();
            if (!center || zoom === undefined) {
                return undefined;
            }
            return [zoom, ...toLonLat(center, view.getProjection())];
        },
    };
}
