import type { TeamMember } from '~/types/admin'
import { stationsPageContent } from '~/data/stationsPage'

const defaultStationId = stationsPageContent.stations[0]?.id ?? ''
const defaultRegion = "Provence-Alpes-Côte d'Azur"

export const adminSeedMembers: TeamMember[] = [
  {
    id: 'member-pierre-vespignani',
    name: 'Pierre Vespignani',
    role: 'Kinésithérapeute du sport — Fondateur, Objectif Sport',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Pierre Vespignani est **kinésithérapeute du sport**, formé à Nancy. Entreprenant et tourné vers le soin des sportifs, il a fondé et dirigé plusieurs stations Sport-Santé, puis **Objectif Sport** en 2016 et la plateforme collaborative **EZTM** en 2019 — pour centraliser l’information, digitaliser les outils de terrain et valoriser le travail des professionnels de la santé du sport.\n\nPendant plus de vingt ans, il a accompagné au quotidien des équipes de haut niveau : **AS Nancy Lorraine** (football professionnel), **SLUC Nancy Basket** (deux championnats de France Pro A), **Olympique de Marseille**, la **sélection du Sénégal** en qualification pour la Coupe du monde 2018, et l’**équipe de France féminine A** à la Fédération française de football. Il a aussi fondé **FKNL** (Formation Kiné Nancy Lorraine), centre de formation continue pour kinésithérapeutes.\n\nVia Objectif Sport, il apporte un **renfort logistique et opérationnel** en milieu de performance — surcroît d’activité, compétitions exceptionnelles, manque d’effectifs, suivi de joueurs satellites ou besoin d’expertise — de la prévention à la récupération, du amateur au professionnel, pour les clubs, les compétitions et les sportifs. Curieux et exigeant, il mêle innovation et fondamentaux, dans un esprit de travail collaboratif et collectif.',
    photo: '/images/team/pierre-vespignani.jpg',
  },
  {
    id: 'member-mathias-giustiniani',
    name: 'Mathias Giustiniani',
    role: 'Médecin du sport',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Mathias Giustiniani est **médecin du sport** chez Objectif Sport. Il assure le suivi médical des sportifs, de la prévention au retour à la compétition, en coordination avec l’ensemble de l’équipe pluridisciplinaire.',
    photo: '/images/team/mathias-giustiniani.jpg',
  },
  {
    id: 'member-barthelemy-frederique',
    name: 'Barthélémy Frédérique',
    role: 'Médecin du sport',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Barthélémy Frédérique est **médecin du sport** au sein d’Objectif Sport. Il travaille en lien avec les kinésithérapeutes, ostéopathes et coachs pour un accompagnement complet des sportifs.',
    photo: '/images/team/barthelemy-frederique.jpg',
  },
  {
    id: 'member-yann-bourrel',
    name: 'Yann Bourrel',
    role: 'Ostéopathe',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Yann Bourrel est **ostéopathe** chez Objectif Sport. Il prend en charge les sportifs pour optimiser la mobilité, soulager les douleurs et prévenir les récidives, en coordination avec le reste de l’équipe.',
    photo: '/images/team/yann-bourrel.jpg',
  },
  {
    id: 'member-helene-pierrel',
    name: 'Hélène Pierrel',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Hélène Pierrel est **kinésithérapeute** au sein d’Objectif Sport. Elle assure la prise en charge des sportifs en rééducation fonctionnelle et en prévention des blessures.',
    photo: '/images/team/helene-pierrel.jpg',
  },
  {
    id: 'member-stephane-re',
    name: 'Stéphane Ré',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Stéphane Ré est **kinésithérapeute** chez Objectif Sport. Il prend en charge les sportifs dans leur parcours de soin, de la rééducation au retour à l’entraînement.',
    photo: '/images/team/stephane-re.jpg',
  },
  {
    id: 'member-nathalie-faglia',
    name: 'Nathalie Faglia',
    role: 'Ostéopathe',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Nathalie Faglia est **ostéopathe** au sein d’Objectif Sport. Elle accompagne les sportifs pour restaurer l’équilibre du corps et optimiser la récupération.',
    photo: '/images/team/nathalie-faglia.jpg',
  },
  {
    id: 'member-maxime-matton',
    name: 'Maxime Matton',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Maxime Matton est **kinésithérapeute** chez Objectif Sport. Il assure la prise en charge des sportifs, de la prévention à la rééducation fonctionnelle.',
    photo: '/images/team/maxime-matton.jpg',
  },
  {
    id: 'member-vladimir-duparc',
    name: 'Vladimir Duparc',
    role: 'Coach APA',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Vladimir Duparc est **coach APA** (activité physique adaptée) au sein d’Objectif Sport. Il accompagne les sportifs dans la reprise ou le maintien de l’activité physique, en lien avec l’équipe soignante.',
    photo: '/images/team/vladimir-duparc.jpg',
  },
  {
    id: 'member-amelie-raynal',
    name: 'Amélie Raynal',
    role: 'Coach APA',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Amélie Raynal est **coach APA** (activité physique adaptée) chez Objectif Sport. Elle accompagne les sportifs dans la reprise d’activité, le renforcement et l’optimisation de la performance.',
    photo: '/images/team/amelie-raynal.jpg',
  },
  {
    id: 'member-cecile-capdeville',
    name: 'Cécile Capdeville',
    role: 'Nutritionniste',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Cécile Capdeville est **nutritionniste** au sein d’Objectif Sport. Elle accompagne les sportifs pour adapter leur alimentation à leurs objectifs de performance, de récupération et de bien-être.',
    photo: '/images/team/cecile-capdeville.jpg',
  },
  {
    id: 'member-lucas-bonnaud',
    name: 'Lucas Bonnaud',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Lucas Bonnaud est **kinésithérapeute** chez Objectif Sport. Il prend en charge les sportifs dans leur parcours de soin et de retour à la performance.',
    photo: '/images/team/lucas-bonnaud.jpg',
  },
  {
    id: 'member-marielle-rollet',
    name: 'Marielle Rollet',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Marielle Rollet est **kinésithérapeute** au sein d’Objectif Sport. Elle assure la prise en charge des sportifs, de la prévention à la rééducation fonctionnelle.',
    photo: '/images/team/marielle-rollet.jpg',
  },
  {
    id: 'member-albert-antonio',
    name: 'Albert Antonio',
    role: 'Kinésithérapeute',
    region: defaultRegion,
    stationId: defaultStationId,
    biography:
      'Albert Antonio est **kinésithérapeute** chez Objectif Sport. Il accompagne les sportifs dans leur parcours de soin, de la rééducation au retour à l’entraînement.',
    photo: '/images/team/albert-antonio.jpg',
  },
]
