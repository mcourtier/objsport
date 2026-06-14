/** Homepage hero block fields (mapped to `PageHeroContent` in `pages/index.vue`). */
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

export type PillarAccent = 'gym' | 'lab' | 'studio'

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

export interface HomeMissionContent {
  titleLines: string[]
  titleAccent: string
  paragraphs: string[]
}

export interface HomeIntroContent {
  hero: HomeHeroContent
  mission: HomeMissionContent
}

export interface HomeDashboardContent {
  highlight: HomeFeatureHighlightContent
  contact: HomeContactPanelContent
  promo: HomeEztmPromoContent
}
