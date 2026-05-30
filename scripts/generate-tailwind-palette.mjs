#!/usr/bin/env node

/**
 * Generate a Tailwind palette (50–950) from a hex color.
 * Uses @smit-io/color-palette (uicolors.app algorithm).
 *
 * Usage:
 *   node scripts/generate-tailwind-palette.mjs #de241b
 *   node scripts/generate-tailwind-palette.mjs de241b --name brand --format css
 */

import { getColorPalette } from '@smit-io/color-palette'

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function parseArgs(argv) {
  const positional = []
  let name = 'primary'
  let format = 'json'

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === '--name' || arg === '-n') {
      name = argv[++i] ?? name
    } else if (arg === '--format' || arg === '-f') {
      format = argv[++i] ?? format
    } else if (arg === '--help' || arg === '-h') {
      printHelp()
      process.exit(0)
    } else if (arg.startsWith('-')) {
      console.error(`Unknown option: ${arg}`)
      printHelp()
      process.exit(1)
    } else {
      positional.push(arg)
    }
  }

  return { hex: positional[0], name, format }
}

function printHelp() {
  console.log(`Usage: node scripts/generate-tailwind-palette.mjs <hex> [options]

Arguments:
  hex                 #RGB, #RRGGBB, or RRGGBB (anchored to nearest shade)

Options:
  -n, --name <name>   Token prefix for CSS output (default: primary)
  -f, --format <fmt>  json | css (default: json)
  -h, --help          Show this help

Algorithm: @smit-io/color-palette (https://uicolors.app)
`)
}

function normalizeHex(input) {
  if (!input) {
    console.error('Error: missing hex color.')
    printHelp()
    process.exit(1)
  }

  let hex = input.trim()
  if (!hex.startsWith('#')) {
    hex = `#${hex}`
  }

  let body = hex.slice(1)
  if (/^[0-9a-fA-F]{3}$/.test(body)) {
    body = body
      .split('')
      .map((c) => c + c)
      .join('')
  }
  if (!/^[0-9a-fA-F]{6}$/.test(body)) {
    console.error(`Error: invalid hex color "${input}".`)
    process.exit(1)
  }

  return `#${body.toLowerCase()}`
}

function generatePalette(hex) {
  const result = getColorPalette(hex)
  const palette = {}

  for (const shade of SHADES) {
    const entry = result.colorMap.get(shade)
    if (entry) {
      palette[shade] = entry.hex
    }
  }

  return { palette, anchor: result.match.number, family: result.name }
}

function formatJson(palette) {
  return `${JSON.stringify(palette, null, 2)}\n`
}

function formatCss(palette, name) {
  const lines = Object.entries(palette).map(
    ([shade, hex]) => `  --color-${name}-${shade}: ${hex};`,
  )
  return `@theme {\n${lines.join('\n')}\n}\n`
}

const { hex, name, format } = parseArgs(process.argv.slice(2))
const normalized = normalizeHex(hex)

try {
  const { palette, anchor, family } = generatePalette(normalized)

  if (format === 'css') {
    process.stdout.write(formatCss(palette, name))
  } else if (format === 'json') {
    process.stdout.write(formatJson(palette))
  } else {
    console.error(`Error: unknown format "${format}". Use json or css.`)
    process.exit(1)
  }

  if (process.env.PALETTE_VERBOSE === '1') {
    console.error(`# anchor: ${anchor} | family: ${family}`)
  }
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('Cannot find module') || message.includes('ERR_MODULE_NOT_FOUND')) {
    console.error(
      'Error: @smit-io/color-palette is not built. Run: node scripts/build-color-palette-dep.mjs',
    )
    process.exit(1)
  }
  console.error(`Error: ${message}`)
  process.exit(1)
}
