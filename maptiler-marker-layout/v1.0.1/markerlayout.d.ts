import { Map as MapSDK, MapGeoJSONFeature } from '@maptiler/sdk';

/**
 * How the markers are anchored to a given point
 */
export type MarkerAnchor = "center" | "top" | "bottom" | "left" | "right";
/**
 * Minimalist set of properties that represent a marker
 */
export type AbstractMarker = {
    /**
     * Unique ID of a marker, most likely the ID of a geojson feature (from a vector tile)
     */
    id: number;
    /**
     * Position in screenspace of the top-left corner [x, y]
     */
    position: [number, number];
    /**
     * Size in screen space [width, height]
     */
    size: [number, number];
    /**
     * The feature represented by the marker
     */
    features: MapGeoJSONFeature[];
    /**
     * Size of each internal elements (useful for when a marker contain information about multiple feature)
     */
    internalElementSize: [number, number];
};
/**
 * Hash map of AbstractMarker where IDs are unique and likely to come from vector tiles
 */
export type MarkerMap = Map<number, AbstractMarker>;
/**
 * Status of the marker compared to the previous status
 */
export type MarkerStatus = {
    /**
     * The markers that were added since the last update
     */
    new: MarkerMap;
    /**
     * The markers that were already present in the last update but had their position changed
     */
    updated: MarkerMap;
    /**
     * The markers that are no longer present since the last update
     */
    removed: MarkerMap;
};
export type MarkerLayoutOptions = {
    /**
     * IDs of layers to query for vector features.
     * Default: uses all the layers available
     */
    layers?: Array<string>;
    /**
     * Size of the markers on screen space [width, height].
     * Default: `[150, 50]`
     */
    markerSize?: [number, number];
    /**
     * Maximum number of markers to keep.
     * Default: no maximum
     */
    max?: number;
    /**
     * Position of the marker relative to its anchor point.
     * Default: `"center"`
     */
    markerAnchor?: MarkerAnchor;
    /**
     * Offset to apply to the marker, in number of pixel, relative to its anchor position.
     * First element of the array is the horizontal offset where negative shifts towards
     * the left and positive shifts towards the right.
     * Second element of the array is the vertical offset where negative shifts towards
     * the top and positive shifts towards the bottom.
     * Default: `[0, 0]`
     */
    offset?: [number, number];
    /**
     * A filter function can be provided. Each feature will be tested against this filter function,
     * and the returned value can be `true` (the feature is kept) or `false` (the feature is discarded).
     * Default: none
     */
    filter?: (feature: MapGeoJSONFeature) => boolean;
    /**
     * Property to sort the features by. If not provided, the features will not be sorted.
     * Alternatively, the sorting property can be a function that takes the feature as
     * argument and returns a number, aka. the sorting value (or rank)
     * Default: not provided
     */
    sortingProperty?: string | ((feature: MapGeoJSONFeature) => number);
    /**
     * Sorting order, only relevant if the option `.sortingProperty` is provided, or else will be ignored.
     * Default: `"ascending"`
     */
    sortingOrder?: "ascending" | "descending";
    /**
     * Property to group by. The property must be present in the `properties` object of the feature
     * unless the value of `groupBy` is equal to `"coordinates"`, then the geometry coordinates are
     * being used.
     * Default: no grouping
     */
    groupBy?: string;
    /**
     * Markers can contain multiple features, this parameter can be set to have a strict limit.
     * Default: `Infinity`
     */
    maxNbFeaturesPerMarker?: number;
    /**
     * When a marker contains multiple features, its size can get bigger. This number is the max ratio applied to the
     * defined `markerSize`. Intentionnaly non-integer so that the user can see there is still half an element to
     * show at the bottom and undestand they can scroll for more.
     * Default: `2.5`
     */
    maxRatioUnitSize?: number;
};
export type FeatureGroup = {
    groupKey: string | number | boolean;
    features: MapGeoJSONFeature[];
};
export declare class MarkerLayout {
    /**
     * Style layer IDs to keep
     */
    private layers;
    private markerSize;
    private markerAnchor;
    private map;
    private lastStatus;
    private max;
    private offset;
    /**
     * This is a concat of lastStatus.new and lastStatus.updated
     * only for optimisation purposes
     */
    private lastPresent;
    private filter;
    private groupBy;
    private maxRatioUnitSize;
    private sortingProperty;
    private sortingOrder;
    private maxNbFeaturesPerMarker;
    constructor(map: MapSDK, options?: MarkerLayoutOptions);
    private computeAnchorOffset;
    /**
     * Updates only the position of an abstract marker. Soft updates are convenients
     * for updating already existing markers without the need to debounce
     */
    softUpdateAbstractMarker(abstractMarker: AbstractMarker): void;
    /**
     * Update the marker positions.
     */
    update(): MarkerStatus | null;
    /**
     * Reset the internal state, aka empties the `lastStatus` maps.
     */
    reset(): void;
}
