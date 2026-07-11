<template>
  <!-- CardMissionOutcome -->
  <div class="card-surface card-mission-outcome" data-reveal>
    <div
      class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:h-16 sm:w-16"
      :class="sectionIconSurfaceClass(accent)"
      aria-hidden="true"
    >
      <Icon
        :name="icon"
        class="h-7 w-7 sm:h-8 sm:w-8"
        :class="sectionTextClass(accent)"
      />
    </div>
    <div class="min-w-0">
      <p
        class="font-display text-sm leading-tight font-bold tracking-wide uppercase sm:text-base lg:text-lg"
        :class="sectionTextClass(accent)"
      >
        {{ title }}
      </p>
      <p class="mt-1 text-sm leading-snug text-neutral-300">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SectionAccent } from '~/types/navigation'
import { sectionIconSurfaceClass, sectionTextClass } from '~/utils/pillarTheme'

defineProps<{
  title: string
  subtitle: string
  accent: SectionAccent
  icon: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-mission-outcome {
  @apply relative flex items-center gap-4 p-6 md:gap-5 md:p-8;
}
</style>
