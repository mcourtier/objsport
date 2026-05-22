<template>
  <Card class="flex h-full min-h-[240px] flex-col p-6 md:min-h-[280px] md:p-8">
    <p class="font-display text-sm font-semibold uppercase tracking-widest text-brand-red">
      {{ eyebrow }}
    </p>
    <h2 class="brand-headline mt-2 text-xl md:text-2xl">
      {{ titleBefore }}
      <span class="text-brand-red">{{ titleHighlight }}</span>
      {{ titleAfter }}
    </h2>
    <p class="mt-1 font-display text-xs font-semibold uppercase tracking-wider text-text-muted">
      EasyTeam Cockpit Santé de Performance
    </p>

    <div
      class="relative mt-6 flex flex-1 min-h-[160px] items-stretch overflow-hidden rounded-xl border border-border-subtle bg-bg-elevated"
      aria-hidden="true"
    >
      <div class="w-1/4 border-r border-border-subtle bg-bg-base/80 p-3">
        <div class="space-y-2">
          <div
            v-for="i in 4"
            :key="i"
            class="h-2 rounded bg-border-subtle"
            :class="i === 1 ? 'w-full bg-brand-red/60' : 'w-3/4'"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-col p-4">
        <div class="flex gap-2">
          <div
            v-for="i in 3"
            :key="i"
            class="h-12 flex-1 rounded-lg border border-border-subtle bg-bg-card"
          />
        </div>
        <div class="mt-3 flex-1 rounded-lg border border-border-subtle bg-bg-card" />
        <div class="mt-3 grid grid-cols-2 gap-2">
          <div class="h-16 rounded-lg border border-border-subtle bg-bg-card" />
          <div class="h-16 rounded-lg border border-border-subtle bg-bg-card" />
        </div>
      </div>
    </div>

    <p class="mt-4 text-sm text-text-secondary">
      {{ description }}
    </p>
  </Card>
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
