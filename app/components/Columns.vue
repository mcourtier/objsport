<template>
  <section
    class="flex flex-col gap-4 md:flex-row lg:gap-5 [&>*]:flex-1"
    :aria-labelledby="labelledBy"
    data-reveal-section
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  labelledBy?: string
}>()
</script>
