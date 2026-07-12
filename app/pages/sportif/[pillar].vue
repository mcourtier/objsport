<template>
  <div v-if="pillar" ref="root">
    <PageHero v-bind="hero" />

    <div class="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
      <CardTree>
        <template #root>
          <CardText
            :subheading="pillar.subtitle"
            :heading-id="servicesHeadingId"
          >
            <template #heading>
              {{ pillar.headline }}
              <span :class="pillarTextClass(pillar.accent)">
                {{ pillar.headlineAccent }}
              </span>
            </template>
          </CardText>
        </template>

        <template #children>
          <CardSportifSection
            v-for="section in pillar.sections"
            :key="section.title"
            :accent="pillar.accent"
            :section="section"
          />
        </template>
      </CardTree>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getSportifPillarBySlug } from '~/data/sportifPage'
import { pillarTextClass } from '~/utils/pillarTheme'

const route = useRoute()
const slug = computed(() => route.params.pillar as string)
const pillar = computed(() => getSportifPillarBySlug(slug.value))
const servicesHeadingId = computed(() => `sportif-${slug.value}-services-heading`)

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
