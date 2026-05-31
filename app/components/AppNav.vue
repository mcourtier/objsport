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

        <UButton
          class="lg:hidden"
          color="neutral"
          variant="ghost"
          size="xl"
          :icon="menuOpen ? 'material-symbols:close' : 'material-symbols:menu'"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="menuOpen = !menuOpen"
        />
      </div>
      <UCollapsible v-model:open="menuOpen" :unmount-on-hide="false">
        <template #content>
          <nav
            aria-label="Navigation principale"
            class="border-default mt-4 flex flex-col gap-1 px-4 py-4 md:px-5 lg:mt-8 lg:border-t-0 lg:px-0 lg:py-0"
          >
            <NuxtLink
              v-for="link in sidebarNav"
              :key="link.to"
              :to="link.to"
              class="font-display tracking-button inline-flex flex-row items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase transition-colors"
              :class="navLinkClass(link.to)"
              :aria-current="isNavActive(link.to) ? 'page' : undefined"
            >
              <Icon
                :name="link.icon"
                class="h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              {{ link.label }}
            </NuxtLink>
          </nav>
        </template>
      </UCollapsible>
    </UCard>
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { sidebarNav, isNavActive, navLinkClass } = await useSiteNavigation()

const menuOpen = ref(false)

function syncDesktopNavOpen() {
  menuOpen.value = window.matchMedia('(min-width: 1024px)').matches
}

onMounted(() => {
  syncDesktopNavOpen()
  window
    .matchMedia('(min-width: 1024px)')
    .addEventListener('change', syncDesktopNavOpen)
})

onUnmounted(() => {
  window
    .matchMedia('(min-width: 1024px)')
    .removeEventListener('change', syncDesktopNavOpen)
})

watch(
  () => route.fullPath,
  () => {
    if (!window.matchMedia('(min-width: 1024px)').matches) {
      menuOpen.value = false
    }
  },
)
</script>
