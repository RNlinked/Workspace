<template>
  <nav
    class="flex justify-between items-center px-6 py-3 border-b sticky top-0 bg-background z-20"
  >
    <button @click="router.back()" v-if="currentRoute.fullPath !== '/'">
      <UIcon name="i-heroicons-arrow-long-left" />
    </button>
    <div v-if="centerProp === 'toolbar'">
      <Toolbar />
    </div>
    <div
      v-else
      class="flex items-center gap-3 basis-3/4 max-w-2xl mx-auto border p-1.5 rounded-xl text-sm text-slate-700 font-light"
    >
      <span class="flex items-center flex-nowrap gap-2 border-r pr-1">
        <UIcon name="i-lucide-search" class="text-slate-500" />
        <p>
          {{ currentWorkspace }}
        </p>
      </span>
      <input type="text" class="focus:outline-none" />
    </div>
    <NuxtLink to="/profile" class="font-medium text-lg">
      Hello Joseph!
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import Toolbar from "../Editor/Toolbar.vue";

const router = useRouter();
const currentRoute = router.currentRoute;

const { currentWorkspace, centerProp } = defineProps<{
  centerProp?: "toolbar" | "search";
  currentWorkspace: String | undefined;
}>();
</script>
