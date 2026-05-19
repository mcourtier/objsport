<template>
  <article
    class="flex h-full min-h-[280px] flex-col rounded-2xl bg-brand-white p-5 text-bg-base md:p-6"
    aria-labelledby="club-estimation-heading"
  >
    <h2
      id="club-estimation-heading"
      class="font-display text-sm font-bold uppercase tracking-button md:text-base"
    >
      {{ title }}
    </h2>

    <div
      class="mt-6 flex flex-1 flex-col justify-between gap-4"
      aria-hidden="true"
    >
      <div
        v-for="line in lineCount"
        :key="line"
        class="h-5 border-b border-dotted border-text-muted/40"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    lineCount?: number
  }>(),
  { lineCount: 7 },
)
</script>
