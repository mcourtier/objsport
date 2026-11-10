<template>
  <!-- CardContact -->
  <Card class="card-contact">
    <template #title>
      <AppTitle>{{ heading }}</AppTitle>
    </template>

    <div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-6">
      <div class="flex min-w-0 flex-wrap gap-x-10 gap-y-4">
        <div v-if="email" class="contact-channel">
          <span class="contact-label">
            <Icon
              name="material-symbols:mail-outline"
              class="h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            Écrire
          </span>
          <a :href="`mailto:${email}`" class="contact-value font-display">
            <span>{{ emailLocal }}</span
            ><span class="text-primary">@</span
            ><span>{{ emailDomain }}</span>
          </a>
        </div>

        <div v-if="phone" class="contact-channel">
          <span class="contact-label">
            <Icon
              name="material-symbols:call-outline"
              class="h-4 w-4 shrink-0"
              aria-hidden="true"
            />
            Appeler
          </span>
          <a :href="`tel:${phoneHref}`" class="contact-value font-display">
            {{ phone }}
          </a>
        </div>
      </div>

      <UButton v-if="ctaLabel && ctaTo" :to="ctaTo" size="xl">
        {{ ctaLabel }}
      </UButton>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { ContactPanelContent } from '~/types/homepage'

const props = defineProps<ContactPanelContent>()

const emailLocal = computed(() => props.email?.split('@')[0])
const emailDomain = computed(() => props.email?.split('@')[1])
const phoneHref = computed(() => props.phone?.replace(/\s/g, ''))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-contact {
  @apply flex h-full flex-col;
}

.contact-channel {
  @apply min-w-0;
}

.contact-label {
  @apply text-primary-500 font-display flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase;
}

.contact-value {
  @apply mt-0.5 block truncate text-sm font-bold tracking-wide text-neutral-100 underline-offset-4 hover:underline md:text-base;
}
</style>
