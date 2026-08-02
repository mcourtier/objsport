<template>
  <UDashboardGroup storage-key="objsport-admin-v2">
    <UDashboardSidebar
      collapsible
      resizable
      :default-size="11"
      :min-size="10"
      :max-size="16"
      :ui="{
        header: 'h-auto justify-center py-2',
        footer: 'border-t border-default',
      }"
    >
      <template #header="{ collapsed }">
        <NuxtLink
          to="/admin"
          class="mt-4 flex w-full flex-col items-center gap-1 truncate px-2"
        >
          <img
            v-if="collapsed"
            src="/logo-square.svg"
            alt="Objectif Sport"
            class="size-8 shrink-0"
          >
          <template v-else>
            <img
              src="/logo.svg"
              alt="Objectif Sport"
              class="h-auto w-full max-w-[9rem] shrink-0"
            >
            <span class="font-display text-xs font-bold tracking-widest text-highlighted uppercase italic">
              Admin
            </span>
          </template>
        </NuxtLink>
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="items"
          orientation="vertical"
          :ui="{
            link: 'text-base gap-2.5 py-2.5',
            linkLeadingIcon: 'size-6',
          }"
        />
      </template>

      <template #footer="{ collapsed }">
        <UButton
          :icon="collapsed ? 'material-symbols:arrow-back' : undefined"
          :label="collapsed ? undefined : 'Retour au site'"
          to="/"
          color="neutral"
          variant="ghost"
          size="lg"
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
