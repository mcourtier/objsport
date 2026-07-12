<template>
  <!-- CardEztm -->
  <Card class="card-eztm" :ui="cardCtaUi">
    <template #title>
      <AppTitle>Application EZTM</AppTitle>
    </template>

    <div class="relative flex items-start gap-5">
      <div
        class="relative flex w-24 shrink-0 items-center justify-center"
        data-reveal
      >
        <img
          src="/images/logo-eztm.png"
          alt="EZTM — Easyteam Cockpit Santé de Performance"
          class="eztm-logo relative z-10 h-20 w-20 object-contain"
          width="80"
          height="80"
        />
      </div>

      <div class="min-w-0 flex-1">
        <h2
          class="font-display text-sm font-bold tracking-[0.12em] text-neutral-100 uppercase"
          data-reveal
        >
          {{ title }}
        </h2>

        <p class="mt-2 text-sm leading-relaxed text-neutral-400" data-reveal>
          {{ description }}
        </p>
      </div>
    </div>

    <UModal v-model:open="downloadOpen" :ui="downloadModalUi">
      <template #content>
        <div class="eztm-download-modal">
          <UButton
            icon="material-symbols:close"
            color="neutral"
            variant="ghost"
            class="eztm-download-modal__close"
            aria-label="Fermer"
            @click="closeDownload"
          />

          <div class="eztm-download-modal__body">
            <div class="flex items-start gap-4">
              <img
                src="/images/logo-eztm.png"
                alt=""
                class="h-12 w-12 shrink-0 object-contain"
                width="48"
                height="48"
              />

              <div class="min-w-0 flex-1 pe-8">
                <AppTitle id="eztm-download-heading">Télécharger EZTM</AppTitle>
                <p class="text-sm text-neutral-400">
                  Choisissez l'application adaptée à votre usage.
                </p>
              </div>
            </div>

            <div class="eztm-download-grid mt-6">
              <section
                v-for="section in downloadSections"
                :key="section.id"
                class="eztm-download-block"
              >
                <h3
                  class="font-display text-sm font-bold tracking-[0.12em] text-neutral-100 uppercase"
                >
                  {{ section.title }}
                </h3>

                <p class="mt-1 text-sm text-neutral-400">
                  {{ section.description }}
                </p>

                <div class="mt-4" :class="section.linksClass">
                  <a
                    v-for="link in section.links"
                    :key="`${section.id}-${link.alt}`"
                    :href="link.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="eztm-badge-link"
                    :class="{ 'eztm-badge-link--labeled': link.platform }"
                  >
                    <span class="eztm-badge-link__frame">
                      <img
                        :src="link.badge"
                        :alt="link.alt"
                        class="eztm-badge-link__image"
                      />
                    </span>
                    <small v-if="link.platform" class="eztm-badge-link__label">
                      {{ link.platform }}
                    </small>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </template>
    </UModal>

    <template #footer>
      <div class="flex justify-center">
        <UButton size="xl" data-reveal @click="openDownload">
          Télécharger
        </UButton>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()

const cardCtaUi = {
  body: 'p-5 pb-0 md:px-6 md:pt-6 md:pb-0 flex-1',
}

const downloadOpen = ref(false)

function openDownload() {
  downloadOpen.value = true
}

function closeDownload() {
  downloadOpen.value = false
}

const downloadModalUi = {
  content:
    'card-surface max-w-4xl w-[calc(100vw-2rem)] divide-y-0 overflow-hidden ring-0',
  overlay: 'bg-black/75 backdrop-blur-sm',
}

const storeBadges = {
  appStore: '/images/eztm/bouton_appstore.svg',
  macAppStore: '/images/eztm/bouton_mac_appstore.svg',
  googlePlay: '/images/eztm/bouton_googleplay.png',
  windows: '/images/eztm/bouton_windows.svg',
} as const

interface DownloadLink {
  href: string
  alt: string
  badge: string
  platform?: string
}

interface DownloadSection {
  id: string
  title: string
  description: string
  linksClass: string
  links: DownloadLink[]
}

const downloadSections: DownloadSection[] = [
  {
    id: 'mobile',
    title: 'Application mobile EZTM',
    description: 'Pour les joueurs et les usages mobiles.',
    linksClass: 'flex flex-wrap gap-3',
    links: [
      {
        href: 'https://apps.apple.com/fr/app/eztm/id1599062296',
        badge: storeBadges.appStore,
        alt: "Télécharger pour iOS dans l'App Store",
      },
      {
        href: 'https://play.google.com/store/apps/details?id=infojv.target',
        badge: storeBadges.googlePlay,
        alt: 'Télécharger pour Android sur Google Play',
      },
    ],
  },
  {
    id: 'platform',
    title: 'Plateforme EZTM',
    description: 'Pour piloter les données, le staff et les workflows terrain.',
    linksClass: 'grid grid-cols-2 gap-3',
    links: [
      {
        href: 'https://apps.apple.com/fr/app/eztm/id1575903950',
        badge: storeBadges.appStore,
        alt: "Télécharger pour iOS dans l'App Store",
        platform: 'iOS',
      },
      {
        href: 'https://apps.apple.com/fr/app/eztm/id1575903950',
        badge: storeBadges.macAppStore,
        alt: "Télécharger pour macOS dans l'App Store",
        platform: 'macOS',
      },
      {
        href: 'https://play.google.com/store/apps/details?id=com.eztm.infojv.easyteam',
        badge: storeBadges.googlePlay,
        alt: 'Télécharger pour Android sur Google Play',
        platform: 'Android',
      },
      {
        href: 'https://www.infojv.fr/eztm/EZTM.zip',
        badge: storeBadges.windows,
        alt: 'Télécharger pour Windows',
        platform: 'Windows',
      },
    ],
  },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-eztm {
  @apply flex h-full flex-col;
}

.eztm-logo {
  filter: drop-shadow(
    0 0 12px color-mix(in srgb, var(--eztm-yellow) 45%, transparent)
  );
}

.eztm-download-modal {
  @apply relative;
}

.eztm-download-modal__close {
  @apply absolute end-4 top-4 z-10;
}

.eztm-download-modal__body {
  @apply p-5 md:p-6;
}

.eztm-download-grid {
  @apply flex flex-col gap-6 md:flex-row;
}

.eztm-download-block {
  @apply min-w-0 flex-1;
}

.eztm-download-block + .eztm-download-block {
  @apply border-t border-neutral-700 pt-6 md:border-t-0 md:border-l md:ps-6 md:pt-0;
}

.eztm-badge-link {
  @apply inline-block;
}

.eztm-badge-link--labeled {
  @apply flex flex-col items-center gap-1;
}

.eztm-badge-link__frame {
  @apply flex h-10 items-center;
}

.eztm-badge-link__image {
  @apply block h-full w-auto object-contain;
}

.eztm-badge-link__label {
  @apply font-display text-[10px] font-bold tracking-[0.14em] text-neutral-400 uppercase;
}
</style>
