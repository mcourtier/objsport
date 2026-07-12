<template>
  <!-- CardMission -->
  <Card class="card-mission" aria-labelledby="mission-heading">
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
              data-reveal
            >
              {{ line }}
            </span>
            <span
              class="brand-headline mission-title-line text-primary block text-2xl md:text-3xl lg:text-4xl"
              data-reveal
            >
              {{ titleAccent }}
            </span>
          </h2>

          <BrandBrushLine
            class="text-primary"
            data-reveal-scale-x
          />

          <div class="mt-6 space-y-4">
            <p
              v-for="(paragraph, index) in parsedParagraphs"
              :key="index"
              class="text-base text-neutral-300 md:text-lg"
              data-reveal
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
            data-reveal-from-x
          >
            <div class="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
              <PillarShape :accent="pictogram.accent" class="size-full" />
              <div
                class="absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 pt-2.5 pb-2.5"
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
              class="font-display text-lg leading-none font-bold tracking-wide uppercase sm:text-xl lg:text-2xl"
              :class="sectionTextClass(pictogram.accent)"
            >
              {{ pictogram.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
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
@reference "~/assets/css/main.css";
.card-mission {
  @apply relative;
}

.mission-stacked-title {
  @apply flex flex-col items-start gap-0.5;
}

.mission-title-line {
  @apply leading-[0.95] tracking-[-0.02em];
}
</style>
