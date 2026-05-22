<template>
  <!-- page -->
  <div class="min-h-screen bg-bg-base">
    <!-- container -->
    <div class="mx-auto w-full max-w-[1600px] p-4 md:p-5 lg:p-6">
      <!-- grid -->
      <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <!-- sidebar -->
        <aside class="sticky top-4 self-start lg:col-span-3 lg:row-span-3 md:top-5 lg:top-6">
          <Sidebar :tagline="tagline" />
        </aside>

        <!-- main -->
        <div class="relative flex min-w-0 flex-col gap-4 lg:col-span-9 lg:gap-5">
          <slot />
        </div>
      </div>

      <!-- footer -->
      <footer class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border-subtle pt-6">
        <NuxtLink
          v-for="link in footerLegal"
          :key="link.to"
          :to="link.to"
          class="text-xs text-text-muted transition-colors hover:text-text-secondary"
        >
          {{ link.label }}
        </NuxtLink>
        <p class="w-full text-center text-xs text-text-muted">
          © {{ copyrightYear }} Objectif Sport
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { tagline } = useSiteSidebar()
const { footerLegal } = useSiteNavigation()
const { public: { copyrightYear } } = useRuntimeConfig()
</script>
