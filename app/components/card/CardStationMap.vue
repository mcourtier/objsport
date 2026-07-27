<template>
  <!-- CardStationMap -->
  <Card
    class="overflow-hidden bg-black"
    :surface="false"
    :ui="{ body: '' }"
    data-reveal
  >
    <div class="station-map">
      <div
        class="station-map__callouts pointer-events-none hidden overflow-visible lg:grid lg:grid-cols-3 lg:gap-6 lg:px-4 lg:pt-5"
        aria-hidden="true"
      >
        <div
          v-for="callout in callouts"
          :key="callout.accent"
          class="station-map-callout"
          :class="`station-map-callout--${callout.accent}`"
        >
          <div class="station-map-callout__inner">
            <div class="station-map-callout__panel">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-2"
                  :class="[
                    pillarBorderClass(callout.accent),
                    pillarTextClass(callout.accent),
                  ]"
                >
                  <Icon
                    :name="sportifPillarHeaderIcon(callout.accent)"
                    class="h-5 w-5"
                  />
                </span>

                <h3
                  class="font-display text-xl font-bold uppercase italic"
                  :class="pillarTextClass(callout.accent)"
                >
                  {{ callout.title }}
                </h3>
              </div>

              <p class="mt-3 text-sm leading-snug text-neutral-100">
                {{ callout.description }}
              </p>

              <p
                class="mt-2 text-xs font-bold tracking-wide uppercase"
                :class="pillarTextClass(callout.accent)"
              >
                {{ callout.highlight }}
              </p>

              <p class="mt-1 text-xs leading-snug text-neutral-100">
                {{ callout.note }}
              </p>
            </div>

            <svg
              class="station-map-callout__connector"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                :d="callout.connectorPath"
                stroke="white"
                stroke-width="1"
                vector-effect="non-scaling-stroke"
              />
              <circle cx="50" cy="100" r="8" fill="white" />
            </svg>
          </div>
        </div>
      </div>

      <div class="station-map__image relative z-0">
        <img
          src="/images/stations/objectif-sport-station.jpg"
          alt="Station Sport Santé Objectif Sport — Lab, Gym et Studio"
          class="w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import { pillarBorderClass, pillarTextClass } from '~/utils/pillarTheme'
import { sportifPillarHeaderIcon } from '~/utils/sportifIcons'

type StationMapCallout = {
  accent: PillarAccent
  title: string
  description: string
  highlight: string
  note: string
  connectorPath: string
}

const callouts: StationMapCallout[] = [
  {
    accent: 'lab',
    title: 'Lab',
    description:
      'Évaluation, tests, analyses et suivi de la performance et de la santé.',
    highlight: "Inclut l'espace SOINS",
    note: '(kinésithérapie et soins spécifiques du sportif).',
    connectorPath: 'M50 0 V100',
  },
  {
    accent: 'gym',
    title: 'Gym',
    description:
      'Coaching en petit groupe pour activer, rééduquer et retrouver la performance.',
    highlight: "Inclut l'espace COACHING",
    note: '(préhab, réhab et réathlétisation en sessions de 45 min).',
    connectorPath: 'M50 0 V100',
  },
  {
    accent: 'studio',
    title: 'Studio',
    description:
      'Cours en small-groupe pour renforcer le corps et maîtriser les fondamentaux du mouvement.',
    highlight: 'Inclut les espaces COURS',
    note: '(pilates, yoga, HIIT et ateliers pédagogiques).',
    connectorPath: 'M50 0 V100',
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

.station-map__callouts {
  @apply mx-auto w-4/5;
}

.station-map-callout {
  @apply relative overflow-visible;
}

.station-map-callout__inner {
  @apply relative w-full max-w-[15rem];
}

.station-map-callout__panel {
  @apply relative z-10 w-full bg-black/80 px-5 py-4 backdrop-blur-sm;
}

.station-map-callout__connector {
  @apply absolute z-20 overflow-visible;
  left: 50%;
  top: 100%;
  width: 2rem;
  height: 60px;
  transform: translateX(-50%);
}

.station-map-callout--lab {
  @apply flex justify-start;
}

.station-map-callout--gym {
  @apply flex justify-center;
}

.station-map-callout--studio {
  @apply flex justify-end;
}
</style>
