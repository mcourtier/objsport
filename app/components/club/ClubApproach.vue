<template>
  <section aria-labelledby="club-approach-heading">
    <h2
      id="club-approach-heading"
      class="brand-headline-accent font-display tracking-button text-text-primary text-xl font-bold uppercase md:text-2xl"
    >
      {{ approach.title }}
    </h2>

    <ul class="mt-8 space-y-6">
      <li v-for="item in approach.items" :key="item.title" class="flex gap-4">
        <span
          class="bg-brand-red text-brand-white flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <Icon :name="clubApproachIcon(item.icon)" class="h-6 w-6" />
        </span>
        <div>
          <p
            class="font-display tracking-button text-text-primary text-sm font-bold uppercase"
          >
            {{ item.title }}
          </p>
          <p
            class="text-text-secondary mt-1 text-sm leading-relaxed md:text-base"
          >
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <aside
      class="border-accent-consulting mt-8 rounded-xl border-2 p-5 md:p-6"
      aria-labelledby="club-highlight-heading"
    >
      <div class="flex gap-4">
        <span
          class="text-accent-consulting flex h-10 w-10 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Icon name="mdi:crosshairs-gps" class="h-9 w-9" />
        </span>
        <div>
          <p
            id="club-highlight-heading"
            class="font-display tracking-button text-accent-consulting text-sm font-bold uppercase"
          >
            {{ approach.highlight.title }}
          </p>
          <p
            class="text-text-secondary mt-2 text-sm leading-relaxed md:text-base"
          >
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
