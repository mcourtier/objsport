<template>
  <NuxtLink
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
</template>

<script setup lang="ts">
import type { SidebarNavLink } from '~/types/navigation'

defineProps<{
  link: SidebarNavLink
}>()

const { isNavActive, navLinkClass } = await useSiteNavigation()
</script>
