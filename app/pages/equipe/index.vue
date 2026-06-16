<template>
  <div ref="root">
    <PageHero v-bind="hero" />

    <div class="mt-8 grid grid-cols-1 gap-8">
      <CardEquipeValues :values="equipeValues" />
      <ul v-if="profiles?.length" class="grid gap-6 md:grid-cols-3 md:gap-8">
        <li v-for="profile in profiles" :key="profile.slug" class="min-w-0">
          <CardProfile :profile="profile" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { equipeValues } from '~/data/equipeValues'
import type { PageHeroContent, PageWithHero } from '~/types/pageHero'

const defaultHero: PageHeroContent = {
  title: 'L’équipe',
  description: 'Rencontrez les professionnels Objectif Sport.',
  backgroundImage: '/images/brand/hero-cover.jpg',
  backgroundImageAlt:
    'Équipe Objectif Sport — coaching bien-être et performance',
}

const { data: page } = await useAsyncData('equipe-page', () =>
  queryCollection('content').path('/equipe').first(),
)

const { data: profiles } = await useTeamProfiles()

const pageContent = computed(() => page.value as PageWithHero | null)

const hero = computed(() => pageContent.value?.hero ?? defaultHero)

useSeoMeta({
  title: () => pageContent.value?.title ?? 'L’équipe — Objectif Sport',
  description: () => pageContent.value?.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
