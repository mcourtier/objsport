<template>
  <!-- CardProfile -->
  <NuxtLink :to="`/equipe/${profile.slug}`" class="card-profile group">
    <Card
      :surface="false"
      class="group-hover:border-primary flex h-full flex-col bg-neutral-800 transition-all duration-200 group-hover:shadow-lg"
      data-reveal
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

      <div class="flex flex-1 flex-col py-6">
        <h2
          class="font-display text-xl font-bold tracking-wide text-neutral-100 uppercase italic"
        >
          {{ profile.name }}
        </h2>
        <p
          class="font-display tracking-button text-primary mt-2 text-sm font-semibold uppercase"
        >
          {{ profile.role }}
        </p>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TeamProfilePage } from '~/types/team'

defineProps<{
  profile: TeamProfilePage
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";
.card-profile {
  @apply block h-full;
}
</style>
