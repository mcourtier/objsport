export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'neutral',
    },
    button: {
      slots: {
        base: 'font-display font-semibold uppercase tracking-button',
      },
      variants: {
        variant: {
          solid: 'bg-brand-red text-brand-white hover:bg-brand-red-hover',
          outline:
            'border border-brand-white text-brand-white hover:bg-brand-white hover:text-bg-base',
        },
      },
    },
    card: {
      slots: {
        root: 'overflow-hidden rounded-2xl border border-border-subtle bg-transparent',
        header: 'p-0',
        body: 'p-0',
        footer: 'p-0',
      },
    },
    formField: {
      slots: {
        label:
          'font-display text-xs font-semibold uppercase tracking-button text-text-muted',
      },
    },
    input: {
      slots: {
        base: 'border-border-subtle bg-bg-base text-text-primary placeholder:text-text-muted focus:border-brand-red',
      },
    },
    textarea: {
      slots: {
        base: 'border-border-subtle bg-bg-base text-text-primary placeholder:text-text-muted focus:border-brand-red',
      },
    },
  },
})
