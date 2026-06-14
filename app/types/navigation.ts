export type SectionAccent = 'consulting' | 'coaching' | 'care'

export interface NavLink {
  label: string
  to: string
}

export interface SidebarNavLink extends NavLink {
  icon: string
  children?: NavLink[]
}

export interface SiteNavigationContent {
  tagline: string
  sidebar: SidebarNavLink[]
  footerLegal: NavLink[]
}

export interface AudienceBlock {
  id: string
  title: string
  label: string
  accent: SectionAccent
  icon: string
  description: string
  to: string
  cta: string
}

export interface StubRouteMeta {
  title: string
  description?: string
}
