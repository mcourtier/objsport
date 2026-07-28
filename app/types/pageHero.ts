import type { PillarAccent } from './homepage'

/** String or MDC inline nodes from Nuxt Content component props. */
export type HighlightedTextProp = string | Record<string, unknown> | unknown[]

/** Hero highlight color. Defaults to brand red (`primary`). */
export type HeroAccent = 'primary' | PillarAccent

export interface PageHeroContent {
  tagline?: string
  /** Main title. Quote YAML when the text contains `:`. Use `<strong>` for accent highlights. */
  title?: HighlightedTextProp
  /** Second headline line, shown in accent color below `title`. */
  titleAccent?: HighlightedTextProp
  /** Hero body copy. Use `<strong>` for accent highlights. */
  description?: HighlightedTextProp
  backgroundImage?: string
  backgroundImageAlt?: string
  showTagline?: boolean
  showDescription?: boolean
  /** Highlight color for title accent, brush line, and `<strong>` marks. Default: `primary` (red). */
  accent?: HeroAccent
  /** Optional CTA label shown below the description. */
  ctaLabel?: string
  /** Target route for the optional CTA. */
  ctaTo?: string
}

export interface PageWithHero {
  title?: string
  description?: string
  hero?: PageHeroContent
}
