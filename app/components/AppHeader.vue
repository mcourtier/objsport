<template>
  <header
    class="sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300"
    :class="headerSurfaceClass"
  >
    <div
      class="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 md:px-6 lg:px-8"
    >
      <AppLogo />

      <div class="ml-auto flex items-center gap-8">
        <nav
          class="hidden items-center gap-8 lg:flex"
          aria-label="Navigation principale"
        >
          <AppNavLink
            v-for="link in mainNav"
            :key="link.to"
            :to="link.to"
            class="text-base lg:text-lg"
          >
            {{ link.label }}
          </AppNavLink>
        </nav>

        <UButton
          type="button"
          color="neutral"
          variant="outline"
          square
          class="lg:hidden"
          :icon="mobileOpen ? 'i-mdi-close' : 'i-mdi-menu'"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          :aria-label="mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="mobileOpen = !mobileOpen"
        />
      </div>
    </div>

    <nav
      v-show="mobileOpen"
      id="mobile-nav"
      class="border-border-subtle bg-bg-elevated border-t px-4 py-4 lg:hidden"
      aria-label="Navigation mobile"
    >
      <ul class="flex flex-col gap-1">
        <li v-for="link in mainNav" :key="link.to">
          <AppNavLink
            :to="link.to"
            class="block py-3 text-lg"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </AppNavLink>
        </li>
        <li class="pt-2">
          <AppButton to="/contact" block @click="mobileOpen = false">
            Contact
          </AppButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { mainNav } = useSiteNavigation()
const { isAtTop, isScrollReady } = useScrollAtTop()
const mobileOpen = ref(false)

const headerSurfaceClass = computed(() => {
  if (!isScrollReady.value || isAtTop.value) {
    return 'border-transparent bg-transparent backdrop-blur-none'
  }

  return 'border-border-subtle bg-bg-elevated/95 backdrop-blur-sm'
})

watch(
  () => useRoute().path,
  () => {
    mobileOpen.value = false
  },
)
</script>
