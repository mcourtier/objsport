<template>
  <!-- CardMissionOutcomes -->
  <UCard class="relative overflow-hidden bg-black">
    <ul
      class="flex flex-col divide-y divide-neutral-700 md:flex-row md:divide-x md:divide-y-0"
      aria-label="Nos piliers de performance"
    >
      <li
        v-for="outcome in outcomes"
        :key="outcome.title"
        class="flex flex-1 items-center gap-4 p-6 md:gap-5 md:p-8"
      >
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16"
          :class="sectionIconSurfaceClass(outcome.accent)"
          aria-hidden="true"
        >
          <Icon
            :name="outcome.icon"
            class="h-7 w-7 sm:h-8 sm:w-8"
            :class="sectionTextClass(outcome.accent)"
          />
        </div>
        <div class="min-w-0">
          <p
            class="font-display text-sm leading-tight font-bold tracking-wide uppercase sm:text-base lg:text-lg"
            :class="sectionTextClass(outcome.accent)"
          >
            {{ outcome.title }}
          </p>
          <p class="text-neutral-300 mt-1 text-sm leading-snug">
            {{ outcome.subtitle }}
          </p>
        </div>
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
import type { SectionAccent } from '~/types/navigation'
import { sectionIconSurfaceClass, sectionTextClass } from '~/utils/pillarTheme'

const outcomes: {
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
</script>
