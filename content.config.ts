import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['team/**'],
      },
      schema: z.object({
        intro: z.string().optional(),
        heroTitle: z.string().optional(),
        heroTitleAccent: z.string().optional(),
        heroBackgroundImage: z.string().optional(),
        heroBackgroundImageAlt: z.string().optional(),
      }),
    }),
    team: defineCollection({
      type: 'page',
      source: 'team/**',
      schema: z.object({
        name: z.string(),
        slug: z.string(),
        role: z.string(),
        photo: z.string(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        order: z.number().default(0),
        excerpt: z.string().optional(),
      }),
    }),
  },
})
