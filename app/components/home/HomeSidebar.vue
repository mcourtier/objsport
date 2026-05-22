<template>
  <div class="flex h-full flex-col gap-4">
    <HomeDashboardCard class="flex flex-1 flex-col p-5 md:p-6">
      <AppLogo />
      <p class="mt-3 font-display text-xs font-semibold uppercase tracking-widest text-text-muted">
        {{ tagline }}
      </p>

      <nav
        class="mt-8 flex flex-1 flex-col gap-1"
        aria-label="Navigation principale"
      >
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-3 rounded-xl px-4 py-3 font-display text-sm font-semibold uppercase tracking-button transition-colors"
          :class="isHomeActive ? 'bg-brand-red text-brand-white' : 'text-text-primary hover:text-brand-red'"
          :aria-current="isHomeActive ? 'page' : undefined"
        >
          <Icon
            name="mdi:home"
            class="h-5 w-5 shrink-0"
            aria-hidden="true"
          />
          Accueil
        </NuxtLink>

        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="inline-flex items-center gap-3 rounded-xl px-4 py-3 font-display text-sm font-semibold uppercase tracking-button transition-colors hover:text-brand-red"
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
      </nav>
    </HomeDashboardCard>

    <HomeDashboardCard class="p-5 md:p-6">
      <div
        class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-brand-red/15 ring-2 ring-brand-red"
        aria-hidden="true"
      >
        <span class="font-display text-lg font-extrabold uppercase text-brand-red">EZ</span>
      </div>
      <h2 class="mt-4 text-center font-display text-sm font-bold uppercase tracking-button text-text-primary">
        {{ promoTitle }}
      </h2>
      <p class="mt-2 text-center text-sm text-text-muted">
        {{ promoDescription }}
      </p>
    </HomeDashboardCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tagline: string
  promoTitle: string
  promoDescription: string
}>()

const route = useRoute()

const navLinks = [
  { label: 'Entreprise', to: '/entreprise', icon: 'mdi:office-building-outline' },
  { label: 'Club', to: '/club', icon: 'mdi:soccer' },
  { label: 'Sportif', to: '/sportif', icon: 'mdi:dumbbell' },
  { label: 'Équipe', to: '/equipe', icon: 'mdi:account-group-outline' },
  { label: 'Contact', to: '/contact', icon: 'mdi:email-outline' },
] as const

const isHomeActive = computed(() => route.path === '/')

function isNavActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`)
}

function navLinkClass(to: string) {
  return isNavActive(to) ? 'text-brand-red' : 'text-text-primary'
}
</script>
