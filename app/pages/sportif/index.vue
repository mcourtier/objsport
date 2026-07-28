<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <section
      aria-label="Le Gym, Le Lab et Le Studio"
      class="mt-4 flex flex-col gap-4"
    >
      <SportifPillarColumn
        v-for="pillar in content.pillars"
        :key="pillar.accent"
        :pillar="pillar"
      />
    </section>

    <SportifBenefits :benefits="content.benefits" />
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
usePageAnimations(root)
</script>
