import type { AudienceBlock } from '~/types/navigation'
import type { PageHeroContent } from '~/types/pageHero'

export const homePageContent = {
  hero: {
    tagline: 'Prévention • Santé • Performance',
    showTagline: true,
    title: 'Un objectif <strong>commun</strong> : votre performance.',
    description:
      'nous mettons l’excellence du sport de haut niveau au service de chacun, à chaque étape de la vie et adaptée à tous.',
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
    {
      id: 'sport-sante',
      title: 'Sport Santé',
      label: 'Sport Santé',
      accent: 'consulting',
      icon: 'material-symbols:apartment',
      description:
        'Stations partenaires — soins, réadaptation et accompagnement au plus près du terrain.',
      to: '/stations',
      cta: 'Découvrir',
    },
  ] satisfies AudienceBlock[],

  zonesHeading: 'Trois zones, une performance',
  zonesSubheading:
    'Un service de réathlétisation complet — coaching, soins et cours collectif réunis pour accompagner chaque sportif, du premier pas au retour à la compétition.',

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
