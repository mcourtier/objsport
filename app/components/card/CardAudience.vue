<template>
  <!-- CardAudience -->
  <CardAudienceItem
    v-for="audience in audiences"
    :key="audience.id"
    v-bind="audience"
  />
</template>

<script setup lang="ts">
import type { AudienceBlock } from '~/types/navigation'

defineProps<{
  audiences: AudienceBlock[]
}>()
</script>
