<template>
  <section aria-labelledby="club-approach-heading">
    <h2
      id="club-approach-heading"
      class="brand-headline-accent font-display text-xl font-bold uppercase tracking-button text-text-primary md:text-2xl"
    >
      {{ approach.title }}
    </h2>

    <ul class="mt-8 space-y-6">
      <li
        v-for="item in approach.items"
        :key="item.title"
        class="flex gap-4"
      >
        <span
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red text-brand-white"
          aria-hidden="true"
        >
          <Icon
            :name="clubApproachIcon(item.icon)"
            class="h-6 w-6"
          />
        </span>
        <div>
          <p class="font-display text-sm font-bold uppercase tracking-button text-text-primary">
            {{ item.title }}
          </p>
          <p class="mt-1 text-sm leading-relaxed text-text-secondary md:text-base">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <aside
      class="mt-8 rounded-xl border-2 border-accent-consulting p-5 md:p-6"
      aria-labelledby="club-highlight-heading"
    >
      <div class="flex gap-4">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center text-accent-consulting"
          aria-hidden="true"
        >
          <Icon
            name="mdi:crosshairs-gps"
            class="h-9 w-9"
          />
        </span>
        <div>
          <p
            id="club-highlight-heading"
            class="font-display text-sm font-bold uppercase tracking-button text-accent-consulting"
          >
            {{ approach.highlight.title }}
          </p>
          <p class="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
            {{ approach.highlight.description }}
          </p>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
import type { ClubApproachContent } from '~/types/club'
import { clubApproachIcon } from '~/utils/clubIcons'

defineProps<{
  approach: ClubApproachContent
}>()
</script>
