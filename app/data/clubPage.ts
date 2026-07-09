import type { ClubPageContent } from '~/types/club'

export const clubPageContent: ClubPageContent = {
  title: 'Club',
  description:
    'Des pros de terrain au service des clubs — renfort logistique et opérationnel, expertise RH et contrôle digital en temps réel.',
  hero: {
    title: 'Des pros de terrain',
    titleAccent: 'Au service des clubs',
    tagline: 'Expertise • Réactivité • Performance',
    showTagline: true,
    description:
      'Renfort logistique, expertise RH et contrôle digital — des professionnels du sport de <strong>haut niveau</strong> au service de votre club.',
    backgroundImage: '/images/hero/club.png',
    backgroundImageAlt:
      'Sportif en saut explosif — accompagnement des clubs par Objectif Sport',
  },
  objectifs: {
    intro:
      'Des professionnels santé du sport peuvent intervenir dans votre club ponctuellement pour vous accompagner à vous développer et optimiser.',
    goal: 'Le but : atteindre vos objectifs.',
    pillars: [
      { icon: 'availability', label: 'Disponibilité' },
      { icon: 'discretion', label: 'Discrétion' },
      { icon: 'rigor', label: 'Rigueur' },
    ],
    tagline:
      'Nous travaillons de façon <strong>innovante</strong> et avons tous de l\'expérience dans le sport de <strong>haut niveau</strong>.',
  },
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
