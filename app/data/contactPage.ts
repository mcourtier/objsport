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
    tagline: 'Entreprises • Clubs • Sportifs',
    showTagline: true,
    description:
      'Une question sur nos services de <strong>réathlétisation</strong> ? Écrivez-nous — Le Gym, Le Lab et Le Studio pour entreprises, clubs et sportifs.',
    backgroundImage: '/images/hero/contact.png',
    backgroundImageAlt:
      'Sportif en posture d\'accueil — contactez Objectif Sport',
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
