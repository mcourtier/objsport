<template>
  <CardHero v-bind="hero" />
</template>

<script setup lang="ts">
import type { HomeHeroContent } from '~/types/homepage'

defineProps<{
  hero: HomeHeroContent
}>()
</script>
