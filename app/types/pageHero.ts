/** String or MDC inline nodes from Nuxt Content component props. */
export type HighlightedTextProp = string | Record<string, unknown> | unknown[]

export interface PageHeroContent {
  tagline?: string
  /** Main title. Quote YAML when the text contains `:`. Use `<strong>` for red highlights. */
  title?: HighlightedTextProp
  /** Second headline line, shown in primary red below `title`. */
  titleAccent?: HighlightedTextProp
  description?: string
  primaryCtaLabel?: string
  primaryCtaTo?: string
  secondaryCtaLabel?: string
  secondaryCtaTo?: string
  backgroundImage?: string
  backgroundImageAlt?: string
  showTagline?: boolean
  showDescription?: boolean
  showCtas?: boolean
}
