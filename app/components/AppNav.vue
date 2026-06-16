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
        <AppLogo />
        <AppNavBurger v-model="menuOpen" />
      </div>
      <nav
        aria-label="Navigation principale"
        class="mt-8 hidden flex-col gap-1 lg:flex lg:px-0 lg:py-0"
      >
        <AppNavLink
          v-for="link in sidebarNav"
          :key="link.to"
          :link="link"
        />
      </nav>
      <UCollapsible
        v-model:open="menuOpen"
        class="lg:hidden"
        :unmount-on-hide="false"
      >
        <template #content>
          <nav
            aria-label="Navigation principale"
            class="border-default mt-4 flex flex-col gap-1 px-4 py-4 md:px-5"
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
const menuOpen = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)
</script>
