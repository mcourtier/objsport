<template>
  <!-- CardStationSpaces -->
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="station-spaces-heading"
    data-reveal-section
  >
    <div class="relative p-6 md:p-8">
      <p
        class="mx-auto max-w-3xl text-center text-sm text-neutral-300 md:text-base"
        data-reveal
      >
        Objectif Sport développe le concept de Stations Sport Santé en associant
        professionnels de santé et du sport dans une approche globale de
        performance.
      </p>

      <div class="mt-6 flex justify-center" data-reveal>
        <p
          id="station-spaces-heading"
          class="font-display border-primary inline-block border px-4 py-2 text-center text-sm font-bold tracking-wide uppercase md:text-base"
        >
          Une station,
          <span class="text-primary">4 espaces complémentaires</span>
        </p>
      </div>

      <div
        class="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)_minmax(0,1fr)] lg:items-center lg:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)_minmax(0,1fr)] xl:gap-8"
      >
        <div
          class="order-2 flex flex-col gap-8 lg:order-1 lg:justify-center lg:gap-10"
        >
          <article
            v-for="space in leftSpaces"
            :key="space.title"
            class="flex items-start gap-4 lg:gap-5"
            data-reveal
          >
            <div
              class="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <Icon
                :name="space.icon"
                class="h-6 w-6 text-neutral-100 sm:h-7 sm:w-7"
              />
            </div>
            <div class="min-w-0 pt-0.5">
              <h3
                class="font-display text-primary text-base font-bold tracking-wide uppercase sm:text-lg"
              >
                {{ space.title }}
              </h3>
              <p class="text-neutral-300 mt-1 text-sm leading-snug sm:text-base">
                {{ space.description }}
              </p>
            </div>
          </article>
        </div>

        <div
          class="order-1 flex justify-center lg:order-2"
          data-reveal-scale-x
        >
          <img
            src="/images/home/station-building-cutaway.png"
            alt="Vue en coupe de la station Objectif Sport avec les quatre espaces Lab, Gym, Studio et Soins"
            class="w-full max-w-md object-contain lg:max-w-none"
            width="666"
            height="489"
            loading="lazy"
          />
        </div>

        <div
          class="order-3 flex flex-col gap-8 lg:justify-center lg:gap-10"
        >
          <article
            v-for="space in rightSpaces"
            :key="space.title"
            class="flex items-start gap-4 lg:flex-row-reverse lg:gap-5"
            data-reveal
          >
            <div
              class="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14"
              aria-hidden="true"
            >
              <Icon
                :name="space.icon"
                class="h-6 w-6 text-neutral-100 sm:h-7 sm:w-7"
              />
            </div>
            <div class="min-w-0 pt-0.5 lg:text-right">
              <h3
                class="font-display text-primary text-base font-bold tracking-wide uppercase sm:text-lg"
              >
                {{ space.title }}
              </h3>
              <p class="text-neutral-300 mt-1 text-sm leading-snug sm:text-base">
                {{ space.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const stationSpaces = [
  {
    title: 'Lab',
    description:
      'Évaluation, tests, analyses et suivi de la performance et de la santé.',
    icon: 'material-symbols:ecg-heart-outline',
    side: 'left',
  },
  {
    title: 'Studio',
    description:
      'Cours collectifs, mobilité, préparation physique, bien-être et récupération.',
    icon: 'material-symbols:self-improvement',
    side: 'left',
  },
  {
    title: 'Gym',
    description:
      'Renforcement, préparation physique, réathlétisation et entraînement personnalisé.',
    icon: 'material-symbols:fitness-center',
    side: 'right',
  },
  {
    title: 'Soins',
    description:
      'Soins conventionnés (kinésithérapie) et soins spécifiques du sportif.',
    icon: 'material-symbols:volunteer-activism-outline',
    side: 'right',
  },
] as const

const leftSpaces = stationSpaces.filter((space) => space.side === 'left')
const rightSpaces = stationSpaces.filter((space) => space.side === 'right')
</script>
