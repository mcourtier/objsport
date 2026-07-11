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
        size: {
          xl: {
            base: 'px-8 py-3.5 text-base gap-2',
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
    card: {
      slots: {
        root: 'rounded-2xl overflow-hidden ring-0 divide-y-0',
        header: 'p-5 pb-0 md:px-6 md:pt-6',
        title: '',
        body: 'p-5 md:p-6',
      },
      variants: {
        variant: {
          outline: {
            root: 'border border-neutral-700 bg-neutral-900/50 divide-y-0',
          },
          soft: {
            root: 'border border-neutral-700 bg-neutral-900/50 divide-y-0',
          },
          subtle: {
            root: 'border border-neutral-700 bg-neutral-900/50 divide-y-0',
          },
        },
      },
    },
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
