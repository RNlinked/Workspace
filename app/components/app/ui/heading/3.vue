<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  title: string;
  description?: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div :class="cn('text-sm', props.class)">
    <h3>
      {{ props.title }}
    </h3>
    <p class="text-muted">
      {{ props.description }}
    </p>
  </div>
</template>
