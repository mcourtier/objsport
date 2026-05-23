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
          solid: 'bg-brand text-neutral-100 hover:bg-brand/90',
          outline:
            'border border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900',
        },
      },
    },
    card: {
      slots: {
        root: 'overflow-hidden rounded-2xl border border-neutral-700 bg-transparent',
        header: 'p-0',
        body: 'p-0',
        footer: 'p-0',
      },
    },
    formField: {
      slots: {
        label:
          'font-display text-xs font-semibold uppercase tracking-button text-neutral-400',
      },
    },
    input: {
      slots: {
        base: 'border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 focus:border-brand',
      },
    },
    textarea: {
      slots: {
        base: 'border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 focus:border-brand',
      },
    },
  },
})
