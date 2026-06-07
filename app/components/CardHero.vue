<template>
  <!-- CardHero -->
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="hero-heading"
  >
    <div class="absolute inset-y-0 right-0">
      <img
        class="hero-athlete-bg h-full w-auto max-w-none"
        src="/images/athlete.png"
        :alt="backgroundImageAlt"
        loading="lazy"
      />
    </div>

    <div class="relative p-6 md:p-8">
      <p v-if="showTagline && taglineSegments.length" class="brand-tagline">
        <template v-for="(segment, index) in taglineSegments" :key="segment">
          <span
            v-if="index > 0"
            class="brand-tagline-bullet"
            aria-hidden="true"
          >
            •
          </span>
          {{ segment }}
        </template>
      </p>

      <h1
        id="hero-heading"
        class="brand-headline mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
        :class="headlineTopMarginClass"
      >
        <template v-for="part in parsedTitle" :key="`${part.text}-${part.isHighlight}`">
          <strong v-if="part.isHighlight" class="text-primary">
            {{ part.text }}
          </strong>
          <span v-else>{{ part.text }}</span>
        </template>
      </h1>
      <p
        v-if="titleAccent"
        class="brand-headline text-primary mt-2 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
      >
        <template v-for="part in parsedTitleAccent" :key="`${part.text}-${part.isHighlight}`">
          <strong v-if="part.isHighlight" class="text-white">
            {{ part.text }}
          </strong>
          <span v-else>{{ part.text }}</span>
        </template>
      </p>

      <div
        v-if="showDescription && description"
        class="brand-section-rule mt-6 max-w-md"
        aria-hidden="true"
      />
      <p
        v-if="showDescription && description"
        class="mt-6 max-w-xl text-lg text-neutral-300 md:text-xl"
      >
        {{ description }}
      </p>
      <div v-if="showCtas" class="mt-10 flex flex-wrap gap-4">
        <UButton :to="primaryCtaTo" size="lg">
          {{ primaryCtaLabel }}
        </UButton>
        <UButton :to="secondaryCtaTo" color="primary" size="lg">
          {{ secondaryCtaLabel }}
        </UButton>
      </div>
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
  primaryCtaLabel: 'Entreprise',
  primaryCtaTo: '/entreprise',
  secondaryCtaLabel: 'Demander un audit',
  secondaryCtaTo: '/audit',
  backgroundImageAlt: 'Athlète en sprint — coaching performance Objectif Sport',
  showTagline: true,
  showDescription: true,
  showCtas: true,
})

const taglineSegments = computed(() =>
  (props.tagline ?? '')
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean),
)

const headlineTopMarginClass = computed(() => {
  if (props.showTagline && taglineSegments.value.length) return ''
  return 'mt-0'
})

const parsedTitle = computed(() => parseHighlightedText(props.title))

const parsedTitleAccent = computed(() =>
  parseHighlightedText(props.titleAccent),
)
</script>

<style scoped>
.hero-athlete-bg {
  display: block;
  object-fit: cover;
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
