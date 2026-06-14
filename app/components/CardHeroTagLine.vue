<template>
  <!-- CardHeroTagLine -->
  <p
    v-if="taglineSegments.length"
    class="brand-tagline"
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
