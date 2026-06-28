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
          <p
            class="brand-tagline"
          >
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
          <NuxtLink
            v-for="zone in zones"
            :key="zone.accent"
            :to="zone.to"
            class="group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-colors duration-200 md:p-7"
            :class="[pillarBorderClass(zone.accent), hoverBgClass[zone.accent]]"
            data-reveal
          >
            <span
              class="font-display pointer-events-none absolute -top-2 right-3 text-7xl font-extrabold italic leading-none opacity-10 transition-opacity duration-200 group-hover:opacity-20"
              :class="pillarTextClass(zone.accent)"
              aria-hidden="true"
            >
              {{ zone.index }}
            </span>

            <span
              class="flex h-14 w-14 items-center justify-center rounded-full"
              :class="pillarIconCircleClass(zone.accent)"
              aria-hidden="true"
            >
              <SportifPillarHeaderIcon :accent="zone.accent" />
            </span>

            <h3
              class="font-display mt-5 text-2xl font-bold uppercase italic"
              :class="pillarTextClass(zone.accent)"
            >
              {{ zone.name }}
            </h3>
            <p
              class="font-display mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-100 md:text-sm"
            >
              {{ zone.subtitle }}
            </p>

            <div
              class="mt-4 h-px w-full"
              :class="pillarDividerClass(zone.accent)"
              aria-hidden="true"
            />

            <p
              class="font-display mt-4 text-sm font-semibold uppercase italic text-neutral-100"
            >
              {{ zone.headline }} —
              <span :class="pillarTextClass(zone.accent)">
                {{ zone.headlineAccent }}
              </span>
            </p>
            <p class="mt-3 text-sm leading-snug text-neutral-400">
              {{ zone.description }}
            </p>

            <ul class="mt-5 flex flex-wrap gap-2">
              <li
                v-for="label in zone.sectionLabels"
                :key="label"
                class="font-display rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
                :class="[pillarBorderClass(zone.accent), pillarTextClass(zone.accent)]"
              >
                {{ label }}
              </li>
            </ul>

            <span
              class="font-display mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide"
              :class="pillarTextClass(zone.accent)"
            >
              Découvrir la zone
              <Icon
                name="material-symbols:arrow-forward"
                class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </NuxtLink>
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
import {
  pillarBorderClass,
  pillarDividerClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'

const zoneRoutes: Record<PillarAccent, string> = {
  gym: '/sportif/le-gym',
  lab: '/sportif/le-lab',
  studio: '/sportif/le-studio',
}

const hoverBgClass: Record<PillarAccent, string> = {
  gym: 'hover:bg-gym/5',
  lab: 'hover:bg-lab/5',
  studio: 'hover:bg-studio/5',
}

const cleanLabel = (title: string) =>
  title.replace(/\s*\(.*?\)\s*/g, '').trim()

const zones = sportifPageContent.pillars.map((pillar, index) => ({
  ...pillar,
  index: String(index + 1).padStart(2, '0'),
  to: zoneRoutes[pillar.accent],
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
