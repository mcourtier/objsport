<template>
  <!-- CardFeatures -->
  <UCard
    class="from-primary/25 via-neutral-800 to-neutral-800 flex h-full flex-col justify-center bg-gradient-to-br"
  >
    <h2
      id="features-heading"
      class="font-display text-neutral-100 text-lg leading-snug font-bold tracking-wide uppercase md:text-xl"
    >
      {{ heading }}
      <span class="text-primary">{{ headingHighlight }}</span>
    </h2>

    <ul class="mt-6 grid justify-items-center gap-8 sm:grid-cols-3 sm:gap-6">
      <li v-for="block in blocks" :key="block.id">
        <Pictogram
          :to="block.to"
          :label="block.label"
          :accent="block.accent"
          :icon="block.icon"
          :title="block.title"
          :description="block.description"
        />
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeFeaturesContent } from '~/types/homepage'

withDefaults(defineProps<HomeFeaturesContent>(), {
  heading: 'Trois parcours,',
  headingHighlight: 'une expertise',
  intro: '',
  blocks: () => [],
})
</script>
