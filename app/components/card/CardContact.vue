<template>
  <!-- CardContact -->
  <UCard class="card-surface card-contact" data-reveal-section>
    <h2
      class="font-display text-neutral-100 text-xl font-bold tracking-wide uppercase md:text-2xl"
      data-reveal
    >
      {{ heading }}
    </h2>

    <BrandBrushLine class="text-primary" data-reveal-scale-x />

    <div class="mt-6 flex flex-1 flex-col gap-3">
      <a
        :href="`mailto:${email}`"
        class="contact-channel group"
        data-reveal
      >
        <span class="contact-channel-accent" aria-hidden="true" />
        <span class="min-w-0 flex-1">
          <span class="contact-label">Écrire</span>
          <span class="contact-value font-display">
            <span>{{ emailLocal }}</span
            ><span class="text-primary">@</span
            ><span>{{ emailDomain }}</span>
          </span>
        </span>
        <Icon
          name="material-symbols:mail-outline"
          class="contact-icon text-primary h-5 w-5 shrink-0"
          aria-hidden="true"
        />
      </a>

      <a
        v-if="phone"
        :href="`tel:${normalizedPhone}`"
        class="contact-channel group"
        data-reveal
      >
        <span class="contact-channel-accent" aria-hidden="true" />
        <span class="min-w-0 flex-1">
          <span class="contact-label">Appeler</span>
          <span class="contact-value font-display">{{ phone }}</span>
        </span>
        <Icon
          name="material-symbols:call-outline"
          class="contact-icon text-primary h-5 w-5 shrink-0"
          aria-hidden="true"
        />
      </a>
    </div>

    <UButton :to="ctaTo" block class="mt-6" data-reveal>
      {{ ctaLabel }}
    </UButton>
  </UCard>
</template>

<script setup lang="ts">
import type { HomeContactPanelContent } from '~/types/homepage'

const props = defineProps<HomeContactPanelContent>()

const normalizedPhone = computed(() => props.phone?.replace(/\s/g, '') ?? '')

const [emailLocal, emailDomain] = props.email.split('@')
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-contact {
  @apply flex h-full flex-col;
}

.contact-channel {
  @apply border-neutral-700 bg-neutral-800/40 relative flex items-center gap-4 overflow-hidden rounded-xl border px-4 py-3.5 transition-colors hover:border-neutral-600 hover:bg-neutral-800/70;
}

.contact-channel-accent {
  @apply bg-primary absolute top-0 left-0 h-full w-1 transition-all duration-300 group-hover:w-1.5;
}

.contact-label {
  @apply text-primary font-display block text-[10px] font-bold tracking-[0.14em] uppercase;
}

.contact-value {
  @apply text-neutral-100 mt-0.5 block truncate text-sm font-bold tracking-wide uppercase md:text-base;
}

.contact-icon {
  @apply opacity-60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100;
}
</style>
