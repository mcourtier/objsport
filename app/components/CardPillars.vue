<template>
  <UCard v-if="variant === 'embedded'" aria-labelledby="pillars-heading">
    <div class="p-6 md:p-8">
      <header class="text-center">
        <h2
          id="pillars-heading"
          class="font-display text-text-primary text-lg font-bold tracking-wide uppercase md:text-xl"
        >
          {{ heading }}
        </h2>
        <p
          v-if="intro"
          class="text-text-secondary mx-auto mt-2 max-w-2xl text-sm"
        >
          {{ intro }}
        </p>
      </header>

      <ul class="mt-8 grid gap-6 sm:grid-cols-3">
        <li v-for="pillar in pillars" :key="pillar.name" class="text-center">
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
            :class="pillarIconSurfaceClass(pillar.accent)"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="h-8 w-8"
              :class="pillarIconColorClass(pillar.accent)"
            >
              <path :d="pillarIconPath(pillar.accent)" />
            </svg>
          </div>
          <p
            class="font-display tracking-button text-brand-red mt-4 text-sm font-bold uppercase"
          >
            {{ pillar.name }}
          </p>
          <p class="text-text-muted mt-2 text-sm">
            {{ pillar.description }}
          </p>
        </li>
      </ul>

      <ul
        v-if="trustItems.length"
        class="border-border-subtle mt-8 grid gap-4 border-t pt-8 sm:grid-cols-3"
      >
        <li
          v-for="item in trustItems"
          :key="item.label"
          class="flex items-center justify-center gap-2 text-center"
        >
          <Icon
            name="mdi:shield-check-outline"
            class="text-brand-red h-5 w-5 shrink-0"
            aria-hidden="true"
          />
          <span
            class="font-display tracking-button text-text-primary text-xs font-bold uppercase"
          >
            {{ item.label }}
          </span>
        </li>
      </ul>
    </div>
  </UCard>

  <section
    v-else
    class="border-border-subtle bg-bg-elevated border-t py-16 md:py-20"
    aria-labelledby="pillars-heading"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <header class="text-center">
        <h2
          id="pillars-heading"
          class="font-display text-text-primary text-2xl font-bold tracking-wide uppercase md:text-3xl"
        >
          {{ heading }}
        </h2>
        <p v-if="intro" class="text-text-secondary mx-auto mt-3 max-w-2xl">
          {{ intro }}
        </p>
      </header>

      <ul class="mt-12 grid gap-8 sm:grid-cols-3">
        <li
          v-for="pillar in pillars"
          :key="pillar.name"
          class="bg-bg-card flex flex-col border-t-4 p-6 text-center"
          :class="pillarBorderClass(pillar.accent)"
        >
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-full"
            :class="pillarIconSurfaceClass(pillar.accent)"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="h-9 w-9"
              :class="pillarIconColorClass(pillar.accent)"
            >
              <path :d="pillarIconPath(pillar.accent)" />
            </svg>
          </div>
          <p
            class="font-display tracking-button text-text-primary mt-5 text-lg font-bold uppercase"
          >
            {{ pillar.name }}
          </p>
          <p class="text-text-muted mt-2 flex-1 text-sm">
            {{ pillar.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type {
  HomePillarsContent,
  HomeTrustItem,
  PillarAccent,
} from '~/types/homepage'

withDefaults(
  defineProps<
    HomePillarsContent & {
      heading?: string
      intro?: string
      trustItems?: HomeTrustItem[]
      variant?: 'full' | 'embedded'
    }
  >(),
  {
    heading: 'La performance professionnelle',
    intro:
      'Trois espaces complémentaires pour prévenir, optimiser et performer.',
    pillars: () => [
      {
        name: 'Le Gym',
        description: 'Préparation physique et musculation',
        accent: 'gym',
      },
      {
        name: 'Le Lab',
        description: 'Tests et analyse de performance',
        accent: 'lab',
      },
      {
        name: 'Le Studio',
        description: 'Cours collectifs et coaching',
        accent: 'studio',
      },
    ],
    trustItems: () => [],
    variant: 'full',
  },
)

function pillarBorderClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'border-pillar-gym',
    lab: 'border-pillar-lab',
    studio: 'border-pillar-studio',
  }
  return map[accent]
}

function pillarIconSurfaceClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-pillar-gym/15 ring-2 ring-pillar-gym',
    lab: 'bg-pillar-lab/15 ring-2 ring-pillar-lab',
    studio: 'bg-pillar-studio/15 ring-2 ring-pillar-studio',
  }
  return map[accent]
}

function pillarIconColorClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'text-pillar-gym',
    lab: 'text-pillar-lab',
    studio: 'text-pillar-studio',
  }
  return map[accent]
}

function pillarIconPath(accent: PillarAccent) {
  const paths: Record<PillarAccent, string> = {
    gym: 'M6 4h12v2H6zm2 4h8v12H8zm2 2v8h4v-8z',
    lab: 'M9 3v2M15 3v2M5 9h14v10H5zM8 12h8M10 15h4',
    studio: 'M8 10a4 4 0 118 0M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6',
  }
  return paths[accent]
}
</script>
