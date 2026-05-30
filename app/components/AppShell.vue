<template>
  <div class="min-h-screen">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4 md:p-5 lg:flex-row lg:gap-5 lg:p-6"
    >
      <AppNav />

      <main class="relative min-w-0 flex-1">
        <slot />
      </main>
    </div>

    <UFooter
      :ui="{
        // root: 'border-t border-neutral-700',
        left: 'hidden',
        right: 'hidden',
      }"
    >
      <template #left>
        <p class="text-muted text-sm">
          Copyright © {{ new Date().getFullYear() }} Objectif Sport
        </p>
      </template>

      <UNavigationMenu
        :items="footerLegal"
        variant="link"
        :ui="{
          link: 'text-xs text-neutral-400 transition-colors hover:text-neutral-300',
        }"
      />
    </UFooter>
  </div>
</template>

<script setup lang="ts">
const { footerLegal } = useSiteNavigation()
const {
  public: { copyrightYear },
} = useRuntimeConfig()
</script>
