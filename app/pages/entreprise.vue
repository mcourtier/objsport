<template>
  <div>
    <PageHero
      :title="content.headline"
      :title-accent="content.headlineAccent"
      :tagline="content.tagline"
      :show-tagline="true"
      :show-description="false"
    />

    <div class="mx-auto max-w-7xl px-4 pb-12 md:px-6 md:pb-16 lg:px-8">
      <section
        aria-label="Consulting, Soins et Coaching"
        class="mt-5 pb-10 md:pb-14"
      >
        <ul class="grid justify-items-center gap-8 sm:grid-cols-3 sm:gap-6">
          <li v-for="category in content.categories" :key="category.accent">
            <Pictogram
              :to="category.to"
              :label="category.label"
              :accent="category.accent"
              :title="category.title"
              :description="category.description"
            />
          </li>
        </ul>
      </section>

      <section aria-labelledby="entreprise-services-heading" class="space-y-8">
        <EntrepriseSectionHeading
          :title="content.servicesTitle"
          heading-id="entreprise-services-heading"
        />
        <ul class="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <li v-for="service in content.services" :key="service.title">
            <EntrepriseServiceCard :service="service" />
          </li>
        </ul>
      </section>

      <EntrepriseBenefitsBar :benefits="content.benefits" />

      <EntrepriseWhyChoose
        :title="content.reasonsTitle"
        :title-highlight="content.reasonsTitleHighlight"
        :reasons="content.reasons"
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
</script>
