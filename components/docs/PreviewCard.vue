<template>
  <div
    class="w-40 h-40 flex flex-col overflow-hidden bg-white shadow rounded-lg"
  >
    <div class="h-24 flex items-center justify-center bg-gray-100 p-2">
      <component
        v-if="!preview"
        :is="icon"
        :class="iconColor"
        class="h-6 w-6"
      />
      <img
        v-else
        :src="preview || '/placeholder.svg'"
        :alt="title"
        class="max-w-full max-h-full object-contain"
      />
    </div>
    <div class="p-2 text-center truncate text-sm" :title="title">
      {{ title }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { FileTextIcon, FolderIcon, UsersIcon } from "lucide-vue-next";

const props = defineProps({
  title: String,
  type: String,
  preview: String,
});

const icon = computed(() => {
  switch (props.type) {
    case "document":
      return FileTextIcon;
    case "policy":
      return FolderIcon;
    case "team":
      return UsersIcon;
    default:
      return FileTextIcon;
  }
});

const iconColor = computed(() => {
  switch (props.type) {
    case "document":
      return "text-blue-500";
    case "policy":
      return "text-green-500";
    case "team":
      return "text-purple-500";
    default:
      return "text-gray-500";
  }
});
</script>
