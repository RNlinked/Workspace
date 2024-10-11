<template>
  <div class="max-w-3xl mx-auto text-center space-y-10 py-48">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
      Centralized
      <span class="text-nowrap underline">Knowledge-base</span> system for
      healthcare organizations
    </h1>

    <h3 class="text-base sm:text-lg md:text-xl">
      Policies, procedures and documents in one easily accessible location.
      Designed to equip teams with the tools to create, modify and maintain
      documents relevant to their daily workflow.
    </h3>

    <NuxtLink to="/onboarding/new" class="btn btn-primary">
      Get Started
      <UIcon name="i-heroicons-arrow-long-right" class="h-6 w-6 text-white" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
});
</script>
