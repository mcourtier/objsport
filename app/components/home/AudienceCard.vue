<template>
  <article class="group flex flex-col border border-border-subtle bg-bg-elevated p-8 transition-colors hover:border-brand-red/40 md:p-10">
    <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
      {{ block.title }}
    </h2>
    <p class="mt-4 flex-1 text-text-secondary">
      {{ block.description }}
    </p>
    <NuxtLink
      :to="block.to"
      class="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-button text-brand-red transition-colors hover:text-brand-red-hover"
    >
      {{ block.cta }}
      <span aria-hidden="true">→</span>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { AudienceBlock } from '~/types/navigation'

defineProps<{
  block: AudienceBlock
}>()
</script>
