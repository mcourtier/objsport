<template>
  <div v-if="page" class="flex flex-col gap-4 lg:gap-5">
    <div ref="introRoot" class="flex flex-col gap-4 lg:gap-5">
      <CardHero v-bind="heroProps" />
      <CardMission v-bind="mission" />
      <CardMissionOutcomes />
    </div>
    <ContentRenderer :value="page" />
  </div>
</template>

<script setup lang="ts">
import type { HomeMissionContent } from '~/types/homepage'
import type { PageHeroContent } from '~/types/pageHero'

const hero: PageHeroContent = {
  tagline: 'Objectif Sport / Support de performances',
  title: 'Un objectif <strong>commun</strong> : votre performance.',
  description:
    "Nous mettons l'expertise du sport de haut niveau au service de <strong>chacun</strong>, à chaque étape de la vie.",
  primaryCtaLabel: 'Entreprise',
  primaryCtaTo: '/entreprise',
  secondaryCtaLabel: 'Demander un audit',
  secondaryCtaTo: '/audit',
}

const mission: HomeMissionContent = {
  titleLines: ['CHAQUE MINUTE', 'TE RAPPROCHE DE'],
  titleAccent: 'LA VICTOIRE.',
  paragraphs: [
    'Chez <strong>OBJECTIF SPORT</strong>, la santé et la performance sont indissociables.',
    'C’est pourquoi nous avons conçu un écosystème connecté qui propose des soins, du coaching et du consulting sur mesure.',
    'Accessible à partir de <strong>1€/min</strong>, grâce à notre système d’e-crew, chaque sportif, du débutant au professionnel, peut choisir le volume et le rythme, en toute liberté.',
    'Nous apportons notre expertise et méthodologie, issues du sport professionnel, pour prévenir les blessures, accompagner l’effort, et optimiser la récupération.',
  ],
}

const introRoot = ref<HTMLElement | null>(null)
useScrollAnimations(introRoot)

const heroProps = computed(() => hero)

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

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
})
</script>
