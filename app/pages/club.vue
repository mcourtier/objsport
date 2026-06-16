<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <div class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <section
        class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12"
        aria-label="Notre approche et illustration terrain"
      >
        <div>
          <ClubObjectifs
            :objectifs="content.objectifs"
            class="mb-8 lg:mb-10"
          />
          <ClubPitchIllustration
            class="aspect-3/2 w-full lg:sticky lg:top-28"
          />
        </div>
        <ClubApproach :approach="content.approach" />
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
