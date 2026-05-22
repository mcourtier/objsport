<template>
  <!-- page -->
  <div class="bg-bg-base min-h-screen">
    <!-- container -->
    <div class="mx-auto w-full max-w-[1600px] p-4 md:p-5 lg:p-6">
      <!-- grid -->
      <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <!-- sidebar -->
        <aside
          class="sticky top-4 self-start md:top-5 lg:top-6 lg:col-span-3 lg:row-span-3"
        >
          <Sidebar :tagline="tagline" />
        </aside>

        <!-- main -->
        <div
          class="relative flex min-w-0 flex-col gap-4 lg:col-span-9 lg:gap-5"
        >
          <slot />
        </div>
      </div>

      <!-- footer -->
      <footer
        class="border-border-subtle mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t pt-6"
      >
        <NuxtLink
          v-for="link in footerLegal"
          :key="link.to"
          :to="link.to"
          class="text-text-muted hover:text-text-secondary text-xs transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
        <p class="text-text-muted w-full text-center text-xs">
          © {{ copyrightYear }} Objectif Sport
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tagline } = useSiteSidebar()
const { footerLegal } = useSiteNavigation()
const {
  public: { copyrightYear },
} = useRuntimeConfig()
</script>
