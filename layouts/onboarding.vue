<template>
  <main class="min-h-[100dvh] grid grid-rows-[auto-1fr-auto]">
    <nav
      class="h-20 px-10 py-3 max-w-7xl mx-auto flex items-center justify-between w-full"
    >
      <div class="flex items-center gap-3">
        <img src="/logo-cellery.png" height="40" width="40" alt="Logo" />
        <p class="font-semibold">
          RNL <br />
          <span>Workspace</span>
        </p>
      </div>
      <div class="flex items-center justify-end gap-3">
        <NuxtLink to="/signin" class="btn btn-secondary">Log In</NuxtLink>
        <NuxtLink to="/onboarding/new" class="btn btn-primary"
          >Get Started</NuxtLink
        >
      </div>
    </nav>
    <div>
      <slot />
    </div>
    <footer className=" text-center space-x-4 p-8 ">
      <button>Privacy Policy</button>
      <button>Terms & conditions</button>
    </footer>
  </main>
</template>

<script setup lang="ts"></script>
