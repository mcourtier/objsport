<template>
  <CardHero v-bind="props" variant="page" />
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'

const props = withDefaults(defineProps<PageHeroContent>(), {
  showTagline: false,
  showEyebrow: false,
  showCtas: false,
  showDescription: true,
  backgroundImage: '/images/brand/hero-cover.jpg',
  backgroundImageAlt: 'Objectif Sport — coaching bien-être et performance',
})
</script>
