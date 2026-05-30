<template>
  <div>
    <PageHero
      :title="content.hero.title"
      :title-accent="content.hero.titleAccent"
      :description="content.hero.description"
    />

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
</script>
