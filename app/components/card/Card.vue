<template>
  <UCard
    v-bind="cardAttrs"
    :class="rootClass"
    :title="title"
    :description="description"
    :variant="variant"
    :ui="ui"
    :as="as"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name="name" v-bind="slotData ?? {}" />
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string | object
    title?: string
    description?: string
    variant?: 'solid' | 'outline' | 'soft' | 'subtle'
    ui?: {
      root?: string
      header?: string
      title?: string
      description?: string
      body?: string
      footer?: string
    }
    surface?: boolean
    class?: string
  }>(),
  {
    surface: true,
  },
)

defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

const rootClass = computed(() => [
  props.surface && 'card-surface',
  props.class,
  attrs.class,
])

const cardAttrs = computed(() => {
  const { class: _, ...rest } = attrs
  const hasRevealAttr =
    'data-reveal' in rest ||
    'data-reveal-section' in rest ||
    'data-reveal-hero-section' in rest

  return {
    ...(!hasRevealAttr && { 'data-reveal-section': '' }),
    ...rest,
  }
})
</script>
