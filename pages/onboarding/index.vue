<template>
  <section class="max-w-5xl mx-auto text-center space-y-10 py-24">
    <h1
      class="text-4xl tracking-tigh font-bold text-gray-900 sm:text-5xl md:text-6xl"
    >
      <span class="block">Healthcare Knowledge Management</span>
      <span class="block text-indigo-600">Simplified</span>
    </h1>
    <p
      class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl"
    >
      Empower your healthcare organization with our powerful knowledge base and
      document management system. Share knowledge, collaborate efficiently, and
      ensure compliance.
    </p>

    <div class="mt-5 sm:mt-8 flex justify-center gap-6">
      <NuxtLink to="/onboarding/new" class="btn btn-primary px-5 py-2">
        Get Started
        <UIcon name="i-heroicons-arrow-right" class="h-5 w-5 text-white" />
      </NuxtLink>

      <NuxtLink
        to="#request-demo"
        class="btn btn-secondary px-5 py-2 bg-blue-100/40 text-blue-900 hover:bg-blue-100/70"
      >
        Request a demo
      </NuxtLink>
    </div>
  </section>

  <section
    class="bg-gray-50 p-10 rounded-lg space-y-14 max-w-7xl mx-4 sm:mx-6 xl:mx-auto my-14"
  >
    <div class="text-center max-w-3xl mx-auto space-y-5 pt-5">
      <h2 class="text-3xl font-semibold tracking-tight">
        All your healthcare knowledge, in one place.
      </h2>
      <p class="text-gray-500">
        Policies, procedures and documents in one easily accessible location.
        Designed to equip teams with the tools to create, modify and maintain
        documents relevant to their daily workflow.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      <div class="space-y-2">
        <span class="text-blue-500 bg-blue-100/60 p-3 rounded-lg">
          <UIcon name="i-lucide-book-open" class="w-8 h-8" />
        </span>
        <h3 class="text-lg font-medium">Comprehesive Knowledge Base</h3>

        <p class="text-base text-gray-500">
          Centralize and organize your organization's knowledge for easy access
          and sharing.
        </p>
      </div>
      <div class="space-y-2">
        <span class="text-blue-500 bg-blue-100/60 p-3 rounded-lg">
          <UIcon name="i-lucide-users" class="w-8 h-8" />
        </span>

        <h3 class="text-lg leading-6 font-medium">Document Management</h3>
        <p class="mt-2 text-base text-gray-500">
          Securely store and manage important healthcare documents with version
          control.
        </p>
      </div>
      <div class="space-y-2">
        <span class="text-blue-500 bg-blue-100/60 p-3 rounded-lg">
          <UIcon name="i-lucide-file-text" class="w-8 h-8" />
        </span>
        <h3 class="text-lg leading-6 font-medium">Team Collaboration</h3>
        <p class="mt-2 text-base text-gray-500">
          Foster teamwork and knowledge sharing among healthcare professionals
          with collaborative tools.
        </p>
      </div>
    </div>
  </section>

  <section>
    <!-- CTA Section  -->
    <div class="bg-indigo-700">
      <div
        class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      >
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block"
            >Ready to transform your healthcare knowledge management?</span
          >
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">
          Request a demo today and see how our platform can streamline your
          organization's knowledge sharing and document management.
        </p>
        <form class="mt-8 sm:flex justify-center">
          <input
            id="request-demo"
            type="email"
            placeholder="Enter your email"
            class="w-full sm:max-w-xs input"
            required
          />
          <Button
            type="submit"
            size="lg"
            class="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Request Demo
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "onboarding",
});
</script>
