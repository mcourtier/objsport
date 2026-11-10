<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <section
      class="grid gap-4 lg:gap-5 xl:grid-cols-2"
      aria-label="Notre approche"
    >
      <ClubObjectifs
        :objectifs="content.objectifs"
        class="order-2 xl:order-1"
      />
      <ClubApproach :approach="content.approach" class="order-1 xl:order-2" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { clubPageContent } from '~/data/clubPage'

const content = clubPageContent

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>
