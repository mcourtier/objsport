<template>
  <div class="min-h-screen">
    <div
      class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 p-4 pt-0 md:p-5 lg:flex-row lg:gap-5 lg:p-6"
    >
      <AppNav />

      <main class="relative min-w-0 flex-1">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
