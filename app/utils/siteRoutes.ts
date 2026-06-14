import type { StubRouteMeta } from '../types/navigation'

export const stubRoutes: Record<string, StubRouteMeta> = {
  '/entreprise/audit': {
    title: 'Audit',
    description: 'Évaluation de vos besoins en bien-être et performance.',
  },
  '/entreprise/formation': {
    title: 'Formation',
    description: 'Programmes de formation sur mesure pour vos équipes.',
  },
  '/entreprise/conception': {
    title: 'Conception',
    description: 'Conception de parcours et d’espaces dédiés au bien-être.',
  },
  '/club/monitoring': {
    title: 'Monitoring',
    description: 'Suivi et analyse de la performance des athlètes.',
  },
  '/club/evenementiel': {
    title: 'Événementiel',
    description: 'Organisation d’événements sportifs et corporate.',
  },
  '/club/staffing': {
    title: 'Staffing',
    description: 'Mise à disposition de professionnels qualifiés.',
  },
  '/audit': {
    title: 'Demande d’audit',
    description: 'Formulaire dédié aux demandes d’audit entreprise.',
  },
  '/mentions-legales': {
    title: 'Mentions légales',
  },
  '/cgu': {
    title: 'Conditions générales d’utilisation',
  },
}

export function resolveStubRoute(path: string): StubRouteMeta | undefined {
  const normalized =
    path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path
  return stubRoutes[normalized]
}
