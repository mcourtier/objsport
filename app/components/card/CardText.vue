<template>
  <!-- CardText -->
  <Card class="card-header" :aria-labelledby="headingId">
    <header class="text-center" data-reveal>
      <h2
        :id="headingId"
        class="brand-headline mx-auto max-w-2xl text-2xl md:text-3xl lg:text-4xl"
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
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  heading?: string
  subheading?: string
  headingId: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-header {
  @apply relative;
}
</style>
