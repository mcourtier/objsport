<template>
  <!-- CardHeroTagLine -->
  <p
    v-if="taglineSegments.length"
    class="card-hero-tag-line brand-tagline"
  >
    <template v-for="(segment, index) in taglineSegments" :key="segment">
      <span
        v-if="index > 0"
        :class="accentTextClass"
        aria-hidden="true"
      >
        •
      </span>
      {{ segment }}
    </template>
  </p>
</template>

<script setup lang="ts">
import type { HeroAccent } from '~/types/pageHero'
import { heroAccentTextClass } from '~/utils/pillarTheme'

const props = withDefaults(
  defineProps<{
    tagline?: string
    accent?: HeroAccent
  }>(),
  {
    accent: 'primary',
  },
)

const accentTextClass = computed(() => heroAccentTextClass(props.accent))

const taglineSegments = computed(() =>
  (props.tagline ?? '')
    .split(/\s*•\s*/)
    .map((segment) => segment.trim())
    .filter(Boolean),
)
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-hero-tag-line {
  @apply mb-4;
}
</style>
