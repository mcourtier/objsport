import type { ClubPageContent } from '~/types/club'

export const clubPageContent: ClubPageContent = {
  title: 'Club',
  description:
    'Des pros de terrain au service des clubs — renfort logistique et opérationnel, expertise RH et contrôle digital en temps réel.',
  headline: 'Des pros de terrain',
  headlineAccent: 'Au service des clubs',
  tagline: 'Expertise • Réactivité • Performance',
  heroBackgroundImage: '/images/brand/hero-cover.jpg',
  heroBackgroundImageAlt:
    'Professionnels Objectif Sport sur le terrain — accompagnement des clubs sportifs',
  approach: {
    title: 'Notre approche',
    items: [
      {
        icon: 'context',
        title: 'Le contexte',
        description:
          'Surcroît d’activité / Compétitions exceptionnelles / Manque d’effectifs / Turn-over',
      },
      {
        icon: 'need',
        title: 'Le besoin',
        description:
          'Souplesse RH / Audit & Expertise / Constat et suivi de joueurs satellites / Conseils / Valorisation',
      },
      {
        icon: 'mission',
        title: 'La mission',
        description:
          'Fournir un renfort logistique et opérationnel dans les situations complexes',
      },
    ],
    highlight: {
      title: 'Le plus',
      description:
        'Un contrôle digital optimal générant des rapports en temps réel qui assure une coordination et une communication sans failles.',
    },
  },
}
