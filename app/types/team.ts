export interface TeamProfile {
  name: string
  slug: string
  role: string
  photo: string
  email?: string
  phone?: string
  order?: number
  excerpt?: string
  title?: string
  description?: string
}

export type EquipeValueIcon =
  | 'professionals'
  | 'adaptability'
  | 'versatility'
  | 'teamwork'
  | 'results'

export type EquipeValueIconAccent = 'primary' | 'light'

export interface EquipeValue {
  title: string
  description: string
  icon: EquipeValueIcon
  iconAccent: EquipeValueIconAccent
}

export interface InterventionStep {
  title: string
  description: string
  icon: string
}

export interface EquipeCoreValue {
  title: string
  description: string
  icon: string
}

export interface TeamProfilePage extends TeamProfile {
  id: string
  path: string
  body?: {
    type: string
    value: unknown[]
    toc?: { links: unknown[] }
  }
}
