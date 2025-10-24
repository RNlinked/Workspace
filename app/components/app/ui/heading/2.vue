<script setup lang="ts">
const props = defineProps<{
  title: string;
  description?: string;
}>();
</script>

<template>
  <div>
    <h3 class="font-medium text-lg">
      {{ props.title }}
    </h3>
    <p class="text-muted">
      {{ props.description }}
    </p>
  </div>
</template>
