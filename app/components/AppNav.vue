<template>
  <aside
    class="sticky top-0 z-50 -mx-4 shrink-0 p-4 backdrop-blur md:-mx-5 lg:top-6 lg:-mx-0 lg:w-64 lg:self-start lg:p-0 lg:backdrop-blur-none xl:w-72"
  >
    <UCard
      class="lg:bg-default relative overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div
        class="flex min-h-(--ui-header-height) items-center justify-between gap-3 lg:block lg:min-h-0"
      >
        <AppLogo compact class="lg:hidden" />
        <AppLogo class="hidden lg:block" />
        <AppNavBurger v-model="menuOpen" />
      </div>
      <UCollapsible v-model:open="menuOpen" :unmount-on-hide="false">
        <template #content>
          <nav
            aria-label="Navigation principale"
            class="border-default mt-4 flex flex-col gap-1 px-4 py-4 md:px-5 lg:mt-8 lg:border-t-0 lg:px-0 lg:py-0"
          >
            <AppNavLink
              v-for="link in sidebarNav"
              :key="link.to"
              :link="link"
            />
          </nav>
        </template>
      </UCollapsible>
    </UCard>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { sidebarNav } = await useSiteNavigation()
const menuOpen = ref(true)

const desktopMediaQuery = '(min-width: 1024px)'

function isDesktopViewport() {
  return window.matchMedia(desktopMediaQuery).matches
}

function syncMenuOpen() {
  menuOpen.value = isDesktopViewport()
}

onMounted(() => {
  syncMenuOpen()
  window.matchMedia(desktopMediaQuery).addEventListener('change', syncMenuOpen)
})

onUnmounted(() => {
  window
    .matchMedia(desktopMediaQuery)
    .removeEventListener('change', syncMenuOpen)
})

watch(
  () => route.fullPath,
  () => {
    if (!isDesktopViewport()) {
      menuOpen.value = false
    }
  },
)
</script>
