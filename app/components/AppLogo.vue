<template>
  <div class="lg:text-center">
    <NuxtLink
      to="/"
      class="block focus-visible:outline-offset-4 lg:mx-auto lg:w-full lg:max-w-sm"
      aria-label="Objectif Sport — Accueil"
    >
      <img src="/logo.svg" alt="" class="h-auto w-36 lg:mx-auto lg:w-64" />
    </NuxtLink>
    <p
      v-if="tagline"
      class="brand-tagline mt-1 text-[10px] tracking-wider lg:mt-2 lg:text-sm lg:tracking-widest"
    >
      {{ tagline }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { tagline } = await useSiteNavigation()
</script>
