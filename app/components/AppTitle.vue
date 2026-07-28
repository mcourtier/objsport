<template>
  <div>
    <h2
      :id="id"
      class="font-display text-xl font-bold tracking-wide text-neutral-100 uppercase md:text-2xl"
    >
      <slot />
    </h2>

    <BrandBrushLine class="text-primary" small />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>
