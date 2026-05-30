<template>
  <section
    class="py-10 md:py-14"
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

    <ul class="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-5">
      <li
        v-for="reason in reasons"
        :key="reason.title"
        class="rounded-xl border border-neutral-700 bg-neutral-900 p-5 md:p-6"
      >
        <div class="flex items-center gap-3">
          <span
            v-if="reason.icon !== 'results'"
            class="bg-primary text-neutral-100 flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
            aria-hidden="true"
          >
            <Icon :name="entrepriseReasonIcon(reason.icon)" class="h-5 w-5" />
          </span>
          <Icon
            v-else
            :name="entrepriseReasonIcon(reason.icon)"
            class="text-primary h-11 w-11 shrink-0"
            aria-hidden="true"
          />
          <p
            class="font-display tracking-button text-neutral-100 min-w-0 flex-1 text-sm font-bold uppercase leading-snug"
          >
            {{ reason.title }}
          </p>
        </div>
        <p class="text-neutral-300 mt-3 pl-14 text-sm leading-relaxed">
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
