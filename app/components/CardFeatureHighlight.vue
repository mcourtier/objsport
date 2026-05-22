<template>
  <UCard class="flex h-full flex-col items-center justify-center text-center">
    <div
      class="relative flex h-28 w-28 items-center justify-center"
      aria-hidden="true"
    >
      <div class="border-brand-red/40 absolute inset-0 rounded-full border" />
      <div class="border-brand-red/25 absolute inset-3 rounded-full border" />
      <div class="border-brand-red/15 absolute inset-6 rounded-full border" />
      <Icon name="mdi:heart-pulse" class="text-brand-red relative h-10 w-10" />
    </div>

    <h2
      class="font-display text-text-primary mt-6 text-lg font-bold tracking-wide uppercase md:text-xl"
    >
      {{ title }}
    </h2>
    <p class="text-text-secondary mt-3 max-w-xs text-sm">
      {{ description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeFeatureHighlightContent } from '~/types/homepage'

defineProps<HomeFeatureHighlightContent>()
</script>
