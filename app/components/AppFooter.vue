<template>
  <UFooter
    :ui="{
      right: 'hidden',
      container:
        'mx-auto w-full max-w-screen-2xl px-4 md:px-5 lg:px-6 py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
    }"
  >
    <template #left>
      <div class="flex flex-col gap-0.5">
        <p class="text-sm font-semibold text-neutral-300">
          {{ site.name }}
        </p>
        <p class="text-muted text-xs">
          Copyright © {{ copyrightYear }} {{ site.name }}
        </p>
      </div>
    </template>

    <UNavigationMenu
      :items="footerLegal"
      variant="link"
      :ui="{
        link: 'text-xs text-neutral-400 transition-colors hover:text-neutral-300',
      }"
    />
  </UFooter>
</template>

<script setup lang="ts">
const site = useSiteConfig()
const { public: { copyrightYear } } = useRuntimeConfig()
const { footerLegal } = await useSiteNavigation()
</script>
