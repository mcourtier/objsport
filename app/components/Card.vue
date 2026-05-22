<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const cardClasses = computed(() => [
  'overflow-hidden rounded-2xl border border-border-subtle bg-bg-card',
  attrs.class,
])
</script>
