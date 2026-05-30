<template>
  <div
    class="border-default bg-default/75 -mx-4 sticky top-0 z-50 border-b backdrop-blur md:-mx-5 lg:hidden"
  >
    <div
      class="flex h-(--ui-header-height) items-center justify-between gap-3 px-4 md:px-5"
    >
      <NuxtLink
        to="/"
        class="block focus-visible:outline-offset-4"
        aria-label="Objectif Sport — Accueil"
      >
        <img src="/logo.svg" alt="" class="h-9 w-auto" />
      </NuxtLink>

      <UButton
        color="neutral"
        variant="ghost"
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
  </div>

  <aside
    class="hidden shrink-0 lg:sticky lg:top-6 lg:block lg:w-64 lg:self-start xl:w-72"
  >
    <Sidebar />
  </aside>
</template>

<script setup lang="ts">
const route = useRoute()
const { sidebarNav, isNavActive, navLinkClass } = useSiteNavigation()

const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>
