<template>
  <!-- CardHero -->
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="hero-heading"
  >
    <div class="absolute top-0 right-0 bottom-0 h-full">
      <img
        class="hero-athlete-bg h-full w-auto"
        src="/images/athlete.png"
        :alt="backgroundImageAlt"
        loading="lazy"
      />
      <div
        class="hero-athlete-fade from-ui-bg absolute top-0 bottom-0 left-0 w-48"
        aria-hidden="true"
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
        <UButton :to="primaryCtaTo">
          {{ primaryCtaLabel }}
        </UButton>
        <UButton :to="secondaryCtaTo" color="primary">
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
  /* background-image: url('/images/athlete.png');
  background-position: right center;
  background-repeat: no-repeat;
  height: 100%; */
}

.hero-athlete-fade {
  background: linear-gradient(
    90deg,
    black 0%,
    color-mix(in srgb, black 90%, transparent) 28%,
    transparent 58%
  );
}
</style>
