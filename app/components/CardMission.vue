<template>
  <!-- CardMission -->
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="mission-heading"
  >
    <div class="relative p-6 md:p-8">
      <div
        class="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="max-w-3xl">
          <h2 id="mission-heading" class="mission-stacked-title">
            <span
              v-for="(line, index) in titleLines"
              :key="`${line}-${index}`"
              class="brand-headline mission-title-line block text-2xl md:text-3xl lg:text-4xl"
            >
              {{ line }}
            </span>
            <span
              class="brand-headline mission-title-line text-primary block text-2xl md:text-3xl lg:text-4xl"
            >
              {{ titleAccent }}
            </span>
          </h2>

          <div
            class="bg-primary mt-5 h-1 max-w-24"
            aria-hidden="true"
          />

          <div class="mt-6 space-y-4">
            <p
              v-for="(paragraph, index) in parsedParagraphs"
              :key="index"
              class="text-base text-neutral-300 md:text-lg"
            >
              <template
                v-for="part in paragraph"
                :key="`${part.text}-${part.isHighlight}`"
              >
                <strong v-if="part.isHighlight" class="text-primary">
                  {{ part.text }}
                </strong>
                <span v-else>{{ part.text }}</span>
              </template>
            </p>
          </div>
        </div>

        <div
          class="flex flex-col gap-5 sm:gap-6 lg:shrink-0"
          aria-hidden="true"
        >
          <div
            v-for="pictogram in missionPictograms"
            :key="pictogram.label"
            class="flex items-center gap-3 sm:gap-4"
          >
            <div class="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
              <PillarShape :accent="pictogram.accent" class="size-full" />
              <div
                class="absolute inset-0 flex flex-col items-center justify-center gap-0.5 px-1 pt-2 pb-1.5"
              >
                <Icon
                  :name="pictogram.icon"
                  class="h-7 w-7 shrink-0 text-neutral-900 sm:h-9 sm:w-9"
                />
                <span
                  class="font-display text-[8px] leading-none font-bold tracking-wide text-neutral-900 uppercase sm:text-[10px]"
                >
                  {{ pictogram.label }}
                </span>
              </div>
            </div>
            <p
              class="font-display text-xl leading-none font-bold tracking-wide uppercase sm:text-2xl lg:text-3xl"
              :class="sectionTextClass(pictogram.accent)"
            >
              {{ pictogram.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeMissionContent } from '~/types/homepage'
import type { SectionAccent } from '~/types/navigation'
import { parseHighlightedText } from '~/utils/parseHighlightedText'
import { sectionTextClass } from '~/utils/pillarTheme'

const props = defineProps<HomeMissionContent>()

const parsedParagraphs = computed(() =>
  props.paragraphs.map((paragraph) => parseHighlightedText(paragraph)),
)

const missionPictograms: {
  label: string
  accent: SectionAccent
  icon: string
}[] = [
  {
    label: 'CONSULTING',
    accent: 'consulting',
    icon: 'material-symbols:monitoring',
  },
  {
    label: 'SOINS',
    accent: 'care',
    icon: 'material-symbols:handyman-outline',
  },
  {
    label: 'COACHING',
    accent: 'coaching',
    icon: 'material-symbols:bolt',
  },
]
</script>

<style scoped>
.mission-stacked-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
}

.mission-title-line {
  line-height: 0.95;
  letter-spacing: -0.02em;
}
</style>
