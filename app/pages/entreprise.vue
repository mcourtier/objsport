<template>
  <div ref="root">
    <PageHero
      :title="content.headline"
      :title-accent="content.headlineAccent"
      :tagline="content.tagline"
      :show-tagline="true"
      :show-description="false"
    />

    <div class="mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16 lg:px-8">
      <EntrepriseCategories :categories="content.categories" />

      <section
        aria-labelledby="entreprise-services-heading"
        class="space-y-10 pt-4 md:space-y-12 md:pt-6"
        data-reveal-section
      >
        <EntrepriseSectionHeading
          :title="content.servicesTitle"
          heading-id="entreprise-services-heading"
        />
        <ul class="grid gap-8 pt-6 sm:gap-10 lg:grid-cols-3 lg:gap-6 lg:pt-8">
          <li v-for="service in content.services" :key="service.title">
            <EntrepriseServiceCard :service="service" />
          </li>
        </ul>
      </section>

      <EntrepriseBenefitsBar
        :benefits="content.benefits"
        class="mt-10 md:mt-14"
      />

      <EntrepriseWhyChoose
        :title="content.reasonsTitle"
        :title-highlight="content.reasonsTitleHighlight"
        :reasons="content.reasons"
        class="mt-10 md:mt-14"
      />
    </div>
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
