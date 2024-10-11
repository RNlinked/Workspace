<template>
  <div class="max-w-md mx-auto my-48 text-center">
    <h1 class="font-semibold text-2xl">Welcome Back.</h1>
    <form class="flex flex-col gap-4 mt-8 w-full px-4">
      <input type="email" placeholder="Work Email" class="input" />
      <input type="password" placeholder="Password" class="input" />
      <NuxtLink
        to="/onboarding/verify-email"
        class="btn btn-primary text-center"
        >Sign In</NuxtLink
      >
    </form>

    <div class="flex items-center justify-center gap-2 py-4">
      <p class="text-slate-500">Don't have an account?</p>
      <NuxtLink to="/onboarding/new" class="text-primary">Create One</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
});
</script>
