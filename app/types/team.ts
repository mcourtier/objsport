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

export interface TeamProfilePage extends TeamProfile {
  id: string
  path: string
  body?: {
    type: string
    value: unknown[]
    toc?: { links: unknown[] }
  }
}
