<template>
  <!-- CardEztm -->
  <Card class="card-eztm" :ui="cardCtaUi">
    <template #title>
      <AppTitle>Application EZTM</AppTitle>
    </template>

    <div class="eztm-layout">
      <div class="eztm-layout__content">
        <div class="eztm-platform">
          <p class="eztm-platform__title">
            Une plateforme
            <br />
            4 expériences, une même interface.
          </p>

          <div
            class="eztm-platform__list"
            role="tablist"
            aria-label="Fonctionnalités de l'application EZTM"
          >
            <button
              v-for="(slide, index) in slides"
              :id="`eztm-tab-${index}`"
              :key="slide.label"
              type="button"
              role="tab"
              class="eztm-platform__item"
              :class="{ 'eztm-platform__item--active': activeIndex === index }"
              :aria-selected="activeIndex === index"
              :aria-controls="`eztm-panel-${index}`"
              :tabindex="activeIndex === index ? 0 : -1"
              @click="setActive(index)"
              @keydown="onTabKeydown($event, index)"
            >
              {{ slide.label }}
            </button>
          </div>
        </div>

        <UButton
          to="https://eztm.fr/"
          target="_blank"
          external
          size="xl"
          class="eztm-cta eztm-cta--desktop"
        >
          Voir le site
        </UButton>
      </div>

      <div class="eztm-layout__media">
        <p class="eztm-carousel__label" aria-live="polite">
          {{ slides[activeIndex]!.label }}
        </p>

        <div class="eztm-carousel">
          <button
            type="button"
            class="eztm-carousel__nav"
            aria-label="Slide précédent"
            @click="goPrev"
          >
            <Icon name="material-symbols:chevron-left" class="h-8 w-8" />
          </button>

          <div
            ref="mediaRef"
            class="eztm-slideshow"
            role="tabpanel"
            :id="`eztm-panel-${activeIndex}`"
            :aria-labelledby="`eztm-tab-${activeIndex}`"
          >
            <img
              v-for="(slide, index) in slides"
              :key="slide.src"
              :src="slide.src"
              :alt="slide.alt"
              class="eztm-phone"
              :class="{ 'eztm-phone--active': activeIndex === index }"
              width="192"
              height="395"
              :aria-hidden="activeIndex !== index"
            />
          </div>

          <button
            type="button"
            class="eztm-carousel__nav"
            aria-label="Slide suivant"
            @click="goNext"
          >
            <Icon name="material-symbols:chevron-right" class="h-8 w-8" />
          </button>
        </div>

        <UButton
          to="https://eztm.fr/"
          target="_blank"
          external
          size="xl"
          class="eztm-cta eztm-cta--mobile"
        >
          Voir le site
        </UButton>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ANIMATION, prefersReducedMotion } from '~/utils/animation'

defineProps<{
  title: string
  description: string
}>()

const slides = [
  {
    label: 'Interface intuitive et personnalisable',
    src: '/images/eztm/iphone-sessions.png',
    alt: "Écran Mes sessions de l'application EZTM",
  },
  {
    label: 'Communication simplifiée avec les professionnels',
    src: '/images/eztm/iphone-journee.png',
    alt: "Écran Ma journée de l'application EZTM",
  },
  {
    label: 'Coordination fluide des interventions',
    src: '/images/eztm/iphone-workout.png',
    alt: "Écran Workout PREHAB de l'application EZTM",
  },
  {
    label: 'Suivi en temps réel des objectifs et résultats',
    src: '/images/eztm/iphone-evaluer.png',
    alt: "Écran Évaluer le workout de l'application EZTM",
  },
  {
    label: 'Accès sécurisé à vos données',
    src: '/images/eztm/iphone-exercice.png',
    alt: "Écran détail d'exercice de l'application EZTM",
  },
] as const

const activeIndex = ref(0)
const mediaRef = ref<HTMLElement | null>(null)
let gsapCtx: gsap.Context | null = null

const cardCtaUi = {
  body: 'p-5 md:p-6 flex-1',
}

function setActive(index: number) {
  if (index === activeIndex.value) return
  activeIndex.value = index
}

function goPrev() {
  const last = slides.length - 1
  setActive(activeIndex.value === 0 ? last : activeIndex.value - 1)
}

function goNext() {
  const last = slides.length - 1
  setActive(activeIndex.value === last ? 0 : activeIndex.value + 1)
}

function onTabKeydown(event: KeyboardEvent, index: number) {
  const last = slides.length - 1
  let next = index

  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    next = index === last ? 0 : index + 1
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    next = index === 0 ? last : index - 1
  } else if (event.key === 'Home') {
    next = 0
  } else if (event.key === 'End') {
    next = last
  } else {
    return
  }

  event.preventDefault()
  setActive(next)
  document.getElementById(`eztm-tab-${next}`)?.focus()
}

function slideDirection(from: number, to: number) {
  const last = slides.length - 1
  if (from === last && to === 0) return 1
  if (from === 0 && to === last) return -1
  return to > from ? 1 : -1
}

watch(activeIndex, (next, prev) => {
  if (!mediaRef.value) return

  const phones = mediaRef.value.querySelectorAll<HTMLElement>('.eztm-phone')
  const outgoing = phones[prev]
  const incoming = phones[next]
  if (!outgoing || !incoming) return

  if (prefersReducedMotion()) {
    gsap.set(phones, { xPercent: 0, opacity: 0, zIndex: 0, force3D: true })
    gsap.set(incoming, { opacity: 1, zIndex: 1, force3D: true })
    return
  }

  const dir = slideDirection(prev, next)

  gsapCtx?.add(() => {
    gsap.killTweensOf(phones)
    gsap.set(incoming, {
      xPercent: 100 * dir,
      opacity: 1,
      zIndex: 2,
      force3D: true,
    })
    gsap.set(outgoing, { zIndex: 1, force3D: true })
    gsap.to(outgoing, {
      xPercent: -100 * dir,
      duration: ANIMATION.duration.micro,
      ease: ANIMATION.ease.exit,
      force3D: true,
      onComplete: () => {
        gsap.set(outgoing, { xPercent: 0, opacity: 0, zIndex: 0, force3D: true })
      },
    })
    gsap.to(incoming, {
      xPercent: 0,
      duration: ANIMATION.duration.micro,
      ease: ANIMATION.ease.default,
      force3D: true,
    })
  })
})

onMounted(() => {
  if (!mediaRef.value) return

  gsapCtx = gsap.context(() => {
    const phones = mediaRef.value!.querySelectorAll<HTMLElement>('.eztm-phone')
    gsap.set(phones, { xPercent: 0, opacity: 0, zIndex: 0, force3D: true })
    gsap.set(phones[0]!, { opacity: 1, zIndex: 1, force3D: true })
  }, mediaRef.value)
})

onUnmounted(() => {
  gsapCtx?.revert()
  gsapCtx = null
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-eztm {
  @apply flex h-full flex-col;
}

.eztm-layout {
  @apply flex flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-8;
}

.eztm-layout__content {
  @apply flex min-w-0 w-full flex-col items-start gap-6 self-stretch md:w-1/2;
}

.eztm-layout__media {
  @apply flex w-full flex-col items-center gap-4 md:w-1/2 md:gap-0;
}

.eztm-cta--desktop {
  @apply hidden shrink-0 md:inline-flex;
}

.eztm-cta--mobile {
  @apply mt-2 shrink-0 md:hidden;
}

.eztm-carousel__label {
  @apply line-clamp-2 min-h-[2.75em] w-full max-w-sm text-center text-sm leading-snug text-neutral-100 md:hidden;
}

.eztm-carousel {
  @apply flex w-full items-center justify-center gap-2 md:gap-0;
}

.eztm-carousel__nav {
  @apply flex shrink-0 items-center justify-center rounded-full text-primary transition-colors duration-200 md:hidden;
}

.eztm-carousel__nav:hover {
  @apply text-neutral-100;
}

.eztm-carousel__nav:focus-visible {
  @apply outline-none ring-2 ring-primary ring-offset-2 ring-offset-neutral-950;
}

.eztm-slideshow {
  @apply relative w-full max-w-[160px] overflow-hidden md:max-w-[200px];
  aspect-ratio: 192 / 395;
}

.eztm-phone {
  @apply pointer-events-none absolute inset-0 h-full w-full object-contain;
  opacity: 0;
}

.eztm-phone--active {
  opacity: 1;
}

.eztm-platform {
  @apply relative flex min-w-0 flex-col gap-5 overflow-hidden;
}

.eztm-platform__title {
  @apply text-center font-display text-base leading-snug font-extrabold tracking-wide text-white uppercase sm:text-lg md:text-left;
}

.eztm-platform__list {
  @apply hidden flex-col gap-1.5 md:flex;
}

.eztm-platform__item {
  @apply w-fit max-w-full cursor-pointer rounded-xl border border-transparent px-2.5 py-2 text-left text-sm leading-snug text-neutral-400 transition-[color,background-color,border-color] duration-200;
}

.eztm-platform__item:hover {
  @apply text-neutral-100;
}

.eztm-platform__item:focus-visible {
  @apply border-primary outline-none;
}

.eztm-platform__item--active {
  @apply border-primary/40 bg-primary/10 text-neutral-100;
}
</style>
