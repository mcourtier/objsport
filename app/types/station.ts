import type { PageHeroContent } from './pageHero'

export interface Station {
  id: string
  name: string
  location: string
  description: string
  image: string
  imageAlt: string
  website: string
}

export interface StationsIntroFeature {
  title: string
  body: string
}

export interface StationsIntro {
  title: string
  titleAccent: string
  titleSuffix: string
  features: StationsIntroFeature[]
}

export interface StationsPageContent {
  title: string
  description: string
  hero: PageHeroContent
  intro: StationsIntro
  stations: Station[]
}
