<template>
  <article class="flex h-full flex-col">
    <div class="rounded-t-2xl bg-brand-white px-5 pb-10 pt-6 text-center text-bg-base">
      <Icon
        :name="clubPricingIcon(tier.icon)"
        class="mx-auto h-10 w-10 text-brand-red"
        aria-hidden="true"
      />
      <p class="mt-3 font-display text-sm font-bold uppercase tracking-button">
        {{ tier.label }}
      </p>
      <p class="mt-2 font-display text-4xl font-extrabold leading-none md:text-5xl">
        {{ tier.price }}
      </p>
    </div>

    <p
      class="relative z-10 -mt-5 mx-auto max-w-[92%] rounded-full bg-brand-red px-4 py-2 text-center font-display text-[0.65rem] font-bold uppercase leading-snug tracking-wide text-brand-white sm:text-xs"
    >
      {{ tier.model }}
    </p>

    <div
      class="mt-0 flex flex-1 flex-col rounded-b-2xl bg-bg-card px-5 pb-6 pt-10"
    >
      <ul class="space-y-3">
        <li
          v-for="(note, index) in tier.footnotes"
          :key="`${tier.label}-${index}`"
          class="flex gap-2 text-sm leading-relaxed text-text-secondary"
        >
          <Icon
            name="mdi:check-circle"
            class="mt-0.5 h-5 w-5 shrink-0 text-accent-consulting"
            aria-hidden="true"
          />
          <span>{{ note }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { ClubPricingTier } from '~/types/club'
import { clubPricingIcon } from '~/utils/clubIcons'

defineProps<{
  tier: ClubPricingTier
}>()
</script>
