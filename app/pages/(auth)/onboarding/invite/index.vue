<script setup lang="ts">
function handleSubmit() {
  navigateTo("/onboarding/invite/user-profile");
}
</script>

<template>
  <main class=" max-w-lg mx-auto w-full my-20 space-y-5">
    <Logo />
    <AppUiHeading1
      title="You have been invited to join MSE's workspace"
      description="Accept the invitation to start collaborating with your team."
    />
    <AppUiHeading1
      title="Invite already accepted"
      description="You have already accepted this invitation. Please log in to access the workspace."
    />
    <UButton
      icon="solar:arrow-left-linear"
      label="Back" variant="ghost"
      color="neutral"
      size="xl"
      @click="$router.back"
    />
    <UButton
      type="submit"
      class="mt-4 w-full text-center"
      size="xl"
      square
      block
      @click="handleSubmit"
    >
      Accept Invitation
    </UButton>
  </main>
</template>
