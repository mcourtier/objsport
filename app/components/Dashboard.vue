<template>
  <div ref="root" class="mt-5 grid gap-4 lg:grid-cols-3 lg:gap-5">
    <CardContact v-bind="contact" />
    <CardFeatureHighlight v-bind="highlight" />
    <CardEztmPromo v-bind="promo" />
  </div>
</template>

<script setup lang="ts">
import type { HomeDashboardContent } from '~/types/homepage'

defineProps<HomeDashboardContent>()

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
