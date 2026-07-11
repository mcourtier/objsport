<template>
  <!-- CardAudience -->
  <section
    class="card-audience"
    :aria-labelledby="headingId"
    data-reveal-section
  >
    <header class="text-center" data-reveal>
      <p v-if="tagline" class="brand-tagline">
        {{ tagline }}
      </p>
      <h2
        :id="headingId"
        class="brand-headline mx-auto mt-3 max-w-2xl text-2xl md:text-3xl lg:text-4xl"
      >
        {{ heading }}
      </h2>
      <p
        v-if="subheading"
        class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base"
      >
        {{ subheading }}
      </p>
    </header>

    <ul class="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10 lg:gap-5">
      <li v-for="audience in audiences" :key="audience.id" data-reveal>
        <NuxtLink
          :to="audience.to"
          class="group flex h-full flex-col rounded-2xl border border-neutral-700 bg-neutral-900/50 p-5 transition-colors hover:border-neutral-600 hover:bg-neutral-900 md:p-6"
        >
          <div class="flex items-start gap-4">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              :class="sectionIconSurfaceClass(audience.accent)"
              aria-hidden="true"
            >
              <Icon
                :name="audience.icon"
                class="h-6 w-6"
                :class="sectionTextClass(audience.accent)"
              />
            </span>
            <div class="min-w-0">
              <h3
                class="font-display text-lg font-bold uppercase italic"
                :class="sectionTextClass(audience.accent)"
              >
                {{ audience.title }}
              </h3>
              <p class="mt-2 text-sm leading-snug text-neutral-400">
                {{ audience.description }}
              </p>
            </div>
          </div>

          <span
            class="font-display mt-5 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide"
            :class="sectionTextClass(audience.accent)"
          >
            {{ audience.cta }}
            <Icon
              name="material-symbols:arrow-forward"
              class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { AudienceBlock } from '~/types/navigation'
import { sectionIconSurfaceClass, sectionTextClass } from '~/utils/pillarTheme'

withDefaults(
  defineProps<{
    heading: string
    subheading?: string
    tagline?: string
    audiences: AudienceBlock[]
    headingId?: string
  }>(),
  {
    headingId: 'audience-heading',
  },
)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-audience {
  @apply relative overflow-hidden bg-black;
}
</style>
