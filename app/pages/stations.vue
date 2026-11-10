<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <Card
      class="stations-network"
      :ui="networkCardUi"
      aria-labelledby="stations-intro-heading"
    >
      <div class="grid gap-8 md:grid-cols-2 md:items-center lg:gap-10">
        <StationsIntro v-bind="content.intro" />
        <StationsFranceMap />
      </div>
    </Card>

    <ul
      v-if="visibleStations.length"
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      aria-label="Liste des stations"
    >
      <li
        v-for="station in visibleStations"
        :key="station.id"
        class="min-w-0"
      >
        <CardStation :station="station" />
      </li>
    </ul>

    <div v-if="hasMoreStations" class="flex justify-center">
      <UButton
        size="xl"
        color="neutral"
        variant="outline"
        @click="showMoreStations"
      >
        Afficher plus
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stationsPageContent } from '~/data/stationsPage'

const content = stationsPageContent

const pageSize = 12
const visibleCount = ref(pageSize)

const visibleStations = computed(() =>
  content.stations.slice(0, visibleCount.value),
)

const hasMoreStations = computed(
  () => visibleCount.value < content.stations.length,
)

function showMoreStations() {
  visibleCount.value = Math.min(
    visibleCount.value + pageSize,
    content.stations.length,
  )
}

const networkCardUi = {
  body: 'p-6 md:p-8 lg:p-10',
}

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>
