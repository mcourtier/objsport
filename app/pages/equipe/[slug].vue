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
        <div class="prose-team text-neutral-300">
          <p v-if="bioIntro" class="mb-4 text-lg leading-relaxed">
            {{ bioIntro }}
          </p>
          <ContentRenderer :value="profile" />
        </div>

        <div
          v-if="hasContact"
          class="border-neutral-700 mt-16 border-t pt-12"
        >
          <h2 class="font-display text-neutral-100 text-2xl font-bold">
            Contact
          </h2>
          <ul class="mt-6 space-y-4">
            <li v-if="profile.email">
              <a
                :href="`mailto:${profile.email}`"
                class="text-primary underline-offset-4 transition-colors hover:underline"
              >
                {{ profile.email }}
              </a>
            </li>
            <li v-if="profile.phone">
              <a
                :href="`tel:${normalizedPhone}`"
                class="text-primary underline-offset-4 transition-colors hover:underline"
              >
                {{ profile.phone }}
              </a>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <NuxtLink
            to="/equipe"
            class="text-primary inline-flex items-center gap-2 underline-offset-4 transition-colors hover:underline"
          >
            ← Retour à l'équipe
          </NuxtLink>
        </div>
      </div>
    </article>

    <div v-else class="py-16 md:py-24">
      <div class="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <p class="text-neutral-400">Profil non trouvé.</p>
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
    const doc = (await queryCollection('team')
      .where('slug', '=', slug.value)
      .first()) as TeamProfilePage | null
    return doc
  },
)

const bioIntro = computed(
  () => profile.value?.excerpt ?? profile.value?.description,
)

const hasContact = computed(() =>
  Boolean(profile.value?.email || profile.value?.phone),
)

const normalizedPhone = computed(
  () => profile.value?.phone?.replace(/\s/g, '') ?? '',
)

useSeoMeta({
  title: () => profile.value?.title || profile.value?.name || 'Équipe',
  description: () => profile.value?.description,
  ogImage: () => profile.value?.photo,
})
</script>

<style scoped>
.prose-team :deep(p) {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.625;
}

.prose-team :deep(p:last-child) {
  margin-bottom: 0;
}

.prose-team :deep(p + p) {
  margin-top: 0;
}

.prose-team :deep(strong) {
  font-weight: 600;
  color: var(--color-neutral-100);
}

.prose-team :deep(ul),
.prose-team :deep(ol) {
  margin-block: 1rem;
  margin-left: 1rem;
}

.prose-team :deep(ul) {
  list-style-type: disc;
}

.prose-team :deep(li + li) {
  margin-top: 0.5rem;
}
</style>
