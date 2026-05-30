<template>
  <section
    class="border-neutral-700 border-t py-12 md:py-16"
    aria-labelledby="entreprise-why-heading"
  >
    <h2
      id="entreprise-why-heading"
      class="font-display text-neutral-100 text-center text-lg font-bold tracking-wide uppercase md:text-xl"
    >
      {{ title }}
      <span class="text-primary">{{ titleHighlight }}</span>
      ?
    </h2>

    <ul
      class="divide-neutral-700 mt-10 grid gap-8 sm:grid-cols-2 sm:divide-x lg:mt-12 lg:grid-cols-4 lg:gap-0"
    >
      <li
        v-for="reason in reasons"
        :key="reason.title"
        class="flex flex-col items-center px-4 text-center lg:px-6"
      >
        <span
          class="bg-primary text-neutral-100 flex h-12 w-12 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <Icon :name="entrepriseReasonIcon(reason.icon)" class="h-6 w-6" />
        </span>
        <p
          class="font-display tracking-button text-neutral-100 mt-4 text-sm font-bold uppercase"
        >
          {{ reason.title }}
        </p>
        <p class="text-neutral-400 mt-2 text-sm">
          {{ reason.description }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EntrepriseReason } from '~/types/entreprise'
import { entrepriseReasonIcon } from '~/utils/entrepriseIcons'

defineProps<{
  title: string
  titleHighlight: string
  reasons: EntrepriseReason[]
}>()
</script>
