import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const navLinkSchema = z.object({
  label: z.string(),
  to: z.string(),
})

const sidebarNavLinkSchema = navLinkSchema.extend({
  icon: z.string(),
  children: z.array(navLinkSchema).optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['team/**', 'navigation.yml'],
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
    navigation: defineCollection({
      type: 'data',
      source: 'navigation.yml',
      schema: z.object({
        tagline: z.string(),
        sidebar: z.array(sidebarNavLinkSchema),
        footerLegal: z.array(navLinkSchema),
      }),
    }),
  },
})
