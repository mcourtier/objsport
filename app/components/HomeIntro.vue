<template>
  <CardHero v-bind="heroProps" />
</template>

<script setup lang="ts">
import type { HomeHeroContent } from '~/types/homepage'
import type { PageHeroContent } from '~/types/pageHero'

const props = defineProps<{
  hero: HomeHeroContent & {
    title?: PageHeroContent['title']
    titleBefore?: string
    titleHighlight?: string
  }
}>()

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
