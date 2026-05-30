<template>
  <!-- CardFeatures -->
  <UCard
    class="from-primary/25 flex h-full flex-col justify-center bg-gradient-to-br via-neutral-800 to-neutral-800"
  >
    <h2
      id="features-heading"
      class="font-display text-lg leading-snug font-bold tracking-wide text-neutral-100 uppercase md:text-xl"
    >
      {{ heading }}
      <span class="text-primary">{{ headingHighlight }}</span>
    </h2>

    <ul class="mt-6 grid grid-cols-3 justify-items-center gap-3 sm:gap-8">
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
