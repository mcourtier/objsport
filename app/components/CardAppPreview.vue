<template>
  <UCard class="flex h-full min-h-60 flex-col md:min-h-70">
    <p
      class="font-display text-brand text-sm font-semibold tracking-widest uppercase"
    >
      {{ eyebrow }}
    </p>
    <h2 class="brand-headline mt-2 text-xl md:text-2xl">
      {{ titleBefore }}
      <span class="text-brand">{{ titleHighlight }}</span>
      {{ titleAfter }}
    </h2>
    <p
      class="font-display text-neutral-400 mt-1 text-xs font-semibold tracking-wider uppercase"
    >
      EasyTeam Cockpit Santé de Performance
    </p>

    <div
      class="border-neutral-700 bg-neutral-800 relative mt-6 flex min-h-40 flex-1 items-stretch overflow-hidden rounded-xl border"
      aria-hidden="true"
    >
      <div class="border-neutral-700 bg-neutral-900/80 w-1/4 border-r p-3">
        <div class="space-y-2">
          <div
            v-for="i in 4"
            :key="i"
            class="bg-neutral-700 h-2 rounded"
            :class="i === 1 ? 'bg-brand/60 w-full' : 'w-3/4'"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-col p-4">
        <div class="flex gap-2">
          <div
            v-for="i in 3"
            :key="i"
            class="border-neutral-700 bg-neutral-800 h-12 flex-1 rounded-lg border"
          />
        </div>
        <div
          class="border-neutral-700 bg-neutral-800 mt-3 flex-1 rounded-lg border"
        />
        <div class="mt-3 grid grid-cols-2 gap-2">
          <div class="border-neutral-700 bg-neutral-800 h-16 rounded-lg border" />
          <div class="border-neutral-700 bg-neutral-800 h-16 rounded-lg border" />
        </div>
      </div>
    </div>

    <p class="text-neutral-300 mt-4 text-sm">
      {{ description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeEztmContent } from '~/types/homepage'

withDefaults(defineProps<HomeEztmContent>(), {
  eyebrow: 'Plateforme digitale',
  titleBefore: 'Découvrez',
  titleHighlight: 'EZTM',
  titleAfter: '',
  description:
    'L’application EZTM arrive bientôt sur l’App Store et Google Play. Pilotez la santé et la performance de vos équipes avec Objectif Sport.',
  appStoreLabel: 'App Store — bientôt',
  playStoreLabel: 'Google Play — bientôt',
})
</script>
