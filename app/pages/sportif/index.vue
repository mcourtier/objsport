<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <div class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <section
        aria-label="Le Gym, Le Lab et Le Studio"
        class="grid gap-6 lg:grid-cols-3 lg:gap-8"
      >
        <SportifPillarColumn
          v-for="pillar in content.pillars"
          :key="pillar.accent"
          :pillar="pillar"
        />
      </section>

      <SportifBenefits :benefits="content.benefits" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { sportifPageContent } from '~/data/sportifPage'

const content = sportifPageContent

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
