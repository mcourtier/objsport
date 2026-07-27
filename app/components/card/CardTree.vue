<template>
  <!-- CardTree -->
  <section
    class="card-tree"
    :class="{
      'card-tree--wide': isWideLayout,
      'card-tree--mobile-carousel': mobileCarousel,
    }"
    :style="{ '--card-tree-count': childCount }"
  >
    <div class="card-tree-root">
      <slot name="root" />
    </div>

    <div class="card-tree-branches" aria-hidden="true">
      <div class="card-tree-line card-tree-branches-trunk" />
      <div class="card-tree-branches-row">
        <span
          v-for="index in childCount"
          :key="index"
          class="card-tree-branches-stem"
        />
      </div>
    </div>

    <div class="card-tree-cards">
      <template v-for="(child, index) in childVNodes" :key="child.key ?? index">
        <div class="card-tree-line card-tree-mobile-link" aria-hidden="true" />
        <component :is="child" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Comment, Fragment, Text, useSlots, type VNode } from 'vue'

defineProps<{
  mobileCarousel?: boolean
}>()

const slots = useSlots()

function flattenVNodes(vnodes: VNode[]): VNode[] {
  return vnodes.flatMap((vnode) => {
    if (vnode.type === Fragment && Array.isArray(vnode.children)) {
      return flattenVNodes(vnode.children as VNode[])
    }

    return [vnode]
  })
}

const childVNodes = computed(() =>
  flattenVNodes(slots.children?.() ?? []).filter(
    (vnode) => vnode.type !== Comment && vnode.type !== Text,
  ),
)

const childCount = computed(() => childVNodes.value.length)

const isWideLayout = computed(() => childCount.value >= 4)
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-tree {
  @apply flex flex-col gap-0;
  --card-tree-gap: --spacing(4);
}

@media (width >= theme(--breakpoint-lg)) {
  .card-tree {
    --card-tree-gap: --spacing(5);
  }
}

.card-tree-branches {
  @apply flex flex-col items-center;
}

.card-tree-line,
.card-tree-branches-stem::before {
  @apply w-0 shrink-0 border-l border-dashed border-neutral-600/70;
}

.card-tree-branches-row::before {
  content: '';
  @apply absolute top-0 h-0 border-t border-dashed border-neutral-600/70;
  left: calc(
    (100% - (var(--card-tree-count) - 1) * var(--card-tree-gap)) /
      (2 * var(--card-tree-count))
  );
  right: calc(
    (100% - (var(--card-tree-count) - 1) * var(--card-tree-gap)) /
      (2 * var(--card-tree-count))
  );
}

.card-tree-branches-trunk {
  @apply hidden md:block;
  height: var(--card-tree-gap);
}

.card-tree-branches-row {
  @apply relative hidden h-5 w-full md:flex;
  gap: var(--card-tree-gap);
}

.card-tree-branches-stem {
  @apply flex min-w-0 flex-1 justify-center;
}

.card-tree-branches-stem::before {
  content: '';
  @apply h-full;
}

.card-tree-cards {
  @apply flex flex-col md:flex-row;
}

@media (width >= theme(--breakpoint-md)) {
  .card-tree-cards {
    gap: var(--card-tree-gap);
  }
}

.card-tree-mobile-link {
  @apply mx-auto md:hidden;
  height: var(--card-tree-gap);
}

.card-tree-cards > :deep(*:not(.card-tree-mobile-link)) {
  @apply min-w-0 flex-1;
}

/* 4+ children: 2×2 grid on tablet, single row with connectors on xl+ */
.card-tree--wide .card-tree-branches-trunk,
.card-tree--wide .card-tree-branches-row {
  @apply hidden xl:block;
}

.card-tree--wide .card-tree-branches-row {
  @apply xl:flex;
}

.card-tree--wide .card-tree-cards {
  @apply flex flex-col gap-4 sm:grid sm:grid-cols-2 xl:flex xl:flex-row;
  gap: var(--card-tree-gap);
}

.card-tree--wide .card-tree-mobile-link {
  @apply sm:hidden;
}

.card-tree--mobile-carousel .card-tree-mobile-link {
  @apply hidden;
}

.card-tree--mobile-carousel .card-tree-branches-trunk {
  @apply block;
}

.card-tree--mobile-carousel {
  @apply min-w-0 max-w-full overflow-x-clip;
}

@media (width < theme(--breakpoint-md)) {
  .card-tree--mobile-carousel .card-tree-cards {
    @apply flex w-full max-w-full min-w-0 flex-row flex-nowrap overflow-x-auto;
    gap: var(--card-tree-gap);
    -webkit-overflow-scrolling: touch;
  }

  .card-tree--mobile-carousel .card-tree-cards > :deep(*:not(.card-tree-mobile-link)) {
    @apply shrink-0;
    flex: 0 0 80vw;
    width: 80vw;
    max-width: 80vw;
  }
}
</style>
