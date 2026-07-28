<template>
  <div v-if="pillar" ref="root">
    <PageHero v-bind="hero" />

    <section
      class="mt-4 flex flex-col gap-4 md:flex-row"
      :aria-label="pillar.name"
    >
      <CardSportifSection
        v-for="section in pillar.sections"
        :key="section.title"
        :accent="pillar.accent"
        :section="section"
        class="min-w-0 flex-1"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { getSportifPillarBySlug } from '~/data/sportifPage'

const route = useRoute()
const slug = computed(() => route.params.pillar as string)
const pillar = computed(() => getSportifPillarBySlug(slug.value))

const hero = computed(() => {
  const current = pillar.value
  if (!current) return {}
  return {
    title: current.name,
    titleAccent: current.headline,
    tagline: current.subtitle,
    showTagline: true,
    description: current.description,
    backgroundImage: current.imageSrc,
    backgroundImageAlt: current.imageAlt,
    accent: current.accent,
  }
})

if (!pillar.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page introuvable',
    fatal: true,
  })
}

useSeoMeta({
  title: () => `${pillar.value?.name} — Objectif Sport`,
  description: () => pillar.value?.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
