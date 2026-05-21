<template>
  <div>
    <NuxtLink
      v-if="to"
      :to="to"
      :class="resolvedButtonClasses"
      v-bind="delegatedAttrs"
    >
      <slot />
    </NuxtLink>
    <a
      v-else-if="href"
      :href="href"
      :class="resolvedButtonClasses"
      :target="external ? '_blank' : undefined"
      :rel="external ? 'noopener noreferrer' : undefined"
      v-bind="delegatedAttrs"
    >
      <slot />
    </a>
    <button
      v-else
      :type="type"
      :class="resolvedButtonClasses"
      v-bind="delegatedAttrs"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })

type ButtonVariant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    variant?: ButtonVariant
    to?: string
    href?: string
    type?: 'button' | 'submit' | 'reset'
    external?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    external: false,
  },
)

const attrs = useAttrs()

const delegatedAttrs = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})

const buttonClasses = computed(() => {
  const base =
    'inline-flex items-center justify-center px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-button transition-colors'

  if (props.variant === 'secondary') {
    return [
      base,
      'border border-brand-white text-brand-white hover:bg-brand-white hover:text-bg-base',
    ]
  }

  return [
    base,
    'bg-brand-red text-brand-white hover:bg-brand-red-hover',
  ]
})

const resolvedButtonClasses = computed(() => [buttonClasses.value, attrs.class])
</script>
