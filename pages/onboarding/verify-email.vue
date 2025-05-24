<template>
  <div class="max-w-md mx-auto my-48 text-center space-y-5">
    <span class="flex flex-col items-center gap-2">
      <img src="/logo-cellery.png" class="h-8 w-auto my-2" alt="Logo" />
      <h1 class="font-semibold text-2xl">Verify your email</h1>
      <p class="text-lg text-slate-500">
        Please enter the 6 digit code sent to your email
      </p>
    </span>
    <form class="text-center flex flex-col items-center gap-5 py-6">
      <PinInput
        id="pin-input"
        v-model="value"
        placeholder="-"
        @complete="handleComplete"
      >
        <PinInputGroup>
          <PinInputInput v-for="(id, index) in 6" :key="id" :index="index" />
        </PinInputGroup>
      </PinInput>
      <NuxtLink
        to="/onboarding/company"
        class="btn btn-primary text-center py-2 px-6"
        >Verify</NuxtLink
      >
    </form>

    <div class="flex items-center justify-center gap-2">
      <p class="text-slate-500">Didn't get the code?</p>
      <NuxtLink to="/onboarding/verify-email" class="text-primary"
        >Click to resend</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const value = ref<string[]>([]);
const handleComplete = (e: string[]) => alert(e.join(""));

definePageMeta({
  layout: "setup",
});
</script>
