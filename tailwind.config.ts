import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#de241b',
        'brand-red-hover': '#c41f17',
        'brand-charcoal': '#222527',
        'brand-white': '#ffffff',
        'bg-base': '#0f1011',
        'bg-elevated': '#1a1c1e',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-muted': '#9ca3af',
        'border-subtle': '#2e3236',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        button: '0.04em',
      },
    },
  },
  plugins: [],
} satisfies Config
