<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <ContactForm
      :heading="content.form.heading"
      :intro="content.form.intro"
      :submit-label="content.form.submitLabel"
      :success-message="content.form.successMessage"
      :error-message="content.form.errorMessage"
    />
  </div>
</template>

<script setup lang="ts">
import { contactPageContent } from '~/data/contactPage'

const content = contactPageContent

useSeoMeta({
  title: () => `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
