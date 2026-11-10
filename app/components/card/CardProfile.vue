<template>
  <!-- CardProfile -->
  <NuxtLink :to="`/equipe/${profile.slug}`" class="card-profile group">
    <Card
      class="group-hover:border-primary flex h-full flex-col transition-all duration-200 group-hover:shadow-lg"
      :ui="cardUi"
    >
      <div
        class="relative aspect-square w-full shrink-0 overflow-hidden bg-neutral-900"
      >
        <img
          :src="profile.photo"
          :alt="`Portrait de ${profile.name}`"
          class="absolute inset-0 size-full object-cover object-center"
          width="480"
          height="480"
          loading="lazy"
        />
      </div>

      <div class="flex flex-1 flex-col p-4 md:p-6">
        <h2
          class="font-display text-base font-bold tracking-wide text-neutral-100 uppercase italic md:text-xl"
        >
          {{ profile.name }}
        </h2>
        <p
          class="font-display tracking-button text-primary-500 mt-2 text-xs font-semibold uppercase md:text-sm"
        >
          {{ profile.role }}
        </p>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TeamProfile } from '~/types/team'

defineProps<{
  profile: TeamProfile
}>()

/* Photo runs edge to edge: the card's rounded corners clip it. */
const cardUi = {
  body: 'p-0 sm:p-0 md:p-0 flex flex-col h-full',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-profile {
  @apply block h-full;
}
</style>
