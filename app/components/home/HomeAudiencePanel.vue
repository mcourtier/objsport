<template>
  <HomeDashboardCard class="flex h-full flex-col justify-center bg-gradient-to-br from-brand-red/25 via-bg-card to-bg-card p-6 md:p-8">
    <h2
      id="audiences-heading"
      class="font-display text-lg font-bold uppercase leading-snug tracking-wide text-text-primary md:text-xl"
    >
      {{ heading }}
      <span class="text-brand-red">{{ headingHighlight }}</span>
    </h2>

    <ul class="mt-6 space-y-4">
      <li
        v-for="block in blocks"
        :key="block.id"
        class="flex gap-3"
      >
        <Icon
          name="mdi:check-circle"
          class="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
          aria-hidden="true"
        />
        <div>
          <p class="font-display text-sm font-bold uppercase tracking-button text-text-primary">
            {{ block.title }}
          </p>
          <p class="mt-1 text-sm text-text-secondary">
            {{ block.description }}
          </p>
        </div>
      </li>
    </ul>
  </HomeDashboardCard>
</template>

<script setup lang="ts">
import type { HomeAudienceGridContent } from '~/types/homepage'

withDefaults(defineProps<HomeAudienceGridContent>(), {
  heading: 'Trois parcours,',
  headingHighlight: 'une expertise',
  intro: '',
  blocks: () => [],
})
</script>
