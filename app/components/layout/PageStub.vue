<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
      <h1 class="font-display text-4xl font-bold uppercase tracking-wide text-text-primary md:text-5xl">
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="mt-6 max-w-prose text-lg text-text-secondary"
      >
        {{ description }}
      </p>
      <p class="mt-8 text-text-muted">
        Contenu à venir.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>
