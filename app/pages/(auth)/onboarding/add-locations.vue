<script setup lang="ts">
function handleSubmit() {
  navigateTo("/onboarding/add-teams");
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
        Step 3 of 5
      </p>
      <Logo />
      <AppUiHeading1
        title="Define your organization's structure"
      />

      <section class="pb-6 space-y-4">
        <AppUiHeading2
          title="Locations/Sites"
          description="Each location represents a physical site or hospital."
        />
        <UModal title="Add location">
          <UButton
            icon="solar:map-point-hospital-outline"
            label="Add Location"
            variant="outline"
            color="neutral"
            size="xl"
            class="p-3"
          />
          <template #body>
            <div class="space-y-4">
              <UFormField label="Location name" required>
                <UInput class="w-full" size="xl" required placeholder="Brentwood Community Hospital" />
              </UFormField>
              <UFormField label="Location code" hint="Optional">
                <UInput class="w-full" size="xl" placeholder="e.g. BRCH" />
              </UFormField>
              <UFormField label="Address">
                <UInput class="w-full" size="xl" placeholder="123 Main St, Brentwood" />
              </UFormField>
              <UButton type="submit" class="mt-4 w-full text-center" size="xl" square block>
                Save Location
              </UButton>
            </div>
          </template>
        </UModal>
      </section>

      <UButton type="submit" class="mt-4 w-full text-center" size="xl" square block>
        Continue
      </UButton>
    </UForm>
  </div>
</template>
