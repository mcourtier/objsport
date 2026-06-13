<template>
  <!-- CardHero -->
  <UCard
    class="relative overflow-hidden bg-black"
    aria-labelledby="hero-heading"
  >
    <div class="absolute inset-y-0 right-0">
      <img
        class="hero-athlete-bg h-full w-auto max-w-none"
        :data-reveal-hero-img="animate || undefined"
        src="/images/athlete.png"
        :alt="backgroundImageAlt"
        loading="lazy"
      />
    </div>

    <div class="relative p-6 md:p-8">
      <p
        v-if="showTagline && taglineSegments.length"
        class="brand-tagline"
        :data-reveal-immediate="animate || undefined"
      >
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
        v-if="stackedTitle"
        id="hero-heading"
        class="hero-stacked-title mt-4 max-w-3xl"
        :class="headlineTopMarginClass"
      >
        <span
          class="brand-headline hero-title-line block text-3xl md:text-4xl lg:text-5xl"
          :data-reveal-immediate="animate || undefined"
        >
          {{ stackedTitle.line1 }}
        </span>
        <span
          class="brand-headline hero-title-line hero-title-line--accent text-primary block text-4xl md:text-5xl lg:text-6xl"
          :data-reveal-immediate="animate || undefined"
        >
          {{ stackedTitle.line2 }}
        </span>
        <svg
          class="hero-title-rule text-primary"
          :data-reveal-immediate="animate || undefined"
          viewBox="0 0 300 26"
          preserveAspectRatio="xMinYMid meet"
          aria-hidden="true"
        >
          <g fill="currentColor">
            <path
              d="M0,12.6h5.5v2.2H0z M1.8,15.2h8.5v1.8H1.8z M4.2,10.4h7.2v2H4.2z M6.8,17.4h5.8v1.4H6.8z"
            />
            <path
              d="M12.8,8.6
                L18.8,7.9 36,7.5 64,7.9 98,7.4 136,7.9 176,7.6 212,8 236,7.8
                L237.8,9.4 238.2,17.2 236,18.6
                L212,18.9 176,19.2 136,18.9 98,19.3 64,18.8 36,19.1 18.8,18.6 12.8,18.3
                Z"
            />
            <path
              d="M238.5,9.2 L268,8.4 L269.2,9.8 L238.5,10.6 Z"
            />
            <path
              d="M237.5,11.4 L300,9.6 L300,12.2 L237.5,14 Z"
            />
            <path
              d="M238.8,14.6 L286,13.4 L287.2,15 L238.8,16.2 Z"
            />
            <path
              d="M239.5,16.8 L272,16 L273,17.4 L239.5,18.2 Z"
            />
            <path
              d="M240.2,8.2 L258,7.7 L258.6,8.8 L240.2,9.3 Z"
            />
          </g>
        </svg>
        <span
          class="brand-headline hero-title-line hero-title-line--closing block text-2xl md:text-3xl lg:text-4xl"
          :data-reveal-immediate="animate || undefined"
        >
          {{ stackedTitle.line3
          }}<span class="hero-title-stop" aria-hidden="true" />
        </span>
      </h1>
      <template v-else>
        <h1
          id="hero-heading"
          class="brand-headline mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
          :class="headlineTopMarginClass"
        >
          <template
            v-for="part in parsedTitle"
            :key="`${part.text}-${part.isHighlight}`"
          >
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
          <template
            v-for="part in parsedTitleAccent"
            :key="`${part.text}-${part.isHighlight}`"
          >
            <strong v-if="part.isHighlight" class="text-white">
              {{ part.text }}
            </strong>
            <span v-else>{{ part.text }}</span>
          </template>
        </p>
      </template>

      <div
        v-if="showDescription && description"
        class="brand-section-rule mt-6 max-w-md"
        :data-reveal-immediate="animate || undefined"
        aria-hidden="true"
      />
      <p
        v-if="showDescription && description"
        class="mt-6 max-w-xl text-lg text-neutral-300 md:text-xl"
        :data-reveal-immediate="animate || undefined"
      >
        {{ description }}
      </p>
      <div v-if="showCtas" class="mt-10 flex flex-wrap gap-4">
        <UButton
          :to="primaryCtaTo"
          size="xl"
          :data-reveal-immediate="animate || undefined"
        >
          {{ primaryCtaLabel }}
        </UButton>
        <UButton
          :to="secondaryCtaTo"
          color="primary"
          size="xl"
          :data-reveal-immediate="animate || undefined"
        >
          {{ secondaryCtaLabel }}
        </UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'
import { parseHighlightedText } from '~/utils/parseHighlightedText'

const props = withDefaults(
  defineProps<
    PageHeroContent & {
      animate?: boolean
    }
  >(),
  {
  animate: false,
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
  },
)

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

interface StackedHeroTitle {
  line1: string
  line2: string
  line3: string
}

function parseStackedHeroTitle(input: unknown): StackedHeroTitle | null {
  const parts = parseHighlightedText(input)
  if (!parts.length) return null

  const accentIndex = parts.findIndex((part, index) => {
    const nextPart = parts[index + 1]
    return (
      part.isHighlight &&
      nextPart != null &&
      !nextPart.isHighlight &&
      nextPart.text.includes(':')
    )
  })
  if (accentIndex === -1) return null

  const accentPart = parts[accentIndex]
  const colonPart = parts[accentIndex + 1]
  if (!accentPart || !colonPart) return null

  const line1 = parts
    .slice(0, accentIndex)
    .map((part) => part.text)
    .join('')
    .trim()
  const line2 = `${accentPart.text.trim()} :`
  const afterColonText = colonPart.text.split(':').slice(1).join(':')
  const line3 = [afterColonText, ...parts.slice(accentIndex + 2).map((part) => part.text)]
    .join('')
    .replace(/\s+/g, ' ')
    .trim()

  if (!line1 || !line2 || !line3) return null
  return { line1, line2, line3 }
}

const stackedTitle = computed(() => {
  if (props.titleAccent) return null
  return parseStackedHeroTitle(props.title)
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

.hero-stacked-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
}

.hero-title-line {
  line-height: 0.95;
  letter-spacing: -0.02em;
}

.hero-title-line--accent {
  font-weight: 900;
}

.hero-title-line--closing {
  margin-top: 0.25rem;
}

.hero-title-rule {
  display: block;
  width: min(100%, 17rem);
  height: auto;
  aspect-ratio: 300 / 26;
  margin-block: 0.625rem 0.5rem;
  flex-shrink: 0;
}

.hero-title-stop {
  display: inline-block;
  width: 0.28em;
  height: 0.28em;
  margin-left: 0.08em;
  background-color: var(--color-primary);
  vertical-align: baseline;
  transform: translateY(-0.08em);
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
