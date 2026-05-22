<template>
  <UCard>
    <div class="flex flex-col">
      <AppLogo />
      <p
        class="font-display text-text-muted mt-3 text-center text-xs font-semibold tracking-widest uppercase"
      >
        {{ tagline }}
      </p>

      <nav
        class="mt-8 flex flex-1 flex-col gap-1"
        aria-label="Navigation principale"
      >
        <NuxtLink
          to="/"
          class="font-display tracking-button inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase transition-colors"
          :class="
            isHomeActive
              ? 'bg-brand-red text-brand-white'
              : 'text-text-primary hover:text-brand-red'
          "
          :aria-current="isHomeActive ? 'page' : undefined"
        >
          <Icon name="mdi:home" class="h-5 w-5 shrink-0" aria-hidden="true" />
          Accueil
        </NuxtLink>

        <NuxtLink
          v-for="link in sidebarNav"
          :key="link.to"
          :to="link.to"
          class="font-display tracking-button inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase transition-colors"
          :class="navLinkClass(link.to)"
          :aria-current="isNavActive(link.to) ? 'page' : undefined"
        >
          <Icon :name="link.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  tagline: string
}>()

const route = useRoute()
const { sidebarNav } = useSiteNavigation()

const isHomeActive = useNavLinkActive('/')

function isNavActive(to: string) {
  if (to === '/') {
    return route.path === '/'
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

function navLinkClass(to: string) {
  return isNavActive(to)
    ? 'bg-brand-red text-brand-white'
    : 'text-text-primary hover:text-brand-red'
}
</script>
