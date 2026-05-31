<template>
  <div :class="compact ? '' : 'text-center'">
    <NuxtLink
      to="/"
      :class="
        compact
          ? 'block focus-visible:outline-offset-4'
          : 'mx-auto block w-full max-w-xs focus-visible:outline-offset-4 sm:max-w-sm'
      "
      aria-label="Objectif Sport — Accueil"
    >
      <img
        src="/logo.svg"
        :alt="compact ? '' : 'Objectif Sport'"
        :class="compact ? 'h-12 w-auto' : 'mx-auto h-auto sm:w-64'"
      />
    </NuxtLink>
    <p
      v-if="tagline"
      class="brand-tagline"
      :class="compact ? 'mt-1 text-[10px] tracking-wider' : 'mt-2'"
    >
      {{ tagline }}
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    compact?: boolean
  }>(),
  {
    compact: false,
  },
)

const { tagline } = await useSiteNavigation()
</script>
