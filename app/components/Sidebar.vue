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
const route = useRoute()
const { sidebarNav } = useSiteNavigation()

function isNavActive(to: string) {
  if (to === '/') {
    return route.path === '/'
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

function navLinkClass(to: string) {
  return isNavActive(to)
    ? 'bg-primary text-neutral-100'
    : 'text-neutral-100 hover:text-primary'
}
</script>
