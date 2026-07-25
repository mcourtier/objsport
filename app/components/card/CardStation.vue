<template>
  <!-- CardStation -->
  <a
    :href="station.website"
    class="card-station group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Card
      :surface="false"
      class="group-hover:border-primary flex h-full flex-col overflow-hidden bg-neutral-800 transition-all duration-200 group-hover:shadow-lg"
      :ui="cardUi"
      data-reveal
    >
      <div
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

      <div class="flex flex-1 flex-col px-6 py-6">
        <h2
          class="font-display text-xl font-bold tracking-wide text-neutral-100 uppercase italic"
        >
          {{ station.name }}
        </h2>
        <p
          class="font-display tracking-button text-primary mt-2 text-sm font-semibold uppercase"
        >
          {{ station.location }}
        </p>
        <p class="mt-3 text-sm leading-relaxed text-neutral-400">
          {{ station.description }}
        </p>

        <span
          class="font-display text-primary mt-6 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide uppercase"
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

defineProps<{
  station: Station
}>()

const cardUi = {
  body: 'p-0 sm:p-0 flex flex-col h-full',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-station {
  @apply block h-full;
}
</style>
