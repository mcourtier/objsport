<template>
  <!-- CardEntrepriseServices -->
  <Card
    class="card-entreprise-services"
    aria-labelledby="entreprise-services-heading"
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
  </Card>
</template>

<script setup lang="ts">
import type { EntrepriseService } from '~/types/entreprise'

defineProps<{
  title: string
  services: EntrepriseService[]
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-entreprise-services {
  @apply space-y-10 md:space-y-12;
}
</style>
