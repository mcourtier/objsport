<template>
  <Icon :name="iconName" class="shrink-0" :class="sizeClass" aria-hidden="true" />
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import { sportifPillarHeaderIcon } from '~/utils/sportifIcons'

const props = withDefaults(
  defineProps<{
    accent: PillarAccent
    size?: 'sm' | 'md'
  }>(),
  { size: 'md' },
)

const iconName = computed(() => sportifPillarHeaderIcon(props.accent))
const sizeClass = computed(() => (props.size === 'sm' ? 'h-5 w-5' : 'h-9 w-9'))
</script>
