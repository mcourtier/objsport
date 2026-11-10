<template>
  <Card as="section" aria-labelledby="equipe-intervention-heading">
    <template #title>
      <AppTitle id="equipe-intervention-heading">
        Notre mode d'intervention
      </AppTitle>
    </template>

    <ol class="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-3">
      <template v-for="(step, index) in steps" :key="step.title">
        <li
          class="flex min-w-0 flex-1 items-start gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
        >
          <span
            class="bg-primary/15 ring-primary relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring-2"
            aria-hidden="true"
          >
            <Icon :name="step.icon" class="text-primary h-7 w-7" />
            <span
              class="bg-primary absolute -top-1.5 -left-1.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-neutral-100"
            >
              {{ index + 1 }}
            </span>
          </span>

          <div class="min-w-0">
            <h3
              class="font-display tracking-button text-xs leading-snug font-bold text-neutral-100 uppercase md:text-sm lg:mt-4"
            >
              {{ step.title }}
            </h3>

            <p class="mt-2 text-sm leading-relaxed text-neutral-300">
              {{ step.description }}
            </p>
          </div>
        </li>

        <li
          v-if="index < steps.length - 1"
          class="text-primary hidden h-14 shrink-0 items-center lg:flex"
          aria-hidden="true"
        >
          <Icon name="material-symbols:arrow-forward" class="h-5 w-5" />
        </li>
      </template>
    </ol>
  </Card>
</template>

<script setup lang="ts">
import type { InterventionStep } from '~/types/team'

defineProps<{
  steps: InterventionStep[]
}>()
</script>
