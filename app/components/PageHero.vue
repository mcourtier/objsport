<template>
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="hero-heading"
    data-reveal-hero-section
  >
    <div class="absolute inset-y-0 right-0">
      <img
        class="hero-athlete-bg h-full w-auto max-w-none"
        data-reveal-hero-img
        :src="backgroundImage"
        :alt="backgroundImageAlt"
        loading="lazy"
      />
    </div>

    <div class="relative p-6 md:p-8 md:pt-0">
      <CardHeroTagLine v-if="showTagline" :tagline="tagline" />

      <CardHeroTitle
        :title="title"
        :title-accent="titleAccent"
        :compact-top="!hasVisibleTagline"
      />

      <p
        v-if="showDescription && description"
        class="font-display mt-6 max-w-xl text-lg text-neutral-300 uppercase italic md:text-xl"
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
  tagline: 'Objectif Sport / Support de performances',
  title: '',
  description:
    'Coaching bien-être et performance pour les entreprises, les clubs sportifs et les sportifs. Interventions en entreprise ou à domicile — Gym, Lab et Studio.',
  backgroundImage: '/images/athlete.png',
  backgroundImageAlt: 'Athlète en sprint — coaching performance Objectif Sport',
  showTagline: false,
  showDescription: true,
})

const parsedDescription = computed(() =>
  parseHighlightedText(props.description),
)

const hasVisibleTagline = computed(() => {
  if (!props.showTagline) return false
  return (
    (props.tagline ?? '')
      .split(/\s*•\s*/)
      .map((segment) => segment.trim())
      .filter(Boolean).length > 0
  )
})
</script>

<style scoped>
.hero-athlete-bg {
  display: block;
  /* object-fit: cover; */
  background-size: 300px auto;
  object-position: right center;
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

@media (max-width: 767px) {
  .hero-athlete-bg {
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0%,
      rgb(0 0 0 / 0.22) 16%,
      rgb(0 0 0 / 0.65) 34%,
      black 48%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      rgb(0 0 0 / 0.22) 16%,
      rgb(0 0 0 / 0.65) 34%,
      black 48%
    );
  }
}
</style>
