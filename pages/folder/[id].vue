<template>
  <FolderList :files="files!" />
</template>

<script setup lang="ts">
import { getFile } from "~/lib/api";

const { id } = useRoute().params;
const file = getFile(Number(id));
const getChidrenFiles = () => {
  return file?.children;
};
const files = getChidrenFiles();
definePageMeta({
  layout: "dashboard",
});
</script>
