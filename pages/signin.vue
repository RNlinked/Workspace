<template>
  <div class="max-w-md mx-auto my-48 text-center">
    <h1 class="font-semibold text-2xl">Welcome Back.</h1>
    <form class="flex flex-col gap-4 mt-8 w-full px-4">
      <FormGroup
        label="Email"
        name="email"
        type="email"
        required
        placeholder="Work Email"
        errorMessage="email is required"
      />
      <FormGroup
        label="Password"
        name="password"
        type="password"
        required
        placeholder="Password"
        errorMessage="password is required"
      />
      <Button>Sign In</Button>
    </form>

    <div>{{ creds }}</div>

    <p class="text-slate-500 py-4">
      Don't have an account?
      <NuxtLink to="/onboarding/new" class="text-primary">Create One</NuxtLink>
    </p>

    <p class="text-slate-500 py-4">
      Forgot your password?
      <NuxtLink to="/onboarding/forgot" class="text-primary">Reset it</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
const { data: creds } = useFetch("http://localhost:8081/auth/login");
definePageMeta({
  layout: "onboarding",
});
</script>
