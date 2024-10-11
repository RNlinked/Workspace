<template>
  <div class="grid grid-cols-8 gap-5 h-screen">
    <section class="col-span-3 bg-slate-100 m-3 rounded-lg p-6 xl:px-10">
      <Logo />
      <nav class="text-xl font-medium mt-40">
        <div v-for="step in setUpSteps" class="group">
          <NuxtLink :to="step.link" class="space-x-3 flex gap-0.5">
            <div class="flex flex-col items-center">
              <UIcon :name="step.icon" class="" />
              <div class="grow rounded-full border-r group-last:hidden" />
            </div>
            <div class="pb-6 -mt-1.5">
              <p>{{ step.title }}</p>
              <p class="text-sm text-neutral-500">
                {{ step.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </nav>
    </section>
    <section class="col-span-5 w-full">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
// const active = window.location.pathname === "/onboarding/new";
const setUpSteps = [
  {
    title: "Create account",
    description: "Provide your email and password",
    link: "/onboarding/new",
    icon: "i-heroicons-user",
  },
  {
    title: "Verify email address",
    description: "Verify your email address to continue",
    link: "/onboarding/verify-email",
    icon: "i-heroicons-envelope",
  },
  {
    title: "Organization details",
    description: "Set up your organization",
    link: "/onboarding/company",
    icon: "i-heroicons-building-office-2",
  },
  {
    title: "Workspaces",
    description: "Set up your organization structure with workspaces and teams",
    link: "/onboarding/workspaces",
    icon: "i-heroicons-squares-2x2",
  },
  {
    title: "Invite your team",
    description: " Invite your team members to collaborating",
    link: "/onboarding/team",
    icon: "i-heroicons-user-group",
  },
];
</script>
