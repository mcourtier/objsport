<template>
  <footer class="border-t border-border-subtle bg-bg-elevated">
    <section class="bg-brand-red py-12 md:py-16">
      <div class="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2 class="brand-headline text-2xl not-italic text-brand-white md:text-3xl">
          Chaque minute compte.
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-brand-white/90">
          Contactez Objectif Sport pour un accompagnement sur mesure, sur site ou à domicile.
        </p>
        <AppButton
          to="/contact"
          variant="secondary"
          class="mt-8 border-brand-white"
        >
          Nous contacter
        </AppButton>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
      <nav
        class="flex flex-wrap justify-center gap-x-6 gap-y-2"
        aria-label="Liens légaux"
      >
        <NuxtLink
          v-for="link in footerLegal"
          :key="link.to"
          :to="link.to"
          class="text-sm text-text-muted transition-colors hover:text-text-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <p class="mt-6 text-center text-sm text-text-muted">
        © {{ copyrightYear }} Objectif Sport. Tous droits réservés.
      </p>

      <p class="mt-2 text-center text-xs text-text-muted">
        <button
          type="button"
          class="underline transition-colors hover:text-text-secondary"
          @click="onCookiePreferences"
        >
          Gérer les cookies
        </button>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footerLegal } = useSiteNavigation()
const { public: { copyrightYear } } = useRuntimeConfig()

function onCookiePreferences() {
  // Matomo consent UI — phase 4
}
</script>
