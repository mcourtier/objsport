<template>
  <UButton
    class="lg:hidden"
    color="neutral"
    variant="ghost"
    size="xl"
    :icon="open ? 'material-symbols:close' : 'material-symbols:menu'"
    :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'"
    @click="open = !open"
  />
</template>

<script setup lang="ts">
const open = defineModel<boolean>({ required: true })
</script>
