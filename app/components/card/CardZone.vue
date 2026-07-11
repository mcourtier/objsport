<template>
  <!-- CardZone -->
  <NuxtLink
    :to="to"
    class="card-surface card-zone group"
    data-reveal
  >
    <div class="flex items-center gap-4">
      <span
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
        :class="pillarIconCircleClass(accent)"
        aria-hidden="true"
      >
        <SportifPillarHeaderIcon :accent="accent" />
      </span>

      <div class="flex flex-col">
        <h3
          class="font-display text-2xl font-bold uppercase italic"
          :class="pillarTextClass(accent)"
        >
          {{ name }}
        </h3>
        <p
          class="font-display mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-100 md:text-sm"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>

    <div
      class="mt-4 h-px w-full"
      :class="pillarDividerClass(accent)"
      aria-hidden="true"
    />

    <div class="mt-4 flex flex-1 flex-col">
      <p class="text-sm leading-snug text-neutral-400">
        {{ description }}
      </p>
    </div>

    <ul class="mt-5 flex flex-wrap gap-2">
      <li
        v-for="label in sectionLabels"
        :key="label"
        class="font-display rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
        :class="[pillarBorderClass(accent), pillarTextClass(accent)]"
      >
        {{ label }}
      </li>
    </ul>

    <span
      class="font-display mt-6 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide"
      :class="pillarTextClass(accent)"
    >
      Découvrir la zone
      <Icon
        name="material-symbols:arrow-forward"
        class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import {
  pillarBorderClass,
  pillarDividerClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'

defineProps<{
  accent: PillarAccent
  to: string
  name: string
  subtitle: string
  description: string
  sectionLabels: string[]
}>()

</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-zone {
  @apply relative flex h-full flex-col p-6 transition-colors duration-200 hover:border-neutral-600 hover:bg-neutral-900 md:p-7;
}
</style>
