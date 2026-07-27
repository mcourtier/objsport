<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 md:grid-cols-6 lg:gap-5">
      <CardStationService class="md:col-span-6" />

      <CardTree class="md:col-span-6">
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

      <Card
        class="overflow-hidden bg-black md:col-span-6"
        :surface="false"
        :ui="{ body: '' }"
        data-reveal
      >
        <img
          src="/images/stations/objectif-sport-station.jpg"
          alt="Station Sport Santé Objectif Sport — Lab, Gym et Studio"
          class="w-full object-contain"
          loading="lazy"
        />
      </Card>

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

      <CardTree class="md:col-span-6">
        <template #root>
          <CardText
            subheading="Nous apportons notre expertise et méthodologie issue du sport professionnel"
            heading-id="mission-heading"
          >
            <template #heading>
              Chaque minute te rapproche de la
              <span class="text-primary">victoire</span>
            </template>
          </CardText>
        </template>

        <template #children>
          <CardMissionOutcome
            v-for="outcome in missionOutcomes"
            :key="outcome.title"
            v-bind="outcome"
          />
        </template>
      </CardTree>

      <CardContact v-bind="content.contact" class="md:col-span-3" />
      <CardEztm v-bind="content.eztmPromo" class="md:col-span-3" />
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

useSeoMeta({
  title: 'Objectif Sport — Réathlétisation Le Gym, Le Lab & Le Studio',
  description:
    'Service de réathlétisation pour entreprises, clubs et sportifs — Le Gym, Le Lab et Le Studio au service de votre performance.',
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
