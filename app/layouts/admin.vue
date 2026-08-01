<template>
  <UDashboardGroup storage-key="objsport-admin">
    <UDashboardSidebar
      collapsible
      resizable
      :ui="{ footer: 'border-t border-default' }"
    >
      <template #header="{ collapsed }">
        <NuxtLink
          to="/admin"
          class="flex items-center gap-2 truncate px-2 font-display text-sm font-bold tracking-wide text-highlighted uppercase italic"
        >
          <img
            src="/logo-square.svg"
            alt="Objectif Sport"
            class="size-6 shrink-0"
          >
          <span v-if="!collapsed">Objectif Sport - Admin</span>
        </NuxtLink>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="items"
          orientation="vertical"
        />
      </template>

      <template #footer="{ collapsed }">
        <UButton
          :icon="collapsed ? 'material-symbols:arrow-back' : undefined"
          :label="collapsed ? undefined : 'Retour au site'"
          to="/"
          color="neutral"
          variant="ghost"
          block
          :square="collapsed"
        />
      </template>
    </UDashboardSidebar>

    <slot />
  </UDashboardGroup>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[][]>(() => [
  [
    {
      label: 'Membres',
      icon: 'material-symbols:group-outline',
      to: '/admin/membres',
      active: route.path.startsWith('/admin/membres'),
    },
    {
      label: 'Stations',
      icon: 'material-symbols:location-on-outline',
      to: '/admin/stations',
      active: route.path.startsWith('/admin/stations'),
    },
  ],
])
</script>
