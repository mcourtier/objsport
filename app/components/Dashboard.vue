<template>
  <div class="mt-5 flex flex-col gap-4 lg:gap-5">
    <div
      :class="
        layout === 'grid'
          ? 'grid gap-4 lg:grid-cols-3 lg:gap-5'
          : 'flex flex-col gap-10 md:gap-14'
      "
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    layout?: 'grid' | 'stack'
  }>(),
  {
    layout: 'grid',
  },
)
</script>
