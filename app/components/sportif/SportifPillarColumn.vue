<template>
  <NuxtLink
    :to="getSportifPillarPath(pillar.accent)"
    class="flex flex-col transition-opacity hover:opacity-90"
    :class="[
      hideHeader
        ? 'border-0 p-0'
        : [
            'rounded-2xl border px-5 py-5 md:px-6 md:py-6',
            pillarBorderClass(pillar.accent),
          ],
    ]"
    data-animate
  >
    <header v-if="!hideHeader">
      <div class="flex items-center gap-2.5">
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
          :class="pillarIconCircleClass(pillar.accent)"
          aria-hidden="true"
        >
          <SportifPillarHeaderIcon :accent="pillar.accent" size="sm" />
        </span>
        <h2
          class="font-display tracking-button text-2xl font-bold uppercase"
          :class="pillarTextClass(pillar.accent)"
        >
          {{ pillar.name }}
        </h2>
        <p
          class="font-display tracking-button text-neutral-100 text-xs font-semibold uppercase md:text-sm"
        >
          {{ pillar.subtitle }}
        </p>
      </div>
      <div
        class="mt-4 h-px w-full"
        :class="pillarDividerClass(pillar.accent)"
        aria-hidden="true"
      />
    </header>

    <div
      class="flex flex-col gap-6 md:flex-row md:flex-wrap"
      :class="{ 'mt-8': !hideHeader }"
    >
      <div
        v-for="section in pillar.sections"
        :key="section.title"
        class="min-w-0 flex-1"
      >
        <h3
          class="font-display tracking-button text-sm font-bold uppercase"
          :class="pillarTextClass(pillar.accent)"
        >
          {{ section.title }}
        </h3>
        <ul class="mt-4 space-y-4">
          <li
            v-for="item in section.items"
            :key="item.title"
            class="flex gap-3"
          >
            <span
              class="mt-0.5"
              :class="pillarTextClass(pillar.accent)"
              aria-hidden="true"
            >
              <SportifServiceIcon :name="item.icon" />
            </span>
            <div>
              <p
                class="font-display text-neutral-100 text-sm leading-snug font-semibold uppercase"
              >
                {{ item.title }}
              </p>
              <p class="text-neutral-400 mt-0.5 text-sm">
                {{ item.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { getSportifPillarPath } from '~/data/sportifPage'
import type { SportifPillar } from '~/types/sportif'
import {
  pillarBorderClass,
  pillarDividerClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'

defineProps<{
  pillar: SportifPillar
  hideHeader?: boolean
}>()
</script>
