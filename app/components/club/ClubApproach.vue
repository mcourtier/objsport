<template>
  <Card as="section" aria-labelledby="club-approach-heading">
    <template #title>
      <AppTitle id="club-approach-heading">{{ approach.title }}</AppTitle>
    </template>

    <ul class="space-y-6">
      <li
        v-for="item in approach.items"
        :key="item.title"
        class="flex gap-4"
      >
        <span
          class="bg-primary text-neutral-100 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <Icon :name="clubApproachIcon(item.icon)" class="h-6 w-6" />
        </span>
        <div>
          <p
            class="font-display tracking-button text-neutral-100 text-sm font-bold uppercase"
          >
            {{ item.title }}
          </p>
          <p
            class="text-neutral-300 mt-1 text-sm leading-relaxed md:text-base"
          >
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <aside
      class="border-primary/40 bg-primary/10 mt-8 rounded-xl border p-5 md:p-6"
      aria-labelledby="club-highlight-heading"
    >
      <div class="flex gap-4">
        <span
          class="text-primary flex h-10 w-10 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Icon name="material-symbols:my-location-outline" class="h-9 w-9" />
        </span>
        <div>
          <p
            id="club-highlight-heading"
            class="font-display tracking-button text-primary-500 text-sm font-bold uppercase"
          >
            {{ approach.highlight.title }}
          </p>
          <p
            class="text-neutral-300 mt-2 text-sm leading-relaxed md:text-base"
          >
            {{ approach.highlight.description }}
          </p>
        </div>
      </div>
    </aside>
  </Card>
</template>

<script setup lang="ts">
import type { ClubApproachContent } from '~/types/club'
import { clubApproachIcon } from '~/utils/clubIcons'

defineProps<{
  approach: ClubApproachContent
}>()
</script>
