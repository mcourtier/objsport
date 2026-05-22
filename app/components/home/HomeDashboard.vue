<template>
  <div class="mx-auto w-full max-w-[1600px] p-4 md:p-5 lg:p-6">
    <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <aside class="lg:col-span-3 lg:row-span-3">
        <HomeSidebar
          :tagline="sidebarTagline"
          :promo-title="eztmPromoTitle"
          :promo-description="eztm.description"
        />
      </aside>

      <div class="flex flex-col gap-4 lg:col-span-9 lg:gap-5">
        <div class="grid gap-4 lg:grid-cols-12 lg:gap-5 lg:min-h-[min(38vh,400px)]">
          <div class="lg:col-span-8 lg:min-h-[280px]">
            <HomeHero
              v-bind="hero"
              variant="embedded"
            />
          </div>
          <div class="lg:col-span-4">
            <HomeAudiencePanel v-bind="audience" />
          </div>
        </div>

        <div class="grid gap-4 lg:grid-cols-12 lg:gap-5 lg:min-h-[min(32vh,340px)]">
          <div class="lg:col-span-8">
            <HomeAppPreview v-bind="eztm" />
          </div>
          <div class="lg:col-span-4">
            <HomeFeatureHighlight v-bind="highlight" />
          </div>
        </div>

        <div class="grid gap-4 lg:grid-cols-12 lg:gap-5">
          <div class="lg:col-span-8">
            <HomePillars
              v-bind="pillars"
              variant="embedded"
            />
          </div>
          <div class="lg:col-span-4">
            <HomeContactPanel v-bind="contact" />
          </div>
        </div>
      </div>
    </div>

    <footer class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border-subtle pt-6">
      <NuxtLink
        v-for="link in footerLegal"
        :key="link.to"
        :to="link.to"
        class="text-xs text-text-muted transition-colors hover:text-text-secondary"
      >
        {{ link.label }}
      </NuxtLink>
      <p class="w-full text-center text-xs text-text-muted">
        © {{ copyrightYear }} Objectif Sport
      </p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { HomeDashboardContent } from '~/types/homepage'

const props = withDefaults(defineProps<HomeDashboardContent>(), {
  sidebarTagline: 'Santé • Performance • Résultats',
})

const { footerLegal } = useSiteNavigation()
const { public: { copyrightYear } } = useRuntimeConfig()

const eztmPromoTitle = computed(
  () => `${props.eztm.titleBefore} ${props.eztm.titleHighlight}`.trim(),
)
</script>
