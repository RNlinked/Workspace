<template>
  <input v-bind="$attrs" v-model="model" class="input w-full" :class="class" />
</template>

<script setup>
defineProps({
  class: { type: String, default: "" },
});

const model = defineModel();
</script>
