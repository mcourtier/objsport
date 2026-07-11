<template>
  <span
    class="brand-brush-line"
    :class="{ 'brand-brush-line--small': small }"
    aria-hidden="true"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
defineProps<{
  small?: boolean
}>()

defineOptions({
  inheritAttrs: false,
})
</script>

<style scoped>
.brand-brush-line {
  display: block;
  width: min(100%, 17rem);
  aspect-ratio: 475 / 46;
  margin-block: 0.625rem 0.5rem;
  flex-shrink: 0;
  background-color: currentColor;
  mask-image: url('/images/brand/hero-brushline.png');
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: left center;
  -webkit-mask-image: url('/images/brand/hero-brushline.png');
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: left center;
}

.brand-brush-line--small {
  width: min(100%, 12rem);
  aspect-ratio: 475 / 24;
  margin-block: 0.375rem 0.25rem;
}
</style>
