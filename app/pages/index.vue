<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 md:grid-cols-3 lg:gap-5">
      <CardHeader
        class="md:col-span-3"
        :heading="content.audienceHeading"
        :subheading="content.audienceSubheading"
        heading-id="audience-heading"
      />

      <CardAudience :audiences="content.audiences" />

      <CardMission class="md:col-span-3" v-bind="content.mission" />

      <CardHeader
        class="md:col-span-3"
        :tagline="content.zonesTagline"
        :subheading="content.zonesSubheading"
        heading-id="zones-heading"
      >
        <template #heading>
          Trois zones, <span class="text-primary">une</span> performance
        </template>
      </CardHeader>

      <CardZone
        v-for="zone in zones"
        :key="zone.accent"
        v-bind="zone"
      />

      <CardMissionOutcomes />

      <CardFeatureHighlight v-bind="content.highlight" />
      <CardContact v-bind="content.contact" />
      <CardEztmPromo v-bind="content.eztmPromo" />
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

const cleanLabel = (title: string) =>
  title.replace(/\s*\(.*?\)\s*/g, '').trim()

const zones = sportifPageContent.pillars.map((pillar) => ({
  accent: pillar.accent,
  to: zoneRoutes[pillar.accent],
  name: pillar.name,
  subtitle: pillar.subtitle,
  headline: pillar.headline,
  headlineAccent: pillar.headlineAccent,
  description: pillar.description,
  sectionLabels: pillar.sections.map((section) => cleanLabel(section.title)),
}))

useSeoMeta({
  title: 'Objectif Sport — Réathlétisation Le Gym, Le Lab & Le Studio',
  description:
    'Service de réathlétisation pour entreprises, clubs et sportifs — Le Gym, Le Lab et Le Studio au service de votre performance.',
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
