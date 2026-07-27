<template>
  <!-- CardAudienceItem -->
  <NuxtLink :to="to" class="card-audience-link group">
    <Card class="card-audience-item" :ui="cardUi" data-reveal>
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

      <template #footer>
        <span
          class="font-display inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-primary"
        >
          {{ cta }}
          <Icon
            name="material-symbols:arrow-forward"
            class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </template>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { AudienceBlock } from '~/types/navigation'

defineProps<AudienceBlock>()

const cardUi = {
  body: 'p-5 pb-0 md:p-6 md:pb-0 flex-1',
  footer: 'px-5 pt-5 pb-5 md:px-6 md:pt-5 md:pb-6',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-audience-link {
  @apply block h-full;
}

.card-audience-item {
  @apply relative flex h-full flex-col transition-colors duration-200 hover:border-neutral-600 hover:bg-neutral-900;
}
</style>
