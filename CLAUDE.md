# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.


# Project Overview

This project is a Nuxt 4 application built with:

- Vue 3
- TypeScript
- Nuxt Content
- Tailwind CSS
- Pnpm

The architecture must prioritize:

- Maintainability
- Scalability
- Readability
- Reusability
- Strong typing
- SSR-first patterns
- Composition-first development

All code should remain easy to refactor and easy to reason about.

---

# Core Principles

## General Rules

- Always use TypeScript
- Always use Composition API
- Always use `<script setup lang="ts">`
- Always use a **single root element** per component template (any semantic tag — not necessarily a `<div>`). Required for Nuxt page transitions on **pages**; add a wrapper only when the template would otherwise have multiple roots (e.g. `v-if` / `v-else` siblings)
- Prefer explicit code over magic abstractions
- Prefer readability over cleverness
- Avoid duplicated logic
- Favor composition over inheritance
- Keep files focused and single-purpose
- Avoid hidden side effects
- Prefer predictable patterns over micro-optimizations

---

# Vue Single File Component Rules

## Mandatory Block Order

Always use this exact order in `.vue` files:

```vue
<template>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
```

Never place `<script>` before `<template>`.

---

## Template Rules

Templates must stay clean and readable.

### Avoid

- large inline expressions
- nested ternaries
- business logic in templates
- deeply nested conditional rendering
- repeated utility class groups

### Prefer

- computed properties
- extracted methods
- sub-components
- composables
- semantic HTML

## Script Rules

### Prefer

- small focused composables
- typed props and emits
- computed properties over watchers
- early returns
- explicit naming

### Avoid

- massive setup blocks
- deeply nested reactive logic
- implicit side effects
- unnecessary watchers

---

## Style Rules

### Preferred Styling Order

1. Tailwind utilities
2. `@apply`
3. Scoped CSS
4. Global CSS only if truly necessary

### Avoid

- large style sections
- unscoped component CSS
- `!important`
- deeply nested selectors
- arbitrary values unless necessary

---

# Component Architecture

## Break Down Complex Components

Complex components MUST be split into sub-components.

A component should be decomposed if it:

- has multiple responsibilities
- contains multiple visual sections
- contains repeated UI patterns
- becomes difficult to scan
- contains excessive conditional rendering

---

## Smart vs Dumb Components

### Smart Components

Responsible for:

- data fetching
- orchestration
- business logic
- composable coordination
- state handling

### Dumb Components

Responsible for:

- presentation
- rendering props
- emitting events
- UI interactions

Prefer dumb/presentational components whenever possible.

---

## Preferred Component Structure

```txt
components/
├── ui/
├── layout/
├── navigation/
├── content/
├── blog/
├── docs/
└── shared/
```

---

## Feature-Based Structure

Large features should be grouped together.

Example:

```txt
components/
└── blog/
    ├── BlogCard.vue
    ├── BlogGrid.vue
    ├── BlogHeader.vue
    ├── BlogSidebar.vue
    └── BlogPagination.vue
```

---

# Nuxt Rules

## Prefer Nuxt APIs

Always prefer Nuxt-native utilities over custom implementations.

Use:

- `useFetch`
- `useAsyncData`
- `useLazyAsyncData`
- `useState`
- `useRoute`
- `useRouter`
- `navigateTo`
- `useRuntimeConfig`
- `defineNuxtRouteMiddleware`
- `createError`
- `showError`

Avoid unnecessary external libraries.

---

## SSR First

Prefer SSR-compatible solutions by default.

Avoid:

- browser-only APIs during SSR
- unnecessary client-side fetching
- hydration mismatches
- accessing `window` without guards

Use:

```ts
if (import.meta.client) {
  // client-only logic
}
```

when necessary.

---

# Nuxt Content Rules

## Content Structure

Preferred structure:

```txt
content/
├── blog/
├── docs/
├── pages/
├── snippets/
└── changelog/
```

---

## Markdown Standards

- Use Markdown whenever possible
- Keep frontmatter consistent
- Use predictable content schemas
- Keep markdown content presentation-focused
- Avoid business logic inside markdown files

---

## Frontmatter Example

```md
---
title: Getting Started
description: Introduction page
date: 2026-01-01
draft: false
tags:
  - nuxt
  - content
---

# Page Content
```

---

## Content Querying

Prefer:

```ts
const { data } = await useAsyncData('articles', () =>
  queryCollection('blog').all()
)
```

Avoid:

- duplicated queries
- querying deeply inside child components
- inconsistent query patterns

---

## Content Components

Reusable markdown sections should become components.

Example markdown:

```md
::callout
Important information
::
```

Should map to reusable Vue components.

---

# Tailwind CSS Rules

## Tailwind First

Always prefer Tailwind utilities over custom CSS.

Preferred order:

1. Tailwind utilities
2. Extracted components
3. `@apply`
4. Scoped CSS

---

## Utility Class Guidelines

### Prefer

```html
<div class="flex items-center gap-4 rounded-xl border p-6">
```

### Avoid

- unreadable utility explosions
- massive inline class strings
- unnecessary arbitrary values
- duplicated utility patterns

---

## Repeated Patterns

Repeated utility groups should become:

- components
- utility abstractions
- `@apply` classes

Do not duplicate large utility combinations across files.

---

# Composables

## Rules

- Place reusable logic in `/composables`
- Prefix composables with `use`
- Keep composables narrowly focused
- Avoid hidden mutations
- Avoid massive composables

---

## Good Example

```ts
export const useArticles = () => {
  return useAsyncData('articles', () =>
    queryCollection('blog').all()
  )
}
```

---

# State Management

## Preferred State Hierarchy

1. Local component state
2. Shared composables with `useState`
3. Pinia only when truly necessary

Avoid premature global state.

---

# Data Fetching

## Preferred Patterns

Use:

```ts
await useAsyncData()
```

or:

```ts
await useFetch()
```

---

## Avoid

- fetching inside `onMounted` unless necessary
- duplicated API calls
- client-only fetching when SSR is possible
- inconsistent data-fetching patterns

---

# TypeScript Standards

## Rules

- Never use `any` unless absolutely unavoidable
- Prefer explicit interfaces/types
- Centralize shared types
- Use inference when obvious
- Strongly type props and composables

---

## Interface Example

```ts
interface Article {
  title: string
  slug: string
  description?: string
}
```

---

# Props & Emits

## Props

Always type props.

```ts
const props = defineProps<{
  title: string
  description?: string
}>()
```

---

## Emits

Always type emits.

```ts
const emit = defineEmits<{
  submit: []
  select: [id: string]
}>()
```

---

# Folder Structure

Preferred structure:

```txt
app/
assets/
components/
composables/
content/
layouts/
middleware/
pages/
plugins/
public/
server/
types/
utils/
```

---

# Naming Conventions

## Components

Use PascalCase:

```txt
BlogCard.vue
UserProfileMenu.vue
ContentSidebar.vue
```

---

## Composables

Use camelCase with `use` prefix:

```txt
useArticles.ts
useNavigation.ts
useTheme.ts
```

---

## Utility Files

Use descriptive names:

```txt
formatDate.ts
parseMarkdown.ts
calculateReadingTime.ts
```

---

# Accessibility

## Requirements

- Use semantic HTML
- Always provide alt text
- Ensure keyboard navigation works
- Use proper button elements
- Avoid clickable divs
- Maintain visible focus states
- Use accessible labels

Accessibility is mandatory.

---

# Performance Rules

## General Performance

- Lazy load heavy components
- Prefer route-level code splitting
- Avoid unnecessary watchers
- Prefer computed over watch when possible
- Avoid unnecessary reactivity
- Use lazy hydration when appropriate

---

## Images

- Prefer optimized images
- Use Nuxt Image when applicable
- Always specify dimensions when possible

---

# Error Handling

## Rules

- Never silently swallow errors
- Handle async failures gracefully
- Use fallback states
- Use Nuxt error boundaries when appropriate
- Surface meaningful developer errors

---

# Code Review Checklist

Before writing or merging code, ask:

- Is this component too large?
- Should this become a composable?
- Is this reusable elsewhere?
- Is this SSR-safe?
- Is this accessible?
- Is this strongly typed?
- Is this easy to understand?
- Is this easy to test?
- Is this unnecessarily abstract?

---

# Testing Mindset

Code should be:

- predictable
- composable
- isolated
- testable
- easy to mock

Avoid tightly coupled logic.

---

# Final Philosophy

The codebase should feel:

- modular
- predictable
- scalable
- readable
- maintainable
- easy to refactor

Long-term maintainability is more important than short-term speed.