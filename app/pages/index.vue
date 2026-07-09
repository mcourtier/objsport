<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <CardAudience
      :heading="content.audienceHeading"
      :subheading="content.audienceSubheading"
      :audiences="content.audiences"
    />

    <CardMission v-bind="content.mission" />

    <section
      class="relative overflow-hidden bg-black"
      aria-labelledby="zones-heading"
      data-reveal-section
    >
      <header class="text-center" data-reveal>
        <p class="brand-tagline">
          {{ content.zonesTagline }}
        </p>
        <h2
          id="zones-heading"
          class="brand-headline mx-auto mt-3 max-w-2xl text-2xl md:text-3xl lg:text-4xl"
        >
          Trois zones, <span class="text-primary">une</span> performance
        </h2>
        <p
          class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base"
        >
          Un service de réathlétisation complet — coaching, soins et cours
          réunis pour accompagner chaque sportif, du premier pas au retour à la
          compétition.
        </p>
      </header>

      <div class="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5">
        <CardZone
          v-for="zone in zones"
          :key="zone.accent"
          v-bind="zone"
        />
      </div>
    </section>

    <CardMissionOutcomes />

    <Dashboard layout="grid">
      <CardFeatureHighlight v-bind="content.highlight" />
      <CardContact v-bind="content.contact" />
      <CardEztmPromo v-bind="content.eztmPromo" />
    </Dashboard>
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
