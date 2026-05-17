import type { StubRouteMeta } from '~/types/navigation'

export const stubRoutes: Record<string, StubRouteMeta> = {
  '/entreprise': {
    title: 'Entreprise',
    description: 'Services B2B pour la performance et le bien-être en entreprise.',
  },
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
  '/club': {
    title: 'Club',
    description: 'Accompagnement des clubs sportifs sur site ou à domicile.',
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
  '/sportif': {
    title: 'Sportif',
    description: 'Coaching, espaces et programmes pour les athlètes.',
  },
  '/sportif/le-gym': {
    title: 'Le Gym',
    description: 'Espace d’entraînement et de préparation physique.',
  },
  '/sportif/le-lab': {
    title: 'Le Lab',
    description: 'Tests, analyses et optimisation de la performance.',
  },
  '/sportif/le-studio': {
    title: 'Le Studio',
    description: 'Cours collectifs et coaching en petit groupe.',
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
  '/politique-de-confidentialite': {
    title: 'Politique de confidentialité',
  },
  '/cookies': {
    title: 'Politique cookies',
  },
}

export function resolveStubRoute(path: string): StubRouteMeta | undefined {
  const normalized = path.endsWith('/') && path.length > 1
    ? path.slice(0, -1)
    : path
  return stubRoutes[normalized]
}
