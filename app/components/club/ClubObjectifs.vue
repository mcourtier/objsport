<template>
  <Card
    as="section"
    aria-labelledby="club-objectifs-heading"
    :ui="{ body: 'flex flex-col' }"
  >
    <p
      id="club-objectifs-heading"
      class="font-display tracking-button text-sm leading-relaxed font-normal text-neutral-100 uppercase md:text-base"
    >
      {{ objectifs.intro }}
    </p>
    <p
      class="font-display tracking-button text-primary-500 mt-4 text-sm font-bold uppercase md:text-base"
    >
      {{ objectifs.goal }}
    </p>

    <p
      class="font-display tracking-button my-6 text-sm leading-relaxed font-normal text-neutral-100 uppercase md:text-base"
    >
      <template
        v-for="(part, index) in parsedTagline"
        :key="`${part.text}-${index}`"
      >
        <strong v-if="part.isHighlight" class="text-primary-500">
          {{ part.text }}
        </strong>
        <span v-else>{{ part.text }}</span>
      </template>
    </p>

    <ul
      class="mt-auto grid gap-3 border-t border-neutral-700 pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-neutral-700"
      aria-label="Nos engagements"
    >
      <li
        v-for="pillar in objectifs.pillars"
        :key="pillar.label"
        class="flex items-center gap-3 sm:flex-col sm:gap-2 sm:px-2 sm:text-center"
      >
        <Icon
          :name="clubObjectifPillarIcon(pillar.icon)"
          class="text-primary h-7 w-7 shrink-0"
          aria-hidden="true"
        />
        <span
          class="font-display tracking-button text-xs font-bold text-neutral-100 uppercase"
        >
          {{ pillar.label }}
        </span>
      </li>
    </ul>
  </Card>
</template>

<script setup lang="ts">
import type { ClubObjectifsContent } from '~/types/club'
import { parseHighlightedText } from '~/utils/parseHighlightedText'
import { clubObjectifPillarIcon } from '~/utils/clubIcons'

const props = defineProps<{
  objectifs: ClubObjectifsContent
}>()

const parsedTagline = computed(() =>
  parseHighlightedText(props.objectifs.tagline),
)
</script>
