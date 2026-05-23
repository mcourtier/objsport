<template>
  <NuxtLink :to="`/equipe/${profile.slug}`" class="group block h-full">
    <UCard
      class="bg-neutral-800 group-hover:border-brand flex h-full flex-col transition-all duration-200 group-hover:shadow-lg"
    >
      <div
        class="bg-neutral-900 relative aspect-square w-full shrink-0 overflow-hidden"
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

      <div class="flex flex-1 flex-col p-6 md:p-8">
        <h2
          class="font-display text-neutral-100 text-2xl font-bold tracking-wide uppercase"
        >
          {{ profile.name }}
        </h2>
        <p
          class="font-display tracking-button text-brand mt-2 text-sm font-semibold uppercase"
        >
          {{ profile.role }}
        </p>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TeamProfilePage } from '~/types/team'

defineProps<{
  profile: TeamProfilePage
}>()
</script>
