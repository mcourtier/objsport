<template>
  <div>
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

    <div
      v-if="link.children?.length && isNavActive(link.to)"
      class="mt-1 flex flex-col gap-1 pl-8"
    >
      <NuxtLink
        v-for="child in link.children"
        :key="child.to"
        :to="child.to"
        class="font-display tracking-button rounded-lg px-4 py-2 text-xs font-semibold uppercase transition-colors"
        :class="subNavLinkClass(child.to)"
        :aria-current="route.path === child.to ? 'page' : undefined"
      >
        {{ child.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SidebarNavLink } from '~/types/navigation'

defineProps<{
  link: SidebarNavLink
}>()

const route = useRoute()
const { isNavActive, navLinkClass } = await useSiteNavigation()

function subNavLinkClass(to: string) {
  return route.path === to
    ? 'text-primary text-sm underline underline-offset-4'
    : 'text-neutral-300 hover:text-primary'
}
</script>
