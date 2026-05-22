<template>
  <Card class="flex h-full flex-col items-center justify-center p-6 text-center md:p-8">
    <div
      class="relative flex h-28 w-28 items-center justify-center"
      aria-hidden="true"
    >
      <div class="absolute inset-0 rounded-full border border-brand-red/40" />
      <div class="absolute inset-3 rounded-full border border-brand-red/25" />
      <div class="absolute inset-6 rounded-full border border-brand-red/15" />
      <Icon
        name="mdi:heart-pulse"
        class="relative h-10 w-10 text-brand-red"
      />
    </div>

    <h2 class="mt-6 font-display text-lg font-bold uppercase tracking-wide text-text-primary md:text-xl">
      {{ title }}
    </h2>
    <p class="mt-3 max-w-xs text-sm text-text-secondary">
      {{ description }}
    </p>
  </Card>
</template>

<script setup lang="ts">
import type { HomeFeatureHighlightContent } from '~/types/homepage'

defineProps<HomeFeatureHighlightContent>()
</script>
