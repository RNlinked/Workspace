<template>
  <div class="max-w-md mx-auto my-52">
    <h1 class="font-semibold text-2xl text-center">Set up your organization</h1>
    <form class="flex flex-col gap-8 mt-8 w-full px-4">
      <label class="space-y-2">
        <h3 class="font-medium">Logo</h3>
        <div class="flex items-end gap-5 input">
          <UAvatar size="3xl" class="rounded-lg" />
          <div class="space-y-2">
            <p class="text-sm text-neutral-500">
              For the best results, upload a logo with a transparent background.
            </p>
            <UInput type="file" size="sm" icon="i-lucide-image-plus" />
          </div>
        </div>
      </label>

      <label class="space-y-2">
        <h3 class="font-medium">Orgnization Name</h3>
        <UInput type="text" placeholder="Orgnization Name" class="" />
      </label>

      <label class="space-y-2">
        <h3 class="font-medium">Orgnization SIze</h3>
        <URadioGroup v-model="selected" :options="options" class="input" />
      </label>
      <NuxtLink to="/onboarding/workspaces" class="btn btn-primary text-center"
        >Next</NuxtLink
      >
    </form>
  </div>
</template>

<script setup lang="ts">
const selected = ref("");

const options = [
  {
    value: "tiny",
    label: "1-9",
  },
  {
    value: "small",
    label: "10-99",
  },
  {
    value: "medium",
    label: "100-999",
  },
  {
    value: "large",
    label: "1000+",
  },
];

definePageMeta({
  layout: "setup",
});
</script>
