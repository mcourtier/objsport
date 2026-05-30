export default defineAppConfig({
  ui: {
    colors: {
      primary: 'primary',
      neutral: 'neutral',
    },
    button: {
      slots: {
        base: 'font-display uppercase font-bold text-neutral-100 rounded-sm',
      },
      variants: {
        color: {
          primary: {
            base: 'bg-primary text-neutral-100 hover:bg-primary/90',
          },
        },
      },
      // variants: {
      //   variant: {
      //     solid: 'bg-primary text-neutral-100 hover:bg-primary/90',
      //     outline:
      //       'border border-neutral-100 text-neutral-100 hover:bg-neutral-100 hover:text-neutral-900',
      //   },
      // },
    },
    // card: {
    //   slots: {
    //     root: 'overflow-hidden rounded-2xl border border-neutral-700 bg-transparent',
    //     header: 'p-0',
    //     body: 'p-0',
    //     footer: 'p-0',
    //   },
    // },
    // formField: {
    //   slots: {
    //     label:
    //       'font-display text-xs font-semibold uppercase tracking-button text-neutral-400',
    //   },
    // },
    // input: {
    //   slots: {
    //     base: 'border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 focus:border-primary',
    //   },
    // },
    // textarea: {
    //   slots: {
    //     base: 'border-neutral-700 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 focus:border-primary',
    //   },
    // },
  },
})
