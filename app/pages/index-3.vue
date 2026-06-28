<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <PageHero v-bind="hero" />

    <UCard
      v-for="(zone, index) in zones"
      :key="zone.accent"
      class="relative overflow-hidden bg-black"
      :aria-labelledby="`zone-${zone.accent}-heading`"
      data-reveal-section
    >
      <div
        class="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12"
      >
        <div :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'">
          <span
            class="font-display flex items-center gap-3 text-xs font-bold uppercase tracking-wide"
            :class="pillarTextClass(zone.accent)"
            data-reveal
          >
            <span class="text-2xl font-extrabold italic leading-none">
              {{ zone.index }}
            </span>
            <span
              class="h-px w-10"
              :class="pillarDividerClass(zone.accent)"
              aria-hidden="true"
            />
            {{ zone.subtitle }}
          </span>

          <h2
            :id="`zone-${zone.accent}-heading`"
            class="font-display mt-4 text-3xl font-extrabold uppercase italic md:text-4xl lg:text-5xl"
            :class="pillarTextClass(zone.accent)"
            data-reveal
          >
            {{ zone.name }}
          </h2>
          <p
            class="font-display mt-2 text-base font-semibold uppercase italic text-neutral-100 md:text-lg"
            data-reveal
          >
            {{ zone.headline }} — {{ zone.headlineAccent }}
          </p>
          <p
            class="mt-4 max-w-prose text-sm leading-relaxed text-neutral-300 md:text-base"
            data-reveal
          >
            {{ zone.description }}
          </p>

          <dl class="mt-6 space-y-3">
            <div
              v-for="section in zone.sectionGroups"
              :key="section.title"
              class="flex flex-col gap-1 border-t border-neutral-700 pt-3 sm:flex-row sm:gap-4"
              data-reveal
            >
              <dt
                class="font-display shrink-0 text-sm font-bold uppercase tracking-wide sm:w-40"
                :class="pillarTextClass(zone.accent)"
              >
                {{ section.title }}
              </dt>
              <dd class="text-sm leading-snug text-neutral-400">
                {{ section.items }}
              </dd>
            </div>
          </dl>

          <UButton
            :to="zone.to"
            size="xl"
            class="mt-7"
            trailing-icon="material-symbols:arrow-forward"
          >
            Explorer {{ zone.name }}
          </UButton>
        </div>

        <div
          :class="index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'"
          data-reveal
        >
          <div
            class="relative flex aspect-4/3 flex-col items-center justify-center overflow-hidden rounded-2xl ring-1"
            :class="softSurfaceClass[zone.accent]"
          >
            <span
              class="font-display absolute -bottom-6 right-2 text-[10rem] font-extrabold italic leading-none opacity-10"
              :class="pillarTextClass(zone.accent)"
              aria-hidden="true"
            >
              {{ zone.index }}
            </span>
            <span
              class="flex h-24 w-24 items-center justify-center rounded-full"
              :class="pillarIconCircleClass(zone.accent)"
              aria-hidden="true"
            >
              <Icon
                :name="headerIcon[zone.accent]"
                class="h-12 w-12"
              />
            </span>
            <span
              class="font-display relative mt-5 text-xl font-extrabold uppercase italic"
              :class="pillarTextClass(zone.accent)"
            >
              {{ zone.name }}
            </span>
          </div>
        </div>
      </div>
    </UCard>

    <CardMissionOutcomes />
  </div>
</template>

<script setup lang="ts">
import type { PageHeroContent } from '~/types/pageHero'
import type { PillarAccent } from '~/types/homepage'
import { sportifPageContent } from '~/data/sportifPage'
import { sportifPillarHeaderIcons } from '~/utils/sportifIcons'
import {
  pillarDividerClass,
  pillarIconCircleClass,
  pillarTextClass,
} from '~/utils/pillarTheme'

const zoneRoutes: Record<PillarAccent, string> = {
  gym: '/sportif/le-gym',
  lab: '/sportif/le-lab',
  studio: '/sportif/le-studio',
}

const softSurfaceClass: Record<PillarAccent, string> = {
  gym: 'bg-gym/10 ring-gym/40',
  lab: 'bg-lab/10 ring-lab/40',
  studio: 'bg-studio/10 ring-studio/40',
}

const headerIcon = sportifPillarHeaderIcons

const cleanLabel = (title: string) =>
  title.replace(/\s*\(.*?\)\s*/g, '').trim()

const zones = sportifPageContent.pillars.map((pillar, index) => ({
  ...pillar,
  index: String(index + 1).padStart(2, '0'),
  to: zoneRoutes[pillar.accent],
  sectionGroups: pillar.sections.map((section) => ({
    title: cleanLabel(section.title),
    items: section.items.map((item) => item.title).join(' · '),
  })),
}))

const hero: PageHeroContent = {
  title: 'L’écosystème <strong>performance</strong>',
  titleAccent: 'Gym · Lab · Studio',
  description:
    'Un parcours complet pour le sportif : <strong>coaching</strong> au Gym, <strong>soins & testing</strong> au Lab, <strong>cours & formations</strong> au Studio.',
}

useSeoMeta({
  title: 'Objectif Sport — Gym, Lab & Studio',
  description:
    'Découvrez l’écosystème Objectif Sport — Le Gym, Le Lab et Le Studio — un parcours complet au service de la performance du sportif.',
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
