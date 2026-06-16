<template>
  <section aria-labelledby="equipe-intervention-heading" data-reveal-section>
    <EntrepriseSectionHeading
      title="Notre mode d'intervention"
      heading-id="equipe-intervention-heading"
    />

    <ol class="mt-8 flex flex-col gap-10 lg:mt-10 lg:flex-row lg:items-start lg:gap-3">
      <template v-for="(step, index) in steps" :key="step.title">
        <li class="relative min-w-0 flex-1 px-2 text-center" data-reveal>
          <span
            class="bg-primary text-neutral-100 absolute top-0 left-2 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>

          <Icon
            :name="step.icon"
            class="text-neutral-100 mx-auto mt-2 h-10 w-10 md:h-12 md:w-12"
            aria-hidden="true"
          />

          <h3
            class="font-display tracking-button mt-4 text-xs leading-snug font-bold text-neutral-100 uppercase md:text-sm"
          >
            {{ step.title }}
          </h3>

          <p class="text-neutral-300 mt-2 text-sm leading-relaxed">
            {{ step.description }}
          </p>
        </li>

        <li
          v-if="index < steps.length - 1"
          class="text-primary hidden shrink-0 items-center self-center lg:flex"
          aria-hidden="true"
        >
          <Icon name="material-symbols:arrow-forward" class="h-5 w-5" />
        </li>
      </template>
    </ol>
  </section>
</template>

<script setup lang="ts">
import type { InterventionStep } from '~/types/team'

defineProps<{
  steps: InterventionStep[]
}>()
</script>
