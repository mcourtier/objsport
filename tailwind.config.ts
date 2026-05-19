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
        'bg-base': '#000000',
        'bg-elevated': '#141414',
        'bg-card': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#e0e0e0',
        'text-muted': '#9ca3af',
        'border-subtle': '#2e3236',
        'accent-consulting': '#fcee21',
        'accent-care': '#b0b0b0',
        'accent-coaching': '#00aeef',
        'pillar-gym': '#4caf50',
        'pillar-lab': '#ffc107',
        'pillar-studio': '#2196f3',
      },
      fontFamily: {
        display: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        button: '0.04em',
      },
      backgroundImage: {
        'brand-grain':
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
} satisfies Config
