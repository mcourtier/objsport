<template>
  <section
    class="border-t border-border-subtle bg-bg-elevated py-16 md:py-20"
    aria-labelledby="pillars-heading"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <h2
        id="pillars-heading"
        class="sr-only"
      >
        Nos espaces
      </h2>
      <ul class="grid gap-10 sm:grid-cols-3">
        <li
          v-for="pillar in pillars"
          :key="pillar.name"
          class="text-center"
        >
          <div
            class="mx-auto flex h-16 w-16 items-center justify-center border border-border-subtle text-text-primary"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="h-8 w-8"
            >
              <path
                v-if="pillar.name === 'Le Gym'"
                d="M4 10h16M6 14h12M8 6v12M16 6v12"
              />
              <path
                v-else-if="pillar.name === 'Le Lab'"
                d="M9 3v2M15 3v2M4 9h16M6 19h12a2 2 0 002-2V9H4v8a2 2 0 002 2z"
              />
              <template v-else>
                <circle
                  cx="12"
                  cy="8"
                  r="3"
                />
                <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" />
              </template>
            </svg>
          </div>
          <p class="mt-4 font-display text-sm font-semibold uppercase tracking-button text-text-primary">
            {{ pillar.name }}
          </p>
          <p class="mt-2 text-sm text-text-muted">
            {{ pillar.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomePillarsContent } from '~/types/homepage'

withDefaults(defineProps<HomePillarsContent>(), {
  pillars: () => [
    { name: 'Le Gym', description: 'Préparation physique et musculation' },
    { name: 'Le Lab', description: 'Tests et analyse de performance' },
    { name: 'Le Studio', description: 'Cours collectifs et coaching' },
  ],
})
</script>
