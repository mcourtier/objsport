<template>
  <article
    class="flex flex-col"
    :class="[
      hideHeader && hideImage
        ? 'border-0 p-0'
        : [
            'relative rounded-t-2xl border px-5 pt-14 pb-5 md:px-6 md:pt-16 md:pb-6',
            pillarBorderClass(pillar.accent),
          ],
    ]"
    data-reveal-section
  >
    <span
      v-if="!hideHeader"
      class="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
      :class="pillarIconCircleClass(pillar.accent)"
      aria-hidden="true"
    >
      <SportifPillarHeaderIcon :accent="pillar.accent" />
    </span>

    <header v-if="!hideHeader" class="text-center" data-reveal>
      <h2
        class="font-display tracking-button text-2xl font-bold uppercase"
        :class="pillarTextClass(pillar.accent)"
      >
        {{ pillar.name }}
      </h2>
      <p
        class="font-display tracking-button text-neutral-100 mt-2 text-xs font-semibold uppercase md:text-sm"
      >
        {{ pillar.subtitle }}
      </p>
      <div
        class="mx-auto mt-4 h-px w-full"
        :class="pillarDividerClass(pillar.accent)"
        aria-hidden="true"
      />
    </header>

    <div :class="sectionsGridClass">
      <div
        v-for="section in pillar.sections"
        :key="section.title"
        :class="{ 'mt-8': !hideHeader || !hideImage }"
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
  pillarDividerClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'

const props = defineProps<{
  pillar: SportifPillar
  hideHeader?: boolean
  hideImage?: boolean
}>()

const sectionsGridClass = computed(() => {
  if (!props.hideHeader || !props.hideImage) {
    return undefined
  }

  const count = props.pillar.sections.length
  if (count >= 3) {
    return 'grid gap-6 md:grid-cols-2 lg:grid-cols-3'
  }

  return 'grid gap-6 md:grid-cols-2'
})
</script>
