<template>
  <Card class="flex h-full flex-col p-6 md:p-8">
    <h2 class="font-display text-xl font-bold uppercase tracking-wide text-text-primary md:text-2xl">
      {{ heading }}
    </h2>

    <ul class="mt-8 flex flex-1 flex-col gap-5">
      <li>
        <a
          :href="websiteUrl"
          class="group flex items-center gap-4 text-text-secondary transition-colors hover:text-text-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated"
            aria-hidden="true"
          >
            <Icon
              name="mdi:web"
              class="h-5 w-5 text-brand-red"
            />
          </span>
          <span class="text-sm md:text-base">{{ website }}</span>
        </a>
      </li>
      <li>
        <a
          :href="`mailto:${email}`"
          class="group flex items-center gap-4 text-text-secondary transition-colors hover:text-text-primary"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated"
            aria-hidden="true"
          >
            <Icon
              name="mdi:email-outline"
              class="h-5 w-5 text-brand-red"
            />
          </span>
          <span class="text-sm md:text-base">{{ email }}</span>
        </a>
      </li>
      <li v-if="phone">
        <a
          :href="`tel:${normalizedPhone}`"
          class="group flex items-center gap-4 text-text-secondary transition-colors hover:text-text-primary"
        >
          <span
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-subtle bg-bg-elevated"
            aria-hidden="true"
          >
            <Icon
              name="mdi:phone-outline"
              class="h-5 w-5 text-brand-red"
            />
          </span>
          <span class="text-sm md:text-base">{{ phone }}</span>
        </a>
      </li>
    </ul>

    <AppButton
      :to="ctaTo"
      class="mt-6 w-full [&_a]:w-full [&_a]:justify-center"
    >
      {{ ctaLabel }}
    </AppButton>
  </Card>
</template>

<script setup lang="ts">
import type { HomeContactPanelContent } from '~/types/homepage'

const props = defineProps<HomeContactPanelContent>()

const normalizedPhone = computed(() => props.phone?.replace(/\s/g, '') ?? '')
</script>
