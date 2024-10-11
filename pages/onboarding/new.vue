<template>
  <div class="max-w-md mx-auto my-48 text-center">
    <h1 class="font-semibold text-2xl">Create your account</h1>
    <h2 class="text-lg text-slate-500">Start colaborating with your team</h2>

    <form class="flex flex-col gap-4 mt-8 w-full px-4">
      <input type="text" placeholder="Full Name" class="input" />
      <input type="email" placeholder="Work Email" class="input" />
      <input type="password" placeholder="Password" class="input" />
      <NuxtLink
        to="/onboarding/verify-email"
        class="btn btn-primary text-center"
        >Sign Up</NuxtLink
      >

      <div class="flex items-center justify-center gap-2">
        <p class="text-slate-500">Already have an account?</p>
        <NuxtLink to="/signin" class="text-primary">Log In</NuxtLink>
      </div>

      <div class="my-4 text-center">
        <p class="text-slate-500">
          By signing up, you agree to our
          <NuxtLink to="/terms" class="text-primary font-semibold"
            >terms of service</NuxtLink
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "setup",
});
</script>
