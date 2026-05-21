// https://nuxt.com/docs/api/configuration/nuxt-config
import { stubRoutes } from './app/utils/siteRoutes'

const prerenderedPaths = [
  '/',
  '/contact',
  '/equipe',
  '/sportif',
  '/club',
  ...Object.keys(stubRoutes),
]

export default defineNuxtConfig({
  ssr: true,

  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/seo', '@nuxtjs/google-fonts', '@nuxt/icon'],

  icon: {
    serverBundle: {
      collections: ['mdi'],
    },
  },

  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

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
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      bodyAttrs: {
        class: 'min-h-screen',
      },
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