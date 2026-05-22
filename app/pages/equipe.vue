<template>
  <div>
    <PageHero
      :title="heroTitle"
      :title-accent="heroTitleAccent"
      :description="intro"
      :background-image="heroBackgroundImage"
      :background-image-alt="heroBackgroundImageAlt"
    />

    <section class="py-16 md:py-24">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul
          v-if="profiles?.length"
          class="grid gap-6 md:grid-cols-3 md:gap-8"
        >
          <li
            v-for="profile in profiles"
            :key="profile.slug"
            class="min-w-0"
          >
            <CardProfile :profile="profile" />
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
  </div>
</template>

<script setup lang="ts">
interface EquipePageContent {
  title?: string
  description?: string
  intro?: string
  heroTitle?: string
  heroTitleAccent?: string
  heroBackgroundImage?: string
  heroBackgroundImageAlt?: string
}

const { data: page } = await useAsyncData('equipe-page', () =>
  queryCollection('content').path('/equipe').first(),
)

const { data: profiles } = await useTeamProfiles()

const pageContent = computed(() => page.value as EquipePageContent | null)

const heroTitle = computed(() => pageContent.value?.heroTitle ?? 'L’équipe')

const heroTitleAccent = computed(() => pageContent.value?.heroTitleAccent)

const intro = computed(
  () => pageContent.value?.intro ?? 'Rencontrez les professionnels Objectif Sport.',
)

const heroBackgroundImage = computed(
  () => pageContent.value?.heroBackgroundImage ?? '/images/brand/hero-cover.jpg',
)

const heroBackgroundImageAlt = computed(
  () =>
    pageContent.value?.heroBackgroundImageAlt
    ?? 'Équipe Objectif Sport — coaching bien-être et performance',
)

useSeoMeta({
  title: () => pageContent.value?.title ?? 'L’équipe — Objectif Sport',
  description: () => pageContent.value?.description,
})
</script>
