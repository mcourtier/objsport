<template>
  <article
    class="group border-border-subtle bg-bg-card hover:border-brand-red/30 flex flex-col border border-t-4 p-8 transition-colors md:p-10"
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
    />
    <h2
      class="font-display text-text-primary text-2xl font-bold tracking-wide uppercase"
    >
      {{ block.title }}
    </h2>
    <p class="text-text-secondary mt-4 flex-1">
      {{ block.description }}
    </p>
    <NuxtLink
      :to="block.to"
      class="font-display tracking-button text-brand-red hover:text-brand-red-hover mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase transition-colors"
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
