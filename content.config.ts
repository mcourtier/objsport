import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const navLinkSchema = z.object({
  label: z.string(),
  to: z.string(),
  accent: z.enum(['gym', 'lab', 'studio']).optional(),
})

const sidebarNavLinkSchema = navLinkSchema.extend({
  icon: z.string(),
  children: z.array(navLinkSchema).optional(),
})

const pageHeroSchema = z.object({
  showTagline: z.boolean().optional(),
  title: z.string().optional(),
  titleAccent: z.string().optional(),
  description: z.string().optional(),
  backgroundImage: z.string().optional(),
  backgroundImageAlt: z.string().optional(),
  showDescription: z.boolean().optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['navigation.yml'],
      },
      schema: z.object({
        hero: pageHeroSchema.optional(),
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
