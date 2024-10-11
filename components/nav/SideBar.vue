<template>
  <nav class="text-sm font-light tracking-wide py-8">
    <NuxtLink to="/" class="flex items-center gap-3">
      <UIcon name="i-lucide-house" class="text-slate-500" />
      <span class="">Home</span>
    </NuxtLink>
  </nav>
  <section class="text-sm font-light tracking-wide py-8 space-y-10">
    <div class="space-y-2">
      <div class="flex items-center justify-between gap-3">
        <h3 class="uppercase text-xs">Team Folders</h3>
        <UIcon
          name="i-heroicons-folder-plus"
          class="text-slate-500 hover:text-slate-800 h-5 w-5 cursor-pointer"
        />
      </div>
      <div v-for="f in folders" class="space-y-1">
        <FolderCard :folder="f" />
      </div>
    </div>
    <div class="flex items-center justify-between gap-3">
      <h3 class="uppercase text-xs">Private</h3>
      <UIcon
        name="i-heroicons-folder-plus"
        class="text-slate-500 hover:text-slate-800 h-5 w-5 cursor-pointer"
      />
    </div>
  </section>
  <footer class="">
    <div class="flex items-center gap-3">
      <UIcon name="i-heroicons-cog" class="text-slate-500" />
      <span class="text-sm">Settings</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { Folder } from "~/lib/api";

const { folders } = defineProps<{
  folders: Folder[];
}>();
</script>
