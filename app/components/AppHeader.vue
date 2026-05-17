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
          <NuxtLink
            v-for="link in mainNav"
            :key="link.to"
            :to="link.to"
            class="font-display text-base font-semibold uppercase tracking-button text-text-primary transition-colors hover:text-brand-red lg:text-lg"
            active-class="text-brand-red"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center border border-border-subtle text-text-primary lg:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="sr-only">{{ mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu' }}</span>
          <svg
            v-if="!mobileOpen"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-6 w-6"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-show="mobileOpen"
      id="mobile-nav"
      class="border-t border-border-subtle bg-bg-elevated px-4 py-4 lg:hidden"
      aria-label="Navigation mobile"
    >
      <ul class="flex flex-col gap-1">
        <li
          v-for="link in mainNav"
          :key="link.to"
        >
          <NuxtLink
            :to="link.to"
            class="block py-3 font-display text-lg font-semibold uppercase tracking-button text-text-primary hover:text-brand-red"
            active-class="text-brand-red"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
        <li class="pt-2">
          <AppButton
            to="/contact"
            class="w-full"
            @click="mobileOpen = false"
          >
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

watch(() => useRoute().path, () => {
  mobileOpen.value = false
})
</script>
