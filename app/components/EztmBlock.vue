<template>
  <section
    class="border-border-subtle border-t py-16 md:py-20"
    aria-labelledby="eztm-heading"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div
        class="border-border-subtle border-t-brand-red bg-bg-card border border-t-4 p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-12"
      >
        <div class="max-w-xl">
          <p
            class="font-display text-brand-red text-sm font-semibold tracking-widest uppercase"
          >
            {{ eyebrow }}
          </p>
          <h2
            id="eztm-heading"
            class="brand-headline mt-2 text-2xl md:text-3xl"
          >
            {{ titleBefore }}
            <span class="text-brand-red">{{ titleHighlight }}</span>
            {{ titleAfter }}
          </h2>
          <p
            class="font-display text-text-muted mt-1 text-xs font-semibold tracking-wider uppercase"
          >
            EasyTeam Cockpit Santé de Performance
          </p>
          <p class="text-text-secondary mt-4">
            {{ description }}
          </p>
        </div>
        <div class="mt-8 flex shrink-0 flex-wrap gap-4 md:mt-0">
          <span
            class="border-border-subtle font-display tracking-button text-text-muted inline-flex cursor-not-allowed items-center justify-center border px-7 py-3.5 text-sm font-semibold uppercase opacity-60"
            aria-disabled="true"
          >
            {{ appStoreLabel }}
          </span>
          <span
            class="border-border-subtle font-display tracking-button text-text-muted inline-flex cursor-not-allowed items-center justify-center border px-7 py-3.5 text-sm font-semibold uppercase opacity-60"
            aria-disabled="true"
          >
            {{ playStoreLabel }}
          </span>
        </div>
      </div>
    </div>
  </section>
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
