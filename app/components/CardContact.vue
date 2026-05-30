<template>
  <!-- CardContact -->
  <UCard class="flex h-full flex-col">
    <h2
      class="font-display text-neutral-100 text-xl font-bold tracking-wide uppercase md:text-2xl"
    >
      {{ heading }}
    </h2>

    <ul class="mt-8 flex flex-1 flex-col gap-5">
      <li>
        <a
          :href="websiteUrl"
          class="group text-neutral-300 hover:text-neutral-100 flex items-center gap-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            class="border-neutral-700 bg-neutral-800 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon name="material-symbols:language" class="text-primary h-5 w-5" />
          </span>
          <span class="text-sm md:text-base">{{ website }}</span>
        </a>
      </li>
      <li>
        <a
          :href="`mailto:${email}`"
          class="group text-neutral-300 hover:text-neutral-100 flex items-center gap-4 transition-colors"
        >
          <span
            class="border-neutral-700 bg-neutral-800 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon
              name="material-symbols:mail-outline"
              class="text-primary h-5 w-5"
            />
          </span>
          <span class="text-sm md:text-base">{{ email }}</span>
        </a>
      </li>
      <li v-if="phone">
        <a
          :href="`tel:${normalizedPhone}`"
          class="group text-neutral-300 hover:text-neutral-100 flex items-center gap-4 transition-colors"
        >
          <span
            class="border-neutral-700 bg-neutral-800 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon name="material-symbols:call-outline" class="text-primary h-5 w-5" />
          </span>
          <span class="text-sm md:text-base">{{ phone }}</span>
        </a>
      </li>
    </ul>

    <UButton :to="ctaTo" block class="mt-6">
      {{ ctaLabel }}
    </UButton>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeContactPanelContent } from '~/types/homepage'

const props = defineProps<HomeContactPanelContent>()

const normalizedPhone = computed(() => props.phone?.replace(/\s/g, '') ?? '')
</script>
