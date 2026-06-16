<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <Dashboard layout="stack">
      <CardEntrepriseCategories :categories="content.categories" />

      <CardEntrepriseServices
        :title="content.servicesTitle"
        :services="content.services"
      />

      <CardEntrepriseWhy
        :benefits="content.benefits"
        :title="content.reasonsTitle"
        :title-highlight="content.reasonsTitleHighlight"
        :reasons="content.reasons"
      />
    </Dashboard>
  </div>
</template>

<script setup lang="ts">
import { entreprisePageContent } from '~/data/entreprisePage'

const content = entreprisePageContent

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
