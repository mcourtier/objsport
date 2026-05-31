<template>
  <UFooter
    :ui="{
      // root: 'border-t border-neutral-700',
      left: 'hidden',
      right: 'hidden',
    }"
  >
    <template #left>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }} Objectif Sport
      </p>
    </template>

    <UNavigationMenu
      :items="footerLegal"
      variant="link"
      :ui="{
        link: 'text-xs text-neutral-400 transition-colors hover:text-neutral-300',
      }"
    />
  </UFooter>
</template>

<script setup lang="ts">
const { footerLegal } = await useSiteNavigation()
</script>
