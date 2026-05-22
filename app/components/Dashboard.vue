<template>
  <div class="flex flex-col gap-4 lg:gap-5">
    <div class="grid gap-4 lg:min-h-[min(38vh,400px)] lg:grid-cols-12 lg:gap-5">
      <div class="lg:col-span-8 lg:min-h-[280px]">
        <Hero v-bind="hero" variant="embedded" />
      </div>
      <div class="lg:col-span-4">
        <CardAudience v-bind="audience" />
      </div>
    </div>

    <div class="grid gap-4 lg:min-h-[min(32vh,340px)] lg:grid-cols-12 lg:gap-5">
      <div class="lg:col-span-8">
        <CardAppPreview v-bind="eztm" />
      </div>
      <div class="lg:col-span-4">
        <CardFeatureHighlight v-bind="highlight" />
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <div class="lg:col-span-8">
        <CardPillars v-bind="pillars" variant="embedded" />
      </div>
      <div class="lg:col-span-4">
        <CardContact v-bind="contact" />
      </div>
    </div>

    <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <div class="lg:col-span-4 lg:col-start-9">
        <CardEztmPromo v-bind="promo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HomeDashboardContent } from '~/types/homepage'

defineProps<HomeDashboardContent>()
</script>
