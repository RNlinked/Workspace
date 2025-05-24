<script setup lang="ts">
const router = useRouter();
const currentRoute = router.currentRoute;

const getActiveLink = (link: string) => {
  const active = currentRoute.value.fullPath === link;

  return active;
};
// const activeLink = window.location.pathname;
import { setUpSteps } from "~/lib/constants";
</script>

<template>
  <div class="grid grid-cols-9 gap-5 h-screen">
    <section class="col-span-3 bg-gray-100/40 m-3 rounded-lg p-6 xl:px-10">
      <Logo />
      <nav class="my-40">
        <div
          v-for="step in setUpSteps"
          :class="`group ${getActiveLink(step.link) ? '' : 'opacity-40'} `"
        >
          <NuxtLink :to="step.link" class="space-x-3 flex">
            <div class="flex flex-col items-center">
              <span class="p-2 rounded-lg bg-white border-1">
                <UIcon :name="step.icon" class="w-4 h-4" />
              </span>
              <div class="grow border-r group-last:hidden" />
            </div>
            <div class="pb-7">
              <p>{{ step.title }}</p>
              <p class="text-sm text-neutral-500">
                {{ step.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </nav>
    </section>
    <section class="col-span-6 w-full">
      <slot />
    </section>
  </div>
</template>
