export type PillarAccent = 'gym' | 'lab' | 'studio'

/** Contact card: coordinates, plus an optional call-to-action button. */
export interface ContactPanelContent {
  heading: string
  email?: string
  phone?: string
  ctaLabel?: string
  ctaTo?: string
}
