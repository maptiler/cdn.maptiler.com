<script>export let feature;
export let selected = false;
export let showPlaceType;
export let missingIconsCache;
export let iconsBaseUrl;
const categories = feature.properties?.categories;
let category;
let imageUrl;
let loadIconAttempt = 0;
let isReverse = feature.place_type[0] === "reverse";
$: index = categories?.length ?? 0;
$: {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    loadIconAttempt;
    do {
        index--;
        category = categories?.[index];
        imageUrl = category
            ? iconsBaseUrl + category.replace(/ /g, "_") + ".svg"
            : undefined;
    } while (index > -1 && (!imageUrl || missingIconsCache.has(imageUrl)));
}
$: placeType =
    feature.properties?.categories?.join(", ") ??
        feature.properties?.place_type_name?.[0] ??
        feature.place_type[0];
function handleImgError() {
    if (imageUrl) {
        missingIconsCache.add(imageUrl);
    }
    loadIconAttempt++;
}
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<li tabindex="0" data-selected={selected} class:selected on:mouseenter on:focus>
  {#if imageUrl}
    <img src={imageUrl} alt={category} on:error={() => handleImgError()} />
  {:else if feature.address}
    <img src={iconsBaseUrl + "housenumber.svg"} alt={placeType} />
  {:else if feature.id.startsWith("road.")}
    <img src={iconsBaseUrl + "road.svg"} alt={placeType} />
  {:else if feature.id.startsWith("address.")}
    <img src={iconsBaseUrl + "street.svg"} alt={placeType} />
  {:else if feature.id.startsWith("postal_code.")}
    <img src={iconsBaseUrl + "postal_code.svg"} alt={placeType} />
  {:else if feature.id.startsWith("poi.")}
    <img src={iconsBaseUrl + "poi.svg"} alt={placeType} />
  {:else if isReverse}
    <img src={iconsBaseUrl + "reverse.svg"} alt={placeType} />
  {:else}
    <img src={iconsBaseUrl + "area.svg"} alt={placeType} />
  {/if}

  <span class="texts">
    <span>
      <span class="primary">
        {isReverse ? feature.place_name : feature.place_name.replace(/,.*/, "")}
      </span>

      {#if showPlaceType === "always" || (showPlaceType !== "never" && !feature.address && !feature.id.startsWith("road.") && !feature.id.startsWith("address.") && !feature.id.startsWith("postal_code.") && (!feature.id.startsWith("poi.") || !imageUrl) && !isReverse)}
        <span class="secondary">
          {placeType}
        </span>
      {/if}
    </span>

    <span class="line2">
      {isReverse ? "" : feature.place_name.replace(/[^,]*,?\s*/, "")}
    </span>
  </span>
</li>

<style>li {
  text-align: left;
  cursor: default;
  display: grid;
  grid-template-columns: 40px 1fr;
  color: var(--color-text);
  padding: 8px 0px;
  font-size: 14px;
  line-height: 18px;
  min-width: fit-content;
}
li:first-child {
  padding-top: 10px;
}
li:last-child {
  padding-bottom: 10px;
}
li.selected {
  background-color: #f3f6ff;
}
li.selected {
  animation: backAndForth 5s linear infinite;
}
li.selected .primary {
  color: #2b8bfb;
}
li > img {
  align-self: center;
  justify-self: center;
  opacity: 0.75;
}

.texts {
  padding: 0 17px 0 0;
}
.texts > * {
  white-space: nowrap;
  display: block;
  min-width: fit-content;
}

.primary {
  font-weight: 600;
}

.secondary {
  color: #aeb6c7;
  padding-left: 4px;
}

.line2 {
  color: #aeb6c7;
}

@keyframes backAndForth {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(calc(-100% + 270px));
  }
  55% {
    transform: translateX(calc(-100% + 270px));
  }
  90% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}</style>
