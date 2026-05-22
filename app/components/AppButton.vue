<template>
  <UButton
    :to="to"
    :href="href"
    :type="type"
    :external="external"
    :block="block"
    :loading="loading"
    :disabled="disabled"
    :color="props.variant === 'secondary' ? 'neutral' : 'primary'"
    :variant="props.variant === 'secondary' ? 'outline' : 'solid'"
    :class="attrs.class"
    v-bind="delegatedAttrs"
  >
    <slot />
  </UButton>
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
    block?: boolean
    loading?: boolean
    disabled?: boolean
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
</script>
