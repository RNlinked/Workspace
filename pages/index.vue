<script setup lang="ts">
import HomeView from "~/components/dashboard/HomeView.vue";
import { files } from "~/lib/constants";
</script>

<template>
  <MetaTags title="Home" description="Welcome to your workspace home page" />
  <HomeView />
  <!-- <FolderList :files="files" /> -->
</template>
