<template>
  <NuxtLink
    :to="to"
    :aria-label="`${title} — ${description}`"
    class="group flex flex-col items-center text-center transition-opacity hover:opacity-90"
  >
    <div class="relative h-20 w-20 shrink-0 sm:h-32 sm:w-32">
      <PillarShape :accent="accent" class="size-full" />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 pt-3 pb-2"
      >
        <Icon
          :name="icon"
          class="h-8 w-8 shrink-0 text-neutral-900 sm:h-10 sm:w-10"
          aria-hidden="true"
        />
        <span
          class="font-display text-[10px] leading-none font-bold tracking-wide text-neutral-900 uppercase sm:text-xs"
        >
          {{ label }}
        </span>
      </div>
    </div>

    <div class="mt-3 space-y-1">
      <p
        class="font-display text-base leading-none font-bold tracking-wide uppercase sm:text-lg"
        :class="sectionTextClass(accent)"
      >
        {{ label }}
      </p>
      <p class="font-body text-sm leading-snug font-normal text-neutral-100">
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
