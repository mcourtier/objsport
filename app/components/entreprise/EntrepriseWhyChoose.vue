<template>
  <!-- EntrepriseWhyChoose -->
  <section class="py-10 md:py-14" aria-labelledby="entreprise-why-heading">
    <h2
      id="entreprise-why-heading"
      class="font-display text-center text-lg font-bold tracking-wide text-neutral-100 uppercase md:text-xl"
    >
      {{ title }}
      <span class="text-primary">{{ titleHighlight }}</span>
      ?
    </h2>

    <ul
      class="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4 lg:gap-5"
    >
      <li
        v-for="reason in reasons"
        :key="reason.title"
        class="@container rounded-xl border border-neutral-700 bg-neutral-900 p-5 md:p-6"
      >
        <div
          class="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 @sm:grid-cols-[auto_minmax(0,1fr)] @sm:gap-x-4 @sm:gap-y-3"
        >
          <div
            class="col-start-1 row-start-1 self-start @sm:row-span-2 @sm:self-center"
          >
            <span
              v-if="reason.icon !== 'results'"
              class="bg-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-neutral-100"
              aria-hidden="true"
            >
              <Icon :name="entrepriseReasonIcon(reason.icon)" class="h-5 w-5" />
            </span>
            <Icon
              v-else
              :name="entrepriseReasonIcon(reason.icon)"
              class="text-primary h-11 w-11 shrink-0"
              aria-hidden="true"
            />
          </div>

          <p
            class="font-display tracking-button col-start-2 row-start-1 min-w-0 text-xs leading-snug font-bold text-neutral-100 uppercase @xs:text-sm @md:text-base"
          >
            {{ reason.title }}
          </p>

          <p
            class="col-start-2 row-start-2 min-w-0 text-xs leading-relaxed text-neutral-300 @xs:text-sm"
          >
            {{ reason.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EntrepriseReason } from '~/types/entreprise'
import { entrepriseReasonIcon } from '~/utils/entrepriseIcons'

defineProps<{
  title: string
  titleHighlight: string
  reasons: EntrepriseReason[]
}>()
</script>
