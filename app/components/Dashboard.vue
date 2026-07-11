<template>
  <div ref="root" class="mt-5 flex flex-col gap-4 lg:gap-5">
    <CardStationSpaces v-if="!slots.default" />

    <div
      :class="
        layout === 'grid'
          ? 'grid gap-4 lg:grid-cols-3 lg:gap-5'
          : 'flex flex-col gap-10 md:gap-14'
      "
    >
      <slot>
        <CardContact v-bind="contact!" />
        <CardEztm v-bind="promo!" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HomeDashboardContent } from '~/types/homepage'

withDefaults(
  defineProps<
    Partial<HomeDashboardContent> & {
      layout?: 'grid' | 'stack'
    }
  >(),
  {
    layout: 'grid',
  },
)

const slots = useSlots()
const root = ref<HTMLElement | null>(null)

if (!slots.default) {
  useScrollAnimations(root)
}
</script>
