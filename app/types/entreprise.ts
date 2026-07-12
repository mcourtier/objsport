import type { PageHeroContent } from './pageHero'
import type { SectionAccent } from '~/types/navigation'

export interface EntrepriseCategory {
  label: string
  accent: SectionAccent
  icon: string
  title: string
  description: string
  to: string
}

export type EntrepriseServiceIcon = 'audit' | 'programs' | 'conception'

export interface EntrepriseService {
  title: string
  icon: EntrepriseServiceIcon
  subtitle: string
  description: string
}

export type EntrepriseBenefitIcon =
  | 'health'
  | 'performance'
  | 'tms'
  | 'productivity'
  | 'teams'

export interface EntrepriseBenefit {
  title: string
  icon: EntrepriseBenefitIcon
}

export type EntrepriseReasonIcon =
  | 'expertise'
  | 'methodology'
  | 'flexibility'
  | 'results'

export interface EntrepriseReason {
  title: string
  description: string
  icon: EntrepriseReasonIcon
}

export interface EntreprisePageContent {
  title: string
  description: string
  hero: PageHeroContent
  categories: EntrepriseCategory[]
  servicesSubheading: string
  services: EntrepriseService[]
  benefits: EntrepriseBenefit[]
  reasonsTitle: string
  reasonsTitleHighlight: string
  reasons: EntrepriseReason[]
}
