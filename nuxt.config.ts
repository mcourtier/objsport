// https://nuxt.com/docs/api/configuration/nuxt-config
import { sportifPillarPaths } from './app/data/sportifPage'
import { stubRoutes } from './app/utils/siteRoutes'

const prerenderedPaths = [
  '/',
  '/contact',
  '/equipe',
  '/sportif',
  ...sportifPillarPaths,
  '/club',
  ...Object.keys(stubRoutes),
]

export default defineNuxtConfig({
  ssr: true,

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/seo', '@nuxtjs/google-fonts'],

  ui: {
    fonts: false,
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },

  icon: {
    serverBundle: {
      collections: ['material-symbols'],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/main.css'],

  googleFonts: {
    families: {
      Raleway: {
        wght: [600, 700, 800],
        ital: [600, 700, 800],
      },
      'Source+Sans+3': [400, 500, 600],
    },
    display: 'swap',
  },

  app: {
    pageTransition: { name: 'page' },
    head: {
      htmlAttrs: {
        lang: 'fr',
        class: 'dark',
      },
      bodyAttrs: {
        class: 'min-h-screen',
      },
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
  },

  site: {
    name: 'Objectif Sport',
    description:
      'Coaching bien-être et performance sur site en entreprise ou à domicile. Programmes pour entreprises, clubs sportifs et sportifs.',
    defaultLocale: 'fr',
    // Temporary: block search engines while the site is under construction
    indexable: false,
  },

  runtimeConfig: {
    public: {
      copyrightYear: 2026,
    },
  },

  routeRules: Object.fromEntries(
    prerenderedPaths.map((path) => [path, { prerender: true }]),
  ),
})
