<template>
  <section aria-labelledby="equipe-valeurs-heading" data-reveal-section>
    <EntrepriseSectionHeading
      title="Nos valeurs"
      heading-id="equipe-valeurs-heading"
    />

    <ul class="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-6">
      <li
        v-for="value in values"
        :key="value.title"
        class="flex min-w-0 gap-3"
        data-reveal
      >
        <Icon
          :name="value.icon"
          class="text-neutral-100 h-8 w-8 shrink-0 md:h-9 md:w-9"
          aria-hidden="true"
        />

        <div class="min-w-0">
          <p
            class="font-display tracking-button text-primary text-xs leading-snug font-bold uppercase md:text-sm"
          >
            {{ value.title }}
          </p>
          <p class="text-neutral-300 mt-1 text-sm leading-relaxed">
            {{ value.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EquipeCoreValue } from '~/types/team'

defineProps<{
  values: EquipeCoreValue[]
}>()
</script>
