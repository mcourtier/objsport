<template>
  <article
    class="flex h-full flex-col rounded-2xl bg-white p-6 text-neutral-900 md:p-7"
  >
    <header class="text-center">
      <span
        class="bg-primary text-neutral-100 mx-auto flex h-14 w-14 items-center justify-center rounded-full"
        aria-hidden="true"
      >
        <Icon :name="entrepriseServiceIcon(service.icon)" class="h-7 w-7" />
      </span>
      <h3
        class="font-display tracking-button mt-4 text-base font-bold uppercase md:text-lg"
      >
        <NuxtLink
          :to="service.to"
          class="hover:text-primary transition-colors"
        >
          {{ service.title }}
        </NuxtLink>
      </h3>
    </header>

    <ul class="mt-6 flex-1 space-y-2.5">
      <li
        v-for="item in service.items"
        :key="item"
        class="flex gap-2 text-sm leading-snug"
      >
        <Icon
          name="material-symbols:check-circle"
          class="text-primary mt-0.5 h-4 w-4 shrink-0"
          aria-hidden="true"
        />
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
