<template>
  <nav aria-label="Navigation principale">
    <NuxtLink
      v-for="link in sidebarNav"
      :key="link.to"
      :to="link.to"
      class="font-display tracking-button inline-flex flex-row items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase transition-colors"
      :class="navLinkClass(link.to)"
      :aria-current="isNavActive(link.to) ? 'page' : undefined"
    >
      <Icon :name="link.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const { sidebarNav, isNavActive, navLinkClass } = await useSiteNavigation()
</script>
