import type { StationsPageContent } from '~/types/station'

export const stationsPageContent: StationsPageContent = {
  title: 'Stations',
  description:
    'Découvrez les stations Sport-Santé partenaires d’Objectif Sport — lieux de soins, de réadaptation et de performance.',
  hero: {
    title: 'Nos stations',
    titleAccent: 'Sur le terrain',
    tagline: 'Soins • Réadaptation • Performance',
    showTagline: true,
    description:
      'Des établissements partenaires pour accompagner la <strong>réadaptation</strong> et la reprise d’activité, au plus près des besoins des patients et des sportifs.',
    backgroundImage: '/images/hero/stations.png',
    backgroundImageAlt:
      'Athlète en posture d’équilibre — stations Sport-Santé Objectif Sport',
  },
  intro: {
    title: 'Des',
    titleAccent: 'professionnels',
    titleSuffix: 'au cœur du concept',
    features: [
      {
        title: 'Des dirigeants engagés',
        body: 'Chaque Station est dirigée par des professionnels de santé et du sport, experts dans leur domaine. Ils portent le projet localement et garantissent la qualité, la cohérence et l’excellence des services proposés.',
      },
      {
        title: 'Un réseau plus grand',
        body: 'Toutes les Stations sont connectées au réseau Objectif Sport. Partage d’expertises, formations, outils communs, événements et standards de qualité. Une force collective au service de la santé et de la performance.',
      },
    ],
  },
  stations: [
    {
      id: 'clinique-les-trois-tours',
      name: 'Clinique les Trois Tours',
      location: 'La Destrousse (13112)',
      description:
        'Clinique de soins médicaux et de réadaptation (SMR), spécialisée en réhabilitation respiratoire et ORL.',
      image: '/images/stations/clinique-des-3-tours.jpg',
      imageAlt: 'Façade de la Clinique les Trois Tours à La Destrousse',
      website:
        'https://www.inicea.fr/smr/clinique-les-trois-tours-bouches-du-rhone-13112',
    },
  ],
}
