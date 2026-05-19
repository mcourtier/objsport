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
  pricing: [
    {
      icon: 'half-day',
      label: 'Par demi-jour',
      price: '480€',
      model: 'Modèle : 6 heures consécutives',
      footnotes: [
        'Frais déplacement : Aucun frais dans un rayon de 30 km autour de Marseille.',
      ],
    },
    {
      icon: 'day',
      label: 'Par jour',
      price: '900€',
      model: 'Modèle : 12 heures consécutives à partir de 2 jours',
      footnotes: [
        'Frais déplacement :',
        '< 30 km : 0',
        '> 30 km : 1€/km',
        '> 200 km : Gîte / Voyages (selon mission)',
      ],
    },
    {
      icon: 'week',
      label: 'Par semaine',
      price: '4500€',
      model: 'Modèle : 6 jours sur 7',
      footnotes: [
        'Suivi & reporting inclus',
        'Coordination optimisée',
        'Rapports en temps réel',
      ],
    },
  ],
  estimationTitle: 'Estimation / Observations',
}
