export type SectionAccent = 'consulting' | 'coaching' | 'care'

export interface NavLink {
  label: string
  to: string
}

export interface SidebarNavLink extends NavLink {
  icon: string
}

export interface AudienceBlock {
  id: string
  title: string
  label: string
  accent: SectionAccent
  description: string
  to: string
  cta: string
}

export interface StubRouteMeta {
  title: string
  description?: string
}
