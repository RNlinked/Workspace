<template>
  <div>
    <NuxtLink
      :to="`/folder/${folder.id}`"
      class="flex justify-between gap-3 hover:bg-gray-300/40 p-2 rounded-md group"
    >
      <div class="flex items-center gap-3">
        <UIcon :name="icons(folder.type) ?? ''" class="w-4 h-4" />
        <p class="truncate">{{ folder.name }}</p>
      </div>
      <div class="hidden group-hover:inline">
        <UIcon
          name="i-heroicons-folder-plus"
          class="text-slate-500 h-4 w-4 cursor-pointer"
        />
      </div>
    </NuxtLink>
    <div v-if="folder.children" class="pl-5">
      <div v-for="f in folder.children" :key="f.id">
        <FolderCard v-if="f.type === 'Folder'" :folder="f" :key="f.id" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { icons } from "~/lib/api";
import type { Folder } from "~/lib/api";

const { folder } = defineProps<{
  folder: Folder;
}>();
</script>
