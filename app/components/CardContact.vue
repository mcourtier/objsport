<template>
  <UCard class="flex h-full flex-col">
    <h2
      class="font-display text-text-primary text-xl font-bold tracking-wide uppercase md:text-2xl"
    >
      {{ heading }}
    </h2>

    <ul class="mt-8 flex flex-1 flex-col gap-5">
      <li>
        <a
          :href="websiteUrl"
          class="group text-text-secondary hover:text-text-primary flex items-center gap-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            class="border-border-subtle bg-bg-elevated flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon name="mdi:web" class="text-brand-red h-5 w-5" />
          </span>
          <span class="text-sm md:text-base">{{ website }}</span>
        </a>
      </li>
      <li>
        <a
          :href="`mailto:${email}`"
          class="group text-text-secondary hover:text-text-primary flex items-center gap-4 transition-colors"
        >
          <span
            class="border-border-subtle bg-bg-elevated flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon name="mdi:email-outline" class="text-brand-red h-5 w-5" />
          </span>
          <span class="text-sm md:text-base">{{ email }}</span>
        </a>
      </li>
      <li v-if="phone">
        <a
          :href="`tel:${normalizedPhone}`"
          class="group text-text-secondary hover:text-text-primary flex items-center gap-4 transition-colors"
        >
          <span
            class="border-border-subtle bg-bg-elevated flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <Icon name="mdi:phone-outline" class="text-brand-red h-5 w-5" />
          </span>
          <span class="text-sm md:text-base">{{ phone }}</span>
        </a>
      </li>
    </ul>

    <AppButton :to="ctaTo" block class="mt-6">
      {{ ctaLabel }}
    </AppButton>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeContactPanelContent } from '~/types/homepage'

const props = defineProps<HomeContactPanelContent>()

const normalizedPhone = computed(() => props.phone?.replace(/\s/g, '') ?? '')
</script>
