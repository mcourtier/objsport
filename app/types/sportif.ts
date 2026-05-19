import type { PillarAccent } from '~/types/homepage'

export type SportifServiceIcon =
  | 'run'
  | 'stopwatch'
  | 'recovery'
  | 'rehab'
  | 'sprint'
  | 'hiit'
  | 'massage'
  | 'stretch'
  | 'therapy'
  | 'aesthetic'
  | 'weights'
  | 'posture'
  | 'brain'
  | 'body'
  | 'pilates'
  | 'yoga'
  | 'movement'
  | 'target'
  | 'burst'
  | 'warmup'
  | 'reach'
  | 'shield'
  | 'rest'
  | 'concussion'

export interface SportifService {
  title: string
  description: string
  icon: SportifServiceIcon
}

export interface SportifServiceSection {
  title: string
  items: SportifService[]
}

export interface SportifPillar {
  accent: PillarAccent
  name: string
  subtitle: string
  headerIcon: PillarAccent
  sections: SportifServiceSection[]
  imageSrc: string
  imageAlt: string
}

export interface SportifBenefit {
  title: string
  description: string
  icon: 'expertise' | 'coaching' | 'performance' | 'availability'
}

export interface SportifPageContent {
  title: string
  description: string
  headline: string
  headlineAccent: string
  heroBackgroundImage?: string
  heroBackgroundImageAlt?: string
  pillars: SportifPillar[]
  benefits: SportifBenefit[]
}
