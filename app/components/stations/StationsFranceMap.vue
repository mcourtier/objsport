<template>
  <div
    class="stations-france-map relative flex h-full items-center justify-center"
    data-reveal
  >
    <svg
      viewBox="0 0 507 520"
      class="stations-france-map__svg h-auto w-full max-w-lg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Carte de France — réseau national de stations Sport-Santé"
    >
      <!-- France outline -->
      <path
        :d="FRANCE_MAP_PATH"
        fill="#3c4449"
        stroke="#6d777e"
        stroke-width="1.5"
      />

      <!-- Network lines from hub to pins -->
      <g stroke="#6d777e" stroke-width="1" fill="none" opacity="0.65">
        <line
          v-for="pin in pins"
          :key="`line-${pin.id}`"
          :x1="hub.x"
          :y1="hub.y"
          :x2="pin.x"
          :y2="pin.y"
        />
      </g>

      <!-- Location pins -->
      <g
        v-for="pin in pins"
        :key="pin.id"
        :transform="`translate(${pin.x}, ${pin.y})`"
      >
        <path
          d="M0,-18 C-7,-18 -12,-12.5 -12,-6 C-12,2 0,14 0,14 C0,14 12,2 12,-6 C12,-12.5 7,-18 0,-18 Z"
          fill="#de241b"
        />
        <circle cx="0" cy="-7" r="3.5" fill="#080a0c" />
      </g>

      <!-- Center hub logo -->
      <g :transform="`translate(${hub.x}, ${hub.y})`">
        <image
          href="/logo-square.svg"
          x="-22"
          y="-58"
          width="44"
          height="44"
        />
        <text
          text-anchor="middle"
          y="-4"
          fill="#f4f5f5"
          font-family="Raleway, ui-sans-serif, system-ui, sans-serif"
          font-size="15"
          font-weight="800"
          letter-spacing="0.06em"
        >
          OBJECTIF <tspan fill="#de241b">SPORT</tspan>
        </text>
        <text
          text-anchor="middle"
          y="14"
          fill="#d2d7da"
          font-family="Raleway, ui-sans-serif, system-ui, sans-serif"
          font-size="6.5"
          font-weight="600"
          letter-spacing="0.12em"
        >
          RÉSEAU NATIONAL DE STATIONS SPORT SANTÉ
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { FRANCE_MAP_PATH } from './franceMapPath'

const hub = { x: 268, y: 268 }

/** Approximate city positions on the France SVG viewBox. */
const pins = [
  { id: 'lille', x: 278, y: 95 },
  { id: 'strasbourg', x: 418, y: 168 },
  { id: 'paris', x: 275, y: 178 },
  { id: 'nantes', x: 148, y: 248 },
  { id: 'lyon', x: 348, y: 298 },
  { id: 'bordeaux', x: 178, y: 338 },
  { id: 'toulouse', x: 232, y: 388 },
  { id: 'marseille', x: 362, y: 418 },
]
</script>

<style scoped>
@reference "~/assets/css/main.css";

.stations-france-map__svg {
  @apply select-none;
}
</style>
