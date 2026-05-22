<template>
  <div class="flex h-full flex-col gap-4">
    <UCard class="flex flex-1 flex-col">
      <AppLogo />
      <p
        class="font-display text-text-muted mt-3 text-xs font-semibold tracking-widest uppercase"
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
          class="font-display tracking-button hover:text-brand-red inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold uppercase transition-colors"
          :class="navLinkClass(link.to)"
          :aria-current="isNavActive(link.to) ? 'page' : undefined"
        >
          <Icon :name="link.icon" class="h-5 w-5 shrink-0" aria-hidden="true" />
          {{ link.label }}
        </NuxtLink>
      </nav>
    </UCard>

    <UCard>
      <div
        class="bg-brand-red/15 ring-brand-red mx-auto flex h-14 w-14 items-center justify-center rounded-xl ring-2"
        aria-hidden="true"
      >
        <span
          class="font-display text-brand-red text-lg font-extrabold uppercase"
          >EZ</span
        >
      </div>
      <h2
        class="font-display tracking-button text-text-primary mt-4 text-center text-sm font-bold uppercase"
      >
        {{ promoTitle }}
      </h2>
      <p class="text-text-muted mt-2 text-center text-sm">
        {{ promoDescription }}
      </p>
    </UCard>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tagline: string
  promoTitle: string
  promoDescription: string
}>()

const route = useRoute()
const { sidebarNav } = useSiteNavigation()

const isHomeActive = computed(() => route.path === '/')

function isNavActive(to: string) {
  return route.path === to || route.path.startsWith(`${to}/`)
}

function navLinkClass(to: string) {
  return isNavActive(to) ? 'text-brand-red' : 'text-text-primary'
}
</script>
