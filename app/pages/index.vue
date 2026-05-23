<template>
  <div v-if="page" class="flex flex-col gap-4 lg:gap-5">
    <ContentRenderer :value="page" />
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('homepage', () =>
  queryCollection('content').path('/').first(),
)

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page introuvable',
    fatal: true,
  })
}

useSeoMeta({
  title: () => page.value?.title,
  description: () => page.value?.description,
})
</script>
