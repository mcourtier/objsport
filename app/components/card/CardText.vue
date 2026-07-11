<template>
  <!-- CardText -->
  <UCard
    class="card-surface card-header"
    :aria-labelledby="headingId"
    data-reveal-section
  >
    <header class="text-center" data-reveal>
      <p v-if="tagline" class="brand-tagline">
        {{ tagline }}
      </p>
      <h2
        :id="headingId"
        class="brand-headline mx-auto mt-3 max-w-2xl text-2xl md:text-3xl lg:text-4xl"
      >
        <slot name="heading">{{ heading }}</slot>
      </h2>
      <p
        v-if="subheading"
        class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base"
      >
        {{ subheading }}
      </p>
    </header>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  heading?: string
  subheading?: string
  tagline?: string
  headingId: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-header {
  @apply relative;
}
</style>
