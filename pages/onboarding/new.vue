<template>
  <div
    class="max-w-md mx-auto my-48 text-center flex items-center flex-col gap-4"
  >
    <span class="flex flex-col items-center gap-2">
      <img src="/logo-cellery.png" class="h-8 w-auto" alt="Logo" />
      <h1 class="font-medium text-2xl">Create your account</h1>
      <h2 class="text-gray-500">Start colaborating with your team</h2>
    </span>

    <form class="flex flex-col gap-4 mt-8 w-full px-4">
      <FormGroup
        label="Name"
        name="full_name"
        type="text"
        required
        placeholder="Full Name"
        errorMessage="Full name is required"
      />
      <FormGroup
        label="Email"
        name="email"
        type="email"
        required
        placeholder="Work Email"
        errorMessage="Email is required"
      />
      <FormGroup
        label="Password"
        name="password"
        type="password"
        required
        placeholder="Password"
        errorMessage="Password is required"
      />

      <button type="submit" class="btn btn-primary text-center py-2.5">
        Sign Up
      </button>

      <p class="text-neutral-500">
        Already have an account?
        <NuxtLink to="/signin" class="text-primary">Log In</NuxtLink>
      </p>

      <p class="text-gray-500">
        By signing up, you agree to our
        <NuxtLink to="/terms" class="text-primary font-semibold"
          >terms of service</NuxtLink
        >
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "setup",
});
</script>
