<template>
  <!-- CardStationService -->
  <NuxtLink to="/stations" class="card-station-service group">
    <Card class="card-station-service__card" :ui="cardUi">
      <div class="flex flex-wrap items-center justify-center gap-4 text-center">
        <img
          src="/logo-square.svg"
          alt=""
          class="h-14 w-14 shrink-0"
          width="56"
          height="56"
          aria-hidden="true"
        />
        <h2
          class="font-display text-3xl font-bold tracking-wide text-neutral-100 uppercase italic md:text-4xl"
        >
          Stations Services
          <span class="text-primary">Sport Santé</span>
        </h2>
      </div>

      <p class="mx-auto mt-4 max-w-3xl text-center text-sm text-neutral-300 md:text-base">
        Chez Objectif Sport, la santé et le sport sont indissociables. C'est
        pourquoi nous avons conçu un éco-système connecté.
      </p>
      <p class="mx-auto mt-2 max-w-3xl text-center text-sm text-neutral-300 md:text-base">
        Au delà de la station, nous vous proposons une expertise mobile, en club
        et en entreprise.
      </p>

      <ul
        class="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-0"
        aria-label="Consulting, soins et coaching"
      >
        <li
          v-for="(item, index) in items"
          :key="item.label"
          class="flex items-center gap-3 sm:justify-center sm:px-4"
          :class="
            index > 0
              ? 'border-primary/40 border-t pt-6 sm:border-t-0 sm:border-l sm:pt-0'
              : ''
          "
        >
          <Icon
            :name="item.icon"
            class="text-primary h-6 w-6 shrink-0"
            aria-hidden="true"
          />
          <span
            class="font-display text-lg font-bold tracking-wide text-neutral-100 uppercase md:text-xl"
          >
            {{ item.label }}
          </span>
        </li>
      </ul>

      <span
        class="font-display text-primary-500 mt-8 inline-flex items-center gap-1.5 text-sm font-bold tracking-wide uppercase"
      >
        Voir les stations
        <Icon
          name="material-symbols:arrow-forward"
          class="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
const items = [
  { label: 'Consulting', icon: 'material-symbols:query-stats' },
  { label: 'Soins', icon: 'material-symbols:healing-outline' },
  { label: 'Coaching', icon: 'material-symbols:exercise-outline' },
]

const cardUi = {
  body: 'flex flex-col items-center p-6 md:p-8',
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.card-station-service {
  @apply block h-full;
}

.card-station-service__card {
  @apply h-full transition-colors duration-200 group-hover:border-neutral-600 group-hover:bg-neutral-900;
}
</style>
