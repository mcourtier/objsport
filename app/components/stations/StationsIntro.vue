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
          <svg
            viewBox="0 0 48 40"
            class="h-9 w-9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="10" r="5" stroke="currentColor" stroke-width="2" />
            <path
              d="M4 32c0-5.5 4.5-10 10-10s10 4.5 10 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="34" cy="10" r="5" stroke="currentColor" stroke-width="2" />
            <path
              d="M24 32c0-5.5 4.5-10 10-10s10 4.5 10 10"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="24" cy="8" r="4.5" stroke="currentColor" stroke-width="2" />
            <path
              d="M14 30c1.2-3.8 4.4-6.5 10-6.5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </span>

        <div>
          <h3
            class="font-display text-primary text-sm font-bold tracking-wide uppercase md:text-base"
          >
            {{ feature.title }}
          </h3>
          <p
            class="mt-2 text-sm leading-relaxed text-neutral-300 md:text-[15px]"
          >
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
