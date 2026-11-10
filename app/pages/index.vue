<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 md:grid-cols-6 lg:gap-5">
      <CardStationService class="md:col-span-6" />

      <CardTree class="min-w-0 md:col-span-6" mobile-carousel>
        <template #root>
          <CardText
            :subheading="content.zonesSubheading"
            heading-id="zones-heading"
          >
            <template #heading>
              <span class="text-primary">1</span> station,
              <span class="text-primary">3</span> zones de travail
            </template>
          </CardText>
        </template>

        <template #children>
          <CardZone v-for="zone in zones" :key="zone.accent" v-bind="zone" />
        </template>
      </CardTree>

      <CardStationMap class="md:col-span-6" />

      <CardTree class="md:col-span-6">
        <template #root>
          <CardText
            :subheading="content.audienceSubheading"
            heading-id="audience-heading"
          >
            <template #heading>
              Performance pour <span class="text-primary">tous</span>
            </template>
          </CardText>
        </template>

        <template #children>
          <CardAudienceItem
            v-for="audience in content.audiences"
            :key="audience.id"
            v-bind="audience"
          />
        </template>
      </CardTree>

      <section
        class="grid gap-4 md:col-span-6 lg:grid-cols-2 lg:gap-5"
        aria-label="Notre mission"
      >
        <Card>
          <template #title>
            <AppTitle id="mission-heading">
              Chaque minute te rapproche de la
              <span class="text-primary">victoire</span>
            </AppTitle>
          </template>
          <p class="text-sm leading-relaxed text-neutral-400">
            Nous apportons notre expertise et méthodologie issue du sport
            professionnel
          </p>
          <ul class="mt-5 flex flex-col gap-5">
            <li v-for="outcome in missionOutcomes" :key="outcome.title">
              <CardMissionOutcome v-bind="outcome" />
            </li>
          </ul>
        </Card>

        <Card>
          <template #title>
            <AppTitle id="must-have-heading">
              Notre <span class="text-primary">must have</span>
            </AppTitle>
          </template>
          <p class="text-sm leading-relaxed text-neutral-400">
            La commotion cérébrale et la santé mentale dans le sport
          </p>
          <ul class="mt-5 flex flex-col gap-5">
            <li v-for="item in mustHaveItems" :key="item.title">
              <CardMissionOutcome v-bind="item" />
            </li>
          </ul>
        </Card>
      </section>

      <CardEztm v-bind="content.eztmPromo" class="md:col-span-6" />
      <CardContact v-bind="content.contact" class="md:col-span-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import { homePageContent } from '~/data/homePage'
import { sportifPageContent } from '~/data/sportifPage'

const content = homePageContent

const zoneRoutes: Record<PillarAccent, string> = {
  gym: '/sportif/le-gym',
  lab: '/sportif/le-lab',
  studio: '/sportif/le-studio',
}

const cleanLabel = (title: string) => title.replace(/\s*\(.*?\)\s*/g, '').trim()

const zones = sportifPageContent.pillars.map((pillar) => ({
  accent: pillar.accent,
  to: zoneRoutes[pillar.accent],
  name: pillar.name,
  subtitle: pillar.subtitle,
  description: pillar.description,
  sectionLabels: pillar.sections.map((section) => cleanLabel(section.title)),
}))

const missionOutcomes: {
  title: string
  subtitle: string
  icon: string
}[] = [
  {
    title: 'PRÉVENIR LES BLESSURES',
    subtitle: 'Anticiper pour mieux performer',
    icon: 'material-symbols:health-and-safety',
  },
  {
    title: 'OPTIMISER TES PERFORMANCES',
    subtitle: 'Méthodes et outils de haut niveau',
    icon: 'material-symbols:monitoring',
  },
  {
    title: 'ACCÉLÉRER TA RÉCUPÉRATION',
    subtitle: 'Récupérer mieux pour repartir plus fort',
    icon: 'material-symbols:ecg-heart',
  },
]

const mustHaveItems: {
  title: string
  subtitle?: string
  icon: string
}[] = [
  {
    title: 'Détection de la commotion',
    subtitle: 'Évaluations après choc crânien',
    icon: 'material-symbols:neurology',
  },
  {
    title: 'Suivi et accompagnement dans le parcours commotion',
    icon: 'material-symbols:clinical-notes',
  },
  {
    title: 'Surveillance et protection cognitive',
    icon: 'material-symbols:psychology',
  },
]

useSeoMeta({
  title: 'Objectif Sport — Réathlétisation Le Gym, Le Lab & Le Studio',
  description:
    'Service de réathlétisation pour entreprises, clubs et sportifs — Le Gym, Le Lab et Le Studio au service de votre performance.',
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>
