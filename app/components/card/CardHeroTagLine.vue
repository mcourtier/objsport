<template>
  <!-- CardHeroTagLine -->
  <p
    v-if="taglineSegments.length"
    class="card-hero-tag-line brand-tagline"
    data-reveal-immediate
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
</template>

<script setup lang="ts">
const props = defineProps<{
  tagline?: string
}>()

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
