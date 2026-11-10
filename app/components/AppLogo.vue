<template>
  <div class="lg:text-center">
    <NuxtLink
      to="/"
      class="block focus-visible:outline-offset-4 lg:mx-auto lg:w-full lg:max-w-sm"
      aria-label="Objectif Sport — Accueil"
    >
      <img src="/logo.svg" alt="" class="h-auto w-28 lg:mx-auto lg:w-64" />
    </NuxtLink>
    <p
      v-if="tagline"
      class="brand-tagline mt-2 hidden text-sm tracking-widest lg:block"
    >
      {{ tagline }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { tagline } = await useSiteNavigation()
</script>
