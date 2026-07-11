<template>
  <!-- CardEquipeValue -->
  <article class="card-equipe-value" data-reveal>
    <Icon
      :name="equipeValueIcon(icon)"
      class="h-12 w-12 shrink-0 md:h-14 md:w-14"
      :class="iconAccent === 'primary' ? 'text-primary' : 'text-neutral-100'"
      aria-hidden="true"
    />

    <h3
      class="font-display tracking-button mt-6 text-xs leading-snug font-bold text-neutral-100 uppercase md:text-sm"
    >
      {{ title }}
    </h3>

    <p class="text-neutral-300 mt-3 text-sm leading-relaxed">
      {{ description }}
    </p>
  </article>
</template>

<script setup lang="ts">
import type { EquipeValue } from '~/types/team'
import { equipeValueIcon } from '~/utils/equipeIcons'

defineProps<EquipeValue>()
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-equipe-value {
  @apply flex h-full flex-col items-center rounded-xl border border-neutral-700 bg-black px-4 py-8 text-center md:px-5 md:py-10;
}
</style>
