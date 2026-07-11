export type PillarAccent = 'gym' | 'lab' | 'studio'

export interface HomeContactPanelContent {
  heading: string
  email: string
  phone?: string
  ctaLabel: string
  ctaTo: string
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

export interface HomeDashboardContent {
  contact: HomeContactPanelContent
  promo: HomeEztmPromoContent
}
