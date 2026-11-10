<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="hero" />

    <CardEquipeValues :values="equipeValues" />
    <EquipeInterventionMode :steps="equipeInterventionSteps" />
    <EquipeNosValeurs :values="equipeNosValeurs" />

    <ul
      v-if="profiles?.length"
      class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5"
    >
      <li v-for="profile in profiles" :key="profile.slug" class="min-w-0">
        <CardProfile :profile="profile" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { equipeInterventionSteps } from '~/data/equipeIntervention'
import { equipeNosValeurs } from '~/data/equipeNosValeurs'
import { equipeValues } from '~/data/equipeValues'
import type { PageHeroContent, PageWithHero } from '~/types/pageHero'

const defaultHero: PageHeroContent = {
  title: 'Nos équipes',
  titleAccent: 'Nos forces sur le terrain',
  tagline: 'Expertise • Coordination • Réactivité',
  showTagline: true,
  description:
    'Des experts coordonnés, un objectif commun : <strong>votre performance</strong>.',
  backgroundImage: '/images/hero/equipe.png',
  backgroundImageAlt: 'Sportif en posture de coaching — équipe Objectif Sport',
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
usePageAnimations(root)
</script>
