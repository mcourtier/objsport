<template>
  <!-- CardContact -->
  <Card class="card-contact" :ui="cardCtaUi">
    <template #title>
      <AppTitle>{{ heading }}</AppTitle>
    </template>

    <div class="flex flex-col gap-3">
      <div class="contact-channel" data-reveal>
        <span class="contact-label">
          <Icon
            name="material-symbols:mail-outline"
            class="contact-icon text-primary h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          Écrire
        </span>
        <span class="contact-value font-display">
          <span>{{ emailLocal }}</span
          ><span class="text-primary">@</span
          ><span>{{ emailDomain }}</span>
        </span>
      </div>

      <div v-if="phone" class="contact-channel" data-reveal>
        <span class="contact-label">
          <Icon
            name="material-symbols:call-outline"
            class="contact-icon text-primary h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          Appeler
        </span>
        <span class="contact-value font-display">{{ phone }}</span>
      </div>
    </div>

    <template #footer>
      <div class="flex justify-center">
        <UButton :to="ctaTo" size="xl" data-reveal>
          {{ ctaLabel }}
        </UButton>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import type { HomeContactPanelContent } from '~/types/homepage'

const props = defineProps<HomeContactPanelContent>()

const [emailLocal, emailDomain] = props.email.split('@')

const cardCtaUi = {
  body: 'p-5 pb-0 md:px-6 md:pt-6 md:pb-0 flex-1',
}
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
  @apply text-primary font-display flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase;
}

.contact-value {
  @apply text-neutral-100 mt-0.5 block truncate text-sm font-bold tracking-wide md:text-base;
}

.contact-icon {
  @apply opacity-60;
}
</style>
