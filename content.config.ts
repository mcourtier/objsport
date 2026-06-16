import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const navLinkSchema = z.object({
  label: z.string(),
  to: z.string(),
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

const homeMissionSchema = z.object({
  titleLines: z.array(z.string()),
  titleAccent: z.string(),
  paragraphs: z.array(z.string()),
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
        hero: pageHeroSchema.optional(),
        mission: homeMissionSchema.optional(),
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
