export type PillarAccent = 'gym' | 'lab' | 'studio'

export interface HomeContactPanelContent {
  heading: string
  email: string
  phone?: string
  ctaLabel: string
  ctaTo: string
}

export interface HomeMissionContent {
  titleLines: string[]
  titleAccent: string
  paragraphs: string[]
}
