<template>
  <!-- CardHeroTitle -->
  <h1
    v-if="stackedTitle"
    id="hero-heading"
    class="card-hero-title hero-stacked-title"
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
    <BrandBrushLine
      class="text-primary"
      data-reveal-immediate
      data-reveal-draw-x
      data-reveal-delay="0.4"
    />
    <span
      v-if="stackedTitle.line3"
      class="brand-headline hero-title-line hero-title-line--closing block text-xl md:text-2xl lg:text-3xl"
      data-reveal-immediate
    >
      {{ stackedTitle.line3 }}
    </span>
  </h1>
  <template v-else>
    <h1
      id="hero-heading"
      class="card-hero-title brand-headline text-3xl md:text-4xl lg:text-5xl"
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
      class="brand-headline text-primary mt-2 max-w-3xl text-4xl md:text-5xl lg:text-6xl"
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
}>()

interface StackedHeroTitle {
  line1: string
  line2: string
  line3: string
}

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
  const line3 = [
    afterColonText,
    ...parts.slice(accentIndex + 2).map((part) => part.text),
  ]
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
@reference "~/assets/css/main.css";
.card-hero-title {
  @apply mt-4 max-w-3xl;
}

.hero-stacked-title {
  @apply flex flex-col items-start gap-0.5;
}

.hero-title-line {
  @apply leading-[0.95] tracking-[-0.02em];
}

.hero-title-line--accent {
  @apply font-black;
}

.hero-title-line--closing {
  @apply mt-1;
}
</style>
