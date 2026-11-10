<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="content.hero" />

    <div class="grid gap-4 lg:grid-cols-3 lg:items-start lg:gap-5">
      <ContactForm
        class="lg:col-span-2"
        :heading="content.form.heading"
        :intro="content.form.intro"
        :submit-label="content.form.submitLabel"
        :success-message="content.form.successMessage"
        :error-message="content.form.errorMessage"
      />
      <CardContact heading="Coordonnées" :email="email" :phone="phone" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { contactPageContent } from '~/data/contactPage'
import { homePageContent } from '~/data/homePage'

const content = contactPageContent
const { email, phone } = homePageContent.contact

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>
