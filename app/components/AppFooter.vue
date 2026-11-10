<template>
  <UFooter
    :ui="{
      container:
        'mx-auto w-full max-w-screen-2xl px-4 py-8 md:px-5 lg:items-start lg:px-6 lg:py-8',
      left: 'flex-col items-center gap-3 lg:items-start',
      center: 'lg:px-8',
      right: 'flex-col items-center gap-1 lg:items-end',
    }"
  >
    <template #left>
      <div class="flex flex-col items-center gap-0.5 lg:items-start">
        <p class="text-sm font-semibold text-neutral-300">
          {{ site.name }}
        </p>
        <p class="text-muted text-xs">
          Copyright © {{ copyrightYear }} {{ site.name }}
        </p>
      </div>

      <UNavigationMenu
        :items="footerLegal"
        variant="link"
        :ui="{
          link: 'text-xs text-neutral-400 transition-colors hover:text-neutral-300',
        }"
      />
    </template>

    <nav aria-label="Pied de page" class="flex flex-wrap justify-center gap-x-4 gap-y-2">
      <NuxtLink
        v-for="link in sidebarNav"
        :key="link.to"
        :to="link.to"
        class="text-xs text-neutral-400 transition-colors hover:text-neutral-300"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>

    <template #right>
      <a
        :href="`mailto:${contact.email}`"
        class="text-xs text-neutral-300 transition-colors hover:text-neutral-100"
      >
        {{ contact.email }}
      </a>
      <a
        v-if="contact.phone"
        :href="`tel:${contact.phone.replace(/\s/g, '')}`"
        class="text-xs text-neutral-300 transition-colors hover:text-neutral-100"
      >
        {{ contact.phone }}
      </a>
    </template>
  </UFooter>
</template>

<script setup lang="ts">
import { homePageContent } from '~/data/homePage'

const site = useSiteConfig()
const { public: { copyrightYear } } = useRuntimeConfig()
const { footerLegal, sidebarNav } = await useSiteNavigation()
const contact = homePageContent.contact
</script>
