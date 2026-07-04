<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="hero" />

    <section
      class="relative overflow-hidden bg-black"
      aria-labelledby="zones-heading"
      data-reveal-section
    >
      <div>
        <header class="text-center" data-reveal>
          <p class="brand-tagline">
            Le Gym
            <span class="brand-tagline-bullet" aria-hidden="true">•</span>
            Le Lab
            <span class="brand-tagline-bullet" aria-hidden="true">•</span>
            Le Studio
          </p>
          <h2
            id="zones-heading"
            class="brand-headline mx-auto mt-3 max-w-2xl text-2xl md:text-3xl lg:text-4xl"
          >
            Trois zones, <span class="text-primary">une</span> performance
          </h2>
        </header>

        <div class="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5">
          <CardZone
            v-for="zone in zones"
            :key="zone.accent"
            v-bind="zone"
          />
        </div>
      </div>
    </section>

    <CardMissionOutcomes />

    <CardEztmPromo v-bind="eztmPromo" />
  </div>
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'
import type { PillarAccent } from '~/types/homepage'
import { sportifPageContent } from '~/data/sportifPage'

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

const hero: PageHeroContent = {
  showTagline: false,
  title: 'Un objectif <strong>commun</strong> : votre performance.',
  description:
    'Le Gym, Le Lab et Le Studio — coaching, soins et cours réunis pour accompagner <strong>chaque sportif</strong>, du premier pas au retour à la compétition.',
}

const eztmPromo = {
  title: 'Découvrez EZTM',
  description:
    "L'application EZTM arrive bientôt sur l'App Store et Google Play. Pilotez la santé et la performance de vos équipes avec Objectif Sport.",
}

useSeoMeta({
  title: 'Objectif Sport — Le Gym, Le Lab & Le Studio',
  description:
    'Trois zones complémentaires — Le Gym, Le Lab et Le Studio — au service de la performance et de la santé du sportif.',
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
