<template>
  <CardHero v-bind="props" />
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'

const props = withDefaults(defineProps<PageHeroContent>(), {
  showTagline: false,
  showCtas: false,
  showDescription: true,
  backgroundImageAlt: 'Objectif Sport — coaching bien-être et performance',
})
</script>
