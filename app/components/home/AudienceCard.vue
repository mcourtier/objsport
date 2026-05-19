<template>
  <article
    class="group flex flex-col border border-border-subtle border-t-4 bg-bg-card p-8 transition-colors hover:border-brand-red/30 md:p-10"
    :class="accentBorderClass"
  >
    <img
      v-if="categoryIconSrc"
      :src="categoryIconSrc"
      :alt="''"
      class="mb-6 h-16 w-16 object-contain"
      width="64"
      height="64"
      aria-hidden="true"
    >
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

const props = defineProps<{
  block: AudienceBlock
}>()

const accentBorderClass = computed(() => {
  const map: Record<string, string> = {
    entreprise: 'border-t-accent-consulting',
    club: 'border-t-brand-red',
    sportif: 'border-t-accent-coaching',
  }
  return map[props.block.id] ?? 'border-t-border-subtle'
})

const categoryIconSrc = computed(() => {
  const map: Record<string, string> = {
    entreprise: '/images/brand/icon-consulting.png',
    club: '/images/brand/icon-soins.png',
    sportif: '/images/brand/icon-coaching.png',
  }
  return map[props.block.id]
})
</script>
