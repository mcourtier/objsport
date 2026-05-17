import type { AudienceBlock } from '~/types/navigation'

export interface HomeHeroContent {
  eyebrow: string
  titleBefore: string
  titleHighlight: string
  description: string
  primaryCtaLabel: string
  primaryCtaTo: string
  secondaryCtaLabel: string
  secondaryCtaTo: string
}

export interface HomeAudienceGridContent {
  heading: string
  headingHighlight: string
  intro: string
  blocks: AudienceBlock[]
}

export interface HomePillar {
  name: string
  description: string
}

export interface HomePillarsContent {
  pillars: HomePillar[]
}

export interface HomeEztmContent {
  eyebrow: string
  titleBefore: string
  titleHighlight: string
  description: string
  appStoreLabel: string
  playStoreLabel: string
}
