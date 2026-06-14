<template>
  <Icon :name="iconName" class="h-9 w-9 shrink-0" aria-hidden="true" />
</template>

<script setup lang="ts">
import type { PillarAccent } from '~/types/homepage'
import { sportifPillarHeaderIcon } from '~/utils/sportifIcons'

const props = defineProps<{
  accent: PillarAccent
}>()

const iconName = computed(() => sportifPillarHeaderIcon(props.accent))
</script>
