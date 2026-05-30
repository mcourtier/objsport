<template>
  <section
    class="py-10 md:py-14"
    aria-labelledby="entreprise-benefits-heading"
  >
    <h2 id="entreprise-benefits-heading" class="sr-only">Bénéfices</h2>
    <ul
      class="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:flex lg:items-stretch lg:justify-between lg:gap-0 lg:divide-x lg:divide-neutral-700"
    >
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex flex-col items-center px-3 text-center sm:px-4 lg:flex-1 lg:px-5"
      >
        <span
          class="bg-primary text-neutral-100 flex h-14 w-14 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <Icon :name="entrepriseBenefitIcon(benefit.icon)" class="h-7 w-7" />
        </span>
        <p
          class="font-display tracking-button mt-4 max-w-[9rem] text-xs leading-snug font-bold text-neutral-100 uppercase md:max-w-none md:text-sm"
        >
          {{ benefit.title }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EntrepriseBenefit } from '~/types/entreprise'
import { entrepriseBenefitIcon } from '~/utils/entrepriseIcons'

defineProps<{
  benefits: EntrepriseBenefit[]
}>()
</script>
