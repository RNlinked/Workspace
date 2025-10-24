<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div>
    <h1 class="font-semibold text-4xl">
      {{ props.title }}
    </h1>
    <p class="text-muted">
      {{ props.description }}
    </p>
  </div>
</template>
