<template>
  <div class="card-surface entreprise-reason-card @container" data-reveal>
    <div
      class="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 @sm:grid-cols-[auto_minmax(0,1fr)] @sm:gap-x-4 @sm:gap-y-3"
    >
      <div
        class="col-start-1 row-start-1 self-start @sm:row-span-2 @sm:self-center"
      >
        <span
          v-if="reason.icon !== 'results'"
          class="bg-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-neutral-100"
          aria-hidden="true"
        >
          <Icon :name="entrepriseReasonIcon(reason.icon)" class="h-5 w-5" />
        </span>
        <Icon
          v-else
          :name="entrepriseReasonIcon(reason.icon)"
          class="text-primary h-11 w-11 shrink-0"
          aria-hidden="true"
        />
      </div>

      <p
        class="font-display tracking-button col-start-2 row-start-1 min-w-0 text-xs leading-snug font-bold text-neutral-100 uppercase @xs:text-sm @md:text-base"
      >
        {{ reason.title }}
      </p>

      <p
        class="col-start-2 row-start-2 min-w-0 text-xs leading-relaxed text-neutral-300 @xs:text-sm"
      >
        {{ reason.description }}
      </p>
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
