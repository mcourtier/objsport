<template>
  <div>
    <PageHero
      :title="content.headline"
      :title-accent="content.headlineAccent"
      :tagline="content.tagline"
      :show-tagline="true"
      :background-image="content.heroBackgroundImage"
      :background-image-alt="content.heroBackgroundImageAlt"
    />

    <div class="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
      <section
        class="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12"
        aria-label="Notre approche et illustration terrain"
      >
        <ClubPitchIllustration
          class="aspect-3/2 w-full lg:sticky lg:top-28"
        />
        <ClubApproach :approach="content.approach" />
      </section>

      <section
        class="border-neutral-700 mt-14 border-t pt-14 md:mt-16 md:pt-16"
        aria-label="Tarification et estimation"
      >
        <ul class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <li v-for="tier in content.pricing" :key="tier.label">
            <ClubPricingCard :tier="tier" />
          </li>
          <li class="sm:col-span-2 xl:col-span-1">
            <ClubEstimationPanel :title="content.estimationTitle" />
          </li>
        </ul>
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
</script>
