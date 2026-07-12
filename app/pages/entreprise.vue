<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 md:grid-cols-6 lg:gap-5">
      <!-- <CardEntrepriseCategories
        :categories="content.categories"
        class="md:col-span-6"
      /> -->

      <CardEntrepriseBenefits
        :benefits="content.benefits"
        class="md:col-span-6"
      />

      <CardTree class="md:col-span-6">
        <template #root>
          <CardText heading-id="entreprise-why-heading">
            <template #heading>
              {{ content.reasonsTitle }}
              <span class="text-primary">{{
                content.reasonsTitleHighlight
              }}</span>
              ?
            </template>
          </CardText>
        </template>

        <template #children>
          <EntrepriseReasonCard
            v-for="reason in content.reasons"
            :key="reason.title"
            :reason="reason"
          />
        </template>
      </CardTree>

      <CardTree class="md:col-span-6">
        <template #root>
          <CardText
            :subheading="content.servicesSubheading"
            heading-id="entreprise-services-heading"
          >
            <template #heading>
              Nos prestations <span class="text-primary">en entreprise</span>
            </template>
          </CardText>
        </template>

        <template #children>
          <EntrepriseServiceCard
            v-for="service in content.services"
            :key="service.title"
            :service="service"
          />
        </template>
      </CardTree>
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
