export interface NavLink {
  label: string
  to: string
}

export interface AudienceBlock {
  id: string
  title: string
  description: string
  to: string
  cta: string
}

export interface StubRouteMeta {
  title: string
  description?: string
}
