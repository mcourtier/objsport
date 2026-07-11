<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 md:grid-cols-6 lg:gap-5">
      <CardText
        class="md:col-span-6"
        :tagline="content.zonesTagline"
        :subheading="content.zonesSubheading"
        heading-id="zones-heading"
      >
        <template #heading>
          Trois zones, <span class="text-primary">une</span> performance
        </template>
      </CardText>

      <CardZone
        v-for="zone in zones"
        :key="zone.accent"
        v-bind="zone"
        class="md:col-span-2"
      />

      <CardText
        class="md:col-span-6"
        :heading="content.audienceHeading"
        :subheading="content.audienceSubheading"
        heading-id="audience-heading"
      />

      <CardAudienceItem
        v-for="audience in content.audiences"
        :key="audience.id"
        v-bind="audience"
        class="md:col-span-2"
      />

      <CardMission class="md:col-span-6" v-bind="content.mission" />

      <CardMissionOutcome
        v-for="outcome in missionOutcomes"
        :key="outcome.title"
        v-bind="outcome"
        class="md:col-span-2"
      />

      <CardEztm v-bind="content.eztmPromo" class="md:col-span-3" />
      <CardContact v-bind="content.contact" class="md:col-span-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import type { SectionAccent } from '~/types/navigation'
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
  accent: SectionAccent
  icon: string
}[] = [
  {
    title: 'PRÉVENIR LES BLESSURES',
    subtitle: 'Anticiper pour mieux performer',
    accent: 'consulting',
    icon: 'material-symbols:health-and-safety',
  },
  {
    title: 'OPTIMISER TES PERFORMANCES',
    subtitle: 'Méthodes et outils de haut niveau',
    accent: 'care',
    icon: 'material-symbols:monitoring',
  },
  {
    title: 'ACCÉLÉRER TA RÉCUPÉRATION',
    subtitle: 'Récupérer mieux pour repartir plus fort',
    accent: 'coaching',
    icon: 'material-symbols:ecg-heart',
  },
]

useSeoMeta({
  title: 'Objectif Sport — Réathlétisation Le Gym, Le Lab & Le Studio',
  description:
    'Service de réathlétisation pour entreprises, clubs et sportifs — Le Gym, Le Lab et Le Studio au service de votre performance.',
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
