<template>
  <article
    class="bg-brand-white text-bg-base flex h-full min-h-[280px] flex-col rounded-2xl p-5 md:p-6"
    aria-labelledby="club-estimation-heading"
  >
    <h2
      id="club-estimation-heading"
      class="font-display tracking-button text-sm font-bold uppercase md:text-base"
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
        class="border-text-muted/40 h-5 border-b border-dotted"
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
