<template>
  <article class="flex h-full flex-col">
    <div
      class="bg-white text-neutral-900 rounded-t-2xl px-5 pt-6 pb-10 text-center"
    >
      <Icon
        :name="clubPricingIcon(tier.icon)"
        class="text-primary mx-auto h-10 w-10"
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
      class="bg-primary font-display text-neutral-100 relative z-10 mx-auto -mt-5 max-w-11/12 rounded-full px-4 py-2 text-center text-xs leading-snug font-bold tracking-wide uppercase"
    >
      {{ tier.model }}
    </p>

    <div
      class="bg-neutral-800 mt-0 flex flex-1 flex-col rounded-b-2xl px-5 pt-10 pb-6"
    >
      <ul class="space-y-3">
        <li
          v-for="(note, index) in tier.footnotes"
          :key="`${tier.label}-${index}`"
          class="text-neutral-300 flex gap-2 text-sm leading-relaxed"
        >
          <Icon
            name="material-symbols:check-circle-outline"
            class="text-yellow-400 mt-0.5 h-5 w-5 shrink-0"
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
