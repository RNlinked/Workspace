<script setup lang="ts">
function handleSubmit() {
  navigateTo("/mse");
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
    <main class=" max-w-md mx-auto w-full my-20 space-y-5">
      <p class="text-sm text-muted">
        Step 5 of 5
      </p>
      <Logo />
      <AppUiHeading1
        title="Invite your team members"
      />
      <section class="pb-6 space-y-4">
        <AppUiHeading2
          title="Add Members"
          description="You can always invite more members later."
        />
        <UModal title="Invite Members">
          <UButton
            icon="solar:user-plus-outline"
            label="Invite Members"
            variant="outline"
            color="neutral"
            size="xl"
            class="p-3"
          />
          <template #body>
            <div class="space-y-4">
              <UFormField label="Member emails" required>
                <UInput
                  class="w-full"
                  size="xl"
                  required
                  placeholder="e.g. john@example.com"
                />
              </UFormField>
              <UFormField label="Invite as" required>
                <USelect
                  :items="['Admin', 'Member', 'Guest', 'Guest - view only']"
                  class="w-full"
                  size="xl"
                  required
                  placeholder="Select role"
                />
              </UFormField>
              <UFormField label="Team assignment" hint="Optional">
                <USelect
                  :items="['Estuary Ward', 'Oncology', 'Pediatrics']"
                  class="w-full"
                  size="xl"
                  placeholder="Select team"
                />
              </UFormField>

              <UButton type="submit" class="mt-4 w-full text-center" size="xl" square block>
                Send Invites
              </UButton>
            </div>
          </template>
        </UModal>
      </section>
      <UButton
        type="button"
        class="mt-4 w-full text-center"
        size="xl"
        square
        block
        @click="handleSubmit"
      >
        Continue
      </UButton>
    </main>
  </div>
</template>
