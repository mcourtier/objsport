export interface PageHeroContent {
  tagline?: string
  eyebrow?: string
  titleBefore?: string
  titleHighlight?: string
  titleAfter?: string
  /** Full-width first headline line (stacked layout). */
  title?: string
  /** Second headline line, shown in brand red below `title`. */
  titleAccent?: string
  description?: string
  primaryCtaLabel?: string
  primaryCtaTo?: string
  secondaryCtaLabel?: string
  secondaryCtaTo?: string
  backgroundImage?: string
  backgroundImageAlt?: string
  showTagline?: boolean
  showEyebrow?: boolean
  showDescription?: boolean
  showCtas?: boolean
}
