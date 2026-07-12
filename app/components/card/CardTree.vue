<template>
  <!-- CardTree -->
  <section class="card-tree">
    <div class="card-tree-root">
      <slot name="root" />
    </div>

    <div class="card-tree-branches" aria-hidden="true">
      <div class="card-tree-line card-tree-branches-trunk" />
      <div class="card-tree-branches-row">
        <span class="card-tree-branches-stem" />
        <span class="card-tree-branches-stem" />
        <span class="card-tree-branches-stem" />
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
  left: calc((100% - 2 * var(--card-tree-gap)) / 6);
  right: calc((100% - 2 * var(--card-tree-gap)) / 6);
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
</style>
