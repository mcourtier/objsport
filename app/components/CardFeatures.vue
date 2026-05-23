<template>
  <UCard
    class="from-brand/25 via-neutral-800 to-neutral-800 flex h-full flex-col justify-center bg-gradient-to-br"
  >
    <h2
      id="features-heading"
      class="font-display text-neutral-100 text-lg leading-snug font-bold tracking-wide uppercase md:text-xl"
    >
      {{ heading }}
      <span class="text-brand">{{ headingHighlight }}</span>
    </h2>

    <ul class="mt-6 space-y-4">
      <li v-for="block in blocks" :key="block.id" class="flex gap-3">
        <Icon
          name="material-symbols:check-circle-outline"
          class="text-brand mt-0.5 h-5 w-5 shrink-0"
          aria-hidden="true"
        />
        <div>
          <p
            class="font-display tracking-button text-neutral-100 text-sm font-bold uppercase"
          >
            {{ block.title }}
          </p>
          <p class="text-neutral-300 mt-1 text-sm">
            {{ block.description }}
          </p>
        </div>
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
