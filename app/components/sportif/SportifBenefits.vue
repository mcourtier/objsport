<template>
  <Card as="section" aria-labelledby="sportif-benefits-heading">
    <h2 id="sportif-benefits-heading" class="sr-only">Nos engagements</h2>
    <ul class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <li
        v-for="benefit in benefits"
        :key="benefit.title"
        class="flex gap-4"
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
  </Card>
</template>

<script setup lang="ts">
import type { SportifBenefit } from '~/types/sportif'
import { sportifBenefitIcon } from '~/utils/sportifIcons'

defineProps<{
  benefits: SportifBenefit[]
}>()
</script>
