<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="relative flex-1 overflow-x-clip">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
