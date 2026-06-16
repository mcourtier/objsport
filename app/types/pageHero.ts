/** String or MDC inline nodes from Nuxt Content component props. */
export type HighlightedTextProp = string | Record<string, unknown> | unknown[]

export interface PageHeroContent {
  tagline?: string
  /** Main title. Quote YAML when the text contains `:`. Use `<strong>` for red highlights. */
  title?: HighlightedTextProp
  /** Second headline line, shown in primary red below `title`. */
  titleAccent?: HighlightedTextProp
  /** Hero body copy. Use `<strong>` for red highlights. */
  description?: HighlightedTextProp
  backgroundImage?: string
  backgroundImageAlt?: string
  showTagline?: boolean
  showDescription?: boolean
}

export interface PageWithHero {
  title?: string
  description?: string
  hero?: PageHeroContent
}
