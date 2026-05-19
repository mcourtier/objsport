<template>
  <section
    class="border-t border-border-subtle py-12 md:py-16"
    aria-labelledby="sportif-benefits-heading"
  >
    <h2
      id="sportif-benefits-heading"
      class="sr-only"
    >
      Nos engagements
    </h2>
    <ul class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex gap-4"
      >
        <span
          class="flex h-12 w-12 shrink-0 items-center justify-center text-brand-red"
          aria-hidden="true"
        >
          <Icon
            :name="sportifBenefitIcon(benefit.icon)"
            class="h-10 w-10"
          />
        </span>
        <div>
          <p class="font-display text-sm font-bold uppercase leading-snug tracking-button text-text-primary">
            {{ benefit.title }}
          </p>
          <p class="mt-1 text-sm text-text-muted">
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
