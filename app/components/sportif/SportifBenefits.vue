<template>
  <section
    class="border-neutral-700 border-t py-12 md:py-16"
    aria-labelledby="sportif-benefits-heading"
    data-reveal-section
  >
    <h2 id="sportif-benefits-heading" class="sr-only">Nos engagements</h2>
    <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex gap-4"
        data-reveal
      >
        <span
          class="text-primary flex h-12 w-12 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Icon :name="sportifBenefitIcon(benefit.icon)" class="h-10 w-10" />
        </span>
        <div>
          <p
            class="font-display tracking-button text-neutral-100 text-sm leading-snug font-bold uppercase"
          >
            {{ benefit.title }}
          </p>
          <p class="text-neutral-400 mt-1 text-sm">
            {{ benefit.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { SportifBenefit } from '~/types/sportif'
import { sportifBenefitIcon } from '~/utils/sportifIcons'

defineProps<{
  benefits: SportifBenefit[]
}>()
</script>
