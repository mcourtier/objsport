<template>
  <h2
    :id="headingId"
    class="font-display text-neutral-100 flex items-center gap-4 text-center text-sm font-bold tracking-wide uppercase md:gap-6 md:text-base"
    data-reveal
  >
    <span class="bg-primary h-px min-w-8 flex-1" aria-hidden="true" />
    <span class="shrink-0">{{ title }}</span>
    <span class="bg-primary h-px min-w-8 flex-1" aria-hidden="true" />
  </h2>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  headingId?: string
}>()
</script>
