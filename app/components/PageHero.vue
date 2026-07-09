<template>
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="hero-heading"
    data-reveal-hero-section
    :ui="{ body: 'p-0 sm:p-0' }"
  >
    <div
      class="relative aspect-[4/5] max-h-80 w-full overflow-hidden sm:max-h-96 md:hidden"
      aria-hidden="true"
    >
      <img
        class="hero-athlete-mobile h-full w-full object-cover"
        data-reveal-hero-img
        :src="backgroundImage"
        :alt="backgroundImageAlt"
        loading="eager"
        fetchpriority="high"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
      />
    </div>

    <div
      class="absolute inset-y-0 right-0 hidden md:block md:w-[58%] lg:w-[55%]"
      aria-hidden="true"
    >
      <img
        class="hero-athlete-bg h-full w-full object-cover"
        data-reveal-hero-img
        :src="backgroundImage"
        :alt="backgroundImageAlt"
        loading="eager"
      />
    </div>

    <div
      class="relative z-10 p-5 sm:p-6 md:min-h-72 md:max-w-[52%] md:p-8 lg:min-h-80 lg:p-10"
    >
      <CardHeroTagLine v-if="showTagline" :tagline="tagline" />

      <CardHeroTitle :title="title" :title-accent="titleAccent" />

      <p
        v-if="showDescription && description"
        class="font-display mt-4 max-w-xl text-base text-neutral-300 uppercase italic sm:mt-6 sm:text-lg md:text-xl"
        data-reveal-immediate
      >
        <template
          v-for="part in parsedDescription"
          :key="`${part.text}-${part.isHighlight}`"
        >
          <strong v-if="part.isHighlight" class="text-primary">
            {{ part.text }}
          </strong>
          <span v-else>{{ part.text }}</span>
        </template>
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'
import { parseHighlightedText } from '~/utils/parseHighlightedText'

const props = withDefaults(defineProps<PageHeroContent>(), {
  tagline: 'Santé • Performance • Résultats',
  title: '',
  description:
    'Service de réathlétisation — Le Gym, Le Lab et Le Studio au service des entreprises, clubs et sportifs.',
  backgroundImage: '/images/hero/home.png',
  backgroundImageAlt: 'Sportif en action — réathlétisation Objectif Sport',
  showTagline: false,
  showDescription: true,
})

const parsedDescription = computed(() =>
  parseHighlightedText(props.description),
)
</script>

<style scoped>
.hero-athlete-mobile,
.hero-athlete-bg {
  object-position: 72% 12%;
}

.hero-athlete-bg {
  display: block;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgb(0 0 0 / 0.06) 8%,
    rgb(0 0 0 / 0.28) 20%,
    rgb(0 0 0 / 0.58) 34%,
    rgb(0 0 0 / 0.84) 46%,
    black 56%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    rgb(0 0 0 / 0.06) 8%,
    rgb(0 0 0 / 0.28) 20%,
    rgb(0 0 0 / 0.58) 34%,
    rgb(0 0 0 / 0.84) 46%,
    black 56%
  );
}
</style>
