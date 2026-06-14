<template>
  <!-- CardEntrepriseServices -->
  <UCard
    aria-labelledby="entreprise-services-heading"
    class="space-y-10 md:space-y-12"
    data-reveal-section
  >
    <EntrepriseSectionHeading
      :title="title"
      heading-id="entreprise-services-heading"
    />
    <ul class="grid gap-8 pt-6 sm:gap-10 lg:grid-cols-3 lg:gap-6 lg:pt-8">
      <li v-for="service in services" :key="service.title">
        <EntrepriseServiceCard :service="service" />
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
import type { EntrepriseService } from '~/types/entreprise'

defineProps<{
  title: string
  services: EntrepriseService[]
}>()
</script>
