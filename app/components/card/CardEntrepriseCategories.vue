<template>
  <!-- CardEntrepriseCategories -->
  <Card
    class="card-entreprise-categories"
    aria-label="Consulting, Soins et Coaching"
  >
    <ul class="grid grid-cols-1 justify-items-stretch gap-8 sm:grid-cols-3 sm:justify-items-center sm:gap-6">
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
  </Card>
</template>

<script setup lang="ts">
import type { EntrepriseCategory } from '~/types/entreprise'

defineProps<{
  categories: EntrepriseCategory[]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-entreprise-categories {
  @apply pb-6 md:pb-8;
}
</style>
