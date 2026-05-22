<template>
  <div
    class="bg-brand-red flex shrink-0 items-center justify-center rounded-full"
    :class="sizeClass"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 48 48"
      class="h-[55%] w-[55%]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="28" height="28" fill="#ffffff" rx="2" />
      <path d="M24 14 L30 24 L24 34 L18 24 Z" fill="#de241b" />
      <circle cx="24" cy="24" r="3" fill="#de241b" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { size: 'md' },
)

const sizeClass = computed(() => {
  const map = {
    sm: 'h-14 w-14',
    md: 'h-20 w-20 md:h-24 md:w-24',
    lg: 'h-28 w-28',
  }
  return map[props.size]
})
</script>
