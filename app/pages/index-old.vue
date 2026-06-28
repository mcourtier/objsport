<template>
  <div v-if="page" class="flex flex-col gap-4 lg:gap-5">
    <div ref="introRoot" class="flex flex-col gap-4 lg:gap-5">
      <PageHero v-bind="hero" />
      <CardMissionOutcomes />
      <CardMission v-bind="mission" />
    </div>
    <ContentRenderer :value="page" />
  </div>
</template>

<script setup lang="ts">
import type { HomeMissionContent } from '~/types/homepage'
import type { PageHeroContent } from '~/types/pageHero'

interface HomePageContent {
  title?: string
  description?: string
  hero?: PageHeroContent
  mission?: HomeMissionContent
}

const introRoot = ref<HTMLElement | null>(null)
useScrollAnimations(introRoot)

const { data: page } = await useAsyncData('homepage', () =>
  queryCollection('content').path('/').first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page introuvable',
    fatal: true,
  })
}

const pageContent = computed(() => page.value as HomePageContent)

if (!pageContent.value.hero || !pageContent.value.mission) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Contenu homepage incomplet',
    fatal: true,
  })
}

const hero = computed(() => pageContent.value.hero!)
const mission = computed(() => pageContent.value.mission!)

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
})
</script>
