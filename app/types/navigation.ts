import type { PillarAccent } from './homepage'

export interface NavLink {
  label: string
  to: string
  /** Optional pillar accent for Sportif subnav active color. */
  accent?: PillarAccent
}

export interface SidebarNavLink extends NavLink {
  icon: string
  children?: NavLink[]
}

export interface AudienceBlock {
  id: string
  title: string
  icon: string
  description: string
  to: string
  cta: string
}

export interface StubRouteMeta {
  title: string
  description?: string
}
