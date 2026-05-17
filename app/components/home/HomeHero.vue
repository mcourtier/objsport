<template>
  <section
    class="relative -mt-[4.5rem] flex min-h-[70vh] items-center overflow-hidden pt-[4.5rem] md:-mt-20 md:min-h-[85vh] md:pt-20"
    aria-labelledby="hero-heading"
  >
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="heroBackgroundStyle"
      role="img"
      aria-label="Salle de sport et coaching performance"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-bg-base/90 via-bg-base/70 to-transparent"
      aria-hidden="true"
    />

    <div class="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8">
      <p class="font-display text-sm font-semibold uppercase tracking-widest text-brand-red">
        {{ eyebrow }}
      </p>
      <h1
        id="hero-heading"
        class="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-tight text-text-primary md:text-5xl lg:text-6xl"
      >
        {{ titleBefore }}
        <span class="text-brand-red">{{ titleHighlight }}</span>
      </h1>
      <p class="mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
        {{ description }}
      </p>
      <div class="mt-10 flex flex-wrap gap-4">
        <AppButton :to="primaryCtaTo">
          {{ primaryCtaLabel }}
        </AppButton>
        <AppButton
          :to="secondaryCtaTo"
          variant="secondary"
        >
          {{ secondaryCtaLabel }}
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HomeHeroContent } from '~/types/homepage'

withDefaults(defineProps<HomeHeroContent>(), {
  eyebrow: 'Sur site ou à domicile',
  titleBefore: 'Atteignez vos',
  titleHighlight: 'objectifs',
  description:
    'Coaching bien-être et performance pour les entreprises, les clubs sportifs et les sportifs. Interventions en entreprise ou à domicile — Gym, Lab et Studio.',
  primaryCtaLabel: 'Entreprise',
  primaryCtaTo: '/entreprise',
  secondaryCtaLabel: 'Demander un audit',
  secondaryCtaTo: '/audit',
})

const heroBackgroundStyle = {
  backgroundImage:
    'linear-gradient(rgba(15, 16, 17, 0.4), rgba(15, 16, 17, 0.6)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop")',
}
</script>
