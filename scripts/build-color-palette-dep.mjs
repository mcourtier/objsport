#!/usr/bin/env node

/**
 * @smit-io/color-palette is installed from GitHub but only publishes `dist/`,
 * which is not in the repo. Build it once into node_modules after install.
 */

import { execSync } from 'node:child_process'
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pkgDir = path.join(root, 'node_modules/@smit-io/color-palette')
const distEntry = path.join(pkgDir, 'dist/index.js')

if (existsSync(distEntry)) {
  process.exit(0)
}

const cacheDir = path.join(root, '.cache/smit-io-color-palette')
const srcDir = path.join(cacheDir, 'color-palette-main')

mkdirSync(path.dirname(cacheDir), { recursive: true })

if (!existsSync(path.join(srcDir, 'package.json'))) {
  rmSync(cacheDir, { recursive: true, force: true })
  mkdirSync(cacheDir, { recursive: true })
  execSync(
    'curl -sL https://codeload.github.com/smit-io/color-palette/tar.gz/main | tar xz -C .',
    { cwd: cacheDir, stdio: 'inherit' },
  )
}

execSync('pnpm install', { cwd: srcDir, stdio: 'inherit' })
execSync('pnpm run build', { cwd: srcDir, stdio: 'inherit' })

mkdirSync(path.join(pkgDir, 'dist'), { recursive: true })
cpSync(path.join(srcDir, 'dist'), path.join(pkgDir, 'dist'), { recursive: true })
