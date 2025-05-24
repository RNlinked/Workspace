<template>
  <label
    v-bind="$attrs"
    :for="labelFor"
    class="block text-left text-sm leading-6"
    :class="class"
  >
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps({
  labelFor: String,
  class: { type: String, default: "" },
});
</script>
