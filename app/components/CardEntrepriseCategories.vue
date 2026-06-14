<template>
  <!-- CardEntrepriseCategories -->
  <UCard
    aria-label="Consulting, Soins et Coaching"
    class="pb-6 md:pb-8"
    data-reveal-section
  >
    <ul class="grid grid-cols-3 justify-items-center gap-4 gap-6">
      <li
        v-for="category in categories"
        :key="category.accent"
        data-reveal
      >
        <Pictogram
          :to="category.to"
          :label="category.label"
          :accent="category.accent"
          :icon="category.icon"
          :title="category.title"
          :description="category.description"
        />
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
import type { EntrepriseCategory } from '~/types/entreprise'

defineProps<{
  categories: EntrepriseCategory[]
}>()
</script>
