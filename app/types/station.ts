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

export interface StationsPageContent {
  title: string
  description: string
  hero: PageHeroContent
  stations: Station[]
}
