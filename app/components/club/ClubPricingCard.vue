<template>
  <article class="flex h-full flex-col">
    <div
      class="bg-brand-white text-bg-base rounded-t-2xl px-5 pt-6 pb-10 text-center"
    >
      <Icon
        :name="clubPricingIcon(tier.icon)"
        class="text-brand-red mx-auto h-10 w-10"
        aria-hidden="true"
      />
      <p class="font-display tracking-button mt-3 text-sm font-bold uppercase">
        {{ tier.label }}
      </p>
      <p
        class="font-display mt-2 text-4xl leading-none font-extrabold md:text-5xl"
      >
        {{ tier.price }}
      </p>
    </div>

    <p
      class="bg-brand-red font-display text-brand-white relative z-10 mx-auto -mt-5 max-w-[92%] rounded-full px-4 py-2 text-center text-[0.65rem] leading-snug font-bold tracking-wide uppercase sm:text-xs"
    >
      {{ tier.model }}
    </p>

    <div
      class="bg-bg-card mt-0 flex flex-1 flex-col rounded-b-2xl px-5 pt-10 pb-6"
    >
      <ul class="space-y-3">
        <li
          v-for="(note, index) in tier.footnotes"
          :key="`${tier.label}-${index}`"
          class="text-text-secondary flex gap-2 text-sm leading-relaxed"
        >
          <Icon
            name="mdi:check-circle"
            class="text-accent-consulting mt-0.5 h-5 w-5 shrink-0"
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
