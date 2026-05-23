<template>
  <UCard
    v-if="variant === 'embedded'"
    class="relative flex h-full min-h-70 flex-col"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="heroBackgroundStyle"
      role="img"
      :aria-label="backgroundImageAlt"
    />
    <div
      class="from-neutral-900 via-neutral-900/85 to-neutral-900/40 absolute inset-0 bg-gradient-to-t"
      aria-hidden="true"
    />

    <div
      class="relative flex flex-1 flex-col items-center justify-center px-6 py-10 text-center md:px-10"
    >
      <p
        v-if="showEyebrow && eyebrow"
        class="font-display text-brand text-xs font-semibold tracking-widest uppercase md:text-sm"
      >
        {{ eyebrow }}
      </p>

      <template v-if="useStackedTitle">
        <h1
          id="hero-heading"
          class="brand-headline mt-4 max-w-2xl text-xl md:text-2xl lg:text-3xl"
        >
          {{ title }}
        </h1>
        <p
          v-if="titleAccent"
          class="brand-headline text-brand mt-2 max-w-2xl text-xl md:text-2xl lg:text-3xl"
        >
          {{ titleAccent }}
        </p>
      </template>
      <h1
        v-else
        id="hero-heading"
        class="brand-headline mt-4 max-w-2xl text-xl md:text-2xl lg:text-3xl"
      >
        {{ titleBefore }}
        <span v-if="titleHighlight" class="text-brand">{{
          titleHighlight
        }}</span>
        {{ titleAfter }}
      </h1>

      <div
        v-if="showCtas"
        class="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <NuxtLink
          :to="primaryCtaTo"
          class="border-brand/50 bg-neutral-900/60 font-display tracking-button text-neutral-100 hover:border-brand hover:bg-brand/20 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase backdrop-blur-sm transition-colors md:text-sm"
        >
          {{ primaryCtaLabel }}
        </NuxtLink>
        <NuxtLink
          :to="secondaryCtaTo"
          class="border-brand/50 bg-neutral-900/60 font-display tracking-button text-neutral-100 hover:border-brand hover:bg-brand/20 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase backdrop-blur-sm transition-colors md:text-sm"
        >
          {{ secondaryCtaLabel }}
        </NuxtLink>
      </div>
    </div>
  </UCard>

  <section
    v-else
    class="relative flex items-center overflow-hidden pt-18 md:-mt-20 md:pt-20"
    :class="fullHeroMinHeightClass"
    aria-labelledby="hero-heading"
  >
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="heroBackgroundStyle"
      role="img"
      :aria-label="backgroundImageAlt"
    />
    <div
      class="from-neutral-900 via-neutral-900/80 absolute inset-0 bg-gradient-to-r to-transparent"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8"
      :class="fullHeroContentPaddingClass"
    >
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
      <p
        v-if="showEyebrow && eyebrow"
        class="font-display text-brand mt-3 text-sm font-semibold tracking-widest uppercase"
        :class="{ 'mt-3': showTagline && taglineSegments.length }"
      >
        {{ eyebrow }}
      </p>

      <template v-if="useStackedTitle">
        <h1
          id="hero-heading"
          class="brand-headline mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
          :class="headlineTopMarginClass"
        >
          {{ title }}
        </h1>
        <p
          v-if="titleAccent"
          class="brand-headline text-brand mt-2 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
        >
          {{ titleAccent }}
        </p>
      </template>
      <h1
        v-else
        id="hero-heading"
        class="brand-headline mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
        :class="headlineTopMarginClass"
      >
        {{ titleBefore }}
        <span v-if="titleHighlight" class="text-brand">{{
          titleHighlight
        }}</span>
        {{ titleAfter }}
      </h1>

      <div
        v-if="showDescription && description"
        class="brand-section-rule mt-6 max-w-md"
        aria-hidden="true"
      />
      <p
        v-if="showDescription && description"
        class="text-neutral-300 mt-6 max-w-xl text-lg md:text-xl"
      >
        {{ description }}
      </p>
      <div v-if="showCtas" class="mt-10 flex flex-wrap gap-4">
        <AppButton :to="primaryCtaTo">
          {{ primaryCtaLabel }}
        </AppButton>
        <AppButton :to="secondaryCtaTo" variant="secondary">
          {{ secondaryCtaLabel }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'

const props = withDefaults(
  defineProps<PageHeroContent & { variant?: 'full' | 'page' | 'embedded' }>(),
  {
    tagline: 'Santé • Performance • Résultats',
    eyebrow: 'Sur site ou à domicile',
    titleBefore: 'Un objectif commun : votre',
    titleHighlight: 'performance',
    titleAfter: '',
    description:
      'Coaching bien-être et performance pour les entreprises, les clubs sportifs et les sportifs. Interventions en entreprise ou à domicile — Gym, Lab et Studio.',
    primaryCtaLabel: 'Entreprise',
    primaryCtaTo: '/entreprise',
    secondaryCtaLabel: 'Demander un audit',
    secondaryCtaTo: '/audit',
    backgroundImage: '/images/brand/hero-cover.jpg',
    backgroundImageAlt:
      'Athlète en sprint — coaching performance Objectif Sport',
    showTagline: true,
    showEyebrow: true,
    showDescription: true,
    showCtas: true,
    variant: 'full',
  },
)

const fullHeroMinHeightClass = computed(() =>
  props.variant === 'page'
    ? 'min-h-96 md:min-h-112'
    : 'min-h-160 md:min-h-192',
)

const fullHeroContentPaddingClass = computed(() =>
  props.variant === 'page' ? 'py-10' : 'py-20',
)

const useStackedTitle = computed(() => Boolean(props.title))

const taglineSegments = computed(() =>
  (props.tagline ?? '')
    .split(/\s*•\s*/)
    .map((s) => s.trim())
    .filter(Boolean),
)

const headlineTopMarginClass = computed(() => {
  if (props.showTagline && taglineSegments.value.length) return ''
  if (props.showEyebrow && props.eyebrow) return ''
  return 'mt-0'
})

const heroBackgroundStyle = computed(() => ({
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.55)), url("${props.backgroundImage}")`,
}))
</script>
