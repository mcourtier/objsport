import type { PillarAccent } from '../types/homepage'
import type { SportifPageContent, SportifPillar } from '../types/sportif'

const sportifPillarSlugByAccent: Record<PillarAccent, string> = {
  gym: 'le-gym',
  lab: 'le-lab',
  studio: 'le-studio',
}

const sportifAccentBySlug: Record<string, PillarAccent> = {
  'le-gym': 'gym',
  'le-lab': 'lab',
  'le-studio': 'studio',
}

export const sportifPillarPaths = Object.values(sportifPillarSlugByAccent).map(
  (slug) => `/sportif/${slug}`,
)

export function getSportifPillarBySlug(
  slug: string,
): SportifPillar | undefined {
  const accent = sportifAccentBySlug[slug]
  if (!accent) {
    return undefined
  }

  return sportifPageContent.pillars.find((pillar) => pillar.accent === accent)
}

export const sportifPageContent: SportifPageContent = {
  title: 'Sportif',
  description:
    'Le Gym, Le Lab et Le Studio — coaching, soins et cours pour sportifs. Performance professionnelle au service du sportif.',
  headline: 'La performance professionnelle',
  headlineAccent: 'Au service du sportif',
  heroBackgroundImage: '/images/sportif/gym.jpg',
  heroBackgroundImageAlt:
    'Coach accompagnant un sportif en séance de renforcement — Objectif Sport',
  pillars: [
    {
      accent: 'gym',
      name: 'Le Gym',
      subtitle: 'Le Gym',
      headline: 'Coaching en petit groupe',
      headlineAccent: 'Préhab, réhab & réathlé',
      description:
        'Sessions de 45 min en solo ou en trio pour activer, rééduquer et retrouver la performance — routines préventives, rééducation spécifique et retour à l’entraînement.',
      headerIcon: 'gym',
      imageSrc: '/images/sportif/gym.jpg',
      imageAlt:
        'Coach accompagnant un sportif en séance de renforcement au sol',
      sections: [
        {
          title: 'Préhab (dès 45 min)',
          items: [
            {
              title: 'Routine activation',
              description: 'Session pour partir du bon pied',
              icon: 'run',
            },
            {
              title: 'Rituel prévention',
              description: 'Prévoir c’est gouverner',
              icon: 'stopwatch',
            },
            {
              title: 'Circuit recovery',
              description: 'Récup active — Décrassage',
              icon: 'recovery',
            },
          ],
        },
        {
          title: 'Réhab (dès 45 min)',
          items: [
            {
              title: 'Spé genou',
              description: 'Sessions actives spécifiques',
              icon: 'rehab',
            },
            {
              title: 'Spé cheville',
              description: 'Sessions actives spécifiques',
              icon: 'rehab',
            },
            {
              title: 'Spé rachis',
              description: 'Sessions actives spécifiques',
              icon: 'rehab',
            },
            {
              title: 'Spé épaule',
              description: 'Sessions actives spécifiques',
              icon: 'rehab',
            },
          ],
        },
        {
          title: 'Réathlé (dès 45 min)',
          items: [
            {
              title: 'Return to train',
              description: 'Encadrement reprise terrain',
              icon: 'run',
            },
            {
              title: 'Return to perf',
              description: 'Encadrement reprise compétition',
              icon: 'sprint',
            },
            {
              title: 'HIIT',
              description: 'Sessions actives spécifiques',
              icon: 'hiit',
            },
          ],
        },
      ],
    },
    {
      accent: 'lab',
      name: 'Le Lab',
      subtitle: 'Le Lab',
      headline: 'Soins & testing',
      headlineAccent: 'En séance individuelle',
      description:
        'Massage, thérapie, mobilité et bilans complets — récupération, prévention et mesure de la performance au service du sportif.',
      headerIcon: 'lab',
      imageSrc: '/images/sportif/lab.jpg',
      imageAlt:
        'Membres inférieurs avec électrostimulation en séance de récupération',
      sections: [
        {
          title: 'Soins (dès 45 min)',
          items: [
            {
              title: 'Massage',
              description: 'Recovery — Relax — Mobilité',
              icon: 'massage',
            },
            {
              title: 'Mobilité',
              description: 'Mobilisation — Stretching',
              icon: 'stretch',
            },
            {
              title: 'Thérapie',
              description: 'Manuelle — Instrumentale — Physio',
              icon: 'therapy',
            },
            {
              title: 'Esthétique',
              description: 'Endermologie — Nutrition',
              icon: 'aesthetic',
            },
          ],
        },
        {
          title: 'Testing (45 min)',
          items: [
            {
              title: 'Retour au sport',
              description: 'Return to train — play — perf',
              icon: 'run',
            },
            {
              title: 'Force & vitesse',
              description: 'Isocinétisme — Puissance — Endurance',
              icon: 'weights',
            },
            {
              title: 'Fonctionnel',
              description: 'FMS — KFS — K.Cart — Ankle.go — Rachis',
              icon: 'posture',
            },
            {
              title: 'Spécifique',
              description: 'Marche — Course — Sauts — Geste',
              icon: 'sprint',
            },
            {
              title: 'Cognitif',
              description: 'Équilibre — Réflexes — Préférences',
              icon: 'brain',
            },
            {
              title: 'Corporel',
              description: 'Impédance — Anthropo — Biométrie',
              icon: 'body',
            },
          ],
        },
      ],
    },
    {
      accent: 'studio',
      name: 'Le Studio',
      subtitle: 'Le Studio',
      headline: 'Cours en small-groupe',
      headlineAccent: 'Gymnastique & formations',
      description:
        'Pilates, yoga, HIIT et ateliers pédagogiques — renforcer le corps, gagner en souplesse et maîtriser les fondamentaux du mouvement.',
      headerIcon: 'studio',
      imageSrc: '/images/sportif/studio.jpg',
      imageAlt: 'Groupe en cours de yoga et étirements dans un studio lumineux',
      sections: [
        {
          title: 'Gymnastique (45 min)',
          items: [
            {
              title: 'Pilates',
              description: 'Force — Souplesse — Contrôle',
              icon: 'pilates',
            },
            {
              title: 'Yoga',
              description: 'Harmonie — Confiance — Sérénité',
              icon: 'yoga',
            },
            {
              title: 'Fondamentale',
              description: 'Les clés du mouvement',
              icon: 'movement',
            },
            {
              title: 'SIIT',
              description: 'Soft Intensity Interval Training',
              icon: 'target',
            },
            {
              title: 'HIIT',
              description: 'High Intensity Interval Training',
              icon: 'burst',
            },
          ],
        },
        {
          title: 'Formations (2h)',
          items: [
            {
              title: 'L’échauffement',
              description: 'L’enseignement de la construction',
              icon: 'warmup',
            },
            {
              title: 'Les étirements',
              description: 'Actifs — Passifs — Dynamiques',
              icon: 'reach',
            },
            {
              title: 'La prévention',
              description: 'Prévenir c’est guérir',
              icon: 'shield',
            },
            {
              title: 'Le repos & la récup',
              description: 'Et si c’était le secret de la perf ?',
              icon: 'rest',
            },
            {
              title: 'Commotion et sport',
              description: 'Les premiers gestes qui sauvent',
              icon: 'concussion',
            },
          ],
        },
      ],
    },
  ],
  benefits: [
    {
      title: 'Expertise sport pro',
      description: 'Méthodes issues du haut niveau',
      icon: 'expertise',
    },
    {
      title: 'Accompagnement sur-mesure',
      description: 'Adapté à ton profil, tes objectifs et ton rythme',
      icon: 'coaching',
    },
    {
      title: 'Performance flexible',
      description: 'Des résultats concrets et mesurables',
      icon: 'performance',
    },
    {
      title: 'Disponibilité flexible',
      description: 'À tout moment, où que tu sois',
      icon: 'availability',
    },
  ],
}
