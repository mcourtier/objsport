<template>
  <footer class="border-border-subtle bg-bg-elevated border-t">
    <section class="bg-brand-red py-12 md:py-16">
      <div class="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
        <h2
          class="brand-headline text-brand-white text-2xl not-italic md:text-3xl"
        >
          Chaque minute compte.
        </h2>
        <p class="text-brand-white/90 mx-auto mt-4 max-w-xl">
          Contactez Objectif Sport pour un accompagnement sur mesure, sur site
          ou à domicile.
        </p>
        <AppButton
          to="/contact"
          variant="secondary"
          class="border-brand-white mt-8"
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
          class="text-text-muted hover:text-text-primary text-sm transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <p class="text-text-muted mt-6 text-center text-sm">
        © {{ copyrightYear }} Objectif Sport. Tous droits réservés.
      </p>

      <p class="text-text-muted mt-2 text-center text-xs">
        <UButton
          type="button"
          variant="link"
          color="neutral"
          class="text-text-muted text-xs"
          @click="onCookiePreferences"
        >
          Gérer les cookies
        </UButton>
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { footerLegal } = useSiteNavigation()
const {
  public: { copyrightYear },
} = useRuntimeConfig()

function onCookiePreferences() {
  // Matomo consent UI — phase 4
}
</script>
