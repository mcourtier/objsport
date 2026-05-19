<template>
  <NuxtLink
    :to="to"
    class="font-display font-semibold uppercase tracking-button transition-colors hover:text-brand-red"
    :class="isActive ? 'text-brand-red' : 'text-text-primary'"
    :aria-current="isActive ? 'page' : undefined"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string
}>()

const isActive = useNavLinkActive(computed(() => props.to))
</script>
