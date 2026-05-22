<template>
  <NuxtLink
    :to="to"
    class="font-display tracking-button hover:text-brand-red font-semibold uppercase transition-colors"
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
