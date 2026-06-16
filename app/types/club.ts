import type { PageHeroContent } from './pageHero'

export type ClubApproachIcon = 'context' | 'need' | 'mission'

export type ClubObjectifPillarIcon = 'availability' | 'discretion' | 'rigor'

export interface ClubObjectifPillar {
  icon: ClubObjectifPillarIcon
  label: string
}

export interface ClubObjectifsContent {
  intro: string
  goal: string
  pillars: ClubObjectifPillar[]
  tagline: string
}

export interface ClubApproachItem {
  icon: ClubApproachIcon
  title: string
  description: string
}

export interface ClubHighlight {
  title: string
  description: string
}

export interface ClubApproachContent {
  title: string
  items: ClubApproachItem[]
  highlight: ClubHighlight
}

export interface ClubPageContent {
  title: string
  description: string
  hero: PageHeroContent
  approach: ClubApproachContent
  objectifs: ClubObjectifsContent
}
