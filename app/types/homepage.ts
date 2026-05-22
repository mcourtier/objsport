import type { AudienceBlock } from '~/types/navigation'
import type { PageHeroContent } from '~/types/pageHero'

/** @deprecated Use `PageHeroContent` — kept for content block typings. */
export type HomeHeroContent = Required<
  Pick<
    PageHeroContent,
    | 'tagline'
    | 'eyebrow'
    | 'titleBefore'
    | 'titleHighlight'
    | 'description'
    | 'primaryCtaLabel'
    | 'primaryCtaTo'
    | 'secondaryCtaLabel'
    | 'secondaryCtaTo'
  >
> &
  Pick<PageHeroContent, 'titleAfter'>

export interface HomeAudienceGridContent {
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

export interface HomeEztmContent {
  eyebrow: string
  titleBefore: string
  titleHighlight: string
  titleAfter: string
  description: string
  appStoreLabel: string
  playStoreLabel: string
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

export interface HomeDashboardContent {
  hero: HomeHeroContent
  audience: HomeAudienceGridContent
  pillars: HomePillarsContent & { heading: string, intro: string, trustItems: HomeTrustItem[] }
  eztm: HomeEztmContent
  highlight: HomeFeatureHighlightContent
  contact: HomeContactPanelContent
  promo: HomeEztmPromoContent
}
