<template>
  <article class="border border-border-subtle bg-bg-elevated">
    <div class="grid gap-0 md:grid-cols-[minmax(0,20rem)_1fr] lg:grid-cols-[minmax(0,22rem)_1fr]">
      <div class="relative aspect-[4/3] overflow-hidden bg-bg-base md:aspect-auto md:min-h-full">
        <img
          :src="profile.photo"
          :alt="`Portrait de ${profile.name}`"
          class="h-full w-full object-cover object-center"
          width="480"
          height="640"
          loading="lazy"
        >
      </div>

      <div class="flex flex-col p-8 md:p-10 lg:p-12">
        <h2 class="font-display text-3xl font-bold uppercase tracking-wide text-text-primary md:text-4xl">
          {{ profile.name }}
        </h2>
        <p class="mt-3 font-display text-sm font-semibold uppercase tracking-button text-brand-red">
          {{ profile.role }}
        </p>

        <div
          v-if="profile.body"
          class="prose-team mt-8 text-text-secondary"
        >
          <ContentRenderer :value="profile" />
        </div>

        <div
          v-if="hasContact"
          class="mt-10 border-t border-border-subtle pt-8"
        >
          <h3 class="font-display text-sm font-semibold uppercase tracking-button text-text-primary">
            Contact
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-if="profile.email">
              <a
                :href="`mailto:${profile.email}`"
                class="text-text-secondary underline-offset-4 transition-colors hover:text-brand-red hover:underline"
              >
                {{ profile.email }}
              </a>
            </li>
            <li v-if="profile.phone">
              <a
                :href="`tel:${normalizedPhone}`"
                class="text-text-secondary underline-offset-4 transition-colors hover:text-brand-red hover:underline"
              >
                {{ profile.phone }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TeamProfilePage } from '~/types/team'

const props = defineProps<{
  profile: TeamProfilePage
}>()

const hasContact = computed(() => Boolean(props.profile.email || props.profile.phone))

const normalizedPhone = computed(() =>
  props.profile.phone?.replace(/\s/g, '') ?? '',
)
</script>

<style scoped>
.prose-team :deep(p) {
  @apply mb-4 text-lg leading-relaxed last:mb-0;
}

.prose-team :deep(p + p) {
  @apply mt-0;
}
</style>
