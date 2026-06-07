import type { AudienceBlock } from '~/types/navigation'

/** Homepage hero block fields from `content/index.md` (mapped to `PageHeroContent` in `HomeIntro`). */
export interface HomeHeroContent {
  tagline: string
  titleBefore: string
  titleHighlight: string
  titleAfter?: string
  description: string
  primaryCtaLabel: string
  primaryCtaTo: string
  secondaryCtaLabel: string
  secondaryCtaTo: string
}

export interface HomeFeaturesContent {
  heading: string
  headingHighlight: string
  intro: string
  blocks: AudienceBlock[]
}

export type PillarAccent = 'gym' | 'lab' | 'studio'

export interface HomePillar {
  name: string
  description: string
  accent: PillarAccent
}

export interface HomePillarsContent {
  pillars: HomePillar[]
}

export interface HomeTrustItem {
  label: string
}

export interface HomeContactPanelContent {
  heading: string
  website: string
  websiteUrl: string
  email: string
  phone?: string
  ctaLabel: string
  ctaTo: string
}

export interface HomeFeatureHighlightContent {
  title: string
  description: string
}

export interface HomeEztmPromoContent {
  title: string
  description: string
}

export interface HomeIntroContent {
  hero: HomeHeroContent
}

export interface HomeDashboardContent {
  features: HomeFeaturesContent
  pillars: HomePillarsContent & {
    heading: string
    intro: string
    trustItems: HomeTrustItem[]
  }
  highlight: HomeFeatureHighlightContent
  contact: HomeContactPanelContent
  promo: HomeEztmPromoContent
}
