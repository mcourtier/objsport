<template>
  <article
    class="flex flex-col rounded-2xl border-2 p-5 md:p-6"
    :class="[
      pillarBorderClass(pillar.accent),
      { 'border-0 p-0': hideHeader && hideImage },
    ]"
    data-reveal-section
  >
    <header v-if="!hideHeader" class="text-center" data-reveal>
      <div
        class="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
        :class="pillarIconCircleClass(pillar.accent)"
        aria-hidden="true"
      >
        <Icon
          :name="sportifPillarHeaderIcon(pillar.headerIcon)"
          class="h-10 w-10"
        />
      </div>
      <h2
        class="font-display tracking-button mt-4 text-2xl font-bold uppercase"
        :class="pillarTextClass(pillar.accent)"
      >
        {{ pillar.name }}
      </h2>
      <p
        class="font-display tracking-button text-neutral-100 mt-1 text-sm font-semibold uppercase"
      >
        {{ pillar.subtitle }}
      </p>
    </header>

    <div
      v-for="section in pillar.sections"
      :key="section.title"
      class="mt-8"
      data-reveal
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
          data-reveal
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

    <img
      v-if="!hideImage"
      :src="pillar.imageSrc"
      :alt="pillar.imageAlt"
      class="mt-8 aspect-3/2 w-full rounded-xl object-cover"
      data-reveal
      width="310"
      height="200"
      loading="lazy"
    />
  </article>
</template>

<script setup lang="ts">
import type { SportifPillar } from '~/types/sportif'
import {
  pillarBorderClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'
import { sportifPillarHeaderIcon } from '~/utils/sportifIcons'

defineProps<{
  pillar: SportifPillar
  hideHeader?: boolean
  hideImage?: boolean
}>()
</script>
