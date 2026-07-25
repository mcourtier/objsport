<template>
  <!-- CardAudienceItem -->
  <NuxtLink
    :to="to"
    class="card-surface card-audience-item group"
    data-reveal
  >
    <div class="flex items-start gap-4">
      <span
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 ring-2 ring-primary"
        aria-hidden="true"
      >
        <Icon
          :name="icon"
          class="h-6 w-6 text-primary"
        />
      </span>
      <div class="min-w-0">
        <h3 class="font-display text-lg font-bold uppercase italic text-neutral-100">
          {{ title }}
        </h3>
        <p class="mt-2 text-sm leading-snug text-neutral-400">
          {{ description }}
        </p>
      </div>
    </div>

    <span
      class="font-display mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary"
    >
      {{ cta }}
      <Icon
        name="material-symbols:arrow-forward"
        class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { AudienceBlock } from '~/types/navigation'

defineProps<AudienceBlock>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-audience-item {
  @apply relative flex h-full flex-col p-5 transition-colors hover:border-neutral-600 hover:bg-neutral-900 md:p-6;
}
</style>
