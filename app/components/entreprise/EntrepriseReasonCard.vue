<template>
  <div class="card-surface entreprise-reason-card">
    <div class="flex items-start gap-3 md:gap-4">
      <span
        class="bg-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-neutral-100"
        aria-hidden="true"
      >
        <Icon :name="entrepriseReasonIcon(reason.icon)" class="h-5 w-5" />
      </span>

      <div class="min-w-0">
        <p
          class="font-display tracking-button text-sm leading-snug font-bold text-neutral-100 uppercase md:text-base"
        >
          {{ reason.title }}
        </p>
        <p class="mt-1 text-sm leading-relaxed text-neutral-300">
          {{ reason.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EntrepriseReason } from '~/types/entreprise'
import { entrepriseReasonIcon } from '~/utils/entrepriseIcons'

defineProps<{
  reason: EntrepriseReason
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.entreprise-reason-card {
  @apply relative h-full p-5 md:p-6;
}
</style>
