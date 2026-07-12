<template>
  <Card class="entreprise-service-card h-full" data-reveal>
    <div class="flex items-center gap-4">
      <span
        class="bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-neutral-100"
        aria-hidden="true"
      >
        <Icon
          :name="entrepriseServiceIcon(service.icon)"
          class="h-7 w-7"
        />
      </span>

      <div class="flex flex-col">
        <h3 class="font-display text-primary text-2xl font-bold uppercase italic">
          {{ service.title }}
        </h3>
        <p
          class="font-display mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-100 md:text-sm"
        >
          {{ service.subtitle }}
        </p>
      </div>
    </div>

    <div class="bg-primary mt-4 h-px w-full" aria-hidden="true" />

    <p class="mt-4 text-sm leading-snug text-neutral-400">
      {{ service.description }}
    </p>
  </Card>
</template>

<script setup lang="ts">
import type { EntrepriseService } from '~/types/entreprise'
import { entrepriseServiceIcon } from '~/utils/entrepriseIcons'

defineProps<{
  service: EntrepriseService
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.entreprise-service-card {
  @apply relative flex h-full flex-col;
}
</style>
