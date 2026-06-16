import type { PageHeroContent } from '~/types/pageHero'

export interface ContactPageContent {
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

export const contactPageContent: ContactPageContent = {
  title: 'Contact',
  description:
    'Écrivez-nous pour toute question ou demande d’information sur nos services bien-être et performance.',
  hero: {
    title: 'Contact',
    titleAccent: 'Objectif Sport',
    description:
      'Écrivez-nous pour toute question ou demande d’information sur nos services bien-être et performance.',
  },
  form: {
    heading: 'Contactez-nous',
    intro:
      'Une question sur nos services entreprise, club ou sportif ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.',
    submitLabel: 'Envoyer le message',
    successMessage:
      'Merci ! Votre message a bien été envoyé. Nous vous répondrons sous peu.',
    errorMessage:
      'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
  },
}
