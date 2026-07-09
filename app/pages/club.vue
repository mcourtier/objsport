<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <div class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <section
        class="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12"
        aria-label="Notre approche et illustration terrain"
      >
        <div class="order-2 lg:order-1">
          <ClubObjectifs
            :objectifs="content.objectifs"
            class="mb-8 lg:mb-10"
          />
          <ClubPitchIllustration
            class="aspect-3/2 w-full lg:sticky lg:top-28"
          />
        </div>
        <ClubApproach :approach="content.approach" class="order-1 lg:order-2" />
      </section>
    </div>
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
useScrollAnimations(root)
</script>
