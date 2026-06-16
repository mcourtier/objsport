<template>
  <div v-if="pillar" ref="root">
    <PageHero v-bind="hero" />

    <div class="mx-auto max-w-7xl pt-12 pb-8 md:pt-16 md:pb-12">
      <SportifPillarColumn
        :pillar="pillar"
        hide-header
        hide-image
      />
    </div>
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
    titleAccent: current.subtitle,
    description: current.description,
    backgroundImage: current.imageSrc,
    backgroundImageAlt: current.imageAlt,
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
