<template>
  <Card class="p-5 md:p-6">
    <div
      class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/15 ring-2 ring-brand-red"
      aria-hidden="true"
    >
      <span class="font-display text-lg font-extrabold uppercase text-brand-red">EZ</span>
    </div>
    <h2 class="mt-4 text-center font-display text-sm font-bold uppercase tracking-button text-text-primary">
      {{ title }}
    </h2>
    <p class="mt-2 text-center text-sm text-text-muted">
      {{ description }}
    </p>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
