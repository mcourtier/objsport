<template>
  <section aria-labelledby="club-objectifs-heading" data-reveal-section>
    <div class="border-primary rounded-xl border p-5 md:p-6" data-reveal>
      <p
        id="club-objectifs-heading"
        class="font-display tracking-button text-neutral-100 text-sm leading-relaxed font-normal uppercase md:text-base"
      >
        {{ objectifs.intro }}
      </p>
      <p
        class="font-display tracking-button text-yellow-400 mt-4 text-sm font-bold uppercase md:text-base"
      >
        {{ objectifs.goal }}
      </p>

      <ul
        class="mt-6 grid grid-cols-3 divide-x divide-neutral-700 border-t border-neutral-700 pt-6"
        aria-label="Nos engagements"
      >
        <li
          v-for="pillar in objectifs.pillars"
          :key="pillar.label"
          class="flex flex-col items-center gap-2 px-2 text-center first:pl-0 last:pr-0"
        >
          <Icon
            :name="clubObjectifPillarIcon(pillar.icon)"
            class="text-yellow-400 h-7 w-7"
            aria-hidden="true"
          />
          <span
            class="font-display tracking-button text-neutral-100 text-[10px] font-bold uppercase sm:text-xs"
          >
            {{ pillar.label }}
          </span>
        </li>
      </ul>
    </div>

    <div class="mt-6 flex gap-4" data-reveal>
      <Icon
        name="material-symbols:rocket-launch-outline"
        class="text-yellow-400 h-10 w-10 shrink-0 -rotate-12"
        aria-hidden="true"
      />
      <p
        class="font-display tracking-button text-neutral-100 text-sm leading-relaxed font-normal uppercase md:text-base"
      >
        <template
          v-for="(part, index) in parsedTagline"
          :key="`${part.text}-${index}`"
        >
          <strong v-if="part.isHighlight" class="text-yellow-400">
            {{ part.text }}
          </strong>
          <span v-else>{{ part.text }}</span>
        </template>
      </p>
    </div>
  </section>
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
