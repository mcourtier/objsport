<template>
  <div>
    <PageHero
      :title="profile?.name"
      :description="profile?.role"
      :background-image="profile?.photo"
      :background-image-alt="`Portrait de ${profile?.name}`"
    />

    <article v-if="profile" class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div class="prose-team text-text-secondary">
          <p
            v-if="bioIntro"
            class="mb-4 text-lg leading-relaxed"
          >
            {{ bioIntro }}
          </p>
          <ContentRenderer :value="profile" />
        </div>

        <div v-if="hasContact" class="mt-16 border-t border-border-subtle pt-12">
          <h2 class="font-display text-2xl font-bold text-text-primary">
            Contact
          </h2>
          <ul class="mt-6 space-y-4">
            <li v-if="profile.email">
              <a
                :href="`mailto:${profile.email}`"
                class="text-brand-red underline-offset-4 transition-colors hover:underline"
              >
                {{ profile.email }}
              </a>
            </li>
            <li v-if="profile.phone">
              <a
                :href="`tel:${normalizedPhone}`"
                class="text-brand-red underline-offset-4 transition-colors hover:underline"
              >
                {{ profile.phone }}
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <NuxtLink
            to="/equipe"
            class="inline-flex items-center gap-2 text-brand-red underline-offset-4 transition-colors hover:underline"
          >
            ← Retour à l'équipe
          </NuxtLink>
        </div>
      </div>
    </article>

    <div v-else class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <p class="text-text-muted">Profil non trouvé.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamProfilePage } from '~/types/team'

const route = useRoute()

const slug = computed(() => route.params.slug as string)

const { data: profile } = await useAsyncData(
  () => `team-profile-${slug.value}`,
  async () => {
    const doc = await queryCollection('team')
      .where('slug', '==', slug.value)
      .first() as TeamProfilePage | null
    return doc
  },
)

const bioIntro = computed(() => profile.value?.excerpt ?? profile.value?.description)

const hasContact = computed(() => Boolean(profile.value?.email || profile.value?.phone))

const normalizedPhone = computed(() =>
  profile.value?.phone?.replace(/\s/g, '') ?? '',
)

useSeoMeta({
  title: () => profile.value?.title || profile.value?.name || 'Équipe',
  description: () => profile.value?.description,
  ogImage: () => profile.value?.photo,
})
</script>

<style scoped>
.prose-team :deep(p) {
  @apply mb-4 text-lg leading-relaxed last:mb-0;
}

.prose-team :deep(p + p) {
  @apply mt-0;
}

.prose-team :deep(strong) {
  @apply font-semibold text-text-primary;
}

.prose-team :deep(ul),
.prose-team :deep(ol) {
  @apply my-4 ml-4 space-y-2;
}

.prose-team :deep(li) {
  @apply list-disc;
}
</style>
