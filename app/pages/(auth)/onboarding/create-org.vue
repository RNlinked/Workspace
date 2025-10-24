<script setup lang="ts">
function handleSubmit() {
  navigateTo("/onboarding/add-locations");
}
</script>

<template>
  <div class="p-12">
    <UButton
      icon="solar:arrow-left-linear"
      label="Back" variant="ghost"
      color="neutral"
      size="xl"
      @click="$router.back"
    />
    <UForm class=" max-w-md mx-auto w-full my-20 space-y-5" @submit="handleSubmit">
      <p class="text-sm text-muted">
        Step 2 of 5
      </p>
      <Logo />
      <h1 class="font-semibold text-3xl">
        Set up your organization
      </h1>
      <UFormField label="Organization name">
        <UInput class="w-full" size="xl" />
      </UFormField>
      <UFormField
        label="Organization Slug"
        description="This will be used to create your workspace URL.
Choose something short, unique, and easy to remember (letters, numbers, and hyphens only)."
      >
        <span class="flex items-center gap-2">

          app.rnl.work/
          <UInput class="w-full" size="xl" placeholder="organization-slug" />
        </span>
      </UFormField>
      <UFormField label="Industry">
        <USelect :items="['Technology', 'Finance', 'Healthcare']" class="w-full" size="xl" />
      </UFormField>
      <UFormField label="Organization logo">
        <div class="flex items-end gap-5 input">
          <UAvatar size="3xl" class="rounded-lg size-20" />
          <div class="space-y-2">
            <p class="text-sm text-neutral-500">
              For the best results, upload a logo with a transparent background.
            </p>
            <UInput type="file" size="sm" icon="i-lucide-image-plus" />
          </div>
        </div>
      </UFormField>

      <UButton type="submit" class="mt-4 w-full text-center" size="xl" square block>
        Create Organization
      </UButton>
    </UForm>
  </div>
</template>

<style scoped>

</style>
