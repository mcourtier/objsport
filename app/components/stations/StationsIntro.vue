<template>
  <div class="stations-intro flex h-full flex-col justify-center gap-10">
    <header>
      <h2
        id="stations-intro-heading"
        class="brand-headline text-xl md:text-2xl lg:text-3xl"
      >
        {{ title }}
        <span class="text-primary">{{ titleAccent }}</span>
        {{ titleSuffix }}
      </h2>
    </header>

    <ul class="flex flex-col gap-10" aria-label="Points forts du réseau">
      <li
        v-for="feature in features"
        :key="feature.title"
        class="flex gap-4"
      >
        <span
          class="text-primary mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <Icon :name="feature.icon" class="h-9 w-9" />
        </span>

        <div>
          <h3
            class="font-display text-primary-500 text-sm font-bold tracking-wide uppercase md:text-base"
          >
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-300">
            {{ feature.body }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { StationsIntroFeature } from '~/types/station'

defineProps<{
  title: string
  titleAccent: string
  titleSuffix: string
  features: StationsIntroFeature[]
}>()
</script>
