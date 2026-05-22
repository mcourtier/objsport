<template>
  <UCard
    class="from-brand-red/25 via-bg-card to-bg-card flex h-full flex-col justify-center bg-gradient-to-br"
  >
    <h2
      id="audiences-heading"
      class="font-display text-text-primary text-lg leading-snug font-bold tracking-wide uppercase md:text-xl"
    >
      {{ heading }}
      <span class="text-brand-red">{{ headingHighlight }}</span>
    </h2>

    <ul class="mt-6 space-y-4">
      <li v-for="block in blocks" :key="block.id" class="flex gap-3">
        <Icon
          name="mdi:check-circle"
          class="text-brand-red mt-0.5 h-5 w-5 shrink-0"
          aria-hidden="true"
        />
        <div>
          <p
            class="font-display tracking-button text-text-primary text-sm font-bold uppercase"
          >
            {{ block.title }}
          </p>
          <p class="text-text-secondary mt-1 text-sm">
            {{ block.description }}
          </p>
        </div>
      </li>
    </ul>
  </UCard>
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
