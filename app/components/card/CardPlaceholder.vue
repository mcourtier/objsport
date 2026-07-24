<template>
  <!-- CardPlaceholder -->
  <Card class="card-placeholder" :ui="placeholderUi">
    <div class="flex h-full items-center justify-center p-6 text-center">
      <slot />
    </div>
  </Card>
</template>

<script setup lang="ts">
const placeholderUi = {
  body: 'flex-1',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-placeholder {
  @apply flex h-full flex-col;
}
</style>
