<template>
  <NuxtLink :to="`/equipe/${profile.slug}`" class="block h-full group">
    <Card class="flex h-full flex-col bg-bg-elevated transition-all duration-200 group-hover:border-brand-red group-hover:shadow-lg">
      <div class="relative aspect-square w-full shrink-0 overflow-hidden bg-bg-base">
        <img
          :src="profile.photo"
          :alt="`Portrait de ${profile.name}`"
          class="absolute inset-0 size-full object-cover object-center"
          width="480"
          height="480"
          loading="lazy"
        >
      </div>

      <div class="flex flex-1 flex-col p-6 md:p-8">
        <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
          {{ profile.name }}
        </h2>
        <p class="mt-2 font-display text-sm font-semibold uppercase tracking-button text-brand-red">
          {{ profile.role }}
        </p>

        <p
          v-if="summary"
          class="mt-4 flex-1 text-text-secondary"
        >
          {{ summary }}
        </p>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { TeamProfilePage } from '~/types/team'

const props = defineProps<{
  profile: TeamProfilePage
}>()

const summary = computed(() => props.profile.excerpt ?? props.profile.description)
</script>
