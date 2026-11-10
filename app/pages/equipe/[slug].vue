<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero
      :title="profile?.name"
      :description="profile?.role"
      :background-image="profile?.photo"
      :background-image-alt="`Portrait de ${profile?.name}`"
      background-position="50% 20%"
      cta-label="Prendre RDV"
      :cta-to="rdvTo"
    />

    <template v-if="profile">
      <div class="grid gap-4 lg:grid-cols-3 lg:items-start lg:gap-5">
        <Card
          as="article"
          :class="hasContact ? 'lg:col-span-2' : 'lg:col-span-3'"
        >
          <div class="prose-team text-neutral-300">
            <p
              v-if="bioIntro"
              class="mb-4 text-lg leading-relaxed"
            >
              {{ bioIntro }}
            </p>
            <div>
              <p
                v-for="(paragraph, index) in biographyParagraphs"
                :key="index"
                class="text-lg leading-relaxed"
              >
                <template
                  v-for="(part, partIndex) in parseInlineMarkdown(paragraph)"
                  :key="partIndex"
                >
                  <strong v-if="part.bold">{{ part.text }}</strong>
                  <template v-else>{{ part.text }}</template>
                </template>
              </p>
            </div>
          </div>
        </Card>

        <CardContact
          v-if="hasContact"
          heading="Contact"
          :email="profile.email"
          :phone="profile.phone"
        />
      </div>

      <div data-animate>
        <NuxtLink
          to="/equipe"
          class="text-primary-500 inline-flex items-center gap-2 underline-offset-4 transition-colors hover:underline"
        >
          ← Retour à l'équipe
        </NuxtLink>
      </div>
    </template>

    <Card v-else>
      <p class="text-neutral-400">Profil non trouvé.</p>
    </Card>
  </div>
</template>

<script setup lang="ts">
import {
  parseInlineMarkdown,
  splitMarkdownParagraphs,
} from '~/utils/simpleMarkdown'

const route = useRoute()

const slug = computed(() => route.params.slug as string)

const rdvTo = computed(() => `/rdv?membre=${slug.value}`)

const { data: profile } = await useTeamProfile(slug)

const bioIntro = computed(
  () => profile.value?.excerpt ?? profile.value?.description,
)

const biographyParagraphs = computed(() =>
  splitMarkdownParagraphs(profile.value?.biography ?? ''),
)

const hasContact = computed(() =>
  Boolean(profile.value?.email || profile.value?.phone),
)

useSeoMeta({
  title: () => profile.value?.title || profile.value?.name || 'Équipe',
  description: () => profile.value?.description,
  ogImage: () => profile.value?.photo,
})

const root = ref<HTMLElement | null>(null)
usePageAnimations(root)
</script>

<style scoped>
.prose-team :deep(p) {
  margin-bottom: 1rem;
}

.prose-team :deep(p:last-child) {
  margin-bottom: 0;
}

.prose-team :deep(strong) {
  font-weight: 600;
  color: var(--color-neutral-100);
}
</style>
