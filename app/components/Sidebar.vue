<template>
  <UCard>
    <div class="flex flex-col">
      <AppLogo />

      <nav
        class="mt-8 grid flex-1 grid-cols-3 gap-1 lg:flex lg:flex-col"
        aria-label="Navigation principale"
      >
        <NuxtLink
          v-for="link in sidebarNav"
          :key="link.to"
          :to="link.to"
          class="font-display tracking-button inline-flex flex-row items-center gap-3 rounded-xl px-2 py-3 text-xs font-semibold uppercase transition-colors lg:px-4 lg:text-sm"
          :class="navLinkClass(link.to)"
          :aria-current="isNavActive(link.to) ? 'page' : undefined"
        >
          <Icon :name="link.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { sidebarNav, isNavActive, navLinkClass } = await useSiteNavigation()
</script>
