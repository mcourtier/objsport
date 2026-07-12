<template>
  <!-- CardEztm -->
  <Card class="card-eztm">
    <template #title>
      <AppTitle>Application EZTM</AppTitle>
    </template>

    <div class="relative flex flex-1 items-start gap-5">
      <div
        class="relative flex w-24 shrink-0 items-center justify-center"
        data-reveal
      >
        <img
          src="/images/logo-eztm.png"
          alt="EZTM — Easyteam Cockpit Santé de Performance"
          class="eztm-logo relative z-10 h-20 w-20 object-contain"
          width="80"
          height="80"
        />
      </div>

      <div class="min-w-0 flex-1">
        <h2
          class="font-display text-sm font-bold tracking-[0.12em] text-neutral-100 uppercase"
          data-reveal
        >
          {{ title }}
        </h2>

        <p class="mt-2 text-sm leading-relaxed text-neutral-400" data-reveal>
          {{ description }}
        </p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-eztm {
  @apply flex h-full flex-col;
}

.eztm-logo {
  filter: drop-shadow(
    0 0 12px color-mix(in srgb, var(--eztm-yellow) 45%, transparent)
  );
}
</style>
