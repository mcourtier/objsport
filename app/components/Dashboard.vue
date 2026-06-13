<template>
  <div ref="root" class="mt-5 flex flex-col gap-4 lg:gap-5">
    <CardContact v-bind="contact" />

    <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <div class="lg:col-span-4">
        <CardFeatureHighlight v-bind="highlight" />
      </div>
      <div class="lg:col-span-4 lg:col-start-9">
        <CardEztmPromo v-bind="promo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HomeDashboardContent } from '~/types/homepage'

defineProps<HomeDashboardContent>()

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
