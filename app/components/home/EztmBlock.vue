<template>
  <section
    class="border-t border-border-subtle py-16 md:py-20"
    aria-labelledby="eztm-heading"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <div class="border border-border-subtle bg-bg-elevated p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-12">
        <div class="max-w-xl">
          <p class="font-display text-sm font-semibold uppercase tracking-widest text-brand-red">
            {{ eyebrow }}
          </p>
          <h2
            id="eztm-heading"
            class="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-text-primary md:text-3xl"
          >
            {{ titleBefore }} <span class="text-brand-red">{{ titleHighlight }}</span>
          </h2>
          <p class="mt-4 text-text-secondary">
            {{ description }}
          </p>
        </div>
        <div class="mt-8 flex shrink-0 flex-wrap gap-4 md:mt-0">
          <span
            class="inline-flex cursor-not-allowed items-center justify-center border border-border-subtle px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-button text-text-muted opacity-60"
            aria-disabled="true"
          >
            {{ appStoreLabel }}
          </span>
          <span
            class="inline-flex cursor-not-allowed items-center justify-center border border-border-subtle px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-button text-text-muted opacity-60"
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
  eyebrow: 'Application mobile',
  titleBefore: 'Téléchargez',
  titleHighlight: 'EZTM',
  description:
    'L’application EZTM arrive bientôt sur l’App Store et Google Play. Restez connectés pour suivre votre progression avec Objectif Sport.',
  appStoreLabel: 'App Store — bientôt',
  playStoreLabel: 'Google Play — bientôt',
})
</script>
