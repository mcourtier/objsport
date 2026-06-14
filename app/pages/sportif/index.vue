<template>
  <div>
    <PageHero
      :title="content.headline"
      :title-accent="content.headlineAccent"
      :description="content.description"
      :background-image="content.heroBackgroundImage"
      :background-image-alt="content.heroBackgroundImageAlt"
    />

    <div class="mx-auto max-w-7xl pt-12 pb-8 md:pt-16 md:pb-12">
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
</script>
