<template>
  <div v-bind="$attrs">
    <FormLabel :labelFor="name">{{ label }}</FormLabel>
    <FormInput
      v-model="model"
      :class="inputClass"
      :type="type"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :autocomplete="autoComplete"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  name: String,
  type: String,
  required: Boolean,
  autoComplete: String,
  placeholder: String,
  inputClass: String,
  labelClass: String,
  errorMessage: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>
