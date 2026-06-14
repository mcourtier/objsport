<template>
  <h1
    v-if="stackedTitle"
    id="hero-heading"
    class="hero-stacked-title mt-4 max-w-3xl"
    :class="topMarginClass"
  >
    <span
      v-if="stackedTitle.line1"
      class="brand-headline hero-title-line block text-3xl md:text-4xl lg:text-5xl"
      data-reveal-immediate
    >
      {{ stackedTitle.line1 }}
    </span>
    <span
      class="brand-headline hero-title-line hero-title-line--accent text-primary block text-4xl md:text-5xl lg:text-6xl"
      data-reveal-immediate
    >
      {{ stackedTitle.line2 }}
    </span>
    <span
      class="hero-title-rule text-primary"
      data-reveal-immediate
      aria-hidden="true"
    />
    <span
      v-if="stackedTitle.line3"
      class="brand-headline hero-title-line hero-title-line--closing block text-2xl md:text-3xl lg:text-4xl"
      data-reveal-immediate
    >
      {{ stackedTitle.line3
      }}<span class="hero-title-stop" aria-hidden="true" />
    </span>
  </h1>
  <template v-else>
    <h1
      id="hero-heading"
      class="brand-headline mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl"
      :class="topMarginClass"
      data-reveal-immediate
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
      data-reveal-immediate
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
</template>

<script setup lang="ts">
import type { HighlightedTextProp } from '~/types/pageHero'
import { parseHighlightedText } from '~/utils/parseHighlightedText'

const props = defineProps<{
  title?: HighlightedTextProp
  titleAccent?: HighlightedTextProp
  compactTop?: boolean
}>()

interface StackedHeroTitle {
  line1: string
  line2: string
  line3: string
}

const topMarginClass = computed(() => (props.compactTop ? 'mt-0' : ''))

function joinHighlightedText(input: unknown): string {
  return parseHighlightedText(input)
    .map((part) => part.text)
    .join('')
    .trim()
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

function parseStackedHeroTitleFromAccent(
  title: unknown,
  titleAccent: unknown,
): StackedHeroTitle | null {
  const line1 = joinHighlightedText(title)
  const line2 = joinHighlightedText(titleAccent)
  if (!line2) return null
  if (!line1) return { line1: '', line2, line3: '' }
  return { line1, line2, line3: '' }
}

const stackedTitle = computed(() => {
  const fromTitle = parseStackedHeroTitle(props.title)
  if (fromTitle) return fromTitle

  if (props.titleAccent) {
    return parseStackedHeroTitleFromAccent(props.title, props.titleAccent)
  }

  return null
})

const parsedTitle = computed(() => parseHighlightedText(props.title))

const parsedTitleAccent = computed(() =>
  parseHighlightedText(props.titleAccent),
)
</script>

<style scoped>
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
  aspect-ratio: 475 / 46;
  margin-block: 0.625rem 0.5rem;
  flex-shrink: 0;
  background-color: currentColor;
  mask-image: url('/images/brand/hero-brushline.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: left center;
  -webkit-mask-image: url('/images/brand/hero-brushline.png');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left center;
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
</style>
