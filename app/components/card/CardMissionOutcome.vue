<template>
  <!-- CardMissionOutcome -->
  <div class="card-surface card-mission-outcome">
    <div
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-2 ring-primary sm:h-16 sm:w-16"
      aria-hidden="true"
    >
      <Icon :name="icon" class="h-7 w-7 text-primary sm:h-8 sm:w-8" />
    </div>
    <div class="min-w-0">
      <p
        class="font-display text-sm leading-tight font-bold tracking-wide text-neutral-100 uppercase sm:text-base lg:text-lg"
      >
        {{ title }}
      </p>
      <p
        v-if="subtitle"
        class="mt-1 text-sm leading-snug text-neutral-300"
      >
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  icon: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-mission-outcome {
  @apply relative flex items-center gap-4 p-6 md:gap-5 md:p-8;
}
</style>
