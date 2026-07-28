<template>
  <!-- CardStationService -->
  <NuxtLink to="/stations" class="card-station-service group">
    <Card class="card-station-service__card" :ui="cardUi">
      <div class="flex items-center justify-center gap-4">
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

      <div class="flex items-center justify-center gap-4">
        Chez Objectif Sport, la santé et le sport sont indissociables. C'est
        pourquoi nous avons conçu un éco-système connecté.
      </div>

      <div class="flex items-center justify-center gap-4">
        Au delà de la station, nous vous proposons une expertise mobile, en club
        et en entreprise.
      </div>

      <ul
        class="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-0"
        aria-label="Consulting, soins et coaching"
      >
        <li
          v-for="(label, index) in labels"
          :key="label"
          class="flex items-center sm:justify-center sm:px-4"
          :class="
            index > 0
              ? 'border-primary/40 border-t pt-6 sm:border-t-0 sm:border-l sm:pt-0'
              : ''
          "
        >
          <span
            class="font-display text-lg font-bold tracking-wide text-neutral-100 uppercase md:text-xl"
          >
            {{ label }}
          </span>
        </li>
      </ul>
    </Card>
  </NuxtLink>
</template>

<script setup lang="ts">
const labels = ['Consulting', 'Soins', 'Coaching']

const cardUi = {
  body: 'p-6 md:p-8',
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
