<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
      <h1 class="font-display text-4xl font-bold uppercase tracking-wide text-text-primary md:text-5xl">
        L’équipe
      </h1>
      <p class="mt-6 max-w-prose text-lg text-text-secondary">
        Rencontrez les professionnels Objectif Sport.
      </p>

      <ul class="mt-12 space-y-8">
        <li
          v-for="profile in teamProfiles"
          :key="profile.id"
        >
          <article class="border border-border-subtle bg-bg-elevated p-8 md:p-10">
            <h2 class="font-display text-2xl font-bold uppercase tracking-wide text-text-primary">
              {{ profile.name }}
            </h2>
            <p
              v-if="profile.role"
              class="mt-2 font-display text-sm font-semibold uppercase tracking-button text-brand-red"
            >
              {{ profile.role }}
            </p>
            <p class="mt-4 text-text-secondary">
              Contenu à venir.
            </p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamProfile {
  id: string
  name: string
  role?: string
}

const teamProfiles: TeamProfile[] = [
  {
    id: 'pierre-vespignani',
    name: 'Pierre Vespignani',
  },
]

useSeoMeta({
  title: 'L’équipe — Objectif Sport',
  description: 'Rencontrez les professionnels Objectif Sport.',
})
</script>
