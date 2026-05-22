<template>
  <Icon :name="iconName" class="h-7 w-7 shrink-0" aria-hidden="true" />
</template>

<script setup lang="ts">
import type { SportifServiceIcon } from '~/types/sportif'
import { sportifServiceIcon } from '~/utils/sportifIcons'

const props = defineProps<{
  name: SportifServiceIcon
}>()

const iconName = computed(() => sportifServiceIcon(props.name))
</script>
