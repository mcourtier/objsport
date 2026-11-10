<template>
  <!-- CardStation -->
  <a
    :href="station.website"
    class="card-station group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card
      class="group-hover:border-primary flex h-full flex-col transition-all duration-200 group-hover:shadow-lg"
      :ui="cardUi"
    >
      <div
        v-if="hasPhoto"
        class="relative aspect-4/3 w-full shrink-0 overflow-hidden bg-neutral-900"
      >
        <img
          :src="station.image"
          :alt="station.imageAlt"
          class="absolute inset-0 size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          width="510"
          height="510"
          loading="lazy"
        />
      </div>

      <div class="flex flex-1 flex-col p-5 md:p-6">
        <h2
          class="font-display text-xl font-bold tracking-wide text-neutral-100 uppercase italic"
        >
          {{ station.name }}
        </h2>
        <p
          class="font-display tracking-button text-primary-500 mt-2 text-sm font-semibold uppercase"
        >
          {{ station.location }}
        </p>
        <p class="mt-3 text-sm leading-relaxed text-neutral-400">
          {{ station.description }}
        </p>

        <span
          class="font-display text-primary-500 mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold tracking-wide uppercase"
        >
          Voir le site
          <Icon
            name="material-symbols:arrow-outward"
            class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Card>
  </a>
</template>

<script setup lang="ts">
import type { Station } from '~/types/station'

const props = defineProps<{
  station: Station
}>()

/** Placeholder shared by every station without its own photo. */
const GENERIC_STATION_IMAGE = '/images/stations/objectif-sport-station.jpg'

/* Compact card (no image) when the station only has the placeholder. */
const hasPhoto = computed(() => props.station.image !== GENERIC_STATION_IMAGE)

const cardUi = {
  body: 'p-0 sm:p-0 md:p-0 flex flex-col h-full',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-station {
  @apply block h-full;
}
</style>
