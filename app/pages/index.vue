<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

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
