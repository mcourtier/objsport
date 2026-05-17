<template>
  <section class="py-16 md:py-24">
    <div class="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
      <h1 class="font-display text-4xl font-bold uppercase tracking-wide text-text-primary md:text-5xl">
        L’équipe
      </h1>
      <p class="mt-6 max-w-prose text-lg text-text-secondary">
        {{ intro }}
      </p>

      <ul
        v-if="profiles?.length"
        class="mt-12 space-y-12"
      >
        <li
          v-for="profile in profiles"
          :key="profile.slug"
        >
          <TeamMemberProfile :profile="profile" />
        </li>
      </ul>

      <p
        v-else
        class="mt-12 text-text-muted"
      >
        Aucun profil disponible pour le moment.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
interface EquipePageContent {
  title?: string
  description?: string
  intro?: string
}

const { data: page } = await useAsyncData('equipe-page', () =>
  queryCollection('content').path('/equipe').first(),
)

const { data: profiles } = await useTeamProfiles()

const pageContent = computed(() => page.value as EquipePageContent | null)

const intro = computed(
  () => pageContent.value?.intro ?? 'Rencontrez les professionnels Objectif Sport.',
)

useSeoMeta({
  title: () => pageContent.value?.title ?? 'L’équipe — Objectif Sport',
  description: () => pageContent.value?.description,
})
</script>
