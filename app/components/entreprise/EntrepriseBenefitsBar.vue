<template>
  <section
    class="border-neutral-700 border-t py-10 md:py-12"
    aria-labelledby="entreprise-benefits-heading"
  >
    <h2 id="entreprise-benefits-heading" class="sr-only">Bénéfices</h2>
    <ul
      class="divide-neutral-700 grid gap-8 sm:grid-cols-2 sm:divide-x lg:flex lg:divide-x lg:divide-y-0"
    >
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex flex-col items-center px-4 text-center lg:flex-1"
      >
        <span
          class="border-primary text-primary flex h-14 w-14 items-center justify-center rounded-full border-2"
          aria-hidden="true"
        >
          <Icon
            :name="entrepriseBenefitIcon(benefit.icon)"
            class="h-7 w-7"
          />
        </span>
        <p
          class="font-display tracking-button text-neutral-100 mt-4 text-xs leading-snug font-bold uppercase md:text-sm"
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
