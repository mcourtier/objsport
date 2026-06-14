<template>
  <div ref="root" class="flex flex-col gap-4 lg:gap-5">
    <CardHero v-bind="heroProps" />
    <CardMission v-bind="mission" />
    <CardMissionOutcomes />
  </div>
</template>

<script setup lang="ts">
import type { HomeIntroContent } from '~/types/homepage'
import type { PageHeroContent } from '~/types/pageHero'

const props = defineProps<
  HomeIntroContent & {
    hero: HomeIntroContent['hero'] & {
      title?: PageHeroContent['title']
      titleBefore?: string
      titleHighlight?: string
    }
  }
>()

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)

const heroProps = computed((): PageHeroContent => {
  const { hero } = props

  if (hero.title != null && hero.title !== '') {
    return hero
  }

  const { titleBefore = '', titleHighlight = '' } = hero
  const title = titleHighlight
    ? `${titleBefore} <strong>${titleHighlight}</strong>`
    : titleBefore

  return { ...hero, title }
})
</script>
