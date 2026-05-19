export type ClubApproachIcon = 'context' | 'need' | 'mission'

export type ClubPricingIcon = 'half-day' | 'day' | 'week'

export interface ClubApproachItem {
  icon: ClubApproachIcon
  title: string
  description: string
}

export interface ClubHighlight {
  title: string
  description: string
}

export interface ClubPricingTier {
  icon: ClubPricingIcon
  label: string
  price: string
  model: string
  footnotes: string[]
}

export interface ClubApproachContent {
  title: string
  items: ClubApproachItem[]
  highlight: ClubHighlight
}

export interface ClubPageContent {
  title: string
  description: string
  headline: string
  headlineAccent: string
  tagline: string
  heroBackgroundImage?: string
  heroBackgroundImageAlt?: string
  approach: ClubApproachContent
  pricing: ClubPricingTier[]
  estimationTitle: string
}
