<template>
  <div v-if="pageMeta" ref="root">
    <PageHero
      :title="pageMeta.title"
      :description="pageMeta.description"
      background-image="/images/athlete.png"
      background-image-alt="Sportif en action — Objectif Sport"
    />
    <LayoutPageStub />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const pagePath = computed(() => {
  const segments = route.params.slug
  if (!segments || (Array.isArray(segments) && segments.length === 0)) {
    return '/'
  }
  const parts = Array.isArray(segments) ? segments : [segments]
  return `/${parts.join('/')}`
})

const pageMeta = computed(() => resolveStubRoute(pagePath.value))

if (!pageMeta.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page introuvable',
    fatal: true,
  })
}

useSeoMeta({
  title: () => `${pageMeta.value?.title} — Objectif Sport`,
  description: () => pageMeta.value?.description,
})

const root = ref<HTMLElement | null>(null)
useScrollAnimations(root)
</script>
