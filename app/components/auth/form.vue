<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import * as z from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

type Schema = z.infer<typeof schema>;
const auth = useAuthStore();
const { signInFields: fields, providers } = auth;

function onSubmit(payload: FormSubmitEvent<Schema>) {
  if (!fields.some(f => f.name === "otp")) {
    fields.push({
      name: "otp",
      type: "otp" as const,
      label: "OTP",
      length: 6,
      placeholder: "○",
      description: "Enter the one-time password we sent to your email.",
      required: true,
    });
  }
  else {
    console.warn("OTP verified, sign-in successful. ", payload);
    navigateTo("/onboarding/user-profile");
  }
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 py-20">
    <UPageCard class="w-full max-w-sm py-5" variant="naked">
      <UAuthForm
        :schema="schema"
        :submit="{
          size: 'xl',
          square: true,
          type: 'submit',
        }"
        title="Create Your Account"
        icon="i-lucide-user"
        :fields="fields"
        :providers="providers"
        @submit="onSubmit"
      />
    </UPageCard>
  </div>
</template>
