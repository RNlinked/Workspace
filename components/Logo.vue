<script setup lang="ts">
const authenticated = ref(false);
</script>

<template>
  <NuxtLink
    class="flex items-center gap-2"
    :to="!authenticated ? '/onboarding' : '/'"
  >
    <img src="/logo-cellery.png" class="h-8 w-auto" alt="Logo" />
    <p class="font-medium text-lg">
      RNL
      <span>Workspaces</span>
    </p>
  </NuxtLink>
</template>
