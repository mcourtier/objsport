<template>
  <div ref="root">
    <PageHero v-bind="content.hero" />

    <RdvForm
      :heading="content.form.heading"
      :intro="formIntro"
      :submit-label="content.form.submitLabel"
      :success-message="content.form.successMessage"
      :error-message="content.form.errorMessage"
      :members="memberOptions"
      :initial-member-id="initialMemberId"
    />
  </div>
</template>

<script setup lang="ts">
import { rdvPageContent } from '~/data/rdvPage'

const content = rdvPageContent
const route = useRoute()

const { data: profiles } = await useTeamProfiles()

const memberOptions = computed(() =>
  (profiles.value ?? []).map((profile) => ({
    label: profile.name,
    value: profile.slug,
    description: profile.role,
  })),
)

const initialMemberId = computed(() => {
  const membre = route.query.membre
  if (typeof membre !== 'string' || !membre) {
    return ''
  }

  const match = (profiles.value ?? []).find((profile) => profile.slug === membre)
  return match?.slug ?? ''
})

const selectedMember = computed(() =>
  (profiles.value ?? []).find(
    (profile) => profile.slug === initialMemberId.value,
  ),
)

const formIntro = computed(() => {
  if (selectedMember.value) {
    return `Demande de rendez-vous avec ${selectedMember.value.name} — ${selectedMember.value.role}.`
  }
  return content.form.intro
})

useSeoMeta({
  title: () =>
    selectedMember.value
      ? `RDV avec ${selectedMember.value.name} — Objectif Sport`
      : `${content.title} — Objectif Sport`,
  description: () => content.description,
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>
