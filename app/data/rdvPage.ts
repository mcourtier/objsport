import type { PageHeroContent } from '~/types/pageHero'

export interface RdvPageContent {
  title: string
  description: string
  hero: PageHeroContent
  form: {
    heading: string
    intro: string
    submitLabel: string
    successMessage: string
    errorMessage: string
  }
}

export const rdvPageContent: RdvPageContent = {
  title: 'Prendre rendez-vous',
  description:
    'Réservez une séance avec un professionnel Objectif Sport — coaching, soins ou suivi sur mesure.',
  hero: {
    title: 'Prendre RDV',
    titleAccent: 'Objectif Sport',
    tagline: 'Santé • Performance • Résultats',
    showTagline: true,
    description:
      'Choisissez un professionnel et indiquez vos disponibilités — nous vous recontacterons pour confirmer le créneau.',
    backgroundImage: '/images/hero/contact.png',
    backgroundImageAlt:
      'Sportif en posture d\'accueil — prise de rendez-vous Objectif Sport',
  },
  form: {
    heading: 'Votre demande',
    intro:
      'Remplissez le formulaire ci-dessous. Le praticien est prérempli si vous venez d’une fiche équipe.',
    submitLabel: 'Envoyer la demande',
    successMessage:
      'Merci ! Votre demande de rendez-vous a bien été envoyée. Nous vous recontacterons sous peu pour confirmer le créneau.',
    errorMessage:
      'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
  },
}
