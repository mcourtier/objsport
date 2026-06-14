<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="size-full"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      v-if="accent === 'gym'"
      d="M10.5 2.5h3a2 2 0 0 1 2 2V6h-7V4.5a2 2 0 0 1 2-2Zm-1 4.5h5v1.5h-5V7Zm-.5 2h6c1.66 0 3 1.34 3 3v1c0 .95-.45 1.79-1.14 2.33.62.5 1.04 1.26 1.14 2.12V18c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-2.05c.1-.86.52-1.62 1.14-2.12-.69-.54-1.14-1.38-1.14-2.33v-1c0-1.66 1.34-3 3-3Z"
    />
    <path
      v-else-if="accent === 'lab'"
      d="M10.25 2h3.5v5.5l4.84 8.7a2.25 2.25 0 0 1-1.95 3.3H7.36a2.25 2.25 0 0 1-1.95-3.3L10.25 7.5V2Zm1.5 1.5v3.87l-4.18 7.53h9.36L11.75 7.37V3.5ZM12 15.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"
    />
    <path
      v-else
      d="M9 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm6 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12.75a3.25 3.25 0 0 0-3.25 3.25V18h6.5v-2a3.25 3.25 0 0 0-3.25-3.25ZM5.75 16a3.5 3.5 0 0 1 6.5 0v2h-1.75v-2a1.75 1.75 0 0 0-3.5 0v2H5.75v-2Zm11.5 0a3.5 3.5 0 0 1 6.5 0v2H22v-2a1.75 1.75 0 0 0-3.5 0v2h-1.75v-2Z"
    />
  </svg>
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'

defineProps<{
  accent: PillarAccent
}>()
</script>
