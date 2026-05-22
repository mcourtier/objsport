<template>
  <section
    class="border-border-subtle border-t py-16 md:py-24"
    aria-labelledby="audiences-heading"
  >
    <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      <header class="max-w-2xl">
        <h2
          id="audiences-heading"
          class="brand-headline text-3xl not-italic md:text-4xl"
        >
          {{ heading }}
          <span class="text-brand-red">{{ headingHighlight }}</span>
        </h2>
        <div class="brand-section-rule mt-6 max-w-xs" aria-hidden="true" />
        <p class="text-text-secondary mt-4 text-lg">
          {{ intro }}
        </p>
      </header>

      <div class="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        <AudienceCard v-for="block in blocks" :key="block.id" :block="block" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeAudienceGridContent } from '~/types/homepage'

withDefaults(defineProps<HomeAudienceGridContent>(), {
  heading: 'Trois parcours,',
  headingHighlight: 'une expertise',
  intro:
    'Que vous soyez une entreprise, un club ou un sportif, Objectif Sport vous accompagne avec des solutions adaptées à vos objectifs.',
  blocks: () => [],
})
</script>
