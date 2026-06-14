<template>
  <article
    class="relative flex h-full flex-col rounded-[2rem] bg-white px-6 pb-8 pt-14 text-neutral-900 md:rounded-[2.5rem] md:px-8 md:pb-10 md:pt-16"
    data-reveal
  >
    <span
      class="bg-primary absolute left-1/2 top-0 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-neutral-100"
      aria-hidden="true"
    >
      <Icon :name="entrepriseServiceIcon(service.icon)" class="h-9 w-9" />
    </span>

    <header class="text-center">
      <h3
        class="font-display tracking-button text-base font-bold uppercase md:text-lg"
      >
        <NuxtLink :to="service.to" class="hover:text-primary transition-colors">
          {{ service.title }}
        </NuxtLink>
      </h3>
    </header>

    <ul class="mt-6 flex-1 space-y-3 md:mt-7">
      <li
        v-for="item in service.items"
        :key="item"
        class="flex gap-2.5 text-sm leading-snug text-neutral-800"
      >
        <span
          class="bg-primary mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-neutral-100"
          aria-hidden="true"
        >
          <Icon name="material-symbols:check" class="h-3 w-3" />
        </span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { EntrepriseService } from '~/types/entreprise'
import { entrepriseServiceIcon } from '~/utils/entrepriseIcons'

defineProps<{
  service: EntrepriseService
}>()
</script>
