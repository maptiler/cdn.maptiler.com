<script>import { createEventDispatcher, onDestroy } from "svelte";
import ClearIcon from "./ClearIcon.svelte";
import FailIcon from "./FailIcon.svelte";
import FeatureItem from "./FeatureItem.svelte";
import LoadingIcon from "./LoadingIcon.svelte";
import ReverseGeocodingIcon from "./ReverseGeocodingIcon.svelte";
import SearchIcon from "./SearchIcon.svelte";
let className = undefined;
export { className as class };
export let apiKey;
export let bbox = undefined;
export let clearButtonTitle = "clear";
export let clearOnBlur = false;
export let collapsed = false;
export let country = undefined;
export let debounceSearch = 200;
export let enableReverse = false;
export let errorMessage = "Something went wrong…";
export let filter = () => true;
export let flyTo = true;
export let fuzzyMatch = true;
export let language = undefined;
export let limit = undefined;
export let mapController = undefined;
export let minLength = 2;
export let noResultsMessage = "Oops! Looks like you're trying to predict something that's not quite right. We can't seem to find what you're looking for. Maybe try double-checking your spelling or try a different search term. Keep on typing - we'll do our best to get you where you need to go!";
export let placeholder = "Search";
export let proximity = undefined;
export let reverseActive = enableReverse === "always";
export let reverseButtonTitle = "toggle reverse geocoding";
export let searchValue = "";
export let showFullGeometry = true;
export let showPlaceType = "ifNeeded";
export let showResultsWhileTyping = true;
export let trackProximity = true;
export let types = undefined;
export let zoom = 16;
export let maxZoom = 18;
export let apiUrl = "https://api.maptiler.com/geocoding";
export let fetchParameters = {};
export let iconsBaseUrl = "https://cdn.maptiler.com/maptiler-geocoding-control/v" +
    "0.0.97" +
    "/icons/";
export function focus() {
    input.focus();
}
export function blur() {
    input.blur();
}
export function setQuery(value, submit = true) {
    searchValue = value;
    if (submit) {
        selectedItemIndex = -1;
        handleOnSubmit();
    }
    else {
        handleInput();
        setTimeout(() => {
            input.focus();
            input.select();
        });
    }
}
let focused = false;
let listFeatures;
let markedFeatures;
let picked;
let lastSearchUrl = "";
let input;
let selectedItemIndex = -1;
let error;
let cachedFeatures = [];
let abortController;
let searchTimeoutRef;
let focusedDelayed;
let prevIdToFly;
const missingIconsCache = new Set();
const dispatch = createEventDispatcher();
$: if (!trackProximity) {
    proximity = undefined;
}
$: if (showFullGeometry &&
    picked &&
    !picked.address &&
    picked.geometry.type === "Point") {
    search(picked.id, { byId: true }).catch((err) => (error = err));
}
$: {
    if (mapController && picked && picked.id !== prevIdToFly && flyTo) {
        if (!picked.bbox ||
            (picked.bbox[0] === picked.bbox[2] && picked.bbox[1] === picked.bbox[3])) {
            mapController.flyTo(picked.center, picked.id.startsWith("poi.") || picked.id.startsWith("address.")
                ? maxZoom
                : zoom);
        }
        else {
            mapController.fitBounds(unwrapBbox(picked.bbox), 50, maxZoom);
        }
        listFeatures = undefined;
        markedFeatures = undefined;
        selectedItemIndex = -1;
    }
    prevIdToFly = picked?.id;
}
$: if (markedFeatures !== listFeatures) {
    markedFeatures = undefined;
}
$: if (mapController) {
    mapController.setMarkers(markedFeatures, picked);
}
$: if (searchValue.length < minLength) {
    picked = undefined;
    listFeatures = undefined;
    error = undefined;
    markedFeatures = listFeatures;
}
// highlight selected marker
$: mapController?.setSelectedMarker(selectedItemIndex);
// close dropdown in the next cycle so that the selected item event has the chance to fire
$: setTimeout(() => {
    focusedDelayed = focused;
    if (clearOnBlur && !focused) {
        searchValue = "";
    }
});
// clear selection on edit
$: {
    searchValue;
    selectedItemIndex = -1;
}
$: selected = listFeatures?.[selectedItemIndex];
$: {
    const m = /^(-?\d+(?:\.\d*)?),(-?\d+(?:\.\d*)?)$/.exec(searchValue);
    mapController?.setReverseMarker(m ? [Number(m[1]), Number(m[2])] : undefined);
}
$: dispatch("select", selected);
$: dispatch("pick", picked);
$: dispatch("optionsVisibilityChange", focusedDelayed && !!listFeatures);
$: dispatch("featuresListed", listFeatures);
$: dispatch("featuresMarked", markedFeatures);
$: dispatch("reverseToggle", reverseActive);
$: dispatch("queryChange", searchValue);
$: if (mapController) {
    mapController.indicateReverse(reverseActive);
}
$: if (mapController) {
    mapController.setEventHandler((e) => {
        switch (e.type) {
            case "mapClick":
                if (reverseActive) {
                    handleReverse(e.coordinates);
                }
                break;
            case "proximityChange":
                proximity = trackProximity ? e.proximity : undefined;
                break;
            case "markerClick":
                {
                    const feature = listFeatures?.find((feature) => feature.id === e.id);
                    if (feature) {
                        pick(feature);
                    }
                }
                break;
            case "markerMouseEnter":
                selectedItemIndex = !focusedDelayed
                    ? -1
                    : listFeatures?.findIndex((feature) => feature.id === e.id) ?? -1;
                break;
            case "markerMouseLeave":
                selectedItemIndex = -1;
                break;
        }
    });
}
onDestroy(() => {
    if (mapController) {
        mapController.setEventHandler(undefined);
        mapController.indicateReverse(false);
        mapController.setSelectedMarker(-1);
        mapController.setMarkers(undefined, undefined);
    }
});
function handleOnSubmit(event) {
    if (searchTimeoutRef) {
        clearTimeout(searchTimeoutRef);
        searchTimeoutRef = undefined;
    }
    if (selectedItemIndex > -1 && listFeatures) {
        picked = listFeatures[selectedItemIndex];
        searchValue = picked.place_name.replace(/,.*/, "");
        error = undefined;
        markedFeatures = undefined;
        selectedItemIndex = -1;
    }
    else if (searchValue) {
        const zoomTo = event || !isQuerReverse();
        search(searchValue, { exact: true })
            .then(() => {
            markedFeatures = listFeatures;
            picked = undefined;
            if (zoomTo) {
                zoomToResults();
            }
        })
            .catch((err) => (error = err));
    }
}
function isQuerReverse() {
    return /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(searchValue);
}
async function search(searchValue, { byId = false, exact = false, } = {}) {
    error = undefined;
    const isReverse = isQuerReverse();
    const sp = new URLSearchParams();
    if (language != undefined) {
        sp.set("language", Array.isArray(language) ? language.join(",") : language);
    }
    if (types) {
        sp.set("types", types.join(","));
    }
    if (!isReverse) {
        if (bbox) {
            sp.set("bbox", bbox.map((c) => c.toFixed(6)).join(","));
        }
        if (country) {
            sp.set("country", Array.isArray(country) ? country.join(",") : country);
        }
    }
    if (!byId) {
        if (proximity) {
            sp.set("proximity", proximity.map((c) => c.toFixed(6)).join(","));
        }
        if (exact || !showResultsWhileTyping) {
            sp.set("autocomplete", "false");
        }
        sp.set("fuzzyMatch", String(fuzzyMatch));
    }
    if (limit !== undefined && (!isReverse || types?.length === 1)) {
        sp.set("limit", String(limit));
    }
    sp.set("key", apiKey);
    const url = apiUrl + "/" + encodeURIComponent(searchValue) + ".json?" + sp.toString();
    if (url === lastSearchUrl) {
        if (byId) {
            listFeatures = undefined;
            picked = cachedFeatures[0];
        }
        else {
            listFeatures = cachedFeatures;
        }
        return;
    }
    lastSearchUrl = url;
    abortController?.abort();
    const ac = new AbortController();
    abortController = ac;
    let res;
    try {
        res = await fetch(url, {
            signal: ac.signal,
            ...fetchParameters,
        }).finally(() => {
            if (ac === abortController) {
                abortController = undefined;
            }
        });
    }
    catch (e) {
        if (e &&
            typeof e === "object" &&
            "name" in e &&
            e.name === "AbortError") {
            return;
        }
        throw new Error();
    }
    if (!res.ok) {
        throw new Error();
    }
    const featureCollection = await res.json();
    dispatch("response", { url, featureCollection });
    if (byId) {
        listFeatures = undefined;
        picked = featureCollection.features[0];
        cachedFeatures = [picked];
    }
    else {
        listFeatures = featureCollection.features.filter(filter);
        cachedFeatures = listFeatures;
        if (isReverse) {
            input.focus();
        }
    }
}
function zoomToResults() {
    if (!markedFeatures?.length || !flyTo) {
        return;
    }
    const bbox = [180, 90, -180, -90];
    const fuzzyOnly = !markedFeatures.some((feature) => !feature.matching_text);
    for (const feature of markedFeatures) {
        if (fuzzyOnly || !feature.matching_text) {
            bbox[0] = Math.min(bbox[0], feature.bbox?.[0] ?? feature.center[0]);
            bbox[1] = Math.min(bbox[1], feature.bbox?.[1] ?? feature.center[1]);
            bbox[2] = Math.max(bbox[2], feature.bbox?.[2] ?? feature.center[0]);
            bbox[3] = Math.max(bbox[3], feature.bbox?.[3] ?? feature.center[1]);
        }
    }
    if (mapController && markedFeatures.length > 0) {
        if (picked && bbox[0] === bbox[2] && bbox[1] === bbox[3]) {
            mapController.flyTo(picked.center, zoom);
        }
        else {
            mapController.fitBounds(unwrapBbox(bbox), 50, maxZoom);
        }
    }
}
// taken from Leaflet
function wrapNum(x, range, includeMax) {
    const max = range[1], min = range[0], d = max - min;
    return x === max && includeMax ? x : ((((x - min) % d) + d) % d) + min;
}
function handleReverse(coordinates) {
    reverseActive = enableReverse === "always";
    setQuery(wrapNum(coordinates[0], [-180, 180], true).toFixed(6) +
        "," +
        coordinates[1].toFixed(6));
}
function handleKeyDown(e) {
    if (!listFeatures) {
        return;
    }
    let dir = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (dir) {
        if (selectedItemIndex === -1 && dir === -1) {
            selectedItemIndex = listFeatures.length;
        }
        selectedItemIndex += dir;
        if (selectedItemIndex >= listFeatures.length) {
            selectedItemIndex = -1;
        }
        e.preventDefault();
    }
    else if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
        selectedItemIndex = -1;
    }
}
function handleInput(debounce = true) {
    error = undefined;
    if (showResultsWhileTyping) {
        if (searchTimeoutRef) {
            clearTimeout(searchTimeoutRef);
        }
        if (searchValue.length < minLength) {
            return;
        }
        const sv = searchValue;
        searchTimeoutRef = window.setTimeout(() => {
            search(sv).catch((err) => (error = err));
        }, debounce ? debounceSearch : 0);
    }
    else {
        listFeatures = undefined;
        error = undefined;
    }
}
function pick(feature) {
    picked = feature;
    searchValue = feature.place_name;
    selectedItemIndex = -1;
}
function unwrapBbox(bbox0) {
    let bbox = [...bbox0];
    if (bbox[2] < bbox[0]) {
        bbox[2] += 360;
    }
    return bbox;
}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<form
  tabindex="0"
  on:submit|preventDefault={handleOnSubmit}
  class:can-collapse={collapsed && searchValue === ""}
  class={className}
>
  <div class="input-group">
    <button class="search-button" type="button" on:click={() => input.focus()}>
      <SearchIcon />
    </button>

    <input
      bind:this={input}
      bind:value={searchValue}
      on:focus={() => (focused = true)}
      on:blur={() => (focused = false)}
      on:keydown={handleKeyDown}
      on:input={() => handleInput()}
      {placeholder}
      aria-label={placeholder}
    />

    <div class="clear-button-container" class:displayable={searchValue !== ""}>
      <button
        type="button"
        on:click={() => {
          searchValue = "";
          input.focus();
        }}
        title={clearButtonTitle}
      >
        <ClearIcon />
      </button>

      {#if abortController}
        <LoadingIcon />
      {/if}
    </div>

    {#if enableReverse === true}
      <button
        type="button"
        class:active={reverseActive}
        title={reverseButtonTitle}
        on:click={() => (reverseActive = !reverseActive)}
      >
        <ReverseGeocodingIcon />
      </button>
    {/if}

    <slot />
  </div>

  {#if error}
    <div class="error">
      <FailIcon />

      <div>{errorMessage}</div>

      <button on:click={() => (error = undefined)}>
        <ClearIcon />
      </button>
    </div>
  {:else if !focusedDelayed}
    {""}
  {:else if listFeatures?.length === 0}
    <div class="no-results">
      <FailIcon />

      <div>{noResultsMessage}</div>
    </div>
  {:else if focusedDelayed && listFeatures?.length}
    <ul
      on:mouseleave={() => (selectedItemIndex = -1)}
      on:blur={() => undefined}
    >
      {#each listFeatures as feature, i (feature.id + (feature.address ? "," + feature.address : ""))}
        <FeatureItem
          {feature}
          {showPlaceType}
          selected={selectedItemIndex === i}
          on:mouseenter={() => (selectedItemIndex = i)}
          on:focus={() => pick(feature)}
          {missingIconsCache}
          {iconsBaseUrl}
        />
      {/each}
    </ul>
  {/if}
</form>

<style>form {
  font-family: "Open Sans", "Ubuntu", "Helvetica Neue", Arial, Helvetica, sans-serif;
  position: relative;
  background-color: #fff;
  z-index: 10;
  border-radius: 4px;
  transition: max-width 0.25s;
  box-shadow: 0px 2px 5px rgba(51, 51, 89, 0.15);
  --color-text: #444952;
  --color-icon-button: #444952;
}
form, form *, form *:after, form *:before {
  box-sizing: border-box;
}
form.can-collapse {
  max-width: 29px;
}
form, form:focus-within, form:hover {
  width: 270px;
  max-width: 270px;
}

input {
  font: inherit;
  font-size: 14px;
  flex-grow: 1;
  min-height: 29px;
  background-color: transparent;
  color: #444952;
  white-space: nowrap;
  overflow: hidden;
  border: 0;
  margin: 0;
  padding: 0;
}
input:focus {
  color: #444952;
  outline: 0;
  outline: none;
  box-shadow: none;
}

ul,
div.error,
div.no-results {
  background-color: #fff;
  border-radius: 4px;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  top: calc(100% + 6px);
  overflow: hidden;
}

ul {
  font-size: 14px;
  line-height: 16px;
  box-shadow: 0px 5px 10px rgba(51, 51, 89, 0.15);
}

div.error,
div.no-results {
  font: inherit;
  line-height: 18px;
  font-size: 12px;
  display: flex;
  gap: 16px;
}

div.error {
  padding: 16px;
  font-weight: 600;
  color: #e25041;
  background-color: #fbeae8;
}
div.error div {
  flex-grow: 1;
}
div.error :global(svg) {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}
div.error button {
  flex-shrink: 0;
}
div.error button > :global(svg) {
  width: 13px;
  fill: #e25041;
}
div.error button:hover :global(svg), div.error button:active :global(svg) {
  fill: #444952;
}

div.no-results {
  padding: 14px 24px 14px 16px;
  font-weight: 400;
  color: #6b7c93;
  box-shadow: 0px 5px 10px rgba(51, 51, 89, 0.15);
}
div.no-results :global(svg) {
  margin-top: 4px;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  width: 30px;
  height: 30px;
}

:global(.maplibregl-ctrl-bottom-left) ul,
:global(.maplibregl-ctrl-bottom-right) ul {
  top: auto;
  bottom: 100%;
}

button {
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  height: auto;
  width: auto;
}
button:hover {
  background-color: transparent;
}

button:hover :global(svg),
button:active :global(svg) {
  fill: #2b8bfb;
}

.input-group {
  display: flex;
  align-items: stretch;
  gap: 7px;
  padding-inline: 8px;
  border-radius: 4px;
  overflow: hidden;
}
.input-group:focus-within {
  outline: #2b8bfb solid 2px;
}

.search-button {
  flex-shrink: 0;
}

.clear-button-container {
  display: flex;
  display: none;
  position: relative;
  align-items: stretch;
}
.clear-button-container.displayable {
  display: flex;
  flex-shrink: 0;
}

:global(.maplibregl-ctrl-geocoder) {
  position: relative;
  z-index: 3;
}

:global(.maptiler-ctrl):not(:empty) {
  box-shadow: none;
}
:global(.maptiler-ctrl) .input-group {
  padding-inline: 8px;
  border: white solid 2px;
}
:global(.maptiler-ctrl) .input-group:focus-within {
  border: #2b8bfb solid 2px;
  outline: 0;
  outline: none;
}
:global(.maptiler-ctrl) form.can-collapse {
  max-width: 34px;
}
:global(.maptiler-ctrl) form, :global(.maptiler-ctrl) form:focus-within, :global(.maptiler-ctrl) form:hover {
  width: 270px;
  max-width: 270px;
}</style>
