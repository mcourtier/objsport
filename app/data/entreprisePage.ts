import type { EntreprisePageContent } from '~/types/entreprise'

export const entreprisePageContent: EntreprisePageContent = {
  title: 'Entreprise',
  description:
    'Prévention haut niveau au service de votre entreprise — audit, programmes sur mesure et conception de solutions bien-être.',
  hero: {
    title: 'La prévention',
    titleAccent: 'Haut niveau',
    tagline: 'Au service de votre entreprise',
    showTagline: true,
    description:
      'Audit, programmes sur mesure et solutions bien-être — la prévention <strong>professionnelle</strong> adaptée à vos équipes et à votre organisation.',
    backgroundImage: '/images/hero/entreprise.png',
    backgroundImageAlt:
      'Sportif en étirements dynamiques — prévention en entreprise Objectif Sport',
  },
  categories: [
    {
      label: 'Consulting',
      accent: 'consulting',
      icon: 'material-symbols:monitoring',
      title: 'Stratégie & Audit',
      description: 'Analyse, diagnostic et stratégie RH',
      to: '/entreprise/audit',
    },
    {
      label: 'Soins',
      accent: 'care',
      icon: 'material-symbols:handyman-outline',
      title: 'Bien-être & Santé',
      description: 'Soins et prévention en entreprise',
      to: '/entreprise/formation',
    },
    {
      label: 'Coaching',
      accent: 'coaching',
      icon: 'material-symbols:bolt',
      title: 'Performance & Énergie',
      description: 'Coaching et programmes terrain',
      to: '/entreprise/conception',
    },
  ],
  servicesTitle: 'Nos prestations en entreprise',
  services: [
    {
      title: 'Audit',
      icon: 'audit',
      to: '/entreprise/audit',
      items: [
        'Analyse des risques (TMS)',
        'Analyse des postes de travail',
        'Diagnostic des besoins',
        'Stratégie RH Santé & Performance',
        'Conseils & Modélisation',
        'Feed-back & KPI',
      ],
    },
    {
      title: 'Programmation',
      icon: 'programs',
      to: '/entreprise/formation',
      items: [
        'Formation « Zéro TMS »',
        'Team Building & Cohésion',
        'Workshops pratiques',
        'Conférences & Sensibilisation',
        'Monitoring digital (application)',
        'Coaching & Training en entreprise',
        'Soins à la carte',
      ],
    },
    {
      title: 'Intégration',
      icon: 'conception',
      to: '/entreprise/conception',
      items: [
        'Affichage & Supports visuels',
        'Création de Corner Health',
        'Corner Relax / Workout / Outdoor',
        'Intégration de professionnels',
        'Accompagnement au changement',
        'Coordination & Pilotage',
        'Suivi & Optimisation continue',
      ],
    },
  ],
  benefits: [
    { title: 'Améliore la santé', icon: 'health' },
    { title: 'Booste la performance', icon: 'performance' },
    { title: 'Réduit les TMS', icon: 'tms' },
    { title: 'Augmente la productivité', icon: 'productivity' },
    { title: 'Fidélise vos équipes', icon: 'teams' },
  ],
  reasonsTitle: 'Pourquoi choisir',
  reasonsTitleHighlight: 'Objectif Sport',
  reasons: [
    {
      title: 'Expertise du sport pro',
      description: 'Méthodes issues du haut niveau',
      icon: 'expertise',
    },
    {
      title: 'Méthodologie & rigueur',
      description: 'Programmes structurés & efficaces',
      icon: 'methodology',
    },
    {
      title: 'Flexibilité & réactivité',
      description: 'Interventions adaptées à vos besoins',
      icon: 'flexibility',
    },
    {
      title: 'Résultats mesurables',
      description: 'KPI & rapports personnalisés',
      icon: 'results',
    },
  ],
}
