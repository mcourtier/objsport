<template>
  <div class="sticky top-0 z-50 -mx-4 p-4 backdrop-blur md:-mx-5 lg:hidden">
    <UCard
      class="relative overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div
        class="flex min-h-(--ui-header-height) items-center justify-between gap-3"
      >
        <AppLogo compact />

        <UButton
          color="neutral"
          variant="ghost"
          size="xl"
          :icon="menuOpen ? 'material-symbols:close' : 'material-symbols:menu'"
          :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          @click="menuOpen = !menuOpen"
        />
      </div>
      <UCollapsible v-model:open="menuOpen">
        <template #content>
          <nav
            aria-label="Navigation principale"
            class="border-default flex flex-col gap-1 border-t px-4 py-4 md:px-5"
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
  </div>

  <aside
    class="hidden shrink-0 lg:sticky lg:top-6 lg:block lg:w-64 lg:self-start xl:w-72"
  >
    <Sidebar />
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { sidebarNav, isNavActive, navLinkClass } = await useSiteNavigation()

const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>
