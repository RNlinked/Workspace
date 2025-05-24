<script setup lang="ts">
const date = new Date();
const year = date.getFullYear();

const authenticated = ref(false);
</script>

<template>
  <div class="min-h-[100dvh] grid grid-rows-[auto-1fr-auto]">
    <header class="bg-white shadow-sm h-fit">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div
          class="w-full py-4 flex items-center justify-between border-b lg:border-none"
        >
          <div class="flex items-center gap-10">
            <Logo />

            <div class="hidden lg:flex items-center gap-3">
              <NuxtLink class="text-gray-500 hover:text-gray-900">
                Features
              </NuxtLink>

              <NuxtLink class="text-gray-500 hover:text-gray-900"
                >About</NuxtLink
              >

              <NuxtLink class="text-gray-500 hover:text-gray-900"
                >Contact</NuxtLink
              >
            </div>
          </div>

          <div class="flex items-center justify-end gap-4">
            <NuxtLink to="#request-demo" class="btn btn-secondary text-gray-500"
              >Request a demo</NuxtLink
            >
            <NuxtLink to="/signin" class="btn btn-secondary pl-4 border-l"
              >Log In</NuxtLink
            >
            <NuxtLink
              to="/onboarding/new"
              class="btn btn-primary px-4 py-1.5 text-base"
              >Get Started</NuxtLink
            >
          </div>
        </div>
      </nav>
    </header>

    <main class="">
      <slot />
    </main>

    <footer class="bg-gray-50">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-base text-gray-400">
          &copy; {{ year }} RNL Healthcare Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
