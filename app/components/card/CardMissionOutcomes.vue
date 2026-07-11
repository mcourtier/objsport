<template>
  <!-- CardMissionOutcomes -->
  <CardMissionOutcome
    v-for="outcome in outcomes"
    :key="outcome.title"
    v-bind="outcome"
  />
</template>

<script setup lang="ts">
import type { SectionAccent } from '~/types/navigation'

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
