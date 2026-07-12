<template>
  <!-- CardSportifSection -->
  <Card
    class="card-sportif-section h-full"
    :ui="cardUi"
    data-reveal
  >
    <h3
      class="font-display tracking-button text-sm font-bold uppercase"
      :class="pillarTextClass(accent)"
    >
      {{ section.title }}
    </h3>
    <ul class="mt-4 space-y-4">
      <li
        v-for="item in section.items"
        :key="item.title"
        class="flex gap-3"
        data-reveal
      >
        <span
          class="mt-0.5"
          :class="pillarTextClass(accent)"
          aria-hidden="true"
        >
          <SportifServiceIcon :name="item.icon" />
        </span>
        <div>
          <p
            class="font-display text-sm leading-snug font-semibold text-neutral-100 uppercase"
          >
            {{ item.title }}
          </p>
          <p class="mt-0.5 text-sm text-neutral-400">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import type { SportifServiceSection } from '~/types/sportif'
import { pillarTextClass } from '~/utils/pillarTheme'

defineProps<{
  accent: PillarAccent
  section: SportifServiceSection
}>()

const cardUi = {
  body: 'p-6 md:p-8 flex-1',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-sportif-section {
  @apply relative flex h-full flex-col;
}
</style>
