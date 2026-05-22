<template>
  <NuxtLink :to="`/equipe/${profile.slug}`" class="group block h-full">
    <UCard
      class="bg-bg-elevated group-hover:border-brand-red flex h-full flex-col transition-all duration-200 group-hover:shadow-lg"
    >
      <div
        class="bg-bg-base relative aspect-square w-full shrink-0 overflow-hidden"
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
          class="font-display text-text-primary text-2xl font-bold tracking-wide uppercase"
        >
          {{ profile.name }}
        </h2>
        <p
          class="font-display tracking-button text-brand-red mt-2 text-sm font-semibold uppercase"
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
