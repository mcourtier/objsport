<template>
  <div class="bg-neutral-900 min-h-screen">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4 md:p-5 lg:flex-row lg:gap-5 lg:p-6"
    >
      <aside class="shrink-0 lg:sticky lg:top-6 lg:w-64 lg:self-start xl:w-72">
        <Sidebar :tagline="tagline" />
      </aside>

      <main class="relative min-w-0 flex-1">
        <slot />
      </main>
    </div>

    <footer
      class="border-neutral-700 mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t px-4 pt-6 pb-6 md:px-5 lg:px-6"
    >
      <NuxtLink
        v-for="link in footerLegal"
        :key="link.to"
        :to="link.to"
        class="text-neutral-400 hover:text-neutral-300 text-xs transition-colors"
      >
        {{ link.label }}
      </NuxtLink>
      <p class="text-neutral-400 w-full text-center text-xs">
        © {{ copyrightYear }} Objectif Sport
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { tagline } = useSiteSidebar()
const { footerLegal } = useSiteNavigation()
const {
  public: { copyrightYear },
} = useRuntimeConfig()
</script>
