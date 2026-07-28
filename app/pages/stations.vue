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
      v-if="content.stations.length"
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      aria-label="Liste des stations"
    >
      <li
        v-for="station in content.stations"
        :key="station.id"
        class="min-w-0"
      >
        <CardStation :station="station" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { stationsPageContent } from '~/data/stationsPage'

const content = stationsPageContent

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
