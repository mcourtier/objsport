<template>
  <!-- CardEquipeValues -->
  <section
    class="card-equipe-values"
    aria-label="Les atouts de l'équipe Objectif Sport"
    data-reveal-section
  >
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
      <li v-for="value in values" :key="value.title" class="min-w-0">
        <CardEquipeValue v-bind="value" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EquipeValue } from '~/types/team'

defineProps<{
  values: EquipeValue[]
}>()
</script>
