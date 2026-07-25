import type { AudienceBlock } from '~/types/navigation'
import type { PageHeroContent } from '~/types/pageHero'

export const homePageContent = {
  hero: {
    tagline: 'Santé • Performance • Résultats',
    showTagline: true,
    title: 'Un objectif <strong>commun</strong> : votre performance.',
    description:
      "Nous mettons l'expertise du sport de haut niveau au service de <strong>chacun</strong>, à chaque étape de la vie.",
    backgroundImage: '/images/hero/home.png',
    backgroundImageAlt:
      'Sportif en sprint — réathlétisation et performance Objectif Sport',
  } satisfies PageHeroContent,

  audienceHeading: 'Performance pour tous',
  audienceSubheading:
    "L'excellence du sport de haut niveau, adaptée à chaque univers et à tous les âges.",

  audiences: [
    {
      id: 'sportif',
      title: 'Sportifs',
      label: 'Sportifs',
      accent: 'coaching',
      icon: 'material-symbols:directions-run',
      description:
        'Amateurs, compétiteurs et professionnels — préhab, réhab et réathlétisation.',
      to: '/sportif',
      cta: 'Découvrir',
    },
    {
      id: 'entreprise',
      title: 'Entreprises',
      label: 'Entreprises',
      accent: 'consulting',
      icon: 'material-symbols:corporate-fare',
      description:
        'Collaborateurs, dirigeants et équipes — prévention, bien-être et performance.',
      to: '/entreprise',
      cta: 'Découvrir',
    },
    {
      id: 'club',
      title: 'Clubs',
      label: 'Clubs',
      accent: 'care',
      icon: 'material-symbols:shield-outline',
      description:
        'Clubs sportifs — renfort logistique, expertise RH et suivi digital.',
      to: '/club',
      cta: 'Découvrir',
    },
  ] satisfies AudienceBlock[],

  zonesHeading: 'Trois zones, une performance',
  zonesSubheading:
    'Un service de réathlétisation complet — coaching, soins et cours réunis pour accompagner chaque sportif, du premier pas au retour à la compétition.',

  eztmPromo: {
    title: 'Découvrez EZTM',
    description:
      'Easyteam-Cockpit Santé de Performance — pilotez la santé et la performance de vos équipes avec Objectif Sport.',
  },

  contact: {
    heading: 'Contact Objectif Sport',
    email: 'contact@objsport.fr',
    phone: '06 81 34 05 55',
    ctaLabel: 'Nous contacter',
    ctaTo: '/contact',
  },
}
