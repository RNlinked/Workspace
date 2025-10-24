<script setup lang="ts">
function handleSubmit() {
  navigateTo("/onboarding/invite-members");
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
        Step 4 of 5
      </p>
      <Logo />
      <AppUiHeading1
        title="Define your organization's structure"
      />
      <section class="pb-6 space-y-4">
        <AppUiHeading2
          title="Teams/Departments"
          description="Add the teams or departments within your organization."
        />
        <UModal title="Add Team">
          <UButton
            icon="solar:map-point-hospital-outline"
            label="Add Team"
            variant="outline"
            color="neutral"
            size="xl"
            class="p-3"
          />
          <template #body>
            <div class="space-y-4">
              <UFormField label="Team name" required>
                <UInput class="w-full" size="xl" required placeholder="Estuary Ward" />
              </UFormField>
              <UFormField label="Location" hint="Optional" help="Leave blank if this is a cross-site team">
                <USelect
                  :items="['Brentwood Community Hospital', 'Lakeside Medical Center']"
                  class="w-full"
                  size="xl"
                  placeholder="Select location"
                />
              </UFormField>
              <UFormField label="Description">
                <UInput class="w-full" size="xl" placeholder="e.g. Oncology" />
              </UFormField>

              <UButton
                type="submit"
                class="mt-4 w-full text-center"
                size="xl"
                square
                block
              >
                Save Team
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
