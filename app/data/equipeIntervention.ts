import type { InterventionStep } from '~/types/team'

export const equipeInterventionSteps: InterventionStep[] = [
  {
    icon: 'material-symbols:search',
    title: 'Analyse du besoin',
    description: 'Écoute, diagnostic et définition des objectifs.',
  },
  {
    icon: 'material-symbols:center-focus-strong-outline',
    title: "Conception de l'équipe",
    description:
      'Sélection des experts et construction du dispositif sur mesure.',
  },
  {
    icon: 'material-symbols:event-available-outline',
    title: 'Déploiement sur site',
    description: 'Intégration rapide et prise en charge opérationnelle.',
  },
  {
    icon: 'material-symbols:ecg-heart-outline',
    title: 'Suivi & pilotage',
    description:
      'Contrôle digital, rapports en temps réel et coordination sans faille.',
  },
  {
    icon: 'material-symbols:task-alt-outline',
    title: 'Évaluation & optimisation',
    description: 'Bilan, ajustements et amélioration continue.',
  },
]
