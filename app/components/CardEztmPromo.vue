<template>
  <!-- CardEztmPromo -->
  <UCard>
    <div class="p-5 md:p-6">
      <div
        class="bg-primary/15 ring-primary mx-auto flex h-14 w-14 items-center justify-center rounded-xl ring-2"
        aria-hidden="true"
      >
        <span
          class="font-display text-primary text-lg font-extrabold uppercase"
          >EZ</span
        >
      </div>
      <h2
        class="font-display tracking-button text-neutral-100 mt-4 text-center text-sm font-bold uppercase"
      >
        {{ title }}
      </h2>
      <p class="text-neutral-400 mt-2 text-center text-sm">
        {{ description }}
      </p>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>
