<template>
  <div
    class="border-border-subtle bg-bg-card relative overflow-hidden rounded-2xl border"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 400 280"
      class="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="club-pitch-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a1a1a" />
          <stop offset="100%" stop-color="#0a0a0a" />
        </linearGradient>
        <radialGradient id="club-pitch-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#de241b" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#de241b" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="280" fill="url(#club-pitch-bg)" />

      <!-- Motion streaks -->
      <path d="M0 40 L120 80 L80 120 L0 90 Z" fill="#de241b" opacity="0.25" />
      <path
        d="M320 20 L400 60 L400 100 L300 70 Z"
        fill="#de241b"
        opacity="0.2"
      />

      <!-- Floodlight -->
      <g transform="translate(24, 20)">
        <path d="M8 0 L16 0 L20 28 L4 28 Z" fill="#2e3236" />
        <path d="M0 28 L24 28 L30 48 L-6 48 Z" fill="#de241b" opacity="0.15" />
        <circle cx="12" cy="8" r="4" fill="#e0e0e0" opacity="0.6" />
      </g>

      <!-- Pitch (perspective) -->
      <g transform="translate(40, 55)">
        <path
          d="M0 160 L160 200 L320 160 L320 40 L0 40 Z"
          fill="#141414"
          stroke="#ffffff"
          stroke-width="1.5"
          opacity="0.9"
        />
        <!-- Center line -->
        <line
          x1="160"
          y1="40"
          x2="160"
          y2="200"
          stroke="#ffffff"
          stroke-width="1"
          opacity="0.5"
        />
        <!-- Center circle -->
        <circle
          cx="160"
          cy="120"
          r="36"
          fill="none"
          stroke="#ffffff"
          stroke-width="1"
          opacity="0.5"
        />
        <circle cx="160" cy="120" r="52" fill="url(#club-pitch-glow)" />
        <!-- Penalty areas -->
        <rect
          x="0"
          y="80"
          width="56"
          height="80"
          fill="none"
          stroke="#ffffff"
          stroke-width="1"
          opacity="0.4"
        />
        <rect
          x="264"
          y="80"
          width="56"
          height="80"
          fill="none"
          stroke="#ffffff"
          stroke-width="1"
          opacity="0.4"
        />
        <!-- Tactical marks -->
        <circle
          cx="80"
          cy="100"
          r="6"
          fill="none"
          stroke="#de241b"
          stroke-width="2"
        />
        <text x="76" y="104" fill="#de241b" font-size="10" font-weight="bold">
          X
        </text>
        <circle
          cx="240"
          cy="140"
          r="6"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
        />
        <text x="236" y="144" fill="#ffffff" font-size="10" font-weight="bold">
          O
        </text>
        <path
          d="M100 150 L140 130 L180 145"
          fill="none"
          stroke="#de241b"
          stroke-width="2"
          marker-end="url(#arrow)"
        />
        <path
          d="M200 90 L220 110 L240 95"
          fill="none"
          stroke="#ffffff"
          stroke-width="1.5"
          opacity="0.7"
        />
        <!-- Logo in center -->
        <circle cx="160" cy="120" r="22" fill="#de241b" />
        <rect x="148" y="108" width="24" height="24" fill="#ffffff" rx="2" />
        <path d="M160 112 L166 120 L160 128 L154 120 Z" fill="#de241b" />
        <circle cx="160" cy="120" r="3" fill="#de241b" />
      </g>
    </svg>
  </div>
</template>
