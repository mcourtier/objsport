<template>
  <NuxtLink
    :to="to"
    :aria-label="`${title} — ${description}`"
    class="group flex flex-row items-center gap-4 text-left transition-opacity hover:opacity-90 sm:flex-col sm:items-center sm:gap-0 sm:text-center"
  >
    <div class="relative h-20 w-20 shrink-0 sm:h-32 sm:w-32">
      <PillarShape :accent="accent" class="size-full" />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 pt-3 pb-2"
      >
        <Icon
          :name="icon"
          class="h-10 w-10 shrink-0 text-neutral-900 sm:h-16 sm:w-16"
          aria-hidden="true"
        />
        <span
          class="font-display text-[10px] leading-none font-bold tracking-wide text-neutral-900 uppercase sm:text-xs"
        >
          {{ label }}
        </span>
      </div>
    </div>

    <div class="min-w-0 flex-1 space-y-1 sm:mt-3 sm:flex-none">
      <p
        class="font-display text-base leading-none font-bold tracking-wide uppercase sm:text-lg"
        :class="sectionTextClass(accent)"
      >
        {{ label }}
      </p>
      <p class="font-body leading-snug font-normal text-neutral-100">
        {{ title }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SectionAccent } from '~/types/navigation'
import { sectionTextClass } from '~/utils/pillarTheme'

defineProps<{
  to: string
  label: string
  accent: SectionAccent
  icon: string
  title: string
  description: string
}>()
</script>
