<template>
  <NuxtLink
    :to="to"
    :aria-label="`${title} — ${description}`"
    class="group flex flex-col items-center text-center transition-opacity hover:opacity-90"
  >
    <div class="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
      <PillarShape :accent="accent" class="size-full" />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 pt-3 pb-2"
      >
        <div
          class="flex items-end justify-center gap-0.5 text-neutral-900 sm:gap-1"
          aria-hidden="true"
        >
          <template v-if="accent === 'consulting'">
            <svg
              class="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="4.5"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <svg
              class="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 20a10 10 0 0 1 20 0"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8 20h16"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M10 20.5h1.2M13.5 20.5h1.2M16 20.5h1.2M18.5 20.5h1.2M21 20.5h1.2"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M16 20V10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <circle cx="16" cy="20" r="1.25" fill="currentColor" />
            </svg>
            <svg
              class="h-5 w-5 shrink-0 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 17a7 7 0 0 1 14 0"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7 17h10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M12 17V9.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                transform="rotate(28 12 17)"
              />
              <circle cx="12" cy="17" r="1" fill="currentColor" />
            </svg>
          </template>
          <template v-else>
            <Icon
              :name="sectionIconName(accent)"
              class="h-4 w-4 opacity-80 sm:h-5 sm:w-5"
            />
            <Icon
              :name="sectionIconName(accent)"
              class="h-7 w-7 sm:h-8 sm:w-8"
            />
            <Icon
              :name="sectionIconName(accent)"
              class="h-5 w-5 opacity-90 sm:h-6 sm:w-6"
            />
          </template>
        </div>
        <span
          class="font-display text-[0.5rem] leading-none font-bold tracking-wide text-neutral-900 uppercase sm:text-[0.5625rem]"
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
import { sectionIconName, sectionTextClass } from '~/utils/pillarTheme'

defineProps<{
  to: string
  label: string
  accent: SectionAccent
  title: string
  description: string
}>()
</script>
