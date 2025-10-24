<script setup lang="ts">
function handleSubmit() {
  navigateTo("/mse");
}
</script>

<template>
  <div class="p-12">
    <UForm class=" max-w-md mx-auto w-full my-20 space-y-5" @submit="handleSubmit">
      <Logo />
      <AppUiHeading1
        title=" Let's set up your profile"
      />

      <UFormField label="Full name" required>
        <UInput class="w-full" size="xl" required />
      </UFormField>
      <UFormField label="Job title" required>
        <UInput class="w-full" size="xl" required />
      </UFormField>
      <UFormField description="Adding your profile photo helps your teammates recorgnize you more easily" class="space-y-3">
        <template #label>
          Profile picture <span class="text-sm text-neutral-500">(optional)</span>
        </template>
        <UAvatar
          size="3xl" class="rounded-lg size-28" icon="solar:user-bold-duotone" :ui="{
            icon: 'size-24',
          }"
        />
        <div class="space-y-2">
          <UInput type="file" size="sm" icon="i-lucide-image-plus" class="my-3" />
        </div>
      </UFormField>
      <UButton type="submit" class="mt-4 w-full text-center" size="xl" square block>
        Continue
      </UButton>
    </UForm>
  </div>
</template>
